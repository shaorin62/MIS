/**
 * core.erp.source.util.ConvertUtil.java
 */
package core.erp.source.util;

import java.math.BigDecimal;

import com.nexacro.xapi.util.StringUtils;

/**
 * <pre>
 *	ConvertUtil - 소스 변환에 사용되는 유용한 메소드 유틸 클래스
 * </pre>
 *
 * @author	developer <email@inbus.co.kr>
 * @since	2014. 9. 23.
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 9. 23.	developer		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public class ConvertUtil {

	public static String rightPad(String source, int length, char fill) {

		String genStr = "";
		int requireLength = length - source.length();

		if(requireLength > 0) {
			genStr = StringUtils.leftPad(genStr, requireLength, fill);
		}

		return source + genStr;
	}
	
	/**
	 * String 의 null 이면 0 로 리턴한다
	 * 파라미터 :  object
	 */
	public static BigDecimal getBigDecimal(Object obj){
    	
		BigDecimal zero = new BigDecimal("0");
		
		if (obj == null) { return zero; }
		
		String val = String.valueOf(obj);
		
		if (val == null || val.equals("null") || val.equals("") ) { return zero; }
		
		return new BigDecimal(val);
	}
	
	public static BigDecimal getBigDecimalNull(Object obj){
    	
		if (obj == null) { return null; }
		
		String val = String.valueOf(obj);
		
		if (val == null || val.equals("null") || val.equals("") ) { return null; }
		
		return new BigDecimal(val);
	}
	
	public static String leftPad(String str, int length, String padStr) {

		return leftPad(str, length, padStr.charAt(0));

	}

	public static String leftPad(String str, int length, char padChar) {

		int lenStr = str.length();

		if(lenStr >= length) return str;

		char strResult[] = new char[length];
		char strArr[] = str.toCharArray();

		for(int i = 0; i < length; i++) {

			if(i < (length - lenStr)) {
				strResult[i] = padChar;

			} else {
				strResult[i] = strArr[i - (length - lenStr)];

			}

		}

		return new String(strResult);
	}



}
