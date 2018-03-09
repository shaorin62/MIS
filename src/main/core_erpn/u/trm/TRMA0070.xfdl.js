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
                this.set_name("TRMA0070");
                this.set_titletext("제예금명세서");
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
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CHAX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_AMNT\" size=\"17\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_CODE\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VACD\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VANM\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"EXCH_RATE\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_AMNT\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"GRUP_CNTT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"SEQ\" size=\"25\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("6");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj.set_extendsizetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"202\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"95\"/><Column size=\"140\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"계정코드\"/><Cell col=\"1\" style=\"background: ;\" text=\"계정명\"/><Cell col=\"2\" text=\"은행\"/><Cell col=\"3\" style=\"background: ;\" text=\"계좌명\"/><Cell col=\"4\" style=\"background: ;\" text=\"계좌번호\"/><Cell col=\"5\" style=\"background: ;\" text=\"회계일자\"/><Cell col=\"6\" style=\"background: ;\" text=\"전표번호\"/><Cell col=\"7\" text=\"적요\"/><Cell col=\"8\" text=\"차변\"/><Cell col=\"9\" text=\"대변\"/><Cell col=\"10\" text=\"잔액\"/><Cell col=\"11\" text=\"통화\"/><Cell col=\"12\" text=\"환율\"/><Cell col=\"13\" style=\"background: ;\" text=\"통화금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_INTL\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCT_NAME\" editlimit=\"0\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:BANK_NAME\" editlimit=\"0\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:COND_VANM\" editlimit=\"0\" expandshow=\"show\" expandsize=\"20\" suppress=\"4\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:COND_VACD\" editlimit=\"0\" suppress=\"5\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_DATE\" expr=\"expr:Eco.decode(dataset.getRowLevel(currow), 1,'[월 계]', 2, '[누 계]', ACCT_DATE)\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:DISP_NUMB\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_NAME\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_CHAX\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_DAEX\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BALA_AMNT\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:CURR_GUBN\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:center;\" text=\"bind:EXCH_RATE\" mask=\".#####\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:FORI_AMNT\" mask=\"expr:Eco.decode(dataset.getRowLevel(currow), 1,'', 2, '', '##,##0.00')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "28", "71", "86", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "92", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Div("divButtonList", "absolute", "8", "35", "200", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("12");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("13");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("15");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("제예금명세서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("18");
            obj.set_text("홈 > 자금관리 > 자금운용관리 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "188", "61", "40", "41", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "217", "71", "76", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("회계기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DAT1", "absolute", "286", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static6", "absolute", "390", "71", "14", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DAT2", "absolute", "403", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static01", "absolute", "532", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "601", "71", "80", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_INTL", "absolute", "683", "71", "21", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "706", "71", "110", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACNT_NAME", "absolute", "1060", "71", "90", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACNT_NUMB", "absolute", "1037", "71", "21", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACNT_NUMB", "absolute", "915", "71", "120", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "845", "71", "68", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("계좌번호");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "503", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "816", "61", "40", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "279", "61", "8", "41", null, null, this);
            obj.set_taborder("43");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "593", "61", "8", "41", null, null, this);
            obj.set_taborder("44");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "907", "61", "8", "41", null, null, this);
            obj.set_taborder("45");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 200, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제예금명세서");
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
        this.addIncludeScript("TRMA0070.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TRMA0070.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TRMA0070.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMA0070 제예금명세서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2017.01.05		황치웅		Initial Created.
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
        this.sPACKAGENAME = "TRMA0070";

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
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT,"DISP_NUMB", "Y");
        	
            var styleObj = this.grdTA_SLIPNT.getCellProperty("body", this.fnc_GridColumnIndex(this.grdTA_SLIPNT, "ACCT_INTL"), "style");
        		styleObj.set_background(application.GBL_COLORNORMAL);
        		styleObj.set_background2(application.GBL_COLORNORMAL);
        		styleObj = this.grdTA_SLIPNT.getCellProperty("body", this.fnc_GridColumnIndex(this.grdTA_SLIPNT, "ACCT_NAME"), "style");
        		styleObj.set_background(application.GBL_COLORNORMAL);
        		styleObj.set_background2(application.GBL_COLORNORMAL);
        		styleObj = this.grdTA_SLIPNT.getCellProperty("body", this.fnc_GridColumnIndex(this.grdTA_SLIPNT, "BANK_NAME"), "style");
        		styleObj.set_background(application.GBL_COLORNORMAL);
        		styleObj.set_background2(application.GBL_COLORNORMAL);
        		styleObj = this.grdTA_SLIPNT.getCellProperty("body", this.fnc_GridColumnIndex(this.grdTA_SLIPNT, "COND_VANM"), "style");
        		styleObj.set_background(application.GBL_COLORNORMAL);
        		styleObj.set_background2(application.GBL_COLORNORMAL);
        		styleObj = this.grdTA_SLIPNT.getCellProperty("body", this.fnc_GridColumnIndex(this.grdTA_SLIPNT, "COND_VACD"), "style");
        		styleObj.set_background(application.GBL_COLORNORMAL);
        		styleObj.set_background2(application.GBL_COLORNORMAL);

        	
        	var sNowDate   = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	var sFirstDate = this.fnc_SubStr(sNowDate, 0, 6) + "01";
        	this.calSHRACCT_DAT1.set_value(sFirstDate);
        	this.calSHRACCT_DAT2.set_value(sNowDate);
        	
        	this.cmbSHRACCT_UNIT.setFocus();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e) {

        	this.close();
        	
        }

        /*------------------------+
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

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時	|
         ---------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTA_SLIPNT");
        	this.grdTA_SLIPNT.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this); 

        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {

        	var reportfile = "/trm/TRMA0070R01.jrf";
        	
        	var params  =  "ACCT_DATE1#" + this.fnc_Trim(this.calSHRACCT_DAT1.value);
        		params += "#ACCT_DATE2#" + this.fnc_Trim(this.calSHRACCT_DAT2.value);
        		params += "#ACCT_NAME#"  + this.fnc_Trim(this.edtSHRACCT_NAME.value);

        	var dataref = new Array();
        	
        		dataref[0]            	= new Object();
        		dataref[0].type      	= "DATASET";
        		dataref[0].dsObj		= this.dsTA_SLIPNT;
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }

        /*----------------------------------+
         |  10. 화면 종료時 처리 할 사항	|
         +----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT", this);
        		
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);

        }

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);

        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------+
         |  조회 여부 체크!   |
         +--------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPNT")) {
        		return this.fnc_Message("TMM023");
        	}
        	
        	if (this.fnc_Length(this.cmbSHRACCT_UNIT.value) < 1) {
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
        	
        	if (this.fnc_Length(this.edtSHRACCT_INTL.value) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "계정과목코드", this.edtSHRACCT_NAME);
        	}
        	
        	return true;

        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DAT1.value));
        		sReturnString += " ACCT_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DAT2.value));
        		sReturnString += " ACCT_INTL=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL.value));
        		sReturnString += " ACCT_NAME=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_NAME.value));
        		sReturnString += " ACNT_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACNT_NUMB.value));
        		sReturnString += " ACNT_NAME=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACNT_NAME.value));		
        	}

        	return sReturnString;

        }

        /*-------------------------------------+
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
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"));		

        		this.grdTA_SLIPNT.set_enableredraw(false);
        		
        		this.dsTA_SLIPNT.set_keystring("G:ACCT_INTL+ACCT_NAME+BANK_CODE+BANK_NAME+COND_VACD+COND_VANM,ACCT_INTL+ACCT_NAME+BANK_CODE+BANK_NAME+COND_VACD+COND_VANM+ACCT_MNTH");
        		//전원이월 [월계] 로우 삭제
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

        	}
        }

        /*----------------------+
         | Help Popup Open  	|
         +----------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
            
            if ((obj.name == "imgHelpSHRACCT_INTL") || (obj.name == "edtSHRACCT_NAME")) {
        		arrParam[0] = "FAM0031";                                
        		arrParam[1] = "";                                      
        		arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRACCT_NAME";   
        		arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_NAME";
        		arrParam[6] = "0,1";
        		
            } else if ((obj.name == "imgHelpSHRACNT_NUMB") || (obj.name == "edtSHRACNT_NAME")) {
                arrParam[0] = "TRM0013";                                
                arrParam[1] = this.fnc_Trim(this.edtSHRACCT_INTL.value) + "," + this.fnc_Trim(this.edtSHRACCT_INTL.value);
                arrParam[2] = this.fnc_Trim(this.edtSHRACNT_NAME.value);
                arrParam[3] = "N";   		                                    
                arrParam[4] = "edtSHRACNT_NAME";                         
                arrParam[5] = "edtSHRACNT_NUMB,edtSHRACNT_NAME";         
                arrParam[6] = "2,3";                                     

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
        	    if (this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0 ) {
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
            this.grdTA_SLIPNT.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_oncelldblclick, this);
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRACCT_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACNT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACNT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRACNT_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRACNT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TRMA0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
