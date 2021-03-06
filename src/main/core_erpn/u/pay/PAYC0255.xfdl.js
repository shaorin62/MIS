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
                this.set_name("PAYC0255");
                this.set_titletext("소급계산");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_REPAYD", this);
            obj.set_keystring("G:DEPT_FCOD+SORT_ORDR+EMPL_NUMB");
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"10\" prop=\"NONE\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"10\" prop=\"NONE\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"NONE\" type=\"STRING\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"RTBS_YMTH\" size=\"10\" prop=\"TEXT\" type=\"STRING\" sumtext=\"계\"/><Column id=\"RTB1_AMOT\" size=\"15\" prop=\"SUM\" type=\"BIGDECIMAL\"/><Column id=\"RTB2_AMOT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"SUM\"/><Column id=\"RTA1_AMOT\" size=\"15\" prop=\"SUM\" type=\"BIGDECIMAL\"/><Column id=\"RTA2_AMOT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"SUM\"/><Column id=\"RTA3_AMOT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"RTA4_AMOT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"RTR1_AMOT\" size=\"15\" prop=\"SUM\" type=\"BIGDECIMAL\"/><Column id=\"RTR2_AMOT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"SUM\"/><Column id=\"RTR3_AMOT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"RTR4_AMOT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"DEPT_FCOD\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"HOWK_DAYS\" type=\"BIGDECIMAL\" size=\"15\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Rows><Row><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("13");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("14");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("소급계산");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("9");
            obj.set_text("홈 > 소급계산");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcSHRPAYX_DATE", "absolute", "28", "71", "54", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("지급일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("12");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_MONEPL", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("5");
            obj.set_binddataset("dsPY_REPAYD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"67\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"66\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"background: ;\" text=\"사원번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"성명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소속\"/><Cell col=\"3\" rowspan=\"2\" text=\"부서\"/><Cell col=\"4\" rowspan=\"2\" text=\"직급\"/><Cell col=\"5\" rowspan=\"2\" text=\"직위\"/><Cell col=\"6\" rowspan=\"2\" text=\"소급년월\"/><Cell col=\"7\" colspan=\"6\" text=\"소급전 지급금액\"/><Cell col=\"13\" colspan=\"5\" text=\"인상금액\"/><Cell col=\"18\" colspan=\"5\" text=\"소급금액\"/><Cell row=\"1\" col=\"7\" text=\"기본급\"/><Cell row=\"1\" col=\"8\" text=\"연장수당\"/><Cell row=\"1\" col=\"9\" text=\"임원상여\"/><Cell row=\"1\" col=\"10\" text=\"휴일근무일수\"/><Cell row=\"1\" col=\"11\" text=\"휴일근무수당\"/><Cell row=\"1\" col=\"12\" text=\"지급액 계\"/><Cell row=\"1\" col=\"13\" edittype=\"masknumber\" cssclass=\"Cellgrd_WF_edit\" text=\"기본급\"/><Cell row=\"1\" col=\"14\" edittype=\"masknumber\" cssclass=\"Cellgrd_WF_edit\" text=\"연장수당\"/><Cell row=\"1\" col=\"15\" cssclass=\"Cellgrd_WF_edit\" text=\"임원상여\"/><Cell row=\"1\" col=\"16\" cssclass=\"Cellgrd_WF_edit\" text=\"휴일근무수당\"/><Cell row=\"1\" col=\"17\" text=\"인상금액 계\"/><Cell row=\"1\" col=\"18\" text=\"기본급\"/><Cell row=\"1\" col=\"19\" text=\"연장수당\"/><Cell row=\"1\" col=\"20\" text=\"임원상여\"/><Cell row=\"1\" col=\"21\" text=\"휴일근무수당\"/><Cell row=\"1\" col=\"22\" text=\"소급액 계\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:EMPL_NUMB\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:EMPL_NAME\" suppress=\"1\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\" suppress=\"2\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\" suppress=\"3\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:CPOS_NAME\" suppress=\"4\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:OPOS_NAME\" suppress=\"5\"/><Cell col=\"6\" expr=\"expr:dataset.getRowLevel(currow)==0 ? RTBS_YMTH : &quot;계&quot;\" mask=\"expr:dataset.getRowLevel(currow)==0 ? &quot;####.##&quot; : &quot;&quot;\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTB1_AMOT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTB2_AMOT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTB3_AMOT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:HOWK_DAYS\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTB4_AMOT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:RTB1_AMOT + RTB2_AMOT + RTB3_AMOT + RTB4_AMOT\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"expr:dataset.getRowLevel(currow)==0 ? &quot;normal&quot; : &quot;none&quot;\" editfilter=\"number\" style=\"align:right;\" text=\"bind:RTA1_AMOT\" editlimit=\"15\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"expr:dataset.getRowLevel(currow)==0 ? &quot;normal&quot; : &quot;none&quot;\" editfilter=\"number\" style=\"align:right;\" text=\"bind:RTA2_AMOT\" editlimit=\"15\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"expr:dataset.getRowLevel(currow)==0 ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:RTA3_AMOT\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"expr:dataset.getRowLevel(currow)==0 ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:RTA4_AMOT\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:RTA1_AMOT + RTA2_AMOT + RTA3_AMOT + RTA4_AMOT\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTR1_AMOT\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTR2_AMOT\"/><Cell col=\"20\" text=\"bind:RTR3_AMOT\"/><Cell col=\"21\" text=\"bind:RTR3_AMOT\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(RTR1_AMOT+RTR2_AMOT+RTR4_AMOT+RTR4_AMOT)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("109");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("소급계산");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("11");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("122");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "83", "71", "80", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_mask("####-##-##");
            obj.set_type("string");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "165", "71", "21", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_NAME", "absolute", "188", "71", "137", "21", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popPROC", "absolute", "174", "728", "359", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Button("btn_REPAY_CLOSE", "absolute", "288", "56", "62", "24", null, null, this.popPROC);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popPROC.addChild(obj.name, obj);
            obj = new Button("btn_REPAYCAL", "absolute", "211", "56", "74", "24", null, null, this.popPROC);
            obj.set_taborder("2");
            obj.set_text("소급계산");
            obj.set_cssclass("btn_POP_CRUD");
            this.popPROC.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "341", "39", null, null, this.popPROC);
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemBoxOut");
            this.popPROC.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popPROC);
            obj.set_taborder("5");
            obj.set_text("소급기간");
            obj.set_cssclass("styFormItemCapBE");
            this.popPROC.addChild(obj.name, obj);
            obj = new Static("Static55", "absolute", "199", "18", "14", "21", null, null, this.popPROC);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.popPROC.addChild(obj.name, obj);
            obj = new Div("divRTBG_YMTH", "absolute", "97", "18", "100", "21", null, null, this.popPROC);
            obj.set_taborder("9");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.popPROC.addChild(obj.name, obj);
            obj = new Div("divRTED_YMTH", "absolute", "214", "18", "100", "21", null, null, this.popPROC);
            obj.set_taborder("10");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.popPROC.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "144", "729", "182", "8", null, null, this);
            obj.set_taborder("126");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "144", "808", "622", "8", null, null, this);
            obj.set_taborder("127");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "175", "748", "8", "96", null, null, this);
            obj.set_taborder("6");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "524", "748", "8", "96", null, null, this);
            obj.set_taborder("129");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWAGE_CODE", "absolute", "188", "14", "68", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "325", "61", "40", "41", null, null, this);
            obj.set_taborder("131");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle6", "absolute", "353", "71", "41", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "395", "71", "80", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "477", "71", "22", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "500", "71", "100", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ALLDELETE", "absolute", "86", "35", "74", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_text("일괄삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 359, 90, this.popPROC,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popPROC.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("소급계산");

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
        this.addIncludeScript("PAYC0255.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYC0255.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYC0255 소급계산
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.17		이용관		Initial Created.
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
        this.sBUTTONLIST  = "TTFTFTTF";
        this.sPACKAGENAME = "PAYC0255";

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

        	this.popPROC.divRTBG_YMTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6));
        	this.popPROC.divRTED_YMTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6));
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
        	this.fnc_DatasetClear("dsPY_REPAYD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_REPAYD=dsPY_REPAYD";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTR_MONEPL.setFocus();

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
        	if (this.fn_DeleteCheck()) this.dsPY_REPAYD.deleteRow(this.dsPY_REPAYD.rowposition);
        	this.grdTR_MONEPL.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_REPAYD");
        	this.grdTR_MONEPL.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsPY_REPAYD=dsPY_REPAYD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTR_MONEPL.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_REPAYD", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_REPAYD")) {
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

        	if (this.dsPY_REPAYD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText = "성명:" + this.fnc_Trim(this.dsPY_REPAYD.getColumn(this.dsPY_REPAYD.rowposition, "EMPL_NAME"))
        						+ ",소급년월:" + this.fnc_Trim(this.dsPY_REPAYD.getColumn(this.dsPY_REPAYD.rowposition, "RTBS_YMTH"));
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsPY_REPAYD")) {
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
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value));
        		sReturnString += " WAGE_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value));
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		
        	} else if (sKind == "PROC00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_DATE.value));
        		sReturnString += " WAGE_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRWAGE_CODE.value));
        		sReturnString += " RTBG_YMTH=" 	+ this.fnc_Quote(this.fnc_SubStr(this.popPROC.divRTBG_YMTH.fn_GetMonth()));
        		sReturnString += " RTED_YMTH="  + this.fnc_Quote(this.fnc_SubStr(this.popPROC.divRTED_YMTH.fn_GetMonth()));
        	
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
        		this.fnc_Information(this.stInformation, this.dsPY_REPAYD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_REPAYD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Information(this.stInformation, this.dsPY_REPAYD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM125", "소급계산이 정상으로 처리되었습니다.");

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

        	if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) { // 급여일지 조회 팝업
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRWAGE_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRWAGE_NAME";
        		arrParam[5] = "medSHRPAYX_DATE,edtSHRWAGE_CODE,edtSHRWAGE_NAME";
        		arrParam[6] = "0,1,2";
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 사원정보조회SHR(Popup)
                arrParam[0] = "HRM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHREMPL_NAME";
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
                arrParam[6] = "0,1";
            
            }
        	
        	this.fnc_HelpDialogeAction(this, obj, arrParam);

        } 
        /*------------------------------+
         |  데이터셋 컬럼 값 변경 時 |
         +------------------------------*/
        this.dsPY_REPAYD_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "RTA1_AMOT" ){	//기본급 인상금액
        		var nRTR1_AMOT = nexacro.toNumber(this.dsPY_REPAYD.getColumn( e.row, "RTA1_AMOT" )) 
        		               - nexacro.toNumber(this.dsPY_REPAYD.getColumn( e.row, "RTB1_AMOT" ))
        		this.dsPY_REPAYD.setColumn( e.row, "RTR1_AMOT", nRTR1_AMOT );

        	} else if ( e.columnid == "RTA2_AMOT"){	//연장수당 인상금액
        		var nRTR2_AMOT = nexacro.toNumber(this.dsPY_REPAYD.getColumn( e.row, "RTA2_AMOT" )) 
        		               - nexacro.toNumber(this.dsPY_REPAYD.getColumn( e.row, "RTB2_AMOT" ))
        		this.dsPY_REPAYD.setColumn( e.row, "RTR2_AMOT", nRTR2_AMOT );

        	} else if ( e.columnid == "RTA3_AMOT"){	//임원상여 인상금액
        		var nRTR3_AMOT = nexacro.toNumber(this.dsPY_REPAYD.getColumn( e.row, "RTA3_AMOT" )) 
        		               - nexacro.toNumber(this.dsPY_REPAYD.getColumn( e.row, "RTB3_AMOT" ))
        		this.dsPY_REPAYD.setColumn( e.row, "RTR3_AMOT", nRTR3_AMOT );

        	} else if ( e.columnid == "RTA4_AMOT"){	//휴일근무수당 인상금액
        		var nRTR4_AMOT = nexacro.toNumber(this.dsPY_REPAYD.getColumn( e.row, "RTA4_AMOT" )) 
        		               - nexacro.toNumber(this.dsPY_REPAYD.getColumn( e.row, "RTB4_AMOT" ))
        		this.dsPY_REPAYD.setColumn( e.row, "RTR4_AMOT", nRTR4_AMOT );
        	
        	}
        	
        }
        /*----------------------------+
         |  소급계산 버튼 클릭  時 |
         +----------------------------*/
        this.btn_PROC_OnClick = function(obj,e) {	
        	var nX 	= system.clientToScreenX(this.btn_PROC, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);
        	var nY 	= system.clientToScreenY(this.btn_PROC, this.btn_PROC.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);
        	
        	this.popPROC.trackPopup(nX, nY - 2);
        	this.popPROC.divRTBG_YMTH.calMONTH.setFocus();
        	
        }

        /*----------------------------------------------+
         |  소급계산 POPUP DIV의 닫기 버튼 클릭  時 |
         +----------------------------------------------*/
        this.popPROC_btn_REPAY_CLOSE_onclick = function(obj,e) {
        	this.popPROC.closePopup();
        	
        }

        /*--------------------------------------------------+
         |  소급계산 POPUP DIV의 소급계산 버튼 클릭  時 |
         +--------------------------------------------------*/
        this.popPROC_btn_REPAYCAL_onclick = function(obj,e) {

        	if (!this.fn_SearchItemCheck()) return;
        	
        	if (this.fnc_Length(this.fnc_Trim(this.popPROC.divRTBG_YMTH.fn_GetMonth())) < 6) {
        		this.fnc_SearchCheckPostAction("TMM072", "소급기간", this.popPROC.calRTBG_YMTH);
        		this.btn_PROC_OnClick();
        		return;
        	}	

        	if (this.fnc_Length(this.fnc_Trim(this.popPROC.divRTED_YMTH.fn_GetMonth())) < 6) {
        		this.fnc_SearchCheckPostAction("TMM072", "소급기간", this.popPROC.calRTED_YMTH);
        		this.btn_PROC_OnClick();
        		return;
        	}	
        	
        	if (this.popPROC.divRTBG_YMTH.fn_GetMonth() > this.popPROC.divRTED_YMTH.fn_GetMonth()) {
        		this.fnc_SearchCheckPostAction("TMM084", "소급기간", this.popPROC.calRTBG_YMTH);
        		this.btn_PROC_OnClick();
        		return;		
        	}
        	
        	if (this.fnc_SubStr(this.popPROC.divRTBG_YMTH.fn_GetMonth(),0,4) != this.fnc_SubStr(this.popPROC.divRTED_YMTH.fn_GetMonth(),0,4)) {
        		this.fnc_SearchCheckPostAction("PAY068", "", this.popPROC.calRTBG_YMTH);
        		this.btn_PROC_OnClick();
        		return;			
        	}
        	
        	if (!this.fnc_Message("PAY069", "")) return;
        	
        	var sMethodName = "PROC00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_REPAYD=dsPY_REPAYD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*----------------------------+
         |  일괄삭제 버튼 클릭  時 |
         +----------------------------*/
        this.btn_ALLDELETE_onclick = function(obj,e) {
        	if (this.fnc_Message("EVM005", "일괄삭제 ")) {
        		this.dsPY_REPAYD.deleteAll();
        		this.fn_Save();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_REPAYD.addEventHandler("oncolumnchanged", this.dsPY_REPAYD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdTR_MONEPL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popPROC.btn_REPAY_CLOSE.addEventHandler("onclick", this.popPROC_btn_REPAY_CLOSE_onclick, this);
            this.popPROC.btn_REPAYCAL.addEventHandler("onclick", this.popPROC_btn_REPAYCAL_onclick, this);
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_ALLDELETE.addEventHandler("onclick", this.btn_ALLDELETE_onclick, this);

        };

        this.loadIncludeScript("PAYC0255.xfdl");
        this.loadPreloadList();
       
    };
}
)();
