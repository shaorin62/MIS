(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("sample_ubireport");
                this.set_classname("sample_ubireport");
                this.set_titletext("sample_ubireport");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_CODEXH", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMM_CODE\">TEST1</Col><Col id=\"COMM_CDNM\">테스트1</Col><Col id=\"SYST_CODE\">SYS</Col></Row><Row><Col id=\"COMM_CODE\">TEST2</Col><Col id=\"COMM_CDNM\">2번ㅔ테스트</Col><Col id=\"SYST_CODE\">TEST</Col></Row><Row><Col id=\"COMM_CODE\">03TEST</Col><Col id=\"COMM_CDNM\">TEST3</Col><Col id=\"SYST_CODE\">CODE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divButtonList", "absolute", "18", "11", "606", "27", null, null, this);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnPrintPopupSample", "absolute", "0", "1", "134", "23", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("인쇄(팝업)");
            obj.set_cssclass("styTextButtonBizProc");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnPrintDivSample", "absolute", "140", "1", "134", "23", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("인쇄 - 서비스(Div)");
            obj.set_cssclass("styTextButtonBizProc");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnPrintDivDsSample", "absolute", "280", "1", "134", "23", null, null, this.divButtonList);
            obj.set_taborder("2");
            obj.set_text("인쇄- 데이터셋(Div)");
            obj.set_cssclass("styTextButtonBizProc");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnPrintPopupSql", "absolute", "422", "1", "134", "23", null, null, this.divButtonList);
            obj.set_taborder("3");
            obj.set_text("인쇄(팝업)-자체DB연결");
            obj.set_cssclass("styTextButtonBizProc");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Div("reportDiv", "absolute", "11", "60", null, null, "11", "8", this);
            obj.set_taborder("1");
            obj.set_text("레포트를 출력할 Div 입니다.");
            this.addChild(obj.name, obj);

            obj = new Static("staStatusText", "absolute", null, "12", "438", "18", "10", null, this);
            obj.set_taborder("2");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 606, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_ubireport");
            		p.set_titletext("sample_ubireport");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample_ubireport.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("sample_ubireport.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("sample_ubireport.xfdl", function() {
        /***************************************************************************************************
         * # Program : sample_ubireport 유비리포트 호출 샘플예제
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.19		장성환		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다. 
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.  
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리  
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                         
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************INBUS*CO*KR***J*S*H*/

        /*--------------------------------------+
         |  공통 Script Include					|
         +--------------------------------------*/
        //include "script::lib_script_common.xjs"

        // 공통 리포트 스크립트 추가
        //include "script::lib_script_ubireport.xjs"

        
        this.fn_FormLoadSetting = function (obj,e) {
        	
        }

        /**
         * 인쇄(팝업) 버튼 클릭 이벤트핸들러. 인쇄 모달팝업 표시
         */
        this.divButtonList_btnPrintPopupSample_onclick = function(obj,e)
        {
        	// 이 예제는 리포트를 팝업화면으로 출력할 경우의 예제입니다.
        	// 팝업은 모달팝업으로 실행되며, 사용자가 임의로 크기를 조절할 수 있습니다.
        	
        	
        	
        	// 1. 리포트 파일명을 지정합니다. 하위 디렉토리의 파일은 "/tmm/TMMA0011R1.jrf" 처럼 디렉토리를 포함하여야 합니다.
        	var reportfile = "TMMA0011R1.jrf";
        	
        	// 2. 리포트로 전달할 파라미터를 입력합니다. 구분자는 #으로 구분합니다.(** 서비스 호출에 사용할 파라미터가 아닙니다!!)
        	//    - 예) TEST_CODE#MY_VAL#BGIN_DATE#20160601#ENDX_DATE#20161231#USER_NAME#장성환
        	//			예제처럼 '키#값'을 반복
        	var params = "REPORT_NAME#공통코드목록";
        	
        	/* 3. 리포트에 사용할 데이터를 입력합니다.
        	    - 리포트 출력을 위한 서비스를 구성하여 리포트에 데이터를 제공합니다.
        	    - 서비스 구현은 일반 업무프로그램의 구성과 동일합니다.
        	      (실제 내부 처리방식은 넥사크로플랫폼의 트랜젝션 호출 방식으로 처리합니다.)
        	    - 서비스를 이용하지 않고 화면의 데이터셋을 직접 전달하여 사용할 수 도 있습니다.
        	    - ***서비스 구현 + 데이터셋 전달의 조합은 불가능합니다.(동시 사용 금지)
        	*/
        	
        	// 리포트 데이터 정보를 위한 배열
        	var dataref = new Array();
        	
        	// 4. 리포트 데이터를 트랜젝션을 통하여 가져오는 예제입니다.
        	dataref[0] = new Object();
        	// 데이터 참조는 트랜젝션(TRAN)
        	dataref[0].type = "TRAN";
        	// 리포트 데이터를 가져올 url
        	dataref[0].svcUrl = "/core/erp/tmm/TMMA0010_SEARCH00.do";
        	// 트랜젝션 보낼때 서비스로 전달할 데이터셋 목록입니다. 공백(' ')으로 구분합니다.
        	dataref[0].inDataset = ""
        	// 트랜젝션 후 리포트로 전달할 데이터셋입니다. 공백(' ')으로 구분합니다. ** 반드시 리포트에 UDS/SQL명과 동일하여야 합니다.
        	dataref[0].outDataset = "dsTM_CODEXH=dsTM_CODEXH"
        	// 트랜젝션 보낼때 서비스로 전달할 변수입니다. 콤마로 구분합니다. 업무화면의 'fn_CreateArgument' 함수를 이용하여 생성하세요.
        	dataref[0].arg = "COMM_CDNM='USEX_YSNO' SYST_CODE='TMM'";
        	
        	// 5. 리포트 화면의 버튼, 이벤트 핸들러 함수 등을 설정하기 위한 옵션입니다.
        	var reportOptions = new Object;
        	reportOptions.title = "유비리포트";						// 인쇄물 타이틀. 저장 시 파일명으로도 사용됩니다.
        	reportOptions.loadCallback = "fn_PopupReportLoadFinish";	// 인쇄물 미리보기 화면이 로드 된 후 실행할 함수명입니다.
        	reportOptions.saveEnable = false;							// 저장 버튼 표시여부. true or false
        	reportOptions.saveLock = true;								// 저장버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        	reportOptions.saveCallback = "fn_WhenSaveEnd";				// 리포트를 파일로 저장한 후 실행할 함수입니다.
        	reportOptions.printEnable = true;							// 인쇄 버튼 표시여부. true or false
        	reportOptions.printCallback = "fn_WhenPrintEnd";			// 리포트 인쇄 후 실행할 함수입니다.
        	reportOptions.printLock = true;								// 인쇄버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        	
        	
        	// 리포트 팝업 호출
        	this.fn_UbiReport(reportfile, params, dataref, reportOptions);
        }

        /**
         * 인쇄(Div) 버튼 클릭 이벤트핸들러. Div 프레임내에 리포트를 출력합니다.
         */
        this.divButtonList_btnPrintDivSample_onclick = function(obj,e)
        {
        	// 이 예제는 리포트를 form 내의 div 객체에 표시하는 예제입니다.
        	// 지정된 DIV 객체에 리포트가 출력됩니다.
        	
        	// 1. 리포트 파일명을 지정합니다. 하위 디렉토리의 파일은 "/tmm/TMMA0011R1.jrf" 처럼 디렉토리를 포함하여야 합니다.
        	var reportfile = "TMMA0011R1.jrf";
        	
        	// 2. 리포트로 전달할 파라미터를 입력합니다. 구분자는 #으로 구분합니다.(** 서비스 호출에 사용할 파라미터가 아닙니다!!)
        	//    - 예) TEST_CODE#MY_VAL#BGIN_DATE#20160601#ENDX_DATE#20161231#USER_NAME#장성환
        	//			예제처럼 '키#값'을 반복
        	var params = "REPORT_NAME#공통코드목록";
        	
        	/* 3. 리포트에 사용할 데이터를 입력합니다.
        	    - 리포트 출력을 위한 서비스를 구성하여 리포트에 데이터를 제공합니다.
        	    - 서비스 구현은 일반 업무프로그램의 구성과 동일합니다.
        	      (실제 내부 처리방식은 넥사크로플랫폼의 트랜젝션 호출 방식으로 처리합니다.)
        	    - 서비스를 이용하지 않고 화면의 데이터셋을 직접 전달하여 사용할 수 도 있습니다.
        	    - ***서비스 구현 + 데이터셋 전달의 조합은 불가능합니다.(동시 사용 금지)
        	*/
        	
        	//4. 리포트 데이터를 트랜젝션을 통하여 서버에서 직접 가져오는 예제입니다.
        	var dataref = new Array();	// 다중 트랜젝션 호출 가능하도록...
        	dataref[0] = new Object();
        	// 데이터 참조는 트랜젝션(TRAN)
        	dataref[0].type = "TRAN";
        	// 리포트 데이터를 가져올 url
        	dataref[0].svcUrl = "/core/erp/tmm/TMMA0010_SEARCH00.do";
        	// 트랜젝션 보낼때 서비스로 전달할 데이터셋 목록입니다. 공백(' ')으로 구분합니다.
        	dataref[0].inDataset = ""
        	// 트랜젝션 후 리포트로 전달할 데이터셋입니다. 공백(' ')으로 구분합니다. ** 반드시 리포트에 UDS/SQL명과 동일하여야 합니다.
        	dataref[0].outDataset = "dsTM_CODEXH=dsTM_CODEXH"
        	// 트랜젝션 보낼때 서비스로 전달할 변수입니다. 콤마로 구분합니다. 업무화면의 'fn_CreateArgument' 함수를 이용하여 생성하세요.
        	dataref[0].arg = "COMM_CDNM='USEX_YSNO' SYST_CODE='TMM'";
        	
        	this.fn_UbiReportComp(this.reportDiv, reportfile, params, dataref);
        	
        }

        
        /**
         * 인쇄(Div) 버튼 클릭 이벤트핸들러. Div 프레임내에 리포트를 출력합니다.
         */
        this.divButtonList_btnPrintDivDsSample_onclick = function(obj,e)
        {
        	// 이 예제는 리포트를 form 내의 div 객체에 표시하는 예제입니다.
        	// 지정된 DIV 객체에 리포트가 출력됩니다.
        	
        	// 1. 리포트 파일명을 지정합니다. 하위 디렉토리의 파일은 "/tmm/TMMA0011R1.jrf" 처럼 디렉토리를 포함하여야 합니다.
        	var reportfile = "TMMA0011R1.jrf";
        	
        	// 2. 리포트로 전달할 파라미터를 입력합니다. 구분자는 #으로 구분합니다.(** 서비스 호출에 사용할 파라미터가 아닙니다!!)
        	//    - 예) TEST_CODE#MY_VAL#BGIN_DATE#20160601#ENDX_DATE#20161231#USER_NAME#장성환
        	//			예제처럼 '키#값'을 반복
        	var params = "REPORT_NAME#공통코드목록";
        	
        	/* 3. 리포트에 사용할 데이터를 입력합니다.
        	    - 리포트 출력을 위한 서비스를 구성하여 리포트에 데이터를 제공합니다.
        	    - 서비스 구현은 일반 업무프로그램의 구성과 동일합니다.
        	      (실제 내부 처리방식은 넥사크로플랫폼의 트랜젝션 호출 방식으로 처리합니다.)
        	    - 서비스를 이용하지 않고 화면의 데이터셋을 직접 전달하여 사용할 수 도 있습니다.
        	    - ***서비스 구현 + 데이터셋 전달의 조합은 불가능합니다.(동시 사용 금지)
        	*/
        	
        	// 4. 리포트로 데이터셋을 직접 전달하는 예제입니다.
        	var dataref = new Array();		// 데이터셋 다중 전달 지원
        	dataref[0] = new Object();
        	// 데이터 참조는 데이터셋(DATASET)
        	dataref[0].type = "DATASET";
        	// 전달할 데이터셋을 입력합니다.
        	dataref[0].dsObj = this.dsTM_CODEXH;
        	
        	
        	
        	// 5. 리포트 화면의 버튼, 이벤트 핸들러 함수 등을 설정하기 위한 옵션입니다.
        	var reportOptions = new Object;
        	reportOptions.title = "유비리포트";				// 인쇄물 타이틀. 저장 시 파일명으로도 사용됩니다.
        	reportOptions.loadCallback = "fn_ReportLoadFinish";	// 인쇄물 미리보기 화면이 로드 된 후 실행할 함수명
        	reportOptions.saveEnable = true;					// 저장 버튼 표시여부. true or false
        	reportOptions.saveLock = true;						// 저장버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        	reportOptions.saveCallback = "fn_WhenSaveEnd";		// 리포트를 파일로 저장한 후 실행할 함수입니다.
        	reportOptions.printEnable = false;					// 인쇄 버튼 표시여부. true or false
        	reportOptions.printCallback = "fn_WhenPrintEnd";	// 리포트 인쇄 후 실행할 함수입니다.
        	
        	this.fn_UbiReportComp(this.reportDiv, reportfile, params, dataref, reportOptions);
        	
        	
        	//this.fn_UbiReportComp(this.reportDiv, reportfile, params, dataref);
        	
        }

        /**
         * 인쇄(팝업) 버튼 클릭 이벤트핸들러. 인쇄 모달팝업 표시
         */
        this.divButtonList_btnPrintPopupSql_onclick = function(obj,e)
        {
        	// 이 예제는 리포트를 팝업화면으로 출력할 경우의 예제입니다.
        	// 팝업은 모달팝업으로 실행되며, 사용자가 임의로 크기를 조절할 수 있습니다.
        	
        	
        	
        	// 1. 리포트 파일명을 지정합니다. 하위 디렉토리의 파일은 "/tmm/TMMA0011R1.jrf" 처럼 디렉토리를 포함하여야 합니다.
        	var reportfile = "test_report.jrf";
        	
        	// 2. 리포트로 전달할 파라미터를 입력합니다. 구분자는 #으로 구분합니다.(** 서비스 호출에 사용할 파라미터가 아닙니다!!)
        	//    - 예) TEST_CODE#MY_VAL#BGIN_DATE#20160601#ENDX_DATE#20161231#USER_NAME#장성환
        	//			예제처럼 '키#값'을 반복
        	var params = "COMM_CODE#ACCT_TYPE#";
        	
        	
        	/* 3. 리포트에 사용할 데이터를 입력합니다.
        	    - 리포트 출력을 위한 서비스를 구성하여 리포트에 데이터를 제공합니다.
        	    - 서비스 구현은 일반 업무프로그램의 구성과 동일합니다.
        	      (실제 내부 처리방식은 넥사크로플랫폼의 트랜젝션 호출 방식으로 처리합니다.)
        	    - 서비스를 이용하지 않고 화면의 데이터셋을 직접 전달하여 사용할 수 도 있습니다.
        	    - ***서비스 구현 + 데이터셋 전달의 조합은 불가능합니다.(동시 사용 금지)
        	*/
        	
        	// 리포트 데이터 정보를 위한 배열
        	var dataref = new Array();
        /*	
        	// 4. 리포트 데이터를 트랜젝션을 통하여 가져오는 예제입니다.
        	dataref[0] = new Object();
        	// 데이터 참조는 트랜젝션(TRAN)
        	dataref[0].type = "TRAN";
        	// 리포트 데이터를 가져올 url
        	dataref[0].svcUrl = "/core/erp/tmm/TMMA0010_SEARCH00.do";
        	// 트랜젝션 보낼때 서비스로 전달할 데이터셋 목록입니다. 공백(' ')으로 구분합니다.
        	dataref[0].inDataset = ""
        	// 트랜젝션 후 리포트로 전달할 데이터셋입니다. 공백(' ')으로 구분합니다. ** 반드시 리포트에 UDS/SQL명과 동일하여야 합니다.
        	dataref[0].outDataset = "dsTM_CODEXH=dsTM_CODEXH"
        	// 트랜젝션 보낼때 서비스로 전달할 변수입니다. 콤마로 구분합니다. 업무화면의 'fn_CreateArgument' 함수를 이용하여 생성하세요.
        	dataref[0].arg = "COMM_CDNM='USEX_YSNO' SYST_CODE='TMM'";
        */	
        	// 5. 리포트 화면의 버튼, 이벤트 핸들러 함수 등을 설정하기 위한 옵션입니다.
        	var reportOptions = new Object;
        /*
        	reportOptions.title = "유비리포트";						// 인쇄물 타이틀. 저장 시 파일명으로도 사용됩니다.
        	reportOptions.loadCallback = "fn_PopupReportLoadFinish";	// 인쇄물 미리보기 화면이 로드 된 후 실행할 함수명입니다.
        	reportOptions.saveEnable = false;							// 저장 버튼 표시여부. true or false
        	reportOptions.saveLock = true;								// 저장버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        	reportOptions.saveCallback = "fn_WhenSaveEnd";				// 리포트를 파일로 저장한 후 실행할 함수입니다.
        	reportOptions.printEnable = true;							// 인쇄 버튼 표시여부. true or false
        	reportOptions.printCallback = "fn_WhenPrintEnd";			// 리포트 인쇄 후 실행할 함수입니다.
        	reportOptions.printLock = true;								// 인쇄버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        */
        	
        	// 리포트 팝업 호출
        	this.fn_UbiReport(reportfile, params, dataref, reportOptions);
        }

        
        /**
         * 리포트가 정상적으로 로드된 후 호출되는 함수입니다.
         */
        this.fn_ReportLoadFinish = function() {
        	this.staStatusText.set_text("-- 리포트가 정상적으로 호출되었습니다.");
        }

        
        /**
         * 팝업에서 리포트가 정상적으로 로드된 후 호출되는 함수입니다.
         */
        this.fn_PopupReportLoadFinish = function() {
        	this.staStatusText.set_text("-- 팝업화면에서 리포트가 정상적으로 호출되었습니다.");
        }

        
        /**
         * 리포트 인쇄가 완료된 후 실행되는 함수입니다.
         * 해당 함수가 실행되는 시점은 브라우저별로 다음과 같습니다.
         *   1. PDF 방식으로 인쇄 (Adobe Reader 인쇄)
         *      - IE11이하 : 인쇄설정창이 호출된 다음에 이벤트 발생.
         *                   육안상으로는 툴바 버튼 클릭 시, 호출되는 것처럼 동작함.
         *      - Chrome : 인쇄설정창이 화면에 나타난 다음 호출
         *      - Edge/Firefox 등 : 서버에서 PDF 파일이 생성되고 나서 호출
         *   2. HTML 방식으로 인쇄 
         *      - 새창이 팝업되고 나서 호출
         */
        this.fn_WhenPrintEnd = function() {
        	this.staStatusText.set_text("-- 인쇄가 완료되었습니다.");
        }

        /*
         *  저장버튼 클릭 후 실행
         *  - 서버에 파일이 저장이 완료된 이후에 실행됨.
         */
        this.fn_WhenSaveEnd = function() {
        	this.staStatusText.set_text("-- 리포트가 파일로 저장되었습니다.");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_CODEXH.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.divButtonList.btnPrintPopupSample.addEventHandler("onclick", this.divButtonList_btnPrintPopupSample_onclick, this);
            this.divButtonList.btnPrintDivSample.addEventHandler("onclick", this.divButtonList_btnPrintDivSample_onclick, this);
            this.divButtonList.btnPrintDivDsSample.addEventHandler("onclick", this.divButtonList_btnPrintDivDsSample_onclick, this);
            this.divButtonList.btnPrintPopupSql.addEventHandler("onclick", this.divButtonList_btnPrintPopupSql_onclick, this);

        };

        this.loadIncludeScript("sample_ubireport.xfdl");

       
    };
}
)();
