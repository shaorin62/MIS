CREATE OR REPLACE FUNCTION UWZ.SF_GET_BUDG_AMNT
(   iACCT_UNIT        TA_SLIPXM.ACCT_UNIT%TYPE,     --부문  
    iCSTC_CODE        TA_SLIPNT.CSTC_CODE%TYPE,     --코스트센터
    iBDSB_CODE        TA_SLIPNT.BDSB_CODE%TYPE,     --예산코드
    iBUDG_YYMM        TA_SLIPNT.BUDG_YYMM%TYPE,     --예산월
    iBUDG_GUBN        TA_SLIPNT.BUDG_GUBN%TYPE      --예산구분
) RETURN NUMBER IS

RET_VALUE    TA_SLIPNT.SLIP_AMNT%TYPE;

/******************************************************************************
   NAME    :  SF_GET_BUDG_AMNT
   PURPOSE :  예산에 배정내역
   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016-08-23             권미영              1. Created this function.

   NOTES:
   * 대상 자료가 없다면 0을 반환.
******************************************************************************/
BEGIN

    RET_VALUE := 0;
     
    BEGIN
        SELECT SUM(BUDG_AMNT)
        INTO   RET_VALUE
        FROM (
            -- 정기배정내역
            SELECT CASE WHEN SUBSTR(iBUDG_YYMM, 5, 2) <= '03' THEN NVL(A.BUDG_AT01, 0) + NVL(A.BUDG_AT02, 0) + NVL(A.BUDG_AT03, 0)
                        WHEN SUBSTR(iBUDG_YYMM, 5, 2) <= '06' THEN NVL(A.BUDG_AT04, 0) + NVL(A.BUDG_AT05, 0) + NVL(A.BUDG_AT06, 0)
                        WHEN SUBSTR(iBUDG_YYMM, 5, 2) <= '09' THEN NVL(A.BUDG_AT07, 0) + NVL(A.BUDG_AT08, 0) + NVL(A.BUDG_AT09, 0)
                        WHEN SUBSTR(iBUDG_YYMM, 5, 2) <= '12' THEN NVL(A.BUDG_AT10, 0) + NVL(A.BUDG_AT11, 0) + NVL(A.BUDG_AT12, 0)
                        ELSE 0 END AS BUDG_AMNT -- 배정금액
            FROM   TB_CPLDPT A     /* [부서별예산편성] */
            WHERE       A.ACCT_UNIT    = iACCT_UNIT    /* 회계단위 */
            AND         A.BUDG_YEAR    = SUBSTR(iBUDG_YYMM, 0, 4)          /* 예산년도 */
            AND         A.BDSB_CODE    = iBDSB_CODE    /* 예산코드 */
            AND         A.CSTC_CODE    = iCSTC_CODE  /* 코스트센터코드 */

            UNION ALL
            -- 추가예산내역
            SELECT BUDG_AMNT
            FROM   TB_CPLADD A
            WHERE  A.ACCT_UNIT    = iACCT_UNIT    /* 회계단위 */
            AND         A.BUDG_YYMM >= SUBSTR(iBUDG_YYMM, 1, 4)
                               || CASE WHEN SUBSTR(iBUDG_YYMM, 5, 2) <= '03' THEN '01'
                                       WHEN SUBSTR(iBUDG_YYMM, 5, 2) <= '06' THEN '04'
                                       WHEN SUBSTR(iBUDG_YYMM, 5, 2) <= '09' THEN '07'
                                       ELSE '10' END
            AND         A.BUDG_YYMM <= SUBSTR(iBUDG_YYMM, 1, 4)
                               || CASE WHEN SUBSTR(iBUDG_YYMM, 5, 2) <= '03' THEN '03'
                                       WHEN SUBSTR(iBUDG_YYMM, 5, 2) <= '06' THEN '06'
                                       WHEN SUBSTR(iBUDG_YYMM, 5, 2) <= '09' THEN '09'
                                       ELSE '12' END
            AND         A.BDSB_CODE    = iBDSB_CODE    /* 계정코드 */
            AND         A.CSTC_CODE    = iCSTC_CODE  /* 코스트센터코드 */
            AND         A.APPR_STAT    = 'Y'        /* 전자결재 승인완료 */
        )
        ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RET_VALUE :=  RET_VALUE;
            WHEN OTHERS THEN
                RET_VALUE :=  RET_VALUE;
    END;

    RETURN RET_VALUE;

END SF_GET_BUDG_AMNT;
/