package core.erp.tmm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	TMMB0040Dao - 그룹 권한 관리
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

@Repository("TMMB0040Dao")
public class TMMB0040Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());
	/**
	 * <pre>
	 * 그룹 권한 관리 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TMMB0040.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 * 그룹 권한 관리 저장
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("TMMB0040.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 * 권한그룹를 수정한다.
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("TMMB0040.UPDATE00", dataVo);

	}
	
	/**
	 * <pre>
	 * 권한그룹를 삭제한다.
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("TMMB0040.DELETE00", dataVo);

	}
	
	/**
	 * <pre>
	 * 자료조회 권한을 삭제한다.
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {

		return delete("TMMB0040.DELETE01", dataVo);

	}	
	
	/**
	 * <pre>
	 * 그룹별 권한을 삭제한다.
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {

		return delete("TMMB0040.DELETE02", dataVo);

	}	
	
	/**
	 * <pre>
	 * 그룹별사용자 권한을 삭제한다.
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE03(Map dataVo) throws Exception {

		return delete("TMMB0040.DELETE03", dataVo);

	}	
	
	
	/**
	 * <pre>
	 * 그룹별사용자권한이력을 삭제한다.
	 * </pre>
	 *
	 * @param dataVo 삭제할 권한그룹 정보
	 * @return 삭제 결과
	 * @throws Exception 삭제 시 예외가 발생할 경우
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE04(Map dataVo) throws Exception {
	    return delete("TMMB0040.DELETE04", dataVo);
	}	

}
