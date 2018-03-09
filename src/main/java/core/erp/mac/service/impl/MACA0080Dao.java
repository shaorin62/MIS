/**
 * core.erp.mdm.service.impl.MACA0080Dao.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MACA0080Dao - 매체 전표순번생성 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.06	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MACA0080Dao")
public class MACA0080Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  광고주 순번 목록을 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주,매체코드,매체사 순번 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MACA0080.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  매체코드 순번 목록을 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주,매체코드,매체사 순번 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MACA0080.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  매체사 순번 목록을 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주,매체코드,매체사 순번 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MACA0080.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주 순번 입력
	 * </pre>
	 * @param paramMap - 입력할 데이터
	 * @return 입력 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public Object processSAVE00(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return insert("MACA0080.SAVE00", rowVo);
	}
	
	/**
	 * <pre>
	 *  매체구분 순번 입력
	 * </pre>
	 * @param paramMap - 입력할 데이터
	 * @return 입력 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public Object processSAVE01(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return insert("MACA0080.SAVE01", rowVo);
	}
	
	/**
	 * <pre>
	 *  매체사코드 순번 입력
	 * </pre>
	 * @param paramMap - 입력할 데이터
	 * @return 입력 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public Object processSAVE02(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return insert("MACA0080.SAVE02", rowVo);
	}
	
	/**
	 * <pre>
	 *  광고주 순번 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processUPDATE00(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0080.processUPDATE00", rowVo);
	}
	
	/**
	 * <pre>
	 *  매체코드 순번 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processUPDATE01(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0080.processUPDATE01", rowVo);
	}
	
	/**
	 * <pre>
	 *  매체사 순번 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processUPDATE02(Map rowVo) throws Exception {
		// TODO Auto-generated method stub
		return update("MACA0080.processUPDATE02", rowVo);
	}
	
	/**
	 * <pre>
	 *  광고주 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object getCUST_CODE(Map rowVo) throws Exception {
		return selectByPk("MACA0080.getCUST_CODE", rowVo);
	}
	
	/**
	 * <pre>
	 *  매체구분 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 매체구분
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object getMEDX_FLAG(Map rowVo) throws Exception {
		return selectByPk("MACA0080.getMEDX_FLAG", rowVo);
	}
	
	/**
	 * <pre>
	 *  매체사 코드 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 매체사코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object getMEDX_CODE(Map rowVo) throws Exception {
		return selectByPk("MACA0080.getMEDX_CODE", rowVo);
	}

}
