/**
 * core.erp.pcm.service.impl.PACA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;







import core.erp.pac.service.PACA0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PACA0010ServiceImpl  - 제작 세금계산서 생성을 위함
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.10.10
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.10	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Service("PACA0010Service")
public class PACA0010ServiceImpl extends EgovAbstractServiceImpl implements PACA0010Service {

	/**
	 * 공통코드관리(신규) DAO class inject.
	 */
	@Resource(name = "PACA0010Dao")
	private PACA0010Dao dao;

	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SUJUMH", dao.processSEARCH00(searchVo));
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
		returnMap.put("dsPD_SATXXH", dao.processSEARCH01(searchVo));
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
		returnMap.put("dsPD_SATXAL", dao.processSEARCH02(searchVo));
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
		returnMap.put("dsPD_SATXXD", dao.processSEARCH03(searchVo));
		return returnMap;
    }
	
	
	/**
	 * PACA0010 제작세금계산서  합산발행 건
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
		 int iBsdiv = 0;
		 int iColFlag = 0;
		 int iCnt,iCnt2 ;
		 
		 String sSATX_NUMB = "";
		 String sTAXY_MONT = "";
		 String sTAXX_NUMB = "";
		 String sDEND_DATE = "";
		 String sPRNT_DATE = "";
		 String sTAXX_IDXX = "";
		 String sTAXX_SANB = "";
		 String sTAXX_GUBN = "";
		 double iTAXX_AMTX = 0;
		 double iTAXX_VATX = 0;

		List dsPD_CONTXH     = (List) saveData.get("dsPD_SUJUMH");  


		//그룹 최대값을 설정
				for (int i = 0; i < dsPD_CONTXH.size(); i++) {
					rowVo = (Map) dsPD_CONTXH.get(i);
					
					if(rowVo.get("CHK").equals("1")){
						iBsdiv = Integer.parseInt(String.valueOf(rowVo.get("RANK_TANS")));
						if(iColFlag < iBsdiv){
							iColFlag = iBsdiv;
						}
						
					}
				}
				
				for( iCnt =1 ; iCnt <= iColFlag; iCnt ++){
					iCnt2 = 0;
					double iAMT = 0;
					double iVAT = 0;
					double iSumAMT = 0;
					double iSumVAT = 0;
					double iSUMM_AMTX = 0;
					double iSum = 0;
					String sHIGH_MEMO = "";
					double iHIGH_AMT = 0;
					
					//그룹별 계산시작
					for (int i = 0; i < dsPD_CONTXH.size(); i++) {
						rowVo = (Map) dsPD_CONTXH.get(i);
						if(rowVo.get("CHK").equals("1")){
							if(Integer.parseInt(String.valueOf(rowVo.get("RANK_TANS"))) == iCnt){
								
								iAMT = 				((BigDecimal)rowVo.get("TAXX_AMTX")).longValue();
								iVAT = 				((BigDecimal)rowVo.get("TAXX_VATX")).longValue();
								iSUMM_AMTX = 	((BigDecimal)rowVo.get("SUMM_AMTX")).longValue();
								
								iSumAMT += iAMT;
								iSumVAT += iVAT;
								iSum += iSUMM_AMTX; 
								
								//가장 높은 금액의 제작 건명을 담아 대표 비고로 사용하기 위함 
								if(iHIGH_AMT <  iAMT){
									sHIGH_MEMO = (String) rowVo.get("MEMO_FILD");
									iHIGH_AMT = iAMT;
									
								}
								
							}
						}
					}
					
					for (int i = 0; i < dsPD_CONTXH.size(); i++) {
						rowVo = (Map) dsPD_CONTXH.get(i);
						if(rowVo.get("CHK").equals("1")){
							if(Integer.parseInt(String.valueOf(rowVo.get("RANK_TANS"))) == iCnt){
								
								iTAXX_AMTX =  	((BigDecimal)rowVo.get("TAXX_AMTX")).longValue();
								iTAXX_VATX = 	((BigDecimal)rowVo.get("TAXX_VATX")).longValue();
								
								if(iCnt2 == iCnt){
								}else{
									sTAXY_MONT = "";
									sDEND_DATE ="";
									sTAXX_NUMB = "";
									
									sDEND_DATE = (String) searchVo.get("DEND_DATE");
									sTAXY_MONT = sDEND_DATE.substring(0, 6);
									sTAXX_NUMB = dao.getTAXX_NUMB(sTAXY_MONT);
									
									rowVo.put("TAXY_MONT", sTAXY_MONT);
									rowVo.put("TAXX_NUMB", sTAXX_NUMB);
									rowVo.put("TAXX_AMTX", iSumAMT);
									rowVo.put("TAXX_VATX", iSumVAT ); 
									rowVo.put("SUMM_AMTX", iSum );
									rowVo.put("DEND_DATE", sDEND_DATE );
									rowVo.put("PRNT_DATE", sDEND_DATE );
									
									sPRNT_DATE = (String)rowVo.get("PRNT_DATE");
									sTAXX_GUBN = (String)rowVo.get("TAXX_GUBN");
									
									//세금계산서 번호 생성
									sTAXX_SANB = "10" + sDEND_DATE + sTAXX_GUBN + "0A" + String.format("%05d", Integer.parseInt(sTAXX_NUMB));
									rowVo.put("TAXX_SANB", sTAXX_SANB);
									
									dao.processSAVE00(rowVo);
									
								}
			
								sSATX_NUMB = "";
								 sTAXX_IDXX = "";
								rowVo.put("TAXY_MONT", sTAXY_MONT);
								rowVo.put("TAXX_NUMB", sTAXX_NUMB);
								sTAXX_IDXX = dao.getTAXX_IDXX(rowVo);
								rowVo.put("TAXX_IDXX", sTAXX_IDXX);
								sSATX_NUMB = sTAXY_MONT + "-" + sTAXX_NUMB + "-" + sTAXX_IDXX;								
								rowVo.put("SATX_NUMB", sSATX_NUMB);
								
								
								//합산 발행  1 : 선택발행 (상세 내역 각 건별로 삽입) 2 : 합산발행 (상세내역중 가장 금액이 큰 금액 상세 내역 기준으로 1건만 입력)
								if(searchVo.get("CRET_FLAG").toString().equals("1")){
									
									rowVo.put("TAXX_AMTX", iTAXX_AMTX);
									rowVo.put("TAXX_VATX", iTAXX_VATX );
									
									 dao.processSAVE01(rowVo);
									 
								}else if(searchVo.get("CRET_FLAG").toString().equals("2")){
									if(iCnt2 == iCnt){
									}else{
										
										rowVo.put("TAXX_AMTX", iSumAMT);
										rowVo.put("TAXX_VATX", iSumVAT );
										rowVo.put("ITEM_MEMO", sHIGH_MEMO + " 외" ); 
										
										dao.processSAVE01(rowVo);
									}
								}
								
								updateCount += dao.processUPDATE00(rowVo);

								iCnt2 = iCnt;
								
							}
						}
					}
				}

				return deleteCount + updateCount;
			}
	
	
	/**
	 * PACA0010 제작세금계산서 개별생성 
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
		 
		 String sSATX_NUMB = "";
		 String sTAXY_MONT = "";
		 String sTAXX_NUMB = "";
		 String sDEND_DATE = "";
		 String sTAXX_IDXX = "";
		 String sTAXX_SANB = "";
		 String sPRNT_DATE = "";
		 String sTAXX_GUBN = "";

		List dsPD_SUJUMH     = (List) saveData.get("dsPD_SUJUMH");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_SUJUMH.size(); i++) {

			rowVo = (Map) dsPD_SUJUMH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 2) {
				if(rowVo.get("CHK").equals("1")){
					sTAXY_MONT = "";
					sDEND_DATE ="";
					sTAXX_NUMB = "";
					
					sDEND_DATE = (String) searchVo.get("DEND_DATE");
					sTAXY_MONT = sDEND_DATE.substring(0, 6);
					sTAXX_NUMB = dao.getTAXX_NUMB(sTAXY_MONT);
					
					rowVo.put("TAXY_MONT", sTAXY_MONT);
					rowVo.put("TAXX_NUMB", sTAXX_NUMB);
					sTAXX_IDXX = "";
					sTAXX_IDXX = dao.getTAXX_IDXX(rowVo);
					rowVo.put("TAXX_IDXX", sTAXX_IDXX);
					
					sSATX_NUMB = sTAXY_MONT + "-" + sTAXX_NUMB + "-" + sTAXX_IDXX;
					
					rowVo.put("SATX_NUMB", sSATX_NUMB);
					
					rowVo.put("DEND_DATE", sDEND_DATE);
					rowVo.put("PRNT_DATE", sDEND_DATE);
					
					sTAXX_GUBN = (String)rowVo.get("TAXX_GUBN");
					
					//세금계산서 번호 생성
					sTAXX_SANB = "10" + sDEND_DATE + sTAXX_GUBN + "0A" + String.format("%05d", Integer.parseInt(sTAXX_NUMB)); 
					rowVo.put("TAXX_SANB", sTAXX_SANB);

					dao.processSAVE00(rowVo);
					dao.processSAVE01(rowVo);
					updateCount += dao.processUPDATE00(rowVo);
					
				}

			}
		}
		
		return deleteCount + updateCount;
	}
	
	
	/**
	 * PACA0010 제작세금계산서 삭제 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map saveData) throws Exception{
		 
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 

		List dsPD_SATXXH     = (List) saveData.get("dsPD_SATXXH");  

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_SATXXH.size(); i++) {

        	rowVo = (Map) dsPD_SATXXH.get(i);
        	
        	if(rowVo.get("CHK").equals("1")){
        		deleteCount += dao.processDELETE00(rowVo);
        	}
			

		}
		
		return deleteCount ;
	}
	
	
	/**
	 * PACA0010 세금계산서 하단 품목 수정 및 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 Map rowVo2 = null;
		 int rowType = 0;
		 int rowType2 = 0;

		List dsPD_SATXXD = (List) saveData.get("dsPD_SATXXD");
		List dsPD_SATXXH = (List) saveData.get("dsPD_SATXXH");  


        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_SATXXD.size(); i++) {

			rowVo = (Map) dsPD_SATXXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			 if (rowType == 2) {

				updateCount += dao.processSAVE02(rowVo);

			}
		}
		
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		//영수 구분 수정
		for (int i = 0; i < dsPD_SATXXH.size(); i++) {

			rowVo2 = (Map) dsPD_SATXXH.get(i);
			rowType2 = (Integer) rowVo2.get("ROW_TYPE");
			
			 if (rowType2 == 2) {

				updateCount += dao.processSAVE03(rowVo2);

			}
		}
		
		return updateCount;

	}
	
	
	
	
	/**
	 * 세금계산서 인쇄위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map saveData) throws Exception {
		Map rowVo = null;
		 Map QUERYvo = null;
		String TAXX_NUMB_QUERY = "";
		String TAXY_MONT = null;
		
		List dsPD_SATXXH     = (List) saveData.get("dsPD_SATXXH");  

       //계약서 데이터의 경우 INSERT 는 없고 UPDATE 만 가능
		for (int i = 0; i < dsPD_SATXXH.size(); i++) {

			rowVo = (Map) dsPD_SATXXH.get(i);
			if(i==0 && rowVo.get("CHK").toString().equals("1")){
				TAXX_NUMB_QUERY += "'"+rowVo.get("TAXX_NUMB")+"'"; 
			}else if(rowVo.get("CHK").toString().equals("1")){
				TAXX_NUMB_QUERY += ", '"+rowVo.get("TAXX_NUMB")+"'"; 
			}
			TAXY_MONT = rowVo.get("TAXY_MONT").toString();
		}
		
		QUERYvo  = new HashMap<String, String>();
		QUERYvo.put("TAXX_NUMB_QUERY", TAXX_NUMB_QUERY);
		QUERYvo.put("TAXY_MONT", TAXY_MONT);
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SATXXH_RPT", dao.processPRINT00(QUERYvo));
		return returnMap;
	}
	
	/**
	 * 세금계산서 인쇄위한 조회 상세
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목별 관리항목 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map saveData) throws Exception {
		Map rowVo = null;
		 Map QUERYvo = null;
		String TAXX_NUMB_QUERY = "";
		String TAXY_MONT = null;
		
		List dsPD_SATXXH     = (List) saveData.get("dsPD_SATXXH");  

      //계약서 데이터의 경우 INSERT 는 없고 UPDATE 만 가능
		for (int i = 0; i < dsPD_SATXXH.size(); i++) {

			rowVo = (Map) dsPD_SATXXH.get(i);
			if(i==0 && rowVo.get("CHK").toString().equals("1")){
				TAXX_NUMB_QUERY += "'"+rowVo.get("TAXX_NUMB")+"'"; 
			}else if(rowVo.get("CHK").toString().equals("1")){
				TAXX_NUMB_QUERY += ", '"+rowVo.get("TAXX_NUMB")+"'"; 
			}
			TAXY_MONT = rowVo.get("TAXY_MONT").toString();
		}
		
		QUERYvo  = new HashMap<String, String>();
		QUERYvo.put("TAXX_NUMB_QUERY", TAXX_NUMB_QUERY);
		QUERYvo.put("TAXY_MONT", TAXY_MONT);
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SATXXD_RPT", dao.processPRINT01(QUERYvo));
		return returnMap;
	}
	
	
	/**
	 * 수정세금계산서 생성을 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_SATXXH", dao.processSEARCH10(searchVo));
		return returnMap;

    }
	
	
	/**
	 * PACA0010 제작 수정 세금계산서 생성 
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

		List dsPD_MODIFY     = (List) saveData.get("dsPD_MODIFY");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_MODIFY.size(); i++) {

			rowVo = (Map) dsPD_MODIFY.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			sTAXY_MONT = ""; 
			sDEND_DATE ="";
			sTAXX_NUMB = "";
			sTAXX_NUMB_old = "";
			
			sDEND_DATE = (String)rowVo.get("DEND_DATE");
			sTAXY_MONT = sDEND_DATE.substring(0, 6);
			sTAXX_NUMB_old = (String)rowVo.get("TAXX_NUMB");
			sTAXX_NUMB = dao.getTAXX_NUMB(sTAXY_MONT);
			
			rowVo.put("TAXY_MONT", sTAXY_MONT);
			rowVo.put("TAXX_NUMB", sTAXX_NUMB);
			rowVo.put("TAXX_NUMB_old", sTAXX_NUMB_old);
			
			System.out.println("----------------------->" + sTAXX_NUMB_old);
			
			sPRNT_DATE = (String)rowVo.get("PRNT_DATE");
			sTAXX_GUBN = (String)rowVo.get("TAXX_GUBN");
			
			//세금계산서 번호 생성
			sTAXX_SANB = "10" + sPRNT_DATE + sTAXX_GUBN + "0A" + String.format("%05d", Integer.parseInt(sTAXX_NUMB)); 
			rowVo.put("TAXX_SANB", sTAXX_SANB);

			dao.processSAVE10(rowVo);
			dao.processSAVE11(rowVo);
			
		}

		
		
		return deleteCount + updateCount;
	}
	
	
	/**
	 * PACA0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE20(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsPD_SATXXH = (List) saveData.get("dsPD_SATXXH");  


        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_SATXXH.size(); i++) {

			rowVo = (Map) dsPD_SATXXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			 if (rowType == 2) {

				updateCount += dao.processUPDATE20(rowVo);
			}
		}

		return updateCount;
	}
	
}
