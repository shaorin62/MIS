package core.ifw.utl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringEscapeUtils;
import org.apache.commons.lang.StringUtils;

public class StrUtil {
	
	
    /**
     * toString 하기전에 null 인지 확인함
     * 
     * @param sBaseStr
     * @return
     * @throws Exception
     */	
    public static String toNotNullString(Object obj) {
    
        if(obj == null)
            return "";
        else
            return obj.toString();
    }
    
    /**
     * URL 로 넘어온 값을 디코드 해서 넘겨줍시다.
     * (서버 설정에 따라 다를 수 있음. 차후 제외할지 여부 확인 필요)
     * 
     * @deprecated
     * @param sBaseStr
     * @return
     * @throws Exception
     */
    public static String decUrl( String sBaseStr ) throws Exception {
        
        if( sBaseStr != null && !sBaseStr.equals("") )
            return new String(sBaseStr.getBytes("8859_1"), "euc-kr");
        
        return "";
    }
    
    /**
     * 문자열을 구분자로 분리시켜서 List 타입으로 반환시키자.
     * 
     * @param sBaseStr
     * @param extr
     * @return
     * @throws Exception
     */
    public static List<String> splitByList(String sBaseStr, String extr) throws Exception {
        List<String> listRtn = new ArrayList<String>();
        
        if( sBaseStr != null 
                && !sBaseStr.equals("") 
                && extr != null
                && !extr.equals("")) {
            
            String[] aBaseStr = sBaseStr.split(extr);
            for (int i = 0; i < aBaseStr.length; i++) {
                listRtn.add( aBaseStr[i] );
            }
        }
        
        return listRtn;
    }

    public static String cleanXSS(String value) { 
    	
    	if (value == null) {
    		return value;
    	}
    	
	    //You'll need to remove the spaces from the html entities below 
		value = value.replaceAll("<", "&lt;").replaceAll(">", "&gt;"); 
		value = value.replaceAll("\\(", "&#40;").replaceAll("\\)", "&#41;"); 
		value = value.replaceAll("'", "&#39;"); 
		value = value.replaceAll("eval\\((.*)\\)", ""); 
		value = value.replaceAll("[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']", "\"\""); 
		value = value.replaceAll("script", "");
		value = value.replaceAll("alert", "");
		value = value.replaceAll("document", "");
		value = value.replaceAll("window", "");
		value = value.replaceAll("cookie", "");
		value = StringEscapeUtils.escapeHtml(value);
		value = StringEscapeUtils.escapeSql(value);
		return value; 
	}
    
    public static String nullParam(Object parameterValue) {

        String value = "";
        
        if (parameterValue == null) {
            return "";
        }
        
        value = parameterValue.toString();
        return value;
        
    }
    
    /**
     * <pre>
     * 원본문자열을 주어진 구분자로 분할한 후, Map의 값으로 치환합니다.
     * Map의 값과 치환하기 위한 키 값은 분할된 원본 문자열을 이용합니다.
     * 예를 들어 원본 문자열이 "abc|key|fge"이고 Map에 "key" 라는 키 값을 가진 문자열 "123"이 있다면,
     * 원본 문자열은 각각 "abc", "key", "fge"로 분할된 후, Map에서 각각 자신을 키로 하여 값을 찾게 됩니다.
     * 따라서 최종 결과값은 "abc123fge" 처럼 Map의 값을 이용하여 치환된 후 반환됩니다.
     * </pre>
     *
     * @param sourceStr 치환할 원본 문자열입니다.
     * @param keyMap 원본 문자열의 내용과 치환 될 값을 가진 java.util.Map 형식 객체입니다.
     * @param delimiter 원본 문자열을 분할하기 위한 구분자 입니다.
     * @return 치환 된 문자열
     */
    public static String replaceQueryStr(String sourceStr, Map<String, Object> keyMap, String delimiter) {
    	
    	String replacement = "";
    	
    	String[] arrStrJoin = StringUtils.split(sourceStr, delimiter);
    	int length = arrStrJoin.length;
    	
    	String key = "";
    	String value = "";
    	
    	for(int idx = 0; idx < length; idx++) {
    		key = arrStrJoin[idx];
    		if (keyMap.containsKey(key)) {
    			value = "'".concat(String.valueOf(keyMap.get(key))).concat("'");
    		} else {
    			value = key;
    		}
    		
    		replacement = replacement.concat(value);
    		
    	}
    	
    	return replacement;
    	
    }
    
}

