/**
 * core.erp.pay.service.PAYB0170Service.java - <Created by Code Template generator>
 */
package core.erp.pay.service;

import java.util.Map;

/**
 * <pre>
 *	PAYB0170Service - 급여처리 메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.27	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface PAYB0170Service {

	/**
	 * <pre>
	 * 급여 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 급여 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 급여상세 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 급여상세 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	/**
	 * <pre>
	 * 급여처리 공제정보을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 급여처리 공제정보
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 인사변동사항을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 인사변동사항
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 급여대상자를 생성한다(일할)
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 급여 자료
	 * @return 급여처리 마스터
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processPROC00(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 급여를 처리한다(급여계산, 급여삭제)
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 급여 자료
	 * @return 급여처리 마스터
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processPROC01(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 급여대상자를 삭제 처리한다
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 급여 자료
	 * @return 급여처리 마스터
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processPROC02(Map saveData) throws Exception;

}