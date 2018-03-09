package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYF0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0010ServiceImpl - 퇴직세액근거표 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 9. 6.
 * @version	1.0
 * @see		{@link PAYF0010Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 6.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0010Service")
public class PAYF0010ServiceImpl extends EgovAbstractServiceImpl implements PAYF0010Service {

	/**
	 * 퇴직세액근거표 DAO class inject.
	 */
	@Resource(name = "PAYF0010Dao")
	private PAYF0010Dao dao;

	/**
	 * 개인별기본급 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTBASE", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * PAYF0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes" })
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_RTBASE     = (List) saveData.get("dsPY_RTBASE");  
		List dsPY_RTBASE_Del = (List) saveData.get("dsPY_RTBASE_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_RTBASE_Del.size(); i++) {
        	rowVo = (Map) dsPY_RTBASE_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_RTBASE.size(); i++) {
			rowVo = (Map) dsPY_RTBASE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if ( rowType == 1 || rowType == 2 ) {
				dao.processSAVE00(rowVo);
			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
}
