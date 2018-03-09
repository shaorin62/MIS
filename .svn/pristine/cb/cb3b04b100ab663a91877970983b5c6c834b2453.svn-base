/**
 * core.erp.tmm.service.impl.FSMB0020P01ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMB0020P01Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMB0020P01ServiceImpl - 자산 폐기 엑셀 일괄 등록
 * </pre>
 *
 * @author	권미영
 * @since	2016.08.11
 * @version	1.0
 * @see		{@link FSMB0020P01Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.11	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMB0020P01Service")
public class FSMB0020P01ServiceImpl extends EgovAbstractServiceImpl implements FSMB0020P01Service {

	/**
	 * 자산 변동 목록 관리 DAO class inject.
	 */
	@Resource(name = "FSMB0020P01Dao")
	private FSMB0020P01Dao fSMB0020P01Dao;

	/**
	 * 자산 폐기 엑셀 일괄 등록
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

		List dsFS_ASCHXL     = (List) saveData.get("dsFS_ASCHXL");  

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASCHXL.size(); i++) {

			rowVo = (Map) dsFS_ASCHXL.get(i);
			fSMB0020P01Dao.processSAVE00(rowVo);

		}

		return deleteCount + updateCount;

	}

}
