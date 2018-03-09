package core.erp.hrm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.hrm.service.HRMB0910Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	HRMB0910ServiceImpl - 인재Pool관리 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 8. 12.
 * @version	1.0
 * @see		{@link HRMB0910Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 12.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("HRMB0910Service")
public class HRMB0910ServiceImpl extends EgovAbstractServiceImpl implements HRMB0910Service {

	/**
	 * 전경력현황 DAO class inject.
	 */
	@Resource(name = "HRMB0910Dao")
	private HRMB0910Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	/**
	 * 인재Pool관리 main 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인사기본정보 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_RCMSXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 인재Pool관리 Tab 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인사기본정보 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_RCSCHC", dao.processSEARCH01(searchVo));
		returnMap.put("dsHR_RCBFCA", dao.processSEARCH02(searchVo));
		returnMap.put("dsHR_RCINTW", dao.processSEARCH03(searchVo));
		returnMap.put("dsTM_AFILED", dao.processSEARCH04(searchVo));
		return returnMap;

    }

	/**
	 * 인재Pool관리 저장,수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes", "deprecation" })
	public int processSAVE00(Map saveData) throws Exception{
		 
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;
		
		// 인재Pool관리 Main
		List dsHR_RCMSXM     = (List) saveData.get("dsHR_RCMSXM");  
		List dsHR_RCMSXM_Del = (List) saveData.get("dsHR_RCMSXM_DELETE");

		// Main 삭제시 Tab 내용 삭제
		for (int i = 0; i < dsHR_RCMSXM_Del.size(); i++) {
			rowVo = (Map) dsHR_RCMSXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);
			dao.processDELETE01(rowVo); // 학력 삭제
			dao.processDELETE02(rowVo); // 경력 삭제
			dao.processDELETE03(rowVo); // 면접 삭제
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_RCMSXM.size(); i++) {
			rowVo = (Map) dsHR_RCMSXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				dao.processSAVE00(rowVo);
				
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE00(rowVo);
				
			}
			
		}
		
		// 인재Pool관리 Tab(0) 학력
		List dsHR_RCSCHC     = (List) saveData.get("dsHR_RCSCHC");  
		List dsHR_RCSCHC_Del = (List) saveData.get("dsHR_RCSCHC_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsHR_RCSCHC_Del.size(); i++) {
			rowVo = (Map) dsHR_RCSCHC_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_RCSCHC.size(); i++) {
			rowVo = (Map) dsHR_RCSCHC.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				dao.processSAVE01(rowVo);
				
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE01(rowVo);
				
			}
			
		}
		
		// 인재Pool관리 Tab(1) 경력
		List dsHR_RCBFCA     = (List) saveData.get("dsHR_RCBFCA");  
		List dsHR_RCBFCA_Del = (List) saveData.get("dsHR_RCBFCA_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsHR_RCBFCA_Del.size(); i++) {
			rowVo = (Map) dsHR_RCBFCA_Del.get(i);
			deleteCount += dao.processDELETE02(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_RCBFCA.size(); i++) {
			rowVo = (Map) dsHR_RCBFCA.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				dao.processSAVE02(rowVo);
				
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE02(rowVo);
				
			}
			
		}
		
		// 인재Pool관리 Tab(2) 면접
		List dsHR_RCINTW     = (List) saveData.get("dsHR_RCINTW");  
		List dsHR_RCINTW_Del = (List) saveData.get("dsHR_RCINTW_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsHR_RCINTW_Del.size(); i++) {
			rowVo = (Map) dsHR_RCINTW_Del.get(i);
			deleteCount += dao.processDELETE03(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_RCINTW.size(); i++) {
			rowVo = (Map) dsHR_RCINTW.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				dao.processSAVE03(rowVo);
				
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE03(rowVo);
				
			}
			
		}
		
		// 인재Pool관리 Tab(3) 파일첨부
		List dsTM_AFILED     = (List) saveData.get("dsTM_AFILED");  
		List dsTM_AFILED_Del = (List) saveData.get("dsTM_AFILED_DELETE");
		
		attachFileService.deleteFile(dsTM_AFILED_Del);
		attachFileService.uploadFiles(dsTM_AFILED, this.getClass().getSimpleName().substring(0, 8), "");
		
		return deleteCount + updateCount;

	}
	
}
