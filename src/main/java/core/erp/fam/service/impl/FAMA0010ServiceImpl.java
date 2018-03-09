/**
 * core.erp.tmm.service.impl.FAMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMA0010ServiceImpl - 본사정보 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2017.07.12
 * @version	1.0
 * @see		{@link FAMA0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMA0010Service")
public class FAMA0010ServiceImpl extends EgovAbstractServiceImpl implements FAMA0010Service {

	/**
	 * 본사 정보 관리 DAO class inject.
	 */
	@Resource(name = "FAMA0010Dao")
	private FAMA0010Dao fAMA0010Dao;

	/**
	 * 본사 정보 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_OFFICE", fAMA0010Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 본사 정보를 저장,수정 또는 삭제한다.
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

		List dsTM_OFFICE     = (List) saveData.get("dsTM_OFFICE");  
		List dsTM_OFFICE_Del = (List) saveData.get("dsTM_OFFICE_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_OFFICE_Del.size(); i++) {

        	rowVo = (Map) dsTM_OFFICE_Del.get(i);
			deleteCount += fAMA0010Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_OFFICE.size(); i++) {

			rowVo = (Map) dsTM_OFFICE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
			
				fAMA0010Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += fAMA0010Dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
