package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYF0030Dao - 퇴직금계산처리 프로그램 데이터처리 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	안윤준
 * @since	2016. 9. 7.
 * @version	1.0
 * @see		{@link }
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 7.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("PAYF0030Dao")
public class PAYF0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  X01과세이연계좌 순번조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 과세이연계좌 순번
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH01", searchVo);
	}

	/**
	 * <pre>
	 *  X02자료존재여부 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 자료존재여부
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCH02(Map searchVo) throws Exception {
		return (String) selectByPk("PAYF0030.SEARCH02", searchVo);
	}

	/**
	 * <pre>
	 *  X03정년퇴직예정일 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 정년퇴직예정일
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH03", searchVo);
	}



	/**
	 * <pre>
	 *  X04퇴직금지급조서 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 퇴직금지급조서
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH04", searchVo);
	}

	/**
	 * <pre>
	 *  X05퇴직금지급조서 조회2
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 퇴직금지급조서
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH05", searchVo);
	}

	/**
	 * <pre>
	 *  X06급여 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 급여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH06(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH06", searchVo);
	}

	/**
	 * <pre>
	 *  X06급여 조회 (POP합계)
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 급여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSUMSEARCH06(Map searchVo) throws Exception {
		return list("PAYF0030.SUMSEARCH06", searchVo);
	}

	/**
	 * <pre>
	 *  X06급여 조회 (POP)
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 급여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPOPSEARCH00(Map searchVo) throws Exception {
		return list("PAYF0030.POPSEARCH00", searchVo);
	}

	/**
	 * <pre>
	 *  X07상여 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH07(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH07", searchVo);
	}

	/**
	 * <pre>
	 *  원천징수 영수증 리포트를 출력한다.
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT00", searchVo);
	}

	/**
	 * <pre>
	 * 여러명의 원천징수 영수증 리포트를 출력한다.
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT10(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT10", searchVo);
	}

	/**
	 * <pre>
	 *  지급결의서  리포트 상여 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT01", searchVo);
	}

	/**
	 * <pre>
	 *  지급결의서  리포트 급여내역 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT02(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT02", searchVo);
	}

	/**
	 * <pre>
	 * 지급결의서 리포트 퇴직금지급조서 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT03(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT03", searchVo);
	}

	/**
	 * <pre>
	 * 여러명의 지급결의서 리포트를 출력한다(상여).
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT04(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT04", searchVo);
	}

	/**
	 * <pre>
	 * 여러명의 지급결의서 리포트를 출력한다.(급여내역)
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT05(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT05", searchVo);
	}

	/**
	 * <pre>
	 * 여러명의 지급결의서 리포트를 출력한다.(퇴직금지급조서)
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT06(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT06", searchVo);
	}

	/**
	 * <pre>
	 * 여러명의 지급결의서 리포트를 출력한다.(과세이연금액)
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT07(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT07", searchVo);
	}

	/**
	 * <pre>
	 * 여러명의 지급결의서 리포트를 출력한다.(퇴직보험금)
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT08(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT08", searchVo);
	}

	/**
	 * <pre>
	 * 지급결의서 리포트 퇴직보험금 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT09(Map searchVo) throws Exception {
		return list("PAYF0030.PRINT09", searchVo);
	}

	/**
	 * <pre>
	 *  X07상여 조회 (POP)
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPOPSEARCH01(Map searchVo) throws Exception {
		return list("PAYF0030.POPSEARCH01", searchVo);
	}

	/**
	 * <pre>
	 *  X07상여 조회 (POP)
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 상여
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPOPSEARCH02(Map searchVo) throws Exception {
		return list("PAYF0030.POPSEARCH02", searchVo);
	}

	/**
	 * <pre>
	 *  X08퇴직정산 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 퇴직정산
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH08(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH08", searchVo);
	}

	/**
	 * <pre>
	 *  X09추가수당 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 추가수당
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH09(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH09", searchVo);
	}

	/**
	 * <pre>
	 *  X10추가공제 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 추가공제
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH10", searchVo);
	}

	/**
	 * <pre>
	 *  X11과세이연계좌 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 과세이연계좌
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH11(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH11", searchVo);
	}

	/**
	 * <pre>
	 *  X12퇴직정산처리 후 과세이연계좌정보반영
	 * </pre>
	 * @param searchVo - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC12(Map searchVo) throws Exception {
		return update("PAYF0030.PROC12", searchVo);
	}

	/**
	 * <pre>
	 *  X13마감여부 조회
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 마감여부
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCH13(Map searchVo) throws Exception {
		return (String) selectByPk("PAYF0030.SEARCH13", searchVo);
	}

	/**
	 * <pre>
	 *  X14직원 조회(퇴직자)
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 직원
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH14(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH14", searchVo);
	}

	/**
	 * <pre>
	 *  X14직원 조회(중도정산자)
	 * </pre>
	 * @param searchVo - 조회 파라미터
	 * @return 직원
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH15(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH15", searchVo);
	}

	/**
	 * <pre>
	 *  X16조서,급여, 상여 처리
	 * </pre>
	 * @param searchVo - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC16(Map searchVo) throws Exception {
		return update("PAYF0030.PROC16", searchVo);
	}

	/**
	 * <pre>
	 *  X01퇴직정산 마감
	 * </pre>
	 * @param searchVo - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC01(Map searchVo) throws Exception {
		return update("PAYF0030.PROC01", searchVo);
	}

	/**
	 * <pre>
	 *  X02퇴직정산 일괄처리
	 * </pre>
	 * @param searchVo - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC02(Map searchVo) throws Exception {
		return update("PAYF0030.PROC02", searchVo);
	}

	/**
	 * <pre>
	 *  급여평균 ~ 퇴직연금예치금 갱신
	 * </pre>
	 * @param searchVo - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC03(Map searchVo) throws Exception {
		return update("PAYF0030.PROC03", searchVo);
	}

	/**
	 * <pre>
	 *  급여자료 저장
	 * </pre>
	 * @param searchVo - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE00(Map searchVo) throws Exception {
		return (String) insert("PAYF0030.SAVE00", searchVo);
	}

	/**
	 * <pre>
	 *  상여자료 저장
	 * </pre>
	 * @param searchVo - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE01(Map searchVo) throws Exception {
		return (String) insert("PAYF0030.SAVE01", searchVo);
	}

	/**
	 * <pre>
	 *  급여자료 저장(POP)
	 * </pre>
	 * @param searchVo - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPOPSAVE00(Map searchVo) throws Exception {
		return update("PAYF0030.POPSAVE00", searchVo);
	}

	/**
	 * <pre>
	 *  상여자료 저장 (POP)
	 * </pre>
	 * @param searchVo - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processPOPSAVE01(Map searchVo) throws Exception {
		return (String) insert("PAYF0030.POPSAVE01", searchVo);
	}

	/**
	 * <pre>
	 *  추가지급 저장
	 * </pre>
	 * @param searchVo - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE02(Map searchVo) throws Exception {
		return (String) insert("PAYF0030.SAVE02", searchVo);
	}

	/**
	 * <pre>
	 *  과세이연 저장
	 * </pre>
	 * @param searchVo - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE03(Map searchVo) throws Exception {
		return (String) insert("PAYF0030.SAVE03", searchVo);
	}

	/**
	 * <pre>
	 *  퇴직금지급조서 저장
	 * </pre>
	 * @param searchVo - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE04(Map searchVo) throws Exception {
		return (String) insert("PAYF0030.SAVE04", searchVo);
	}

	/**
	 * <pre>
	 *  사원 저장
	 * </pre>
	 * @param searchVo - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE05(Map searchVo) throws Exception {
		return (String) insert("PAYF0030.SAVE05", searchVo);
	}

	/**
	 * <pre>
	 *  급여자료 테이블 수정
	 * </pre>
	 * @param searchVo - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map searchVo) throws Exception {
		return update("PAYF0030.UPDATE00", searchVo);
	}

	/**
	 * <pre>
	 *  상여자료 테이블 수정
	 * </pre>
	 * @param searchVo - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map searchVo) throws Exception {
		return update("PAYF0030.UPDATE01", searchVo);
	}

	/**
	 * <pre>
	 *  추가지급 테이블 수정
	 * </pre>
	 * @param searchVo - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map searchVo) throws Exception {
		return update("PAYF0030.UPDATE02", searchVo);
	}

	/**
	 * <pre>
	 *  과세이연 테이블 수정
	 * </pre>
	 * @param searchVo - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE03(Map searchVo) throws Exception {
		return update("PAYF0030.UPDATE03", searchVo);
	}

	/**
	 * <pre>
	 *  퇴직금지급조서 테이블 수정
	 * </pre>
	 * @param searchVo - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE04(Map searchVo) throws Exception {
		return update("PAYF0030.UPDATE04", searchVo);
	}

	/**
	 * <pre>
	 *  급여자료 테이블 삭제
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map searchVo) throws Exception {
		return delete("PAYF0030.DELETE00", searchVo);
	}

	/**
	 * <pre>
	 *  상여자료 테이블 삭제
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map searchVo) throws Exception {
		return delete("PAYF0030.DELETE01", searchVo);
	}

	/**
	 * <pre>
	 *  급여자료 테이블 삭제(POP)
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPOPDELETE00(Map searchVo) throws Exception {
		return delete("PAYF0030.POPDELETE00", searchVo);
	}

	/**
	 * <pre>
	 *  상여자료 테이블 삭제(POP)
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPOPDELETE01(Map searchVo) throws Exception {
		return delete("PAYF0030.POPDELETE01", searchVo);
	}

	/**
	 * <pre>
	 *  지급공제 테이블 삭제
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map searchVo) throws Exception {
		return delete("PAYF0030.DELETE02", searchVo);
	}

	/**
	 * <pre>
	 *  과세이연 테이블 삭제
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE03(Map searchVo) throws Exception {
		return delete("PAYF0030.DELETE03", searchVo);
	}

	/**
	 * <pre>
	 *  퇴직금지급조서 테이블 삭제
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE04(Map searchVo) throws Exception {
		return delete("PAYF0030.DELETE04", searchVo);
	}

	/**
	 * <pre>
	 *  추가지급공제 삭제
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE17(Map searchVo) throws Exception {
		return delete("PAYF0030.DELETE17", searchVo);
	}

	/**
	 * <pre>
	 *  급여 삭제
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE18(Map searchVo) throws Exception {
		return delete("PAYF0030.DELETE18", searchVo);
	}

	/**
	 * <pre>
	 *  상여 삭제
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE19(Map searchVo) throws Exception {
		return delete("PAYF0030.DELETE19", searchVo);
	}

	/**
	 * <pre>
	 *  과세이연계좌 삭제
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE20(Map searchVo) throws Exception {
		return delete("PAYF0030.DELETE20", searchVo);
	}

	/**
	 * <pre>
	 *  퇴직정산 삭제
	 * </pre>
	 * @param searchVo - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE21(Map searchVo) throws Exception {
		return delete("PAYF0030.DELETE21", searchVo);
	}

	/**
	 * <pre>
	 *  결재일련번호 채번 반환
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 결재 SEQ 조회
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH99(Map searchVo) throws Exception {
		return list("PAYF0030.SEARCH99", searchVo);

	}

	/**
	 * <pre>
	 *  전자결재 연동자료 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE99(Map dataVo) throws Exception {
		return insert("PAYF0030.SAVE99", dataVo);

	}

	//아래는 웹스퀘어 그대로 소스임.
//	/**
//	 * 퇴직금계산처리 출력 조회
//	 * @param searchVo - 조회 파라미터
//	 * @return 데이터 목록
//	 * @throws Exception - 처리시 발생한 예외
//	 */
//	public List<Map<String, Object>> getREPORT00(Map<String, Object> searchVo) {
//		return (List<Map<String, Object>>)list("PAYF0030.REPORT00", searchVo);
//	}
//
//
//	/**
//	 * 퇴직금계산처리 출력 조회
//	 * @param searchVo - 조회 파라미터
//	 * @return 데이터 목록
//	 * @throws Exception - 처리시 발생한 예외
//	 */
//	public List<Map<String, Object>> getREPORT01(Map<String, Object> searchVo) {
//		return (List<Map<String, Object>>)list("PAYF0030.REPORT01", searchVo);
//	}
//
//
//	/**
//	 * 퇴직금계산처리 출력 조회
//	 * @param searchVo - 조회 파라미터
//	 * @return 데이터 목록
//	 * @throws Exception - 처리시 발생한 예외
//	 */
//	public List<Map<String, Object>> getREPORT02(Map<String, Object> searchVo) {
//		return (List<Map<String, Object>>)list("PAYF0030.REPORT02", searchVo);
//	}
//
//
//	/**
//	 * 퇴직금계산처리 출력 조회
//	 * @param searchVo - 조회 파라미터
//	 * @return 데이터 목록
//	 * @throws Exception - 처리시 발생한 예외
//	 */
//	public List<Map<String, Object>> getREPORT03(Map<String, Object> searchVo) {
//		return (List<Map<String, Object>>)list("PAYF0030.REPORT03", searchVo);
//	}
//
//
//	/**
//	 * 퇴직금계산처리 출력 조회
//	 * @param searchVo - 조회 파라미터
//	 * @return 데이터 목록
//	 * @throws Exception - 처리시 발생한 예외
//	 */
//	public List<Map<String, Object>> getREPORT04(Map<String, Object> searchVo) {
//		return (List<Map<String, Object>>)list("PAYF0030.REPORT04", searchVo);
//	}
//
//	/**
//	 * 퇴직금계산처리 출력 조회
//	 * @param searchVo - 조회 파라미터
//	 * @return 데이터 목록
//	 * @throws Exception - 처리시 발생한 예외
//	 */
//	public List<Map<String, Object>> getREPORT05(Map<String, Object> searchVo) {
//		return (List<Map<String, Object>>)list("PAYF0030.REPORT05", searchVo);
//	}

}
