create or replace FUNCTION     "SF_GET_WORKPRD5" 
(
    iSTRT_DATE  IN VARCHAR2                 ,       --시작일  
    iENDX_DATE  IN VARCHAR2                         --종료일
)
RETURN VARCHAR2
AS
    RETURN_VALUE    VARCHAR2(100);
    
    v_STRT_DATE   DATE; 
    v_ENDX_DATE   DATE;
    v_YEARS         NUMBER(8,0); 
    v_MONTHS          NUMBER(8,0); 
    v_DAYS            NUMBER(8,0); 
/******************************************************************************  
    NAME    :  SF_GET_WORKPRD2  
    PURPOSE :  퇴직계산처리 상의 근무기간(Y년 M개월 D일) 
    REVISIONS:  
    Ver            Date            Author                           Description  
    ---  --------------   ---------------  ------------------------------------  
    1.0      2016-11-29             이용관              1. Created this function.  
    
    NOTES:  
    * 코드가 없다면 입력된 코드를 그대로 보여준다.  
******************************************************************************/  
BEGIN
    
    RETURN_VALUE := '';
     
    v_STRT_DATE := TO_DATE(iSTRT_DATE, 'YYYYMMDD');
    v_ENDX_DATE := TO_DATE(iENDX_DATE, 'YYYYMMDD') + 1;
    
    v_YEARS  := TRUNC(MONTHS_BETWEEN(v_ENDX_DATE, v_STRT_DATE) / 12);
    v_MONTHS := TRUNC(MONTHS_BETWEEN(v_ENDX_DATE, v_STRT_DATE) MOD 12);
        v_DAYS   := v_ENDX_DATE - TO_DATE(ADD_MONTHS(v_STRT_DATE, TRUNC(MONTHS_BETWEEN(v_ENDX_DATE, v_STRT_DATE))));
     
    IF v_MONTHS >= 12 THEN
            v_YEARS := v_YEARS + 1;
            v_MONTHS := v_MONTHS - 12;
        END IF;
     

        IF v_YEARS > 0 THEN
      RETURN_VALUE := TO_CHAR(v_YEARS) || '년 ';
    END IF;
    IF v_MONTHS > 0 THEN
      RETURN_VALUE := RETURN_VALUE || TO_CHAR(v_MONTHS) || '개월 ';
    END IF;
    
    RETURN_VALUE := RETURN_VALUE || TO_CHAR(v_DAYS) || '일 ';
    
    IF NVL(v_STRT_DATE,'') = '' THEN
      RETURN_VALUE := '';
    END IF;
    IF NVL(v_ENDX_DATE,'') = '' THEN
      RETURN_VALUE := '';
    END IF;
  
  RETURN RETURN_VALUE;
  
END;