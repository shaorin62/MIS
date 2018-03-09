
package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMC0130Dao - 사업자단위과세별부가세과세표준및납부세액  프로그램 데이터처리 DAO 클래스
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
 * 2016.08.10	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("TXMC0130Dao")
public class TXMC0130Dao extends CmmBaseDAO  {

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMC0130.SEARCH00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMC0130.SEARCH01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("TXMC0130.SEARCH02", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public void processSAVE00(Map searchVo) throws Exception {

		insert("TXMC0130.SAVE00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public void processSAVE01(Map searchVo) throws Exception {

		insert("TXMC0130.SAVE01", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public void processUPDATE00(Map searchVo) throws Exception {

		update("TXMC0130.UPDATE00", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public void processUPDATE01(Map searchVo) throws Exception {

		update("TXMC0130.UPDATE01", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public void processDELETE00(Map searchVo) throws Exception {

		delete("TXMC0130.DELETE00", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public void processDELETE01(Map searchVo) throws Exception {

		delete("TXMC0130.DELETE01", searchVo);
	}	
	
	@SuppressWarnings("rawtypes")
	public void processDELETE02(Map searchVo) throws Exception {

		delete("TXMC0130.DELETE02", searchVo);
	}		
	
}
