package core.erp.txm.service;

import java.util.Map;

/**
 * <pre>
 *	TXMA0040Service - 수출실적명세서 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	신민규		Initial Created.
 * 2016.08.08	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

public interface TXMC0060Service {

	/**
	 * <pre>
	 * 수출실적명세서(인적사항) 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 수출실적명세서(헤더) 처리
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processPROC00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 사용자 정보 자료 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;	
	
}
