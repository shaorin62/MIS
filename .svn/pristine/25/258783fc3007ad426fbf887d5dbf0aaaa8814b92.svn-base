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
                this.set_name("sample_guide_component");
                this.set_classname("sample_guide_component");
                this.set_titletext("컴포넌트구성샘플");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMonCal", this);
            obj._setContents("<ColumnInfo><Column id=\"TEXT_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"MNTH_DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEXT_DATA\">1</Col><Col id=\"MNTH_DATA\">201601</Col></Row><Row><Col id=\"TEXT_DATA\">2</Col><Col id=\"MNTH_DATA\">201512</Col></Row><Row><Col id=\"TEXT_DATA\">3</Col><Col id=\"MNTH_DATA\">201308</Col></Row><Row><Col id=\"TEXT_DATA\">4</Col><Col id=\"MNTH_DATA\">201609</Col></Row><Row><Col id=\"TEXT_DATA\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "0", "800", "30", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Component  :  기본");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "10", "40", "780", "31", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "10", "40", "120", "31", null, null, this);
            obj.set_taborder("2");
            obj.set_text("월달력(컴포넌트)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("divMonCal1", "absolute", "138", "45", "112", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnMonCal1", "absolute", "260", "45", "74", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("가져오기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMonCal1", "absolute", "350", "45", "110", "21", null, null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnMonCal2", "absolute", "465", "45", "50", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("설정");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_bordertype("round 1 1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "79", "780", "31", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "79", "120", "31", null, null, this);
            obj.set_taborder("8");
            obj.set_text("월달력(데이터셋)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("divMonCal2", "absolute", "138", "84", "112", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMonCal", "absolute", "11", "117", "308", "162", null, null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsMonCal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"TEXT_DATA\"/><Cell col=\"1\" disptype=\"normal\" text=\"MNTH_DATA\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:TEXT_DATA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:MNTH_DATA\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnMonCal3", "absolute", "260", "84", "110", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("데이터셋 연결");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_guide_component");
            		p.set_titletext("컴포넌트구성샘플");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("sample_guide_component.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_guide_component.xfdl", function() {
         /***************************************************************************************************
         * # Program : 컴포넌트 구성/이용 샘
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.29		jsh			Initial Created.
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
         *****************************************************************************INBUS*CO*KR************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부*
         **********************/

        

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	//this.divMonCal1.fn_InitMonthCalendar();
        }

        
        /**
         * 월달력 값 가져오기
         */
        this.btnMonCal1_onclick = function(obj,e)
        {
        	var month = this.divMonCal1.fn_GetMonth();
        	alert("선택된 년월 : " + month);
        	this.edtMonCal1.set_value(month);
        }

        
        /**
         * 월달력의 값을 설정.
         */
        this.btnMonCal2_onclick = function(obj,e)
        {
        	var month = this.fnc_Trim(this.edtMonCal1.value);
        	this.divMonCal1.fn_SetMonth(month);
        }

        /**
         * 월 달력 컴포넌트 데이터셋 연결
         */
        this.btnMonCal3_onclick = function(obj,e)
        {
        	var bindInfo = new Object;
        	bindInfo.binddataset = this.dsMonCal;
        	bindInfo.bindcolumn = "MNTH_DATA";
        	this.divMonCal2.fn_SetBindInfo(bindInfo);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.btnMonCal1.addEventHandler("onclick", this.btnMonCal1_onclick, this);
            this.btnMonCal2.addEventHandler("onclick", this.btnMonCal2_onclick, this);
            this.btnMonCal3.addEventHandler("onclick", this.btnMonCal3_onclick, this);

        };

        this.loadIncludeScript("sample_guide_component.xfdl");
        this.loadPreloadList();
       
    };
}
)();
