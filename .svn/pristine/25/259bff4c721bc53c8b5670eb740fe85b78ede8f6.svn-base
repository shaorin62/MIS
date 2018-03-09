package core.erp.com.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	ComWorkCalendarDao -  메인달력 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김기환
 * @since	2016. 11. 16.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 11. 16.	김기환			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("ComWorkCalendarDao")
public class ComWorkCalendarDao extends CmmBaseDAO {
	/**
     * <pre>
     * 메인달력 일정 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
    public Object processSEARCH00(Map<String, Object> dataMap) throws Exception {
        return list("COMWORKCALENDAR.SEARCH00", dataMap);
    }
}
