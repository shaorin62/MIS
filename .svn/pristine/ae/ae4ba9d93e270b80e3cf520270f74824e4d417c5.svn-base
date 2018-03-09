/**
 * core.erp.hrm.service.impl.HRMC0015ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMC0015Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMC0015ServiceImpl - 사원명부(다중검색조건설정) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.09.26
 * @version	1.0
 * @see		{@link HRMC0015Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMC0015Service")
public class HRMC0015ServiceImpl extends EgovAbstractServiceImpl implements HRMC0015Service {

	/**
	 * 사원명부(다중검색조건설정) DAO class inject.
	 */
	@Resource(name = "HRMC0015Dao")
	private HRMC0015Dao dao;

	/**
	 * 조건검색내용 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 조건검색내용 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH000(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsDM_LISTXM1", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	@SuppressWarnings("rawtypes")
	public Object processSEARCH001(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsDM_LISTXM2", dao.processSEARCH00(searchVo));
		return returnMap;

    }	
	
	/**
	 * 조건검색항목 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 조건검색항목 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsDM_LISTXM1", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 공통코드상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_CNQRXM", dao.processSEARCH02(searchVo));
		return returnMap;

    }

	/**
	 * 부서정보 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 부서정보 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_CNQRXD", dao.processSEARCH03(searchVo));
		return returnMap;

    }

	/**
	 * 인사기본정보 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인사기본정보 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();

		String sDEPT_CODE = (String) searchVo.get("DEPT_CODE");
		if(!sDEPT_CODE.equals("")){
			
			 List<String> arrayList= new ArrayList<String>();
			 
			 String[] aDEPT_CODE = sDEPT_CODE.split(",");
			 
			 for(int i=0;i<aDEPT_CODE.length;i++){
				 
				 arrayList.add(aDEPT_CODE[i]);
			 }
			 
			 searchVo.put("DEPT_LIST",arrayList);
			
		}		
		
		returnMap.put("dsHR_MASTXM", dao.processSEARCH04(searchVo));
		
		return returnMap;

    }

	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_CNQRXD", dao.processSEARCH05(searchVo));
		return returnMap;

    }

	/**
	 * HRMC0015 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsHR_CNQRXM     = (List) saveData.get("dsHR_CNQRXM");
		List dsHR_CNQRXM_Del = (List) saveData.get("dsHR_CNQRXM_DELETE");

		List dsHR_CNQRXD     = (List) saveData.get("dsHR_CNQRXD");  



		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_CNQRXM_Del.size(); i++) {

        	rowVo = (Map) dsHR_CNQRXM_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;
			
		}
        
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_CNQRXM.size(); i++) {

			rowVo = (Map) dsHR_CNQRXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}	
			iTotCnt++;
			
		}
		
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_CNQRXD.size(); i++) {

			rowVo = (Map) dsHR_CNQRXD.get(i);		

			if (rowVo.get("USEX_YSNO").equals("1")) {
			
				dao.processSAVE01(rowVo);

			}else{
				
				dao.processDELETE01(rowVo);
			}
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
}
