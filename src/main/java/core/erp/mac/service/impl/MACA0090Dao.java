/**
 * core.erp.mac.service.impl.MACA0090Dao.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MACA0090Dao - 전표처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.22
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.22	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MACA0090Dao")
public class MACA0090Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  위수탁 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MACA0090.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  등록된 전표 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전표 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MACA0090.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MACA0090.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  발송 수수료 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("MACA0090.SEARCH03", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주목록조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("MACA0090.SEARCH04", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  위수탁 전표생성
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("MACA0090.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  위수탁 일괄 전표생성
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE10(Map dataVo) throws Exception {
		return insert("MACA0090.SAVE10", dataVo);

	}
	
	/**
	 * <pre>
	 *  수수료 전표생성
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("MACA0090.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 *  수수료 전표 합산 생성
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE11(Map dataVo) throws Exception {
		return insert("MACA0090.SAVE11", dataVo);

	}
	
	/**
	 * <pre>
	 *  개별청약서에 위수탁 전표번호 기입
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE00(Map dataVo) throws Exception {
		return insert("MACA0090.UPDATE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  개별청약서에 위수탁 전표번호 기입
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE10(Map dataVo) throws Exception {
		return insert("MACA0090.UPDATE10", dataVo);

	}
	
	/**
	 * <pre>
	 *  개별청약서에 수수료 전표번호 기입
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE01(Map dataVo) throws Exception {
		return insert("MACA0090.UPDATE01", dataVo);

	}
	
	
	
	
	/**
	 * <pre>
	 *  임시전표삭제
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processDELETE00(Map dataVo) throws Exception {
		return delete("MACA0090.DELETE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  세금계산서에 전표번호 삭제
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processDELETE01(Map dataVo) throws Exception {
		return update("MACA0090.DELETE01", dataVo);

	}

	/**
	 * <pre>
	 *  개별청약서에 위수탁 전표번호 삭제
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE02(Map dataVo) throws Exception {
		return update("MACA0090.UPDATE02", dataVo);

	}
	
	/**
	 * <pre>
	 *  개별청약서에 수수료 전표번호 삭제
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE03(Map dataVo) throws Exception {
		return update("MACA0090.UPDATE03", dataVo);

	}
	



}
