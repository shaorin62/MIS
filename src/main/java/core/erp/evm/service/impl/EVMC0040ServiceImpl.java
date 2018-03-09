package core.erp.evm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.evm.service.EVMC0040Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	EVMC0040ServiceImpl - 조직평가 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김석영
 * @since	2016.10.25
 * @version	1.0
 * @see		{@link EVMC0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.25	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("EVMC0040Service")
public class EVMC0040ServiceImpl extends EgovAbstractServiceImpl implements EVMC0040Service {

	/**
	 * 조직평가 DAO class inject.
	 */
	@Resource(name = "EVMC0040Dao")
	private EVMC0040Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	/**
	 * 조직평가 피평가자 현황/피평가자 목록 조회
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsEV_SBMTOT", dao.processSEARCH00(searchVo));
		returnMap.put("dsEV_DTETXM", dao.processSEARCH01(searchVo));
		returnMap.put("dsEV_WGEGXM", dao.processSEARCH03(searchVo));
		return returnMap;

    }
	
	/**
	 * 조직평가 목록 조회
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsEV_DTEGXM", dao.processSEARCH02(searchVo));		
		return returnMap;

    }
	
	/**
	 * 조직평가 저장,수정 또는 삭제한다.
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

		List dsEV_DTETXM = (List) saveData.get("dsEV_DTETXM");  
		List dsEV_DTEGXM = (List) saveData.get("dsEV_DTEGXM");
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsEV_DTETXM.size(); i++) {
			rowVo = (Map) dsEV_DTETXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		for (int i = 0; i < dsEV_DTEGXM.size(); i++) {
			rowVo = (Map) dsEV_DTEGXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
				updateCount += dao.processUPDATE01(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	/**
	 * 조직평가 테이블 목표설정제출
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo);
	}	
	
	/**
	 * 조직평가 테이블 목표설정제출취소 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC01(Map searchVo) throws Exception {
		dao.processPROC01(searchVo);
	}	
}
