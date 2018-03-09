/**
 * core.erp.tmm.service.impl.BDMB0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.bdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.bdm.service.BDMB0050Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	BDMB0050ServiceImpl - 추가예산관리 관리 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 7. 27.
 * @version	1.0
 * @see		{@link BDMB0050Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 7.27.	안윤준		Initial Created.
 * 2016.10.12.	권미영		전자결재연동 
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("BDMB0050Service")
public class BDMB0050ServiceImpl extends EgovAbstractServiceImpl implements BDMB0050Service {

	/**
	 * 추가예산관리 관리 DAO class inject.
	 */
	@Resource(name = "BDMB0050Dao")
	private BDMB0050Dao dao;

	/**
	 * 추가예산관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 추가예산관리  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTB_CPLADD", dao.processSEARCH00(searchVo));
		return returnMap;

	}

	/**
	 * 전자결재용 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 추가예산관리  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTB_CPLADD_PRINT", dao.processPRINT00(searchVo));
		return returnMap;

	}

	/**
	 * 저장,수정, 삭제한다.
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
		String sAPPR_SEQN 	= "";  

		List dsTB_CPLADD     = (List) saveData.get("dsTB_CPLADD");  
		List dsTB_CPLADD_Del = (List) saveData.get("dsTB_CPLADD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTB_CPLADD_Del.size(); i++) {

			rowVo = (Map) dsTB_CPLADD_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

			//전자결재 문서 번호 존재하는 경우 전자결재 헤더 삭제
			sAPPR_SEQN = (String) rowVo.get("APPR_SEQN");
System.out.println("-----kmy--------" + sAPPR_SEQN + "]]]]");
			if (!sAPPR_SEQN.equals(null) && sAPPR_SEQN.length() > 0) {
				deleteCount += dao.processDELETE99(rowVo);	//전자결재 헤더 삭제
			}
		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTB_CPLADD.size(); i++) {

			rowVo = (Map) dsTB_CPLADD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}

		return deleteCount + updateCount;

	}

	/**
	 * 전자결재 연동자료 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE99(Map saveData, Map searchVo) throws Exception{

		int saveCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sAPPR_SEQN 	= "";  

		List dsTB_CPLADD	= (List) saveData.get("dsTB_CPLADD");  

		if (dsTB_CPLADD.size() > 0) {
			rowVo = (Map) dsTB_CPLADD.get(0);

			sAPPR_SEQN = (String) rowVo.get("APPR_SEQN");

			//전자결재 문서번호 존재유무에 따라 결재일련번호 채번
			if (sAPPR_SEQN.equals(null) || sAPPR_SEQN.length() == 0) {
				
				DataSet returnDataSet = (DataSet)dao.processSEARCH99(rowVo);	//결재일련번호 채번 반환
				sAPPR_SEQN = returnDataSet.getString(0, "APPR_SEQN");

				rowVo.put("APPR_SEQN", sAPPR_SEQN);
				rowVo.put("GWAP_EMPL", searchVo.get("GWAP_EMPL").toString());
				rowVo.put("GWAP_DEPT", searchVo.get("GWAP_DEPT").toString());
				rowVo.put("GWAP_SUBJ", searchVo.get("GWAP_SUBJ").toString());
				
				dao.processSAVE99(rowVo); //전자결재 연동자료 저장
				
			}  
			saveCount++;

		}

		return sAPPR_SEQN;

	}


}
