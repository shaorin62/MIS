/**
 * core.erp.mdm.service.impl.MACA0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;


import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.mac.service.MACA0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MACA0030ServiceImpl - 매체 세금계산서 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.21
 * @version	1.0
 * @see		{@link MACA0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.21	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MACA0030Service")
public class MACA0030ServiceImpl extends EgovAbstractServiceImpl implements MACA0030Service {

	/**
	 * 세금계산서 DAO class inject.
	 */
	@Resource(name = "MACA0030Dao")
	private MACA0030Dao dao;

	/**
	 * 위수탁미발행 세금계산서 목록을 조회한다.
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
	 * 세금계산서 목록을 조회한다.
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
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전파 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * 위수탁 세금계산서 디테일 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXD", dao.processSEARCH03(searchVo));
		return returnMap;
    }
	
	/**
	 * MACA0030 세금계산서 저장한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map searchVo,Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  
		
        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {
			rowVo = (Map) dsMD_TCALXM.get(i);
			//청구일 입력
			rowVo.put("DEND_DATE", searchVo.get("DEND_DATE"));
			//년월 입력
			rowVo.put("TAXY_MONT", searchVo.get("DEND_DATE").toString().substring(0, 6));

			//세금계산서의 번호를 가져와서 저장.
			String New_TAXX_NUMB=dao.processNew_TAXX_NUMB00(rowVo);
			rowVo.put("TAXX_NUMB",New_TAXX_NUMB);
			
			dao.processSAVE00(rowVo);
			
			//세금계산서 디테일의 번호를 가져와서 저장.
			String New_TAXX_IDXX = dao.processNew_TAXX_IDXX(rowVo);
			rowVo.put("TAXX_IDXX",New_TAXX_IDXX);
			dao.processSAVE01(rowVo);
			
			//거래명세서에 세금계산서가 생성되었는지 플래그를 기입.
			dao.updateTAXX_FLAG00(rowVo);
			//개별청약서에 세금계산서 번호를 기입
			dao.updateTRTX_NUMB(rowVo);

		}
		
		return 0;

	}
	
	/**
	 * MACA0030 세금계산서를 일괄 저장한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map searchVo,Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  
		//년월을 넣기 위해 년월 생성
		Calendar cal = new GregorianCalendar();
		
		String PRNT_DATE = cal.get(Calendar.YEAR)+""+String.format("%02d",cal.get(Calendar.MONTH)+1)+String.format("%02d",cal.get(Calendar.DAY_OF_MONTH));
		
		//광고주코드와 매체사코드를 리스트에 담는다.
		// - 코드를 비교해서 같은 광고주,매체사이름이면 금액 합산하기 위해서
		List<String> listCUST_CODE = null;
		List<String> listMEDX_CODE = null;
		for(int i=0 ; i < dsMD_TCALXM.size() ; i++){
			if(listCUST_CODE == null) listCUST_CODE = new ArrayList<String>();
			if(listMEDX_CODE == null) listMEDX_CODE = new ArrayList<String>();
			rowVo = (Map) dsMD_TCALXM.get(i);

			listCUST_CODE.add((String)rowVo.get("CUST_CODE"));				
			listMEDX_CODE.add((String)rowVo.get("MEDX_CODE"));
		}

        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {
			rowVo = (Map) dsMD_TCALXM.get(i);
			//청구일 입력
			rowVo.put("DEND_DATE", searchVo.get("DEND_DATE"));
			//년월 입력
			rowVo.put("TAXY_MONT", searchVo.get("DEND_DATE").toString().substring(0, 6));
			//발행일 입력
			rowVo.put("PRNT_DATE", PRNT_DATE);

				
			//중복되는지 알기 위한 변수
			boolean overLap = false;

			//중복되는 데이터가 있는지 확인
			for(int j = 0;j < listCUST_CODE.size();j++){
				//중복되는 데이터가 있으면 true를 반환
				if(i>j && listCUST_CODE.get(j).equals(rowVo.get("CUST_CODE")) && 
						listMEDX_CODE.get(j).equals(rowVo.get("MEDX_CODE")) ){
					overLap = true;
				}
			}
			if(overLap){
				//입력된 TAXX_NUMB를 가져온다
				String TAXX_NUMB=dao.processTAXX_NUMB00(rowVo);
				rowVo.put("TAXX_NUMB",TAXX_NUMB);
				
				//금액 합산처리하면서 부서 변경 개별부서->농심기획.
				dao.processUPDATE10(rowVo);
				
			}else{
				//새로운 TAXX_NUMB를 가져온다
				String New_TAXX_NUMB=dao.processNew_TAXX_NUMB00(rowVo);
				rowVo.put("TAXX_NUMB",New_TAXX_NUMB);
				
				dao.processSAVE00(rowVo);
			}
			//세금계산서 디테일의 번호를 가져와서 저장.
			String New_TAXX_IDXX = dao.processNew_TAXX_IDXX(rowVo);
			rowVo.put("TAXX_IDXX",New_TAXX_IDXX);
			dao.processSAVE01(rowVo);
			
			//거래명세서에 세금계산서가 생성되었는지 플래그를 기입.
			dao.updateTAXX_FLAG00(rowVo);
			//개별청약서에 세금계산서 번호를 기입
			dao.updateTRTX_NUMB(rowVo);

		}
		
		return 0;

	}
	
	/**
	 * MACA0030 위수탁 세금계산서 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map saveData) throws Exception{
		int deleteCount = 0;
		 Map rowVo = null;
		 
		List dsMD_TCALXM = (List) saveData.get("dsMD_TCALXM");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsMD_TCALXM.size(); i++) {
        	rowVo = (Map) dsMD_TCALXM.get(i);
			
        	//세금계산서가 발송이 되었는지 유무
        	String SEND_FLAG = dao.getSEND_FLAG(rowVo);
        	//전표가 생성되었는지 확인
        	String SACH_NUMB = dao.getSACH_NUMB(rowVo);
        	
        	if(SACH_NUMB != null){
        		throw new Exception("전표가 생성된 세금계산서는 삭제할 수 없습니다.");
        	}else if(SEND_FLAG != null){
        		throw new Exception("발송된 세금계산서는 삭제할 수 없습니다.");
        	}else{
        		//세금계산서 헤더
        		deleteCount += dao.processDELETE00(rowVo);
        		//세금계산서 디테일
        		deleteCount += dao.processDELETE01(rowVo);
        		//거래명세서에 세금계산서 생성FLAG 확인.
        		dao.updateTAXX_FLAG_Del00(rowVo);

        		//개별청약서에 세금계산서 번호를 삭제
    			dao.updateTRTX_NUMB_Del(rowVo);
     
        	}
		}
		
		return deleteCount;

	}
	
	/**
	 * 세금계산서 디테일 MEMO_FILD,부가세 내용수정.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsMD_TCALXD     = (List) saveData.get("dsMD_TCALXD");  

		for (int i = 0; i < dsMD_TCALXD.size(); i++) {

			rowVo = (Map) dsMD_TCALXD.get(i);
			//디테일 수정
			dao.processUPDATE00(rowVo);
			//헤더 수정
			dao.processUPDATE01(rowVo);
		}
		
		return 0;

	}
	
	/**
	 * 영수구분수정
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  

		for (int i = 0; i < dsMD_TCALXM.size(); i++) {

			rowVo = (Map) dsMD_TCALXM.get(i);
			//영수구분수정
			dao.processUPDATE02(rowVo);
		}
		
		return 0;

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
	
	
}
