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
 * @since	2016. 06. 27.                                                                                
 * @version	1.0                                                                                         
 *                                                                                                      
 * <pre>                                                                                                
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2016. 06. 27.	김준수		Initial Created.                                                        
 * ====================================================                                                 
 * </pre>                                                                                               
 *                                                                                                      
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.                                            
 */                                                                                                     
@Repository("TXMD0020Dao")
public class TXMD0020Dao extends CmmBaseDAO  {

	//protected final Log logger = LogFactory.getLog(getClass());

	/**************************
	 * 소득내역등록 자료 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TXMD0020.SEARCH00", searchVo);

	}

	/**************************
	 * 소득자 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TXMD0020.SEARCH01", searchVo);

	}

	/**************************
	 * 전표처리된 전표번호 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public String processSEARCHSLIPNUM(Map searchVo) throws Exception {
		return (String) selectByPk("TXMD0020.SEARCHSLIPNUM", searchVo);
	}
	
	/**************************
	 * 소득 내역 저장
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map searchVo) throws Exception {

		return insert("TXMD0020.SAVE00", searchVo);

	}

	/**
	 * <pre>
	 * 소득 내역 삭제
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processDELETE00(Map searchVo) throws Exception{
		return delete("TXMD0020.DELETE00", searchVo);
	}

	/**
	 * <pre>
	 * 소득 내역 수정
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE00(Map searchVo) throws Exception{
		return update("TXMD0020.UPDATE00", searchVo);
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
		return update("TXMD0020.UPDATE02", searchVo);
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
		return update("TXMD0020.UPDATE03", searchVo);
	}

	/**
	 * <pre>
	 * 소득내역 전표생성
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public Object processPROC00(Map dataVo) throws Exception {
		return insert("TXMD0020.PROC00", dataVo);
	}

	/**
	 * <pre>
	 * 소득내역 전표삭제
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map dataVo) throws Exception {
		return insert("TXMD0020.PROC01", dataVo);
	}
	
}
