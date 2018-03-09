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
                this.set_name("FAME0040");
                this.set_titletext("초기이월잔액(계정)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_MAMNTM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"ConstColumn1\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"ConstColumn2\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"ConstColumn3\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_DEPT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CHAX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_CHAX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_DAEX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">CURR_GUBN</Col><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\">회계단위</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0001</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ACCTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("4");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MAMNTM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_MAMNTM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.set_tooltiptype("default");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"78\"/><Column size=\"170\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"79\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"회계단위\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"사업장\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"계정과목\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계정과목명\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"화폐단위\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"차변금액\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"대변금액\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"외화차변\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"외화대변\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"expr:Eco.decode(dataset.getRowType(currow), Dataset.ROWTYPE_INSERT, 'combo', 'none')\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACCT_UNIT\" editlimit=\"4\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:Eco.decode(dataset.getRowType(currow), Dataset.ROWTYPE_INSERT, 'combo', 'none')\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACCT_GUBN\" editlimit=\"4\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ACCT_INTL\" editlimit=\"10\" autosizecol=\"none\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"expr:Eco.decode(dataset.getRowType(currow), Dataset.ROWTYPE_INSERT, 'text', 'none')\" style=\"align: left;\" text=\"bind:ACCT_NAME\" editlimit=\"200\" editimemode=\"hangul\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"expr:Eco.decode(dataset.getRowType(currow), Dataset.ROWTYPE_INSERT, 'combo', 'none')\" style=\"align: center;\" text=\"bind:CURR_GUBN\" editlimit=\"10\" autosizecol=\"none\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SLIP_CHAX\" editlimit=\"17\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SLIP_DAEX\" editlimit=\"17\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:FORI_CHAX\" editlimit=\"17\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:FORI_DAEX\" editlimit=\"17\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_CHAX&quot;)\" mask=\"###,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_DAEX&quot;)\" mask=\"###,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;FORI_CHAX&quot;)\" mask=\"###,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;FORI_DAEX&quot;)\" mask=\"###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static0", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "617", "71", "160", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "512", "71", "80", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_maxlength("10");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "443", "71", "76", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "265", "71", "76", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("회계연도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpSHRACCT_INTL", "absolute", "594", "71", "22", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileDown", "absolute", "8", "35", "98", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload", "absolute", "109", "35", "86", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("초기이월잔액(계정)");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("21");
            obj.set_text("홈 > 재무관리 > 기본정보 > 초기이월잔액(계정)");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("31");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
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

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "196", "61", "40", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_YEAR", "absolute", "334", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("초기이월잔액(계정)");
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
        this.addIncludeScript("FAME0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAME0040.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAME0040 초기이월잔액(계정)
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

        /**************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTTTTTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAME0040";
        this.sXlsUpload   = "Y";        // 엑셀 업로드시 팝업 체크

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
        /*--------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항 |
         +--------------------------------------*/
         this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	this.calSHRACCT_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4));
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
        	this.fnc_DatasetClear("dsTA_MAMNTM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_MAMNTM=dsTA_MAMNTM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAMNTM.setFocus();
        	
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj){

        	var uRow = this.dsTA_MAMNTM.rowposition;
        	var iRow = this.dsTA_MAMNTM.insertRow(uRow + 1);

        	this.dsTA_MAMNTM.rowposition = iRow;
        	
        	this.dsTA_MAMNTM.setColumn(iRow, "ACCT_DATE", this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4) + "0000");
        	this.dsTA_MAMNTM.setColumn(iRow, "ACCT_GUBN", this.dsTA_MAMNTM.getColumn(uRow, "ACCT_GUBN")); //사업장
        	this.dsTA_MAMNTM.setColumn(iRow, "ACCT_UNIT", this.dsTA_MAMNTM.getColumn(uRow, "ACCT_UNIT")); //회계단위
        	this.dsTA_MAMNTM.setColumn(iRow, "CURR_GUBN", "KRW");
        	this.dsTA_MAMNTM.setColumn(iRow, "SLIP_CHAX", 0);
        	this.dsTA_MAMNTM.setColumn(iRow, "SLIP_DAEX", 0);
        	this.dsTA_MAMNTM.setColumn(iRow, "FORI_CHAX", 0);
        	this.dsTA_MAMNTM.setColumn(iRow, "FORI_DAEX", 0);
        	this.grdTA_MAMNTM.setFocus();

        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTA_MAMNTM.deleteRow(this.dsTA_MAMNTM.rowposition);
        	this.grdTA_MAMNTM.setFocus();
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTA_MAMNTM");
        	this.grdTA_MAMNTM.setFocus();
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_MAMNTM=dsTA_MAMNTM:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAMNTM.setFocus();

        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*-------------------------+
         |  09.인쇄 버튼 클릭 時 |
         +-------------------------*/
        this.fn_Print = function (obj) {
        	//기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess =  function(obj,e) {
        	
        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_MAMNTM", this);
        		
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e){
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
         *                                      공통 Function 처리 부분                                 *
         **************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_MAMNTM")) return this.fnc_Message("TMM023");

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);		
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_YEAR.value)) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계연도", this.calSHRACCT_YEAR);		
        	}
        	
        	return true;
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if ( this.dsTA_MAMNTM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText  = "계정과목 : (" + this.dsTA_MAMNTM.getColumn(this.dsTA_MAMNTM.rowposition, "ACCT_INTL") + "), 계정명 : (";
        		sQuestionText += this.fnc_Trim(this.dsTA_MAMNTM.getColumn(this.dsTA_MAMNTM.rowposition, "ACCT_NAME"))+")";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*--------------------+
         |  저장 여부 체크! |
         +--------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!(this.fnc_DatasetChangeCheck("dsTA_MAMNTM"))) {	
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	this.fn_Search_Acct();	//기표 계정코드 조회

        	for (var i = 0; i < this.dsTA_MAMNTM.getRowCount(); i++){

        		if (this.dsTA_MAMNTM.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		var sAcct_Intl = this.dsTA_MAMNTM.getColumn(i, "ACCT_INTL");
        		
        		if (this.dsTA_ACCTXM.getCaseCount("ACCT_INTL == '" + sAcct_Intl + "'") < 1) {
        			return this.fnc_CheckPostAction("TMM300", "전표등록 불가능한 계정과목입니다. [" + sAcct_Intl + "]", this.dsTA_MAMNTM, i, this.grdTA_MAMNTM, "ACCT_NAME");			
        		}
        		
        		if ((this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTM.getColumn(i, "ACCT_DATE"))) < 8 ) || (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_YEAR.value))) < 4 ) {
        			return this.fnc_CheckPostAction("TMM072", "회계연도", this.dsTA_MAMNTM, i, this.calSHRACCT_YEAR, "ACCT_DATE");			
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTM.getColumn(i, "ACCT_UNIT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsTA_MAMNTM, i, this.grdTA_MAMNTM, "ACCT_UNIT");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTM.getColumn(i, "ACCT_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사업장", this.dsTA_MAMNTM, i, this.grdTA_MAMNTM, "ACCT_GUBN");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTM.getColumn(i, "ACCT_INTL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정과목", this.dsTA_MAMNTM, i, this.grdTA_MAMNTM, "ACCT_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTM.getColumn(i, "CURR_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "화폐단위", this.dsTA_MAMNTM, i, this.grdTA_MAMNTM, "CURR_GUBN");
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
        	
        		sReturnString  = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4));
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.cmbSHRACCT_UNIT.value);
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.edtSHRACCT_INTL.value);

        
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
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
        this.fn_PostProcess = function (sMethodName){
        	
        	if (sMethodName == "SEARCH00"){
        		
        		this.fnc_Information(this.stInformation, this.dsTA_MAMNTM.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsTA_MAMNTM.rowcount);
        	
        	} else if (sMethodName == "GetCommCode"){
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";	 //회계단위(조회)
        			arrParam[1] = "GRID,grdTA_MAMNTM,dsACCT_UNIT,ACCT_UNIT"; //회계단위(그리드)
        			arrParam[2] = "GRID,grdTA_MAMNTM,dsCURR_GUBN,CURR_GUBN"; //화폐단위(그리드)
        		this.fnc_CommonCodeInnerBind(arrParam);	
        		
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdTA_MAMNTM,dsACCT_GUBN,ACCT_GUBN"; //사업장(그리드)
        		this.fnc_UserComboInnerBind(arrParam);

        	} else if (sMethodName == "SAVE00"){
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	}
        	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        /*----------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            // 조회조건 - 계정과목(Popup)
            if ((obj.name == "ImgHelpSHRACCT_INTL") || (obj.name == "edtSHRACCT_NAME")) {

                arrParam[0] = "FAM0031";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACCT_NAME";
                arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_NAME";
                arrParam[6] = "0,1";

            } else if(obj.name == "grdTA_MAMNTM") {
           
        		if (sColumnID == "ACCT_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "ACCT_NAME") {
        		
        			arrParam[0] = "FAM0031";
        			arrParam[1] = "";
        			arrParam[2] = "ACCT_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTA_MAMNTM";
        			arrParam[5] = "ACCT_INTL,ACCT_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		}
        			
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*-----------------------+
         |  그리드 팝업 이벤트 |
         +-----------------------*/
        this.dsTA_MAMNTM_oncolumnchanged = function(obj,e) {

        	//관리코드팝업
        	if (e.columnid == "ACCT_NAME") this.fn_HelpDialoge(this.grdTA_MAMNTM, "YES" ,e.oldvalue, e.columnid);

        }

        /*--------------------------------+
         |  양식파일 다운로드 클릭 時  |
         +--------------------------------*/
        this.fn_ExcelFileDown = function (obj,e){
        	
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);
        	
        }

        /*------------------------------+
         |  양식파일 업로드 클릭 時  |
         +------------------------------*/
        this.fn_ExcelUpLoad = function (obj,e){
        	
        	if (!this.fn_SearchItemCheck()) return;
        	
        	if (this.fnc_Message("TMM140", "[회계연도 " + this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4) + "] 초기이월잔액(계정) 자료를 업로드 하시겠습니까?") == false) return;
        	
        	this.fnc_DatasetClear("dsTA_MAMNTM");
        	this.fnc_ExcelUpload("dsTA_MAMNTM", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }

        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	
        	this.dsTA_MAMNTM.set_enableevent(false);
        	this.dsTA_MAMNTM.set_updatecontrol(false);
        	
        	for (var i = 0; i < this.objDsImportTemp.getRowCount(); i++) {
        		
        		var iRow = this.dsTA_MAMNTM.addRow();
        		
        		this.dsTA_MAMNTM.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		//this.dsTA_MAMNTM.setColumn(iRow, "No", iRow);
        		this.dsTA_MAMNTM.setColumn(iRow, "ACCT_DATE", this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4) + "0000"); //기준년월
        		this.dsTA_MAMNTM.setColumn(iRow, "ACCT_UNIT", this.objDsImportTemp.getColumn(i, 0)); //회계단위
        		this.dsTA_MAMNTM.setColumn(iRow, "ACCT_GUBN", this.objDsImportTemp.getColumn(i, 1)); //브랜드
        		this.dsTA_MAMNTM.setColumn(iRow, "ACCT_INTL", this.objDsImportTemp.getColumn(i, 2)); //계정과목
        		this.dsTA_MAMNTM.setColumn(iRow, "CURR_GUBN", this.objDsImportTemp.getColumn(i, 3)); //화폐단위
        		this.dsTA_MAMNTM.setColumn(iRow, "SLIP_CHAX", this.objDsImportTemp.getColumn(i, 4)); //차변금액
        		this.dsTA_MAMNTM.setColumn(iRow, "SLIP_DAEX", this.objDsImportTemp.getColumn(i, 5)); //대변금액
        		this.dsTA_MAMNTM.setColumn(iRow, "FORI_CHAX", this.objDsImportTemp.getColumn(i, 6)); //외화차변
        		this.dsTA_MAMNTM.setColumn(iRow, "FORI_DAEX", this.objDsImportTemp.getColumn(i, 7)); //외화대변
        		
        	}
        	this.objDsImportTemp.clear();
        	
        	this.dsTA_MAMNTM.set_updatecontrol(true);
        	this.dsTA_MAMNTM.set_enableevent(true);
        	
        	this.dsTA_MAMNTM.set_rowposition(0);
        	this.grdTA_MAMNTM.setFocus();

        	this.sXlsUpload = "Y";
        	this.stInformation.set_text("[" + (this.dsTA_MAMNTM.getRowCount() + "]건의 데이터를 로드 했습니다."));
        	
        }

        /*------------------+
         |  기표계정과목	|
         +------------------*/
        this.fn_Search_Acct = function () {

            this.fnc_DatasetClear("dsTA_ACCTXM");
            var sMethodName = "SEARCH10";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_ACCTXM=dsTA_ACCTXM ";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        }

        this.calSHRACCT_YEAR_onspin = function(obj,e) {
        	
        	obj.setFocus();
        	this.fnc_DatasetClear("dsTA_MAMNTM");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_MAMNTM.addEventHandler("oncolumnchanged", this.dsTA_MAMNTM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_MAMNTM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.ImgHelpSHRACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btnFileDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.btnExcelUpload.addEventHandler("onclick", this.fn_ExcelUpLoad, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRACCT_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_YEAR.addEventHandler("onspin", this.calSHRACCT_YEAR_onspin, this);

        };

        this.loadIncludeScript("FAME0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
