/**
 * core.erp.wfm.service.impl.WFMA0030Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMA0030Dao - 경조금 신청 등록 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	정한균
 * @since	2016.09.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	정한균			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMA0030Dao")
public class WFMA0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  경조금 신청 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMA0030.SEARCH00", searchVo);

	}
	
	/**************************
	 * 전표처리된 전표번호 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public String processSEARCHSLIPNUM(Map searchVo) throws Exception {
		return (String) selectByPk("WFMA0030.SEARCHSLIPNUM", searchVo);
	}
	
	/**
	 * <pre>
	 * 전표대상데이터 체크 초기화 UPDATE
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE02(Map searchVo) throws Exception {
		return update("WFMA0030.UPDATE02", searchVo);
	}
	
	/**
	 * <pre>
	 * 전표대상데이터 체크 UPDATE
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE03(Map searchVo) throws Exception {
		return update("WFMA0030.UPDATE03", searchVo);
	}	

	/**
	 * <pre>
	 * 법인카드사용 전표생성
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public Object processPROC00(Map dataVo) throws Exception {
		return insert("WFMA0030.PROC00", dataVo);
	}

	/**
	 * <pre>
	 * 법인카드사용 전표삭제
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map dataVo) throws Exception {
		return insert("WFMA0030.PROC01", dataVo);
	}
	
}
