/**
 * core.erp.tmm.service.impl.PDMC0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.pdm.service.PDMC0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PDMC0030Controller - 제작견적서-제작용
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.26
 * @version	1.0
 * @see		{@link PDMC0030}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PDMC0030Service")
public class PDMC0030ServiceImpl extends EgovAbstractServiceImpl implements PDMC0030Service {

	/**
	 * 제작견적서 -견적용 DAO class inject.
	 */
	@Resource(name = "PDMC0030Dao")
	private PDMC0030Dao dao;
	
	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;

	/**
	 * 제작관리 화면을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_JOBNXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작관리 하단 견적탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_ESTIMH", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작관리 하단 견적상세 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_ESTIMD", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작관리 하단 외주정산 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03_1(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_ESTIMD02", dao.processSEARCH03_1(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작관리 하단 외주정산 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03_2(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SUJUMD02", dao.processSEARCH03_2(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작관리 하단 제작의뢰 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_JOBNXM03", dao.processSEARCH04(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작관리 하단 제작의뢰 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_FILEXH04", dao.processSEARCH05(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 제작종류 콤보 데이터 가져오기
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH07(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_COMBO", dao.processSEARCH07(searchVo));
		return returnMap;

    }
	
	

	/**
	 * PDMC0030  제작관리 제작물탭 파일 저장
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

		List dsPD_FILEXH04     = (List) saveData.get("dsPD_FILEXH04");  
		List dsPD_FILEXH04_Del = (List) saveData.get("dsPD_FILEXH04_DELETE");

		List dsFL_ATTACH04     = (List) saveData.get("dsFL_ATTACH04");  
		List dsFL_ATTACH04_Del = (List) saveData.get("dsFL_ATTACH04_DELETE");		
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_FILEXH04_Del.size(); i++) {

        	rowVo = (Map) dsPD_FILEXH04_Del.get(i);
        	deleteCount +=  dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_FILEXH04.size(); i++) {

			rowVo = (Map) dsPD_FILEXH04.get(i);
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
		
		attachFileService.deleteFile(dsFL_ATTACH04_Del);
		attachFileService.uploadFiles(dsFL_ATTACH04, this.getClass().getSimpleName().substring(0, 8), "PDCM");

		return deleteCount + updateCount;

	}
	
	
}
