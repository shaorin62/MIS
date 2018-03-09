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
                this.set_name("FAMA0065");
                this.set_titletext("계정사용권한관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MEMO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRUSEX_YSNO</Col><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"MEMO\">사용여부</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_AAGRXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AAGR_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"AAGR_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_AAGRXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"AAGR_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_PATH\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("계정사용권한관리");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("64");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "25", null, this);
            obj.set_text("재무관리 > 재무기준정보 > 계정사용권한관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("65");
            obj.set_scrollbars("none");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_AAGRXD", "absolute", "368", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_AAGRXD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("row");
            obj.set_taborder("55");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"380\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"계정코드\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"계정과목명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"사용\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"PATH\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:CHK\" editlimit=\"4\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_INTL\" editlimit=\"100\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCT_NAME\" combodisplayrowcount=\"6\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:ACCT_YSNO\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCT_PATH\" editlimit=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_AAGRXM", "absolute", "8", "128", "340", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_AAGRXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("4");
            obj.set_selecttype("row");
            obj.set_autofittype("col");
            obj.set_scrollpixel("none");
            obj.set_autosizebandtype("body");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"220\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정권한그룹코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"계정권한그룹명\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:AAGR_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:AAGR_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "115", "71", "213", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "27", "71", "90", "21", null, null, this);
            obj.set_text("계정과목/명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("57");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "458", "107", null, "21", "569", null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("69");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "608", "0", "36", "60", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("71");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1162", "0", "25", "717", null, null, this);
            obj.set_taborder("72");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "736", "56", "145", "4", null, null, this);
            obj.set_taborder("73");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("74");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "107", "61", "8", "41", null, null, this);
            obj.set_taborder("75");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", null, "1154", "15", null, "0", this);
            obj.set_taborder("76");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "20", "29", null, null, this);
            obj.set_taborder("77");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "328", "61", "40", "41", null, null, this);
            obj.set_taborder("78");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "264", "6", null, null, this);
            obj.set_taborder("79");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "368", "107", "74", "21", null, null, this);
            obj.set_taborder("103");
            obj.set_text("계정과목");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "55.43%", "103", null, "25", "37.83%", null, this);
            obj.set_taborder("105");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "357", "71", "90", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("권한부여여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_YSNO", "absolute", "452", "71", "95", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.getSetter("binddataset").set("dsTA_ACCTXM");
            obj.set_autoselect("true");

            obj = new Static("stInformation05", "absolute", "447", "111", "10", "13", null, null, this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "107", "100", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_text("계정권한그룹");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "124", "107", null, "21", "903", null, this);
            obj.set_taborder("115");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "113", "111", "10", "13", null, null, this);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("65");
            		p.set_scrollbars("none");
            		p.style.set_color("black");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("계정사용권한관리");
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
        this.addIncludeScript("FAMA0065.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0065.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAMA0065 계정사용권한관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.12.06		권미영		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                            *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리              *
         *                                                                                                 *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망   *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /**************************
         *  공통 Script Include  *
         **************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTFFTTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMA0065";
        this.aKeyValue 	  = new Array(2);

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
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.edtSHRACCT_NAME.setFocus();
        	
        	this.fnc_DatasetClear("dsTA_AAGRXM,dsTA_AAGRXD"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_AAGRXM=dsTA_AAGRXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_AAGRXM.setFocus();
        	
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
        	
        	this.fnc_DatasetClear("dsTA_AAGRXD"); 
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_AAGRXD=dsTA_AAGRXD";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음.
        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음.
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTA_AAGRXD");
        	this.grdTA_AAGRXD.setFocus();
        	
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsTA_AAGRXM.getColumn(this.dsTA_AAGRXM.rowposition, "AAGR_CODE");
        	this.aKeyValue[1] = this.dsTA_AAGRXD.getColumn(this.dsTA_AAGRXD.rowposition, "ACCT_INTL");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_AAGRXD=dsTA_AAGRXD:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_AAGRXM.setFocus();

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
        	//기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess =  function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_AAGRXD", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e){
        	this.fnc_FormUnload(obj,e);
        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e) {	
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*--------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +--------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_AAGRXD")) return this.fnc_Message("TMM023");
        	return true;
        	
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsTA_AAGRXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}	
        	
        	for (var i = 0; i < this.dsTA_AAGRXD.getRowCount(); i++) {

        		if (this.dsTA_AAGRXD.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		this.dsTA_AAGRXD.setColumn(i, "AAGR_CODE", this.dsTA_AAGRXM.getColumn(this.dsTA_AAGRXM.rowposition, "AAGR_CODE"));
        		
        	}
        		
        	return true;
        	
        }

        /*---------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +-----------------------------------***-------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SEARCH01") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " AAGR_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dsTA_AAGRXM.getColumn(this.dsTA_AAGRXM.rowposition, "AAGR_CODE")));
        		sReturnString += " ACCT_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_NAME.value));
        		sReturnString += " USEX_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSEX_YSNO.value));

        	} else if (sKind == "SAVE00") {
        		
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
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

        /*--------------------------------------+
         |  Transaction 후 Post Process!       |
         +--------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "SEARCH00") {
        		
        		this.fnc_Information(this.stInformation, this.dsTA_AAGRXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_AAGRXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		var iRow = this.dsTA_AAGRXM.findRowExpr("AAGR_CODE=='" + this.aKeyValue[0] + "'");
         		if (iRow < 0) iRow = 0;
         		
         		this.grdTA_AAGRXM.selectRow(iRow);
         		this.dsTA_AAGRXM.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";
        		
        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.stInformation1, this.dsTA_AAGRXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.grdTA_AAGRXD.setCellProperty("head", this.fnc_GridColumnIndex(this.grdTA_AAGRXD, "CHK"), "text", "0");

        		var iRow = this.dsTA_AAGRXD.findRowExpr("ACCT_INTL=='" + this.aKeyValue[1] + "'");
        		
         		if (iRow < 0) iRow = 0;
         		
         		this.grdTA_AAGRXD.selectRow(iRow);
         		this.dsTA_AAGRXD.set_rowposition(iRow);
         		
        		this.aKeyValue[1] = "";
        		
        	} else if (sMethodName == "SAVE00") {
        		
                this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRUSEX_YSNO,dsSHRUSEX_YSNO,0";
        		this.fnc_CommonCodeInnerBind(arrParam);	
        	
        	} 
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	this.fn_Search();
        	
        }

        /*----------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
               
        }
         
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.grdTA_AAGRXD_onheadclick = function(obj,e) {
        	
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_AAGRXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_AAGRXD.addEventHandler("onheadclick", this.grdTA_AAGRXD_onheadclick, this);
            this.edtSHRACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMA0065.xfdl");
        this.loadPreloadList();
       
    };
}
)();
