package core.erp.fsm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	FSMD0010P01Dao - 감가상각 명세서  프로그램 데이터처리 DAO 클래스
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
@Repository("FSMD0010P01Dao")
public class FSMD0010P01Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FSMD0010P01.SEARCH00", searchVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSLIPCREATE01(Map dataVo) throws Exception {

		return insert("FSMD0010P01.SLIPCREATE01", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSLIPDELETE01(Map dataVo) throws Exception {

		return insert("FSMD0010P01.SLIPDELETE01", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSLIPCREATE02(Map dataVo) throws Exception {

		return insert("FSMD0010P01.SLIPCREATE02", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSLIPDELETE02(Map dataVo) throws Exception {

		return insert("FSMD0010P01.SLIPDELETE02", dataVo);

	}	

}
