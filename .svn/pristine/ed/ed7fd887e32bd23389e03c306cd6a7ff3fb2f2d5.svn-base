/**
 * core.erp.hrm.service.impl.HATC0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.impl.FAMA0100ServiceImpl;
import core.erp.hat.service.HATC0070Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATC0070ServiceImpl - 외출자관리 및 조회 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김희정
 * @since	2016.09.26
 * @version	1.0
 * @see		{@link HATC0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	김희정		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATC0070Service")
public class HATC0070ServiceImpl extends EgovAbstractServiceImpl implements HATC0070Service {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(HATC0070ServiceImpl.class);
	
	/**
	 * 외출자관리 내역조회 DAO class inject.
	 */
	@Resource(name = "HATC0070Dao")
	private HATC0070Dao dao;

	/**
	 * 외출자관리 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 외출자관리 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_GOOUTX", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 외출자관리 내역을  저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE00(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sGOOT_SEQN="";

		/**
		 * Row Type 1 : Insert 2 : Update 3 : Delete
		 */

		List dsAT_GOOUTX = (List) saveData.get("dsAT_GOOUTX");
		List dsAT_GOOUTX_Del = (List) saveData.get("dsAT_GOOUTX_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsAT_GOOUTX_Del.size(); i++) {

			rowVo = (Map) dsAT_GOOUTX_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);
			sGOOT_SEQN=null;

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsAT_GOOUTX.size(); i++) {

			rowVo = (Map) dsAT_GOOUTX.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				sGOOT_SEQN = (String)dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);
				sGOOT_SEQN= rowVo.get("GOOT_SEQN").toString();
				System.out.println("sGOOT_SEQN:"+sGOOT_SEQN);
			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return sGOOT_SEQN;
	}
}
