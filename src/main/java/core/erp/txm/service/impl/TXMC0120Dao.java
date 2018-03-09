package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMC0120Dao - 사업자단위과세별부가세과세표준및납부세액  프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	신민규
// * @since	2016.08.03
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	신민규		Initial Created.
 * 2016.08.10	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("TXMC0120Dao")
public class TXMC0120Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMC0120.SEARCH00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMC0120.SEARCH01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("TXMC0120.SEARCH02", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {

		return list("TXMC0120.PROC00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map searchVo) throws Exception {

		return list("TXMC0120.PROC01", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public void processSAVE00(Map searchVo) throws Exception {

		update("TXMC0120.SAVE00", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public void processSAVE01(Map searchVo) throws Exception {

		update("TXMC0120.SAVE01", searchVo);
	}		
	
}
