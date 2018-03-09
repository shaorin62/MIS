/**
 * core.erp.hrm.service.impl.HATC0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.hat.service.HATC0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATC0030ServiceImpl -휴가신청등록 인터페이스 구현 클래스
 * </pre>
 *
 * @author	이창운
 * @since	2016.09.20
 * @version	1.0
 * @see		{@link HATC0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.20	이창운		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATC0030Service")
public class HATC0030ServiceImpl extends EgovAbstractServiceImpl implements HATC0030Service {

	/**
	 * 근태신청 내역조회 DAO class inject.
	 */
	@Resource(name = "HATC0030Dao")
	private HATC0030Dao dao;
	
	@Resource(name = "HATC0010Dao")
	private HATC0010Dao gwDao;

	/**
	 * 휴가신청등록 헤더 및 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_APPRXH", dao.processSEARCH00(searchVo));
		returnMap.put("dsAT_HDAPXH", dao.processSEARCH01(searchVo));
		returnMap.put("dsAT_HDAPXD", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * 연차내역 및 촉진연차 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ANNUXM", dao.processSEARCH04(searchVo));
		return returnMap;
    }
	
	/**
	 * 휴가신청과거 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_HDAPXD_HIST", dao.processSEARCH03(searchVo));
		return returnMap;
    }
	
	/**
	 * HATC0030 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 문서번호
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE00(Map saveData) throws Exception{
		 
		int updateCount = 0;
		int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sAPPR_SEQN = "";
		
		 List dsTM_APPRXH     	= (List) saveData.get("dsTM_APPRXH");
		 List dsAT_HDAPXH    	= (List) saveData.get("dsAT_HDAPXH");		
		 List dsAT_HDAPXD    	= (List) saveData.get("dsAT_HDAPXD");
		 List dsAT_HDAPXD_Del 	= (List) saveData.get("dsAT_HDAPXD_DELETE");

		 if(dsTM_APPRXH.size() > 0){
			 rowVo = (Map) dsTM_APPRXH.get(0);
			 rowType = (Integer) rowVo.get("ROW_TYPE");
			 
			 if (rowType == 1) {
				 /*신규 문서번호 가져오기*/
				 Map returnMap = new HashMap();		 
				 DataSet returnDataSet = (DataSet)gwDao.processSEARCH01(rowVo);		 
				 returnMap.put("APPR_SEQN", returnDataSet.getString(0, "APPR_SEQN"));
				 
				 sAPPR_SEQN = returnMap.get("APPR_SEQN").toString();
			 }else{
				 
				 sAPPR_SEQN = rowVo.get("APPR_SEQN").toString();
			 }
		 }
		 
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 휴가사용신청 상세내역 삭제
		for (int i = 0; i < dsAT_HDAPXD_Del.size(); i++) {

			rowVo = (Map) dsAT_HDAPXD_Del.get(i);
			deleteCount += dao.processDELETE02(rowVo);
		}
		 
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 결재헤더 저장
		for (int i = 0; i < dsTM_APPRXH.size(); i++) {

			rowVo = (Map) dsTM_APPRXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				/*신규의 경우 채번한 문서번호 사용한다.*/
				rowVo.put("APPR_SEQN", sAPPR_SEQN);		
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += dao.processUPDATE00(rowVo);
			}
		}
		 
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 휴가사용신청 헤더 저장
		for (int i = 0; i < dsAT_HDAPXH.size(); i++) {

			rowVo = (Map) dsAT_HDAPXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				/*신규의 경우 채번한 문서번호 사용한다.*/
				rowVo.put("APPR_SEQN", sAPPR_SEQN);		
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				updateCount += dao.processUPDATE01(rowVo);
			}
		}
		
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 휴가사용신청 내용 저장
		for (int i = 0; i < dsAT_HDAPXD.size(); i++) {

			rowVo = (Map) dsAT_HDAPXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				/*신규의 경우 채번한 문서번호 사용한다.*/
				rowVo.put("APPR_SEQN", sAPPR_SEQN);		
				dao.processSAVE02(rowVo);

			} else if (rowType == 2) {
				updateCount += dao.processUPDATE02(rowVo);
			}
		}	
		
		return sAPPR_SEQN;
	}
	
	/**
	 * 월근태 마감여부를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 월근태 마감여부를 조회한다.
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ENDDXM", dao.processSEARCH05(searchVo));
		return returnMap;
    }	
}
