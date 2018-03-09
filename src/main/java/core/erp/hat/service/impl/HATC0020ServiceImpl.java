/**
 * core.erp.hrm.service.impl.HATC0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.hat.service.HATC0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATC0020ServiceImpl - 시간외근무신청 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	이창운
 * @since	2016.09.06
 * @version	1.0
 * @see		{@link HATC0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	이창운		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATC0020Service")
public class HATC0020ServiceImpl extends EgovAbstractServiceImpl implements HATC0020Service {

	/**
	 * 근태신청 내역조회 DAO class inject.
	 */
	@Resource(name = "HATC0020Dao")
	private HATC0020Dao dao;
	
	@Resource(name = "HATC0010Dao")
	private HATC0010Dao gwDao;

	/**
	 * 시간외근무신청서 헤더 및 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_APPRXH", dao.processSEARCH00(searchVo));
		returnMap.put("dsAT_OWAPXD", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * HATC0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 문서번호
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
		 List dsAT_OWAPXD    	= (List) saveData.get("dsAT_OWAPXD");
		 List dsAT_OWAPXD_Del 	= (List) saveData.get("dsAT_OWAPXD_DELETE");		

		 if(dsTM_APPRXH.size() > 0){
			 rowVo = (Map) dsTM_APPRXH.get(0);
		 }		 
		 
		 /*신규 문서번호 가져오기*/
		 Map returnMap = new HashMap();		 
		 DataSet returnDataSet = (DataSet)gwDao.processSEARCH01(rowVo);		 
		 returnMap.put("APPR_SEQN", returnDataSet.getString(0, "APPR_SEQN"));
		 		 
		 //신규 or 수정시 전체 지우고 다시 입력		
		 if(rowVo.get("APPR_SEQN") == null || rowVo.get("APPR_SEQN").equals("")){
			 sAPPR_SEQN = returnMap.get("APPR_SEQN").toString();
		 }else{
			 sAPPR_SEQN = rowVo.get("APPR_SEQN").toString();
			 dao.processDELETE00(rowVo);
			 dao.processDELETE01(rowVo);
		 }		 
		 
		 for(int i = 0;  i < dsTM_APPRXH.size() ; i++) {
			 rowVo = (Map) dsTM_APPRXH.get(i);
			 rowType = (Integer) rowVo.get("ROW_TYPE");
			 
			 if(rowType != 8){ //삭제만 아니면 INSERT
				 rowVo.put("APPR_SEQN", sAPPR_SEQN);		
				 dao.processSAVE00(rowVo);
			 }
		 }
		 
		 for(int i = 0;  i < dsAT_OWAPXD.size() ; i++) {
			 rowVo = (Map) dsAT_OWAPXD.get(i);
			 rowType = (Integer) rowVo.get("ROW_TYPE");
			 
			 if(rowType != 8){ //삭제만 아니면 INSERT
				 rowVo.put("APPR_SEQN", sAPPR_SEQN);		
				 dao.processSAVE01(rowVo);
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
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ENDDXM", dao.processSEARCH02(searchVo));
		return returnMap;
    }	
}
