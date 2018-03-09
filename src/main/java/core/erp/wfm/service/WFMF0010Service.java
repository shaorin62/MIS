/**
 * core.erp.hrm.service.WFMF0010Service.java - <Created by Code Template generator>
 */
package core.erp.wfm.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *	WFMF0010Service - 전산자원관리 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	김용만
 * @since	2016.09.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.08	김용만		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface WFMF0010Service {

	/**
	 * <pre>
	 * 전산자원관리 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전산자원관리 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 전산자원관리 전월데이터유무를 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전산자원관리 전월데이터유무
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;

	
	/**
	 * <pre>
	 * 전산자원관리 키값 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전산자원관리 키값 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	

	/**
	 * <pre>
	 * 전산자원관리 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 전산자원목록 자료
	 * @return 전산자원관리 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processSAVE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 전산자원관리 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 전산자원목록 자료
	 * @return 전산자원관리 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE01(Map saveData) throws Exception;
	
}