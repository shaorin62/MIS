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
                this.set_name("TRMA0020");
                this.set_titletext("자금운용계획현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_MONEPL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EXCE_GRUP\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"PROV_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"MONE_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"DECI_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"FIND_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEXCE_GUBN", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEXCE_GRUP", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGROUP_DATA", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EXCE_GRUP\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GRUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"EXCE_GUBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_INOU\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CNT\" type=\"STRING\" size=\"22\" prop=\"COUNT\"/><Column id=\"FIND_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MONE_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECI_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LINE_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORD1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORD2\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBEFORE_DATA", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BEFO_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCrossTab", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCrossTab1", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBaseColumn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_BFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHEAD_DATA", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROV_DATE\" size=\"22\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHEAD_DATA1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LAST_DATE\" size=\"22\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_MONEPL1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EXCE_GRUP\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"PROV_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"LAST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"MONE_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"DECI_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"FIND_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GRUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GUBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_NO\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGROUP_DATA1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EXCE_GRUP\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GRUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"EXCE_GUBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_INOU\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CNT\" type=\"STRING\" size=\"22\" prop=\"COUNT\"/><Column id=\"FIND_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MONE_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECI_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LINE_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORD1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORD2\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCrossTabTmp1", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCrossTabTmp", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_RESULT1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EXCE_GRUP\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GRUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"EXCE_GUBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_INOU\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CNT\" type=\"STRING\" size=\"22\" prop=\"count\"/><Column id=\"FIND_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORD1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORD2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C1_MONE_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C1_PROV_DATE\" type=\"STRING\" size=\"22\"/><Column id=\"C2_MONE_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C2_PROV_DATE\" type=\"STRING\" size=\"22\"/><Column id=\"C3_MONE_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C3_PROV_DATE\" type=\"STRING\" size=\"22\"/><Column id=\"C4_MONE_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C4_PROV_DATE\" type=\"STRING\" size=\"22\"/><Column id=\"C5_MONE_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C5_PROV_DATE\" type=\"STRING\" size=\"22\"/><Column id=\"C6_MONE_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C6_PROV_DATE\" type=\"STRING\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRINT_HEAD1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"C1\" type=\"STRING\" size=\"256\"/><Column id=\"C2\" type=\"STRING\" size=\"256\"/><Column id=\"C3\" type=\"STRING\" size=\"256\"/><Column id=\"C4\" type=\"STRING\" size=\"256\"/><Column id=\"C5\" type=\"STRING\" size=\"256\"/><Column id=\"C6\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBEFORE_DETAIL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"ACNT_NUMB\" type=\"STRING\" size=\"30\"/><Column id=\"SLIP_AMNT_BEF\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AMNT_IN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AMNT_OUT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORD1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORD2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BICNET_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DIFF_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GROUP_CNT\" type=\"STRING\" size=\"22\" prop=\"COUNT\"/><Column id=\"DESC_REMK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "28", "71", "86", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static03", "absolute", "271", "71", "76", "21", null, null, this);
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPROV_DATE1", "absolute", "341", "71", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static15", "absolute", "442", "71", "14", "21", null, null, this);
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPROV_DATE2", "absolute", "457", "71", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Tab("Tab0", "absolute", "8", "113", null, null, "25", "15", this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("TabD1", this.Tab0);
            obj.set_text("일별운영계획");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdCrossTab", "absolute", "10", "25", null, null, "10", "10", this.Tab0.TabD1);
            obj.set_taborder("0");
            obj.set_binddataset("dsCrossTab");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj.set_cssclass("styGrid01");
            obj.getSetter("nosort").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\" band=\"left\"/><Column size=\"300\" band=\"left\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"대분류\"/><Cell col=\"1\" text=\"지급구분\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:EXCE_GRUP_NAME\" suppress=\"1\" combodataset=\"dsEXCE_GRUP\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align:EXPR(dataset.getRowLevel(currow)==0 ? &quot;left&quot; : &quot;center&quot;);\" text=\"bind:EXCE_GUBN_NAME\" expr=\"expr:Eco.decode(dataset.getRowLevel(currow), 1, '소계', EXCE_GUBN_NAME)\" combodataset=\"dsEXCE_GUBN\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/></Band></Format></Formats>");
            this.Tab0.TabD1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", "262", "21", null, null, this.Tab0.TabD1);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.TabD1.addChild(obj.name, obj);
            obj = new Tabpage("TabD2", this.Tab0);
            obj.set_text("종합운영계획");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdCrossTab1", "absolute", "10", "25", null, null, "10", "10", this.Tab0.TabD2);
            obj.set_taborder("0");
            obj.set_binddataset("dsCrossTab1");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj.getSetter("nosort").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\" band=\"left\"/><Column size=\"300\" band=\"left\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"대분류\"/><Cell col=\"1\" text=\"지급구분\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:EXCE_GRUP_NAME\" suppress=\"1\" combodataset=\"dsEXCE_GRUP\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align:EXPR(dataset.getRowLevel(currow)==0 ? &quot;left&quot; : &quot;center&quot;);\" text=\"bind:EXCE_GUBN_NAME\" expr=\"expr:Eco.decode(dataset.getRowLevel(currow), 1, '소계', EXCE_GUBN_NAME)\" suppress=\"2\" combodataset=\"dsEXCE_GUBN\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/></Band></Format></Formats>");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", "262", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.TabD2.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("자금운용계획현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("14");
            obj.set_text("홈 >회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("15");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("23");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("24");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.TabD1,
            	//-- Layout function
            	function(p) {
            		p.set_text("일별운영계획");

            	}
            );
            this.Tab0.TabD1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.TabD2,
            	//-- Layout function
            	function(p) {
            		p.set_text("종합운영계획");

            	}
            );
            this.Tab0.TabD2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자금운용계획현황");
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
        this.addIncludeScript("TRMA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRMA0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMA0020 자금운용계획현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		김준수		Initial Created.
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
         ********************************************************************************INBUS*CO*KR********/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST    = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME   = "TRMA0020";
        this.sGRID_FORMATS  = "";
        this.sGRID_FORMATS1 = "";

        this.iGRID_CELLCNT 	= 0;
        this.iGRID_CELLCNT1	= 0;

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
         /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);

        	var styleObj = this.Tab0.TabD1.grdCrossTab.getCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.TabD1.grdCrossTab, "EXCE_GRUP_NAME"), "style");
        		styleObj.set_background(application.GBL_COLORNORMAL);
        		styleObj.set_background2(application.GBL_COLORNORMAL);
        		styleObj = this.Tab0.TabD2.grdCrossTab1.getCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.TabD2.grdCrossTab1, "EXCE_GRUP_NAME"), "style");
        		styleObj.set_background(application.GBL_COLORNORMAL);
        		styleObj.set_background2(application.GBL_COLORNORMAL);
        	
        	this.fn_UserGridSetting();

        }
        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e) {

        	if (!this.fn_SearchItemCheck()) return;

        	this.fn_Search1();
        	
        	this.fnc_DatasetClear("dsTA_MONEPL,dsBEFORE_DETAIL,dsHEAD_DATA,dsTA_MONEPL1,dsHEAD_DATA1");
        	var sMethodName  = "SEARCH00";
        	var sInDataSet   = "";
        	var sOutDataSet  = "dsTA_MONEPL=dsTA_MONEPL dsBEFORE_DETAIL=dsBEFORE_DATA dsHEAD_DATA=dsHEAD_DATA ";
        		sOutDataSet += "dsTA_MONEPL1=dsTA_MONEPL1 dsHEAD_DATA1=dsHEAD_DATA1";
        	var sArgument    = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.cmbSHRACCT_UNIT.setFocus();
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {
        	// 기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        
        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        	if (this.dsTA_RESULT1.getRowCount() <= 0) {
        		this.fnc_Message("TMM125", "조회 후 인쇄하세요");
        		return;
        	}

        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/";
        	application.GBL_RPTFILENAME = "trma0020r1.jrf";

        	application.GBL_RPTARGUMENT = "sArg001," + this.fnc_Trim(this.calSHRPROV_DATE1.value) + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + "sArgC1," + this.fnc_Trim(this.dsPRINT_HEAD1.getColumn(0, "C1")) + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + "sArgC2," + this.fnc_Trim(this.dsPRINT_HEAD1.getColumn(0, "C2")) + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + "sArgC3," + this.fnc_Trim(this.dsPRINT_HEAD1.getColumn(0, "C3")) + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + "sArgC4," + this.fnc_Trim(this.dsPRINT_HEAD1.getColumn(0, "C4")) + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + "sArgC5," + this.fnc_Trim(this.dsPRINT_HEAD1.getColumn(0, "C5")) + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + "sArgC6," + this.fnc_Trim(this.dsPRINT_HEAD1.getColumn(0, "C6"));

        
        	application.GBL_RPTDATASET = "dsTA_RESULT1";
        	application.GBL_PRINT      = "Y";

        	var sOpenStyle = "resizable=true openalign=\"center middle\" ";
        	application.dialog("자금운용계획현황", "popup::comReportViewer.xfdl", this, "", sOpenStyle);
        }

        
        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_MONEPL",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRPROV_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일자", this.calSHRPROV_DATE1);
        	}

        	if (this.fnc_SubStr(this.calSHRPROV_DATE1.value, 0, 4) < "2015") {
        		return this.fnc_SearchCheckPostAction("TMM125", "기준일자는 2015 년 이후부터 조회해야 합니다", this.calSHRPROV_DATE1);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRPROV_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일자", this.calSHRPROV_DATE2);
        	}

        	if (this.fnc_SubStr(this.calSHRPROV_DATE2.value, 0, 4) < "2015") {
        		return this.fnc_SearchCheckPostAction("TMM125", "기준일자는 2015 년 이후부터 조회해야 합니다", this.calSHRPROV_DATE2);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	var sQuestionText  = " 지급구분 (" + this.fnc_Trim(this.dsTA_MONEPL.getColumn(this.dsTA_MONEPL.rowposition, "EXCE_GUBN")) + ")";
        		sQuestionText += " 순번 ("     + this.fnc_Trim(this.dsTA_MONEPL.getColumn(this.dsTA_MONEPL.rowposition, "EXCE_SEQN")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_MONEPL")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var row = 0; row < this.dsTA_MONEPL.getRowCount(); row++)  {

        		if (this.fnc_ToUpper(this.dsTA_MONEPL.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MONEPL.getColumn(row, "EXCE_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지급구분", this.dsTA_MONEPL, row, this.Tab0.TabD1.grdCrossTab, "EXCE_GUBN");
        		}

        		if (nexacro.toNumber(this.fnc_Trim(this.dsTA_MONEPL.getColumn(row, "MONE_AMNT")), 0) == 0) {
        			return this.fnc_CheckPostAction("TMM072", "금액", this.dsTA_MONEPL, row, this.Tab0.TabD1.grdCrossTab, "MONE_AMNT");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MONEPL.getColumn(i, "REMK_NOTE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "내용", this.dsTA_MONEPL, row, this.Tab0.TabD1.grdCrossTab, "REMK_NOTE");
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
        	
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.cmbSHRACCT_UNIT.value); //회계단위
        		sReturnString += " PROV_DATE1=" + this.fnc_Quote(this.calSHRPROV_DATE1.value); //기준일자
        		sReturnString += " PROV_DATE2=" + this.fnc_Quote(this.calSHRPROV_DATE2.value); //기준일자
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm="    	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.cmbSHRACCT_UNIT.value); //회계단위
        		sReturnString += " PROV_DATE1=" + this.fnc_Quote(this.calSHRPROV_DATE1.value); //기준일자
        		sReturnString += " PROV_DATE2=" + this.fnc_Quote(this.calSHRPROV_DATE2.value); //기준일자
        	
        	}

        	return sReturnString;

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	} else {
        		this.fn_PostProcess(sMethodName);
        	}

        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		
        		var iBefo_Amnt = 0;

        		for (var row = 0; row < this.dsBEFORE_DETAIL.rowcount; row++) {
        			if (this.dsBEFORE_DETAIL.getColumn(row, "MAIN_CODE") == "FA280110" || this.dsBEFORE_DETAIL.getColumn(row, "MAIN_CODE") == "FA280120") {
        				iBefo_Amnt += nexacro.toNumber(this.dsBEFORE_DETAIL.getColumn(row, "SLIP_AMNT_BEF"), 0);
        			}
        		}
        		this.dsBEFORE_DATA.clearData();
        		this.dsBEFORE_DATA.addRow();
        		this.dsBEFORE_DATA.setColumn(0, "BEFO_AMNT", iBefo_Amnt);

        		this.fn_Grid();
        		this.fn_Grid1();
        		
        		this.fnc_Information(this.Tab0.TabD1.stInformation, this.dsCrossTab.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.Tab0.TabD2.stInformation, this.dsCrossTab1.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCrossTab.rowcount);
        		this.dsTA_RESULT1.clearData();
        		
        		for (var row = 0; row < this.dsCrossTab1.rowcount; row++) {

        			if (this.fnc_Length(this.fnc_Trim(this.dsCrossTab1.getColumn(row, "EXCE_GRUP"))) == 0) continue;

        			var iRow = this.dsTA_RESULT1.addRow();
        			this.dsTA_RESULT1.setColumn(iRow, "EXCE_GRUP", this.dsCrossTab1.getColumn(row, "EXCE_GRUP"));
        			this.dsTA_RESULT1.setColumn(iRow, "EXCE_GRUP_NAME", this.dsCrossTab1.getColumn(row, "EXCE_GRUP_NAME"));
        			this.dsTA_RESULT1.setColumn(iRow, "EXCE_GUBN", this.dsCrossTab1.getColumn(row, "EXCE_GUBN"));
        			this.dsTA_RESULT1.setColumn(iRow, "EXCE_GUBN_NAME", this.dsCrossTab1.getColumn(row, "EXCE_GUBN_NAME"));
        			this.dsTA_RESULT1.setColumn(iRow, "BANK_INOU", this.dsCrossTab1.getColumn(row, "BANK_INOU"));
        			this.dsTA_RESULT1.setColumn(iRow, "GROUP_CNT", this.dsCrossTab1.getColumn(row, "GROUP_CNT"));
        			this.dsTA_RESULT1.setColumn(iRow, "FIND_KEY", this.dsCrossTab1.getColumn(row, "FIND_KEY"));
        			this.dsTA_RESULT1.setColumn(iRow, "LINE_NO", this.dsCrossTab1.getColumn(row, "LINE_NO"));
        			this.dsTA_RESULT1.setColumn(iRow, "SORT_ORD1", this.dsCrossTab1.getColumn(row, "SORT_ORD1"));
        			this.dsTA_RESULT1.setColumn(iRow, "SORT_ORD2", this.dsCrossTab1.getColumn(row, "SORT_ORD2"));

        			for (var row2 = 1; row2 <= 6; row2++) {
        				var sheadDate = this.dsPRINT_HEAD1.getColumn(0, "C" + row2);
        				
        				if (this.fnc_Length(sheadDate) > 0) {
        				  this.dsTA_RESULT1.setColumn(iRow, "C" + row2 + "_MONE_AMNT", this.dsCrossTab1.getColumn(row, sheadDate + "_MONE_AMNT"));
        				  this.dsTA_RESULT1.setColumn(iRow, "C" + row2 + "_PROV_DATE", this.dsCrossTab1.getColumn(row, sheadDate + "_PROV_DATE"));
        				}
        			}
        		}
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Message("TMM125", "일계획가져오기 처리 되었습니다..");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	var nRow = e.newrow;
        	var nOldRow = e.oldrow;

        	if (nRow == -1)  return;
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj) {

        }

        
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        this.fn_UserGridSetting = function(){

        	// 그리드의 기본 포멧을 보관한다.
        	this.sGRID_FORMATS 	= this.Tab0.TabD1.grdCrossTab.formats;
        	this.sGRID_FORMATS1 = this.Tab0.TabD2.grdCrossTab1.formats;
        	
        	this.iGRID_CELLCNT 	= this.Tab0.TabD1.grdCrossTab.getCellCount("body");
        	this.iGRID_CELLCNT1 = this.Tab0.TabD2.grdCrossTab1.getCellCount("body");
        	
        	var sServerDateTime = this.fnc_GetServerDateTime("DATE");
        	
        	var PROV_DAFR = sServerDateTime;
        	
        	if (this.fnc_SubStr(PROV_DAFR, 6, 2) <= '15'){
        		PROV_DAFR = this.fnc_SubStr(PROV_DAFR, 0, 6) + '15';
        	} else {
        		PROV_DAFR = this.fnc_SubStr(PROV_DAFR, 0, 6) + this.fnc_GetLastDayOfMonth(PROV_DAFR);
        	}
        	
        	this.calSHRPROV_DATE1.set_value(this.fnc_SubStr(sServerDateTime));
        	this.calSHRPROV_DATE2.set_value(this.fnc_SubStr(PROV_DAFR));
        	this.cmbSHRACCT_UNIT.setFocus();
         }
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------------+
         |  대구분조회  |
         +---------------------------*/
        this.fn_Search1 = function (obj,e) {

        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.fnc_DatasetClear("dsGROUP_DATA,dsGROUP_DATA1");
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsGROUP_DATA=dsGROUP_DATA dsGROUP_DATA1=dsGROUP_DATA1";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	this.cmbSHRACCT_UNIT.setFocus();
        }

        /*--------------------------+
         |  그리드만들기  |
         +---------------------------*/
        this.fn_Grid = function () {

        	this.dsCrossTab.clearData();
        	this.dsCrossTab.set_keystring("");
        	
        	this.Tab0.TabD1.grdCrossTab.set_enableredraw(false);
        	this.dsCrossTab.set_enableevent(false);

        //	this.Tab0.TabD1.grdCrossTab.set_formats(this.sGRID_FORMATS);

        	for (var i = this.Tab0.TabD1.grdCrossTab.getCellCount("body"); i > this.iGRID_CELLCNT; i--) {
        		this.Tab0.TabD1.grdCrossTab.deleteContentsCol(this.Tab0.TabD1.grdCrossTab.getCellCount("body") - 1);
        	}
        	
        	this.dsCrossTab.copyData(this.dsGROUP_DATA, true);

        	var beforeCol = 1;
        	var beforeHeadCell = 1;
        	var beforeBodyCell = 1;
        	var beforeSumCell = 0;

        	// 자금계획일자 기준으로 dsCrossTab 데이터셋의 컬럼을 추가한다.
        	for (var i = 0; i < this.dsHEAD_DATA.rowcount; i++) {
        		
        		var sProv_Date 	= this.dsHEAD_DATA.getColumn(i, "PROV_DATE");	// 자금계획일자
        		var sColumnName	= sProv_Date;
        		var columnInfo 	= this.dsCrossTab.colinfos[sColumnName + "_MONE_AMNT"];
        		
        		if (columnInfo == null) {
        			// dsCrossTab 데이터셋의 컬럼추가
        			this.dsCrossTab.addColumn(sColumnName + "_MONE_AMNT", "BIGDECIMAL", 22);
        			this.dsCrossTab.addColumn(sColumnName + "_DECI_AMNT", "BIGDECIMAL", 22);

        			this.Tab0.TabD1.grdCrossTab.appendContentsCol();

        			var col = this.Tab0.TabD1.grdCrossTab.getFormatColCount() - 1;

        			this.Tab0.TabD1.grdCrossTab.setFormatColProperty(col, "size", 90);

        			var j = col - beforeCol;

        			this.Tab0.TabD1.grdCrossTab.setCellProperty("head", beforeHeadCell + j + 0, "text", this.fnc_GetMaskFormat(sColumnName, "@@@@-@@-@@"));

        			this.Tab0.TabD1.grdCrossTab.setCellProperty("body", beforeBodyCell + (j * 1), "text", "bind:" + sColumnName + "_MONE_AMNT");
        			this.Tab0.TabD1.grdCrossTab.setCellProperty("body", beforeBodyCell + (j * 1), "displaytype", "number");
        			this.Tab0.TabD1.grdCrossTab.setCellProperty("body", beforeBodyCell + (j * 1), "mask", "#,###");
        			this.Tab0.TabD1.grdCrossTab.setCellProperty("body", beforeBodyCell + (j * 1), "style", "align: right;");
        		}
        		
        	}
        	
        	
        	// 지급구분별로 dsCrossTab 데이터셋에 금액, 판정금액을 셋팅해준다.
        	for (var i = 0; i < this.dsTA_MONEPL.rowcount; i++) {

        		var sProv_Date 	= this.dsTA_MONEPL.getColumn(i, "PROV_DATE");	// 자금계획일자
        		var sColumnName = sProv_Date;
        		var sFind_Key	= this.dsTA_MONEPL.getColumn(i, "FIND_KEY");
        		var iMone_Amnt 	= nexacro.toNumber(this.dsTA_MONEPL.getColumn(i, "MONE_AMNT"), 0);
        		var iDeci_Amnt 	= nexacro.toNumber(this.dsTA_MONEPL.getColumn(i, "DECI_AMNT"), 0);

        		var iFindRow 	= this.dsCrossTab.findRow("FIND_KEY", sFind_Key);
        		if (iFindRow == -1) {
        			iFindRow = this.dsCrossTab.addRow();
        			this.dsCrossTab.setColumn(iFindRow, "FIND_KEY", sFind_Key);
        		}

        		var tMone_Amnt = nexacro.toNumber(this.dsCrossTab.getColumn(iFindRow, "MONE_AMNT"), 0);
        		var tDeci_Amnt = nexacro.toNumber(this.dsCrossTab.getColumn(iFindRow, "DECI_AMNT"), 0);
        		var cMone_Amnt = nexacro.toNumber(this.dsCrossTab.getColumn(iFindRow, sColumnName + "_MONE_AMNT"), 0);
        		var cDeci_Amnt = nexacro.toNumber(this.dsCrossTab.getColumn(iFindRow, sColumnName + "_DECI_AMNT"), 0);

        		this.dsCrossTab.setColumn(iFindRow, "MONE_AMNT", tMone_Amnt + iMone_Amnt);
        		this.dsCrossTab.setColumn(iFindRow, "DECI_AMNT", tDeci_Amnt + iDeci_Amnt);
        			
        		this.dsCrossTab.setColumn(iFindRow, sColumnName + "_MONE_AMNT", cMone_Amnt + iMone_Amnt);
        		this.dsCrossTab.setColumn(iFindRow, sColumnName + "_DECI_AMNT", cDeci_Amnt + iDeci_Amnt);
        	}
        	
        	
        	// 이월금액을 정리한다.
        	// (일자별)자금수지를 계산하여 dsCrossTab 데이터셋에 셋팅해준다. => 이월금액 + 보유자금 - 소요자금 
        	var iBefo_Amnt 	= nexacro.toNumber(this.dsBEFORE_DATA.getColumn(0, "BEFO_AMNT"), 0);
        	var iFirstRow 	= this.dsCrossTab.findRow("FIND_KEY", "FC170000");	// 이월금액
        	var iLastRow 	= this.dsCrossTab.findRow("FIND_KEY", "FC170099");	// 자금수지
        	var sBef_Prov_Date = "";

        	for (var i = 0; i < this.dsHEAD_DATA.rowcount; i++) {
        		var sProv_Date = this.dsHEAD_DATA.getColumn(i, "PROV_DATE");
        		var sColumnName = sProv_Date;

        		if (i == 0) {
        			this.dsCrossTab.setColumn(iFirstRow, sColumnName + "_MONE_AMNT", iBefo_Amnt);
        			this.dsCrossTab.setColumn(iFirstRow, sColumnName + "_DECI_AMNT", iBefo_Amnt);
        		} else {
        			this.dsCrossTab.setColumn(iFirstRow, sColumnName + "_MONE_AMNT", this.dsCrossTab.getColumn(iLastRow, sBef_Prov_Date + "_MONE_AMNT"));
        			this.dsCrossTab.setColumn(iFirstRow, sColumnName + "_DECI_AMNT", this.dsCrossTab.getColumn(iLastRow, sBef_Prov_Date + "_DECI_AMNT"));
        		}
        	
        		// 자금수지 금액을 구한다.
        		var iTota_Amnt = 0;//this.dsCrossTab.getSum(sColumnName + "_DECI_AMNT");
        		for (j = 0; j < this.dsCrossTab.rowcount; j++) {
        			iTota_Amnt = iTota_Amnt + nexacro.toNumber(this.dsCrossTab.getColumn(j, sColumnName + "_DECI_AMNT"), 0);
        		}

        		this.dsCrossTab.setColumn(iLastRow, sColumnName + "_MONE_AMNT", iTota_Amnt);
        		this.dsCrossTab.setColumn(iLastRow, sColumnName + "_DECI_AMNT", iTota_Amnt);

        		sBef_Prov_Date = sProv_Date;
        	}

        	this.dsCrossTab.applyChange();

        	this.dsCrossTabTmp.copyData(this.dsCrossTab, true);
        	
        	this.dsCrossTab.copyData(this.dsCrossTabTmp, true);
        	this.dsCrossTab.set_keystring("G:EXCE_GRUP+EXCE_GRUP_NAME,S:SORT_ORD1+SORT_ORD2+LINE_NO");

        	for (var i = this.dsCrossTab.rowcount - 1; i >= 0; i--) {
        		var iGroup_Cnt = this.dsCrossTab.getColumn(i, "GROUP_CNT");

        		if (this.dsCrossTab.getRowLevel(i) > 0 && iGroup_Cnt <= 1) {
        			this.dsCrossTab.deleteRow(i);
        		}
        	}

        	this.fnc_GridSetting(this);
        	
        	this.dsCrossTab.set_enableevent(true);
        	this.Tab0.TabD1.grdCrossTab.set_enableredraw(true);
        }

        /*--------------------------+
         |  그리드만들기1  |
         +---------------------------*/
        this.fn_Grid1 = function () {

        	this.dsCrossTab1.clearData();
        	this.dsCrossTab1.set_keystring("");
        	
        	this.setWaitCursor(true);
        	this.Tab0.TabD2.grdCrossTab1.set_enableredraw(false);
        	this.dsCrossTab1.set_enableevent(false);

        //	this.Tab0.TabD2.grdCrossTab1.set_formats(this.sGRID_FORMATS1);

        	for (var i = this.Tab0.TabD2.grdCrossTab1.getCellCount("body"); i > this.iGRID_CELLCNT1; i--) {
        		this.Tab0.TabD2.grdCrossTab1.deleteContentsCol(this.Tab0.TabD2.grdCrossTab1.getCellCount("body") - 1);
        	}
        	
        	this.dsCrossTab1.copyData(this.dsGROUP_DATA1, true);

        	this.fn_MakeMonth();

        	var beforeCol = 1;
        	var beforeHeadCell = 1;
        	var beforeBodyCell = 1;
        	var beforeSumCell = 0;
        	
        	// 자금계획일자 기준으로 dsCrossTab1 데이터셋의 컬럼을 추가한다.
        	for (var i = 0; i < this.dsHEAD_DATA1.rowcount; i++) {
        		var sLast_Date 	= this.dsHEAD_DATA1.getColumn(i, "LAST_DATE");
        		var sColumnName = sLast_Date;
        		var columnInfo 	= this.dsCrossTab1.colinfos[sColumnName + "_MONE_AMNT"];
        		
        		if (columnInfo == null) {
        			// dsCrossTab1 데이터셋의 컬럼추가
        			this.dsCrossTab1.addColumn(sColumnName + "_MONE_AMNT", "BIGDECIMAL", 22);
        			this.dsCrossTab1.addColumn(sColumnName + "_DECI_AMNT", "BIGDECIMAL", 22);
        			this.dsCrossTab1.addColumn(sColumnName + "_PROV_DATE", "STRING", 22);

        			this.Tab0.TabD2.grdCrossTab1.appendContentsCol();
        			var col = this.Tab0.TabD2.grdCrossTab1.getFormatColCount() - 1;
        			this.Tab0.TabD2.grdCrossTab1.setFormatColProperty(col, "size", 50);

        			var j = col - beforeCol;

        			this.Tab0.TabD2.grdCrossTab1.setCellProperty("head", beforeHeadCell + j + 0, "text", this.fnc_GetMaskFormat(sColumnName, "@@@@-@@-@@"));

        			this.Tab0.TabD2.grdCrossTab1.setCellProperty("body", beforeBodyCell + (j * 1), "text", "bind:" + sColumnName + "_PROV_DATE");
        			//this.Tab0.TabD2.grdCrossTab1.setCellProperty("body", beforeBodyCell + (j * 1), "displaytype", "date");
        			//this.Tab0.TabD2.grdCrossTab1.setCellProperty("body", beforeBodyCell + (j * 1), "mask", "MM/dd");
        			this.Tab0.TabD2.grdCrossTab1.setCellProperty("body", beforeBodyCell + (j * 1), "style", "align: center;");
        			this.Tab0.TabD2.grdCrossTab1.setCellProperty("body", beforeBodyCell + (j * 1), "calendardisplaynulltype", "none");

        			this.Tab0.TabD2.grdCrossTab1.appendContentsCol();

        			var col = this.Tab0.TabD2.grdCrossTab1.getFormatColCount() - 1;
        			this.Tab0.TabD2.grdCrossTab1.setFormatColProperty(col, "size", 90);

        			var j = col - beforeCol;

        			this.Tab0.TabD2.grdCrossTab1.setCellProperty("head", beforeHeadCell + j + 0, "text", this.fnc_GetMaskFormat(sColumnName, "@@@@-@@-@@"));

        			this.Tab0.TabD2.grdCrossTab1.setCellProperty("body", beforeBodyCell + (j * 1), "text", "bind:" + sColumnName + "_MONE_AMNT");
        			this.Tab0.TabD2.grdCrossTab1.setCellProperty("body", beforeBodyCell + (j * 1), "displaytype", "number");
        			this.Tab0.TabD2.grdCrossTab1.setCellProperty("body", beforeBodyCell + (j * 1), "mask", "#,###");
        			this.Tab0.TabD2.grdCrossTab1.setCellProperty("body", beforeBodyCell + (j * 1), "style", "align: right;");
        		}
        	}

        
        	var colCount = this.Tab0.TabD2.grdCrossTab1.getFormatColCount();
        	var startCell = 2;
        	for (var i = 2; i < colCount; i = i + 2) {
        		this.Tab0.TabD2.grdCrossTab1.mergeContentsCell("head", 0, i, 0, i + 1, startCell, false);
        		startCell++;
        	}

        	
        	// 지급구분별로 dsCrossTab1 데이터셋에 금액, 판정금액을 셋팅해준다.
        	for (var i = 0; i < this.dsTA_MONEPL1.rowcount; i++) {
        		var sLast_Date 	= this.dsTA_MONEPL1.getColumn(i, "LAST_DATE");
        		var sColumnName	= sLast_Date;

        		var sFind_Key 	= this.dsTA_MONEPL1.getColumn(i, "FIND_KEY");
        		var iMone_Amnt 	= nexacro.toNumber(this.dsTA_MONEPL1.getColumn(i, "MONE_AMNT"), 0);
        		var iDeci_Amnt 	= nexacro.toNumber(this.dsTA_MONEPL1.getColumn(i, "DECI_AMNT"), 0);
        		var iLine_No 	= nexacro.toNumber(this.dsTA_MONEPL1.getColumn(i, "LINE_NO"), 0);

        		var sExce_Grup_Name = this.dsTA_MONEPL1.getColumn(i, "EXCE_GRUP_NAME");
        		var sExce_Gubn_Name = this.dsTA_MONEPL1.getColumn(i, "EXCE_GUBN_NAME");
        		var sExce_Grup 		= this.dsTA_MONEPL1.getColumn(i, "EXCE_GRUP");
        		var sExce_Gubn 		= this.dsTA_MONEPL1.getColumn(i, "EXCE_GUBN");
        		var sProv_Date 		= this.dsTA_MONEPL1.getColumn(i, "PROV_DATE");

        		var iFindRow = this.dsCrossTab1.findRow("FIND_KEY", sFind_Key);
        		if (iFindRow == -1) {
        			iFindRow = this.dsCrossTab1.addRow();
        			this.dsCrossTab1.setColumn(iFindRow, "FIND_KEY", sFind_Key);
        			this.dsCrossTab1.setColumn(iFindRow, "EXCE_GRUP_NAME", sExce_Grup_Name);
        			this.dsCrossTab1.setColumn(iFindRow, "EXCE_GUBN_NAME", sExce_Gubn_Name);
        			this.dsCrossTab1.setColumn(iFindRow, "EXCE_GRUP", sExce_Grup);
        			this.dsCrossTab1.setColumn(iFindRow, "EXCE_GUBN", sExce_Gubn);
        			this.dsCrossTab1.setColumn(iFindRow, "LINE_NO", iLine_No);

        			var iGroupFindRow = this.dsGROUP_DATA1.findRow("FIND_KEY", sExce_Grup + sExce_Gubn + "0001");
        			if (iGroupFindRow != -1) {
        				var SORT_ORD1 = this.dsGROUP_DATA1.getColumn(iGroupFindRow, "SORT_ORD1");
        				var SORT_ORD2 = this.dsGROUP_DATA1.getColumn(iGroupFindRow, "SORT_ORD2");

        				this.dsCrossTab1.setColumn(iFindRow, "SORT_ORD1", SORT_ORD1);
        				this.dsCrossTab1.setColumn(iFindRow, "SORT_ORD2", SORT_ORD2);
        			}
        		}
        	
        		var tMone_Amnt = nexacro.toNumber(this.dsCrossTab1.getColumn(iFindRow, "MONE_AMNT"), 0);
        		var tDeci_Amnt = nexacro.toNumber(this.dsCrossTab1.getColumn(iFindRow, "DECI_AMNT"), 0);

        		var cMone_Amnt = nexacro.toNumber(this.dsCrossTab1.getColumn(iFindRow, sColumnName + "_MONE_AMNT"), 0);
        		var cDeci_Amnt = nexacro.toNumber(this.dsCrossTab1.getColumn(iFindRow, sColumnName + "_DECI_AMNT"), 0);

        		this.dsCrossTab1.setColumn(iFindRow, "MONE_AMNT", tMone_Amnt + iMone_Amnt);
        		this.dsCrossTab1.setColumn(iFindRow, "DECI_AMNT", tDeci_Amnt + iDeci_Amnt);

        		this.dsCrossTab1.setColumn(iFindRow, sColumnName + "_MONE_AMNT", cMone_Amnt + iMone_Amnt);
        		this.dsCrossTab1.setColumn(iFindRow, sColumnName + "_DECI_AMNT", cDeci_Amnt + iDeci_Amnt);
        		
        		this.dsCrossTab1.setColumn(iFindRow, sColumnName + "_PROV_DATE", this.fnc_GetMaskFormat(this.fnc_SubStr(sProv_Date, 4, 4), "@@/@@"));
        	}

        	
        	// 이월금액을 정리한다.
        	// (보름별)자금수지를 계산하여 dsCrossTab1 데이터셋에 셋팅해준다. => 이월금액 + 보유자금 - 소요자금 
        	var iBefo_Amnt 	= nexacro.toNumber(this.dsBEFORE_DATA.getColumn(0, "BEFO_AMNT"), 0);
        	var iFirstRow 	= this.dsCrossTab1.findRow("FIND_KEY", "FC1700000001");	// 이월금액
        	var iLastRow 	= this.dsCrossTab1.findRow("FIND_KEY", "FC1700990001");	// 자금수지
        	var sBef_Last_Date = "";

        	for (var i = 0; i < this.dsHEAD_DATA1.rowcount; i++) {
        		var sLast_Date 	= this.dsHEAD_DATA1.getColumn(i, "LAST_DATE");
        		var sColumnName = sLast_Date;

        		if (i == 0) {
        			this.dsCrossTab1.setColumn(iFirstRow, sColumnName + "_MONE_AMNT", iBefo_Amnt);
        			this.dsCrossTab1.setColumn(iFirstRow, sColumnName + "_DECI_AMNT", iBefo_Amnt);
        		} else {
        			this.dsCrossTab1.setColumn(iFirstRow, sColumnName + "_MONE_AMNT", this.dsCrossTab1.getColumn(iLastRow, sBef_Last_Date + "_MONE_AMNT"));
        			this.dsCrossTab1.setColumn(iFirstRow, sColumnName + "_DECI_AMNT", this.dsCrossTab1.getColumn(iLastRow, sBef_Last_Date + "_DECI_AMNT"));
        		}

        		// 자금수지 금액을 구한다.
        		var iTota_Amnt = 0;//this.dsCrossTab1.getSum(sColumnName + "_DECI_AMNT");
        		for (j = 0; j < this.dsCrossTab1.rowcount; j++) {
        			iTota_Amnt = iTota_Amnt + nexacro.toNumber(this.dsCrossTab1.getColumn(j, sColumnName + "_DECI_AMNT"), 0);
        		}

        		this.dsCrossTab1.setColumn(iLastRow, sColumnName + "_MONE_AMNT", iTota_Amnt);
        		this.dsCrossTab1.setColumn(iLastRow, sColumnName + "_DECI_AMNT", iTota_Amnt);

        		sBef_Last_Date = sLast_Date;
        	}

        	this.dsCrossTab1.applyChange();

        	this.dsCrossTabTmp1.copyData(this.dsCrossTab1, true);
        	
        	this.dsCrossTab1.copyData(this.dsCrossTabTmp1, true);
        	this.dsCrossTab1.set_keystring("G:EXCE_GRUP+EXCE_GRUP_NAME,S:SORT_ORD1+SORT_ORD2+LINE_NO");

        	for (var i = this.dsCrossTab1.rowcount - 1; i >= 0; i--) {
        		var iGroup_Cnt = this.dsCrossTab1.getColumn(i, "GROUP_CNT");

        		if (this.dsCrossTab1.getRowLevel(i) > 0 && iGroup_Cnt <= 1) {
        			this.dsCrossTab1.deleteRow(i);
        		}
        	}

        	this.fnc_GridSetting(this);

        	this.dsCrossTab1.set_enableevent(true);
        	this.Tab0.TabD2.grdCrossTab1.set_enableredraw(true);

        	this.setWaitCursor(false);
        }

        /*--------------------------+
         |  월구간만들기  |
         +---------------------------*/
        this.fn_MakeMonth = function () {

        	var sProv_Dafr = this.calSHRPROV_DATE1.value;
        	var sProv_Dato = this.calSHRPROV_DATE2.value;

        	if (this.fnc_SubStr(sProv_Dafr, 6, 2) <= "15") {
        		sProv_Dafr = this.fnc_SubStr(sProv_Dafr, 0, 6) + "15";
        	} else {
        		sProv_Dafr = this.fnc_SubStr(sProv_Dafr, 0, 6) + this.fnc_GetLastDayOfMonth(sProv_Dafr);
        	}

        	if (this.fnc_SubStr(sProv_Dato, 6, 2) <= "15") {
        		sProv_Dato = this.fnc_SubStr(sProv_Dato, 0, 6) + "15";
        	} else {
        		sProv_Dato = this.fnc_SubStr(sProv_Dato, 0, 6) + this.fnc_GetLastDayOfMonth(sProv_Dato);
        	}

        	this.dsHEAD_DATA1.clearData();
        	this.dsPRINT_HEAD1.clearData();
        	this.dsPRINT_HEAD1.addRow();

        	var colCount = 0;

        	for (; ; ) {

        		var fRow = this.dsHEAD_DATA1.findRow("LAST_DATE", sProv_Dafr);
        		if (fRow == -1) {
        			var nRow = this.dsHEAD_DATA1.addRow();
        			this.dsHEAD_DATA1.setColumn(nRow, "LAST_DATE", sProv_Dafr);
        			colCount++;

        			if (colCount <= 6)  {
        				this.dsPRINT_HEAD1.setColumn(0, "C" + colCount, sProv_Dafr);
        			}
        		}
        		if (sProv_Dafr >= sProv_Dato) break;

        		if (this.fnc_SubStr(sProv_Dafr, 6, 2) == "15") {
        			sProv_Dafr = this.fnc_SubStr(this.fnc_AddDate(sProv_Dafr, 1), 0, 6) + this.fnc_GetLastDayOfMonth(sProv_Dafr);
        		} else {
        			sProv_Dafr = this.fnc_SubStr(this.fnc_AddDate(sProv_Dafr, 1), 0, 6) + "15";
        		}

        
        	}

        }
        this.Tab0_onchanged = function(obj,e) {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_MONEPL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_MONEPL.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.dsBaseColumn.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsBaseColumn.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.dsTA_MONEPL1.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_MONEPL1.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_PostProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE1.addEventHandler("ontextchange", this.fn_clearData, this);
            this.calSHRPROV_DATE1.addEventHandler("onchanged", this.fn_clearData, this);
            this.calSHRPROV_DATE1.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRPROV_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRPROV_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.addEventHandler("onchanged", this.Tab0_onchanged, this);
            this.Tab0.TabD1.grdCrossTab.addEventHandler("onexpanddown", this.fn_HelpDialogeGrid, this);
            this.Tab0.TabD2.grdCrossTab1.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.Tab0.TabD2.grdCrossTab1.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TRMA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
