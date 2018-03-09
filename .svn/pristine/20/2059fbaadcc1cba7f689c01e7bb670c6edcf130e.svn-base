package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

/******************************************************************************
 * <pre>
 *   
 *   프로그램명  : SpSendSpeedBill
 *   클래스명    : SpSendSpeedBillDao.java
 *   작성일자    : 2016. 06. 29
 *   작 성 자    : 황치웅
 *   비   고     : 전자세금계산서 발행
 *   Copyright (c) 2011 Inbus Co.,Ltd All Rights reserved.
 * 
 * </pre> 
 *****************************************************************************/

@Repository("spSendSpeedBillDao")
public class SpSendSpeedBillDao extends EgovAbstractDAO  {

	protected final Log logger = LogFactory.getLog(getClass());

	/*************************
	 * 전자세금계산서발행 !! *
	 *************************/
	@SuppressWarnings("rawtypes")
	public void sendSpeedBill(Map rowVo) throws Exception {

		update("SP_SEND_SPEEDBILL", rowVo);

	}

}
