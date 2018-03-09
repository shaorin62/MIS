package core.erp.pay.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYF0050Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0050ServiceImpl - 퇴직금정산내역 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	안윤준
 * @since	2016. 9. 6.
 * @version	1.0
 * @see		{@link PAYF0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 12.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0050Service")
public class PAYF0050ServiceImpl extends EgovAbstractServiceImpl implements PAYF0050Service {

	/**
	 * 퇴직금정산내역 DAO class inject.
	 */
	@Resource(name = "PAYF0050Dao")
	private PAYF0050Dao dao;

	/**
	 * 개인별기본급 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPROC", dao.processSEARCH00(searchVo));
		return returnMap;

    }

    /**
    *
    * @param voList - 등록할 정보가 담긴 SampleVO
    * @exception Exception
    */
	@Override
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{

		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsPY_RTPROC          = (List) saveData.get("dsPY_RTPROC");
		List dsPY_RTPROC_DELETE   = (List) saveData.get("dsPY_RTPROC_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_RTPROC_DELETE.size(); i++) {
			rowVo = (Map) dsPY_RTPROC_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;

			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_RTPROC.size(); i++) {
			rowVo = (Map) dsPY_RTPROC.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;
				dao.processSAVE00(rowVo);

		}

		return deleteCount + updateCount;

	}

}
