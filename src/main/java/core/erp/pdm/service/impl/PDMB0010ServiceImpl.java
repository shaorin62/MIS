/**
 * core.erp.tmm.service.impl.PDMB0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.pdm.service.PDMB0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PDMB0010Controller - 제작업종분류 관리
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.09
 * @version	1.0
 * @see		{@link PDMB0010}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PDMB0010Service")
public class PDMB0010ServiceImpl extends EgovAbstractServiceImpl implements PDMB0010Service {

	/**
	 * 제작업종분류관리(신규) DAO class inject.
	 */
	@Resource(name = "PDMB0010Dao")
	private PDMB0010Dao dao;

	/**
	 * 제작의뢰 등록건을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();

		returnMap.put("dsPD_JOBNXM", dao.processSEARCH00(searchVo));
		returnMap.put("dsTM_APPRXH", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * 콤보 데이터 셋을 가져오기위한 작업
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_COMBO", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작의뢰 외주업체 실행예산을 가져온다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		DataSet ds = (DataSet)dao.processSEARCH30(searchVo);
		System.out.println("============================>"+ds.getRowCount());
		returnMap.put("dsPD_JOBOXM", dao.processSEARCH30(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작의뢰 실적 분배율 팝업 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_JOBRXM", dao.processSEARCH10(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작의뢰 외주업체 실행예산등록
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH20(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_JOBOXM", dao.processSEARCH20(searchVo));
		return returnMap;

    }
	
	
	
	
	/**
	 * PDMB0010 제작의뢰 내역을 저장 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData, Map saveVO) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTM_APPRXH     	= (List) saveData.get("dsTM_APPRXH");
		List dsTM_APPRXH_Del 	= (List) saveData.get("dsTM_APPRXH_DELETE");
			
		List dsPD_JOBNXM     = (List) saveData.get("dsPD_JOBNXM");  
		List dsPD_JOBNXM_Del = (List) saveData.get("dsPD_JOBNXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_JOBNXM_Del.size(); i++) {

        	rowVo = (Map) dsPD_JOBNXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);
			deleteCount += dao.processDELETE01(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_JOBNXM.size(); i++) {

			rowVo = (Map) dsPD_JOBNXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			
			if (rowType == 1) {
				
				//제작번호생성
				String JOBN_NUMB = (String) rowVo.get("JOBN_NUMB");
				
				if(JOBN_NUMB == "" || JOBN_NUMB == null){
					
					JOBN_NUMB = dao.getJOBN_NUMB();
					rowVo.put("JOBN_NUMB", JOBN_NUMB );
					
					/*신규 문서번호 가져오기*/
	  				DataSet returnDataSet = (DataSet)dao.processSEARCH03(rowVo);		 
	  				rowVo.put("APPR_SEQN", returnDataSet.getString(0, "APPR_SEQN"));
					
				}
				
				dao.processSAVE00(rowVo);
				dao.processSAVE01(rowVo);
				dao.processSAVE02(saveVO);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
			
		}
		
		return deleteCount + updateCount;
	}
	

	/**
	 * PDMB0010 제작의뢰 실적분배율 을 저장한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE10(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sJOBN_SEQX = "";
		

		List dsPD_JOBRXM     = (List) saveData.get("dsPD_JOBRXM");  
		List dsPD_JOBRXM_Del = (List) saveData.get("dsPD_JOBRXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_JOBRXM_Del.size(); i++) {

        	rowVo = (Map) dsPD_JOBRXM_Del.get(i);
			deleteCount += dao.processDELETE10(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_JOBRXM.size(); i++) {

			rowVo = (Map) dsPD_JOBRXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			
			if (rowType == 1) {
				
				//제작번호생성
				String sSEQX_IDXX = (String) rowVo.get("SEQX_IDXX");
				String sJOBN_NUMB = (String) rowVo.get("JOBN_NUMB");
				sJOBN_SEQX = "";
				
				if(sSEQX_IDXX == "" || sSEQX_IDXX == null){
					
					sSEQX_IDXX = dao.getSEQX_IDXX();
					sJOBN_SEQX = dao.getJOBN_SEQX(sJOBN_NUMB);
					
					rowVo.put("SEQX_IDXX", sSEQX_IDXX );
					rowVo.put("JOBN_SEQX", sJOBN_SEQX );
					
				}
				
				dao.processSAVE10(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE10(rowVo);

			}
			
		}
		
		return deleteCount + updateCount;
	}
	
	

	/**
	 * PDMB0010 제작의뢰 외주업체 실행예산 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE20(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sJOBN_SEQX = "";
		

		List dsPD_JOBOXM     = (List) saveData.get("dsPD_JOBOXM");  
		List dsPD_JOBOXM_Del = (List) saveData.get("dsPD_JOBOXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_JOBOXM_Del.size(); i++) {

        	rowVo = (Map) dsPD_JOBOXM_Del.get(i);
			deleteCount += dao.processDELETE20(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_JOBOXM.size(); i++) {

			rowVo = (Map) dsPD_JOBOXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			
			if (rowType == 1) {
				
				//제작번호생성
				String sSEQX_IDXX = (String) rowVo.get("SEQX_IDXX");
				String sJOBN_NUMB = (String) rowVo.get("JOBN_NUMB");
				sJOBN_SEQX = "";
				
				if(sSEQX_IDXX == "" || sSEQX_IDXX == null){
					
					sSEQX_IDXX = dao.getSEQX_IDXXOUT();
					sJOBN_SEQX = dao.getJOBN_SEQXOUT(sJOBN_NUMB);
					
					rowVo.put("SEQX_IDXX", sSEQX_IDXX );
					rowVo.put("JOBN_SEQX", sJOBN_SEQX );
					
				}
				
				dao.processSAVE20(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE20(rowVo);

			}
			
		}
		
		return deleteCount + updateCount;
	}

	/**
	 * 제작의뢰서 인쇄위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_JOBNXM_RPT", dao.processPRINT00(searchVo));
		return returnMap;
	}
	
	/**
	 * 제작의뢰서 인쇄위한 조회 추가 외주계획 내역 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_JOBOXM_RPT", dao.processPRINT01(searchVo));
		return returnMap;
	}
	
}
