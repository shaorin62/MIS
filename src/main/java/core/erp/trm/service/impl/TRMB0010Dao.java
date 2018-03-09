package core.erp.trm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**																										
 * <pre>                                                                                                
 *	TRMB0010Dao - 법인카드 정보                          
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
@Repository("TRMB0010Dao")
public class TRMB0010Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

		/**************************
		 * 법인카드 정보 조회
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRMB0010.SEARCH00", searchVo);

	}
		/**************************
		 * 법인카드 정보 조회
		 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("TRMB0010.SEARCH01", searchVo);
	
	}
	
	/**************************
	 * 법인카드 정보 저장
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map searchVo) throws Exception {

		return insert("TRMB0010.SAVE00", searchVo);

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
		return delete("TRMB0010.DELETE00", searchVo);
	}

	/**
	 * <pre>
	 * 법인카드 정보 수정 업데이트 로직이 DELETE00 후 SAVE00임.
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	/*public int processUPDATE00(Map searchVo) throws Exception{
		// TODO Auto-generated method stub
		return update("TRMB0010.UPDATE00", searchVo);
	}*/
	
	
	/**
	 * <pre>
	 * 법인카드 정보 수정
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processPROC00(Map searchVo) throws Exception{
		// TODO Auto-generated method stub
		return update("TRMB0010.PROC00", searchVo);
	}
	
	
	/**
	 * <pre>
	 * 법인카드 정보 수정
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processPROC01(Map searchVo) throws Exception{
		// TODO Auto-generated method stub
		return update("TRMB0010.PROC01", searchVo);
	}
	

}
