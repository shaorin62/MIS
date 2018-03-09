/**
 * core.erp.mdm.service.impl.MDMC0010P01Dao.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MDMC0010P01Dao - 인쇄 개별청약(신규) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.13
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.13	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MDMC0010P01Dao")
public class MDMC0010P01Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  인쇄 개별청약 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("MDMC0010P01.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  기존년월의 일련번호를 가져온다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 데이터 로우 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processGET_SEQX_FILD(Map searchVo) throws Exception {
	
		return list("MDMC0010P01.GET_SEQX_FILD", searchVo);

	}	
	
	/**
	 * <pre>
	 *  신규 일련번호 코드채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 일련번호 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_SEQX_FILD(Map searchVo) throws Exception {
	
		return (String)selectByPk("MDMC0010P01.NEW_SEQX_FILD", searchVo);

	}	
}
