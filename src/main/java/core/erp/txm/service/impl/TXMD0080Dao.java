package core.erp.txm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**																										
 * <pre>                                                                                                
 *	TXMD0080Dao - 사업소득전산매체                                              
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
@Repository("TXMD0080Dao")
public class TXMD0080Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 *제출자 레코드 조회
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMD0080.SEARCH00", searchVo);

	}
	/**************************
	 * 원천징수의무자별 집계레코드 조회 !
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("TXMD0080.SEARCH01", searchVo);
	
	}	
		/**************************
		 * 주근무처 레코드 조회 !!
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("TXMD0080.SEARCH02", searchVo);
	
	}
	/**************************
	 *  전산매체자료 조회 !!
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("TXMD0080.SEARCH04", searchVo);
	
	}

}
