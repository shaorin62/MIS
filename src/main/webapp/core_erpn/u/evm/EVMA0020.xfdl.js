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
                this.set_name("EVMA0020");
                this.set_titletext("평가일정관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_TEVPXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EVAL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EVTA_BEDE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EVTA_ENDD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BUOE_BEDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BUOE_EDTM\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EVIN_BEDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EVIN_EDTM\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSE_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("39");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_TEVPXM", "absolute", "8", "128", null, null, "25", "121", this);
            obj.set_binddataset("dsEV_TEVPXM");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"평가명\"/><Cell col=\"1\" displaytype=\"text\" text=\"평가기준일\"/><Cell col=\"2\" displaytype=\"text\" text=\"평가대상시작일\"/><Cell col=\"3\" displaytype=\"text\" text=\"평가대상종료일\"/><Cell col=\"4\" displaytype=\"text\" text=\"목표입력시작일\"/><Cell col=\"5\" displaytype=\"text\" text=\"목표입력종료일\"/><Cell col=\"6\" displaytype=\"text\" text=\"업적평가시작일\"/><Cell col=\"7\" displaytype=\"text\" text=\"업적평가종료일\"/><Cell col=\"8\" displaytype=\"text\" text=\"마감여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"bind:EVAL_NAME\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:STDS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" style=\"align: center;\" text=\"bind:EVTA_BEDE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" style=\"align: center;\" text=\"bind:EVTA_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:BUOE_BEDT\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center;\" text=\"bind:BUOE_EDTM\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" style=\"align:center;\" text=\"bind:EVIN_BEDT\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" style=\"align: center;\" text=\"bind:EVIN_EDTM\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:CLSE_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREVAL_NAME", "absolute", "83", "71", "300", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", "71", "71", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("평가명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", null, null, "91", "25", "15", this);
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("stBSNS_NUMB", "absolute", "28", null, "104", "21", null, "50", this);
            obj.set_taborder("44");
            obj.set_text("평가대상시작일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "316", null, "103", "21", null, "50", this);
            obj.set_taborder("46");
            obj.set_text("평가대상종료일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "605", null, "104", "21", null, "50", this);
            obj.set_taborder("47");
            obj.set_text("목표입력시작일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "892", null, "103", "21", null, "50", this);
            obj.set_taborder("48");
            obj.set_text("목표입력종료일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "605", null, "104", "21", null, "24", this);
            obj.set_taborder("50");
            obj.set_text("마감여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "28", null, "103", "21", null, "24", this);
            obj.set_taborder("52");
            obj.set_text("업적평가시작일");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Label_P.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "315", null, "103", "21", null, "24", this);
            obj.set_taborder("54");
            obj.set_text("업적평가종료일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSTDS_DATE", "absolute", "999", null, "100", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_autoselect("true");

            obj = new Edit("edtEVAL_NAME", "absolute", "423", null, "389", "21", null, "76", this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "316", null, "103", "21", null, "76", this);
            obj.set_taborder("68");
            obj.set_text("평가명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSYNT_EACD", "absolute", "135", null, "120", "21", null, "76", this);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_maxlength("3");
            obj.set_autoselect("true");
            obj.style.set_align("center");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "28", null, "104", "21", null, "76", this);
            obj.set_taborder("69");
            obj.set_text("인사평가코드");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "892", null, "103", "21", null, "76", this);
            obj.set_taborder("75");
            obj.set_text("평가기준일");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Label_P.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("80");
            obj.set_text("평가일정관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("81");
            obj.set_text("홈 > 인사관리 > 평가기준정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("82");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("83");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("84");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("85");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("86");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("87");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("88");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("89");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("90");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("91");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "573", "596", "80", "15", null, null, this);
            obj.set_taborder("93");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEVIN_EDTM", "absolute", "423", null, "100", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_autoselect("true");

            obj = new Calendar("calEVIN_BEDT", "absolute", "135", null, "120", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_autoselect("true");

            obj = new Calendar("calEVTA_ENDD", "absolute", "423", null, "100", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_autoselect("true");

            obj = new Calendar("calBUOE_EDTM", "absolute", "999", null, "100", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_autoselect("true");

            obj = new Calendar("calBUOE_BEDT", "absolute", "712", null, "100", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_autoselect("true");

            obj = new Calendar("calEVTA_BEDE", "absolute", "135", null, "120", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_autoselect("true");

            obj = new CheckBox("chkCLSE_YSNO", "absolute", "712", null, "16", "21", null, "24", this);
            obj.set_taborder("11");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("평가일정관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtSYNT_EACD","value","dsEV_TEVPXM","SYNT_EACD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtEVAL_NAME","value","dsEV_TEVPXM","EVAL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","calSTDS_DATE","value","dsEV_TEVPXM","STDS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","calEVTA_BEDE","value","dsEV_TEVPXM","EVTA_BEDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","calEVTA_ENDD","value","dsEV_TEVPXM","EVTA_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","calBUOE_BEDT","value","dsEV_TEVPXM","BUOE_BEDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","calBUOE_EDTM","value","dsEV_TEVPXM","BUOE_EDTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","calEVIN_BEDT","value","dsEV_TEVPXM","EVIN_BEDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","calEVIN_EDTM","value","dsEV_TEVPXM","EVIN_EDTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","chkCLSE_YSNO","value","dsEV_TEVPXM","CLSE_YSNO");
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
        this.addIncludeScript("EVMA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("EVMA0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	EVMA0020 평가일정관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.05		김석영		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         *********************************** *****************************************************************
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

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTF";
        this.sPACKAGENAME 	= "EVMA0020";
        this.sRow           = 0;

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = "";   //Form의 Title 정보
        	this.sFORMLOCATION = "";   //Form의 Location 정보
        	this.sUSERLAVEL    = "";   //Form의 Location 정보
        	
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
        this.fn_FormLoadSetting = function (obj,e){
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	this.fn_Search();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        	
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsEV_TEVPXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsEV_TEVPXM=dsEV_TEVPXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdEV_TEVPXM.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e){
        	var nRow = this.dsEV_TEVPXM.addRow();
        	this.dsEV_TEVPXM.setColumn(nRow, "EVTA_BEDE", " ")
        	this.edtEVAL_NAME.setFocus();
        	
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsEV_TEVPXM.deleteRow(this.dsEV_TEVPXM.rowposition);
        	this.grdEV_TEVPXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsEV_TEVPXM");
        	this.grdEV_TEVPXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

            this.sRow = this.grdEV_TEVPXM.currentrow;
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsEV_TEVPXM=dsEV_TEVPXM:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        	this.grdEV_TEVPXM.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsEV_TEVPXM", this);
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

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	if (this.fnc_DatasetChangeCheck("dsEV_TEVPXM")) {
        		return this.fnc_Message("TMM023");
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsEV_TEVPXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText = "평가명 : ("+this.grdEV_TEVPXM.getCellText(this.grdEV_TEVPXM.currentrow, this.grdEV_TEVPXM.getBindCellIndex( "body", "EVAL_NAME")) + ")";
        	
        	if (this.dsEV_TEVPXM.getColumn(this.grdEV_TEVPXM.currentrow, "CLSE_YSNO") == "1")	{
        		return this.fnc_CheckPostAction("YEA007", "", this.dsEV_TEVPXM , this.grdEV_TEVPXM.currentrow, this.edtEVAL_NAME, "");
        	}	

        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsEV_TEVPXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsEV_TEVPXM.getRowCount(); i++) {
        		
        		if (this.dsEV_TEVPXM.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TEVPXM.getColumn(i, "EVAL_NAME"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "평가명", this.dsEV_TEVPXM , i, this.edtEVAL_NAME, "");
        		}		

        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TEVPXM.getColumn(i, "STDS_DATE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "기준일", this.dsEV_TEVPXM , i, this.calSTDS_DATE, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TEVPXM.getColumn(i, "EVTA_BEDE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM025", "평가대상시작일", this.dsEV_TEVPXM , i, this.calEVTA_BEDE, "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TEVPXM.getColumn(i, "EVTA_ENDD"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM025", "평가대상종료일", this.dsEV_TEVPXM , i, this.calEVTA_ENDD, "");
        		}		
        		if (this.calEVTA_BEDE.value > this.calEVTA_ENDD.value) {
        			return this.fnc_SearchCheckPostAction("TMM028", "평가대상시작일,평가대상종료일", this.calEVTA_ENDD);
        		}		
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TEVPXM.getColumn(i, "BUOE_BEDT"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM025", "목표입력시작일", this.dsEV_TEVPXM , i, this.calBUOE_BEDT, "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TEVPXM.getColumn(i, "BUOE_EDTM"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM025", "목표입력종료일", this.dsEV_TEVPXM , i, this.calBUOE_EDTM, "");
        		}		
        		if (this.calBUOE_BEDT.value > this.calBUOE_EDTM.value) {
        			return this.fnc_SearchCheckPostAction("TMM028", "목표입력시작일,목표입력종료일", this.calBUOE_EDTM);
        		}		
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TEVPXM.getColumn(i, "EVIN_BEDT"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM025", "업적평가시작일", this.dsEV_TEVPXM , i, this.calEVIN_BEDT, "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TEVPXM.getColumn(i, "EVIN_EDTM"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM025", "업적평가종료일", this.dsEV_TEVPXM , i, this.calEVIN_EDTM, "");
        		}		
        		if (this.calEVIN_BEDT.value > this.calEVIN_EDTM.value) {
        			return this.fnc_SearchCheckPostAction("TMM028", "업적평가시작일,업적평가종료일", this.calEVIN_EDTM);
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
        		sReturnString += " EVAL_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREVAL_NAME.value));  //사업장명 

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);

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

        	if (sMethodName == "SEARCH00"){
        		this.fnc_Information(this.stInformation, this.dsEV_TEVPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsEV_TEVPXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		this.dsEV_TEVPXM.set_rowposition(this.sRow); 
        		this.sRow = 0;
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e){

        	if (e.newrow < 0) return;

        	var iRow      = obj.rowposition;
        	var sClseYsno = this.fnc_Trim(this.dsEV_TEVPXM.getColumn(iRow, "CLSE_YSNO"));
        	
            this.fn_ReadonlySetting(sClseYsno);
            
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------------+
         |  데이터셋 변경 시 팝업호출  |
         +-----------------------------*/
        this.chkCLSE_YSNO_onclick = function(obj,e)
        {
        	this.fn_ReadonlySetting(obj.value);
        }

        
        this.fn_ReadonlySetting = function (sClseYsno) 
        {
        	if (sClseYsno == "1") {
        		this.fnc_SetReadonly(this.edtEVAL_NAME, true);
        		this.fnc_SetReadonly(this.calSTDS_DATE, true);
        		this.fnc_SetReadonly(this.calEVTA_BEDE, true);
        		this.fnc_SetReadonly(this.calEVTA_ENDD, true);
        		this.fnc_SetReadonly(this.calBUOE_BEDT, true);
        		this.fnc_SetReadonly(this.calBUOE_EDTM, true);
        		this.fnc_SetReadonly(this.calEVIN_BEDT, true);
        		this.fnc_SetReadonly(this.calEVIN_EDTM, true);
        	} else {
        		this.fnc_SetReadonly(this.edtEVAL_NAME, false);
        		this.fnc_SetReadonly(this.calSTDS_DATE, false);
        		this.fnc_SetReadonly(this.calEVTA_BEDE, false);
        		this.fnc_SetReadonly(this.calEVTA_ENDD, false);
        		this.fnc_SetReadonly(this.calBUOE_BEDT, false);
        		this.fnc_SetReadonly(this.calBUOE_EDTM, false);
        		this.fnc_SetReadonly(this.calEVIN_BEDT, false);
        		this.fnc_SetReadonly(this.calEVIN_EDTM, false);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsEV_TEVPXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHREVAL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEVAL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSYNT_EACD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.st_FormLocation.addEventHandler("onclick", this.st_FormLocation_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calEVIN_EDTM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calEVIN_BEDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calEVTA_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calBUOE_EDTM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calBUOE_BEDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calEVTA_BEDE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkCLSE_YSNO.addEventHandler("onclick", this.chkCLSE_YSNO_onclick, this);

        };

        this.loadIncludeScript("EVMA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
