package core.erp.txm.service.impl;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;       

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.com.service.impl.SpSlipMasterCheckDao;
import core.erp.com.service.impl.SpSlipNumberDao;
import core.erp.txm.service.TXMD0020Service;
import core.ifw.cmm.request.CoreRequest;

/**
 * <pre>
 *	TXMD0020Service - 재산분 주민세
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 27
 * @version	1.0
 * @see		{@link }
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
@Service("TXMD0020Service")
public class TXMD0020ServiceImpl extends EgovAbstractServiceImpl implements TXMD0020Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMD0020ServiceImpl.class);

	@Resource(name="TXMD0020Dao")
	private TXMD0020Dao tXMD0020Dao;
	
	@Resource(name="spSlipNumberDao")
	private SpSlipNumberDao spSlipNumberDao;
	
	@Resource(name="spSlipMasterCheckDao")
	private SpSlipMasterCheckDao spSlipMasterCheckDao;

	/**
	 * 작성자 : 김준수
	 * 일시 : 2016 06 27
	 * 내용 :소득내역등록 정보를 조회한다.
	 * @param param - 조회조건 
	 * @return dsTA_JUMIPR
	 * @exception Exception 예외
	 */
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_INCMXM", tXMD0020Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/* (non-Javadoc)
	 * @see core.erp.rmm.service.TXMD0020Service#processGetOffice(java.util.Map)
	 */
	
	/**
	 * 작성자 : 김준수
	 * 일시 : 2016 06 27
	 * 내용 :소득자 정보를 조회한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return dsTA_JUMIEQ
	 * @exception Exception 예외
	 */
	public Object processSEARCH01(Map searchVo) throws Exception {
		// TODO Auto-generated method stub
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CUSTXM",tXMD0020Dao.processSEARCH01(searchVo));
		return returnMap;
	}
	

	/**
	 * 작성자 : 김준수
	 * 일시 : 2016 06 27
	 * 내용 : TXMD0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTA_INCMXM     = (List) saveData.get("dsTA_INCMXM");  
		List dsTA_INCMXM_Del = (List) saveData.get("dsTA_INCMXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTA_INCMXM_Del.size(); i++) {
        	
        	rowVo = (Map) dsTA_INCMXM_Del.get(i);
			deleteCount += tXMD0020Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_INCMXM.size(); i++) {

			rowVo = (Map) dsTA_INCMXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				tXMD0020Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += tXMD0020Dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	/**
	 * 작성자 : 권미영
	 * 일시 : 2016 10 10
	 * 내용 : TXMD0020 전표생성
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @exception Exception 예외
	 */
	public String processPROC00(Map searchVo, Map saveData) throws Exception {

		int saveCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sSlipNumb		= "";
		String sSYST_LNCD		= "KO";  //시스템언어코드

		List dsTA_INCMXM_SLIP = (List) saveData.get("dsTA_INCMXM_SLIP");
		
		//------------------------------------
		// 1. 전표대상데이터 체크 UPDATE
		//------------------------------------
		int updateCount = 0;
		for (int i = 0; i < dsTA_INCMXM_SLIP.size(); i++) {

			rowVo = (Map) dsTA_INCMXM_SLIP.get(i);
			rowVo.put("FORM_IDXX", searchVo.get("FORM_IDXX"));
			
			if (i == 0) {
				tXMD0020Dao.processUPDATE02(rowVo);
			}
			saveCount += tXMD0020Dao.processUPDATE03(rowVo);
		}

		//------------------------------------
		// 2. 전표생성
		//------------------------------------
		if (searchVo.size() > 0) {
			rowVo = searchVo;
			
			rowVo.put("SYST_LNCD", sSYST_LNCD);	
			tXMD0020Dao.processPROC00(rowVo);
			
			saveCount++;
		}
		
		//------------------------------------
		// 3. 전표처리된 전표번호 가져오기
		//------------------------------------
		rowVo = (Map) dsTA_INCMXM_SLIP.get(0);
		sSlipNumb = (String) tXMD0020Dao.processSEARCHSLIPNUM(rowVo);
		
		LOGGER.debug("sSlipNumb>>>"+ sSlipNumb);
		LOGGER.debug("------- processPROC00 end ------");

		return sSlipNumb;
		
	}

	/**
	 * 
	 * 작성자 : 권미영
	 * 일시 : 2016 10 10
	 * 내용 : 소득내역 발행전표 삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	
	public Object processPROC01(Map saveData) throws Exception {
		
		String sSYST_LNCD		= "KO";  //시스템언어코드
		
		saveData.put("SYST_LNCD", sSYST_LNCD);
		return tXMD0020Dao.processPROC01(saveData);
		
	}

	
}
