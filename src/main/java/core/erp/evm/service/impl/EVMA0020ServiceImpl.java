package core.erp.evm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.evm.service.EVMA0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	EVMA0020ServiceImpl - 평가일정관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김석영
 * @since	2016.10.05
 * @version	1.0
 * @see		{@link EVMA0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.05	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("EVMA0020Service")
public class EVMA0020ServiceImpl extends EgovAbstractServiceImpl implements EVMA0020Service {

	/**
	 * 평가일정관리 DAO class inject.
	 */
	@Resource(name = "EVMA0020Dao")
	private EVMA0020Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	/**
	 * 평가일정관리 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsEV_TEVPXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * EVMA0020 저장,수정 또는 삭제한다.
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

		List dsEV_TEVPXM     = (List) saveData.get("dsEV_TEVPXM");  
		List dsEV_TEVPXM_Del = (List) saveData.get("dsEV_TEVPXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsEV_TEVPXM_Del.size(); i++) {

        	rowVo = (Map) dsEV_TEVPXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsEV_TEVPXM.size(); i++) {

			rowVo = (Map) dsEV_TEVPXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
