package core.erp.fam.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	FAMA0110Dao - 조회[전표유형관리]  프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	안윤준
 * @since	2016.07.20
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.20	안윤준		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("FAMA0110Dao")
public class FAMA0110Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 전표유형관리 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAMA0110.SEARCH00", searchVo);
	}
	
		/**************************
		 * 전표유형관리 조회 처리 디테일 *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FAMA0110.SEARCH01", searchVo);
	}
	
		/************************
		 * 전표유형관리 등록 처리  ! *
		 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("FAMA0110.SAVE00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("FAMA0110.UPDATE00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("FAMA0110.DELETE00", dataVo);

	}
	
	/************************
	 * 전표유형관리 등록 처리  ! *
	 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("FAMA0110.SAVE01", dataVo);
	
	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("FAMA0110.UPDATE01", dataVo);
	
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("FAMA0110.DELETE01", dataVo);
	
	}
	

}
