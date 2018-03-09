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
                this.set_name("PAYA0010");
                this.set_titletext("호봉표관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">PYTY_CODE</Col><Col id=\"DSNAME\">dsSHRPYTY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">PYTY_CODE</Col><Col id=\"DSNAME\">dsPYTY_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">PSTP_CODE</Col><Col id=\"DSNAME\">dsPSTP_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsCPOS_CODE</Col><Col id=\"CODEID\">CPOS_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">PAY0001</Col><Col id=\"DSNAME\">dsSTDS_YMTH</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_GBHOBO", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTY_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BSL1_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BSL2_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BSL3_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BSL4_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BPM5_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BPM6_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BPM7_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BPM8_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BPM9_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCPOS_CODE", "absolute", "478", "71", "97", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_GBHOBO", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_GBHOBO");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"117\"/><Column size=\"116\"/><Column size=\"130\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"기준년월\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"급여형태\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"직급\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"호봉\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"기본급\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"시간외수당\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" editfilter=\"number\" style=\"align:center;\" text=\"bind:STDS_YMTH\" mask=\"####-##\" editlimit=\"6\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:PYTY_CODE\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:CPOS_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:PSTP_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right\" text=\"bind:BSL1_AMOT\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"utf16\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right\" text=\"bind:BSL2_AMOT\" mask=\"#,##0\" editlimit=\"15\" editlengthunit=\"utf16\"/><Cell col=\"8\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "309", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFormDown", "absolute", "0", "0", "98", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnFormUp", "absolute", "101", "0", "86", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "200", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Button("btnDATA_COPY", "absolute", "295", "766", "98", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("이전자료복사");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "205", "71", "76", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("급여형태");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Image01", "absolute", "435", "71", "49", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("직급");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCPOS_NAME", "absolute", "478", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCPOS_CODE", "absolute", "580", "71", "21", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPYTY_CODE", "absolute", "273", "71", "133", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displayrowcount("10");
            obj.set_index("-1");

            obj = new Combo("cmbSHRSTDS_YMTH", "absolute", "96", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displayrowcount("10");
            obj.set_index("-1");

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("31");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("호봉표관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("33");
            obj.set_text("홈 > 급여관리 > 호봉표관");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("34");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("43");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "176", "61", "40", "41", null, null, this);
            obj.set_taborder("44");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "412", "765", "474", "128", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            obj.getSetter("taborder").set("4");
            this.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "327", "94", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("35");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "403", "94", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("36");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "456", "77", null, null, this.popINSERT);
            obj.set_taborder("37");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE_FROM", "absolute", "189", "18", "22", "21", null, null, this.popINSERT);
            obj.set_taborder("38");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE_TO", "absolute", "189", "44", "22", "21", null, null, this.popINSERT);
            obj.set_taborder("39");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_FROM", "absolute", "29", "18", "87", "21", null, null, this.popINSERT);
            obj.set_taborder("40");
            obj.set_text("기준지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_TO", "absolute", "29", "44", "87", "21", null, null, this.popINSERT);
            obj.set_taborder("41");
            obj.set_text("대상지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE_FROM", "absolute", "110", "18", "77", "21", null, null, this.popINSERT);
            obj.set_taborder("42");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.popINSERT.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE_TO", "absolute", "110", "44", "77", "21", null, null, this.popINSERT);
            obj.set_taborder("43");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME_FROM", "absolute", "212", "18", "118", "21", null, null, this.popINSERT);
            obj.set_taborder("44");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME_TO", "absolute", "212", "44", "118", "21", null, null, this.popINSERT);
            obj.set_taborder("45");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE_FROM", "absolute", "25", "96", "118", "22", null, null, this.popINSERT);
            obj.set_taborder("46");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE_TO", "absolute", "33", "96", "118", "22", null, null, this.popINSERT);
            obj.set_taborder("47");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "335", "18", "120", "21", null, null, this.popINSERT);
            obj.set_taborder("48");
            obj.set_text("의 급여조정 데이터를");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "335", "44", "120", "21", null, null, this.popINSERT);
            obj.set_taborder("49");
            obj.set_text("으로 복사합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 309, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 474, 128, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");
            		p.getSetter("taborder").set("4");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("호봉표관리");
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
        this.addIncludeScript("PAYA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYA0010 호봉표관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.12		고민주		Initial Created.
         *   2016.10.13		황치웅		수정.
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
        this.sBUTTONLIST  = "TTTTTTTF";
        this.sPACKAGENAME = "PAYA0010";

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	this.cmbSHRSTDS_YMTH.setFocus();

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
        	this.fnc_DatasetClear("dsPY_GBHOBO");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_GBHOBO=dsPY_GBHOBO";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPY_GBHOBO.insertRow(this.dsPY_GBHOBO.rowposition + 1);
        	this.dsPY_GBHOBO.setColumn(iRow, "STDS_YMTH", this.cmbSHRSTDS_YMTH.value);
        	this.fnc_GridSetCellFocus(this.grdPY_GBHOBO, "STDS_YMTH");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) {
        		for (var i = this.dsPY_GBHOBO.getRowCount() - 1 ; i >= 0 ; i-- ){
        			if(this.dsPY_GBHOBO.getColumn(i,"CHK") == "1"){
        				this.dsPY_GBHOBO.deleteRow(i);
        			}
        		}
        		this.grdPY_GBHOBO.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_GBHOBO");
        	this.grdPY_GBHOBO.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_GBHOBO=dsPY_GBHOBO:U";
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

        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_GBHOBO", this);
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

        	if (this.fnc_DatasetChangeCheck("dsPY_GBHOBO")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsPY_GBHOBO.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.dsPY_GBHOBO.getCaseCount("CHK == '1'");
        	
        	var sQuestionText = "직급:" + this.fnc_Trim(this.dsPY_GBHOBO.getColumn(this.dsPY_GBHOBO.rowposition, "CPOS_NAME"));
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_GBHOBO")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsPY_GBHOBO.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_GBHOBO.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (!this.fnc_IsDate(this.dsPY_GBHOBO.getColumn(this.dsPY_GBHOBO.rowposition, "STDS_YMTH"))) {
        			this.fnc_Message("TMM125", "기준년월이 잘못되었습니다.");
        			return false;
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_GBHOBO.getColumn(i, "PYTY_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "급여형태", this.dsPY_GBHOBO, i, this.grdPY_GBHOBO, "PYTY_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_GBHOBO.getColumn(i, "CPOS_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직급", this.dsPY_GBHOBO, i, this.grdPY_GBHOBO, "CPOS_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_GBHOBO.getColumn(i, "PSTP_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "호봉", this.dsPY_GBHOBO, i, this.grdPY_GBHOBO, "PSTP_CODE");
        		}

        	}

        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSTDS_YMTH.value));
        		sReturnString += " PYTY_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRPYTY_CODE.value));
         		sReturnString += " CPOS_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCPOS_CODE.value));

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

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
        		this.fnc_Information(this.stInformation, this.dsPY_GBHOBO.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_GBHOBO.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdPY_GBHOBO.setFocus();

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_GetUserComboDs(this.dsUserCombo);
        		this.fn_KeyFieldDisible(this.dsPY_GBHOBO);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.grdPY_GBHOBO.setFocus();

        	} else if (sMethodName == "PROC00") {
        		this.fnc_GetUserComboDs(this.dsUserCombo);
        		this.fn_KeyFieldDisible(this.dsPY_GBHOBO);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRPYTY_CODE,dsSHRPYTY_CODE,0";
        			arrParam[1] = "GRID,grdPY_GBHOBO,dsPYTY_CODE,PYTY_CODE";
        			arrParam[2] = "GRID,grdPY_GBHOBO,dsPSTP_CODE,PSTP_CODE";
        			arrParam[3] = "GRID,grdPY_GBHOBO,dsCPOS_CODE,CPOS_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRSTDS_YMTH,dsSTDS_YMTH,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdPY_GBHOBO.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_GBHOBO, "STDS_YMTH"), "edittype", "text");
        		this.grdPY_GBHOBO.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_GBHOBO, "PYTY_CODE"), "edittype", "combo");
        		this.grdPY_GBHOBO.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_GBHOBO, "CPOS_NAME"), "edittype", "text");
        		this.grdPY_GBHOBO.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_GBHOBO, "PSTP_CODE"), "edittype", "combo");

        	} else {
        		this.grdPY_GBHOBO.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_GBHOBO, "STDS_YMTH"), "edittype", "none");
        		this.grdPY_GBHOBO.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_GBHOBO, "PYTY_CODE"), "edittype", "none");
        		this.grdPY_GBHOBO.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_GBHOBO, "CPOS_NAME"), "edittype", "none");
        		this.grdPY_GBHOBO.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_GBHOBO, "PSTP_CODE"), "edittype", "none");

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

        	
        	if ((obj.name == "imgHelpSHRCPOS_CODE") || (obj.name == "edtSHRCPOS_NAME")) { // 조회조건 - 부서정보조회(Popup)
        		arrParam[0] = "TMM1000"; 								//Popup ID
        		arrParam[1] = "CPOS_CODE"; 								//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCPOS_NAME.value);//콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRCPOS_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHRCPOS_CODE,edtSHRCPOS_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index

        	}else if (obj.name == "grdPY_GBHOBO") {
        		if ( sColumnID == "CPOS_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "CPOS_NAME"){
        			arrParam[0] = "TMM1000";
        			arrParam[1] = "CPOS_CODE";
        			arrParam[2] = "CPOS_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPY_GBHOBO";
        			arrParam[5] = "CPOS_CODE,CPOS_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		}
        	}

        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        /*-------------------------+
         |  DATASET COLUMN 변경 시 |
         +-------------------------*/
        this.dsPY_GBHOBO_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "CPOS_NAME") this.fn_HelpDialoge(this.grdPY_GBHOBO, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "STDS_YMTH") { // 0월 입력 또는 12월 이상은 고정값으로 변경
        		if ( nexacro.toNumber(this.fnc_SubStr(e.newvalue,4,2)) == 0 ){
        			obj.setColumn(e.row, e.columnid, this.fnc_SubStr(e.newvalue,0,4)+"01");
        			
        		} else if ( nexacro.toNumber(this.fnc_SubStr(e.newvalue,4,2)) > 12 ){
        			obj.setColumn(e.row, e.columnid, this.fnc_SubStr(e.newvalue,0,4)+"12");
        			
        		}
        	}

        }

        /*-----------------------------+
         |  양식파일 다운로드 클릭 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);

        }

        /*--------------------------+
         |  양식파일 업로드 클릭 時  |
         +---------------------------*/
        this.fn_ExcelUpload = function (obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsPY_GBHOBO")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsPY_GBHOBO");
        	this.fnc_ExcelUpload("dsPY_GBHOBO", "Sheet1", "A2", "fn_ExcelSuccess");

        }

        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	this.dsPY_GBHOBO.set_enableevent(false);
        	this.dsPY_GBHOBO.set_updatecontrol(false);

        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        	
        		var iRow = this.dsPY_GBHOBO.addRow();
        		
        		this.dsPY_GBHOBO.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        		this.dsPY_GBHOBO.setColumn(iRow, "STDS_YMTH", this.objDsImportTemp.getColumn(i, 0)); // 기준년월
        		this.dsPY_GBHOBO.setColumn(iRow, "PYTY_CODE", this.objDsImportTemp.getColumn(i, 1)); // 급여형태 		
        		this.dsPY_GBHOBO.setColumn(iRow, "CPOS_CODE", this.objDsImportTemp.getColumn(i, 3)); // 직급코드
        		this.dsPY_GBHOBO.setColumn(iRow, "CPOS_NAME", this.objDsImportTemp.getColumn(i, 4)); // 직급
        		this.dsPY_GBHOBO.setColumn(iRow, "PSTP_CODE", this.objDsImportTemp.getColumn(i, 5)); // 호봉
        		this.dsPY_GBHOBO.setColumn(iRow, "BSL1_AMOT", this.objDsImportTemp.getColumn(i, 6)); // 기본급
        		this.dsPY_GBHOBO.setColumn(iRow, "BSL2_AMOT", this.objDsImportTemp.getColumn(i, 7)); // 시간외수당
        		this.dsPY_GBHOBO.setColumn(iRow, "REMK_100X", this.objDsImportTemp.getColumn(i, 8)); // 비고
        		
        	}
        	
        	this.objDsImportTemp.clear();
        	this.dsPY_GBHOBO.set_updatecontrol(true);
        	this.dsPY_GBHOBO.set_enableevent(true);

        	this.dsPY_GBHOBO.set_rowposition(0);
        	this.grdPY_GBHOBO.setFocus();

        }
        this.grdPY_GBHOBO_onheadclick = function(obj,e) {
        	var sCol = "CHK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_GBHOBO.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsPY_GBHOBO.addEventHandler("oncolumnchanged", this.dsPY_GBHOBO_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRCPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdPY_GBHOBO.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPY_GBHOBO.addEventHandler("onheadclick", this.grdPY_GBHOBO_onheadclick, this);
            this.divButtonList.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.btnDATA_COPY.addEventHandler("onclick", this.fn_DataCodeCopy, this);
            this.edtSHRCPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRCPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.cmbSHRPYTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSTDS_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSTDS_YMTH.addEventHandler("onitemchanged", this.cmbSHRSTDS_YMTH_onitemchanged, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.popINSERT.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.popINSERT_btnClose_OnClick, this);
            this.popINSERT.imgHelpSHRPAYX_DATE_FROM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT.imgHelpSHRPAYX_DATE_TO.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT.medSHRPAYX_DATE_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.medSHRPAYX_DATE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_NAME_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_NAME_FROM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT.edtSHRWAGE_NAME_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_NAME_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT.edtSHRWAGE_CODE_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_CODE_FROM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT.edtSHRWAGE_CODE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.edtSHRWAGE_CODE_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("PAYA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
