/**
 * core.erp.tmm.service.impl.TMMA0060ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMA0060Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0060ServiceImpl - 일련번호관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.07.05
 * @version	1.0
 * @see		{@link TMMA0060Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.05	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0060Service")
public class TMMA0060ServiceImpl extends EgovAbstractServiceImpl implements TMMA0060Service {

	/**
	 * 일련번호관리 DAO class inject.
	 */
	@Resource(name = "TMMA0060Dao")
	private TMMA0060Dao dao;

	/**
	 * 채번 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 채번 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_SEQUNC", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 채번상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 채번상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_SEQDTL", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * TMMA0060 저장,수정 또는 삭제한다.
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

		List dsTM_SEQUNC     = (List) saveData.get("dsTM_SEQUNC");  
		List dsTM_SEQUNC_Del = (List) saveData.get("dsTM_SEQUNC_DELETE");

		List dsTM_SEQDTL     = (List) saveData.get("dsTM_SEQDTL");  
		List dsTM_SEQDTL_Del = (List) saveData.get("dsTM_SEQDTL_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_SEQUNC_Del.size(); i++) {

        	rowVo = (Map) dsTM_SEQUNC_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_SEQUNC.size(); i++) {

			rowVo = (Map) dsTM_SEQUNC.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_SEQDTL.size(); i++) {

			rowVo = (Map) dsTM_SEQDTL.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

 			 if (rowType == 2) {

				updateCount += dao.processUPDATE01(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
