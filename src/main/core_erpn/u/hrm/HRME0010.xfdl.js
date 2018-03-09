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
                this.set_name("HRME0010");
                this.set_titletext("인사발령관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHR_APPOXM", this);
            obj._setContents("<ColumnInfo><Column id=\"APNT_HOCT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_SBJT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APAL_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFR_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFR_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DOCN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFR_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SMUL_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"PROP_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "100", "21", null, null, this);
            obj.set_text("발령기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "221", "71", "68", "21", null, null, this);
            obj.set_text("발령제목");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "248", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_APPOXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_APPOXM");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"290\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"발령호수\"/><Cell col=\"1\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"발령기준일\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"발령제목\" editautoselect=\"true\"/><Cell col=\"3\" displaytype=\"text\" text=\"승인여부\"/><Cell col=\"4\" displaytype=\"text\" text=\"소속\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"사원번호\"/><Cell col=\"7\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"성명\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:center;font:underline 9 굴림;cursor:hand;\" text=\"bind:APNT_HOCT\" mask=\"####-####\" editlimit=\"10\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" style=\"align:center;background: ;\" text=\"bind:DRFT_DATE\" editlimit=\"8\" editautoselect=\"true\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:APNT_SBJT\" editlimit=\"200\" editimemode=\"hangul\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;\" text=\"bind:APAL_YSNO\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\" editimemode=\"native\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:DRFR_EMNR\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"normal\" text=\"bind:DRFR_EMNM\" editimemode=\"hangul\" editautoselect=\"true\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRAPNT_SBJT", "absolute", "289", "71", "460", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRDRFT_YEAR", "absolute", "122", "71", "70", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("인사발령관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 인사관리 > 발령관리 > 인사발령관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 10");
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

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("18");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
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

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("23");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "114", "61", "8", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "192", "61", "40", "41", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인사발령관리");
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
        this.addIncludeScript("HRME0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRME0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRME0010 인사발령관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.11     고민주     Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTTF";
        this.sPACKAGENAME = "HRME0010";

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
        	//검색조건 포커스
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.medSHRDRFT_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4));
        	this.medSHRDRFT_YEAR.setFocus();

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
        	this.fnc_DatasetClear("dsHR_APPOXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_APPOXM=dsHR_APPOXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_APPOXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsHR_APPOXM.insertRow(this.dsHR_APPOXM.rowposition + 1);
        	this.dsHR_APPOXM.set_rowposition(iRow);
        	
        	this.dsHR_APPOXM.setColumn(iRow, "DRFT_DATE", this.fnc_GetServerDateTime("DATE")); //작성일
        	this.dsHR_APPOXM.setColumn(iRow, "APPS_CODE", "0");	//결재상태코드
        	this.dsHR_APPOXM.setColumn(iRow, "SECT_NAME", application.GBL_SECTNM);	//소속
        	this.dsHR_APPOXM.setColumn(iRow, "DEPT_NAME", application.GBL_DEPTNM);	//작성부서명
        	this.dsHR_APPOXM.setColumn(iRow, "DRFR_DTCD", application.GBL_DEPTCD);	//작성부서코드
        	this.dsHR_APPOXM.setColumn(iRow, "DRFR_EMNR", application.GBL_EMPLNO);	//작성사번
        	this.dsHR_APPOXM.setColumn(iRow, "DRFR_EMNM", application.GBL_USERNM);	//작성성명
        	this.dsHR_APPOXM.setColumn(iRow, "APPK_CODE", "1");	//발령종류
        	this.fnc_GridSetCellFocus(this.grdHR_APPOXM, "APNT_SBJT");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsHR_APPOXM.deleteRow(this.dsHR_APPOXM.rowposition);
        	this.grdHR_APPOXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsHR_APPOXM");
        	this.grdHR_APPOXM.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsHR_APPOXM=dsHR_APPOXM:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_APPOXM.setFocus();

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
        	
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_APPOXM", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_APPOXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRDRFT_YEAR.value)) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "발령기준년도", this.medSHRDRFT_YEAR);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsHR_APPOXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	if (this.fnc_Trim(this.dsHR_APPOXM.getColumn(this.dsHR_APPOXM.rowposition, "SMUL_SEQN")) != "") {
        		this.fnc_Message("HRM076");
        		return false;
        	}
        	
        	if (this.fnc_Trim(this.dsHR_APPOXM.getColumn(this.dsHR_APPOXM.rowposition, "PROP_YSNO")) == "1") {
        		this.fnc_Message("HRM077");
        		return false;
        	}
        	
        	var sQuestionText = "발령호수:" + this.fnc_Trim(this.dsHR_APPOXM.getColumn(this.dsHR_APPOXM.rowposition, "APNT_HOCT"));
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_APPOXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DRFT_YEAR=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRDRFT_YEAR.value)); 
        		sReturnString += " APNT_SBJT=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRAPNT_SBJT.value)); 
        	
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
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
        	
        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsHR_APPOXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_APPOXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_KeyFieldDisible(this.dsHR_APPOXM);
        		this.fn_Search();
        	} 
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdHR_APPOXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_APPOXM, "DRFT_DATE"), "edittype", "date");
        	} else {
        		this.grdHR_APPOXM.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_APPOXM, "DRFT_DATE"), "edittype", "none");
        	} 
        }

        
        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if (obj.name == "grdHR_APPOXM") {
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "DRFR_EMNM") {
        			arrParam[0] = "HRM0001";
        			arrParam[1] = "";
        			arrParam[2] = "DRFR_EMNM";
        			arrParam[3] = "N";
        			arrParam[4] = "grdHR_APPOXM";
        			arrParam[5] = "DRFR_EMNR,DRFR_EMNM,DRFR_DTCD,DEPT_NAME,SECT_NAME";
        			arrParam[6] = "0,1,2,3,5";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		}
        		
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        /*-----------------------------------+
        |  발령상세 팝업 호출 함수  |
        	@parameter : code
        	@return :
        +------------------------------------*/   
        this.fn_DetailView = function (obj,e) {

        	if (e.cell == this.fnc_GridColumnIndex(this.grdHR_APPOXM, "APNT_HOCT")) {
        		//자료가 없으면 종료
        		if (this.dsHR_APPOXM.rowcount < 1) return;
        		
        		//노멀이 아닌경우 저장 후 진행
        		if (this.fnc_ToUpper(this.dsHR_APPOXM.getRowType(this.dsHR_APPOXM.rowposition)) != Dataset.ROWTYPE_NORMAL) {
        			this.fnc_Message("TMM015", "발령상세내역을 등록");      
        			return;				 
        		}
          
        		var sText = this.fnc_Trim(this.dsHR_APPOXM.getColumn(e.row, "APNT_HOCT"));   
        		
        		var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        			sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        			sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        			sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        			sOpenStyle += ",width=1051";       //현재 반응 없음
        			sOpenStyle += ",height=834";      //현재 반응 없음
        			sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        			sOpenStyle += ",titletext=인사발령상세";      //Form Title Bar Visible 여부
        			sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        			sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부

        		this.fnc_OpenPopup("HRME0010P01", "hrm::HRME0010P01.xfdl", {sAPNT_HOCT:sText}, sOpenStyle);

        	}
        }

        this.dsHR_APPOXM_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "DRFR_EMNM") this.fn_HelpDialoge(this.grdHR_APPOXM, "YES" ,e.oldvalue, e.columnid);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_APPOXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsHR_APPOXM.addEventHandler("oncolumnchanged", this.dsHR_APPOXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_OnClick, this);
            this.grdHR_APPOXM.addEventHandler("oncellclick", this.fn_DetailView, this);
            this.grdHR_APPOXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.edtSHRAPNT_SBJT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSHRDRFT_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRME0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
