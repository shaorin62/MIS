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
                this.set_name("FAMA0050");
                this.set_titletext("관리항목등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">COND_KIND</Col><Col id=\"DSNAME\">dsCOND_KIND</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">INPT_GUBN</Col><Col id=\"DSNAME\">dsINPT_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRUSEX_YSNO</Col><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ACCTXF", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COND_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_KIND\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INPT_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_IDXX\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_COLM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"HELP_TEXT\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"OCON_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_ACCTXF", "absolute", "8", "128", null, null, "25", "121", this);
            obj.set_autoenter("select");
            obj.set_binddataset("dsTA_ACCTXF");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("none");
            obj.set_cssclass("styGrid01");
            obj.style.set_background("transparent");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\"/><Column size=\"180\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"관리코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"관리코드명\"/><Cell col=\"2\" displaytype=\"text\" text=\"관리코드구분\"/><Cell col=\"3\" displaytype=\"text\" text=\"팝업코드\"/><Cell col=\"4\" displaytype=\"text\" text=\"공통코드\"/><Cell col=\"5\" displaytype=\"text\" text=\"입력형태\"/><Cell col=\"6\" displaytype=\"text\" text=\"관리항목컬럼\"/><Cell col=\"7\" displaytype=\"text\" text=\"사용여부\"/><Cell col=\"8\" displaytype=\"text\" text=\"도움말\"/><Cell col=\"9\" text=\"구관리코드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:COND_CODE\" editlimit=\"50\" editimemode=\"english\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align: left;\" text=\"bind:COND_NAME\" editlimit=\"50\" editimemode=\"english\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:COND_KIND\" editlimit=\"4\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align: center;\" text=\"bind:COMB_IDXX\" editlimit=\"15\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:COMM_CODE\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align: left;\" text=\"bind:INPT_GUBN\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:COND_COLM\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;\" text=\"bind:COND_YSNO\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align: left;\" text=\"bind:HELP_TEXT\" editlimit=\"100\"/><Cell col=\"9\" style=\"align:center;\" text=\"bind:OCON_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "28", "71", "89", "22", null, null, this);
            obj.set_taborder("5");
            obj.set_text("관리코드/명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOND_NAME", "absolute", "117", "71", "320", "22", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", null, null, "91", "25", "15", this);
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbINPT_GUBN", "absolute", "618", null, "150", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Static("Static6", "absolute", "524", null, "114", "21", null, "50", this);
            obj.set_taborder("12");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCOND_YSNO", "absolute", "891", null, "16", "21", null, "76", this);
            obj.set_taborder("11");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTA_ACCTXF");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "797", null, "90", "21", null, "76", this);
            obj.set_taborder("15");
            obj.set_text("사용여부 ");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHELP_TEXT", "absolute", "95", null, "674", "21", null, "24", this);
            obj.set_taborder("22");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "28", null, "66", "21", null, "24", this);
            obj.set_taborder("17");
            obj.set_text("도움말");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMB_IDXX", "absolute", "95", null, "120", "21", null, "50", this);
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("staCOMB_IDXX", "absolute", "28", null, "66", "21", null, "50", this);
            obj.set_taborder("19");
            obj.set_text("팝업코드");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "524", null, "114", "21", null, "76", this);
            obj.set_taborder("21");
            obj.set_text("관리코드구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOND_CODE", "absolute", "95", null, "120", "21", null, "76", this);
            obj.set_taborder("7");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCOND_KIND", "absolute", "618", null, "150", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_ACCTXF");

            obj = new Edit("edtCOND_NAME", "absolute", "324", null, "170", "21", null, "76", this);
            obj.set_taborder("8");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_ACCTXF");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "243", null, "114", "21", null, "76", this);
            obj.set_taborder("24");
            obj.set_text("관리코드명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("stBSNS_NUMB", "absolute", "28", null, "66", "21", null, "76", this);
            obj.set_taborder("25");
            obj.set_text("관리코드");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "797", null, "92", "21", null, "50", this);
            obj.set_taborder("26");
            obj.set_text("관리항목컬럼");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOND_COLM", "absolute", "891", null, null, "21", "46", "50", this);
            obj.set_taborder("20");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_ACCTXF");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("관리항목등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("28");
            obj.set_text("홈 > 재무관리 > 재무기준정보 > 관리항목등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "109", "61", "8", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("38");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("39");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "573", "596", "80", "15", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "9", "629", "30", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "1141", "626", "20", "60", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "797", null, "92", "21", null, "24", this);
            obj.set_taborder("43");
            obj.set_text("구관리코드");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOCON_CODE", "absolute", "891", null, null, "21", "46", "24", this);
            obj.set_taborder("23");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_ACCTXF");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "477", "71", "69", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("사용여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCOND_YSNO", "absolute", "546", "71", "95", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.getSetter("binddataset").set("dsTA_ACCTXM");
            obj.set_autoselect("true");

            obj = new Edit("edtCOMM_CODE", "absolute", "324", null, "170", "21", null, "50", this);
            obj.set_taborder("14");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_ACCTXF");
            this.addChild(obj.name, obj);

            obj = new Static("staCOMM_CODE", "absolute", "243", null, "74", "21", null, "50", this);
            obj.set_taborder("45");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("관리항목등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtCOND_NAME_value","edtCOND_NAME","value","dsTA_ACCTXF","COND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbCOND_KIND_value","cmbCOND_KIND","value","dsTA_ACCTXF","COND_KIND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOND_CODE_value","edtCOND_CODE","value","dsTA_ACCTXF","COND_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMB_IDXX_value","edtCOMB_IDXX","value","dsTA_ACCTXF","COMB_IDXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHELP_TEXT_value","edtHELP_TEXT","value","dsTA_ACCTXF","HELP_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkCOND_YSNO_value","chkCOND_YSNO","value","dsTA_ACCTXF","COND_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbINPT_GUBN_value","cmbINPT_GUBN","value","dsTA_ACCTXF","INPT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOND_COLM_value","edtCOND_COLM","value","dsTA_ACCTXF","COND_COLM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtOCON_CODE","value","dsTA_ACCTXF","OCON_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtCOMM_CODE","value","dsTA_ACCTXF","COMM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FAMA0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0050.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAMA0050 관리항목등록
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

        /*************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부 *
         ***********************/
        this.sBUTTONLIST  = "TTTTTTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMA0050"; 

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
         *                                         공통 Event 처리 부분                                 *
         **************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.edtSHRCOND_NAME.setFocus();
        	
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
        	this.fnc_DatasetClear("dsTA_ACCTXF"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_ACCTXF=dsTA_ACCTXF";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_ACCTXF.setFocus();
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsTA_ACCTXF.addRow();
        	this.dsTA_ACCTXF.setColumn(iRow, "COND_YSNO", "1");
        	this.edtCOND_CODE.setFocus();
        	
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTA_ACCTXF.deleteRow(this.dsTA_ACCTXF.rowposition);
        	this.grdTA_ACCTXF.setFocus();
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTA_ACCTXF");
        	this.grdTA_ACCTXF.setFocus();
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_ACCTXF=dsTA_ACCTXF:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_ACCTXF.setFocus(); 

        }

        /*-------------------------+
         |  08.엑셀 버튼 클릭 時 |
         --------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時 |
         +-------------------------*/
        this.fn_Print = function (obj) {
             //기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_ACCTXF", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
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
         *                                      공통 Function 처리 부분                                  *
         **************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_ACCTXF")) return this.fnc_Message("TMM023");	
        	return true;

        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if ( this.dsTA_ACCTXF.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = "관리코드명 : (" + this.fnc_Trim(this.dsTA_ACCTXF.getColumn(this.dsTA_ACCTXF.rowposition, "COND_NAME")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsTA_ACCTXF")) {
        		this.fnc_Message("TMM003"); 
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsTA_ACCTXF.getRowCount(); i++){
        		
        		if (this.dsTA_ACCTXF.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;		
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXF.getColumn(i, "COND_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "관리코드", this.dsTA_ACCTXF, i, this.edtCOND_CODE, "COND_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXF.getColumn(i, "COND_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "관리코드명", this.dsTA_ACCTXF, i, this.edtCOND_NAME, "COND_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXF.getColumn(i, "COND_KIND"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "관리코드구분", this.dsTA_ACCTXF, i, this.cmbCOND_KIND, "COND_KIND");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXF.getColumn(i, "HELP_TEXT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "도움말", this.dsTA_ACCTXF, i, this.edtHELP_TEXT, "HELP_TEXT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXF.getColumn(i, "INPT_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "입력형태", this.dsTA_ACCTXF, i, this.cmbINPT_GUBN, "INPT_GUBN");
        		}

        		if ((this.dsTA_ACCTXF.getColumn(i, "COND_KIND") == "HELP") || (this.dsTA_ACCTXF.getColumn(i, "COND_KIND") == "CCOM")) {
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXF.getColumn(i, "COMB_IDXX"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "조건입력형태가 " + this.cmbCOND_KIND.text + " 일 경우 팝업코드", this.dsTA_ACCTXF, i, this.edtCOMB_IDXX, "");
        			}
        			
        			if (this.dsTA_ACCTXF.getColumn(i, "COND_KIND") == "CCOM") {
        				if (this.fnc_Length(this.fnc_Trim(this.dsTA_ACCTXF.getColumn(i, "COMM_CODE"))) < 1) {
        					return this.fnc_CheckPostAction("TMM072", "공통코드", this.dsTA_ACCTXF, i, this.edtCOMM_CODE, "COMM_CODE");
        				}
        			}
        			
        		}
        		
        	}
        	
        	return true;
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " COND_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCOND_NAME.value));
        		sReturnString += " COND_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCOND_YSNO.value));
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		
        	}

        	return sReturnString;
        }

        /*---------------------------------------+
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.stInformation, this.dsTA_ACCTXF.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_ACCTXF.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbCOND_KIND,dsCOND_KIND,0";
        			arrParam[1] = "COMBO,cmbINPT_GUBN,dsINPT_GUBN,0";
        			arrParam[2] = "GRID,grdTA_ACCTXF,dsCOND_KIND,COND_KIND";
        			arrParam[3] = "GRID,grdTA_ACCTXF,dsINPT_GUBN,INPT_GUBN";
        			arrParam[4] = "COMBO,cmbSHRCOND_YSNO,dsSHRUSEX_YSNO,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	
        	var nRow = e.newrow;
        	if (nRow == -1) return;

        	if (this.dsTA_ACCTXF.getRowCount() < 1) return;
        	
        	if (this.fnc_ToUpper(this.dsTA_ACCTXF.getRowType(this.dsTA_ACCTXF.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_SetReadonly(this.edtCOND_CODE, false);
        	} else {
        		this.fnc_SetReadonly(this.edtCOND_CODE, true);
        	}

        	if ((this.dsTA_ACCTXF.getColumn(nRow, "COND_KIND") == "HELP") || (this.dsTA_ACCTXF.getColumn(nRow, "COND_KIND") == "CCOM")) {
        		
        		this.staCOMB_IDXX.set_cssclass("styFormItemCapBE");
        		this.fnc_SetReadonly(this.edtCOMB_IDXX, false);
        		this.fnc_SetReadonly(this.cmbINPT_GUBN, false);
        		
        		if (this.dsTA_ACCTXF.getColumn(nRow, "COND_KIND") == "CCOM") {
        			this.staCOMM_CODE.set_cssclass("styFormItemCapBE");
        			this.fnc_SetReadonly(this.edtCOMM_CODE, false);
        		} else {
        			this.staCOMM_CODE.set_cssclass("styFormItemCap");
        			this.fnc_SetReadonly(this.edtCOMM_CODE, true);
        		}
        			
        	} else {
        	
        		this.staCOMB_IDXX.set_cssclass("styFormItemCap");
        		this.staCOMM_CODE.set_cssclass("styFormItemCap");
        		this.fnc_SetReadonly(this.edtCOMB_IDXX, true);
        		this.fnc_SetReadonly(this.edtCOMM_CODE, true);
        		this.fnc_SetReadonly(this.cmbINPT_GUBN, true);		
        		
        	}

        	var iRow = this.dsTA_ACCTXF.rowposition;
        	var sRow = this.dsCOND_KIND.findRow("COMD_CODE", this.dsTA_ACCTXF.getColumn(iRow, "COND_KIND"));
        	this.dsINPT_GUBN.filter("REF1_FILD=='" + this.dsCOND_KIND.getColumn(sRow, "REF1_FILD")+"'");

        }

        
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------------------------+
         |  입력항목 관리코드 구분 변경시 |
         +------------------------------------*/
        this.cmbCOND_KIND_onitemchanged = function (obj,e) {
        	
        	var iRow = this.dsTA_ACCTXF.rowposition;
        	var sRow = this.dsCOND_KIND.findRow("COMD_CODE", this.dsTA_ACCTXF.getColumn(iRow, "COND_KIND"));

        	//관리코드 부분이 팝업이나 공통코드이면 팝업/공통코드 입력 필수 처리
        	if ((this.dsTA_ACCTXF.getColumn(iRow, "COND_KIND") == "HELP") || (this.dsTA_ACCTXF.getColumn(iRow, "COND_KIND") == "CCOM")) {
        		
        		this.staCOMB_IDXX.set_cssclass("styFormItemCapBE");
        		this.fnc_SetReadonly(this.edtCOMB_IDXX, false);
        		this.fnc_SetReadonly(this.cmbINPT_GUBN, false);
        		
        		if (this.dsTA_ACCTXF.getColumn(iRow, "COND_KIND") == "CCOM") {
        			this.staCOMM_CODE.set_cssclass("styFormItemCapBE");
        			this.fnc_SetReadonly(this.edtCOMM_CODE, false);
        		} else {
        			this.staCOMM_CODE.set_cssclass("styFormItemCap");
        			this.fnc_SetReadonly(this.edtCOMM_CODE, true);
        			
        			this.dsTA_ACCTXF.setColumn(iRow, "COMM_CODE", "");
        		}

        	} else {
        	
        		this.staCOMB_IDXX.set_cssclass("styFormItemCap");
        		this.staCOMM_CODE.set_cssclass("styFormItemCap");
        		this.fnc_SetReadonly(this.edtCOMB_IDXX, true);
        		this.fnc_SetReadonly(this.edtCOMM_CODE, true);
        		this.fnc_SetReadonly(this.cmbINPT_GUBN, true);

        		//팝업이나 공통코드가 아니면 팝업/공통코드 초기화
        		this.dsTA_ACCTXF.setColumn(iRow, "COMB_IDXX", "");
        		this.dsTA_ACCTXF.setColumn(iRow, "COMB_NAME", "");
        		this.dsTA_ACCTXF.setColumn(iRow, "COMM_CODE", "");
        		
        	}

        	this.dsINPT_GUBN.filter("REF1_FILD=='" + this.dsCOND_KIND.getColumn(sRow, "REF1_FILD")+"'");

        	if (this.dsINPT_GUBN.rowcount > 0) {
        	
        		this.fnc_SetReadonly(this.cmbINPT_GUBN, false);
        		this.cmbINPT_GUBN.set_value("");
        		
        	} else {
        	
        		this.fnc_SetReadonly(this.cmbINPT_GUBN, true);
        		this.cmbINPT_GUBN.set_value("");
        		
        	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_ACCTXF.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRCOND_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbINPT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtHELP_TEXT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMB_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCOND_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCOND_KIND.addEventHandler("onitemchanged", this.cmbCOND_KIND_onitemchanged, this);
            this.edtCOND_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOND_COLM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtOCON_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCOND_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMM_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMA0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
