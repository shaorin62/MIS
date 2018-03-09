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
                this.set_name("PAYA0080");
                this.set_titletext("급여기준급여항목설정");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">WAGP_CODE</Col><Col id=\"DSNAME\">dsWAGP_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PAYEXP_M", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PAYEXP_A", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PAYEXP_D", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">PAY0008</Col><Col id=\"DSNAME\">dsSTDS_YMTH</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "252", "107", "400", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWAGP_CODE", "absolute", "95", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Combo("cmbSHRSTDS_YMTH", "absolute", "312", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("dropdown");
            obj.set_index("-1");

            obj = new Grid("grdPY_PAYEXP_M", "absolute", "8", "128", "224", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_PAYEXP_M");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"226\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" text=\"직원구분\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:CLSD_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation3", "absolute", "717", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("11");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PAYEXP_A", "absolute", "252", "128", "445", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_PAYEXP_A");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"289\"/><Column size=\"94\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" text=\"지급항목명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:EXPD_NAME\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;background: ;\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PAYEXP_D", "absolute", "717", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_PAYEXP_D");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"291\"/><Column size=\"93\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" text=\"공제항목명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:EXPD_NAME\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;background: ;\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "107", "220", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("12");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "27", "71", "76", "21", null, null, this);
            obj.set_text("급여구분");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "244", "71", "60", "21", null, null, this);
            obj.set_text("기준년월");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("급여기준급여항목설정");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("15");
            obj.set_text("홈 > 급여관리 > 급여기준정보 ");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("21");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("23");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("24");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "215", "61", "40", "41", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "232", "173", "20", "41", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "697", "173", "20", "41", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "1267", "153", "278", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "260", "39", null, null, this.popINSERT);
            obj.set_taborder("25");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popINSERT);
            obj.set_taborder("26");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormItemCapBE");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "186", "18", "63", "21", null, null, this.popINSERT);
            obj.set_taborder("28");
            obj.set_text("자료생성");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "207", "56", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("29");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Div("divSTDS_YEAR", "absolute", "98", "18", "86", "21", null, null, this.popINSERT);
            obj.set_taborder("30");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1237", "154", "182", "8", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1237", "233", "294", "8", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1268", "173", "8", "96", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "1536", "173", "8", "96", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 278, 90, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여기준급여항목설정");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAYA0080.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYA0080.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYA0080 급여기준급여항목설정
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.12		고민주		Initial Created.
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
        this.sBUTTONLIST  = "TTTFTTTF"; 
        this.sPACKAGENAME = "PAYA0080"; 

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
        	
        	this.dsUserCombo.setColumn(0, "PARAM", this.cmbSHRWAGP_CODE.value);
        	
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	this.popINSERT.show();
        	
        	this.cmbSHRWAGP_CODE.setFocus();
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

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_PAYEXP_M=dsPY_PAYEXP_M";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	this.fn_Popup();
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsPY_PAYEXP_M");
        	this.grdPY_PAYEXP_M.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_PAYEXP_A=dsPY_PAYEXP_A:U dsPY_PAYEXP_D=dsPY_PAYEXP_D:U";
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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PAYEXP_M", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_PAYEXP_M,dsPY_PAYEXP_A,dsPY_PAYEXP_D")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRWAGP_CODE.value)) <1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "급여구분", this.cmbSHRWAGP_CODE);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRSTDS_YMTH.value)) <1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년월", this.cmbSHRSTDS_YMTH);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_PAYEXP_A,dsPY_PAYEXP_D")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSTDS_YMTH.value)); 
        		sReturnString += " WAGP_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWAGP_CODE.value));
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" 		 + this.fnc_Quote(this.dsPY_PAYEXP_M.getColumn(this.dsPY_PAYEXP_M.rowposition, "STDS_YMTH"));
        		sReturnString += " WAGP_CODE=" 		 + this.fnc_Quote(this.dsPY_PAYEXP_M.getColumn(this.dsPY_PAYEXP_M.rowposition, "WAGP_CODE"));
        		sReturnString += " CLSD_CODE=" 		 + this.fnc_Quote(this.dsPY_PAYEXP_M.getColumn(this.dsPY_PAYEXP_M.rowposition, "CLSD_CODE"));
        		
        	} else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" 		 + this.fnc_Quote(this.dsPY_PAYEXP_M.getColumn(this.dsPY_PAYEXP_M.rowposition, "STDS_YMTH"));
        		sReturnString += " WAGP_CODE=" 		 + this.fnc_Quote(this.dsPY_PAYEXP_M.getColumn(this.dsPY_PAYEXP_M.rowposition, "WAGP_CODE"));
        		sReturnString += " CLSD_CODE=" 		 + this.fnc_Quote(this.dsPY_PAYEXP_M.getColumn(this.dsPY_PAYEXP_M.rowposition, "CLSD_CODE"));
        	
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
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
        		this.fnc_Information(this.stInformation1, this.dsPY_PAYEXP_M.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_PAYEXP_M.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.fn_KeyFieldDisible(this.dsPY_PAYEXP_M);
        		
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation2, this.dsPY_PAYEXP_A.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");		 
        		
        	} else if (sMethodName == "SEARCH02") {	
        		this.fnc_Information(this.stInformation3, this.dsPY_PAYEXP_D.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.grdPY_PAYEXP_A.setFocus();
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_PAYEXP_M);
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Information(this.stInformation2, 0, "SAVE");
        		this.fnc_Information(this.stInformation3, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRWAGP_CODE,dsWAGP_CODE,0"; 		
        			arrParam[1] = "GRID,grdPY_PAYEXP_M,dsCLSD_CODE,CLSD_CODE"; 		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRSTDS_YMTH,dsSTDS_YMTH,0";
        		this.fnc_UserComboInnerBind(arrParam);
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function(obj) {

        	if (obj.getRowCount < 0) return;
        	this.fnc_DatasetClear("dsPY_PAYEXP_A,dsPY_PAYEXP_D");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_PAYEXP_A=dsPY_PAYEXP_A";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_PAYEXP_D=dsPY_PAYEXP_D";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        this.dsPY_PAYEXP_M_CanRowPosChange = function(obj,e) {
        	if (this.fnc_DatasetChangeCheck("dsPY_PAYEXP_A,dsPY_PAYEXP_D")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        }

        /*------------------------+
         |  급여코드 변경시       |
         +------------------------*/
        this.cmbSHRWAGP_CODE_OnChanged = function(obj,e) {
        	this.dsUserCombo.setColumn(0, "PARAM", this.cmbSHRWAGP_CODE.value);
        	this.fnc_GetUserComboDs(this.dsUserCombo)
        	
        } 

        /*------------------------+
         |  기준년월 변경시       |
         +------------------------*/
        this.cmbSHRSTDS_YMTH_onitemchanged = function(obj,e) {
        	this.fn_Search();
        	
        }

        /*---------------+
         | 입력 팝업 열기 |
         +----------------*/
        this.fn_Popup = function(obj,e){	
        	this.popINSERT.divSTDS_YEAR.fn_SetMonth("");
        	var v_nX = system.clientToScreenX(this.div_ButtonList.btnInput, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var v_nY = system.clientToScreenY(this.div_ButtonList.btnInput, parseInt(this.div_ButtonList.btnInput.height)) - system.clientToScreenY(application.mainframe, 0); 
         	this.popINSERT.trackPopup( v_nX+285, v_nY);
         	
        }

        /*---------------+
         | 입력 팝업 닫기 |
         +----------------*/
        this.fn_Popup_close = function(obj,e) {
        	this.popINSERT.closePopup();
        	
        }

        /*---------------+
         | 입력 처리 |
         +----------------*/
        this.popINSERT_btnINSERT_OnClick = function(obj,e){
        	this.dsSTDS_YMTH.insertRow(0);
        	this.dsSTDS_YMTH.setColumn(0,"COMB_CODE",this.popINSERT.divSTDS_YEAR.fn_GetMonth());
        	this.dsSTDS_YMTH.setColumn(0,"COMB_NAME",this.fnc_SubStr(this.popINSERT.divSTDS_YEAR.fn_GetMonth(),0,4)+"-"+this.fnc_SubStr(this.popINSERT.divSTDS_YEAR.fn_GetMonth(),4,2)); 
        	this.cmbSHRSTDS_YMTH.set_index(0);
        	this.fn_Search();
        	this.fn_Popup_close();
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_PAYEXP_M.addEventHandler("canrowposchange", this.dsPY_PAYEXP_M_CanRowPosChange, this);
            this.dsPY_PAYEXP_M.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.spSearchBox0.addEventHandler("onclick", this.spSearchBox0_onclick, this);
            this.cmbSHRWAGP_CODE.addEventHandler("onitemchanged", this.cmbSHRWAGP_CODE_OnChanged, this);
            this.cmbSHRWAGP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSTDS_YMTH.addEventHandler("onitemchanged", this.cmbSHRSTDS_YMTH_onitemchanged, this);
            this.cmbSHRSTDS_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.fn_Popup_close, this);

        };

        this.loadIncludeScript("PAYA0080.xfdl");
        this.loadPreloadList();
       
    };
}
)();
