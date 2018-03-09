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
                this.set_name("YEAA0090");
                this.set_titletext("연말정산전산매체");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">YEAA0003</Col><Col id=\"DSNAME\">dsYEA_BRANCH_CD</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_BRANCH_CD", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_COMD_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_COMD_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("144");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("7");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("연말정산전산매체");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("10");
            obj.set_text("홈 > 급여관리 > 연말정산 > 개인자료등록확인");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "133", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFileCreate", "absolute", "0", "0", "74", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("파일생성");
            obj.set_cssclass("styTextButtonBizProc");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "644", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_text("정산년도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "195", "71", "68", "21", null, null, this);
            obj.set_text("지점코드");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "433", "71", "68", "21", null, null, this);
            obj.set_text("제출일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRYEA_STD_YY", "absolute", "96", "71", "70", "21", null, null, this);
            obj.set_mask("####");
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRYEA_SEND_YMD", "absolute", "488", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Div("div_Proc", "absolute", "8", "103", null, null, "25", "15", this);
            obj.set_taborder("143");
            obj.set_url("yea::YEAA0090_2016.xfdl");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRYEA_BRANCH_CD", "absolute", "263", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("145");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("146");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("147");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("148");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "166", "61", "40", "41", null, null, this);
            obj.set_taborder("149");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 133, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연말정산전산매체");
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
            this._addPreloadList("fdl", "yea::YEAA0090_2016.xfdl");
        };
        
        // User Script
        this.addIncludeScript("YEAA0090.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("YEAA0090.xfdl", "script::lib_script_common_YEA.xjs");
        this.registerScript("YEAA0090.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0060 개인자료등록확인
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.31		김석영		Initial Created.
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
        //include "script::lib_script_common_YEA.xjs";			  //연말정산용 추가!!!

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "YEAA0080";

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
        	this.fn_GetUserCombo("cmbSHRYEA_BRANCH_CD");
        	
        	this.dsYEA_BRANCH_CD.set_rowposition(0);

        	// 조회조건 초기값 세팅
        	if ( nexacro.toNumber(this.fnc_Today().substr(4, 2)) < 3 ) {
        	    var toYear = nexacro.toNumber(this.fnc_Today().substr(0, 4)) - 1;
        	    
        		this.medSHRYEA_STD_YY.set_value(toYear.toString()); 
        	} else {
        		this.medSHRYEA_STD_YY.set_value(this.fnc_Today().substr(0, 4)); 
        	}
        		
        	this.calSHRYEA_SEND_YMD.set_value((this.fnc_ToString(nexacro.toNumber(this.medSHRYEA_STD_YY.value) + 1) + '0310'));	
        	this.medSHRYEA_STD_YY_OnChanged(this.medSHRYEA_STD_YY, e);
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
        	this.div_Proc.fn_Search(obj);
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function(obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function(obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function(obj) {
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);
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
        	// 기능 없음
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능 없음
        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능 없음
        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	// 기능 없음
        	return "";
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
        	if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        		
        		arrParam[0] = "COMBO,cmbSHRYEA_BRANCH_CD,dsYEA_BRANCH_CD,0";
        		this.fnc_UserComboInnerBind(arrParam);
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	// 기능 없음
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
         /*-------------------------------+
         | 조회조건 평가명 콤보|
         +------------------------------*/
        this.fn_GetUserCombo = function (oComboId) {
        	var arrParam  = new Array();
        	var arrParam2 = new Array();
        	
        	arrParam[0] = this.dsUserCombo.getColumn(0, "DSNAME");
        	arrParam[1] = this.dsUserCombo.getColumn(0, "COMBOID");
        	arrParam[2] = this.dsUserCombo.getColumn(0, "HEADFLAG");
        	arrParam[3] = this.dsUserCombo.getColumn(0, "USEYSNO");
        	arrParam[4] = this.dsUserCombo.getColumn(0, "PARAM");
        	    	    	        
            arrParam2[0] = "COMBO,cmbSHRYEA_BRANCH_CD,dsYEA_BRANCH_CD,0";			
        	this.fnc_GetUserComboSingle(arrParam, arrParam2);
        	
        }
        /*-----------------------------+
         |  전산매체 파일 다운로드 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function() {

        	var sPath    = this.sFILE_PATH;   //파일 경로
            var sLogFile = this.sFILE_NAME;  //파일 논리명
            var sPhyFile = this.sFILE_NAME;  //파일 물리명

        	//File Download 처리
        	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);

        }

        
        this.btnFileCreate_OnClick = function (obj,e) {

        	this.div_Proc.btnFileCreate_OnClick(obj);
        }

        // 파일생성 전처리 메소드
        this.PreCreateFile = function () {
        }

        
        // 파일생성
        this.ComCreateFile = function () {
        }

        
        /*------------------------+
        |  정산년도 변경 이벤트  |
        +------------------------*/
        this.medSHRYEA_STD_YY_OnChanged = function(obj,e) {
        	if ( this.fnc_Trim(this.medSHRYEA_STD_YY.value).substr(0, 4) != this.fnc_Trim(this.div_Proc.url).substr(this.fnc_Length(this.fnc_Trim(this.div_Proc.url)) - 9, 4) ) {
        		if ( this.fnc_Trim(this.medSHRYEA_STD_YY.value).substr(0, 4) < "2016" ) { 
        			this.div_Proc.set_url("yea::YEAA0090_2015.xfdl");
        		} else if ( this.fnc_Trim(this.medSHRYEA_STD_YY.value).substr(0,4) == "2015" ) {
        			this.div_Proc.set_url("yea::YEAA0090_2015.xfdl");			
        		} else if ( this.fnc_Trim(this.medSHRYEA_STD_YY.value).substr(0,4) == "2016" ) {
        			this.div_Proc.set_url("yea::YEAA0090_2016.xfdl");
        		} else if ( this.fnc_Trim(this.medSHRYEA_STD_YY.value).substr(0,4) > "2015" ) {
        			this.div_Proc.set_url("yea::YEAA0090_2016.xfdl");
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btnFileCreate.addEventHandler("onclick", this.btnFileCreate_OnClick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.medSHRYEA_STD_YY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSHRYEA_STD_YY.addEventHandler("onchanged", this.medSHRYEA_STD_YY_OnChanged, this);
            this.calSHRYEA_SEND_YMD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRYEA_BRANCH_CD.addEventHandler("ontextchanged", this.fn_clearData, this);

        };

        this.loadIncludeScript("YEAA0090.xfdl");
        this.loadPreloadList();
       
    };
}
)();
