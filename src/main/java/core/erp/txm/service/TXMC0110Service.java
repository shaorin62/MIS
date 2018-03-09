package core.erp.txm.service;

import java.util.Map;

/**
 * <pre>
 *	TXMC0110Service - 영세율매출명세서 서비스 인터페이스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 4.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 4.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
/**
 * <pre>
 *	TXMC0110Service - 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 4.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 4.	황치웅		Initial Created.
 * 2016. 8. 9.	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
/**
 * <pre>
 *	TXMC0110Service - 공제받지못할매입세액명세서
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 4.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 4.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface TXMC0110Service {

	
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	@SuppressWarnings({ "rawtypes"})
	public Object processPRINT00(Map searchVo) throws Exception ;
	
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processPROC00(Map searchVo) throws Exception ;
		
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
}
