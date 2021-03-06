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
                this.set_name("PAYA0020");
                this.set_titletext("기본급관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_REGSAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"BSLY_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BSL1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BSL2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BSL3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BSL4_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BSL5_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/><Column id=\"BASC_ANSL\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ASL1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ASL2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ASL3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ASL4_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_REGSAL", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("none");
            obj.set_binddataset("dsPY_REGSAL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("multirow");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"240\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"사원명\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"기준일\"/><Cell col=\"6\" style=\"background: ;\" text=\"순번\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"기본급\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"시간외 근무수당\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"임원상여\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_edit\" text=\"수습1개월월봉\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_edit\" text=\"수습2개월월봉\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_edit\" text=\"수습3개월월봉\"/><Cell col=\"13\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'normal' : 'none'\" style=\"align:center\" text=\"bind:EMPL_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:center\" text=\"bind:STDS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:SRAL_NUMB\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right\" text=\"bind:BSLY_AMOT\" editlimit=\"15\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right\" text=\"bind:BSL1_AMOT\" editlimit=\"15\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right\" text=\"bind:BSL2_AMOT\" editlimit=\"15\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BSL3_AMOT\" editlimit=\"15\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BSL4_AMOT\" editlimit=\"15\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BSL5_AMOT\" editlimit=\"15\"/><Cell col=\"13\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" combodisplayrowcount=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "522", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "604", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "627", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormDown", "absolute", "8", "35", "98", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormUp", "absolute", "109", "35", "86", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "480", "71", "57", "21", null, null, this);
            obj.set_text("사원");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "168", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("12");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "28", "71", "84", "21", null, null, this);
            obj.set_text("기준년월");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle8", "absolute", "204", "71", "57", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "246", "71", "80", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "328", "71", "21", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "351", "71", "100", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_autoskip("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHROPOS_NAME", "absolute", "729", "71", "100", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("기본급관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("22");
            obj.set_text("홈 > 급여관리 > 기본급관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("23");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("CalSHRYEAR_MNTH", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("31");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("32");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "176", "61", "40", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("기본급관리");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAYA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYA0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYA0020 기본급관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.12		고민주		Initial Created.
         *   2016.09.05		안윤준		수정.
         *   2016.10.13		황치웅      수정.
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
        this.sBUTTONLIST  	= "TTTTTTTF";
        this.sPACKAGENAME 	= "PAYA0020";
        this.sKeyValue 		= new Array();

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
        	
        	this.CalSHRYEAR_MNTH.calMONTH.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.CalSHRYEAR_MNTH.calMONTH.setFocus();

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
        	this.fnc_DatasetClear("dsPY_REGSAL");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_REGSAL=dsPY_REGSAL";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_REGSAL.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPY_REGSAL.insertRow(this.dsPY_REGSAL.rowposition+1);
        	this.dsPY_REGSAL.setColumn(iRow, "STDS_DATE", this.fnc_GetServerDateTime("DATE"));
        	this.dsPY_REGSAL.setColumn(iRow, "EMPL_NUMB", this.edtSHREMPL_NUMB.value);
        	this.dsPY_REGSAL.setColumn(iRow, "EMPL_NAME", this.edtSHREMPL_NAME.value);
        	this.dsPY_REGSAL.setColumn(iRow, "OPOS_NAME", this.edtSHROPOS_NAME.value);
        	this.fnc_GridSetCellFocus(this.grdPY_REGSAL, "EMPL_NAME");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		for (var i = this.dsPY_REGSAL.getRowCount() - 1 ; i >= 0 ; i-- ){
        			if(this.dsPY_REGSAL.getColumn(i,"CHK") == "1"){
        				this.dsPY_REGSAL.deleteRow(i);
        			}
        		}
        		this.grdPY_REGSAL.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_REGSAL");
        	this.grdPY_REGSAL.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsPY_REGSAL.getColumn(this.dsPY_REGSAL.rowposition,"EMPL_NUMB");
            this.sKeyValue[1] = this.dsPY_REGSAL.getColumn(this.dsPY_REGSAL.rowposition,"STDS_DATE");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsPY_REGSAL=dsPY_REGSAL:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_REGSAL", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_REGSAL")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.CalSHRYEAR_MNTH.calMONTH.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년월", this.CalSHRYEAR_MNTH.calMONTH);

        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsPY_REGSAL.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.dsPY_REGSAL.getCaseCount("CHK == '1'");
        	
        	var sQuestionText   = "사원명:" + this.fnc_Trim(this.dsPY_REGSAL.getColumn(this.dsPY_REGSAL.rowposition, "EMPL_NAME"));
        		sQuestionText  += " 순번:" + this.fnc_Trim(this.dsPY_REGSAL.getColumn(this.dsPY_REGSAL.rowposition, "SRAL_NUMB"));	
        	
        	if (iSelectRowCount == 0 ) {
        		return this.fnc_Message("TMM007");
        	} else if ( iSelectRowCount == 1 ) {
        		return this.fnc_Message("TMM002", sQuestionText);
        	} else {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	}
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_REGSAL")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsPY_REGSAL.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_REGSAL.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsPY_REGSAL, i, this.grdPY_REGSAL, "EMPL_NUMB");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REGSAL.getColumn(i, "STDS_DATE"))) < 8) {
        			return this.fnc_CheckPostAction("TMM072", "기준일", this.dsPY_REGSAL, i, this.grdPY_REGSAL, "STDS_DATE");
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
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.CalSHRYEAR_MNTH.calMONTH.value, 0, 6)));
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
         		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE01") {
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
        		this.fnc_Information(this.stInformation, this.dsPY_REGSAL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_REGSAL.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		if ( this.sKeyValue[0] != "" ) {
                    var irow = this.dsPY_REGSAL.findRowExpr("EMPL_NUMB =='"+this.sKeyValue[0]+"'&& STDS_DATE =='"+this.sKeyValue[1]+"'");
                    this.sKeyValue[0] = this.sKeyValue[1] = "";
                    if(irow<0) irow=0;
                    this.dsPY_REGSAL.set_rowposition(irow);
                }

        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_REGSAL);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdPY_REGSAL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_REGSAL, "EMPL_NAME"), "edittype", "text");	
        		this.grdPY_REGSAL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_REGSAL, "STDS_DATE"), "edittype", "date");		
        			
        	} else {
        		this.grdPY_REGSAL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_REGSAL, "EMPL_NAME"), "edittype", "none");	
        		this.grdPY_REGSAL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_REGSAL, "STDS_DATE"), "edittype", "none");		
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

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서조회
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { //사원조회
        		arrParam[0] = "HRM0002";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME,edtSHROPOS_NAME";
        		arrParam[6] = "0,1,21";
        		
        	} else if (obj.name == "grdPY_REGSAL") { // 그리드 사원
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME" || sColumnID == "EMPL_NAME") {
        			arrParam[0] = "HRM0002";
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_REGSAL";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,OPOS_CODE,OPOS_NAME";
        			arrParam[6] = "0,1,20,21";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        		}
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*-------------------------------+
         |  dsPY_REGSAL_OnColumnChanged  |
         +-------------------------------*/
        this.dsPY_REGSAL_OnColumnChanged = function(obj,e) {
        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdPY_REGSAL, "YES" ,e.oldvalue, e.columnid);

        }

        /*----------------+
         |  양식 다운로드  |
         +----------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);
        	
        }

        /*--------------+
         |  엑셀 업로드  |
         +--------------*/
        this.fn_ExcelUpload = function(obj,e){

        	if (this.fnc_DatasetChangeCheck("dsPY_REGSAL")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsPY_REGSAL");
        	this.fnc_ExcelUpload("dsPY_REGSAL", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }

        this.fn_ExcelSuccess = function (obj,e) {
        	
        	this.setWaitCursor(false);
        	this.dsPY_REGSAL.set_enableevent(false);
        	this.dsPY_REGSAL.set_updatecontrol(false);

        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        	
        		var iRow = this.dsPY_REGSAL.addRow();
        		var iExcelRow = 0;
        		this.dsPY_REGSAL.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        		this.dsPY_REGSAL.setColumn(iRow, "EMPL_NUMB", this.objDsImportTemp.getColumn(i, iExcelRow++)); // 사원번호 
        		this.dsPY_REGSAL.setColumn(iRow, "EMPL_NAME", this.objDsImportTemp.getColumn(i, iExcelRow++)); // 성명
        		this.dsPY_REGSAL.setColumn(iRow, "STDS_DATE", this.objDsImportTemp.getColumn(i, iExcelRow++)); // 기준일
        		this.dsPY_REGSAL.setColumn(iRow, "BSLY_AMOT", this.objDsImportTemp.getColumn(i, iExcelRow++)); // 기본급
        		this.dsPY_REGSAL.setColumn(iRow, "BSL1_AMOT", this.objDsImportTemp.getColumn(i, iExcelRow++)); // 시간외근무수당
        		this.dsPY_REGSAL.setColumn(iRow, "BSL2_AMOT", this.objDsImportTemp.getColumn(i, iExcelRow++)); // 임원상여
        		this.dsPY_REGSAL.setColumn(iRow, "BSL3_AMOT", this.objDsImportTemp.getColumn(i, iExcelRow++)); // 수습1개월월봉
        		this.dsPY_REGSAL.setColumn(iRow, "BSL4_AMOT", this.objDsImportTemp.getColumn(i, iExcelRow++)); // 수습2개월월봉
        		this.dsPY_REGSAL.setColumn(iRow, "BSL5_AMOT", this.objDsImportTemp.getColumn(i, iExcelRow++)); // 수습3개월월봉
        		this.dsPY_REGSAL.setColumn(iRow, "REMK_100X", this.objDsImportTemp.getColumn(i, iExcelRow++)); // 비고
        	
        	}
        	
        	this.objDsImportTemp.clear();
        	this.dsPY_REGSAL.set_updatecontrol(true);
        	this.dsPY_REGSAL.set_enableevent(true);

        	this.dsPY_REGSAL.set_rowposition(0);
        	this.grdPY_REGSAL.setFocus();
        	
        }

        this.grdPY_REGSAL_onheadclick = function(obj,e) {
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_REGSAL.addEventHandler("oncolumnchanged", this.dsPY_REGSAL_OnColumnChanged, this);
            this.dsPY_REGSAL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdPY_REGSAL.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPY_REGSAL.addEventHandler("onheadclick", this.grdPY_REGSAL_onheadclick, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHROPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHROPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.CalSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);

        };

        this.loadIncludeScript("PAYA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
