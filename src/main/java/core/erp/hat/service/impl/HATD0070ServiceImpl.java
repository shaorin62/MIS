/**
 * core.erp.hrm.service.impl.HATD0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hat.service.HATD0070Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATD0070ServiceImpl - 자격취득현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.04
 * @version	1.0
 * @see		{@link HATD0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.04	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATD0070Service")
public class HATD0070ServiceImpl extends EgovAbstractServiceImpl implements HATD0070Service {

	/**
	 * 자격취득현황 DAO class inject.
	 */
	@Resource(name = "HATD0070Dao")
	private HATD0070Dao dao;

	/**
	 * 자격사항 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 자격사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ANNUXD", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * PAYA0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_GBHOBO     = (List) saveData.get("dsAT_ANNUXD");  
		List dsPY_GBHOBO_Del = (List) saveData.get("dsAT_ANNUXD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_GBHOBO_Del.size(); i++) {
        	
        	System.out.println("################################################### DELETE");

        	rowVo = (Map) dsPY_GBHOBO_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_GBHOBO.size(); i++) {
			
			System.out.println("################################################### SAVE");

			rowVo = (Map) dsPY_GBHOBO.get(i);
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
