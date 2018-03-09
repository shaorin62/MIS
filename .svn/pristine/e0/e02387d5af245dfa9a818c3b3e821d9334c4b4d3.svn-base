/**
 * core.erp.mcm.service.impl.MCMA0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mcm.service.MCMA0040Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MCMA0040ServiceImpl - 코바넷광고주등록(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.06
 * @version	1.0
 * @see		{@link MCMA0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	조민희		Initial Created.
 * 2016.10.06	최제현		Check and Revise.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MCMA0040Service")
public class MCMA0040ServiceImpl extends EgovAbstractServiceImpl implements MCMA0040Service {

	/**
	 * 코바넷광고주등록(신규) DAO class inject.
	 */
	@Resource(name = "MCMA0040Dao")
	private MCMA0040Dao dao;
	
	/**
	 * 코바넷광고주등록 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 코바넷광고주등록 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_KBNTXM00", dao.processSEARCH00(searchVo));
		return returnMap;
    }
	
	/**
	 * SBS광고주등록 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 SBS광고주등록 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_KBNTXM01", dao.processSEARCH01(searchVo));
		return returnMap;
    }
	
	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 광고주 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH02(searchVo));
		return returnMap;
    }
	
	/**
	 * MCMA0040 코바넷광고주코드 저장,수정한다.
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
		 
		

		List dsMD_KBNTXM00     = (List) saveData.get("dsMD_KBNTXM00");  
		List dsMD_KBNTXM00_Del = (List) saveData.get("dsMD_KBNTXM00_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_KBNTXM00_Del.size(); i++) {
        	rowVo = (Map) dsMD_KBNTXM00_Del.get(i);
        	
        	int IsSBSX_CODE = dao.processIS_SBSX_CODE(rowVo);
        	
        	//SBS코드가 있다면  update로 코바넷 코드만 삭제
        	if(IsSBSX_CODE==0){			
        		deleteCount += dao.processDELETE00(rowVo);
        	}else{
        		dao.processUPDATE02(rowVo);
        	}

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_KBNTXM00.size(); i++) {

			rowVo = (Map) dsMD_KBNTXM00.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				//입력된 광고주 코드가 있는지 확인.
				String cust_code = dao.processGET_CUST_CODE(rowVo);
				//광고주에 KBNT코드가 있는지 확인
				int kbnt_code = dao.processIS_KBNT_CODE(rowVo);
				//데이터자체가 없으면 저장
				if(cust_code == null || cust_code == "" ){
					dao.processSAVE00(rowVo);
				//KBNT_CODE가 없으면 업데이트
				}else if(kbnt_code== 0){
					updateCount += dao.processUPDATE00(rowVo);
				//KBNT 코드가 있다면
				}else{
					throw new Exception("코바넷 코드가 이미 존재하는 광고주입니다.");
				}
			}else if(rowType == 2){
				updateCount += dao.processUPDATE00(rowVo);
			}
		}
		
		return deleteCount + updateCount;

	}
	
	/**
	 * MCMA0040 SBS광고주코드 저장,수정한다.
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

		List dsMD_KBNTXM01     = (List) saveData.get("dsMD_KBNTXM01");  
		List dsMD_KBNTXM01_Del = (List) saveData.get("dsMD_KBNTXM01_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_KBNTXM01_Del.size(); i++) {
        	rowVo = (Map) dsMD_KBNTXM01_Del.get(i);
        	
        	int IsKBNT_CODE = dao.processIS_KBNT_CODE(rowVo);
        	
        	//코바넷코드가 있다면  update로 SBS 코드만 삭제
        	if(IsKBNT_CODE==0){			
        		deleteCount += dao.processDELETE00(rowVo);
        	}else{
        		dao.processUPDATE03(rowVo);
        	}

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_KBNTXM01.size(); i++) {

			rowVo = (Map) dsMD_KBNTXM01.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				//입력된 광고주 코드가 있는지 확인.
				String cust_code = dao.processGET_CUST_CODE(rowVo);
				//입력된 SBS코드가 있는지 확인
				int sbsx_code = dao.processIS_SBSX_CODE(rowVo);
				if(cust_code == null || cust_code.equals("")){
					dao.processSAVE01(rowVo);
				}else if(sbsx_code==0){
					updateCount += dao.processUPDATE01(rowVo);
				}else{
					throw new Exception("SBS 코드가 이미 존재하는 광고주입니다.");
				}
			}else if(rowType == 2){
				updateCount += dao.processUPDATE01(rowVo);
			}
		}
		
		return deleteCount + updateCount;

	}
	
}
