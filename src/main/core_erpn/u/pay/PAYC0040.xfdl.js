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
                this.set_name("PAYC0040");
                this.set_titletext("비과세현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">PAY0006</Col><Col id=\"DSNAME\">dsWAGE_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_ALLDED", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EDIT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPD_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWX_SPAN\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"COLX_INDX\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"BACK_COLR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMMAST", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GASE_AMO1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GASE_AMO2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GASE_AMO3\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("46");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "168", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMMAST", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_PMMAST");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("multirow");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"95\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"지급일\"/><Cell col=\"1\" text=\"급여구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"성명\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" displaytype=\"text\" text=\"부서\"/><Cell col=\"6\" displaytype=\"text\" text=\"직위\"/><Cell col=\"7\" text=\"과세대상금액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:WAGE_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:EMPL_NAME\" editimemode=\"native\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:GASE_AMO1\" mask=\"#,###.##\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('GASE_AMO1')\" mask=\"#,###.##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle9", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("지급기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("stDEPT_CODE", "absolute", "500", "71", "49", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "542", "71", "80", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "624", "71", "22", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "647", "71", "100", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stEMPL_NUMB", "absolute", "775", "71", "49", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "817", "71", "80", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "899", "71", "21", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "922", "71", "100", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stEMPL_CODE", "absolute", "304", "71", "76", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("급여구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWAGE_CODE", "absolute", "372", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_text("비과세현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("30");
            obj.set_text("홈 > 급여관리 > 급여현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("31");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("38");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("39");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "276", "61", "40", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRPAYX_YMTH1", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "181", "71", "16", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRPAYX_YMTH2", "absolute", "196", "71", "80", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("비과세현황");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAYC0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYC0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYC0040 비과세조회
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.11		고민주		Initial Created.
         *   2016.11.02		안윤준		수정.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF";
        this.sPACKAGENAME = "PAYC0040";
        this.sSERVERDATE 	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,6);

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.divSHRPAYX_YMTH1.fn_SetMonth(this.sSERVERDATE);
        	this.divSHRPAYX_YMTH2.fn_SetMonth(this.sSERVERDATE);
        	this.divSHRPAYX_YMTH1.calMONTH.setFocus();

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
        	this.fnc_DatasetClear("dsPY_PMMAST,dsPY_ALLDED");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_ALLDED=dsPY_ALLDED dsPY_PMMAST=dsPY_PMMAST";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_PMMAST.setFocus();

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
        	this.fnc_DataSetCancel("dsPY_PMMAST");
        	this.grdPY_PMMAST.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PMMAST", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_PMMAST")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.divSHRPAYX_YMTH1.calMONTH.value)) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급기간", this.divSHRPAYX_YMTH1.calMONTH);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.divSHRPAYX_YMTH2.calMONTH.value)) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급기간", this.divSHRPAYX_YMTH2.calMONTH);
        	}
        	
        	if (this.divSHRPAYX_YMTH1.calMONTH.value > this.divSHRPAYX_YMTH2.calMONTH.value) {
        		return this.fnc_SearchCheckPostAction("TMM028", "지급기간종료일,지급기간시작일", this.divSHRPAYX_YMTH1.calMONTH);
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
        		sReturnString += " PAYX_YMTH1=" + this.fnc_Quote(this.fnc_Trim(this.divSHRPAYX_YMTH1.fn_GetMonth()));
        		sReturnString += " PAYX_YMTH2=" + this.fnc_Quote(this.fnc_Trim(this.divSHRPAYX_YMTH2.fn_GetMonth()));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
         		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
         		sReturnString += " WAGE_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRWAGE_CODE.value));
         		
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
        		this.fnc_GridColumnAppend(this.grdPY_PMMAST, this.dsPY_ALLDED, 6);
        		this.fnc_Information(this.stInformation, this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "GetCommCode") { //코드 바인딩
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRWAGE_CODE,dsWAGE_CODE,0";
        			arrParam[1] = "GRD,grdPY_PMMAST,dsWAGE_CODE,WAGE_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRWAGE_CODE,dsWAGE_CODE,0";
        		this.fnc_UserComboInnerBind(arrParam);
        		
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
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 조회조건 - 부서정보조회(Popup)
        		arrParam[0] = "TMM0004"; 								
        		arrParam[1] = ""; 										
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N"; 										
        		arrParam[4] = "edtSHRDEPT_NAME"; 						
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		
        		arrParam[6] = "0,1"; 									
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        	}

        	if ( arrParam != '' || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYC0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
