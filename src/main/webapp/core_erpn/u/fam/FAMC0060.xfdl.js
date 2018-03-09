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
                this.set_name("FAMC0060");
                this.set_titletext("관리항목계정별 잔액현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">회계단위</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"OVER_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_CHAX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0001</Col></Row><Row><Col id=\"DSNAME\">dsCOND_CODE</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">관리구분</Col><Col id=\"COMBOID\">FAM0002</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("11");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_autofittype("col");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("row");
            obj.set_taborder("13");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsTA_SLIPNT");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"330\"/><Column size=\"140\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"계정코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"2\" displaytype=\"text\" text=\"이월금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"차변금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"대변금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCT_INTL\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:OVER_AMNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SLIP_CHAX\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SLIP_DAEX\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" text=\"bind:BALA_AMNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME2", "absolute", "465", "97", "149", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL2", "absolute", "360", "97", "80", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "346", "97", "14", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME1", "absolute", "201", "97", "140", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL1", "absolute", "96", "97", "80", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "28", "97", "68", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE2", "absolute", "633", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static6", "absolute", "619", "71", "14", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE1", "absolute", "514", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static00", "absolute", "446", "71", "76", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("회계기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "301", "71", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("Static2", "absolute", "245", "71", "66", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "643", "97", "68", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("관리구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCOND_CODE", "absolute", "711", "97", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static7", "absolute", "852", "97", "68", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("관리항목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOND_VACD", "absolute", "920", "97", "80", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOND_VANM", "absolute", "1025", "97", "124", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static4", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_INTL1", "absolute", "178", "97", "22", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_INTL2", "absolute", "442", "97", "22", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCOND_VACD", "absolute", "1002", "97", "21", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("관리항목계정별 잔액현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("29");
            obj.set_text("홈 > 재무관리 > 전표관리 > 전표조회 > 관리항목 계정별 잔액현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("30");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("36");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("40");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "596", "61", "38", "10", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "608", "92", "102", "5", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "588", "118", "38", "10", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "9", "61", "30", "61", null, null, this);
            obj.set_taborder("45");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("관리항목계정별 잔액현황");
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
        this.addIncludeScript("FAMC0060.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("FAMC0060.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("FAMC0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMC0060 관리항목계정별 잔액현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		오혜성		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTT"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMC0060";

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
        this.fn_FormLoadSetting = function (obj,e){

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	var sNowDate   = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRACCT_DATE1.set_value(this.fnc_SubStr(sNowDate, 0, 6) + "01");
        	this.calSHRACCT_DATE2.set_value(sNowDate);
        	
        	this.cmbSHRCOND_CODE_onitemchanged();
        	this.cmbSHRACCT_UNIT.setFocus();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsTA_SLIPNT");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e){
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e){
        	//기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         --------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTA_SLIPNT");
        	this.grdTA_SLIPNT.setFocus();

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e){

        	this.fnc_ToExcel(this); //Export 할 화면 Call

        }
        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj){

        	var reportfile = "/fam/FAMC0060R01.jrf";
        	
        	var params  =  "ACCT_DATE1#" + this.fnc_Trim(this.calSHRACCT_DATE1.value);
        		params += "#ACCT_DATE2#" + this.fnc_Trim(this.calSHRACCT_DATE2.value);
        		params += "#ACCT_INTL1#" + this.fnc_Trim(this.edtSHRACCT_INTL1.value);
        		params += "#ACCT_NAME1#" + this.fnc_Trim(this.edtSHRACCT_NAME1.value);
        		params += "#ACCT_INTL2#" + this.fnc_Trim(this.edtSHRACCT_INTL2.value);
        		params += "#ACCT_NAME2#" + this.fnc_Trim(this.edtSHRACCT_NAME2.value);
        		params += "#COND_CODE#"  + this.dsCOND_CODE.getColumn(this.dsCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMB_NAME");
        		params += "#COND_VACD#"  + this.fnc_Trim(this.edtSHRCOND_VACD.value);
        		params += "#COND_VANM#"  + this.fnc_Trim(this.edtSHRCOND_VANM.value);
        		params += "#TOTL_INTL#전체"; // 계정과목 없을 때
        		params += "#TOTL_CODE#전체"; // 관리항목 없을 때
        		params += "#TOTL_VANM#전체"; // 관리구분 없을 때	
        		
        	var dataref = new Array();
        	
        	dataref[0]            	= new Object();
            dataref[0].type      	= "DATASET";
            dataref[0].dsObj		= this.dsTA_SLIPNT;
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }
        /*------------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT", this);
        		
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
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-------------------+
         /  조회 여부 체크!   /
         +--------------------*/
        this.fn_SearchItemCheck = function ()
        {

        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPNT")) {
        		return this.fnc_Message("TMM023");
        	}
        	
        	if(this.fnc_Length(this.cmbSHRACCT_UNIT.text)<1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	if (this.fnc_IsDate(this.calSHRACCT_DATE1.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계시작일자", this.calSHRACCT_DATE1);
        	}

        	if (this.fnc_IsDate(this.calSHRACCT_DATE2.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계종료일자", this.calSHRACCT_DATE2);
        	}

        	if (this.calSHRACCT_DATE1.value > this.calSHRACCT_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "회계시작일자,회계종료일자", this.calSHRACCT_DATE2);
        	}

        	return true;

        }
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (){
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){
        	return true;
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind){

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		sReturnString += " COND_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCOND_CODE.value));
        		sReturnString += " COND_VACD="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCOND_VACD.value));
        		sReturnString += " ACCT_INTL1=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL1.value));
        		sReturnString += " ACCT_INTL2=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL2.value));
        		sReturnString += " ACCT_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value));
        		sReturnString += " ACCT_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value));

        	} else if ( sKind == "REPORT00") {
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		sReturnString += " COND_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCOND_CODE.value));
        		sReturnString += " COND_VACD="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCOND_VACD.value));
        		sReturnString += " ACCT_INTL1=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL1.value));
        		sReturnString += " ACCT_INTL2=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL2.value));
        		sReturnString += " ACCT_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value));
        		sReturnString += " ACCT_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value));
        		
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
        this.fn_PostProcess = function (sMethodName){

        	if (sMethodName == "SEARCH00") {

        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"));		

        	} else if (sMethodName == "REPORT00") {

        
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsACCT_GUBN,0";
        			arrParam[1] = "COMBO,cmbSHRCOND_CODE,dsCOND_CODE,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}

        }

        /*----------------------------------------------------------------+
         | Help Popup Open                     |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRACCT_INTL1") || (obj.name == "edtSHRACCT_NAME1")) {
            
        		arrParam[0] = "FAM0031";                                
        		arrParam[1] = "D%";                                      
        		arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME1.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRACCT_NAME1";   
            
        		if(this.fnc_Length(this.edtSHRACCT_INTL2.text) < 1){

        			arrParam[5] = "edtSHRACCT_INTL1,edtSHRACCT_NAME1,edtSHRACCT_INTL2,edtSHRACCT_NAME2";
        			arrParam[6] = "0,1,0,1";
        				
        		} else {

        			arrParam[5] = "edtSHRACCT_INTL1,edtSHRACCT_NAME1";
        			arrParam[6] = "0,1";

        		}
        		
            } else if ((obj.name == "imgHelpSHRACCT_INTL2") || (obj.name == "edtSHRACCT_NAME2")) {

                arrParam[0] = "FAM0031";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME2.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRACCT_NAME2";                         
                arrParam[5] = "edtSHRACCT_INTL2,edtSHRACCT_NAME2";         
                arrParam[6] = "0,1";                                     

            } else if ((obj.name == "imgHelpSHRCOND_VACD") || (obj.name == "edtSHRCOND_VANM")) {

        	    //관리항목
        		var sCOMB_IDXX = this.dsCOND_CODE.getColumn(this.dsCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMB_IDXX");
        		var sCOMM_CODE = this.dsCOND_CODE.getColumn(this.dsCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMM_CODE");
        		
                arrParam[0] = sCOMB_IDXX;           
        		arrParam[1] = sCOMM_CODE;
                arrParam[2] = this.fnc_Trim(this.edtSHRCOND_VANM.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRCOND_VANM";                         
                arrParam[5] = "edtSHRCOND_VACD,edtSHRCOND_VANM";         
                arrParam[6] = "0,1";                                     
        	
            }
             
            if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
            
         }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                               *
         **************************************************************************************************/
        this.cmbSHRCOND_CODE_onitemchanged = function(obj,e) {	    
        	
        	//관리항목 초기화
        	this.edtSHRCOND_VACD.set_value(""); 
        	this.edtSHRCOND_VANM.set_value("");
        	
        	//관리항목
        	var sCOMB_IDXX = this.dsCOND_CODE.getColumn(this.dsCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMB_IDXX");
        	
        	if(this.fnc_Trim(sCOMB_IDXX) < 1) {
        		
        		this.fnc_SetReadonly(this.edtSHRCOND_VACD, false);
        		this.imgHelpSHRCOND_VACD.set_visible(false);
        		this.edtSHRCOND_VANM.set_visible(false);
        		
        	} else {
        		
        		this.fnc_SetReadonly(this.edtSHRCOND_VACD, true);
        		this.imgHelpSHRCOND_VACD.set_visible(true);
        		this.edtSHRCOND_VANM.set_visible(true);
        		
        	}

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRACCT_NAME2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCOND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCOND_CODE.addEventHandler("onitemchanged", this.cmbSHRCOND_CODE_onitemchanged, this);
            this.edtSHRCOND_VACD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOND_VANM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOND_VANM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCOND_VANM.addEventHandler("oneditclick", this.edtSHRCOND_VANM_oneditclick, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRACCT_INTL1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_INTL2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCOND_VACD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMC0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
