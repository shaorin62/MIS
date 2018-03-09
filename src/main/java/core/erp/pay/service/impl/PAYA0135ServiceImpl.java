/**
 * core.erp.pay.service.impl.PAYA0135ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYA0135Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYA0135ServiceImpl - 정기상여등록(개인별) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.19
 * @version	1.0
 * @see		{@link PAYA0135Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.19	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYA0135Service")
public class PAYA0135ServiceImpl extends EgovAbstractServiceImpl implements PAYA0135Service {

	/**
	 * 정기상여등록(개인별) DAO class inject.
	 */
	@Resource(name = "PAYA0135Dao")
	private PAYA0135Dao dao;

	/**
	 * 개인별정기상여 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별정기상여 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_EMPLRT", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 개인별정기상여 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별정기상여 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * PAYA0135 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_EMPLRT     = (List) saveData.get("dsPY_EMPLRT");  
		List dsPY_EMPLRT_Del = (List) saveData.get("dsPY_EMPLRT_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_EMPLRT_Del.size(); i++) {

        	rowVo = (Map) dsPY_EMPLRT_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_EMPLRT.size(); i++) {

			rowVo = (Map) dsPY_EMPLRT.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);


			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
}
