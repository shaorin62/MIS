package core.erp.trm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRMD0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TRMD0010ServiceImpl - 구매론미지급관리   메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link TRMD0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TRMD0010Service")
public class TRMD0010ServiceImpl extends EgovAbstractServiceImpl implements TRMD0010Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMD0010ServiceImpl.class);

	@Resource(name = "TRMD0010Dao")
	private TRMD0010Dao Dao;
	
	/**
	 * <pre>
	 * 구매론미지급관리  조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPXM", Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	/**
	 * <pre>
	 * 구매론미지급관리 BICNET 전송 처리
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int processPROC00(Map saveData) throws Exception {

		int sSendSeq = 1;
		Integer iCnt = -1;
		String errSTS = "";
		
		ArrayList<HashMap<String, Object>> dsTA_SLIPXM = (ArrayList<HashMap<String, Object>>) saveData.get("dsTA_SLIPXM_SLIP");
		
		java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("yyyyMMddHHmmss", java.util.Locale.KOREA);
		String FILE_NAME = "E" + formatter.format(new java.util.Date());
		
		// DataSet의 Row Count만큼 돌면서 Insert
		for( HashMap<String, Object> data : dsTA_SLIPXM ){
			
			//중복 자료 존재여부 확인
			iCnt =  (Integer) Dao.processSEARCH02(data);

			switch (iCnt) {
		      case 0   : errSTS = "<등록>";	break;
		      case 1   : errSTS = "<전송>";	break;
		      case 2   : errSTS = "<성공>";	break;
		    }

			if( !"".equals(errSTS) ){
				throw new Exception("이미 " +errSTS+"상태의 동일 전송 자료("+data.get("SEND_SLIP_NUMB")+"-"+data.get("SEND_SLIP_LINE")+")가 존재합니다.");
			}
			
			data.put("SEND_SEQ", sSendSeq++);
			data.put("FILE_NAME", FILE_NAME);
			Dao.processPROC00(data);
			
			iCnt = 0;
		}
		
		return sSendSeq;

	}

}
