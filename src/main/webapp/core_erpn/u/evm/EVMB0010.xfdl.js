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
                this.set_name("EVMB0010");
                this.set_titletext("목표설정서등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">EVM0020</Col><Col id=\"DSNAME\">dsSHREVAL_NAME</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_TAEGXD", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEQN_NUMB\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRWK_CNTT\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"PROB_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"EVBS_CNTT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TAIP_RATE\" size=\"3\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GLRS_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"WRGD_EVSC\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_WGETXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_OPOS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_SECT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES1_DEPT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_OPOS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_SECT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WES2_DEPT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVTT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EVRT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLRS_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLR1_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"GLR2_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_taborder("7");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("목표설정서등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("10");
            obj.set_text("홈 > 인사관리 > 업적평가");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "62", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
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

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_TAEGXD", "absolute", "8", "128", null, null, "25", "156", this);
            obj.set_taborder("1");
            obj.set_binddataset("dsEV_TAEGXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"289\"/><Column size=\"511\"/><Column size=\"197\"/><Column size=\"84\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"핵심과제\"/><Cell col=\"2\" text=\"추진방법및일정\"/><Cell col=\"3\" text=\"평가지표\"/><Cell col=\"4\" text=\"비중도(%)\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:SEQN_NUMB\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:PRWK_CNTT\" wordwrap=\"char\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PROB_CNTT\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:EVBS_CNTT\" wordwrap=\"char\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:TAIP_RATE\" mask=\"##0\" maskchar=\"_\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" style=\"align:center;\" text=\"합계\"/><Cell col=\"4\" style=\"align:right;\" expr=\"expr:dataset.getSum('TAIP_RATE')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("평가종류");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVAL_NAME", "absolute", "96", "71", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static31", "absolute", "305", "71", "68", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "374", "71", "80", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_enable("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "456", "71", "21", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "479", "71", "100", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC00", "absolute", "73", "35", "74", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("제출취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "169", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "48", "6", null, null, this);
            obj.set_taborder("135");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", null, null, "126", "25", "15", this);
            obj.set_taborder("139");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "28", null, "88", "21", null, "111", this);
            obj.set_taborder("140");
            obj.set_text("순번");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "316", null, "83", "21", null, "111", this);
            obj.set_taborder("141");
            obj.set_text("비중도(%)");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "28", null, "88", "21", null, "85", this);
            obj.set_taborder("143");
            obj.set_text("핵심과제");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRWK_CNTT", "absolute", "145", null, null, "21", "54", "85", this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "28", null, "120", "21", null, "59", this);
            obj.set_taborder("162");
            obj.set_text("추진방법 및 일정");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtPROB_CNTT", "absolute", "145", null, null, "56", "54", "24", this);
            obj.set_taborder("6");
            obj.set_imemode("hangul");
            obj.set_maxlength("400");
            obj.set_autoselect("true");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "557", null, "83", "21", null, "111", this);
            obj.set_taborder("164");
            obj.set_text("평가지표");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEVBS_CNTT", "absolute", "625", null, null, "21", "54", "111", this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medTAIP_RATE", "absolute", "396", null, "100", "21", null, "111", this);
            obj.set_taborder("3");
            obj.set_mask("###");
            obj.set_autoskip("false");
            obj.set_autoselect("true");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSEQN_NUMB", "absolute", "145", null, "110", "21", null, "111", this);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            obj.style.set_align("right middle");
            obj.set_maxlength("5");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "633", "71", "43", "21", null, null, this);
            obj.set_taborder("165");
            obj.set_text("상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "678", "71", "302", "21", null, null, this);
            obj.set_taborder("167");
            obj.set_usedecorate("true");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_border("1 solid #c9c9c9ff");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("목표설정서등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtSEQN_NUMB","value","dsEV_TAEGXD","SEQN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","medTAIP_RATE","value","dsEV_TAEGXD","TAIP_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtEVBS_CNTT","value","dsEV_TAEGXD","EVBS_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtPRWK_CNTT","value","dsEV_TAEGXD","PRWK_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","txtPROB_CNTT","value","dsEV_TAEGXD","PROB_CNTT");
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
        this.addIncludeScript("EVMB0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("EVMB0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("EVMB0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	EVMB0010 목표설정서등록
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.12		김석영		Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "EVMB0010"; 

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
        	
        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);	

        	this.div_ButtonList.btnInput.set_enable(false);
        	this.div_ButtonList.btnDelete.set_enable(false);
        	this.div_ButtonList.btnSave.set_enable(false);
        	
        	this.edtSEQN_NUMB.set_readonly(true);
        	this.medTAIP_RATE.set_readonly(true);
        	this.edtEVBS_CNTT.set_readonly(true);
        	this.edtPRWK_CNTT.set_readonly(true);
        	this.txtPROB_CNTT.set_readonly(true);
        	
        	this.btn_PROC.set_enable(false);
        	this.btn_PROC00.set_enable(false);

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
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD,dsEV_WGETXM");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsEV_TAEGXD=dsEV_TAEGXD dsEV_WGETXM=dsEV_WGETXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
            var iXMRow     = this.cmbSHREVAL_NAME.index;
            var sCOMB_CODE = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "COMB_CODE"));
            var iRow       = this.dsEV_TAEGXD.addRow();
            
        	this.dsEV_TAEGXD.setColumn(iRow, "SEQN_NUMB", iRow + 1);
        	this.dsEV_TAEGXD.setColumn(iRow, "SYNT_EACD", sCOMB_CODE); //인사평가코드
        	this.dsEV_TAEGXD.setColumn(iRow, "EMPL_NUMB", this.edtSHREMPL_NUMB.value); //사원번호
        	this.dsEV_TAEGXD.set_rowposition(iRow); 
        	this.edtSEQN_NUMB.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsEV_TAEGXD.deleteRow(this.dsEV_TAEGXD.rowposition);
        	this.grdEV_TAEGXD.setFocus();
        }
        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsEV_TAEGXD");
        	this.grdEV_TAEGXD.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsEV_TAEGXD=dsEV_TAEGXD:U";
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

        	var reportfile = "/evm/EVMB0010R01.jrf";
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
        	var params  =  "STDS_YEAR#"   + this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "STDS_YEAR"));

        	var dataref = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/evm/EVMB0010_SEARCH00.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsEV_WGETXM=dsEV_WGETXM dsEV_TAEGXD=dsEV_TAEGXD"
        	dataref[0].arg = this.fn_CreateArgument("REPORT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsEV_TAEGXD", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsEV_TAEGXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.stInformation1.set_text("");
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
        	}
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsEV_TAEGXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	var sQuestionText = this.grdEV_TAEGXD.getCellText(this.grdEV_TAEGXD.currentrow, this.grdEV_TAEGXD.getBindCellIndex( "body", "SEQN_NUMB"));
        	return this.fnc_Message("TMM002", "순번 " + sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsEV_TAEGXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	var nTAIP_RATE_TOT = 0;
        	for (var i = 0; i < this.dsEV_TAEGXD.getRowCount(); i++) {
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "SEQN_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 순번이", this.dsEV_TAEGXD, i, this.edtSEQN_NUMB, "SEQN_NUMB");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "TAIP_RATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 비중도가", this.dsEV_TAEGXD, i, this.medTAIP_RATE, "TAIP_RATE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "EVBS_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 평가지표가", this.dsEV_TAEGXD, i, this.edtEVBS_CNTT, "EVBS_CNTT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "PRWK_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 핵심과제가", this.dsEV_TAEGXD, i, this.edtPRWK_CNTT, "PRWK_CNTT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "PROB_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 추진방법 및 일정이", this.dsEV_TAEGXD, i, this.txtPROB_CNTT, "PROB_CNTT");
        		}	

        		nTAIP_RATE_TOT += parseInt(this.dsEV_TAEGXD.getColumn(i, "TAIP_RATE"));
        		
        		var sSEQN_NUMB = this.fnc_Trim(this.dsEV_TAEGXD.getColumn(i, "SEQN_NUMB"));
        		for (var j = 0; j < this.dsEV_TAEGXD.getRowCount(); j++) {
        			if(i != j){
        				if(sSEQN_NUMB == this.fnc_Trim(this.dsEV_TAEGXD.getColumn(j, "SEQN_NUMB"))){
        					return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 동일한 순번", this.dsEV_TAEGXD, j, this.edtSEQN_NUMB, "SEQN_NUMB");
        				}
        			}
        		}		
        	}
        	
        	if(nTAIP_RATE_TOT > 100){
        		this.fnc_Message("EVM008");
        		this.medTAIP_RATE.setFocus();
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
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		
        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		
        	} else if (sKind == "REPORT00") {	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		
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
        		this.fnc_Information(this.stInformation, this.dsEV_TAEGXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsEV_TAEGXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        		var iRow = this.dsEV_WGETXM.getRowCount();
        		var iXMRow = this.cmbSHREVAL_NAME.index;
        		var sEVTT_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "EVTT_YSNO")); // 피평가자대상여부
                var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO")); // 마감여부
        		var sBUOE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "BUOE_YSNO")); // 목표입력여부
        		
        		this.stInformation1.set_text(" 미제출 상태 입니다.");
        		
        	    if(iRow == 0 || sCLSE_YSNO == '1' || sBUOE_YSNO == '0' || sEVTT_YSNO == '0'){
        			this.div_ButtonList.btnInput.set_enable(false);
        			this.div_ButtonList.btnDelete.set_enable(false);
        			this.div_ButtonList.btnSave.set_enable(false);
        			
        			this.edtSEQN_NUMB.set_readonly(true);
        			this.medTAIP_RATE.set_readonly(true);
        			this.edtEVBS_CNTT.set_readonly(true);
        			this.edtPRWK_CNTT.set_readonly(true);
        			this.txtPROB_CNTT.set_readonly(true);
        			
        			this.btn_PROC.set_enable(false);
        			this.btn_PROC00.set_enable(false);
        		
        			if(sCLSE_YSNO == '1'){
        				this.stInformation1.set_text(" 마감되어 변경할 수 없습니다.");
        			} else if(sBUOE_YSNO == '0'){
        				this.stInformation1.set_text(" 목표입력 기간이 아닙니다.");
        			}			
        			
        			if(sCLSE_YSNO != '1' && sBUOE_YSNO == '1'){
        			    this.stInformation1.set_text(" 피평가자가 아니므로 사용할 수 없습니다.");
        				this.fnc_Message("EVM009");
        			}
        			
        			if(sEVTT_YSNO == '0'){
        			    this.stInformation1.set_text(" 피평가자가 아니므로 사용할 수 없습니다.");
        				this.fnc_Message("EVM009");
        			}
        		} else {
        			var sGLRS_YSNO = this.fnc_Trim(this.dsEV_WGETXM.getColumn(0, "GLRS_YSNO"));	//목표설정제출여부 
        			var sGLR1_CODE = this.fnc_Trim(this.dsEV_WGETXM.getColumn(0, "GLR1_CODE"));	//목표설정1차승인코드
        			var sGLR2_CODE = this.fnc_Trim(this.dsEV_WGETXM.getColumn(0, "GLR2_CODE"));	//목표설정2차승인코드
        			
        			if(sGLRS_YSNO == '0'){
        				this.div_ButtonList.btnInput.set_enable(true);
        				this.div_ButtonList.btnDelete.set_enable(true);
        				this.div_ButtonList.btnSave.set_enable(true);
        			
        				this.edtSEQN_NUMB.set_readonly(false);
        				this.medTAIP_RATE.set_readonly(false);
        				this.edtEVBS_CNTT.set_readonly(false);
        				this.edtPRWK_CNTT.set_readonly(false);
        				this.txtPROB_CNTT.set_readonly(false);
        				
        				this.btn_PROC.set_enable(true);
        				this.btn_PROC00.set_enable(false);
        			} else {
        				if(sGLR1_CODE == '2' || sGLR2_CODE == '2')
        				{
        					this.div_ButtonList.btnInput.set_enable(true);
        					this.div_ButtonList.btnDelete.set_enable(true);
        					this.div_ButtonList.btnSave.set_enable(true);
        				
        					this.edtSEQN_NUMB.set_readonly(false);
        					this.medTAIP_RATE.set_readonly(false);
        					this.edtEVBS_CNTT.set_readonly(false);
        					this.edtPRWK_CNTT.set_readonly(false);
        					this.txtPROB_CNTT.set_readonly(false);
        				
        					this.btn_PROC.set_enable(true);
        					this.btn_PROC00.set_enable(false);
        					
        					if(sGLR1_CODE == '2'){
        						this.stInformation1.set_text(" 1차 평가자가 반려 했습니다.");
        					} else {
        						this.stInformation1.set_text(" 2차 평가자가 반려 했습니다.");
        					}
        				} else {
        					this.div_ButtonList.btnInput.set_enable(false);
        					this.div_ButtonList.btnDelete.set_enable(false);
        					this.div_ButtonList.btnSave.set_enable(false);
        					
        					this.edtSEQN_NUMB.set_readonly(true);
        					this.medTAIP_RATE.set_readonly(true);
        					this.edtEVBS_CNTT.set_readonly(true);
        					this.edtPRWK_CNTT.set_readonly(true);
        					this.txtPROB_CNTT.set_readonly(true);
        					
        					this.btn_PROC.set_enable(false);
        					
        					this.stInformation1.set_text(" 제출 상태 입니다.");
        					
        					if(sGLR1_CODE == '1'){
        					    this.stInformation1.set_text(" 1차 평가자가 승인 했습니다.");
        						this.btn_PROC00.set_enable(false);
        					} else if(sGLR2_CODE == '1'){
        					    this.stInformation1.set_text(" 2차 평가자가 승인 했습니다.");
        						this.btn_PROC00.set_enable(false);
        					} else {
        					    this.btn_PROC00.set_enable(true);
        					}
        				}				
        			}						
        		}	
        				
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "REPORT00") {
        		
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Message("EVM003");
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC01") {
        		this.fnc_Message("EVM003");
        		this.fn_Search();
        		
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
        	if (this.fnc_DatasetChangeCheck("dsEV_TAEGXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD");
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO")); // 마감여부
            var sBUOE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "BUOE_YSNO")); // 목표입력여부
        		
        	if(sCLSE_YSNO == '1' || sBUOE_YSNO == '0'){
        		this.div_ButtonList.btnInput.set_enable(false);
        		this.div_ButtonList.btnDelete.set_enable(false);
        		this.div_ButtonList.btnSave.set_enable(false);
        		
        		this.edtSEQN_NUMB.set_readonly(true);
        		this.medTAIP_RATE.set_readonly(true);
        		this.edtEVBS_CNTT.set_readonly(true);
        		this.edtPRWK_CNTT.set_readonly(true);
        		this.txtPROB_CNTT.set_readonly(true);
        		
        		this.btn_PROC.set_enable(false);
        		this.btn_PROC00.set_enable(false);
        				
        		if(sCLSE_YSNO == '1'){
        		    this.stInformation1.set_text(" 마감되어 변경할 수 없습니다.");
        			this.fnc_Message("EVM010");
        		} else if(sBUOE_YSNO == '0'){
        		    this.stInformation1.set_text(" 목표입력 기간이 아닙니다.");
        			this.fnc_Message("EVM015");
        		}
        		
        	} else {
        	    this.div_ButtonList.btnInput.set_enable(true);
        		this.div_ButtonList.btnDelete.set_enable(true);
        		this.div_ButtonList.btnSave.set_enable(true);
        		
        		this.edtSEQN_NUMB.set_readonly(false);
        		this.medTAIP_RATE.set_readonly(false);
        		this.edtEVBS_CNTT.set_readonly(false);
        		this.edtPRWK_CNTT.set_readonly(false);
        		this.txtPROB_CNTT.set_readonly(false);
        		
        		this.btn_PROC.set_enable(true);
        		this.btn_PROC00.set_enable(true);
        		
        	}
        	
        	this.fn_Search();
        }

        /*-------------------------------+
         | 제출 처리                    |
         +------------------------------*/
        this.btn_PROC_OnClick = function(obj,e)
        {
        	if (this.fnc_DatasetChangeCheck("dsEV_TAEGXD")) {
        		if (this.fnc_Message("EVM022") == false) return false;
        	}
        	
        	if (!this.fn_EVAL_OnCheck("PROC00")) return;
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD");

        	var sInDataSet 	= "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "";
        	var sArgument   = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sArgument  += " action="	+ this.fnc_Quote(sMethodName);
        		sArgument  += " SYNT_EACD=" + this.fnc_Quote(this.cmbSHREVAL_NAME.value);
        		sArgument  += " EMPL_NUMB=" + this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-------------------------------+
         | 제출취소 처리               |
         +------------------------------*/
        this.btn_PROC00_OnClick = function(obj,e)
        {
        	if (!this.fn_EVAL_OnCheck("PROC01")) return;
        	
        	this.fnc_DatasetClear("dsEV_TAEGXD");

        	var sInDataSet 	= "";
        	var sMethodName = "PROC01";
        	var sOutDataSet = "";
        	var sArgument   = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sArgument  += " action="	+ this.fnc_Quote(sMethodName);
        		sArgument  += " SYNT_EACD=" + this.fnc_Quote(this.cmbSHREVAL_NAME.value);
        		sArgument  += " EMPL_NUMB=" + this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        this.fn_EVAL_OnCheck = function(sMethodName){
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
        	}
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCOMB_NAME = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "COMB_NAME"));
        	
        	if (sMethodName == "PROC00") {
        		var nTAIP_RATE_TOT = 0;
        		for (var i = 0; i < this.dsEV_TAEGXD.getRowCount(); i++) {
        			nTAIP_RATE_TOT += parseInt(this.dsEV_TAEGXD.getColumn(i, "TAIP_RATE"));
        			
        		}
        		
        		if(nTAIP_RATE_TOT != 100){
        			this.fnc_Message("EVM008");
        			return false;
        		}
        		
        		if (this.fnc_Message("EVM011", sCOMB_NAME) == false) return false;
        		
        	} else if (sMethodName == "PROC01") {
        		if (this.fnc_Message("EVM012", sCOMB_NAME) == false) return false;
        		
        	}
        	
        	return true;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.cmbSHREVAL_NAME.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHREVAL_NAME.addEventHandler("onitemchanged", this.cmbSHREVAL_NAME_onitemchanged, this);
            this.btn_PROC00.addEventHandler("onclick", this.btn_PROC00_OnClick, this);

        };

        this.loadIncludeScript("EVMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
