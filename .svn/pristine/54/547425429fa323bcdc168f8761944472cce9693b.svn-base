package core.erp.com.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	ComDayOffDao -  DAY OFF DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김기환
 * @since	2016. 12. 29.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 12. 29.	김기환			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("ComDayOffDao")
public class ComDayOffDao extends CmmBaseDAO {
	/**
     * <pre>
     * DAY OFF 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
    public Object processSEARCH00(Map<String, Object> dataMap) throws Exception {
        return list("COMDAYOFF.SEARCH00", dataMap);
    }

}