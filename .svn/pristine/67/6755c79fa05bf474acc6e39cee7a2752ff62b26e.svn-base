/**
 * core.erp.hrm.service.impl.HRMK0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;







import com.nexacro.xapi.data.DataSet;

import core.erp.hrm.service.HRMK0010Service; 
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMK0010ServiceImpl - 증명서신청 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	jar
 * @since	2016.09.05
 * @version	1.0
 * @see		{@link HRMK0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	jar		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMK0010Service")
public class HRMK0010ServiceImpl extends EgovAbstractServiceImpl implements HRMK0010Service {

	/**
	 * 증명서신청 DAO class inject.
	 */
	@Resource(name = "HRMK0010Dao")
	private HRMK0010Dao dao;

	/**
	 * 증명서발급 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 증명서발급 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_CERSIS", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 발령상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 발령상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_APPOXD", dao.processSEARCH01(searchVo));
		
		return returnMap;

    }

	/**
	 * 선택한 발령상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 발령상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		if(searchVo.get("SRAL_NUMB") != null | !searchVo.get("SRAL_NUMB").equals(null) | !searchVo.get("SRAL_NUMB").equals("")){

			//parameter 받기
			String chkNum = (String) searchVo.get("SRAL_NUMB");
	
			//List에 담기
			String[] chkNumArray;
			chkNumArray = chkNum.split(",");
			
			List<String> arrSRAL_NUMB = new ArrayList<String>(chkNumArray.length);
	
			for(int i=0; i<chkNumArray.length; i++) {
				arrSRAL_NUMB.add(chkNumArray[i]);
			}
			
			searchVo.put("SRAL_NUMB", arrSRAL_NUMB);
		}
		
		returnMap.put("dsHR_APPOXD", dao.processSEARCH02(searchVo));
		
		return returnMap;

    }

	/**
	 * 증명서 출력 내용을 조회한다. 
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 발령상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		returnMap.put("dsHR_MASTXM", dao.processSEARCH03(searchVo));
			
		return returnMap;

    }
	
	/**
	 * 증명서 출력 내용을 조회한다. - 사업장정보 
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 발령상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		returnMap.put("dsTM_OFFICE", dao.processSEARCH04(searchVo));
			
		return returnMap;

    }
	
	/**
	 * 증명서 출력 내용을 조회한다. - 갑종근로소득
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 발령상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		returnMap.put("dsPY_PMMAST", dao.processSEARCH05(searchVo));
			
		return returnMap;

    }
	
	/**
	 * HRMK0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsHR_CERSIS     = (List) saveData.get("dsHR_CERSIS");  
		List dsHR_CERSIS_Del = (List) saveData.get("dsHR_CERSIS_DELETE"); 

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_CERSIS_Del.size(); i++) {

        	rowVo = (Map) dsHR_CERSIS_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_CERSIS.size(); i++) {

			rowVo = (Map) dsHR_CERSIS.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);
				
				

			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	} 
	
	/**
	 * HRMK0010 인쇄 출력유무 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map rowVo) throws Exception{
		
		return dao.processUPDATE03(rowVo);

	} 
	
	
	/**
	 * 발급일,발급번호 처리
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map rowVo) throws Exception{

		Map<String, Object> returnMap = new HashMap<String, Object>(); 
	
		return dao.processUPDATE02(rowVo);

	} 
	
	/**
	 * HRMK0010 work 알림 저장 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map rowVo) throws Exception{
		return dao.processSAVE02(rowVo);

	} 
}
