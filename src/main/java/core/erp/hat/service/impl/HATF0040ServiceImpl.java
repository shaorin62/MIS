/**
 * core.erp.hat.service.impl.HATF0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.hat.service.HATF0040Service; 
import core.erp.hat.web.HATF0040Controller;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATF0040ServiceImpl - 출장신청/정산 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박정윤
 * @since	2016.09.04
 * @version	1.0
 * @see		{@link HATF0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.04	박정윤		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright NDS.(C) All right reserved.
 */

@Service("HATF0040Service")
public class HATF0040ServiceImpl extends EgovAbstractServiceImpl implements HATF0040Service {

	/**
	 * 출장기준등록  DAO class inject.
	 */
	@Resource(name = "HATF0040Dao")
	private HATF0040Dao hATF0040Dao;

	@Resource(name = "HATF0050Dao")
	private HATF0050Dao hATF0050Dao;

	/**
	 * 출장신청 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 출장신청 내역
	 * @exception Exception
	 */	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_BUTRXM", hATF0040Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * HATF0040 출장신청서 목록을 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int deleteCount = 0;
		 String strDocuId = "";
		 Map rowVo = null;
		 
		List dsAT_BUTRXM_Del = (List) saveData.get("dsAT_BUTRXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsAT_BUTRXM_Del.size(); i++) {

        	rowVo = (Map) dsAT_BUTRXM_Del.get(i);
        	strDocuId = rowVo.get("DOCU_IDXX").toString();
        	
			deleteCount += hATF0040Dao.processDELETE00(rowVo);

			switch(strDocuId){
			case "KHR120":
 				hATF0050Dao.processDELETE01(rowVo);
				break;
			default:
				break;
		
			}
			
        }
        
		return deleteCount;

	}
	
}
