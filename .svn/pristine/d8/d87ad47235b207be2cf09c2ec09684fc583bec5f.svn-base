/**
 * core.erp.tmm.service.impl.PCMA0020Dao.java - <Created by Code Template generator>
 */
package core.erp.pcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PCMA0020Controller - 제작업종분류 관리
 * </pre>
 *
 * @author	오세훈
 * @since	2016.08.30
 * @version	1.0
 * @see		{@link PCMA0020}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.30	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PCMA0020Dao")
public class PCMA0020Dao extends CmmBaseDAO {

	/**
	 * 제작 업종분류관리 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PCMA0020.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  제작업종분류 관리 테이블에 저장한다.
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PCMA0020.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  공통코드마스터 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PCMA0020.UPDATE00", dataVo);
		
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
	
		return delete("PCMA0020.DELETE00", dataVo);
		
	}
	
	
	/** 업종 분류코드 만들어오기  **/ 
	@SuppressWarnings("deprecation")
	public String getItemcode(String CLAS_CODE) throws Exception{
		return (String)getSqlMapClient().queryForObject("PCMA0020.GETITEMCODE", CLAS_CODE);
	}

	/** 업종 분류코드 만들어오기  **/ 
	@SuppressWarnings("deprecation")
	public String getMaxClassCode() throws Exception{
		return (String)getSqlMapClient().queryForObject("PCMA0030.getTYPE_CODE");
	}

}
