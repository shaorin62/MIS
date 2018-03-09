/**
 * core.erp.tmm.service.impl.PDMC0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;


import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pdm.service.PDMC0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PDMC0010Controller - 제작견적서-견적용
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.21
 * @version	1.0
 * @see		{@link PDMC0010}
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

@Service("PDMC0010Service")
public class PDMC0010ServiceImpl extends EgovAbstractServiceImpl implements PDMC0010Service {

	/**
	 * 제작견적서 -견적용 DAO class inject.
	 */
	@Resource(name = "PDMC0010Dao")
	private PDMC0010Dao dao;

	/**
	 * 제작견적서 -견적용 을 조회한다.
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
	 * 제작견적서 -견적용 하단 상세 견적을  을 조회한다.
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
	 * 견적 템플릿 상세 내역을 가져온다
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_TYPEXD", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	

	/**
	 * PDMC0010 제작 견적서-견적용 상단 헤더 부분 저장
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
				
				//제작번호생성
				String sPREE_CODE = (String) rowVo.get("PREE_CODE");
				
				if(sPREE_CODE == "" || sPREE_CODE == null){
					
					sPREE_CODE = dao.getPREE_CODE();
					rowVo.put("PREE_CODE", sPREE_CODE );
				
				}

				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;
	}


	
	/**
	 * PDMC0010 제작 견적서-견적용 하단 견적 상세 내역 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 Map insertVo = null;
		 int rowType = 0;
		 Boolean headerChk = true;
		 String sPREE_CODE = "";
		 String sPREE_NAME = "";
		 String sPREE_CODENEW = "";
		 String getdate = "";

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
			insertVo = (Map) dsPD_ESTIMD.get(i);
			
			if (rowType == 1) {
				
				//견적번호가 없다면 상단데이터가 없다는 뜻!
				sPREE_CODE = (String) rowVo.get("PREE_CODE");
				if(sPREE_CODE == "" || sPREE_CODE == null || sPREE_CODE.equals("")){
					
					Calendar c = GregorianCalendar.getInstance();
					c.get(Calendar.YEAR);
					getdate =  c.get(Calendar.YEAR) +""+ String.format("%02d",(c.get(Calendar.MONTH)+1)) +""+ String.format("%02d",c.get(Calendar.DAY_OF_MONTH));
					if(headerChk){
						sPREE_NAME = (String) insertVo.get("PREE_NAME");
						sPREE_CODENEW = dao.getPREE_CODE();
						insertVo.put("PREE_CODE", sPREE_CODENEW );
						insertVo.put("PREE_NAME", "견적명을 수정하세요!" );
						insertVo.put("ESTI_DATE", getdate);
						//필수값만 가지고 헤더를 먼저 1회만 저장
						
						dao.processSAVE00(insertVo);
						
						insertVo.put("PREE_NAME", sPREE_NAME );
						
						headerChk = false;
					}
					rowVo.put("PREE_CODE", sPREE_CODENEW );
					rowVo.put("ESTI_DATE", getdate);
				}
				
				//견적하단 견적순번 생성
				String sPREE_IDXX = (String) rowVo.get("PREE_IDXX");
				
				if(sPREE_IDXX == "" || sPREE_IDXX == null || sPREE_IDXX.equals("")){
					
					sPREE_IDXX = dao.getPREE_IDXX(rowVo);
					rowVo.put("PREE_IDXX", sPREE_IDXX );
				
				}

				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				System.out.println("===================!!!!!!!!!!!!!!!!!!!!!>");
				updateCount += dao.processUPDATE01(rowVo);

			}
			//하단 금액 을 상단 헤더부분에 업데이트 
			dao.processUPDATEAMT(rowVo);
		}
		
		return deleteCount + updateCount;
	}


	
	/**
	 * 견적 템플릿 을 가져오기 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_TYPEXH", dao.processSEARCH10(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작건명을 가져오기위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH20(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_JOBNXM", dao.processSEARCH20(searchVo));
		return returnMap;

    }
	
	/**
	 * PDMC0010 제작 견적서-견적용 데이터를 제작용으로 업데이트
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE10(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		 List dsPD_ESTIMH     = (List) saveData.get("dsPD_ESTIMH");  
		 
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
			for (int i = 0; i < dsPD_ESTIMH.size(); i++) {
				rowVo = (Map) dsPD_ESTIMH.get(i);
				
				if(rowVo.get("CHK").equals("1")){
					updateCount += dao.processUPDATE10(rowVo);
				}
			}
		 

					
		return deleteCount + updateCount;
	}


	/**
	 * 제작견적서 -예상견적서 출력
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
	 * 제작견적서 -예상견적서 출력
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
