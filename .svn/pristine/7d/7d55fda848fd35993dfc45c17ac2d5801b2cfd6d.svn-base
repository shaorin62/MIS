package core.erp.txm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**																										
 * <pre>                                                                                                
 *	TXMD0020 -                                                    
 * <p><b>NOTE : </b>템플릿에 사용한 Dao이며, 해당 템플릿은 공통메시지 기능을 이용하였음.</p>   
 * </pre>                                                                                               
 *                                                                                                      
 * @author	developer <email@inbus.co.kr>                                                               
 * @since	2016. 08. 01.                                                                                
 * @version	1.0                                                                                         
 *                                                                                                      
 * <pre>                                                                                                
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2016. 08. 01.	황치웅		Initial Created.                                                        
 * ====================================================                                                 
 * </pre>                                                                                               
 *                                                                                                      
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.                                            
 */                                                                                                     
@Repository("TXMD0020P01Dao")
public class TXMD0020P01Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

	/**************************
	 * 소득자 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMD0020P01.PRINT00", searchVo);

	}
	
	/**************************
	 * 소득내역등록 자료 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMD0020P01.PRINT01", searchVo);

	}
	
	/**************************
	 * 이자배당 소득자 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("TXMD0020P01.PRINT02", searchVo);

	}
	
	/**************************
	 * 이자배당 소득내역등록 자료 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {

		return list("TXMD0020P01.PRINT03", searchVo);

	}
}
