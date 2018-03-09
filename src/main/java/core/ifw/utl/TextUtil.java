package core.ifw.utl;

import java.io.File;
import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TextUtil {
	
	private static final Logger logger = LoggerFactory.getLogger(TextUtil.class);
	/**
	 * 문자열을 지정된 Token Seperator로 Tokenize한다.<br>
	 * <code>
	 *  String source = "Text token\tis A Good\nAnd bad.";<br>
	 *  String[] result = TextUtil.split(source, " \t\n");<br>
	 *  </code> <code>result</code>는
	 * <code>"Text","token","is","A","Good","And","bad."</code> 를 가지게 된다.
	 * 
	 * @param str
	 *            원본 문자열
	 * @param pattern
	 *            Token Seperators
	 * @return as 토큰들의 배열
	 */
	public static String[] split(String str, String pattern) throws Exception {

		if (str == null)
			return null;

		StringTokenizer strToken = null;
		String[] as = null;

		try {
			strToken = new StringTokenizer(str, pattern);
			int i = strToken.countTokens();
			as = new String[i];
			for (int j = 0; j < i; j++) {
				as[j] = strToken.nextToken();
			}
		} catch (Exception e) {
			// log.error("split()" + e);
			throw e;
		}
		return as;
	}

	/**
	 * 문자열 좌우 공백/탭/개행문자 제거
	 * 
	 * @param String
	 *            str 문자열 값
	 * @return String str 좌우 공백/탭/개행문자 가 제거된 문자열 값
	 * @throws Exception
	 */
	public static String trim(String str) throws Exception {

		if (str == null)
			return "";
		int st = 0;
		int count = 0;
		int len = 0;
		try {
			char[] val = str.toCharArray();
			count = val.length;
			len = count;
			while ((st < len)
					&& ((val[st] <= ' ') || (val[st] == ' ')
							|| (val[st] == '\r') || (val[st] == '\n')))
				st++;
			while ((st < len)
					&& ((val[len - 1] <= ' ') || (val[len - 1] == ' ')))
				len--;
		} catch (Exception e) {
			// log.error("trim()" + e);
			throw e;
		}
		return ((st > 0) || (len < count)) ? str.substring(st, len) : str;
	}

	/**
	 * 문자열 값이 null 이면 "", 아니면 원 문자열 값을 반환한다.
	 * 
	 * @param String
	 *            str 문자열 값
	 * @return String str null 이면 "", 아니면 원 문자열 값
	 * @throws Exception
	 */
	public static String isNull(String str) {

		String sRtn = "";

		try {
			sRtn = str == null ? "" : str;
		} catch (Exception e) {
			// log.error("isNull(str)" + e);
			logger.warn(e.getMessage());
		}
		return sRtn;
	}
	public static String isNull(Object str) {
	    
	    String sRtn = "";
	    
	    try {
	        sRtn = str == null ? "" : str.toString();
	    } catch (Exception e) {
	        // log.error("isNull(str)" + e);
	    	logger.warn(e.getMessage());
	    }
	    return sRtn;
	}

	/**
	 * 문자열 값이 null 이면 val, 아니면 원 문자열 값을 반환한다.
	 * 
	 * @param String
	 *            str 문자열 값
	 * @param String
	 *            val 문자열 값이 null 일경우 반환될 문자열 값
	 * @return String str null 이면 val, 아니면 원 문자열 값
	 * @throws Exception
	 */
	public static String isNull(String str, String val) {
		String sRtn = "";
		try {
			sRtn = (str == null || "".equals(str)) ? val : str;
		} catch (Exception e) {
			// log.error("isNull(str1, str2)" + e);
			logger.warn(e.getMessage());
		}
		return sRtn;
	}
	
	public static String isNull(Object str, String val) {
	    String sRtn = "";
	    try {
	        sRtn = (str == null || "".equals(str)) ? val : str.toString();
	    } catch (Exception e) {
	        // log.error("isNull(str1, str2)" + e);
	    	logger.warn(e.getMessage());
	    }
	    return sRtn;
	}

	/**
	 * num 값에 len 자리수 만큼 '0' 값을 붙힌 문자열 값을 반환한다.
	 * 
	 * @param int
	 *            num 정수 값
	 * @param int
	 *            len 반환될 문자열 수
	 * @return String str len 자리수 만큼 '0' 값을 붙힌 문자열
	 * @throws Exception
	 */
	public static String lpad(int num, int len) throws Exception {

		return lpad(String.valueOf(num), len, '0');
	}

	/**
	 * str 값에 len 자리수 만큼 '0' 값을 붙힌 문자열 값을 반환한다.
	 * 
	 * @param String
	 *            str 원본 문자열
	 * @param int
	 *            len 반환될 문자열 수
	 * @return String str len 자리수 만큼 '0' 값을 붙힌 문자열
	 * @throws Exception
	 */
	public static String lpad(String str, int len) throws Exception {

		return lpad(str, len, '0');
	}

	/**
	 * str 값에 len 자리수 만큼 c 값을 붙힌 문자열 값을 반환한다.
	 * 
	 * @param String
	 *            str 원본 문자열
	 * @param int
	 *            len 반환될 문자열 수
	 * @param char
	 *            c 추가할 문자 값
	 * @return String str len 자리수 만큼 c 값을 붙힌 문자열
	 * @throws Exception
	 */
	public static String lpad(String str, int len, char c) throws Exception {
		if (str == null)
			return "";
		if (len < 0)
			return str;
		StringBuffer buf = null;
		try {
			if (str.length() > len)
				return str.substring(str.length() - len);

			buf = new StringBuffer();
			for (int i = 0; i < len - str.length(); i++) {
				buf.append(c);
			}
			buf.append(str);
		} catch (Exception e) {
			// log.error("lpad()" + e);
			throw e;
		}
		return buf.toString();
	}

	/**
	 * String을 자리수만큼 특정 문자로 채워줌 사용함
	 * 
	 * @param String
	 *            str 검증 대상 파라미터 값
	 * @return String str 유효한 파라미터 값
	 * @throws Exception
	 */
	public static String lpad(String str, int len, String c) throws Exception {
		if (str == null)
			return "";
		if (len < 0)
			return str;
		StringBuffer buf = null;
		try {
			if (str.length() > len)
				return str.substring(str.length() - len);

			buf = new StringBuffer();
			for (int i = 0; i < len - str.length(); i++) {
				buf.append(c);
			}
			buf.append(str);
		} catch (Exception e) {
			// log.error("lpad()" + e);
			throw e;
		}
		return buf.toString();
	}

	/**
	 * String을 자리수만큼 특정 문자로 채워줌 사용함
	 * 
	 * @param String
	 *            str 검증 대상 파라미터 값
	 * @return String str 유효한 파라미터 값
	 * @throws Exception
	 */
	public static String rpad(String str, int len, String c) throws Exception {
		if (str == null)
			return "";
		if (len < 0)
			return str;
		StringBuffer buf = null;
		try {
			if (str.length() > len)
				return str.substring(str.length() - len);

			buf = new StringBuffer();
			buf.append(str);
			for (int i = 0; i < len - str.length(); i++) {
				buf.append(c);
			}

		} catch (Exception e) {
			// log.error("lpad()" + e);
			throw e;
		}
		return buf.toString();
	}

	/**
	 * 한글혼용 문자열을 주어진 길이만큼 자르는 method이다.
	 * 
	 * @param s :
	 *            문자열
	 * @param len :
	 *            제한 길이
	 * @param tail :
	 *            끝에 붙이고자 하는 문자열
	 * @return
	 */
	public static String truncateNicely(String s, int len, String tail) {
		if (s == null)
			return "";

		int srcLen = getRealLength(s);

		if (srcLen < len) {
			return s;
		}

		String tmpTail = (tail == null) ? "" : tail;

		int tailLen = getRealLength(tmpTail);

		if (tailLen > len) {
			return "";
		}

		char a;
		int i = 0;
		int realLen = 0;
		for (i = 0; i < len - tailLen && realLen < len - tailLen; i++) {
			a = s.charAt(i);

			realLen += ((a & 0xFF00) == 0) ? 1 : 2;
		}

		while (getRealLength(s.substring(0, i)) > len - tailLen) {
			i--;
		}

		return s.substring(0, i) + tmpTail;
	}

	/**
	 * 문자열에 대한 실바이트수를 반환하는 method이다.
	 * 
	 * @param str :
	 *            문자열
	 * @return
	 */
	public static int getRealLength(String str) {

		if (str == null)
			return 0;
		return str.getBytes().length;
	}
	
    /**
     * 길이 체크를 합시다.
     * @param nCell
     * @param Size
     * @return
     * @throws Exception
     */
    public static String checkSize(String nCell, int Size) throws Exception {
        return TextUtil.checkValidation(nCell, Size);
    }
    
    
    /**
     * 널 체크를 합시다.
     * @param nCell
     * @return
     * @throws Exception
     */
    public static String checkNull(String nCell) throws Exception {
        return TextUtil.checkValidation(nCell, -1);
    }
    
    
    /**
     * 값 체크를 합시다.
     * @param nCell
     * @param Size
     * @return
     * @throws Exception
     */
    private static String checkValidation(String sCell, int Size) throws Exception {
        
        //1. null 체크를 합시다.
        if( sCell == null || sCell.length() == 0 || sCell == " ")
            return "";
        
        //2. 문자열에 필요없는 문자를 정리합시다.
        sCell = sCell.replaceAll("-", "").trim();
        
        //3. 길이를 비교해서 값을 넘기자.
        if( Size < 0 || sCell.length() == Size) return sCell;
        
        //3-1. 값 비교에 실패하면 에러 던짐.
        else return "";
        
    }
    
    public static String fmtNum( String oTar ) throws Exception {
        return TextUtil.fmtNum((Object) oTar);
    }
    
    public static String fmtNum( Object oTar ) throws Exception {
        try {
            return new DecimalFormat("###,##0.##########").format( oTar );
        } catch(Exception e) {
        	logger.warn(e.getMessage());
        }
        
        return "";
    }
    

    /**
     * 텍스트 코드 변환
     * (모든 대상 명칭을 다 변경할 필요가 있을까?)
     * 여기선 사용하지 말자. 단순 널 체크만
     * @param targetStr
     * @return
     */
    public static String apprEnc(String targetStr) {
        targetStr = TextUtil.isNull(targetStr);
        
        /* 여기선 사용하지 말자. 단순 널 체크만
        for ( int i = 0; i < targetStr.length(); i++ ) {
            char cChar = targetStr.charAt(i);

            if(cChar == '\'')  newStr += "";
//            if(cChar == '\'')  newStr += "%27";
//            else if(cChar == '\"')  newStr += "%22";
//            else if(cChar == '#')   newStr += "%23"; 
//            else if(cChar == '$')   newStr += "%24"; 
//            else if(cChar == '%')   newStr += "%25"; 
//            else if(cChar == '&')   newStr += "%26"; 
//            else if(cChar == '!')   newStr += "%21"; 
//            else if(cChar == '(')   newStr += "%28"; 
//            else if(cChar == ')')   newStr += "%29"; 
//            else if(cChar == '*')   newStr += "%2A"; 
//            else if(cChar == '+')   newStr += "%2B"; 
//            else if(cChar == ',')   newStr += "%2C"; 
//            else if(cChar == '-')   newStr += "%2D"; 
//            else if(cChar == '.')   newStr += "%2E"; 
//            else if(cChar == '/')   newStr += "%2F"; 
//            else if(cChar == ':')   newStr += "%3A"; 
//            else if(cChar == ';')   newStr += "%3B"; 
//            else if(cChar == '<')   newStr += "%3C"; 
//            else if(cChar == '=')   newStr += "%3D"; 
//            else if(cChar == '>')   newStr += "%3E"; 
//            else if(cChar == '?')   newStr += "%3F"; 
//            else if(cChar == '@')   newStr += "%40"; 
//            else if(cChar == '[')   newStr += "%5B"; 
//            else if(cChar == '\\')  newStr += "%5C";
//            else if(cChar == ']')   newStr += "%5D"; 
//            else if(cChar == '^')   newStr += "%5E"; 
//            else if(cChar == '_')   newStr += "%5F"; 
//            else if(cChar == '`')   newStr += "%60"; 
//            else if(cChar == '{')   newStr += "%7B"; 
//            else if(cChar == '|')   newStr += "%7C"; 
//            else if(cChar == '}')   newStr += "%7D"; 
//            else if(cChar == '~')   newStr += "%7E"; 

            else newStr += cChar; //아무것도 없음 그냥 더해놓기
        }
        */
        
        return targetStr;
    }
    
    /*
     * ===================================================================================================
     *  숫자관련
     * ===================================================================================================
     */

    /**
     * 문자열을 숫자형태로 반환
     *
     * @param   pStr            문자열
     *
     * @return      int             생성된 숫자, 변환할 수 없는 값이거나 변환오류시 0.
     */
    public static int getInt( String pStr ) {
        try {
            if ( pStr == null || pStr.trim().equals("") || pStr.trim().equals("null")) {
                return 0;
            } else {
                return Integer.parseInt("" + Math.round(getDouble(pStr.replace(",", ""))));
            }
        } catch( NullPointerException e ) {
            return 0;
        }
    }

    /**
     * 문자열을 숫자형태로 반환
     *
     * @param   String      문자열
     *
     * @return      double      생성된 숫자, 변환할 수 없는 값이거나 변환오류시 0.
     */
    public static double getDouble( String pStr ) {
        try {
            if ( pStr == null || pStr.trim().equals("") || pStr.trim().equals("null")) {
                return 0;
            } else {
                return Double.parseDouble(pStr.replace(",", ""));
            }
        } catch( NullPointerException e ) {
            return 0;
        }
    }
    
    /**
     * Map으로 Argument로 넘어온 값을 반환합시다.
     * 기본은 " " 공백으로 조각을 낸다.
     * @param sArgument
     * @return
     */
    public static Map getArgumentMap(String sArgument) {
        return TextUtil.getArgumentMap(sArgument, " ");
    }
    
    /**
     * Map으로 Argument로 넘어온 값을 반환합시다.
     * @param sArgument
     * @param sSeparator
     * @return
     */
    public static Map getArgumentMap(String sArgument, String sSeparator) {
        Map oRtn = new HashMap();
        
        
        if( sArgument != null && !sArgument.equals("")) {
            
            String[] aArgument = sArgument.split(sSeparator);
            
            for (int i = 0; i < aArgument.length; i++) {
                String sArg = aArgument[i];
                
                if( sArg.indexOf("=") == -1 || sArg.indexOf("=") == 0 ) continue;
                
                
                String[] aArg = sArg.split("=");
                if( aArg.length != 2 )
                	oRtn.put(aArg[0], "");
                else
                	oRtn.put(aArg[0], aArg[1]);
            }
        }
        
        
        return oRtn;
    }
}
