/**
 * core.erp.tmm.service.impl.TMMA0310ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMA0310Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0310ServiceImpl - 경영계획및실적관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최인철
 * @since	2016.11.01
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.01	최인철		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0310Service")
public class TMMA0310ServiceImpl extends EgovAbstractServiceImpl implements TMMA0310Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMA0230ServiceImpl.class);
	/**
	 * 경영계획및실적관리 DAO class inject.
	 */
	@Resource(name = "TMMA0310Dao")
	private TMMA0310Dao dao;

	/**
	 * 경영계획및실적관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공지사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTR_MONEPL", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * TMMA0310 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{
		//int iTotCnt = 0; 
        //dao.processSAVE00(saveData);
	    //iTotCnt += 1;
		//return iTotCnt;
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		logger.info("1 : "+ rowVo);

		List dsTR_MONEPL     = (List) saveData.get("dsTR_MONEPL");  
		List dsTR_MONEPL_DELETE = (List) saveData.get("dsTR_MONEPL_DELETE");
		
		String MAID_TYCD	= (String) searchVo.get("MAID_TYCD");	      	//MAID_TYPE
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
		
        for (int i = 0; i < dsTR_MONEPL_DELETE.size(); i++) {
        	
        	rowVo = (Map) dsTR_MONEPL_DELETE.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}
        
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTR_MONEPL.size(); i++) {
			
			rowVo = (Map) dsTR_MONEPL.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				rowVo.put("MAID_TYCD", MAID_TYCD);
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
			
				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;



	}
}
