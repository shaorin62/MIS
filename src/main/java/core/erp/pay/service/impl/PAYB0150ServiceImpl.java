/**
 * core.erp.pay.service.impl.PAYB0150ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0150Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0150ServiceImpl - 퇴직자급여지급 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.18
 * @version	1.0
 * @see		{@link PAYB0150Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.18	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0150Service")
public class PAYB0150ServiceImpl extends EgovAbstractServiceImpl implements PAYB0150Service {

	/**
	 * 퇴직자급여지급 DAO class inject.
	 */
	@Resource(name = "PAYB0150Dao")
	private PAYB0150Dao dao;

	/**
	 * 급여지급퇴직자 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여지급퇴직자 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PAYRET", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * PAYB0150 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsPY_PAYRET     = (List) saveData.get("dsPY_PAYRET");


        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_PAYRET.size(); i++) {

			rowVo = (Map) dsPY_PAYRET.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			dao.processSAVE00(rowVo);

			iTotCnt++;

		}

		return iTotCnt;

	}
}
