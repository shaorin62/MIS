package core.erp.com.service;

import java.util.Map;											

/**
 * <pre>
 *	ComExcelSampleService - 공통팝업
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
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
public interface ComExcelSampleService {

	/**
	 * <pre>
	 * 공통팝업조회 
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object getExcelSample(Map searchVo) throws Exception ;

}
