package core.erp.evm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	EVMC0010Dao - 조직 목표설정서 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.24
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.24	김석영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("EVMC0010Dao")
public class EVMC0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  조직 목표설정서 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기록변경요청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("EVMC0010.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  조직평가대상부서 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기록변경요청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("EVMC0010.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  조직 목표설정서 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("EVMC0010.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  조직 목표설정서 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("EVMC0010.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  조직 목표설정서 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("EVMC0010.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  조직평가대상부서 테이블 목표설정제출취
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {		
		update("EVMC0010.PROC00", searchVo);	
	}
	
	/**
	 * <pre>
	 *  조직평가대상부서 테이블 목표설정제출취소 
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC01(Map searchVo) throws Exception {		
		update("EVMC0010.PROC01", searchVo);	
	}
	
}
