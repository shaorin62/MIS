/**
 * core.erp.pcm.service.impl.PCMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pcm.service.impl;


import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pcm.service.PCMA0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PCMA0010ServiceImpl -제작관리 견적코드 (신규) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.09.02
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.02	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Service("PCMA0010Service")
public class PCMA0010ServiceImpl extends EgovAbstractServiceImpl implements PCMA0010Service {

	/**
	 * 공통코드관리(신규) DAO class inject.
	 */
	@Resource(name = "PCMA0010Dao")
	private PCMA0010Dao dao;

	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_ITEMXD", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작 코드 분류항목 코드를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 제작 분류항목 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_ITEMXH", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * PCMA0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsPD_ITEMXH     = (List) saveData.get("dsPD_ITEMXH");  
		List dsPD_ITEMXH_Del = (List) saveData.get("dsPD_ITEMXH_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_ITEMXH_Del.size(); i++) {

        	rowVo = (Map) dsPD_ITEMXH_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_ITEMXH.size(); i++) {

			rowVo = (Map) dsPD_ITEMXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			String HIGH_LEVL = (String) rowVo.get("HIGH_LEVL");
			String MIDD_LEVL = (String) rowVo.get("MIDD_LEVL");
			String CLAS_TYPE = (String) rowVo.get("CLAS_TYPE");

			
			if (rowType == 1) {
				
				
				System.out.println("====================>>" + HIGH_LEVL);
				//대분류코드가 비어있거나 신규일경우 
				if(HIGH_LEVL =="" || HIGH_LEVL.equals("신규")){
					HIGH_LEVL = "";
					HIGH_LEVL = dao.getHIGH_LEVL(CLAS_TYPE);
					
					rowVo.put("HIGH_LEVL", HIGH_LEVL );
				}
				
				if(MIDD_LEVL == "" || MIDD_LEVL == null)
				{
					MIDD_LEVL = "";
					MIDD_LEVL = dao.getMIDD_LEVL(HIGH_LEVL);
					
					rowVo.put("MIDD_LEVL", MIDD_LEVL);
				}
				
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	
	/**
	 *  PCMA0010 저장,수정 또는 삭제한다.
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

		List dsPD_ITEMXD     = (List) saveData.get("dsPD_ITEMXD");  
		List dsPD_ITEMXD_Del = (List) saveData.get("dsPD_ITEMXD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_ITEMXD_Del.size(); i++) {

        	rowVo = (Map) dsPD_ITEMXD_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_ITEMXD.size(); i++) {

			rowVo = (Map) dsPD_ITEMXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			String HIGH_LEVL = (String) rowVo.get("HIGH_LEVL");
			String MIDD_LEVL = (String) rowVo.get("MIDD_LEVL");
			String SUBX_LEVL = (String) rowVo.get("SUBX_LEVL");
			
			int iDOME_YN =  ((BigDecimal) rowVo.get("DOME_YN")).intValue();
			
			switch(iDOME_YN){
			case 1 : 
				rowVo.put("DOME_YN", "Y");
				break;
			case 0 :
				rowVo.put("DOME_YN", "N");
				break;
			}
			
			int iMODL_FLAG =  ((BigDecimal) rowVo.get("MODL_FLAG")).intValue();
			
			switch(iMODL_FLAG){
			case 1 : 
				rowVo.put("MODL_FLAG", "Y");
				break;
			case 0 :
				rowVo.put("MODL_FLAG", "N");
				break;
			}

			
			if (rowType == 1) {
				
				//대분류코드가 비어있거나 신규일경우 
				if(SUBX_LEVL == "" || SUBX_LEVL == null){
					SUBX_LEVL = "";
					SUBX_LEVL = dao.getSUBX_LEVL(rowVo);
					
					rowVo.put("SUBX_LEVL", SUBX_LEVL );
				}
				
				String ITEM_CODE = HIGH_LEVL + MIDD_LEVL + SUBX_LEVL;
				
				rowVo.put("ITEM_CODE", ITEM_CODE );
				
				
				
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE01(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
}
