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
                this.set_name("TMMA0020");
                this.set_titletext("세부코드관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_CODEXH", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CDGB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COCD_LNTH\" type=\"STRING\" size=\"256\"/><Column id=\"RE1F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE1T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE1O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE1F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE2F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE2T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE2O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE2F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE3F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE3T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE3O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE3F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE4F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE4T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE4O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE4F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE5F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE5T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE5O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE5F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE6F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE6T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE6O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE6F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE7F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE7T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE7O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE7F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE8F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE8T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE8O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE8F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE9F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE9T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE9O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE9F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"R10F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"R10T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"R10O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"R10F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"256\"/><Column id=\"ISET_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"DSNAME\">dsREXT_CODE</Col><Col id=\"CODEID\">REXT_CODE</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"USEYN\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_CODEXD", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"COMD_ENNM\" type=\"STRING\" size=\"256\"/><Column id=\"CRTE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF6_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF7_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF8_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF9_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"RE10_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"OERP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_CODEXH", "absolute", "8", "128", "200", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsTM_CODEXH");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"106\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"공통코드\"/><Cell col=\"1\" text=\"공통코드명\"/></Band><Band id=\"body\"><Cell style=\"cursor:hand;\" text=\"bind:COMM_CODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:COMM_CDNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle6", "absolute", "28", "71", "82", "21", null, null, this);
            obj.set_text("공통코드명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "393", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("dropdown");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Grid("grdTM_CODEXD", "absolute", "228", "128", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("3");
            obj.set_binddataset("dsTM_CODEXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"세부코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"세부코드명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"영문명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"생성일\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_edit\" text=\"폐기일\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"REF1_FILD\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"REF2_FILD\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"REF3_FILD\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"REF4_FILD\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"REF5_FILD\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_edit\" text=\"REF6_FILD\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_edit\" text=\"REF7_FILD\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_edit\" text=\"REF8_FILD\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_edit\" text=\"REF9_FILD\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_edit\" text=\"RE10_FILD\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_edit\" text=\"(구)ERP코드\"/><Cell col=\"16\" cssclass=\"Cellgrd_WF_edit\" text=\"정렬순서\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:COMD_CODE\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:COMD_CDNM\" editclipmode=\"includespace\" editautoselect=\"true\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:COMD_ENNM\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:CRTE_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:WAST_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:REF1_FILD\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:REF2_FILD\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:REF3_FILD\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:REF4_FILD\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:REF5_FILD\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:REF6_FILD\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:REF7_FILD\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:REF8_FILD\"/><Cell col=\"13\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:REF9_FILD\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:RE10_FILD\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:OERP_CODE\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"text\" style=\"align:right;\" text=\"bind:SORT_ORDR\"/><Cell col=\"17\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"100\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Image01", "absolute", "338", "71", "74", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("시스템");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOMM_CDNM", "absolute", "109", "71", "200", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("세부코드관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("21");
            obj.set_text("홈 >공통관리>공통관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("29");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "198", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "228", "107", "198", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("세부코드관리");
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
        this.addIncludeScript("TMMA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0020 세부코드 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.26. 김석두(표준화 최종 완료)
         *   2016.09.26. 김준수 주석 수정.
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
         *  화면 변수 선언부  
         *********************/
        this.sBUTTONLIST = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMA0020";
        	
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.edtSHRCOMM_CDNM.setFocus();

        	/*공통코드관리에서 호출 시*/
        	if(typeof (this.getOwnerFrame()["openParameter"]) != "undefined" && (this.getOwnerFrame()["openParameter"]).length> 0 ) {
        		var openParameter = this.getOwnerFrame()["openParameter"];
        		this.edtSHRCOMM_CDNM.set_value(openParameter[0]);
        		
        		this.fn_Search();
        	}

        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();

        }

        /*-------------------------+
         |  03.조회 버튼 클릭 時 |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_searchItemCheck()) return;
        	this.fnc_DatasetClear("dsTM_CODEXH,dsTM_CODEXD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_CODEXH=dsTM_CODEXH";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXH.setFocus(); 

        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {

        	if (this.dsTM_CODEXH.getRowCount() < 1) {
        		this.fnc_Message("TMM032");
        		return false;
        	}

        	var iRow = this.dsTM_CODEXD.insertRow(this.dsTM_CODEXD.rowposition + 1);
        	this.dsTM_CODEXD.setColumn(iRow, "COMM_CODE", this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_CODE"));
        	this.dsTM_CODEXD.setColumn(iRow, "CRTE_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	this.dsTM_CODEXD.setColumn(iRow, "SORT_ORDR", this.dsTM_CODEXD.getRowCount());

        	this.fnc_GridSetCellFocus(this.grdTM_CODEXD, "COMD_CODE");

        }
        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsTM_CODEXD.deleteRow(this.dsTM_CODEXD.rowposition);
        	this.grdTM_CODEXD.setFocus();

        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj){

        	this.fnc_DataSetCancel("dsTM_CODEXD");
        	this.grdTM_CODEXD.setFocus();

        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_CODEXD=dsTM_CODEXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXD.setFocus();

        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);

        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時 |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        
        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_CODEXD",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);

        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){ 

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj){

        	this.fnc_EditFocus(obj);
        	
        }

        /*****************************************************************************************************
         *                                      공통 Function 처리 부분                                     *
         *****************************************************************************************************/
        /*---------------------+
         |  조회 필수 체크!  |
         +---------------------*/
        this.fn_searchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_CODEXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*--------------------+
         |  삭제 여부 체크! |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTM_CODEXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = "세부코드명:" +this.fnc_Trim(this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition, "COMD_CDNM"));
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_CODEXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsTM_CODEXD.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsTM_CODEXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXD.getColumn(i, "COMD_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "세부코드", this.dsTM_CODEXD, i, this.grdTM_CODEXD, "EMPL_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXD.getColumn(i, "COMD_CDNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "세부코드명", this.dsTM_CODEXD, i, this.grdTM_CODEXD, "PERS_AMOT");
        		}

        	}

        	return true;

        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	//Head 조회
        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " COMM_CDNM=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCOMM_CDNM.value)); //공통코드명
        		sReturnString += " SYST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSYST_CODE.value)); //시스템구분	

        	//Detail 조회
        	} else if (sKind == "SEARCH01") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " COMM_CODE=" + this.fnc_Quote(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_CODE")); //공통코드

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	}

        	return sReturnString;

        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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

        		this.fnc_Information(this.stInformation, this.dsTM_CODEXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_CODEXH.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.stInformation1, this.dsTM_CODEXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} else if (sMethodName == 'SAVE00') {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*----------------------------------+
         |  헤더 변경 시 상세 내용 검색  |
         +----------------------------------*/
        this.fn_KeyFieldDisibleHead = function (obj) {

        	if (this.dsTM_CODEXH.getRowCount() < 1) return;
        	this.fnc_DatasetClear('dsTM_CODEXD');
        	this.fn_DetailGridColumnSet();

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_CODEXD=dsTM_CODEXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*--------------------------------------+
         |  Detail Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTM_CODEXD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_CODEXD, "COMD_CODE"), "edittype", "normal");
        	} else {
        		this.grdTM_CODEXD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_CODEXD, "COMD_CODE"), "edittype", "none");
        	}

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/

        /*-------------------------------------------------------------------+
         |  공통코드 Header Row Pos Change 시 Detail 자료 변경 여부 체크 |
         +-------------------------------------------------------------------*/
        this.dsTM_CODEXH_canrowposchange = function(obj,e) {

        	if (e.newrow < 0) return;
        	if (this.fnc_DatasetChangeCheck("dsTM_CODEXD")) if (this.fnc_Message("TMM023") == false) return false;

        }

        /*----------------------------------------------------------+
         |  공통코드 참조 필드 정보 기반 상세 Grid Head Setting |
         +----------------------------------------------------------*/
        this.fn_DetailGridColumnSet = function() {

        	var iCharCnt  = 4;
        	var iHeadRow  = this.dsTM_CODEXH.rowposition;
        	var iColWidth = 0;
        	var sEditType = "";
        	var sDispType = "";

        	var arrParam1 = new Array();
        	var arrParam2 = new Array();
        	
        	var sRXX       = "";
        	var sFXX       = "";
        	var sRXXF_DESC = "";
        	var sRXXT_CODE = "";
        	var sRXXF_CMCD = "";
        	
        	var nRowRxxtCode = -1;	//입력형태코드_보조필드_참조용 임시 Row
        	var sREF2_FILD   = "";	//입력형태코드_보조필드2(데이터타입)

        	for (var i = 1; i < 11; i++) {

        		sRXX = (i < 10) ? "E" + i : "" + i;
        		sFXX = (i < 10) ? "F" + i : "" + i;

        		sRXXF_DESC = this.dsTM_CODEXH.getColumn(iHeadRow, "R" + sRXX + "F_DESC");	//설명
        		sRXXT_CODE = this.dsTM_CODEXH.getColumn(iHeadRow, "R" + sRXX + "T_CODE");	//입력형태코드_보조필드1(입력형태)
        		sRXXF_CMCD = this.dsTM_CODEXH.getColumn(iHeadRow, "R" + sRXX + "F_CMCD");	//공통코드

        		//필드제목이 없으면 컬럼 히든 처리를 하는데, width를 0으로 준다.
        		if (sRXXF_DESC.length < 1) {
        			this.grdTM_CODEXD.setFormatColProperty(iCharCnt+i,"size",0);
        			continue;
        		}

        		//Title 글자수에 따른 Column Widtn 처리
        		iColWidth = sRXXF_DESC.length * 14;
        		iColWidth = (iColWidth < 80) ? 80 : iColWidth;

        		this.grdTM_CODEXD.setFormatColProperty(iCharCnt + i, "size", iColWidth);
        		this.grdTM_CODEXD.setCellProperty("head", iCharCnt + i,"text", sRXXF_DESC);

        		//그리드 컬럼 설정
        		sEditType = sRXXT_CODE;
        		sDispType = sRXXT_CODE;;
        		
        		sEditType = (sEditType == "")         ? "normal"      : sEditType;
        		sEditType = (sEditType == "select")   ? "combo"       : sEditType;
        		sEditType = (sEditType == "calendar") ? "date"        : sEditType;
        		sEditType = (sEditType == "number")   ? "masknumber"  : sEditType;
        		
        		sDispType = (sDispType == "select")   ? "combo"       : sEditType;
        		sDispType = (sDispType == "calendar") ? "date"        : sEditType;
        		sDispType = (sDispType == "")         ? "normal"      : sEditType;

        		this.grdTM_CODEXD.setCellProperty("body", iCharCnt + i, "displaytype", sDispType);
        		this.grdTM_CODEXD.setCellProperty("body", iCharCnt + i, "edittype",    sEditType);
        		
        		//Cell Align Setting(2016.11.22 by302)
        		nRowRxxtCode = this.dsREXT_CODE.findRow("REF1_FILD", sRXXT_CODE);
        		sREF2_FILD   = this.dsREXT_CODE.getColumn(nRowRxxtCode, "REF2_FILD");	//입력형태코드_보조필드2(데이터타입)
        		
        		if (sRXXT_CODE == "checkbox" || sRXXT_CODE == "calendar" || sRXXT_CODE == "select" ) {
        		
        			this.grdTM_CODEXD.setCellProperty("body", iCharCnt + i, "style", "align:center");
        		
        		} else if (sREF2_FILD == "number") {
        		
        			this.grdTM_CODEXD.setCellProperty("body", iCharCnt + i, "style", "align:right");
        		
        		} else { //text
        		
        			this.grdTM_CODEXD.setCellProperty("body", iCharCnt + i, "style", "align:left");
        		
        		}

        		//Calendar & Combo Setting
        		if (sRXXT_CODE == "calendar") {

        			this.grdTM_CODEXD.setCellProperty("body", iCharCnt + i, "calendardisplaynulltype", "none");

        		} else if (sRXXT_CODE == "select") {
        			
        			// 세부 콤보 생성
        			arrParam1[0] = "ds" + "RE" + sFXX + "_FILD";
        			arrParam1[1] = "TMM0005";
        			arrParam1[2] = "EMPTY";
        			arrParam1[3] = "0";
        			arrParam1[4] = sRXXF_CMCD;

        			// Bind 처리
        			arrParam2[0] = "GRID,grdTM_CODEXD," + arrParam1[0] + ",RE" + sFXX + "_FILD";
        			this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        		
        		}

        	}

        }

        /*---------------------------------------------------------+
         |  편의상 공통코드/명 입력 후 EnterKey  시 조회 처리 |
         +---------------------------------------------------------*/
        this.edtSHRCOMM_CDNM_onkeydown = function(obj,e) {

        	if (e.keycode != 13) return;
        	if (this.fnc_Length(this.fnc_Trim(obj.value)) > 0) this.fn_Search();

        }

        /*-------------------------------------------------------------------------+
         |  공통코드 DoubleClick 시 공통코드관리 호출 처리 (2016.11.22 by302)  |
         +-------------------------------------------------------------------------*/
        this.grdTM_CODEXH_oncelldblclick = function(obj,e) {

        	if (this.grdTM_CODEXH.getBindCellIndex("body","COMM_CODE") == e.col) {

        		var arrParam = new Array();  
        			arrParam[0] = this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_CODE");
        		this.fnc_OpenMenu("MTMMA0010", arrParam);

        	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_CODEXH.addEventHandler("onrowposchanged", this.fn_KeyFieldDisibleHead, this);
            this.dsTM_CODEXH.addEventHandler("canrowposchange", this.dsTM_CODEXH_canrowposchange, this);
            this.dsTM_CODEXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTM_CODEXH.addEventHandler("oncelldblclick", this.grdTM_CODEXH_oncelldblclick, this);
            this.cmbSHRSYST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOMM_CDNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOMM_CDNM.addEventHandler("onkeydown", this.edtSHRCOMM_CDNM_onkeydown, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
