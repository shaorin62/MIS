/**
 * core.erp.mcm.service.impl.MCMA0100ServiceImpl.java - <Created by Code Template generator>
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
import core.erp.mcm.service.MCMA0100Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MCMA0100ServiceImpl - 매체거래명세표파일관리(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	조민희
 * @since	2016.09.09
 * @version	1.0
 * @see		{@link MCMA0100Service}
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

@Service("MCMA0100Service")
public class MCMA0100ServiceImpl extends EgovAbstractServiceImpl implements MCMA0100Service {

	/**
	 * 매체거래명세표파일관리(신규) DAO class inject.
	 */
	@Resource(name = "MCMA0100Dao")
	private MCMA0100Dao dao;
	
	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	
	private static final Logger logger = LoggerFactory.getLogger(MCMA0100ServiceImpl.class);

	/**
	 * 매체거래명세표파일관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 매체거래명세표파일관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TRFLXM", dao.processSEARCH00(searchVo));
		return returnMap;
    }

	/**
	 * MCMA0100 저장,수정 또는 삭제한다.
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

		List dsMD_TRFLXM     = (List) saveData.get("dsMD_TRFLXM");  
		List dsMD_TRFLXM_Del = (List) saveData.get("dsMD_TRFLXM_DELETE");

		List dsFL_ATTACH     = (List) saveData.get("dsFL_ATTACH");  
		List dsFL_ATTACH_Del = (List) saveData.get("dsFL_ATTACH_DELETE");		
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_TRFLXM_Del.size(); i++) {

        	rowVo = (Map) dsMD_TRFLXM_Del.get(i);
			dao.processDELETE00(rowVo);
			deleteCount++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_TRFLXM.size(); i++) {

			rowVo = (Map) dsMD_TRFLXM.get(i);
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
