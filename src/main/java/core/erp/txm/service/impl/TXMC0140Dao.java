package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMC0140Dao - 사업자단위과세별부가세과세표준및납부세액  프로그램 데이터처리 DAO 클래스
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
@Repository("TXMC0140Dao")
public class TXMC0140Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMC0140.SEARCH00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMC0140.SEARCH01", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("TXMC0140.SEARCH02", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {

		return list("TXMC0140.PROC00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public void processSAVE00(Map searchVo) throws Exception {

		insert("TXMC0140.SAVE00", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public void processDELETE00(Map searchVo) throws Exception {

		delete("TXMC0140.DELETE00", searchVo);
	}		
	
}
