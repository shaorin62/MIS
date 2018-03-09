package core.erp.yea.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.yea.service.YEAA0060_2016Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	YEAA0060_2016ServiceImpl - 개인자료등록현황 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.28.
 * @version	1.0
 * @see		{@link YEAA0060_2016Service}
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
@Service("YEAA0060_2016Service")
public class YEAA0060_2016ServiceImpl extends EgovAbstractServiceImpl implements YEAA0060_2016Service {

	/**
	 * 개인자료등록현황 DAO class inject.
	 */
	@Resource(name = "YEAA0060_2016Dao")
	private YEAA0060_2016Dao dao;

	/**
	 * 개인자료등록현황 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsYEA_INCDEC", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * YEAA0060_2016 저장,수정 또는 삭제한다.
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

		List dsYEA_INCDEC          = (List) saveData.get("dsYEA_INCDEC");            //List 객체 생성
		List dsYEA_INCDEC_DELETE   = (List) saveData.get("dsYEA_INCDEC_DELETE");     //List 객체 생성 
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsYEA_INCDEC_DELETE.size(); i++) {
			rowVo = (Map) dsYEA_INCDEC_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;

			deleteCount += dao.processDELETE00(rowVo);

		}


		//DataSet의 Row Count만큼 돌면서 Insert Or Update(공통코드 대분류)
		for (int i = 0; i < dsYEA_INCDEC.size(); i++) {
			rowVo = (Map) dsYEA_INCDEC.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			if (rowType == 1) {
				dao.processUPDATE00(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE00(rowVo);
				
			}
			
			updateCount++;

		}

		
		return deleteCount + updateCount;

	}	
	
}
