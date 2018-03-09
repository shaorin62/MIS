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
                this.set_name("Themeset");
                this.set_titletext("테마설정");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,850,300);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_LNCD</Col><Col id=\"DSNAME\">dsSYST_LNCD</Col><Col id=\"HEADFLAG\">SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "0", "15", "261", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "835", "6", "15", "261", null, null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "773", "264", "62", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "17", "0", "697", "10", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "772", "288", "64", "12", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "772", "256", "64", "8", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveSetting", "absolute", "708", "264", "62", "24", null, null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "15", "7", "490", "20", null, null, this);
            obj.set_taborder("17");
            obj.set_text("테마 선택 후 다시 로그인해야만 반영됩니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.style.set_color("#db3160ff");
            this.addChild(obj.name, obj);

            obj = new Static("staThemePurple", "absolute", "15", "37", "260", "134", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("transparent URL('theme://images/img_WF_themes1.png')");
            this.addChild(obj.name, obj);

            obj = new Static("staNamePurple", "absolute", "15", "176", "116", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("바이올렛 테마");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("staNameBlue", "absolute", "295", "176", "116", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("블루 테마");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("staThemeBlue", "absolute", "295", "37", "260", "134", null, null, this);
            obj.set_taborder("22");
            obj.style.set_background("transparent URL('theme://images/img_WF_themes2.png')");
            this.addChild(obj.name, obj);

            obj = new Static("staNameGray", "absolute", "575", "176", "116", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("그레이 테마");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("staThemeGray", "absolute", "575", "37", "260", "134", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("transparent URL('theme://images/img_WF_themes3.png')");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkThemePurple", "absolute", "129", "176", "31", "21", null, null, this);
            obj.set_taborder("25");
            obj.style.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkThemeBlue", "absolute", "383", "176", "31", "21", null, null, this);
            obj.set_taborder("26");
            obj.style.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkThemeGray", "absolute", "663", "176", "31", "21", null, null, this);
            obj.set_taborder("27");
            obj.style.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "217", null, "39", "15", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("staGlobalLang", "absolute", "35", "226", "80", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("언어선택");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSYST_LNCD", "absolute", "103", "226", "172", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_value("null");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 850, 300, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("테마설정");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Themeset.xfdl", "script::lib_script_common.xjs");
        this.registerScript("Themeset.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	topFrame 메인 상단 프레임
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.14		jsh			Initial Created.
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
         ********************************************************************************INBUS*CO*KR********/

        
        /**
         * 공통 스크립트 Include
         */
        //include "script::lib_script_common.xjs"

        /**
         *  화면 변수 선언
         */
        this.SELECTED_THEME = "";
        this.SELECTED_LANGUAGE = "";

        /**
         * 최초 화면 로드 시 처리할 내용
         */
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fn_SelectTheme(application.GBL_THEMECD);
        	var iRow = this.dsSYST_LNCD.findRow("COMD_CODE", application.GBL_LANGCD);
        	this.cmbSYST_LNCD.set_text(this.dsSYST_LNCD.getColumn(iRow, "COMD_CDNM"));

        }

        
        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		this.alert(ErrorMSG);
        	} else {
        		this.fn_PostProcess(sMethodName);
        	}

        }

        /*------------------------------------+
        |  Transaction 후 Post Process!       |
        +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSYST_LNCD,dsSYST_LNCD,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} else if (sMethodName == "SettingSave") {
        		
        		this.fnc_Message("TMM103");
        		this.fnc_PopupClose("");
        		
        	}

        }

        /**
         * 테마 선택 시
         */
        this.fn_SelectTheme = function(themeId) {
        		
        	if (themeId == "PURPLE") {
        		this.chkThemeGray.set_value(false);
        		this.chkThemeBlue.set_value(false);
        		this.chkThemePurple.set_value(true);
        	} else if (themeId == "GRAY") {
        		this.chkThemePurple.set_value(false);
        		this.chkThemeBlue.set_value(false);
        		this.chkThemeGray.set_value(true);
        	} else if (themeId == "BLUE") {
        		this.chkThemePurple.set_value(false);
        		this.chkThemeGray.set_value(false);
        		this.chkThemeBlue.set_value(true);
        	}
        	
        	this.SELECTED_THEME = themeId;
        	
        }

        
        /**
         * 바이올렛 테마 체크박스 체크 시
         */
        this.chkThemePurple_onchanged = function(obj,e)
        {
        	if (e.postvalue) {
        		this.fn_SelectTheme("PURPLE");
        	} else {
        		this.SELECTED_THEME = "";
        	}
        }

        
        /**
         * 그레이 테마 체크박스 체크 시
         */
        this.chkThemeGray_onchanged = function(obj,e)
        {
        	if (e.postvalue) {
        		this.fn_SelectTheme("GRAY");
        	} else {
        		this.SELECTED_THEME = "";
        	}
        }

        
        /**
         * 블루 테마 체크박스 체크 시
         */
        this.chkThemeBlue_onchanged = function(obj,e)
        {
        	if (e.postvalue) {
        		this.fn_SelectTheme("BLUE");
        	} else {
        		this.SELECTED_THEME = "";
        	}
        }

        
        /**
         * 언어선택 콤보 데이터 변경 시
         */
        this.cmbSYST_LNCD_onitemchanged = function(obj,e)
        {
        	this.SELECTED_LANGUAGE = e.postvalue;
        }

        
        /**
         * 저장 버튼 클릭 시
         */
        this.btnSaveSetting_onclick = function(obj,e)
        {
        	// 테마 또는 언어 변경하지 않았다면..
        	if ((this.fnc_Trim(this.SELECTED_THEME).length == 0) && (this.fnc_Trim(this.SELECTED_LANGUAGE).length == 0)) {
        		this.fnc_Message("TMM003");
        		return;
        	}
        	if ((this.fnc_Trim(this.SELECTED_THEME) == application.GBL_THEMECD) && (this.fnc_Trim(this.SELECTED_LANGUAGE) == application.GBL_LANGCD)) {
        		this.fnc_Message("TMM003");
        		return;
        	}
        	
        	if (this.fnc_Message("TMM203")) {
        		
        		var sActionName = "SettingSave";
        		var sInDataset = "";
        		var sOutDataSet = "";
        		var sArgument    = " USER_LNCD=" + (this.fnc_Trim(this.SELECTED_LANGUAGE).length == 0 ? application.GBL_LANGCD : this.SELECTED_LANGUAGE);
        			sArgument	+= " MYTM_TYCD=" + (this.fnc_Trim(this.SELECTED_THEME).length == 0 ? application.GBL_THEMECD : this.SELECTED_THEME);
        			sArgument	+= " USER_IDXX=" + application.GBL_USERID;
        		
        		this.fnc_TransactionCall(this, "ComLogin", sActionName, sInDataset, sOutDataSet, sArgument, "fn_CallBack", false);
        		
        	}
        	
        }

        
        /**
         * 취소 버튼 클릭 시
         */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.fnc_PopupClose("");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.btnCancel.addEventHandler("onclick", this.btnCancel_onclick, this);
            this.btnSaveSetting.addEventHandler("onclick", this.btnSaveSetting_onclick, this);
            this.chkThemePurple.addEventHandler("onchanged", this.chkThemePurple_onchanged, this);
            this.chkThemeBlue.addEventHandler("onchanged", this.chkThemeBlue_onchanged, this);
            this.chkThemeGray.addEventHandler("onchanged", this.chkThemeGray_onchanged, this);
            this.cmbSYST_LNCD.addEventHandler("onitemchanged", this.cmbSYST_LNCD_onitemchanged, this);

        };

        this.loadIncludeScript("Themeset.xfdl");

       
    };
}
)();
