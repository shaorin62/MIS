/**
 * core.ifw.cmm.database.DatabaseRoutingDataSource.java
 */
package core.ifw.cmm.database;

import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

/**
 * <pre>
 *	DatabaseRoutingDataSource - 다중으로 연결된 DB를 요청 정보에 따라 동적으로 변경하여 접근할 수 있도록 지원하기 위한 DataSource 클래스입니다.
 *
 * <p><b>NOTE : </b>이 DataSource는 데이터베이스 요청 처리 시 연결할 DB 정보를 ThreadLocal의 정보를 이용합니다.</p>
 * </pre>
 * 
 * @author	jang.sh <jsh@inbus.co.kr>
 * @since	2016. 11. 14.
 * @version	1.0
 * @see		{@link AbstractRoutingDataSource}
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
public class DatabaseRoutingDataSource extends AbstractRoutingDataSource {
	
	/* (non-Javadoc)
	 * @see org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource#determineCurrentLookupKey()
	 */
	@Override
	protected Object determineCurrentLookupKey() {
		return DatabaseRoutingContextHolder.getDatabaseType();
	}

}
