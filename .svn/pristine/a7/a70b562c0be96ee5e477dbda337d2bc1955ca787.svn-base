package core.erp.fam.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	FAMA0065Dao - 계정사용권한관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	권미영
 * @since	2016.12.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.06	권미영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("FAMA0065Dao")
public class FAMA0065Dao extends CmmBaseDAO  {

	/**************************
	 * 계정사용권한그룹 조회  *
	**************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAMA0065.SEARCH00", searchVo);

	}
	/**************************
	 * 계정사용권한 조회 *
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("FAMA0065.SEARCH01", searchVo);

	}	

	/**************************
	 * 계정사용권한 삭제 *
	 **************************/
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("FAMA0065.DELETE00", dataVo);

	}
	
	/************************
	* 계정사용권한 저장 *
	************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("FAMA0065.SAVE00", dataVo);

	}

}
