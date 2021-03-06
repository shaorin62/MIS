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
                this.set_name("BDMB0050");
                this.set_titletext("추가예산관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTB_CPLADD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ACCT_UNIT\" size=\"4\" type=\"STRING\"/><Column id=\"BUDG_YYMM\" size=\"6\" type=\"STRING\"/><Column id=\"CSTC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CSTC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BDSB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQU_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"BUDG_AMNT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"REQU_REMK\" size=\"400\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQN\" size=\"32\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"10\" type=\"STRING\"/><Column id=\"APPR_PROC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRPAQD_CODE</Col><Col id=\"CODEID\">PAQD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_CPLADD_PRINT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BDSB_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BDSB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_ATAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BADD_ATAL\" size=\"32\" type=\"BIGDECIMAL\"/><Column id=\"BADD_REQU\" size=\"10\" type=\"BIGDECIMAL\"/><Column id=\"BTOT_ATAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SLIP_ATAL\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"DOCU_IDXX\" type=\"string\" size=\"32\"/><Column id=\"EMPL_NUMB\" type=\"string\" size=\"32\"/><Column id=\"SUBJ_NAME\" type=\"string\" size=\"32\"/><Column id=\"DEPT_CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "159", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("11");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTB_CPLADD", "absolute", "8", "180", null, null, "25", "15", this);
            obj.set_binddataset("dsTB_CPLADD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("10");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.getSetter("autofitminwidth").set("950");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"233\"/><Column size=\"72\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"코스트센터코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"코스트센터명\"/><Cell col=\"2\" text=\"신청일자\"/><Cell col=\"3\" text=\"예산과목\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"예산과목명\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"예산연월\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_essential\" text=\"예산금액\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_essential\" text=\"신청사유\"/><Cell col=\"9\" text=\"결재상태\"/><Cell col=\"10\" text=\"결재처리\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:CSTC_CODE\" editlimit=\"0\" autosizerow=\"default\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:CSTC_NAME\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" autosizerow=\"default\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:REQU_DATE\" mask=\"yyyy-MM-dd\" editlimit=\"0\" calendardisplaynulltype=\"none\" autosizerow=\"default\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:BDSB_CODE\" editlimit=\"0\" autosizerow=\"default\"/><Cell col=\"4\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;normal&quot; : &quot;none&quot;\" style=\"align:left;\" text=\"bind:BDSB_NAME\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" autosizerow=\"default\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;mask&quot; : &quot;none&quot;\" editfilter=\"none\" style=\"align:center;\" text=\"bind:BUDG_YYMM\" mask=\"####-##\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;show&quot; : &quot;hide&quot;\" expandsize=\"20\" expandimage=\"URL('theme://images\\btn_CalDrop_N.png')\" autosizerow=\"default\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"expr:APPR_STAT != 'N' ? 'none' : 'normal'\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BUDG_AMNT\" editlimit=\"0\" autosizerow=\"default\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:EMPL_NAME\" editlimit=\"0\" autosizerow=\"default\"/><Cell col=\"8\" edittype=\"expr:APPR_STAT != 'N' ? 'none' : 'textarea'\" style=\"align:left middle;\" text=\"bind:REQU_REMK\" editlimit=\"400\" editscrollbar=\"none\" editlengthunit=\"utf16\" autosizerow=\"limitmin\"/><Cell col=\"9\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:APPR_STAT\" editlimit=\"0\" autosizerow=\"default\"/><Cell col=\"10\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;none&quot; : &quot;button&quot;\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;none&quot; : &quot;button&quot;\" style=\"align:center;\" text=\"bind:APPR_PROC\" editlimit=\"0\" autosizerow=\"default\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" style=\"align:center;\" text=\"합계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('BUDG_AMNT'), 0)\" mask=\"#,###\"/><Cell col=\"7\" colspan=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "495", "27", "25", null, this);
            obj.set_taborder("12");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "95", "25", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", "71", "71", "22", null, null, this);
            obj.set_taborder("14");
            obj.set_text("예산연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YEAR", "absolute", "109", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");

            obj = new Static("Static00", "absolute", "439", "71", "71", "22", null, null, this);
            obj.set_taborder("15");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "507", "71", "104", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static0", "absolute", "28", "122", "90", "22", null, null, this);
            obj.set_taborder("16");
            obj.set_text("코스트센터");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "439", "97", "68", "22", null, null, this);
            obj.set_taborder("17");
            obj.set_text("신청자");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "507", "97", "80", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "612", "97", "120", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NAME", "absolute", "589", "97", "22", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("20");
            obj.set_text("추가예산관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "24", null, this);
            obj.set_taborder("21");
            obj.set_text("홈 > 예산관리 > 부서예산");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "761", "71", "76", "22", null, null, this);
            obj.set_taborder("22");
            obj.set_text("예산분기");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRPAQD_CODE", "absolute", "829", "71", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Edit("edtSHRCSTC_CODE", "absolute", "109", "123", "80", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCSTC_NAME", "absolute", "191", "123", "22", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCSTC_NAME", "absolute", "214", "123", "196", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "28", "96", "68", "22", null, null, this);
            obj.set_taborder("25");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "439", "122", "71", "22", null, null, this);
            obj.set_taborder("26");
            obj.set_text("예산과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YMFR", "absolute", "109", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Image01", "absolute", "214", "97", "14", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("~");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YMTO", "absolute", "229", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edtSHRBDSB_CODE", "absolute", "507", "123", "80", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBDSB_NAME", "absolute", "589", "123", "22", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBDSB_NAME", "absolute", "612", "123", "120", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0%", "0", null, "717", "99.33%", null, this);
            obj.set_taborder("30");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "20", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "97.89%", "0", null, "717", "0%", null, this);
            obj.set_taborder("32");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "51.22%", "0", null, "60", "45.75%", null, this);
            obj.set_taborder("33");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "75.65%", "23", null, "10", "2.11%", null, this);
            obj.set_taborder("34");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "60.57%", "56", null, "4", "27.21%", null, this);
            obj.set_taborder("35");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1.68%", null, null, "15", "2.61%", "0", this);
            obj.set_taborder("36");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0.67%", "56", null, "4", "88.54%", null, this);
            obj.set_taborder("37");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0.67%", "29", null, "6", "84.5%", null, this);
            obj.set_taborder("38");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0.76%", "61", null, "92", "96.71%", null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "8.51%", "61", null, "92", "90.82%", null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14.32%", "61", null, "10", "80.29%", null, this);
            obj.set_taborder("41");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15%", "92", null, "5", "82.98%", null, this);
            obj.set_taborder("42");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "15%", "144", null, "10", "79.61%", null, this);
            obj.set_taborder("43");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "34.54%", "60", null, "94", "62.09%", null, this);
            obj.set_taborder("44");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "61.67%", "60", null, "94", "34.96%", null, this);
            obj.set_taborder("45");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "48.27%", "155", null, "25", "44.99%", null, this);
            obj.set_taborder("46");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0.67%", "174", null, "6", "81.13%", null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "761", "97", "68", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "829", "97", "80", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "911", "97", "21", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "934", "97", "120", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "761", "123", "76", "22", null, null, this);
            obj.set_taborder("51");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_STAT", "absolute", "829", "123", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("stInformation00", "absolute", null, "159", "410", "21", "25", null, this);
            obj.set_taborder("52");
            obj.set_text("신청사유 입력 시 <shift + enter>, <ctrl + enter> 로 개행할 수 있습니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Info.png') left middle");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("추가예산관리");
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
        this.addIncludeScript("BDMB0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMB0050.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	BDMB0050 추가예산관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.27		안윤준		Initial Created.
         *   2016.09.06		권미영
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

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  	= "TTTTTTTF"; 
        this.sPACKAGENAME 	= "BDMB0050";
        this.sSERVERDATE 	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);
        this.aKeyValue 		= new Array(4);

        this.sDOCU_IDXX		= "";			//결재문서ID
        this.sAPPR_GUBN 	= "";			//결재처리구분 [ createDoc : 상신, deleteDoc : 결재취소, show : 조회, list : 목록 ]
        this.sAPPR_SEQN 	= "";			//결재문서 SEQ
        this.sAPPR_STAT   	= "";   		//결재문서 상태

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
         /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	
        	this.calSHRBUDG_YEAR.set_value(this.sSERVERDATE);
        // 	this.calSHRBUDG_YMFR.set_value(this.fnc_SubStr(this.sSERVERDATE,0, 6) + "01");
        // 	this.calSHRBUDG_YMTO.set_value(this.sSERVERDATE);

        	this.sDOCU_IDXX = "KFI101";	//결재문서ID
        	
        	this.fnc_SetReadonly(this.imgHelpSHRDEPT_CODE, true);
        	this.fnc_SetReadonly(this.edtSHRDEPT_NAME, true);
        	this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        	this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        	
        	if (this.sUSERLAVEL == "1") {

        		this.fnc_SetReadonly(this.imgHelpSHRDEPT_CODE, false);
        		this.fnc_SetReadonly(this.edtSHRDEPT_NAME, false);
        		this.edtSHRDEPT_CODE.set_value("");
        		this.edtSHRDEPT_NAME.set_value("");
        	
        	} else if (this.sUSERLAVEL == "5") {
        		
        		this.fnc_SetReadonly(this.imgHelpSHREMPL_NAME, true);
        		this.fnc_SetReadonly(this.edtSHREMPL_NAME, true);
        		this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        		this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        		
        	}
        	
        	this.grdTB_CPLADD.setFocus();

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
        	this.fnc_DatasetClear("dsTB_CPLADD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTB_CPLADD=dsTB_CPLADD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLADD.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow     = this.dsTB_CPLADD.addRow();
        	var sNowDate = this.fnc_GetServerDateTime("date");
        	this.dsTB_CPLADD.setColumn(iRow, "REQU_DATE", this.fnc_SubStr(sNowDate, 0, 8));
        	this.dsTB_CPLADD.setColumn(iRow, "BUDG_YYMM", this.fnc_SubStr(sNowDate, 0, 6));
        	this.dsTB_CPLADD.setColumn(iRow, "ACCT_UNIT", this.cmbSHRACCT_UNIT.value);
        	this.dsTB_CPLADD.setColumn(iRow, "EMPL_NUMB", application.GBL_EMPLNO);
        	this.dsTB_CPLADD.setColumn(iRow, "EMPL_NAME", application.GBL_USERNM);
        	this.dsTB_CPLADD.setColumn(iRow, "APPR_STAT", "N");	//임시저장

        	this.fnc_GridSetCellFocus(this.grdTB_CPLADD, "CSTC_NAME");

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsTB_CPLADD.deleteRow(this.dsTB_CPLADD.rowposition);
        	this.grdTB_CPLADD.setFocus();
        		
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTB_CPLADD");
        	this.grdTB_CPLADD.setFocus(); 
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	this.aKeyValue[0] = this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "ACCT_UNIT");
        	this.aKeyValue[1] = this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "BUDG_YYMM");
        	this.aKeyValue[2] = this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "CSTC_CODE");
        	this.aKeyValue[3] = this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "BDSB_CODE");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTB_CPLADD=dsTB_CPLADD:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLADD.setFocus();
        	
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

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTB_CPLADD", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) {	
        		return this.fnc_SearchCheckPostAction("TMM072", "예산연도", this.calSHRBUDG_YEAR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {	
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_UNIT);
        	}
        	
        	if (this.calSHRBUDG_YMFR.value > this.calSHRBUDG_YMTO.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "신청 시작일자,신청 종료일자", this.calSHRBUDG_YMTO);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if ( this.dsTB_CPLADD.getRowCount() == 0 ) return;
        	
        	if (this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "APPR_STAT") != "N") {
        		this.fnc_Message("HRM018", "삭제");
        		return false;
        	}
        	
        	var sQuestionText = "추가예산 (" + this.fnc_Trim(this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "CSTC_NAME")) 
        									   + " " 
        									   + this.fnc_Trim(this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "BDSB_NAME")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTB_CPLADD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var row = 0; row < this.dsTB_CPLADD.getRowCount(); row++) {

        		if (this.fnc_ToUpper(this.dsTB_CPLADD.getRowType(row)) == Dataset.ROWTYPE_NORMAL ) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLADD.getColumn(row, "CSTC_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부서명", this.dsTB_CPLADD, row, this.grdTB_CPLADD, "CSTC_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLADD.getColumn(row, "CSTC_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부서코드", this.dsTB_CPLADD, row, this.grdTB_CPLADD, "CSTC_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLADD.getColumn(row, "BDSB_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "예산과목명", this.dsTB_CPLADD, row, this.grdTB_CPLADD, "BDSB_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLADD.getColumn(row, "BDSB_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "예산과목", this.dsTB_CPLADD, row, this.grdTB_CPLADD, "BDSB_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLADD.getColumn(row, "BUDG_YYMM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "예산년월", this.dsTB_CPLADD, row, this.grdTB_CPLADD, "BUDG_YYMM");
        		}

        		if (!this.fnc_IsDate(this.fnc_Trim(this.dsTB_CPLADD.getColumn(row, "BUDG_YYMM")) + "01")) {
        			return this.fnc_CheckPostAction("TMM125", "예산년월 입력 데이터를 확인 하십시요.", this.dsTB_CPLADD, row, this.grdTB_CPLADD, "BUDG_YYMM");
        		}

        		if (nexacro.toNumber(this.fnc_Trim(this.dsTB_CPLADD.getColumn(row, "BUDG_AMNT")), 0) == 0) {
        			return this.fnc_CheckPostAction("TMM072", "예산금액", this.dsTB_CPLADD, row, this.grdTB_CPLADD, "BUDG_AMNT");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLADD.getColumn(row, "REQU_REMK"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "신청사유", this.dsTB_CPLADD, row, this.grdTB_CPLADD, "REQU_REMK");
        		}

        	}

        	return true;

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	var sShrBudgYear 	= this.fnc_SubStr(this.calSHRBUDG_YEAR.value, 0, 4); // 예산연도
        	var sPaqdCode 		= this.cmbSHRPAQD_CODE.value; // 예산분기
        	var sPaqdCodeFr 	= ""; // 예산분기FR
        	var sPaqdCodeTo 	= ""; // 예산분기TO
        	
        	if (sKind == "SEARCH00") {
        		
        		switch (sPaqdCode){
        			case "1" : sPaqdCodeFr = "01"; sPaqdCodeTo = "03"; break; 
        			case "2" : sPaqdCodeFr = "04"; sPaqdCodeTo = "06"; break; 
        			case "3" : sPaqdCodeFr = "07"; sPaqdCodeTo = "09"; break; 
        			case "4" : sPaqdCodeFr = "10"; sPaqdCodeTo = "12"; break; 
        			default :
        			sPaqdCodeFr = ""; sPaqdCodeTo = "";
        		}
        		
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    	+ this.fnc_Quote(sKind); 
        		sReturnString += " BUDG_YYMM=" 	+ this.fnc_Quote(sShrBudgYear); // 예산연도
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.cmbSHRACCT_UNIT.value); // 회계단위
        		sReturnString += " PAQDCODEFR=" + this.fnc_Quote(sPaqdCodeFr); // 예산분기FR
        		sReturnString += " PAQDCODETO=" + this.fnc_Quote(sPaqdCodeTo); // 예산분기TO
        		sReturnString += " BUDG_YMFR=" 	+ this.fnc_Quote(this.calSHRBUDG_YMFR.value); // 신청기간FR
        		sReturnString += " BUDG_YMTO=" 	+ this.fnc_Quote(this.calSHRBUDG_YMTO.value); // 신청기간TO
        		sReturnString += " CSTC_CODE=" 	+ this.fnc_Quote(this.edtSHRCSTC_CODE.value); // 부서코드
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.edtSHREMPL_NUMB.value); // 신청코드
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		sReturnString += " BDSB_CODE=" 	+ this.fnc_Quote(this.edtSHRBDSB_CODE.value); // 예산과목
        		sReturnString += " DOCU_IDXX=" 	+ this.fnc_Quote(this.sDOCU_IDXX);
        		sReturnString += " APPR_STAT=" 	+ this.fnc_Quote(this.cmbSHRAPPR_STAT.value);

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		
            } else if (sKind == "SAVE99") {
                
                // 전자결재 연동자료 저장
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " GWAP_EMPL="  + this.fnc_Quote(application.GBL_EMPLNO);	//사원번호(결재요청자)
                sReturnString += " GWAP_DEPT="  + this.fnc_Quote(application.GBL_DEPTCD);	//부서코드(신청자)
                
                var sGwap_Subj = "[" + this.fnc_GetMaskFormat(this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "REQU_DATE"), "@@@@-@@-@@")
        							 + " " + application.GBL_DEPTNM
        							 + " " + application.GBL_USERNM + "] 추가예산신청";
                
                sReturnString += " GWAP_SUBJ="  + this.fnc_Quote(sGwap_Subj);	//전자결재제목

            } else if (sKind == "PRINT00") {
        		
        		var sBudg_Yymm = this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "BUDG_YYMM");
        		var sBudg_Mont = this.fnc_SubStr(sBudg_Yymm, 4, 2);
        		var sBudg_Quar = "";	//분기
        		var sQuar_Mon1 = "";	//분기 시작월
        		var sQuar_Mon2 = "";	//분기 종료월
        		
        		if (sBudg_Mont == "01" || sBudg_Mont == "02" || sBudg_Mont == "03") {
        			sBudg_Quar = "1";
        			sQuar_Mon1 = "01";
        			sQuar_Mon2 = "03";
        		} else if (sBudg_Mont == "04" || sBudg_Mont == "05" || sBudg_Mont == "06") {
        			sBudg_Quar = "2";
        			sQuar_Mon1 = "04";
        			sQuar_Mon2 = "06";
        		} else if (sBudg_Mont == "07" || sBudg_Mont == "08" || sBudg_Mont == "09") {
        			sBudg_Quar = "3";
        			sQuar_Mon1 = "07";
        			sQuar_Mon2 = "09";
        		} else {
        			sBudg_Quar = "4";
        			sQuar_Mon1 = "10";
        			sQuar_Mon2 = "12";
        		}
        		
                // 인쇄
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.cmbSHRACCT_UNIT.value); // 회계단위
                sReturnString += " BUDG_YYMM="  + this.fnc_Quote(sBudg_Yymm); //예산연월
                sReturnString += " BUDG_YEAR="  + this.fnc_Quote(this.fnc_SubStr(sBudg_Yymm, 0, 4)); //예산연도
                sReturnString += " CSTC_CODE="  + this.fnc_Quote(this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "CSTC_CODE")); //코스트센터
                sReturnString += " BDSB_CODE="  + this.fnc_Quote(this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "BDSB_CODE")); //예산과목
                sReturnString += " BUDG_QUAR="  + this.fnc_Quote(sBudg_Quar); //예산분기
                sReturnString += " QUAR_MON1="  + this.fnc_Quote(sQuar_Mon1); //예산분기 시작월
                sReturnString += " QUAR_MON2="  + this.fnc_Quote(sQuar_Mon2); //예산분기 종료월
                
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

        	if (sMethodName == "SEARCH00") 	{

        		this.fnc_Information(this.stInformation, this.dsTB_CPLADD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTB_CPLADD.rowcount);
        		
        		var iRow = this.dsTB_CPLADD.findRowExpr("ACCT_UNIT=='" + this.aKeyValue[0] + "' && BUDG_YYMM=='" + this.aKeyValue[1] + "'"
        										  + " && CSTC_CODE=='" + this.aKeyValue[2] + "' && BDSB_CODE=='" + this.aKeyValue[3] + "'");
         		if (iRow < 0) iRow = 0;
         		
         		this.grdTB_CPLADD.selectRow(iRow);
         		this.dsTB_CPLADD.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";
        		this.aKeyValue[1] = "";
        		this.aKeyValue[2] = "";
        		this.aKeyValue[3] = "";

        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE"); 
        		this.fnc_Message("TMM103"); 
        		this.fn_Search();

        	// 전자결재 연동자료 저장
            } else if (sMethodName == "SAVE99") {
            	
        		this.dsTB_CPLADD.setColumn(this.dsTB_CPLADD.rowposition, "APPR_SEQN", this.sAPPR_SEQN);
        		this.dsTB_CPLADD.applyChange();
        		
        		this.sAPPR_GUBN = "createDoc";
        		this.fn_GwApprProcess(this.sAPPR_GUBN);
        		
        	// 전자결재 GW 전송
            } else if (sMethodName == "sendApproval") {
        	
        		if (this.sAPPR_GUBN == "createDoc") {		
        			this.fnc_ShowApproval(this.sAPPR_GUBN, this.dsTM_APPROVAL.getColumn(0, "documentID"), this.dsTM_APPROVAL.getColumn(0, "documentType"));
        		}
        			
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHRPAQD_CODE,dsSHRPAQD_CODE,0";
        			arrParam[2] = "GRID,grdTB_CPLADD,dsAPPR_STAT,APPR_STAT";
        			arrParam[3] = "COMBO,cmbSHRAPPR_STAT,dsSHRAPPR_STAT,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} 

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRCSTC_NAME") || (obj.name == "edtSHRCSTC_NAME")) {

        		if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "예산연도", this.calSHRBUDG_YEAR);
        		}
        		
        		arrParam[0] = "BDM0006";
        		arrParam[1] = this.calSHRBUDG_YEAR.value + ",4,4,4";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCSTC_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRCSTC_NAME";
        		arrParam[5] = "edtSHRCSTC_CODE,edtSHRCSTC_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHREMPL_NAME") || (obj.name == "edtSHREMPL_NAME")) {
        	
        		arrParam[0] = "BDM0005";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

                arrParam[0] = "FAM0001";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRDEPT_NAME";                         
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";         
                arrParam[6] = "0,1";                                     
        		
        	} else if ((obj.name == "imgHelpSHRBDSB_NAME") || (obj.name == "edtSHRBDSB_NAME")) {

        		arrParam[0] = "BDM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRBDSB_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRBDSB_NAME";
        		arrParam[5] = "edtSHRBDSB_CODE,edtSHRBDSB_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if (obj.name == "grdTB_CPLADD") {
        	
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "CSTC_NAME" || sColumnID == "CSTC_NAME") {
        		
        			if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) {
        				return this.fnc_SearchCheckPostAction("TMM072", "예산연도", this.calSHRBUDG_YEAR);
        			}

        			arrParam[0] = "BDM0006";
        			arrParam[1] = this.calSHRBUDG_YEAR.value + ",4,4,4";
        			arrParam[2] = "CSTC_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTB_CPLADD";
        			arrParam[5] = "CSTC_CODE,CSTC_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		} else if (this.fnc_getGridHelpColName(obj, sFromDs) == "BDSB_NAME" || sColumnID == "BDSB_NAME") {

        			arrParam[0] = "BDM0001";
        			arrParam[1] = "1";
        			arrParam[2] = "BDSB_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTB_CPLADD";
        			arrParam[5] = "BDSB_CODE,BDSB_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        		
        		} else if (this.fnc_getGridHelpColName(obj, sFromDs) == "BUDG_YYMM" || sColumnID == "BUDG_YYMM") {
        			
        			this.fnc_GridMonthCalendar(this, obj, sFromDs, "BUDG_YYMM");
        			return;
        		
        		}
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회조건 변경시 처리  |
         +---------------------------*/
        this.fn_clearData = function (obj) {

        // 	this.fnc_DatasetClear("dsTB_CPLADD");
        // 	this.stInformation.set_text("");
        	
        }

        /*--------------------------+
         |  컬럼값 변경시 처리  |
         +---------------------------*/
        this.fn_ColumnChanged = function (obj,e) {
        	
        	if (e.columnid == "CSTC_NAME" || e.columnid == "BDSB_NAME") {
        	
        		this.fn_HelpDialoge(this.grdTB_CPLADD, "YES", e.oldvalue, e.columnid);
        	
        	}
        	
        }

        /*--------------------------------------+
         |  결재상신, 결재취소, 문서보기 버튼 클릭 시
         +---------------------------------------*/
        this.grdTB_CPLADD_oncellclick = function(obj,e) {
        	
        	if (this.fnc_getColId(obj, obj.currentcell) != "APPR_PROC") return;
        	if (this.dsTB_CPLADD.getRowType(this.dsTB_CPLADD.rowposition) != Dataset.ROWTYPE_NORMAL) {
        		return this.fnc_Message("TMM015", "처리");
        	}
        	
        	var sAppr_Stat 	= this.dsTB_CPLADD.getColumn(e.row, "APPR_STAT");
        	
        	if (sAppr_Stat == "N") {		//결재상신 가능
        		
        		if (!this.fnc_Message("TMM061", "전자결재 상신")) return false;
        		
        		this.sAPPR_GUBN = "createDoc";

        		this.dsTB_CPLADD.set_updatecontrol(false);
        		this.dsTB_CPLADD.set_enableevent(false);
        		this.dsTB_CPLADD.setColumn(this.dsTB_CPLADD.rowposition, "DOCU_IDXX", this.sDOCU_IDXX);
        		this.dsTB_CPLADD.setRowType(this.dsTB_CPLADD.rowposition, Dataset.ROWTYPE_UPDATE);
        		this.dsTB_CPLADD.set_enableevent(true);
        		this.dsTB_CPLADD.set_updatecontrol(true);

        		//전자결재 연동자료 저장
        		var sMethodName = "SAVE99";
        		var sInDataSet  = "dsTB_CPLADD=dsTB_CPLADD:U";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        	} else if (sAppr_Stat == "T") {	//결재취소 가능
        		
        		if (!this.fnc_Message("TMM061", "전자결재 상신취소")) return false;
        		
        		this.sAPPR_GUBN = "deleteDoc";
        		this.fn_GwApprProcess(this.sAPPR_GUBN);
        		
        	} else {						//문서보기 가능
        		
        		this.sAPPR_GUBN = "show";
        		var bPerm = (this.sUSERLAVEL == "5") ? false : true;
        		this.fnc_ShowApproval(this.sAPPR_GUBN, this.sDOCU_IDXX + "-" + this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "APPR_SEQN"), "", bPerm);
        		
        	}
        	
        }

        /*--------------------------------------+
         |  전자결재상신/취소
         +---------------------------------------*/
        this.fn_GwApprProcess = function(sApprGubn) {
         
        	if (!this.fn_GwApprCheck(sApprGubn)) return;
            
        	this.aKeyValue[0] = this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "ACCT_UNIT");
        	this.aKeyValue[1] = this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "BUDG_YYMM");
        	this.aKeyValue[2] = this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "CSTC_CODE");
        	this.aKeyValue[3] = this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "BDSB_CODE");

        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*---------------------------+
         |  전자결재상신/취소 체크!  |
         +---------------------------*/
        this.fn_GwApprCheck = function (sApprGubn) {

            if (this.dsTB_CPLADD.rowcount < 1) return this.fnc_Message("TMM011");
            if (this.dsTB_CPLADD.rowposition < 0) return false;
            
        	if (this.fnc_DatasetChangeCheck("dsTB_CPLADD")) {
        		return this.fnc_Message("TMM015", "결재상신");
        	}
        	
        	var sAppr_Seqn 	= this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "APPR_SEQN");
            var sSubject 	= "[" + this.fnc_GetMaskFormat(this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "REQU_DATE"), "@@@@-@@-@@") 
        					+ " " + this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "CSTC_NAME")
        					+ "] 추가경비 사용 신청서";
        	
        	var sApprDocId	= this.sDOCU_IDXX + "-" + sAppr_Seqn; //DOCU_IDXX - APPR_SEQN
        	
        	if (this.fnc_Length(this.fnc_Trim(sAppr_Seqn)) < 1) {
        		return this.fnc_Message("TMM300", "전자결재문서번호가 없습니다.");
        	}
        	
        	var sXmlStr = this.fn_MakeHtml();	//전자결재용 HTML 생성
        	
        	this.fnc_DatasetClear("dsTM_APPROVAL");
        	
        	var iRow = this.dsTM_APPROVAL.addRow();
        	this.dsTM_APPROVAL.setColumn(iRow, "documentID", sApprDocId);				//문서번호
        	this.dsTM_APPROVAL.setColumn(iRow, "documentType", this.sDOCU_IDXX);		//문서종류(결재문서 ID)
        	this.dsTM_APPROVAL.setColumn(iRow, "HtmlDocument", sXmlStr);				//결재문서에 그릴 HTML
        	this.dsTM_APPROVAL.setColumn(iRow, "subject", sSubject);					//결재문서 제목
        	this.dsTM_APPROVAL.setColumn(iRow, "recipient", application.GBL_EMPLNO);	//기안자사번
        	this.dsTM_APPROVAL.setColumn(iRow, "creator", application.GBL_USERNM);		//기안자성명
        	this.dsTM_APPROVAL.setColumn(iRow, "documentStatus", sApprGubn);			//결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc
        	this.dsTM_APPROVAL.setColumn(iRow, "isUsedFile", "F");						//첨부파일여부
        	
        	return true;
        	
        }

        /*--------------------------------------+
         |  전자결재용 HTML 생성
         +---------------------------------------*/
        this.fn_MakeHtml = function () {
        		
            this.fnc_DatasetClear("dsTB_CPLADD_PRINT");
            var sMethodName = "PRINT00";
            var sInDataSet  = "";
            var sOutDataSet = "dsTB_CPLADD_PRINT=dsTB_CPLADD_PRINT";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        	var t_head		= " border-top: 2px solid; border-left: 2px solid; border-bottom: 2px solid; background-color:#cccccc; font-weight:bold;";
        	var t_head1		= " border-top: 2px solid; border-left: 1px solid; border-bottom: 1px solid; background-color:#cccccc; font-weight:bold;";
        	var t_head2		= " border-top: 2px solid; border-left: 1px solid; border-bottom: 2px solid; border-right: 2px solid; background-color:#cccccc; font-weight:bold;";
        	var t_head3		= " border-left: 1px solid; border-bottom: 2px solid; background-color:#cccccc; font-weight:bold;";
        	
        	var t_b			= " font-weight:bold;";
        	
        	var t_line_lb2r2 = " border-left: 1px solid; border-bottom: 2px solid; border-right: 2px solid;";
        	var t_line_l2b	= " border-left: 2px solid; border-bottom: 1px solid;";
        	var t_line_lb	= " border-left: 1px solid; border-bottom: 1px solid;";
        	var t_line_lr2b	= " border-left: 1px solid; border-bottom: 1px solid; border-right: 2px solid;";
        	var t_line_l2b2	= " border-left: 2px solid; border-bottom: 2px solid;";
        	
        	var t_ta_ct		= " text-align:center;";
        	var t_ta_rt		= " text-align:right;";
        	var t_pd_a3		= " padding:3px;";
        	
        	var sXmlStr = "";
        	
        	sXmlStr  = "\n";
        	sXmlStr += "<style>td {font-size:13px; height:30px;}\n";
        	sXmlStr += "</style>\n";
        	
        	sXmlStr += "<table width='670px' border='0' cellspacing='0' cellpadding='0'>\n";
        	sXmlStr += "  <col width='70px'>\n";
        	sXmlStr += "  <col width='265px'>\n";
        	sXmlStr += "  <col width='260px'>\n";
        	sXmlStr += "  <col width='85px'>\n";
        	
        	sXmlStr += "  <tr>\n";
        	sXmlStr += "    <td style='" + t_b + t_pd_a3 + "'>신청부서</td>\n";
        	sXmlStr += "    <td style='" + t_pd_a3 + "'>" + this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "CSTC_NAME") + "</td>\n";
        	sXmlStr += "    <td style='" + t_b + t_pd_a3 + t_ta_rt + "'>신청일자</td>\n";
        	sXmlStr += "    <td style='" + t_pd_a3 + t_ta_rt + "'>" + this.fnc_GetMaskFormat(this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "REQU_DATE"), "@@@@-@@-@@"); + "</td>\n";
        	sXmlStr += "  </tr>\n"
        	sXmlStr += "</table>\n";
        	
        	sXmlStr += "<table width='670px' border='0' cellspacing='0' cellpadding='0'>\n";
        	sXmlStr += "  <col width='120px'>\n";
        	sXmlStr += "  <col width='110px'>\n";
        	sXmlStr += "  <col width='110px'>\n";
        	sXmlStr += "  <col width='110px'>\n";
        	sXmlStr += "  <col width='110px'>\n";
        	sXmlStr += "  <col width='110px'>\n";

        	sXmlStr += "  <tr>\n";
        	sXmlStr += "    <td rowspan='2' style='" + t_head + t_pd_a3 + t_ta_ct + "'>구분</td>\n";
        	sXmlStr += "    <td colspan='4' style='" + t_head1 + t_pd_a3 + t_ta_ct + "'>분 &nbsp; 기 &nbsp; 예 &nbsp; 산</td>\n";
        	sXmlStr += "    <td rowspan='2' style='" + t_head2 + t_pd_a3 + t_ta_ct + "'>경비사용실적</td>\n";
        	sXmlStr += "  </tr>\n";
        	
        	sXmlStr += "  <tr>\n";
        	sXmlStr += "    <td style='" + t_head3 + t_pd_a3 + t_ta_ct + "'>기본경비</td>\n";
        	sXmlStr += "    <td style='" + t_head3 + t_pd_a3 + t_ta_ct + "'>기사용추가경비</td>\n";
        	sXmlStr += "    <td style='" + t_head3 + t_pd_a3 + t_ta_ct + "'>추가경비신청</td>\n";
        	sXmlStr += "    <td style='" + t_head3 + t_pd_a3 + t_ta_ct + "'>계</td>\n";
        	sXmlStr += "  </tr>\n";
        	
        	for (var i = 0; i < this.dsTB_CPLADD_PRINT.rowcount; i++) {
        		
        		sXmlStr += "  <tr>\n";
        		sXmlStr += "    <td style='" + t_line_l2b + t_pd_a3 + t_ta_ct + "'>" + this.dsTB_CPLADD_PRINT.getColumn(i, "BDSB_NAME") + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + t_ta_rt + "'>" + this.fnc_AddComma(this.dsTB_CPLADD_PRINT.getColumn(i, "BUDG_ATAL")) + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + t_ta_rt + "'>" + this.fnc_AddComma(this.dsTB_CPLADD_PRINT.getColumn(i, "BADD_ATAL")) + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + t_ta_rt + "'>" + this.fnc_AddComma(this.dsTB_CPLADD_PRINT.getColumn(i, "BADD_REQU")) + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + t_ta_rt + "'>" + this.fnc_AddComma(this.dsTB_CPLADD_PRINT.getColumn(i, "BTOT_ATAL")) + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_lr2b + t_pd_a3 + t_ta_rt + "'>" + this.fnc_AddComma(this.dsTB_CPLADD_PRINT.getColumn(i, "SLIP_ATAL")) + "</td>\n";
        		sXmlStr += "  </tr>\n";
        		
        	}
        	
        	sXmlStr += "  <tr>\n";
        	sXmlStr += "    <td style='" + t_line_l2b + t_pd_a3 + t_ta_ct + "'>" + "계" + "</td>\n";
        	sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + t_ta_rt + "'>" + this.fnc_AddComma(this.dsTB_CPLADD_PRINT.getSum("BUDG_ATAL")) + "</td>\n";
        	sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + t_ta_rt + "'>" + this.fnc_AddComma(this.dsTB_CPLADD_PRINT.getSum("BADD_ATAL")) + "</td>\n";
        	sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + t_ta_rt + "'>" + this.fnc_AddComma(this.dsTB_CPLADD_PRINT.getSum("BADD_REQU")) + "</td>\n";
        	sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + t_ta_rt + "'>" + this.fnc_AddComma(this.dsTB_CPLADD_PRINT.getSum("BTOT_ATAL")) + "</td>\n";
        	sXmlStr += "	<td style='" + t_line_lr2b + t_pd_a3 + t_ta_rt + "'>" + this.fnc_AddComma(this.dsTB_CPLADD_PRINT.getSum("SLIP_ATAL")) + "</td>\n";
        	sXmlStr += "  </tr>\n";
        	
        	var sRequ_Remk = this.dsTB_CPLADD.getColumn(this.dsTB_CPLADD.rowposition, "REQU_REMK");

        	sXmlStr += "  <tr style='height:100px;'>\n";
        	sXmlStr += "    <td style='" + t_line_l2b2 + t_pd_a3 + t_ta_ct + t_b + "'>" + "신청사유" + "</td>\n";
        	sXmlStr += "    <td colspan='5' style='" + t_line_lb2r2 + t_pd_a3 + "'>" + this.fnc_Replace(sRequ_Remk, "\n", "<br>") + "\n";
        	sXmlStr += "  <tr>\n";
        	sXmlStr += "</table>";
        //trace(sXmlStr);
        	return sXmlStr;
        	
        }

        this.fn_GetNbsp = function (sVal) {

        	if (this.IsNull(sVal)) sVal = "&nbsp;";
        	return sVal;
        	
        }

        
        this.stInformation00_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTB_CPLADD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTB_CPLADD.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.dsTB_CPLADD_PRINT.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTB_CPLADD_PRINT.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsTM_APPRXH.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdTB_CPLADD.addEventHandler("oncellclick", this.grdTB_CPLADD_oncellclick, this);
            this.grdTB_CPLADD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.calSHRBUDG_YEAR.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.cmbSHRPAQD_CODE.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRPAQD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCSTC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCSTC_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCSTC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCSTC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBUDG_YMFR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBUDG_YMTO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBDSB_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRBDSB_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRBDSB_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRBDSB_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPPR_STAT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRAPPR_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("BDMB0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
