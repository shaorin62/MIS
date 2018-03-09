package core.erp.txm.service;

import java.util.Map;

/**
 * <pre>
 *	TXMC0160Service - 부가가치세신고서
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 5.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 5.	황치웅		Initial Created.
 * 2016. 8.11.	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface TXMC0160Service {
	
	
	/**
	 * <pre>
	 * 부가가치세신고서(1페이지) 목록을 조회한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 부가가치세신고서 목록을 처리한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processPROC00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 부가가치세신고서 목록을 수정/저장/삭제한다.
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	
	
}
