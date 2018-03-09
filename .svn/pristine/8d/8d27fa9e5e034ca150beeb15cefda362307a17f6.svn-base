CREATE OR REPLACE FUNCTION UWZ.SF_GET_BUDG_NOTX_AMNT
(   iACCT_UNIT        TA_SLIPXM.ACCT_UNIT%TYPE,     --부문
    iCSTC_CODE        TA_SLIPNT.CSTC_CODE%TYPE,     --코스트센터
    iBDSB_CODE        TA_SLIPNT.BDSB_CODE%TYPE,     --예산코드
    iBUDG_YMST        TA_SLIPNT.BUDG_YYMM%TYPE,     --예산기간 시작  < 선택입력 >
    iBUDG_YMED        TA_SLIPNT.BUDG_YYMM%TYPE,     --예산기간 종료  < 선택입력 >
    iBUDG_GUBN        TA_SLIPNT.BUDG_GUBN%TYPE,     --예산구분      < 선택입력 >
    iSLIP_NUMB        TA_SLIPXM.SLIP_NUMB%TYPE,     --전표번호      < 선택입력 - 전표에서 조회시 자신의 금액은 빼기 위해 >
    iSLIP_LINE        TA_SLIPNT.SLIP_LINE%TYPE DEFAULT ''     --전표라인번호  < 선택입력 - 전표에서 조회시 자신의 금액은 빼기 위해 >
) RETURN NUMBER IS

RET_VALUE    TA_SLIPNT.SLIP_AMNT%TYPE;

/******************************************************************************
   NAME    :  SF_GET_BUDG_NOTX_AMNT
   PURPOSE :  예산에 대한 전표내역 사용 예산합계(미승인 자료만)
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

        SELECT  Nvl(Sum(A.SLIP_AMNT),0)
        INTO    RET_VALUE
        FROM    TA_SLIPNT A
            JOIN TA_SLIPXM B ON A.SLIP_NUMB  = B.SLIP_NUMB
        WHERE   B.ACCT_UNIT = iACCT_UNIT
        AND     A.CSTC_CODE = iCSTC_CODE
        AND     A.BDSB_CODE = iBDSB_CODE
        AND     B.SLIP_DATE BETWEEN NVL(iBUDG_YMST, '190001') || '01' AND NVL(iBUDG_YMED, '210012') || '31'
        AND     A.BUDG_GUBN = iBUDG_GUBN
        AND     A.SLIP_NUMB || A.SLIP_LINE <> NVL(iSLIP_NUMB || iSLIP_LINE, ' ')
        AND     B.APPS_CODE <> 'FA1'  --회계승인 아닌
        ;


        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RET_VALUE :=  RET_VALUE;
            WHEN OTHERS THEN
                RET_VALUE :=  RET_VALUE;

    END;

    RETURN RET_VALUE;

END SF_GET_BUDG_NOTX_AMNT; 
/

