/**
 * core.erp.tmm.service.impl.PDMC0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pdm.service.PDMC0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PDMC0020Controller - 제작견적서-제작용
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.23
 * @version	1.0
 * @see		{@link PDMC0020}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.21	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PDMC0020Service")
public class PDMC0020ServiceImpl extends EgovAbstractServiceImpl implements PDMC0020Service {

	/**
	 * 제작견적서 -견적용 DAO class inject.
	 */
	@Resource(name = "PDMC0020Dao")
	private PDMC0020Dao dao;

	/**
	 * 제작견적서 -제작용 을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_ESTIMH", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작견적서 -제작용 견적 하단 상세견적 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_ESTIMD", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작종류 콤보 가져오기
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_HIGH", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	

	/**
	 * PDMC0020 제작 견적서-제작용 상단 헤더 부분 저장
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
		 String sPREE_CODE = "";

		List dsPD_ESTIMH     = (List) saveData.get("dsPD_ESTIMH");  
		List dsPD_ESTIMH_Del = (List) saveData.get("dsPD_ESTIMH_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_ESTIMH_Del.size(); i++) {

        	rowVo = (Map) dsPD_ESTIMH_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_ESTIMH.size(); i++) {

			rowVo = (Map) dsPD_ESTIMH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				sPREE_CODE = dao.getPREE_CODE();
				rowVo.put("PREE_CODE", sPREE_CODE );
				dao.processSAVE03(rowVo);
				
				
			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;
	}
	
	

	/**
	 * PDMC0020 제작 견적서-제작용 하단 견적 상세 내역 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData, Map saveVO) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsPD_ESTIMD     = (List) saveData.get("dsPD_ESTIMD");  
		List dsPD_ESTIMD_Del = (List) saveData.get("dsPD_ESTIMD_DELETE");
		

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_ESTIMD_Del.size(); i++) {

        	rowVo = (Map) dsPD_ESTIMD_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_ESTIMD.size(); i++) {

			rowVo = (Map) dsPD_ESTIMD.get(i);
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
	 * PDMC0020 제작 견적 제작용 확정 버튼 클릭
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 Map rowVoDTL = null;
		 int rowType = 0;

		List dsPD_ESTIMH     = (List) saveData.get("dsPD_ESTIMH");
		List dsPD_ESTIMD     = (List) saveData.get("dsPD_ESTIMD");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_ESTIMH.size(); i++) {
			rowVo = (Map) dsPD_ESTIMH.get(i);
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_ESTIMD.size(); i++) {
			rowVoDTL = (Map) dsPD_ESTIMD.get(i);
		}
		
		//기존에 존재 하는 정산 데이터 삭제 
		dao.processDELETESUJU(rowVo);
		
		//정산데이터 생성
		dao.processSAVE02(rowVo);
		
		//상세 정산데이터 계산
		updateCount += dao.processUPDATESUJU(rowVoDTL);
		
		return deleteCount + updateCount;
	}

	/**
	 * 제작견적서 -견적서 출력
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_ESTIMH_RPT", dao.processPRINT00(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작견적서 -견적서 출력
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_ESTIMD_RPT", dao.processPRINT01(searchVo));
		return returnMap;

    }
	
	
}
