package core.erp.evm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.evm.service.EVMD0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	EVMD0010ServiceImpl - 종합평가현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김석영
 * @since	2016.10.26
 * @version	1.0
 * @see		{@link EVMD0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.26	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("EVMD0010Service")
public class EVMD0010ServiceImpl extends EgovAbstractServiceImpl implements EVMD0010Service {

	/**
	 * 종합평가대상 DAO class inject.
	 */
	@Resource(name = "EVMD0010Dao")
	private EVMD0010Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	/**
	 * 종합평가현황을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsEV_WGETXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 종합평가처리
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo);
	}
}
