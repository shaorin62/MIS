package core.erp.com.service;

import java.util.Map;

/**
 * <pre>
 *	ComMyTodayService - 일정관리 Service Interface 
 * </pre>
 * 
 * @author	김기환
 * @since	2016.11.16
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.11.16	김기환			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
public interface ComMyTodayService {
	/**
     * <pre>
     * 일정관리 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
	public Object processSEARCH00(Map<String, Object> dataMap) throws Exception ;
	
	/**
     * <pre>
     * 일정관리 저장
     * </pre>
     *
     * @param  조회 파라미터
     * @return 
     * @throws Exception 예외가 발생한 경우
     */
	public void processSAVE00(Map<String, Object> dataMap, Map<String, Object> saveData) throws Exception;
}
