/**
 * core.ifw.cmm.dataaccess.InbusRowHandlerImpl.java
 */
package core.ifw.cmm.dataaccess;

import java.sql.ResultSet;
import java.util.Map;

import com.nexacro.xapi.data.DataSet;

import core.ifw.utl.DataSetUtil;

/**
 * <pre>
 *	InbusRowHandlerImpl - 데이터셋 정보 생성을 위한 Ibatis Row Handler 구현 클래스<br/>
 * <p><b>NOTE : </b>AOP에서 ibatis에서 쿼리 결과 처리 전 특정 메소드를 인터셉트하여<br/></p>
 * java.sql.ResultSet 객체를 분석 후 데이터셋 컬럼 정보를 생성합니다.
 * </pre>
 * 
 * @author	장성환 <jsh@inbus.co.kr>
 * @since	2014. 8. 8.
 * @version	1.0
 * @see		{@link InbusRowHandler}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 8. 8.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public class InbusRowHandlerImpl implements InbusRowHandler {
	
	private DataSet dataSet = null;
	
	private String callerName = null;
	
	/* (non-Javadoc)
	 * @see com.ibatis.sqlmap.client.event.RowHandler#handleRow(java.lang.Object)
	 */
	@SuppressWarnings("unchecked")
	public void handleRow(Object valueObject) {
		
		if(valueObject instanceof Map) {
			
			String columnName;
			Object columnValue;
			
			//2015.05.11 시큐어코딩처리
			if (dataSet == null) dataSet = new DataSet();
			
			int row = dataSet.newRow(); 
			for (int idx = 0; idx < dataSet.getColumnCount(); idx++) {
				columnName = dataSet.getColumn(idx).getName();
				columnValue = ((Map<String, Object>) valueObject).get(columnName);
				columnValue = (columnValue == null ? "" : columnValue);
				dataSet.set(row, columnName, columnValue);
			}
						
		}
		
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.dataaccess.InbusRowHandler#parseColumnMetaInfo(java.sql.ResultSet)
	 */
	public void parseColumnMetaInfo(ResultSet rs) {
		dataSet = DataSetUtil.setColumnInfo(dataSet, rs);
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.dataaccess.InbusRowHandler#getDataSet()
	 */
	public Object getDataSet() {
		return dataSet;
	}

	public void setCallerName(String caller) {
		this.callerName = caller;
	}

	public String getCallerName() {
		return this.callerName;
	}

}
