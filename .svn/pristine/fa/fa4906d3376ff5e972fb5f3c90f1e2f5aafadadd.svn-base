package core.erp.fam.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	FAME0030Dao - 최초미결전표등록  프로그램 데이터처리 DAO 클래스
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
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("FAME0030Dao")
public class FAME0030Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAME0030.SEARCH00", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCHRATE(Map searchVo) throws Exception {

		return list("FAME0030.SEARCHRATE", searchVo);

	}
	
		/************************
		 * 공통코드 등록 처리  ! *
		 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("FAME0030.SAVE00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return delete("FAME0030.UPDATE00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("FAME0030.DELETE00", dataVo);

	}
}
