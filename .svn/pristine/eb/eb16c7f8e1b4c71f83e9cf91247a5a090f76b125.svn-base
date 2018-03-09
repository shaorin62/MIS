package core.erp.pay.service;

import java.util.Map;

/**
 * <pre>
 *	PAYF0110Service - 퇴직연금기준임금 메뉴 서비스 인터페이스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	김준수
 * @since	2016. 9. 8.
 * @version	1.0
 * @see		{@link }
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 8.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface PAYF0110Service {

	/**
	 * <pre>
	 * 퇴직연금납입금 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 퇴직연금납입금 목록
	 * @ - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 퇴직연금납입금 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 퇴직연금납입금 목록
	 * @ - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 퇴직연금납입금 목록 출력.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 퇴직연금납입금 목록
	 * @ - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processPRINT00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 퇴직연금납입금 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 퇴직연금납입금 자료
	 * @return 퇴직연금납입금 처리 건수
	 * @ - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map searchVo, Map saveData) throws Exception;

	/**
	 * <pre>
	 * 퇴직연금납입금 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 퇴직연금납입금 자료
	 * @return 퇴직연금납입금 처리 건수
	 * @ - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processPROC00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 전자결재 연동자료 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public String processSAVE99(Map saveData, Map searchVo) throws Exception;
}