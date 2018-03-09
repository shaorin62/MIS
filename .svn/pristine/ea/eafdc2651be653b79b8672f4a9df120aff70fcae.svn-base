package core.erp.trm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TRMC0010Dao - 차입금관리  프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.28	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Repository("TRMC0010Dao")
public class TRMC0010Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRMC0010.SEARCH00", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TRMC0010.SEARCH01", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("TRMC0010.SAVE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {

		return insert("TRMC0010.SAVE01", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("TRMC0010.UPDATE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {

		return update("TRMC0010.UPDATE01", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("TRMC0010.DELETE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {

		return delete("TRMC0010.DELETE01", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map dataVo) throws Exception {

		return list("TRMC0010.PROC00", dataVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map dataVo) throws Exception {

		return list("TRMC0010.PROC01", dataVo);
	}

}
