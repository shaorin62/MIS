package core.erp.trm.service;

import java.util.Map;											

                                                                                             
/**
 * <pre>
 *	TRMA0060Service -  채권채무상계관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	권미영
 * @since	2016 11. 11
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 11. 11.	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface TRMA0060Service {
	
	/**
	 * <pre>
	 * 채권채무내역 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 채권채무 상계전표생성
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processPROC00(Map searchVo, Map saveData) throws Exception;
	
}
