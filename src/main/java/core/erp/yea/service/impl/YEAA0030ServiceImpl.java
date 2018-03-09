package core.erp.yea.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.yea.service.YEAA0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	YEAA0030ServiceImpl - 간이세액조견표 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 9. 28.
 * @version	1.0
 * @see		{@link YEAA0030Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 28.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("YEAA0030Service")
public class YEAA0030ServiceImpl extends EgovAbstractServiceImpl implements YEAA0030Service {

	/**
	 * 간이세액조견표 DAO class inject.
	 */
	@Resource(name = "YEAA0030Dao")
	private YEAA0030Dao dao;

	/**
	 * 직급호봉표 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsYEA_SIPLTX", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * YEAA0030 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsYEA_SIPLTX     = (List) saveData.get("dsYEA_SIPLTX");
		
		dao.processDELETE00(searchVo);
		
		for (int i = 0; i < dsYEA_SIPLTX.size(); i++) {

			rowVo = (Map) dsYEA_SIPLTX.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
				dao.processSAVE00(rowVo);
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
	
}
