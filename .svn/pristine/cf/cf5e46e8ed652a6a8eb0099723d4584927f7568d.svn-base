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
                this.set_name("HRME0020");
                this.set_titletext("인사발령확정");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">COMX_YSNO</Col><Col id=\"DSNAME\">dsCOMX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOXM", this);
            obj._setContents("<ColumnInfo><Column id=\"APNT_HOCT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_SBJT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APAL_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFR_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFR_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFR_EMNM\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"APPR_DOCN\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"APPS_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"MIGR_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "90", "21", null, null, this);
            obj.set_text("발령기준일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRDRFT_STDT", "absolute", "109", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "214", "71", "14", "21", null, null, this);
            obj.set_text("~");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRDRFT_ENDT", "absolute", "229", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_value("TODAY");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("stInformation", "absolute", "8", "107", "248", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_APPOXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_binddataset("dsHR_APPOXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"확정여부\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"발령호수\"/><Cell col=\"2\" displaytype=\"text\" text=\"발령기준일\"/><Cell col=\"3\" displaytype=\"text\" text=\"발령제목\"/><Cell col=\"4\" displaytype=\"text\" text=\"소속\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"사원번호\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" displaytype=\"text\" style=\"backgroundimage: ;\" text=\"데이터이관\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"expr:MIGR_YSNO == &quot;1&quot; ? &quot;none&quot; : &quot;checkbox&quot;\" style=\"align:center;\" text=\"bind:APAL_YSNO\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center;font:underline 9 굴림;cursor:hand;\" text=\"bind:APNT_HOCT\" mask=\"####-####\" editlimit=\"10\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:DRFT_DATE\" editlimit=\"8\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background: ;\" text=\"bind:APNT_SBJT\" editlimit=\"200\" editimemode=\"hangul\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:SECT_NAME\" editimemode=\"native\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:DRFR_EMNR\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:DRFR_EMNM\" editimemode=\"hangul\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"8\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:MIGR_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "358", "71", "76", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("발령제목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRAPNT_SBJT", "absolute", "426", "71", "400", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgWORK_GUBN", "absolute", "855", "71", "76", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("확정여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPAL_YSNO", "absolute", "923", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("dropdown");
            obj.set_index("-1");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("인사발령확정");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("17");
            obj.set_text("홈 > 인사관리 > 인사관리 > 인사발령확정");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("22");
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

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("26");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "101", "61", "8", "41", null, null, this);
            obj.set_taborder("29");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "329", "61", "40", "41", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", null, "107", "218", "21", "25", null, this);
            obj.set_taborder("32");
            obj.set_text("이관된 데이터는 수정 할 수 없습니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인사발령확정");
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
        this.addIncludeScript("HRME0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRME0020.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRME0020 인사발령확정
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.14     고민주     Initial Created.
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
        this.sBUTTONLIST  = "TTFFTTTF";
        this.sPACKAGENAME = "HRME0020";
        this.sDEPT_CODE;
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
        	this.calSHRDRFT_STDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4)+ "0101");
        	this.calSHRDRFT_ENDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.calSHRDRFT_STDT.setFocus();

        	switch (this.sUSERLAVEL) {
        		case "1" : 	//전체
        			this.sDEPT_CODE = "";
        			break;

        		case "2" :	//부문
        			this.sDEPT_CODE = application.GBL_STGNCD;
        			break;

        		case "3" :	//부실
         			this.sDEPT_CODE = application.GBL_SECTCD;
        			break;

        		case "4" :	//부서
        			this.sDEPT_CODE = application.GBL_DEPTCD;
        			break;

        		case "5" :	//개인
        			this.sDEPT_CODE = application.GBL_DEPTCD;
        			break;
        		default : break;
        	}

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

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
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

        	var iRowCount = 0;

        	var iRowPos = 0;

        	for(var i = 0 ; i < this.dsHR_APPOXM.getRowCount() ; i++){
        		if(this.dsHR_APPOXM.getRowType(i) == Dataset.ROWTYPE_UPDATE){
        			if(iRowPos == 0) iRowPos = i;
        			iRowCount++;
        		}
        	}

        	if (iRowCount == 1) {
        		// 한 건 확정 및 취소
        		var sQuestionText = this.dsHR_APPOXM.getColumn( iRowPos, "APNT_SBJT");

        		if ( this.dsHR_APPOXM.getColumn( iRowPos ,"APAL_YSNO") == "1") {
        			if(!this.fnc_Message("HRM031", sQuestionText)) return;
        		} else {
        			if(!this.fnc_Message("HRM032", sQuestionText)) return;
        		}
        	} else if (iRowCount > 1) {
        		if(!this.fnc_Message("HRM033", iRowCount)) return;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsHR_APPOXM=dsHR_APPOXM:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRDRFT_STDT.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "발령기준일", this.calSHRDRFT_STDT);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRDRFT_ENDT.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "발령기준일", this.calSHRDRFT_ENDT);
        	}

        	if (this.fnc_Trim(this.calSHRDRFT_STDT.value) > this.fnc_Trim(this.calSHRDRFT_ENDT.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "발령시작일,발령종료일", this.calSHRDRFT_STDT);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
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
        		sReturnString += " DRFT_STDT=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRDRFT_STDT.value));
        		sReturnString += " DRFT_ENDT=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRDRFT_ENDT.value));
         		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.sDEPT_CODE); //부서코드
         		sReturnString += " APNT_SBJT=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRAPNT_SBJT.value));
         		sReturnString += " APAL_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPAL_YSNO.value));

        	} else if (sKind == "SAVE00") {
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

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsHR_APPOXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_APPOXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdHR_APPOXM.setFocus();

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.grdHR_APPOXM.setFocus();

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRAPAL_YSNO,dsCOMX_YSNO,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*-----------------------------------+
        |  발령상세 팝업 호출 함수  |
        	@parameter : code
        	@return :
        +------------------------------------*/
        this.fn_DetailView = function (obj,e) {

        	if (e.cell == this.fnc_GridColumnIndex(this.grdHR_APPOXM, "APNT_HOCT")) {

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

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.calSHRDRFT_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRDRFT_ENDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdHR_APPOXM.addEventHandler("oncellclick", this.fn_DetailView, this);
            this.grdHR_APPOXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.edtSHRAPNT_SBJT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPAL_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRME0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
