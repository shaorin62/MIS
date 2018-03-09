package core.erp.com.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	ComStatsBarDao -  경영실적 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	최인철
 * @since	2016. 11. 23.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 11. 23.	최인철			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("ComStatsBarDao")
public class ComStatsBarDao extends CmmBaseDAO {
	/**
     * <pre>
     * 경영실적 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
    public Object processSEARCH00(Map<String, Object> dataMap) throws Exception {
        return list("COMSTATSBAR.SEARCH00", dataMap);
    }
        

}
