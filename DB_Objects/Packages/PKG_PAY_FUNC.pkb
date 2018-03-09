create or replace PACKAGE BODY     "PKG_PAY_FUNC" AS
 
    /*******************************************************************************
    작  성  자 : 김춘호
    작  성  일 : 2014.01.25
    내      용 : 급여계산함수
   ********************************************************************************/

    /**********************************************
       기본급
    **********************************************/
    FUNCTION SF_기본급 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
        SELECT NVL(BSLY_AMOT,0)   --기본급
          INTO rtnVALUE
          FROM PY_REGSAL A
         WHERE A.EMPL_NUMB = iEMPL_NUMB
           AND A.STDS_DATE||LPAD(A.SRAL_NUMB,4,'0') = (
                                                        SELECT MAX(Z.STDS_DATE||LPAD(Z.SRAL_NUMB,4,'0')) 
                                                          FROM PY_REGSAL Z
                                                         WHERE Z.EMPL_NUMB = A.EMPL_NUMB
                                                           AND Z.STDS_DATE <= iWAGE_YMTH || '31'
                                                       )
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;

    /**********************************************
       연장수당
    **********************************************/
    FUNCTION SF_연장수당 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
        SELECT NVL(BSL1_AMOT,0) --시간외수당
          INTO rtnVALUE
          FROM PY_REGSAL A
         WHERE A.EMPL_NUMB = iEMPL_NUMB
           AND A.STDS_DATE||LPAD(A.SRAL_NUMB,4,'0') = (
                                                        SELECT MAX(Z.STDS_DATE||LPAD(Z.SRAL_NUMB,4,'0')) 
                                                          FROM PY_REGSAL Z
                                                         WHERE Z.EMPL_NUMB = A.EMPL_NUMB
                                                           AND Z.STDS_DATE <= iWAGE_YMTH || '31'
                                                       )

          ;         
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;

    /**********************************************
       임원상여
    **********************************************/
    FUNCTION SF_임원상여 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
        SELECT NVL(BSL2_AMOT,0) --임원상여
          INTO rtnVALUE
          FROM PY_REGSAL A
         WHERE A.EMPL_NUMB = iEMPL_NUMB
           AND A.STDS_DATE||LPAD(A.SRAL_NUMB,4,'0') = (
                                                        SELECT MAX(Z.STDS_DATE||LPAD(Z.SRAL_NUMB,4,'0')) 
                                                          FROM PY_REGSAL Z
                                                         WHERE Z.EMPL_NUMB = A.EMPL_NUMB
                                                           AND Z.STDS_DATE <= iWAGE_YMTH || '31'
                                                       )

          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;    

    /**********************************************
       특별상여금
    **********************************************/
    FUNCTION SF_특별상여지급율 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
      
      vENCO_DATE  HR_MASTXM.ENCO_DATE%TYPE;
    BEGIN
      rtnVALUE := 0;  
      BEGIN
        
        --입사일조회
        SELECT ENCO_DATE
          INTO vENCO_DATE
          FROM HR_MASTXM A
         WHERE EMPL_NUMB = iEMPL_NUMB
        ;
         
        --상여지급율 조회
        SELECT BONU_RATE  --상여율
          INTO rtnVALUE
          FROM PY_BONBRT A  --[상여기준]
         WHERE A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE
           AND A.STDS_DATE = ( SELECT MAX(Z.STDS_DATE)
                                 FROM PY_BONBRT Z
                                WHERE Z.PAYX_DATE = A.PAYX_DATE
                                  AND Z.WAGE_CODE = A.WAGE_CODE
                                  AND Z.STDS_DATE <= vENCO_DATE
                             )
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;      
    /**********************************************
       연봉월액
    **********************************************/
    FUNCTION SF_연봉월액 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
        SELECT
            NVL(BSLY_AMOT,0) INTO rtnVALUE
          FROM PY_REGSAL A
         WHERE A.EMPL_NUMB = iEMPL_NUMB
           AND A.STDS_DATE = (
            SELECT MAX(STDS_DATE) FROM PY_REGSAL
             WHERE EMPL_NUMB = A.EMPL_NUMB
               AND STDS_DATE <= iWAGE_YMTH || '31'
            )
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;
    
