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
                this.set_name("FAMA0110");
                this.set_titletext("전표유형관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">SLIP_TYCD</Col><Col id=\"DSNAME\">dsSLIP_TYCD</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"CODEID\">SLMD_RGCD</Col><Col id=\"DSNAME\">dsSLMD_RGCD</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"CODEID\">SLAP_GBCD</Col><Col id=\"DSNAME\">dsSLAP_GBCD</Col></Row><Row><Col id=\"HEADFLAG\"/><Col id=\"CODEID\">SLAP_TYCD</Col><Col id=\"DSNAME\">dsSLAP_TYCD</Col></Row><Row><Col id=\"DSNAME\">dsSLCL_TYCD</Col><Col id=\"CODEID\">SLCL_TYCD</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsDRCR_GUBN</Col><Col id=\"CODEID\">DRCR_GUBN</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLGBXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SLIP_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"SLIP_GBNM\" size=\"100\" type=\"STRING\"/><Column id=\"SYST_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SLIP_TYCD\" size=\"10\" type=\"STRING\"/><Column id=\"SLMD_RGCD\" size=\"10\" type=\"STRING\"/><Column id=\"SLAP_GBCD\" size=\"10\" type=\"STRING\"/><Column id=\"SLAP_TYCD\" size=\"10\" type=\"STRING\"/><Column id=\"SLNO_CLNM\" size=\"20\" type=\"STRING\"/><Column id=\"SLCL_TYCD\" size=\"10\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"USEX_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"SLPP_SPNM\" size=\"50\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"400\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_JUNLXM", this);
            obj._setContents("<ColumnInfo><Column id=\"V_JUNL_CODE\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"JUNL_CODE\" size=\"40\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_GUBN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"JUNL_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DRCR_GUBN\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"REF1_FILD\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"REF2_FILD\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"REF3_FILD\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"REF4_FILD\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"REF5_FILD\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"800\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_JUNLXM", "absolute", "8", null, null, "212", "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_JUNLXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"180\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"250\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"분개코드\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"분개명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"계정코드\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계정명\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"차대구분\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"보조1\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"보조2\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"보조3\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"보조4\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"보조5\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:V_JUNL_CODE\" editlimit=\"4\" editimemode=\"none\" editlengthunit=\"utf16\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:JUNL_NAME\" editlimit=\"100\" editimemode=\"none\" editlengthunit=\"utf16\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_INTL\" editlimit=\"10\" editimemode=\"none\" editlengthunit=\"utf16\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'normal' : 'none'\" style=\"align:left;\" text=\"bind:ACCT_NAME\" editimemode=\"none\" editlengthunit=\"utf16\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" editfilter=\"none\" style=\"align:center;\" text=\"bind:DRCR_GUBN\" editlimit=\"1\" editimemode=\"none\" editlengthunit=\"utf16\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REF1_FILD\" editlimit=\"100\" editimemode=\"none\" editlengthunit=\"utf16\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REF2_FILD\" editlimit=\"100\" editimemode=\"none\" editlengthunit=\"utf16\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REF3_FILD\" editlimit=\"100\" editimemode=\"none\" editlengthunit=\"utf16\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REF4_FILD\" editlimit=\"100\" editimemode=\"none\" editlengthunit=\"utf16\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REF5_FILD\" editlimit=\"100\" editimemode=\"none\" editlengthunit=\"utf16\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"normal\" editfilter=\"none\" style=\"align:left;\" text=\"bind:REMK_NOTE\" editlimit=\"400\" editimemode=\"none\" editlengthunit=\"utf16\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRowSub", "absolute", null, null, "62", "21", "90", "231", this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRowSub", "absolute", null, null, "62", "21", "25", "231", this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "8", null, "240", "21", null, "227", this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("15");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("31");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "27", "71", "90", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("시스템구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "279", "71", "115", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("전표유형구분/명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSLIP_GUBN", "absolute", "393", "71", "200", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "109", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Static("stInformation1", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLGBXM", "absolute", "8", "128", null, null, "25", "262", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTA_SLGBXM");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj.set_wheelscrollrow("1");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"시스템\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"전표유형구분\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"전표유형구분명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"전표분류\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"수정범위\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"결재구분\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"전표승인유형\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"전표마감유형\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"전표번호&#13;&#10;분류명\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"정렬&#13;&#10;순서\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"사용&#13;&#10;여부\"/><Cell col=\"11\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"후처리&#13;&#10;프로시저명\"/><Cell col=\"12\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:SYST_CODE\" editlimit=\"10\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" editfilter=\"upper,number,char\" style=\"align:center;\" text=\"bind:SLIP_GUBN\" editlimit=\"10\" editimemode=\"alpha\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:SLIP_GBNM\" editlimit=\"100\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:SLIP_TYCD\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:SLMD_RGCD\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:SLAP_GBCD\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:SLAP_TYCD\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:SLCL_TYCD\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;background: ;\" text=\"bind:SLNO_CLNM\" editlimit=\"20\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"normal\" editfilter=\"number\" style=\"align:center;\" text=\"bind:SORT_ORDR\" editlimit=\"5\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:USEX_YSNO\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:SLPP_SPNM\" editlimit=\"50\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_NOTE\" editlimit=\"400\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_text("전표유형관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("40");
            obj.set_text("홈 > 재무관리 > 재무기준정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("41");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("48");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("49");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "101", "61", "8", "41", null, null, this);
            obj.set_taborder("51");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "249", "61", "40", "41", null, null, this);
            obj.set_taborder("52");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("53");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "573", "455", "80", "35", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("55");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "484", "216", "6", null, null, this);
            obj.set_taborder("58");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1069", "455", "80", "10", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전표유형관리");
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
        this.addIncludeScript("FAMA0110.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0110.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMA0110 전표유형관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.20		안윤준		Initial Created.
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

        
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF";
        this.sPACKAGENAME = "FAMA0110";

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

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_searchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_SLGBXM,dsTA_JUNLXM");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLGBXM=dsTA_SLGBXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLGBXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTA_SLGBXM.addRow();
        	this.dsTA_SLGBXM.setColumn(iRow, "USEX_YSNO", "1");
        	
        	this.fnc_GridSetCellFocus(this.grdTA_SLGBXM, "SYST_CODE");
        	
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck("dsTA_SLGBXM")) this.dsTA_SLGBXM.deleteRow(this.dsTA_SLGBXM.rowposition);
        	this.grdTA_SLGBXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTA_SLGBXM,dsTA_JUNLXM");
        	this.grdTA_SLGBXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_SLGBXM=dsTA_SLGBXM:U dsTA_JUNLXM=dsTA_JUNLXM:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLGBXM.setFocus();
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

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLGBXM,dsTA_JUNLXM", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

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
        /*------------------+
         |  조회 필수 체크!  |
         +-------------------*/
        this.fn_searchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_SLGBXM,dsTA_JUNLXM")) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {

        	if (obj == "dsTA_SLGBXM") {
        	
        		if (this.dsTA_SLGBXM.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		if (this.dsTA_JUNLXM.getRowCount() > 0) {
        			this.fnc_Message("TMM125", "분개코드가 존재하는 전표는 삭제할 수 없습니다.");
        			return false;
        		}

        		var sQuestionText = "(" + this.fnc_Trim(this.dsTA_SLGBXM.getColumn(this.dsTA_SLGBXM.rowposition, "SLIP_GBNM")) + ") 전표유형구분명";
        		return this.fnc_Message("TMM002", sQuestionText);
        	
        	} else if (obj == "dsTA_JUNLXM") {
        	
        		if (this.dsTA_JUNLXM.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		var sQuestionText  = "(" + this.fnc_Trim(this.dsTA_SLGBXM.getColumn(this.dsTA_SLGBXM.rowposition, "SLIP_GBNM")) + ") 전표유형구분명의";
        			sQuestionText += " (" + this.fnc_Trim(this.dsTA_JUNLXM.getColumn(this.dsTA_JUNLXM.rowposition, "JUNL_CODE")) + ") 분개코드 ";
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (dsobj) {

        	if (this.fnc_DatasetChangeCheck("dsTA_SLGBXM,dsTA_JUNLXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsTA_SLGBXM.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTA_SLGBXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLGBXM.getColumn(i, "SYST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시스템코드", this.dsTA_SLGBXM, i, this.grdTA_SLGBXM, "SYST_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLGBXM.getColumn(i, "SLIP_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "전표유형구분", this.dsTA_SLGBXM, i, this.grdTA_SLGBXM, "SLIP_GUBN");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLGBXM.getColumn(i, "SLIP_GBNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "전표유형구분명", this.dsTA_SLGBXM, i, this.grdTA_SLGBXM, "SLIP_GBNM");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLGBXM.getColumn(i, "SLIP_TYCD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "전표분류", this.dsTA_SLGBXM, i, this.grdTA_SLGBXM, "SLIP_TYCD");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLGBXM.getColumn(i, "SLMD_RGCD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "수정범위", this.dsTA_SLGBXM, i, this.grdTA_SLGBXM, "SLMD_RGCD");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLGBXM.getColumn(i, "SLAP_GBCD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "결재구분", this.dsTA_SLGBXM, i, this.grdTA_SLGBXM, "SLAP_GBCD");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLGBXM.getColumn(i, "SLAP_TYCD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "전표승인유형", this.dsTA_SLGBXM, i, this.grdTA_SLGBXM, "SLAP_TYCD");
        		}
        		
        	}

        	for (var i = 0; i < this.dsTA_JUNLXM.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTA_JUNLXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_JUNLXM.getColumn(i, "V_JUNL_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "분개코드", this.dsTA_JUNLXM, i, this.grdTA_JUNLXM, "V_JUNL_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_JUNLXM.getColumn(i, "JUNL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "분개명", this.dsTA_JUNLXM, i, this.grdTA_JUNLXM, "JUNL_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_JUNLXM.getColumn(i, "ACCT_INTL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정코드", this.dsTA_JUNLXM, i, this.grdTA_JUNLXM, "ACCT_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_JUNLXM.getColumn(i, "ACCT_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정명", this.dsTA_JUNLXM, i, this.grdTA_JUNLXM, "ACCT_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_JUNLXM.getColumn(i, "DRCR_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "차대구분", this.dsTA_JUNLXM, i, this.grdTA_JUNLXM, "DRCR_GUBN");
        		}
        		
        		this.dsTA_JUNLXM.setColumn(i, "JUNL_CODE", this.dsTA_JUNLXM.getColumn(i, "SLIP_GUBN") + "-" + this.dsTA_JUNLXM.getColumn(i, "V_JUNL_CODE"));
        		
        	}
        	
        	return true;
        }

        /*--------------------------------+
         |  자료조회조건 삭제 여부 체크!  |
         +--------------------------------*/
        this.fn_DeleteCheckSub = function () {
        	var sQuestionText = "조건명 (" + this.fnc_Trim(this.dsTA_JUNLXM.getColumn(this.dsTA_JUNLXM.rowposition, "COND_NAME")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SYST_CODE=" 	+ this.fnc_Quote(this.cmbSHRSYST_CODE.value);
        		sReturnString += " SLIP_GUBN=" 	+ this.fnc_Quote(this.edtSHRSLIP_GUBN.value);
        		
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SLIP_GUBN=" 	+ this.fnc_Quote(this.dsTA_SLGBXM.getColumn(this.dsTA_SLGBXM.rowposition, "SLIP_GUBN"));
        		
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
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
        	
        		this.fnc_Information(this.stInformation1, this.dsTA_SLGBXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.fnc_Information(this.stInformation2, this.dsTA_JUNLXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Information(this.stInformation2, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_KeyFieldDisible_Head(this.dsTA_SLGBXM);
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam 	= new Array();
        			arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        			arrParam[1] = "GRID,grdTA_SLGBXM,dsSYST_CODE,SYST_CODE";
        			arrParam[2] = "GRID,grdTA_SLGBXM,dsSLIP_TYCD,SLIP_TYCD";
        			arrParam[3] = "GRID,grdTA_SLGBXM,dsSLMD_RGCD,SLMD_RGCD";
        			arrParam[4] = "GRID,grdTA_SLGBXM,dsSLAP_GBCD,SLAP_GBCD";
        			arrParam[5] = "GRID,grdTA_SLGBXM,dsSLAP_TYCD,SLAP_TYCD";
        			arrParam[6] = "GRID,grdTA_SLGBXM,dsSLCL_TYCD,SLCL_TYCD";
        			arrParam[7] = "GRID,grdTA_JUNLXM,dsDRCR_GUBN,DRCR_GUBN";
        		
        		//사용하지 않는 시스템 제외, 대표시스템 제외
        		this.dsSHRSYST_CODE.filter("USEX_YSNO != '0' && REF3_FILD != '1'");
        		this.dsSYST_CODE.filter("USEX_YSNO != '0' && REF3_FILD != '1'");
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head  |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {
        	
        	if (obj.getRowCount() < 1) return;

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        	
        		this.fnc_DatasetClear("dsTA_JUNLXM");
        	
        	} else {
        		
        		this.fnc_DatasetClear("dsTA_JUNLXM");

        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsTA_JUNLXM=dsTA_JUNLXM";
        		var sArgument 	= this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	}
        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*---------------------+
         |  자료조회조건 추가  |
         +---------------------*/
        this.fn_AddRow = function (obj,e) {

        	if (this.dsTA_SLGBXM.getRowCount() > 0) {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLGBXM.getColumn(this.dsTA_SLGBXM.rowposition, "SLIP_GUBN"))) < 1) {
        			
        			this.fnc_CheckPostAction("TMM072", "전표유형구분", this.dsTA_SLGBXM, this.dsTA_SLGBXM.rowposition, this.grdTA_SLGBXM, "SLIP_GUBN");
        			return;
        			
        		} else {
        		
        			var iRow = this.dsTA_JUNLXM.addRow();
        			this.dsTA_JUNLXM.setColumn(iRow, "SLIP_GUBN", this.dsTA_SLGBXM.getColumn(this.dsTA_SLGBXM.rowposition, "SLIP_GUBN"));
        			this.grdTA_JUNLXM.setFocus();
        			
        		}
        		
        	} else {
        		this.fnc_Message("TMM032");
        	}
        }

        /*---------------------+
         |  자료조회조건 삭제  |
         +---------------------*/
        this.fn_DeleteRow = function (obj,e) {

        	if (this.fn_DeleteCheck("dsTA_JUNLXM")) {
        		
        		this.dsTA_JUNLXM.deleteRow(this.dsTA_JUNLXM.rowposition);
        	}
        	
        	this.grdTA_JUNLXM.setFocus();
        	
        }

        /*------------------------------------------------------------------+
         |  공통코드 및 세부 코드 변경 후 다른 Row 이동 체크(저장 후 이동)  |
         +------------------------------------------------------------------*/
        this.dsTA_SLGBXM_canrowposchange = function(obj,e) {

        	if (e.newrow < 0 || e.oldrow < 0) return;

        
        	// 하위 레벨에 변경사항 있을 시 초기화 경고
        	if (this.fnc_DatasetChangeCheck("dsTA_JUNLXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if (sColumnID == "ACCT_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "ACCT_NAME") {
        	
        		arrParam[0] = "FAM0031";
        		arrParam[1] = "";
        		arrParam[2] = "ACCT_NAME";
        		arrParam[3] = "N";
        		arrParam[4] = "grdTA_JUNLXM";
        		arrParam[5] = "ACCT_INTL,ACCT_NAME";
        		arrParam[6] = "0,1";
        		arrParam[7] = sFromDs;
        		arrParam[8] = sOldValue;
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	}
        }

        /*-----------------------------+
         |  데이터셋 변경 시 팝업호출  |
         +-----------------------------*/
        this.dsTA_JUNLXM_oncolumnchanged = function(obj,e) {
        	if ( e.columnid == "ACCT_NAME" ) this.fn_HelpDialoge(this.grdTA_JUNLXM, "YES", e.oldvalue, e.columnid);
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLGBXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_Head, this);
            this.dsTA_SLGBXM.addEventHandler("canrowposchange", this.dsTA_SLGBXM_canrowposchange, this);
            this.dsTA_JUNLXM.addEventHandler("oncolumnchanged", this.dsTA_JUNLXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_JUNLXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdTA_JUNLXM.addEventHandler("oncellclick", this.fn_oncellclick, this);
            this.btnAddRowSub.addEventHandler("onclick", this.fn_AddRow, this);
            this.btnDelRowSub.addEventHandler("onclick", this.fn_DeleteRow, this);
            this.edtSHRSLIP_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSYST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMA0110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
