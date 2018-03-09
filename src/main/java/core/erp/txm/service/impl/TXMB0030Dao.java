package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMB0030Dao - 증빙 및 적요 수정  프로그램 데이터처리 DAO 클래스
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
 * 2016.08.04	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("TXMB0030Dao")
public class TXMB0030Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMB0030.SEARCH00", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMB0030.SEARCH01", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("TXMB0030.SEARCH02", searchVo);

	}
	
		/************************
		 * 공통코드 등록 처리  ! *
		 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("TXMB0030.SAVE00", dataVo);

	}
}
