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
                this.set_name("FAMC0020");
                this.set_titletext("일(월)계표");
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
            obj._setContents("<ColumnInfo><Column id=\"BALA_CHAX\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"HAPX_CHAX\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"CNTT_CHAX\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"32\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"32\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"PRNT_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"CNTT_DAEX\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"HAPX_DAEX\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"BALA_DAEX\" type=\"BIGDECIMAL\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("row");
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"차변\"/><Cell col=\"3\" rowspan=\"2\" text=\"계정코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"계정과목명\"/><Cell col=\"5\" colspan=\"3\" text=\"대변\"/><Cell row=\"1\" displaytype=\"text\" text=\"잔액\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" text=\"합계\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"건수\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"건수\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"합계\"/><Cell row=\"1\" col=\"7\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" style=\"align:right;\" text=\"bind:BALA_CHAX\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:HAPX_CHAX\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTT_CHAX\"/><Cell col=\"3\" text=\"bind:ACCT_INTL\"/><Cell col=\"4\" displaytype=\"tree\" edittype=\"tree\" style=\"align:left;\" text=\"bind:ACCT_NAME\" treestartlevel=\"1\" treelevel=\"bind:PRNT_LEVL\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNTT_DAEX\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:HAPX_DAEX\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BALA_DAEX\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "274", "71", "111", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");

            obj = new Static("Static2", "absolute", "218", "71", "55", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DAT1", "absolute", "486", "71", "102", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("calSHRACCT_DAT2", "absolute", "606", "71", "102", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static6", "absolute", "590", "71", "14", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "415", "71", "68", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("회계기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "93", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");

            obj = new Static("Static4", "absolute", "28", "71", "66", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
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

            obj = new Static("Static00", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("18");
            obj.set_text("홈 > 재무관리 > 재무기준정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("20");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("21");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "189", "61", "40", "41", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "385", "61", "40", "41", null, null, this);
            obj.set_taborder("23");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "716", "61", "40", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("27");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle00", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("일(월)계표");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "893", "72", "122", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("0원금액 표시 제외");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHREXPT_ZERO", "absolute", "1019", "72", "16", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_value("1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTA_ACCTXF");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "745", "71", "68", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("계정레벨");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPRNT_LEVL", "absolute", "813", "71", "50", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_inputtype("number");
            obj.set_maxlength("1");
            obj.set_autoselect("true");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsTA_ACCTXM");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("일(월)계표");
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
        this.addIncludeScript("FAMC0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMC0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMC0020 일(월)계표
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.12.15		권미영		Initial Created.
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
        this.sBUTTONLIST  = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMC0020";

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRACCT_DAT1.set_value(this.fnc_SubStr(sNowDate, 0, 6) + "01");
        	this.calSHRACCT_DAT2.set_value(sNowDate);
        	
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
        this.fn_Input = function (obj) {
        	//기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능 없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         --------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능 없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
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
        	//기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT", this);
        		
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;

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

        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPNT")) return this.fnc_Message("TMM023");
        	
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
        	
        	if (this.fnc_SubStr(this.calSHRACCT_DAT1.value, 0, 4) != this.fnc_SubStr(this.calSHRACCT_DAT2.value, 0, 4)) {
        		return this.fnc_SearchCheckPostAction("TMM300", "시작연도와 종료연도는 동일한 연도 이어야 합니다.", this.calSHRACCT_DAT2);
        	}

        	return true;

        }
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	//기능없음
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
        		sReturnString += " ACCT_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DAT1.value));
        		sReturnString += " ACCT_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DAT2.value));
        		sReturnString += " PRNT_LEVL=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRPRNT_LEVL.value));
        		sReturnString += " EXPT_ZERO=" 	+ this.fnc_Quote(this.fnc_Trim(this.chkSHREXPT_ZERO.value));
        		
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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.cmbSHRACCT_UNIT_OnChanged, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRPRNT_LEVL.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMC0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
