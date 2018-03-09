/**
 * core.erp.tmm.service.impl.FSMB0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMB0070Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMB0070ServiceImpl - 자산 수리 이력 목록 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMB0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMB0070Service")
public class FSMB0070ServiceImpl extends EgovAbstractServiceImpl implements FSMB0070Service {

	/**
	 * 자산 수리 이력 목록 관리 DAO class inject.
	 */
	@Resource(name = "FSMB0070Dao")
	private FSMB0070Dao dao;

	/**
	 * 자산 수리 이력 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 수리 이력 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASRPXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * FSMB0070 저장,수정 또는 삭제한다.
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

		List dsFS_ASRPXM     = (List) saveData.get("dsFS_ASRPXM");  
		List dsFS_ASRPXM_Del = (List) saveData.get("dsFS_ASRPXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsFS_ASRPXM_Del.size(); i++) {

        	rowVo = (Map) dsFS_ASRPXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASRPXM.size(); i++) {

			rowVo = (Map) dsFS_ASRPXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
