/**
 * core.erp.mdm.service.impl.MDMB0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mdm.service.MDMB0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MDMB0020ServiceImpl - 케이블&종편 거래명세서 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.17
 * @version	1.0
 * @see		{@link MDMB0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.17	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MDMB0020Service")
public class MDMB0020ServiceImpl extends EgovAbstractServiceImpl implements MDMB0020Service {

	/**
	 * 케이블&종편 거래명세서 DAO class inject.
	 */
	@Resource(name = "MDMB0020Dao")
	private MDMB0020Dao dao;

	/**
	 * 케이블&종편 개별청약 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 케이블&종편 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CTMDXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 케이블&종편 거래명세서(헤더) 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 케이블&종편 거래명세서(헤더) 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CTTRXH", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 케이블&종편 거래명세서(상세) 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 케이블&종편 거래명세서(상세) 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CTTRXD", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전파 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH03(searchVo));
		return returnMap;

    }

	
	
	/**
	 * MDMB0020 케이블&종편 개별 거래명세서 등록
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map searchVo,Map saveData) throws Exception{
		 
		 Map rowVo = null;
		
		List dsMD_CTMDXM     = (List) saveData.get("dsMD_CTMDXM");  
		
        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_CTMDXM.size(); i++) {
			rowVo = (Map) dsMD_CTMDXM.get(i);
			//청구일자 입력
			rowVo.put("TRAN_DATE", searchVo.get("TRAN_DATE"));	
			
			//체크확인
			if(rowVo.get("CHEK_FILD")=="1" || rowVo.get("CHEK_FILD").equals("1")){		

				
				//신규번호 채번(헤더)
				String NewTRAN_NUMB = dao.processNEW_TRAN_NUMB(rowVo);
				rowVo.put("TRTR_NUMB", NewTRAN_NUMB);	
				
				//거래명세서 헤더 입력
				dao.processSAVE00(rowVo);
				
				//신규번호 채번(상세)
				String NewTSEQ_FILD = dao.processNewTSEQ_FILD(rowVo);
				rowVo.put("TSEQ_FILD", NewTSEQ_FILD);
				//거래명세서 상세 입력
				dao.processSAVE01(rowVo);
				
				//개별청약 거래명세 유무 업데이트
				dao.processUPDATE00(rowVo);
			}
		}
		
		return 0;

	}
	
	/**
	 * MDMB0020 케이블&종편 광고주별 거래명세서 등록
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map searchVo,Map saveData) throws Exception{
		 
		 Map rowVo = null;
		int updateCount=0;
		List dsMD_CTMDXM     = (List) saveData.get("dsMD_CTMDXM");  
       
		//광고주이름을 리스트에 담는다.
		// - 이름을 비교해서 같은 광고주이름이면 금액 합산하기 위해서
		List<String> list = null;
		List<String> MEDX_LIST = null;
		for(int i=0 ; i < dsMD_CTMDXM.size() ; i++){
			if(list == null) list = new ArrayList<String>();
			if(MEDX_LIST == null) MEDX_LIST = new ArrayList<String>();
			rowVo = (Map) dsMD_CTMDXM.get(i);
			//체크확인
			if(rowVo.get("CHEK_FILD")=="1" || rowVo.get("CHEK_FILD").equals("1")){
				list.add((String)rowVo.get("CUST_NAME"));	
				MEDX_LIST.add((String)rowVo.get("MEDX_CODE"));
			}
		}
		
		String NewTRAN_NUMB = null;
		
		//DataSet의 Row Count만큼 돌면서 Insert or Update
		for (int i = 0; i < dsMD_CTMDXM.size(); i++) {
			rowVo = (Map) dsMD_CTMDXM.get(i);
			//청구일자 입력
			rowVo.put("TRAN_DATE", searchVo.get("TRAN_DATE"));	
			//체크확인
			if(rowVo.get("CHEK_FILD")=="1" || rowVo.get("CHEK_FILD").equals("1")){
				

				//중복되는지 알기 위한 변수
				boolean overLap = false;
				
				//중복되는 데이터가 있는지 확인
				for(int j = 0;j < list.size();j++){
					//중복되는 데이터가 있으면 true를 반환
					if(i>j && list.get(j).equals(rowVo.get("CUST_NAME")) &&  MEDX_LIST.get(j).equals(rowVo.get("MEDX_CODE"))){
						overLap = true;
					}
				}
				
				//중복되면 업데이트 실행
				if(overLap){
					NewTRAN_NUMB=dao.processTRAN_NUMB(rowVo);
					rowVo.put("TRTR_NUMB", NewTRAN_NUMB);
					updateCount+=dao.processUPDATE02(rowVo);
				}else{
					
					//신규번호 채번(헤더)
					NewTRAN_NUMB = dao.processNEW_TRAN_NUMB(rowVo);
					rowVo.put("TRTR_NUMB", NewTRAN_NUMB);			
					
					//거래명세서 헤더 입력
					dao.processSAVE00(rowVo);
				}
				//신규번호 채번(상세)
				String NewTSEQ_FILD = dao.processNewTSEQ_FILD(rowVo);
				rowVo.put("TSEQ_FILD", NewTSEQ_FILD);
				//거래명세서 상세 입력
				dao.processSAVE01(rowVo);
				
				//개별청약 거래명세 유무 업데이트
				dao.processUPDATE00(rowVo);
			}
		}
		
		return updateCount;

	}
	
	/**
	 * MDMB0020 케이블&종편 개별청약서 삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		int deleteCount = 0;
		Map rowVo = null;
		 
		List dsMD_CTMDXM_Del = (List) saveData.get("dsMD_CTMDXM_DELETE");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
       for (int i = 0; i < dsMD_CTMDXM_Del.size(); i++) {
       	rowVo = (Map) dsMD_CTMDXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);
		}
		return deleteCount;

	}
	
	/**
	 * MDMB0020 케이블&종편 거래명세서 삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE03(Map saveData) throws Exception{
		
		
		int deleteCount = 0;
		Map rowVo = null;
		 
		List dsMD_CTTRXH = (List) saveData.get("dsMD_CTTRXH");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
       for (int i = 0; i < dsMD_CTTRXH.size(); i++) {
       	rowVo = (Map) dsMD_CTTRXH.get(i);
			
       	
	      //세금계산서가 생성된 거래명세서를 찾는다.
	   		int COUNTTRANXD = dao.processCOUNTTRANXD(rowVo);
	   		//세금계산서가 생성된 거래명세서없으면(0) 삭제처리한다.
	       	if(COUNTTRANXD==0){
	       		//케이블&종편 거래명세서(헤더) 삭제
	       		deleteCount += dao.processDELETE01(rowVo);
	       		
	       		//케이블&종편 거래명세서(상세) 삭제
	       		dao.processDELETE02(rowVo);
	       		
	       		//케이블&종편 개별청약 거래명세 유무 업데이트
	       		dao.processUPDATE01(rowVo);       		
	       	}else{
	       		throw new Exception("년월:"+rowVo.get("YEAR_MNTH")+" 번호:"+rowVo.get("TRTR_NUMB")+"의 세부 거래명세서가 세금계산서 생성되어 삭제할 수 없습니다.");
	       	}

		}
		return deleteCount;
	}
	
	/**
	 * MDMA0040 부가세수정
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE10(Map saveData) throws Exception{
		
		
		int updateCount = 0;
		Map rowVo = null;
		 
		List dsMD_CTTRXD = (List) saveData.get("dsMD_CTTRXD");
		//DataSet의 Delete Row Count만큼 돌면서 Delete
       for (int i = 0; i < dsMD_CTTRXD.size(); i++) {
       	rowVo = (Map) dsMD_CTTRXD.get(i);
       		//거래명세서 디테일 수정
       		dao.processUPDATE10(rowVo);
       		//거래명세서 헤더수정
       		dao.processUPDATE11(rowVo);
		}
		return updateCount;
	}
	
	/**
	 * 매체 거래 명세서 출력을 위한 헤더 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TRANXH_RPT", dao.processPRINT00(searchVo));
		return returnMap;

    }
	
	/**
	 * 매체 거래 명세서 출력을 위한 상세 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_TRANXD_RPT", dao.processPRINT01(searchVo));
		return returnMap;

    }
	
}
