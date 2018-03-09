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
                this.set_name("HRMA0010");
                this.set_titletext("발령코드설정");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsDTCH_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsPYTC_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsCLPC_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsOFPC_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsDURC_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsJOCH_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsNMCG_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsAJDC_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsDTDC_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsPSCH_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsEDCH_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsHDTC_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsCIBP_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">AFDC_YSNO</Col><Col id=\"DSNAME\">dsRETC_YSNO</Col><Col id=\"HEADFLAG\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOBS", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"APDN_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"DTCH_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PYTC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"CLPC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"OFPC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DURC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"JOCH_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"NMCG_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"AJDC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DTDC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PSCH_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"EDCH_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"HDTC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"CIBP_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"RETC_YSNO\" size=\"1\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdHR_APPOBS", "absolute", "8", "60", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_APPOBS");
            obj.set_taborder("9");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_autosizebandtype("body");
            obj.set_tabstop("false");
            obj.set_wheelscrollrow("1");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"92\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"발령구분\"/><Cell col=\"1\" style=\"backgroundimage: ;\" text=\"부서\"/><Cell col=\"2\" style=\"backgroundimage: ;\" text=\"급여형태\"/><Cell col=\"3\" style=\"backgroundimage: ;\" text=\"직급\"/><Cell col=\"4\" style=\"backgroundimage: ;\" text=\"직위\"/><Cell col=\"5\" style=\"backgroundimage: ;\" text=\"직책\"/><Cell col=\"6\" style=\"backgroundimage: ;\" text=\"직무\"/><Cell col=\"7\" style=\"backgroundimage: ;\" text=\"호봉\"/><Cell col=\"8\" style=\"backgroundimage: ;\" text=\"겸직\"/><Cell col=\"9\" style=\"backgroundimage: ;\" text=\"파견부서\"/><Cell col=\"10\" style=\"backgroundimage: ;\" text=\"파견지\"/><Cell col=\"11\" style=\"backgroundimage: ;\" text=\"종료일\"/><Cell col=\"12\" style=\"backgroundimage: ;\" text=\"부서장\"/><Cell col=\"13\" style=\"backgroundimage: ;\" text=\"직위연차\"/><Cell col=\"14\" style=\"backgroundimage: ;\" text=\"퇴직사유\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:APDN_NAME\" editlimit=\"4\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTCH_YSNO\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PYTC_YSNO\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CLPC_YSNO\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:OFPC_YSNO\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DURC_YSNO\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:JOCH_YSNO\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:NMCG_YSNO\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:AJDC_YSNO\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTDC_YSNO\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PSCH_YSNO\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:EDCH_YSNO\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:HDTC_YSNO\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CIBP_YSNO\"/><Cell col=\"14\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:RETC_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "39", "207", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("발령코드설정");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("11");
            obj.set_text("홈 > 발령코드설정");
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
            obj.set_taborder("14");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("17");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("19");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("20");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("발령코드설정");
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
        this.addIncludeScript("HRMA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRMA0010 발령코드설정
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.11     고민주		Initial Created.
         *   2016.10.11     안윤준		수정.
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
        this.sPACKAGENAME = "HRMA0010";

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
        	this.fnc_DatasetClear("dsHR_APPOBS");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_APPOBS=dsHR_APPOBS";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_APPOBS.setFocus();

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
        	this.fnc_DataSetCancel("dsHR_APPOBS");
        	this.grdHR_APPOBS.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsHR_APPOBS=dsHR_APPOBS:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_APPOBS.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_APPOBS", this);
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

        	if (this.fnc_DatasetChangeCheck("dsHR_APPOBS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_APPOBS")) {
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

        	if (sKind == "SEARCH00" || sKind == "SAVE00") {
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);

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
        		this.fnc_Information(this.stInformation, this.dsHR_APPOBS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_APPOBS.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        		var arrIndex = 0;
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsDTCH_YSNO,DTCH_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsPYTC_YSNO,PYTC_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsCLPC_YSNO,CLPC_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsOFPC_YSNO,OFPC_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsDURC_YSNO,DURC_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsJOCH_YSNO,JOCH_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsNMCG_YSNO,NMCG_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsAJDC_YSNO,AJDC_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsDTDC_YSNO,DTDC_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsPSCH_YSNO,PSCH_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsEDCH_YSNO,EDCH_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsHDTC_YSNO,HDTC_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsCIBP_YSNO,CIBP_YSNO";
        			arrParam[arrIndex++] = "GRID,grdHR_APPOBS,dsRETC_YSNO,RETC_YSNO";
        		this.fnc_CommonCodeInnerBind(arrParam);

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
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
