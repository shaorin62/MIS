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
                this.set_name("BDMD0010");
                this.set_titletext("품의예산관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTB_CPLREQ", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_BFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_TYPE\" type=\"STRING\" size=\"8\"/><Column id=\"CPLT_SEQN\" type=\"BIGDECIMAL\" size=\"5\"/><Column id=\"REQU_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"BUDG_STYM\" type=\"STRING\" size=\"6\"/><Column id=\"BUDG_ENYM\" type=\"STRING\" size=\"6\"/><Column id=\"BUDG_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"REQU_REMK\" type=\"STRING\" size=\"200\"/><Column id=\"REQU_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"BUDG_YMFR\" type=\"STRING\" size=\"6\"/><Column id=\"BUDG_YMTO\" type=\"STRING\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUB1</Col><Col id=\"CODEID\">DIV_CD</Col><Col id=\"HEADFLAG\">B</Col></Row><Row><Col id=\"DSNAME\">dsBUDG_TYPE</Col><Col id=\"CODEID\">BC09</Col><Col id=\"HEADFLAG\">B</Col></Row><Row><Col id=\"DSNAME\">dsSHRBUDG_TYPE</Col><Col id=\"CODEID\">BC09</Col><Col id=\"HEADFLAG\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRMM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MM\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"MNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MM\">01</Col><Col id=\"MNAME\">1월</Col></Row><Row><Col id=\"MM\">02</Col><Col id=\"MNAME\">2월</Col></Row><Row><Col id=\"MM\">03</Col><Col id=\"MNAME\">3월</Col></Row><Row><Col id=\"MM\">04</Col><Col id=\"MNAME\">4월</Col></Row><Row><Col id=\"MM\">05</Col><Col id=\"MNAME\">5월</Col></Row><Row><Col id=\"MM\">06</Col><Col id=\"MNAME\">6월</Col></Row><Row><Col id=\"MM\">07</Col><Col id=\"MNAME\">7월</Col></Row><Row><Col id=\"MM\">08</Col><Col id=\"MNAME\">8월</Col></Row><Row><Col id=\"MM\">09</Col><Col id=\"MNAME\">9월</Col></Row><Row><Col id=\"MM\">10</Col><Col id=\"MNAME\">10월</Col></Row><Row><Col id=\"MM\">11</Col><Col id=\"MNAME\">11월</Col></Row><Row><Col id=\"MM\">12</Col><Col id=\"MNAME\">12월</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTB_CPLREQ", "absolute", "8", "156", null, null, "8", "8", this);
            obj.set_binddataset("dsTB_CPLREQ");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"109\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"처리일자\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"예산유형\"/><Cell col=\"4\" text=\"예산내용\"/><Cell col=\"5\" text=\"시작연월\"/><Cell col=\"6\" text=\"종료연월\"/><Cell col=\"7\" text=\"계정과목\"/><Cell col=\"8\" text=\"계정명\"/><Cell col=\"9\" text=\"예산금액\"/><Cell col=\"10\" text=\"품의번호\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"normal\" text=\"bind:REQU_DATE\" mask=\"yyyy-MM-dd\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:DEPT_CODE\" editlimit=\"0\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DEPT_NAME\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:BUDG_TYPE\" editlimit=\"0\" combodataset=\"dsBUDG_TYPE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"4\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REQU_REMK\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"mask\" editfilter=\"none\" style=\"align:center;\" text=\"bind:BUDG_STYM\" mask=\"@@@@-@@\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"mask\" editfilter=\"none\" style=\"align:center;\" text=\"bind:BUDG_ENYM\" mask=\"@@@@-@@\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:ACCT_INTL\" editlimit=\"0\"/><Cell col=\"8\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ACCT_BFNM\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:BUDG_AMNT\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"10\" text=\"bind:REQU_NUMB\" mask=\"9999-999999-9999\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" style=\"align:center;\" text=\"합계\"/><Cell col=\"5\" style=\"align:center;\"/><Cell col=\"6\" style=\"align:center;\"/><Cell col=\"7\" style=\"align:center;\"/><Cell col=\"8\" style=\"align:center;\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('BUDG_AMNT'), 0)\" mask=\"#,###\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "62", "8", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16", "68", "75", "22", null, null, this);
            obj.set_taborder("33");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "93", "92", "106", "22", null, null, this);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "223", "92", "150", "22", null, null, this);
            obj.set_taborder("37");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "16", "92", "75", "22", null, null, this);
            obj.set_taborder("38");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "404", "92", "75", "22", null, null, this);
            obj.set_taborder("39");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "481", "92", "105", "22", null, null, this);
            obj.set_taborder("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_BFNM", "absolute", "610", "92", "150", "22", null, null, this);
            obj.set_taborder("42");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "404", "68", "75", "22", null, null, this);
            obj.set_taborder("43");
            obj.set_text("예산기간");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "792", "92", "75", "22", null, null, this);
            obj.set_taborder("44");
            obj.set_text("예산유형");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBUDG_TYPE", "absolute", "866", "92", "160", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Calendar("calSHRBUDG_YMFR", "absolute", "481", "68", "132", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static15", "absolute", "609", "68", "16", "22", null, null, this);
            obj.set_taborder("47");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YMTO", "absolute", "628", "68", "132", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("48");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("49");
            obj.set_text("품의예산관리");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("50");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_NAME", "absolute", "200", "92", "22", "22", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_BFNM", "absolute", "587", "92", "22", "22", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "93", "68", "156", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("품의예산관리");
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
        this.addIncludeScript("BDMD0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMD0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	BDMD0010 품의예산관리
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

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF";
        this.sPACKAGENAME = "BDMD0010"; 

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

        	var sNowDate = this.fnc_GetServerDateTime("date");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	this.calSHRBUDG_YMFR.set_value((this.fnc_SubStr(sNowDate, 0, 4) + "0101")); 
        	this.calSHRBUDG_YMTO.set_value(this.fnc_SubStr(sNowDate, 0, 8)); 
        	this.grdTB_CPLREQ.setFocus();

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
        this.fn_Search = function (obj,e) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTB_CPLREQ");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTB_CPLREQ=dsTB_CPLREQ";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLREQ.setFocus();	

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var sRow = this.dsTB_CPLREQ.addRow();
        	var sNowDate = this.fnc_GetServerDateTime("date");
        	this.dsTB_CPLREQ.setColumn(sRow, "REQU_DATE", this.fnc_SubStr(sNowDate, 0, 8));
        	this.dsTB_CPLREQ.setColumn(sRow, "BUDG_STYM", this.fnc_SubStr(sNowDate, 0, 6));
        	this.dsTB_CPLREQ.setColumn(sRow, "BUDG_ENYM", this.fnc_SubStr(sNowDate, 0, 6));
        	this.dsTB_CPLREQ.setColumn(sRow, "BUDG_YMFR", this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YMFR.value), 0, 4));
        	this.dsTB_CPLREQ.setColumn(sRow, "BUDG_YMTO", this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YMTO.value), 0, 4));
        	this.dsTB_CPLREQ.setColumn(sRow, "ACCT_GUB1", this.cmbSHRACCT_GUB1.value);

        	this.fnc_GridSetCellFocus(this.grdTB_CPLREQ, "DEPT_NAME");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTB_CPLREQ.deleteRow(this.dsTB_CPLREQ.rowposition);
        	this.grdTB_CPLREQ.setFocus(); 
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTB_CPLREQ"); 
        	this.grdTB_CPLREQ.setFocus(); 
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTB_CPLREQ=dsTB_CPLREQ:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLREQ.setFocus(); 

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
        	var sMessage = this.fnc_FormUnloadCheck("dsTB_CPLREQ", this);
        	
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

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_GUB1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_GUB1);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YMFR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "예산기간", this.calSHRBUDG_YMFR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YMTO.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "예산기간", this.calSHRBUDG_YMTO);
        	}

        	if (this.calSHRBUDG_YMTO.value < this.calSHRBUDG_YMFR.value) {
        		return this.fnc_SearchCheckPostAction("TMM072", "예산기간 시작월은 종료일 이전이어야 합니다.", this.calSHRBUDG_YMFR);
        	}

        	return true;

        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	var sQuestionText  = "부서코드  (" + this.fnc_Trim(this.dsTB_CPLREQ.getColumn(this.dsTB_CPLREQ.rowposition, "DEPT_CODE")) + ")";
        		sQuestionText += " 계정과목 (" + this.fnc_Trim(this.dsTB_CPLREQ.getColumn(this.dsTB_CPLREQ.rowposition, "ACCT_INTL")) + ")";
        		sQuestionText += " 예산유형 (" + this.fnc_Trim(this.dsTB_CPLREQ.getColumn(this.dsTB_CPLREQ.rowposition, "BUDG_TYPE")) + ")";
        		sQuestionText += " 순번 (" + this.fnc_Trim(this.dsTB_CPLREQ.getColumn(this.dsTB_CPLREQ.rowposition, "CPLT_SEQN")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTB_CPLREQ")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var row = 0; row < this.dsTB_CPLREQ.getRowCount(); row++) {
        		
        		if (this.fnc_ToUpper(this.dsTB_CPLREQ.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "DEPT_NAME"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "부서명", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "DEPT_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "DEPT_CODE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "부서코드", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "DEPT_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "BUDG_TYPE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "예산유형", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "BUDG_TYPE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "REQU_REMK"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "예산내용", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "REQU_REMK");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "BUDG_STYM"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "예산시작년월", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "BUDG_STYM");
        		}

        		if (!this.fnc_IsDate(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "BUDG_STYM")) + "01")) {
        			return this.fnc_CheckPostAction("TMM125", "예산시작년월 입력 데이터를 확인 하십시요.", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "BUDG_STYM");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "BUDG_ENYM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "예산종료년월", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "BUDG_ENYM");
        		}

        		if (!this.fnc_IsDate(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "BUDG_ENYM")) + "01")) {
        			return this.fnc_CheckPostAction("TMM125", "예산종료년월 입력 데이터를 확인 하십시요.", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "BUDG_ENYM");
        		}

        		if (this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "BUDG_ENYM")) < this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "BUDG_STYM"))) {
        			return this.fnc_CheckPostAction("TMM125", "시작월은 종료일 이전이어야 합니다..", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, "BUDG_STYM");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "ACCT_BFNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정과목명", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "ACCT_BFNM");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "ACCT_INTL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정과목", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "ACCT_INTL");
        		}

        		if (nexacro.toNumber(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(row, "BUDG_AMNT")), 0) == 0) {
        			return this.fnc_CheckPostAction("TMM072", "예산금액", this.dsTB_CPLREQ, row, this.grdTB_CPLREQ, "BUDG_AMNT");
        		}
        	}

        	return true;

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	var BUDG_YMFR = this.fnc_SubStr(this.calSHRBUDG_YMFR.value, 0, 6);
        	var BUDG_YMTO = this.fnc_SubStr(this.calSHRBUDG_YMTO.value, 0, 6);
        	
        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " BUDG_YMFR=" + this.fnc_Quote(BUDG_YMFR);					 //예산연월 시작
        		sReturnString += " BUDG_YMTO=" + this.fnc_Quote(BUDG_YMTO); 				 //예산연월 종료
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); //회계단위
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value); //부서코드
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.edtSHRACCT_INTL.value); //계정과목
        		sReturnString += " BUDG_TYPE=" + this.fnc_Quote(this.cmbSHRBUDG_TYPE.value); //계정과목
        		
        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " BUDG_YMFR=" + this.fnc_Quote(BUDG_YMFR);					 //예산연월 시작
        		sReturnString += " BUDG_YMTO=" + this.fnc_Quote(BUDG_YMTO); 				 //예산연월 종료
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); //회계단위
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value); //부서코드
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.edtSHRACCT_INTL.value); //계정과목
        		sReturnString += " BUDG_TYPE=" + this.fnc_Quote(this.cmbSHRBUDG_TYPE.value); //계정과목

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
        	
        		this.fnc_Information(this.stInformation, this.dsTB_CPLREQ.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTB_CPLREQ.rowcount); 
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE"); 
        		this.fnc_Message("TMM103"); 
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUB1,dsSHRACCT_GUB1,0";
        			arrParam[1] = "COMBO,cmbSHRBUDG_TYPE,dsSHRBUDG_TYPE,0";
        			arrParam[2] = "GRID,grdTB_CPLREQ,dsBUDG_TYPE,BUDG_TYPE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdTB_CPLREQ.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "DEPT_NAME"), "edittype", "normal");
        		this.grdTB_CPLREQ.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "ACCT_BFNM"), "edittype", "normal");
        		this.grdTB_CPLREQ.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "BUDG_TYPE"), "edittype", "combo");
        		
        	} else {
        		this.grdTB_CPLREQ.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "DEPT_NAME"), "edittype", "none");
        		this.grdTB_CPLREQ.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "ACCT_BFNM"), "edittype", "none");	
        		this.grdTB_CPLREQ.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "BUDG_TYPE"), "edittype", "none");
        		this.grdTB_CPLREQ.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "REQU_DATE"), "edittype", "none");
        		
        	}
        	
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 부서
        	if ((obj.name == "imgHelpSHRDEPT_NAME") || (obj.name == "edtSHRDEPT_NAME")) {

        		arrParam[0] = "BDM0002";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRDEPT_NAME";                         
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

        	//계정과목
        	} else if ((obj.name == "imgHelpSHRACCT_BFNM") || (obj.name == "edtSHRACCT_BFNM")) {

        		arrParam[0] = "BDM0011";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtSHRACCT_BFNM.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRACCT_BFNM";                         
        		arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_BFNM";         
        		arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	} else if (obj.name == "grdTB_CPLREQ") {
        		//부서명
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "DEPT_NAME") {

        			arrParam[0] = "BDM0002";
        			arrParam[1] = "";
        			arrParam[2] = "DEPT_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTB_CPLREQ";
        			arrParam[5] = "DEPT_CODE,DEPT_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);

        		//계정명
        		} else if (this.fnc_getGridHelpColName(obj, sFromDs) == "ACCT_BFNM") {

        			arrParam[0] = "BDM0011";
        			arrParam[1] = "";
        			arrParam[2] = "ACCT_BFNM";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTB_CPLREQ";
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
         |  조회조건 변경시 처리  |
         +---------------------------*/
        this.fn_clearData = function (obj) {
        	this.fnc_DatasetClear("dsTB_CPLREQ");
        	this.stInformation.set_text("");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTB_CPLREQ.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTB_CPLREQ.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTB_CPLREQ.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_BFNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_BFNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRBUDG_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_BFNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.cmbSHRACCT_GUB1.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("BDMD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
