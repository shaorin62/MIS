/**
 * core.erp.tmm.service.impl.PDMD0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.pdm.service.PDMD0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PDMD0010Controller - 제작견적서-제작용
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.29
 * @version	1.0
 * @see		{@link PDMD0010}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.29	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PDMD0010Service")
public class PDMD0010ServiceImpl extends EgovAbstractServiceImpl implements PDMD0010Service {

	/**
	 * 제작견적서 -견적용 DAO class inject.
	 */
	@Resource(name = "PDMD0010Dao")
	private PDMD0010Dao dao;
	
	/**
	 * 제작정산화면 상단 헤더를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SUJUMH", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작정산 하단 상세 견적을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SUJUMD", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작정산 제작종류 를 가져오기 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_COMBO", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * PDMD0010 제작정산- 상단 헤더 데이터 수정 및 삭제(현재를 삭제만 가능)
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

		List dsPD_SUJUMH     = (List) saveData.get("dsPD_SUJUMH");  
		List dsPD_SUJUMH_Del = (List) saveData.get("dsPD_SUJUMH_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_SUJUMH_Del.size(); i++) {

        	rowVo = (Map) dsPD_SUJUMH_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_SUJUMH.size(); i++) {

			rowVo = (Map) dsPD_SUJUMH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			//현재 헤더 부분 삭제만 가능 삭제시 견적확정 취소 
			if (rowType == 1) {
			} else if (rowType == 2) {
			}
			
		}
		
		return deleteCount + updateCount;
	}
	
	

	/**
	 * PDMD0010 제작정산- 정산 하단 상세 데이터 수정및 저장 삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsPD_SUJUMD     = (List) saveData.get("dsPD_SUJUMD");  
		List dsPD_SUJUMD_Del = (List) saveData.get("dsPD_SUJUMD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_SUJUMD_Del.size(); i++) {

        	rowVo = (Map) dsPD_SUJUMD_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);
			
			//하단 금액 을 상단 헤더부분에 업데이트 
			dao.processUPDATEAMT(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_SUJUMD.size(); i++) {

			rowVo = (Map) dsPD_SUJUMD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				
				//견적하단 견적순번 생성
				String sPREE_IDXX = (String) rowVo.get("PREE_IDXX");
				
				if(sPREE_IDXX == "" || sPREE_IDXX == null || sPREE_IDXX.equals("")){
					
					sPREE_IDXX = dao.getPREE_IDXX(rowVo);
					rowVo.put("PREE_IDXX", sPREE_IDXX );
				
				}

				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE01(rowVo);

			}
			//하단 금액 을 상단 헤더부분에 업데이트 
			dao.processUPDATEAMT(rowVo);
		}
		
		return deleteCount + updateCount;
	}
	
	
	/**
	 * 제작 정상서 출력을 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SUJUMH_RPT", dao.processPRINT00(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작 정상서 출력을 위한 조회2
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SUJUMD_RPT", dao.processPRINT01(searchVo));
		return returnMap;

    }
	
	
}
