/**
 * core.erp.pay.service.PAYB0110Service.java - <Created by Code Template generator>
 */
package core.erp.pay.service;

import java.util.Map;

/**
 * <pre>
 *	PAYB0110Service - 연차수당관리 메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.10.24
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.24	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface PAYB0110Service {

	/**
	 * <pre>
	 * 연차수당관리 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 연차수당관리 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 연차불러오기(퇴직연차) 목록을 조회한다. 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 연차불러오기(퇴직연차) 목록을 조회한다. 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 연차수당관리 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 퇴직자의 급여기본정보 연차수당금액 갱신한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE01(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 연차불러오기시 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processDELETE00(Map searchVo) throws Exception;

}