/**
 * core.erp.pay.service.impl.PAYB0060ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;






import core.erp.pay.service.PAYB0060Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0060ServiceImpl - 건강보험공제적용 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.19
 * @version	1.0
 * @see		{@link PAYB0060Service}
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

@Service("PAYB0060Service")
public class PAYB0060ServiceImpl extends EgovAbstractServiceImpl implements PAYB0060Service {

	/**
	 * 건강보험공제적용 DAO class inject.
	 */
	@Resource(name = "PAYB0060Dao")
	private PAYB0060Dao dao;

	/**
	 * 건강보험납부 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 건강보험납부 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_NHICDE", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 건강보험공제적용 주민등록번호 조회한다.
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
	 * PAYB0060 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_NHICDE     = (List) saveData.get("dsPY_NHICDE");  
		List dsPY_NHICDE_Del = (List) saveData.get("dsPY_NHICDE_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_NHICDE_Del.size(); i++) {

        	rowVo = (Map) dsPY_NHICDE_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_NHICDE.size(); i++) {
			rowVo = (Map) dsPY_NHICDE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1 || rowType == 2) { // SAVE00 에서 UPDATE문이 있음.
				dao.processSAVE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		return iTotCnt;

	}
	
}
