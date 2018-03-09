package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMC0160Dao - 부가가치세신고서 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 5.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 5.	황치웅		Initial Created.
 * 2016. 8.11.	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TXMC0160Dao")
public class TXMC0160Dao extends CmmBaseDAO {

	
	/**
	 * <pre>
	 * 부가가치세신고서(1페이지) 목록을 조회한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		return list("TXMC0160.SEARCH00", searchVo);

	}
	
	
	/**
	 * <pre>
	 * 부가가치세신고서(2페이지) 목록을 조회한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		
		return list("TXMC0160.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 * 부가가치세신고서(과세표준 명세) 목록을 조회한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		
		return list("TXMC0160.SEARCH02", searchVo);

	}

	/**
	 * <pre>
	 * 부가가치세신고서(1페이지) 목록을 처리한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		
		return list("TXMC0160.SEARCH03", searchVo);

	}
	
	/**
	 * <pre>
	 * 부가가치세신고서(2페이지) 목록을 처리한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		
		return list("TXMC0160.SEARCH04", searchVo);

	}
	
	/**
	 * <pre>
	 * 부가가치세신고서(과세표준 명세) 목록을 처리한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		
		return list("TXMC0160.SEARCH05", searchVo);

	}
	
	/**
	 * <pre>
	 * 인적사항 목록을 처리한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH07(Map searchVo) throws Exception {
		
		return list("TXMC0160.SEARCH07", searchVo);

	}
	
	/**
	 * <pre>
	 * 부가가치세신고서(1페이지)를 처리한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC03(Map searchVo) throws Exception {
		
		return list("TXMC0160.PROC03", searchVo);

	}
	
	/**
	 * <pre>
	 * 부가가치세신고서(2페이지)를 처리한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC04(Map searchVo) throws Exception {
		
		return list("TXMC0160.PROC04", searchVo);

	}
	
	/**
	 * <pre>
	 * * 부가가치세신고서(과세표준 명세)를 처리한다.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC05(Map searchVo) throws Exception {
		
		return list("TXMC0160.PROC05", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  부가가치세신고서(1페이지)저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("TXMC0160.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  부가가치세신고서(2페이지) 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("TXMC0160.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 *  부가가치세신고서(과세표준명세) 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("TXMC0160.SAVE02", dataVo);

	}
}
