package core.erp.trm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRMA0050Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
/**
 * <pre>
 *	TRMA0050ServiceImpl - 지급(출납)관리   메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link TRMA0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TRMA0050Service")
public class TRMA0050ServiceImpl extends EgovAbstractServiceImpl implements TRMA0050Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMA0050ServiceImpl.class);

	@Resource(name = "TRMA0050Dao")
	private TRMA0050Dao tRMA0050Dao;
	
	/**
	 * <pre>
	 * 지급(출납)관리  조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPXM", tRMA0050Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	/**
	 * 지급(출납)관리 저장
	 * @param searchVo - 검색조건 정보가 담긴 Map 객체
	 * 		  saveData - 그리드 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("unchecked")
	public void processSAVE00(Map<String, Object> searchVo, Map<String, Object> saveData) throws Exception {
		
		ArrayList<Map<String, Object>> ds = (ArrayList<Map<String, Object>>) saveData.get("dsTA_SLIPXM_T");
		
		for(Map<String, Object> dsMap : ds){
			if(!"".equals(dsMap.get("ACNT_NUMB")) && dsMap.get("ACNT_NUMB") != null){
				dsMap.put("TNTS_DATE", searchVo.get("TNTS_DATE"));  //현재일자
				dsMap.put("PROG_IDXX", searchVo.get("pgm")); 		//프로그램ID
				dsMap.put("INST_USID", searchVo.get("GBL_EMPLNO")); //입력작업자
				
				tRMA0050Dao.processINSERT00(dsMap);
			}
		}
	}
	
	/**
	 * 연결재무제표 IF 자료전송
	 * @param searchVo - 검색조건 정보가 담긴 Map 객체
	 * 		  saveData - 그리드 정보가 담긴 Map 객체		
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	public void processDELETE00(Map<String, Object> searchVo, Map<String, Object> saveData) throws Exception {
		
		ArrayList<Map<String, Object>> ds = (ArrayList<Map<String, Object>>) saveData.get("dsTA_SLIPXM_T");
		
		for(Map<String, Object> dsMap : ds){
			if(!"".equals(dsMap.get("ACNT_NUMB")) && dsMap.get("ACNT_NUMB") != null){
				tRMA0050Dao.processDELETE00(dsMap);
			}
			
		}
	}
	
}
