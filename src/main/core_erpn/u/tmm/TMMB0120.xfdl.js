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
                this.set_name("TMMB0120");
                this.set_titletext("프로그램별 실행 현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_OPERXM", this);
            obj._setContents("<ColumnInfo><Column id=\"LOGX_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USER_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXCT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MENU_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MENU_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_IPAR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXCT_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CAFN_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape2", "absolute", "8", null, null, "265", "25", "15", this);
            obj.set_taborder("23");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_OPERXM", "absolute", "8", "128", null, null, "25", "295", this);
            obj.set_selecttype("multirow");
            obj.set_binddataset("dsTM_OPERXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"142\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"170\" band=\"left\"/><Column size=\"110\"/><Column size=\"350\"/><Column size=\"250\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"로그구분\"/><Cell col=\"1\" text=\"사용자 ID\"/><Cell col=\"2\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"사원명\"/><Cell col=\"4\" displaytype=\"text\" text=\"실행일시\"/><Cell col=\"5\" text=\"메뉴ID\"/><Cell col=\"6\" displaytype=\"text\" text=\"실행 메뉴명\"/><Cell col=\"7\" displaytype=\"text\" text=\"사용IP\"/><Cell col=\"8\" displaytype=\"text\" text=\"실행쿼리\"/><Cell col=\"9\" text=\"실행값\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left middle;\" text=\"bind:LOGX_NAME\"/><Cell col=\"1\" text=\"bind:USER_IDXX\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:EMPL_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EXCT_DATE\" mask=\"####-##-## ##:##:##\"/><Cell col=\"5\" text=\"bind:MENU_IDXX\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MENU_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:USEX_IPAR\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:left top;\" text=\"bind:EXCT_CNTT\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:left top;\" text=\"bind:CAFN_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "85", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnLogDel", "absolute", "0", "0", "74", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("Log 삭제");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "27", "71", "76", "21", null, null, this);
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHROPER_STDT", "absolute", "95", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_value("TODAY");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHROPER_ENDT", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_value("TODAY");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "200", "71", "16", "21", null, null, this);
            obj.set_text("~");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "343", "71", "65", "21", null, null, this);
            obj.set_text("사용자ID");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRUSER_IDXX", "absolute", "410", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("false");
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRUSER_IDXX", "absolute", "492", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRUSER_NAME", "absolute", "515", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "643", "71", "63", "21", null, null, this);
            obj.set_text("메뉴명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMENU_IDXX", "absolute", "698", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("false");
            obj.set_taborder("18");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMENU_IDXX", "absolute", "780", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMENU_NAME", "absolute", "803", "71", "150", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new TextArea("EXCT_CNTT", "absolute", "121", null, null, "142", "41", "129", this);
            obj.set_taborder("30");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.getSetter("binddataset").set("");
            obj.set_readonly("true");
            obj.style.setStyleValue("color", "readonly", "gray");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popLogDelete", "absolute", "524", "740", "241", "116", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "223", "65", null, null, this.popLogDelete);
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemBoxOut");
            this.popLogDelete.addChild(obj.name, obj);
            obj = new Static("Static7", "absolute", "29", "18", "79", "21", null, null, this.popLogDelete);
            obj.set_taborder("10");
            obj.set_text("기준일");
            obj.set_cssclass("styFormItemCapBE");
            this.popLogDelete.addChild(obj.name, obj);
            obj = new Button("btnLogDelete", "absolute", "137", "44", "57", "21", null, null, this.popLogDelete);
            obj.set_taborder("11");
            obj.set_text("처리");
            obj.getSetter("class").set("");
            this.popLogDelete.addChild(obj.name, obj);
            obj = new Button("btnLogDelete_close", "absolute", "170", "82", "62", "24", null, null, this.popLogDelete);
            obj.set_taborder("12");
            obj.set_text(" 닫 기 ");
            obj.getSetter("class").set("");
            obj.set_cssclass("btn_POP_CRUD");
            this.popLogDelete.addChild(obj.name, obj);
            obj = new Calendar("calSHRBASE_DATE", "absolute", "84", "18", "110", "21", null, null, this.popLogDelete);
            this.popLogDelete.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj = new Static("Static00", "absolute", "29", "45", "121", "21", null, null, this.popLogDelete);
            obj.set_taborder("14");
            obj.set_text("이전 자료 삭제");
            obj.set_cssclass("styFormItemCapBE");
            this.popLogDelete.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("프로그램별 실행 현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("34");
            obj.set_text("홈 > 공통관리 > 권한관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("35");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "87", "61", "8", "41", null, null, this);
            obj.set_taborder("45");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("49");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("50");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "27", null, "76", "142", null, "129", this);
            obj.set_taborder("52");
            obj.set_text("실행쿼리");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "514", "422", "80", "15", null, null, this);
            obj.set_taborder("53");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "27", null, "76", "100", null, "24", this);
            obj.set_taborder("55");
            obj.set_text("실행값");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new TextArea("CAFN_NAME", "absolute", "121", null, null, "100", "41", "24", this);
            obj.set_taborder("56");
            obj.set_imemode("hangul");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.style.setStyleValue("color", "disabled", "gray");
            obj.style.setStyleValue("border", "readonly", "1 solid #bbbbbbff");
            obj.style.setStyleValue("color", "readonly", "gray");
            obj.getSetter("binddataset").set("");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 85, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 241, 116, this.popLogDelete,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");
            		p.set_visible("false");

            	}
            );
            this.popLogDelete.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("프로그램별 실행 현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","EXCT_CNTT","value","dsTM_OPERXM","EXCT_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","CAFN_NAME","value","dsTM_OPERXM","CAFN_NAME");
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
        this.addIncludeScript("TMMB0120.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMB0120.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMB0120 프로그램별 실행 현황
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
        this.sBUTTONLIST  = "TTFFFFTF"; //공통기능정의(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMB0120"; //해당 Form에서 사용 할 Package 명

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "";   //Form의 Location 정보
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
        	
        	this.calSHROPER_STDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	this.calSHROPER_ENDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));

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
        	this.fnc_DatasetClear("dsTM_OPERXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_OPERXM=dsTM_OPERXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_OPERXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*------------------------------+
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
        	// 기능없음
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
        	 var sMessage = this.fnc_FormUnloadCheck("dsTM_OPERXM", this);

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

        	if (!this.fnc_IsDate(this.calSHROPER_STDT.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회 시작일", this.calSHROPER_STDT);
        	}

        	if (!this.fnc_IsDate(this.calSHROPER_ENDT.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회 종료일", this.calSHROPER_ENDT);
        	}

        	if (this.calSHROPER_STDT.value > this.calSHROPER_ENDT.value) {
        		return this.fnc_SearchCheckPostAction("TMM022", "조회 시작일,조회 종료일", this.calSHROPER_ENDT);
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " OPER_STDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHROPER_STDT.value));
        		sReturnString += " OPER_ENDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHROPER_ENDT.value));
        		sReturnString += " USER_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRUSER_IDXX.value));
        		sReturnString += " MENU_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMENU_IDXX.value));
        	
        	} else if (sKind == "LOG_DELETE") {
        		
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " BASE_DATE=" + this.fnc_Quote(this.popLogDelete.calSHRBASE_DATE.value);
        		
        		sReturnString += " OPER_STDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHROPER_STDT.value));
        		sReturnString += " OPER_ENDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHROPER_ENDT.value));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRUSER_IDXX.value));
        		sReturnString += " MENU_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMENU_IDXX.value));
        		
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
        	
        		this.fnc_Information(this.stInformation, this.dsTM_OPERXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_OPERXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if(sMethodName == "LOG_DELETE") {
        		this.fnc_Information(this.stInformation, this.dsTM_OPERXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM041");
        	}
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj) {

        	var arrParam = new Array();
        	
        	// 조회조건 - 사용자정보조회(Popup)
        	if ((obj.name == "imgHelpSHRUSER_IDXX") || (obj.name == "edtSHRUSER_NAME")) {
        	
        		arrParam[0] = "TMM1002"; 								 //Popup ID
        		arrParam[1] = ""; 										 //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRUSER_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										 //사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRUSER_NAME"; 						 //현재 포커스 Componect명
        		arrParam[5] = "edtSHRUSER_IDXX,edtSHRUSER_NAME"; 		 //초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									 //Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		 //팝업 호출

        	// 조회조건 - 메뉴ID(Popup)
        	} else if ((obj.name == "imgHelpSHRMENU_IDXX") || (obj.name == "edtSHRMENU_NAME")) {
        	
        		arrParam[0] = "TMM0002";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRMENU_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRMENU_NAME";
        		arrParam[5] = "edtSHRMENU_IDXX,edtSHRMENU_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        	}
        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*---------------+
         | Log 삭제 팝업   |
         +----------------*/
        this.fn_Popup = function(obj,e)
        {
        	this.popLogDelete.calSHRBASE_DATE.set_value("");
        	
         	var nX = system.clientToScreenX(this.divButtonList, 0);
         	var nY = system.clientToScreenY(this.divButtonList, this.divButtonList.getOffsetHeight());
        		nX -= system.clientToScreenX(application.mainframe,0);
        		nY -= system.clientToScreenY(application.mainframe,0);	
         	this.popLogDelete.trackPopup(nX, nY);
        }

        
        /*---------------+
         | Log 삭제 닫기   |
         +----------------*/
        this.fn_Popup_close = function(obj,e)
        {
        	this.popLogDelete.closePopup();
        }

        /*---------------+
         | Log 삭제 처리   |
         +----------------*/
        this.fn_LogDelete = function(obj,e)
        {
        	if (!this.fnc_IsDate(this.popLogDelete.calSHRBASE_DATE.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일", this.popLogDelete.calSHRBASE_DATE);
        	}
        	
        	var sMethodName = "LOG_DELETE";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_OPERXM=dsTM_OPERXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btnLogDel.addEventHandler("onclick", this.fn_Popup, this);
            this.calSHROPER_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHROPER_ENDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRUSER_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRUSER_IDXX.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRUSER_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRUSER_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRMENU_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRMENU_IDXX.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRMENU_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMENU_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.EXCT_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popLogDelete.btnLogDelete.addEventHandler("onclick", this.fn_LogDelete, this);
            this.popLogDelete.btnLogDelete_close.addEventHandler("onclick", this.fn_Popup_close, this);
            this.popLogDelete.calSHRBASE_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.CAFN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMB0120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
