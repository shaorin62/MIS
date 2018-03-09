/**
 * core.erp.pay.service.PAYB0070Service.java - <Created by Code Template generator>
 */
package core.erp.pay.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *	PAYB0070Service - 국민연금공제적용 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.25
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.25	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface PAYB0070Service {

	/**
	 * <pre>
	 * 국민연금납부 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 국민연금납부 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 국민연금공제적용 주민등록번호 조회
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 국민연금공제적용 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH99(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 국민연금공제적용 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 국민연금 미수금을 처리한다.
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 국민연금납부 자료
	 * @return 국민연금납부 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSAVE01(Map searchVo) throws Exception;
	

}