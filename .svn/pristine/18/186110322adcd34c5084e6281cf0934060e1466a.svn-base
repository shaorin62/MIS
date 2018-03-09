/**
 * core.erp.tmm.service.impl.PCMA0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pcm.service.PCMA0040Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PCMA0040Controller - 제작업종분류 관리
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.06
 * @version	1.0
 * @see		{@link PCMA0040}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PCMA0040Service")
public class PCMA0040ServiceImpl extends EgovAbstractServiceImpl implements PCMA0040Service {

	/**
	 * 제작업종분류관리(신규) DAO class inject.
	 */
	@Resource(name = "PCMA0040Dao")
	private PCMA0040Dao dao;

	/**
	 * 제작 견적템플릿 항목 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVI_IF_MD_CUST", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작 제작사 하단 업종분류 항목 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_CLASXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작 제작사 하단 광고주 팀 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_CUSTXM", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작 모든 거래처명 가져오기
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH03(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 계약서 담당자 등록을 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_EMPLMX", dao.processSEARCH04(searchVo));
		return returnMap;

    }
	

	/**
	 * PCMA0040 저장,수정 또는 삭제한다.
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
		 

		List dsPD_CLASXM     = (List) saveData.get("dsPD_CLASXM");
		List dsPD_CLASXM_Del     = (List) saveData.get("dsPD_CLASXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_CLASXM_Del.size(); i++) {

        	rowVo = (Map) dsPD_CLASXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_CLASXM.size(); i++) {

			rowVo = (Map) dsPD_CLASXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			String CUST_CODE = (String) rowVo.get("CUST_CODE");
			String AGCY_YSNO = (String) rowVo.get("AGCY_YSNO");
			
			switch(AGCY_YSNO){
			case "1" : 
				rowVo.put("AGCY_YSNO", "Y");
				break;
			case "0" :
				rowVo.put("AGCY_YSNO", "N");
				break;
			}
			
			
			//저장타입 구분
			int ROW_TYPE = dao.getROW_TYPE(CUST_CODE);
			
			if (ROW_TYPE >= 1) {
				//데이터가 있는경우 업데이트
				updateCount += dao.processUPDATE00(rowVo);
			
			} else {
				//데이터가 없는경우 삽입
				
				dao.processSAVE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	/**
	 * 광고주 팀 저장 및 수정
	 * PCMA0040 저장,수정 또는 삭제한다.
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
		 

		List dsPD_CUSTXM     = (List) saveData.get("dsPD_CUSTXM");
		List dsPD_CUSTXM_Del     = (List) saveData.get("dsPD_CUSTXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_CUSTXM_Del.size(); i++) {

        	rowVo = (Map) dsPD_CUSTXM_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_CUSTXM.size(); i++) {

			rowVo = (Map) dsPD_CUSTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			String USEX_YSNO = (String) rowVo.get("USEX_YSNO");
			
			switch(USEX_YSNO){
			case "1" : 
				rowVo.put("USEX_YSNO", "Y");
				break;
			case "0" :
				rowVo.put("USEX_YSNO", "N");
				break;
			}
			
			if (rowType == 1) {
				
				//삽입의 경우 광고주팀 코드를 채번
				String CUST_CODE = dao.getCUST_CODE();
				
				rowVo.put("CUST_CODE", CUST_CODE);
				
				
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE01(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	
	
	/**
	 * 계약 담당자 저장및 수정 삭제
	 * PCMA0040 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 

		List dsPD_EMPLMX     = (List) saveData.get("dsPD_EMPLMX");
		List dsPD_EMPLMX_Del     = (List) saveData.get("dsPD_EMPLMX_DELETE");
		
		
		System.out.println("===============================>");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_EMPLMX_Del.size(); i++) {

        	rowVo = (Map) dsPD_EMPLMX_Del.get(i);
			deleteCount += dao.processDELETE02(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_EMPLMX.size(); i++) {

			rowVo = (Map) dsPD_EMPLMX.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			

			if (rowType == 1) {
				
				//삽입의 경우 광고주팀 코드를 채번
				String sIDXX_NUMB = dao.getIDXX_NUMB(rowVo);
				
				System.out.println("===============================>" + sIDXX_NUMB);
				
				rowVo.put("IDXX_NUMB", sIDXX_NUMB);
				
				
				dao.processSAVE02(rowVo);

			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE02(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	

}
