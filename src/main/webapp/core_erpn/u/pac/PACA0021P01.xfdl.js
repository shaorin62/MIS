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
                this.set_name("PACA0022");
                this.set_titletext("스마트빌 공지사항");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,780,200);
            }
            this.style.set_font("9 Dotum");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "-1", "0", null, null, "-2", "0", this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "209", null, null, this);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "766", "-2", "15", "212", null, null, this);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 780, 200, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("스마트빌 공지사항");
            		p.set_scrollbars("none");
            		p.style.set_font("9 Dotum");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PACA0021P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PACA0021P01.xfdl", function() {
        /*****************************************************************************************************
         2016.12.09 오세훈
         본 화면은 Help Popup 처리 화면 입니다.
         
         ★ 현재 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
            현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요!
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ****************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sPACKAGENAME = "PACA0022";

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	var url = application.GBL_HTTPURL;
        	url = url + "/html/noticeList.html";
        	this.WebBrowser00.set_url(url);
            
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);

        };

        this.loadIncludeScript("PACA0021P01.xfdl");

       
    };
}
)();
