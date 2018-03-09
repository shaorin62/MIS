/**
 * core.erp.tmm.service.impl.TMMA0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMA0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0030ServiceImpl - 메시지 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	luigi
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link TMMA0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	luigi		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0030Service")
public class TMMA0030ServiceImpl extends EgovAbstractServiceImpl implements TMMA0030Service {

	/**
	 * 메시지 관리 DAO class inject.
	 */
	@Resource(name = "TMMA0030Dao")
	private TMMA0030Dao dao;

	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_MESSXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * TMMA0030 저장,수정 또는 삭제한다.
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

		List dsTM_MESSXM     = (List) saveData.get("dsTM_MESSXM");  
		List dsTM_MESSXM_DEL = (List) saveData.get("dsTM_MESSXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int idx = 0; idx < dsTM_MESSXM_DEL.size(); idx++) {

        	rowVo = (Map) dsTM_MESSXM_DEL.get(idx);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int idx = 0; idx < dsTM_MESSXM.size(); idx++) {

			rowVo = (Map) dsTM_MESSXM.get(idx);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);
				updateCount++;

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
