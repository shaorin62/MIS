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
                this.set_name("FAMB0030P04");
                this.set_titletext("예산잔액조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,740,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPS_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_BUDGXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BUDG_AMNT\" size=\"25\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXEC_AMNT\" size=\"25\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NEXE_AMNT\" size=\"25\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DIFF_AMNT\" size=\"25\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">BUDG_GUBN</Col><Col id=\"DSNAME\">dsBUDG_GUBN</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "16", "150", "224", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "15", "171", null, null, "15", "44", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"138\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"187\"/><Column size=\"72\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"전표번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" text=\"계정과목\"/><Cell col=\"3\" displaytype=\"text\" text=\"적요\"/><Cell col=\"4\" displaytype=\"text\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:DISP_NUMB\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"bind:APPS_CDNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "15", null, "121", "15", null, this);
            obj.set_taborder("36");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("staDETL_CODE", "absolute", "35", "26", "101", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("예산과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "35", "52", "101", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("예산년월");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "35", "78", "101", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("예산금액");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "35", "104", "101", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("지출미승인금액");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskNEXE_AMNT", "absolute", "142", "104", "219", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_BUDGXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBUDG_AMNT", "absolute", "142", "78", "219", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_BUDGXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBUDG_YMST", "absolute", "142", "52", "100", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_type("string");
            obj.set_mask("####-##");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_BUDGXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBDSB_CODE", "absolute", "142", "26", "76", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_BUDGXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBDSB_NAME", "absolute", "220", "26", "141", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_BUDGXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "246", "52", "14", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBUDG_YMED", "absolute", "261", "52", "100", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_type("string");
            obj.set_mask("####-##");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_BUDGXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "390", "104", "88", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("예산잔액");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "390", "78", "88", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("지출승인금액");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "390", "52", "88", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("예산구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "390", "26", "88", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("코스트센터");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCSTC_CODE", "absolute", "484", "26", "76", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_BUDGXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCSTC_NAME", "absolute", "562", "26", "136", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_BUDGXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBUDG_GUBN", "absolute", "484", "52", "214", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new MaskEdit("mskEXEC_AMNT", "absolute", "484", "78", "214", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_BUDGXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDIFF_AMNT", "absolute", "484", "104", "214", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_BUDGXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("63");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "725", "0", "15", "461", null, null, this);
            obj.set_taborder("64");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "446", "136", "80", "35", null, null, this);
            obj.set_taborder("65");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "16", "28", "30", "103", null, null, this);
            obj.set_taborder("67");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "48", "0", "120", "15", null, null, this);
            obj.set_taborder("69");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnToExcel", "absolute", null, "146", "55", "21", "15", null, this);
            obj.set_taborder("70");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("71");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "639", "456", "64", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "639", "488", "64", "12", null, null, this);
            obj.set_taborder("73");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 740, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("예산잔액조회");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("mskNEXE_AMNT_value","mskNEXE_AMNT","value","dsTA_BUDGXM","NEXE_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskBUDG_AMNT_value","mskBUDG_AMNT","value","dsTA_BUDGXM","BUDG_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskEXEC_AMNT_value","mskEXEC_AMNT","value","dsTA_BUDGXM","EXEC_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDIFF_AMNT_value","mskDIFF_AMNT","value","dsTA_BUDGXM","DIFF_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("FAMB0030P04.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0030P04.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMB0030P04 예산잔액조회
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.23		김준수		Initial Created.
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
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sSLIP_NUMB 	= this.parent.sSLIP_NUMB;
        this.sSLIP_LINE		= this.parent.sSLIP_LINE;
        this.sSLIP_DATE 	= this.parent.sSLIP_DATE;
        this.sACCT_UNIT 	= this.parent.sACCT_UNIT;
        this.sBUDG_GUBN 	= this.parent.sBUDG_GUBN;
        this.sBDSB_CODE		= this.parent.sBDSB_CODE;
        this.sBDSB_NAME		= this.parent.sBDSB_NAME;
        this.sCSTC_CODE 	= this.parent.sCSTC_CODE;
        this.sCSTC_NAME 	= this.parent.sCSTC_NAME;

        this.sBUDG_YMST = "";
        this.sBUDG_YMED = "";

        this.sPACKAGENAME 	= "FAMB0030P04";

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
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
            this.fnc_GridSetting(this);
            this.fnc_GetComboDs(this.dsCombo);
            
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT, "DISP_NUMB", "Y");

        	this.cmbBUDG_GUBN.set_value(this.sBUDG_GUBN);
        	this.edtBDSB_CODE.set_value(this.sBDSB_CODE);
        	this.edtBDSB_NAME.set_value(this.sBDSB_NAME);
        	this.edtCSTC_CODE.set_value(this.sCSTC_CODE);
        	this.edtCSTC_NAME.set_value(this.sCSTC_NAME);
        	
        	var sYEAR = this.fnc_SubStr(this.sSLIP_DATE, 0, 4);
        	var sMNTH = this.fnc_SubStr(this.sSLIP_DATE, 4, 2);

        	if (this.sBUDG_GUBN == "10") {
        	
        		if (sMNTH >= "01" && sMNTH <= "03") {
        			this.sBUDG_YMST = sYEAR + "01";
        			this.sBUDG_YMED = sYEAR + "03";
        		} else if (sMNTH >= "04" && sMNTH <= "06") {
        			this.sBUDG_YMST = sYEAR + "04";
        			this.sBUDG_YMED = sYEAR + "06";
        		} else if (sMNTH >= "07" && sMNTH <= "09") {
        			this.sBUDG_YMST = sYEAR + "07";
        			this.sBUDG_YMED = sYEAR + "09";
        		} else {
        			this.sBUDG_YMST = sYEAR + "10";
        			this.sBUDG_YMED = sYEAR + "12";
        		}
        	}		
        	
        	this.mskBUDG_YMST.set_value(this.sBUDG_YMST);
        	this.mskBUDG_YMED.set_value(this.sBUDG_YMED);
        	
        	this.fn_Search();
            
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
            this.fnc_PopupClose("");
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_BUDGXM=dsTA_BUDGXM dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT.setFocus();
        }

        
        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_PopupClose("");
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음
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
            var sMessage = this.fnc_FormUnloadCheck("grdTA_SLIPNT", this);
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

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	// 기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){
        	// 기능없음
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
        	// 기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	if (sKind == "SEARCH00") {
        		
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        // 		sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.sSLIP_NUMB);
        // 		sReturnString += " SLIP_LINE=" + this.fnc_Quote(this.sSLIP_LINE);
        		sReturnString += " SLIP_DATE=" + this.fnc_Quote(this.sSLIP_DATE);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.sACCT_UNIT);
        		sReturnString += " BUDG_GUBN=" + this.fnc_Quote(this.sBUDG_GUBN);
        		sReturnString += " BDSB_CODE=" + this.fnc_Quote(this.sBDSB_CODE);
        		sReturnString += " CSTC_CODE=" + this.fnc_Quote(this.sCSTC_CODE);		
        		sReturnString += " BUDG_YMST=" + this.fnc_Quote(this.sBUDG_YMST);
        		sReturnString += " BUDG_YMED=" + this.fnc_Quote(this.sBUDG_YMED);

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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsTA_SLIPNT.rowcount);
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbBUDG_GUBN,dsBUDG_GUBN,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        this.grdTA_SLIPNT_oncelldblclick = function(obj,e) {

            var columnName = this.fnc_getColId(obj, e.cell);
                
        	if (columnName != "DISP_NUMB") return;
        	    
        	var sSlipNumb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");
        	var sSlipLine = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");
        	
        	if (this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0) {
        		this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_oncelldblclick, this);
            this.mskNEXE_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskNEXE_AMNT.addEventHandler("ontextchanged", this.mskSLIP_AMNT_OnCharChanged, this);
            this.mskBUDG_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBUDG_AMNT.addEventHandler("ontextchanged", this.mskSLIP_AMNT_OnCharChanged, this);
            this.mskBUDG_YMST.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBDSB_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBDSB_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBUDG_YMED.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCSTC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCSTC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskEXEC_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskEXEC_AMNT.addEventHandler("ontextchanged", this.mskSLIP_AMNT_OnCharChanged, this);
            this.mskDIFF_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDIFF_AMNT.addEventHandler("ontextchanged", this.mskSLIP_AMNT_OnCharChanged, this);
            this.btnToExcel.addEventHandler("onclick", this.fn_ToExcel, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);

        };

        this.loadIncludeScript("FAMB0030P04.xfdl");

       
    };
}
)();
