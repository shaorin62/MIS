package core.erp.gw.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	ApprovalDao - 결재 상태값 관리 / 결재선 정보 관리
 * </pre>
 * 
 * @author	
 * @since	2016. 08. 25
 * @version	1.0
 * 
 */
@Repository("ApprovalDao")
public class ApprovalDao extends CmmBaseDAO {
	
	/**
	 * 결재 상태값 변경
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map<String, Object> map) throws Exception {
		return update("APPROVAL.UPDATE00", map);
	}
}