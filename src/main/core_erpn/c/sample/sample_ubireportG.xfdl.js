﻿(function()
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
                this.set_name("UbiReport");
                this.set_classname("UbiReport");
                this.set_titletext("유비레포트 [그리드] 출력");
                this._setFormPosition(0,0,895,700);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">!</Col><Col id=\"Column3\">A</Col><Col id=\"Column4\">테</Col><Col id=\"Column5\">스</Col><Col id=\"Column6\">트</Col><Col id=\"Column7\">테</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">@</Col><Col id=\"Column3\">B</Col><Col id=\"Column4\">스</Col><Col id=\"Column5\">트</Col><Col id=\"Column6\">테</Col><Col id=\"Column7\">스</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">#</Col><Col id=\"Column3\">C</Col><Col id=\"Column4\">트</Col><Col id=\"Column5\">테</Col><Col id=\"Column6\">스</Col><Col id=\"Column7\">트</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">d</Col><Col id=\"Column2\">$</Col><Col id=\"Column3\">D</Col><Col id=\"Column4\">테</Col><Col id=\"Column5\">스</Col><Col id=\"Column6\">트</Col><Col id=\"Column7\">테</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">e</Col><Col id=\"Column2\">%</Col><Col id=\"Column3\">E</Col><Col id=\"Column4\">스</Col><Col id=\"Column5\">트</Col><Col id=\"Column6\">테</Col><Col id=\"Column7\">스</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">f</Col><Col id=\"Column2\">^</Col><Col id=\"Column3\">F</Col><Col id=\"Column4\">트</Col><Col id=\"Column5\">테</Col><Col id=\"Column6\">스</Col><Col id=\"Column7\">트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "12", "29", "105", "39", null, null, this);
            obj.set_taborder("5");
            obj.set_text("그리드 출력");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0", "132", "747", "196", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"Column7\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "104", "300", "28", null, null, this);
            obj.set_taborder("7");
            obj.set_text("유비레포트로 출력할 그리드");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 895, 700, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UbiReport");
            		p.set_titletext("유비레포트 [그리드] 출력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample_ubireportG.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("sample_ubireportG.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("sample_ubireportG.xfdl", function() {

        /*--------------------------------------+
         |  공통 Script Include					|
         +--------------------------------------*/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        this.Button00_onclick = function(obj,e) {
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
        	var reportOptions = new Object();
        // 	A4_LANDSCAPE    : A4용지 가로방향
        // 	A4_PORTRAIT     : A4용지 세로방향
        // 	A3_LANDSCAPE    : A3용지 가로방향
        // 	A3_PORTRAIT     : A3용지 세로방향
        	this.fn_UbiReportGrid("A4_LANDSCAPE", reportOptions, this.Grid00);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("sample_ubireportG.xfdl");

       
    };
}
)();
