CREATE -- added during DDL generation.
PACKAGE "PKG_PAYD0010" AS


    /******************************************************************************
         NAME:       PKG_PAYD0010
         PURPOSE:    급여시뮬레이션

         REVISIONS:
         Ver        Date        Author           Description
         ---------  ----------  ---------------  ------------------------------------
         1.0        2016-11-08   이용관           1. Created this package.
    ******************************************************************************/
    /*Return Cursor Type Define */
    TYPE REC_TYPE IS REF CURSOR;

    /*******************************************************************************
        작  성  자 : 이용관
        작  성  일 : 2016-11-08
        내      용 : 급여시뮬레이션 처리
    ********************************************************************************/
    PROCEDURE SP_PAYD0010_PROC00 (
         iUPDT_USID   IN PY_PMDCAL.UPDT_USID%TYPE   --수정자
        ,iSMUL_SEQN   IN PY_SIMUXM.SMUL_SEQN%TYPE   --시뮬레이션회차
    );

END PKG_PAYD0010;