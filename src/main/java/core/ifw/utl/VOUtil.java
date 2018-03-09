package core.ifw.utl;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.Iterator;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import core.erp.com.service.impl.ComMessageServiceImpl;

/**
 * 값들을 셋팅하게 하자.
 * 
 * <br>
 * <br>
 * Copyright Notice: Copyright 1998-2010 By INBUS CO, LTD. All rights reserved.
 * 
 * @author 조 정 호
 * @since: 2010. 12. 11.
 */
public class VOUtil {
	
	private static final Logger logger = LoggerFactory.getLogger(VOUtil.class);
    /**
     * Map을 VO로 변환하게 하자.
     * @param mapData
     * @param sTargetClassName
     * @return
     * @throws Exception
     */
    public static Object setVoObject(Map<String, Object> mapData,
            String sTargetClassName) throws Exception {

        Object instance = null;
        try {
            Class dsClass = Class.forName(sTargetClassName);
            Class[] parameterTypes = new Class[] {};

            Constructor constuctor = dsClass.getConstructor(parameterTypes);
            instance = constuctor.newInstance(new Object[] {});

            Class ctlClass = instance.getClass();

            Iterator<String> it = mapData.keySet().iterator();
            while (it.hasNext()) {
                String sKey = it.next();
                Object sVal = mapData.get(sKey);
                if( sVal == null ) sVal = ""; //값이 null 이면 String 으로 초기화시켜두자.

                String sMethodName = "set" + sKey.substring(0, 1).toUpperCase()
                        + sKey.substring(1);

                Method method = ctlClass.getMethod(sMethodName,
                        new Class[] { sVal.getClass() });
                method.invoke(instance, new Object[] { sVal });
            }
        } catch (Exception e) {
    		logger.warn("예외 발생");    		
            
            throw e;
        }

        return instance;
    }
}
