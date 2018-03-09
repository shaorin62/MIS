package core.erp.txm.service.impl;

import java.io.File;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.txm.service.TXMD0080Service;
import core.ifw.utl.CoreProperties;
import core.ifw.utl.DateTime;

/**
 * <pre>
 *	TXMD0080Service - 재산분 주민세
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 23
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 23.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMD0080Service")
public class TXMD0080ServiceImpl extends EgovAbstractServiceImpl implements TXMD0080Service {

	private static final Logger logger = LoggerFactory.getLogger(TXMD0080ServiceImpl.class);

	@Resource(name="TXMD0080Dao")
	private TXMD0080Dao tXMD0080Dao;
	
	/**
	 * 작성자 : 김준수
	 * 일시 : 2016 06 23
	 * 내용 :재산분 주민세 정보를 조회한다.
	 * @param param - 조회조건 
	 * @return dsTA_JUMIPR
	 * @exception Exception 예외
	 */
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCOMP_MED1", tXMD0080Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCOMP_MED2", tXMD0080Dao.processSEARCH01(searchVo));
		return returnMap;
	}
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCOMP_MED3", tXMD0080Dao.processSEARCH02(searchVo));
		return returnMap;
	}
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCOMP_MEDI", tXMD0080Dao.processSEARCH04(searchVo));
		return returnMap;
	}

	@SuppressWarnings({ "rawtypes", "null"})
	public String processSAVE00(Map searchVo, Map saveData) throws Exception{

		Map rowVo 			= null;
		String dataStr		= "";

		String fileName 	= "";
		String filePath 	= "";
		String filePath_R 	= "";
		
		// 파일명, 파일경로 셋팅
		String BSNS_NUMB = (String) searchVo.get("BSNS_NUMB");

		fileName 	= "I" + BSNS_NUMB.substring(0, 7) + "." + BSNS_NUMB.substring(7);
		filePath 	= CoreProperties.getProperty("CoreERP.file.upload.path") + "tmp_nts/";
		filePath_R 	= "tmp_nts/";
		
		// 디렉토리 생성
		File dirs 	= new File(filePath+fileName);
		if (!dirs.exists()) dirs.mkdirs();

		// 파일생성
		File dataFile = new File(filePath + fileName);
		if (dataFile.exists()) dataFile.delete();

		dataFile = new File(filePath + fileName);
		
		// 파일쓰기
		PrintWriter writer	= new PrintWriter(dataFile, "EUC-KR" );
		List dsCOMP_MEDI	= (List) saveData.get("dsCOMP_MEDI");
		
		for(int i = 0; i < dsCOMP_MEDI.size(); i++) {
			
			rowVo 	= (Map) dsCOMP_MEDI.get(i);
			dataStr = (String) rowVo.get("RECD_DATA");
			
			if (i == 0) logger.debug(i + " :: " + dataStr);
			
			writer.println(dataStr);
		
		}

		writer.flush();
		writer.close();

		String returnStr = fileName + "," + filePath_R;
		logger.debug("returnStr : "+returnStr);

		return returnStr;

	}	

	
}
