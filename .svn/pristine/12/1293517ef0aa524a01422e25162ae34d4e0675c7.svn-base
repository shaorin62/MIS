/**
 * core.erp.tmm.service.impl.TMMA0090ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMA0090Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0090ServiceImpl - 휴일관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.07.12
 * @version	1.0
 * @see		{@link TMMA0090Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.12	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0090Service")
public class TMMA0090ServiceImpl extends EgovAbstractServiceImpl implements TMMA0090Service {

	/**
	 * 휴일관리 DAO class inject.
	 */
	@Resource(name = "TMMA0090Dao")
	private TMMA0090Dao dao;

	/**
	 * 달력 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 달력 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_CALDXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 달력 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 달력 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_CALDXD", dao.processSEARCH01(searchVo));
		returnMap.put("dsTM_CALDHO", dao.processSEARCH02(searchVo));
		return returnMap;

    }

	/**
	 * TMMA0090 해당 년도를 새로 생성한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC00(Map searchVo) throws Exception{
		 
		int iTotCnt = 0; 
		
		dao.processDELETE00(searchVo);
		dao.processSAVE00(searchVo);

		iTotCnt++;
			
		return iTotCnt;

	}
	
	/**
	 * TMMA0090 수정 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsTM_CALDXM     = (List) saveData.get("dsTM_CALDXM");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_CALDXM.size(); i++) {

			rowVo = (Map) dsTM_CALDXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}	
}
