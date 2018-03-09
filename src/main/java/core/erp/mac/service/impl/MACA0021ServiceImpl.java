/**
 * core.erp.mdm.service.impl.MACA0021ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;


import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.mac.service.MACA0021Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MACA0021ServiceImpl - 매체 세금계산서 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.24
 * @version	1.0
 * @see		{@link MACA0021Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.24	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MACA0021Service")
public class MACA0021ServiceImpl extends EgovAbstractServiceImpl implements MACA0021Service {

	/**
	 * 세금계산서 DAO class inject.
	 */
	@Resource(name = "MACA0021Dao")
	private MACA0021Dao dao;

	/**
	 * 위수탁 세금계산서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 미발행 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 수수료세금계산서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 미발행 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 위수탁세금계산서 디테일 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 미발행 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXD", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * 수수료세금계산서 디테일 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 미발행 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXD", dao.processSEARCH03(searchVo));
		return returnMap;

    }
	
	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전파 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH04(searchVo));
		return returnMap;

    }
	
	/**
	 * MACA0021 위수탁 세금계산서를 저장한다.
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

		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  
		List dsMD_TCALXM_Del = (List) saveData.get("dsMD_TCALXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
       for (int i = 0; i < dsMD_TCALXM_Del.size(); i++) {

       		rowVo = (Map) dsMD_TCALXM_Del.get(i);
			
       		//세금계산서가 발송이 되었는지 유무
        	String SEND_FLAG = dao.getSEND_FLAG(rowVo);
        	
        	if(SEND_FLAG != null){
        		throw new Exception("발송된 세금계산서는 삭제할 수 없습니다.");
        	}else{
        		deleteCount += dao.processDELETE00(rowVo);
    			dao.processDELETE10(rowVo);
        	}

		}
       //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {

			rowVo = (Map) dsMD_TCALXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				//년월 입력
				rowVo.put("TAXY_MONT", rowVo.get("DEND_DATE").toString().substring(0, 6));
				
				//세금계산서의 번호를 가져와서 저장.
				String New_TAXX_NUMB=dao.processNew_TAXX_NUMB00(rowVo);
				rowVo.put("TAXX_NUMB",New_TAXX_NUMB);
				
				dao.processSAVE00(rowVo);
			} else if (rowType == 2) {
				//세금계산서가 발송이 되었는지 유무
	        	String SEND_FLAG = dao.getSEND_FLAG(rowVo);
				if(SEND_FLAG != null){
	        		throw new Exception("발송된 세금계산서는 수정할 수 없습니다.");
	        	}else{
					updateCount += dao.processUPDATE00(rowVo);
	        	}
			}
		}
		
		return deleteCount + updateCount;

	}
	
	/**
	 * MACA0021 수수료세금계산서를 저장한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  
		List dsMD_TCALXM_Del = (List) saveData.get("dsMD_TCALXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
       for (int i = 0; i < dsMD_TCALXM_Del.size(); i++) {

       		rowVo = (Map) dsMD_TCALXM_Del.get(i);
       		
       		//세금계산서가 발송이 되었는지 유무
        	String SEND_FLAG = dao.getSEND_FLAG(rowVo);
        	
        	if(SEND_FLAG != null){
        		throw new Exception("발송된 세금계산서는 삭제할 수 없습니다.");
        	}else{
    			deleteCount += dao.processDELETE01(rowVo);
    			dao.processDELETE11(rowVo);
        	}


		}

       //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {

			rowVo = (Map) dsMD_TCALXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				
				//년월 입력
				rowVo.put("TAXY_MONT", rowVo.get("DEND_DATE").toString().substring(0, 6));
				
				//세금계산서의 번호를 가져와서 저장.
				String New_TAXX_NUMB=dao.processNew_TAXX_NUMB01(rowVo);
				rowVo.put("TAXX_NUMB",New_TAXX_NUMB);
				
				dao.processSAVE01(rowVo);
			} else if (rowType == 2) {
				//세금계산서가 발송이 되었는지 유무
	        	String SEND_FLAG = dao.getSEND_FLAG(rowVo);
				if(SEND_FLAG != null){
	        		throw new Exception("발송된 세금계산서는 수정할 수 없습니다.");
	        	}else{
	        		updateCount += dao.processUPDATE01(rowVo);
	        	}
			}
		}
		
		return deleteCount + updateCount;

	}
	
	
	/**
	 * MACA0021 위수탁 세금계산서 디테일을 저장,수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsMD_TCALXD     = (List) saveData.get("dsMD_TCALXD");  
		List dsMD_TCALXD_Del = (List) saveData.get("dsMD_TCALXD_DELETE");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
       for (int i = 0; i < dsMD_TCALXD_Del.size(); i++) {
       		rowVo = (Map) dsMD_TCALXD_Del.get(i);
			deleteCount += dao.processDELETE03(rowVo);

		}
		
       //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_TCALXD.size(); i++) {
			rowVo = (Map) dsMD_TCALXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			if (rowType == 1) {
				//세금계산서 디테일의 번호를 가져와서 저장.
				String New_TAXX_IDXX = dao.processNew_TAXX_IDXX(rowVo);
				rowVo.put("TAXX_IDXX",New_TAXX_IDXX);
				dao.processSAVE02(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE02(rowVo);
			}
		}
		
		return deleteCount + updateCount;

	}
	
	/**
	 * MACA0021 수수료 세금계산서를 디테일을 저장,수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE03(Map saveData) throws Exception{
		 
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsMD_TCALXD     = (List) saveData.get("dsMD_TCALXD");  
		List dsMD_TCALXD_Del = (List) saveData.get("dsMD_TCALXD_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
       for (int i = 0; i < dsMD_TCALXD_Del.size(); i++) {
       		rowVo = (Map) dsMD_TCALXD_Del.get(i);
			deleteCount += dao.processDELETE03(rowVo);

		}
		
       //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsMD_TCALXD.size(); i++) {

			rowVo = (Map) dsMD_TCALXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				//세금계산서 디테일의 번호를 가져와서 저장.
				String New_TAXX_IDXX = dao.processNew_TAXX_IDXX(rowVo);
				rowVo.put("TAXX_IDXX",New_TAXX_IDXX);
				
				dao.processSAVE03(rowVo);
			} else if (rowType == 2) {
				updateCount += dao.processUPDATE03(rowVo);
			}
		}
		
		return deleteCount + updateCount;

	}
	
	
	/**
	 * 매체 위수탁 세금계산서(헤더)를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map saveData) throws Exception {

		Map rowVo = null;
		Map QUERYvo = null;
		String TAXX_NUMB_QUERY = "";
		String TAXY_MONT = null;
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  
      //계약서 데이터의 경우 INSERT 는 없고 UPDATE 만 가능
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {
			rowVo = (Map) dsMD_TCALXM.get(i);
			if(i==0 && rowVo.get("CHEK_FILD").toString().equals("1")){
				TAXX_NUMB_QUERY += "'"+rowVo.get("TAXX_NUMB")+"'"; 
			}else if(rowVo.get("CHEK_FILD").toString().equals("1")){
				TAXX_NUMB_QUERY += ", '"+rowVo.get("TAXX_NUMB")+"'"; 
			}
			TAXY_MONT = rowVo.get("YEAR_MNTH").toString();
		}
		
		QUERYvo  = new HashMap<String, String>();
		QUERYvo.put("TAXX_NUMB_QUERY", TAXX_NUMB_QUERY);
		QUERYvo.put("TAXY_MONT", TAXY_MONT);
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXH_RPT", dao.processPRINT00(QUERYvo));
		return returnMap;

    }
	
	/**
	 * 매체 위수탁 세금계산서(디테일)를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map saveData) throws Exception {

		Map rowVo = null;
		Map QUERYvo = null;
		String TAXX_NUMB_QUERY = "";
		String TAXY_MONT = null;  
		
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  

     //계약서 데이터의 경우 INSERT 는 없고 UPDATE 만 가능
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {

			rowVo = (Map) dsMD_TCALXM.get(i);
			if(i==0 && rowVo.get("CHEK_FILD").toString().equals("1")){
				TAXX_NUMB_QUERY += "'"+rowVo.get("TAXX_NUMB")+"'"; 
			}else if(rowVo.get("CHEK_FILD").toString().equals("1")){
				TAXX_NUMB_QUERY += ", '"+rowVo.get("TAXX_NUMB")+"'"; 
			}
			TAXY_MONT = rowVo.get("YEAR_MNTH").toString();
		}
		
		QUERYvo  = new HashMap<String, String>();
		QUERYvo.put("TAXX_NUMB_QUERY", TAXX_NUMB_QUERY);
		QUERYvo.put("TAXY_MONT", TAXY_MONT);
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		returnMap.put("dsMD_TCALXD_RPT", dao.processPRINT01(QUERYvo));
		return returnMap;

    }
	
	/**
	 * 매체 수수료 세금계산서(헤더)를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT02(Map saveData) throws Exception {
		
		Map rowVo = null;
		Map QUERYvo = null;
		String TAXX_NUMB_QUERY = "";
		String TAXY_MONT = null;
		
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  

    //계약서 데이터의 경우 INSERT 는 없고 UPDATE 만 가능
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {

			rowVo = (Map) dsMD_TCALXM.get(i);
			if(i==0 && rowVo.get("CHEK_FILD").toString().equals("1")){
				TAXX_NUMB_QUERY += "'"+rowVo.get("TAXX_NUMB")+"'"; 
			}else if(rowVo.get("CHEK_FILD").toString().equals("1")){
				TAXX_NUMB_QUERY += ", '"+rowVo.get("TAXX_NUMB")+"'"; 
			}
			TAXY_MONT = rowVo.get("YEAR_MNTH").toString();
		}
		
		QUERYvo  = new HashMap<String, String>();
		QUERYvo.put("TAXX_NUMB_QUERY", TAXX_NUMB_QUERY);
		QUERYvo.put("TAXY_MONT", TAXY_MONT);
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXH_RPT", dao.processPRINT02(QUERYvo));
		return returnMap;

    }
	
	/**
	 * 매체 수수료 세금계산서(디테일)를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT03(Map saveData) throws Exception {
		
		Map rowVo = null;
		Map QUERYvo = null;
		String TAXX_NUMB_QUERY = "";
		String TAXY_MONT = null;

		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  

		//계약서 데이터의 경우 INSERT 는 없고 UPDATE 만 가능
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {

			rowVo = (Map) dsMD_TCALXM.get(i);
			if(i==0 && rowVo.get("CHEK_FILD").toString().equals("1")){
				TAXX_NUMB_QUERY += "'"+rowVo.get("TAXX_NUMB")+"'"; 
			}else if(rowVo.get("CHEK_FILD").toString().equals("1")){
				TAXX_NUMB_QUERY += ", '"+rowVo.get("TAXX_NUMB")+"'"; 
			}
			TAXY_MONT = rowVo.get("YEAR_MNTH").toString();
		}
		
		QUERYvo  = new HashMap<String, String>();
		QUERYvo.put("TAXX_NUMB_QUERY", TAXX_NUMB_QUERY);
		QUERYvo.put("TAXY_MONT", TAXY_MONT);
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXD_RPT", dao.processPRINT03(QUERYvo));
		return returnMap;

    }
	
}
