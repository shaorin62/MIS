CREATE OR REPLACE FORCE VIEW VI_IF_MD_DEPT
(
    DEPT_CODE
  , DEPT_NAME
  , ENGL_DTNM
  , UPPR_DTCD
  , REGR_DATE
  , WAST_DATE
  , DEPT_LEVL
  , DEPT_FCOD
  , DEPT_THNM
  , USEX_YSNO
)
AS
    SELECT /************************************************************************
                VI_IF_MD_DEPT.VIEW 제작/매체 인터페이스용 부서정보
                * 최초 작성: 2016.09.01 김삼영
                * 최종 수정:
           ************************************************************************/
           A.DEPT_CODE      --부서코드
         , A.DEPT_NAME      --부서명
         , A.ENGL_DTNM      --영문부서명
         , A.UPPR_DTCD      --상위부서코드
         , A.REGR_DATE      --등록일
         , A.WAST_DATE      --폐기일 
         , A.DEPT_LEVL      --부서레벨
         , A.DEPT_FCOD      --부서전체코드
         , A.DEPT_THNM      --부서전체명
         , A.USEX_YSNO      --사용여부
      FROM VI_DEPTXM A      --[VIEW_부서정보(현재시점)]
;

COMMENT ON TABLE VI_IF_MD_DEPT IS 'VIEW 제작/매체 인터페이스용 부서정보';

COMMENT ON COLUMN VI_IF_MD_DEPT.DEPT_CODE IS '부서코드';

COMMENT ON COLUMN VI_IF_MD_DEPT.DEPT_NAME IS '부서명';

COMMENT ON COLUMN VI_IF_MD_DEPT.ENGL_DTNM IS '영문부서명';

COMMENT ON COLUMN VI_IF_MD_DEPT.UPPR_DTCD IS '상위부서코드';

COMMENT ON COLUMN VI_IF_MD_DEPT.REGR_DATE IS '등록일';

COMMENT ON COLUMN VI_IF_MD_DEPT.WAST_DATE IS '폐기일';

COMMENT ON COLUMN VI_IF_MD_DEPT.DEPT_LEVL IS '부서레벨';

COMMENT ON COLUMN VI_IF_MD_DEPT.DEPT_FCOD IS '부서전체코드';

COMMENT ON COLUMN VI_IF_MD_DEPT.DEPT_THNM IS '부서전체명';

COMMENT ON COLUMN VI_IF_MD_DEPT.USEX_YSNO IS '사용여부';
