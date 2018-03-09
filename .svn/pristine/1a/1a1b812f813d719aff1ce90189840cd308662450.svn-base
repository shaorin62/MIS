package core.erp.tmm.service.impl;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.tmm.service.TMMD0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TMMD0010ServiceImpl - 단위테스트관리
 * <p><b>NOTE : 단위테스트관리</b></p>
 * </pre>
 *
 * @author	신일용 <sil@inbus.co.kr>
 * @since	2014. 10. 15.
 * @version	1.0
 * @see		{@link }
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 15.	신일용		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TMMD0010Service")
public class TMMD0010ServiceImpl extends EgovAbstractServiceImpl implements TMMD0010Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMD0010ServiceImpl.class);

	@Resource(name="TMMD0010Dao")
	private TMMD0010Dao TMMD0010Dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;

    /**
    *
    * @param searchVO - 조회할 정보가 담긴 VO
    * @return 단위테스트관리 조회 처리
    * @exception Exception
    */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_TESTXM", TMMD0010Dao.processSEARCH00(searchVo));
		return returnMap;
    }

    /**
    *
    * @param voList - 등록할 정보가 담긴 SampleVO
    * @exception Exception
    */
	@Override
	@SuppressWarnings({ "rawtypes", "deprecation" })
	public int processSAVE00(Map saveData) throws Exception{

		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		 /**
		 * Row Type
		 * 1 : Insert
		 * 2 : Update
		 * 3 : Delete
		 */

		List dsTM_TESTXM = (List) saveData.get("dsTM_TESTXM");
		List dsTM_TESTXM_DELETE = (List) saveData.get("dsTM_TESTXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_TESTXM_DELETE.size(); i++) {
			rowVo = (Map) dsTM_TESTXM_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;

        	//ColumnName = new String [] {"TEST_DATE","EMPL_NUMB","SRAL_NUMB"};
			logger.info("Delete : "+ rowVo);
			deleteCount += TMMD0010Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_TESTXM.size(); i++) {
			rowVo = (Map) dsTM_TESTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			logger.info("SAVE/UPDATE : " + rowVo);

			if (rowType == 1) {
				TMMD0010Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += TMMD0010Dao.processUPDATE00(rowVo);

			}

		}

		List dsFL_ATTACH     = (List) saveData.get("dsFL_ATTACH");
		List dsFL_ATTACH_Del = (List) saveData.get("dsFL_ATTACH_DELETE");

		attachFileService.deleteFile(dsFL_ATTACH_Del);
		attachFileService.uploadFile(dsFL_ATTACH, this.getClass().getSimpleName().substring(0, 8), "excelsample");

		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
}
