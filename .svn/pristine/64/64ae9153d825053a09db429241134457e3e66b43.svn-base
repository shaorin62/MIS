/**
 * core.erp.mcm.service.impl.MCMA0030Dao.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MCMA0030Dao - 매체사관리(신규) 프로그램 데이터처리 DAO 클래스
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
 * 2016.09.02	조민희		Initial Created.
 * 2016.10.06	최제현		Check and Revise.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MCMA0030Dao")
public class MCMA0030Dao extends CmmBaseDAO {
	
	/**
	 * <pre>
	 *  광고주관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MCMA0030.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  매체채널 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주 팀 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MCMA0030.SEARCH01", searchVo);
	}
	
	
	/**
	 * <pre>
	 *  코바넷매체코드 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 코바넷매체코드 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MCMA0030.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  SBS매체코드 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return SBS매체코드 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("MCMA0030.SEARCH03", searchVo);
	}

	/**
	 * <pre>
	 *  매체사 담당자 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 매체사 담당자 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		return list("MCMA0030.SEARCH04", searchVo);
	}
	
	/**
	 * <pre>
	 *  매체사 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 매체사 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		return list("MCMA0030.SEARCH05", searchVo);
	}
	
	/**
	 * <pre>
	 *  매체사코드로 담당자 메일 가져오기
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH06(String  sHIGH_CODE) throws Exception {
	
		return list("MCMA0030.SEARCH06", sHIGH_CODE);

	}
	
	/**
	 * <pre>
	 *  매체사관리 신규 매체 코드채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 광고주 팀 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_CUST_CODE(Map searchVo) throws Exception {
	
		return (String)selectByPk("MCMA0030.NEW_CUST_CODE", searchVo);

	}
	
	/**
	 * <pre>
	 *  매체담당자 신규 코드채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 광고주 팀 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_SEQN_NUMB(Map saveData) throws Exception {
	
		return (String)selectByPk("MCMA0030.NEW_SEQN_NUMB", saveData);

	}
	
	/**
	 * <pre>
	 *  매체채널 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("MCMA0030.SAVE01", dataVo);
	}
	
	/**
	 * <pre>
	 *  코바넷매체코드 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return update("MCMA0030.SAVE02", dataVo);

	}
	
	/**
	 * <pre>
	 *  SBS매체코드 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE03(Map dataVo) throws Exception {
	
		return update("MCMA0030.SAVE03", dataVo);

	}
	
	/**
	 * <pre>
	 * 코바넷매체코드 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE04(Map dataVo) throws Exception {
	
		return update("MCMA0030.SAVE04", dataVo);

	}
	
	/**
	 * <pre>
	 *    SBS매체코드 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE05(Map dataVo) throws Exception {
	
		return update("MCMA0030.SAVE05", dataVo);

	}
	
	/**
	 * <pre>
	 *  매체담당자 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE06(Map dataVo) throws Exception {
		return insert("MCMA0030.SAVE06", dataVo);
	}
	
	/**
	 * <pre>
	 *  매체채널 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("MCMA0030.UPDATE01", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  코바넷매체코드 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
	
		return update("MCMA0030.UPDATE02", dataVo);
	
	}
	

	
	/**
	 * <pre>
	 *  SBS매체코드  테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE03(Map dataVo) throws Exception {
	
		return update("MCMA0030.UPDATE03", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  매체담당자 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE04(Map dataVo) throws Exception {
	
		return update("MCMA0030.UPDATE04", dataVo);
	
	}
	
	

	
	/**
	 * <pre>
	 *  매체채널 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return update("MCMA0030.DELETE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  코바넷매체코드 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
	
		return update("MCMA0030.DELETE02", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  SBS매체코드 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE03(Map dataVo) throws Exception {
	
		return update("MCMA0030.DELETE03", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  매체 담당자 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE04(Map dataVo) throws Exception {
	
		return update("MCMA0030.DELETE04", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  코바넷코드 얻기
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 코바넷코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processGET_KBNT_CODE(Map searchVo) throws Exception {
		return (String)selectByPk("MCMA0030.GET_KBNT_CODE", searchVo);

	}
	
	/**
	 * <pre>
	 *  입력안된 데이터가 있는지 찾는다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return integer 
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processCOUNT00(Map searchVo) {
		// TODO Auto-generated method stub
		return (int)select("MCMA0030.COUNT00",searchVo);
	}	
		
	/**
	 * <pre>
	 *  입력안된 데이터가 있는지 찾는다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return integer 
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processCOUNT01(Map searchVo) {
		// TODO Auto-generated method stub
		return (int)select("MCMA0030.COUNT01",searchVo);
	}	
			
	/**
	 * <pre>
	 *  매체가 이미 코바넷 테이블에 입력되어있는지 확인한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return integer 
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processCOUNT02(Map searchVo) {
		// TODO Auto-generated method stub
		return (int)select("MCMA0030.COUNT02",searchVo);
	}	
	
	
	
}
