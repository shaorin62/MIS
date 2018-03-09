/**
 * core.erp.pay.service.impl.PAYB0070Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYB0070Dao - 국민연금공제적용 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.25
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.25	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYB0070Dao")
public class PAYB0070Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  국민연금납부 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 국민연금납부 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PAYB0070.SEARCH00", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  국민연금공제적용 주민등록번호 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 건강보험공제적용 주민등록번호
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH99(Map searchVo) throws Exception {
	
		return list("PAYB0070.SEARCH99", searchVo);

	}
	
	/**
	 * <pre>
	 *  국민연금납부 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PAYB0070.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  국민연금 미수금을 처리한다.
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PAYB0070.SAVE01", dataVo);

	}

	/**
	 * <pre>
	 *  국민연금납부 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PAYB0070.DELETE00", dataVo);
		
	}
	
}
