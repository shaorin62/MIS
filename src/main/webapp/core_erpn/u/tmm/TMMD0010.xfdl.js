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
                this.set_name("TMMD0010");
                this.set_titletext("테스트및오류사항관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_TESTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SRAL_NUMB\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MENU_IDXX\" size=\"9\" prop=\"default\" type=\"STRING\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQG_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"TEST_SBJT\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"TEST_CODC\" size=\"2000\" prop=\"default\" type=\"STRING\"/><Column id=\"PRSE_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"PROC_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PROC_CHSN\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"PROC_CNTT\" size=\"2000\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_IDXX\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">REQG_CODE</Col><Col id=\"DSNAME\">dsSHRREQG_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">ALL</Col></Row><Row><Col id=\"CODEID\">PRSE_CODE</Col><Col id=\"DSNAME\">dsSHRPRSE_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">ALL</Col></Row><Row><Col id=\"CODEID\">REQG_CODE</Col><Col id=\"DSNAME\">dsREQG_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">ALL</Col></Row><Row><Col id=\"CODEID\">PRSE_CODE</Col><Col id=\"DSNAME\">dsPRSE_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">ALL</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFL_ATTACH", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", null, "154", "797", null, "25", "15", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtTEST_CODC", "absolute", null, "215", "686", null, "46", "369", this);
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("4000");
            obj.set_taborder("19");
            obj.style.set_linespace("3");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbREQG_CODE", "absolute", null, "163", "162", "21", "46", null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_type("dropdown");
            obj.set_taborder("16");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Edit("edtMENU_NAME", "absolute", null, "163", "104", "21", "515", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemText");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "134", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("34");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "336", "71", "63", "21", null, null, this);
            obj.set_text("시스템");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "391", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("staXxxx0", "absolute", null, "163", "64", "25", "737", null, this);
            obj.set_text("메뉴");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTEST_SBJT", "absolute", null, "189", "427", "21", "305", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_taborder("17");
            obj.set_inputmode("normal");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", null, "163", "52", "21", "408", null, this);
            obj.set_text("작성일");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", null, null, "64", "39", "737", "22", this);
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "64", "21", null, null, this);
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTEST_STDT", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRTEST_ENDT", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_value("TODAY");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Image0", "absolute", "512", "71", "78", "21", null, null, this);
            obj.set_text("테스터");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "567", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_taborder("49");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "649", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "672", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "201", "71", "14", "21", null, null, this);
            obj.set_text("~");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRREQG_CODE", "absolute", "868", "71", "96", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Image1", "absolute", "793", "71", "62", "21", null, null, this);
            obj.set_text("요청구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPRSE_CODE", "absolute", "1053", "71", "88", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Image2", "absolute", "985", "71", "63", "21", null, null, this);
            obj.set_text("처리상태");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMENU_IDXX", "absolute", null, "163", "88", "21", "644", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_imemode("none");
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpMENU_IDXX", "absolute", null, "163", "21", "21", "621", null, this);
            obj.set_cssclass("sytHelpPopupInput");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", null, "163", "68", "21", "208", null, this);
            obj.set_text("요청구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", null, "189", "64", "21", "212", null, this);
            obj.set_text("테스터");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", null, "189", "64", "21", "737", null, this);
            obj.set_text("제목");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", null, "215", "64", null, "737", "371", this);
            obj.set_text("세부내용");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", null, null, "68", "21", "205", "203", this);
            obj.set_text("처리상태");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSYST_CODE", "absolute", "369", "34", "120", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("none");
            obj.set_taborder("50");
            obj.set_tabstop("false");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx1", "absolute", null, null, "64", "21", "737", "203", this);
            obj.set_text("처리담당");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", null, null, "52", "21", "426", "203", this);
            obj.set_text("처리일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", null, null, "64", "131", "737", "67", this);
            obj.set_text("처리내용");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_TESTXM", "absolute", "8", "154", null, null, "842", "15", this);
            obj.set_binddataset("dsTM_TESTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("48");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"120\"/><Column size=\"65\"/><Column size=\"147\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"65\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"테스터\"/><Cell col=\"2\" text=\"메뉴\"/><Cell col=\"3\" text=\"요청구분\"/><Cell col=\"4\" text=\"제목\"/><Cell col=\"5\" text=\"처리상태\"/><Cell col=\"6\" text=\"처리일\"/><Cell col=\"7\" text=\"담당자\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:TEST_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:MENU_NAME\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:REQG_CODE\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:TEST_SBJT\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:PRSE_CODE\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:PROC_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:PROC_CHSN\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtPROC_CNTT", "absolute", null, null, "686", "131", "46", "67", this);
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("4000");
            obj.set_taborder("23");
            obj.style.set_linespace("3");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtREMK_100X", "absolute", null, null, "686", "39", "46", "22", this);
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTEST_DATE", "absolute", null, "163", "100", "21", "305", null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_taborder("15");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("imgHelpEMPL_NUMB", "absolute", null, "189", "21", "21", "127", null, this);
            obj.set_cssclass("sytHelpPopupInput");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", null, "189", "79", "21", "46", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", null, "189", "58", "21", "150", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_imemode("none");
            obj.set_taborder("25");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPROC_DATE", "absolute", null, null, "100", "21", "323", "203", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_taborder("21");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtPROC_CHSN", "absolute", null, null, "232", "21", "500", "203", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_imemode("hangul");
            obj.set_taborder("20");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("30");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPRSE_CODE", "absolute", null, null, "158", "21", "46", "203", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_type("dropdown");
            obj.set_taborder("22");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("51");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("52");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("53");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("54");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("55");
            obj.set_text("테스트및오류사항관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("56");
            obj.set_text("홈 > 공통관리 > 시스템관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("57");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("58");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("62");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "149", "216", "6", null, null, this);
            obj.set_taborder("64");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "345", "292", "20", "60", null, null, this);
            obj.set_taborder("65");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "366", "157", "30", "261", null, null, this);
            obj.set_taborder("66");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "1141", "207", "20", "477", null, null, this);
            obj.set_taborder("67");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "416", "61", "38", "10", null, null, this);
            obj.set_taborder("68");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPROC_CHSN", "absolute", "1053", "97", "88", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "985", "97", "64", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("처리담당");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFL_ATTACH", "absolute", null, null, "686", "110", "46", "229", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("70");
            obj.set_binddataset("dsFL_ATTACH");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"파일명\"/><Cell col=\"1\" text=\"다운로드\"/><Cell col=\"2\" displaytype=\"text\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" style=\"cursor:hand;\" text=\"다운로드\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:INST_USID\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:INST_DATE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx02", "absolute", null, null, "64", "105", "737", "234", this);
            obj.set_taborder("71");
            obj.set_text("파일첨부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddFile", "absolute", null, null, "74", "21", "122", "343", this);
            obj.set_taborder("72");
            obj.set_text("파일첨부");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelFile", "absolute", null, null, "74", "21", "45", "343", this);
            obj.set_taborder("73");
            obj.set_text("파일삭제");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle03", "absolute", "28", "97", "64", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("처리기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPROC_DAT1", "absolute", "96", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static18", "absolute", "201", "97", "14", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPROC_DAT2", "absolute", "215", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("imgSearchTitle04", "absolute", "336", "97", "63", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRTEST_SBJT", "absolute", "391", "97", "100", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMENU_IDXX", "absolute", "567", "97", "80", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_tabstop("false");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMENU_IDXX", "absolute", "649", "97", "21", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMENU_NAME", "absolute", "672", "97", "100", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("alpha");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle05", "absolute", "512", "97", "64", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("메뉴");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSYST_CODE", "absolute", "245", "34", "120", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_tabstop("false");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsTM_TESTXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle06", "absolute", "793", "97", "73", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("내용/비고");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRTEST_CODC", "absolute", "868", "97", "96", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuOpen", "absolute", null, "163", "40", "21", "473", null, this);
            obj.set_taborder("84");
            obj.set_text("메뉴");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "573", "348", "80", "30", null, null, this);
            obj.set_taborder("85");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "8", "34", "477", "20", null, null, this);
            obj.set_taborder("87");
            obj.set_text("오류에 대한 재현 가능한 상세 시나리오 기술 및 관련 화면을 캡쳐하여 첨부해 주세요!");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("테스트및오류사항관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("txtTEST_DETL_value","edtTEST_CODC","value","dsTM_TESTXM","TEST_CODC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtPROC_DETL_value","edtPROC_CNTT","value","dsTM_TESTXM","PROC_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NAME_value","edtEMPL_NAME","value","dsTM_TESTXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calTEST_DATE_value","calTEST_DATE","value","dsTM_TESTXM","TEST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbREQG_CODE_value","cmbREQG_CODE","value","dsTM_TESTXM","REQG_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMENU_NAME_value","edtMENU_NAME","value","dsTM_TESTXM","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTEST_TITL_value","edtTEST_SBJT","value","dsTM_TESTXM","TEST_SBJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMENU_IDXX_value","edtMENU_IDXX","value","dsTM_TESTXM","MENU_IDXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NUMB_value","edtEMPL_NUMB","value","dsTM_TESTXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPRCS_NAME_value","edtPROC_CHSN","value","dsTM_TESTXM","PROC_CHSN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbPRSE_CODE_value","cmbPRSE_CODE","value","dsTM_TESTXM","PRSE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calPROC_DATE_value","calPROC_DATE","value","dsTM_TESTXM","PROC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtDESC_REMK_value","edtREMK_100X","value","dsTM_TESTXM","REMK_100X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSYST_CODE_value","edtSYST_CODE","value","dsTM_TESTXM","SYST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","TMMD0010","","dsTM_TESTXM","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TMMD0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TMMD0010.xfdl", "script::lib_script_dashboard.xjs");
        this.registerScript("TMMD0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMD0010 테스트 및 오류사항 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.24		김준수		Initial Created.
         *   2016.10.14		권미영		저장 후 재조회 시 수정한 row로 포커스
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
        //include "script::lib_script_dashboard.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME 	= "TMMD0010";
        this.aKeyValue 		= new Array(3);
        	
        if (this.getOwnerFrame()["sUSERAUTH"] == undefined){
        	this.sUSERAUTH     = "";
        	this.sFORMCAPTION  = "";
        	this.sFORMLOCATION = "";
        	this.sUSERLAVEL    = "";
        }else{
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
        	this.calSHRTEST_STDT.set_value(this.fnc_AddMonth(this.fnc_Today(), -1)); //현재일의 월 -1
        	this.calSHRTEST_ENDT.set_value(this.fnc_Today()); //현재일
        	
        	this.btnMenuOpen.visible = false;	//메뉴열기 버튼 비활성화

        	//1.관리자
        	if (this.sUSERLAVEL == 1) {

        		this.calSHRTEST_STDT.set_value( this.fnc_Today().substr(0,4) + "0101" );
        		
        		//관리자용 조회용 처리상태 추가
        		var nRow = this.dsSHRPRSE_CODE.addRow();
        		this.dsSHRPRSE_CODE.setColumn(nRow, "COMD_CODE", "INCOMPLETE");
        		this.dsSHRPRSE_CODE.setColumn(nRow, "COMD_CDNM", "<미완료>");
        		this.cmbSHRPRSE_CODE.set_index(nRow);
        	
        	//권한2
        	} else if (this.sUSERLAVEL == 2) {
        	
        		this.calSHRTEST_STDT.set_value( this.fnc_Today().substr(0,6) + "01" );
        	
        	// 관리자가 아닌경우 자기자신의 데이터만 조회
        	} else {
        	
        		this.fnc_SetReadonly(this.edtSHREMPL_NAME, true);
        		//this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO); //로그인아이디설정
        		this.edtSHREMPL_NUMB.set_value(application.GBL_USERID);	//외부 사용자를 위해 사원컬럼이지만 예외적으로 ID를 저장 함(2016.09.21 by302)
        		this.edtSHREMPL_NAME.set_value(application.GBL_USERNM); //로그인설정
        				
        	}
        	
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
        	this.fnc_DatasetClear("dsTM_TESTXM,dsFL_ATTACH"); //기 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTM_TESTXM=dsTM_TESTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_TESTXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTM_TESTXM.insertRow(this.dsTM_TESTXM.rowposition < 0 ? 0 : this.dsTM_TESTXM.rowposition);
        	this.calTEST_DATE.set_value(this.fnc_Today()); 	//테스트일 현재일
        	//this.cmbREQG_CODE.set_value("01"); 				//요청구분 

        	//this.edtEMPL_NUMB.set_value(application.GBL_EMPLNO);
        	this.edtEMPL_NUMB.set_value(application.GBL_USERID);	//외부 사용자를 위해 사원컬럼이지만 예외적으로 ID를 저장 함(2016.09.21 by302)
        	this.edtEMPL_NAME.set_value(application.GBL_USERNM);

        	this.cmbPRSE_CODE.set_value("01"); 				//처리상태 요청

        	switch (this.sUSERLAVEL) {
        		case "1" : 	//관리자
        			this.fnc_SetReadonly(this.calTEST_DATE, false);	//테스트일
        			break;

        		case "2" :	//사업장
        			this.fnc_SetReadonly(this.calTEST_DATE, true);	//테스트일
        			this.imgHelpEMPL_NUMB.set_enable(false);	//테스터Help
        			this.edtEMPL_NAME.set_enable(false);		//테스터명
        			break;

        		case "3" :	//부실
        		case "4" :	//부서
        		case "5" :	//개인
        			this.fnc_SetReadonly(this.calTEST_DATE, false);	//테스트일
        			this.imgHelpEMPL_NUMB.set_enable(true);		//테스터Help
        			this.edtEMPL_NAME.set_enable(true);			//테스터명
        			break;

        		default :
        			break;

        	}

        	var tmpStr = "♣ 연락처: \n\n"
        			   + "♣ 내용(오류 재현 방법 및 입력 자료 예제):\n";
        	this.edtTEST_CODC.set_value(tmpStr);
        	this.edtPROC_CNTT.set_value("《》\n");
        	this.dsTM_TESTXM.setColumn(iRow, "FILE_IDXX", "");
        	
        	this.edtMENU_NAME.setFocus();
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsTM_TESTXM.deleteRow(this.dsTM_TESTXM.rowposition);
        	}
        	this.grdTM_TESTXM.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_TESTXM,dsFL_ATTACH");
        	this.grdTM_TESTXM.setFocus();

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	this.aKeyValue[0] = this.dsTM_TESTXM.getColumn(this.dsTM_TESTXM.rowposition, "TEST_DATE");
        	this.aKeyValue[1] = this.dsTM_TESTXM.getColumn(this.dsTM_TESTXM.rowposition, "EMPL_NUMB");
        	this.aKeyValue[2] = this.dsTM_TESTXM.getColumn(this.dsTM_TESTXM.rowposition, "SRAL_NUMB");

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_TESTXM=dsTM_TESTXM:U dsFL_ATTACH=dsFL_ATTACH:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_TESTXM.setFocus();
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
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_TESTXM", this);

        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;

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

        	if (this.fnc_DatasetChangeCheck("dsTM_TESTXM,dsFL_ATTACH")) {
        		if (this.fnc_Message("TMM023") == false) {
        			return false;
        		}
        	}

        	if (this.fnc_Length(this.calSHRTEST_STDT.value) != 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회시작일", this.calSHRTEST_STDT);
        	}

        	if (this.fnc_Length(this.calSHRTEST_ENDT.value) != 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회종료일", this.calSHRTEST_ENDT);
        	}

        	if (this.calSHRTEST_STDT.value > this.calSHRTEST_ENDT.value) {
        		return this.fnc_SearchCheckPostAction("M1017", "조회시작일,조회종료일", this.calSHRTEST_STDT);
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_TESTXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	// 삭제전처리 (단위테스트 처리상태가 요청(01) 이상일 경우 삭제불가)
        	if (this.dsTM_TESTXM.getColumn(this.dsTM_TESTXM.rowposition, "PRSE_CODE") != "01") {
        		this.fnc_Message("TMM125", "처리가 진행중인 자료는 삭제할 수 없습니다.");
        		return false;
        	}

        	// 삭제전처리 (단위테스트 처리상태가 요청 이상일 경우 삭제불가)
        	if ((this.fnc_Length(this.sUSERLAVEL) != 0 && this.sUSERLAVEL != 1)
        		&& this.dsTM_TESTXM.getColumn(this.dsTM_TESTXM.rowposition, "EMPL_NUMB") != application.GBL_USERID) {
        		this.fnc_Message("TMM125", "삭제 권한이 없습니다.");
        		return false;
        	}

        	// 해당 항목에 대한 삭제 여부 확인
        	var sQuestionText = this.dsTM_TESTXM.getColumn(this.dsTM_TESTXM.rowposition, "TEST_SBJT");
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_TESTXM,dsFL_ATTACH")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_TESTXM.getRowCount(); i++) {
        		
        		if (this.fnc_ToUpper(this.dsTM_TESTXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "MENU_IDXX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "메뉴", this.dsTM_TESTXM, i, this.edtMENU_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "TEST_DATE"))) != 8) {
        			return this.fnc_CheckPostAction("TMM072", "테스트일", this.dsTM_TESTXM, i, this.calTEST_DATE, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "REQG_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "요청구분", this.dsTM_TESTXM, i, this.cmbREQG_CODE, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "테스트사원", this.dsTM_TESTXM, i, this.edtEMPL_NAME, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "TEST_SBJT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "테스트제목", this.dsTM_TESTXM, i, this.edtTEST_SBJT, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "TEST_CODC"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "세부내용", this.dsTM_TESTXM, i, this.edtTEST_CODC, "");
        		}

        		// 처리내역 필수조건 확인
        		if (this.fnc_Length(this.sUSERLAVEL) != 0 && this.sUSERLAVEL < 3) {
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "PRSE_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "처리상태", this.dsTM_TESTXM, i, this.cmbPRSE_CODE, "");
        			}
        		}
        		
        		//처리일
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "PROC_DATE"))) > 0
        		   && !(   this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "PRSE_CODE")) == "04" 
        				|| this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "PRSE_CODE")) == "05") ) {
        			return this.fnc_CheckPostAction("TMM125", "처리일이 입력 된 경우 처리상태는 <처리완료> 또는 <미수용>으로 선택 해야 합니다.", this.dsTM_TESTXM, i, this.calPROC_DATE, "");
        		}
        		
        		//처리상태가 <04.처리완료>인 경우 체크 사항
        		if (this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "PRSE_CODE")) == "04" ) {
        		
        			//요청구분
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "REQG_CODE"))) < 1 ) {
        				return this.fnc_CheckPostAction("TMM125", "처리상태가 <처리완료>인 경우 [요청구분]은 필수입력 항목입니다!", this.dsTM_TESTXM, i, this.cmbREQG_CODE, "");
        			}
        		
        			//처리담당
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "PROC_CHSN"))) < 1 ) {
        				return this.fnc_CheckPostAction("TMM125", "처리상태가 <처리완료>인 경우 [처리담당]은 필수입력 항목입니다!", this.dsTM_TESTXM, i, this.edtPROC_CHSN, "");
        			}
        		
        			//처리일
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "PROC_DATE"))) < 1 ) {
        				return this.fnc_CheckPostAction("TMM125", "처리상태가 <처리완료>인 경우 [처리일]은 필수입력 항목입니다!", this.dsTM_TESTXM, i, this.calPROC_DATE, "");
        			}
        		
        			//처리내용
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(i, "PROC_CNTT"))) < 1 ) {
        				return this.fnc_CheckPostAction("TMM125", "처리상태가 <처리완료>인 경우 [처리내용]은 필수입력 항목입니다!", this.dsTM_TESTXM, i, this.edtPROC_CNTT, "");
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

        	if (sKind == "SEARCH00") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TEST_STDT =" + this.fnc_Quote(this.calSHRTEST_STDT.value); // 조회기간
        		sReturnString += " TEST_ENDT =" + this.fnc_Quote(this.calSHRTEST_ENDT.value); // 조회기간
        		sReturnString += " SYST_CODE =" + this.fnc_Quote(this.cmbSHRSYST_CODE.value); // 시스템
        		sReturnString += " EMPL_NUMB =" + this.fnc_Quote(this.edtSHREMPL_NUMB.value); // 테스트사원
        		sReturnString += " REQG_CODE =" + this.fnc_Quote(this.cmbSHRREQG_CODE.value); // 요청구분
        		sReturnString += " PRSE_CODE =" + this.fnc_Quote(this.cmbSHRPRSE_CODE.value); // 처리상태
        		sReturnString += " PROC_DAT1 =" + this.fnc_Quote(this.calSHRPROC_DAT1.value); // 처리기간
        		sReturnString += " PROC_DAT2 =" + this.fnc_Quote(this.calSHRPROC_DAT2.value); // 처리기간
        		sReturnString += " TEST_SBJT =" + this.fnc_Quote(this.edtSHRTEST_SBJT.value); // 테스트제목
        		sReturnString += " MENU_IDXX =" + this.fnc_Quote(this.edtSHRMENU_IDXX.value); // 메뉴
        		sReturnString += " TEST_CODC =" + this.fnc_Quote(this.edtSHRTEST_CODC.value); // 내용/비고
        		sReturnString += " PROC_CHSN =" + this.fnc_Quote(this.edtSHRPROC_CHSN.value); // 처리담당
        		
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " FILE_IDXX =" + this.fnc_Quote(this.dsTM_TESTXM.getColumn(this.dsTM_TESTXM.rowposition, "FILE_IDXX"));

        	} else if (sKind == "SAVE00") {
        	
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
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
        	
        		this.fnc_Information(this.stInformation1, this.dsTM_TESTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_TESTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		var iRow = this.dsTM_TESTXM.findRowExpr("TEST_DATE=='" + this.aKeyValue[0] + "' && EMPL_NUMB=='" + this.aKeyValue[1] + "' && SRAL_NUMB=='" + this.aKeyValue[2] + "'");
         		if (iRow < 0) iRow = 0;
         		
         		this.grdTM_TESTXM.selectRow(iRow);
         		this.dsTM_TESTXM.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";
        		this.aKeyValue[1] = "";
        		this.aKeyValue[2] = "";		
        		this.file_Search01();
        	
        	} else if (sMethodName == "SEARCH01") {
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fn_KeyFieldDisible(this.dsTM_TESTXM);
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        		this.fn_Search();	//일련번호 채번에 따라 재조회 필요.
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        			arrParam[1] = "COMBO,cmbSHRREQG_CODE,dsSHRREQG_CODE,0";
        			arrParam[2] = "COMBO,cmbSHRPRSE_CODE,dsSHRPRSE_CODE,0";
        			arrParam[3] = "COMBO,cmbREQG_CODE,dsREQG_CODE,0";
        			arrParam[4] = "COMBO,cmbPRSE_CODE,dsPRSE_CODE,0";
        			arrParam[5] = "GRID,grdTM_TESTXM,dsREQG_CODE,REQG_CODE";
        			arrParam[6] = "GRID,grdTM_TESTXM,dsPRSE_CODE,PRSE_CODE";
        			
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	this.file_Search01();
        	
        /*
         	// sUSERLAVEL 이 1,2 일경우 (관리자일때 전부 수정 가능)
         	if (this.fnc_Length(this.sUSERLAVEL) != 0 && this.sUSERLAVEL < 2) { 		
         		this.fn_KeyFieldDisiblesub(false, false);
         		return;
         	}

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.fn_KeyFieldDisiblesub(false, true);
         		return;
        	} 

        	if (this.cmbPRSE_CODE.value == "01" || this.IsNull(this.cmbPRSE_CODE.value)) {
        		this.fn_KeyFieldDisiblesub(false, true);
        	} else { // 처리상태가 접수이상 처리 되었을때
        		this.fn_KeyFieldDisiblesub(true, true);
        	}	
        */
        	
        	//this.fn_KeyFieldDisiblesub(false, false);
        	
        	//관리자
        	if (this.sUSERLAVEL == "1" || this.sUSERLAVEL == "2") {
        	
        		//처리완료(04), 수용불가(05)
        		if (obj.getColumn(obj.rowposition, "PRSE_CODE" ) == "04" || obj.getColumn(obj.rowposition, "PRSE_CODE" ) == "05") {
        			this.fn_KeyFieldDisiblesub(true, true);
        			this.fnc_SetReadonly(this.cmbPRSE_CODE, false);		//처리상태
        			//this.fnc_SetReadonly(this.edtTEST_CODC, true);
        			//this.fnc_SetReadonly(this.edtPROC_CNTT, true);
        			//this.fnc_SetReadonly(this.edtREMK_100X, true);	
        		//요청(01), 처리중
        		} else {
        			if (this.sUSERLAVEL == "1" || application.GBL_USERID == obj.getColumn(obj.rowposition, "EMPL_NUMB" )) {
        				this.fn_KeyFieldDisiblesub(false, false);
        			} else {
        				this.fn_KeyFieldDisiblesub(true, false);
        			}
        			//this.fnc_SetReadonly(this.edtTEST_CODC, false);
        			//this.fnc_SetReadonly(this.edtPROC_CNTT, false);
        			//this.fnc_SetReadonly(this.edtREMK_100X, false);					
        		}
        		
        		this.btnMenuOpen.visible = true;	//메뉴열기 버튼 활성화
        	
        	//일반사용자
        	} else {

        		//this.fnc_SetReadonly(this.edtPROC_CNTT, false);
        		//this.fnc_SetReadonly(this.edtREMK_100X, false);
        	
        		//요청(01)
        		if (obj.getColumn(obj.rowposition, "PRSE_CODE" ) == "01") {
        			this.fn_KeyFieldDisiblesub(false, true);
        			//this.fnc_SetReadonly(this.edtTEST_CODC, false);
        			//this.fnc_SetReadonly(this.edtPROC_CNTT, false);
        		//처리중, 처리완료(04), 수용불가(05)
        		} else {
        			this.fn_KeyFieldDisiblesub(true, true);
        			//this.fnc_SetReadonly(this.edtTEST_CODC, true);
        			//this.fnc_SetReadonly(this.edtPROC_CNTT, true);
        		}
        		
        		this.btnMenuOpen.visible = false;	//메뉴열기 버튼 비활성화
        	
        	}
        	
        	//PK항목은 신규일때만 수정 가능하도록 보완.
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_SetReadonly(this.calTEST_DATE, false);
        		this.fnc_SetReadonly(this.edtEMPL_NAME, false);
        		
        	} else {
        		this.fnc_SetReadonly(this.calTEST_DATE, true);
        		this.fnc_SetReadonly(this.edtEMPL_NAME, true);
        		
        	}
        	
        }

        this.file_Search01 = function(){
        	this.fnc_DatasetClear("dsFL_ATTACH"); //기 조회 자료 초기화

        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFL_ATTACH=dsFL_ATTACH";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*------------------------------------+
         |  Key Field Disibled 처리 Sub FLAG   |
         +-------------------------------------*/
        this.fn_KeyFieldDisiblesub = function (Flag1,Flag2) {

        	this.fnc_SetReadonly(this.edtMENU_NAME, Flag1);
        	this.fnc_SetReadonly(this.edtTEST_SBJT, Flag1);
        	this.fnc_SetReadonly(this.edtTEST_CODC, Flag1);
        	this.fnc_SetReadonly(this.calTEST_DATE, Flag1);
        	this.fnc_SetReadonly(this.cmbREQG_CODE, Flag1);
        	
        	this.fnc_SetReadonly(this.edtEMPL_NAME, Flag2);
        	this.fnc_SetReadonly(this.edtPROC_CHSN, Flag2);
        	this.fnc_SetReadonly(this.calPROC_DATE, Flag2);
        	this.fnc_SetReadonly(this.cmbPRSE_CODE, Flag2);
        	this.fnc_SetReadonly(this.edtPROC_CNTT, Flag2);
        	this.fnc_SetReadonly(this.edtREMK_100X, Flag2);
        	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 조회조건 - 테스트사원정보조회(Popup)
        		arrParam[0] = "TMM1002";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        	
        	} else if ((obj.name == "imgHelpSHRMENU_IDXX") || (obj.name == "edtSHRMENU_NAME")) { // 입력 팝업 - 메뉴입력조회(Popup)
        		arrParam[0] = "TMM0002";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRMENU_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "edtSHRMENU_NAME";
        		arrParam[5] = "edtSHRMENU_IDXX,edtSHRMENU_NAME,edtSHRSYST_CODE";
        		arrParam[6] = "0,1,2";
        	
        	} else if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtEMPL_NAME")) { // 입력 팝업 - 테스트사원정보조회(Popup)
        		arrParam[0] = "TMM1002";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "edtEMPL_NAME";
        		arrParam[5] = "edtEMPL_NUMB,edtEMPL_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpMENU_IDXX") || (obj.name == "edtMENU_NAME")) { // 입력 팝업 - 메뉴입력조회(Popup)
        		arrParam[0] = "TMM0002";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtMENU_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "edtMENU_NAME";
        		arrParam[5] = "edtMENU_IDXX,edtMENU_NAME,edtSYST_CODE";
        		arrParam[6] = "0,1,2";
        	
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        this.dsTM_TESTXM_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "PRSE_CODE") {
        		
        		//처리상태가 <04.처리완료>인 경우 체크 사항
        		if (this.fnc_Trim(this.dsTM_TESTXM.getColumn(e.row, "PRSE_CODE")) == "04" ) {
        		
        			//요청구분
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(e.row, "REQG_CODE"))) < 1 ) {
        				return this.fnc_CheckPostAction("TMM125", "처리상태가 <처리완료>인 경우 [요청구분]은 필수입력 항목입니다!", this.dsTM_TESTXM, e.row, this.cmbREQG_CODE, "");
        			}
        		
        			//처리담당
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(e.row, "PROC_CHSN"))) < 1 ) {
        				return this.fnc_CheckPostAction("TMM125", "처리상태가 <처리완료>인 경우 [처리담당]은 필수입력 항목입니다!", this.dsTM_TESTXM, e.row, this.edtPROC_CHSN, "");
        			}
        		
        			//처리일
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(e.row, "PROC_DATE"))) < 1 ) {
        				return this.fnc_CheckPostAction("TMM125", "처리상태가 <처리완료>인 경우 [처리일]은 필수입력 항목입니다!", this.dsTM_TESTXM, e.row, this.calPROC_DATE, "");
        			}
        		
        			//처리내용
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_TESTXM.getColumn(e.row, "PROC_CNTT"))) < 1 ) {
        				return this.fnc_CheckPostAction("TMM125", "처리상태가 <처리완료>인 경우 [처리내용]은 필수입력 항목입니다!", this.dsTM_TESTXM, e.row, this.edtPROC_CNTT, "");
        			}
        			
        		}
        		
        		this.fn_KeyFieldDisible(obj);
        		
        	}
        }

        /*-----------------------------+
         |  그리드 더블클릭 시 화면 이동 |
         +-----------------------------*/
        this.grdTM_TESTXM_oncelldblclick = function(obj,e) {
        	var sMENU_ID = this.dsTM_TESTXM.getColumn(this.dsTM_TESTXM.rowposition, "MENU_IDXX");
        	if ( sMENU_ID == "MTMMD0010" ) return;
        	this.fnc_OpenMenu(sMENU_ID, "");
        }

        /*-----------------------------+
         |  파일첨부 / 파일삭제 버튼 클릭 |
         +-----------------------------*/
        this.btnFile_onclick = function(obj,e) {
        	if ( obj.name == "btnAddFile" ) {
        		this.fnc_CallFileUplod(2, "", "fn_CallFileUplodCallback");
        		
        	} else if ( obj.name == "btnDelFile" ) {
        		if (this.fn_checkDeleteFile()) this.dsFL_ATTACH.deleteMultiRows(this.grdFL_ATTACH.getSelectedDatasetRows());
        		
        	}
        	
        }

        /*-------------------+
         |  파일첨부 callback |
         +-------------------*/
        this.fn_CallFileUplodCallback = function(robjds,form) {

        	var objds 		= form.dsFL_ATTACH;
        	var objmainds 	= form.dsTM_TESTXM;
        	
        	if ( objmainds.getColumn(objmainds.rowposition, "FILE_IDXX") == "" ) {
        		objmainds.setColumn(objmainds.rowposition, "FILE_IDXX", robjds.getColumn(0, "FILE_IDXX"));
        	} else {
        		for ( var i=0; i<robjds.rowcount; i++ ) {
        			robjds.setColumn(i, "FILE_IDXX", objmainds.getColumn(objmainds.rowposition, "FILE_IDXX"));
        		}
        	}
        	
        	for(i = 0; i < robjds.rowcount; i++){
        		var iRow = objds.addRow();
        		objds.copyRow(iRow, robjds, i);
        		
        		if(objds.updatecontrol){
        		}else{
        			objds.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		}
        	}
        	
        }

        /*---------------------+
         |  파일삭제 여부 체크  |
         +---------------------*/
        this.fn_checkDeleteFile = function () {
        	
        	if (this.dsFL_ATTACH.getRowCount() < 1) {
        		return this.fnc_Message("TMM007");
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdFL_ATTACH);
        	
        	if (iSelectRowCount == 0) {
        		return this.fnc_Message("TMM007");
        	} else if ( iSelectRowCount == 1 ) {
        		var sQuestionText = this.dsFL_ATTACH.getColumn(this.dsFL_ATTACH.rowposition, "LFIL_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	} else {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	}
        	
        }

        /*---------------------+
         |  파일첨부 다운로드  |
         +---------------------*/
        this.grd_oncellclick = function(obj,e) {
        	if ( obj.getCellProperty("body", obj.currentcell, "text") == "다운로드" ) {
        		var filePath   = this.dsFL_ATTACH.getColumn(e.row,"FILE_PATH");
        		var phyFileNm  = this.dsFL_ATTACH.getColumn(e.row,"PFIL_NAME");
        		var realFileNm = this.dsFL_ATTACH.getColumn(e.row,"LFIL_NAME");
        		if (this.fnc_Length(filePath) > 0) {
        			this.fnc_FileDownLoad(filePath, phyFileNm, realFileNm);
        		}
        	}
        }

        /*---------------------+
         |  메뉴 바로 열기   |
         +---------------------*/
        this.btnMenuOpen_onclick = function(obj,e)
        {
        	var sMENU_IDXX = this.edtMENU_IDXX.text;
        	if (this.fnc_Length(sMENU_IDXX) > 0) {
        		//this.fnc_OpenMenu(this.edtMENU_IDXX.text, "");
        		this.fn_OpenLinkMenu(this.edtMENU_IDXX.text);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_TESTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_TESTXM.addEventHandler("oncolumnchanged", this.dsTM_TESTXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtTEST_CODC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMENU_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMENU_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRTEST_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRTEST_ENDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpMENU_IDXX.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSYST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSYST_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.grdTM_TESTXM.addEventHandler("oncelldblclick", this.grdTM_TESTXM_oncelldblclick, this);
            this.edtPROC_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREMK_100X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calTEST_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calPROC_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPROC_CHSN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPROC_CHSN.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbPRSE_CODE.addEventHandler("onitemchanged", this.cmbPRSE_CODE_onitemchanged, this);
            this.st_FormTitle.addEventHandler("onclick", this.st_FormTitle_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRPROC_CHSN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdFL_ATTACH.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.btnAddFile.addEventHandler("onclick", this.btnFile_onclick, this);
            this.btnDelFile.addEventHandler("onclick", this.btnFile_onclick, this);
            this.calSHRPROC_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRPROC_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRTEST_SBJT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRMENU_IDXX.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRMENU_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMENU_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRSYST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSYST_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRTEST_CODC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnMenuOpen.addEventHandler("onclick", this.btnMenuOpen_onclick, this);

        };

        this.loadIncludeScript("TMMD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
