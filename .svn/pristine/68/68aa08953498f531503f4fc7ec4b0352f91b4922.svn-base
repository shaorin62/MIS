/**
 * core.erp.tmm.web.PDMA0020Controller.java - <Created by Code Template generator>
 */
package core.erp.pdm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.pdm.service.PDMA0020Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	PDMA0020Controller - 계약서 관리 화면
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */
 
@Controller
public class PDMA0020Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PDMA0020Controller.class);

	/**
	 * 제작업종분류관리 메뉴 서비스 클래스
	 */
	@Resource(name="PDMA0020Service")
	private PDMA0020Service service;

    /**
	 * 제작 계약서 화면 상단 계약서를 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMA0020/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMA0020_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	
	
	  /**
		 * 제작 계약서를 생성하기 위한 하단 기초 데이터를 조회한다.
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMA0020/SEARCH01"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMA0020_SEARCH01.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSEARCH01(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {
				Map searchVo = coreRequest.getMapVariableList();
				logger.info("searchVo : " + searchVo.toString());
				
				coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH01(searchVo));
				coreResultData.setResultMessageSuccessSelect();

			} catch(Exception e) {
				logger.error("processSEARCH01 : " + e.getMessage());
				coreResultData.setResultMessageFailSelect(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		} 
		
		/**
		 * 상단 계약서 상세 내역 조호 ㅣ
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMA0020/SEARCH02"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMA0020_SEARCH02.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSEARCH02(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {
				Map searchVo = coreRequest.getMapVariableList();
				logger.info("searchVo : " + searchVo.toString());
				
				coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH02(searchVo));
				coreResultData.setResultMessageSuccessSelect();

			} catch(Exception e) {
				logger.error("processSEARCH02 : " + e.getMessage());
				coreResultData.setResultMessageFailSelect(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		} 
		
		
		/**
		 * <pre>
		 * 제작 계약서 데이터를 수정한다.
		 * </pre>
		 *
		 * @param param - 저장, 수정 또는 삭제할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMA0020_SAVE00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {

				service.processSAVE00(coreRequest.getSaveDataSetAll());
				coreResultData.setResultMessageSuccessSave();

			} catch(Exception e) {
				logger.error("processSAVE00 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		}
		
		/**
		 * <pre>
		 * 제작 계약서 데이터 하단의 내역을 저장한다.
		 * </pre>
		 *
		 * @param param - 저장, 수정 또는 삭제할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMA0020_SAVE01.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSAVE01(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {

				service.processSAVE01(coreRequest.getSaveDataSetAll());
				coreResultData.setResultMessageSuccessSave();

			} catch(Exception e) {
				logger.error("processSAVE01 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		}
	
		
		/**
		 * <pre>
		 * 제작 계약서 생성 버튼 클릭 계약서 생성 로직
		 * </pre>
		 *
		 * @param param - 저장, 수정 또는 삭제할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMA0020_SAVE02.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSAVE02(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {

				service.processSAVE02(coreRequest.getSaveDataSetAll());
				coreResultData.setResultMessageSuccessSave();

			} catch(Exception e) {
				logger.error("processSAVE02 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		}
		
		/**
		 **********************************************************************************
		 * <pre>
		 * 제작 계약서관리 출력 조회 
		 * </pre>
		 *
		 * @param param - 저장, 수정 또는 삭제할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 * *********************************************************************************
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMA0020_PRINT00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processPRINT00(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {

				Map searchVo = coreRequest.getMapVariableList();
				logger.info("searchVo : " + searchVo.toString());
				
				System.out.println("=============================>1111");
				coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT00(coreRequest.getSaveDataSetAll()));
				coreResultData.setResultMessageSuccessSelect();	

			} catch(Exception e) {
				logger.error("processPRINT00 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		}
		
		/**
		 * <pre>
		 * 이메일 발송
		 * </pre>
		 *
		 * @param param - 저장, 수정 또는 삭제할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMA0020_SEND00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSEND00(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {

				Map searchVo = coreRequest.getMapVariableList();
				
				//계약서 파일 메일보내기
				service.processSEND00(coreRequest.getSaveDataSetAll(), searchVo);
				
				coreResultData.setResultMessageSuccessSave();

			} catch(Exception e) {
				logger.error("processSEND00 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		}
		
}
