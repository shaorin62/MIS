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
                this.set_name("MDMA0020");
                this.set_titletext("수수료 일괄청약");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_ETCMXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REG0_BRAN\" type=\"STRING\" size=\"256\"/><Column id=\"REG1_BRAN\" type=\"STRING\" size=\"256\"/><Column id=\"REG2_BRAN\" type=\"STRING\" size=\"256\"/><Column id=\"REG3_BRAN\" type=\"STRING\" size=\"256\"/><Column id=\"REG4_BRAN\" type=\"STRING\" size=\"256\"/><Column id=\"REG5_BRAN\" type=\"STRING\" size=\"256\"/><Column id=\"REG6_BRAN\" type=\"STRING\" size=\"256\"/><Column id=\"REG7_BRAN\" type=\"STRING\" size=\"256\"/><Column id=\"REG8_BRAN\" type=\"STRING\" size=\"256\"/><Column id=\"REG9_BRAN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("수수료 일괄청약");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "221", "27", null, null, this);
            obj.set_taborder("68");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC00", "absolute", "93", "4", "50", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btn_PROC02", "absolute", "148", "4", "62", "21", null, null, this.divButtonList);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "89", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", null, "6", "980", null, this);
            obj.set_taborder("74");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", null, "4", "1032", null, this);
            obj.set_taborder("75");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "575", "0", null, "60", "575", null, this);
            obj.set_taborder("76");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", null, null, "15", "35", "0", this);
            obj.set_taborder("79");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "897", "23", null, "10", "25", null, this);
            obj.set_taborder("80");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "29", "71", null, "21", "1113", null, this);
            obj.set_taborder("84");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "519", "0", null, "29", "28", null, this);
            obj.set_taborder("86");
            obj.set_text("매체관리 > 전파광고");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "572", "103", null, "37", "534", null, this);
            obj.set_taborder("87");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "636", "56", null, "4", "421", null, this);
            obj.set_taborder("88");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Tab("tabXM", "absolute", "8", "113", null, null, "25", "15", this);
            obj.set_taborder("89");
            obj.set_tabindex("0");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.tabXM);
            obj.set_text("KOBANET");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_ETCMXM", "absolute", "10", "25", null, null, "10", "10", this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_binddataset("dsMD_ETCMXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"88\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"년월\"/><Cell col=\"2\" text=\"사업권역\"/><Cell col=\"3\" text=\"광고회사코드\"/><Cell col=\"4\" text=\"광고회사\"/><Cell col=\"5\" text=\"광고주코드\"/><Cell col=\"6\" text=\"광고주\"/><Cell col=\"7\" text=\"신탁구분\"/><Cell col=\"8\" text=\"합계\"/><Cell col=\"9\" text=\"본사\"/><Cell col=\"10\" text=\"부산지사\"/><Cell col=\"11\" text=\"대구지사\"/><Cell col=\"12\" text=\"광주지사\"/><Cell col=\"13\" text=\"대전지사\"/></Band><Band id=\"body\"><Cell text=\"bind:NUMB_NUMB\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"1\" text=\"bind:YEAR_MNTH\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"2\" text=\"bind:AREA_NAME\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"3\" text=\"bind:ENTP_CODE\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"4\" text=\"bind:ENTP_NAME\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"5\" text=\"bind:CUST_CODE\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"6\" text=\"bind:CUST_NAME\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"7\" text=\"bind:BUSI_FLAG\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:AMNT_FILD\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:REG0_BRAN\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:REG1_BRAN\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:REG2_BRAN\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:REG3_BRAN\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:REG4_BRAN\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "10", "4", null, "21", "914", null, this.tabXM.tab0);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_text("SBS");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "10", "4", null, "21", "914", null, this.tabXM.tab1);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_ETCMXM", "absolute", "10", "25", null, null, "10", "10", this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("2");
            obj.set_binddataset("dsMD_ETCMXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"138\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"년월\"/><Cell col=\"2\" text=\"사업권역\"/><Cell col=\"3\" text=\"광고회사코드\"/><Cell col=\"4\" text=\"광고회사\"/><Cell col=\"5\" text=\"광고주코드\"/><Cell col=\"6\" text=\"광고주\"/><Cell col=\"7\" text=\"신탁구분\"/><Cell col=\"8\" text=\"합계\"/><Cell col=\"9\" text=\"본사\"/><Cell col=\"10\" text=\"부산지사\"/><Cell col=\"11\" text=\"대구지사\"/><Cell col=\"12\" text=\"광주지사\"/><Cell col=\"13\" text=\"대전지사\"/><Cell col=\"14\" text=\"지사1\"/><Cell col=\"15\" text=\"지사2\"/><Cell col=\"16\" text=\"지사3\"/><Cell col=\"17\" text=\"지사4\"/><Cell col=\"18\" text=\"지사5\"/></Band><Band id=\"body\"><Cell text=\"bind:NUMB_NUMB\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"1\" text=\"bind:YEAR_MNTH\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"2\" text=\"bind:AREA_NAME\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"3\" text=\"bind:ENTP_CODE\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"4\" text=\"bind:ENTP_NAME\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"5\" text=\"bind:CUST_CODE\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"6\" text=\"bind:CUST_NAME\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"7\" text=\"bind:BUSI_FLAG\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:AMNT_FILD\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:REG0_BRAN\"/><Cell col=\"10\" text=\"bind:REG1_BRAN\"/><Cell col=\"11\" text=\"bind:REG2_BRAN\"/><Cell col=\"12\" text=\"bind:REG3_BRAN\"/><Cell col=\"13\" text=\"bind:REG4_BRAN\"/><Cell col=\"14\" text=\"bind:REG5_BRAN\"/><Cell col=\"15\" text=\"bind:REG6_BRAN\"/><Cell col=\"16\" text=\"bind:REG7_BRAN\"/><Cell col=\"17\" text=\"bind:REG8_BRAN\"/><Cell col=\"18\" text=\"bind:REG9_BRAN\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("95");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("96");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "572", "141", null, "25", "534", null, this);
            obj.set_taborder("97");
            obj.set_text("h25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "9", "180", "10", "80", null, null, this);
            obj.set_taborder("98");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "1151", "180", "10", "80", null, null, this);
            obj.set_taborder("100");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("101");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("102");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("calSHRYEAR_MNTH", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("103");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "194", "71", "51", "21", null, null, this);
            obj.set_taborder("104");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "249", "71", "80", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "331", "71", "23", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "354", "71", "140", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "9", "60", "30", "42", null, null, this);
            obj.set_taborder("108");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormDown", "absolute", "222", "35", "117", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("코바넷 양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnFormDown00", "absolute", "343", "35", "122", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("미크 양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 221, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("68");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab0,
            	//-- Layout function
            	function(p) {
            		p.set_text("KOBANET");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("SBS");
            		p.style.set_background("#ffffffff");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("수수료 일괄청약");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MDMA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MDMA0020.xfdl", function() {
         /***************************************************************************************************
         * # Program : MDMA0020 수수료 일괄청약
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.12.03		최제현 	Initial Created.
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

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "MDMA0020";
        this.sKeyValue    = new Array();

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
        	
        	this.calSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        	
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
        	this.fnc_DatasetClear("dsMD_ETCMXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_ETCMXM=dsMD_ETCMXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsMD_ETCMXM", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);

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

        	if (this.fnc_DatasetChangeCheck("dsMD_ETCMXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	// 필수 입력 항목 체크
        // 	for (var i = 0; i < this.dsMD_CTFLXM.getRowCount(); i++) {
        // 		
        // 		if (this.fnc_ToUpper(this.dsMD_CTFLXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        // 		
        // 		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CTFLXM.getColumn(i, "FILE_NAME"))) < 1) {
        // 			return this.fnc_CheckPostAction("TMM072", "파일명", this.dsMD_CTFLXM, i, this.grdMD_CTFLXM, 'FILE_NAME');
        // 		}	
        // 	}
        // 
        // 	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (totalNum) {

        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH.fn_GetMonth())); //년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); //광고주
         		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_NAME.value)); //광고주
        		if(this.tabXM.tabindex=='0'){
        			sReturnString += " KBNT_FLAG=" + this.fnc_Quote("A"); //코바넷
        		}else if(this.tabXM.tabindex=='1'){
        			sReturnString += " KBNT_FLAG=" + this.fnc_Quote("B"); //미크
        		}
        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH.fn_GetMonth())); //년월
        		if(this.tabXM.tabindex == '0'){
        			sReturnString += " KBNT_FLAG=" + this.fnc_Quote(this.fnc_Trim("A")); //코바넷 구분
        		}else if(this.tabXM.tabindex == '1'){
        			sReturnString += " KBNT_FLAG=" + this.fnc_Quote(this.fnc_Trim("B")); //코바넷 구분
        		}
        	} else if (sKind == "SAVE01") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH.fn_GetMonth())); //년월
        		if(this.tabXM.tabindex == '0'){
        			sReturnString += " KBNT_FLAG=" + this.fnc_Quote(this.fnc_Trim("A")); //코바넷 구분
        		}else if(this.tabXM.tabindex == '1'){
        			sReturnString += " KBNT_FLAG=" + this.fnc_Quote(this.fnc_Trim("B")); //코바넷 구분
        		}
        	} else if (sKind == "DELETE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.calSHRYEAR_MNTH.fn_GetMonth())); //년월
        		if(this.tabXM.tabindex=='0'){
        			sReturnString += " KBNT_FLAG=" + this.fnc_Quote("A"); //코바넷
        		}else if(this.tabXM.tabindex=='1'){
        			sReturnString += " KBNT_FLAG=" + this.fnc_Quote("B"); //미크
        		}
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
        		this.fnc_Information(this.tabXM.tab0.stInformation00, this.dsMD_ETCMXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.tabXM.tab1.stInformation00, this.dsMD_ETCMXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsMD_ETCMXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.tabXM.tab0.stInformation00, 0, "SAVE");
        		this.fnc_Information(this.tabXM.tab1.stInformation00, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.tabXM.tab0.stInformation00, 0, "SAVE");
        		this.fnc_Information(this.tabXM.tab1.stInformation00, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "DELETE00") {
        		alert('초기화 되었습니다.');
        		this.fn_Search();
         	}else if (sMethodName == "GetCommCode") {	
        	} 
        	
        	
        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {
        	//기능없음.
        }

        
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/

        /*--------------+
         |    초기화   |
         +--------------*/
        this.btn_PROC02_onclick = function(obj,e)
        {
        	var sMethodName = "DELETE00";
        	var sInDataSet  = "dsMD_ETCMXM=dsMD_ETCMXM:D";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*--------------+
         |  엑셀 업로드  |
         +--------------*/
        this.fn_ExcelUpload = function(obj,e){

        
        	if (this.fnc_DatasetChangeCheck("dsMD_ETCMXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsMD_ETCMXM");
        	this.fnc_ExcelUpload("dsMD_ETCMXM", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }

        this.fn_ExcelSuccess = function (obj,e) {
        	
        	this.setWaitCursor(false);
        	this.dsMD_ETCMXM.set_enableevent(false);
        	this.dsMD_ETCMXM.set_updatecontrol(false);

        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        		if(this.objDsImportTemp.getColumn(i, 0)!='' && this.objDsImportTemp.getColumn(i, 6)!=''){
        			var iRow = this.dsMD_ETCMXM.addRow();
        			this.dsMD_ETCMXM.setRowType(i, Dataset.ROWTYPE_INSERT);
        			this.dsMD_ETCMXM.setColumn(iRow, "YEAR_MNTH", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        			this.dsMD_ETCMXM.setColumn(iRow, "NUMB_NUMB", this.objDsImportTemp.getColumn(i, 0));
        			this.dsMD_ETCMXM.setColumn(iRow, "AREA_NAME", this.objDsImportTemp.getColumn(i, 1)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "ENTP_CODE", this.objDsImportTemp.getColumn(i, 2)); 
         			this.dsMD_ETCMXM.setColumn(iRow, "ENTP_NAME", this.objDsImportTemp.getColumn(i, 3));
         			this.dsMD_ETCMXM.setColumn(iRow, "CUST_CODE", this.objDsImportTemp.getColumn(i, 4)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "CUST_NAME", this.objDsImportTemp.getColumn(i, 5));
        			this.dsMD_ETCMXM.setColumn(iRow, "BUSI_FLAG", this.objDsImportTemp.getColumn(i, 6)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "AMNT_FILD", this.objDsImportTemp.getColumn(i, 7)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "REG0_BRAN", this.objDsImportTemp.getColumn(i, 8)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "REG1_BRAN", this.objDsImportTemp.getColumn(i, 9)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "REG2_BRAN", this.objDsImportTemp.getColumn(i, 10)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "REG3_BRAN", this.objDsImportTemp.getColumn(i, 11)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "REG4_BRAN", this.objDsImportTemp.getColumn(i, 12)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "REG5_BRAN", this.objDsImportTemp.getColumn(i, 13)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "REG6_BRAN", this.objDsImportTemp.getColumn(i, 14)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "REG7_BRAN", this.objDsImportTemp.getColumn(i, 15)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "REG8_BRAN", this.objDsImportTemp.getColumn(i, 16)); 
        			this.dsMD_ETCMXM.setColumn(iRow, "REG9_BRAN", this.objDsImportTemp.getColumn(i, 17));
        			this.dsMD_ETCMXM.setColumn(iRow,"DEPT_CODE",'301007');
        		}
        		
        	}
        	
        	if(this.tabXM.tabindex == '0'){
        		for(var i = 0;i< this.dsMD_ETCMXM.rowcount;i++){
        			this.dsMD_ETCMXM.setColumn(i,"KBNT_FLAG",'A');
        		}
        	}else if(this.tabXM.tabindex == '1'){
        		for(var i = 0;i< this.dsMD_ETCMXM.rowcount;i++){
        			//미크
        			this.dsMD_ETCMXM.setColumn(i,"KBNT_FLAG",'B');
        		}
        	}
        	for(var i = 0;i< this.dsMD_ETCMXM.rowcount;i++){
        		if(this.dsMD_ETCMXM.getColumn(i,"AREA_NAME")!='총계'){
        			
        			if(this.dsMD_ETCMXM.getColumn(i,"AREA_NAME")=='' ){
        				this.dsMD_ETCMXM.setColumn(i,"AREA_NAME",this.dsMD_ETCMXM.getColumn(i-1,"AREA_NAME"));
        			}
        			if(this.dsMD_ETCMXM.getColumn(i,"ENTP_CODE")==''){
        				this.dsMD_ETCMXM.setColumn(i,"ENTP_CODE",this.dsMD_ETCMXM.getColumn(i-1,"ENTP_CODE"));
        			}
        			if(this.dsMD_ETCMXM.getColumn(i,"ENTP_NAME")==''){
        				this.dsMD_ETCMXM.setColumn(i,"ENTP_NAME",this.dsMD_ETCMXM.getColumn(i-1,"ENTP_NAME"));
        			}
        			if(this.dsMD_ETCMXM.getColumn(i,"CUST_CODE")==''){
        				this.dsMD_ETCMXM.setColumn(i,"CUST_CODE",this.dsMD_ETCMXM.getColumn(i-1,"CUST_CODE"));

        			}
        			if(this.dsMD_ETCMXM.getColumn(i,"CUST_NAME")==''){
        				this.dsMD_ETCMXM.setColumn(i,"CUST_NAME",this.dsMD_ETCMXM.getColumn(i-1,"CUST_NAME"));
        			}
        		}
        	}

        	//수수료 일괄청약 저장

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsMD_ETCMXM=dsMD_ETCMXM:D";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.objDsImportTemp.clear();
        	this.dsMD_ETCMXM.set_updatecontrol(true);
        	this.dsMD_ETCMXM.set_enableevent(true);

        	this.dsMD_ETCMXM.set_rowposition(0);
        }

        

        
        this.btn_PROC00_onclick = function(obj,e)
        {
        	
        	//수수료 일괄청약 저장

        	var sMethodName = "SAVE01";
        	var sInDataSet  = "dsMD_ETCMXM=dsMD_ETCMXM:D";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
         //상단 광고주 팝업
         this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {	
        	var arrParam = new Array();
        	arrParam[0] = "MCM0005";                                 
        	arrParam[1] = "";                                         
        	arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); 
        	arrParam[3] = "N";                                         
        	arrParam[4] = "edtSHRCUST_NAME";                          
        	arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";   
        	arrParam[6] = "0,1";                                     
        		
        	this.fnc_HelpDialogeAction(this, obj, arrParam); 
        }
        this.tabXM_onchanged = function(obj,e)
        {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        	this.fn_Search();
        }

        
        this.fn_ExcelFileDown00 = function(obj,e)
        {
        	this.fnc_FileDownLoad("", "", "", "MDMA0021");
        }

        this.fn_ExcelFileDown01 = function(obj,e)
        {
        	this.fnc_FileDownLoad("", "", "", "MDMA0022");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btn_PROC00.addEventHandler("onclick", this.btn_PROC00_onclick, this);
            this.divButtonList.btn_PROC02.addEventHandler("onclick", this.btn_PROC02_onclick, this);
            this.btn_PROC.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.tabXM.addEventHandler("onchanged", this.tabXM_onchanged, this);
            this.tabXM.tab0.grdMD_ETCMXM.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_CUSTXM_onheadclick, this);
            this.tabXM.tab0.grdMD_ETCMXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_ETCMXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab1.grdMD_ETCMXM.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_CUSTXM_onheadclick, this);
            this.tabXM.tab1.grdMD_ETCMXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_ETCMXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown00, this);
            this.btnFormDown00.addEventHandler("onclick", this.fn_ExcelFileDown01, this);

        };

        this.loadIncludeScript("MDMA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
