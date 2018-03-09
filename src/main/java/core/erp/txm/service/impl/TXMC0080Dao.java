package core.erp.txm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	TXMC0080Dao - 영세율첨부서류제출명세서  프로그램 데이터처리 DAO 클래스
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
 * 2016.08.09	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("TXMC0080Dao")
public class TXMC0080Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMC0080.SEARCH00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMC0080.SEARCH01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public void processSAVE00(Map searchVo) throws Exception {

		update("TXMC0080.SAVE00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map searchVo) throws Exception {

		return update("TXMC0080.DELETE00", searchVo);
	}
	
}
