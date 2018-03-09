package core.erp.trm.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**																										
 * <pre>                                                                                                
 *	TRME0030Dao - 법인카드 정보                          
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
@Repository("TRME0030Dao")
public class TRME0030Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

	/**
	 * <pre>
	 * 법인카드 청구내역 대사 및 전표처리 조회
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("TRME0030.SEARCH00", searchVo);
	}

	/**************************
	 * 전표처리된 전표번호 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public String processSEARCHSLIPNUM(Map searchVo) throws Exception {
		return (String) selectByPk("TRME0030.SEARCHSLIPNUM", searchVo);
	}
	
	/**
	 * <pre>
	 * 법인카드 청구내역 정보 수정
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE00(Map searchVo) throws Exception{
		return update("TRME0030.UPDATE00", searchVo);
	}
	
	/**
	 * <pre>
	 * 전표대상데이터 체크 초기화 UPDATE
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE02(Map searchVo) throws Exception {
		return update("TRME0030.UPDATE02", searchVo);
	}

	/**
	 * <pre>
	 * 전표대상데이터 체크 UPDATE
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE03(Map searchVo) throws Exception {
		return update("TRME0030.UPDATE03", searchVo);
	}
	
	/**
	 * <pre>
	 * 법인카드 청구내역 이전카드번호로 정리
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processPROC10(Map searchVo) throws Exception{
		return update("TRME0030.PROC10", searchVo);
	}

	/**
	 * <pre>
	 * 법인카드청구 전표생성
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public Object processPROC00(Map dataVo) throws Exception {
		return insert("TRME0030.PROC00", dataVo);
	}

	/**
	 * <pre>
	 * 법인카드청구 전표삭제
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map dataVo) throws Exception {
		return insert("TRME0030.PROC01", dataVo);
	}

	/**
	 * <pre>
	 * 법인카드사용 청구내역 가져오기
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC02(Map dataVo) throws Exception {
		return insert("TRME0030.PROC02", dataVo);
	}
	
	
}
