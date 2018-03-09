package core.erp.trm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**																										
 * <pre>                                                                                                
 *	TRME0010Dao - 법인카드 정보                          
 *   
 * </pre>                                                                                               
 *                                                                                                      
 * @author	김준수 <kimjs@inbus.co.kr>                                                               
 * @since	2016. 06. 27.                                                                                
 * @version	1.0                                                                                         
 *                                                                                                      
 * <pre>                                                                                                
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2016. 06. 27.	developer		Initial Created.                                                        
 * ====================================================                                                 
 * </pre>                                                                                               
 *                                                                                                      
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.                                            
 */                                                                                                     
@Repository("TRME0010Dao")
public class TRME0010Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 법인카드 정보 조회
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRME0010.SEARCH00", searchVo);

	}
	
	/**************************
	 * 법인카드 정보 저장
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map searchVo) throws Exception {

		return insert("TRME0010.SAVE00", searchVo);

	}

	/**
	 * <pre>
	 * 법인카드 정보 삭제
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processDELETE00(Map searchVo) throws Exception{
		// TODO Auto-generated method stub
		return delete("TRME0010.DELETE00", searchVo);
	}

	/**
	 * <pre>
	 * 법인카드 정보 수정
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE00(Map searchVo) throws Exception{
		// TODO Auto-generated method stub
		return update("TRME0010.UPDATE00", searchVo);
	}
	

}
