package core.erp.trm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TRMA0020Dao - 자금운용계획현황  프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Repository("TRMA0020Dao")
public class TRMA0020Dao extends CmmBaseDAO  {

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRMA0020.SEARCH00", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {

		return insert("TRMA0020.PROC00", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TRMA0020.SEARCH01", searchVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map dataVo) throws Exception {

		return insert("TRMA0020.SEARCH02", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {

		return list("TRMA0020.SEARCH03", searchVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {

		return list("TRMA0020.SEARCH04", searchVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {

		return list("TRMA0020.SEARCH05", searchVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH06(Map searchVo) throws Exception {

		return list("TRMA0020.SEARCH06", searchVo);

	}

}
