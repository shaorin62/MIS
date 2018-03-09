CREATE OR REPLACE PACKAGE BODY UWZ."PKG_TMMC0020" AS

    /******************************************************************************
    *   NAME:       PKG_TMMC0020
    *   PURPOSE:    조직도 생성
    *
    *   REVISIONS:
    *   Ver        Date        Author           Description
    *   ---------  ----------  ---------------  ------------------------------------
    *   1.0        2016-06-14             1. Created this package.
    ******************************************************************************/
    /*******************************************************************************
        작  성  자 : 김춘호
        작  성  일 : 2016-06-14
        내      용 : 조직도 생성
    ********************************************************************************/
    PROCEDURE SP_TMMC0020_PROC01 (
         iUPDT_USID IN TM_DEPORG.UPDT_USID%TYPE   --수정자
        ,iSTDS_DATE IN TM_DEPORG.STDS_DATE%TYPE   --기준일
    ) AS
        
    BEGIN  
 
        /*==============================================================================
          " ORA-01407: NULL로 ("UWZ"."TM_DEPORG"."STDS_DATE")을 갱신할 수 없습니다" 오류 발생 시 처리 방법
          ALTER TABLE TM_DEPORG MODIFY CONSTRAINT RL_TM_DEPTXM_TM_DEPTXM_FK01 DISABLE;
          -- Constraint RL_TM_DEPTXM_TM_DEPTXM_FK01 (TM_DEPORG.STDS_DATE, UPPR_DTCD <-> STDS_DATE, DEPT_CODE) 을 Disable 시킴.
        *=============================================================================*/
        DELETE FROM TM_DEPORG   /* [조직도] */
        WHERE STDS_DATE >= iSTDS_DATE
        ;
        
        FOR CUR_DEPT IN (
            SELECT DISTINCT STDS_DATE
              FROM TM_DEPHSL 
             WHERE STDS_DATE >= iSTDS_DATE
             ORDER BY STDS_DATE  
        )
        LOOP
        
            INSERT INTO TM_DEPORG (
                        STDS_DATE   /*기준일*/
                       ,DEPT_CODE   /*부서코드*/
                       ,DEPT_NAME   /*부서명*/
                       ,ENGL_DTNM   /*영문부서명*/
                       ,ABBR_DTNM   /*약어부서명*/
                       ,DTGN_CODE   /*부서구분코드*/
                       ,DTGP_CODE   /*부서그룹코드*/
                       ,ENFC_CODE   /*사업장코드*/
                       ,UPPR_DTCD   /*상위부서코드*/
                       ,SORT_ORDR   /*정렬순서*/
                       ,SECT_YSNO   /*소속여부*/ 
                       ,SECT_CODE   /*소속코드*/
                       ,SECT_NAME   /*소속명*/
                       ,DEPT_FCOD   /*부서전체코드*/
                       ,DEPT_THNM   /*부서전체명*/
                       ,DEPT_LEVL
                       ,INST_USID   /*입력작업자*/
                       ,INST_DATE   /*입력일시*/
                       ,UPDT_USID   /*수정작업자*/
                       ,UPDT_DATE   /*수정일시*/
            )
    
            SELECT  CUR_DEPT.STDS_DATE AS STDS_DATE
                ,   A.DEPT_CODE   --부서코드
                ,      A.DEPT_NAME   --부서명
                ,      A.ENGL_DTNM   --영문부서명
                ,      A.ABBR_DTNM   --약어부서명
                ,      A.DTGN_CODE   --부서구분코드
                ,     A.DTGP_CODE   --부서그룹코드
                ,      A.ENFC_CODE   --사업장코드
                ,      A.UPPR_DTCD   --상위부서코드
                ,      A.SORT_ORDR   --정렬순서
                ,   A.SECT_YSNO   --소속여부 
                ,      SUBSTR(B.SECT_CODE, LENGTH(B.SECT_CODE) - 5) AS SECT_CODE
                ,      SF_GET_DEPTNAME(SUBSTR(B.SECT_CODE, LENGTH(B.SECT_CODE) - 5)) AS SECT_NAME
                ,      B.DEPT_FCOD
                ,      SUBSTR(RTRIM(B.DEPT_THNM),INSTR(B.DEPT_THNM, SF_GET_DEPTNAME(SUBSTR(B.SECT_CODE, LENGTH(B.SECT_CODE) - 5)) ),999) AS DEPT_THNM
                ,      B.DEPT_LEVL AS DEPT_LEVL
                ,   iUPDT_USID
                ,   SYSDATE
                ,   iUPDT_USID
                ,   SYSDATE
          FROM ( SELECT *
                 FROM (
                     SELECT A.*
                         ,  ROW_NUMBER() OVER (PARTITION BY DEPT_CODE ORDER BY A.STDS_DATE DESC) AS RNUM
                     FROM TM_DEPHSL A
                    WHERE A.STDS_DATE <= CUR_DEPT.STDS_DATE
                 ) X
                 WHERE    X.RNUM = 1
          ) A
          INNER JOIN (
                SELECT  A.DEPT_CODE   --부서코드
                       ,TO_CHAR(TO_NUMBER(REPLACE(SYS_CONNECT_BY_PATH(B.ROWN, ','),',','')))  AS DEPT_FCOD
                       ,REPLACE(SUBSTR(SYS_CONNECT_BY_PATH(A.DEPT_NAME,'^'),2),'^',' ') AS DEPT_THNM
                       ,REPLACE(SYS_CONNECT_BY_PATH(CASE WHEN A.SECT_YSNO = '1' THEN A.DEPT_CODE ELSE TO_NCHAR('') END, ','),',','') AS SECT_CODE
                       ,LEVEL AS DEPT_LEVL       
                  FROM ( SELECT *
                           FROM (
                               SELECT A.*
                                   ,  ROW_NUMBER() OVER (PARTITION BY DEPT_CODE ORDER BY A.STDS_DATE DESC) AS RNUM
                               FROM TM_DEPHSL A
                              WHERE A.STDS_DATE <= CUR_DEPT.STDS_DATE
                           ) X
                           WHERE    X.RNUM = 1
                    ) A
                  INNER JOIN (
                      SELECT DEPT_CODE
                            ,LPAD(ROW_NUMBER() OVER(PARTITION BY UPPR_DTCD ORDER BY SORT_ORDR),3,'0') AS ROWN
                            ,CASE WHEN SECT_YSNO = '1' THEN DEPT_CODE ELSE TO_NCHAR(' ') END AS SECT_CODE
                            ,CASE WHEN SECT_YSNO = '1' THEN DEPT_NAME ELSE TO_NCHAR(' ') END AS SECT_NAME
                        FROM ( SELECT *
                           FROM ( 
                               SELECT A.*
                                   ,  ROW_NUMBER() OVER (PARTITION BY DEPT_CODE ORDER BY A.STDS_DATE DESC) AS RNUM
                               FROM TM_DEPHSL A
                              WHERE A.STDS_DATE <= CUR_DEPT.STDS_DATE
                           ) X
                           WHERE    X.RNUM = 1
                    ) Z
                  ) B
                  ON A.DEPT_CODE = B.DEPT_CODE
                  START WITH A.UPPR_DTCD IS NULL
                  CONNECT BY PRIOR A.DEPT_CODE = A.UPPR_DTCD 
          ) B
          ON A.DEPT_CODE = B.DEPT_CODE
          ;
          
             UPDATE TM_DEPTXM A
                SET REGR_DATE
                  = (SELECT CASE WHEN B.DTCH_CODE = '0' THEN B.STDS_DATE ELSE A.REGR_DATE END
                       FROM TM_DEPHSL B
                      WHERE A.DEPT_CODE = B.DEPT_CODE
                        AND B.STDS_DATE = CUR_DEPT.STDS_DATE)
              WHERE DEPT_CODE IN (SELECT DEPT_CODE
                             FROM TM_DEPHSL A
                            WHERE STDS_DATE = CUR_DEPT.STDS_DATE);
          
        END LOOP;
        
        UPDATE TM_DEPTXM A
           SET (DEPT_NAME, ENGL_DTNM, ABBR_DTNM, DTGN_CODE, DTGP_CODE, ENFC_CODE, UPPR_DTCD, SORT_ORDR, SECT_YSNO, REGR_DATE)
             = (SELECT B.DEPT_NAME, B.ENGL_DTNM, B.ABBR_DTNM, B.DTGN_CODE, B.DTGP_CODE, B.ENFC_CODE, B.UPPR_DTCD, B.SORT_ORDR, B.SECT_YSNO, CASE WHEN B.DTCH_CODE = '0' THEN B.STDS_DATE ELSE A.REGR_DATE END
                  FROM TM_DEPHSL B
                 WHERE A.DEPT_CODE = B.DEPT_CODE
                   AND B.STDS_DATE = (SELECT MAX(STDS_DATE) FROM TM_DEPHSL WHERE DEPT_CODE = B.DEPT_CODE AND STDS_DATE <= TO_CHAR(SYSDATE, 'YYYYMMDD'))
               )
         WHERE DEPT_CODE IN (SELECT DEPT_CODE
                               FROM TM_DEPHSL A
                              WHERE STDS_DATE = (SELECT MAX(STDS_DATE) FROM TM_DEPHSL WHERE DEPT_CODE = A.DEPT_CODE AND STDS_DATE <= TO_CHAR(SYSDATE, 'YYYYMMDD')));
        
    END;

END PKG_TMMC0020;
/