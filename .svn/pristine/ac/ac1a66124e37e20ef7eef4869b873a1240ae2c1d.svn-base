/**
 * 
 */
package net.sf.log4jdbc;

import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.SQLFeatureNotSupportedException;
import java.util.logging.Logger;

import javax.sql.DataSource;

import net.sf.log4jdbc.ConnectionSpy;
import net.sf.log4jdbc.SpyLogDelegator;
import net.sf.log4jdbc.SpyLogFactory;

/**
 * 
 * JNDI를 통한 데이터베이스 연결 시 데이터베이스 디버깅을 위한 클래스
 * 
 * @author jsh
 * 
 */
public class InbusDataSourceSpy implements DataSource {

	private DataSource dataSource = null;

	static final SpyLogDelegator log = SpyLogFactory.getSpyLogDelegator();

	static RdbmsSpecifics defaultRdbmsSpecifics = new RdbmsSpecifics();

	public InbusDataSourceSpy() {
	}

	public Connection getConnection() throws SQLException {
		return getWrappedConnection(dataSource.getConnection());
	}

	public Connection getConnection(String username, String password)
			throws SQLException {
		return getWrappedConnection(dataSource.getConnection(username, password));
	}

	public PrintWriter getLogWriter() throws SQLException {
		return dataSource.getLogWriter();
	}

	public int getLoginTimeout() throws SQLException {
		return dataSource.getLoginTimeout();
	}

	public void setLogWriter(PrintWriter out) throws SQLException {
		dataSource.setLogWriter(out);
	}

	public void setLoginTimeout(int seconds) throws SQLException {
		dataSource.setLoginTimeout(seconds);
	}

	private Connection getWrappedConnection(Connection con) {
		if (log.isJdbcLoggingEnabled()) {
			ConnectionSpy cspy = new ConnectionSpy(con);
			cspy.setRdbmsSpecifics(defaultRdbmsSpecifics);
			return cspy;
		} else {
			return con;
		}
	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	public boolean isWrapperFor(Class<?> iface) throws SQLException {
		return false;
	}

	public <T> T unwrap(Class<T> iface) throws SQLException {
		return unwrap(iface);
	}

	/* (non-Javadoc)
	 * @see javax.sql.CommonDataSource#getParentLogger()
	 */
	public Logger getParentLogger() throws SQLFeatureNotSupportedException {
		return this.dataSource.getParentLogger();
	}

}
