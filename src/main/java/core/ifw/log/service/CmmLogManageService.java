/**
 * 
 */
package core.ifw.log.service;

import java.util.Map;

/**
 * 쿼리 실행 로그 기록을 위한 서비스 인터페이스
 * @author 
 *
 */
public interface CmmLogManageService {
	
	/**
	 * SQL 실행 로그를 저장한다.
	 * @param logMap
	 * @throws Exception
	 */
	void saveDataAccessLog(Map<String, String> logMap) throws Exception;
	
}
