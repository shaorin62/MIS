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
                this.set_name("YEAA0060");
                this.set_titletext("퇴직금정산내역");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsSHRWODN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_90016", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_COMM_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_COMD_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_COMD_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE1F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE2F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE3F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE4F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE5F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE6F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_USE_YN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_ASIS_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("144");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("7");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("개인자료등록확인");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("10");
            obj.set_text("홈 > 급여관리 > 연말정산 > 개인자료등록확인");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "644", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("spnSHRYEA_STD_YY", "absolute", "96", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy");
            obj.set_type("spin");
            obj.set_value("null");
            obj.set_editformat("yyyy");

            obj = new Static("imgSearchTitle8", "absolute", "204", "71", "52", "21", null, null, this);
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRYEA_DEPT_CD", "absolute", "246", "71", "80", "21", null, null, this);
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.setStyleValue("align", "readonly", "center middle");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRYEA_DEPT_CD", "absolute", "328", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRYEA_DEPT_NM", "absolute", "351", "71", "100", "21", null, null, this);
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "479", "71", "52", "21", null, null, this);
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRYEA_EMP_NO", "absolute", "521", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRYEA_EMP_NO", "absolute", "603", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRYEA_EMP_NM", "absolute", "626", "71", "100", "21", null, null, this);
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "756", "71", "68", "21", null, null, this);
            obj.set_text("재직구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRYEA_INOFFICE_CD", "absolute", "824", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("dropdown");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Div("div_Proc", "absolute", "8", "113", null, null, "25", "15", this);
            obj.set_taborder("143");
            obj.set_url("yea::YEAA0080_2015.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "37", null, null, this);
            obj.set_taborder("145");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직금정산내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
            this._addPreloadList("fdl", "yea::YEAA0080_2015.xfdl");
        };
        
        // User Script
        this.addIncludeScript("YEAA0080.xfdl", "script::lib_script_common.xjs");
        this.registerScript("YEAA0080.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0060 개인자료등록확인
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.31		김석영		Initial Created.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "YEAA0080";

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	this.sUSERAUTH     = "";
        	this.sFORMCAPTION  = "";
        	this.sFORMLOCATION = "";
        	this.sUSERLAVEL    = "";

        } else {
        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];

        }

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
         	this.fnc_GetComboDs(this.dsCombo);

            this.cmbSHRYEA_INOFFICE_CD.set_index(1);
        	
        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	
        	this.spnSHRYEA_STD_YY.set_value(sNowDate);
        	this.spnSHRYEA_STD_YY.setFocus();
        	this.spnSHRYEA_STD_YY_onchanged(this.spnSHRYEA_STD_YY, e);
        	
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();

        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	this.div_Proc.fn_Search(obj);
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function(obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function(obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function(obj) {
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	// 기능 없음
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능 없음
        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능 없음
        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	// 기능 없음
        	return "";
        }

        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);

        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);

        		}
        	} else {
        		this.fn_PostProcess(sMethodName);

        	}

        }

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	if (sMethodName == "GetCommCode") {
        		var arrParam 		= new Array();
        		var arrInt   		= 0;
        		arrParam[arrInt++]  = "COMBO,cmbSHRYEA_INOFFICE_CD,dsSHRWODN_CODE,0"; // 재직구분(조회조건)
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	// 기능 없음
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서정보조회SHR(Popup)
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 사원정보조회SHR(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";

        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*------------------------+
        |  정산년도 변경 이벤트  |
        +------------------------*/
        this.spnSHRYEA_STD_YY_onchanged = function(obj,e) {
        	
        	if ( this.fnc_Trim(this.spnSHRYEA_STD_YY.value).substr(0, 4) != this.fnc_Trim(this.div_Proc.url).substr(this.fnc_Length(this.fnc_Trim(this.div_Proc.url)) - 9, 4) ) {
        		if ( this.fnc_Trim(this.spnSHRYEA_STD_YY.value).substr(0, 4) < "2014" ) { 
        			//this.div_Proc.set_url("yea::YEAA0060_2013.xfdl");	//넥사크로는 15년부터 있음!!
        			this.div_Proc.set_url("yea::YEAA0080_2015.xfdl");
        			//this.spnSHRYEA_STD_YY.value = this.spnSHRYEA_STD_YY.value + "12";
        		} else if ( this.fnc_Trim(this.spnSHRYEA_STD_YY.value).substr(0,4) == "2014" ) {
        			//this.div_Proc.set_url("yea::YEAA0080_2014.xfdl");	//넥사크로는 15년부터 있음!!
        			this.div_Proc.set_url("yea::YEAA0080_2015.xfdl");
        		} else if ( this.fnc_Trim(this.spnSHRYEA_STD_YY.value).substr(0,4) > "2014" ) {
        			this.div_Proc.set_url("yea::YEAA0080_2015.xfdl");
        			//this.spnSHRYEA_STD_YY.Value = this.fnc_Today().substr(0, 4);
        		}
        	}
        }

        /*------------------------+
        |  정산년도 스핀 이벤트  |
        +------------------------*/
        this.spnSHRYEA_STD_YY_onspin = function(obj,e) {
        	this.spnSHRYEA_STD_YY_onchanged(obj, e);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.spnSHRYEA_STD_YY.addEventHandler("onchanged", this.spnSHRYEA_STD_YY_onchanged, this);
            this.spnSHRYEA_STD_YY.addEventHandler("onspin", this.spnSHRYEA_STD_YY_onspin, this);
            this.edtSHRYEA_DEPT_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRYEA_DEPT_CD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRYEA_DEPT_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRYEA_DEPT_NM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRYEA_EMP_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRYEA_EMP_NO.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRYEA_EMP_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRYEA_EMP_NM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRYEA_INOFFICE_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("YEAA0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
