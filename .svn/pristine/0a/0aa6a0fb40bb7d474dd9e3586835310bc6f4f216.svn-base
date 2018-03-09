/**
 * core.erp.tmm.service.impl.PDMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.pdm.service.PDMA0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PDMA0010Controller - 계약서 파일관리
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.20
 * @version	1.0
 * @see		{@link PDMA0010}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.20	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PDMA0010Service")
public class PDMA0010ServiceImpl extends EgovAbstractServiceImpl implements PDMA0010Service {

	/**
	 * 계약관리 화면 DAO class inject.
	 */
	@Resource(name = "PDMA0010Dao")
	private PDMA0010Dao dao;
	
	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	

	/**
	 * 계약서 파일관리 화면을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_FILEXH", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * PDMA0010  제작 계약서 파일관리 데이터 저장 및 수정
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

		List dsPD_FILEXH     = (List) saveData.get("dsPD_FILEXH");  
		List dsPD_FILEXH_Del = (List) saveData.get("dsPD_FILEXH_DELETE");

		List dsFL_ATTACH     = (List) saveData.get("dsFL_ATTACH");  
		List dsFL_ATTACH_Del = (List) saveData.get("dsFL_ATTACH_DELETE");		
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_FILEXH_Del.size(); i++) {

        	rowVo = (Map) dsPD_FILEXH_Del.get(i);
        	deleteCount +=  dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_FILEXH.size(); i++) {

			rowVo = (Map) dsPD_FILEXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				//제작번호생성
				String sFILE_NUMB = (String) rowVo.get("FILE_NUMB");
				
				if(sFILE_NUMB == "" || sFILE_NUMB == null){
					
					sFILE_NUMB = dao.getFILE_NUMB();
					rowVo.put("FILE_NUMB", sFILE_NUMB );
					
				}
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
			
			
		}
		
		
		attachFileService.deleteFile(dsFL_ATTACH_Del);
		attachFileService.uploadFiles(dsFL_ATTACH, this.getClass().getSimpleName().substring(0, 8), "CONTRACT");

		return deleteCount + updateCount;

	}
	

	
	
}
