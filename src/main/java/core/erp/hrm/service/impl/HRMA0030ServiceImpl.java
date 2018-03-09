/**
 * core.erp.hrm.service.impl.HRMA0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMA0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMA0030ServiceImpl - 조직개편관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.10.21
 * @version	1.0
 * @see		{@link HRMA0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.21	고민주		Initial Created.
 * 2016.12.08	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMA0030Service")
public class HRMA0030ServiceImpl extends EgovAbstractServiceImpl implements HRMA0030Service {

	/**
	 * 조직개편관리 DAO class inject.
	 */
	@Resource(name = "HRMA0030Dao")
	private HRMA0030Dao dao;

	/**
	 * 부서변경 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 부서변경 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_SIMUDT", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 인사변경 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인사변경 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_SIMUEM", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * HRMA0030 저장,수정 또는 삭제한다.
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

		List dsTM_SIMUDT     = (List) saveData.get("dsTM_SIMUDT");
		List dsTM_SIMUDT_Del = (List) saveData.get("dsTM_SIMUDT_DELETE");

		List dsTM_SIMUEM     = (List) saveData.get("dsTM_SIMUEM");
		List dsTM_SIMUEM_Del = (List) saveData.get("dsTM_SIMUEM_DELETE");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_SIMUDT.size(); i++) {

			rowVo = (Map) dsTM_SIMUDT.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

 			 if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}

			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_SIMUEM.size(); i++) {

			rowVo = (Map) dsTM_SIMUEM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

 			 if (rowType == 2) {

				dao.processUPDATE01(rowVo);

			}

			iTotCnt++;

		}

		return iTotCnt;

	}
}
