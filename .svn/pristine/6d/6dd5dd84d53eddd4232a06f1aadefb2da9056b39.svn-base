package core.erp.txm.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * 부가세자료집계처리 Table DAO Class
 * <p><b>NOTE:</b> 부가세자료집계처리(TA_VATCLS) Table CRUD Support. <br/>
 * All Method Must be throw Exception.</p>
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

@Repository("TXMA0015Dao")
public class TXMA0015Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  부가세마감처리를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 예산과목계정매핑관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		return list("TXMA0015.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  부가세마감처리를 저장한다.
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("TXMA0015.SAVE00", dataVo);

	}
}
