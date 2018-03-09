package core.erp.trm.service.impl;

import java.util.Map;
import org.springframework.stereotype.Repository;
import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TRMA0030Dao - 일자금현황 제예금현황  프로그램 데이터처리 DAO 클래스
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
@Repository("TRMA0030Dao")
public class TRMA0030Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("TRMA0030.SEARCH00", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("TRMA0030.SEARCH01", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH_SAVE00(Map dataVo) throws Exception {
		return insert("TRMA0030.SAVE00", dataVo);
	}

}
