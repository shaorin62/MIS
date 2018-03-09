package core.ifw.cmm.dataaccess;

import java.util.List;

import javax.annotation.Resource;

import com.ibatis.sqlmap.client.SqlMapClient;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;



public class CmmAbstractDAO extends EgovAbstractDAO {
    /**
     * DB별 sqlMapClient 지정
     */
    @Resource(name = "sqlMapClient")
    public void setSuperSqlMapClient(SqlMapClient sqlMapClient) {
        super.setSuperSqlMapClient(sqlMapClient);
    }
    
    /**
     * 리스트 조회 처리 SQL mapping 을 실행한다.
     * @param queryId
     *        - 리스트 조회 처리 SQL mapping 쿼리 ID
     * @param parameterObject
     *        - 리스트 조회 처리 SQL mapping 입력 데이터(조회 조건)를
     *        세팅한 파라메터 객체(보통 VO 또는 Map)
     * @return 결과 List 객체 - SQL mapping 파일에서 지정한
     *         resultClass/resultMap 에 의한 결과 객체(보통 VO
     *         또는 Map)의 List
     */
    @SuppressWarnings("unchecked")
    @Override
    public List list(String queryId, Object parameterObject) {
        return getSqlMapClientTemplate().queryForList(queryId, parameterObject);
    }

    /**
     * 부분 범위 리스트 조회 처리 SQL mapping 을 실행한다. (부분 범위 -
     * pageIndex 와 pageSize 기반으로 현재 부분 범위 조회를 위한
     * skipResults, maxResults 를 계산하여 ibatis 호출)
     * @param queryId
     *        - 리스트 조회 처리 SQL mapping 쿼리 ID
     * @param parameterObject
     *        - 리스트 조회 처리 SQL mapping 입력 데이터(조회 조건)를
     *        세팅한 파라메터 객체(보통 VO 또는 Map)
     * @param pageIndex
     *        - 현재 페이지 번호
     * @param pageSize
     *        - 한 페이지 조회 수(pageSize)
     * @return 부분 범위 결과 List 객체 - SQL mapping 파일에서 지정한
     *         resultClass/resultMap 에 의한 부분 범위 결과
     *         객체(보통 VO 또는 Map) List
     */
    @SuppressWarnings("unchecked")
    @Override
    public List listWithPaging(String queryId, Object parameterObject,
            int pageIndex, int pageSize) {
        int skipResults = pageIndex * pageSize;
        int maxResults = (pageIndex * pageSize) + pageSize;
        return getSqlMapClientTemplate().queryForList(queryId, parameterObject,
            skipResults, maxResults);
    }

    
}
