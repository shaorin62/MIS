package core.erp.evm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.evm.service.EVMC0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	EVMC0030ServiceImpl - 목표설정서 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김석영
 * @since	2016.10.24
 * @version	1.0
 * @see		{@link EVMC0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.24	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("EVMC0030Service")
public class EVMC0030ServiceImpl extends EgovAbstractServiceImpl implements EVMC0030Service {

	/**
	 * 목표설정서 DAO class inject.
	 */
	@Resource(name = "EVMC0030Dao")
	private EVMC0030Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	/**
	 * 목표설정서/평가대상자관리 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsEV_DTEGXM", dao.processSEARCH00(searchVo));
		returnMap.put("dsEV_WGEGXM", dao.processSEARCH01(searchVo));	
		returnMap.put("dsEV_DTETXM", dao.processSEARCH02(searchVo));		
		return returnMap;

    }
	
	/**
	 * EVMC0030 저장,수정 또는 삭제한다.
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

		List dsEV_DTEGXM     = (List) saveData.get("dsEV_DTEGXM");  
		

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsEV_DTEGXM.size(); i++) {

			rowVo = (Map) dsEV_DTEGXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
