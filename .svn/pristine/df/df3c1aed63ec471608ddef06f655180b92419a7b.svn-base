/**
 * core.erp.mcm.service.impl.MCMA0090ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.mcm.service.MCMA0090Service; 
import core.erp.tmm.service.impl.TMMA0070ServiceImpl;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MCMA0090ServiceImpl - 매체계약서파일관리(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	조민희
 * @since	2016.09.09
 * @version	1.0
 * @see		{@link MCMA0090Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	조민희		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MCMA0090Service")
public class MCMA0090ServiceImpl extends EgovAbstractServiceImpl implements MCMA0090Service {

	/**
	 * 매체계약서파일관리(신규) DAO class inject.
	 */
	@Resource(name = "MCMA0090Dao")
	private MCMA0090Dao dao;
	
	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	
	private static final Logger logger = LoggerFactory.getLogger(MCMA0090ServiceImpl.class);

	/**
	 * 매체계약서파일관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 매체계약서파일관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CTFLXM", dao.processSEARCH00(searchVo));
		return returnMap;
    }

	/**
	 * MCMA0090 저장,수정 또는 삭제한다.
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

		List dsMD_CTFLXM     = (List) saveData.get("dsMD_CTFLXM");  
		List dsMD_CTFLXM_Del = (List) saveData.get("dsMD_CTFLXM_DELETE");

		List dsFL_ATTACH     = (List) saveData.get("dsFL_ATTACH");  
		List dsFL_ATTACH_Del = (List) saveData.get("dsFL_ATTACH_DELETE");		
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_CTFLXM_Del.size(); i++) {

        	rowVo = (Map) dsMD_CTFLXM_Del.get(i);
			dao.processDELETE00(rowVo);
			deleteCount++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_CTFLXM.size(); i++) {

			rowVo = (Map) dsMD_CTFLXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				String NEW_FILE_NUMB = dao.processNEW_FILE_NUMB(rowVo);
				rowVo.put("FILE_NUMB", NEW_FILE_NUMB);
				
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			updateCount++;
			
		}
		
		attachFileService.deleteFile(dsFL_ATTACH_Del);
		attachFileService.uploadFiles(dsFL_ATTACH, this.getClass().getSimpleName().substring(0, 8), "");

		return deleteCount + updateCount;

	}
	

}
