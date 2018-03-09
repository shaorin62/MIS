/**
 * core.erp.pay.service.impl.PAYB0105Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYB0105Dao - 학자금대출상환관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYB0105Dao")
public class PAYB0105Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  학자금상환 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 학자금상환 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PAYB0105.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  학자금상환공제 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 학자금상환공제 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PAYB0105.SEARCH01", searchVo);

	}
	/**
	 * <pre>
	 *  기타상환내역 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 학자금대출상환관리내역 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PAYB0105.SEARCH02", searchVo);
	}
	/**
	 * <pre>
	 *  학자금상환 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PAYB0105.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  학자금상환공제 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PAYB0105.SAVE01", dataVo);

	}

	/**
	 * <pre>
	 *  학자금상환 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PAYB0105.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  학자금상환공제 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PAYB0105.UPDATE01", dataVo);
		
	}

	/**
	 * <pre>
	 *  학자금상환 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PAYB0105.DELETE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  학자금상환공제 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("PAYB0105.DELETE01", dataVo);
		
	}

}
