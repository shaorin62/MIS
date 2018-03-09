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
import core.erp.trm.service.TRMA0060Service;

/**
 * <pre>
 *	TRMA0060Service - 채권채무상계관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	권미영
 * @since	2016 11. 11
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 11. 11.	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TRMA0060Service")
public class TRMA0060ServiceImpl extends EgovAbstractServiceImpl implements TRMA0060Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMA0060ServiceImpl.class);

	@Resource(name="TRMA0060Dao")
	private TRMA0060Dao tRMA0060Dao;

	/**
	 * 
	 * 작성자 : 권미영
	 * 일시 : 2016 11 11
	 * 내용 : 채권채무내역 조회
	 * @param param - 조회조건
	 * @return dsTA_OFFLOC
	 * @exception Exception 예외
	 */

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();

		//1. 채권내역 조회
		searchVo.put("ACCT_TYPE", "FA280150");	//계정종류 : 채권
		searchVo.put("ACCT_INT1", searchVo.get("BOND_INT1").toString());	//계정코드(F)
		searchVo.put("ACCT_INT2", searchVo.get("BOND_INT2").toString());	//계정코드(T)
		searchVo.put("ACCT_DAT1", searchVo.get("BOND_DAT1").toString());	//채권발생기간(F)
		searchVo.put("ACCT_DAT2", searchVo.get("BOND_DAT2").toString());	//채권발생기간(T)

		returnMap.put("dsTA_SLIPNT_BOND", tRMA0060Dao.processSEARCH00(searchVo));

		//2. 채무내역 조회
		searchVo.put("ACCT_TYPE", "FA280160");	//계정종류 : 채무
		searchVo.put("ACCT_INT1", searchVo.get("DEBT_INT1").toString());	//계정코드(F)
		searchVo.put("ACCT_INT2", searchVo.get("DEBT_INT2").toString());	//계정코드(T)
		searchVo.put("ACCT_DAT1", searchVo.get("DEBT_DAT1").toString());	//채권발생기간(F)
		searchVo.put("ACCT_DAT2", searchVo.get("DEBT_DAT2").toString());	//채권발생기간(T)

		returnMap.put("dsTA_SLIPNT_DEBT", tRMA0060Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/**
	 * 
	 * 작성자 : 권미영
	 * 일시 : 2016 09 25
	 * 내용 : 채권채무 상계전표생성
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

		List dsTA_SLIP     		= (List) saveData.get("dsTA_SLIP");

		//------------------------------------
		// 1. 전표헤더 생성
		//------------------------------------
		if (searchVo.size() > 0) {
			rowVo = searchVo;

			rowVo.put("SYST_LNCD", sSYST_LNCD);
			tRMA0060Dao.processPROC00(searchVo);

			sSlipNumb = (String) rowVo.get("oSLIP_NUMB");
			saveCount++;
		}

		//------------------------------------
		// 2-1. 전표라인, 관리항목 생성(채권/채무)
		//------------------------------------
		for (int i = 0; i < dsTA_SLIP.size(); i++) {

			rowVo = (Map) dsTA_SLIP.get(i);
			rowVo.put("SYST_LNCD", sSYST_LNCD);
			if (!sSlipNumb.isEmpty()) rowVo.put("SLIP_NUMB", sSlipNumb);
			tRMA0060Dao.processPROC01(rowVo);

			saveCount++;
		}

		//------------------------------------
		// 2-2. 2017.01.16 권미영
		//      전표라인의 정렬순서 재조정
		//------------------------------------
		searchVo.put("SLIP_NUMB", sSlipNumb);
		tRMA0060Dao.processPROC03(searchVo);

		//------------------------------------
		// 3. 전표작성완료
		//------------------------------------
		if (saveCount > 0) {
			rowVo.put("SYST_LNCD", sSYST_LNCD);
			tRMA0060Dao.processPROC02(rowVo);
			if (sSlipNumb.isEmpty()) {
				sSlipNumb = (String) rowVo.get("SLIP_NUMB");
			}
		}

		LOGGER.debug("sSlipNumb>>>"+ sSlipNumb);
		LOGGER.debug("------- processPROC00 end ------");

		return sSlipNumb;

	}

}
