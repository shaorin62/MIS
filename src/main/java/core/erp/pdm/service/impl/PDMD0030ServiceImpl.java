/**
 * core.erp.tmm.service.impl.PDMD0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.pdm.service.PDMD0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PDMD0030Controller - 제작 청구완료
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.05
 * @version	1.0
 * @see		{@link PDMD0030}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.05	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PDMD0030Service")
public class PDMD0030ServiceImpl extends EgovAbstractServiceImpl implements PDMD0030Service {

	/**
	 * 제작견적서 -견적용 DAO class inject.
	 */
	@Resource(name = "PDMD0030Dao")
	private PDMD0030Dao dao;
	
	/**
	 * 제작명세서화면 상단 헤더를 조회한다.
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
	 * PDMD0030 제작 청구완료 데이터 수정 및 저장
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

		List dsPD_JOBNXM     = (List) saveData.get("dsPD_JOBNXM");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_JOBNXM.size(); i++) {

			rowVo = (Map) dsPD_JOBNXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				//신규 생성 데이터 없음 청구일자만 수정하여 저장

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}

		}
		
		return deleteCount + updateCount;
	}

	
}
