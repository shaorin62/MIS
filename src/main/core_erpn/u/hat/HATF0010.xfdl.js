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
                this.set_name("HATF0010");
                this.set_titletext("일비지급기준관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_DAYEXM", this);
            obj._setContents("<ColumnInfo><Column id=\"BSRP_CODE\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_CODE_NM\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"TRGT_CODE\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"TRGT_CODE_NM\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"STDT_DATE\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DAIL_APAY\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"DAIL_BPAY\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"DAIL_RATE\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"REMK_ETCR\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"DSNAME\">dsSHRDPAY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">OPAY_CODE</Col><Col id=\"DSNAME\">dsSHROPAY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsDPAY_CODE</Col><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"CODEID\">OPAY_CODE</Col><Col id=\"DSNAME\">dsOPAY_CODE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_DAYEXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_DAYEXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"출장구분\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"대상구분\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"시작일자\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"종료일자\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"일비(갑)\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"일비(을)\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"연수지급비율\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"기타\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:BSRP_CODE\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background: ;\" text=\"bind:TRGT_CODE\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:STDT_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:ENDD_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:DAIL_APAY\" mask=\"###,###,###\" editlimit=\"10\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:DAIL_BPAY\" mask=\"###,###,###\" editlimit=\"10\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" text=\"bind:DAIL_RATE\" mask=\"##,###.##\" editlimit=\"100\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_ETCR\" editlimit=\"100\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("6");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "74", "21", null, null, this);
            obj.set_text("시작일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("chkSHRUSEX_GUBN", "absolute", "226", "71", "88", "21", null, null, this);
            obj.set_text("출장구분");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRDPAY_CODE", "absolute", "295", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("dropdown");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Combo("cmbSHROPAY_CODE", "absolute", "503", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("dropdown");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Image0", "absolute", "434", "71", "74", "21", null, null, this);
            obj.set_text("대상구분");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRDAYP_DATE", "absolute", "97", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("15");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "197", "61", "40", "41", null, null, this);
            obj.set_taborder("16");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("24");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_text("일비지급기준관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("27");
            obj.set_text("홈 > 출장관리 > 일비지급관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("28");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "89", "61", "8", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("일비지급기준관리");
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
        this.addIncludeScript("HATF0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HATF0010 일비지급기준
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.01		박정윤		Initial Created.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By NDS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************NDS*CO*KR********/
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "HATF0010"; //해당 Form에서 사용 할 Package 명
        this.sBsrpCode = "";   // 이전 row 선택시 사용변수
        this.sTrgtCode = "";   // 이전 row 선택시 사용변수
        this.sStdtDate = "";   // 이전 row 선택시 사용변수

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
        	
        	this.calSHRDAYP_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));  // 신청기간(시작) 세팅

        	this.fn_Search();
        	
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
        	this.fnc_DatasetClear("dsTA_DAYEXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_DAYEXM=dsTA_DAYEXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_DAYEXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTA_DAYEXM.addRow();
        	
        	this.dsTA_DAYEXM.setColumn(iRow, "STDT_DATE", this.fnc_GetServerDateTime("DATE").substr(0, 8));   //시작일
        	this.dsTA_DAYEXM.setColumn(iRow, "ENDD_DATE", "99991231");						//종료일
            this.dsTA_DAYEXM.setColumn(iRow, "INST_USID", application.GBL_EMPLNO);          //등록자

        	this.grdTA_DAYEXM.setFocus();

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsTA_DAYEXM.deleteMultiRows(this.grdTA_DAYEXM.getSelectedDatasetRows());
        	this.grdTA_DAYEXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTA_DAYEXM");
        	
        	// 검색영역 데이터 초기화
        	//this.calSHRDAYP_DATE      = this.fnc_GetServerDateTime("DATE").substr(0, 8);
        	this.calSHRDAYP_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));  // 신청기간(시작) 세팅
        	this.cmbSHRDPAY_CODE.index = 0;
        	this.cmbSHROPAY_CODE.index = 0;
        	
        	this.grdTA_DAYEXM.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	this.fn_SaveKeyRowposition();

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_DAYEXM=dsTA_DAYEXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	//this.grdTA_DAYEXM.setFocus();

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
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsTA_DAYEXM", this);
        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

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
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_DAYEXM")) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTA_DAYEXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_DAYEXM);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = "출장구분 (" + this.fnc_Trim(this.dsTA_DAYEXM.getColumn(this.dsTA_DAYEXM.rowposition, "STDT_DATE")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_DAYEXM")) { // 변경된 데이터가 없습니다. 
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_DAYEXM.getRowCount(); i++) {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_DAYEXM.getColumn(i, "BSRP_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "출장구분", this.dsTA_DAYEXM, i, this.grdTA_DAYEXM, "BSRP_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_DAYEXM.getColumn(i, "TRGT_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "대상구분", this.dsTA_DAYEXM, i, this.grdTA_DAYEXM, "TRGT_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_DAYEXM.getColumn(i, "STDT_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시작일자", this.dsTA_DAYEXM, i, this.grdTA_DAYEXM, "STDT_DATE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_DAYEXM.getColumn(i, "ENDD_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "종료일자", this.dsTA_DAYEXM, i, this.grdTA_DAYEXM, "ENDD_DATE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_DAYEXM.getColumn(i, "DAIL_APAY"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "일비", this.dsTA_DAYEXM, i, this.grdTA_DAYEXM, "DAIL_APAY");
        		}
        		
        		if (this.fnc_Trim(this.dsTA_DAYEXM.getColumn(i, "STDT_DATE")) > this.fnc_Trim(this.dsTA_DAYEXM.getColumn(i, "ENDD_DATE"))) {
        			return this.fnc_SearchCheckPostAction("TMM042", "출장시작일,출장종료일", this.dsTA_DAYEXM, i, this.grdTA_DAYEXM, "ENDD_DATE");
        		}
        	
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			  + this.fnc_Quote(this.sPACKAGENAME); 						  
        		sReturnString += " action=" 		  + this.fnc_Quote(sKind); 									  
        		sReturnString += " STDT_DATE="        + this.fnc_Quote(this.fnc_Trim(this.calSHRDAYP_DATE.value)); // 시작일자 
        		sReturnString += " BSRP_CODE="        + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDPAY_CODE.value));  // 출장구분
        		sReturnString += " TRGT_CODE="        + this.fnc_Quote(this.fnc_Trim(this.cmbSHROPAY_CODE.value));  // 대상구분

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsTA_DAYEXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_DAYEXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        		var row = this.dsTA_DAYEXM.findRowExpr("BSRP_CODE=='"+this.sBsrpCode+"' && TRGT_CODE=='"+this.sTrgtCode+"'  && STDT_DATE=='"+this.sStdtDate+"' ");
        		
        		if(row > -1) {
        			 this.dsTA_DAYEXM.set_rowposition(row);
        		}else {
        			
        			this.dsTA_DAYEXM.set_rowposition(0);
        		}

        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        		this.fn_Search;

        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRDPAY_CODE,dsSHRDPAY_CODE,0";        // 콤보: 출장구분
        		arrParam[1] = "COMBO,cmbSHROPAY_CODE,dsSHROPAY_CODE,0";        // 콤보: 대상구분
        		arrParam[2] = "GRID,grdTA_DAYEXM,dsDPAY_CODE,BSRP_CODE";       // 그리드: 출장구분
        		arrParam[3] = "GRID,grdTA_DAYEXM,dsOPAY_CODE,TRGT_CODE";       // 그리드: 대상구분
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	// 기능없음
        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*--------------------------+
         | 이전rowposition key저장|
         +--------------------------*/

        this.fn_SaveKeyRowposition = function () {
        	    	
           sBsrpCode =  this.dsTA_DAYEXM.getColumn(this.dsTA_DAYEXM.rowposition, "BSRP_CODE");
           sTrgtCode =  this.dsTA_DAYEXM.getColumn(this.dsTA_DAYEXM.rowposition, "TRGT_CODE");
           sStdtDate =  this.dsTA_DAYEXM.getColumn(this.dsTA_DAYEXM.rowposition, "STDT_DATE");
              
        }

        /*-------------------------------------------------+
         |  그리드 데이터 변경시 중복체크              |
         +-------------------------------------------------*/
        this.dsTA_DAYEXM_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "BSRP_CODE" || e.columnid == "TRGT_CODE" || e.columnid == "STDT_DATE"){
        		
        		var v_arrColID = ["BSRP_CODE","TRGT_CODE","STDT_DATE"];
        		var v_arrValue;
        		var v_strValue0;
        		var v_strValue1;
        		var v_strValue2;

        		if(e.columnid=="BSRP_CODE"){
        			v_strValue0 = e.newvalue;
        			v_strValue1 = obj.getColumn(e.row, "TRGT_CODE");
        			v_strValue2 = obj.getColumn(e.row, "STDT_DATE");
        			
        			if(this.IsNull(v_strValue0) || this.IsNull(v_strValue1) || this.IsNull(v_strValue2)){
        				return true;
        			}
        		
        			v_arrValue = [v_strValue0,v_strValue1,v_strValue2];
        	    } else if(e.columnid=="TRGT_CODE"){

        			v_strValue0 = obj.getColumn(e.row, "BSRP_CODE");
        			v_strValue1 = e.newvalue;
        			v_strValue2 = obj.getColumn(e.row, "STDT_DATE");
        			
        			if(this.IsNull(v_strValue0) || this.IsNull(v_strValue1) || this.IsNull(v_strValue2)){
        				return true;
        			}
        		
        			v_arrValue = [v_strValue0,v_strValue1,v_strValue2];
        	    
        	    } else if(e.columnid=="STDT_DATE"){

        			v_strValue0 = obj.getColumn(e.row, "BSRP_CODE");
        			v_strValue1 = obj.getColumn(e.row, "TRGT_CODE");
        			v_strValue2 = e.newvalue;
        			
        			if(this.IsNull(v_strValue0) || this.IsNull(v_strValue1) || this.IsNull(v_strValue2)){
        				return true;
        			}
        		
        			v_arrValue = [v_strValue0,v_strValue1,v_strValue2];
        	    
        	    }
        	}
        		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_DAYEXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_DAYEXM.addEventHandler("cancolumnchange", this.dsTA_DAYEXM_cancolumnchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.calSHRDAYP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HATF0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
