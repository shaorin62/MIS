/**
 * core.erp.com.service.ComMainPortalService.java
 */
package core.erp.com.service;

import java.util.Map;


/**
 * <pre>
 *	ComMainPortalService - 메인화면 포틀릿 구성을 위한 기본 서비스 인터페이스
 * </pre>
 * 
 * @author	genie <jsh@inbus.co.kr>
 * @since	2016. 9. 5.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 9. 5.	genie			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface ComMainPortalService {

    
    /**
     * <pre>
     * 즐겨찾기를 저장하거나 수정, 삭제한다.
     * </pre>
     *
     * @param requestData - 즐겨찾기 처리 요청데이터
     * @return 처리 결과
     * @throws Exception 처리시 발생한 예외
     */
    public int processFavoriteManage(Map<String, Object> requestData) throws Exception;
    
    /**
     * <pre>
     * 즐겨찾기 메뉴 목록을 조회한다.
     * </pre>
     *
     * @param requestData 조회 정보(사용자 정보)
     * @return 즐겨찾기 메뉴 목록
     * @throws Exception 예외 발생 시
     */
    public Map<String, Object> processFavoriteMenuSearch(Map<String, Object> requestData) throws Exception;
    
    
    /**
     * <pre>
     * 시스템별 메뉴 및 마이메뉴를 조회한다.
     * </pre>
     *
     * @param requestData 메뉴를 조회할 사용자 아이디 및 시스템코드
     * @return 메뉴 및 마이메뉴 목록
     * @throws Exception 예외 발생 시
     */
    public Map<String, Object> processMenuSearch(Map<String, Object> requestData) throws Exception;
    
    
    /**
     * <pre>
     * 개인 프로필 이미지를 저장 또는 삭제한다.
     * </pre>
     *
     * @param paramMap 파라미터
     * @param requestData 이미지 저장 또는 삭제 정보
     * @return 저장 결과
     * @throws Exception
     */
    public int processSaveProfileImage(Map<String, Object> paramMap, Map<String, Object> requestData) throws Exception;
    
    
    /**
     * <pre>
     *  메인화면 대시보드 바로가기 목록을 조회한다.
     * </pre>
     *
     * @param paramMap 조회할 사용자 정보
     * @return 대시보드 바로가기 목록
     * @throws Exception 예외 발생 시
     */
    public Object processGetBoardItems(Map<String, Object> paramMap) throws Exception;
    
    
    /**
     * <pre>
     * 메인보드 대시보드 바로가기 목록의 사용자 사용여부를 저장한다.
     * </pre>
     *
     * @param requestData 클라이언트 요청 정보
     * @return 처리 건수
     * @throws Exception 예외가 발생한 경우
     */
    public int processSaveBoardItems(Map<String, Object> requestData) throws Exception;
    
    
    /**
     * <pre>
     * 즐겨찾기, 바로가기 등에서 메뉴ID를 이용하여 메뉴 및 권한정보를 조회한다.
     * </pre>
     *
     * @param requestData
     * @return
     * @throws Exception
     */
    public Object processSearchOpenMenu(Map<String, Object> requestData) throws Exception;
 
    
    /**
     * <pre>
     * 사용자 프로필 이미지 정보를 조회한다.
     * </pre>
     *
     * @param paramMap 조회할 사용자 정보
     * @return 사용자 프로필 이미지 정보
     * @throws Exception
     */
    public Object processSearchProfileImage(Map<String, Object> paramMap) throws Exception;
    
    
    /**
     * <pre>
     * 메인 대시보드의 사용자 연차/정기휴가 일수를 조회한다.
     * </pre>
     *
     * @param requestData 조회할 사용자 정보
     * @return 연차/정기휴가 전체일수 대비 사용일수
     * @throws Exception 예외발생 시
     */
    public Object processGetHolidayInfo(Map<String, Object> requestData) throws Exception;
    
    
    /**
     * <pre>
     * 대시보드 표시 건수를 조회한다.
     * </pre>
     *
     * @param requestData 조회할 대시보드 아이템 항목
     * @return 대시보드 아이템의 건수
     * @throws Exception
     */
    public Object processGetItemCount(Map<String, Object> requestData) throws Exception;
    
}
