package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMB0020Dao - 세금계산서 국세청 전송내역  프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	황치웅
 * @since	2016.06.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	황치웅		Initial Created.
 * 2018.08.03	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
@Repository("TXMB0020Dao")
public class TXMB0020Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMB0020.SEARCH00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMB0020.SEARCH01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("TXMB0020.SEARCH02", searchVo);
	}
	
}
