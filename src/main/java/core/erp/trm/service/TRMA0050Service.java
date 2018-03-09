package core.erp.trm.service;

import java.util.Map;


/**
 * <pre>
 *	TRMA0050Service - 지급(출납)관리   메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface TRMA0050Service {

	/**
	 * <pre>
	 * 지급(출납)관리  조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 지급(출납)관리  저장
	 * </pre>
	 *
	 * @param SearchVo, saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processSAVE00(Map<String, Object> searchVo, Map<String, Object> saveData) throws Exception;	
	
	/**
	 * <pre>
	 * 지급(출납)관리  계좌 초기화(삭제)
	 * </pre>
	 *
	 * @param searchVo, saveData
	 * @return
	 * @throws Exception
	 */
	public void processDELETE00(Map<String, Object> searchVo, Map<String, Object> saveData) throws Exception;	
}
