package core.erp.com.service;

import java.util.Map;

/**
 * <pre>
 *	ComMainNoticeService - 그룹웨어 공지사항 Service Interface 
 * </pre>
 * 
 * @author	박정훈
 * @since	2016.11.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.11.21	박정훈			Initial Created.
 * 2016.12.04	jsh				일반 공지사항 조회 추가
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
public interface ComMainNoticeService {
	
	/**
     * <pre>
     * 그룹웨어 공지사항 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
	public Object processGetGWNotice(Map<String, Object> dataMap) throws Exception ;
	
	
	/**
	 * <pre>
	 * 솔루션 시스템의 공지사항 목록을 조회한다.
	 * </pre>
	 *
	 * @param dataMap 조회조건
	 * @return 공지사항 목록
	 * @throws Exception 조회시 예외 발생한 경우
	 */
	public Map<String, Object> processNoticeList(Map<String, Object> dataMap) throws Exception;
	
}
