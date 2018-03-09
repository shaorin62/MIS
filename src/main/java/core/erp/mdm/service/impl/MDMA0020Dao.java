/**
 * core.erp.mdm.service.impl.MDMA0020Dao.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MDMA0020Dao - 수수료 일괄청약(신규) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.12.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date				   Modifier	     	Comment
 * ====================================================
 * 2016.12.04			최제현			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MDMA0020Dao")
public class MDMA0020Dao extends CmmBaseDAO {

	
	/**
	 * <pre>
	 *  수수료일괄청약 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 소재별 운행현황 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		return list("MDMA0020.SEARCH00", searchVo);
	}
	
	

	/**
	 * <pre>
	 * 수수료시트 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("MDMA0020.SAVE00", dataVo);
	}
	
	/**
	 * <pre>
	 * 수수료전파 테이블에 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("MDMA0020.SAVE01", dataVo);
	}
	
	/**
	 * <pre>
	 * 수수료전파 테이블에 저장 - 위수탁 금액 입력
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE01(Map dataVo) throws Exception {
		return update("MDMA0020.UPDATE01", dataVo);
	}
	
	/**
	 * <pre>
	 * 수수료율, 부가세액, 합계액 입력
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE11(Map dataVo) throws Exception {
		return update("MDMA0020.UPDATE11", dataVo);
	}
	

	
	/**
	 * <pre>
	 *  초기화
	 * </pre>
	 * @param saveData 
	 * @param 
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processDELETE00(Map saveData) throws Exception {
		return delete("MDMA0020.DELETE00",saveData);
		
	}
	
	/**
	 * <pre>
	 *  세금계산서가 생성된 수수료내역의 개수를 센다.
	 * </pre>
	 * @param saveData 
	 * @param 
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processCOUNT00(Map saveData) throws Exception {
		return (int)selectByPk("MDMA0020.COUNT00",saveData);
		
	}
	
	/**
	 * <pre>
	 *  초기화
	 * </pre>
	 * @param saveData 
	 * @param 
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processDELETE01(Map saveData) throws Exception {
		return delete("MDMA0020.DELETE01",saveData);
		
	}
	
	/**
	 * <pre>
	 *  이미 등록된 된 일괄청약이 있는지 확인한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 일괄청약 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object prcessISETCM(Map searchVo) throws Exception {
		
		return list("MDMA0020.ISETCM", searchVo);
	}
	
	/**
	 * <pre>
	 *  이미 확정처리 된 일괄청약이 있는지 확인한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 일괄청약 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object prcessISCOMISSION(Map searchVo) throws Exception {
		
		return list("MDMA0020.ISCOMISSION", searchVo);
	}
}
