/**
 * core.erp.wfm.service.impl.WFMB0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.wfm.service.WFMB0050Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMB0020ServiceImpl - 학자금신청 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	전종원
 * @since	2016.09.12
 * @version	1.0
 * @see		{@link WFMB0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.12	전종원		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMB0050Service")
public class WFMB0050ServiceImpl extends EgovAbstractServiceImpl implements WFMB0050Service {

	/**
	 * 학자금신청 내역조회 DAO class inject.
	 */
	@Resource(name = "WFMB0050Dao")
	private WFMB0050Dao dao;
	
	@Resource(name = "WFMB0020Dao")
	private WFMB0020Dao gwDao;

	/**
	 * 학자금신청서 헤더 및 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 학자금신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_APPRXH", dao.processSEARCH00(searchVo));
		returnMap.put("dsWF_SCEXXD", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * WFMB0050 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int iTotCnt = 0;
		 Map rowVo = null;
		 Map gwRowVo = null;
		 int rowType = 0;
		 String gwSeq = "";
		
		 List dsTM_APPRXH     	= (List) saveData.get("dsTM_APPRXH");
		 List dsTM_APPRXH_Del 	= (List) saveData.get("dsTM_APPRXH_DELETE");
		 List dsWF_SCEXXD    	= (List) saveData.get("dsWF_SCEXXD");
		 List dsWF_SCEXXD_Del 	= (List) saveData.get("dsWF_SCEXXD_DELETE");		

		 if(dsTM_APPRXH.size() > 0){
			 rowVo = (Map) dsTM_APPRXH.get(0);
		 }
		 
		 /*신규 문서번호 가져오기*/
		 Map returnMap = new HashMap();		 
		 DataSet returnDataSet = (DataSet)gwDao.processSEARCH01(rowVo);		 
		 returnMap.put("APPR_SEQN", returnDataSet.getString(0, "APPR_SEQN"));
		 		 
		 //신규 or 수정시 전체 지우고 다시 입력		
		 if(rowVo.get("APPR_SEQN") == null || rowVo.get("APPR_SEQN").equals("")){
			 gwSeq = returnMap.get("APPR_SEQN").toString();
		 }else{
			 gwSeq = rowVo.get("APPR_SEQN").toString();
			 dao.processDELETE00(rowVo);
			 dao.processDELETE01(rowVo);
		 }		 
		 
		 for(int i = 0;  i < dsTM_APPRXH.size() ; i++) {
			 rowVo = (Map) dsTM_APPRXH.get(i);
			 rowType = (Integer) rowVo.get("ROW_TYPE");
			 
			 if(rowType != 8){ //삭제만 아니면 INSERT
				 rowVo.put("APPR_SEQN", gwSeq);		
				 //iTotCnt += dao.processSAVE00(rowVo);
				 dao.processSAVE00(rowVo);
			 }
		 }
		 
		 for(int i = 0;  i < dsWF_SCEXXD.size() ; i++) {
			 rowVo = (Map) dsWF_SCEXXD.get(i);
			 rowType = (Integer) rowVo.get("ROW_TYPE");
			 
			 if(rowType != 8){ //삭제만 아니면 INSERT
				 rowVo.put("APPR_SEQN", gwSeq);		
				 //iTotCnt += dao.processSAVE01(rowVo);
				 dao.processSAVE01(rowVo);
			 }
		 }
		 
		return iTotCnt;

	}
}
