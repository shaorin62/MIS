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
                this.set_name("PRPA0070");
                this.set_titletext("제작실적집계표(계열/비계열)");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSTAT_FLAG", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STAT_FLAG\">1</Col><Col id=\"STAT_NAME\">원</Col></Row><Row><Col id=\"STAT_FLAG\">1000</Col><Col id=\"STAT_NAME\">천원</Col></Row><Row><Col id=\"STAT_FLAG\">1000000</Col><Col id=\"STAT_NAME\">백만원</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_REPORT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEARMON\" type=\"STRING\" size=\"256\"/><Column id=\"CUTY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUTY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEND_AMTX\" type=\"FLOAT\" size=\"256\"/><Column id=\"SUJU_AMTX\" type=\"FLOAT\" size=\"256\"/><Column id=\"NESU_AMTX\" type=\"FLOAT\" size=\"256\"/><Column id=\"NESU_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_YEARMN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEAR_MONT1\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MONT2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("제작실적집계표(계열/비게열)");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 제작시스템>결산관리>결산관리>제작실적집계표(제작종류별)");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "42", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
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
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_REPORT", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsPD_REPORT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj.set_autofittype("col");
            obj.set_useselcolor("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"72\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"년월\"/><Cell col=\"1\" style=\"background: ;\" text=\"구분\"/><Cell col=\"2\" style=\"background: ;\" text=\"제작내용\"/><Cell col=\"3\" style=\"background: ;\" text=\"건수\"/><Cell col=\"4\" style=\"background: ;\" text=\"견적액\"/><Cell col=\"5\" style=\"background: ;\" text=\"청구액\"/><Cell col=\"6\" style=\"background: ;\" text=\"정산액\"/><Cell col=\"7\" style=\"background: ;\" text=\"내수액\"/><Cell col=\"8\" style=\"background: ;\" text=\"내수율(%)\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:YEARMON\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:CUTY_NAME\" suppress=\"1\"/><Cell col=\"2\" displaytype=\"text\" style=\"background:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:MEDA_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"background:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:CNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:ESTI_AMTX\" mask=\"#,###\" expr=\"expr:nexacro.round(ESTI_AMTX/STAT_FLAG)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:DEND_AMTX\" mask=\"#,###\" expr=\"expr:nexacro.round(DEND_AMTX/STAT_FLAG)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:SUJU_AMTX\" mask=\"#,###\" expr=\"expr:nexacro.round(SUJU_AMTX/STAT_FLAG)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;background:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:NESU_AMTX\" mask=\"#,###\" expr=\"expr:nexacro.round(NESU_AMTX/STAT_FLAG)\"/><Cell col=\"8\" displaytype=\"text\" style=\"background:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(MEDA_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:NESU_RATE\" expr=\"expr:NESU_RATE + ' %'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("calYEAR_MONT1", "absolute", "70", "71", "100", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "175", "71", "14", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Div("calYEAR_MONT2", "absolute", "190", "71", "100", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "755", "71", "65", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("금액 단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTAT_FLAG", "absolute", "828", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("117");
            obj.set_innerdataset("dsSTAT_FLAG");
            obj.set_codecolumn("STAT_FLAG");
            obj.set_datacolumn("STAT_NAME");
            obj.set_cssclass("styFormSearchCombo");
            obj.style.set_cursor("default");
            obj.set_value("0");
            obj.set_text("원");
            obj.set_index("0");

            obj = new Static("imgSearchMEDA_CODE", "absolute", "559", "71", "70", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMEDA_CODE", "absolute", "627", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("134");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static14", "absolute", "318", "71", "37", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_text("구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoCUTY_CODE", "absolute", "361", "71", "172", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoCUTY_CODE_innerdataset = new Dataset("rdoCUTY_CODE_innerdataset", this.rdoCUTY_CODE);
            rdoCUTY_CODE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">TS100010</Col><Col id=\"datacolumn\">계열</Col></Row><Row><Col id=\"codecolumn\">TS100020</Col><Col id=\"datacolumn\">비계열</Col></Row></Rows>");
            obj.set_innerdataset(rdoCUTY_CODE_innerdataset);
            obj.set_taborder("136");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작실적집계표(계열/비계열)");

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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PRPA0070.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PRPA0070.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PRPA0070.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PRPA0070 제작실적집계표 (계열/비계열)
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.28		오세훈		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다. 
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.  ++
         +
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리  
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                         
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************INBUS*CO*KR********/
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"
        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTT"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "PRPA0070";

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
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.calYEAR_MONT1.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        	this.calYEAR_MONT2.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        		
        	this.fn_Search();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();

        }

        this.fn_Search = function()
        {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPD_REPORT");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_REPORT=dsPD_REPORT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	
        	
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        		//기능없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPD_REPORT");
        	this.grdPD_REPORT.setFocus();	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
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
        	if (this.dsPD_REPORT.getRowCount() < 0) return this.fnc_Message("TMM011");
            if (this.dsPD_REPORT.rowposition < 0) return;

            //this.fnc_DatasetClear("dsPD_REPORT");
            
        	var reportfile 	= "/prp/PRPA0070R01.jrf";
            var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/prp/PRPA0070_PRINT00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsPD_REPORT=dsPD_REPORT dsPD_YEARMN=dsPD_YEARMN";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	//기능없음
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

        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if ((this.fnc_DatasetChangeCheck("dsPD_REPORT")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	
        	if(this.fnc_Length(this.calYEAR_MONT1.fn_GetMonth())<1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "년월", this.calYEAR_MONT1.value);
        	}
        	if(this.fnc_Length(this.calYEAR_MONT2.fn_GetMonth())<1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "년월", this.calYEAR_MONT2.value);
        	}
        	
        	
        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveHDRItemCheck = function () {

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {

        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MONT1=" + this.fnc_Quote(this.calYEAR_MONT1.fn_GetMonth()); 	//청구년월
        		sReturnString += " YEAR_MONT2=" + this.fnc_Quote(this.calYEAR_MONT2.fn_GetMonth()); 	//청구년월
        		sReturnString += " CUTY_CODE=" + this.fnc_Quote(this.rdoCUTY_CODE.value); 				//계열구분
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.cmbSHRMEDA_CODE.value); 			//제작내용
        	}else if (sKind == "PRINT00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MONT1=" + this.fnc_Quote(this.calYEAR_MONT1.fn_GetMonth()); 	//청구년월
        		sReturnString += " YEAR_MONT2=" + this.fnc_Quote(this.calYEAR_MONT2.fn_GetMonth()); 	//청구년월
        		sReturnString += " CUTY_CODE=" + this.fnc_Quote(this.rdoCUTY_CODE.value); 				//계열구분
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.cmbSHRMEDA_CODE.value); 			//제작내용
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
        	
        		this.fnc_Information(this.stInformation, this.dsPD_REPORT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        		//업데이트 컨트롤을 변경해야 한다.
        		this.dsPD_REPORT.set_updatecontrol(false);
        		
        			for(var i = 0; i < this.dsPD_REPORT.rowcount; i ++){
        				this.dsPD_REPORT.setColumn(i, "STAT_FLAG", this.cmbSHRSTAT_FLAG.value);
        				var bSucc = this.dsPD_REPORT.setRowType(i, Dataset.ROWTYPE_NORMAL);
        			}
        		this.dsPD_REPORT.set_updatecontrol(true);
        		
        	} else if (sMethodName == "GetCommCode") {
        		// 제작내용 조회용
        		this.fnc_GetComboSearchMEDA_CODE();

        	}
        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head  |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {

        // 	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        // 		this.edtSHRITEM_CODE.set_readonly(false);
        // 	}else{
        // 		this.edtSHRITEM_CODE.set_readonly(true);
        // 	}
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	

        }
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         //조회를 위한 제작내용 콤보박스
        this.fnc_GetComboSearchMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRMEDA_CODE,dsSHRMEDA_CODE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }
        this.rdoCUTY_CODE_onitemchanged = function(obj,e)
        {
        	this.fn_Search();
        }

        this.grdPD_REPORT_oncelldblclick = function(obj,e)
        {
        	if (e.cell == 0){
        		return ;
        	}
        	
        	var sMEDA_CODE = this.dsPD_REPORT.getColumn(e.row, "MEDA_CODE").replace('ZZZZZZ','');
        	var sYEAR_MONT1 = this.calYEAR_MONT1.fn_GetMonth();
        	var sYEAR_MONT2 = this.calYEAR_MONT2.fn_GetMonth();
        	var sCUTY_CODE = this.dsPD_REPORT.getColumn(e.row, "CUTY_CODE");
        	
        	
        	
        	//제작 상세 내역 팝업 생성
        	 var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=710";       //현재 반응 없음
        		sOpenStyle += ",height=505";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("PRPA0010P03", "prp::PRPA0010P03.xfdl", {sMEDA_CODE : sMEDA_CODE, sYEAR_MONT1 : sYEAR_MONT1, sYEAR_MONT2 : sYEAR_MONT2, sCUTY_CODE : sCUTY_CODE}, sOpenStyle, "fn_Dialoge_After");	
        }

        
        this.fn_Dialoge_After = function(sPopupId,Variant){

        	var rtn = this.fnc_GetPopupRtn();
        	
        	if (rtn instanceof Array) {
        	
        		var sJOBN_NUMB = rtn[0];      
        		//alert(sJOBN_NUMB);
        	}
        	
        }

        this.cmbSHRSTAT_FLAG_oncloseup = function(obj,e)
        {
        					//업데이트 컨트롤을 변경해야 한다.
        		this.dsPD_REPORT.set_updatecontrol(false);
        		
        			for(var i = 0; i < this.dsPD_REPORT.rowcount; i ++){
        				this.dsPD_REPORT.setColumn(i, "STAT_FLAG", this.cmbSHRSTAT_FLAG.value);
        				var bSucc = this.dsPD_REPORT.setRowType(i, Dataset.ROWTYPE_NORMAL);
        			}
        		this.dsPD_REPORT.set_updatecontrol(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_REPORT.addEventHandler("oncolumnchanged", this.dsPD_SUJUMH_oncolumnchanged, this);
            this.dsPD_YEARMN.addEventHandler("oncolumnchanged", this.dsPD_SUJUMH_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdPD_REPORT.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPD_REPORT.addEventHandler("oncelldblclick", this.grdPD_REPORT_oncelldblclick, this);
            this.cmbSHRSTAT_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSTAT_FLAG.addEventHandler("oncloseup", this.cmbSHRSTAT_FLAG_oncloseup, this);
            this.imgSearchMEDA_CODE.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRMEDA_CODE.addEventHandler("oncloseup", this.cmbSHRMEDA_CODE_oncloseup, this);
            this.cmbSHRMEDA_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.rdoCUTY_CODE.addEventHandler("onitemchanged", this.rdoCUTY_CODE_onitemchanged, this);

        };

        this.loadIncludeScript("PRPA0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
