package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.erp.fam.service.FAMB0010Service;
import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMB0010ServiceImpl - 전표조회 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.07.15
 * @version	1.0
 * @see		{@link FAMB0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.15	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Repository("FAMB0010Dao")
public class FAMB0010Dao extends CmmBaseDAO  {

	/**
	 * <pre>
	 * 전표조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAMB0010.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 * 전표상세 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("FAMB0010.SEARCH01", searchVo);

	}	
}