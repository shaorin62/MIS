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
                this.set_name("FAMC0030");
                this.set_titletext("계정별원장");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CHAX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"17\" prop=\"NONE\" type=\"BIGDECIMAL\"/><Column id=\"BALA_AMNT\" size=\"17\" prop=\"NONE\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"GRUP_CNTT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"SEQ\" size=\"25\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">회계단위</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">회계단위</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "288", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("10");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("5");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("900");
            obj.set_cssclass("styGrid01");
            obj.getSetter("nosort").set("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\"/><Column size=\"180\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"280\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"계정코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"2\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"회계일자\"/><Cell col=\"4\" displaytype=\"text\" text=\"차변\"/><Cell col=\"5\" displaytype=\"text\" text=\"대변\"/><Cell col=\"6\" displaytype=\"text\" text=\"잔액\"/><Cell col=\"7\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCT_INTL\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ACCT_NAME\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:DISP_NUMB\" expr=\"expr:Eco.decode(dataset.getRowLevel(currow), 1,'[월 계]', 2, '[누 계]', DISP_NUMB)\" editdisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_CHAX\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_DAEX\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BALA_AMNT\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left;\" text=\"bind:REMK_NAME\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합 계\"/><Cell col=\"1\" style=\"align:center;\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('SLIP_CHAX')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('SLIP_DAEX')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME2", "absolute", "564", "97", "169", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL2", "absolute", "419", "97", "120", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "402", "97", "14", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME1", "absolute", "241", "97", "158", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL1", "absolute", "96", "97", "120", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "28", "97", "68", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "301", "71", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("Static2", "absolute", "245", "71", "66", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DAT1", "absolute", "514", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Calendar("calSHRACCT_DAT2", "absolute", "633", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static6", "absolute", "619", "71", "14", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "446", "71", "76", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("회계기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_autoselect("true");
            obj.set_index("-1");

            obj = new Static("Static4", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_INTL1", "absolute", "218", "97", "22", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_INTL2", "absolute", "541", "97", "22", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_text("계정별원장");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("24");
            obj.set_text("홈 > 회계관리 > 총괄보조원장");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("25");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "278", "61", "38", "10", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "278", "92", "102", "5", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "278", "118", "38", "10", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("43");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("계정별원장");
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
        this.addIncludeScript("FAMC0030.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("FAMC0030.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("FAMC0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMC0030 계정별원장
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		오혜성		Initial Created.
         *   2016.10.19		황치웅		수정. 
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
        this.sPACKAGENAME = "FAMC0030";

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
        	
            var styleObj = this.grdTA_SLIPNT.getCellProperty("body", this.fnc_GridColumnIndex(this.grdTA_SLIPNT, "ACCT_INTL"), "style");
        		styleObj.set_background(application.GBL_COLORNORMAL);
        		styleObj.set_background2(application.GBL_COLORNORMAL);
        		styleObj = this.grdTA_SLIPNT.getCellProperty("body", this.fnc_GridColumnIndex(this.grdTA_SLIPNT, "ACCT_NAME"), "style");
        		styleObj.set_background(application.GBL_COLORNORMAL);
        		styleObj.set_background2(application.GBL_COLORNORMAL);
        	
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT,"DISP_NUMB", "Y");
        	
        	var sNowDate   = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	var sFirstDate = this.fnc_SubStr(sNowDate, 0, 6) + "01";
        	this.calSHRACCT_DAT1.set_value(sFirstDate);
        	this.calSHRACCT_DAT2.set_value(sNowDate);
        	this.cmbSHRACCT_UNIT.setFocus();
        	
        	//this.calSHRACCT_DAT1.setFocus();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
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
        this.fn_Input = function (obj){
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj){
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
        this.fn_Save = function (obj){
        	//기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj){
        	this.fnc_ToExcel(this); //Export 할 화면 Call
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {

        	var reportfile = "/fam/FAMC0030R01.jrf";
        	
        	var params  =  "ACCT_DATE1#" + this.fnc_Trim(this.calSHRACCT_DAT1.value);
        		params += "#ACCT_DATE2#" + this.fnc_Trim(this.calSHRACCT_DAT2.value);
        		params += "#ACCT_INTL1#" + this.fnc_Trim(this.edtSHRACCT_INTL1.value);
        		params += "#ACCT_NAME1#" + this.fnc_Trim(this.edtSHRACCT_NAME1.value);
        		params += "#ACCT_INTL2#" + this.fnc_Trim(this.edtSHRACCT_INTL2.value);
        		params += "#ACCT_NAME2#" + this.fnc_Trim(this.edtSHRACCT_NAME2.value);
        		params += "#TOTL_INTL#전체";

        	var dataref = new Array();
        	
        	dataref[0]            	= new Object();
            dataref[0].type      	= "DATASET";
            dataref[0].dsObj		= this.dsTA_SLIPNT;
        	this.dsTA_SLIPNT.getColumn
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }

        /*-----------------------------------+
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
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPNT")) {
        		return this.fnc_Message("TMM023");
        	}
        	
        	if(this.fnc_Length(this.cmbSHRACCT_UNIT.text)<1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	if (this.fnc_IsDate(this.calSHRACCT_DAT1.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계시작일자", this.calSHRACCT_DAT1);
        	}

        	if (this.fnc_IsDate(this.calSHRACCT_DAT2.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계종료일자", this.calSHRACCT_DAT2);
        	}

        	if (this.calSHRACCT_DAT1.value > this.calSHRACCT_DAT2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "회계시작일자,회계종료일자", this.calSHRACCT_DAT2);
        	}

        	return true;

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		sReturnString += " ACCT_INTL1=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL1.value));
        		sReturnString += " ACCT_INTL2=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL2.value));
        		sReturnString += " ACCT_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DAT1.value));
        		sReturnString += " ACCT_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DAT2.value));
        		
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

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"));		
        		
        		//-------------------------------
        		// 1) 잔액 합계 구하기
        		//-------------------------------
        		var currAcct_Intl;
        		var nextAcct_Intl;
        		var sumAmnt = 0;
        		
        		this.grdTA_SLIPNT.set_enableredraw(false);
        		this.dsTA_SLIPNT.set_keystring("");
        		
        		for (var i = 0; i < this.dsTA_SLIPNT.rowcount; i++) {
        		
        			currAcct_Intl = this.dsTA_SLIPNT.getColumn(i, "ACCT_INTL");		//현재 로우의 계정코드
        			nextAcct_Intl = this.dsTA_SLIPNT.getColumn(i + 1, "ACCT_INTL");	//다음 로우의 계정코드
        			
        			if (currAcct_Intl != nextAcct_Intl) {
        				sumAmnt += nexacro.toNumber(this.dsTA_SLIPNT.getColumn(i, "BALA_AMNT"), 0);
        			}
        		}
        		
        		this.grdTA_SLIPNT.setCellProperty("Summ", this.grdTA_SLIPNT.getBindCellIndex("body", "BALA_AMNT"), "text", sumAmnt);
        		//trace("sumAmnt : " + sumAmnt);
        		
        		this.dsTA_SLIPNT.set_keystring("G:ACCT_INTL+ACCT_NAME,ACCT_INTL+ACCT_NAME+ACCT_MNTH");
        		
        		//-------------------------------
        		// 2) 전월이월 [월계] 로우 삭제
        		//-------------------------------
        		for (var i = this.dsTA_SLIPNT.rowcount - 1; i >= 0; i--) {
        			
        			if (this.dsTA_SLIPNT.getRowLevel(i) > 0) {
        				if (this.dsTA_SLIPNT.getColumn(i - 1 , "SEQ") == 1 && this.dsTA_SLIPNT.getColumn(i, "GRUP_CNTT") <= 1) {
        					this.dsTA_SLIPNT.deleteRow(i);
        				}
        			}
        			
        		}
        		
        		this.dsTA_SLIPNT.applyChange();
        		this.grdTA_SLIPNT.set_enableredraw(true);

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	} 

        }

        /*----------------------------------------------------------------+
         | Help Popup Open  							                   |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
            
            if ((obj.name == "imgHelpSHRACCT_INTL1") || (obj.name == "edtSHRACCT_NAME1")) {
            
        		arrParam[0] = "FAM0031";                                
        		arrParam[1] = "";                                      
        		arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME1.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRACCT_NAME1";   
            
        		if (this.fnc_Length(this.edtSHRACCT_INTL2.text) < 1) {

        			arrParam[5] = "edtSHRACCT_INTL1,edtSHRACCT_NAME1,edtSHRACCT_INTL2,edtSHRACCT_NAME2";
        			arrParam[6] = "0,1,0,1";
        				
        		} else {

        			arrParam[5] = "edtSHRACCT_INTL1,edtSHRACCT_NAME1";
        			arrParam[6] = "0,1";

        		}
        		
            } else if ((obj.name == "imgHelpSHRACCT_INTL2") || (obj.name == "edtSHRACCT_NAME2")) {

                arrParam[0] = "FAM0031";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME2.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRACCT_NAME2";                         
                arrParam[5] = "edtSHRACCT_INTL2,edtSHRACCT_NAME2";         
                arrParam[6] = "0,1";                                     

            }
            
            if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
             
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        this.grdTA_SLIPNT_oncelldblclick = function(obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
            
        	if (columnName == "DISP_NUMB") {
        	    
        	    var sSlipNumb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");
        	    var sSlipLine = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");
        	    if(this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0 ) {
        			this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		}	
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
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_oncelldblclick, this);
            this.edtSHRACCT_NAME2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRACCT_INTL1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_INTL2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMC0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
