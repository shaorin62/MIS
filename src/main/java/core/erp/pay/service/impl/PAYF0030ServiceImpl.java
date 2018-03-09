package core.erp.pay.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.pay.service.PAYF0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0030ServiceImpl - 퇴직금계산처리 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	안윤준
 * @since	2016. 9. 7.
 * @version	1.0
 * @see		{@link PAYF0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 7.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0030Service")
public class PAYF0030ServiceImpl extends EgovAbstractServiceImpl implements PAYF0030Service {

	/**
	 * 퇴직금계산처리 DAO class inject.
	 */
	@Resource(name = "PAYF0030Dao")
	private PAYF0030Dao dao;

	/**
	 * 퇴직정산처리 사원 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();

		String RERE_CODE = (String) searchVo.get("RERE_CODE");

		if (!RERE_CODE.equals("5")){ // 퇴직사유가 중간정산이 아닌 경우
			returnMap.put("dsHR_MASTXM", dao.processSEARCH14(searchVo));
		} else {
			returnMap.put("dsHR_MASTXM", dao.processSEARCH15(searchVo));
		}

		return returnMap;

	}

	/**
	 * 퇴직금지급조서 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();

		String ROWCNT = dao.processSEARCH02(searchVo);

		//데이터가 존재하지 않는 다면
		if ( ROWCNT.equals("0")) {
			returnMap.put("dsPY_RTPCXM", dao.processSEARCH05(searchVo));

		} else {
			returnMap.put("dsPY_RTPCXM", dao.processSEARCH04(searchVo));

		}

		return returnMap;

	}

	/**
	 * 퇴직정산처리_급여 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPAYX", dao.processSUMSEARCH06(searchVo));

		return returnMap;
	}

	/**
	 * 퇴직정산처리_상여 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTBONU", dao.processSEARCH07(searchVo));

		return returnMap;
	}

	/**
	 * 퇴직정산처리_급여,상여 목록을 조회한다.(POP)
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processPOPSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPAYA", dao.processPOPSEARCH00(searchVo));
		returnMap.put("dsPY_RTBONA", dao.processPOPSEARCH01(searchVo));

		return returnMap;
	}

	/**
	 * 퇴직정산처리_추가수당 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		// TODO DATASET 확인필요
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", dao.processSEARCH09(searchVo));
		return returnMap;
	}

	/**
	 * 퇴직정산처리_추가공제 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		// TODO DATASET 확인필요
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", dao.processSEARCH10(searchVo));
		return returnMap;
	}

	/**
	 * 퇴직정산처리(2013)_과세이연계좌 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH06(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPPXM", dao.processSEARCH11(searchVo));
		return returnMap;
	}

	/**
	 * 퇴직정산처리(2013)_정산내역 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH07(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPWXM", dao.processSEARCH08(searchVo));
		return returnMap;
	}

	/**
	 * 원천징수 영수증 리포트를 출력한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPWXM_PRINT", dao.processPRINT00(searchVo));
		return returnMap;
	}

	/**
	 * 여러명의 원천징수 영수증 리포트를 출력한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processPRINT10(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPWXM_PRINT", dao.processPRINT10(searchVo));
		return returnMap;
	}

	/**
	 * 지급결의서 리포트를 출력한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTBONU_PRINT", dao.processPRINT01(searchVo)); // 상여
		returnMap.put("dsPY_RTPAYX_PRINT", dao.processPRINT02(searchVo)); // 급여
		returnMap.put("dsPY_RTPCXM_PRINT", dao.processPRINT03(searchVo)); // 퇴직금지급조서
		returnMap.put("dsPY_RTPPXM_RPT", dao.processSEARCH11(searchVo));  // 과세이연금액
		returnMap.put("dsPY_SVINSU_PRINT", dao.processPRINT09(searchVo));   // 퇴직보험금
		return returnMap;
	}

	/**
	 * 여러명의 지급결의서 리포트를 출력한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processPRINT03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTBONU_PRINT", dao.processPRINT04(searchVo)); // 상여
		returnMap.put("dsPY_RTPAYX_PRINT", dao.processPRINT05(searchVo)); // 급여내역
		returnMap.put("dsPY_RTPCXM_PRINT", dao.processPRINT06(searchVo)); // 퇴직금지급조서
		returnMap.put("dsPY_RTPPXM_RPT", dao.processPRINT07(searchVo));   // 과세이연금액
		returnMap.put("dsPY_SVINSU_PRINT", dao.processPRINT08(searchVo));   // 퇴직보험금

		return returnMap;
	}


	/**
	 * 퇴직급여계산 목록을 저장,수정 또는 삭제한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{

		int iTotCnt = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsPY_RTPPXM     = (List) saveData.get("dsPY_RTPPXM");
		List dsPY_RTPPXM_Del = (List) saveData.get("dsPY_RTPPXM_DELETE");
		List dsPY_RTPCXM     = (List) saveData.get("dsPY_RTPCXM");
		List dsPY_RTPCXM_Del = (List) saveData.get("dsPY_RTPCXM_DELETE");
		List dsPY_RTPAYX     = (List) saveData.get("dsPY_RTPAYX");
		List dsPY_RTPAYX_Del = (List) saveData.get("dsPY_RTPAYX_DELETE");
		List dsPY_RTBONU     = (List) saveData.get("dsPY_RTBONU");
		List dsPY_RTBONU_Del = (List) saveData.get("dsPY_RTBONU_DELETE");
		// TODO 추가지급 삭제 (사용유무 체크 안됨)
		//		List dsPY_ALDEXM     = (List) saveData.get("dsPY_ALDEXM");
		//		List dsPY_ALDEXM_Del = (List) saveData.get("dsPY_ALDEXM_DELETE");

		// 급여
		for (int i = 0; i < dsPY_RTPAYX_Del.size(); i++) {
			rowVo = (Map) dsPY_RTPAYX_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

		// 상여자료 삭제
		for (int i = 0; i < dsPY_RTBONU_Del.size(); i++) {
			rowVo = (Map) dsPY_RTBONU_Del.get(i);
			dao.processDELETE01(rowVo);
			iTotCnt++;

		}

		// TODO 추가지급 삭제 (사용유무 체크 안됨)
		//        for (int i = 0; i < dsPY_ALDEXM_Del.size(); i++) {
		//        	rowVo = (Map) dsPY_ALDEXM_Del.get(i);
		//			dao.processDELETE02(rowVo);
		//			iTotCnt++;
		//		}

		//과세이연계좌 삭제
		for (int i = 0; i < dsPY_RTPPXM_Del.size(); i++) {
			rowVo = (Map) dsPY_RTPPXM_Del.get(i);
			dao.processDELETE03(rowVo);
			iTotCnt++;
		}

		//퇴직금지급조서 삭제
		for (int i = 0; i < dsPY_RTPCXM_Del.size(); i++) {
			rowVo = (Map) dsPY_RTPCXM_Del.get(i);
			//추가지급공제삭제
			dao.processDELETE17(rowVo);
			//급여삭제
			dao.processDELETE18(rowVo);
			dao.processPOPDELETE00(rowVo);

			//상여삭제
			dao.processDELETE19(rowVo);
			dao.processPOPDELETE01(rowVo);
			//과세이연계좌
			dao.processDELETE20(rowVo);
			//정산내역 삭제
			dao.processDELETE21(rowVo);
			//퇴직금지급조서 삭제
			dao.processDELETE04(rowVo);
			iTotCnt += 1;
		}

		//퇴직금지급조서 저장
		for (int i = 0; i < dsPY_RTPCXM.size(); i++) {
			rowVo = (Map) dsPY_RTPCXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			rowVo.put("RECE_SEQN", searchVo.get("RECE_SEQN"));

			String ROWCNT = dao.processSEARCH02(rowVo);

			//데이터가 존재한다면
			if ( ROWCNT.equals("0")) {
				dao.processSAVE04(rowVo);
				dao.processPROC02(rowVo);
			} else {
				dao.processUPDATE04(rowVo);
				dao.processPROC02(rowVo);
			}

			iTotCnt++;
		}

		//급여 저장
		for (int i = 0; i < dsPY_RTPAYX.size(); i++) {
			rowVo = (Map) dsPY_RTPAYX.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			rowVo.put("RECE_SEQN", searchVo.get("RECE_SEQN"));

			if (rowType == 1) {
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE00(rowVo);

			}
			iTotCnt++;
		}

		//상여 저장
		for (int i = 0; i < dsPY_RTBONU.size(); i++) {
			rowVo = (Map) dsPY_RTBONU.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			rowVo.put("RECE_SEQN", searchVo.get("RECE_SEQN"));

			if (rowType == 1) {
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE01(rowVo);

			}
			iTotCnt++;
		}

		// TODO 추가지급 삭제 (사용유무 체크 안됨)
		//        for (int i = 0; i < dsPY_ALDEXM.size(); i++) {
		//  			rowVo = (Map) dsPY_ALDEXM.get(i);
		//  			rowType = (Integer) rowVo.get("ROW_TYPE");
		//  			if (rowType == 1) {
		//  				dao.processSAVE02(rowVo);
		//
		//  			} else if (rowType == 2) {
		//  				dao.processUPDATE02(rowVo);
		//
		//  			}
		//  			iTotCnt++;
		//  		}

		//과세이연계좌 저장
		for (int i = 0; i < dsPY_RTPPXM.size(); i++) {
			rowVo = (Map) dsPY_RTPPXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			rowVo.put("RECE_SEQN", searchVo.get("RECE_SEQN"));

			if (rowType == 1) {
				dao.processSAVE03(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE03(rowVo);

			}

			dao.processPROC12(rowVo); //과세이연정보 반영처리
			iTotCnt++;
		}
		return iTotCnt;
	}

	/**
	 * 퇴직급여계산 목록을 저장,수정 또는 삭제한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes" })
	public int processPOPSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsPY_RTPAYA     = (List) saveData.get("dsPY_RTPAYA");
		List dsPY_RTBONA     = (List) saveData.get("dsPY_RTBONA");
		List dsPY_RTBONA_Del = (List) saveData.get("dsPY_RTBONA_DELETE");

		// 급여 저장
		for (int i = 0; i < dsPY_RTPAYA.size(); i++) {
			rowVo = (Map) dsPY_RTPAYA.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			dao.processPOPSAVE00(rowVo);
			iTotCnt++;
		}

		// 상여 삭제
		for (int i = 0; i < dsPY_RTBONA_Del.size(); i++) {
			rowVo = (Map) dsPY_RTBONA_Del.get(i);
			dao.processPOPDELETE01(rowVo);
			iTotCnt++;
		}

		// 상여 저장
		for (int i = 0; i < dsPY_RTBONA.size(); i++) {
			rowVo = (Map) dsPY_RTBONA.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			dao.processPOPSAVE01(rowVo);
			iTotCnt++;
		}

		return iTotCnt;
	}

	/**
	 * 퇴직급여계산 목록을 저장,수정 또는 삭제한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processPROC00(Map saveData) throws Exception{

		Map rowVo = null;
		int iTotCnt = 0;
		int rowType = 0;

		List dsPY_RTPCXM     = (List) saveData.get("dsPY_RTPCXM");
		for (int i = 0; i < dsPY_RTPCXM.size(); i++) {
			rowVo 	= (Map) dsPY_RTPCXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			dao.processPROC16(rowVo);

			iTotCnt++;

		}

		return iTotCnt;

	}

	/**
	 * 퇴직급여계산(마감) 목록을 저장,수정 또는 삭제한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked", "unused" })
	public int processPROC01(Map saveData, Map searchVo) throws Exception{

		Map rowVo = null;
		int iTotCnt = 0;
		int rowType = 0;

		List dsHR_MASTXM     = (List) saveData.get("dsHR_MASTXM");
		for (int i = 0; i < dsHR_MASTXM.size(); i++) {
			rowVo 	= (Map) dsHR_MASTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			rowVo.put("RECE_SEQN", searchVo.get("RECE_SEQN"));

			dao.processPROC01(rowVo);

			iTotCnt++;

		}

		return iTotCnt;
	}

	/**
	 * 퇴직급여계산(일괄처리) 목록을 저장,수정 또는 삭제한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processPROC02(Map saveData) throws Exception{

		Map rowVo = null;
		int iTotCnt = 0;
		int rowType = 0;

		List dsPY_RTPCXM     = (List) saveData.get("dsPY_RTPCXM");
		for (int i = 0; i < dsPY_RTPCXM.size(); i++) {
			rowVo 	= (Map) dsPY_RTPCXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			dao.processPROC02(rowVo);

			iTotCnt++;

		}

		return iTotCnt;
	}

	/**
	 * 급여평균 ~ 퇴직연금예치금 갱신
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processPROC03(Map saveData) throws Exception{

		Map rowVo = null;
		int iTotCnt = 0;
		int rowType = 0;

		List dsPY_RTPCXM     = (List) saveData.get("dsPY_RTPCXM");
		for (int i = 0; i < dsPY_RTPCXM.size(); i++) {
			rowVo 	= (Map) dsPY_RTPCXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			dao.processPROC03(rowVo);

			iTotCnt++;

		}

		return iTotCnt;
	}

	/**
	 * 전자결재 연동자료 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked", "unused" })
	public String processSAVE99(Map saveData, Map searchVo) throws Exception{

		int saveCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sAPPR_SEQN 	= "";

		List dsHR_MASTXM	= (List) saveData.get("dsHR_MASTXM");

		if (dsHR_MASTXM.size() > 0) {
			rowVo = (Map) dsHR_MASTXM.get(0);

			sAPPR_SEQN = (String) rowVo.get("APPR_SEQN");

			//전자결재 문서번호 존재유무에 따라 결재일련번호 채번
			if (sAPPR_SEQN.equals(null) || sAPPR_SEQN.length() == 0) {

				DataSet returnDataSet = (DataSet)dao.processSEARCH99(rowVo);	//결재일련번호 채번 반환
				sAPPR_SEQN = returnDataSet.getString(0, "APPR_SEQN");

				rowVo.put("APPR_SEQN", sAPPR_SEQN);
				rowVo.put("GWAP_EMPL", searchVo.get("GWAP_EMPL").toString());
				rowVo.put("GWAP_DEPT", searchVo.get("GWAP_DEPT").toString());
				rowVo.put("GWAP_SUBJ", searchVo.get("GWAP_SUBJ").toString());
				rowVo.put("RECE_SEQN", searchVo.get("RECE_SEQN").toString());

				dao.processSAVE99(rowVo); //전자결재 연동자료 저장

			}
			saveCount++;

		}

		return sAPPR_SEQN;

	}

	// 아래는 웹스퀘어 그대로 소스임.
	//	/**
	//	 * 퇴직원천징수 발급.
	//	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	//	 * @return 처리건수
	//	 * @exception Exception 예외
	//	 */
	//	@Override
	//	public Object getREPORT00(Map searchVo) throws Exception {
	//
	//		ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	//		HttpServletRequest request = (HttpServletRequest) servletRequestAttribute.getRequest();
	//
	//		Map<String, Object> data = (Map<String, Object>) param.get("param");
	//
	//		data.put("SEVR_ADDR","" + request.getRequestURL().toString().replace(request.getRequestURI(), ""));
	//
	//		return dao.getREPORT00(rowVo);
	//	}
	//
	//	/**
	//	 * 퇴직원천징수 발급.
	//	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	//	 * @return 처리건수
	//	 * @exception Exception 예외
	//	 */
	//	@Override
	//	public Object getREPORT01(Map searchVo) throws Exception {
	//
	//		ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	//		HttpServletRequest request = (HttpServletRequest) servletRequestAttribute.getRequest();
	//
	//		Map<String, Object> data = (Map<String, Object>) param.get("param");
	//
	//		data.put("SEVR_ADDR","" + request.getRequestURL().toString().replace(request.getRequestURI(), ""));
	//
	//		return dao.getREPORT01(rowVo);
	//	}
	//
	//	/**
	//	 * 퇴직원천징수 발급.
	//	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	//	 * @return 처리건수
	//	 * @exception Exception 예외
	//	 */
	//	@Override
	//	public Object getREPORT02(Map searchVo) throws Exception {
	//
	//		ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	//		HttpServletRequest request = (HttpServletRequest) servletRequestAttribute.getRequest();
	//
	//		Map<String, Object> data = (Map<String, Object>) param.get("param");
	//
	//		data.put("SEVR_ADDR","" + request.getRequestURL().toString().replace(request.getRequestURI(), ""));
	//
	//		return dao.getREPORT02(rowVo);
	//	}
	//
	//	/**
	//	 * 퇴직원천징수 발급.
	//	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	//	 * @return 처리건수
	//	 * @exception Exception 예외
	//	 */
	//	@Override
	//	public Object getREPORT03(Map searchVo) throws Exception {
	//
	//		ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	//		HttpServletRequest request = (HttpServletRequest) servletRequestAttribute.getRequest();
	//
	//		Map<String, Object> data = (Map<String, Object>) param.get("param");
	//
	//		data.put("SEVR_ADDR","" + request.getRequestURL().toString().replace(request.getRequestURI(), ""));
	//
	//		return dao.getREPORT03(rowVo);
	//	}
	//
	//	/**
	//	 * 퇴직원천징수 발급.
	//	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	//	 * @return 처리건수
	//	 * @exception Exception 예외
	//	 */
	//	@Override
	//	public Object getREPORT04(Map searchVo) throws Exception {
	//
	//		ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	//		HttpServletRequest request = (HttpServletRequest) servletRequestAttribute.getRequest();
	//
	//		Map<String, Object> data = (Map<String, Object>) param.get("param");
	//
	//		data.put("SEVR_ADDR","" + request.getRequestURL().toString().replace(request.getRequestURI(), ""));
	//
	//		return dao.getREPORT04(rowVo);
	//	}
	//
	//	/**
	//	 * 퇴직원천징수 발급.
	//	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	//	 * @return 처리건수
	//	 * @exception Exception 예외
	//	 */
	//	@Override
	//	public Object getREPORT05(Map searchVo) throws Exception {
	//
	//		ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	//		HttpServletRequest request = (HttpServletRequest) servletRequestAttribute.getRequest();
	//
	//		Map<String, Object> data = (Map<String, Object>) param.get("param");
	//
	//		data.put("SEVR_ADDR","" + request.getRequestURL().toString().replace(request.getRequestURI(), ""));
	//
	//		return dao.getREPORT05(rowVo);
	//	}
}
