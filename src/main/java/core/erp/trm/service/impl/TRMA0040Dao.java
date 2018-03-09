package core.erp.trm.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TRMA0040Dao - 미불반제관리  프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Repository("TRMA0040Dao")
public class TRMA0040Dao extends CmmBaseDAO  {
	//protected final Log logger = LogFactory.getLog(getClass());

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRMA0040.SEARCH00", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("TRMA0040.SEARCH01", searchVo);
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("TRMA0040.SEARCH02", searchVo);
	}

	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("TRMA0040.SAVE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("TRMA0040.UPDATE00", dataVo);

	}

	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("TRMA0040.DELETE00", dataVo);

	}
	
	//전표마스터 생성 - 전표번호 반환
	@SuppressWarnings("rawtypes")
	public Object processSLIP00(Map searchVo) throws Exception {

		return insert("TRMA0040.SLIP00", searchVo);
	}

	//전표라인 - 차변(발생내역)
	@SuppressWarnings("rawtypes")
	public Object processSLIP01(Map searchVo) throws Exception {

		return insert("TRMA0040.SLIP01", searchVo);
	}
	
	//전표라인 - 대변(정리내역)
	@SuppressWarnings("rawtypes")
	public Object processSLIP02(Map searchVo) throws Exception {

		return insert("TRMA0040.SLIP02", searchVo);
	}
	
	//전표삭제
	@SuppressWarnings("rawtypes")
	public Object processSLIP03(Map searchVo) throws Exception {

		return insert("TRMA0040.SLIP03", searchVo);
	}
	
	//전표 FINISH
	@SuppressWarnings("rawtypes")
	public Object processSLIP04(Map searchVo) throws Exception {

		return insert("TRMA0040.SLIP04", searchVo);
	}
	
	//전표라인 정렬순서 UPDATE
	@SuppressWarnings("rawtypes")
	public Object processSLIP05(Map searchVo) throws Exception {

		return insert("TRMA0040.SLIP05", searchVo);
	}

}
