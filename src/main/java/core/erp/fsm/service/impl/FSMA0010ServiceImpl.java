/**
 * core.erp.tmm.service.impl.FSMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMA0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMA0010ServiceImpl - 자산 분류 목록 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMA0010Service}
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

@Service("FSMA0010Service")
public class FSMA0010ServiceImpl extends EgovAbstractServiceImpl implements FSMA0010Service {

	/**
	 * 자산 분류 목록 관리 DAO class inject.
	 */
	@Resource(name = "FSMA0010Dao")
	private FSMA0010Dao dao;

	/**
	 * 자산 분류 목록 및 상각률을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 분류 목록, 화면의 상각률
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCLXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsDPCT_RATE", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * FSMA0010 저장,수정 또는 삭제한다.
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

		List dsFS_ASCLXM     = (List) saveData.get("dsFS_ASCLXM");  
		List dsFS_ASCLXM_Del = (List) saveData.get("dsFS_ASCLXM_DELETE");
		
		System.out.println(dsFS_ASCLXM_Del);

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
