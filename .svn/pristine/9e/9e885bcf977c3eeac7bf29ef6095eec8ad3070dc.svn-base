package core.erp.com.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	ComMainNoticeDao -  그룹웨어 공지사항 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	박정훈
 * @since	2016. 11. 21.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 11. 21.	박정훈			Initial Created.
 * 2016. 12. 04		jsh				일반 공지사항 조회 추가
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("ComMainNoticeDao")
public class ComMainNoticeDao extends CmmBaseDAO {
	/**
     * <pre>
     * 그룹웨어 공지사항 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
    public Object processGetGWNotice(Map<String, Object> dataMap) throws Exception {
        return list("COMMAINNOTICE.GWNOTICE", dataMap);
    }

	/**
	 * <pre>
	 * 솔루션 시스템의 공지사항 목록을 조회한다.
	 * </pre>
	 *
	 * @param dataMap 조회조건
	 * @return 공지사항 목록
	 * @throws Exception 조회시 예외 발생한 경우
	 */
	public Object processNoticeList(Map<String, Object> dataMap) throws Exception {
		return list("COMMAINNOTICE.NOTICELIST", dataMap);
	}
}
