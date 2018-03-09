package core.erp.yea.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.yea.service.YEAA0060Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	YEAA0060ServiceImpl - 개인자료등록확인 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.28.
 * @version	1.0
 * @see		{@link YEAA0060Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.10.28.	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("YEAA0060Service")
public class YEAA0060ServiceImpl extends EgovAbstractServiceImpl implements YEAA0060Service {

	/**
	 * 개인자료등록확인 DAO class inject.
	 */
	@Resource(name = "YEAA0060Dao")
	private YEAA0060Dao dao;

	/**
	 * 개인자료등록확인 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsYEA_YETABS", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * YEAA0060 저장,수정 또는 삭제한다.
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

		List dsYEA_YETABS     = (List) saveData.get("dsYEA_YETABS");
		List dsYEA_YETABS_Del = (List) saveData.get("dsYEA_YETABS_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsYEA_YETABS_Del.size(); i++) {

        	rowVo = (Map) dsYEA_YETABS_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsYEA_YETABS.size(); i++) {

			rowVo = (Map) dsYEA_YETABS.get(i);
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
	 * 개인자료등록확인 복사한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo);
	}	
	
	
}
