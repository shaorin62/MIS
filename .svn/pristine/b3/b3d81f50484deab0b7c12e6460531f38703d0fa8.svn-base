/**
 * core.ifw.cmm.database.DynamicDatabaseRoutingContextHolder.java
 */
package core.ifw.cmm.database;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <pre>
 *	DynamicDatabaseRoutingContextHolder - DatabaseRoutingDataSource 클래스가 동적으로 연결할 데이터베이스 커넥션을 판단합니다.
 * <p><b>NOTE : </b>ThreadLocal 값을 이용하여 연결할 DB정보의 Key의 값을 정의하게 됩니다. Thread에 Key 값의 지정, 획득 및 지정된 Key 값의 제거를 하여야합니다.</p>
 * </pre>
 * 
 * @author	jang.sh <jsh@inbus.co.kr>
 * @since	2016. 11. 14.
 * @version	1.0
 * @see		{@link DatabaseRoutingDataSource}
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
public class DatabaseRoutingContextHolder {

	private static final Logger LOGGER = LoggerFactory.getLogger(DatabaseRoutingContextHolder.class);
	
	private static final ThreadLocal<DatabaseTypes> databaseContextHolder = new ThreadLocal<DatabaseTypes>();
	
	/**
	 * <pre>
	 * Thread의 데이터베이스 타입을 설정합니다.
	 * </pre>
	 *
	 * @param databaseTypes 현재 Thread에 설정할 데이터베이스 타입
	 */
	public static void setDatabaseType(DatabaseTypes databaseTypes) {
		databaseContextHolder.set(databaseTypes);
		LOGGER.info("---------- Database Type : " + databaseTypes + " is set on current thread.");
	}
	
	
	/**
	 * <pre>
	 * 현재 Thread에 설정된 데이터베이스 타입을 반환합니다.
	 * </pre>
	 *
	 * @return 현재 Thread에 설정된 데이터베이스 타입
	 */
	public static DatabaseTypes getDatabaseType() {
		
		if (databaseContextHolder.get() == null) {
			return DatabaseTypes.TIBERO;
		}
		
		return databaseContextHolder.get();
	}
	
	
	/**
	 * <pre>
	 * 현재 Thread에 지정된 데이터베이스 타입을 초기화 시킵니다.
	 * </pre>
	 *
	 */
	public static void clearDatabaseType() {
		databaseContextHolder.remove();
		LOGGER.info("---------- Database Type is cleared on current thread.");
	}
	
}
