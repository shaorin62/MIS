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
                this.set_name("HATF0060");
                this.set_titletext("출장여비정산");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">ALL</Col></Row><Row><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"DSNAME\">dsDPAY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"USEYN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_BUTRXM", this);
            obj._setContents("<ColumnInfo><Column id=\"BSRP_SEQ1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BTCL_SEQ1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BTWO_SEQ1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFT_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BSRP_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BSRP_CNT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"BSRP_PLAC\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"BSRP_STDT\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"BSRP_ENDD\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN1\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT1\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN2\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT2\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR2\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC2\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN3\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT3\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR3\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC3\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
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
            obj.set_text("출장여비정산서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 출장여비정산서");
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

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAT_BUTRXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsAT_BUTRXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"신청일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"기안일자\"/><Cell col=\"3\" rowspan=\"2\" text=\"신청자사번\"/><Cell col=\"4\" rowspan=\"2\" text=\"신청자명\"/><Cell col=\"5\" rowspan=\"2\" text=\"출장구분\"/><Cell col=\"6\" rowspan=\"2\" text=\"출장자수\"/><Cell col=\"7\" rowspan=\"2\" text=\"출장지\"/><Cell col=\"8\" colspan=\"2\" text=\"출장일정\"/><Cell col=\"10\" colspan=\"2\" text=\"신청서\"/><Cell col=\"12\" colspan=\"2\" text=\"정산서\"/><Cell row=\"1\" col=\"8\" text=\"시작일\"/><Cell row=\"1\" col=\"9\" text=\"종료일\"/><Cell row=\"1\" col=\"10\" text=\"진행상태\"/><Cell row=\"1\" col=\"11\" text=\"보기\"/><Cell row=\"1\" col=\"12\" text=\"진행상태\"/><Cell row=\"1\" col=\"13\" text=\"보기\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"expr:UPDT_DATE == &quot;&quot; ? &quot;none&quot; : &quot;date&quot;\" text=\"bind:UPDT_DATE\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:DRFT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:EMPL_NUMB\"/><Cell col=\"4\" text=\"bind:EMPL_NAME\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:BSRP_CODE\"/><Cell col=\"6\" text=\"bind:BSRP_CNT\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:BSRP_PLAC\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:BSRP_STDT\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:BSRP_ENDD\"/><Cell col=\"10\" text=\"bind:APPR_STAT_STR1\"/><Cell col=\"11\" displaytype=\"expr:APPR_STAT_PROC1 == &quot;조회&quot; ? &quot;button&quot; : &quot;none&quot;\" edittype=\"expr:APPR_STAT_PROC1 == &quot;조회&quot; ? &quot;button&quot; : &quot;none&quot;\" text=\"bind:APPR_STAT_PROC1\"/><Cell col=\"12\" text=\"expr:BSRP_CODE == &quot;30&quot; ? APPR_STAT_STR3 : APPR_STAT_STR2\"/><Cell col=\"13\" displaytype=\"expr:APPR_STAT1 == &quot;Y&quot; ? &quot;button&quot; : &quot;none&quot;\" edittype=\"expr:APPR_STAT1 == &quot;Y&quot; ? &quot;button&quot; : &quot;none&quot;\" text=\"expr:BSRP_CODE == &quot;30&quot; ? APPR_STAT_PROC3 : APPR_STAT_PROC2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("149");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("150");
            obj.set_text("신청자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "319", "71", "68", "21", null, null, this);
            obj.set_taborder("152");
            obj.set_text("출장일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "636", "71", "70", "21", null, null, this);
            obj.set_taborder("153");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_STAT", "absolute", "705", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("154");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static14", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("158");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "77", "61", "8", "41", null, null, this);
            obj.set_taborder("159");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "290", "61", "40", "41", null, null, this);
            obj.set_taborder("160");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "607", "61", "40", "41", null, null, this);
            obj.set_taborder("161");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "405", "61", "38", "10", null, null, this);
            obj.set_taborder("163");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "405", "92", "38", "10", null, null, this);
            obj.set_taborder("164");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE1", "absolute", "389", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("165");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static17", "absolute", "491", "71", "14", "21", null, null, this);
            obj.set_taborder("166");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE2", "absolute", "507", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("167");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "85", "71", "80", "21", null, null, this);
            obj.set_taborder("168");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "167", "71", "21", "21", null, null, this);
            obj.set_taborder("169");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "190", "71", "100", "21", null, null, this);
            obj.set_taborder("170");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("EdtBsrpCode", "absolute", "1120", "70", null, "22", "42", null, this);
            obj.set_taborder("171");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("출장여비정산");

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
        this.addIncludeScript("HATF0060.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("HATF0060.xfdl", "script::lib_gfn.xjs");
        this.registerScript("HATF0060.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		출장여비정산 리스트
         * @category	 	인사관리>출장관리>출장여비정산
         * @author	   		김남호
         * @cdate	  		2016.09.19
         * @version 1.0		최초 작성
         * HATF0060.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_gfn.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATF0060"; 

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

        	var iNowDate = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRAPPR_DATE1.set_value(this.fnc_SubStr(iNowDate, 0, 4) + '0101');
        	//this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(iNowDate)); 
        	this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(iNowDate, 0, 4) + '1231');
        	this.calSHRAPPR_DATE1.setFocus();
        	
        	/*권한에 따라 사원번호 수정 가능여부 결정*/
        	/*개발을 위해 권한 level을 1로 셋팅*/
        	this.sUSERLAVEL = 1;
        	
        	switch(this.sUSERLAVEL){
        		case 1: 
        			this.imgHelpSHREMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
        			this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명
        			break;
        	}
        	
        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        	
        	this.fn_Search();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.parent.fn_End();
        	
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear('dsAT_BUTRXM');

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_BUTRXM=dsAT_BUTRXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_BUTRXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) { 
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsAT_BUTRXM");
        	this.grdTM_APPRXH.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능 없음
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
        	//var sMessage = this.fnc_FormUnloadCheck("dsHR_RECOJB", this);

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

        	if (this.fnc_DatasetChangeCheck("dsAT_BUTRXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "출장기간 FROM", this.calSHRAPPR_DATE1);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "출장기간 TO", this.calSHRAPPR_DATE2);
        	}
        	
        	if (this.calSHRAPPR_DATE1.value > this.calSHRAPPR_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "출장기간 FROM,출장기간 TO", this.calSHRAPPR_DATE1);
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
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " APPR_STAT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPR_STAT.value)); 
        		sReturnString += " APPR_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE1.value)); 
        		sReturnString += " APPR_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE2.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 	
        	}
        	//alert(sReturnString);
        	
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
        		this.fnc_Information(this.stInformation, this.dsAT_BUTRXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_BUTRXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRAPPR_STAT,dsSHRAPPR_STAT,APPR_STAT";//SHR 결재상태SHR
        		arrParam[1] = "GRID,grdAT_BUTRXM,dsDPAY_CODE,BSRP_CODE";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	// 조회조건 - 부서(popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

        		arrParam[0] = "BDM0002";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	// 조회조건 - 사원정보조회(Popup)
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {

        		arrParam[0] = "HRM0004"; //HRM0001
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} 
        }

        this.grdAT_BUTRXM_oncellclick = function(obj,e)
        {
        	var sBsrp_Seq1 = this.dsAT_BUTRXM.getColumn(e.row,"BSRP_SEQ1");	//출장승인key
        	var sBtcl_Seq1 = this.dsAT_BUTRXM.getColumn(e.row,"BTCL_SEQ1");	//출장여비key
        	if(typeof sBtcl_Seq1=="undefined") sBtcl_Seq1 = "";
        trace("HATF0060.sBtcl_Seq1 = "+sBtcl_Seq1);

        	var sBsrpCode = this.dsAT_BUTRXM.getColumn(e.row,"BSRP_CODE");	//출장외근 구분값
        	var sApprStat1 = this.dsAT_BUTRXM.getColumn(e.row,"APPR_STAT1");
        	var sApprStat2 = this.dsAT_BUTRXM.getColumn(e.row,"APPR_STAT2");
        	var sApprSeq1  = this.dsAT_BUTRXM.getColumn(e.row,"APPR_SEQN1");
        	var sApprSeq2  = this.dsAT_BUTRXM.getColumn(e.row,"APPR_SEQN2");
        	var sApprProc1 = this.dsAT_BUTRXM.getColumn(e.row,"APPR_STAT_PROC1");
        	var sGubn = "";
        	var sSeq1 = "";
        	var sDocuId = "";
        	var sApprStat = "";
        	var sApprSeq = "";
        	var sUrl = "http://dev.nsgportal.net/ekp/user.do?cmd=goNsSapOpenDoc&perm=false&cmpID=CK";
        	
        	//선택한 row의 출장구분 임시저장 (parent.Div_Main fn_Input()에서 사용)
        	this.EdtBsrpCode.text = sBsrpCode;
        	this.EdtBsrpCode.value = sBsrpCode;
        	
        	//국내,국외에따라 변수값 설정
        	if(sBsrpCode == "10" || sBsrpCode == "20"){	//국내,국외출장일경우
        		sDocuId = "KHR121";	//출장여비정산서
        		sSeq1 = sBtcl_Seq1;
        		sApprStat = sApprStat2;
        		sApprSeq = sApprSeq2;
        	}

        trace("HATF0060.sSeq1 = "+sSeq1);
        	if(sSeq1 != ""){
        		if(sApprStat == "N") sGubn = "cre";
        		else if(sApprStat == "T") sGubn = "del";
        		else sGubn = "show";
        	} else {
        		sGubn = "new";
        	}
        				
        	if(e.col == 11){	//출장승인신청 조회 클릭시
        	
        		//버튼출장승인보기가 조회아니면 action 없음
        		if(sApprProc1 != "조회")	return;
        		
        		sDocuId = "KHR120";	//출장승인신청서
        		var sPostData = "&documentId="+sDocuId+"-"+sApprSeq1
        					+ "&userID="+"gwtest07"; //application.GBL_EMPLNO;
        		//alert(sUrl+sPostData);
        		
        		if(nexacro.Browser == "Runtime"){  /*런타임 모드일때*/
        			system.execBrowser(sUrl+sPostData);
        		}else{								/*브라우저일때*/
        			window.open(sUrl+sPostData);
        		}
        	}else if(e.col == 13){	//출장여비정산 작성 클릭시
        		
        		//버튼출장승인결재가 완료아니면 action 없음
        		if(sApprStat1 != "Y")	return;

        		/*결재상태가 임시저장 or 기안대기 일때만 상세화면으로 전환하여 후속처리*/
        		if(sApprStat == "N" || sApprStat == "T" || sApprStat == "")
        		{
        			this.parent.sAPPRGUBN = sGubn	
        			this.parent.sAPPRSTAT = sApprStat;
        			this.parent.sDOCUIDXX = sDocuId;
        			this.parent.sAPPRSEQN = sApprSeq;
        			this.parent.sBSRPGUBN = sBsrpCode;
        			
        			this.parent.sBSRP_SEQ1 = sBsrp_Seq1;
        			this.parent.sBTCL_SEQ1 = sBtcl_Seq1;
        			 
        			this.parent.fn_goMenu(sBsrpCode);
        		}else{
        			/*결재상태가 진행중이거나 완료일 때는 결재문서 pdf 를 보여준다.*/
        			/*var sPostData = "&documentId="+sDocuId+"-"+sApprSeq
        						+ "&userID="+"gwtest07"; //application.GBL_EMPLNO;*/
        			//alert(sUrl+sPostData);
        			
        			//if(nexacro.Browser == "Runtime"){  /*런타임 모드일때*/
        			//	system.execBrowser(sUrl+sPostData);
        			//}else{								/*브라우저일때*/
        			//	window.open(sUrl+sPostData);
        			//}
        			var bPerm = (this.sUSERLAVEL == "5") ? false : true;
        			this.fnc_ShowApproval(sGubn, sDocuId + "-" + sApprSeq, "", bPerm);

        		}

        	}
        }

        this.grdAT_BUTRXM_oncelldblclick = function(obj,e)
        {
        	var sBsrp_Seq1 = this.dsAT_BUTRXM.getColumn(e.row,"BSRP_SEQ1");	//출장승인key
        	var sBtcl_Seq1 = this.dsAT_BUTRXM.getColumn(e.row,"BTCL_SEQ1");	//출장여비key
        	if(typeof sBtcl_Seq1=="undefined") sBtcl_Seq1 = "";
        trace("HATF0060.sBtcl_Seq1 = "+sBtcl_Seq1);

        	var sBsrpCode = this.dsAT_BUTRXM.getColumn(e.row,"BSRP_CODE");	//출장외근 구분값
        	var sApprStat1 = this.dsAT_BUTRXM.getColumn(e.row,"APPR_STAT1");
        	var sApprStat2 = this.dsAT_BUTRXM.getColumn(e.row,"APPR_STAT2");
        	var sApprSeq1  = this.dsAT_BUTRXM.getColumn(e.row,"APPR_SEQN1");
        	var sApprSeq2  = this.dsAT_BUTRXM.getColumn(e.row,"APPR_SEQN2");
        	var sApprProc1 = this.dsAT_BUTRXM.getColumn(e.row,"APPR_STAT_PROC1");
        	var sGubn = "";
        	var sSeq1 = "";
        	var sDocuId = "";
        	var sApprStat = "";
        	var sApprSeq = "";
        	var sUrl = "http://dev.nsgportal.net/ekp/user.do?cmd=goNsSapOpenDoc&perm=false&cmpID=CK";
        	
        	//선택한 row의 출장구분 임시저장 (parent.Div_Main fn_Input()에서 사용)
        	this.EdtBsrpCode.text = sBsrpCode;
        	this.EdtBsrpCode.value = sBsrpCode;
        	
        	//국내,국외에따라 변수값 설정
        	if(sBsrpCode == "10" || sBsrpCode == "20"){	//국내,국외출장일경우
        		sDocuId = "KHR121";	//출장여비정산서
        		sSeq1 = sBtcl_Seq1;
        		sApprStat = sApprStat2;
        		sApprSeq = sApprSeq2;
        	}

        trace("HATF0060.sSeq1 = "+sSeq1);
        	if(sSeq1 != ""){
        		if(sApprStat == "N") sGubn = "cre";
        		else if(sApprStat == "T") sGubn = "del";
        		else sGubn = "show";
        	} else {
        		sGubn = "new";
        	}
        				
        	if(e.col != 11 && e.col != 13){	//출장승인신청 조회 클릭시
        	
        		//버튼출장승인결재가 완료아니면 action 없음
        		if(sApprStat1 != "Y")	return;

        		this.parent.sAPPRGUBN = sGubn	
        		this.parent.sAPPRSTAT = sApprStat;
        		this.parent.sDOCUIDXX = sDocuId;
        		this.parent.sAPPRSEQN = sApprSeq;
        		this.parent.sBSRPGUBN = sBsrpCode;
        		
        		this.parent.sBSRP_SEQ1 = sBsrp_Seq1;
        		this.parent.sBTCL_SEQ1 = sBtcl_Seq1;
        		 
        		this.parent.fn_goMenu(sBsrpCode);
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
            this.grdAT_BUTRXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdAT_BUTRXM.addEventHandler("oncellclick", this.grdAT_BUTRXM_oncellclick, this);
            this.grdAT_BUTRXM.addEventHandler("oncelldblclick", this.grdAT_BUTRXM_oncelldblclick, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("HATF0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
