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
                this.set_name("TMMA0100");
                this.set_titletext("다국어명칭관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">MTLN_TGTY</Col><Col id=\"DSNAME\">dsSHRMTLN_TGTY</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\"/></Row><Row><Col id=\"DSNAME\">dsSYST_LNCD</Col><Col id=\"CODEID\">SYST_LNCD</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_MILNXH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MTLN_TGTY\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MTLN_DTCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MTLN_DDCD\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"MTLN_DTNM\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"MTLN_DDNM\" size=\"200\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_MTLNXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MTLN_TGTY\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MTLN_DTCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MTLN_DDCD\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SYST_LNCD\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"LNSP_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"200\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_taborder("4");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("다국어명칭관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("7");
            obj.set_text("홈 >공통관리> 다국어명칭관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRMTLN_TGTY", "absolute", "28", "71", "130", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("다국어대상유형");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_accessibility("disable all '' 'mtln_tgty_s' ''");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "127", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
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
            obj.set_text("h 6");
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

            obj = new Static("Static12", "absolute", "-3", "103", "216", "7", null, null, this);
            obj.set_taborder("118");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("119");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "453", "103", "80", "35", null, null, this);
            obj.set_taborder("120");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "117", "205", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_MILNXH", "absolute", "8", "138", "548", null, null, "15", this);
            obj.set_taborder("2");
            obj.set_binddataset("dsTM_MILNXH");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"120\"/><Column size=\"88\"/><Column size=\"235\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"accessibility:disable all '' 'comm_codelabel' '' ;\" text=\"코드\"/><Cell col=\"1\" style=\"accessibility:disable all '' 'comm_namelabel' '' ;\" cssclass=\"grd_essential\" text=\"명칭\"/><Cell col=\"2\" style=\"accessibility:disable all '' 'comm_dcodelabel' '' ;\" text=\"세부코드\"/><Cell col=\"3\" style=\"accessibility:disable all '' 'comm_dnamelabel' '' ;\" text=\"세부명칭\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:MTLN_DTCD\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MTLN_DTNM\"/><Cell col=\"2\" style=\"align: ;\" text=\"bind:MTLN_DDCD\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:MTLN_DDNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "576", "117", "205", "21", null, null, this);
            obj.set_taborder("123");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_MTLNXM", "absolute", "576", "138", null, null, "25", "15", this);
            obj.set_taborder("3");
            obj.set_binddataset("dsTM_MTLNXM");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\"/><Column size=\"300\"/><Column size=\"190\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"accessibility:disable all '' 'comm_systlncd' '' ;\" text=\"시스템언어코드\"/><Cell col=\"1\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;accessibility:disable all '' 'lncd_text' '' ;\" cssclass=\"grd_essential\" text=\"언어별 명칭\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;accessibility:disable all '' 'comm_desc' '' ;\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align: ;\" text=\"bind:SYST_LNCD\"/><Cell col=\"1\" edittype=\"text\" style=\"align:left;\" text=\"bind:LNSP_NAME\"/><Cell col=\"2\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_200X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "556", "296", "20", "60", null, null, this);
            obj.set_taborder("131");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMTLN_TGTY", "absolute", "135", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static03", "absolute", "284", "71", "130", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("다국어자료코드/명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_accessibility("disable none '' 'mtln_dtcd_s' ''");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMTLN_DTCD", "absolute", "411", "71", "200", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("다국어명칭관리");

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
        this.addIncludeScript("TMMA0100.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0100.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0100 다국어명칭관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.17		황치웅		Initial Created.
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
         *  화면 변수 선언부  
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMA0100";
        this.aKeyValue 	  = new Array(3);
        	
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
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.cmbSHRMTLN_TGTY.setFocus();

        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();

        }

        /*-------------------------+
         |  03.조회 버튼 클릭 時 |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTM_MILNXH,dsTM_MTLNXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_MILNXH=dsTM_MILNXH";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.grdTM_MILNXH.setFocus(); 

        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsTM_MTLNXM.deleteRow(this.dsTM_MTLNXM.rowposition);
        	this.grdTM_MTLNXM.setFocus();

        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj){

        	this.fnc_DataSetCancel("dsTM_MTLNXM");
        	this.grdTM_MTLNXM.setFocus();

        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsTM_MILNXH.getColumn(this.dsTM_MILNXH.rowposition,"MTLN_TGTY");
        	this.aKeyValue[1] = this.dsTM_MILNXH.getColumn(this.dsTM_MILNXH.rowposition,"MTLN_DTCD");
        	this.aKeyValue[2] = this.dsTM_MILNXH.getColumn(this.dsTM_MILNXH.rowposition,"MTLN_DDCD");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_MTLNXM=dsTM_MTLNXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_MTLNXM.setFocus();

        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);

        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時 |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        
        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_MTLNXM",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){ 
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj){
        	this.fnc_EditFocus(obj);
        	
        }

        /*****************************************************************************************************
         *                                      공통 Function 처리 부분                                     *
         *****************************************************************************************************/
        /*---------------------+
         |  조회 필수 체크!  |
         +---------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_MTLNXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.cmbSHRMTLN_TGTY.value == "LABEL") return false;
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRMTLN_TGTY.value)) < 1) {
        		//다국어 적용 시 화면 상의 항목 값은 변환 된 레이블 값을 읽어서 사용하도록 보완.
        		//return this.fnc_SearchCheckPostAction("TMM072", "다국어대상유형", this.medSHRPAYX_DATE);
        		return this.fnc_SearchCheckPostAction("TMM072", this.staSHRMTLN_TGTY.text, this.medSHRPAYX_DATE);
        	}

        	return true;

        }

        /*--------------------+
         |  삭제 여부 체크! |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTM_MTLNXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	//다국어 적용 시 화면 상의 항목 값은 변환 된 레이블 값을 읽어서 사용하도록 보완.
        	//var sQuestionText = "시스템언어코드 : "
        	var sQuestionText = this.grdTM_MTLNXM.getCellText(-1, this.fnc_GridColumnIndex(this.grdTM_MTLNXM, "SYST_LNCD")) 
        					  + " : " + this.fnc_Trim(this.dsTM_MTLNXM.getColumn(this.dsTM_MTLNXM.rowposition, "SYST_LNCD"));
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_MTLNXM")) return this.fnc_Message("TMM003");

        	return true;

        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	//Head 조회
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " MTLN_TGTY=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRMTLN_TGTY.value)); //다국어대상유형
        		sReturnString += " MTLN_DTCD=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMTLN_DTCD.value)); //다국어자료코드/명

        	//Detail 조회
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " MTLN_TGTY=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRMTLN_TGTY.value)); 							//다국어대상유형
        		sReturnString += " MTLN_DTCD=" + this.fnc_Quote(this.dsTM_MILNXH.getColumn(this.dsTM_MILNXH.rowposition, "MTLN_DTCD")); //다국어자료코드
        		sReturnString += " MTLN_DDCD=" + this.fnc_Quote(this.dsTM_MILNXH.getColumn(this.dsTM_MILNXH.rowposition, "MTLN_DDCD")); //다국어세부자료코드
        	
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);		

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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsTM_MILNXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_MILNXH.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		var iRow = this.dsTM_MILNXH.findRowExpr( "MTLN_TGTY=='" + this.aKeyValue[0] + "' && MTLN_DTCD=='" + this.aKeyValue[1] + "' && MTLN_DDCD=='" + this.aKeyValue[2]+"'");
        		if (iRow < 0) iRow = 0;
         		
         		this.grdTM_MILNXH.selectRow(iRow);
         		this.dsTM_MILNXH.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";
        		this.aKeyValue[1] = "";		
        		
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation1, this.dsTM_MTLNXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRMTLN_TGTY,dsSHRMTLN_TGTY,0";
        			arrParam[1] = "GRID,grdTM_MTLNXM,dsSYST_LNCD,SYST_LNCD";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*----------------------------------+
         |  헤더 변경 시 상세 내용 검색  |
         +----------------------------------*/
        this.fn_KeyFieldDisibleHead = function (obj) {

        	if (this.dsTM_MILNXH.getRowCount() < 1) return;
        	this.fnc_DatasetClear("dsTM_MTLNXM");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_MTLNXM=dsTM_MTLNXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        /*-------------------------------------------------------------------+
         |  공통코드 Header Row Pos Change 시 Detail 자료 변경 여부 체크 |
         +-------------------------------------------------------------------*/
        this.dsTM_MILNXH_canrowposchange = function(obj,e) {

        	if (e.newrow < 0) return;
        	if (this.fnc_DatasetChangeCheck("dsTM_MTLNXM")) if (this.fnc_Message("TMM023") == false) return false;

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_MILNXH.addEventHandler("onrowposchanged", this.fn_KeyFieldDisibleHead, this);
            this.dsTM_MILNXH.addEventHandler("canrowposchange", this.dsTM_MILNXH_canrowposchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRMTLN_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMTLN_DTCD.addEventHandler("onkeydown", this.edtSHRCOMM_CDNM_onkeydown, this);

        };

        this.loadIncludeScript("TMMA0100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
