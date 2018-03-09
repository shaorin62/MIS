/**
 * core.erp.mdm.service.impl.MDMC0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mdm.service.MDMC0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MDMC0010ServiceImpl - 인쇄 개별청약(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.13
 * @version	1.0
 * @see		{@link MDMC0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.13	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MDMC0010Service")
public class MDMC0010ServiceImpl extends EgovAbstractServiceImpl implements MDMC0010Service {

	/**
	 * 인쇄 개별청약(신규) DAO class inject.
	 */
	@Resource(name = "MDMC0010Dao")
	private MDMC0010Dao dao;

	/**
	 * 인쇄 개별청약 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인쇄 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_PTMDXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전파 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * MDMC0010 인쇄 개별청약 저장,수정 및 삭제한다.
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
		 
		List dsMD_PTMDXM     = (List) saveData.get("dsMD_PTMDXM");  
		List dsMD_PTMDXM_Del = (List) saveData.get("dsMD_PTMDXM_DELETE");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_PTMDXM_Del.size(); i++) {
        	rowVo = (Map) dsMD_PTMDXM_Del.get(i);
        	//거래명세서를 끊었는지 확인한다.
        	if(dao.processCOUNT00(rowVo) != null){
        		throw new Exception("거래명세서가 생성된 개별청약서는 삭제할 수 없습니다.");
        	}
        	//세금계산서를 끊었는지 확인한다.
        	if(dao.processCOUNT01(rowVo) != null){
        		throw new Exception("세금계산서가 생성된 개별청약서는 삭제할 수 없습니다.");
        	}
			deleteCount += dao.processDELETE00(rowVo);

		}
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_PTMDXM.size(); i++) {

			rowVo = (Map) dsMD_PTMDXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			if (rowType == 1) {
				
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				//거래명세서를 끊었는지 확인한다.
	        	if(dao.processCOUNT00(rowVo) != null){
	        		throw new Exception("거래명세서가 생성된 개별청약서는 수정할 수 없습니다.");
	        	}
	        	//세금계산서를 끊었는지 확인한다.
	        	if(dao.processCOUNT01(rowVo) != null){
	        		throw new Exception("세금계산서가 생성된 개별청약서는 수정할 수 없습니다.");
	        	}
				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
