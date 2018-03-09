package core.erp.txm.service.impl;

import java.io.File;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0170Service;
import core.ifw.utl.CoreProperties;
import core.ifw.utl.DateTime;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0170ServiceImpl - 부가가치세신고서
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 5.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 5.	황치웅		Initial Created.
 * 2016. 8.11.	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMC0170Service")
public class TXMC0170ServiceImpl extends EgovAbstractServiceImpl implements TXMC0170Service {
	private static final Logger logger = LoggerFactory.getLogger(TXMC0170ServiceImpl.class);
	
	/**
	 * 부가세마감처리  DAO class inject.
	 */
	@Resource(name = "TXMC0170Dao")
	private TXMC0170Dao tXMC0170Dao;
	
	// 매출처별세금계산서집계표
	@Resource(name = "TXMC0010Dao")
	private TXMC0010Dao tXMC0010Dao;
	
	// 매입처별세금계산서집계표
	@Resource(name = "TXMC0030Dao")
	private TXMC0030Dao TXMC0030Dao;
	
	// 매출처별계산서집계표
	@Resource(name = "TXMC0020Dao")
	private TXMC0020Dao tXMC0020Dao;
	
	// 매입처별계산서집계표
	@Resource(name = "TXMC0040Dao")
	private TXMC0040Dao tXMC0040Dao;
	
	// 신용카드매출전표수취명세서
	@Resource(name = "TXMC0100Dao")
	private TXMC0100Dao TXMC0100Dao;
	
	// 신용카드매출전표발행금액집계표
	@Resource(name = "TXMC0050Dao")
	private TXMC0050Dao TXMC0050Dao;
	
	// 공제받지못할매입세액명세서
	@Resource(name = "TXMC0110Dao")
	private TXMC0110Dao tXMC0110Dao;
	
	// 영세율첨부서류제출명세서
	@Resource(name = "TXMC0080Dao")
	private TXMC0080Dao TXMC0080Dao;
	
	// 영세율매출명세서
	@Resource(name = "TXMC0070Dao")
	private TXMC0070Dao tXMC0070Dao;
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		//V101 부가세신고서  
		returnMap.put("dsVA_VATBRANCH", tXMC0170Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT101_H1", tXMC0170Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT101_H2", tXMC0170Dao.processSEARCH02(searchVo));
		returnMap.put("dsTA_VAT101_D", tXMC0170Dao.processSEARCH03(searchVo));
		returnMap.put("dsTA_VAT101_D2", tXMC0170Dao.processSEARCH_V101_D2(searchVo));
		returnMap.put("dsTA_VAT101_D3", tXMC0170Dao.processSEARCH_V101_D3(searchVo));
		returnMap.put("dsVAT_REPORT", tXMC0170Dao.processSEARCH04(searchVo));
		
		//V104 매출처별 세금계산서합계표
		searchVo.put("BILL_TYPECD","1");
		returnMap.put("dsTA_VAT104_D", tXMC0010Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT104_H1", tXMC0010Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT104_H2", tXMC0010Dao.processSEARCH02(searchVo));
		
		//V105 매입처별 세금계산서합계표
		returnMap.put("dsTA_VAT105_D", TXMC0030Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT105_H1", TXMC0030Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT105_H2", TXMC0030Dao.processSEARCH02(searchVo));
		
		//V110 매출처별 계산서합계표
		returnMap.put("dsTA_VAT110_D", tXMC0020Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT110_H1", tXMC0020Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT110_H2", tXMC0020Dao.processSEARCH02(searchVo));
		
		//V109 매입처별 계산서합계표		
		returnMap.put("dsTA_VAT109_D", tXMC0040Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT109_H1", tXMC0040Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT109_H2", tXMC0040Dao.processSEARCH02(searchVo));
		searchVo.put("BILL_TYPECD","");
		
		//V164 신용카드매출전표수취명세서
		returnMap.put("dsTA_VAT164_D", TXMC0100Dao.processSEARCH01(searchVo));
		
		//V117 신용카드매출전표 발행금액 등 집계표
		returnMap.put("dsTA_VAT117_H", TXMC0050Dao.processSEARCH01(searchVo));
		
		//V153 공제받지못할매입세액명세서
		returnMap.put("dsTA_VAT153_H", tXMC0110Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT153_D", tXMC0110Dao.processSEARCH02(searchVo));
		returnMap.put("dsTA_VAT153_D1", tXMC0110Dao.processSEARCH03(searchVo));
		returnMap.put("dsTA_VAT153_D2", tXMC0110Dao.processSEARCH04(searchVo));
		returnMap.put("dsTA_VAT153_D3", tXMC0110Dao.processSEARCH05(searchVo));
		
		//V141 수출실적명세서
		//V106 영세율첨부서류제출명세서
		returnMap.put("dsTA_VAT106_D", TXMC0080Dao.processSEARCH01(searchVo));
		
		//V112 대손세액공제(변제)신고서
		//V149 건물등감가상각자산취득명세서
		//V166 사업자단위과세별부가세과세표준및납부세액
		//V181 부동산임대공급가액 명세서
		//V177 영세율매출명세서
		returnMap.put("dsTA_VAT177_H", tXMC0070Dao.processSEARCH01(searchVo));
		
		return returnMap;

    }
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VAT101_H1", tXMC0170Dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VAT101_H2", tXMC0170Dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VAT101_D", tXMC0170Dao.processSEARCH03(searchVo));
		return returnMap;

    }
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH_V101_D2(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VAT101_D2", tXMC0170Dao.processSEARCH_V101_D2(searchVo));
		return returnMap;

    }
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH_V101_D3(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VAT101_D3", tXMC0170Dao.processSEARCH_V101_D3(searchVo));
		return returnMap;

    }
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATREPORT", tXMC0170Dao.processSEARCH04(searchVo));
		return returnMap;

    }
	
	/**
	 * 부가세마감처리를 저장한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE00(Map searchVo, Map saveData) throws Exception{
		 
		String fileName 	= "";
		String filePath 	= "";
		String filePath_R 	= "";
		
		// 파일명, 파일경로 셋팅
		String FILE_NAME 	= (String) searchVo.get("FILE_NAME");
		String FILE_CONTENT = (String) searchVo.get("FILE_CONTENT");
		String FILE_FILTER 	= (String) searchVo.get("FILE_FILTER");
		
		fileName 	= FILE_NAME + FILE_FILTER;
		filePath 	= CoreProperties.getProperty("CoreERP.file.upload.path") + "CAL_PDF/" + DateTime.getDateString("yyyy") + "/";
		filePath_R 	= "CAL_PDF/" + DateTime.getDateString("yyyy") + "/";
		
		// 디렉토리 생성
		File dirs 	= new File(filePath+fileName);
		if (!dirs.exists()) dirs.mkdirs();

		// 파일생성
		File dataFile = new File(filePath + fileName);
		if (dataFile.exists()) dataFile.delete();

		dataFile = new File(filePath + fileName);
		
		// 파일쓰기
		PrintWriter writer 	= new PrintWriter(dataFile, "EUC-KR" );
		writer.println(FILE_CONTENT);
		writer.flush();
		writer.close();

		String returnStr = fileName + "," + filePath_R;
		logger.debug("returnStr : "+returnStr);

		return returnStr;

	}

}
