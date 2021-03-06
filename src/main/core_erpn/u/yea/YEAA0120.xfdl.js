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
                this.set_name("YEAA0120");
                this.set_classname("YEAA0120");
                this.set_titletext("(구)원천징수영수증조회");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">TMM0006</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("3");
            obj.set_text("(구)원천징수영수증조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("7");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("9");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "677", "56", "128", "4", null, null, this);
            obj.set_taborder("11");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("12");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "296", "61", "40", "67", null, null, this);
            obj.set_taborder("13");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", "97", "80", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "326", "71", "80", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "60", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRENFC_CODE", "absolute", "96", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_readonly("true");

            obj = new Static("Static32", "absolute", "326", "97", "50", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPROV_DATE", "absolute", "96", "98", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");

            obj = new Radio("rdoSHRWODN_GUBN", "absolute", "372", "72", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoSHRWODN_GUBN_innerdataset = new Dataset("rdoSHRWODN_GUBN_innerdataset", this.rdoSHRWODN_GUBN);
            rdoSHRWODN_GUBN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">연말</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">퇴직</Col></Row><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(rdoSHRWODN_GUBN_innerdataset);
            obj.set_taborder("21");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.style.set_textpadding("0 12 0 6");
            obj.set_index("0");

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("22");
            obj.set_text("홈 > 급여관리 > 연말정산 > (구)원천징수영수증조회");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("reportDiv", "absolute", "31", "160", null, null, "3", "13", this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "369", "98", "80", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "451", "98", "21", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "474", "98", "100", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("YEAA0120");
            		p.set_titletext("(구)원천징수영수증조회");

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
        this.addIncludeScript("YEAA0120.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("YEAA0120.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("YEAA0120.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0120 (구)원천징수영수증조회
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.30		장현기		Initial Created.
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
        //include "script::lib_script_ubireport.xjs"
        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TFFFTFFT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "YEAA0120";

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	switch (this.sUSERLAVEL) {
        		case "1" : 	//전체
        			this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
        			this.cmbSHRENFC_CODE.set_readonly(false);
        			break;
        		case "3" :	case "4" :	case "5" :	 // 3:부실 4:부서 5:개인
        			this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        			this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        			this.imgHelpSHREMPL_NUMB.set_enable(false);
        			this.edtSHREMPL_NAME.set_readonly(true);			
        			break;	
        		default :
        			break;
        	}

        	var sNowDate  	= this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	
        	this.calSHRPROV_DATE.set_value(sNowDate);
        	this.calSHRPROV_DATE.setFocus();
        	
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

        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        	var reportfile = "/yea/nscom2014_2015.jrf";
        	
        	if(parseInt(this.fnc_SubStr(this.calSHRPROV_DATE.value,0 ,4)) <  2006 )
        	{
        		reportfile = "/yea/nscom2003_2005.jrf";
        	}
        	else if(parseInt(this.fnc_SubStr(this.calSHRPROV_DATE.value,0 ,4)) <  2009 )
        	{
        		reportfile = "/yea/nscom2006_2008.jrf";
        	}
        	else if(parseInt(this.fnc_SubStr(this.calSHRPROV_DATE.value,0 ,4)) <  2013 )
        	{
        		reportfile = "/yea/nscom2009_2012.jrf";
        	}
        	else if(parseInt(this.fnc_SubStr(this.calSHRPROV_DATE.value,0 ,4)) ==  2013 )
        	{
        		reportfile = "/yea/nscom2013.jrf";
        	}
        	else
        	{
        		reportfile = "/yea/nscom2014_2015.jrf";
        	}
        	
        	var params =  this.fn_CreateArgument("REPORT00");
        	var dataref = new Array();			
        	 
        	//alert(params);	
        	var reportOptions = new Object;
        /*
        	reportOptions.title = "유비리포트";						// 인쇄물 타이틀. 저장 시 파일명으로도 사용됩니다.
        	reportOptions.loadCallback = "fn_PopupReportLoadFinish";	// 인쇄물 미리보기 화면이 로드 된 후 실행할 함수명입니다.
        	reportOptions.saveEnable = false;							// 저장 버튼 표시여부. true or false
        	reportOptions.saveLock = true;								// 저장버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        	reportOptions.saveCallback = "fn_WhenSaveEnd";				// 리포트를 파일로 저장한 후 실행할 함수입니다.
        	reportOptions.printEnable = true;							// 인쇄 버튼 표시여부. true or false
        	reportOptions.printCallback = "fn_WhenPrintEnd";			// 리포트 인쇄 후 실행할 함수입니다.
        	reportOptions.printLock = true;								// 인쇄버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        */
        	// 리포트 팝업 호출
        	//this.fn_UbiReport(reportfile, params, dataref, reportOptions);
        	this.fn_UbiReportComp(this.reportDiv, reportfile, params, dataref, reportOptions);
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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRPROV_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.fnc_ToString(this.fnc_GetServerDateTime("DATE")));
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

        	if (sKind == "REPORT00") {	
        		sReturnString = "ls_yyyy#"+this.fnc_SubStr(this.calSHRPROV_DATE.value,0 ,4);   
        		if(this.fnc_IsEmpty(this.edtSHREMPL_NUMB.value))
        		{
        			sReturnString += "#ls_emp_no#%";
        		}else{
        			sReturnString += "#ls_emp_no#"+this.edtSHREMPL_NUMB.value;
        		}
        		sReturnString += "#ls_temp#%";
        		sReturnString += "#ls_retire_gubun#"+this.rdoSHRWODN_GUBN.value;
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

        	if (sMethodName == "GetUserComboCode") {
        		var arrParam 		= new Array();
        		var arrInt   		= 0;	
        		arrParam[arrInt++] 	= "COMBO,cmbSHRENFC_CODE,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);
        		
        	} 
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 사원정보조회SHR(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRENFC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("YEAA0120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
