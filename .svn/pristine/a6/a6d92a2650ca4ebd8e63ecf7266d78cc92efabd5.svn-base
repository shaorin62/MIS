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
                this.set_name("PAYL0010");
                this.set_titletext("소급기준");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_CODEXD", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_REPAYX", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INCT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADJT_RAPY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_REPYEX", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WGEG_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INCT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADJT_RAPY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">INCT_CODE</Col><Col id=\"DSNAME\">dsINCT_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">WGEG_CODE</Col><Col id=\"DSNAME\">dsWGEG_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "184", "76", "86", "22", null, null, this);
            obj.set_taborder("36");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_REPYEX", "absolute", "8", "429", null, null, "25", "15", this);
            obj.set_binddataset("dsPY_REPYEX");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"99\"/><Column size=\"94\"/><Column size=\"77\"/><Column size=\"103\"/><Column size=\"178\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"직급\"/><Cell col=\"1\" text=\"인사고과등급\"/><Cell col=\"2\" text=\"인상구분\"/><Cell col=\"3\" text=\"조정비율금액\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:CPOS_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:WGEG_CODE\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:INCT_CODE\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:ADJT_RAPY\" mask=\"#,###.##\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle9", "absolute", "28", "71", "55", "21", null, null, this);
            obj.set_text("지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "83", "71", "80", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "165", "71", "21", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME", "absolute", "188", "71", "100", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_CODEXD", "absolute", "8", "128", "181", "266", null, null, this);
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsTM_CODEXD");
            obj.getSetter("autofitminwidth").set("200");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"115\" band=\"left\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"직원구분\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:CLSD_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_REPAYX", "absolute", "209", "128", null, "266", "25", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("32");
            obj.set_binddataset("dsPY_REPAYX");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"125\" band=\"left\"/><Column size=\"107\"/><Column size=\"112\"/><Column size=\"85\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"직급\"/><Cell col=\"1\" text=\"인상구분\"/><Cell col=\"2\" text=\"조정비율금액\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:center;\" text=\"bind:CPOS_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:right;\" text=\"bind:INCT_CODE\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:ADJT_RAPY\" mask=\"#,###.##\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:right;\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnInsertRow", "absolute", null, "404", "62", "21", "90", null, this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow", "absolute", null, "404", "62", "21", "25", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST00", "absolute", "8", "408", "92", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("예외대상");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST01", "absolute", "8", "107", "92", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("소급기준");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "209", "107", "200", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_visible("false");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_text("소급기준");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("41");
            obj.set_text("홈 > 급여관리 > 급여현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("42");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("51");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("53");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("54");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("55");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "573", "394", "80", "35", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "189", "181", "20", "41", null, null, this);
            obj.set_taborder("57");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("소급기준");
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
        this.addIncludeScript("PAYL0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYL0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYL0010 소급기준
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.28		고민주		Initial Created.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTTF";
        this.sPACKAGENAME = "PAYL0010";

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
        	this.edtSHRWAGE_NAME.setFocus();
        	
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
        	this.fnc_DatasetClear("dsTM_CODEXD,dsPY_REPYEX");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_CODEXD=dsTM_CODEXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	var sMethodName = "SEARCH02";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_REPYEX=dsPY_REPYEX";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXD.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsPY_REPAYX.insertRow(this.dsPY_REPAYX.rowposition + 1);
        	this.dsPY_REPAYX.setColumn(iRow, "PAYX_DATE", this.medSHRPAYX_DATE.value);
        	this.dsPY_REPAYX.setColumn(iRow, "WAGE_CODE", this.edtSHRWAGE_CODE.value);
        	this.dsPY_REPAYX.setColumn(iRow, "CLSD_CODE", this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition, "CLSD_CODE"));
        	this.grdPY_REPAYX.setCellPos(this.fnc_GridColumnIndex(this.grdPY_REPAYX, 0));
        	this.grdPY_REPAYX.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsPY_REPAYX.deleteRow(this.dsPY_REPAYX.rowposition);
        	this.grdPY_REPAYX.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_REPAYX");
        	this.grdPY_REPAYX.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsPY_REPAYX=dsPY_REPAYX:U dsPY_REPYEX=dsPY_REPYEX:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_REPAYX.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_CODEXD,dsPY_REPAYX,dsPY_REPYEX", this);

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

        	if (this.fnc_DatasetChangeCheck("dsTM_CODEXD,dsPY_REPAYX,dsPY_REPYEX")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_DATE.value)) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.medSHRPAYX_DATE);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsPY_REPAYX.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	var sQuestionText = "직급:" + this.fnc_Trim(this.dsPY_REPAYX.getColumn(this.dsPY_REPAYX.rowposition, "CPOS_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_REPAYX,dsPY_REPYEX")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_REPAYX.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_REPAYX.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REPAYX.getColumn(i, "CPOS_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직급", this.dsPY_REPAYX, i, this.grdPY_REPAYX, "CPOS_CODE");
        		}
        	}
        	for (var i = 0; i < this.dsPY_REPYEX.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_REPYEX.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REPYEX.getColumn(i, "CPOS_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직급", this.dsPY_REPYEX, i, this.grdPY_REPYEX, "CPOS_CODE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REPYEX.getColumn(i, "INCT_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "인상구분", this.dsPY_REPYEX, i, this.grdPY_REPYEX, "INCT_CODE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REPYEX.getColumn(i, "ADJT_RAPY"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조정비율금액", this.dsPY_REPYEX, i, this.grdPY_REPYEX, "ADJT_RAPY");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_REPYEX.getColumn(i, "WGEG_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "인사고과등급", this.dsPY_REPYEX, i, this.grdPY_REPYEX, "WGEG_CODE");
        		}
        	}
        	return true;

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value));
        		sReturnString += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value));

        	} else if (sKind == "SEARCH01") {

        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value));
        		sReturnString += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value));
        		sReturnString += " CLSD_CODE=" + this.fnc_Quote(this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition, "CLSD_CODE"));

        	} else if (sKind == "SEARCH02") {

        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value));
        		sReturnString += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value));

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);

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

        	} else if (sMethodName == "SAVE00") {

        		this.fn_KeyFieldDisible(this.dsPY_REPAYX);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "SAVE01") {

        		this.fn_KeyFieldDisible(this.dsPY_REPYEX);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdPY_REPAYX,dsINCT_CODE,INCT_CODE";
        		arrParam[1] = "GRID,grdPY_REPYEX,dsINCT_CODE,INCT_CODE";
        		arrParam[2] = "GRID,grdPY_REPYEX,dsWGEG_CODE,WGEG_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) {
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRWAGE_NAME";
        		arrParam[5] = "medSHRPAYX_DATE,edtSHRWAGE_CODE,edtSHRWAGE_NAME";
        		arrParam[6] = "0,1,2";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}

        	if (obj.name == "grdPY_REPAYX") {
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "CPOS_NAME")
        		{
        			arrParam[0] = "TMM1000";
        			arrParam[1] = "CPOS_CODE";
        			arrParam[2] = "CPOS_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_REPAYX";
        			arrParam[5] = "CPOS_CODE,CPOS_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        	if (obj.name == "grdPY_REPYEX") {
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "CPOS_NAME")
        		{
        			arrParam[0] = "TMM1000";
        			arrParam[1] = "CPOS_CODE";
        			arrParam[2] = "CPOS_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_REPYEX";
        			arrParam[5] = "CPOS_CODE,CPOS_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        //그리드 팝업 시 필요한 이벤트
        this.dsPY_REPAYX_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "CPOS_NAME") this.fn_HelpDialoge(this.grdPY_REPAYX, "YES" ,e.oldvalue, e.columnid);

        }
        this.dsPY_REPYEX_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "CPOS_NAME") this.fn_HelpDialoge(this.grdPY_REPYEX, "YES" ,e.oldvalue, e.columnid);

        }

        this.dsTM_CODEXD_onrowposchanged = function(obj,e){

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPY_REPAYX");

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_REPAYX=dsPY_REPAYX";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_REPAYX.setFocus();
        }

        /*------------------+
         |  행추가  |
         +------------------*/
        this.fn_btnAddRow_OnClick = function (obj,e) {

        	var iRow = this.dsPY_REPYEX.addRow();

        	this.dsPY_REPYEX.setColumn(iRow, "PAYX_DATE", this.medSHRPAYX_DATE.value);
        	this.dsPY_REPYEX.setColumn(iRow, "WAGE_CODE", this.edtSHRWAGE_CODE.value);
        	this.grdPY_REPYEX.setFocus();

        	return;
        }

        /*------------------+
         |  행삭제  |
         +------------------*/
        this.fn_btnDelRow_OnClick = function (obj,e) {

        	if (this.dsPY_REPYEX.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	this.dsPY_REPYEX.deleteRow(this.dsPY_REPYEX.rowposition);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_CODEXD.addEventHandler("onrowposchanged", this.dsTM_CODEXD_onrowposchanged, this);
            this.dsPY_REPAYX.addEventHandler("oncolumnchanged", this.dsPY_REPAYX_oncolumnchanged, this);
            this.dsPY_REPYEX.addEventHandler("oncolumnchanged", this.dsPY_REPYEX_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPY_REPYEX.addEventHandler("oncellclick", this.fn_DetailView, this);
            this.grdPY_REPYEX.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdTM_CODEXD.addEventHandler("oncellclick", this.fn_DetailView, this);
            this.grdPY_REPAYX.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btnInsertRow.addEventHandler("onclick", this.fn_btnAddRow_OnClick, this);
            this.btnDeleteRow.addEventHandler("onclick", this.fn_btnDelRow_OnClick, this);
            this.stGROP_LIST00.addEventHandler("onclick", this.stGROP_LIST00_onclick, this);
            this.stGROP_LIST01.addEventHandler("onclick", this.stGROP_LIST00_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYL0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
