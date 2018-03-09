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
                this.set_name("WFMF0010");
                this.set_titletext("전산자원관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_COMRMN", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" type=\"STRING\" size=\"6\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"10\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"OPOS_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"COMR_SEQN\" type=\"STRING\" size=\"5\"/><Column id=\"COMR_MNNO\" type=\"STRING\" size=\"20\"/><Column id=\"PBCM_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"STCM_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"OTCM_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"TYPE_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"MODE_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"CPUX_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"RAMX_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"HDDX_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"OSXX_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"PCHS_YMTH\" type=\"STRING\" size=\"8\"/><Column id=\"STRG_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsTYPE_CODE</Col><Col id=\"CODEID\">TYPE_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">USEX_CODE</Col><Col id=\"DSNAME\">dsUSEX_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSTRG_CODE</Col><Col id=\"CODEID\">STRG_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRSTDS_YMTH", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" type=\"STRING\" size=\"8\"/><Column id=\"STDS_YMTH1\" type=\"STRING\" size=\"8\"/><Column id=\"STDS_YMTH2\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRBEFO_DTYN", this);
            obj._setContents("<ColumnInfo><Column id=\"BEFO_DTYN\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCW_COMRMN1", this);
            obj._setContents("<ColumnInfo><Column id=\"COMR_MNNO\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
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
            obj.set_text("전산자원관리");
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

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("기준월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("12");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 25");
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

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCW_COMRMN", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("17");
            obj.set_binddataset("dsCW_COMRMN");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"기준월\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"관리부서\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"성명\"/><Cell col=\"3\" text=\"직위\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"관리번호\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"공동\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"예비\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"기타\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"용도\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"기종\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_edit\" text=\"모델명\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_edit\" text=\"CPU\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_edit\" text=\"RAM\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_edit\" text=\"HDD\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_edit\" text=\"OS\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_edit\" text=\"구입월\"/><Cell col=\"16\" cssclass=\"Cellgrd_WF_edit\" text=\"보관유무\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" editfilter=\"number\" text=\"bind:STDS_YMTH\" mask=\"yyyy-MM\" editlimit=\"6\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:DEPT_NAME\" editdisplay=\"edit\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;\" text=\"bind:EMPL_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" text=\"bind:OPOS_NAME\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:COMR_MNNO\" editlimit=\"20\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PBCM_YSNO\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:STCM_YSNO\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:OTCM_YSNO\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:USEX_CODE\" editdisplay=\"display\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:TYPE_CODE\" editdisplay=\"display\"/><Cell col=\"10\" edittype=\"text\" style=\"align:left;\" text=\"bind:MODE_NAME\" editlimit=\"50\" editdisplay=\"edit\"/><Cell col=\"11\" edittype=\"text\" style=\"align:left;\" text=\"bind:CPUX_NAME\" editlimit=\"50\" editdisplay=\"edit\"/><Cell col=\"12\" edittype=\"text\" style=\"align:left;\" text=\"bind:RAMX_NAME\" editlimit=\"50\" editdisplay=\"edit\"/><Cell col=\"13\" edittype=\"text\" style=\"align:left;\" text=\"bind:HDDX_NAME\" editlimit=\"50\" editdisplay=\"edit\"/><Cell col=\"14\" edittype=\"text\" style=\"align:left;\" text=\"bind:OSXX_NAME\" editlimit=\"50\" editdisplay=\"edit\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"mask\" editfilter=\"number\" style=\"align:center;\" text=\"bind:PCHS_YMTH\" mask=\"####-##\" editlimit=\"6\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:STRG_CODE\" editdisplay=\"display\"/><Cell col=\"17\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"100\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "246", "71", "52", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "288", "71", "80", "21", null, null, this);
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "370", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "393", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "523", "71", "52", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("성명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "565", "71", "80", "21", null, null, this);
            obj.set_enable("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "647", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "670", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "217", "61", "40", "41", null, null, this);
            obj.set_taborder("24");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "493", "61", "40", "41", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "110", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("이전 데이터 복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRSTDS_YMTH", "absolute", "83", "71", "112", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRSTDS_YMTH", "absolute", "196", "71", "21", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "1237", "398", "344", "118", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "326", "67", null, null, this.popINSERT);
            obj.set_taborder("30");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "273", "84", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("31");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "208", "84", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("32");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "215", "44", "120", "21", null, null, this.popINSERT);
            obj.set_taborder("33");
            obj.set_text("으로 복사합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "215", "18", "120", "21", null, null, this.popINSERT);
            obj.set_taborder("34");
            obj.set_text("의 데이터를");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_TO", "absolute", "29", "44", "87", "21", null, null, this.popINSERT);
            obj.set_taborder("35");
            obj.set_text("대상년월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_FROM", "absolute", "29", "18", "87", "21", null, null, this.popINSERT);
            obj.set_taborder("36");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Div("medSHRPAYX_DATE_FROM", "absolute", "108", "18", "100", "21", null, null, this.popINSERT);
            obj.set_taborder("37");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Div("medSHRPAYX_DATE_TO", "absolute", "108", "44", "100", "21", null, null, this.popINSERT);
            obj.set_taborder("38");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "1207", "399", "182", "8", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "1207", "474", "294", "8", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "1238", "418", "8", "96", null, null, this);
            obj.set_taborder("32");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "1572", "418", "8", "96", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 344, 118, this.popINSERT,
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
            		p.set_titletext("전산자원관리");

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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("WFMF0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMF0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	WFMF0010 전산자원관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.08		김용만		Initial Created.
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMF0010"; //해당 Form에서 사용 할 Package 명 
        this.GBL_KEYROWPOSITION1 = "";
        this.GBL_KEYROWPOSITION2 = "";
        this.GBL_KEYROWPOSITION3 = "";

        

        
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
        	
        	this.divSHRSTDS_YMTH.calMONTH.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6));
        		
        	var iRow = this.dsSHRSTDS_YMTH.addRow();
        	this.dsSHRSTDS_YMTH.set_rowposition(iRow); 
        	this.dsSHRSTDS_YMTH.setColumn(0,"STDS_YMTH", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6));
        	
        	this.popINSERT.medSHRPAYX_DATE_FROM.fn_CalendarCustomEvent(this, "fnc_MonthOnChanged");
        	this.popINSERT.medSHRPAYX_DATE_TO.fn_CalendarCustomEvent(this, "fnc_MonthOnChanged");
        	
        	
        	/* 전월 데이터 유무 조회 
        	var sMethodName = "SEARCH01"; 
        	var sInDataSet = "";
        	var sOutDataSet = "dsSHRBEFO_DTYN=dsSHRBEFO_DTYN";
        	
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	*/
        	
        	this.divSHRSTDS_YMTH.calMONTH.setFocus();
        	//검색조건 포커스

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
        	
        	this.fnc_DatasetClear('dsCW_COMRMN');

        	/*전산자원관리 데이터 조회*/
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_COMRMN=dsCW_COMRMN";
        	
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	/*전산자원관리 키값 데이터 조회 */
        	var sMethodName = "SEARCH02";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_COMRMN1=dsCW_COMRMN1";
        	
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	
        	this.grdCW_COMRMN.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsCW_COMRMN.addRow();

        	this.dsCW_COMRMN.set_rowposition(iRow); 
        	
        	var mm 		= "";
        	
        	if(this.divSHRSTDS_YMTH.calMONTH.getMonth() < 10){
        		mm = "0" + this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}else{
        		mm = this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}
        	
        	this.dsCW_COMRMN.setColumn(iRow,"STDS_YMTH",this.divSHRSTDS_YMTH.calMONTH.getYear()+""+mm);
        		
        	this.grdCW_COMRMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_COMRMN, "STDS_YMTH"));
        	this.grdCW_COMRMN.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsCW_COMRMN.deleteRow(this.dsCW_COMRMN.rowposition);
        	this.grdCW_COMRMN.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsCW_COMRMN");
        	this.fnc_DataSetCancel("dsCW_COMRMN1");
        	this.grdCW_COMRMN.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.GBL_KEYROWPOSITION1= this.dsCW_COMRMN.getColumn(this.dsCW_COMRMN.rowposition,"STDS_YMTH");
        	this.GBL_KEYROWPOSITION2 = this.dsCW_COMRMN.getColumn(this.dsCW_COMRMN.rowposition,"COMR_SEQN");
        	this.GBL_KEYROWPOSITION3 = this.dsCW_COMRMN.getColumn(this.dsCW_COMRMN.rowposition,"DEPT_CODE");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsCW_COMRMN=dsCW_COMRMN:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdCW_COMRMN.setFocus();

        	
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
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_COMRMN", this);

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
        	
        	var mm 		= "";
        	
        	if(this.divSHRSTDS_YMTH.calMONTH.getMonth() < 10){
        		mm = "0" + this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}else{
        		mm = this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_COMRMN")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim( this.divSHRSTDS_YMTH.calMONTH.getYear()+""+mm )) < 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준월", this.divSHRSTDS_YMTH.calMONTH);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsCW_COMRMN.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	var sQuestionText = "성명:" + this.fnc_Trim(this.dsCW_COMRMN.getColumn(this.dsCW_COMRMN.rowposition, "EMPL_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	
        	if (!this.fnc_DatasetChangeCheck("dsCW_COMRMN")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var rowCnt = this.dsCW_COMRMN.getRowCount();
        	var rowCntKey = this.dsCW_COMRMN1.getRowCount();
        	
        	for (var i = 0; i < rowCnt; i++) {

        		if (this.fnc_ToUpper(this.dsCW_COMRMN.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COMRMN.getColumn(i, 'STDS_YMTH'))) < 1) {
        			this.grdCW_COMRMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_COMRMN, "STDS_YMTH"));
        			this.grdCW_COMRMN.setFocus();
        			return this.fnc_CheckPostAction("TMM072", "기준년월", this.dsCW_COMRMN, i, this.grdHR_APPOXD, "STDS_YMTH");
        		}
        		
        		if (this.fnc_SubStr(this.fnc_Trim(this.dsCW_COMRMN.getColumn(i, 'STDS_YMTH')),4,6) > 12) {
        			this.grdCW_COMRMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_COMRMN, "STDS_YMTH"));
        			this.grdCW_COMRMN.setFocus();
        			return this.fnc_CheckPostAction("TMM119", "기준년월", this.dsCW_COMRMN, i, this.grdHR_APPOXD, "STDS_YMTH");
        		}
        		
        		if (this.fnc_SubStr(this.fnc_Trim(this.dsCW_COMRMN.getColumn(i, 'PCHS_YMTH')),4,6) > 12) {
        			this.grdCW_COMRMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_COMRMN, "PCHS_YMTH"));
        			this.grdCW_COMRMN.setFocus();
        			return this.fnc_CheckPostAction("TMM119", "구입월", this.dsCW_COMRMN, i, this.grdHR_APPOXD, "PCHS_YMTH");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COMRMN.getColumn(i, 'DEPT_CODE'))) < 1) {
        			this.grdCW_COMRMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_COMRMN, "DEPT_NAME"));
        			this.grdCW_COMRMN.setFocus();
        			return this.fnc_CheckPostAction("TMM072", "관리부서", this.dsCW_COMRMN, i, this.grdHR_APPOXD, "DEPT_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COMRMN.getColumn(i, 'COMR_MNNO'))) < 1) {
        			this.grdCW_COMRMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_COMRMN, "COMR_MNNO"));
        			this.grdCW_COMRMN.setFocus();
        			return this.fnc_CheckPostAction("TMM072", "관리번호", this.dsCW_COMRMN, i, this.grdHR_APPOXD, "COMR_MNNO");
        		}
        		
        	}
        	
        	 //중복처리부분
        	for(var i=0;i< rowCnt; i++){
        		
        		for(var j=0;j<rowCntKey; j++){
        			if( this.dsCW_COMRMN.getColumn(i,"COMR_MNNO") == this.dsCW_COMRMN1.getColumn(j,"COMR_MNNO") && this.dsCW_COMRMN.getRowType(i) != "1" && this.dsCW_COMRMN.getRowType(i) != "4"){
        	
        				this.fnc_Message("TMM077",this.dsCW_COMRMN.getColumn(i,"COMR_MNNO"));
        				this.grdCW_COMRMN.setCellPos(this.fnc_GridColumnIndex(this.grdCW_COMRMN, "COMR_MNNO"));
        				this.grdCW_COMRMN.setFocus();
        				return false;
        			}
        		}
        	}
        	

        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	var mm 		= "";
        	
        	if(this.divSHRSTDS_YMTH.calMONTH.getMonth() < 10){
        		mm = "0" + this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}else{
        		mm = this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="            + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="         + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" 		+ this.fnc_Quote(this.fnc_Trim( this.divSHRSTDS_YMTH.calMONTH.getYear()+""+mm ));
        		sReturnString += " DEPT_CODE=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " EMPL_NUMB=" 		+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        	} 
        	
        	// 초기값 세팅  Argument 생성
        	if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="            + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="         + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" 		+ this.fnc_Trim(this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth());
        	} 
        	
        	// 조회 키값  Argument 생성
        	if (sKind == 'SEARCH02') {
        	
        		sReturnString  = " pgm="            + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="         + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" 		+ this.fnc_Quote(this.fnc_Trim( this.divSHRSTDS_YMTH.calMONTH.getYear()+""+mm)); 
        	} 
        	// 저장 Argument 생성
        	else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
        	}
        		// 저장 Argument 생성
        	else if (sKind == 'SAVE01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH1=" 		 + this.fnc_Trim(this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth());
        		sReturnString += " STDS_YMTH2=" 		 + this.fnc_Trim(this.popINSERT.medSHRPAYX_DATE_TO.fn_GetMonth());
        		
        	}

        	return sReturnString;
        	
        }

        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	

        	var cnt = this.dsCW_COMRMN.rowcount;
        	
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
        		this.fnc_Information(this.stInformation, this.dsCW_COMRMN.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCW_COMRMN.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		var row = this.dsCW_COMRMN.findRowExpr("STDS_YMTH=='"+this.GBL_KEYROWPOSITION1+"' && COMR_SEQN=='"+this.GBL_KEYROWPOSITION2+"' && DEPT_CODE=='"+this.GBL_KEYROWPOSITION3+"'");
        		
        		if(row > -1) {
        			 this.dsCW_COMRMN.set_rowposition(row);
        		}else {
        			
        			this.dsCW_COMRMN.set_rowposition(0);
        		}
        	
        	}
        	else if (sMethodName == 'SEARCH01') {
        	//alert(this.dsSHRBEFO_DTYN.getColumn(0,"BEFO_DTYN"));
        	//	this.dsSHRBEFO_DTYN.setColumn(0,"BEFO_DTYN",this.dsSHRBEFO_DTYN.getColumn(0,"BEFO_DTYN"));
        	}
        	else if (sMethodName == 'SAVE00') {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_KeyFieldDisible(this.dsCW_COMRMN);
        		this.fn_Search();
        	} 
        	
        	else if (sMethodName == 'SAVE01') {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_KeyFieldDisible(this.dsCW_COMRMN);
        		this.fn_Search();
        	} 
        	
        	else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        		
        		arrParam[0] = "GRID,grdCW_COMRMN,dsUSEX_CODE,USEX_CODE";
        		arrParam[1] = "GRID,grdCW_COMRMN,dsTYPE_CODE,TYPE_CODE";
        		arrParam[2] = "GRID,grdCW_COMRMN,dsSTRG_CODE,STRG_CODE";
        	  
        		this.fnc_CommonCodeInnerBind(arrParam);  

        	}
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdCW_COMRMN.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdCW_COMRMN, "STDS_DATE"), "edittype", "normal");			
        	} else {
        		this.grdCW_COMRMN.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdCW_COMRMN, "STDS_DATE"), "edittype", "none");
        	} 
        }

        
        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        		
        	// 조회조건 - 기준년월(Popup)
        	if ((obj.name == "imgHelpSHRSTDS_YMTH") ) {
        		arrParam[0] = "WFM0007";
        		arrParam[1] = "";
        		arrParam[2] = "";
        		arrParam[3] = "N";
        		arrParam[4] = "divSHRSTDS_YMTH.calMONTH";
        		arrParam[5] = "divSHRSTDS_YMTH.calMONTH";
        		arrParam[6] = "0";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	
        	
        	// 그리드
        	if (obj.name == "grdCW_COMRMN") {
        		// 그리드 - 사원정보조회(Popup)
        		if ( sColumnID == "EMPL_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME" ) {//20161230
        		
        			arrParam[0] = "HRM0001"; 
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdCW_COMRMN";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,OPOS_NAME,OPOS_CODE";  
        			arrParam[6] = "0,1,11,10";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        		
        		// 그리드 - 부서정보조회(Popup)
        		if (sColumnID == "DEPT_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "DEPT_NAME"  ) {//20161230
        			
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = "DEPT_NAME";
        		arrParam[3] = "N";
        		arrParam[4] = "grdCW_COMRMN";
        		arrParam[5] = "DEPT_CODE,DEPT_NAME";
        		arrParam[6] = "0,1";
        		arrParam[7] = sFromDs;
        		arrParam[8] = sOldValue;
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        
        this.dsCW_COMRMN_oncolumnchanged = function(obj,e)
        {
        	var sPbcm = parseInt(this.dsCW_COMRMN.getColumn(e.row,"PBCM_YSNO"));
        	var sStcm = parseInt(this.dsCW_COMRMN.getColumn(e.row,"STCM_YSNO"));
        	var sOtcm= parseInt(this.dsCW_COMRMN.getColumn(e.row,"OTCM_YSNO"));
        	
        	if(e.col == "9" ){
        		if(sPbcm == 1){
        			this.dsCW_COMRMN.setColumn(e.row,"PBCM_YSNO",1);
        			this.dsCW_COMRMN.setColumn(e.row,"STCM_YSNO",0);
        			this.dsCW_COMRMN.setColumn(e.row,"OTCM_YSNO",0);
        		}
        	}
        	if(e.col == "10" ){
        		if(sStcm == 1){
        			this.dsCW_COMRMN.setColumn(e.row,"PBCM_YSNO",0);
        			this.dsCW_COMRMN.setColumn(e.row,"STCM_YSNO",1);
        			this.dsCW_COMRMN.setColumn(e.row,"OTCM_YSNO",0);
        			}
        	}
        	if(e.col == "11" ){	
        		if(sOtcm == 1){
        			this.dsCW_COMRMN.setColumn(e.row,"PBCM_YSNO",0);
        			this.dsCW_COMRMN.setColumn(e.row,"STCM_YSNO",0);
        			this.dsCW_COMRMN.setColumn(e.row,"OTCM_YSNO",1);
        		}
        	}

        	
        	if (e.columnid == "EMPL_NAME" || e.columnid == "DEPT_NAME") {

        		this.fn_HelpDialoge(this.grdCW_COMRMN, "YES", e.oldvalue, e.columnid);
        	}
        	
        }

        

        

        //성명 공백입력시 사번,성명,직급,부서 초기화
        this.dsCW_COMRMN_onvaluechanged = function(obj,e)
        {
        	var currRow = this.grdCW_COMRMN.currentrow;
        	
        	if(e.columnid == 'EMPL_NAME' && this.dsCW_COMRMN.getColumn(currRow,"EMPL_NAME") == ""){
        		 this.dsCW_COMRMN.setColumn(currRow,"EMPL_NUMB","");
        		// this.dsCW_COMRMN.setColumn(currRow,"DEPT_CODE",""); 20161230 주석처리
        		// this.dsCW_COMRMN.setColumn(currRow,"DEPT_NAME",""); 20161230 주석처리
        		 this.dsCW_COMRMN.setColumn(currRow,"OPOS_CODE","");
        		 this.dsCW_COMRMN.setColumn(currRow,"OPOS_NAME","");
        	}
        }

        /*20161230 주석처리
        this.grdCW_COMRMN_oncellclick = function(obj:Grid, e:nexacro.GridClickEventInfo)
        {
        	var arrParam = new Array();

        	if( e.screenX >= 290 && e.screenX  <= 315){
        		if(obj.currentcell == 1){
        			arrParam[0] = "TMM0004";
        			arrParam[1] = "";
        			arrParam[2] = "DEPT_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdCW_COMRMN";
        			arrParam[5] = "DEPT_CODE,DEPT_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = "";
        			arrParam[8] = "";
        			
        			this.fnc_HelpDialogeAction(this, this.grdCW_COMRMN, arrParam);
        		}
        	}
        	
        	if( e.screenX >= 390 && e.screenX  <= 415){
        		if(obj.currentcell == 2){
        			arrParam[0] = "HRM0001"; 
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdCW_COMRMN";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,OPOS_NAME,OPOS_CODE";  
        			arrParam[6] = "0,1,11,10";
        			arrParam[7] = "";
        			arrParam[8] = "";
        			
        			this.fnc_HelpDialogeAction(this, this.grdCW_COMRMN, arrParam);
        		}
        	}
        	
        }*/

        

        /*-----------------+
         |  팝업 열기  |
         +-----------------*/

        
        this.btn_PROC_OnClick = function(obj,e)
        {

        	//
        	this.popINSERT.medSHRPAYX_DATE_FROM.fn_SetMonth(this.divSHRSTDS_YMTH.fn_GetMonth());
        	
        	var nX 	= system.clientToScreenX(this.btn_PROC, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);
        	var nY 	= system.clientToScreenY(this.btn_PROC, this.btn_PROC.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);
        	
        	this.popINSERT.trackPopup(nX, nY - 2);
        	//
        	
        	/*
        	var mm 		= "";
        	
        	if(this.divSHRSTDS_YMTH.calMONTH.getMonth() < 10){
        		mm = "0" + this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}else{
        		mm = this.divSHRSTDS_YMTH.calMONTH.getMonth();
        	}
        	
        	this.dsSHRSTDS_YMTH.setColumn(0,"STDS_YMTH", this.divSHRSTDS_YMTH.calMONTH.getYear()+""+mm );
        	
        	// 전월 데이터 유무 조회 
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsSHRBEFO_DTYN=dsSHRBEFO_DTYN";
        	
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	

        	if(confirm("전월데이터를 복사하시겠습니까?")){
        	
        		if(this.dsSHRBEFO_DTYN.getColumn(0,"BEFO_DTYN") == 'Y'){

        		var sMethodName = "SAVE01";
        		var sInDataSet = "dsSHRSTDS_YMTH=dsSHRSTDS_YMTH";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        		else{
        			this.fnc_Message("TMM114","전 월 데이터가");
        		}
        	}else{
        		
        	}
        	*/
        }

        
        /*-----------------+
         |  팝업 자료생성  |
         +-----------------*/
        this.popINSERT_btnINSERT_OnClick = function(obj,e){
        	

        	
        	if (this.fnc_Length(this.fnc_Trim(this.popINSERT.medSHRPAYX_DATE_TO.fn_GetMonth())) != 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "대상년월", this.popINSERT.medSHRPAYX_DATE_TO);
        	}
        	
        	else if (this.fnc_Length(this.fnc_Trim(this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth())) != 6) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년월", this.popINSERT.medSHRPAYX_DATE_FROM);
        	}
        	else if( this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth() == this.popINSERT.medSHRPAYX_DATE_TO.fn_GetMonth() ){
        		//메시지 확인할것
        		return this.fnc_SearchCheckPostAction("TMM119", "기준년월",this.popINSERT.medSHRPAYX_DATE_TO);
        	}
        	else{
        		
        		//this.fnc_DatasetClear("dsSHRBEFO_DTYN");
        		
        		var sMethodName = "SEARCH01";
        		var sInDataSet = "";
        		var sOutDataSet = "dsSHRBEFO_DTYN=dsSHRBEFO_DTYN";
        		
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        	var sFROM_MESS 	= this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth(), 0, 4)+"-"+this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth(), 4, 2);
        	var sTO_MESS 	= this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_TO.fn_GetMonth(), 0, 4)+"-"+this.fnc_SubStr(this.popINSERT.medSHRPAYX_DATE_TO.fn_GetMonth(), 4, 2);
        	
        	//alert(this.dsSHRBEFO_DTYN.getColumn(0,"BEFO_DTYN"));
        	
        	this.dsSHRBEFO_DTYN.setColumn(0,"BEFO_DTYN",this.dsSHRBEFO_DTYN.getColumn(0,"BEFO_DTYN"));
        	
        	//	alert(this.dsSHRBEFO_DTYN.getColumn(0,"BEFO_DTYN"));
        	
        	if(this.dsSHRBEFO_DTYN.getColumn(0,"BEFO_DTYN") == 'N'){	
        			//alert(this.dsSHRBEFO_DTYN.getColumn(0,"BEFO_DTYN"));
        			
        		this.fnc_Message("TMM114" ,this.fnc_Trim(this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth())+"월 데이터가");
        	}else{
        		
        		//메시지 확인할것
        		if (this.fnc_Message("PAY011", sTO_MESS, sFROM_MESS, sTO_MESS )){
        			
        			this.dsSHRSTDS_YMTH.setColumn(0,"STDS_YMTH1", this.popINSERT.medSHRPAYX_DATE_FROM.fn_GetMonth());
        			this.dsSHRSTDS_YMTH.setColumn(0,"STDS_YMTH2", this.popINSERT.medSHRPAYX_DATE_TO.fn_GetMonth());
        	
        			
        			this.fnc_DatasetClear("dsCW_COMRMN");
        				
        			var sMethodName = "SAVE01";
        			var sInDataSet = "dsSHRSTDS_YMTH=dsSHRSTDS_YMTH";
        			var sOutDataSet = "";
        			var sArgument = this.fn_CreateArgument(sMethodName);

        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        			this.fn_Popup_close();
        		}
        	}
        			
        }

        /*---------------+
         | 입력 팝업 닫기 |
         +----------------*/
        this.fn_Popup_close = function(obj,e) {
        	this.popINSERT.closePopup();
        	
        }

        this.fnc_MonthOnChanged = function (obj,e) {
        	
        		//this.fnc_DatasetClear("dsSHRBEFO_DTYN");
        		
        		var sMethodName = "SEARCH01";
        		var sInDataSet = "";
        		var sOutDataSet = "dsSHRBEFO_DTYN=dsSHRBEFO_DTYN";
        		
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_COMRMN.addEventHandler("oncolumnchanged", this.dsCW_COMRMN_oncolumnchanged, this);
            this.dsCW_COMRMN.addEventHandler("onvaluechanged", this.dsCW_COMRMN_onvaluechanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdCW_COMRMN.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.divSHRSTDS_YMTH.addEventHandler("canlayoutchange", this.divSHRSTDS_YMTH_canlayoutchange, this);
            this.divSHRSTDS_YMTH.addEventHandler("canstepchange", this.divSHRSTDS_YMTH_canstepchange, this);
            this.divSHRSTDS_YMTH.addEventHandler("onbeforeclose", this.divSHRSTDS_YMTH_onbeforeclose, this);
            this.imgHelpSHRSTDS_YMTH.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.fn_Popup_close, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);

        };

        this.loadIncludeScript("WFMF0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
