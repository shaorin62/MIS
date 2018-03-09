package core.erp.com.service.impl;

import java.util.Map;	 			 				 			

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        


/**
 * <pre>
 *	comPostPopupDao - 공통팝업 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임서빈 <isb@inbus.co.kr>
 * @since	2014. 10. 6.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 6.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("ComPostPopupDao")
public class ComPostPopupDao extends CmmBaseDAO  {

	/**
	 * <pre>
	 * 공통팝업 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("PKG_POSTPOPUP.SP_POSTPOPUP_SEARCH00", searchVo);
	}


}
