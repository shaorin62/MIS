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
                this.set_name("EDMB0050");
                this.set_titletext("교육이수결과관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsED_EDRSLT", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"10\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"6\"/><Column id=\"EDRT_SEQN\" type=\"STRING\" size=\"5\"/><Column id=\"EDUC_BEDE\" type=\"STRING\" size=\"8\"/><Column id=\"EDUC_ENDD\" type=\"STRING\" size=\"8\"/><Column id=\"EDSB_NAME\" type=\"STRING\" size=\"200\"/><Column id=\"EDUC_INNM\" type=\"STRING\" size=\"50\"/><Column id=\"EDCY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"EDCD_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"EDUC_PROD\" type=\"STRING\" size=\"5\"/><Column id=\"EDUP_CODE\" type=\"STRING\" size=\"50\"/><Column id=\"EDUC_COST\" type=\"STRING\" size=\"15\"/><Column id=\"EDEV_CODE\" type=\"STRING\" size=\"50\"/><Column id=\"ACQS_CRDT\" type=\"STRING\" size=\"2\"/><Column id=\"EDEV_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"RFND_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"REMK_200X\" type=\"STRING\" size=\"200\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"30\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"EDC1_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDC2_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EDC3_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"OPOS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">EDCD_GUBN</Col><Col id=\"DSNAME\">dsEDCD_GUBN</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsEDUP_CODE</Col><Col id=\"CODEID\">EDUP_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsEDEV_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"CODEID\">EDEV_CODE</Col></Row><Row><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"DSNAME\">dsEDEV_YSNO</Col><Col id=\"CODEID\">EDEV_YSNO</Col></Row><Row><Col id=\"DSNAME\">dsRFND_YSNO</Col><Col id=\"CODEID\">RFND_YSNO</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsSHREDEV_YSNO</Col><Col id=\"CODEID\">EDEV_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHREDC1_CODE</Col><Col id=\"COMBOID\">EDM0105</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row><Row><Col id=\"DSNAME\">dsSHREDC2_CODE</Col><Col id=\"COMBOID\">EDM0106</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row><Row><Col id=\"DSNAME\">dsSHREDC3_CODE</Col><Col id=\"COMBOID\">EDM0107</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row><Row><Col id=\"DSNAME\">dsEDC1_CODE</Col><Col id=\"COMBOID\">EDM0105</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\"/></Row><Row><Col id=\"DSNAME\">dsEDC2_CODE</Col><Col id=\"COMBOID\">EDM0108</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\"/></Row><Row><Col id=\"DSNAME\">dsEDC3_CODE</Col><Col id=\"COMBOID\">EDM0109</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">1</Col><Col id=\"PARAM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHREDC1_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHREDC2_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHREDC3_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEDC2_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"EDC1_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEDC3_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"EDC1_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EDC2_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEDC1_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"COMB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsED_EDRSLT_TEMP", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"10\"/><Column id=\"EDUC_BEDE\" type=\"STRING\" size=\"8\"/><Column id=\"EDUC_ENDD\" type=\"STRING\" size=\"8\"/><Column id=\"EDSB_NAME\" type=\"STRING\" size=\"200\"/><Column id=\"EDUC_INNM\" type=\"STRING\" size=\"50\"/><Column id=\"EDCD_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"EDCY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EDUC_PROD\" type=\"STRING\" size=\"5\"/><Column id=\"EDUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EDUC_COST\" type=\"STRING\" size=\"15\"/><Column id=\"ACQS_CRDT\" type=\"STRING\" size=\"10\"/><Column id=\"EDEV_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EDEV_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"RFND_YSNO\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("68");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("62");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("63");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("64");
            obj.set_text("교육이수결과관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("65");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "134", "262", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "75", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("교육기간 ");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("69");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "95", "61", "8", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("71");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("72");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("73");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("74");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "694", "56", "128", "4", null, null, this);
            obj.set_taborder("75");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdED_EDRSLT", "absolute", "8", "154", null, null, "25", "173", this);
            obj.set_taborder("26");
            obj.set_binddataset("dsED_EDRSLT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("none");
            obj.set_cellmovingtype("none");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"81\"/><Column size=\"95\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"212\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"grd_essential\" text=\"사원번호\"/><Cell col=\"1\" cssclass=\"grd_essential\" text=\"성명\"/><Cell col=\"2\" cssclass=\"grd_essential\" text=\"부서\"/><Cell col=\"3\" cssclass=\"grd_essential\" text=\"직위\"/><Cell col=\"4\" cssclass=\"grd_essential\" text=\"일련번호\"/><Cell col=\"5\" cssclass=\"grd_essential\" text=\"교육시작일\"/><Cell col=\"6\" cssclass=\"grd_essential\" text=\"교육종료일\"/><Cell col=\"7\" cssclass=\"grd_essential\" text=\"교육명\"/><Cell col=\"8\" cssclass=\"grd_essential\" text=\"교육구분\"/><Cell col=\"9\" cssclass=\"grd_essential\" text=\"교육평가\"/><Cell col=\"10\" cssclass=\"grd_essential\" text=\"이수학점\"/><Cell col=\"11\" cssclass=\"grd_essential\" text=\"평가여부\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NAME\" editlimit=\"15\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" text=\"bind:OPOS_NAME\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:EDRT_SEQN\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" text=\"bind:EDUC_BEDE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:EDUC_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" edittype=\"none\" style=\"align:left;\" text=\"bind:EDSB_NAME\" editlimit=\"100\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"none\" text=\"bind:EDCD_CODE\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"none\" text=\"bind:EDEV_CODE\"/><Cell col=\"10\" edittype=\"none\" style=\"align:right;\" text=\"bind:ACQS_CRDT\" editlimit=\"2\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"none\" text=\"bind:EDEV_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHREDUC_BEDE", "absolute", "103", "71", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "205", "71", "14", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHREDUC_ENDD", "absolute", "220", "71", "99", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "385", "71", "80", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "467", "71", "21", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "490", "71", "100", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "325", "71", "52", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "873", "96", "77", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("평가여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "97", "90", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("대분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "325", "97", "70", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("중분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREDC2_CODE", "absolute", "385", "97", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_displayrowcount("-1");
            obj.style.set_buttonsize("20");
            obj.set_index("-1");

            obj = new Static("spSearchBox03", "absolute", "8", null, null, "143", "25", "15", this);
            obj.set_taborder("77");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "28", null, "80", "21", null, "128", this);
            obj.set_taborder("27");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "28", null, "80", "21", null, "102", this);
            obj.set_taborder("37");
            obj.set_text("교육명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "28", null, "80", "21", null, "76", this);
            obj.set_taborder("44");
            obj.set_text("교육기관");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "28", null, "80", "21", null, "50", this);
            obj.set_taborder("50");
            obj.set_text("대분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "581", "544", "80", "15", null, null, this);
            obj.set_taborder("78");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "501", "549", "40", "107", null, null, this);
            obj.set_taborder("79");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "530", null, null, "21", "575", "128", this);
            obj.set_taborder("33");
            obj.set_text("교육시작일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "1141", "549", "20", "152", null, null, this);
            obj.set_taborder("80");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDUC_BEDE", "absolute", "615", null, "100", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "184", null, "21", "21", null, "128", this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEDSB_NAME", "absolute", "102", null, "399", "21", null, "102", this);
            obj.set_taborder("38");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "280", null, null, "21", "840", "50", this);
            obj.set_taborder("52");
            obj.set_text("중분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "102", null, "80", "21", null, "128", this);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "207", null, "100", "21", null, "128", this);
            obj.set_taborder("30");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "598", "97", "70", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("소분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREDC1_CODE", "absolute", "103", "97", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.style.set_buttonsize("20");

            obj = new Combo("cmbSHREDC3_CODE", "absolute", "659", "97", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_index("-1");

            obj = new Combo("cmbSHREDEV_YSNO", "absolute", "946", "97", "104", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");

            obj = new Static("Static22", "absolute", "378", "61", "8", "67", null, null, this);
            obj.set_taborder("81");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "651", "61", "8", "67", null, null, this);
            obj.set_taborder("82");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEDC1_CODE", "absolute", "102", null, "160", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");

            obj = new Static("Static16", "absolute", "332", null, null, "21", "785", "128", this);
            obj.set_taborder("31");
            obj.set_text("일련번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEDUC_INNM", "absolute", "102", null, "399", "21", null, "76", this);
            obj.set_taborder("45");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEDRT_SEQN", "absolute", "405", null, "96", "21", null, "128", this);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "530", null, null, "21", "575", "102", this);
            obj.set_taborder("39");
            obj.set_text("교육구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "530", null, null, "21", "575", "76", this);
            obj.set_taborder("46");
            obj.set_text("교육평가");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "530", null, null, "21", "575", "50", this);
            obj.set_taborder("54");
            obj.set_text("소분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEDEV_CODE", "absolute", "615", null, "160", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");

            obj = new Combo("cmbEDCD_CODE", "absolute", "615", null, "160", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_index("-1");

            obj = new Combo("cmbEDC2_CODE", "absolute", "341", null, "160", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("53");

            obj = new Static("Static14", "absolute", "804", null, null, "21", "301", "128", this);
            obj.set_taborder("35");
            obj.set_text("교육종료일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "804", null, null, "21", "282", "102", this);
            obj.set_taborder("41");
            obj.set_text("교육기간/단위");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "804", null, null, "21", "301", "76", this);
            obj.set_taborder("48");
            obj.set_text("이수학점");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "804", null, null, "21", "301", "50", this);
            obj.set_taborder("56");
            obj.set_text("평가여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDUC_ENDD", "absolute", "908", null, "100", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Combo("cmbEDUP_CODE", "absolute", "968", null, "100", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");

            obj = new Combo("cmbEDEV_YSNO", "absolute", "908", null, "160", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("57");

            obj = new Static("Static17", "absolute", "804", null, null, "21", "301", "24", this);
            obj.set_taborder("60");
            obj.set_text("교육금액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "774", "549", "40", "106", null, null, this);
            obj.set_taborder("83");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "317", "61", "20", "67", null, null, this);
            obj.set_taborder("84");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "599", "71", "52", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("직무");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDUTY_CODE", "absolute", "659", "71", "80", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDUTY_CODE", "absolute", "741", "71", "21", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDUTY_NAME", "absolute", "764", "71", "100", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "873", "71", "52", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "938", "61", "8", "67", null, null, this);
            obj.set_taborder("85");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "946", "71", "80", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "1051", "71", "100", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "1028", "71", "21", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "590", "61", "20", "67", null, null, this);
            obj.set_taborder("86");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "864", "61", "20", "67", null, null, this);
            obj.set_taborder("87");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFormDown", "absolute", "1", "4", "98", "21", null, null, this.divButtonList);
            obj.set_taborder("2");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnFormUp", "absolute", "102", "4", "86", "21", null, null, this.divButtonList);
            obj.set_taborder("3");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Edit("edtACQS_CRDT", "absolute", "908", null, "55", "21", null, "76", this);
            obj.set_taborder("49");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEDC3_CODE", "absolute", "615", null, "160", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("55");

            obj = new Edit("edtEDUC_PROD", "absolute", "908", null, "55", "21", null, "102", this);
            obj.set_taborder("42");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "530", null, null, "21", "575", "25", this);
            obj.set_taborder("58");
            obj.set_text("환급여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRFND_YSNO", "absolute", "615", null, "160", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("59");

            obj = new Static("Static61", "absolute", "453", "560", "38", "8", null, null, this);
            obj.set_taborder("88");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "653", "693", "38", "8", null, null, this);
            obj.set_taborder("89");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "636", "589", "102", "5", null, null, this);
            obj.set_taborder("90");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "9", "572", "30", "89", null, null, this);
            obj.set_taborder("91");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_NAME", "absolute", "1224", null, "100", "21", null, "64", this);
            obj.set_taborder("92");
            obj.set_maxlength("20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "1224", null, "100", "21", null, "128", this);
            obj.set_taborder("93");
            obj.set_maxlength("20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtEDUC_COST", "absolute", "908", null, "160", "21", null, "24", this);
            obj.set_taborder("61");
            obj.set_mask("9,999");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("교육이수결과관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item5","cmbEDC3_CODE","value","dsED_EDRSLT","EDC3_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtEMPL_NUMB","value","dsED_EDRSLT","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtEMPL_NAME","value","dsED_EDRSLT","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtEDRT_SEQN","value","dsED_EDRSLT","EDRT_SEQN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cmbEDC2_CODE","value","dsED_EDRSLT","EDC2_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cmbEDC1_CODE","value","dsED_EDRSLT","EDC1_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","calEDUC_ENDD","value","dsED_EDRSLT","EDUC_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cmbEDUP_CODE","value","dsED_EDRSLT","EDUP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cmbEDEV_YSNO","value","dsED_EDRSLT","EDEV_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cmbEDEV_CODE","value","dsED_EDRSLT","EDEV_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cmbEDCD_CODE","value","dsED_EDRSLT","EDCD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtEDSB_NAME","value","dsED_EDRSLT","EDSB_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtEDUC_INNM","value","dsED_EDRSLT","EDUC_INNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","calEDUC_BEDE","value","dsED_EDRSLT","EDUC_BEDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtACQS_CRDT","value","dsED_EDRSLT","ACQS_CRDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtEDUC_PROD","value","dsED_EDRSLT","EDUC_PROD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cmbRFND_YSNO","value","dsED_EDRSLT","RFND_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtOPOS_NAME","value","dsED_EDRSLT","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtDEPT_NAME","value","dsED_EDRSLT","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edtEDUC_COST","value","dsED_EDRSLT","EDUC_COST");
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
        this.addIncludeScript("EDMB0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("EDMB0050.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		교육이수결과를 관리한다.
         * @category	 	교육관리/교육관라/교육이수결과관리
         * @author	        김혜림
         * @cdate	  		2016.09.12
         * @version 1.0		최초 작성
         * EDMA0030.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "EDMB0050"; 
        this.GBL_KEYROWPOSITION1 =""; // 이전 row 선택시 사용변수
        this.GBL_KEYROWPOSITION2 =""; // 이전 row 선택시 사용변수
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
        //	this.edtSHREDCY_NAME.setFocus();
        	this.cmbSHREDC2_CODE.set_enable(false);
            this.cmbSHREDC3_CODE.set_enable(false);
        	this.fnc_GetComboDs(this.dsCombo); //콤보 조회 
            this.fn_GetUserCombo("cmbSHREDC1_CODE");//교육기간 대분류 콤보(조회조건) - 조회조건은 하위분류 DB값 조회
        	this.fn_GetUserCombo("cmbEDC1_CODE");//교육기간 대분류 콤보
        	this.fn_GetUserCombo("cmbEDC2_CODE_ALL");//교육기간 중분류 콤보(전체조회) - filter 이용하기 위해 전체조회 (DB 계속 들어가는것보단 나을 것 같아서)
            this.fn_GetUserCombo("cmbEDC3_CODE_ALL");//교육기간 소분류 콤보(전체조회)
        	this.calSHREDUC_BEDE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6) + "01");
        	this.calSHREDUC_ENDD.set_value(this.fnc_GetServerDateTime("DATE")); 

           	
            /*권한에 따라 사원번호 수정 가능여부 결정*/
            /*★개발을 위해 권한 level을 1로 셋팅*/
            // this.sUSERLAVEL = 1;
                	
        	 /* switch(this.sUSERLAVEL){
        		 case 1: 
                 this.imgHelpSHREMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
                 this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명
                 break;
               }
                	
              this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
              this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);*/
                	
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
        	this.fnc_DatasetClear("dsED_EDRSLT");
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsED_EDRSLT=dsED_EDRSLT";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	this.grdED_EDRSLT.setFocus();
        	

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsED_EDRSLT.addRow();
        	this.dsED_EDRSLT.set_rowposition(iRow); 
        	this.dsED_EDRSLT.setRowType(iRow,Dataset.ROWTYPE_INSERT);
        	this.edtEMPL_NAME.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (!this.fn_DeleteCheck()) return;
        	
        	this.dsED_EDRSLT.deleteRow(this.dsED_EDRSLT.rowposition);
        	this.grdED_EDRSLT.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	

        	this.fnc_DataSetCancel("dsSHREDC1_CODE,dsSHREDC2_CODE,dsSHREDC3_CODE,dsED_EDRSLT");
        	
        	/*this.edtSHRDEPT_CODE.set_value("");
        	this.edtSHRDEPT_NAME.set_value("");
        	this.edtSHRDUTY_CODE.set_value("");
        	this.edtSHRDUTY_NAME.set_value("");
            this.edtSHREMPL_NUMB.set_value("");
            this.edtSHREMPL_NAME.set_value("");
            this.fn_GetUserCombo("cmbSHREDC1_CODE");//교육기간 대분류 콤보
            this.calSHREDUC_BEDE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6) + "01");
        	this.calSHREDUC_ENDD.set_value(this.fnc_GetServerDateTime("DATE")); 
        	this.cmbSHREDEV_YSNO.set_index(0);*/
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	this.fn_SaveKeyRowposition();
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsED_EDRSLT=dsED_EDRSLT:U";
        	var sOutDataSet = "dsED_EDRSLT=dsED_EDRSLT";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        
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
        	var sMessage = this.fnc_FormUnloadCheck("dsED_EDRSLT", this);

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
        		
        	if (this.fnc_DatasetChangeCheck("dsED_EDRSLT")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHREDUC_BEDE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "교육기간 시작일", this.calSHREDUC_BEDE);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHREDUC_ENDD.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "교육기간 종료일", this.calSHREDUC_ENDD);
        	}
        	
        	if (this.calSHREDUC_BEDE.value > this.calSHREDUC_ENDD.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "교육기간 시작일,종료일", this.calSHREDUC_BEDE);
        	}

        
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        		if (this.dsED_EDRSLT.getRowCount() < 1) { // 삭제할 자료가 없습니다.
        		    this.fnc_Message("TMM007");
        		    return;
        	    }
        	    
        		var sQuestionText = '(' + this.fnc_Trim(this.dsED_EDRSLT.getColumn(this.dsED_EDRSLT.rowposition, "EMPL_NUMB"))+ ')'
        		+ '-'+this.fnc_Trim(this.dsED_EDRSLT.getColumn(this.dsED_EDRSLT.rowposition, "EMPL_NAME"));
        		+ '-'+this.fnc_Trim(this.dsED_EDRSLT.getColumn(this.dsED_EDRSLT.rowposition, "EDRT_SEQN"));
        		//+')'+this.fnc_Trim(this.dsED_CFCTXM1.getColumn(this.dsED_CFCTXM1.rowposition, "EMPL_NAME"))
        		//+'-'+this.fnc_Trim(this.dsED_CFCTXM1.getColumn(this.dsED_CFCTXM1.rowposition, "EDRT_SEQN"));
        		return this.fnc_Message("TMM002", sQuestionText);

        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	var strEDCY_CODE = "";
        	
        	if (!this.fnc_DatasetChangeCheck("dsED_EDRSLT")) { //변경된 데이터가 없습니다.
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsED_EDRSLT.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsED_EDRSLT.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			if (this.fnc_Length(this.fnc_Trim(this.dsED_EDRSLT.getColumn(i, "EMPL_NUMB"))) < 1) {
        				this.edtEMPL_NAME.setFocus();
        				return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsED_EDRSLT, i, this.dsED_EDRSLT, "EMPL_NUMB");
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsED_EDRSLT.getColumn(i, "EDUC_BEDE"))) < 1) {
        				this.calEDUC_BEDE.setFocus();
        				return this.fnc_CheckPostAction("TMM072", "교육시작일", this.dsED_EDRSLT, i, this.dsED_EDRSLT, "EDUC_BEDE");		
        			}	
        			if (this.fnc_Length(this.fnc_Trim(this.dsED_EDRSLT.getColumn(i, "EDUC_ENDD"))) < 1) {
        				this.calEDUC_ENDD.setFocus();
        				return this.fnc_CheckPostAction("TMM072", "교육종료일", this.dsED_EDRSLT, i, this.dsED_EDRSLT, "EDUC_ENDD");		
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsED_EDRSLT.getColumn(i, "EDSB_NAME"))) < 1) {
        				this.edtEDSB_NAME.setFocus();
        				return this.fnc_CheckPostAction("TMM072", "교육명", this.dsED_EDRSLT, i, this.dsED_EDRSLT, "EDSB_NAME");		
        			}	
        			if(this.dsED_EDRSLT.getColumn(i,"EDUC_BEDE") > this.dsED_EDRSLT.getColumn(i,"EDUC_ENDD")){
        				this.fnc_Message("TMM125", "교육시작일이 교육종료일보다 클 수 없습니다.");
        				this.calEDUC_BEDE.setFocus();
        			return false;
        			}

        			if(this.dsED_EDRSLT.getColumn(i, "EDC1_CODE") != undefined && this.dsED_EDRSLT.getColumn(i, "EDC1_CODE")!="" && this.dsED_EDRSLT.getColumn(i, "EDC1_CODE")!="00"){
        			  strEDCY_CODE = this.dsED_EDRSLT.getColumn(i, "EDC1_CODE");
        			  if(this.dsED_EDRSLT.getColumn(i, "EDC2_CODE") != undefined && this.dsED_EDRSLT.getColumn(i, "EDC2_CODE")!="" && this.dsED_EDRSLT.getColumn(i, "EDC2_CODE")!="00"){
        			    strEDCY_CODE += this.dsED_EDRSLT.getColumn(i, "EDC2_CODE");
        			     if(this.dsED_EDRSLT.getColumn(i, "EDC3_CODE") != undefined && this.dsED_EDRSLT.getColumn(i, "EDC3_CODE")!=""&& this.dsED_EDRSLT.getColumn(i, "EDC3_CODE")!="00" ){
        					strEDCY_CODE += this.dsED_EDRSLT.getColumn(i, "EDC3_CODE");
        			     }else{ 
        					strEDCY_CODE +="00";
        			    }	
        			  }
        			  else{
        				strEDCY_CODE +="0000";
        			  }
        			}else{
        			  strEDCY_CODE = "";
        			}
        		
        			this.dsED_EDRSLT.setColumn(i, "EDCY_CODE", strEDCY_CODE); 
        	
        	
        	}
        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') { //대분류

        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " DEPT_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); 
        		sReturnString += " DUTY_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.edtSHRDUTY_CODE.value)); 
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		sReturnString += " EDC1_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREDC1_CODE.value)); 
        		sReturnString += " EDC2_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREDC2_CODE.value)); 
        		sReturnString += " EDC3_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREDC3_CODE.value)); 
        		sReturnString += " EDUC_BEDE=" 		 + this.fnc_Quote(this.fnc_Trim(this.calSHREDUC_BEDE.value)); 
        		sReturnString += " EDUC_ENDD=" 		 + this.fnc_Quote(this.fnc_Trim(this.calSHREDUC_ENDD.value));  
        		sReturnString += " EDEV_YSNO=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREDEV_YSNO.value));  		
        	
        	} else if (sKind == 'SAVE00') {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
        	} else if (sKind == 'SAVE01') {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
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

        	if (sMethodName == 'SEARCH00') { //조회EMPL_NUMB
        		//var row = this.dsED_EDRSLT.findRow("EDRT_SEQN", this.GBL_KEYROWPOSITION1);
        		var row = this.dsED_EDRSLT.findRowExpr("EDRT_SEQN=='"+this.GBL_KEYROWPOSITION1+"' && EMPL_NUMB=='"+this.GBL_KEYROWPOSITION2+"'");
        		if(row > -1) {
        			 this.dsED_EDRSLT.set_rowposition(row);
        		}else {
        			
        			this.dsED_EDRSLT.set_rowposition(0);
        		}
        		
        		this.fnc_Information(this.stInformation, this.dsED_EDRSLT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsED_EDRSLT.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "GetCommCode")  { //공통코드 
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdED_EDRSLT,dsEDCD_GUBN,EDCD_CODE";
        		arrParam[1] = "GRID,grdED_EDRSLT,dsEDUP_CODE,EDUP_CODE";
        		arrParam[2] = "GRID,grdED_EDRSLT,dsEDEV_CODE,EDEV_CODE";
        		arrParam[3] = "GRID,grdED_EDRSLT,dsEDEV_YSNO,EDEV_YSNO";
            	arrParam[4] = "COMBO,cmbSHREDEV_YSNO,dsSHREDEV_YSNO,0";
        		arrParam[5] = "COMBO,cmbEDCD_CODE,dsEDCD_GUBN,0";
        		arrParam[6] = "COMBO,cmbEDUP_CODE,dsEDUP_CODE,0";
        		arrParam[7] = "COMBO,cmbEDEV_CODE,dsEDEV_CODE,0";
        		arrParam[8] = "COMBO,cmbEDEV_YSNO,dsEDEV_YSNO,0";
        		arrParam[9] = "COMBO,cmbRFND_YSNO,dsRFND_YSNO,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}else if (sMethodName == "GetUserComboCodeSingle")  {
        	}else if (sMethodName == 'SAVE00') {
        	  this.fnc_Message("TMM103");
        	  this.fn_Search();
        	  
        	}else if (sMethodName == 'SAVE01') {
        	  
        	} 
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function(obj) {

        }

        

        /***************************************************************************************************
         *                                     사용자 정의 Function 처리 부분                           *
         ***************************************************************************************************/

        /*--------------------------+
         | 이전rowposition key저장|
         +--------------------------*/

        this.fn_SaveKeyRowposition = function () {
        	
           this.GBL_KEYROWPOSITION1 =  this.dsED_EDRSLT.getColumn(this.dsED_EDRSLT.rowposition, "EDRT_SEQN");
           this.GBL_KEYROWPOSITION2 =  this.dsED_EDRSLT.getColumn(this.dsED_EDRSLT.rowposition, "EMPL_NUMB");
           
        }
        /*-------------------------------+
         | 조회조건 대/중/소분류 콤보|
         +------------------------------*/
        this.fn_GetUserCombo = function (oComboId) {
        	var arrParam  = new Array();
        	var arrParam2 = new Array();
        		        
            if(oComboId=="cmbSHREDC1_CODE"){ //조회조건 대분류
            	arrParam[0] = this.dsUserCombo.getColumn(0, "DSNAME");
        	    arrParam[1] = this.dsUserCombo.getColumn(0, "COMBOID");
        	    arrParam[2] = this.dsUserCombo.getColumn(0, "HEADFLAG");
        	    arrParam[3] = this.dsUserCombo.getColumn(0, "USEYSNO");
        	    arrParam[4] = this.dsUserCombo.getColumn(0, "PARAM");
        	    
        	    arrParam2[0] = "COMBO,cmbSHREDC1_CODE,dsSHREDC1_CODE,0";
        	    
        	}else if(oComboId=="cmbSHREDC2_CODE"){//조회조건 중분류
        		this.dsUserCombo.setColumn(1, "PARAM", this.cmbSHREDC1_CODE.value);
        	    arrParam[0] = this.dsUserCombo.getColumn(1, "DSNAME");
        	    arrParam[1] = this.dsUserCombo.getColumn(1, "COMBOID");
        	    arrParam[2] = this.dsUserCombo.getColumn(1, "HEADFLAG");
        	    arrParam[3] = this.dsUserCombo.getColumn(1, "USEYSNO");
        	    arrParam[4] = this.dsUserCombo.getColumn(1, "PARAM");
        	    
        	    arrParam2[0] = "COMBO,cmbSHREDC2_CODE,dsSHREDC2_CODE,0";
        	    
        	}else if(oComboId=="cmbSHREDC3_CODE"){//조회조건 소분류
        		var strParam = this.cmbSHREDC1_CODE.value + ","+this.cmbSHREDC2_CODE.value;
        		this.dsUserCombo.setColumn(2, "PARAM", strParam);
        		
        		arrParam[0] = this.dsUserCombo.getColumn(2, "DSNAME");
        	    arrParam[1] = this.dsUserCombo.getColumn(2, "COMBOID");
        	    arrParam[2] = this.dsUserCombo.getColumn(2, "HEADFLAG");
        	    arrParam[3] = this.dsUserCombo.getColumn(2, "USEYSNO");
        	    arrParam[4] = this.dsUserCombo.getColumn(2, "PARAM");
        	    
        	    arrParam2[0] = "COMBO,cmbSHREDC3_CODE,dsSHREDC3_CODE,0";
        	}else if(oComboId=="cmbEDC1_CODE"){//콤보 대분류
        		
        		arrParam[0] = this.dsUserCombo.getColumn(3, "DSNAME");
        	    arrParam[1] = this.dsUserCombo.getColumn(3, "COMBOID");
        	    arrParam[2] = this.dsUserCombo.getColumn(3, "HEADFLAG");
        	    arrParam[3] = this.dsUserCombo.getColumn(3, "USEYSNO");
        	    arrParam[4] = this.dsUserCombo.getColumn(3, "PARAM");
        	    
        	    arrParam2[0] = "COMBO,cmbEDC1_CODE,dsEDC1_CODE,0";
        	}else if(oComboId=="cmbEDC2_CODE_ALL"){//콤보 중분류
        		arrParam[0] = this.dsUserCombo.getColumn(4, "DSNAME");
        	    arrParam[1] = this.dsUserCombo.getColumn(4, "COMBOID");
        	    arrParam[2] = this.dsUserCombo.getColumn(4, "HEADFLAG");
        	    arrParam[3] = this.dsUserCombo.getColumn(4, "USEYSNO");
        	    arrParam[4] = this.dsUserCombo.getColumn(4, "PARAM");
        	    
        	    arrParam2[0] = "COMBO,cmbEDC2_CODE,dsEDC2_CODE,0";
        	}else if(oComboId=="cmbEDC3_CODE_ALL"){//콤보 소분류
        		arrParam[0] = this.dsUserCombo.getColumn(5, "DSNAME");
        	    arrParam[1] = this.dsUserCombo.getColumn(5, "COMBOID");
        	    arrParam[2] = this.dsUserCombo.getColumn(5, "HEADFLAG");
        	    arrParam[3] = this.dsUserCombo.getColumn(5, "USEYSNO");
        	    arrParam[4] = this.dsUserCombo.getColumn(5, "PARAM");
        	    
        	    arrParam2[0] = "COMBO,cmbEDC3_CODE,dsEDC3_CODE,0";
        	}
        		
        	this.fnc_GetUserComboSingle(arrParam, arrParam2);
        	
        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function(obj,sFromDs,sOldValue,sColumnID)
        {	
        	var arrParam = new Array();
        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        		arrParam[0] = "TMM0004"; 								//Popup ID
        		arrParam[1] = ""; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);//콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRDEPT_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        	}// 조회조건 - 사원정보조회(Popup)
        	else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}//조회조건 - 직무 조회(Popup)
            else if ((obj.name == "imgHelpSHRDUTY_CODE") || (obj.name == "edtSHRDUTY_NAME")) {
        		arrParam[0] = "EDM0110";
        		arrParam[1] = this.edtSHRDUTY_CODE.value + "%";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDUTY_NAME.value);
        		arrParam[3] = "";
        		arrParam[4] = "edtSHRDUTY_NAME";
        		arrParam[5] = "edtSHRDUTY_CODE,edtSHRDUTY_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}// 콤보 사원정보조회(Popup)
        	else if (obj.name =="imgHelpEMPL_NUMB" || obj.name=="edtEMPL_NAME") {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtEMPL_NAME.value + "%";
        		arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "edtEMPL_NAME";
        		arrParam[5] = "edtEMPL_NUMB,edtEMPL_NAME,edtDEPT_NAME,edtOPOS_NAME";  
        		arrParam[6] = "0,1,3,11";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	} 
        }

        /*-------------------------------------+
         | Help Popup Open Grid                |
         +-------------------------------------*/
        this.fn_HelpDialoge_Grid = function (obj,sFromDs,sOldValue,sColumnID) {

        //	if(obj.readonly == true) return;

        	var arrParam = new Array();

        	// 그리드 사원조회 (Popup)
        	if (obj.name == "grdED_EDRSLT") {
        		if (sColumnID == "EMPL_NAME"|| this.fnc_getGridHelpColName(obj, sFromDs) == "DEPT_NAME") {		
        			arrParam[0] = "HRM0001"; 
        			arrParam[1] = ""
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdED_EDRSLT";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,DEPT_NAME,OPOS_NAME";  
        			arrParam[6] = "0,1,3,11";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}
        }

        

        /*-----------------------------+
         |  양식파일 다운로드 클릭 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	var sPath    = "XLS_FILE/";               //파일 경로
            var sLogFile = "EDMB0050_sample.xlsx";  //파일 논리명
            var sPhyFile = "EDMB0050_sample.xlsx";  //파일 물리명

        	//File Download 처리
        	//this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile, "");
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);  
        }

        
        /*--------------------------+
         |  양식파일 업로드 클릭 時  |
         +---------------------------*/
        this.fn_ExcelUpload = function (obj,e) {

        	this.fnc_DatasetClear("dsED_EDRSLT");
        	this.fnc_ExcelUpload("dsED_EDRSLT", "Sheet1", "A2", "fn_ExcelSuccess");

        }

        
        this.fn_ExcelSuccess = function (obj,e) {
        	this.setWaitCursor(false);
        	this.dsED_EDRSLT.set_enableevent(false);
        	this.dsED_EDRSLT.set_updatecontrol(false);

        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	
        	for (var i = 0; i< this.objDsImportTemp.getRowCount(); i++){
        	
        		var iRow = this.dsED_EDRSLT.addRow();
        		this.dsED_EDRSLT.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        		this.dsED_EDRSLT.setColumn(iRow, "EMPL_NUMB", this.objDsImportTemp.getColumn(i, 0));  
        		this.dsED_EDRSLT.setColumn(iRow, "EMPL_NAME", this.objDsImportTemp.getColumn(i, 1)); 
        		this.dsED_EDRSLT.setColumn(iRow, "EDUC_BEDE", this.objDsImportTemp.getColumn(i, 2)); 
        		this.dsED_EDRSLT.setColumn(iRow, "EDUC_ENDD", this.objDsImportTemp.getColumn(i, 3)); 
        		this.dsED_EDRSLT.setColumn(iRow, "EDSB_NAME", this.objDsImportTemp.getColumn(i, 4)); 
        		this.dsED_EDRSLT.setColumn(iRow, "EDUC_INNM", this.objDsImportTemp.getColumn(i, 5)); 
        		this.dsED_EDRSLT.setColumn(iRow, "EDCD_CODE", this.objDsImportTemp.getColumn(i, 6)); 
        		this.dsED_EDRSLT.setColumn(iRow, "EDCY_CODE", this.objDsImportTemp.getColumn(i, 7)); 

        		if(this.objDsImportTemp.getColumn(i, 7) != undefined && this.objDsImportTemp.getColumn(i, 7)){
        		   var sEDCY_CODE ="";
        			   sEDCY_CODE = this.objDsImportTemp.getColumn(i, 7);
        			  
        			if( this.fnc_Length(sEDCY_CODE) == 6 ){
        				this.dsED_EDRSLT.setColumn(iRow, "EDC1_CODE", this.fnc_SubStr(sEDCY_CODE, 0, 2)); 
        				this.dsEDC2_CODE.filter("(EDC1_CODE=="+this.fnc_SubStr(sEDCY_CODE, 0, 2)+")" + "||" + "COMB_NAME == '전체'");
        				this.dsEDC3_CODE.filter("(EDC2_CODE=="+this.fnc_SubStr(sEDCY_CODE, 2, 2)+")" + "||" + "COMB_NAME == '전체'");
        			    this.dsED_EDRSLT.setColumn(iRow, "EDC2_CODE", this.fnc_SubStr(sEDCY_CODE, 2, 2)); 
        		        this.dsED_EDRSLT.setColumn(iRow, "EDC3_CODE", this.fnc_SubStr(sEDCY_CODE, 4, 2));
        			}
        		}
        	
        		this.dsED_EDRSLT.setColumn(iRow, "EDUC_PROD", this.objDsImportTemp.getColumn(i, 8)); 
        		this.dsED_EDRSLT.setColumn(iRow, "EDUP_CODE", this.objDsImportTemp.getColumn(i, 9)); 
        		this.dsED_EDRSLT.setColumn(iRow, "EDUC_COST", this.objDsImportTemp.getColumn(i, 10)); 
        		this.dsED_EDRSLT.setColumn(iRow, "ACQS_CRDT", this.objDsImportTemp.getColumn(i, 11));
        		this.dsED_EDRSLT.setColumn(iRow, "EDEV_CODE", this.objDsImportTemp.getColumn(i, 12));
        		this.dsED_EDRSLT.setColumn(iRow, "EDEV_YSNO", this.objDsImportTemp.getColumn(i, 13));
        		this.dsED_EDRSLT.setColumn(iRow, "RFND_YSNO", this.objDsImportTemp.getColumn(i, 14));
        	}
        	
        	if (!this.fn_ExcelUploadCheck()) return;
        	
        	this.objDsImportTemp.clear();
        	this.dsED_EDRSLT.set_updatecontrol(true);
        	this.dsED_EDRSLT.set_enableevent(true);

        	this.dsED_EDRSLT.set_rowposition(0);
        	this.grdED_EDRSLT.updateToDataset();
        	this.grdED_EDRSLT.setFocus();
        }

        /*-----------------------+
         |  엑셀 업로드 전 처리 ! |
         +------------------------*/
        this.fn_ExcelUploadCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsED_EDRSLT")) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	if (this.dsED_EDRSLT.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsED_EDRSLT.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsED_EDRSLT.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsED_EDRSLT.getColumn(i, "EMPL_NUMB"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 사원번호가 없습니다.");
        			return false;
        		}
        		
        		if (!this.fnc_IsDate(this.dsED_EDRSLT.getColumn(i, "EDUC_BEDE"))) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 교육시작일이 잘못되었습니다.");
        			return false;
        		}
        		
        		if (!this.fnc_IsDate(this.dsED_EDRSLT.getColumn(i, "EDUC_ENDD"))) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 교육종료일이 잘못되었습니다.");
        			return false;
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsED_EDRSLT.getColumn(i, "EDSB_NAME"))) < 1) {
        			this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 교육명이 없습니다.");
        			return false;
        		}
        	
        	}

        	return true;
        	
        }

        
        /***************************************************************************************************
         *                                     사용자 정의 Event 처리 부분                           *
         ***************************************************************************************************/
        /*---------------------------------+
         | 조회조건 대분류 이벤트|
         +--------------------------------*/
        this.cmbSHREDC1_CODE_onitemchanged = function(obj,e) //대분류 선택했을떄 중분류 나타내기
        {	
        	if(this.cmbSHREDC1_CODE.text!="전체"){
        		this.cmbSHREDC2_CODE.set_enable(true);
        		this.dsSHREDC2_CODE.clearData();
        		this.dsSHREDC3_CODE.clearData();
        		this.fn_GetUserCombo("cmbSHREDC2_CODE");
        	
        	}
        }
        /*---------------------------------+
         | 조회조건 중분류 이벤트|
         +--------------------------------*/
        this.cmbSHREDC2_CODE_onitemchanged = function(obj,e)//중분류 선택했을떄 소분류 나타내기
        {	if(this.cmbSHREDC2_CODE.text!="전체"){
        		this.cmbSHREDC3_CODE.set_enable(true);
        		this.dsSHREDC3_CODE.clearData();
        		this.fn_GetUserCombo("cmbSHREDC3_CODE");
        	}
        }

        /*---------------------------------+
         | 대분류 변경시  이벤트|
         +--------------------------------*/
        this.cmbEDC1_CODE_onitemchanged = function(obj,e) //대분류
        {	this.cmbEDC2_CODE.set_index(0);
        	var nRow = this.dsED_EDRSLT.rowposition;
        	var item1 = this.dsED_EDRSLT.getColumn(nRow, "EDC1_CODE"); 
        	this.dsEDC2_CODE.filter("(EDC1_CODE=="+item1+")" + "||" + "COMB_NAME == '전체'");
        	//this.cmbEDC2_CODE.redraw();
        	this.cmbEDC2_CODE_onitemchanged(obj,e);

        }
        /*---------------------------------+
         | 중분류 변경시 이벤트|
         +--------------------------------*/
        this.cmbEDC2_CODE_onitemchanged = function(obj,e) //중분류
        {	this.cmbEDC3_CODE.set_index(0);
        	var nRow = this.dsED_EDRSLT.rowposition;
        	var item1 = this.dsED_EDRSLT.getColumn(nRow, "EDC1_CODE"); 
        	var item2 = this.dsED_EDRSLT.getColumn(nRow, "EDC2_CODE");
        	//this.dsED_EDRSLT.ed_updateToDataset();
        	this.dsEDC3_CODE.filter("(EDC1_CODE=="+item1+"&&"+"EDC2_CODE=="+item2+")" + "||" + "COMB_NAME == '전체'");

        }
        /*---------------------------------+
         | 그리드 사원조회팝업 호출 |
         +--------------------------------*/
        this.dsED_EDRSLT_oncolumnchanged = function(obj,e) {
        	if (e.columnid == "EMPL_NAME") {
        		this.fn_HelpDialoge_Grid(this.grdED_EDRSLT, "YES", e.oldvalue, e.columnid);
        	}
        }
        /*------------------------------------------+
         | 그리드 조회시 대/중/소 분류 콤보셋팅
         +------------------------------------------*/
        this.dsED_EDRSLT_onrowposchanged = function(obj,e)
        {	
        	var nRow = this.dsED_EDRSLT.rowposition;

        	var item1 = this.dsED_EDRSLT.getColumn(nRow, "EDC1_CODE"); 
        	var item2 = this.dsED_EDRSLT.getColumn(nRow, "EDC2_CODE");
        	this.dsEDC2_CODE.filter("EDC1_CODE=="+item1);
        	this.dsEDC3_CODE.filter("EDC1_CODE=="+item1+"&&"+"EDC2_CODE=="+item2);
        	
        	/*사원번호는 수정이 안된다. 키값이다.*/
        	if (this.dsED_EDRSLT.rowcount > 0){
        			if(this.dsED_EDRSLT.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT){
        				this.imgHelpEMPL_NUMB.set_enable(true);
        				this.edtEMPL_NAME.set_readonly(false);
        			}else{
        				this.imgHelpEMPL_NUMB.set_enable(false);
        				this.edtEMPL_NAME.set_readonly(true);
        		   }
        	   }
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsED_EDRSLT.addEventHandler("onrowposchanged", this.dsED_EDRSLT_onrowposchanged, this);
            this.dsED_EDRSLT.addEventHandler("oncolumnchanged", this.dsED_EDRSLT_oncolumnchanged, this);
            this.dsEDC2_CODE.addEventHandler("onrowposchanged", this.dsEDC2_CODE_onrowposchanged, this);
            this.dsEDC2_CODE.addEventHandler("onrowsetchanged", this.dsEDC2_CODE_onrowsetchanged, this);
            this.dsED_EDRSLT_TEMP.addEventHandler("onrowposchanged", this.dsED_EDRSLT_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.st_FormTitle.addEventHandler("onclick", this.st_FormTitle_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Static30.addEventHandler("onclick", this.Static30_onclick, this);
            this.grdED_EDRSLT.addEventHandler("onexpanddown", this.fn_HelpDialoge_Grid, this);
            this.calSHREDUC_BEDE.addEventHandler("oneditclick", this.calSHREDUC_BEDE_oneditclick, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static52.addEventHandler("onclick", this.Static52_onclick, this);
            this.cmbSHREDC2_CODE.addEventHandler("onitemchanged", this.cmbSHREDC2_CODE_onitemchanged, this);
            this.Static64.addEventHandler("onclick", this.Static64_onclick, this);
            this.calEDUC_BEDE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtEDSB_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHREDC1_CODE.addEventHandler("onitemchanged", this.cmbSHREDC1_CODE_onitemchanged, this);
            this.cmbEDC1_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEDC1_CODE.addEventHandler("onitemchanged", this.cmbEDC1_CODE_onitemchanged, this);
            this.Static16.addEventHandler("onclick", this.Static16_onclick, this);
            this.edtEDUC_INNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEDEV_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEDCD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEDC2_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEDC2_CODE.addEventHandler("onitemchanged", this.cmbEDC2_CODE_onitemchanged, this);
            this.cmbEDC2_CODE.addEventHandler("onitemclick", this.cmbEDC2_CODE_onitemclick, this);
            this.calEDUC_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEDUP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEDEV_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static15.addEventHandler("onclick", this.Static52_onclick, this);
            this.imgHelpSHRDUTY_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDUTY_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDUTY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static31.addEventHandler("onclick", this.Static52_onclick, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.divButtonList.btnFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.divButtonList.btnFormUp.addEventHandler("onclick", this.fn_ExcelUpload, this);
            this.edtACQS_CRDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbEDC3_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEDUC_PROD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbRFND_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("EDMB0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
