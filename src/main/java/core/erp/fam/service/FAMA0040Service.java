/**
 * core.erp.fam.service.FAMA0040Service.java - <Created by Code Template generator>
 */
package core.erp.fam.service;

import java.util.Map;

/**
 * <pre>
 *	FAMA0040Service - 거래처정보조회 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	황치웅
 * @since	2016.06.23
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.23	황치웅		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface FAMA0040Service {

	/**
	 * <pre>
	 * 감가상각율 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 감가상각율 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	 
}