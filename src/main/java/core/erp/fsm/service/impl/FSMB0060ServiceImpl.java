/**
 * core.erp.tmm.service.impl.FSMB0060ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.math.*;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMB0060Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMB0060ServiceImpl - 메시지 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	ㅋㅋㅋ
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link FSMB0060Service}
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

@Service("FSMB0060Service")
public class FSMB0060ServiceImpl extends EgovAbstractServiceImpl implements FSMB0060Service {

	/**
	 * 메시지 관리 DAO class inject.
	 */
	@Resource(name = "FSMB0060Dao")
	private FSMB0060Dao dao;

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
	 * FSMB0060 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processSAVE00(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 int rowType = 0;

		List dsFS_ASSPXM_del     = (List) saveData.get("dsFS_ASSPXM_DELETE");  
		
		for (int i = 0; i < dsFS_ASSPXM_del.size(); i++) {
			
			rowVo = (Map) dsFS_ASSPXM_del.get(i);
			
			dao.processDELETE00(rowVo);

		}

	}
	
	/**
	 * FSMB0060 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processAPPL00(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 int rowType = 0;

		List dsFS_ASSPXM     = (List) saveData.get("dsFS_ASSPXM");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASSPXM.size(); i++) {
			
			rowVo = (Map) dsFS_ASSPXM.get(i);

			dao.processAPPL00(rowVo);
		}
		
	}		
	
	/**
	 * FSMB0060 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processCANC00(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 int rowType = 0;

		List dsFS_ASSPXM     = (List) saveData.get("dsFS_ASSPXM");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASSPXM.size(); i++) {
			
			rowVo = (Map) dsFS_ASSPXM.get(i);

			dao.processCANC00(rowVo);


		}
		
	}		
	
}
