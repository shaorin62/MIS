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
                this.set_name("TXMA0040");
                this.set_titletext("매출매입장");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"DSNAME\">dsSHREVID_DOCU</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"DSNAME\">dsSHRVATX_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">VATX_TYPE</Col><Col id=\"DSNAME\">dsSHRVATX_TYPE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">PURC_GUBN</Col><Col id=\"DSNAME\">dsSHRPURC_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">BULG_GUBN</Col><Col id=\"DSNAME\">dsSHRBULG_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"DSNAME\">dsEVID_DOCU</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"DSNAME\">dsVATX_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">VATX_TYPE</Col><Col id=\"DSNAME\">dsVATX_TYPE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">PURC_GUBN</Col><Col id=\"DSNAME\">dsPURC_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">BULG_GUBN</Col><Col id=\"DSNAME\">dsBULG_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHREBIL_GUBN</Col><Col id=\"CODEID\">EBIL_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsEBIL_GUBN</Col><Col id=\"CODEID\">EBIL_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VATXXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"VATX_SEQN\" size=\"20\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" type=\"STRING\"/><Column id=\"SLIP_INPU\" size=\"10\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"4\" type=\"STRING\"/><Column id=\"EVID_DOCU\" size=\"10\" type=\"STRING\"/><Column id=\"CARD_NUMB\" size=\"20\" type=\"STRING\"/><Column id=\"CARD_APPR\" size=\"20\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"VATX_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"VATX_TYPE\" size=\"10\" type=\"STRING\"/><Column id=\"BULG_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"PURC_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"EBIL_GUBN\" size=\"1\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"ITEM_NAME\" size=\"100\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"VATX_AMNT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"400\" type=\"STRING\"/><Column id=\"ETIS_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DEET_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"SLIP_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOPVAT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REGS_NO\" size=\"30\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "161", "208", "20", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("10");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_VATXXM", "absolute", "8", "181", null, null, "25", "15", this);
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj.set_binddataset("dsTA_VATXXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_cellsizebandtype("body");
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"75\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"65\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"104\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"발행일\"/><Cell col=\"1\" displaytype=\"text\" text=\"회계일\"/><Cell col=\"2\" displaytype=\"text\" text=\"증빙종류\"/><Cell col=\"3\" displaytype=\"text\" text=\"매출/매입\"/><Cell col=\"4\" displaytype=\"text\" text=\"부가세종류\"/><Cell col=\"5\" displaytype=\"text\" text=\"불공제\"/><Cell col=\"6\" displaytype=\"text\" text=\"전자발행\"/><Cell col=\"7\" displaytype=\"text\" text=\"사업자등록번호\"/><Cell col=\"8\" displaytype=\"text\" text=\"거래처코드\"/><Cell col=\"9\" displaytype=\"text\" text=\"거래처명\"/><Cell col=\"10\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"11\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"12\" displaytype=\"text\" text=\"공급가액\"/><Cell col=\"13\" text=\"세액\"/><Cell col=\"14\" displaytype=\"text\" text=\"귀속부서\"/><Cell col=\"15\" displaytype=\"text\" text=\"적요\"/><Cell col=\"16\" displaytype=\"text\" text=\"부가세유형\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align: center;\" text=\"bind:TRNS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: center;\" text=\"bind:SLIP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:EVID_DOCU\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:VATX_GUBN\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:VATX_TYPE\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align: left;\" text=\"bind:BULG_GUBN\"/><Cell col=\"6\" displaytype=\"combo\" style=\"align:center middle;\" text=\"bind:EBIL_GUBN\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center;\" text=\"bind:BSNS_NUMB\" mask=\"expr:comp.parent.fnc_Length(REGS_NO) &lt; 1 ? &quot;&quot; : &quot;@@@-@@-@@@@@&quot;\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;\" text=\"bind:CUST_CODE\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CUST_NAME\"/><Cell col=\"10\" displaytype=\"text\" style=\"align:center;cursor: ;\" text=\"bind:REGS_NO\" mask=\"expr:comp.parent.fnc_Length(REGS_NO) &lt; 1 ? &quot;&quot; : &quot;@@@-@@-@@@@@&quot;\"/><Cell col=\"11\" displaytype=\"text\" style=\"align:center;cursor:hand;\" text=\"bind:DISP_NUMB\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUPP_AMNT\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:VATX_AMNT\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"16\" displaytype=\"combo\" style=\"align: left;\" text=\"bind:PURC_GUBN\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"계\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_AMNT&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;VATX_AMNT&quot;)\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "96", "25", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", "70", "76", "22", null, null, this);
            obj.set_taborder("12");
            obj.set_text("발행일");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRNS_DATE1", "absolute", "96", "70", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static10", "absolute", "201", "70", "14", "22", null, null, this);
            obj.set_taborder("13");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRNS_DATE2", "absolute", "216", "70", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static32", "absolute", "28", "97", "76", "22", null, null, this);
            obj.set_taborder("14");
            obj.set_text("매입매출");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRVATX_GUBN", "absolute", "96", "97", "100", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static37", "absolute", "345", "97", "91", "22", null, null, this);
            obj.set_taborder("15");
            obj.set_text("부가세종류");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRVATX_TYPE", "absolute", "426", "97", "140", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Combo("cmbSHREVID_DOCU", "absolute", "675", "70", "140", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static33", "absolute", "595", "97", "91", "22", null, null, this);
            obj.set_taborder("16");
            obj.set_text("부가세유형");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPURC_GUBN", "absolute", "675", "97", "140", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static14", "absolute", "845", "97", "91", "22", null, null, this);
            obj.set_taborder("17");
            obj.set_text("불공제세부");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBULG_GUBN", "absolute", "925", "97", "140", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static2", "absolute", "595", "70", "91", "22", null, null, this);
            obj.set_taborder("18");
            obj.set_text("증빙서류");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "845", "70", "76", "22", null, null, this);
            obj.set_taborder("19");
            obj.set_text("전자발행");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREBIL_GUBN", "absolute", "926", "70", "80", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static1", "absolute", "345", "70", "91", "22", null, null, this);
            obj.set_taborder("20");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "426", "70", "140", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("매출매입장");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("23");
            obj.set_text("홈 > 세무관리 > 세무회계 > 부가세신고자료관리 > 매출매입장");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "156", "80", "25", null, null, this);
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

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "316", "61", "40", "67", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "440", "61", "38", "10", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "440", "92", "102", "5", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "368", "145", "38", "10", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "28", "124", "68", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "96", "124", "100", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "198", "124", "21", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "221", "124", "198", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "566", "61", "40", "67", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "815", "61", "40", "67", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("매출매입장");
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
        this.addIncludeScript("TXMA0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMA0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMA0040 매입매출장
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
         *   2016.08.03		안윤준		수정
         *   2016.08.09		오혜성		수정
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
        this.sBUTTONLIST 	= "TTFFFFTF";
        this.sPACKAGENAME 	= "TXMA0040";

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        		//전표번호mask
        	this.fnc_FormatSlipNumber(this.grdTA_VATXXM,"DISP_NUMB", "Y"); //행 번호 포함

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.fnc_GetBranch();
        	
        	var sStds_Date	= this.fnc_AddMonth(this.fnc_GetServerDateTime("DATE"), -1);
        	var sStds_Mnth	= this.fnc_SubStr(sStds_Date, 4, 2);
        	var sTrns_Dat1 	= this.fnc_SubStr(sStds_Date, 0, 4);
        	var sTrns_Dat2 	= this.fnc_SubStr(sStds_Date, 0, 4);

        	if (sStds_Mnth >= "01" && sStds_Mnth <= "03") {
        		sTrns_Dat1 	= sTrns_Dat1 + "0101";
        		sTrns_Dat2 	= sTrns_Dat2 + "0331";
        		
        	} else if (sStds_Mnth >= "04" && sStds_Mnth <= "06") {
        		sTrns_Dat1 	= sTrns_Dat1 + "0401";
        		sTrns_Dat2 	= sTrns_Dat2 + "0630";
        		
        	} else if (sStds_Mnth >= "07" && sStds_Mnth <= "09") {
        		sTrns_Dat1 	= sTrns_Dat1 + "0701";
        		sTrns_Dat2 	= sTrns_Dat2 + "0930";
        		
        	} else if (sStds_Mnth >= "10" || sStds_Mnth <= "12") {
        		sTrns_Dat1 	= sTrns_Dat1 + "1001";
        		sTrns_Dat2 	= sTrns_Dat2 + "1231";
        		
        	}
        	
        	this.calSHRTRNS_DATE1.set_value(sTrns_Dat1);
        	this.calSHRTRNS_DATE2.set_value(sTrns_Dat2);

        	this.calSHRTRNS_DATE1.setFocus();
        	
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
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_VATXXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_VATXXM=dsTA_VATXXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTA_VATXXM.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        		//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        		//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTA_VATXXM");
        	this.grdTA_VATXXM.setFocus();

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        		//기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        		//기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VATXXM", this);
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
        /*-------------------+
         /  조회 여부 체크!   /
         +--------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_IsDate(this.calSHRTRNS_DATE1.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM072", "발행 시작일자", this.calSHRTRNS_DATE1);
        	}

        	if (this.fnc_IsDate(this.calSHRTRNS_DATE2.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM072", "발행 종료일자", this.calSHRTRNS_DATE2);
        	}

        	if (this.calSHRTRNS_DATE1.value > this.calSHRTRNS_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "발행 시작일자,발행 종료일자", this.calSHRTRNS_DATE2);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        		//기능없음	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheckM("dsTA_VATXXM")) {

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

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TRNS_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRNS_DATE1.value));
        		sReturnString += " TRNS_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRNS_DATE2.value));
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		sReturnString += " EVID_DOCU=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHREVID_DOCU.value));
        		sReturnString += " EBIL_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHREBIL_GUBN.value));
        		sReturnString += " VATX_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRVATX_GUBN.value));
        		sReturnString += " VATX_TYPE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRVATX_TYPE.value));
        		sReturnString += " PURC_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRPURC_GUBN.value));
        		sReturnString += " BULG_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRBULG_GUBN.value));
        		sReturnString += " CUST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value));
        		
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {

        		this.fnc_Information(this.stInformation, this.dsTA_VATXXM.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("TMM018", this.dsTA_VATXXM.rowcount); //정상 종료 메세지
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		var intParam = 0;
        			arrParam[intParam++] = "COMBO,cmbSHREVID_DOCU,dsSHREVID_DOCU,0";
        			arrParam[intParam++] = "COMBO,cmbSHREBIL_GUBN,dsSHREBIL_GUBN,0";
        			arrParam[intParam++] = "COMBO,cmbSHRVATX_GUBN,dsSHRVATX_GUBN,0";
        			arrParam[intParam++] = "COMBO,cmbSHRVATX_TYPE,dsSHRVATX_TYPE,0";
        			arrParam[intParam++] = "COMBO,cmbSHRPURC_GUBN,dsSHRPURC_GUBN,0";
        			arrParam[intParam++] = "COMBO,cmbSHRBULG_GUBN,dsSHRBULG_GUBN,0";
        			arrParam[intParam++] = "GRID,grdTA_VATXXM,dsEVID_DOCU,EVID_DOCU";
        			arrParam[intParam++] = "GRID,grdTA_VATXXM,dsVATX_GUBN,VATX_GUBN";
        			arrParam[intParam++] = "GRID,grdTA_VATXXM,dsVATX_TYPE,VATX_TYPE";
        			arrParam[intParam++] = "GRID,grdTA_VATXXM,dsPURC_GUBN,PURC_GUBN";
        			arrParam[intParam++] = "GRID,grdTA_VATXXM,dsBULG_GUBN,BULG_GUBN";
        			arrParam[intParam++] = "GRID,grdTA_VATXXM,dsEBIL_GUBN,EBIL_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	} 
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow) {
        		//기능없음
        }	

        /*----------------------------------------------------------------+
         | Help Popup Open                     |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj,nX,nY) {
        	
            var arrParam = new Array();
            
            if ((obj.name == "imgHelpSHRCUST_CODE") || (obj.name == "edtSHRCUST_NAME")) {

                arrParam[0] = "FAM0021";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRCUST_NAME";
                arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";
                arrParam[6] = "0,1";
                
        	 }
            
            if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
            
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------+
         |  전표상세조회  |
         +------------------*/
        this.grdTA_VATXXM_oncelldblclick = function (obj,e) {

            var columnName = this.fnc_getColId(obj, e.cell);
            
        	if (columnName == "DISP_NUMB"){
        	    var sSlipNumb = this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "SLIP_NUMB");
        	    var sSlipLine = this.dsTA_VATXXM.getColumn(this.dsTA_VATXXM.rowposition, "SLIP_LINE");
        	    
        	    if(this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0 ) {
        			this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		}	
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
            this.grdTA_VATXXM.addEventHandler("oncelldblclick", this.grdTA_VATXXM_oncelldblclick, this);
            this.calSHRTRNS_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRTRNS_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRVATX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRVATX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHREVID_DOCU.addEventHandler("onitemchanged", this.cmbSHREVID_DOCU_onitemchanged, this);
            this.cmbSHREVID_DOCU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRPURC_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRBULG_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHREBIL_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("TXMA0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
