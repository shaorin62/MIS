package core.erp.gw.web;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.gw.model.GwExtInfo;
import core.erp.gw.service.ApprovalService;
import core.erp.gw.service.RsApprovalService;
import core.erp.gw.util.ComUtil;
import core.erp.gw.util.NdsMessageException;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	ApprovalController - 결재 상신/결재 정보 리턴
 * </pre>
 * 
 * @author	
 * @since	2016. 08. 25
 * @version	1.0
 * 
 */
@Controller
public class ApprovalController {

	/** Logger init. */
	private static final Logger logger = LoggerFactory.getLogger(ApprovalController.class);
	
	@Resource(name="ApprovalService")
	private ApprovalService approvalService;
	
	@Resource(name="RsApprovalService")
	private RsApprovalService rsApprovalService;
	
	/**
	 * 업무시스템에서 그룹웨어로 데이터 전송
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/core/erp/gw/gw_sendApproval.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView sendApproval(CoreRequest coreRequest, ModelMap model) throws Exception 
	{

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			approvalService.sendApprovalData(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();
			
		} catch(NdsMessageException e) {
			logger.error("NdsMessageException sendApproval : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		} catch(Exception e) {
			logger.error("sendApproval : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	/**
	 * 그룹웨어에서 업무시스템으로 데이터 전송
	 * @param response
	 * @param request
	 * @throws Exception
	 */
	@RequestMapping(value = "/core/erp/gw/rsApproval.do")
	@SuppressWarnings("rawtypes")
	public void responseApproval(HttpServletResponse response , HttpServletRequest request) throws Exception {
		try {
			
			GwExtInfo info = rsApprovalService.responseApprovalData(response,request);
			ComUtil.sendResult(response, 0, "");
			
		} catch(NdsMessageException e) {
			logger.error("NdsMessageException responseApproval : " + e.getMessage());	
		} catch(Exception e) {
			logger.error("responseApproval : " + e.getMessage());
		}
	}
	
}//end class