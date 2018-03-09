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
                this.set_name("FSME0010");
                this.set_titletext("자산실사관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_INVTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INVT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"INVT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"INVT_STDT\" type=\"STRING\" size=\"8\"/><Column id=\"INVT_ENDT\" type=\"STRING\" size=\"8\"/><Column id=\"ASST_TOTL\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"DESC_REMK\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("2");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_INVTXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("select");
            obj.set_binddataset("dsFS_INVTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"130\"/><Column size=\"281\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"조사기준일자\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"자산실사명\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"조사기간(F)\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"조사기간(T)\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"총자산수\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:INVT_DATE\" editlimit=\"8\" suppress=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:INVT_NAME\" editlimit=\"100\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:INVT_STDT\" editlimit=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:INVT_ENDT\" editlimit=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:ASST_TOTL\" editlimit=\"15\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:DESC_REMK\" editlimit=\"100\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRINVT_DAT2", "absolute", "285", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static64", "absolute", "268", "71", "16", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRINVT_DAT1", "absolute", "156", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_taborder("3");

            obj = new Static("title01", "absolute", "56", "71", "98", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("조사기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("자산실사관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("11");
            obj.set_text("홈 > 자산관리 > 자산실사관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("19");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("20");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("21");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산실사관리");
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
        this.addIncludeScript("FSME0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSME0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FSME0010 자산실사관리
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

        /************************
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTTTTTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FSME0010";

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
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	var sDate = this.fnc_GetServerDateTime("DATE");
        	this.calSHRINVT_DAT1.set_value(this.fnc_Left(sDate, 4) + "0101");
        	this.calSHRINVT_DAT2.set_value(this.fnc_Left(sDate));
        	this.calSHRINVT_DAT1.setFocus();
        	
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
        	this.fnc_DatasetClear("dsFS_INVTXM"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_INVTXM=dsFS_INVTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_INVTXM.setFocus();

        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsFS_INVTXM.addRow();
        	this.dsFS_INVTXM.setColumn(iRow, "INVT_DATE", this.fnc_GetServerDateTime("DATE"));
        	this.grdFS_INVTXM.setFocus();
        	this.grdFS_INVTXM.setCellPos(1);

        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsFS_INVTXM.deleteRow(this.dsFS_INVTXM.rowposition);
        	this.grdFS_INVTXM.setFocus();
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsFS_INVTXM");
        	this.grdFS_INVTXM.setFocus();
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsFS_INVTXM=dsFS_INVTXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_INVTXM.setFocus();

        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;	
        	
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_INVTXM", this);	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때   |
         +-----------------------------------*/
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
        	
        	if (this.fnc_DatasetChangeCheck("dsFS_INVTXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;	
        	}

        	return true;

        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsFS_INVTXM.rowcount < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	var sInvtDate = this.dsFS_INVTXM.getColumn(this.dsFS_INVTXM.rowposition, "INVT_DATE");
        		sInvtDate = this.fnc_SubStr(sInvtDate, 0, 4) + "년" + this.fnc_SubStr(sInvtDate, 4, 2) + "월" + this.fnc_SubStr(sInvtDate, 6) + "일 ";
        	
        	var sQuestionText  ="조사기준일자 : ("+ sInvtDate + "), 자산실사명 : (" + this.dsFS_INVTXM.getColumn(this.dsFS_INVTXM.rowposition, "INVT_NAME")+")";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck("dsFS_INVTXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsFS_INVTXM.rowcount; i++) {
        		
        		if (this.fnc_ToUpper(this.dsFS_INVTXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (!this.fnc_IsDate(this.dsFS_INVTXM.getColumn(i, "INVT_DATE"))) {
        			return this.fnc_CheckPostAction("TMM072", "조사기준일자", this.dsFS_INVTXM, i, this.grdFS_INVTXM, "INVT_DATE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_INVTXM.getColumn(i, "INVT_NAME"))) < 1){
        			return this.fnc_CheckPostAction("TMM072", "자산실사명", this.dsFS_INVTXM, i, this.grdFS_INVTXM, "INVT_NAME");
        		}
        		
        		if (!this.fnc_IsDate(this.dsFS_INVTXM.getColumn(i, "INVT_STDT"))) {
        			return this.fnc_CheckPostAction("TMM072", "조사시작기간", this.dsFS_INVTXM, i, this.grdFS_INVTXM, "INVT_STDT");
        		}

        		if (!this.fnc_IsDate(this.dsFS_INVTXM.getColumn(i, "INVT_ENDT"))) {		
        			return this.fnc_CheckPostAction("TMM072", "조사종료기간", this.dsFS_INVTXM, i, this.grdFS_INVTXM, "INVT_ENDT");
        		}

        		if (this.fnc_Trim(this.dsFS_INVTXM.getColumn(i, "INVT_STDT")) > this.fnc_Trim(this.dsFS_INVTXM.getColumn(i, "INVT_ENDT"))) {
        			return this.fnc_SearchCheckPostAction("TMM042", "변동시작일,변동종료일", this.dsFS_INVTXM, i, this.grdFS_INVTXM, "INVT_ENDT");
        		}

        	}

        	return true;
        	
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " INVT_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRINVT_DAT1.value)); //조사기준일자1
        		sReturnString += " INVT_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRINVT_DAT2.value)); //조사기준일자2
        	
        	} else if ( sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " INVT_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRINVT_DAT1.value));
        		sReturnString += " INVT_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRINVT_DAT2.value));
        		
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

        	    this.fnc_Information(this.stInformation, this.dsFS_INVTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_INVTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdFS_INVTXM.setCellPos(1);

        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, this.dsFS_INVTXM.rowcount , "SAVE");
        		this.fnc_Message("TMM103");

        	} 
        	
        }

        /*-------------------------------------+
         |  수정 시 Key Field Disibled 처리   |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (e.newrow == -1) return;

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		
        		this.grdFS_INVTXM.setCellProperty("body", 0, "edittype", "date");
        		
        	} else {
        	
        		this.grdFS_INVTXM.setCellProperty("body", 0, "edittype", "none");
        		
        	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_INVTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdFS_INVTXM.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.grdFS_INVTXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.calSHRINVT_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRINVT_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.title01.addEventHandler("onclick", this.title01_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSME0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
