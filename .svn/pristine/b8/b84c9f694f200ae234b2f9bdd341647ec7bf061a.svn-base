/**
 * core.erp.tmm.service.impl.FAMB0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import core.erp.source.util.ConvertUtil;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.DataSet;

import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;
import core.erp.com.service.impl.SpSlipMasterCheckDao;
import core.erp.com.service.impl.SpSlipNumberDao;
import core.erp.fam.service.FAMB0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMB0030ServiceImpl - 메시지 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	ㅋㅋㅋ
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link FAMB0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	ㅋㅋㅋ		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMB0030Service")
public class FAMB0030ServiceImpl extends EgovAbstractServiceImpl implements FAMB0030Service {

	/**
	 * 메시지 관리 DAO class inject.
	 */
	@Resource(name = "FAMB0030Dao")
	private FAMB0030Dao dao;

	@Resource(name="FAMB0040Dao")
	private FAMB0040Dao FAMB0040Dao;

	@Resource(name="spSlipNumberDao")
	private SpSlipNumberDao spSlipNumberDao;

	@Resource(name="spSlipMasterCheckDao")
	private SpSlipMasterCheckDao spSlipMasterCheckDao;		
	/**
	 * 전표마스터
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 전표마스터
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPXM", dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/**
	 * 전표라인
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 전표라인
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH01(searchVo));
		return returnMap;
	}

	/**
	 * 전표라인 관리항목
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPRF", dao.processSEARCH02(searchVo));
		return returnMap;
	}	

	/**
	 * 전표라인 부가세
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 전표라인 부가세
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATXXM", dao.processSEARCH03(searchVo));
		return returnMap;
	}		

	/**
	 * 계정과목
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ACCTXM", dao.processSEARCH10(searchVo));
		return returnMap;
	}	

	/**
	 * 계정과목별 관리항목 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH11(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ACCTXD", dao.processSEARCH11(searchVo));
		return returnMap;
	}

	/**
	 * 계정과목별 관리항목 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH13(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPRF2", dao.processSEARCH13(searchVo));
		return returnMap;
	}

	/**
	 * 기준환율 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH14(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_EXRTXM", dao.processSEARCH14(searchVo));
		return returnMap;
	}

	/**
	 * 예산잔액 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH15(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsBUDG_AMNT", dao.processSEARCH15(searchVo));
		return returnMap;
	}

	/**
	 * 전표일자별 마감정보 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public void processSEARCH16(Map searchVo) throws Exception {
		dao.processSEARCH16(searchVo);
	}

	/**
	 * 귀속부서별, 계정별 코스트센터 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 전자결재 헤더 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCH17(Map searchVo) throws Exception {
		String sCSTC_CDNE = dao.processSEARCH17(searchVo);
		return sCSTC_CDNE;
	}		

	/**
	 * 전표  인쇄 - 마스터 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPXM_RPT", dao.processPRINT00(searchVo));
		return returnMap;
	}

	/**
	 * 전표  인쇄 - 분개내역 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {

		String sSlipList	= (String)searchVo.get("SLIP_LIST");
		String[] sSlipNumb 	= sSlipList.split(",");
	
		for (int i = 0; i < sSlipNumb.length; i++) {
			
			// 전표 인쇄용 순번 재산출
			searchVo.put("SLIP_NUMB", sSlipNumb[i]);
			dao.processUPDATE00(searchVo);
			
		}
		
		// 전표인쇄 - 분개내역 조회
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT_RPT", dao.processPRINT01(searchVo));
		return returnMap;
	}

	/**
	 * FAMB0030 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE00(Map saveData) throws Exception{

		int deleteCount = 0;
		int saveCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sSlipNumb		= "";  
		String sSYST_LNCD		= "KO";  //시스템언어코드
		String sAPPR_DOCN 		= "";

		List dsTA_SLIPXM     = (List) saveData.get("dsTA_SLIPXM");  
		List dsTA_SLIPNT     = (List) saveData.get("dsTA_SLIPNT"); 
		List dsTA_SLIPRF     = (List) saveData.get("dsTA_SLIPRF"); 
		List dsTA_VATXXM     = (List) saveData.get("dsTA_VATXXM"); 
		List dsTA_SLIPXM_Del = (List) saveData.get("dsTA_SLIPXM_DELETE");
		List dsTA_SLIPNT_Del = (List) saveData.get("dsTA_SLIPNT_DELETE");
		List dsTA_SLIPRF_Del = (List) saveData.get("dsTA_SLIPRF_DELETE");
		List dsTA_VATXXM_Del = (List) saveData.get("dsTA_VATXXM_DELETE");

		//전표마스터 삭제
		for (int i = 0; i < dsTA_SLIPXM_Del.size(); i++) {
			rowVo = (Map) dsTA_SLIPXM_Del.get(i);
			rowVo.put("SYST_LNCD", sSYST_LNCD);
			deleteCount += dao.processDELETE00(rowVo);
			
			//전자결재 문서 번호 존재하는 경우 전자결재 헤더 삭제
			sAPPR_DOCN = (String) rowVo.get("APPR_DOCN");
			if (!sAPPR_DOCN.equals(null) && sAPPR_DOCN.length() > 0) {
				deleteCount += dao.processDELETE99(rowVo);	//전자결재 헤더 삭제
			}
		}

		//전표마스터 저장, 수정
		if (dsTA_SLIPXM.size() > 0) {
			rowVo = (Map) dsTA_SLIPXM.get(0);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			if (rowType == 1 || rowType == 2) {

				rowVo.put("SYST_LNCD", sSYST_LNCD);
				dao.processSAVE00(rowVo);
				sSlipNumb = (String) rowVo.get("oSLIP_NUMB");
				saveCount++;
				
			} else {
				sSlipNumb = (String) rowVo.get("SLIP_NUMB");
			}
		}
		
		if (dsTA_SLIPXM_Del.size() < 1) {
			//전표라인 삭제
			for (int i = 0; i < dsTA_SLIPNT_Del.size(); i++) {
				rowVo = (Map) dsTA_SLIPNT_Del.get(i);
				rowVo.put("SYST_LNCD", sSYST_LNCD);
				deleteCount += dao.processDELETE01(rowVo);
			}
	
			//전표라인 관리항목  삭제
			for (int i = 0; i < dsTA_SLIPRF_Del.size(); i++) {
				rowVo = (Map) dsTA_SLIPRF_Del.get(i);
				rowVo.put("SYST_LNCD", sSYST_LNCD);
				deleteCount += dao.processDELETE02(rowVo);
			}
	
			//전표라인 부가세  삭제
			for (int i = 0; i < dsTA_VATXXM_Del.size(); i++) {
				rowVo = (Map) dsTA_VATXXM_Del.get(i);
				rowVo.put("SYST_LNCD", sSYST_LNCD);
				deleteCount += dao.processDELETE03(rowVo);
			}
		}
		
		//전표라인 저장
		for (int i = 0; i < dsTA_SLIPNT.size(); i++) {

			rowVo = (Map) dsTA_SLIPNT.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1 || rowType == 2) {
				if (!sSlipNumb.isEmpty()) rowVo.put("SLIP_NUMB", sSlipNumb);
				rowVo.put("SYST_LNCD", sSYST_LNCD);
				dao.processSAVE01(rowVo);
				saveCount++;
			}			
		}	

		//전표라인 관리항목 저장
		for (int i = 0; i < dsTA_SLIPRF.size(); i++) {		

			rowVo = (Map) dsTA_SLIPRF.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1 || rowType == 2) {
				if (!sSlipNumb.isEmpty()) rowVo.put("SLIP_NUMB", sSlipNumb);
				rowVo.put("SYST_LNCD", sSYST_LNCD);
				dao.processSAVE02(rowVo);
				saveCount++;
			}
		}

		//전표라인 부가세 저장
		for (int i = 0; i < dsTA_VATXXM.size(); i++) {		

			rowVo = (Map) dsTA_VATXXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1 || rowType == 2) {
				if (!sSlipNumb.isEmpty()) rowVo.put("SLIP_NUMB", sSlipNumb);
				rowVo.put("SYST_LNCD", sSYST_LNCD);
				dao.processSAVE03(rowVo);
				saveCount++;
			}
		}

		if (saveCount > 0) {
			rowVo.put("SYST_LNCD", sSYST_LNCD);
			dao.processFINISH(rowVo);
			if (sSlipNumb.isEmpty()) {
				sSlipNumb = (String) rowVo.get("SLIP_NUMB");
			}
		}

		return sSlipNumb;

	}

	/**
	 * 전자결재 연동자료 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE99(Map saveData, Map searchVo) throws Exception{

		int saveCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sAPPR_DOCN 	= "";  
		String sSYST_LNCD	= "KO";  //시스템언어코드

		List dsTA_SLIPXM	= (List) saveData.get("dsTA_SLIPXM");  
		
		if (dsTA_SLIPXM.size() > 0) {
			rowVo = (Map) dsTA_SLIPXM.get(0);
			
			sAPPR_DOCN = (String) rowVo.get("APPR_DOCN");
			
			//전자결재 문서번호 존재유무에 따라 결재일련번호 채번
			if (sAPPR_DOCN.equals(null) || sAPPR_DOCN.length() == 0) {
				
				DataSet returnDataSet = (DataSet)dao.processSEARCH99(rowVo);	//결재일련번호 채번 반환
				sAPPR_DOCN = returnDataSet.getString(0, "APPR_SEQN");
				
				rowVo.put("SYST_LNCD", sSYST_LNCD);
				rowVo.put("APPR_DOCN", sAPPR_DOCN);
				rowVo.put("GWAP_EMPL", searchVo.get("GWAP_EMPL").toString());
				rowVo.put("GWAP_DEPT", searchVo.get("GWAP_DEPT").toString());
				rowVo.put("GWAP_SUBJ", searchVo.get("GWAP_SUBJ").toString());
				
				dao.processSAVE99(rowVo); //전자결재 연동자료 저장
				
			}  
			saveCount++;
	
		}
		
		return sAPPR_DOCN;
		
	}
	
}
