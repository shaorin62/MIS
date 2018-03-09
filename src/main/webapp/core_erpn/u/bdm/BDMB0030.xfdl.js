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
                this.set_name("BDMB0030");
                this.set_titletext("년예산관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTB_CPLTYR", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_BFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_ATAL\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT01\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT02\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT03\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT04\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT05\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT06\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT07\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT08\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT09\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT10\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT11\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"BUDG_AT12\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"REMK_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"BUDG_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ACCT_GUB1\" type=\"STRING\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUB1</Col><Col id=\"CODEID\">DIV_CD</Col><Col id=\"HEADFLAG\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "109", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTB_CPLTYR", "absolute", "8", "132", null, null, "8", "8", this);
            obj.set_binddataset("dsTB_CPLTYR");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"200\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell rowspan=\"2\" text=\"계정과목\"/><Cell col=\"1\" rowspan=\"2\" text=\"계정명\"/><Cell col=\"2\" rowspan=\"2\" text=\"합계\"/><Cell col=\"3\" colspan=\"12\" text=\"월별예산액\"/><Cell col=\"15\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"3\" text=\"1월\"/><Cell row=\"1\" col=\"4\" text=\"2월\"/><Cell row=\"1\" col=\"5\" text=\"3월\"/><Cell row=\"1\" col=\"6\" text=\"4월\"/><Cell row=\"1\" col=\"7\" text=\"5월\"/><Cell row=\"1\" col=\"8\" text=\"6월\"/><Cell row=\"1\" col=\"9\" text=\"7월\"/><Cell row=\"1\" col=\"10\" text=\"8월\"/><Cell row=\"1\" col=\"11\" text=\"9월\"/><Cell row=\"1\" col=\"12\" text=\"10월\"/><Cell row=\"1\" col=\"13\" text=\"11월\"/><Cell row=\"1\" col=\"14\" text=\"12월\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:ACCT_INTL\" editlimit=\"0\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ACCT_BFNM\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BUDG_ATAL\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT01\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT02\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT03\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT04\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT05\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT06\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT07\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT08\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT09\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT10\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT11\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BUDG_AT12\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"15\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_NOTE\" editlimit=\"0\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('BUDG_ATAL'), 0)\" mask=\"#,###\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT01')\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT02')\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT03')\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT04')\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT05')\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT06')\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT07')\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT08')\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT09')\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT10')\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT11')\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT12')\" mask=\"#,###\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.set_tabstop("false");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "48", "349", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "16", "68", "75", "22", null, null, this);
            obj.set_taborder("33");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YEAR", "absolute", "93", "68", "65", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static00", "absolute", "178", "68", "75", "22", null, null, this);
            obj.set_taborder("35");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "255", "68", "156", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static01", "absolute", "438", "68", "81", "22", null, null, this);
            obj.set_taborder("37");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "520", "67", "106", "22", null, null, this);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_BFNM", "absolute", "650", "67", "184", "22", null, null, this);
            obj.set_taborder("40");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_BFNM", "absolute", "627", "67", "22", "22", null, null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("42");
            obj.set_text("년예산관리");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("43");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("년예산관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtSHRACCT_INTL","value","dsTM_PROJXM","COND_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtSHRACCT_BFNM","value","dsTM_PROJXM","DEPT_NAME");
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
        this.addIncludeScript("BDMB0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMB0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	BDMB0030 년예산관리
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
        this.sPACKAGENAME = "BDMB0030"; //해당 Form에서 사용 할 Package 명

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	this.calSHRBUDG_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("date"), 0, 8)); 
        	this.grdTB_CPLTYR.setFocus();
        	
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
        	this.fnc_DatasetClear("dsTB_CPLTYR");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTB_CPLTYR=dsTB_CPLTYR";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLTYR.setFocus();                                   
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var sRow = this.dsTB_CPLTYR.addRow();
        	
        	this.fnc_GridSetCellFocus(this.grdTB_CPLTYR, "ACCT_BFNM");
        	this.dsTB_CPLTYR.setColumn( sRow , "BUDG_YEAR", this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4));
        	this.dsTB_CPLTYR.setColumn( sRow , "ACCT_GUB1", this.cmbSHRACCT_GUB1.value);
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTB_CPLTYR.deleteRow(this.dsTB_CPLTYR.rowposition);
        	this.grdTB_CPLTYR.setFocus(); 
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTB_CPLTYR"); 
        	this.grdTB_CPLTYR.setFocus(); 
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        		
        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTB_CPLTYR=dsTB_CPLTYR:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLTYR.setFocus();
        	
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
        	var sMessage = this.fnc_FormUnloadCheck("dsTB_CPLTYR", this);
        	
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

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	var sQuestionText = " 계정과목 (" + this.fnc_Trim(this.dsTB_CPLTYR.getColumn(this.dsTB_CPLTYR.rowposition, "ACCT_INTL")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsTB_CPLTYR")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var row = 0; row < this.dsTB_CPLTYR.getRowCount(); row++) {
        	
        		if (this.fnc_ToUpper(this.dsTB_CPLTYR.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLTYR.getColumn(row, "ACCT_BFNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정과목명", this.dsTB_CPLTYR, row, this.grdTB_CPLTYR, "ACCT_BFNM");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLTYR.getColumn(row, "ACCT_INTL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정과목", this.dsTB_CPLTYR, row, this.grdTB_CPLTYR, "ACCT_INTL");
        		}

        		if (nexacro.toNumber(this.fnc_Trim(this.dsTB_CPLTYR.getColumn(row, "BUDG_ATAL")), 0) == 0) 	{
        			return this.fnc_CheckPostAction("TMM072", "예산액", this.dsTB_CPLTYR, row, this.grdTB_CPLTYR, "BUDG_AT01");
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
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); 										//회계단위
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.edtSHRACCT_INTL.value); 										//계정과목

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
        	
        	if (ErrorCode < 0) 	{
        	
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	}
        	else {
        		
        		this.fn_PostProcess(sMethodName);
        	}
        	
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation, this.dsTB_CPLTYR.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTB_CPLTYR.rowcount); 
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE"); 
        		this.fnc_Message("TMM103"); 
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUB1,dsSHRACCT_GUB1,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTB_CPLTYR.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLTYR, "ACCT_BFNM"), "edittype", "normal");
        	} else {
        		this.grdTB_CPLTYR.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLTYR, "ACCT_BFNM"), "edittype", "none");	
        	}
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	 //계정과목
        	if ((obj.name == "imgHelpSHRACCT_BFNM") || (obj.name == "edtSHRACCT_BFNM")) {

        		arrParam[0] = "BDM0011";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtSHRACCT_BFNM.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRACCT_BFNM";                         
        		arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_BFNM";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	} else if (obj.name == "grdTB_CPLTYR") {
        		
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "ACCT_BFNM") {
        			arrParam[0] = "BDM0011";
        			arrParam[1] = "";
        			arrParam[2] = "ACCT_BFNM";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTB_CPLTYR";
        			arrParam[5] = "ACCT_INTL,ACCT_BFNM";
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

        	if (strColumnID == "ACCT_BFNM") {
        		this.fn_CodeNameDisplay(this.grdTB_CPLTYR);
        		return;
        		
        	} else if (strColumnID == "BUDG_AT01"
        		 || strColumnID == "BUDG_AT02"
        		 || strColumnID == "BUDG_AT03"
        		 || strColumnID == "BUDG_AT04"
        		 || strColumnID == "BUDG_AT05"
        		 || strColumnID == "BUDG_AT06"
        		 || strColumnID == "BUDG_AT07"
        		 || strColumnID == "BUDG_AT08" 
        		 || strColumnID == "BUDG_AT09"
        		 || strColumnID == "BUDG_AT10"
        		 || strColumnID == "BUDG_AT11"
        		 || strColumnID == "BUDG_AT12") {
        		 
        		var BUDG_AT01 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT01"), 0);
        		var BUDG_AT02 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT02"), 0);
        		var BUDG_AT03 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT03"), 0);
        		var BUDG_AT04 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT04"), 0);
        		var BUDG_AT05 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT05"), 0);
        		var BUDG_AT06 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT06"), 0);
        		var BUDG_AT07 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT07"), 0);
        		var BUDG_AT08 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT08"), 0);
        		var BUDG_AT09 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT09"), 0);
        		var BUDG_AT10 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT10"), 0);
        		var BUDG_AT11 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT11"), 0);
        		var BUDG_AT12 = nexacro.toNumber(this.dsTB_CPLTYR.getColumn(nRow, "BUDG_AT12"), 0);

        		var BUDG_ATAL = nexacro.toNumber(BUDG_AT01, 0) + nexacro.toNumber(BUDG_AT02, 0) + nexacro.toNumber(BUDG_AT03, 0) + nexacro.toNumber(BUDG_AT04, 0)
        					  + nexacro.toNumber(BUDG_AT05, 0) + nexacro.toNumber(BUDG_AT06, 0) + nexacro.toNumber(BUDG_AT07, 0) + nexacro.toNumber(BUDG_AT08, 0)
        					  + nexacro.toNumber(BUDG_AT09, 0) + nexacro.toNumber(BUDG_AT10, 0) + nexacro.toNumber(BUDG_AT11, 0) + nexacro.toNumber(BUDG_AT12, 0);

        		this.dsTB_CPLTYR.set_enableevent(false);
        		this.dsTB_CPLTYR.setColumn(nRow, "BUDG_ATAL", BUDG_ATAL);
        		this.dsTB_CPLTYR.set_enableevent(true);

        		return;
        	}
        }

        /*--------------------------+
         |  조회조건 변경시 처리  |
         +---------------------------*/
        this.fn_clearData = function (obj) {
        	this.fnc_DatasetClear("dsTB_CPLTYR");
        	this.stInformation.set_text("");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTB_CPLTYR.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTB_CPLTYR.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTB_CPLTYR.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.calSHRBUDG_YEAR.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_BFNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_BFNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_BFNM.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("BDMB0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
