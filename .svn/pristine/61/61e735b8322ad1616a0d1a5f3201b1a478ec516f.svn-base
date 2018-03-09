package core.erp.trm.service.impl;

import java.util.Map;
import org.springframework.stereotype.Repository;
import core.ifw.cmm.dataaccess.CmmBaseDAO;


/**
 * <pre>
 *	TRME0070Dao - 법인카드매입자료조회 프로그램 데이터처리 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 10. 14.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 10. 14.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TRME0070Dao")
public class TRME0070Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());
	/**
	 * <pre>
	 * 법인카드매입자료조회 
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRME0070.SEARCH00", searchVo);
	}

}
