/**
 * core.erp.hrm.service.impl.HATC0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hat.service.HATC0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATC0010ServiceImpl - 근태 신청 및 조회 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	이창운
 * @since	2016.09.05
 * @version	1.0
 * @see		{@link HATC0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	이창운		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATC0010Service")
public class HATC0010ServiceImpl extends EgovAbstractServiceImpl implements HATC0010Service {

	/**
	 * 근태신청 내역조회 DAO class inject.
	 */
	@Resource(name = "HATC0010Dao")
	private HATC0010Dao dao;
	
	@Resource(name = "HATC0020Dao")
	private HATC0020Dao dao0020;
	
	@Resource(name = "HATC0030Dao")
	private HATC0030Dao dao0030;
	
	@Resource(name = "HATC0040Dao")
	private HATC0040Dao dao0040;

	/**
	 * 근태신청 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_APPRXH", dao.processSEARCH00(searchVo));
		return returnMap;

    }		
	
	/**
	 * HATC0010 저장,수정 또는 삭제한다.
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
        	
			deleteCount += dao.processDELETE00(rowVo);
			
			switch(strDocuId){
				/* 시간외근무신청 */
				case "KHR110":
						dao0020.processDELETE01(rowVo);
					break;
					/* 휴가신청 */
				case "KHR111":
					dao0030.processDELETE01(rowVo);
					dao0030.processDELETE02(rowVo);
				break;
				/* 휴가취소신청 */
				case "KHR112":
					dao0040.processDELETE01(rowVo);
				break;
				default:
					break;
			}		

		}
        
		return deleteCount;

	}
}
