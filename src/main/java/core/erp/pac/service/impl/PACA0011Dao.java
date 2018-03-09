/**
 * core.erp.tmm.service.impl.PACA0011Dao.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PACA0011ServiceImpl - 제작 세금계산서 생성을 위함
 * </pre>
 * 
 * @author	오세훈
 * @since	2017.03.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2017.03.06	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Repository("PACA0011Dao")
public class PACA0011Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  제작 세금계산서 예외 데이터 입력을 위함. 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PACA0011.SEARCH00", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  제작 세금계산서 예외 데이터 입력을 위함. 상세내용 조회 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PACA0011.SEARCH01", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  제작 세금계산서 기타 데이터 입력건 저장 헤더
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PACA0011.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  제작 세금계산서 기타 데이터 입력건 저장 헤더
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PACA0011.SAVE01", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  세금계산서 헤더 업데이트
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PACA0011.UPDATE00", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  세금계산서 상세 업데이트
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PACA0011.UPDATE01", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  공통코드마스터 테이블 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PACA0011.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  공통코드마스터 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("PACA0011.DELETE01", dataVo);
		
	}
	
	
	
	/** 계산서번호 채번 **/ 
	@SuppressWarnings("deprecation")
	public String getTAXX_NUMB(String sDEND_DATE) throws Exception{
		return (String)getSqlMapClient().queryForObject("PACA0011.getTAXX_NUMB", sDEND_DATE);
	}
	
	/** 계산서ID 채번 **/ 
	@SuppressWarnings("deprecation")
	public String getTAXX_IDXX(Map rowVo) throws Exception{
		return (String)getSqlMapClient().queryForObject("PACA0011.getTAXX_IDXX", rowVo);
	}


}
