package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMB0010Dao - 전자세금계산서  프로그램 데이터처리 DAO 클래스
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
 * 2016.08.03	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("TXMB0010Dao")
public class TXMB0010Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 공통코드 조회 처리 Head *
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMB0010.SEARCH00", searchVo);

	}
	
		/************************
		 * 공통코드 등록 처리  ! *
		 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("TXMB0010.SAVE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("TXMB0010.DELETE00", dataVo);

	}

}
