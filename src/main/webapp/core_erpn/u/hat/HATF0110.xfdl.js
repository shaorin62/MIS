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
                this.set_name("HATF0110");
                this.set_titletext("외근정산서 현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_BTWOXM", this);
            obj._setContents("<ColumnInfo><Column id=\"BTWO_SEQ1\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BTWO_CODE\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BTWO_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TITL_NAME\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_STDT\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_ENDD\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"SDYT_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_ETCR\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"PYMN_YENO\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_DSTN\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_PLAC\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"FILE_USID\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_SEQ2\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_PLAC\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_DINT\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_OILB\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_PASS\" type=\"STRING\" size=\"256\"/><Column id=\"PARK_CRGE\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_TRAN\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_CRGE\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_AMNT\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_DAYP\" type=\"STRING\" size=\"256\"/><Column id=\"BTWO_PAYA\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USNM\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNM\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_DTNM\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_DTCD\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_OPCD\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_OPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">BUTR_WOUT</Col><Col id=\"DSNAME\">dsSHRBUTR_WOUT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsDPAY_CODE</Col><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
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
            obj.set_text("외근정산서 현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("인사관리 > 출장관리 > 외근정산서현황");
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

            obj = new Static("Static30", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("신청일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
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
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "636", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAT_BTWOXM", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsAT_BTWOXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"신청일자\"/><Cell col=\"3\" rowspan=\"2\" text=\"기안일자\"/><Cell col=\"4\" colspan=\"4\" text=\"신청자\"/><Cell col=\"8\" rowspan=\"2\" text=\"제목\"/><Cell col=\"9\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"10\" rowspan=\"2\" text=\"외근일자\"/><Cell col=\"11\" rowspan=\"2\" text=\"외근지역 및 내용\"/><Cell col=\"12\" colspan=\"2\" text=\"외근시간\"/><Cell col=\"14\" colspan=\"4\" text=\"자가차량\"/><Cell col=\"18\" colspan=\"2\" text=\"대중교통\"/><Cell col=\"20\" rowspan=\"2\" text=\"금액\"/><Cell col=\"21\" rowspan=\"2\" text=\"일비\"/><Cell col=\"22\" rowspan=\"2\" text=\"합계\"/><Cell col=\"23\" rowspan=\"2\" text=\"기타사항\"/><Cell row=\"1\" col=\"4\" text=\"사번\"/><Cell row=\"1\" col=\"5\" text=\"성명\"/><Cell row=\"1\" col=\"6\" text=\"부서\"/><Cell row=\"1\" col=\"7\" text=\"직급\"/><Cell row=\"1\" col=\"12\" text=\"시작\"/><Cell row=\"1\" col=\"13\" text=\"종료\"/><Cell row=\"1\" col=\"14\" text=\"주행거리\"/><Cell row=\"1\" col=\"15\" text=\"유류대/L\"/><Cell row=\"1\" col=\"16\" text=\"통행료\"/><Cell row=\"1\" col=\"17\" text=\"주차료\"/><Cell row=\"1\" col=\"18\" text=\"교통편\"/><Cell row=\"1\" col=\"19\" text=\"요금\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:BTWO_CDNM\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:INST_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"3\" displaytype=\"expr:STAT_DATE == &quot;&quot; ? &quot;none&quot; : &quot;date&quot;\" style=\"align:center middle;\" text=\"bind:STAT_DATE\" mask=\"yyyy.MM.dd\" calendardisplaynulltype=\"default\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"bind:APLT_EMNR\"/><Cell col=\"5\" style=\"align:center middle;\" text=\"bind:APLT_EMNM\"/><Cell col=\"6\" style=\"align:center middle;\" text=\"bind:APLT_DTNM\"/><Cell col=\"7\" style=\"align:center middle;\" text=\"bind:APLT_OPNM\"/><Cell col=\"8\" style=\"align:left middle;\" text=\"bind:TITL_NAME\"/><Cell col=\"9\" style=\"align:center middle;\" text=\"bind:STAT_NAME\"/><Cell col=\"10\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:BTWO_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"11\" style=\"align:left middle;\" text=\"bind:BTWO_PLAC\"/><Cell col=\"12\" style=\"align:center middle;\" text=\"bind:BTWO_STDT\" mask=\"##.##\"/><Cell col=\"13\" style=\"align:center middle;\" text=\"bind:BTWO_ENDD\" mask=\"##.##\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:BTWO_DINT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:BTWO_OILB\"/><Cell col=\"16\" style=\"align:right middle;\" text=\"bind:BTWO_PASS\"/><Cell col=\"17\" style=\"align:right middle;\" text=\"bind:PARK_CRGE\"/><Cell col=\"18\" style=\"align:center middle;\" text=\"bind:BTWO_TRAN\"/><Cell col=\"19\" style=\"align:right middle;\" text=\"bind:BTWO_CRGE\"/><Cell col=\"20\" style=\"align:right middle;\" text=\"bind:BTWO_AMNT\"/><Cell col=\"21\" style=\"align:right middle;\" text=\"bind:BTWO_DAYP\"/><Cell col=\"22\" style=\"align:right middle;\" text=\"bind:BTWO_PAYA\"/><Cell col=\"23\" style=\"align:left top;\" text=\"bind:REMK_ETCR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHRQ_STDT", "absolute", "97", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("112");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static55", "absolute", "199", "71", "14", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHRQ_ENDT", "absolute", "214", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("114");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static05", "absolute", "314", "61", "40", "67", null, null, this);
            obj.set_taborder("119");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "616", "61", "40", "67", null, null, this);
            obj.set_taborder("124");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "645", "71", "65", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("신청자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "713", "71", "80", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "795", "71", "21", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "818", "71", "100", "21", null, null, this);
            obj.set_taborder("142");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "344", "71", "65", "21", null, null, this);
            obj.set_taborder("143");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "412", "71", "80", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "494", "71", "21", "21", null, null, this);
            obj.set_taborder("145");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "517", "71", "100", "21", null, null, this);
            obj.set_taborder("146");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", "97", "68", "21", null, null, this);
            obj.set_taborder("147");
            obj.set_text("구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBUTR_WOUT", "absolute", "97", "97", "217", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbSHRBUTR_WOUT_innerdataset = new Dataset("cmbSHRBUTR_WOUT_innerdataset", this.cmbSHRBUTR_WOUT);
            cmbSHRBUTR_WOUT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(cmbSHRBUTR_WOUT_innerdataset);
            obj.set_taborder("148");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("152");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "343", "97", "68", "21", null, null, this);
            obj.set_taborder("153");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCOMM_STAT", "absolute", "411", "97", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbSHRCOMM_STAT_innerdataset = new Dataset("cmbSHRCOMM_STAT_innerdataset", this.cmbSHRCOMM_STAT);
            cmbSHRCOMM_STAT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(cmbSHRCOMM_STAT_innerdataset);
            obj.set_taborder("154");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("stInformation", "absolute", "8", "134", "240", "21", null, null, this);
            obj.set_taborder("155");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("외근정산서 현황");

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
        this.addIncludeScript("HATF0110.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0110.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HATF0110 외근정산서현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.01		박정윤		Initial Created.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By NDS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************NDS*CO*KR********/
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTFFF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "HATF0110"; //해당 Form에서 사용 할 Package 명

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "";   //Form의 Location 정보
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
        	this.calSHRCHRQ_STDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6)+ '01');
        	this.calSHRCHRQ_ENDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));

        	this.calSHRCHRQ_STDT.setFocus();
        	
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
        	this.fnc_DatasetClear("dsAT_BTWOXM"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_BTWOXM=dsAT_BTWOXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_BTWOXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	// 기능 없음

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

            // 검색영역 데이터 초기화
        	this.dsAT_BTWOXM.clearData();
        	this.calSHRCHRQ_STDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6)+ '01');  // 신청시작일자
        	this.calSHRCHRQ_ENDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));            // 신청종료일자
        	
        	this.edtSHREMPL_NUMB.set_value("");   // 신청자사번
        	this.edtSHREMPL_NAME.set_value("");   // 신청자이름
        	this.edtSHRDEPT_CODE.set_value("");   // 부서코드
        	this.edtSHRDEPT_NAME.set_value("");   // 부서명
        	
        	this.cmbSHRCOMM_STAT.set_index(0);   // 결재상태
        	this.cmbSHRBUTR_WOUT.set_index(0);   // 외근구분
        	
        	this.calSHRCHRQ_STDT.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	// 기능 없음
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
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsAT_BTWOXM", this);
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
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRCHRQ_STDT.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청일자", this.calSHRCHRQ_STDT);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRCHRQ_ENDT.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청일자", this.calSHRCHRQ_ENDT);
        	}

        	if (this.fnc_Trim(this.calSHRCHRQ_STDT.value) > this.fnc_Trim(this.calSHRCHRQ_ENDT.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "신청일자 시작일, 종료일", this.calSHRCHRQ_STDT);
        	}

        
        	if (this.fnc_DatasetChangeCheck("dsAT_BTWOXM")) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	// 기능 없음
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsAT_BTWOXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			  + this.fnc_Quote(this.sPACKAGENAME); 						  
        		sReturnString += " action=" 		  + this.fnc_Quote(sKind);
        		sReturnString += " APLT_EMNR="        + this.fnc_Quote(this.edtSHREMPL_NUMB.value);	               // 신청자
        		sReturnString += " APLT_DTCD="        + this.fnc_Quote(this.edtSHRDEPT_CODE.value);                // 신청부서
        		sReturnString += " BSRP_STDT="        + this.fnc_Quote(this.fnc_Trim(this.calSHRCHRQ_STDT.value)); // 시작일자
        		sReturnString += " BSRP_ENDD="        + this.fnc_Quote(this.fnc_Trim(this.calSHRCHRQ_ENDT.value)); // 종료일자 
        		sReturnString += " BTWO_CODE="        + this.fnc_Quote(this.fnc_Trim(this.cmbSHRBUTR_WOUT.value)); // 외근구분
        		sReturnString += " STAT_CODE="        + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCOMM_STAT.value)); // 결재상태

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
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
        	
        		this.fnc_Information(this.stInformation, this.dsAT_BTWOXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_BTWOXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRBUTR_WOUT,dsSHRBUTR_WOUT,0";
        		arrParam[1] = "COMBO,cmbSHRCOMM_STAT,dsSHRAPPR_STAT,0";
        		arrParam[2] = "GRID,grdAT_BTWOXM,dsDPAY_CODE,BUTR_WOUT";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		arrParam[9] = "fn_HelpDialogeCallback";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // SHR부서
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		arrParam[9] = "fn_HelpDialogeCallback";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

        	}

        }

        this.fn_HelpDialogeCallback = function(dummy){
        	if ( dummy.length > 0 ) this.fn_Search();
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
            this.grdAT_BTWOXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HATF0110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
