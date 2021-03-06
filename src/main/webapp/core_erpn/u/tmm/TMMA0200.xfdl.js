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
                this.set_name("TMMA0200");
                this.set_titletext("매뉴얼관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_MANUAL", this);
            obj._setContents("<ColumnInfo><Column id=\"SYST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNUL_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"MNUL_SBJT\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REGR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"DOWNLOAD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFL_ATTACH", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "279", "71", "76", "21", null, null, this);
            obj.set_text("매뉴얼명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMNUL_SBJT", "absolute", "347", "71", "180", "21", null, null, this);
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_MANUAL", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_MANUAL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"264\"/><Column size=\"108\"/><Column size=\"93\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"시스템구분\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"매뉴얼ID\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"매뉴얼명\"/><Cell col=\"3\" text=\"등록일\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_edit\" text=\"버전\"/><Cell col=\"5\" text=\"파일명\"/><Cell col=\"6\" text=\"업로드\"/><Cell col=\"7\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:SYST_CODE\"/><Cell col=\"1\" text=\"bind:MNUL_IDXX\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:MNUL_SBJT\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:REGR_DATE\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\" text=\"파일 업로드\"/><Cell col=\"7\" displaytype=\"expr:DOWNLOAD == '파일 다운로드' ? 'button' : 'none'\" edittype=\"expr:DOWNLOAD == '파일 다운로드' ? 'button' : 'none'\" text=\"expr:DOWNLOAD == '파일 다운로드' ? DOWNLOAD : ''\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "90", "71", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_type("search");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("");

            obj = new Static("imgSearchTitle01", "absolute", "27", "71", "55", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("시스템");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("매뉴얼관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("15");
            obj.set_text("홈 > 공통관리 > 매뉴얼관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("21");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("23");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("24");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "82", "61", "8", "41", null, null, this);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "250", "61", "40", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("매뉴얼관리");
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
        this.addIncludeScript("TMMA0200.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0200.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0200 매뉴얼관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.27		chg			Initial Created.
         *   2016.09.26		김준수		주석 수정.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMA0200"; //해당 Form에서 사용 할 Package 명 

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

        this.sKeyValue = new Array();	//저장 후 FILE_PATH가 tmp에서 real로 변경되기 때문에 key값을 가지고 있다가 조회시 다시 찾는다.

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
        	this.fnc_DatasetClear('dsTM_MANUAL,dsFL_ATTACH');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_MANUAL=dsTM_MANUAL";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_MANUAL.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsTM_MANUAL.insertRow(this.dsTM_MANUAL.rowposition + 1);
        	
        	
        	this.dsTM_MANUAL.setColumn(iRow,"MENU_IDXX",this.sPACKAGENAME);//매뉴얼 테이블을 여러화면에서 사용하기 때문에 구분자역할을 한다.
        	
        	this.dsTM_MANUAL.set_rowposition(iRow);
        	this.fnc_GridSetCellFocus(this.grdTM_MANUAL, "SYST_CODE");
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsTM_MANUAL.deleteRow(this.dsTM_MANUAL.rowposition);
        	this.grdTM_MANUAL.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTM_MANUAL,dsFL_ATTACH");
        	this.grdTM_MANUAL.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsTM_MANUAL.getColumn(this.dsTM_MANUAL.rowposition,"MNUL_IDXX");
        	
        	var sMethodName = "SAVE00";
        	
        	//첨부파일이 있는경우 dsFL_ATTACH를 추가한다. C,D 만 있기 때문에 U로 보내야 한다.
        	//저장후 dsFL_ATTACH를 클리어 해야 한다.
        	var sInDataSet = "dsTM_MANUAL=dsTM_MANUAL:U dsFL_ATTACH=dsFL_ATTACH:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_MANUAL.setFocus();
        	
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

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_MANUAL", this);

        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
        	
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

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
        	
        	if (this.fnc_DatasetChangeCheck("dsTM_MANUAL,dsFL_ATTACH")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTM_MANUAL.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsTM_MANUAL.getColumn(this.dsTM_MANUAL.rowposition, "MNUL_IDXX");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_MANUAL,dsFL_ATTACH")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_MANUAL.getRowCount(); i++) {
        		
        		//변경된 데이터만 체크
        		if (this.fnc_ToUpper(this.dsTM_MANUAL.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_MANUAL.getColumn(i, "SYST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시스템구분", this.dsTM_MANUAL, i, this.grdTM_MANUAL, 'SYST_CODE');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_MANUAL.getColumn(i, "MNUL_IDXX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "매뉴ID", this.dsTM_MANUAL, i, this.grdTM_MANUAL, 'MNUL_IDXX');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_MANUAL.getColumn(i, "MNUL_SBJT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "매뉴제목", this.dsTM_MANUAL, i, this.grdTM_MANUAL, 'MNUL_SBJT');
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
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " SYST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSYST_CODE.value));
        		sReturnString += " MNUL_SBJT=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMNUL_SBJT.value));
        		sReturnString += " MENU_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.sPACKAGENAME));
        		
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
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
        	
        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsTM_MANUAL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_MANUAL.getCaseCount("dataset.getRowLevel(currow)==0"));

        		//파일을 가지고 있는경우 다운로드 이미지 변경시 
        		//데이타셋 바인딩으로 데이터가 변경되는데,, 바인드를 사용하지 않으면 셀단위로 변경할수가 없어서
        		// 쿼리에서 가져와야 한다.
        		
        		//원래 행으로 돌아가기
        		var irow = this.dsTM_MANUAL.findRow("MNUL_IDXX",this.sKeyValue[0]);
        		this.sKeyValue[0] = "";
        		if (irow<0)
        			irow=0;
        		this.dsTM_MANUAL.set_rowposition(irow);	
        		
        		
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsTM_MANUAL);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        		//저장후 첨부파일 데이타리스트를 초기화 해야 한다.
        		//해당 화면은 메인로우 1개당 file_idxx가 1개라서 로우체인지때 초기화 하지 않는다.
        		this.fnc_DatasetClear('dsFL_ATTACH');
        		
        		//파일업로드를 하면 tmp path에 있는데, 저장을 하게 되면 tmp path에서 real path로 변경되기 때문에 서버에서 새로 가져와야 한다.
        		this.fn_Search();
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        		arrParam[1] = "GRID,grdTM_MANUAL,dsSYST_CODE,SYST_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTM_MANUAL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_MANUAL, "MNUL_IDXX"), "edittype", "normal");
        	} else {
        		this.grdTM_MANUAL.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_MANUAL, "MNUL_IDXX"), "edittype", "none");
        	}

        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	//기능없음
        }

        this.grdTM_MANUAL_oncellclick = function(obj,e) {

        	if (this.grdTM_MANUAL.getCellText(e.row,e.col)=="파일 업로드") {
        	
        		//파일업로드 팝업창 호출
        		this.fnc_CallFileUplod(1,"xls,xlsx","fn_CallFileUplodCallback");//펑션명에 this는 안붙이는 것으로 한다.
        		
        	} else if (this.grdTM_MANUAL.getCellText(e.row,e.col)=="파일 다운로드") {
        		//다운로드 펑션
        		var filePath = this.dsTM_MANUAL.getColumn(e.row,"FILE_PATH");
        		var phyFileNm = this.dsTM_MANUAL.getColumn(e.row,"PFIL_NAME");
        		var realFileNm = this.dsTM_MANUAL.getColumn(e.row,"LFIL_NAME");
        		
        		if (filePath.length > 0) {
        			this.fnc_FileDownLoad(filePath, phyFileNm, realFileNm);
        		}		
        	}
        }

        //공통함수 페이지에서 업무화면을 호출하면 form 컨텍스트를 찾지 못해 에러 발생.
        //form 새로 꺼내야 한다.
        this.fn_CallFileUplodCallback = function(robjds,form) {

        	var objds = form.dsFL_ATTACH;
        	var objmainds =form.dsTM_MANUAL;
        	
        	var objmaingrd = form.grdTM_MANUAL;
        	
        	//기존에 등록된 데이터는 삭제로 등록한다.
        	if (objmainds.getColumn(objmainds.rowposition,"PFIL_NAME") != "" && objmainds.getColumn(objmainds.rowposition,"PFIL_NAME") != null ) {
        		var iRow = objds.addRow();
        		objds.setColumn(iRow,"FILE_IDXX",objmainds.getColumn(objmainds.rowposition,"FILE_IDXX"));
        		objds.setColumn(iRow,"PFIL_NAME",objmainds.getColumn(objmainds.rowposition,"PFIL_NAME"));
        		objds.setColumn(iRow,"FILE_PATH",objmainds.getColumn(objmainds.rowposition,"FILE_PATH"));
        		
        		if (objds.updatecontrol) {
        			//웹스퀘어 버전은 임의로 로우데이터를 등록해서 상태값을 변경했는데
        			//넥사크로는 ds프로퍼티에 updatecontrol 를 false로 했을 때만 setRowType 이 적용된다.
        			//그래서 addRow deleteRow로 변경함.	
        			objds.deleteRow(iRow);
        		} else {
        			//첨부파일 리스트가 바인드 되지 않은 화면은  
        			////addRow 후 deleteRow를 하면 로우가 제거 되서
        			//updatecontrol: false로 하고    setRowType 로 설정한다.
        			objds.setRowType(iRow,Dataset.ROWTYPE_DELETE);
        		}
        	}
        	
        	//업무테이블에 해당 컬럼을 저장할 때만 갱신함, 보통 FILE_IDXX만 있으면 된다.
        	objmainds.setColumn(objmainds.rowposition,"FILE_IDXX",robjds.getColumn(0,"FILE_IDXX"));
        	objmainds.setColumn(objmainds.rowposition,"FILE_NAME",robjds.getColumn(0,"LFIL_NAME"));
        	
        	
        	//현재 첨부파일이 tmp 폴더에 있는 상태에서 다운로드 버튼을 활성화 시킨다. (다운로드를 하려면 FILE_PATH,PFIL_NAME,LFIL_NAME 가 필요함.
        	objmainds.setColumn(objmainds.rowposition,"FILE_PATH",robjds.getColumn(0,"FILE_PATH"));
        	objmainds.setColumn(objmainds.rowposition,"PFIL_NAME",robjds.getColumn(0,"PFIL_NAME"));
        	objmainds.setColumn(objmainds.rowposition,"LFIL_NAME",robjds.getColumn(0,"LFIL_NAME"));

        	objmainds.setColumn(objmainds.rowposition,"DOWNLOAD","파일 다운로드");

        	//저장버튼을 누르게 되면 tmp폴더에 있는 파일이 실제 폴더로 옮겨지기 때문에 FILE_PATH를 갱신하기 위해서 검색을 다시 해야 한다.
        	
        	//팝업창에서 추가된 파일리스트를 추가상태로 복사한다.(copyData를 사용하면 초기상태가된다)
        	for (var i = 0; i < robjds.rowcount; i++) {
        		var iRow = objds.addRow();
        		objds.copyRow(iRow,robjds,i);
        		
        		if (objds.updatecontrol) {
        			//copyRow 시
        			//updatecontrol 속성의 값이 'true'이면 복사된 행의 타입은 ROWTYPE_UPDATE가 되고, 'false'이면 ROWTYPE_NORMAL
        		} else {
        			objds.setRowType(iRow,Dataset.ROWTYPE_INSERT);
        		}
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_MANUAL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRMNUL_SBJT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdTM_MANUAL.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdTM_MANUAL.addEventHandler("oncellclick", this.grdTM_MANUAL_oncellclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMA0200.xfdl");
        this.loadPreloadList();
       
    };
}
)();
