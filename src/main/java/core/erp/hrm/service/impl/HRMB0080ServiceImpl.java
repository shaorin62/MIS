package core.erp.hrm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.com.service.impl.ComAttachFileDao;
import core.erp.hrm.service.HRMB0080Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	HRMB0080ServiceImpl - 인사기록변경승인 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.08
 * @version	1.0
 * @see		{@link HRMB0080Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.07.08	박철영		Initial Created.
 * 2016.08.24	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMB0080Service")
public class HRMB0080ServiceImpl extends EgovAbstractServiceImpl implements HRMB0080Service {

	/**
	 * 인사기록변경승인 DAO class inject.
	 */
	@Resource(name = "HRMB0080Dao")
	private HRMB0080Dao dao;

	@Resource(name = "comAttachFileDao")
	private ComAttachFileDao attachdao;

	/**
	 * 인사기록변경요청 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인사기록변경요청 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MSTCRQ", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 인사기록변경요청 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인사기록변경요청 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_ATFILE", attachdao.selectFile(searchVo));
		return returnMap;

    }

	/**
	 * HRMB0080 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsHR_MSTCRQ     = (List) saveData.get("dsHR_MSTCRQ");
		List dsHR_MSTCRQ_Del = (List) saveData.get("dsHR_MSTCRQ_DELETE");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_MSTCRQ.size(); i++) {

			rowVo = (Map) dsHR_MSTCRQ.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

 			 if (rowType == 2) {
				dao.processUPDATE00(rowVo);
				dao.processWORKSAVE00(rowVo);

			}

			iTotCnt++;

		}

		return iTotCnt;

	}
}
