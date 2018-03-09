package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMA0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;




/**
 * <pre>
 *	TXMA0020ServiceImpl - 부가세마감처리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 4.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 4.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMA0020Service")
public class TXMA0020ServiceImpl extends EgovAbstractServiceImpl implements TXMA0020Service {
	
	
	/**
	 * 부가세마감처리  DAO class inject.
	 */
	@Resource(name = "TXMA0020Dao")
	private TXMA0020Dao tXMA0020Dao;

	/**
	 * 부가세마감처리를 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 예산과목계정매핑관리  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATCLS", tXMA0020Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 부가세마감처리를 저장한다.
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
		
		List dsTA_VATCLS     = (List) saveData.get("dsTA_VATCLS");  
		
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VATCLS.size(); i++) {
			rowVo = (Map) dsTA_VATCLS.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 2) {
				
				tXMA0020Dao.processSAVE00(rowVo);
				
			} 
			
		}
		
		return deleteCount + updateCount;

	}

}
