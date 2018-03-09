package core.erp.yea.service.impl;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.evm.web.EVMA0080Controller;
import core.erp.source.util.ComNTSPdfConverter;
import core.erp.yea.service.YEAA0070_2015Service;
import core.ifw.utl.CoreProperties;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	YEAA0070_2015ServiceImpl - 연말정산처리 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.31.
 * @version	1.0
 * @see		{@link YEAA0070_2015Service}
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
@Service("YEAA0070_2015Service")
public class YEAA0070_2015ServiceImpl extends EgovAbstractServiceImpl implements YEAA0070_2015Service {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(YEAA0070_2015Service.class);

	/**
	 * 연말정산처리 DAO class inject.
	 */
	@Resource(name = "YEAA0070_2015Dao")
	private YEAA0070_2015Dao dao;

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
		
		returnMap.put("dsYEA_YEPROC_RPT1", dao.processPRINT10(searchVo)); //근로소득원천징수영수증1
		returnMap.put("dsYEA_YEPROC_RPT2", dao.processPRINT11(searchVo)); //근로소득원천징수영수증2
		
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
		
		returnMap.put("dsYEA_PAYDTL_RPT1", dao.processPRINT08(searchVo)); //근로소득원천징수부출력1
		returnMap.put("dsYEA_PAYDTL_RPT2", dao.processPRINT09(searchVo)); //근로소득원천징수부출력2
		
		return returnMap;

    }

	/**
	 * YEAA0070_2015 저장,수정 또는 삭제한다.
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
			//rowVo.put("PROC_GUBN", searchVo.get("PROC_GUBN"));
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
			sYEA_INC_STR048 = (String) rowVo.get("YEA_INC_STR048");	//PDF파일 물리파일명
			sYEA_INC_STR049 = (String) rowVo.get("YEA_INC_STR049");	//PDF파일 파일경로
			sYEA_INC_STR050 = (String) rowVo.get("YEA_INC_STR050");	//PDF파일 논리파일명
			
		}	
		

		logger.info("Delete : "+ rowVo);
		deleteCount += dao.processDELETE09(rowVo);

		//sAB_FILE_PATH = CoreProperties.getProperty("CoreMIS.file.upload.path") + sYEA_INC_STR049; 
		//sCR_FILE_PATH = CoreProperties.getProperty("CoreMIS.pdf.certs.path"); 
		sAB_FILE_PATH = CoreProperties.getProperty("CoreERP.file.upload.path") + sYEA_INC_STR049; 
		sCR_FILE_PATH = CoreProperties.getProperty("CoreERP.pdf.certs.path");
		
		//logger.info("sAB_FILE_PATH file : "+ sAB_FILE_PATH);
		//logger.info("sCR_FILE_PATH pdf  : "+ sCR_FILE_PATH);

		File pdfFile = new File(sAB_FILE_PATH + File.separatorChar + sYEA_INC_STR048 );

		HashMap pdfDataMap = (HashMap) ComNTSPdfConverter.pdfToXmlVector(sYEA_INC_STR048, sAB_FILE_PATH, "", "", sCR_FILE_PATH);
		
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
				dataMap.put("YEA_FM1_NUM001", ltData.get(8).toString());	//납입금액합계
				dataMap.put("YEA_FM1_NUM002", ltData.get(9).toString());	//전년도_일반공제
				dataMap.put("YEA_FM1_NUM003", ltData.get(10).toString());	//전년도_전통시장
				dataMap.put("YEA_FM1_NUM004", ltData.get(11).toString());	//전년도_대중교통
				dataMap.put("YEA_FM1_NUM005", ltData.get(12).toString());	//[2015귀속]전전년도_일반공제
				dataMap.put("YEA_FM1_NUM006", ltData.get(13).toString());	//[2015귀속]전전년도_전통시장
				dataMap.put("YEA_FM1_NUM007", ltData.get(14).toString());	//[2015귀속]전전년도_대중교통

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

			logger.info("#################################### Start 5 #################################### ");
			dao.processPROC07(rowVo);	
			dao.processPROC06(rowVo);//가족사항, 소득공제 후처리				
		}

		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}

	
	
}
