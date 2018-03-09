/**
 * core.erp.pay.service.impl.PAYB0105ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0105Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0105ServiceImpl - 학자금대출상환관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.26
 * @version	1.0
 * @see		{@link PAYB0105Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0105Service")
public class PAYB0105ServiceImpl extends EgovAbstractServiceImpl implements PAYB0105Service {

	/**
	 * 학자금대출상환관리 DAO class inject.
	 */
	@Resource(name = "PAYB0105Dao")
	private PAYB0105Dao dao;

	/**
	 * 학자금상환 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 학자금상환 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SISCXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 학자금상환공제 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 학자금상환공제 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SISCXD", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	/**
	 * 기타상환내역 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SISCXD", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	/**
	 * PAYB0105 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_SISCXM     = (List) saveData.get("dsPY_SISCXM");  
		List dsPY_SISCXM_Del = (List) saveData.get("dsPY_SISCXM_DELETE");

		List dsPY_SISCXD     = (List) saveData.get("dsPY_SISCXD");  
		List dsPY_SISCXD_Del = (List) saveData.get("dsPY_SISCXD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_SISCXD_Del.size(); i++) {

        	rowVo = (Map) dsPY_SISCXD_Del.get(i);
			dao.processDELETE01(rowVo);
			iTotCnt++;

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_SISCXM_Del.size(); i++) {

        	rowVo = (Map) dsPY_SISCXM_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_SISCXM.size(); i++) {

			rowVo = (Map) dsPY_SISCXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_SISCXD.size(); i++) {

			rowVo = (Map) dsPY_SISCXD.get(i);
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
