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
                this.set_name("HATC0070");
                this.set_titletext("외출자관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_GOOUTX", this);
            obj._setContents("<ColumnInfo><Column id=\"GOOT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GOOT_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTNT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TADU_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GOOS_HOUR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GOOE_HOUR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INIT_USID\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
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
            obj.set_text("외출자관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
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

            obj = new Static("Static30", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
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
            obj.set_text("h 6");
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

            obj = new Grid("grdAT_GOOUTX", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsAT_GOOUTX");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"123\"/><Column size=\"174\"/><Column size=\"93\"/><Column size=\"89\"/><Column size=\"120\"/><Column size=\"72\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"외출자\"/><Cell col=\"2\" text=\"직위\"/><Cell col=\"3\" text=\"직무\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"외출일자\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"행선지\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"업무내용\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"외출시작시간\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"외출종료시간\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/><Cell col=\"10\" text=\"등록자\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:EMPL_NAME\" editdisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;display&quot; : &quot;edit&quot;\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" text=\"bind:OPOS_NAME\"/><Cell col=\"3\" text=\"bind:DUTY_NAME\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;date&quot; : &quot;none&quot;\" text=\"bind:GOOT_DATE\" editdisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;display&quot; : &quot;edit&quot;\" calendardisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;display&quot; : &quot;edit&quot;\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" edittype=\"expr:dataset.getColumn(currow,&quot;INST_USID&quot;) == dataset.getColumn(currow,&quot;INIT_USID&quot;) ? &quot;text&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:DTNT_NAME\" editlimit=\"50\" editdisplay=\"edit\" editlengthunit=\"utf8\"/><Cell col=\"6\" edittype=\"expr:dataset.getColumn(currow,&quot;INST_USID&quot;) == dataset.getColumn(currow,&quot;INIT_USID&quot;) ? &quot;text&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:TADU_CNTT\" editlimit=\"100\" editdisplay=\"edit\" editlengthunit=\"utf8\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"expr:dataset.getColumn(currow,&quot;INST_USID&quot;) == dataset.getColumn(currow,&quot;INIT_USID&quot;) ? &quot;mask&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:GOOS_HOUR\" mask=\"##:##\" editlimit=\"4\" editautoselect=\"false\" editdisplay=\"edit\" editlengthunit=\"utf16\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"expr:dataset.getColumn(currow,&quot;INST_USID&quot;) == dataset.getColumn(currow,&quot;INIT_USID&quot;) ? &quot;mask&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:GOOE_HOUR\" mask=\"##:##\" editlimit=\"4\" editautoselect=\"false\" editdisplay=\"edit\" editlengthunit=\"utf16\"/><Cell col=\"9\" edittype=\"expr:dataset.getColumn(currow,&quot;INST_USID&quot;) == dataset.getColumn(currow,&quot;INIT_USID&quot;) ? &quot;text&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"100\" editdisplay=\"edit\" editlengthunit=\"utf8\"/><Cell col=\"10\" text=\"bind:INST_USNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRGOOT_DATE1", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("112");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "200", "71", "14", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRGOOT_DATE2", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("114");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static03", "absolute", "344", "71", "52", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "386", "71", "80", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "468", "71", "21", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "491", "71", "100", "21", null, null, this);
            obj.set_taborder("118");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "315", "61", "40", "41", null, null, this);
            obj.set_taborder("119");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "620", "71", "52", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "662", "71", "80", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "744", "71", "21", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "767", "71", "100", "21", null, null, this);
            obj.set_taborder("123");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "591", "61", "40", "41", null, null, this);
            obj.set_taborder("124");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("외출자관리");

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
        this.addIncludeScript("HATC0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATC0070.xfdl", function() {
        /****************************************************************************************************
         * # Program: 	 HATC0070 일근태등록
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.26		김희정		Initial Created.
         *   2016.12.27		김용만		
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.										*
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.										*
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리				*
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망	*
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요								*
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "HATC0070";
        this.GBL_KEYROWPOSITION1 = "";
        this.GBL_KEYROWPOSITION2 = "";
        this.GBL_KEYROWPOSITION3 = "";

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

        	var iNowData = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.calSHRGOOT_DATE1.set_value(this.fnc_SubStr(iNowData));
        	this.calSHRGOOT_DATE2.set_value(this.fnc_SubStr(iNowData)); 
        	this.edtSHREMPL_NAME.setFocus();
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
        	this.fnc_DatasetClear("dsAT_GOOUTX");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_GOOUTX=dsAT_GOOUTX";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_GOOUTX.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iNowData = this.fnc_GetServerDateTime("DATE");
        	var iRow = this.dsAT_GOOUTX.addRow();
        	this.dsAT_GOOUTX.setColumn(iRow, "GOOT_DATE", iNowData);
        	this.dsAT_GOOUTX.set_rowposition(iRow);
        	this.grdAT_GOOUTX.setCellPos(this.fnc_GridColumnIndex(this.grdAT_GOOUTX, "EMPL_NAME"));
        	this.grdAT_GOOUTX.setFocus();

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		
        		this.dsAT_GOOUTX.deleteMultiRows(this.grdAT_GOOUTX.getSelectedDatasetRows());
        		this.grdAT_GOOUTX.setFocus();
        	}
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsAT_GOOUTX");
        	this.grdAT_GOOUTX.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.GBL_KEYROWPOSITION1 = this.dsAT_GOOUTX.getColumn(this.dsAT_GOOUTX.rowposition,"GOOT_DATE");
        	this.GBL_KEYROWPOSITION2 = this.dsAT_GOOUTX.getColumn(this.dsAT_GOOUTX.rowposition,"GOOT_SEQN");
        	this.GBL_KEYROWPOSITION3 = this.dsAT_GOOUTX.getColumn(this.dsAT_GOOUTX.rowposition,"EMPL_NUMB");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsAT_GOOUTX=dsAT_GOOUTX:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_GOOUTX.setFocus();

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
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsAT_GOOUTX", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);

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

        	if (this.fnc_DatasetChangeCheck("dsAT_GOOUTX")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRGOOT_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회기간시작", this.calSHRGOOT_DATE1);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRGOOT_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회기간종료", this.calSHRGOOT_DATE2);
        	}
        	
        	if (this.calSHRGOOT_DATE1.value > this.calSHRGOOT_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "조회기간시작,조회기간종료", this.calSHRGOOT_DATE1);
        	}
        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsAT_GOOUTX") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	

        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_GOOUTX.getRowCount(); i++) {
        	
        		this.dsAT_GOOUTX.setColumn(i,"GOOS_HOUR", this.fnc_SubStr(this.dsAT_GOOUTX.getColumn(i, "GOOS_HOUR"),0,4) );
        		this.dsAT_GOOUTX.setColumn(i,"GOOE_HOUR", this.fnc_SubStr(this.dsAT_GOOUTX.getColumn(i, "GOOE_HOUR"),0,4));
        			
        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsAT_GOOUTX.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_GOOUTX.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "외출자", this.dsAT_GOOUTX, i, this.grdAT_GOOUTX, "EMPL_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_GOOUTX.getColumn(i, "GOOT_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "외출일자", this.dsAT_GOOUTX, i, this.grdAT_GOOUTX, "GOOT_DATE");
        		}
        		
        		if (this.fnc_Trim(this.dsAT_GOOUTX.getColumn(i, "GOOS_HOUR")) > this.fnc_Trim(this.dsAT_GOOUTX.getColumn(i, "GOOE_HOUR"))) {
        			
        			return this.fnc_SearchCheckPostAction("TMM042", "외출시작시간,외출종료시간", this.dsAT_GOOUTX, i, this.grdAT_GOOUTX, "GOOE_HOUR");
        		}
        		
        		if ( this.fnc_SubStr(this.fnc_Trim(this.dsAT_GOOUTX.getColumn(i, "GOOS_HOUR")),0,2) > 24 ) {

        			this.fnc_CheckPostAction("TMM119", "외출시작시간", this.dsAT_GOOUTX, i, this.grdAT_GOOUTX, "GOOS_HOUR");
        			
        			return false;
        		}
        		
        		if ( this.fnc_SubStr(this.fnc_Trim(this.dsAT_GOOUTX.getColumn(i, "GOOS_HOUR")),2,4) > 60 ) {

        			this.fnc_CheckPostAction("TMM119", "외출시작시간", this.dsAT_GOOUTX, i, this.grdAT_GOOUTX, "GOOS_HOUR");
        			
        			return false;
        		}
        		
        		if ( this.fnc_SubStr(this.fnc_Trim(this.dsAT_GOOUTX.getColumn(i, "GOOE_HOUR")),0,2) > 24 ) {
        			
        			this.fnc_CheckPostAction("TMM119", "외출종료시간", this.dsAT_GOOUTX, i, this.grdAT_GOOUTX, "GOOE_HOUR");
        			
        			return false;
        		}
        		
        		if ( this.fnc_SubStr(this.fnc_Trim(this.dsAT_GOOUTX.getColumn(i, "GOOE_HOUR")),2,4) > 60 ) {

        			this.fnc_CheckPostAction("TMM119", "외출종료시간", this.dsAT_GOOUTX, i, this.grdAT_GOOUTX, "GOOE_HOUR");
        			
        			return false;
        		}
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {

        	if (this.dsAT_GOOUTX.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdAT_GOOUTX);
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = "외출자 (" + this.fnc_Trim(this.dsAT_GOOUTX.getColumn(this.dsAT_GOOUTX.rowposition, "EMPL_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        		
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " GOOT_DATE1=" + this.fnc_Quote(this.calSHRGOOT_DATE1.value);	//근태기간시작일자
        		sReturnString += " GOOT_DATE2=" + this.fnc_Quote(this.calSHRGOOT_DATE2.value);	//근태기간종료일자
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value);	//부서코드
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.edtSHREMPL_NUMB.value);	//사원번호
        		sReturnString += " INIT_USID=" + this.fnc_Quote(application.GBL_EMPLNO);	//사원번호

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

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

        		this.fnc_Information(this.stInformation, this.dsAT_GOOUTX.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_GOOUTX.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		var row = this.dsAT_GOOUTX.findRowExpr("GOOT_DATE=='"+this.GBL_KEYROWPOSITION1+"' && GOOT_SEQN=='"+this.GBL_KEYROWPOSITION2+"'  && EMPL_NUMB=='"+this.GBL_KEYROWPOSITION3+"' ");
        		
        		if(row > -1) {
        			 this.dsAT_GOOUTX.set_rowposition(row);
        		}else {
        			
        			this.dsAT_GOOUTX.set_rowposition(0);
        		}
        		
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	}
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	// 조회조건 - 부서(popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

        		arrParam[0] = "TMM0004";	//BDM0002
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        		
        	// 조회조건 - 사원정보조회(Popup)
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {

        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if (obj.name == "grdAT_GOOUTX") {

        		if (sColumnID == "EMPL_NAME" || obj.getCellProperty("body", obj.currentcell, "text") == "bind:EMPL_NAME") {
        			
        			arrParam[0] = "HRM0001"; 
        			arrParam[1] = "";	
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdAT_GOOUTX";
        			arrParam[5] = "SECT_CODE,SECT_NAME,EMPL_NUMB,EMPL_NAME,DEPT_CODE,DEPT_NAME,OPOS_CODE,OPOS_NAME,DUTY_CODE,DUTY_NAME";  
        			arrParam[6] = "4,5,0,1,2,3,10,11,14,15";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        this.dsAT_GOOUTX_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "EMPL_NAME") {
        		this.fn_HelpDialoge(this.grdAT_GOOUTX, "YES", e.oldvalue, e.columnid);
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAT_GOOUTX.addEventHandler("oncolumnchanged", this.dsAT_GOOUTX_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdAT_GOOUTX.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HATC0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
