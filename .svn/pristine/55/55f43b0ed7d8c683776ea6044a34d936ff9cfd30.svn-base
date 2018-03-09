create or replace PACKAGE PKG_PAYB0170 AS

    /******************************************************************************
        NAME:       PKG_PAYB0170
        PURPOSE:    급여처리
        REVISIONS:
        Ver        Date        Author           Description
        ---------  ----------  ---------------  ------------------------------------
        1.0        2016-09-20    김춘호         1. Created this package.
    ******************************************************************************/

    /**********************************************
        Return Cursor Type Define 
        조회 시 조회 결과를 받을 Cursor .Type 정의
    **********************************************/
    TYPE REC_TYPE IS REF CURSOR;

    /**********************************************
        작  성  자 : 김춘호
        작  성  일 : 2016-09-20
        내      용 : 급여대상자처리
    **********************************************/
    PROCEDURE SP_PAYB0170_PROC00 (
         iUPDT_USID   IN PY_PMDCAL.UPDT_USID%TYPE   --수정자
        ,iPAYX_DATE   IN PY_PMDCAL.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMDCAL.WAGE_CODE%TYPE   --급여코드
    );
    
    /**********************************************
        작  성  자 : 김춘호
        작  성  일 : 2016-09-20
        내      용 : 급여처리
    **********************************************/
    PROCEDURE SP_PAYB0170_PROC01 (
         iUPDT_USID   IN PY_PMMAST.UPDT_USID%TYPE   --수정자
        ,iSAVE_TYPE   IN NVARCHAR2                  --급여처리/삭제
        ,iPAYX_DATE   IN PY_PMMAST.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMMAST.WAGE_CODE%TYPE   --급여코드
        ,iWAGP_CODE   IN PY_PMMAST.WAGP_CODE%TYPE   --급여그룹코드
        ,iEMPL_NUMB   IN PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
        ,iWAGE_YMTH   IN PY_PMDETL.WAGE_YMTH%TYPE   --급여년월
    );
    
    /**********************************************
        작  성  자 : 김춘호
        작  성  일 : 2016-09-20
        내      용 : 급여처리
    **********************************************/
    PROCEDURE SP_PAYB0170_PROC02 (
         iUPDT_USID   IN PY_PMMAST.UPDT_USID%TYPE   --수정자
        ,iSAVE_TYPE   IN NVARCHAR2                  --급여처리/삭제
        ,iPAYX_DATE   IN PY_PMMAST.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMMAST.WAGE_CODE%TYPE   --급여코드
        ,iWAGP_CODE   IN PY_PMMAST.WAGP_CODE%TYPE   --급여그룹코드
        ,iWAGE_YMTH   IN PY_PMDETL.WAGE_YMTH%TYPE   --급여년월
    );
    
    /**********************************************
        작  성  자 : 김춘호
        작  성  일 : 2016-09-20
        내      용 : 급여처리로그
    **********************************************/
    PROCEDURE SP_PAYB0170_LOG (
         iUPDT_USID   IN PY_PMDLOG.UPDT_USID%TYPE   --수정자
        ,iPAYX_DATE   IN PY_PMDLOG.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMDLOG.WAGE_CODE%TYPE   --급여코드
        ,iEMPL_NUMB   IN PY_PMDLOG.EMPL_NUMB%TYPE   --사원번호
        ,iEXPD_CODE   IN PY_PMDLOG.EXPD_CODE%TYPE   --수당공제코드
        ,iAPLY_MODN   IN PY_PMDLOG.APLY_MODN%TYPE   --계산식
    );

END PKG_PAYB0170;