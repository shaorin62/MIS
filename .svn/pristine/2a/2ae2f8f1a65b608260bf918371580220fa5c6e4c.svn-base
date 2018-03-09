CREATE OR REPLACE VIEW UWZ.VI_IF_MD_EMPL
(EMPL_NUMB, EMPL_NAME, PCOP_JCDT, ENCO_DATE, RETR_DATE, 
 WODN_CODE, WODN_NAME, DEPT_CODE, DEPT_NAME, OPOS_CODE, 
 OPOS_NAME, OPOS_ORDR)
AS 
SELECT /************************************************************************
            VI_IF_MD_EMPL.VIEW 제작/매체 인터페이스용 사원정보
            * 최초 작성: 2016.09.01 김삼영
            * 최종 수정: 
       ************************************************************************/
       A.EMPL_NUMB                  --사원번호
     , A.EMPL_NAME                  --사원명   
     , A.PCOP_JCDT                  --그룹입사일
     , A.ENCO_DATE                  --입사일
     , A.RETR_DATE                  --퇴사일
     , A.WODN_CODE                  --재직구분코드
     , C.COMD_CDNM  AS WODN_NAME    --재직구분명
     , A.DEPT_CODE                  --부서코드
     , B.DEPT_NAME                  --부서명
     , A.OPOS_CODE                  --직위코드
     , D.COMD_CDNM  AS OPOS_NAME    --직위명
     , D.SORT_ORDR  AS OPOS_ORDR    --직위정렬순서
  FROM HR_MASTXM A              --[인사기본정보]
       LEFT JOIN TM_DEPTXM B    --[부서정보]
              ON A.DEPT_CODE = B.DEPT_CODE
       LEFT JOIN TM_CODEXD C    --[공통코드상세-재직구분코드]
              ON C.COMM_CODE = 'WODN_CODE'  --WODN_CODE.재직구분코드
             AND A.WODN_CODE = C.COMD_CODE  --재직구분코드
       LEFT JOIN TM_CODEXD D    --[공통코드상세-직위코드]
              ON D.COMM_CODE = 'OPOS_CODE'  --OPOS_CODE.직위코드
             AND A.OPOS_CODE = D.COMD_CODE  --직위코드
;

COMMENT ON TABLE UWZ.VI_IF_MD_EMPL IS 'VIEW 제작/매체 인터페이스용 사원정보';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.EMPL_NUMB IS '사원번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.EMPL_NAME IS '사원명';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.PCOP_JCDT IS '그룹입사일';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.ENCO_DATE IS '입사일';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.RETR_DATE IS '퇴사일';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.WODN_CODE IS '재직구분코드';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.WODN_NAME IS '재직구분명';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.DEPT_CODE IS '부서코드';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.DEPT_NAME IS '부서명';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.OPOS_CODE IS '직위코드';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.OPOS_NAME IS '직위명';

COMMENT ON COLUMN UWZ.VI_IF_MD_EMPL.OPOS_ORDR IS '직위정렬순서';

