/**
 * core.erp.mdm.service.impl.MACA0030Dao.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MACA0030Dao - 매체 세금계산서 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.21	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MACA0030Dao")
public class MACA0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  위수탁 미발행 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MACA0030.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MACA0030.SEARCH01", searchVo);
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
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MACA0030.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 디테일 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서 디테일 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("MACA0030.SEARCH03", searchVo);
	}
	
	
	/**
	 * <pre>
	 *  세금계산서 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("MACA0030.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  세금계산서 디테일 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("MACA0030.SAVE01", dataVo);

	}
	

	/**
	 * <pre>
	 *  광고주별 위수탁 세금계산서합산
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE10(Map dataVo) throws Exception {
	
		return update("MACA0030.UPDATE10", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  세금계산서 디테일에 있는 매체구분FLAG를 가져온다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미발행 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object getMEDX_FLAG(Map searchVo) throws Exception {
		return list("MACA0030.getMEDX_FLAG", searchVo);
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
	
		return delete("MACA0030.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  세금계산서 디테일 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("MACA0030.DELETE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  세금계산서 디테일 MEMO_FILD 내용수정.
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processUPDATE00(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0030.UPDATE00", rowVo);
	}
	
	/**
	 * <pre>
	 *  세금계산서 헤더 부가세 수정.
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processUPDATE01(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0030.UPDATE01", rowVo);
	}
	
	/**
	 * <pre>
	 *  영수구분수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processUPDATE02(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0030.UPDATE02", rowVo);
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
		return (String) selectByPk("MACA0030.New_TAXX_NUMB00", rowVo);
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 일련번호 채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	public String processTAXX_NUMB00(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return (String) selectByPk("MACA0030.TAXX_NUMB00", rowVo);
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
		return (String) selectByPk("MACA0030.New_TAXX_IDXX", rowVo);
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
		return (String) selectByPk("MACA0030.SEND_FLAG", rowVo);
	}
	
	/**
	 * <pre>
	 *  전표가 생성되었는지 여부 파악
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전표번호
	 * @throws Exception - 처리시 발생한 예외
	 */
	public String getSACH_NUMB(Map rowVo) throws Exception{
		// TODO Auto-generated method stub
		return (String) selectByPk("MACA0030.SACH_NUMB", rowVo);
	}

	/**
	 * <pre>
	 *  위수탁 거래명세서에 세금계산서 생성 플래그 기입
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int updateTAXX_FLAG00(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0030.updateTAXX_FLAG00", rowVo);
	}
	
	/**
	 * <pre>
	 *  위수탁 거래명세서에 세금계산서 생성 플래그 삭제
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int updateTAXX_FLAG_Del00(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0030.updateTAXX_FLAG_Del00", rowVo);
	}
	

	/**
	 * <pre>
	 *  개별청약서에 위수탁 세금계산서 번호 기입
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int updateTRTX_NUMB(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0030.updateTRTX_NUMB", rowVo);
	}
	
	
	/**
	 * <pre>
	 *  개별청약서에 위수탁 세금계산서 번호 삭제
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int updateTRTX_NUMB_Del(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0030.updateTRTX_NUMB_Del", rowVo);
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
		return list("MACA0030.PRINT00", searchVo);
	}

	
}
