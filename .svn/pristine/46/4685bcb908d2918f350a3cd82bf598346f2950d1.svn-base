/**
 * core.erp.wfm.service.impl.WFMB0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
 
import core.erp.wfm.service.WFMB0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMB0020ServiceImpl - 학자금 신청 및 조회 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	전종원
 * @since	2016.09.12
 * @version	1.0
 * @see		{@link WFMB0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.12	전종원		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMB0020Service")
public class WFMB0020ServiceImpl extends EgovAbstractServiceImpl implements WFMB0020Service {

	/**
	 * 학자금신청 내역조회 DAO class inject.
	 */
	@Resource(name = "WFMB0020Dao")
	private WFMB0020Dao dao;
	
	@Resource(name = "WFMB0050Dao")
	private WFMB0050Dao dao0050;

	/**
	 * 학자금신청 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 학자금신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_APPRXH", dao.processSEARCH00(searchVo));
		return returnMap;

    }	
	
	/**
	 * WFMB0020 저장,수정 또는 삭제한다.
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
				case "KHR110":
						dao0050.processDELETE01(rowVo);
					break;
				default:
					break;
			}		

		}
        
		return deleteCount;

	}
}
