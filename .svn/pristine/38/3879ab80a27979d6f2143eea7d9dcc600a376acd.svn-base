/**
 * core.erp.hrm.service.impl.WFME0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;


import org.springframework.stereotype.Service;


import core.erp.wfm.service.WFME0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFME0010ServiceImpl - 건강검진관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김용만
 * @since	2016.09.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.07	김용만		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFME0010Service")
public class WFME0010ServiceImpl extends EgovAbstractServiceImpl implements WFME0010Service {

	/**
	 * 건강검진관리 DAO class inject.
	 */
	@Resource(name = "WFME0010Dao")
	private WFME0010Dao dao;

	/**
	 * 건강검진관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 건강검진관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_PHEXMN", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 건강검진관리 코드 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 건강검진관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_PHEXMN1", dao.processSEARCH01(searchVo));
		return returnMap;
    }
	
	
	/**
	 * WFME0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsCW_PHEXMN     = (List) saveData.get("dsCW_PHEXMN");  
		List dsCW_PHEXMN_Del = (List) saveData.get("dsCW_PHEXMN_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsCW_PHEXMN_Del.size(); i++) {

        	rowVo = (Map) dsCW_PHEXMN_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsCW_PHEXMN.size(); i++) {

			rowVo = (Map) dsCW_PHEXMN.get(i);
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
