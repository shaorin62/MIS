/**
 * core.erp.tmm.service.impl.FSMB0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.spi.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMB0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

import org.slf4j.Logger;
import org.springframework.stereotype.Service;
import core.erp.com.service.ComAttachFileService;


/**
 * <pre>
 *	FSMB0010ServiceImpl - 자산등록 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMB0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMB0010Service")
public class FSMB0010ServiceImpl extends EgovAbstractServiceImpl implements FSMB0010Service {

	private static final Logger logger = org.slf4j.LoggerFactory.getLogger(FSMB0010ServiceImpl.class);

	/**
	 * 자산등록 관리 DAO class inject.
	 */
	@Resource(name = "FSMB0010Dao")
	private FSMB0010Dao dao;
	
	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;

	/**
	 * 자산등록 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산등록 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASSTXM", dao.processSEARCH00(searchVo));
		return returnMap;

	}
	/**
	 * 변동 이력 탭을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 변동이력 탭 Map
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHXM1", dao.processSEARCH01(searchVo));
		return returnMap;

	}
	/**
	 * 이동 이력 탭을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 변동이력 탭 Map
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHXM2", dao.processSEARCH02(searchVo));
		return returnMap;

	}
	/**
	 * 수리 이력 탭을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 변동이력 탭 Map
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASRPXM", dao.processSEARCH03(searchVo));
		return returnMap;

	}

	/**
	 * 상각 이력 탭을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 변동이력 탭 Map
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_DPCTXM", dao.processSEARCH04(searchVo));
		return returnMap;

	}
	/**
	 * 분할 내역 탭을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 변동이력 탭 Map
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASSPXD", dao.processSEARCH05(searchVo));
		return returnMap;

	}


	/**
	 * 화면의 상각률을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 변동이력 탭 Map
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsDPCT_RATE", dao.processSEARCH10(searchVo));
		return returnMap;

	}

	/**
	 * FSMB0010 저장,수정 또는 삭제한다.
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

		List dsDPCT_RATE     = (List) saveData.get("dsFS_ASSTXM");  
		List dsDPCT_RATE_Del = (List) saveData.get("dsFS_ASSTXM_DELETE");

		List dsFL_ATTACH     = (List) saveData.get("dsFL_ATTACH");
		List dsFL_ATTACH_Del = (List) saveData.get("dsFL_ATTACH_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsDPCT_RATE_Del.size(); i++) {

			rowVo = (Map) dsDPCT_RATE_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsDPCT_RATE.size(); i++) {

			rowVo = (Map) dsDPCT_RATE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsFL_ATTACH_Del.size(); i++) {

        	rowVo = (Map) dsFL_ATTACH_Del.get(i);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFL_ATTACH.size(); i++) {

			rowVo = (Map) dsFL_ATTACH.get(i);
			
		}
		
		logger.debug("----test attachFileService----["+this.getClass().getSimpleName().substring(0, 8));
		
		attachFileService.deleteFile(dsFL_ATTACH_Del);
		attachFileService.uploadFiles(dsFL_ATTACH, this.getClass().getSimpleName().substring(0, 8), "");

		return deleteCount + updateCount;

	}

	/**
	 * 자산등록 전표 해더 생성
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산등록 전표 해더 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC00(Map searchVo, Map dataVo) throws Exception {
		int updateCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASSTXM_SLIP     = (List) dataVo.get("dsFS_ASSTXM_SLIP");  
		for (int i = 0; i < dsFS_ASSTXM_SLIP.size(); i++) {

			rowVo = (Map) dsFS_ASSTXM_SLIP.get(i);
			rowVo.put("SOUS_LNKY", searchVo.get("SOUS_LNKY"));
			rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
			rowVo.put("SLIP_GUBN", searchVo.get("SLIP_GUBN"));

			updateCount += dao.processPROC00(rowVo);
		}

		return updateCount;

	}
	/**
	 * 자산등록 전표 차변 처리
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산등록 전표 차변 처리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC01(Map dataVo) throws Exception {
		int updateCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASSTXM_SLIP     = (List) dataVo.get("dsFS_ASSTXM_SLIP");  
		for (int i = 0; i < dsFS_ASSTXM_SLIP.size(); i++) {

			rowVo = (Map) dsFS_ASSTXM_SLIP.get(i);

			updateCount += dao.processPROC01(rowVo);
		}

		return updateCount;

	}
	/**
	 * 자산등록 전표 대변 처리
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산등록 전표 대변 처리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC02(Map dataVo) throws Exception {
		int updateCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASSTXM_SLIP     = (List) dataVo.get("dsFS_ASSTXM_SLIP");  
		for (int i = 0; i < dsFS_ASSTXM_SLIP.size(); i++) {

			rowVo = (Map) dsFS_ASSTXM_SLIP.get(i);

			updateCount += dao.processPROC02(rowVo);
		}

		return updateCount;

	}
	/**
	 * 자산등록 전표 차변 처리(부가가치세 세액)
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산등록 전표 차변 처리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC03(Map dataVo) throws Exception {
		int updateCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASSTXM_SLIP     = (List) dataVo.get("dsFS_ASSTXM_SLIP");  
		for (int i = 0; i < dsFS_ASSTXM_SLIP.size(); i++) {

			rowVo = (Map) dsFS_ASSTXM_SLIP.get(i);

			updateCount += dao.processPROC03(rowVo);
		}

		return updateCount;

	}

	/**
	 * 자산일괄등록 저장(FSMB0010P03)
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE03(Map saveData) throws Exception{

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASSTXM     = (List) saveData.get("dsFS_ASSTXM");  
		
		rowVo = (Map) dsFS_ASSTXM.get(0);
		logger.debug("------- rowVo: " + rowVo);
		logger.debug("------- rowVo ASST_CONT: " + rowVo.get("ASST_CONT"));
		int iAsstCount = 0; //등록수량

		//자산등록 관리 테이블 에 Insert Or Update (DataSet의 Row Count만큼 돌면서)
		iAsstCount = Integer.parseInt(rowVo.get("ASST_CONT").toString());	
		logger.debug("------- iAsstCount: " + iAsstCount);

		for (int i = 0; i < iAsstCount; i++) {
			
			dao.processSAVE03(rowVo);
		
		}


		return iAsstCount;

	}

}
