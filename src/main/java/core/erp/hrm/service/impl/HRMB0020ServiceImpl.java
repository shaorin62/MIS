package core.erp.hrm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.hrm.service.HRMB0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	HRMB0020ServiceImpl - 개인신상변경요청 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.12
 * @version	1.0
 * @see		{@link HRMB0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.07.12	고민주		Initial Created.
 * 2016.08.23	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMB0020Service")
public class HRMB0020ServiceImpl extends EgovAbstractServiceImpl implements HRMB0020Service {

	/**
	 * 개인신상변경요청 DAO class inject.
	 */
	@Resource(name = "HRMB0020Dao")
	private HRMB0020Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;

	/**
	 * 인사기본정보 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인사기본정보 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 인사기본정보 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인사기본정보 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTRQ", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 개인신상변경신청건수 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MSTCRQ", dao.processSEARCH03(searchVo));
		return returnMap;
	}

	/**
	 * 파일을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_ATFILE", dao.processSEARCH04(searchVo));
		return returnMap;
	}
	/**
	 * HRMB0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsHR_MASTRQ     = (List) saveData.get("dsHR_MASTRQ");
		List dsHR_MASTRQ_Del = (List) saveData.get("dsHR_MASTRQ_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_MASTRQ_Del.size(); i++) {

        	rowVo = (Map) dsHR_MASTRQ_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_MASTRQ.size(); i++) {
			rowVo = (Map) dsHR_MASTRQ.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
			rowVo.put("WORK_USID", searchVo.get("WORK_USID"));
			rowVo.put("WKNT_TYCD", searchVo.get("WKNT_TYCD"));
			rowVo.put("SOUS_LNKY", searchVo.get("SOUS_LNKY"));
			rowVo.put("WKNT_CNTT", searchVo.get("WKNT_CNTT"));
			rowVo.put("SAVE_CODE", searchVo.get("SAVE_CODE"));

			if (rowType == 1) {
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE00(rowVo);
				if ( rowVo.get("SAVE_CODE").equals("R")){
					dao.processWORKSAVE00(rowVo);
				} else if ( rowVo.get("SAVE_CODE").equals("C")){
					dao.processWORKDEL00(rowVo);
				}

			}

			iTotCnt++;

		}

		List dsTM_ATFILE     = (List) saveData.get("dsTM_ATFILE");
		List dsTM_ATFILE_Del = (List) saveData.get("dsTM_ATFILE_DELETE");

		attachFileService.deleteFile(dsTM_ATFILE_Del);
		attachFileService.uploadFiles(dsTM_ATFILE, this.getClass().getSimpleName().substring(0, 8), "");

		return iTotCnt;

	}
}
