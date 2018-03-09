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
                this.set_name("comMonthCalendarDiv");
                this.set_classname("com_popupcalendar");
                this.set_titletext("Calendar[Month]");
                this._setFormPosition(0,0,212,189);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMonth", "absolute", "1", "0", "212", "189", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Calendar");
            this.addChild(obj.name, obj);
            obj = new Edit("staYear", "absolute", "45", "0", "122", "30", null, null, this.divMonth);
            obj.set_taborder("13");
            obj.set_value("2015");
            obj.set_visible("true");
            obj.set_cssclass("edt_WF_Calendaryy");
            obj.set_tabstop("false");
            obj.set_enable("false");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth01", "absolute", "3", "32", "50", "50", null, null, this.divMonth);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm01.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth02", "absolute", "55", "32", "50", "50", null, null, this.divMonth);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm02.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth03", "absolute", "107", "32", "50", "50", null, null, this.divMonth);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm03.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth04", "absolute", "159", "32", "50", "50", null, null, this.divMonth);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm04.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth05", "absolute", "3", "84", "50", "50", null, null, this.divMonth);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm05.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth06", "absolute", "55", "84", "50", "50", null, null, this.divMonth);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm06.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth07", "absolute", "107", "84", "50", "50", null, null, this.divMonth);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm07.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth08", "absolute", "159", "84", "50", "50", null, null, this.divMonth);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm08.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth09", "absolute", "3", "136", "50", "50", null, null, this.divMonth);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm09.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth10", "absolute", "55", "136", "50", "50", null, null, this.divMonth);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm10.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth11", "absolute", "107", "136", "50", "50", null, null, this.divMonth);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm11.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);
            obj = new Button("btnMonth12", "absolute", "159", "136", "50", "50", null, null, this.divMonth);
            obj.set_taborder("11");
            obj.set_text("12");
            obj.style.set_image("URL('theme://images/btn_WF_Calmm12.png')");
            obj.set_cssclass("btn_WF_Calmm");
            this.divMonth.addChild(obj.name, obj);

            obj = new Button("btnNextYear", "absolute", "189", "0", "22", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_CalNext");
            obj.set_tabstop("false");
            obj.set_tooltiptext("다음년도");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrevYear", "absolute", "1", "0", "22", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalPrev");
            obj.set_tabstop("false");
            obj.set_tooltiptext("이전년도");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 212, 189, this.divMonth,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_Calendar");

            	}
            );
            this.divMonth.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 212, 189, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("com_popupcalendar");
            		p.set_titletext("Calendar[Month]");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comMonthCalendarDiv.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comMonthCalendarDiv.xfdl", function() {
         /***************************************************************************************************
         * # Program : comMonthCalendarDiv 월달력 컴포넌트의 월 달력 레이어
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
        this.sOriginalMonth = null;
        this.sChoosedMonth = null;
        this.oPrevMonthBtn = null;
        this.oTargetMonthBtn = null;

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	//trace("--- Month Calendar Layer loaded...dd");
        	//this.divMonth.btnMonth01.toggleSelectStatus();
        }

        /**
         * 월 달력 레이어를 주어진 년월을 이용하여 초기화 한다.
         * @param {String} sMonth 월 달력을 초기화 할 년월
         */
        this.fn_InitMonthCalendar = function (sMonth) {
        	
        	this.sOriginalMonth = sMonth;
        	this.sChoosedMonth = sMonth;
        	
        	if (this.IsNull(sMonth) || (sMonth.length == 0)) {
        		this.sOriginalMonth = this.fnc_Today();
        		this.sChoosedMonth = this.sOriginalMonth;
        	}
        	
        	//trace("--- MonthCalendar panel initialized...");
        	this.fn_RedrawMonthPanel(this.sChoosedMonth);
        	
        }

        
        /**
         * 년월에 해당하는 값으로 월 달력 UI를 재구성한다.
         * @param {String} sMonth 표시할 년월 값
         */
        this.fn_RedrawMonthPanel = function (sMonth) {
        	
        	//trace("--- Redraw panel... Month : " + sMonth);
        	
        	var sYear = sMonth.substr(0, 4);
        	var sMon = sMonth.substr(4, 2);
        	
        	this.divMonth.staYear.set_value(sYear);
        	
        	//trace("--- Year : " + sYear + ", Month : " + sMon);
        	
        	// 현재 선택표시할 월 컴포넌트 처리
        	for (var i = 1; i <= 12; i++) {
        		var sIdx = (new String(i)).padLeft(2, "0");
        		var oBtn = this.divMonth.components["btnMonth" + sIdx];
        		if (oBtn) {
        			oBtn.set_cssclass("btn_WF_Calmm" + (sIdx == sMon ? "_S" : ""));
        			//trace("--- Month : " + sMon + ", idx : " + sIdx + ", css : " + oBtn.cssclass + ", stat : " + oBtn.getSelectStatus() + ", ");
        			//oBtn.setSelectStatus(false);
        			//oBtn.setFocus();
        			//if (oBtn.getSelectStatus()) {
        			//	oBtn.toggleSelectStatus();
        			//}
        			
        			if (sIdx == sMon) {
        				oBtn.setSelectStatus(true);
        				oBtn.setFocus();
        				this.oTargetMonthBtn = oBtn;
        			}
        		}
        	}
        	
        }

        /**
         * 년도 이전버튼 클릭 시 
         */
        this.btnPrevYear_onclick = function(obj,e)
        {
        	var nYear = parseInt(this.sChoosedMonth.substring(0, 4));
        	var sMonth = this.sChoosedMonth.substring(4, 2);
        	nYear = nYear - 1;
        	this.sChoosedMonth = String(nYear) + sMonth;
        	this.fn_RedrawMonthPanel(this.sChoosedMonth);
        }

        /**
         * 년도 다음버튼 클릭 시 
         */
        this.btnNextYear_onclick = function(obj,e)
        {
        	var nYear = parseInt(this.sChoosedMonth.substring(0, 4));
        	var sMonth = this.sChoosedMonth.substring(4, 2);
        	nYear = nYear + 1;
        	this.sChoosedMonth = String(nYear) + sMonth;
        	this.fn_RedrawMonthPanel(this.sChoosedMonth);
        }

        
        /**
         * 월 버튼 클릭 시 선택년도 반환
         */
        this.fn_MonthBtnClick = function(obj,e) {
        	var sYear	= this.divMonth.staYear.value;
        	this.sChoosedMonth = sYear + this.fnc_Right(obj.name, 2);
        	this.closePopup(this.sChoosedMonth);
        }

        /**
         * 월 달력 레이어에서 키 이벤트 처리
         */
        this.comMonthCalendarDiv_onkeydown = function (obj,e) {
        	if (e.keycode == 27) {	// ESC 키 누르면 레이어 숨김
        		this.closePopup(this.sOriginalMonth);
        	}
        }

        
        this.comMonthCalendarDiv_onsetfocus = function(obj,e)
        {

        	if (this.oPrevMonthBtn != null) {
        		this.oPrevMonthBtn.setFocus();
        		this.oPrevMonthBtn.toggleSelectStatus();
        		this.oPrevMonthBtn.setSelectStatus(false);
        	}
        	this.oPrevMonthBtn = this.oTargetMonthBtn;
        	this.oTargetMonthBtn.setSelectStatus(true);
        	this.oTargetMonthBtn.setFocus();

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onkeydown", this.comMonthCalendarDiv_onkeydown, this);
            this.addEventHandler("onsetfocus", this.comMonthCalendarDiv_onsetfocus, this);
            this.divMonth.btnMonth01.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth02.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth03.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth04.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth05.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth06.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth07.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth08.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth09.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth10.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth11.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.divMonth.btnMonth12.addEventHandler("onclick", this.fn_MonthBtnClick, this);
            this.btnNextYear.addEventHandler("onclick", this.btnNextYear_onclick, this);
            this.btnPrevYear.addEventHandler("onclick", this.btnPrevYear_onclick, this);

        };

        this.loadIncludeScript("comMonthCalendarDiv.xfdl");

       
    };
}
)();
