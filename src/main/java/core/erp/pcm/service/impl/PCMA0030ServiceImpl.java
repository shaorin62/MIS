/**
 * core.erp.tmm.service.impl.PCMA0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pcm.service.PCMA0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PCMA0030Controller - 제작업종분류 관리
 * </pre>
 *
 * @author	오세훈
 * @since	2016.08.30
 * @version	1.0
 * @see		{@link PCMA0030}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.30	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PCMA0030Service")
public class PCMA0030ServiceImpl extends EgovAbstractServiceImpl implements PCMA0030Service {

	/**
	 * 제작업종분류관리(신규) DAO class inject.
	 */
	@Resource(name = "PCMA0030Dao")
	private PCMA0030Dao dao;

	/**
	 * 제작 견적템플릿 항목 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_TYPEXH", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작 견적템플릿 상세 견적 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_TYPEXD", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * PCMA0030 저장,수정 또는 삭제한다.
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
		 

		List dsPD_TYPEXH     	= (List) saveData.get("dsPD_TYPEXH");  
		List dsPD_TYPEXH_Del 	= (List) saveData.get("dsPD_TYPEXH_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_TYPEXH_Del.size(); i++) {

        	rowVo = (Map) dsPD_TYPEXH_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_TYPEXH.size(); i++) {

			rowVo = (Map) dsPD_TYPEXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				//삽입의 경우 키를 채번
				int TYPE_CODE = dao.getTYPE_CODE();
				rowVo.put("TYPE_CODE", TYPE_CODE);
				
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	
	/**
	 * PCMA0031  템플릿 하단의 견적을 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 

		List dsPD_TYPEXD     = (List) saveData.get("dsPD_TYPEXD");  
		List dsPD_TYPEXD_Del 	= (List) saveData.get("dsPD_TYPEXD_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_TYPEXD_Del.size(); i++) {

        	rowVo = (Map) dsPD_TYPEXD_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_TYPEXD.size(); i++) {

			rowVo = (Map) dsPD_TYPEXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				
				String TYPE_CODE = rowVo.get("TYPE_CODE").toString();
				
				//삽입의 경우 키를 채번
				int ITEM_SEQE = dao.getITEM_SEQE(TYPE_CODE);
				
				rowVo.put("ITEM_SEQE", ITEM_SEQE);
				
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE01(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}

}
