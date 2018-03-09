package core.erp.com.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;


/**
 * 공통 첨부파일 조회 처리하는 DAO
 * <p><b>NOTE:</b> 공통 첨부파일 CRUD 처리를 위한 DAO 클래스. <br/></p>
 *  
 * @author Genie Jang (jsh@inbus.co.kr)
 * @since 2013.06.10
 * @version 1.0
 * @see
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *  수정일        수정자           수정내용
 *  ----------    -------------    ---------------------------
 *  2013.06.10    JSH              최초 생성
 *
 * </pre>
 */

@Repository("comAttachFileDao")
public class ComAttachFileDao extends CmmBaseDAO {
    
    /**
     * 파일 ID를 이용하여 첨부파일 테이블을 조회한다.
     * @param paramMap - 조회할 파일의 파일ID 정보가 담긴 객체
     * @return 조회된 첨부파일 마스터 테이블 목록
     * @exception Exception
     */
    public Object selectFile(Map paramMap) throws Exception {
        return list("COMATTACHFILE.selectFile", paramMap);      
    }
        
    /**
     * 파일 ID를 이용하여 첨부파일상세 테이블을 조회한다.
     * @param paramMap - 조회할 파일의 파일ID 정보가 담긴 객체
     * @return 조회된 첨부파일상세 마스터 테이블 목록
     * @exception Exception
     */
    public Object selectTM_AFILED(Map paramMap) throws Exception {
        return selectByPk("COMATTACHFILE.selectTM_AFILED", paramMap);
    }
    
    /**
     * 첨부파일상세 테이블을 저장한다.
     * @param paramMap - 저장할 파일의 정보가 담긴 객체
     * @return 저장 결과
     * @exception Exception
     */
    public Object insertTM_AFILED(Map paramMap) throws Exception  {
        return insert("COMATTACHFILE.insertTM_AFILED", paramMap);
    }
    
    
    /**
     * 파일 ID, 물리파일명을 이용하여 첨부파일상세 테이블을 수정한다.
     * @param paramMap - 수정할 파일의 정보가 담긴 객체
     * @return 수정 결과
     * @exception Exception
     */
    public int updateTM_AFILED(Map paramMap) throws Exception  {
        return update("COMATTACHFILE.updateTM_AFILED", paramMap);
    }
    
    
    /**
     * 파일 ID를 이용하여 첨부파일상세 테이블을 삭제한다.
     * @param paramMap - 삭제할 파일의 파일ID가 담긴 객체
     * @return 삭제 결과
     * @exception Exception
     */
    public int deleteTM_AFILED(Map paramMap) throws Exception  {
        return delete("COMATTACHFILE.deleteTM_AFILED", paramMap);
    }
    
    
}
