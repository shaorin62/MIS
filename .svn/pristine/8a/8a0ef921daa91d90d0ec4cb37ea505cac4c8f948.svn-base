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
                this.set_name("TMMB0020");
                this.set_titletext("프로그램정보관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_PROGXM", this);
            obj._setContents("<ColumnInfo><Column id=\"PROG_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROG_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SYST_CODE\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"PGGB_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PROG_PATH\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">PGGB_CODE</Col><Col id=\"DSNAME\">dsPGGB_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\"/></Row><Row><Col id=\"CODEID\">PGGB_CODE</Col><Col id=\"DSNAME\">dsSHRPGGB_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTM_PROGXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_PROGXM");
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
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"111\"/><Column size=\"501\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"align:center;background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"프로그램 ID\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"프로그램명\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"시스템코드\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"프로그램구분\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"프로그램경로\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" editfilter=\"upper,digit\" style=\"align:center;\" text=\"bind:PROG_IDXX\" editlimit=\"12\" editimemode=\"alpha\" editautoselect=\"true\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" editfilter=\"none\" style=\"align:left;\" text=\"bind:PROG_NAME\" editlimit=\"50\" editimemode=\"hangul\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;\" text=\"bind:SYST_CODE\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;\" text=\"bind:PGGB_CODE\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:PROG_PATH\" editlimit=\"3\" editimemode=\"english\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:USEX_YSNO\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "256", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("6");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "55", "21", null, null, this);
            obj.set_text("시스템");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("chkSHRUSEX_GUBN", "absolute", "221", "71", "88", "21", null, null, this);
            obj.set_text("프로그램구분");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPROG_NAME", "absolute", "566", "71", "201", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("40");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPGGB_CODE", "absolute", "315", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("dropdown");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "83", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("dropdown");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Image0", "absolute", "453", "71", "109", "21", null, null, this);
            obj.set_text("프로그램코드/명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("14");
            obj.set_text("홈 > 공통관리 > 권한관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("15");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("23");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "193", "61", "40", "41", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "425", "61", "40", "41", null, null, this);
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

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_text("프로그램정보관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("프로그램정보관리");
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
        this.addIncludeScript("TMMB0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMB0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMB0020 프로그램 정보관리
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "TMMB0020"; //해당 Form에서 사용 할 Package 명

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
        	this.fnc_DatasetClear("dsTM_PROGXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_PROGXM=dsTM_PROGXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_PROGXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTM_PROGXM.addRow();
        	this.dsTM_PROGXM.setColumn(iRow, 'USEX_YSNO', '1');
        	this.fnc_GridSetCellFocus(this.grdTM_PROGXM, "PROG_IDXX");

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsTM_PROGXM.deleteRow(this.dsTM_PROGXM.rowposition);
        	}
        	this.grdTM_PROGXM.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_PROGXM");
        	this.grdTM_PROGXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_PROGXM=dsTM_PROGXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_PROGXM.setFocus();
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
        	 var sMessage = this.fnc_FormUnloadCheck("dsTM_PROGXM", this);

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

        	if (this.fnc_DatasetChangeCheck("dsTM_PROGXM")) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_PROGXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsTM_PROGXM.getColumn(this.dsTM_PROGXM.rowposition, "PROG_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_PROGXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_PROGXM.getRowCount(); i++) {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_PROGXM.getColumn(i, "PROG_IDXX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "프로그램 ID", this.dsTM_PROGXM, i, this.grdTM_PROGXM, "PROG_IDXX");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_PROGXM.getColumn(i, "PROG_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "프로그램 명", this.dsTM_PROGXM, i, this.grdTM_PROGXM, "PROG_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_PROGXM.getColumn(i, "SYST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시스템 코드", this.dsTM_PROGXM, i, this.grdTM_PROGXM, "SYST_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_PROGXM.getColumn(i, "PGGB_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "프로그램구분", this.dsTM_PROGXM, i, this.grdTM_PROGXM, "PGGB_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_PROGXM.getColumn(i, "PROG_PATH"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "프로그램 경로", this.dsTM_PROGXM, i, this.grdTM_PROGXM, "PROG_PATH");
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
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME); 						  
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind); 									  
        		sReturnString += " cmbSHRSYST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSYST_CODE.value)); //시스템 코드
        		sReturnString += " cmbSHRPGGB_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRPGGB_CODE.value)); //프로그램 구분
        		sReturnString += " edtSHRPROG_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRPROG_NAME.value)); //프로그램 명

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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_PROGXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_PROGXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fn_KeyFieldDisible(this.dsTM_PROGXM);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        		arrParam[1] = "COMBO,cmbSHRPGGB_CODE,dsSHRPGGB_CODE,0";
        		arrParam[2] = "GRID,grdTM_PROGXM,dsSYST_CODE,SYST_CODE";
        		arrParam[3] = "GRID,grdTM_PROGXM,dsPGGB_CODE,PGGB_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTM_PROGXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_PROGXM, "PROG_IDXX"), "edittype", "normal");
        	} else {
        		this.grdTM_PROGXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTM_PROGXM, "PROG_IDXX"), "edittype", "none");
        	}
        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*-------------------------------------------------+
         |  시스템 코드 변경 시 프로그램 경로 Default 처리 |
         +-------------------------------------------------*/
        this.dsTM_PROGXM_OnColumnChanged = function (obj,e) {

        	if (e.columnid != 'SYST_CODE') return;
        	// 시스템 코드가 아니면 그냥 종로
        	this.dsTM_PROGXM.setColumn(e.row, "PROG_PATH", this.fnc_ToLower(e.newvalue));
        }

        this.fn_FormUnloadCheckProcess = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_PROGXM.addEventHandler("oncolumnchanged", this.dsTM_PROGXM_OnColumnChanged, this);
            this.dsTM_PROGXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRPROG_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMB0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
