/**
 * core.erp.com.service.impl.ComMainPortalDao.java
 */
package core.erp.com.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;


/**
 * <pre>
 *	ComMainPortalDao - 메인화면 포틀릿 구성을 위한 기본 서비스 구현 클래스
 * <p><b>NOTE : </b></p>
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
@Repository("ComMainPortalDao")
public class ComMainPortalDao extends CmmBaseDAO {
    
    
    /**
     * <pre>
     * 메뉴 즐겨찾기를 저장한다.
     * </pre>
     *
     * @param dataMap 저장할 메뉴 정보
     * @return 저장 결과
     * @throws Exception 예외 발생시
     */
    public Object processFavoriteMenuSave(Map<String, Object> dataMap) throws Exception {
        return insert("COMMAINPORTAL.FAVORITESAVE", dataMap);
    }
    
    
    /**
     * <pre>
     * 메뉴 즐겨찾기를 삭제한다.
     * </pre>
     *
     * @param dataMap 삭제할 메뉴 정보
     * @return 삭제 결과
     * @throws Exception 예외 발생시
     */
    public Object processFavoriteMenuDelete(Map<String, Object> dataMap) throws Exception {
        return delete("COMMAINPORTAL.FAVORITEDELETE", dataMap);
    }
    
    
    /**
     * <pre>
     * 메뉴 즐겨찾기를 수정한다.(사용자 메뉴 순서 조정 기능 처리시)
     * </pre>
     *
     * @param dataMap 메뉴 즐겨찾기 정보
     * @return 처리 결과
     * @throws Exception 처리 중 예외 발생시 
     */
    public Object processFavoriteMenuUpdate(Map<String, Object> dataMap) throws Exception {
        return update("COMMAINPORTAL.FAVORITEUPDATE", dataMap);
    }
    
    
    /**
     * <pre>
     * 메뉴 즐겨찾기의 순서를 재조정
     * </pre>
     *
     * @param dataMap 메뉴 즐겨찾기 정보
     * @return 처리 결과
     * @throws Exception 처리 중 예외 발생시
     */
    public Object processFavoriteMenuOrder(Map<String, Object> dataMap) throws Exception {
        return update("COMMAINPORTAL.FAVORITEORDR", dataMap);
    }
    
    
    /**
     * <pre>
     * 즐겨찾기 메뉴 목록을 조회한다.
     * </pre>
     *
     * @param dataMap 즐겨찾기를 조회할 사용자 정보
     * @return 메뉴 즐겨찾기 목록
     * @throws Exception 예외가 발생한 경우
     */
    public Object processFavoriteMenuSearch(Map<String, Object> dataMap) throws Exception {
        return list("COMLOGIN.MYMENUDOWN", dataMap);
    }
    
    
    /**
     * <pre>
     * 프로필 이미지를 조회한다. 프로필 이미지는 기본 프로필>인사정보 사진>임시개인이미지 순서로 조회한다.
     * </pre>
     *
     * @param paramMap 조회조건
     * @return 이미지 정보
     * @throws Exception
     */
    public Object processSearchProfileImage(Map<String, Object> paramMap) throws Exception {
    	return select("COMMAINPORTAL.GETPROFILEIMAGE", paramMap);
    }
    
    
    /**
     * <pre>
     * 메인 대시보드 프로필 이미지 저장
     * </pre>
     *
     * @param dataMap 저장할 정보
     * @return 저장 결과
     * @throws Exception 예외 발생 시
     */
    public int processSaveProfileImage(Map<String, Object> dataMap) throws Exception {
    	return update("COMMAINPORTAL.SAVEPROFILEIMAGE", dataMap);
    
    }
    
    
    /**
     * <pre>
     * 메인화면 대시보드 바로가기 목록을 조회한다.
     * </pre>
     *
     * @param paramMap 조회할 사용자 정보
     * @return 대시보드 바로가기 목록
     * @throws Exception 예외 발생 시
     */
    public Object processGetBoardItems(Map<String, Object> paramMap) throws Exception {
    	return list("COMMAINPORTAL.GETBOARDITEMS", paramMap);
    }
    
    
    /**
     * <pre>
     * 메인보드 대시보드 바로가기 목록의 사용자 사용여부를 저장한다.
     * </pre>
     *
     * @param dataMap 저장할 정보
     * @return 저장 결과
     * @throws Exception 예외가 발생한 경우
     */
    public Object processSaveBoardItems(Map<String, Object> dataMap) throws Exception {
    	return insert("COMMAINPORTAL.SAVEBOARDITEMS", dataMap);
    }
    
    
    /**
     * <pre>
     * 즐겨찾기, 바로가기 등에서 메뉴ID를 이용하여 메뉴 및 권한정보를 조회한다.
     * </pre>
     *
     * @param paramMap
     * @return
     * @throws Exception
     */
    public Object processSearchOpenMenu(Map<String, Object> paramMap) throws Exception {
    	return list("COMMAINPORTAL.SEARCHOPENMENU", paramMap);
    }
    
    
    /**
     * <pre>
     * 메인 대시보드의 사용자 연차/정기휴가 일수를 조회한다.
     * </pre>
     *
     * @param paramMap 조회할 사용자 정보
     * @return 연차/정기휴가 전체일수 대비 사용일수
     * @throws Exception 예외발생 시
     */
    public Object processGetHolidayInfo(Map<String, Object> paramMap) throws Exception {
    	return list("COMMAINPORTAL.GETHOLIDAYINFO", paramMap);
    }
    
    /**
     * <pre>
     * 대시보드 아이템 항목을 조회한다.
     * </pre>
     *
     * @param paramMap
     * @return
     * @throws Exception
     */
    public Object processGetItemInfo(Map<String, Object> paramMap) throws Exception {
    	return selectByPk("COMMAINPORTAL.GETITEMINFO", paramMap);
    }
    
    /**
     * <pre>
     * 대시보드 아이템 항목의 표시 건수를 조회한다.
     * </pre>
     *
     * @param paramMap
     * @return
     * @throws Exception
     */
    public Object processGetItemCount(Map<String, Object> paramMap) throws Exception {
    	return selectByPk("COMMAINPORTAL.GETITEMCOUNT", paramMap);
    }
    
}
