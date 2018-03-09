/**
 * core.erp.tmm.service.impl.TMMA0210ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.tmm.service.TMMA0210Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0210ServiceImpl - 공지사항관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.07.28
 * @version	1.0
 * @see		{@link TMMA0210Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.28	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0210Service")
public class TMMA0210ServiceImpl extends EgovAbstractServiceImpl implements TMMA0210Service {

	/**
	 * 공지사항관리 DAO class inject.
	 */
	@Resource(name = "TMMA0210Dao")
	private TMMA0210Dao dao;
	
	/**
	 * comAttachFileService - 첨부파일 처리 공통 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	private static final Logger logger = LoggerFactory.getLogger(TMMA0210ServiceImpl.class);

	
	/**
	 * 공지사항 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공지사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_NOTICE", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * TMMA0210 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map searchVo, Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsTM_NOTICE     = (List) saveData.get("dsTM_NOTICE");  
		List dsTM_NOTICE_Del = (List) saveData.get("dsTM_NOTICE_DELETE");
		
		List dsFL_ATTACH     = (List) saveData.get("dsFL_ATTACH");  
		List dsFL_ATTACH_Del = (List) saveData.get("dsFL_ATTACH_DELETE");			

		String sDeptCode = (String) searchVo.get("DEPT_CODE");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_NOTICE_Del.size(); i++) {

        	rowVo = (Map) dsTM_NOTICE_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_NOTICE.size(); i++) {

			rowVo = (Map) dsTM_NOTICE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			rowVo.put("DEPT_CODE", sDeptCode);
			
			if (rowType == 1) {
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
		logger.debug("----test attachFileService----["+this.getClass().getSimpleName().substring(0, 8));
		
		attachFileService.deleteFile(dsFL_ATTACH_Del);
		attachFileService.uploadFile(dsFL_ATTACH, this.getClass().getSimpleName().substring(0, 8), null);
		
		return iTotCnt;

	}
}
