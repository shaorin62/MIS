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
                this.set_name("TRMC0020");
                this.set_titletext("차입금거래현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTR_DBPYXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DBPY_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_CUST\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_CUNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_KIND\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"FUND_TYPE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TRAN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RPAY_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DBPY_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTE_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MAJR_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_STAT\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DBPY_KIND</Col><Col id=\"DSNAME\">dsSHRDBPY_KIND</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DBPY_KIND</Col><Col id=\"DSNAME\">dsDBPY_KIND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">FUND_TYPE</Col><Col id=\"DSNAME\">dsFUND_TYPE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">APPV_STAT</Col><Col id=\"DSNAME\">dsAPPV_STAT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "232", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_DBPYXD", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsTR_DBPYXD");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.getSetter("sCommonGubnonheadclick").set("fn_GridSort");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"147\" band=\"left\"/><Column size=\"130\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"회계단위\"/><Cell col=\"1\" displaytype=\"text\" text=\"차입금번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"차입금명\"/><Cell col=\"3\" displaytype=\"text\" text=\"차입기관\"/><Cell col=\"4\" displaytype=\"text\" text=\"차입종류\"/><Cell col=\"5\" displaytype=\"text\" text=\"자금유형\"/><Cell col=\"6\" displaytype=\"text\" text=\"차입일자\"/><Cell col=\"7\" displaytype=\"text\" text=\"이자율(%)\"/><Cell col=\"8\" displaytype=\"text\" text=\"거래일자\"/><Cell col=\"9\" displaytype=\"text\" text=\"차입금액(A)\"/><Cell col=\"10\" displaytype=\"text\" text=\"상환금액(B)\"/><Cell col=\"11\" displaytype=\"text\" text=\"잔액(A-B)\"/><Cell col=\"12\" displaytype=\"text\" text=\"이자금액\"/><Cell col=\"13\" displaytype=\"text\" text=\"적요\"/><Cell col=\"14\" text=\"전표번호\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: center;\" text=\"bind:ACCT_UNIT\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"bind:DBPY_NUMB\" mask=\"####-####\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DBPY_NAME\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DBPY_CUNM\" suppress=\"4\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:DBPY_KIND\" suppress=\"5\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:FUND_TYPE\" suppress=\"6\"/><Cell col=\"6\" displaytype=\"date\" style=\"align: center;\" text=\"bind:DBPY_DATE\" suppress=\"7\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" text=\"bind:INTE_RATE\" mask=\"0.###\" suppress=\"8\"/><Cell col=\"8\" displaytype=\"date\" style=\"align: center;\" text=\"bind:TRAN_DATE\" suppress=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" text=\"bind:DBPY_AMOT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" text=\"bind:RPAY_AMOT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" text=\"bind:DBPY_BALE\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" text=\"bind:INTE_AMOT\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\" text=\"bind:MAJR_REMK\"/><Cell col=\"14\" text=\"bind:SLIP_NUMB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "599", "71", "14", "21", null, null, this);
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRAN_DAT1", "absolute", "493", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRTRAN_DAT2", "absolute", "614", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtSHRDBPY_NUMB", "absolute", "811", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("none");
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDBPY_NAME", "absolute", "916", "71", "140", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "225", "71", "68", "21", null, null, this);
            obj.set_text("차입종류");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "423", "71", "68", "21", null, null, this);
            obj.set_text("거래일자");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "743", "71", "68", "21", null, null, this);
            obj.set_text("차입금명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRDBPY_KIND", "absolute", "294", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("imgHelpSHRDBPY_NUMB", "absolute", "893", "71", "21", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("차입금거래현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("25");
            obj.set_text("홈 > 자금관리 > 차입금거래현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("26");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("32");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("33");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "196", "61", "40", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "394", "61", "40", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("차입금거래현황");
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
        this.addIncludeScript("TRMC0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRMC0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMC0020 차입금거래현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		김준수		Initial Created.
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
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TRMC0020";

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.fnc_FormatSlipNumber(this.grdTR_DBPYXD, "SLIP_NUMB");

        	this.calSHRTRAN_DAT1.set_value((this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4) + "0101"));
        	this.calSHRTRAN_DAT2.set_value(this.fnc_GetServerDateTime("DATE"));

        	this.cmbSHRACCT_UNIT.setFocus();
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
            this.fnc_DatasetClear("dsTR_DBPYXD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTR_DBPYXD=dsTR_DBPYXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTR_DBPYXD.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {
        	// 기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음.
        }

         /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/

        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTR_DBPYXD",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj){
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	if ((this.fnc_DatasetChangeCheck("dsTR_DBPYXD")) && (this.fnc_Message("TMM023") == false))	{
        			return false;
        	}
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " DBPY_KIND=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDBPY_KIND.value)); //차입종류
        		sReturnString += " TRAN_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRAN_DAT1.value)); //거래일자1
        		sReturnString += " TRAN_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRAN_DAT2.value)); //거래일자2
        		sReturnString += " DBPY_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDBPY_NUMB.value)); //차입금명
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
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
        		this.fnc_Information(this.stInformation, this.dsTR_DBPYXD.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsTR_DBPYXD.rowcount);
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";	                  //회계단위
        			arrParam[1]  = "COMBO,cmbSHRDBPY_KIND,dsSHRDBPY_KIND,0";	                  //차입종류
        			arrParam[2]  = "GRID,grdTR_DBPYXD,dsACCT_UNIT,ACCT_UNIT";                     //회계단위(그리드)
        			arrParam[3]  = "GRID,grdTR_DBPYXD,dsDBPY_KIND,DBPY_KIND";                     //차입종류(그리드)
        			arrParam[4]  = "GRID,grdTR_DBPYXD,dsFUND_TYPE,FUND_TYPE";                     //자금유형(그리드)
        			arrParam[5]  = "GRID,grdTR_DBPYXD,dsAPPV_STAT,APPV_STAT";                     //전표승인상태(그리드)
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRDBPY_NUMB") || (obj.name == "edtSHRDBPY_NAME")) { // 조회 Help POPUP START
                arrParam[0] = "TRM0022";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRDBPY_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDBPY_NAME";
                arrParam[5] = "edtSHRDBPY_NUMB,edtSHRDBPY_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
            }
        }

        /*----------------+
         |  전표조회 팝업  |
         +-----------------*/
        this.fn_OpenSlip = function (obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "SLIP_NUMB") return;
        	
        	var sSlip_Numb = this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "SLIP_NUMB");
        	if (this.fnc_Length(this.fnc_Trim(sSlip_Numb)) > 0) {		
        		this.fnc_ViewSlipForm(sSlip_Numb, "SHR", this.sUSERLAVEL); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTR_DBPYXD.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.calSHRTRAN_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRTRAN_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDBPY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDBPY_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRDBPY_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDBPY_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TRMC0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
