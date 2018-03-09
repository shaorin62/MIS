/**
 * core.erp.hrm.service.impl.HATD0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hat.service.HATD0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATD0030ServiceImpl - 연차관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김칠석
 * @since	2016.09.09
 * @version	1.0
 * @see		{@link HATD0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	김칠석		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATD0030Service")
public class HATD0030ServiceImpl extends EgovAbstractServiceImpl implements HATD0030Service {

	/**
	 * 연차관리 DAO class inject.
	 */
	@Resource(name = "HATD0030Dao")
	private HATD0030Dao dao;

	/**
	 * 연차관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 자격사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ANNUXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 연차관리를 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_GBHOBO     = (List) saveData.get("dsAT_ANNUXM");  
		List dsPY_GBHOBO_Del = (List) saveData.get("dsAT_ANNUXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_GBHOBO_Del.size(); i++) {
        	rowVo = (Map) dsPY_GBHOBO_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_GBHOBO.size(); i++) {
			rowVo = (Map) dsPY_GBHOBO.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE00(rowVo);
			} else if (rowType == 2) {
				dao.processUPDATE00(rowVo);
			}			
			iTotCnt++;			
		}		
		return iTotCnt;
	}
	
	/**
	 * 연차생성 프로시저를 호출한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 자격사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processCREATE00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ANNUXM", dao.processCREATE00(searchVo));
		
		return returnMap;

    }

}
