/**
 * core.erp.tmm.service.impl.PDMC0021ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pdm.service.PDMC0021Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PDMC0021Controller - 제작견적서-제작용
 * </pre>
 *
 * @author	오세훈
 * @since	2016.12.21
 * @version	1.0
 * @see		{@link PDMC0021}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.21	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PDMC0021Service")
public class PDMC0021ServiceImpl extends EgovAbstractServiceImpl implements PDMC0021Service {

	/**
	 * 제작견적서  DAO class inject.
	 */
	@Resource(name = "PDMC0021Dao")
	private PDMC0021Dao dao;

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
	 * 제작견적서 -제작용 하단 상세 내역 조회
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
		 Map rowDtlVo = null;
		 int rowType = 0;
		 String sCONF_YNGN = "";
		 String sPREE_CODE = "";
		

		List dsPD_ESTIMH     = (List) saveData.get("dsPD_ESTIMH");  
		
		List dsPD_ESTIMD     = (List) saveData.get("dsPD_ESTIMD");  
		List dsPD_ESTIMD_Del = (List) saveData.get("dsPD_ESTIMD_DELETE");
		
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_ESTIMD_Del.size(); i++) {

        	rowVo = (Map) dsPD_ESTIMD_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);
		}
        

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_ESTIMH.size(); i++) {

			rowVo = (Map) dsPD_ESTIMH.get(i);
			
			sCONF_YNGN = (String) rowVo.get("CONF_YNGN");
			
			//미확정  즉 실행 견적이  없을 경우 
			if(sCONF_YNGN.equals("N")){
				
				sPREE_CODE = dao.getPREE_CODE();
				rowVo.put("PREE_CODE", sPREE_CODE );
				
				//제작건명을 견적명으로 입력
				rowVo.put("PREE_NAME", (String) rowVo.get("JOBN_NAME"));
				
				//미확정 최초 인서트 전 해당 견적번호 예상견적 삭제 (해당 프로세스는 예상견적을 넣지 않기 때문에 다른 프로세스에서 삭제 할경우 남아있는 데이터 제거)
				dao.processDELETE01(rowVo);
				
				//미확정 최초 데이터 헤더 인서트
				dao.processSAVE00(rowVo);
				//견적 미확정건 즉 확정 견적이 없을 경우 insert 데이터 
				for (int j = 0; j < dsPD_ESTIMD.size(); j++) {
					rowDtlVo = (Map) dsPD_ESTIMD.get(j);
					
					rowDtlVo.put("PREE_CODE", sPREE_CODE );
					
					System.out.println("===========>"+ sPREE_CODE);
					
					String sPREE_IDXX = dao.getPREE_IDXX(rowDtlVo);
					
					System.out.println("===========>"+ sPREE_IDXX);
					
					rowDtlVo.put("PREE_IDXX", sPREE_IDXX );
					
					dao.processSAVE01(rowDtlVo);
				}
				
			}else{
				//견적이 확정일 경우 실행 견적이 있기 때문에 수정 되어야 함. 단 헤더는 금액 업데이트만 한다.(견적일 수정 가능 변경)
				for(int k = 0; k < dsPD_ESTIMD.size(); k++) {
					rowDtlVo = (Map) dsPD_ESTIMD.get(k);
					rowType = (Integer) rowDtlVo.get("ROW_TYPE");
					
					if (rowType == 1) {
						
						String sPREE_IDXX = dao.getPREE_IDXX(rowDtlVo);
						rowDtlVo.put("PREE_IDXX", sPREE_IDXX );
						
						dao.processSAVE01(rowDtlVo);
						
					}else if(rowType == 2){
						
						updateCount += dao.processUPDATE00(rowDtlVo);
						
					}
				}
			}
			
			//헤더에 디테일 금액 정리 업데이트
			updateCount += dao.processUPDATE01(rowDtlVo);
			
		}
	
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
