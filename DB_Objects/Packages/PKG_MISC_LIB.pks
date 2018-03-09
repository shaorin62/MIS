CREATE OR REPLACE PACKAGE UWZ.PKG_MISC_LIB AS
/******************************************************************************
   NAME:       PKG_MISC_LIB
   PURPOSE:    MISC. LIB.(Miscellaneous Library)

   REVISIONS:
   Ver        Date        Author           Description
   ---------  ----------  ---------------  ------------------------------------
   1.0        2014.06.20      김삼영       1. Created this package.
   ----------------------------------------------------------------------------
   PKG_MISC_LIB.SF_VALID_DATE('20141123')                               --날짜 유효성 검증(YYYYMMDD)
   PKG_MISC_LIB.SF_VALID_COMMCODE('SYST_CODE', 'FAM')                   --공통코드 유효성 검사
   PKG_MISC_LIB.SF_CONV_DATE2CHAR('2015-12-22 14:22:30', 'YYYYMMDD')    --문자열DATE(19) 포맷을 CHAR로 변환
   PKG_MISC_LIB.SF_CONV_DATE2DATE('2015-12-22 14:22:30')                --문자열DATE(19) 포맷을 DATE로 변환
   PKG_MISC_LIB.SF_FORMAT_CHARDATE('20160122','YYYY.MM.DD')             --문자열DATE(8) 값에 날짜 포맷을 적용
   PKG_MISC_LIB.SF_GET_DAY('20160122','KR_SHORT')                       --문자열DATE(8) 의 요일을 반환
******************************************************************************/

    /***************************************************************************
      작  성  자 : 김삼영
      작  성  일 : 2014.11.23
      내      용 : 날짜 유효성 체크(YYYYMMDD)
    ***************************************************************************/
    FUNCTION SF_VALID_DATE(
        iDATE               IN  VARCHAR2                    --DATE STRING(YYYYMMDD)
    )
    RETURN BOOLEAN;                                         --RETURN: TRUE / FALSE

    /***************************************************************************
      작  성  자 : 김삼영
      작  성  일 : 2015.12.24
      내      용 : 공통코드 유효성 체크
    ***************************************************************************/    
    FUNCTION SF_VALID_COMMCODE(
        iCOMM_CODE          IN  VARCHAR2                    --Common Master Code(공통코드)
      , iCOMD_CODE          IN  VARCHAR2                    --Common Detail Code(세부코드)
    )
    RETURN BOOLEAN;                                         --RETURN: TRUE / FALSE

    /*******************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2015.12.22
        내      용 : 문자열DATE(19) 포맷을 CHAR로 변환
    ********************************************************************************/
    FUNCTION SF_CONV_DATE2CHAR (
        iDATE_TEXT          IN  VARCHAR2                    --DATE STRING(YYYY-MM-DD HH:MM:SS)
      , iCHAR_FRMT          IN  VARCHAR2                    --날짜포맷(EX. YYYYMMDD)
    )
    RETURN VARCHAR2;                                        --RETURN: DATE_CHAR
    
    /*******************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2015.12.22
        내      용 : 문자열DATE(19) 포맷을 DATE로 변환
    ********************************************************************************/
    FUNCTION SF_CONV_DATE2DATE (
        iDATE_TEXT          IN  VARCHAR2                    --DATE STRING(YYYY-MM-DD HH:MM:SS)
    )
    RETURN DATE;                                            --RETURN: DATE
    
    /*******************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.01.22
        내      용 : 문자열DATE(8) 값에 날짜 포맷을 적용
    ********************************************************************************/
    FUNCTION SF_FORMAT_CHARDATE (
        iDATE_TEXT          IN  VARCHAR2                    --DATE STRING(YYYYMMDD)
      , iDATE_FRMT          IN  VARCHAR2                    --날짜포맷(EX. YYYY.MM.DD)
    )
    RETURN VARCHAR2;                                        --RETURN: FORMATED DATE
    
    /*******************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.02.04
        내      용 : 문자열DATE(8) 의 요일을 반환
    ********************************************************************************/
    FUNCTION SF_GET_DAY (
        iDATE_TEXT          IN  VARCHAR2                    --DATE STRING(YYYYMMDD)
      , iDAYF_TYPE          IN  VARCHAR2                    --요일포맷유형(KR_SHORT.월, KR_LONG.월요일, EN_SHORT.Mon., EN_LONG.Monday)
    )
    RETURN VARCHAR2;                                        --RETURN: DAY(월, 월요일, Mon., Monday)
 
    /*******************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.03.16
        내      용 : 문자열의 LF 코드를 <br/> 태그로 변환하여 반환
    ********************************************************************************/
    FUNCTION SF_CONV_CRLF2BR (
        iINPT_TEXT          IN  VARCHAR2                    --INPUT STRING(TEXT)
    )
    RETURN VARCHAR2;                                        --RETURN: <BR>Tag 적용 된 문자열

END PKG_MISC_LIB;
/