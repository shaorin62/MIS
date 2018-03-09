/**
 * core.erp.mcm.service.impl.MCMA0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mcm.service.MCMA0050Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MCMA0050ServiceImpl - 코바넷매체등록(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.10
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	조민희		Initial Created.
 * 2016.09.06	조민희		Check and Revise.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MCMA0050Service")
public class MCMA0050ServiceImpl extends EgovAbstractServiceImpl implements MCMA0050Service {

	/**
	 * 코바넷매체등록(신규) DAO class inject.
	 */
	@Resource(name = "MCMA0050Dao")
	private MCMA0050Dao dao;

	/**
	 * 코바넷매체코드 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 코바넷매체코드 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_RMEDXM_01", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * SBS매체코드 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 SBS매체코드 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_RMEDXM_02", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 코바넷매체코드 (FOR 바인딩) 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 코바넷매체코드 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsKBNT_LIST", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * MCMA0050 코바넷매체코드 저장,수정 및 삭제한다.
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

		List dsMD_RMEDXM_01     = (List) saveData.get("dsMD_RMEDXM_01");  
		List dsMD_RMEDXM_01_Del = (List) saveData.get("dsMD_RMEDXM_01_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_RMEDXM_01_Del.size(); i++) {

        	rowVo = (Map) dsMD_RMEDXM_01_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);
			updateCount+=dao.processUPDATE04(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_RMEDXM_01.size(); i++) {

			rowVo = (Map) dsMD_RMEDXM_01.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				dao.processSAVE00(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE02(rowVo);
			}
			//매체테이블에 코바넷 코드를 넣는다.
			updateCount += dao.processUPDATE00(rowVo);

			
		}
		
		return deleteCount+updateCount;

	}
	
	/**
	 * MCMA0050 SBS매체코드 저장,수정 및 삭제한다.
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

		List dsMD_RMEDXM_02     = (List) saveData.get("dsMD_RMEDXM_02");
		List dsMD_RMEDXM_02_Del = (List) saveData.get("dsMD_RMEDXM_02_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_RMEDXM_02_Del.size(); i++) {

        	rowVo = (Map) dsMD_RMEDXM_02_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);
			updateCount+=dao.processUPDATE04(rowVo);
		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_RMEDXM_02.size(); i++) {
			
			rowVo = (Map) dsMD_RMEDXM_02.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				dao.processSAVE01(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE03(rowVo);
				
				
			}
			//매체테이블에 코바넷 코드를 넣는다.
			updateCount += dao.processUPDATE01(rowVo);
			
		}
		
		return deleteCount+updateCount;

	}
	
	


}
