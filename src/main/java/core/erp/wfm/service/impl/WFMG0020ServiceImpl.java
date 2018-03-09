/**
 * core.erp.hrm.service.impl.WFMG0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.wfm.service.WFMG0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMG0020ServiceImpl - 연수지원신청 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김혜림
 * @since	2016.09.21
 * @version	1.0
 * @see		{@link WFMG0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.21	김혜림		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMG0020Service")
public class WFMG0020ServiceImpl extends EgovAbstractServiceImpl implements WFMG0020Service {

	/**
	 * 연수지원신청 내역조회 DAO class inject.
	 */
	@Resource(name = "WFMG0010Dao")
	private WFMG0010Dao wFMG0010Dao;
	
	@Resource(name = "WFMG0020Dao")
	private WFMG0020Dao wFMG0020Dao;

	/**
	 * 연수지원신청서 헤더 및 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_APPRXH", wFMG0020Dao.processSEARCH00(searchVo));
		returnMap.put("dsCW_TRAPXM", wFMG0020Dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 근속년수를 조회한다.
	 * @param param - 근속발생일자, 연수시작일자
	 * @return 근속년수
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return wFMG0020Dao.processSEARCH02(searchVo);

    }
	/**
	 * 연수지원신청을 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int iTotCnt = 0;
		 Map rowVo = null; //결재헤더
		 Map wfmgVo = null; //연수지원정보
		 int rowType = 0;
		 String sAPPR_SEQN = null;
		 String sTRSP_SEQN = null;
		 int deleteCount = 0;
		
		 List dsTM_APPRXH     	= (List) saveData.get("dsTM_APPRXH");
		 List dsTM_APPRXH_Del 	= (List) saveData.get("dsTM_APPRXH_DELETE");
		 List dsCW_TRAPXM    	= (List) saveData.get("dsCW_TRAPXM");
		 List dsCW_TRAPXM_Del 	= (List) saveData.get("dsCW_TRAPXM_DELETE");		

		 //DataSet의 Delete Row Count만큼 돌면서 Delete
	        for (int i = 0; i < dsTM_APPRXH_Del.size(); i++) {

	        	rowVo = (Map) dsTM_APPRXH_Del.get(i);
				deleteCount += wFMG0020Dao.processDELETE00(rowVo); //결재헤더삭제

			}
	       //DataSet의 Delete Row Count만큼 돌면서 Delete
	        for (int i = 0; i < dsCW_TRAPXM_Del.size(); i++) {

	        	wfmgVo = (Map) dsCW_TRAPXM_Del.get(i);
				deleteCount += wFMG0020Dao.processDELETE01(wfmgVo); //연수신청정보삭제

			}
		 
		 if(dsTM_APPRXH.size() > 0){
			 rowVo = (Map) dsTM_APPRXH.get(0);
		 }		 
		 
		 /*신규 문서번호 가져오기*/
		 Map returnMap = new HashMap();		 
		 DataSet returnDataSet = (DataSet)wFMG0010Dao.processSEARCH01(rowVo);		 
		 returnMap.put("APPR_SEQN", returnDataSet.getString(0, "APPR_SEQN"));
		
		 /*결재헤더저장*/
		 for(int i = 0;  i < dsTM_APPRXH.size() ; i++) {
			 rowVo = (Map) dsTM_APPRXH.get(i);
			 rowType = (Integer) rowVo.get("ROW_TYPE");
			 
			 if (rowType == 1) {//신규일때
				 sAPPR_SEQN = returnMap.get("APPR_SEQN").toString();//신규채번한 결재SEQ
				 rowVo.put("APPR_SEQN", sAPPR_SEQN);
				
				 iTotCnt += wFMG0020Dao.processSAVE00(rowVo); //연수지원신청 결재헤더 등록 
			 }else if (rowType == 2) { //수정일때
				 
				 sAPPR_SEQN = rowVo.get("APPR_SEQN").toString();  //수정일때 기존SEQ값
				 rowVo.put("APPR_SEQN", sAPPR_SEQN);
				
				 wFMG0020Dao.processDELETE00(rowVo);//결재헤더삭제(수정등록시 전체 지우고 다시 입력)
				 iTotCnt += wFMG0020Dao.processSAVE00(rowVo); //연수지원신청 결재헤더 등록 
			 }	
				 
		 }
		 /*연수지원신청서 저장*/
		 for(int i = 0;  i < dsCW_TRAPXM.size() ; i++) {
			 wfmgVo = (Map) dsCW_TRAPXM.get(i);
			 rowType = (Integer) wfmgVo.get("ROW_TYPE");
			
			 if (rowType == 1) {//신규일때
				 sAPPR_SEQN = returnMap.get("APPR_SEQN").toString(); //신규채번한 결재SEQ
				 wfmgVo.put("APPR_SEQN", sAPPR_SEQN);
				 
				 iTotCnt += wFMG0020Dao.processSAVE01(wfmgVo); //연수지원신청 등록 
			
			 }else if(rowType == 2) { //수정일때
				 sAPPR_SEQN = rowVo.get("APPR_SEQN").toString();  //수정일떄 기존SEQ값
				 wfmgVo.put("APPR_SEQN", sAPPR_SEQN);	//신규일경우엔 새로 채번된 키값 수정일경우엔 기존키값 넣어준다.
				
				 /*연수정보 SEQ는 결재완료후 채번하는 것으로 변경함*/
				 // sTRSP_SEQN = wfmgVo.get("TRSP_SEQN").toString(); //수정일때 기존키값
				 // wfmgVo.put("TRSP_SEQN", sTRSP_SEQN);	//신규일경우엔 null, 수정일경우에 기존키값 넣어준다.(쿼리에서 판별함)	
				
				 wFMG0020Dao.processDELETE01(wfmgVo); //연수정보삭제(수정등록시 전체 지우고 다시 입력)
				 iTotCnt += wFMG0020Dao.processSAVE01(wfmgVo); //연수지원신청 등록 
			}	
				 
		}
		 
		 
		return iTotCnt + deleteCount;

	}
	
	
	
	/**
	 * 연수지원 신청금액 공통코두
	 * @param param 
	 * @return 근속년수
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCombo", wFMG0020Dao.processSEARCH03(searchVo));
		return returnMap;

    }
}
