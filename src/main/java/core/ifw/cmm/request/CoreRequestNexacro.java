/**
 * core.ifw.cmm.request.CoreRequestNexacro.java
 */
package core.ifw.cmm.request;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;







import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro.xapi.data.ColumnHeader;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.PlatformException;
import com.nexacro.xapi.tx.PlatformRequest;
import com.nexacro.xapi.tx.PlatformType;

import core.ifw.utl.DateTime;
import core.ifw.utl.StrUtil;

/**
 * <pre>
 *	CoreRequestNexacro - 넥사크로플랫폼 Request 추출 공통 처리 클래스
 * </pre>
 *
 * @author	장성환 <jsh@inbus.co.kr>
 * @since	2014. 9. 15.
 * @version	1.0
 * @see		{@link CoreRequestIF}
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
public class CoreRequestNexacro implements CoreRequestIF {

	/**
	 * Logger instance.
	 */
	private static final Logger LOGGER = LoggerFactory.getLogger(CoreRequestNexacro.class);

	private static final Class JAVA_LANG_STRING = java.lang.String.class;
	private static final Class JAVA_LANG_FLOAT = java.lang.Float.class;
	private static final Class JAVA_LANG_INTEGER = java.lang.Integer.class;
	private static final Class JAVA_MATH_BIGDECIMAL = java.math.BigDecimal.class;
	private static final Class JAVA_UTIL_HASHMAP = java.util.HashMap.class;
	private static final Class JAVA_UTIL_DATE = java.util.Date.class;
    private static final Class JAVA_BYTES = byte[].class;

	protected VariableList variableList;
	protected DataSetList dataSetList;
	protected Map<String, String> variableMap;
	
	protected HttpServletRequest request;

	/**
	 * <pre>
	 * Constructor - Request 객체를 분석하여 클라이언트에서 전달된 정보를 추출합니다.
	 * </pre>
	 *
	 * @param request HTTP 요청 객체
	 * @throws IOException request 객체의 스트림을 읽을 때 예외 발생 시
	 * @throws PlatformException Request 객체에서 데이터 수신 중 예외 발생 시
	 */
	public CoreRequestNexacro(HttpServletRequest request) throws IOException, PlatformException {

		PlatformRequest platformRequest = null;
		platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, "utf-8");
		platformRequest.receiveData();
		
		PlatformData platformData = platformRequest.getData();
		variableList = platformData.getVariableList();
		dataSetList = platformData.getDataSetList();
		
		request.setAttribute("GBL_USERID", variableList.getString("GBL_USERID"));	// 로그인 ID
		request.setAttribute("GBL_EMPLNO", variableList.getString("GBL_EMPLNO"));	// 사원번호
		request.setAttribute("GBL_LOGINIP", variableList.getString("GBL_LOGINIP"));	// 로그인 IP
		request.setAttribute("GBL_DEPTCD", variableList.getString("GBL_DEPTCD"));	// 부서코드
		request.setAttribute("GBL_LANGCD", variableList.getString("GBL_LANGCD"));	// 사용자언어코드
		request.setAttribute("MENU_ID", variableList.getString("MENU_ID"));			// 메뉴ID
		
		// 언어코드는 처리를 위해서 현재 세션에도 저장
		request.getSession().setAttribute("GBL_LANGCD", variableList.getString("GBL_LANGCD"));
		
		this.request = request;
		
		if (variableList.getString("pgm") != null) {
			request.setAttribute("PGM", variableList.getString("pgm").toLowerCase());			// 메뉴ID
		}
		
		
		//================================================== 세션에 저장된 서버IP를 이용한 KEY_STRING 값 처리(2016년말 연말정산 솔루션 적용 대응)
		String keyValue1 = StrUtil.toNotNullString(request.getSession().getAttribute("WSVR_IPAR"));
		String keyValue2 = StrUtil.toNotNullString(request.getSession().getAttribute("RGNB_KSTR"));
		String keyValue3 = StrUtil.toNotNullString(request.getSession().getAttribute("ACNO_KSTR"));
		
		variableList.add("WSVR_IPAR", keyValue1);
		variableList.add("RGNB_KSTR", keyValue2);
		variableList.add("ACNO_KSTR", keyValue3);
		//================================================== 세션에 저장된 서버IP를 이용한 KEY_STRING 값 처리(2016년말 연말정산 솔루션 적용 대응)
		
		
		setvariableMap(variableList);

		if (LOGGER.isDebugEnabled() || LOGGER.isInfoEnabled()) {
			LOGGER.debug("파라미터 : " + variableList.size() + "개, 데이터셋 : " + dataSetList.size() +  "개");//$NON-NLS-1$
		}

	}

	/**
	 * <pre>
	 * Nexacro 클라이언트에서 전달된 파라미터 값을 Map에 저장한다.
	 * </pre>
	 *
	 * @param vList 클라이언트에서 전달된 변수 리스트
	 */
	private void setvariableMap(VariableList vList) {

		this.variableMap = new HashMap<String, String>();

		for (int idx = 0; idx < vList.size(); idx++) {
			this.variableMap.put(vList.get(idx).getName(), vList.getString(vList.get(idx).getName()));
		}
		
		this.variableMap.put("UPDT_USID", vList.getString("GBL_USERID"));
		this.variableMap.put("UPDT_DATE", DateTime.getDateString("yyyyMMddHHmmss"));
		
		//연말정산(YEA) 추가!!!
		this.variableMap.put("YEA_UPD_USER_ID", vList.getString("GBL_USERID"));
		//연말정산(YEA) 추가!!!

        LOGGER.debug("variableMap->" + variableMap);
	}

	/**
	 * <pre>
	 * 클라이언틀에서 파라미터로 전달된 변수의 map을 반환한다.
	 * </pre>
	 *
	 * @return 클라이언트에서 전달된 파라미터 변수를 저장한 java.util.Map 객체
	 */
	public Map getMapVariableList() {
		return this.variableMap;
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.request.CoreRequestIF#getDataSet(java.lang.String)
	 */
	public List getDataSet(String dsname) throws Exception {

        List list = new ArrayList();
        DataSet ds = this.dataSetList.get(dsname);
        String sVoClass = JAVA_UTIL_HASHMAP.getName();

        if (ds != null) {
            for (int iRow = 0; iRow < ds.getRowCount(); iRow++) {
                list.add( invokeMethod( sVoClass, ds, iRow ) );
            }
            for (int iRow = 0; iRow < ds.getRemovedRowCount(); iRow++) {
                list.add( invokeMethodRemoved( sVoClass, ds, iRow ) );
            }
        }

        return list;
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.request.CoreRequestIF#getDataSetOnRow(java.lang.String)
	 */
	public Map getDataSetOnRow(String dsname) throws Exception {
		if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("getDataSetMapOnRow(String) - start"); //$NON-NLS-1$
        }

        DataSet ds = dataSetList.get(dsname);
        String sVoClass = "java.util.HashMap";

        if (ds != null) {

            Map returnObject = (Map) invokeMethod(sVoClass, ds, 0);

            if (LOGGER.isDebugEnabled()) {
                LOGGER.debug("getDataSetMapOnRow(String) - end"); //$NON-NLS-1$
            }
            return returnObject;
        } else {

            if (LOGGER.isDebugEnabled()) {
                LOGGER.debug("getDataSetMapOnRow(String) - end"); //$NON-NLS-1$
            }
            return null;
        }
	}

	/* (non-Javadoc)
	 * @see core.ifw.cmm.request.CoreRequestIF#getDataSetAll()
	 */
	public Map getDataSetAll() throws Exception {
		Map mapDs = new HashMap();

        for(int i=0; i < dataSetList.size(); i++) {
            DataSet ds = dataSetList.get(i);

            String sDsName = ds.getName();

            mapDs.put(sDsName, this.getDataSet(sDsName));
        }

        return mapDs;
	}

    /**
     * DataSet 안에 들어 있는 값들을 끄집어 내자.
     * @param vo
     * @param ds
     * @param iRow
     * @return
     * @throws Exception
     */
    private Object invokeMethod(String sVoClass, DataSet ds, int iRow) throws Exception {
    	
        /*Class<?> cls = Class.forName(sVoClass);
        Object vo = cls.newInstance();*/
        Object vo = new HashMap();


        // *** 줄 상태 ***---------------------------------------------------------------------
        /*
        --------------------------------
        DataSet
        --------------------------------
        ROW_TYPE_NORMAL 0
        ROW_TYPE_INSERTED 1
        ROW_TYPE_UPDATED 2
        ROW_TYPE_DELETED 3

        ROW_TYPE_NAME_NORMAL "normal"
        ROW_TYPE_NAME_INSERTED "inserted"
        ROW_TYPE_NAME_UPDATED "updated"
        ROW_TYPE_NAME_DELETED "deleted"
         */
        int iRowType = ds.getRowType(iRow);
        //logger.debug(iRow + " iRowType="+iRowType);
        this.callSetterMethod(vo, "ROW_TYPE", iRowType, JAVA_LANG_INTEGER );
        // *** 줄 상태 ***---------------------------------------------------------------------



        // *** 작업자 ID ***-------------------------------------------------------------------
        String sGV_USERID = this.variableMap.get("GV_USERID");
        if( sGV_USERID != null && !sGV_USERID.equals("") ) {
            this.callSetterMethod(vo, "GV_USERID", sGV_USERID, JAVA_LANG_STRING );
        }
        // *** 작업자 ID ***-------------------------------------------------------------------



        for (int i=0; i < ds.getColumnCount(); i++ ) {
            ColumnHeader dsHeader = ds.getColumn(i);

            int iColumnDataType = dsHeader.getDataType();
            String sColumnName = dsHeader.getName();


            /*
            --------------------------------
            DataTypes
            --------------------------------
            STRING 2
            INT 3
            FLOAT 6
            BIG_DECIMAL 8
            DATE 9
            TIME 10
            DATE_TIME 11
            BLOB 12
             */
            //각 타입별로 DataSet 값을 가지고 오자.
            if (DataTypes.STRING == iColumnDataType) {

                //'undefined' 제외
                String sSetVal = ds.getString(iRow, sColumnName);
                if( sSetVal != null && sSetVal.equals("undefined") ) sSetVal = "";

                this.callSetterMethod(vo, sColumnName, sSetVal , JAVA_LANG_STRING);

            } else if (DataTypes.INT == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getInt(iRow, sColumnName) , JAVA_LANG_INTEGER);

            } else if (DataTypes.FLOAT == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getFloat(iRow, sColumnName) , JAVA_LANG_FLOAT);

            } else if (DataTypes.BIG_DECIMAL == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getBigDecimal(iRow, sColumnName) , JAVA_MATH_BIGDECIMAL);

            } else if (DataTypes.DATE == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getDateTime(iRow, sColumnName) , JAVA_UTIL_DATE);

            } else if (DataTypes.TIME == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getDateTime(iRow, sColumnName) , JAVA_UTIL_DATE);

            } else if (DataTypes.DATE_TIME == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getDateTime(iRow, sColumnName) , JAVA_UTIL_DATE);

            } else if (DataTypes.BLOB == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getBlob(iRow, sColumnName) , JAVA_BYTES);

            }

            //해당되는 타입이 없다면 그냥 Object로 가지고 오게 하자.
            else {
                this.callSetterMethod(vo, sColumnName, ds.getObject(iRow, sColumnName).toString() , JAVA_LANG_STRING);
            }
        }

		if (vo.getClass() == JAVA_UTIL_HASHMAP) { 
			((Map) vo).put("UPDT_USID", variableMap.get("GBL_USERID"));
			((Map) vo).put("UPDT_DATE", DateTime.getDateString("yyyyMMddHHmmss"));
			
			//연말정산(YEA) 추가!!!
			((Map) vo).put("YEA_UPD_USER_ID", variableMap.get("GBL_USERID"));
			//연말정산(YEA) 추가!!!
			
			//================================================== 세션에 저장된 서버IP를 이용한 KEY_STRING 값 처리(2016년말 연말정산 솔루션 적용 대응)
			((Map) vo).put("WSVR_IPAR", variableMap.get("WSVR_IPAR"));
			((Map) vo).put("RGNB_KSTR", variableMap.get("RGNB_KSTR"));
			((Map) vo).put("ACNO_KSTR", variableMap.get("ACNO_KSTR"));
			//================================================== 세션에 저장된 서버IP를 이용한 KEY_STRING 값 처리(2016년말 연말정산 솔루션 적용 대응)
			
		}	 

        LOGGER.debug("vo->" + vo);
        return vo;
    }

    /**
     * DataSet 안에 들어 있는 값들중 삭제된 녀석들만 끄집어 내자.
     * @param vo
     * @param ds
     * @param iRow
     * @return
     * @throws Exception
     */
    private Object invokeMethodRemoved(String sVoClass, DataSet ds, int iRow) throws Exception {

        /*Class<?> cls = Class.forName(sVoClass);
        Object vo = cls.newInstance();*/
        Object vo = new HashMap();



        // *** 줄 상태 ***---------------------------------------------------------------------
        /*
        --------------------------------
        DataSet
        --------------------------------
        ROW_TYPE_NORMAL 0
        ROW_TYPE_INSERTED 1
        ROW_TYPE_UPDATED 2
        ROW_TYPE_DELETED 3

        ROW_TYPE_NAME_NORMAL "normal"
        ROW_TYPE_NAME_INSERTED "inserted"
        ROW_TYPE_NAME_UPDATED "updated"
        ROW_TYPE_NAME_DELETED "deleted"
         */
        this.callSetterMethod(vo, "ROW_TYPE", 3, JAVA_LANG_INTEGER ); //무조건 삭제된거라 '3' 임
        // *** 줄 상태 ***---------------------------------------------------------------------



        // *** 작업자 ID ***-------------------------------------------------------------------
        String sGV_USERID = this.variableMap.get("GV_USERID");
        if( sGV_USERID != null && !sGV_USERID.equals("") ) {
            this.callSetterMethod(vo, "GV_USERID", sGV_USERID, JAVA_LANG_STRING );
        }
        // *** 작업자 ID ***-------------------------------------------------------------------



        for (int i=0; i < ds.getColumnCount(); i++ ) {
            ColumnHeader dsHeader = ds.getColumn(i);

            int iColumnDataType = dsHeader.getDataType();
            String sColumnName = dsHeader.getName();


            /*
            --------------------------------
            DataTypes
            --------------------------------
            STRING 2
            INT 3
            FLOAT 6
            BIG_DECIMAL 8
            DATE 9
            TIME 10
            DATE_TIME 11
            BLOB 12
             */
            //각 타입별로 DataSet 값을 가지고 오자.
            if (DataTypes.STRING == iColumnDataType) {

                //'undefined' 제외
                String sSetVal = ds.getRemovedStringData(iRow, sColumnName);
                if( sSetVal != null && sSetVal.equals("undefined") ) sSetVal = "";

                this.callSetterMethod(vo, sColumnName, ds.getRemovedStringData(iRow, sColumnName) , JAVA_LANG_STRING);

            } else if (DataTypes.INT == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getRemovedIntData(iRow, sColumnName) , JAVA_LANG_INTEGER);

            } else if (DataTypes.FLOAT == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getRemovedFloatData(iRow, sColumnName) , JAVA_LANG_FLOAT);

            } else if (DataTypes.BIG_DECIMAL == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getRemovedBigDecimalData(iRow, sColumnName) , JAVA_MATH_BIGDECIMAL);

            } else if (DataTypes.DATE == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getRemovedDateTimeData(iRow, sColumnName) , JAVA_UTIL_DATE);

            } else if (DataTypes.TIME == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getRemovedDateTimeData(iRow, sColumnName) , JAVA_UTIL_DATE);

            } else if (DataTypes.DATE_TIME == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getRemovedDateTimeData(iRow, sColumnName) , JAVA_UTIL_DATE);

            } else if (DataTypes.BLOB == iColumnDataType) {
                this.callSetterMethod(vo, sColumnName, ds.getRemovedBlobData(iRow, sColumnName) , JAVA_BYTES);

            }

            //해당되는 타입이 없다면 그냥 Object로 가지고 오게 하자.
            else {
                this.callSetterMethod(vo, sColumnName, ds.getRemovedData(iRow, sColumnName).toString() , JAVA_LANG_STRING);
            }
        }

		if (vo.getClass() == JAVA_UTIL_HASHMAP) { 
			((Map) vo).put("UPDT_USID", variableMap.get("GBL_USERID"));
			((Map) vo).put("UPDT_DATE", DateTime.getDateString("yyyyMMddHHmmss"));
			
			
			//================================================== 세션에 저장된 서버IP를 이용한 KEY_STRING 값 처리(2016년말 연말정산 솔루션 적용 대응)
			((Map) vo).put("WSVR_IPAR", variableMap.get("WSVR_IPAR"));
			((Map) vo).put("RGNB_KSTR", variableMap.get("RGNB_KSTR"));
			((Map) vo).put("ACNO_KSTR", variableMap.get("ACNO_KSTR"));
			//================================================== 세션에 저장된 서버IP를 이용한 KEY_STRING 값 처리(2016년말 연말정산 솔루션 적용 대응)
			
		}	 

        LOGGER.debug("vo->" + vo);
        return vo;
        
    }

    /**
     * 실제로 Vo에 있는 Setter method 를 호출한다.
     * HashMap 의 경우 단순한게 put 함수를 호출하게 하고
     * vo Class 의 경우 set 함수를 호출하게 하자.
     * @param vo
     * @param sColumnName
     * @param oSetVal
     * @param clsSetVal
     */
    private void callSetterMethod(Object vo, String sColumnName, Object oSetVal, Class<?> clsSetVal ) {
        boolean isVoMap = JAVA_UTIL_HASHMAP == vo.getClass(); //VoClass가 HashMap 인가 아닌가에 따라 구분이 필요하다.
        LOGGER.debug("isVoMap->" + isVoMap);

        if (isVoMap) {
            ((Map) vo).put(sColumnName, oSetVal);

        } else {
            String sMethodeName  = "set" + sColumnName.substring(0, 1).toUpperCase()
                                + sColumnName.substring(1, sColumnName.length());

            try {
                Method m = vo.getClass().getMethod(sMethodeName, clsSetVal);
                m.invoke(vo, oSetVal );

            } catch (SecurityException e) {
                LOGGER.warn("@Exception "+e.getMessage());
            } catch (NoSuchMethodException e) {
                LOGGER.warn("@Exception "+e.getMessage());
            } catch (IllegalArgumentException e) {
                LOGGER.warn("@Exception "+e.getMessage());
            } catch (IllegalAccessException e) {
                LOGGER.warn("@Exception "+e.getMessage());
            } catch (InvocationTargetException e) {
                LOGGER.warn("@Exception "+e.getMessage());
            }
        }
    }

	/* (non-Javadoc)
	 * @see core.ifw.cmm.request.CoreRequestIF#getSaveDataSetAll()
	 */
	public Map getSaveDataSetAll() throws Exception {

		Map mapDs = new HashMap();

        for(int i = 0; i < dataSetList.size(); i++) {
            DataSet ds = dataSetList.get(i);
            String sDsName = ds.getName();
            mapDs.put(sDsName, this.getDataSet(sDsName, "S"));
            mapDs.put(sDsName + "_DELETE", this.getDataSet(sDsName, "D"));
        }

        return mapDs;
	}

	/**
	 * <pre>
	 * 데이터셋을 Row Type에 따라서 필터링하여 반환한다.
	 * </pre>
	 *
	 * @param dsname 데이터셋명
	 * @param mode 값이 "S" 이면 저장/수정 행, "D"이면 삭제된 행
	 * @return mode 파라미터에 따라서 분리된 데이터셋의 리스트를 반환한다.
	 * @throws Exception
	 */
	private List getDataSet(String dsname, String mode) throws Exception {

        List list = new ArrayList();
        DataSet ds = this.dataSetList.get(dsname);
        String sVoClass = JAVA_UTIL_HASHMAP.getName();

        if (ds != null) {
        	if (mode.equals("S")) {
	            for (int iRow = 0; iRow < ds.getRowCount(); iRow++) {
	                list.add( invokeMethod( sVoClass, ds, iRow ) );
	            }
        	} else if (mode.equals("D")) {
	            for (int iRow = 0; iRow < ds.getRemovedRowCount(); iRow++) {
	                list.add( invokeMethodRemoved( sVoClass, ds, iRow ) );
	            }
        	}
        }

        return list;
	}

	
	/* (non-Javadoc)
	 * @see core.ifw.cmm.request.CoreRequestIF#getSessionValue(java.lang.String)
	 */
	public Object getSessionValue(String name) throws Exception {
		Object ret = this.request.getSession().getAttribute(name);
		return ret;
	}

}
