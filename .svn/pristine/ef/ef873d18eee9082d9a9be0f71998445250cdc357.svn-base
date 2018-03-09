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
                this.set_name("PAYF0100");
                this.set_titletext("퇴직연금예치금관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_RTPSDB", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENFC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DTGN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CPOS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AVER_WAGE\" type=\"STRING\" size=\"256\"/><Column id=\"CWRK_YMCT\" type=\"STRING\" size=\"256\"/><Column id=\"RETI_ALWN\" type=\"STRING\" size=\"256\"/><Column id=\"BEFO_ALWN\" type=\"STRING\" size=\"256\"/><Column id=\"OCUR_ALWN\" type=\"STRING\" size=\"256\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPSRT", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ENFC_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"REAY_JOCD\" type=\"STRING\" size=\"4\"/><Column id=\"BIZR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"DEPO_RATE\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">TMM0006</Col></Row><Row><Col id=\"DSNAME\">dsSTDS_DATE</Col><Col id=\"COMBOID\">PAY0015</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">기준일</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPSDB_SAVE", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"REAY_JOCD\" type=\"STRING\" size=\"256\"/><Column id=\"ENFC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RTPD_AMOT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("6");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("7");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("퇴직연금예치금관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("9");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "77", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "696", "103", "80", "25", null, null, this);
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

            obj = new Grid("grdPY_RTPSRT", "absolute", "8", "128", "309", null, null, "15", this);
            obj.set_taborder("4");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_RTPSRT");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"연금사업자\"/><Cell col=\"1\" text=\"예치율(%)\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:BIZR_NAME\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" text=\"bind:DEPO_RATE\" mask=\"###.##\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRENFC_CODE", "absolute", "85", "71", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");

            obj = new Static("Static32", "absolute", "428", "71", "50", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "470", "71", "80", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "552", "71", "21", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "575", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "675", "61", "40", "41", null, null, this);
            obj.set_taborder("114");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "704", "71", "50", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "746", "71", "80", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "828", "71", "21", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "851", "71", "100", "21", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "399", "61", "40", "41", null, null, this);
            obj.set_taborder("119");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "244", "71", "70", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("기준일");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "215", "61", "40", "41", null, null, this);
            obj.set_taborder("121");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "144", "107", "192", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "8", "107", "125", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("사업자별 예치율");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "132", "110", "10", "13", null, null, this);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTPSDB", "absolute", "347", "128", null, null, "25", "15", this);
            obj.set_taborder("5");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj.set_binddataset("dsPY_RTPSDB");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"평균임금\"/><Cell col=\"6\" text=\"근속기간\"/><Cell col=\"7\" text=\"퇴직충당금\"/><Cell col=\"8\" text=\"이전충당금\"/><Cell col=\"9\" text=\"추가충당금\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:AVER_WAGE\"/><Cell col=\"6\" text=\"bind:CWRK_YMCT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RETI_ALWN\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:BEFO_ALWN\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OCUR_ALWN\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;\"/><Cell col=\"1\" style=\"align:center middle;\"/><Cell col=\"2\" style=\"align:center middle;\"/><Cell col=\"3\" style=\"align:center middle;\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('AVER_WAGE')\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" expr=\"expr:dataset.getSum('RETI_ALWN')\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" expr=\"expr:dataset.getSum('BEFO_ALWN')\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"normal\" expr=\"expr:dataset.getSum('OCUR_ALWN')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "347", "122", "216", "6", null, null, this);
            obj.set_taborder("129");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "480", "107", "192", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "347", "107", "125", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("퇴직연금 대상자");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", "471", "110", "10", "13", null, null, this);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "317", "213", "30", "41", null, null, this);
            obj.set_taborder("133");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "110", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_text("예치금분할처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("135");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("136");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTDS_DATE", "absolute", "300", "71", "90", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직연금예치금관리");

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
        this.addIncludeScript("PAYF0100.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYF0100.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYF0100 퇴직연금 예치금관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.07		김준수		Initial Created.
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

        /************************
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST  = "TTFFFTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "PAYF0100";
        var arrCol = []; // 동적으로 생성될 그리드 컬럼 index 저장
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

        this.nFIXCOL = 10;	/*퇴직연금 대상자 그리드(grdPY_RTPSDB)의 고정 컬럼 수*/
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetUserComboDs(this.dsUserCombo);
            
            switch (this.sUSERLAVEL) {
        		case "1" :	//관리자(본사)
        			this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
        			this.cmbSHRENFC_CODE.setFocus();
        			break;

        		case "3" : //소속
        			this.cmbSHRENFC_CODE.set_readonly(true);
        			this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
        			this.cmbSHRSTDS_DATE.setFocus();
        			break;

        		default :
        			break;
        	}
        	
        	this.nFIXCOL = this.grdPY_RTPSDB.getCellCount("body");
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
            this.fnc_DatasetClear("dsPY_RTPSRT,dsPY_RTPSDB");
        	if (this.grdPY_RTPSDB.getCellCount("HEAD") != 11) { // 그리드가 초기상태가 아닐경우.
        		this.fn_clearGrid();
        	}
            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPSRT=dsPY_RTPSRT dsPY_RTPSDB=dsPY_RTPSDB";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음.    
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음.
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        // 기능없음.
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

            if (!this.fn_SaveItemCheck()) return;

            var sMethodName = "SAVE00";
            var sInDataSet  = "dsPY_RTPSRT=dsPY_RTPSRT:U dsPY_RTPSDB=dsPY_RTPSDB_SAVE:U";
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
            // 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
            if(e.fromobject instanceof Div) return;
            var sMessage = this.fnc_FormUnloadCheck("dsPY_RTPSRT,dsPY_RTPSDB", this);
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

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsPY_RTPSRT,dsPY_RTPSDB")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRSTDS_DATE.value)) < 0) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일", this.cmbSHRSTDS_DATE);
        	}
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck("dsPY_RTPSRT,dsPY_RTPSDB")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	if (this.dsPY_RTPSDB.getRowCount() < 1) {
        		return false;
        	}
        	this.dsPY_RTPSDB_SAVE.clearData();
        	var sColumnInfo = [];
        	var nCnt = 0;
        	for (var i = this.nFIXCOL; i < this.grdPY_RTPSDB.getCellCount("body"); i++) {
        		
        		sColumnInfo[nCnt] = this.grdPY_RTPSDB.getCellProperty( "body", i, "text" );		
        		nCnt++;
        	}
        	for (var i = 0; i < this.dsPY_RTPSDB.getRowCount(); i++) {
        		
        		for (var j = 0; j < sColumnInfo.length; j++) {
        			
        			var nRow = this.dsPY_RTPSDB_SAVE.addRow();
        			this.dsPY_RTPSDB_SAVE.setColumn( nRow, "STDS_DATE", this.dsPY_RTPSDB.getColumn( i, "STDS_DATE" ));
        			this.dsPY_RTPSDB_SAVE.setColumn( nRow, "EMPL_NUMB", this.dsPY_RTPSDB.getColumn( i, "EMPL_NUMB" ));
        			this.dsPY_RTPSDB_SAVE.setColumn( nRow, "ENFC_CODE", this.dsPY_RTPSDB.getColumn( i, "ENFC_CODE" ));
        			this.dsPY_RTPSDB_SAVE.setColumn( nRow, "REAY_JOCD", sColumnInfo[j]);
        			this.dsPY_RTPSDB_SAVE.setColumn( nRow, "RTPD_AMOT", this.grdPY_RTPSDB.getCellValue( i,  (this.nFIXCOL + j + 1) ) );
        		
        		}
        	
        	}
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
        // 기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="          + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="       + this.fnc_Quote(sKind);
        		sReturnString += " STDS_DATE="    + this.fnc_Quote(this.cmbSHRSTDS_DATE.value);
        		sReturnString += " DEPT_CODE="    + this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		sReturnString += " EMPL_NUMB="    + this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		sReturnString += " ENFC_CODE="    + this.fnc_Quote(this.cmbSHRENFC_CODE.value);
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="          + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="       + this.fnc_Quote(sKind);
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {	
        		this.fnc_Information(this.stInformation00, this.dsPY_RTPSDB.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.stInformation, this.dsPY_RTPSRT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_RTPSDB.rowcount);
        		this.grdPY_RTPSRT.setFocus();
        		
        	} else if (sMethodName == "SEARCH01") {
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        		var iRow = this.dsPY_RTBUSI.findRowExpr("REAY_JOCD=='" + this.aKeyValue[0] + "'");
        		if (iRow < 0) iRow = 0;
        		this.dsPY_RTBUSI.set_rowposition(iRow);
        		
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRENFC_CODE,dsACCT_GUBN,0";
        			arrParam[1] = "COMBO,cmbSHRSTDS_DATE,dsSTDS_DATE,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}
        }

        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서조회
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { //사원조회
        		arrParam[0] = "HRM0002";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        	}
        	
        	this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                              *
         **************************************************************************************************/

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
         
         
         /**
        *  동적 그리드 생성
        * @param {Object} objGrid        : 동적 생성될 그리드
        * @param {Object} objColDataset  : 동적 생성 컬럼 정보가 있는 Dataset
        * @param {Number} iMergeCnt      : 합계(Summ) 밴드 Marge Count 
        * @return {None} None
        */
        this.btn_PROC_OnClick = function(obj,e) {
         	
         	if (this.dsPY_RTPSRT.getRowCount() == 0) {
         		//@ 자료가 존재하지 않습니다. 조회 후 진행하세요.
         		this.fnc_Message("TMM125", "처리할 데이터가 존재하지 않습니다");
         		return false;
         	}
         	
        	if (this.grdPY_RTPSDB.getCellCount("HEAD") != this.nFIXCOL) { // 그리드가 초기상태가 아닐경우.
        		this.fn_clearGrid();
        	}

        	var sColumnInfo = [];
        	var sColumnData = [];
        	var sColumnData2 = [];
        	var sColumnData3 = [];
        	// 사업자명 가져오기
        	sColumnInfo[0] = this.dsPY_RTPSRT.getColID(3);
        	// 예치율 가져오기
        	sColumnInfo[1] = this.dsPY_RTPSRT.getColID(4);
        	// 사업자코드 가져오기
        	sColumnInfo[2] = this.dsPY_RTPSRT.getColID(2);
        	
        	for( var i = 0 ; i < this.dsPY_RTPSRT.getRowCount(); i++) {
        		// 사업자명의 실제 값
        		sColumnData[i] = this.dsPY_RTPSRT.getColumn(i, sColumnInfo[0]);
        		// 예치율 의 실제 값
        		sColumnData2[i] = this.dsPY_RTPSRT.getColumn(i, sColumnInfo[1]);
        		// 사업자코드 의 실제 값
        		sColumnData3[i] = this.dsPY_RTPSRT.getColumn(i, sColumnInfo[2]);
        	}
        	
        	
        	//동적그리드- 필요한 그리드 컬럼 생성
        	var iCol = -1;
        	this.dsPY_RTPSRT.set_updatecontrol ( false );
        	for(var i = 0 ; i < this.dsPY_RTPSRT.getRowCount(); i++){ 
        		// 컬럼생성
        		iCol = this.grdPY_RTPSDB.appendContentsCol();  
        		arrCol[i] = iCol; // 생성된 컬럼Index 저장

        		this.grdPY_RTPSDB.setFormatColProperty(iCol,"size",100);
        		this.grdPY_RTPSDB.setCellProperty("Head", iCol, "text",sColumnData[i]);
        		this.grdPY_RTPSDB.setCellProperty("Body", iCol, "expr","expr:nexacro.round(OCUR_ALWN * " + nexacro.toNumber(sColumnData2[i]) / 100 + ")");   
        		this.grdPY_RTPSDB.setCellProperty("Body", iCol, "displaytype","number"); 
        		this.grdPY_RTPSDB.setCellProperty("Body", iCol, "style","align:right;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));"); 
        		this.grdPY_RTPSDB.setCellProperty("Body", iCol, "text",sColumnData3[i]);
        		 
        		//this.grdPY_RTPSDB.setCellProperty("Summ", iCol, "col", iCol);  
        		this.grdPY_RTPSDB.setCellProperty("Summ", iCol, "displaytype","number"); 
        		this.grdPY_RTPSDB.setCellProperty("Summ", iCol, "style","align:right;");   //dataset.getSum('RETI_ALWN') * 30 / 100
        		this.grdPY_RTPSDB.setCellProperty("Summ", iCol, "expr","expr:nexacro.round(dataset.getSum('OCUR_ALWN') * " + nexacro.toNumber(sColumnData2[i]) / 100 + ")");   
        		this.dsPY_RTPSRT.setRowType( i , Dataset.ROWTYPE_UPDATE );
        	}	
        	this.dsPY_RTPSRT.set_updatecontrol ( true );
         		//trace(this.dsPY_RTPSDB.saveXML());
         	
        }

        
        this.fn_clearGrid = function () {
        // 뒤쪽의 컬럼부터 지워나간다.
        	for ( var iCol = arrCol.length-1; iCol >= 0 ; iCol--) {
        		this.grdPY_RTPSDB.deleteContentsCol(arrCol[iCol]);
        	}
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
            this.grdPY_RTPSRT.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdPY_RTPSDB.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);

        };

        this.loadIncludeScript("PAYF0100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
