package core.erp.evm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.nexacro.xapi.data.DataSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComAttachFileService;
import core.erp.edm.web.EDMA0050Controller;
import core.erp.evm.service.EVMC0050Service;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	EVMC0050ServiceImpl - 조직평가현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김석영
 * @since	2016.10.25
 * @version	1.0
 * @see		{@link EVMC0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.25	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("EVMC0050Service")
public class EVMC0050ServiceImpl extends EgovAbstractServiceImpl implements EVMC0050Service {


	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(EVMC0050ServiceImpl.class);
	
	/**
	 * 목표설정서 DAO class inject.
	 */
	@Resource(name = "EVMC0050Dao")
	private EVMC0050Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	/**
	 * 조직평가현황 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		Object search02 = (DataSet) dao.processSEARCH02(searchVo);	  
		Object search01 = new DataSet();
				
		DataSetUtil.addColumn(search01, "STDS_YEAR" );
		DataSetUtil.addColumn(search01, "SECT_NAME" );
		DataSetUtil.addColumn(search01, "SEMPL_NAME");
		DataSetUtil.addColumn(search01, "AEMPL_NAME");
		DataSetUtil.addColumn(search01, "BEMPL_NAME");
		DataSetUtil.addColumn(search01, "CEMPL_NAME");
		DataSetUtil.addColumn(search01, "DEMPL_NAME");
		DataSetUtil.addColumn(search01, "PRSN_CONT" );
		
		int iRow = 0;
		int iChk = 0;
		int iPrsnCont = 0;

		String sStdsYear = "";
		String sSectName = "";
		String sSectNameTmp = "";
		String sSemplName = "";
		String sAemplName = "";
		String sBemplName = "";
		String sCemplName = "";
		String sDemplName = "";

		for(int i = 0 ; i < DataSetUtil.getRowCount(search02) ; i ++){
			sStdsYear = DataSetUtil.getColumn(search02, i, "STDS_YEAR").toString();
			sSectName = DataSetUtil.getColumn(search02, i, "SECT_NAME").toString();
			
			if(!sSectNameTmp.equals(sSectName) && i > 0){
				iRow = DataSetUtil.insertRow(search01);
				
				DataSetUtil.setColumn(search01, iRow, "STDS_YEAR" , sStdsYear);
				DataSetUtil.setColumn(search01, iRow, "SECT_NAME" , sSectNameTmp);
				DataSetUtil.setColumn(search01, iRow, "SEMPL_NAME", sSemplName);
				DataSetUtil.setColumn(search01, iRow, "AEMPL_NAME", sAemplName);
				DataSetUtil.setColumn(search01, iRow, "BEMPL_NAME", sBemplName);
				DataSetUtil.setColumn(search01, iRow, "CEMPL_NAME", sCemplName);
				DataSetUtil.setColumn(search01, iRow, "DEMPL_NAME", sDemplName);
				DataSetUtil.setColumn(search01, iRow, "PRSN_CONT" , iPrsnCont);
				
				iPrsnCont  = 0;
				sSemplName = "";
				sAemplName = "";
				sBemplName = "";
				sCemplName = "";
				sDemplName = "";
			}
			
			if(DataSetUtil.getColumn(search02, i, "SEMPL_NAME").toString() != "") {
				iPrsnCont ++ ;
				sSemplName += " " + DataSetUtil.getColumn(search02, i, "SEMPL_NAME").toString();
			}
			if(DataSetUtil.getColumn(search02, i, "AEMPL_NAME").toString() != "") {
				iPrsnCont ++ ;
				sAemplName += " " + DataSetUtil.getColumn(search02, i, "AEMPL_NAME").toString();
			}
			if(DataSetUtil.getColumn(search02, i, "BEMPL_NAME").toString() != "") {
				iPrsnCont ++ ;
				sBemplName += " " + DataSetUtil.getColumn(search02, i, "BEMPL_NAME").toString();
			}
			if(DataSetUtil.getColumn(search02, i, "CEMPL_NAME").toString() != "") {
				iPrsnCont ++ ;
				sCemplName += " " + DataSetUtil.getColumn(search02, i, "CEMPL_NAME").toString();
			}
			if(DataSetUtil.getColumn(search02, i, "DEMPL_NAME").toString() != "") {
				iPrsnCont ++ ;
				sDemplName += " " + DataSetUtil.getColumn(search02, i, "DEMPL_NAME").toString();
			}
			
			sSectNameTmp = sSectName;
			iChk = 1;
		}
		
		if (iChk == 1){  
			iRow = DataSetUtil.insertRow(search01);
			
			DataSetUtil.setColumn(search01, iRow, "STDS_YEAR" , sStdsYear);
			DataSetUtil.setColumn(search01, iRow, "SECT_NAME" , sSectNameTmp);
			DataSetUtil.setColumn(search01, iRow, "SEMPL_NAME", sSemplName);
			DataSetUtil.setColumn(search01, iRow, "AEMPL_NAME", sAemplName);
			DataSetUtil.setColumn(search01, iRow, "BEMPL_NAME", sBemplName);
			DataSetUtil.setColumn(search01, iRow, "CEMPL_NAME", sCemplName);
			DataSetUtil.setColumn(search01, iRow, "DEMPL_NAME", sDemplName);
			DataSetUtil.setColumn(search01, iRow, "PRSN_CONT" , iPrsnCont);
		}
 
		returnMap.put("dsEV_DTETPR", search01 );
		returnMap.put("dsEV_DTETXM", dao.processSEARCH00(searchVo));
		returnMap.put("dsEV_WGEGXM", dao.processSEARCH01(searchVo));		
		returnMap.put("dsEV_EVRTXM", dao.processSEARCH03(searchVo));
		return returnMap;

    }
	
	/**
	 * 조직평가현황 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsEV_DTETXM = (List) saveData.get("dsEV_DTETXM");  
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsEV_DTETXM.size(); i++) {

			rowVo = (Map) dsEV_DTETXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
		
}
