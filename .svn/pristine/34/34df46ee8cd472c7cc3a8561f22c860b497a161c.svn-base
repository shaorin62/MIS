/**
 * core.erp.pcm.service.impl.PACA0021ServiceImpl.java - <Created by Code Template generator>
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

import core.erp.pac.service.PACA0021Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PACA0021ServiceImpl  - 제작 전자세금계산서 발송
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.11.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.04	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Service("PACA0021Service")
public class PACA0021ServiceImpl extends EgovAbstractServiceImpl implements PACA0021Service {

	/**
	 * 공통코드관리(신규) DAO class inject.
	 */
	@Resource(name = "PACA0021Dao")
	private PACA0021Dao dao;

	/**
	 * 제작 전자세금계산서 관리  목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsXXSB_DTI_MAIN", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	
	/**
	 * PACA0021 제작 전자세금계산서 발행취소
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
		 String sCONVERSATION_ID = "";
		 String sREASON = "";
		 

		List dsXXSB_DTI_MAIN     = (List) saveData.get("dsXXSB_DTI_MAIN");  

		 //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsXXSB_DTI_MAIN.size(); i++) {

			rowVo = (Map) dsXXSB_DTI_MAIN.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if(rowVo.get("CHK").equals("1")){
				
				sCONVERSATION_ID = (String)rowVo.get("CONVERSATION_ID");
				sREASON = (String)rowVo.get("REASON");  
				
				rowVo.put("META_STRING",  "<REASON>" + sREASON + "</REASON>");
				
				//XXSB_DTI_STATUS 테이블 값 변경
				updateCount += dao.processUPDATE00(rowVo);
				
				//XXSB_DTI_INTERFACE 테이블 값 변경
				updateCount += dao.processUPDATE01(rowVo);
				
			}
		}
		return deleteCount + updateCount;
	}

	/**
	 * PACA0021 제작 전자세금계산서 메일 재발송
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sCONVERSATION_ID = "";
		 String sBYR_EMAIL = "";
		 String sSIGNAL = "";
		 

		List dsXXSB_DTI_MAIN     = (List) saveData.get("dsXXSB_DTI_MAIN");  

		 //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsXXSB_DTI_MAIN.size(); i++) {

			rowVo = (Map) dsXXSB_DTI_MAIN.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if(rowVo.get("CHK").equals("1")){
				
				sCONVERSATION_ID = (String)rowVo.get("CONVERSATION_ID");
				sBYR_EMAIL = (String)rowVo.get("BYR_EMAIL");
				//정매출 = "ARISSUE" 역매출 = "RISSUE"
				sSIGNAL = "ARISSUE";
				
				rowVo.put("META_STRING",  "<EMAIL>" + sBYR_EMAIL + "</EMAIL>" + "<REQ_SIGNAL>" + sSIGNAL + "</REQ_SIGNAL>");
				
				//XXSB_DTI_STATUS 테이블 값 변경
				updateCount += dao.processUPDATE02(rowVo);
				
				//XXSB_DTI_INTERFACE 테이블 값 변경
				updateCount += dao.processUPDATE03(rowVo);
				
			}
		}
		return deleteCount + updateCount;
	}

	
}
