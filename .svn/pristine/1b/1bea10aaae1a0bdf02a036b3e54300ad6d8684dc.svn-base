package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;

import core.erp.txm.service.TXMA0015Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * 부가세자료집계처리 서비스 클래스
 * <p><b>NOTE:</b> 공통코드상세 테이블 Access Service 지원 인터페이스<br/>
 *  AOP 적용으로 서비스 처리 시 Exception 발생여부에 따라 트랜젝션이 관리되므로<br/>
 *  모든 메소드는 Exception을 throw 한다.</p>
 * @author 	한동조 (hdj@inbus.co.kr)
 * @since 	2013.08.28
 * @version 1.0
 * @see
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *  수정일        수정자           수정내용
 *  ----------    -------------    ---------------------------
 *  2013.08.28    한동조           최초 생성
 *
 * </pre>
 */

@Service("TXMA0015Service")
public class TXMA0015ServiceImpl extends EgovAbstractServiceImpl implements TXMA0015Service {
	
	/**
	 * 예산과목계정매핑관리 관리 DAO class inject.
	 */
	@Resource(name = "TXMA0015Dao")
	private TXMA0015Dao tXMA0015Dao;

	/**
	 * 부가세자료집계처리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 예산과목계정매핑관리  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATXXM", tXMA0015Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 부가세자료집계처리 목록을 수정/저장/삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;
		
		List dsTA_VATXXM     = (List) saveData.get("dsTA_VATXXM");  
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VATXXM.size(); i++) {
			rowVo = (Map) dsTA_VATXXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				
				tXMA0015Dao.processSAVE00(rowVo);
				
			} 
			
		}
		
		return deleteCount + updateCount;

	}

}
