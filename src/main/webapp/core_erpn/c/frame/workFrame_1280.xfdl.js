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
                this.set_name("_WORKFRAME");
                this.set_cssclass("frm_WF_Bg");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,1204,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_work_out", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", "17", "311", null, null, this.div_work_out);
            obj.set_taborder("99");
            obj.set_text("w\r\n17");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            obj.style.set_background("#0000ff7a");
            this.div_work_out.addChild(obj.name, obj);
            obj = new Div("div_work", "absolute", "17", "0", "1187", "717", null, null, this.div_work_out);
            obj.set_taborder("100");
            obj.set_text("div_work");
            obj.set_scrollbars("none");
            obj.style.set_background("transparent");
            this.div_work_out.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_work_out,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("");
            		p.style.set_background("transparent");

            	}
            );
            this.div_work_out.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1204, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("frm_WF_Bg");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("workFrame_1280.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("workFrame_1280.xfdl", "script::lib_script_theme.xjs");
        this.registerScript("workFrame_1280.xfdl", function() {
         /***************************************************************************************************
         * # Program : 월 기간달력
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.03		jsh			Initial Created.
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
        //include "script::lib_script_theme.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sWorkFormUrl = null;

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /**
         * 화면 로드 時 이벤트 함수(화면 초기화)
         */
        this.fn_FormLoadSetting = function (obj,e) {

        	// 테마 설정 적용
        	this.fnc_ThemeSetting(this);

        	this.style.set_background_image("");
        	var sFormUrl = this.getOwnerFrame()["sFORM_URL"];
        	this.sWorkFormUrl = sFormUrl;
        	this.div_work_out.div_work.set_url(sFormUrl);
        	
        	this.fn_FormResize();
        }

        
        /**
         *  Work Div 내의 업무화면에서 종료(닫기) 버튼 클릭 시 해당 함수 실행
         */
        this.fn_End = function (obj) {
        	this.close();
        }

        /**
         * WorkFrame 화면을 종료하기 전 실행. Work div 의 onbeforeclose 함수 실행
         */
        this.fn_BeforeWorkFrameClosing = function (obj,e) {

        	if (typeof this.div_work_out.div_work.fn_FormUnloadCheckProcess == "function") {
        		var returnMessage = this.div_work_out.div_work.fn_FormUnloadCheckProcess(obj, e);
        		if(!this.fnc_IsEmpty(returnMessage)) return returnMessage;
        	}
        }

        /**
         * WorkFrame 종료 시 실행. Work div의 onclose 함수 실행
         */
        this.fn_WorkFrameClose = function (obj,e) {
        	if (this.div_work_out.div_work.fn_FormUnloadProcess) {
        		this.div_work_out.div_work.fn_FormUnloadProcess(obj, e);
        	}
        }

        
        /**
         * WorkFrame의 라사이징 이벤트 발생 시
         */
        this.workframe_onsize = function(obj,e)
        {
        	this.fn_FormResize();
        }

        
        /**
         * WorkFrame이 리사이즈 될 때, 화면이 작아져도 최소 사이즈는 보장되도록 처리
         */
        this.fn_FormResize = function()
        {
            if(this.width > 1204)
            {
               this.div_work_out.div_work.set_width(this.width - 17);
            }
            else
            {
               this.div_work_out.div_work.set_width(1187);
            }
            
            if(this.height > 717)
            {
                this.div_work_out.div_work.set_height(this.height);
            }
            else
            {
                this.div_work_out.div_work.set_height(717);
            }
            
            this.div_work_out.resetScroll();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_BeforeWorkFrameClosing, this);
            this.addEventHandler("onclose", this.fn_WorkFrameClose, this);
            this.addEventHandler("onsize", this.workframe_onsize, this);

        };

        this.loadIncludeScript("workFrame_1280.xfdl");

       
    };
}
)();
