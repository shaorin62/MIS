package core.erp.com.service.impl;

import java.util.HashMap; 
import java.util.LinkedHashMap;
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 
import org.springframework.util.StringUtils;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.com.service.ComHelpPopupService;

/**
 * <pre>
 *	ComHelpPopupServiceImpl - 공통팝업
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 10.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 10.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("ComHelpPopupService")
public class ComHelpPopupServiceImpl extends EgovAbstractServiceImpl implements ComHelpPopupService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComHelpPopupServiceImpl.class);

	@Resource(name="ComHelpPopupDao")
	private ComHelpPopupDao comHelpPopupDao;


	@SuppressWarnings("rawtypes")
	public Object processHelpFormDesign(Map searchVo) throws Exception {

		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_POPUPX", comHelpPopupDao.processHelpFormDesign(searchVo));
		return returnMap;
		
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object processHelpDataSearch(Map searchVo) throws Exception {
		
		LOGGER.debug("------ Popup : " + searchVo);
		
		Map<String, Object> searchUserList = new HashMap<String, Object>();

		int questnCnt = 0;
		int sSearchCol = Integer.parseInt(searchVo.get("sSEARCHCOL").toString());	
		
		String sQuery    = "";
		String[] params = StringUtils.commaDelimitedListToStringArray(searchVo.get("sSEARCHPARAM").toString());
		
		Object popupFormInfo = comHelpPopupDao.processHelpFormDesign(searchVo);	
		Map<String, Object> popupDataInfoMap = (Map<String, Object>) comHelpPopupDao.processHelpDataDesign(searchVo);
		
		String sParam = popupDataInfoMap.get("WHRE_ADDX").toString();
		String[] sParamWhere =  sParam.split(",");  		

		if (!popupDataInfoMap.isEmpty()) {
			
			sQuery += " " + (popupDataInfoMap.get("SECH_SYNX") == null ? "" : popupDataInfoMap.get("SECH_SYNX"));
			sQuery += " " + (popupDataInfoMap.get("FROM_SYNT") == null ? "" : popupDataInfoMap.get("FROM_SYNT"));	
			sQuery += " " + (popupDataInfoMap.get("WHRE_SYNT") == null ? "" : popupDataInfoMap.get("WHRE_SYNT"));

			sQuery += " AND " + sParamWhere[sSearchCol] +" LIKE '%" + searchVo.get("sSEARCHVALUE").toString().replaceAll("'", "''") + "%'";
			
			LOGGER.info("sSEARCHUSE : " + searchVo.get("sSEARCHUSE").toString());
			
			if (searchVo.get("sSEARCHUSE").toString().equals("Y")) { 
				sQuery += " " + (popupDataInfoMap.get("USYN_SYNX") == null ? "" : popupDataInfoMap.get("USYN_SYNX").toString());//dsCode.get("USYN_SYNX").toString().replaceAll("'", "'''"));
			}				

			sQuery += " " + (popupDataInfoMap.get("ADDT_SQLC") == null ? "" : popupDataInfoMap.get("ADDT_SQLC"));	
			sQuery += " " + (popupDataInfoMap.get("SORT_SYNX") == null ? "" : popupDataInfoMap.get("SORT_SYNX"));			
			
		}

		questnCnt = StringUtils.countOccurrencesOf(sQuery, "?");
		
		for(int idx = 0; idx < questnCnt; idx++) {
			
			if (idx < params.length) {
				sQuery = sQuery.replaceFirst("[?]", "'" + params[idx] + "'");
			} else {
				sQuery = sQuery.replaceFirst("[?]", "''");		//파라메터가 빈 경우 null값 처리.
			}
			
		}

		searchUserList.put("COMBOQUERY", sQuery);
		
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_POPUPX", popupFormInfo);
		returnMap.put("dsCommonCode", comHelpPopupDao.processHelpDataList(searchUserList));
		return returnMap;

    }	
		
	
}
