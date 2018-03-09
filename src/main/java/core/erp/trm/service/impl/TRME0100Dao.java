package core.erp.trm.service.impl;

import java.util.Map;
import org.springframework.stereotype.Repository;
import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TRME0100Dao - 법인카드 승인내역 및 전표처리 조회  프로그램 데이터처리 DAO 클래스
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
@Repository("TRME0100Dao")
public class TRME0100Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRME0100.SEARCH00", searchVo);
	}

}
