/**
 * core.erp.hrm.service.impl.HRMB0150Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;



/**
 * <pre>
 *	HRMB0150Dao - 보증보험등록
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 9.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 9.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("HRMB0150Dao")
public class HRMB0150Dao extends CmmBaseDAO {

	
	/**
	 * <pre>
	 * 보증보험등록 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMB0150.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  보증보험등록 사원번호를 조회.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 건강보험공제적용 주민등록번호
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH99(Map searchVo) throws Exception {
	
		return list("HRMB0150.SEARCH99", searchVo);
	}

	
	/**
	 * <pre>
	 * 보증보험등록 저장
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HRMB0150.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 * 보증보험등록 수정.
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("HRMB0150.UPDATE00", dataVo);
		
	}

	
	/**
	 * <pre>
	 *보증보험등록 삭제 
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HRMB0150.DELETE00", dataVo);
		
	}

}
