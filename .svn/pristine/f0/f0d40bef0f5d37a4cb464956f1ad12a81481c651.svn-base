package core.erp.trm.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**																										
 * <pre>                                                                                                
 *	TRMA0060Dao - 채권채무상계관리
 *   
 * </pre>                                                                                               
 *                                                                                                      
 * @author	권미영                                                               
 * @since	2016. 11. 11.                                                                                
 * @version	1.0                                                                                         
 *                                                                                                      
 * <pre>                                                                                                
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2016. 11. 11.	developer		Initial Created.                                                        
 * ====================================================                                                 
 * </pre>                                                                                               
 *                                                                                                      
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.                                            
 */                                                                                                     
@Repository("TRMA0060Dao")
public class TRMA0060Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

	/**
	 * <pre>
	 * 채권채무내역 조회
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("TRMA0060.SEARCH00", searchVo);
	}

	/**
	 * <pre>
	 * 채권채무 상계전표생성(마스터)
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public Object processPROC00(Map dataVo) throws Exception {
		return insert("TRMA0060.PROC00", dataVo);
	}

	/**
	 * <pre>
	 * 채권채무 상계전표생성(전표라인, 관리항목)
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public Object processPROC01(Map dataVo) throws Exception {
		return insert("TRMA0060.PROC01", dataVo);
	}

	/**
	 * <pre>
	 * 채권채무 상계전표생성(전표완료)
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public Object processPROC02(Map dataVo) throws Exception {
		return insert("TRMA0060.PROC02", dataVo);
	}

	/**
	 * <pre>
	 * 채권채무 상계전표생성(전표라인의 정렬순서 재조정)
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public Object processPROC03(Map dataVo) throws Exception {
		return insert("TRMA0060.PROC03", dataVo);
	}
}
