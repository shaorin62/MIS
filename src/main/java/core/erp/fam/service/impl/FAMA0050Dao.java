package core.erp.fam.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	FAMA0050Dao - 관리항목 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.13
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.13	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("FAMA0050Dao")
public class FAMA0050Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

   /**************************
	* 관리항목 조회 처리 Head *
	**************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAMA0050.SEARCH00", searchVo);

	}

   /**************************
	* 관리항목 삭제 처리 *
	**************************/
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("FAMA0050.DELETE00", dataVo);

	}
	
	/**************************
	* 관리항목 등록 처리 *
	**************************/	
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("FAMA0050.SAVE00", dataVo);

	}

	/**************************
	* 관리항목 수정 처리  *
	**************************/
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("FAMA0050.UPDATE00", dataVo);

	}

}
