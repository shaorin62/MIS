package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMG0070Dao - 연결시산표 관리 DAO 클래스
 * </pre>
 * 
 * @author	김기환
 * @since	2016.07.14
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.23	김기환		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("FAMG0070Dao")
public class FAMG0070Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());
	
	/**
	 * <pre>
	 * 연결재무제표 IF 마스터 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAMG0070.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 * 연결재무제표 IF 상세 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("FAMG0070.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료생성 내역 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return selectByPk("FAMG0070.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 * 연결재무제표 IF 전송데이터 존재여부
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {

		return selectByPk("FAMG0070.SEARCH03", searchVo);
	}
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료생성
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processCREATE_DATA(Map searchVo) throws Exception {

		return list("FAMG0070.CREATE_DATA", searchVo);
	}
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료생성 마스터 신규저장
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processSAVE00(Map<String, Object> dataVo) throws Exception {

		return insert("FAMG0070.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료생성 상세 신규저장
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processSAVE01(Map<String, Object> dataVo) throws Exception {

		return insert("FAMG0070.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료전송테이블 저장
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processSAVE02(Map<String, Object> dataVo) throws Exception {

		return insert("FAMG0070.SAVE02", dataVo);

	}
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료생성 마스터 삭제
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processDELETE00(Map<String, Object> dataVo) throws Exception {

		return delete("FAMG0070.DELETE00", dataVo);

	}
	
	/**
	 * <pre>
	 * 연결재무제표 IF 자료생성 상세 삭제
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processDELETE01(Map<String, Object> dataVo) throws Exception {

		return delete("FAMG0070.DELETE01", dataVo);

	}
	
	/**
	 * <pre>
	 * 연결재무제표 IF 상태 변경
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processUPDATE00(Map<String, Object> dataVo) throws Exception {

		return update("FAMG0070.UPDATE00", dataVo);

	}
}
