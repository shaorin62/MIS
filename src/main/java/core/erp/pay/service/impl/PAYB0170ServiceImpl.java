/**
 * core.erp.pay.service.impl.PAYB0170ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.pay.service.PAYB0170Service;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0170ServiceImpl - 급여처리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.27
 * @version	1.0
 * @see		{@link PAYB0170Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.27	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0170Service")
public class PAYB0170ServiceImpl extends EgovAbstractServiceImpl implements PAYB0170Service {

	/**
	 * 급여처리 DAO class inject.
	 */
	@Resource(name = "PAYB0170Dao")
	private PAYB0170Dao dao;

	/**
	 * 급여 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMMAST", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 급여상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여상세 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMDETL_A", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	/**
	 * 급여처리 공제정보을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 급여처리 공제정보 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMDETL_D", dao.processSEARCH02(searchVo));
		return returnMap;
	}

	/**
	 * 인사변동사항을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 인사변동사항 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMDCAL", dao.processSEARCH03(searchVo));
		return returnMap;
	}

	/**
	 * 급여대상자를 생성한다.(일할)
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 급여처리 마스터
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked", "unused" })
	public Object processPROC00(Map saveData) throws Exception{
		int iTotCnt = 0;

		Map rowVo = new HashMap();
		int rowType = 0;

		String sPAYX_DATE     = (String) saveData.get("PAYX_DATE");
		String sWAGE_CODE     = (String) saveData.get("WAGE_CODE");
		String sSAVE_TYPE     = (String) saveData.get("SAVE_TYPE");
		String sUpdtUsid     = (String) saveData.get("UPDT_USID");

		rowVo.put("PAYX_DATE", sPAYX_DATE);
		rowVo.put("WAGE_CODE", sWAGE_CODE);
		rowVo.put("SAVE_TYPE", sSAVE_TYPE);
		rowVo.put("UPDT_USID", sUpdtUsid);

		dao.processPROC00(rowVo);

		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMMAST", dao.processSEARCH00(rowVo));
		return returnMap;

	}


	/**
	 * 급여를 처리한다.(급여처리, 삭제)
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 급여처리 마스터
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unused", "unchecked" })
	public Object processPROC01(Map saveData) throws Exception{
		int iTotCnt = 0;

		Map rowVo = new HashMap();
		Map rowVo_EMPL = null;
		int rowType = 0;

		List<Map> dsPY_PMMAST     = (List) saveData.get("dsPY_PMMAST");

		String sPAYX_DATE     = (String) saveData.get("PAYX_DATE");
		String sWAGE_CODE     = (String) saveData.get("WAGE_CODE");
		String sWAGP_CODE     = (String) saveData.get("WAGP_CODE");
		String sSAVE_TYPE     = (String) saveData.get("SAVE_TYPE");
		String sUpdtUsid     = (String) saveData.get("UPDT_USID");

		rowVo.put("PAYX_DATE", sPAYX_DATE);
		rowVo.put("WAGE_CODE", sWAGE_CODE);
		rowVo.put("WAGP_CODE", sWAGP_CODE);
		rowVo.put("SAVE_TYPE", sSAVE_TYPE);
		rowVo.put("UPDT_USID", sUpdtUsid);
		//급여일지 확인
		dao.processSEARCH04(rowVo);

		DataSet dsPY_PMDIRY = (DataSet) dao.processSEARCH05(rowVo);
		String sPAYX_CONT = DataSetUtil.getColumn(dsPY_PMDIRY, 0, "PAYX_CONT").toString();
		String sWAGE_YMTH = DataSetUtil.getColumn(dsPY_PMDIRY, 0, "WAGE_YMTH").toString();
		String sRTBG_YMTH = DataSetUtil.getColumn(dsPY_PMDIRY, 0, "RTBG_YMTH").toString();
		String sRTED_YMTH = DataSetUtil.getColumn(dsPY_PMDIRY, 0, "RTED_YMTH").toString();

		//급여처리를 전체단위로 할 경우
		//SAVE_TYPE 이 1인경우(급여처리)

		int iPAYX_CONT = Integer.parseInt(sPAYX_CONT);

		if (sSAVE_TYPE.equals("1") && iPAYX_CONT == dsPY_PMMAST.size()) {

			rowVo.put("SAVE_TYPE", "2");
			rowVo.put("WAGE_YMTH", sWAGE_YMTH);
			rowVo.put("RTBG_YMTH", sRTBG_YMTH);
			rowVo.put("RTED_YMTH", sRTED_YMTH);
			dao.processPROC01(rowVo);

		//급여처리를 전체단위로 할 경우
		//SAVE_TYPE 이 -1인경우(급여삭제)
		}else if (sSAVE_TYPE.equals("-1") && iPAYX_CONT == dsPY_PMMAST.size()) {

			rowVo.put("SAVE_TYPE", "-2");
			rowVo.put("WAGE_YMTH", sWAGE_YMTH);
			rowVo.put("RTBG_YMTH", sRTBG_YMTH);
			rowVo.put("RTED_YMTH", sRTED_YMTH);
			dao.processPROC01(rowVo);

		//급여처리를 개인단위로 할경우
		}else{

			//체크한사람만 급여처리
			for (int i = 0; i < dsPY_PMMAST.size(); i++) {

				rowVo_EMPL = dsPY_PMMAST.get(i);

				rowVo_EMPL.put("PAYX_DATE", sPAYX_DATE);
				rowVo_EMPL.put("WAGE_CODE", sWAGE_CODE);
				rowVo_EMPL.put("SAVE_TYPE", sSAVE_TYPE);
				rowVo_EMPL.put("WAGE_YMTH", sWAGE_YMTH);
				rowVo_EMPL.put("RTBG_YMTH", sRTBG_YMTH);
				rowVo_EMPL.put("RTED_YMTH", sRTED_YMTH);

				dao.processPROC01(rowVo_EMPL);

				iTotCnt++;

			}
		}

		rowVo.put("PAYX_DATE", sPAYX_DATE);
		rowVo.put("WAGE_CODE", sWAGE_CODE);
		rowVo.put("WAGP_CODE", sWAGP_CODE);
		rowVo.put("SAVE_TYPE", sSAVE_TYPE);
		rowVo.put("UPDT_USID", sUpdtUsid);
		rowVo.put("WAGE_YMTH", sWAGE_YMTH);
		rowVo.put("RTBG_YMTH", sRTBG_YMTH);
		rowVo.put("RTED_YMTH", sRTED_YMTH);
		dao.processPROC02(rowVo);

		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMMAST", dao.processSEARCH00(rowVo));
		return returnMap;

	}


	/**
	 * 급여대상자를 삭제한다.(일할)
	 * @param param - 삭제할 정보가 담긴 Map 객체
	 * @return 급여처리 마스터
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked", "unused" })
	public Object processPROC02(Map saveData) throws Exception{
		int iTotCnt = 0;

		Map rowVo = new HashMap();
		int rowType = 0;

		List<Map> dsPY_PMMAST = (List) saveData.get("dsPY_PMMAST");

		String sPAYX_DATE     = (String) saveData.get("PAYX_DATE");
		String sWAGE_CODE     = (String) saveData.get("WAGE_CODE");
		String sUpdtUsid      = (String) saveData.get("UPDT_USID");

		//체크한사람만 급여처리
		for (int i = 0; i < dsPY_PMMAST.size(); i++) {
			
			rowVo = dsPY_PMMAST.get(i);
	
			rowVo.put("PAYX_DATE", sPAYX_DATE);
			rowVo.put("WAGE_CODE", sWAGE_CODE);
			rowVo.put("UPDT_USID", sUpdtUsid);

			dao.processPROC03(rowVo);
			
			iTotCnt++;
		}

		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMMAST", dao.processSEARCH00(rowVo));
		return returnMap;

	}

}
