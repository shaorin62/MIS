/**
 * core.erp.hrm.service.HATE0040Service.java - <Created by Code Template generator>
 */
package core.erp.hat.service;

import java.util.Map;

/**
 * <pre>
 *	HATE0040Service - 월근태현황 등록 서비스 인터페이스
 * </pre>
 * 
 * @author	이창운
 * @since	2016.09.13
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.13	이창운		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HATE0040Service {

	/**
	 * <pre>
	 * 월근태현황 내역을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 월근태현황  내역
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;	 

	 /**
	  * HATE0040 결재해더 내역을 저장삭제한다.
	  * @param param - 저장할 정보가 담긴 Map 객체
	  * @return 처리건수
	  * @exception Exception 예외
	  */
	 @SuppressWarnings("rawtypes")
	 public String processSAVE00(Map saveData) throws Exception ;
}