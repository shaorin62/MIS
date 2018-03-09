/**
 * core.erp.mdm.service.impl.MDMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;


import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mdm.service.MDMA0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MDMA0010ServiceImpl - 전파 일괄청약(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.01
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date				   Modifier	     	Comment
 * ====================================================
 * 2016.11.01			최제현			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MDMA0010Service")
public class MDMA0010ServiceImpl extends EgovAbstractServiceImpl implements MDMA0010Service {

	/**
	 * 전파 일괄청약(신규) DAO class inject.
	 */
	@Resource(name = "MDMA0010Dao")
	private MDMA0010Dao dao;
	
	/**
	 * 소재별 운행현황과  광고신탁집계표를 조인한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전파 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_ETMDXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 등록된 일괄청약 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전파 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_ETMDXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * MDMA0010 소재별 운행현황을 저장한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 int rowType = 0;

		List dsMD_MATRXM     = (List) saveData.get("dsMD_MATRXM");  
		
        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_MATRXM.size(); i++) {

			rowVo = (Map) dsMD_MATRXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			dao.processSAVE00(rowVo);
		}
		
		//마지막 행을 지운다.
		dao.processDELETE10();
		
		return 0;
	}
	
	/**
	 * MDMA0010 광고신탁집계표를 저장한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 int rowType = 0;

		List dsMD_SUBSXM     = (List) saveData.get("dsMD_SUBSXM");  
		
		//입력된 광고신탁 집계표가 있는지 확인한다.
		int COUNT_SBTPXM = dao.COUNT_SBTPXM();
		if(COUNT_SBTPXM>0){
			throw new Exception("이미 입력된 광고주별 신탁집계표가 있습니다.");
		}
		
        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_SUBSXM.size(); i++) {

			rowVo = (Map) dsMD_SUBSXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			dao.processSAVE01(rowVo);
		}
		
		//마지막 행을 지운다.
		dao.processDELETE11();
		
		return 0;
	}
	
	/**
	 * MDMA0010 전파청약테이블에 데이터를 저장한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 Map rowVo = null;

		List dsMD_MATRXM     = (List) saveData.get("dsMD_ETMDXM");  
		
		//테이블의 개수를 가져온다.
		int COUNT_MD_MATRXM = dao.COUNT_MD_MATRXM();
		int COUNT_dsMD_MATRXM = dsMD_MATRXM.size();
		
		if(COUNT_MD_MATRXM != COUNT_dsMD_MATRXM){
			throw new Exception("중복되는 코바넷 코드가 있습니다. 중복되는 소재번호의 데이터를 확인하세요.");
		}
		
		
        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_MATRXM.size(); i++) {

			rowVo = (Map) dsMD_MATRXM.get(i);
			//예외처리
			if(rowVo.get("CUST_CODE")==null || rowVo.get("CUST_CODE").equals("")){
				String FAIL_NAME="광고주 코바코 코드 부재";
				rowVo.put("FAIL_NAME", FAIL_NAME);
				dao.processUPDATE10(rowVo);
			}else if(rowVo.get("MEDX_CODE")==null || rowVo.get("MEDX_CODE").equals("")){
				String FAIL_NAME="매체사 코바코 코드 부재";
				rowVo.put("FAIL_NAME", FAIL_NAME);
				dao.processUPDATE10(rowVo);
			}else if(rowVo.get("RMED_CODE")==null || rowVo.get("RMED_CODE").equals("")){
				String FAIL_NAME="매체지 코바코 코드 부재";
				rowVo.put("FAIL_NAME", FAIL_NAME);
				dao.processUPDATE10(rowVo);
			}else if(rowVo.get("MEDX_FLAG")==null || rowVo.get("MEDX_FLAG").equals("")){
				String FAIL_NAME="매체구분 코바코 코드 부재";
				rowVo.put("FAIL_NAME", FAIL_NAME);
				dao.processUPDATE10(rowVo);
			}else if(rowVo.get("DEPT_CODE")==null || rowVo.get("DEPT_CODE").equals("")){
				String FAIL_NAME="부서코드 부재(브랜드 관리)";
				rowVo.put("FAIL_NAME", FAIL_NAME);
				dao.processUPDATE10(rowVo);
			}else if(rowVo.get("HOUR_TYPE")==null || rowVo.get("HOUR_TYPE").equals("")){
				String FAIL_NAME="시급 코바코 코드 부재";
				rowVo.put("FAIL_NAME", FAIL_NAME);
				dao.processUPDATE10(rowVo);
			}else if(rowVo.get("SUBS_FLAG")==null || rowVo.get("SUBS_FLAG").equals("")){
				String FAIL_NAME="운행구분 코바코 코드 부재";
				rowVo.put("FAIL_NAME", FAIL_NAME);
				dao.processUPDATE10(rowVo);
			}else if(rowVo.get("ADDX_FORM")==null || rowVo.get("ADDX_FORM").equals("")){
				String FAIL_NAME="광고형태 코바코코드 부재";
				rowVo.put("FAIL_NAME", FAIL_NAME);
				dao.processUPDATE10(rowVo);
			}
//else if(rowVo.get("CONT_FORM")==null || rowVo.get("CONT_FORM").equals("")){
//				String FAIL_NAME="계약형태 코바코코드 부재";
//				rowVo.put("FAIL_NAME", FAIL_NAME);
//				dao.processUPDATE10(rowVo);
//}
			else if(rowVo.get("ADDX_TYPE")==null || rowVo.get("ADDX_TYPE").equals("")){
				String FAIL_NAME="광고유형 코바코코드 부재";
				rowVo.put("FAIL_NAME", FAIL_NAME);
				dao.processUPDATE10(rowVo);
			}else if(rowVo.get("BRND_CODE")==null || rowVo.get("BRND_CODE").equals("")){
				String FAIL_NAME="브랜드 코바코코드 부재";
				rowVo.put("FAIL_NAME", FAIL_NAME);
				dao.processUPDATE10(rowVo);
			}else{
				//요일을 넣어준다.
				if(((String)(rowVo.get("DAYY_WEEK"))).contains("월")){
					int BROD_MOND = 1;	
					rowVo.put("BROD_MOND", BROD_MOND);
				}
				
				if(((String)(rowVo.get("DAYY_WEEK"))).contains("화")){
					int BROD_TUES = 1;		
					rowVo.put("BROD_TUES", BROD_TUES);
				}
				
				if(((String)(rowVo.get("DAYY_WEEK"))).contains("수")){
					int BROD_WEDN = 1;			
					rowVo.put("BROD_WEDN", BROD_WEDN);
				}
				
				if(((String)(rowVo.get("DAYY_WEEK"))).contains("옥")){
					int BROD_THUR = 1;			
					rowVo.put("BROD_THUR", BROD_THUR);
				}
				
				if(((String)(rowVo.get("DAYY_WEEK"))).contains("금")){
					int BROD_FRID = 1;			
					rowVo.put("BROD_FRID", BROD_FRID);
				}
				
				if(((String)(rowVo.get("DAYY_WEEK"))).contains("토")){
					int BROD_SATU = 1;				
					rowVo.put("BROD_SATU", BROD_SATU);
				}
				
				if(((String)(rowVo.get("DAYY_WEEK"))).contains("일")){
					int BROD_SUND = 1;			
					rowVo.put("BROD_SUND", BROD_SUND);
				}
				
				//일련번호채번
				String NewSEQX_FILD = dao.processNEW_SEQX_FILD(rowVo);
				if(NewSEQX_FILD==null){
					NewSEQX_FILD="1";
				}
				rowVo.put("SEQX_FILD", NewSEQX_FILD);
				
				
				dao.processSAVE02(rowVo);
				//저장되면 FAIL_NAME을 지운다.
				dao.processUPDATE11(rowVo);
				
				
			}
			//소재별운행현황 테이블에 FAIL 데이터가 없으면
			if(dao.processGET_MTTP_COUNT()==0){
				//소재임시테이블의 데이터를 지운다.
				dao.processDELETE12(rowVo);
				//광고신탁집계표의 데이터를 지운다.
				dao.processDELETE13(rowVo);	
			}
			
		}
		
		
		return 0;
	}

	/**
	 * MDMA0010 임시테이블데이터삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map searchVo) throws Exception{
		
		String YEAR_MNTH = searchVo.get("YEAR_MNTH").toString();
		
		//거래명세서가 생성된 개별청약이 있는지 찾는다.
		int COUNT_ETMDXM = dao.COUNT_ETMDXM(YEAR_MNTH);
		if(COUNT_ETMDXM>0){
			throw new Exception("거래명세서가 생성된 일괄청약 내역이 있습니다. 이후 프로세스를 취소하고 삭제해주세요.");
		}
		
		dao.processDELETE00(searchVo);
		return 0;
	}
}
