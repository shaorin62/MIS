/**
 * core.erp.com.web.ComMainNoticeController.java
 */
package core.erp.com.web;

import java.util.Map;

import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.com.service.ComMainNoticeService;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	ComMainNoticeController - 메인 화면 공지사항 구성을 위한 기본 컨트롤러
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	박정훈
 * @since	2016. 11. 21.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 11. 21.	박정훈		Initial Created.
 * 2016. 12. 04		jsh			일반 공지사항 조회 추가
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComMainNoticeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ComMainNoticeController.class);
    
    @Resource(name = "ComMainNoticeService")
    private ComMainNoticeService mainService = null;
       
    /**
     * <pre>
     * 메인화면 그룹웨어 공지사항 목록을 조회한다.
     * </pre>
     *
     * @param coreRequest - Nexa 요청 객체
     * @return 처리 결과
     * @throws Exception 예외 발생 시
     */
    @RequestMapping(value = "/core/erp/com/ComNotice_GWNotice.do")
    public ModelAndView processGetGWNotice(CoreRequest coreRequest) throws Exception {
                        
        ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
		
		try {
			
			Map dataMap = coreRequest.getMapVariableList();
			LOGGER.info("dataMap : " + dataMap.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) mainService.processGetGWNotice(dataMap));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			LOGGER.error("processGetGWNotice : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
       
    }
    
    /**
     * <pre>
     * 메인화면 솔루션 시스템 공지사항 목록을 조회한다.
     * </pre>
     *
     * @param coreRequest - Nexa 요청 객체
     * @return 처리 결과
     * @throws Exception 예외 발생 시
     */
    @RequestMapping(value = "/core/erp/com/ComNotice_NoticeList.do")
    public ModelAndView processNoticeList(CoreRequest coreRequest) throws Exception {
    	
    	ModelAndView mav = new ModelAndView("coreReturnView");
    	CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
    	
    	try {
    		
    		Map dataMap = coreRequest.getMapVariableList();
    		coreResultData.setReturnDataMap((Map<String, Object>) mainService.processNoticeList(dataMap));
    		coreResultData.setResultMessageSuccessSelect();
    		
    	} catch(Exception e) {
    		LOGGER.error("processGetGWNotice : " + e.getMessage());
    		coreResultData.setResultMessageFailSelect(e);
    	}
    	
    	mav.addObject("FORM_DATA", coreResultData);
    	return mav;
    	
    }
	
    
    
    
}
