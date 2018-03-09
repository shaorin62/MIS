package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import core.erp.pay.service.PAYF0090Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0090ServiceImpl - 퇴직연금사업자 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수
 * @since	2016. 9. 7.
 * @version	1.0
 * @see		{@link PAYF0090Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 7.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0090Service")
public class PAYF0090ServiceImpl extends EgovAbstractServiceImpl implements PAYF0090Service {

	/**
	 * 퇴직연금사업자 DAO class inject.
	 */
	@Resource(name = "PAYF0090Dao")
	private PAYF0090Dao dao;

	/**
	 * 퇴직연금사업자 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTBUSI", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 퇴직연금사업자 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings({ "rawtypes" })
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_RTBUSI     = (List) saveData.get("dsPY_RTBUSI");  
		List dsPY_RTBUSI_Del = (List) saveData.get("dsPY_RTBUSI_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_RTBUSI_Del.size(); i++) {
        	rowVo = (Map) dsPY_RTBUSI_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_RTBUSI.size(); i++) {
			rowVo = (Map) dsPY_RTBUSI.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if ( rowType == 1 ) {
				dao.processSAVE00(rowVo);
			} else if ( rowType == 2 ) {
				dao.processUPDATE00(rowVo);
			}
			
			iTotCnt++;
			
		}
		
		return iTotCnt;

	}
}
