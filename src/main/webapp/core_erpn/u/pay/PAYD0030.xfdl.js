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
                this.set_name("PAYD0030");
                this.set_titletext("예측결과관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_ALLDED", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EDIT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPD_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWX_SPAN\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"COLX_INDX\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"BACK_COLR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_SIMUXM", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Rows><Row><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows></Rows>");
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
            obj.set_text("예측결과관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 예측결과관리");
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

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "38", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("회차");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
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

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_SIMUXM", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsPY_SIMUXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"75\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"61\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"background: ;\" text=\"사원번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"성명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소속\"/><Cell col=\"3\" rowspan=\"2\" text=\"부서\"/><Cell col=\"4\" rowspan=\"2\" text=\"직위\"/><Cell col=\"5\" rowspan=\"2\" text=\"평가등급\"/><Cell col=\"6\" colspan=\"4\" text=\"기본급\"/><Cell col=\"10\" colspan=\"4\" text=\"연장수당\"/><Cell col=\"14\" colspan=\"4\" text=\"상여금\"/><Cell col=\"18\" colspan=\"4\" text=\"합계\"/><Cell row=\"1\" col=\"6\" text=\"인상전지급액\"/><Cell row=\"1\" col=\"7\" text=\"시뮬레이션결과\"/><Cell row=\"1\" col=\"8\" text=\"인상금액\"/><Cell row=\"1\" col=\"9\" text=\"인상율\"/><Cell row=\"1\" col=\"10\" text=\"인상전지급액\"/><Cell row=\"1\" col=\"11\" text=\"시뮬레이션결과\"/><Cell row=\"1\" col=\"12\" text=\"인상금액\"/><Cell row=\"1\" col=\"13\" text=\"인상율\"/><Cell row=\"1\" col=\"14\" text=\"인상전지급액\"/><Cell row=\"1\" col=\"15\" text=\"시뮬레이션결과\"/><Cell row=\"1\" col=\"16\" text=\"인상금액\"/><Cell row=\"1\" col=\"17\" text=\"인상율\"/><Cell row=\"1\" col=\"18\" text=\"인상전지급액\"/><Cell row=\"1\" col=\"19\" text=\"시뮬레이션결과\"/><Cell row=\"1\" col=\"20\" text=\"인상금액\"/><Cell row=\"1\" col=\"21\" text=\"인상율\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:EMPL_NUMB\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:OPOS_NAME\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:EVGD_CODE\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMB1_AMOT\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMA1_AMOT\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMC1_AMOT\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:center;\" text=\"bind:SMC1_RATE\" mask=\"#,##0.00 %\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMB2_AMOT\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMA2_AMOT\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMC2_AMOT\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:center;\" text=\"bind:SMC2_RATE\" mask=\"#,##0.00 %\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMB3_AMOT\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMA3_AMOT\" mask=\"#,###\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMC3_AMOT\" mask=\"#,###\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:center;\" text=\"bind:SMC3_RATE\" mask=\"#,###.## %\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMB4_AMOT\" mask=\"#,###\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMA4_AMOT\" mask=\"#,###\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMC4_AMOT\" mask=\"#,###\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:center;\" text=\"bind:SMC4_RATE\" mask=\"#,##0.00 %\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT00", "absolute", "1267", "153", "474", "118", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "456", "67", null, null, this.popINSERT00);
            obj.set_taborder("29");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "403", "84", "62", "24", null, null, this.popINSERT00);
            obj.set_taborder("30");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "338", "84", "62", "24", null, null, this.popINSERT00);
            obj.set_taborder("31");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE_TO", "absolute", "169", "86", "118", "22", null, null, this.popINSERT00);
            obj.set_taborder("32");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE_FROM", "absolute", "25", "86", "118", "22", null, null, this.popINSERT00);
            obj.set_taborder("33");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "335", "44", "120", "21", null, null, this.popINSERT00);
            obj.set_taborder("34");
            obj.set_text("으로 복사합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "335", "18", "120", "21", null, null, this.popINSERT00);
            obj.set_taborder("35");
            obj.set_text("의 급여조정 데이터를");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME_FROM", "absolute", "212", "18", "118", "21", null, null, this.popINSERT00);
            obj.set_taborder("36");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME_TO", "absolute", "212", "44", "118", "21", null, null, this.popINSERT00);
            obj.set_taborder("37");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE_TO", "absolute", "189", "44", "22", "21", null, null, this.popINSERT00);
            obj.set_taborder("38");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE_FROM", "absolute", "189", "18", "22", "21", null, null, this.popINSERT00);
            obj.set_taborder("39");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE_FROM", "absolute", "110", "18", "77", "21", null, null, this.popINSERT00);
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE_TO", "absolute", "110", "44", "77", "21", null, null, this.popINSERT00);
            obj.set_taborder("41");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_TO", "absolute", "29", "44", "87", "21", null, null, this.popINSERT00);
            obj.set_taborder("42");
            obj.set_text("대상지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_FROM", "absolute", "29", "18", "87", "21", null, null, this.popINSERT00);
            obj.set_taborder("43");
            obj.set_text("기준지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT00.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1268", "173", "8", "96", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1433", "261", "294", "8", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1237", "154", "182", "8", null, null, this);
            obj.set_taborder("114");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "1732", "161", "8", "96", null, null, this);
            obj.set_taborder("115");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSMUL_SEQN", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRSMUL_SEQN", "absolute", "152", "71", "21", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSMUL_NAME", "absolute", "175", "71", "100", "21", null, null, this);
            obj.set_taborder("118");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 474, 118, this.popINSERT00,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("예측결과관리");

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
        this.addIncludeScript("PAYD0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYD0030.xfdl", function() {
        /***************************************************************************************************
         * # Program:   PAYD0030 예측결과관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.08     이용관     Initial Created.
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF";
        this.sPACKAGENAME = "PAYD0030";

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
            this.edtSHRSMUL_NAME.setFocus();

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
            this.fnc_DatasetClear("dsPY_SIMUXM");

            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_SIMUXM=dsPY_SIMUXM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
            if(e.fromobject instanceof Div) return;
            var sMessage = this.fnc_FormUnloadCheck("dsPY_SIMUXM", this);
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

            if (this.fnc_DatasetChangeCheck("dsPY_SIMUXM")) {
                if (this.fnc_Message("TMM023") == false) return false;
            }
            if (this.fnc_Length(this.fnc_Trim(this.edtSHRSMUL_SEQN.value)) < 8) {
                return this.fnc_SearchCheckPostAction("TMM072", "회차", this.edtSHRSMUL_NAME);
            }

            return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
            return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
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
                sReturnString += " SMUL_SEQN="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRSMUL_SEQN.value));

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

            if (sMethodName == "SEARCH00") {

                this.fnc_Information(this.stInformation, this.dsPY_SIMUXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                this.fnc_Message("TMM018", this.dsPY_SIMUXM.getCaseCount("dataset.getRowLevel(currow)==0"));

            }

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRSMUL_SEQN") || (obj.name == "edtSHRSMUL_NAME")) { // 조회조건 - 부서정보조회(Popup)
                arrParam[0] = "PAY0007";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRSMUL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRSMUL_NAME";
                arrParam[5] = "edtSHRSMUL_SEQN,edtSHRSMUL_NAME";
                arrParam[6] = "0,1";
                  
            }
            
            this.fnc_HelpDialogeAction(this, obj, arrParam);

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
            this.grdPY_SIMUXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.popINSERT00.btnClose.addEventHandler("onclick", this.popINSERT_btnClose_OnClick, this);
            this.popINSERT00.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT00.edtSHRWAGE_CODE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_CODE_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.edtSHRWAGE_CODE_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_CODE_FROM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.edtSHRWAGE_NAME_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_NAME_FROM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.edtSHRWAGE_NAME_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_NAME_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.imgHelpSHRPAYX_DATE_TO.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT00.imgHelpSHRPAYX_DATE_FROM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT00.medSHRPAYX_DATE_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.medSHRPAYX_DATE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRSMUL_SEQN.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("PAYD0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
