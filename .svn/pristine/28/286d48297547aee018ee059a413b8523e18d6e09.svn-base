/**
 * core.erp.tmm.service.impl.BDMD0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.bdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.bdm.service.BDMD0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	BDMD0010ServiceImpl - 품의예산관리 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link BDMD0010Service}
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

@Service("BDMD0010Service")
public class BDMD0010ServiceImpl extends EgovAbstractServiceImpl implements BDMD0010Service {

	/**
	 * 품의예산관리 관리 DAO class inject.
	 */
	@Resource(name = "BDMD0010Dao")
	private BDMD0010Dao dao;

	/**
	 * 품의예산관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 품의예산관리  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTB_CPLREQ", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * BDMD0010 저장,수정, 삭제한다.
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

		List dsTB_CPLREQ     = (List) saveData.get("dsTB_CPLREQ");  
		List dsTB_CPLREQ_Del = (List) saveData.get("dsTB_CPLREQ_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTB_CPLREQ_Del.size(); i++) {

        	rowVo = (Map) dsTB_CPLREQ_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTB_CPLREQ.size(); i++) {

			rowVo = (Map) dsTB_CPLREQ.get(i);
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
