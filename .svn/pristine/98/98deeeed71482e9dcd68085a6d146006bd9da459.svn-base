/**
 * core.erp.tmm.service.impl.FAMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.edm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.edm.service.EDMA0050Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	EDMA0050ServiceImpl - 교육분류관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김혜림
 * @since	2016.09.05
 * @version	1.0
 * @see		{@link EDMA0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	김혜림		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("EDMA0050Service")
public class EDMA0050ServiceImpl extends EgovAbstractServiceImpl implements EDMA0050Service {

	/**
	 * 교육 분류 관리 DAO class inject.
	 */
	@Resource(name = "EDMA0050Dao")
	private EDMA0050Dao eDMA0050Dao;

	/**
	 * 교육 대분류 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsED_CFCTXM1", eDMA0050Dao.processSEARCH00(searchVo));
		return returnMap;

    }
	/**
	 * 교육 중분류 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@Override
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsED_CFCTXM2", eDMA0050Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	/**
	 * 교육 소분류 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@Override
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsED_CFCTXM3", eDMA0050Dao.processSEARCH02(searchVo));
		return returnMap;
	}
	
	/**
	 * 교육 대분류 중복체크
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@Override
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsEDC1_CODE", eDMA0050Dao.processSEARCH03(searchVo));
		return returnMap;
	}
	
	/**
	 * 교육분류를 저장,수정 또는 삭제한다.
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
	
		List dsED_CFCTXM1     = (List) saveData.get("dsED_CFCTXM1");  
		List dsED_CFCTXM1_Del = (List) saveData.get("dsED_CFCTXM1_DELETE");
		
		List dsED_CFCTXM2     = (List) saveData.get("dsED_CFCTXM2");  
		List dsED_CFCTXM2_Del = (List) saveData.get("dsED_CFCTXM2_DELETE");
		
		List dsED_CFCTXM3     = (List) saveData.get("dsED_CFCTXM3");  
		List dsED_CFCTXM3_Del = (List) saveData.get("dsED_CFCTXM3_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsED_CFCTXM1_Del.size(); i++) {

        	rowVo = (Map) dsED_CFCTXM1_Del.get(i);
			deleteCount += eDMA0050Dao.processDELETE00(rowVo);

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsED_CFCTXM2_Del.size(); i++) {

        	rowVo = (Map) dsED_CFCTXM2_Del.get(i);
			deleteCount += eDMA0050Dao.processDELETE02(rowVo);

		}
        
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsED_CFCTXM3_Del.size(); i++) {

        	rowVo = (Map) dsED_CFCTXM3_Del.get(i);
			deleteCount += eDMA0050Dao.processDELETE03(rowVo);

		}
        
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsED_CFCTXM1.size(); i++) {

			rowVo = (Map) dsED_CFCTXM1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
			
				eDMA0050Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += eDMA0050Dao.processUPDATE00(rowVo);

			}
		}
		
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsED_CFCTXM2.size(); i++) {

			rowVo = (Map) dsED_CFCTXM2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
			
				eDMA0050Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += eDMA0050Dao.processUPDATE00(rowVo);

			}
		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsED_CFCTXM3.size(); i++) {

			rowVo = (Map) dsED_CFCTXM3.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
			
				eDMA0050Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += eDMA0050Dao.processUPDATE00(rowVo);

			}
		}
		return deleteCount + updateCount;

	}

}
