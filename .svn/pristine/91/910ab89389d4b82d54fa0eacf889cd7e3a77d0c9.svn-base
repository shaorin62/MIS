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
                this.set_name("sample_comMonthCalenda_OnChangedEvent");
                this.set_classname("sample_comMonthCalenda_OnChangedEvent");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "95", "167", "104", "37", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "212", "167", "120", "37", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Event 등록하기.");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_comMonthCalenda_OnChangedEvent");
            		p.set_titletext("New Form");

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
        };
        
        // User Script
        this.addIncludeScript("sample_comMonthCalenda_OnChangedEvent.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_comMonthCalenda_OnChangedEvent.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	sample_comMonthCalendar_OnChangedEvent 샘플
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.07. 김준수 제작 
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
         ********************************************************************************INBUS*CO*KR********/
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        this.fnc_aaa = function (obj,e){
        	alert(obj.name);
        	alert("pretext=" + e.pretext);	
        	alert("prevalue=" + e.prevalue);
        	alert("posttext=" +e.posttext);
        	alert("postvalue=" +e.postvalue);
        	alert("fuc_aaa(obj, e);");
        }

        this.Button00_onclick = function(obj,e) {
        	this.Div00.fn_CalendarCustomEvent(this, "fnc_aaa");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.addEventHandler("onclick", this.Div00_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("sample_comMonthCalenda_OnChangedEvent.xfdl");
        this.loadPreloadList();
       
    };
}
)();
