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
                this.set_name("AAAA");
                this.set_classname("comUbiReportViewG");
                this.set_titletext("레포트 출력 (그리드)");
                this._setFormPosition(0,0,984,668);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new UbiReport("UbiViewer00", "absolute", "15", "15", null, null, "15", "15", this);
            obj.set_taborder("0");
            obj.set_text("UbiViewer00");
            obj.set_resource("/ubireport/ajax/js4");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 984, 668, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comUbiReportViewG");
            		p.set_titletext("레포트 출력 (그리드)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comUbiReportViewG.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comUbiReportViewG.xfdl", function() {
        /***************************************************************************************************
         * # Program : comUbiReportViewG 유비레포트 출력 팝업 컴포넌트[그리드]
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.12.07		kjs			Initial Created.
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
        if(this.getOwnerFrame().objParam == undefined) {
        	//Quick View 실행 시 설정
        	this.ReportFile = "";
        	this.oParam = new Object();
        	this.parentForm = this;
        } else {
        	this.ReportFile  = this.parent.reportFile;
        	this.oParam = this.getOwnerFrame().objParam;
        	this.parentForm = this.getOwnerFrame().parent.form;
        }

        /*--------------------------------------+
         |  최초 화면 Load時 처리 할 사항	|
         +--------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fn_AddReportEventHandler();
        	// 일반 브라우저와 넥사크로 런타임(퀵뷰)에 따라 처리방식 변경필요
        	if (nexacro.Browser == "Runtime") {
        		this.UbiViewer00.dataurl = application.GBL_HTTPURL + "/UbiData";
        		this.UbiViewer00.reporturl = application.GBL_HTTPURL + "/ubireport/jrfdir/";
        		this.UbiViewer00.fileurl = application.GBL_HTTPURL + "/ubireport/work/property";
        	} else {
        		this.UbiViewer00.set_resource(application.GBL_HTTPURL + "/ubireport/ajax/js4");
        		this.UbiViewer00.gatewayurl = application.GBL_HTTPURL + "/UbiGateway";
        		this.UbiViewer00.resid = "UBIAJAX";
        	}
        	// 그리드 가져오기
         	this.ubiGridObj = this.oParam.oGrid;
         	
        	// 리포트가 정의되지 않았을 경우 리턴
        	this.ReportFile = this.oParam.reportFile;

        	this.reportOptions = this.oParam.reportOptions;
        	
        	if( this.ReportFile == undefined ) {
        		alert("레포트 파일명이 지정되지 않았습니다!");
        		return;
        	}
        	if ( this.ubiGridObj == undefined){
        		alert("그리드가 지정되지 않았습니다!");
        		return;
        	}

        	// 리포트 타이틀
        	if ((typeof this.oParam.reportOption.title != "undefined") && (this.oParam.reportOption.title.length > 0)) {
        		this.UbiViewer00.reporttitle = this.oParam.reportOption.title;
        	}
        	this.UbiViewer00.jrffile = this.oParam.reportFile;

        	// 그리드 만들기
        	this.fn_makeGrid(this.ubiGridObj);
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
        		
        		if ((typeof reportOption.loadCallback != "undefined") && (reportOption.loadCallback.length > 0)) {
        			trace("-- Calling load event functions..");
        			eval("this.getOwnerFrame().parent.form." + reportOption.loadCallback + "()");
        		}
        	}
        	
        }

        
        /**
         * 유비레포트 컴포넌트에서 "ExportEnd", "PrintEnd" 함수가 실행되는 타임에
         * 현재 화면스크립트의 js 함수가 실행되는 scope가 이벤트 핸들러 등록시점과 맞지 않기 때문에
         * 반드시 Closure를 이용하여 처리하여야 한다.
         */
        this.fn_AddReportEventHandler = function() {

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
        					eval("application.getActiveFrame().form.UbiViewer00.setVisibleToolbar('PRINT', false)");
        				}
        				trace("----- PrintEnd callback : " + paramObj.printCallback);
        				if ((typeof paramObj.printCallback != "undefined") && (paramObj.printCallback.length > 0)) {
        					eval("application.getActiveFrame().parent.form." + paramObj.printCallback + "()");
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
        					eval("application.getActiveFrame().form.UbiViewer00.setVisibleToolbar('SAVE', false)");
        				}
        				trace("----- ExportEnd callback : " + paramObj.saveCallback);
        				if ((typeof paramObj.saveCallback != "undefined") && (paramObj.saveCallback.length > 0)) {
        					eval("application.getActiveFrame().parent.form." + paramObj.saveCallback + "()");
        				}
                };
        	})(this.oParam.reportOption), this);

        }

        
        /*--------------------------------------+
         |  Form 키보드 이벤트 처리			|
         +--------------------------------------*/
        this.comUbiReportView_onkeydown = function(obj,e) {
        	if (e.keycode == 27) {
        		this.btnClose_onclick();
        	}
        }

        
        /*--------------------------------------+
         |  종료 버튼 클릭 이벤트 처리		|
         +--------------------------------------*/
        this.btnClose_onclick = function(obj,e) {
        	// 추가 기능 없이 팝업 종료
        	this.fnc_PopupClose("");
        }

        this.fn_makeGrid = function(ubiGridObj){
        	// 그리드 그리기
        	var formatRowCount = ubiGridObj.getFormatRowCount();
        	var formatColCount = ubiGridObj.getFormatColCount();

        	var widthArray = new Array;
        	var heightArray = new Array;

        	var headBgColor = "230.230.230";	// 헤더 배경색 
        	var summBgColor = "240.240.240";	// 합계 배경색 
        	var i = 0;
        	var j = 0;
        	var k = 0;

        	// Grid의 Row의 높이를 도출
        	var subidx = 0;
        	var bandtype = "";
        	var prebandtype = "";
        	var bodyStartRow = 0;
        	var summStartRow = 0;
        	
        	for( i = 0; i < formatRowCount; i++ ) {
        	
        		bandtype = ubiGridObj.getFormatRowProperty(i, "band");
        		if( bandtype == prebandtype ) {
        		
        			subidx++;
        		} else {
        		
        			subidx = 0;
        		}
        		heightArray[i] = ubiGridObj.getRealRowSize(i, subidx, false);
        		prebandtype = bandtype;
        	}
        	
        	// Grid의 Column 넓이 도출
        	for( i = 0; i < formatColCount; i++ ) {
        	
        		widthArray[i] = ubiGridObj.getRealColSize(i);
        	}

        	var cellcount = 0;
        	var rowcount = 0;

        	// ------------------------------------------------------------
        	// 디자인정보를 담고있는 Dataset 생성
        	// ------------------------------------------------------------
        	var designDataset = this.UbiViewer00.getDesignDataset(this);

        	prebandtype = "";
        	var bandRow = 0;
        	var nRow = 0;
        	var rowidx = 0;
        	var colidx = 0;
        	var colspan = 0;
        	var rowspan = 0;
        	var colwidth = 0;
        	var colheight = 0;
        	var startIdx = 0;
        	var endIdx = 0;
        	var bgcolor = "";
        	
        	// 전체 높이와 넒이를 담은 Row 생성
        	nRow = designDataset.addRow();
        	designDataset.setColumn(nRow, "type", "widths");
        	designDataset.setColumn(nRow, "text", widthArray);
        	nRow = designDataset.addRow();
        	designDataset.setColumn(nRow, "type", "heights");
        	designDataset.setColumn(nRow, "text", heightArray);
        	
        	for( i = 0; i < formatRowCount; i++ ) {
        	
        		bandtype = ubiGridObj.getFormatRowProperty(i, "band");
        		if( bandtype != prebandtype ) {
        		
        			if( bandtype == "head" ) {
        			
        				bandRow = -1;
        				bgcolor = headBgColor;
        			} else if( bandtype == "body" ) {
        			
        				bandRow = 0;
        				bgcolor = "";
        			} else if( bandtype == "summ" ) {
        			
        				bandRow = -2;
        				bgcolor = summBgColor;
        			}
        			
        			cellcount = ubiGridObj.getCellCount(bandtype);
        			
        			for( j = 0; j < cellcount; j++ ) {
        			
        				rowidx = ubiGridObj.getCellProperty(bandtype, j, "row");
        				colidx = ubiGridObj.getCellProperty(bandtype, j, "col");
        				rowspan = ubiGridObj.getCellProperty(bandtype, j, "rowspan");
        				colspan = ubiGridObj.getCellProperty(bandtype, j, "colspan");
        			
        				nRow = designDataset.addRow();
        				designDataset.setColumn(nRow, "type", bandtype);
        				designDataset.setColumn(nRow, "row", rowidx);
        				designDataset.setColumn(nRow, "col", colidx);
        				designDataset.setColumn(nRow, "rowspan", rowspan);
        				designDataset.setColumn(nRow, "colspan", colspan);
        				designDataset.setColumn(nRow, "align", ubiGridObj.getCellProperty(bandtype, j, "align"));
        				
        				if( bandRow != 0 ) {
        				
        					designDataset.setColumn(nRow, "text", ubiGridObj.getCellText(bandRow, j));
        				}
        				designDataset.setColumn(nRow, "bgcolor", bgcolor);
        				designDataset.setColumn(nRow, "leftmargin", "3");
        				designDataset.setColumn(nRow, "rightmargin", "3");
        			}
        		}
        		prebandtype = bandtype;
        	}
        	this.addChild(designDataset.name, designDataset);
        	// ------------------------------------------------------------
        	// 그리드의 텍스트를 Dataset으로 생성
        	// ------------------------------------------------------------
        	cellcount =ubiGridObj.getCellCount("Body");
        	rowcount = ubiGridObj.rowcount;
        	
        	var gridDataset = new Dataset("dsGrid", this);
        	this.addChild(gridDataset.name, gridDataset);
        	
        	// column 생성
        	for( i = 0; i < cellcount; i++ ) {
        	
        		gridDataset.addColumn("column" + i, "string");
        	}
        	
        	// 그리드 데이터 입력
        	for( j = 0; j < rowcount; j++ ) {
        	
        		gridDataset.addRow();
        		for( k = 0; k < cellcount; k++ ) {
        		
        			gridDataset.setColumn(j, k, ubiGridObj.getCellText(j, k));
        		}
        	}
        	// ------------------------------------------------------------

        	// dataset SSV 전송에 필요한 정보 생성
        	this.UbiViewer00.setRuntimeData(designDataset, gridDataset);
        	// 동적으로 생성된 Dataset 제거
        	this.removeChild(designDataset.name);
        	this.removeChild(gridDataset.name);
        	this.UbiViewer00.retrieve(this, "fn_RetrieveFinish");
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);

        };

        this.loadIncludeScript("comUbiReportViewG.xfdl");

       
    };
}
)();
