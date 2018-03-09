package core.erp.tmm.service;

import java.util.Map;

/**
 * <pre>
 *	TMMD0010Service - 단위테스트관리
 * <p><b>NOTE : 단위테스트관리</b></p>
 * </pre>
 *
 * @author	신일용 <sil@inbus.co.kr>
 * @since	2014. 10. 15.
 * @version	1.0
 * @see		{@link }
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 15.	신일용		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface TMMD0010Service {

    /**
     * <pre>
     * 단위테스트관리 조회 처리
     * </pre>
     *
     * @param searchVO - 조회할 정보가 담긴 VO
     * @return
     * @throws Exception
     */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

    /**
     * <pre>
     * 코드 명 조회를 위한 자료 저장 ! (코드 명 저장)
     * </pre>
     *
     * @param saveData - 등록할 정보가 담긴 VO
     * @return
     * @throws Exception
     */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

}
