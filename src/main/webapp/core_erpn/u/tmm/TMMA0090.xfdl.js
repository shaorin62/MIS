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
                this.set_name("TMMA0090");
                this.set_titletext("휴일관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_CALDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CALN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WDAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOGB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LUNA_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WDAY_CODE</Col><Col id=\"DSNAME\">dsWDAY_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">HOGB_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsHOGB_CODE</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_CALDXD", this);
            obj._setContents("<ColumnInfo><Column id=\"CALN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WDAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOGB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LUNA_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_CALDHO", this);
            obj._setContents("<ColumnInfo><Column id=\"CALN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WDAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOGB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LUNA_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divButtonList", "absolute", "8", "35", "189", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            this.addChild(obj.name, obj);
            obj = new Button("btnHolidayProc", "absolute", "0", "0", "74", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("휴일처리");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "117", "200", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_CALDXM", "absolute", "8", "138", "370", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("9");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsTM_CALDXM");
            obj.set_readonly("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"45\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"요일\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"휴일구분\"/><Cell col=\"3\" text=\"음력일\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:CALN_DATE\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:WDAY_CODE\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:HOGB_CODE\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:LUNA_DATE\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle6", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_text("조회년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSTDS_YEAR", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_imemode("none");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Div("divCALN_MAST", "absolute", "398", "169", null, null, "25", "15", this);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styCalendarDiv");
            obj.set_url("common::comCalendarDiv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divCALN_MAST00", "absolute", "398", "138", null, "31", "25", null, this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_url("common::comCalendarHead.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stSTDS_YMTH", "absolute", "398", "110", null, "25", "25", null, this);
            obj.set_taborder("23");
            obj.set_text("****년 **월");
            obj.set_cssclass("styCalendarTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("휴일관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("25");
            obj.set_text("홈 > 공통관리 > 공통관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("26");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("35");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "35", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("37");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "378", "240", "20", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 189, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");
            		p.set_cssclass("styFormButtonList");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("휴일관리");
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
            this._addPreloadList("fdl", "common::comCalendarDiv.xfdl");
            this._addPreloadList("fdl", "common::comCalendarHead.xfdl");
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TMMA0090.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0090.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0090 휴일 관리
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
         *  화면 변수 선언부  
         *********************/
        this.sBUTTONLIST = "TTFFTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMA0090"; //해당 Form에서 사용 할 Package 명
        	
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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.edtSHRSTDS_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4));
        	this.fn_Search();
        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	
        	this.close();

        }

        /*-------------------------+
         |  03.조회 버튼 클릭 時 |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_searchItemCheck()) return;
        	
        	// 조회 전 처리
        	this.fnc_DatasetClear("dsTM_CALDXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_CALDXM=dsTM_CALDXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CALDXM.setFocus(); 
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {
        	
        	//기능없음

        }
        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	//기능없음
        	
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_CALDXM");
        	this.grdTM_CALDXD.setFocus();

        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_CALDXM=dsTM_CALDXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時 |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*---------------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_CALDXM",this);
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	
        	this.fnc_FormUnload(obj,e);

        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) { 

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);
        	
        }

        /*****************************************************************************************************
         *                                      공통 Function 처리 부분                                     *
         *****************************************************************************************************/
        /*---------------------+
         |  조회 필수 체크!  |
         +---------------------*/
        this.fn_searchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_CALDXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;
        }

        /*--------------------+
         |  삭제 여부 체크! |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	//기능없음
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_CALDXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var curdate = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8);
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_CALDXM.getRowCount(); i++) {
        		
        		if (this.fnc_ToUpper(this.dsTM_CALDXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.dsTM_CALDXM.getColumn(i, "CALN_DATE") < curdate) {
        			return this.fnc_CheckPostAction("TMM101","", this.dsTM_CALDXM, i, this.grdTM_CALDXM, "HOGB_CODE");
        		}
        	}	
        	
        	return true;
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 									//Pacaage(Action Bean명)
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 											//호출할 Package의 Method명
        		sReturnString += " STDS_YEAR=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRSTDS_YEAR.value)); //조회년도

        	// 저장 Argument 생성
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" 	+ this.fnc_Quote(this.fnc_SubStr(this.dsTM_CALDXM.getColumn(this.dsTM_CALDXM.rowposition, "CALN_DATE"), 0, 6)); //공통코드
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	
        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " STDS_YEAR=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRSTDS_YEAR.value)); //조회년도
        	}

        	return sReturnString;
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		
        		this.fnc_Information(this.stInformation, this.dsTM_CALDXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_CALDXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "SEARCH01") {
        	
        		var sCALN_DATE = this.dsTM_CALDXM.getColumn(this.dsTM_CALDXM.rowposition, "CALN_DATE");
        		
        		var sSTDS_YMTH = this.fnc_SubStr(sCALN_DATE, 0, 4) + '년 ' + this.fnc_SubStr(sCALN_DATE, 4, 2) + '월';
        		
        		this.stSTDS_YMTH.set_text(sSTDS_YMTH);
        		
        		this.fn_makeCal();
        		
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_searchCaldata();
        		
        	} else if (sMethodName == "PROC00") {
        		
        		//생성완료 메세지
        		this.fnc_Message("TMM103");
        	
        	// 공통콤보 바인딩	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdTM_CALDXM,dsWDAY_CODE,WDAY_CODE";
        		arrParam[1] = "GRID,grdTM_CALDXM,dsHOGB_CODE,HOGB_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}
        	
        }

        /*-----------------------------+
         |  헤더 선택시 상세 내용 검색  |
         +------------------------------*/
        this.dsTM_CALDXM_onrowposchanged = function(obj,e) {

        	//년월이 변경되면 한달치 달력 검색:canrow에 걸면 같은달의 다른 날짜로 이동을 못한다.
        	//최초 조회시엔 oldrow가 음수라서 getColum 시 에러가 발생하니 e.oldrow >= 0 && 조건을 왼쪽에 둔다.
        	if ( (e.oldrow >= 0) && (this.fnc_SubStr(obj.getColumn(e.oldrow,"CALN_DATE"), 0, 6) == this.fnc_SubStr(obj.getColumn(e.newrow,"CALN_DATE"), 0, 6))) {
        		return ;
        	}

        	this.fn_searchCaldata();
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	//기능없음
        }
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        /*-----------------------------+
         |  한달 단위로 달력내용 검색  |
         +------------------------------*/
        this.fn_searchCaldata = function() {

        	this.fnc_DatasetClear("dsTM_CALDXD,dsTM_CALDHO"); 
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTM_CALDXD=dsTM_CALDXD dsTM_CALDHO=dsTM_CALDHO";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        
        /*-----------------------------+
         |  달력생성  |
         +------------------------------*/
        this.fn_makeCal = function() {

        	//달력초기화방식, 날짜div를 모두 visible false로 하고, 
        	//여백날짜는 내용물을 모두 visible false로 하고,
        	//실제 날짜는 사용하지 않는 것까지 초기화 하는 방식으로 한다.

        	//달력초기화(내용물은 초기화 안되어 있음)
        	//divDateXX  XX=00~41
        	var dateindex = "";
        	for (var i = 0; i < 42; i++) {
        		if (i < 10) {
        			dateindex = "0" + "" + i;
        		} else {
        			dateindex = "" + i;
        		}
        		
        		this.divCALN_MAST.components["divDate" + dateindex].set_visible(false);
        	}
        //return;
        	//해당 월 1일의 요일로 달력의 시작위치까지 공백처리
        	//1일이 화요일이면 일,월 2칸을 공백처리함
        	var startDay = this.dsTM_CALDXD.getColumn(0, "WDAY_CODE") - 1;
        	var dateindex = "";
        	for (var i = 0; i < startDay; i++) {
        		if (i < 10) {
        			dateindex = "0" + "" + i;
        		} else {
        			dateindex = "" + i;
        		}
        		
        		var objDivDate = this.divCALN_MAST.components["divDate" + dateindex];
        		objDivDate.set_visible(true);
        		objDivDate.CALN_DATE.set_visible(false);
        		objDivDate.HOGB_NAME0.set_visible(false);
        		objDivDate.HOGB_NAME1.set_visible(false);
        		objDivDate.HOGB_NAME2.set_visible(false);
        		objDivDate.HOGB_NAME3.set_visible(false);
        	}

        	//공백처리후 1일부터 말일까지 달력에 표시
        	var dateindex = "";
        	
        	for (var i = 0; i < this.dsTM_CALDXD.rowcount; i++) {
        	
        		if ((i + startDay) < 10) {
        			dateindex = "0" + "" + (i + startDay);
        		} else {
        			dateindex = "" + (i + startDay);
        		}
        		var objDivDate = this.divCALN_MAST.components["divDate" + dateindex];
        	
        		//일자 등록
        		var sCALN_DATE = this.fnc_SubStr(this.dsTM_CALDXD.getColumn(i,"CALN_DATE"), 6, 2);
        		objDivDate.set_visible(true);
        		objDivDate.CALN_DATE.set_visible(true);
        		objDivDate.CALN_DATE.set_text(sCALN_DATE);

        		//휴일명 초기화
        		objDivDate.HOGB_NAME0.set_visible(false);
        		objDivDate.HOGB_NAME1.set_visible(false);
        		objDivDate.HOGB_NAME2.set_visible(false);
        		objDivDate.HOGB_NAME3.set_visible(false);
        		
        		var bHDAY_YSNO = false;//해당일이 일요일이 아닌 날에 휴일일때 표시하기 위함
        		//해당 일의 휴일명 지정
        		var sHOGBindex = 0;
        		for (var j = 0; j < this.dsTM_CALDHO.rowcount; j++) {
        			if (sCALN_DATE == this.fnc_SubStr(this.dsTM_CALDHO.getColumn( j, "CALN_DATE"), 6, 2)) {

        				var sHOGB_NAME = this.dsTM_CALDHO.getColumn( j , "HOGB_NAME" );
        				
        				var objHOGB_NAMEX = objDivDate.components["HOGB_NAME" + sHOGBindex];
        				
        				objHOGB_NAMEX.set_visible(true);
        				objHOGB_NAMEX.set_text(sHOGB_NAME);
        				
        				sHOGBindex++;
        				
        				bHDAY_YSNO = true;
        				
        				if (sHOGBindex > 3) break;//휴일명 4개 초과 예외처리
        			}
        		}

        		var sWDAY_CODE = this.dsTM_CALDXD.getColumn( i , "WDAY_CODE" );
        		
        		if (sWDAY_CODE == "1" || bHDAY_YSNO == true) { // 요일별 일자 색상
        			objDivDate.CALN_DATE.set_style("color:red;");
        		} else if (sWDAY_CODE == "7") {
        			objDivDate.CALN_DATE.set_style("color:blue;");
        		} else {
        			objDivDate.CALN_DATE.set_style("color:black;");
        		}
        		
        	}	
        	
        	//말일후 42번째 칸 까지 공백처리
        	var dateindex = "";
        	for (var i = startDay + this.dsTM_CALDXD.rowcount; i < 42; i++) {
        		if (i < 10) {
        			dateindex = "0" + "" + i;
        		} else {
        			dateindex = "" + i;
        		}
        		var objDivDate = this.divCALN_MAST.components["divDate" + dateindex];
        		objDivDate.set_visible(true);
        		objDivDate.CALN_DATE.set_visible(false);
        		objDivDate.HOGB_NAME0.set_visible(false);
        		objDivDate.HOGB_NAME1.set_visible(false);
        		objDivDate.HOGB_NAME2.set_visible(false);
        		objDivDate.HOGB_NAME3.set_visible(false);
        	}
        	
        	
        }

        /*-----------------------------+
         |  휴일처리 버튼 클릭시 해당 연도 삭제후 생성  |
         +------------------------------*/
        this.divButtonList_btnHolidayProc_onclick = function(obj,e) {

        	if (!this.fn_searchItemCheck()) return;
        	
        	//휴일처리하시겠습니까?
        	if (this.fnc_Message("TMM057",this.edtSHRSTDS_YEAR.value) == false) return ;
        	
        	// 조회 전 처리
        	this.fnc_DatasetClear("dsTM_CALDXM");

        	var sMethodName = "PROC00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_CALDXM=dsTM_CALDXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CALDXM.setFocus(); 	
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_CALDXM.addEventHandler("onrowposchanged", this.dsTM_CALDXM_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btnHolidayProc.addEventHandler("onclick", this.divButtonList_btnHolidayProc_onclick, this);
            this.imgSearchTitle6.addEventHandler("onclick", this.imgSearchTitle6_onclick, this);
            this.edtSHRSTDS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSTDS_YEAR.addEventHandler("oneditclick", this.edtSHRFIRM_NAME_oneditclick, this);
            this.stSTDS_YMTH.addEventHandler("onclick", this.imgSearchTitle6_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMA0090.xfdl");
        this.loadPreloadList();
       
    };
}
)();
