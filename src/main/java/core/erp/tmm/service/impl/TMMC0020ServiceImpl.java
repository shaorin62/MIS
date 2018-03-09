/**
 * core.erp.tmm.service.impl.TMMC0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMC0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMC0020ServiceImpl - 부서관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.07
 * @version	1.0
 * @see		{@link TMMC0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.07	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMC0020Service")
public class TMMC0020ServiceImpl extends EgovAbstractServiceImpl implements TMMC0020Service {

	/**
	 * 부서관리 DAO class inject.
	 */
	@Resource(name = "TMMC0020Dao")
	private TMMC0020Dao dao;

	/**
	 * 부서정보 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 부서정보 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_DEPTXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 부서이력 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 부서이력 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_DEPHSL", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * TMMC0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsTM_DEPTXM     = (List) saveData.get("dsTM_DEPTXM");  
		List dsTM_DEPTXM_Del = (List) saveData.get("dsTM_DEPTXM_DELETE");

		List dsTM_DEPHSL     = (List) saveData.get("dsTM_DEPHSL");  
		List dsTM_DEPHSL_Del = (List) saveData.get("dsTM_DEPHSL_DELETE");

		String  sSTDS_DATE = "";
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_DEPHSL_Del.size(); i++) {

        	rowVo = (Map) dsTM_DEPHSL_Del.get(i);

			if(sSTDS_DATE.equals("") ||  Integer.parseInt(sSTDS_DATE) > Integer.parseInt(rowVo.get("STDS_DATE").toString())) {
				sSTDS_DATE = rowVo.get("STDS_DATE").toString();
			}
        	        	
			dao.processDELETE01(rowVo);
			iTotCnt++;

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_DEPTXM_Del.size(); i++) {

        	rowVo = (Map) dsTM_DEPTXM_Del.get(i);
        	

			if(sSTDS_DATE.equals("") ||  Integer.parseInt(sSTDS_DATE) > Integer.parseInt(rowVo.get("REGR_DATE").toString())) {
				sSTDS_DATE = rowVo.get("REGR_DATE").toString();
			}
			
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_DEPTXM.size(); i++) {

			rowVo = (Map) dsTM_DEPTXM.get(i);

			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				if(sSTDS_DATE.equals("") ||  Integer.parseInt(sSTDS_DATE) > Integer.parseInt(rowVo.get("REGR_DATE").toString())) {
					
					sSTDS_DATE = rowVo.get("REGR_DATE").toString();
				}
				
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				// update 시 폐기일 입력 안 했을 때 발생하는 에러 때문에 주석
//				if (rowVo.get("WAST_DATE") != null && Integer.parseInt((sSTDS_DATE.equals("")?"29991231":sSTDS_DATE)) > Integer.parseInt(rowVo.get("WAST_DATE").toString())) {
//					
//					sSTDS_DATE = rowVo.get("WAST_DATE").toString();
//					 
//				}
				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_DEPHSL.size(); i++) {

			rowVo = (Map) dsTM_DEPHSL.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				if(sSTDS_DATE.equals("") ||  Integer.parseInt(sSTDS_DATE) > Integer.parseInt(rowVo.get("STDS_DATE").toString())) {
					sSTDS_DATE = rowVo.get("STDS_DATE").toString();
				}
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				if(sSTDS_DATE.equals("") ||  Integer.parseInt(sSTDS_DATE) > Integer.parseInt(rowVo.get("STDS_DATE").toString())) {
					sSTDS_DATE = rowVo.get("STDS_DATE").toString();
				}
				dao.processUPDATE01(rowVo);

			}
			
			iTotCnt++;
			
		}

		if(!sSTDS_DATE.equals("")){
			
			Map mapParam = new HashMap<String, Object>();
			mapParam.put("STDS_DATE", sSTDS_DATE);
			System.out.println("●●●●●●●●●●●●●●●sSTDS_DATE = " + sSTDS_DATE);
			dao.processUPDATE02(mapParam);
			
		}
			
		return iTotCnt;

	}
}
