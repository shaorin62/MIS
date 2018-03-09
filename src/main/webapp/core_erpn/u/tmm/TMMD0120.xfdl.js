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
                this.set_name("TMMD0120");
                this.set_titletext("테이블구조관리");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsObjectList", this);
            obj._setContents("<ColumnInfo><Column id=\"OBJECT_NAME\" size=\"128\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"OBJECT_TYPE\" size=\"19\" prop=\"default\" type=\"STRING\"/><Column id=\"TEMPORARY\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTableIndexList", this);
            obj._setContents("<ColumnInfo><Column id=\"INDEX_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"INDEX_TYPE\" size=\"27\" prop=\"default\" type=\"STRING\"/><Column id=\"UNIQUENESS\" size=\"9\" prop=\"default\" type=\"STRING\"/><Column id=\"COMPRESSION\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"STATUS\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"COLUMN_NAME\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"DESCEND\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COLUMN_POSITION\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTableColumnList", this);
            obj._setContents("<ColumnInfo><Column id=\"TABLE_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"COLUMN_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"COMMENTS\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_TYPE\" size=\"106\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_LENGTH\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DATA_PRECISION\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DATA_SCALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NULLABLE\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSCRIPT", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SCRIPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new TextArea("txtSCRIPT", "absolute", "348", "154", null, null, "25", "15", this);
            obj.set_lengthunit("ascii");
            obj.set_readonly("true");
            obj.set_taborder("14");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "140", "21", null, null, this);
            obj.set_text("Select Object Type");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "224", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("13");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_METAXM", "absolute", "8", "154", "320", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsObjectList");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("8");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"Object Name\"/><Cell col=\"1\" displaytype=\"text\" text=\"Comments\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:OBJECT_NAME\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:COMMENTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid0", "absolute", "348", "154", null, null, "25", "213", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTableColumnList");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("9");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"249\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"40\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"Column Name\"/><Cell col=\"1\" displaytype=\"text\" text=\"Comments\"/><Cell col=\"2\" displaytype=\"text\" text=\"Data Type\"/><Cell col=\"3\" displaytype=\"text\" text=\"Length\"/><Cell col=\"4\" displaytype=\"text\" text=\"Precision\"/><Cell col=\"5\" displaytype=\"text\" text=\"Scale\"/><Cell col=\"6\" displaytype=\"text\" text=\"Null\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:COLUMN_NAME\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:COMMENTS\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:DATA_TYPE\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DATA_LENGTH\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DATA_PRECISION\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:left;\" text=\"bind:DATA_SCALE\"/><Cell col=\"6\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:NULLABLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid1", "absolute", "348", null, null, "183", "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTableIndexList");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("10");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"103\"/><Column size=\"101\"/><Column size=\"100\"/><Column size=\"114\"/><Column size=\"115\"/><Column size=\"171\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"Index Name\"/><Cell col=\"1\" displaytype=\"text\" text=\"Type\"/><Cell col=\"2\" displaytype=\"text\" text=\"Uniqueness\"/><Cell col=\"3\" displaytype=\"text\" text=\"Compression\"/><Cell col=\"4\" displaytype=\"text\" text=\"Column Name\"/><Cell col=\"5\" displaytype=\"text\" text=\"Comments\"/><Cell col=\"6\" displaytype=\"text\" text=\"Descend\"/><Cell col=\"7\" displaytype=\"text\" text=\"Seq\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:INDEX_NAME\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:INDEX_TYPE\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:UNIQUENESS\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:COMPRESSION\" suppress=\"4\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:COLUMN_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:COMMENTS\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;\" text=\"bind:DESCEND\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COLUMN_POSITION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRTABLE", "absolute", "175", "71", "59", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("0");
            obj.set_text("Table");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.style.set_buttonalign("right");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRVIEW", "absolute", "256", "71", "53", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("1");
            obj.set_text("View");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.style.set_buttonalign("right");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRPROCEDURE", "absolute", "584", "71", "84", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("4");
            obj.set_text("Procedure");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.style.set_buttonalign("right");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRPACKAGE", "absolute", "431", "71", "120", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("3");
            obj.set_text("Package & Body");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.style.set_buttonalign("right");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRTYPE", "absolute", "698", "71", "56", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("5");
            obj.set_text("Type");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.style.set_buttonalign("right");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRFUNCTION", "absolute", "331", "71", "78", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("2");
            obj.set_text("Function");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.style.set_buttonalign("right");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("테이블구조관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("16");
            obj.set_text("홈 > 공통관리 > 시스템관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("24");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "161", "61", "8", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "573", "504", "80", "15", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "28", "97", "76", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Object");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbFILT_KIND", "absolute", "170", "97", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbFILT_KIND_innerdataset = new Dataset("cmbFILT_KIND_innerdataset", this.cmbFILT_KIND);
            cmbFILT_KIND_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">OBJECT_NAME</Col><Col id=\"datacolumn\">Object Name</Col></Row><Row><Col id=\"codecolumn\">COMMENTS</Col><Col id=\"datacolumn\">Comments</Col></Row></Rows>");
            obj.set_innerdataset(cmbFILT_KIND_innerdataset);
            obj.set_taborder("6");
            obj.set_value("TABLE_NAME");
            obj.set_text("Physical Name");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("0");

            obj = new Edit("edtSHRFILT_STRN", "absolute", "330", "97", "221", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("테이블구조관리");
            		p.set_scrollbars("autovert");

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
        this.addIncludeScript("TMMD0120.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMD0120.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMD0120 테이블 구조 관리
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
        this.sBUTTONLIST = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMD0120"; //해당 Form에서 사용 할 Package 명
        this.sSCRIPT = ""; //Script Source
        	
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined)
        {
        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = "";   //Form의 Title 정보
        	this.sFORMLOCATION = "";   //Form의 Location 정보
        	this.sUSERLAVEL    = "";   //Form의 Location 정보
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

        	this.dsObjectList.set_enableevent(false);
        	this.fnc_DatasetClear("dsObjectList,dsTableIndexList,dsTableColumnList");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsObjectList=dsObjectList";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
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
        this.fn_Delete = function (obj) {
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
        	if (sKind == "SEARCH00") {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);

        		// 조회 Argument 생성
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " TABLE_NAME=" + this.fnc_Quote(this.dsObjectList.getColumn(this.dsObjectList.rowposition, "OBJECT_NAME"));
        	
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

        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Message("TMM018", this.dsObjectList.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.fn_DataFilter();
        		this.dsObjectList.set_enableevent(true);
        		this.fn_KeyFieldDisible(this.dsObjectList);
        		this.dsObjectList.set_rowposition(0);
        	
        	} else if (sMethodName == "SEARCH01") {
        		
        		for (var i = 0; i < this.dsSCRIPT.getRowCount(); i++) {
        			this.sSCRIPT += this.fnc_ToString(this.dsSCRIPT.getColumn(i, "SCRIPT"));			
        		}
        		this.txtSCRIPT.set_value(this.sSCRIPT);
        	
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	this.fnc_DatasetClear("dsTableIndexList,dsTableColumnList,dsSCRIPT");
        	this.sSCRIPT = "";
        	this.txtSCRIPT.set_value("");
        	
        	if (obj.rowposition < 0) return;
        		
        	if ((obj.getColumn(obj.rowposition, "OBJECT_TYPE") == "TABLE") || (obj.getColumn(obj.rowposition, "OBJECT_TYPE") == "VIEW")) {
        		this.txtSCRIPT.set_visible(false);
        		this.Grid0.set_visible(true);
        		this.Grid1.set_visible(true);
        	} else {
        		this.txtSCRIPT.set_visible(true);
        		this.Grid0.set_visible(false);
        		this.Grid1.set_visible(false);
        	}

        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTableColumnList=dsTableColumnList dsTableIndexList=dsTableIndexList dsSCRIPT=dsSCRIPT";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*--------------------+
         |  Combo Change 처리  |
         +---------------------*/
        this.fn_PostComboChanged = function (obj,strCode,strText,nOldIndex,nNewIndex) {

        	this.fn_ObjectFilter();
        }

        /*---------------------+
         |  CheckBox 선택 처리  |
         +----------------------*/
        this.fn_CheckBoxChange = function (obj) {
        	
        	this.fn_DataFilter(); //필터 처리
        	this.fn_KeyFieldDisible(this.dsObjectList); //Row Change에 대해 재조회 처리	
        	
        	if (this.dsObjectList.rowcount == 0 && obj.value == 1) this.fn_Search();
        	
        }

        /*---------------------+
         |  Make Filter String  |
         +----------------------*/
        this.fn_DataFilter = function () {

        	var sFilter = "";
        	var sSwitch = false;	
        	
        	this.dsObjectList.set_rowposition(-1);
        		
        	if (this.chkSHRTABLE.value == "true" || this.chkSHRTABLE.value == "1") {
        		sFilter += "OBJECT_TYPE=='TABLE'";
        		sSwitch = true;
        	}
        	
        	if (this.chkSHRVIEW.value == "true" || this.chkSHRVIEW.value == "1") {
        		sFilter += Eco.decode(sSwitch, true, "||", "") + "OBJECT_TYPE=='VIEW'";
        		sSwitch = true;
        	}

        	if (this.chkSHRFUNCTION.value == "true" || this.chkSHRFUNCTION.value == "1") {
        		sFilter += Eco.decode(sSwitch, true, "||", "") + "OBJECT_TYPE=='FUNCTION'";
        		sSwitch = true;
        	}

        	if (this.chkSHRPACKAGE.value == "true" || this.chkSHRPACKAGE.value == "1") {
        		sFilter += Eco.decode(sSwitch, true, "||", "") + "OBJECT_TYPE=='PACKAGE'||OBJECT_TYPE=='PACKAGE BODY'";
        		sSwitch = true;
        	}

        	if (this.chkSHRPROCEDURE.value == "true" || this.chkSHRPROCEDURE.value == "1") {
        		sFilter += Eco.decode(sSwitch, true, "||", "") + "OBJECT_TYPE=='PROCEDURE'";
        		sSwitch = true;
        	}

        	if (this.chkSHRTYPE.value == "true" || this.chkSHRTYPE.value == "1") {
        		sFilter += Eco.decode(sSwitch, true, "||", "") + "OBJECT_TYPE=='TYPE'";
        		sSwitch = true;
        	}

        	if (sSwitch == true && this.fnc_Length(this.fnc_Trim(this.edtSHRFILT_STRN.text)) > 0) {
        		sFilter = "(" + sFilter + ") && " + this.fnc_ToUpper(this.cmbFILT_KIND.value) + ".indexOf("+ "'" + this.fnc_Trim(this.fnc_ToUpper(this.edtSHRFILT_STRN.text)) + "') >= 0"
        	}

        	if (this.fnc_Length(sFilter) < 1) {
        		sFilter = "OBJECT_TYPE=='NONE'";
        	}

        	this.dsObjectList.filter(sFilter);		
        	this.dsObjectList.set_rowposition(0);
        	this.fnc_Information(this.stInformation, this.dsObjectList.getRowCount(), "SHR");	
        	
        }

        this.fn_TableListFilter = function(obj,e) {
        	
        	if (obj.name == "cmbFILT_KIND") this.edtSHRFILT_STRN.setFocus();
        	this.fn_DataFilter(); //필터 처리
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsObjectList.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.chkSHRTABLE.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.chkSHRVIEW.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.chkSHRPROCEDURE.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.chkSHRPACKAGE.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.chkSHRTYPE.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.chkSHRFUNCTION.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbFILT_KIND.addEventHandler("onitemchanged", this.fn_TableListFilter, this);
            this.edtSHRFILT_STRN.addEventHandler("onchanged", this.fn_TableListFilter, this);

        };

        this.loadIncludeScript("TMMD0120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
