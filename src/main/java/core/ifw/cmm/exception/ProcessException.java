/**
 * 
 */
package core.ifw.cmm.exception;


/**
 * @author INBUS
 *
 */
public class ProcessException extends Exception {

	/**
	 * 
	 */
	public ProcessException() {
	}

	/**
	 * @param arg0
	 */
	public ProcessException(String message) {
		super(convertErrorMessage(message));
	}

	/**
	 * @param arg0
	 */
	public ProcessException(Throwable t) {
		
		super(convertErrorMessage(t.getMessage()));
		
	}

	/**
	 * @param message
	 * @param t
	 */
	public ProcessException(String message, Throwable t) {
		super(message, t);
	}
	
	/**
	 * @param t 발생한 예외 객체
	 * @return 예외 메시지를 적절히 변환하여 처리합니다.
	 */
	private static String convertErrorMessage(Throwable t) {
		return convertErrorMessage(t.getMessage());
	}
	
	/**
	 * 
	 * @param message
	 * @return
	 */
	private static String convertErrorMessage(String message) {
		String m = message;
		
		if (message.contains("ORA-00001")) {
			m = "중복 데이터가 존재!!";
		} else if (message.contains("ORA-99233")) {
			m = "오류";
		}
		
		return m;
	}
	
}
