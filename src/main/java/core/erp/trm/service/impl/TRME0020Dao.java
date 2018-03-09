package core.erp.trm.service.impl;

import java.util.Map;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 * TRME0020Dao - 법인카드 정보
 * 
 * </pre>
 * 
 * @author 김준수 <kimjs@inbus.co.kr>
 * @since 2016. 06. 27.
 * @version 1.0
 * 
 *          <pre>
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2016. 06. 27.	developer		Initial Created.                                                        
 * ====================================================
 * </pre>
 * 
 *          Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TRME0020Dao")
public class TRME0020Dao extends CmmBaseDAO {

	// protected final Log logger = LogFactory.getLog(getClass());
	
	/**************************
	 * 법인카드 승인내역및 전표처리 조회 
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processBATCH00(Map searchVo) throws Exception {

		return list("TRME0020.BATCH00", searchVo);

	}

	/**************************
	 * 법인카드 승인내역및 전표처리 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRME0020.SEARCH00", searchVo);

	}

	/**************************
	 * 회계계정관리코드 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TRME0020.SEARCH01", searchVo);

	}

	/**************************
	 * 조회[기타비용내역] 
	 **************************/
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("TRME0020.SEARCH02", searchVo);

	}

	/**************************
	 * 전표처리된 전표번호 조회
	 **************************/
	@SuppressWarnings("rawtypes")
	public String processSEARCHSLIPNUM(Map searchVo) throws Exception {
		return (String) selectByPk("TRME0020.SEARCHSLIPNUM", searchVo);
	}
	
	/**
	 * <pre>
	 * 법인카드 승인내역및 전표처리 수정
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE00(Map searchVo) throws Exception {
		
		return update("TRME0020.UPDATE00", searchVo);
	}
	
	/**
	 * <pre>
	 * 법인카드 승인내역 수정 - 거래처체크적용
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public int processUPDATE01(Map searchVo) throws Exception {
		
		return update("TRME0020.UPDATE01", searchVo);
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
		return update("TRME0020.UPDATE02", searchVo);
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
		return update("TRME0020.UPDATE03", searchVo);
	}
	
	/**
	 * <pre>
	 * 법인카드사용 전표생성
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	public Object processPROC00(Map dataVo) throws Exception {
		return insert("TRME0020.PROC00", dataVo);
	}

	/**
	 * <pre>
	 * 법인카드사용 전표삭제
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map dataVo) throws Exception {
		return insert("TRME0020.PROC01", dataVo);
	}

	/**
	 * <pre>
	 * 법인카드사용 매입자료 가져오기
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC02(Map dataVo) throws Exception {
		return insert("TRME0020.PROC02", dataVo);
	}

	/**
	 * <pre>
	 * 경과비용전표생성 허용처리
	 * </pre>
	 *
	 * @param rowVo
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE04(Map searchVo) throws Exception {
		return update("TRME0020.UPDATE04", searchVo);
	}
	
}
