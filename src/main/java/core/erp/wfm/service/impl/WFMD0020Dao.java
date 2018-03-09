/**
 * core.erp.hrm.service.impl.WFMD0020Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMD0020Dao - 차량관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김용만
 * @since	2016.09.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	김용만		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMD0020Dao")
public class WFMD0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  차량관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 차량관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMD0020.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  차량관리 전월데이터 유무 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 차량관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("WFMD0020.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  차량관리 전월말 주행거리를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 차량관리 전월말 주행거리
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("WFMD0020.SEARCH02", searchVo);

	}	
	
	/**
	 * <pre>
	 *  차량관리 전월말 합계를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 차량관리 전월말 합계
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("WFMD0020.SEARCH03", searchVo);

	}	
	
	/**
	 * <pre>
	 *  월별차량운행형황 결재문서 Seq를 가져온다
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 월별차량운행현황 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("WFMD0020.SEARCH04", searchVo);

	}	
	
	
	/**
	 * <pre>
	 *  차량관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("WFMD0020.SAVE00", dataVo);
	}
	
	/**
	 * <pre>
	 *  월별차량운행현황 헤더 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(사용하는 DB에서 지원하는 경우 저장 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map dataVo) throws Exception {
	
		return delete("WFMD0020.SAVE01", dataVo);
	}
	

	/**
	 * <pre>
	 *  차량관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("WFMD0020.UPDATE00", dataVo);
	}
	
	/**
	 * <pre>
	 *  차량관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("WFMD0020.DELETE00", dataVo);
	}

}
