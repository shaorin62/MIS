/**
 * core.erp.fam.service.impl.FSMF0010P01ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMF0010P01Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import core.erp.source.util.ConvertUtil;
import core.erp.com.service.impl.SpSlipNumberDao;
import core.erp.com.service.impl.SpSlipMasterCheckDao;


/**
 * <pre>
 *	FSMF0010P01ServiceImpl - 건설중자산대체등록 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 * @see		{@link FSMF0010P01Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMF0010P01Service")
public class FSMF0010P01ServiceImpl extends EgovAbstractServiceImpl implements FSMF0010P01Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FSMF0010P01ServiceImpl.class);

	/**
	 * 건설중자산대체등록 DAO class inject.
	 */
	@Resource(name = "FSMF0010P01Dao")
	private FSMF0010P01Dao fSMF0010P01Dao;
	
//	@Resource(name = "SpSlipNumberDao")
//	private SpSlipNumberDao spSlipNumberDao;
//	
//	@Resource(name = "SpSlipMasterCheckDao")
//	private SpSlipMasterCheckDao spSlipMasterCheckDao;
	
	/**
	 * 건설중자산대체 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 건설중자산대체 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASTFLS", fSMF0010P01Dao.processSEARCH00(searchVo));
		return returnMap;

	}

	/**
	 * 건설중자산대체등록 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASTFXM     = (List) saveData.get("dsFS_ASTFXM");  
		List dsFS_ASTFXM_Del = (List) saveData.get("dsFS_ASTFXM_DELETE");

		List dsFS_ASTFLS     = (List) saveData.get("dsFS_ASTFLS");
		List dsFS_ASTFLS_Del = (List) saveData.get("dsFS_ASTFLS_DELETE");

		List dsFS_ASTFLA     = (List) saveData.get("dsFS_ASTFLA");
		List dsFS_ASTFLA_Del = (List) saveData.get("dsFS_ASTFLA_DELETE");


		int iSlipSeqn     	= 1; 		//전표순번(두개의 디테일의 전표순번을 정해주기 위해서)
		String ACCT_UNIT	= "";		//회계단위
		String ASTF_DATE	= "";		//대체일자
		String ASTF_NUMB	= "";		//신규자산대체번o호
		String SLIP_LINE	= "";		//전표순번 int->String
		
		ACCT_UNIT = (String) searchVo.get("ACCT_UNIT");
		ASTF_DATE = (String) searchVo.get("ASTF_DATE");
		ASTF_NUMB = fSMF0010P01Dao.processSEARCH01(searchVo);
		LOGGER.debug("------- ASTF_NUMB: "+ ASTF_NUMB);


		//건설중자산대체등록 헤더 테이블 에 Insert Or Update (DataSet의 Row Count만큼 돌면서)
		for (int i = 0; i < dsFS_ASTFXM.size(); i++) {

			rowVo = (Map) dsFS_ASTFXM.get(i);
			rowVo.put("ACCT_UNIT", ACCT_UNIT);
			rowVo.put("ASTF_DATE", ASTF_DATE);
			rowVo.put("ASTF_NUMB", ASTF_NUMB);
			
			fSMF0010P01Dao.processSAVE00(rowVo);

		}

		//차변-건설중자산대체등록 대체계정(디테일) 테이블 에 Insert Or Update (DataSet의 Row Count만큼 돌면서)
		for (int i = 0; i < dsFS_ASTFLA.size(); i++) {

			rowVo = (Map) dsFS_ASTFLA.get(i);
			rowVo.put("ACCT_UNIT", ACCT_UNIT);
			rowVo.put("ASTF_DATE", ASTF_DATE);
			rowVo.put("ASTF_NUMB", ASTF_NUMB);
			
			BigDecimal SLIP_SEQN = ConvertUtil.getBigDecimal(iSlipSeqn);

			SLIP_LINE = ConvertUtil.leftPad(SLIP_SEQN.toString(), 4, "0");

			rowVo.put("SLIP_SEQN", SLIP_LINE);

			fSMF0010P01Dao.processSAVE02(rowVo);

			iSlipSeqn++; //전표순번 늘려주기

		}	

		//대변-건설중자산대체등록 소스전표(디테일) 테이블 에 Insert Or Update (DataSet의 Row Count만큼 돌면서)
		for (int i = 0; i < dsFS_ASTFLS.size(); i++) {

			rowVo = (Map) dsFS_ASTFLS.get(i);
			rowVo.put("ACCT_UNIT", ACCT_UNIT);
			rowVo.put("ASTF_DATE", ASTF_DATE);
			rowVo.put("ASTF_NUMB", ASTF_NUMB);

			BigDecimal SLIP_SEQN = ConvertUtil.getBigDecimal(iSlipSeqn);
			SLIP_LINE = ConvertUtil.leftPad(SLIP_SEQN.toString(), 4, '0');
			
			rowVo.put("SLIP_SEQN", SLIP_LINE);
			LOGGER.debug("------- SLIP_SEQN: "+ SLIP_LINE);
			
			fSMF0010P01Dao.processSAVE01(rowVo);

			iSlipSeqn++; //전표순번 늘려주기
		}

//		/********************
//		 * 전표번호 생성 !! *
//		 ********************/
//		// 변수 선언
//		String ACCT_UNIT	= (String) searchVo.get("ACCT_UNIT");	      	//회계단위
//		String SLIP_DATE	= (String) searchVo.get("ASTF_DATE");	      	//대체일자
//		LOGGER.debug(">>>>> ACCT_UNIT : " + ACCT_UNIT);	
//		LOGGER.debug(">>>>> SLIP_DATE : " + SLIP_DATE);
//		
//		Map slipMap = null;
//	
//		slipMap.put("ACCT_UNIT", ACCT_UNIT);	
//		slipMap.put("SLIP_DATE", SLIP_DATE);	
//		String slip_number = spSlipNumberDao.getSlipNumber(slipMap);
//		
//
//	    //건설중자산대체등록 전표생성.  헤더 정보를 이용함. PKG안에서 LOOP처리
//		//for (int i = 0; i < ds00.getRowCount(); i++) {
//		rowVo = (Map) dsFS_ASTFXM.get(0);
//		
//		rowVo.put("ASTF_NUMB", ASTF_NUMB);
//		rowVo.put("SLIP_NUMB", slip_number);
//		
//		fSMF0010P01Dao.processSLIP00(rowVo);
//
//		//}		
//
//		/************************
//		 * 전표 등록 체크 ! *
//		 ************************/
//		slipMap.put("SLIP_NUMB", slip_number);
//		Map resultMap = spSlipMasterCheckDao.getSlipMasterCheck(slipMap);
//		
//		String resultCode = (String) resultMap.get("RESULT_CODE");
//		String resultMsg  = (String) resultMap.get("RESULT_MSG");
//		
//		if (resultCode.equals("1")) {
//			throw new Exception(resultMsg);
//		}
		
		return deleteCount + updateCount;

	}

}
