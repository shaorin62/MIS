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
                this.set_name("PAYB0040");
                this.set_titletext("급여일지");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">PAY0006</Col><Col id=\"DSNAME\">dsSHRWAGE_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row><Row><Col id=\"COMBOID\">PAY0006</Col><Col id=\"DSNAME\">dsWAGE_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_BONBRT", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAGE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STDS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BONU_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMDIRY", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HRCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PYCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WADE_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHPS_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ITCS_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ITCE_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RTBG_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RTED_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RTBS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCLSD_CNTT", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMDIRY", "absolute", "8", "128", null, null, "25", "167", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_PMDIRY");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"110\"/><Column size=\"152\"/><Column size=\"278\"/><Column size=\"107\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"지급일\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"급여구분\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"급여내용\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"급여마감여부\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:WAGE_CODE\" editlimit=\"20\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:WORK_CNTT\" editlimit=\"50\" editimemode=\"hangul\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:WADE_YSNO\" editlimit=\"0\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRWAGE_YMTH", "absolute", "96", "71", "70", "21", null, null, this);
            obj.set_mask("####");
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "194", "71", "68", "21", null, null, this);
            obj.set_text("급여구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "224", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("16");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_text("귀속년도");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWAGE_CODE", "absolute", "262", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("dropdown");
            obj.set_index("-1");

            obj = new Static("Shape0", "absolute", "8", null, null, "117", "306", "15", this);
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "27", null, "95", "21", null, "102", this);
            obj.set_taborder("22");
            obj.set_text("지급일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "338", null, "71", "21", null, "102", this);
            obj.set_taborder("23");
            obj.set_text("급여구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbWAGE_CODE", "absolute", "406", null, "120", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Calendar("calPAYX_DATE", "absolute", "121", null, "100", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_value("null");

            obj = new Static("Static14", "absolute", "27", null, "95", "21", null, "76", this);
            obj.set_taborder("19");
            obj.set_text("급여내용");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWORK_CNTT", "absolute", "121", null, "407", "21", null, "76", this);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("staITCS_YMTH2", "absolute", "206", null, "16", "21", null, "24", this);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "27", null, "95", "21", null, "50", this);
            obj.set_taborder("26");
            obj.set_text("급여대상년월");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medITCS_YMTH", "absolute", "121", null, "80", "21", null, "24", this);
            obj.set_taborder("12");
            obj.set_type("string");
            obj.set_mask("####-##");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medITCE_YMTH", "absolute", "221", null, "80", "21", null, "24", this);
            obj.set_taborder("13");
            obj.set_type("string");
            obj.set_mask("####-##");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "338", null, "95", "21", null, "50", this);
            obj.set_taborder("20");
            obj.set_text("급여마감여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staRTBS_DATE", "absolute", "27", null, "95", "21", null, "24", this);
            obj.set_taborder("24");
            obj.set_text("소득세기간");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("급여일지");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("28");
            obj.set_text("홈 > 급여관리 > 급여관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "397", "103", "80", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("36");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("37");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "166", "61", "40", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCLSD_CNTT", "absolute", null, null, "261", "117", "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("10");
            obj.set_binddataset("dsCLSD_CNTT");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"급여형태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:CLSD_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkWADE_YSNO", "absolute", "432", null, "19", "21", null, "50", this);
            obj.set_taborder("8");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new Div("divWAGE_YMTH", "absolute", "121", null, "100", "21", null, "50", this);
            obj.set_taborder("6");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "9", "615", "30", "41", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "400", "550", "80", "35", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "881", "600", "20", "41", null, null, this);
            obj.set_taborder("45");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "9", null, "79", "21", null, "132", this);
            obj.set_taborder("46");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 100, 21, this.divWAGE_YMTH,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_url("common::comMonthCalendar.xfdl");

            	}
            );
            this.divWAGE_YMTH.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여일지");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","calPAYX_DATE","value","dsPY_PMDIRY","PAYX_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cmbWAGE_CODE","value","dsPY_PMDIRY","WAGE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtWORK_CNTT","value","dsPY_PMDIRY","WORK_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","chkWADE_YSNO","value","dsPY_PMDIRY","WADE_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","medITCS_YMTH","value","dsPY_PMDIRY","ITCS_YMTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","medITCE_YMTH","value","dsPY_PMDIRY","ITCE_YMTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divWAGE_YMTH","text","dsPY_PMDIRY","WAGE_YMTH");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAYB0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0040 급여일지
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.18		고민주		Initial Created.
         *   2016.10.14		황치웅		수정.
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
        this.sBUTTONLIST  = "TTTTTTTF";
        this.sPACKAGENAME = "PAYB0040";

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.medSHRWAGE_YMTH.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4));
        	this.medSHRWAGE_YMTH.setFocus();

        
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
        	this.fnc_DatasetClear("dsPY_PMDIRY");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_PMDIRY=dsPY_PMDIRY";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_PMDIRY.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPY_PMDIRY.insertRow(this.dsPY_PMDIRY.rowposition + 1);
        	this.dsPY_PMDIRY.setColumn(iRow, "WADE_YSNO", "0");
        	this.dsPY_PMDIRY.setColumn(iRow, "CHPS_YSNO", "0");
        	this.calPAYX_DATE.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsPY_PMDIRY.deleteRow(this.dsPY_PMDIRY.rowposition);
        	this.grdPY_PMDIRY.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_PMDIRY");
        	this.grdPY_PMDIRY.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsPY_PMDIRY=dsPY_PMDIRY:U dsPY_BONBRT=dsPY_BONBRT:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_PMDIRY.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PMDIRY", this);

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

        	if (this.fnc_DatasetChangeCheck("dsPY_PMDIRY")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsPY_PMDIRY.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText = "지급일" + this.fnc_Trim(this.dsPY_PMDIRY.getColumn(this.dsPY_PMDIRY.rowposition, "PAYX_DATE"))
        						+ ",급여구분:" + this.fnc_Trim(this.cmbWAGE_CODE.text);
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsPY_PMDIRY,dsPY_BONBRT")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_PMDIRY.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_PMDIRY.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_PMDIRY.getColumn(i, "PAYX_DATE"))) < 8) {
        			return this.fnc_CheckPostAction("TMM072", "지급일", this.dsPY_PMDIRY, i, this.grdPY_PMDIRY, "PAYX_DATE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_PMDIRY.getColumn(i, "WAGE_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "급여구분", this.dsPY_PMDIRY, i, this.cmbWAGE_CODE, "");
        		}

        	}
        	
        	var sPAYX_DATE	=	this.dsPY_PMDIRY.getColumn(this.dsPY_PMDIRY.rowposition, "PAYX_DATE");
        	var sWAGE_CODE	=	this.dsPY_PMDIRY.getColumn(this.dsPY_PMDIRY.rowposition, "WAGE_CODE");
        			
        	for (var i = 0; i < this.dsPY_BONBRT.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPY_BONBRT.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_BONBRT.getColumn(i, "STDS_DATE"))) < 8) {
        			return this.fnc_CheckPostAction("TMM072", "기준일", this.dsPY_BONBRT, i, this.dsPY_BONBRT, "STDS_DATE");
        		}
        		if (this.fnc_ToUpper(this.dsPY_BONBRT.getRowType(i)) == Dataset.ROWTYPE_INSERT) {
        			this.dsPY_BONBRT.setColumn(i, "PAYX_DATE", sPAYX_DATE);
        			this.dsPY_BONBRT.setColumn(i, "WAGE_CODE", sWAGE_CODE);
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
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " WAGE_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.medSHRWAGE_YMTH.value));
        		sReturnString += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWAGE_CODE.value));

        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_PMDIRY.getColumn(this.dsPY_PMDIRY.rowposition, "PAYX_DATE")));
        		sReturnString += " WAGE_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_PMDIRY.getColumn(this.dsPY_PMDIRY.rowposition, "WAGE_CODE")));
        	
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

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
        		this.fnc_Information(this.stInformation, this.dsPY_PMDIRY.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PMDIRY.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.fn_KeyFieldDisible(this.dsPY_PMDIRY);
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_PMDIRY);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRWAGE_CODE,dsSHRWAGE_CODE,0";
        			arrParam[1] = "COMBO,cmbWAGE_CODE,dsWAGE_CODE,0";
        			arrParam[2] = "GRID,grdPY_PMDIRY,dsWAGE_CODE,WAGE_CODE";
        		this.fnc_UserComboInnerBind(arrParam);

        		this.dsWAGE_CODE.filter("USEX_YSNO == '1'");
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        		var bindInfo = new Object;
        			bindInfo.binddataset = this.dsPY_PMDIRY;
        			bindInfo.bindcolumn = "WAGE_YMTH";
        		this.divWAGE_YMTH.fn_SetBindInfo(bindInfo);

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_SetReadonly(this.calPAYX_DATE, false);
        		this.fnc_SetReadonly(this.cmbWAGE_CODE, false);

        	} else {
        		this.fnc_SetReadonly(this.calPAYX_DATE, true);
        		this.fnc_SetReadonly(this.cmbWAGE_CODE, true);

        	}

        	if (this.dsPY_PMDIRY.getColumn(this.dsPY_PMDIRY.rowposition,"WAGE_CODE")== "4000"){
        		this.staRTBS_DATE.set_visible(false);
        		this.medITCS_YMTH.set_visible(false);
        		this.staITCS_YMTH2.set_visible(false);
        		this.medITCE_YMTH.set_visible(false);

        	} else if (this.dsPY_PMDIRY.getColumn(this.dsPY_PMDIRY.rowposition,"WAGE_CODE")== "2000"){
        		this.staRTBS_DATE.set_text("소득세기간");
        		this.staRTBS_DATE.set_visible(true);
        		this.medITCS_YMTH.set_visible(true);
        		this.staITCS_YMTH2.set_visible(true);
        		this.medITCE_YMTH.set_visible(true);

        	}else{
        		this.staRTBS_DATE.set_visible(false);
        		this.medITCS_YMTH.set_visible(false);
        		this.staITCS_YMTH2.set_visible(false);
        		this.medITCE_YMTH.set_visible(false);

        	}

        	this.fnc_GridCheckClear("grdCLSD_CNTT","0");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsCLSD_CNTT=dsCLSD_CNTT dsPY_BONBRT=dsPY_BONBRT";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }

        this.dsPY_PMDIRY_oncolumnchanged = function(obj,e){
        	if (e.columnid == "PAYX_DATE"){
        		var sWAGE_YMTH = "";
        		if ( nexacro.toNumber(this.fnc_SubStr(e.newvalue, 4, 2)-1) == 0 ){
        			sWAGE_YMTH = this.fnc_SubStr(e.newvalue, 0, 4)-1+"12";
        		} else {
        			sWAGE_YMTH = this.fnc_SubStr(e.newvalue, 0, 4)+this.fnc_SubStr(e.newvalue, 4, 2)-1;
        		}
        		
        		this.dsPY_PMDIRY.setColumn(e.row, "WAGE_YMTH", sWAGE_YMTH);
        		this.dsPY_PMDIRY.setColumn(e.row, "ITCS_YMTH", this.fnc_SubStr(e.newvalue, 0, 6));
        		this.dsPY_PMDIRY.setColumn(e.row, "ITCE_YMTH", this.fnc_SubStr(e.newvalue, 0, 6));
        		
        	}
        	
        	if (e.columnid == "WAGE_YMTH"){
        		this.dsPY_PMDIRY.setColumn(e.row, "ITCS_YMTH", e.newvalue);
        		this.dsPY_PMDIRY.setColumn(e.row, "ITCE_YMTH", e.newvalue);
        		
        	}
        	
        	if (this.dsPY_PMDIRY.getColumn(this.dsPY_PMDIRY.rowposition,"WAGE_CODE")== "4000"){
        		this.staRTBS_DATE.set_visible(false);
        		this.medITCS_YMTH.set_visible(false);
        		this.staITCS_YMTH2.set_visible(false);
        		this.medITCE_YMTH.set_visible(false);

        	} else if (this.dsPY_PMDIRY.getColumn(this.dsPY_PMDIRY.rowposition,"WAGE_CODE")== "2000"){
        		this.staRTBS_DATE.set_text("소득세기간");
        		this.staRTBS_DATE.set_visible(true);
        		this.medITCS_YMTH.set_visible(true);
        		this.staITCS_YMTH2.set_visible(true);
        		this.medITCE_YMTH.set_visible(true);

        	} else{
        		this.staRTBS_DATE.set_visible(false);
        		this.medITCS_YMTH.set_visible(false);
        		this.staITCS_YMTH2.set_visible(false);
        		this.medITCE_YMTH.set_visible(false);

        	}
        }

        this.dsPY_PMDIRY_canrowposchange = function(obj,e){

        	if (this.fnc_DatasetChangeCheck("dsCLSD_CNTT,dsPY_BONBRT")) {
        		if (this.fnc_Message("TMM023") == false) return false;

        		this.dsCLSD_CNTT.reset();
        		this.dsPY_BONBRT.reset();

        		var sCLSD_CNTT="";
        		for(var i = 0; i < this.dsCLSD_CNTT.rowcount ; i++){
        			if(this.dsCLSD_CNTT.getColumn(i,"CHK") == "1"){
        				sCLSD_CNTT = sCLSD_CNTT + this.dsCLSD_CNTT.getColumn(i,"CLSD_CODE") + ",";
        			}
        		}
        		sCLSD_CNTT = this.fnc_SubStr(sCLSD_CNTT,0,sCLSD_CNTT.length-1);
        		this.dsPY_PMDIRY.setColumn(this.dsPY_PMDIRY.rowposition,"CLSD_CNTT",sCLSD_CNTT);

        	}

        	return true;
        }

        this.dsCLSD_CNTT_oncolumnchanged = function(obj,e){

        	if ( e.columnid == "CHK"){

        		var sCLSD_CNTT="";
        		for(var i = 0; i < this.dsCLSD_CNTT.rowcount ; i++){
        			if(this.dsCLSD_CNTT.getColumn(i,"CHK") == "1"){
        				sCLSD_CNTT = sCLSD_CNTT + this.dsCLSD_CNTT.getColumn(i,"CLSD_CODE") + ",";
        			}
        		}
        		sCLSD_CNTT = this.fnc_SubStr(sCLSD_CNTT,0,sCLSD_CNTT.length-1);
        		this.dsPY_PMDIRY.setColumn(this.dsPY_PMDIRY.rowposition,"CLSD_CNTT",sCLSD_CNTT);

        	}
        }

        this.grdCLSD_CNTT_onheadclick = function(obj,e){
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);

        }

        /*---------------------------+
         |  상여기준정보 행추가   |
         +---------------------------*/
        this.btnInput_OnClick = function(obj,e) {
        	if (this.dsPY_PMDIRY.getColumn(this.dsPY_PMDIRY.rowposition, "WADE_YSNO") == "1") {
        		this.fnc_Message("EVM010");
        		return false;
        	}

        	var iRow = this.dsPY_BONBRT.insertRow(this.dsPY_BONBRT.rowposition+1);
        	this.dsPY_BONBRT.set_rowposition(iRow);
        	this.grdPY_BONBRT.setCellPos(this.fnc_GridColumnIndex(this.grdPY_BONBRT, "STDS_DATE"));
        	
        }
        /*---------------------------+
         |  상여기준정보 행삭제   |
         +---------------------------*/
        this.btnDelete_OnClick = function(obj,e) {

        	if (this.dsPY_BONBRT.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = "기준일:" + this.fnc_Trim(this.dsPY_BONBRT.getColumn(this.dsPY_BONBRT.rowposition, "STDS_DATE"));	
        	if (this.fnc_Message("TMM002", sQuestionText)) this.dsPY_BONBRT.deleteRow(this.dsPY_BONBRT.rowposition);
        	this.grdPY_BONBRT.setFocus();
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_PMDIRY.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsPY_PMDIRY.addEventHandler("canrowposchange", this.dsPY_PMDIRY_canrowposchange, this);
            this.dsPY_PMDIRY.addEventHandler("oncolumnchanged", this.dsPY_PMDIRY_oncolumnchanged, this);
            this.dsCLSD_CNTT.addEventHandler("oncolumnchanged", this.dsCLSD_CNTT_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.medSHRWAGE_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static01.addEventHandler("onclick", this.Static120_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static120_onclick, this);
            this.calPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtWORK_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static00.addEventHandler("onclick", this.Static120_onclick, this);
            this.medITCS_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medITCE_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.staRTBS_DATE.addEventHandler("onclick", this.Static120_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdCLSD_CNTT.addEventHandler("onheadclick", this.grdCLSD_CNTT_onheadclick, this);
            this.chkWADE_YSNO.addEventHandler("onclick", this.fn_CheckBoxChange, this);

        };

        this.loadIncludeScript("PAYB0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
