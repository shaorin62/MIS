CREATE OR REPLACE PACKAGE UWZ.PKG_IFBATCHPROC AS
/******************************************************************************
   NAME:       PKG_IFBATCHPROC
   PURPOSE:    인터페이스 배치 처리

   REVISIONS:
   Ver        Date        Author           Description
   ---------  ----------  ---------------  ------------------------------------
   1.0        2016.09.19      김삼영       1. Created this package.
******************************************************************************/

    /*******************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.09.19
        내      용 : 인터페이스 배치 처리 실행하기
        예      제 : PKG_IFBATCHPROC.SP_BATCH_PROC('JOB_BATCH', 'ALL', NULL, NULL, NULL);
    ********************************************************************************/
    PROCEDURE SP_BATCH_PROC (
        iWORK_USID      TM_IFLOGL.UPDT_USID%TYPE    --작업자ID
      , iITFC_TYPE      TM_IFLOGL.ITFC_TYPE%TYPE    --인터페이스유형[ITFC_TYPE]
      , iREF1_FILD      TM_IFLOGL.REF1_FILD%TYPE    --보조1필드(처리조건1)
      , iREF2_FILD      TM_IFLOGL.REF2_FILD%TYPE    --보조2필드(처리조건2)
      , iREF3_FILD      TM_IFLOGL.REF3_FILD%TYPE    --보조3필드(처리조건3)
    );

END PKG_IFBATCHPROC;
/