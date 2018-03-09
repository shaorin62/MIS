package core.erp.bdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmAbstractDAO;
import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	BDMD0010Dao - 품의예산관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	양현덕 <yhd@inbus.co.kr>
 * @since	2016. 06. 27.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 27.	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("BDMD0010Dao")
public class BDMD0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  품의예산관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통품의예산관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("BDMD0010.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  품의예산관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("BDMD0010.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  품의예산관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("BDMD0010.UPDATE00", dataVo);
		
	}
	/**
	 * <pre>
	 *  품의예산관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("BDMD0010.DELETE00", dataVo);
		
	}

}