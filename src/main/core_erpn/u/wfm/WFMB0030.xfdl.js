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
                this.set_name("WFMB0030");
                this.set_titletext("학자금신청현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWF_SCEXXD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_SEQN\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CHLD_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CHLD_BIRT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_YEAR\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SCHL_TERM\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_AMOT\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SCEX_LIMT\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"GIVE_YMDX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"200\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSCEX_CODE</Col><Col id=\"CODEID\">SCEX_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">Y</Col></Row></Rows>");
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
            obj.set_taborder("0");
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
            obj.set_text("학자금신청현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("6");
            obj.set_text("홈 > 1메뉴 > 학자금신청현황");
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

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("12");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "98", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "344", "71", "68", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("신청자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "401", "71", "80", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "483", "71", "21", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "506", "71", "140", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "200", "71", "14", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATE2", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("calSHRAPPR_DATE1", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Grid("grdWF_SCEXXD", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("1");
            obj.set_binddataset("dsWF_SCEXXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"대상사원\"/><Cell col=\"4\" colspan=\"5\" text=\"대상자녀\"/><Cell col=\"9\" colspan=\"2\" text=\"학자금\"/><Cell row=\"1\" text=\"사원번호\"/><Cell row=\"1\" col=\"1\" text=\"성명\"/><Cell row=\"1\" col=\"2\" text=\"부서\"/><Cell row=\"1\" col=\"3\" text=\"직위\"/><Cell row=\"1\" col=\"4\" text=\"자녀명\"/><Cell row=\"1\" col=\"5\" text=\"생년월일\"/><Cell row=\"1\" col=\"6\" text=\"학교명\"/><Cell row=\"1\" col=\"7\" text=\"학년\"/><Cell row=\"1\" col=\"8\" text=\"분기/학기\"/><Cell row=\"1\" col=\"9\" text=\"종류\"/><Cell row=\"1\" col=\"10\" text=\"실납입금\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NAME\" editdisplay=\"edit\" expandshow=\"hide\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" text=\"bind:CHLD_NAME\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:CHLD_BIRT\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SCHL_NAME\" editdisplay=\"edit\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SCHL_YEAR\" combodataset=\"dsYear\" combocodecol=\"CODEID\" combodatacol=\"DSNAME\" combodisplay=\"edit\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SCHL_TERM\" combodataset=\"dsTerm\" combocodecol=\"CODEID\" combodatacol=\"DSNAME\" combodisplay=\"edit\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SCEX_CODE\" combodisplay=\"edit\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SCEX_AMOT\" mask=\"#,##0\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"10\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;SCEX_AMOT&quot;, 0)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("학자금신청현황");

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
        this.addIncludeScript("WFMB0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMB0030.xfdl", function() {
         /***************************************************************************************************
         * # Program : 학자금신청현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.22		전종원		Initial Created.
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
        this.sBUTTONLIST  = "TTFFFFFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMB0030";

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

        	var iNowDate = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRAPPR_DATE1.set_value(this.fnc_SubStr(iNowDate, 0, 4) + '0101');
        	this.calSHRAPPR_DATE2.set_value(this.fnc_SubStr(iNowDate)); 
        	this.calSHRAPPR_DATE1.setFocus();

        	/*권한에 따라 사원번호 수정 가능여부 결정(1-전체, 2-부문,3-소속,4-부서,5-개인)*/
        	/*개발을 위해 권한 level을 1로 셋팅*/
        	//this.sUSERLAVEL = 5;

        	switch(this.sUSERLAVEL){
        		case "1": 	//전체
        			this.imgHelpSHREMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
        			this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명
        			break;
        	}
        	
        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);

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
        	this.fnc_DatasetClear('dsWF_SCEXXD');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsWF_SCEXXD=dsWF_SCEXXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        	this.grdWF_SCEXXD.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능 없음
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
         |  10.화면 Close 時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsWF_SCEXXD", this);

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

        	if (this.fnc_DatasetChangeCheck("dsWF_SCEXXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청기간 FROM", this.calSHRAPPR_DATE1);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청기간 TO", this.calSHRAPPR_DATE2);
        	}
        	
        	if (this.calSHRAPPR_DATE1.value > this.calSHRAPPR_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "신청기간 FROM,신청기간 TO", this.calSHRAPPR_DATE1);
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
        	// 기능 없음
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DOCU_IDXX=" + this.fnc_Quote(this.fnc_Trim("KHR141")); 
        		//sReturnString += " APPR_STAT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPR_STAT.value)); 
        		sReturnString += " APPR_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE1.value)); 
        		sReturnString += " APPR_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATE2.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value + "%")); 

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
        	
        		this.fnc_Information(this.stInformation, this.dsWF_SCEXXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsWF_SCEXXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		this.dsWF_SCEXXD.set_keystring("G:EMPL_NAME,S:EMPL_NUMB");	//소계처리
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdWF_SCEXXD,dsSCEX_CODE,SCEX_CODE";
        		//arrParam[1] = "GRID,grdWF_SCEXXD,dsPERD_CODE,PERD_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} 

        }

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {

        		arrParam[0] = "HRM0004"; //HRM0001
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsWF_SCEXXD.addEventHandler("oncolumnchanged", this.dsWF_SCEXXD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdWF_SCEXXD.addEventHandler("onheadclick", this.grdWF_SCEXXD_onheadclick, this);
            this.grdWF_SCEXXD.addEventHandler("ondropdown", this.grdWF_SCEXXD_ondropdown, this);
            this.grdWF_SCEXXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("WFMB0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
