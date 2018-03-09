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
                this.set_name("EVMA0080P01");
                this.set_classname("FSMB0026");
                this.set_titletext("평가대상자관리(제외자관리)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1000,566);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsWEER_CODE</Col><Col id=\"CODEID\">WEER_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCodeYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">선택</Col><Col id=\"code\"/></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">예</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"name\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_WGEEXD", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WEER_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"EVTT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EVRT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APLY_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "15", "35", null, "69", "15", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEVTT_YSNO", "absolute", "131", "72", "176", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_innerdataset("@dsCodeYn");
            obj.set_datacolumn("name");
            obj.set_codecolumn("code");

            obj = new Edit("edtSHREVAL_NAME", "absolute", "131", "46", "176", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "664", "46", "67", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "732", "46", "21", "21", null, null, this);
            obj.set_taborder("29");
            obj.getSetter("tabstop").set("false");
            obj.getSetter("imagealign").set("left middle");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "755", "46", "104", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "35", "46", "94", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("평가명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "35", "72", "94", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("피평가자대상");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "336", "46", "89", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("제외사유");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "336", "72", "89", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("평가자대상");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "622", "46", "68", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "622", "72", "68", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("적용");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "108", "262", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.getSetter("class").set("styFormSearchInfo");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_WGEEXD", "absolute", "15", "129", null, null, "15", "15", this);
            obj.set_taborder("19");
            obj.set_binddataset("dsEV_WGEEXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cellsizingtype("both");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"140\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_edit\" text=\"적용여부\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_edit\" text=\"피평가자\"/><Cell col=\"2\" text=\"평가자\"/><Cell col=\"3\" text=\"사원번호\" wordwrap=\"char\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\" wordwrap=\"char\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"제외사유\" wordwrap=\"char\"/><Cell col=\"6\" text=\"소속\"/><Cell col=\"7\" text=\"부서\"/><Cell col=\"8\" text=\"직급\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APLY_YSNO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:EVTT_YSNO\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:EVRT_YSNO\"/><Cell col=\"3\" text=\"bind:EMPL_NUMB\"/><Cell col=\"4\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" text=\"bind:EMPL_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:WEER_CODE\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"8\" text=\"bind:CPOS_NAME\"/><Cell col=\"9\" text=\"bind:OPOS_NAME\"/><Cell col=\"10\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "4", "15", "461", "0", null, this);
            obj.set_taborder("61");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "4", "15", "461", null, null, this);
            obj.set_taborder("62");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "341", "104", "56", "25", null, null, this);
            obj.set_taborder("72");
            obj.set_text("25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("73");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "533", "0", "110", "8", null, null, this);
            obj.set_taborder("74");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "533", "31", "110", "4", null, null, this);
            obj.set_taborder("75");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "429", "551", "110", "15", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWEER_CODE", "absolute", "419", "46", "173", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Combo("cmbEVRT_YSNO", "absolute", "419", "72", "173", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_innerdataset("@dsCodeYn");
            obj.set_datacolumn("name");
            obj.set_codecolumn("code");

            obj = new Combo("cmbSHRAPLY_YSNO", "absolute", "664", "72", "195", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_innerdataset("@dsCodeYn");
            obj.set_datacolumn("name");
            obj.set_codecolumn("code");

            obj = new Edit("edtSHREVAL_CODE", "absolute", "1032", "142", "176", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1000, 566, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FSMB0026");
            		p.set_titletext("평가대상자관리(제외자관리)");
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
        this.addIncludeScript("EVMA0080P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("EVMA0080P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	EVMA0080P01 평가대상자관리(제외자관리)
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.12		김석영		Initial Created.
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
        this.sPACKAGENAME = "EVMA0080"; 

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
        	
        	this.edtSHREVAL_CODE.set_value(this.parent.sCOMB_CODE);
        	this.edtSHREVAL_NAME.set_value(this.parent.sCOMB_NAME);	
        	this.edtSHREVAL_CODE.set_readonly(true);
        	this.edtSHREVAL_NAME.set_readonly(true);
        	
        	this.fn_Search();
        	this.grdEV_WGEEXD.setFocus();
        	
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
        	this.fnc_DatasetClear('dsEV_WGEEXD');

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsEV_WGEEXD=dsEV_WGEEXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, "EVMA0080", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdEV_WGEEXD.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
            var sCOMB_CODE = this.fnc_Trim(this.edtSHREVAL_CODE.value);
        	var iRow = this.dsEV_WGEEXD.addRow();
        	
        	this.dsEV_WGEEXD.setColumn(iRow, "SYNT_EACD", sCOMB_CODE);
        	this.dsEV_WGEEXD.setColumn(iRow, "APLY_YSNO", "1");
        	this.dsEV_WGEEXD.setColumn(iRow, "EVTT_YSNO", "0");
        	this.dsEV_WGEEXD.setColumn(iRow, "EVRT_YSNO", "0");
        	
        	this.dsEV_WGEEXD.set_rowposition(iRow); 
        	this.grdEV_WGEEXD.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEEXD, "EMPL_NAME"));
        	this.grdEV_WGEEXD.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsEV_WGEEXD.deleteRow(this.dsEV_WGEEXD.rowposition);
        	this.grdEV_WGEEXD.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsEV_WGEEXD");
        	this.grdEV_WGEEXD.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE01";
        	var sInDataSet  = "dsEV_WGEEXD=dsEV_WGEEXD:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdEV_WGEEXD.setFocus();
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
        	var sMessage = this.fnc_FormUnloadCheck("dsEV_WGEEXD", this);
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
        	if (this.fnc_DatasetChangeCheck("dsEV_WGEEXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHREVAL_CODE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.edtSHREVAL_NAME);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsEV_WGEEXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	var sQuestionText = this.grdEV_WGEEXD.getCellText(this.grdEV_WGEEXD.currentrow, this.grdEV_WGEEXD.getBindCellIndex( "body", "EMPL_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsEV_WGEEXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsEV_WGEEXD.getRowCount(); i++) {
        		var sEMPL_NUMB = this.fnc_Trim(this.dsEV_WGEEXD.getColumn(i, "EMPL_NUMB"));			
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_WGEEXD.getColumn(i, "EMPL_NUMB"))) < 1) {
        			this.grdEV_WGEEXD.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEEXD, "EMPL_NUMB"));
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 사원번호가", this.dsEV_WGEEXD, i, this.grdEV_WGEEXD, "EMPL_NUMB");
        		}	
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_WGEEXD.getColumn(i, "WEER_CODE"))) < 1) {
        			this.grdEV_WGEEXD.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEEXD, "WEER_CODE"));
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 제외사유가", this.dsEV_WGEEXD, i, this.grdEV_WGEEXD, "WEER_CODE");
        		}	
        		
        		for (var j = 0; j < this.dsEV_WGEEXD.getRowCount(); j++) {
        			if(i != j){
        				if(sEMPL_NUMB == this.fnc_Trim(this.dsEV_WGEEXD.getColumn(j, "EMPL_NUMB"))){
        					this.grdEV_WGEEXD.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEEXD, "EMPL_NUMB"));
        					return this.fnc_CheckPostAction("TMM161", (i+1) + "번째 Row에 동일한 사원번호가", this.dsEV_WGEEXD, i, this.grdEV_WGEEXD, "EMPL_NUMB");
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
        	if (sKind == 'SEARCH01') {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREVAL_CODE.value)); 
        		sReturnString += " WEER_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWEER_CODE.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 		
        		sReturnString += " EVTT_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbEVTT_YSNO.value)); 
        		sReturnString += " EVRT_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbEVRT_YSNO.value)); 		
        		sReturnString += " APLY_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPLY_YSNO.value)); 
        		
        	// 저장 Argument 생성
        	} else if (sKind == "SAVE01") {	
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
        	
        	if (sMethodName == 'SEARCH01') {	
        		this.fnc_Information(this.stInformation, this.dsEV_WGEEXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsEV_WGEEXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.opener.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        		
        		arrParam[0] = "COMBO,cmbSHRWEER_CODE,dsWEER_CODE,0";
        		arrParam[1] = "GRID,grdEV_WGEEXD,dsWEER_CODE,WEER_CODE";	
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array(); 
        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "EVM0003";
        		arrParam[1] = this.edtSHREVAL_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if (obj.name == "grdEV_WGEEXD") {	
        		if (sColumnID == "EMPL_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME") {				
        			arrParam[0] = "EVM0003";
        			arrParam[1] = this.edtSHREVAL_CODE.value;
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdEV_WGEEXD";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,SECT_NAME,DEPT_NAME,CPOS_NAME,OPOS_NAME,EVTT_YSNO,EVRT_YSNO";
        			arrParam[6] = "0,1,5,3,9,11,20,21";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		} 	
        	}
        } 

        this.dsEV_WGEEXD_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdEV_WGEEXD, "YES" ,e.oldvalue, e.columnid); 
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsEV_WGEEXD.addEventHandler("oncolumnchanged", this.dsEV_WGEEXD_oncolumnchanged, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.cmbEVTT_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREVAL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdEV_WGEEXD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.cmbSHRWEER_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEVRT_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPLY_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREVAL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("EVMA0080P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
