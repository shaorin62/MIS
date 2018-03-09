package core.erp.tmm.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	TMMB0060Dao - 그룹별 사용자 권한 관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 19.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 19.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TMMB0060Dao")
public class TMMB0060Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());
	/**
	 * <pre>
	 * 그룹별 사용자 정보 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TMMB0060.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 * 사용자 정보 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TMMB0060.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 * 사용자 정보 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("TMMB0060.SEARCH02", searchVo);

	}	

	/**
	 * <pre>
	 * 그룹별 사용자 권한 관리 삭제
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("TMMB0060.DELETE00", dataVo);

	}

	/**
	 * <pre>
	 *  공통메시지 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("TMMB0060.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 * 그룹별 사용자 권한 관리 저장
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("TMMB0060.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 * 그룹별 사용자 권한 관리 저장
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {

		return insert("TMMB0060.SAVE01", dataVo);

	}
}
