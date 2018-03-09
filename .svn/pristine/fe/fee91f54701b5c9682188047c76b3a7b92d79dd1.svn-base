/**
 * core.erp.tmm.service.impl.FSMB0020P01Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMB0020P01Dao - 자산 폐기 엑셀 일괄 등록
 * </pre>
 * 
 * @author	권미영
 * @since	2016.08.11
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.11	권미영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSMB0020P01Dao")
public class FSMB0020P01Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 * 자산 폐기 엑셀 일괄 등록
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("FSMB0020P01.SAVE00", dataVo);

	}
}
