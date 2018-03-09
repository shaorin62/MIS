/**
 * core.erp.tmm.service.impl.TMMA0200ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.tmm.service.TMMA0200Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0200ServiceImpl - 매뉴얼관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.07.27
 * @version	1.0
 * @see		{@link TMMA0200Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.27	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0200Service")
public class TMMA0200ServiceImpl extends EgovAbstractServiceImpl implements TMMA0200Service {

	/**
	 * 매뉴얼관리 DAO class inject.
	 */
	@Resource(name = "TMMA0200Dao")
	private TMMA0200Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	/**
	 * 매뉴얼관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 매뉴얼관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_MANUAL", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * TMMA0200 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsTM_MANUAL     = (List) saveData.get("dsTM_MANUAL");  
		List dsTM_MANUAL_Del = (List) saveData.get("dsTM_MANUAL_DELETE");

		List dsFL_ATTACH     = (List) saveData.get("dsFL_ATTACH");  
		List dsFL_ATTACH_Del = (List) saveData.get("dsFL_ATTACH_DELETE");	
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_MANUAL_Del.size(); i++) {

        	rowVo = (Map) dsTM_MANUAL_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_MANUAL.size(); i++) {

			rowVo = (Map) dsTM_MANUAL.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			iTotCnt++;
			
		}
		
		/**
		 * 화면에서 dsFL_ATTACH 데이타셋을 만들어서 첨부파일 등록정보만 별도로 넘긴다.
		 * 
		 *  var sInDataSet = "dsTM_EXCLXM=dsTM_EXCLXM:U dsFL_ATTACH=dsFL_ATTACH:U";
		 *				
		 * 
		 * 삭제시(rowStatus:"D") FILE_IDXX PFIL_NAME FILE_PATH
		 * 저장시(rowStatus:"C") 마스터 FILE_IDXX FILE_NAME, 디테일 FILE_PATH PFIL_NAME LFIL_NAME EXTN_NAME
		 * 
		 * 갱신시 화면에서 old file을 삭제로 등록하고, new file을 저장으로 등록한다.
		 * 
		 * FILE_IDXX가 첨부파일별로 독립적으로 생성되기 때문에 삭제, 저장 순서는 상관없다.
		 */		
		attachFileService.deleteFile(dsFL_ATTACH_Del);
		attachFileService.uploadFile(dsFL_ATTACH, this.getClass().getSimpleName().substring(0, 8), "manual");		
		
		return iTotCnt;

	}
}
