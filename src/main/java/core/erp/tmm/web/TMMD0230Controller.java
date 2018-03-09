/**
 * erp.tmm.a.web.TMMD0230Controller.java
 */
package core.erp.tmm.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.sql.DataSource;

import kr.co.inbus.DBTransferClient.core.DBTransferCore;

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory; 
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;

import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	TMMD0230Controller - 데이터베이스간 테이블 복사 메뉴를 위한 컨트롤러이다. 
 * <p><b>NOTE : </b>각 구성요소의 변경을 금지하며, 임의 변경으로 인한 데이터베이스 크래시는 책임지지 않습니다.</p>
 * </pre>
 * 
 * @author	Genie. J. <jsh@inbus.co.kr>
 * @since	2014. 1. 14.
 * @version	1.0
 * 
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 1. 14.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 * 
 * 
import kr.co.inbus.DBTransferClient.core.DBTransferCore;
 메이븐에 database-tools.jar 라이브러리가 등록되어야 한다.
<dependency>
  <groupId>kr.co.inbus.mis</groupId>
  <artifactId>database-tools</artifactId>
  <version>1.37</version>
</dependency>

 * 
 */
@Controller
public class TMMD0230Controller {

	/**
	 * logger - Log4j logger 
	 */
	private static final Logger LOGGER = LoggerFactory.getLogger(TMMD0230Controller.class);
	
	@Resource(name = "dataSource")
	private DataSource dataSource;	
	
	/**
	 * <pre>
	 * 원본 데이터베이스의 테이블을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 원본 데이터베이스 접속 정보
	 * @return 테이블 목록
	 */
	@RequestMapping(value="/core/erp/tmm/TMMD0230_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map map = coreRequest.getMapVariableList();
			Map<String, Object> paramMap = new HashMap<String, Object>();

			paramMap.put("type"		, map.get("SRCX_DBMS"));
			paramMap.put("host"		, map.get("SRCX_HOST"));
			paramMap.put("port"		, map.get("SRCX_PORT"));
			paramMap.put("sid"		, map.get("SRCX_SIDX"));
			paramMap.put("user"		, map.get("SRCX_IDXX"));
			paramMap.put("pass"		, map.get("SRCX_PASS"));
			paramMap.put("pattern"	, map.get("TBLX_PTTN"));			
			
			LOGGER.debug("\n============== Database Connection Information============== \n" );
			
			DBTransferCore transfer = new DBTransferCore();
			
			List<Map<String, Object>> tableList = null;	
			tableList = transfer.getTables(paramMap);
			
			LOGGER.debug("Number of tables : " + tableList.size());
			
			DataSet dsDBCONNECT = new DataSet("dsDBCONNECT", "dsDBCONNECT");	//화면 그리드에 바인딩할 데이타셋을 만든다.
			dsDBCONNECT.addColumn("CHK", DataTypes.STRING);	
			dsDBCONNECT.addColumn("TABLE_SCHEM", DataTypes.STRING);	
			dsDBCONNECT.addColumn("TABLE_NAME", DataTypes.STRING);	
			dsDBCONNECT.addColumn("REV1", DataTypes.STRING);
			int dsRow = 0;
			
			for(Map<String, Object> data : tableList) {
				data.put("CHK", "0");
				
				dsRow = dsDBCONNECT.newRow();
				dsDBCONNECT.set(dsRow, "CHK"		, "0");
				dsDBCONNECT.set(dsRow, "TABLE_SCHEM", data.get("TABLE_SCHEM"));
				dsDBCONNECT.set(dsRow, "TABLE_NAME"	, data.get("TABLE_NAME"));
				dsDBCONNECT.set(dsRow, "REV1"		, data.get("REV1"));
			}

			LOGGER.debug("Number of tables : " + tableList.size());
			
			
			Map<String, Object> returnMap = new HashMap<String, Object>();
			returnMap.put("dsDBCONNECT", dsDBCONNECT);
			
			coreResultData.setReturnDataMap(returnMap);
			coreResultData.setResultMessageSuccessSelect();
		
		} catch(Exception e) { 
			LOGGER.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}	
		
		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	/**
	 * <pre>
	 * 원본 데이터베이스의 테이블을 대상 데이터베이스의 테이블에 복사하고 처리결과를 테이블 단위로 반환한다.
	 * </pre>
	 *
	 * @param argDoc - 원본 데이터베이스 접속 정보
	 * @return 테이블 목록
	 */	
	@RequestMapping(value="/core/erp/tmm/TMMD0230_SAVE00.do")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map map = coreRequest.getMapVariableList();
			
			
			for(Object key: map.keySet()){
				
				LOGGER.debug("###########" + key + ":"+map.get(key));
			}
			
			

