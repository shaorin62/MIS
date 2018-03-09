/**
 * core.ifw.cmm.dataaccess.InbusRowHandler.java
 */
package core.ifw.cmm.dataaccess;

import java.sql.ResultSet;

import com.ibatis.sqlmap.client.event.RowHandler;

/**
 * <pre>
 *	InbusRowHandler - 데이터셋 정보 생성을 위한 ibatis Row Handler 인터페이스
 * </pre>
 * 
 * @author	장성환 <jsh@inbus.co.kr>
 * @since	2014. 8. 8.
 * @version	1.0
 * @see		{@link RowHandler}
 * 
 * <pre>
 * <p>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 8. 8.	장성환		Initial Created.
 * ====================================================
 * </p>
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface InbusRowHandler extends RowHandler {
	
	/**
	 * <pre>
	 * 데이터셋 컬럼정보를 생성한다.
	 * </pre>
	 *
	 * @param rs ibatis에서 쿼리 실행 후 반환된 java.sql.ResultSet 객체
	 */
	void parseColumnMetaInfo(ResultSet rs);
	
	/**
	 * <pre>
	 * 데이터셋을 반환한다.
	 * </pre>
	 *
	 * @return ResultSet 객체를 이용하여 컬럼정보를 생성한 데이터셋을 반환한다.
	 */
	Object getDataSet();
	
	void setCallerName(String caller);
	
	String getCallerName();
	
}