--    /**********************************************
--       직급별호봉급 
--    **********************************************/
--    FUNCTION SF_기본급
--    RETURN VARCHAR2 AS 
--      rtnVALUE VARCHAR2(4000); 
--    BEGIN
--      rtnVALUE := 0;  
--      BEGIN
--                
--        SELECT
--          NVL(BSL3_AMOT,0) INTO rtnVALUE
--        FROM PY_GBHOBO A
--        WHERE A.STDS_YMTH = (
--            SELECT MAX(STDS_YMTH) FROM PY_GBHOBO
--            WHERE STDS_YMTH <= iWAGE_YMTH
--          )
--          AND CPOS_CODE = g_CPOS_CODE
--          AND PSTP_CODE = g_PSTP_CODE
--          ;
--     
--      EXCEPTION   
--          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
--      END; 
--      RETURN rtnVALUE;
--    END;
--    
--    /**********************************************
--       2012년호봉급
--    **********************************************/
--    FUNCTION SF_2012년호봉급
--    RETURN VARCHAR2 AS 
--      rtnVALUE VARCHAR2(4000); 
--    BEGIN
--      rtnVALUE := 0;  
--      
--      BEGIN
--                
--        SELECT
--          NVL(BSL1_AMOT,0) INTO rtnVALUE
--        FROM PY_GBHOBO A
--        WHERE A.STDS_YMTH = (
--            SELECT MAX(STDS_YMTH) FROM PY_GBHOBO
--            WHERE STDS_YMTH <= '201212'
--          )
--          AND CPOS_CODE = (SELECT CPOS_CODE FROM TABLE(SF_HR_MASTXM(g_EMPL_NUMB, '20121231')))
--          AND PSTP_CODE = (SELECT PSTP_CODE FROM TABLE(SF_HR_MASTXM(g_EMPL_NUMB, '20121231')))
--          ;
--     
--      EXCEPTION   
--          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
--      END; 
--      RETURN rtnVALUE;
--    END;
--    
--    
    /**********************************************
       급여월
    **********************************************/
    FUNCTION SF_급여월 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS     
    BEGIN
        RETURN '''' || SUBSTR(iWAGE_YMTH,5,2) || '''';
    END;
    
    /**********************************************
       소득세  
    **********************************************/
    FUNCTION SF_소득세 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS
        rtnVALUE VARCHAR2(4000); 
        v_FADT_NOPS INT;
        
        v_MIN_AMT NUMBER(15,0);
        v_MAX_AMT NUMBER(15,0);
        
        v_TAX_PAYCNT INT;
        v_TAX_PAYAMT NUMBER(15,0);
        v_TAX_PAYTAX NUMBER(15,0);
        v_TAX_RATAL NUMBER(15,0);
        
    BEGIN
        rtnVALUE := 0;  
        --RAISE_APPLICATION_ERROR(-20000, '#1)'||g_TAX_INMON1||':'||g_TAX_INMON2); 
        IF g_TAX_INMON1 != g_TAX_INMON2 THEN 
          
            SELECT COUNT(PAYX_MONT)
                 , SUM(PAYX_AMOT)
                 , SUM(PAYX_TAX)
              INTO v_TAX_PAYCNT, v_TAX_PAYAMT, v_TAX_PAYTAX
              FROM (
                    SELECT SUBSTR(A.PAYX_DATE,1,6) AS PAYX_MONT
                         , SUM(CASE WHEN B.EXPD_CODE LIKE 'A%' THEN B.EXPD_AMOT ELSE 0 END)- NVL(SUM(B.NTAX_INCM),0) AS PAYX_AMOT
                         , SUM(CASE WHEN B.EXPD_CODE = 'D2000' THEN B.EXPD_AMOT ELSE 0 END) AS PAYX_TAX  --기납부세액          
                      FROM PY_PMMAST A
                            INNER JOIN PY_PMDETL B
                                    ON A.PAYX_DATE = B.PAYX_DATE
                                   AND A.WAGE_CODE = B.WAGE_CODE
                                   AND A.EMPL_NUMB = B.EMPL_NUMB                
                     WHERE SUBSTR(A.PAYX_DATE,1,6) BETWEEN g_TAX_INMON1 AND g_TAX_INMON2
                       AND A.EMPL_NUMB = iEMPL_NUMB
                    GROUP BY SUBSTR(A.PAYX_DATE,1,6)
                
                --2016-11-01 LYG 농심기획 기타소득 적용
                UNION ALL
                SELECT SUBSTR(A.PAYX_DATE, 1,6) AS PAYX_MONT
                     , SUM( NVL(TAP1_AMOT,0) + NVL(TAP2_AMOT,0) + NVL(TAP3_AMOT,0)) AS PAY_AMOT
                     , SUM(NVL(INCM_TAXX,0)) AS PAYX_TAX  --기납부세액
                  FROM PY_INCOME A            
                 WHERE A.EMPL_NUMB = iEMPL_NUMB
                   AND SUBSTR(A.PAYX_DATE, 1, 6) BETWEEN g_TAX_INMON1 AND g_TAX_INMON2            
                GROUP BY SUBSTR(A.PAYX_DATE, 1,6)
            );   
        ELSE
            SELECT 1
                 , SUM(PAYX_AMOT)
                 , 0
              INTO v_TAX_PAYCNT, v_TAX_PAYAMT, v_TAX_PAYTAX
              FROM (
                    SELECT SUM(CASE WHEN B.EXPD_CODE LIKE 'A%' THEN B.EXPD_AMOT ELSE 0 END) AS PAYX_AMOT            
                      FROM PY_PMMAST A
                            INNER JOIN PY_PMDETL B
                                    ON A.PAYX_DATE = B.PAYX_DATE
                                   AND A.WAGE_CODE = B.WAGE_CODE
                                   AND A.EMPL_NUMB = B.EMPL_NUMB                
                     WHERE A.PAYX_DATE = iPAYX_DATE
                       AND A.WAGE_CODE = iWAGE_CODE
                       AND A.EMPL_NUMB = iEMPL_NUMB
                
                    --2016-11-01 LYG 농심기획 기타소득 적용
                    UNION ALL
                    SELECT SUM( (NVL(TAP1_AMOT,0) + NVL(TAP2_AMOT,0) + NVL(TAP3_AMOT,0)) ) AS PAY_AMOT           
                      FROM PY_INCOME A            
                     WHERE A.PAYX_DATE = iPAYX_DATE
                       AND A.WAGE_CODE = iWAGE_CODE
                       AND A.EMPL_NUMB = iEMPL_NUMB
              ); 
        
        END IF;
          
        --월평균소득액
        v_TAX_PAYAMT := v_TAX_PAYAMT / v_TAX_PAYCNT;
        --RAISE_APPLICATION_ERROR(-20000, '#2)'||v_TAX_PAYAMT); 
        --과표
        v_TAX_RATAL := TRUNC(CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN 10000000 ELSE v_TAX_PAYAMT END/1000,0);    
        
        --간이세액조견표에서 소득세 구하기
  --      공제대상 가족 중 20세 이하의 자녀가 있는 경우
  --        가. 공제대상가족 중 20세 이하 자녀가 2명 이상인 경우의 세액은 아래의 산식에 따른 「공제     대상가족의 수」에 해당하는 금액으로 함
  --      「공제대상가족의 수」 = 실제 공제대상가족의 수 + (20세 이하 자녀의 수 )
        SELECT FADT_NOPS + MACN_NOPS
          INTO v_FADT_NOPS
          FROM PY_PMMAST 
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
           AND EMPL_NUMB = iEMPL_NUMB;
           
           
    SELECT Min(YEA_MORE_AMT)
      INTO v_MIN_AMT
      FROM YEA_SIPLTX
     WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                            WHERE YEA_STD_YYMM<=SUBSTR(iPAYX_DATE,1,6));

    SELECT max(YEA_LESS_AMT)
      INTO v_MAX_AMT
      FROM YEA_SIPLTX
     WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                            WHERE YEA_STD_YYMM<=SUBSTR(iPAYX_DATE,1,6));
                            
        --RAISE_APPLICATION_ERROR(-20000, '#3)'||v_FADT_NOPS||':'||v_TAX_RATAL);      
        IF v_FADT_NOPS = 1 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL01_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL01_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS = 2 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL02_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL02_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS = 3 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL03_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL03_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS = 4  THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL04_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL04_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS = 5 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL05_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL05_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS = 6 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL06_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL06_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS = 7 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL07_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL07_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS = 8 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL08_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL08_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS = 9 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL09_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL09_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS = 10 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL10_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL10_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS = 11 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT YEA_NORMAL11_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT YEA_NORMAL11_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;

        ELSIF v_FADT_NOPS > 11 THEN
           IF v_TAX_RATAL < v_MIN_AMT THEN
            rtnVALUE := 0;
           ELSIF v_TAX_RATAL >= v_MAX_AMT THEN
            BEGIN
            SELECT (YEA_NORMAL11_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END)
                 - ( ( (YEA_NORMAL10_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END)
                    - (YEA_NORMAL11_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END)
                  ) *  (v_FADT_NOPS - 11) )
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT = v_MAX_AMT;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          ELSE
             BEGIN
            SELECT (YEA_NORMAL11_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END)
                 - ( ( (YEA_NORMAL10_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END)
                    - (YEA_NORMAL11_AMT + CASE WHEN SIGN(v_TAX_PAYAMT - 10000000) = 1 THEN LEAST(v_TAX_PAYAMT - 10000000, 4000000) * 0.98 * 0.35 + GREATEST(v_TAX_PAYAMT - 14000000, 0) * 0.98 * 0.38 ELSE 0 END)
                  ) *  (v_FADT_NOPS - 11) )
                 , TO_CHAR(YEA_MORE_AMT) || '~' || TO_CHAR(YEA_LESS_AMT)
              INTO rtnVALUE, g_INCM_SETN
              FROM YEA_SIPLTX
             WHERE YEA_STD_YYMM = (SELECT MAX(YEA_STD_YYMM) FROM YEA_SIPLTX
                                    WHERE YEA_STD_YYMM<=iWAGE_YMTH)
               AND YEA_MORE_AMT <= v_TAX_RATAL
               AND YEA_LESS_AMT > v_TAX_RATAL;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN rtnVALUE := 0;
            END;
          END IF;
  
        END IF;
        --RAISE_APPLICATION_ERROR(-20000, '#4)'||v_TAX_PAYTAX); 
        rtnVALUE := rtnVALUE * v_TAX_PAYCNT - v_TAX_PAYTAX;
    
        RETURN rtnVALUE;

    END;    
    
    /**********************************************
       세액적용율
    **********************************************/
    FUNCTION SF_세액적용율 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
        rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
              
            SELECT NVL(A.AITD_RATE,0)
              INTO rtnVALUE
              FROM PY_PMMAST A
             WHERE A.PAYX_DATE = iPAYX_DATE
               AND A.WAGE_CODE = iWAGE_CODE
               AND A.EMPL_NUMB = iEMPL_NUMB;  
      
            EXCEPTION   
              WHEN NO_DATA_FOUND THEN rtnVALUE:=1;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       국민연금
    **********************************************/
    FUNCTION SF_국민연금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
      rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
              
            SELECT NVL(A.NOTC_AMOT,0)
              INTO rtnVALUE
              FROM PY_NPSXDE A
             WHERE A.STDS_YMTH = iWAGE_YMTH
               AND A.EMPL_NUMB = iEMPL_NUMB
               AND A.ISTY_CODE = '01';  
      
            EXCEPTION   
              WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       국민연금미수금
    **********************************************/
    FUNCTION SF_국민연금미수금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
      rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
              
            SELECT NVL(A.NOTC_AMOT,0)
              INTO rtnVALUE
              FROM PY_NPSXDE A
             WHERE A.STDS_YMTH = iWAGE_YMTH
               AND A.EMPL_NUMB = iEMPL_NUMB
               AND A.ISTY_CODE = '03';  
      
            EXCEPTION   
              WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       국민연금환급금
    **********************************************/
    FUNCTION SF_국민연금환급금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
      rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
              
            SELECT NVL(A.NOTC_AMOT,0)
              INTO rtnVALUE
              FROM PY_NPSXDE A
             WHERE A.STDS_YMTH = iWAGE_YMTH
               AND A.EMPL_NUMB = iEMPL_NUMB
               AND A.ISTY_CODE = '02';  
      
            EXCEPTION   
              WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       건강보험
    **********************************************/
    FUNCTION SF_건강보험 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
      rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
          
            SELECT NVL(A.HIDI_AMOT,0)
              INTO rtnVALUE
              FROM PY_NHICDE A
            WHERE A.STDS_YMTH = iWAGE_YMTH
              AND A.EMPL_NUMB = iEMPL_NUMB
              AND A.ISTY_CODE = '01';
  
          EXCEPTION   
            WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       건강보험미수금
    **********************************************/
    FUNCTION SF_건강보험미수금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
      rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
          
            SELECT NVL(A.HIDI_AMOT,0)
              INTO rtnVALUE
              FROM PY_NHICDE A
            WHERE A.STDS_YMTH = iWAGE_YMTH
              AND A.EMPL_NUMB = iEMPL_NUMB
              AND A.ISTY_CODE = '03';
  
          EXCEPTION   
            WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       건강보험환급금
    **********************************************/
    FUNCTION SF_건강보험환급금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
      rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
          
            SELECT NVL(A.HIDI_AMOT,0)
              INTO rtnVALUE
              FROM PY_NHICDE A
            WHERE A.STDS_YMTH = iWAGE_YMTH
              AND A.EMPL_NUMB = iEMPL_NUMB
              AND A.ISTY_CODE = '02';
  
          EXCEPTION   
            WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       노인장기요양보험
    **********************************************/
    FUNCTION SF_노인장기요양보험 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
      rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
            
            SELECT NVL(A.RICP_AMOT,0)
              INTO rtnVALUE
              FROM PY_NHICDE A
             WHERE A.STDS_YMTH = iWAGE_YMTH
               AND A.EMPL_NUMB = iEMPL_NUMB
               AND A.ISTY_CODE = '01';
          
          EXCEPTION   
            WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       노인장기요양미수금
    **********************************************/
    FUNCTION SF_노인장기요양미수금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
      rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
            
            SELECT NVL(A.RICP_AMOT,0)
              INTO rtnVALUE
              FROM PY_NHICDE A
             WHERE A.STDS_YMTH = iWAGE_YMTH
               AND A.EMPL_NUMB = iEMPL_NUMB
               AND A.ISTY_CODE = '03';
          
          EXCEPTION   
            WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       노인장기요양환급금
    **********************************************/
    FUNCTION SF_노인장기요양환급금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
      rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
            
            SELECT NVL(A.RICP_AMOT,0)
              INTO rtnVALUE
              FROM PY_NHICDE A
             WHERE A.STDS_YMTH = iWAGE_YMTH
               AND A.EMPL_NUMB = iEMPL_NUMB
               AND A.ISTY_CODE = '02';
          
          EXCEPTION   
            WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       건강보험정산
    **********************************************/
    FUNCTION SF_건강보험정산 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
      rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
                  
          SELECT NVL(A.HINC_AMOT,0) + NVL(A.REPC_AMOT,0)
            INTO rtnVALUE
            FROM PY_NHICAD A
           WHERE A.PAYX_DATE = iPAYX_DATE
             AND A.WAGE_CODE = iWAGE_CODE
             AND A.EMPL_NUMB = iEMPL_NUMB                    
          ;  
          EXCEPTION   
            WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
