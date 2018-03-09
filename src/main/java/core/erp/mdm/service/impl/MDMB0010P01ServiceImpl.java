/**
 * core.erp.mdm.service.impl.MDMB0010P01ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;


import java.util.HashMap; 
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.mdm.service.MDMB0010P01Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MDMB0010P01ServiceImpl - 케이블&종편 개별청약 전체복사(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.12
 * @version	1.0
 * @see		{@link MDMB0010P01Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.12	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MDMB0010P01Service")
public class MDMB0010P01ServiceImpl extends EgovAbstractServiceImpl implements MDMB0010P01Service {

	/**
	 * 케이블&종편 개별청약 전체복사(신규) DAO class inject.
	 */
	@Resource(name = "MDMB0010P01Dao")
	private MDMB0010P01Dao dao;

	/**
	 * MDMB0010P01 케이블&종편 개별청약 저장한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 Map rowVo = null;
		 
		List dsYEAR_MNTH     = (List) saveData.get("dsYEAR_MNTH");  
		
		
		rowVo = (Map) dsYEAR_MNTH.get(0);
		
		//복사할 데이터의 일련번호를 가져온다.
		DataSet GET_SEQX_FILD = (DataSet) dao.processGET_SEQX_FILD(rowVo);

		//일련번호 개수만큼 반복한다.
		for (int i = 0; i < GET_SEQX_FILD.getRowCount(); i++) {
			
			//중복된 일련번호가 있는지 확인
			for(int j=0;j<GET_SEQX_FILD.getRowCount();j++){
				if(i>j && GET_SEQX_FILD.getObject(i, "SEQX_FILD").equals(GET_SEQX_FILD.getObject(j, "SEQX_FILD"))){
					throw new Exception("중복되는 일련번호가 있어 전체복사를 할 수 없습니다.");
				}
			}

			//기존의의 일련번호를 담는다.
			rowVo.put("oSEQX_FILD",GET_SEQX_FILD.getObject(i, "SEQX_FILD"));
			
			//새로운 일련번호를 가져온다.
			String NewSEQX_FILD = dao.processNEW_SEQX_FILD(rowVo);
			if(NewSEQX_FILD==null){
				NewSEQX_FILD="1";
			}
			rowVo.put("nSEQX_FILD", NewSEQX_FILD);
			
			dao.processSAVE00(rowVo);

		}
		return updateCount;

	}
}
