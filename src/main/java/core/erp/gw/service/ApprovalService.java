package core.erp.gw.service;

import java.util.Map;

/**
 * <pre>
 *	ApprovalService - HR >> GW
 *  결재문서 상신/삭제(연동문서함:임시저장함)
 * </pre>
 * 
 * @author	
 * @since	2016. 08. 25
 * @version	1.0
 * 
 */
public interface ApprovalService {

	@SuppressWarnings({ "unchecked","rawtypes"})
	public void sendApprovalData(Map saveData) throws Exception;
}