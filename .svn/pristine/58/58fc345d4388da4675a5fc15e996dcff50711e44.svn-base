package core.ifw.cmm.result;

import java.sql.SQLException;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.ResourceBundle;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import core.ifw.cmm.request.CALL_TYPE;
import core.ifw.utl.CoreProperties;


/**
 * Xplatform 으로 반환하기 위한 값들을 DataSet 이랑 Variable 로 변환을 시키자.
 *
 * @author 조정호
 * @since 2011.07.18
 * @version 1.0
 * @see <pre>
 * &lt;&lt; 개정이력(Modification Information) &gt;&gt;
 *
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2011.07.18  조정호          최초 생성
 *
 * Copyright (C) 2011 INBUS All right reserved.
 * </pre>
 */

public class CoreResultData {
    /**
     * Logger for this class
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(CoreResultData.class);

	private CALL_TYPE eCALL_TYPE;
	private CoreResultDataIF coreResultData;

	public CoreResultData(CALL_TYPE eCALL_TYPE) {
		this.eCALL_TYPE = eCALL_TYPE;

		if (eCALL_TYPE == CALL_TYPE.NEXACRO) {
			coreResultData = new CoreResultDataNexacro();
		}
	}

    /**
     * TYPE 이 뭔지 구분해서 가지고 오자.
     * @return
     */
    public CALL_TYPE getCALL_TYPE() {
        return eCALL_TYPE;
    }

    /**
     * 생성한 결과치를 가지고 오자.
     * @return
     */
    public Object getPlatformData() {
    	return coreResultData.getPlatformData();
    }

    /**
     * 결과 변수 추가
     * @param sKey
     * @param sVal
     */
    public void addVariableList(String sKey, String sVal) {
        coreResultData.addVariableList(sKey, sVal);
    }

    /**
     * 결과 메세지 추가
     * @param code
     * @param msg
     */
    public void setResultMessage(String code, String msg) {
        coreResultData.setResultMessage(code, msg);
    }

    /**
     * List 기반 데이타 셋 생성
     *
     * @param sDsName
     * @param ds
     * @param clsVoClass
     * @throws Exception
     */
    public void addDataSet(String sDsName, Object ds) throws Exception {
        coreResultData.addDataSet(sDsName, ds);
    }

    /**
     * List 기반 데이타 셋 생성
     *
     * @param dsname
     * @param list
     * @param clsVoClass
     * @throws Exception
     */
    public void addDataSet(String dsname, List list) throws Exception {
        coreResultData.addDataSet(dsname, list, null);
    }

    /**
     * List 기반 데이타 셋 생성
     *
     * @param dsname
     * @param list
     * @param clsVoClass
     * @throws Exception
     */
    public void addDataSet(String dsname, List list, Class clsVoClass) throws Exception {
    	coreResultData.addDataSet(dsname, list, clsVoClass);
    }



    public void setResultMessageSuccessSelect() {
        coreResultData.setResultMessage("0", "조회 성공 메세지");
    }

    public void setResultMessageFailSelect(Exception e) {
        //coreResultData.setResultMessage("-1", "조회 실패 메세지");
    	String errorMessage = extractErrorMessage(e);
        coreResultData.setResultMessage("-1", errorMessage);
    }

    public void setResultMessageSuccessSave() {
        coreResultData.setResultMessage("0", "저장 성공 메세지");
    }

    public void setResultMessageFailSave(Exception e) {
    	String errorMsg = extractErrorMessage(e);
        coreResultData.setResultMessage("-1", errorMsg);
    }

