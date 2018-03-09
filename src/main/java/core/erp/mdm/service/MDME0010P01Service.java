/**
 * core.erp.mdm.service.MDME0010P01Service.java - <Created by Code Template generator>
 */
package core.erp.mdm.service;

import java.util.Map;

/**
 * <pre>
 *	MDME0010P01Service - 옥외 개별청약 전체복사(신규) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.14
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.14	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MDME0010P01Service {

	/**
	 * <pre>
	 * 옥외 개별청약 전체복사(신규) 프로그램 저장한다.
	 * </pre>
	 *
	 * @param param - 저장할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
}