package core.erp.evm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.evm.service.EVMB0040Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	EVMB0040ServiceImpl - 목표설정서 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김석영
 * @since	2016.10.05
 * @version	1.0
 * @see		{@link EVMB0040Service}
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

@Service("EVMB0040Service")
public class EVMB0040ServiceImpl extends EgovAbstractServiceImpl implements EVMB0040Service {

	/**
	 * 목표설정서 DAO class inject.
	 */
	@Resource(name = "EVMB0040Dao")
	private EVMB0040Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	/**
	 * 업적평가 피평가자 현황/피평가자 목록 조회
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsEV_SBMTOT", dao.processSEARCH00(searchVo));
		returnMap.put("dsEV_WGETXM", dao.processSEARCH01(searchVo));
		returnMap.put("dsEV_WGEGXM", dao.processSEARCH03(searchVo));
		return returnMap;

    }
	
	/**
	 * 업적평가 목록 조회
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsEV_TAEGXD", dao.processSEARCH02(searchVo));		
		return returnMap;

    }
	
	/**
	 * EVMB0010 저장,수정 또는 삭제한다.
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

		List dsEV_WGETXM = (List) saveData.get("dsEV_WGETXM");  
		List dsEV_TAEGXD = (List) saveData.get("dsEV_TAEGXD");
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsEV_WGETXM.size(); i++) {
			rowVo = (Map) dsEV_WGETXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		for (int i = 0; i < dsEV_TAEGXD.size(); i++) {
			rowVo = (Map) dsEV_TAEGXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
				updateCount += dao.processUPDATE01(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	/**
	 * 인사평가대상자 테이블 목표설정제출
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo);
	}	
	
	/**
	 * 인사평가대상자 테이블 목표설정제출취소 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC01(Map searchVo) throws Exception {
		dao.processPROC01(searchVo);
	}	
}
