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
                this.set_name("PAYB0220");
                this.set_titletext("기부처관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_DONAXM", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DNTN_ORGT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DOTE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_RGNB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DNTN_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DOTE_CODE</Col><Col id=\"DSNAME\">dsDOTE_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">PAY0004</Col><Col id=\"DSNAME\">dsALDE_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\">D%</Col><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_DONAXM_TEMP", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DNTN_ORGT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DOTE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_RGNB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DNTN_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_DONAXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_DONAXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"92\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"128\"/><Column size=\"165\"/><Column size=\"146\"/><Column size=\"203\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"급여일\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"급여구분\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"공제명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"기부처상호\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"사업자(주민)번호(-제외)\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"기부유형\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"기부내용\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center\" text=\"bind:PAYX_DATE\" editlimit=\"0\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left\" text=\"bind:WAGE_NAME\" editlimit=\"0\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" text=\"bind:EXPD_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left\" text=\"bind:DNTN_ORGT\" editlimit=\"40\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" editfilter=\"number\" style=\"align:center\" text=\"bind:BIZR_RGNB\" editlimit=\"13\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left\" text=\"bind:DOTE_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" style=\"align:left\" text=\"bind:DNTN_CNTT\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDNTN_ORGT", "absolute", "598", "71", "140", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_maxlength("20");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "248", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("5");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("popINSERT", "absolute", "552", "848", "355", "77", null, null, this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_scrollbars("none");
            obj.style.set_background("white");
            this.addChild(obj.name, obj);
            obj = new Static("Shape3", "absolute", "4", "6", "342", "29", null, null, this.popINSERT);
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new MaskEdit("medPAYX_DATE", "absolute", "92", "10", "93", "21", null, null, this.popINSERT);
            obj.set_enable("false");
            obj.set_mask("####-##-##");
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_cssclass("styFormSearchItem");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtPAYX_NAME", "absolute", "208", "10", "134", "21", null, null, this.popINSERT);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemText");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtPAYX_CODE", "absolute", "53", "46", "134", "21", null, null, this.popINSERT);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Static7", "absolute", "6", "8", "84", "25", null, null, this.popINSERT);
            obj.set_text("지급일");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "206", "45", "66", "23", null, null, this.popINSERT);
            obj.set_taborder("6");
            obj.set_text("업로드");
            obj.style.set_align("right");
            obj.set_cssclass("styTextButtonBizProc");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "279", "45", "66", "23", null, null, this.popINSERT);
            obj.set_taborder("7");
            obj.set_text("닫    기");
            obj.style.set_align("right");
            obj.set_cssclass("styTextButtonBizProc");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgHelpePAYX_NAME", "absolute", "186", "10", "22", "21", null, null, this.popINSERT);
            obj.set_cssclass("sytHelpPopupInput");
            obj.getSetter("transparenthittest").set("false");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "543", "71", "47", "21", null, null, this);
            obj.set_text("기부처");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRSTDS_YEAR", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "28", "71", "60", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("기부년도");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXPD_CODE", "absolute", "269", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREXPD_CODE", "absolute", "351", "71", "22", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXPD_NAME", "absolute", "374", "71", "140", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_autoskip("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle8", "absolute", "204", "71", "60", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("공제코드");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("기부처관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("19");
            obj.set_text("홈 > 급여관리 > 급여관리 > 기부처관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("28");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 355, 77, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_text("");
            		p.set_visible("false");
            		p.set_scrollbars("none");
            		p.style.set_background("white");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("기부처관리");
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
        this.addIncludeScript("PAYB0220.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0220.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0220 기부처관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		고민주		Initial Created.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/ 
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYB0220"; 

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

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.medSHRSTDS_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4));
        	this.edtSHRDNTN_ORGT.setFocus();

        
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPY_DONAXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_DONAXM=dsPY_DONAXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_DONAXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPY_DONAXM.insertRow(this.dsPY_DONAXM.rowposition + 1);
        	this.fnc_GridSetCellFocus(this.grdPY_DONAXM, "WAGE_NAME");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsPY_DONAXM.deleteRow(this.dsPY_DONAXM.rowposition);
        	this.grdPY_DONAXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsPY_DONAXM");
        	this.grdPY_DONAXM.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_DONAXM=dsPY_DONAXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_DONAXM.setFocus();

        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_DONAXM", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_DONAXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsPY_DONAXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	var sQuestionText = "지급일:" + this.fnc_Trim(this.dsPY_DONAXM.getColumn(this.dsPY_DONAXM.rowposition, "PAYX_DATE"))
        						+ ",급여구분:" + this.fnc_Trim(this.dsPY_DONAXM.getColumn(this.dsPY_DONAXM.rowposition, "WAGE_NAME"));;
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_DONAXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_DONAXM.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_DONAXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_DONAXM.getColumn(i, "PAYX_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지급일", this.dsPY_DONAXM, i, this.grdPY_DONAXM, "PAYX_DATE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_DONAXM.getColumn(i, "WAGE_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "급여구분", this.dsPY_DONAXM, i, this.grdPY_DONAXM, "WAGE_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_DONAXM.getColumn(i, "EXPD_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "공제코드", this.dsPY_DONAXM, i, this.grdPY_DONAXM, "EXPD_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_DONAXM.getColumn(i, "EXPD_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "공제명", this.dsPY_DONAXM, i, this.grdPY_DONAXM, "EXPD_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_DONAXM.getColumn(i, "DOTE_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "기부유형", this.dsPY_DONAXM, i, this.grdPY_DONAXM, "DOTE_CODE");
        		}
        		
        	}
        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DNTN_ORGT=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDNTN_ORGT.value)); 
        		sReturnString += " STDS_YEAR=" + this.fnc_Quote(this.fnc_Trim(this.medSHRSTDS_YEAR.value)); 
        		sReturnString += " EXPD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREXPD_CODE.value)); 
        	
        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation, this.dsPY_DONAXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_DONAXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fn_KeyFieldDisible(this.dsPY_DONAXM);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	//코드 바인딩
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdPY_DONAXM,dsDOTE_CODE,DOTE_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdPY_DONAXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_DONAXM, "EXPD_NAME"), "edittype", "normal");
        		this.grdPY_DONAXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_DONAXM, "WAGE_NAME"), "edittype", "normal");
        	
        	} else {
        		this.grdPY_DONAXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_DONAXM, "EXPD_NAME"), "edittype", "none");
        		this.grdPY_DONAXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_DONAXM, "WAGE_NAME"), "edittype", "none");
        	}

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHREXPD_CODE") || (obj.name == "edtSHREXPD_NAME")) {
        		arrParam[0] = "PAY0012"; 								//Popup ID
        		arrParam[1] = ",D,"; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHREXPD_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHREXPD_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHREXPD_CODE,edtSHREXPD_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        		
        	} else if (obj.name == "grdPY_DONAXM") {
        	
        		if (sColumnID == "WAGE_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "WAGE_NAME") {
        			arrParam[0] = "PAY0001";
        			arrParam[1] = "";
        			arrParam[2] = "WAGE_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_DONAXM";
        			arrParam[5] = "PAYX_DATE,WAGE_CODE,WAGE_NAME";
        			arrParam[6] = "0,1,3";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		} else if (sColumnID == "EXPD_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EXPD_NAME") {
        			arrParam[0] = "PAY0012";
        			arrParam[1] = ",D,";
        			arrParam[2] = "EXPD_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_DONAXM";
        			arrParam[5] = "EXPD_CODE,EXPD_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        this.dsPY_DONAXM_OnColumnChanged = function(obj,e){

        	if (e.columnid == "WAGE_NAME") this.fn_HelpDialoge(this.grdPY_DONAXM, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "EXPD_NAME") this.fn_HelpDialoge(this.grdPY_DONAXM, "YES" ,e.oldvalue, e.columnid);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_DONAXM.addEventHandler("oncolumnchanged", this.dsPY_DONAXM_OnColumnChanged, this);
            this.dsPY_DONAXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdPY_DONAXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.edtSHRDNTN_ORGT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDNTN_ORGT.addEventHandler("oneditclick", this.edtSHRFIRM_NAME_oneditclick, this);
            this.popINSERT.medPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtPAYX_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtPAYX_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.popINSERT.edtPAYX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtPAYX_CODE.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.popINSERT_btnClose_OnClick, this);
            this.popINSERT.imgHelpePAYX_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.medSHRSTDS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREXPD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREXPD_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREXPD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREXPD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYB0220.xfdl");
        this.loadPreloadList();
       
    };
}
)();
