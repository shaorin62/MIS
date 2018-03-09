/**
 * core.erp.wfm.service.impl.WFMA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.wfm.service.WFMA0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMA0020ServiceImpl - 경조금 신청 등록 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	정한균
 * @since	2016.09.09
 * @version	1.0
 * @see		{@link WFMA0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	정한균			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMA0020Service")
public class WFMA0020ServiceImpl extends EgovAbstractServiceImpl implements WFMA0020Service {

	/**
	 * 경조금 신청 등록 DAO class inject.
	 */
	@Resource(name = "WFMA0020Dao")
	private WFMA0020Dao dao;

	/**
	 * 경조금 신청 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 경조금 신청 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_COCOAP", dao.processSEARCH00(searchVo));
		returnMap.put("dsTM_APPRXH", dao.processSEARCH02(searchVo));
		return returnMap;

    }

	/**
	 * WFMA0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sAPPR_SEQN = "";
		 
		List dsTM_APPRXH     	= (List) saveData.get("dsTM_APPRXH");
		List dsTM_APPRXH_Del 	= (List) saveData.get("dsTM_APPRXH_DELETE");
		List dsCW_COCOAP     = (List) saveData.get("dsCW_COCOAP");  
		List dsCW_COCOAP_DEL = (List) saveData.get("dsCW_COCOAP_DELETE");

		if(dsTM_APPRXH.size() > 0){
			 rowVo = (Map) dsTM_APPRXH.get(0);
		}

		//DataSet의 Delete Row Count만큼 돌면서 경조금 데이터와 결재헤더 모두 Delete
        for (int idx = 0; idx < dsCW_COCOAP_DEL.size(); idx++) {
        	rowVo = (Map) dsCW_COCOAP_DEL.get(idx);
			deleteCount += dao.processDELETE00(rowVo);
			deleteCount += dao.processDELETE01(rowVo);
		}
        
      //DataSet의 Row Count만큼 돌면서 Insert Or Update
  		for (int idx = 0; idx < dsCW_COCOAP.size(); idx++) {

  			rowVo = (Map) dsCW_COCOAP.get(idx);
  			rowType = (Integer) rowVo.get("ROW_TYPE");

  			if (rowType == 1) {
  				/*신규 문서번호 가져오기*/
  				DataSet returnDataSet = (DataSet)dao.processSEARCH01(rowVo);		 
  				rowVo.put("APPR_SEQN", returnDataSet.getString(0, "APPR_SEQN"));
  				
  				dao.processSAVE00(rowVo);
  				dao.processSAVE01(rowVo);
  				updateCount++;

  			} else if (rowType == 2) {

  				updateCount += dao.processUPDATE00(rowVo);

  			}
  		}
        
		return deleteCount + updateCount;

	}
}
