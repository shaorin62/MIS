package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.pay.service.PAYF0110Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0110ServiceImpl - 퇴직연금기준임금 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	김준수
 * @since	2016. 9. 8.
 * @version	1.0
 * @see		{@link PAYF0110Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 8.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0110Service")
public class PAYF0110ServiceImpl extends EgovAbstractServiceImpl implements PAYF0110Service {

	/**
	 * 퇴직연금사업자 DAO class inject.
	 */
	@Resource(name = "PAYF0110Dao")
	private PAYF0110Dao dao;

	/**
	 * 퇴직연금납입금 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPSDC", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 퇴직연금납입금 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTDCPY", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 퇴직연금납입금 목록 출력.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPSDC_PRINT", dao.processPRINT00(searchVo));
		returnMap.put("dsPY_RTDCPY_PRINT", dao.processPRINT01(searchVo));
		return returnMap;

    }

	/**
	 * 퇴직연금납입금 목록을 수정 또는 삭제한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int processSAVE00(Map searchVo, Map saveData) throws Exception{

		int iTotCnt = 0;
		Map rowVo = null;
		int rowType = 0;

		// 가입기관 코드 가져오기.
		String REAY_JOCD = (String) searchVo.get("REAY_JOCD");
		List dsPY_RTPSDC = (List) saveData.get("dsPY_RTPSDC");
		List dsPY_RTDCPY = (List) saveData.get("dsPY_RTDCPY");

        //DataSet의 Row Count만큼 돌면서 Update
		for (int i = 0; i < dsPY_RTPSDC.size(); i++) {
			rowVo = (Map) dsPY_RTPSDC.get(i);
			rowVo.put("REAY_JOCD", REAY_JOCD);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if ( rowType == 2 ) {
				dao.processUPDATE00(rowVo);
			}

			iTotCnt++;

		}

		//DataSet의 Row Count만큼 돌면서 Update
		for (int i = 0; i < dsPY_RTDCPY.size(); i++) {
			rowVo = (Map) dsPY_RTDCPY.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if ( rowType == 2 ) {
				dao.processUPDATE01(rowVo);
			}

			iTotCnt++;

		}

		return iTotCnt;

	}

	/**
	 * 퇴직연금납입금 목록을 저장,수정 또는 삭제한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes" })
	public Object processPROC00(Map searchVo) throws Exception {
		return dao.processPROC00(searchVo);

    }

	/**
	 * 전자결재 연동자료 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked", "unused" })
	public String processSAVE99(Map saveData, Map searchVo) throws Exception{

		int saveCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sAPPR_SEQN 	= "";

		List dsPY_RTPSDC	= (List) saveData.get("dsPY_RTPSDC");

		if (dsPY_RTPSDC.size() > 0) {
			rowVo = (Map) dsPY_RTPSDC.get(0);

			sAPPR_SEQN = (String) rowVo.get("APPR_SEQN");

			//전자결재 문서번호 존재유무에 따라 결재일련번호 채번
			if (sAPPR_SEQN.equals(null) || sAPPR_SEQN.length() == 0) {

				DataSet returnDataSet = (DataSet)dao.processSEARCH99(rowVo);	//결재일련번호 채번 반환
				sAPPR_SEQN = returnDataSet.getString(0, "APPR_SEQN");

				rowVo.put("APPR_SEQN", sAPPR_SEQN);
				rowVo.put("GWAP_EMPL", searchVo.get("GWAP_EMPL").toString());
				rowVo.put("GWAP_DEPT", searchVo.get("GWAP_DEPT").toString());
				rowVo.put("GWAP_SUBJ", searchVo.get("GWAP_SUBJ").toString());

				dao.processSAVE99(rowVo); //전자결재 연동자료 저장

			}
			saveCount++;

		}

		return sAPPR_SEQN;

	}
}
