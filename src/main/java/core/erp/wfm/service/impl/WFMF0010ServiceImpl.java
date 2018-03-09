/**
 * core.erp.hrm.service.impl.WFMF0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;




import org.springframework.stereotype.Service;




import core.erp.wfm.service.WFMF0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMF0010ServiceImpl - 전산자원관리 메뉴 서비스 인터페이스 구현 클래스
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

@Service("WFMF0010Service")
public class WFMF0010ServiceImpl extends EgovAbstractServiceImpl implements WFMF0010Service {

	/**
	 * 전산자원관리 DAO class inject.
	 */
	@Resource(name = "WFMF0010Dao")
	private WFMF0010Dao dao;

	/**
	 * 전산자원관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전산관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_COMRMN", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 전산자원관리 키값 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전산관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsSHRBEFO_DTYN", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 전산자원관리 키값 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전산관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_COMRMN1", dao.processSEARCH02(searchVo));
		return returnMap;

    }	
	
	/**
	 * WFMF0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;
		String sCOMR_SEQN="";

		List dsCW_COMRMN     = (List) saveData.get("dsCW_COMRMN");  
		List dsCW_COMRMN_Del = (List) saveData.get("dsCW_COMRMN_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsCW_COMRMN_Del.size(); i++) {

        	rowVo = (Map) dsCW_COMRMN_Del.get(i);
			dao.processDELETE00(rowVo);
			sCOMR_SEQN=null;
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsCW_COMRMN.size(); i++) {

			rowVo = (Map) dsCW_COMRMN.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				sCOMR_SEQN= (String) dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);
				sCOMR_SEQN = rowVo.get("COMR_SEQN").toString();

			}
			
			iTotCnt++;
			
		}
		
		return sCOMR_SEQN;

	}

	
	/**
	 * WFMF0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;

		List dsSHRSTDS_YMTH     = (List) saveData.get("dsSHRSTDS_YMTH");  
		rowVo = (Map) dsSHRSTDS_YMTH.get(0);
		dao.processSAVE01(rowVo);
		
		return iTotCnt;

	}
}
