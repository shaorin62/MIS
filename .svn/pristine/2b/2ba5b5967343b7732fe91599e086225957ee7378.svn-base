/**
 * core.erp.pay.service.impl.PAYA0090ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYA0090Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYA0090ServiceImpl - 지급항목정보 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.22
 * @version	1.0
 * @see		{@link PAYA0090Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.22	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYA0090Service")
public class PAYA0090ServiceImpl extends EgovAbstractServiceImpl implements PAYA0090Service {

	/**
	 * 지급항목정보 DAO class inject.
	 */
	@Resource(name = "PAYA0090Dao")
	private PAYA0090Dao dao;

	/**
	 * 급여수당정보_직원구분 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PAYEXP_M", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 급여수당정보_수당수식 목록을 조회한다.
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
	 * 급여수당정보_사용수당정보 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsEXPD_NAME", dao.processSEARCH02(searchVo));
		return returnMap;

    }

	/**
	 * 정의함수 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFUNC_NAME", dao.processSEARCH03(searchVo));
		return returnMap;

    }
	/**
	 * PAYA0090 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_PAYEXP_A     = (List) saveData.get("dsPY_PAYEXP_A");  
		List dsPY_PAYEXP_A_Del = (List) saveData.get("dsPY_PAYEXP_A_DELETE");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_PAYEXP_A.size(); i++) {

			rowVo = (Map) dsPY_PAYEXP_A.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

 			 if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
}
