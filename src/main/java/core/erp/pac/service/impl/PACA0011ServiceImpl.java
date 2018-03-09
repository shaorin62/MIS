/**
 * core.erp.pcm.service.impl.PACA0011ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;


import core.erp.pac.service.PACA0011Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PACA0011ServiceImpl  - 제작 세금계산서 입력을 위함
 * </pre>
 * 
 * @author	오세훈
 * @since	2017.06.03
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2017.03.06	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Service("PACA0011Service")
public class PACA0011ServiceImpl extends EgovAbstractServiceImpl implements PACA0011Service {

	/**
	 * 공통코드관리(신규) DAO class inject.
	 */
	@Resource(name = "PACA0011Dao")
	private PACA0011Dao dao;

	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SATXXH", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SATXXD", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	
	/**
	 * PACA0011 제작세금계산서 입력 저장 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map searchVo, Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sDEND_DATE, sTAXY_MONT, sTAXX_NUMB, sTAXX_SANB, sTAXX_GUBN;


		List dsPD_SATXXH     = (List) saveData.get("dsPD_SATXXH");  
		List dsPD_SATXXH_Del = (List) saveData.get("dsPD_SATXXH_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_SATXXH_Del.size(); i++) {

        	rowVo = (Map) dsPD_SATXXH_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);
		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_SATXXH.size(); i++) {

			rowVo = (Map) dsPD_SATXXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
					
				//세금계산서 년월, 번호 생성 (청구일 기준으로 가져온다.) 
				sDEND_DATE = (String) rowVo.get("DEND_DATE");

				
				sTAXY_MONT = sDEND_DATE.substring(0, 6);
				rowVo.put("TAXY_MONT", sTAXY_MONT);
				
				sTAXX_NUMB = dao.getTAXX_NUMB(sTAXY_MONT);
				rowVo.put("TAXX_NUMB", sTAXX_NUMB);
				
				sTAXX_GUBN = (String)rowVo.get("TAXX_GUBN");
				
				//세금계산서 번호 생성
				sTAXX_SANB = "10" + sDEND_DATE + sTAXX_GUBN + "0A" + String.format("%05d", Integer.parseInt(sTAXX_NUMB));
				
				
				rowVo.put("TAXX_SANB", sTAXX_SANB);
	
				dao.processSAVE00(rowVo);
				
			} else if (rowType == 2) {
				
				
				updateCount += dao.processUPDATE00(rowVo);
	
			}
		}
		return deleteCount + updateCount;
	}
	
	
	/**
	 * PACA0011 제작세금계산서 입력 저장 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map searchVo, Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sTAXY_MONT, sTAXX_NUMB, sTAXX_IDXX;


		List dsPD_SATXXD     = (List) saveData.get("dsPD_SATXXD");  
		List dsPD_SATXXD_Del = (List) saveData.get("dsPD_SATXXD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_SATXXD_Del.size(); i++) {

        	rowVo = (Map) dsPD_SATXXD_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);
		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_SATXXD.size(); i++) {

			rowVo = (Map) dsPD_SATXXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {

				sTAXX_IDXX = dao.getTAXX_IDXX(rowVo);
				rowVo.put("TAXX_IDXX", sTAXX_IDXX);
				//정상 프로세스가 아니기 때문에 제작번호가 없다 
				rowVo.put("JOBN_NUMB", "99999999");
				
	
				dao.processSAVE01(rowVo);
				
			} else if (rowType == 2) {
				
				updateCount += dao.processUPDATE01(rowVo);
	
			}
		}
		return deleteCount + updateCount;
	}
	

}
