/**
 * core.erp.mac.service.impl.MACA0060ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mac.service.MACA0060Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MACA0060ServiceImpl - 매체 세금계산서 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.05
 * @version	1.0
 * @see		{@link MACA0060Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.05	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MACA0060Service")
public class MACA0060ServiceImpl extends EgovAbstractServiceImpl implements MACA0060Service {

	/**
	 * 세금계산서 DAO class inject.
	 */
	@Resource(name = "MACA0060Dao")
	private MACA0060Dao dao;

	/**
	 * 위수탁 세금계산서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXM", dao.processSEARCH00(searchVo));
		return returnMap;
    }
	
	/**
	 * 수수료 세금계산서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXM", dao.processSEARCH01(searchVo));
		return returnMap;
    }
	
	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전파 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	
	/**
	 * MACA0060 위수탁 세금계산서 전송을 취소한다
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map saveData) throws Exception{
		int deleteCount = 0;
		 Map rowVo = null;

		List dsMD_TCALXM = (List) saveData.get("dsMD_TCALXM");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_TCALXM.size(); i++) {
        	rowVo = (Map) dsMD_TCALXM.get(i);
        	rowVo.put("META_STRING", "<REASON>"+rowVo.get("META_STRING")+"</REASON>");
        	
        	deleteCount += dao.processDELETE00(rowVo);
        	deleteCount += dao.processDELETE10(rowVo);
		}
		
		return deleteCount;

	}
	
	/**
	 * MACA0060 수수료 세금계산서 전송을 취소한다
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map saveData) throws Exception{
		int deleteCount = 0;
		 Map rowVo = null;
		 
		List dsMD_TCALXM = (List) saveData.get("dsMD_TCALXM");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_TCALXM.size(); i++) {
        	rowVo = (Map) dsMD_TCALXM.get(i);
        	rowVo.put("META_STRING", "<REASON>"+rowVo.get("META_STRING")+"</REASON>");
        	
			deleteCount += dao.processDELETE01(rowVo);
			deleteCount += dao.processDELETE11(rowVo);
		}
		
		return deleteCount;

	}
	
	/**
	 * MACA0060 이메일을 재전송한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map saveData) throws Exception{
		int updateCount = 0;
		 Map rowVo = null;

		List dsMD_TCALXM = (List) saveData.get("dsMD_TCALXM");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_TCALXM.size(); i++) {
        	rowVo = (Map) dsMD_TCALXM.get(i);
        	
        	
			updateCount += dao.processUPDATE00(rowVo);
		}
		
		return updateCount;

	}
	
	/**
	 * MACA0060 이메일을 재전송한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map saveData) throws Exception{
		int updateCount = 0;
		 Map rowVo = null;

		List dsMD_TCALXM = (List) saveData.get("dsMD_TCALXM");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_TCALXM.size(); i++) {
        	rowVo = (Map) dsMD_TCALXM.get(i);
        	
        	//수수료인 경우 SEND_EMAIL의 값은 NULL 이므로 자동으로 매체사 담당자에게 이메일을 보낸다.
    		rowVo.put("SEND_EMAIL", rowVo.get("MELT_MLAD"));
			updateCount += dao.processUPDATE00(rowVo);
		}
		
		return updateCount;

	}
	
}
