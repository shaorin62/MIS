/**
 * core.erp.pay.service.impl.PAYB0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0040Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0040ServiceImpl - 급여일지 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.18
 * @version	1.0
 * @see		{@link PAYB0040Service}
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

@Service("PAYB0040Service")
public class PAYB0040ServiceImpl extends EgovAbstractServiceImpl implements PAYB0040Service {

	/**
	 * 급여일지 DAO class inject.
	 */
	@Resource(name = "PAYB0040Dao")
	private PAYB0040Dao dao;

	/**
	 * 급여일지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여일지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMDIRY", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**	 
	 * 급여일지 직원구분 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여일지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCLSD_CNTT", dao.processSEARCH01(searchVo));
		returnMap.put("dsPY_BONBRT", dao.processSEARCH02(searchVo));	/*2016-10-12 LYG 상여기준율정보*/
		return returnMap;

    }

	/**
	 * PAYB0040 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_PMDIRY     = (List) saveData.get("dsPY_PMDIRY");  
		List dsPY_PMDIRY_Del = (List) saveData.get("dsPY_PMDIRY_DELETE");
		List dsPY_BONBRT     = (List) saveData.get("dsPY_BONBRT");  
		List dsPY_BONBRT_Del = (List) saveData.get("dsPY_BONBRT_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_BONBRT_Del.size(); i++) {

        	rowVo = (Map) dsPY_BONBRT_Del.get(i);
			dao.processDELETE01(rowVo);
			iTotCnt++;

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_PMDIRY_Del.size(); i++) {

        	rowVo = (Map) dsPY_PMDIRY_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_PMDIRY.size(); i++) {

			rowVo = (Map) dsPY_PMDIRY.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_BONBRT.size(); i++) {

			rowVo = (Map) dsPY_BONBRT.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE01(rowVo);

			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
}
