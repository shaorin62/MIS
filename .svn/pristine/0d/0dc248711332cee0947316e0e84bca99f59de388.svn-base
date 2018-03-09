package core.ifw.utl;


import java.security.MessageDigest;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;


/**
 * Created by INBUS Co.Ltd.
 * User : 김석두
 * Date : 2014. 11. 24
 * Time : 오후 4:49:58
 * <p/>
 * Method Advice Comment :
 */
public class CryptSHA {

    /**
     * SHA 일반암호화
     * @param s
     * @return
     */
    public static String encrypt(String s) {
    	
        try {
            
        	if(s == null) return "";
            
        	byte abyte0[];
            MessageDigest messagedigest = MessageDigest.getInstance("SHA");
            messagedigest.reset();
            messagedigest.update(s.getBytes());
            abyte0 = messagedigest.digest();
            
            return Hex.encodeHexString(abyte0);
            
        }catch(Exception aa){
            return null;
        }
    }

    /**
     * SHA-256 암호화
     * @param s
     * @return
     */
    public static String encrypt256(String s) {

    	try {
            
    		if (s == null) return "";

            byte abyte0[];
            MessageDigest messagedigest = MessageDigest.getInstance("SHA-256");
            messagedigest.reset();
            messagedigest.update(s.getBytes());
            abyte0 = messagedigest.digest();

            return Hex.encodeHexString(abyte0);

        }catch(Exception aa){
            return null;
        }
    
    }

    /**
     * base64 Decode
     * @param s
     * @return
     */
    public static String base64Decode(String s) {

    	try {
            
    		if (s == null) return "";

            byte abyte0[];
            abyte0 = Base64.decodeBase64(s);
    		return new String(abyte0); 
            
        }catch(Exception aa){
            return null;
        }
    
    }
    
    public static String base64Encode(String s) {
    	
    	try {
			
    		if (s == null) return "";
    		
    		byte[] src = s.getBytes();
    		byte[] dest = Base64.encodeBase64(src);
    		return new String(dest);
    		
		} catch (Exception e) {
			return null;
		}
    }

}
