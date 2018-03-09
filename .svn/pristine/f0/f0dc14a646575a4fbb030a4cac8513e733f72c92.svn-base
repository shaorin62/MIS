/**
 * core.erp.hrm.service.impl.HATF0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.hat.service.HATF0050Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATF0050ServiceImpl -출장신청등록 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박정윤
 * @since	2016.09.20
 * @version	1.0
 * @see		{@link HATF0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.20	박정윤		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATF0050Service")
public class HATF0050ServiceImpl extends EgovAbstractServiceImpl implements HATF0050Service {

	/**
	 * 출장신청 내역조회 DAO class inject.
	 */
	@Resource(name = "HATF0050Dao")
	private HATF0050Dao hATF0050DAO;
	
	@Resource(name = "HATF0040Dao")
	private HATF0040Dao hATF0040DAO;

	/**
	 * 출장신청등록 헤더 및 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_APPRXH", hATF0050DAO.processSEARCH00(searchVo));
		returnMap.put("dsAT_BUTRXM", hATF0050DAO.processSEARCH01(searchVo));
		returnMap.put("dsAT_BUTRXD", hATF0050DAO.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * 사원정보내역 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_HARMXM", hATF0050DAO.processSEARCH03(searchVo));
		return returnMap;
    }

	/**
	 * HATF0050 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 Map gwRowVo = null;
		 int rowType = 0;
		 String sAPPR_SEQN = "";
		
	 	 List dsTM_APPRXH     	= (List) saveData.get("dsTM_APPRXH");
		 List dsAT_BUTRXM    	= (List) saveData.get("dsAT_BUTRXM");		
		 List dsAT_BUTRXD    	= (List) saveData.get("dsAT_BUTRXD");
		 List dsAT_BUTRXD_Del 	= (List) saveData.get("dsAT_BUTRXD_DELETE");

		 if(dsTM_APPRXH.size() > 0){
			 rowVo = (Map) dsTM_APPRXH.get(0);
			 rowType = (Integer) rowVo.get("ROW_TYPE");
			 
			 if (rowType == 1) {
				 /*신규 문서번호 가져오기*/
				 Map returnMap = new HashMap();		 
				 DataSet returnDataSet = (DataSet)hATF0040DAO.processSEARCH01(rowVo);		 
				 returnMap.put("APPR_SEQN", returnDataSet.getString(0, "APPR_SEQN"));
				 
				 sAPPR_SEQN = returnMap.get("APPR_SEQN").toString();
			 }else{
				 
				 sAPPR_SEQN = rowVo.get("APPR_SEQN").toString();
			 }
		 }
		 
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 출장신청내역 상세내역 삭제
		for (int i = 0; i < dsAT_BUTRXD_Del.size(); i++) {

			rowVo = (Map) dsAT_BUTRXD_Del.get(i);
			deleteCount += hATF0050DAO.processDELETE02(rowVo);
		}
		 
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 결재헤더 저장
		for (int i = 0; i < dsTM_APPRXH.size(); i++) {

			rowVo = (Map) dsTM_APPRXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				/*신규의 경우 채번한 문서번호 사용한다.*/
				rowVo.put("APPR_SEQN", sAPPR_SEQN);		
				hATF0050DAO.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += hATF0050DAO.processUPDATE00(rowVo);
			}
		}
		 
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 출장신청 헤더 저장
		for (int i = 0; i < dsAT_BUTRXM.size(); i++) {

			rowVo = (Map) dsAT_BUTRXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				/*신규의 경우 채번한 문서번호 사용한다.*/
				rowVo.put("APPR_SEQN", sAPPR_SEQN);		
				hATF0050DAO.processSAVE01(rowVo);

			} else if (rowType == 2) {
				updateCount += hATF0050DAO.processUPDATE01(rowVo);
			}
		}
		
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 출장신청등록 내용 저장
		for (int i = 0; i < dsAT_BUTRXD.size(); i++) {

			rowVo = (Map) dsAT_BUTRXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				/*신규의 경우 채번한 문서번호 사용한다.*/
				rowVo.put("APPR_SEQN", sAPPR_SEQN);		
				hATF0050DAO.processSAVE02(rowVo);

			} else if (rowType == 2) {
				updateCount += hATF0050DAO.processUPDATE02(rowVo);
			}
		}	
		
		return deleteCount + updateCount;

	}
}
