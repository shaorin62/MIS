/**
 * core.erp.tmm.service.impl.PCMA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pcm.service.PCMA0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PCMA0020Controller - 제작업종분류 관리
 * </pre>
 *
 * @author	오세훈
 * @since	2016.08.30
 * @version	1.0
 * @see		{@link PCMA0020}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.30	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PCMA0020Service")
public class PCMA0020ServiceImpl extends EgovAbstractServiceImpl implements PCMA0020Service {

	/**
	 * 제작업종분류관리(신규) DAO class inject.
	 */
	@Resource(name = "PCMA0020Dao")
	private PCMA0020Dao dao;

	/**
	 * 제작 업종분류관리 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_CODEXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * PCMA0020 저장,수정 또는 삭제한다.
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
		 

		List dsPD_CODEXM     = (List) saveData.get("dsPD_CODEXM");  
		List dsPD_CODEXM_Del = (List) saveData.get("dsPD_CODEXM_DELETE");
		
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_CODEXM_Del.size(); i++) {

        	rowVo = (Map) dsPD_CODEXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}
        

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_CODEXM.size(); i++) {

			rowVo = (Map) dsPD_CODEXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			String CLAS_CODE = (String) rowVo.get("CLAS_CODE");
			
			if (rowType == 1) {
				//클래스 코드가 없을경우 새로 생성
				if(CLAS_CODE == "" || CLAS_CODE == null){
					
					String maxClassCode = dao.getMaxClassCode();
					try{
						char[] ch = maxClassCode.toCharArray();
						for (char code : ch) {
							char chNewCLAS_CODE = (char) ((int) code + 1);
							String newCLAS_CODE = String.valueOf(chNewCLAS_CODE);
							
							rowVo.put("CLAS_CODE", newCLAS_CODE);
							
							//CLAS_CODE 로 code 생성하기
							String Itemcode = dao.getItemcode(newCLAS_CODE);
							rowVo.put("ITEM_CODE", Itemcode);
						}
					}catch(Exception e){
						e.printStackTrace();
					}
					
				}else{
					
					//CLAS_CODE 로 code 생성하기
					String Itemcode = dao.getItemcode(CLAS_CODE);
					rowVo.put("ITEM_CODE", Itemcode);
					
				}
				
				String use_yn = (String) rowVo.get("USEX_YSNO");
				switch(use_yn){
				case "1" : 
					rowVo.put("USEX_YSNO", "Y");
					break;
				case "0" :
					rowVo.put("USEX_YSNO", "N");
					break;
				}
				
				// 시스템에서 입력한 값은 구분 "TYPE" 으로 지정하여 사용한다.
				rowVo.put("MEMO_FILD", "TYPE");
				
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				
				String use_yn = (String) rowVo.get("USEX_YSNO");
				switch(use_yn){
				case "1" : 
					rowVo.put("USEX_YSNO", "Y");
					break;
				case "0" :
					rowVo.put("USEX_YSNO", "N");
					break;
				}
				

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	

}
