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
                this.set_name("PAYA0180");
                this.set_titletext("조회용부서관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_CODEXD", this);
            obj._setContents("<ColumnInfo><Column id=\"DTQR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"QDTG_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"QDTG_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTGN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_DEPTQR", this);
            obj._setContents("<ColumnInfo><Column id=\"DTQR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"QDTG_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHEK_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DTQR_CODE</Col><Col id=\"DSNAME\">dsSHRDTQR_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DTGN_CODE</Col><Col id=\"DSNAME\">dsDTGN_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle9", "absolute", "27", "71", "49", "21", null, null, this);
            obj.set_text("구분");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_CODEXD", "absolute", "8", "138", "484", null, null, "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("31");
            obj.set_binddataset("dsTM_CODEXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"130\" band=\"left\"/><Column size=\"79\" band=\"left\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"부서그룹\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"정렬순서\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:QDTG_NAME\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:right;\" text=\"bind:SORT_ORDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_DEPTQR", "absolute", "512", "138", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("32");
            obj.set_binddataset("dsPY_DEPTQR");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"125\" band=\"left\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"부서명\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_edit\" text=\"적용여부\"/><Cell col=\"2\" text=\"사용여부\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"정렬순서\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:CHEK_YSNO\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;\" text=\"bind:USEX_YSNO\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:right;\" text=\"bind:SORT_ORDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRDTQR_CODE", "absolute", "69", "71", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("stInformation", "absolute", "8", "117", "312", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DeptSearch", "absolute", null, "113", "98", "21", "112", null, this);
            obj.set_taborder("38");
            obj.set_text("입력대상부서");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkONEO_AALL", "absolute", "1061", "113", null, "21", "99", null, this);
            obj.set_taborder("42");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", null, "113", "70", "21", "36", null, this);
            obj.set_taborder("39");
            obj.set_text("전체조회");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkALLS_SEAH", "absolute", null, "113", "17", "21", "21", null, this);
            obj.set_taborder("40");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.set_enable("true");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "397", "103", "80", "35", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("45");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("47");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("48");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "952", "98", "12", "23", null, null, this);
            obj.set_taborder("54");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "965", "98", "12", "23", null, null, this);
            obj.set_taborder("55");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "113", "7", "21", "216", null, this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stMENU_LIST00", "absolute", null, "113", "77", "21", "229", null, this);
            obj.set_taborder("57");
            obj.set_text("조회타이틀");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtQDTG_NAME", "absolute", "1193", "113", null, "21", "-83", null, this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "512", "117", "240", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("59");
            obj.set_text("조회용부서관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("60");
            obj.set_text("홈 > 급여기준 > 조회용부서관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("61");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("62");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("63");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("64");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("65");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "492", "269", "20", "41", null, null, this);
            obj.set_taborder("66");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("조회용부서관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edtQDTG_NAME","value","dsTM_CODEXD","QDTG_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAYA0180.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYA0180.xfdl", function() {
        /***************************************************************************************************
         * # Program:   PAYA0180 조회용부서관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.28     박철영     Initial Created.
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
        this.sPACKAGENAME = "PAYA0180";

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
        	this.cmbSHRDTQR_CODE.setFocus();

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

        	this.edtQDTG_NAME.set_value("");

        	this.fnc_DatasetClear("dsTM_CODEXD,dsPY_DEPTQR");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTM_CODEXD=dsTM_CODEXD";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXD.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsTM_CODEXD.insertRow(this.dsTM_CODEXD.rowposition + 1);
        	this.dsTM_CODEXD.setColumn(iRow, "DTQR_CODE", this.cmbSHRDTQR_CODE.value);
        	this.fnc_GridSetCellFocus(this.grdTM_CODEXD, "QDTG_NAME");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTM_CODEXD.deleteRow(this.dsTM_CODEXD.rowposition);
        	this.grdTM_CODEXD.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTM_CODEXD,dsPY_DEPTQR");
        	this.grdTM_CODEXD.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_CODEXD=dsTM_CODEXD:U dsPY_DEPTQR=dsPY_DEPTQR:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXD.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_CODEXD,dsPY_DEPTQR", this);

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

        	if (this.fnc_DatasetChangeCheck("dsTM_CODEXD,dsPY_DEPTQR")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRDTQR_CODE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "구분", this.cmbSHRDTQR_CODE);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_CODEXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	var sQuestionText = this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition, "QDTG_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_CODEXD,dsPY_DEPTQR")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_CODEXD.getRowCount(); i++) {

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXD.getColumn(i, "QDTG_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부서명", this.dsTM_CODEXD, i, this.grdTM_CODEXD, "QDTG_NAME");
        		}

        	}
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_DEPTQR.getRowCount(); i++) {

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_DEPTQR.getColumn(i, "SORT_ORDR"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "정렬순서", this.dsPY_DEPTQR, i, this.dsPY_DEPTQR, "SORT_ORDR");
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
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DTQR_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRDTQR_CODE.value));

        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DTQR_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition,"DTQR_CODE")));
        		sReturnString += " QDTG_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition,"QDTG_CODE")));
        		sReturnString += " DTGN_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition,"DTGN_CODE")));
        		sReturnString += " ALLS_SEAH=" 	+ this.fnc_Quote(this.fnc_Trim(this.chkALLS_SEAH.value));
        		sReturnString += " ONEO_AALL=" 	+ this.fnc_Quote(this.fnc_Trim(this.chkONEO_AALL.value));

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);

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
        		this.fnc_Information(this.stInformation, this.dsTM_CODEXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_CODEXD.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsTM_CODEXD);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRDTQR_CODE,dsSHRDTQR_CODE,0";
        			arrParam[1] = "GRID,grdTM_CODEXD,dsDTGN_CODE,DTGN_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.dsTM_CODEXD.getRowCount() < 1) return;

        	this.chkONEO_AALL.set_value("1");
        	this.fnc_DatasetClear("dsPY_DEPTQR");

        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_DEPTQR=dsPY_DEPTQR";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.btn_DeptSearch.set_enable(false);
        	} else {
        		this.btn_DeptSearch.set_enable(true);
        	}

        
        }

        this.btn_DeptSearch_onclick = function(obj,e) {

        	this.chkONEO_AALL.set_value("0");
        	this.fnc_DatasetClear("dsPY_DEPTQR");

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_DEPTQR=dsPY_DEPTQR";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        this.dsTM_CODEXD_canrowposchange = function(obj,e){
        	if (this.fnc_DatasetChangeCheck("dsPY_DEPTQR")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_CODEXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_CODEXD.addEventHandler("canrowposchange", this.dsTM_CODEXD_canrowposchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTM_CODEXD.addEventHandler("oncellclick", this.fn_DetailView, this);
            this.grdPY_DEPTQR.addEventHandler("oncellclick", this.fn_DetailView, this);
            this.cmbSHRDTQR_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_DeptSearch.addEventHandler("onclick", this.btn_DeptSearch_onclick, this);
            this.chkONEO_AALL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkALLS_SEAH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYA0180.xfdl");
        this.loadPreloadList();
       
    };
}
)();
