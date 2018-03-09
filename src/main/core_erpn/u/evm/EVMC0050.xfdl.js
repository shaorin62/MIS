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
                this.set_name("EVMC0050");
                this.set_titletext("조직평가현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">EVM0020</Col><Col id=\"DSNAME\">dsSHREVAL_NAME</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_DTETXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTMN_EMNR\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DTMN_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"EVAL_STNM\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"EVAL_DTCD\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"EVAL_DTNM\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"WES1_EMNR\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_OPOS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SBM1_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_SCOR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WGE1_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_EMNR\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_OPOS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SBM2_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_SCOR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WGE2_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSCM_SCOR\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PSCM_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"FACH_EVSC\" size=\"32\" prop=\"default\" type=\"STRING\"/><Column id=\"FACH_CODE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRG_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_WGEGXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"WGEG_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_SCOR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ENDX_SCOR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ABLT_EVSC\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EVAL_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_DTETPR", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SECT_NAME\" size=\"2000\" prop=\"default\" type=\"STRING\"/><Column id=\"SEMPL_NAME\" size=\"2000\" prop=\"default\" type=\"STRING\"/><Column id=\"AEMPL_NAME\" size=\"2000\" prop=\"default\" type=\"STRING\"/><Column id=\"BEMPL_NAME\" size=\"2000\" prop=\"default\" type=\"STRING\"/><Column id=\"CEMPL_NAME\" size=\"2000\" prop=\"default\" type=\"STRING\"/><Column id=\"DEMPL_NAME\" size=\"2000\" prop=\"default\" type=\"STRING\"/><Column id=\"PRSN_CONT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_EVRTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SGDL_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AGDL_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BGDL_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CGDL_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DGDL_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRSN_CONT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SGDL_PERS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AGDL_PERS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BGDL_PERS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CGDL_PERS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DGDL_PERS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRSN_PERS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
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
            obj.set_text("조직평가현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 2메뉴");
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

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("평가종류");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVAL_NAME", "absolute", "96", "71", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
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

            obj = new Grid("grdEV_DTETXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsEV_DTETXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"소속\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서\"/><Cell col=\"2\" colspan=\"2\" text=\"팀장\"/><Cell col=\"4\" colspan=\"6\" text=\"1차평가\"/><Cell col=\"10\" colspan=\"6\" text=\"2차평가\"/><Cell col=\"16\" colspan=\"2\" text=\"인사위원회\"/><Cell col=\"18\" colspan=\"2\" text=\"최종\"/><Cell row=\"1\" col=\"2\" text=\"사원번호\"/><Cell row=\"1\" col=\"3\" text=\"성명\"/><Cell row=\"1\" col=\"4\" text=\"사원번호\"/><Cell row=\"1\" col=\"5\" text=\"성명\"/><Cell row=\"1\" col=\"6\" text=\"직위\"/><Cell row=\"1\" col=\"7\" text=\"완료\"/><Cell row=\"1\" col=\"8\" text=\"점수\"/><Cell row=\"1\" col=\"9\" text=\"등급\"/><Cell row=\"1\" col=\"10\" text=\"사원번호\"/><Cell row=\"1\" col=\"11\" text=\"성명\"/><Cell row=\"1\" col=\"12\" text=\"직위\"/><Cell row=\"1\" col=\"13\" text=\"완료\"/><Cell row=\"1\" col=\"14\" text=\"점수\"/><Cell row=\"1\" col=\"15\" text=\"등급\"/><Cell row=\"1\" col=\"16\" cssclass=\"Cellgrd_WF_edit\" text=\"점수\"/><Cell row=\"1\" col=\"17\" text=\"등급\"/><Cell row=\"1\" col=\"18\" text=\"점수\"/><Cell row=\"1\" col=\"19\" text=\"등급\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:DTMN_EMNR\"/><Cell col=\"3\" text=\"bind:DTMN_NAME\"/><Cell col=\"4\" text=\"bind:WES1_EMNR\"/><Cell col=\"5\" text=\"bind:WES1_EMNM\"/><Cell col=\"6\" text=\"bind:WES1_OPOS\"/><Cell col=\"7\" text=\"bind:SBM1_YSNO\"/><Cell col=\"8\" text=\"bind:WES1_SCOR\"/><Cell col=\"9\" text=\"bind:WGE1_CODE\"/><Cell col=\"10\" text=\"bind:WES2_EMNR\"/><Cell col=\"11\" text=\"bind:WES2_EMNM\"/><Cell col=\"12\" text=\"bind:WES2_OPOS\"/><Cell col=\"13\" text=\"bind:SBM2_YSNO\"/><Cell col=\"14\" text=\"bind:WES2_SCOR\"/><Cell col=\"15\" text=\"bind:WGE2_CODE\"/><Cell col=\"16\" edittype=\"expr:GLRG_CODE =='Y' ? &quot;masknumber&quot; : &quot;none&quot;\" text=\"bind:PSCM_SCOR\" mask=\"###\" maskchar=\" \" editautoselect=\"true\"/><Cell col=\"17\" text=\"bind:PSCM_CODE\" combodataset=\"dsEV_WGEGXM\" combocodecol=\"WGEG_CODE\" combodatacol=\"WGEG_CODE\"/><Cell col=\"18\" edittype=\"none\" text=\"bind:FACH_EVSC\" mask=\"###\" maskchar=\" \"/><Cell col=\"19\" text=\"bind:FACH_CODE\" combodataset=\"dsEV_WGEGXM\" combocodecol=\"WGEG_CODE\" combodatacol=\"WGEG_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "426", "71", "21", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "449", "71", "100", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "344", "71", "80", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_enable("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "302", "71", "68", "21", null, null, this);
            obj.set_taborder("118");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("조직평가현황");

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
        this.addIncludeScript("EVMC0050.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("EVMC0050.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("EVMC0050.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	EVMC0050 조직평가현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.18		김석영		Initial Created.
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
        //include "script::lib_script_ubireport.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFTTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "EVMC0050"; 

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
        	this.fn_GetUserCombo("cmbSHREVAL_NAME");
        	this.cmbSHREVAL_NAME.set_index(0);
        	this.cmbSHREVAL_NAME.setFocus();

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
        	
        	this.fnc_DatasetClear("dsEV_DTETXM,dsEV_WGEGXM,dsEV_DTETPR,dsEV_EVRTXM");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsEV_DTETXM=dsEV_DTETXM dsEV_WGEGXM=dsEV_WGEGXM dsEV_DTETPR=dsEV_DTETPR dsEV_EVRTXM=dsEV_EVRTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
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
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsEV_DTETXM=dsEV_DTETXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdEV_TAEGXD.setFocus();

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

        	var reportfile = "/evm/EVMC0050R01.jrf";
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
        	var params  =  "STDS_YEAR#"   + this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "STDS_YEAR"));

        	var dataref = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/evm/EVMC0050_SEARCH00.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsEV_EVRTXM=dsEV_EVRTXM dsEV_DTETPR=dsEV_DTETPR"
        	dataref[0].arg = this.fn_CreateArgument("REPORT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);

        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsEV_DTETXM", this);
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
            if (this.fnc_DatasetChangeCheck("dsEV_DTETXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
        	}
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsEV_DTETXM")) {
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
        	
        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value));
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 	
        		
        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		
        	} else if (sKind == "REPORT00") {	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value));
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
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
        	    this.fnc_Information(this.stInformation, this.dsEV_DTETXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsEV_DTETXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.dsEV_DTETXM.setFocus(); 

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "REPORT00") {
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        		
        		arrParam[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        		this.fnc_UserComboInnerBind(arrParam);
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        
        /***************************************************************************************************
         *                                     사용자 정의 Function 처리 부분                           *
         ***************************************************************************************************/
        /*-------------------------------+
         | 조회조건 평가명 콤보|
         +------------------------------*/
        this.fn_GetUserCombo = function (oComboId) {
        	var arrParam  = new Array();
        	var arrParam2 = new Array();
        	
        	arrParam[0] = this.dsUserCombo.getColumn(0, "DSNAME");
        	arrParam[1] = this.dsUserCombo.getColumn(0, "COMBOID");
        	arrParam[2] = this.dsUserCombo.getColumn(0, "HEADFLAG");
        	arrParam[3] = this.dsUserCombo.getColumn(0, "USEYSNO");
        	arrParam[4] = this.dsUserCombo.getColumn(0, "PARAM");
        	    	    	        
            arrParam2[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        			
        	this.fnc_GetUserComboSingle(arrParam, arrParam2);
        	
        }

        this.cmbSHREVAL_NAME_onitemchanged = function(obj,e)
        {
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO")); // 마감여부
            	
        	if(sCLSE_YSNO == '1'){
        		this.grdEV_DTETXM.set_readonly(true);
        	} else {
        		this.grdEV_DTETXM.set_readonly(false);
        	}
        	
        	this.fn_Search();
        }

        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // SHR부서
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        	
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // SHR사원
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        	
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        
        this.dsEV_DTETXM_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "PSCM_SCOR"){
        		var iWRGD_EVSC = parseInt(e.newvalue);		
        		var sWES1_EMNR = this.dsEV_WGEGXM.getColumn(e.row, "WES1_EMNR")
        		var sWES2_EMNR = this.dsEV_WGEGXM.getColumn(e.row, "WES2_EMNR")
        		var iFACH_EVSC = 0;
        		var iWES1_SCOR = parseInt(this.dsEV_DTETXM.getColumn(e.row, "WES1_SCOR"));
        		var iWES2_SCOR = parseInt(this.dsEV_DTETXM.getColumn(e.row, "WES2_SCOR"));		
        				
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_DTETXM.getColumn(e.row, "WES1_SCOR"))) < 1) iWES1_SCOR = 0;
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_DTETXM.getColumn(e.row, "WES2_SCOR"))) < 1) iWES2_SCOR = 0;
        		if (this.fnc_Length(this.fnc_Trim(sWES2_EMNR)) < 1) {
        		 	iFACH_EVSC = (iWES1_SCOR * 0.9) + (iWRGD_EVSC * 0.1);
        		} else {
        		    iFACH_EVSC = (iWES1_SCOR * 0.6) + (iWES2_SCOR * 0.3) + (iWRGD_EVSC * 0.1);
        		}
        				
        		this.dsEV_DTETXM.setColumn(e.row, "PSCM_CODE", "");		
        		this.dsEV_DTETXM.setColumn(e.row, "FACH_CODE", "");
        		this.dsEV_DTETXM.setColumn(e.row, "FACH_EVSC", iFACH_EVSC);		
        		
        		for (var i = 0; i < this.dsEV_WGEGXM.getRowCount(); i++) {
        			var iBGIN_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "BGIN_SCOR")); 
        			var iENDX_SCOR = parseInt(this.dsEV_WGEGXM.getColumn(i, "ENDX_SCOR")); 
        			var sWGEG_CODE = this.dsEV_WGEGXM.getColumn(i, "WGEG_CODE") 
        			
        			if(iWRGD_EVSC >= iBGIN_SCOR && iWRGD_EVSC <= iENDX_SCOR){
        				this.dsEV_DTETXM.setColumn(e.row, "PSCM_CODE", sWGEG_CODE);
        			}
        			if(iFACH_EVSC >= iBGIN_SCOR && iFACH_EVSC <= iENDX_SCOR){
        				this.dsEV_DTETXM.setColumn(e.row, "FACH_CODE", sWGEG_CODE);
        			}
        			if(iWRGD_EVSC < 0 || iWRGD_EVSC > 100){
        				this.dsEV_DTETXM.setColumn(e.row, "PSCM_SCOR", null);
        				this.dsEV_DTETXM.setColumn(e.row, "FACH_CODE", null);
        		        this.dsEV_DTETXM.setColumn(e.row, "FACH_EVSC", null);		
        				return this.fnc_CheckPostAction("EVM019", "", this.dsEV_DTETXM, e.row, this.grdEV_DTETXM, "PSCM_SCOR");
        			}
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsEV_DTETXM.addEventHandler("oncolumnchanged", this.dsEV_DTETXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHREVAL_NAME.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHREVAL_NAME.addEventHandler("onitemchanged", this.cmbSHREVAL_NAME_onitemchanged, this);
            this.grdEV_DTETXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("EVMC0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
