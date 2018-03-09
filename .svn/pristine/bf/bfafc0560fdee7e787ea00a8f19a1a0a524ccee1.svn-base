/**
 * core.erp.tmm.service.impl.FAMA0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.lang.reflect.Array;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.source.util.ConvertUtil;

import javax.annotation.Resource;
import javax.print.DocFlavor.STRING;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMA0030ServiceImpl - 메시지 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	ㅋㅋㅋ
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link FAMA0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	ㅋㅋㅋ		Initial Created.
 * 2016.07.21	권미영
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMA0030Service")
public class FAMA0030ServiceImpl extends EgovAbstractServiceImpl implements FAMA0030Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMA0030ServiceImpl.class);

	/**
	 * 메시지 관리 DAO class inject.
	 */
	@Resource(name = "FAMA0030Dao")
	private FAMA0030Dao fAMA0030Dao;

	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CUSTXM", fAMA0030Dao.processSEARCH00(searchVo));		
		return returnMap;

	}
	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH11(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CUSTMN", fAMA0030Dao.processSEARCH11(searchVo));
		return returnMap;

	}

	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH12(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CUSTAC", fAMA0030Dao.processSEARCH12(searchVo));
		return returnMap;

	}

	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH13(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CUSTXD", fAMA0030Dao.processSEARCH13(searchVo));
		return returnMap;

	}

	/**
	 * FAMA0030 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE00(Map saveData) throws Exception{

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		String InsertCUST_CODE = "";
		String chkSAVE_YSNO = (String)saveData.get("chkSAVE_YSNO");	

		List dsTA_CUSTXM     = (List) saveData.get("dsTA_CUSTXM");  
		List dsTA_CUSTXM_Del = (List) saveData.get("dsTA_CUSTXM_DELETE");
		List dsTA_CUSTMN     = (List) saveData.get("dsTA_CUSTMN");  
		List dsTA_CUSTMN_Del = (List) saveData.get("dsTA_CUSTMN_DELETE");
		List dsTA_CUSTAC     = (List) saveData.get("dsTA_CUSTAC");  
		List dsTA_CUSTAC_Del = (List) saveData.get("dsTA_CUSTAC_DELETE");
		List dsTA_CUSTXD     = (List) saveData.get("dsTA_CUSTXD");  
		List dsTA_CUSTXD_Del = (List) saveData.get("dsTA_CUSTXD_DELETE");		

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_CUSTMN_Del.size(); i++) {
			rowVo = (Map) dsTA_CUSTMN_Del.get(i);

			BigDecimal SEQN_NUMB = ConvertUtil.getBigDecimal(rowVo.get("SEQN_NUMB"));
			rowVo.put("SEQN_NUMB", SEQN_NUMB);

			deleteCount += fAMA0030Dao.processDELETE01(rowVo);

			//InsertCUST_CODE = (String) rowVo.get( "CUST_CODE") ;

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_CUSTAC_Del.size(); i++) {


			rowVo = (Map) dsTA_CUSTAC_Del.get(i);

			String CUST_ANID = (String)(rowVo.get("CUST_ANID"));
			rowVo.put("CUST_ANID", CUST_ANID);        	
			deleteCount += fAMA0030Dao.processDELETE02(rowVo);

			//InsertCUST_CODE = (String) rowVo.get( "CUST_CODE") ;

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_CUSTXD_Del.size(); i++) {

			rowVo = (Map) dsTA_CUSTXD_Del.get(i);
			deleteCount += fAMA0030Dao.processDELETE03(rowVo);

			//InsertCUST_CODE = (String) rowVo.get("CUST_CODE");

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_CUSTXM_Del.size(); i++) {

			rowVo = (Map) dsTA_CUSTXM_Del.get(i);
			deleteCount += fAMA0030Dao.processDELETE00(rowVo);

			//InsertCUST_CODE = (String) rowVo.get("CUST_CODE");

		}
		
		String NewCUST_CODE = "";
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_CUSTXM.size(); i++) {

			rowVo = (Map) dsTA_CUSTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				NewCUST_CODE = fAMA0030Dao.processNEW_CUST_CODE(rowVo);	// 신규 거래처코드 채번
				rowVo.put("CUST_CODE", NewCUST_CODE);
				fAMA0030Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += fAMA0030Dao.processUPDATE00(rowVo);

			}
			
			if (i == 0) {
				InsertCUST_CODE = (String) rowVo.get("CUST_CODE");
			} else {
				InsertCUST_CODE = InsertCUST_CODE + "," + (String) rowVo.get("CUST_CODE");
			}

		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_CUSTMN.size(); i++) {

			rowVo = (Map) dsTA_CUSTMN.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				if (!NewCUST_CODE.isEmpty()) rowVo.put("CUST_CODE", NewCUST_CODE);
				fAMA0030Dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				updateCount += fAMA0030Dao.processUPDATE01(rowVo);

			}
		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_CUSTAC.size(); i++) {

			rowVo = (Map) dsTA_CUSTAC.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				if (!NewCUST_CODE.isEmpty()) rowVo.put("CUST_CODE", NewCUST_CODE);
				fAMA0030Dao.processSAVE02(rowVo);

			} else if (rowType == 2) {

				updateCount += fAMA0030Dao.processUPDATE02(rowVo);

			}
		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_CUSTXD.size(); i++) {

			rowVo = (Map) dsTA_CUSTXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (!NewCUST_CODE.isEmpty()) rowVo.put("CUST_CODE", NewCUST_CODE);
			fAMA0030Dao.processSAVE03(rowVo);

		}	


		return InsertCUST_CODE;

	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void processPROC00(Map saveData) throws Exception{

		Map rowVo = null;

		List dsTB_JOINNO     = (List) saveData.get("dsTB_JOINNO"); 		


		for (int i = 0; i < dsTB_JOINNO.size(); i++) {

			rowVo = (Map) dsTB_JOINNO.get(i);

			fAMA0030Dao.processPROC00(rowVo);
		}

	}		

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void processPROC01(Map saveData) throws Exception{

		Map rowVo = null;

		List dsTA_CUSTAC_EMPL     = (List) saveData.get("dsTA_CUSTAC_EMPL"); 		


		for (int i = 0; i < dsTA_CUSTAC_EMPL.size(); i++) {

			rowVo = (Map) dsTA_CUSTAC_EMPL.get(i);

			fAMA0030Dao.processPROC01(rowVo);
		}

	}		

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void processPROC02(Map saveData) throws Exception{

		Map rowVo = null;

		List dsTA_CUSTAC_CUST     = (List) saveData.get("dsTA_CUSTAC_CUST"); 		


		for (int i = 0; i < dsTA_CUSTAC_CUST.size(); i++) {

			rowVo = (Map) dsTA_CUSTAC_CUST.get(i);

			fAMA0030Dao.processPROC02(rowVo);
		}

	}			

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void processPROC03(Map saveData) throws Exception{

		Map rowVo = null;

		List dsTA_CUSTMN_TEMP     = (List) saveData.get("dsTA_CUSTMN_TEMP"); 		


		for (int i = 0; i < dsTA_CUSTMN_TEMP.size(); i++) {

			rowVo = (Map) dsTA_CUSTMN_TEMP.get(i);

			fAMA0030Dao.processPROC03(rowVo);
		}

	}	
}
