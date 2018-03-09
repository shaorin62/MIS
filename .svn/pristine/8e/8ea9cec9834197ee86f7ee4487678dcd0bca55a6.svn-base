package core.ifw.utl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.MessageSource;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComMessageService;

/**
 * 메시지 리소스 사용을 위한 MessageSource 인터페이스 및 ReloadableResourceBundleMessageSource 클래스의 구현체
 * @author 공통서비스 개발팀 이문준
 * @since 2009.06.01
 * @version 1.0
 * @see
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2009.03.11  이문준          최초 생성
 *
 * Copyright (C) 2009 by MOPAS  All right reserved.
 * </pre>
 */
@Service("coreMessageSource")
public class CoreMessageSource extends ReloadableResourceBundleMessageSource implements MessageSource {

    @Resource(name = "ComMessageService")
    protected ComMessageService comMessageService;
    
    /**
     * 메시지 목록
     */
	private List listMessage;

	
    /**
     * 해당되는 메세지를 가지고 옵시다. 이건 메모리에 올려져 있는 값을 기준으로 가지고 온다.
     * @param sMessCode
     * @return
     * @throws Exception
     */
    public String getMessage(String sMessCode) {
        return this.getMessage(sMessCode, null);
	}
	
    /**
     * 해당되는 메세지를 가지고 옵시다. 이건 메모리에 올려져 있는 값을 기준으로 가지고 온다.
     * @param sMessCode
     * @param aArgs
     * @return
     * @throws Exception
     */
    public String getMessage(String sMessCode, String[] aArgs) {
	    
    	// 장성환 - 메시지는 항상 데이터베이스에서 조회(메시지를 변경하였을경우 반영이 안되므로...)
    	Map<String, String> searchVo = new HashMap<String, String>();
    	searchVo.put("MSGE_CODE", sMessCode);
    	
    	Map rec = null;
    	
		try {
			rec = comMessageService.selectComMessage(searchVo);
		} catch (Exception e) {
			logger.warn("예외 발생");
			
		}
    	
        if (!rec.isEmpty() & rec.containsValue(sMessCode)) {
        	
            String sMSGE_CODE = (String) rec.get("MSGE_CODE");
            String sMSGE_CNTT = (String) rec.get("MSGE_CNTT");
            
            if( sMessCode.equals(sMSGE_CODE) ) {
            
                if( sMSGE_CNTT.indexOf("@") != -1  && aArgs != null ) {
                    
                    String[] aMessage = sMSGE_CNTT.split("@");
                    sMSGE_CNTT = "";
                    
                    for (int i = 0; i < aMessage.length; i++) {
                        sMSGE_CNTT += aMessage[i] + (aArgs.length > i ? aArgs[i] : "");
                    }
                    
                    if( aMessage.length == 0 )
                        sMSGE_CNTT += aArgs[0];
                    /*
                    else
                        sMSGE_CNTT += aMessage[ aMessage.length-1 ];
                    */
                }

                return sMSGE_CNTT;
            }
	    
        }
            
	    return "";
	}

}
