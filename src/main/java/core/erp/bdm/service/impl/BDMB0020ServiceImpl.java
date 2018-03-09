/**
` * core.erp.tmm.service.impl.BDMB0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.bdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.bdm.service.BDMB0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	BDMB0020ServiceImpl - 부서예산인원편성인원설정 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link BDMB0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("BDMB0020Service")
public class BDMB0020ServiceImpl extends EgovAbstractServiceImpl implements BDMB0020Service {

	/**
	 * 부서예산인원편성인원설정 관리 DAO class inject.
	 */
	@Resource(name = "BDMB0020Dao")
	private BDMB0020Dao dao;

	/**
	 * 부서예산인원편성인원설정 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 부서예산인원편성인원설정  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTB_CPLECT", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * BDMB0020 저장,수정, 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map searchVo, Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTB_CPLECT     = (List) saveData.get("dsTB_CPLECT");  
		List dsTB_CPLECT_Del = (List) saveData.get("dsTB_CPLECT_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTB_CPLECT_Del.size(); i++) {

        	rowVo = (Map) dsTB_CPLECT_Del.get(i);
        	rowVo.put("BUDG_YEAR", searchVo.get("BUDG_YEAR"));
			rowVo.put("ACCT_GUB1", searchVo.get("ACCT_GUB1"));
			rowVo.put("SETT_GUBN", searchVo.get("SETT_GUBN"));
			
			deleteCount += dao.processDELETE00(rowVo);

		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTB_CPLECT.size(); i++) {

			rowVo = (Map) dsTB_CPLECT.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			rowVo.put("BUDG_YEAR", searchVo.get("BUDG_YEAR"));
			rowVo.put("ACCT_GUB1", searchVo.get("ACCT_GUB1"));
			rowVo.put("SETT_GUBN", searchVo.get("SETT_GUBN"));
			
			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}

	/**
	 * BDMB0020 전월인원 복사한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC00(Map searchVo, Map saveData) throws Exception{
		
		saveData.put("CURR_YYMM", searchVo.get("CURR_YYMM"));
		saveData.put("ACCT_GUB1", searchVo.get("ACCT_GUB1"));
		return dao.processPROC00(saveData);

	}
	
	/**
	 * BBDMB0020 인사자료 연동한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes") 
	public int processPROC01(Map searchVo, Map saveData) throws Exception{
		
		saveData.put("CURR_YYMM", searchVo.get("CURR_YYMM"));
		saveData.put("ACCT_GUB1", searchVo.get("ACCT_GUB1"));
		return dao.processPROC01(saveData);

	}
}
