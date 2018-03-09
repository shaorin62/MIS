/**
 * core.erp.tmm.service.impl.FSMB0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.math.*;
import java.util.List;
import java.util.Map;

import core.erp.source.util.ConvertUtil;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.impl.SpSlipMasterCheckDao;
import core.erp.com.service.impl.SpSlipNumberDao;
import core.erp.fsm.service.FSMB0040Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMB0040ServiceImpl - 메시지 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	ㅋㅋㅋ
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link FSMB0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	ㅋㅋㅋ		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMB0040Service")
public class FSMB0040ServiceImpl extends EgovAbstractServiceImpl implements FSMB0040Service {

	private static final Logger logger = LoggerFactory.getLogger(FSMB0040ServiceImpl.class);
	/**
	 * 메시지 관리 DAO class inject.
	 */
	@Resource(name = "FSMB0040Dao")
	private FSMB0040Dao dao;

	@Resource(name="spSlipNumberDao")
	private SpSlipNumberDao spSlipNumberDao;

	@Resource(name="spSlipMasterCheckDao")
	private SpSlipMasterCheckDao spSlipMasterCheckDao;	

	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHXM", dao.processSEARCH00(searchVo));
		return returnMap;

	}



	/**
	 * FSMB0040 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processSAVE00(Map saveData) throws Exception{

		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASCHXM     	= (List) saveData.get("dsFS_ASCHXM");  
		List dsFS_ASCHXM_del    = (List) saveData.get("dsFS_ASCHXM_DELETE");  

		for (int i = 0; i < dsFS_ASCHXM_del.size(); i++) {

			rowVo = (Map) dsFS_ASCHXM_del.get(i);

			BigDecimal SEQN_NUMB = ConvertUtil.getBigDecimal(rowVo.get("SEQN_NUMB"));
			rowVo.put("SEQN_NUMB", SEQN_NUMB);			

			dao.processDELETE00(rowVo);

		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASCHXM.size(); i++) {

			rowVo = (Map) dsFS_ASCHXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE00(rowVo);

			}

		}

	}

	/**
	 * FSMB0040 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processSAVE01(Map saveData) throws Exception{

		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASCHXL     = (List) saveData.get("dsFS_ASCHXL");  

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASCHXL.size(); i++) {

			rowVo = (Map) dsFS_ASCHXL.get(i);

			dao.processSAVE01(rowVo);
		}

	}

	/**
	 * FSMB0040 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processAPPL00(Map saveData) throws Exception{

		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASCHXM     = (List) saveData.get("dsFS_ASCHXM");  

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASCHXM.size(); i++) {

			rowVo = (Map) dsFS_ASCHXM.get(i);

			dao.processAPPL00(rowVo);
		}

	}		

	/**
	 * FSMB0040 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processCANC00(Map saveData) throws Exception{

		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASCHXM     = (List) saveData.get("dsFS_ASCHXM");  

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASCHXM.size(); i++) {

			rowVo = (Map) dsFS_ASCHXM.get(i);

			dao.processCANC00(rowVo);


		}

	}		

	/**
	 * FSMB0040 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map saveData) throws Exception{

		//String ACCT_GUB1 = (String) saveData.get("ACCT_GUB1");	      	//회계단위
		//String ASST_NUMB = (String) saveData.get("ASST_NUMB");	      	//자산번호
		//String SLIP_DATE = (String) saveData.get("CHNG_DATE");	      	//자산이동일자

		//HashMap slipMap = new HashMap();
		//slipMap.put("ACCT_GUB1", ACCT_GUB1);	
		//slipMap.put("SLIP_DATE", SLIP_DATE);
		//String slip_number = spSlipNumberDao.getSlipNumber(slipMap);

		//saveData.put("SLIP_NUMB", slip_number);
		//saveData.put("SLIP_DATE", SLIP_DATE);
		//saveData.put("ACCT_GUB1", ACCT_GUB1);		


		dao.processPROC00(saveData);	

		/************************************
		 *     전표 디테일(차,대변) 생성     *
		 ************************************/	
		//int slip_line = 0;
		//String SLIP_LINE  = "";								//전표순번 int->String	
		//Map rowVo = null;

		//List dsFS_ASCHXM_SLIP     = (List) saveData.get("dsFS_ASCHXM_SLIP");  

		//for (int i = 0; i < dsFS_ASCHXM_SLIP.size(); i++) {		

			//rowVo = (Map) dsFS_ASCHXM_SLIP.get(i);

			//BigDecimal SEQN_NUMB = ConvertUtil.getBigDecimal(rowVo.get("SEQN_NUMB"));		 

			//rowVo.put("SLIP_NUMB", slip_number);
			//rowVo.put("SLIP_DATE", SLIP_DATE);
			//rowVo.put("SEQN_NUMB", SEQN_NUMB);

			// 1)차변_관리계정과목 변경후 부서
			//slip_line++;				
			//SLIP_LINE = ConvertUtil.leftPad(String.valueOf(slip_line), 4, "0");
			//rowVo.put("SLIP_LINE", SLIP_LINE);			//전표 자동순번

			//dao.processPROC01(rowVo);

			// 2) 대변_취득가기말잔액
			//slip_line++;				
			//SLIP_LINE = ConvertUtil.leftPad(String.valueOf(slip_line), 4, "0");
			//rowVo.put("SLIP_LINE", SLIP_LINE);			//전표 자동순번

			//dao.processPROC02(rowVo);

			// 3)차변_관리계정과목 변경후 부서 감가상각누계액
			//slip_line++;
			//SLIP_LINE = ConvertUtil.leftPad(String.valueOf(slip_line), 4, "0");
			//rowVo.put("SLIP_LINE", SLIP_LINE);			//전표 자동순번

			//dao.processPROC03(rowVo);

			// 4)대변_관리계정과목 변경전 부서 감가상각누계액
			//slip_line++;
			//SLIP_LINE = ConvertUtil.leftPad(String.valueOf(slip_line), 4, "0");
			//rowVo.put("SLIP_LINE", SLIP_LINE);			//전표 자동순번

			//dao.processPROC04(rowVo);

		//}		

	}

}
