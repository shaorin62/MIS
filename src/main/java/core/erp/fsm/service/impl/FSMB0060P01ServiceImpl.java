/**
 * core.erp.tmm.service.impl.FSMB0060P01ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.math.*;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMB0060P01Service; 
import core.erp.source.util.ConvertUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <pre>
 *	FSMB0060P01ServiceImpl - 메시지 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	ㅋㅋㅋ
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link FSMB0060P01Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	ㅋㅋㅋ		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMB0060P01Service")
public class FSMB0060P01ServiceImpl extends EgovAbstractServiceImpl implements FSMB0060P01Service {


	private static final Logger logger = LoggerFactory.getLogger(FSMB0060P01ServiceImpl.class);
	
	/**
	 * 메시지 관리 DAO class inject.
	 */
	@Resource(name = "FSMB0060P01Dao")
	private FSMB0060P01Dao dao;

	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASSPXM", dao.processSEARCH00(searchVo));
		return returnMap;

	}

	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASSPXD", dao.processSEARCH01(searchVo));
		return returnMap;

	}

	/**
	 * FSMB0060P01 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASSPXM    	= (List) saveData.get("dsFS_ASSPXM");		//헤더
		List dsFS_ASSPXD    	= (List) saveData.get("dsFS_ASSPXD");		//디테일
		List dsFS_ASSPXD_Del	= (List) saveData.get("dsFS_ASSPXD_DELETE");
		String sFormMode		= (String) searchVo.get("sFORMMODE");      	//Insert Or Update Mode

		//자산분할등록 디테일 DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsFS_ASSPXD_Del.size(); i++) {
			rowVo = (Map) dsFS_ASSPXD_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);
		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASSPXM.size(); i++) {

			rowVo = (Map) dsFS_ASSPXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			logger.debug("------- sFormMode: " + sFormMode);
			
			if (sFormMode.equals("I")) {

				dao.processSAVE00(rowVo);

			} else {

				dao.processUPDATE00(rowVo);

			}
			updateCount++;
		}


		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASSPXD.size(); i++) {

			rowVo = (Map) dsFS_ASSPXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {

				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE01(rowVo);

			}
			updateCount++;
		}
		
		return updateCount;

	}	

	/**
	 * FSMB0060P01 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASSPXD     = (List) saveData.get("dsFS_ASSPXD");  
		List dsFS_ASSPXD_Del = (List) saveData.get("dsFS_ASSPXD_DELETE");


		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsFS_ASSPXD_Del.size(); i++) {

			rowVo = (Map) dsFS_ASSPXD_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);
		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASSPXD.size(); i++) {

			rowVo = (Map) dsFS_ASSPXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE01(rowVo);

			}
		}

		return deleteCount + updateCount;

	}	

}
