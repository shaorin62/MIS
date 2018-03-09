/**
 * core.erp.hrm.service.impl.HRMA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.hrm.service.HRMA0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMA0020ServiceImpl - 조직개편기초등록 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.10.21
 * @version	1.0
 * @see		{@link HRMA0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.21	고민주		Initial Created.
 * 2016.12.06	안윤준		수정.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMA0020Service")
public class HRMA0020ServiceImpl extends EgovAbstractServiceImpl implements HRMA0020Service {
	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;

	private static final Logger logger = LoggerFactory.getLogger(HRMA0020ServiceImpl.class);

	/**
	 * 조직개편기초등록 DAO class inject.
	 */
	@Resource(name = "HRMA0020Dao")
	private HRMA0020Dao dao;

	/**
	 * 조직개편 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 조직개편 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_SIMUXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * HRMA0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsTM_SIMUXM     = (List) saveData.get("dsTM_SIMUXM");
		List dsTM_SIMUXM_Del = (List) saveData.get("dsTM_SIMUXM_DELETE");

		List dsFL_ATTACH     = (List) saveData.get("dsFL_ATTACH");
		List dsFL_ATTACH_Del = (List) saveData.get("dsFL_ATTACH_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_SIMUXM_Del.size(); i++) {

        	rowVo = (Map) dsTM_SIMUXM_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_SIMUXM.size(); i++) {

			rowVo = (Map) dsTM_SIMUXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE00(rowVo);

			}

			iTotCnt++;

		}
		logger.debug("----test dsFL_ATTACH_Del----["+dsFL_ATTACH_Del.size());
		logger.debug("----test dsFL_ATTACH----["+dsFL_ATTACH.size());

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsFL_ATTACH_Del.size(); i++) {

        	rowVo = (Map) dsFL_ATTACH_Del.get(i);
        	logger.debug("----test delete----["+rowVo.get("FILE_IDXX")+"]["+rowVo.get("PFIL_NAME"));
			//iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFL_ATTACH.size(); i++) {

			rowVo = (Map) dsFL_ATTACH.get(i);
			logger.debug("----test insert----["+rowVo.get("FILE_IDXX")+"]["+rowVo.get("PFIL_NAME"));
			//iTotCnt++;

		}

		logger.debug("----test attachFileService----["+this.getClass().getSimpleName().substring(0, 8));

		attachFileService.deleteFile(dsFL_ATTACH_Del);
		attachFileService.uploadFiles(dsFL_ATTACH, this.getClass().getSimpleName().substring(0, 8), "");

		return iTotCnt;

	}
}
