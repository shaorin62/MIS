package core.erp.pay.service.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.pay.service.PAYF0060Service;
import core.erp.pay.web.PAYF0060Controller;
import core.ifw.utl.CoreProperties;
import core.ifw.utl.DataSetUtil;
import core.ifw.utl.DateTime;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 * PAYF0060ServiceImpl - 퇴직소득전산매체 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author 안윤준
 * @since 2016. 9. 6.
 * @version 1.0
 * @see {@link PAYF0060Service}
 * 
 *      <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 12.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 *      Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0060Service")
public class PAYF0060ServiceImpl extends EgovAbstractServiceImpl implements PAYF0060Service {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PAYF0060Controller.class);

	private static final int String = 0;

	/**
	 * 퇴직소득전산매체 DAO class inject.
	 */
	@Resource(name = "PAYF0060Dao")
	private PAYF0060Dao dao;

	/**
	 * 개인별기본급 목록을 조회한다.
	 * 
	 * @param param
	 *            - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_OFFICE", dao.processSEARCH00(searchVo));
		return returnMap;

	}

	/**
	 * 개인별기본급 목록을 조회한다.
	 * 
	 * @param param
	 *            - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPROC", dao.processSEARCH01(searchVo));
		return returnMap;

	}

	/**
	 * 개인별기본급 목록을 조회한다.
	 * 
	 * @param param
	 *            - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPROT", dao.processSEARCH02(searchVo));
		return returnMap;

	}

	/**
	 * PAYF0010 저장,수정 또는 삭제한다.
	 * 
	 * @param param
	 *            - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception
	 *                예외
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public String processSAVE00(Map saveData, Map searchVo) throws Exception {

		String returnStr = "";
		
		try {
			
			Map rowVo = null;

			List dsSAVE00     = (List) saveData.get("dsSAVE00");
			
			//DataSet의 Row Count만큼 돌면서 Insert Or Update
			for (int i = 0; i < dsSAVE00.size(); i++) {
				rowVo = (Map) dsSAVE00.get(i);
				rowVo.put("STDS_YEAR", searchVo.get("STDS_YEAR"));
				rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
				rowVo.put("PRES_DATE", searchVo.get("PRES_DATE"));
				rowVo.put("EMPL_NUMB", searchVo.get("EMPL_NUMB"));
				searchVo.put("FILE_NAME",rowVo.get("FILE_NAME"));
				dao.processSAVE00(rowVo);
				
			}
			
			Object dataList = (DataSet) dao.processSEARCH03(searchVo);
			
			String fileName   = (String) searchVo.get("FILE_NAME");       //파일명
			String filePath   = CoreProperties.getProperty("CoreERP.file.upload.path") + "tmp_nts/";
			String filePath_R = "tmp_nts/";

			File dirs = new File(filePath);
			if (!dirs.exists()) {
				dirs.mkdirs();
			}
			
			File dataFile = new File(filePath + fileName);
			if (dataFile.exists()) {
				dataFile.delete();
			}

			dataFile = new File(filePath + fileName);

			PrintWriter writer 	= new PrintWriter(dataFile, "EUC-KR" );
			String dataStr = "";

			for (int row = 0; row < DataSetUtil.getRowCount(dataList); row++) {
				dataStr = DataSetUtil.getColumn(dataList, row, "ROWX_DATA").toString();
				writer.println(dataStr);
			}
			
			writer.flush();
			writer.close();
			
			returnStr = fileName + "," + filePath_R;
			
		} catch (Exception e) {
			if (logger.isDebugEnabled() || logger.isInfoEnabled()) {
				logger.debug("Exception occured. " + e.getMessage());
			}

		}
		
		return returnStr;

	}
}
