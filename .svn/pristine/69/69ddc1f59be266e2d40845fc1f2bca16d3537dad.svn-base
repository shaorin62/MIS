package core.erp.txm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**																										
 * <pre>                                                                                                
 *	TXMD0030Dao - 사업소득지급명세                                  
 * </pre>                                                                                               
 *                                                                                                      
 * @author	김준수 <kimjs@inbus.co.kr>                                                               
 * @since	2016. 06. 24                                                                            
 * @version	1.0                                                                                         
 *                                                                                                      
 * <pre>                                                                                                
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2016. 06. 24.	김준수		Initial Created.                                                        
 * ====================================================                                                 
 * </pre>                                                                                               
 *                                                                                                      
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.                                            
 */                                                                                                     
@Repository("TXMD0030Dao")
public class TXMD0030Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 사업소득지급명세 조회
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMD0030.SEARCH00", searchVo);

	}


}
