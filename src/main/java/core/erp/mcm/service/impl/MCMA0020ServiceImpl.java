/**
 * core.erp.mcm.service.impl.MCMA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mcm.service.MCMA0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MCMA0020ServiceImpl - 광고주관리(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.05
 * @version	1.0
 * @see		{@link MCMA0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.31	조민희		Initial Created.
 * 2016.10.05	최제현		Check and Revise.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MCMA0020Service")
public class MCMA0020ServiceImpl extends EgovAbstractServiceImpl implements MCMA0020Service {

	/**
	 * 광고주관리(신규) DAO class inject.
	 */
	@Resource(name = "MCMA0020Dao")
	private MCMA0020Dao dao;

	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 광고주 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CUSTXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 광고주 팀 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 광고주 팀 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CUSTXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 카테고리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 광고주 팀 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CATEXM", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * 코바넷코드 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 코바넷코드 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_KBNTXM", dao.processSEARCH03(searchVo));
		return returnMap;

    }
	
	/**
	 * SBS코드 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 SBS코드 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_KBNTXM00", dao.processSEARCH04(searchVo));
		return returnMap;

    }
	
	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 광고주 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH05(searchVo));
		return returnMap;
	}

	/**
	 * MCMA0020 광고주팀 저장,수정 및 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsMD_CUSTXM     = (List) saveData.get("dsMD_CUSTXM");  
		List dsMD_CUSTXM_Del = (List) saveData.get("dsMD_CUSTXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_CUSTXM_Del.size(); i++) {

        	rowVo = (Map) dsMD_CUSTXM_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_CUSTXM.size(); i++) {

			rowVo = (Map) dsMD_CUSTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				String NewCUST_CODE = dao.processNEW_CUST_CODE(rowVo);
				rowVo.put("CUST_CODE", NewCUST_CODE);	
				if(rowVo.get("GUBN_FLAG")=="1"||rowVo.get("GUBN_FLAG").equals("1")){
					rowVo.put("SUBX_CODE", rowVo.get("CUST_CODE"));
				}
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				if(rowVo.get("GUBN_FLAG")=="1"||rowVo.get("GUBN_FLAG").equals("1")){
					rowVo.put("SUBX_CODE", rowVo.get("CUST_CODE"));
				}
				updateCount += dao.processUPDATE01(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	/**
	 * MCMA0020 카테고리 저장,수정 및 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsMD_CATEXM     = (List) saveData.get("dsMD_CATEXM");  
		List dsMD_CATEXM_Del = (List) saveData.get("dsMD_CATEXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_CATEXM_Del.size(); i++) {

        	rowVo = (Map) dsMD_CATEXM_Del.get(i);
			deleteCount += dao.processDELETE02(rowVo);

		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_CATEXM.size(); i++) {

			rowVo = (Map) dsMD_CATEXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				String NewCATE_CODE=null;
				
				//카테코드가 있는지 확인한다.
				String CATE_CODE = dao.processGET_CATE_CODE(rowVo);
				if(CATE_CODE==null){
					//없으면 000을 초기에 넣는다.
					NewCATE_CODE = "000";
				}else{
					//있으면 채번한다.
					NewCATE_CODE = dao.processNEW_CATE_CODE(rowVo);					
				}
				rowVo.put("CATE_CODE", NewCATE_CODE);
				
				dao.processSAVE02(rowVo);

			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE02(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	
	/**
	 * MCMA0020 코바넷코드 저장,수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE03(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsMD_KBNTXM     = (List) saveData.get("dsMD_KBNTXM");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_KBNTXM.size(); i++) {

			rowVo = (Map) dsMD_KBNTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
				String cust_code = dao.processGET_CUST_CODE(rowVo);
				if(cust_code == null || cust_code == ""){
					dao.processSAVE03(rowVo);
				}else{
					updateCount += dao.processUPDATE03(rowVo);
				}
			}
		}
		return updateCount;

	}
	
	/**
	 * MCMA0020 SBS코드 저장,수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE04(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsMD_KBNTXM00     = (List) saveData.get("dsMD_KBNTXM00");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_KBNTXM00.size(); i++) {

			rowVo = (Map) dsMD_KBNTXM00.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
				String cust_code = dao.processGET_CUST_CODE(rowVo);
				if(cust_code == null || cust_code == ""){
					dao.processSAVE04(rowVo);
				}else{
					updateCount += dao.processUPDATE04(rowVo);
				}
			}
		}
		
		return updateCount;

	}
	
	
}
