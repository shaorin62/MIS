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
                this.set_name("comPostPopup");
                this.set_titletext("우편번호검색");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,765,500);
            }
            this.style.set_font("9 Dotum");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_NWPOST", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_VIEW\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SIDO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DORONAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SIGUNGU\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_VIEW\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"ADDR_VIEW2\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"UPMYUN\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"aaa\" type=\"STRING\" size=\"256\"/><Column id=\"bbb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "15", "15", null, null, "15", "15", this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "750", "14", "15", "461", null, null, this);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 765, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("우편번호검색");
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
        this.addIncludeScript("comPostPopup2.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comPostPopup2.xfdl", function() {
        /*****************************************************************************************************
         2014.10.25 김석두 (최초 개발)
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
        this.sSEARCHKIND  = this.parent.sSEARCHKIND;  //Open 할 Popup 종류
        this.sSEARCHPARAM = this.parent.sSEARCHPARAM; //조회 Parameter
        this.sSEARCHVALUE = this.parent.sSEARCHVALUE; //입력된 자료가 있다면 Default로 조회
        this.sSEARCHUSE   = this.parent.sSEARCHUSE;   //사용여부구문 포함 여부
        this.sPACKAGENAME = 'COMPOST';

        this.fn_FormLoadSetting = function (obj,e) {
        	var url = application.GBL_HTTPURL;
        	url = url + "/html/daumpostpopup.html";
        	this.WebBrowser00.set_url(url);
        }

        this.WebBrowser00_onusernotify = function(obj,e) {
        	e.userdata.target = this.arrTARGET;
        	this.fnc_PopupClose(e.userdata);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.comcodenm_OnKeyDown, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);

        };

        this.loadIncludeScript("comPostPopup2.xfdl");

       
    };
}
)();
