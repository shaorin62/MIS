package core.erp.com.service.impl;

import java.util.Map;											
import org.springframework.stereotype.Repository;              
import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**																										
 * <pre>                                                                                                
 *	CommMakeComboDao - 템플릿 구현                                                   
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
 *   프로그램명 : ComMakeCombo Package
 *   클래스명 : CommMakeComboController.java
 *   작성일자 : 2014. 09. 27.
 *   작 성 자 : 임선빈
 *   비   고 :
 *   Copyright (c) 2011 Inbus Co.,Ltd All Rights reserved.
 * 
 * </pre> 
 *****************************************************************************/

@Repository("comSequenceDao")
public class ComSequenceDao extends CmmBaseDAO  {

	@SuppressWarnings("rawtypes")
	public void updateSequenceInfo(Map searchVo) throws Exception {
		update("SEQUENCE.setSeq", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public void updateSequenceDtlInfo(Map searchVo) throws Exception {
		update("SEQUENCE.setSeqDtl", searchVo);
	}
	//2016.06.22 김준수 추가 본점/지점 검색
	@SuppressWarnings("rawtypes")
	public Object selectSequenceInfo(Map searchVo) throws Exception {
		return list("SEQUENCE.getSeq", searchVo);
	}
}
