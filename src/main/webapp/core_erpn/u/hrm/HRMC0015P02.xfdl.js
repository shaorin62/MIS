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
                this.set_name("HRMC0015P02");
                this.set_titletext("사원명부(조건검색)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,850,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHR_CNQRXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SRAL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SECH_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_200X\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_CNQRXD", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SRAL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SECH_CLID\" type=\"STRING\" size=\"256\"/><Column id=\"SECH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdHR_CNQRXM", "absolute", "14", "35", null, null, "298", "15", this);
            obj.set_selecttype("cell");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_CNQRXM");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"조회내용\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" style=\"align:left;\" text=\"bind:SECH_CNTT\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_200X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_CNQRXD", "absolute", null, "35", "263", null, "15", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("11");
            obj.set_binddataset("dsHR_CNQRXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"40\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"조회내용\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:SECH_NAME\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "533", "0", "110", "8", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "533", "31", "110", "4", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "124", "15", "277", null, null, this);
            obj.set_taborder("16");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "835", "132", "15", "277", null, null, this);
            obj.set_taborder("17");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "429", "819", "110", "15", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "552", "220", "20", "101", null, null, this);
            obj.set_taborder("19");
            obj.set_text("w20");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 850, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사원명부(조건검색)");
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
        this.addIncludeScript("HRMC0015P02.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMC0015P02.xfdl", function() {
         /***************************************************************************************************
         * # Program : 사원명부(조건검색)
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.06.24		chg			Initial Created.
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
         *****************************************************************************INBUS*CO*KR************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTFTTF";
        this.sPACKAGENAME = "HRMC0015"; 

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 this.sUSERAUTH     = "";
        	 this.sFORMCAPTION  = "";
        	 this.sFORMLOCATION = "";
        	 this.sUSERLAVEL    = "";
        } else {
        	 this.sUSERAUTH     = this.opener.sUSERAUTH;
        	 this.sFORMCAPTION  = this.opener.sFORMCAPTION;
        	 this.sFORMLOCATION = this.opener.sFORMLOCATION;
        	 this.sUSERLAVEL    = this.opener.sUSERLAVEL;
        }

        this.gn_rowinsert = true;

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
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
        	this.fnc_DatasetClear("dsHR_CNQRXM");

        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_CNQRXM=dsHR_CNQRXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_CNQRXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	if(!this.gn_rowinsert){
        		this.alert("이미 입력된 데이터가 있습니다. 저장후 입력하세요.");
        		return;
        	}
        	
        	this.gn_rowinsert = false;
        	
        	var iRow = this.dsHR_CNQRXM.insertRow(this.dsHR_CNQRXM.rowposition + 1);
        	var sSRAL_NUMB = this.fnc_GetSequence("HR_CNQRXM","SRAL_NUMB",application.GBL_EMPLNO,"");
        	this.dsHR_CNQRXM.setColumn(iRow, "SRAL_NUMB",sSRAL_NUMB); 	
        	this.dsHR_CNQRXM.setColumn(iRow, "EMPL_NUMB", application.GBL_EMPLNO );	
        	
        	this.dsHR_CNQRXM.set_rowposition(iRow);
        	this.grdHR_CNQRXM.setCellPos(this.fnc_GridColumnIndex(this.grdHR_CNQRXM, 0));
        	this.grdHR_CNQRXM.setFocus();
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsHR_CNQRXM.deleteRow(this.dsHR_CNQRXM.rowposition);
        	this.grdHR_CNQRXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsHR_CNQRXM");
        	this.grdHR_CNQRXM.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsHR_CNQRXM=dsHR_CNQRXM:U dsHR_CNQRXD=dsHR_CNQRXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_CNQRXM.setFocus();
        	
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
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_CNQRXM", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_CNQRXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsHR_CNQRXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsHR_CNQRXM.getColumn(this.dsHR_CNQRXM.rowposition, "SECH_CNTT");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_CNQRXM,dsHR_CNQRXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsHR_CNQRXM.getRowCount(); i++) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_CNQRXM.getColumn(i, "SECH_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조회내용", this.dsHR_CNQRXM, i, this.grdHR_CNQRXM, "SECH_CNTT");
        		}
        	
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH02") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.fnc_Trim(application.GBL_EMPLNO));

        	} else if (sKind == "SEARCH03") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.fnc_Trim(application.GBL_EMPLNO));
        		sReturnString += " SRAL_NUMB=" 		 + this.fnc_Quote(this.dsHR_CNQRXM.getColumn(this.dsHR_CNQRXM.rowposition, "SRAL_NUMB"));
        				
        	}else if (sKind == "SAVE00") {
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
        	
        	if (sMethodName == "SEARCH02") {
        	
        		//입력은 한번한 하게 예외처리
        		this.gn_rowinsert = true;
        	
        	}else if (sMethodName == "SEARCH03") {
        		if(this.dsHR_CNQRXD.rowcount > 0 
        				&& this.dsHR_CNQRXD.getColumn(0,"SRAL_NUMB") == ""){

        			this.dsHR_CNQRXD.set_updatecontrol(false);
        			for(var i = 0 ; i < this.dsHR_CNQRXD.rowcount ; i++){
        				this.dsHR_CNQRXD.setColumn(i, "SRAL_NUMB", this.dsHR_CNQRXM.getColumn(this.dsHR_CNQRXM.rowposition,"SRAL_NUMB"));
        			}
        			this.dsHR_CNQRXD.set_updatecontrol(true);

        		}
        	} else if (sMethodName == "SAVE00") {
        		
        		this.gn_rowinsert = true; 
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	this.fnc_DatasetClear("dsHR_CNQRXD");
        	if (this.dsHR_CNQRXM.getRowCount() < 1) return;
        	
        	var sMethodName = "SEARCH03";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_CNQRXD=dsHR_CNQRXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	

        }

        this.grdHR_CNQRXD_onheadclick = function(obj,e)
        {
        	
        	if (obj.getCellProperty("Head", e.cell, "edittype") == "checkbox") {
        		obj.set_enableredraw(false);//바디컬럼을 일괄 적용할때 한개씩 변경하기 때문에 느림
        		this.fn_GridSelChk(obj, "USEX_YSNO", e.cell);	//바디컬럼 체크박스에 바인딩된 ds 컬럼명
        		obj.set_enableredraw(true);
        	} 	
        }

        /*------------------------+
         |  Grid 해드 체크박스처리  |
         +------------------------*/
        this.fn_GridSelChk = function (objGrd,chk_col,nCell) {

        	var objDs = eval("this."+objGrd.binddataset);

        	if (objGrd.getCellProperty("Head", nCell, "text") == 1) {
        		objGrd.setCellProperty("Head", nCell, "text", "0");
        		this.fn_SetGrdChk(0, objDs, chk_col);
        	} else {
        		objGrd.setCellProperty("head", nCell, "text", "1");
        		this.fn_SetGrdChk(1, objDs, chk_col);
        	}
        }

        /*------------------------+
         |  Grid 바디 체크박스 일괄처리  |
         +------------------------*/
        this.fn_SetGrdChk = function (chk_val,objDs,chk_col) {

        	var maxrow= objDs.rowcount;
        	
        	objDs.set_enableevent(false);
        	for (var i = 0; i < maxrow; i++) {
        		objDs.setColumn(i, chk_col, chk_val);
        	}
        	objDs.set_enableevent(true);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_CNQRXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdHR_CNQRXD.addEventHandler("onheadclick", this.grdHR_CNQRXD_onheadclick, this);

        };

        this.loadIncludeScript("HRMC0015P02.xfdl");
        this.loadPreloadList();
       
    };
}
)();
