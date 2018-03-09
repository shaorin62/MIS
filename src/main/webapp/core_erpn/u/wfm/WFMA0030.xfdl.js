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
                this.set_name("WFMA0030");
                this.set_titletext("경조금신청현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsCCIT_CODE</Col><Col id=\"CODEID\">CCIT_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">COCO_KIND</Col><Col id=\"DSNAME\">dsCOCO_KIND</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">FRCW_CODE</Col><Col id=\"DSNAME\">dsFRCW_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCW_COCOAP", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_KIND\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FRCW_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCBS_BEDE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"APPL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_PROD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCC_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"CCIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COCO_RESN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF1\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF2\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF3\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF4\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF5\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SSPS_CODE\" type=\"STRING\" size=\"10\" prop=\"default\"/><Column id=\"SSPS_CODE_STR\" type=\"STRING\" size=\"30\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMAIN_CW_COCOAP", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_KIND\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FRCW_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCBS_BEDE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"APPL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_PROD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCC_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"CCIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COCO_RESN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF1\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF2\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF3\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF4\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF5\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SSPS_CODE\" type=\"STRING\" size=\"10\" prop=\"default\"/><Column id=\"SSPS_CODE_STR\" type=\"STRING\" size=\"30\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("3");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_text("경조금신청현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("6");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "117", "262", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("12");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "35", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("14");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCW_COCOAP", "absolute", "8", "138", null, null, "25", "15", this);
            obj.set_taborder("17");
            obj.set_binddataset("dsCW_COCOAP");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"82\"/><Column size=\"88\"/><Column size=\"97\"/><Column size=\"81\"/><Column size=\"72\"/><Column size=\"80\"/><Column size=\"91\"/><Column size=\"79\"/><Column size=\"78\"/><Column size=\"76\"/><Column size=\"83\"/><Column size=\"76\"/><Column size=\"94\"/><Column size=\"189\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"재직기간\"/><Cell col=\"5\" text=\"경조구분\"/><Cell col=\"6\" text=\"대상구분\"/><Cell col=\"7\" text=\"경조용품\"/><Cell col=\"8\" text=\"경조일\"/><Cell col=\"9\" text=\"신청일\"/><Cell col=\"10\" text=\"신청금액\"/><Cell col=\"11\" text=\"결재진행상태\"/><Cell col=\"12\" text=\"지급일\"/><Cell col=\"13\" text=\"전표발행상태\"/><Cell col=\"14\" text=\"전표번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK_BOX\"/><Cell col=\"1\" text=\"bind:EMP_INF1\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:EMP_INF2\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:EMP_INF3\"/><Cell col=\"4\" text=\"bind:WORK_PROD\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:COCO_KIND\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:FRCW_CODE\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:CCIT_CODE\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:COCO_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:APPL_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXCC_AMOT\" mask=\"###,###\"/><Cell col=\"11\" displaytype=\"combo\" text=\"bind:APPR_STAT\"/><Cell col=\"12\" displaytype=\"expr:PAYX_DATE == &quot;&quot; ? &quot;none&quot; : &quot;date&quot;\" text=\"bind:PAYX_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"13\" text=\"bind:SSPS_CODE_STR\"/><Cell col=\"14\" text=\"bind:SLIP_NUMB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPL_DATE1", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static55", "absolute", "200", "71", "14", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPL_DATE2", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static03", "absolute", "344", "71", "76", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "315", "61", "40", "41", null, null, this);
            obj.set_taborder("20");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_STAT", "absolute", "412", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbSHRAPPR_STAT_innerdataset = new Dataset("cmbSHRAPPR_STAT_innerdataset", this.cmbSHRAPPR_STAT);
            cmbSHRAPPR_STAT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(cmbSHRAPPR_STAT_innerdataset);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("2");
            obj.set_index("-1");

            obj = new Button("btnDELETE_SLIP", "absolute", null, "113", "74", "21", "25", null, this);
            obj.set_taborder("21");
            obj.set_text("전표삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnCREATE_SLIP", "absolute", null, "113", "74", "21", "102", null, this);
            obj.set_taborder("22");
            obj.set_text("전표생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "1053", "134", "80", "4", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "113", "76", "21", "304", null, this);
            obj.set_taborder("24");
            obj.set_text("전표생성일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPAYX_DATE", "absolute", null, "113", "100", "21", "201", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static18", "absolute", "999", "112", "12", "23", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "986", "112", "12", "23", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "113", "7", "21", "182", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1069", "103", "80", "10", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("경조금신청현황");

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
        this.addIncludeScript("WFMA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMA0030.xfdl", function() {
         /***************************************************************************************************
         * # Program : 경조금신청현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.19		정한균		Initial Created.
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
         *****************************************************************************INBUS*CO*KR************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMA0030";
        this.sFORM_IDXX   = "WFMA0030";

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
        	this.calSHRAPPL_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6)+"01");
        	this.calSHRAPPL_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	this.calPAYX_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	
        	//전표 mask
        	this.fnc_FormatSlipNumber(this.grdCW_COCOAP, "SLIP_NUMB");
        	
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
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear('dsCW_COCOAP');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_COCOAP=dsCW_COCOAP";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	//this.grdCW_COCOAP.setFocus();

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
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.화면 Close 時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_COCOAP", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);
        	
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
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_COCOAP")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPL_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청기간 FROM", this.calSHRAPPL_DATE1);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRAPPL_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청기간 TO", this.calSHRAPPL_DATE2);
        	}
        	
        	if (this.calSHRAPPL_DATE1.value > this.calSHRAPPL_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "신청기간 FROM,신청기간 TO", this.calSHRAPPL_DATE1);
        	}	
        	
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        //사용안함
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        //사용안함
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " APPL_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPL_DATE1.value)); //신청일1
        		sReturnString += " APPL_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPL_DATE2.value)); //신청일2
        		sReturnString += " APPR_STAT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPR_STAT.value)); //결재상태
        		
        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " SYST_LNCD=" + this.fnc_Quote("KO"); 										//시스템언어코드
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote("10"); 										//회계단위
        		sReturnString += " ACCT_GUBN=" + this.fnc_Quote("100"); 									//회계구분_사업장
        		sReturnString += " PAYX_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calPAYX_DATE.value)); 	//지급일자
        		sReturnString += " SLIP_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calPAYX_DATE.value)); 	//전표일자
        		sReturnString += " DOCU_IDXX=" + this.fnc_Quote(this.fnc_Trim("KHR140")); 					//결재DOC_ID
        		sReturnString += " FORM_IDXX=" + this.fnc_Quote(this.fnc_Trim(this.sFORM_IDXX)); 			//화면ID
                sReturnString += " EMPL_NUMB=" + this.fnc_Quote(application.GBL_EMPLNO);					//사원번호
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(application.GBL_DEPTCD);					//부서코드
        		sReturnString += " SLIP_GUBN=" + this.fnc_Quote("WF001");									//전표유형구분
        		sReturnString += " TITL_NAME=" + this.fnc_Quote("[경조금신청] - " + this.calPAYX_DATE.value);	//제목
        		sReturnString += " SOUS_LNKY=" + this.fnc_Quote(this.fnc_Trim(this.sFORM_IDXX)); 			//출처연결키
        		
        	} else if (sKind == "PROC01") {
            
                sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="    + this.fnc_Quote(sKind);
                sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.dsCW_COCOAP.getColumn(this.dsCW_COCOAP.rowposition, "SLIP_NUMB")); //전표번호
        	
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
        	
        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsCW_COCOAP.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCW_COCOAP.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRAPPR_STAT,dsSHRAPPR_STAT,0";
        		arrParam[1] = "GRID,grdCW_COCOAP,dsCCIT_CODE,CCIT_CODE";
        		arrParam[2] = "GRID,grdCW_COCOAP,dsCOCO_KIND,COCO_KIND";
        		arrParam[3] = "GRID,grdCW_COCOAP,dsFRCW_CODE,FRCW_CODE";
        		arrParam[4] = "GRID,grdCW_COCOAP,dsAPPR_STAT,APPR_STAT";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} else if (sMethodName == "PROC00") {
        		
        		this.fnc_Message("TMM130", "전표생성"); 
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC01") {
        		
        		this.fnc_Message("TMM130", "전표삭제"); 
        		this.fn_Search();
        		
        	}

        }

        
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        
        /*-----------------------+
         | 전표생성 버튼 클릭시  |
         +-----------------------*/
        this.btnCREATE_SLIP_onclick = function (obj,e) {
        	
        	if (!this.fn_CreateSlipItemCheck()) return;
        	
            var sMethodName = "PROC00";
            var sInDataSet 	= "dsMAIN_CW_COCOAP=dsMAIN_CW_COCOAP:A";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDAM.setFocus();
            
        }

        /*-----------------------+
         | 전표삭제 버튼 클릭시  |
         +-----------------------*/
        this.btnDELETE_SLIP_onclick = function(obj,e) {
        	
        	if (!this.fn_DeleteSlipItemCheck()) return;
        	
            var sMethodName = "PROC01";
            var sInDataSet 	= "";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDAM.setFocus();
            
        }

        

        /*----------------------------+
         |  전표생성 필수 조건 체크!  |
         +----------------------------*/
        this.fn_CreateSlipItemCheck = function () {

        	if (this.dsCW_COCOAP.getRowCount() < 1) return false;
        /*
        	if (this.fnc_DatasetChangeCheck("dsCW_COCOAP")) {
        		return this.fnc_Message("TMM015", "전표처리");
        	}
        */

        
        	if (this.dsCW_COCOAP.getCaseCount("CHK_BOX==\"1\"") < 1) {
        		this.fnc_Message("WFM003", "전표생성");
        		return false;
        	}
        	 
        	if (this.fnc_Length(this.fnc_Trim(this.calPAYX_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급일자", this.calPAYX_DATE);
        	}

        	// 필수 입력 항목 체크	
        	for (var row = 0; row < this.dsCW_COCOAP.getRowCount(); row++) {
        		if (this.dsCW_COCOAP.getColumn(row, "CHK_BOX") == "1") {
        			//결재상태 완료 체크
        			if (this.dsCW_COCOAP.getColumn(row, "APPR_STAT") != "Y") {
        				//this.fnc_Message("TMM125", "결재상태가 완료된 데이터만 선택하세요. ["+row+" 행]");
        				this.fnc_Message("WFM004", "결재완료");
        				return false;
        			}
        			//전표상태 미처리 체크
        			if (this.dsCW_COCOAP.getColumn(row, "SSPS_CODE") == "1") {
        				//this.fnc_Message("TMM125", "전표상태가 미처리된 데이터만 선택하세요. ["+row+" 행]");
        				this.fnc_Message("WFM005", "미처리");
        				return false;
        			}
        			
        			//this.fnc_Message("TMM125", this.fnc_Length(this.fnc_Trim(this.dsCW_COCOAP.getColumn(row, "EXCC_AMOT"))));
        			//경조금액 체크
        			if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOAP.getColumn(row, "EXCC_AMOT"))) <= 1) {
        				this.fnc_Message("WFM007");
        				return false;
        			}
        		}
        		
        	}
        	
        	this.fnc_DatasetClear("dsMAIN_CW_COCOAP");
        	
            // 선택한 대상만 복사
            this.dsCW_COCOAP.filter("CHK_BOX=='1'");
            this.dsMAIN_CW_COCOAP.copyData(this.dsCW_COCOAP, true);
            this.dsCW_COCOAP.filter("");
            
            trace(this.dsMAIN_CW_COCOAP.saveXML());
        	
        	return this.fnc_Message("PAY036");
        	
        }

        
        /*----------------------------+
         |  전표삭제 필수 조건 체크!  |
         +----------------------------*/
        this.fn_DeleteSlipItemCheck = function () {

        	if (this.dsCW_COCOAP.getCaseCount("CHK_BOX==\"1\"") < 1) {
        		this.fnc_Message("WFM003", "전표삭제");
        		return false;
        	} else {
        		if (this.dsCW_COCOAP.getCaseCount("SSPS_CODE==\"0\"") > 1) {
        			this.fnc_Message("WFM005", "처리");
        			return false;
        		}
        	}
            
            var sSlip_Numb = this.dsCW_COCOAP.getColumn(this.dsCW_COCOAP.rowposition, "SLIP_NUMB");
        	var sQuestionText = "회계전표 " + this.fnc_GetMaskFormat(sSlip_Numb, application.GBL_SLIPMASK);
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        this.grdCW_COCOAP_oncelldblclick = function(obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	this.fn_SlipPopUp(columnName);
        	
        }

        // 전표팝업
        this.fn_SlipPopUp = function (columnName) {

        	var sSLIP_NUMB = "";
        	if (columnName != "SLIP_NUMB") return;

        	// 전표번호
        	if (this.fnc_DatasetChangeCheck("dsCW_COCOAP")) {
        		return this.fnc_Message("TMM015", "전표조회");
        	}
        	
        	var sSlipNumb = this.dsCW_COCOAP.getColumn(this.dsCW_COCOAP.rowposition, columnName);
        	if (this.fnc_Length(sSlipNumb) < 14) return;
        	
        	var gubun = "SHR";	
         	if (columnName == "SLIP_NUMB") gubun = "REV";
        	
        	this.fnc_ViewSlipForm(sSlipNumb, gubun, this.sUSERLAVEL); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	
        }

        this.grdCW_COCOAP_onheadclick = function(obj,e)
        {
        	/*
        	if(e.col == 0){	
        		this.fnc_GridAllCheck(this.grdWF_SCEXXD,"CHK_BOX");	
        	}
        */

        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", "CHK_BOX")) ) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}
        	
        	
        	/* Dataset에 Value 일괄 설정 */
        	
        	objDataSet.set_enableevent(false);
        	objDataSet.set_updatecontrol(false);
        	for (var i=0; i < objDataSet.rowcount; i++) {
        		
        		var sChk_Gubn = this.fnc_Trim(objDataSet.getColumn(i, "SSPS_CODE"));

        		if (sChk_Gubn != "1") {
        			objDataSet.setColumn(i, "CHK_BOX", iCheckValue);
        			objDataSet.setRowType(i, Dataset.ROWTYPE_NORMAL);
        		}
        		
        	}
        	objDataSet.set_updatecontrol(true);
        	objDataSet.set_enableevent(true);
        	
        }

        this.dsCW_COCOAP_onrowposchanged = function(obj,e)
        {
        	
            if (e.newrow == -1) return;

        	
            var sSSPS_CODE = obj.getColumn(obj.rowposition, "SSPS_CODE");
            //var sEXCC_AMOT = obj.getColumn(obj.rowposition, "EXCC_AMOT");
            //alert(sSSPS_CODE);
            
            if (sSSPS_CODE == "1") {	//처리
                //this.chkSTAT_R.set_enable(false);
                //this.btnDELETE_SLIP.set_enable(true);
        		//this.btnCREATE_SLIP.set_enable(false);
                this.calPAYX_DATE.style.set_color("");
                //this.fn_disable_row(obj.rowposition);
            } else {
                //this.chkSTAT_R.set_enable(true);
                //this.btnDELETE_SLIP.set_enable(false);
        		//this.btnCREATE_SLIP.set_enable(true);
                this.calPAYX_DATE.style.set_color("");

                //this.fn_enable_row(obj.rowposition);
            }

        }

        this.grdCW_COCOAP_oncellclick = function(obj,e)
        {
        	
        	var sSSPS_CODE = this.dsCW_COCOAP.getColumn(this.dsCW_COCOAP.rowposition, "SSPS_CODE");
            //var sEXCC_AMOT = obj.getColumn(obj.rowposition, "EXCC_AMOT");
            //alert(sSSPS_CODE);
            
            if (sSSPS_CODE == "1") {	//처리
                //this.chkSTAT_R.set_enable(false);
                this.btnDELETE_SLIP.set_enable(true);

                this.calPAYX_DATE.style.set_color("");
                
            } else {
                //this.chkSTAT_R.set_enable(true);
                this.btnDELETE_SLIP.set_enable(false);

                this.calPAYX_DATE.style.set_color("");

                //this.fn_enable_row(e.newrow);
            }
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_COCOAP.addEventHandler("onrowposchanged", this.dsCW_COCOAP_onrowposchanged, this);
            this.dsMAIN_CW_COCOAP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Static30.addEventHandler("onclick", this.Static30_onclick, this);
            this.grdCW_COCOAP.addEventHandler("oncelldblclick", this.grdCW_COCOAP_oncelldblclick, this);
            this.grdCW_COCOAP.addEventHandler("onheadclick", this.grdCW_COCOAP_onheadclick, this);
            this.Static03.addEventHandler("onclick", this.Static30_onclick, this);
            this.btnDELETE_SLIP.addEventHandler("onclick", this.btnDELETE_SLIP_onclick, this);
            this.btnCREATE_SLIP.addEventHandler("onclick", this.btnCREATE_SLIP_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static30_onclick, this);

        };

        this.loadIncludeScript("WFMA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
