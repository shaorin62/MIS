/**
 * core.erp.pcm.service.impl.PACA0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;


import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.pac.service.PACA0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PACA0030ServiceImpl  - 제작 전표처리
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.10.20
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.20	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Service("PACA0030Service")
public class PACA0030ServiceImpl extends EgovAbstractServiceImpl implements PACA0030Service {

	/**
	 * 공통코드관리(신규) DAO class inject.
	 */
	@Resource(name = "PACA0030Dao")
	private PACA0030Dao dao;

	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SATXXHSL", dao.processSEARCH00(searchVo));
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
		returnMap.put("dsPD_VOCHXMSL", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SUJUMDBY", dao.processSEARCH02(searchVo));
		return returnMap;

    }

	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_VOCHXMBY", dao.processSEARCH03(searchVo));
		return returnMap;

    }
	
	

	/**
	 * PACA0030 매출 전표 생성 로직
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
		 String sSEQX_IDXX = "";

		List dsPD_SATXXHSL     = (List) saveData.get("dsPD_SATXXHSL");  


        //계약서 데이터의 경우 INSERT 는 없고 UPDATE 만 가능
		for (int i = 0; i < dsPD_SATXXHSL.size(); i++) {

			rowVo = (Map) dsPD_SATXXHSL.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			 if (rowType == 2) {
				 if(rowVo.get("CHK").equals("1")){
					 
					 sSEQX_IDXX = (String) rowVo.get("SEQX_IDXX");
					 if(sSEQX_IDXX == "" || sSEQX_IDXX == null){
						 sSEQX_IDXX = dao.getSEQX_IDXX();
						 
						 System.out.println("======================>" + sSEQX_IDXX);
						 rowVo.put("SEQX_IDXX", sSEQX_IDXX );
					 }
					 
					 rowVo.put("GBNX_FLAG", "P" );
					 dao.processSAVE00(rowVo);
					 
					 //세금계산서 헤더에 전표 번호 저장
					 updateCount += dao.processUPDATE00(rowVo);
						
				}
			}
		}
		
		return deleteCount + updateCount;
	}
	
	
	/**
	 * PACA0030 매입 전표 생성 로직
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
		 String sSEQX_IDXX = "";

		List dsPD_SUJUMDBY     = (List) saveData.get("dsPD_SUJUMDBY");  


		for (int i = 0; i < dsPD_SUJUMDBY.size(); i++) {

			rowVo = (Map) dsPD_SUJUMDBY.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			 if (rowType == 2) {
				 if(rowVo.get("CHK").equals("1")){
					 
					 sSEQX_IDXX = (String) rowVo.get("SEQX_IDXX");

					 if(sSEQX_IDXX== "" || sSEQX_IDXX == null){
						 
						 sSEQX_IDXX = dao.getSEQX_IDXX();
						 rowVo.put("SEQX_IDXX", sSEQX_IDXX );
					 }
					
					 rowVo.put("GBNX_FLAG", "B" );
					 dao.processSAVE00(rowVo);
					 
					 //정산 테이블에 전표 번호 저장
					 updateCount += dao.processUPDATE01(rowVo);
						
				}
				
			}
		}
		
		return deleteCount + updateCount;
	}
	
	
	/**
	 * 제작 매출전표 생성
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산등록 전표 해더 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC00(Map searchVo, Map dataVo) throws Exception {
		int updateCount = 0;
		Map rowVo = null;
		Map rowVoData = null;
		int rowType = 0;
		int iBsdiv = 0, iColFlag = 0, iCnt = 0;
		int iSLIP_LINE = 0;
		String SOUS_LNKY = "";
		
		

		
		//개별 발행
		if(searchVo.get("CRET_FLAG").toString().equals("0")){
			List dsPD_SATXXHSL_SLIP     = (List) dataVo.get("dsPD_SATXXHSL_SLIP");
			List dsPD_SATXXHSL     = (List) dataVo.get("dsPD_SATXXHSL");  
			for (int i = 0; i < dsPD_SATXXHSL_SLIP.size(); i++) {

				rowVo = (Map) dsPD_SATXXHSL_SLIP.get(i);
				rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
				rowVo.put("SLIP_GUBN", searchVo.get("SLIP_GUBN"));
				rowVo.put("SOUS_LNKY", searchVo.get("SOUS_LNKY"));
				rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
				rowVo.put("POST_DATE", searchVo.get("POST_DATE"));
				rowVo.put("DEPT_CODE", searchVo.get("DEPT_CODE"));
				updateCount += dao.processPROC00(rowVo);
			}
		
			
			
			
		//전표 집합 발행 (한개의 전표 번호에 여러 전표 묶음)
		}else if(searchVo.get("CRET_FLAG").toString().equals("1")){
			
			List dsPD_SATXXHSL_SLIP     = (List) dataVo.get("dsPD_SATXXHSL_SLIP");
			List dsPD_SATXXHSL     = (List) dataVo.get("dsPD_SATXXHSL");
			
			//합산 기준 생성
			for (int i = 0; i < dsPD_SATXXHSL.size(); i++) {
				rowVo = (Map) dsPD_SATXXHSL.get(i);
				if(rowVo.get("CHK").equals("1")){
					iBsdiv = Integer.parseInt(String.valueOf(rowVo.get("TRAN_RANK")));
					if(iColFlag < iBsdiv){
						iColFlag = iBsdiv;
					}
				}
			}
			
			//기준수 많큼 반복
			for( iCnt =1 ; iCnt <= iColFlag; iCnt ++){
				int iCnt2 = 0;
				String sSLIP_NUMB = "";
				iSLIP_LINE = 0;
				
				for (int i = 0; i < dsPD_SATXXHSL.size(); i++) {
					rowVo = (Map) dsPD_SATXXHSL.get(i);
					if(rowVo.get("CHK").equals("1")){
						if(Integer.parseInt(String.valueOf(rowVo.get("TRAN_RANK"))) == iCnt){
							
							if(iCnt2 == iCnt){
							}else{
								rowVo = (Map) dsPD_SATXXHSL.get(i);
								//출처 연결키 견적 번호 & 순번
								SOUS_LNKY = (String) rowVo.get("TAXY_MONT") + "-" + (String) rowVo.get("TAXX_NUMB");
								rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
								rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
								rowVo.put("SLIP_GUBN", searchVo.get("SLIP_GUBN"));
								rowVo.put("SOUS_LNKY", SOUS_LNKY);
								rowVo.put("POST_DATE", searchVo.get("POST_DATE"));
								rowVo.put("DEPT_CODE", searchVo.get("DEPT_CODE"));
								rowVo.put("SLIP_LINE", iSLIP_LINE);
								
								/*매출 전표 마스터 저장 */
								updateCount += dao.processMASTER_SAVE_SL(rowVo);
								
								/*전표 번호 리턴*/
								sSLIP_NUMB = (String)dao.processSLIP_NUMB(SOUS_LNKY);
								
							}
							
							iSLIP_LINE += 1;
							rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
							rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
							rowVo.put("SLIP_NUMB", sSLIP_NUMB);
							rowVo.put("SLIP_LINE", iSLIP_LINE);
							
							/*차변 개별총액 입력 +  전표 번호 UPDATE*/ 
			  				updateCount += dao.processSP_LINE_SAVE_SL_D(rowVo);
			  				
			  				
			  				iSLIP_LINE += 1;
			  				rowVo.put("SLIP_LINE", iSLIP_LINE);
			  				/*대변 개별 급액 입력*/
			  				updateCount += dao.processSP_LINE_SAVE_SL_C(rowVo);
			  				
			  				
			  				iSLIP_LINE += 1;
			  				rowVo.put("SLIP_LINE", iSLIP_LINE);
			  				/*대변 부가가치세액(차변)*/
			  				updateCount += dao.processSP_LINE_SAVE_VAT_SL(rowVo);
			  				
			  				
			  				/* 전표 FINISH 마무리~*/
			  				updateCount += dao.processSP_FINISH(rowVo);

							iCnt2 = iCnt;	
						}
							
					}
				}
				
			}
			
		}
		
		
		updateCount += processSAVE00(dataVo);

		return updateCount;

	}
	
	
	/**
	 * 제작 매입전표 생성
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산등록 전표 해더 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC01(Map searchVo, Map dataVo) throws Exception {
		int updateCount = 0;

		// 개별 생성
		if(searchVo.get("CRET_FLAG").toString().equals("0")){
			this.processPROC04(searchVo, dataVo);
			
		// 집합 발행 선택시
		}else if(searchVo.get("CRET_FLAG").toString().equals("1")){
			this.processPROC05(searchVo, dataVo);

		//합산 생성 선택시
		}else if(searchVo.get("CRET_FLAG").toString().equals("2")){
			this.processPROC03(searchVo, dataVo);
			
		}

		return updateCount;

	}
	
	
	//매입전표 집합생성 선택시
		public void processPROC05(Map searchVo, Map dataVo) throws Exception {
			int updateCount = 0;
			Map rowVo = null;
			int rowType = 0;
			int iBsdiv = 0, iColFlag = 0, iCnt = 0;
			int iSLIP_LINE = 0;
			
			String SOUS_LNKY = "";
			String sAGCY_YSNO = "";
			String sCITY_CODE = "";
			String sACCT_GUBN = "";
			
			List dsPD_SUJUMDBY     = (List) dataVo.get("dsPD_SUJUMDBY");
			
			//합산 기준 생성 (추후에 사용자가 기준을 변경할 경우를 대비 )
			for (int i = 0; i < dsPD_SUJUMDBY.size(); i++) {
				rowVo = (Map) dsPD_SUJUMDBY.get(i);
				if(rowVo.get("CHK").equals("1")){
					iBsdiv = Integer.parseInt(String.valueOf(rowVo.get("TRAN_RANK2")));
					if(iColFlag < iBsdiv){
						iColFlag = iBsdiv;
					}
				}
			}
			
			//기준수 많큼 반복
			for( iCnt =1 ; iCnt <= iColFlag; iCnt ++){
				int iCnt2 = 0;
				String sSLIP_NUMB = "";
				iSLIP_LINE = 0;
				double iTAXX_AMTX = 0;
				double iTAXX_VATX = 0;
				double iACCT_AMTX = 0;
				
				for (int i = 0; i < dsPD_SUJUMDBY.size(); i++) {
					rowVo = (Map) dsPD_SUJUMDBY.get(i);
					if(rowVo.get("CHK").equals("1")){
						if(Integer.parseInt(String.valueOf(rowVo.get("TRAN_RANK2"))) == iCnt){
							
							if(iCnt2 == iCnt){
							}else{
								rowVo = (Map) dsPD_SUJUMDBY.get(i);
								
								//출처 연결키 견적 번호 & 순번
								SOUS_LNKY = (String) rowVo.get("PREE_CODE") + "-" + (String) rowVo.get("PREE_IDXX");
							
								iSLIP_LINE += 1; 
								rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
								rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
								rowVo.put("SLIP_GUBN", searchVo.get("SLIP_GUBN"));
								rowVo.put("SOUS_LNKY", SOUS_LNKY);
								rowVo.put("POST_DATE", searchVo.get("POST_DATE"));
								rowVo.put("DEPT_CODE", searchVo.get("DEPT_CODE"));
								
								rowVo.put("SLIP_LINE", iSLIP_LINE);
								
								/*전표 마스터 저장 */
								updateCount += dao.processMASTER_SAVE(rowVo);
								
								/*전표 번호 리턴*/
								sSLIP_NUMB = (String)dao.processSLIP_NUMB(SOUS_LNKY);	
				  				
				  				rowVo.put("SLIP_NUMB", sSLIP_NUMB);
							}
							
							sAGCY_YSNO = (String) rowVo.get("AGCY_YSNO");
							sCITY_CODE = (String) rowVo.get("CITY_CODE");
							
							//개인 모델료 일경우 예수금 계정으로 들어간다. 수정. 2017.04.12 모델료 상관없이 개인일 경우 개인계정으로 들어감
							if(sCITY_CODE.equals("2") && sAGCY_YSNO.equals("Y")){
								
								iSLIP_LINE += 1;
								rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
								rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
								
								iTAXX_AMTX =  	((BigDecimal)rowVo.get("TAXX_AMTX")).longValue();
								iACCT_AMTX =  	((BigDecimal)rowVo.get("ACCT_AMTX")).longValue();
								
								// 개인 모델료 대변금액
								rowVo.put("TAXX_AMTX", iACCT_AMTX);
								rowVo.put("SLIP_NUMB", sSLIP_NUMB);
								rowVo.put("SLIP_LINE", iSLIP_LINE);
								
								/*대변 합산급액 입력*/
				  				updateCount += dao.processSP_LINE_SAVE_C(rowVo);
								rowVo.put("TAXX_AMTX", iTAXX_AMTX);
								
								iSLIP_LINE += 1;
								rowVo.put("SLIP_LINE", iSLIP_LINE);
								/* 차변 모델료 차변 입력 */
				  				updateCount += dao.processSP_LINE_SAVE_D(rowVo);
				  				
								iSLIP_LINE += 1;
								rowVo.put("SLIP_LINE", iSLIP_LINE);
								/* 대변 자유직업 소득세 입력 */
								updateCount += dao.processSP_LINE_SAVE_C_YESU(rowVo);
								
								iSLIP_LINE += 1;
								rowVo.put("SLIP_LINE", iSLIP_LINE);
								/* 대변 자유직업 주민세 입력 */
								updateCount += dao.processSP_LINE_SAVE_C_YESU2(rowVo);

								
							}else{
								
								//개인 모델료 에이전시 아닐경우 일반형태
								iSLIP_LINE += 1;
								rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
								rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
						
								iTAXX_AMTX =  	((BigDecimal)rowVo.get("TAXX_AMTX")).longValue();
								iTAXX_VATX = 	((BigDecimal)rowVo.get("TAXX_VATX")).longValue();
								
								rowVo.put("TAXX_AMTX", iTAXX_AMTX + iTAXX_VATX);
								rowVo.put("SLIP_NUMB", sSLIP_NUMB);
								rowVo.put("SLIP_LINE", iSLIP_LINE);
								
								/*대변 합산급액 입력*/
				  				updateCount += dao.processSP_LINE_SAVE_C(rowVo);
								rowVo.put("TAXX_AMTX", iTAXX_AMTX);

								iSLIP_LINE += 1;
								rowVo.put("SLIP_LINE", iSLIP_LINE);
									
								/*차변 개별급액 입력*/
				  				updateCount += dao.processSP_LINE_SAVE_D(rowVo);
				  				
				  				iSLIP_LINE += 1;
								 rowVo.put("SLIP_LINE", iSLIP_LINE);
								 /*차변 부가가치세액(차변)*/
				  				 updateCount += dao.processSP_LINE_SAVE_VAT(rowVo);
							}
							
			  				//----------/* 전표 테이블 데이터 저장 */------------
			  				String sSEQX_IDXX;
			  				sSEQX_IDXX = (String) rowVo.get("SEQX_IDXX");
							 if(sSEQX_IDXX== "" || sSEQX_IDXX == null){
								 sSEQX_IDXX = dao.getSEQX_IDXX();
								 rowVo.put("SEQX_IDXX", sSEQX_IDXX );
							 }
							 rowVo.put("GBNX_FLAG", "B" );
							 dao.processSAVE00(rowVo);
							 //--------------------------------------------		
						
							 //정산 테이블에 전표 번호 저장
							 updateCount += dao.processUPDATE01(rowVo);
			  				
			  				 /* 전표 FINISH */
			  				 updateCount += dao.processSP_FINISH(rowVo);

							iCnt2 = iCnt;	
						}
							
					}
				}
			}
			
			

			
		}
	
	
	//매입전표 개별생성
	public void processPROC04(Map searchVo, Map dataVo) throws Exception {
		int updateCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sAGCY_YSNO = "";
		String sCITY_CODE = "";
		
		List dsPD_SUJUMDBY_SLIP     = (List) dataVo.get("dsPD_SUJUMDBY_SLIP");  
		for (int i = 0; i < dsPD_SUJUMDBY_SLIP.size(); i++) {

			rowVo = (Map) dsPD_SUJUMDBY_SLIP.get(i);
			rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
			rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
			rowVo.put("SLIP_GUBN", searchVo.get("SLIP_GUBN"));
			rowVo.put("SOUS_LNKY", searchVo.get("SOUS_LNKY"));
			rowVo.put("POST_DATE", searchVo.get("POST_DATE"));
			rowVo.put("DEPT_CODE", searchVo.get("DEPT_CODE"));
			
			//에이전시 (개인+모델료[에이전시여부]) 가 더이상 개인 구분에서 제외됨 2017_04_12 (견적항목중 모델료체크인것은 모델료 추가) 2017_05_12
			sAGCY_YSNO = (String) rowVo.get("AGCY_YSNO");
			sCITY_CODE = (String) rowVo.get("CITY_CODE");
			
			//개인 모델료 일경우 예수금 계정으로 들어간다.
			if(sCITY_CODE.equals("2") && sAGCY_YSNO.equals("Y")){
				updateCount += dao.processPROC02(rowVo);
			}else{
				updateCount += dao.processPROC01(rowVo);
			}
			
		}
		
		updateCount += processSAVE01(dataVo);
	}
	
	/**
	 * 제작 매입전표 합산생성
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산등록 전표 해더 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC03(Map searchVo, Map dataVo) throws Exception {
		Map rowVo = null;
		Map rowVo2 = null;
		
		int iBsdiv = 0;
		int iColFlag = 0;
		int iCnt,iCnt2,iCnt3,iCnt4,iCnt5 ;
		String SOUS_LNKY = "";
		int iSLIP_LINE = 0;

		
		List dsPD_SUJUMDBY     = (List) dataVo.get("dsPD_SUJUMDBY");
		for (int i = 0; i < dsPD_SUJUMDBY.size(); i++) {
			rowVo = (Map) dsPD_SUJUMDBY.get(i);
			
			if(rowVo.get("CHK").equals("1")){
				iBsdiv = Integer.parseInt(String.valueOf(rowVo.get("TRAN_RANK")));
				if(iColFlag < iBsdiv){
					iColFlag = iBsdiv;
				}
			}
		}
		
		
		for( iCnt =1 ; iCnt <= iColFlag; iCnt ++){
			iCnt2 = 0;		//같은 외주처 최초 1회를 위한 합산 변수 
			iCnt3 = 0;		// 마지막 반복을 위한 변수
			iCnt4 = 0;		//같은 계정분류를 위한 변수
			iCnt5 = 0;		//같은 외주처 같은 계정 최초 1회를 위한 합산변수 
			double iAMT = 0;
			double iVAT = 0;
			double iACC = 0;
			double iSumAMT = 0;
			double iSumVAT = 0;
			double iSumACC = 0;		//개인 대변
			double iSUMM_AMTX = 0;
			double iTAXX_AMTX = 0;
			double iTAXX_VATX =0;
			double iSUMM_ACCX = 0;		//개인 대변 합산
			
			double iYESU = 0;			//예수금(자유직업 소득세)
			double iYESU2 = 0;			//예수금(자유직업 주민세)
			double iSumYESU = 0;
			double iSumYESU2 = 0;		

			String sSLIP_NUMB = "";
			String sMEMO_FILD = "";  //대표적요 생성 (가장 큰 금액 적용)
			double iMAX_AMTX = 0; 	 //대표적요를 위한 큰금액 찾기 
			String sCITY_CODE = "";  //개인 업체 구분
			String sAGCY_YSNO = "";  //모델료구분
			
			//그룹별 계산시작
			for (int i = 0; i < dsPD_SUJUMDBY.size(); i++) {
				rowVo = (Map) dsPD_SUJUMDBY.get(i);
				if(rowVo.get("CHK").equals("1")){
					if(Integer.parseInt(String.valueOf(rowVo.get("TRAN_RANK"))) == iCnt){                                                     
						
						iAMT = 				((BigDecimal)rowVo.get("TAXX_AMTX")).longValue();
						iVAT = 				((BigDecimal)rowVo.get("TAXX_VATX")).longValue();
						iACC = 				((BigDecimal)rowVo.get("ACCT_AMTX")).longValue();
						iYESU = 			((BigDecimal)rowVo.get("YESU_AMTX")).longValue();
						iYESU2 = 			((BigDecimal)rowVo.get("YESU_AMTX2")).longValue();
								
						iSumAMT += iAMT;
						iSumVAT += iVAT;
						iSumACC += iACC;
						iSumYESU += iYESU;
						iSumYESU2 += iYESU2;
						
						//같은 제작사중 가장 큰금액을 비교 적요 추출
						if(iMAX_AMTX < ((BigDecimal)rowVo.get("TAXX_AMTX")).longValue()){
							iMAX_AMTX = ((BigDecimal)rowVo.get("TAXX_AMTX")).longValue();
							sMEMO_FILD = (String) rowVo.get("MEMO_FILD");
						}
						
						iCnt3 = i;

					}
				}
			}
			
			iSLIP_LINE = 0;

			for (int i = 0; i < dsPD_SUJUMDBY.size(); i++) {
				rowVo = (Map) dsPD_SUJUMDBY.get(i);
				
				// 같은 계정을 묶기 위한 기준
				iCnt4 = Integer.parseInt(String.valueOf(rowVo.get("TRAN_RANK3")));
				if(rowVo.get("CHK").equals("1")){
					if(Integer.parseInt(String.valueOf(rowVo.get("TRAN_RANK"))) == iCnt){
						
						iTAXX_AMTX =  	((BigDecimal)rowVo.get("TAXX_AMTX")).longValue();
						iTAXX_VATX = 	((BigDecimal)rowVo.get("TAXX_VATX")).longValue();
						
						
						if(iCnt2 == iCnt){
						}else{
							rowVo = (Map) dsPD_SUJUMDBY.get(i);
							
							//출처 연결키 견적 번호 & 순번
							SOUS_LNKY = (String) rowVo.get("PREE_CODE") + "-" + (String) rowVo.get("PREE_IDXX");
						
							
							rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
							rowVo.put("ACCT_GUBN", searchVo.get("ACCT_GUBN"));
							rowVo.put("SLIP_GUBN", searchVo.get("SLIP_GUBN"));
							rowVo.put("SOUS_LNKY", SOUS_LNKY);
							rowVo.put("POST_DATE", searchVo.get("POST_DATE"));
							rowVo.put("DEPT_CODE", searchVo.get("DEPT_CODE"));
							
							
							
							/*전표 마스터 저장 */
							dao.processMASTER_SAVE(rowVo);
							
							/*전표 번호 리턴*/
							sSLIP_NUMB = (String)dao.processSLIP_NUMB(SOUS_LNKY);	
			  				
							sCITY_CODE = (String) rowVo.get("CITY_CODE");
							sAGCY_YSNO = (String) rowVo.get("AGCY_YSNO");

							iSLIP_LINE += 1; 
							rowVo.put("SLIP_LINE", iSLIP_LINE);
							rowVo.put("MEMO_FILD", sMEMO_FILD + " 외");
							rowVo.put("SLIP_NUMB", sSLIP_NUMB);

							//------------------------개인 및 업체 구분-------------------------
							//개인 모델료 일경우 예수금 계정으로 들어간다. 수정. 2017.04.12 모델료 상관없이 개인일 경우 개인계정으로 들어감
							if(sCITY_CODE.equals("2") && sAGCY_YSNO.equals("Y")){
								rowVo.put("TAXX_AMTX", iSumACC);
				  				
							}else{
								rowVo.put("TAXX_AMTX", iSumAMT + iSumVAT);
								rowVo.put("TAXX_VATX", iSumVAT);				  				
				  				/*대변 합산급액 입력*/
							}
							//------------------------개인 및 업체 구분 종료-------------------------		
							/*대변 합산급액 입력*/
							dao.processSP_LINE_SAVE_C(rowVo);
			  				/* 수정금액 복구 */
			  				rowVo.put("TAXX_AMTX", iTAXX_AMTX);
							rowVo.put("TAXX_VATX", iTAXX_VATX);
							rowVo.put("MEMO_FILD", sMEMO_FILD);					
						}
						
						/* ---------------------전표 테이블 데이터 저장 ------------------*/
		  				String sSEQX_IDXX;
		  				sSEQX_IDXX = (String) rowVo.get("SEQX_IDXX");
						 if(sSEQX_IDXX== "" || sSEQX_IDXX == null){
							 
							 sSEQX_IDXX = dao.getSEQX_IDXX();
							 rowVo.put("SEQX_IDXX", sSEQX_IDXX );
						 }
						 System.out.println("=======================>" + sSLIP_NUMB );
						 rowVo.put("SLIP_NUMB", sSLIP_NUMB);
						 rowVo.put("GBNX_FLAG", "B" ); 
						 dao.processSAVE00(rowVo);
						 
						//수주 테이블 전표 번호 저장(기존 일반 적인 경우 차변금액 치면서 작성하나 합산의 경우 차변을 한번만 치기 때문에)
						 dao.processUPDATE02(rowVo);
						 
						//정산전표 테이블에 전표 번호 저장
						 dao.processUPDATE01(rowVo);
						 
						 /* ---------------------전표 테이블 데이터 저장 종료----------*/
						iSUMM_AMTX = 0;
						iSUMM_ACCX = 0;
						//같은 외주처 이면서 같은 계정끼리 묶어야 함===================================
						for (int a = 0; a < dsPD_SUJUMDBY.size(); a++) {
							rowVo2 = (Map) dsPD_SUJUMDBY.get(a);
							if(rowVo2.get("CHK").equals("1")){
								//같은 외주처
								if(Integer.parseInt(String.valueOf(rowVo2.get("TRAN_RANK"))) == iCnt){
									//같은 계정
									if(Integer.parseInt(String.valueOf(rowVo2.get("TRAN_RANK3"))) == iCnt4){

										iSUMM_AMTX += Double.parseDouble(String.valueOf(rowVo2.get("TAXX_AMTX")));
										//iSUMM_ACCX += Double.parseDouble(String.valueOf(rowVo2.get("TAXX_AMTX")));

									}
								}
							}
						}
						
						if(iCnt5 != Integer.parseInt(String.valueOf(rowVo.get("TRAN_RANK3")))){
							System.out.println("==========>" + iSUMM_AMTX);
							iSLIP_LINE += 1;
							rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
							rowVo.put("SLIP_NUMB", sSLIP_NUMB);
							rowVo.put("TAXX_AMTX", iSUMM_AMTX);
							rowVo.put("SLIP_LINE", iSLIP_LINE);

							//sMEMO_FILD = (String) rowVo.get("MEMO_FILD");
			  				rowVo.put("MEMO_FILD", sMEMO_FILD + " 외");
			  				
							/*차변 개별급액 입력*/
			  				dao.processSP_LINE_SAVE_D(rowVo);
			  				
			  				rowVo.put("MEMO_FILD", sMEMO_FILD);
						}
						
						iCnt5 = Integer.parseInt(String.valueOf(rowVo.get("TRAN_RANK3")));
						
						//같은 외주처 이면서 같은 계정끼리 묶어야 함 종료===================================

		  				
		  				//마지막 라인 
						if(i == iCnt3){
							rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
							rowVo.put("SLIP_NUMB", sSLIP_NUMB);
							
							iSLIP_LINE += 1;
							rowVo.put("SLIP_LINE", iSLIP_LINE);
							rowVo.put("MEMO_FILD", sMEMO_FILD + " 외");
							
							//개인 업체 부가세 구분 
							sCITY_CODE = (String) rowVo.get("CITY_CODE");
							sAGCY_YSNO = (String) rowVo.get("AGCY_YSNO");
							if(sCITY_CODE.equals("2") && sAGCY_YSNO.equals("Y")){
								
								//예수금 (자유직업 소득세, 자유직업 주민세)
								rowVo.put("YESU_AMTX", iSumYESU);
								rowVo.put("YESU_AMTX2", iSumYESU2);
								
								iSLIP_LINE += 1;
								rowVo.put("SLIP_LINE", iSLIP_LINE);
								/* 대변 자유직업 소득세 입력 */
								dao.processSP_LINE_SAVE_C_YESU(rowVo);
								
								iSLIP_LINE += 1;
								rowVo.put("SLIP_LINE", iSLIP_LINE);
								/* 대변 자유직업 주민세 입력 */
								dao.processSP_LINE_SAVE_C_YESU2(rowVo);
							}else{

								rowVo.put("TAXX_AMTX", iSumAMT);
								rowVo.put("TAXX_VATX", iSumVAT);
				  				
								/*차변 부가가치세액(차변)*/
				  				dao.processSP_LINE_SAVE_VAT(rowVo);
				  				
							}
							
							rowVo.put("MEMO_FILD", sMEMO_FILD);
			  				/* 전표 FINISH */
			  				dao.processSP_FINISH(rowVo);
							
						}

						iCnt2 = iCnt;	
					}

				}
			}
			
			
		}

	}
	
	
	/**
	 * PACA0030 제작 매출전표 삭제 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map saveData, Map searchVo) throws Exception{
		 
		 int deleteCount = 0;
		 Map rowVo = null;
		 String iSACH_NUMB = "";
		 

		List dsPD_VOCHXMSL     = (List) saveData.get("dsPD_VOCHXMSL");  

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_VOCHXMSL.size(); i++) {

        	rowVo = (Map) dsPD_VOCHXMSL.get(i);
        	
        	rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
        	
        	
        	
        	System.out.println("================>" + searchVo.get("SYST_LNCD"));
        	
        	if(rowVo.get("CHK").equals("1")){
        		if(!iSACH_NUMB.equals(rowVo.get("SACH_NUMB").toString()))
        		//전표 번호로 1회만 삭제 수정
        		deleteCount += dao.processDELETE00(rowVo);
        		
        		iSACH_NUMB = (String) rowVo.get("SACH_NUMB");
        	}

		}
		
		return deleteCount ;
	}
	
	
	/**
	 * PACA0030 제작 매입전표 삭제 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map saveData, Map searchVo) throws Exception{
		 
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sSLIP_NUMB = "";
		 

		List dsPD_VOCHXMBY     = (List) saveData.get("dsPD_VOCHXMBY");  

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_VOCHXMBY.size(); i++) {

        	rowVo = (Map) dsPD_VOCHXMBY.get(i);
        	
        	rowVo.put("SYST_LNCD", searchVo.get("SYST_LNCD"));
        	
        	//합산 전표시 전표 번호가 같은데 로우가 생기기때문에 전표번호로 한번만 삭제 
        	if(rowVo.get("CHK").equals("1")){
        		if(!sSLIP_NUMB.equals(rowVo.get("PUCH_NUMB").toString()) ){
        			deleteCount += dao.processDELETE01(rowVo);
        			
        			sSLIP_NUMB = (String) rowVo.get("PUCH_NUMB");
        			
        		}
        	}
		}
		
		return deleteCount ;
	}
	
}
