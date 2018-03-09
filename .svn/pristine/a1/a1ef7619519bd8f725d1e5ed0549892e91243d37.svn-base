package core.erp.pay.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYF0100Service;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0100ServiceImpl - 퇴직연금사업자 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	김준수
 * @since	2016. 9. 8.
 * @version	1.0
 * @see		{@link PAYF0100Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 8.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0100Service")
public class PAYF0100ServiceImpl extends EgovAbstractServiceImpl implements PAYF0100Service {

	/**
	 * 퇴직연금사업자 DAO class inject.
	 */
	@Resource(name = "PAYF0100Dao")
	private PAYF0100Dao dao;

	/**
	 * 퇴직연금예치금 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();


		Object search02 = dao.processSEARCH02(searchVo);

		List<Map<String, Object>> colList = new ArrayList<Map<String,Object>>();

		for(int i = 0 ; i < DataSetUtil.getRowCount(search02) ; i ++){
			Map<String, Object> data = new HashMap();
			data.put("REAY_JOCD",DataSetUtil.getColumn(search02, i, "REAY_JOCD").toString());
			colList.add(data);

		}
		searchVo.put("REAY_LIST", colList);
		returnMap.put("dsPY_RTPSDB", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 퇴직연금예치금 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPSRT", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 퇴직연금예치금 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return dao.processSEARCH02(searchVo);

    }

	/**
	 * 퇴직연금예치금 목록을 저장,수정 또는 삭제한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes" })
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsPY_RTPSDB     = (List) saveData.get("dsPY_RTPSDB");
		List dsPY_RTPSRT     = (List) saveData.get("dsPY_RTPSRT");

        //DataSet의 Row Count만큼 돌면서 Update
		for (int i = 0; i < dsPY_RTPSDB.size(); i++) {
			rowVo = (Map) dsPY_RTPSDB.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if ( rowType == 2 ) {
				dao.processUPDATE00(rowVo);
			}

			iTotCnt++;

		}

		//DataSet의 Row Count만큼 돌면서 Update
				for (int i = 0; i < dsPY_RTPSRT.size(); i++) {
					rowVo = (Map) dsPY_RTPSRT.get(i);
					rowType = (Integer) rowVo.get("ROW_TYPE");

					if ( rowType == 2 ) {
						dao.processUPDATE01(rowVo);
					}

					iTotCnt++;

				}

		return iTotCnt;

	}
}
