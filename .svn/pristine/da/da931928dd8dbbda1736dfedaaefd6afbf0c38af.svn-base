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
                this.set_name("HRMB0090");
                this.set_titletext("보증보험등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsSHRWODN_CODE</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_GRTINS", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ACTV_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"GRPD_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"GRTY_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"GYIE_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SECR_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BFGY_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BFSE_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INSU_FEEX\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divButtonList", "absolute", "8", "35", "277", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFormDown", "absolute", "0%", "0", "98", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnFormUp", "absolute", "36.46%", "0", "98", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "184", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "304", "71", "50", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "346", "71", "80", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "428", "71", "22", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "451", "71", "125", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle", "absolute", "605", "71", "88", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("급여공제월");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBGIN_DATE", "absolute", "686", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "791", "71", "14", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRENDX_DATE", "absolute", "806", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Image1", "absolute", "28", "71", "50", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "152", "71", "22", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "175", "71", "100", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle4", "absolute", "936", "71", "74", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("재직구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWODN_CODE", "absolute", "1005", "71", "96", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_type("search");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("0");

            obj = new Grid("grdHR_GRTINS", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("32");
            obj.set_tabstop("false");
            obj.set_binddataset("dsHR_GRTINS");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"85\"/><Column size=\"77\"/><Column size=\"77\"/><Column size=\"92\"/><Column size=\"87\"/><Column size=\"94\"/><Column size=\"81\"/><Column size=\"77\"/><Column size=\"98\"/><Column size=\"94\"/><Column size=\"84\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"사번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" style=\"background: ;\" text=\"직위\"/><Cell col=\"3\" style=\"background: ;\" text=\"보증시작일\"/><Cell col=\"4\" text=\"보증종료일\"/><Cell col=\"5\" text=\"보험회사\"/><Cell col=\"6\" displaytype=\"text\" text=\"가입금액\"/><Cell col=\"7\" displaytype=\"text\" text=\"보험료\"/><Cell col=\"8\" style=\"background: ;\" text=\"급여공제월\"/><Cell col=\"9\" text=\"급여공제금액\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NAME\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:BGIN_DATE\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"date\" text=\"bind:ENDX_DATE\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" text=\"bind:COMP_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" style=\"align:right;\" text=\"bind:GYIE_AMOT\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;background: ;\" text=\"bind:INSU_FEEX\" editimemode=\"native\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("보증보험등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("34");
            obj.set_text("홈 > 인사관리 > 인사관리 > 보증보험등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("35");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("44");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("48");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("49");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "275", "61", "40", "41", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 277, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("보증보험등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","grdHR_GRTINS","binddataset","dsHR_GRTINS","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRMB0090.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMB0090.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRMB0090 보증보험등록
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.05     고민주     Initial Created.
         *   2016.11.24     황치웅     수정
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
        this.sPACKAGENAME = "HRMB0090"; 

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

        	var iNowData = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRBGIN_DATE.set_value(this.fnc_SubStr(iNowData, 0, 4) + "0101");
        	this.calSHRENDX_DATE.set_value(this.fnc_SubStr(iNowData)); 
        	this.grdHR_GRTINS.setFocus();

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
        	this.fnc_DatasetClear("dsHR_GRTINS");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_GRTINS=dsHR_GRTINS";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_GRTINS.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {  

        	var iRow = this.dsHR_GRTINS.insertRow(this.dsHR_GRTINS.rowposition + 1);
        	this.dsHR_GRTINS.set_rowposition(iRow); 
        	this.grdHR_GRTINS.setCellPos(this.fnc_GridColumnIndex(this.grdHR_GRTINS, "EMPL_NAME"));
        	this.grdHR_GRTINS.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        // multirow 용도 확인 .
        	if (this.fn_DeleteCheck()) {
        		this.dsHR_GRTINS.deleteMultiRows(this.grdHR_GRTINS.getSelectedDatasetRows());
        		this.grdHR_GRTINS.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsHR_GRTINS");
        	this.grdHR_GRTINS.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsHR_GRTINS=dsHR_GRTINS:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_GRTINS.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_GRTINS", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_GRTINS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBGIN_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "급여공제월시작", this.calSHRBGIN_DATE);
        	}
        	
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRENDX_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "급여공제월종료", this.calSHRENDX_DATE);
        	}
        	
        	if (this.calSHRBGIN_DATE.value > this.calSHRENDX_DATE.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "급여공제월시작,급여공제월종료", this.calSHRBGIN_DATE);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsHR_MASTXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdHR_GRTINS);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = this.dsHR_GRTINS.getColumn(this.dsHR_GRTINS.rowposition, "EMPL_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_GRTINS")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsHR_GRTINS.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsHR_GRTINS.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_GRTINS.getColumn(i, "EMPL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsHR_GRTINS, i, this.grdHR_GRTINS, "EMPL_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_GRTINS.getColumn(i, "SRAL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "일련번호", this.dsHR_GRTINS, i, this.grdHR_GRTINS, "SRAL_NUMB");
        		}
        		
        	}
        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		sReturnString += " BGIN_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRBGIN_DATE.value)); 
        		sReturnString += " ENDX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRENDX_DATE.value)); 
        		
        	} else if (sKind == "SAVE00") {
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
        	
        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation, this.dsHR_GRTINS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_GRTINS.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	}else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRWODN_CODE,dsSHRWODN_CODE,WODN_CODE";
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
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

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

        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if (obj.name == "grdHR_GRTINS") {
        	
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME") {
        				
        			arrParam[0] = "TMM1002"; 
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdHR_GRTINS";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}

        }

        /*-----------------------------+
         |  양식파일 다운로드 클릭 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {

        	var sPath    = "XLS_FILE/";               //파일 경로
            var sLogFile = "사원번호생성.xlsx";  //파일 논리명
            var sPhyFile = "UpSample_EnpsTotal.xlsx";  //파일 물리명

        	//File Download 처리
        	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);

        }

        
        /*--------------------------+
         |  양식파일 업로드 클릭 時  |
         +---------------------------*/
        this.fn_ExcelUpload = function (obj,e) {

        	if (!this.fn_SearchItemCheck()) return;

        	//this.fn_GetPay();	
        	this.dsHR_MASTXM.clearData();
        	this.fnc_ExcelUpload("dsHR_GRTINS","Sheet1","A2", "this.fn_ExcelSuccess");	

        	
        }

        this.dsHR_GRTINS_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "DEPT_NAME" || e.columnid == "BDSB_NAME") {
        		this.fn_HelpDialoge(this.grdHR_GRTINS, "YES", e.oldvalue, e.columnid);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_GRTINS.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRBGIN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRENDX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRWODN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdHR_GRTINS.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMB0090.xfdl");
        this.loadPreloadList();
       
    };
}
)();
