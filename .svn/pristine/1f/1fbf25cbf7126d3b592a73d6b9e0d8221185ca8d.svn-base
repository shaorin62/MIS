package core.erp.trm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.impl.ComHelpPopupDao;
import core.erp.source.util.ConvertUtil;
import core.erp.trm.service.TRMA0040Service;
import core.ifw.utl.DataSetUtil;
import core.ifw.utl.StrUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TRMA0040ServiceImpl - 미불반제관리  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link TRMA0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * 2016.10.04	김기환		자동반제 수정.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TRMA0040Service")
public class TRMA0040ServiceImpl extends EgovAbstractServiceImpl implements TRMA0040Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMA0040ServiceImpl.class);

	@Resource(name = "TRMA0040Dao")
	private TRMA0040Dao tRMA0040Dao;

	@Resource(name="ComHelpPopupDao")
	private ComHelpPopupDao comHelpPopupDao;

	/**
	 * <pre>
	 * 미불반제관리 발생내역 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPXM", tRMA0040Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/**
	 * <pre>
	 * 미불반제관리 정리내역 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", tRMA0040Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	/**
	 * <pre>
	 * 미불(반제) 필수 입력 관리항목 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsSLIP_TYPE", tRMA0040Dao.processSEARCH02(searchVo));
		return returnMap;
	}

	/**
	 * <pre>
	 * 미불반제관리  전표처리
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public String processCREATESLIP(Map searchVo, Map saveData) throws Exception {
		LOGGER.debug("------- processCREATE_SLIP Start ------");

		String GRUP_GUBN = (String) searchVo.get("GRUP_GUBN"); // 반제여부(건별,통합)
		int slip_line = 0;
		int padSize = 4;
		int sPrinOrdr = 0;
		int sSortOrdr = 0;
		String sQuery    = "";
		String sQueryAcct    = "";

		/****************************************************************
		 * 0. 조회대상 계정 쿼리
		 ****************************************************************/
		searchVo.put("sSEARCHKIND", "TRM0017");
		Map<String, Object> popupDataInfoMap = (Map<String, Object>) comHelpPopupDao.processHelpDataDesign(searchVo);
		sQuery += " " + (popupDataInfoMap.get("SECH_SYNX") == null ? "" : popupDataInfoMap.get("SECH_SYNX"));
		sQuery += " " + (popupDataInfoMap.get("FROM_SYNT") == null ? "" : popupDataInfoMap.get("FROM_SYNT"));	
		sQuery += " " + (popupDataInfoMap.get("WHRE_SYNT") == null ? "" : popupDataInfoMap.get("WHRE_SYNT"));

		/****************************************************************
		 * 1. 전표헤더 생성
		 ****************************************************************/
		String sSlipNumb = this.creatSlipHeader(searchVo);
		//if ("".equals(sSlipNumb) || sSlipNumb == null)	return 0;

		if ( "1".equals( GRUP_GUBN )) {
			/****************************************************************
			 * 2. 건별 전표라인 생성
			 ****************************************************************/
			ArrayList<Map<String, Object>> ds = (ArrayList<Map<String, Object>>) saveData.get("dsTA_SLIPXM_SLIP");

			for (Map<String, Object> data : ds) {
				/****************************************************************
				 * ※ <점검1> 계정 점검
				 ****************************************************************/
				Map<String, Object> searchUserList = new HashMap<String, Object>();
				sQueryAcct = sQuery + " AND A.ACCT_INTL = '" + StrUtil.nullParam(data.get("RPAY_ACCT_INTL")) + "'";
				searchUserList.put("COMBOQUERY", sQueryAcct);

				if ( DataSetUtil.getRowCount(comHelpPopupDao.processHelpDataList(searchUserList)) < 1) {
					String errMsg = "<점검1> 미불관리대상 결제계정코드가 아닙니다!![ 계정코드 : " +StrUtil.nullParam(data.get("RPAY_ACCT_INTL"))+" ]";
					throw new Exception(errMsg);
				}

				/****************************************************************
				 * 2-2. 발생내역 생성
				 ****************************************************************/
				data.put("SLIP_LINE_NEW", ConvertUtil.leftPad(String.valueOf(++slip_line), padSize, "0"));
				data.put("PRIN_ORDR", ++sPrinOrdr);
				data.put("SORT_ORDR", ++sSortOrdr);
				this.creatSlipLineDr(searchVo, data);

				/****************************************************************
				 * 2-3. 정리내역 생성
				 ****************************************************************/
				data.put("SLIP_LINE_NEW", ConvertUtil.leftPad(String.valueOf(++slip_line), padSize, "0"));
				data.put("PRIN_ORDR", ++sPrinOrdr);
				data.put("SORT_ORDR", ++sSortOrdr);
				this.creatSlipLineCr(searchVo, data);

			}

		} else if ( "2".equals( GRUP_GUBN ) || "3".equals( GRUP_GUBN ) ) {
			/****************************************************************
			 * 2. 통합/거래처별 전표라인 생성 (대변부터 생성)
			 ****************************************************************/	

			/****************************************************************
			 * 2-1. 정리내역 생성
			 ****************************************************************/
			ArrayList<Map<String, Object>> ds_c = (ArrayList<Map<String, Object>>) saveData.get("dsTA_SLIPXM_SLIP_L");

			for(Map<String, Object> data_c : ds_c) {

				/****************************************************************
				 * ※ 계정 점검
				 ****************************************************************/
				Map<String, Object> searchUserList = new HashMap<String, Object>();
				sQueryAcct = sQuery + " AND A.ACCT_INTL = '" + StrUtil.nullParam(data_c.get("RPAY_ACCT_INTL")) + "'";
				searchUserList.put("COMBOQUERY", sQueryAcct);

				if ( DataSetUtil.getRowCount(comHelpPopupDao.processHelpDataList(searchUserList)) < 1) {
					String errMsg = "미불관리대상 결제계정코드가 아닙니다!![ 계정코드 : " +data_c.get("ACCT_INTL").toString()+" ]";
					throw new Exception(errMsg);
				}

				data_c.put("SLIP_LINE_NEW", ConvertUtil.leftPad(String.valueOf(++slip_line), padSize, "0"));
				data_c.put("PRIN_ORDR", ++sPrinOrdr);
				data_c.put("SORT_ORDR", ++sSortOrdr);
				this.creatSlipLineCr(searchVo, data_c);
			}

			/****************************************************************
			 * 2-2. 발생내역 생성
			 ****************************************************************/
			ArrayList<Map<String, Object>> ds_d = (ArrayList<Map<String, Object>>) saveData.get("dsTA_SLIPXM_SLIP");

			for(Map<String, Object> data_d : ds_d) {

				data_d.put("SLIP_LINE_NEW", ConvertUtil.leftPad(String.valueOf(++slip_line), padSize, "0"));
				data_d.put("PRIN_ORDR", ++sPrinOrdr);
				data_d.put("SORT_ORDR", ++sSortOrdr);
				this.creatSlipLineDr(searchVo, data_d);
			}

			/****************************************************************
			 * 2017.01.16 권미영
			 * 전표라인의 정렬순서 거래처별로 조정 
			 ****************************************************************/
			//if ( "3".equals( GRUP_GUBN ) ) {
			tRMA0040Dao.processSLIP05(searchVo);
			//}

		} else {
			return sSlipNumb;	
		}

		/****************************************************************
		 * 3. 전표완료
		 ****************************************************************/
		tRMA0040Dao.processSLIP04(searchVo);

		LOGGER.debug("------- processCREATE_SLIP end ------");

		return sSlipNumb;
	}

	/**
	 * <pre>
	 * 전표헤더 생성
	 * </pre>
	 *
	 * @param Map searchVo
	 * @return SLIP_NUMB
	 * @throws Exception
	 */
	private String creatSlipHeader(Map<String, Object> searchVo) throws Exception{

		tRMA0040Dao.processSLIP00(searchVo);	
		LOGGER.debug(">>>>>>>>> SLIP_NUMB : " + searchVo.get("SLIP_NUMB").toString());	

		return (String) searchVo.get("SLIP_NUMB");
	}

	/**
	 * <pre>
	 * 발생내역 생성 및 호출
	 * </pre>
	 *
	 * @param Map searchVo 
	 * @param Map<String, Object> data 
	 * @return
	 * @throws Exception
	 */
	private void creatSlipLineDr(Map<String, Object> searchVo, Map<String, Object> data) throws Exception{

		HashMap<String, Object> slipLineMap = new HashMap<String, Object>();

		slipLineMap.put("SYST_LNCD", StrUtil.nullParam(searchVo.get("SYST_LNCD")));	//시스템언어코드
		slipLineMap.put("UPDT_USID", StrUtil.nullParam(searchVo.get("UPDT_USID")));	//수정작업자
		slipLineMap.put("SLIP_NUMB", StrUtil.nullParam(searchVo.get("SLIP_NUMB")));	//전표번호
		slipLineMap.put("SLIP_LINE", StrUtil.nullParam(data.get("SLIP_LINE_NEW")));	//전표라인번호
		slipLineMap.put("OSLI_NUMB", StrUtil.nullParam(data.get("SLIP_NUMB")));		//상대전표번호
		slipLineMap.put("OSLI_LINE", StrUtil.nullParam(data.get("SLIP_LINE")));		//상대전표라인
		slipLineMap.put("ACCT_INTL", StrUtil.nullParam(data.get("ACCT_INTL")));		//계정코드
		slipLineMap.put("FORI_AMNT", StrUtil.nullParam(data.get("LAST_AMNT"))); 	//외화금액
		slipLineMap.put("SLIP_AMNT", StrUtil.nullParam(data.get("LAST_AMNT")));		//전표금액
		slipLineMap.put("DRCR_GUBN", "D");											//차대구분
		slipLineMap.put("LEDG_GUBN", StrUtil.nullParam(data.get("RPAY_LEDG_GUBN")));//출납방법
		slipLineMap.put("PRIN_ORDR", StrUtil.nullParam(data.get("PRIN_ORDR")));		//출력순서
		slipLineMap.put("SORT_ORDR", StrUtil.nullParam(data.get("SORT_ORDR")));		//정렬순서

		/*추가 파라미터*/
		slipLineMap.put("ACNT_NUMB", StrUtil.nullParam(data.get("RPAY_ACNT_NUMB"))); //계좌번호
		slipLineMap.put("BABR_CODE", StrUtil.nullParam(data.get("RPAY_BABR_CODE"))); //금융기관지점

		LOGGER.debug("-----------발생전표라인 생성 slipLineMap -------------");
		LOGGER.info(" " + slipLineMap);
		LOGGER.debug("--------------------------------------------------");

		tRMA0040Dao.processSLIP01(slipLineMap);

	}

	/**
	 * <pre>
	 * 정리내역 생성 및 호출
	 * </pre>
	 *
	 * @param Map searchVo 
	 * @param Map<String, Object> data 
	 * @return
	 * @throws Exception
	 */
	private void creatSlipLineCr(Map<String, Object> searchVo, Map<String, Object> data) throws Exception{

		HashMap<String, Object> slipLineMap = new HashMap<String, Object>();

		slipLineMap.put("SYST_LNCD", StrUtil.nullParam(searchVo.get("SYST_LNCD")));	//시스템언어코드
		slipLineMap.put("UPDT_USID", StrUtil.nullParam(searchVo.get("UPDT_USID")));	//수정작업자
		slipLineMap.put("SLIP_NUMB", StrUtil.nullParam(searchVo.get("SLIP_NUMB")));	//전표번호
		slipLineMap.put("SLIP_LINE", StrUtil.nullParam(data.get("SLIP_LINE_NEW")));	//전표라인번호
		slipLineMap.put("ACCT_UNIT", StrUtil.nullParam(data.get("ACCT_UNIT")));		//회계단위
		slipLineMap.put("ACCT_GUBN", StrUtil.nullParam(data.get("ACCT_GUBN")));		//회계구분_사업장
		slipLineMap.put("ACCT_INTL", StrUtil.nullParam(data.get("RPAY_ACCT_INTL")));	//계정과목코드 OR 분개코드
		slipLineMap.put("USEX_DEPT", StrUtil.nullParam(searchVo.get("GBL_DEPTCD")));	//정리부서(로그인부서)	
		slipLineMap.put("CSTC_CODE", StrUtil.nullParam(data.get("CSTC_CODE")));		//코스트센터코드
		slipLineMap.put("DRCR_GUBN", "C");											//차대구분
		slipLineMap.put("CURR_GUBN", "KRW");										//통화구분
		slipLineMap.put("EXCH_RATE", "1");											//환율
		slipLineMap.put("FORI_AMNT", StrUtil.nullParam(data.get("LAST_AMNT"))); 	//외화금액
		slipLineMap.put("SLIP_AMNT", StrUtil.nullParam(data.get("LAST_AMNT")));		//전표금액
		slipLineMap.put("OSLI_NUMB", "");							//상대전표번호
		slipLineMap.put("OSLI_LINE", "");							//상대전표순번
		slipLineMap.put("BUDG_GUBN", StrUtil.nullParam(data.get("BUDG_GUBN")));		//예산구분
		slipLineMap.put("PROJ_CODE", StrUtil.nullParam(data.get("PROJ_CODE")));		//프로젝트코드
		slipLineMap.put("BGRQ_NUMB", StrUtil.nullParam(data.get("BGRQ_NUMB")));		//예산품의번호
		slipLineMap.put("BUDG_DEPT", StrUtil.nullParam(data.get("BUDG_DEPT")));		//예산부서코드
		slipLineMap.put("BUDG_YYMM", StrUtil.nullParam(data.get("BUDG_YYMM")));		//예산년월
		slipLineMap.put("BDSB_CODE", StrUtil.nullParam(data.get("BDSB_CODE")));		//예산과목코드
		slipLineMap.put("BDSP_CODE", StrUtil.nullParam(data.get("BDSP_CODE")));		//예산세목코드
		slipLineMap.put("REMK_NAME", StrUtil.nullParam(data.get("RPAY_REMK_NAME")));	//적요
		slipLineMap.put("EVID_DOCU", "");							//증빙종류(해당없음)
		slipLineMap.put("PAYX_YSNO", "1");							//출납처리여부
		slipLineMap.put("PAYX_DATE", StrUtil.nullParam(data.get("RPAY_PAYX_DATE")));	//지급일
		slipLineMap.put("LEDG_GUBN", StrUtil.nullParam(data.get("RPAY_LEDG_GUBN")));	//출납방법
		slipLineMap.put("BANK_INOU", StrUtil.nullParam(data.get("RPAY_BANK_INOU")));	//입출구분
		slipLineMap.put("PRIN_ORDR", StrUtil.nullParam(data.get("PRIN_ORDR")));			//출력순서
		slipLineMap.put("SORT_ORDR", StrUtil.nullParam(data.get("SORT_ORDR")));			//정렬순서

		/*추가 파라미터*/
		slipLineMap.put("CUST_CODE", StrUtil.nullParam(data.get("CUST_CODE"))); 	 //거래처
		slipLineMap.put("ACNT_NUMB", StrUtil.nullParam(data.get("RPAY_ACNT_NUMB"))); //계좌번호
		slipLineMap.put("BANK_GUBN", StrUtil.nullParam(data.get("RPAY_BANK_CODE"))); //금융기관
		slipLineMap.put("BABR_CODE", StrUtil.nullParam(data.get("RPAY_BABR_CODE"))); //금융기관지점
		slipLineMap.put("ISSU_DATE", StrUtil.nullParam(data.get("RPAY_ISSU_DATE"))); //발행일
		slipLineMap.put("MANA_NOXX", StrUtil.nullParam(data.get("RPAY_MANA_NOXX"))); //관리번호

		LOGGER.debug("-----------정리전표라인 생성 parameter -------------");
		LOGGER.info(" " + slipLineMap);
		LOGGER.debug("--------------------------------------------------");

		tRMA0040Dao.processSLIP02(slipLineMap);

	}

	/**
	 * <pre>
	 * 미불반제관리  전표삭제
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public String processDELETESLIP(Map searchVo, Map saveData) throws Exception {

		HashMap<String, Object> slipMap = new HashMap();
		int sCnt = 0;

		ArrayList<Map<String, Object>> ds = (ArrayList<Map<String, Object>>) saveData.get("dsTA_SLIPNT_SLIP");

		for (Map<String, Object> data : ds) {
			slipMap.put("SYST_LNCD", StrUtil.nullParam(searchVo.get("SYST_LNCD")));	//시스템언어코드
			slipMap.put("UPDT_USID", StrUtil.nullParam(searchVo.get("UPDT_USID")));	//수정작업자
			slipMap.put("SLIP_NUMB", StrUtil.nullParam(data.get("SLIP_NUMB"))); 	//전표번호
			LOGGER.info(" slipMap ++++++++++++  " + slipMap);
			tRMA0040Dao.processSLIP03(slipMap); //삭제

			sCnt++;
		}

		return String.valueOf(sCnt);
	}
}
