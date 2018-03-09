/**
 * core.erp.mrp.service.impl.MRPA0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mrp.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;




import com.nexacro.xapi.data.DataSet;

import core.erp.mrp.service.MRPA0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MRPA0030ServiceImpl - 통합큐시트 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.27
 * @version	1.0
 * @see		{@link MRPA0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.27	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MRPA0030Service")
public class MRPA0030ServiceImpl extends EgovAbstractServiceImpl implements MRPA0030Service {

	/**
	 * 통합큐시트 DAO class inject.
	 */
	@Resource(name = "MRPA0030Dao")
	private MRPA0030Dao dao;

	/**
	 * 프로그램리스트를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 프로그램리스트 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_QSHTXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 매체별 프로그램리스트를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 프로그램리스트 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_QSHTXM00", dao.processSEARCH01(searchVo));					
		return returnMap;

    }
	
	/**
	 * 일자별 프로그램리스트를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 일자별 프로그램리스트 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_QSHTXM01", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 *프로그램 목록을 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map saveData) throws Exception{
		int deleteCount = 0;
		 Map rowVo = null;
		 
		List dsMD_QSHTXM = (List) saveData.get("dsMD_QSHTXM");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_QSHTXM.size(); i++) {
        	rowVo = (Map) dsMD_QSHTXM.get(i);
    		deleteCount += dao.processDELETE00(rowVo);
		}
		
		return deleteCount;

	}
	
	/**
	 * MRPA0030 프로그램목록을 저장한다.
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

		List dsMD_ETMDXM     = (List) saveData.get("dsMD_QSHTXM");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_ETMDXM.size(); i++) {

			rowVo = (Map) dsMD_ETMDXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			dao.processSAVE00(rowVo);

		}
		
		return deleteCount + updateCount;

	}

	
}
