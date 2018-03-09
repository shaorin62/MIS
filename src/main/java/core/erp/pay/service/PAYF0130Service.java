package core.erp.pay.service;

import java.util.Map;
 
/**
 * <pre>
 *	PAYF0130Service - 퇴직연금납입현황 메뉴 서비스 인터페이스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수
 * @since	2016. 9. 12.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 12.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface PAYF0130Service {

	/**
	 * <pre>
	 * 퇴직연금납입금 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 퇴직연금납입금 목록
	 * @ - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 퇴직연금납입금 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 퇴직연금납입금 목록
	 * @ - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;

}