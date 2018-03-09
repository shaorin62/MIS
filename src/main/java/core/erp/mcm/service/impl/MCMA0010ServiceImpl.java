/**
 * core.erp.mcm.service.impl.MCMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.mcm.service.MCMA0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MCMA0010ServiceImpl - 공통코드관리(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.04
 * @version	1.0
 * @see		{@link MCMA0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.30	조민희		Initial Created.
 * 2016.10.04	최제현		Check and Revise.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MCMA0010Service")
public class MCMA0010ServiceImpl extends EgovAbstractServiceImpl implements MCMA0010Service {

	/**
	 * 공통코드관리(신규) DAO class inject.
	 */
	@Resource(name = "MCMA0010Dao")
	private MCMA0010Dao dao;

	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CODEXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 그룹코드명 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 그룹코드명 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsGRUP_CODE", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * MCMA0010 저장,수정 또는 삭제한다.
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

		List dsMD_CODEXM     = (List) saveData.get("dsMD_CODEXM");  
		List dsMD_CODEXM_Del = (List) saveData.get("dsMD_CODEXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_CODEXM_Del.size(); i++) {
        	rowVo = (Map) dsMD_CODEXM_Del.get(i);
        	
        	String SQL_QUERY = "";
        	int COUNT_DATA = 0;
        	
        	//다른 매체 테이블에서 코드를 사용하고 있다면 삭제가 되지 않는다.
        	//테이블 각각의 컬럼을 조회하는 쿼리를 가져온다.
        	DataSet SQL_QUERY_LIST=(DataSet)dao.processGET_SQL_QUERY(rowVo);
        	
        	//쿼리를 합친다.
        	for(int j=0;j<SQL_QUERY_LIST.getRowCount();j++){
        		SQL_QUERY += SQL_QUERY_LIST.getString(j, 0);
        		
        		//마지막 쿼리에는 UNION ALL 을 붙이지 않는다.
        		if(j<SQL_QUERY_LIST.getRowCount()-1){
        			SQL_QUERY += " UNION ALL ";        			
        		}
        	}
        	
        	//다른 테이블에서 공통코드를 이용했는지 확인한다.
        	COUNT_DATA = dao.processCOUNT_DATA(SQL_QUERY);
        	//다른 테이블에서 코드를 이용했으면 예외발생
        	if(COUNT_DATA>=1){
        		throw new Exception(rowVo.get("COMM_CODE")+"코드는 다른 테이블에서 이용하고 있기 때문에 삭제할 수 없습니다.");
        	}
        	
			deleteCount += dao.processDELETE00(rowVo);

		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_CODEXM.size(); i++) {

			rowVo = (Map) dsMD_CODEXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				
				String grup_code = (String) rowVo.get("GRUP_CODE");
				
				if(grup_code.equals("") || grup_code == null || grup_code.equals("NEW")){
					// 신규 그룹코드 채번 & 신규 코드 채번
					String max_grup_code = dao.processNEW_GRUP_CODE(rowVo);
					char[] ch = max_grup_code.toCharArray();
					for (char c : ch) {
						char ch_NewGRUP_CODE = (char) ((int) c + 1);
						String NewGRUP_CODE = String.valueOf(ch_NewGRUP_CODE);
						rowVo.put("GRUP_CODE", NewGRUP_CODE);
						rowVo.put("COMM_CODE", NewGRUP_CODE+"001");
					}
				}else{
					// 신규 코드 채번
					String NewCOMM_CODE = dao.processNEW_COMM_CODE(rowVo);	
					rowVo.put("COMM_CODE", NewCOMM_CODE);	
				}
				
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
