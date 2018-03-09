package core.erp.fam.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	FAMA0120Dao - 재무제표출력설정  프로그램 데이터처리 DAO 클래스
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
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("FAMA0120Dao")
public class FAMA0120Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

	/**************************
	 * 조회 처리 *
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAMA0120.SEARCH00", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("FAMA0120.SEARCH01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("FAMA0120.SEARCH02", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH11(Map searchVo) throws Exception {

		return list("FAMA0120.SEARCH11", searchVo);
	}
	
	/************************
	 * 등록 처리  ! *
	 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("FAMA0120.SAVE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {

		return insert("FAMA0120.SAVE01", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {

		return insert("FAMA0120.SAVE02", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("FAMA0120.UPDATE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {

		return update("FAMA0120.UPDATE01", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {

		return update("FAMA0120.UPDATE02", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("FAMA0120.DELETE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {

		return delete("FAMA0120.DELETE01", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {

		return delete("FAMA0120.DELETE02", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {

		insert("FAMA0120.PROC00", searchVo);

	}
	
}
