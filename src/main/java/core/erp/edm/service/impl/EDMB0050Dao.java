package core.erp.edm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	EDMB0050Dao - 교육이수결과관리 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김혜림
 * @since	2016.09.12
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.12	김혜림	 Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright NDS.(C) All right reserved.
 */

@Repository("EDMB0050Dao")
public class EDMB0050Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 * 교육이수결과관리 데이터 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통메시지 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("EDMB0050.SEARCH00", searchVo);

	}

	
	/**
	 * <pre>
	 * 교육이수결과관리 데이터 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		String sEDRT_SEQN = (String) insert("EDMB0050.SAVE00", dataVo);
		return sEDRT_SEQN;

	}

	/**
	 * <pre>
	 * 교육이수결과관리 데이터 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("EDMB0050.UPDATE00", dataVo);
		
	}


	/**
	 * <pre>
	 * 교육이수결과관리 데이터 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("EDMB0050.DELETE00", dataVo);
		
	}
	

	/**
	 * <pre>
	 * 교육이수결과관리 엑셀업로드
	 * </pre>
	 * @param paramMap - 저장할데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("EDMB0050.SAVE01", dataVo);
		
	}
}
