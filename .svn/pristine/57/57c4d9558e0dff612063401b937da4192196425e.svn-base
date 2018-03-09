package core.ifw.cmm.dataaccess;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.springframework.stereotype.Repository;


/**
 * @Class Name : CmmBaseDAO.java
 * @Description : 공통으로 Dao class 전체가 여기로 빠진다.
 * 특정한 처리를 해야될 경우 CmmAbstractDAO 를 상속받아 다른 DAO class 를 정의 한다.
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2011.12.29              최초생성
 *
 * @author
 * @since 2011.12.29
 * @version 1.0
 * @see
 *
 *  Copyright (C) by INBUS All right reserved.
 */

@Repository("cmmBaseDAO")
public class CmmBaseDAO extends CmmAbstractDAO {

	/**
     * 데이터베이스에서 여러 건의 데이터를 가져온다.
     * @param sSqlId - 조회할 sql id
     * @param vo - 조회할 정보가 담긴 VO
     * @return Object 반환은 java.lang.Object 형으로 하지만 실제 반환되는 객체 타입은 X-Internet 구성에 따라서 변경됨.
     * @exception Exception
     */
    public Object list(String sSqlId, Map vo) throws Exception {
        return listWithHandler(sSqlId, vo);
    }

    /**
     * insert 처리 기본적으로 처리가 정상적으로 일어나면 null이 반환된다.
     * @param sSqlId - 조회할 sql id
     * @param vo - 조회할 정보가 담긴 VO
     * @return default null
     * @throws Exception
     */
    public Object insert(String sSqlId, Map vo) throws Exception {
        return super.insert(sSqlId, vo);
    }


    /**
     * update 처리
     * @param sSqlId - 조회할 sql id
     * @param vo - 조회할 정보가 담긴 VO
     * @return int
     * @exception Exception
     */
    public int update(String sSqlId, Map vo) throws Exception {
        return super.update(sSqlId, vo);
    }

    /**
     * delete 처리
     * @param sSqlId - 조회할 sql id
     * @param vo - 조회할 정보가 담긴 VO
     * @return int
     * @exception Exception
     */
    public int delete(String sSqlId, Map vo) throws Exception {
        return super.delete(sSqlId, vo);
    }

    /**
     * 단건 조회
     */
    public Object selectByPk(String sSqlId, Map vo) throws Exception {
    	return getSqlMapClientTemplate().queryForObject(sSqlId, vo);
    }

    /**
     * <pre>
     * 데이터셋 컬럼정보 처리를 위해 RowHandler을 이용하여 쿼리를 실행한다.
     * </pre>
     *
     * @param sSqlId 실행하고자 하는 sqlMap 쿼리 id
     * @param vo 쿼리에 전달할 파라미터 객체, java.util.Map 객체
     * @return 컬럼정보 및 데이터가 저장된 데이터셋 객체
     * @throws Exception 데이터 조회 또는 데이터셋 생성 중 예외가 발생한 경우
     */
    private Object listWithHandler(String sSqlId, Map vo) throws Exception {
    	InbusRowHandler rowHandler = new InbusRowHandlerImpl();
    	String callerName = Thread.currentThread().getStackTrace()[2].getClassName();
    	callerName += "." + Thread.currentThread().getStackTrace()[2].getMethodName();
    	rowHandler.setCallerName(callerName);
    	super.getSqlMapClientTemplate().queryWithRowHandler(sSqlId, vo, rowHandler);
    	return rowHandler.getDataSet();
    }
    
}
