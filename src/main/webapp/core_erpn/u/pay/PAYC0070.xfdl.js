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
                this.set_name("PAYC0070");
                this.set_titletext("기타소득현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">INDN_CODE</Col><Col id=\"DSNAME\">dsSHRINDN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_INCOME", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"INDN_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"INDN_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"TAP1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAP2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAP3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NTP1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NTP2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NTP3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"INCM_TAXX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"INHA_TAXX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"OTDE_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"4\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"REMK_400X\" size=\"400\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"INDN_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"PAYX_TAMT\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_TAMT\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"REAL_AMOT\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"WORK_CNTT\" size=\"256\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"WABK_CODE\" size=\"256\" type=\"STRING\"/><Column id=\"WAGE_ACNO\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("44");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_INCOME", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_INCOME");
            obj.getSetter("autofitminwidth").set("200");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_cssclass("styGrid01");
            obj.set_wheelscrollrow("1");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"사원번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"성명\"/><Cell col=\"2\" displaytype=\"text\" text=\"지급일\"/><Cell col=\"3\" displaytype=\"text\" text=\"급여일지\"/><Cell col=\"4\" displaytype=\"text\" text=\"소득구분\"/><Cell col=\"5\" displaytype=\"text\" text=\"과세지급액\"/><Cell col=\"6\" displaytype=\"text\" text=\"비과세지급액\"/><Cell col=\"7\" displaytype=\"text\" text=\"지급계\"/><Cell col=\"8\" displaytype=\"text\" text=\"소득세\"/><Cell col=\"9\" displaytype=\"text\" text=\"주민세\"/><Cell col=\"10\" displaytype=\"text\" text=\"공제계\"/><Cell col=\"11\" displaytype=\"text\" text=\"실지급액\"/><Cell col=\"12\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center;\" text=\"bind:INDN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:WORK_CNTT\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:INDN_NAME\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAP1_AMOT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NTP1_AMOT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAYX_TAMT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INCM_TAXX\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INHA_TAXX\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEDU_TAMT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REAL_AMOT\"/><Cell col=\"12\" style=\"align:left;\" text=\"bind:REMK_400X\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;TAP1_AMOT&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;NTP1_AMOT&quot;)\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;PAYX_TAMT&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;INCM_TAXX&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;INHA_TAXX&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DEDU_TAMT&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;REAL_AMOT&quot;)\"/><Cell col=\"12\" style=\"align:right middle;\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DEDU_TAMT&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;REAL_AMOT&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle9", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_text("지급기간");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "181", "71", "10", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "531", "129", "80", "25", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("30");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("기타소득현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("32");
            obj.set_text("홈 > 급여관리 > 급여현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "595", "56", "128", "4", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRINDN_DATE1", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRINDN_DATE2", "absolute", "196", "71", "80", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle00", "absolute", "28", "97", "76", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("귀속기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRWAGE_YMTH1", "absolute", "96", "97", "80", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "181", "97", "10", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRWAGE_YMTH2", "absolute", "196", "97", "80", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stDEPT_CODE", "absolute", "305", "71", "70", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "373", "71", "80", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "455", "71", "21", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "478", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stEMPL_NUMB", "absolute", "607", "71", "90", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "703", "71", "80", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "785", "71", "21", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "808", "71", "100", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "305", "97", "70", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_text("소득구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRINDN_CODE", "absolute", "373", "97", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");

            obj = new Static("Image02", "absolute", "607", "99", "90", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("정산예외여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRCALC_YSNO", "absolute", "703", "99", "19", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("기타소득현황");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAYC0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYC0070.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYC0070 기타소득현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.18		안윤준		Initial Created.
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
        this.sPACKAGENAME 	= "PAYC0070";
        this.sSERVERDATE 	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,6);

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
        	
        	this.divSHRINDN_DATE1.fn_SetMonth(this.sSERVERDATE);
        	this.divSHRINDN_DATE2.fn_SetMonth(this.sSERVERDATE);

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
        	this.fnc_DatasetClear("dsPY_INCOME");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_INCOME=dsPY_INCOME";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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
        	this.fnc_DataSetCancel("dsPY_INCOME");
        	this.grdPY_INCOME.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_INCOME", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_INCOME")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.divSHRINDN_DATE1.fn_GetMonth())) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급지간 시작일", this.divSHRINDN_DATE1.calMONTH);
        		
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.divSHRINDN_DATE2.fn_GetMonth())) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급기간 종료일", this.divSHRINDN_DATE2.calMONTH);
        		
        	}
        	
        	if ( nexacro.toNumber(this.divSHRINDN_DATE2.fn_GetMonth() - this.divSHRINDN_DATE1.fn_GetMonth()) < 0 ) {
        		return this.fnc_SearchCheckPostAction("TMM042", "지급기간 시작일,지급기간 종료일", this.divSHRINDN_DATE1.calMONTH);
        		
        	}
        	
        	if ( nexacro.toNumber(this.divSHRWAGE_YMTH2.fn_GetMonth() - this.divSHRWAGE_YMTH1.fn_GetMonth()) < 0 ) {
        		return this.fnc_SearchCheckPostAction("TMM042", "귀속기간 시작일,귀속기간 종료일", this.divSHRWAGE_YMTH1.calMONTH);
        		
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
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " INDN_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.divSHRINDN_DATE1.fn_GetMonth()));
        		sReturnString += " INDN_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.divSHRINDN_DATE2.fn_GetMonth()));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
         		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
         		sReturnString += " WAGE_YMTH1=" + this.fnc_Quote(this.fnc_Trim(this.divSHRWAGE_YMTH1.fn_GetMonth()));
        		sReturnString += " WAGE_YMTH2=" + this.fnc_Quote(this.fnc_Trim(this.divSHRWAGE_YMTH2.fn_GetMonth()));
        		sReturnString += " CALC_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.chkSHRCALC_YSNO.value)); //  정산예외여부
        		sReturnString += " INDN_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRINDN_CODE.value)); //  소득구분

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
        		this.fnc_Information(this.stInformation, this.dsPY_INCOME.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_INCOME.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdPY_INCOME.setFocus();
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRINDN_CODE,dsSHRINDN_CODE,0";
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

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서정보조회SHR(Popup)
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 사원정보조회SHR(Popup)
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
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.chkSHRCALC_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYC0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
