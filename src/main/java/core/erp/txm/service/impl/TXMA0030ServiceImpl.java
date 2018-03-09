package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMA0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * 부가세자료집계처리 서비스 클래스
 * <p><b>NOTE:</b> 공통코드상세 테이블 Access Service 지원 인터페이스<br/>
 *  AOP 적용으로 서비스 처리 시 Exception 발생여부에 따라 트랜젝션이 관리되므로<br/>
 *  모든 메소드는 Exception을 throw 한다.</p>
 * @author 	한동조 (hdj@inbus.co.kr)
 * @since 	2013.08.28
 * @version 1.0
 * @see
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *  수정일        				수정자				           수정내용
 *  ----------    -------------    ---------------------------
 *  2013.08.28   	  한동조           		최초 생성
 *  2016.08.23                 황치웅          		수정
 *
 * </pre>
 */

/**
 * <pre>
 *	TXMA0030ServiceImpl - 부가세자료집계처리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 3.
 * @version	1.0
 * @see		{@link TXMA0030Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 3.	황치웅		Initial Created.
 * 2016. 8. 3.	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMA0030Service")
public class TXMA0030ServiceImpl extends EgovAbstractServiceImpl implements TXMA0030Service {
	
	/**
	 * 부가세자료집계처리 DAO class inject.
	 */
	@Resource(name = "TXMA0030Dao")
	private TXMA0030Dao tXMA0030Dao;
	
	/**
	 * 부가세마감처리 DAO class inject.
	 */
	@Resource(name = "TXMA0020Dao")
	private TXMA0020Dao tXMA0020Dao;
	

	/**
	 * 부가세자료집계처리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 부가세자료집계처리  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATPROC", tXMA0030Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 부가세자료집계처리 목록을 수정/저장/삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes", "unchecked", "unused" })
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{
		 
		int updateCount 	= 0;
		int deleteCount 	= 0;
		Map rowVo 			= null;
		int rowType 		= 0;
		String rowCoddRef2 	= "";
		boolean vatRawCreate = false;
		
		List dsTA_VATPROC     = (List) saveData.get("dsTA_VATPROC");  
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VATPROC.size(); i++) {
			
			rowVo 		= (Map) dsTA_VATPROC.get(i);
			rowType 	= (Integer) rowVo.get("ROW_TYPE");
			rowCoddRef2 = (String) rowVo.get("CODD_REF2");
			
			rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
			rowVo.put("VAT_YYYY", searchVo.get("VAT_YYYY"));
			rowVo.put("VAT_QUARTER", searchVo.get("VAT_QUARTER"));
			
			String VAT_PROCYN = (String) rowVo.get("VAT_PROCYN");
			
			if ("1".equals(rowCoddRef2) || rowCoddRef2 == "1") {
		
				if (VAT_PROCYN.equals("1")) {
					if (!vatRawCreate)
					{
						tXMA0030Dao.processSAVE01(rowVo);
						vatRawCreate = true;
					}
					
					tXMA0030Dao.processSAVE00(rowVo);
				}
			} 
			
		}
		
		return deleteCount + updateCount;

	}

}
