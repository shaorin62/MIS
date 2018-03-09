package core.erp.edm.service;

import java.util.Map;

/**
 * <pre>
 *	EDMB0050Service - 교육이수결과관리 화면
 * </pre>
 * 
 * @author	김혜림
 * @since	2016.09.12
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		  Modifier		Comment
 * ====================================================
 * 2016.09.12	김혜림	Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright NDS.(C) All right reserved.
 */
 
public interface EDMB0050Service {

	/**
	 * <pre>
	 * 교육이수결과관리 목록을 조회한다
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통메시지 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	
	/**
	 * <pre>
	 * 교육이수결과관리를 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processSAVE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 교육이수결과관리 엑셀업로드
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"}) 
	public void processSAVE01(Map saveData) throws Exception;
	 
}