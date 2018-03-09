/**
 * core.erp.hrm.service.impl.WFMB0040Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMB0040Dao - 학자금지급내역 DAO 클래스
 * </pre>
 * 
 * @author	전종원
 * @since	2016.09.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	전종원		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMB0040Dao")
public class WFMB0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  학자금지급내역 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 근데신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMB0040.SEARCH00", searchVo);
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
		return update("WFMB0040.UPDATE02", searchVo);
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
		return update("WFMB0040.UPDATE03", searchVo);
	}
	
	/**
	 * <pre>
	 * 법인카드청구 전표생성
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public Object processPROC00(Map dataVo) throws Exception {
		return insert("WFMB0040.PROC00", dataVo);
	}

	/**
	 * <pre>
	 * 학자금지급내역 전표삭제
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map dataVo) throws Exception {
		//return insert("WFMB0040.PROC01", dataVo);
		return delete("WFMB0040.PROC01", dataVo);
	}
	
	
	/**
	 * <pre>
	 * 전표처리된 전표번호 조회
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCHSLIPNUM(Map searchVo) throws Exception {
		return (String) selectByPk("WFMB0040.SEARCHSLIPNUM", searchVo);
	}
	
	
	/**
	 * <pre>
	 * 학자금지급내역 급여전환
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC02(Map dataVo) throws Exception {
		return insert("WFMB0040.PROC02", dataVo);
	}
	
	/**
	 * <pre>
	 * 학자금지급내역 급여전환
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("WFMB0040.SAVE00", dataVo);
	}
	
	/**
	 * <pre>
	 * 학자금지급내역 급여전환 후 학자금 UPDATE
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE00(Map searchVo) throws Exception {
		return update("WFMB0040.UPDATE00", searchVo);
	}
	


}
