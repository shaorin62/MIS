/**
 * core.erp.tmm.service.impl.FSMB0030P01ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.core.Conventions;
import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMB0030P01Service; 
import core.erp.source.util.ConvertUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <pre>
 *	FSMB0030P01ServiceImpl - 자산 일괄 변동 목록 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMB0030P01Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMB0030P01Service")
public class FSMB0030P01ServiceImpl extends EgovAbstractServiceImpl implements FSMB0030P01Service {


	private static final Logger logger = LoggerFactory.getLogger(FSMB0030P01ServiceImpl.class);
	/**
	 * 자산 일괄 변동 목록 관리 DAO class inject.
	 */
	@Resource(name = "FSMB0030P01Dao")
	private FSMB0030P01Dao dao;

	/**
	 * 자산 일괄 변동 목록 헤더를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 일괄 변동 헤더 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHXM", dao.processSEARCH00(searchVo));
		return returnMap;

	}

	/**
	 * FSMB0030P01 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{

		int insertCount = 0;

		Map rowVo = null;
		Map rowVoH = null;
		int rowType = 0;		
		String ASCH_NUMB ="";				//신규자산대체번호

		// 자산일괄변동번호
		ASCH_NUMB = dao.processSEARCH01(searchVo);
		
		// 자산일괄등록 헤더 저장
		searchVo.put("ASCH_NUMB", ASCH_NUMB);
		dao.processSAVE01(searchVo);

		logger.debug("------- fSMB0026ABDao.processSAVE01 END ------- ");

		//사용자 입력값을 받아 ds에 put
		String ACCT_GUB1	= (String) searchVo.get("ACCT_GUB1");	      	//회계단위
		String CHNG_DATE	= (String) searchVo.get("CHNG_DATE");	      	//변동일자
		String ASCH_GUBN	= (String) searchVo.get("ASCH_GUBN");	      	//변동구분
		String CUST_CODE	= (String) searchVo.get("CUST_CODE");	      	//거래처
		String DESC_REMK	= (String) searchVo.get("DESC_REMK");	      	//적요

		List dsFS_ASCHXM_SAVE     = (List) saveData.get("dsFS_ASCHXM_SAVE");  

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsFS_ASCHXM_SAVE.size(); i++) {

			rowVo = (Map) dsFS_ASCHXM_SAVE.get(i);
			
			rowVo.put("CHNG_DATE", CHNG_DATE);
			rowVo.put("ASCH_GUBN", ASCH_GUBN);
			rowVo.put("CUST_CODE", CUST_CODE);
			rowVo.put("DESC_REMK", DESC_REMK);
			rowVo.put("ASCH_NUMB", ASCH_NUMB);
			
			dao.processSAVE00(rowVo);

			insertCount++;

		}
		logger.debug("------- fSMB0026ABDao  processSAVE00 END ------- ");

		//확정 및 자산마스터 미상각금액변동
		for (int i = 0; i < dsFS_ASCHXM_SAVE.size(); i++) {	
			
			rowVo = (Map) dsFS_ASCHXM_SAVE.get(i);
			 
			rowVo.put("CHNG_DATE", CHNG_DATE);
			rowVo.put("ASCH_GUBN", ASCH_GUBN);
			rowVo.put("CUST_CODE", CUST_CODE);
			rowVo.put("DESC_REMK", DESC_REMK);
			rowVo.put("ASCH_NUMB", ASCH_NUMB);
			
			dao.processPERMIT00(rowVo); 

		} 
		logger.debug("------- fSMB0026ABDao  processPERMIT00 END ------- ");

		return insertCount;

	}

	/**
	 * FSMB0030P01 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{

		int insertCount = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASCHXM_SAVE     = (List) saveData.get("dsFS_ASCHXM_SAVE");  

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsFS_ASCHXM_SAVE.size(); i++) {

			rowVo = (Map) dsFS_ASCHXM_SAVE.get(i);
			dao.processSAVE01(rowVo);

			insertCount++;

		}

		return insertCount;

	}

	/**
	 * FSMB0030P01 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPERMIT00(Map saveData) throws Exception{

		int updateCount = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASCHFM     = (List) saveData.get("dsFS_ASCHFM");  

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsFS_ASCHFM.size(); i++) {

			rowVo = (Map) dsFS_ASCHFM.get(i);
			dao.processPERMIT00(rowVo);

			updateCount++;

		}

		return updateCount;

	}	

}
