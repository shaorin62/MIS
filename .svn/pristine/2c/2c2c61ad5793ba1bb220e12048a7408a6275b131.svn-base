package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComMyTodayService;
import core.ifw.utl.StrUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	ComMyTodayServiceImpl -  일정관리 기본 서비스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김기환
 * @since	2016. 11. 16.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 11. 16.	김기환			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("ComMyTodayService")
public class ComMyTodayServiceImpl extends EgovAbstractServiceImpl implements ComMyTodayService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ComMyTodayServiceImpl.class);

    @Resource(name = "ComMyTodayDao")
    private ComMyTodayDao comMyTodayDao = null;
    
    /**
     * <pre>
     * 일정관리 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
	public Object processSEARCH00(Map<String, Object> dataMap) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_SCHDXM", comMyTodayDao.processSEARCH00(dataMap));
		return returnMap;
	}
	
	/**
     * <pre>
     * 일정관리 저장(신규저장, 수정, 삭제)
     * </pre>
     *
     * @param  조회 파라미터
     * @return 
     * @throws Exception 예외가 발생한 경우
     */
	@SuppressWarnings("unchecked")
	public void processSAVE00(Map<String, Object> searchVo, Map<String, Object> saveData) throws Exception {
		Map rowVo = null;
		int rowType = 0;

		List dsTM_SCHDXM     = (List) saveData.get("dsTM_SCHDXM");  
		List dsTM_SCHDXM_Del = (List) saveData.get("dsTM_SCHDXM_Del"); 
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_SCHDXM_Del.size(); i++) {
        	rowVo = (Map) dsTM_SCHDXM_Del.get(i);
        	comMyTodayDao.processDELETE00(rowVo);
        	
        	if( !"".equals(StrUtil.nullParam(rowVo.get("SRAL_NUMB"))) ){
        		//알람 삭제	
            	this.spWorknoticeDelete(searchVo, rowVo);
        	}
		}
        
        //DataSet의 Row Count만큼 돌면서 Insert Or Update 
		for (int j = 0; j < dsTM_SCHDXM.size(); j++) {
			rowVo = (Map) dsTM_SCHDXM.get(j);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {
				Integer iSeq = (Integer) comMyTodayDao.processINSERT00(rowVo);
				rowVo.put("SCHD_SEQN", iSeq);
				
				if("1".equals(rowVo.get("SCHD_NTYN"))){
					//알람 등록
					this.spWorknoticeSave(searchVo, rowVo);
				}
				
			} else if (rowType == 2) {
				comMyTodayDao.processUPDATE00(rowVo);
				
				if("1".equals(rowVo.get("SCHD_NTYN"))){
					//알림 등록			
					this.spWorknoticeSave(searchVo, rowVo);
				}else if("0".equals(rowVo.get("SCHD_NTYN")) && !"".equals(StrUtil.nullParam(rowVo.get("SRAL_NUMB")))){
					//알림 삭제
					this.spWorknoticeDelete(searchVo, rowVo);
				}
			}
		}
	}
	
	/**
     * <pre>
     * 알림등록
     * </pre>
     *
     * @param  조회 파라미터, 데이터 파라미터
     * @return 
     * @throws Exception 예외가 발생한 경우
     */
	private void spWorknoticeSave(Map<String, Object> searchVo, Map rowVo) throws Exception {
		
		HashMap<String, Object> proMap = new HashMap<String, Object>();

		proMap.put("SYST_LNCD", (String) StrUtil.nullParam(searchVo.get("GBL_LANGCD"))); //시스템언어코드
        proMap.put("WORK_USID", (String) StrUtil.nullParam(rowVo.get("SCHD_EMNR"))); 	 //작업자
		proMap.put("WKNT_EMNR", (String) StrUtil.nullParam(rowVo.get("SCHD_EMNR"))); 	 //작업알림사원번호
		proMap.put("WKNT_DATE", (String) StrUtil.nullParam(rowVo.get("SCHD_DATE"))); 	 //작업알림일자(YYYYMMDD)
		proMap.put("WKNT_TIME", (String) StrUtil.nullParam(rowVo.get("SCHD_TIME"))); 	 //작업알림시간(HHMI)
		proMap.put("WKNT_TYCD", (String) StrUtil.nullParam(searchVo.get("pgm"))); 	 	 //작업알림유형코드[WKNT_TYCD]
		proMap.put("SOUS_LNKY", (String) StrUtil.nullParam(rowVo.get("SCHD_SEQN"))); 	 //출처연결키
		proMap.put("WKNT_CNTT", (String) StrUtil.nullParam(rowVo.get("SCHD_CNTT"))); 	 //작업알림내용
		
		LOGGER.info("알람등록 proMap : " + proMap);
		comMyTodayDao.processPROS00(proMap);
	}
	
	/**
     * <pre>
     * 알림삭제
     * </pre>
     *
     * @param  조회 파라미터, 데이터 파라미터
     * @return 
     * @throws Exception 예외가 발생한 경우
     */
	private void spWorknoticeDelete(Map<String, Object> searchVo, Map rowVo) throws Exception {
		
		HashMap<String, Object> proMap = new HashMap<String, Object>();
		
		proMap.put("SYST_LNCD", (String) StrUtil.nullParam(searchVo.get("GBL_LANGCD"))); //시스템언어코드
		proMap.put("WORK_USID", (String) StrUtil.nullParam(rowVo.get("SCHD_EMNR"))); 	 //작업자
		proMap.put("WKNT_EMNR", (String) StrUtil.nullParam(rowVo.get("SCHD_EMNR"))); 	 //작업알림사원번호
		proMap.put("WKNT_DATE", (String) StrUtil.nullParam(rowVo.get("SCHD_DATE"))); 	 //작업알림일자(YYYYMMDD)
		proMap.put("WKNT_TIME", (String) StrUtil.nullParam(rowVo.get("SCHD_TIME"))); 	 //작업알림시간(HHMI) 
		proMap.put("SRAL_NUMB", (String) StrUtil.nullParam(rowVo.get("SRAL_NUMB"))); 	 //일련번호
		
		LOGGER.info("알람삭제 proMap : " + proMap);
		comMyTodayDao.processPROS01(proMap);
	}
	
}
