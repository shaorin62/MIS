/**
 * core.erp.mcm.service.impl.MCMA0020Dao.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MCMA0020Dao - 광고주관리(신규) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.31	조민희		Initial Created.
 * 2016.10.05	최제현		Check and Revise.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MCMA0020Dao")
public class MCMA0020Dao extends CmmBaseDAO {
	
	/**
	 * <pre>
	 *  광고주관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MCMA0020.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주 팀 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주 팀 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MCMA0020.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  카테고리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 카테고리 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MCMA0020.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  코바넷코드 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 코바넷코드 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("MCMA0020.SEARCH03", searchVo);
	}
	
	/**
	 * <pre>
	 *  SBS코드 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return SBS코드 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		return list("MCMA0020.SEARCH04", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주 목록 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		return list("MCMA0020.SEARCH05", searchVo);
	}

	/**
	 * <pre>
	 *  광고주관리 신규 광고주 팀 코드채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 광고주 팀 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_CUST_CODE(Map searchVo) throws Exception {
	
		return (String)selectByPk("MCMA0020.NEW_CUST_CODE", searchVo);

	}	
	
	/**
	 * <pre>
	 *  카테코드가 있는지 확인
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 카테고리 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processGET_CATE_CODE(Map searchVo) throws Exception {
	
		return (String)selectByPk("MCMA0020.GET_CATE_CODE", searchVo);

	}	
	
	/**
	 * <pre>
	 *  신규 카테고리 코드채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 카테고리 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_CATE_CODE(Map searchVo) throws Exception {
	
		return (String)selectByPk("MCMA0020.NEW_CATE_CODE", searchVo);

	}	
	
	/**
	 * <pre>
	 *  신규 사업부 코드 채번 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 사업부코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_SUBX_CODE(Map searchVo) throws Exception {
	
		return (String)selectByPk("MCMA0020.NEW_SUBX_CODE", searchVo);

	}	
	
	/**
	 * <pre>
	 *  광고주코드 유무 확인
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processGET_CUST_CODE(Map searchVo) throws Exception {
		return (String)selectByPk("MCMA0020.GET_CUST_CODE", searchVo);

	}	
	
	/**
	 * <pre>
	 *  광고주팀 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("MCMA0020.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 *  카테고리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("MCMA0020.SAVE02", dataVo);

	}
	
	/**
	 * <pre>
	 *  코바넷코드 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE03(Map dataVo) throws Exception {
	
		return insert("MCMA0020.SAVE03", dataVo);

	}
	
	/**
	 * <pre>
	 *  SBS코드 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE04(Map dataVo) throws Exception {
	
		return insert("MCMA0020.SAVE04", dataVo);

	}

	/**
	 * <pre>
	 *  광고주팀 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("MCMA0020.UPDATE01", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  카테고리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
		return update("MCMA0020.UPDATE02", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  코바넷코드 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE03(Map dataVo) throws Exception {
	
		return update("MCMA0020.UPDATE03", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  SBS코드 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE04(Map dataVo) throws Exception {
	
		return update("MCMA0020.UPDATE04", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  광고주팀 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("MCMA0020.DELETE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  카테고리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
	
		return delete("MCMA0020.DELETE02", dataVo);
		
	}
	
}
