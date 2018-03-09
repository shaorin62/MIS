package core.erp.yea.service;

import java.util.Map;

/**
 * <pre>
 *	YEAA0070_2015Service - 연말정산처리 메뉴 서비스 인터페이스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.31.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.10.31.	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface YEAA0070_2015Service {

	/**
	 * <pre>
	 * 연말정산처리를 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 직급호봉표 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 연말정산처리 상세 내역을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 직급호봉표 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 소득공제신고서를 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 직급호봉표 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processREPORT00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 원천징수영수증을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 직급호봉표 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processREPORT01(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 기부금명세서를 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 직급호봉표 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processREPORT02(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 의료비명세서를 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 직급호봉표 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processREPORT03(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 원천징수부를 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 직급호봉표 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processREPORT04(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 연말정산처리 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData, Map searchVo) throws Exception;

	/**
	 * <pre>
	 * 연말정산처리  부양가족 처리
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processPROC00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 연말정산처리  근로소득 처리
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processPROC01(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 연말정산처리 연말정산 처리한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processPROC02(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 연말정산처리  입력마감 처리한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processPROC03(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 연말정산처리  확정 처리한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processPROC04(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 연말정산처리 PDF자료업로드 처리한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processPROC07(Map saveData) throws Exception;
	
}