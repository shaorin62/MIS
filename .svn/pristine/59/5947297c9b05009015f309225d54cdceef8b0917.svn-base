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
                this.set_name("TMMA0120");
                this.set_titletext("자료조회처리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_VIMNXM", this);
            obj._setContents("<ColumnInfo><Column id=\"VIEW_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEBU_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"SUTR_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"CBCL_INDX\" type=\"STRING\" size=\"256\"/><Column id=\"FXCL_INDX\" type=\"STRING\" size=\"256\"/><Column id=\"AGGR_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_VICDXL", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"VIEW_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRAL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SECH_COND\" type=\"STRING\" size=\"256\"/><Column id=\"SECN_CLID\" type=\"STRING\" size=\"256\"/><Column id=\"CDIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"POPP_XDAX\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INIT_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"CDRI_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"CDIS_HELP\" type=\"STRING\" size=\"256\"/><Column id=\"SECH_VALU\" type=\"STRING\" size=\"256\"/><Column id=\"SECH_VALU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_VALU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGRID_DATA", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTM_VIMNXM", "absolute", "8", "138", "332", null, null, "270", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsTM_VIMNXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("row");
            obj.set_taborder("0");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"170\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"시스템\"/><Cell col=\"1\" text=\"양식명\"/></Band><Band id=\"body\"><Cell text=\"bind:SYST_NAME\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:VIEW_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_VICDXL", "absolute", "8", null, "332", "240", null, "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTM_VICDXL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"조회조건\"/><Cell col=\"1\" text=\"값\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"입력\"/></Band><Band id=\"body\"><Cell style=\"color:expr:(CDRI_YSNO == 1? '#FE4F00ff': '#797F8Bff');color2:expr:(CDRI_YSNO == 1? '#FE4F00ff': '#797F8Bff');\" text=\"bind:SECH_COND\"/><Cell col=\"1\" displaytype=\"expr:Eco.decode(CDIT_CODE, 'DATE', 'date', 'normal')\" edittype=\"none\" text=\"bind:SECH_VALU_NM\" mask=\"expr:Eco.decode(CDIT_CODE, 'DATE', 'yyyy.MM.dd', '')\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"expr:Eco.decode(CDIT_CODE, 'TEXT', 'text', 'COMBO', 'combo', 'COMCD', 'combo', 'POPUP', 'normal', 'DATE', 'date', 'normal')\" edittype=\"expr:Eco.decode(CDIT_CODE, 'TEXT', 'text', 'COMBO', 'combo', 'COMCD', 'combo', 'POPUP', 'normal', 'DATE', 'date', 'normal')\" style=\"align:left;\" text=\"bind:INPT_VALU\" mask=\"expr:Eco.decode(dataset.getColumn(currow, 'CDIT_CODE'), 'DATE', 'yyyy.MM.dd', '')\" editlimit=\"0\" editlengthunit=\"ascii\" expandshow=\"expr:CDIT_CODE == 'POPUP' ? 'show':'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdGRID_DATA", "absolute", "360", "138", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("8");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("none");
            obj.set_autosizingtype("none");
            obj.set_tooltiptype("default");
            obj.set_autosizebandtype("body");
            obj.set_autofittype("none");
            obj.set_binddataset("dsGRID_DATA");
            obj.getSetter("nosort").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "117", "240", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList00", "absolute", "8", "71", "573", "27", null, null, this);
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "63", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("시스템");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "83", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("stInformation1", "absolute", "360", "117", "240", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnRefresh", "absolute", "268", "113", "72", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("양식조회");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("자료조회처리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("20");
            obj.set_text("홈 > 공통관리 > 공통관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "35", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("33");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("34");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "340", "173", "20", "41", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자료조회처리");
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
        this.addIncludeScript("TMMA0120.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0120.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0120 자료처리 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.26		김준수		주석 수정.
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
        this.sBUTTONLIST  	= "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "TMMA0120"; //해당 Form에서 사용 할 Package 명
        this.sGRID_FORMATS 	= "";

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "";   //Form의 Location 정보
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
        	
        	this.sGRID_FORMATS = this.grdGRID_DATA.formats;
        	
        	this.fn_SearchItemList();

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
        	this.fnc_DatasetClear("dsGRID_DATA");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsGRID_DATA=dsGRID_DATA";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdGRID_DATA.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.dsTM_VICDXL.applyChange();
        	this.fnc_ToExcel(this.name);

        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);

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

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-------------------+
         |  조회 필수 체크!  |
         +-------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.dsTM_VIMNXM.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "조회 할 양식이 없습니다!");
        		return false;
        	}

        	for (var i = 0; i < this.dsTM_VICDXL.getRowCount(); i++) {
        	
        		if (this.dsTM_VICDXL.getColumn(i, "CDRI_YSNO") != "1") continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_VICDXL.getColumn(i, "SECH_VALU"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", this.dsTM_VICDXL.getColumn(i, "SECH_COND"), this.dsTM_VICDXL, i, this.grdTM_VICDXL, 'INPT_VALU');
        		}
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 양식 세부 자료 조회
        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm="   	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SYST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRSYST_CODE.value));

        	// 양식 리스트 조회
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " VIEW_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsTM_VIMNXM.getColumn(this.dsTM_VIMNXM.rowposition,"VIEW_CODE"))); //양식코드
        		for (var i = 0; i < this.dsTM_VICDXL.getRowCount(); i++) {
        			
        			var sSECN_CLID = this.dsTM_VICDXL.getColumn(i,"SECN_CLID");
        			var sSECH_VALU = this.dsTM_VICDXL.getColumn(i,"SECH_VALU");
        		
        			sReturnString += " " + sSECN_CLID + "=" + this.fnc_Quote(this.fnc_Trim(sSECH_VALU));
        		}
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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_VIMNXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_VIMNXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		this.grdTM_VIMNXM.setFocus();
        		this.grdTM_VICDXL.setFocus();
        		
        		this.fn_SubDataFilter(this.dsTM_VIMNXM);

        	} else if (sMethodName == "SEARCH01") {
        	
        		this.fnc_Information(this.stInformation1, this.dsGRID_DATA.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsGRID_DATA.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        		this.fn_GRID_DATADisplay();
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSYST_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}

        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         /*------------------------------------------------------------------+
         |   Form Load 시 로그인 사용자의 권한 그룹의 양식 내역 조회 처리!  |
         +------------------------------------------------------------------*/
        this.fn_SearchItemList = function () {

        	//모든 조회조건을 전부 부른 다음에, 양식에서 로우체인지가 일어나면 조건에 필터를 거는 방식으로 사용한다.

        	this.fnc_DatasetClear("dsTM_VIMNXM,dsTM_VICDXL"); 
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_VIMNXM=dsTM_VIMNXM dsTM_VICDXL=dsTM_VICDXL";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-------------------------------------------+
         |   Header  변경 시 조회 조건 자료 Filter!  |
         +-------------------------------------------*/
        this.fn_SubDataFilter = function (obj,e) {

        	if (obj.rowposition < 0) {
        		this.fnc_DatasetClear("dsTM_VICDXL");
        		return;
        	}

        	var iRow;
        	this.grdGRID_DATA.set_formats(this.sGRID_FORMATS);
        	this.fnc_DatasetClear("dsCombo,dsUserCombo,dsGRID_DATA");	
        	
        	// 하단의 조회 조건 Filter
        	this.dsTM_VICDXL.filter("VIEW_CODE=='" + this.dsTM_VIMNXM.getColumn(obj.rowposition, "VIEW_CODE") + "'");

        	// 조회 조건중 데이타셋 바인딩 하는 자료가 있는 경우 파라미터 셋팅 후 가져온다.
        	// 그리드의 콤보 바인딩은 컬럼 단위로 되기 때문에
        	
        	for (var i = 0; i < this.dsTM_VICDXL.getRowCount(); i++) {

        		//입력형태
        		switch (this.dsTM_VICDXL.getColumn(i, "CDIT_CODE")) {
        		
        			case "TEXT" :
        				//그리드 셀 속성에서 DECODE 방식으로 변경한다.
        				break;
        				
        			case "DATE" :
        				//그리드 셀 속성에서 DECODE 방식으로 변경한다.
        				break;
        				
        			case "POPUP" :
        				//그리드 셀 속성에서 DECODE 방식으로 변경한다.
        				break;
        				
        			//공통콤보(사용자콤보)	
        			case "COMBO" :
        				iRow = this.dsUserCombo.addRow();
        				this.dsUserCombo.setColumn(iRow, "DSNAME", "dsCOMBOCOND"); //데이터셋명
        				this.dsUserCombo.setColumn(iRow, "COMBOID", this.dsTM_VICDXL.getColumn(i, "POPP_XDAX")); //공통코드
        				this.dsUserCombo.setColumn(iRow, "HEADFLAG", "ALL"); //Head Flag
        				this.dsUserCombo.setColumn(iRow, "USEYSNO", ""); //Head Flag
        				this.dsUserCombo.setColumn(iRow, "PARAM", ""); //Head Flag	
        				
        				break;
        				
        			//공통코드 (공통코드 콤보)	
        			case "COMCD" :

        				iRow = this.dsCombo.addRow();
        				this.dsCombo.setColumn(iRow, "DSNAME", "ds" + this.dsTM_VICDXL.getColumn(i, "POPP_XDAX")); //데이터셋명
        				this.dsCombo.setColumn(iRow, "CODEID", this.dsTM_VICDXL.getColumn(i, "POPP_XDAX")); //공통코드
        				this.dsCombo.setColumn(iRow, "HEADFLAG", "ALL"); //Head Flag

        				break;
        				
        			default :
        			
        				break;
        		}
        	
        		//초기값이 있을경우에는 초기값 설정..
        		if (this.dsTM_VICDXL.getColumn(i, "INIT_DATA") != "") {

        			var sValue = eval(this.dsTM_VICDXL.getColumn(i, "INIT_DATA"));

        			this.dsTM_VICDXL.setColumn(i, "INPT_VALU", sValue);
        			this.dsTM_VICDXL.setColumn(i, "SECH_VALU", sValue);
        			this.dsTM_VICDXL.setColumn(i, "SECH_VALU_NM", sValue);

        		}
        		
        	}

        	// 콤보 자료 가져오기
        	if (this.dsCombo.getRowCount() > 0) {
        	
        		this.fnc_GetComboDs(this.dsCombo);
        	
        	} 
        	
        	if (this.dsUserCombo.getRowCount() > 0) {
        	
        		this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	}
        	
        	this.dsTM_VICDXL.set_rowposition(0);
        	this.fn_SearchColumnTypeSetting(this.dsTM_VICDXL);

        	this.fnc_GridSetCellFocus(this.grdTM_VICDXL, "SEAR_TEXT");
        }

        /*------------------------------------------+
         |  조회 조건 Row 변경 시 Column 속성 변경  |
         +------------------------------------------*/
        this.fn_SearchColumnTypeSetting = function (obj) {

        	if (this.dsTM_VIMNXM.getRowCount() < 1) return;
        	
        	var arrParam = new Array();

        	switch (obj.getColumn(obj.rowposition, "CDIT_CODE")) {
        	
        		case "TEXT" :
        			//그리드 셀 속성에서 DECODE 방식으로 변경한다.
        			break;
        			
        		case "DATE" :
        			//그리드 셀 속성에서 DECODE 방식으로 변경한다.
        			break;
        			
        		case "POPUP" :
        			//그리드 셀 속성에서 DECODE 방식으로 변경한다.
        			break;
        		//공통콤보(사용자콤보)	
        		case "COMBO" :
        			arrParam[0]  = "GRID, grdTM_VICDXL,";
        			arrParam[0] += "dsCOMBOCOND,INPT_VALU";
        			this.fnc_UserComboInnerBind(arrParam);
        		
        			break;
        		//공통코드 (공통코드 콤보)	
        		case "COMCD" :
        			arrParam[0]  = "GRID, grdTM_VICDXL,";
        			arrParam[0] += "ds" + obj.getColumn(obj.rowposition, "POPP_XDAX") + ",INPT_VALU";
        			this.fnc_CommonCodeInnerBind(arrParam);
        			
        			break;
        			
        		default :
        		
        			break;
        	}

        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if (obj.name == "grdTM_VICDXL") {
        		
        		if (sColumnID == "INPT_VALU" || this.fnc_getGridHelpColName(obj, sFromDs) == "INPT_VALU") {
        			
        			var sPopp_Idxx = this.dsTM_VICDXL.getColumn(this.dsTM_VICDXL.rowposition, "POPP_XDAX");
        			
        			if (this.fnc_Length(this.fnc_Trim(sPopp_Idxx)) < 1) return;
        			
        			arrParam[0] = this.dsTM_VICDXL.getColumn(this.dsTM_VICDXL.rowposition, "POPP_XDAX"); //Popup ID
        			arrParam[1] = ""; 																	 //조건구분에 대응되는 조회조건 값
        			arrParam[2] = "INPT_VALU"; 															 //콤보조건구분에 대응되는 컬럼
        			arrParam[3] = "N"; 																	 //사용 여부 구분 포함 여부 값
        			arrParam[4] = "grdTM_VICDXL"; 													     //현재 포커스 Componect명
        			arrParam[5] = "SECH_VALU,SECH_VALU_NM,INPT_VALU"; 												 //초기화 및 결과 Mapping Column
        			arrParam[6] = "0,1,1"; 																 //Mapping Column Index
        			arrParam[7] = sFromDs; 																 //Grid에서 호출인지 Dataset에서 호출인지 여부
        			arrParam[8] = ""; 																	 //취소 시 변경 이전의 값
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}

        }

        /*---------------------------+
         |  조회 조건 값에  Display  |
         +---------------------------*/
        this.dsTM_VICDXL_OnColumnChanged = function (obj,e) {

        	if (e.columnid != "INPT_VALU") return;
        	
        	var sCdit_Code = this.dsTM_VICDXL.getColumn(e.row, "CDIT_CODE");
        	var iCell_Idxx = this.fnc_GridColumnIndex(this.grdTM_VICDXL, "INPT_VALU");
        	
        	if (sCdit_Code == "POPUP") {

        		this.fn_HelpDialoge(this.grdTM_VICDXL, "YES", e.oldvalue, e.columnid);
        	
        	} else if (sCdit_Code == "DATE") {
        		this.dsTM_VICDXL.setColumn(e.row, "SECH_VALU_NM", this.grdTM_VICDXL.getCellValue(e.row, iCell_Idxx)); //달력은 mask로 표현되기 때문에 value를 넣어야 한다.
        		this.dsTM_VICDXL.setColumn(e.row, "SECH_VALU", this.grdTM_VICDXL.getCellValue(e.row, iCell_Idxx));		
        	//display 형식과 edit 형식을 구분해서 저장한다.
        	} else {
        		this.dsTM_VICDXL.setColumn(e.row, "SECH_VALU_NM", this.grdTM_VICDXL.getCellText(e.row, iCell_Idxx));
        		this.dsTM_VICDXL.setColumn(e.row, "SECH_VALU", this.grdTM_VICDXL.getCellValue(e.row, iCell_Idxx));
        	}
        	
        }

        /*------------------------------------------------+
         |  Dataset 결과로 Grid Contents & Column Binding |
         +------------------------------------------------*/
        this.fn_GRID_DATADisplay = function () {
        	this.fnc_GridSetting(this);
        	
        	var sColumns = '<Columns>\n';
        	var sRows 	 = '<Rows>\n';
        	var sHeader  = '<Band id="head">\n';
        	var sBody 	 = '<Band id="body">\n';
        	var sSumm	 = '<Band id="summary">\n'

        		sRows   += '<Row size="29" band="head"/>\n';
        		sRows   += '<Row size="26"/>\n';
        	
        	//헤더 스타일 정보
        	var headerColumns = this.dsTM_VIMNXM.getColumn(this.dsTM_VIMNXM.rowposition, "HEAD_CNTT").split("|");

        	//소계 컬럼
        	var subtotalColumn = this.dsTM_VIMNXM.getColumn( this.dsTM_VIMNXM.rowposition, "SUTR_IDXX"); //널이면 ""
        	
        	//머지할 컬럼열
        	var mergeColumnIdx = this.dsTM_VIMNXM.getColumn( this.dsTM_VIMNXM.rowposition, "CBCL_INDX"); //널이면 "0" //db 쿼리에서 isnull(~,0) 처리
        	
        	//고정컬럼열
        	var fixedColumnIdx = this.dsTM_VIMNXM.getColumn( this.dsTM_VIMNXM.rowposition, "FXCL_INDX"); //널이면 "0" //db 쿼리에서 isnull(~,0) 처리
        	
        	//집계여부
        	var aggreYsno = this.dsTM_VIMNXM.getColumn( this.dsTM_VIMNXM.rowposition, "AGGR_YSNO"); //널이면 "0" //db 쿼리에서 isnull(~,0) 처리
        	
        	if (aggreYsno == "1") sRows   += '<Row size="26" band="summ"/>\n';
        	
        	
        	for (var i = 0; i < this.dsGRID_DATA.colcount; i++) {
        			
        		var colDetail 	= headerColumns[i].split(",");
        		var columnName 	= colDetail[0];
        		var columnWidth = colDetail[1];
        		var columnAlign = colDetail[2];
        		var columnType 	= colDetail[3];
        		
        		//왼쪽으로 열 고정
        		var columnFix = "";
        		//0열은 무시함.
        		if (i < fixedColumnIdx) {
        			columnFix = ' band="left" ';
        		}
        	
        		sColumns += '<Column size="' + columnWidth + '" ' + columnFix + ' />\n';  
        		
        		sHeader += '<Cell col="' + i.toString() + '"' + ' displaytype="text" ';
        		sHeader += ' text="' + columnName + '"' + '/>\n';
        		var obj = this.dsGRID_DATA.getColumnInfo(i);
        		var objtype = obj.type;
        		//if (this.fnc_ToUpper(this.GetColType(this.dsGRID_DATA, this.dsGRID_DATA.getColID(i))) == 'STRING') {
        		
        		var cell_align = "";		
        		var cell_mask  = "";
        		
        		if (this.fnc_ToUpper(columnType) == "N") {
        			
        			cell_align = ' style="align:right;" ';
        			cell_mask = ' displaytype="number" ';
        			
        		} else {
        		
        			if (this.fnc_ToUpper(columnAlign) == "<") {
        			
        				cell_align = ' style="align:left;" ';
        				cell_mask = ' displaytype="text" ';
        			
        			} else if (this.fnc_ToUpper(columnAlign) == "^") {
        			
        				cell_align = ' style="align:center;" ';
        				cell_mask = ' displaytype="text" ';
        			
        			} else if (this.fnc_ToUpper(columnAlign) == ">") {
        				
        				cell_align = ' style="align:right;" ';
        				cell_mask = ' displaytype="text" ';
        									
        			} else if (this.fnc_ToUpper(columnAlign) == "N") {

        				cell_align = ' style="align:right;" ';
        				cell_mask = ' displaytype="number" ';
        									
        			} else if (this.fnc_ToUpper(columnAlign) == "D") {
        			
        				cell_align = ' style="align:center;" ';
        				cell_mask = ' displaytype="date" mask="yyyy.MM.dd" calendardisplaynulltype="none" ';
        									
        			} else if (this.fnc_ToUpper(columnAlign) == "M") {

        				cell_align = ' style="align:center;" ';
        				cell_mask = ' displaytype="date" mask="yyyy.MM" calendardisplaynulltype="none" ';

        			} else if (this.fnc_ToUpper(columnAlign) == "S") {
        			
        				cell_align = ' style="align:center;" ';
        				cell_mask = ' displaytype="text" mask="######-#######" ';
        					
        			}
        		}
        		
        		sBody += '<Cell col="' + i.toString() + '"' + cell_align + ' text="bind:' + this.dsGRID_DATA.getColID(i) + '"';
        		sBody += cell_mask + ' tooltiptext="expr:comp.getCellText(currow, this.col)" ';
        		
        		//머지컬럼
        		var columnMerg = "";
        		if (i < mergeColumnIdx) {
        			sBody += ' suppress="' + nexacro.toNumber(i+1).toString() + '" ';
        		}
        		sBody += ' />\n';		
        	
        		//집계
        		var summ_expr = "";		
        		if (this.fnc_ToUpper(columnType) == "N" || this.fnc_ToUpper(columnAlign) == "N") {
        			summ_expr += ' expr="expr:dataset.getSum(&quot;' + this.dsGRID_DATA.getColID(i) + '&quot;)"';
        		}
        		
        		sSumm += '<Cell col="' + i.toString() + '"';
        		if (i == 0) {
        			sSumm += ' style="align:center;" text="합계" />\n';
        		} else {
        			sSumm += cell_align + cell_mask + summ_expr + ' />\n';
        		}
        		
        	}

        	sColumns += '</Columns>\n';
        	sRows    += '</Rows>\n';
        	sHeader  += '</Band>\n';
        	sBody 	 += '</Band>\n';
        	sSumm 	 += '</Band>\n';	
        	
        	if (this.IsNull(aggreYsno) || aggreYsno == "0") sSumm = "";
        	
        	this.grdGRID_DATA.set_enableredraw(false);
        	this.grdGRID_DATA.set_formats('<Formats>\n<Format id="Default">\n' + sColumns + sRows + sHeader + sBody + sSumm + '</Format>\n</Formats>');
        	this.grdGRID_DATA.set_binddataset("dsGRID_DATA");
        	this.grdGRID_DATA.set_enableredraw(true);	
        	this.grdGRID_DATA.show();	

        //trace(this.grdGRID_DATA.formats);

        	//소계
        	this.dsGRID_DATA.set_keystring("");
        	if (!this.IsNull(subtotalColumn)) {
        		this.dsGRID_DATA.set_keystring("G:" + subtotalColumn);
        	}
        	
        	
        	this.fnc_GridSetting(this);	

        }

        this.cmbSHRSYST_CODE_onitemchanged = function(obj,e) {
        	this.fn_SearchItemList();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_VIMNXM.addEventHandler("onrowposchanged", this.fn_SubDataFilter, this);
            this.dsTM_VICDXL.addEventHandler("oncolumnchanged", this.dsTM_VICDXL_OnColumnChanged, this);
            this.dsTM_VICDXL.addEventHandler("onrowposchanged", this.fn_SearchColumnTypeSetting, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTM_VICDXL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.cmbSHRSYST_CODE.addEventHandler("onitemchanged", this.cmbSHRSYST_CODE_onitemchanged, this);
            this.btnRefresh.addEventHandler("onclick", this.fn_SearchItemList, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMA0120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
