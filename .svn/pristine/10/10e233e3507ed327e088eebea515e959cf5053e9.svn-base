package core.erp.fam.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	FAME0050Dao - 최초이월잔액(관리항목)  프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */                                                                                                  
@Repository("FAME0050Dao")
public class FAME0050Dao extends CmmBaseDAO  {
	
	/**
	 * <pre>
	 * 최초이월잔액(관리항목) 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAME0050.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 * 최초이월잔액(관리항목)세부 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("FAME0050.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 * 계정과목 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {

		return list("FAME0050.SEARCH10", searchVo);
	}
	
	/**
	 * <pre>
	 * 최초이월잔액(관리항목) 세부저장
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("FAME0050.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 * 최초이월잔액(관리항목) 세부수정
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("FAME0050.UPDATE00", dataVo);

	}
	
	/**
	 * <pre>
	 * 최초이월잔액(관리항목) 세부삭제
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("FAME0050.DELETE00", dataVo);

	}

}
