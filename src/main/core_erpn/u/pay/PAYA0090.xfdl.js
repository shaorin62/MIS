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
                this.set_name("PAYA0090");
                this.set_titletext("지급항목정보");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_PAYEXP_M", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGP_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_NAME\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PAYEXP_A", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGP_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"APLY_MODN\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEXPD_NAME", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_NAME1\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME2\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFUNC_NAME", this);
            obj._setContents("<ColumnInfo><Column id=\"FUNC_NAME1\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"FUNC_NAME2\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WAGP_CODE</Col><Col id=\"DSNAME\">dsWAGP_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">PAY0008</Col><Col id=\"DSNAME\">dsSTDS_YMTH</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PAYEXP_M", "absolute", "8", "128", "173", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_PAYEXP_M");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"180\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" text=\"급여형태\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:CLSD_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEXPD_NAME", "absolute", null, "128", "267", "184", "25", null, this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsEXPD_NAME");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" celltype=\"head\" displaytype=\"text\" text=\"지급항목\"/></Band><Band id=\"body\"><Cell displaytype=\"button\" edittype=\"button\" style=\"align:center middle;color:#4d4d4dff;font:9 dotum;\" text=\"bind:EXPD_NAME1\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" style=\"align:center middle;color:#4d4d4dff;font:9 dotum;\" text=\"bind:EXPD_NAME2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFUNC_NAME", "absolute", null, "327", "267", null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsFUNC_NAME");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" celltype=\"head\" displaytype=\"text\" text=\"정의함수\"/></Band><Band id=\"body\"><Cell displaytype=\"button\" edittype=\"button\" style=\"align: ;color:#4d4d4dff;font:9 dotum;\" text=\"bind:FUNC_NAME1\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" style=\"color: ;font:9 dotum;\" text=\"bind:FUNC_NAME2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit1", "absolute", "201", null, null, "29", "312", "141", this);
            obj.set_enable("false");
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_value("계산식");
            obj.style.set_align("center");
            obj.style.setStyleValue("background", "disabled", "transparent URL('theme://images/ico_grd_edit.png') left top");
            obj.style.setStyleValue("color", "disabled", "black");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "27", "71", "76", "21", null, null, this);
            obj.set_text("급여구분");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWAGP_CODE", "absolute", "95", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("dropdown");
            obj.set_index("-1");

            obj = new Static("Image0", "absolute", "244", "71", "68", "21", null, null, this);
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTDS_YMTH", "absolute", "312", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("dropdown");
            obj.set_index("-1");

            obj = new Grid("grdPY_PAYEXP_A", "absolute", "201", "128", null, null, "312", "185", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.set_binddataset("dsPY_PAYEXP_A");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"100\"/><Column size=\"460\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" text=\"지급항목\"/><Cell col=\"2\" displaytype=\"text\" text=\"계산식\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:EXPD_NAME\" autosizerow=\"default\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:APLY_MODN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("지급항목정보");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("20");
            obj.set_text("홈 > 급여관리 > 지급항목정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("28");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "87", "61", "8", "41", null, null, this);
            obj.set_taborder("31");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "181", "173", "20", "41", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "875", "173", "20", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "1007", "312", "80", "15", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtAPLY_MODN", "absolute", "201", null, null, "127", "312", "15", this);
            obj.set_imemode("native");
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_value("TextArea0");
            obj.set_cssclass("styFormItemText");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "573", "532", "80", "15", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("지급항목정보");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("txtAPLY_MODN_value","txtAPLY_MODN","value","dsPY_PAYEXP_A","APLY_MODN");
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
        this.addIncludeScript("PAYA0090.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYA0090.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYA0090 지급항목정보
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.22		박철영		Initial Created.
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
        this.sBUTTONLIST  = "TTFFTTTF";
        this.sPACKAGENAME = "PAYA0090";

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
        	this.dsUserCombo.setColumn(0, "PARAM", this.cmbSHRWAGP_CODE.value);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	this.cmbSHRWAGP_CODE.setFocus();

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
        	this.fnc_DatasetClear("dsPY_PAYEXP_A");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_PAYEXP_M=dsPY_PAYEXP_M";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdPY_PAYEXP_A.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_PAYEXP_A");
        	this.grdPY_PAYEXP_A.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_PAYEXP_A=dsPY_PAYEXP_A:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_PAYEXP_A.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PAYEXP_A", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_PAYEXP_A")) {
        		if (this.fnc_Message("TMM023") == false) return false;
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

        	if (!this.fnc_DatasetChangeCheck("dsPY_PAYEXP_A")) {
        		this.fnc_Message("TMM003");
        		return false;
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
        		sReturnString += " WAGP_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWAGP_CODE.value));
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSTDS_YMTH.value));

        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " WAGP_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWAGP_CODE.value));
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSTDS_YMTH.value));

        	} else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " WAGP_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWAGP_CODE.value));
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSTDS_YMTH.value));
        		sReturnString += " CLSD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_PAYEXP_M.getColumn(this.dsPY_PAYEXP_M.rowposition,"CLSD_CODE")));

        	} else if (sKind == "SEARCH03") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

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
        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPY_PAYEXP_A=dsPY_PAYEXP_A";
        		var sArgument   = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        		this.fnc_Information(this.stInformation, this.dsPY_PAYEXP_M.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PAYEXP_M.getCaseCount("dataset.getRowLevel(currow)==0"));

        	}else if (sMethodName == "SEARCH01") {
        		var sMethodName = "SEARCH03";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsFUNC_NAME=dsFUNC_NAME";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        		this.fn_KeyFieldDisible(this.dsPY_PAYEXP_M);

        	} else if (sMethodName == "SAVE00") {

         		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	//코드 바인딩
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRWAGP_CODE,dsWAGP_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRSTDS_YMTH,dsSTDS_YMTH,0";
        		this.fnc_UserComboInnerBind(arrParam);
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	this.dsPY_PAYEXP_A.filter("CLSD_CODE == '" + this.fnc_Trim(this.dsPY_PAYEXP_M.getColumn(this.dsPY_PAYEXP_M.rowposition, "CLSD_CODE")) + "'");

        	this.dsPY_PAYEXP_A.set_rowposition(0);

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsEXPD_NAME=dsEXPD_NAME";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------+
         |  급여코드 변경시       |
         +------------------------*/
        this.cmbSHRWAGP_CODE_onitemchanged = function (obj,e) {
        	this.fn_GetCombo();
        	this.fn_Search();

        }

        /*------------------------+
         |  기준년월 변경시       |
         +------------------------*/
        this.cmbSHRSTDS_YMTH_onitemchanged = function(obj,e) {
        	this.fn_Search();

        }

        /*------------------------+
         |  계산식 작성           |
         +------------------------*/
        this.fn_SetExpression = function (obj,e) {

        	// 커서위치
        	var nPos;
        	// 삽입할 문자
        	var strExp;

        	nPos = this.txtAPLY_MODN.getSelect();

        	if (obj.name == "grdEXPD_NAME") {
        		strExp = "{" + this.dsEXPD_NAME.getColumn(e.row, e.cell) + "}";
        	} else if (obj.name == "grdFUNC_NAME") {
        		strExp = "[" + this.dsFUNC_NAME.getColumn(e.row, e.cell) + "]";
        	}

        	// 커서위치에 삽입.
        	this.txtAPLY_MODN.insertText(strExp, nPos[0]);

        	// TextArea 선택
        	this.txtAPLY_MODN.setFocus();
        	this.txtAPLY_MODN.setSelect(nPos[0] + this.fnc_Length(strExp), nPos[0] + this.fnc_Length(strExp));
        }

        /*------------------------+
         |  기준년월 콤보         |
         +------------------------*/
        this.fn_GetCombo = function () {

        	// 세부 콤보 생성
        	var arrParam1    = new Array();
        		arrParam1[0] = "dsSTDS_YMTH"; 				//받을 Dataset명
        		arrParam1[1] = "PAY0008"; 					//조회 콤보 ID
        		arrParam1[2] = ""; 							//Head Flas
        		arrParam1[3] = "0"; 						//사용여부
        		arrParam1[4] = this.cmbSHRWAGP_CODE.value;  //조회 조건

        	// Bind 처리
        	var arrParam2 = new Array();
        		arrParam2[0] = "COMBO,cmbSHRSTDS_YMTH,dsSTDS_YMTH,0";
        	this.fnc_GetUserComboSingle(arrParam1, arrParam2);

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_PAYEXP_M.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdEXPD_NAME.addEventHandler("oncellclick", this.fn_SetExpression, this);
            this.grdFUNC_NAME.addEventHandler("oncellclick", this.fn_SetExpression, this);
            this.Edit1.addEventHandler("oneditclick", this.Edit1_oneditclick, this);
            this.cmbSHRWAGP_CODE.addEventHandler("onitemchanged", this.cmbSHRWAGP_CODE_onitemchanged, this);
            this.cmbSHRWAGP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSTDS_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSTDS_YMTH.addEventHandler("onitemchanged", this.cmbSHRSTDS_YMTH_onitemchanged, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYA0090.xfdl");
        this.loadPreloadList();
       
    };
}
)();
