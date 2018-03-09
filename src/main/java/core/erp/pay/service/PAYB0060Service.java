/**
 * core.erp.pay.service.PAYB0060Service.java - <Created by Code Template generator>
 */
package core.erp.pay.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *	PAYB0060Service - 건강보험공제적용 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.19	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface PAYB0060Service {

	/**
	 * <pre>
	 * 건강보험납부 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 건강보험납부 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 건강보험공제적용 주민등록번호 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 건강보험납부 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH99(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 건강보험공제적용 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	 
}