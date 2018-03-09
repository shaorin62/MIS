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
                this.set_name("comUbiReportView");
                this.set_classname("FileUpDownload");
                this.set_titletext("Report View");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new UbiReport("UbiViewer00", "absolute", "8", "8", null, null, "8", "8", this);
            obj.set_taborder("38");
            obj.set_text("UbiViewer00");
            obj.set_resource("/ubireport/ajax/js4");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FileUpDownload");
            		p.set_titletext("Report View");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comUbiReportViewComp.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comUbiReportViewComp.xfdl", function() {
        /***************************************************************************************************
         * # Program : comUbiReportView 유비레포트 출력 레이어 컴포넌트
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		jsh			Initial Created.
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
         *****************************************************************************INBUS*CO*KR****J*S*H***/

        /*--------------------------------------+
         |  공통 Script Include					|
         +--------------------------------------*/
        //include "script::lib_script_common.xjs"
        this.UbiViewer00.isStreaming = true;	// 문서 일부만 우선 출력
        this.UbiViewer00.scale = "-9998";		// 쪽맞춤

        /*--------------------------------------+
         |  화면 변수 선언부					|
         +--------------------------------------*/
        this.oParam = null;

        /*--------------------------------------+
         |  최초 화면 Load時 처리 할 사항	|
         +--------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.oParam = this.parent.__objUbiParamArgs;
        	
        	var ubiViewer = this.UbiViewer00;
        	
        	// 일반 브라우저와 넥사크로 런타임(퀵뷰)에 따라 처리방식 변경필요
        	if (nexacro.Browser == "Runtime") {
        		ubiViewer.dataurl = application.GBL_HTTPURL + "/UbiData";
        		ubiViewer.reporturl = application.GBL_HTTPURL + "/ubireport/jrfdir/";
        		ubiViewer.fileurl = application.GBL_HTTPURL + "/ubireport/work/property";
        	} else {
        		ubiViewer.set_resource(application.GBL_HTTPURL + "/ubireport/ajax/js4");
        		ubiViewer.gatewayurl = application.GBL_HTTPURL + "/UbiGateway";
        		ubiViewer.resid = "UBIAJAX";
        	}

        	ubiViewer.jrffile   = this.oParam.reportFile;
        	
        	var dataRef = this.oParam.reportRef;
        	var dataType = "";
        	
        	for(idx in dataRef) {
        		
        		dataType = dataRef[idx].type;
        		
        		// 레포트에 사용할 데이터에 따라서 처리가 바뀜
        		if (dataType.toLowerCase() == "tran") {
        			ubiViewer.addTransaction(	this
        						, "TRAN" + idx
        						, application.GBL_HTTPURL + dataRef[idx].svcUrl + "?CALL_TYPE=NEXACRO"
        						, dataRef[idx].inDataset
        						, dataRef[idx].outDataset
        						, dataRef[idx].arg
        						, 0);
        		} else if (dataType.toLowerCase() == "dataset") {
        			ubiViewer.setDataset(dataRef[idx].dsObj.name, dataRef[idx].dsObj);
        		}
        	}

        	// 리포트 타이틀
        	if ((typeof this.oParam.reportOption.title != "undefined") && (this.oParam.reportOption.title.length > 0)) {
        		ubiViewer.reporttitle = this.oParam.reportOption.title;
        	}

        	this.fn_AddReportEventHandler();
        	ubiViewer.arg = this.oParam.reportParam;
        	ubiViewer.retrieve(this, "fn_RetrieveFinish");
        	
        }

        
        /*--------------------------------------+
         |  레포트 출력이 종료 된 후 실행	|
         +--------------------------------------*/
        this.fn_RetrieveFinish = function() {
        	trace("---- UbiReport loading finished...");
        	
        	var reportOption = this.oParam.reportOption;
        	
        	if (reportOption) {
        		
        		// 저장버튼 활성화, 비활성화 처리
        		if (typeof reportOption.saveEnable != "undefined") {
        			if (!reportOption.saveEnable) {
        				trace("-- Save button is disabled.");
        				this.UbiViewer00.setVisibleToolbar("SAVE", false);
        			}
        		}
        		
        		// 인쇄버튼 활성화, 비활성화 처리
        		if (typeof reportOption.printEnable != "undefined") {
        			if (!reportOption.printEnable) {
        				trace("-- Print button is disabled.");
        				this.UbiViewer00.setVisibleToolbar("PRINT", false);
        			}
        		}
        		
        		if (typeof reportOption.loadCallback != "undefined") {
        			trace("-- Calling load event functions..");
        			eval("this.parent." + reportOption.loadCallback + "()");
        		}
        	}
        	
        }

        
        /**
         * 유비레포트 컴포넌트에서 "ExportEnd", "PrintEnd" 함수가 실행되는 타임에
         * 현재 화면스크립트의 js 함수가 실행되는 scope가 이벤트 핸들러 등록시점과 맞지 않기 때문에
         * 반드시 Closure를 이용하여 처리하여야 한다.
         */
        this.fn_AddReportEventHandler = function() {

        	var ubiObj = this.UbiViewer00;
        	this.oParam.reportOption.__HANDLE = this;
        	
        	/*--------------------------------------+
        	 |  인쇄버튼 클릭 후 실행				|
        	 |  * 각 브라우저별 이벤트 발생 시점
        		  ○ PDF 방식으로 인쇄 (Adobe Reader 인쇄)
        			 - IE11이하 : 인쇄설정창이 호출된 다음에 이벤트 발생.
        						  육안상으로는 툴바 버튼 클릭 시, 호출되는 것처럼 동작함.
        			 - Chrome : 인쇄설정창이 화면에 나타난 다음 호출
        			 - Edge/Firefox 등 : 서버에서 PDF 파일이 생성되고 나서 호출

        		  ○ HTML 방식으로 인쇄 
        			 - 새창이 팝업되고 나서 호출
        	 +--------------------------------------*/
        	this.UbiViewer00.addEventHandler('PrintEnd',
        		(function(paramObj) {
        			return function() {
        				if (paramObj.printLock) {
        					eval("paramObj.__HANDLE.UbiViewer00.setVisibleToolbar('PRINT', false)");
        				}
        				trace("----- PrintEnd callback : " + paramObj.printCallback);
        				if ((typeof paramObj.printCallback != "undefined") && (paramObj.printCallback.length > 0)) {
        					eval("paramObj.__HANDLE.parent." + paramObj.printCallback + "()");
        				}
                };
        	})(this.oParam.reportOption), this);
        		
        	/*--------------------------------------+
        	 |  저장버튼 클릭 후 실행				|
        	 |  - 서버에 파일이 저장이 완료된 이후에 실행됨.
        	 +--------------------------------------*/
        	this.UbiViewer00.addEventHandler('ExportEnd',
        		(function(paramObj) {
        			return function() {
        				if (paramObj.saveLock) {
        					eval("paramObj.__HANDLE.UbiViewer00.setVisibleToolbar('SAVE', false)");
        				}
        				trace("----- ExportEnd callback : " + paramObj.saveCallback);
        				if ((typeof paramObj.saveCallback != "undefined") && (paramObj.saveCallback.length > 0)) {
        					eval("paramObj.__HANDLE.parent." + paramObj.saveCallback + "()");
        				}
                };
        	})(this.oParam.reportOption), this);

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting , this);

        };

        this.loadIncludeScript("comUbiReportViewComp.xfdl");

       
    };
}
)();
