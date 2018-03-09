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
                this.set_name("TRMA0030");
                this.set_titletext("일자금현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_RESULT1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"ACNT_NUMB\" type=\"STRING\" size=\"30\"/><Column id=\"SLIP_AMNT_BEF\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AMNT_IN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AMNT_OUT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORD1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORD2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BICNET_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DIFF_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GROUP_CNT\" type=\"STRING\" size=\"22\" prop=\"COUNT\"/><Column id=\"DESC_REMK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_RESULT2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CASH_IN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CASH_OUT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ACNT_IN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ACNT_OUT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GROUP_CNT\" type=\"INT\" size=\"22\" prop=\"COUNT\"/><Column id=\"ACCT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "28", "71", "86", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static03", "absolute", "272", "71", "76", "21", null, null, this);
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE", "absolute", "342", "71", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Tab("Tab0", "absolute", "8", "113", null, null, "25", "15", this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("TabD1", this.Tab0);
            obj.set_text("제예금현황");
            obj.set_scrollbars("autoboth");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdCrossTab", "absolute", "10", "25", null, null, "10", "10", this.Tab0.TabD1);
            obj.set_taborder("0");
            obj.set_binddataset("dsTA_RESULT1");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.getSetter("nosort").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"분류\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"계좌번호\"/><Cell col=\"3\" text=\"전일\"/><Cell col=\"4\" text=\"입금\"/><Cell col=\"5\" text=\"출금\"/><Cell col=\"6\" colspan=\"3\" text=\"잔액\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:left;\" text=\"bind:MAIN_NAME\" suppress=\"1\"/><Cell col=\"1\" style=\"align:EXPR(dataset.getRowLevel(currow)==0 ? &quot;left&quot; : &quot;center&quot;);\" text=\"bind:ACNT_NAME\" expr=\"expr:Eco.decode(dataset.getRowLevel(currow), 1, dataset.getColumn(currow - 1, 'MAIN_NAME') + ' 소계', ACNT_NAME)\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ACNT_NUMB\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT_BEF\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT_IN\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT_OUT\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REMA_AMNT\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BICNET_AMNT\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(REMA_AMNT,0) - toNumber(BICNET_AMNT,0)\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:center;\" text=\"총계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('SLIP_AMNT_BEF'),0)\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('SLIP_AMNT_IN'),0)\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('SLIP_AMNT_OUT'),0)\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('REMA_AMNT'),0)\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('BICNET_AMNT'),0)\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('DIFF_AMNT'),0)\" mask=\"#,###\"/></Band></Format></Formats>");
            this.Tab0.TabD1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", "262", "21", null, null, this.Tab0.TabD1);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.TabD1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "573", "0", "80", "25", null, null, this.Tab0.TabD1);
            obj.set_taborder("2");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.TabD1.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "8", "19", "216", "6", null, null, this.Tab0.TabD1);
            obj.set_taborder("3");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.TabD1.addChild(obj.name, obj);
            obj = new Tabpage("TabD2", this.Tab0);
            obj.set_text("출납현황");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdCrossTab1", "absolute", "10", "25", null, null, "10", "10", this.Tab0.TabD2);
            obj.set_taborder("0");
            obj.set_binddataset("dsTA_RESULT2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.getSetter("nosort").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"402\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"전표번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" colspan=\"2\" text=\"현금\"/><Cell col=\"4\" colspan=\"2\" text=\"제예금\"/><Cell row=\"1\" col=\"2\" text=\"입금\"/><Cell row=\"1\" col=\"3\" text=\"출금\"/><Cell row=\"1\" col=\"4\" text=\"입금\"/><Cell row=\"1\" col=\"5\" text=\"출금\"/></Band><Band id=\"body\"><Cell text=\"bind:DISP_NUMB\"/><Cell col=\"1\" style=\"align:EXPR(dataset.getRowLevel(currow)==0 ? 'left' : 'center');\" text=\"bind:REMK_NAME\" expr=\"expr:Eco.decode(dataset.getRowLevel(currow), 1, &quot;금일계&quot;, REMK_NAME)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CASH_IN\" mask=\"#,###\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CASH_OUT\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACNT_IN\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACNT_OUT\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"잔  액\"/><Cell col=\"2\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('CASH_IN'),0) - nexacro.toNumber(dataset.getSum('CASH_OUT'),0)\" mask=\"#,###\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('ACNT_IN'),0) - nexacro.toNumber(dataset.getSum('ACNT_OUT'),0)\" mask=\"#,###\"/></Band></Format></Formats>");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", "262", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "573", "0", "80", "25", null, null, this.Tab0.TabD2);
            obj.set_taborder("2");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.TabD2.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("일자금현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("31");
            obj.set_text("홈 > 회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("32");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("38");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("39");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.TabD1,
            	//-- Layout function
            	function(p) {
            		p.set_text("제예금현황");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.Tab0.TabD1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.TabD2,
            	//-- Layout function
            	function(p) {
            		p.set_text("출납현황");

            	}
            );
            this.Tab0.TabD2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("일자금현황");
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
        this.addIncludeScript("TRMA0030.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TRMA0030.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TRMA0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMA0030 제예금현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		김준수		Initial Created.
         *   
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
        this.sBUTTONLIST  	= "TTFFFFTT"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME 	= "TRMA0030";

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
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
         /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GetComboDs(this.dsCombo);
            this.fnc_GridSetting(this);
            
            var styleObj = this.Tab0.TabD1.grdCrossTab.getCellProperty("body", 0, "style");
        	styleObj.set_background(application.GBL_COLORNORMAL);
        	styleObj.set_background2(application.GBL_COLORNORMAL);
        	
            this.fnc_FormatSlipNumber(this.Tab0.TabD2.grdCrossTab1, "DISP_NUMB", "Y");
            
            this.calSHRACCT_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
            this.cmbSHRACCT_UNIT.setFocus();
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;

        	this.fnc_DatasetClear("dsTA_RESULT1,dsTA_RESULT2");
            var sMethodName = "SEARCH00";
            var sInDataSet = "";
            var sOutDataSet = "dsTA_RESULT1=dsTA_RESULT1 dsTA_RESULT2=dsTA_RESULT2 ";
            var sArgument = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.cmbSHRACCT_UNIT.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능 없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능 없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {
        	//기능 없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        	var reportfile = "/trm/TRMA0030R01.jrf";

        	var toDay  = this.fnc_SubStr(this.calSHRACCT_DATE.value, 0, 4) + "년 " + this.fnc_SubStr(this.calSHRACCT_DATE.value, 4, 2) + "월 " + this.fnc_SubStr(this.calSHRACCT_DATE.value, 6, 2) + "일";
        	var params =  "#VAT_YYYY#" + toDay;
        		     
        	var dataref = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/trm/TRMA0030_SEARCH00.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsTA_RESULT1=dsTA_RESULT1 dsTA_RESULT2=dsTA_RESULT2"
        	dataref[0].arg = this.fn_CreateArgument("SEARCH00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }

         /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
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

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj){
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1)	{
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_DATE.value)) < 1)	{
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일자", this.calSHRACCT_DATE);
        	}

        	return true;
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;	
        }

        /*------------------+
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
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.cmbSHRACCT_UNIT.value); //회계단위
        		sReturnString += " ACCT_DATE=" 	+ this.fnc_Quote(this.calSHRACCT_DATE.value); //기준일자
        	} 

        	return sReturnString;
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
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

        	if (sMethodName == "SEARCH00") {

        		this.fnc_Information(this.Tab0.TabD1.stInformation, this.dsTA_RESULT1.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.Tab0.TabD2.stInformation, this.dsTA_RESULT2.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_RESULT1.rowcount + this.dsTA_RESULT2.rowcount);
        		
        		this.Tab0.TabD1.grdCrossTab.set_enableredraw(false);
        		this.dsTA_RESULT1.set_keystring("G:MAIN_CODE+MAIN_NAME,S:MAIN_CODE");
        		
        		for (var i = this.dsTA_RESULT1.rowcount - 1; i >= 0; i--) {
        			var iGroup_Cnt = this.dsTA_RESULT1.getColumn(i, "GROUP_CNT");
        			if (this.dsTA_RESULT1.getRowLevel(i) > 0 && iGroup_Cnt <= 1) {
        				this.dsTA_RESULT1.deleteRow(i);
        			}
        		}
        		this.dsTA_RESULT1.applyChange();
        		this.Tab0.TabD1.grdCrossTab.set_enableredraw(true);		
        		
        		this.Tab0.TabD2.grdCrossTab1.set_enableredraw(false)
        		this.dsTA_RESULT2.set_keystring("G:ACCT_DATE,S:DISP_NUMB");
        		this.dsTA_RESULT2.deleteRow(1);	//전일이월 소계 삭제
        		this.dsTA_RESULT2.applyChange();
        		this.Tab0.TabD2.grdCrossTab1.set_enableredraw(true)
        		
        		//this.Tab0.TabD2.grdCrossTab1.setCellProperty("body", 0, "text", "expr:dataset.getRowLevel(currow) == 1 ? '소계':"); 
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj) {

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.Tab0_TabD2_grdCrossTab1_oncelldblclick = function(obj,e) {
        	
        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "DISP_NUMB") return;
        	
        	var sSlip_Numb = this.dsTA_RESULT2.getColumn(this.dsTA_RESULT2.rowposition, "SLIP_NUMB");
        	var sSlip_Line = this.dsTA_RESULT2.getColumn(this.dsTA_RESULT2.rowposition, "SLIP_LINE");
        	if (this.fnc_Length(this.fnc_Trim(sSlip_Numb)) > 0) {
        		this.fnc_ViewSlipForm(sSlip_Numb, "SHR", this.sUSERLAVEL, "", sSlip_Line); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	}
        	
        }

        this.Tab0_onchanged = function(obj,e) {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_RESULT1.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_RESULT1.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.dsTA_RESULT2.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_RESULT2.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.calSHRACCT_DATE.addEventHandler("ontextchange", this.fn_clearData, this);
            this.calSHRACCT_DATE.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRACCT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.addEventHandler("onchanged", this.Tab0_onchanged, this);
            this.Tab0.TabD1.grdCrossTab.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.Tab0.TabD2.grdCrossTab1.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.Tab0.TabD2.grdCrossTab1.addEventHandler("oncelldblclick", this.Tab0_TabD2_grdCrossTab1_oncelldblclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TRMA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
