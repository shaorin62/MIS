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
                this.set_name("EVMB0030");
                this.set_titletext("본인평가");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">EVM0020</Col><Col id=\"DSNAME\">dsSHREVAL_NAME</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_TAEGXD", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEQN_NUMB\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRWK_CNTT\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"PROB_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"EVBS_CNTT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TAIP_RATE\" size=\"3\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GLRS_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"WRGD_EVSC\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SELF_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_WGEGXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"WGEG_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_SCOR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ENDX_SCOR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ABLT_EVSC\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EVAL_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_WGETXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_OPOS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_SECT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_DEPT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_OPOS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_SECT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_DEPT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVTT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EVRT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRS_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLR1_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLR2_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("115");
            obj.set_text("본인평가");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

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

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("평가종류");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVAL_NAME", "absolute", "96", "71", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static31", "absolute", "305", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
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

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_TAEGXD", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsEV_TAEGXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"307\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"연도목표\"/><Cell col=\"3\" rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"실적\"/><Cell col=\"4\" rowspan=\"2\" text=\"평가지표\"/><Cell col=\"5\" rowspan=\"2\" text=\"비중도(%)\"/><Cell col=\"6\" colspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"본인평가\"/><Cell row=\"1\" col=\"1\" text=\"핵심과제\"/><Cell row=\"1\" col=\"2\" text=\"추진방법및일정\"/><Cell row=\"1\" col=\"6\" text=\"점수\"/><Cell row=\"1\" col=\"7\" text=\"등급\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQN_NUMB\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:PRWK_CNTT\" wordwrap=\"char\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PROB_CNTT\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"3\" edittype=\"textarea\" style=\"align:left;\" text=\"bind:GLRS_CNTT\" wordwrap=\"char\" editlimit=\"400\" editimemode=\"hangul\" editautoselect=\"true\" editlimitbymask=\"none\" autosizerow=\"default\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:EVBS_CNTT\" wordwrap=\"char\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:TAIP_RATE\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"masknumber\" style=\"align:center;\" text=\"bind:WRGD_EVSC\" mask=\"###\" maskchar=\" \" editlimit=\"3\" editautoselect=\"true\" editlimitbymask=\"integer\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:SELF_CODE\" combodataset=\"dsEV_WGEGXM\" combocodecol=\"WGEG_CODE\" combodatacol=\"WGEG_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "374", "71", "80", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_enable("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "456", "71", "21", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "479", "71", "100", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_readonly("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("본인평가");

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
        this.addIncludeScript("EVMB0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("EVMB0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	EVMB0030 본인평가
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.17		김석영		Initial Created.
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
        this.sBUTTONLIST  = "TTFFTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "EVMB0030"; 

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
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD,dsEV_WGEGXM,dsEV_WGETXM");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsEV_TAEGXD=dsEV_TAEGXD dsEV_WGEGXM=dsEV_WGEGXM dsEV_WGETXM=dsEV_WGETXM";
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
        	this.fnc_DataSetCancel("dsEV_TAEGXD");
        	this.dsEV_TAEGXD.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsEV_TAEGXD=dsEV_TAEGXD:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdEV_TAEGXD.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsEV_TAEGXD", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsEV_TAEGXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
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

        	if (!this.fnc_DatasetChangeCheck("dsEV_TAEGXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsEV_TAEGXD.getRowCount(); i++) {
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "GLRS_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 실적이 ", this.dsEV_TAEGXD, i, this.grdEV_TAEGXD, "GLRS_CNTT");
        		}		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "WRGD_EVSC"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 점수가 ", this.dsEV_TAEGXD, i, this.grdEV_TAEGXD, "WRGD_EVSC");
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
        		sReturnString += " SYNT_EACD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		
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
        		this.fnc_Information(this.stInformation, this.dsEV_TAEGXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsEV_TAEGXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		var iRow = this.dsEV_WGETXM.getRowCount();
        		var iXMRow = this.cmbSHREVAL_NAME.index;
                var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO")); // 마감여부
        		var sBUOE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "BUOE_YSNO")); // 목표입력여부
        		
        		this.grdEV_TAEGXD.set_readonly(true);
        		
        		if(iRow == 0 || sCLSE_YSNO == '1' || sBUOE_YSNO == '0'){
        			this.grdEV_TAEGXD.set_readonly(true);
        		} else {
        			var sGLRS_YSNO = this.fnc_Trim(this.dsEV_WGETXM.getColumn(0, "GLRS_YSNO"));	//목표설정제출여부 
        			var sGLR1_CODE = this.fnc_Trim(this.dsEV_WGETXM.getColumn(0, "GLR1_CODE"));	//목표설정1차승인코드
        			var sGLR2_CODE = this.fnc_Trim(this.dsEV_WGETXM.getColumn(0, "GLR2_CODE"));	//목표설정2차승인코드
        			var WES2_EMNR  = this.fnc_Trim(this.dsEV_WGETXM.getColumn(0, "WES2_EMNR"));	//업적평가상사2차사원번호 
        			
        			if(sGLRS_YSNO == '1'){
        			    if(WES2_EMNR == null || WES2_EMNR == ""){
        					if(sGLR1_CODE == '1')
        					{
        						this.grdEV_TAEGXD.set_readonly(false);
        					}			    
        			    } else {
        					if(sGLR1_CODE == '1' && sGLR2_CODE == '1')
        					{
        						this.grdEV_TAEGXD.set_readonly(false);
        					}
        				}
        			}
        		}
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
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
        	if (this.fnc_DatasetChangeCheck("dsEV_TAEGXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD");
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO")); // 마감여부
            var sBUOE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "BUOE_YSNO")); // 목표입력여부
        		
        	if(sCLSE_YSNO == '1' || sBUOE_YSNO == '0'){
        		this.div_ButtonList.btnSave.set_enable(false);
        				
        		if(sCLSE_YSNO == '1'){
        			this.fnc_Message("EVM010");
        		} else if(sBUOE_YSNO == '0'){
        			this.fnc_Message("EVM015");
        		}
        		
        	} else {
        	    this.div_ButtonList.btnSave.set_enable(true);
        		
        	}
        	
        	this.fn_Search();
        }

        this.dsEV_TAEGXD_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "WRGD_EVSC"){
        		var iWRGD_EVSC = parseInt(e.newvalue);		
        		this.dsEV_TAEGXD.setColumn(e.row, 'SELF_CODE', '');
        		
        		for (var i = 0; i < this.dsEV_WGEGXM.getRowCount(); i++) {
        			var iBGIN_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "BGIN_SCOR")); 
        			var iENDX_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "ENDX_SCOR")); 
        			var sWGEG_CODE = this.dsEV_WGEGXM.getColumn(i, "WGEG_CODE") 
        			
        			if(iWRGD_EVSC >= iBGIN_SCOR && iWRGD_EVSC <= iENDX_SCOR){
        				this.dsEV_TAEGXD.setColumn(e.row, 'SELF_CODE', sWGEG_CODE);
        			}
        			if(iWRGD_EVSC < 0 || iWRGD_EVSC > 100){
        				this.dsEV_TAEGXD.setColumn(e.row, "WRGD_EVSC", null);
        				return this.fnc_CheckPostAction("EVM019", "", this.dsEV_TAEGXD, e.row, this.grdEV_TAEGXD, "WRGD_EVSC");
        			}
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsEV_TAEGXD.addEventHandler("oncolumnchanged", this.dsEV_TAEGXD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHREVAL_NAME.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHREVAL_NAME.addEventHandler("onitemchanged", this.cmbSHREVAL_NAME_onitemchanged, this);
            this.grdEV_TAEGXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("EVMB0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
