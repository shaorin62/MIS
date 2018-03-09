/**
 * core.erp.pcm.service.impl.PACA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.pac.service.PACA0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PACA0020ServiceImpl  - 제작 전자세금계산서 발송
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.10.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.19	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Service("PACA0020Service")
public class PACA0020ServiceImpl extends EgovAbstractServiceImpl implements PACA0020Service {

	/**
	 * 공통코드관리(신규) DAO class inject.
	 */
	@Resource(name = "PACA0020Dao")
	private PACA0020Dao dao;

	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SATXXH", dao.processSEARCH00(searchVo));
		returnMap.put("dsXXSB_DTI_ITEM", dao.processSEARCH02(searchVo));
		return returnMap;

    }

	
	
	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsXXSB_DTI_MAIN", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map saveData) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		Map rowVo = null;
		String sCUST_CODE = "";
		
		List dsPD_CUST_MAIL     = (List) saveData.get("dsPD_CUST_MAIL");
		int iCNT = 0;
		iCNT = dsPD_CUST_MAIL.size();
		
		System.out.println("===============================>" + iCNT);
		
		for (int i = 0; i < dsPD_CUST_MAIL.size(); i++) {

			rowVo = (Map) dsPD_CUST_MAIL.get(i);
			
			if(iCNT == i + 1){
				sCUST_CODE += "'" + (String) rowVo.get("CUST_CODE") + "'";
			}else{
				sCUST_CODE += "'" + (String) rowVo.get("CUST_CODE") + "',";
			}
			
		}
		
		System.out.println("===============================>" + sCUST_CODE);
		
		returnMap.put("dsPD_CUST_MAIL", dao.processSEARCH03(sCUST_CODE));
	
		return returnMap;

    }
	
	/**
	 * PACA0020 제작 전자세금계산서 발송 
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
		 String sCONVERSATION_ID  = "";
		 
		List dsPD_SATXXH     = (List) saveData.get("dsPD_SATXXH");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_SATXXH.size(); i++) {

			rowVo = (Map) dsPD_SATXXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if(rowVo.get("CHK").equals("1")){
				
				//CONVERSATION_ID 일련 번호 생성
				//공급자사업자번호(10)+공급받는자사업자번호(10)+세금계산서 일자(8)+일련번호(4)+정역구분(1)+03
				DataSet returnDataSet = (DataSet)dao.getCONVERSATION_ID(rowVo);
				String sSEQ = "" ;
				sSEQ = returnDataSet.getString(0, "SEQN");
				
				String sSUP_COM_REGNO = (String) rowVo.get("SUP_COM_REGNO");
				String sBYR_COM_REGNO = (String) rowVo.get("BYR_COM_REGNO");
				String sTAXYEARMON  = (String) rowVo.get("DTI_WDATE");
				String sDIRECTION 	= (String) rowVo.get("DIRECTION");       
				String sBYR_EMAIL  = (String) rowVo.get("BYR_EMAIL");
				
				sCONVERSATION_ID = sSUP_COM_REGNO + sBYR_COM_REGNO + sTAXYEARMON + sSEQ + sDIRECTION + "03";
				
				rowVo.put("CONVERSATION_ID", sCONVERSATION_ID);
				rowVo.put("SEQ_ID", sSEQ);
				
				//공급받는자 E-MAIL
				rowVo.put("META_STRING", "<SMTP_EMAIL>" + sBYR_EMAIL + "</SMTP_EMAIL>");
				//인중토큰
				rowVo.put("AUTH_TICKET", "a2hMUFJZTTZBUVF3YkxYOXBxQjJWemlzTEZWcGtUdTVHZjRhclpPaGxERT0K");
				
				//XXSB_DTI_MAIN 테이블에 INSERT (전자세금계산서 MAIN)
				dao.processSAVE00(rowVo);
				
				//XXSB_DTI_ITEM 테이블에 INSERT (전자세금계산서 ITEM 상세)
				dao.processSAVE01(rowVo);
				
				//XXSB_DTI_STATUS 테이블에 INSERT (전자세금계산서 STATUS)
				dao.processSAVE02(rowVo);
				
				//XXSB_DTI_INTERFACE 테이블에 INSERT (전자세금계산서 INTERFACE)
				dao.processSAVE03(rowVo);
				
				//세금계산서 테이블에 CONVERSATION_ID 키 삽입
				updateCount += dao.processUPDATE00(rowVo);
			}
		}
		return deleteCount + updateCount;
	}
	
	/**
	 * PACA0020 제작 전자세금계산서 발송 데이터 원복
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sCONVERSATION_ID  = "";
		 
		List dsXXSB_DTI_MAIN     = (List) saveData.get("dsXXSB_DTI_MAIN");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsXXSB_DTI_MAIN.size(); i++) {

			rowVo = (Map) dsXXSB_DTI_MAIN.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				
			} else if (rowType == 2) {
				
				//sCONVERSATION_ID = (String) rowVo.get("CONVERSATION_ID");
				updateCount += dao.processUPDATE01(rowVo);
				
			}
		}
		return deleteCount + updateCount;
	}
}
