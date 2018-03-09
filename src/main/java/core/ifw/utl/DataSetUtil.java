/**
 * 
 */
package core.ifw.utl;

import java.sql.ResultSet; 
import java.sql.ResultSetMetaData;
import java.sql.Types;
import java.util.Iterator;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;

/**
 * <pre>
 *	DataSetUtil - 데이터셋 생성, 컬럼 정보 처리 등을 위한 유틸 클래스<br/>
 * <p><b>NOTE : </b>Tobesoft 각각의 클라이언트 툴에 따라서 데이터셋 및 데이터셋 클래스를 적절히 변경하여야 합니다. </p>
 * </pre>
 * 
 * @author	장성환 <jsh@inbus.co.kr>
 * @since	2014. 8. 8.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 8. 8.	장성환		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public class DataSetUtil {
	
	/**
	 * Logger for this class.
	 */
	private static final Logger logger = LoggerFactory.getLogger(DataSetUtil.class);
	
	/**
	 * <pre>
	 * 데이터셋을 생성하여 반환한다.
	 * </pre>
	 * 
	 * @return 새로운 데이터셋을 생성하여 반환한다.
	 */
	public static DataSet getDataSet() {
		return getDataSet("dataset");
	}
	
	/**
	 * <pre>
	 * 주어진 이름으로 데이터셋을 생성하여 반환한다.
	 * </pre>
	 * 
	 * @param name 생성할 데이터셋의 이름
	 * @return 주어진 이름으로 새로운 데이터셋을 생성하여 반환한다.
	 */
	public static DataSet getDataSet(String name) {
		return new DataSet(name, name);
	}
	
	/**
	 * <pre>
	 * Map을 이용하여 데이터셋 컬럼 정보를 생성한다. 모든 컬럼의 타입은 String 타입으로 생성된다.
	 * </pre>
	 * @param dataSet 컬럼정보를 추가할 데이터셋
	 * @param data 데이터셋에 추가할 컬럼정보가 저장된 java.util.Map 객체
	 * @return 컬럼정보를 추가한 데이터셋을 반환한다.
	 */
	public static DataSet setColumnInfo(DataSet dataSet, Map<String, Object> data) {
		
		if (dataSet == null) {
			dataSet = getDataSet();
		}
		
		if (data == null) {
			return dataSet;
		}
		
		Iterator<String> it = data.keySet().iterator();
		String key;
		
		while (it.hasNext()) {
			key = it.next();
			dataSet.addColumn(key, DataTypes.STRING, 255);
		}
		
		return dataSet;
		
	}
	
	/**
	 * <pre>
	 * RowHandler을 통해서 전달받은 java.sql.ResultSet 객체를 이용하여 데이터셋에 컬럼정보를 추가한다.
	 * </pre>
	 *
	 * @param dataSet 컬럼정보를 추가 할 데이터셋 객체
	 * @param resultSet 데이터셋에 컬럼정보를 추가할 쿼리 실행결과를 가진 java.sql.ResultSet 객체
	 * @return 컬럼정보를 추가한 데이터셋을 반환한ㄷ.
	 */
	public static DataSet setColumnInfo(DataSet dataSet, ResultSet resultSet) {
		
		if (dataSet == null) {
			dataSet = getDataSet();
		}
		
		if (resultSet == null) {
			return dataSet;
		}
		
		try {
			
			ResultSetMetaData rsmd = resultSet.getMetaData();
			int columnSize = rsmd.getColumnCount();
			String columnName;
			int columnType = -999;
			
			for(int index = 1; index <= columnSize; index++) {
				columnName = rsmd.getColumnName(index);
				columnType = rsmd.getColumnType(index);
				int sSize = rsmd.getPrecision(index); //컬럼사이즈
				
				if (columnType == Types.BLOB) { 
					
					dataSet.addColumn(columnName, DataTypes.BLOB);
					
				} else if (columnType == Types.NUMERIC || columnType == Types.INTEGER || columnType == Types.DECIMAL || columnType == Types.FLOAT) {
					
					dataSet.addColumn(columnName, DataTypes.BIG_DECIMAL, 255);
				} else if ((columnType == Types.DATE) || (columnType == Types.TIMESTAMP)) {
					dataSet.addColumn(columnName, DataTypes.DATE_TIME);
				} else {
					
					dataSet.addColumn(columnName, DataTypes.STRING, DataTypes.DEFAULT_SIZE_STRING);
					
				}
				
			}
			
		} catch (Exception e) {
			logger.warn("Exception Occurred while parsing query resultset : " + e.getMessage());
		}
		
		return dataSet;
		
	}
	
	
	/**
	 * <pre>
	 * 주어진 데이터셋에 컬럼을 추가한다. 추가되는 컬럼은 String 타입이다.
	 * </pre>
	 *
	 * @param dataset 컬럼을 추가할 데이터셋
	 * @param columnName 추가할 컬럼명
	 */
	public static void addColumn(Object dataset, String columnName) {
	    DataSet ds = (DataSet) dataset;
	    ds.addColumn(columnName, DataTypes.STRING);
	}
	
	
	/**
	 * <pre>
	 * 데이터셋에 신규 행을 추가한다.
	 * </pre>
	 *
	 * @param ds - 데이터셋 객체
	 * @return 신규 행 번호
	 */
	public static int insertRow(Object dataSet) {
		
		DataSet ds = (DataSet) dataSet;
		int newRow = ds.newRow();
		return newRow;
		
	}
	
	/**
	 * <pre>
	 * 데이터셋 주어진 행 위치에 새로운 행을 추가한다.
	 * </pre>
	 *
	 * @param dataSet - 데이터셋 객체
	 * @param row - 행번호
	 * @return 신규 행 번호
	 */
	public static int insertRow(Object dataSet, int row) {
		
		DataSet ds = (DataSet) dataSet;
		int newRow = ds.newRow(row);
		return newRow;
		
	}
	
	
	/**
	 * <pre>
	 * 컬럼에 값을 추가한다.
	 * </pre>
	 *
	 * @param dataSet - 데이터셋 객체
	 * @param row - 행번호
	 * @param column - 열명
	 * @param value - 추가할 값
	 * @return 정상적으로 추가 시 0을 반환한다.
	 */
	public static int setColumn(Object dataSet, int row, String column, Object value) {
		
		DataSet ds = (DataSet) dataSet;
		ds.set(row, column, value);
		return 0;
		
	}
	
	/**
	 * <pre>
	 * 컬럼의 값을 가져온다.
	 * </pre>
	 *
	 * @param dataSet - 데이터셋 객체
	 * @param row - 행번호
	 * @param column - 열명
	 * @return 컬럼의 값을 반환한다.
	 */
	public static Object getColumn(Object dataSet, int row, String column) {
		DataSet ds = (DataSet) dataSet;
		Object val = ds.getObject(row, column);
		val = (val == null ? new String() : val);
		return val;
	}
	
	/**
	 * <pre>
	 * 지정된 행 레코드를 삭제한다.
	 * </pre>
	 *
	 * @param dataSet - 데이터셋 객체
	 * @param row - 삭제할 행 번호
	 */
	public static void deleteRow(Object dataSet, int row) {
		
		DataSet ds = (DataSet) dataSet;
		ds.removeRow(row);

	}
	
	
	/**
	 * <pre>
	 * 데이터셋의 행 개수를 반환한다.
	 * </pre>
	 *
	 * @param dataSet Object 타입의 데이터셋 객체
	 * @return 행 개수
	 */
	public static int getRowCount(Object dataSet) {
		if (dataSet == null) return 0;
		
		DataSet ds = (DataSet) dataSet;
		return ds.getRowCount();
	}
	
}
