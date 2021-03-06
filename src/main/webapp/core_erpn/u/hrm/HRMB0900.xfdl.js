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
                this.set_name("HRMB0900");
                this.set_titletext("퇴직자이직관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WRDV_CODE</Col><Col id=\"DSNAME\">dsWRDV_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_RECOJB", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OPOS_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RETR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"COJB_JCDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"COJB_REDA\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"COJB_COMP\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"COJB_DTNM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"COJB_JONM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"COJB_TLNM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"COJB_CPNM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"COJB_DUNM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "232", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_RECOJB", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsHR_RECOJB");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사번\"/><Cell col=\"1\" rowspan=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"2\" colspan=\"5\" text=\"농심기획 소속\"/><Cell col=\"7\" colspan=\"8\" text=\"이직사항\"/><Cell col=\"15\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"2\" text=\"소속\"/><Cell row=\"1\" col=\"3\" text=\"부서\"/><Cell row=\"1\" col=\"4\" style=\"background: ;\" text=\"직위\"/><Cell row=\"1\" col=\"5\" text=\"입사일자\"/><Cell row=\"1\" col=\"6\" text=\"퇴사일자\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"입사일자\" wordwrap=\"char\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" style=\"background: ;controlfont:8 arial;\" cssclass=\"Cellgrd_WF_edit\" text=\"퇴사일자\" wordwrap=\"char\" editscrollbar=\"none\"/><Cell row=\"1\" col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"직장명\"/><Cell row=\"1\" col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"부서명\"/><Cell row=\"1\" col=\"11\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직무명\"/><Cell row=\"1\" col=\"12\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직위\"/><Cell row=\"1\" col=\"13\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직급\"/><Cell row=\"1\" col=\"14\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직책\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:EMPL_NUMB\" editlimit=\"0\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:EMPL_NAME\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:OPOS_NAME\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:ENCO_DATE\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:RETR_DATE\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" editfilter=\"number\" style=\"align:center;\" text=\"bind:COJB_JCDT\" editlimit=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" editfilter=\"number\" style=\"align:center;background: ;\" text=\"bind:COJB_REDA\" editlimit=\"8\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:COJB_COMP\" editlimit=\"0\"/><Cell col=\"10\" edittype=\"text\" style=\"align:center;\" text=\"bind:COJB_DTNM\" editlimit=\"0\"/><Cell col=\"11\" edittype=\"text\" style=\"align:center;\" text=\"bind:COJB_JONM\" editlimit=\"0\"/><Cell col=\"12\" edittype=\"text\" style=\"align:center;\" text=\"bind:COJB_TLNM\" editlimit=\"0\"/><Cell col=\"13\" edittype=\"text\" style=\"align:center;\" text=\"bind:COJB_CPNM\" editlimit=\"0\"/><Cell col=\"14\" edittype=\"text\" style=\"align:center;\" text=\"bind:COJB_DUNM\" editlimit=\"0\"/><Cell col=\"15\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "344", "71", "57", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "386", "71", "80", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "468", "71", "21", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "491", "71", "100", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "27", "71", "84", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("퇴사일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBGIN_DATE", "absolute", "95", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "200", "71", "14", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRENDX_DATE", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("퇴직자이직관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("26");
            obj.set_text("홈 > 인사관리 > 인사관리 > 퇴직자이직관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("27");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("32");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("35");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "87", "61", "8", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "316", "61", "40", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직자이직관리");
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
        this.addIncludeScript("HRMB0900.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMB0900.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HRMB0900 퇴직자이직관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.10  	황치웅		Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HRMB0900"; 

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

        	var iNowDate = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRBGIN_DATE.set_value(this.fnc_SubStr(iNowDate, 0, 4) + "0101");
        	this.calSHRENDX_DATE.set_value(this.fnc_SubStr(iNowDate)); 
        	this.calSHRBGIN_DATE.setFocus();

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
        	this.fnc_DatasetClear("dsHR_RECOJB");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_RECOJB=dsHR_RECOJB";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_RECOJB.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {  
        	var iRow = this.dsHR_RECOJB.addRow();
        	this.dsHR_RECOJB.set_rowposition(iRow); 
        	this.fnc_GridSetCellFocus(this.grdHR_RECOJB, "EMPL_NAME");
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) {
        		this.dsHR_RECOJB.deleteMultiRows(this.grdHR_RECOJB.getSelectedDatasetRows());
        		this.grdHR_RECOJB.setFocus();
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsHR_RECOJB");
        	this.grdHR_RECOJB.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsHR_RECOJB=dsHR_RECOJB:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_RECOJB.setFocus();

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
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_RECOJB", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_RECOJB")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsHR_RECOJB.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdHR_RECOJB);
        	
        	if (iSelectRowCount < 1 ) {
        		return this.fnc_Message("TMM013");
        	} else if (iSelectRowCount == 1 ) {
        		var sQuestionText = this.dsHR_RECOJB.getColumn(this.dsHR_RECOJB.rowposition, "EMPL_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	} else {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	}
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsHR_RECOJB")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsHR_RECOJB.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsHR_RECOJB.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_RECOJB.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "성명", this.dsHR_RECOJB, i, this.grdHR_RECOJB, "EMPL_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_RECOJB.getColumn(i, "COJB_JCDT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "이직회사입사일자", this.dsHR_RECOJB, i, this.grdHR_RECOJB, "COJB_JCDT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_RECOJB.getColumn(i, "COJB_COMP"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직장명", this.dsHR_RECOJB, i, this.grdHR_RECOJB, "COJB_COMP");
        		}
        		
        		if(this.dsHR_RECOJB.getColumn(i,"COJB_JCDT") > this.dsHR_RECOJB.getColumn(i,"COJB_REDA")){
        			this.fnc_Message("TMM028", "이직회사입사일자","이직회사퇴사일자");
        			return false;
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
        		sReturnString += " BGIN_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRBGIN_DATE.value)); 
        		sReturnString += " ENDX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRENDX_DATE.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		
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
        		this.fnc_Information(this.stInformation, this.dsHR_RECOJB.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_RECOJB.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	}else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdHR_RECOJB,dsWRDV_CODE,WRDV_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)

        		arrParam[0] = "HRM0050";
        		arrParam[1] = "2";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if (obj.name == "grdHR_RECOJB") {
        	
        		if (sColumnID == "EMPL_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME") {
        				
        			arrParam[0] = "HRM0050";
        			arrParam[1] = "2";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdHR_RECOJB";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,SECT_NAME,DEPT_CODE,DEPT_NAME,OPOS_CODE,OPOS_NAME,ENCO_DATE,RETR_DATE";
        			arrParam[6] = "0,1,2,3,4,5,6,7,8";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}

        }

        this.dsHR_RECOJB_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdHR_RECOJB, "YES" ,e.oldvalue, e.columnid); 
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_RECOJB.addEventHandler("oncolumnchanged", this.dsHR_RECOJB_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdHR_RECOJB.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRBGIN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRENDX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMB0900.xfdl");
        this.loadPreloadList();
       
    };
}
)();
