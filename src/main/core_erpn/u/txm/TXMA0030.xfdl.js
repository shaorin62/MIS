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
                this.set_name("TXMA0030");
                this.set_titletext("부가세자료 집계처리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_VATPROC", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODH_FLNM\" size=\"10\" type=\"STRING\"/><Column id=\"CODD_VALU\" size=\"10\" type=\"STRING\"/><Column id=\"CODD_DESC\" size=\"100\" type=\"STRING\"/><Column id=\"CODD_REF1\" size=\"100\" type=\"STRING\"/><Column id=\"CODD_REF2\" size=\"100\" type=\"STRING\"/><Column id=\"CODD_REF2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"VAT_APPL\" size=\"9\" type=\"STRING\"/><Column id=\"VAT_PROCYN\" size=\"1\" type=\"STRING\"/><Column id=\"VAT_PROCYN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_SMMDD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_EMMDD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PRE_VAT_SMMDD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRVATX_QUTR</Col><Col id=\"CODEID\">VATX_QUTR</Col><Col id=\"HEADFLAG\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUBN</Col><Col id=\"HEADFLAG\">Y</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_VATPROC", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("none");
            obj.set_autofittype("none");
            obj.set_binddataset("dsTA_VATPROC");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"360\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"처리구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"서식명\"/><Cell col=\"3\" displaytype=\"text\" text=\"최종집계자\"/><Cell col=\"4\" displaytype=\"text\" text=\"최종집계일자\"/><Cell col=\"5\" displaytype=\"text\" text=\"최초집계자\"/><Cell col=\"6\" displaytype=\"text\" text=\"최초집계일자\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:CODD_REF2 == '0' ? 'none' : 'checkbox'\" edittype=\"expr:CODD_REF2 == '0' ? 'none' : 'checkbox'\" style=\"align:center;background: ;\" text=\"bind:VAT_PROCYN\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:CODD_REF2_NM\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:CODD_DESC\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:UPDT_USID\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:UPDT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:INST_USID\"/><Cell col=\"6\" displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:INST_DATE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "7", "35", "133", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC", "absolute", "1", "0", "74", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("집계처리");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVAT_SMMDD", "absolute", "588", "71", "60", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVAT_EMMDD", "absolute", "653", "71", "60", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRE_VAT_SMMDD", "absolute", "718", "71", "60", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "26", "71", "68", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "250", "71", "40", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("연도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "400", "71", "76", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "468", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "81", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("부가세자료 집계처리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("37");
            obj.set_text("홈 > 세무관리 > 세무회계 > 부가세신고자료관리 > 부가세자료 집계처리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("48");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("49");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "73", "61", "8", "41", null, null, this);
            obj.set_taborder("51");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "221", "61", "40", "41", null, null, this);
            obj.set_taborder("52");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("53");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRVAT_YYYY", "absolute", "293", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 133, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부가세자료 집계처리");
            		p.set_scrollbars("none");

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
        };
        
        // User Script
        this.addIncludeScript("TXMA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMA0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMA0030 부가세자료 집계처리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.03		황치웅		Initial Created.
         *   2016.08.03		안윤준		수정
         *   2016.08.09		오혜성		수정
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

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  	= "TTFFFFTF";
        this.sPACKAGENAME 	= "TXMA0030";
        this.sSERVERDATE 	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.fnc_GetBranch();
        	
        	var sStds_Date	= this.fnc_AddMonth(this.sSERVERDATE, -1);
        	this.calSHRVAT_YYYY.set_value(this.fnc_SubStr(sStds_Date, 0, 4));
        	
        	var sTempStr 	= this.fnc_SubStr(this.sSERVERDATE, 4, 2);
        	var sVatQuarter = "";
        	
        	if (sTempStr >= "01" && sTempStr <= "03") {
        		sVatQuarter = "4";
        		this.edtVAT_SMMDD.set_value("1001");
        		this.edtVAT_EMMDD.set_value("1231");
        		this.edtPRE_VAT_SMMDD.set_value("0701");
        		
        	} else if (sTempStr >= "04" && sTempStr <= "06") {
        		sVatQuarter = "1";
        		this.edtVAT_SMMDD.set_value("0101");
        		this.edtVAT_EMMDD.set_value("0331");
        		this.edtPRE_VAT_SMMDD.set_value("0101"); //예정신고누락분 예정의 경우 체크 안함
        		
        	} else if (sTempStr >= "07" && sTempStr <= "09") {
        		sVatQuarter = "2";
        		this.edtVAT_SMMDD.set_value("0401");
        		this.edtVAT_EMMDD.set_value("0630");
        		this.edtPRE_VAT_SMMDD.set_value("0101");
        		
        	} else if (sTempStr >= "10" && sTempStr <= "12") {
        		sVatQuarter = "3";
        		this.edtVAT_SMMDD.set_value("0701");
        		this.edtVAT_EMMDD.set_value("0930");
        		this.edtPRE_VAT_SMMDD.set_value("0701"); //예정신고누락분 예정의 경우 체크 안함
        		
        	}
        	
        	this.cmbVAT_QUARTER.set_value(sVatQuarter);
        	this.cmbSHRACCT_GUBN.setFocus();
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        	
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_VATPROC");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_VATPROC=dsTA_VATPROC ";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_VATPROC.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTA_VATPROC");
        	this.grdTA_VATPROC.setFocus(); 
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this); //Export 할 화면 Call
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음.
        }

        /*-----------------------------------+
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
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        
        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "연도", this.calSHRVAT_YYYY);
        	}
        	
        	if(this.fnc_Length(this.cmbSHRACCT_GUBN.text) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "사업장", this.cmbSHRACCT_GUBN);
        	}
        	
        	if(this.fnc_Length(this.cmbVAT_QUARTER.text) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "분기구분", this.cmbVAT_QUARTER);
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	if (sKind == "SEARCH00") {	
        		sReturnString  = " pgm=" 		   	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="        	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN="     	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY="      	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER="   	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기
        		sReturnString += " VAT_SMMDD="     	+ this.fnc_Quote(this.fnc_Trim(this.edtVAT_SMMDD.value)); //VAT조회 시작월일
        		sReturnString += " VAT_EMMDD="     	+ this.fnc_Quote(this.fnc_Trim(this.edtVAT_EMMDD.value)); //VAT조회 종료월일
        		sReturnString += " PRE_VAT_SMMDD=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtPRE_VAT_SMMDD.value));
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	 	+ this.fnc_Quote(sKind);
        		sReturnString += " BRANCH_CD="     	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기
        		
        	}

        	return sReturnString;

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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		
        		this.fnc_Information(this.stInformation, this.dsTA_VATPROC.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_VATPROC.getCaseCount("dataset.getRowLevel(currow)==0"));	
        		
        		for (var i = 0; i < this.dsTA_VATPROC.getRowCount(); i++) {
        			if (this.dsTA_VATPROC.getColumn(i, "VAT_PROCYN_GB") == "1") {
        				this.dsTA_VATPROC.setColumn(i, "VAT_PROCYN", "1");
        			}
        		}
        		
        	} else if (sMethodName == "GetBranch") {
        		
        		this.cmbSHRACCT_GUBN.set_index(0);
         		
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbVAT_QUARTER,dsSHRVATX_QUTR,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Message("EVM003");
        		this.fn_Search();
        		
        	}

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*----------+
         | 집계처리 |
         +-----------*/
        this.btn_PROC_OnClick = function (obj,e) {

        	if (this.dsTA_VATPROC.rowcount < 1) {
        		this.fnc_Message("TMM141");
        		return false;

        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_VATPROC=dsTA_VATPROC:A";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTA_VATPROC.setFocus();

        }

        /*-------------+
         | 년도 변경 시 |
         +-------------*/
        this.calSHRVAT_YYYY_onspin = function (obj,e) {

        	this.fnc_DatasetClear("dsTA_VATPROC");
        	obj.setFocus();

        }

        /*--------------------+
         | 그리드 헤더 클릭 시 |
         +--------------------*/
        this.grdTA_VATPROC_onheadclick = function(obj,e) {
        	if ( e.col == 0 ) {
        		var iCheckValue = 0;

        		if (nexacro.toNumber(obj.getCellProperty("head", 0, "text"), 0) == 1) {
        			obj.setCellProperty("head", 0, "text", "0");
        			iCheckValue = 0;
        		} else {
        			obj.setCellProperty("head", 0, "text", "1");
        			iCheckValue = 1;
        		}
        		
        		for (var i=0; i < this.dsTA_VATPROC.rowcount; i++) {
        			if ( this.dsTA_VATPROC.getColumn(i, "CODD_REF2") != 0 ) {
        				this.dsTA_VATPROC.setColumn(i, "VAT_PROCYN", iCheckValue);
        			}
        		}
        	}
        }

        this.dsTA_VATPROC_oncolumnchanged = function(obj,e) {

        	if (e.oldvalue == e.newvalue) return;
        	if (e.columnid == "CHK") {
        		obj.set_enableevent(false);
        		obj.set_updatecontrol(false);

        		obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);

        		obj.set_updatecontrol(true);
        		obj.set_enableevent(true);
            } 
            
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VATPROC.addEventHandler("oncolumnchanged", this.dsTA_VATPROC_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdTA_VATPROC.addEventHandler("onheadclick", this.grdTA_VATPROC_onheadclick, this);
            this.Div0.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRVAT_YYYY.addEventHandler("onspin", this.calSHRVAT_YYYY_onspin, this);

        };

        this.loadIncludeScript("TXMA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
