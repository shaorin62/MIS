/**
 * core.erp.pay.service.impl.PAYA0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYA0070Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYA0070ServiceImpl - 급여항목관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.12
 * @version	1.0
 * @see		{@link PAYA0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.12	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYA0070Service")
public class PAYA0070ServiceImpl extends EgovAbstractServiceImpl implements PAYA0070Service {

	/**
	 * 급여항목관리 DAO class inject.
	 */
	@Resource(name = "PAYA0070Dao")
	private PAYA0070Dao dao;

	/**
	 * 수당코드 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_ALLDED", dao.processSEARCH00(searchVo));
		return returnMap;
    }
	
	/**
	 * 공제코드 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_ALLDED", dao.processSEARCH00(searchVo));
		return returnMap;
    }
	/**
	 * PAYA0070 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_ALLDED_A     = (List) saveData.get("dsPY_ALLDED_A");  
		List dsPY_ALLDED_A_Del = (List) saveData.get("dsPY_ALLDED_A_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_ALLDED_A_Del.size(); i++) {

        	rowVo = (Map) dsPY_ALLDED_A_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_ALLDED_A.size(); i++) {

			rowVo = (Map) dsPY_ALLDED_A.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}

		List dsPY_ALLDED_D     = (List) saveData.get("dsPY_ALLDED_D");  
		List dsPY_ALLDED_D_Del = (List) saveData.get("dsPY_ALLDED_D_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_ALLDED_D_Del.size(); i++) {

        	rowVo = (Map) dsPY_ALLDED_D_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_ALLDED_D.size(); i++) {

			rowVo = (Map) dsPY_ALLDED_D.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}		
		
		return iTotCnt;

	}
}
