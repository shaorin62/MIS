/**
 * core.erp.pay.service.impl.PAYB0100ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0100Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0100ServiceImpl - 급여압류관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.26
 * @version	1.0
 * @see		{@link PAYB0100Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0100Service")
public class PAYB0100ServiceImpl extends EgovAbstractServiceImpl implements PAYB0100Service {

	/**
	 * 급여압류관리 DAO class inject.
	 */
	@Resource(name = "PAYB0100Dao")
	private PAYB0100Dao dao;

	/**
	 * 급여압류 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여압류 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SIZRXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 급여압류공제 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여압류공제 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SIZRXD", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	/**
	 * 기타상환내역 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SIZRXD", dao.processSEARCH02(searchVo));
		return returnMap;
	}
	/**
	 * PAYB0100 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_SIZRXM     = (List) saveData.get("dsPY_SIZRXM");  
		List dsPY_SIZRXM_Del = (List) saveData.get("dsPY_SIZRXM_DELETE");

		List dsPY_SIZRXD     = (List) saveData.get("dsPY_SIZRXD");  
		List dsPY_SIZRXD_Del = (List) saveData.get("dsPY_SIZRXD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_SIZRXD_Del.size(); i++) {

        	rowVo = (Map) dsPY_SIZRXD_Del.get(i);
			dao.processDELETE01(rowVo);
			iTotCnt++;

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_SIZRXM_Del.size(); i++) {

        	rowVo = (Map) dsPY_SIZRXM_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_SIZRXM.size(); i++) {

			rowVo = (Map) dsPY_SIZRXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_SIZRXD.size(); i++) {

			rowVo = (Map) dsPY_SIZRXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE01(rowVo);

			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
}
