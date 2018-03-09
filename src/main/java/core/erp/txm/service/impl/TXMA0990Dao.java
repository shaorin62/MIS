package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMA0990Dao - 업종구분등록 프로그램 데이터처리 DAO 클래스
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
@Repository("TXMA0990Dao")
public class TXMA0990Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMA0990.SEARCH00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMA0990.SEARCH01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map searchVo) throws Exception {
		return delete("TXMA0990.DELETE00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map searchVo) throws Exception {
		return delete("TXMA0990.DELETE01", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public void processSAVE00(Map searchVo) throws Exception {
		insert("TXMA0990.SAVE00", searchVo);
	}
		
	
	@SuppressWarnings("rawtypes")
	public void processSAVE01(Map searchVo) throws Exception {
		insert("TXMA0990.SAVE01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map searchVo) throws Exception {
		return update("TXMA0990.UPDATE00", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map searchVo) throws Exception {
		return update("TXMA0990.UPDATE01", searchVo);
	}			
	
}
