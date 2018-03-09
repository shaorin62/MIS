package core.erp.fsm.service;

import java.util.Map;											

                                                                                             
/**
 * <pre>
 *	FSMB0020P01Service - 자산 폐기 엑셀 일괄 등록
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	권미영
 * @since	2016. 08. 11.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 08. 11.	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface FSMB0020P01Service {

	/**
	 * <pre>
	 * 자산 폐기 엑셀 일괄 등록
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

}
