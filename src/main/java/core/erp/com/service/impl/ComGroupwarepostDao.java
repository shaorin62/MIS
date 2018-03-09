package core.erp.com.service.impl;

import java.util.Map;	 			 				 			

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        


/**
 * <pre>
 *	ComGroupwarepostDao - 그룹웨어
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
@Repository("ComGroupwarepostDao")
public class ComGroupwarepostDao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

	/**
	 * <pre>
	 * 공통팝업 조회
	 * </pre>
	 *
	 * @param DATAVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processGWPOSTACTION(Map searchVo) throws Exception {
 
		return insert("PKG_GW_POSTPROC.SP_POSTACTION", searchVo);

	}


}
