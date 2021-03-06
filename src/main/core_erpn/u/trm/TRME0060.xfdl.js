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
                this.set_name("TRME0060");
                this.set_titletext("법인카드승인자료조회");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsCARD_KIND</Col><Col id=\"CODEID\">CARD_KIND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsAPPS_CODE</Col><Col id=\"CODEID\">APPS_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRCARD_GUBN</Col><Col id=\"CODEID\">CARD_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CARDAK", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CARD_KIND\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_TIME\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SERV_AMNT\" size=\"18\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_APPR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_GUBN\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"CACO_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_NUMB\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_IDXX\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPR_TAXX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUPP_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VATX_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NOTE\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPS_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CARX_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BUYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "93", "25", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("16");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("17");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("법인카드승인자료조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("19");
            obj.set_text("홈 > 법인카드승인자료조회");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "67", null, null, this);
            obj.set_taborder("23");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "538", "153", "80", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
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

            obj = new Static("Static09", "absolute", "8", "172", "216", "6", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "28", "71", "78", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("승인일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_CARDAK", "absolute", "8", "178", null, null, "25", "15", this);
            obj.set_taborder("14");
            obj.set_binddataset("dsTA_CARDAK");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"230\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"카드종류\"/><Cell col=\"1\" text=\"카드번호\"/><Cell col=\"2\" text=\"관리부서명\"/><Cell col=\"3\" text=\"승인일자\"/><Cell col=\"4\" text=\"승인시간\"/><Cell col=\"5\" text=\"승인번호\"/><Cell col=\"6\" text=\"승인구분\"/><Cell col=\"7\" text=\"매입일자\"/><Cell col=\"8\" text=\"가맹점명\"/><Cell col=\"9\" text=\"승인금액\"/><Cell col=\"10\" text=\"공급가액\"/><Cell col=\"11\" text=\"부가세\"/><Cell col=\"12\" text=\"봉사료\"/><Cell col=\"13\" text=\"사용자사번\"/><Cell col=\"14\" text=\"사용자명\"/><Cell col=\"15\" text=\"전표번호\"/><Cell col=\"16\" text=\"전표상태\"/><Cell col=\"17\" text=\"사업자번호\"/><Cell col=\"18\" text=\"업종\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:CARD_KIND\"/><Cell col=\"1\" text=\"bind:CARD_NUMB\" mask=\"####-####-####-####\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:APPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:APPR_TIME\" mask=\"expr:comp.parent.fnc_Length(APPR_TIME)&gt;0 ? &quot;##:##:##&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:CARD_APPR\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:APPR_GUBN\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:BUYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:CHIN_NAME\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:APPR_AMNT\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:SUPP_AMNT\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:VATX_AMNT\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:SERV_AMNT\"/><Cell col=\"13\" text=\"bind:EMPL_NUMB\"/><Cell col=\"14\" text=\"bind:EMPL_NAME\"/><Cell col=\"15\" text=\"bind:DISP_NUMB\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" displaytype=\"combo\" text=\"bind:APPS_CODE\"/><Cell col=\"17\" text=\"bind:CHIN_NUMB\" mask=\"expr:comp.parent.fnc_Length(CHIN_NUMB)==10 ? &quot;###-##-#####&quot; : &quot;&quot;\"/><Cell col=\"18\" style=\"align:left;\" text=\"bind:BSNS_TYPE\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;APPR_AMNT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_AMNT&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;VATX_AMNT&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SERV_AMNT&quot;)\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "157", "169", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "342", "71", "92", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("사용자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "423", "71", "80", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NAME", "absolute", "505", "71", "21", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "528", "71", "100", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "657", "71", "76", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("카드번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSHRCARD_NUMB", "absolute", "862", "71", "21", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCARD_NAME", "absolute", "885", "71", "163", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "96", "97", "80", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_NAME", "absolute", "178", "97", "21", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "201", "97", "112", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "28", "97", "76", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("관리부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "342", "97", "92", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("회계처리자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSLIP_EMPL", "absolute", "423", "97", "80", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRSLIP_NAME", "absolute", "505", "97", "21", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSLIP_NAME", "absolute", "528", "97", "100", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "657", "97", "76", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("카드구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCARD_GUBN", "absolute", "726", "97", "129", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static13", "absolute", "881", "97", "100", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("승인금액");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "313", "61", "40", "67", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "628", "61", "40", "67", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATET", "absolute", "213", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static55", "absolute", "198", "71", "14", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATEF", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new MaskEdit("mskAPPR_AMNT", "absolute", "949", "97", "100", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("right");
            obj.set_mask("#,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtSHRCARD_NUMB", "absolute", "726", "71", "134", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "342", "123", "80", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRCHIN_NUMB", "absolute", "423", "123", "111", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "160", "144", "128", "8", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", "123", "64", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("가맹점명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCHIN_NAME", "absolute", "96", "123", "217", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("법인카드승인자료조회");

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
        this.addIncludeScript("TRME0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRME0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRME0060 법인카드승인자료조회
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.17		황치웅		Initial Created.
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
        this.sBUTTONLIST   = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME  = "TRME0060"; 
        this.sGRID_FORMATS = "";
        this.iGRID_CELLCNT = 0;

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
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.fnc_FormatSlipNumber(this.grdTA_CARDAK, "DISP_NUMB", "Y");
        	
        	var sNowDate = this.fnc_GetServerDateTime("DATE");
        	this.calSHRAPPR_DATEF.set_value(this.fnc_SubStr(sNowDate, 0, 6) + "01");
        	this.calSHRAPPR_DATET.set_value(this.fnc_SubStr(sNowDate, 0, 8));
        	
        	this.calSHRAPPR_DATEF.setFocus();
        	
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
        this.fn_Search = function (ob) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_CARDAK");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_CARDAK=dsTA_CARDAK";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

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

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATEF.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "승인일자(FROM)", this.calSHRAPPR_DATEF);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATET.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "승인일자(TO)", this.calSHRAPPR_DATET);
        	}
        	
        	if ((this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATEF.value)) == 8) || (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATET.value)) == 8)) {
        		if (this.fnc_Trim(this.calSHRAPPR_DATEF.value) > this.fnc_Trim(this.calSHRAPPR_DATET.value)) {
        			return this.fnc_Message("TMM028", "승인일자(FROM)","승인일자(TO)");
        		}
        	}

        	return true;
        }
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (){

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="     	+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="  	+ this.fnc_Quote(sKind); 
        		sReturnString += " APPR_DAT1="  + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATEF.value)); 
        		sReturnString += " APPR_DAT2="  + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATET.value));
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " CARD_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCARD_NUMB.value));
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
        		sReturnString += " SLIP_EMPL="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRSLIP_EMPL.value));
        		sReturnString += " CARD_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCARD_GUBN.value));
        		sReturnString += " APPR_AMNT="  + this.fnc_Quote(this.fnc_Trim(this.mskAPPR_AMNT.value));
                sReturnString += " CHIN_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.mskSHRCHIN_NUMB.value)); //사업자번호
                sReturnString += " CHIN_NAME="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCHIN_NAME.value)); //가맹점명
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
        		this.fnc_Information(this.stInformation, this.dsTA_CARDAK.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_CARDAK.rowcount); 
        		this.grdTA_CARDAK.setFocus();
        		
        	} else if (sMethodName == "GetCommCode") {
            
           		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRCARD_GUBN,dsSHRCARD_GUBN,0";
        			arrParam[1] = "GRID,grdTA_CARDAK,dsAPPS_CODE,APPS_CODE";
        			arrParam[2] = "GRID,grdTA_CARDAK,dsCARD_KIND,CARD_KIND";
        		this.fnc_CommonCodeInnerBind(arrParam);
                
            }
        }

        

        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	// 사용자조회
        	if ((obj.name == "imgHelpSHREMPL_NAME") || (obj.name == "edtSHREMPL_NAME")) {

        		arrParam[0] = "FAM0012";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        	//카드번호조회
        	} else if ((obj.name == "imgSHRCARD_NUMB") || (obj.name == "edtSHRCARD_NAME")) {

        		arrParam[0] = "TRM0031";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCARD_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRCARD_NAME";
        		arrParam[5] = "edtSHRCARD_NUMB,edtSHRCARD_NAME";
        		arrParam[6] = "0,1";
        	
        	// 관리부서조회
        	} else if ((obj.name == "imgHelpSHRDEPT_NAME") ||(obj.name == "edtSHRDEPT_NAME")) { 
        	
                arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDEPT_NAME";
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
                arrParam[6] = "0,1";

        	// 회계처리자조회
            } else if ((obj.name == "imgHelpSHRSLIP_NAME")|| (obj.name == "edtSHRSLIP_NAME")) {

        		arrParam[0] = "FAM0012";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRSLIP_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRSLIP_NAME";
        		arrParam[5] = "edtSHRSLIP_EMPL,edtSHRSLIP_NAME";
        		arrParam[6] = "0,1";
        		
        	} 
        	
        	if (this.fnc_Length(arrParam) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }
        this.grdTA_CARDAK_oncelldblclick = function(obj,e) {
        	
        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "DISP_NUMB") return;
        	
        	var sSlip_Numb = this.dsTA_CARDAK.getColumn(this.dsTA_CARDAK.rowposition, "SLIP_NUMB");
        	var sSlip_Line = this.dsTA_CARDAK.getColumn(this.dsTA_CARDAK.rowposition, "SLIP_LINE");
        	if (this.fnc_Length(this.fnc_Trim(sSlip_Numb)) > 0) {
        		this.fnc_ViewSlipForm(sSlip_Numb, "SHR", this.sUSERLAVEL, "", sSlip_Line); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
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
            this.grdTA_CARDAK.addEventHandler("oncelldblclick", this.grdTA_CARDAK_oncelldblclick, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSHRCARD_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCARD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCARD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSLIP_EMPL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRSLIP_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRSLIP_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRSLIP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCARD_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPR_DATET.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPR_DATEF.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskAPPR_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCARD_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSHRCHIN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCHIN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TRME0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
