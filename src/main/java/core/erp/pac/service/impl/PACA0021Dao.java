/**
 * core.erp.tmm.service.impl.PACA0021Dao.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PACA0021ServiceImpl - 제작 전자세금계산서 관리
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.11.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.04	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Repository("PACA0021Dao")
public class PACA0021Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  제작 전자세금계산서 관리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PACA0021.SEARCH00", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  전자세금계산서 발행취소 STATUS 테이블 값변경
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PACA0021.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  전자세금계산서 발행취소 INTERFACE 테이블 값변경
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PACA0021.UPDATE01", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  전자세금계산서 이메일 재발송 STATUS 테이블 값변경
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
	
		return update("PACA0021.UPDATE02", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  전자세금계산서 이메일 재발송 INTERFACE 테이블 값변경
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE03(Map dataVo) throws Exception {
	
		return update("PACA0021.UPDATE03", dataVo);
		
	}
	
	
}
