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
                this.set_name("PAYB0030");
                this.set_titletext("지급공제등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_ALDEYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_RAPY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PADN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PDGB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("11");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_ALDEYN", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_ALDEYN");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\"/><Column size=\"84\"/><Column size=\"89\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"122\"/><Column size=\"101\"/><Column size=\"195\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"사원번호\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"3\" text=\"소속\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"시작일\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"종료일\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급공제명\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"금액\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:EMPL_NAME\" editlimit=\"20\" editimemode=\"hangul\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:OPOS_NAME\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:BGIN_DATE\" editlimit=\"0\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" text=\"bind:ENDX_DATE\" editlimit=\"0\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:EXPD_NAME\" editlimit=\"50\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right middle;\" text=\"bind:EXPD_RAPY\" editlimit=\"10\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "529", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_cssclass("styFormSearchItem");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "611", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "634", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "245", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFormDown", "absolute", "0", "0", "98", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnFormUp", "absolute", "101", "0", "86", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "762", "71", "112", "21", null, null, this);
            obj.set_text("지급공제코드");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "487", "71", "57", "21", null, null, this);
            obj.set_text("사원");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle8", "absolute", "211", "71", "57", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "253", "71", "80", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "335", "71", "22", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "358", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_autoskip("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_DATE", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "71", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("기준일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXPD_CODE", "absolute", "855", "71", "80", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXPD_NAME", "absolute", "960", "71", "140", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_autoskip("true");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREXPD_CODE", "absolute", "937", "71", "22", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("지급공제등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("23");
            obj.set_text("홈 > 급여관리 > 급여관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("32");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("35");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "183", "61", "40", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 245, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("지급공제등록");
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
        this.addIncludeScript("PAYB0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0030 급여등록
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.18		고민주		Initial Created.
         *   2016.10.11		안윤준		수정.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF";
        this.sPACKAGENAME = "PAYB0030";

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
        	this.calSHRSTDS_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.edtSHREXPD_NAME.setFocus();

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
        	this.fnc_DatasetClear("dsPY_ALDEYN");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_ALDEYN=dsPY_ALDEYN";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPY_ALDEYN.insertRow(this.dsPY_ALDEYN.rowposition+1);
        	this.dsPY_ALDEYN.setColumn(iRow, "BGIN_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));	//시작일
        	this.dsPY_ALDEYN.setColumn(iRow, "PADN_YSNO", "0"); 												// 지급공제여부
        	this.dsPY_ALDEYN.setColumn(iRow, "EXPD_RAPY", 0);
        	this.fnc_GridSetCellFocus(this.grdPY_ALDEYN, "EMPL_NAME");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) {
        		for (var i = this.dsPY_ALDEYN.getRowCount() - 1 ; i >= 0 ; i-- ){
        			if(this.dsPY_ALDEYN.getColumn(i,"CHK") == "1"){
        				this.dsPY_ALDEYN.deleteRow(i);
        			}
        		}
        		this.grdPY_ALDEYN.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_ALDEYN");
        	this.grdPY_ALDEYN.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_ALDEYN=dsPY_ALDEYN:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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
        	
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_ALDEYN", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_ALDEYN")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일", this.calSHRSTDS_DATE);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsPY_ALDEYN.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.dsPY_ALDEYN.getCaseCount("CHK == '1'");
        	
        	var sQuestionText  = "성명:" + this.fnc_Trim(this.dsPY_ALDEYN.getColumn(this.dsPY_ALDEYN.rowposition, "EMPL_NAME"))
        		sQuestionText += ", 지급공제명:" + this.fnc_Trim(this.dsPY_ALDEYN.getColumn(this.dsPY_ALDEYN.rowposition, "EXPD_NAME"));
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		return this.fnc_Message("TMM002", sQuestionText);
        	}

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_ALDEYN")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsPY_ALDEYN.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_ALDEYN.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALDEYN.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsPY_ALDEYN, i, this.grdPY_ALDEYN, "EMPL_NUMB");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALDEYN.getColumn(i, "BGIN_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시작일", this.dsPY_ALDEYN, i, this.grdPY_ALDEYN, "BGIN_DATE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALDEYN.getColumn(i, "ENDX_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "종료일", this.dsPY_ALDEYN, i, this.grdPY_ALDEYN, "ENDX_DATE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_ALDEYN.getColumn(i, "EXPD_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "지급공제명", this.dsPY_ALDEYN, i, this.grdPY_ALDEYN, "EXPD_NAME");
        		}

        		if(this.dsPY_ALDEYN.getColumn(i,"BGIN_DATE") > this.dsPY_ALDEYN.getColumn(i,"ENDX_DATE")){
                    this.fnc_Message("TMM028", "시작일","종료일");
                    return false;
        		}

        	}

        	return true;

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE.value));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
        		sReturnString += " EXPD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREXPD_CODE.value));

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

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

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsPY_ALDEYN.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_ALDEYN.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdPY_ALDEYN.setFocus();

        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_ALDEYN);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "SAVE01") {
        		this.fn_KeyFieldDisible(this.dsPY_ALDEYN);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdPY_ALDEYN.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_ALDEYN, "EMPL_NAME"), "edittype", "text");
        		this.grdPY_ALDEYN.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_ALDEYN, "EXPD_NAME"), "edittype", "text");
        		this.grdPY_ALDEYN.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_ALDEYN, "BGIN_DATE"), "edittype", "date");
        		
        	} else {
        		this.grdPY_ALDEYN.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_ALDEYN, "EMPL_NAME"), "edittype", "none");
        		this.grdPY_ALDEYN.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_ALDEYN, "EXPD_NAME"), "edittype", "none");
        		this.grdPY_ALDEYN.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_ALDEYN, "BGIN_DATE"), "edittype", "none");
        	}

        }
        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 조회조건 - 부서정보조회(Popup)
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";

        	
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 사원정보조회(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpSHREXPD_CODE") || (obj.name == "edtSHREXPD_NAME")) { // 급여일지 조회 팝업
        		arrParam[0] = "PAY0012";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREXPD_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREXPD_NAME";
        		arrParam[5] = "edtSHREXPD_CODE,edtSHREXPD_NAME";
        		arrParam[6] = "0,1";

        	
        	} else if (obj.name == "grdPY_ALDEYN") { // 조회조건 - 사원정보조회(Popup)
        		if (sColumnID == "EMPL_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME" ) {
        			arrParam[0] = "HRM0001";
        			arrParam[1] = this.edtSHRDEPT_CODE.value + "%";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_ALDEYN";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,SECT_CODE,SECT_NAME,DEPT_CODE,DEPT_NAME,OPOS_CODE,OPOS_NAME";
        			arrParam[6] = "0,1,4,5,2,3,10,11";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		} else if (sColumnID == "EXPD_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EXPD_NAME") { // 급여일지 조회 팝업
        			arrParam[0] = "PAY0012";
        			arrParam[1] = "1,,1"; //1:사용중, 0:미사용, "":전체//A:지급항목, D:공제, "":전체//1:지급공제관리, 0:지급공제미관리, "":전체
        			arrParam[2] = "EXPD_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_ALDEYN";
        			arrParam[5] = "EXPD_CODE,EXPD_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        		}
        	}

        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*--------------------------+
         |  DATASET COLUMN 변경 시  |
         +--------------------------*/
        this.dsPY_ALDEYN_OnColumnChanged = function(obj,e) {
        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdPY_ALDEYN, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "EXPD_NAME") this.fn_HelpDialoge(this.grdPY_ALDEYN, "YES" ,e.oldvalue, e.columnid);
        	
        }

        
        /*-----------------------------+
         |  양식파일 다운로드 클릭 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);

        }

        /*--------------------------+
         |  양식파일 업로드 클릭 時  |
         +---------------------------*/
        this.fn_ExcelUpload = function (obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsPY_ALDEYN")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsPY_ALDEYN");
        	this.fnc_ExcelUpload("dsPY_ALDEYN", "Sheet1", "A2", "fn_ExcelSuccess");

        }

        
        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	
        	this.dsPY_ALDEYN.set_enableevent(false);
        	this.dsPY_ALDEYN.set_updatecontrol(false);
        	
        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	
        	for (var i = 0; i < this.objDsImportTemp.getRowCount(); i++) {
        	
        		var iRow = this.dsPY_ALDEYN.addRow();
        		
        		this.dsPY_ALDEYN.setRowType(i, Dataset.ROWTYPE_INSERT);	
        		
        		this.dsPY_ALDEYN.setColumn(iRow, "EMPL_NUMB", this.objDsImportTemp.getColumn(i,0));
        		this.dsPY_ALDEYN.setColumn(iRow, "EMPL_NAME", this.objDsImportTemp.getColumn(i,1));
        		this.dsPY_ALDEYN.setColumn(iRow, "BGIN_DATE", this.objDsImportTemp.getColumn(i,2));
        		this.dsPY_ALDEYN.setColumn(iRow, "ENDX_DATE", this.objDsImportTemp.getColumn(i,3));
        		this.dsPY_ALDEYN.setColumn(iRow, "EXPD_CODE", this.objDsImportTemp.getColumn(i,4));
        		this.dsPY_ALDEYN.setColumn(iRow, "EXPD_NAME", this.objDsImportTemp.getColumn(i,5));
        		this.dsPY_ALDEYN.setColumn(iRow, "EXPD_RAPY", this.objDsImportTemp.getColumn(i,6));
        		this.dsPY_ALDEYN.setColumn(iRow, "REMK_100X", this.objDsImportTemp.getColumn(i,7));
        		
        	}
        	this.objDsImportTemp.clear();
        	
        	this.dsPY_ALDEYN.set_updatecontrol(true);
        	this.dsPY_ALDEYN.set_enableevent(true);
        	
        	this.dsPY_ALDEYN.set_rowposition(0);
        	this.grdPY_ALDEYN.setFocus();
        	
        }

        this.grdPY_ALDEYN_onheadclick = function(obj,e){
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_ALDEYN.addEventHandler("oncolumnchanged", this.dsPY_ALDEYN_OnColumnChanged, this);
            this.dsPY_ALDEYN.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdPY_ALDEYN.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPY_ALDEYN.addEventHandler("onheadclick", this.grdPY_ALDEYN_onheadclick, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.divButtonList.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREXPD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREXPD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREXPD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREXPD_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYB0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
