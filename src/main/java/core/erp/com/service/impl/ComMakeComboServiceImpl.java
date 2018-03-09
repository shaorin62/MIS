package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

import core.erp.com.service.ComMakeComboService;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**																										
 * <pre>                                                                                                
 *	CommMakeComboServiceImpl - 템플릿 구현                                                   
 * <p><b>NOTE : </b>템플릿에 사용한 서비스 인터페이스의 구현클래스이며, 해당 템플릿은 공통메시지 기능을 이용하였음.</p>   
 * </pre>                                                                                               
 *                                                                                                      
 * @author	developer <email@inbus.co.kr>                                                               
 * @since	2014. 9. 23.                                                                                
 * @version	1.0                                                                                         
 *                                                                                                      
 * <pre>                                                                                                
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2014. 9. 23.	developer		Initial Created.                                                        
 * ====================================================                                                 
 * </pre>                                                                                               
 *                                                                                                      
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.                                            
 */                                                                                                     



/******************************************************************************
 * <pre>
 *   
 *   프로그램명 : ComMakeCombo Package
 *   클래스명 : CommMakeComboController.java
 *   작성일자 : 2014. 09. 27.
 *   작 성 자 : 임선빈
 *   비   고 :
 *   Copyright (c) 2011 Inbus Co.,Ltd All Rights reserved.
 * 
 * </pre> 
 *****************************************************************************/

