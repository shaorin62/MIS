/**
 * core.erp.mdm.service.impl.MACA0020P01Dao.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MACA0020P01Dao - 매체 수정 세금계산서 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.12.15
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.15	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MACA0020P01Dao")
public class MACA0020P01Dao extends CmmBaseDAO {
	
	/** 계산서번호 채번 **/ 
	@SuppressWarnings("deprecation")
	public String getTAXX_NUMB(String sDEND_DATE) throws Exception{
		return (String)getSqlMapClient().queryForObject("MACA0020P01.getTAXX_NUMB", sDEND_DATE);
	}
	
	/**
	 * <pre>
	 *  위수탁 수정 세금계산서 생성을 위한 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
	
		return list("MACA0020P01.SEARCH10", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  매체 위수탁 수정세금계산서  생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE10(Map dataVo) throws Exception {
	
		return insert("MACA0020P01.SAVE10", dataVo);

	}
	
	/**
	 * <pre>
	 *  매체 위수탁 수정세금계산서 디테일  생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE20(Map dataVo) throws Exception {
	
		return insert("MACA0020P01.SAVE20", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  매체 위수탁 수정세금계산서  생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE20(Map dataVo) throws Exception {
	
		return update("MACA0020P01.UPDATE20", dataVo);

	}
	
	/**
	 * <pre>
	 *  매체 위수탁 수정세금계산서 디테일  생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE30(Map dataVo) throws Exception {
	
		return update("MACA0020P01.UPDATE30", dataVo);

	}
	
	/**
	 * <pre>
	 *  수정 수수료 세금계산서 생성을 위한 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH11(Map searchVo) throws Exception {
	
		return list("MACA0020P02.SEARCH11", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  매체 수수료 수정세금계산서  생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE11(Map dataVo) throws Exception {
	
		return insert("MACA0020P02.SAVE11", dataVo);

	}
	
	/**
	 * <pre>
	 *  매체 수수료 수정세금계산서 디테일  생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE21(Map dataVo) throws Exception {
	
		return insert("MACA0020P02.SAVE21", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  매체 수수료 수정세금계산서  생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE21(Map dataVo) throws Exception {
	
		return update("MACA0020P02.UPDATE21", dataVo);

	}
	
	/**
	 * <pre>
	 *  매체 수수료 수정세금계산서 디테일  생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE31(Map dataVo) throws Exception {
	
		return update("MACA0020P02.UPDATE31", dataVo);

	}


	
}
