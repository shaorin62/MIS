package core.erp.com.web;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;
import core.ifw.utl.CryptSHA;
import core.ifw.utl.DateTime;

/**
 * <pre>
 *	ComReturnServerTime - 서버의 시간을 단말에 전송
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석두 <email@inbus.co.kr>
 * @since	2014. 10. 13.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 13.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComReturnServerTime {

	private static final Logger logger = LoggerFactory.getLogger(ComReturnServerTime.class);

	/**
	 * <pre>
	 *  서버의 시간을 단말로 리턴 처리
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/ComReturnServerTime_RETURNDT.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processGetServerDateTime(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			String sServerTime = "";
			Map searchVo = coreRequest.getMapVariableList();

			if (searchVo.get("sKind").equals("DATE")) {
				sServerTime = DateTime.getDateString("yyyyMMdd");
			} else if (searchVo.get("sKind").equals("TIME")) {
				sServerTime = DateTime.getShortTimeString();
			} else {
				sServerTime = DateTime.getDateString("yyyyMMddHHmmss");
			}
			
			coreResultData.addVariableList("sSERVERDATETIME", sServerTime);
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
			
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
		
	}

	/**
	 * <pre>
	 *  비밀번호 암호화 반환
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/ComReturnEncryptPassword_RETURNPW.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processGetEncrypePassword(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			String sEncryptPW = CryptSHA.encrypt256((String) searchVo.get("sPassword"));
			coreResultData.addVariableList("sENCRYPEPWD", sEncryptPW);
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
			
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
		
	}

}