/**
 * core.erp.mdm.service.impl.MACA0080ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mac.service.MACA0080Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MACA0080ServiceImpl - 매체 전표순번생성 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.06
 * @version	1.0
 * @see		{@link MACA0080Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.06	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MACA0080Service")
public class MACA0080ServiceImpl extends EgovAbstractServiceImpl implements MACA0080Service {

	/**
	 * 전표순번생성 DAO class inject.
	 */
	@Resource(name = "MACA0080Dao")
	private MACA0080Dao dao;

	/**
	 * 광고주 순번 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 광고주,매체코드,매체사 순번 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CUSTXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 매체코드 순번 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 광고주,매체코드,매체사 순번 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_MEDFXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 매체사 순번 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 광고주,매체코드,매체사 순번 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_MEDXXM", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 광고주 순번 목록을 수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsMD_CUSTXM     = (List) saveData.get("dsMD_CUSTXM");  

        //DataSet의 Row Count만큼 돌면서  Update
		for (int i = 0; i < dsMD_CUSTXM.size(); i++) {
			
			
			rowVo = (Map) dsMD_CUSTXM.get(i);
			// 전표순번 테이블에서 광고주고트를 가지고 온다.
			int CUST_CODE = (int)dao.getCUST_CODE(rowVo);
			//광고주코드가 비어 있으면 insert 비어있지 않으면 update
			if(CUST_CODE==0){

				dao.processSAVE00(rowVo);
			}else{
				dao.processUPDATE00(rowVo);				
			}

		}
		
		return 0;

	}
	
	/**
	 * 매체코드 순번 목록을 수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsMD_MEDFXM     = (List) saveData.get("dsMD_MEDFXM");  

        //DataSet의 Row Count만큼 돌면서 Update
		for (int i = 0; i < dsMD_MEDFXM.size(); i++) {

			rowVo = (Map) dsMD_MEDFXM.get(i);
			
			// 전표순번 테이블에서 광고주고트를 가지고 온다.
			int MEDX_FLAG = (int)dao.getMEDX_FLAG(rowVo);
			
			//광고주코드가 비어 있으면 insert 비어있지 않으면 update
			if(MEDX_FLAG==0){

				dao.processSAVE01(rowVo);
			}else{
				dao.processUPDATE01(rowVo);				
			}
			

		}
		
		return 0;

	}
	
	/**
	 * 매체사 순번 목록을 수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsMD_MEDXXM     = (List) saveData.get("dsMD_MEDXXM");  

        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_MEDXXM.size(); i++) {

			rowVo = (Map) dsMD_MEDXXM.get(i);
			
			// 전표순번 테이블에서 광고주코드를 가지고 온다.
			int MEDX_CODE = (int)dao.getMEDX_CODE(rowVo);
			
			//광고주코드가 비어 있으면 insert 비어있지 않으면 update
			if(MEDX_CODE==0){
				dao.processSAVE02(rowVo);
			}else{
				dao.processUPDATE02(rowVo);				
			}

		}
		
		return 0;

	}
	
	
	
	
}
