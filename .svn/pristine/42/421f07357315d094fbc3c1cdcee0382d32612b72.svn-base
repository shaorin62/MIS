/**
 * core.erp.tmm.service.impl.BDMA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.bdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.bdm.service.BDMA0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	BDMA0020ServiceImpl - 예산과목계정매핑관리 관리 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 7. 26.
 * @version	1.0
 * @see		{@link BDMA0020Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 7. 26.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("BDMA0020Service")
public class BDMA0020ServiceImpl extends EgovAbstractServiceImpl implements BDMA0020Service {

	/**
	 * 예산과목계정매핑관리 관리 DAO class inject.
	 */
	@Resource(name = "BDMA0020Dao")
	private BDMA0020Dao dao;

	/**
	 * 예산과목계정매핑관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 예산과목계정매핑관리  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTB_BDACMP", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * BDMA0020 저장,수정한다.
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
		
		List dsTB_BDACMP     = (List) saveData.get("dsTB_BDACMP");  
		List dsTB_BDACMP_Del = (List) saveData.get("dsTB_BDACMP_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTB_BDACMP_Del.size(); i++) {
			rowVo = (Map) dsTB_BDACMP_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTB_BDACMP.size(); i++) {
			rowVo = (Map) dsTB_BDACMP.get(i);
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
