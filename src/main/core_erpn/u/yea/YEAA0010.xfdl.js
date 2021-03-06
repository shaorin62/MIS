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
                this.set_name("TMMD0310");
                this.set_titletext("연말정산환경설정");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYEA_MINFOM", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_POSTSQL_INS\" size=\"2000\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_POSTSQL_UPD\" size=\"2000\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_POSTSQL_DEL\" size=\"2000\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_MINFOD", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_STD_YY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_TAB_NM\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_COL_NM\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_ITEM_NM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_NOTE\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_ASIS_COL_NM\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_00001", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_COMM_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_COMD_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_COMD_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE1F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE2F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE3F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE4F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE5F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE6F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_USE_YN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_ASIS_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">YEA_00001</Col><Col id=\"DSNAME\">dsYEA_00001</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "8", "109", "300", "25", null, null, this);
            obj.set_text("후처리 SQL");
            obj.style.set_align("left middle");
            obj.set_cssclass("stySubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "563", "27", "8", null, this);
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Image6", "absolute", "8", "98", null, "3", "8", null, this);
            obj.set_cssclass("sytSearchBoxShadow");
            this.addChild(obj.name, obj);

            obj = new Static("stSHRYEA_STD_YY", "absolute", "16", "68", "68", "22", null, null, this);
            obj.set_text("기준년도");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "500", "180", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", "132", "487", null, null, "8", this);
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "10", "134", "483", null, null, "10", this);
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "82", "634", "409", null, null, "12", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "82", "136", "409", "250", null, null, this);
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("stYEA_POSTSQL_INS", "absolute", "12", "136", "70", "250", null, null, this);
            obj.set_text("INSERT");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtYEA_POSTSQL_INS", "absolute", "84", "138", "406", "246", null, null, this);
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsYEA_MINFOM");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "82", "385", "409", "250", null, null, this);
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("stYEA_POSTSQL_UPD", "absolute", "12", "385", "70", "250", null, null, this);
            obj.set_text("UPDATE");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtYEA_POSTSQL_UPD", "absolute", "84", "387", "406", "246", null, null, this);
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsYEA_MINFOM");
            this.addChild(obj.name, obj);

            obj = new Static("stYEA_POSTSQL_DEL", "absolute", "12", "634", "70", null, null, "12", this);
            obj.set_text("DELETE");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtYEA_POSTSQL_DEL", "absolute", "84", "636", "406", null, null, "14", this);
            obj.getSetter("binddataset").set("dsYEA_MINFOM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("1000");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "500", "132", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stSHRYEA_TAB_NM", "absolute", "508", "140", "68", "22", null, null, this);
            obj.set_text("테이블명");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRYEA_TAB_NM", "absolute", "585", "140", "230", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("dropdown");

            obj = new Static("Static05", "absolute", "500", "109", "300", "25", null, null, this);
            obj.set_text("매핑정보");
            obj.set_cssclass("stySubTitle");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdYEA_MINFOD", "absolute", "500", "203", null, null, "8", "8", this);
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsYEA_MINFOD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"컬럼명\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"항목명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"비고\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"ASIS컬럼명\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" editfilter=\"upper,digit\" style=\"align:left;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_COL_NM\" editlimit=\"10\" editimemode=\"alpha\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);background2:EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?application.GBL_COLORINSERT:dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?application.GBL_COLORUPDATE:application.GBL_COLORDISABLE);\" text=\"bind:YEA_ITEM_NM\" editlimit=\"100\" editimemode=\"hangul\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_NOTE\" editlimit=\"100\" editimemode=\"hangul\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:YEA_ASIS_COL_NM\" editlimit=\"100\" editimemode=\"hangul\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("연말정산환경설정");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 급여관리 > 연말정산 > 연말정산환경설정");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Calendar("spnSHRYEA_STD_YY", "absolute", "87", "69", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연말정산환경설정");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("txtYEA_POSTSQL_INS_value","txtYEA_POSTSQL_INS","value","dsYEA_MINFOM","YEA_POSTSQL_INS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtYEA_POSTSQL_UPD_value","txtYEA_POSTSQL_UPD","value","dsYEA_MINFOM","YEA_POSTSQL_UPD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtYEA_POSTSQL_DEL_value","txtYEA_POSTSQL_DEL","value","dsYEA_MINFOM","YEA_POSTSQL_DEL");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("YEAA0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("YEAA0010.xfdl", "script::lib_script_common_YEA.xjs");
        this.registerScript("YEAA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0070 연말정산처리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.31		김석영		Initial Created.
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
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs";
        //include "script::lib_script_common_YEA.xjs";			  //연말정산용 추가!!!

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "YEAA0010"; //해당 Form에서 사용 할 Package 명

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined)
        {
        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = "";   //Form의 Title 정보
        	this.sFORMLOCATION = "";   //Form의 Location 정보
        	this.sUSERLAVEL    = "";   //Form의 Location 정보
        }else{
        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        /****************************************************************************************************
         *                                         공통 Event 처리 부분                                     *
         ****************************************************************************************************/

        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function(obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	this.fnc_GetComboDs_YEA(this.dsCombo);		//공통코드가 다르게 생겼으므로!!!
        	
        	// 조회조건 초기값 세팅
        	if ( nexacro.toNumber(this.fnc_Today().substr(4, 2)) < 3 ) {
        	    var toYear = nexacro.toNumber(this.fnc_Today().substr(0, 4)) - 1;
        	    
        		this.spnSHRYEA_STD_YY.set_value(toYear.toString()); 
        	} else {
        		this.spnSHRYEA_STD_YY.set_value(this.fnc_Today().substr(0, 4)); 
        	}
        	/*
        	var sNowDate = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));	
        	this.spnSHRYEA_STD_YY.set_value(sNowDate);
        	this.spnSHRYEA_STD_YY.setFocus();
        	*/
        	
        	this.fn_Search();
        		
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function(obj) {

        	this.close();
        	
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function(obj) {
        	this.displayMINFOM();
        	this.displayMINFOD();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function(obj) {
        	//기능없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function(obj) {
        	//기능없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function(obj) {
        	this.fnc_DataSetCancel("dsYEA_MINFOM,dsYEA_MINFOD");
        	this.grdYEA_MINFOD.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function(obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsYEA_MINFOM=dsYEA_MINFOM:U dsYEA_MINFOD=dsYEA_MINFOD:U ";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdYEA_MINFOD.setFocus();

        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function(obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function(obj) {
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsYEA_MINFOM,dsYEA_MINFOD", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function(obj,e) {

        	this.fnc_FormUnload(obj,e);
        	
        }

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function(obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function(obj) {

        	this.fnc_EditFocus(obj);
        	
        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        /*---------------------+
         |  삭제 여부 체크!    |
         +---------------------*/
        this.fn_DeleteCheck = function() {
        	// 기능 없음
        }

        /*-----------------------+
         |  조회 필수 조건 체크! |
         +-----------------------*/
        this.fn_SearchItemCheck = function() {

        	if (this.fnc_DatasetChangeCheck("dsYEA_MINFOM,dsYEA_MINFOD")) {
        		if (this.fnc_Confirm("변경된 자료가 있습니다. 진행 시 변경 자료는 초기화 됩니다. 그래도 진행 하시겠습니까?") == false) return false;
        	}
        	
        	if(this.fnc_Length(this.fnc_Trim(this.spnSHRYEA_STD_YY.value)) < 4) {
        		this.fnc_Alert("[ 기준년도 ] 값은 반드시 입력 하셔야 합니다!");
        		this.spnSHRYEA_STD_YY.setFocus();
                return false;
        	}

        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function() {
        	
        	if (!this.fnc_DatasetChangeCheck("dsYEA_MINFOM,dsYEA_MINFOD")) {
        		this.fnc_Alert("저장 할 자료가 없습니다. 확인 후 다시 작업하세요!");
        		return false;
        	}

        	//필수 입력 항목 체크
        	//없음!

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function(sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.spnSHRYEA_STD_YY.value, 0, 4))); 
        		
        	// 조회 Argument 생성
        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.spnSHRYEA_STD_YY.value, 0, 4))); 
        		sReturnString += " YEA_TAB_NM=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRYEA_TAB_NM.value));

        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.spnSHRYEA_STD_YY.value, 0, 4))); 
        	
        	}

        	return sReturnString;
        }

        /*-------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function(sMethodName,ErrorCode,ErrorMSG) {

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
        this.fn_PostProcess = function(sMethodName) {
        	
        	if (sMethodName == 'SEARCH00') {
        		//this.fnc_Information(this.stInformation, this.dsYEA_MINFOM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("M1007", this.dsYEA_MINFOM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == 'SEARCH01') {
        		this.fnc_Information(this.stInformation, this.dsYEA_MINFOD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("M1007", this.dsYEA_MINFOD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == 'SAVE00') {
        		this.fn_KeyFieldDisible(this.dsYEA_MINFOD);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Alert("저장을 완료 하였습니다!");
        		
        	} else if (sMethodName == "GetCommCode_YEA") {

        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRYEA_TAB_NM,dsYEA_00001,0";
        		this.fnc_CommonCodeInnerBind_YEA(arrParam);
        	}
        }

        /*---------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +---------------------------------------*/
        this.fn_KeyFieldDisible = function(obj) {
        	
        	if (obj.name == "dsYEA_MINFOD") {
        	
        		if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        			this.grdYEA_MINFOD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdYEA_MINFOD, "YEA_COL_NM"), "edittype", "text");
        			this.grdYEA_MINFOD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdYEA_MINFOD, "YEA_ITEM_NM"), "edittype", "text");
        			
        		} else {
        			this.grdYEA_MINFOD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdYEA_MINFOD, "YEA_COL_NM"), "edittype", "none");
        			this.grdYEA_MINFOD.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdYEA_MINFOD, "YEA_ITEM_NM"), "edittype", "none");
        			
        		}
        	
        	}
        }

        
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------------+
        |  헤더 조회              |
        +------------------------*/
        this.displayMINFOM = function() {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsYEA_MINFOM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsYEA_MINFOM=dsYEA_MINFOM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.txtYEA_POSTSQL_INS.setFocus();

        }

        /*------------------------+
        |  서브 조회              |
        +------------------------*/
        this.displayMINFOD = function() {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsYEA_MINFOD");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsYEA_MINFOD=dsYEA_MINFOD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdYEA_MINFOD.setFocus();

        }

        /*------------------------+
        |  테이블명 변경 이벤트  |
        +------------------------*/
        this.cmbSHRYEA_TAB_NM_onitemchanged = function(obj,e) {
        	this.displayMINFOD();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsYEA_MINFOM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsYEA_MINFOD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.Static2.addEventHandler("onclick", this.Static2_onclick, this);
            this.stSHRYEA_STD_YY.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.Shape1.addEventHandler("onclick", this.Shape1_onclick, this);
            this.stYEA_POSTSQL_INS.addEventHandler("onclick", this.Static34_onclick, this);
            this.txtYEA_POSTSQL_INS.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtYEA_POSTSQL_INS.addEventHandler("oneditclick", this.txtYEA_POSTSQL_INS_oneditclick, this);
            this.stYEA_POSTSQL_UPD.addEventHandler("onclick", this.Static34_onclick, this);
            this.txtYEA_POSTSQL_UPD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.stYEA_POSTSQL_DEL.addEventHandler("onclick", this.Static34_onclick, this);
            this.txtYEA_POSTSQL_DEL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtYEA_POSTSQL_DEL.addEventHandler("oneditclick", this.txtDESC_REMK_oneditclick, this);
            this.stSHRYEA_TAB_NM.addEventHandler("onclick", this.imgSearchTitle01_onclick, this);
            this.cmbSHRYEA_TAB_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRYEA_TAB_NM.addEventHandler("onitemchanged", this.cmbSHRYEA_TAB_NM_onitemchanged, this);
            this.Static05.addEventHandler("onclick", this.Static2_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.spnSHRYEA_STD_YY.addEventHandler("onchanged", this.spnSHRYEA_STD_YY_onchanged, this);
            this.spnSHRYEA_STD_YY.addEventHandler("onspin", this.spnSHRYEA_STD_YY_onspin, this);
            this.spnSHRYEA_STD_YY.addEventHandler("oneditclick", this.spnSHRYEA_STD_YY_oneditclick, this);

        };

        this.loadIncludeScript("YEAA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
