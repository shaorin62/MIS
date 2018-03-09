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
                this.set_name("TRMB0020");
                this.set_titletext("금융상품거래현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTR_FITRXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_KIND\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"OBAC_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TRAN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TRAN_TYPE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPO_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"WITH_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FITR_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTR_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTR_MARG\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRPY_TAXA\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REAL_PAYX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MAJR_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OTHR_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OTHR_ACNT\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REOC_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_STAT\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsSHRBANK_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">ACNT_KIND</Col><Col id=\"DSNAME\">dsSHRACNT_KIND</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">TRAN_TYPE</Col><Col id=\"DSNAME\">dsSHRTRAN_TYPE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">ACNT_KIND</Col><Col id=\"DSNAME\">dsACNT_KIND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">TRAN_TYPE</Col><Col id=\"DSNAME\">dsTRAN_TYPE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">APPV_STAT</Col><Col id=\"DSNAME\">dsAPPV_STAT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "404", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("9");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_FITRXM", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTR_FITRXM");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("8");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"150\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"45\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"회계단위\"/><Cell col=\"1\" displaytype=\"text\" text=\"금융기관\"/><Cell col=\"2\" displaytype=\"text\" text=\"계좌유형\"/><Cell col=\"3\" displaytype=\"text\" text=\"계좌번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"계좌명\"/><Cell col=\"5\" displaytype=\"text\" text=\"개설일자\"/><Cell col=\"6\" displaytype=\"text\" text=\"만기일자\"/><Cell col=\"7\" displaytype=\"text\" text=\"거래일자\"/><Cell col=\"8\" displaytype=\"text\" text=\"거래유형\"/><Cell col=\"9\" displaytype=\"text\" text=\"입금액\"/><Cell col=\"10\" displaytype=\"text\" text=\"출금액\"/><Cell col=\"11\" displaytype=\"text\" text=\"잔액(A)\"/><Cell col=\"12\" displaytype=\"normal\" text=\"금리\"/><Cell col=\"13\" displaytype=\"text\" text=\"이자수익(B)\"/><Cell col=\"14\" displaytype=\"text\" text=\"선납세액(C)\"/><Cell col=\"15\" displaytype=\"text\" text=\"차인지급액(A-B-C)\"/><Cell col=\"16\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: center;\" text=\"bind:ACCT_UNIT\" suppress=\"1\" combodataset=\"dsACCT_UNIT\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CONM\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:BANK_CODE\" suppress=\"2\" combodataset=\"dsBANK_CODE\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CONM\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:ACNT_KIND\" suppress=\"3\" combodataset=\"dsACNT_KIND\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CONM\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACNT_NUMB\" suppress=\"4\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACNT_NAME\" suppress=\"5\"/><Cell col=\"5\" displaytype=\"date\" style=\"align: center;\" text=\"bind:OBAC_DATE\" suppress=\"6\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" style=\"align: center;\" text=\"bind:EXPN_DATE\" suppress=\"7\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" style=\"align: center;\" text=\"bind:TRAN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:TRAN_TYPE\" combodataset=\"dsTRAN_TYPE\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CONM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" text=\"bind:DEPO_AMOT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" text=\"bind:WITH_AMOT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" text=\"bind:FITR_BALE\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" text=\"bind:INTR_RATE\" mask=\"0.##\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;\" text=\"bind:INTR_MARG\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;\" text=\"bind:PRPY_TAXA\"/><Cell col=\"15\" displaytype=\"number\" style=\"align: right;\" text=\"bind:REAL_PAYX\"/><Cell col=\"16\" displaytype=\"text\" style=\"align: left;\" text=\"bind:MAJR_REMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRTRAN_TYPE", "absolute", "729", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRACNT_KIND", "absolute", "512", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRBANK_CODE", "absolute", "275", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static06", "absolute", "444", "97", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("계좌명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "661", "71", "68", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("거래유형");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "444", "71", "68", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("계좌유형");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "206", "71", "68", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("금융기관");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "28", "97", "68", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("거래일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRAN_DAT2", "absolute", "216", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static60", "absolute", "201", "97", "13", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("~");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRAN_DAT1", "absolute", "96", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtSHRACNT_NAME", "absolute", "657", "97", "192", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACNT_NUMB", "absolute", "512", "97", "120", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACNT_NUMB", "absolute", "634", "97", "22", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_text("금융상품거래현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("47");
            obj.set_text("홈 > 자금관리 > 금융상품거래현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("48");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("56");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("57");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("58");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "415", "61", "40", "67", null, null, this);
            obj.set_taborder("59");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "540", "61", "38", "10", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "539", "92", "102", "5", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "539", "118", "38", "10", null, null, this);
            obj.set_taborder("62");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("63");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("64");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("65");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("금융상품거래현황");
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
        this.addIncludeScript("TRMB0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRMB0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMB0020 금융상품거래현황
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

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TRMB0020";
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
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	var sServerDateTime = this.fnc_GetServerDateTime("DATE")
        	this.calSHRTRAN_DAT1.set_value((this.fnc_Left(sServerDateTime, 4) + "0101"));
        	this.calSHRTRAN_DAT2.set_value(sServerDateTime);

        	this.cmbSHRACCT_UNIT.setFocus();
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e) {

        	if (!this.fn_SearchItemCheck())return;
        	this.fnc_DatasetClear("dsTR_FITRXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTR_FITRXM=dsTR_FITRXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTR_FITRXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e) {
        	// 기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e) {
        	// 기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e) {
        	// 기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {
        	// 기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e) {
        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
         this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTR_FITRXM",this);
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
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if ((this.fnc_DatasetChangeCheck("dsTR_FITRXM")) && (this.fnc_Message("TMM023") == false)) return false;

        	if (!this.fnc_IsDate(this.calSHRTRAN_DAT1.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "거래일자(시작일)", this.calSHRTRAN_DAT1);
        	}

        	if (!this.fnc_IsDate(this.calSHRTRAN_DAT2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "거래일자(종료일)", this.calSHRTRAN_DAT2);
        	}

        	if ((this.fnc_Length(this.fnc_Trim(this.calSHRTRAN_DAT2.value)) > 0) && (this.fnc_Trim(this.calSHRTRAN_DAT1.value) > this.fnc_Trim(this.calSHRTRAN_DAT2.value))) {
        			return this.fnc_SearchCheckPostAction("TMM042", "시작일,종료일", this.calSHRTRAN_DAT2);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " BANK_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRBANK_CODE.value)); //금융기관
        		sReturnString += " ACNT_KIND=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACNT_KIND.value)); //계좌유형
        		sReturnString += " TRAN_TYPE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRTRAN_TYPE.value)); //거래유형
        		sReturnString += " TRAN_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRAN_DAT1.value)); //거래일자1
        		sReturnString += " TRAN_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRAN_DAT2.value)); //거래일자2
        		sReturnString += " ACNT_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACNT_NUMB.value)); //계좌번호
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
        	
        		this.fnc_Information(this.stInformation, this.dsTR_FITRXM.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsTR_FITRXM.rowcount);
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";	//회계단위(조회)
        			arrParam[1]  = "COMBO,cmbSHRBANK_CODE,dsSHRBANK_CODE,0";	//금융기관(조회)
        			arrParam[2]  = "COMBO,cmbSHRACNT_KIND,dsSHRACNT_KIND,0";	//계좌유형(조회)
        			arrParam[3]  = "COMBO,cmbSHRTRAN_TYPE,dsSHRTRAN_TYPE,0";	//거래유형(조회)
        			arrParam[4]  = "GRID,grdTR_FITRXM,dsACCT_UNIT,ACCT_UNIT";   //회계단위(그리드)
        			arrParam[5]  = "GRID,grdTR_FITRXM,dsBANK_CODE,BANK_CODE";   //금융기관(그리드)
        			arrParam[6]  = "GRID,grdTR_FITRXM,dsACNT_KIND,ACNT_KIND";   //계좌유형(그리드)
        			arrParam[7]  = "GRID,grdTR_FITRXM,dsTRAN_TYPE,TRAN_TYPE";   //거래유형(그리드)
        			arrParam[8]  = "GRID,grdTR_FITRXM,dsAPPV_STAT,APPV_STAT";   //전표승인상태(그리드)
        		
        		// 계좌유형(참조1 : FITR || 전체인것) 필터 처리
        		var sFilterRequirement = "REF1_FILD == \"FITR\" || COMD_CDNM == \"전체\"";
        		this.dsSHRACNT_KIND.filter(sFilterRequirement);
        		this.dsACNT_KIND.filter(sFilterRequirement);
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}
        	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         ***************************************************************************************************/
         
         /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

            if ((obj.name == "imgHelpSHRACNT_NUMB") || (obj.name == "edtSHRACNT_NAME")) { // 조회 Help POPUP START

                arrParam[0] = "TRM0011";
                arrParam[1] = "FITR";
                arrParam[2] = this.fnc_Trim(this.edtSHRACNT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACNT_NAME";
                arrParam[5] = "edtSHRACNT_NUMB,edtSHRACNT_NAME";
                arrParam[6] = "2,3";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
            }
        }

        
        /*----------------+
         |  전표조회 팝업  |
         +-----------------*/
        this.fn_OpenSlip = function (obj,e) {

        	// 전표번호 셀을 더블클릭 했을때만 전표조회 처리
        	if (this.fnc_GridColumnIndex(this.grdTR_FITRXM, "SLIP_NUMB") == e.cell)	{
        		var sSLIP_NUMB = this.fnc_Trim(this.dsTR_FITRXM.getColumn(e.row, "SLIP_NUMB"));
        		this.lookupFunc("gfn_PopSlipForm").call(sSLIP_NUMB, "SHR", this.sUSERLAVEL);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTR_FITRXM.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.cmbSHRTRAN_TYPE.addEventHandler("onitemchanged", this.cmbSHRCARD_GUBN01_onitemchanged, this);
            this.cmbSHRTRAN_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACNT_KIND.addEventHandler("onitemchanged", this.cmbSHRCARD_GUBN01_onitemchanged, this);
            this.cmbSHRACNT_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRTRAN_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRTRAN_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACNT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACNT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRACNT_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TRMB0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
