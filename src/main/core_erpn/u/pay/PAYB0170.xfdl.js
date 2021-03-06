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
                this.set_name("PAYB0170");
                this.set_titletext("급여처리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsWODN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMMAST", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DDUC_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REAL_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SAVE_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMDETL_A", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMDETL_D", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "156", "76", "110", "22", null, null, this);
            obj.set_taborder("27");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGP_CODE", "absolute", "156", "76", "110", "22", null, null, this);
            obj.set_taborder("28");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC_PAY", "absolute", "187", "35", "74", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("급여처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DELETE_PAY", "absolute", "264", "35", "74", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("급여삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PMDCAL", "absolute", "8", "35", "86", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("대상자생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "400", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("14");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMMAST", "absolute", "8", "128", null, null, "293", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_PMMAST");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("8");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"24\"/><Column size=\"66\"/><Column size=\"72\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"66\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"성명\"/><Cell col=\"3\" text=\"소속\"/><Cell col=\"4\" displaytype=\"text\" text=\"부서\"/><Cell col=\"5\" displaytype=\"text\" text=\"직위\"/><Cell col=\"6\" displaytype=\"text\" text=\"지급액\"/><Cell col=\"7\" displaytype=\"text\" text=\"공제액\"/><Cell col=\"8\" displaytype=\"text\" text=\"실지급액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NAME\" editimemode=\"native\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: ;\" text=\"bind:OPOS_NAME\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PAYX_AMOT\" mask=\"#,###.##\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DDUC_AMOT\" mask=\"#,###.##\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:REAL_AMOT\" mask=\"#,###.##\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" displaytype=\"text\" style=\"align: ;\" text=\"합계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PAYX_AMOT')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('DDUC_AMOT')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('REAL_AMOT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "83", "71", "80", "21", null, null, this);
            obj.set_enable("true");
            obj.set_mask("####-##-##");
            obj.set_taborder("24");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "165", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME", "absolute", "188", "71", "130", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "664", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("25");
            obj.set_cssclass("styFormSearchItem");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "746", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "769", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "388", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_taborder("26");
            obj.set_cssclass("styFormSearchItem");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "470", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "493", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWODN_CODE", "absolute", "967", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("search");
            obj.set_index("-1");

            obj = new Grid("grdPY_PMDETL_A", "absolute", null, "128", "248", "327", "25", null, this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_PMDETL_A");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("row");
            obj.set_taborder("9");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"130\"/><Column size=\"117\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"지급항목\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:EXPD_NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXPD_AMOT\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"지급총액\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('EXPD_AMOT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMDETL_D", "absolute", null, "470", "248", null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_PMDETL_D");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("row");
            obj.set_taborder("10");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"130\"/><Column size=\"116\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"공제항목\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:EXPD_NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXPD_AMOT\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"공제총액\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('EXPD_AMOT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle8", "absolute", "346", "71", "49", "21", null, null, this);
            obj.set_text("부서");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "622", "71", "49", "21", null, null, this);
            obj.set_text("사원");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "899", "71", "76", "21", null, null, this);
            obj.set_text("재직구분");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "28", "71", "63", "21", null, null, this);
            obj.set_text("지급일");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("31");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("32");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "318", "61", "40", "41", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "894", "149", "20", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "949", "455", "80", "15", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_text("급여처리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("39");
            obj.set_text("홈 > 급여관리 > 급여관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "627", "56", "128", "4", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "593", "61", "40", "41", null, null, this);
            obj.set_taborder("48");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "869", "61", "40", "41", null, null, this);
            obj.set_taborder("49");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PMDCAL_DEL", "absolute", "98", "35", "86", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("대상자삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여처리");
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
        this.addIncludeScript("PAYB0170.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0170.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0170 급여처리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.27		고민주		Initial Created.
         *   2016.10.31		안윤준		수정.
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
        this.sPACKAGENAME = "PAYB0170"; 

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
        	this.edtSHRWAGE_NAME.setFocus();

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
        	
        	this.fnc_GridCheckClear("grdPY_PMMAST","0");
        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.fnc_DatasetClear("dsPY_PMMAST,dsPY_PMDETL_A,dsPY_PMDETL_D");
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_PMMAST=dsPY_PMMAST";
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
        	
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.edtSHRWAGE_NAME);
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
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        		sReturnString += " WAGE_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value)); 
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		sReturnString += " WODN_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRWODN_CODE.value)); 
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "PAYX_DATE"));
        		sReturnString += " WAGE_CODE=" 	+ this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WAGE_CODE"));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "EMPL_NUMB"));
        		
        	}else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "PAYX_DATE"));
        		sReturnString += " WAGE_CODE=" 	+ this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WAGE_CODE"));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "EMPL_NUMB"));
        		
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
        		
        		this.dsPY_PMMAST.set_updatecontrol(true);
        		
        		var iRow = 0;
        		iRow = this.dsPY_PMMAST.findRow("EMPL_NUMB", this.sKeyValue);
        		if (iRow < 0) iRow = 0;
        		
        		this.dsPY_PMMAST.set_rowposition(iRow);	
        		this.sKeyValue = "";
        		
        		this.fnc_Information(this.stInformation, this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"));
        		 
        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_DatasetClear("dsPY_PMDETL_D");
        		var sMethodName = "SEARCH02";
        		var sInDataSet 	= "";
        		var sOutDataSet = "dsPY_PMDETL_D=dsPY_PMDETL_D";
        		var sArgument 	= this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName == "PROC01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName == "PROC02") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array(); 
        			arrParam[0] = "COMBO,cmbSHRWODN_CODE,dsWODN_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) { // 지급일조회
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRWAGE_NAME";
        		arrParam[5] = "medSHRPAYX_DATE,edtSHRWAGE_CODE,edtSHRWAGE_NAME,edtSHRWAGP_CODE";
        		arrParam[6] = "0,1,2,5";
        		
        	} else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 조회조건 - 부서정보조회(Popup)
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
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        } 

        //대상자생성 버튼
        this.btnPMDCAL_PROC_OnClick = function(obj,e){

        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.medSHRPAYX_DATE);
        	}
        	
        	if(this.fnc_Message("PAY018")){
        		
        		var sMethodName = "PROC00";
        		var sInDataSet 	= "dsPY_PMMAST=dsPY_PMMAST";
        		var sOutDataSet = "dsPY_PMMAST=dsPY_PMMAST";
        		var sArgument 	= " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        			sArgument  += " action=" 	+ this.fnc_Quote(sMethodName);
        			sArgument  += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        			sArgument  += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value));   
        			sArgument  += " SAVE_TYPE=" + this.fnc_Quote(this.fnc_Trim("0"));
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");			
        	
        	}

        }

        //대상자삭제 버튼
        this.btnPMDCAL_PROC_DEL_OnClick = function(obj,e) {

        	var iChk = this.dsPY_PMMAST.getCaseCount("CHK=='1'");
        	
        	if(iChk > 0){
        		
        		var sQuestionText = ""
        		sQuestionText = "대상자삭제";

        		if(this.fnc_Message("PAY002",sQuestionText)){
        			
        			var sMethodName = "PROC02";
        			var sInDataSet 	= "dsPY_PMMAST=dsPY_PMMAST:U";
        			var sOutDataSet = "dsPY_PMMAST=dsPY_PMMAST";
        			var sArgument  	= " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        				sArgument  += " action=" 	+ this.fnc_Quote(sMethodName);
        				sArgument  += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        				sArgument  += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value)); 
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");			
        	
        		}
        	}else{
        		this.fnc_Message("TMM010");
        		
        	}	
        }
         
        //급여처리 버튼
        this.btn_PROC_PAY_onclick = function(obj,e){
        	this.fn_ProcPay("1");

        }

        //급여삭제 버튼
        this.btnDELETE_PAY_OnClick = function(obj,e){
        	this.fn_ProcPay("-1");

        }

        //급여처리 호출
        this.fn_ProcPay = function(sSaveType){

        	var iChk = this.dsPY_PMMAST.getCaseCount("CHK=='1'");
        	
        	if(iChk > 0){
        		
        		var sQuestionText = ""
        		if(sSaveType=="1"){
        			sQuestionText = "급여";
        		}else{
        			sQuestionText = "급여삭제";
        		}
        		if(this.fnc_Message("PAY002",sQuestionText)){
        			
        			this.sKeyValue = this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition,"EMPL_NUMB");
        			this.dsPY_PMMAST.set_updatecontrol(false);
        			
        			var sMethodName = "PROC01";
        			var sInDataSet 	= "dsPY_PMMAST=dsPY_PMMAST:U";
        			var sOutDataSet = "dsPY_PMMAST=dsPY_PMMAST";
        			var sArgument  	= " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        				sArgument  += " action=" 	+ this.fnc_Quote(sMethodName);
        				sArgument  += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value)); 
        				sArgument  += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value)); 
        				sArgument  += " WAGP_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGP_CODE.value)); 
        				sArgument  += " UPDT_IDXX=" + this.fnc_Quote(this.fnc_Trim(application.GBL_USERID)); 
        				sArgument  += " SAVE_TYPE=" + this.fnc_Quote(sSaveType);  
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");			
        	
        		}
        	}else{
        		this.fnc_Message("TMM010");
        		
        	}
        	
        }

        this.fn_KeyFieldDisible = function(obj) {
        	
        	if ( this.dsPY_PMMAST.rowcount < 1 ) return;
        	
        	this.fnc_DatasetClear("dsPY_PMDETL_A");
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_PMDETL_A=dsPY_PMDETL_A";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        this.grdPY_PMMAST_onheadclick = function(obj,e){
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);

        } 

        //지급항목 클릭시 급여처리LOG관리 화면 호출
        this.grdPY_PMDETL_A_oncelldblclick = function(obj,e) {
        	
            var sName       = "PAYB0180";
            var sFormURL    = "pay::PAYB0180.xfdl";
            var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
                sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
                sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
                sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
                sOpenStyle += ",width=750";       //현재 반응 없음
                sOpenStyle += ",height=500";      //현재 반응 없음
                sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
                sOpenStyle += ",titletext=";      //Form Title여부
                sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
                sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부

            var objArgumentList = { sPAYX_DATE : this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "PAYX_DATE"))
        						  , sWAGE_CODE : this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WAGE_CODE"))
        						  , sWORK_CNTT : this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WORK_CNTT"))
                                  , sEMPL_NUMB : this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "EMPL_NUMB"))
                                  , sEMPL_NAME : this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "EMPL_NAME"))
                                  , sEXPD_CODE : this.fnc_Trim(this.dsPY_PMDETL_A.getColumn(this.dsPY_PMDETL_A.rowposition, "EXPD_CODE"))
                                  , sEXPD_NAME : this.fnc_Trim(this.dsPY_PMDETL_A.getColumn(this.dsPY_PMDETL_A.rowposition, "EXPD_NAME"))
            };
            
            this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "");

        }

        //공제항목 클릭시 급여처리LOG관리 화면 호출
        this.grdPY_PMDETL_D_oncelldblclick = function(obj,e) {
            
            var sName       = "PAYB0180";
            var sFormURL    = "pay::PAYB0180.xfdl";
            var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
                sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
                sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
                sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
                sOpenStyle += ",width=750";       //현재 반응 없음
                sOpenStyle += ",height=500";      //현재 반응 없음
                sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
                sOpenStyle += ",titletext=";      //Form Title여부
                sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
                sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
            
            var objArgumentList = { sPAYX_DATE : this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "PAYX_DATE"))
        						  , sWAGE_CODE : this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WAGE_CODE"))
        						  , sWORK_CNTT : this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WORK_CNTT"))
                                  , sEMPL_NUMB : this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "EMPL_NUMB"))
                                  , sEMPL_NAME : this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "EMPL_NAME"))
                                  , sEXPD_CODE : this.fnc_Trim(this.dsPY_PMDETL_D.getColumn(this.dsPY_PMDETL_D.rowposition, "EXPD_CODE"))
                                  , sEXPD_NAME : this.fnc_Trim(this.dsPY_PMDETL_D.getColumn(this.dsPY_PMDETL_D.rowposition, "EXPD_NAME"))
            };
            
            
            this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_PMMAST.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRWAGP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGP_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_PROC_PAY.addEventHandler("onclick", this.btn_PROC_PAY_onclick, this);
            this.btn_DELETE_PAY.addEventHandler("onclick", this.btnDELETE_PAY_OnClick, this);
            this.btn_PMDCAL.addEventHandler("onclick", this.btnPMDCAL_PROC_OnClick, this);
            this.grdPY_PMMAST.addEventHandler("onheadclick", this.grdPY_PMMAST_onheadclick, this);
            this.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRWODN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdPY_PMDETL_A.addEventHandler("oncelldblclick", this.grdPY_PMDETL_A_oncelldblclick, this);
            this.grdPY_PMDETL_D.addEventHandler("oncelldblclick", this.grdPY_PMDETL_D_oncelldblclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btn_PMDCAL_DEL.addEventHandler("onclick", this.btnPMDCAL_PROC_DEL_OnClick, this);

        };

        this.loadIncludeScript("PAYB0170.xfdl");
        this.loadPreloadList();
       
    };
}
)();
