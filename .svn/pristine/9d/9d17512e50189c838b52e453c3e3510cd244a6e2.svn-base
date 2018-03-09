package core.erp.yea.service.impl;

import java.io.File;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.yea.service.YEAA0090_2016Service;
import core.erp.yea.web.YEAA0090_2016Controller;
import core.ifw.utl.CoreProperties;
import core.ifw.utl.DataSetUtil;
import core.ifw.utl.DateTime;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	YEAA0090_2016ServiceImpl - 연말정산전산매체 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.28.
 * @version	1.0
 * @see		{@link YEAA0090_2016Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.10.28.	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("YEAA0090_2016Service")
public class YEAA0090_2016ServiceImpl extends EgovAbstractServiceImpl implements YEAA0090_2016Service {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(YEAA0090_2016Controller.class);

	/**
	 * 연말정산전산매체 DAO class inject.
	 */
	@Resource(name = "YEAA0090_2016Dao")
	private YEAA0090_2016Dao dao;

	/**
	 * 연말정산전산매체 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsYEA_COMP_MED1", dao.processSEARCH00(searchVo));
		returnMap.put("dsYEA_COMP_MED2", dao.processSEARCH01(searchVo));
		returnMap.put("dsYEA_COMP_MED3", dao.processSEARCH02(searchVo));
		return returnMap;

    }	
	
	@SuppressWarnings({ "rawtypes", "null"})
	public String processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String fileName = "";
		 String filePath = "";
		 String filePath_R = "";
		 
		String sSECR_KEYX = CoreProperties.getProperty("CoreMIS.db.secrtkey"); //암호화키
		saveData.put("SECR_KEYX", sSECR_KEYX);			 
		saveData.put("YEA_EMP_NO", saveData.get("GBL_USERID").toString());		//작성자
		
		dao.processSAVE00(saveData);
		Object dataList = (DataSet) dao.processSEARCH03(saveData);
		/*List<Map<String, String>> dataList = (List<Map<String, String>>) dao.processSEARCH03(saveData);

		int vSize = dataList.size();
	    */
		
		String YEA_BIZ_NO = saveData.get("sYEA_BIZ_NO") == null ? "":saveData.get("sYEA_BIZ_NO").toString();
        
		fileName = "C"+YEA_BIZ_NO.substring(0, 7)+"."+YEA_BIZ_NO.substring(7);
		//filePath = CoreProperties.getProperty("CoreMIS.file.upload.path")+"CAL_PDF/"+DateTime.getDateString("yyyy")+"/";
		filePath = CoreProperties.getProperty("CoreERP.file.upload.path")+"CAL_PDF/"+DateTime.getDateString("yyyy")+"/";
		filePath_R = "CAL_PDF/"+DateTime.getDateString("yyyy")+"/";
		File dirs = new File(filePath+fileName);
		
		if(!dirs.exists()) {
			dirs.mkdirs();
		}
		
		File dataFile = new File(filePath + fileName);
		
		if(dataFile.exists()) {
			dataFile.delete();
		}
		
		dataFile = new File(filePath + fileName);
		
		PrintWriter writer 	= new PrintWriter(dataFile, "EUC-KR" );
		String dataStr = "";

		for (int row = 0; row < DataSetUtil.getRowCount(dataList); row++) {
			dataStr = DataSetUtil.getColumn(dataList, row, "YEA_REC_DATA").toString();
			writer.println(dataStr);
		}
		
		//FileOutputStream fos = new FileOutputStream(dataFile);
		/*PrintWriter writer = new PrintWriter(dataFile, "EUC-KR" );
		String dataStr = "";
		Map<String, String> rowMap = null;

		for(int row = 0; row < vSize; row++) {
			rowMap = dataList.get(row);
			dataStr = rowMap.get("YEA_REC_DATA");
			if(row == 0) {
				logger.info(row+" :: "+dataStr);
			}
			writer.println(dataStr);
		}
		*/
		writer.flush();
		writer.close();
		//fos.close();		
		logger.info("vSiz7 : "+fileName);
		
		String returnStr = fileName+","+filePath_R;

		return returnStr;


	}	
}
