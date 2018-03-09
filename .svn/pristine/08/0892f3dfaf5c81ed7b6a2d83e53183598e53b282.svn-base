package core.erp.com.service;

import java.util.List;
import java.util.Map;


/**
 * 공통 첨부파일(첨부파일 업/다운로드 조회) 서비스 인터페이스
 * <p>
 * <b>NOTE:</b> 공통 첨부파일 Access Service Interface <br/>
 * </p>
 * 
 * @author Genie Jang (jsh@inbus.co.kr)
 * @since 2013.04.30
 * @version 1.0
 * @see
 * 
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *  수정일        수정자           수정내용
 *  ----------    -------------    ---------------------------
 *  2013.04.30    JSH              최초 생성
 * 
 * </pre>
 */
public interface ComAttachFileService {
	
    
	/**
	 * 파일 ID를 이용하여 첨부파일 테이블을 조회한다.
	 * @param param - 조회할 파일의 파일ID 정보가 담긴 객체
	 * @return 조회된 첨부파일 마스터 테이블 목록
	 * @exception Exception
	 */
	public Object getFile(Map param) throws Exception ;
	
	
    /**
     * 첨부파일 디테일 테이블에서 삭제한다. 디테일이 모두 삭제되면 헤더도 삭제한다. 헤더만 따로 삭제하는 로직은 없음
     * @param paramMap - 조회할 정보가 담긴 Map 객체
     * @return 삭제한 갯수
     * @exception Exception
     */
	public int deleteTM_AFILED(Map param) throws Exception ;
	
	
    /**
     * 첨부파일을 업로드하고 첨부파일 테이블에 파일 정보를 저장합니다.
     *
     * @param files - 업로드 할 파일 정보를 포함한 DataList
     * @param menuId - 업로드 하는 화면ID
     * @param savePath - 세부 저장 경로
     * @return 업로드 한 파일 건수
     * @throws Exception
     * @deprecated 신규함수 추가로 이 함수는 Deprecated 되었습니다.
     *     함수 {@link #uploadFiles(List, String, String) uploadFiles} 함수를 이용하시기 바랍니다.
     */
    @Deprecated
    public int uploadFile(List list, String menuId, String savePath) throws Exception ;

    /**
     * 업로드 한 파일을 삭제한다!
     * @param files - 삭제할 파일정보가 담긴 벡터 객체
     * @return 삭제 결과
     * @exception Exception
     */
    public int deleteFile(List list) throws Exception ;
    
    
    /**
     * <pre>
     * 업로드 된 첨부파일을 처리하고 데이터를 저장합니다.
     * </pre>
     *
     * @param files - 파일 목록
     * @param menu - 파일을 업로드한 메뉴(프로그램)
     * @param savePath - 하위 디렉토리 경로입니다. 업무영역 디렉토리 하위에 해당 디렉토리에 파일을 저장합니다.
     * @return 업로드한 건수
     * @throws Exception 예외발생 시
     */
    public int uploadFiles(List<Map<String, Object>> files, String menu, String savePath) throws Exception;
    
    
    /**
     * <pre>
     * 업로드 파일을 외부처리 가능하도록 웹 컨텍스트 하위에 기록합니다.
     * </pre>
     *
     * @param files - 파일 목록
     * @param menu - 파일을 업로드한 메뉴(프로그램)
     * @param savePath - 하위 디렉토리 경로입니다. 업무영역 디렉토리 하위에 해당 디렉토리에 파일을 저장합니다.
     * @return 업로드한 건수
     * @throws Exception 예외발생 시
     */
    public int uploadFilesOutbound(List<Map<String, Object>> files, String menu, String savePath) throws Exception;
	
}
