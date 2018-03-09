/**
 * core.erp.mac.service.impl.MACA0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mac.service.MACA0050Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MACA0050ServiceImpl - 매체 세금계산서 발송 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.04
 * @version	1.0
 * @see		{@link MACA0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.04	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MACA0050Service")
public class MACA0050ServiceImpl extends EgovAbstractServiceImpl implements MACA0050Service {

	/**
	 * 세금계산서 DAO class inject.
	 */
	@Resource(name = "MACA0050Dao")
	private MACA0050Dao dao;

	/**
	 * 미발송 세금계산서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXM", dao.processSEARCH00(searchVo));
		return returnMap;
    }
	/**
	 * 발송 세금계산서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXM", dao.processSEARCH01(searchVo));
		return returnMap;
    }
	
	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전파 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH04(searchVo));
		return returnMap;

    }
	
	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map saveData) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		Map rowVo = null;
		String sCUST_CODE = "";
		
		List dsMD_CUST_MAIL     = (List) saveData.get("dsMD_CUST_MAIL");
		int iCNT = 0;
		iCNT = dsMD_CUST_MAIL.size();
		
		for (int i = 0; i < dsMD_CUST_MAIL.size(); i++) {

			rowVo = (Map) dsMD_CUST_MAIL.get(i);
			
			if(iCNT == i + 1){
				sCUST_CODE += "'" + (String) rowVo.get("CUST_CODE") + "'";
			}else{
				sCUST_CODE += "'" + (String) rowVo.get("CUST_CODE") + "',";
			}
			
		}
		
		returnMap.put("dsMD_CUST_MAIL", dao.processSEARCH05(sCUST_CODE));
	
		return returnMap;

    }
	
	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH06(Map saveData) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		Map rowVo = null;
		String sMEDX_CODE = "";
		
		List dsMD_MEDX_MAIL     = (List) saveData.get("dsMD_MEDX_MAIL");
		int iCNT = 0;
		iCNT = dsMD_MEDX_MAIL.size();
		
		for (int i = 0; i < dsMD_MEDX_MAIL.size(); i++) {

			rowVo = (Map) dsMD_MEDX_MAIL.get(i);
			if(iCNT == i + 1){
				sMEDX_CODE += "'" + (String) rowVo.get("MEDX_CODE") + "'";
			}else{
				sMEDX_CODE += "'" + (String) rowVo.get("MEDX_CODE") + "',";
			}
			
		}
		
		returnMap.put("dsMD_MEDX_MAIL", dao.processSEARCH06(sMEDX_CODE));
	
		return returnMap;

    }
	
	
	
	/**
	 * MACA0050 위수탁 세금계산서를 발송한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		Map rowVo = null;

		 
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  
		

        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {
			
			rowVo = (Map) dsMD_TCALXM.get(i);
			
			//관리번호를 채번해서 담는다.
			String SEQ_ID = dao.prcesssNEW_SEQ_ID(rowVo);
			rowVo.put("SEQ_ID", SEQ_ID);
			
			//CONVERSATION_ID를 담기위해 문자열을 합친다.
			String CONVERSATION_ID= 
					((String)(rowVo.get("METX_CUNM"))).substring(0,10)+""+
					((String)(rowVo.get("CUTX_CUNM"))).substring(0,10)+rowVo.get("DEND_DATE")+
					rowVo.get("SEQ_ID")+"203";
			
			//CONVERSATION_ID를 담는다.
			rowVo.put("CONVERSATION_ID", CONVERSATION_ID);
			if(rowVo.get("MEDX_FLAG").toString().equals("A001")||rowVo.get("MEDX_FLAG").toString().equals("A002")
					||rowVo.get("MEDX_FLAG").toString().equals("A003")){
				rowVo.put("DTI_LINE_NUM",1);
			}else{
				//세금계산서에 묶여있는 거래명세서의 개수를 구한다.
				int DTI_LINE_NUM=dao.processGET_DTI_LINE_NUMB(rowVo);
				rowVo.put("DTI_LINE_NUM",DTI_LINE_NUM);				
			}
			
			//인증토큰입력
			String AUTH_TICKET = "a2hMUFJZTTZBUVF3YkxYOXBxQjJWemlzTEZWcGtUdTVHZjRhclpPaGxERT0K";
			rowVo.put("AUTH_TICKET",AUTH_TICKET);
			
			//세금계산서발송
			dao.processSAVE00(rowVo);
			//발송된 세금계산서를 업데이트
			dao.processUPDATE00(rowVo);

		}
		
		return 0;

	}
	
	/**
	 * MACA0050 수수료 세금계산서를 발송한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  
		

        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {
			
			rowVo = (Map) dsMD_TCALXM.get(i);
			
			//관리번호를 채번해서 담는다.
			String SEQ_ID = dao.prcesssNEW_SEQ_ID(rowVo);
			rowVo.put("SEQ_ID", SEQ_ID);
			
			//CONVERSATION_ID를 담기위해 문자열을 합친다.
			String CONVERSATION_ID= 
					((String)(rowVo.get("CBIZ_NUMB"))).substring(0,10)+""+
					((String)(rowVo.get("METX_CUNM"))).substring(0,10)+rowVo.get("DEND_DATE")+
					rowVo.get("SEQ_ID")+"203";
			
			//CONVERSATION_ID를 담는다.
			rowVo.put("CONVERSATION_ID", CONVERSATION_ID);
			
			//세금계산서에 묶여있는 개별청약서의 개수를 구한다.
			int DTI_LINE_NUM=dao.processGET_DTI_LINE_NUMA(rowVo);
			rowVo.put("DTI_LINE_NUM",DTI_LINE_NUM);
			
			//인증토큰입력
			String AUTH_TICKET = "a2hMUFJZTTZBUVF3YkxYOXBxQjJWemlzTEZWcGtUdTVHZjRhclpPaGxERT0K";
			rowVo.put("AUTH_TICKET",AUTH_TICKET);
			
			//세금계산서발송
			dao.processSAVE01(rowVo);
			//발송된 세금계산서를 업데이트
			dao.processUPDATE00(rowVo);				

			
		}
		
		return 0;

	}
	
	/**
	 * MACA0050 세금계산서를 미발송 상태로 만든다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  
		

        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {
			
			rowVo = (Map) dsMD_TCALXM.get(i);
			
			//send_flag와 conversation_id를 삭제한다.
			dao.updateSEND_FLAG_Del00(rowVo);		
			
		}
		
		return 0;

	}
	
	
}
