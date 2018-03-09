package core.ifw.cmm.request;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro.xapi.tx.PlatformException;



/**
 * Request 기반으로 Xplatform 에 들어 있는 DataSet 이랑 Variable 을 가지고 오도록 하자.
 *
 * @author 조정호
 * @since 2011.07.18
 * @version 1.0
 * @see <pre>
 * &lt;&lt; 개정이력(Modification Information) &gt;&gt;
 *
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2011.07.18  조정호          최초 생성
 *   2014.09.15  장성환		   넥사크로 처리 추가
 *
 * Copyright (C) 2011 INBUS All right reserved.
 * </pre>
 */

public class CoreRequest {
    /**
     * Logger for this class
     */
    private static final Logger logger = LoggerFactory.getLogger(CoreRequest.class);

    private CoreRequestIF coreRequest;
    private CALL_TYPE eCALL_TYPE;

    /**
     * Request 기반 마이플랫폼 Request 추출
     *
     * @param request
     * @throws IOException
     * @throws PlatformException
     */
    public CoreRequest(HttpServletRequest request) throws Exception {
        String sCALL_TYPE = request.getParameter("CALL_TYPE");
        if( sCALL_TYPE == null || sCALL_TYPE.equals("") ) {
            eCALL_TYPE = CALL_TYPE.NEXACRO;
        } else if (sCALL_TYPE.equals("NEXACRO")) {
        	eCALL_TYPE = CALL_TYPE.NEXACRO;
        	coreRequest = new CoreRequestNexacro(request);
        }
    }

    /**
     * 조회 type을 지정하자.
     * @return
     */
    public CALL_TYPE getCALL_TYPE() {
        return eCALL_TYPE;
    }

    /**
     * VariableList Map 리턴
     *
     * @return
     */
    public Map getMapVariableList() {
        return coreRequest.getMapVariableList();
    }


    /**
     * 이름에 해당하는 데이타 셋을 List<Map<String, ?>> 로 변환하여 리턴
     *
     * @param dsname
     * @return
     * @throws Exception
     */
    public List getDataSet(String dsname) throws Exception {
    	return coreRequest.getDataSet(dsname);
    }


    /**
     * 이름에 해당하는 데이타 셋을 첫번째 한건만 가지고 와서 Map<String, ?> 로 변환하여 리턴
     *
     * @param dsname
     * @return
     * @throws Exception
     */
    public  Map getDataSetOnRow(String dsname) throws Exception {
		return coreRequest.getDataSetOnRow(dsname);
    }

    /**
     * 들어온 모든 Dataset 을 반환한다.
     *
     * @param dsname
     * @return
     * @throws Exception
     */
    public  Map getDataSetAll() throws Exception {
        return coreRequest.getDataSetAll();
    }


    public Map getSaveDataSetAll() throws Exception {
    	return coreRequest.getSaveDataSetAll();
    }
    
    
    /**
     * <pre>
     * 세션의 값을 가져온다.
     * </pre>
     *
     * @param name - 가져올 세션 값 이름
     * @return 세션에 저장된 값, 값이 없으면 null을 반환한다.
     * @throws Exception 지정되지 않은 예외 발생 시
     */
    public Object getSessionValue(String name) throws Exception {
    	return coreRequest.getSessionValue(name);
    }
    

}
