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
                this.set_name("HRMC0070");
                this.set_titletext("학력현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHR_SCHCRR", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"SCDN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"ENIS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"GRDT_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"SCHL_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"MJRA_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"MAJR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SHGD_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DNGB_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SCGN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SCHL_SEAT\" size=\"200\" type=\"STRING\"/><Column id=\"GRDN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DGDN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"HISL_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"ENSC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"SCHL_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"MAJR_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"DBMJ_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"50\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"SCDN_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"SCHL_CDNM\" size=\"50\" type=\"STRING\"/><Column id=\"MJRA_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"MAJR_CDNM\" size=\"50\" type=\"STRING\"/><Column id=\"DGDN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WRDV_CODE</Col><Col id=\"DSNAME\">dsSHRWRDV_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsSHRWODN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">SCDN_CODE</Col><Col id=\"DSNAME\">dsSHRSCDN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "159", "216", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("21");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_SCHCRR", "absolute", "8", "180", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_SCHCRR");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("26");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"학력\"/><Cell col=\"7\" text=\"학교명\"/><Cell col=\"8\" text=\"계열\"/><Cell col=\"9\" text=\"전공\"/><Cell col=\"10\" text=\"부/복수전공\"/><Cell col=\"11\" text=\"입학년월\"/><Cell col=\"12\" text=\"졸업년월\"/><Cell col=\"13\" text=\"소재지\"/><Cell col=\"14\" text=\"최종학교여부\"/><Cell col=\"15\" text=\"입사전학력여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:CPOS_NAME\" editimemode=\"native\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SCDN_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SCHL_CDNM\" editimemode=\"native\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MJRA_NAME\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MJRA_NAME\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:DBMJ_NAME\"/><Cell col=\"11\" displaytype=\"date\" style=\"align:left;\" text=\"bind:ENIS_DATE\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"date\" style=\"align:left;\" text=\"bind:GRDT_DATE\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SCHL_SEAT\" editimemode=\"native\"/><Cell col=\"14\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;\" text=\"bind:HISL_YSNO\" editimemode=\"native\"/><Cell col=\"15\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;\" text=\"bind:ENSC_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox1", "absolute", "8", "60", null, "95", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle5", "absolute", "27", "123", "57", "21", null, null, this);
            obj.set_text("직급");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "302", "71", "57", "21", null, null, this);
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "344", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_imemode("none");
            obj.set_maxlength("10");
            obj.set_taborder("15");
            obj.set_cssclass("styFormSearchItem");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "426", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "449", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "796", "71", "84", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("재직구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWODN_CODE", "absolute", "864", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_type("dropdown");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchTitle02", "absolute", "578", "71", "84", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWRDV_CODE", "absolute", "646", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_type("dropdown");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchTitle04", "absolute", "27", "97", "57", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("학력");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSCDN_CODE", "absolute", "69", "97", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_type("search");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchTitle06", "absolute", "302", "123", "57", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("직위");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCPOS_NAME", "absolute", "69", "123", "80", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCPOS_CODE", "absolute", "151", "123", "21", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHROPOS_NAME", "absolute", "344", "123", "80", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHROPOS_CODE", "absolute", "426", "123", "21", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Image02", "absolute", "796", "97", "84", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("최종학력");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRHISL_YSNO", "absolute", "864", "97", "21", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            this.addChild(obj.name, obj);

            obj = new Static("Image05", "absolute", "27", "71", "57", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "69", "71", "80", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "151", "71", "21", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "174", "71", "100", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle00", "absolute", "302", "97", "57", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("학교");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSCHL_NAME", "absolute", "344", "97", "205", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle01", "absolute", "578", "97", "57", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("전공");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMAJR_CDNM", "absolute", "646", "97", "97", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMAJR_CODE", "absolute", "745", "97", "21", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCPOS_CODE", "absolute", "646", "123", "68", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHROPOS_CODE", "absolute", "717", "123", "68", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMAJR_CODE", "absolute", "788", "123", "68", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("57");
            obj.set_text("학력현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("58");
            obj.set_text("홈 > 인사관리 > 인사현황 > 학력현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("59");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("62");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("63");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("64");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("65");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "155", "80", "25", null, null, this);
            obj.set_taborder("66");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("67");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "93", null, null, this);
            obj.set_taborder("68");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "174", "216", "6", null, null, this);
            obj.set_taborder("69");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("학력현황");
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
        this.addIncludeScript("HRMC0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMC0070.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRMC0070 학력현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.24     황치웅     Initial Created.
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
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HRMC0070"; //해당 Form에서 사용 할 Package 명 

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.edtSHRDEPT_NAME.setFocus();
        	this.cmbSHRWODN_CODE.set_value(1);

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
        	this.fnc_DatasetClear("dsHR_SCHCRR");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_SCHCRR=dsHR_SCHCRR";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_SCHCRR.setFocus();

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
        	this.fnc_DataSetCancel("dsHR_SCHCRR");
        	this.grdHR_SCHCRR.setFocus();
        	
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
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_SCHCRR", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_SCHCRR")) {
        		if (this.fnc_Message("TMM023") == false) return false;
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
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
         		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
         		sReturnString += " WRDV_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWRDV_CODE.value)); 
         		sReturnString += " WODN_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWODN_CODE.value));
         		sReturnString += " SCDN_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSCDN_CODE.value));
         		sReturnString += " SCHL_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRSCHL_NAME.value)); 
         		sReturnString += " MAJR_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMAJR_CDNM.value));
         		sReturnString += " HISL_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.chkSHRHISL_YSNO.value));
         		sReturnString += " CPOS_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCPOS_CODE.value));
         		sReturnString += " OPOS_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHROPOS_CODE.value));
         		
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
        		this.fnc_Information(this.stInformation, this.dsHR_SCHCRR.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_SCHCRR.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRWRDV_CODE,dsSHRWRDV_CODE,0";
        			arrParam[1] = "COMBO,cmbSHRWODN_CODE,dsSHRWODN_CODE,0"; 
        			arrParam[2] = "COMBO,cmbSHRSCDN_CODE,dsSHRSCDN_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
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

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 조회조건 - 부서정보조회(Popup)
        	
        		arrParam[0] = "TMM0004"; 								//Popup ID
        		arrParam[1] = ""; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRDEPT_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)	
        	
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ((obj.name == "imgHelpSHRMAJR_CODE") || (obj.name == "edtSHRMAJR_CDNM")) { // 조회조건 - 전공정보조회(Popup)	
        	
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "MAJR_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtSHRMAJR_CDNM.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRMAJR_CDNM";
        		arrParam[5] = "edtSHRMAJR_CODE,edtSHRMAJR_CDNM";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ((obj.name == "imgHelpSHRCPOS_CODE") || (obj.name == "edtSHRCPOS_NAME")) { // 조회조건 - 직급정보조회(Popup)
        	
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "CPOS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCPOS_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRCPOS_NAME";
        		arrParam[5] = "edtSHRCPOS_CODE,edtSHRCPOS_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ((obj.name == "imgHelpSHROPOS_CODE") || (obj.name == "edtSHROPOS_NAME")) { // 조회조건 - 직위정보조회(Popup)
        	
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "OPOS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtSHROPOS_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHROPOS_NAME";
        		arrParam[5] = "edtSHROPOS_CODE,edtSHROPOS_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
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
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRWODN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRWRDV_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSCDN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRCPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHROPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHROPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHROPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.chkSHRHISL_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRSCHL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSCHL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRMAJR_CDNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMAJR_CDNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRMAJR_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHROPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHROPOS_CODE.addEventHandler("oneditclick", this.edtSHRDUTY_CODE_oneditclick, this);
            this.edtSHRMAJR_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMC0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
