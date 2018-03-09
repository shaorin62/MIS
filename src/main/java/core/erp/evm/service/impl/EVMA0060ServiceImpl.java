package core.erp.evm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.evm.service.EVMA0060Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	EVMA0060ServiceImpl - 평가비율관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김석영
 * @since	2016.10.05
 * @version	1.0
 * @see		{@link EVMA0060Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.05	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("EVMA0060Service")
public class EVMA0060ServiceImpl extends EgovAbstractServiceImpl implements EVMA0060Service {

	/**
	 * 평가비율관리 DAO class inject.
	 */
	@Resource(name = "EVMA0060Dao")
	private EVMA0060Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	/**
	 * 평가비율관리 평가점수등급환산표/근무평가비율관리 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsEV_WGEGXM", dao.processSEARCH00(searchVo));
		returnMap.put("dsEV_EVRTXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * EVMA0060 평가점수등급환산표 저장,수정 또는 삭제한다.
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

		List dsEV_WGEGXM     = (List) saveData.get("dsEV_WGEGXM");  
		List dsEV_WGEGXM_Del = (List) saveData.get("dsEV_WGEGXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsEV_WGEGXM_Del.size(); i++) {

        	rowVo = (Map) dsEV_WGEGXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsEV_WGEGXM.size(); i++) {

			rowVo = (Map) dsEV_WGEGXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		List dsEV_EVRTXM     = (List) saveData.get("dsEV_EVRTXM");  
		List dsEV_EVRTXM_Del = (List) saveData.get("dsEV_EVRTXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsEV_EVRTXM_Del.size(); i++) {

        	rowVo = (Map) dsEV_EVRTXM_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsEV_EVRTXM.size(); i++) {

			rowVo = (Map) dsEV_EVRTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE01(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}

	
	/**
	 * 평가비율관리 이전자료를 복사한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo);
	}	
	
}
