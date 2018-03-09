/**
 * core.erp.tmm.service.impl.TMMA0220ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMA0220Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0220ServiceImpl - 공지사항 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.08.02
 * @version	1.0
 * @see		{@link TMMA0220Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.02	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0220Service")
public class TMMA0220ServiceImpl extends EgovAbstractServiceImpl implements TMMA0220Service {

	/**
	 * 공지사항 DAO class inject.
	 */
	@Resource(name = "TMMA0220Dao")
	private TMMA0220Dao dao;

	/**
	 * 공지사항 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공지사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_NOTICE", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * TMMA0220 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 

		dao.processSAVE01(saveData);
		iTotCnt += 1;
		
		return iTotCnt;

	}
}
