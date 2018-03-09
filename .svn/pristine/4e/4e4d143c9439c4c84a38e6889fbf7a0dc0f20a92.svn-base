/**
 * core.erp.hrm.service.impl.WFMD0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;






import org.springframework.stereotype.Service;






import com.nexacro.xapi.data.DataSet;

import core.erp.hat.service.impl.HATC0010Dao;
import core.erp.hat.service.impl.HATE0040Dao;
import core.erp.wfm.service.WFMD0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMD0020ServiceImpl - 차량관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김용만
 * @since	2016.09.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.08	김용만		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMD0020Service")
public class WFMD0020ServiceImpl extends EgovAbstractServiceImpl implements WFMD0020Service {

	/**
	 * 차량관리 DAO class inject.
	 */
	@Resource(name = "WFMD0020Dao")
	private WFMD0020Dao dao;
	
	@Resource(name = "WFMD0020Dao")
	private WFMD0020Dao gwDao;

	/**
	 * 차량관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전산관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_VEHCLG", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 차량관리 키값 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 차량관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_VEHCLG1", dao.processSEARCH01(searchVo));
		return returnMap;
    }
	
	/**
	 * 차량관리 전월말 주행거리를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전월말 주행거리
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPMLD_DIST", dao.processSEARCH02(searchVo));
		return returnMap;
    }
	
	/**
	 * 차량관리 전월말 합계를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전산관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_VEHCLG2", dao.processSEARCH03(searchVo));
		return returnMap;
    }
	
	/**
	 * WFMD0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsCW_COMRMN     = (List) saveData.get("dsCW_VEHCLG");  
		List dsCW_COMRMN_Del = (List) saveData.get("dsCW_VEHCLG_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsCW_COMRMN_Del.size(); i++) {

        	rowVo = (Map) dsCW_COMRMN_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsCW_COMRMN.size(); i++) {

			rowVo = (Map) dsCW_COMRMN.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
	
	/**
	 * WFMD0020 저장 한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE01(Map saveData) throws Exception{
		 
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
		 
		 DataSet returnDataSet = (DataSet)gwDao.processSEARCH04(rowVo);		 
		 
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
				 iTotCnt += dao.processSAVE01(rowVo);				 
			 }
		 }		 
		 return sAPPR_SEQN;
	}
	
}
