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
                this.set_name("TXMD0030");
                this.set_titletext("사업소득지급명세");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_INCMXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"64\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"64\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_TELE\" size=\"32\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBS_GUBN\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"JOBS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_JUMN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DCNT\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_KMAK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OUTL_KMAK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INCM_TAXX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INHA_TAXX\" size=\"18\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEKM_TOKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACCT_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_STRT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RESI_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_MEMO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_PAYYXM_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PAYY_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"IMPT_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYY_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GABB_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"JUMI_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEAK_TOTL\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZZ_TYPE\" size=\"6\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTXM_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRCH_NAME\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZZ_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BRCH_ADDR\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"BRCH_REPR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXO_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"64\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZZ\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_ADDR\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_REPR\" size=\"64\" prop=\"default\" type=\"STRING\"/><Column id=\"JUNO_RGST\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"FRGN_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"IMPT_YEAR\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZZ_TYPE\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "105", "200", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("5");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_GITAGETA", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsTA_INCMXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"지급일\"/><Cell col=\"1\" displaytype=\"text\" text=\"거주구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"주민번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"상호\"/><Cell col=\"4\" displaytype=\"text\" text=\"소득자성명\"/><Cell col=\"5\" displaytype=\"text\" text=\"내외국인구분\"/><Cell col=\"6\" displaytype=\"text\" text=\"업종구분\"/><Cell col=\"7\" displaytype=\"text\" text=\"귀속년월\"/><Cell col=\"8\" displaytype=\"text\" text=\"지급액\"/><Cell col=\"9\" displaytype=\"text\" text=\"세율\"/><Cell col=\"10\" displaytype=\"text\" text=\"소득세\"/><Cell col=\"11\" displaytype=\"text\" text=\"주민세\"/><Cell col=\"12\" displaytype=\"text\" text=\"세액합계\"/><Cell col=\"13\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:SUPP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:RESI_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:RERN_NUMB\" mask=\"expr:comp.parent.fnc_Length(RERN_NUMB) &lt; 1 ? &quot;&quot; : &quot;######-#######&quot;\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:CUST_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:OWNR_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:FORI_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:JOBS_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: center;\" text=\"bind:PERS_YYMM\" mask=\"expr:comp.parent.fnc_Length(PERS_YYMM) &lt; 1 ? &quot;&quot; : &quot;####-##&quot;\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUPP_KMAK\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_RATE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INCM_TAXX\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INHA_TAXX\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SEKM_TOKM\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\" text=\"bind:GITA_MEMO\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" displaytype=\"text\" style=\"align: center;\" text=\"합계\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_KMAK&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;INCM_TAXX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;INHA_TAXX&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SEKM_TOKM&quot;)\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "28", "71", "60", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("귀속연월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "184", "71", "14", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            obj.style.set_font("9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "310", "71", "64", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("소득자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "366", "71", "80", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "471", "71", "120", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "448", "71", "21", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("사업소득지급명세");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("22");
            obj.set_text("홈 > 재무관리 > 세무회계 > 원천세 > 사업소득지급명세");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("23");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("30");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("32");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("33");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "281", "61", "40", "41", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRSUPP_DATE1", "absolute", "96", "71", "82", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRSUPP_DATE2", "absolute", "200", "71", "82", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사업소득지급명세");
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TXMD0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMD0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMD0030 사업소득지급명세
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
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

        this.sBUTTONLIST = "TTFFFFTF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "TXMD0030"; //해당 Form에서 사용 할 Package 명
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
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	// fnc_GetComboDs(dsCombo);

        	// 조회조건 초기값 세팅
        	this.divSHRSUPP_DATE1.fn_SetMonth((this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4) + "01"));
        	this.divSHRSUPP_DATE2.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6));
        }
         
        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	// 화면 종료
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	// 필수조회조건 체크
        	if (!this.fn_SearchItemCheck()) return;
        	this.dsTA_INCMXM.clearData();
        		
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_INCMXM=dsTA_INCMXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_GITAGETA.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
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
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
         // 2016 06 22 추가 -----------------------------------------------------

         this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         // ----------------------------------------------------------------------
        this.fn_FormUnloadProcess = function (obj,e) {
        	// 자료 변경 여부를 체크하고자 하는  DataSet Object를 넘긴다.
        	//return this.fnc_FormUnloadCheck("", this);
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
        	if (this.fnc_Length(this.fnc_Trim(this.divSHRSUPP_DATE1.fn_GetMonth())) != 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급연월 시작일", this.divSHRSUPP_DATE1);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.divSHRSUPP_DATE2.fn_GetMonth())) != 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "지급연월 종료일", this.divSHRSUPP_DATE2);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.divSHRSUPP_DATE1.fn_GetMonth())) == 6 && this.fnc_Length(this.fnc_Trim(this.divSHRSUPP_DATE2.fn_GetMonth())) == 6) {
        		if (this.fnc_Trim(this.divSHRSUPP_DATE1.fn_GetMonth()) > this.fnc_Trim(this.divSHRSUPP_DATE2.fn_GetMonth())) {
        			return this.fnc_SearchCheckPostAction("TMM042", "지급기간 시작일,지급기간 종료일", this.divSHRSUPP_DATE2);
        		}
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (){
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){
        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SUPP_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.divSHRSUPP_DATE1.fn_GetMonth()));
        		sReturnString += " SUPP_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.divSHRSUPP_DATE2.fn_GetMonth()));
        		sReturnString += " CUST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value));
        	}

        	return sReturnString;
        	// 생성된 String 반환
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	// this.fnc_CloseProgress(); //Service 후 Progress Bar Close

        	// Service에서 오류 발생 시 처리
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
        		this.fnc_Information(this.stInformation, this.dsTA_INCMXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display
        		this.fnc_Message("TMM018", this.dsTA_INCMXM.rowcount); //정상 종료 메세지
        	}

        }

        

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow) {
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,nX,nY) {

        	var arrParam = new Array();
        	
        	if(obj.name == "imgHelpSHRCUST_NAME" || obj.name == "edtSHRCUST_NAME"){
        	
        		if (this.edtSHRCUST_NAME.enable == false) return;
        					
        		arrParam[0] = "TXM0102";
        		arrParam[1] = "FA010010";	//사업소득
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRCUST_NAME";
        		arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} 

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.divSHRSUPP_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divSHRSUPP_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMD0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
