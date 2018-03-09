package core.erp.txm.service;

import java.util.Map;

/**
 * <pre>
 *	TXMC0170Service - 부가세전자신고
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 5.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 5.	황치웅		Initial Created.
 * 2016. 8.11.	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface TXMC0170Service {
	
	
	/**
	 * <pre>
	 * 부가세전자신고(인적사항)를 조회한다
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
	 * 부가세전자신고(1PAGE)를 조회한다
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 부가세전자신고(2PAGE)를 조회한다
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 부가세전자신고(과세표준명세, 면세수입금액)를 조회한다
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 부가가치세 공제감면 신고서 레코드 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH_V101_D2(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 부가가치세 가산세 신고서 레코드 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH_V101_D3(Map searchVo) throws Exception ;
	
	
	/**
	 * <pre>
	 * 부가세전자신고(기타신고서 여부)를 조회한다
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH04(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 부가가치세신고서 목록을 수정/저장/삭제한다.
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public String processSAVE00(Map searchVo, Map saveData) throws Exception;
	
	
}
