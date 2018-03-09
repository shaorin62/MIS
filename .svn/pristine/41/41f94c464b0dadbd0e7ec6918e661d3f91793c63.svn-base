/**
 * core.erp.tmm.service.impl.TMMA0100Dao.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;


/**
 * <pre>
 *	TMMA0100Dao - 다국어명칭관리 프로그램 데이터처리 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 10. 17.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 10. 17.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TMMA0100Dao")
public class TMMA0100Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 * 다국어명칭관리마스터 목록을 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("TMMA0100.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  다국어명칭관리상세 목록을 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("TMMA0100.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  다국어명칭관리상세 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("TMMA0100.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  다국어명칭관리상세 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("TMMA0100.DELETE00", dataVo);
		
	}

}
