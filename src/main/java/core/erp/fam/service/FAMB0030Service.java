/**
 * core.erp.tmm.service.FAMB0030Service.java - <Created by Code Template generator>
 */
package core.erp.fam.service;

import java.util.Map;

/**
 * <pre>
 *	FAMB0030Service - 메시지 관리 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	ㅋㅋㅋ
 * @since	2016.06.24
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	ㅋㅋㅋ		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface FAMB0030Service {

	/**
	 * <pre>
	 * 전표마스터
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전표마스터
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 전표라인
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전표라인
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;	
	
	
	/**
	 * <pre>
	 * 전표라인 관리항목
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전표라인 관리항목
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;	
	
	/**
	 * <pre>
	 * 전표라인 부가세
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전표라인 부가세
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;	
	
	/**
	 * <pre>
	 * 계정과목
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 계정과목
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH10(Map searchVo) throws Exception ;	
	
	/**
	 * <pre>
	 * 계정과목별 관리항목 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 계정과목별 관리항목 조회
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH11(Map searchVo) throws Exception ;	
	
	/**
	 * <pre>
	 * 계정과목별 관리항목 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 계정과목별 관리항목 조회
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH13(Map searchVo) throws Exception ;	

	/**
	 * <pre>
	 * 기준환율 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 계정과목별 관리항목 조회
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH14(Map searchVo) throws Exception ;	

	/**
	 * <pre>
	 * 예산잔액 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 계정과목별 관리항목 조회
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH15(Map searchVo) throws Exception ;	

	/**
	 * <pre>
	 * 전표일자별 마감정보 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 계정과목별 관리항목 조회
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processSEARCH16(Map searchVo) throws Exception ;	

	/**
	 * <pre>
	 * 귀속부서별, 계정별 코스트센터 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전자결재 헤더 조회
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processSEARCH17(Map searchVo) throws Exception ;	

	/**
	 * <pre>
	 * 전표  인쇄 - 마스터 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 계정과목별 관리항목 조회
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPRINT00(Map searchVo) throws Exception ;	
	
	/**
	 * <pre>
	 * 전표  인쇄 - 분개정보 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 계정과목별 관리항목 조회
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPRINT01(Map searchVo) throws Exception ;	
	
	/**
	 * <pre>
	 * 전표 관련 테이블 저장,수정 삭제한다 
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processSAVE00(Map saveData) throws Exception;	

	/**
	 * <pre>
	 * 전자결재 연동자료 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processSAVE99(Map saveData, Map searchVo) throws Exception;	
	
	 
}