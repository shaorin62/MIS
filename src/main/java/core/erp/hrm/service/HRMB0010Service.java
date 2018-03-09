/**
 * core.erp.hrm.service.HRMB0010Service.java - <Created by Code Template generator>
 */
package core.erp.hrm.service;

import java.util.Map;

/**
 * <pre>
 *	HRMB0010Service - 인사정보 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	박철영
 * @since	2016.07.07
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.07.07	박철영		Initial Created.
 * 2016.08.22	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HRMB0010Service {

	/**
	 * <pre>
	 * 인사기본정보 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 인사기본정보 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 인사정보 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	 
}