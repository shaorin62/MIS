/**
 * core.erp.tmm.service.impl.FAME0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAME0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAME0020ServiceImpl - 전표재집계및이월 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 * @see		{@link FAME0020Service}
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

@Service("FAME0020Service")
public class FAME0020ServiceImpl extends EgovAbstractServiceImpl implements FAME0020Service {

	/**
	 * 전표재집계및이월 관리 DAO class inject.
	 */
	@Resource(name = "FAME0020Dao")
	private FAME0020Dao dao;

	/**
	 * 전표재집계및이월 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전표재집계및이월 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MAMNTM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * FAME0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception{
		
		dao.processPROC00(searchVo);
		
				
	}
	
	/**
	 * FAME0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC01(Map saveData) throws Exception{
		 
		 Map rowVo = null;

		List dsTA_MAMNTM     = (List) saveData.get("dsTA_MAMNTM");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_MAMNTM.size(); i++) {
			rowVo = (Map) dsTA_MAMNTM.get(i);
			dao.processPROC01(rowVo);
		}
		
	}
	
	/**
	 * FAME0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC02(Map saveData) throws Exception{
		 
		 Map rowVo = null;

		List dsTA_MAMNTM     = (List) saveData.get("dsTA_MAMNTM");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_MAMNTM.size(); i++) {

			rowVo = (Map) dsTA_MAMNTM.get(i);
			dao.processPROC02(rowVo);
		}
		
	}	

}
