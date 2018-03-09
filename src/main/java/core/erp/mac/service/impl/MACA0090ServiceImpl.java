/**
 * core.erp.mac.service.impl.MACA0090ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;



import java.math.BigDecimal;  
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;









import core.erp.mac.service.MACA0090Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MACA0090ServiceImpl - 전표처리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.05
 * @version	1.0
 * @see		{@link MACA0090Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.05	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MACA0090Service")
public class MACA0090ServiceImpl extends EgovAbstractServiceImpl implements MACA0090Service {

	/**
	 * 세금계산서 DAO class inject.
	 */
	@Resource(name = "MACA0090Dao")
	private MACA0090Dao dao;

	/**
	 * 위수탁 세금계산서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXM", dao.processSEARCH00(searchVo));
		return returnMap;
    }
	
	/**
	 * 등록된 전표 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 전표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_VOCHXM", dao.processSEARCH01(searchVo));
		return returnMap;
    }
	
	/**
	 * 수수료 세금계산서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TCALXM", dao.processSEARCH02(searchVo));
		return returnMap;
    }
	
	
	/**
	 * 등록된 수수료 전표 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 세금계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_VOCHXM", dao.processSEARCH03(searchVo));
		return returnMap;
    }
	
	/**
	 * 광고주목록 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 광고주목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH04(searchVo));
		return returnMap;

    }
	
	/**
	 * MACA0090 위수탁 전표생성
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map searchVo, Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sSEQX_IDXX = "";

		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  


        //계약서 데이터의 경우 INSERT 는 없고 UPDATE 만 가능
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {

			rowVo = (Map) dsMD_TCALXM.get(i);
			//체크확인
			if(rowVo.get("CHEK_FILD")=="1" || rowVo.get("CHEK_FILD").equals("1")){
				rowType = (Integer) rowVo.get("ROW_TYPE");
				
				rowVo.put("SOUS_LNKY", rowVo.get("TAXY_MONT")+"-"+rowVo.get("TAXX_NUMB"));
				//나중에 다시처리 
				rowVo.put("SYST_LNCD", "ko");
				rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
				rowVo.put("SLIP_GUBN", searchVo.get("SLIP_GUBN"));
				rowVo.put("SLIP_DATE", searchVo.get("SLIP_DATE"));
				rowVo.put("MEDX_FLAG", searchVo.get("MEDX_FLAG"));
				rowVo.put("DEPT_CODE", searchVo.get("DEPT_CODE"));
				rowVo.put("EMPL_CODE", searchVo.get("EMPL_CODE"));
				dao.processSAVE00(rowVo);
				//개별청약에 전표번호를 기입한다.
				dao.processUPDATE00(rowVo);
				
			}

		}
		
		return updateCount;
	}
	
	/**
	 * MACA0090 위수탁 전표 합산생성
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE10(Map searchVo, Map saveData) throws Exception{
		 
		int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sSEQX_IDXX = "";
		 //커서문장을 만들어 넣기 위한 String 
		 String FIRST_CURSOR = "";
		 String SECOND_CURSOR = "";
		 String THIRD_CURSOR="";
		 String UPDATESATX = "";
		 long SUM_SUMM_AMTX = 0;
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  
		
		//광고주코드를 SET에 담는다. 중복이 되지 않도록.
		Set<String> CUST_CODE_SET = new LinkedHashSet<String>();
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {
			rowVo = (Map) dsMD_TCALXM.get(i);
			CUST_CODE_SET.add((String)rowVo.get("CUST_CODE"));
		}
		
		//넘길데이터를 담는다.(합산해서 넘기므로 개별건의 rowVo대신에 CURSORVO 이용)
		Map CURSORVO = new HashMap<String, String>();
		
		Iterator<String> CUST_CODE_ITR = CUST_CODE_SET.iterator();
		
		//SECOND_CURSOR,UPDATESATX 조건문을 만족시키기 위해
		int j=0;
		//광고주 개수만큼 반복문.(순서가 달라도 같이 합산하기 위함.)
		while(CUST_CODE_ITR.hasNext()){
			
			//Set에 담은 CUST_CODE를 순차적으로 담는다.
			String CUST_CODE=CUST_CODE_ITR.next();
			
			//돌면서 합산을 하고 바뀌기 직전에 DB에 접근.
			for (int i = 0; i < dsMD_TCALXM.size(); i++) {
				rowVo = (Map) dsMD_TCALXM.get(i);
				rowType = (Integer) rowVo.get("ROW_TYPE");
				
				//광고주가 같을 경우에만 insert
				if(CUST_CODE.equals(rowVo.get("CUST_CODE").toString())){
					//합산을 위해 티베로 쿼리를 담는다.
					FIRST_CURSOR +=",P_TAXX_NUMB"+rowVo.get("TAXX_NUMB").toString()+" IN MD_SATXXH.TAXX_NUMB%TYPE";
					if(j==0){
						SECOND_CURSOR +="P_TAXX_NUMB"+rowVo.get("TAXX_NUMB").toString();
					}else{
						SECOND_CURSOR +=",P_TAXX_NUMB"+rowVo.get("TAXX_NUMB").toString();
					}
					THIRD_CURSOR +=",'"+rowVo.get("TAXX_NUMB").toString()+"'";
					//프로시저 마지막 세금계산서 업데이트 조건부분
					if(j==0){
						UPDATESATX +="'"+rowVo.get("TAXX_NUMB").toString()+"'";
					}else{
						UPDATESATX +=",'"+rowVo.get("TAXX_NUMB").toString()+"'";
					}
					
					//금액합산
					SUM_SUMM_AMTX += ((BigDecimal)rowVo.get("TAXX_AMTX")).longValue();
					SUM_SUMM_AMTX += ((BigDecimal)rowVo.get("TAXX_VATX")).longValue();
					
					
					//데이터들을 담는다.
					CURSORVO.put("SOUS_LNKY", rowVo.get("TAXY_MONT")+"-"+rowVo.get("TAXX_NUMB")); 
					CURSORVO.put("SYST_LNCD", "ko");
					CURSORVO.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
					CURSORVO.put("SLIP_GUBN", searchVo.get("SLIP_GUBN"));
					CURSORVO.put("SLIP_DATE", searchVo.get("SLIP_DATE"));
					CURSORVO.put("MEDX_FLAG", searchVo.get("MEDX_FLAG"));
					CURSORVO.put("DEPT_CODE", searchVo.get("DEPT_CODE"));
					CURSORVO.put("EMPL_CODE", searchVo.get("EMPL_CODE"));
					CURSORVO.put("TAXY_MONT",rowVo.get("TAXY_MONT"));
					CURSORVO.put("UPDT_USID",rowVo.get("UPDT_USID"));
					//합산처리 입력
					CURSORVO.put("FIRST_CURSOR", FIRST_CURSOR);
					CURSORVO.put("SECOND_CURSOR", SECOND_CURSOR);
					CURSORVO.put("THIRD_CURSOR", THIRD_CURSOR);
					CURSORVO.put("UPDATESATX",UPDATESATX);
					CURSORVO.put("SUM_SUMM_AMTX",SUM_SUMM_AMTX);
					//SECOND_CURSOR,UPDATESATX 조건문을 벗어나기 위해.
					j++;
					
				}
			}
		}
		dao.processSAVE10(CURSORVO);	
		
		
		
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {

			rowVo = (Map) dsMD_TCALXM.get(i);
			//개별청약에 전표번호를 기입한다.
			dao.processUPDATE00(rowVo);
		}
		
		return updateCount;
	}
	
	/**
	 * MACA0090 수수료 전표생성
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map searchVo, Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sSEQX_IDXX = "";

		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  


       
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {

			rowVo = (Map) dsMD_TCALXM.get(i);
			//체크확인
			if(rowVo.get("CHEK_FILD")=="1" || rowVo.get("CHEK_FILD").equals("1")){
				rowType = (Integer) rowVo.get("ROW_TYPE");
				
				rowVo.put("SOUS_LNKY", rowVo.get("TAXY_MONT")+"-"+rowVo.get("TAXX_NUMB"));
				//나중에 다시처리 
				rowVo.put("SYST_LNCD", "ko");
				rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
				rowVo.put("SLIP_GUBN", searchVo.get("SLIP_GUBN"));
				rowVo.put("SLIP_DATE", searchVo.get("SLIP_DATE"));
				rowVo.put("MEDX_FLAG", searchVo.get("MEDX_FLAG"));
				rowVo.put("DEPT_CODE", searchVo.get("DEPT_CODE"));
				rowVo.put("EMPL_CODE", searchVo.get("EMPL_CODE"));
				
				dao.processSAVE01(rowVo);
				//개별청약에 전표번호를 기입한다.
				dao.processUPDATE01(rowVo);
				
			}


		}
		
		return updateCount;
	}
	
	/**
	 * MACA0090 수수료 전표 합산생성
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE11(Map searchVo, Map saveData) throws Exception{
		 
		int updateCount = 0;
		 Map rowVo = null;
		 Map custVo = null;
		 int rowType = 0;
		 String sSEQX_IDXX = "";
		 //커서문장을 만들어 넣기 위한 String 
		 String FIRST_CURSOR = "";
		 String SECOND_CURSOR = "";
		 String THIRD_CURSOR="";
		 String UPDATESATX = "";
		 
		List dsMD_TCALXM     = (List) saveData.get("dsMD_TCALXM");  
		
		//광고주코드를 SET에 담는다. 중복이 되지 않도록.
		Set<String> CUST_CODE_SET = new LinkedHashSet<String>();
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {
			rowVo = (Map) dsMD_TCALXM.get(i);
			CUST_CODE_SET.add((String)rowVo.get("CUST_CODE"));
		}

		Iterator<String> CUST_CODE_ITR = CUST_CODE_SET.iterator();

		//넘길데이터를 담는다.(합산해서 넘기므로 개별건의 rowVo대신에 CURSORVO 이용)
		//돌면서 합산을 하고 바뀌기 직전에 DB에 접근.
		Map CURSORVO = new HashMap<String, String>();
		
		//SECOND_CURSOR,UPDATESATX 조건문만족.
		int j = 0;
		//광고주 개수만큼 while 문을 돈다.
		while(CUST_CODE_ITR.hasNext()){
			String CUST_CODE=CUST_CODE_ITR.next();


			for (int i = 0; i < dsMD_TCALXM.size(); i++) {
				rowVo = (Map) dsMD_TCALXM.get(i);
				rowType = (Integer) rowVo.get("ROW_TYPE");
				
				//광고주가 같을 경우에만 insert
				if(CUST_CODE.equals(rowVo.get("CUST_CODE").toString())){
					//합산을 위해 티베로 쿼리를 담는다.
					FIRST_CURSOR +=",P_TAXX_NUMB"+rowVo.get("TAXX_NUMB").toString()+" IN MD_SATXXH.TAXX_NUMB%TYPE";
					if(j==0){
						SECOND_CURSOR +="P_TAXX_NUMB"+rowVo.get("TAXX_NUMB").toString();
					}else{
						SECOND_CURSOR +=",P_TAXX_NUMB"+rowVo.get("TAXX_NUMB").toString();
					}
					THIRD_CURSOR +=",'"+rowVo.get("TAXX_NUMB").toString()+"'";
					//프로시저 마지막 세금계산서 업데이트 조건부분
					if(j==0){
						UPDATESATX +="'"+rowVo.get("TAXX_NUMB").toString()+"'";
					}else{
						UPDATESATX +=",'"+rowVo.get("TAXX_NUMB").toString()+"'";
					}
					
					//데이터들을 담는다.
					CURSORVO.put("SOUS_LNKY", rowVo.get("TAXY_MONT")+"-"+rowVo.get("TAXX_NUMB"));
					CURSORVO.put("SYST_LNCD", "ko");
					CURSORVO.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
					CURSORVO.put("SLIP_GUBN", searchVo.get("SLIP_GUBN"));
					CURSORVO.put("SLIP_DATE", searchVo.get("SLIP_DATE"));
					CURSORVO.put("MEDX_FLAG", searchVo.get("MEDX_FLAG"));
					CURSORVO.put("DEPT_CODE", searchVo.get("DEPT_CODE"));
					CURSORVO.put("EMPL_CODE", searchVo.get("EMPL_CODE"));
					CURSORVO.put("TAXY_MONT",rowVo.get("TAXY_MONT"));
					CURSORVO.put("UPDT_USID",rowVo.get("UPDT_USID"));
					//합산처리 입력
					CURSORVO.put("FIRST_CURSOR", FIRST_CURSOR);
					CURSORVO.put("SECOND_CURSOR", SECOND_CURSOR);
					CURSORVO.put("THIRD_CURSOR", THIRD_CURSOR);
					CURSORVO.put("UPDATESATX",UPDATESATX);
					//SECOND_CURSOR,UPDATESATX 조건문응 벗어남.
					j++;
				}			
				
			}
			
		}
		
		dao.processSAVE11(CURSORVO);
		
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {

			rowVo = (Map) dsMD_TCALXM.get(i);
			//개별청약에 전표번호를 기입한다.
			dao.processUPDATE01(rowVo);
		}
		
		return updateCount;
	}
	
	/**
	 * MACA0090 임시전표삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map searchVo, Map saveData) throws Exception{
		 
		 int deleteCount = 0;
		 Map rowVo = null;
		 String sSEQX_IDXX = "";

		List dsMD_TCALXM     = (List) saveData.get("dsMD_VOCHXM");  
		
		//광고주코드를 SET에 담는다. 중복이 되지 않도록.
		Set<String> SACH_NUMB_SET = new LinkedHashSet<String>();
		for (int i = 0; i < dsMD_TCALXM.size(); i++) {
			rowVo = (Map) dsMD_TCALXM.get(i);
			SACH_NUMB_SET.add((String)rowVo.get("SACH_NUMB"));
		}
		
		
		Iterator<String> SACH_NUMB_ITR = SACH_NUMB_SET.iterator();
		while(SACH_NUMB_ITR.hasNext()){

			rowVo = (Map) dsMD_TCALXM.get(0);
			//나중에 다시처리
			rowVo.put("SYST_LNCD","ko");
			rowVo.put("SACH_NUMB", SACH_NUMB_ITR.next());
			
			//1. 전표 테이블 삭제.
			dao.processDELETE00(rowVo);
			 
			//2.전표번호삭제
			//세금계산서 테이블에 전표번호 삭제
			//dao.processDELETE01(rowVo);
			//개별청약서에 위수탁 전표번호 삭제
			//dao.processUPDATE02(rowVo);
			//개별청약서에 수수료 전표번호 삭제
			//dao.processUPDATE03(rowVo);
		}		
		
		
		return deleteCount;
	}
	
	

	
}
