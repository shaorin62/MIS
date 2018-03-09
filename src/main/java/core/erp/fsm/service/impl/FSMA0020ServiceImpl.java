/**
 * core.erp.tmm.service.impl.FSMA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMA0020Service; 
import core.erp.fsm.web.FSMA0020Controller;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMA0020ServiceImpl - 품목 분류 목록 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMA0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMA0020Service")
public class FSMA0020ServiceImpl extends EgovAbstractServiceImpl implements FSMA0020Service {

	private static final Logger logger = LoggerFactory.getLogger(FSMA0020ServiceImpl.class);
	
	/**
	 * 품목 분류 목록 관리 DAO class inject.
	 */
	@Resource(name = "FSMA0020Dao")
	private FSMA0020Dao dao;

	/**
	 * 품목 분류 목록 및 트리뷰을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 품목 분류 목록, 화면의 트리뷰
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_CLSFXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTREE_VIEW", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * FSMA0020 저장,수정 또는 삭제한다.
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

		List dsFS_CLSFXM     = (List) saveData.get("dsFS_CLSFXM");  
		List dsFS_CLSFXM_Del = (List) saveData.get("dsFS_CLSFXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsFS_CLSFXM_Del.size(); i++) {

        	rowVo = (Map) dsFS_CLSFXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_CLSFXM.size(); i++) {

			rowVo = (Map) dsFS_CLSFXM.get(i);
			
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
