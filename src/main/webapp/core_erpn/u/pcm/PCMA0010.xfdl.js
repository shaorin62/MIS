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
                this.set_name("PCMA0010");
                this.set_titletext("제작코드관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPD_ITEMXD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CLAS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"DOME_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MODL_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRCLAS_TYPE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRHIGHI_LEVL</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_ITEMXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CLAS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGUBN_FLAG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\"/><Col id=\"CODENM\">전체</Col></Row><Row><Col id=\"CODEID\">Y</Col><Col id=\"CODENM\">사용</Col></Row><Row><Col id=\"CODENM\">미사용</Col><Col id=\"CODEID\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "29", "71", "74", "21", null, null, this);
            obj.set_text("제작내용");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "235", "71", "70", "21", null, null, this);
            obj.set_text("대분류명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCLAS_TYPE", "absolute", "97", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Combo("cmbSHRHIGH_LEVL", "absolute", "303", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("100");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static3", "absolute", "594", "71", "86", "21", null, null, this);
            obj.set_taborder("102");
            obj.set_text("제작항목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRITEM_CODE", "absolute", "662", "71", "80", "21", null, null, this);
            obj.set_taborder("103");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRITEM_NAME", "absolute", "744", "71", "21", "21", null, null, this);
            obj.set_taborder("104");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRITEM_NAME", "absolute", "767", "71", "110", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Tab("tabCODE", "absolute", "8", "113", null, null, "25", "15", this);
            obj.set_taborder("106");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tabCODE);
            obj.set_text("제작코드관리");
            this.tabCODE.addChild(obj.name, obj);
            obj = new Grid("grdPD_ITEMXD", "absolute", "10", "25", null, null, "10", "10", this.tabCODE.tabpage1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("6");
            obj.set_binddataset("dsPD_ITEMXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"대분류코드\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"중분류코드\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"소분류코드\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"제작항목코드\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"제작분류\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_essential\" text=\"대분류명\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_essential\" text=\"중분류명\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_essential\" text=\"제작항목명\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"내수율포함\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_edit\" text=\"모델료포함\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:HIGH_LEVL\" expandshow=\"show\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MIDD_LEVL\" expandshow=\"show\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SUBX_LEVL\" expandshow=\"show\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ITEM_CODE\" expandshow=\"show\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CLAS_TYPE\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:HIGH_NAME\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"text\" text=\"bind:MIDD_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:ITEM_NAME\" expandshow=\"show\" expandsize=\"18\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DOME_YN\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MODL_FLAG\"/></Band></Format></Formats>");
            this.tabCODE.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.tabCODE.tabpage1);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "1142", "75", "10", "75", null, null, this.tabCODE.tabpage1);
            obj.set_taborder("8");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "25", null, null, this.tabCODE.tabpage1);
            obj.set_taborder("9");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tabpage1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", "262", "21", null, null, this.tabCODE.tabpage1);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabCODE.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tabCODE);
            obj.set_text("분류항목관리");
            this.tabCODE.addChild(obj.name, obj);
            obj = new Grid("grdPD_ITEMXH", "absolute", "10", "25", null, null, "10", "10", this.tabCODE.tabpage2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_binddataset("dsPD_ITEMXH");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"140\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"250\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"제작분류\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"대분류 코드\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"대분류명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"중분류코드\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"중분류명\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;\" text=\"bind:CLAS_TYPE\" combodisplaynulltext=\"신규\" combodisplay=\"edit\"/><Cell col=\"1\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:HIGH_LEVL\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:HIGH_NAME\"/><Cell col=\"3\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:MIDD_LEVL\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:MIDD_NAME\"/></Band></Format></Formats>");
            this.tabCODE.tabpage2.addChild(obj.name, obj);
            obj = new Static("stInformation2", "absolute", "10", "4", "262", "21", null, null, this.tabCODE.tabpage2);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabCODE.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "25", null, null, this.tabCODE.tabpage2);
            obj.set_taborder("11");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.tabCODE.tabpage2);
            obj.set_taborder("12");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "1142", "75", "10", "75", null, null, this.tabCODE.tabpage2);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabCODE.tabpage2.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("107");
            obj.set_text("제작코드관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("108");
            obj.set_text("홈 > 제작시스템>기준정보>제작코드관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("109");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("110");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("114");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("115");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("117");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("118");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "25", "103", "80", "10", null, null, this);
            obj.set_taborder("119");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("120");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("121");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "89", "61", "8", "41", null, null, this);
            obj.set_taborder("122");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "207", "61", "40", "41", null, null, this);
            obj.set_taborder("123");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "295", "61", "8", "41", null, null, this);
            obj.set_taborder("124");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRITEM_NAME_VAL", "absolute", "988", "71", "150", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "441", "71", "47", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("분류");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRGUBN_FLAG", "absolute", "484", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("133");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_innerdataset("@dsGUBN_FLAG");
            obj.set_datacolumn("CODENM");
            obj.set_codecolumn("CODEID");
            obj.set_value("Y");
            obj.set_text("사용");
            obj.set_index("1");

            obj = new Static("Static16", "absolute", "33", "691", "80", "10", null, null, this);
            obj.set_taborder("135");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "907", "71", "86", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_text("제작항목명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabCODE.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("제작코드관리");

            	}
            );
            this.tabCODE.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabCODE.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("분류항목관리");

            	}
            );
            this.tabCODE.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작코드관리");
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
        this.addIncludeScript("PCMA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PCMA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRME0010 법인카드 정보등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		오세훈		Initial Created.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "PCMA0010";

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
        	//최초조회부터 탭 확인 후 조회
        	var tab_index = this.tabCODE.tabindex;
        	
        	this.fn_validation(tab_index);
        }

        /*-----------------------------+
         | 제작 코드관리 조회	   |
         +-----------------------------*/
         //제작코드관리탭
        this.fn_searchTab0 = function()	{
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPD_ITEMXD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_ITEMXD=dsPD_ITEMXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        //분류항목관리탭
        this.fn_searchTab1 = function()	{
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPD_ITEMXD");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_ITEMXH=dsPD_ITEMXH";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tabCODE.tabpage2.grdPD_ITEMXH.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var tab_index = this.tabCODE.tabindex;
        	
        	//제작코드관리 추가 
        	if(tab_index == '0'){
        		var iRow = this.dsPD_ITEMXD.insertRow(this.dsPD_ITEMXD.rowposition + 1);
        		this.dsPD_ITEMXD.set_rowposition(iRow);
        		this.dsPD_ITEMXD.setColumn(iRow, "CLAS_TYPE", "C");
        		this.dsPD_ITEMXD.setColumn(iRow, "HIGH_LEVL", "신규");
        		this.dsPD_ITEMXD.setColumn(iRow, "DOME_YN", 0);
        		this.dsPD_ITEMXD.setColumn(iRow, "MODL_FLAG", 0);
        	
        	}
        	//분류항목관리추가
        	else if(tab_index == '1'){
        		var iRow = this.dsPD_ITEMXH.insertRow(this.dsPD_ITEMXH.rowposition + 1);
        		this.dsPD_ITEMXH.set_rowposition(iRow);
        		this.dsPD_ITEMXH.setColumn(iRow, "CLAS_TYPE", "C");
        		this.dsPD_ITEMXH.setColumn(iRow, "HIGH_LEVL", "신규");
        	
        	}
        	
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	var tab_index = this.tabCODE.tabindex;
        	
        	//제작코드관리 추가 
        	if(tab_index == '0'){
        				
        		if (this.fn_DeleteCheck()) {
        			for(var i = this.dsPD_ITEMXD.rowcount; i >= 0; i--){
        				if(this.dsPD_ITEMXD.getColumn(i, "CHK") == 1){
        						this.dsPD_ITEMXD.deleteRow(i);
        				}
        			}
        		}
        		
        		this.tabCODE.tabpage1.grdPD_ITEMXD.setFocus();
        	
        	}else if(tab_index == '1'){

        		if (this.fn_DeleteCheck()) this.dsPD_ITEMXH.deleteRow(this.dsPD_ITEMXH.rowposition);

        		this.tabCODE.tabpage2.grdPD_ITEMXH.setFocus();
        		
        	}
        	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	var tab_index = this.tabCODE.tabindex;
        	
        	if(tab_index == 0){
        			this.fnc_DataSetCancel("dsPD_ITEMXD");
        			this.tabCODE.tabpage1.grdPD_ITEMXD.setFocus();	
        	}else{
        			this.fnc_DataSetCancel("dsPD_ITEMXH");
        			this.tabCODE.tabpage2.grdPD_ITEMXH.setFocus();	
        	}

        
        	
        	

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	//탭 분류별 저장 로직 확인
        	var tab_index = this.tabCODE.tabindex;
        	
        	//제작 코드 저장
        	if(tab_index == '0'){
        		if (!this.fn_SaveDTLItemCheck()) return;
        		this.fn_SaveDTL(obj);
        	}
        	
        	//제작 분류항목 저장
        	else if(tab_index == '1'){
        		if (!this.fn_SaveHDRItemCheck()) return;
        		this.fn_SaveHDR(obj);
        	
        	}
        	
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

        	var tab_index = this.tabCODE.tabindex;
        	
        	if(tab_index == 0){
        		if ((this.fnc_DatasetChangeCheck("dsPD_ITEMXD")) && (this.fnc_Message("TMM023") == false) ) {
        			return false;
        		}
        	}else{
        		if ((this.fnc_DatasetChangeCheck("dsPD_ITEMXH")) && (this.fnc_Message("TMM023") == false) ) {
        			return false;
        		}
        	}

        	
        	

        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveHDRItemCheck = function () {

        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_ITEMXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        		}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_ITEMXH.getRowCount(); i++) {
        		var cnt = i + 1;
        	
        		if (this.fnc_ToUpper(this.dsPD_ITEMXH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ITEMXH.getColumn(i, "CLAS_TYPE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작분류", this.dsPD_ITEMXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ITEMXH.getColumn(i, "HIGH_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "대분류명", this.dsPD_ITEMXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ITEMXH.getColumn(i, "MIDD_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "중분류명", this.dsPD_ITEMXH, i, '', '');
        		}
        	}
        	
        	return true;
        }

        this.fn_SaveDTLItemCheck = function () {

        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_ITEMXD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        		}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_ITEMXD.getRowCount(); i++) {
        		var cnt = i + 1;
        	
        		if (this.fnc_ToUpper(this.dsPD_ITEMXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ITEMXD.getColumn(i, "HIGH_LEVL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "대분류코드", this.dsPD_ITEMXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ITEMXD.getColumn(i, "MIDD_LEVL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "중분류코드", this.dsPD_ITEMXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ITEMXD.getColumn(i, "MIDD_LEVL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "중분류코드", this.dsPD_ITEMXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_ITEMXD.getColumn(i, "ITEM_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작항목명", this.dsPD_ITEMXH, i, '', '');
        		}
        		
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {

        	var tab_index = this.tabCODE.tabindex;
        	
        	//제작코드관리 추가 
        	if(tab_index == '0'){
        		if (this.dsPD_ITEMXD.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		
        		var cnt = 0;
        		for(var i = 0; i < this.dsPD_ITEMXD.rowcount; i++){
        			if(this.dsPD_ITEMXD.getColumn(i, "CHK") == 1){
        				cnt += 1;
        			}
        		}
        		
        		if(cnt==0){
        			this.fnc_Message("PCM001");
        			return  false;
        		}else if(cnt > 1){
        			cnt = cnt -1;
        			var msg = "외"+ cnt + "건";
        		}else{
        			var msg =  cnt + "건";
        		}
        		

        		var sQuestionText = "(" + this.fnc_Trim(this.dsPD_ITEMXD.getColumn(this.dsPD_ITEMXD.rowposition, "ITEM_NAME")) + ") 제작코드" + msg;
        		return this.fnc_Message("TMM002", sQuestionText);
        	
        	}else if(tab_index == '1'){
        		
        		if (this.dsPD_ITEMXH.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		
        		var sQuestionText = "(" + this.fnc_Trim(this.dsPD_ITEMXH.getColumn(this.dsPD_ITEMXH.rowposition, "MIDD_NAME")) + ") 분류항목";
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " CLAS_TYPE=" + this.fnc_Quote(this.cmbSHRCLAS_TYPE.value); //제작내용코드
        		sReturnString += " HIGH_LEVL=" + this.fnc_Quote(this.cmbSHRHIGH_LEVL.value); //대분류명
        		sReturnString += " ITEM_CODE=" + this.fnc_Quote(this.edtSHRITEM_CODE.value); //제작항목코드
        		sReturnString += " ITEM_NAME=" + this.fnc_Quote(this.edtSHRITEM_NAME.value); //제작항목
        		sReturnString += " ITEM_NAME_VAL=" + this.fnc_Quote(this.edtSHRITEM_NAME_VAL.value); //제작항목명
        		sReturnString += " GUBN_FLAG=" + this.fnc_Quote(this.cmbSHRGUBN_FLAG.value); //사용여부 구분

        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " CLAS_TYPE=" + this.fnc_Quote(this.cmbSHRCLAS_TYPE.value); //제작내용코드
        		sReturnString += " HIGH_LEVL=" + this.fnc_Quote(this.cmbSHRHIGH_LEVL.value); //대분류명
        		sReturnString += " GUBN_FLAG=" + this.fnc_Quote(this.cmbSHRGUBN_FLAG.value); //사용여부 구분
        		
        		
        	}else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
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
        	
        		this.fnc_Information(this.tabCODE.tabpage1.stInformation, this.dsPD_ITEMXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.fnc_Information(this.tabCODE.tabpage2.stInformation2, this.dsPD_ITEMXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Message("TMM103");

        		this.fn_Search();
        		
        	} else if (sMethodName == "SAVE01") {
        	
        		this.fnc_Message("TMM103");

        		this.fn_Search();
        	
        	} else if (sMethodName == "GetCommCode") {

        		// 제작내용팝업
        		this.fnc_GetComboSearch();
        		
        		//제작코드관리 그리드 콤보
        		this.fnc_GetComboGrid();
        		
        		//분류항목관리 그리드 콤보
        		this.fnc_GetComboGridHIGH();
        	
        	}
        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head  |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.edtSHRITEM_CODE.set_readonly(false);
        	}else{
        		this.edtSHRITEM_CODE.set_readonly(true);
        	}
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRITEM_NAME') || (obj.name == 'edtSHRITEM_NAME')) {

        		arrParam[0] = 'PCMA0030';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRITEM_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRITEM_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRITEM_CODE,edtSHRITEM_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,3';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        	
        	
        	
        	if (obj.name == "grdPD_ITEMXD") {	

        		if ((obj.getCellProperty("Body", obj.currentcell, "text") == "bind:MIDD_NAME") || (sColumnID == "MIDD_NAME")) {
        			arrParam[0] = "PCM0002";
        			arrParam[1] = "";
        			arrParam[2] = "MIDD_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabCODE.tabpage1.grdPD_ITEMXD";
        			arrParam[5] = "CLAS_TYPE,HIGH_LEVL,HIGH_NAME,MIDD_LEVL,MIDD_NAME";
        			arrParam[6] = "0,2,3,4,5";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        	
        	

        }
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*-----------------------------+
         | 활성화된 탭 체크 후 조회 |
         +-----------------------------*/
        this.fn_validation = function(tab_index){
        	//하단그리드

        	if(tab_index == '0'){this.fn_searchTab0();}
        	else if(tab_index == '1'){this.fn_searchTab1();}
        }

        
        //조회를 위한 제작내용 콤보박스
        this.fnc_GetComboSearch = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRCLAS_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRCLAS_TYPE,dsSHRCLAS_TYPE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        //조회를 위한 대분류명 콤보박스
        this.fnc_GetComboSearchHIGH = function()
        {
        		//제작내용 선택에 따른 대분류 선택
        		var SHRCLAS_TYPE = this.cmbSHRCLAS_TYPE.value;

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

        //그리드 콤보박스
        this.fnc_GetComboGrid = function()
        {
        	var arrParam1 = new Array();
        			arrParam1[0] = "dsGRIDCLAS_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,tabCODE.tabpage1.grdPD_ITEMXD,dsGRIDCLAS_TYPE,CLAS_TYPE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        //분류항목관리 콤보박스
        this.fnc_GetComboGridHIGH = function()
        {
        	var arrParam1 = new Array();
        			arrParam1[0] = "dsPD_COMBO"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건
        			
        			

        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,tabCODE.tabpage2.grdPD_ITEMXH,dsPD_COMBO,CLAS_TYPE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        

        this.cmbSHRCLAS_TYPE_oncloseup = function(obj,e)
        {
        	this.fnc_GetComboSearchHIGH();
        }

        this.tabCODE_onchanged = function(obj,e)
        {
        	
        	this.fnc_GridSetting(obj.components[e.postindex]);

        	var tab_index = this.tabCODE.tabindex;
        	if(tab_index == 0 ){
        		this.Static3.set_visible(true);
        		this.Static11.set_visible(true);
        		this.edtSHRITEM_CODE.set_visible(true);
        		this.imgHelpSHRITEM_NAME.set_visible(true);
        		this.edtSHRITEM_NAME.set_visible(true);
        		this.edtSHRITEM_NAME_VAL.set_visible(true);
        	}else{
        		this.Static3.set_visible(false);
        		this.Static11.set_visible(false);
        		this.edtSHRITEM_CODE.set_visible(false);
        		this.imgHelpSHRITEM_NAME.set_visible(false);
        		this.edtSHRITEM_NAME.set_visible(false);
        		this.edtSHRITEM_NAME_VAL.set_visible(false);
        	}
        	
        	this.fn_Search();
        	
        }

        
        this.fn_HelpDialoge2 = function(obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if (obj.name == "grdPD_ITEMXH") {	
        		if ((obj.getCellProperty("Body", obj.currentcell, "text") == "bind:HIGH_NAME") || (sColumnID == "HIGH_NAME") 
        		      || (obj.getCellProperty("Body", obj.currentcell, "text") == "bind:HIGH_LEVL")) {
        			arrParam[0] = "PCM0001";
        			arrParam[1] = "";
        			arrParam[2] = "HIGH_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabCODE.tabpage2.grdPD_ITEMXH";
        			arrParam[5] = "CLAS_TYPE,HIGH_LEVL,HIGH_NAME";
        			arrParam[6] = "0,2,3";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        
        this.dsPD_ITEMXH_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "HIGH_NAME" ) this.fn_HelpDialoge2(this.tabCODE.tabpage2.grdPD_ITEMXH, "NO", e.oldvalue, e.columnid);
        }

        
        this.dsPD_ITEMXD_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "MIDD_NAME" ) this.fn_HelpDialoge(this.tabCODE.tabpage1.grdPD_ITEMXD, "YES", e.oldvalue, e.columnid);
        }

        

        //제작 분류항목 저장
        this.fn_SaveHDR = function (obj)
        {

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPD_ITEMXH=dsPD_ITEMXH:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        //제작 코드 저장
        this.fn_SaveDTL = function (obj)
        {

        	var sMethodName = "SAVE01";
        	var sInDataSet  = "dsPD_ITEMXD=dsPD_ITEMXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        var isAllChecked1 = 0;
        this.tabCODE_tab0_grdPD_ITEMXD_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabCODE.tab0.grdPD_ITEMXD.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked1 = (isAllChecked1 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_ITEMXD.getRowCount(); i++) {
        			this.dsPD_ITEMXD.setColumn(i, v_Colid, isAllChecked1);
        		}
        		this.tabCODE.tab0.grdPD_ITEMXD.setCellProperty("Head", 0, "expr", isAllChecked1);
        	}
        }

        
        //조회조건 초기화
        this.Static11_onclick = function(obj,e)
        {
        	this.edtSHRITEM_NAME_VAL.set_value("");
        }

        this.Static3_onclick = function(obj,e)
        {
        	this.edtSHRITEM_CODE.set_value("");
        	this.edtSHRITEM_NAME.set_value("");
        }

        this.imgSearchTitle1_onclick = function(obj,e)
        {
        	this.cmbSHRHIGH_LEVL.set_value("");
        }

        this.imgSearchTitle0_onclick = function(obj,e)
        {
        	this.cmbSHRCLAS_TYPE.set_value("");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_ITEMXD.addEventHandler("oncolumnchanged", this.dsPD_ITEMXD_oncolumnchanged, this);
            this.dsPD_ITEMXH.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_Head, this);
            this.dsPD_ITEMXH.addEventHandler("oncolumnchanged", this.dsPD_ITEMXH_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.imgSearchTitle1.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRCLAS_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCLAS_TYPE.addEventHandler("oncloseup", this.cmbSHRCLAS_TYPE_oncloseup, this);
            this.cmbSHRHIGH_LEVL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static3.addEventHandler("onclick", this.Static3_onclick, this);
            this.edtSHRITEM_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRITEM_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRITEM_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabCODE.addEventHandler("onchanged", this.tabCODE_onchanged, this);
            this.tabCODE.tabpage1.grdPD_ITEMXD.addEventHandler("onheadclick", this.tabCODE_tab0_grdPD_ITEMXD_onheadclick, this);
            this.tabCODE.tabpage1.grdPD_ITEMXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabCODE.tabpage2.grdPD_ITEMXH.addEventHandler("onexpandup", this.fn_HelpDialoge2, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRITEM_NAME_VAL.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.Static13.addEventHandler("onclick", this.Static11_onclick, this);
            this.cmbSHRGUBN_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static11.addEventHandler("onclick", this.Static11_onclick, this);

        };

        this.loadIncludeScript("PCMA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
