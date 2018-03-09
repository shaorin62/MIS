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
                this.set_name("FSMF0010");
                this.set_titletext("건설중자산대체관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASTFXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUB1\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_NUMB\" size=\"16\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_STAT\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASTFLA", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUB1\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_NUMB\" size=\"16\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SMAL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_COST\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">APPS_CODE</Col><Col id=\"DSNAME\">dsAPPV_STAT</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation00", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASTFXM", "absolute", "8", "128", null, "421", "25", null, this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_ASTFXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"0\"/><Column size=\"550\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"대체일자\"/><Cell col=\"1\" displaytype=\"text\" text=\"대체총액\"/><Cell col=\"2\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"승인상태\"/><Cell col=\"4\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASTF_DATE\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASTF_TAMT\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_NUMB\" mask=\"expr:SLIP_NUMB.toString().length == 0 ? &quot;&quot; : &quot;##-########-####&quot;\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:APPV_STAT\" combodataset=\"dsAPPV_STAT\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DESC_REMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASTFLA", "absolute", "8", "574", null, null, "25", "15", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_ASTFLA");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정명\"/><Cell col=\"1\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"2\" displaytype=\"text\" text=\"품목분류\"/><Cell col=\"3\" displaytype=\"text\" text=\"내용년수\"/><Cell col=\"4\" displaytype=\"text\" text=\"취득단가\"/><Cell col=\"5\" displaytype=\"text\" text=\"취득수량\"/><Cell col=\"6\" displaytype=\"text\" text=\"취득금액\"/><Cell col=\"7\" displaytype=\"text\" text=\"자산번호\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ASST_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:SMAL_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PRID_DPCT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_COST\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_NUMB\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_PRIC\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "8", "553", null, "21", "939", null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "103", "71", "112", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Calendar("calSHRASTF_DAT2", "absolute", "431", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static27", "absolute", "415", "71", "16", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRASTF_DAT1", "absolute", "314", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static00", "absolute", "244", "71", "75", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("대체기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "75", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("건설중자산대체관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("16");
            obj.set_text("홈 > 자산관리>자산대체관리");
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

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("26");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "426", "23", null, null, this);
            obj.set_taborder("10");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnAsstAdd", "absolute", "0", "0", "100", "21", null, null, this.Div0);
            obj.set_taborder("5");
            obj.set_text("자산대체등록");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_tabstop("false");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnSlipDelete", "absolute", "102", "0", "124", "21", null, null, this.Div0);
            obj.set_taborder("6");
            obj.set_text("자산대체전표삭제");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_tabstop("false");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnSlipCreate00", "absolute", "230", "0", "124", "21", null, null, this.Div0);
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_text("자산대체전표등록");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("28");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "24", "122", "216", "6", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "573", "549", "80", "25", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "24", "568", "216", "6", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 426, 23, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("건설중자산대체관리");
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
        this.addIncludeScript("FSMF0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMF0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FSMF0010 건설중자산대체관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		양현덕		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
         /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTFFFFTF";
        this.sPACKAGENAME = "FSMF0010";

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                  *
         **************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){
        	
        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.grdFS_ASTFXM, "SLIP_NUMB");

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	var sDate = this.fnc_GetServerDateTime("DATE");
        	this.calSHRASTF_DAT1.set_value(this.fnc_Left(sDate , 6) + "01");
        	this.calSHRASTF_DAT2.set_value(sDate);
        	this.cmbSHRACCT_UNIT.setFocus();
        	
        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsFS_ASTFXM,dsFS_ASTFLA");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_ASTFXM=dsFS_ASTFXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASTFXM.setFocus();
        	
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	//기능없음
        }

        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASTFXM,dsFS_ASTFLA", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때   |
         +-----------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                 *
         **************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {
        	return true;
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " ASTF_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRASTF_DAT1.value)); //대체기간(시작일)
        		sReturnString += " ASTF_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRASTF_DAT2.value)); //대체기간(종료일)
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "ACCT_UNIT"))); //회계단위
        		sReturnString += " ASTF_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "ASTF_NUMB"))); //자산대체번호

        	} else if (sKind == "SLIPDELETE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " ASTF_DATE=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "ASTF_DATE"))); //자산대체일(삭제조건)
        		sReturnString += " ASTF_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "ASTF_NUMB"))); //자산대체번호(삭제조건)
        		sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "SLIP_NUMB"))); //전표번호(삭제조건)
        	
        	} else if (sKind == "SLIP00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " ASTF_DATE=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "ASTF_DATE"))); //자산대체일(삭제조건)
        		sReturnString += " ASTF_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "ASTF_NUMB"))); //자산대체번호(삭제조건)
        		sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "SLIP_NUMB"))); //전표번호(삭제조건)
        		sReturnString += " SLIP_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim('FS021')); // 전표유형구분
        		sReturnString += " SOUS_LNKY=" 	+ this.fnc_Quote(this.fnc_Trim('FSMF0010')); // 출처연결키
        	
        	}
        	
        	return sReturnString;
        	
        }

        /*------------------------------ --------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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

        /*------------------------------------+
         |  Transaction 후 Post Process!      |
         +------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "SEARCH00"){
        		
        		this.fnc_Information(this.stInformation00, this.dsFS_ASTFXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_ASTFXM.rowcount);
        		
        	} else if (sMethodName == "SEARCH01") {
        		
        		this.fnc_Information(this.stInformation01, this.dsFS_ASTFLA.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SLIPDELETE00") {
        		
        		if (this.dsFS_ASTFXM.rowcount == 0) {
        		
        			this.fnc_DatasetClear("dsFS_ASTFLA"); 
        			this.fnc_Information(this.stInformation01, 0, "SHR");
        			
        		} 

        		this.fnc_Information(this.stInformation00, this.dsFS_ASTFXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM125", "자산대체전표삭제가 완료되었습니다.");
        		this.fn_Search();
        		
        	}  else if (sMethodName == "SLIP00") {
        		
        		if (this.dsFS_ASTFXM.rowcount == 0) {
        		
        			this.fnc_DatasetClear("dsFS_ASTFLA"); 
        			this.fnc_Information(this.stInformation01, 0, "SHR");
        			
        		} 

        		this.fnc_Information(this.stInformation00, this.dsFS_ASTFXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM125", "자산대체전표 완료");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";	//회계단위(조회)
        			arrParam[1]  = "GRID,grdFS_ASTFXM,dsAPPV_STAT,APPV_STAT";   //승인상태(그리드)
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	
        	if (this.dsFS_ASTFXM.getRowCount() < 1) return;

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsFS_ASTFLA=dsFS_ASTFLA";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASTFXM.setFocus();

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        /*-------------------+
         |  전표조회 팝업  |
         +-------------------*/
        this.fn_OpenSlip = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASTFXM.getColumn(e.row, "SLIP_NUMB"))) < 1) return;

        	if (this.fnc_GridColumnIndex(this.grdFS_ASTFXM, "SLIP_NUMB") == e.cell){
        		
        		var sSLIP_NUMB = this.fnc_Trim(this.dsFS_ASTFXM.getColumn(e.row, "SLIP_NUMB"));
        		var sResponse = this.gfn_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL);

        	}
        	
        }

        /*------------------------------------+
         |  자산대체전표삭제 클릭시 처리  |
         +------------------------------------*/
        this.fn_SlipDelete = function (obj,e) {
        	
        	if (this.dsFS_ASTFXM.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "조회 후 전표를 삭제하세요!");
        		return;
        	}

        	var sAcctUnit = this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "ACCT_UNIT"));
        	var sSlipNumb = this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "SLIP_NUMB"));
        	
        	if (this.fnc_Length(sSlipNumb) < 1) {
        		this.fnc_Message("TMM125", "전표생성이 되지 않았습니다.\n\n삭제가 불가합니다.!");
        		return;
        	}

        	var sMethodName = "SLIPDELETE00";
        	var sInDataSet  = "dsFS_ASTFXM=dsFS_ASTFXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASTFXM.setFocus();
        	
        }

        /*-------------------------------+
         |  자산대체등록 클릭시 처리  |
         +-------------------------------*/
        this.fn_AsstAdd = function (obj,e) {
        	
        	if (this.fnc_DatasetChangeCheck("dsFS_ASTFXM")) {
        		this.fnc_Message("TMM125", "자산대체전표를 삭제하려고 선택한 자료가 있습니다\n.취소 후 등록 작업을 실행 하세요!");
        		return;
        	}
        	var sName 		= "FSMF0010P01";
        	var sFormURL 	= "fsm::FSMF0010P01.xfdl";
        	var sOpenStyle  = "modeless=false";           			//Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";           			//Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";                  			//원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";                 			//원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=990";               			//현재 반응 없음
        		sOpenStyle += ",height=800";              			//현재 반응 없음
        		sOpenStyle += ",title=true";              			//Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=건설중자산대체등록";   //Form Title Bar Visible 여부
        		sOpenStyle += ",status=false";            			//Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";          			//Form Title Bar Visible 여부
        		
        	var objArgumentList = {

        	};
        	
        	this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");
        	
        }

        /*--------------------------------+
         |  자산대체등록 팝업 후 처리  |
         +--------------------------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {

        	if (sPopupId == "FSMF0010P01") {
        		this.fn_Search(); //조회 태우기
        	}
        	
        }

        this.fn_SlipCreate = function(obj,e)
        {
            if (this.dsFS_ASTFXM.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "조회 후 전표를 삭제하세요!");
        		return;
        	}

        	var sAcctUnit = this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "ACCT_UNIT"));
        	var sSlipNumb = this.fnc_Trim(this.dsFS_ASTFXM.getColumn(this.dsFS_ASTFXM.rowposition, "SLIP_NUMB"));
        	
        	if (this.fnc_Length(sSlipNumb) > 1) {
        		this.fnc_Message("TMM125", "이미 전표생성이 되어 있습니다.");
        		return;
        	}

        	var sMethodName = "SLIP00";
        	var sInDataSet  = "dsFS_ASTFXM=dsFS_ASTFXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASTFXM.setFocus();
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASTFXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdFS_ASTFXM.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRASTF_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRASTF_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Div0.btnAsstAdd.addEventHandler("onclick", this.fn_AsstAdd, this);
            this.Div0.btnSlipDelete.addEventHandler("onclick", this.fn_SlipDelete, this);
            this.Div0.btnSlipCreate00.addEventHandler("onclick", this.fn_SlipCreate, this);

        };

        this.loadIncludeScript("FSMF0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
