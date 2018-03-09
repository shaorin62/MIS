package core.erp.fsm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	FSMD0010Dao - 감가상각 명세서  프로그램 데이터처리 DAO 클래스
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
@Repository("FSMD0010Dao")
public class FSMD0010Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FSMD0010.SEARCH00", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("FSMD0010.SEARCH01", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("FSMD0010.SEARCH02", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map dataVo) throws Exception {
logger.debug("dao!!!");
		return insert("FSMD0010.PROC00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processPROC00_POST(Map dataVo) throws Exception {
logger.debug("dao!!!");
		return insert("FSMD0010.PROC00_POST", dataVo);

	}	
	
	@SuppressWarnings("rawtypes")
	public Object processCANC00(Map dataVo) throws Exception {

		return insert("FSMD0010.CANC00", dataVo);

	}

}
