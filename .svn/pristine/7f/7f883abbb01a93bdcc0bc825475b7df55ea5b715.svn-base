/**
 * core.erp.pay.service.impl.PAYB0210ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0210Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0210ServiceImpl - 기지급금관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.25
 * @version	1.0
 * @see		{@link PAYB0210Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.25	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0210Service")
public class PAYB0210ServiceImpl extends EgovAbstractServiceImpl implements PAYB0210Service {

	/**
	 * 기지급금관리 DAO class inject.
	 */
	@Resource(name = "PAYB0210Dao")
	private PAYB0210Dao dao;

	/**
	 * 정산예외 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 정산예외 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_INCOME", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	/**
	 *  기소득관리 대상사원정보 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	/**
	 * PAYB0210 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsPY_INCOME     = (List) saveData.get("dsPY_INCOME");
		List dsPY_INCOME_Del = (List) saveData.get("dsPY_INCOME_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_INCOME_Del.size(); i++) {

        	rowVo = (Map) dsPY_INCOME_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_INCOME.size(); i++) {

			rowVo = (Map) dsPY_INCOME.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}

			iTotCnt++;

		}

		return iTotCnt;

	}

	/**
	 * 이전자료를 복사한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo);
		Map<String, Object> returnMap = new HashMap<String, Object>();
		searchVo.put("INDN_DATE", searchVo.get("PAYX_DATE_TO"));
		returnMap.put("dsPY_INCOME", dao.processSEARCH00(searchVo));
		return returnMap;
	}
}
