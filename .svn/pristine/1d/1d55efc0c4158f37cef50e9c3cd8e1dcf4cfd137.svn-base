/**
 * core.erp.mdm.service.impl.MDMA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.mdm.service.MDMA0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MDMA0020ServiceImpl - 수수료 일괄청약(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.12.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date				   Modifier	     	Comment
 * ====================================================
 * 2016.12.04			최제현			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MDMA0020Service")
public class MDMA0020ServiceImpl extends EgovAbstractServiceImpl implements MDMA0020Service {

	/**
	 * 수수료 일괄청약(신규) DAO class inject.
	 */
	@Resource(name = "MDMA0020Dao")
	private MDMA0020Dao dao;
	
	/**
	 * 수수료일괄청약 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전파 개별청약 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_ETCMXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * MDMA0020 수수료 확정처리
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map searchVo,Map saveData) throws Exception{
		 
		 Map rowVo = null;
		 int rowType = 0;
		 
		//코바넷 종류를 담는 객체.
		String KBNT_FLAG = null;
		//확정처리된 수수료가 있는지 찾는다.
		DataSet ETCM=(DataSet)dao.prcessISETCM(searchVo);
		if(ETCM.getRowCount()!=0){
			if(searchVo.get("KBNT_FLAG").toString().equals("A")){
				KBNT_FLAG = "코바넷";
			}else{
				KBNT_FLAG = "미크";
			}
			throw new Exception(searchVo.get("YEAR_MNTH").toString().substring(0,4)+"년 "+
			searchVo.get("YEAR_MNTH").toString().substring(4,6)+"월의 "+KBNT_FLAG+" 수수료 청약이 이미 등록되어있습니다.");
		}

		List dsMD_ETCMXM     = (List) saveData.get("dsMD_ETCMXM");  
		
        //DataSet의 Row Count만큼 돌면서 Insert
		for (int i = 0; i < dsMD_ETCMXM.size(); i++) {

			rowVo = (Map) dsMD_ETCMXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			if(rowVo.get("AREA_NAME").equals("총계")||rowVo.get("AREA_NAME")=="총계"){
				return 0;
			}
			//수수료시트저장
			dao.processSAVE00(rowVo);

		}

		return 0;
	}
	
	/**
	 * 확정처리
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		//코바넷 종류를 담는 객체.
		String KBNT_FLAG = null;
		//확정처리된 수수료가 있는지 찾는다.
		DataSet COMISSION=(DataSet)dao.prcessISCOMISSION(searchVo);
		if(COMISSION.getRowCount()!=0){
			if(searchVo.get("KBNT_FLAG").toString().equals("A")){
				KBNT_FLAG = "코바넷";
			}else{
				KBNT_FLAG = "미크";
			}
			throw new Exception(searchVo.get("YEAR_MNTH").toString().substring(0,4)+"년 "+
			searchVo.get("YEAR_MNTH").toString().substring(4,6)+"월의 "+KBNT_FLAG+" 수수료 청약이 이미 확정되어있습니다.");
		}
		returnMap.put("dsMD_ETCMXM", dao.processSAVE01(searchVo));
		//위수탁 금액 입력.
		dao.processUPDATE01(searchVo);
		//수수료율, 부가세액, 합계액 입력
		dao.processUPDATE11(searchVo);
		return 0;

    }
	
	

	/**
	 * MDMA0020 초기화
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processDELETE00(Map saveData) throws Exception{
		Map<String, Object> returnMap = new HashMap<String, Object>();
		//세금계산서가 생성된 수수료 일괄청약이있는지 찾는다.
		int COUNT00  = dao.processCOUNT00(saveData);
		if(COUNT00==0){
			dao.processDELETE01(saveData);	
			returnMap.put("dsMD_ETCMXM", dao.processDELETE00(saveData));
		}else{
			throw new Exception("세금계산서가 생성된 수수료 내역이 있습니다. 이후 프로세스를 취소하고 초기화 버튼을 눌러주세요.");
		}
		
		return returnMap;
	}
}
