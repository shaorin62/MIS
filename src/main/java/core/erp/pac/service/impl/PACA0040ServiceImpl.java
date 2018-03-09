/**
 * core.erp.pac.service.impl.PACA0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pac.service.PACA0040Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PACA0040ServiceImpl - 매체 전표순번생성 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	장현기
 * @since	2017.04.10
 * @version	1.0
 * @see		{@link PACA0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2017.04.10	장현기		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PACA0040Service")
public class PACA0040ServiceImpl extends EgovAbstractServiceImpl implements PACA0040Service {

	/**
	 * 전표순번생성 DAO class inject.
	 */
	@Resource(name = "PACA0040Dao")
	private PACA0040Dao dao;

	/**
	 * 광고주 순번 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return  광고주,제작유형,제작의뢰 순번 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_CUSTXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작유형 순번 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return  광고주,제작유형,제작의뢰 순번 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_CLASXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작의회 순번 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return  광고주,제작유형,제작의뢰 순번 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_JOBNXM", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	
	/**
	 * 광고주 순번 목록을 수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsPD_CUSTXM = (List) saveData.get("dsPD_CUSTXM");  

        //DataSet의 Row Count만큼 돌면서  Update
		for (int i = 0; i < dsPD_CUSTXM.size(); i++) {
			
			
			rowVo = (Map) dsPD_CUSTXM.get(i);
			// 전표순번 테이블에서 광고주고트를 가지고 온다.
			int CUST_CODE = (int)dao.getCUST_CODE(rowVo);
			//광고주코드가 비어 있으면 insert 비어있지 않으면 update
			if(CUST_CODE==0){

				dao.processSAVE00(rowVo);
			}else{
				dao.processUPDATE00(rowVo);				
			}

		}
		
		return 0;

	}
	
	/**
	 * 제작유형 순번 목록을 수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsPD_CLASXM     = (List) saveData.get("dsPD_CLASXM");  

        //DataSet의 Row Count만큼 돌면서 Update
		for (int i = 0; i < dsPD_CLASXM.size(); i++) {

			rowVo = (Map) dsPD_CLASXM.get(i);
			
			// 전표순번 테이블에서 광고주고트를 가지고 온다.
			int CLAS_CODE = (int)dao.getCLAS_CODE(rowVo);
			
			//광고주코드가 비어 있으면 insert 비어있지 않으면 update
			if(CLAS_CODE==0){

				dao.processSAVE01(rowVo);
			}else{
				dao.processUPDATE01(rowVo);				
			}
			

		}
		
		return 0;

	}
	
	/**
	 * 제작의회 순번 목록을 수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 
		List dsPD_JOBNXM     = (List) saveData.get("dsPD_JOBNXM");  

        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsPD_JOBNXM.size(); i++) {

			rowVo = (Map) dsPD_JOBNXM.get(i);
			
			// 전표순번 테이블에서 광고주코드를 가지고 온다.
			int JOBN_NUMB = (int)dao.getJOBN_NUMB(rowVo);
			
			//광고주코드가 비어 있으면 insert 비어있지 않으면 update
			if(JOBN_NUMB==0){
				dao.processSAVE02(rowVo);
			}else{
				dao.processUPDATE02(rowVo);				
			}

		}
		
		return 0;

	}
	
	
	
	
}
