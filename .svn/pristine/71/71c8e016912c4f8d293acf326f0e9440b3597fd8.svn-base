/**
 * core.ifw.cmm.result.CoreResultDataNexacro.java
 */
package core.ifw.cmm.result;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro.xapi.data.ColumnHeader;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;

/**
 * <pre>
 *	CoreResultDataNexacro - 넥사크로 클라이언트로 서비스 처리결과, 값, 데이터셋 등을 반환하기 위한 클래스
 * </pre>
 *
 * @author	장성환 <jsh@inbus.co.kr>
 * @since	2014. 9. 15.
 * @version	1.0
 * @see		{@link CoreResultDataIF}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 9. 15.	장성환		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public class CoreResultDataNexacro implements CoreResultDataIF {

	private static final Logger logger = LoggerFactory.getLogger(CoreResultDataNexacro.class);

	private static final Class JAVA_LANG_STRING = java.lang.String.class;
	private static final Class JAVA_LANG_FLOAT = java.lang.Float.class;
	private static final Class JAVA_LANG_INTEGER = java.lang.Integer.class;
	private static final Class JAVA_MATH_BIGDECIMAL = java.math.BigDecimal.class;
	private static final Class JAVA_UTIL_HASHMAP = java.util.LinkedHashMap.class;
	private static final Class JAVA_UTIL_DATE = java.util.Date.class;
	private static final Class JAVA_BYTES = byte[].class;

	/**
	 * 서비스 처리 후 클라이언트로 전달할 변수 리스트
	 */
	protected VariableList variableList;

	/**
	 * 서비스 처리 후 클라이언트로 전달할 데이터셋 리스트
	 */
	protected DataSetList dataSetList;

	/**
	 * 서비스 처리 후 클라이언트로 변수 및 데이터셋 리스트를 전달하기 위한 데이터 객체
	 */
	protected PlatformData platformData;

	/**
	 * <pre>
	 * Constructor - 클래스 생성자
	 * </pre>
	 *
	 */
	public CoreResultDataNexacro() {
		platformData = new PlatformData();
		this.variableList = platformData.getVariableList();
		this.dataSetList = platformData.getDataSetList();
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.result.CoreResultDataIF#getPlatformData()
	 */
	public PlatformData getPlatformData() {
		return this.platformData;
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.result.CoreResultDataIF#addVariableList(java.lang.String, java.lang.String)
	 */
	public void addVariableList(String sKey, String sVal) {
		this.variableList.add(sKey, sVal);
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.result.CoreResultDataIF#setResultMessage(java.lang.String, java.lang.String)
	 */
	public void setResultMessage(String code, String msg) {
		this.variableList.add("ErrorCode", code);
		this.variableList.add("ErrorMsg" , msg );
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.result.CoreResultDataIF#addDataSet(java.lang.String, java.util.List)
	 */
	public void addDataSet(String sDsName, List list) throws Exception {
		this.addDataSet(sDsName, list, JAVA_UTIL_HASHMAP);
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.result.CoreResultDataIF#addDataSet(java.lang.String, java.lang.Object)
	 */
	public void addDataSet(String sDsName, Object dataSet) throws Exception {
		((DataSet) dataSet).setName(sDsName);
		((DataSet) dataSet).setAlias(sDsName);
		this.dataSetList.add((DataSet) dataSet);
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.result.CoreResultDataIF#addDataSet(java.lang.String, java.util.List, java.lang.Class)
	 */
	public void addDataSet(String dsname, List list, Class clsVoClass)
			throws Exception {
        DataSet dataSet = new DataSet(dsname);

        //1.맨처음 VoClass 정보를 가지고 헤더를 만든다.
        {
            //1-1.VoClass 가 없다면 List에서 강제로 가지고 오도록 하자.
            if( clsVoClass == null ) {
                if (list != null && list.size() > 0) {
                    clsVoClass = list.get(0).getClass();
                } else {
                    this.dataSetList.add(dataSet); // 비어 있는 DataSet이라도 반환시키게 하자.
                    return;
                }
            }


            //1-2.실제로 만들기 시작
            //Map 일경우 처리가 다르다.
            if( (JAVA_UTIL_HASHMAP == clsVoClass) || (clsVoClass == HashMap.class)) {

                // Header 세팅
                Map<String, Class> mapHeaderType = new LinkedHashMap<String, Class>();
                Map<String, ?> rec = (Map<String, ?>) list.get(0); //list에서 처음번째것 바로 가지고 오게 하자.


                Iterator<String> itKey = rec.keySet().iterator();
                while (itKey.hasNext()) {
                    String sKey = itKey.next();

                    if( mapHeaderType.containsKey(sKey) ) continue; //이미 존재하면 무시

                    Object oVal = rec.get(sKey);
                    //mapHeaderType.put(sKey, oVal == null ? JAVA_LANG_STRING : oVal.getClass()); //만약 Class 결과가 없다면 일단 String 으로 해놓자.


                    this.addColumn(dataSet, sKey, oVal == null ? JAVA_LANG_STRING : oVal.getClass());
                }


            } else {

                // Header 세팅
                Field[] fields = clsVoClass.getDeclaredFields();

                for (int i = 0; i < fields.length; i++) {
                    Field field = fields[i];

                    if ("ROW_TYPE".equals(field.getName())) continue; //ROW_TYPE 필드는 사용하지 않는다.

                    this.addColumn(dataSet, field.getName(), field.getClass());
                }
            }
        }


        //이제 정말 값들이 있으면 값들을 담아둔다.
        if (list != null) {
            Iterator it = list.iterator();

            while (it.hasNext()) {
                Object objVo = it.next();

                // Map 일경우 처리가 다르다.
                if( (JAVA_UTIL_HASHMAP == clsVoClass) || (clsVoClass == HashMap.class)) {

                    Map<String, ?> rec = ((Map<String, ?>) objVo);
                    Iterator<String> itKey = rec.keySet().iterator();
                    int iRow = dataSet.newRow(); // Value 세팅


                    while (itKey.hasNext()) {
                        String sKey = itKey.next();

                        Object oVal = rec.get(sKey);
                        this.setColumn(dataSet
                                , iRow
                                , sKey, oVal
                                , oVal == null ? JAVA_LANG_STRING : oVal.getClass());
                    }

                }

                // Vo 일 경우 처리가 다르다.
                else {

                    Class cls = objVo.getClass();
                    Field[] fields = cls.getDeclaredFields();


                    // Value 세팅
                    int iRow = dataSet.newRow();
                    for (int i = 0; i < fields.length; i++) {
                        Field field = fields[i];
                        if ("ROW_TYPE".equals(field.getName())) continue;


                        //getter 함수를 찾아서 vo에서 값을 가지고 오자.
                        String sMemberName = field.getName();
                        String sMethodeName = "get" + sMemberName.substring(0, 1).toUpperCase()
                                + sMemberName.substring(1, sMemberName.length());


                        Method m = cls.getMethod(sMethodeName, null);
                        Class<?> retcls  = m.getReturnType();


                        Object memberValue = m.invoke(objVo, null);
                        this.setColumn(dataSet, iRow, field.getName(), memberValue, field.getClass());
                    }
                }
            }
        }





        //3.디버깅용 메세지 (운영시에는 안나옴)
        if( logger.isDebugEnabled() ) {
            logger.debug("DataSet Name::" + dataSet.getName());

            {
                String sTemp = "";
                for (int i = 0; i < dataSet.getColumnCount(); i++) {

                    ColumnHeader col = dataSet.getColumn(i);
                    sTemp += col.getName() + "::" +  col.getPlatformDataType() + " ";

                }
                logger.debug(sTemp);
            }

            for( int i=0; i < dataSet.getRowCount(); i++ ) {

                String sTemp = "row::" + (i+1);
                for( int j=0; j < dataSet.getColumnCount(); j++ ) {

                    ColumnHeader col = dataSet.getColumn(j);
                    String sColName = col.getName();

                    sTemp += " " + sColName + "::" + dataSet.getObject(i, sColName);
                }
                logger.debug(sTemp);
            }
        }

        this.dataSetList.add(dataSet);
	}

	   /**
     * Object 기반 데이타셋의 String key 이름으로 칼럼 추가
     *
     * @param dataSet
     * @param sColumnName
     * @param clsColumnType
     * @throws Exception
     */
    private void addColumn(DataSet dataSet, String sColumnName, Class clsColumnType) throws Exception {

        //logger.debug("DataSetName->" + dataSet.getName() + "::" + sColumnName );

        if ( JAVA_LANG_STRING == clsColumnType ) {
            dataSet.addColumn(sColumnName, DataTypes.STRING, (short) 255);

        } else if ( JAVA_LANG_FLOAT == clsColumnType ) {
            dataSet.addColumn(sColumnName, DataTypes.FLOAT);

        } else if ( JAVA_LANG_INTEGER == clsColumnType ) {
            dataSet.addColumn(sColumnName, DataTypes.INT);

        } else if ( JAVA_MATH_BIGDECIMAL == clsColumnType ) {
            dataSet.addColumn(sColumnName, DataTypes.BIG_DECIMAL);

        } else if ( JAVA_UTIL_DATE == clsColumnType ) {
            dataSet.addColumn(sColumnName, DataTypes.DATE);

        } else if ( JAVA_BYTES == clsColumnType ) {
            dataSet.addColumn(sColumnName, DataTypes.BLOB);

        }
        //아무것도 해당되지 않으면 그냥 String으로 처리하도록 하자.
        else {
            dataSet.addColumn(sColumnName, DataTypes.STRING, (short) 255);
        }

    }

    /**
     * Field Type 기반 데이타셋의 해당 칼럼에 데이타 추가
     *
     * @param dataSet
     * @param iRow
     * @param sColumnName
     * @param oColumnVal
     * @param clsColumnType
     * @throws Exception
     */
    private void setColumn(DataSet dataSet, int iRow, String sColumnName, Object oColumnVal, Class clsColumnType) throws Exception {

        if (  JAVA_LANG_STRING == clsColumnType ) {
            dataSet.set(iRow, sColumnName, oColumnVal == null ? "" : (String) oColumnVal);

        } else if ( JAVA_LANG_FLOAT == clsColumnType ) {
            dataSet.set(iRow, sColumnName, oColumnVal == null ? 0 : ((java.lang.Float) oColumnVal).floatValue());

        } else if ( JAVA_LANG_INTEGER == clsColumnType ) {
            dataSet.set(iRow, sColumnName, oColumnVal == null ? 0 : ((java.lang.Integer) oColumnVal).intValue());

        } else if ( JAVA_MATH_BIGDECIMAL == clsColumnType ) {
            dataSet.set(iRow, sColumnName, oColumnVal == null ? 0 :((java.math.BigDecimal) oColumnVal).toPlainString());

        } else if ( JAVA_UTIL_DATE == clsColumnType ) {
            dataSet.set(iRow, sColumnName, oColumnVal == null ? null : (java.util.Date) oColumnVal);

        } else if ( JAVA_BYTES == clsColumnType ) {
            dataSet.set(iRow, sColumnName, oColumnVal == null ? null : (byte[]) oColumnVal);

        }
        //아무것도 해당되지 않으면 그냥 String으로 처리하도록 하자.
        else {
            dataSet.set(iRow, sColumnName, oColumnVal == null ? "" : (String) oColumnVal);
        }
    }

}
