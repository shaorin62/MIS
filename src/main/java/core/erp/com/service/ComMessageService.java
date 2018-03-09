

package core.erp.com.service;

import java.util.List;
import java.util.Map;


/**  
 * @Class Name : ComMessageService.java
 * @Description : ComMessage Service Class
 * @Modification Information  
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2010.09.01              최초생성
 * 
 * @author 
 * @since 2010. 09.01
 * @version 1.0
 * @see
 * 
 *  Copyright (C) by INBUS All right reserved.
 */
public interface ComMessageService {

    /**
     * 주어진 메시지코드의 공통 메시지를 조회하자.
     * @param searchVO - 조회할 정보가 담긴 VO
     * @return 해당되는 공통 메시지
     * @exception Exception
     */
    @SuppressWarnings("unchecked")
	public Map selectComMessage(Map searchVo) throws Exception;
    
}

    