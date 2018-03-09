/**
 * core.erp.tmm.service.impl.PACA0022Dao.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PACA0022ServiceImpl - 제작 전자세금계산서 인증서관리
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.11.08
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
 

@Repository("PACA0022Dao")
public class PACA0022Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  제작 전자세금계산서 인증서관리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PACA0022.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  전자세금계산서 인증서 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PACA0022.UPDATE00", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  공통코드마스터 테이블 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PACA0022.DELETE00", dataVo);
		
	}
	
	
	
	
}
