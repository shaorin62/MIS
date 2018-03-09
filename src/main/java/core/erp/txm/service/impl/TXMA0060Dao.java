package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMA0060Dao - 업종구분등록 프로그램 데이터처리 DAO 클래스
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
 * 2016.08.03	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("TXMA0060Dao")
public class TXMA0060Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMA0060.SEARCH00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMA0060.SEARCH01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public void processSAVE00(Map searchVo) throws Exception {

		insert("TXMA0060.SAVE00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public void processUPDATE00(Map searchVo) throws Exception {

		update("TXMA0060.UPDATE00", searchVo);
	}		
	
}
