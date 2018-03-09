/**
 * core.erp.hrm.service.impl.WFMG0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.wfm.service.WFMG0040Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
 

/**
 * <pre>
 *	WFMG0040ServiceImpl - 연수지원관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김혜림
 * @since	2016.10.04
 * @version	1.0
 * @see		{@link WFMG0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.04	김혜림		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMG0040Service")
public class WFMG0040ServiceImpl extends EgovAbstractServiceImpl implements WFMG0040Service {

	/**
	 * 연수지원신청 내역조회 DAO class inject.
	 */

	@Resource(name = "WFMG0040Dao")
	private WFMG0040Dao wFMG0040Dao;

	/**
	 * 연수지원관리 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 연수지원관리 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_TRSPXM", wFMG0040Dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 근속년수를 조회한다.
	 * @param param - 근속발생일자, 연수시작일자
	 * @return 근속년수
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes") 
	public Object processSEARCH01(Map searchVo) throws Exception {
		return wFMG0040Dao.processSEARCH01(searchVo);

    }
	/**
	 * 연수지원신청을 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSAVE00(Map saveData) throws Exception{
		 
		 int iTotCnt = 0;
		 Map rowVo = null; //결재헤더
		 Map wfmgVo = null; //연수지원정보
		 int rowType = 0;
		 String sTRSP_SEQN = null;
		 int deleteCount = 0;
		 int updateCount = 0;
		
		 List dsCW_TRSPXM    	= (List) saveData.get("dsCW_TRSPXM");
		 List dsCW_TRSPXM_Del 	= (List) saveData.get("dsCW_TRSPXM_DELETE");		
			

			//DataSet의 Delete Row Count만큼 돌면서 Delete
	        for (int i = 0; i < dsCW_TRSPXM_Del.size(); i++) {
 
	        	rowVo = (Map) dsCW_TRSPXM_Del.get(i);
	        	 deleteCount += wFMG0040Dao.processDELETE00(rowVo);
	        	sTRSP_SEQN=null;
			}

		
	        
	        //DataSet의 Row Count만큼 돌면서 Insert Or Update
			for (int i = 0; i < dsCW_TRSPXM.size(); i++) {

				rowVo = (Map) dsCW_TRSPXM.get(i);
				rowType = (Integer) rowVo.get("ROW_TYPE");
				
				if (rowType == 1) {
				
					sTRSP_SEQN= (String) wFMG0040Dao.processSAVE00(rowVo);

				} else if (rowType == 2) {

					updateCount += wFMG0040Dao.processUPDATE00(rowVo);
					sTRSP_SEQN= rowVo.get("TRSP_SEQN").toString();

				}
			}
		 
		 
		return sTRSP_SEQN;

	}
}
