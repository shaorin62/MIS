/**
 * core.erp.tmm.service.TMMA0010Service.java - <Created by Code Template generator>
 */
package core.erp.tmm.service;

import java.util.Map;

/**
 * <pre>
 *	TMMA0010Service - 공통코드관리(신규) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	최흥규
 * @since	2016.06.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.29	최흥규		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface TMMA0010Service {

	/**
	 * <pre>
	 * 공통코드마스터 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 공통코드관리(신규) 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	 
}