package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYF0040Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0040ServiceImpl - 퇴직금지급현황 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 9. 6.
 * @version	1.0
 * @see		{@link PAYF0040Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 12.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0040Service")
public class PAYF0040ServiceImpl extends EgovAbstractServiceImpl implements PAYF0040Service {

	/**
	 * 퇴직금지급현황 DAO class inject.
	 */
	@Resource(name = "PAYF0040Dao")
	private PAYF0040Dao dao;

	/**
	 * 개인별기본급 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPCXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * PAYF0040 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes" })
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_RTPCXM     = (List) saveData.get("dsPY_RTPCXM");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_RTPCXM.size(); i++) {
			rowVo = (Map) dsPY_RTPCXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if ( rowType == 2 ) {
				dao.processUPDATE00(rowVo);
			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
	
//	/**
//	 * 퇴직금지급내역 출력.
//	 * @param argDoc - 저장할 정보가 담긴 Document 객체
//	 * @return 퇴직급지급내역
//	 * @exception Exception 예외
//	 */
//	@Override
//	public List<Map<String, Object>> getREPORT00(Map<String, Object> param) {
//		
//		//String imageRealPath = InbusCoreConfig.get("Inbus.fileUploadPath");
//		//Map<String, Object> data = (Map<String, Object>) param.get("param");
//		//data.put("SEVR_ADDR",imageRealPath);
//		ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes(); 
//		ServletRequest request = servletRequestAttribute.getRequest();
//		
//		Map<String, Object> data = (Map<String, Object>) param.get("param");
//		data.put("SEVR_ADDR",request.getLocalAddr()+":"+request.getLocalPort());
//		
//		return dao.getREPORT00(data);
//	}
//	
//	/**
//	 * 퇴직금지급내역 출력.
//	 * @param argDoc - 저장할 정보가 담긴 Document 객체
//	 * @return 퇴직급지급내역
//	 * @exception Exception 예외
//	 */
//	@Override
//	public List<Map<String, Object>> getREPORT01(Map<String, Object> param) {
//		
//		//String imageRealPath = InbusCoreConfig.get("Inbus.fileUploadPath");
//		//Map<String, Object> data = (Map<String, Object>) param.get("param");
//		//data.put("SEVR_ADDR",imageRealPath);
//		ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes(); 
//		ServletRequest request = servletRequestAttribute.getRequest();
//		
//		Map<String, Object> data = (Map<String, Object>) param.get("param");
//		data.put("SEVR_ADDR",request.getLocalAddr()+":"+request.getLocalPort());
//		
//		return dao.getREPORT01(data);
//	}
}
