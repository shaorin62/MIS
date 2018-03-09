

package core.erp.com.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.ifw.cmm.dataaccess.CmmBaseDAO;
import core.erp.com.service.ComMessageService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**  
 * @Class Name : ComMessageServiceImpl.java
 * @Description : ComMessage Business Implement Class
 * @Modification Information  
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2010.09.01              최초생성
 * 
 * @author 
 * @since 2010. 09.01
 * @version 1.0
 * @see
 * 
 *  Copyright (C) by INBUS All right reserved.
 */
 
@Service("ComMessageService")
public class ComMessageServiceImpl extends EgovAbstractServiceImpl implements ComMessageService {
	
	private static final Logger logger = LoggerFactory.getLogger(ComMessageServiceImpl.class);
	
    /** DAO */
    @Resource(name = "cmmBaseDAO")
    private CmmBaseDAO cmmBaseDAO;
    
	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMessageService#selectComMessage(java.util.Map)
	 */
	public Map selectComMessage(Map searchVo)  throws Exception {
		return (Map<String, String>) cmmBaseDAO.selectByPk("iSComMessage.selectComMessage", searchVo);
	}
    

}

    
