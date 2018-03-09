package core.erp.trm.service;

import java.util.Map;


/**
 * <pre>
 *	TRMB0010Service - 차입금거래현황  메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.28	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface TRMB0010Service {

	/**
	 * <pre>
	 * 차입금거래현황 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	public Object processSEARCH01(Map searchVo) throws Exception ;

	public int processSAVE00(Map saveData) throws Exception ;

	public int processPROC00(Map searchVo, Map saveData) throws Exception ;

	public int processPROC01(Map searchVo, Map saveData) throws Exception ;

}
