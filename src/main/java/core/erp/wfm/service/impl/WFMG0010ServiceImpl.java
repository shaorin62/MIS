/**
 * core.erp.hrm.service.impl.WFMG0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.wfm.service.WFMG0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMG0010ServiceImpl - 연수신청 및 내역 조회 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김혜림
 * @since	2016.09.21
 * @version	1.0
 * @see		{@link WFMG0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.21	김혜림		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMG0010Service")
public class WFMG0010ServiceImpl extends EgovAbstractServiceImpl implements WFMG0010Service {

	/**
	 * 근태신청 내역조회 DAO class inject.
	 */
	@Resource(name = "WFMG0010Dao")
	private WFMG0010Dao wFMG0010Dao;
	
	@Resource(name = "WFMG0020Dao")
	private WFMG0020Dao wFMG0020Dao;

	/**
	 * 연수신청 결재내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 연수신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_APPRXH", wFMG0010Dao.processSEARCH00(searchVo));
		return returnMap;

    }	
	
	/**
	 * 연수신청결재를 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int deleteCount = 0;
		 String strDocuId = "";
		 Map rowVo = null;
		 
		List dsTM_APPRXH_Del = (List) saveData.get("dsTM_APPRXH_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_APPRXH_Del.size(); i++) {

        	rowVo = (Map) dsTM_APPRXH_Del.get(i);
        	strDocuId = rowVo.get("DOCU_IDXX").toString();
        	
			deleteCount += wFMG0010Dao.processDELETE00(rowVo);
			
			switch(strDocuId){
				case "KHR143":
					wFMG0020Dao.processDELETE01(rowVo);
					break;
				default:
					break;
			}		

		}
        
		return deleteCount;

	}
}
