create or replace PACKAGE BODY "PKG_PAYD0010" AS

    /*******************************************************************************
        작  성  자 : 이용관
        작  성  일 : 2016-11-08
        내      용 : 급여시뮬레이션 처리
    *********************************************************************************/
    PROCEDURE SP_PAYD0010_PROC00 (
         iUPDT_USID   IN PY_PMDCAL.UPDT_USID%TYPE   --수정자
        ,iSMUL_SEQN   IN PY_SIMUXM.SMUL_SEQN%TYPE   --시뮬레이션회차
    ) AS
        v_STDS_DATE   PY_SIMUXM.STDS_DATE%TYPE;
        
        
            v_TEMP_PAYAMT NUMBER;  /*수당공제액(일할계산)**/
            v_PAYAMT      NUMBER;  /*수당공제액**/
            v_INIT_AMOT   NUMBER;  /*수당공제액(초기금액)**/        
            
            /*급여수식 커서대체**/
            v_APLY_MODN PY_PAYEXP.APLY_MODN%TYPE;   /*적용수식**/
        v_FLAG NVARCHAR2(1);   
        v_PAYX_RATE PY_PYRATE.PAYX_RATE%TYPE;
        
            rRESULT REC_TYPE;
        
        v_INDEX1 INT;
            v_INDEX2 INT;
            v_RETURN NVARCHAR2(4000);
       
    BEGIN
        
        /* 시뮬레이션 마스터 테이블 조회**/
        BEGIN
            SELECT STDS_DATE
              INTO v_STDS_DATE
              FROM PY_SIMUXM 
             WHERE SMUL_SEQN = iSMUL_SEQN;
        EXCEPTION
            WHEN OTHERS THEN
              RAISE_APPLICATION_ERROR(-20000, '해당 회차의 자료가 없습니다.(회차:' || TO_CHAR(TO_NUMBER(SUBSTR(iSMUL_SEQN,6,4))) ||'차'); 
        END;
        
        --시뮬레이션 결과값 초기화
        UPDATE PY_SIMUXA
           SET SMB1_AMOT = 0    /*시뮬레이션이전1금액**/
             , SMB2_AMOT = 0    /*시뮬레이션이전2금액**/
             , SMB3_AMOT = 0    /*시뮬레이션이전3금액**/
             , SMA1_AMOT = 0    /*시뮬레이션이후1금액**/
             , SMA2_AMOT = 0    /*시뮬레이션이후2금액**/
             , SMA3_AMOT = 0    /*시뮬레이션이후3금액**/
             , SMC1_AMOT = 0    /*시뮬레이션인상1금액**/
             , SMC2_AMOT = 0    /*시뮬레이션인상2금액**/
             , SMC3_AMOT = 0    /*시뮬레이션인상3금액**/
             , UPDT_USID  = iUPDT_USID
             , UPDT_DATE  = SYSDATE
          WHERE SMUL_SEQN = iSMUL_SEQN;
          
          
        PKG_PAY_FUNC.g_TAX_INMON1  :=  SUBSTR(v_STDS_DATE,1,6);  
        PKG_PAY_FUNC.g_TAX_INMON2  :=  SUBSTR(v_STDS_DATE,1,6);  
        
        FOR RS IN (
          SELECT A.EMPL_NUMB    --사원번호
               , C.EXPD_CODE    --수당공제코드
               , A.PRAD_CODE    --예측조정구분코드
               , A.PRAT_CNTT    --예측조정내용
               , C.APLY_MODN    --적용수식
               , D.WOND_CODE    --원단위구분코드
               , B.WRKS_CODE   /*근무상태코드**/
               , B.WRDV_CODE   /*근무구분코드**/
               , B.CLSD_CODE   /*직원구분코드**/
               , B.DEPT_CODE   /*부서코드**/
               , B.CPOS_CODE   /*직급코드**/
               , B.PSTP_CODE   /*호봉코드**/
               , B.OPOS_CODE   /*직위코드**/
               , B.DUTY_CODE   /*직무코드**/
               , B.DURS_CODE   /*직책코드**/               
               , v_STDS_DATE    PAYX_DATE   
               , '1000' AS      WAGE_CODE 
               , SUBSTR(v_STDS_DATE,1,6)  RTBS_YMTH
            FROM PY_SIMUXA A 
                    INNER JOIN TABLE(SF_HR_MASTXM(A.EMPL_NUMB, v_STDS_DATE)) B 
                       ON A.EMPL_NUMB = B.EMPL_NUMB
                    INNER JOIN PY_PAYEXP C 
                       ON C.WAGP_CODE = '1000'        --급여그룹코드[1000 : 일반급여]
                      AND C.CLSD_CODE = B.CLSD_CODE   --직원구분코드
                      AND C.EXPD_CODE IN ( 'A0051', 'A0066', 'A0052' )
                    INNER JOIN PY_ALLDED D
                       ON C.EXPD_CODE = D.EXPD_CODE                            
           WHERE A.SMUL_SEQN = iSMUL_SEQN
             AND C.STDS_YMTH = (
                                SELECT MAX(STDS_YMTH) FROM PY_PAYEXP 
                                 WHERE WAGP_CODE  = '1000'
                                   AND STDS_YMTH  <= SUBSTR(v_STDS_DATE,1,6)
                                   AND CLSD_CODE  = B.CLSD_CODE
                               )           
          ORDER BY EMPL_NUMB, C.EXPD_CODE
        
        ) LOOP
            v_PAYAMT      := 0;
            v_INIT_AMOT   := 0;
            v_TEMP_PAYAMT := 0;                  
        

            /*발령에 따라 변경**/
            PKG_PAY_FUNC.g_WRKS_CODE := RS.WRKS_CODE;  /*근무상태코드**/
            PKG_PAY_FUNC.g_WRDV_CODE := RS.WRDV_CODE;  /*근무구분코드**/
            PKG_PAY_FUNC.g_CLSD_CODE := RS.CLSD_CODE;  /*직원구분코드**/
            PKG_PAY_FUNC.g_DEPT_CODE := RS.DEPT_CODE;  /*부서코드**/
            PKG_PAY_FUNC.g_CPOS_CODE := RS.CPOS_CODE;  /*직급코드**/
            PKG_PAY_FUNC.g_PSTP_CODE := RS.PSTP_CODE;  /*호봉코드**/
            PKG_PAY_FUNC.g_OPOS_CODE := RS.OPOS_CODE;  /*직위코드**/
            PKG_PAY_FUNC.g_DUTY_CODE := RS.DUTY_CODE;  /*직무코드**/
            PKG_PAY_FUNC.g_DURS_CODE := RS.DURS_CODE;  /*직책코드**/
            PKG_PAY_FUNC.g_EXPD_CODE := RS.EXPD_CODE;
            
            v_APLY_MODN := RS.APLY_MODN;
                                    
            v_INDEX1 := INSTR(v_APLY_MODN, '{');
            v_INDEX2 := INSTR(v_APLY_MODN, '}');        
            WHILE v_INDEX1 > 0 LOOP
                v_RETURN := SUBSTR(v_APLY_MODN, v_INDEX1 + 1, v_INDEX2 - v_INDEX1-1);
                
                BEGIN
                    SELECT EXPD_AMOT  INTO v_RETURN                  
                      FROM PY_PMDETL
                     WHERE PAYX_DATE = RS.PAYX_DATE
                       AND WAGE_CODE = RS.WAGE_CODE
                       AND EMPL_NUMB = RS.EMPL_NUMB
                       AND EXPD_CODE = (SELECT EXPD_CODE FROM PY_ALLDED WHERE EXPD_NAME = v_RETURN);
                  
                EXCEPTION
                    WHEN NO_DATA_FOUND THEN v_RETURN:=0;
                END;
                
                IF SUBSTR(v_RETURN,1,1) = '-' THEN
                  v_RETURN := '(' || v_RETURN || ')';
                END IF;
                
                v_APLY_MODN := REPLACE(v_APLY_MODN, SUBSTR(v_APLY_MODN, v_INDEX1, v_INDEX2 - v_INDEX1 + 1), v_RETURN);
                
                v_INDEX1 := INSTR(v_APLY_MODN, '{');
                v_INDEX2 := INSTR(v_APLY_MODN, '}');
                
            END LOOP;/*수당함수**/
                            
            v_INDEX1 := INSTR(v_APLY_MODN, '[');
            v_INDEX2 := INSTR(v_APLY_MODN, ']');
            --RAISE_APPLICATION_ERROR(-20000, '사원번호:' || RS.EMPL_NUMB||' v_APLY_MODN='||v_APLY_MODN||' RS.APLY_MODN='||RS.APLY_MODN||' v_INDEX1='||v_INDEX1||' v_INDEX2='||v_INDEX2);
            WHILE v_INDEX1 > 0 LOOP
        
                v_RETURN := SUBSTR(v_APLY_MODN, v_INDEX1, v_INDEX2 - v_INDEX1 + 1);            
                BEGIN  
                    v_RETURN := REPLACE(REPLACE(v_RETURN,'[',''),']','');
                    --RAISE_APPLICATION_ERROR(-20000, '사원번호:' || SUB.EMPL_NUMB||' v_RETURN='||v_RETURN);
                    IF v_RETURN LIKE '지급공제%' THEN 
                        OPEN rRESULT FOR 
                          TO_CHAR('SELECT PKG_PAY_FUNC.SF_' || v_RETURN  || ' AS RTN_VALUE FROM DUAL');
                        FETCH rRESULT INTO v_RETURN;         
                        
                    ELSE
                        --RAISE_APPLICATION_ERROR(-20000, TO_CHAR('SELECT PKG_PAY_FUNC.SF_' || v_RETURN || '(''' || iPAYX_DATE || ''', ''' || iWAGE_CODE || ''', ''' || RCAL.EMPL_NUMB || ''', ''' || SUB.RTBS_YMTH || ''')'  || ' AS RTN_VALUE FROM DUAL'));
                        OPEN rRESULT FOR 
                          TO_CHAR('SELECT PKG_PAY_FUNC.SF_' || v_RETURN || '(''' || RS.PAYX_DATE || ''', ''' || RS.WAGE_CODE || ''', ''' || RS.EMPL_NUMB || ''', ''' || RS.RTBS_YMTH || ''')'  || ' AS RTN_VALUE FROM DUAL');          
                        FETCH rRESULT INTO v_RETURN;      
                        --RAISE_APPLICATION_ERROR(-20000, v_RETURN);
                    END IF;
                EXCEPTION
                    WHEN NO_DATA_FOUND THEN v_RETURN:='0';
                END;  
              
            
                IF SUBSTR(v_RETURN,1,1) = '-' THEN
                  v_RETURN := '(' || v_RETURN || ')';
                END IF;
                
                v_APLY_MODN := REPLACE(v_APLY_MODN, SUBSTR(v_APLY_MODN, v_INDEX1, v_INDEX2 - v_INDEX1 + 1), NVL(v_RETURN,'0'));
                
                v_INDEX1 := INSTR(v_APLY_MODN, '[');
                v_INDEX2 := INSTR(v_APLY_MODN, ']');
                
            END LOOP;/*정의함수**/
                        
            OPEN rRESULT FOR
              TO_CHAR('SELECT ' || NVL(v_APLY_MODN,'0')  || ' AS PAYAMT FROM DUAL');          
            FETCH rRESULT INTO v_TEMP_PAYAMT;
            
            /*NULL제거**/
            v_TEMP_PAYAMT := NVL(TRUNC(v_TEMP_PAYAMT,0),0);

            v_PAYAMT      := v_TEMP_PAYAMT;
            v_INIT_AMOT   := v_TEMP_PAYAMT;
            
            /*
            IF (RS.EMPL_NUMB = '1999004' AND RS.EXPD_CODE = 'A0052') THEN           
                RAISE_APPLICATION_ERROR(-20000, 'v_PAYAMT='||v_PAYAMT || ', PRAD_CODE=' || RS.PRAD_CODE || ', PRAT_CNTT=' || RS.PRAT_CNTT || ', SMA2_AMOT='||( v_PAYAMT * TO_NUMBER(RS.PRAT_CNTT) / 100 ) ); 
            END IF;
            **/
            
            IF v_INIT_AMOT <> 0 THEN
                UPDATE PY_SIMUXA
                   SET SMB1_AMOT = CASE WHEN RS.EXPD_CODE = 'A0051' THEN v_PAYAMT ELSE SMB1_AMOT END 
                     , SMA1_AMOT = CASE WHEN RS.EXPD_CODE = 'A0051' THEN
                                        CASE WHEN RS.PRAD_CODE = '1' THEN v_PAYAMT + TO_NUMBER(RS.PRAT_CNTT)                       --가감액 = 시뮬레이션이전금액 + 예측조정내용(가감액)
                                             WHEN RS.PRAD_CODE = '2' THEN ( v_PAYAMT * TO_NUMBER(RS.PRAT_CNTT) / 100 )  --비율 = 시뮬레이션이전금액 + (시뮬레이션이전금액 * 예측조정내용(비율) / 100) 
                                             WHEN RS.PRAD_CODE = '3' THEN TO_NUMBER(RS.PRAT_CNTT)                                  --정액 = 예측조정내용(정액)
                                             ELSE 0
                                             END
                                        ELSE SMA1_AMOT
                                        END
                     , SMB2_AMOT = CASE WHEN RS.EXPD_CODE = 'A0066' THEN v_PAYAMT ELSE SMB2_AMOT END
                     , SMA2_AMOT = CASE WHEN RS.EXPD_CODE = 'A0066' THEN
                                        CASE WHEN RS.PRAD_CODE = '1' THEN v_PAYAMT + TO_NUMBER(RS.PRAT_CNTT)                       --가감액 = 시뮬레이션이전금액 + 예측조정내용(가감액)
                                             WHEN RS.PRAD_CODE = '2' THEN ( v_PAYAMT * TO_NUMBER(RS.PRAT_CNTT) / 100 )  --비율 = 시뮬레이션이전금액 + (시뮬레이션이전금액 * 예측조정내용(비율) / 100) 
                                             WHEN RS.PRAD_CODE = '3' THEN TO_NUMBER(RS.PRAT_CNTT)                                  --정액 = 예측조정내용(정액)
                                             ELSE 0
                                             END
                                        ELSE SMA2_AMOT
                                        END
                     , SMB3_AMOT = CASE WHEN RS.EXPD_CODE = 'A0052' THEN v_PAYAMT ELSE SMB3_AMOT END 
                     , SMA3_AMOT = CASE WHEN RS.EXPD_CODE = 'A0052' THEN
                                        CASE WHEN RS.PRAD_CODE = '1' THEN v_PAYAMT + TO_NUMBER(RS.PRAT_CNTT)                       --가감액 = 시뮬레이션이전금액 + 예측조정내용(가감액)
                                             WHEN RS.PRAD_CODE = '2' THEN ( v_PAYAMT * TO_NUMBER(RS.PRAT_CNTT) / 100 )  --비율 = 시뮬레이션이전금액 + (시뮬레이션이전금액 * 예측조정내용(비율) / 100) 
                                             WHEN RS.PRAD_CODE = '3' THEN TO_NUMBER(RS.PRAT_CNTT)                                  --정액 = 예측조정내용(정액)
                                             ELSE 0
                                             END
                                        ELSE SMA3_AMOT
                                        END
                     , UPDT_USID  = iUPDT_USID
                     , UPDT_DATE  = SYSDATE
                 WHERE SMUL_SEQN = iSMUL_SEQN
                   AND EMPL_NUMB = RS.EMPL_NUMB
                  ;                  
                  
            END IF;
           
        
        END LOOP;
        
        UPDATE PY_SIMUXA
           SET SMC1_AMOT = SMA1_AMOT - SMB1_AMOT
             , SMC2_AMOT = SMA2_AMOT - SMB2_AMOT
             , SMC3_AMOT = SMA3_AMOT - SMB3_AMOT
         WHERE SMUL_SEQN = iSMUL_SEQN
          ;        
    END;
END PKG_PAYD0010;