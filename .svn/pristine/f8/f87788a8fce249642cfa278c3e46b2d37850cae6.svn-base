package core.erp.yea.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.evm.web.EVMA0080Controller;
import core.erp.source.util.ComNTSPdfConverter;
import core.erp.yea.service.YEAA0070_2016Service;
import core.ifw.utl.CoreProperties;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	YEAA0070_2016ServiceImpl - 연말정산처리 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.31.
 * @version	1.0
 * @see		{@link YEAA0070_2016Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.10.31.	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("YEAA0070_2016Service")
public class YEAA0070_2016ServiceImpl extends EgovAbstractServiceImpl implements YEAA0070_2016Service {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(YEAA0070_2016Service.class);

	/**
	 * 연말정산처리 DAO class inject.
	 */
	@Resource(name = "YEAA0070_2016Dao")
	private YEAA0070_2016Dao dao;

	/**
	 * 연말정산처리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsYEA_MASTXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 연말정산처리 상세내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsYEA_YEFAMI", dao.processSEARCH01(searchVo)); // 부양가족
		returnMap.put("dsYEA_PAYDTL", dao.processSEARCH02(searchVo)); // 근로소득
		returnMap.put("dsYEA_BFWORK", dao.processSEARCH03(searchVo)); // 종근무지1
		returnMap.put("dsYEA_BFNTAX", dao.processSEARCH04(searchVo)); // 종근무지2
		
		searchVo.put("YEA_PEN_STR001", "1");
		returnMap.put("dsYEA_PENSAV1", dao.processSEARCH05(searchVo)); // 연금저축명세서1

		searchVo.put("YEA_PEN_STR001", "2");
		returnMap.put("dsYEA_PENSAV2", dao.processSEARCH05(searchVo)); // 연금저축명세서2
		
		searchVo.put("YEA_PEN_STR001", "3");
		returnMap.put("dsYEA_PENSAV3", dao.processSEARCH05(searchVo)); // 연금저축명세서3
		
		searchVo.put("YEA_PEN_STR001", "5");
		returnMap.put("dsYEA_PENSAV4", dao.processSEARCH05(searchVo)); // 연금저축명세서4
		
		returnMap.put("dsYEA_RENTA1", dao.processSEARCH06(searchVo)); // 월세주택임차차입금1
		returnMap.put("dsYEA_RENTA2", dao.processSEARCH07(searchVo)); // 월세주택임차차입금2
		
		returnMap.put("dsYEA_MEDISP", dao.processSEARCH08(searchVo)); // 의료비명세서
		returnMap.put("dsYEA_DONASP", dao.processSEARCH09(searchVo)); // 기부금명세서
		returnMap.put("dsYEA_DONAAD", dao.processSEARCH10(searchVo)); // 기부금조정명세
		returnMap.put("dsYEA_INCDEC", dao.processSEARCH11(searchVo)); // 소득공제신고
		returnMap.put("dsYEA_YEPROC", dao.processSEARCH12(searchVo)); // 연말정산처리
		
		return returnMap;

    }

	/**
	 * 소득공제신고서를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processREPORT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		returnMap.put("dsYEA_INCDEC_RPT1", dao.processPRINT01(searchVo)); //소득공제신고서Header
		returnMap.put("dsYEA_INCDEC_RPT2", dao.processPRINT02(searchVo)); //연말정산가족사항
		
		searchVo.put("YEA_PEN_STR001", "1");
		returnMap.put("dsYEA_PENSAV_RPT1", dao.processPRINT03(searchVo)); //연금저축명세서1

		searchVo.put("YEA_PEN_STR001", "2");
		returnMap.put("dsYEA_PENSAV_RPT2", dao.processPRINT03(searchVo)); //연금저축명세서2
		
		searchVo.put("YEA_PEN_STR001", "3");
		returnMap.put("dsYEA_PENSAV_RPT3", dao.processPRINT03(searchVo)); //연금저축명세서3
		
		searchVo.put("YEA_PEN_STR001", "5");
		returnMap.put("dsYEA_PENSAV_RPT4", dao.processPRINT03(searchVo)); //연금저축명세서4
		
		returnMap.put("dsYEA_RENTA1_RPT", dao.processSEARCH06(searchVo)); //월세주택임차차입금1
		returnMap.put("dsYEA_RENTA2_RPT", dao.processSEARCH07(searchVo)); //월세주택임차차입금2
		
		return returnMap;
    }

	/**
	 * 원천징수영수증을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processREPORT01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		//returnMap.put("dsYEA_YEPROC_RPT1", dao.processPRINT10(searchVo)); //근로소득원천징수영수증1
		//returnMap.put("dsYEA_YEPROC_RPT2", dao.processPRINT11(searchVo)); //근로소득원천징수영수증2
				
		Map rowVo = null;
		int rowType = 0;
		
		List dsYEA_MASTXM = (List) searchVo.get("dsYEA_MASTXM_ARG");  
		List<Map<String, Object>> colListH = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> colListD = new ArrayList<Map<String,Object>>();
		
        for (int i = 0; i < dsYEA_MASTXM.size(); i++) {
			rowVo = (Map) dsYEA_MASTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			
			Object dataH = new HashMap();
			Object dataD = new HashMap();
			
			dataH = dao.processPRINT10(rowVo);
			
			for(int j = 0 ; j < DataSetUtil.getRowCount(dataH) ; j ++){
				Map<String, Object> data = new HashMap();
				
				data.put("YEA_EMP_NO"        ,DataSetUtil.getColumn(dataH, j, "YEA_EMP_NO").toString());
				data.put("ROW_NUM"           ,Integer.toString(i+1) + "-" + Integer.toString(dsYEA_MASTXM.size()));
				data.put("SIGN_IMGE"         ,DataSetUtil.getColumn(dataH, j, "SIGN_IMGE").toString());
				data.put("YEA_LIVE_CD"       ,DataSetUtil.getColumn(dataH, j, "YEA_LIVE_CD").toString());
				data.put("YEA_LOFO_CD"       ,DataSetUtil.getColumn(dataH, j, "YEA_LOFO_CD").toString());
				data.put("YEA_LIVE_NATION_NM",DataSetUtil.getColumn(dataH, j, "YEA_LIVE_NATION_NM").toString());
				data.put("YEA_LIVE_NATION_CD",DataSetUtil.getColumn(dataH, j, "YEA_LIVE_NATION_CD").toString());
				data.put("YEA_RATE_YN"       ,DataSetUtil.getColumn(dataH, j, "YEA_RATE_YN").toString());
				data.put("YEA_NATION_NM"     ,DataSetUtil.getColumn(dataH, j, "YEA_NATION_NM").toString());
				data.put("YEA_NATION_CD"     ,DataSetUtil.getColumn(dataH, j, "YEA_NATION_CD").toString());
				data.put("YEA_INC_STR024"    ,DataSetUtil.getColumn(dataH, j, "YEA_INC_STR024").toString());
				data.put("YEA_PRC_STR002"    ,DataSetUtil.getColumn(dataH, j, "YEA_PRC_STR002").toString());
				data.put("YEA_BRANCH_NM"     ,DataSetUtil.getColumn(dataH, j, "YEA_BRANCH_NM").toString());
				data.put("YEA_CORP_MASTER"   ,DataSetUtil.getColumn(dataH, j, "YEA_CORP_MASTER").toString());
				data.put("YEA_BIZ_NO"        ,DataSetUtil.getColumn(dataH, j, "YEA_BIZ_NO").toString());
				data.put("YEA_CORP_NO"       ,DataSetUtil.getColumn(dataH, j, "YEA_CORP_NO").toString());
				data.put("YEA_ADDRESS"       ,DataSetUtil.getColumn(dataH, j, "YEA_ADDRESS").toString());
				data.put("YEA_EMP_NM"        ,DataSetUtil.getColumn(dataH, j, "YEA_EMP_NM").toString());
				data.put("YEA_EMP_SSN"       ,DataSetUtil.getColumn(dataH, j, "YEA_EMP_SSN").toString());
				data.put("YEA_HOME_ADDRESS"  ,DataSetUtil.getColumn(dataH, j, "YEA_HOME_ADDRESS").toString());
				data.put("YEA_TAXOFFIC_NAME" ,DataSetUtil.getColumn(dataH, j, "YEA_TAXOFFIC_NAME").toString()); 

				data.put("YEA_HIRE_YMD"  ,DataSetUtil.getColumn(dataH, j, "YEA_HIRE_YMD").toString());
				data.put("YEA_QUIT_YMD"  ,DataSetUtil.getColumn(dataH, j, "YEA_QUIT_YMD").toString());
				data.put("YEA_INC_STR002",DataSetUtil.getColumn(dataH, j, "YEA_INC_STR002").toString());
				data.put("YEA_INC_STR003",DataSetUtil.getColumn(dataH, j, "YEA_INC_STR003").toString());
				data.put("YEA_PAY_SUM001",DataSetUtil.getColumn(dataH, j, "YEA_PAY_SUM001").toString());
				data.put("YEA_PAY_NUM003",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM003").toString());
				data.put("YEA_PAY_NUM004",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM004").toString());
				data.put("YEA_PAY_NUM005",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM005").toString());
				data.put("YEA_PAY_NUM006",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM006").toString());
				data.put("YEA_PAY_NUM007",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM007").toString());
				data.put("YEA_PAY_SUM002",DataSetUtil.getColumn(dataH, j, "YEA_PAY_SUM002").toString());
				data.put("YEA_PAY_NUM009",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM009").toString());
				data.put("YEA_PAY_NUM010",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM010").toString());
				data.put("YEA_PAY_NUM011",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM011").toString());
				data.put("YEA_PAY_NUM012",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM012").toString());
				data.put("YEA_PAY_NUM026",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM026").toString());
				data.put("YEA_PAY_NUM013",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM013").toString());
				data.put("YEA_PAY_NUM014",DataSetUtil.getColumn(dataH, j, "YEA_PAY_NUM014").toString());
				data.put("YEA_PAY_SUM003",DataSetUtil.getColumn(dataH, j, "YEA_PAY_SUM003").toString());

				data.put("YEA_BFW_STR002_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR002_1").toString());
				data.put("YEA_BIZ_NO_1"    ,DataSetUtil.getColumn(dataH, j, "YEA_BIZ_NO_1").toString());
				data.put("YEA_BFW_STR003_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR003_1").toString());
				data.put("YEA_BFW_STR004_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR004_1").toString());
				data.put("YEA_BFW_STR005_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR005_1").toString());
				data.put("YEA_BFW_STR006_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR006_1").toString());
				data.put("YEA_BFW_NUM001_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM001_1").toString());
				data.put("YEA_BFW_NUM002_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM002_1").toString());
				data.put("YEA_BFW_NUM003_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM003_1").toString());
				data.put("YEA_BFW_NUM004_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM004_1").toString());
				data.put("YEA_BFW_NUM005_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM005_1").toString());
				data.put("YEA_BFW_NUM006_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM006_1").toString());
				data.put("YEA_BFW_SUM001_1",DataSetUtil.getColumn(dataH, j, "YEA_BFW_SUM001_1").toString());

				data.put("YEA_FORE_AMT1" ,DataSetUtil.getColumn(dataH, j, "YEA_FORE_AMT1").toString());
				data.put("YEA_NIGH_NTAX1",DataSetUtil.getColumn(dataH, j, "YEA_NIGH_NTAX1").toString());
				data.put("YEA_REAR_NTAX1",DataSetUtil.getColumn(dataH, j, "YEA_REAR_NTAX1").toString());
				data.put("YEA_NTAX_18_41",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_41").toString());
				data.put("YEA_NTAX_18_51",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_51").toString());
				data.put("YEA_NTAX_18_61",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_61").toString());
				data.put("YEA_NTAX_18_71",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_71").toString());

				data.put("YEA_NTAX_18_251" ,DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_251").toString());
				data.put("YEA_NTAX_19_1"   ,DataSetUtil.getColumn(dataH, j, "YEA_NTAX_19_1").toString());
				data.put("YEA_REDU_TOT1"   ,DataSetUtil.getColumn(dataH, j, "YEA_REDU_TOT1").toString());
				data.put("YEA_NTAX_TOT1"   ,DataSetUtil.getColumn(dataH, j, "YEA_NTAX_TOT1").toString());
				data.put("YEA_BFW_STR002_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR002_2").toString());
				data.put("YEA_BIZ_NO_2"    ,DataSetUtil.getColumn(dataH, j, "YEA_BIZ_NO_2").toString());
				data.put("YEA_BFW_STR003_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR003_2").toString());
				data.put("YEA_BFW_STR004_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR004_2").toString());
				data.put("YEA_BFW_STR005_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR005_2").toString());
				data.put("YEA_BFW_STR006_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR006_2").toString());
				data.put("YEA_BFW_NUM001_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM001_2").toString());
				data.put("YEA_BFW_NUM002_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM002_2").toString());
				data.put("YEA_BFW_NUM003_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM003_2").toString());
				data.put("YEA_BFW_NUM004_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM004_2").toString());
				data.put("YEA_BFW_NUM005_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM005_2").toString());
				data.put("YEA_BFW_NUM006_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM006_2").toString());
				data.put("YEA_BFW_SUM001_2",DataSetUtil.getColumn(dataH, j, "YEA_BFW_SUM001_2").toString());

				data.put("YEA_FORE_AMT2" ,DataSetUtil.getColumn(dataH, j, "YEA_FORE_AMT2").toString());
				data.put("YEA_NIGH_NTAX2",DataSetUtil.getColumn(dataH, j, "YEA_NIGH_NTAX2").toString());
				data.put("YEA_REAR_NTAX2",DataSetUtil.getColumn(dataH, j, "YEA_REAR_NTAX2").toString());
				data.put("YEA_NTAX_18_42",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_42").toString());
				data.put("YEA_NTAX_18_52",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_52").toString());
				data.put("YEA_NTAX_18_62",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_62").toString());
				data.put("YEA_NTAX_18_72",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_72").toString());

				data.put("YEA_NTAX_18_252",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_252").toString());

				data.put("YEA_NTAX_19_2",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_19_2").toString());
				data.put("YEA_REDU_TOT2",DataSetUtil.getColumn(dataH, j, "YEA_REDU_TOT2").toString());
				data.put("YEA_NTAX_TOT2",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_TOT2").toString());

				data.put("YEA_BFW_STR002_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR002_3").toString());
				data.put("YEA_BIZ_NO_3"    ,DataSetUtil.getColumn(dataH, j, "YEA_BIZ_NO_3").toString());
				data.put("YEA_BFW_STR003_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR003_3").toString());
				data.put("YEA_BFW_STR004_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR004_3").toString());
				data.put("YEA_BFW_STR005_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR005_3").toString());
				data.put("YEA_BFW_STR006_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_STR006_3").toString());
				data.put("YEA_BFW_NUM001_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM001_3").toString());
				data.put("YEA_BFW_NUM002_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM002_3").toString());
				data.put("YEA_BFW_NUM003_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM003_3").toString());
				data.put("YEA_BFW_NUM004_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM004_3").toString());
				data.put("YEA_BFW_NUM005_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM005_3").toString());
				data.put("YEA_BFW_NUM006_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_NUM006_3").toString());
				data.put("YEA_BFW_SUM001_3",DataSetUtil.getColumn(dataH, j, "YEA_BFW_SUM001_3").toString());

				data.put("YEA_FORE_AMT3" ,DataSetUtil.getColumn(dataH, j, "YEA_FORE_AMT3").toString());
				data.put("YEA_NIGH_NTAX3",DataSetUtil.getColumn(dataH, j, "YEA_NIGH_NTAX3").toString());
				data.put("YEA_REAR_NTAX3",DataSetUtil.getColumn(dataH, j, "YEA_REAR_NTAX3").toString());
				data.put("YEA_NTAX_18_43",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_43").toString());
				data.put("YEA_NTAX_18_53",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_53").toString());
				data.put("YEA_NTAX_18_63",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_63").toString());
				data.put("YEA_NTAX_18_73",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_73").toString());

				data.put("YEA_NTAX_18_253",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_18_253").toString());

				data.put("YEA_NTAX_19_3",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_19_3").toString());
				data.put("YEA_REDU_TOT3",DataSetUtil.getColumn(dataH, j, "YEA_REDU_TOT3").toString());
				data.put("YEA_NTAX_TOT3",DataSetUtil.getColumn(dataH, j, "YEA_NTAX_TOT3").toString());

				data.put("YEA_PRC_NUM083",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM083").toString());
				data.put("YEA_PRC_NUM084",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM084").toString());
				data.put("YEA_PRC_NUM085",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM085").toString());

				data.put("YEA_INCO_AMT1",DataSetUtil.getColumn(dataH, j, "YEA_INCO_AMT1").toString());
				data.put("YEA_JUMI_AMT1",DataSetUtil.getColumn(dataH, j, "YEA_JUMI_AMT1").toString());
				data.put("YEA_FARM_AMT1",DataSetUtil.getColumn(dataH, j, "YEA_FARM_AMT1").toString());
				data.put("YEA_INCO_AMT2",DataSetUtil.getColumn(dataH, j, "YEA_INCO_AMT2").toString());
				data.put("YEA_JUMI_AMT2",DataSetUtil.getColumn(dataH, j, "YEA_JUMI_AMT2").toString());
				data.put("YEA_FARM_AMT2",DataSetUtil.getColumn(dataH, j, "YEA_FARM_AMT2").toString());
				data.put("YEA_INCO_AMT3",DataSetUtil.getColumn(dataH, j, "YEA_INCO_AMT3").toString());
				data.put("YEA_JUMI_AMT3",DataSetUtil.getColumn(dataH, j, "YEA_JUMI_AMT3").toString());
				data.put("YEA_FARM_AMT3",DataSetUtil.getColumn(dataH, j, "YEA_FARM_AMT3").toString());

				data.put("YEA_PRC_NUM089",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM089").toString());
				data.put("YEA_PRC_NUM090",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM090").toString());
				data.put("YEA_PRC_NUM091",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM091").toString());
				data.put("YEA_PRC_NUM095",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM095").toString());
				data.put("YEA_PRC_NUM096",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM096").toString());
				data.put("YEA_PRC_NUM097",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM097").toString());
				data.put("YEA_PRC_NUM092",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM092").toString());
				data.put("YEA_PRC_NUM093",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM093").toString());
				data.put("YEA_PRC_NUM094",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM094").toString());
				data.put("YEA_PRC_NUM001",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM001").toString());
				data.put("YEA_PRC_NUM002",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM002").toString());
				data.put("YEA_PRC_NUM003",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM003").toString());
				data.put("YEA_PRC_NUM004",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM004").toString());
				data.put("YEA_PRC_NUM005",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM005").toString());
				data.put("YEA_PRC_NUM006",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM006").toString());
				data.put("YEA_PRC_NUM007",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM007").toString());
				data.put("YEA_PRC_NUM008",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM008").toString());
				data.put("YEA_PRC_NUM009",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM009").toString());
				data.put("YEA_PRC_NUM010",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM010").toString());
				data.put("YEA_PRC_NUM011",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM011").toString());
				data.put("YEA_PRC_NUM012",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM012").toString());
				data.put("YEA_PRC_NUM013",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM013").toString());
				data.put("YEA_PRC_NUM014",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM014").toString());
				data.put("YEA_PRC_NUM015",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM015").toString());
				data.put("YEA_PRC_NUM016",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM016").toString());
				data.put("YEA_PRC_NUM017",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM017").toString());
				data.put("YEA_PRC_NUM018",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM018").toString());
				data.put("YEA_PRC_NUM019",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM019").toString());
				data.put("YEA_PRC_NUM020",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM020").toString());
				data.put("YEA_PRC_NUM021",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM021").toString());
				data.put("YEA_PRC_NUM022",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM022").toString());
				data.put("YEA_PRC_NUM023",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM023").toString());
				data.put("YEA_PRC_NUM024",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM024").toString());
				data.put("YEA_PRC_NUM025",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM025").toString());
				data.put("YEA_PRC_NUM026",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM026").toString());
				data.put("YEA_PRC_NUM027",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM027").toString());
				data.put("YEA_PRC_NUM104",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM104").toString());
				data.put("YEA_PRC_NUM105",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM105").toString());
				data.put("YEA_PRC_NUM106",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM106").toString());
				data.put("YEA_PRC_NUM107",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM107").toString());
				data.put("YEA_PRC_NUM028",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM028").toString());
				data.put("YEA_PRC_NUM029",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM029").toString());
				data.put("YEA_PRC_NUM030",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM030").toString());
				data.put("YEA_PRC_NUM031",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM031").toString());
				data.put("YEA_PRC_NUM032",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM032").toString());
				data.put("YEA_PRC_NUM033",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM033").toString());
				data.put("YEA_PRC_NUM034",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM034").toString());
				data.put("YEA_PRC_NUM035",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM035").toString());
				data.put("YEA_PRC_NUM036",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM036").toString());
				data.put("YEA_PRC_NUM037",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM037").toString());
				data.put("YEA_PRC_NUM038",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM038").toString());
				data.put("YEA_PRC_NUM040",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM040").toString());
				data.put("YEA_PRC_NUM041",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM041").toString());
				data.put("YEA_PRC_NUM042",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM042").toString());
				data.put("YEA_PRC_NUM043",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM043").toString());
				data.put("YEA_PRC_NUM044",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM044").toString());
				data.put("YEA_PRC_NUM045",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM045").toString());
				data.put("YEA_PRC_NUM046",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM046").toString());
				data.put("YEA_PRC_NUM047",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM047").toString());
				data.put("YEA_PRC_NUM048",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM048").toString());
				data.put("YEA_PRC_NUM049",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM049").toString());
				data.put("YEA_PRC_NUM050",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM050").toString());
				data.put("YEA_PRC_NUM051",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM051").toString());
				data.put("YEA_PRC_NUM052",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM052").toString());
				data.put("YEA_PRC_NUM053",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM053").toString());
				data.put("YEA_PRC_NUM054",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM054").toString());
				data.put("YEA_PRC_NUM055",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM055").toString());
				data.put("YEA_PRC_NUM056",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM056").toString());
				data.put("YEA_PRC_NUM057",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM057").toString());
				data.put("YEA_PRC_NUM058",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM058").toString());
				data.put("YEA_PRC_NUM059",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM059").toString());
				data.put("YEA_PRC_NUM060",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM060").toString());
				data.put("YEA_PRC_NUM061",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM061").toString());
				data.put("YEA_PRC_NUM062",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM062").toString());
				data.put("YEA_PRC_NUM063",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM063").toString());
				data.put("YEA_PRC_NUM064",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM064").toString());
				data.put("YEA_PRC_NUM065",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM065").toString());
				data.put("YEA_PRC_NUM066",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM066").toString());
				data.put("YEA_PRC_NUM067",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM067").toString());
				data.put("YEA_PRC_NUM068",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM068").toString());
				data.put("YEA_PRC_NUM069",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM069").toString());
				data.put("YEA_PRC_NUM070",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM070").toString());
				data.put("YEA_PRC_NUM071",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM071").toString());
				data.put("YEA_PRC_NUM072",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM072").toString());
				data.put("YEA_PRC_NUM039",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM039").toString());
				data.put("YEA_PRC_NUM108",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM108").toString());
				data.put("YEA_PRC_NUM073",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM073").toString());
				data.put("YEA_PRC_NUM074",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM074").toString());
				data.put("YEA_PRC_NUM109",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM109").toString());
				data.put("YEA_PRC_NUM110",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM110").toString());
				data.put("YEA_PRC_NUM075",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM075").toString());
				data.put("YEA_PRC_NUM076",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM076").toString());
				data.put("YEA_PRC_NUM077",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM077").toString());
				data.put("YEA_PRC_NUM078",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM078").toString());
				data.put("YEA_PRC_NUM079",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM079").toString());
				data.put("YEA_PRC_NUM080",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM080").toString());
				data.put("YEA_PRC_NUM081",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM081").toString());
				data.put("YEA_PRC_NUM082",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM082").toString());
				data.put("YEA_FAM_CNT001",DataSetUtil.getColumn(dataH, j, "YEA_FAM_CNT001").toString());
				data.put("YEA_FAM_CNT002",DataSetUtil.getColumn(dataH, j, "YEA_FAM_CNT002").toString());
				data.put("YEA_FAM_CNT003",DataSetUtil.getColumn(dataH, j, "YEA_FAM_CNT003").toString());
				data.put("YEA_FAM_CNT004",DataSetUtil.getColumn(dataH, j, "YEA_FAM_CNT004").toString());
				data.put("YEA_FAM_CNT005",DataSetUtil.getColumn(dataH, j, "YEA_FAM_CNT005").toString());
				data.put("YEA_FAM_SUM001",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM001").toString());
				data.put("YEA_FAM_SUM002",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM002").toString());
				data.put("YEA_FAM_SUM003",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM003").toString());
				data.put("YEA_FAM_SUM004",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM004").toString());
				data.put("YEA_FAM_SUM005",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM005").toString());
				data.put("YEA_FAM_SUM006",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM006").toString());
				data.put("YEA_FAM_SUM007",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM007").toString());
				data.put("YEA_FAM_SUM008",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM008").toString());
				data.put("YEA_FAM_SUM009",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM009").toString());
				data.put("YEA_FAM_SUM010",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM010").toString());
				data.put("YEA_FAM_SUM011",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM011").toString());
				data.put("YEA_FAM_SUM012",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM012").toString());
				data.put("YEA_FAM_SUM013",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM013").toString());
				data.put("YEA_FAM_SUM014",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM014").toString());
				data.put("YEA_FAM_SUM015",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM015").toString());
				data.put("YEA_FAM_SUM016",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM016").toString());
				data.put("YEA_FAM_SUM017",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM017").toString());
				data.put("YEA_FAM_SUM018",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM018").toString());
				data.put("YEA_FAM_SUM019",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM019").toString());
				data.put("YEA_FAM_CNT011",DataSetUtil.getColumn(dataH, j, "YEA_FAM_CNT011").toString());
				data.put("YEA_FAM_CNT012",DataSetUtil.getColumn(dataH, j, "YEA_FAM_CNT012").toString());
				data.put("YEA_FAM_SUM020",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM020").toString());
				data.put("YEA_FAM_SUM021",DataSetUtil.getColumn(dataH, j, "YEA_FAM_SUM021").toString());
				data.put("YEA_PRC_NUM098",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM098").toString());
				data.put("YEA_PRC_NUM099",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM099").toString());
				data.put("YEA_PRC_NUM100",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM100").toString());
				data.put("YEA_PRC_NUM101",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM101").toString());
				data.put("YEA_PRC_NUM102",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM102").toString());
				data.put("YEA_PRC_NUM103",DataSetUtil.getColumn(dataH, j, "YEA_PRC_NUM103").toString());
				data.put("YEA_PAY_SUM022",DataSetUtil.getColumn(dataH, j, "YEA_PAY_SUM022").toString());
				data.put("YEA_PAY_SUM021",DataSetUtil.getColumn(dataH, j, "YEA_PAY_SUM021").toString());
				data.put("YEA_PAY_SUM023",DataSetUtil.getColumn(dataH, j, "YEA_PAY_SUM023").toString());
				
				colListH.add(data);

			}			
			
			dataD = dao.processPRINT11(rowVo);
			
			for(int j = 0 ; j < DataSetUtil.getRowCount(dataD) ; j ++){
				Map<String, Object> data = new HashMap();
				
				data.put("YEA_EMP_NO"    ,DataSetUtil.getColumn(dataD, j, "YEA_EMP_NO").toString());
				data.put("YEA_FAM_STR001",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR001").toString());
				data.put("YEA_FAM_STR002",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR002").toString());
				data.put("YEA_FAM_STR003",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR003").toString());
				data.put("YEA_FAM_STR004",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR004").toString());
				data.put("YEA_FAM_STR005",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR005").toString());
				data.put("YEA_FAM_STR007",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR007").toString());
				data.put("YEA_FAM_STR008",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR008").toString());
				data.put("YEA_FAM_STR006",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR006").toString());
				data.put("YEA_FAM_STR011",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR011").toString());
				data.put("YEA_FAM_STR012",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR012").toString());
				data.put("YEA_FAM_STR009",DataSetUtil.getColumn(dataD, j, "YEA_FAM_STR009").toString());
				data.put("YEA_FAM_NUM001",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM001").toString());
				data.put("YEA_FAM_NUM002",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM002").toString());
				data.put("YEA_FAM_NUM003",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM003").toString());
				data.put("YEA_FAM_NUM004",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM004").toString());
				data.put("YEA_FAM_NUM020",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM020").toString());
				data.put("YEA_FAM_NUM021",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM021").toString());
				data.put("YEA_FAM_NUM005",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM005").toString());
				data.put("YEA_FAM_NUM006",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM006").toString());
				data.put("YEA_FAM_NUM007",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM007").toString());
				data.put("YEA_FAM_NUM008",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM008").toString());
				data.put("YEA_FAM_NUM009",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM009").toString());
				data.put("YEA_FAM_NUM010",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM010").toString());
				data.put("YEA_FAM_NUM011",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM011").toString());
				data.put("YEA_FAM_NUM012",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM012").toString());
				data.put("YEA_FAM_NUM013",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM013").toString());
				data.put("YEA_FAM_NUM014",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM014").toString());
				data.put("YEA_FAM_NUM015",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM015").toString());
				data.put("YEA_FAM_NUM016",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM016").toString());
				data.put("YEA_FAM_NUM017",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM017").toString());
				data.put("YEA_FAM_NUM018",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM018").toString());
				data.put("YEA_FAM_NUM019",DataSetUtil.getColumn(dataD, j, "YEA_FAM_NUM019").toString());
				
				colListD.add(data);
			}
		}
        
        returnMap.put("dsYEA_YEPROC_RPT1", colListH);
        returnMap.put("dsYEA_YEPROC_RPT2", colListD);        
		
		return returnMap;

    }

	/**
	 * 기부금명세서를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processREPORT02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		returnMap.put("dsYEA_INCDEC_RPT1", dao.processPRINT01(searchVo)); //소득공제신고서Header
		returnMap.put("dsYEA_DONASP_RPT1", dao.processPRINT05(searchVo)); //기부금명세서
		returnMap.put("dsYEA_DONASP_RPT2", dao.processPRINT06(searchVo)); //구분코드별 기부금의 합계
		returnMap.put("dsYEA_DONAAD_RPT" , dao.processPRINT07(searchVo)); //기부금조정명세
		
		return returnMap;

    }

	/**
	 * 의료비명세서를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processREPORT03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		returnMap.put("dsYEA_INCDEC_RPT1", dao.processPRINT01(searchVo)); //소득공제신고서Header
		returnMap.put("dsYEA_MEDISP_RPT" , dao.processPRINT04(searchVo)); //의료비명세서		
		
		return returnMap;

    }

	/**
	 * 원천징수영수부를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processREPORT04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		//returnMap.put("dsYEA_PAYDTL_RPT1", dao.processPRINT08(searchVo)); //근로소득원천징수부출력1
		//returnMap.put("dsYEA_PAYDTL_RPT2", dao.processPRINT09(searchVo)); //근로소득원천징수부출력2
				
		Map rowVo = null;
		int rowType = 0;
		
		List dsYEA_MASTXM = (List) searchVo.get("dsYEA_MASTXM_ARG");  
		List<Map<String, Object>> colListH = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> colListD = new ArrayList<Map<String,Object>>();
		
        for (int i = 0; i < dsYEA_MASTXM.size(); i++) {
			rowVo = (Map) dsYEA_MASTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			
			Object dataH = new HashMap();
			Object dataD = new HashMap();
			
			dataH = dao.processPRINT08(rowVo);
			
			for(int j = 0 ; j < DataSetUtil.getRowCount(dataH) ; j ++){
				Map<String, Object> data = new HashMap();
				
				data.put("YEA_STD_YY"      ,DataSetUtil.getColumn(dataH, j, "YEA_STD_YY").toString());
				data.put("YEA_EMP_NO"      ,DataSetUtil.getColumn(dataH, j, "YEA_EMP_NO").toString());
				data.put("SIGN_IMGE"       ,DataSetUtil.getColumn(dataH, j, "SIGN_IMGE").toString());
				data.put("YEA_BRANCH_NM"   ,DataSetUtil.getColumn(dataH, j, "YEA_BRANCH_NM").toString());
				data.put("YEA_BIZ_NO"      ,DataSetUtil.getColumn(dataH, j, "YEA_BIZ_NO").toString());
				data.put("YEA_EMP_NM"      ,DataSetUtil.getColumn(dataH, j, "YEA_EMP_NM").toString());
				data.put("YEA_EMP_SSN"     ,DataSetUtil.getColumn(dataH, j, "YEA_EMP_SSN").toString());
				data.put("YEA_FAMI_CNT"    ,DataSetUtil.getColumn(dataH, j, "YEA_FAMI_CNT").toString());
				data.put("YEA_CORP_MASTER" ,DataSetUtil.getColumn(dataH, j, "YEA_CORP_MASTER").toString());
				data.put("YEA_ADDRESS"     ,DataSetUtil.getColumn(dataH, j, "YEA_ADDRESS").toString());
				data.put("YEA_HIRE_YMD"    ,DataSetUtil.getColumn(dataH, j, "YEA_HIRE_YMD").toString());
				data.put("YEA_QUIT_YMD"    ,DataSetUtil.getColumn(dataH, j, "YEA_QUIT_YMD").toString());
				data.put("YEA_LOFO_CD"     ,DataSetUtil.getColumn(dataH, j, "YEA_LOFO_CD").toString());
				data.put("YEA_NATION_NM"   ,DataSetUtil.getColumn(dataH, j, "YEA_NATION_NM").toString());
				data.put("YEA_NATION_CD"   ,DataSetUtil.getColumn(dataH, j, "YEA_NATION_CD").toString());
				data.put("YEA_CHILD_CNT"   ,DataSetUtil.getColumn(dataH, j, "YEA_CHILD_CNT").toString());
				data.put("YEA_EXEMPT_CD"   ,DataSetUtil.getColumn(dataH, j, "YEA_EXEMPT_CD").toString());
				data.put("YEA_EXEMPT_RULE" ,DataSetUtil.getColumn(dataH, j, "YEA_EXEMPT_RULE").toString());
				data.put("YEA_EXEMPT_SDATE",DataSetUtil.getColumn(dataH, j, "YEA_EXEMPT_SDATE").toString());
				data.put("YEA_EXEMPT_EDATE",DataSetUtil.getColumn(dataH, j, "YEA_EXEMPT_EDATE").toString());
				
				colListH.add(data);
			}
			
			dataD = dao.processPRINT09(rowVo);
			
			for(int j = 0 ; j < DataSetUtil.getRowCount(dataD) ; j ++){
				Map<String, Object> data = new HashMap();
				
				data.put("YEA_EMP_NO"    ,DataSetUtil.getColumn(dataD, j, "YEA_EMP_NO").toString());
				data.put("YEA_PAY_YYMM"  ,DataSetUtil.getColumn(dataD, j, "YEA_PAY_YYMM").toString());
				data.put("YEA_PAY_SUM001",DataSetUtil.getColumn(dataD, j, "YEA_PAY_SUM001").toString());
				data.put("YEA_PAY_NUM003",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM003").toString());
				data.put("YEA_PAY_NUM004",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM004").toString());
				data.put("YEA_PAY_NUM005",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM005").toString());
				data.put("YEA_PAY_NUM006",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM006").toString());
				data.put("YEA_PAY_NUM007",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM007").toString());
				data.put("YEA_PAY_SUM002",DataSetUtil.getColumn(dataD, j, "YEA_PAY_SUM002").toString());
				data.put("YEA_PAY_NUM015",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM015").toString());
				data.put("YEA_PAY_STR001",DataSetUtil.getColumn(dataD, j, "YEA_PAY_STR001").toString());
				data.put("YEA_PAY_NUM008",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM008").toString());
				data.put("YEA_PAY_NUM009",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM009").toString());
				data.put("YEA_PAY_NUM010",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM010").toString());
				data.put("YEA_PAY_NUM011",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM011").toString());
				data.put("YEA_PAY_NUM012",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM012").toString());
				data.put("YEA_PAY_NUM013",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM013").toString());
				data.put("YEA_PAY_SUM003",DataSetUtil.getColumn(dataD, j, "YEA_PAY_SUM003").toString());
				data.put("YEA_PAY_NUM014",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM014").toString());
				data.put("YEA_PAY_NUM016",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM016").toString());
				data.put("YEA_PAY_NUM017",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM017").toString());
				data.put("YEA_PAY_NUM018",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM018").toString());
				data.put("YEA_PAY_NUM019",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM019").toString());
				data.put("YEA_PAY_NUM020",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM020").toString());
				data.put("YEA_PAY_NUM021",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM021").toString());
				data.put("YEA_PAY_NUM022",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM022").toString());
				data.put("YEA_PAY_NUM023",DataSetUtil.getColumn(dataD, j, "YEA_PAY_NUM023").toString());
				data.put("YEA_PAY_SUM004",DataSetUtil.getColumn(dataD, j, "YEA_PAY_SUM004").toString());
				data.put("YEA_PAY_STR002",DataSetUtil.getColumn(dataD, j, "YEA_PAY_STR002").toString());
				
				colListD.add(data);
			}
				
		}
        
        returnMap.put("dsYEA_PAYDTL_RPT1", colListH);
        returnMap.put("dsYEA_PAYDTL_RPT2", colListD);
        
		return returnMap;

    }

	/**
	 * YEAA0070_2016 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{
		 
		int iTotCnt = 0; 
		int updateCount = 0;
		int deleteCount = 0;
		
		Map rowVo = null;
		int rowType = 0;

		List dsYEA_YEFAMI          = (List) saveData.get("dsYEA_YEFAMI");              
		List dsYEA_PAYDTL          = (List) saveData.get("dsYEA_PAYDTL");            
		List dsYEA_BFWORK          = (List) saveData.get("dsYEA_BFWORK");            
		List dsYEA_BFNTAX          = (List) saveData.get("dsYEA_BFNTAX");            
		List dsYEA_INCDEC          = (List) saveData.get("dsYEA_INCDEC");            		
		List dsYEA_MEDISP          = (List) saveData.get("dsYEA_MEDISP");            
		List dsYEA_DONASP          = (List) saveData.get("dsYEA_DONASP");            
		List dsYEA_PENSAV1         = (List) saveData.get("dsYEA_PENSAV1");           
		List dsYEA_PENSAV2         = (List) saveData.get("dsYEA_PENSAV2");           
		List dsYEA_PENSAV3         = (List) saveData.get("dsYEA_PENSAV3");           
		List dsYEA_PENSAV4         = (List) saveData.get("dsYEA_PENSAV4");            
		List dsYEA_RENTA1          = (List) saveData.get("dsYEA_RENTA1");            
		List dsYEA_RENTA2          = (List) saveData.get("dsYEA_RENTA2");            
		List dsYEA_DONAAD          = (List) saveData.get("dsYEA_DONAAD");            

		List dsYEA_YEFAMI_DELETE          = (List) saveData.get("dsYEA_YEFAMI_DELETE");              
		//List dsYEA_PAYDTL_DELETE          = (List) saveData.get("dsYEA_PAYDTL_DELETE");            
		List dsYEA_BFWORK_DELETE          = (List) saveData.get("dsYEA_BFWORK_DELETE");            
		List dsYEA_BFNTAX_DELETE          = (List) saveData.get("dsYEA_BFNTAX_DELETE");            
		//List dsYEA_INCDEC_DELETE          = (List) saveData.get("dsYEA_INCDEC_DELETE");            		
		List dsYEA_MEDISP_DELETE          = (List) saveData.get("dsYEA_MEDISP_DELETE");            
		List dsYEA_DONASP_DELETE          = (List) saveData.get("dsYEA_DONASP_DELETE");            
		List dsYEA_PENSAV1_DELETE         = (List) saveData.get("dsYEA_PENSAV1_DELETE");           
		List dsYEA_PENSAV2_DELETE         = (List) saveData.get("dsYEA_PENSAV2_DELETE");           
		List dsYEA_PENSAV3_DELETE         = (List) saveData.get("dsYEA_PENSAV3_DELETE");           
		List dsYEA_PENSAV4_DELETE         = (List) saveData.get("dsYEA_PENSAV4_DELETE");            
		List dsYEA_RENTA1_DELETE          = (List) saveData.get("dsYEA_RENTA1_DELETE");            
		List dsYEA_RENTA2_DELETE          = (List) saveData.get("dsYEA_RENTA2_DELETE");           		
		List dsYEA_DONAAD_DELETE          = (List) saveData.get("dsYEA_DONAAD_DELETE");     
		
		//기부금조정명세서 삭제		
        for (int i = 0; i < dsYEA_DONAAD_DELETE.size(); i++) {
			rowVo = (Map) dsYEA_DONAAD_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
       	
			logger.info("Delete : "+ rowVo);
			deleteCount += dao.processDELETE08(rowVo);
		}
       
		//의료비명세서 삭제		
        for (int i = 0; i < dsYEA_MEDISP_DELETE.size(); i++) {
			rowVo = (Map) dsYEA_MEDISP_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
			logger.info("Delete : "+ rowVo);
			deleteCount += dao.processDELETE04(rowVo);
			dao.processPROC10(rowVo);//가족사항, 소득공제 후처리
		}
		
        //기부금명세서 삭제		
        for (int i = 0; i < dsYEA_DONASP_DELETE.size(); i++) {
			rowVo = (Map) dsYEA_DONASP_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
       	
			logger.info("Delete : "+ rowVo);
			deleteCount += dao.processDELETE05(rowVo);
			dao.processPROC06(rowVo);//가족사항, 소득공제 후처리
		}
        
        //연금저축명세서 삭제		
        for (int i = 0; i < dsYEA_PENSAV1_DELETE.size(); i++) {
 			rowVo = (Map) dsYEA_PENSAV1_DELETE.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType != 3) continue;
        	
 			logger.info("Delete : "+ rowVo);
 			deleteCount += dao.processDELETE07(rowVo);
 		}
        
        //연금저축명세서 삭제		
        for (int i = 0; i < dsYEA_PENSAV2_DELETE.size(); i++) {
 			rowVo = (Map) dsYEA_PENSAV2_DELETE.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType != 3) continue;
        	
 			logger.info("Delete : "+ rowVo);
 			deleteCount += dao.processDELETE07(rowVo);
 		}
        
        //연금저축명세서 삭제		
        for (int i = 0; i < dsYEA_PENSAV3_DELETE.size(); i++) {
 			rowVo = (Map) dsYEA_PENSAV3_DELETE.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType != 3) continue;
        	
 			logger.info("Delete : "+ rowVo);
 			deleteCount += dao.processDELETE07(rowVo);
 		}
        
        //장기집합투자증권저축 삭제		
        for (int i = 0; i < dsYEA_PENSAV4_DELETE.size(); i++) {
 			rowVo = (Map) dsYEA_PENSAV4_DELETE.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType != 3) continue;
        	
 			logger.info("Delete : "+ rowVo);
 			deleteCount += dao.processDELETE07(rowVo);
 		}
        
        //[2013귀속] 추가 - 월세주택임차차입금1 삭제		
        for (int i = 0; i < dsYEA_RENTA1_DELETE.size(); i++) {
 			rowVo = (Map) dsYEA_RENTA1_DELETE.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType != 3) continue;

 			logger.info("Delete : "+ rowVo);
 			deleteCount += dao.processDELETE10(rowVo);
        }

        //[2013귀속] 추가 - 월세주택임차차입금2 삭제	
        for (int i = 0; i < dsYEA_RENTA2_DELETE.size(); i++) {
 			rowVo = (Map) dsYEA_RENTA2_DELETE.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType != 3) continue;

 			logger.info("Delete : "+ rowVo);
 			deleteCount += dao.processDELETE11(rowVo);
        }
        
 		//연말정산 가족사항삭제		
        for (int i = 0; i < dsYEA_YEFAMI_DELETE.size(); i++) {
 			rowVo = (Map) dsYEA_YEFAMI_DELETE.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType != 3) continue;
        	
 			logger.info("Delete : "+ rowVo);
 			deleteCount += dao.processDELETE01(rowVo);
 			dao.processPROC06(rowVo);//가족사항, 소득공제 후처리
 		}
        
        //종근무지비과세삭제		
        for (int i = 0; i < dsYEA_BFNTAX_DELETE.size(); i++) {
 			rowVo = (Map) dsYEA_BFNTAX_DELETE.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType != 3) continue;
        	
 			logger.info("Delete : "+ rowVo);
 			deleteCount += dao.processDELETE03(rowVo);
 		}
        
        //종근무지삭제		
        for (int i = 0; i < dsYEA_BFWORK_DELETE.size(); i++) {
 			rowVo = (Map) dsYEA_BFWORK_DELETE.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType != 3) continue;
        	
 			logger.info("Delete : "+ rowVo);
 			deleteCount += dao.processDELETE02(rowVo);
 		}
        
        //가족사항 저장
 		for (int i = 0; i < dsYEA_YEFAMI.size(); i++) {
 			rowVo = (Map) dsYEA_YEFAMI.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");
 				
 			if (rowType == 3) continue;
 			logger.info("SAVE/UPDATE : " + rowVo);
        	
 			if (rowType == 1) {
 				dao.processSAVE00(rowVo);
 			} else if (rowType == 2) {
 				updateCount += dao.processUPDATE00(rowVo);
 			}
 		}
 		
 		//근로소득지급명세 저장
 		for (int i = 0; i < dsYEA_PAYDTL.size(); i++) {
 			rowVo = (Map) dsYEA_PAYDTL.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType == 3) continue;

 			logger.info("SAVE/UPDATE : " + rowVo);
        	
 			updateCount += dao.processUPDATE01(rowVo);
 			
 		}
 		
 		//종근무지 저장
 		for (int i = 0; i < dsYEA_BFWORK.size(); i++) {
 			rowVo = (Map) dsYEA_BFWORK.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType == 3) continue;

 			logger.info("SAVE/UPDATE : " + rowVo);
        	
 			if (rowType == 1) {
 				dao.processSAVE01(rowVo);
 			} else if (rowType == 2) {
 				updateCount += dao.processUPDATE02(rowVo);
 			}			
 		}
 		
 		//종근무지비과세 저장
 		for (int i = 0; i < dsYEA_BFNTAX.size(); i++) {
 			rowVo = (Map) dsYEA_BFNTAX.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType == 3) continue;

 			logger.info("SAVE/UPDATE : " + rowVo);
        	
 			if (rowType == 1) {
 				dao.processSAVE02(rowVo);
 			} else if (rowType == 2) {
 				updateCount += dao.processUPDATE04(rowVo);
 			}
 		}
 		
 		//소득공제신고 저장
 		for (int i = 0; i < dsYEA_INCDEC.size(); i++) {
 			rowVo = (Map) dsYEA_INCDEC.get(i);
 			rowType = (Integer) rowVo.get("ROW_TYPE");

 			if (rowType == 3) continue;

 			logger.info("SAVE/UPDATE : " + rowVo);
 			updateCount += dao.processUPDATE03(rowVo);
 		}		
		
		//의료비명세서 저장
		for (int i = 0; i < dsYEA_MEDISP.size(); i++) {
			rowVo = (Map) dsYEA_MEDISP.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			logger.info("SAVE/UPDATE : " + rowVo);
       	
			if (rowType == 1) {
				dao.processSAVE03(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE05(rowVo);
			}
		}
		
		//기부금명세서 저장
		for (int i = 0; i < dsYEA_DONASP.size(); i++) {
			rowVo = (Map) dsYEA_DONASP.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			logger.info("SAVE/UPDATE : " + rowVo);
       	
			if (rowType == 1) {
				dao.processSAVE04(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE06(rowVo);
			}			
			dao.processPROC06(rowVo);//가족사항, 소득공제 후처리
		}
		
		//연금저축명세서 저장
		for (int i = 0; i < dsYEA_PENSAV1.size(); i++) {
			rowVo = (Map) dsYEA_PENSAV1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			logger.info("SAVE/UPDATE : " + rowVo);
			if (rowType == 1) {
				dao.processSAVE05(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE07(rowVo);
			}			
		}
		
		for (int i = 0; i < dsYEA_PENSAV2.size(); i++) {
			rowVo = (Map) dsYEA_PENSAV2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			logger.info("SAVE/UPDATE : " + rowVo);
       	
			if (rowType == 1) {
				dao.processSAVE05(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE07(rowVo);
			}			
		}
		
		for (int i = 0; i < dsYEA_PENSAV3.size(); i++) {
			rowVo = (Map) dsYEA_PENSAV3.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			logger.info("SAVE/UPDATE : " + rowVo);
       	
			if (rowType == 1) {
				dao.processSAVE05(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE07(rowVo);
			}			
		}
		
		for (int i = 0; i < dsYEA_PENSAV4.size(); i++) {
			rowVo = (Map) dsYEA_PENSAV4.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			logger.info("SAVE/UPDATE : " + rowVo);
       	
			if (rowType == 1) {
				dao.processSAVE05(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE07(rowVo);
			}			
		}
		
        //[2013귀속] 추가 - 월세주택임차차입금1 저장
		for (int i = 0; i < dsYEA_RENTA1.size(); i++) {
			rowVo = (Map) dsYEA_RENTA1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			logger.info("SAVE/UPDATE : " + rowVo);
       	
			if (rowType == 1) {
				dao.processSAVE10(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE09(rowVo);
			}
		}
		
		//[2013귀속] 추가 - 월세주택임차차입금2 저장
		for (int i = 0; i < dsYEA_RENTA2.size(); i++) {
			rowVo = (Map) dsYEA_RENTA2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			logger.info("SAVE/UPDATE : " + rowVo);
       	
			if (rowType == 1) {
				dao.processSAVE11(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE10(rowVo);
			}
		}
		
		//기부금조정명세서 저장
		for (int i = 0; i < dsYEA_DONAAD.size(); i++) {
			rowVo = (Map) dsYEA_DONAAD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			logger.info("SAVE/UPDATE : " + rowVo);
       	
			if (rowType == 1) {
				dao.processSAVE06(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE08(rowVo);
			}			
		}

		//DATA 정합성작업
		//dao.processPROC99(searchVo);
		
		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);
		
		return deleteCount + updateCount;

	}
	
	/**
	 * 연말정산처리  부양가족 처리
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC00(Map saveData) throws Exception {
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 
		 //가족사항처리
		 List dsYEA_MASTXM = (List) saveData.get("dsYEA_MASTXM");              
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsYEA_MASTXM.size(); i++) {
			rowVo = (Map) dsYEA_MASTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			logger.info("SAVE/UPDATE : " + rowVo);        	
			dao.processPROC00(rowVo);
			
		}

		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;
	}	
	
	/**
	 * 연말정산처리  근로소득 처리
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC01(Map saveData) throws Exception {
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 
		 //가족사항처리
		 List dsYEA_MASTXM = (List) saveData.get("dsYEA_MASTXM");              
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsYEA_MASTXM.size(); i++) {
			rowVo = (Map) dsYEA_MASTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			logger.info("SAVE/UPDATE : " + rowVo);        	
			dao.processPROC01(rowVo);
			
		}

		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;
	}	

	/**
	 * 연말정산처리 연말정산 처리한다.
	 * @param argDoc - 저장, 수정, 삭제할 데이터가 담긴 Document 객체
	 * @return 처리 건수(해당 DBMS가 지원할 경우)
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC02(Map saveData) throws Exception {

		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;	
		
		//연말정산 처리 
		List dsYEA_MASTXM = (List) saveData.get("dsYEA_MASTXM");              
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsYEA_MASTXM.size(); i++) {
			rowVo = (Map) dsYEA_MASTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			//rowVo.put("PROC_GUBN", searchVo.get("PROC_GUBN"));
			logger.info("SAVE/UPDATE : " + rowVo);
			
			dao.processPROC02(rowVo);
			
		}

		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;
	}

	/**
	 * 연말정산처리 입력마감 처리한다.
	 * @param argDoc - 저장, 수정, 삭제할 데이터가 담긴 Document 객체
	 * @return 처리 건수(해당 DBMS가 지원할 경우)
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC03(Map saveData) throws Exception {

		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;	
		
		//입력마감 처리  
		List dsYEA_MASTXM = (List) saveData.get("dsYEA_MASTXM");              
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsYEA_MASTXM.size(); i++) {
			rowVo = (Map) dsYEA_MASTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			//rowVo.put("PROC_GUBN", searchVo.get("PROC_GUBN"));
			logger.info("SAVE/UPDATE : " + rowVo);
			
			dao.processPROC03(rowVo);
			dao.processPROC06(rowVo);//가족사항, 소득공제 후처리
			
		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsYEA_MASTXM.size(); i++) {
			rowVo = (Map) dsYEA_MASTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			logger.info("SAVE/UPDATE : " + rowVo);
			
			dao.processPROC02(rowVo);
			
		}
		
		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;
	}	

	/**
	 * 연말정산처리 확정 처리한다.
	 * @param argDoc - 저장, 수정, 삭제할 데이터가 담긴 Document 객체
	 * @return 처리 건수(해당 DBMS가 지원할 경우)
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC04(Map saveData) throws Exception {

		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;	
		
		//확정처리 
		List dsYEA_MASTXM = (List) saveData.get("dsYEA_MASTXM");              
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsYEA_MASTXM.size(); i++) {
			rowVo = (Map) dsYEA_MASTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
			
			//rowVo.put("YCAL_GUBN", searchVo.get("YCAL_GUBN"));

			logger.info("SAVE/UPDATE : " + rowVo);
			
			dao.processPROC04(rowVo);
		}

		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;
	}

	/**
	 * 연말정산처리 PDF자료업로드 처리한다.
	 * @param argDoc - 저장, 수정, 삭제할 데이터가 담긴 Document 객체
	 * @return 처리 건수(해당 DBMS가 지원할 경우)
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC07(Map saveData) throws Exception {
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;	

		//PDF업로드
		String sAB_FILE_PATH = "";	//파일이 저장된 경로
		String sCR_FILE_PATH = "";	//인증파일이 저장된 경로
		String sYEA_INC_STR047 = "";	//PDF파일 패스워드
		String sYEA_INC_STR048 = "";	//PDF파일 물리파일명
		String sYEA_INC_STR049 = "";	//PDF파일 파일경로
		String sYEA_INC_STR050 = "";	//PDF파일 논리파일명
		String sYEA_EMP_NO = "";		//사원번호
		String sYEA_STD_YY = "";		//정산년월

		List dsYEA_INCDEC = (List) saveData.get("dsYEA_INCDEC");            		

		//소득공제신고 저장
		if (dsYEA_INCDEC.size() > 0) {
			rowVo = (Map) dsYEA_INCDEC.get(0);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			logger.info("SAVE/UPDATE : " + rowVo);		

			sYEA_STD_YY = (String) rowVo.get("YEA_STD_YY");
			sYEA_EMP_NO = (String) rowVo.get("YEA_EMP_NO");
			sYEA_INC_STR047 = (String) rowVo.get("YEA_INC_STR047");	//PDF파일 패스워드
			sYEA_INC_STR048 = (String) rowVo.get("YEA_INC_STR048");	//PDF파일 물리파일명
			sYEA_INC_STR049 = (String) rowVo.get("YEA_INC_STR049");	//PDF파일 파일경로
			sYEA_INC_STR050 = (String) rowVo.get("YEA_INC_STR050");	//PDF파일 논리파일명
			
		}	
		

		logger.info("#################################### Start PROC07 #################################### sYEA_INC_STR047 ::" +sYEA_INC_STR047);
		logger.info("Delete : "+ rowVo);
		deleteCount += dao.processDELETE09(rowVo);

		//sAB_FILE_PATH = CoreProperties.getProperty("CoreMIS.file.upload.path") + sYEA_INC_STR049; 
		//sCR_FILE_PATH = CoreProperties.getProperty("CoreMIS.pdf.certs.path"); 
		sAB_FILE_PATH = CoreProperties.getProperty("CoreERP.file.upload.path") + sYEA_INC_STR049; 
		sCR_FILE_PATH = CoreProperties.getProperty("CoreERP.pdf.certs.path");
		
		//logger.info("sAB_FILE_PATH file : "+ sAB_FILE_PATH);
		//logger.info("sCR_FILE_PATH pdf  : "+ sCR_FILE_PATH);

		File pdfFile = new File(sAB_FILE_PATH + File.separatorChar + sYEA_INC_STR048 );

		HashMap pdfDataMap = (HashMap) ComNTSPdfConverter.pdfToXmlVector(sYEA_INC_STR048, sAB_FILE_PATH, "", sYEA_INC_STR047, sCR_FILE_PATH);
		
		//logger.info("pdfDataMap : "+ pdfDataMap);

		//2015.05.11 시큐어코딩처리
		if (pdfDataMap != null) {
			Vector<Object> vtYEYSXM = (Vector<Object>) pdfDataMap.get("MASTER");    //"YEYSXM");	//YEA_YEYSOM
			Vector<Object> vtYEYSLS = (Vector<Object>) pdfDataMap.get("DTL_STR");   //"YEYSLS");	//YEA_YEYSOS
			Vector<Object> vtYEYSLN = (Vector<Object>) pdfDataMap.get("DTL_NUM");   //"YEYSLN");	//YEA_YEYSON

			int vSize = vtYEYSXM.size();
			Map<String, Object> dataMap = null;

			//마스터 테이블 저장
			for(int i = 0; i < vSize; i++) {
				/*HashMap<String, String> mapData  = (HashMap<String, String>) vtYEYSXM.elementAt(i);
				dataMap = new HashMap<String, Object>();

				dataMap.put("YEA_STD_YY", sYEA_STD_YY);
				dataMap.put("YEA_EMP_NO", sYEA_EMP_NO);
				dataMap.put("YEA_UPD_USER_ID", ((Map) dsYEA_INCDEC.get(0)).get("YEA_UPD_USER_ID").toString());
				
				//매핑...
				dataMap.put("YEA_FORM_SEQ1", mapData.get("SEQ").toString());	//공제서식번호
				dataMap.put("YEA_FM1_STR001", mapData.get("ATT_YEAR").toString());	//귀속년도
				dataMap.put("YEA_FM1_STR002", mapData.get("FORM_CD").toString());	//서식코드
				dataMap.put("YEA_FM1_STR003", mapData.get("RESID").toString());		//주민등록번호
				dataMap.put("YEA_FM1_STR004", mapData.get("NAME").toString());		//가족성명
				dataMap.put("YEA_FM1_STR005", mapData.get("DAT_CD").toString());	//데이터코드
				dataMap.put("YEA_FM1_STR006", mapData.get("BUSNID").toString());	//사업자번호
				dataMap.put("YEA_FM1_STR007", mapData.get("TRADE_NM").toString());	//상호
				dataMap.put("YEA_FM1_NUM001", mapData.get("SUM").toString());		//납입금액합계
				dataMap.put("YEA_FM1_NUM002", mapData.get("PRE_TOT_AMT").toString());			//전년도_일반공제
				dataMap.put("YEA_FM1_NUM003", mapData.get("PRE_MARKET_TOT_AMT").toString());	//전년도_전통시장
				dataMap.put("YEA_FM1_NUM004", mapData.get("PRE_TMONEY_TOT_AMT").toString());	//전년도_대중교통
				dataMap.put("YEA_FM1_NUM005", mapData.get("FTYR_TOT_AMT").toString());			//[2015귀속]전전년도_일반공제
				dataMap.put("YEA_FM1_NUM006", mapData.get("FTYR_MARKET_TOT_AMT").toString());	//[2015귀속]전전년도_전통시장
				dataMap.put("YEA_FM1_NUM007", mapData.get("FTYR_TMONEY_TOT_AMT").toString());	//[2015귀속]전전년도_대중교통
				*/
				//logger.info("pdfDataMap : "+ vtYEYSXM.elementAt(i));
				List<String> ltData = (List<String>) vtYEYSXM.elementAt(i);
				dataMap = new HashMap<String, Object>();

				dataMap.put("YEA_STD_YY", sYEA_STD_YY);
				dataMap.put("YEA_EMP_NO", sYEA_EMP_NO);
				dataMap.put("UPDT_USID" , ((Map) dsYEA_INCDEC.get(0)).get("YEA_UPD_USER_ID").toString());

				dataMap.put("YEA_FORM_SEQ1" , ltData.get(0).toString());	//공제서식번호
				dataMap.put("YEA_FM1_STR001", ltData.get(1).toString());	//귀속년도
				dataMap.put("YEA_FM1_STR002", ltData.get(2).toString());	//서식코드
				dataMap.put("YEA_FM1_STR003", ltData.get(3).toString());	//주민등록번호
				dataMap.put("YEA_FM1_STR004", ltData.get(4).toString());	//가족성명
				dataMap.put("YEA_FM1_STR005", ltData.get(5).toString());	//데이터코드
				dataMap.put("YEA_FM1_STR006", ltData.get(6).toString());	//사업자번호
				dataMap.put("YEA_FM1_STR007", ltData.get(7).toString());	//상호
				dataMap.put("YEA_FM1_STR008", ltData.get(8).toString());	//주민등록번호_주피보험자
				dataMap.put("YEA_FM1_STR009", ltData.get(9).toString());	//성명_주피보험자				
				dataMap.put("YEA_FM1_NUM001", ltData.get(10).toString());	//납입금액합계
				dataMap.put("YEA_FM1_NUM002", ltData.get(11).toString());	//전년도_일반공제
				dataMap.put("YEA_FM1_NUM003", ltData.get(12).toString());	//전년도_전통시장
				dataMap.put("YEA_FM1_NUM004", ltData.get(13).toString());	//전년도_대중교통
				dataMap.put("YEA_FM1_NUM005", ltData.get(14).toString());	//[2015귀속]전전년도_일반공제
				dataMap.put("YEA_FM1_NUM006", ltData.get(15).toString());	//[2015귀속]전전년도_전통시장
				dataMap.put("YEA_FM1_NUM007", ltData.get(16).toString());	//[2015귀속]전전년도_대중교통

				dao.processSAVE07(dataMap);
			}

			//상세 테이블1 (YEA_YEYSLS) 저장
			vSize = vtYEYSLS.size();
			dataMap = null;

			for(int i = 0; i < vSize; i++) {
				/*HashMap<String, String> mapData = (HashMap<String, String>) vtYEYSLS.elementAt(i);
				dataMap = new HashMap<String, Object>();

				dataMap.put("YEA_STD_YY", sYEA_STD_YY);
				dataMap.put("YEA_EMP_NO", sYEA_EMP_NO);
				//dataMap.put("YEA_UPD_USER_ID", ((Map) dsYEA_INCDEC.get(0)).get("YEA_UPD_USER_ID").toString());

				//매핑...
				dataMap.put("YEA_FORM_SEQ1", mapData.get("SEQ").toString());	//공제서식번호
				dataMap.put("YEA_FM2_STR001", mapData.get("STR_NAME").toString());	//공세속성명
				dataMap.put("YEA_FM2_STR002", mapData.get("STR_VAL").toString());	//공제속성내용
				*/
				List<String> ltData = (List<String>) vtYEYSLS.elementAt(i);
				dataMap = new HashMap<String, Object>();

				dataMap.put("YEA_STD_YY", sYEA_STD_YY);
				dataMap.put("YEA_EMP_NO", sYEA_EMP_NO);
				dataMap.put("UPDT_USID" , ((Map) dsYEA_INCDEC.get(0)).get("YEA_UPD_USER_ID").toString());

				dataMap.put("YEA_FORM_SEQ1" , ltData.get(0).toString());	//공제서식번호
				dataMap.put("YEA_FM2_STR001", ltData.get(1).toString());	//공세속성명
				dataMap.put("YEA_FM2_STR002", ltData.get(2).toString());	//공제속성내용
				
				dao.processSAVE08(dataMap);
			}

			//상세 테이블2 (YEA_YEYSLN) 저장
			vSize = vtYEYSLN.size();
			dataMap = null;

			for(int i = 0; i < vSize; i++) {
				/*HashMap<String, String> mapData = (HashMap<String, String>) vtYEYSLN.elementAt(i);
				dataMap = new HashMap<String, Object>();

				dataMap.put("YEA_STD_YY", sYEA_STD_YY);
				dataMap.put("YEA_EMP_NO", sYEA_EMP_NO);
	
				dataMap.put("YEA_FORM_SEQ1", mapData.get("SEQ").toString());	//공제서식번호
				dataMap.put("YEA_FM3_STR001", mapData.get("NUM_NAME").toString());	//공세속성명
				dataMap.put("YEA_FM3_NUM001", mapData.get("NUM_VAL").toString());	//공제속성금액
				*/
				List<String> ltData = (List<String>) vtYEYSLN.elementAt(i);
				dataMap = new HashMap<String, Object>();

				dataMap.put("YEA_STD_YY", sYEA_STD_YY);
				dataMap.put("YEA_EMP_NO", sYEA_EMP_NO);
				dataMap.put("UPDT_USID" , ((Map) dsYEA_INCDEC.get(0)).get("YEA_UPD_USER_ID").toString());
	
				dataMap.put("YEA_FORM_SEQ1" , ltData.get(0).toString());	//공제서식번호
				dataMap.put("YEA_FM3_STR001", ltData.get(1).toString());	//공세속성명
				dataMap.put("YEA_FM3_NUM001", ltData.get(2).toString());	//공제속성금액

				dao.processSAVE09(dataMap);
			}

			logger.info("#################################### Start PROC07 #################################### ");
			dao.processPROC10(rowVo);
			dao.processPROC07(rowVo);	
			logger.info("#################################### Start PROC06 #################################### ");
			dao.processPROC06(rowVo);//가족사항, 소득공제 후처리				
		}

		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}

	
	
}
