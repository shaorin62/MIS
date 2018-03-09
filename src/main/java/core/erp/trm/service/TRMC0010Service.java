package core.erp.trm.service;

import java.util.Map;


/**
 * <pre>
 *	FCMB0060Service - 차입금관리   메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.28	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface TRMC0010Service {

	/**
	 * <pre>
	 * 차입금관리  조회
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
	 * 차입금관리  조회
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
	 * 차입금관리  저장
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
	 * 차입금 거래내역 전표 생성
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC00(Map searchVo, Map saveData) throws Exception;
	/**
	 * <pre>
	 *  차입금 거래내역 전표 삭제 처리
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC01(Map searchVo, Map saveData) throws Exception;
}
