package core.erp.fam.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	FAMA0060Dao - 계정과목등록 프로그램 데이터처리 DAO 클래스
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
@Repository("FAMA0060Dao")
public class FAMA0060Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

	/**************************
	 * 계정과목 조회 처리 Head *
	**************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAMA0060.SEARCH00", searchVo);

	}
	/**************************
	 * 관리코드 조회 처리 Head *
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("FAMA0060.SEARCH01", searchVo);

	}	

	/************************
	* 계정과목 등록 처리  ! *
	************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("FAMA0060.SAVE00", dataVo);

	}
	
	/**************************
	 * 관리코드 등록 처리 Head *
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {

		return insert("FAMA0060.SAVE01", dataVo);

	}
	
	/**************************
	 * 계정과목 수정 처리 Head *
	 **************************/
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("FAMA0060.UPDATE00", dataVo);

	}
	
	/**************************
	 * 관리코드 수정 처리 Head *
	 **************************/
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {

		return update("FAMA0060.UPDATE01", dataVo);

	}

	/**************************
	 * 계정과목 삭제 처리 Head *
	 **************************/
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("FAMA0060.DELETE00", dataVo);

	}
	
	/**************************
	 * 관리코드 삭제 처리 Head *
	 **************************/
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {

		return delete("FAMA0060.DELETE01", dataVo);

	}

}
