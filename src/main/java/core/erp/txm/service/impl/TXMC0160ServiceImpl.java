package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0160Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0160ServiceImpl - 부가가치세신고서
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 5.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 5.	황치웅		Initial Created.
 * 2016. 8.11.	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMC0160Service")
public class TXMC0160ServiceImpl extends EgovAbstractServiceImpl implements TXMC0160Service {
	
	
	/**
	 * 부가가치세신고서  DAO class inject.
	 */
	@Resource(name = "TXMC0160Dao")
	private TXMC0160Dao tXMC0160Dao;

	/**
	 * 부가세마감처리  DAO class inject.
	 */
	@Resource(name = "TXMA0020Dao")
	private TXMA0020Dao tXMA0020Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VAT101_H1", tXMC0160Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT101_H2", tXMC0160Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT101_D", tXMC0160Dao.processSEARCH02(searchVo));	
		returnMap.put("dsVA_VATBRANCH", tXMC0160Dao.processSEARCH07(searchVo));
		return returnMap;

    }
	
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		tXMC0160Dao.processPROC03(searchVo);
		returnMap.put("dsTA_VAT101_H1", tXMC0160Dao.processSEARCH03(searchVo));

		tXMC0160Dao.processPROC04(searchVo);
		returnMap.put("dsTA_VAT101_H2", tXMC0160Dao.processSEARCH04(searchVo));
		
		tXMC0160Dao.processPROC05(searchVo);
		returnMap.put("dsTA_VAT101_D", tXMC0160Dao.processSEARCH05(searchVo));
		
		return returnMap;
		
	}

	/**
	 * 부가세마감처리를 저장한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData) throws Exception{
		 
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;
		
		List dsTA_VAT101_H1     = (List) saveData.get("dsTA_VAT101_H1");
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT101_H1.size(); i++) {
			rowVo = (Map) dsTA_VAT101_H1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			//부가세마감체크
			//tXMA0020Dao.processSEARCH00(rowVo);
			tXMC0160Dao.processSAVE00(rowVo);
			updateCount++;
		}
		
		List dsTA_VAT101_H2     = (List) saveData.get("dsTA_VAT101_H2");
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT101_H2.size(); i++) {
			rowVo = (Map) dsTA_VAT101_H2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			//부가세마감체크
			//tXMA0020Dao.processSEARCH00(rowVo);
			tXMC0160Dao.processSAVE01(rowVo);
			updateCount++;
		}
		
		List dsTA_VAT101_D     = (List) saveData.get("dsTA_VAT101_D");
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT101_D.size(); i++) {
			rowVo = (Map) dsTA_VAT101_D.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			//부가세마감체크
			//tXMA0020Dao.processSEARCH00(rowVo);
			tXMC0160Dao.processSAVE02(rowVo);
			updateCount++;
		}
		
		return updateCount;

	}

}
