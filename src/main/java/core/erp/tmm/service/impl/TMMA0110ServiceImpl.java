/**
 * core.erp.tmm.service.impl.TMMA0110ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMA0110Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0110ServiceImpl - 자료조회관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.08.02
 * @version	1.0
 * @see		{@link TMMA0110Service}
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

@Service("TMMA0110Service")
public class TMMA0110ServiceImpl extends EgovAbstractServiceImpl implements TMMA0110Service {

	/**
	 * 자료조회관리 DAO class inject.
	 */
	@Resource(name = "TMMA0110Dao")
	private TMMA0110Dao dao;

	/**
	 * 자료조회양식 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 자료조회양식 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_VIMNXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 자료조회조건 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 자료조회조건 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_VICDXL", dao.processSEARCH01(searchVo));
		returnMap.put("dsTM_VILVXL", dao.processSEARCH02(searchVo));
		return returnMap;

    }

	/**
	 * 권한그룹 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 권한그룹 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHEADER", dao.processSEARCH03(searchVo));
		returnMap.put("dsQUERY", dao.processSEARCH04(searchVo));
		return returnMap;

    }

	/**
	 * TMMA0110 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsTM_VIMNXM     = (List) saveData.get("dsTM_VIMNXM");  
		List dsTM_VIMNXM_Del = (List) saveData.get("dsTM_VIMNXM_DELETE");

		List dsTM_VICDXL     = (List) saveData.get("dsTM_VICDXL");  
		List dsTM_VICDXL_Del = (List) saveData.get("dsTM_VICDXL_DELETE");

		List dsTM_VILVXL     = (List) saveData.get("dsTM_VILVXL");  
		
		//1)자료조회양식
        for (int i = 0; i < dsTM_VIMNXM_Del.size(); i++) {

        	rowVo = (Map) dsTM_VIMNXM_Del.get(i);
			dao.processDELETE03(rowVo);
			dao.processDELETE04(rowVo);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}
        
		for (int i = 0; i < dsTM_VIMNXM.size(); i++) {

			rowVo = (Map) dsTM_VIMNXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
		//2)자료조회조건
        for (int i = 0; i < dsTM_VICDXL_Del.size(); i++) {

        	rowVo = (Map) dsTM_VICDXL_Del.get(i);
			dao.processDELETE01(rowVo);
			iTotCnt++;

		}

		for (int i = 0; i < dsTM_VICDXL.size(); i++) {

			rowVo = (Map) dsTM_VICDXL.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE01(rowVo);

			}
			
			iTotCnt++;
			
		}
        
		//3)자료조회권한은 기본적으로 변경된 것만 오고, 체크된것은 저장, 체크해제된것은 삭제한다.
		for (int i = 0; i < dsTM_VILVXL.size(); i++) {

			rowVo = (Map) dsTM_VILVXL.get(i);

			if (rowVo.get("CHK_SEL").equals("1")) {
			
				dao.processSAVE02(rowVo);

			} else {
				
				dao.processDELETE02(rowVo);
			
			}
		}
		
		return iTotCnt;

	}
}
