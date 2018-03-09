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
                this.set_name("WFMB0010");
                this.set_titletext("학자금기준등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWF_SCEXXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SCEX_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_NAME\" type=\"STRING\" size=\"50\" prop=\"default\"/><Column id=\"STAT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDD_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"LIMT_AMOT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"YLIM_AMOT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"PERD_CODE\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"LIMT_CONT\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"200\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SCEX_CODE</Col><Col id=\"DSNAME\">dsSCEX_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"DSNAME\">dsPERD_CODE</Col><Col id=\"CODEID\">PERD_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("9");
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
            obj.set_taborder("4");
            obj.set_text("학자금기준등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("5");
            obj.set_text("복리후생 > 학자금기준등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "108", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("11");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "90", "61", "8", "41", null, null, this);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("14");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWF_SCEXXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("3");
            obj.set_binddataset("dsWF_SCEXXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"244\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"학자금구분\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"시작일자\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"종료일자\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"지급주기\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"한도금액\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"년한도금액\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"총지급횟수\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:SCEX_CODE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:STAT_DATE\" calendardisplaynulltype=\"default\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:ENDD_DATE\" calendardisplaynulltype=\"default\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:PERD_CODE\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:LIMT_AMOT\" mask=\"#,##0\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:YLIM_AMOT\" mask=\"#,##0\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" style=\"align: ;\" text=\"bind:LIMT_CONT\" editlimit=\"0\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_200X\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("edtSHRSTAT_DATE", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("학자금기준등록");

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
        this.addIncludeScript("WFMB0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMB0010.xfdl", function() {
         /***************************************************************************************************
         * # Program : 학자금기준등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.02		jun			Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMB0010";

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
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.edtSHRSTAT_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        	this.edtSHRSTAT_DATE.setFocus();
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
        	this.fnc_DatasetClear('dsWF_SCEXXM');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsWF_SCEXXM=dsWF_SCEXXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdWF_SCEXXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsWF_SCEXXM.insertRow(this.dsWF_SCEXXM.rowposition + 1);
        	this.dsWF_SCEXXM.set_rowposition(iRow);
        	this.dsWF_SCEXXM.setColumn(iRow, "STAT_DATE", this.fnc_GetServerDateTime("DATE"));
        	this.dsWF_SCEXXM.setColumn(iRow, "ENDD_DATE", "99991231");
        	this.grdWF_SCEXXM.setCellPos(this.fnc_GridColumnIndex(this.grdWF_SCEXXM, 0));
        	this.grdWF_SCEXXM.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsWF_SCEXXM.deleteRow(this.dsWF_SCEXXM.rowposition);
        	this.grdWF_SCEXXM.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsWF_SCEXXM");
        	this.grdWF_SCEXXM.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsWF_SCEXXM=dsWF_SCEXXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdWF_SCEXXM.setFocus();
        	
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
         |  10.화면 Close 時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsWF_SCEXXM", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);
        	
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
        	
        	if (this.fnc_DatasetChangeCheck("dsWF_SCEXXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsWF_SCEXXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsWF_SCEXXM.getColumn(this.dsWF_SCEXXM.rowposition, "SCEX_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsWF_SCEXXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsWF_SCEXXM.getRowCount(); i++) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXM.getColumn(i, "SCEX_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "학자금구분", this.dsWF_SCEXXM, i, this.grdWF_SCEXXM, 'SCEX_CODE');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXM.getColumn(i, "STAT_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시작일자", this.dsWF_SCEXXM, i, this.grdWF_SCEXXM, 'STAT_DATE');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXM.getColumn(i, "ENDD_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "종료일자", this.dsWF_SCEXXM, i, this.grdWF_SCEXXM, 'ENDD_DATE');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXM.getColumn(i, "LIMT_AMOT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "한도금액", this.dsWF_SCEXXM, i, this.grdWF_SCEXXM, 'LIMT_AMOT');
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXM.getColumn(i, "YLIM_AMOT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "년한도금액", this.dsWF_SCEXXM, i, this.grdWF_SCEXXM, 'YLIM_AMOT');
        		}
        		
        		if (this.dsWF_SCEXXM.getColumn(i, "YLIM_AMOT") - this.dsWF_SCEXXM.getColumn(i, "LIMT_AMOT") < 0)
        		{
        			return this.fnc_CheckPostAction("WFM008", "", this.dsWF_SCEXXM, i, this.grdWF_SCEXXM, "YLIM_AMOT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsWF_SCEXXM.getColumn(i, "LIMT_CONT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "총지급횟수", this.dsWF_SCEXXM, i, this.grdWF_SCEXXM, 'LIMT_CONT');
        		}
        	
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STAT_DATE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRSTAT_DATE.value));

        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		
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
        		this.fnc_Information(this.stInformation, this.dsWF_SCEXXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsWF_SCEXXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsWF_SCEXXM);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdWF_SCEXXM,dsSCEX_CODE,SCEX_CODE";
        		arrParam[1] = "GRID,grdWF_SCEXXM,dsPERD_CODE,PERD_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdWF_SCEXXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdWF_SCEXXM, "SCEX_CODE"), "edittype", "combo");
        		this.grdWF_SCEXXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdWF_SCEXXM, "STAT_DATE"), "edittype", "date");
        	} else {
        		this.grdWF_SCEXXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdWF_SCEXXM, "SCEX_CODE"), "edittype", "none");
        		this.grdWF_SCEXXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdWF_SCEXXM, "STAT_DATE"), "edittype", "none");
        	}

        }

        /*--------------------------------------+
         |  조회조건 '메시지명' 키 입력시   |
         +--------------------------------------*/
         /*
        this.edtSHRMSGE_CNTT_onkeydown = function(obj:Edit, e:nexacro.KeyEventInfo) {
        	
        	if (e.keycode == 13) this.fn_Search();
        	
        }
        */
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsWF_SCEXXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdWF_SCEXXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("WFMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
