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
                this.set_name("TMMB0050");
                this.set_titletext("그룹별권한관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_ATGPXM", this);
            obj._setContents("<ColumnInfo><Column id=\"GRUP_IDXX\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"GRUP_NAME\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"GRUP_LEVL\" size=\"256\" type=\"STRING\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_AUTHXM", this);
            obj._setContents("<ColumnInfo><Column id=\"GRUP_IDXX\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"MENU_IDXX\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"UPME_NAME\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"MENU_NAME\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"FMAU_YSNO\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"SEAU_YSNO\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"INAU_YSNO\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"DEAU_YSNO\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"SVAU_YSNO\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"EXCE_YSNO\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"PRAU_YSNO\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"ATHR_LEVL\" size=\"256\" type=\"STRING\" prop=\"default\"/><Column id=\"UPME_IDXX\" size=\"256\" type=\"STRING\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">ATHR_LEVL</Col><Col id=\"DSNAME\">dsATHR_LEVL</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation1", "absolute", "8", "117", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("5");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "316", "117", "176", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_AUTHXM", "absolute", "316", "138", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTM_AUTHXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"132\"/><Column size=\"152\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"70\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"그룹메뉴\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"메뉴명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"폼권한\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"조회\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"입력\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"삭제\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"저장\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"인쇄\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"엑셀\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"text\" style=\"align:center;\" cssclass=\"Cellgrd_WF_edit\" text=\"레벨\"/><Cell row=\"1\" col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"엑셀\"/><Cell row=\"1\" col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"조회\"/><Cell row=\"1\" col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"폼권한\"/><Cell row=\"1\" col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"입력\"/><Cell row=\"1\" col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"삭제\"/><Cell row=\"1\" col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"저장\"/><Cell row=\"1\" col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"출력\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:UPME_NAME\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MENU_NAME\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:FMAU_YSNO\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:SEAU_YSNO\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:INAU_YSNO\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:DEAU_YSNO\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:SVAU_YSNO\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:PRAU_YSNO\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:EXCE_YSNO\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:ATHR_LEVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", null, "113", "140", "21", "168", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("dropdown");
            obj.set_index("-1");

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("권한그룹");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRGRUP_IDXX", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRGRUP_IDXX", "absolute", "178", "71", "21", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRGRUP_NAME", "absolute", "201", "71", "100", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Grid("tvTM_ATGPXM", "absolute", "8", "138", "288", null, null, "15", this);
            obj.set_taborder("18");
            obj.set_binddataset("dsTM_ATGPXM");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"359\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"selectline: ;\" text=\"bind:GRUP_NAME\" treestartlevel=\"1\" treelevel=\"bind:GRUP_LEVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSUBX_MENU", "absolute", null, "113", "140", "21", "25", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("stMENU_LIST", "absolute", null, "113", "150", "21", "308", null, this);
            obj.set_taborder("20");
            obj.set_text("권한그룹의 메뉴 권한");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "613", "103", "80", "35", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("23");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("24");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "296", "181", "20", "41", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_text("그룹별권한관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("27");
            obj.set_text("홈 > 공통관리 > 권한관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("28");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "316", "132", "216", "6", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stSGROP_LIST", "absolute", null, "113", "285", "21", "454", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("그룹별권한관리");
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
        this.addIncludeScript("TMMB0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMB0050.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMB0050 그룹별 권한관리
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
        this.sBUTTONLIST  = "TTFFTTTF"; //공통기능정의(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMB0050"; //해당 Form에서 사용 할 Package 명

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "5";   //사용자별 프로그램 사용 권한
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
        	this.fnc_GetComboDs(this.dsCombo);
        	//this.cmbSHRSYST_CODE.set_value("TMM");
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
        	this.fnc_DatasetClear("dsTM_ATGPXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_ATGPXM=dsTM_ATGPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_AUTHXM.setFocus();
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

        	this.fnc_DataSetCancel("dsTM_AUTHXM");
        	this.grdTM_AUTHXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_AUTHXM=dsTM_AUTHXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_AUTHXM.setFocus();
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
        	 var sMessage = this.fnc_FormUnloadCheck("dsTM_ATGPXM", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
         
        } 

        /*-----------------------------------+
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

        	if (this.fnc_DatasetChangeCheck('dsTM_AUTHXM')) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_AUTHXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	 + this.fnc_Quote(sKind);
        		//sReturnString += " GRUP_IDXX=" 	 + this.fnc_Quote(this.dsGRUP_IDXX.getColumn(this.dsGRUP_IDXX.rowposition, 'COMD_CODE'));
        		sReturnString += " GRUP_IDXX="   + this.fnc_Quote(this.fnc_Trim(this.edtSHRGRUP_IDXX.value));

        	// 조회 Argument 생성
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 	     + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="      + this.fnc_Quote(sKind);
        		sReturnString += " GRUP_IDXX="   + this.fnc_Quote(this.dsTM_ATGPXM.getColumn(this.dsTM_ATGPXM.rowposition, 'GRUP_IDXX'));
        		sReturnString += " SYST_CODE="   + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSYST_CODE.value));
        	
        	}else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 	     + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="      + this.fnc_Quote(sKind);
        		//sReturnString += " GRUP_IDXX="   + this.fnc_Quote(this.dsGRUP_IDXX.getColumn(this.dsGRUP_IDXX.rowposition, 'COMD_CODE'));
        		//sReturnString += " SYST_CODE="   + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSYST_CODE.value));
        	
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
        	
        		this.fnc_Information(this.stInformation1, this.dsTM_ATGPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        		//this.fnSearch01();
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.stSGROP_LIST.set_text(("[ " + this.dsTM_ATGPXM.getColumn(this.dsTM_ATGPXM.rowposition, "GRUP_NAME") + " ]"));
        		this.fnc_Information(this.stInformation2, this.dsTM_AUTHXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        		//중분류 필터 제거
        		//this.dsTM_AUTHXM.filter("");
        	
        	}else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation2, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSYST_CODE,0";
        		arrParam[1] = "GRID,grdTM_AUTHXM,dsATHR_LEVL,ATHR_LEVL";
        		
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		//this.tvTM_ATGPXM.set_binddataset("dsGRUP_IDXX");
        	
        	}
        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 조회조건 - 권한그룹조회(Popup)
        	if ((obj.name == 'imgHelpSHRGRUP_IDXX') || (obj.name == 'edtSHRGRUP_NAME')) {

        		arrParam[0] = 'TMM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRGRUP_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRGRUP_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRGRUP_IDXX,edtSHRGRUP_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        	}
        	this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        /*-------------------+
         |  전체 선택시 작업 |
         +-------------------*/
         this.grdTM_AUTHXM_onheadclick = function(obj,e)
        {
        		if (e.cell < 10 ) return;
        	// Form 권한 이전의 컬럼은 제외

        	var i,j;
        	var arrFieldList = new Array(7);
        	arrFieldList[0] = "FMAU_YSNO"; //폼 사용권한
        	arrFieldList[1] = "SEAU_YSNO"; //조회
        	arrFieldList[2] = "INAU_YSNO"; //신규
        	arrFieldList[3] = "DEAU_YSNO"; //삭제
        	arrFieldList[4] = "SVAU_YSNO"; //저장
        	arrFieldList[5] = "PRAU_YSNO"; //인쇄
        	arrFieldList[6] = "EXCE_YSNO"; //엑셀

        	this.grdTM_AUTHXM.set_enableredraw(false);
        	if (this.grdTM_AUTHXM.getCellProperty("Head", e.cell, "text") == 1) {
        		// UnChecked...
        		
        		if (e.cell == 10) {
        			for (j = 0; j < 7; j++) {
        				this.grdTM_AUTHXM.setCellProperty("Head", j + 10, "text", 0); //그리드 체크 제거
        			}
        		}else{
        			this.grdTM_AUTHXM.setCellProperty("Head", e.cell, "text", 0); //그리드 체크 제거
        		}

        		for (i = 0; i < this.dsTM_AUTHXM.getRowCount(); i++) {
        			this.dsTM_AUTHXM.setColumn(i, arrFieldList[e.cell - 10], 0);		
        		}
        		
        	} else {
        		
        		// Checked...
        		if (e.cell == 10) {
        			for (j = 0; j < 7; j++) {
        				this.grdTM_AUTHXM.setCellProperty("Head", j + 10, "text", 1); //그리드 체크
        			}
        		}else{
        			this.grdTM_AUTHXM.setCellProperty("Head", e.cell, "text", 1); //그리드 체크
        		}

        		for (i = 0; i < this.dsTM_AUTHXM.getRowCount(); i++) {
        			this.dsTM_AUTHXM.setColumn(i, arrFieldList[e.cell - 10], 1);
        		}
        	}
        	this.grdTM_AUTHXM.set_enableredraw(true);
        	
        }

        /*-------------------------+
         | 권한 목록 변경되기 전에 바뀐거 있는지체크  |
         +-------------------------*/
        this.dsTM_ATGPXM_canrowposchange = function(obj,e)
        {
        	if (e.newrow < 0 ) return false;

        	//can function은 return이 있어야 한다.
        	return this.fnCheckDsConfirm();
        }

        /*----------------------------------------------+
         |  그룹 정보 변경 시 권한 정보 초기화          |
         +----------------------------------------------*/
        this.dsTM_ATGPXM_onrowposchanged = function(obj,e)
        {	
        	if (e.newrow < 0) return;

        	for (var i = 10; i < 17; i++) {
        		this.grdTM_AUTHXM.setCellProperty("Head", i, "text", 0);
        	}

        	this.fnSearch01();
        }

        /*-------------------------+
         | 시스템 그룹 변경되기 전에 바뀐거 있는지체크  |
         +-------------------------*/
        this.cmbSHRSYST_CODE_canitemchange = function(obj,e)
        {
        	//can function은 return이 있어야 한다.
        	return this.fnCheckDsConfirm();
        }

        /*-------------------------+
         | 데이타셋에 변경된게 있는지 메세지까지 표시  |
         +-------------------------*/
        this.fnCheckDsConfirm = function()
        {
        	if (this.fnc_DatasetChangeCheck("dsTM_AUTHXM") == false) return;
        	
        	if (this.fnc_Message("TMM023") == false) {
        		return false;
        	} else {
        		this.fnc_DataSetCancel("dsTM_AUTHXM");
        	}
        }

        /*----------------------------------------------+
         |  시스템 그룹 변경시 해당 자료 재검색         |
         +----------------------------------------------*/
        this.cmbSHRSYST_CODE_OnChanged = function (obj,e) {

        	this.fn_getCombo();
        	this.fnSearch01();
        }

        /*----------------------------------------------+
         |  시스템 그룹 변경시 중분류 메뉴 콤보 바인딩         |
         +----------------------------------------------*/
        this.fn_getCombo = function () {

        	// 세부 콤보 생성
        	var arrParam1 = new Array();
        		arrParam1[0] = "dsSUBX_MENU"; 			   //받을 Dataset명
        		arrParam1[1] = "TMM0004"; 	  			   //조회 콤보 ID
        		arrParam1[2] = "ALL"; 			  			//Head Flags200801
        		arrParam1[3] = "0"; 		  			   //사용여부
        		arrParam1[4] = this.fnc_Trim(this.cmbSHRSYST_CODE.value); //조회 조건

        	// Bind 처리
        	var arrParam2 = new Array();
        		arrParam2[0] = "COMBO,cmbSHRSUBX_MENU,dsSUBX_MENU,0";
        	this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*----------------------------------------------+
         | 중분류 메뉴 변경시 메뉴필터        |
         +----------------------------------------------*/
        this.cmbSHRSUBX_MENU_onitemchanged = function(obj,e)
        {
        	if(e.postindex==0){
        		this.dsTM_AUTHXM.filter("");
        	} else {
        		this.dsTM_AUTHXM.filter("UPME_IDXX=='"+e.postvalue+"'");
        	}
        }

        
        /*-------------------------+
         |  세부내역 검색  |
         +-------------------------*/
        this.fnSearch01 = function(){
        	this.fnc_DatasetClear("dsTM_AUTHXM");
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_AUTHXM=dsTM_AUTHXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*--------------------------------+
         | 폼 권한 삭제 시 세부 권한 제거 |
         +--------------------------------*/
        this.dsTM_AUTHXM_oncolumnchanged = function(obj,e)
        {

        	if (e.columnid != "FMAU_YSNO") return;
        	this.dsTM_AUTHXM.set_enableevent(false);
        	
        	if (e.newvalue == "1") {
        	
        		this.dsTM_AUTHXM.setColumn(e.row, "EXCE_YSNO", "1"); //엑셀
        		this.dsTM_AUTHXM.setColumn(e.row, "SEAU_YSNO", "1"); //조회
        		this.dsTM_AUTHXM.setColumn(e.row, "INAU_YSNO", "1"); //신규
        		this.dsTM_AUTHXM.setColumn(e.row, "DEAU_YSNO", "1"); //삭제
        		this.dsTM_AUTHXM.setColumn(e.row, "SVAU_YSNO", "1"); //저장
        		this.dsTM_AUTHXM.setColumn(e.row, "PRAU_YSNO", "1"); //인쇄
        		
        	} else {
        		this.dsTM_AUTHXM.setColumn(e.row, "EXCE_YSNO", "0"); //엑셀
        		this.dsTM_AUTHXM.setColumn(e.row, "SEAU_YSNO", "0"); //조회
        		this.dsTM_AUTHXM.setColumn(e.row, "INAU_YSNO", "0"); //신규
        		this.dsTM_AUTHXM.setColumn(e.row, "DEAU_YSNO", "0"); //삭제
        		this.dsTM_AUTHXM.setColumn(e.row, "SVAU_YSNO", "0"); //저장
        		this.dsTM_AUTHXM.setColumn(e.row, "PRAU_YSNO", "0"); //인쇄	
        	}

        	this.dsTM_AUTHXM.set_enableevent(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_ATGPXM.addEventHandler("onrowposchanged", this.dsTM_ATGPXM_onrowposchanged, this);
            this.dsTM_ATGPXM.addEventHandler("canrowposchange", this.dsTM_ATGPXM_canrowposchange, this);
            this.dsTM_AUTHXM.addEventHandler("oncolumnchanged", this.dsTM_AUTHXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTM_AUTHXM.addEventHandler("onheadclick", this.grdTM_AUTHXM_onheadclick, this);
            this.cmbSHRSYST_CODE.addEventHandler("onitemchanged", this.cmbSHRSYST_CODE_OnChanged, this);
            this.cmbSHRSYST_CODE.addEventHandler("canitemchange", this.cmbSHRSYST_CODE_canitemchange, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRGRUP_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRGRUP_IDXX.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRGRUP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRGRUP_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRSUBX_MENU.addEventHandler("onitemchanged", this.cmbSHRSUBX_MENU_onitemchanged, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMB0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
