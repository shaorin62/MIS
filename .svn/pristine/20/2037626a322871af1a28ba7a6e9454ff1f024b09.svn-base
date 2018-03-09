/**
 * core.erp.mrp.service.impl.MRPA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mrp.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;




import core.erp.mrp.service.MRPA0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MRPA0010ServiceImpl - 매체 결산 종합 보고서  서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.25
 * @version	1.0
 * @see		{@link MRPA0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.25	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MRPA0010Service")
public class MRPA0010ServiceImpl extends EgovAbstractServiceImpl implements MRPA0010Service {

	/**
	 * 매체 결산 종합 보고서 DAO class inject.
	 */
	@Resource(name = "MRPA0010Dao")
	private MRPA0010Dao dao;

	/**
	 * 세금계산서가 발행된 개별청약서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 세금계산서가 발행된 개별청약서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		if(searchVo.get("MEDX_FLAG").toString().equals("A00A")){
			//전파
			returnMap.put("dsMD_REPOXM", dao.processSEARCH00(searchVo));
		}else{
			//전파 외
			returnMap.put("dsMD_REPOXM", dao.processSEARCH10(searchVo));
		}

		return returnMap;

    }
	
	/**
	 * 광고주목록 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 광고주목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	
}
