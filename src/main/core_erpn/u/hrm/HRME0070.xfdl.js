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
                this.set_name("HRME0070");
                this.set_titletext("승진대상자선정");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPRON_STDE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_PROMTN", this);
            obj._setContents("<ColumnInfo><Column id=\"PRON_STDE\" size=\"8\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRON_YCNT\" size=\"2\" type=\"STRING\"/><Column id=\"OPOS_YCNT\" size=\"2\" type=\"STRING\"/><Column id=\"OPOS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"FEPR_DDAY\" size=\"8\" type=\"STRING\"/><Column id=\"NEPR_DDAY\" size=\"8\" type=\"STRING\"/><Column id=\"NOPS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"AOPS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"AOPS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"NCPS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"ACPS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"ACPS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"EVG1_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"EVG2_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"EVG3_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"EVG4_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"EVG5_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"PRFI_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/><Column id=\"APNT_HOCT\" size=\"10\" type=\"STRING\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsOPOS_CODE</Col><Col id=\"CODEID\">OPOS_CODE</Col><Col id=\"HEADFLAG\">E</Col></Row><Row><Col id=\"DSNAME\">dsCPOS_CODE</Col><Col id=\"CODEID\">CPOS_CODE</Col><Col id=\"HEADFLAG\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRON_YCNT\" size=\"2\" type=\"STRING\"/><Column id=\"OPOS_YCNT\" size=\"2\" type=\"STRING\"/><Column id=\"OPOS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"FEPR_DDAY\" size=\"8\" type=\"STRING\"/><Column id=\"NEPR_DDAY\" size=\"8\" type=\"STRING\"/><Column id=\"NOPS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"AOPS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"AOPS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"NCPS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"ACPS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"ACPS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"TVGD_LIST\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_taborder("6");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("7");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("승진대상자선정");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("9");
            obj.set_text("홈 > 승진대상자선정");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("승진일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "245", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "216", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
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
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
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

            obj = new Grid("grdHR_PROMTN", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsHR_PROMTN");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"39\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"처리\"/><Cell col=\"1\" rowspan=\"2\" text=\"사원번호\"/><Cell col=\"2\" rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"3\" rowspan=\"2\" text=\"소속\"/><Cell col=\"4\" rowspan=\"2\" text=\"부서\"/><Cell col=\"5\" rowspan=\"2\" text=\"입사일\"/><Cell col=\"6\" rowspan=\"2\" text=\"승진소요&#13;&#10;근속년수\"/><Cell col=\"7\" rowspan=\"2\" style=\"background: ;\" text=\"직급&#13;&#10;근속년수\"/><Cell col=\"8\" rowspan=\"2\" style=\"background: ;\" text=\"현직급&#13;&#10;승진일자\"/><Cell col=\"9\" rowspan=\"2\" text=\"최초승진&#13;&#10;예정일\"/><Cell col=\"10\" rowspan=\"2\" text=\"상위직&#13;&#10;승진일자\"/><Cell col=\"11\" colspan=\"2\" text=\"직위\"/><Cell col=\"13\" colspan=\"2\" text=\"직급\"/><Cell col=\"15\" colspan=\"5\" text=\"승진년한 평가등급(최근년도 기준)\"/><Cell col=\"20\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/><Cell row=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"11\" text=\"변경전\"/><Cell row=\"1\" col=\"12\" cssclass=\"Cellgrd_WF_essential\" text=\"변경후\"/><Cell row=\"1\" col=\"13\" text=\"변경전\"/><Cell row=\"1\" col=\"14\" cssclass=\"Cellgrd_WF_essential\" text=\"변경후\"/><Cell row=\"1\" col=\"15\" text=\"1년\"/><Cell row=\"1\" col=\"16\" text=\"2년\"/><Cell row=\"1\" col=\"17\" text=\"3년\"/><Cell row=\"1\" col=\"18\" text=\"4년\"/><Cell row=\"1\" col=\"19\" text=\"5년\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:CHK\" editlimit=\"0\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:EMPL_NUMB\" editlimit=\"0\"/><Cell col=\"2\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'normal' : 'none'\" style=\"align: ;\" text=\"bind:EMPL_NAME\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:SECT_NAME\" editlimit=\"0\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NAME\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"date\" style=\"align: ;\" text=\"bind:ENCO_DATE\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:PRON_YCNT\" editlimit=\"0\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:OPOS_YCNT\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"date\" style=\"align: ;\" text=\"bind:OPOS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:FEPR_DDAY\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:NEPR_DDAY\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"combo\" text=\"bind:NOPS_CODE\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:AOPS_CODE\"/><Cell col=\"13\" displaytype=\"combo\" text=\"bind:NCPS_CODE\"/><Cell col=\"14\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ACPS_CODE\"/><Cell col=\"15\" text=\"bind:EVG1_CODE\"/><Cell col=\"16\" text=\"bind:EVG2_CODE\"/><Cell col=\"17\" text=\"bind:EVG3_CODE\"/><Cell col=\"18\" text=\"bind:EVG4_CODE\"/><Cell col=\"19\" text=\"bind:EVG5_CODE\"/><Cell col=\"20\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPRON_STDE", "absolute", "96", "72", "120", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "313", "71", "80", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "395", "71", "21", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "86", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("대상자생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("117");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("118");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC00", "absolute", "210", "35", "110", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("승진자 확정처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC01", "absolute", "323", "35", "122", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("승진자 확정취소");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "418", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "1220", "110", "362", "45", null, null, this);
            obj.getSetter("taborder").set("122");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "204", "12", "74", "23", null, null, this.popINSERT);
            obj.set_taborder("1");
            obj.set_text("자료생성");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "280", "12", "74", "23", null, null, this.popINSERT);
            obj.set_taborder("2");
            obj.set_text("닫      기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Shape3", "absolute", "6", "8", "192", "29", null, null, this.popINSERT);
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Static7", "absolute", "8", "10", "84", "25", null, null, this.popINSERT);
            obj.set_taborder("10");
            obj.set_text("승진기준일");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "92", "10", "94", "25", null, null, this.popINSERT);
            obj.set_taborder("11");
            obj.style.set_align("right middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Calendar("calSHRPRON_STDE", "absolute", "95", "12", "100", "21", null, null, this.popINSERT);
            this.popINSERT.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Button("btn_PROC02", "absolute", "97", "35", "110", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("대상자 생성취소");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 362, 45, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.getSetter("taborder").set("122");
            		p.set_visible("false");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("승진대상자선정");

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
        this.addIncludeScript("HRME0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRME0070.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRME0070 승진대상자선정
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.17		안윤준		Initial Created.
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
        this.sBUTTONLIST  	= "TTTTFTTF";
        this.sPACKAGENAME 	= "HRME0070";

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
        	this.fn_GetCombo();

        	this.popINSERT.calSHRPRON_STDE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));

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
        	
        	this.fnc_GridCheckClear("grdHR_PROMTN","15");
        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.fnc_DatasetClear("dsHR_PROMTN");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_PROMTN=dsHR_PROMTN";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_PROMTN.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsHR_PROMTN.insertRow(this.dsHR_PROMTN.rowcount + 1);
        	this.dsHR_PROMTN.setColumn(iRow, "PRON_STDE", this.cmbSHRPRON_STDE.value);	//승진일
        	this.dsHR_PROMTN.set_rowposition( iRow );
        	this.fnc_GridSetCellFocus(this.grdHR_PROMTN, "EMPL_NAME");
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if ( this.grdHR_PROMTN.readonly == true ) {
        		this.fnc_Message("TMM125", "확정처리되어 삭제하실 수 없습니다.");
        		return;
        	}

        	if (this.fn_DeleteCheck()) this.dsHR_PROMTN.deleteRow(this.dsHR_PROMTN.rowposition);
        	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsHR_PROMTN");
        	this.grdHR_APPOXD.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsHR_PROMTN=dsHR_PROMTN:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
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
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_PROMTN", this);
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

        	if (this.fnc_DatasetChangeCheck("dsHR_PROMTN")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if( this.dsPRON_STDE.getRowCount() > 0 ) {
        		if (this.fnc_Length(this.fnc_Trim(this.cmbSHRPRON_STDE.value)) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "승진년도", this.cmbSHRPRON_STDE);
        		}
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsHR_PROMTN.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsHR_PROMTN.getColumn(this.dsHR_PROMTN.rowposition, "EMPL_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_PROMTN")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsHR_PROMTN.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsHR_PROMTN.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_PROMTN.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsHR_PROMTN, i, this.grdPY_REGSAL, "EMPL_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_PROMTN.getColumn(i, "AOPS_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "변경후 직위", this.dsHR_PROMTN, i, this.grdPY_REGSAL, "AOPS_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_PROMTN.getColumn(i, "ACPS_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "변경후 직급", this.dsHR_PROMTN, i, this.grdPY_REGSAL, "ACPS_CODE");
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
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PRON_STDE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRPRON_STDE.value));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        	
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PRON_STDE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRPRON_STDE.value));
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.dsHR_PROMTN.getColumn( this.dsHR_PROMTN.rowposition, "EMPL_NUMB" )));

        	} else if (sKind == "PROC00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PRON_STDE=" 	+ this.fnc_Quote(this.fnc_Trim(this.popINSERT.calSHRPRON_STDE.value));
        		
        	} else if (sKind == "PROC01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PRON_STDE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRPRON_STDE.value));
        		
        	} else if (sKind == "PROC02") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PRON_STDE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRPRON_STDE.value));
        		sReturnString += " DRFR_DTCD=" 	+ this.fnc_Quote(application.GBL_DEPTCD);
        		sReturnString += " DRFR_EMNR=" 	+ this.fnc_Quote(application.GBL_EMPLNO);
        		
        	} else if (sKind == "PROC03") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PRON_STDE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRPRON_STDE.value));
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);

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
        		this.fnc_Information(this.stInformation, this.dsHR_PROMTN.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_PROMTN.getCaseCount("dataset.getRowLevel(currow)==0"));		
        		this.fn_KeyFieldDisible(this.dsHR_PROMTN);
        		
        		var nCnt = this.dsHR_PROMTN.getCaseCount("PRFI_YSNO=='1'");
        		if (nCnt > 0) {
        			this.grdHR_PROMTN.set_readonly( true );
        		} else {
        			this.grdHR_PROMTN.set_readonly( false );
        		}			
        		
        	} else if (sMethodName == "SEARCH01") {
        		
        		var nRow = this.dsHR_PROMTN.rowposition;
        		if (this.dsHR_MASTXM.getRowCount() > 0) {
        		
        			this.dsHR_PROMTN.setColumn( nRow, "DEPT_CODE", this.dsHR_MASTXM.getColumn( 0, "DEPT_CODE" ) );	//부서코드 
        			this.dsHR_PROMTN.setColumn( nRow, "SECT_NAME", this.dsHR_MASTXM.getColumn( 0, "SECT_NAME" ) );	/* 소속명 */
        			this.dsHR_PROMTN.setColumn( nRow, "DEPT_NAME", this.dsHR_MASTXM.getColumn( 0, "DEPT_NAME" ) );	/* 부서명 */
        			this.dsHR_PROMTN.setColumn( nRow, "ENCO_DATE", this.dsHR_MASTXM.getColumn( 0, "ENCO_DATE" ) );	/* 입사일 */
        			this.dsHR_PROMTN.setColumn( nRow, "OPOS_DATE", this.dsHR_MASTXM.getColumn( 0, "OPOS_DATE" ) );	/* 현직급승진일자 */
        			this.dsHR_PROMTN.setColumn( nRow, "FEPR_DDAY", this.dsHR_MASTXM.getColumn( 0, "FEPR_DDAY" ) );	/* 최초승진예정일 */
        			this.dsHR_PROMTN.setColumn( nRow, "NEPR_DDAY", this.cmbSHRPRON_STDE.value);
        			this.dsHR_PROMTN.setColumn( nRow, "NOPS_CODE", this.dsHR_MASTXM.getColumn( 0, "NOPS_CODE" ) );	/* 현직위코드 */
        			this.dsHR_PROMTN.setColumn( nRow, "AOPS_CODE", this.dsHR_MASTXM.getColumn( 0, "AOPS_CODE" ) );	/* 승진직위코드 */
        			this.dsHR_PROMTN.setColumn( nRow, "NCPS_CODE", this.dsHR_MASTXM.getColumn( 0, "NCPS_CODE" ) );	/* 현직급코드 */
        			this.dsHR_PROMTN.setColumn( nRow, "ACPS_CODE", this.dsHR_MASTXM.getColumn( 0, "ACPS_CODE" ) );	/* 승진직급코드 */
        			this.dsHR_PROMTN.setColumn( nRow, "PRON_YCNT", this.dsHR_MASTXM.getColumn( 0, "PRON_YCNT" ) );	/* 승급근속년수 */
        			this.dsHR_PROMTN.setColumn( nRow, "OPOS_YCNT", this.dsHR_MASTXM.getColumn( 0, "OPOS_YCNT" ) );	/* 승진근속년수 */

        			var arrSplit = new Array();
        				arrSplit = this.dsHR_MASTXM.getColumn( 0, "TVGD_LIST" ).split(",");
        				
        			if (arrSplit.length > 0) {
        				this.dsHR_PROMTN.setColumn( nRow, "EVG1_CODE", arrSplit[0] );	//평가등급 1년
        			}
        				
        			if (arrSplit.length > 1) {
        				this.dsHR_PROMTN.setColumn( nRow, "EVG2_CODE", arrSplit[1] );	//평가등급 2년
        			}
        				
        			if (arrSplit.length > 2) {
        				this.dsHR_PROMTN.setColumn( nRow, "EVG3_CODE", arrSplit[2] );	//평가등급 3년
        			}
        				
        			if (arrSplit.length > 3) {
        				this.dsHR_PROMTN.setColumn( nRow, "EVG4_CODE", arrSplit[3] );	//평가등급 4년
        			}
        				
        			if (arrSplit.length > 4) {
        				this.dsHR_PROMTN.setColumn( nRow, "EVG5_CODE", arrSplit[4] );	//평가등급 5년
        			}
        		}

        	} else if (sMethodName == "PROC00") {
        		this.fnc_Message("HRM071", "대상자생성");
        		this.fn_GetCombo();
        		this.fn_Search();
        	
        	} else if (sMethodName == "PROC01") {
        		this.fnc_Information(this.stInformation, this.dsHR_PROMTN.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("HRM071", "대상자생성취소");
        		this.fn_GetCombo();
        		
        	} else if (sMethodName == "PROC02") {
        		this.fnc_Message("HRM071", "승진자확정");
        		this.dsHR_PROMTN.applyChange();
        		this.fn_Search();
        	
        	} else if (sMethodName == "PROC03") {
        		this.fnc_Message("HRM071", "승진자취소");
        		this.dsHR_PROMTN.applyChange();
        		this.fn_Search();

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.dsHR_PROMTN.applyChange();
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdHR_PROMTN,dsOPOS_CODE,AOPS_CODE";
        			arrParam[1] = "GRID,grdHR_PROMTN,dsCPOS_CODE,ACPS_CODE";
        			arrParam[2] = "GRID,grdHR_PROMTN,dsOPOS_CODE,NOPS_CODE";
        			arrParam[3] = "GRID,grdHR_PROMTN,dsCPOS_CODE,NCPS_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		this.dsOPOS_CODE.filter("WAST_DATE==''"); // 폐기일자 없는 데이터만
        		this.dsCPOS_CODE.filter("WAST_DATE==''"); // 폐기일자 없는 데이터만

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
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if (obj.name == "grdHR_PROMTN") { // 그리드 사원
        		
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME" || sColumnID == "EMPL_NAME") {
        			arrParam[0] = "HRM0002";
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdHR_PROMTN";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			arrParam[9] = "fn_Help_After";
        		}

        	}
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        /*-----------------------+
         |  승진기준일 Setting  |
         +------------------------*/
        this.fn_GetCombo = function(sPopupId,Variant){

        	// 세부 콤보 생성
        	var arrParam1 = new Array();
        		arrParam1[0] = "dsPRON_STDE";
        		arrParam1[1] = "HRME0070";
        		arrParam1[2] = "0";
        		arrParam1[3] = "";
        		arrParam1[4] = "";

        	// Bind 처리
        	var arrParam2 = new Array();
        		arrParam2[0] = "COMBO,cmbSHRPRON_STDE,dsPRON_STDE,0";
        	this.fnc_GetUserComboSingle(arrParam1, arrParam2);

        }
        /*-----------------------------+
         |  대상자생성버튼 클릭 시  |
         +-----------------------------*/
        this.btn_PROC_onclick = function(obj,e) {
        	if ( this.popINSERT.visible == true ) {
        		this.fn_Popup_close();
        		return;
        	}
        	var nX 	= system.clientToScreenX(obj, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);
        	var nY 	= system.clientToScreenY(obj, obj.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);	
        	
        	this.popINSERT.trackPopup( nX, nY + 2 );

        }

        /*---------------------------+
         |  자료생성 버튼 클릭 시 |
         +---------------------------*/
        this.popINSERT_btnINSERT_OnClick = function(obj,e) {

        	if ( this.dsPRON_STDE.getColumn(0, "COMB_CODE") >= this.popINSERT.calSHRPRON_STDE.value ){
        		this.fnc_Message("TMM125", "과거 대상자는 생성 할 수 없습니다.");
        		return;
        	}

        	var sQuestionText  = this.fnc_SubStr(this.popINSERT.calSHRPRON_STDE.value, 0, 4) + "년 ";
        		sQuestionText += this.fnc_SubStr(this.popINSERT.calSHRPRON_STDE.value, 4, 2) + "월 ";
        		sQuestionText += this.fnc_SubStr(this.popINSERT.calSHRPRON_STDE.value, 6, 2) + "일";

        	if ( this.fnc_Message("EVM001", sQuestionText) ) {
        		this.fnc_DatasetClear("dsHR_PROMTN");

        		var sMethodName = "PROC00";
        		var sInDataSet 	= "";
        		var sOutDataSet = "";
        		var sArgument 	= this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		this.grdHR_PROMTN.setFocus();
        		
        	}
        	this.popINSERT.closePopup();
        }

        /*----------------------+
         |  닫기 버튼 클릭 시 |
         +----------------------*/
        this.fn_Popup_close = function(obj,e) {
        	this.popINSERT.closePopup();

        }

        /*----------------------------+
         | 대상자취소 버튼 클릭 시 |
         +----------------------------*/
        this.btn_PROC02_onclick = function(obj,e)
        {
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsHR_PROMTN");
        	
        	if (!this.fnc_Message("HRM069", this.cmbSHRPRON_STDE.text)) return;
        	
        	var sMethodName = "PROC01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_PROMTN.setFocus();	
        }

        /*---------------------------------+
         |  승진대상자처리 버튼 클릭 시 |
         +---------------------------------*/
        this.btn_PROC00_onclick = function(obj,e) {
        	
        	var iCnt = 0;
        	for ( var i=0; i<this.dsHR_PROMTN.getRowCount(); i++ ) {
        		if ( this.dsHR_PROMTN.getColumn(i, "CHK") == "1" ) {
        			iCnt++;
        		}
        	}
        	
        	if ( iCnt == 0 ) return this.fnc_Message("WFM003", "승진 확정처리");

        	if (!this.fnc_Message("HRM073", "승진자 확정")) return;
        	this.dsHR_PROMTN.set_enableevent(false);
        	for ( var i=0; i<this.dsHR_PROMTN.getRowCount(); i++ ) {
        		if ( this.dsHR_PROMTN.getColumn(i, "CHK") == "1" ) {
        			this.dsHR_PROMTN.setColumn(i, "PRFI_YSNO", "1");
        		} else {
        			this.dsHR_PROMTN.setColumn(i, "PRFI_YSNO", "0");
        		}
        		
        	}
        	this.dsHR_PROMTN.set_enableevent(true);

        	var sMethodName = "PROC02";
        	var sInDataSet  = "dsHR_PROMTN=dsHR_PROMTN:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        /*------------------------------------+
         |  승진대상처리취소 버튼 클릭 시 |
         +------------------------------------*/
        this.btn_PROC01_onclick = function(obj,e) {

        	var iCnt = 0;
        	for ( var i=0; i<this.dsHR_PROMTN.getRowCount(); i++ ) {
        		if ( this.dsHR_PROMTN.getColumn(i, "PRFI_YSNO") == "1" ) {
        			iCnt++;
        		}
        	}
        	
        	if ( iCnt == 0 ) return this.fnc_Message("HRM078");

        	if (!this.fnc_Message("HRM073", "승진자 확정취소")) return;
        	
        	var sMethodName = "PROC03";
        	var sInDataSet  = "";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------+
         |  그리드 헤더 클릭 시 |
         +------------------------*/
        this.grdHR_PROMTN_onheadclick = function(obj,e) {

        	if ( this.grdHR_PROMTN.readonly == false) {	
        		
        		if ( this.grdHR_PROMTN.getCellProperty("Head", e.cell, "edittype") == "checkbox" ) {
        			if (!this.fn_ChkUpdate()) return;
        			var iCheckValue = 0;
        			if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        				obj.setCellProperty("head", e.cell, "text", "0");
        				iCheckValue = 0;
        			} else {
        				obj.setCellProperty("head", e.cell, "text", "1");
        				iCheckValue = 1;
        			}

        			obj.set_enableredraw(false)
        			for (var i = 0; i < this.dsHR_PROMTN.rowcount; i++) {
        				this.dsHR_PROMTN.setColumn(i, "CHK", iCheckValue);
        			}
        			obj.set_enableredraw(true)
        		}

        	}
        }

        /*----------------+
         |  승진일 변경 시 |
         +----------------*/
        this.cmbSHRPRON_STDE_onitemchanged = function(obj,e) {
        	this.fn_Search();

        }
        /*--------------------------------------------+
         |  데이터셋(dsHR_PROMTN) 컬럼 값 변경 時  |
         +--------------------------------------------*/
        this.dsHR_PROMTN_oncolumnchanged = function(obj,e){
        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdHR_PROMTN, "YES" ,e.oldvalue, e.columnid);
        	
        	if (e.columnid == "CHK") {
        		obj.set_updatecontrol(false);
        		obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);
                obj.set_updatecontrol(true);
                
        	}
        }
        /*--------------------------------------------+
         |  그리드에서 사원번호 팝업 호출 후 처리 |
         +--------------------------------------------*/
        this.fn_Help_After = function (sParam) {
        	
        	var arrParam 	= this.fnc_Split(sParam, ",");
        	
        	if (arrParam.length == 0) return;
        	
        	if (this.fnc_Trim(this.dsHR_PROMTN.getColumn( this.dsHR_PROMTN.rowposition, "EMPL_NUMB" )) != "") {
        	
        		var sMethodName = "SEARCH01";
        		var sInDataSet 	= "";
        		var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
        		var sArgument 	= this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", true);
        	}
        }

        
        /*------------------+
         |	변경데이터 체크 |
         +------------------*/
        this.fn_ChkUpdate = function () {

        	if (this.fnc_DatasetChangeCheck("dsHR_PROMTN")) {
        		this.fnc_Message("TMM125", "변경된 데이터가 존재합니다.");
        		return false;
        	}

        	return true;
        }

        this.dsHR_PROMTN_cancolumnchange = function(obj,e){
        	
        	if (e.columnid == "CHK") return this.fn_ChkUpdate();
        	return true;
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_PROMTN.addEventHandler("oncolumnchanged", this.dsHR_PROMTN_oncolumnchanged, this);
            this.dsHR_PROMTN.addEventHandler("cancolumnchange", this.dsHR_PROMTN_cancolumnchange, this);
            this.dsHR_MASTXM.addEventHandler("oncolumnchanged", this.dsHR_PROMTN_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdHR_PROMTN.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdHR_PROMTN.addEventHandler("onheadclick", this.grdHR_PROMTN_onheadclick, this);
            this.cmbSHRPRON_STDE.addEventHandler("onitemchanged", this.cmbSHRPRON_STDE_onitemchanged, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_onclick, this);
            this.btn_PROC00.addEventHandler("onclick", this.btn_PROC00_onclick, this);
            this.btn_PROC01.addEventHandler("onclick", this.btn_PROC01_onclick, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.fn_Popup_close, this);
            this.btn_PROC02.addEventHandler("onclick", this.btn_PROC02_onclick, this);

        };

        this.loadIncludeScript("HRME0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
