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
                this.set_name("HRMK0030");
                this.set_titletext("증명서발급현황");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">STSD_CODE</Col><Col id=\"DSNAME\">dsSHRSTSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_CERSIS", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"APPL_DATE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"APPL_SEQN\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"STSD_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"STSD_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"LADN_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"LADN_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CSUS_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CSUS_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CERS_USEX\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"SBMT_ORGT\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"ISSU_DATE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"ISSU_NUMB\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"ISSU_PCNT\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"APPL_PCNT\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"PCOC_YSNO\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"APPL_YEAR\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"RCGN_DATE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"APPD_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CPOS_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CPOS_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DURS_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"DURS_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"OPOS_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"SECT_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "865", "61", "40", "41", null, null, this);
            obj.set_taborder("15");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
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
            obj.set_text("증명서발급현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("인사관리 > 증명관리 > 증명서발급현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRISSU_DATE", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("발급기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("staDEPT_NAME", "absolute", "342", "71", "68", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRSTSD_CODE", "absolute", "894", "71", "70", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("발급구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTSD_CODE", "absolute", "963", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("11");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "313", "61", "40", "41", null, null, this);
            obj.set_taborder("13");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "589", "61", "40", "41", null, null, this);
            obj.set_taborder("14");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("17");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("18");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("19");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "806", "56", "128", "4", null, null, this);
            obj.set_taborder("20");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "121", "216", "7", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_CERSIS", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("34");
            obj.set_binddataset("dsHR_CERSIS");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"76\"/><Column size=\"0\"/><Column size=\"117\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"62\"/><Column size=\"62\"/><Column size=\"180\"/><Column size=\"240\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"발급구분\"/><Cell col=\"1\" text=\"발급번호\"/><Cell col=\"2\" text=\"발급일\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"소속\"/><Cell col=\"6\" text=\"부서\"/><Cell col=\"7\" text=\"직급\"/><Cell col=\"8\" text=\"직책\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" text=\"언어\"/><Cell col=\"11\" text=\"발행년도\"/><Cell col=\"12\" text=\"제출처\"/><Cell col=\"13\" text=\"용도\"/><Cell col=\"14\" text=\"세부용도\"/><Cell col=\"15\" text=\"신청매수\"/><Cell col=\"16\" text=\"인쇄매수\"/><Cell col=\"17\" displaytype=\"text\" text=\"반려사유\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" text=\"bind:STSD_NAME\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:ISSU_NUMB\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:ISSU_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:EMPL_NAME\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:SECT_NAME\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:CPOS_NAME\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:DURS_NAME\"/><Cell col=\"9\" displaytype=\"text\" text=\"bind:OPOS_NAME\"/><Cell col=\"10\" displaytype=\"text\" text=\"bind:LADN_NAME\"/><Cell col=\"11\" displaytype=\"text\" text=\"bind:APPL_YEAR\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SBMT_ORGT\"/><Cell col=\"13\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CSUS_NAME\"/><Cell col=\"14\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CERS_USEX\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:APPL_PCNT\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ISSU_PCNT\"/><Cell col=\"17\" displaytype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "-3", "103", "216", "7", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRISSU_DATE1", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "198", "71", "14", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRISSU_DATE2", "absolute", "213", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "384", "71", "80", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "466", "71", "21", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "489", "71", "100", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "660", "71", "80", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "742", "71", "21", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "765", "71", "100", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staSHREMPL_NUMB", "absolute", "618", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("증명서발급현황");

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
        this.addIncludeScript("HRMK0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMK0030.xfdl", function() {
         /***************************************************************************************************
         * # Program: 	HRMK0030 증명서발급현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.05		KS			Initial Created.
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
         * 화면 변수 선언부 *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HRMK0030"; //해당 Form에서 사용 할 Package 명 

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
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        		
        	this.calSHRISSU_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6)+ '01');
        	this.calSHRISSU_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.calSHRISSU_DATE1.setFocus();
        	
        	//권한
        	switch (this.sUSERLAVEL) 
          	{
          		case "1" : 	//전체
        			this.imgHelpSHRDEPT_CODE.set_enable(true); 	//검색조건 부서 선택
        			this.edtSHRDEPT_NAME.set_enable(true); 		//검색조건 부서명
        			this.imgHelpSHREMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
        			this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명	
        		break;
        	
        		case "2" :	//부문   					
        		break;
        		
        		case "3" :	//부실   					
        		break;
        		
        		case "4" :	//부서
        		break;	
        	
        		case "5" :	//개인
        			this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        			this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        			this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        			this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        		
        			this.fn_Search();
        		break;
        			
        		default :
        		break;
          	}
         
        }

        /*---------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時   |
         ----------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.fnc_DatasetClear('dsHR_CERSIS');

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_CERSIS=dsHR_CERSIS";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_CERSIS.setFocus();
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        //기능없음
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        //기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsHR_CERSIS");
        	this.grdHR_CERSIS.setFocus();
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        //기능없음
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        // 기능 없음
        }

        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_CERSIS", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }
         
        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)   |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때  |
         +-----------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_CERSIS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRISSU_DATE1.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "발급기간", this.calSHRISSU_DATE1);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRISSU_DATE2.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "발급기간", this.calSHRISSU_DATE2);
        	}
        	if (this.fnc_Trim(this.calSHRISSU_DATE1.value) > this.fnc_Trim(this.calSHRISSU_DATE2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "발급기간 시작일, 종료일", this.calSHRISSU_DATE1);
        	}

        	return true;
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        //기능없음
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {
        //기능없음
        }

        /*-------------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') 
        	{
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
        		sReturnString += " ISSU_STDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHRISSU_DATE1.value)); 
        		sReturnString += " ISSU_ENDT=" + this.fnc_Quote(this.fnc_Trim(this.calSHRISSU_DATE2.value));
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " STSD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSTSD_CODE.value));			
        	}

        	return sReturnString;	
        }

        /*--------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +---------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) 
        	{
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
        	
        	if (sMethodName == 'SEARCH00') 
        	{
        		this.fnc_Information(this.stInformation, this.dsHR_CERSIS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_CERSIS.getCaseCount("dataset.getRowLevel(currow)==0"));
        	} 
        	else if (sMethodName == "GetCommCode") 
        	{
        		var arrParam = new Array(); 
        		arrParam[0] = "COMBO,cmbSHRSTSD_CODE,dsSHRSTSD_CODE,0";   
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*-------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        //기능없음
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                               *
         ***************************************************************************************************/
        /*------------------------+
         |  Help Popup Open       |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {
        	
        	if(obj.readonly == true) return;
        	
        	var arrParam = new Array();
        	
        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) 
        	{
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	// 조회조건 - 사원정보조회(Popup)
        	else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
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
            this.dsHR_CERSIS.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRSTSD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdHR_CERSIS.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.calSHRISSU_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRISSU_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HRMK0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
