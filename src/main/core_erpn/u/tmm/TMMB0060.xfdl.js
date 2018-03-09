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
                this.set_name("TMMB0060");
                this.set_titletext("사원별 권한관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }
            this.style.set_color("#333333ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_GROUPX", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GRUP_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"USER_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CPOS_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_USERXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CPOS_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_ATGPXM", this);
            obj._setContents("<ColumnInfo><Column id=\"GRUP_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"GRUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRUP_LEVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTM_GROUPX", "absolute", "256", "128", "430", null, null, "15", this);
            obj.set_binddataset("dsTM_GROUPX");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_autoenter("none");
            obj.set_tooltiptype("default");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사용자 ID\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직무\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:USER_IDXX\"/><Cell col=\"2\" text=\"bind:EMPL_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CPOS_CDNM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:DUTY_CDNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddIn", "absolute", "696", "382", "24", "35", null, null, this);
            obj.set_taborder("3");
            obj.getSetter("class").set("");
            obj.style.set_image("URL('theme://images/btn_WF_ShuttleL.png')");
            this.addChild(obj.name, obj);

            obj = new Button("btnRemove", "absolute", "696", "423", "24", "35", null, null, this);
            obj.set_taborder("4");
            obj.getSetter("class").set("");
            obj.style.set_image("URL('theme://images/btn_WF_ShuttleR.png')");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_USERXM", "absolute", "730", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsTM_USERXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_tooltiptype("default");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직무\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:USER_IDXX\"/><Cell col=\"2\" text=\"bind:EMPL_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CPOS_CDNM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:DUTY_CDNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "57", "21", null, null, this);
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRUSER_IDXX", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("false");
            obj.set_taborder("15");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "152", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "175", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "317", "71", "57", "21", null, null, this);
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "359", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("false");
            obj.set_taborder("19");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "441", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "464", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("21");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation3", "absolute", "840", "107", "233", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "366", "107", "177", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("tvTM_ATGPXM", "absolute", "8", "128", "228", null, null, "15", this);
            obj.set_taborder("22");
            obj.set_binddataset("dsTM_ATGPXM");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeuseexpandkey("true");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"selectline: ;\" text=\"bind:GRUP_NAME\" treestartlevel=\"1\" treelevel=\"bind:GRUP_LEVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "256", "107", "91", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("그룹 사용자");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "730", "107", null, "21", "286", null, this);
            obj.set_taborder("24");
            obj.set_text("사용자 List");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("그룹별권한관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("26");
            obj.set_text("홈 > 공통관리 > 권한관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("27");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "574", "103", "80", "25", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("35");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("36");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "275", "61", "40", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "354", "91", "12", "23", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "341", "91", "12", "23", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "353", "112", "10", "13", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "828", "91", "12", "23", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "815", "91", "12", "23", null, null, this);
            obj.set_taborder("44");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "827", "112", "10", "13", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "236", "189", "20", "41", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사원별 권한관리");
            		p.set_scrollbars("none");
            		p.style.set_color("#333333ff");

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
        this.addIncludeScript("TMMB0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMB0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMB0060 사원별 권한관리
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

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTFFTTTF"; //공통기능정의(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMB0060"; 

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
         *                                       공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fn_AuthAndUserSearch();

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
        this.fn_Search = function(obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTM_USERXM,dsTM_GROUPX");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_GROUPX=dsTM_GROUPX dsTM_USERXM=dsTM_USERXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_USERXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_GROUPX,dsTM_USERXM");
        	this.grdTM_GROUPX.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_GROUPX=dsTM_GROUPX:U";
        	var sOutDataSet = "";		 
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_GROUPX.setFocus();

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
        	 var sMessage = this.fnc_FormUnloadCheck("dsTM_GROUPX", this);

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

        	if (this.fnc_DatasetChangeCheck("dsTM_USERXM,dsTM_GROUPX")) return this.fnc_Message("TMM023");
        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_GROUPX")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;

        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function(sKind) {

        	var sReturnString;

        	//권한그룹 정보 조회
        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " GRUP_IDXX=" 	+ this.fnc_Quote(this.dsTM_ATGPXM.getColumn(this.dsTM_ATGPXM.rowposition, "GRUP_IDXX"));
        		sReturnString += " USER_IDXX=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRUSER_IDXX.value));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));

        	//그룹별 사용자 정보 조회
        	} else if (sKind == "SEARCH01") {

        		sReturnString  = " pgm=" 	    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " GBL_USERID=" + this.fnc_Quote(this.fnc_Trim(application.GBL_USERID));
        		sReturnString += " USER_IDXX=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRUSER_IDXX.value));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));

        	//사용자 정보 조회
        	} else if (sKind == "SEARCH02") {

        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " GRUP_IDXX=" 	+ this.fnc_Quote(this.dsTM_ATGPXM.getColumn(this.dsTM_ATGPXM.rowposition, "GRUP_IDXX"));
        		sReturnString += " USER_IDXX=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRUSER_IDXX.value));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));

        	//저장
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);

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

        		this.fnc_Information(this.stInformation2, this.dsTM_GROUPX.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.stInformation3, this.dsTM_USERXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_USERXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.stInformation1, this.dsTM_ATGPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.stInformation3, this.dsTM_USERXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
         		this.grdTM_USERXM.setCellProperty("Head", 0, "text", 0);
         		this.grdTM_GROUPX.setCellProperty("Head", 0, "text", 0);

        	} else if (sMethodName == "SEARCH02") {

        		this.fnc_Information(this.stInformation2, this.dsTM_GROUPX.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.grdTM_USERXM.setCellProperty("Head", 0, "text", 0);

        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation2, 0, "SAVE");
        		this.fnc_Message("TMM103");	

        		for (var i = 0; i < this.dsTM_USERXM.getRowCount(); i++) {
        		    if (this.dsTM_USERXM.getColumn(i, "CHK") != "1") continue;
        			this.dsTM_USERXM.setColumn (i,"CHK","0");
        		} 

        		this.dsTM_USERXM.applyChange();				

        	}

        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        	
        			arrParam[0] = "TMM1002";
        			arrParam[1] = "";
        			arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        			arrParam[3] = "N";
        			arrParam[4] = "edtSHREMPL_NAME";
        			arrParam[5] = "edtSHRUSER_IDXX,edtSHREMPL_NAME";
        			arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

        	} else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

        			arrParam[0] = "TMM0004";
        			arrParam[1] = "";
        			arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        			arrParam[3] = "N";
        			arrParam[4] = "edtSHRDEPT_NAME";
        			arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        			arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

        	}

        }

        /*-------------------------------------------------+
         |  Form Load 시 권한 그룹 및 사용자 조회 처리 |
         +-------------------------------------------------*/
        this.fn_AuthAndUserSearch = function() {

        	this.fnc_DatasetClear("dsTM_ATGPXM,dsTM_USERXM");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_ATGPXM=dsTM_ATGPXM dsTM_USERXM=dsTM_USERXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_GROUPX.setFocus();

        }

        /*-------------------------------+
         | 그룹 사용자 변경 여부 체크 |
         +-------------------------------*/
        this.dsTM_ATGPXM_canrowposchange = function(obj,e) {

        	if (e.newrow < 0 ) return false;
        	if (this.fnc_DatasetChangeCheck("dsTM_GROUPX") == false) return;

        	if (this.fnc_Message("TMM023") == false) {
        		return false;
        	} else {
        		this.fnc_DataSetCancel("dsTM_GROUPX");
        	}

        }

        /*-----------------------------------------+
         | 권한그룹 변경 시 권한 사용자 재조회 |
         +-----------------------------------------*/
        this.dsTM_ATGPXM_onrowposchanged = function(obj,e) {

        	this.fnc_DatasetClear("dsTM_GROUPX");

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_GROUPX=dsTM_GROUPX";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tvTM_ATGPXM.setFocus();

        }

        /*--------------------+
         | 사용자 권한 추가 |
         +--------------------*/
        this.btnAddIn_OnClick = function (obj,e) {
        	
        	var sCurrGroupId = this.dsTM_ATGPXM.getColumn(this.dsTM_ATGPXM.rowposition, "GRUP_IDXX");
            var iInsertRow = -1;
            var iFindRow   = -1;
            
        	this.grdTM_GROUPX.set_enableredraw(false);
        	for (var i = 0; i < this.dsTM_USERXM.rowcount; i++) {
        		
        		if (this.dsTM_USERXM.getColumn(i, "CHK") != "1") continue;
        		
        		if (this.dsTM_GROUPX.findRow("USER_IDXX", this.dsTM_USERXM.getColumn(i, "USER_IDXX")) < 0) {
        			iInsertRow = this.dsTM_GROUPX.addRow();
        			this.dsTM_GROUPX.copyRow(iInsertRow, this.dsTM_USERXM, i);
        			this.dsTM_GROUPX.setColumn(iInsertRow,"GRUP_IDXX",  sCurrGroupId);
        		}
        		
        		this.dsTM_USERXM.setColumn(i, "CHK", "0");

        	}
        	this.grdTM_GROUPX.set_enableredraw(true);

        }

        /*---------------------+
         | 사용자 권한 삭제  |
         +---------------------*/
        this.btnRemove_OnClick = function (obj,e) {

        	var sQustionText = "선택하신 " + this.dsTM_GROUPX.getCaseCount("CHK=='1'") + "명의 사용자 권한"
        	if (!(this.fnc_Message("TMM002", sQustionText))) return;

        	this.grdTM_GROUPX.set_enableredraw(false);
        	for (var i = this.dsTM_GROUPX.rowcount - 1; i >= 0; i--) {

        		if (this.dsTM_GROUPX.getColumn(i, "CHK") == "1") this.dsTM_GROUPX.deleteRow(i);

        	}
        	this.grdTM_GROUPX.set_enableredraw(true);

        }

        /*------------------------+
         | 전체 Check or UnCheck  |
         +------------------------*/
        this.fn_AllCheck = function(obj,e) {

        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_ATGPXM.addEventHandler("canrowposchange", this.dsTM_ATGPXM_canrowposchange, this);
            this.dsTM_ATGPXM.addEventHandler("onrowposchanged", this.dsTM_ATGPXM_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTM_GROUPX.addEventHandler("onheadclick", this.fn_AllCheck, this);
            this.btnAddIn.addEventHandler("onclick", this.btnAddIn_OnClick, this);
            this.btnRemove.addEventHandler("onclick", this.btnRemove_OnClick, this);
            this.grdTM_USERXM.addEventHandler("onheadclick", this.fn_AllCheck, this);
            this.edtSHRUSER_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMB0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
