/**
 * core.erp.pay.service.impl.PAYA0080ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYA0080Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYA0080ServiceImpl - 급여기준급여항목설정 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.28
 * @version	1.0
 * @see		{@link PAYA0080Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.28	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYA0080Service")
public class PAYA0080ServiceImpl extends EgovAbstractServiceImpl implements PAYA0080Service {

	/**
	 * 급여기준급여항목설정 DAO class inject.
	 */
	@Resource(name = "PAYA0080Dao")
	private PAYA0080Dao dao;

	/**
	 * 급여수식 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여수식 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		dao.processSAVE01(searchVo);
		returnMap.put("dsPY_PAYEXP_M", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 급여수식 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PAYEXP_A", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	/**
	 * 급여수식 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PAYEXP_D", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	/**
	 * PAYA0080 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_PAYEXP_A     = (List) saveData.get("dsPY_PAYEXP_A");  

		List dsPY_PAYEXP_D     = (List) saveData.get("dsPY_PAYEXP_D");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_PAYEXP_A.size(); i++) {

			rowVo = (Map) dsPY_PAYEXP_A.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
			
				dao.processSAVE00(rowVo);

			} 			 		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_PAYEXP_D.size(); i++) {

			rowVo = (Map) dsPY_PAYEXP_D.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
			
				dao.processSAVE00(rowVo);

			} 			 		}
		
		return iTotCnt;

	}
}
