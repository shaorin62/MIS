/**
 * core.erp.tmm.service.impl.FAMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.edm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.edm.service.EDMB0050Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	EDMA0050ServiceImpl - 교육이수결과관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김혜림
 * @since	2016.09.12
 * @version	1.0
 * @see		{@link EDMA0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.12	김혜림		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("EDMB0050Service") 
public class EDMB0050ServiceImpl extends EgovAbstractServiceImpl implements EDMB0050Service {

	/**
	 * 교육이수결과관리 DAO class inject.
	 */
	@Resource(name = "EDMB0050Dao")
	private EDMB0050Dao eDMB0050Dao;

	/**
	 * 교육이수결과관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsED_EDRSLT", eDMB0050Dao.processSEARCH00(searchVo));
		return returnMap;

    }


	/**
	 * 교육이수결과관리 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sEDRT_SEQN="";

		List dsED_EDRSLT     = (List) saveData.get("dsED_EDRSLT");  
		List dsED_EDRSLT_Del = (List) saveData.get("dsED_EDRSLT_DELETE");
		

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsED_EDRSLT_Del.size(); i++) {

        	rowVo = (Map) dsED_EDRSLT_Del.get(i);
			eDMB0050Dao.processDELETE00(rowVo);
			sEDRT_SEQN=null;
		}

	
        
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsED_EDRSLT.size(); i++) {

			rowVo = (Map) dsED_EDRSLT.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
			
				sEDRT_SEQN= (String) eDMB0050Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += eDMB0050Dao.processUPDATE00(rowVo);
				sEDRT_SEQN= rowVo.get("EDRT_SEQN").toString();

			}
		}
		
		return sEDRT_SEQN;

	}
	/**
	 * 교육이수결과관리를 엑셀업로드한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processSAVE01(Map saveData) throws Exception{
		 
		Map rowVo = null; 

		List dsED_EDRSLT     = (List) saveData.get("dsED_EDRSLT");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsED_EDRSLT.size(); i++) {

			rowVo = (Map) dsED_EDRSLT.get(i);
			
			eDMB0050Dao.processSAVE01(rowVo);
		}
	}

}
