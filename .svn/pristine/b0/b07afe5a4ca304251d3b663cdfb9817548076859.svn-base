/**
 * core.erp.com.service.impl.ComMultiLangDao.java
 */
package core.erp.com.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	ComMultiLangDao - 다국어 적용 관련 데이터베이스 조회, 처리 등을 위한 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	jang.sh <jsh@inbus.co.kr>
 * @since	2016.12.14.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.14.	jang.sh		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("comMultiLangDao")
public class ComMultiLangDao extends CmmBaseDAO {

	
	/**
	 * <pre>
	 * 주어진 다국어 변환코드에 해당하는 내용을 조회하여 반환한다.
	 * </pre>
	 *
	 * @param paramMap - 조회할 다국어 변환코드 내용
	 * @return 변환된 결과
	 * @throws Exception 예외 발생 시
	 */
	public Object processTranslateLanguage(Map<String, Object> paramMap) throws Exception {
		return selectByPk("COMMULTILANG.TRANSLATELANG", paramMap);
	}
	
	
}
