/**
 * core.erp.pay.service.impl.PAYF0011ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYF0011Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0011ServiceImpl - 퇴직배율관리 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 9. 5.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 9. 5.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */

@Service("PAYF0011Service")
public class PAYF0011ServiceImpl extends EgovAbstractServiceImpl implements PAYF0011Service {

	/**
	 * 퇴직배율관리 DAO class inject.
	 */
	@Resource(name = "PAYF0011Dao")
	private PAYF0011Dao pAYF0011Dao;

	/**
	 * 퇴직배율관리를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPTRT", pAYF0011Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 퇴직배율관리를 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsPY_RTPTRT     = (List) saveData.get("dsPY_RTPTRT");  
		List dsPY_RTPTRT_Del = (List) saveData.get("dsPY_RTPTRT_DELETE");

        
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_RTPTRT_Del.size(); i++) {

        	rowVo = (Map) dsPY_RTPTRT_Del.get(i);
			deleteCount += pAYF0011Dao.processDELETE00(rowVo);

		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_RTPTRT.size(); i++) {

			rowVo = (Map) dsPY_RTPTRT.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				pAYF0011Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += pAYF0011Dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;
	}
}
