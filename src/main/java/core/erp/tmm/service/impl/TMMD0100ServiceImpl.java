/**
 * core.erp.tmm.service.impl.TMMD0100ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMD0100Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMD0100ServiceImpl - 메타단어관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.08.08
 * @version	1.0
 * @see		{@link TMMD0100Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.08	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMD0100Service")
public class TMMD0100ServiceImpl extends EgovAbstractServiceImpl implements TMMD0100Service {

	/**
	 * 메타단어관리 DAO class inject.
	 */
	@Resource(name = "TMMD0100Dao")
	private TMMD0100Dao dao;

	/**
	 * 표준단어 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 표준단어 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_STWORD", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * TMMD0100 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsTM_STWORD     = (List) saveData.get("dsTM_STWORD");  
		List dsTM_STWORD_Del = (List) saveData.get("dsTM_STWORD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_STWORD_Del.size(); i++) {

        	rowVo = (Map) dsTM_STWORD_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_STWORD.size(); i++) {

			rowVo = (Map) dsTM_STWORD.get(i);
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
}
