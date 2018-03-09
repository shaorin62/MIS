package core.erp.trm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TRMA0050Dao - 지급(출납)관리   프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Repository("TRMA0050Dao")
public class TRMA0050Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

	/**
	 * <pre>
	 * 지급(출납)관리  조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRMA0050.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 * 지급(출납)관리  저장
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processINSERT00(Map<String, Object> dataVo) throws Exception {

		return insert("TRMA0050.INSERT00", dataVo);

	}
	
	/**
	 * <pre>
	 * 지급(출납)관리  계좌 초기화(삭제)
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processDELETE00(Map<String, Object> dataVo) throws Exception {

		return delete("TRMA0050.DELETE00", dataVo);

	}

}
