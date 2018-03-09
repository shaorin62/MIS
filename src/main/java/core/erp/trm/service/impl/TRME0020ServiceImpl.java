package core.erp.trm.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.com.service.impl.SpSlipMasterCheckDao;
import core.erp.com.service.impl.SpSlipNumberDao;
import core.erp.source.util.ConvertUtil;
import core.erp.trm.service.TRME0020Service;

/**
 * <pre>
 *	TRME0020Service - 법인카드 승인내역 및 전표처리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 27
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 27.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TRME0020Service")
public class TRME0020ServiceImpl extends EgovAbstractServiceImpl implements TRME0020Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRME0020ServiceImpl.class);

	@Resource(name="TRME0020Dao")
	private TRME0020Dao tRME0020Dao;

	@Resource(name="spSlipNumberDao")
	private SpSlipNumberDao spSlipNumberDao;

	@Resource(name="spSlipMasterCheckDao")
	private SpSlipMasterCheckDao spSlipMasterCheckDao;	

	/**
	 * 
	 * 작성자 : 김준수
	 * 일시 : 2016 06 27
	 * 내용 : 법인카드 승인내역및 전표처리  저장 !
	 * @param param - 조회조건
	 * @return dsTA_CARDAM
	 * @exception Exception 예외
	 */
	// 사용되지 않음..
	@SuppressWarnings("rawtypes")
	public Object processBATCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("", tRME0020Dao.processBATCH00(searchVo));
		return returnMap;
	}

	/**
	 * 
	 * 작성자 : 김준수
	 * 일시 : 2016 06 27
	 * 내용 : 법인카드 승인내역및 전표처리를 조회한다.
	 * @param param - 조회조건
	 * @return dsTA_CARDAM
	 * @exception Exception 예외
	 */

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CARDAM", tRME0020Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/**
	 * 
	 * 작성자 : 김준수
	 * 일시 : 2016 06 27
	 * 내용 : 회계계정관리코드를 조회한다.
	 * @param param - 조회조건
	 * @return dsTA_ACCTXD
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ACCTXD", tRME0020Dao.processSEARCH01(searchVo));
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

		List dsTA_CARDAM     = (List) saveData.get("dsTA_CARDAM");  
	
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_CARDAM.size(); i++) {

			rowVo = (Map) dsTA_CARDAM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1 || rowType == 2) {
				updateCount += tRME0020Dao.processUPDATE00(rowVo);
			}
		}

		return deleteCount + updateCount;

	}

	/**
	 * <pre>
	 * 작성자 : 김준수
	 * 일시 : 2016.06.23
	 * 내용 : 법인카드 사용내역 정보 수정 - 거래처체크적용
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	public int processSAVE01(Map searchVo, Map saveData) throws Exception {
		LOGGER.debug("----------processSAVE01 start---------------");

		List dsMAIN_TA_CARDAM = (List) saveData.get("dsMAIN_TA_CARDAM");

		int updateCount = 0;
		for (int i = 0; i < dsMAIN_TA_CARDAM.size(); i++) {
			
			Map data = (Map) dsMAIN_TA_CARDAM.get(i);
			
			data.put("APPR_SEQU", ConvertUtil.getBigDecimal(data.get("APPR_SEQU")));
			data.put("SUPP_AMNT", ConvertUtil.getBigDecimal(data.get("SUPP_AMNT")));
			data.put("VATX_AMNT", ConvertUtil.getBigDecimal(data.get("VATX_AMNT")));
			data.put("APPR_AMNT", ConvertUtil.getBigDecimal(data.get("APPR_AMNT")));
			data.put("APPR_TAXX", ConvertUtil.getBigDecimal(data.get("APPR_TAXX")));
			data.put("USEX_FEEX", ConvertUtil.getBigDecimal(data.get("USEX_FEEX")));
			data.put("HALB_NUMB", ConvertUtil.getBigDecimal(data.get("HALB_NUMB")));
			data.put("APPR_GUBN", data.get("APPR_GUBN"));
			data.put("ACCT_DATE1", searchVo.get("ACCT_DATE1"));
			data.put("ACCT_DATE2", searchVo.get("ACCT_DATE2"));
			data.put("CARD_NUMB", data.get("CARD_NUMB"));
			data.put("APPR_STAT", searchVo.get("APPR_STAT"));
			data.put("DEPT_CODE", searchVo.get("DEPT_CODE"));
			data.put("EMPL_NUMB", searchVo.get("EMPL_NUMB"));

			
			updateCount += tRME0020Dao.processUPDATE01(data);
		}
		LOGGER.debug("----------processSAVE01 end---------------");
		return updateCount;
	}

	/**
	 * 
	 * 작성자 : 권미영
	 * 일시 : 2016 09 25
	 * 내용 : 법인카드 사용 전표생성
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	public String processPROC00(Map searchVo, Map saveData) throws Exception {
		
		int saveCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sSlipNumb		= "";
		String sSYST_LNCD		= "KO";  //시스템언어코드

		List dsMAIN_TA_CARDAM = (List) saveData.get("dsMAIN_TA_CARDAM");
		
		//------------------------------------
		// 1. 전표대상데이터 체크 UPDATE
		//------------------------------------
		int updateCount = 0;
		for (int i = 0; i < dsMAIN_TA_CARDAM.size(); i++) {

			rowVo = (Map) dsMAIN_TA_CARDAM.get(i);
			rowVo.put("FORM_IDXX", searchVo.get("FORM_IDXX"));
			
			if (i == 0) {
				tRME0020Dao.processUPDATE02(rowVo);
			}
			saveCount += tRME0020Dao.processUPDATE03(rowVo);
		}
		
		//------------------------------------
		// 2. 전표생성
		//------------------------------------
		if (searchVo.size() > 0) {
			rowVo = searchVo;
			
			rowVo.put("SYST_LNCD", sSYST_LNCD);	
			tRME0020Dao.processPROC00(rowVo);
			
			saveCount++;
		}
		
		//------------------------------------
		// 3. 전표처리된 전표번호 가져오기
		//------------------------------------
		rowVo = (Map) dsMAIN_TA_CARDAM.get(0);
		sSlipNumb = (String) tRME0020Dao.processSEARCHSLIPNUM(rowVo);
		
		LOGGER.debug("sSlipNumb>>>"+ sSlipNumb);
		LOGGER.debug("------- processPROC00 end ------");

		return sSlipNumb;
	}

	/**
	 * 
	 * 작성자 : 권미영
	 * 일시 : 2016 09 25
	 * 내용 : 법인카드사용 발행전표 삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	
	public Object processPROC01(Map searchVo) throws Exception {
		
		String sSYST_LNCD		= "KO";  //시스템언어코드
		
		searchVo.put("SYST_LNCD", sSYST_LNCD);
		return tRME0020Dao.processPROC01(searchVo);
		
	}

	/**
	 * 
	 * 작성자 : 권미영
	 * 일시 : 2016 11 17
	 * 내용 : 법인카드사용 매입자료 가져오기
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	
	public Object processPROC02(Map searchVo) throws Exception {
		
		return tRME0020Dao.processPROC02(searchVo);
		
	}

	/**
	 * 
	 * 작성자 : 권미영
	 * 일시 : 2016 12 20
	 * 내용 : 경과비용전표생성 허용처리
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	
	public int processSAVE04(Map searchVo, Map saveData) throws Exception {

		int saveCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sSlipNumb		= "";
		String sSYST_LNCD		= "KO";  //시스템언어코드

		List dsMAIN_TA_CARDAM = (List) saveData.get("dsMAIN_TA_CARDAM");
		
		int updateCount = 0;
		for (int i = 0; i < dsMAIN_TA_CARDAM.size(); i++) {

			rowVo = (Map) dsMAIN_TA_CARDAM.get(i);
			saveCount += tRME0020Dao.processSAVE04(rowVo);
		}
		
		
		return saveCount;
		
	}
	
}
