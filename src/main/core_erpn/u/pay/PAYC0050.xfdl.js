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
                this.set_name("PAYC0050");
                this.set_titletext("급여이체현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_PMDETL", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"WABK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WABK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_ACNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_DPST\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "1257", "66", "134", "22", null, null, this);
            obj.set_taborder("27");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMDETL", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsPY_PMDETL");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"65\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"368\" band=\"left\"/><Column size=\"122\"/><Column size=\"73\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"은행코드\"/><Cell col=\"4\" text=\"은행명\"/><Cell col=\"5\" displaytype=\"text\" text=\"계좌번호\"/><Cell col=\"6\" displaytype=\"text\" text=\"이체금액\"/><Cell col=\"7\" displaytype=\"text\" text=\"예금주\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:WABK_CODE\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:WABK_NAME\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:WAGE_ACNO\" editimemode=\"native\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REAL_AMOT\" mask=\"#,###.##\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center;\" text=\"bind:WAGE_DPST\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" colspan=\"2\" text=\"합계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('REAL_AMOT')\" mask=\"#,###.##\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "27", "71", "55", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("지급일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "82", "71", "80", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "164", "71", "21", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME", "absolute", "187", "71", "130", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle00", "absolute", "1197", "66", "47", "22", null, null, this);
            obj.set_taborder("28");
            obj.set_text("지급일코드");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_text("급여이체현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("30");
            obj.set_text("홈 > 급여관리 > 급여현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("31");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("38");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("39");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "74", "61", "8", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "472", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "449", "71", "22", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "367", "71", "80", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("stEMPL_NUMB", "absolute", "325", "71", "49", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여이체현황");
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
        this.addIncludeScript("PAYC0050.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PAYC0050.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PAYC0050.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYC0050 급여이체현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.13		고민주		Initial Created.
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
        //include "script::lib_script_ubireport.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYC0050"; //해당 Form에서 사용 할 Package 명 

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
        	this.edtSHRWAGE_NAME.setFocus();

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
        	this.fnc_DatasetClear("dsPY_PMDETL");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_PMDETL=dsPY_PMDETL ";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
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
        	
        	var reportfile = "/pay/PAYC0050R01.jrf";
        	var params 		= "";
        	
            var dataref 	= new Array();

        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/pay/PAYC0050_SEARCH02.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsPY_PMDETL=dsPY_PMDETL";
        	dataref[0].arg 			= this.fn_CreateArgument("SEARCH02");
        		
        	this.fn_UbiReport(reportfile, params, dataref, "");
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PMDETL", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_PMDETL")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.edtSHRWAGE_NAME);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        		sReturnString += " WAGE_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value));		
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		
        	} else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        		sReturnString += " WAGE_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value)); 
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
        	
        	 if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation, this.dsPY_PMDETL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PMDETL.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} 
        }

        
        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) {
        		arrParam[0] = "PAY0001"; 								//Popup ID
        		arrParam[1] = ""; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRWAGE_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "medSHRPAYX_DATE,edtSHRWAGE_CODE,edtSHRWAGE_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1,2"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        		
        	}  else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
                arrParam[0] = "HRM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHREMPL_NAME";
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
                
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
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYC0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
