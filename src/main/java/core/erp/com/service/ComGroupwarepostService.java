package core.erp.com.service;

import java.util.Map; 											

/**
 * <pre>
 *	ComGroupwarepostService - 그룹웨어
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈  <isb@inbus.co.kr>
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


public interface ComGroupwarepostService {

	/**
	 * <pre>
	 * 공통팝업조회 
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processGWPOSTACTION(Map searchVo) throws Exception ;

}
