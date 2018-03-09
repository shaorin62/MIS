/**
 * core.erp.pay.service.impl.PAYB0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0070Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0070ServiceImpl - 국민연금공제적용 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.25
 * @version	1.0
 * @see		{@link PAYB0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.25	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0070Service")
public class PAYB0070ServiceImpl extends EgovAbstractServiceImpl implements PAYB0070Service {

	/**
	 * 국민연금공제적용 DAO class inject.
	 */
	@Resource(name = "PAYB0070Dao")
	private PAYB0070Dao dao;

	/**
	 * 국민연금납부 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 국민연금납부 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_NPSXDE", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 국민연금공제적용 주민등록번호 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH99(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", dao.processSEARCH99(searchVo));
		return returnMap;
	}
	
	/**
	 * PAYB0070 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_NPSXDE     = (List) saveData.get("dsPY_NPSXDE");  
		List dsPY_NPSXDE_Del = (List) saveData.get("dsPY_NPSXDE_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_NPSXDE_Del.size(); i++) {

        	rowVo = (Map) dsPY_NPSXDE_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_NPSXDE.size(); i++) {

			rowVo = (Map) dsPY_NPSXDE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1 || rowType == 2) {
				dao.processSAVE00(rowVo);
			} 
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
		
	/**
	 * 국민연금 미수금을 처리한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		dao.processSAVE01(searchVo);
		returnMap.put("dsPY_NPSXDE", dao.processSEARCH00(searchVo));
		return returnMap;
	}
}
