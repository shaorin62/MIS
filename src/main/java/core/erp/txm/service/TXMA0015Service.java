package core.erp.txm.service;

import java.util.Map;

/**
 * 부가세자료집계처리 서비스 인터페이스
 * <p><b>NOTE:</b> 부가세 테이블 Access Service 지원 인터페이스<br/>
 *  AOP 적용으로 서비스 처리 시 Exception 발생여부에 따라 트랜젝션이 관리되므로<br/>
 *  모든 메소드는 Exception을 throw 한다.</p>
 * @author 	한동조 (hdj@inbus.co.kr)
 * @since 	2013. 08. 28
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
public interface TXMA0015Service {
	
	/**
	 * <pre>
	 * 부가세마감등록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 예산과목계정매핑관리 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 부가세마감등록 목록을 수정/저장/삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	
}
