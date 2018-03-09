/**
 * core.erp.hrm.service.impl.HATE0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.hat.service.HATE0040Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATC0010ServiceImpl - 월근태현황 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	이창운
 * @since	2016.09.13
 * @version	1.0
 * @see		{@link HATE0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.13	이창운		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATE0040Service")
public class HATE0040ServiceImpl extends EgovAbstractServiceImpl implements HATE0040Service {

	/**
	 * 월근태현황 내역조회 DAO class inject.
	 */
	@Resource(name = "HATE0040Dao")
	private HATE0040Dao dao;
	
	@Resource(name = "HATC0010Dao")
	private HATC0010Dao gwDao;

	/**
	 * 월근태현황 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ATTEDY", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * HATE0040 저장 한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE00(Map saveData) throws Exception{
		 
		 int iTotCnt = 0;
		 Map rowVo = null;
		 Map gwRowVo = null;
		 int rowType = 0;
		 String sAPPR_SEQN = "";
		
		 List dsTM_APPRXH     	= (List) saveData.get("dsTM_APPRXH");
		 List dsTM_APPRXH_Del 	= (List) saveData.get("dsTM_APPRXH_DELETE");	
		 
		 if(dsTM_APPRXH.size() > 0){
			 rowVo = (Map) dsTM_APPRXH.get(0);
		 }		 
		 
		 /*신규 문서번호 가져오기*/
		 Map returnMapSeq = new HashMap();		 
		 DataSet returnDataSet = (DataSet)gwDao.processSEARCH01(rowVo);		 
		 returnMapSeq.put("APPR_SEQN", returnDataSet.getString(0, "APPR_SEQN"));
		 
		 Map returnMap = new HashMap();	
		 		 
		 //신규 or 수정시 전체 지우고 다시 입력		
		 if(rowVo.get("APPR_SEQN") == null || rowVo.get("APPR_SEQN").equals("")){
			 sAPPR_SEQN = returnMapSeq.get("APPR_SEQN").toString();
		 } 
		 
		 for(int i = 0;  i < dsTM_APPRXH.size() ; i++) {
			 rowVo = (Map) dsTM_APPRXH.get(i);
			 rowType = (Integer) rowVo.get("ROW_TYPE");
			 
			 if(rowType != 8){ //삭제만 아니면 INSERT
				 rowVo.put("APPR_SEQN", sAPPR_SEQN);		
				 iTotCnt += dao.processSAVE00(rowVo);				 
			 }
		 }		 
		 
		 return sAPPR_SEQN;
	}
}
