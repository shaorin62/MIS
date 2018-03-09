package core.erp.tmm.service;

import java.util.Map;											

/**
 * <pre>
 *	TMMA0230Service - 일정 테이블 조회
 * <p><b>NOTE : 일정 테이블 조회</b></p>
 * </pre>
 * 
 * @author	신일용 <sil@inbus.co.kr>
 * @since	2014. 10. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 16.	신일용		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface TMMA0230Service {

    /**
     * <pre>
     * Meta 오류자료 조회
     * </pre>
     *
     * @param searchVO - 조회할 정보가 담긴 VO
     * @return 
     * @throws Exception
     */	
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
    /**
     * <pre>
     * 일정 입력,수정,삭제 처리
     * </pre>
     *
     * @param saveData - 등록할 정보가 담긴 VO
     * @return 
     * @throws Exception
     */	
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

}
