/**
 * core.erp.mac.service.impl.MACA0021Dao.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MACA0021Dao - 매체 세금계산서 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2017.03.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2017.03.06	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MACA0021Dao")
public class MACA0021Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  위수탁 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MACA0021.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MACA0021.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 디테일 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MACA0021.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 디테일 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("MACA0021.SEARCH02", searchVo);
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
	public Object processSEARCH04(Map searchVo) throws Exception {
		return list("MACA0021.SEARCH04", searchVo);
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("MACA0021.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("MACA0021.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 디테일 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
		return insert("MACA0021.SAVE02", dataVo);

	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 디테일 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE03(Map dataVo) throws Exception {
		return insert("MACA0021.SAVE03", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("MACA0021.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 디테일 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE10(Map dataVo) throws Exception {
	
		return delete("MACA0021.DELETE10", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("MACA0021.DELETE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 디테일 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE11(Map dataVo) throws Exception {
	
		return delete("MACA0021.DELETE11", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 디테일 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
		return delete("MACA0021.DELETE02", dataVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 디테일 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE03(Map dataVo) throws Exception {
		return delete("MACA0021.DELETE03", dataVo);
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 수정.
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processUPDATE00(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0021.UPDATE00", rowVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 수정.
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processUPDATE01(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0021.UPDATE01", rowVo);
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 디테일 수정.
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processUPDATE02(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0021.UPDATE02", rowVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 디테일 수정.
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processUPDATE03(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0021.UPDATE03", rowVo);
	}

	/**
	 * <pre>
	 *  위수탁 세금계산서 일련번호 생성
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	public String processNew_TAXX_NUMB00(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return (String) selectByPk("MACA0021.New_TAXX_NUMB00", rowVo);
	}
	
	
	/**
	 * <pre>
	 *  세금계산서 디테일 일련번호 생성
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	public String processNew_TAXX_IDXX(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return (String) selectByPk("MACA0021.New_TAXX_IDXX", rowVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 일련번호 생성
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	public String processNew_TAXX_NUMB01(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return (String) selectByPk("MACA0021.New_TAXX_NUMB01", rowVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 일련번호 채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	public String processTAXX_NUMB01(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return (String) selectByPk("MACA0021.TAXX_NUMB01", rowVo);
	}
	
	
	/**
	 * <pre>
	 *  매체 위수탁 세금계산서(헤더)를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		return list("MACA0021.PRINT00", searchVo);
	}
	
	/**
	 * <pre>
	 *  매체 위수탁 세금계산서(디테일)를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
		return list("MACA0021.PRINT01", searchVo);
	}

	/**
	 * <pre>
	 *  매체 수수료 세금계산서(헤더)를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT02(Map searchVo) throws Exception {
		return list("MACA0021.PRINT02", searchVo);
	}
	
	/**
	 * <pre>
	 *  매체 수수료 세금계산서(디테일)를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT03(Map searchVo) throws Exception {
		return list("MACA0021.PRINT03", searchVo);
	}
	
	/**
	 * <pre>
	 *  세금계산서가 발송되었는지 여부 파악
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서 발송 FLAG
	 * @throws Exception - 처리시 발생한 예외
	 */
	public String getSEND_FLAG(Map rowVo) throws Exception{
		// TODO Auto-generated method stub
		return (String) selectByPk("MACA0021.SEND_FLAG", rowVo);
	}
	
}
