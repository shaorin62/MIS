package core.erp.fam.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.impl.ComMakeComboDao;
import core.erp.fam.service.FAMG0070Service;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAMG0070ServiceImpl - 연결시산표 관리 ServiceImpl 클래스 
 * </pre>
 *
 * @author	김기환
 * @since	2016.09.23
 * @version	1.0
 * @see		{@link FAMG0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.23	김기환		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMG0070Service")
public class FAMG0070ServiceImpl extends EgovAbstractServiceImpl implements FAMG0070Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMG0070ServiceImpl.class);

	@Resource(name = "FAMG0070Dao")
	private FAMG0070Dao FAMG0070Dao;
	
	@Resource(name="ComMakeComboDao")
	private ComMakeComboDao comMakeComboDao;
	
	/**
	 * 연결재무제표 IF 마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	public Object processSEARCH00(Map<String, Object> searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsNS_CFS_DATA_M", FAMG0070Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	/**
	 * 연결재무제표 IF 상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	public Object processSEARCH01(Map<String, Object> searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsNS_CFS_DATA_D", FAMG0070Dao.processSEARCH01(searchVo));
		return returnMap;
	}
	
	/**
	 * 연결재무제표 IF 자료생성 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	public Object processSEARCH02(Map<String, Object> searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("sRetValue", FAMG0070Dao.processSEARCH02(searchVo));
		return returnMap;
	}
	
	/**
	 * 연결재무제표 IF 자료생성
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	public Object processCREATE_DATA(Map<String, Object> searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsNS_CFS_DATA_D", FAMG0070Dao.processCREATE_DATA(searchVo));
		return returnMap;
	}
	
	/**
	 * 연결재무제표 IF 자료저장
	 * @param searchVo - 검색조건 정보가 담긴 Map 객체
	 * 		  saveData - 그리드 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("unchecked")
	public Object processSAVE_DATA(Map<String, Object> searchVo, Map<String, Object> saveData) throws Exception {
		
		//저장데이터 존재여부 확인
		Integer iCnt =  (Integer) FAMG0070Dao.processSEARCH03(searchVo);
		
		Object oTranSeq = "";

		if( iCnt > 0 ){
			//자료생성 년월 "전송대기" 상태 삭제
			FAMG0070Dao.processDELETE01(searchVo); //상세
			FAMG0070Dao.processDELETE00(searchVo); //마스터
			
			//연결재무제표 IF 마스터 저장
			oTranSeq = FAMG0070Dao.processSAVE00(searchVo);
			
			if( !"".equals(oTranSeq) && oTranSeq != null ) 
			{
				//연결재무제표 IF 상세 저장
				ArrayList<Map<String, Object>> ds = (ArrayList<Map<String, Object>>) saveData.get("dsNS_CFS_DATA_D");
				
				for (Map<String, Object> data : ds)
				{
					data.put("TRAN_SEQ", oTranSeq);							//전송순번
					data.put("GBL_EMPLNO", searchVo.get("GBL_EMPLNO"));		//저장인
					
					LOGGER.info("data >>>" + data);
					FAMG0070Dao.processSAVE01(data);
				}
			}
		}
		
		return oTranSeq;
	}
	
	/**
	 * 연결재무제표 IF 자료전송
	 * @param searchVo - 검색조건 정보가 담긴 Map 객체
	 * 		  saveData - 그리드 정보가 담긴 Map 객체		
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	public Object processTRAN_DATA(Map<String, Object> searchVo, Map<String, Object> saveData) throws Exception {
		
		//자료전송
		Object retInsert = FAMG0070Dao.processSAVE02(searchVo);
		
		if(retInsert == null){
			//상태 업데이트
			FAMG0070Dao.processUPDATE00(searchVo);
		}
		
		return retInsert;
	}
	
}
