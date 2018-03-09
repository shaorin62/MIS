/**
 * core.erp.mac.service.impl.MACA0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mac.service.MACA0070Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	MACA0070ServiceImpl  - 매체 전자세금계산서 발송
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.20
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.20	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Service("MACA0070Service")
public class MACA0070ServiceImpl extends EgovAbstractServiceImpl implements MACA0070Service {

	/**
	 * 매체인증서관리(신규) DAO class inject.
	 */
	@Resource(name = "MACA0070Dao")
	private MACA0070Dao dao;

	/**
	 * 매체 전자세금계산서 인증서 관리 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsSBMS_CERTIFICATE", dao.processSEARCH00(searchVo));
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
	
	

	/**
	 * MACA0070 매체 전자세금계산서 인증서 관리 저장
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
		 int iUSE_YN = 0;
		 
		List dsSBMS_CERTIFICATE     	= (List) saveData.get("dsSBMS_CERTIFICATE");
		List dsSBMS_CERTIFICATE_Del 	= (List) saveData.get("dsSBMS_CERTIFICATE_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsSBMS_CERTIFICATE_Del.size(); i++) {

        	rowVo = (Map) dsSBMS_CERTIFICATE_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsSBMS_CERTIFICATE.size(); i++) {

			rowVo = (Map) dsSBMS_CERTIFICATE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			
			//신규 생성의 경우 해당 페이지 에서 하지 않는다.
			if (rowType == 1) {

			} else if (rowType == 2) {
				
				//updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;
	}
	
	/**
	 * MACA0070 매체 전자세금계산서 인증서 갱신
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 int iUSE_YN = 0;
		 
		List dsSBMS_CERTIFICATE     	= (List) saveData.get("dsSBMS_CERTIFICATE");
		List dsSBMS_CERTIFICATE_Del 	= (List) saveData.get("dsSBMS_CERTIFICATE_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsSBMS_CERTIFICATE_Del.size(); i++) {

        	rowVo = (Map) dsSBMS_CERTIFICATE_Del.get(i);
			//deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsSBMS_CERTIFICATE.size(); i++) {

			rowVo = (Map) dsSBMS_CERTIFICATE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			
			//신규 생성의 경우 해당 페이지 에서 하지 않는다.
			if (rowType == 1) {

			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;
	}
	
	
}
