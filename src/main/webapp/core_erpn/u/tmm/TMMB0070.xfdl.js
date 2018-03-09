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
                this.set_name("TMMB0070");
                this.set_titletext("프로그램별 실행 현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_OPERXM", this);
            obj._setContents("<ColumnInfo><Column id=\"LOGX_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXCT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MENU_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MENU_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_IPAR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXCT_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CAFN_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape2", "absolute", "8", "505", null, null, "8", "8", this);
            obj.set_taborder("23");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "12", "738", null, null, "12", "12", this);
            obj.set_taborder("28");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "12", "509", null, "230", "12", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("프로그램별 실행 현황");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_OPERXM", "absolute", "8", "132", null, "366", "8", null, this);
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
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"142\"/><Column size=\"64\"/><Column size=\"71\"/><Column size=\"75\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"108\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"로그구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"사원명\"/><Cell col=\"3\" displaytype=\"text\" text=\"실행일자\"/><Cell col=\"4\" displaytype=\"text\" text=\"실행 메뉴명\"/><Cell col=\"5\" displaytype=\"text\" text=\"사용IP\"/><Cell col=\"6\" displaytype=\"text\" text=\"실행쿼리\"/><Cell col=\"7\" text=\"실행값\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left middle;\" text=\"bind:LOGX_NAME\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:EMPL_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EXCT_DATE\" mask=\"####-##-##\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MENU_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:USEX_IPAR\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left top;\" text=\"bind:EXCT_CNTT\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left top;\" text=\"bind:CAFN_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "109", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("공통관리>권한관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnLogDel", "absolute", "0", "1", "75", "23", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("Log 삭제");
            obj.set_cssclass("styTextButtonFormOpen");
            obj.style.set_align("right");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "16", "68", "60", "22", null, null, this);
            obj.set_text("조회기간");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHROPER_STDT", "absolute", "81", "68", "94", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_value("TODAY");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHROPER_ENDT", "absolute", "198", "68", "94", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_value("TODAY");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "178", "68", "16", "22", null, null, this);
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "302", "68", "33", "22", null, null, this);
            obj.set_text("사원");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "340", "68", "67", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("false");
            obj.set_taborder("17");
            obj.style.set_align("center");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "408", "68", "22", "22", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "431", "68", "150", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "591", "68", "47", "22", null, null, this);
            obj.set_text("메뉴명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMENU_IDXX", "absolute", "643", "68", "99", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("false");
            obj.set_taborder("18");
            obj.style.set_align("center");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMENU_IDXX", "absolute", "743", "68", "22", "22", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMENU_NAME", "absolute", "766", "68", "150", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "12", "509", "100", "230", null, null, this);
            obj.set_taborder("25");
            obj.set_text("실행쿼리");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "12", "738", "100", null, null, "12", this);
            obj.set_taborder("27");
            obj.set_text("실행값");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("EXCT_CNTT", "absolute", "113", "511", null, "226", "14", null, this);
            obj.set_taborder("30");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_scrollbars("autoboth");
            obj.style.set_border("1 solid #bbbbbbff");
            obj.style.setStyleValue("color", "readonly", "gray");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("CAFN_NAME", "absolute", "113", "740", null, null, "14", "14", this);
            obj.set_taborder("31");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_scrollbars("autoboth");
            obj.set_wordwrap("char");
            obj.style.setStyleValue("color", "disabled", "gray");
            obj.style.setStyleValue("border", "readonly", "1 solid #bbbbbbff");
            obj.style.setStyleValue("color", "readonly", "gray");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popLogDelete", "absolute", "616", "850", "398", "38", null, null, this);
            obj.style.set_background("lightblue");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static7", "absolute", "8", "8", "79", "22", null, null, this.popLogDelete);
            obj.set_taborder("10");
            obj.set_text("기준일");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.popLogDelete.addChild(obj.name, obj);
            obj = new Button("btnLogDelete", "absolute", "305", "8", "41", "23", null, null, this.popLogDelete);
            obj.set_taborder("11");
            obj.set_text("처리");
            obj.getSetter("class").set("");
            this.popLogDelete.addChild(obj.name, obj);
            obj = new Button("btnLogDelete_close", "absolute", "352", "8", "41", "23", null, null, this.popLogDelete);
            obj.set_taborder("12");
            obj.set_text(" 닫 기 ");
            obj.getSetter("class").set("");
            this.popLogDelete.addChild(obj.name, obj);
            obj = new Calendar("calSHRBASE_DATE", "absolute", "87", "8", "94", "22", null, null, this.popLogDelete);
            this.popLogDelete.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj = new Static("Static00", "absolute", "184", "8", "121", "22", null, null, this.popLogDelete);
            obj.set_taborder("14");
            obj.set_text("이전 자료 삭제");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.popLogDelete.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
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
            obj = new Layout("default", "", 398, 38, this.popLogDelete,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("lightblue");
            		p.set_scrollbars("none");
            		p.set_cssclass("styFormItemCapBE");
            		p.set_visible("false");

            	}
            );
            this.popLogDelete.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("프로그램별 실행 현황");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","CAFN_NAME","value","dsTM_OPERXM","CAFN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","EXCT_CNTT","value","dsTM_OPERXM","EXCT_CNTT");
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
        this.addIncludeScript("TMMB0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMB0070.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMB0070 프로그램별 실행현황
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
        this.sPACKAGENAME = "TMMB0070"; //해당 Form에서 사용 할 Package 명

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
        	
        	this.calSHROPER_STDT.set_value(this.fnc_Today().substr(0, 8));
        	this.calSHROPER_ENDT.set_value(this.fnc_Today().substr(0, 8));

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
        		return this.fnc_SearchCheckPostAction("TMM042", "조회 시작일,조회 종료일", this.calSHROPER_ENDT);
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
        		sReturnString += " calSHROPER_STDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHROPER_STDT.value));
        		sReturnString += " calSHROPER_ENDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHROPER_ENDT.value));
        		sReturnString += " edtSHREMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " edtSHRMENU_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMENU_IDXX.value));
        	
        	} else if (sKind == "LOG_DELETE") {
        		
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " calSHRBASE_DATE=" + this.fnc_Quote(this.popLogDelete.calSHRBASE_DATE.value);
        		sReturnString += " calSHROPER_STDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHROPER_STDT.value));
        		sReturnString += " calSHROPER_ENDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHROPER_ENDT.value));
        		sReturnString += " edtSHREMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " edtSHRMENU_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMENU_IDXX.value));
        		
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
        		this.fnc_Message("TMM125","로그 삭제 처리 되었습니다.");
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
        	
        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        	
        		arrParam[0] = "HRM0001"; 								 //Popup ID
        		arrParam[1] = ""; 										 //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										 //사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHREMPL_NAME"; 						 //현재 포커스 Componect명
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME"; 		 //초기화 및 결과 Mapping Column
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
        	this.grdTM_LOGINX.setFocus();
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
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRMENU_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRMENU_IDXX.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRMENU_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMENU_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.EXCT_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.CAFN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popLogDelete.btnLogDelete.addEventHandler("onclick", this.fn_LogDelete, this);
            this.popLogDelete.btnLogDelete_close.addEventHandler("onclick", this.fn_Popup_close, this);
            this.popLogDelete.calSHRBASE_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMB0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
