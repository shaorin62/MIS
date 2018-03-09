package core.erp.tmm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	TMMB0030Dao - 메뉴구조관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 17.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 17.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TMMB0030Dao")
public class TMMB0030Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());
	/**
	 * <pre>
	 * 메뉴구조관리 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TMMB0030.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 * 메뉴구조관리 트리조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
  
		return list("TMMB0030.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 * 메뉴구조관리 삭제
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("TMMB0030.DELETE00", dataVo);

	}

	/**
	 * <pre>
	 * 메뉴구조관리 저장
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("TMMB0030.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 * 메뉴구조관리 수정
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("TMMB0030.UPDATE00", dataVo);

	}

}
