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
                this.set_name("PAYC0010");
                this.set_titletext("급여지급현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_ALLDED", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EDIT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPD_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWX_SPAN\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"COLX_INDX\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"BACK_COLR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMMAST", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Rows><Row><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows><Row><Col id=\"CODEID\">GNDR_CODE</Col><Col id=\"DSNAME\">dsGNDR_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "184", "32", "68", "22", null, null, this);
            obj.set_taborder("37");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMMAST_EMPL", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_binddataset("dsPY_PMMAST");
            obj.set_cellmovingtype("none");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"68\" band=\"left\"/><Column size=\"67\" band=\"left\"/><Column size=\"105\" band=\"left\"/><Column size=\"105\" band=\"left\"/><Column size=\"105\" band=\"left\"/><Column size=\"60\" band=\"left\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"성명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소속\"/><Cell col=\"3\" rowspan=\"2\" text=\"부서\"/><Cell col=\"4\" rowspan=\"2\" text=\"직위\"/><Cell col=\"5\" rowspan=\"2\" text=\"성별\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: ;\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" style=\"align: ;\" text=\"bind:GNDR_NAME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("54");
            obj.set_text("급여지급현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("55");
            obj.set_text("홈 > 급여관리 > 급여관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("56");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("57");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("58");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h 60");
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
            obj.set_taborder("66");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("67");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMMAST_DEPT", "absolute", "1210", "154", null, null, "-1177", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("76");
            obj.set_binddataset("dsPY_PMMAST");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"105\" band=\"left\"/><Column size=\"105\" band=\"left\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"소속\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("77");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "248", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_CODE00", "absolute", "201", "71", "68", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCLSD_CODE", "absolute", "445", "97", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Image1", "absolute", "377", "97", "68", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle9", "absolute", "28", "71", "63", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_text("지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "178", "71", "22", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME", "absolute", "201", "71", "148", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("stDEPT_CODE", "absolute", "377", "71", "49", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "445", "71", "80", "21", null, null, this);
            obj.set_taborder("87");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "527", "71", "22", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "550", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stEMPL_NUMB", "absolute", "678", "71", "49", "21", null, null, this);
            obj.set_taborder("90");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "720", "71", "80", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "802", "71", "22", "21", null, null, this);
            obj.set_taborder("92");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "825", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "644", "56", "128", "4", null, null, this);
            obj.set_taborder("94");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("95");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "65", null, null, this);
            obj.set_taborder("96");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "349", "61", "40", "41", null, null, this);
            obj.set_taborder("97");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Image00", "absolute", "28", "97", "68", "21", null, null, this);
            obj.set_taborder("98");
            obj.set_text("조회조건");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSHRQUERY_TYPE", "absolute", "96", "97", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoSHRQUERY_TYPE_innerdataset = new Dataset("rdoSHRQUERY_TYPE_innerdataset", this.rdoSHRQUERY_TYPE);
            rdoSHRQUERY_TYPE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">부서별</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">총계</Col></Row></Rows>");
            obj.set_innerdataset(rdoSHRQUERY_TYPE_innerdataset);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new PopupDiv("popINSERT", "absolute", "1213", "39", "322", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "304", "39", null, null, this.popINSERT);
            obj.set_taborder("35");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle", "absolute", "29", "18", "70", "21", null, null, this.popINSERT);
            obj.set_taborder("39");
            obj.set_text("지급조서");
            obj.set_cssclass("styFormSearchCapBe");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Radio("Radio01", "absolute", "100", "19", "186", "21", null, null, this.popINSERT);
            this.popINSERT.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.popINSERT.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">개인별</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">부서별</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">총계</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Button("btnPrint", "absolute", "186", "56", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("42");
            obj.set_text("출력");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "251", "56", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("43");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            obj.style.set_imagealign("left");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1214", "32", "8", "92", null, null, this);
            obj.set_taborder("100");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "1526", "32", "8", "92", null, null, this);
            obj.set_taborder("101");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1210", "40", "182", "8", null, null, this);
            obj.set_taborder("102");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1210", "119", "294", "8", null, null, this);
            obj.set_taborder("103");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Image02", "absolute", "678", "97", "49", "21", null, null, this);
            obj.set_taborder("104");
            obj.set_text("성별");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRGNDR_CODE", "absolute", "721", "97", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchCombo");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 322, 90, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여지급현황");
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
        this.addIncludeScript("PAYC0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PAYC0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PAYC0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:   PAYC0010 급여지급현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.29     박철영     Initial Created.
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
        //include "script::lib_script_ubireport.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTT";
        this.sPACKAGENAME = "PAYC0010";

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

            if (!this.fn_SearchItemCheck()) return;
            this.fnc_DatasetClear("dsPY_PMMAST,dsPY_ALLDED");

            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_ALLDED=dsPY_ALLDED dsPY_PMMAST=dsPY_PMMAST";
            var sArgument   = this.fn_CreateArgument(sMethodName);
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
        		
        	if (!this.fn_SearchItemCheck()) return;
        	
        	if ( this.rdoSHRQUERY_TYPE.value != '3') {
        		if( this.dsPY_PMMAST.getRowCount() < 1 ){
        			return this.fnc_Message("TMM141");
        		}
        	}
        	
        	var	params   =  "PAYX_DATE#"  + this.fnc_Trim(this.medSHRPAYX_DATE.value);  // 지급일
        		params  +=  "#WAGE_CODE#" + this.fnc_Trim(this.edtSHRWAGE_CODE.value);  // 급여코드
        	    params  +=  "#WAGE_NAME#" + this.fnc_Trim(this.edtSHRWAGE_NAME.value);  // 제목	
        	    params  +=  "#EMPL_NUMB#" + this.fnc_Trim(this.edtSHREMPL_NUMB.value);  // 사번	
        	    params  +=  "#DEPT_CODE#" + this.fnc_Trim(this.edtSHRDEPT_CODE.value);  // 부서	
        	    params  +=  "#CLSD_CODE#" + this.fnc_Trim(this.cmbSHRCLSD_CODE.value);  // 임원
        	    params  +=  "#GNDR_CODE#" + this.fnc_Trim(this.cmbSHRGNDR_CODE.value);  // 성별
        	    	
        	var dataref = new Array();
        	
        	if (this.rdoSHRQUERY_TYPE.value == '1') {
        		var reportfile = "/pay/PAYC0010R01.jrf";
        		
        	} else if (this.rdoSHRQUERY_TYPE.value == '2') {
        		var reportfile = "/pay/PAYC0010R02.jrf";
        		
        	} else {
        		var reportfile = "/pay/PAYC0010R03.jrf";
        	}
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
        	
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
            if (this.fnc_Length(this.fnc_Trim(this.edtSHRWAGE_CODE.value)) < 1) {
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
                sReturnString += " PAYX_DATE="  + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value));
                sReturnString += " WAGE_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value));
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
                sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
                sReturnString += " CLSD_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCLSD_CODE.value));
                sReturnString += " GNDR_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRGNDR_CODE.value));
                sReturnString += " QUERY_TYPE=" + this.fnc_Quote(this.fnc_Trim(this.rdoSHRQUERY_TYPE.value));

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
        		if ( this.rdoSHRQUERY_TYPE.value == 1 ) {
        			this.fnc_GridColumnAppendLine2(this.grdPY_PMMAST_EMPL, this.dsPY_ALLDED, 4);
        			this.grdPY_PMMAST_EMPL.set_visible(true);
        			this.grdPY_PMMAST_DEPT.set_visible(false);
        			
        		} else {
        			this.fnc_GridColumnAppendLine2(this.grdPY_PMMAST_DEPT, this.dsPY_ALLDED, 2);
        			this.grdPY_PMMAST_EMPL.set_visible(false);
        			this.grdPY_PMMAST_DEPT.set_visible(true);
        			this.grdPY_PMMAST_DEPT.set_left(8);
        			this.grdPY_PMMAST_DEPT.set_right(25);
        			
        		}
                
                this.fnc_Information(this.stInformation, this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                this.fnc_Message("TMM018", this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"));

            } else if (sMethodName == "GetCommCode") {
                var arrParam = new Array();
                    arrParam[0] = "COMBO,cmbSHRCLSD_CODE,dsCLSD_CODE,0";
                    arrParam[1] = "COMBO,cmbSHRGNDR_CODE,dsGNDR_CODE,0";
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
                
            } else if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) { // 급여일지 조회 팝업
                arrParam[0] = "PAY0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRWAGE_NAME";
                arrParam[5] = "medSHRPAYX_DATE,edtSHRWAGE_CODE,edtSHRWAGE_NAME";
                arrParam[6] = "0,1,2";
               
            }
            
            this.fnc_HelpDialogeAction(this, obj, arrParam);
             

        }

        /*-----------------------+
         |  조회조건 변경 시  |
         +------------------------*/
        this.rdoSHRQUERY_TYPE_onitemchanged = function(obj,e) {
        	if ( e.postvalue == e.prevalue ) return;
        	this.fnc_DatasetClear("dsPY_PMMAST,dsPY_ALLDED");
        	
        	if ( e.postvalue == 1 ) {
        		this.imgHelpSHRDEPT_CODE.set_enable(true);
        		this.edtSHRDEPT_NAME.set_enable(true);
        		this.imgHelpSHREMPL_NUMB.set_enable(true);
        		this.edtSHREMPL_NAME.set_enable(true);
        		this.edtSHRDEPT_CODE.set_value("");
        		this.edtSHRDEPT_NAME.set_value("");
        		this.edtSHREMPL_NUMB.set_value("");
        		this.edtSHREMPL_NAME.set_value("");		
        		this.cmbSHRGNDR_CODE.set_enable(true);
        		this.div_ButtonList.btnSearch.set_enable(true);
        		
        	} else if ( e.postvalue == 2 ) {
        		this.imgHelpSHRDEPT_CODE.set_enable(true);
        		this.edtSHRDEPT_NAME.set_enable(true);
        		this.imgHelpSHREMPL_NUMB.set_enable(false);
        		this.edtSHREMPL_NAME.set_enable(false);
        		this.edtSHRDEPT_CODE.set_value("");
        		this.edtSHRDEPT_NAME.set_value("");
        		this.edtSHREMPL_NUMB.set_value("");
        		this.edtSHREMPL_NAME.set_value("");
        		this.cmbSHRGNDR_CODE.set_enable(false);
        		this.div_ButtonList.btnSearch.set_enable(true);
        		
        	} else {
        		this.fnc_Message("TMM300", "인쇄만 가능합니다.")
        		this.imgHelpSHREMPL_NUMB.set_enable(false);
        		this.edtSHREMPL_NAME.set_enable(false);
        		this.imgHelpSHRDEPT_CODE.set_enable(false);
        		this.edtSHRDEPT_NAME.set_enable(false);
        		this.edtSHRDEPT_CODE.set_value("");
        		this.edtSHRDEPT_NAME.set_value("");
        		this.edtSHREMPL_NUMB.set_value("");
        		this.edtSHREMPL_NAME.set_value("");
        		this.cmbSHRGNDR_CODE.set_enable(false);
        		this.div_ButtonList.btnSearch.set_enable(false);
        		
        	}
        	this.fnc_Information(this.stInformation, this.dsPY_PMMAST.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
            
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPY_PMMAST_EMPL.addEventHandler("onheadclick", this.grdPY_PMMAST_OnHeadClick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdPY_PMMAST_DEPT.addEventHandler("onheadclick", this.grdPY_PMMAST_OnHeadClick, this);
            this.edtSHRWAGE_CODE00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE00.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRCLSD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.rdoSHRQUERY_TYPE.addEventHandler("onitemchanged", this.rdoSHRQUERY_TYPE_onitemchanged, this);
            this.popINSERT.btnPrint.addEventHandler("onclick", this.fn_Print2, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.popINSERT_btnClose_onclick, this);
            this.cmbSHRGNDR_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYC0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
