/**
 * core.erp.hrm.service.HATC0020Service.java - <Created by Code Template generator>
 */
package core.erp.hat.service;

import java.util.Map;

/**
 * <pre>
 *	HATC0020Service - 시간외 근무신청서 등록 서비스 인터페이스
 * </pre>
 * 
 * @author	이창운
 * @since	2016.09.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	이창운		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HATC0020Service {

	/**
	 * <pre>
	 * 시간외 근무신청서 내역을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 시간외 근무신청서 내역
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;	 

	 /**
	  * HATC0020 저장,수정 또는 삭제한다.
	  * @param param - 저장할 정보가 담긴 Map 객체
	  * @return 문서번호
	  * @exception Exception 예외
	  */
	 @SuppressWarnings("rawtypes")
	 public String processSAVE00(Map saveData) throws Exception ;
	 
	 /**
	  * 월근태 마감여부를 조회한다.
	  * @param param - 검색조건 정보가 담긴 Map 객체
	  * @return 월근태 마감여부를 조회한다.
	  * @exception Exception
	  */
	 @SuppressWarnings("rawtypes")
	 public Object processSEARCH02(Map searchVo) throws Exception;
}