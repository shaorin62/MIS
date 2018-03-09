package core.erp.tmm.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**																										
 * <pre>                                                                                                
 *	TMMB0020Dao - 템플릿 구현                                                   
 * <p><b>NOTE : </b>템플릿에 사용한 Dao이며, 해당 템플릿은 공통메시지 기능을 이용하였음.</p>   
 * </pre>                                                                                               
 *                                                                                                      
 * @author	developer <email@inbus.co.kr>                                                               
 * @since	2014. 9. 23.                                                                                
 * @version	1.0                                                                                         
 *                                                                                                      
 * <pre>                                                                                                
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2014. 9. 23.	developer		Initial Created.                                                        
 * ====================================================                                                 
 * </pre>                                                                                               
 *                                                                                                      
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.                                            
 */                                                                                                     



/******************************************************************************
 * <pre>
 *   
 *   프로그램명 : TMMB0020
 *   클래스명 : TMMB0020Dao.java
 *   작성일자 : 2011. 09. 28.
 *   작 성 자 : 김석두
 *   비   고 :  프로그램 정보관리
 *   Copyright (c) 2011 Inbus Co.,Ltd All Rights reserved.
 * 
 * </pre> 
 *****************************************************************************/

@Repository("TMMB0020Dao")
public class TMMB0020Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

		/************************
		 * 프로그램 정보 조회 !! *
		 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("PKG_TMMB0020.SP_TMMB0020_SEARCH00", searchVo);

	}

		/****************************
		 * 프로그램 정보 자료 저장 ! *
		 ****************************/
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("PKG_TMMB0020.SP_TMMB0020_DELETE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("PKG_TMMB0020.SP_TMMB0020_SAVE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("PKG_TMMB0020.SP_TMMB0020_UPDATE00", dataVo);

	}

}
