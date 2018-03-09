/**
 * core.erp.wfm.service.impl.WFMA0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.wfm.service.WFMA0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMA0030ServiceImpl - 경조금 신청 등록 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	정한균
 * @since	2016.09.19
 * @version	1.0
 * @see		{@link WFMA0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	정한균			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMA0030Service")
public class WFMA0030ServiceImpl extends EgovAbstractServiceImpl implements WFMA0030Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(WFMA0030ServiceImpl.class);
	/**
	 * 경조금 신청 현황 DAO class inject.
	 */
	@Resource(name = "WFMA0030Dao")
	private WFMA0030Dao dao;

	/**
	 * 경조금 신청 현황을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 경조금 신청 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_COCOAP", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 
	 * 작성자 : 정한균
	 * 일시 : 2016.10.06
	 * 내용 : 경조금 전표생성
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

		List dsMAIN_CW_COCOAP = (List) saveData.get("dsMAIN_CW_COCOAP");
		
		//------------------------------------
		// 1. 전표대상데이터 체크 UPDATE
		//------------------------------------
		for (int i = 0; i < dsMAIN_CW_COCOAP.size(); i++) {

			rowVo = (Map) dsMAIN_CW_COCOAP.get(i);
			rowVo.put("FORM_IDXX", searchVo.get("FORM_IDXX"));
			
			if (i == 0) {
				dao.processUPDATE02(rowVo);
			}
			saveCount += dao.processUPDATE03(rowVo);
		}
		
		//------------------------------------
		// 2. 전표생성
		//------------------------------------
		if (searchVo.size() > 0) {
			rowVo = searchVo;
			
			rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));	
			dao.processPROC00(rowVo);
			
			saveCount++;
		}
		
		//------------------------------------
		// 3. 전표처리된 전표번호 가져오기
		//------------------------------------
		rowVo = (Map) dsMAIN_CW_COCOAP.get(0);
		//sSlipNumb = (String) dao.processSEARCHSLIPNUM(rowVo);
		
		LOGGER.debug("sSlipNumb>>>"+ sSlipNumb);
		LOGGER.debug("------- processPROC00 end ------");

		return sSlipNumb;
	}

	/**
	 * 
	 * 작성자 : 정한균
	 * 일시 : 2016.10.06
	 * 내용 : 경조금 발행전표 삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	
	public Object processPROC01(Map saveData) throws Exception {
		
		String sSYST_LNCD		= "KO";  //시스템언어코드
		
		saveData.put("SYST_LNCD", sSYST_LNCD);
		return dao.processPROC01(saveData);
		
	}	
	
}