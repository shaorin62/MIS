package core.erp.com.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	ComMyTodayDao -  일정관리 DAO 클래스
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
@Repository("ComMyTodayDao")
public class ComMyTodayDao extends CmmBaseDAO {
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
        return list("COMMYTODAY.SEARCH00", dataMap);
    }
    
    /**
	 * <pre>
	 * 일정관리 저장
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processINSERT00(Map<String, Object> dataMap) throws Exception {

		return insert("COMMYTODAY.INSERT00", dataMap);

	}
	
	/**
	 * <pre>
	 * 일정관리 수정
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processUPDATE00(Map<String, Object> dataMap) throws Exception {

		return update("COMMYTODAY.UPDATE00", dataMap);

	}
	
	/**
	 * <pre>
	 * 일정관리 삭제
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processDELETE00(Map<String, Object> dataMap) throws Exception {

		return delete("COMMYTODAY.DELETE00", dataMap);

	}
	
	/**
	 * <pre>
	 * 알림 등록
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processPROS00(Map<String, Object> dataMap) throws Exception {

		return insert("COMMYTODAY.PROS00", dataMap);
	}
	
	/**
	 * <pre>
	 * 알림 삭제
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	public Object processPROS01(Map<String, Object> dataMap) throws Exception {

		return insert("COMMYTODAY.PROS01", dataMap);
	}

}
