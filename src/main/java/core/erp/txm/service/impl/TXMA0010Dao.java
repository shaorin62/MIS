package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMA0010Dao - 조회[부가세]  프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	황치웅
 * @since	2016.06.24
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	황치웅		Initial Created.
 * 2016.08.02	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("TXMA0010Dao")
public class TXMA0010Dao extends CmmBaseDAO  {

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMA0010.SEARCH00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMA0010.SEARCH01", searchVo);
	}
	
	/***************************************************************
	  조회[부가세일련번호]
	***************************************************************/
	@SuppressWarnings("rawtypes")
	public String search_VATX_SEQN(Map searchVo) throws Exception {
		
		Map resultMap = (Map) selectByPk("TXMA0010.SEARCH_VATX_SEQN", searchVo);
		
		String result = (String) resultMap.get("VATX_SEQN");
		
		return result;

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("TXMA0010.SAVE00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {

		return insert("TXMA0010.SAVE01", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("TXMA0010.UPDATE00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {

		return update("TXMA0010.UPDATE01", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("TXMA0010.DELETE00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {

		return delete("TXMA0010.DELETE01", dataVo);

	}
	

}
