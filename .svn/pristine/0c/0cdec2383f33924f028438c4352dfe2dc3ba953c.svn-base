/**
 * 
 */
package core.ifw.log.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.ifw.log.service.CmmLogManageService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 쿼리 실행 로그 기록을 위한 서비스 인터페이스의 구현 클래스
 * @author JSH
 *
 */
@Service("cmmLogManageService")
public class CmmLogManageServiceImpl extends EgovAbstractServiceImpl implements CmmLogManageService {

	/*
	 * logger for this
	 */
	private Logger LOGGER = LoggerFactory.getLogger(CmmLogManageServiceImpl.class);
	
	@Resource(name = "cmmLogManageDao")
	private CmmLogManageDao cmmLogManageDao;
	
	/* (non-Javadoc)
	 * @see core.ifw.log.service.CmmLogManageService#saveDataAccessLog(java.util.Map)
	 */
	public void saveDataAccessLog(Map<String, String> logMap) throws Exception {
		
		/*
		# 파라미터로 전달된 Map 객체에는 다음과 같은 정보가 미리 설정되어있습니다.
		"EXCT_CNTT"  -- 실행 쿼리문
		"CAFN_NAME"  -- 실행 파라미터
		"USER_IDXX"  -- 로그인한 사용자 ID
		"USEX_IPAR"  -- 사용자 IP
		"MENU_IDXX"  -- 메뉴ID
		"REMK_100X"  -- 실행한 DAO 메소드(데이터셋생성 핸들러를 사용한 경우에만)
		*/
		
		try {
			
			
			if ((logMap.get("PGM") == null)
					|| logMap.get("PGM").startsWith("com")
					|| logMap.get("PGM").startsWith("yea")
					|| logMap.get("PGM").startsWith("help"))
				return;
			
			
			
			logMap.put("LOGD_CODE", "Q");	// 로그구분은 쿼리
			logMap.put("UNIQ_KEYX", System.nanoTime() + "");	// 나노타임스트링을 저장
			
			LOGGER.debug("----- System Log : " + logMap.toString());
			cmmLogManageDao.saveDataAccessLog(logMap);
			
		} catch (Exception e) {
			LOGGER.warn(" ---- Error Occurred while save access log : " + e.getLocalizedMessage());
		}
		
	}

}
