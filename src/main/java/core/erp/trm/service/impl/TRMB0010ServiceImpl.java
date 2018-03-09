package core.erp.trm.service.impl;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.com.service.impl.SpSlipMasterCheckDao;
import core.erp.com.service.impl.SpSlipNumberDao;
import core.erp.source.util.ConvertUtil;
import core.erp.trm.service.TRMB0010Service;

/**
 * <pre>
 *	TRMB0010Service - 법인카드 정보
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 23
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 23.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TRMB0010Service")
public class TRMB0010ServiceImpl extends EgovAbstractServiceImpl implements TRMB0010Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMB0010ServiceImpl.class);

	@Resource(name="TRMB0010Dao")
	private TRMB0010Dao tRMB0010Dao;
	
	@Resource(name="spSlipNumberDao")
	private SpSlipNumberDao spSlipNumberDao;

	@Resource(name="spSlipMasterCheckDao")
	private SpSlipMasterCheckDao spSlipMasterCheckDao;	

	/**
	 * 
	 * 작성자 : 김준수
	 * 일시 : 2016 06 23
	 * 내용 : 법인카드 정보를 조회한다.
	 * @param param - 조회조건
	 * @return dsTA_OFFLOC
	 * @exception Exception 예외
	 */
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFA_ACNTXM", tRMB0010Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/**
	 * 
	 * 작성자 : 김준수
	 * 일시 : 2016 06 23
	 * 내용 : 법인카드 정보를   저장,수정 또는 삭제한다.
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

		List dsTR_FITRXM     = (List) saveData.get("dsTR_FITRXM");  
		List dsTR_FITRXM_Del = (List) saveData.get("dsTR_FITRXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTR_FITRXM_Del.size(); i++) {
        	
        	rowVo = (Map) dsTR_FITRXM_Del.get(i);
			deleteCount += tRMB0010Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTR_FITRXM.size(); i++) {

			rowVo = (Map) dsTR_FITRXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				tRMB0010Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				
				tRMB0010Dao.processDELETE00(rowVo);
				tRMB0010Dao.processSAVE00(rowVo);

			}
		}
		
		return deleteCount;

	}

	/* (non-Javadoc)
	 * @see core.erp.fcm.service.TRMB0010Service#processSEARCH01(java.util.Map)
	 */
	public Object processSEARCH01(Map searchVo) throws Exception {
		// TODO Auto-generated method stub
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTR_FITRXM", tRMB0010Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	/* (non-Javadoc)
	 * @see core.erp.fcm.service.TRMB0010Service#processPROC00(java.util.Map)
	 */
	public int processPROC00(Map searchVo, Map saveData) throws Exception {
		// TODO Auto-generated method stub
		LOGGER.debug("------- processPROC00 start ------");
		
		
		// 변수 선언
		String ACCT_UNIT	= (String) searchVo.get("ACCT_UNIT");	      	//회계단위
		String SLIP_DATE	= (String) searchVo.get("SLIP_DATE");	      	//전표발행일
		String ACNT_NUMB	= (String) searchVo.get("ACNT_NUMB");	      	//계좌번호
		BigDecimal SEQN_NUMB	= ConvertUtil.getBigDecimal(searchVo.get("SEQN_NUMB"));       	//일련번호
		String OTHR_ACCT	= (String) searchVo.get("OTHR_ACCT");       	//상대계정과목
		String OTHR_ACNT	= (String) searchVo.get("OTHR_ACNT");       	//상대계좌번호
		String REOC_NUMB	= (String) searchVo.get("REOC_NUMB");       	//관련발생전표번호
		BigDecimal REOC_SEQN	= ConvertUtil.getBigDecimal(searchVo.get("REOC_SEQN"));       	//관련발생전표순번
		
		//logger.debug(">>>>> ACCT_UNIT : " + ACCT_UNIT);	
		//logger.debug(">>>>> SLIP_DATE : " + SLIP_DATE);
		
		/********************
		 * 전표번호 생성 !! *
		 ********************/
		Map slipMap = new HashMap();
		slipMap.put("ACCT_UNIT", ACCT_UNIT);	
		slipMap.put("SLIP_DATE", SLIP_DATE);	
		String slip_number = spSlipNumberDao.getSlipNumber(slipMap);
		
		//logger.debug(">>>>> slip_number : " + slip_number);
			
		HashMap dataMap = new HashMap();
		
		dataMap.put("SLIP_NUMB", slip_number);	
		dataMap.put("ACCT_UNIT", ACCT_UNIT);
		dataMap.put("ACNT_NUMB", ACNT_NUMB);	
		dataMap.put("SEQN_NUMB", SEQN_NUMB);	
		dataMap.put("OTHR_ACCT", OTHR_ACCT);
		dataMap.put("OTHR_ACNT", OTHR_ACNT);
		dataMap.put("REOC_NUMB", REOC_NUMB);
		dataMap.put("REOC_SEQN", REOC_SEQN);
		
		// 변수로 수기 구성하여 세션정보가 없다. 
		// 세션 정보를 추가한다. 추후 보강해야함.
		//dataMap = XPlatformUtil.setSessionValue(dataMap, session);
		
		tRMB0010Dao.processPROC00(dataMap);
		
		
		/************************
		 * 전표 등록 체크 ! *
		 ************************/
		slipMap.put("SLIP_NUMB", slip_number);	
		Map resultMap = spSlipMasterCheckDao.getSlipMasterCheck(slipMap);
		
		String resultCode = (String) resultMap.get("RESULT_CODE");
		String resultMsg  = (String) resultMap.get("RESULT_MSG");
		
		if (resultCode.equals("1")) {
			throw new Exception(resultMsg);
		}
		return 0;
	}

	/* (non-Javadoc)
	 * @see core.erp.fcm.service.TRMB0010Service#processPROC01(java.util.Map)
	 */
	public int processPROC01(Map searchVo, Map saveData) throws Exception {
		// TODO Auto-generated method stub
		LOGGER.debug("------- processPROC01 start ------");
		
		String ACCT_UNIT= (String) searchVo.get("ACCT_UNIT");	      //회계단위[ACCT_UNIT]
		String ACNT_NUMB= (String) searchVo.get("ACNT_NUMB");	      //계좌번호
		BigDecimal SEQN_NUMB	= ConvertUtil.getBigDecimal(searchVo.get("SEQN_NUMB"));       	//일련번호
		
		LOGGER.debug("------- ACCT_UNIT------" + ACCT_UNIT);	
			
		HashMap dataMap = new HashMap();	
			
		dataMap.put("ACCT_UNIT", ACCT_UNIT);	
		dataMap.put("ACNT_NUMB", ACNT_NUMB);	
		dataMap.put("SEQN_NUMB", SEQN_NUMB);	
		
		// 변수로 수기 구성하여 세션정보가 없다. 
		// 세션 정보를 추가한다. 추후보강
		//dataMap = XPlatformUtil.setSessionValue(dataMap, session);

		return tRMB0010Dao.processPROC01(dataMap);
	}
	
}
