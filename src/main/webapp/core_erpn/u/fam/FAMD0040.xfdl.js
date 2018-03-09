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
                this.set_name("FAMD0040");
                this.set_titletext("미결잔액세부현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"DSNAME\">dsSHRCOMX_YSNO</Col><Col id=\"CODEID\">COMX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"35\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACCT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SLIP_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BANJ_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BANJ_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"BANJ_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"BANJ_DISP\" size=\"35\" prop=\"default\" type=\"STRING\"/><Column id=\"BANJ_ACDT\" type=\"STRING\" size=\"8\"/><Column id=\"COND_VANM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"BANJ_REMK\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CNTT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">FAM0001</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"75\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정과목\"/><Cell col=\"1\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"2\" displaytype=\"text\" text=\"발생번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"회계일\"/><Cell col=\"4\" displaytype=\"text\" text=\"발생금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"관리항목\"/><Cell col=\"6\" displaytype=\"text\" text=\"적요\"/><Cell col=\"7\" displaytype=\"text\" text=\"정산전표번호\"/><Cell col=\"8\" displaytype=\"text\" text=\"정산회계일\"/><Cell col=\"9\" displaytype=\"text\" text=\"정산금액\"/><Cell col=\"10\" displaytype=\"text\" text=\"잔액\"/><Cell col=\"11\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:ACCT_INTL\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ACCT_NAME\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:DISP_NUMB\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ACCT_DATE\" suppress=\"5\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" suppress=\"6\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:COND_VANM\" suppress=\"7\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\" suppress=\"8\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center;\" text=\"bind:BANJ_DISP\"/><Cell col=\"8\" displaytype=\"date\" style=\"align:center;\" text=\"bind:BANJ_ACDT\" suppress=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BANJ_AMNT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BALA_AMNT\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\" text=\"bind:BANJ_REMK\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;SLIP_CNTT==1&quot;, &quot;SLIP_AMNT&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;BANJ_AMNT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;SLIP_CNTT==1&quot;, &quot;BALA_AMNT&quot;)\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "9", "133", "400", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static0", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("26");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("27");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("미결잔액세부현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("29");
            obj.set_text("홈 > 재무관리 > 미결정산 > 미결잔액현황");
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

            obj = new Static("Static07", "absolute", "898", "23", "264", "10", null, null, this);
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

            obj = new Static("Static09", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "416", "92", "102", "5", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "416", "61", "38", "10", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "416", "118", "38", "10", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "245", "71", "66", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "301", "71", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static14", "absolute", "28", "97", "76", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INT1", "absolute", "96", "97", "120", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpSHRACCT_INT1", "absolute", "218", "97", "22", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAM1", "absolute", "241", "97", "158", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "404", "97", "14", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INT2", "absolute", "419", "97", "120", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpSHRACCT_INT2", "absolute", "541", "97", "22", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAM2", "absolute", "564", "97", "169", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "446", "71", "76", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("발생기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DAT1", "absolute", "514", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRACCT_DAT2", "absolute", "633", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static08", "absolute", "762", "71", "90", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("정산완료여부");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUNMC_YSNO", "absolute", "856", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static6", "absolute", "619", "71", "14", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("~");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("미결잔액세부현황");
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
        this.addIncludeScript("FAMD0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMD0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMD0040 미결세부현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		오혜성		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         *   Form Common Script                                                                            *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리              *
         *                                                                                                 *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망   *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /************************
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부*
         **********************/
        this.sBUTTONLIST = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMD0040";

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
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT, "DISP_NUMB", "Y");
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT, "BANJ_DISP", "Y");
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	for (var i = 0; i < this.grdTA_SLIPNT.getCellCount("body"); i++ ) {

        		var styleObj = this.grdTA_SLIPNT.getCellProperty("body", i, "style");
        		styleObj.set_background("expr:DISP_GUBN == '2' ? '#d7f1eeff' : 'white'");
        		styleObj.set_background2("expr:DISP_GUBN == '2' ? '#d7f1eeff' : 'white'");

        	}

        	this.calSHRACCT_DAT1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4) + "0101");
        	this.calSHRACCT_DAT2.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.cmbSHRACCT_UNIT.setFocus();

        } 

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj,e) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsTA_SLIPNT");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT.setFocus();

        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	//기능 없음
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능 없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTA_SLIPNT1 dsTA_SLIPNT2");
        	this.grdTA_SLIPNT.setFocus();

        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
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
        	// 기능없음.
        }

        /*----------------------------------+
         |  10.화면 종료時 처리 할 사항  |
         +----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT", this);
        		
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*--------------------------------------+
         |  11.단축키 처리(Form KeyDown)       |
         +--------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*--------------------------------------+
         |  12.Text Box가 Focus를 받을 때      |
         +--------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                 *
         **************************************************************************************************/
        /*---------------------+
         /  조회 여부 체크!  |
         +---------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_Length(this.cmbSHRACCT_UNIT.value) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);
        	}
        	
        // 	if (this.fnc_Length(this.cmbSHRACCT_GUBN.value) < 1) {
        // 		return this.fnc_SearchCheckPostAction("TMM001", "사업장", this.cmbSHRACCT_GUBN);
        // 	}

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

        /*--------------------+
         |  삭제 여부 체크!  |
         +--------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        }

        /*--------------------+
         |  저장 여부 체크!  |
         +--------------------*/
        this.fn_SaveItemCheck = function () {
        	//기능없음
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") 
        	{
        		sReturnString = " pgm="         + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_INT1=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INT1.value));
        		sReturnString += " UNMC_YSNO="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRUNMC_YSNO.value));

        		if (this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_INT2.value)) < 1) {
        			sReturnString += " ACCT_INT2=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INT1.value));
        		} else {
        			sReturnString += " ACCT_INT2=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INT2.value));
        		}

        		sReturnString += " ACCT_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DAT1.value));
        		sReturnString += " ACCT_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DAT2.value));
        		
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

        /*------------------------------------+
         |  Transaction 후 Post Process!      |
         +------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == 'SEARCH00') {

        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"));	

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHRUNMC_YSNO,dsSHRCOMX_YSNO,2";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}

        }

        /*--------------------+
         | Help Popup Open    |
         +--------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "ImgHelpSHRACCT_INT1") || (obj.name == "edtSHRACCT_NAM1")) {

        			arrParam[0] = "FAM0034";                                
        			arrParam[1] = "";                                      
        			arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAM1.value); 
        			arrParam[3] = "N"; 
        			arrParam[4] = "edtSHRACCT_NAM1";  
        			
        		if (this.fnc_Trim(this.edtSHRACCT_INT2.value) < 1) {
        			                                                
        			arrParam[5] = "edtSHRACCT_INT1,edtSHRACCT_NAM1,edtSHRACCT_INT2,edtSHRACCT_NAM2";         
        			arrParam[6] = "0,1,0,1";                                     
        		
        		} else {
        		                                                            
        			arrParam[5] = "edtSHRACCT_INT1,edtSHRACCT_NAM1";         
        			arrParam[6] = "0,1";                                    
        		
        		}
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
            } else if ((obj.name == "ImgHelpSHRACCT_INT2") || (obj.name == "edtSHRACCT_NAM2")) {

                arrParam[0] = "FAM0034";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAM2.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRACCT_NAM2";                         
                arrParam[5] = "edtSHRACCT_INT2,edtSHRACCT_NAM2";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

            } 

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                              *
         **************************************************************************************************/
        this.grdTA_SLIPNT_oncelldblclick = function(obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
            
            if (columnName != "DISP_NUMB" && columnName != "BANJ_DISP") return;
            
            var sSlip_Numb = "";
            var sSlip_Line = "";
        	if (columnName == "DISP_NUMB") {
        		sSlip_Numb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");
        		sSlip_Line = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");
        	} else if (columnName == "BANJ_DISP") {
        	    sSlip_Numb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BANJ_NUMB");
        	    sSlip_Line = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BANJ_LINE");
        	}    
        	
        	if (this.fnc_Length(this.fnc_Trim(sSlip_Numb)) > 0) this.fnc_ViewSlipForm(sSlip_Numb, "SHR", this.sUSERLAVEL, "", sSlip_Line); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표

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
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_INT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.ImgHelpSHRACCT_INT1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRACCT_NAM1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAM1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.ImgHelpSHRACCT_INT2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRACCT_NAM2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAM2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRACCT_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static08.addEventHandler("onclick", this.Static01_onclick, this);
            this.cmbSHRUNMC_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMD0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
