/**
 * core.erp.tmm.service.PACA0022Service.java - <Created by Code Template generator>
 */
package core.erp.pac.service;

import java.util.Map;

/**
 * <pre>
 *	PACA0022Service - 제작 전자세금계산서 인증서관리
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.11.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.08	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 
public interface PACA0022Service {

	/**
	 * <pre>
	 * 제작 전자세금계산서 인증서관리
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	

	/**
	 * <pre>
	 *  제작 전자세금계산서 인증서 관리 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	
	
}


 