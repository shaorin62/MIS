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
                this.set_name("HRME0040");
                this.set_titletext("발령현황조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">APDN_CODE</Col><Col id=\"DSNAME\">dsAPDN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">WRDV_CODE</Col><Col id=\"DSNAME\">dsWRDV_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOXD", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTLV_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXTR_PLDH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADJN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_INNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_ENDD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PROC_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PROC_EMPL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CIBP_ANNU\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RTTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRCPOS_CODE", "absolute", "101", "97", "180", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHROPOS_CODE", "absolute", "347", "97", "156", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "200", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("17");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_APPOXD", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_APPOXD");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("24");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"발령구분\"/><Cell col=\"1\" text=\"발령일\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"발령종료일\"/><Cell col=\"7\" text=\"발령순번\"/><Cell col=\"8\" text=\"직급\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" text=\"경력직위년차\"/><Cell col=\"11\" text=\"직책\"/><Cell col=\"12\" text=\"직무\"/><Cell col=\"13\" text=\"퇴직사유\"/><Cell col=\"14\" text=\"근무상태\"/><Cell col=\"15\" displaytype=\"text\" text=\"겸직부서\"/><Cell col=\"16\" text=\"겸직직책\"/><Cell col=\"17\" text=\"파견부서\"/><Cell col=\"18\" displaytype=\"text\" text=\"파견지\"/><Cell col=\"19\" text=\"부서장여부\"/><Cell col=\"20\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:APDN_NAME\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:APNT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:EMPL_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:APNT_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: ;\" text=\"bind:APNT_SEQN\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CPOS_NAME\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"10\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CIBP_ANNU\"/><Cell col=\"11\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DURS_NAME\"/><Cell col=\"12\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DUTY_NAME\"/><Cell col=\"13\" displaytype=\"text\" style=\"align:left;\" text=\"bind:RTTY_NAME\"/><Cell col=\"14\" displaytype=\"text\" style=\"align:left;\" text=\"bind:WRKS_CODE\"/><Cell col=\"15\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ADJN_NAME\"/><Cell col=\"16\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ADDT_NAME\"/><Cell col=\"17\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DSPT_NAME\"/><Cell col=\"18\" displaytype=\"text\" style=\"align:left;\" text=\"bind:EXTR_PLDH\"/><Cell col=\"19\" displaytype=\"checkbox\" text=\"bind:DTMN_YSNO\"/><Cell col=\"20\" displaytype=\"text\" text=\"bind:REMK_200X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox1", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle5", "absolute", "911", "71", "70", "21", null, null, this);
            obj.set_text("직원구분");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWRDV_CODE", "absolute", "979", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displayrowcount("15");
            obj.set_index("-1");

            obj = new Static("Image0", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_text("발령기간");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "344", "71", "52", "21", null, null, this);
            obj.set_text("부서");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("Image3", "absolute", "344", "97", "52", "21", null, null, this);
            obj.set_text("직위");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "386", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("false");
            obj.set_maxlength("10");
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "468", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "491", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "618", "71", "70", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Image02", "absolute", "618", "97", "70", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("발령구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPDN_CODE", "absolute", "686", "97", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_type("search");
            obj.set_displayrowcount("15");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Calendar("calSHRDISP_STDT", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "201", "71", "14", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRDISP_ENDT", "absolute", "216", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "686", "71", "80", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "791", "71", "92", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "768", "71", "22", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Image05", "absolute", "28", "97", "70", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("직급");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCPOS_NAME", "absolute", "96", "97", "100", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCPOS_CODE", "absolute", "198", "97", "22", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHROPOS_NAME", "absolute", "386", "97", "181", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHROPOS_CODE", "absolute", "569", "97", "22", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_text("발령현황조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("38");
            obj.set_text("홈 > 인사관리 > 발령관리 > 인사발령현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("39");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("44");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("46");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("47");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("48");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("49");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "316", "61", "40", "41", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("발령현황조회");
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
        this.addIncludeScript("HRME0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRME0040.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRME0040 발령현황조회
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.14		고민주		Initial Created.
         *   2016.10.13		안윤준		수정.
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
        this.sBUTTONLIST  = "TTFFFFTF";
        this.sPACKAGENAME = "HRME0040";

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
        	this.calSHRDISP_STDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4)+ "0101");
        	this.calSHRDISP_ENDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	
        	switch(this.sUSERLAVEL) {
        		case "1":	//관리자
        			break;

        		case "2":	//소속

        			break;

        		case "3":  	//
        			break;

        		case "4":	//부서
        			this.edtSHRDEPT_NAME.set_readonly(true);
        			this.imgHelpSHRDEPT_CODE.set_enable(false);
        			this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        			this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);

        			break;

        		case "5":  //개인
        			this.imgHelpSHRDEPT_CODE.set_enable(false);
        			this.edtSHRDEPT_NAME.set_readonly(true);
        			this.imgHelpSHREMPL_NUMB.set_enable(false);
        			this.edtSHREMPL_NAME.set_readonly(true);

        			this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        			this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);

        			break;

        	}
        	
        	this.calSHRDISP_STDT.setFocus();

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
        	this.fnc_DatasetClear("dsHR_APPOXD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_APPOXD=dsHR_APPOXD";
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
        	this.fnc_DataSetCancel("dsHR_APPOXD");
        	this.grdHR_APPOXD.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_APPOXD", this);
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

        	if (this.fnc_DatasetChangeCheck("dsHR_APPOXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRDISP_STDT.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "발령기간", this.calSHRDISP_STDT);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRDISP_ENDT.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "발령기간", this.calSHRDISP_ENDT);
        	}
        	if (this.fnc_Trim(this.calSHRDISP_STDT.value) > this.fnc_Trim(this.calSHRDISP_ENDT.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "발령시작일,발령종료일", this.calSHRDISP_STDT);
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
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
        		sReturnString += " APNT_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRDISP_STDT.value));
        		sReturnString += " APNT_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRDISP_ENDT.value));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " APDN_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPDN_CODE.value));
        		sReturnString += " WRDV_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRWRDV_CODE.value));
        		sReturnString += " CPOS_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCPOS_CODE.value));
        		sReturnString += " OPOS_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHROPOS_CODE.value));

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
        		this.fnc_Information(this.stInformation, this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdHR_APPOXD.setFocus();

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRWRDV_CODE,dsWRDV_CODE,0";
        			arrParam[1] = "COMBO,cmbSHRAPDN_CODE,dsAPDN_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        }

        
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
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
        		
        	} else if ((obj.name == "imgHelpSHRCPOS_CODE") || (obj.name == "edtSHRCPOS_NAME")) { // 조회조건 - 직급정보조회(Popup)
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "CPOS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCPOS_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRCPOS_NAME";
        		arrParam[5] = "edtSHRCPOS_CODE,edtSHRCPOS_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHROPOS_CODE") || (obj.name == "edtSHROPOS_NAME")) { // 조회조건 - 직무정보조회(Popup)
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "OPOS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtSHROPOS_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHROPOS_NAME";
        		arrParam[5] = "edtSHROPOS_CODE,edtSHROPOS_NAME";
        		arrParam[6] = "0,1";
        		
        	}
        	
        	this.fnc_HelpDialogeAction(this, obj, arrParam);

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRCPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHROPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRWRDV_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRAPDN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRDISP_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRDISP_ENDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRCPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHROPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHROPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHROPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRME0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
