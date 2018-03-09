create or replace FUNCTION     "SF_GET_WORKPRD4" 
(
    iSTRT_DATE  IN VARCHAR2                 ,       --시작일  
    iENDX_DATE  IN VARCHAR2                         --종료일
)
RETURN NUMBER
AS
    RETURN_VALUE    NUMBER;
    
    v_STRT_DATE   DATE; 
    v_ENDX_DATE   DATE;
    v_YEARS         NUMBER(8,0); 
    v_MONTHS          NUMBER(8,0); 
    v_DAYS            NUMBER(8,0); 
/******************************************************************************  
    NAME    :  SF_GET_WORKPRD4  
    PURPOSE :  근속년수 
    REVISIONS:  
    Ver            Date            Author                           Description  
    ---  --------------   ---------------  ------------------------------------  
    1.0      2016-10-20            이용관              1. Created this function.  
    
    NOTES:  
    * 코드가 없다면 입력된 코드를 그대로 보여준다.  
******************************************************************************/  
BEGIN
    
    RETURN_VALUE := 0;
     
    v_STRT_DATE := TO_DATE(iSTRT_DATE, 'YYYYMMDD');
    v_ENDX_DATE := TO_DATE(iENDX_DATE, 'YYYYMMDD') + 1;
    
    v_YEARS := TRUNC(TRUNC((v_ENDX_DATE - v_STRT_DATE) / 30.4375) / 12);
    v_MONTHS := TRUNC(TRUNC((v_ENDX_DATE - v_STRT_DATE) / 30.4375) MOD 12);
        --v_DAYS := DATEDIFF(DAY, DATEADD(MONTH, CAST(ROUND(DATEDIFF(MONTH, v_STRT_DATE, v_ENDX_DATE) ,0,1) AS DECIMAL(10)), v_STRT_DATE),  v_ENDX_DATE)
        v_DAYS := v_ENDX_DATE - TO_DATE(ADD_MONTHS(v_STRT_DATE, TRUNC(MONTHS_BETWEEN(v_ENDX_DATE, v_STRT_DATE))));
     
    IF v_MONTHS >= 12 THEN
            v_YEARS := v_YEARS + 1;
            v_MONTHS := v_MONTHS - 12;
        END IF;
     
    RETURN_VALUE := v_YEARS;
  
  RETURN RETURN_VALUE;
END;