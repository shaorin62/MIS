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
                this.set_name("EVMA0060");
                this.set_titletext("평가비율관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsWGEG_CODE</Col><Col id=\"CODEID\">WGEG_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEDFLAG\"/><Col id=\"REMK\">평가등급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">EVM0020</Col><Col id=\"DSNAME\">dsSHREVAL_NAME</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_WGEGXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"WGEG_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_SCOR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ENDX_SCOR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ABLT_EVSC\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EVAL_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_EVRTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PRSN_CONT\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SGDL_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AGDL_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BGDL_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CGDL_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DGDL_NOPS\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation1", "absolute", "104", "113", "168", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "522", "113", "212", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("9");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_WGEGXM", "absolute", "8", "136", "412", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("none");
            obj.set_binddataset("dsEV_WGEGXM");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"등급\" wordwrap=\"char\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"시작점수\" wordwrap=\"char\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"종료점수\" wordwrap=\"char\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:WGEG_CODE\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"none\" text=\"bind:BGIN_SCOR\" mask=\"##0.##\" editlimit=\"5\" editautoselect=\"true\" editlimitbymask=\"integer\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"none\" text=\"bind:ENDX_SCOR\" mask=\"##0.##\" editlimit=\"5\" editautoselect=\"true\" editlimitbymask=\"integer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_EVRTXM", "absolute", "442", "136", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("none");
            obj.set_binddataset("dsEV_EVRTXM");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"29\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" rowspan=\"2\" text=\"인원수\" wordwrap=\"char\"/><Cell col=\"2\" colspan=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"제한인원수\"/><Cell row=\"1\" celltype=\"head\" displaytype=\"text\"/><Cell row=\"1\" col=\"2\" text=\"S\"/><Cell row=\"1\" col=\"3\" text=\"A\"/><Cell row=\"1\" col=\"4\" text=\"B\"/><Cell row=\"1\" col=\"5\" text=\"C\"/><Cell row=\"1\" col=\"6\" text=\"D\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center;\" text=\"bind:PRSN_CONT\" editlimit=\"5\" editlimitbymask=\"integer\"/><Cell col=\"2\" edittype=\"masknumber\" style=\"align:center;\" text=\"bind:SGDL_NOPS\" mask=\"####0\" maskchar=\" \" editlimit=\"5\" editautoselect=\"true\" editlimitbymask=\"integer\"/><Cell col=\"3\" edittype=\"masknumber\" style=\"align:center;\" text=\"bind:AGDL_NOPS\" mask=\"####0\" maskchar=\" \" editlimit=\"5\" editautoselect=\"true\" editlimitbymask=\"integer\"/><Cell col=\"4\" edittype=\"masknumber\" style=\"align:center;\" text=\"bind:BGDL_NOPS\" mask=\"####0\" maskchar=\" \" editlimit=\"5\" editautoselect=\"true\" editlimitbymask=\"integer\"/><Cell col=\"5\" edittype=\"masknumber\" style=\"align:center;\" text=\"bind:CGDL_NOPS\" mask=\"####0\" maskchar=\" \" editlimit=\"5\" editautoselect=\"true\" editlimitbymask=\"integer\"/><Cell col=\"6\" edittype=\"masknumber\" style=\"align:center;\" text=\"bind:DGDL_NOPS\" mask=\"####0\" maskchar=\" \" editlimit=\"5\" editautoselect=\"true\" editlimitbymask=\"integer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_text("평가명");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVAL_NAME", "absolute", "96", "71", "324", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("dropdown");
            obj.set_index("-1");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("평가비율관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("17");
            obj.set_text("홈 > 인사관리 > 평가기준정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("23");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
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

            obj = new Static("Static00", "absolute", "725", "103", "80", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("28");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow01", "absolute", "293", "113", "62", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow01", "absolute", "358", "113", "62", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "608", "103", "80", "35", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow02", "absolute", null, "113", "62", "21", "90", null, this);
            obj.set_taborder("32");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow02", "absolute", null, "113", "62", "21", "25", null, this);
            obj.set_taborder("33");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDATA_COPY", "absolute", "8", "35", "98", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("이전자료복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "412", "765", "474", "128", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "327", "94", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("50");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "403", "94", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("51");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "456", "77", null, null, this.popINSERT);
            obj.set_taborder("52");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_FROM", "absolute", "29", "18", "87", "21", null, null, this.popINSERT);
            obj.set_taborder("55");
            obj.set_text("기준평가명");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_TO", "absolute", "29", "44", "87", "21", null, null, this.popINSERT);
            obj.set_taborder("56");
            obj.set_text("대상평가명");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "335", "18", "120", "21", null, null, this.popINSERT);
            obj.set_taborder("63");
            obj.set_text("의 평가비율 데이터를");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "335", "44", "120", "21", null, null, this.popINSERT);
            obj.set_taborder("64");
            obj.set_text("으로 복사합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Combo("cmbSHREVAL_NAME_FROM", "absolute", "110", "18", "220", "21", null, null, this.popINSERT);
            this.popINSERT.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_type("dropdown");
            obj.set_cssclass("styFormSearchCombo");
            obj = new Combo("cmbSHREVAL_NAME_TO", "absolute", "110", "44", "220", "21", null, null, this.popINSERT);
            this.popINSERT.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_type("dropdown");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Static("Static12", "absolute", "9", "113", "127", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("등급환산표");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "441", "113", "127", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("평가비율");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation04", "absolute", "96", "117", "10", "13", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "512", "117", "10", "13", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 474, 128, this.popINSERT,
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
            		p.set_titletext("평가비율관리");
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
        this.addIncludeScript("EVMA0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("EVMA0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	EVMA0060 평가비율관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.05		김석영		Initial Created.
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
        this.sBUTTONLIST  = "TTFFTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "EVMA0060"; 

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
        	this.fn_GetUserCombo("cmbSHREVAL_NAME_FROM");
        	this.fn_GetUserCombo("cmbSHREVAL_NAME_TO");
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
        	
        	this.fnc_DatasetClear("dsEV_WGEGXM,dsEV_EVRTXM");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsEV_WGEGXM=dsEV_WGEGXM dsEV_EVRTXM=dsEV_EVRTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdEV_WGEGXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        this.fn_Input01 = function (obj) {
            var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCOMB_CODE = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "COMB_CODE"));
            
        	if(iXMRow == 0 || iXMRow == -1) {
        		return this.fnc_SearchCheckPostAction("EVM007", "평가명", this.cmbSHREVAL_NAME);
        	}
        	
        	var iRow = this.dsEV_WGEGXM.addRow();
        	this.dsEV_WGEGXM.setColumn(iRow, "SYNT_EACD", sCOMB_CODE); //인사평가코드
        	this.dsEV_WGEGXM.set_rowposition(iRow); 
        	this.grdEV_WGEGXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEGXM, "WGEG_CODE"));
            this.grdEV_WGEGXM.setFocus();
        }

        this.fn_Input02 = function (obj) {
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCOMB_CODE = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "COMB_CODE"));
        	
        	if(iXMRow == 0 || iXMRow == -1) {
        		return this.fnc_SearchCheckPostAction("EVM007", "평가명", this.cmbSHREVAL_NAME);
        	}
        	
        	var iRow = this.dsEV_EVRTXM.addRow();
        	this.dsEV_EVRTXM.setColumn(iRow, "SYNT_EACD", sCOMB_CODE); //인사평가코드	
        	this.dsEV_EVRTXM.setColumn(iRow, "SGDL_NOPS", 0);
        	this.dsEV_EVRTXM.setColumn(iRow, "AGDL_NOPS", 0);
        	this.dsEV_EVRTXM.setColumn(iRow, "BGDL_NOPS", 0);
        	this.dsEV_EVRTXM.setColumn(iRow, "CGDL_NOPS", 0);
        	this.dsEV_EVRTXM.setColumn(iRow, "DGDL_NOPS", 0);
        	
        	this.dsEV_EVRTXM.set_rowposition(iRow); 
        	this.grdEV_EVRTXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_EVRTXM, "PRSN_CONT"));
        	
            this.grdEV_EVRTXM.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }

        this.fn_Delete01 = function (obj) {
        	if (this.fn_DeleteCheck01()) this.dsEV_WGEGXM.deleteRow(this.dsEV_WGEGXM.rowposition);
        	this.grdEV_WGEGXM.setFocus();	
        }

        this.fn_Delete02 = function (obj) {
        	if (this.fn_DeleteCheck02()) this.dsEV_EVRTXM.deleteRow(this.dsEV_EVRTXM.rowposition);
        	this.grdEV_EVRTXM.setFocus();
        }
        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsEV_WGEGXM,dsEV_EVRTXM");
        	this.grdEV_EVRTXM.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsEV_WGEGXM=dsEV_WGEGXM:U dsEV_EVRTXM=dsEV_EVRTXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdEV_WGEGXM.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsEV_WGEGXM,dsEV_EVRTXM", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsEV_WGEGXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_DatasetChangeCheck("dsEV_EVRTXM")) {
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
        	return true;	
        }

        this.fn_DeleteCheck01 = function () {
        	if (this.dsEV_WGEGXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	var sQuestionText = "등급 : ("+this.grdEV_WGEGXM.getCellText(this.grdEV_WGEGXM.currentrow, this.grdEV_WGEGXM.getBindCellIndex( "body", "WGEG_CODE")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        this.fn_DeleteCheck02 = function () {
        	if (this.dsEV_EVRTXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        	var sQuestionText = "인원수 : ("+this.grdEV_EVRTXM.getCellText(this.grdEV_EVRTXM.currentrow, this.grdEV_EVRTXM.getBindCellIndex( "body", "PRSN_CONT")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        }
        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsEV_WGEGXM") && !this.fnc_DatasetChangeCheck("dsEV_EVRTXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsEV_WGEGXM.getRowCount(); i++) {
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_WGEGXM.getColumn(i, "WGEG_CODE"))) < 1) {
        			this.grdEV_WGEGXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEGXM, "WGEG_CODE"));
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 등급", this.dsEV_WGEGXM, i, this.grdEV_WGEGXM, "WGEG_CODE");
        		}
        		
        		var sWGEG_CODE = this.fnc_Trim(this.dsEV_WGEGXM.getColumn(i, "WGEG_CODE"));
        		for (var j = 0; j < this.dsEV_WGEGXM.getRowCount(); j++) {
        			if (i != j){
        				if (sWGEG_CODE == this.fnc_Trim(this.dsEV_WGEGXM.getColumn(j, "WGEG_CODE"))){
        					this.grdEV_WGEGXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEGXM, "WGEG_CODE"));
        					return this.fnc_CheckPostAction("TMM161", "동일한 등급이", this.dsEV_WGEGXM, j, this.grdEV_WGEGXM, "WGEG_CODE");
        				}
        			}
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_WGEGXM.getColumn(i, "BGIN_SCOR"))) < 1) {
        			this.grdEV_WGEGXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEGXM, "BGIN_SCOR"));
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 시작점수", this.dsEV_WGEGXM, i, this.grdEV_WGEGXM, "BGIN_SCOR");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsEV_WGEGXM.getColumn(i, "ENDX_SCOR"))) < 1) {
        			this.grdEV_WGEGXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEGXM, "ENDX_SCOR"));
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 종료점수", this.dsEV_WGEGXM, i, this.grdEV_WGEGXM, "ENDX_SCOR");
        		}
        		
        		if (this.dsEV_WGEGXM.getColumn(i, "BGIN_SCOR") > this.dsEV_WGEGXM.getColumn(i, "ENDX_SCOR")){			
        			this.grdEV_WGEGXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEGXM, "ENDX_SCOR"));
        			return this.fnc_CheckPostAction("TMM022", (i+1) + "번째 Row에 시작점수,종료점수", this.dsEV_WGEGXM, i, this.grdEV_WGEGXM, "ENDX_SCOR");
        		}		
        	}
        	
        	for (var i = 0; i < this.dsEV_EVRTXM.getRowCount(); i++) {
        	    if (this.fnc_Trim(this.dsEV_EVRTXM.getColumn(i, "PRSN_CONT")) == "0") {
        			this.grdEV_WGEGXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEGXM, "SGDL_NOPS"));
        			return this.fnc_CheckPostAction("TMM114", (i+1) + "번째 Row에 인원수", this.dsEV_EVRTXM, i, this.grdEV_EVRTXM, "SGDL_NOPS");
        		}
        		
        		var sPRSN_CONT = this.fnc_Trim(this.dsEV_EVRTXM.getColumn(i, "PRSN_CONT"));	
        		for (var j = 0; j < this.dsEV_EVRTXM.getRowCount(); j++) {
        			if (i != j){
        				if (sPRSN_CONT == this.fnc_Trim(this.dsEV_EVRTXM.getColumn(j, "PRSN_CONT"))){
        					this.grdEV_WGEGXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEGXM, "SGDL_NOPS"));
        					return this.fnc_CheckPostAction("TMM161", "동일한 인원수", this.dsEV_EVRTXM, j, this.grdEV_EVRTXM, "SGDL_NOPS");
        				}
        			}
        		}
        		
        		if(this.dsEV_EVRTXM.getColumn(i, "PRSN_CONT") != (this.dsEV_EVRTXM.getColumn(i, "SGDL_NOPS") + this.dsEV_EVRTXM.getColumn(i, "AGDL_NOPS")
        		   + this.dsEV_EVRTXM.getColumn(i, "BGDL_NOPS") + this.dsEV_EVRTXM.getColumn(i, "CGDL_NOPS") + this.dsEV_EVRTXM.getColumn(i, "DGDL_NOPS"))){
        			this.grdEV_WGEGXM.setCellPos(this.fnc_GridColumnIndex(this.grdEV_WGEGXM, "SGDL_NOPS"));
        			return this.fnc_CheckPostAction("EVM013", (i+1) + "번째 Row에 인원수, 제한인원수의 합", this.dsEV_EVRTXM, i, this.grdEV_EVRTXM, "SGDL_NOPS");
        		}		
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
        		
        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
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
        		this.fnc_Information(this.stInformation1, this.dsEV_WGEGXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsEV_WGEGXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	    
        	    this.fnc_Information(this.stInformation2, this.dsEV_EVRTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsEV_EVRTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	    if(this.dsEV_WGEGXM.rowcount == 0){
        			var iXMRow = this.cmbSHREVAL_NAME.index;
        			var sCOMB_CODE = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "COMB_CODE"));
        			var arrBGIN_SCOR = new Array();
        			var arrENDX_SCOR = new Array();
        			
        			arrBGIN_SCOR[0] = 90;
        			arrBGIN_SCOR[1] = 80;
        			arrBGIN_SCOR[2] = 70;
        			arrBGIN_SCOR[3] = 60;
        			arrBGIN_SCOR[4] = 0;
        			
        			arrENDX_SCOR[0] = 100;
        			arrENDX_SCOR[1] = 89.99;
        			arrENDX_SCOR[2] = 79.99;
        			arrENDX_SCOR[3] = 69.99;
        			arrENDX_SCOR[4] = 59.99;
        			
        			for (var i = 0; i < this.dsWGEG_CODE.getRowCount(); i++) {
        				var iRow = this.dsEV_WGEGXM.addRow();
        				var sWGEG_COMB_CODE = this.fnc_Trim(this.dsWGEG_CODE.getColumn(i, "COMD_CODE"));
        				
        				this.dsEV_WGEGXM.setColumn(iRow, "SYNT_EACD", sCOMB_CODE); //인사평가코드
        				this.dsEV_WGEGXM.setColumn(iRow, "WGEG_CODE", sWGEG_COMB_CODE); 
        				this.dsEV_WGEGXM.setColumn(iRow, "BGIN_SCOR", arrBGIN_SCOR[i]); 
        				this.dsEV_WGEGXM.setColumn(iRow, "ENDX_SCOR", arrENDX_SCOR[i]); 
        			}
        	    }
        	    
        	    this.grdEV_WGEGXM.setFocus();
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC00") {	
        		this.popINSERT.closePopup();
        		this.fnc_Message("TMM103");		
        		this.cmbSHREVAL_NAME.set_value(this.popINSERT.cmbSHREVAL_NAME_TO.value);		
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        		
        		arrParam[0] = "GRID,grdEV_WGEGXM,dsWGEG_CODE,WGEG_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        		
        		arrParam[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        		arrParam[1] = "COMBO,popINSERT.cmbSHREVAL_NAME_FROM,dsSHREVAL_NAME,0";
        		arrParam[2] = "COMBO,popINSERT.cmbSHREVAL_NAME_TO,dsSHREVAL_NAME,0";
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
        	    	    	        
            if(oComboId=="cmbSHREVAL_NAME"){
            	arrParam2[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        	} else if(oComboId=="cmbSHREVAL_NAME_FROM"){
                arrParam2[0] = "COMBO,popINSERT.cmbSHREVAL_NAME_FROM,dsSHREVAL_NAME,0";
        	} else if(oComboId=="cmbSHREVAL_NAME_TO"){ 
                arrParam2[0] = "COMBO,popINSERT.cmbSHREVAL_NAME_TO,dsSHREVAL_NAME,0";
        	}
        			
        	this.fnc_GetUserComboSingle(arrParam, arrParam2);
        	
        }

        /*----------------------------------------------------------------------+
         |  모든 버튼 클릭 時(행추가, 행삭제) |
         +-----------------------------------------------------------------------*/
        this.fn_All_Btn_OnClick = function (obj,e) {
        	if(obj.name == "btnAddRow01") {
        	    // 행추가
        		this.fn_Input01();
        	} else if(obj.name == "btnDelRow01") {
        	    // 행삭제
        	    this.fn_Delete01();
        	} else if(obj.name == "btnAddRow02") {
        	    // 행추가
        	    this.fn_Input02();
        	} else if(obj.name == "btnDelRow02") {
        	    // 행삭제			
        	    this.fn_Delete02();
        	}
        }

        this.cmbSHREVAL_NAME_OnChanged = function(obj,e)
        {
        	if (this.fnc_DatasetChangeCheck("dsEV_WGEGXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_DatasetChangeCheck("dsEV_EVRTXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsEV_WGEGXM,dsEV_EVRTXM");
        	
        	var iXMRow = this.cmbSHREVAL_NAME.index;
            var sCLSE_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "CLSE_YSNO")); // 마감여부
        	var sEVTA_YSNO = this.fnc_Trim(this.dsSHREVAL_NAME.getColumn(iXMRow, "EVTA_YSNO")); // 평가대상여부  
        	
        	if(sCLSE_YSNO == '1' || sEVTA_YSNO == '0'){
        		this.btnAddRow01.set_enable(false);
        		this.btnDelRow01.set_enable(false);
        		this.btnAddRow02.set_enable(false);
        		this.btnDelRow02.set_enable(false);		
        		this.div_ButtonList.btnSave.set_enable(false);		
        		this.btnDATA_COPY.set_enable(false);
        		
        		this.grdEV_WGEGXM.set_readonly(true);
        		this.grdEV_EVRTXM.set_readonly(true);
        				
        		if(sCLSE_YSNO == '1'){
        			this.fnc_Message("EVM010");
        		} else if(sEVTA_YSNO == '0'){
        			this.fnc_Message("EVM014");
        		}
        		
        	} else {
        	    this.btnAddRow01.set_enable(true);
        		this.btnDelRow01.set_enable(true);
        		this.btnAddRow02.set_enable(true);
        		this.btnDelRow02.set_enable(true);	
        		this.div_ButtonList.btnSave.set_enable(true);				
        		this.btnDATA_COPY.set_enable(true);
        		
        		this.grdEV_WGEGXM.set_readonly(false);
        		this.grdEV_EVRTXM.set_readonly(false);
        	}
        	
        	this.fn_Search();
        }

        /*------------+
         |  팝업열기 |
         +------------*/
        this.fn_DataCodeCopy = function(obj,e)
        {
        	var nX  = system.clientToScreenX(this.btnDATA_COPY, 0);
        	var nY  = system.clientToScreenY(this.btnDATA_COPY, this.btnDATA_COPY.getOffsetHeight());
        		nX -= system.clientToScreenX(application.mainframe,0);
        		nY -= system.clientToScreenY(application.mainframe,0);	
        	this.popINSERT.trackPopup(nX, nY);
        	this.popINSERT.cmbSHREVAL_NAME_FROM.setFocus();
        	this.popINSERT.cmbSHREVAL_NAME_TO.set_index(1);
        }

        /*------------+
         |  팝업닫기 |
         +------------*/
        this.popINSERT_btnClose_OnClick = function (obj,e) 
        {
        	this.popINSERT.closePopup();
        }

        this.popINSERT_btnINSERT_OnClick = function(obj,e)
        {
        	if (this.fnc_Length(this.fnc_Trim(this.popINSERT.cmbSHREVAL_NAME_FROM.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준평가명", this.popINSERT.cmbSHREVAL_NAME_FROM);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.popINSERT.cmbSHREVAL_NAME_TO.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "대상평가명", this.popINSERT.cmbSHREVAL_NAME_TO);
        	}

            if (this.fnc_Trim(this.popINSERT.cmbSHREVAL_NAME_FROM.value) == this.fnc_Trim(this.popINSERT.cmbSHREVAL_NAME_TO.value)) {
        		this.fnc_Message("TMM160", "기준평가명", "대상평가명");
        		this.popINSERT.cmbSHREVAL_NAME_TO.setFocus();
        		return false;
        	}
        	
        	if (this.fnc_Message("TMM061", "이전자료 복사 ") == false) return false;

        	this.fnc_DatasetClear("dsEV_WGEGXM,dsEV_EVRTXM");

        	var sInDataSet 	= "";
        	var sMethodName = "PROC00";
        	var sOutDataSet = "";
        	var sArgument   = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sArgument  += " action="		 + this.fnc_Quote(sMethodName);
        		sArgument  += " SYNT_EACD_FROM=" + this.fnc_Quote(this.popINSERT.cmbSHREVAL_NAME_FROM.value);
        		sArgument  += " SYNT_EACD_TO="   + this.fnc_Quote(this.popINSERT.cmbSHREVAL_NAME_TO.value);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        this.dsEV_EVRTXM_oncolumnchanged = function(obj,e)
        {
        	var iPRSN_CONT = 0;
        	var iSGDL_NOPS = parseInt(this.dsEV_EVRTXM.getColumn(e.row, "SGDL_NOPS"));
        	var iAGDL_NOPS = parseInt(this.dsEV_EVRTXM.getColumn(e.row, "AGDL_NOPS"));
        	var iBGDL_NOPS = parseInt(this.dsEV_EVRTXM.getColumn(e.row, "BGDL_NOPS"));
        	var iCGDL_NOPS = parseInt(this.dsEV_EVRTXM.getColumn(e.row, "CGDL_NOPS"));
        	var iDGDL_NOPS = parseInt(this.dsEV_EVRTXM.getColumn(e.row, "DGDL_NOPS"));
        	
        	iPRSN_CONT = iSGDL_NOPS + iAGDL_NOPS + iBGDL_NOPS + iCGDL_NOPS + iDGDL_NOPS;
        	
        	this.dsEV_EVRTXM.setColumn(e.row, "PRSN_CONT", iPRSN_CONT);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsEV_EVRTXM.addEventHandler("oncolumnchanged", this.dsEV_EVRTXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHREVAL_NAME.addEventHandler("onitemchanged", this.cmbSHREVAL_NAME_OnChanged, this);
            this.cmbSHREVAL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnAddRow01.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.btnDelRow01.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.btnAddRow02.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.btnDelRow02.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.btnDATA_COPY.addEventHandler("onclick", this.fn_DataCodeCopy, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.popINSERT_btnClose_OnClick, this);
            this.popINSERT.cmbSHREVAL_NAME_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.cmbSHREVAL_NAME_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("EVMA0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
