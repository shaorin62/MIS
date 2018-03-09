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
                this.set_name("PRPA0060");
                this.set_titletext("제작실적집계표(제작종류별)");
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
            obj._setContents("<ColumnInfo><Column id=\"YEARMON\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_AMTX\" type=\"FLOAT\" size=\"256\"/><Column id=\"SUJU_AMTX\" type=\"FLOAT\" size=\"256\"/><Column id=\"NESU_AMTX\" type=\"FLOAT\" size=\"256\"/><Column id=\"NESU_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRCLAS_CODE</Col><Col id=\"CODEID\">CLAS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_YEARMN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEAR_MONT1\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MONT2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "67", "25", null, this);
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
            obj.set_text("제작실적집계표(제작종류별)");
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

            obj = new Static("stInformation", "absolute", "8", "139", "262", "21", null, null, this);
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

            obj = new Static("Static00", "absolute", "573", "135", "80", "25", null, null, this);
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

            obj = new Grid("grdPD_REPORT", "absolute", "8", "160", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsPD_REPORT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj.set_autofittype("col");
            obj.set_useselcolor("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"제작종류\"/><Cell col=\"1\" style=\"background: ;\" text=\"제작번호\"/><Cell col=\"2\" style=\"background: ;\" text=\"제작명\"/><Cell col=\"3\" style=\"background: ;\" text=\"청구액\"/><Cell col=\"4\" style=\"background: ;\" text=\"정산액\"/><Cell col=\"5\" style=\"background: ;\" text=\"내수액\"/><Cell col=\"6\" style=\"background: ;\" text=\"내수율(%)\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:HIGH_NAME\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"background:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:JOBN_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"background:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:JOBN_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:DEND_AMTX\" expr=\"expr:nexacro.round(DEND_AMTX/STAT_FLAG)\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:SUJU_AMTX\" expr=\"expr:nexacro.round(SUJU_AMTX/STAT_FLAG)\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:NESU_AMTX\" expr=\"expr:nexacro.round(NESU_AMTX/STAT_FLAG)\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"background:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');background2:EXPR(JOBN_NAME == '소계' ? '#e8fedc':'white');\" text=\"bind:NESU_RATE\" expr=\"expr:NESU_RATE + ' %'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("calYEAR_MONT1", "absolute", "86", "71", "108", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "196", "71", "14", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Div("calYEAR_MONT2", "absolute", "206", "71", "108", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "670", "95", "65", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("금액 단위");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTAT_FLAG", "absolute", "742", "95", "80", "21", null, null, this);
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

            obj = new Static("imgSearchHIGH_LEVL", "absolute", "333", "95", "62", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_text("제작종류");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRHIGH_LEVL", "absolute", "407", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("126");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static14", "absolute", "670", "71", "52", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("제작명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NAME", "absolute", "742", "71", "166", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "333", "71", "67", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "407", "71", "80", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "489", "71", "21", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "512", "71", "140", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMEDA_CODE", "absolute", "213", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("135");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchMEDA_CODE", "absolute", "141", "95", "78", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoCODE_TIME", "absolute", "28", "95", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoCODE_TIME_innerdataset = new Dataset("rdoCODE_TIME_innerdataset", this.rdoCODE_TIME);
            rdoCODE_TIME_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신규</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(rdoCODE_TIME_innerdataset);
            obj.set_taborder("137");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작실적집계표(제작종류별)");

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
        this.addIncludeScript("PRPA0060.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PRPA0060.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PRPA0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PRPA0060 제작실적집계표 (제작 종류별 분류)
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.27		오세훈		Initial Created.
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
        this.sPACKAGENAME = "PRPA0060";

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
            
        	var reportfile 	= "/prp/PRPA0060R01.jrf";
            var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/prp/PRPA0060_PRINT00.do";
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
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.cmbSHRMEDA_CODE.value); 			//제작내용
        		sReturnString += " HIGH_LEVL=" + this.fnc_Quote(this.cmbSHRHIGH_LEVL.value); 			//제작종류
        		sReturnString += " JOBN_NAME=" + this.fnc_Quote(this.edtSHRJOBN_NAME.value); 			//제작명
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value); //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //광고주명

        	}else if (sKind == "PRINT00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MONT1=" + this.fnc_Quote(this.calYEAR_MONT1.fn_GetMonth()); 	//청구년월
        		sReturnString += " YEAR_MONT2=" + this.fnc_Quote(this.calYEAR_MONT2.fn_GetMonth()); 	//청구년월
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.cmbSHRMEDA_CODE.value); 			//제작내용
        		sReturnString += " HIGH_LEVL=" + this.fnc_Quote(this.cmbSHRHIGH_LEVL.value); 			//제작종류
        		sReturnString += " JOBN_NAME=" + this.fnc_Quote(this.edtSHRJOBN_NAME.value); 			//제작명
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value); //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //광고주명

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
        		this.fnc_GetComboSearchHIGH_LEVL();
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRMEDA_CODE,dsSHRCLAS_CODE,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		
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

        //컬럼에 이벤트가 발생한경우
        this.getEditMode = function(row,column) {
        	trace("row=" + row + ", column=" + column);
        	
        	if(this.dsPD_REPORT.getColumn(row , "JOBN_NUMB") == "총계" ){
        		return "red"; 
        	}else{
        		return "white";
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

        this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRCUST_NAME') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'PDM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        //제작내용 콤보 선택시 제작 종류 선택
        this.cmbSHRMEDA_CODE_oncloseup = function(obj,e)
        {
        	this.fnc_GetComboSearchHIGH_LEVL();
        }

        
        //조회를 위한 제작종류
        this.fnc_GetComboSearchHIGH_LEVL = function()
        {
        		//제작내용 선택에 따른 대분류 선택
        		var SHRCLAS_TYPE = this.cmbSHRMEDA_CODE.value

        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRHIGH_LEVL"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = SHRCLAS_TYPE	   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRHIGH_LEVL,dsSHRHIGH_LEVL,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        
        //조회를 위한 제작종류
        this.fnc_GetComboSearchHIGH_LEVL = function()
        {
        		//제작내용 선택에 따른 대분류 선택
        		var SHRCLAS_TYPE = this.cmbSHRMEDA_CODE.value
        		
        		//신코드 또는 구코드 포함 여부
        		if(this.rdoCODE_TIME.index == "0"){
        			var sCOMBO_ID = "PCM0001";
        		}else{
        			var sCOMBO_ID = "PCM0002";
        		}

        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRHIGH_LEVL"; 			   //받을 Dataset명
        			arrParam1[1] = sCOMBO_ID; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = SHRCLAS_TYPE	   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRHIGH_LEVL,dsSHRHIGH_LEVL,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        this.rdoCODE_TIME_onitemchanged = function(obj,e)
        {
        		this.fnc_GetComboSearchHIGH_LEVL();
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
            this.cmbSHRSTAT_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSTAT_FLAG.addEventHandler("oncloseup", this.cmbSHRSTAT_FLAG_oncloseup, this);
            this.imgSearchHIGH_LEVL.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRHIGH_LEVL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static14.addEventHandler("onclick", this.Static14_onclick, this);
            this.edtSHRJOBN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeJOBN_NUMB, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.cmbSHRMEDA_CODE.addEventHandler("oncloseup", this.cmbSHRMEDA_CODE_oncloseup, this);
            this.cmbSHRMEDA_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSearchMEDA_CODE.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.rdoCODE_TIME.addEventHandler("onitemchanged", this.rdoCODE_TIME_onitemchanged, this);

        };

        this.loadIncludeScript("PRPA0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
