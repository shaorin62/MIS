/**
 * core.erp.mdm.service.MDMA0010Service.java - <Created by Code Template generator>
 */
package core.erp.mdm.service;

import java.util.Map;

/**
 * <pre>
 *	MDMA0010Service - 전파 일괄청약(신규) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.01
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date				   Modifier	     	Comment
 * ====================================================
 * 2016.11.01			최제현			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MDMA0010Service {

	/**
	 * <pre>
	 * 소재별운행현황과 광고신탁집계표를 조인해 조인한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 소재별운행현황 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 등록 일괄청약 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 소재별운행현황 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 소재별 운행현황을 저장한다.
	 * </pre>
	 *
	 * @param param - 저장할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 광고신탁집계표를 저장한다.
	 * </pre>
	 *
	 * @param param - 저장할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE01(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 전파청약테이블에 저장한다(일괄청약)
	 * </pre>
	 *
	 * @param param - 저장할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE02(Map saveData) throws Exception;
	
	
	/**
	 * <pre>
	 * 임시테이블데이터삭제
	 * </pre>
	 *
	 * @param param - 저장할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processDELETE00(Map saveData) throws Exception;

}
