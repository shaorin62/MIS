package core.erp.yea.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.yea.service.YEAA0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	YEAA0010ServiceImpl - 연말정산환경설정 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.27.
 * @version	1.0
 * @see		{@link YEAA0010Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.10.27.	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("YEAA0010Service")
public class YEAA0010ServiceImpl extends EgovAbstractServiceImpl implements YEAA0010Service {

	/**
	 * 연말정산환경설정 DAO class inject.
	 */
	@Resource(name = "YEAA0010Dao")
	private YEAA0010Dao dao;

	/**
	 * 연말정산환경설정-후처리SQL 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsYEA_MINFOM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 연말정산환경설정-매핑정보 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsYEA_MINFOD", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * YEAA0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{

		int saveupdateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		/**
		 * Row Type
		 * 1 : Insert
		 * 2 : Update
		 * 3 : Delete
		 */

		List dsYEA_MINFOM = (List) saveData.get("dsYEA_MINFOM");            //List 객체 생성
		List dsYEA_MINFOD = (List) saveData.get("dsYEA_MINFOD");            //List 객체 생성
		String stYEA_STD_YY = searchVo.get("YEA_STD_YY").toString();


		//DataSet의 Row Count만큼 돌면서 Insert Or Update(공통코드 대분류)
		for (int i = 0; i < dsYEA_MINFOM.size(); i++) {
			rowVo = (Map) dsYEA_MINFOM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			rowVo.put("YEA_STD_YY", stYEA_STD_YY);

			if (rowType == 3) continue;

			if (rowType == 1) {
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				dao.processSAVE00(rowVo);
				
			}
			
			saveupdateCount++;

		}


		//DataSet의 Row Count만큼 돌면서 Insert Or Update(공통코드 대분류)
		for (int i = 0; i < dsYEA_MINFOD.size(); i++) {
			rowVo = (Map) dsYEA_MINFOD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			if (rowType == 1) {
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				dao.processSAVE01(rowVo);
				
			}
			
			saveupdateCount++;

		}

		return deleteCount + saveupdateCount;

	}
	
}
