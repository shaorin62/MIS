/**
 * core.erp.tmm.service.impl.TMMC0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMC0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMC0010ServiceImpl - 사업장관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김춘호
 * @since	2016.07.06
 * @version	1.0
 * @see		{@link TMMC0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.06	김춘호		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMC0010Service")
public class TMMC0010ServiceImpl extends EgovAbstractServiceImpl implements TMMC0010Service {

	/**
	 * 사업장관리 DAO class inject.
	 */
	@Resource(name = "TMMC0010Dao")
	private TMMC0010Dao dao;

	/**
	 * 사업장 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 사업장 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_BRCHXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * TMMC0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsTM_BRCHXM     = (List) saveData.get("dsTM_BRCHXM");  
		List dsTM_BRCHXM_Del = (List) saveData.get("dsTM_BRCHXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_BRCHXM_Del.size(); i++) {

        	rowVo = (Map) dsTM_BRCHXM_Del.get(i);
			dao.processDELETE00(rowVo);
			
			iTotCnt += 1;
			
		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_BRCHXM.size(); i++) {

			rowVo = (Map) dsTM_BRCHXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				
				//신고사업장 코드가 없는 경우 사업장 코드를 넣어줌.
				/*
				if(rowVo.get("DCLR_OFFC").toString().trim().length()<1) {
					rowVo.put("DCLR_OFFC", rowVo.get("ENFC_CODE"));							
				}*/
				
				System.out.println(">>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<");
				System.out.println(rowVo);

				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				
				//데이터 건수 구하기
				Map countMap = (Map)dao.processSEARCH01(rowVo);
				
				int cnt = Integer.parseInt(countMap.get("ROWCNT").toString()); 
				
				if(cnt > 0) {
				
					dao.processUPDATE00(rowVo);
				
				} else {
					
					dao.processSAVE00(rowVo);
					
				}

			}
			
			iTotCnt += 1;
		}
		
		return iTotCnt;

	}
}
