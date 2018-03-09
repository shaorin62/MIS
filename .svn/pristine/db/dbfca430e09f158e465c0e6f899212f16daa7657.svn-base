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
                this.set_name("BDMB0020");
                this.set_titletext("부서예산편성인원설정");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTB_CPLECT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RANK_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TARG_MCAL\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC01\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC02\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC03\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC04\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC05\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC06\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC07\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC08\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC09\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC10\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC11\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"TARG_MC12\" type=\"BIGDECIMAL\" size=\"9\"/><Column id=\"REMK_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"CURR_YYMM\" type=\"STRING\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsRANK_CODE</Col><Col id=\"CODEID\">POSI_CODE</Col><Col id=\"HEADFLAG\">B</Col></Row><Row><Col id=\"DSNAME\">dsSHRACCT_GUB1</Col><Col id=\"CODEID\">DIV_CD</Col><Col id=\"HEADFLAG\">B</Col></Row><Row><Col id=\"DSNAME\">dsSHRRANK_CODE</Col><Col id=\"CODEID\">POSI_CODE</Col><Col id=\"HEADFLAG\">A</Col></Row><Row><Col id=\"DSNAME\">dsSHRSETT_GUBN</Col><Col id=\"CODEID\">BC08</Col><Col id=\"HEADFLAG\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "135", "240", "20", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTB_CPLECT", "absolute", "8", "158", null, null, "0", "8", this);
            obj.set_binddataset("dsTB_CPLECT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.getSetter("autofitminwidth").set("950");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"140\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell rowspan=\"2\" text=\"부서코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"2\" rowspan=\"2\" text=\"직급\"/><Cell col=\"3\" rowspan=\"2\" text=\"총인원\"/><Cell col=\"4\" colspan=\"12\" text=\"대상인원\"/><Cell col=\"16\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"4\" text=\"1월\"/><Cell row=\"1\" col=\"5\" text=\"2월\"/><Cell row=\"1\" col=\"6\" text=\"3월\"/><Cell row=\"1\" col=\"7\" text=\"4월\"/><Cell row=\"1\" col=\"8\" text=\"5월\"/><Cell row=\"1\" col=\"9\" text=\"6월\"/><Cell row=\"1\" col=\"10\" text=\"7월\"/><Cell row=\"1\" col=\"11\" text=\"8월\"/><Cell row=\"1\" col=\"12\" text=\"9월\"/><Cell row=\"1\" col=\"13\" text=\"10월\"/><Cell row=\"1\" col=\"14\" text=\"11월\"/><Cell row=\"1\" col=\"15\" text=\"12월\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:DEPT_CODE\" editlimit=\"0\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DEPT_NAME\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:RANK_CODE\" editlimit=\"0\" combodataset=\"dsRANK_CODE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TARG_MCAL\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC01\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC02\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC03\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC04\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC05\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC06\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC07\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC08\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC09\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC10\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC11\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:TARG_MC12\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"16\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_NOTE\" editlimit=\"0\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('TARG_MCAL'), 0)\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC01')\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC02')\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC03')\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC04')\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC05')\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC06')\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC07')\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC08')\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC09')\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC10')\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC11')\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TARG_MC12')\" mask=\"#,###\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnBeforeCopy", "absolute", "8", "32", "98", "22", null, null, this);
            obj.set_taborder("30");
            obj.set_text("전월인원복사");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCURR_YYMM", "absolute", "295", "32", "80", "23", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_value("null");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("staAPPR_DATE1", "absolute", "208", "32", "85", "22", null, null, this);
            obj.set_text("기준년월");
            obj.set_visible("true");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Button("btnProc", "absolute", "108", "32", "98", "22", null, null, this);
            obj.set_taborder("32");
            obj.set_text("인사자료연동");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "62", "8", null, this);
            obj.set_taborder("33");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "16", "68", "76", "22", null, null, this);
            obj.set_taborder("34");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YEAR", "absolute", "93", "68", "65", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static00", "absolute", "178", "68", "75", "22", null, null, this);
            obj.set_taborder("36");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "254", "68", "156", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "93", "92", "106", "23", null, null, this);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "223", "92", "188", "23", null, null, this);
            obj.set_taborder("40");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "16", "94", "76", "22", null, null, this);
            obj.set_taborder("41");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "431", "92", "77", "22", null, null, this);
            obj.set_taborder("42");
            obj.set_text("직급");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "431", "68", "77", "22", null, null, this);
            obj.set_taborder("43");
            obj.set_text("설정구분");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSETT_GUBN", "absolute", "508", "68", "157", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Combo("cmbSHRRANK_CODE", "absolute", "508", "92", "157", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "200", "92", "22", "22", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("48");
            obj.set_text("부서예산편성인원설정");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("49");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부서예산편성인원설정");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtCUST_CODE_value","edtSHRDEPT_CODE","value","dsTM_PROJXM","COND_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_NAME_value","edtSHRDEPT_NAME","value","dsTM_PROJXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("BDMB0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMB0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	BDMB0020 부서예산편성인원설정
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		황치웅		Initial Created.
         *   
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

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; 
        this.sPACKAGENAME = "BDMB0020";

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
        	
        	var iNowDate = this.fnc_GetServerDateTime("date");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	this.calSHRBUDG_YEAR.set_value(this.fnc_SubStr(iNowDate, 0, 8)); 
        	this.calSHRCURR_YYMM.set_value(this.fnc_SubStr(iNowDate, 0, 8)); 
        	this.grdTB_CPLECT.setFocus();
        	
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
        	this.fnc_DatasetClear("dsTB_CPLECT");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTB_CPLECT=dsTB_CPLECT";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLECT.setFocus();      
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	this.dsTB_CPLECT.addRow();
        	
        	this.fnc_GridSetCellFocus(this.grdTB_CPLECT, "DEPT_NAME");
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTB_CPLECT.deleteRow(this.dsTB_CPLECT.rowposition);
        	this.grdTB_CPLECT.setFocus(); 
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTB_CPLECT"); 
        	this.grdTB_CPLECT.setFocus(); 
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTB_CPLECT=dsTB_CPLECT:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLECT.setFocus(); 
        	
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
        	// 기능없음.
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTB_CPLECT", this);
        	
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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.calSHRBUDG_YEAR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_GUB1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_GUB1);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRSETT_GUBN.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "설정구분", this.cmbSHRSETT_GUBN);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	var sQuestionText  = "부서코드 (" + this.fnc_Trim(this.dsTB_CPLECT.getColumn(this.dsTB_CPLECT.rowposition, "DEPT_CODE")) + ")";
        	    sQuestionText += " 직급 ("     + this.fnc_Trim(this.dsTB_CPLECT.getColumn(this.dsTB_CPLECT.rowposition, "RANK_CODE")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsTB_CPLECT")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var row = 0; row < this.dsTB_CPLECT.getRowCount(); row++) {
        		
        		if (this.fnc_ToUpper(this.dsTB_CPLECT.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLECT.getColumn(row, "DEPT_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부서명", this.dsTB_CPLECT, row, this.grdTB_CPLECT, "DEPT_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLECT.getColumn(row, "DEPT_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부서코드", this.dsTB_CPLECT, row, this.grdTB_CPLECT, "DEPT_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLECT.getColumn(row, "RANK_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직급코드", this.dsTB_CPLECT, row, this.grdTB_CPLECT, "RANK_CODE");
        		}

        		if (nexacro.toNumber(this.fnc_Trim(this.dsTB_CPLECT.getColumn(row, "TARG_MCAL")), 0) == 0) {
        			return this.fnc_CheckPostAction("TMM072", "인원", this.dsTB_CPLECT, row, this.grdTB_CPLECT, "TARG_MC01");
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
        		sReturnString += " BUDG_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4));  //기준년도
        		sReturnString += " SETT_GUBN=" + this.fnc_Quote(this.cmbSHRSETT_GUBN.value);										//설정구분
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); 										//회계단위
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value);										//부서코드
        		sReturnString += " RANK_CODE=" + this.fnc_Quote(this.cmbSHRRANK_CODE.value); 										//직급

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " BUDG_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4)); 
        		sReturnString += " SETT_GUBN=" + this.fnc_Quote(this.cmbSHRSETT_GUBN.value); 
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); 
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value); 
        		sReturnString += " RANK_CODE=" + this.fnc_Quote(this.cmbSHRRANK_CODE.value); 

        	// 전월인원복사
        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = "pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += "action="    + this.fnc_Quote(sKind); 
        		sReturnString += "CURR_YYMM=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRCURR_YYMM.value), 0, 6)); 
        		sReturnString += "ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); 

        	// 인사자료연동
        	} else if (sKind == "PROC01") {
        	
        	 	sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " CURR_YYMM=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRCURR_YYMM.value), 0, 6)); 
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); 
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
        	
        		this.fnc_Information(this.stInformation, this.dsTB_CPLECT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTB_CPLECT.rowcount); 
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE"); 
        		this.fnc_Message("TMM103"); 
        		
        	} else if (sMethodName == "PROC00") {
        	
        		this.fnc_Message("TMM125", "전월인원복사가 완료 되었습니다"); 
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC01") {
        	
        		this.fnc_Message("TMM125", "인사자료연동이 완료 되었습니다"); 
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUB1,dsSHRACCT_GUB1,0";
        			arrParam[1] = "COMBO,cmbSHRSETT_GUBN,dsSHRSETT_GUBN,0";
        			arrParam[2] = "COMBO,cmbSHRRANK_CODE,dsSHRRANK_CODE,0";
        			arrParam[3] = "GRID,grdTB_CPLECT,dsRANK_CODE,RANK_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	} 
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTB_CPLECT.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLECT, "RANK_CODE"), "edittype", "combo");
        		this.grdTB_CPLECT.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLECT, "DEPT_NAME"), "edittype", "normal");
        	} else {
        		this.grdTB_CPLECT.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLECT, "RANK_CODE"), "edittype", "none");
        		this.grdTB_CPLECT.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLECT, "DEPT_NAME"), "edittype", "none");
        	}
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 부서
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHRDEPT_NAME")) {

        		arrParam[0] = "BDM0002";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRDEPT_NAME";                         
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	}else if (obj.name == "grdTB_CPLECT") {
        		
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "DEPT_NAME") {

        			arrParam[0] = "BDM0002";
        			arrParam[1] = "";
        			arrParam[2] = "DEPT_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTB_CPLECT";
        			arrParam[5] = "DEPT_CODE,DEPT_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}
        }

        
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------------+
         |  컬럼값 변경시 처리  |
         +---------------------------*/
        this.fn_ColumnChanged = function (obj,e) {

        	var strColumnID = e.columnid;
        	var nRow = e.row;

        	if (strColumnID == "DEPT_NAME") {
        	
        		this.fn_CodeNameDisplay(this.grdTB_CPLECT);
        		return;
        		
        	} else if (strColumnID == "TARG_MC01" || strColumnID == "TARG_MC02" || strColumnID == "TARG_MC03" || strColumnID == "TARG_MC04"
        		 || strColumnID == "TARG_MC05" || strColumnID == "TARG_MC06" || strColumnID == "TARG_MC07" || strColumnID == "TARG_MC08"
        		 || strColumnID == "TARG_MC09" || strColumnID == "TARG_MC10" || strColumnID == "TARG_MC11" || strColumnID == "TARG_MC12") {
        		 
        		var TARG_MC01 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC01"), 0);
        		var TARG_MC02 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC02"), 0);
        		var TARG_MC03 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC03"), 0);
        		var TARG_MC04 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC04"), 0);
        		var TARG_MC05 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC05"), 0);
        		var TARG_MC06 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC06"), 0);
        		var TARG_MC07 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC07"), 0);
        		var TARG_MC08 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC08"), 0);
        		var TARG_MC09 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC09"), 0);
        		var TARG_MC10 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC10"), 0);
        		var TARG_MC11 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC11"), 0);
        		var TARG_MC12 = nexacro.toNumber(this.dsTB_CPLECT.getColumn(nRow, "TARG_MC12"), 0);

        		var TARG_MCAL = nexacro.toNumber(TARG_MC01, 0) + nexacro.toNumber(TARG_MC02, 0) + nexacro.toNumber(TARG_MC03, 0) + nexacro.toNumber(TARG_MC04, 0)
        					  + nexacro.toNumber(TARG_MC05, 0) + nexacro.toNumber(TARG_MC06, 0) + nexacro.toNumber(TARG_MC07, 0) + nexacro.toNumber(TARG_MC08, 0)
        					  + nexacro.toNumber(TARG_MC09, 0) + nexacro.toNumber(TARG_MC10, 0) + nexacro.toNumber(TARG_MC11, 0) + nexacro.toNumber(TARG_MC12, 0);

        		this.dsTB_CPLECT.set_enableevent(false);
        		this.dsTB_CPLECT.setColumn(nRow, "TARG_MCAL", TARG_MCAL);
        		this.dsTB_CPLECT.set_enableevent(true);

        		return;
        	}
        }

        /*--------------------------+
         |  조회조건 변경시 처리  |
         +---------------------------*/
        this.fn_clearData = function (obj) {

        	this.dsTB_CPLECT.clearData();
        	this.stInformation.set_text("");
        }

        /*---------------------+
         | 전월인원복사 처리  |
         +----------------------*/
        this.fn_BeforeCopy = function (obj,e) {

        	var CURR_YYMM = this.fnc_GetMaskFormat(this.fnc_SubStr(this.calSHRCURR_YYMM.value, 0, 6), "@@@@-@@");
        	
        	alert(CURR_YYMM);
        	
        	if (this.fnc_Length(CURR_YYMM) < 1) {
        		this.fnc_Message("TMM125", "생성년월을 입력 하세요");
        		this.calSHRCURR_YYMM.setFocus();
        		return;
        	}

        
        	if (!this.fnc_Message("TMM140", CURR_YYMM + " 년월 대상인원을 모두 삭제하고 전월 대상인원을 복사 합니다.. 복사하시겠습니까")) 	return;

        	var sMethodName = "PROC00";
        	var sInDataSet  = "";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        		
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLECT.setFocus();
        	alert(CURR_YYMM);
        }

        /*----------------+
         | 인사자료연동  |
         +-----------------*/
        this.fn_Proc = function (obj,e) {

        	var CURR_YYMM = this.fnc_GetMaskFormat(this.fnc_SubStr(this.calSHRCURR_YYMM.value, 0, 6), "@@@@-@@");

        	if (this.fnc_Length(CURR_YYMM) < 1) {
        		this.fnc_Message("TMM125", "생성년월을 입력 하세요");
        		this.calSHRCURR_YYMM.setFocus();
        		return;
        	}

        	if (!this.fnc_Message("TMM140", CURR_YYMM + " 년월 대상인원을 모두 삭제하고 현재 인사 대상인원을 복사 합니다.. 복사하시겠습니까")) return;

        	var sMethodName = "PROC01";
        	var sInDataSet  = "";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLECT.setFocus(); 
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTB_CPLECT.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTB_CPLECT.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTB_CPLECT.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btnBeforeCopy.addEventHandler("onclick", this.fn_BeforeCopy, this);
            this.btnProc.addEventHandler("onclick", this.fn_Proc, this);
            this.calSHRBUDG_YEAR.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRSETT_GUBN.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRSETT_GUBN.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRSETT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRANK_CODE.addEventHandler("ontextchanged", this.cmbSHRACCT_GUB1_ontextchanged, this);
            this.cmbSHRRANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("BDMB0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
