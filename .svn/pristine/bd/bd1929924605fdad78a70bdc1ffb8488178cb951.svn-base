/**
 * core.erp.mac.service.impl.MACA0050Dao.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MACA0050Dao - 매체 세금계산서 발행 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.04	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MACA0050Dao")
public class MACA0050Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  미발송 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MACA0050.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  발송 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MACA0050.SEARCH01", searchVo);
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
		return list("MACA0050.SEARCH04", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주코드로 담당자 메일 가져오기
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(String  sCUST_CODE) throws Exception {
	
		return list("MACA0050.SEARCH05", sCUST_CODE);

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
	public Object processSEARCH06(String  sMEDX_CODE) throws Exception {
	
		return list("MACA0050.SEARCH06", sMEDX_CODE);

	}

	/**
	 * <pre>
	 *  세금계산서에 묶여있는 거래명세서의 개수를 가져온다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 거래명세수의 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processGET_DTI_LINE_NUMB(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return (int) selectByPk("MACA0050.GET_DTI_LINE_NUMB", rowVo);
	}
	
	/**
	 * <pre>
	 *  세금계산서에 묶여있는 거래명세서의 개수를 가져온다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 거래명세수의 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processGET_DTI_LINE_NUMA(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return (int) selectByPk("MACA0050.GET_DTI_LINE_NUMA", rowVo);
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 테이블 저장(세금계산서 발송)
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		//XXSB_DTI_MAIN에 입력
		insert("MACA0050.SAVE00", dataVo);
		//XXSB_DTI_ITEM에 입력
		insert("MACA0050.SAVE10", dataVo);
		//XXSB_DTI_STATUS에 입력
		insert("MACA0050.SAVE11", dataVo);
		//XXSB_DTI_INTERFACE에 입력
		return insert("MACA0050.SAVE12", dataVo);

	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 테이블 저장(세금계산서 발송)
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		//XXSB_DTI_MAIN에 입력
		insert("MACA0050.SAVE01", dataVo);
		//XXSB_DTI_ITEM에 입력
		insert("MACA0050.SAVE10", dataVo);
		//XXSB_DTI_STATUS에 입력
		insert("MACA0050.SAVE11", dataVo);
		//XXSB_DTI_INTERFACE에 입력
		return insert("MACA0050.SAVE12", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  세금계산서 테이블 업데이트(발송표시)
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public void processUPDATE00(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		update("MACA0050.UPDATE00", rowVo);
	}
	
	/**
	 * <pre>
	 *  세금계산서 일련번호 채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	public String prcesssNEW_SEQ_ID(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return (String) selectByPk("MACA0050.NEW_SEQ_ID",rowVo);
	}
	
	/**
	 * <pre>
	 *  세금계산서에 전송 플래그,conversation_id 삭제
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int updateSEND_FLAG_Del00(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0060.updateSEND_FLAG_Del00", rowVo);
	}
	

}
