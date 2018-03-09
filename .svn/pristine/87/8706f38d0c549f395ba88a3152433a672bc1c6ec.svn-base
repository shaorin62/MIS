package core.erp.fam.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	FAMA0070Dao - 거래처정보조회 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	황치웅
 * @since	2016.06.23
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.23	황치웅		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("FAMA0070Dao")
public class FAMA0070Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAMA0070.SEARCH00", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("FAMA0070.SEARCH01", searchVo);

	}

		/************************
		 * 공통코드 등록 처리  ! *
		 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("FAMA0070.SAVE00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {

		return insert("FAMA0070.SAVE01", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("FAMA0070.UPDATE00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {

		return update("FAMA0070.UPDATE01", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("FAMA0070.DELETE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {

		return delete("FAMA0070.DELETE01", dataVo);

	}
}