			Map<String, Object> sourceConnectionInfoMap = new HashMap<String, Object>();
			sourceConnectionInfoMap.put("type", map.get("SRCX_DBMS"));
			sourceConnectionInfoMap.put("host", map.get("SRCX_HOST"));
			sourceConnectionInfoMap.put("port", map.get("SRCX_PORT"));
			sourceConnectionInfoMap.put("sid" , map.get("SRCX_SIDX"));
			sourceConnectionInfoMap.put("user", map.get("SRCX_IDXX"));
			sourceConnectionInfoMap.put("pass", map.get("SRCX_PASS"));
			
			Map<String, Object> destinationConnectionInfoMap = new HashMap<String, Object>();
			destinationConnectionInfoMap.put("type", map.get("DEST_DBMS"));
			destinationConnectionInfoMap.put("host", map.get("DEST_HOST"));
			destinationConnectionInfoMap.put("port", map.get("DEST_PORT"));
			destinationConnectionInfoMap.put("sid" , map.get("DEST_SIDX"));
			destinationConnectionInfoMap.put("user", map.get("DEST_IDXX"));
			destinationConnectionInfoMap.put("pass", map.get("DEST_PASS"));
		
			LOGGER.debug("\n============== Source Database Connection Information ============== \n" + sourceConnectionInfoMap + "\n");
			LOGGER.debug("\n============== Destination Database Connection Information ============== \n" + destinationConnectionInfoMap + "\n");
		
			DBTransferCore transfer = new DBTransferCore();
			
			DataSet dsTBLRESULT = new DataSet("dsTBLRESULT", "dsTBLRESULT");
			dsTBLRESULT.addColumn("TABLE_NAME", DataTypes.STRING);	
			dsTBLRESULT.addColumn("TRESULT", DataTypes.STRING);
			int dsRow = 0;			
		
			Map saveData = coreRequest.getSaveDataSetAll();
			List ds1         = (List) saveData.get("dsDBCONNECT");            //List 객체 생성 - 공통 HEAD
			//List ds1_DELETE  = (List) saveData.get("dsDBCONNECT_DELETE");     //List 객체 생성 - 공통 HEAD
			Map data = null;
			for (int i=0; i < ds1.size(); i++) {
				data = (Map) ds1.get(i);
				
				LOGGER.debug("\n============== COPY DATA Information ============== \n" + (String) data.get("TABLE_SCHEM")+ (String) data.get("TABLE_NAME") + "\n");
				
				boolean result;
				result = transfer.transferTableData(sourceConnectionInfoMap, destinationConnectionInfoMap, (String) data.get("TABLE_SCHEM"), (String) data.get("TABLE_NAME"));
				
				if(result) {
					data.put("TRESULT", "처리완료!");

				} else {
					data.put("TRESULT", "처리 중 오류가 발생하였습니다.");
				}
				
				dsRow = dsTBLRESULT.newRow();
				dsTBLRESULT.set(dsRow, "TABLE_NAME", data.get("TABLE_NAME"));
				dsTBLRESULT.set(dsRow, "TRESULT"   , data.get("TRESULT"));	
				
			}
			
			Map<String, Object> returnMap = new HashMap<String, Object>();
			returnMap.put("dsTBLRESULT", dsTBLRESULT);
			
			coreResultData.setReturnDataMap(returnMap);
			coreResultData.setResultMessageSuccessSelect();
			
		} catch(Exception e) {
			LOGGER.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;		
	}
	
}
