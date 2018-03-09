/**
 * core.erp.wfm.service.impl.WFMB0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;  
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.wfm.service.WFMB0040Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;




/**
 * <pre>
 *	WFMB0020ServiceImpl - 학자금지급내역 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	전종원
 * @since	2016.09.26
 * @version	1.0
 * @see		{@link WFMB0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.22	전종원		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMB0040Service")
public class WFMB0040ServiceImpl extends EgovAbstractServiceImpl implements WFMB0040Service {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(WFMB0030ServiceImpl.class);

	/**
	 * 학자금지급내뎍 조회 DAO class inject.
	 */
	@Resource(name = "WFMB0040Dao")
	private WFMB0040Dao dao;

	/**
	 * 학자금지급내역 현황을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 학자금지급내역 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsWF_SCEXXD", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 
	 * 작성자 : 전종원
	 * 일시 : 2016 10 05
	 * 내용 : 학자금 전표생성
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	public String processPROC00(Map searchVo, Map saveData) throws Exception {

		int saveCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sSlipNumb		= "";

		List dsWF_SCEXXD = (List) saveData.get("dsWF_SCEXXD");

		//------------------------------------
		// 1. 전표대상데이터 체크 UPDATE
		//------------------------------------
		for (int i = 0; i < dsWF_SCEXXD.size(); i++) {

			rowVo = (Map) dsWF_SCEXXD.get(i);
			rowVo.put("FORM_IDXX", searchVo.get("FORM_IDXX"));
			
			if (i == 0) {
				dao.processUPDATE02(rowVo);
				
			}
			saveCount += dao.processUPDATE03(rowVo);
		}

		//------------------------------------
		// 2. 전표생성
		//------------------------------------
		if (searchVo.size() > 0) {
			rowVo = searchVo;
			
			rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
			
			dao.processPROC00(rowVo);
			
			saveCount++;
		}
		
		//LOGGER.debug("====processPROC00=====");

		//------------------------------------
		// 3. 전표처리된 전표번호 가져오기
		//------------------------------------
		rowVo = (Map) dsWF_SCEXXD.get(0);
		sSlipNumb = (String) dao.processSEARCHSLIPNUM(rowVo);
		
		return sSlipNumb;
		
	}
	
	/**
	 * 
	 * 작성자 : 전종원
	 * 일시 : 2016 10 05
	 * 내용 : 학자금 발행전표 삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	
	public Object processPROC01(Map saveData) throws Exception {
		return dao.processPROC01(saveData);
		
	}
	
	
	/**
	 * 
	 * 작성자 : 전종원
	 * 일시 : 2016 10 12
	 * 내용 : 학자금 지급내역 급여전환
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	
	public int processPROC02(Map searchVo, Map saveData) throws Exception {
		
		int iCount = 0;
		Map rowVo = null;
		
		List dsMAIN_WF_SCEXXD = (List) saveData.get("dsMAIN_WF_SCEXXD");
		List dsPAY_WF_SCEXXD = (List) saveData.get("dsPAY_WF_SCEXXD");
		
		//------------------------------------
		// 1. 학자금 데이타 급여전환
		//------------------------------------
		for (int i = 0; i < dsPAY_WF_SCEXXD.size(); i++) {

			rowVo = (Map) dsPAY_WF_SCEXXD.get(i);
			rowVo.put("INDN_CODE", searchVo.get("INDN_CODE"));	//소득구분코드
			rowVo.put("GIVE_YMDX", searchVo.get("GIVE_YMDX"));	//급여지급일
			
			dao.processSAVE00(rowVo);
			
			iCount += iCount + 1;
		}
		
		//------------------------------------
		// 2. 급여전환 후 학자금 UPDATE
		//------------------------------------
		for (int i = 0; i < dsMAIN_WF_SCEXXD.size(); i++) {

			rowVo = (Map) dsMAIN_WF_SCEXXD.get(i);
			rowVo.put("GIVE_YMDX", searchVo.get("GIVE_YMDX"));	//급여지급일
			
			dao.processUPDATE00(rowVo);
			
		}
		
		return iCount;
		
	}

}
