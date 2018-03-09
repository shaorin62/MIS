/**
 * core.erp.tmm.service.impl.TMMA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMA0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0020ServiceImpl - 세부코드관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.06.30
 * @version	1.0
 * @see		{@link TMMA0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.30	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0020Service")
public class TMMA0020ServiceImpl extends EgovAbstractServiceImpl implements TMMA0020Service {

	/**
	 * 세부코드관리 DAO class inject.
	 */
	@Resource(name = "TMMA0020Dao")
	private TMMA0020Dao tMMA0020Dao;

	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_CODEXH", tMMA0020Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 공통코드상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_CODEXD", tMMA0020Dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * TMMA0020 저장,수정 또는 삭제한다.
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

		List dsTM_CODEXD     = (List) saveData.get("dsTM_CODEXD");  
		List dsTM_CODEXD_Del = (List) saveData.get("dsTM_CODEXD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_CODEXD_Del.size(); i++) {

        	rowVo = (Map) dsTM_CODEXD_Del.get(i);
			deleteCount += tMMA0020Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_CODEXD.size(); i++) {

			rowVo = (Map) dsTM_CODEXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				tMMA0020Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += tMMA0020Dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
