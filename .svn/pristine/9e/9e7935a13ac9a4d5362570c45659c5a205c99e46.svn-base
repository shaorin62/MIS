package core.erp.com.web;

import java.util.Map;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.com.service.ComExcelSampleService;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	FileManagerController - 파일 업로드/다운로드를 관리하기 위한 컨트롤러
 * </pre>
 * 
 * @author	Genie. J. <jsh@inbus.co.kr>
 * @since	2014. 11. 14
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 11. 14.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 * comFile_UploadSingle 은 사용 안함.. 테스트용도로만 사용
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComExcelSampleController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComHelpPopupController.class);

	@Resource(name="ComExcelSampleService")
	private ComExcelSampleService service;
	
	/**
	 * <pre>
	 * 단일 첨부파일을 업로드 한다.
	 * <b>NOTE : </b>다운로드 받을 첨부파일의 저장 경로, 파일명을 파라미터로 전달하여야 한다.
	 * </pre>
	 * @param request HTTP 요청 객체
	 * @param reponse HTTP 응답 객체
	 * @throws Exception 예외 발생 시
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping("/core/erp/com/comExcel_GetExcelSample.do")
	public ModelAndView getExcelSample(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			LOGGER.info("searchVo : " + searchVo.toString());

			coreResultData.setReturnDataMap((Map<String, Object>) service.getExcelSample(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			LOGGER.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	

	

	
}
