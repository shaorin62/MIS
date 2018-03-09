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
                this.set_name("TMMA0040");
                this.set_titletext("공통콤보관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_COMBOX", this);
            obj._setContents("<ColumnInfo><Column id=\"COMB_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNE_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SECH_SYNX\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"WHRE_SYNT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"USYN_SYNX\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDX_SYNT\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_SYNX\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", "340", "138", null, null, "25", "15", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "101", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_COMBOX", "absolute", "8", "138", "312", null, null, "15", this);
            obj.set_binddataset("dsTM_COMBOX");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("37");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"콤보코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"콤보명\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:COMB_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:COMB_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "117", "216", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("20");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCOMB_CODE", "absolute", "359", "147", "96", "21", null, null, this);
            obj.set_text("콤보코드");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMB_CODE", "absolute", "455", "147", "160", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_COMBOX");
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMB_NAME", "absolute", "721", "147", "160", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_COMBOX");
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("staCOMB_NAME", "absolute", "666", "147", "60", "21", null, null, this);
            obj.set_text("콤보명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOWNE_NAME", "absolute", "979", "147", "160", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_COMBOX");
            obj.set_taborder("2");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("staOWNE_NAME", "absolute", "924", "147", "68", "21", null, null, this);
            obj.set_text("소유자");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("staSORT_SYNX", "absolute", "359", null, "96", "21", null, "109", this);
            obj.set_text("정렬구문");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Static("staADDX_SYNT", "absolute", "359", null, "96", "21", null, "194", this);
            obj.set_text("추가조건구문");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("staUSYN_SYNX", "absolute", "359", null, "96", "21", null, "269", this);
            obj.set_text("사용여부구문");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("staWHRE_SYNT", "absolute", "359", null, "96", "21", null, "354", this);
            obj.set_text("조건구문");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtSECH_SYNX", "absolute", "455", "173", null, null, "46", "380", this);
            obj.getSetter("binddataset").set("dsTM_COMBOX");
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtWHRE_SYNT", "absolute", "455", null, null, "80", "46", "295", this);
            obj.getSetter("binddataset").set("dsTM_COMBOX");
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtUSYN_SYNX", "absolute", "455", null, null, "70", "46", "220", this);
            obj.getSetter("binddataset").set("dsTM_COMBOX");
            obj.set_maxlength("255");
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtADDX_SYNT", "absolute", "455", null, null, "80", "46", "135", this);
            obj.getSetter("binddataset").set("dsTM_COMBOX");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtSORT_SYNX", "absolute", "455", null, null, "80", "46", "50", this);
            obj.getSetter("binddataset").set("dsTM_COMBOX");
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbTEST_COMB", "absolute", "455", null, "241", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_type("dropdown");
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Button("btnOpenPopupTest", "absolute", "698", null, "74", "21", null, "24", this);
            obj.set_taborder("9");
            obj.set_text("콤보실행");
            obj.set_cssclass("styTextButtonPopOpen");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTEST_GUBN", "absolute", "893", null, null, "21", "46", "24", this);
            obj.set_autoselect("true");
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "359", null, "96", "21", null, "24", this);
            obj.set_text("콤보테스트");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "812", null, "87", "21", null, "24", this);
            obj.set_text("조회조건값");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle6", "absolute", "27", "71", "90", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("콤보코드/명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOMB_NAME", "absolute", "115", "71", "200", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_text("공통콤보관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("46");
            obj.set_text("홈 > 공통관리 > 공통관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("47");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("55");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "35", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("57");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("58");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("60");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "320", "173", "20", "41", null, null, this);
            obj.set_taborder("61");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("staSECH_SYNX", "absolute", "359", "173", "96", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("선택구문");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "341", "154", "30", "41", null, null, this);
            obj.set_taborder("63");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "1141", "154", "20", "41", null, null, this);
            obj.set_taborder("64");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnGridRowCopy0", "absolute", "258", "113", "62", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_text("행복사");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 101, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공통콤보관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtCOMB_CODE_value","edtCOMB_CODE","value","dsTM_COMBOX","COMB_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMB_NAME_value","edtCOMB_NAME","value","dsTM_COMBOX","COMB_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOWNE_NAME_value","edtOWNE_NAME","value","dsTM_COMBOX","OWNE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtSECH_SYNX_value","txtSECH_SYNX","value","dsTM_COMBOX","SECH_SYNX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtWHRE_SYNT_value","txtWHRE_SYNT","value","dsTM_COMBOX","WHRE_SYNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtUSYN_SYNX_value","txtUSYN_SYNX","value","dsTM_COMBOX","USYN_SYNX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtADDX_SYNT_value","txtADDX_SYNT","value","dsTM_COMBOX","ADDX_SYNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtSORT_SYNX_value","txtSORT_SYNX","value","dsTM_COMBOX","SORT_SYNX");
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
        this.addIncludeScript("TMMA0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0040 공통콤보 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.26		김준수		주석 수정.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "TMMA0040";

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
        	this.fnc_DatasetClear("dsTM_COMBOX");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_COMBOX=dsTM_COMBOX";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_COMBOX.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTM_COMBOX.addRow();
        	this.edtCOMB_CODE.setFocus();

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsTM_COMBOX.deleteRow(this.dsTM_COMBOX.rowposition);
        	}
        	this.grdTM_COMBOX.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_COMBOX");
        	this.grdTM_COMBOX.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_COMBOX=dsTM_COMBOX:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_COMBOX.setFocus();
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
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_COMBOX", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
        	
        }

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
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

        	if (this.fnc_DatasetChangeCheck("dsTM_COMBOX")) {
        		if (this.fnc_Message("TMM023") == false) {
        			return false;
        		}
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_COMBOX.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsTM_COMBOX.getColumn(this.dsTM_COMBOX.rowposition, "COMB_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_COMBOX")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_COMBOX.getRowCount(); i++) {
        		
        		//수정한내용만 체크
        		if(this.fnc_ToUpper(this.dsTM_COMBOX.getRowType(this.dsTM_COMBOX.rowposition)) != Dataset.ROWTYPE_INSERT){ continue;	}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_COMBOX.getColumn(i, "COMB_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "콤보코드", this.dsTM_COMBOX, i, this.edtCOMB_CODE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_COMBOX.getColumn(i, "COMB_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "콤보명", this.dsTM_COMBOX, i, this.edtCOMB_NAME, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_COMBOX.getColumn(i, "SECH_SYNX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "선택구분", this.dsTM_COMBOX, i, this.txtSECH_SYNX, '');
        		}
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " COMB_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCOMB_NAME.value)); //콤보코드명	
        		
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	}

        	return sReturnString;
        }

        /*-------------------------------------+
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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_COMBOX.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_COMBOX.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fn_KeyFieldDisible(this.dsTM_COMBOX);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_Length(this.fnc_Trim(this.cmbTEST_COMB.value)) > 0) {
        	
        		this.fnc_DatasetClear("dsCOMM_COMB");
        		this.edtTEST_GUBN.set_value("");
        	
        	}

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        	
        		this.edtCOMB_CODE.set_readonly(false);
        	
        	} else {
        	
        		this.edtCOMB_CODE.set_readonly(true);
        	
        	}
        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*---------------+
         |  행 복사 처리 |
         +---------------*/
        this.fn_CopyRow = function (obj,e) {

        	if (this.dsTM_COMBOX.getRowCount() < 1) {
        		this.fnc_Message("BC1013", "복사");
        		return;
        	}

        	var iCopyRow = this.dsTM_COMBOX.rowposition;
        	var iRow = this.dsTM_COMBOX.insertRow(iCopyRow + 1);

        	this.dsTM_COMBOX.copyRow(iRow, this.dsTM_COMBOX, iCopyRow);
        	this.dsTM_COMBOX.setColumn(iRow, "COMB_CODE", "");
        	this.edtCOMB_CODE.setFocus();
        }

        /*------------------------+
         |  미리보기 콤보         |
         +------------------------*/
        this.fn_GetCombo = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.edtCOMB_CODE.value)) < 1) return;

        	// 세부 콤보 생성
        	var arrParam1 = new Array();
        	arrParam1[0] = "dsCOMM_COMB"; 			//받을 Dataset명
        	arrParam1[1] = this.edtCOMB_CODE.value; //조회 콤보 ID
        	arrParam1[2] = ""; 						//Head Flas
        	arrParam1[3] = "0"; 					//사용여부
        	arrParam1[4] = this.edtTEST_GUBN.value; //조회 조건

        	// Bind 처리
        	var arrParam2 = new Array();
        	arrParam2[0] = "COMBO,cmbTEST_COMB,dsCOMM_COMB,0";
        	this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        	
        }

        this.edtCOMB_NAME_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_COMBOX.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtCOMB_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMB_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMB_NAME.addEventHandler("oneditclick", this.edtCOMB_NAME_oneditclick, this);
            this.edtOWNE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtSECH_SYNX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtWHRE_SYNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtUSYN_SYNX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtADDX_SYNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtSORT_SYNX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnOpenPopupTest.addEventHandler("onclick", this.fn_GetCombo, this);
            this.edtTEST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOMB_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOMB_NAME.addEventHandler("onkeydown", this.edtSHRCOMM_CDNM_onkeydown, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnGridRowCopy0.addEventHandler("onclick", this.fn_CopyRow, this);

        };

        this.loadIncludeScript("TMMA0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
