package core.erp.com.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	ComWorkAlarmDao -  알람 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	남상기
 * @since	2016. 11. 17.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 11. 17.	남상기			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("ComWorkAlarmDao")
public class ComWorkAlarmDao extends CmmBaseDAO {
	/**
     * <pre>
     * 알람 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
    public Object processSEARCH00(Map<String, Object> dataMap) throws Exception {
        return list("COMWORKALARM.SEARCH00", dataMap);
    }
    
    /**
	 * <pre>
	 * 알람 업데이트
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processUPDATE00(Map<String, Object> dataMap) throws Exception {

		return update("COMWORKALARM.UPDATE00", dataMap);

	}
	
	/**
	 * <pre>
	 * 알람 삭제
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processDELETE00(Map<String, Object> dataMap) throws Exception {

		return delete("COMWORKALARM.DELETE00", dataMap);

	}
    
}
