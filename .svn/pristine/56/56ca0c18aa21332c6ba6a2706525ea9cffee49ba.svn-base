/**
 * core.erp.mcm.service.impl.MCMA0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mcm.service.MCMA0070Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MCMA0070ServiceImpl - 브랜드관리(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.06
 * @version	1.0
 * @see		{@link MCMA0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.07	조민희		Initial Created.
 * 2016.10.06	최제현		Check and Revise.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MCMA0070Service")
public class MCMA0070ServiceImpl extends EgovAbstractServiceImpl implements MCMA0070Service {

	/**
	 * 브랜드관리(신규) DAO class inject.
	 */
	@Resource(name = "MCMA0070Dao")
	private MCMA0070Dao dao;
	

	/**
	 * 브랜드 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 광고주 팀 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_BRNDXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 광고주 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * MCMA0070 브랜드 저장,수정 및 삭제한다.
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

		List dsMD_BRNDXM     = (List) saveData.get("dsMD_BRNDXM");  
		List dsMD_BRNDXM_Del = (List) saveData.get("dsMD_BRNDXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_BRNDXM_Del.size(); i++) {

        	rowVo = (Map) dsMD_BRNDXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_BRNDXM.size(); i++) {

			rowVo = (Map) dsMD_BRNDXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			
			if (rowType == 1) {
			
				String NewBRND_CODE = dao.processNEW_BRND_CODE(rowVo);
				rowVo.put("BRND_CODE", NewBRND_CODE);
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE00(rowVo);

			}
			
			int COUNT_BRND_NAME = dao.GET_BRND_NAME(rowVo);
			int COUNT_KBNT_CODE = dao.GET_KBNT_CODE(rowVo);
			int COUNT_SBSX_CODE = dao.GET_SBSX_CODE(rowVo);
			if(COUNT_BRND_NAME > 1){
				throw new Exception("브랜드 명이 중복됩니다. 이전의 브랜드 명을 수정 후 새로운 브랜드를 입력해주세요.");
			}else if(COUNT_KBNT_CODE > 1){
				throw new Exception("코바넷 코드가 중복됩니다. 코바넷 코드를 확인하세요.");
			}else if(COUNT_SBSX_CODE > 1){
				throw new Exception("미크 코드가 중복됩니다. 미크 코드를 확인하세요.");
			}
		
		}
		
		return deleteCount + updateCount;

	}
}
