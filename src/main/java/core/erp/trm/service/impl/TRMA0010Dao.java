package core.erp.trm.service.impl;

import java.util.Map;
import org.springframework.stereotype.Repository;
import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TRMA0010Dao - 자금계획추가내역  프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Repository("TRMA0010Dao")
public class TRMA0010Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRMA0010.SEARCH00", searchVo);
	}

		/************************
		 * 공통코드 등록 처리  ! *
		 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("TRMA0010.SAVE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("TRMA0010.UPDATE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("TRMA0010.DELETE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processPROC00(Map dataVo) throws Exception {

		return delete("TRMA0010.PROC00", dataVo);

	}


}
