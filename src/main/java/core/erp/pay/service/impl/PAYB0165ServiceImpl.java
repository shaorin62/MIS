/**
 * core.erp.pay.service.impl.PAYB0165ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0165Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0165ServiceImpl - 급여체크리스트 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.26
 * @version	1.0
 * @see		{@link PAYB0165Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0165Service")
public class PAYB0165ServiceImpl extends EgovAbstractServiceImpl implements PAYB0165Service {

	/**
	 * 급여체크리스트 DAO class inject.
	 */
	@Resource(name = "PAYB0165Dao")
	private PAYB0165Dao dao;

	/**
	 * 급여일할계산신청 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여일할계산신청 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_APDCAL", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * PAYB0165 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_APDCAL     = (List) saveData.get("dsPY_APDCAL");  
		List dsPY_APDCAL_Del = (List) saveData.get("dsPY_APDCAL_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_APDCAL_Del.size(); i++) {

        	rowVo = (Map) dsPY_APDCAL_Del.get(i);
			dao.processDELETE00(rowVo);
			//dao.processPROC00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_APDCAL.size(); i++) {

			rowVo = (Map) dsPY_APDCAL.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);
			//	dao.processPROC00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);
			//	dao.processPROC00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
}
