/**
 * core.erp.tmm.service.impl.FAMB0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.fam.service.FAMB0040Service; 
import core.erp.fam.web.FAMB0040Controller;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMB0040Service - 전표 승인 처리 서비스 인터페이스
 * </pre>
 * 
 * @author	오혜성	
 * @since	2016.07.18
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.18	오혜성		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMB0040Service")
public class FAMB0040ServiceImpl extends EgovAbstractServiceImpl implements FAMB0040Service {

	private static final Logger logger = LoggerFactory.getLogger(FAMB0040ServiceImpl.class);
	/**
	 * 전표 승인 처리 DAO class inject.
	 */
	@Resource(name = "FAMB0040Dao")
	private FAMB0040Dao dao;

	/**
	 * 전표 승인 처리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPXM", dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/**
	 * 전표 승인 처리목록을 상세 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH01(searchVo));
		return returnMap;
	}	

	/**
	 * 전표 승인 변화 내용을 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{

		int updateCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsTA_SLIPXM     = (List) saveData.get("dsTA_SLIPXM");  

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_SLIPXM.size(); i++) {

			rowVo = (Map) dsTA_SLIPXM.get(i);

			updateCount += dao.processUPDATE00(rowVo);

		}

		return updateCount;

	}

	/**
	 * 전표 승인 취소
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processAPPRPROC00(Map saveData) throws Exception{

		Map rowVo = null;
		int rowType = 0;
		String sSYST_LNCD		= "KO";  //시스템언어코드

		List dsTA_SLIPXM     = (List) saveData.get("dsTA_SLIPXM");  

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_SLIPXM.size(); i++) {

			rowVo = (Map) dsTA_SLIPXM.get(i);
			rowVo.put("SYST_LNCD", sSYST_LNCD);

			if (!rowVo.get("SELE_CHEK").equals("0")){
				dao.processAPPRPROC00(rowVo);
			}

		}

	}

	/**
	 * 전표 승인 취소
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processAPPRPROC01(Map saveData) throws Exception{

		Map rowVo = null;
		int rowType = 0;
		String sSYST_LNCD		= "KO";  //시스템언어코드

		List dsTA_SLIPXM     = (List) saveData.get("dsTA_SLIPXM");  

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_SLIPXM.size(); i++) {

			rowVo = (Map) dsTA_SLIPXM.get(i);
			rowVo.put("SYST_LNCD", sSYST_LNCD);

			if (!rowVo.get("SELE_CHEK").equals("0")){
				dao.processAPPRPROC01(rowVo);
			}

		}

	}		
}
