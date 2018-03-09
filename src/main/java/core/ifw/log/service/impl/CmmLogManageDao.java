/**
 * 
 */
package core.ifw.log.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;


/**
 * <pre>
 *	CmmLogManageDao - 쿼리 실행 로그 기록을 위한 Data Access Object
 * </pre>
 * 
 * @author	genie <jsh@inbus.co.kr>
 * @since	2016. 6. 15.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 6. 15.	genie			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("cmmLogManageDao")
public class CmmLogManageDao extends CmmBaseDAO {
	
	/**
	 * 데이터 조작 로그를 저장한다.
	 * @param logMap 저장할 데이터베이스 조작 정보
	 * @return 처리결과
	 * @throws Exception
	 */
	public Object saveDataAccessLog(Map<String, String> logMap) throws Exception {
		return insert("CMMLOGMANAGE.saveDataAccessLog", logMap);
	}

}
