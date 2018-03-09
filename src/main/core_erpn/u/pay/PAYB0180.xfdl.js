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
                this.set_name("PAYB0180");
                this.set_titletext("급여처리LOG관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">PAY0002</Col><Col id=\"DSNAME\">dsWAGE_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMDLOG", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"WORK_CNTT\" size=\"200\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"4\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"20\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"20\" type=\"STRING\"/><Column id=\"EXPD_AMOT\" size=\"25\" type=\"BIGDECIMAL\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"STRING\"/><Column id=\"APLY_MODN\" size=\"200\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "156", "76", "110", "22", null, null, this);
            obj.set_taborder("27");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGP_CODE", "absolute", "156", "76", "110", "22", null, null, this);
            obj.set_taborder("29");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMDLOG", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("none");
            obj.set_binddataset("dsPY_PMDLOG");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("multirow");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"580\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" text=\"지급일\"/><Cell col=\"2\" text=\"급여구분\"/><Cell col=\"3\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"성명\"/><Cell col=\"5\" text=\"수당공제코드\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"수당공제명\"/><Cell col=\"7\" text=\"수당공제금액\"/><Cell col=\"8\" style=\"background: ;\" text=\"순번\"/><Cell col=\"9\" style=\"background: ;\" text=\"계산로그\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;\" text=\"bind:PAYX_DATE\" suppress=\"1\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:WAGE_CODE\" suppress=\"1\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NUMB\" suppress=\"2\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:EMPL_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" suppress=\"2\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EXPD_CODE\" suppress=\"3\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:EXPD_NAME\" suppress=\"3\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXPD_AMOT\" mask=\"0\" suppress=\"4\" suppressalign=\"last\"/><Cell col=\"8\" style=\"align:center;\" text=\"bind:SRAL_NUMB\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;\" text=\"bind:APLY_MODN\" combodisplayrowcount=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "988", "71", "72", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchItem");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "1062", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "1085", "71", "70", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "946", "71", "57", "21", null, null, this);
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

            obj = new Static("imgSearchTitle8", "absolute", "694", "71", "57", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "736", "71", "64", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "802", "71", "21", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "825", "71", "92", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_autoskip("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("급여처리LOG관리");
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

            obj = new Static("Static07", "absolute", "789", "56", "128", "4", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("33");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("34");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "665", "61", "40", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "28", "71", "63", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "83", "71", "80", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "165", "71", "21", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME", "absolute", "188", "71", "130", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "916", "61", "40", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "347", "71", "112", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("지급공제코드");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXPD_CODE", "absolute", "440", "71", "80", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREXPD_CODE", "absolute", "522", "71", "22", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXPD_NAME", "absolute", "545", "71", "120", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_autoskip("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "318", "61", "40", "41", null, null, this);
            obj.set_taborder("47");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여처리LOG관리");
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
        this.addIncludeScript("PAYB0180.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0180.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0180 급여처리LOG관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2017.01.09		황치웅		Initial Created.
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
        this.sBUTTONLIST  	= "TTFFFFTF";
        this.sPACKAGENAME 	= "PAYB0180";
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

        if (this.opener != null) {
        	this.sPAYX_DATE 	= this.parent.sPAYX_DATE;
        	this.sWAGE_CODE 	= this.parent.sWAGE_CODE;
        	this.sWORK_CNTT 	= this.parent.sWORK_CNTT;
        	this.sEMPL_NUMB  	= this.parent.sEMPL_NUMB;
        	this.sEMPL_NAME 	= this.parent.sEMPL_NAME;
        	this.sEXPD_CODE  	= this.parent.sEXPD_CODE;
        	this.sEXPD_NAME 	= this.parent.sEXPD_NAME;
        }

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.medSHRPAYX_DATE.set_value(this.sPAYX_DATE);
        	this.edtSHRWAGE_CODE.set_value(this.sWAGE_CODE);
        	this.edtSHRWAGE_NAME.set_value(this.sWORK_CNTT);
        	this.edtSHREMPL_NUMB.set_value(this.sEMPL_NUMB);
        	this.edtSHREMPL_NAME.set_value(this.sEMPL_NAME);
        	this.edtSHREXPD_CODE.set_value(this.sEXPD_CODE);
        	this.edtSHREXPD_NAME.set_value(this.sEXPD_NAME);
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	this.edtSHRWAGE_NAME.setFocus();
        	
        	if (this.fnc_Trim(this.sPAYX_DATE).length > 0) this.fn_Search();
                                       
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
        	this.fnc_DatasetClear("dsPY_PMDLOG");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_PMDLOG=dsPY_PMDLOG";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_PMDLOG.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음.
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음.
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_PMDLOG");
        	this.grdPY_PMDLOG.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	//기능 없음.

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
        	//기능 없음.
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PMDLOG", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_PMDLOG")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.edtSHRWAGE_NAME);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        		sReturnString += " WAGE_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value));
        		sReturnString += " EXPD_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREXPD_CODE.value));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
         		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));

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
        		this.fnc_Information(this.stInformation, this.dsPY_PMDLOG.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PMDLOG.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array(); 
        			arrParam[0] = "GRID,grdPY_PMDLOG,dsWAGE_CODE,WAGE_CODE";
        		this.fnc_UserComboInnerBind(arrParam);
        	
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

        	if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) { // 지급일조회
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRWAGE_NAME";
        		arrParam[5] = "medSHRPAYX_DATE,edtSHRWAGE_CODE,edtSHRWAGE_NAME,edtSHRWAGP_CODE";
        		arrParam[6] = "0,1,2,5";
        		
        	} else if ((obj.name == "imgHelpSHREXPD_CODE") || (obj.name == "edtSHREXPD_NAME")) { // 급여일지 조회 팝업
        		arrParam[0] = "PAY0012";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREXPD_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREXPD_NAME";
        		arrParam[5] = "edtSHREXPD_CODE,edtSHREXPD_NAME";
        		arrParam[6] = "0,1";

        	
        	} else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서조회
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
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        	} 
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRWAGP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGP_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPY_PMDLOG.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREXPD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREXPD_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREXPD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREXPD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("PAYB0180.xfdl");
        this.loadPreloadList();
       
    };
}
)();
