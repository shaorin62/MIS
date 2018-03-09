/**
 * core.erp.pay.service.impl.PAYA0095ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYA0095Service;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYA0095ServiceImpl - 근무상태별지급율 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.19
 * @version	1.0
 * @see		{@link PAYA0095Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.19	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYA0095Service")
public class PAYA0095ServiceImpl extends EgovAbstractServiceImpl implements PAYA0095Service {

	/**
	 * 근무상태별지급율 DAO class inject.
	 */
	@Resource(name = "PAYA0095Dao")
	private PAYA0095Dao dao;

	/**
	 * 수당별지급율 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 수당별지급율 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PYRATE_M", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	/**
	 * 근무상태별지급율_근무상태 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object processSEARCH01(Map searchVo) throws Exception {

		Object search01 = dao.processSEARCH01(searchVo);
		List<Map<String, Object>> colList = new ArrayList<Map<String,Object>>();

		for(int i = 0 ; i < DataSetUtil.getRowCount(search01) ; i ++){
			Map<String, Object> data = new HashMap();
			data.put("COMD_CODE",DataSetUtil.getColumn(search01, i, "COMD_CODE").toString());
			data.put("COMD_CDNM",DataSetUtil.getColumn(search01, i, "COMD_CDNM").toString());
			//data.put("SORT_ORDR",DataSetUtil.getColumn(search00, i, "SORT_ORDR").toString());
			colList.add(data);

		}

		searchVo.put("TM_CODEXD", colList);

		Map<String, Object> returnMap01 = new HashMap<String, Object>();
		returnMap01.put("dsTM_CODEXD", search01);
		returnMap01.put("dsPY_PYRATE", dao.processSEARCH02(searchVo));
		return returnMap01;
	}


	/**
	 * PAYA0095 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "unused", "rawtypes", "unchecked" })
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;
		Map<String, Object> rowVo = null;
		int rowType = 0;

		List dsPY_PYRATE     = (List) saveData.get("dsPY_PYRATE");
		List dsPY_PYRATE_Del = (List) saveData.get("dsPY_PYRATE_DELETE");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_PYRATE.size(); i++) {

			rowVo = (Map<String, Object>) dsPY_PYRATE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

 			 if (rowType == 2) {

 				for (Map.Entry<String, Object> entry : rowVo.entrySet()) {
 					String sWRKS_CODE = "";
					if (entry.getValue().toString().length()==0) continue;
					if (entry.getKey().indexOf("COL_") < 0) {
						continue;
					} else {
						sWRKS_CODE = entry.getKey().replace("COL_", "");
					}

					Map<String, Object> tmprowVo = new HashMap<String, Object>();

					tmprowVo.put("STDS_YMTH", rowVo.get("STDS_YMTH"));         //기준년월
					tmprowVo.put("WAGP_CODE", rowVo.get("WAGP_CODE"));         //급여코드
					tmprowVo.put("CLSD_CODE", rowVo.get("CLSD_CODE"));         //직원구분코드
					tmprowVo.put("EXPD_CODE", rowVo.get("EXPD_CODE"));         //수당공제코드
					tmprowVo.put("UPDT_USID", rowVo.get("UPDT_USID"));         //수당공제코드
					tmprowVo.put("PAYX_RATE", entry.getValue());               //
					tmprowVo.put("WRKS_CODE", sWRKS_CODE.equals("") ? entry.getKey() : sWRKS_CODE);   //

					dao.processUPDATE00(tmprowVo);	//지급율 입력

				}
			}
			iTotCnt++;
		}

		return iTotCnt;

	}
}