@Service("ComMakeComboService")
public class ComMakeComboServiceImpl extends EgovAbstractServiceImpl implements ComMakeComboService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComMakeComboServiceImpl.class);

	@Resource(name="ComMakeComboDao")
	private ComMakeComboDao comMakeComboDao;


	@SuppressWarnings("rawtypes")
	public Object processGetCommCode(Map searchVo, List<Map> dsCombo) throws Exception {
    	
		// 데이터셋에서 데이터 꺼내서 공통코드 조회
		Iterator<Map> it = dsCombo.iterator();
		Map dataVo = null;
		Object dsCode = null;
		
		String sHeadFlag = null;
		String sDsName = "";
		
		Map<String, Object> dsList = new HashMap<String, Object>();
		
		while(it.hasNext()) {
			
			dataVo = it.next();
			sHeadFlag = (String) dataVo.get("HEADFLAG");
			sDsName = (String) dataVo.get("DSNAME");
			dataVo.put("GBL_LANGCD", searchVo.get("GBL_LANGCD"));	// 시스템언어코드
			dsCode = comMakeComboDao.processGetCommCode(dataVo);
			
			//head 부분에 한 Row의 추가 여부와 문구 결정
            if(sHeadFlag.equals("ALL")){
            	DataSetUtil.insertRow(dsCode, 0);
            	DataSetUtil.setColumn(dsCode, 0, "COMD_CDNM", "전체");
            }else if(sHeadFlag.equals("SELECT")){
            	DataSetUtil.insertRow(dsCode, 0);
            	DataSetUtil.setColumn(dsCode, 0, "COMD_CDNM", "선택");
            }else if(sHeadFlag.equals("EMPTY")){
            	DataSetUtil.insertRow(dsCode, 0);
            	DataSetUtil.setColumn(dsCode, 0, "COMD_CDNM", "");
            }else if(sHeadFlag.equals("ETC")){
            	DataSetUtil.insertRow(dsCode, 0);
            	DataSetUtil.setColumn(dsCode, 0, "COMD_CDNM", "기타");
            }

            dsList.put(sDsName, dsCode);
			
		}
		
		return dsList;

    }


    /**
     * 2014.12 : 연말정산용 공통코드!!
     * @throws Exception
     */
	@SuppressWarnings("rawtypes")
	public Object processGetCommCode_YEA(List<Map> dsCombo) throws Exception {
    	
		// 데이터셋에서 데이터 꺼내서 공통코드 조회
		Iterator<Map> it = dsCombo.iterator();
		Map searchVo = null;
		Object dsCode = null;
		
		String sHeadFlag = null;
		String sDsName = "";
		
		Map<String, Object> dsList = new HashMap<String, Object>();
		
		while(it.hasNext()) {
			
			searchVo = it.next();
			sHeadFlag = (String) searchVo.get("HEADFLAG");
			sDsName = (String) searchVo.get("DSNAME");
			
			dsCode = comMakeComboDao.processGetCommCode_YEA(searchVo);
			
			//head 부분에 한 Row의 추가 여부와 문구 결정
            if(sHeadFlag.equals("ALL")){
            	DataSetUtil.insertRow(dsCode, 0);
            	DataSetUtil.setColumn(dsCode, 0, "COMD_CDNM", "전체");
            }else if(sHeadFlag.equals("SELECT")){
            	DataSetUtil.insertRow(dsCode, 0);
            	DataSetUtil.setColumn(dsCode, 0, "COMD_CDNM", "선택");
            }else if(sHeadFlag.equals("EMPTY")){
            	DataSetUtil.insertRow(dsCode, 0);
            	DataSetUtil.setColumn(dsCode, 0, "COMD_CDNM", "");
            }else if(sHeadFlag.equals("ETC")){
            	DataSetUtil.insertRow(dsCode, 0);
            	DataSetUtil.setColumn(dsCode, 0, "COMD_CDNM", "기타");
            }

            dsList.put(sDsName, dsCode);
			
		}
		
		return dsList;

    }
	
	@SuppressWarnings("rawtypes")
	public Object processGetUserComboCode(List<Map> dsCombo) throws Exception {
    	
		// 데이터셋에서 데이터 꺼내서 공통코드 조회
		Iterator<Map> it = dsCombo.iterator();
		Map searchVo = null;
		Map<String, Object> searchUserList = new HashMap<String, Object>();
		
		Map dsCode = null;
		Object dsUserCode = null;
		
		String sQuery    = "";
		String sHeadFlag = null;
		String sDsName 	 = "";
		String sParam    = "";
		String sUseYsNo  = "";
		
		Map<String, Object> dsList = new HashMap<String, Object>();
		int questnCnt = 0;
		
		String[] params = null;
		
		while(it.hasNext()) {
			
			searchVo = it.next();

			dsCode = (Map) comMakeComboDao.processGetUserComboCode(searchVo);
			
			if (!dsCode.isEmpty()) {
				
        		sQuery       = "";                                         //쿼리 문장 초기화
    			sHeadFlag = (String) searchVo.get("HEADFLAG");
    			sDsName   = (String) searchVo.get("DSNAME");
        		sParam    = (String) (searchVo.get("PARAM") == null ? "" : searchVo.get("PARAM"));
        		sUseYsNo  = (String) searchVo.get("USEYSNO");
        		
        		if (sUseYsNo == null) {
        			sUseYsNo = "";
        		}
        		
        		params = StringUtils.commaDelimitedListToStringArray(sParam);
        		
        		sQuery += " " + (dsCode.get("SECH_SYNX") == null ? "" : dsCode.get("SECH_SYNX"));
        		sQuery += " " + (dsCode.get("WHRE_SYNT") == null ? "" : dsCode.get("WHRE_SYNT"));	
        		//사용 여부가  Yes인 자료만 조회 처리 시
        		if (sUseYsNo.equals("Y")) {
        			sQuery += " " + (dsCode.get("USYN_SYNX") == null ? "" : dsCode.get("USYN_SYNX"));
        		}	
        		sQuery += " " + (dsCode.get("ADDX_SYNT") == null ? "" : dsCode.get("ADDX_SYNT"));
        		sQuery += " " + (dsCode.get("SORT_SYNX") == null ? "" : dsCode.get("SORT_SYNX"));
				
			}
			LOGGER.info("user");			
			questnCnt = StringUtils.countOccurrencesOf(sQuery, "?");
			for(int idx = 0; idx < questnCnt; idx++) {
				
				sQuery = sQuery.replaceFirst("[?]", params[idx] == null ? "''" : "'"+params[idx]+"'");
			}
			
			searchUserList.put("COMBOQUERY", sQuery);
			
			dsUserCode = comMakeComboDao.processGetUserComboData(searchUserList);
			
			//head 부분에 한 Row의 추가 여부와 문구 결정
            if(sHeadFlag.equals("ALL")){
            	((DataSet) dsUserCode).newRow(0);
            	((DataSet) dsUserCode).set(0, "COMB_NAME", "전체");
            }else if(sHeadFlag.equals("SELECT")){
            	((DataSet) dsUserCode).newRow(0);
            	((DataSet) dsUserCode).set(0, "COMB_NAME", "선택");
            }else if(sHeadFlag.equals("EMPTY")){
            	((DataSet) dsUserCode).newRow(0);
            	((DataSet) dsUserCode).set(0, "COMB_NAME", "");
            }else if(sHeadFlag.equals("ETC")){
            	((DataSet) dsCode).newRow(0);
            	((DataSet) dsCode).set(0, "COMD_CDNM", "기타");
            }

            dsList.put(sDsName, dsUserCode);
            
		}
		
		return dsList;

    }	



    /**
     * 2014.12 : 연말정산용 콤보!!
     * @throws Exception
     */
	@SuppressWarnings("rawtypes")
	public Object processGetUserComboCode_YEA(List<Map> dsCombo) throws Exception {
    	
		// 데이터셋에서 데이터 꺼내서 공통코드 조회
		Iterator<Map> it = dsCombo.iterator();
		Map searchVo = null;
		Map<String, Object> searchUserList = new HashMap<String, Object>();
		
		Map dsCode = null;
		Object dsUserCode = null;
		
		String sQuery    = "";
		String sHeadFlag = null;
		String sDsName 	 = "";
		String sParam    = "";
		String sUseYsNo  = "";
		
		Map<String, Object> dsList = new HashMap<String, Object>();
		int questnCnt = 0;
		
		String[] params = null;
		
		while(it.hasNext()) {
			
			searchVo = it.next();

			dsCode = (Map) comMakeComboDao.processGetUserComboCode(searchVo);
			
			if (!dsCode.isEmpty()) {
				
        		sQuery       = "";                                         //쿼리 문장 초기화
    			sHeadFlag = (String) searchVo.get("HEADFLAG");
    			sDsName   = (String) searchVo.get("DSNAME");
        		sParam    = (String) (searchVo.get("PARAM") == null ? "" : searchVo.get("PARAM"));
        		sUseYsNo  = (String) searchVo.get("USEYSNO");
        		
        		if (sUseYsNo == null) {
        			sUseYsNo = "";
        		}
        		
        		params = StringUtils.commaDelimitedListToStringArray(sParam);
        		
        		sQuery += " " + (dsCode.get("SECH_SYNX") == null ? "" : dsCode.get("SECH_SYNX"));
        		sQuery += " " + (dsCode.get("WHRE_SYNT") == null ? "" : dsCode.get("WHRE_SYNT"));	
        		//사용 여부가  Yes인 자료만 조회 처리 시
        		if (sUseYsNo.equals("Y")) {
        			sQuery += " " + (dsCode.get("USYN_SYNX") == null ? "" : dsCode.get("USYN_SYNX"));
        		}	
        		sQuery += " " + (dsCode.get("ADDX_SYNT") == null ? "" : dsCode.get("ADDX_SYNT"));
        		sQuery += " " + (dsCode.get("SORT_SYNX") == null ? "" : dsCode.get("SORT_SYNX"));
				
			}
			
			questnCnt = StringUtils.countOccurrencesOf(sQuery, "?");
			for(int idx = 0; idx < questnCnt; idx++) {
				
				sQuery = sQuery.replaceFirst("[?]", params[idx] == null ? "''" : "'"+params[idx]+"'");
			}
			
			searchUserList.put("COMBOQUERY", sQuery);
			
			dsUserCode = comMakeComboDao.processGetUserComboData(searchUserList);
			
			//head 부분에 한 Row의 추가 여부와 문구 결정
            if(sHeadFlag.equals("ALL")){
            	((DataSet) dsUserCode).newRow(0);
            	((DataSet) dsUserCode).set(0, "YEA_COMD_NM", "전체");
            }else if(sHeadFlag.equals("SELECT")){
            	((DataSet) dsUserCode).newRow(0);
            	((DataSet) dsUserCode).set(0, "YEA_COMD_NM", "선택");
            }else if(sHeadFlag.equals("EMPTY")){
            	((DataSet) dsUserCode).newRow(0);
            	((DataSet) dsUserCode).set(0, "YEA_COMD_NM", "");
            }else if(sHeadFlag.equals("ETC")){
            	((DataSet) dsCode).newRow(0);
            	((DataSet) dsCode).set(0, "YEA_COMD_NM", "기타");
            }

            dsList.put(sDsName, dsUserCode);
            
		}
		
		return dsList;

    }	

	@SuppressWarnings("rawtypes")
	public Object processGetUserComboCodeSingle(Map dsCombo) throws Exception {
    	
		// 데이터셋에서 데이터 꺼내서 공통코드 조회
		//Iterator<Map> it = dsCombo.iterator();
		Map searchVo = null;
		Map<String, Object> searchUserList = new HashMap<String, Object>();
		
		Map dsCode = null;
		Object dsUserCode = null;
		
		String sQuery    = "";
		
		Map<String, Object> dsList = new HashMap<String, Object>();
		int questnCnt = 0;
		
		String[] params = null;
				
		String sDatasetName = (String) dsCombo.get("DSNAME");   //단말로 보낼 Dataset Name
		String sComboID     = (String) dsCombo.get("COMBOID");  //콤보  ID
		String sHeadFlag    = (String) dsCombo.get("HEADFLAG"); //콤보 Head Flag
		String sUseYsNo     = (String) dsCombo.get("USEYSNO");  //사용 여부 포함 여부 
		String sParam       = (String) dsCombo.get("PARAM");    //콤보 조회 조건 값 
		String sParameter = "";
		
		dsCode = (Map) comMakeComboDao.processGetUserComboCodeSingle(dsCombo);
		if (!dsCode.isEmpty()) {
			params = StringUtils.commaDelimitedListToStringArray(sParam);
			
			sQuery += " " + (dsCode.get("SECH_SYNX") == null ? "" : dsCode.get("SECH_SYNX"));
			sQuery += " " + (dsCode.get("WHRE_SYNT") == null ? "" : dsCode.get("WHRE_SYNT"));	
			//사용 여부가  Yes인 자료만 조회 처리 시
			if (sUseYsNo.equals("Y")) {
				sQuery += " " + (dsCode.get("USYN_SYNX") == null ? "" : dsCode.get("USYN_SYNX"));
			}	
			sQuery += " " + (dsCode.get("ADDX_SYNT") == null ? "" : dsCode.get("ADDX_SYNT"));
			sQuery += " " + (dsCode.get("SORT_SYNX") == null ? "" : dsCode.get("SORT_SYNX"));		
		}
		
		questnCnt = StringUtils.countOccurrencesOf(sQuery, "?");
		//if ((params != null) && (params.length > 0)) {
			String paramVal = "";
			for(int idx = 0; idx < questnCnt; idx++) {
				if ((params.length > 0) && (params[idx] != null)) {
					paramVal = params[idx];
				}
				sQuery = sQuery.replaceFirst("[?]", "'" + paramVal + "'");
			}
		//}
		
		searchUserList.put("COMBOQUERY", sQuery);		
		
		dsUserCode = comMakeComboDao.processGetUserComboData(searchUserList);
		
        if(sHeadFlag.equals("ALL")){
        	((DataSet) dsUserCode).newRow(0);
        	((DataSet) dsUserCode).set(0, "COMB_NAME", "전체");
        }else if(sHeadFlag.equals("SELECT")){
        	((DataSet) dsUserCode).newRow(0);
        	((DataSet) dsUserCode).set(0, "COMB_NAME", "선택");
        }else if(sHeadFlag.equals("EMPTY")){
        	((DataSet) dsUserCode).newRow(0);
        	((DataSet) dsUserCode).set(0, "COMB_NAME", "");
        }else if(sHeadFlag.equals("ETC")){
        	((DataSet) dsCode).newRow(0);
        	((DataSet) dsCode).set(0, "COMD_CDNM", "기타");
        }    
        
        dsList.put(sDatasetName, dsUserCode);		

		return dsList;

    }	


    /**
     * 2014.12 : 연말정산용 콤보!!
     * @throws Exception
     */
	@SuppressWarnings("rawtypes")
	public Object processGetUserComboCodeSingle_YEA(Map dsCombo) throws Exception {
    	
		// 데이터셋에서 데이터 꺼내서 공통코드 조회
		//Iterator<Map> it = dsCombo.iterator();
		Map searchVo = null;
		Map<String, Object> searchUserList = new HashMap<String, Object>();
		
		Map dsCode = null;
		Object dsUserCode = null;
		
		String sQuery    = "";
		
		Map<String, Object> dsList = new HashMap<String, Object>();
		int questnCnt = 0;
		
		String[] params = null;
				
		String sDatasetName = (String) dsCombo.get("DSNAME");   //단말로 보낼 Dataset Name
		String sComboID     = (String) dsCombo.get("COMBOID");  //콤보  ID
		String sHeadFlag    = (String) dsCombo.get("HEADFLAG"); //콤보 Head Flag
		String sUseYsNo     = (String) dsCombo.get("USEYSNO");  //사용 여부 포함 여부 
		String sParam       = (String) dsCombo.get("PARAM");    //콤보 조회 조건 값 
		String sParameter = "";
		
		dsCode = (Map) comMakeComboDao.processGetUserComboCodeSingle(dsCombo);
		if (!dsCode.isEmpty()) {
			params = StringUtils.commaDelimitedListToStringArray(sParam);
			
			sQuery += " " + (dsCode.get("SECH_SYNX") == null ? "" : dsCode.get("SECH_SYNX"));
			sQuery += " " + (dsCode.get("WHRE_SYNT") == null ? "" : dsCode.get("WHRE_SYNT"));	
			//사용 여부가  Yes인 자료만 조회 처리 시
			if (sUseYsNo.equals("Y")) {
				sQuery += " " + (dsCode.get("USYN_SYNX") == null ? "" : dsCode.get("USYN_SYNX"));
			}	
			sQuery += " " + (dsCode.get("ADDX_SYNT") == null ? "" : dsCode.get("ADDX_SYNT"));
			sQuery += " " + (dsCode.get("SORT_SYNX") == null ? "" : dsCode.get("SORT_SYNX"));		
		}
		
		questnCnt = StringUtils.countOccurrencesOf(sQuery, "?");
		for(int idx = 0; idx < questnCnt; idx++) {
			sQuery = sQuery.replaceFirst("[?]", params[idx] == null ? "''" : "'"+params[idx]+"'");
		}
		searchUserList.put("COMBOQUERY", sQuery);		
		
		dsUserCode = comMakeComboDao.processGetUserComboData(searchUserList);
		
        if(sHeadFlag.equals("ALL")){
        	((DataSet) dsUserCode).newRow(0);
        	((DataSet) dsUserCode).set(0, "YEA_COMD_NM", "전체");
        }else if(sHeadFlag.equals("SELECT")){
        	((DataSet) dsUserCode).newRow(0);
        	((DataSet) dsUserCode).set(0, "YEA_COMD_NM", "선택");
        }else if(sHeadFlag.equals("EMPTY")){
        	((DataSet) dsUserCode).newRow(0);
        	((DataSet) dsUserCode).set(0, "YEA_COMD_NM", "");
        }else if(sHeadFlag.equals("ETC")){
        	((DataSet) dsCode).newRow(0);
        	((DataSet) dsCode).set(0, "YEA_COMD_NM", "기타");
        }    
        
        dsList.put(sDatasetName, dsUserCode);		

		return dsList;

    }


	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMakeComboService#processGetBranch(java.util.Map)
	 */
	// 2016.06.22 김준수 추가 본점/지점 검색
	public Object processGetBranch(Map searchVo) throws Exception {
		// TODO Auto-generated method stub
		Map<String, Object> returnDataMap = new HashMap<String, Object>();
		returnDataMap.put("dsBRANCH_CD",  comMakeComboDao.processGetSearchBranch(searchVo));
		return returnDataMap;
	}
	
	
}
