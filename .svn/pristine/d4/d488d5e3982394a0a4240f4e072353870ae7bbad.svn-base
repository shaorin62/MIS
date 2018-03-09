package core.erp.trm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TRMD0010Dao - 구매론미지급관리  프로그램 데이터처리 DAO 클래스
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
@Repository("TRMD0010Dao")
public class TRMD0010Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

	/**
	 * <pre>
	 * 구매론미지급관리  조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRMD0010.SEARCH00", searchVo);
	}

	/**
	 * <pre>
	 * 구매론미지급관리 BICNET 전송 처리
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map dataVo) throws Exception {

		return insert("TRMD0010.PROC00", dataVo);

	}
	
	/**
	 * <pre>
	 * 동일 전송자료 존재여부 체크
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map dataVo) throws Exception {

		return selectByPk("TRMD0010.SEARCH01", dataVo);
	}
}
