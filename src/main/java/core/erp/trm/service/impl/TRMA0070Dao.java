package core.erp.trm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TRMA0070Dao - 제예금명세서  프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2017.01.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2017.01.05	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Repository("TRMA0070Dao")
public class TRMA0070Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		System.out.println("234");
		return list("TRMA0070.SEARCH00", searchVo);
	}

}
