/**
 * core.erp.tmm.service.impl.FAME0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAME0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAME0010ServiceImpl - 전표일마감 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 * @see		{@link FAME0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAME0010Service")
public class FAME0010ServiceImpl extends EgovAbstractServiceImpl implements FAME0010Service {

	/**
	 * 전표일마감 관리 DAO class inject.
	 */
	@Resource(name = "FAME0010Dao")
	private FAME0010Dao dao;

	/**
	 * 전표일마감 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전표일마감 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MAGAMX", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 전표일마감을  수정 한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTA_MAGAMX     = (List) saveData.get("dsTA_MAGAMX");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_MAGAMX.size(); i++) {

			rowVo = (Map) dsTA_MAGAMX.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			//Merge into 적용	
			if (rowType == 1) {
			
				dao.processUPDATE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return updateCount;

	}
}
