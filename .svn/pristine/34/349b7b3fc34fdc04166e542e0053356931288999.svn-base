package core.erp.source.util;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Vector;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import com.dreamsecurity.exception.DVException;
import com.dreamsecurity.verify.DSTSPDFSig;
import com.epapyrus.api.ExportCustomFile;

import core.erp.com.service.impl.ComMessageServiceImpl;
import etiming.astdts.apl3161.CertVerifyConst;
import etiming.astdts.apl3161.TSSPdfTSTValidator;

public class ComNTSPdfConverter {
	
	private static final Logger logger = LoggerFactory.getLogger(ComNTSPdfConverter.class);
	

	/**
	 * <pre>
	 * 국세청 공제자료 PDF 파일을 XML 형식으로 변환한다.
	 * 
	 * NOTE :
	 * 	2014년 귀속부터 MAP으로 반환하므로 RETURN값을 FRAMEWORK에 맞게
	 * 	재조합해서 사용! (이전 년도 PDF는 사용할 일 없으므로 이전년도는 무시)
	 * </pre>
	 *
	 * @param fileName - 저장된 pdf 파일명
	 * @param filePath - 파일 경로
	 * @param passwd - 파일 비밀번호
	 * @param originPw - 파일 비밀번호(주민번호 뒷 7자리)
	 * @param cfFilepath - 인증서위치
	 * @return 업로드한 PDF 파일을 XML으로 변환한 결과
	 * 			1. 마스터(YEYSXM) - YEA_YEYSOM 
	 * 				SEQ	: 일련번호 - 공제서식번호
	 * 				ATT_YEAR : 귀속년도
	 * 				FORM_CD : 서식코드
	 * 				RESID : 주민번호
	 * 				NAME : 가족명
	 * 				DAT_CD : 데이터코드
	 * 				BUSNID : 사업자번호
	 * 				TRADE_NM : 상호
	 *              insu1_resid : 주민등록번호_주피보험자
	 * 				SUM : 납입금액합계
	 * 				PRE_TOT_AMT : 전년도_일반공제
	 * 				PRE_MARKET_TOT_AMT : 전년도_전통시장
	 * 				PRE_TMONEY_TOT_AMT : 전년도_대중교통
	 * 				FTYR_TOT_AMT : [2015귀속]_전전년도_일반공제
	 * 				FTYR_MARKET_TOT_AMT : [2015귀속]_전전년도_전통시장
	 * 				FTYR_TMONEY_TOT_AMT : [2015귀속]_전전년도_대중교통
	 * 			2. 문자열데이터(YEYSLS) - YEA_YEYSOS
	 * 				SEQ	: 일련번호 - 공제서식번호
	 * 				STR_NAME : 속성명
	 * 				STR_VAL : 속성내용
	 * 			3. 숫자데이터(YEYSLN) - YEA_YEYSON
	 * 				SEQ	: 일련번호 - 공제서식번호
	 * 				NUM_NAME : 속성명
	 * 				NUM_VAL : 속성값
	 * @throws Exception
	 */
	//pdf 파일을 읽어서 xml 형식으로 변환한다.
	public static Map pdfToXmlVector(String fileName, String filePath, String passwd, String originPw, String cfFilepath) throws Exception {
		
		Document pdfDoc = null;
		
		DocumentBuilderFactory docBuilderFactory = null;
		DocumentBuilder docBuilder = null;
		InputSource is = null;
		
		File pdfFile = null;
		
		BufferedInputStream bis = null;
		
		byte[] xmlBuffer = null;
		
		//전체 값 전달을 위한 맵
		HashMap retMap = new HashMap();
		
		try {
			Boolean bPassWord = false;
			//파일 실제 경로
			String physicalPath = filePath + File.separator + fileName;
			
			//국세청 전자문서 검증용 인증서 파일 위치(서버의 절대경로로...)
			String certFilePath = cfFilepath;
			
			//파일을 바이트스트림으로 읽어들인다.
			pdfFile = new File(physicalPath);
			bis = new BufferedInputStream(new FileInputStream(pdfFile));
			byte[] pdfBytes = new byte[(int) pdfFile.length()];
			
			while(bis.read(pdfBytes) != -1) {};
			

            /* 진본성 검증 초기화 */
			//lsh 2015 귀속 연말정산 추가
			int result = 0;
			boolean isSuccess = false;
			String strErrMsg = null;	//파일 검증 오류 메시지 발생시...
			
            try {
	            DSTSPDFSig dstsPdfsig = new DSTSPDFSig();
	
	            dstsPdfsig.init(pdfBytes);
		        dstsPdfsig.tokenParse();
		        
		        /* 전자문서 검증 */
		        isSuccess = dstsPdfsig.tokenVerify();
	
		         if( !isSuccess ){
		        	 result = -3;
		         }
		      // 기타 검증결과는 Exception을 발생 시킴
			}catch (DVException ex) {
				result = ex.getLastError();  // 위변조 검증 실패 시 데이터 추출 안함.
            }
            
			if(result != 0) {
				
				strErrMsg = null;
				
				switch(result) {
					case 2101:
						strErrMsg = "데이터 해쉬 검증 실패하였습니다.";
						break;
					case 2102:
						strErrMsg = "SIGNDATA 검증 실패하였습니다.";
						break;
					case 2103:
						strErrMsg = "지원하지 않는 해쉬알고리즘 입니다.";
						break;
					case 2104:
						strErrMsg = "파일 로드에 실패하였습니다.";
						break;
					case 2106:
						strErrMsg = "토큰 파일 실패하였습니다.";
						break;
					case 2107:
						strErrMsg = "인증서 추출 에러가 발생했습니다.";
						break;
					case 2108:
						strErrMsg = "인증서 파싱 에러가 발생했습니다.";
						break;
					case 2109:
						strErrMsg = "PDF 파일에서 XREF 정보 획슥 실패하였습니다.";
						break;
					case 2110:
						strErrMsg = "PDF 파일에서 bytrrange 정보 획득 실패";
						break;
					case 2111:
						strErrMsg = "이전 버전 토금이 삽입된 pdf 파일에서 imprint 정보 획득 실패";
						break;
					case 2113:
						strErrMsg = "객체 정보 획득 실패";
						break;
					default:
						strErrMsg = "관리자에게 문의하시기 바랍니다.";
						break;
				}
				
				String errMsg = "전자문서 파일 검증 시 오류가 발생하였습니다.\n" + strErrMsg;
				
				throw new Exception(errMsg);
				
				//오류 처리!
				
			}

			/* [Step2] XML(or SAM) 데이터 추출 */
			int validate = -1;
			try {
				ExportCustomFile pdf = new ExportCustomFile();

				// 데이터 추출

				xmlBuffer = pdf.NTS_GetFileBufEx(pdfBytes, originPw, "XML", false );
				validate = pdf.NTS_GetLastError();
                
		    } catch ( Exception e ) {
		    	e.printStackTrace();
		    }
			

			if(validate != 1) {
				
				strErrMsg = null;
				
				switch(validate) {
				
					case 0:
						
						strErrMsg = "연말정산간소화 표준 전자문서가 아닙니다.";
						
						break;
						
					case -1:
						
						strErrMsg = "비밀번호가 틀립니다.";
						
						break;
						
					case -2:
						
						strErrMsg = "PDF문서가 아니거나 손상된 문서입니다.";
						
						break;

					case -3:
						
						strErrMsg = "PDF문서가 위변조되었습니다.";
						
						break;

					case -4:
						
						strErrMsg = "PDF문서가 위변조검증 중 오류가 발생하였습니다.";
						
						break;
						
					default:
						
						strErrMsg = "데이터 추출에 실패하였습니다.";
						
						break;
				
				}
				
				String errMsg = "전자문서 파일 검증 시 오류가 발생하였습니다.\n" + strErrMsg;
				
				throw new Exception(errMsg);
				
				//오류 처리!
			}
			
			// PDF -> XML 문서로 변환!
			StringBuffer sbPdfXmlStr = new StringBuffer( new String(xmlBuffer, "UTF-8") );
			
			//XML문서를 변환. 테이블에 맞게
			docBuilderFactory = DocumentBuilderFactory.newInstance();
			docBuilder = docBuilderFactory.newDocumentBuilder();
			is = new InputSource(new StringReader(sbPdfXmlStr.toString()));
			
			pdfDoc = docBuilder.parse(is);
			
			//py_yeysxm 테이블 저장을 위한 벡터
			Vector vtMasterData = new Vector();
			
			//py_yeysls 테이블 저장을 위한 벡터
			Vector vtDetailData1 = new Vector();
			
			//py_yeysln 테이블 저장을 위한 벡터
			Vector vtDetailData2 = new Vector();

			String attrName = null;
	        String attrVal	= null;
			
			//<!-- XML 문서 정의(공통) -->
			NodeList docNode = pdfDoc.getElementsByTagName("doc");
			Element docElement = (Element) docNode.item(0);
			
	        String docType =  docElement.getElementsByTagName("doc_type").item(0).getFirstChild().getNodeValue();	//문서종류
	        String seq =  docElement.getElementsByTagName("seq").item(0).getFirstChild().getNodeValue();			//문서 일련번호
	        String attYear =  docElement.getElementsByTagName("att_year").item(0).getFirstChild().getNodeValue();	//귀속년도
	        
	        //<!-- 서식 목록 -->
	        NodeList formList = pdfDoc.getElementsByTagName("form");
			
	        int formLength = formList.getLength();
	        
    		int masterDataCnt = 0;
    		int detailDataCnt = 0;
	        
			//<!-- 서식 목록 반복 -->
	        for(int formCnt = 0; formCnt < formLength; formCnt++) {
	        	
	        	Element formElement = (Element) formList.item(formCnt);
	        	String formCd = formElement.getAttribute("form_cd");	//서식코드
	        	
	        	//<!-- 인별 목록 -->
	        	NodeList manList = formElement.getElementsByTagName("man");
	        	
	        	int manLength = manList.getLength();
	        	
	        	//<!-- 인별 목록 반복-->
	        	for(int manCnt = 0; manCnt < manLength; manCnt++) {
	        		
	        		Element manElement = (Element) manList.item(manCnt);
	        		String resId = manElement.getAttribute("resid");	//주민등록번호
	        		String name = manElement.getAttribute("name");		//성명
	        		
	        		//2015 귀속 연말정산_전전년 금액 추가
        			String ftyr_tot_amt = manElement.getAttribute("ftyr_tot_amt");	//전전년 일반공제대상금액합계
        			String ftyr_market_tot_amt = manElement.getAttribute("ftyr_market_tot_amt");	//전전년 전통시장공제대상금액합계
        			String ftyr_tmoney_tot_amt = manElement.getAttribute("ftyr_tmoney_tot_amt");	//전전년 대중교통공제대상금액합계
        			String pre_tot_amt = manElement.getAttribute("pre_tot_amt");	//직전년 일반공제대상금액합계
        			String pre_market_tot_amt = manElement.getAttribute("pre_market_tot_amt");	//직전년 전통시장공제대상금액합계
        			String pre_tmoney_tot_amt = manElement.getAttribute("pre_tmoney_tot_amt");	//직전년 대중교통공제대상금액합계
    				
	        		//<!-- 개인별 세부 데이터 목록 -->
	        		NodeList dataList = manElement.getElementsByTagName("data");
	        		
	        		int dataLength = dataList.getLength();
	        		
	        		//<!-- 개인별 세부 데이터 목록 반복 -->
	        		for(int dataCnt = 0; dataCnt < dataLength; dataCnt++) {
	        			
	        			Element dataElement = (Element) dataList.item(dataCnt);
	        			
	        			String datCd = dataElement.getAttribute("dat_cd");	//자료코드(모든 전자문서에 "dat_cd" 속성이 정의되어 있음.[2011.12년 국세청자료])
	        			
	        			//[2011.12월 전자문서 XML 정의서] 기준 서식 안내
	        			// 1. 현금영수증 : 사업자번호, 상호 없음
	        			// 2. 소기업소상공인 공제부금 : 사업자번호, 상호 없음
	        			// 3. 교육비(직업훈련비) : 상세내역 없음

	        			String busnId = (dataElement.hasAttribute("busnid") ? dataElement.getAttribute("busnid") : "");			//사업자번호
	        			String tradeNm = (dataElement.hasAttribute("trade_nm") ? dataElement.getAttribute("trade_nm") : "");	//상호

	        			//상호명은 40바이트로 제한한다.
	        			tradeNm = conv_substring(tradeNm, 100);
	        			
	        			// 금액 계 ("sum") 태그 처리
	        			//Element sumElement = (Element) dataElement.getElementsByTagName("sum").item(0);

	        			
	        			Element sumElement = null;
	        			Element insu1ResidElement = null;
	        			Element insu1NmElement = null;
	        			String insu1ResidValue = "";
	        			String insu1NmValue = "";
	        			
	        			//[2013귀속] 퇴직연금 합계금액 sum --> ddct_bs_ass_amt 로 변경되어 수정
	                    if ( formCd.equals("E102Y") || formCd.equals("E102M") || formCd.equals("F102Y") || formCd.equals("F102M") ) {	                    	
	                    	sumElement = (Element) dataElement.getElementsByTagName("ddct_bs_ass_amt").item(0);
	                    } else {
	                    	sumElement = (Element) dataElement.getElementsByTagName("sum").item(0);
	                    	
	                    	if ( formCd.equals("A102Y")) {
	                    		insu1ResidElement = (Element) dataElement.getElementsByTagName("insu1_resid").item(0);
	                    		insu1NmElement = (Element) dataElement.getElementsByTagName("insu1_nm").item(0);
	                    		
	                    		insu1ResidValue = insu1ResidElement.getFirstChild().getNodeValue();
	                    		insu1NmValue    = insu1NmElement.getFirstChild().getNodeValue();
	                    	}
	                    }
	        				                    
	        			String sumValue = sumElement.getFirstChild().getNodeValue();
	        				        			
	        			//yeysxm 레코드를 위한 배열
	        			ArrayList<String> mstRowArr = new ArrayList<String>();
	        			
	        			//기본 노드 추가(일련번호, 귀속년도)
	        			masterDataCnt++;	//마스터 데이터 카운트 1 + 
	        			mstRowArr.add(seq + (masterDataCnt + ""));	//일련번호 - 공제서식번호;
	        			mstRowArr.add(attYear);	//귀속년도
	        			
	        			//1) form_cd 서식코드
	        			mstRowArr.add(formCd);
	        			
	        			//2) res_id 주민번호
	        			mstRowArr.add(resId);
	        			
	        			//3) name 가족명
	        			mstRowArr.add(name);
	        			
	        			//4) dat_cd 데이터코드
	        			mstRowArr.add(datCd);
	        			
	        			//5) busnid 사업자번호
	        			mstRowArr.add(busnId);
	        			
	        			//6) trade_nm 상호
	        			mstRowArr.add(tradeNm);
	        			
	        			//7) insu1ResidValue 주민등록번호_주피보험자
	        			mstRowArr.add(insu1ResidValue);
	        			
	        			//8) insu1NmValue 성명_주피보험자
	        			mstRowArr.add(insu1NmValue);
	        			
	        			//9) sum 납입금액계
	        			mstRowArr.add(sumValue);

	        			//10) pre_tot_amt 직전년 일반공제대상금액합계
	        			mstRowArr.add(pre_tot_amt);

	        			//11) pre_market_tot_amt 직전년 전통시장공제대상금액합계
	        			mstRowArr.add(pre_market_tot_amt);

	        			//12) pre_tmoney_tot_amt 직전년 대중교통공제대상금액합계
	        			mstRowArr.add(pre_tmoney_tot_amt);	        			

	        			//13) ftyr_tot_amt 전전년 일반공제대상금액합계
	        			mstRowArr.add(ftyr_tot_amt);

	        			//14) ftyr_market_tot_amt 전전년 전통시장공제대상금액합계
	        			mstRowArr.add(ftyr_market_tot_amt);

	        			//15) ftyr_tmoney_tot_amt 전전년 대중교통공제대상금액합계
	        			mstRowArr.add(ftyr_tmoney_tot_amt);
	        			
	        			vtMasterData.add(mstRowArr);
	        			
	        			//서식의 마스터 레코드를 위한 엘리먼트 생성 종료!
	        			
	        			//data 태그의 속성
	        			NamedNodeMap dataAttrList = dataElement.getAttributes();
	        			
	        			//Sum 태그의 속성
	        			NamedNodeMap sumAttrList = sumElement.getAttributes();
	        			
	        			//data 태그의 자식
	        			NodeList dataChilds = dataElement.getChildNodes();
	        			
    					//data 태그 속성 추출
	        			for(int attrCnt = 0; attrCnt < dataAttrList.getLength(); attrCnt++) {
	        				
	        				Attr dataAttr = (Attr) dataAttrList.item(attrCnt);
	        				attrName = dataAttr.getName();
	        				attrVal = dataAttr.getValue();
	        				
	        				//공통적인 속성을 제외한 추가 속성을 추출함.
	        				if(!attrName.equalsIgnoreCase("dat_cd") && !attrName.equalsIgnoreCase("busnid") && !attrName.equalsIgnoreCase("trade_nm")) {
	        					
	        					//yeysls 테이블 레코드 배열
	        					ArrayList<String> dtlRowArr = new ArrayList<String>();
	        					dtlRowArr.add(seq + (masterDataCnt + ""));	//공제서식번호 기본 입력
	        					
	        					//공제속성명, 값 저장
	        					dtlRowArr.add(attrName);
	        					dtlRowArr.add(attrVal);
	        					
	        					//yeysls 벡터에 저장
	        					vtDetailData1.add(dtlRowArr);

	        				}
	        				
	        			}//data 태그 속성 추출 종료
	        				        			
	        			//sum 태그 속성 추출
	        			for(int attrCnt = 0; attrCnt < sumAttrList.getLength(); attrCnt++) {
	        				
	        				Attr dataAttr = (Attr) sumAttrList.item(attrCnt);
	        				attrName = dataAttr.getName();
	        				attrVal = dataAttr.getValue();
	        				
	        				//yeysln 테이블 레코드 배열
        					ArrayList<String> dtlRowArr = new ArrayList<String>();
        					dtlRowArr.add(seq + (masterDataCnt + ""));	//공제서식번호 기본 입력
        					
        					//공제속성명, 값 저장
        					dtlRowArr.add(attrName);
        					dtlRowArr.add(attrVal);
        					
        					//yeysln 벡터에 저장
        					vtDetailData2.add(dtlRowArr);
	        				
	        			}//sum 태그 속성 추출 종료
	        			
	        			//data 태그 자식 태그 추출
	        			for(int childCnt = 0; childCnt < dataChilds.getLength(); childCnt++) {
	        				
	        				Node childNodes = dataChilds.item(childCnt);
	        				attrName = childNodes.getNodeName();
	        				attrVal = childNodes.getFirstChild() != null ? childNodes.getFirstChild().getNodeValue() : "";
	        				
	        				//실제적으로 사용할 child
	        				//if(attrName.equals("com_cd") || attrName.equals("pension_cd") || attrName.equals("saving_gubn") || attrName.equals("repay_years") || attributeName.equals("start_dt") 
                            //|| attributeName.equals("ddct_bs_ass_amt") || attributeName.equals("reg_dt") || attributeName.equals("first_year_tot_amt") || attributeName.equals("second_year_tot_amt")) {
	        				if(!attrName.equals("#text")){	
	        					
	        					//yeysls 테이블 레코드 배열
	        					ArrayList dtlRowArr = new ArrayList();
	        					dtlRowArr.add(seq + (masterDataCnt + ""));	//공제서식번호 기본 입력
	        					
	        					//공제속성명, 값 저장
	        					dtlRowArr.add(attrName);
	        					dtlRowArr.add(attrVal);
	        					
	        					//yeysls 벡터에 저장
	        					vtDetailData1.add(dtlRowArr);
	        				}
	        				//}
	        				
	        			}//data 태그 자식 태그 추출 종료
	        			
	        		}//<!-- 개인별 세부 데이터 목록 반복 종료 -->
	        		
	        	}	//<!-- 개인별 반복 종료 -->
	        	
	        	
	        }	//<!-- 서식 목록 반복 종료 -->

	        retMap.put("MASTER", vtMasterData);
	        retMap.put("DTL_NUM", vtDetailData2);
	        retMap.put("DTL_STR", vtDetailData1);
	        
		} catch (Exception e) {
			
			throw e;
			
		} finally {

			if(bis != null) {
				bis.close();
			}
			
		}
		
		return retMap;

	}
	
	private static String conv_substring(String korStr, int length) throws Exception {
		
		String s = null;
		
		try {
			
			int eos = 0;
			int i = 0;
			int cnt = 0;
			
			byte[] temp = korStr.getBytes(); // 스트링을 바이트열로 변환한다.
			
			if(temp.length < length) {
				return korStr;
			}
			
			//전체 문자열을 카운트한다.
			for (i = 0; i < length; i++) {
			
				// 바이트중에 음수값인것을 카운트 한다.
				if (temp[i] < 0) {
					cnt++;
				}
			
			}
			
			if (cnt % 2 != 0) { // 한글 미완성 . 현재 바이트 포함시키지 않음
				eos = length - 1;
			} else {
				eos = length;
			}
			
			s = new String(temp, 0, eos); // 임시 바이트열을 다시 스트링으로 변환

			
		} catch (Exception e) {
			logger.warn("예외 발생");
			
			throw e;
		}
		
		return s;

	}
	
}

