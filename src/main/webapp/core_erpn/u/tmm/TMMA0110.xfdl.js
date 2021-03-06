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
                this.set_name("TMMA0110");
                this.set_titletext("자료조회관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_VIMNXM", this);
            obj._setContents("<ColumnInfo><Column id=\"VIEW_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEBU_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"FXCL_INDX\" type=\"STRING\" size=\"256\"/><Column id=\"AGGR_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"CBCL_INDX\" type=\"STRING\" size=\"256\"/><Column id=\"SUTR_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"OWNN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_VICDXL", this);
            obj._setContents("<ColumnInfo><Column id=\"VIEW_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRAL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SECH_COND\" type=\"STRING\" size=\"256\"/><Column id=\"SECN_CLID\" type=\"STRING\" size=\"256\"/><Column id=\"CDIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"POPP_XDAX\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INIT_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"CDRI_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"CDIS_HELP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_VILVXL", this);
            obj._setContents("<ColumnInfo><Column id=\"GRUP_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"GRUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_SEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"DSNAME\">dsUSEX_YSNO</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">CDIT_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"DSNAME\">dsCDIT_CODE</Col><Col id=\"USEYN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHEADER", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsQUERY", this);
            obj._setContents("<ColumnInfo><Column id=\"QUERY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", "296", "128", null, "162", "25", null, this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_VICDXL", "absolute", "296", null, null, "136", "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_VICDXL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"조건명\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"조건컬럼\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"입력헝태\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"팝업/콤보XDA\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_edit\" text=\"코드ID\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"코드명\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"초기값\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_edit\" text=\"필수입력\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_edit\" text=\"입력도움말\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:SECH_COND\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:SECN_CLID\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CDIT_CODE\"/><Cell col=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:POPP_XDAX\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:CODE_IDXX\"/><Cell col=\"5\" edittype=\"text\" style=\"align:left;\" text=\"bind:CODE_NAME\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:INIT_DATA\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CDRI_YSNO\"/><Cell col=\"8\" edittype=\"text\" style=\"align:left;\" text=\"bind:CDIS_HELP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_VIMNXM", "absolute", "8", "132", "280", null, null, "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_VIMNXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"190\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"양식코드\"/><Cell col=\"1\" text=\"양식명\"/></Band><Band id=\"body\"><Cell text=\"bind:VIEW_CODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:VIEW_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "111", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("22");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx0", "absolute", "316", "137", "94", "21", null, null, this);
            obj.set_text("양식코드");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx1", "absolute", "316", "189", "94", "21", null, null, this);
            obj.set_text("소계컬럼");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSYST_CODE", "absolute", "958", "137", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            obj.set_type("dropdown");
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Static("Static7", "absolute", "316", "163", "94", "21", null, null, this);
            obj.set_text("업무내용");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "71", "573", "27", null, null, this);
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRowSub", "absolute", null, null, "62", "21", "90", "155", this);
            obj.set_taborder("17");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRowSub", "absolute", null, null, "62", "21", "25", "155", this);
            obj.set_taborder("18");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx02", "absolute", "316", "215", "94", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("집계여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx12", "absolute", "619", "137", "65", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("양식명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx13", "absolute", "890", "137", "64", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("시스템");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "890", "163", "64", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("사용여부");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "890", "189", "64", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("고정컬럼");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "619", "215", "65", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("소유자명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx09", "absolute", "417", "266", null, "21", "285", null, this);
            obj.set_taborder("33");
            obj.set_text("CENTER : ^, LEFT : <, RIGHT : >, 숫자 : N, 날짜 : D, 년월 : M, 주민등록번호 : S");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx14", "absolute", null, "300", "52", "21", "635", null, this);
            obj.set_taborder("35");
            obj.set_text("Table");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbUSEX_YSNO", "absolute", "958", "163", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            obj.set_index("-1");

            obj = new Combo("cmbAGGR_YSNO", "absolute", "416", "215", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");

            obj = new Static("Static03", "absolute", "619", "189", "65", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("머지컬럼");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVIEW_CODE", "absolute", "416", "137", "150", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemText");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSEBU_CNTT", "absolute", "416", "163", "421", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVIEW_NAME", "absolute", "687", "137", "150", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOWNN_NAME", "absolute", "687", "215", "150", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHEAD_CNTT", "absolute", "416", "241", null, "21", "79", null, this);
            obj.set_taborder("13");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTABLE_NAME", "absolute", null, "300", "100", "21", "534", null, this);
            obj.set_taborder("36");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpTABLE_NAME", "absolute", null, "300", "22", "21", "510", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTABLE_COMMENT", "absolute", null, "300", "140", "21", "369", null, this);
            obj.set_taborder("14");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddFile", "absolute", null, "300", "74", "21", "270", null, this);
            obj.set_taborder("37");
            obj.set_text("쿼리생성");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST02", "absolute", "296", "304", "97", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("Query");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_VILVXL", "absolute", null, "325", "225", null, "25", "186", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTM_VILVXL");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"30\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"권한그룹명\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_edit\" text=\"선택\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:GRUP_NAME\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK_SEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtSRCH_CNTT", "absolute", "296", "325", null, null, "270", "186", this);
            obj.set_taborder("15");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_NOTICE");
            obj.style.set_font("9 굴림체,Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "47", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("시스템");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRVIEW_NAME", "absolute", "350", "71", "200", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "83", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Image0", "absolute", "262", "71", "82", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("양식코드/명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("42");
            obj.set_text("자료조회관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("43");
            obj.set_text("홈 > 공통관리 > 공통관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("44");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("49");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("50");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "233", "61", "40", "41", null, null, this);
            obj.set_taborder("51");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("53");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("54");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("55");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "573", "531", "80", "35", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "297", "130", "30", "105", null, null, this);
            obj.set_taborder("57");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx03", "absolute", "316", "241", "94", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("GRID항목정의");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1015", "290", "80", "35", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "917", "334", "20", "41", null, null, this);
            obj.set_taborder("60");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "296", null, "97", "21", null, "151", this);
            obj.set_taborder("61");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST00", "absolute", null, "304", "97", "21", "153", null, this);
            obj.set_taborder("62");
            obj.set_text("권한그룹");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "299", "7", "21", "350", null, this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "831", "285", "12", "23", null, null, this);
            obj.set_taborder("64");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "818", "285", "12", "23", null, null, this);
            obj.set_taborder("65");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskFXCL_INDX", "absolute", "958", "189", "150", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_readonly("false");
            obj.set_mask("##");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCBCL_INDX", "absolute", "687", "189", "150", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_mask("##");
            obj.set_limitbymask("integer");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSUTR_IDXX", "absolute", "416", "189", "150", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_imemode("alpha");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자료조회관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtOWNE_NAME_value","edtVIEW_CODE","value","dsTM_VIMNXM","VIEW_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbATHR_LEVL_value","cmbSYST_CODE","value","dsTM_VIMNXM","SYST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cmbUSEX_YSNO","value","dsTM_VIMNXM","USEX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cmbAGGR_YSNO","value","dsTM_VIMNXM","AGGR_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtSEBU_CNTT","value","dsTM_VIMNXM","SEBU_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtVIEW_NAME","value","dsTM_VIMNXM","VIEW_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtOWNN_NAME","value","dsTM_VIMNXM","OWNN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtHEAD_CNTT","value","dsTM_VIMNXM","HEAD_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtREMK_100X_value","txtSRCH_CNTT","value","dsTM_VIMNXM","SRCH_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","mskFXCL_INDX","value","dsTM_VIMNXM","FXCL_INDX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","mskCBCL_INDX","value","dsTM_VIMNXM","CBCL_INDX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtSUTR_IDXX","value","dsTM_VIMNXM","SUTR_IDXX");
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
        this.addIncludeScript("TMMA0110.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0110.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0110 자료조회 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.26		김준수		주석 수정.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMA0110"; //해당 Form에서 사용 할 Package 명

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

        	if (!this.fn_searchItemCheck()) return;
        	this.fnc_DatasetClear('dsTM_VIMNXM,dsTM_VILVXL,dsTM_VICDXL');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_VIMNXM=dsTM_VIMNXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_VIMNXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	//변경된 내역이 있는지 확인하고(권한디테일, 특히 조회조건 디테일)
        	//1main 2detail 관계
        	//신규 데이터가 또 있는지 확인해야 되는데. (조회조건 디테일이 날아가기 때문에)
        	//입력버튼은 저장 할 때까지 1번만 누를수 있게 하고
        	 
        	 var IsInsert = false;
        	 for(i=0;i<this.dsTM_VIMNXM.getRowCount();i++){
        		if(this.dsTM_VIMNXM.getRowType(i)==Dataset.ROWTYPE_INSERT){
        			IsInsert = true;
        			break;
        		}
        	 }
        	 	 
        	 if (this.fnc_DatasetChangeCheck("dsTM_VIMNXM,dsTM_VICDXL,dsTM_VILVXL")||IsInsert) {
        		//변경된 내역이 있을 때 진행 할 것인지.
        		if(this.fnc_Message("TMM006")){
        			this.fnc_DataSetCancel("dsTM_VIMNXM,dsTM_VICDXL,dsTM_VILVXL");
        		}else{
        			return;
        		}
        	}

        	var iRow = this.dsTM_VIMNXM.addRow();
        	this.dsTM_VIMNXM.setColumn(iRow, "USEX_YSNO", "1");
        	this.dsTM_VIMNXM.setColumn(iRow, "AGGR_YSNO", "0");
        	this.edtVIEW_CODE.setFocus();

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsTM_VIMNXM.deleteRow(this.dsTM_VIMNXM.rowposition);
        	}

        	this.grdTM_VIMNXM.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_VIMNXM,dsTM_VILVXL,dsTM_VICDXL");
        	this.grdTM_VIMNXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_VIMNXM=dsTM_VIMNXM:U dsTM_VILVXL=dsTM_VILVXL:U dsTM_VICDXL=dsTM_VICDXL:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

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
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_VIMNXM,dsTM_VILVXL,dsTM_VICDXL", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
        	
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
        /*------------------+
         |  조회 필수 체크!  |
         +-------------------*/
        this.fn_searchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck('dsTM_VIMNXM,dsTM_VICDXL,dsTM_VILVXL')) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_VIMNXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = '양식(' + this.fnc_Trim(this.dsTM_VIMNXM.getColumn(this.dsTM_VIMNXM.rowposition, "VIEW_NAME")) + ')';
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (dsobj) {

        	// 자료양식 및 조회조건, 권한 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsTM_VIMNXM,dsTM_VILVXL,dsTM_VICDXL") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	/* 저장필수 체크 컬럼
        		TM_VIMNXM 자료조회양식
        			VIEW_CODE 양식코드
        			VIEW_NAME 양식명
        			SYST_CODE 시스템코드
        			HEAD_CNTT 헤더내용
        			SRCH_CNTT 검색내용	 
        			
        		TM_VICDXL 자료조회조건
        			SECH_COND 조회조건명
        			SECN_CLID 조회조건컬럼ID
        			CDIT_CODE 조건입력형태코드
        			
        			(* 조건입력형태가 공통코드를 사용하는 것만)POPP_XDAX 팝업XDA
        	
        		TM_VICDXL의 로우에서
        		공통코드 CDIT_CODE 의 보조필드 1이 체크된 값을 선택하면 POPP_XDAX 이 필수이다.
        	*/

        	// 자료조회양식 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_VIMNXM.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTM_VIMNXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_VIMNXM.getColumn(i, "VIEW_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "양식코드", this.dsTM_VIMNXM, i, this.edtVIEW_CODE, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_VIMNXM.getColumn(i, "VIEW_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "양식명", this.dsTM_VIMNXM, i, this.edtVIEW_NAME, "");
        		}
        				
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_VIMNXM.getColumn(i, "SYST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시스템코드", this.dsTM_VIMNXM, i, this.cmbSYST_CODE, "");
        		}
        				
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_VIMNXM.getColumn(i, "HEAD_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "헤더내용", this.dsTM_VIMNXM, i, this.edtHEAD_CNTT, "");
        		}
        				
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_VIMNXM.getColumn(i, "SRCH_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "검색내용", this.dsTM_VIMNXM, i, this.edtSRCH_CNTT, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_VIMNXM.getColumn(i, "OWNN_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "소유자명", this.dsTM_VIMNXM, i, this.edtOWNN_NAME, "");
        		}
        		
        	}

        	// 자료조회조건 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_VICDXL.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTM_VICDXL.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_VICDXL.getColumn(i, "SECH_COND"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조회조건명", this.dsTM_VICDXL, i, this.grdTM_VICDXL, "SECH_COND");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_VICDXL.getColumn(i, "SECN_CLID"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조회조건컬럼ID", this.dsTM_VICDXL, i, this.grdTM_VICDXL, "SECN_CLID");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_VICDXL.getColumn(i, "CDIT_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조건입력형태코드", this.dsTM_VICDXL, i, this.grdTM_VICDXL, "CDIT_CODE");
        		}		
        		
        		if (	(this.dsCDIT_CODE.lookup("COMD_CODE",this.dsTM_VICDXL.getColumn(i, "CDIT_CODE"), "REF1_FILD") == "1") 
        			 && (this.dsTM_VICDXL.getColumn(i, "POPP_XDAX") == "COMB")) {
        			 
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_VICDXL.getColumn(i, "COMB_IDXX"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "팝업/콤보ID", this.dsTM_VICDXL, i, this.grdTM_VICDXL, "COMB_IDXX");
        			}
        		}
        	}

        	return true;
        }

        /*--------------------------------+
         |  자료조회조건 삭제 여부 체크!  |
         +--------------------------------*/
        this.fn_DeleteCheckSub = function () {

        	var sQuestionText = "조건명"
        						+ this.fnc_Trim(this.dsTM_VICDXL.getColumn(this.dsTM_VICDXL.rowposition, "SECH_COND"))
        						+" (" + this.fnc_Trim(this.dsTM_VICDXL.getColumn(this.dsTM_VICDXL.rowposition, "SECN_CLID")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	//메인
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SYST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSYST_CODE.value)); //시스템 코드
        		sReturnString += " VIEW_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRVIEW_NAME.value)); //양식코드

        	//디테일
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " VIEW_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dsTM_VIMNXM.getColumn(this.dsTM_VIMNXM.rowposition, "VIEW_CODE"))); //양식코드
        		
        	//쿼리생성
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TABLE_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtTABLE_NAME.value)); //테이블명
        		
        	// 공통코드 및 세부코드 저장
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
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
        	
        		this.fnc_Information(this.stInformation1, this.dsTM_VIMNXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	} else if (sMethodName == "SEARCH01") {
        	
        	
        	//쿼리생성버튼 클릭
        	} else if (sMethodName == "SEARCH02") {
        	
        		//HEADER 스타일정보 Display
        		var strHeader = "";
        		
        		for (var i = 0; i < this.dsHEADER.getRowCount(); i++) {
        			strHeader += this.dsHEADER.getColumn( i, "TITLE");			
        		}
        		
        		this.edtHEAD_CNTT.set_value(strHeader);
        	
        		//QUERY Display
        		var strQuery = "";
        		
        		for (var i = 0; i < this.dsQUERY.getRowCount(); i++) {
        			strQuery += this.dsQUERY.getColumn( i, "QUERY")+ "\n";			
        		}
        		
        		this.txtSRCH_CNTT.set_value(strQuery);	
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Message("TMM103");
        		this.fn_KeyFieldDisible_Head(this.dsTM_VIMNXM);
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdTM_VICDXL,dsCDIT_CODE,CDIT_CODE";
        		arrParam[1] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";	//combo 아니면 grid 둘중 하나
        		arrParam[2] = "COMBO,cmbSYST_CODE,dsSYST_CODE,0";	//combo 아니면 grid 둘중 하나
        		arrParam[3] = "COMBO,cmbUSEX_YSNO,dsUSEX_YSNO,0";	//combo 아니면 grid 둘중 하나
        		arrParam[4] = "COMBO,cmbAGGR_YSNO,dsUSEX_YSNO,0";	//combo 아니면 grid 둘중 하나
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}
        }

        /*------------------------------------------+
         |  변경전 확인  |
         +------------------------------------------*/
        this.dsTM_VIMNXM_canrowposchange = function(obj,e)
        {
        	if (this.fnc_DatasetChangeCheck("dsTM_VICDXL,dsTM_VILVXL") == false) return;
        	
        	if (this.fnc_Message("TMM006") == false) {
        		return false;
        	} else {
        		this.fnc_DataSetCancel("dsTM_VICDXL,dsTM_VILVXL");
        	}
        }

        
        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head  |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {
        	
        	if (this.dsTM_VIMNXM.getRowCount() < 1)	return;

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_SetReadonly(this.edtVIEW_CODE, false);
        	} else {
        		this.fnc_SetReadonly(this.edtVIEW_CODE, true);
        	}
        	
        	//쿼리조회
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_VICDXL=dsTM_VICDXL dsTM_VILVXL=dsTM_VILVXL";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_VIMNXM.setFocus();		
        }

        /*------------------------------------------+
         | 마스터 신규 데이터 ViEW_CODE 변경시 디테일도 변경|
         신규 데이터는 VIEW_CODE가 변경될수 있기 때문에 변경시 권한,조건 디테일도 같이 변경해준다.
         +------------------------------------------*/
        this.dsTM_VIMNXM_oncolumnchanged = function(obj,e)
        {
        	var objds = "";
        	if(e.columnid=="VIEW_CODE"){
        		
        		//권한그룹 변경
        		objds = this.dsTM_VILVXL;
        		for(i=0;i<objds.getRowCount();i++){
        			objds.setColumn(i,"VIEW_CODE",e.newvalue);
        		}
        		
        		//조회조건 변경
        		objds = this.dsTM_VICDXL;
        		for(i=0;i<objds.getRowCount
        		();i++){
        			objds.setColumn(i,"VIEW_CODE",e.newvalue);
        		}
        	}
        }

        /*------------------------------------------+
         |디테일 조회조건  입력형태 CDIT_CODE 변경시 세부컬럼 리드온리 처리 |
         신규 데이터는 VIEW_CODE가 변경될수 있기 때문에 변경시 권한,조건 디테일도 같이 변경해준다.
         +------------------------------------------*/
        this.dsTM_VICDXL_oncolumnchanged = function(obj,e) {
        	var objds = "";
        	
        	var objgrd = this.grdTM_VICDXL;
        	e.columnid
        	if(e.columnid=="CDIT_CODE"){

        		//입력형태가 공통코드를 넣어야 하는 것이면 
        		if(this.dsCDIT_CODE.lookup("COMD_CODE",e.newvalue,"REF1_FILD") == '1'){
        			//리드온리만 푼다.

        

        			objgrd.setCellProperty("Body", this.fnc_GridColumnIndex(objgrd, "POPP_XDAX"), "edittype", "normal");
        			objgrd.setCellProperty("Body", this.fnc_GridColumnIndex(objgrd, "CODE_IDXX"), "edittype", "normal");
        			objgrd.setCellProperty("Body", this.fnc_GridColumnIndex(objgrd, "CODE_NAME"), "edittype", "normal");
        	
        		}else {
        			//공백처리후 리드온리
        			obj.setColumn(e.row,"POPP_XDAX","");
        			obj.setColumn(e.row,"CODE_IDXX","");
        			obj.setColumn(e.row,"CODE_NAME","");
        			objgrd.setCellProperty("Body", this.fnc_GridColumnIndex(objgrd, "POPP_XDAX"), "edittype", "none");
        			objgrd.setCellProperty("Body", this.fnc_GridColumnIndex(objgrd, "CODE_IDXX"), "edittype", "none");
        			objgrd.setCellProperty("Body", this.fnc_GridColumnIndex(objgrd, "CODE_NAME"), "edittype", "none");

        		}
        	}
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == 'imgHelpTABLE_NAME') || (obj.name == 'edtTABLE_COMMENT')) {

        		arrParam[0] = 'TMM0013';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtTABLE_COMMENT.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtTABLE_COMMENT';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtTABLE_NAME,edtTABLE_COMMENT';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index

        	// 조회조건 - 부서정보조회(Popup) 텝 박스 안
        	}
        				
        	this.fnc_HelpDialogeAction(this, obj, arrParam);
        }
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*---------------------+
         |  자료조회조건 추가  |
         +---------------------*/
        this.fn_AddRow = function (obj,e) {

        	if (this.fnc_Length(this.dsTM_VIMNXM.getColumn(this.dsTM_VIMNXM.rowposition, "VIEW_CODE")) > 0) {
        	
        		var iRow = this.dsTM_VICDXL.addRow();
        		this.dsTM_VICDXL.setColumn(iRow, "VIEW_CODE", this.dsTM_VIMNXM.getColumn(this.dsTM_VIMNXM.rowposition, "VIEW_CODE"));
        		
        		//시퀀스 VIEW_CODE 단위로 생성 
        		this.dsTM_VICDXL.setColumn(iRow, "SRAL_NUMB", this.fnc_GetSequence("TM_VICDXL","SRAL_NUMB",this.dsTM_VIMNXM.getColumn(this.dsTM_VIMNXM.rowposition, "VIEW_CODE"),""));
        		
        		this.fnc_GridSetCellFocus(this.grdTM_VICDXL, "SECH_COND");
        	
        	} else {
        		this.fnc_Message("TMM032");
        	}
        }

        /*---------------------+
         |  자료조회조건 삭제  |
         +---------------------*/
        this.fn_DeleteRow = function (obj,e) {

        	if (this.dsTM_VICDXL.getRowCount() > 0) {
        	
        		if (this.fn_DeleteCheckSub()) {
        			this.dsTM_VICDXL.deleteRow(this.dsTM_VICDXL.rowposition);
        		}
        	} else {
        		this.fnc_Message("TMM007");
        	}

        	this.grdTM_VICDXL.setFocus();
        }

        /*---------------------+
         |  쿼리생성  |
         +---------------------*/
        this.btnAddFile_onclick = function(obj,e)
        {
        	//메인테이블 로우가 있는 확인
        	if(this.dsTM_VIMNXM.getRowCount()<1){
        		this.fnc_Message("TMM125", "양식명이 없습니다. 입력버튼을 누르세요.");
        		return;
        	}
        	
        	//조건용 테이블네임이 있는 확인
        	if (this.fnc_Length(this.fnc_Trim(this.edtTABLE_NAME.value)) < 1) {
        		this.fnc_CheckPostAction("TMM072", "테이블명", this.dsTM_VIMNXM, this.dsTM_VIMNXM.rowposition, this.edtTABLE_COMMENT, "");
        		return;
        	}
        				
        	//쿼리가 이미 있으면 덮어 쓸지 확인
        	if (this.fnc_Length(this.fnc_Trim(this.txtSRCH_CNTT.value)) > 0) {
        	
        		if (this.fnc_Message("HRM006") == false) {
        			return ;
        		} 
        	}	
        	
        	//쿼리조회
        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHEADER=dsHEADER dsQUERY=dsQUERY";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_VIMNXM.setFocus();		
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_VIMNXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_Head, this);
            this.dsTM_VIMNXM.addEventHandler("canrowposchange", this.dsTM_VIMNXM_canrowposchange, this);
            this.dsTM_VIMNXM.addEventHandler("oncolumnchanged", this.dsTM_VIMNXM_oncolumnchanged, this);
            this.dsTM_VICDXL.addEventHandler("oncolumnchanged", this.dsTM_VICDXL_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnAddRowSub.addEventHandler("onclick", this.fn_AddRow, this);
            this.btnDelRowSub.addEventHandler("onclick", this.fn_DeleteRow, this);
            this.edtTABLE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpTABLE_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtTABLE_COMMENT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTABLE_COMMENT.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btnAddFile.addEventHandler("onclick", this.btnAddFile_onclick, this);
            this.txtSRCH_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRVIEW_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.mskFXCL_INDX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCBCL_INDX.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMA0110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
