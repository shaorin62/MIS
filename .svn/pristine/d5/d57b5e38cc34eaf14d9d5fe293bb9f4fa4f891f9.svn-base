package core.erp.yea.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.yea.service.YEAA0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	YEAA0020ServiceImpl - 간이세액산출근거 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.27.
 * @version	1.0
 * @see		{@link YEAA0020Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.10.27.	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("YEAA0020Service")
public class YEAA0020ServiceImpl extends EgovAbstractServiceImpl implements YEAA0020Service {

	/**
	 * 간이세액산출근거 DAO class inject.
	 */
	@Resource(name = "YEAA0020Dao")
	private YEAA0020Dao dao;

	/**
	 * 간이세액산출근거 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsYEA_TAXBAS", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * YEAA0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{
		 
		int iTotCnt = 0; 
		int updateCount = 0;
		int deleteCount = 0;
		
		Map rowVo = null;
		int rowType = 0;

		List dsYEA_TAXBAS     = (List) saveData.get("dsYEA_TAXBAS");
		List dsYEA_TAXBAS_Del = (List) saveData.get("dsYEA_TAXBAS_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsYEA_TAXBAS_Del.size(); i++) {

        	rowVo = (Map) dsYEA_TAXBAS_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsYEA_TAXBAS.size(); i++) {

			rowVo = (Map) dsYEA_TAXBAS.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}

		
		return deleteCount + updateCount;

	}
	
	/**
	 * 간이세액산출근거 복사한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo);
	}	
	
	
}
