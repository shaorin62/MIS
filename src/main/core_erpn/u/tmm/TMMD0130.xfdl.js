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
                this.set_name("TMMD0130");
                this.set_titletext("메타용어오류검증");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsErrorMeta", this);
            obj._setContents("<ColumnInfo><Column id=\"TABLE_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"TABLE_COMMENTS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COLUMN_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_TYPE\" size=\"106\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_LENGTH1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DATA_LENGTH2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COLM_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTR_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"REF1_FILD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DOMN_LEN1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DOMN_LEN2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchOption", "absolute", "28", "71", "60", "21", null, null, this);
            obj.set_text("Option");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "280", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("13");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_METAXM", "absolute", "8", "128", null, null, "25", "95", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsErrorMeta");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" displaytype=\"text\" text=\"Meta 표준용어\"/><Cell col=\"5\" colspan=\"7\" displaytype=\"text\" text=\"Table 정의 용어\"/><Cell row=\"1\" displaytype=\"text\" text=\"물리명\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" text=\"논리명\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" text=\"TYPE\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"Len1\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"Len2\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"테이블명\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"논리 테이블명\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"물리명\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"논리명\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"TYPE\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"Len1\"/><Cell row=\"1\" col=\"11\" displaytype=\"text\" text=\"Len2\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"align:center;\" text=\"bind:COLM_NAME\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:ATTR_NAME\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:REF1_FILD\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DOMN_LEN1\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DOMN_LEN2\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:TABLE_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;\" text=\"bind:TABLE_COMMENTS\"/><Cell col=\"7\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:COLUMN_NAME\"/><Cell col=\"8\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:COMMENTS\"/><Cell col=\"9\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:DATA_TYPE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DATA_LENGTH1\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DATA_LENGTH2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRREMK_100X", "absolute", "81", "71", "152", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("0");
            obj.set_text("REMK_100X 포함여부");
            obj.set_value("true");
            obj.set_cssclass("styFormSearchChk");
            obj.style.set_buttonalign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Shape3", "absolute", "8", null, null, "65", "25", "15", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOLUMN_NAME", "absolute", "96", null, "171", "21", null, "24", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMMENTS", "absolute", "394", null, "259", "21", null, "24", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDATA_LENGTH1", "absolute", "734", null, "120", "21", null, "24", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_readonly("true");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msdDATA_LENGTH2", "absolute", "937", null, "120", "21", null, "24", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_readonly("true");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTABLE_COMMENTS", "absolute", "394", null, null, "21", "130", "50", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTABLE_NAME", "absolute", "96", null, "171", "21", null, "50", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsErrorMeta");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            obj.set_taborder("28");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stREF5_FILD", "absolute", "682", null, "96", "21", null, "24", this);
            obj.set_text("Len 1");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("stREF6_FILD", "absolute", "883", null, "101", "21", null, "24", this);
            obj.set_text("Len 2");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", null, "96", "21", null, "24", this);
            obj.set_text("물리명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "295", null, "96", "21", null, "24", this);
            obj.set_text("논리명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "28", null, "96", "21", null, "50", this);
            obj.set_text("테이블명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "295", null, "96", "21", null, "50", this);
            obj.set_text("논리 테이블명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("메타용어오류검증");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("31");
            obj.set_text("홈 > 공통관리 > 시스템관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("32");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("39");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("40");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "80", "61", "8", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "233", "61", "40", "41", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "9", "649", "30", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("메타용어오류검증");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtTABLE_COMMENTS_value","edtTABLE_COMMENTS","value","dsErrorMeta","TABLE_COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTABLE_NAME_value","edtTABLE_NAME","value","dsErrorMeta","TABLE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOLUMN_NAME_value","edtCOLUMN_NAME","value","dsErrorMeta","COLUMN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMMENTS_value","edtCOMMENTS","value","dsErrorMeta","COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDATA_LENGTH1_value","mskDATA_LENGTH1","value","dsErrorMeta","DATA_LENGTH1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("msdDATA_LENGTH2_value","msdDATA_LENGTH2","value","dsErrorMeta","DATA_LENGTH2");
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
        this.addIncludeScript("TMMD0130.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMD0130.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMD0130 메타용어 오류 검증
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

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = 'TTFFFFTF'; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = 'TMMD0130'; //해당 Form에서 사용 할 Package 명
        this.sSCRIPT = ''; //Script Source
        	
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined)
        {
        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = '';   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = '';   //Form의 Title 정보
        	this.sFORMLOCATION = '';   //Form의 Location 정보
        	this.sUSERLAVEL    = '';   //Form의 Location 정보
        }else{
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

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
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
        this.fn_Search = function (obj) {

        	this.fnc_DatasetClear('dsErrorMeta');
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsErrorMeta=dsErrorMeta";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음
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
        	// 기능 없음
        }

        /*-----------------------------------+
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
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) {
        	
        		if (application.GBL_SESSONCHK == "E0001") {
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        		
        	} else {
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == 'SEARCH00') {
        			
        		this.fnc_Information(this.stInformation, this.dsErrorMeta.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsErrorMeta.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.fn_CheckBoxChange();
        		
        	}
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*---------------------+
         |  CheckBox 선택 처리  |
         +----------------------*/
        this.fn_CheckBoxChange = function (obj) {

        	if (this.chkSHRREMK_100X.value == "true" || this.chkSHRREMK_100X.value == "1") {
        		this.dsErrorMeta.filter("");
        	} else {
        		this.dsErrorMeta.filter("COLUMN_NAME !== 'REMK_100X'");
        	}

        	this.fnc_Information(this.stInformation, this.dsErrorMeta.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.chkSHRREMK_100X.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMD0130.xfdl");
        this.loadPreloadList();
       
    };
}
)();
