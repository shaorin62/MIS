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
                this.set_name("FAMF0040");
                this.set_titletext("월별 손익계산서 조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"DSNAME\">dsSHRVIEW_ITLV</Col><Col id=\"CODEID\">VIEW_ITLV</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">레벨</Col></Row><Row><Col id=\"DSNAME\">dsSHRFSFM_CODE</Col><Col id=\"CODEID\">FSFM_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">양식</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">FAM0001</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_MODTMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"VIEW_ITNM\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_ITLV\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"VIEW_AM01\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VIEW_AM02\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VIEW_AM03\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VIEW_AM04\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VIEW_AM05\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VIEW_AM06\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VIEW_AM07\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VIEW_AM08\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VIEW_AM09\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VIEW_AM10\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VIEW_AM11\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VIEW_AM12\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTA_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QTER_AM01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QTER_AM02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QTER_AM03\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QTER_AM04\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HALF_AM01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HALF_AM02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRTZ_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BOLD_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ZPRT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CALC_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"LOCI_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "267", "71", "96", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            obj.set_autoselect("true");

            obj = new Grid("grdTA_MODTMP", "absolute", "8", "128", null, null, "25", "12", this);
            obj.set_binddataset("dsTA_MODTMP");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"201\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정과목\"/><Cell col=\"1\" displaytype=\"text\" text=\"기간계\"/><Cell col=\"2\" displaytype=\"text\" text=\"1월\"/><Cell col=\"3\" displaytype=\"text\" text=\"2월\"/><Cell col=\"4\" displaytype=\"text\" text=\"3월\"/><Cell col=\"5\" displaytype=\"text\" text=\"1/4분기\"/><Cell col=\"6\" displaytype=\"text\" text=\"4월\"/><Cell col=\"7\" displaytype=\"text\" text=\"5월\"/><Cell col=\"8\" displaytype=\"text\" text=\"6월\"/><Cell col=\"9\" displaytype=\"text\" text=\"2/4분기\"/><Cell col=\"10\" displaytype=\"text\" text=\"상반기\"/><Cell col=\"11\" displaytype=\"text\" text=\"7월\"/><Cell col=\"12\" displaytype=\"text\" text=\"8월\"/><Cell col=\"13\" displaytype=\"text\" text=\"9월\"/><Cell col=\"14\" displaytype=\"text\" text=\"3/4분기\"/><Cell col=\"15\" displaytype=\"text\" text=\"10월\"/><Cell col=\"16\" displaytype=\"text\" text=\"11월\"/><Cell col=\"17\" displaytype=\"text\" text=\"12월\"/><Cell col=\"18\" displaytype=\"text\" text=\"4/4분기\"/><Cell col=\"19\" displaytype=\"text\" text=\"하반기\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"bind:VIEW_ITNM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:TOTA_AMNT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM01\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM02\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM03\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" text=\"bind:QTER_AM01\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM04\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM05\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM06\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" text=\"bind:QTER_AM02\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" text=\"bind:HALF_AM01\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM07\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM08\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM09\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;\" text=\"bind:QTER_AM03\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM10\"/><Cell col=\"16\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM11\"/><Cell col=\"17\" displaytype=\"number\" style=\"align: right;\" text=\"bind:VIEW_AM12\"/><Cell col=\"18\" displaytype=\"number\" style=\"align: right;\" text=\"bind:QTER_AM04\"/><Cell col=\"19\" displaytype=\"number\" style=\"align: right;\" text=\"bind:HALF_AM02\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "400", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("12");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "392", "71", "45", "21", null, null, this);
            obj.set_text("기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "522", "71", "14", "21", null, null, this);
            obj.set_text("~");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "88", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_autoselect("true");

            obj = new Static("Static1", "absolute", "212", "71", "50", "21", null, null, this);
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "649", "71", "60", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("양식");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRFSFM_CODE", "absolute", "691", "71", "133", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");
            obj.set_autoselect("true");

            obj = new Div("divSHRBASE_YYM1", "absolute", "434", "71", "84", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRBASE_YYM2", "absolute", "536", "71", "84", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRVIEW_ITLV", "absolute", "920", "71", "70", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_value("5");
            obj.set_text("5");
            obj.set_cssclass("styFormSearchItem");
            obj.set_autoselect("true");
            obj.set_index("4");

            obj = new Static("Static3", "absolute", "852", "71", "74", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("조회레벨");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("16");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("19");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("20");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("월별 손익계산서 조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("22");
            obj.set_text("홈 > 재무관리 > 결산관리 > 재무제표관리 > 월별 손익계산서 조회");
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

            obj = new Static("Static05", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "629", "56", "128", "4", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("29");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "184", "61", "40", "41", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "1019", "71", "122", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("0원금액 표시 제외");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHREXPT_ZERO", "absolute", "1145", "71", "16", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_value("1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTA_ACCTXF");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 84, 21, this.divSHRBASE_YYM1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_url("common::comMonthCalendar.xfdl");

            	}
            );
            this.divSHRBASE_YYM1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("월별 손익계산서 조회");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FAMF0040.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("FAMF0040.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("FAMF0040.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAMF0040 월별 손익계산서 조회
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.13		권미영		Initial Created.
         *   2016.10.14		황치웅		수정.
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTT"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMF0040"; 

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
         *                                         공통 Event 처리 부분                                  *
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
        		styleObj.set_background("expr:(VIEW_ITLV == '1') ? '#c6cedc' : (VIEW_ITLV == '2') ? '#e4e9f1' : 'white'");
        		styleObj.set_background2("expr:(VIEW_ITLV == '1') ? '#c6cedc' : (VIEW_ITLV == '2') ? '#e4e9f1' : 'white'");
        		
        	}
        	
        	var sDate = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"));
        	
        	this.divSHRBASE_YYM1.fn_SetMonth(this.fnc_SubStr(sDate, 0, 4) + "01");
        	this.divSHRBASE_YYM2.fn_SetMonth(this.fnc_SubStr(sDate, 0, 4) + "12");
        	
        	this.divSHRBASE_YYM1.fn_CalendarCustomEvent(this, "fnc_MonthOnChanged");
        	
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

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        	if (this.dsTA_MODTMP.getRowCount() <= 0) {
        		this.fnc_Message("TMM125", "조회 후 인쇄하세요");
        		return;
        	}
        	
        	var reportfile = "/fam/FAMF0040R01.jrf";
        	
        	var toDay1f = this.fnc_GetMaskFormat(this.divSHRBASE_YYM1.fn_GetMonth(), "@@@@년 @@");
        	var toDay1t = this.fnc_GetMaskFormat(this.divSHRBASE_YYM2.fn_GetMonth(), "@@@@년 @@");
        	
        	var params  =  "BASE_YYMM#" + toDay1f + "월 ~ "+ toDay1t + "월";
        		params += "#ACCT_GUBN#" + this.fnc_Trim(this.cmbSHRACCT_GUBN.text);
        	
        	trace(params);

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
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_MODTMP", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
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

        
        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_MODTMP")) return this.fnc_Message("TMM023");

        	if(this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);	
        	}
        	
        	if(this.fnc_Length(this.fnc_Trim(this.divSHRBASE_YYM1.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "기간시작월", this.divSHRBASE_YYM1);	
        	}
        	
        	if(this.fnc_Length(this.fnc_Trim(this.divSHRBASE_YYM2.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "기간종료월", this.divSHRBASE_YYM2);	
        	}
        	
        	if (this.fnc_SubStr(this.fnc_Trim(this.divSHRBASE_YYM1.fn_GetMonth()), 0, 4) != this.fnc_SubStr(this.fnc_Trim(this.divSHRBASE_YYM2.fn_GetMonth()), 0, 4)) {
        		return this.fnc_SearchCheckPostAction("TMM300", "시작연도와 종료연도는 동일한 연도 이어야 합니다.", this.divSHRBASE_YYM2);	
        	}
        	
        	if (this.fnc_SubStr(this.fnc_Trim(this.divSHRBASE_YYM2.fn_GetMonth())) < this.fnc_SubStr(this.fnc_Trim(this.divSHRBASE_YYM1.fn_GetMonth()))) {
        		return this.fnc_SearchCheckPostAction("TMM300", "시작기간이 종료기간 보다 전년월이여야 합니다.", this.divSHRBASE_YYM2);	
        	}
        	
        	if (this.fnc_SubStr(this.fnc_Trim(this.cmbSHRVIEW_ITLV.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "계정레벨종료", this.cmbSHRVIEW_ITLV);	
        	}

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

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind){
        	
        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		
        		var sYymmTerm = this.divSHRBASE_YYM2.fn_GetMonth() - this.divSHRBASE_YYM1.fn_GetMonth() + 1;
        		
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " BASE_YYM1=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRBASE_YYM1.fn_GetMonth()));
        		sReturnString += " BASE_YYM2=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRBASE_YYM2.fn_GetMonth()));
        		sReturnString += " VIEW_ITLV="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRVIEW_ITLV.value));
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		sReturnString += " FSFM_CODE="  + this.fnc_Quote(this.cmbSHRFSFM_CODE.value);
        		sReturnString += " YYMM_TERM="  + this.fnc_Quote(sYymmTerm);
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
        		
        		var sum_dBal;
        		var sum_cBal;
        		var sum_dTotal;
        		var sum_cTotal;

        		this.fnc_Information(this.stInformation, this.dsTA_MODTMP.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsTA_MODTMP.rowcount);
        	
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHRVIEW_ITLV,dsSHRVIEW_ITLV,0";
        			arrParam[2] = "COMBO,cmbSHRFSFM_CODE,dsSHRFSFM_CODE,0";

        		this.fnc_CommonCodeInnerBind(arrParam);	
        	
        		//손익계산서 
        		this.dsSHRFSFM_CODE.filter("REF1_FILD == 'PL'");
        		
        		//레벨은 최종건으로 한다.
        		this.cmbSHRVIEW_ITLV.set_value("5");
        		
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

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        this.fnc_MonthOnChanged = function (obj,e) {
        	
        	var sBase_Yymm = this.divSHRBASE_YYM1.fn_GetMonth();
        	this.divSHRBASE_YYM2.fn_SetMonth(this.fnc_SubStr(sBase_Yymm, 0, 4) + "12");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRFSFM_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divSHRBASE_YYM1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divSHRBASE_YYM2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRVIEW_ITLV.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMF0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
