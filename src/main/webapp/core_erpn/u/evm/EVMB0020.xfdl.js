﻿(function()
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
                this.set_name("EVMB0020");
                this.set_titletext("목표설정서승인");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">EVM0020</Col><Col id=\"DSNAME\">dsSHREVAL_NAME</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_WGETXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CPOS_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRS_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLR1_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLR1_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GLR2_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLR2_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRS_GUBUN\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_TAEGXD", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEQN_NUMB\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRWK_CNTT\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"PROB_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"EVBS_CNTT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TAIP_RATE\" size=\"3\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GLRS_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"WRGD_EVSC\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("목표설정서승인");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 2메뉴");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "50", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_WGETXM", "absolute", "8", "128", null, "266", "25", null, this);
            obj.set_taborder("108");
            obj.set_binddataset("dsEV_WGETXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사원번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"성명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소속\"/><Cell col=\"3\" rowspan=\"2\" text=\"부서\"/><Cell col=\"4\" rowspan=\"2\" text=\"직급\"/><Cell col=\"5\" rowspan=\"2\" text=\"직위\"/><Cell col=\"6\" rowspan=\"2\" text=\"제출완료\"/><Cell col=\"7\" colspan=\"2\" text=\"승인여부\"/><Cell row=\"1\" col=\"7\" text=\"1차평가자\"/><Cell row=\"1\" col=\"8\" text=\"2차평가자\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:CPOS_NAME\"/><Cell col=\"5\" text=\"bind:OPOS_NAME\"/><Cell col=\"6\" text=\"bind:GLRS_YSNO\"/><Cell col=\"7\" text=\"bind:GLR1_NAME\"/><Cell col=\"8\" text=\"bind:GLR2_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "9", "398", "169", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "413", "48", "6", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_TAEGXD", "absolute", "8", "419", null, null, "25", "15", this);
            obj.set_taborder("112");
            obj.set_binddataset("dsEV_TAEGXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"400\"/><Column size=\"400\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"핵심과제\"/><Cell col=\"2\" text=\"추진방법및일정\"/><Cell col=\"3\" text=\"평가지표\"/><Cell col=\"4\" text=\"비중도(%)\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:SEQN_NUMB\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:PRWK_CNTT\" wordwrap=\"char\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PROB_CNTT\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:EVBS_CNTT\" wordwrap=\"char\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:TAIP_RATE\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"4\" style=\"align:right;\" expr=\"expr:dataset.getSum('TAIP_RATE')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("평가종류");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVAL_NAME", "absolute", "96", "71", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("128");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static31", "absolute", "295", "71", "68", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "364", "71", "80", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "446", "71", "21", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "469", "71", "100", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_readonly("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC00", "absolute", "61", "35", "50", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "9", "107", "169", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "48", "6", null, null, this);
            obj.set_taborder("135");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("목표설정서승인");

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
        this.addIncludeScript("EVMB0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("EVMB0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	EVMB0020 목표설정서승인
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.14		김석영		Initial Created.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "EVMB0020"; 

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
        	this.fn_GetUserCombo("cmbSHREVAL_NAME");
        	
        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);	
        	
        	this.cmbSHREVAL_NAME.set_index(0);
        	this.cmbSHREVAL_NAME.setFocus();

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
        	
        	this.fnc_DatasetClear("dsEV_WGETXM");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsEV_WGETXM=dsEV_WGETXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }
        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
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
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
        	}
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
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
        		sReturnString += " SYNT_EACD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		
        	} else if (sKind == "SEARCH01") {	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "SYNT_EACD"));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "EMPL_NUMB"));
        		
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
        		this.fnc_Information(this.stInformation, this.dsEV_WGETXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsEV_WGETXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		if(this.dsEV_WGETXM.rowcount == 0)
        		{
        			this.btn_PROC.set_enable(false);
        			this.btn_PROC00.set_enable(false);
        		}
        		
        		this.dsEV_WGETXM.set_Focus(); 
        		this.dsEV_WGETXM.set_rowposition(0); 				
        		        
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation1, this.dsEV_TAEGXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsEV_TAEGXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Message("EVM003");
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC01") {
        		this.fnc_Message("EVM003");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        		
        		arrParam[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        		this.fnc_UserComboInnerBind(arrParam);
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        
        /***************************************************************************************************
         *                                     사용자 정의 Function 처리 부분                           *
         ***************************************************************************************************/
        /*-------------------------------+
         | 조회조건 평가명 콤보|
         +------------------------------*/
        this.fn_GetUserCombo = function (oComboId) {
        	var arrParam  = new Array();
        	var arrParam2 = new Array();
        	
        	arrParam[0] = this.dsUserCombo.getColumn(0, "DSNAME");
        	arrParam[1] = this.dsUserCombo.getColumn(0, "COMBOID");
        	arrParam[2] = this.dsUserCombo.getColumn(0, "HEADFLAG");
        	arrParam[3] = this.dsUserCombo.getColumn(0, "USEYSNO");
        	arrParam[4] = this.dsUserCombo.getColumn(0, "PARAM");
        	    	    	        
            arrParam2[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        			
        	this.fnc_GetUserComboSingle(arrParam, arrParam2);
        	
        }

        this.cmbSHREVAL_NAME_onitemchanged = function(obj,e)
        {
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO")); // 마감여부
            var sBUOE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "BUOE_YSNO")); // 목표입력여부
        		
        	if(sCLSE_YSNO == '1' || sBUOE_YSNO == '0'){
        		this.btn_PROC.set_enable(false);
        		this.btn_PROC00.set_enable(false);
        				
        		if(sCLSE_YSNO == '1'){
        			this.fnc_Message("EVM010");
        		} else if(sBUOE_YSNO == '0'){
        			this.fnc_Message("EVM015");
        		}
        		
        	} else {
        		this.btn_PROC.set_enable(true);
        		this.btn_PROC00.set_enable(true);
        		
        	}
        	
        	this.fn_Search();
        }

        /*-------------------------------+
         | 제출 처리                    |
         +------------------------------*/
        this.btn_PROC_OnClick = function(obj,e)
        {
        	if (!this.fn_EVAL_OnCheck("PROC00")) return;
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD");

        	var sInDataSet 	= "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "";
        	var sArgument   = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sArgument  += " action="	+ this.fnc_Quote(sMethodName);
        		sArgument  += " SYNT_EACD=" + this.fnc_Quote(this.cmbSHREVAL_NAME.value);
        		sArgument  += " EMPL_NUMB=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "EMPL_NUMB"));
        		sArgument  += " GLRS_GUBUN=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLRS_GUBUN"));
        	    
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-------------------------------+
         | 제출취소 처리               |
         +------------------------------*/
        this.btn_PROC00_OnClick = function(obj,e)
        {
        	if (!this.fn_EVAL_OnCheck("PROC01")) return;
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD");

        	var sInDataSet 	= "";
        	var sMethodName = "PROC01";
        	var sOutDataSet = "";
        	var sArgument   = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sArgument  += " action="	+ this.fnc_Quote(sMethodName);
        		sArgument  += " SYNT_EACD=" + this.fnc_Quote(this.cmbSHREVAL_NAME.value);
        		sArgument  += " EMPL_NUMB=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "EMPL_NUMB"));
        		sArgument  += " GLRS_GUBUN=" + this.fnc_Quote(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLRS_GUBUN"));
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        this.fn_EVAL_OnCheck = function(sMethodName){
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
        	}
        	
        	if (this.dsEV_WGETXM.rowcount == 0) {
        		this.fnc_Message("TMM141");
        		return false;
        	}
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCOMB_NAME = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "COMB_NAME"));
        	var sEMPL_NUMB = this.fnc_Trim(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "EMPL_NUMB"));
        	var sEMPL_NAME = this.fnc_Trim(this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "EMPL_NAME"));
        	
        	if (sMethodName == "PROC00") {
        		if (this.fnc_Message("EVM017", sCOMB_NAME + " " + sEMPL_NUMB + " " + sEMPL_NAME) == false) return false;
        		
        	} else if (sMethodName == "PROC01") {
        		if (this.fnc_Message("EVM018", sCOMB_NAME + " " + sEMPL_NUMB + " " + sEMPL_NAME) == false) return false;
        		
        	}
        	
        	return true;
        }

        this.dsEV_WGETXM_onrowfoschanged = function(obj,e)
        {
        	if (obj.getRowCount < 0) return;
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO"));     // 마감여부
        	var sGLRS_YSNO = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLRS_YSNO"); // 목표설정제출여부
        	var sGLR1_CODE = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLR1_CODE"); // 목표설정1차승인코드
        	var sGLR2_CODE = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLR2_CODE"); // 목표설정2차승인코드
        	var sGLRS_GUBUN = this.dsEV_WGETXM.getColumn(this.dsEV_WGETXM.rowposition, "GLRS_GUBUN"); // 1차, 2차 평가자 구분
        		
        	// 평가 마감 여부
        	if(sCLSE_YSNO == '1'){
        		this.btn_PROC.set_enable(false);
        		this.btn_PROC00.set_enable(false);
        	} else {
        	    // 목표설정서 제출여부
        		if(sGLRS_YSNO == 'Y'){
        		    // 평가자(1차/2차) 구분
        			if(sGLRS_GUBUN == '1'){
        			    // 목표설정서 1차 승인 코드
        				if(sGLR1_CODE == '0'){
        					this.btn_PROC.set_enable(true);
        					this.btn_PROC00.set_enable(true);
        				} else {
        					this.btn_PROC.set_enable(false);
        					this.btn_PROC00.set_enable(false);
        				}
        			} else if(sGLRS_GUBUN == '2'){
        				// 목표설정서 1차 승인 코드
        				if(sGLR1_CODE == '0'){
        					this.btn_PROC.set_enable(false);
        					this.btn_PROC00.set_enable(false);
        				} else if(sGLR1_CODE == '2'){
        					this.btn_PROC.set_enable(false);
        					this.btn_PROC00.set_enable(false);
        				} else {
        				    // 목표설정서 2차 승인 코드
        					if(sGLR2_CODE == '0'){
        						this.btn_PROC.set_enable(true);
        						this.btn_PROC00.set_enable(true);
        					} else {
        						this.btn_PROC.set_enable(false);
        						this.btn_PROC00.set_enable(false);
        					}
        				}				
        			} else {
        				this.btn_PROC.set_enable(false);
        				this.btn_PROC00.set_enable(false);
        			}
        		} else {
        			this.btn_PROC.set_enable(false);
        			this.btn_PROC00.set_enable(false);
        		}
        	}
        	
        	if(this.dsEV_WGETXM.getRowCount == 0)
        	{
        		this.btn_PROC.set_enable(false);
        		this.btn_PROC00.set_enable(false);
        	}
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsEV_TAEGXD=dsEV_TAEGXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsEV_WGETXM.addEventHandler("onrowposchanged", this.dsEV_WGETXM_onrowfoschanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.cmbSHREVAL_NAME.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHREVAL_NAME.addEventHandler("onitemchanged", this.cmbSHREVAL_NAME_onitemchanged, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_PROC00.addEventHandler("onclick", this.btn_PROC00_OnClick, this);

        };

        this.loadIncludeScript("EVMB0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
