/**
 * core.erp.hrm.service.impl.WFMD0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;




import org.springframework.stereotype.Service;




import core.erp.wfm.service.WFMD0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMD0010ServiceImpl - 차량관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김용만
 * @since	2016.09.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.08	김용만		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMD0010Service")
public class WFMD0010ServiceImpl extends EgovAbstractServiceImpl implements WFMD0010Service {

	/**
	 * 차량관리 DAO class inject.
	 */
	@Resource(name = "WFMD0010Dao")
	private WFMD0010Dao dao;

	/**
	 * 차량관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전산관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_VEHCBS", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 차량관리 키값 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 차량관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_VEHCBS1", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * WFMD0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsCW_COMRMN     = (List) saveData.get("dsCW_VEHCBS");  
		List dsCW_COMRMN_Del = (List) saveData.get("dsCW_VEHCBS_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsCW_COMRMN_Del.size(); i++) {

        	rowVo = (Map) dsCW_COMRMN_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsCW_COMRMN.size(); i++) {

			rowVo = (Map) dsCW_COMRMN.get(i);
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

	
}
