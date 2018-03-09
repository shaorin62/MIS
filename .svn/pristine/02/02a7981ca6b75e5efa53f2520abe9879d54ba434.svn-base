/**
 * core.erp.tmm.service.impl.PDMA0010Dao.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PDMA0010Controller - 계약서 파일관리 
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.20
 * @version	1.0
 * @see		{@link PDMA0010}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.20	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PDMA0010Dao")
public class PDMA0010Dao extends CmmBaseDAO {

	/**
	 * 제작 계약서 데이터 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PDMA0010.SEARCH00", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  제작 계약서 파일관리 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PDMA0010.SAVE00", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  계약서 파일관리 데이터 업데이트
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("PDMA0010.UPDATE00", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  계약서 파일관리 데이터 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PDMA0010.DELETE00", dataVo);
		
	}
	
	
	/** 파일계약서번호 채번 **/ 
	@SuppressWarnings("deprecation")
	public String getFILE_NUMB() throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMA0010.getFILE_NUMB", "");
	}
	
}
