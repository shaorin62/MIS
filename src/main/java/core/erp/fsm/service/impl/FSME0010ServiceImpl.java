/**
 * core.erp.tmm.service.impl.FSME0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSME0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSME0010ServiceImpl - 자산 실사 목록 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.26
 * @version	1.0
 * @see		{@link FSME0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSME0010Service")
public class FSME0010ServiceImpl extends EgovAbstractServiceImpl implements FSME0010Service {

	/**
	 * 자산 실사 목록 관리 DAO class inject.
	 */
	@Resource(name = "FSME0010Dao")
	private FSME0010Dao dao;

	/**
	 * 자산 실사 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 실사 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_INVTXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * FSME0010 저장,수정 또는 삭제한다.
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

		List dsFS_ASCLXM     = (List) saveData.get("dsFS_INVTXM");  
		List dsFS_ASCLXM_Del = (List) saveData.get("dsFS_INVTXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsFS_ASCLXM_Del.size(); i++) {

        	rowVo = (Map) dsFS_ASCLXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASCLXM.size(); i++) {

			rowVo = (Map) dsFS_ASCLXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
