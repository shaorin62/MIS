package core.erp.trm.service;

import java.util.Map;


/**
 * <pre>
 *	TRMA0040Service - 미불반제관리  메뉴 서비스 인터페이스
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
 * 2016.10.04	김기환		자동반제 수정.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface TRMA0040Service {

	/**
	 * <pre>
	 * 미불반제관리 발생내역 조회
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
	 * 미불반제관리 정리내역 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 미불(반제) 필수 입력 관리항목 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 미불반제관리  전표처리
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processCREATESLIP(Map SearchVo,Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 미불반제관리  전표삭제
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processDELETESLIP(Map SearchVo,Map saveData) throws Exception;

}
