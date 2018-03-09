package core.erp.hrm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.com.service.ComAttachFileService;
import core.erp.com.service.impl.ComSequenceDao;
import core.erp.hrm.service.HRMB0010Service;
import core.ifw.utl.CryptSHA;
import core.ifw.utl.DateTime;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	HRMB0010ServiceImpl - 인사정보 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.07
 * @version	1.0
 * @see		{@link HRMB0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.07.07	박철영		Initial Created.
 * 2016.08.22	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMB0010Service")
public class HRMB0010ServiceImpl extends EgovAbstractServiceImpl implements HRMB0010Service {

	/**
	 * 인사정보 DAO class inject.
	 */
	@Resource(name = "HRMB0010Dao")
	private HRMB0010Dao dao;

	/**
	 * 기타정보변경요청 DAO
	 */
	@Resource(name = "HRMB0020Dao")
	private HRMB0020Dao dao_MASTXM;

	/**
	 * 가족변경요청 DAO
	 */
	@Resource(name = "HRMB0030Dao")
	private HRMB0030Dao dao_FAMILY;

	/**
	 * 학력보훈변경요청 DAO
	 */
	@Resource(name = "HRMB0040Dao")
	private HRMB0040Dao dao_SCHCRR;

	/**
	 * 자격변경요청 DAO
	 */
	@Resource(name = "HRMB0060Dao")
	private HRMB0060Dao dao_LICEXM;

	/**
	 * 어학변경요청 DAO
	 */
	@Resource(name = "HRMB0070Dao")
	private HRMB0070Dao dao_FRLANG;

	@Resource(name="comSequenceDao")
	private ComSequenceDao dao_comSeq;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
    /**
	 * 인사기본사항 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 인사기본사항 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/**
	 * 인사기타사항 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 인사기타사항 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		Map<String, Object> returnMap = new HashMap<String, Object>();

		returnMap.put("dsHR_MASTXD", dao.processSEARCH01(searchVo)); // 개인신상,장애병역
		returnMap.put("dsHR_SCHCRR", dao.processSEARCH08(searchVo)); // 학력
		returnMap.put("dsHR_BFCARR", dao.processSEARCH02(searchVo)); // 경력
		returnMap.put("dsHR_FAMILY", dao.processSEARCH07(searchVo)); // 가족
		returnMap.put("dsHR_FRLANG", dao.processSEARCH09(searchVo)); // 어학
		returnMap.put("dsHR_LICEXM", dao.processSEARCH06(searchVo)); // 자격먼허
		returnMap.put("dsHR_GRTINS", dao.processSEARCH10(searchVo)); // 보증
		returnMap.put("dsHR_REWARD", dao.processSEARCH04(searchVo)); // 상벌(포상)
		returnMap.put("dsHR_DISCIP", dao.processSEARCH05(searchVo)); // 상벌(징계)
		returnMap.put("dsED_EDRSLT", dao.processSEARCH14(searchVo)); // 교육훈련
		returnMap.put("dsHR_APPOXD", dao.processSEARCH03(searchVo)); // 발령사항
		returnMap.put("dsHR_PASSRR", dao.processSEARCH11(searchVo)); // 여권
		returnMap.put("dsHR_VISARR", dao.processSEARCH12(searchVo)); // 비자
		returnMap.put("dsHR_DUTYRR", dao.processSEARCH13(searchVo)); // 직무
		returnMap.put("dsHR_ATTACH", dao.processSEARCH15(searchVo)); // 파일첨부

		return returnMap;

	}

	/**
	 * HRMB0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int processSAVE00(Map saveData) throws Exception{

		String[] sCGRG_CODE = new String[5];
		int iCNTX_MODI = 0;;

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsHR_MASTXD     = (List) saveData.get("dsHR_MASTXD");
		List dsHR_MASTXD_Del = (List) saveData.get("dsHR_MASTXD_DELETE");
		List dsHR_BFCARR     = (List) saveData.get("dsHR_BFCARR");
		List dsHR_BFCARR_Del = (List) saveData.get("dsHR_BFCARR_DELETE");
		List dsHR_LICEXM     = (List) saveData.get("dsHR_LICEXM");
		List dsHR_LICEXM_Del = (List) saveData.get("dsHR_LICEXM_DELETE");
		List dsHR_FAMILY     = (List) saveData.get("dsHR_FAMILY");
		List dsHR_FAMILY_Del = (List) saveData.get("dsHR_FAMILY_DELETE");
		List dsHR_SCHCRR     = (List) saveData.get("dsHR_SCHCRR");
		List dsHR_SCHCRR_Del = (List) saveData.get("dsHR_SCHCRR_DELETE");
		List dsHR_FRLANG     = (List) saveData.get("dsHR_FRLANG");
		List dsHR_FRLANG_Del = (List) saveData.get("dsHR_FRLANG_DELETE");
		List dsHR_REWARD     = (List) saveData.get("dsHR_REWARD");
		List dsHR_REWARD_Del = (List) saveData.get("dsHR_REWARD_DELETE");
		List dsHR_DISCIP     = (List) saveData.get("dsHR_DISCIP");
		List dsHR_DISCIP_Del = (List) saveData.get("dsHR_DISCIP_DELETE");
		List dsED_EDRSLT     = (List) saveData.get("dsED_EDRSLT");
		List dsHR_APPOXD     = (List) saveData.get("dsHR_APPOXD");
		
		List dsHR_PASSRR     = (List) saveData.get("dsHR_PASSRR");
		List dsHR_PASSRR_Del = (List) saveData.get("dsHR_PASSRR_DELETE");
		List dsHR_VISARR     = (List) saveData.get("dsHR_VISARR");
		List dsHR_VISARR_Del = (List) saveData.get("dsHR_VISARR_DELETE");
		List dsHR_DUTYRR     = (List) saveData.get("dsHR_DUTYRR");
		List dsHR_DUTYRR_Del = (List) saveData.get("dsHR_DUTYRR_DELETE"); // 직무

		String iEMPL_NUMB = "";

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_BFCARR_Del.size(); i++) {
        	rowVo = (Map) dsHR_BFCARR_Del.get(i);
			dao.processDELETE01(rowVo);
			iTotCnt++;

		}
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_LICEXM_Del.size(); i++) {
        	rowVo = (Map) dsHR_LICEXM_Del.get(i);
			dao.processDELETE02(rowVo);
			iTotCnt++;

		}
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_FAMILY_Del.size(); i++) {
        	rowVo = (Map) dsHR_FAMILY_Del.get(i);
			dao.processDELETE03(rowVo);
			iTotCnt++;

		}
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_SCHCRR_Del.size(); i++) {
        	rowVo = (Map) dsHR_SCHCRR_Del.get(i);
			dao.processDELETE04(rowVo);
			iTotCnt++;

		}
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_FRLANG_Del.size(); i++) {
        	rowVo = (Map) dsHR_FRLANG_Del.get(i);
			dao.processDELETE05(rowVo);
			iTotCnt++;

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_REWARD_Del.size(); i++) {
        	rowVo = (Map) dsHR_REWARD_Del.get(i);
			dao.processDELETE07(rowVo);
			iTotCnt++;

		}

        //DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_DISCIP_Del.size(); i++) {
        	rowVo = (Map) dsHR_DISCIP_Del.get(i);
        	dao.processDELETE08(rowVo);
        	iTotCnt++;

        }

       //DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_PASSRR_Del.size(); i++) {
        	rowVo = (Map) dsHR_PASSRR_Del.get(i);
        	dao.processDELETE09(rowVo);
        	iTotCnt++;

        }

        //DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_VISARR_Del.size(); i++) {
        	rowVo = (Map) dsHR_VISARR_Del.get(i);
        	dao.processDELETE10(rowVo);
        	iTotCnt++;

        }
        //DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_DUTYRR_Del.size(); i++) {
        	rowVo = (Map) dsHR_DUTYRR_Del.get(i);
        	dao.processDELETE11(rowVo);
        	iTotCnt++;

        }

        //상세 삭제 후 마스터 삭제 처리
        //DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_MASTXD_Del.size(); i++) {
        	rowVo = (Map) dsHR_MASTXD_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_MASTXD.size(); i++) {

			rowVo = (Map) dsHR_MASTXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				sCGRG_CODE[iCNTX_MODI] = "MASTXM";
				iCNTX_MODI++;
				iEMPL_NUMB = dao.processNEW_EMPL_NUMB(rowVo);
				rowVo.put("EMPL_NUMB", iEMPL_NUMB);
				//최초비밀번호는 EMPL_NUMB와 동일하게 셋팅한다.
				rowVo.put("SCRT_NUMB", CryptSHA.encrypt256(iEMPL_NUMB));

				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				sCGRG_CODE[iCNTX_MODI] = "MASTXM";
				iCNTX_MODI++;
				dao.processUPDATE00(rowVo);

			}

			iTotCnt++;

		}
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_BFCARR.size(); i++) {

			rowVo = (Map) dsHR_BFCARR.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE01(rowVo);

			}

			iTotCnt++;

		}
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_LICEXM.size(); i++) {

			rowVo = (Map) dsHR_LICEXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				sCGRG_CODE[iCNTX_MODI] = "LICEXM";
				iCNTX_MODI++;
				dao.processSAVE02(rowVo);

			} else if (rowType == 2) {

				sCGRG_CODE[iCNTX_MODI] = "LICEXM";
				iCNTX_MODI++;
				dao.processUPDATE02(rowVo);

			}

			iTotCnt++;

		}
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_FAMILY.size(); i++) {

			rowVo = (Map) dsHR_FAMILY.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				sCGRG_CODE[iCNTX_MODI] = "FAMILY";
				iCNTX_MODI++;
				dao.processSAVE03(rowVo);

			} else if (rowType == 2) {

				sCGRG_CODE[iCNTX_MODI] = "FAMILY";
				iCNTX_MODI++;
				dao.processUPDATE03(rowVo);

			}

			iTotCnt++;

		}
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_SCHCRR.size(); i++) {
			rowVo = (Map) dsHR_SCHCRR.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				sCGRG_CODE[iCNTX_MODI] = "SCHCRR";
				iCNTX_MODI++;
				dao.processSAVE04(rowVo);

			} else if (rowType == 2) {
				sCGRG_CODE[iCNTX_MODI] = "SCHCRR";
				iCNTX_MODI++;
				dao.processUPDATE04(rowVo);

			}

			iTotCnt++;

		}
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_FRLANG.size(); i++) {

			rowVo = (Map) dsHR_FRLANG.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				sCGRG_CODE[iCNTX_MODI] = "FRLANG";
				iCNTX_MODI++;
				dao.processSAVE05(rowVo);

			} else if (rowType == 2) {

				sCGRG_CODE[iCNTX_MODI] = "FRLANG";
				iCNTX_MODI++;
				dao.processUPDATE05(rowVo);

			}

			iTotCnt++;

		}

		 //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_REWARD.size(); i++) {

			rowVo = (Map) dsHR_REWARD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE07(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE07(rowVo);

			}

			iTotCnt++;

		}
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_DISCIP.size(); i++) {

			rowVo = (Map) dsHR_DISCIP.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE08(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE08(rowVo);

			}

			iTotCnt++;

		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsED_EDRSLT.size(); i++) {

			rowVo = (Map) dsED_EDRSLT.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
				dao.processUPDATE13(rowVo);

			}

			iTotCnt++;

		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_APPOXD.size(); i++) {

			rowVo = (Map) dsHR_APPOXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {
				dao.processUPDATE14(rowVo);
			}

			iTotCnt++;

		}
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_PASSRR.size(); i++) {

			rowVo = (Map) dsHR_PASSRR.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE09(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE09(rowVo);

			}

			iTotCnt++;

		}
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_VISARR.size(); i++) {

			rowVo = (Map) dsHR_VISARR.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE10(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE10(rowVo);

			}

			iTotCnt++;

		}
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_DUTYRR.size(); i++) {

			rowVo = (Map) dsHR_DUTYRR.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE11(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE11(rowVo);

			}

			iTotCnt++;

		}

		//인사기본사항 변경요청 추가
		List dsHR_MASTXD_ALL     = (List) saveData.get("dsHR_MASTXD_ALL");
		List dsHR_FAMILY_ALL     = (List) saveData.get("dsHR_FAMILY_ALL");
		List dsHR_SCHCRR_ALL     = (List) saveData.get("dsHR_SCHCRR_ALL");
		List dsHR_LICEXM_ALL     = (List) saveData.get("dsHR_LICEXM_ALL");
		List dsHR_FRLANG_ALL     = (List) saveData.get("dsHR_FRLANG_ALL");

		Map returnMap = new HashMap();

		for( int i = 0; i < iCNTX_MODI ; i++){
			rowVo = (Map) dsHR_MASTXD_ALL.get(0);
			if ( rowVo.get("EMPL_NUMB") == null || rowVo.get("EMPL_NUMB") == ""){
				rowVo.put("EMPL_NUMB", iEMPL_NUMB);
			}

			//일련번호채번
			rowVo.put("TABLE_NAME", "HR_MSTCRQ");
			rowVo.put("COLUMN_NAME", "CHRQ_SEQN");
			rowVo.put("SECH_COND", rowVo.get("EMPL_NUMB"));

			dao_comSeq.updateSequenceDtlInfo(rowVo);
			DataSet returnDataSet = (DataSet) dao_comSeq.selectSequenceInfo(rowVo);

			returnMap.put("CHRQ_SEQN", returnDataSet.getString(0, "SRAL_NUMB"));
			returnMap.put("CHRQ_DATE", DateTime.getDateString());

			rowVo = (Map) dsHR_MASTXD_ALL.get(0);

			//변경요청마스터생성
			rowVo.put("CGRG_CODE", sCGRG_CODE[i]);
			rowVo.put("CHRQ_SEQN", returnMap.get("CHRQ_SEQN"));
			rowVo.put("CHRQ_DATE", returnMap.get("CHRQ_DATE"));

			dao.processSAVE06(rowVo);

			if(sCGRG_CODE[i] == "MASTXM"){
				for(int j = 0;  j < dsHR_MASTXD_ALL.size() ; j++) {
					rowVo = (Map) dsHR_MASTXD_ALL.get(i);

					rowVo.put("CHRQ_SEQN", returnMap.get("CHRQ_SEQN"));
					rowVo.put("CHRQ_DATE", returnMap.get("CHRQ_DATE"));
					rowVo.put("HRXM_YSNO", "1");

					rowType = (Integer) rowVo.get("ROW_TYPE");

					//추가
					if(rowType == 2){
						rowVo.put("CHDV_CODE", "I");
						dao_MASTXM.processSAVE01(rowVo);
					//수정
					} else if (rowType == 4){
						rowVo.put("CHDV_CODE", "U");
						dao_MASTXM.processSAVE01(rowVo);
					//삭제
					} else if (rowType == 8){
						rowVo.put("CHDV_CODE", "D");
						dao_MASTXM.processSAVE01(rowVo);
					//그외(기존)
					} else {
						rowVo.put("CHDV_CODE", "N");
						dao_MASTXM.processSAVE01(rowVo);
					}
				}
			}else if(sCGRG_CODE[i] == "FAMILY"){
				for(int j = 0;  j < dsHR_FAMILY_ALL.size() ; j++) {
					rowVo = (Map) dsHR_FAMILY_ALL.get(j);
					rowType = (Integer) rowVo.get("ROW_TYPE");

					rowVo.put("CHRQ_SEQN", returnMap.get("CHRQ_SEQN"));
					rowVo.put("CHRQ_DATE", returnMap.get("CHRQ_DATE"));
					rowVo.put("HRXM_YSNO", "1");

					//추가
					if(rowType == 2){
						rowVo.put("CHDV_CODE", "I");
						dao_FAMILY.processSAVE01(rowVo);
					//수정
					} else if (rowType == 4){
						rowVo.put("CHDV_CODE", "U");
						dao_FAMILY.processSAVE01(rowVo);
					//삭제
					} else if (rowType == 8){
						rowVo.put("CHDV_CODE", "D");
						dao_FAMILY.processSAVE01(rowVo);
					//그외(기존)
					} else {
						rowVo.put("CHDV_CODE", "N");
						dao_FAMILY.processSAVE01(rowVo);
					}
				}
			}else if(sCGRG_CODE[i] == "SCHCRR"){
				for(int j = 0;  j < dsHR_SCHCRR_ALL.size() ; j++) {
					rowVo = (Map) dsHR_SCHCRR_ALL.get(j);
					rowType = (Integer) rowVo.get("ROW_TYPE");

					rowVo.put("CHRQ_SEQN", returnMap.get("CHRQ_SEQN"));
					rowVo.put("CHRQ_DATE", returnMap.get("CHRQ_DATE"));
					rowVo.put("HRXM_YSNO", "1");

					//추가
					if(rowType == 2){
						rowVo.put("CHDV_CODE", "I");
						dao_SCHCRR.processSAVE01(rowVo);
					//수정
					} else if (rowType == 4){
						rowVo.put("CHDV_CODE", "U");
						dao_SCHCRR.processSAVE01(rowVo);
					//삭제
					} else if (rowType == 8){
						rowVo.put("CHDV_CODE", "D");
						dao_SCHCRR.processSAVE01(rowVo);
					//그외(기존)
					} else {
						rowVo.put("CHDV_CODE", "N");
						dao_SCHCRR.processSAVE01(rowVo);
					}
				}
			}else if(sCGRG_CODE[i] == "LICEXM"){
				for(int j = 0;  j < dsHR_LICEXM_ALL.size() ; j++) {
					rowVo = (Map) dsHR_LICEXM_ALL.get(j);
					rowType = (Integer) rowVo.get("ROW_TYPE");

					rowVo.put("CHRQ_SEQN", returnMap.get("CHRQ_SEQN"));
					rowVo.put("CHRQ_DATE", returnMap.get("CHRQ_DATE"));
					rowVo.put("HRXM_YSNO", "1");

					//추가
					if(rowType == 2){
						rowVo.put("CHDV_CODE", "I");
						dao_LICEXM.processSAVE01(rowVo);
					//수정
					} else if (rowType == 4){
						rowVo.put("CHDV_CODE", "U");
						dao_LICEXM.processSAVE01(rowVo);
					//삭제
					} else if (rowType == 8){
						rowVo.put("CHDV_CODE", "D");
						dao_LICEXM.processSAVE01(rowVo);
					//그외(기존)
					} else {
						rowVo.put("CHDV_CODE", "N");
						dao_LICEXM.processSAVE01(rowVo);
					}
				}
			}else if(sCGRG_CODE[i] == "FRLANG"){
				for(int j = 0;  j < dsHR_FRLANG_ALL.size() ; j++) {
					rowVo = (Map) dsHR_FRLANG_ALL.get(j);
					rowType = (Integer) rowVo.get("ROW_TYPE");

					rowVo.put("CHRQ_SEQN", returnMap.get("CHRQ_SEQN"));
					rowVo.put("CHRQ_DATE", returnMap.get("CHRQ_DATE"));
					rowVo.put("HRXM_YSNO", "1");

					//추가
					if(rowType == 2){
						rowVo.put("CHDV_CODE", "I");
						dao_FRLANG.processSAVE01(rowVo);
					//수정
					} else if (rowType == 4){
						rowVo.put("CHDV_CODE", "U");
						dao_FRLANG.processSAVE01(rowVo);
					//삭제
					} else if (rowType == 8){
						rowVo.put("CHDV_CODE", "D");
						dao_FRLANG.processSAVE01(rowVo);
					//그외(기존)
					} else {
						rowVo.put("CHDV_CODE", "N");
						dao_FRLANG.processSAVE01(rowVo);
					}
				}
			}
		}

		List dsHR_ATTACH     = (List) saveData.get("dsHR_ATTACH");
		List dsHR_ATTACH_Del = (List) saveData.get("dsHR_ATTACH_DELETE");

		attachFileService.deleteFile(dsHR_ATTACH_Del);
		attachFileService.uploadFiles(dsHR_ATTACH, this.getClass().getSimpleName().substring(0, 8), "");


		return iTotCnt;
	}
}