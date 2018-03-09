/**
 * core.erp.hat.service.HATF0090Service.java - <Created by Code Template generator>
 */
package core.erp.hat.service;

import java.util.Map;

/**
 * <pre>
 *	HATF0090Service - 출장신청/정산 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	박정윤
 * @since	2016.09.09
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	박정윤		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright NDS.(C) All right reserved.
 */
 
public interface HATF0090Service {

	/**
	 * <pre>
	 * 출장신청현황을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 출장신청현황
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;


	/**
	 * <pre>
	 * 여비정산현황을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 출장신청현황
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 외근정산현황을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 출장신청현황
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;

	
}