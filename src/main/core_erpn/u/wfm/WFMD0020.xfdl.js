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
                this.set_name("WFMD0020");
                this.set_titletext("월별차량운행현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_VEHCLG", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" type=\"STRING\" size=\"6\"/><Column id=\"VEHC_NUMB\" type=\"STRING\" size=\"20\"/><Column id=\"VEHC_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"SMLD_DIST\" type=\"INT\" size=\"20\"/><Column id=\"PMLD_DIST\" type=\"INT\" size=\"20\"/><Column id=\"TPMD_DIST\" type=\"INT\" size=\"20\"/><Column id=\"BSND_DIST\" type=\"INT\" size=\"20\"/><Column id=\"TADU_RATE\" type=\"FLOAT\" size=\"20\"/><Column id=\"FUL1_USGE\" type=\"INT\" size=\"20\"/><Column id=\"FUL2_USGE\" type=\"INT\" size=\"20\"/><Column id=\"FUEL_TAMT\" type=\"INT\" size=\"20\"/><Column id=\"FUEL_RATE\" type=\"FLOAT\" size=\"20\"/><Column id=\"MTV1_COST\" type=\"INT\" size=\"20\"/><Column id=\"MTV2_COST\" type=\"INT\" size=\"20\"/><Column id=\"MTV3_COST\" type=\"INT\" size=\"20\"/><Column id=\"MTV4_COST\" type=\"INT\" size=\"20\"/><Column id=\"MTV5_COST\" type=\"INT\" size=\"20\"/><Column id=\"MTV6_COST\" type=\"INT\" size=\"20\"/><Column id=\"MTVH_TAMT\" type=\"INT\" size=\"20\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"100\"/><Column id=\"APPR_DOCN\" type=\"STRING\" size=\"32\"/><Column id=\"APPS_CODE\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCW_VEHCLG1", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" type=\"STRING\" size=\"8\"/><Column id=\"VEHC_NUMB\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPMLD_DIST", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" type=\"STRING\" size=\"8\"/><Column id=\"VEHC_NUMB\" type=\"STRING\" size=\"20\"/><Column id=\"PMLD_DIST\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCW_VEHCLG2", this);
            obj._setContents("<ColumnInfo><Column id=\"FUL1_USGE\" type=\"STRING\" size=\"15\"/><Column id=\"FUL2_USGE\" type=\"STRING\" size=\"15\"/><Column id=\"FUEL_TAMT\" type=\"STRING\" size=\"15\"/><Column id=\"MTV1_COST\" type=\"STRING\" size=\"15\"/><Column id=\"MTV2_COST\" type=\"STRING\" size=\"15\"/><Column id=\"MTV3_COST\" type=\"STRING\" size=\"15\"/><Column id=\"MTV4_COST\" type=\"STRING\" size=\"15\"/><Column id=\"MTV5_COST\" type=\"STRING\" size=\"15\"/><Column id=\"MTV6_COST\" type=\"STRING\" size=\"15\"/><Column id=\"MTVH_TAMT\" type=\"STRING\" size=\"15\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("4");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("월별차량운행현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("7");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("기준월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "221", "71", "77", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("차량번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("13");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("15");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCW_VEHCLG", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("19");
            obj.set_binddataset("dsCW_VEHCLG");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"165\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"차량번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"차종\"/><Cell col=\"2\" colspan=\"5\" text=\"주행거리(Km)\"/><Cell col=\"7\" colspan=\"3\" text=\"연료사용량(L)\"/><Cell col=\"10\" rowspan=\"2\" text=\"연비\"/><Cell col=\"11\" colspan=\"7\" text=\"차량유지비\"/><Cell col=\"18\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"금월말\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"전월말\"/><Cell row=\"1\" col=\"4\" text=\"월합계\"/><Cell row=\"1\" col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"업무용\"/><Cell row=\"1\" col=\"6\" text=\"업무비율\"/><Cell row=\"1\" col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"한경\"/><Cell row=\"1\" col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"기타\"/><Cell row=\"1\" col=\"9\" text=\"계\"/><Cell row=\"1\" col=\"11\" cssclass=\"Cellgrd_WF_edit\" text=\"유류대\"/><Cell row=\"1\" col=\"12\" cssclass=\"Cellgrd_WF_edit\" text=\"주차비\"/><Cell row=\"1\" col=\"13\" cssclass=\"Cellgrd_WF_edit\" text=\"세차비\"/><Cell row=\"1\" col=\"14\" cssclass=\"Cellgrd_WF_edit\" text=\"소모품\"/><Cell row=\"1\" col=\"15\" cssclass=\"Cellgrd_WF_edit\" text=\"수리비\"/><Cell row=\"1\" col=\"16\" cssclass=\"Cellgrd_WF_edit\" text=\"대여료외\"/><Cell row=\"1\" col=\"17\" text=\"계\"/></Band><Band id=\"body\"><Cell edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" text=\"bind:VEHC_NUMB\" editlimit=\"20\" editdisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;display&quot; : &quot;edit&quot;\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"1\" text=\"bind:VEHC_NAME\" editlimit=\"50\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SMLD_DIST\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PMLD_DIST\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TPMD_DIST\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BSND_DIST\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TADU_RATE\" mask=\"####0.#\" editlimit=\"15\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:FUL1_USGE\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:FUL2_USGE\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FUEL_TAMT\" editlimit=\"15\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:FUEL_RATE\" mask=\"####0.##\" editlimit=\"15\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:MTV1_COST\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:MTV2_COST\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:MTV3_COST\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:MTV4_COST\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:MTV5_COST\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:MTV6_COST\" editlimit=\"15\" editdisplay=\"edit\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MTVH_TAMT\"/><Cell col=\"18\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"100\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;\" cssclass=\"Cellgrd_WF_sum01\" text=\"전월\"/><Cell col=\"1\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_sum01\" text=\"합계\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"12\" displaytype=\"number\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"13\" displaytype=\"number\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"14\" displaytype=\"number\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"15\" displaytype=\"number\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"16\" displaytype=\"number\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"17\" displaytype=\"number\" cssclass=\"Cellgrd_WF_sum01\"/><Cell col=\"18\" cssclass=\"Cellgrd_WF_sum01\"/><Cell row=\"1\" style=\"align:center middle;\" text=\"금월\"/><Cell row=\"1\" col=\"1\" style=\"align:center middle;\" text=\"합계\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" text=\"test1\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;FUL1_USGE&quot;, 0)\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;FUL2_USGE&quot;, 0)\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;FUEL_TAMT&quot;, 0)\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MTV1_COST&quot;, 0)\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MTV2_COST&quot;, 0)\"/><Cell row=\"1\" col=\"13\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MTV3_COST&quot;, 0)\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MTV4_COST&quot;, 0)\"/><Cell row=\"1\" col=\"15\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MTV5_COST&quot;, 0)\"/><Cell row=\"1\" col=\"16\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MTV6_COST&quot;, 0)\"/><Cell row=\"1\" col=\"17\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MTVH_TAMT&quot;, 0)\"/><Cell row=\"1\" col=\"18\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRVEHC_NUMB", "absolute", "290", "71", "110", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRVEHC_NUMB", "absolute", "402", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "192", "61", "40", "41", null, null, this);
            obj.set_taborder("21");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "423", "61", "40", "41", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "453", "71", "52", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "495", "71", "80", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "577", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "600", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.set_text("h 4");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.set_text("h 6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRSTDS_YMTH", "absolute", "83", "71", "109", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("월별차량운행현황");

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
        };
        
        // User Script
        this.addIncludeScript("WFMD0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMD0020.xfdl", function() {
        /****************************************************************************************************
         * # Program: 	 WFMD0020 월별차량운행등록
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.06		김용만		Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMD0020"; //해당 Form에서 사용 할 Package 명 
        this.sDOCUID 	  = "";
        this.sAPPR_SEQN   = "";
        this.sKeyValue = new Array();

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
        	
        	this.divSHRSTDS_YMTH.calMONTH.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6));
        	
        	this.divSHRSTDS_YMTH.fn_CalendarCustomEvent(this, "fnc_MonthOnChanged");
        		
        		
        		
        	//신청 및 내역에서 선택된 신청서 종류를 setting - 
        	this.sDOCUID = "KHR142";
        	//this.sDOCUID = "KHR110"; 
        	//결재문서가 만들어지기전까지 임시 사용
        	
        	this.dsTM_APPRXH.addRow();
        	this.dsTM_APPRXH.setColumn(0,"DOCU_IDXX",this.sDOCUID);
        	this.dsTM_APPRXH.setColumn(0,"EMPL_NUMB",application.GBL_EMPLNO);
        	this.dsTM_APPRXH.setColumn(0,"APPR_STAT","N");
        	this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME","월별차량운행현황"); 
        	this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);	
        	
        	
        	
        	//검색조건 포커스
        	this.divSHRSTDS_YMTH.calMONTH.setFocus();
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
        	
        	this.fnc_DatasetClear('dsCW_VEHCLG');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_VEHCLG=dsCW_VEHCLG";
        	
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_VEHCLG1=dsCW_VEHCLG1";
        	
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	

        	var sMethodName = "SEARCH03";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_VEHCLG2=dsCW_VEHCLG2";
        	
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	
        	this.grdCW_VEHCLG.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsCW_VEHCLG.addRow();
        	this.dsCW_VEHCLG.set_rowposition(iRow); 
        	
        	var mm 		= "";
        	
        	if(this.divSHRSTDS_YMTH.calMONTH.getMonth() < 10){
        		mm = "0" + this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}else{
        		mm = this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}

        	if (this.fnc_Length( this.fnc_Trim( this.divSHRSTDS_YMTH.calMONTH.getYear()+""+mm )) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년월", this.divSHRSTDS_YMTH.calMONTH);
        	}
        	
        	this.dsCW_VEHCLG.setColumn(iRow,"STDS_YMTH", this.divSHRSTDS_YMTH.calMONTH.getYear()+""+mm );

        	this.grdCW_VEHCLG.setCellPos(this.fnc_GridColumnIndex(this.grdCW_VEHCLG, "VEHC_NUMB"));
        	this.grdCW_VEHCLG.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsCW_VEHCLG.deleteRow(this.dsCW_VEHCLG.rowposition);
        	this.grdCW_VEHCLG.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsCW_VEHCLG");
        	this.fnc_DataSetCancel("dsCW_VEHCLG1");
        	this.fnc_DataSetCancel("dsCW_VEHCLG2");
        	this.fnc_DataSetCancel("dsPMLD_DIST");
        	this.grdCW_VEHCLG.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsCW_VEHCLG.getColumn(this.dsCW_VEHCLG.rowposition,"VEHC_NUMB");
        		
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsCW_VEHCLG=dsCW_VEHCLG:U ";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCW_VEHCLG.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_VEHCLG", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_VEHCLG")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	var yyyy 	= this.divSHRSTDS_YMTH.calMONTH.getYear();
        	var mm 		= "";
        	
        	if(this.divSHRSTDS_YMTH.calMONTH.getMonth() < 10){
        		mm = "0" + this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}else{
        		mm = this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim( yyyy+""+mm  )) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년월", this.divSHRSTDS_YMTH.calMONTH);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsCW_VEHCLG.getRowCount() < 1) {	 //삭제할 자료가 없습니다
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText = "차량번호:" + this.fnc_Trim(this.dsCW_VEHCLG.getColumn(this.dsCW_VEHCLG.rowposition, "VEHC_NUMB"));
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsCW_VEHCLG")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var rowCnt = this.dsCW_VEHCLG.getRowCount();
        	var rowCntKey = this.dsCW_VEHCLG1.getRowCount();
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < rowCnt; i++) {

        		if (this.fnc_ToUpper(this.dsCW_VEHCLG.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_VEHCLG.getColumn(i, 'VEHC_NUMB'))) < 1) {
        			this.grdCW_VEHCLG.setCellPos(this.fnc_GridColumnIndex(this.grdCW_VEHCLG, "VEHC_NUMB"));
        			this.grdCW_VEHCLG.setFocus();
        			return this.fnc_CheckPostAction("TMM072", "차량번호", this.dsCW_VEHCLG, i, this.grdCW_VEHCLG, "VEHC_NUMB");
        		}
        		
        		if( this.dsCW_VEHCLG.getColumn(i,"SMLD_DIST") < this.dsCW_VEHCLG.getColumn(i,"PMLD_DIST") ){
        			this.grdCW_VEHCLG.setCellPos(this.fnc_GridColumnIndex(this.grdCW_VEHCLG, "SMLD_DIST"));
        			this.grdCW_VEHCLG.setFocus();
        			return this.fnc_SearchCheckPostAction("TMM042", "금월말주행거리,전월말주행거리", this.dsCW_VEHCLG, i, this.grdCW_VEHCLG, "SMLD_DIST");
        		}
        	}
        	
        	for(var i=0;i< rowCnt; i++){
        		
        		for(var j=0;j<rowCntKey; j++){
        			if( this.dsCW_VEHCLG.getColumn(i,"VEHC_NUMB") == this.dsCW_VEHCLG1.getColumn(j,"VEHC_NUMB") && this.dsCW_VEHCLG.getRowType(i) != "1" && this.dsCW_VEHCLG.getRowType(i) != "4"){
        			
        				this.fnc_Message("TMM077",this.dsCW_VEHCLG.getColumn(i,"VEHC_NUMB"));
        				this.grdCW_VEHCLG.setCellPos(this.fnc_GridColumnIndex(this.grdCW_VEHCLG, "VEHC_NUMB"));
        				this.grdCW_VEHCLG.setFocus();
        				return false;
        			}
        		}
        	}
        	
        	return true;

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	var yyyy 	= this.divSHRSTDS_YMTH.calMONTH.getYear();
        	var mm 		= "";
        	
        	if(this.divSHRSTDS_YMTH.calMONTH.getMonth() < 10){
        		mm = "0" + this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}else{
        		mm = this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" 		 + this.fnc_Quote(this.fnc_Trim( yyyy+""+mm )); 
        		sReturnString += " VEHC_NUMB=" 	 	 + this.fnc_Quote(this.fnc_Trim(this.edtSHRVEHC_NUMB.value)); 
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        	

        	} 
        	// 조회1 Argument 생성
        	if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim( yyyy+""+mm ));
        		sReturnString += " VEHC_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRVEHC_NUMB.value)); 
        	} 
        	
        	// 조회2 Argument 생성
        	if (sKind == 'SEARCH02') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim( yyyy+""+mm  ));
        		sReturnString += " VEHC_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsCW_VEHCLG.getColumn(this.grdCW_VEHCLG.currentrow,"VEHC_NUMB"))); 
        	} 
        	
        		// 조회2 Argument 생성
        	if (sKind == 'SEARCH03') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" 		 + this.fnc_Quote(this.fnc_Trim( yyyy+""+mm )); 
        		sReturnString += " VEHC_NUMB=" 	 	 + this.fnc_Quote(this.fnc_Trim(this.edtSHRVEHC_NUMB.value)); 
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        	} 
        	
        	// 저장 Argument 생성
        	else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
        	}
        	
        		// 저장 Argument 생성
        	else if (sKind == 'SAVE01') {

        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
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
        		var yyyy 	= this.divSHRSTDS_YMTH.calMONTH.getYear();
        		var mm 		= "";
        		
        		if(this.divSHRSTDS_YMTH.calMONTH.getMonth() < 10){
        			mm = "0" + this.divSHRSTDS_YMTH.calMONTH.getMonth();
        		}else{
        			mm = this.divSHRSTDS_YMTH.calMONTH.getMonth();
        		}

        		var sSubjName = yyyy+"년 "+mm + "월 차량경비현황" ;
        		
        		this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME",sSubjName); 
        		
        		this.fnc_Information(this.stInformation, this.dsCW_VEHCLG.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCW_VEHCLG.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		if(this.dsCW_VEHCLG.getRowCount() > 0){
        			this.btn_PROC.set_enable(true);
        		}else{
        			this.btn_PROC.set_enable(false);
        		}
        		
        		if( this.sKeyValue[0] != ""){
        			var irow = this.dsCW_VEHCLG.findRow("VEHC_NUMB",this.sKeyValue[0]);
        			this.sKeyValue[0] = "";
        			if(irow < 0) irow = 0;
        			this.dsCW_VEHCLG.set_rowposition(irow);
        		}
        	
        	}
        	else if (sMethodName == 'SEARCH03') {
        		
        		this.grdCW_VEHCLG.setCellProperty("Summ", 7, "text", this.dsCW_VEHCLG2.getColumn(0,"FUL1_USGE"));
        		this.grdCW_VEHCLG.setCellProperty("Summ", 8, "text", this.dsCW_VEHCLG2.getColumn(0,"FUL2_USGE"));
        		this.grdCW_VEHCLG.setCellProperty("Summ", 9, "text",this.dsCW_VEHCLG2.getColumn(0,"FUEL_TAMT"));
        		
        		this.grdCW_VEHCLG.setCellProperty("Summ", 11, "text", this.dsCW_VEHCLG2.getColumn(0,"MTV1_COST"));
        		this.grdCW_VEHCLG.setCellProperty("Summ", 12, "text", this.dsCW_VEHCLG2.getColumn(0,"MTV2_COST"));
        		this.grdCW_VEHCLG.setCellProperty("Summ", 13, "text", this.dsCW_VEHCLG2.getColumn(0,"MTV3_COST"));
        		this.grdCW_VEHCLG.setCellProperty("Summ", 14, "text", this.dsCW_VEHCLG2.getColumn(0,"MTV4_COST"));
        		this.grdCW_VEHCLG.setCellProperty("Summ", 15, "text", this.dsCW_VEHCLG2.getColumn(0,"MTV5_COST"));
        		this.grdCW_VEHCLG.setCellProperty("Summ", 16, "text", this.dsCW_VEHCLG2.getColumn(0,"MTV6_COST"));
        		this.grdCW_VEHCLG.setCellProperty("Summ", 17, "text", this.dsCW_VEHCLG2.getColumn(0,"MTVH_TAMT"));
        		
        	}
        	else if (sMethodName == 'SAVE00') {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_KeyFieldDisible(this.dsCW_VEHCLG);
        		this.fn_Search();
        	}
        	else if (sMethodName == "SAVE01") {
        	
        		/*결재 head 저장 후 결재문서 상신*/
        		this.fn_apprProcess("createDoc");
        	
        	}else if (sMethodName == "sendApproval") {
        		
        		/*
        		var sUrl = "http://dev.nsgportal.net/ekp/user.do?cmd=goNsDraft&cmpID=CK";
        		var sPostData = "&jobID="+this.dsTM_APPROVAL.getColumn(0,"documentType")
        					+ "&docID="+this.dsTM_APPROVAL.getColumn(0, "documentID")
        					+ "&userID="+  "1996028";
        					
        					//"gwtest07"; //★application.GBL_EMPLNO;
        		*/
        		
        		this.fnc_ShowApproval(this.sAPPR_GUBN, this.dsTM_APPROVAL.getColumn(0,"documentID"), this.dsTM_APPROVAL.getColumn(0,"documentType"));
        		
        		
        		if(nexacro.Browser == "Runtime"){  /*런타임 모드일때*/
        			system.execBrowser(sUrl+sPostData);
        		}else{								/*브라우저일때*/
        			window.open(sUrl+sPostData);
        		}			
        	} 

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdCW_VEHCLG.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdCW_VEHCLG, "STDS_YMTH"), "edittype", "normal");			
        	} else {
        		this.grdCW_VEHCLG.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdCW_VEHCLG, "STDS_YMTH"), "edittype", "none");
        	} 
        }

        
        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
         
         /*결재상신 - 월별차량운행등록 결재는 취소 없음.*/
         this.fn_apprProcess = function(sGubn){	/* sGubn 값으로 createDoc or deleteDoc 값을 받는다.*/

        	var sXmlStr = "";
        	var sSubject 	= this.dsTM_APPRXH.getColumn(0,"SUBJ_NAME"); 
        	var sApprDocId	= this.sDOCUID + "-" + this.sAPPR_SEQN;/*DOCU_IDXX 과 APPR_SEQN 조합*/ 
        	
        	
        	var ful1UsgeTot = 0;
        	var ful2UsgeTot = 0;
        	var fuelTamtTot = 0;

        	var mtv1CostTot = 0;
        	var mtv2CostTot = 0;
        	var mtv3CostTot = 0;
        	var mtv4CostTot = 0;
        	var mtv5CostTot = 0;
        	var mtv6CostTot = 0;
        	var mtvhTamtTot = 0;
        	
        	var ful1UsgeTotBefo = this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text")  == null ? 0: fn_addComma(this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text"));
        	var ful2UsgeTotBefo = this.grdCW_VEHCLG.getCellProperty("Summ", 8, "text")  == null ? 0: fn_addComma(this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text"));
        	var fuelTamtTotBefo = this.grdCW_VEHCLG.getCellProperty("Summ", 9, "text")  == null ? 0: fn_addComma(this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text"));
        	var mtv1CostTotBefo = this.grdCW_VEHCLG.getCellProperty("Summ", 11, "text") == null ? 0: fn_addComma(this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text"));
        	var mtv2CostTotBefo = this.grdCW_VEHCLG.getCellProperty("Summ", 12, "text") == null ? 0: fn_addComma(this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text"));
        	var mtv3CostTotBefo = this.grdCW_VEHCLG.getCellProperty("Summ", 13, "text") == null ? 0: fn_addComma(this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text"));
        	var mtv4CostTotBefo = this.grdCW_VEHCLG.getCellProperty("Summ", 14, "text") == null ? 0: fn_addComma(this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text"));
        	var mtv5CostTotBefo = this.grdCW_VEHCLG.getCellProperty("Summ", 15, "text") == null ? 0: fn_addComma(this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text"));
        	var mtv6CostTotBefo = this.grdCW_VEHCLG.getCellProperty("Summ", 16, "text") == null ? 0: fn_addComma(this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text"));
        	var mtvhTamtTotBefo = this.grdCW_VEHCLG.getCellProperty("Summ", 17, "text") == null ? 0: fn_addComma(this.grdCW_VEHCLG.getCellProperty("Summ", 7, "text"));

        	sXmlStr +="	<style>td {border:1px solid black; Font-size:12px; height:30px; }		";
        	sXmlStr +="	.label1 { background-color:#cccccc; font-weight:bold; text-align: center; }     ";
        	sXmlStr +="	.label2 { padding-left: 5px; }                                                  ";
        	sXmlStr +="	.label3 { text-align: center; }                                                 ";
        	sXmlStr +="	.label4 { text-align: right; padding-right: 5px; }                              ";
        	sXmlStr +="	</style>                                                                        ";
        	// sXmlStr +="	<table style='width:670px;border:1px'>                                          ";  //세로 양식일 때 width 사이즈 670
        	sXmlStr +="	<table style='width:1000px;border:1px'>                                          "; 	//가로 양식일 때 width 사이즈 1000
        	sXmlStr +="	  <col width=6%>                                                               ";
        	sXmlStr +="	  <col width=6%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=6%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=4%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=6%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=6%>                                                               ";
        	sXmlStr +="	  <col width=5%>                                                               ";
        	sXmlStr +="	  <col width=4%>                                                               ";
        	
        	sXmlStr +="	  <tr>                                                                          ";
        	sXmlStr +="	    <td class='label1' rowspan='2' >차량번호</td>                               ";
        	sXmlStr +="	    <td class='label1' rowspan='2' >차종</td>                                   ";
        	sXmlStr +="	    <td class='label1' colspan='5'  >주행거리(km)</td>                          ";
        	sXmlStr +="	    <td class='label1' colspan='3' >연료사용량(L)</td>                          ";
        	sXmlStr +="	    <td class='label1' rowspan='2' >연비</td>                                   ";
        	sXmlStr +="	    <td class='label1' colspan='7' >차량유지비</td>                             ";
        	sXmlStr +="	    <td class='label1' rowspan='2' >비고</td>                                   ";
        	sXmlStr +="	  </tr>                                                                         ";
        	sXmlStr +="	  <tr>                                                                          ";
        	sXmlStr +="	    <td class='label1'>금월말</td>                                              ";
        	sXmlStr +="	    <td class='label1'>전월말</td>                                              ";
        	sXmlStr +="	    <td class='label1'>월 합계</td>                                             ";
        	sXmlStr +="	    <td class='label1'>업무용</td>                                              ";
        	sXmlStr +="	    <td class='label1'>업무비율</td>                                            ";
        	sXmlStr +="	    <td class='label1'>한경</td>                                                ";
        	sXmlStr +="	    <td class='label1'>기타</td>                                                ";
        	sXmlStr +="	    <td class='label1'>계</td>                                                  ";
        	sXmlStr +="	    <td class='label1'>유류비</td>                                              ";
        	sXmlStr +="	    <td class='label1'>주차비</td>                                              ";
        	sXmlStr +="	    <td class='label1'>세차비</td>                                              ";
        	sXmlStr +="	    <td class='label1'>소모품비</td>                                            ";
        	sXmlStr +="	    <td class='label1'>수리비</td>                                              ";
        	sXmlStr +="	    <td class='label1'>대여료외</td>                                            ";
        	sXmlStr +="	    <td class='label1'>계</td>		                                        ";
        	sXmlStr +="                                                                                     ";
        	sXmlStr +="	 </tr>                                                                          ";
        	
        	for(var i = 0; i < this.dsCW_VEHCLG.getRowCount(); i++){
        	
        		var smldDist = (this.dsCW_VEHCLG.getColumn(i,"SMLD_DIST") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"SMLD_DIST"));
        		var pmldDist = (this.dsCW_VEHCLG.getColumn(i,"PMLD_DIST") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"PMLD_DIST"));
        		var tpmdDist = (this.dsCW_VEHCLG.getColumn(i,"TPMD_DIST") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"TPMD_DIST"));
        		var bsndDist = (this.dsCW_VEHCLG.getColumn(i,"BSND_DIST") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"BSND_DIST"));
        		var taduRate = (this.dsCW_VEHCLG.getColumn(i,"TADU_RATE") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"TADU_RATE"));
        		
        		taduRate = Math.round(taduRate*10) / 10;
        		
        		var ful1Usge = (this.dsCW_VEHCLG.getColumn(i,"FUL1_USGE") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"FUL1_USGE"));
        		var ful2Usge = (this.dsCW_VEHCLG.getColumn(i,"FUL2_USGE") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"FUL2_USGE"));
        		var fuelTamt = (this.dsCW_VEHCLG.getColumn(i,"FUEL_TAMT") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"FUEL_TAMT"));
        		var fuelRate = (this.dsCW_VEHCLG.getColumn(i,"FUEL_RATE") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"FUEL_RATE"));
        		
        		fuelRate = Math.round(fuelRate*100) / 100;
        		
        		var mtv1Cost = (this.dsCW_VEHCLG.getColumn(i,"MTV1_COST") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"MTV1_COST"));
        		var mtv2Cost = (this.dsCW_VEHCLG.getColumn(i,"MTV2_COST") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"MTV2_COST"));
        		var mtv3Cost = (this.dsCW_VEHCLG.getColumn(i,"MTV3_COST") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"MTV3_COST"));
        		var mtv4Cost = (this.dsCW_VEHCLG.getColumn(i,"MTV4_COST") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"MTV4_COST"));
        		var mtv5Cost = (this.dsCW_VEHCLG.getColumn(i,"MTV5_COST") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"MTV5_COST"));
        		var mtv6Cost = (this.dsCW_VEHCLG.getColumn(i,"MTV6_COST") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"MTV6_COST"));
        		var mtvhTamt = (this.dsCW_VEHCLG.getColumn(i,"MTVH_TAMT") == null ? 0: this.dsCW_VEHCLG.getColumn(i,"MTVH_TAMT"));
        				
        		ful1UsgeTot +=  ful1Usge;
        		ful2UsgeTot +=  ful2Usge;
        		fuelTamtTot +=  fuelTamt;
        				
        		mtv1CostTot +=  mtv1Cost;
        		mtv2CostTot +=  mtv2Cost;
        		mtv3CostTot +=  mtv3Cost;
        		mtv4CostTot +=  mtv4Cost;
        		mtv5CostTot +=  mtv5Cost;
        		mtv6CostTot +=  mtv6Cost;
        		mtvhTamtTot +=  mtvhTamt;
        		
        		sXmlStr +="	 <tr>												";
        		sXmlStr +="	    	<td class='label2'>" + this.dsCW_VEHCLG.getColumn(i,"VEHC_NUMB") + "</td> 		";	
        		sXmlStr +="	    	<td class='label2'>" + this.dsCW_VEHCLG.getColumn(i,"VEHC_NAME") + "</td>		";	
        		sXmlStr +="	    	<td class='label2' style='text-align:right'>" + fn_addComma(smldDist) + "</td>		";	
        		sXmlStr +="	    	<td class='label2' style='text-align:right'>" + fn_addComma(pmldDist) + "</td>		";	
        		sXmlStr +="	    	<td class='label2' style='text-align:right'>" + fn_addComma(tpmdDist) + "</td>		";
        		sXmlStr +="	    	<td class='label2' style='text-align:right'>" + fn_addComma(bsndDist) + "</td>		";	
        		sXmlStr +="	    	<td class='label2' style='text-align:right'>" + fn_addComma(taduRate) + "</td>		";
        		sXmlStr +="	    	<td class='label2' style='text-align:right'>" + fn_addComma(ful1Usge) + "</td>		";
        		sXmlStr +="	    	<td class='label2' style='text-align:right'>" + fn_addComma(ful2Usge) + "</td>		";	
        		sXmlStr +="	    	<td class='label2' style='text-align:right'>" + fn_addComma(fuelTamt) + "</td>		";	
        		sXmlStr +="		<td class='label2' style='text-align:right'>" + fn_addComma(fuelRate) + "</td> 	        ";
        		sXmlStr +="		<td class='label2' style='text-align:right'>" + fn_addComma(mtv1Cost) + "</td> 	        ";
        		sXmlStr +="		<td class='label2' style='text-align:right'>" + fn_addComma(mtv2Cost) + "</td> 	        ";
        		sXmlStr +="		<td class='label2' style='text-align:right'>" + fn_addComma(mtv3Cost) + "</td> 	        ";
        		sXmlStr +="		<td class='label2' style='text-align:right'>" + fn_addComma(mtv4Cost) + "</td> 	        ";
        		sXmlStr +="		<td class='label2' style='text-align:right'>" + fn_addComma(mtv5Cost) + "</td> 	        ";
        		sXmlStr +="		<td class='label2' style='text-align:right'>" + fn_addComma(mtv6Cost) + "</td> 	        ";
        		sXmlStr +="		<td class='label2' style='text-align:right'>" + fn_addComma(mtvhTamt) + "</td> 	        ";
        		sXmlStr +="		<td class='label2' style='text-align:left'>" + this.dsCW_VEHCLG.getColumn(i,"REMK_100X") + "</td> 	        ";
        		sXmlStr +="	</tr>                                                                                   ";
        	} 
        		sXmlStr +="	<tr>                                                                                   ";
        		sXmlStr +="			<td class='label1' colspan='2'>전월 합계</td>                                   ";
        		sXmlStr +="			<td class='label2'></td>			                                ";
        		sXmlStr +="		    <td class='label2'></td>			                                        ";
        		sXmlStr +="		    <td class='label2'></td>			                                        ";
        		sXmlStr +="		    <td class='label2'></td>		                                                ";
        		sXmlStr +="		    <td class='label2'></td>			                                        ";
        		sXmlStr +="		    <td class='label2' style='text-align:right'>" + ful1UsgeTotBefo + "</td>	";	
        		sXmlStr +="		    <td class='label2' style='text-align:right'>" + ful2UsgeTotBefo + "</td>	";	
        		sXmlStr +="		    <td class='label2' style='text-align:right'>" + fuelTamtTotBefo + "</td>		";	
        		sXmlStr +="		    <td class='label2'></td>			                                        ";
        		sXmlStr +="			<td class='label2' style='text-align:right'>" + mtv1CostTotBefo+ "</td> 	";
        		sXmlStr +="			<td class='label2' style='text-align:right'>" + mtv2CostTotBefo+ "</td> 	";
        		sXmlStr +="			<td class='label2' style='text-align:right'>" + mtv3CostTotBefo+ "</td> 	";
        		sXmlStr +="			<td class='label2' style='text-align:right'>" + mtv4CostTotBefo+ "</td> 	";
        		sXmlStr +="			<td class='label2' style='text-align:right'>" + mtv5CostTotBefo+ "</td> 	                                                ";
        		sXmlStr +="			<td class='label2' style='text-align:right'>" + mtv6CostTotBefo+ "</td> 	";
        		sXmlStr +="			<td class='label2' style='text-align:right'>" + mtvhTamtTotBefo+ "</td> 	";
        		sXmlStr +="			<td class='label2'></td> 	                                                ";
        		sXmlStr +="	</tr>                                                                                            ";
        	                                                                                                     
        		sXmlStr +=" 	<tr>                                                                                           ";
        		sXmlStr +=" 			<td class='label1' colspan='2'>금월 합계</td>                                   ";
        		sXmlStr +=" 			<td class='label2'></td>			                                ";
        		sXmlStr +=" 		    <td class='label2'></td>			                                        ";
        		sXmlStr +=" 		    <td class='label2'></td>			                                        ";
        		sXmlStr +=" 		    <td class='label2'></td>		                                                ";
        		sXmlStr +=" 		    <td class='label2'></td>			                                        ";
        		sXmlStr +=" 		    <td class='label2' style='text-align:right'>" + fn_addComma(ful1UsgeTot) + "</td>	";	
        		sXmlStr +=" 		    <td class='label2' style='text-align:right'>" + fn_addComma(ful2UsgeTot) + "</td>	";	
        		sXmlStr +=" 		    <td class='label2' style='text-align:right'>" + fn_addComma(fuelTamtTot) + "</td>		";	
        		sXmlStr +=" 		    <td class='label2'></td>			                                        ";
        		sXmlStr +=" 			<td class='label2' style='text-align:right'>" + fn_addComma(mtv1CostTot) + "</td> 	";
        		sXmlStr +=" 			<td class='label2' style='text-align:right'>" + fn_addComma(mtv2CostTot) + "</td> 	";
        		sXmlStr +=" 			<td class='label2' style='text-align:right'>" + fn_addComma(mtv3CostTot) + "</td> 	";
        		sXmlStr +=" 			<td class='label2' style='text-align:right'>" + fn_addComma(mtv4CostTot) + "</td> 	                                                ";
        		sXmlStr +=" 			<td class='label2' style='text-align:right'>" + fn_addComma(mtv5CostTot) + "</td> 	";
        		sXmlStr +=" 			<td class='label2' style='text-align:right'>" + fn_addComma(mtv6CostTot) + "</td> 	";
        		sXmlStr +=" 			<td class='label2' style='text-align:right'>" + fn_addComma(mtvhTamtTot) + "</td> 	";
        		sXmlStr +=" 			<td class='label2'></td> 	                                                ";
        		sXmlStr +=" 	</tr>                                                                                           ";
        		sXmlStr +=" </table>	                                                                                        ";

        	this.dsTM_APPROVAL.deleteAll();
        	var nRow = this.dsTM_APPROVAL.addRow();
        		
        	this.dsTM_APPROVAL.setColumn(nRow, "documentID", sApprDocId);				/*문서번호*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentType", this.sDOCUID);			/*문서종류*/
        	this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument", sXmlStr);				/*결재문서에 그릴HTML*/
        	this.dsTM_APPROVAL.setColumn(nRow, "subject", sSubject);					/*결재문서 제목*/
        	this.dsTM_APPROVAL.setColumn(nRow, "recipient",application.GBL_EMPLNO); 				//★application.GBL_EMPLNO);	/*기안자사번- 샘플로 gwtest07*/
        	this.dsTM_APPROVAL.setColumn(nRow, "creator",application.GBL_USERNM);    				//★application.GBL_USERNM);		/*기안자성명*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentStatus", sGubn);				/*결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc*/
        	this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile", "F");						/*첨부파일여부*/
        	
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
         }
         
         
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        
        	var arrParam = new Array();

        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 조회조건 - 차량정보조회(Popup)
        	if ((obj.name == "imgHelpSHRVEHC_NUMB") ) {
        	
        		arrParam[0] = "WFM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRVEHC_NUMB.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRVEHC_NUMB";
        		arrParam[5] = "edtSHRVEHC_NUMB";
        		//arrParam[4] = "edtSHREMPL_NAME";
        		//arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 그리드 - 차량정보조회(Popup)
        	if (obj.name == "grdCW_VEHCLG") {
        		if (obj.getCellProperty("body", obj.currentcell, "text") == "bind:VEHC_NUMB"
        			|| sColumnID == "VEHC_NUMB" || this.fnc_getGridHelpColName(obj, sFromDs) == "VEHC_NUMB" 
        			) 
        		 {
        			
        			arrParam[0] = "WFM0004"; 
        			arrParam[1] = "";
        			arrParam[2] = "VEHC_NUMB";
        			arrParam[3] = "N";
        			arrParam[4] = "grdCW_VEHCLG";
        			arrParam[5] = "VEHC_NUMB,VEHC_NAME";  
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			var sMethodName = "SEARCH02";
        			var sInDataSet = "";
        			var sOutDataSet = "dsPMLD_DIST=dsPMLD_DIST";
        			
        			var sArgument = this.fn_CreateArgument(sMethodName);

        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}

        }

        this.dsCW_VEHCLG_onvaluechanged = function(obj,e)
        {
        	var currRow = this.grdCW_VEHCLG.currentrow;
        	
        	if(e.columnid == 'VEHC_NUMB'){
        		var sMethodName = "SEARCH02";
        		var sInDataSet = "";
        		var sOutDataSet = "dsPMLD_DIST=dsPMLD_DIST";
        		
        		var sArgument = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        	//금월말 주행거리 변경
        	if(e.columnid == 'SMLD_DIST'){
        	
        		if(this.dsCW_VEHCLG.getColumn(e.row,"VEHC_NUMB") != null){
        		
        		var sMethodName = "SEARCH02";
        		var sInDataSet = "";
        		var sOutDataSet = "dsPMLD_DIST=dsPMLD_DIST";
        		
        		var sArgument = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        		this.fn_calcTpmdDist();
        		this.fn_calcBsndDist(); 
        		this.fn_calcFulUsge();
        		
        		}
        		
        		if(this.dsCW_VEHCLG.getColumn(e.row,"VEHC_NUMB") == null && this.dsCW_VEHCLG.getColumn(e.row,"SMLD_DIST") != "" ){
        			this.fnc_Message("TMM025", "차량번호");
        			this.dsCW_VEHCLG.setColumn(currRow,"SMLD_DIST","");
        			this.grdCW_VEHCLG.setCellPos(this.fnc_GridColumnIndex(this.grdCW_VEHCLG, "VEHC_NUMB"));
        			this.grdCW_VEHCLG.setFocus();
        		}
        		
        	}
        	// 전월말 주행거리 변경
        	if(e.columnid == 'PMLD_DIST'){

        			this.fn_calcTpmdDist();
        			this.fn_calcBsndDist(); 
        			this.fn_calcFulUsge();
        		
        		
        	}
        	
        	//업무용 주행거리 변경
        	if(e.columnid == 'BSND_DIST'){
        	
        		var currRow = this.grdCW_VEHCLG.currentrow;
        		
        		if( this.dsCW_VEHCLG.getColumn(e.row,"TPMD_DIST") < this.dsCW_VEHCLG.getColumn(e.row,"BSND_DIST")){
        			this.fnc_Message("TMM022", "업무용 주행거리","월합계");
        			this.dsCW_VEHCLG.setColumn(currRow,"BSND_DIST","");
        			
        		}else{
        			this.fn_calcBsndDist();
        		}
        	}
        	
        	//연료사용량1,2 변경
        	if(e.columnid == 'FUL1_USGE' || e.columnid == 'FUL2_USGE'  ){
        		this.fn_calcFulUsge();
        	}
        	
        	//차량유지비1,2,3,4,5,6 변경
        	if(e.columnid == 'MTV1_COST' || e.columnid == 'MTV2_COST' || e.columnid == 'MTV3_COST' || e.columnid == 'MTV4_COST' || e.columnid == 'MTV5_COST'|| e.columnid == 'MTV6_COST'){
        		this.fn_calcMtvCost();
        	}
        	
        	// 차량번호 공백입력시 차량명 초기화 
        	if(e.columnid == 'VEHC_NUMB' && this.dsCW_VEHCLG.getColumn(currRow,"VEHC_NUMB") == ""){
        		 this.dsCW_VEHCLG.setColumn(currRow,"VEHC_NAME","");
        	}
        }

        // 월합계 자동계산
        this.fn_calcTpmdDist = function (){

        		var currRow = this.grdCW_VEHCLG.currentrow;
        		
        		var pmldDist = this.dsPMLD_DIST.getColumn(0,"PMLD_DIST");
        		var smldDist = this.dsCW_VEHCLG.getColumn(currRow,"SMLD_DIST");
        		
        		pmldDist = (pmldDist == null ? 0: pmldDist);
        		smldDist = (smldDist == null ? 0: smldDist);
        		
        		var tpmdDist = parseInt(smldDist) - parseInt(pmldDist);
        		

        		this.dsCW_VEHCLG.setColumn(currRow,"PMLD_DIST",pmldDist);
        		this.dsCW_VEHCLG.setColumn(currRow,"TPMD_DIST",tpmdDist);

        }
        		

        // 업무비율 자동계산
        this.fn_calcBsndDist = function (){

        		var currRow  = this.grdCW_VEHCLG.currentrow;
        		var bsndDist = this.dsCW_VEHCLG.getColumn(currRow,"BSND_DIST");
        		var tpmdDist = this.dsCW_VEHCLG.getColumn(currRow,"TPMD_DIST");
        		
        		bsndDist = (bsndDist == null ? 0: bsndDist);
        		tpmdDist = (tpmdDist == null ? 0: tpmdDist);
        			
        		var taduRate = ( parseInt(bsndDist) / parseInt(tpmdDist) ) * 100 ;
        		taduRate = Math.round(taduRate * 10) / 10;
        		
        		this.dsCW_VEHCLG.setColumn(currRow,"TADU_RATE",taduRate);
        }

        //연료 사용량 합계 및 연비 계산
        this.fn_calcFulUsge = function (){

        	var currRow  = this.grdCW_VEHCLG.currentrow;
        	var ful1Usge = this.dsCW_VEHCLG.getColumn(currRow,"FUL1_USGE");
        	var ful2Usge = this.dsCW_VEHCLG.getColumn(currRow,"FUL2_USGE");
        	var tpmDist = this.dsCW_VEHCLG.getColumn(currRow,"TPMD_DIST");

        	ful1Usge = (ful1Usge == null ? 0: ful1Usge);
        	ful2Usge = (ful2Usge == null ? 0: ful2Usge); 
        	tpmDist = (tpmDist == null ? 0: tpmDist);
        	
        	var fuelTamt = parseInt(ful1Usge) + parseInt(ful2Usge);		
        	var fuelRate = parseInt(tpmDist) / parseInt(fuelTamt) ;
        	fuelRate = Math.round(fuelRate * 100) / 100;
        	
        	fuelTamt = (fuelTamt == null ? 0: fuelTamt);
        	fuelRate = (fuelRate == null ? 0: fuelRate);
        	
        	this.dsCW_VEHCLG.setColumn(currRow,"FUEL_TAMT",fuelTamt);
        	this.dsCW_VEHCLG.setColumn(currRow,"FUEL_RATE",fuelRate);
        }

        //차량유지비 자동계산
        this.fn_calcMtvCost = function (){

        		var currRow  = this.grdCW_VEHCLG.currentrow;
        		var mtv1Cost = this.dsCW_VEHCLG.getColumn(currRow,"MTV1_COST");
        		var mtv2Cost = this.dsCW_VEHCLG.getColumn(currRow,"MTV2_COST");
        		var mtv3Cost = this.dsCW_VEHCLG.getColumn(currRow,"MTV3_COST");
        		var mtv4Cost = this.dsCW_VEHCLG.getColumn(currRow,"MTV4_COST");
        		var mtv5Cost = this.dsCW_VEHCLG.getColumn(currRow,"MTV5_COST");
        		var mtv6Cost = this.dsCW_VEHCLG.getColumn(currRow,"MTV6_COST");
        		
        		mtv1Cost = (mtv1Cost == null ? 0: mtv1Cost);
        		mtv2Cost = (mtv2Cost == null ? 0: mtv2Cost);
        		mtv3Cost = (mtv3Cost == null ? 0: mtv3Cost);
        		mtv4Cost = (mtv4Cost == null ? 0: mtv4Cost);
        		mtv5Cost = (mtv5Cost == null ? 0: mtv5Cost);
        		mtv6Cost = (mtv6Cost == null ? 0: mtv6Cost);

        		var mtvgTamt = parseInt(mtv1Cost) + parseInt(mtv2Cost) + parseInt(mtv3Cost) + parseInt(mtv4Cost) + parseInt(mtv5Cost) + parseInt(mtv6Cost);
        		
        		this.dsCW_VEHCLG.setColumn(currRow,"MTVH_TAMT",mtvgTamt);
        }

        this.btn_PROC_OnClick = function(obj,e)
        {
        	/*	결재상신 클릭 시 
        		결재해더 데이터 저장 -> 결재상신 요청 -> 결재상신 문서 팝업
        		fn_PostProcess에서 위의 순서대로 하나씩 처리
        	*/
        	
        	this.fn_Search();
        	
        	var mm 		= "";
        	
        	if(this.divSHRSTDS_YMTH.calMONTH.getMonth() < 10){
        		mm = "0" + this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}else{
        		mm = this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}
        	
        	if(confirm(this.divSHRSTDS_YMTH.calMONTH.getYear()+"년 "+mm+"월 데이터를 "+"결재상신 하시겠습니까?")){
        		if (!this.fn_SearchItemCheck()) {
        			return
        		}else{
        			var sMethodName = "SAVE01";
        			var sInDataSet  = "dsTM_APPRXH=dsTM_APPRXH:A";
        			var sOutDataSet = "dsTM_APPRXH=dsTM_APPRXH ";
        			var sArgument   = this.fn_CreateArgument(sMethodName);

        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        	}
        	

        }

        function fn_addComma(obj) {

        		
          var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
          obj += '';                          // 숫자를 문자열로 변환

          while (reg.test(obj))
            obj = obj.replace(reg, '$1' + ',' + '$2');

          return obj;
        		
        		
        		
         //return obj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        

        this.dsCW_VEHCLG_oncolumnchanged = function(obj,e)
        {
        		if (e.columnid == "VEHC_NUMB" ) {
        		this.fn_HelpDialoge(this.grdCW_VEHCLG, "YES", e.oldvalue, e.columnid);
        	}
        }

        this.grdCW_VEHCLG_onkeydown = function(obj,e)
        {
        	if(obj.getCellPos() == 2){
        		var sMethodName = "SEARCH02";
        		var sInDataSet = "";
        		var sOutDataSet = "dsPMLD_DIST=dsPMLD_DIST";
        		
        		var sArgument = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        this.fnc_MonthOnChanged = function (obj,e) {
        	
        	this.fnc_DatasetClear('dsCW_VEHCLG');
        	this.fn_Search();
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_VEHCLG.addEventHandler("onvaluechanged", this.dsCW_VEHCLG_onvaluechanged, this);
            this.dsCW_VEHCLG.addEventHandler("oncolumnchanged", this.dsCW_VEHCLG_oncolumnchanged, this);
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsTM_APPRXH.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdCW_VEHCLG.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdCW_VEHCLG.addEventHandler("onkeydown", this.grdCW_VEHCLG_onkeydown, this);
            this.edtSHRVEHC_NUMB.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRVEHC_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRVEHC_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);

        };

        this.loadIncludeScript("WFMD0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
