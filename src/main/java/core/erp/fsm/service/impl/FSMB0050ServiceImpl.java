/**
 * core.erp.tmm.service.impl.FSMB0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import core.erp.fsm.service.FSMB0050Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMB0050ServiceImpl - 자산 일괄 이동 목록 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMB0050Service}
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

@Service("FSMB0050Service")
public class FSMB0050ServiceImpl extends EgovAbstractServiceImpl implements FSMB0050Service {
	
	private static final Logger logger = LoggerFactory.getLogger(FSMB0050ServiceImpl.class);
	
	/**
	 * 자산 일괄 이동 목록 관리 DAO class inject.
	 */
	@Resource(name = "FSMB0050Dao")
	private FSMB0050Dao dao;

	/**
	 * 자산 일괄 이동 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 일괄 이동 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHXM", dao.processSEARCH00(searchVo));
		return returnMap;

	}



	/**
	 * FSMB0050 저장한다
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{

		int saveCount = 0;

		Map rowVo = null;
		int rowType = 0;
		
		String CHNG_DATE	= (String) searchVo.get("CHNG_DATE");	      	//이동일자
		String DEPT_CODE	= (String) searchVo.get("DEPT_CODE");	      	//이동부서
		String EMPL_NUMB	= (String) searchVo.get("EMPL_NUMB");	      	//이동사원
		String DESC_REMK	= (String) searchVo.get("DESC_REMK");	      	//비고
		
		List dsFS_ASCLXM     = (List) saveData.get("dsFS_ASCHXM_SAVE");  

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASCLXM.size(); i++) {

			rowVo = (Map) dsFS_ASCLXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
	
			rowVo.put("CHNG_DATE", CHNG_DATE);
			rowVo.put("DEPT_CODE", DEPT_CODE);
			rowVo.put("EMPL_NUMB", EMPL_NUMB);
			rowVo.put("DESC_REMK", DESC_REMK);

			dao.processSAVE00(rowVo);
			saveCount++;
		}

		return saveCount;

	}
}
