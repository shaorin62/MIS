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
                this.set_name("WFMB0040");
                this.set_titletext("학자금지급내역");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWF_SCEXXD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_SEQN\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"5\"/><Column id=\"APPR_STAT_STR\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_CODE_STR\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CHLD_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CHLD_BIRT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_YEAR\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_TERM\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_AMOT\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_LIMT\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"GIVE_YMDX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SSPS_CODE\" type=\"STRING\" size=\"1\" prop=\"default\"/><Column id=\"SSPS_CODE_STR\" type=\"STRING\" size=\"30\"/><Column id=\"SCPY_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"REMK_200X\" size=\"200\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"DSNAME\">dsSHRSSPS_CODE</Col><Col id=\"CODEID\">SSPS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"DSNAME\">dsAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\"/></Row><Row><Col id=\"DSNAME\">dsSSPS_CODE</Col><Col id=\"CODEID\">SSPS_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\"/></Row><Row><Col id=\"DSNAME\">dsSCPY_CODE</Col><Col id=\"CODEID\">SCPY_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMAIN_WF_SCEXXD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_SEQN\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"5\"/><Column id=\"APPR_STAT_STR\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_CODE_STR\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CHLD_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CHLD_BIRT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_YEAR\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_TERM\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_AMOT\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_LIMT\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"GIVE_YMDX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SSPS_CODE\" type=\"STRING\" size=\"1\" prop=\"default\"/><Column id=\"SSPS_CODE_STR\" type=\"STRING\" size=\"30\"/><Column id=\"SCPY_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"REMK_200X\" size=\"200\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPAY_WF_SCEXXD", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_AMOT\" size=\"50\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("17");
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
            obj.set_taborder("11");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("학자금지급내역");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("13");
            obj.set_text("홈 > 1메뉴 > 학자금지급내역");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "117", "262", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "373", "103", "48", "35", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("19");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
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

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "98", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "200", "71", "14", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE2", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("calSHRAPPR_DATE1", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static33", "absolute", "344", "71", "70", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_STAT", "absolute", "413", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Button("btnCREATE_SLIP", "absolute", null, "113", "74", "21", "368", null, this);
            obj.set_taborder("7");
            obj.set_text("전표생성");
            this.addChild(obj.name, obj);

            obj = new Button("btnDELETE_SLIP", "absolute", null, "113", "74", "21", "292", null, this);
            obj.set_taborder("8");
            obj.set_text("전표삭제");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSSPS_CODE", "absolute", "641", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static03", "absolute", "572", "71", "70", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("전표상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", null, "113", "68", "21", "546", null, this);
            obj.set_taborder("28");
            obj.set_text("전표일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSLIP_DATE", "absolute", null, "113", "100", "21", "444", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static08", "absolute", null, "113", "76", "21", "207", null, this);
            obj.set_taborder("29");
            obj.set_text("급여전환일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Button("btnCREATE_PAY", "absolute", null, "113", "74", "21", "25", null, this);
            obj.set_taborder("10");
            obj.set_text("급여전환");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWF_SCEXXD", "absolute", "8", "138", null, null, "25", "15", this);
            obj.set_taborder("1");
            obj.set_binddataset("dsWF_SCEXXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\"/><Column size=\"84\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"180\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"4\" text=\"대상사원\"/><Cell col=\"5\" colspan=\"5\" text=\"대상자녀\"/><Cell col=\"10\" colspan=\"2\" text=\"학자금\"/><Cell col=\"12\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"13\" rowspan=\"2\" text=\"전표상태\"/><Cell col=\"14\" rowspan=\"2\" text=\"전표번호\"/><Cell col=\"15\" rowspan=\"2\" text=\"급여전환일\"/><Cell col=\"16\" rowspan=\"2\" text=\"급여전환상태\"/><Cell col=\"17\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"1\" text=\"사원번호\"/><Cell row=\"1\" col=\"2\" text=\"성명\"/><Cell row=\"1\" col=\"3\" text=\"부서\"/><Cell row=\"1\" col=\"4\" text=\"직위\"/><Cell row=\"1\" col=\"5\" text=\"자녀명\"/><Cell row=\"1\" col=\"6\" text=\"생년월일\"/><Cell row=\"1\" col=\"7\" text=\"학교명\"/><Cell row=\"1\" col=\"8\" text=\"학년\"/><Cell row=\"1\" col=\"9\" text=\"분기/학기\"/><Cell row=\"1\" col=\"10\" text=\"종류\"/><Cell row=\"1\" col=\"11\" text=\"실납임금\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:CHK_BOX\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NAME\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" text=\"bind:CHLD_NAME\" editdisplay=\"edit\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:CHLD_BIRT\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SCHL_NAME\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SCHL_YEAR\" combodataset=\"dsYear\" combocodecol=\"CODEID\" combodatacol=\"DSNAME\" combodisplay=\"edit\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SCHL_TERM\" combodataset=\"dsTerm\" combocodecol=\"CODEID\" combodatacol=\"DSNAME\" combodisplay=\"edit\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SCEX_CODE_STR\" combodisplay=\"edit\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SCEX_AMOT\" mask=\"#,##0\" editdisplay=\"edit\"/><Cell col=\"12\" displaytype=\"combo\" text=\"bind:APPR_STAT\"/><Cell col=\"13\" displaytype=\"combo\" text=\"bind:SSPS_CODE\"/><Cell col=\"14\" text=\"bind:SLIP_NUMB\" expr=\"SLIP_NUMB+SLIP_LINE\"/><Cell col=\"15\" displaytype=\"date\" edittype=\"date\" text=\"bind:GIVE_YMDX\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" displaytype=\"combo\" text=\"bind:SCPY_CODE\"/><Cell col=\"17\" style=\"align:left;\" text=\"bind:REMK_200X\"/></Band><Band id=\"summary\"><Cell colspan=\"11\" style=\"align:center;\" text=\"합계\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;SCEX_AMOT&quot;, 0)\"/><Cell col=\"12\" colspan=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calGIVE_DATE", "absolute", null, "113", "100", "21", "102", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("학자금지급내역");

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
        this.addIncludeScript("WFMB0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMB0040.xfdl", function() {
         /***************************************************************************************************
         * # Program : 학자금신청현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.28		전종원		Initial Created.
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
        this.sBUTTONLIST  = "TTFTFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMB0040";
        this.sFORM_IDXX   = "WFMB0040";

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

        	var sServerDateTime = this.fnc_GetServerDateTime("DATE");
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	//전표 mask
        	this.fnc_FormatSlipNumber(this.grdWF_SCEXXD, "SLIP_NUMB", "Y");
        	
        	this.calSHRAPPR_DATE1.set_value(this.fnc_SubStr(sServerDateTime, 0, 6) + '01');
        	this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(sServerDateTime)); 
        	this.calSLIP_DATE.set_value(this.fnc_SubStr(sServerDateTime, 0, 8));	//전표일자
        	this.calGIVE_DATE.set_value(this.fnc_SubStr(sServerDateTime, 0, 8));	//급여지급일

        	/*권한에 따라 사원번호 수정 가능여부 결정*/
        	/*개발을 위해 권한 level을 1로 셋팅*/
        	//this.sUSERLAVEL = 1;

        	switch(this.sUSERLAVEL){
        		case "1": 
        			break;
        	}
        	
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
        	this.fnc_DatasetClear('dsWF_SCEXXD');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsWF_SCEXXD=dsWF_SCEXXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        	this.grdWF_SCEXXD.setFocus();
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
        	// 기능 없음
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
         |  10.화면 Close 時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsWF_SCEXXD", this);

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

        	if (this.fnc_DatasetChangeCheck("dsWF_SCEXXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청기간 FROM", this.calSHRAPPR_DATE1);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청기간 TO", this.calSHRAPPR_DATE2);
        	}
        	
        	if (this.calSHRAPPR_DATE1.value > this.calSHRAPPR_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "신청기간 FROM,신청기간 TO", this.calSHRAPPR_DATE1);
        	}
        	
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능 없음
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능 없음
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DOCU_IDXX=" + this.fnc_Quote(this.fnc_Trim("KHR141")); 
        		sReturnString += " APPR_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE1.value)); 
        		sReturnString += " APPR_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE2.value)); 
        		sReturnString += " APPR_STAT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPR_STAT.value)); 
        		sReturnString += " SSPS_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSSPS_CODE.value)); 
        		
        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " SYST_LNCD=" + this.fnc_Quote("KO"); 										//시스템언어코드
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote("10"); 										//회계단위
        		sReturnString += " ACCT_GUBN=" + this.fnc_Quote("100"); 									//회계구분_사업장
        		sReturnString += " SLIP_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSLIP_DATE.value)); 	//전표일자
        		sReturnString += " DOCU_IDXX=" + this.fnc_Quote(this.fnc_Trim("KHR141")); 					//결재DOC_ID
        		sReturnString += " FORM_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.sFORM_IDXX)); 			//화면ID
                sReturnString += " EMPL_NUMB=" + this.fnc_Quote(application.GBL_EMPLNO);					//사원번호
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(application.GBL_DEPTCD);					//부서코드
        		sReturnString += " SLIP_GUBN=" + this.fnc_Quote("WF011");									//전표유형구분
        		sReturnString += " TITL_NAME=" + this.fnc_Quote("[학자금신청] - " + this.calSLIP_DATE.value);	//제목
        		sReturnString += " SOUS_LNKY=" + this.fnc_Quote(this.fnc_Trim(this.sFORM_IDXX)); 			//출처연결키
        		
        	} else if (sKind == "PROC01") {
            
                sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="    + this.fnc_Quote(sKind);
                sReturnString += " SYST_LNCD=" + this.fnc_Quote("KO"); 										//시스템언어코드
                sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.dsWF_SCEXXD.getColumn(this.dsWF_SCEXXD.rowposition, "SLIP_NUMB")); //전표번호
        	
        	} else if (sKind == "PROC02") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " INDN_CODE=" + this.fnc_Quote("09"); 										//소득구분코드 학자금('09')
        		sReturnString += " DOCU_IDXX=" + this.fnc_Quote(this.fnc_Trim("KHR141")); 					//결재DOC_ID
        		sReturnString += " GIVE_YMDX=" + this.fnc_Quote(this.fnc_Trim(this.calGIVE_DATE.value)); 	//급여지급일
        		
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
        	
        		this.fnc_Information(this.stInformation, this.dsWF_SCEXXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsWF_SCEXXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		//this.dsWF_SCEXXD.set_keystring("G:EMPL_NAME,S:EMPL_NUMB");	//소계처리
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();

        		arrParam[0] = "COMBO,cmbSHRAPPR_STAT,dsSHRAPPR_STAT,0";//SHR 결재상태SHR
        		arrParam[1] = "COMBO,cmbSHRSSPS_CODE,dsSHRSSPS_CODE,0";//SHR 전표상태SHR
        		arrParam[2] = "GRID,grdWF_SCEXXD,dsAPPR_STAT,APPR_STAT";//그리드 결재상태
        		arrParam[3] = "GRID,grdWF_SCEXXD,dsSSPS_CODE,SSPS_CODE";//그리드 전표상태
        		arrParam[4] = "GRID,grdWF_SCEXXD,dsSCPY_CODE,SCPY_CODE";//그리드 급여전환상태
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} else if (sMethodName == "PROC00") {
        		
        		this.fnc_Message("TMM130", "전표생성"); 
        		this.fnc_DatasetClear('dsWF_SCEXXD');
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC01") {
        		
        		this.fnc_Message("TMM130", "전표삭제"); 
        		this.fnc_DatasetClear('dsWF_SCEXXD');
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC02") {
        		
        		this.fnc_Message("TMM130", "급여전환"); 
        		this.fnc_DatasetClear('dsWF_SCEXXD');
        		this.fn_Search();
        		
        	}

        }

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         
        this.grdWF_SCEXXD_onheadclick = function(obj,e)
        {
        /*
        	if(e.col == 0){	
        		this.fnc_GridAllCheck(this.grdWF_SCEXXD,"CHK_BOX");	
        	}
        */

        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", "CHK_BOX")) ) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}
        	
        	
        	/* Dataset에 Value 일괄 설정 */
        	
        	objDataSet.set_enableevent(false);
        	objDataSet.set_updatecontrol(false);
        	for (var i=0; i < objDataSet.rowcount; i++) {
        		
        		var sChk_Gubn = this.fnc_Trim(objDataSet.getColumn(i, "SSPS_CODE"));

        		if (sChk_Gubn != "1") {
        			objDataSet.setColumn(i, "CHK_BOX", iCheckValue);
        			objDataSet.setRowType(i, Dataset.ROWTYPE_NORMAL);
        		}
        		
        	}
        	objDataSet.set_updatecontrol(true);
        	objDataSet.set_enableevent(true);
        	
        }

        /*------------------------+
         | 전표생성 버튼 클릭시  |
         +-------------------------*/
        this.btnCREATE_SLIP_onclick = function(obj,e)
        {

        	if (!this.fn_CreateSlipItemCheck()) return;

        	var sMethodName = "PROC00";
        	var sInDataSet 	= "dsWF_SCEXXD=dsWF_SCEXXD:U"; 	//(A - 전체, U - 수정, D - 삭제)
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdWF_SCEXXD.setFocus();
        }

        /*------------------------+
         | 전표삭제 버튼 클릭시  |
         +-------------------------*/
        this.btnDELETE_SLIP_onclick = function(obj,e) {
        	
        	if (!this.fn_DeleteSlipItemCheck()) return;
        	
            var sMethodName = "PROC01";
            var sInDataSet 	= "";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDBM.setFocus();
            
        }

        /*------------------------+
         | 급여전환 버튼 클릭시  |
         +-------------------------*/
        this.btnCREATE_PAY_onclick = function(obj,e)
        {

        	if (!this.fn_CreatePayItemCheck()) return;
        	var sMethodName = "PROC02";
        	var sInDataSet 	= "dsPAY_WF_SCEXXD=dsPAY_WF_SCEXXD:A dsMAIN_WF_SCEXXD=dsMAIN_WF_SCEXXD:A";
        	//var sInDataSet 	= "dsPAY_WF_SCEXXD=dsPAY_WF_SCEXXD:A dsWF_SCEXXD=dsWF_SCEXXD:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdWF_SCEXXD.setFocus();
        }

        

        /*----------------------------+
         |  전표생성 필수 조건 체크!  |
         +----------------------------*/
        this.fn_CreateSlipItemCheck = function () {

        	if (this.dsWF_SCEXXD.getRowCount() < 1) return false;

        	if (this.dsWF_SCEXXD.getCaseCount("CHK_BOX==\"1\"") < 1) {
        		this.fnc_Message("WFM003", "전표생성");
        		return false;
        	} else {
        		// 선택된 항목중 처리 미처리 체크
        		for (var row = 0; row < this.dsWF_SCEXXD.getRowCount(); row++) {
        			if (this.dsWF_SCEXXD.getColumn(row, "CHK_BOX") == "1") {
        				//결재상태 완료 체크
        				if (this.dsWF_SCEXXD.getColumn(row, "APPR_STAT") != "Y") {
        					this.fnc_Message("WFM004", "결재완료");
        					return false;
        				}
        				//전표상태 미처리 체크
        				if (this.dsWF_SCEXXD.getColumn(row, "SSPS_CODE") == "1") {
        					this.fnc_Message("WFM005", "미처리");
        					return false;
        				}
        			}
        		}
        		
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSLIP_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "전표일자", this.calSLIP_DATE);
        	}
        /*
        	this.fnc_DatasetClear("dsMAIN_WF_SCEXXD");
        	
            // 선택한 대상만 복사
            this.dsWF_SCEXXD.filter("CHK_BOX=='1'");
            this.dsMAIN_WF_SCEXXD.copyData(this.dsWF_SCEXXD, true);
            this.dsWF_SCEXXD.filter("");
            
            trace(this.dsMAIN_WF_SCEXXD.saveXML());
        */
        	return this.fnc_Message("PAY036");
        	
        }

        
        /*----------------------------+
         |  전표삭제 필수 조건 체크!  |
         +----------------------------*/
        this.fn_DeleteSlipItemCheck = function () {
        	if (this.dsWF_SCEXXD.getCaseCount("CHK_BOX==\"1\"") < 1) {
        		this.fnc_Message("WFM003", "전표삭제");
        		return false;
        	} else {
        		// 선택된 항목중 처리 미처리 체크
        		for (var row = 0; row < this.dsWF_SCEXXD.getRowCount(); row++) {
        			if (this.dsWF_SCEXXD.getColumn(row, "CHK_BOX") == "1") {
        				//결재상태 완료 체크
        				if (this.dsWF_SCEXXD.getColumn(row, "APPR_STAT") != "Y") {
        					this.fnc_Message("WFM004", "결재완료");
        					return false;
        				}
        				
        				//전표상태 미처리 체크
        				if (this.dsWF_SCEXXD.getColumn(row, "SSPS_CODE") == "0") {
        					this.fnc_Message("WFM005", "처리");
        					return false;
        				}
        			}
        		}
        		
        	}
            
            var sSlip_Numb = this.dsWF_SCEXXD.getColumn(this.dsWF_SCEXXD.rowposition, "SLIP_NUMB");
        	var sQuestionText = "회계전표 " + this.fnc_GetMaskFormat(sSlip_Numb, application.GBL_SLIPMASK);
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        
        /*----------------------------+
         |  급여전환 필수 조건 체크!  |
         +----------------------------*/
        this.fn_CreatePayItemCheck = function () {
        	if (this.dsWF_SCEXXD.getRowCount() < 1) return false;

        	if (this.dsWF_SCEXXD.getCaseCount("CHK_BOX==\"1\"") < 1) {
        		this.fnc_Message("WFM003", "급여전환");
        		return false;
        	} else {
        		// 선택된 항목 체크
        		for (var row = 0; row < this.dsWF_SCEXXD.getRowCount(); row++) {
        			if (this.dsWF_SCEXXD.getColumn(row, "CHK_BOX") == "1") {
        				//결재상태 완료 체크
        				if (this.dsWF_SCEXXD.getColumn(row, "APPR_STAT") != "Y") {
        					this.fnc_Message("WFM004", "결재완료");
        					return false;
        				}
        				
        				//전표상태 처리 체크
        				if (this.dsWF_SCEXXD.getColumn(row, "SSPS_CODE") != "1") {
        					this.fnc_Message("WFM005", "처리");
        					return false;
        				}
        			}
        		}
        		
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calGIVE_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "급여지급일", this.calGIVE_DATE);
        	}

        	// 데이타셋 초기화
        	this.fnc_DatasetClear("dsMAIN_WF_SCEXXD");
        	this.fnc_DatasetClear("dsPAY_WF_SCEXXD");

            // 선택한 대상만 복사
            this.dsWF_SCEXXD.filter("CHK_BOX=='1'");
            this.dsMAIN_WF_SCEXXD.copyData(this.dsWF_SCEXXD, true);
            this.dsWF_SCEXXD.filter("");
            
            // 선택된 대상을 급여전환 하기 위해 사번별 학자금 금액 SUM 데이타셋 생성
            for (var row = 0; row < this.dsMAIN_WF_SCEXXD.getRowCount(); row++) {
        		
        		var sEMPL_NUMB = this.dsMAIN_WF_SCEXXD.getColumn(row, "EMPL_NUMB");
        		
        		if (this.dsPAY_WF_SCEXXD.findRow( "EMPL_NUMB", sEMPL_NUMB ) < 0) {
        			this.dsPAY_WF_SCEXXD.addRow();
        			this.dsPAY_WF_SCEXXD.setColumn(this.dsPAY_WF_SCEXXD.getRowCount()-1, "EMPL_NUMB", sEMPL_NUMB);
        			this.dsPAY_WF_SCEXXD.setColumn(this.dsPAY_WF_SCEXXD.getRowCount()-1, "SCEX_AMOT", this.dsMAIN_WF_SCEXXD.getCaseSum("EMPL_NUMB == '"+sEMPL_NUMB+"'", "SCEX_AMOT"));
        			
        		}
            }
        	return this.fnc_Message("PAY066");
        		
        }

        this.grdWF_SCEXXD_oncelldblclick = function (obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	this.fn_SlipPopUp(columnName);
        	
        }

        // 전표팝업
        this.fn_SlipPopUp = function (columnName) {

        	var sSLIP_NUMB = "";
        	if (columnName != "SLIP_NUMB") return;

        	// 전표번호
        	if (this.fnc_DatasetChangeCheck("dsWF_SCEXXD")) {
        		return this.fnc_Message("TMM015", "전표조회");
        	}
        	
        	var sSlipNumb = this.dsWF_SCEXXD.getColumn(this.dsWF_SCEXXD.rowposition, columnName);
        	if (this.fnc_Length(sSlipNumb) < 14) return;
        	
        	var gubun = "SHR";	
         	//if (columnName == "SLIP_NUMB") gubun = "REV";
        	
        	this.fnc_ViewSlipForm(sSlipNumb, gubun, this.sUSERLAVEL); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsWF_SCEXXD.addEventHandler("oncolumnchanged", this.dsWF_SCEXXD_oncolumnchanged, this);
            this.dsMAIN_WF_SCEXXD.addEventHandler("oncolumnchanged", this.dsWF_SCEXXD_oncolumnchanged, this);
            this.dsPAY_WF_SCEXXD.addEventHandler("oncolumnchanged", this.dsWF_SCEXXD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnCREATE_SLIP.addEventHandler("onclick", this.btnCREATE_SLIP_onclick, this);
            this.btnDELETE_SLIP.addEventHandler("onclick", this.btnDELETE_SLIP_onclick, this);
            this.calSLIP_DATE.addEventHandler("onchanged", this.fn_clearData, this);
            this.calSLIP_DATE.addEventHandler("onspin", this.fn_clearData, this);
            this.calSLIP_DATE.addEventHandler("ontextchange", this.fn_clearData, this);
            this.btnCREATE_PAY.addEventHandler("onclick", this.btnCREATE_PAY_onclick, this);
            this.grdWF_SCEXXD.addEventHandler("onheadclick", this.grdWF_SCEXXD_onheadclick, this);
            this.grdWF_SCEXXD.addEventHandler("oncelldblclick", this.grdWF_SCEXXD_oncelldblclick, this);
            this.calGIVE_DATE.addEventHandler("onchanged", this.fn_clearData, this);
            this.calGIVE_DATE.addEventHandler("onspin", this.fn_clearData, this);
            this.calGIVE_DATE.addEventHandler("ontextchange", this.fn_clearData, this);

        };

        this.loadIncludeScript("WFMB0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
