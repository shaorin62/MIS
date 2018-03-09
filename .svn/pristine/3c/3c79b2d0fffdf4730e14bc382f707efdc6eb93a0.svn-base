/**
 * core.erp.wfm.service.impl.WFMC0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.wfm.service.WFMC0020Service; 
import core.ifw.cmm.exception.ProcessException;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMC0020ServiceImpl - 써클가입현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박성진
 * @since	2016.09.21
 * @version	1.0
 * @see		{@link WFMC0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.21	박성진		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMC0020Service")
public class WFMC0020ServiceImpl extends EgovAbstractServiceImpl implements WFMC0020Service {

	/**
	 * 써클가입현황 관리 DAO class inject.
	 */
	@Resource(name = "WFMC0020Dao")
	private WFMC0020Dao dao;

	/**
	 * 써클가입현황 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 써클기준 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_CLUBAP", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * WFMC0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsCW_CLUBAP     = (List) saveData.get("dsCW_CLUBAP");  
		List dsCW_CLUBAP_DEL = (List) saveData.get("dsCW_CLUBAP_DELETE");

		DataSet dsTEMP;
		String sClubName = "";
		String sEmplName = "";
		
		//삭제된 데이터에 대하여 써클가입현황이 있으면 삭제할 수 없게한다.
        for (int idx = 0; idx < dsCW_CLUBAP_DEL.size(); idx++) {

        	rowVo = (Map) dsCW_CLUBAP_DEL.get(idx);
        	sClubName= rowVo.get("CLUB_NAME").toString();
        	sEmplName= rowVo.get("EMPL_NAME").toString();

        	dsTEMP =  (DataSet)dao.processSEARCH01(rowVo);
        	
        	if(dsTEMP.getRowCount() > 0){
        		throw new ProcessException("[" + sClubName + "] " + sEmplName + "님의 가입일과 탈퇴일 사이에 지급된 급여가 있어서 삭제할 수 없습니다.");
        	}
		}
		
        //신규 입력된 데이터에 대하여 중복가입여부를 체크한다.
		for (int idx = 0; idx < dsCW_CLUBAP.size(); idx++) {

			rowVo = (Map) dsCW_CLUBAP.get(idx);
			rowType = (Integer) rowVo.get("ROW_TYPE");
        	sClubName= rowVo.get("CLUB_NAME").toString();
        	sEmplName= rowVo.get("EMPL_NAME").toString();			

			if (rowType == 1) {
	        	dsTEMP =  (DataSet)dao.processSEARCH02(rowVo);
	        	
	        	if(dsTEMP.getRowCount() > 0){
	        		throw new ProcessException(sEmplName + "님은 [" + sClubName + "] 써클에 이미 가입되어 있습니다.");
	        	}				
			}
		}        
        
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int idx = 0; idx < dsCW_CLUBAP_DEL.size(); idx++) {

        	rowVo = (Map) dsCW_CLUBAP_DEL.get(idx);
			deleteCount += dao.processDELETE00(rowVo);

		}
 
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int idx = 0; idx < dsCW_CLUBAP.size(); idx++) {

			rowVo = (Map) dsCW_CLUBAP.get(idx);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);
				updateCount++;

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;
		

	}	
}