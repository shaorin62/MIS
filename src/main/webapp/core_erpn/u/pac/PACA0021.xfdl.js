﻿(function()
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
                this.set_name("PACA0021");
                this.set_titletext("전자세금계산서관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSTAT_FLAG", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STAT_NAME\">전체</Col></Row><Row><Col id=\"STAT_FLAG\">I</Col><Col id=\"STAT_NAME\">수신미승인(I)</Col></Row><Row><Col id=\"STAT_FLAG\">C</Col><Col id=\"STAT_NAME\">수신승인(C)</Col></Row><Row><Col id=\"STAT_FLAG\">R</Col><Col id=\"STAT_NAME\">수신거부(R)</Col></Row><Row><Col id=\"STAT_FLAG\">O</Col><Col id=\"STAT_NAME\">취소완료(O)</Col></Row><Row><Col id=\"STAT_FLAG\">E</Col><Col id=\"STAT_NAME\">에러(E)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsXXSB_DTI_MAIN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_REGNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_REGNO\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TAX_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"DTI_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "96", "25", null, this);
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
            obj.set_text("전자세금계산서관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 제작시스템>회계관리>회계관리>전자세금계산서관리");
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

            obj = new Static("stInformation", "absolute", "8", "170", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "65", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("작성일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "81", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
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

            obj = new Static("Static07", "absolute", "632", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "185", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "27", "97", "51", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "134", "97", "80", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "216", "97", "21", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "239", "97", "120", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "28", "123", "101", "21", null, null, this);
            obj.set_taborder("124");
            obj.set_text("세금계산서상태");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRDTI_STATUS", "absolute", "134", "123", "225", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("125");
            obj.set_value("I");
            obj.set_text("수신미승인(I)");
            obj.set_innerdataset("dsSTAT_FLAG");
            obj.set_codecolumn("STAT_FLAG");
            obj.set_datacolumn("STAT_NAME");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("1");

            obj = new Static("Static12", "absolute", "392", "123", "69", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("승인번호");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRAPPROVE_ID", "absolute", "473", "123", "169", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "239", "71", "14", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn1ST", "absolute", "402", "71", "58", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_text("1분기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn2ST", "absolute", "463", "71", "58", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_text("2분기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn3ST", "absolute", "524", "71", "58", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_text("3분기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn4ST", "absolute", "585", "71", "58", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_text("4분기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "391", "97", "91", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBYR_COM_REGNO", "absolute", "473", "97", "169", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "357", "156", "81", "35", null, null, this);
            obj.set_taborder("142");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdXXSB_DTI_MAIN", "absolute", "8", "191", null, null, "25", "15", this);
            obj.set_taborder("143");
            obj.set_binddataset("dsXXSB_DTI_MAIN");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"80\"/><Column size=\"114\"/><Column size=\"128\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"136\"/><Column size=\"132\"/><Column size=\"125\"/><Column size=\"111\"/><Column size=\"111\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"작성일자\"/><Cell col=\"2\" text=\"공급자사업자번호\"/><Cell col=\"3\" text=\"공급자명\"/><Cell col=\"4\" text=\"공급받는자사업자번호\"/><Cell col=\"5\" text=\"공급받는자명\"/><Cell col=\"6\" text=\"공급가액\"/><Cell col=\"7\" text=\"부가세액\"/><Cell col=\"8\" text=\"합계급액\"/><Cell col=\"9\" text=\"최종상태\"/><Cell col=\"10\" text=\"전송상태\"/><Cell col=\"11\" text=\"국세청\"/><Cell col=\"12\" text=\"공급받는자메일주소\"/><Cell col=\"13\" text=\"CONVERSATION_ID\"/><Cell col=\"14\" text=\"발행취소사유\"/><Cell col=\"15\" text=\"오류 상세내용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:DTI_WDATE\"/><Cell col=\"2\" text=\"bind:SUP_COM_REGNO\"/><Cell col=\"3\" text=\"bind:SUP_COM_NAME\"/><Cell col=\"4\" text=\"bind:BYR_COM_REGNO\"/><Cell col=\"5\" text=\"bind:BYR_COM_NAME\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUP_AMOUNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAX_AMOUNT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTAL_AMOUNT\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:DTI_STATUS\" combodataset=\"dsSTAT_FLAG\" combocodecol=\"STAT_FLAG\" combodatacol=\"STAT_NAME\" combodisplay=\"edit\"/><Cell col=\"10\" displaytype=\"combo\" text=\"bind:TRAN_STATUS\" combodataset=\"dsSTAT_FLAG\" combocodecol=\"STAT_FLAG\" combodatacol=\"STAT_NAME\" combodisplay=\"edit\"/><Cell col=\"11\" text=\"bind:APPROVE_ID\"/><Cell col=\"12\" edittype=\"normal\" text=\"bind:BYR_EMAIL\"/><Cell col=\"13\" text=\"bind:CONVERSATION_ID\"/><Cell col=\"14\" edittype=\"text\" text=\"bind:REASON\"/><Cell col=\"15\" edittype=\"none\" text=\"bind:RETURN_DESCRIPTION\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"5\" style=\"align: center;\" text=\"합계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUP_AMOUNT&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAX_AMOUNT&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TOTAL_AMOUNT&quot;)\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("calDTI_WDATE1", "absolute", "133", "71", "103", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("calDTI_WDATE2", "absolute", "256", "71", "103", "21", null, null, this);
            obj.set_taborder("145");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnEMAL_RESE", "absolute", null, "166", "98", "21", "25", null, this);
            obj.set_taborder("146");
            obj.set_text("이메일 재 발송");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDELE_TAXX", "absolute", null, "166", "130", "21", "129", null, this);
            obj.set_taborder("147");
            obj.set_text("세금계산서발행취소");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "656", "123", "261", "20", null, null, this);
            obj.set_taborder("148");
            obj.set_text("상태변경 시 하단에 버튼이 활성화 됩니다.");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Button("btnNOTICELIST", "absolute", null, "134", "130", "21", "26", null, this);
            obj.set_taborder("149");
            obj.set_text("스마트빌 공지사항");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전자세금계산서관리");

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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PACA0021.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PACA0021.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PACA0021 전자세금계산서관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.04		오세훈		Initial Created.
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
        this.sBUTTONLIST 	= "TTFFFFTT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PACA0021"; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

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
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         **************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.calDTI_WDATE1.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        	this.calDTI_WDATE2.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));

        
        	//최소 수신미승인 상태 버튼 관리
        	this.btnEMAL_RESE.set_visible(true);
        	this.btnDELE_TAXX.set_visible(true);
        		
        	this.fn_Search();
        	
        	
        	var url = application.GBL_HTTPURL;
        	url = url + "/html/noticeList.html";
        	this.WebBrowser00.set_url(url);

        } 
        /*----------------------------------+
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
        	this.fnc_DatasetClear("dsXXSB_DTI_MAIN");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsXXSB_DTI_MAIN=dsXXSB_DTI_MAIN";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
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
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e); //2016 06 22 변경
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
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        
        /*-----------------------+ 
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if ((this.fnc_DatasetChangeCheck("dsXXSB_DTI_MAIN")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsXXSB_DTI_MAIN") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var iCNT = 0;
        	for(var i = 0; i < this.dsXXSB_DTI_MAIN.rowcount; i++){
        		if(this.dsXXSB_DTI_MAIN.getColumn(i, "CHK") == 1){
        			iCNT += 1;
        		}
        	}
        		
        	if(iCNT==0){
        		this.fnc_Message("PCM001");
        		return  false;
        	}	
        	
        	
        	return true;
        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DTI_WDATE1=" + this.fnc_Quote(this.calDTI_WDATE1.fn_GetMonth()); //세금계산서 발행일자
        		sReturnString += " DTI_WDATE2=" + this.fnc_Quote(this.calDTI_WDATE2.fn_GetMonth()); //세금계산서 발행일자
        		sReturnString += " CUST_CODE="  + this.fnc_Quote(this.edtSHRCUST_CODE.value); // 광고주코드
        		sReturnString += " CUST_NAME="  + this.fnc_Quote(this.edtSHRCUST_NAME.value); // 광고주명
        		sReturnString += " BYR_COM_REGNO="  + this.fnc_Quote(this.edtSHRBYR_COM_REGNO.value); // 광고주 사업자번호
        		sReturnString += " APPROVE_ID="  + this.fnc_Quote(this.edtSHRAPPROVE_ID.value); // 국세청 승인번호
        		sReturnString += " DTI_STATUS="  + this.fnc_Quote(this.cmbSHRDTI_STATUS.value); // 세금계산서 상태

        	}  else if (sKind == "SAVE00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        			
        	}	else if (sKind == "SAVE01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        			
        	}

        	return sReturnString;

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.alert("session error");
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
        		this.fnc_Information(this.stInformation, this.dsXXSB_DTI_MAIN.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        		
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         
         //1분기
        this.btn1ST_onclick = function(obj,e)
        {

        	this.calDTI_WDATE1.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4 ) + '01');
        	this.calDTI_WDATE2.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4 ) + '03');
        }

        //2분기
        this.btn2ST_onclick = function(obj,e)
        {
        	this.calDTI_WDATE1.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4 ) + '04');
        	this.calDTI_WDATE2.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4 ) + '06');
        }

        //3분기
        this.btn3ST_onclick = function(obj,e)
        {
        	this.calDTI_WDATE1.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4 ) + '07');
        	this.calDTI_WDATE2.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4 ) + '09');
        }

        //4분기
        this.btn4ST_onclick = function(obj,e)
        {
        	this.calDTI_WDATE1.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4 ) + '10');
        	this.calDTI_WDATE2.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4 ) + '12');
        }

        //세금계산서 상태 변경에 따른 조회
        this.cmbSHRDTI_STATUS_onitemchanged = function(obj,e)
        {
        	this.fn_Search();	
        	
        	//수신 미승인
        	if(this.cmbSHRDTI_STATUS.value == "I"){
        		this.btnEMAL_RESE.set_visible(true);
        		this.btnDELE_TAXX.set_visible(true);
        		
        	//수신 승인
        	}else if(this.cmbSHRDTI_STATUS.value == "C"){
        	
        		this.btnEMAL_RESE.set_visible(false);
        		this.btnDELE_TAXX.set_visible(false);
        		
        	
        	//수신 거부
        	}else if(this.cmbSHRDTI_STATUS.value == "R"){
        	
        		this.btnEMAL_RESE.set_visible(false);
        		this.btnDELE_TAXX.set_visible(false);
        	
        	//취소 완료
        	}else if(this.cmbSHRDTI_STATUS.value == "O"){
        		this.btnEMAL_RESE.set_visible(false);
        		this.btnDELE_TAXX.set_visible(false);
        	
        	}else{
        		this.btnEMAL_RESE.set_visible(false);
        		this.btnDELE_TAXX.set_visible(false);
        	}
        }

        //전자세금계산서 발송취소
        this.btnCRET_TAXX_onclick = function(obj,e)
        {
        	if (!this.fn_SaveItemCheck()) return;
        	
        	if(this.fnc_Message("PAC007")){
        		var sMethodName = "SAVE00";
        		var sInDataSet  = "dsXXSB_DTI_MAIN=dsXXSB_DTI_MAIN:U";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        	}
        }

        //이메일 재발송
        this.btnEMAL_RESE_onclick = function(obj,e)
        {
        	if (!this.fn_SaveItemCheck()) return;
        	
        		this.fnc_Message("TMM300", "선택한 데이터의 메일이 재 발송 됩니다.");

        		var sMethodName = "SAVE01";
        		var sInDataSet  = "dsXXSB_DTI_MAIN=dsXXSB_DTI_MAIN:U";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	

        }

        

        

        this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRCUST_NAME') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'PDM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        this.btnBoard_onclick = function(obj,e)
        {
        	
        }

        this.btnNOTICELIST_onclick = function(obj,e)
        {
        		//스마트빌 공지사항 팝업
        	 var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=750";       //현재 반응 없음
        		sOpenStyle += ",height=305";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("PACA0022P01", "pac::PACA0021P01.xfdl", {}, sOpenStyle, "");	
        }

        this.btnTAX_VIEW_onclick = function(obj,e)
        {	
        		//스마트빌 공지사항 팝업
        	 var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=750";       //현재 반응 없음
        		sOpenStyle += ",height=305";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("PACA0022P01", "pac::PACA0021P01.xfdl", {}, sOpenStyle, "");	
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
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.cmbSHRDTI_STATUS.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRDTI_STATUS.addEventHandler("onitemchanged", this.cmbSHRDTI_STATUS_onitemchanged, this);
            this.edtSHRAPPROVE_ID.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.btn1ST.addEventHandler("onclick", this.btn1ST_onclick, this);
            this.btn2ST.addEventHandler("onclick", this.btn2ST_onclick, this);
            this.btn3ST.addEventHandler("onclick", this.btn3ST_onclick, this);
            this.btn4ST.addEventHandler("onclick", this.btn4ST_onclick, this);
            this.edtSHRBYR_COM_REGNO.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.grdXXSB_DTI_MAIN.addEventHandler("onheadclick", this.grdPD_SATXXH_onheadclick, this);
            this.btnEMAL_RESE.addEventHandler("onclick", this.btnEMAL_RESE_onclick, this);
            this.btnDELE_TAXX.addEventHandler("onclick", this.btnCRET_TAXX_onclick, this);
            this.btnNOTICELIST.addEventHandler("onclick", this.btnNOTICELIST_onclick, this);

        };

        this.loadIncludeScript("PACA0021.xfdl");
        this.loadPreloadList();
       
    };
}
)();
