/**
 * core.erp.hrm.service.impl.HRML0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRML0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	HRML0010ServiceImpl - 근로(연봉)계약대상자 등록 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	kd
 * @since	2016.09.06
 * @version	1.0
 * @see		{@link HRML0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06 	kd		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRML0010Service")
public class HRML0010ServiceImpl extends EgovAbstractServiceImpl implements HRML0010Service {

	/**
	 * 호봉표관리 DAO class inject.
	 */
	@Resource(name = "HRML0010Dao")
	private HRML0010Dao dao;

	/**
	 * 근로(연봉)계약대상자 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근로(연봉)계약대상자 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTR_MONEPL", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 근로(연봉)계약대상자 정보를 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외 
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		Map rowVo = null;
		int rowType = 0;

		List dsTR_MONEPL     = (List) saveData.get("dsTR_MONEPL");  
		List dsTR_MONEPL_Del = (List) saveData.get("dsTR_MONEPL_DELETE"); 
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTR_MONEPL_Del.size(); i++) {
        	rowVo = (Map) dsTR_MONEPL_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;
		}
        //DataSet의 Row Count만큼 돌면서 Insert Or Update 
		for (int i = 0; i < dsTR_MONEPL.size(); i++) {
			rowVo = (Map) dsTR_MONEPL.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
							
				dao.processSAVE00(rowVo);
				
			}else if (rowType == 2) {
				dao.processUPDATE00(rowVo);
			}
			
			//계약확인 체크된 경우, 기본급 테이블 INSERT(기 계약확인 체크된 데이터는 화면에서 막고 여길 안탄다는 조건) 
			if("1".equals(rowVo.get("CNCF_YSNO"))){
				dao.processSAVE01(rowVo);
			}
			
			iTotCnt++;
		}
		return iTotCnt;
	}
}
