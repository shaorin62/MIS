/**
 * core.erp.mdm.service.impl.MDMA0030Dao.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MDMA0030Dao - 전파 개별청약(신규) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.11
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date				   Modifier	     	Comment
 * ====================================================
 * 2016.10.11			최제현			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MDMA0030Dao")
public class MDMA0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  전파 개별청약 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전파 개별청약 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MDMA0030.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주 목록 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MDMA0030.SEARCH01", searchVo);
	}

	/**
	 * <pre>
	 *  전파 개별청약 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("MDMA0030.SAVE00", dataVo);

	}
	

	/**
	 * <pre>
	 *  전파 개별청약 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("MDMA0030.UPDATE00", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  전파 개별청약 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("MDMA0030.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  신규 일련번호 코드채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 일련번호 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_SEQX_FILD(Map searchVo) throws Exception {
	
		return (String)selectByPk("MDMA0030.NEW_SEQX_FILD", searchVo);

	}	
	
	/**
	 * <pre>
	 *  거래명세서를 끊었는지 확인한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 거래명세서번로
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processCOUNT00(Map dataVo) throws Exception {
	
		return (String)selectByPk("MDMA0030.COUNT00", dataVo);
		
	}
}
