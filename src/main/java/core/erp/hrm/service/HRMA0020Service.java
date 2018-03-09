/**
 * core.erp.hrm.service.HRMA0020Service.java - <Created by Code Template generator>
 */
package core.erp.hrm.service;

import java.util.Map;

/**
 * <pre>
 *	HRMA0020Service - 조직개편기초등록 메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	고민주
 * @since	2016.10.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.21	고민주		Initial Created.
 * 2016.12.06	안윤준		수정.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface HRMA0020Service {

	/**
	 * <pre>
	 * 조직개편 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 조직개편 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 조직개편기초등록 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

}