/**
 * core.erp.mcm.service.impl.MCMA0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mcm.service.MCMA0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MCMA0030ServiceImpl - 매체사관리(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.06
 * @version	1.0
 * @see		{@link MCMA0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.02	조민희		Initial Created.
 * 2016.10.06	최제현		Check and Revise.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MCMA0030Service")
public class MCMA0030ServiceImpl extends EgovAbstractServiceImpl implements MCMA0030Service {

	/**
	 * 광고주관리(신규) DAO class inject.
	 */
	@Resource(name = "MCMA0030Dao")
	private MCMA0030Dao dao;

	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 광고주 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();		
		returnMap.put("dsTA_CUSTXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 매체채널 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 매체채널 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CUSTXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 코바넷매체코드 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 코바넷매체코드 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_RMEDXM_01", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * SBS매체코드 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 SBS매체코드 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_RMEDXM_02", dao.processSEARCH03(searchVo));
		return returnMap;

    }
	
	/**
	 * 매체사 담당자 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 코바넷매체코드 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CUSTMN", dao.processSEARCH04(searchVo));
		return returnMap;

    }
	
	/**
	 * 매체사 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 매체사 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH05(searchVo));
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
		String sHIGH_CODE = "";
		
		List dsMD_MEDX_MAIL     = (List) saveData.get("dsMD_MEDX_MAIL");
		int iCNT = 0;
		iCNT = dsMD_MEDX_MAIL.size();
		
		for (int i = 0; i < dsMD_MEDX_MAIL.size(); i++) {

			rowVo = (Map) dsMD_MEDX_MAIL.get(i);
			if(iCNT == i + 1){
				sHIGH_CODE += "'" + (String) rowVo.get("HIGH_CODE") + "'";
			}else{
				sHIGH_CODE += "'" + (String) rowVo.get("HIGH_CODE") + "',";
			}
			
		}
		
		returnMap.put("dsMD_MEDX_MAIL", dao.processSEARCH06(sHIGH_CODE));
	
		return returnMap;

    }
	
	/**
	 * MCMA0030 매체채널 저장,수정한다.
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

		List dsMD_CUSTXM     = (List) saveData.get("dsMD_CUSTXM");  
		List dsMD_CUSTXM_Del = (List) saveData.get("dsMD_CUSTXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_CUSTXM_Del.size(); i++) {

        	rowVo = (Map) dsMD_CUSTXM_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);
			dao.processDELETE02(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_CUSTXM.size(); i++) {

			rowVo = (Map) dsMD_CUSTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				String NewCUST_CODE = dao.processNEW_CUST_CODE(rowVo);
				rowVo.put("CUST_CODE", NewCUST_CODE);	
				
				dao.processSAVE01(rowVo);
				dao.processUPDATE02(rowVo);
			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE01(rowVo);
			}
		}
		
		return deleteCount + updateCount;

	}
	
	/**
	 * MCMA0030 코바넷매체코드 저장,수정 및 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		List dsMD_RMEDXM_01     = (List) saveData.get("dsMD_RMEDXM_01");  
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_RMEDXM_01.size(); i++) {
			rowVo = (Map) dsMD_RMEDXM_01.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			
			if(rowVo.get("BROD_CODE").equals("")||rowVo.get("MDIM_CODE").equals("")||rowVo.get("OFIC_CODE").equals("")){
				dao.processDELETE02(rowVo);
				dao.processDELETE03(rowVo);
			}else{
				//RMEDXM테이블에 입력되지 않았는지 확인한다.
				int COUNT00= dao.processCOUNT00(rowVo);
				//RMEDXM테이블의 데이터에 CUST_CODE가 입력되어 있는지 확인한다.
				int COUNT01= dao.processCOUNT01(rowVo);
				//매체가 이미 코바넷 테이블에 입력되어있는지 확인한다.
				int COUNT02 = dao.processCOUNT02(rowVo);
				
				if(COUNT02 != 0 && COUNT00==0){
					dao.processDELETE02(rowVo);
					//데이터가 없기 때문에 코바코매체테이블에 저장
					dao.processSAVE04(rowVo);
				}else if(COUNT02 != 0 && COUNT01==0){
					dao.processDELETE02(rowVo);
					//기존의 데이터가 입력되어 있지 않으면 코바코매체테이블에 업데이트
					dao.processUPDATE02(rowVo);				
				}else if(COUNT00==0){
					//데이터가 없기 때문에 코바코매체테이블에 저장
					dao.processSAVE04(rowVo);
				}else if(COUNT01==0){
					//기존의 데이터가 입력되어 있지 않으면 코바코매체테이블에 업데이트
					dao.processUPDATE02(rowVo);					
				}else{
					throw new Exception("다른 매체사에 입력하신 코바넷 코드가 입력되어있습니다.");
				}
				//매체테이블에 저장
				dao.processSAVE02(rowVo);
			}
		

		}
		
		return updateCount;

	}
	
	/**
	 * MCMA0030 SBS매체코드 저장,수정 및 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE03(Map saveData) throws Exception{
		 int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsMD_RMEDXM_02     = (List) saveData.get("dsMD_RMEDXM_02");  
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_RMEDXM_02.size(); i++) {
			
			rowVo = (Map) dsMD_RMEDXM_02.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if(rowVo.get("BROD_CODE").equals("")||rowVo.get("MDIM_CODE").equals("")||rowVo.get("OFIC_CODE").equals("")){
				dao.processDELETE02(rowVo);
				dao.processDELETE03(rowVo);
			}else{
				//RMEDXM테이블에 입력되지 않았는지 확인한다.
				int COUNT00= dao.processCOUNT00(rowVo);
				//RMEDXM테이블의 데이터에 CUST_CODE가 입력되어 있는지 확인한다.
				int COUNT01= dao.processCOUNT01(rowVo);
				//매체가 이미 코바넷 테이블에 입력되어있는지 확인한다.
				int COUNT02 = dao.processCOUNT02(rowVo);
				
				if(COUNT02 != 0 && COUNT00==0){
					dao.processDELETE02(rowVo);
					//데이터가 없기 때문에 코바코매체테이블에 저장
					dao.processSAVE04(rowVo);
				}else if(COUNT02 != 0 && COUNT01==0){
					dao.processDELETE02(rowVo);
					//기존의 데이터가 입력되어 있지 않으면 코바코매체테이블에 업데이트
					dao.processUPDATE02(rowVo);				
				}else if(COUNT00==0){
					//코바코매체테이블에 저장
					dao.processSAVE05(rowVo);
				}else if(COUNT01==0){
					//코바코매체테이블에 업데이트
					dao.processUPDATE03(rowVo);
				}else{
					throw new Exception("다른 매체사에 입력하신 코바넷 코드가 입력되어있습니다.");
				}
				//매체테이블에저장
				dao.processSAVE03(rowVo);					
			}
			
		}
		
		return updateCount;

	}
	
	/**
	 * MCMA0030 매체사 담당자 저장,수정,삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE04(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsMD_CUSTMN     = (List) saveData.get("dsMD_CUSTMN");  
		List dsMD_CUSTMN_Del = (List) saveData.get("dsMD_CUSTMN_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_CUSTMN_Del.size(); i++) {

        	rowVo = (Map) dsMD_CUSTMN_Del.get(i);
			deleteCount += dao.processDELETE04(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_CUSTMN.size(); i++) {

			rowVo = (Map) dsMD_CUSTMN.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				String NewSEQN_NUMB = dao.processNEW_SEQN_NUMB(rowVo);
				rowVo.put("SEQN_NUMB", NewSEQN_NUMB);	
				
				dao.processSAVE06(rowVo);
			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE04(rowVo);
			}
		}
		
		return deleteCount + updateCount;

	}


}
