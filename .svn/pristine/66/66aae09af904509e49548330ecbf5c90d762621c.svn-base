/**
 * core.erp.fam.service.impl.FSMF0010P01Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMF0010P01Dao - 건설중자산대체등록 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSMF0010P01Dao")
public class FSMF0010P01Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  건설중자산대체 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 건설중자산대체 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FSMF0010P01.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  자산대체번호 구하기
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 건설중자산대체 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCH01(Map searchMap) throws Exception {

		return (String) selectByPk("FSMF0010P01.SEARCH01", searchMap);

	}

	/**
	 * <pre>
	 *  건설중자산대체등록 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("FSMF0010P01.SAVE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {

		return update("FSMF0010P01.SAVE01", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {

		return update("FSMF0010P01.SAVE02", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSLIP00(Map dataVo) throws Exception {

		return update("FSMF0010P01.SLIP00", dataVo);

	}
	
}
