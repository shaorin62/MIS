/**
 * core.erp.com.web.ComMultiLangController.java
 */
package core.erp.com.web;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.com.service.ComMultiLangService;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	ComMultiLangController - 다국어적용 처리를 위한 컨트롤러 클래스
 * <p><b>NOTE : </b>시스템 설정을 다국어 지원되도록 설정하였을 경우에 작동합니다.</p>
 * </pre>
 * 
 * @author	jang.sh <jsh@inbus.co.kr>
 * @since	2016. 12. 14.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.14.	jang.sh		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComMultiLangController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ComMultiLangController.class);
	
	@Resource(name = "comMultiLangService")
	private ComMultiLangService langService;
	
	/**
	 * <pre>
	 * Form에 다국어적용을 위하여 컴포넌트의 라벨 등의 정보를 언어설정에 맞게 변환하여 클라이언트로 전달
	 * </pre>
	 *
	 * @param coreRequest - Nexacro Request
	 * @return 다국어 적용된 내용
	 * @throws Exception 예외 발생 시
	 */
	@RequestMapping(value = "/core/erp/com/ComMultiLang_translateLang.do")
	public ModelAndView processTranslateLanguage(CoreRequest coreRequest) throws Exception {
		
		ModelAndView mav = new ModelAndView("coreReturnView");
        CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

        try {
            
            // 클라이언트로 데이터 전달
            coreResultData.setReturnDataMap(langService.processTranslateLanguage(coreRequest.getSaveDataSetAll()));
            coreResultData.setResultMessageSuccessSelect();
            
        } catch(Exception e) {
            LOGGER.error("ComMultiLangController - processTranslateLanguage : " + e.getMessage());
            coreResultData.setResultMessageFailSelect(e);
        }

        mav.addObject("FORM_DATA", coreResultData);
        return mav;
        
    }
	
	
	
}
