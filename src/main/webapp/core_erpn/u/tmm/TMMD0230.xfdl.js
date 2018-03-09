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
                this.set_name("TMMD0230");
                this.set_titletext("데이터 전송");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDBCONNECT", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_SCHEM\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REV1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTBLRESULT", this);
            obj._setContents("<ColumnInfo><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComboDBMS_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMD_CDNM\">-선 택-</Col><Col id=\"COMD_CODE\"/></Row><Row><Col id=\"COMD_CODE\">1</Col><Col id=\"COMD_CDNM\">ORACLE</Col></Row><Row><Col id=\"COMD_CODE\">2</Col><Col id=\"COMD_CDNM\">MSSQL</Col></Row><Row><Col id=\"COMD_CDNM\">Sybase</Col><Col id=\"COMD_CODE\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("데이터전송");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("23");
            obj.set_text("공통관리>데이터전송");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "158", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "272", "229", "184", "21", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDBCONNECT", "absolute", "8", "252", "450", null, null, "8", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsDBCONNECT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("13");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"145\"/><Column size=\"145\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"CHK\"/><Cell col=\"1\" text=\"스키마명\"/><Cell col=\"2\" text=\"테이블명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:TABLE_SCHEM\"/><Cell col=\"2\" text=\"bind:TABLE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle01", "absolute", "16", "92", "64", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("DB타입");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "16", "116", "64", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("아이디");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSRCX_IDXX", "absolute", "76", "116", "190", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle04", "absolute", "16", "164", "64", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("DB타입");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST", "absolute", "8", "68", "140", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("원본 데이터베이스 정보");
            obj.style.set_background("sandybrown");
            obj.style.set_color("darkmagenta");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST00", "absolute", "8", "140", "140", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("대상 데이터베이스 정보");
            obj.style.set_background("sandybrown");
            obj.style.set_color("darkmagenta");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle00", "absolute", "16", "188", "64", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("아이디");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEST_IDXX", "absolute", "76", "188", "190", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle03", "absolute", "281", "92", "64", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("호스트명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle05", "absolute", "281", "116", "64", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("비밀번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle06", "absolute", "281", "164", "64", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("호스트명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle07", "absolute", "281", "188", "64", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("비밀번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEST_PASS", "absolute", "349", "188", "190", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEST_HOST", "absolute", "349", "164", "190", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSRCX_PASS", "absolute", "349", "116", "190", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSRCX_HOST", "absolute", "349", "92", "190", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle08", "absolute", "546", "116", "37", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("패턴");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle09", "absolute", "546", "92", "37", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("포트");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle10", "absolute", "546", "164", "37", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("포트");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEST_PORT", "absolute", "584", "164", "190", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSRCX_PORT", "absolute", "584", "92", "190", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTBLX_PTTN", "absolute", "584", "116", "190", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle12", "absolute", "784", "92", "64", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("서비스명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle14", "absolute", "784", "164", "64", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("서비스명");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEST_SIDX", "absolute", "849", "164", null, "21", "16", null, this);
            obj.set_taborder("10");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSRCX_SIDX", "absolute", "849", "92", null, "21", "16", null, this);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSRCX_DBMS", "absolute", "76", "92", "190", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_innerdataset("@dsComboDBMS_TYPE");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");

            obj = new Combo("cmbDEST_DBMS", "absolute", "76", "164", "190", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_innerdataset("@dsComboDBMS_TYPE");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");

            obj = new Static("stGROP_LIST01", "absolute", "8", "228", "140", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("원본 테이블 목록");
            obj.style.set_background("sandybrown");
            obj.style.set_color("darkmagenta");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTABLE_FILTER", "absolute", "156", "228", "100", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTBLRESULT", "absolute", "466", "252", null, null, "8", "8", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("14");
            obj.set_binddataset("dsTBLRESULT");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"테이블\"/><Cell col=\"1\" text=\"결과메시지\"/></Band><Band id=\"body\"><Cell text=\"bind:TABLE_NAME\"/><Cell col=\"1\" text=\"bind:TRESULT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST02", "absolute", "466", "228", "140", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("처리결과");
            obj.style.set_background("sandybrown");
            obj.style.set_color("darkmagenta");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopyNow", "absolute", null, "228", "50", "21", "8", null, this);
            obj.set_taborder("16");
            obj.set_text("복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnSwapDBInfo", "absolute", null, "228", "50", "21", "61", null, this);
            obj.set_taborder("15");
            obj.set_text("전환");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("데이터 전송");
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
        this.addIncludeScript("TMMD0230.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMD0230.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMD0230 데이터 전송
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
        this.sBUTTONLIST  = "TTFFFTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMD0230"; //해당 Form에서 사용 할 Package 명 

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
        	//this.fnc_GetComboDs(this.dsCombo);

        	//this.fn_Search();

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
        	this.fnc_DatasetClear('dsDBCONNECT,dsTBLRESULT');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsDBCONNECT=dsDBCONNECT";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdDBCONNECT.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	//기능없음

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsDBCONNECT");
        	this.grdDBCONNECT.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsDBCONNECT=dsDBCONNECT:U";
        	var sOutDataSet = "dsTBLRESULT=dsTBLRESULT";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdDBCONNECT.setFocus();
        	
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
        	var sMessage = this.fnc_FormUnloadCheck("dsDBCONNECT", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsDBCONNECT")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.cmbSRCX_DBMS.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "DB타입", '', '', this.cmbSRCX_DBMS, '');
        	}

        	if (this.fnc_Length(this.edtSRCX_HOST.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "호스트명", '', '', this.edtSRCX_HOST, '');
        	}

        	if (this.fnc_Length(this.edtSRCX_PORT.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "포트", '', '', this.edtSRCX_PORT, '');
        	}
        	
        	if (this.fnc_Length(this.edtSRCX_SIDX.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "서비스명", '', '', this.edtSRCX_SIDX, '');
        	}
        	
        	if (this.fnc_Length(this.edtSRCX_IDXX.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "아이디", '', '', this.edtSRCX_IDXX, '');
        	}
        	
        	if (this.fnc_Length(this.edtSRCX_PASS.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "비밀번호", '', '', this.edtSRCX_PASS, '');
        	}
        	
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	//기능없음
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsDBCONNECT")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크 (기존로직과 다르게 필수 여부는 조건쪽에만 있고 그리드는 없음
        	if (this.fnc_Length(this.cmbSRCX_DBMS.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "원본 DB타입", '', '', this.cmbSRCX_DBMS, '');
        	}

        	if (this.fnc_Length(this.edtSRCX_HOST.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "원본 호스트명", '', '', this.edtSRCX_HOST, '');
        	}

        	if (this.fnc_Length(this.edtSRCX_PORT.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "원본 포트", '', '', this.edtSRCX_PORT, '');
        	}
        	
        	if (this.fnc_Length(this.edtSRCX_SIDX.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "원본 서비스명", '', '', this.edtSRCX_SIDX, '');
        	}
        	
        	if (this.fnc_Length(this.edtSRCX_IDXX.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "원본 아이디", '', '', this.edtSRCX_IDXX, '');
        	}
        	
        	if (this.fnc_Length(this.edtSRCX_PASS.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "원본 비밀번호", '', '', this.edtSRCX_PASS, '');
        	}
        	

        	if (this.fnc_Length(this.cmbDEST_DBMS.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "대상 DB타입", '', '', this.cmbDEST_DBMS, '');
        	}

        	if (this.fnc_Length(this.edtDEST_HOST.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "대상 호스트명", '', '', this.edtDEST_HOST, '');
        	}

        	if (this.fnc_Length(this.edtDEST_PORT.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "대상 포트", '', '', this.edtDEST_PORT, '');
        	}
        	
        	if (this.fnc_Length(this.edtDEST_SIDX.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "대상 서비스명", '', '', this.edtDEST_SIDX, '');
        	}
        	
        	if (this.fnc_Length(this.edtDEST_IDXX.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "대상 아이디", '', '', this.edtDEST_IDXX, '');
        	}
        	
        	if (this.fnc_Length(this.edtDEST_PASS.value) < 1) 
        	{
        		return this.fnc_CheckPostAction("TMM072", "대상 비밀번호", '', '', this.edtDEST_PASS, '');
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " SRCX_DBMS=" + this.fnc_Quote(this.fnc_Trim(this.cmbSRCX_DBMS.value));
        		sReturnString += " SRCX_HOST=" + this.fnc_Quote(this.fnc_Trim(this.edtSRCX_HOST.value));
        		sReturnString += " SRCX_PORT=" + this.fnc_Quote(this.fnc_Trim(this.edtSRCX_PORT.value));
        		sReturnString += " SRCX_SIDX=" + this.fnc_Quote(this.fnc_Trim(this.edtSRCX_SIDX.value));
        		sReturnString += " SRCX_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.edtSRCX_IDXX.value));
        		sReturnString += " SRCX_PASS=" + this.fnc_Quote(this.fnc_Trim(this.edtSRCX_PASS.value));
        		sReturnString += " TBLX_PTTN=" + this.fnc_Quote(this.fnc_Trim(this.edtTBLX_PTTN.value)); //패턴은 조회시에만 사용
        		
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " SRCX_DBMS=" + this.fnc_Quote(this.fnc_Trim(this.cmbSRCX_DBMS.value));
        		sReturnString += " SRCX_HOST=" + this.fnc_Quote(this.fnc_Trim(this.edtSRCX_HOST.value));
        		sReturnString += " SRCX_PORT=" + this.fnc_Quote(this.fnc_Trim(this.edtSRCX_PORT.value));
        		sReturnString += " SRCX_SIDX=" + this.fnc_Quote(this.fnc_Trim(this.edtSRCX_SIDX.value));
        		sReturnString += " SRCX_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.edtSRCX_IDXX.value));
        		sReturnString += " SRCX_PASS=" + this.fnc_Quote(this.fnc_Trim(this.edtSRCX_PASS.value));

        		sReturnString += " DEST_DBMS=" + this.fnc_Quote(this.fnc_Trim(this.cmbDEST_DBMS.value));
        		sReturnString += " DEST_HOST=" + this.fnc_Quote(this.fnc_Trim(this.edtDEST_HOST.value));
        		sReturnString += " DEST_PORT=" + this.fnc_Quote(this.fnc_Trim(this.edtDEST_PORT.value));
        		sReturnString += " DEST_SIDX=" + this.fnc_Quote(this.fnc_Trim(this.edtDEST_SIDX.value));
        		sReturnString += " DEST_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.edtDEST_IDXX.value));
        		sReturnString += " DEST_PASS=" + this.fnc_Quote(this.fnc_Trim(this.edtDEST_PASS.value));
        				
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
        	
        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsDBCONNECT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsDBCONNECT.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsDBCONNECT);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		//기능없음
        	
        	}

        }

        /*--------------------------------------+
         |  테이블명 필터적용/키프레스시 복합키가 안돼서 케릭터완성시로 변경 테스트     |
        	퀵뷰에서 테스트시 포커스를 벗어남. 
         +-------------------------------------*/
        this.edtTABLE_FILTER_onchar = function(obj,e)
        {
        	if(e.posttext==""){
        		this.dsDBCONNECT.filter("");
        	}else{

        		//필터를 like '%%' 방식으로 거는거
        		this.dsDBCONNECT.filter("String(TABLE_NAME).indexOf('" + e.posttext.toUpperCase() + "') >= 0"); 
        	}
        	this.edtTABLE_FILTER.setFocus();
        }

        /*--------------------------------------+
         |  원본과 대상의 접속정보를 서로 교체한다. 
         교체시 원본테이블목록의 스키마를 갱신하기 위해 조회한다. 
         조회하지 않으려면 데이터셋을 초기화해야한다.     |
         +-------------------------------------*/
        this.btnSwapDBInfo_onclick = function(obj,e)
        {
        	var s1 = this.edtSRCX_HOST.value;	// 호스트명
        	var s2 = this.edtSRCX_PORT.value;	// 포트번호
        	var s3 = this.edtSRCX_SIDX.value;	// 서비스/SID명
        	var s4 = this.edtSRCX_IDXX.value;	// 계정
        	var s5 = this.edtSRCX_PASS.value;	// 비밀번호
        	var s6 = this.cmbSRCX_DBMS.value;	// 데이터베이스타입
        	
        	var t1 = this.edtDEST_HOST.value;	// 호스트명
        	var t2 = this.edtDEST_PORT.value;	// 포트번호
        	var t3 = this.edtDEST_SIDX.value;	// 서비스/SID명
        	var t4 = this.edtDEST_IDXX.value;	// 계정
        	var t5 = this.edtDEST_PASS.value;	// 비밀번호
        	var t6 = this.cmbDEST_DBMS.value;	// 데이터베이스타입
        	
        	this.edtSRCX_HOST.set_value(t1);	// 호스트명
        	this.edtSRCX_PORT.set_value(t2);	// 포트번호
        	this.edtSRCX_SIDX.set_value(t3);	// 서비스/SID명
        	this.edtSRCX_IDXX.set_value(t4);	// 계정
        	this.edtSRCX_PASS.set_value(t5);	// 비밀번호
        	this.cmbSRCX_DBMS.set_value(t6);	// 데이터베이스타입
        	
        	this.edtDEST_HOST.set_value(s1);	// 호스트명
        	this.edtDEST_PORT.set_value(s2);	// 포트번호
        	this.edtDEST_SIDX.set_value(s3);	// 서비스/SID명
        	this.edtDEST_IDXX.set_value(s4);	// 계정
        	this.edtDEST_PASS.set_value(s5);	// 비밀번호
        	this.cmbDEST_DBMS.set_value(s6);	// 데이터베이스타입
        	
        	//변경사항 체크 하고 나서 넘김
        	this.fn_Search();
        }

        /*------------------------+
         |  Grid 해드 클릭시 체크박스인 경우 바디 컬럼 일괄 처리  |
         +------------------------*/
        this.grdDBCONNECT_onheadclick = function(obj,e)
        {
        	if (obj.getCellProperty("Head", e.cell, "edittype") == "checkbox") {
        		obj.set_enableredraw(false);//바디컬럼을 일괄 적용할때 한개씩 변경하기 때문에 느림
        		this.fn_GridSelChk(obj, "CHK", e.cell);	//바디컬럼 체크박스에 바인딩된 ds 컬럼명
        		obj.set_enableredraw(true);
        	} 
        }

        /*------------------------+
         |  Grid 해드 체크박스처리  |
         +------------------------*/
        this.fn_GridSelChk = function (objGrd,chk_col,nCell) {

        	var objDs = eval("this."+objGrd.binddataset);

        	if (objGrd.getCellProperty("Head", nCell, "text") == 1) {
        		objGrd.setCellProperty("Head", nCell, "text", "0");
        		this.fn_SetGrdChk(0, objDs, chk_col);
        	} else {
        		objGrd.setCellProperty("head", nCell, "text", "1");
        		this.fn_SetGrdChk(1, objDs, chk_col);
        	}
        }

        /*------------------------+
         |  Grid 바디 체크박스 일괄처리  |
         +------------------------*/
        this.fn_SetGrdChk = function (chk_val,objDs,chk_col) {

        	var maxrow= objDs.rowcount;
        	
        	objDs.set_enableevent(false);
        	for (var i = 0; i < maxrow; i++) {
        		objDs.setColumn(i, chk_col, chk_val);
        	}
        	objDs.set_enableevent(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdDBCONNECT.addEventHandler("onheadclick", this.grdDBCONNECT_onheadclick, this);
            this.edtSRCX_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEST_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEST_PASS.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEST_HOST.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSRCX_PASS.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSRCX_HOST.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEST_PORT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSRCX_PORT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTBLX_PTTN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEST_SIDX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSRCX_SIDX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSRCX_DBMS.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSRCX_DBMS.addEventHandler("onitemchanged", this.cmbSRCX_DBMS_onitemchanged, this);
            this.cmbDEST_DBMS.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTABLE_FILTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTABLE_FILTER.addEventHandler("onchar", this.edtTABLE_FILTER_onchar, this);
            this.btnCopyNow.addEventHandler("onclick", this.fn_Save, this);
            this.btnSwapDBInfo.addEventHandler("onclick", this.btnSwapDBInfo_onclick, this);

        };

        this.loadIncludeScript("TMMD0230.xfdl");
        this.loadPreloadList();
       
    };
}
)();
