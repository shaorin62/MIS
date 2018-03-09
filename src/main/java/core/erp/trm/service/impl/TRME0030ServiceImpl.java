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

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.source.util.ConvertUtil;
import core.erp.trm.service.TRME0030Service;

/**
 * <pre>
 *	TRME0030Service - 법인카드 정보
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
@Service("TRME0030Service")
public class TRME0030ServiceImpl extends EgovAbstractServiceImpl implements TRME0030Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRME0030ServiceImpl.class);

	@Resource(name="TRME0030Dao")
	private TRME0030Dao tRME0030Dao;

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
		returnMap.put("dsTA_CARDBM", tRME0030Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/**
	 * 
	 * 작성자 : 김준수
	 * 일시 : 2016 06 23
	 * 내용 : 법인카드 청구 정보를 수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;

		List dsTA_CARDBM     = (List) saveData.get("dsTA_CARDBM");  


        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_CARDBM.size(); i++) {

			rowVo = (Map) dsTA_CARDBM.get(i);
			String CUST_BANK = (String) rowVo.get("CUST_BANK");
			String CUST_ACNT = (String) rowVo.get("CUST_ACNT");
			String CUST_OWNE = (String) rowVo.get("CUST_OWNE");
			
			rowVo.put("ACNT_NUMB", CUST_ACNT);	//계좌번호
			rowVo.put("BANK_GUBN", CUST_BANK);	//금융기관
			rowVo.put("ACNT_MANM", CUST_OWNE);	//예금주
			updateCount += tRME0030Dao.processUPDATE00(rowVo);

		}
		
		return updateCount;

	}

	public int processPROC10(Map searchVo) throws Exception {	
		return tRME0030Dao.processPROC10(searchVo);
	}

	/**
	 * 
	 * 작성자 : 권미영
	 * 일시 : 2016 09 25
	 * 내용 : 법인카드 청구 전표생성
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

		List dsMAIN_TA_CARDAM = (List) saveData.get("dsMAIN_TA_CARDBM");

		//------------------------------------
		// 1. 전표대상데이터 체크 UPDATE
		//------------------------------------
		int updateCount = 0;
		for (int i = 0; i < dsMAIN_TA_CARDAM.size(); i++) {

			rowVo = (Map) dsMAIN_TA_CARDAM.get(i);
			rowVo.put("FORM_IDXX", searchVo.get("FORM_IDXX"));
			
			if (i == 0) {
				tRME0030Dao.processUPDATE02(rowVo);
			}
			saveCount += tRME0030Dao.processUPDATE03(rowVo);
		}

		//------------------------------------
		// 2. 전표생성
		//------------------------------------
		if (searchVo.size() > 0) {
			rowVo = searchVo;
			
			rowVo.put("SYST_LNCD", sSYST_LNCD);	
			tRME0030Dao.processPROC00(rowVo);
			
			saveCount++;
		}

		//------------------------------------
		// 3. 전표처리된 전표번호 가져오기
		//------------------------------------
		rowVo = (Map) dsMAIN_TA_CARDAM.get(0);
		sSlipNumb = (String) tRME0030Dao.processSEARCHSLIPNUM(rowVo);
		
		LOGGER.debug("sSlipNumb>>>"+ sSlipNumb);
		LOGGER.debug("------- processPROC00 end ------");

		return sSlipNumb;
		
	}

	/**
	 * 
	 * 작성자 : 권미영
	 * 일시 : 2016 09 27
	 * 내용 : 법인카드청구 발행전표 삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	
	public Object processPROC01(Map searchVo) throws Exception {
		
		String sSYST_LNCD		= "KO";  //시스템언어코드
		
		searchVo.put("SYST_LNCD", sSYST_LNCD);
		return tRME0030Dao.processPROC01(searchVo);
		
	}

	/**
	 * 
	 * 작성자 : 권미영
	 * 일시 : 2016 11 17
	 * 내용 : 법인카드사용 청구내역 가져오기
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	
	public Object processPROC02(Map searchVo) throws Exception {
		
		return tRME0030Dao.processPROC02(searchVo);
		
	}
	
}
