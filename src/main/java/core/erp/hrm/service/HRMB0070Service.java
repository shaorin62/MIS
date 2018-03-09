package core.erp.hrm.service;

import java.util.Map;

/**
 * <pre>
 *	HRMB0070Service - 어학성적변경요청 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	박철영
 * @since	2016.07.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.07.04	박철영		Initial Created.
 * 2016.08.26	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HRMB0070Service {

	/**
	 * <pre>
	 * 인사기록변경요청 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 인사기록변경요청 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 현어학성적 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 현어학성적 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 변경요청내역 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 변경요청내역 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 파일 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 변경요청내역 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH04(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 인사기록변경요청 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData, Map searchVo) throws Exception;
	 
}