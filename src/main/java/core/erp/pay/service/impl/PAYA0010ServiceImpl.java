/**
 * core.erp.pay.service.impl.PAYA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYA0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYA0010ServiceImpl - 호봉표관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.12
 * @version	1.0
 * @see		{@link PAYA0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.12	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYA0010Service")
public class PAYA0010ServiceImpl extends EgovAbstractServiceImpl implements PAYA0010Service {

	/**
	 * 호봉표관리 DAO class inject.
	 */
	@Resource(name = "PAYA0010Dao")
	private PAYA0010Dao dao;

	/**
	 * 직급호봉표 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_GBHOBO", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * PAYA0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_GBHOBO     = (List) saveData.get("dsPY_GBHOBO");  
		List dsPY_GBHOBO_Del = (List) saveData.get("dsPY_GBHOBO_DELETE");

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
	 * 직급호봉표 목록을 복사한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo); 
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_GBHOBO", dao.processSEARCH00(searchVo));
		return returnMap;
	}
}
