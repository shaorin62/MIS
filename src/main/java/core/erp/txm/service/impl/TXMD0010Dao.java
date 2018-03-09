package core.erp.txm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**																										
 * <pre>                                                                                                
 *	TXMD0010Dao - 사업장                                           
 *   
 * </pre>                                                                                               
 *                                                                                                      
 * @author	김준수 <kimjs@inbus.co.kr>                                                               
 * @since	2016. 06. 24.                                                                                
 * @version	1.0                                                                                         
 *                                                                                                      
 * <pre>                                                                                                
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2016. 06. 24.	developer		Initial Created.                                                        
 * ====================================================                                                 
 * </pre>                                                                                               
 *                                                                                                      
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.                                            
 */                                                                                                     
@Repository("TXMD0010Dao")
public class TXMD0010Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 소득내역 조회
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMD0010.SEARCH00", searchVo);

	}
	
	/**************************
	 * 소득내역 저장
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map searchVo) throws Exception {

		return insert("TXMD0010.SAVE00", searchVo);

	}

	/**
	 * <pre>
	 * 소득내역 삭제
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processDELETE00(Map searchVo) throws Exception{
		// TODO Auto-generated method stub
		return delete("TXMD0010.DELETE00", searchVo);
	}

	/**
	 * <pre>
	 * 소득내역 수정
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE00(Map searchVo) throws Exception{
		// TODO Auto-generated method stub
		return update("TXMD0010.UPDATE00", searchVo);
	}
	

}
