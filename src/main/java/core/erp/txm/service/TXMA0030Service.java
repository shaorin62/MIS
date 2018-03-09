package core.erp.txm.service;

import java.util.Map;

/**
 * <pre>
 *	TXMA0030Service - 부가세자료집계처리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 3.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 3.	황치웅		Initial Created.
 * 2016. 8. 3.	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface TXMA0030Service {
	
	/**
	 * <pre>
	 * 부가세자료집계처리 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 부가세자료집계처리 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 부가세자료집계처리 목록을 수정/저장/삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData, Map searchVo) throws Exception;
	
}
