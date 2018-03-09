/**
 * core.erp.tmm.service.FAMA0010Service.java - <Created by Code Template generator>
 */
package core.erp.fam.service;

import java.util.Map;

/**
 * <pre>
 *	FAMA0010Service - 본사정보 등록 화면
 * </pre>
 * 
 * @author	오혜성
 * @since	2017.07.13
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		  Modifier		Comment
 * ====================================================
 * 2016.07.12	오혜성		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface FAMA0010Service {

	/**
	 * <pre>
	 * 본사 정보 목록을 조회한다
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통메시지 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 본사 정보를 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	 
}