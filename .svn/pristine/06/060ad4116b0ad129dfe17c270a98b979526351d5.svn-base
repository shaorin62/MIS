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
                this.set_name("PAYA0120");
                this.set_titletext("급여전기설정");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"DSNAME\">dsSHRCLSD_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"DSNAME\">dsALDE_CODE</Col><Col id=\"CODEID\">ALDE_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">PAY0006</Col><Col id=\"DSNAME\">dsSHRWAGE_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_SLIPBS", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WAGE_CODE\" size=\"4\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"ALDE_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"CSTC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CSTC_NAME\" size=\"10\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"10\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_SLIPED", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WAGE_CODE\" size=\"4\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"ALDE_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"CSTC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_ALLDED", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("2");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("급여전기설정");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("5");
            obj.set_text("홈 > 급여전기설정");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("급여일지");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWAGE_CODE", "absolute", "96", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_displayrowcount("20");
            obj.set_autoselect("true");

            obj = new Static("Static31", "absolute", "245", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCLSD_CODE", "absolute", "313", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "216", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
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
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_SLIPBS", "absolute", "8", "128", null, null, "375", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsPY_SLIPBS");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급공제\"/><Cell col=\"1\" text=\"코스트센터코드\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"코스트센터명\"/><Cell col=\"3\" text=\"계정코드\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"계정명\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;combo&quot; : &quot;none&quot;\" style=\"align: ;\" text=\"bind:ALDE_CODE\" editlimit=\"0\"/><Cell col=\"1\" text=\"bind:CSTC_CODE\"/><Cell col=\"2\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;text&quot; : &quot;none&quot;\" style=\"background: ;\" text=\"bind:CSTC_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;show&quot; : &quot;hide&quot;\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" text=\"bind:ACCT_INTL\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:ACCT_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_SLIPED", "absolute", null, "128", "334", null, "25", "15", this);
            obj.set_taborder("109");
            obj.set_binddataset("dsPY_SLIPED");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급항목명\"/><Cell col=\"1\" text=\"계정코드\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"계정명\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:EXPD_NAME\" editlimit=\"0\"/><Cell col=\"1\" text=\"bind:ACCT_INTL\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:ACCT_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddEXPD_CODE", "absolute", null, "106", "84", "21", "25", null, this);
            obj.set_taborder("110");
            obj.set_text("지급항목추가");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여전기설정");

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
        this.addIncludeScript("PAYA0120.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYA0120.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYA0120 급여전기설정
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.22		안윤준		Initial Created.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF";
        this.sPACKAGENAME = "PAYA0120";

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	this.fnc_GetComboDs(this.dsCombo);

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

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPY_SLIPBS,dsPY_SLIPED");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_SLIPBS=dsPY_SLIPBS";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_SLIPBS.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPY_SLIPBS.insertRow(this.dsPY_SLIPBS.rowposition + 1);
        	this.dsPY_SLIPBS.setColumn(iRow, "WAGE_CODE", this.cmbSHRWAGE_CODE.value);
        	this.dsPY_SLIPBS.setColumn(iRow, "CLSD_CODE", this.cmbSHRCLSD_CODE.value);
        	this.grdPY_SLIPBS.setFocus();
        	this.grdPY_SLIPBS.setCellPos(this.fnc_GridColumnIndex(this.grdPY_SLIPBS, "ALDE_CODE"));

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsPY_SLIPBS.deleteMultiRows(this.grdPY_SLIPBS.getSelectedDatasetRows());
        	this.grdPY_SLIPBS.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_SLIPBS");
        	this.grdPY_SLIPBS.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_SLIPBS=dsPY_SLIPBS:U dsPY_SLIPED=dsPY_SLIPED:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_SLIPBS.setFocus();

        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);

        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_SLIPBS", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_SLIPBS,dsPY_SLIPED")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRWAGE_CODE.value)) < 0) {
        		return this.fnc_SearchCheckPostAction("TMM072", "급여구분", this.cmbSHRWAGE_CODE);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRCLSD_CODE.value)) < 0) {
        		return this.fnc_SearchCheckPostAction("TMM072", "직원구분", this.cmbSHRCLSD_CODE);
        	}
        	
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdPY_SLIPBS);
        	
        	if ( iSelectRowCount == 1) {
        		var sQuestionText  = "코스트센터코드 (" + this.fnc_Trim(this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "CSTC_NAME")) + ") ";
        			sQuestionText += "계정명 (" + this.fnc_Trim(this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "ACCT_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	} else if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        		
        	} else {
        		return this.fnc_Message("TMM007");
        		
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_SLIPBS,dsPY_SLIPED")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsPY_SLIPBS.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_SLIPBS.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SLIPBS.getColumn(i, "ALDE_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지급공제", this.dsPY_SLIPBS, i, this.grdPY_SLIPBS, "ALDE_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SLIPBS.getColumn(i, "CSTC_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "코스트센터코드", this.dsPY_SLIPBS, i, this.grdPY_SLIPBS, "CSTC_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SLIPBS.getColumn(i, "ACCT_INTL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정명", this.dsPY_SLIPBS, i, this.grdPY_SLIPBS, "ACCT_NAME");
        		}
        	}
        	
        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWAGE_CODE.value));
        		sReturnString += " CLSD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCLSD_CODE.value));
        	
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " WAGE_CODE=" + this.fnc_Quote(this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "WAGE_CODE"));
        		sReturnString += " CLSD_CODE=" + this.fnc_Quote(this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "CLSD_CODE"));
        		sReturnString += " ALDE_CODE=" + this.fnc_Quote(this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "ALDE_CODE"));
        		sReturnString += " CSTC_CODE=" + this.fnc_Quote(this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "CSTC_CODE"));
        	
        	} else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " EXPD_CODE=" + this.fnc_Quote(this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "ALDE_CODE"));

        
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsPY_SLIPBS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_SLIPBS.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SEARCH01") {	
        	
        	} else if (sMethodName == "SEARCH02") {	
        		this.dsPY_SLIPED.set_enableevent(false);
        		for ( var i=0; i<this.dsPY_ALLDED.getRowCount(); i++ ) {
        			var nRow = this.dsPY_SLIPED.addRow();
        			this.dsPY_SLIPED.setColumn(nRow, "EXPD_CODE", this.dsPY_ALLDED.getColumn(i, "EXPD_CODE" ));
        			this.dsPY_SLIPED.setColumn(nRow, "EXPD_NAME", this.dsPY_ALLDED.getColumn(i, "EXPD_NAME" ));
        			this.dsPY_SLIPED.setColumn(nRow, "WAGE_CODE", this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "WAGE_CODE" ));
        			this.dsPY_SLIPED.setColumn(nRow, "CLSD_CODE", this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "CLSD_CODE" ));
        			this.dsPY_SLIPED.setColumn(nRow, "ALDE_CODE", this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "ALDE_CODE" ));
        			this.dsPY_SLIPED.setColumn(nRow, "CSTC_CODE", this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "CSTC_CODE" ));
        			this.dsPY_SLIPED.setColumn(nRow, "ACCT_INTL", this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "ACCT_INTL" ));
        			this.dsPY_SLIPED.setColumn(nRow, "ACCT_NAME", this.dsPY_SLIPBS.getColumn(this.dsPY_SLIPBS.rowposition, "ACCT_NAME" ));
        			
        		}
        		this.dsPY_SLIPED.set_enableevent(true);
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRCLSD_CODE,dsSHRCLSD_CODE,0";
        			arrParam[1] = "GRID,grdPY_SLIPBS,dsALDE_CODE,ALDE_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRWAGE_CODE,dsSHRWAGE_CODE,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function(obj,e){
        	this.fnc_DatasetClear("dsPY_SLIPED");
        	if ( this.dsPY_SLIPBS.getRowType(this.dsPY_SLIPBS.rowposition) != Dataset.ROWTYPE_INSERT ){
        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPY_SLIPED=dsPY_SLIPED";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        		this.grdPY_SLIPED.setFocus();
        		
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ( obj.name == "grdPY_SLIPBS" ) {
        		if (sColumnID == "CSTC_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "CSTC_NAME") { // 코스트센터명
        			arrParam[0] = "BDM0008";
        			arrParam[1] = "";
        			arrParam[2] = "CSTC_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_SLIPBS";
        			arrParam[5] = "CSTC_CODE,CSTC_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} else if (sColumnID == "ACCT_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "ACCT_NAME") { // 계정명
        			arrParam[0] = "FAM0031";                                
        			arrParam[1] = "";                                      
        			arrParam[2] = "ACCT_NAME"; 
        			arrParam[3] = "N";                                       
        			arrParam[4] = "grdPY_SLIPBS";   
        			arrParam[5] = "ACCT_INTL,ACCT_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
                
        		}
        	} else if ( obj.name == "grdPY_SLIPED" ) {
        		if (sColumnID == "ACCT_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "ACCT_NAME") { // 계정명
        			arrParam[0] = "FAM0031";                                
        			arrParam[1] = "";                                      
        			arrParam[2] = "ACCT_NAME"; 
        			arrParam[3] = "N";                                       
        			arrParam[4] = "grdPY_SLIPED";   
        			arrParam[5] = "ACCT_INTL,ACCT_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
                
        		}
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*-------------------------+
         |  DATASET Column 변경 시 |
         +-------------------------*/
        this.dsPY_SLIPBS_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "ACCT_NAME" || e.columnid == "CSTC_NAME") this.fn_HelpDialoge(this.grdPY_SLIPBS, "YES" ,e.oldvalue, e.columnid);
        	
        }

        this.dsPY_SLIPED_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "ACCT_NAME") this.fn_HelpDialoge(this.grdPY_SLIPBS, "YES" ,e.oldvalue, e.columnid);
        	
        }

        /*-------------------------+
         |  지급항목 추가 버튼 클릭 시 |
         +-------------------------*/
        this.btnAddEXPD_CODE_onclick = function(obj,e) {
        	this.fnc_DatasetClear("dsPY_SLIPED");
        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_ALLDED=dsPY_ALLDED";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_SLIPBS.addEventHandler("oncolumnchanged", this.dsPY_SLIPBS_oncolumnchanged, this);
            this.dsPY_SLIPBS.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsPY_SLIPED.addEventHandler("oncolumnchanged", this.dsPY_SLIPED_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRWAGE_CODE.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRWAGE_CODE.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.grdPY_SLIPBS.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPY_SLIPED.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btnAddEXPD_CODE.addEventHandler("onclick", this.btnAddEXPD_CODE_onclick, this);

        };

        this.loadIncludeScript("PAYA0120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