--    /**********************************************
--       고용보험대상
--    **********************************************/
--    FUNCTION SF_고용보험대상
--    RETURN VARCHAR2 AS
--      rtnVALUE VARCHAR2(4000);
--    BEGIN
--
--      BEGIN
--
--          SELECT
--                 COUNT(*) INTO rtnVALUE
--          FROM HR_MASTXM A
--          WHERE A.EMPL_NUMB = g_EMPL_NUMB
--            AND EMPL_BIRT
--              --> TO_CHAR(ADD_MONTHS(TO_DATE(iWAGE_YMTH||'01','YYYYMMDD'),-780),'YYYYMMDD')  --65세미만
--              > TO_CHAR(ADD_MONTHS(TO_DATE(g_ENCO_DATE,'YYYYMMDD'),-780),'YYYYMMDD')  --65세미만(입사일기준으로 변경)
--          ;     
--
--        EXCEPTION
--          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
--      END;
--
--      RETURN rtnVALUE;
--
--    END;    
--    
--    /**********************************************
--       과세총액
--    **********************************************/
--    FUNCTION SF_과세총액
--    RETURN VARCHAR2 AS
--      rtnVALUE VARCHAR2(4000);
--    BEGIN
--
--      BEGIN
--            --기소득액은 정기급여시에만 과세금액으로 포함시킨다.
--        SELECT
--          NVL(SUM(PAY_AMOT),0)
--          INTO rtnVALUE
--        FROM (
--          SELECT
--             SUM(CASE WHEN B.EXPD_CODE LIKE 'A%' THEN B.EXPD_AMOT ELSE 0 END) AS PAY_AMOT
--             -- - NVL(SUM(B.NTAX_INCM),0) 
--          FROM PY_PMMAST A
--            INNER JOIN PY_PMDETL B
--              ON A.PAYX_DATE = B.PAYX_DATE
--                AND A.WAGE_CODE = B.WAGE_CODE
--                AND A.EMPL_NUMB = B.EMPL_NUMB
--          WHERE A.PAYX_DATE = g_PAYX_DATE
--            AND A.WAGE_CODE = g_WAGE_CODE
--            AND A.EMPL_NUMB = g_EMPL_NUMB
--
--          UNION ALL
--          --기소득
--          SELECT PAY_AMOT
--              FROM
--              (
--                  SELECT
--                     CASE WHEN g_WAGP_CODE = '1000' THEN g_WAGE_CODE
--                    ELSE NULL
--               END AS WAGE_CODE
--              ,SUM(NVL(TAP1_AMOT,0) + NVL(TAP2_AMOT,0) + NVL(TAP3_AMOT,0)) AS PAY_AMOT
--            FROM PY_INCOME A
--            WHERE A.EMPL_NUMB = g_EMPL_NUMB
--                AND SUBSTR(A.PAYX_DATE, 1, 6) = iWAGE_YMTH
--                 --AND SF_GET_REFXFILD('INDN_CODE',A.INDN_CODE,'1') = '1'
--              )
--          WHERE WAGE_CODE = g_WAGE_CODE
--        );
--
--        EXCEPTION
--          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
--      END;
--      RETURN rtnVALUE;
--
--    END;
--    
--    /**********************************************
--       지급공제구분
--    **********************************************/
--    FUNCTION SF_지급공제구분 (
--        iBGIN_DATE IN PY_ALDEYN.BGIN_DATE%TYPE
--    )
--    RETURN VARCHAR2 AS    
--      rtnVALUE VARCHAR2(4000);
--    BEGIN  
--        rtnVALUE := '';
--        BEGIN
--            
--            SELECT 
--                '''' || NVL(PDGB_CODE,' ') || '''' INTO rtnVALUE
--            FROM PY_ALDEYN
--            WHERE EMPL_NUMB = g_EMPL_NUMB
--              AND EXPD_CODE = g_EXPD_CODE
--              AND BGIN_DATE =  iBGIN_DATE;
--            
--        EXCEPTION   
--            WHEN NO_DATA_FOUND THEN rtnVALUE:=''' ''';  
--        END;
--        
--        RETURN rtnVALUE;
--      
--    END;
--    
    /**********************************************
       지급공제금액
    **********************************************/
    FUNCTION SF_지급공제금액 (
        iBGIN_DATE IN PY_ALDEYN.BGIN_DATE%TYPE
       ,iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
        rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
            SELECT NVL(EXPD_RAPY,0) INTO rtnVALUE 
              FROM PY_ALDEYN
             WHERE EMPL_NUMB = iEMPL_NUMB
               AND EXPD_CODE = g_EXPD_CODE
               AND BGIN_DATE = iBGIN_DATE;
              
            EXCEPTION   
              WHEN NO_DATA_FOUND THEN rtnVALUE:=0;          
            
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       지급공제일수
    **********************************************/
    FUNCTION SF_지급공제일수 (
        iBGIN_DATE IN PY_ALDEYN.BGIN_DATE%TYPE
       ,iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월   
    )
    RETURN VARCHAR2 AS    
        rtnVALUE VARCHAR2(4000);
    BEGIN  
        BEGIN
            SELECT TO_DATE(CASE WHEN ENDX_DATE IS NULL OR ENDX_DATE > TO_CHAR(LAST_DAY(TO_DATE(iWAGE_YMTH || '01','YYYYMMDD')),'YYYYMMDD') THEN UNISTR(TO_CHAR(LAST_DAY(TO_DATE(iWAGE_YMTH || '01','YYYYMMDD')),'YYYYMMDD')) ELSE ENDX_DATE END,'YYYYMMDD') 
                 - TO_DATE(CASE WHEN BGIN_DATE < iWAGE_YMTH || '01' THEN iWAGE_YMTH || '01' ELSE BGIN_DATE END,'YYYYMMDD') + 1 INTO rtnVALUE 
            FROM PY_ALDEYN
            WHERE EMPL_NUMB = iEMPL_NUMB
              AND EXPD_CODE = g_EXPD_CODE
              AND BGIN_DATE = iBGIN_DATE;
        
        EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;          
          
      END;
      RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       월일수
    **********************************************/
    FUNCTION SF_월일수(
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) 
    RETURN VARCHAR2 AS          
    BEGIN  
        
        RETURN TO_CHAR(LAST_DAY(TO_DATE(iWAGE_YMTH || '01','YYYYMMDD')),'DD');
        
    END;
    
    
    
    /**********************************************
       배우자수
    **********************************************/
    FUNCTION SF_배우자수(
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
        rtnVALUE VARCHAR2(4000);
    BEGIN  
        SELECT COUNT(*) INTO rtnVALUE
          FROM HR_FAMILY
         WHERE EMPL_NUMB = iEMPL_NUMB
           AND SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') = '3' --배우자
           AND FALP_YSNO = '1';
      
        IF rtnVALUE > 1 THEN
            rtnVALUE := 1;
        END IF;
        
        RETURN rtnVALUE;
      
    END;
    
    FUNCTION SF_부양가족수(
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS
        rtnVALUE VARCHAR2(4000);
    BEGIN
    
        SELECT COUNT(*) INTO rtnVALUE
          FROM HR_FAMILY
         WHERE EMPL_NUMB = iEMPL_NUMB
           AND FALP_YSNO = '1'
           AND (SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') != '4' OR --자녀인 경우 20세 미만 지급
               (SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') = '4'
                AND (FMLY_BIRT > TO_CHAR(ADD_MONTHS(TO_DATE(iWAGE_YMTH||'01','YYYYMMDD'),-240),'YYYYMMDD')
                 OR HALT_CODE IS NOT NULL)
             )
            )
          AND ( (SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') NOT IN ('1', '2') OR
                (SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') IN ('1', '2') AND GNDR_CODE = 'F')) OR --직계존속(남)
                (SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') IN ('1', '2') AND GNDR_CODE = 'M'
                AND (FMLY_BIRT <= TO_CHAR(ADD_MONTHS(LAST_DAY(TO_DATE(iWAGE_YMTH||'01','YYYYMMDD')),-720),'YYYYMMDD')
                 OR HALT_CODE IS NOT NULL)
             ) 
            )
          AND ( (SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') NOT IN ('1', '2') OR
                (SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') IN ('1', '2') AND GNDR_CODE = 'M')) OR --직계존속(여)
                (SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') IN ('1', '2') AND GNDR_CODE = 'F'
                AND (FMLY_BIRT <= TO_CHAR(ADD_MONTHS(LAST_DAY(TO_DATE(iWAGE_YMTH||'01','YYYYMMDD')),-660),'YYYYMMDD')
                 OR HALT_CODE IS NOT NULL)
             )
            )
        ;

      RETURN rtnVALUE;

    END;

    /**********************************************
       자녀수
    **********************************************/
    FUNCTION SF_자녀수(
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS
        rtnVALUE VARCHAR2(4000);
    BEGIN

        SELECT COUNT(*) INTO rtnVALUE
          FROM HR_FAMILY
         WHERE EMPL_NUMB = iEMPL_NUMB
           AND FALP_YSNO = '1'
           AND SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') = '4'
           AND (FMLY_BIRT > TO_CHAR(ADD_MONTHS(TO_DATE(iWAGE_YMTH ||'01','YYYYMMDD'),-240),'YYYYMMDD')
              OR HALT_CODE IS NOT NULL);

      RETURN rtnVALUE;

    END; 
    
    /**********************************************
       직책수당
    **********************************************/
    /*
    FUNCTION SF_직책수당(
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS
        rtnVALUE VARCHAR2(4000);
    BEGIN
        BEGIN
            SELECT NVL(PAYX_AMOT,0) INTO rtnVALUE
              FROM PY_DURSBS A
             WHERE A.STDS_YMTH = (
                SELECT MAX(STDS_YMTH) FROM PY_DURSBS
                WHERE STDS_YMTH <= iWAGE_YMTH 
                  AND DURS_CODE = g_DURS_CODE
              )
               AND A.DURS_CODE = g_DURS_CODE;
        EXCEPTION
            WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
        END;
        
        RETURN rtnVALUE;
    END;
    */
    /**********************************************
       학자금
    **********************************************/
    /*
    FUNCTION SF_학자금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS
        rtnVALUE VARCHAR2(4000);
    BEGIN
        BEGIN
            SELECT NVL(SUM(PAYX_AMOT),0) INTO rtnVALUE
              FROM WF_MSCAXM A
             WHERE EMPL_NUMB = iEMPL_NUMB
               AND STDS_YEAR = SUBSTR(iWAGE_YMTH,1,4);
        EXCEPTION
            WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
        END;
        
        RETURN rtnVALUE;
    END;
    */
--    
    /**********************************************
       직위
    **********************************************/
    FUNCTION SF_직위 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS      
    BEGIN      
        --RETURN '''' || SF_GET_COMMNAME('OPOS_CODE', g_OPOS_CODE) || '''';
        RETURN '''' || g_OPOS_CODE || '''';
    END;  
    
    /**********************************************
       직급
    **********************************************/
    FUNCTION SF_직급 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS      
    BEGIN      
        --RETURN '''' || SF_GET_COMMNAME('CPOS_CODE', g_CPOS_CODE) || '''';
        RETURN '''' || g_CPOS_CODE || '''';
    END; 
--    
--    
--    /**********************************************
--       지급총액
--    **********************************************/
--    FUNCTION SF_지급총액
--    RETURN VARCHAR2 AS
--      rtnVALUE VARCHAR2(4000);
--    BEGIN
--
--      BEGIN
--
--        SELECT
--           NVL(SUM(CASE WHEN A.EXPD_CODE LIKE 'A%' THEN A.EXPD_AMOT ELSE 0 END),0) INTO rtnVALUE
--        FROM PY_PMDETL A
--          LEFT OUTER JOIN PY_ALLDED B
--            ON A.EXPD_CODE = B.EXPD_CODE
--        WHERE A.PAYX_DATE = g_PAYX_DATE
--          AND A.WAGE_CODE = g_WAGE_CODE
--          AND A.EMPL_NUMB = g_EMPL_NUMB
--          ;
--
--        EXCEPTION
--          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
--      END;
--      RETURN rtnVALUE;
--
--    END;
--
--   
--    
--   
--    /**********************************************
--       공제총액
--    **********************************************/
--    FUNCTION SF_공제총액
--    RETURN VARCHAR2 AS
--      rtnVALUE VARCHAR2(4000);
--    BEGIN
--
--      BEGIN
--
--        SELECT
--           NVL(SUM(CASE WHEN A.EXPD_CODE LIKE 'D%' THEN A.EXPD_AMOT ELSE 0 END),0) INTO rtnVALUE
--        FROM PY_PMDETL A
--          LEFT OUTER JOIN PY_ALLDED B
--            ON A.EXPD_CODE = B.EXPD_CODE
--        WHERE A.PAYX_DATE = g_PAYX_DATE
--          AND A.WAGE_CODE = g_WAGE_CODE
--          AND A.EMPL_NUMB = g_EMPL_NUMB;
--
--
--        EXCEPTION
--          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
--      END;
--      RETURN rtnVALUE;
--
--    END;
--    
--    /**********************************************
--       노조가입구분 
--    **********************************************/
--    FUNCTION SF_노조가입구분
--    RETURN VARCHAR2 AS
--    BEGIN
--      RETURN '''' || g_LBJO_YSNO || '''';
--    END;
--    
--    
--        
--    /**********************************************
--       성과급지급율
--    **********************************************/
--    FUNCTION SF_성과급지급율
--    RETURN VARCHAR2 AS
--        rtnVALUE VARCHAR2(4000);
--    BEGIN
--
--        BEGIN
--
--
--          SELECT
--             NVL(A.BONU_RATE,0) INTO rtnVALUE
--          FROM PY_BONURT A
--          WHERE A.PAYX_DATE = g_PAYX_DATE
--            AND A.WAGE_CODE = g_WAGE_CODE
--            AND A.EMPL_NUMB = g_EMPL_NUMB;
--
--
--          EXCEPTION
--            WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
--        END;
--        RETURN rtnVALUE;
--
--    END;

    /**********************************************
       통상임금
    **********************************************/
    FUNCTION SF_통상임금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS
        rtnVALUE VARCHAR2(4000);
    BEGIN

        BEGIN

            SELECT NVL(SUM(A.EXPD_AMOT),0) INTO rtnVALUE
              FROM PY_PMDETL A
        INNER JOIN PY_ALLDED B
                ON A.EXPD_CODE = B.EXPD_CODE
             WHERE A.PAYX_DATE = iPAYX_DATE
               AND A.WAGE_CODE = iWAGE_CODE
               AND A.EMPL_NUMB = iEMPL_NUMB
               AND B.ODPY_YSNO = '1'
              ;

        EXCEPTION
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
        END;
        
        RETURN rtnVALUE;

    END;

    /**********************************************
       초과근무시간
    **********************************************/
    FUNCTION SF_초과근무시간 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
        rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
              
            SELECT NVL(A.OVTI_PAHR,0)
              INTO rtnVALUE
              FROM PY_PMMAST A
             WHERE A.PAYX_DATE = iPAYX_DATE
               AND A.WAGE_CODE = iWAGE_CODE
               AND A.EMPL_NUMB = iEMPL_NUMB;  
      
            EXCEPTION   
              WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       야간근무시간
    **********************************************/
    FUNCTION SF_야간근무시간 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
        rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
              
            SELECT NVL(A.NIWK_PAHR,0)
              INTO rtnVALUE
              FROM PY_PMMAST A
             WHERE A.PAYX_DATE = iPAYX_DATE
               AND A.WAGE_CODE = iWAGE_CODE
               AND A.EMPL_NUMB = iEMPL_NUMB;  
      
            EXCEPTION   
              WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    
    /**********************************************
       휴일근무시간
    **********************************************/
    FUNCTION SF_휴일근무일수 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS    
        rtnVALUE VARCHAR2(4000);
    BEGIN  
      
        BEGIN
              
            SELECT NVL(A.HOWK_DAYS,0)
              INTO rtnVALUE
              FROM PY_PMMAST A
             WHERE A.PAYX_DATE = iPAYX_DATE
               AND A.WAGE_CODE = iWAGE_CODE
               AND A.EMPL_NUMB = iEMPL_NUMB;  
      
            EXCEPTION   
              WHEN NO_DATA_FOUND THEN rtnVALUE:=0;  
        END;
        RETURN rtnVALUE;
      
    END;
    

    /**********************************************
       급여차감
    **********************************************/
    FUNCTION SF_급여차감 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS
        rtnVALUE VARCHAR2(4000);
    BEGIN

        BEGIN
            --수습계약기간내일 경우 수습월별 지급금액 및 을 조회한다,
            SELECT CASE WHEN SUBSTR(A.CNTR_BEDE,1,6) = iWAGE_YMTH AND NVL(PBN1_AMOT,0) != 0 THEN NVL(PBN1_AMOT,0) - NVL(MTPY_AMOT,0) --수급1개월차
                        WHEN TO_CHAR(ADD_MONTHS(TO_DATE(A.CNTR_BEDE,'YYYYMMDD'),1),'YYYYMM') = iWAGE_YMTH AND NVL(PBN2_AMOT,0) != 0 THEN NVL(PBN2_AMOT,0) - NVL(MTPY_AMOT,0) --수급2개월차
                        WHEN TO_CHAR(ADD_MONTHS(TO_DATE(A.CNTR_BEDE,'YYYYMMDD'),2),'YYYYMM') = iWAGE_YMTH AND NVL(PBN3_AMOT,0) != 0 THEN NVL(PBN3_AMOT,0) - NVL(MTPY_AMOT,0) --수급3개월차
                        ELSE 0 END
              INTO rtnVALUE
              FROM HR_CNTRXA A    --[근로연봉계약]
             WHERE A.EMPL_NUMB = iEMPL_NUMB
               AND iWAGE_YMTH BETWEEN SUBSTR(A.CNTR_BEDE,1,6) AND SUBSTR(A.CNTR_ENDD,1,6) --수습 계약기간내에 급여가 지급될 경우만 해당
             ;  

        EXCEPTION
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
        END;
        
        RETURN rtnVALUE;

    END;    
    

    /**********************************************
       SF_써클회비
    **********************************************/
    FUNCTION SF_써클회비 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
      
        SELECT NVL(SUM(DDUC_AMOT),0)   --써클비 합계
          INTO rtnVALUE
          FROM CW_CLUBAP A
         WHERE A.EMPL_NUMB = iEMPL_NUMB
           AND iWAGE_YMTH BETWEEN SUBSTR(REGI_DATE,1,6) AND SUBSTR(NVL(SCSS_DATE,UNISTR('99991231')),1,6)
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;

    /**********************************************
       SF_고용보험대상금액
    **********************************************/
    FUNCTION SF_고용보험대상금액 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE  VARCHAR2(4000); 
      rtnVALUE1 VARCHAR2(4000); 
    BEGIN
      rtnVALUE  := 0;  
      rtnVALUE1 := 0;  
      BEGIN
      
        SELECT NVL(SUM(EXPD_AMOT),0)  
          INTO rtnVALUE
          FROM PY_PMDETL A
         WHERE A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE
           AND A.EMPL_NUMB = iEMPL_NUMB
           AND EXISTS ( SELECT 'Y'
                          FROM PY_ALLDED Z    --[수당공제코드]
                         WHERE Z.EXPD_CODE = A.EXPD_CODE
                           AND NVL(Z.UINU_YSNO, '0') = '1'  --고용보험사용여부가 '1'인 자료만 대상
                      ) 
          ;

      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      
      BEGIN
        SELECT NVL(SUM(A.TAP1_AMOT),0)+NVL(SUM(A.TAP2_AMOT),0)+NVL(SUM(A.TAP3_AMOT),0)
          INTO rtnVALUE1
          FROM PY_INCOME A
         WHERE A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE
           AND A.EMPL_NUMB = iEMPL_NUMB
          ;
          
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE1:=0;
      END; 
      
      rtnVALUE:= rtnVALUE+rtnVALUE1;
      
      RETURN rtnVALUE;
    END;

    /**********************************************
       SF_소급금액
    **********************************************/
    FUNCTION SF_소급금액 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
      
        SELECT SUM(NVL(RTR1_AMOT,0) + NVL(RTR2_AMOT,0) + NVL(RTR3_AMOT,0))
          INTO rtnVALUE
          FROM PY_REPAYD A
         WHERE A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE
           AND A.EMPL_NUMB = iEMPL_NUMB
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 

      RETURN rtnVALUE;
    END;

    /**********************************************
       SF_보증보험금액
    **********************************************/
    FUNCTION SF_보증보험금액 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
      
        SELECT NVL(WADN_AMOT,0)  
          INTO rtnVALUE
          FROM HR_GRTINS A
         WHERE A.EMPL_NUMB = iEMPL_NUMB
           AND A.WAGE_YMTH = iWAGE_YMTH
           AND A.SRAL_NUMB = ( SELECT MAX(Z.SRAL_NUMB)
                                 FROM HR_GRTINS Z
                                WHERE Z.EMPL_NUMB = A.EMPL_NUMB
                                  AND Z.WAGE_YMTH = A.WAGE_YMTH )
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;

    /**********************************************
       SF_연차수당
    **********************************************/
    FUNCTION SF_연차수당 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
      
        SELECT NVL(AVAM_AMOT,0)  
          INTO rtnVALUE
          FROM PY_ANNUVA A
         WHERE A.EMPL_NUMB = iEMPL_NUMB
           AND A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;

    /**********************************************
       SF_연말정산소득세
    **********************************************/
    FUNCTION SF_연말정산소득세 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
      
        SELECT NVL(YEA_PRC_NUM092,0)  
          INTO rtnVALUE
          FROM YEA_YEPROC A
         WHERE A.YEA_EMP_NO  = iEMPL_NUMB
           AND A.YEA_STD_YY  = TO_NCHAR(TO_NUMBER(SUBSTR(iPAYX_DATE,1,4)) - 1)
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;    

    /**********************************************
       SF_연말정산주민세
    **********************************************/
    FUNCTION SF_연말정산주민세 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
      
        SELECT NVL(YEA_PRC_NUM093,0)  
          INTO rtnVALUE
          FROM YEA_YEPROC A
         WHERE A.YEA_EMP_NO  = iEMPL_NUMB
           AND A.YEA_STD_YY  = TO_NCHAR(TO_NUMBER(SUBSTR(iPAYX_DATE,1,4)) - 1)
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;    
 
    /**********************************************
       SF_연말정산농특세
    **********************************************/
    FUNCTION SF_연말정산농특세 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    )
    RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
    BEGIN
      rtnVALUE := 0;  
      BEGIN
      
        SELECT NVL(YEA_PRC_NUM094,0)  
          INTO rtnVALUE
          FROM YEA_YEPROC A
         WHERE A.YEA_EMP_NO  = iEMPL_NUMB
           AND A.YEA_STD_YY  = TO_NCHAR(TO_NUMBER(SUBSTR(iPAYX_DATE,1,4)) - 1)
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;    
 
    /**********************************************
       SF_퇴직전환금
    **********************************************/
    FUNCTION SF_퇴직전환금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2 AS
      rtnVALUE VARCHAR2(4000); 
      
    BEGIN      
      
      rtnVALUE := 0;  
      
      BEGIN
      
        SELECT NVL(TRRT_AMOT,0)  
          INTO rtnVALUE
          FROM PY_RTPFCN A
         WHERE A.EMPL_NUMB  = iEMPL_NUMB
           AND EXISTS ( SELECT 'Y'
                          FROM HR_MASTXM Z
                         WHERE Z.EMPL_NUMB = A.EMPL_NUMB
                           AND Z.RETR_DATE LIKE iWAGE_YMTH||'%'
                       )
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;          
 
    /**********************************************
       SF_성과상여금
    **********************************************/
    FUNCTION SF_성과상여금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2 AS 
      rtnVALUE VARCHAR2(4000); 
      
    BEGIN      
      
      rtnVALUE := 0;  
      
      BEGIN
      
        SELECT NVL(BONU_AMOT,0)  
          INTO rtnVALUE
          FROM PY_EVBONU A
         WHERE A.EMPL_NUMB = iEMPL_NUMB
           AND A.PAYX_DATE = IPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE
          ;
     
      EXCEPTION   
          WHEN NO_DATA_FOUND THEN rtnVALUE:=0;
      END; 
      RETURN rtnVALUE;
    END;     
    
END PKG_PAY_FUNC;