/**
 * core.erp.mac.service.impl.MACA0020P01ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;


import core.erp.mac.service.MACA0020P01Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MACA0020P01ServiceImpl - 매체 수정 세금계산서 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.12.15
 * @version	1.0
 * @see		{@link MACA0020P01Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.15	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MACA0020P01Service")
public class MACA0020P01ServiceImpl extends EgovAbstractServiceImpl implements MACA0020P01Service {

	/**
	 * 세금계산서 DAO class inject.
	 */
	@Resource(name = "MACA0020P01Dao")
	private MACA0020P01Dao dao;

	/**
	 * 위수탁 수정세금계산서 생성을 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_SATXXH", dao.processSEARCH10(searchVo));
		return returnMap;

    }
	
	
	
	
	/**
	 * MACA0020P01 위수탁 수정 세금계산서 생성 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE10(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 
		 String sSATX_NUMB = "";
		 String sTAXY_MONT = "";
		 String sTAXX_NUMB = "";
		 String sTAXX_NUMB_old = "";
		 String sDEND_DATE = "";
		 String sTAXX_IDXX = "";
		 String sTAXX_SANB = "";
		 String sPRNT_DATE = "";
		 String sTAXX_GUBN = "";

		List dsMD_MODIFY     = (List) saveData.get("dsMD_MODIFY");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_MODIFY.size(); i++) {

			rowVo = (Map) dsMD_MODIFY.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			sTAXY_MONT = ""; 
			sDEND_DATE ="";
			sTAXX_NUMB = "";
			sTAXX_NUMB_old = "";
			
			sPRNT_DATE = (String)rowVo.get("PRNT_DATE");
			sTAXY_MONT = sPRNT_DATE.substring(0, 6);
			sTAXX_NUMB_old = (String)rowVo.get("TAXX_NUMB");
			sTAXX_NUMB = dao.getTAXX_NUMB(sTAXY_MONT);
			
			rowVo.put("TAXY_MONT", sTAXY_MONT);
			rowVo.put("TAXX_NUMB", sTAXX_NUMB);
			rowVo.put("TAXX_NUMB_old", sTAXX_NUMB_old);
			
			sPRNT_DATE = (String)rowVo.get("PRNT_DATE");
			sTAXX_GUBN = (String)rowVo.get("TAXX_GUBN");
			
			//세금계산서 번호 생성
			sTAXX_SANB = "10" + sPRNT_DATE + sTAXX_GUBN + "0A" + String.format("%05d", Integer.parseInt(sTAXX_NUMB)); 
			rowVo.put("TAXX_SANB", sTAXX_SANB);

			//세금계산서 헤더 저장
			dao.processSAVE10(rowVo);
			//세금계산서 디테일 저장.
			dao.processSAVE20(rowVo);
			
		}

		
		
		return deleteCount + updateCount;
	}
	
	
	/**
	 * MACA0020P01 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE20(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsMD_SATXXH = (List) saveData.get("dsMD_SATXXH");  


        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_SATXXH.size(); i++) {

			rowVo = (Map) dsMD_SATXXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			 if (rowType == 2) {

				//세금계산서 헤더수정
				 updateCount += dao.processUPDATE20(rowVo);
				//세금계산서 디테일 수정
				 dao.processUPDATE30(rowVo);

			}
		}
		
		return updateCount;

	}
	
	/**
	 * 수수료 수정세금계산서 생성을 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH11(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_SATXXH", dao.processSEARCH11(searchVo));
		return returnMap;

    }
	
	
	
	
	/**
	 * MACA0020P01 수수료 수정 세금계산서 생성 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE11(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 
		 String sSATX_NUMB = "";
		 String sTAXY_MONT = "";
		 String sTAXX_NUMB = "";
		 String sTAXX_NUMB_old = "";
		 String sDEND_DATE = "";
		 String sTAXX_IDXX = "";
		 String sTAXX_SANB = "";
		 String sPRNT_DATE = "";
		 String sTAXX_GUBN = "";

		List dsMD_MODIFY     = (List) saveData.get("dsMD_MODIFY");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_MODIFY.size(); i++) {

			rowVo = (Map) dsMD_MODIFY.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			sTAXY_MONT = ""; 
			sDEND_DATE ="";
			sTAXX_NUMB = "";
			sTAXX_NUMB_old = "";
			
			sPRNT_DATE = (String)rowVo.get("PRNT_DATE");
			sTAXY_MONT = sPRNT_DATE.substring(0, 6);
			sTAXX_NUMB_old = (String)rowVo.get("TAXX_NUMB");
			sTAXX_NUMB = dao.getTAXX_NUMB(sTAXY_MONT);
			
			rowVo.put("TAXY_MONT", sTAXY_MONT);
			rowVo.put("TAXX_NUMB", sTAXX_NUMB);
			rowVo.put("TAXX_NUMB_old", sTAXX_NUMB_old);
			
			sPRNT_DATE = (String)rowVo.get("PRNT_DATE");
			sTAXX_GUBN = (String)rowVo.get("TAXX_GUBN");
			
			//세금계산서 번호 생성
			sTAXX_SANB = "10" + sPRNT_DATE + sTAXX_GUBN + "0A" + String.format("%05d", Integer.parseInt(sTAXX_NUMB)); 
			rowVo.put("TAXX_SANB", sTAXX_SANB);
			
			//세금계산서 헤더저장
			dao.processSAVE11(rowVo);
			//세금계산서 디테일 저장
			dao.processSAVE20(rowVo);
		}

		
		
		return deleteCount + updateCount;
	}
	
	
	/**
	 * MACA0020P01 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE21(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsMD_SATXXH = (List) saveData.get("dsMD_SATXXH");  


        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_SATXXH.size(); i++) {

			rowVo = (Map) dsMD_SATXXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			 if (rowType == 2) {
				 
				//세금계산서 헤더 수정
				updateCount += dao.processUPDATE21(rowVo);
				//세금계산서 디테일 수정
				dao.processUPDATE30(rowVo);

			}
		}
		
		return updateCount;

	}
	
}
