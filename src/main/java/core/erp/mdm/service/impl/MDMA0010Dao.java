/**
 * core.erp.mdm.service.impl.MDMA0010Dao.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MDMA0010Dao - 전파 일괄청약(신규) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.01
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date				   Modifier	     	Comment
 * ====================================================
 * 2016.11.01			최제현			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MDMA0010Dao")
public class MDMA0010Dao extends CmmBaseDAO {

	
	/**
	 * <pre>
	 *  소재별 운행현황과 광고신탁집계표를 조인한 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 소재별 운행현황 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		return list("MDMA0010.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  등록된 일괄청약조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 등록된 일괄청약 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		
		return list("MDMA0010.SEARCH01", searchVo);
	}

	/**
	 * <pre>
	 * 소재별 운행현황 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("MDMA0010.SAVE00", dataVo);
	}
	
	/**
	 * <pre>
	 * 광고신탁집계표 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("MDMA0010.SAVE01", dataVo);
	}
	
	/**
	 * <pre>
	 * 전파청약 테이블 저장(일괄청약)
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
		return insert("MDMA0010.SAVE02", dataVo);
	}

	/**
	 * <pre>
	 *  오류처리(코바코코드없을시)
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE10(Map dataVo) throws Exception {
	
		return update("MDMA0010.UPDATE10", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  오류처리(코바코코드없을시)
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE11(Map dataVo) throws Exception {
	
		return update("MDMA0010.UPDATE11", dataVo);
	
	}

	
	/**
	 * <pre>
	 *  소재별운행현황 마지막행을 삭제한다.
	 * </pre>
	 * @param 
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE10() throws Exception {
	
		return delete("MDMA0010.DELETE10");
		
	}
	
	/**
	 * <pre>
	 *  광고신탁집계표 마지막행을 삭제한다.
	 * </pre>
	 * @param 
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE11() throws Exception {
	
		return delete("MDMA0010.DELETE11");
		
	}
	
	/**
	 * <pre>
	 *  소재별운행현황 임시테이블데이터를 삭제한다.
	 * </pre>
	 * @param 
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE12(Map dataVo) throws Exception {
	
		return delete("MDMA0010.DELETE12",dataVo);
		
	}
	
	/**
	 * <pre>
	 *  광고신탁집계표 임시테이블데이터를 삭제한다.
	 * </pre>
	 * @param 
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE13(Map dataVo) throws Exception {
	
		return delete("MDMA0010.DELETE13",dataVo);
		
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
	
		return (String)selectByPk("MDMA0010.NEW_SEQX_FILD", searchVo);

	}

	/**
	 * <pre>
	 *  소재별운행현황테이블의 데이터 개수를 센다
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 일련번호 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processGET_MTTP_COUNT() throws Exception{
		// TODO Auto-generated method stub
		return (int)select("MDMA0010.GET_MTTP_COUNT");
	}	
	
	/**
	 * <pre>
	 *  임시테이블데이터삭제
	 * </pre>
	 * @param 
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map searchVo) throws Exception {
		//개별청약서의 데이터를 지운다.
		delete("MDMA0010.DELETE01",searchVo);
		//광고신탁집계표데이터삭제
		delete("MDMA0010.DELETE13");
		//소재별운행현황데이터삭제
		return delete("MDMA0010.DELETE00");
		
	}
	
	/**
	 * <pre>
	 *  소재별운행현황테이블의 데이터 개수를 센다
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 소재별운행현황테이블의 데이터 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int COUNT_MD_MATRXM() throws Exception{
		// TODO Auto-generated method stub
		return (int)select("MDMA0010.COUNT_MD_MATRXM");
	}	
	
	/**
	 * <pre>
	 *  광고주별 집계표 테이블의 데이터 개수를 센다
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주별 집계표테이블의 데이터 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int COUNT_SBTPXM() throws Exception{
		// TODO Auto-generated method stub
		return (int)select("MDMA0010.COUNT_SBTPXM");
	}	
	
	/**
	 * <pre>
	 *  거래명세서가 생성된 개별청약이 있는지 찾는다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 개별청약 테이블의 데이터 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int COUNT_ETMDXM(String YEAR_MNTH) throws Exception{
		// TODO Auto-generated method stub
		return (int)select("MDMA0010.COUNT_ETMDXM",YEAR_MNTH);
	}	
}