	/**
	 * <pre>
	 * 클라이언트로 전달할 값 또는 데이터셋을 처리한다.
	 * </pre>
	 *
	 * @param returnMap - 클라이언트로 전달할 값, 또는 데이터셋이 담겨진 Map 객체 처리 
	 */
	public void setReturnDataMap(Map<String, Object> returnMap) {
		
		//returnMap.key[];
		
		Set<String> keySet = returnMap.keySet();
		
		for (String key : keySet) {
			
			Object val = returnMap.get(key);
			
			//toLowerCase(val.getClass().getName().substring(val.getClass().getName().lastIndexOf("."),val.getClass().getName().length())
			String className = (val.getClass().getName()).toLowerCase();
			
			// 데이터셋 오브젝트인지 아닌지 판단하여 처리
			if (className.substring(className.lastIndexOf(".") + 1).equals("dataset")) {
				
				LOGGER.info("---------- Adding return dataset : " + key);
				
				try {
					coreResultData.addDataSet(key, val);
				} catch (Exception e) {
					LOGGER.warn("------- Dataset : " + key + ", Cannot put result dataset list.", e);
				}
			} else {
				if (val instanceof List) {
					try {
						coreResultData.addDataSet(key, (List) val);
					} catch (Exception e) {
						LOGGER.warn("------- Dataset : " + key + ", Cannot put result dataset list.", e);
					}
				} else {
					LOGGER.info("---------- Adding return variable : " + key);
					coreResultData.addVariableList(key, String.valueOf(val));
				}
			}
			
		}
		
		
	}
	
	
	// 2016-06-10 김준수 추가 
	// DataSet리스트 반환시 데이터셋이름 + list로 콜
	public void setReturnDataMap(String dsname, List list) throws Exception {
		coreResultData.addDataSet(dsname, list, null);
	}
	
	
	private String extractErrorMessage(Throwable e) {
		
		// SQL Exception 처리 진행
    	// Stacktrace에서 java.sql.SQLException 객체를 찾아서 해당 메시지를 처리한다.
    	Throwable t = e;
    	int loopCount = 0;
    	int sqlErrCode = 0;
    	
    	String errCode = "-1";
    	String errMsg = e.getMessage();
    	String localeStr = "ko";
    	
    	// exception의 원인 추적은 최대 5회 이내로 제한한다...
    	for (loopCount = 0; loopCount < 5; loopCount++) {
    		
    		// SQLException을 발견한 경우
    		if (t.getClass() == SQLException.class) {
		    	sqlErrCode = ((SQLException) t).getErrorCode();		// SQL 오류 코드
		    	errMsg = ((SQLException) t).getLocalizedMessage();	// SQL 오류 메시지
		    	
		    	if (sqlErrCode == 20000) {
		    		errMsg = errMsg.substring(errMsg.indexOf(" ") + 1);
		    		if (errMsg.indexOf("ORA-") > -1) {
		    			errMsg = errMsg.substring(0, errMsg.indexOf("ORA-"));	
		    		}
		    	} else if (sqlErrCode == -20000) {
		    		
		    		errMsg = errMsg.substring(errMsg.indexOf("JDBC-20000:") + 11);
		    		errMsg = errMsg.substring(0, errMsg.indexOf("TBR"));
		    		
		    	} else {
		    		
		    		// DB별 에러메시지를 처리...
		    		String dbType = CoreProperties.getProperty("CoreERP.dbType").toLowerCase();
		    		
		    		//String errFileName = "/core/config/message/sql-error-codes-".concat(dbType).concat("_ko_KR.properties");
		    		
		    		Locale locale = null;
		    		
		    		if ("en".equals(localeStr)) {
		    			locale = Locale.US;
		    		} else if ("ko".equals(localeStr)) {
		    			locale = Locale.KOREA;
		    		}

		    		ResourceBundle errorResourceBundle = ResourceBundle.getBundle("/core/config/message/sql-error-codes-".concat(dbType), locale);
		    		
		    		try {
						if (errorResourceBundle.containsKey(sqlErrCode + "")) {
							String actErrMsg = errorResourceBundle.getString(sqlErrCode + "");

							if ((actErrMsg != null) && !actErrMsg.isEmpty()) {
			    				errMsg = actErrMsg;
			    			}
						}
					} catch (Exception ex) {
						LOGGER.warn("---- Sql Error Code : " + sqlErrCode + ", Not exist on sql-error-codes files.");
					}
		    		
		    		/*
		    		Properties errCodes = new Properties();
		    		try {
						errCodes.load(new BufferedInputStream(CoreResultData.class.getResourceAsStream(errFileName)));
					} catch (IOException e1) {
						LOGGER.warn("--- Could not load properties files. File : " + errFileName);
					}
		    		
		    		System.out.println("------ error code stat : " + errCodes.isEmpty());
		    		
		    		if (!errCodes.isEmpty()) {
		    			
		    			System.out.println("------ Sysout " + sqlErrCode);
		    			String actErrMsg = errCodes.getProperty(sqlErrCode + "");
		    			
		    			if ((actErrMsg != null) && !actErrMsg.isEmpty()) {
		    				errMsg = actErrMsg;
		    			}
		    		}
		    		*/
		    		
		    	}
		    	
		    	break;
		    	
    		} else {
    			// 다음 오류 스택을 추적.
    			t = t.getCause();
    			
    			// 더이상 찾아낼 오류 스택이 없다면 반복문은 종료.
    			if (t == null) {
    				break;
    			}
    		}
    	}
    	
    	return errMsg;
    	
	}
	
}

