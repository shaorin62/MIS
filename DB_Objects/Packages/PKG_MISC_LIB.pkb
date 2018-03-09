CREATE OR REPLACE PACKAGE BODY UWZ.PKG_MISC_LIB AS

    /***************************************************************************
      작  성  자 : 김삼영
      작  성  일 : 2014.11.23
      내      용 : 날짜 유효성 체크(YYYYMMDD)
    ***************************************************************************/
    FUNCTION SF_VALID_DATE(
        iDATE               IN  VARCHAR2                    --DATE STRING(YYYYMMDD)
    )
    RETURN BOOLEAN                                          --RETURN: TRUE / FALSE
    IS
        sDATE      VARCHAR2(8);    --Temp Date
    BEGIN
    
        sDATE := TO_CHAR(TO_DATE(iDATE,  'YYYYMMDD'), 'YYYYMMDD');
        
        RETURN TRUE;
        
    EXCEPTION
        WHEN OTHERS THEN
            RETURN FALSE;
    
    END SF_VALID_DATE;
    
    /***************************************************************************
      작  성  자 : 김삼영
      작  성  일 : 2015.12.24
      내      용 : 공통코드 유효성 체크
    ***************************************************************************/    
    FUNCTION SF_VALID_COMMCODE(
        iCOMM_CODE          IN  VARCHAR2                    --Common Master Code(공통코드)
      , iCOMD_CODE          IN  VARCHAR2                    --Common Detail Code(세부코드)
    )
    RETURN BOOLEAN                                          --RETURN: TRUE / FALSE
    IS
        sCOMD_CDNM              TM_CODEXD.COMD_CDNM%TYPE;
    BEGIN
    
        /*======================================================================
            공통코드 세부코드 유효성 체크
        =======================================================================*/
        SELECT COMD_CDNM 
          INTO sCOMD_CDNM
          FROM TM_CODEXD A              --[공통코드상세]
         WHERE COMM_CODE = iCOMM_CODE   --공통코드
           AND COMD_CODE = iCOMD_CODE   --세부코드
        ;
        
        RETURN TRUE;
        
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN FALSE;
        WHEN OTHERS THEN
            RETURN FALSE;
            
    END SF_VALID_COMMCODE;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2015.12.22
        내      용 : 문자열DATE(19) 포맷을 CHAR로 변환하기
    ***************************************************************************/
    FUNCTION SF_CONV_DATE2CHAR (
        iDATE_TEXT          IN  VARCHAR2                    --DATE STRING(YYYY-MM-DD HH:MM:SS)
      , iCHAR_FRMT          IN  VARCHAR2                    --날짜포맷(EX. YYYYMMDD)
    )
    RETURN VARCHAR2                                         --RETURN: DATE_CHAR
    AS 
        rtnVALUE VARCHAR2(4000); 
    BEGIN
    
        rtnVALUE := TO_CHAR(TO_DATE(iDATE_TEXT, 'YYYY-MM-DD HH24:MI:SS'), iCHAR_FRMT);
         
        RETURN rtnVALUE;
      
    END;
    
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2015.12.22
        내      용 : 문자열DATE(19) 포맷을 DATE로 변환하기
    ***************************************************************************/
    FUNCTION SF_CONV_DATE2DATE (
        iDATE_TEXT          IN  VARCHAR2                    --DATE STRING(YYYY-MM-DD HH:MM:SS)
    )
    RETURN DATE                                             --RETURN: DATE
    AS 
        rtnVALUE DATE; 
    BEGIN
    
        rtnVALUE := TO_DATE(iDATE_TEXT, 'YYYY-MM-DD HH24:MI:SS');
         
        RETURN rtnVALUE;
      
    END;
    
    /*******************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.01.22
        내      용 : 문자열DATE(8) 값에 날짜 포맷을 적용
    ********************************************************************************/
    FUNCTION SF_FORMAT_CHARDATE (
        iDATE_TEXT          IN  VARCHAR2                    --DATE STRING(YYYYMMDD)
      , iDATE_FRMT          IN  VARCHAR2                    --날짜포맷(EX. YYYY.MM.DD)
    )
    RETURN VARCHAR2                                         --RETURN: FORMATED DATE
    AS 
        rtnVALUE VARCHAR2(100); 
    BEGIN
    
        rtnVALUE := TO_CHAR(TO_DATE(iDATE_TEXT, 'YYYYMMDD'), iDATE_FRMT);
         
        RETURN rtnVALUE;
      
    END;
    
    /*******************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.02.04
        내      용 : 문자열DATE(8) 의 요일을 반환
    ********************************************************************************/
    FUNCTION SF_GET_DAY (
        iDATE_TEXT          IN  VARCHAR2                    --DATE STRING(YYYYMMDD)
      , iDAYF_TYPE          IN  VARCHAR2                    --요일포맷유형(KR_SHORT.월, KR_LONG.월요일, EN_SHORT.Mon., EN_LONG.Monday)
    )
    RETURN VARCHAR2                                         --RETURN: FORMATED DATE
    AS 
        rtnVALUE VARCHAR2(100);
        sDAY     VARCHAR2(1);       --요일코드
    BEGIN
    
        sDAY := TO_CHAR(TO_DATE(iDATE_TEXT, 'YYYYMMDD'), 'd');  --요일
        
        rtnVALUE := CASE WHEN sDAY = '1' AND iDAYF_TYPE = 'KR_SHORT' THEN '일' 
                         WHEN sDAY = '2' AND iDAYF_TYPE = 'KR_SHORT' THEN '월'
                         WHEN sDAY = '3' AND iDAYF_TYPE = 'KR_SHORT' THEN '화'
                         WHEN sDAY = '4' AND iDAYF_TYPE = 'KR_SHORT' THEN '수'
                         WHEN sDAY = '5' AND iDAYF_TYPE = 'KR_SHORT' THEN '목'
                         WHEN sDAY = '6' AND iDAYF_TYPE = 'KR_SHORT' THEN '금'
                         WHEN sDAY = '7' AND iDAYF_TYPE = 'KR_SHORT' THEN '토'
                         WHEN sDAY = '1' AND iDAYF_TYPE = 'KR_LONG'  THEN '일요일' 
                         WHEN sDAY = '2' AND iDAYF_TYPE = 'KR_LONG'  THEN '월요일'
                         WHEN sDAY = '3' AND iDAYF_TYPE = 'KR_LONG'  THEN '화요일'
                         WHEN sDAY = '4' AND iDAYF_TYPE = 'KR_LONG'  THEN '수요일'
                         WHEN sDAY = '5' AND iDAYF_TYPE = 'KR_LONG'  THEN '목요일'
                         WHEN sDAY = '6' AND iDAYF_TYPE = 'KR_LONG'  THEN '금요일'
                         WHEN sDAY = '7' AND iDAYF_TYPE = 'KR_LONG'  THEN '토요일'
                         WHEN sDAY = '1' AND iDAYF_TYPE = 'EN_SHORT' THEN 'Sun' 
                         WHEN sDAY = '2' AND iDAYF_TYPE = 'EN_SHORT' THEN 'Mon'
                         WHEN sDAY = '3' AND iDAYF_TYPE = 'EN_SHORT' THEN 'Tue'
                         WHEN sDAY = '4' AND iDAYF_TYPE = 'EN_SHORT' THEN 'Wed'
                         WHEN sDAY = '5' AND iDAYF_TYPE = 'EN_SHORT' THEN 'Thu'
                         WHEN sDAY = '6' AND iDAYF_TYPE = 'EN_SHORT' THEN 'Fri'
                         WHEN sDAY = '7' AND iDAYF_TYPE = 'EN_SHORT' THEN 'Sat'
                         WHEN sDAY = '1' AND iDAYF_TYPE = 'EN_LONG'  THEN 'Sunday' 
                         WHEN sDAY = '2' AND iDAYF_TYPE = 'EN_LONG'  THEN 'Monday'
                         WHEN sDAY = '3' AND iDAYF_TYPE = 'EN_LONG'  THEN 'Tuesday'
                         WHEN sDAY = '4' AND iDAYF_TYPE = 'EN_LONG'  THEN 'Wednesday'
                         WHEN sDAY = '5' AND iDAYF_TYPE = 'EN_LONG'  THEN 'Thursday'
                         WHEN sDAY = '6' AND iDAYF_TYPE = 'EN_LONG'  THEN 'Friday'
                         WHEN sDAY = '7' AND iDAYF_TYPE = 'EN_LONG'  THEN 'Saturday'
                         ELSE sDAY
                     END
        ;

        RETURN rtnVALUE;
      
    END;
    
 
    /*******************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.03.16
        내      용 : 문자열의 LF 코드를 <br/> 태그로 변환하여 반환
    ********************************************************************************/
    FUNCTION SF_CONV_CRLF2BR (
        iINPT_TEXT          IN  VARCHAR2                    --INPUT STRING(TEXT)
    )
    RETURN VARCHAR2                                         --RETURN: <BR>Tag 적용 된 문자열
    AS 
        rtnVALUE VARCHAR2(4000); 
    BEGIN
    
        rtnVALUE := REPLACE(iINPT_TEXT, CHR(13)||CHR(10), '<br>');
        rtnVALUE := REPLACE(rtnVALUE, CHR(13), '<br>');
        rtnVALUE := REPLACE(rtnVALUE, CHR(10), '<br>');
         
        RETURN rtnVALUE;
      
    END;

END;
/