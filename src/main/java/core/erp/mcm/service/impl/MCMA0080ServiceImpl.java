/**
 * core.erp.mcm.service.impl.MCMA0080ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mcm.service.MCMA0080Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MCMA0080ServiceImpl - 인쇄사이즈관리(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.07
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	조민희		Initial Created.
 * 2016.10.07	최제현		Check and Revise.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MCMA0080Service")
public class MCMA0080ServiceImpl extends EgovAbstractServiceImpl implements MCMA0080Service {

	/**
	 * 인쇄사이즈관리(신규) DAO class inject.
	 */
	@Resource(name = "MCMA0080Dao")
	private MCMA0080Dao dao;
	
	/**
	 * 인쇄사이즈관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인쇄사이즈관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_NPAPXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * MCMA0080 인쇄사이즈관리 저장,수정 및 삭제한다.
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

		List dsMD_NPAPXM     = (List) saveData.get("dsMD_NPAPXM");  
		List dsMD_NPAPXM_Del = (List) saveData.get("dsMD_NPAPXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_NPAPXM_Del.size(); i++) {

        	rowVo = (Map) dsMD_NPAPXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_NPAPXM.size(); i++) {

			rowVo = (Map) dsMD_NPAPXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				String NewSEQX_FILD = dao.processNEW_SEQX_FILD(rowVo);
				rowVo.put("SEQX_FILD", NewSEQX_FILD);	
				
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}

}
