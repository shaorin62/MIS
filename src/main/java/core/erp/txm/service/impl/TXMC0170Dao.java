package core.erp.txm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TXMC0170Dao - 부가세전자신고 
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
@Repository("TXMC0170Dao")
public class TXMC0170Dao extends CmmBaseDAO {

	
	/**
	 * <pre>
	 * 부가세전자신고(인적사항)를 조회한다
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		return list("TXMC0170.SEARCH00", searchVo);

	}
	
	
	/**
	 * <pre>
	 * 부가세전자신고(1PAGE)를 조회한다
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		
		return list("TXMC0170.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 * 부가세전자신고(2PAGE)를 조회한다
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		
		return list("TXMC0170.SEARCH02", searchVo);

	}

	/**
	 * <pre>
	 * 부가세전자신고(과세표준명세, 면세수입금액)를 조회한다
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		
		return list("TXMC0170.SEARCH03", searchVo);

	}
	
	/**
	 * <pre>
	 * 부가가치세 공제감면 신고서 레코드 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH_V101_D2(Map searchVo) throws Exception {
		
		return list("TXMC0170.SEARCH_V101_D2", searchVo);

	}
	
	/**
	 * <pre>
	 * 부가가치세 가산세 신고서 레코드 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH_V101_D3(Map searchVo) throws Exception {
		
		return list("TXMC0170.SEARCH_V101_D3", searchVo);

	}
	/**
	 * <pre>
	 * 부가세전자신고(기타신고서 여부)를 조회한다
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		
		return list("TXMC0170.SEARCH04", searchVo);

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
	
		return insert("TXMC0170.SAVE00", dataVo);

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
	
		return insert("TXMC0170.SAVE01", dataVo);

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
	
		return insert("TXMC0170.SAVE02", dataVo);

	}
}
