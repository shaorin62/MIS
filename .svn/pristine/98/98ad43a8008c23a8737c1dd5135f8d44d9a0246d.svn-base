/**
 * core.erp.pay.service.impl.PAYC0255ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYC0255Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYC0255ServiceImpl - 소급계산 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	이용관
 * @since	2016.10.18
 * @version	1.0
 * @see		{@link PAYC0255Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.18	이용관		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYC0255Service")
public class PAYC0255ServiceImpl extends EgovAbstractServiceImpl implements PAYC0255Service {

	/**
	 * 소급계산 DAO class inject.
	 */
	@Resource(name = "PAYC0255Dao")
	private PAYC0255Dao dao;

	/**
	 * 소급내역 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 소급내역 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_REPAYD", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * PAYC0255 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_REPAYD     = (List) saveData.get("dsPY_REPAYD");  
		List dsPY_REPAYD_Del = (List) saveData.get("dsPY_REPAYD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_REPAYD_Del.size(); i++) {

        	rowVo = (Map) dsPY_REPAYD_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_REPAYD.size(); i++) {

			rowVo = (Map) dsPY_REPAYD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
		
		return iTotCnt;

	}

	/**
	 * 소급계산 처리를 한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {

		dao.processPROC00(searchVo);

    }

}
