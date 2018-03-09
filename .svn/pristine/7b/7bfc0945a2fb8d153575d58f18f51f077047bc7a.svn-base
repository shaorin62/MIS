/**
 * core.erp.pay.service.impl.PAYB0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.impl.HRMB0010Dao;
import core.erp.pay.service.PAYB0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0010ServiceImpl - 급여기본내역관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.22
 * @version	1.0
 * @see		{@link PAYB0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.22	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0010Service")
public class PAYB0010ServiceImpl extends EgovAbstractServiceImpl implements PAYB0010Service {

	/**
	 * 급여기본내역관리 DAO class inject.
	 */
	@Resource(name = "PAYB0010Dao")
	private PAYB0010Dao dao;
	@Resource(name = "HRMB0010Dao")
	private HRMB0010Dao daoHR;

	/**
	 * 급여기본정보 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여기본정보 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_MASTPM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 지급공제관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 지급공제관리 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_ALDEYN1", dao.processSEARCH01(searchVo));
		returnMap.put("dsPY_ALDEYN2", dao.processSEARCH02(searchVo));
		returnMap.put("dsPY_REGSAL", dao.processSEARCH03(searchVo));
		returnMap.put("dsPY_PAYSET", dao.processSEARCH04(searchVo));
		returnMap.put("dsPY_INCOME", dao.processSEARCH05(searchVo));
		returnMap.put("dsHR_FAMILY", daoHR.processSEARCH07(searchVo));
		//returnMap.put("dsHR_APPOXD", daoHR.processSEARCH03(searchVo));
		return returnMap;

    }

	/**
	 * 지급공제(TAB01) 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 지급공제관리 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		if ( "cmbSHREXPD_CODE1".equals(searchVo.get("QUERY_TYPE"))){
			returnMap.put("dsPY_ALDEYN1", dao.processSEARCH01(searchVo));
		} else{
			returnMap.put("dsPY_ALDEYN2", dao.processSEARCH02(searchVo));
		}

		return returnMap;

	}

	/**
	 * PAYB0010 저장,수정 또는 삭제한다.
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

		List dsPY_MASTPM     = (List) saveData.get("dsPY_MASTPM");
		List dsHR_FAMILY     = (List) saveData.get("dsHR_FAMILY");
		List dsHR_FAMILY_Del = (List) saveData.get("dsHR_FAMILY_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_FAMILY_Del.size(); i++) {
        	rowVo = (Map) dsHR_FAMILY_Del.get(i);
        	daoHR.processDELETE03(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_MASTPM.size(); i++) {
			rowVo = (Map) dsPY_MASTPM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

 			 if (rowType == 2) {
				dao.processUPDATE00(rowVo);

			}

			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_FAMILY.size(); i++) {
			rowVo = (Map) dsHR_FAMILY.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if(rowType == 1){
				daoHR.processSAVE03(rowVo);

			}else if (rowType == 2) {
 				daoHR.processUPDATE03(rowVo);

			}

			iTotCnt++;

		}

		return iTotCnt;

	}
}
