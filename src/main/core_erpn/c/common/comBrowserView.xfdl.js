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
                this.set_name("comBrowserView");
                this.set_classname("comBrowserView");
                this.set_titletext("전자결재 기안");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wbrBrowser", "absolute", "5", "5", null, null, "5", "5", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comBrowserView");
            		p.set_titletext("전자결재 기안");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comBrowserView.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comBrowserView.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	comBrowserView 공통 브라우저 호출 폼
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.19		jsh			최초 생성
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
         ********************************************************************************INBUS*CO*KR**JSH***/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.BROWSER_HANDLE = null;
        this.BROWSER_DATA = null;

        /**
         * 폼 로드 시 최초 실행
         */
        this.fn_FormLoadSetting = function(obj,e)
        {
        	alert(this.parent.param1);
        	//this.wbrBrowser.set_url(application.GBL_HTTPURL + "/test.jsp");
        	this.wbrBrowser.set_url("http://localhost:8080/web_view/view1.jsp");
        }

        this.wbrBrowser_onloadcompleted = function(obj,e)
        {
        	this.BROWSER_HANDLE = null;
        }

        this.fn_FormUnloadProcess = function(obj,e)
        {
        	this.fnc_PopupClose(this.BROWSER_DATA);

        }

        this.wbrBrowser_onusernotify = function(obj,e)
        {
        	this.BROWSER_DATA = e.userdata;
        	trace("Received : " + e.userdata);
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.wbrBrowser.addEventHandler("onloadcompleted", this.wbrBrowser_onloadcompleted, this);
            this.wbrBrowser.addEventHandler("onusernotify", this.wbrBrowser_onusernotify, this);

        };

        this.loadIncludeScript("comBrowserView.xfdl");

       
    };
}
)();
