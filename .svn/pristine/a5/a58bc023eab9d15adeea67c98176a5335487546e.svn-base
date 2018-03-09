/**
 * core.erp.tmm.service.impl.FSME0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSME0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSME0020ServiceImpl - 부서별 자산실사 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.26
 * @version	1.0
 * @see		{@link FSME0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSME0020Service")
public class FSME0020ServiceImpl extends EgovAbstractServiceImpl implements FSME0020Service {

	/**
	 * 부서별 자산실사 목록 관리 DAO class inject.
	 */
	@Resource(name = "FSME0020Dao")
	private FSME0020Dao dao;

	/**
	 * 부서별 자산실사를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 일괄 이동 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_INVTXD", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 매장별 콤보 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 일괄 이동 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsINVT_CODE", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 재물 조사 저장 처리
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int saveCount = 0;
		 
		 Map rowVo = null;
		 
		List dsFS_INVTXD     = (List) saveData.get("dsFS_INVTXD");  
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_INVTXD.size(); i++) {

			rowVo = (Map) dsFS_INVTXD.get(i);
			dao.processSAVE00(rowVo);
			saveCount++;
			
		}
		
		return saveCount;

	}
}
