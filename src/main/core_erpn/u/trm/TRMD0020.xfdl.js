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
                this.set_name("TRMD0020");
                this.set_titletext("구매카드미결제명세서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ISSU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BALA_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"DSNAME\">dsPUCD_ACCT</Col><Col id=\"CODEID\">PUCD_ACCT</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">구매카드계정과목</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "288", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("9");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("3");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("900");
            obj.set_cssclass("styGrid01");
            obj.getSetter("nosort").set("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"140\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"250\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"발행전표번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"거래처코드\"/><Cell col=\"2\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"3\" text=\"거래처명\"/><Cell col=\"4\" displaytype=\"text\" text=\"발행일\"/><Cell col=\"5\" displaytype=\"text\" text=\"만기일\"/><Cell col=\"6\" displaytype=\"text\" text=\"금액\"/><Cell col=\"7\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell text=\"bind:DISP_NUMB\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:CUST_CODE\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:BIZR_NUMB\" expr=\"expr:Eco.decode(dataset.getRowLevel(currow), 0, BIZR_NUMB, '[' + Eco.string.getMaskFormatString(PAYX_DATE, '@@@@-@@-@@') + ' 소계]')\" mask=\"expr:BIZR_NUMB.toString().length == 10 ? &quot;###-##-#####&quot; : BIZR_NUMB.toString().length == 13 ? &quot;######-#######&quot; : &quot;&quot;\" editdisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" style=\"align:EXPR(Eco.decode(dataset.getRowLevel(currow), 0, 'left', 'center'));\" text=\"bind:CUST_NAME\" expr=\"expr:Eco.decode(dataset.getRowLevel(currow), 0, CUST_NAME, dataset.getCaseCount(&quot;PAYX_DATE == '&quot; + PAYX_DATE + &quot;'&quot;) + &quot; 건&quot;)\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ISSU_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center;\" text=\"bind:PAYX_DATE\" expr=\"expr:Eco.decode(dataset.getRowLevel(currow), 0, PAYX_DATE, '')\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BALA_AMNT\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left;\" text=\"bind:REMK_NAME\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\" style=\"align:center;\"/><Cell col=\"3\" style=\"align:center;\" expr=\"expr:dataset.getCaseCount(&quot;dataset.getRowLevel(currow)==0&quot;) + &quot; 건&quot;\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;BALA_AMNT&quot;)\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "498", "97", "198", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "373", "97", "100", "21", null, null, this);
            obj.set_taborder("8");
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

            obj = new Static("Static2", "absolute", "302", "71", "66", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE", "absolute", "373", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "176", "21", null, null, this);
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

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "475", "97", "21", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_text("구매카드미결제명세서");
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

            obj = new Static("Static07", "absolute", "613", "56", "128", "4", null, null, this);
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

            obj = new Static("Static12", "absolute", "334", "61", "38", "10", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "342", "92", "38", "5", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "41", null, null, this);
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

            obj = new Static("Static14", "absolute", "302", "97", "68", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "341", "118", "38", "10", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "272", "61", "40", "34", null, null, this);
            obj.set_taborder("49");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "473", "61", "40", "34", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPUCD_ACCT", "absolute", "96", "97", "176", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static15", "absolute", "502", "71", "51", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("발행일");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRISSU_DAT1", "absolute", "558", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static17", "absolute", "805", "71", "51", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("만기일");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPAYX_DATE", "absolute", "861", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static18", "absolute", "776", "61", "40", "34", null, null, this);
            obj.set_taborder("56");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "660", "71", "14", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRISSU_DAT2", "absolute", "676", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("구매카드미결제명세서");
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
        this.addIncludeScript("TRMD0020.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TRMD0020.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TRMD0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMD0020 구매카드미결제명세서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.12.29		권미영		Initial Created.
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
        this.sPACKAGENAME = "TRMD0020";

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
        	
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT, "DISP_NUMB", "Y");

        //     var styleObj = this.grdTA_SLIPNT.getCellProperty("body", this.fnc_GridColumnIndex(this.grdTA_SLIPNT, "ACCT_INTL"), "style");
        // 		styleObj.set_background(application.GBL_COLORNORMAL);
        // 		styleObj.set_background2(application.GBL_COLORNORMAL);
        // 		styleObj = this.grdTA_SLIPNT.getCellProperty("body", this.fnc_GridColumnIndex(this.grdTA_SLIPNT, "ACCT_NAME"), "style");
        // 		styleObj.set_background(application.GBL_COLORNORMAL);
        // 		styleObj.set_background2(application.GBL_COLORNORMAL);
        	
        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRACCT_DATE.set_value(sNowDate);
        	
        	this.cmbSHRACCT_UNIT.setFocus();
        	
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

        	var reportfile = "/trm/TRMD0020R01.jrf";
        	
        	var params  =  "ACCT_DATE#" + this.fnc_Trim(this.calSHRACCT_DATE.value);

        	var dataref = new Array();
        	
        	dataref[0]            	= new Object();
            dataref[0].type      	= "DATASET";
            dataref[0].dsObj		= this.dsTA_SLIPNT;
        	
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

        	if (this.fnc_IsDate(this.calSHRACCT_DATE.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "기준일자", this.calSHRACCT_DATE);
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
        		sReturnString += " ACCT_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE.value));
        		sReturnString += " ISSU_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRISSU_DAT1.value));
        		sReturnString += " ISSU_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRISSU_DAT2.value));
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRPAYX_DATE.value));
        		sReturnString += " ACCT_INTL=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRPUCD_ACCT.value));
        		sReturnString += " CUST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value));
        		
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
        		this.dsTA_SLIPNT.set_keystring("G:PAYX_DATE");
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHRPUCD_ACCT,dsPUCD_ACCT,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} 

        }

        /*----------------------------------------------------------------+
         | Help Popup Open  							                   |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
            
            if ((obj.name == "imgHelpSHRCUST_CODE") || (obj.name == "edtSHRCUST_NAME")) {

                arrParam[0] = "FAM0021";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRCUST_NAME";
                arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";
                arrParam[6] = "0,1";                                     

            }
            
            if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
            
             
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        this.grdTA_SLIPNT_oncelldblclick = function(obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "DISP_NUMB") return;
        	
        	var sSlip_Numb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");
        	var sSlip_Line = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");
        	if (this.fnc_Length(this.fnc_Trim(sSlip_Numb)) > 0) {
        		this.fnc_ViewSlipForm(sSlip_Numb, "SHR", this.sUSERLAVEL, "", sSlip_Line); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
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
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRPUCD_ACCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRISSU_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRISSU_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TRMD0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
