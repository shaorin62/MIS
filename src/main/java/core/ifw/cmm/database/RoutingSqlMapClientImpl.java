/**
 * core.ifw.cmm.database.RoutingSqlMapClientImpl.java
 */
package core.ifw.cmm.database;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import com.ibatis.common.util.PaginatedList;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapSession;
import com.ibatis.sqlmap.client.event.RowHandler;
import com.ibatis.sqlmap.engine.execution.BatchException;
import com.ibatis.sqlmap.engine.execution.SqlExecutor;
import com.ibatis.sqlmap.engine.impl.SqlMapExecutorDelegate;
import com.ibatis.sqlmap.engine.mapping.result.ResultObjectFactory;
import com.ibatis.sqlmap.engine.mapping.statement.MappedStatement;

/**
 * <pre>
 *	RoutingSqlMapClientImpl - SqlMapClient를 동적으로 변경하기 위하여 사용합니다.
 * <p><b>NOTE : </b>이 클래스는 {@link DatabaseRoutingDataSource}와 같이 사용하여, Thread에 설정된 데이터베이스의 타입에 따라 동적으로 iBatis 실행을 위한 SqlMapClient 객체를 변경합니다.</p>
 * </pre>
 * 
 * @author	jang.sh <jsh@inbus.co.kr>
 * @since	2016. 11. 14.
 * @version	1.0
 * @see		{@link ExtendedSqlMapClient}
 * @see		{@link DatabaseRoutingDataSource}
 * @see		{@link DatabaseRoutingContextHolder}
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 11. 14.	jang.sh		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public class RoutingSqlMapClientImpl implements SqlMapClient {

	private Map<DatabaseTypes, SqlMapClient> targetSqlMapClients;
	
	public void setTargetSqlMapClients(Map<DatabaseTypes, SqlMapClient> targetSqlMapClients) {
		this.targetSqlMapClients = targetSqlMapClients;
	}
	
	public Map<DatabaseTypes, SqlMapClient> getTargetSqlMapClients() {
		return targetSqlMapClients;
	}
	
	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#insert(java.lang.String, java.lang.Object)
	 */
	@Override
	public Object insert(String id, Object param) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).insert(id, param);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#insert(java.lang.String)
	 */
	@Override
	public Object insert(String id) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).insert(id);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#update(java.lang.String, java.lang.Object)
	 */
	@Override
	public int update(String id, Object param) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).update(id, param);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#update(java.lang.String)
	 */
	@Override
	public int update(String id) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).update(id);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#delete(java.lang.String, java.lang.Object)
	 */
	@Override
	public int delete(String id, Object param) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).delete(id, param);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#delete(java.lang.String)
	 */
	@Override
	public int delete(String id) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).delete(id);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForObject(java.lang.String, java.lang.Object)
	 */
	@Override
	public Object queryForObject(String id, Object paramObject)
			throws SQLException {
		return queryForObject(id, paramObject);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForObject(java.lang.String)
	 */
	@Override
	public Object queryForObject(String id) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryForObject(id);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForObject(java.lang.String, java.lang.Object, java.lang.Object)
	 */
	@Override
	public Object queryForObject(String id, Object paramObject,
			Object resultObject) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryForObject(id, paramObject, resultObject);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForList(java.lang.String, java.lang.Object)
	 */
	@Override
	public List queryForList(String id, Object paramObject) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryForList(id, paramObject);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForList(java.lang.String)
	 */
	@Override
	public List queryForList(String id) throws SQLException {
		return queryForList(id);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForList(java.lang.String, java.lang.Object, int, int)
	 */
	@Override
	public List queryForList(String id, Object paramObject, int skip, int max)
			throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryForList(id, paramObject, skip, max);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForList(java.lang.String, int, int)
	 */
	@Override
	public List queryForList(String id, int skip, int max) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryForList(id, skip, max);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForPaginatedList(java.lang.String, java.lang.Object, int)
	 */
	@Override
	public PaginatedList queryForPaginatedList(String id, Object paramObject,
			int pageSize) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryForPaginatedList(id, paramObject, pageSize);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForPaginatedList(java.lang.String, int)
	 */
	@Override
	public PaginatedList queryForPaginatedList(String id, int pageSize)
			throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryForPaginatedList(id, pageSize);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForMap(java.lang.String, java.lang.Object, java.lang.String)
	 */
	@Override
	public Map queryForMap(String id, Object paramObject, String keyProp)
			throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryForMap(id, paramObject, keyProp);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryForMap(java.lang.String, java.lang.Object, java.lang.String, java.lang.String)
	 */
	@Override
	public Map queryForMap(String id, Object paramObject, String keyProp,
			String valueProp) throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryForMap(id, paramObject, keyProp, valueProp);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryWithRowHandler(java.lang.String, java.lang.Object, com.ibatis.sqlmap.client.event.RowHandler)
	 */
	@Override
	public void queryWithRowHandler(String id, Object paramObject,
			RowHandler rowHandler) throws SQLException {
		targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryWithRowHandler(id, paramObject, rowHandler);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#queryWithRowHandler(java.lang.String, com.ibatis.sqlmap.client.event.RowHandler)
	 */
	@Override
	public void queryWithRowHandler(String id, RowHandler rowHandler)
			throws SQLException {
		targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).queryWithRowHandler(id, rowHandler);

	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#startTransaction()
	 */
	@Override
	public void startTransaction() throws SQLException {
		targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).startTransaction();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#startTransaction(int)
	 */
	@Override
	public void startTransaction(int transactionIsolation) throws SQLException {
		targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).startTransaction(transactionIsolation);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#commitTransaction()
	 */
	@Override
	public void commitTransaction() throws SQLException {
		targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).commitTransaction();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#endTransaction()
	 */
	@Override
	public void endTransaction() throws SQLException {
		targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).endTransaction();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#startBatch()
	 */
	@Override
	public void startBatch() throws SQLException {
		targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).startBatch();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#executeBatch()
	 */
	@Override
	public int executeBatch() throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).executeBatch();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#executeBatchDetailed()
	 */
	@Override
	public List executeBatchDetailed() throws SQLException, BatchException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).executeBatchDetailed();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#setUserConnection(java.sql.Connection)
	 */
	@Override
	public void setUserConnection(Connection connection) throws SQLException {
		targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).setUserConnection(connection);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#getUserConnection()
	 */
	@Override
	public Connection getUserConnection() throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).getUserConnection();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#getCurrentConnection()
	 */
	@Override
	public Connection getCurrentConnection() throws SQLException {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).getCurrentConnection();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#getDataSource()
	 */
	@Override
	public DataSource getDataSource() {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).getDataSource();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#openSession()
	 */
	@Override
	public SqlMapSession openSession() {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).openSession();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#openSession(java.sql.Connection)
	 */
	@Override
	public SqlMapSession openSession(Connection conn) {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).openSession(conn);
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#getSession()
	 */
	@Override
	public SqlMapSession getSession() {
		return targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).getSession();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#flushDataCache()
	 */
	@Override
	public void flushDataCache() {
		targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).flushDataCache();
	}

	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.engine.impl.ExtendedSqlMapClient#flushDataCache(java.lang.String)
	 */
	@Override
	public void flushDataCache(String cacheId) {
		targetSqlMapClients.get(DatabaseRoutingContextHolder.getDatabaseType()).flushDataCache(cacheId);
	}

}
