package core.erp.trm.service;

import java.util.Map;											

                                                                                             
/**
 * <pre>
 *	TRME0030Service -  법인카드 청구내역 대사 및 전표처리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 27
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 27.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface TRME0030Service {
	
	/**
	 * <pre>
	 * 법인카드 청구내역 대사 및 전표처리 조회 !!
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
	 * 법인카드 청구내역 대사 및 전표처리  저장 
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

	
	/**
	 * <pre>
	 * 법인카드 청구내역 이전카드번호로 정리 
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC10(Map searchVo) throws Exception;

	/**
	 * <pre>
	 * 법인카드 전표생성
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processPROC00(Map searchVo, Map saveData) throws Exception;
	

	/**
	 * <pre>
	 * 법인카드 전표삭제
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC01(Map searchVo) throws Exception;

	/**
	 * <pre>
	 * 법인카드 청구내역 가져오기
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC02(Map searchVo) throws Exception;
		

}
