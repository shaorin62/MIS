/**
 * core.erp.hrm.service.impl.HRMK0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMK0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMK0020ServiceImpl - 증명서신청승인 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	jar
 * @since	2016.09.05
 * @version	1.0
 * @see		{@link HRMK0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	jar		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMK0020Service")
public class HRMK0020ServiceImpl extends EgovAbstractServiceImpl implements HRMK0020Service {

	/**
	 * 증명서신청승인 DAO class inject.
	 */
	@Resource(name = "HRMK0020Dao")
	private HRMK0020Dao dao;

	/**
	 * 증명서발급 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 증명서발급 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_CERSIS", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * HRMK0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsHR_CERSIS     = (List) saveData.get("dsHR_CERSIS");  
		List dsHR_CERSIS_Del = (List) saveData.get("dsHR_CERSIS_DELETE");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_CERSIS.size(); i++) {

			rowVo = (Map) dsHR_CERSIS.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

 			 if (rowType == 2) {

				dao.processUPDATE00(rowVo);
				dao.processSAVE01(rowVo);
				
			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
	
}
