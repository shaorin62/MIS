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
                this.set_name("WFMD0010");
                this.set_titletext("차량등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_VEHCBS", this);
            obj._setContents("<ColumnInfo><Column id=\"VEHC_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"VEHC_NUMB\" type=\"STRING\" size=\"20\"/><Column id=\"ACQS_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"EXPR_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"VEHC_AMOT\" type=\"INT\" size=\"15\"/><Column id=\"ACQS_TAXX\" type=\"INT\" size=\"15\"/><Column id=\"REGR_TAXX\" type=\"INT\" size=\"15\"/><Column id=\"ACQS_AMOT\" type=\"INT\" size=\"15\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"MGMT_DTCD\" type=\"STRING\" size=\"10\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"MGMT_USID\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCW_VEHCBS1", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("차량등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("차량번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCW_VEHCBS", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsCW_VEHCBS");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"97\"/><Column size=\"102\"/><Column size=\"99\"/><Column size=\"116\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"106\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"차종\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"차량번호\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"취득일\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"사용종료일\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_edit\" text=\"차량금액\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"취득세\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"등록세\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"취득금액\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"관리부서\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"사용자\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:VEHC_NAME\" editdisplay=\"edit\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:VEHC_NUMB\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:ACQS_DATE\" editdisplay=\"display\" combodisplayrowcount=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:EXPR_DATE\" editdisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:VEHC_AMOT\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"5\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ACQS_TAXX\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"6\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:REGR_TAXX\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"7\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ACQS_AMOT\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DEPT_NAME\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"normal\" text=\"bind:EMPL_NAME\" editlimit=\"-1\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRVEHC_NUMB", "absolute", "97", "71", "130", "21", null, null, this);
            obj.set_enable("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRVEHC_NUMB", "absolute", "229", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "250", "61", "40", "41", null, null, this);
            obj.set_taborder("114");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("차량등록");

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
        this.addIncludeScript("WFMD0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMD0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	WFMD0010 차량등록
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.19		김용만		Initial Created.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMD0010"; //해당 Form에서 사용 할 Package 명 
        this.sKeyValue = new Array();

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
        	
        	
        	this.edtSHRVEHC_NUMB.setFocus();
        	//검색조건 포커스

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
        	this.fnc_DatasetClear('dsCW_VEHCBS');

        	/* 차량관리 리스트 조회 */
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_VEHCBS=dsCW_VEHCBS";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	
        	/* 차량관리 키값  조회 */
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_VEHCBS1=dsCW_VEHCBS1";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	
        	this.grdCW_VEHCBS.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsCW_VEHCBS.insertRow(this.dsCW_VEHCBS.rowposition + 1);
        	this.dsCW_VEHCBS.set_rowposition(iRow);
        	
        	this.grdCW_VEHCBS.setCellPos(this.fnc_GridColumnIndex(this.grdCW_VEHCBS, 0));
        	this.grdCW_VEHCBS.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsCW_VEHCBS.deleteRow(this.dsCW_VEHCBS.rowposition);
        	this.grdCW_VEHCBS.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsCW_VEHCBS");
        	this.fnc_DataSetCancel("dsCW_VEHCBS1");
        	this.grdCW_VEHCBS.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsCW_VEHCBS.getColumn(this.dsCW_VEHCBS.rowposition,"VEHC_NUMB");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsCW_VEHCBS=dsCW_VEHCBS:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCW_VEHCBS.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_VEHCBS", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_VEHCBS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsCW_VEHCBS.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	var sQuestionText = "차량번호:" + this.fnc_Trim(this.dsCW_VEHCBS.getColumn(this.dsCW_VEHCBS.rowposition, "VEHC_NUMB"));
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsCW_VEHCBS")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var rowCnt = this.dsCW_VEHCBS.getRowCount();
        	var rowCntKey = this.dsCW_VEHCBS1.getRowCount();
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < rowCnt; i++) {
        		if (this.fnc_ToUpper(this.dsCW_VEHCBS.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_VEHCBS.getColumn(i, 'VEHC_NUMB'))) < 1) {
        			this.grdCW_VEHCBS.setCellPos(this.fnc_GridColumnIndex(this.grdCW_VEHCBS, "VEHC_NUMB"));
        			this.grdCW_VEHCBS.setFocus();
        			return this.fnc_CheckPostAction("TMM072", "차량번호", this.dsCW_VEHCBS, i, this.grdCW_VEHCBS, "VEHC_NUMB");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_VEHCBS.getColumn(i, 'VEHC_NAME'))) < 1) {
        			this.grdCW_VEHCBS.setCellPos(this.fnc_GridColumnIndex(this.grdCW_VEHCBS, "VEHC_NAME"));
        			this.grdCW_VEHCBS.setFocus();
        			return this.fnc_CheckPostAction("TMM072", "차종", this.dsCW_VEHCBS, i, this.grdCW_VEHCBS, "VEHC_NAME");
        		}
        		if ( this.fnc_Trim(this.dsCW_VEHCBS.getColumn(i, 'ACQS_DATE')) > this.fnc_Trim(this.dsCW_VEHCBS.getColumn(i, 'EXPR_DATE')) ) {
        			this.grdCW_VEHCBS.setCellPos(this.fnc_GridColumnIndex(this.grdCW_VEHCBS, "ACQS_DATE"));
        			this.grdCW_VEHCBS.setFocus();
        			return this.fnc_SearchCheckPostAction("TMM042", "취득일,사용종료일", this.dsAT_GOOUTX, i, this.grdAT_GOOUTX, "GOOE_HOUR");
        		}
        		
        	}
        	
        	for(var i=0;i< rowCnt; i++){
        		for(var j=0;j<rowCntKey; j++){
        			if( this.dsCW_VEHCBS.getColumn(i,"VEHC_NUMB") == this.dsCW_VEHCBS1.getColumn(j,"VEHC_NUMB") && this.dsCW_VEHCBS.getRowType(i) != "1" && this.dsCW_VEHCBS.getRowType(i) != "4" ){
        			
        				this.fnc_Message("TMM077",this.dsCW_VEHCBS.getColumn(i,"VEHC_NUMB"));
        				this.grdCW_VEHCBS.setCellPos(this.fnc_GridColumnIndex(this.grdCW_VEHCBS, "VEHC_NUMB"));
        				this.grdCW_VEHCBS.setFocus();
        				return false;
        			}
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
        		sReturnString += " VEHC_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRVEHC_NUMB.value)); 
        		
        	} 
        	
        	// 조회 키값 Argument 생성
        	if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);

        	} 
        	
        	// 저장 Argument 생성
        	if (sKind == 'SAVE00') {
        	
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
        		this.fnc_Information(this.stInformation, this.dsCW_VEHCBS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCW_VEHCBS.getCaseCount("dataset.getRowLevel(currow)==0"));
        						
        		if( this.sKeyValue[0] != ""){
        			var irow = this.dsCW_VEHCBS.findRow("VEHC_NUMB",this.sKeyValue[0]);
        			this.sKeyValue[0] = "";
        			if(irow < 0) irow = 0;
        			this.dsCW_VEHCBS.set_rowposition(irow);
        		}
        						
        						
        	} 
        	else if (sMethodName == 'SEARCH01') {
        	
        	}
        	else if (sMethodName == 'SAVE00') {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_KeyFieldDisible(this.dsCW_VEHCBS);
        		this.fn_Search();
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

        	// 조회조건 - 차량정보조회(Popup)
        	if ((obj.name == "imgHelpSHRVEHC_NUMB") ) {
        	
        		arrParam[0] = "WFM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRVEHC_NUMB.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRVEHC_NUMB";
        		arrParam[5] = "edtSHRVEHC_NUMB";
        		arrParam[6] = "0";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 그리드 - 부서정보조회(Popup)
        	if (obj.name == "grdCW_VEHCBS") {
        		if (obj.getCellProperty("body", obj.currentcell, "text") == "bind:DEPT_NAME") {
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = "DEPT_NAME";
        		arrParam[3] = "N";
        		arrParam[4] = "grdCW_VEHCBS";
        		arrParam[5] = "MGMT_DTCD,DEPT_NAME";
        		arrParam[6] = "0,1";
        		arrParam[7] = sFromDs;
        		arrParam[8] = sOldValue;
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        	
        	// 그리드 - 사원정보조회(Popup)
        	if (obj.name == "grdCW_VEHCBS") {
        		if (sColumnID == "EMPL_NAME" || obj.getCellProperty("body", obj.currentcell, "text") == "bind:EMPL_NAME") {
        			
        			arrParam[0] = "HRM0051"; 
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdCW_VEHCBS";
        			arrParam[5] = "MGMT_USID,EMPL_NAME";  
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}

        }

        this.dsCW_VEHCBS_oncolumnchanged = function(obj,e)
        {
        	 
        	if (e.columnid == "EMPL_NAME" || e.columnid == "DEPT_NAME") {
        		this.fn_HelpDialoge(this.grdCW_VEHCBS, "YES", e.oldvalue, e.columnid);
        	}

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_VEHCBS.addEventHandler("oncolumnchanged", this.dsCW_VEHCBS_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdCW_VEHCBS.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.edtSHRVEHC_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRVEHC_NUMB.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRVEHC_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("WFMD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
