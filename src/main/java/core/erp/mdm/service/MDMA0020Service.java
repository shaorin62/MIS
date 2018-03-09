/**
 * core.erp.mdm.service.MDMA0020Service.java - <Created by Code Template generator>
 */
package core.erp.mdm.service;

import java.util.Map;

/**
 * <pre>
 *	MDMA0020Service - 수수료 일괄청약(신규) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.12.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date				   Modifier	     	Comment
 * ====================================================
 * 2016.12.04			최제현			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MDMA0020Service {

	/**
	 * <pre>
	 * 수수료일괄청약 조회
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
	 * 확정처리
	 * </pre>
	 *
	 * @param param - 저장할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map searchVo,Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 확정처리
	 * </pre>
	 *
	 * @param param - 저장할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE01(Map searchVo) throws Exception;

	
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
	public Object processDELETE00(Map searchVo) throws Exception;

}
