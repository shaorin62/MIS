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
                this.set_name("EVMA0100");
                this.set_titletext("조직평가대상관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">EVM0020</Col><Col id=\"DSNAME\">dsSHREVAL_NAME</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_DTETXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVTT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EVTE_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DTMN_EMNR\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DTMN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVAL_STNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVAL_DTCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EVAL_DTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_EMNR\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_EMNR\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVCM_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRG_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"FACH_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCodeYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전체</Col><Col id=\"code\"/></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">예</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"name\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("14");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("15");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("조직평가대상관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("17");
            obj.set_text("홈 > 인사관리 > 평가기준정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "132", "262", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC00", "absolute", "8", "35", "86", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("대상자생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "128", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
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

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "147", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_DTETXM", "absolute", "8", "152", null, null, "25", "15", this);
            obj.set_taborder("13");
            obj.set_binddataset("dsEV_DTETXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"128\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"114\" band=\"left\"/><Column size=\"80\"/><Column size=\"114\"/><Column size=\"113\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"피평가&#10;대상여부\" wordwrap=\"char\"/><Cell col=\"1\" rowspan=\"2\" text=\"소속\"/><Cell col=\"2\" rowspan=\"2\" text=\"부서코드\"/><Cell col=\"3\" rowspan=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"부서\"/><Cell col=\"4\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"팀장\"/><Cell col=\"5\" rowspan=\"2\" text=\"평가소속\" wordwrap=\"char\"/><Cell col=\"6\" rowspan=\"2\" text=\"평가부서\" wordwrap=\"char\"/><Cell col=\"7\" colspan=\"2\" text=\"1차평가자\"/><Cell col=\"9\" colspan=\"2\" text=\"2차평가자\"/><Cell col=\"11\" rowspan=\"2\" text=\"목표설정서\"/><Cell col=\"12\" rowspan=\"2\" text=\"평가완료\"/><Cell row=\"1\" col=\"7\" text=\"사원번호\"/><Cell row=\"1\" col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"성명\" wordwrap=\"char\"/><Cell row=\"1\" col=\"9\" text=\"사원번호\"/><Cell row=\"1\" col=\"10\" cssclass=\"Cellgrd_WF_edit\" text=\"성명\" wordwrap=\"char\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:EVTT_YSNO\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:DEPT_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:DTMN_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"5\" edittype=\"none\" style=\"align:left;\" text=\"bind:EVAL_STNM\" expandshow=\"hide\"/><Cell col=\"6\" edittype=\"none\" style=\"align:left;\" text=\"bind:EVAL_DTNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"7\" text=\"bind:WES1_EMNR\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:WES1_EMNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"9\" text=\"bind:WES2_EMNR\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:WES2_EMNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"11\" displaytype=\"checkbox\" text=\"bind:GLRG_YSNO\"/><Cell col=\"12\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:FACH_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("168");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox02", "absolute", "8", "60", null, "68", "25", null, this);
            obj.set_taborder("171");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "28", "71", "71", "21", null, null, this);
            obj.set_taborder("173");
            obj.set_text("평가명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "295", "71", "72", "21", null, null, this);
            obj.set_taborder("175");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "614", "71", "72", "21", null, null, this);
            obj.set_taborder("188");
            obj.set_text("평가부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "916", "71", "72", "21", null, null, this);
            obj.set_taborder("198");
            obj.set_text("평가완료");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVAL_NAME", "absolute", "98", "71", "159", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Combo("cmbEVCM_YSNO", "absolute", "985", "71", "131", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_innerdataset("@dsCodeYn");
            obj.set_text("전체");
            obj.set_index("0");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "376", "71", "80", "21", null, null, this);
            obj.set_taborder("205");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "458", "71", "21", "21", null, null, this);
            obj.set_taborder("206");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "481", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREVAL_DTCD", "absolute", "682", "71", "80", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREVAL_DTCD", "absolute", "764", "71", "21", "21", null, null, this);
            obj.set_taborder("212");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREVAL_DTNM", "absolute", "787", "71", "100", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle09", "absolute", "1190", "194", "57", "22", null, null, this);
            obj.set_taborder("221");
            obj.set_text("직급");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("false");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle10", "absolute", "1190", "233", "57", "22", null, null, this);
            obj.set_taborder("222");
            obj.set_text("직책");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("false");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle12", "absolute", "1190", "272", "57", "22", null, null, this);
            obj.set_taborder("224");
            obj.set_text("직위");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("false");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDURS_CODE", "absolute", "1246", "233", "112", "22", null, null, this);
            obj.set_taborder("225");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHROPOS_CODE", "absolute", "1246", "272", "112", "22", null, null, this);
            obj.set_taborder("226");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCPOS_CODE", "absolute", "1246", "194", "112", "22", null, null, this);
            obj.set_taborder("227");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "28", "97", "71", "21", null, null, this);
            obj.set_taborder("228");
            obj.set_text("피평대상");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEVTT_YSNO", "absolute", "98", "97", "159", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("229");
            obj.set_innerdataset("@dsCodeYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("전체");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("조직평가대상관리");

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
        this.addIncludeScript("EVMA0100.xfdl", "script::lib_script_common.xjs");
        this.registerScript("EVMA0100.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	EVMA0100 조직평가대상자관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.21		김석영		Initial Created.
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
        this.sPACKAGENAME = "EVMA0100"; 

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
        	this.fn_GetUserCombo("cmbSHREVAL_NAME");	
        	this.cmbSHREVAL_NAME.set_index(0);
        	this.cmbSHREVAL_NAME.setFocus();

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
        	
        	this.fnc_DatasetClear("dsEV_DTETXM");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsEV_DTETXM=dsEV_DTETXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
            var iXMRow     = this.cmbSHREVAL_NAME.index;
            var sCOMB_CODE = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "COMB_CODE"));
        	var iRow       = this.dsEV_WGETXM.addRow();
        	
        	this.dsEV_DTETXM.setColumn(iRow, "SYNT_EACD", sCOMB_CODE); //인사평가코드
        	this.dsEV_DTETXM.setColumn(iRow, "EVTT_YSNO", "1");        //피평가자대상여부
        	this.dsEV_DTETXM.set_rowposition(iRow); 
        	this.grdEV_DTETXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_DTETXM, "DEPT_NAME"));
        	this.grdEV_DTETXM.setFocus();	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsEV_DTETXM.deleteRow(this.dsEV_DTETXM.rowposition);
        	this.grdEV_DTETXM.setFocus();
        }
        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsEV_DTETXM");
        	this.grdEV_DTETXM.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsEV_DTETXM=dsEV_DTETXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdEV_DTETXM.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsEV_DTETXM", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsEV_DTETXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
        	}
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsEV_DTETXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	var sQuestionText = this.grdEV_DTETXM.getCellText(this.grdEV_DTETXM.currentrow, this.grdEV_DTETXM.getBindCellIndex( "body", "DEPT_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsEV_DTETXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsEV_DTETXM.getRowCount(); i++) {
        		var sEMPL_NUMB = this.fnc_Trim(this.dsEV_DTETXM.getColumn(i, "DEPT_CODE"));			
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_DTETXM.getColumn(i, "DEPT_CODE"))) < 1) {
        			this.grdEV_DTETXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_DTETXM, "DEPT_CODE"));
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 부서가", this.dsEV_DTETXM, i, this.grdEV_DTETXM, "DEPT_CODE");
        		}	
        		//if (this.fnc_Length(this.fnc_Trim(this.dsEV_DTETXM.getColumn(i, "DTMN_EMNR"))) < 1) {
        		//	return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 팀장", this.dsEV_DTETXM, i, this.grdEV_DTETXM, "DTMN_EMNR");
        		//}
        		for (var j = 0; j < this.dsEV_DTETXM.getRowCount(); j++) {
        			if(i != j){
        				if(sEMPL_NUMB == this.fnc_Trim(this.dsEV_DTETXM.getColumn(j, "DEPT_CODE"))){
        					this.grdEV_DTETXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_DTETXM, "DEPT_CODE"));
        					return this.fnc_CheckPostAction("TMM161", (i+1) + "번째 Row에 동일한 부서가", this.dsEV_DTETXM, i, this.grdEV_DTETXM, "DEPT_CODE");
        				}
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
        	
        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value)); 
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 		
        		sReturnString += " EVTT_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbEVTT_YSNO.value)); 
        		sReturnString += " EVAL_DTCD=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREVAL_DTCD.value)); 
        		sReturnString += " EVCM_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbEVCM_YSNO.value)); 
        		
        	// 저장 Argument 생성
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
        		this.fnc_Information(this.stInformation, this.dsEV_DTETXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsEV_DTETXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Message("EVM003");		
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        				
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        		
        		arrParam[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        		this.fnc_UserComboInnerBind(arrParam);
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        
        /***************************************************************************************************
         *                                     사용자 정의 Function 처리 부분                           *
         ***************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // SHR부서
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        	
        	} else if ((obj.name == "imgHelpSHREVAL_DTCD") || (obj.name == "edtSHREVAL_DTNM")) { // SHR평가부서
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREVAL_DTNM";
        		arrParam[5] = "edtSHREVAL_DTCD,edtSHREVAL_DTNM";
        		arrParam[6] = "0,1";
        		
        	} else if (obj.name == "grdEV_DTETXM") {	
        		if (sColumnID == "DEPT_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "DEPT_NAME") {				
        			arrParam[0] = "EVM0004";
        			arrParam[1] = "";
        			arrParam[2] = "DEPT_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdEV_DTETXM";
        			arrParam[5] = "DEPT_CODE,DEPT_NAME,SECT_NAME,EVAL_DTCD,EVAL_DTNM,EVAL_STNM,DTMN_EMNR,DTMN_NAME";
        			arrParam[6] = "0,1,3,0,1,3,8,9";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);

        		} else if (sColumnID == "DTMN_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "DTMN_NAME") {				
        			arrParam[0] = "HRM0001";
        			arrParam[1] = "";
        			arrParam[2] = "DTMN_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdEV_DTETXM";
        			arrParam[5] = "DTMN_EMNR,DTMN_NAME,EVAL_STNM,EVAL_DTCD,EVAL_DTNM";
        			arrParam[6] = "0,1,5,2,3";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);

        		} else if (sColumnID == "WES1_EMNM" || this.fnc_getGridHelpColName(obj, sFromDs) == "WES1_EMNM") {				
        			arrParam[0] = "HRM0001";
        			arrParam[1] = "";
        			arrParam[2] = "WES1_EMNM";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdEV_DTETXM";
        			arrParam[5] = "WES1_EMNR,WES1_EMNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);

        		} else if (sColumnID == "WES2_EMNM" || this.fnc_getGridHelpColName(obj, sFromDs) == "WES2_EMNM") {				
        			arrParam[0] = "HRM0001";
        			arrParam[1] = "";
        			arrParam[2] = "WES2_EMNM";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdEV_DTETXM";
        			arrParam[5] = "WES2_EMNR,WES2_EMNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			  
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		} 
        	}
        }

        this.dsEV_DTETXM_oncolumnchanged = function(obj,e)
        {                                  
        	if      (e.columnid == "DEPT_NAME") this.fn_HelpDialoge(this.grdEV_DTETXM, "YES" ,e.oldvalue, e.columnid); 
        	else if (e.columnid == "DTMN_NAME") this.fn_HelpDialoge(this.grdEV_DTETXM, "YES" ,e.oldvalue, e.columnid); 
        	else if (e.columnid == "WES1_EMNM") this.fn_HelpDialoge(this.grdEV_DTETXM, "YES" ,e.oldvalue, e.columnid); 
        	else if (e.columnid == "WES2_EMNM") this.fn_HelpDialoge(this.grdEV_DTETXM, "YES" ,e.oldvalue, e.columnid); 
        }

        /*-------------------------------+
         | 조회조건 평가명 콤보|
         +------------------------------*/
        this.fn_GetUserCombo = function (oComboId) {
        	var arrParam  = new Array();
        	var arrParam2 = new Array();
        	
        	arrParam[0] = this.dsUserCombo.getColumn(0, "DSNAME");
        	arrParam[1] = this.dsUserCombo.getColumn(0, "COMBOID");
        	arrParam[2] = this.dsUserCombo.getColumn(0, "HEADFLAG");
        	arrParam[3] = this.dsUserCombo.getColumn(0, "USEYSNO");
        	arrParam[4] = this.dsUserCombo.getColumn(0, "PARAM");
        	    	    	        
            arrParam2[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        			
        	this.fnc_GetUserComboSingle(arrParam, arrParam2);
        	
        }

        this.cmbSHREVAL_NAME_onitemchanged = function(obj,e)
        {
        	if (this.fnc_DatasetChangeCheck("dsEV_DTETXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsEV_DTETXM");
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO"));
        		
        	if(sCLSE_YSNO == '1'){
        		this.div_ButtonList.btnInput.set_enable(false);
        		this.div_ButtonList.btnDelete.set_enable(false);
        		this.div_ButtonList.btnSave.set_enable(false);
        		this.btn_PROC00.set_enable(false);
        		this.grdEV_DTETXM.set_readonly(true);
        		//this.grdEV_DTETXM.fnc_SetReadonly(true);
        	} else {
        	    this.div_ButtonList.btnInput.set_enable(true);
        		this.div_ButtonList.btnDelete.set_enable(true);
        		this.div_ButtonList.btnSave.set_enable(true);
        		this.btn_PROC00.set_enable(true);
        		this.grdEV_DTETXM.set_readonly(false);
        		//this.grdEV_DTETXM.fnc_SetReadonly(false);
        	}
        	
        	this.fn_Search();
        }

        /*-------------------------------+
         | 조직평가대상부서 생성 처리            |
         +------------------------------*/
        this.btn_PROC00_OnClick = function(obj,e)
        {
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
        	}
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCOMB_NAME = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "COMB_NAME"));
        	
        	if (this.fnc_Message("EVM021", sCOMB_NAME) == false) return false;

        	this.fnc_DatasetClear("dsEV_DTETXM");

        	var sInDataSet 	= "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "";
        	var sArgument   = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sArgument  += " action="	+ this.fnc_Quote(sMethodName);
        		sArgument  += " SYNT_EACD=" + this.fnc_Quote(this.cmbSHREVAL_NAME.value);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsEV_DTETXM.addEventHandler("oncolumnchanged", this.dsEV_DTETXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btn_PROC00.addEventHandler("onclick", this.btn_PROC00_OnClick, this);
            this.grdEV_DTETXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.cmbSHREVAL_NAME.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHREVAL_NAME.addEventHandler("onitemchanged", this.cmbSHREVAL_NAME_onitemchanged, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREVAL_DTCD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREVAL_DTNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDURS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHROPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("EVMA0100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
