package core.erp.txm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	TXMC0060Dao - 수출실적명세서  프로그램 데이터처리 DAO 클래스
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
 * 2016.08.08	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("TXMC0060Dao")
public class TXMC0060Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMC0060.SEARCH00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMC0060.SEARCH01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("TXMC0060.SEARCH02", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {

		return list("TXMC0060.SEARCH03", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {

		return list("TXMC0060.PROC00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map searchVo) throws Exception {

		return list("TXMC0060.PROC01", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public void processSAVE00(Map searchVo) throws Exception {

		update("TXMC0060.SAVE00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public void processSAVE01(Map searchVo) throws Exception {

		delete("TXMC0060.SAVE01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map searchVo) throws Exception {

		return update("TXMC0060.DELETE01", searchVo);
	}
	
}
