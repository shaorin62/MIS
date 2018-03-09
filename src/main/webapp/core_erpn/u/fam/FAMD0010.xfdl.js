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
                this.set_name("FAMD0010");
                this.set_titletext("계정별잔액연령현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"DSNAME\">dsSHRCUTY_CODE</Col><Col id=\"CODEID\">CUTY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">거래처구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRRETY_CODE</Col><Col id=\"CODEID\">RETY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">관계사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj.set_keystring("G:ACCT_INTL+ACCT_NAME");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_0001\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RECE_0002\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RECE_0003\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RECE_0004\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RECE_BALA\" type=\"BIGDECIMAL\" size=\"17\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_TYPE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">전표종류</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0005</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "180", null, null, "25", "15", this);
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.getSetter("nosort").set("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"계정코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"계정명\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"거래처코드\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"거래처명\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"text\" text=\"귀속부서\"/><Cell col=\"5\" colspan=\"5\" displaytype=\"text\" text=\"연령별 잔액\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\".\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCT_INTL\" suppress=\"1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ACCT_NAME\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:CUST_CODE\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CUST_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RECE_0001\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RECE_0002\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RECE_0003\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RECE_0004\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RECE_BALA\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;RECE_0001&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;RECE_0002&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;RECE_0003&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;RECE_0004&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;RECE_BALA&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "95", "25", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "123", "71", "139", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static00", "absolute", "28", "71", "96", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "687", "71", "200", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "582", "71", "80", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_tabstop("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "500", "71", "71", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE", "absolute", "369", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static3", "absolute", "299", "71", "68", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "664", "71", "21", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "28", "97", "96", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("연령조회기준");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRRECE_0001", "absolute", "123", "97", "45", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_mask("+###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRRECE_0002", "absolute", "170", "97", "45", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_mask("+###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRRECE_0003", "absolute", "217", "97", "45", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_mask("+###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "265", "97", "60", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("일");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("계정별잔액연령현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("21");
            obj.set_text("홈 > 재무관리 > 회계보조장부 > 계정별잔액연령현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("29");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "174", "216", "6", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "573", "155", "80", "25", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("32");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "138", "61", "38", "10", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "138", "92", "102", "5", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "138", "144", "38", "10", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", null, "159", "505", "21", "25", null, this);
            obj.set_taborder("36");
            obj.set_text("[계정과목등록]메뉴에서 <건별미결관리>로 설정된 계정과목의 잔액 연령이 조회 됩니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Info.png') left middle");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "159", "204", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "500", "97", "78", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("거래처구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCUTY_CODE", "absolute", "582", "97", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static14", "absolute", "705", "97", "51", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("관계사");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRRETY_CODE", "absolute", "760", "97", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static26", "absolute", "299", "97", "68", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("계정종류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_TYPE", "absolute", "369", "97", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");

            obj = new Static("Static15", "absolute", "28", "123", "64", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INT1", "absolute", "123", "123", "120", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_INT1", "absolute", "245", "123", "21", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAM1", "absolute", "268", "123", "160", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "433", "123", "14", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INT2", "absolute", "451", "123", "120", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_INT2", "absolute", "573", "123", "21", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAM2", "absolute", "596", "123", "160", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("계정별잔액연령현황");
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
        this.addIncludeScript("FAMD0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("FAMD0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("FAMD0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMD0010 계정별잔액연령현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		오혜성		Initial Created.
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/

        this.sBUTTONLIST  = "TTFFFFTT"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMD0010";

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.calSHRSLIP_DATE.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.mskSHRRECE_0001.set_value("30");
        	this.mskSHRRECE_0002.set_value("60");
        	this.mskSHRRECE_0003.set_value("90");
        	this.fn_GridHeaderSet();
        	this.cmbSHRACCT_UNIT.setFocus();
        		
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	
        	this.fn_GridHeaderSet();
        	
        	this.fnc_DatasetClear("dsTA_SLIPNT");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT.setFocus();

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

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         --------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTA_SLIPNT");
        	this.grdTA_SLIPNT.setFocus();

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
        	this.fnc_ToExcel(this); //Export 할 화면 Call
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {

        	var reportfile = "/fam/FAMD0010R01.jrf";
        	
        	var params  =  "SLIP_DATE#" + this.fnc_Trim(this.calSHRSLIP_DATE.value);
        		params += "#CUST_CODE#" + this.fnc_Trim(this.edtSHRCUST_CODE.value);
        		params += "#CUST_NAME#" + this.fnc_Trim(this.edtSHRCUST_NAME.value);
        		params += "#TOTL_CUST#전체";
        		params += "#RECE_0001#" + this.mskSHRRECE_0001.value;
        		params += "#PLUS_0001#" + (nexacro.toNumber(this.mskSHRRECE_0001.value) + 1);
        		params += "#RECE_0002#" + this.mskSHRRECE_0002.value;
        		params += "#PLUS_0002#" + (nexacro.toNumber(this.mskSHRRECE_0002.value) + 1);
        		params += "#RECE_0003#" + this.mskSHRRECE_0003.value;
        		params += "#PLUS_0003#" + (nexacro.toNumber(this.mskSHRRECE_0003.value) + 1);
        	
        	var dataref = new Array();
        	
        	dataref[0]            	= new Object();
            dataref[0].type      	= "DATASET";
            dataref[0].dsObj		= this.dsTA_SLIPNT;

        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT", this);
        		
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;

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
        /*---------------------+
         |  조회 조건 체크!   |
         +----------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_Length(this.cmbSHRACCT_UNIT.text) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);
        	}
        	
        	
        	if (this.fnc_IsDate(this.calSHRSLIP_DATE.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "기준일자", this.calSHRSLIP_DATE);
        	}
        	
        	if (nexacro.toNumber(this.fnc_Trim(this.mskSHRRECE_0001.value), 0) == 0) {
        		return this.fnc_SearchCheckPostAction("TMM001", "연령조회기준", this.mskSHRRECE_0001);
        	}
        	
        	if (nexacro.toNumber(this.fnc_Trim(this.mskSHRRECE_0002.value), 0) == 0) {
        		return this.fnc_SearchCheckPostAction("TMM001", "연령조회기준", this.mskSHRRECE_0002);
        	}
        	
        	if (nexacro.toNumber(this.fnc_Trim(this.mskSHRRECE_0003.value), 0) == 0) {
        		return this.fnc_SearchCheckPostAction("TMM001", "연령조회기준", this.mskSHRRECE_0003);
        	}
        	
        	if (nexacro.toNumber(this.fnc_Trim(this.mskSHRRECE_0001.value), 0) >= nexacro.toNumber(this.fnc_Trim(this.mskSHRRECE_0002.value), 0)) {
        		return this.fnc_SearchCheckPostAction("TMM125", "첫번째 연력조회기준이 두번째 연력조회기준보다 큽니다.", this.mskSHRRECE_0001);
        	}
        	
        	if (nexacro.toNumber(this.fnc_Trim(this.mskSHRRECE_0002.value), 0) >= nexacro.toNumber(this.fnc_Trim(this.mskSHRRECE_0003.value), 0)) {
        		return this.fnc_SearchCheckPostAction("TMM125", "두번째 연력조회기준이 세번째 연력조회기준보다 큽니다.", this.mskSHRRECE_0002);
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
        	//기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        // 		var sAcct_List = "";	//계정종류 리스트
        // 		
        // 		if (this.fnc_Length(this.cmbSHRACCT_TYPE.value) < 1) {
        // 			
        // 			for (var i = 1; i < this.dsSHRACCT_TYPE.rowcount; i++) {
        // 				if (i == 1) {
        // 					sAcct_List = "'" + this.dsSHRACCT_TYPE.getColumn(i, "COMB_CODE") + "'";
        // 				} else {				
        // 					sAcct_List = sAcct_List + "," + "'" + this.dsSHRACCT_TYPE.getColumn(i, "COMB_CODE") + "'";
        // 				}			
        // 			}
        // 			
        // 		} else {
        // 			sAcct_List = "'" + this.cmbSHRACCT_TYPE.value + "'";
        // 		}

        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " CUST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value));
        		sReturnString += " SLIP_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE.value));
        		sReturnString += " RECE_0001=" 	+ this.fnc_Quote(this.fnc_Trim(this.mskSHRRECE_0001.value));
        		sReturnString += " RECE_0002="	+ this.fnc_Quote(this.fnc_Trim(this.mskSHRRECE_0002.value));
        		sReturnString += " RECE_0003=" 	+ this.fnc_Quote(this.fnc_Trim(this.mskSHRRECE_0003.value));
        		//sReturnString += " ACCT_TYPE=" 	+ this.fnc_Quote(this.fnc_Trim(sAcct_List));
        		sReturnString += " ACCT_TYPE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_TYPE.value));
        		sReturnString += " CUTY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCUTY_CODE.value));
        		sReturnString += " RETY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRRETY_CODE.value));
        		sReturnString += " RETY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRRETY_CODE.value));
        		sReturnString += " ACCT_INT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INT1.value));
        		sReturnString += " ACCT_INT2="	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INT2.value));

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

        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHRCUTY_CODE,dsSHRCUTY_CODE,0";
        			arrParam[2] = "COMBO,cmbSHRRETY_CODE,dsSHRRETY_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_TYPE,dsSHRACCT_TYPE,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}

        }

        /*------------------+
         | Help Popup Open   |
         +-------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRCUST_CODE") || (obj.name == "edtSHRCUST_NAME")) {

                arrParam[0] = "FAM0021";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRCUST_NAME";                         
                arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";         
                arrParam[6] = "0,1";
        		
            } else if ((obj.name == "imgHelpSHRACCT_INT1") || (obj.name == "edtSHRACCT_NAM1")) {
            
        		arrParam[0] = "FAM0035";                                
        		arrParam[1] = "";                                      
        		arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAM1.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRACCT_NAM1";   
            
        		if (this.fnc_Length(this.edtSHRACCT_INT2.value) < 1) {

        			arrParam[5] = "edtSHRACCT_INT1,edtSHRACCT_NAM1,edtSHRACCT_INT2,edtSHRACCT_NAM2";
        			arrParam[6] = "0,1,0,1";
        				
        		} else {

        			arrParam[5] = "edtSHRACCT_INT1,edtSHRACCT_NAM1";
        			arrParam[6] = "0,1";

        		}
        		
            } else if ((obj.name == "imgHelpSHRACCT_INT2") || (obj.name == "edtSHRACCT_NAM2")) {

                arrParam[0] = "FAM0035";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAM2.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRACCT_NAM2";            
                arrParam[5] = "edtSHRACCT_INT2,edtSHRACCT_NAM2";
                arrParam[6] = "0,1";                                     
        		
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        this.fn_GridHeaderSet = function () {
        	
        	var iRece1 = this.mskSHRRECE_0001.value;
        	var iRece2 = this.mskSHRRECE_0002.value;
        	var iRece3 = this.mskSHRRECE_0003.value;
        	
        	var iBaseCellIndex = this.grdTA_SLIPNT.getBindCellIndex("Body", "DEPT_NAME");
        	
        	this.grdTA_SLIPNT.setCellProperty("Head", this.grdTA_SLIPNT.getCellCount("Body") - 4, "text", iRece1 + "일 이하");
        	this.grdTA_SLIPNT.setCellProperty("Head", this.grdTA_SLIPNT.getCellCount("Body") - 3, "text", nexacro.toNumber(iRece1) + 1 + "~" + iRece2 + "일");
        	this.grdTA_SLIPNT.setCellProperty("Head", this.grdTA_SLIPNT.getCellCount("Body") - 2, "text", nexacro.toNumber(iRece2) + 1 + "~" + iRece3 + "일");
        	this.grdTA_SLIPNT.setCellProperty("Head", this.grdTA_SLIPNT.getCellCount("Body") - 1, "text", nexacro.toNumber(iRece3) + 1 + "일 이상");
        	
        }

        
        this.cmbSHRCUTY_CODE_onitemchanged = function(obj,e) {
        	
        	if (obj.value == "TS100010") {	// 관계사면
        		this.fnc_SetReadonly(this.cmbSHRRETY_CODE, false);
        	} else  {
        		this.cmbSHRRETY_CODE.set_index(0);
        		this.fnc_SetReadonly(this.cmbSHRRETY_CODE, true);
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
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_CODE.addEventHandler("ontextchanged", this.edtSHRCUST_CODE_OnChanged, this);
            this.calSHRSLIP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE.addEventHandler("onchanged", this.calSHRSLIP_DATE_OnChanged, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.mskSHRRECE_0001.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSHRRECE_0002.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSHRRECE_0003.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.stInformation00.addEventHandler("onclick", this.stInformation00_onclick, this);
            this.cmbSHRCUTY_CODE.addEventHandler("onitemchanged", this.cmbSHRCUTY_CODE_onitemchanged, this);
            this.cmbSHRCUTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRETY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_INT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRACCT_INT1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRACCT_NAM1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAM1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRACCT_INT2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRACCT_NAM2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAM2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("FAMD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
