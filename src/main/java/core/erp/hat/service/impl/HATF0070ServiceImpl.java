/**
 * core.erp.hrm.service.impl.HATF0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.hat.service.HATF0070Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATF0070ServiceImpl -출장신청등록 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김남호
 * @since	2016.09.26
 * @version	1.0
 * @see		{@link HATF0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	김남호		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATF0070Service")
public class HATF0070ServiceImpl extends EgovAbstractServiceImpl implements HATF0070Service {

	/**
	 * 출장여비정산 등록 DAO class inject.
	 */
	@Resource(name = "HATF0070Dao")
	private HATF0070Dao HATF0070DAO;
	
	@Resource(name = "HATF0060Dao")
	private HATF0060Dao hATF0060DAO;

	/**
	 * 출장여비정산 상세 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 출장여비정산 결재 상테 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_APPRXH", HATF0070DAO.processSEARCH00(searchVo));
		returnMap.put("dsAT_BTCLXM", HATF0070DAO.processSEARCH01(searchVo));
		returnMap.put("dsAT_BTCLXD", HATF0070DAO.processSEARCH02(searchVo));
		returnMap.put("dsAT_BUTRXM", HATF0070DAO.processSEARCH03(searchVo));
		return returnMap;

    }
	
	/**
	 * 출장여비정산등록 최초 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 출장여비정산등록 최초 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_BUTRXM", HATF0070DAO.processSEARCH03(searchVo));
		returnMap.put("dsAT_BUTRXD", HATF0070DAO.processSEARCH04(searchVo));
		return returnMap;
    }
	
	
	/**
	 * HATF0070 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map saveData) throws Exception{
		 
		int updateCount = 0;
		int deleteCount = 0;
		 Map rowVo = null;
		 Map gwRowVo = null;
		 int rowType = 0;
		 String sAPPR_SEQN = "";
		 String sBSRP_SEQ1 = "";
		 String sBTCL_SEQ1 = "";
		 String sTITL_NAME = "";
		
		 List dsTM_APPRXH     	= (List) saveData.get("dsTM_APPRXH");
		 List dsAT_BTCLXM    	= (List) saveData.get("dsAT_BTCLXM");		
		 List dsAT_BTCLXD    	= (List) saveData.get("dsAT_BTCLXD");
		 List dsAT_BTCLXD_Del 	= (List) saveData.get("dsAT_BTCLXD_DELETE");
System.out.println("HATF0070ServiceImpl.processSAVE00.List.dsTM_APPRXH = "+dsTM_APPRXH);
System.out.println("HATF0070ServiceImpl.processSAVE00.List.dsAT_BTCLXM = "+dsAT_BTCLXM);
System.out.println("HATF0070ServiceImpl.processSAVE00.List.dsAT_BTCLXD = "+dsAT_BTCLXD);
System.out.println("HATF0070ServiceImpl.processSAVE00.List.dsAT_BTCLXD_Del = "+dsAT_BTCLXD_Del);

		 rowVo = (Map) dsAT_BTCLXM.get(0);
System.out.println("HATF0070ServiceImpl.processSAVE00 1 "+rowVo);
		 sAPPR_SEQN = String.valueOf(rowVo.get("APPR_SEQN"));
		 sBSRP_SEQ1 = String.valueOf(rowVo.get("BSRP_SEQ1"));
		 sBTCL_SEQ1 = String.valueOf(rowVo.get("BTCL_SEQ1"));
		 sTITL_NAME = String.valueOf(rowVo.get("TITL_NAME"));
System.out.println("HATF0070ServiceImpl.processSAVE00.sAPPR_SEQN = "+sAPPR_SEQN);
System.out.println("HATF0070ServiceImpl.processSAVE00.sBSRP_SEQ1 = "+sBSRP_SEQ1);
System.out.println("HATF0070ServiceImpl.processSAVE00.sBTCL_SEQ1 = "+sBTCL_SEQ1);
System.out.println("HATF0070ServiceImpl.processSAVE00.sTITL_NAME = "+sTITL_NAME);

		//결재 TM_APPRXH 처리
		if(sAPPR_SEQN == "" || sAPPR_SEQN == "null" || sAPPR_SEQN == null){
			 //결재 TM_APPRXH key 가져오기
			 Map returnMap = new HashMap();	
			 DataSet returnDataSet = (DataSet)HATF0070DAO.processSEQ00(rowVo);
			 returnMap.put("APPR_SEQN", returnDataSet.getString(0, "APPR_SEQN"));
			 
			 sAPPR_SEQN = returnMap.get("APPR_SEQN").toString();
		}
System.out.println("HATF0070ServiceImpl.processSAVE00.sAPPR_SEQN2 = "+sAPPR_SEQN);
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 결재 헤더 저장
		rowVo = (Map) dsTM_APPRXH.get(0);
System.out.println("HATF0070ServiceImpl.processSAVE00.dsTM_APPRXH.rowVo = "+rowVo);
		rowType = (Integer) rowVo.get("ROW_TYPE");
System.out.println("HATF0070ServiceImpl.processSAVE00.dsTM_APPRXH.rowType = "+rowType);
		if (rowType == 1) {
			//신규의 경우 key 삽입.
			rowVo.put("APPR_SEQN", sAPPR_SEQN);
			HATF0070DAO.processSAVE00(rowVo);

		} else if (rowType == 2) {
			updateCount += HATF0070DAO.processUPDATE00(rowVo);
		}

System.out.println("HATF0070ServiceImpl.processSAVE00.출장여비정산 AT_BTCLXM, AT_BTCLXD 처리");		
		//출장여비정산 AT_BTCLXM, AT_BTCLXD 처리
		 if(sBTCL_SEQ1 == "" || sBTCL_SEQ1 == "null" || sBTCL_SEQ1 == null){
			 //AT_BTCLXM.BTCL_SEQ1의 key 가져오기
			 Map returnMap = new HashMap();	
			 DataSet returnDataSet = (DataSet)HATF0070DAO.processSEQ01(rowVo);
			 returnMap.put("BTCL_SEQ1", returnDataSet.getString(0, "BTCL_SEQ1"));
			 
			 sBTCL_SEQ1 = returnMap.get("BTCL_SEQ1").toString();
		 }
System.out.println("HATF0070ServiceImpl.processSAVE00.sBSRP_SEQ2 = "+sBSRP_SEQ1);
System.out.println("HATF0070ServiceImpl.processSAVE00.sBTCL_SEQ2 = "+sBTCL_SEQ1);
		 
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 출장신청내역 상세내역 삭제
		for (int i = 0; i < dsAT_BTCLXD_Del.size(); i++) {

			rowVo = (Map) dsAT_BTCLXD_Del.get(i);
			deleteCount += HATF0070DAO.processDELETE02(rowVo);
		}

		// 출장신청 헤더 저장
		//for (int i = 0; i < dsAT_BTCLXM.size(); i++) {			
			//rowVo = (Map) dsAT_BTCLXM.get(i);
		rowVo = (Map) dsAT_BTCLXM.get(0);
		rowType = (Integer) rowVo.get("ROW_TYPE");

		if (rowType == 1) {
			//신규의 경우 key 삽입.
			rowVo.put("APPR_SEQN", sAPPR_SEQN);
			rowVo.put("BTCL_SEQ1", sBTCL_SEQ1);
			HATF0070DAO.processSAVE01(rowVo);

		} else if (rowType == 2) {
			updateCount += HATF0070DAO.processUPDATE01(rowVo);
		}
		//}
		
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		// 출장신청등록 내용 저장
		for (int i = 0; i < dsAT_BTCLXD.size(); i++) {

			rowVo = (Map) dsAT_BTCLXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
System.out.println("HATF0070ServiceImpl.processSAVE00.dsAT_BTCLXD( "+i+" ).BSRP_SEQ1 = "+rowVo.get("BSRP_SEQ1"));

			if (rowType == 1) {
				//신규의 경우 key 삽입.
				rowVo.put("BTCL_SEQ1", sBTCL_SEQ1);		
				HATF0070DAO.processSAVE02(rowVo);

			} else if (rowType == 2) {
				updateCount += HATF0070DAO.processUPDATE02(rowVo);
			}
		}	
		
		//저잔한데이터 새로 select
		Map<String, Object> searchVo = new HashMap<String, Object>();
		searchVo.put("DOCU_IDXX","KHR121");
		searchVo.put("APPR_SEQN",sAPPR_SEQN);
		searchVo.put("BSRP_SEQ1",sBSRP_SEQ1);
		searchVo.put("BTCL_SEQ1",sBTCL_SEQ1);
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_APPRXH", HATF0070DAO.processSEARCH00(searchVo));
		returnMap.put("dsAT_BTCLXM", HATF0070DAO.processSEARCH01(searchVo));
		returnMap.put("dsAT_BTCLXD", HATF0070DAO.processSEARCH02(searchVo));
		
		return returnMap;
	}
}
