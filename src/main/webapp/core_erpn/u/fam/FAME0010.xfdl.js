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
                this.set_name("FAME0010");
                this.set_titletext("전표일마감관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SLCL_TYCD</Col><Col id=\"DSNAME\">dsSHRSLCL_TYCD</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSLCL_TYCD</Col><Col id=\"CODEID\">SLCL_TYCD</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_MAGAMX", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MAGA_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"WDAY_NAME\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HOGB_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"EDIT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SLCL_TYCD\" type=\"STRING\" size=\"10\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MAGAMX", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_MAGAMX");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.style.set_background("#ffffff00");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"113\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"0\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"회계일\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"요일\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"휴일명칭\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"전표마감유형\"/><Cell col=\"4\" colspan=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"전체전표\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"작성마감\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"승인마감\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align: center;\" text=\"bind:MAGA_DATE\" suppress=\"1\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"bind:WDAY_NAME\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:HOGB_NAME\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align: left;\" text=\"bind:SLCL_TYCD\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: center;\" text=\"bind:EDIT_YSNO\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: center;\" text=\"bind:APPR_YSNO\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAPPR_YSNO", "absolute", "667", "71", "140", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("승인마감 전체선택");
            obj.set_value("false");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", "71", "62", "21", null, null, this);
            obj.set_text("회계년월");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkEDIT_YSNO", "absolute", "508", "71", "140", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("작성마감 전체선택");
            obj.set_value("false");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSLCL_TYCD", "absolute", "313", "71", "155", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("stMJIK_GUBN", "absolute", "216", "71", "89", "21", null, null, this);
            obj.set_text("전표마감유형");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_visible("true");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("전표일마감관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("14");
            obj.set_text("홈 > 재무관리 > 전표관리 > 전표처리 > 전표마감일관리");
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
            obj.set_taborder("23");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("24");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "186", "61", "40", "41", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRBASE_YYMM", "absolute", "96", "71", "90", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전표일마감관리");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FAME0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAME0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAME0010 전표일마감관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		양현덕		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTFFTTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAME0010"; 
        this.bFireEvents = true;

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                  *
         **************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.divSHRBASE_YYMM.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6));
        	this.divSHRBASE_YYMM.setFocus();
        	
        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_MAGAMX"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_MAGAMX=dsTA_MAGAMX";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAGAMX.setFocus();
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTA_MAGAMX");
        	this.grdTA_MAGAMX.setFocus();
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_MAGAMX=dsTA_MAGAMX:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAGAMX.setFocus(); 

        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
             //기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_MAGAMX", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_MAGAMX")) return this.fnc_Message("TMM023");

        	if(this.fnc_Length(this.fnc_Trim(this.divSHRBASE_YYMM.fn_GetMonth())) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계년월", this.divSHRBASE_YYMM);	
        	}
        	
        	return true;
        	
        }

         /*------------------+
         | 삭제 여부 체크! |
         +-------------------*/
        this.fn_DeleteCheck = function (){
        	return true;
        }

         /*------------------+
         | 저장 여부 체크! |
         +-------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck("dsTA_MAGAMX")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;
        	
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind){
        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " MAGA_YYMM=" + this.fnc_Quote(this.divSHRBASE_YYMM.fn_GetMonth());
        		sReturnString += " SLCL_TYCD=" + this.fnc_Quote(this.cmbSHRSLCL_TYCD.value);
        		
        	} else if (sKind == "SAVE00") {
        		
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
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
        this.fn_PostProcess = function (sMethodName){

        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation, this.dsTA_MAGAMX.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsTA_MAGAMX.rowcount);

        		this.bFireEvents = false;
        		this.chkEDIT_YSNO.set_value("0");
        		this.chkAPPR_YSNO.set_value("0");
        		this.bFireEvents = true;

        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        		this.bFireEvents = false;
        		this.chkEDIT_YSNO.set_value("0");
        		this.chkAPPR_YSNO.set_value("0");
        		this.bFireEvents = true;
        	
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRSLCL_TYCD,dsSHRSLCL_TYCD,0"; //전표구분(조회)
        			arrParam[1] = "GRID,grdTA_MAGAMX,dsSLCL_TYCD,SLCL_TYCD"; //전표구분(그리드)
        		this.fnc_CommonCodeInnerBind(arrParam);	

        	}

        }
        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	//기능없음
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                               *
         **************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        /*-------------------------+
         |  작성마감 전체선택시 |
         +-------------------------*/
        this.chkEDIT_YSNO_OnClick = function (obj,e) {

        	var sMAGA_VALUE;

        	if (this.dsTA_MAGAMX.getRowCount() < 1) {
        		this.chkEDIT_YSNO.set_value("0");
        		this.fnc_Message("TMM141");
        		return;
        	}

        	if (!this.bFireEvents) return;

        	if (obj.isChecked()) {
        		sMAGA_VALUE = "1";
        	} else {
        		sMAGA_VALUE = "0";
        	}

        	for (var i = 0; i < this.dsTA_MAGAMX.getRowCount(); i++) {

        		this.dsTA_MAGAMX.setColumn(i, "EDIT_YSNO", sMAGA_VALUE);

        	}
        	
        }

        /*-------------------------+
         |  승인마감 전체선택시 |
         +-------------------------*/
        this.chkAPPR_YSNO_OnClick = function (obj,e){

        	var sMAGA_VALUE;

        	if (this.dsTA_MAGAMX.getRowCount() < 1) {
        		this.chkAPPR_YSNO.set_value("0");
        		this.fnc_Message("TMM141");
        		return;
        	}

        	if (!this.bFireEvents) return;

        	if (obj.isChecked()) {
        		sMAGA_VALUE = "1";
        	} else {
        		sMAGA_VALUE = "0";
        	}

        	for (var i = 0; i < this.dsTA_MAGAMX.getRowCount(); i++) {

        		this.dsTA_MAGAMX.setColumn(i, "APPR_YSNO", sMAGA_VALUE);

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
            this.chkAPPR_YSNO.addEventHandler("onclick", this.chkAPPR_YSNO_OnClick, this);
            this.chkEDIT_YSNO.addEventHandler("onclick", this.chkEDIT_YSNO_OnClick, this);
            this.cmbSHRSLCL_TYCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.stMJIK_GUBN.addEventHandler("onclick", this.stMJIK_GUBN_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAME0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
