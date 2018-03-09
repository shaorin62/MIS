package core.erp.gw.service.impl;

import java.io.ByteArrayInputStream;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.gw.model.Approval;
import core.erp.gw.model.GwExtInfo;
import core.erp.gw.service.RsApprovalService;
import core.erp.gw.util.ComUtil;
import core.ifw.utl.CoreProperties;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	RsApprovalServiceImpl - GW >> HR
 *  결재 진행/완료
 * </pre>
 * 
 * @author	
 * @since	2016. 08. 25
 * @version	1.0
 * 
 */
@Service("RsApprovalService")
public class RsApprovalServiceImpl extends EgovAbstractServiceImpl implements RsApprovalService {

	/** Logger init. */
	private static final Logger logger = LoggerFactory.getLogger(RsApprovalServiceImpl.class);
	
	@Resource(name = "ApprovalDao")
	private ApprovalDao dao;
	
	/** 
	 * 	N : 결재 상신 전, HR 임시저장
	 *	T : 결재 상신 후, 연동문서함에 있는 상태 
	 *	P : 결재 진행
	 *	R : 결재 반려
	 *	Y : 결재완료
	 */   
	@SuppressWarnings("rawtypes")
	public GwExtInfo responseApprovalData(HttpServletResponse response, HttpServletRequest request) throws Exception
	{
		
		String docKey[]; 
        String docID 	= request.getParameter("docID");
        String document = request.getParameter("Document");
        String protID   = request.getParameter("protID");
        String sDocumentStatus = "";
        String sProcessCode = "N";
    	Approval rsApproval = null;
    	GwExtInfo info = null;
    	docKey = ComUtil.getTokenArray(docID, "-");	
    	
    	logger.info("document : " + document);
    	
		if ("".equals(docKey[0]))
		{
//그룹웨어 결재서식코드가 없습니다.
			ComUtil.sendResult(response, 100, "RsApprovalServiceImpl:52 docID is Empty!");
	 	} 		
		
//결재문서 진행 정보
		if ("createDoc".equals(protID)) 
		{
			try {
				rsApproval = (Approval)ComUtil.getXmlData(new ByteArrayInputStream(document.getBytes("euc-kr")), Approval.class.getCanonicalName());
			} catch (Exception e) {
				ComUtil.sendResult(response, 2, "");
				return null;
			}
			
//결재선 정보
			info = ComUtil.ExtInfo(rsApproval,docKey[0],docKey[1]);
			info.setResponse(response);
								 		
	     	if (rsApproval != null) 
	     	{
	     		sDocumentStatus = rsApproval.getDocumentStatus();
	     		if ("accepted".equals(sDocumentStatus.toLowerCase())) {
	     			//결재상신
	     			sProcessCode = "P";	//결재진행
	     		} else if ("updated".equals(sDocumentStatus.toLowerCase())) {
	     			//중간결재 승인
	     			sProcessCode = "P";	//결재진행
	     		} else if ("processed".equals(sDocumentStatus.toLowerCase())) {
	     			//최종 승인
	     			sProcessCode = "Y";	//결재완료
	     		} else if ("returned".equals(sDocumentStatus.toLowerCase())) {
	     			//기안취소:반려
	     			sProcessCode = "R";	//취소:반려	     		
	     		} else {
	     			ComUtil.sendResult(response, 1, "");
	     			return null;
	     		}
	     		
	     		logger.info("document STATUS : " + sDocumentStatus.toLowerCase());
	     		logger.info("document PROCESSEDTIME : " + Integer.parseInt(rsApproval.getCurr_processedTime().substring(0,8))); 
	     		
//결재라인 주관부서 유효성여부 판단 : resources/core/config/CoreConfig.properties
	     		if(!("".equals(CoreProperties.getProperty("CoreERP.approval.authCheck_"+docKey[0]))))
	     		{
	     			if (!ComUtil.authDeptApproval(rsApproval, CoreProperties.getProperty("CoreERP.approval.authCheck_"+docKey[0])))
	     			{
     					//주관업무 결재선이 올바르지 않습니다.
	     				ComUtil.sendResult(response, 53, "RsApprovalServiceImpl:114 invalid approval line!");
     					return null;
     				}
     			}
	     		
	     		
	     		try {

//결재 상태값 변경 :: resources/core/config/CoreConfig.properties
	     			Map<String, Object> paramMap = new HashMap<String, Object>();
         			paramMap.put("TABLE_NM", CoreProperties.getProperty("CoreERP.approval.TB_"+docKey[0].substring(0,3)));
         			paramMap.put("DOCUMENT_ID", docKey[0]);
         			paramMap.put("APPR_SEQ", docKey[1]);
         			paramMap.put("APPR_STATE", sProcessCode);
         			
//결재상태 업데이트   				
         			dao.processUPDATE00(paramMap);
         			         			         			
//결재선정보 저장
         			/*
         			if(rsApproval != null)
         			{	
         				Map<String, Object> map = new HashMap<String, Object>();
         				map.put("DOC_ID"				, docKey[0]);
             			map.put("APPL_ID"				, docKey[1]);
             			map.put("STAT_CD"				, sProcessCode);
             			map.put("SUBJECT"           	, rsApproval.getSubject());
             			map.put("INIT_ID"               , info.getInit_id());
             			map.put("CURR_ID"		   		, rsApproval.getCurr_id());
             			map.put("CURR_SEQ"				, rsApproval.getCurr_seqNum());	
             			map.put("CURR_KIND"             , rsApproval.getCurr_kind());
             			map.put("CURR_STATUS"           , rsApproval.getCurr_status());
             			map.put("CURR_NOTPROCESSREASON" , rsApproval.getCurr_notProcessReason());
             			map.put("CURR_PROCESSEDTIME"    , rsApproval.getCurr_processedTime());
             			map.put("NEXT_ID"               , info.getNext_id());
             			map.put("NEXT_SEQ"              , info.getNext_seq());
             			map.put("NEXT_KIND"             , info.getNext_kind());
             			map.put("END_ID"                , info.getEnd_id());
             			map.put("END_SEQ"               , info.getEnd_seq());
             			map.put("DOCUMENT_STATUS"       , rsApproval.getDocumentStatus());
             			
         				if(rsApproval.getCurr_seqNum().equals("0") && "accepted".equals(sDocumentStatus.toLowerCase()))
         				{
		     				try{
		     					dao.processSAVE00(map);
		     				}catch (Exception e){
		     					dao.processUPDATE01(map);
		     				}
		     			} else {
		     				approvalDAO.processUPDATE01(map);
		     			}
         			}
         			*/
         			
//업무별 로직 추가 :: 결재 진행중 처리해야할 Process
         			/*
         			if (sProcessCode.equals("P")) {

	     			} else if(sProcessCode.equals("R")) {
	     			
	     			} else if(sProcessCode.equals("Y")) {
	     				//결재 완료 후 HR Process
	     			}
	     			*/

	     		}catch (Exception e) {
	     			ComUtil.sendResult(response, 100, e.getMessage());
	     			e.printStackTrace();
	     			return null;
	     		}
	     	}//end if rsApproval
     	}		
		else if ("deleteDoc".equals(protID))
		{
			try {	     		
//결재문서 삭제 정보					
					Map<String, Object> paramMap = new HashMap<String, Object>();
	     			paramMap.put("TABLE_NM", CoreProperties.getProperty("CoreERP.approval.TB_"+docKey[0].substring(0,3)));
	     			paramMap.put("DOCUMENT_ID", docKey[0]);
	     			paramMap.put("APPR_SEQ", docKey[1]);
	     			paramMap.put("APPR_STATE", sProcessCode);
	     			
//결재상태 업데이트				
	     			dao.processUPDATE00(paramMap);
	     			
	     			
//결재선정보 저장 시 삭제
	     			//dao.processDELETE00(paramMap);
	     			
     		} catch (Exception e) {
     			ComUtil.sendResult(response, 100, e.getMessage());
     			e.printStackTrace();
     			return null;
     		}
     	}
		 	
		return info;
	}
}//end class