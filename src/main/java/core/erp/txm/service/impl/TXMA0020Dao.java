package core.erp.txm.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;



/**
 * <pre>
 *	TXMA0020Dao - 부가세마감처등록
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 4.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 4.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TXMA0020Dao")
public class TXMA0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  부가세마감처리를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 예산과목계정매핑관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		return list("TXMA0020.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  부가세마감처리를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 예산과목계정매핑관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		
		return list("TXMA0020.SEARCHXX", searchVo);

	}
	
	/**
	 * <pre>
	 *  부가세마감처리를 저장한다.
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("TXMA0020.SAVE00", dataVo);

	}
}
