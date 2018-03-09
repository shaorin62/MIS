/**
 * core.erp.pay.service.impl.PAYB0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0050Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0050ServiceImpl - 성과상여등록 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.18
 * @version	1.0
 * @see		{@link PAYB0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.18	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0050Service")
public class PAYB0050ServiceImpl extends EgovAbstractServiceImpl implements PAYB0050Service {

	/**
	 * 성과상여등록 DAO class inject.
	 */
	@Resource(name = "PAYB0050Dao")
	private PAYB0050Dao dao;

	/**
	 * 상여율 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 상여율 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_BONYRT", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 개인별성과상여금 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급별상여율 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_EVBONU", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 공통코드의 성과상여 기준값 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 평가등급별상여율 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPMBU_CONF", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	/**
	 * 성과상여 계산 처리
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 처리결과
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map saveData,Map searchVo) throws Exception{
		
		Map rowVo = null;
		
		List dsPMBU_CONF     = (List) saveData.get("dsPMBU_CONF");  
		List dsPY_BONYRT     = (List) saveData.get("dsPY_BONYRT");  
		
		if (dsPMBU_CONF.size() > 0) {
			rowVo = (Map) dsPMBU_CONF.get(0);
			rowVo.put("SYNT_EACD", searchVo.get("SYNT_EACD"));
			dao.processSAVE02(rowVo);			
		}
        
		for (int i = 0; i < dsPY_BONYRT.size(); i++) {

			rowVo = (Map) dsPY_BONYRT.get(i);
			rowVo.put("SYNT_EACD", searchVo.get("SYNT_EACD"));
			dao.processSAVE01(rowVo);
		}		

		dao.processPROC00(searchVo);
		
	}
	/**
	 * PAYB0050 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_EVBONU     = (List) saveData.get("dsPY_EVBONU");  
		List dsPY_EVBONU_Del = (List) saveData.get("dsPY_EVBONU_DELETE");

        for (int i = 0; i < dsPY_EVBONU_Del.size(); i++) {

        	rowVo = (Map) dsPY_EVBONU_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_EVBONU.size(); i++) {

			rowVo = (Map) dsPY_EVBONU.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {			
				
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				
				dao.processUPDATE00(rowVo);
			
			}
		}
		
		return iTotCnt;

	}
}
