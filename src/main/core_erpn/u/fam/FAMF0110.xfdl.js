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
                this.set_name("FAMF0110");
                this.set_titletext("원가명세서조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"DSNAME\">dsSHRCOST_GUBN</Col><Col id=\"CODEID\">COST_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">원가구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRFSFM_CODE</Col><Col id=\"CODEID\">FSFM_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">양식</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_MODTMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"VIEW_ITNM\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_ITLV\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_AM01\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VIEW_AM02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VIEW_AM03\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VIEW_AM04\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VIEW_RAT1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VIEW_RAT2\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_RAT3\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_RAT4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">FAM0001</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "132", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MODTMP", "absolute", "8", "153", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj.set_binddataset("dsTA_MODTMP");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"300\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"1\" colspan=\"4\" displaytype=\"text\" text=\"당기\"/><Cell col=\"5\" colspan=\"4\" displaytype=\"text\" text=\"전기\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"당월\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"누계\"/><Cell row=\"1\" col=\"5\" colspan=\"2\" text=\"당월\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"누계\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:VIEW_ITNM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VIEW_RAT1\" mask=\"expr:(VIEW_ITLV == '1') ? '#0.#0' : (VIEW_ITLV == '2') ? '#0.#0' :' '\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VIEW_AM01\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VIEW_RAT2\" mask=\"expr:VIEW_ITLV == '1' ? '#0.#0' : ''\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VIEW_AM02\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VIEW_RAT3\" mask=\"expr:VIEW_ITLV == '1' ? '#0.#0' : ''\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VIEW_AM03\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VIEW_RAT4\" mask=\"expr:VIEW_ITLV == '1' ? '#0.#0' : ''\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VIEW_AM04\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox00", "absolute", "8", "59", null, "69", "25", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("7");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", "70", "65", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "109", "70", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("Static1", "absolute", "249", "70", "56", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "330", "70", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static9", "absolute", "28", "96", "79", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("당기기준월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "249", "96", "79", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("전기기준월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCOST_GUBN", "absolute", "537", "96", "164", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static3", "absolute", "469", "96", "65", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("원가구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRFSFM_CODE", "absolute", "537", "70", "164", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static06", "absolute", "469", "70", "58", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("양식");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("원가명세서조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("17");
            obj.set_text("홈 > 재무관리 > 재무제표관리 > 대차대조표조회");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "128", "80", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("26");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "147", "216", "6", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "60", "30", "67", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "219", "60", "40", "67", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "355", "60", "38", "10", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "355", "91", "102", "5", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "355", "117", "38", "10", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRBASE_YYMM", "absolute", "109", "96", "110", "21", null, null, this);
            obj.set_taborder("3");
            obj.style.set_align("left middle");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRPREV_YYMM", "absolute", "330", "96", "110", "21", null, null, this);
            obj.set_taborder("4");
            obj.style.set_align("left middle");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "730", "96", "122", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("0원금액 표시 제외");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHREXPT_ZERO", "absolute", "856", "96", "16", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_value("1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTA_ACCTXF");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("원가명세서조회");
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
        };
        
        // User Script
        this.addIncludeScript("FAMF0110.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("FAMF0110.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("FAMF0110.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAMF0110 원가명세서 조회
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.17		권미영		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTFFFFTT"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMF0110"; 
        this.bFireEvents = true;

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                 *
         **************************************************************************************************/
         /*--------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	for (var i = 0; i < this.grdTA_MODTMP.getCellCount("body"); i++) {
        		
        		var styleObj = this.grdTA_MODTMP.getCellProperty("body", i, "style");
        		styleObj.set_background("expr:(VIEW_ITLV == '1') ? '#c6cedc' : (VIEW_ITLV == '2') ? '#c6cedc' : 'white'");
        		styleObj.set_background2("expr:(VIEW_ITLV == '1') ? '#c6cedc' : (VIEW_ITLV == '2') ? '#c6cedc' : 'white'");
        		
        	}

        	this.divSHRBASE_YYMM.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6));
        	this.divSHRPREV_YYMM.fn_SetMonth(((nexacro.toNumber(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4)) - 1) + this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 4, 2)));

        	this.divSHRBASE_YYMM.fn_CalendarCustomEvent(this, "fnc_MonthOnChanged");
        	
        	this.cmbSHRACCT_UNIT.setFocus();
        	
        }
         
        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_MODTMP"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_MODTMP=dsTA_MODTMP";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MODTMP.setFocus();
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {

        	var reportfile = "/fam/FAMF0110R01.jrf";
        	
        	var toDay1f = this.fnc_SubStr(this.divSHRBASE_YYMM.calMONTH.value, 0, 4) + "년 " + this.fnc_SubStr(this.divSHRBASE_YYMM.calMONTH.value, 4, 2) + "월";
        	var toDay2f = this.fnc_SubStr(this.divSHRPREV_YYMM.calMONTH.value, 0, 4) + "년 " + this.fnc_SubStr(this.divSHRPREV_YYMM.calMONTH.value, 4, 2) + "월";
        	
        	var params  =  "BASE_YYMM#" + toDay1f;
        		params += "#ACCT_GUBN#" + this.fnc_Trim(this.cmbSHRACCT_GUBN.text);
        		params += "#PREV_YYMM#" + toDay2f;
        	
        	var dataref = new Array();
        	
        	dataref[0]            	= new Object();
            dataref[0].type      	= "DATASET";
            dataref[0].dsObj		= this.dsTA_MODTMP;
            
        	this.fn_UbiReport(reportfile, params, dataref);

        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)   |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
        this.fn_EditFocus = function (obj){
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_MODTMP")) return this.fnc_Message("TMM023");

        	if(this.fnc_Length(this.fnc_Trim(this.divSHRBASE_YYMM.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "당기기준월", this.divSHRBASE_YYMM);	
        	}
        	
        	if(this.fnc_Length(this.fnc_Trim(this.divSHRPREV_YYMM.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "전기기준월", this.divSHRPREV_YYMM);	
        	}
        	
        // 	if (this.fnc_SubStr(this.fnc_Trim(this.divSHRBASE_YYMM.fn_GetMonth()), 0, 4) == this.fnc_SubStr(this.fnc_Trim(this.divSHRPREV_YYMM.fn_GetMonth()), 0, 4)) {
        // 		return this.fnc_SearchCheckPostAction("TMM300", "당기기간과 전기기간의 연도는 달라야 합니다.", this.divSHRPREV_YYMM);	
        // 	}
        	
        	return true;
        	
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능없음
        	return true;
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능없음
        	return true;
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00")  {

        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " BASE_YYM1=" 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.divSHRBASE_YYMM.fn_GetMonth()), 1, 4) + "01");
        		sReturnString += " BASE_YYM2=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRBASE_YYMM.fn_GetMonth()));
        		sReturnString += " PREV_YYM1=" 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.divSHRPREV_YYMM.fn_GetMonth()), 1, 4) + "01");
        		sReturnString += " PREV_YYM2=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRPREV_YYMM.fn_GetMonth()));
        		sReturnString += " COST_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCOST_GUBN.value));
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		sReturnString += " FSFM_CODE=" 	+ this.fnc_Quote(this.cmbSHRFSFM_CODE.value);
        		sReturnString += " EXPT_ZERO=" 	+ this.fnc_Quote(this.chkSHREXPT_ZERO.value);
        		
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
        		
        		this.fnc_Information(this.stInformation, this.dsTA_MODTMP.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_MODTMP.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		//계정레벨 1인 것들만 합계대비 비율을 구한다.
        		var iSumm_Am01 = nexacro.toNumber(this.dsTA_MODTMP.getCaseSum("VIEW_ITLV == '1'", "VIEW_AM01"), 0);
        		var iSumm_Am02 = nexacro.toNumber(this.dsTA_MODTMP.getCaseSum("VIEW_ITLV == '1'", "VIEW_AM02"), 0);
        		var iSumm_Am03 = nexacro.toNumber(this.dsTA_MODTMP.getCaseSum("VIEW_ITLV == '1'", "VIEW_AM03"), 0);
        		var iSumm_Am04 = nexacro.toNumber(this.dsTA_MODTMP.getCaseSum("VIEW_ITLV == '1'", "VIEW_AM04"), 0);
        		
        		this.dsTA_MODTMP.filter("VIEW_ITLV == '1' || VIEW_ITLV == '2'");		
        		for (var i = 0; i < this.dsTA_MODTMP.rowcount; i++) {
        			var iView_Rat1 = 0;
        			var iView_Rat2 = 0;
        			var iView_Rat3 = 0;
        			var iView_Rat4 = 0;
        			
        			if (iSumm_Am01 != 0) iView_Rat1 = nexacro.round(this.dsTA_MODTMP.getColumn(i, "VIEW_AM01") / iSumm_Am01 * 100, 2);
        			if (iSumm_Am02 != 0) iView_Rat2 = nexacro.round(this.dsTA_MODTMP.getColumn(i, "VIEW_AM02") / iSumm_Am02 * 100, 2);
        			if (iSumm_Am03 != 0) iView_Rat3 = nexacro.round(this.dsTA_MODTMP.getColumn(i, "VIEW_AM03") / iSumm_Am03 * 100, 2);
        			if (iSumm_Am04 != 0) iView_Rat4 = nexacro.round(this.dsTA_MODTMP.getColumn(i, "VIEW_AM04") / iSumm_Am04 * 100, 2);
        			
        			this.dsTA_MODTMP.setColumn(i, "VIEW_RAT1", iView_Rat1);
        			this.dsTA_MODTMP.setColumn(i, "VIEW_RAT2", iView_Rat2);
        			this.dsTA_MODTMP.setColumn(i, "VIEW_RAT3", iView_Rat3);
        			this.dsTA_MODTMP.setColumn(i, "VIEW_RAT4", iView_Rat4);
        		}
        		this.dsTA_MODTMP.filter("");
        		this.dsTA_MODTMP.applyChange();		
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHRCOST_GUBN,dsSHRCOST_GUBN,0";
        			arrParam[2] = "COMBO,cmbSHRFSFM_CODE,dsSHRFSFM_CODE,0";
        			
        		this.fnc_CommonCodeInnerBind(arrParam);	

        		this.dsSHRFSFM_CODE.filter("REF1_FILD == 'PD'");	//원가명세서 조회  
        		this.dsSHRCOST_GUBN.filter("REF1_FILD == '1' || COMD_CDNM == '전체'");		//매출원가대상
        	
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        		
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsACCT_GUBN,1";
        			
        		this.fnc_UserComboInnerBind(arrParam);

        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	// 기능없음
        }

        this.fnc_MonthOnChanged = function (obj,e) {
        	
        	var sBase_Yymm = this.divSHRBASE_YYMM.fn_GetMonth();
        	var sPrev_Yymm = nexacro.toNumber(this.fnc_SubStr(sBase_Yymm, 0, 4) - 1, 0) + this.fnc_SubStr(sBase_Yymm, 4, 2); 
        	
        	this.divSHRPREV_YYMM.fn_SetMonth(sPrev_Yymm);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCOST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRFSFM_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMF0110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
