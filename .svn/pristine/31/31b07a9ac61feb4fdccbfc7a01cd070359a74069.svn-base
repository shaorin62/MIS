package core.erp.fam.service;

import java.util.Map;

/**
 * <pre>
 *	FAMG0020Service - 연결시산표 관리 Service Interface 
 * </pre>
 * 
 * @author	김기환
 * @since	2016.09.23
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.23	김기환		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

public interface FAMG0020Service {

	/**
	 * <pre>
	 * 연결재무제표 IF 마스터 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processSEARCH00(Map<String, Object> searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 연결재무제표 IF 상세 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processSEARCH01(Map<String, Object> searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료생성 내역을 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processSEARCH02(Map<String, Object> searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료생성
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	public Object processCREATE_DATA(Map<String, Object> searchVo) throws Exception;
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	public Object processSAVE_DATA(Map<String, Object> searchVo, Map<String, Object> saveData) throws Exception;
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료전송
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	public Object processTRAN_DATA(Map<String, Object> searchVo, Map<String, Object> saveData) throws Exception;
}