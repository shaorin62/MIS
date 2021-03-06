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
                this.set_name("FAMB0020");
                this.set_titletext("전표상세조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"DSNAME\">dsEVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">증빙종류</Col></Row><Row><Col id=\"DSNAME\">dsSHREVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">증빙종류(조회용)</Col></Row><Row><Col id=\"DSNAME\">dsAPPR_YSNO</Col><Col id=\"CODEID\">COMX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">승인여부</Col></Row><Row><Col id=\"DSNAME\">dsDRCR_GUBN</Col><Col id=\"CODEID\">DRCR_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">차대구분</Col></Row><Row><Col id=\"DSNAME\">dsVATX_TYPE</Col><Col id=\"CODEID\">VATX_TYPE</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">부가세종류</Col></Row><Row><Col id=\"DSNAME\">dsPURC_GUBN</Col><Col id=\"CODEID\">PURC_GUBN</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">부가세유형</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUB2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAX_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DAEX_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_CHAX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_DAEX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_DOCU\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAM1\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CSTC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECE_EMNM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMNM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_GUBN\" type=\"STRING\" size=\"10\"/><Column id=\"SLIP_PGBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"35\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ1\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ2\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ3\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ4\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ5\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ6\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"GW_STATUS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_SIZE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PROJ_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_TYPE\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"PURC_GUBN\" size=\"150\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0001</Col></Row><Row><Col id=\"DSNAME\">dsCOND_CODE</Col><Col id=\"COMBOID\">FAM0002</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">관리구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRSLIP_GUBN</Col><Col id=\"COMBOID\">FAM0003</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">전표종류(조회용)</Col></Row><Row><Col id=\"DSNAME\">dsSLIP_GUBN</Col><Col id=\"COMBOID\">FAM0003</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">전표종류</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "211", "249", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("23");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "232", null, null, "25", "15", this);
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"75\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"210\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"114\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"회계일자\"/><Cell col=\"1\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"3\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"4\" displaytype=\"text\" text=\"차변원화금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"대변원화금액\"/><Cell col=\"6\" displaytype=\"text\" text=\"적요\"/><Cell col=\"7\" displaytype=\"text\" text=\"작성자\"/><Cell col=\"8\" displaytype=\"text\" text=\"작성부서\"/><Cell col=\"9\" displaytype=\"text\" text=\"승인자\"/><Cell col=\"10\" displaytype=\"text\" text=\"귀속부서\"/><Cell col=\"11\" text=\"코스트센터\"/><Cell col=\"12\" displaytype=\"text\" text=\"전표종류\"/><Cell col=\"13\" displaytype=\"text\" text=\"관리항목값1\"/><Cell col=\"14\" displaytype=\"text\" text=\"관리항목값2\"/><Cell col=\"15\" displaytype=\"text\" text=\"관리항목값3\"/><Cell col=\"16\" displaytype=\"text\" text=\"관리항목값4\"/><Cell col=\"17\" displaytype=\"text\" text=\"관리항목값5\"/><Cell col=\"18\" displaytype=\"text\" text=\"관리항목값6\"/><Cell col=\"19\" displaytype=\"text\" text=\"거래처\"/><Cell col=\"20\" displaytype=\"text\" text=\"증빙\"/><Cell col=\"21\" displaytype=\"text\" text=\"발행일자\"/><Cell col=\"22\" displaytype=\"text\" text=\"공급가액\"/><Cell col=\"23\" displaytype=\"text\" text=\"부가세종류\"/><Cell col=\"24\" displaytype=\"text\" text=\"부가세유형\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align: center;\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"bind:DISP_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ACCT_INTL\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAX_AMNT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DAEX_AMNT\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:center;\" text=\"bind:APPR_EMNM\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAM1\"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:CSTC_NAME\"/><Cell col=\"12\" displaytype=\"combo\" style=\"align: left;\" text=\"bind:SLIP_GUBN\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ1\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ2\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ3\"/><Cell col=\"16\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ4\"/><Cell col=\"17\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ5\"/><Cell col=\"18\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CODE_SEQ6\"/><Cell col=\"19\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CUST_NAME\"/><Cell col=\"20\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:EVID_DOCU\"/><Cell col=\"21\" displaytype=\"date\" style=\"align: left;\" text=\"bind:TRNS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUPP_AMNT\"/><Cell col=\"23\" displaytype=\"combo\" text=\"bind:VATX_TYPE\"/><Cell col=\"24\" displaytype=\"combo\" text=\"bind:PURC_GUBN\" combodisplaynulltext=\" \" combodisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;CHAX_AMNT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;DAEX_AMNT&quot;)\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"16\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"17\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"18\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"19\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"20\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"21\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"22\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"23\"/><Cell col=\"24\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "147", "25", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOND_VANM", "absolute", "466", "149", "94", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_visible("false");
            obj.set_tabstop("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOND_VACD", "absolute", "341", "149", "100", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "272", "149", "68", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("관리항목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCOND_CODE", "absolute", "96", "149", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static11", "absolute", "28", "149", "68", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("관리구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRFORI_AMNT2", "absolute", "1066", "209", "80", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRFORI_AMNT1", "absolute", "966", "209", "80", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRSLIP_AMNT2", "absolute", "460", "123", "100", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchItem");
            obj.set_mask("#,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRSLIP_AMNT1", "absolute", "341", "123", "100", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchItem");
            obj.set_mask("#,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "942", "97", "68", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("승인여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_YSNO", "absolute", "1011", "97", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRRECE_YSNO", "absolute", "658", "209", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");

            obj = new Static("Static5", "absolute", "590", "209", "68", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("접수여부");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "96", "97", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static22", "absolute", "28", "97", "68", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRREMK_NAME", "absolute", "96", "175", "464", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_imemode("hangul");
            obj.set_maxlength("400");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "30", "175", "68", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("적요");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVID_DOCU", "absolute", "1011", "149", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static20", "absolute", "942", "149", "68", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("증빙서류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1051", "209", "14", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("±");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "272", "123", "68", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("원화금액");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "898", "209", "68", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("외화금액");
            obj.set_cssclass("styFormSearchCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "778", "97", "125", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_imemode("hangul");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "778", "123", "125", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_imemode("hangul");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "676", "123", "77", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "676", "97", "77", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "595", "97", "78", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "595", "123", "78", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("작성부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "909", "71", "14", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME2", "absolute", "1027", "71", "125", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL2", "absolute", "925", "71", "77", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRDRCR_GUBN", "absolute", "1011", "123", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static7", "absolute", "942", "123", "68", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("차대구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE2", "absolute", "460", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static6", "absolute", "446", "97", "14", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE1", "absolute", "341", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static4", "absolute", "272", "97", "68", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("회계일");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSLIP_GUBN", "absolute", "96", "123", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static2", "absolute", "28", "123", "68", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("전표유형");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE2", "absolute", "460", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static10", "absolute", "446", "71", "14", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE1", "absolute", "341", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static9", "absolute", "272", "71", "68", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("전표일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAM1", "absolute", "778", "149", "125", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRUSEX_DEPT", "absolute", "676", "149", "77", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "595", "149", "78", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("귀속부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static0", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL1", "absolute", "676", "71", "77", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "595", "71", "78", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "446", "123", "14", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "755", "123", "21", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCOND_VACD", "absolute", "443", "149", "21", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_COD1", "absolute", "755", "149", "21", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpACCT_INTL1", "absolute", "755", "71", "21", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpACCT_INTL2", "absolute", "1004", "71", "21", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "755", "97", "21", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("63");
            obj.set_text("전표상세조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("64");
            obj.set_text("홈 > 재무관리 > 전표관리 > 전표조회 > 전표상세조회");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("65");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("67");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("68");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("69");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("70");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("71");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "9", "61", "30", "145", null, null, this);
            obj.set_taborder("72");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "120", "61", "38", "10", null, null, this);
            obj.set_taborder("73");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "132", "92", "102", "5", null, null, this);
            obj.set_taborder("74");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "132", "196", "38", "10", null, null, this);
            obj.set_taborder("75");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "132", "118", "102", "5", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "132", "144", "102", "5", null, null, this);
            obj.set_taborder("77");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "132", "170", "102", "5", null, null, this);
            obj.set_taborder("78");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME1", "absolute", "778", "71", "125", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "226", "216", "6", null, null, this);
            obj.set_taborder("79");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "493", "207", "80", "25", null, null, this);
            obj.set_taborder("80");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "595", "175", "78", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("코스트센터");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCSTC_CODE", "absolute", "676", "175", "77", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCSTC_CODE", "absolute", "755", "175", "21", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCSTC_NAME", "absolute", "778", "175", "125", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전표상세조회");
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
        this.addIncludeScript("FAMB0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMB0020 전표상세조회
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		오혜성		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "FAMB0020";

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
        this.sPageIndex = '';
        this.sPageSize = '';

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	//전표번호mask
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT,"DISP_NUMB", "Y"); //행 번호 포함
        	
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);

        	var sNowDate  = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));
        	var sFirstDate = this.fnc_SubStr(sNowDate, 0, 6) + "01";
        	
        	this.calSHRSLIP_DATE1.set_value(sFirstDate);
        	this.calSHRSLIP_DATE2.set_value(sNowDate);
        	
        	if (this.sUSERLAVEL != '1') {

        		this.fnc_SetReadonly(this.imgHelpDEPT_CODE, true);
        		this.fnc_SetReadonly(this.edtSHRDEPT_NAME, true);
        		this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        		this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);

        	} else if (this.sUSERLAVEL == '1') {

        		this.fnc_SetReadonly(this.imgHelpDEPT_CODE, false);
        		this.fnc_SetReadonly(this.edtSHRDEPT_NAME, false);
        		this.edtSHRDEPT_CODE.set_value("");
        		this.edtSHRDEPT_NAME.set_value("");

        	}
        	
        	this.cmbSHRCOND_CODE_onitemchanged();
        		
        	this.cmbSHRACCT_UNIT.setFocus();

        }
         
        /*----------------------------------+
         |  01.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        /*-----------------------+
         |  02.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e){

        	if (!this.fn_SearchItemCheck())	return;
        	this.sPageIndex = 1;
        	this.sPageSize = nexacro.toNumber(application.GBL_PAGESIZE);
        	this.fnc_DatasetClear("dsTA_SLIPNT");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT.setFocus();
        	
        }

        /*-----------------------------+
         |  03.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e){
        	//기능없음
        }

        /*-----------------------------+
         |  04.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  05.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e){

        	this.fnc_DataSetCancel("dsTA_SLIPNT");
        	this.dsTA_SLIPNT.setFocus();

        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  07.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e){

        	this.fnc_ToExcel(this); //Export 할 화면 Call

        }

        /*-----------------------+
         |  08.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e){

        	if (this.dsTA_SLIPNT.getRowCount() <= 0) {

        		this.fnc_Message("TMM125", "조회 후 인쇄하세요"); 
        		return;

        	}

        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; 
        	application.GBL_RPTFILENAME = "fama0120.jrf"; 

        	application.GBL_RPTARGUMENT = 'sArg001,' + this.fnc_Trim(this.cmbSHRACCT_GUBN.text) + "^";

        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg002,' + this.calSHRSLIP_DATE1.value + "^";
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg003,' + this.calSHRSLIP_DATE2.value + "^";

        	if (!this.IsNull(this.edtSHRDEPT_CODE.value)) {

        		application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg004,' + this.fnc_Trim(this.edtSHRDEPT_CODE.value) + "^";
        		application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg005,' + this.fnc_Trim(this.edtSHRDEPT_NAME.value) + "^";

        	}

        	application.GBL_RPTDATASET = "dsTA_SLIPNT";
        	application.GBL_PRINT = 'Y';

        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	application.dialog("전표상세조회", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        }

        
        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT", this);
        		
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
        this.fn_EditFocus = function (obj){

        	this.fnc_EditFocus(obj);

        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-------------------+
         /  조회 여부 체크!   /
         +--------------------*/
        this.fn_SearchItemCheck = function ()
        {

        	if (this.fnc_Length(this.cmbSHRACCT_UNIT.text) < 1 ) {
        		return this.fnc_SearchCheckPostAction("TMM008", "회계단위", this.cmbSHRACCT_UNIT);
        	}
        	
        	if (this.fnc_IsDate(this.calSHRSLIP_DATE1.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM072", "전표시작일자", this.calSHRSLIP_DATE1);
        	}

        	if (this.fnc_IsDate(this.calSHRSLIP_DATE2.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM072", "전표종료일자", this.calSHRSLIP_DATE2);
        	}

        	if (this.calSHRSLIP_DATE1.value > this.calSHRSLIP_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "전표시작일자,전표종료일자", this.calSHRSLIP_DATE2);
        	}

        	return true;

        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (){
        	//기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){
        	//기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind)
        {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " SLIP_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSLIP_GUBN.value));
        		sReturnString += " ACCT_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		sReturnString += " EVID_DOCU="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVID_DOCU.value));
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " USEX_DEPT="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRUSEX_DEPT.value));
        		sReturnString += " CSTC_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCSTC_CODE.value));
        		sReturnString += " RECE_YSNO="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRECE_YSNO.value));
        		sReturnString += " APPR_YSNO="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPR_YSNO.value));
        		sReturnString += " DRCR_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDRCR_GUBN.value));
        		sReturnString += " REMK_NAME="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRREMK_NAME.value));
        		sReturnString += " COND_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCOND_CODE.value));
        		sReturnString += " COND_VACD="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCOND_VACD.value));
        		sReturnString += " SLIP_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE1.value));
        		sReturnString += " SLIP_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSLIP_DATE2.value));
        		sReturnString += " ACCT_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value));
        		sReturnString += " ACCT_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value));
        		sReturnString += " ACCT_INTL1=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL1.value));
        		sReturnString += " ACCT_INTL2=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL2.value));
        		sReturnString += " SLIP_AMNT1=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRSLIP_AMNT1.value));
        		sReturnString += " SLIP_AMNT2=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRSLIP_AMNT2.value));
        		sReturnString += " FORI_AMNT1=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRFORI_AMNT1.value));
        		sReturnString += " FORI_AMNT2=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRFORI_AMNT2.value));
        		
        		sReturnString += " PAGE_INDX=" + this.fnc_Quote(this.sPageIndex);
        		sReturnString += " PAGE_SIZE=" + this.fnc_Quote(this.sPageSize); 
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
        this.fn_PostProcess = function (sMethodName)
        {
        	if (sMethodName == "SEARCH00") 
        	{

        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHRDRCR_GUBN,dsDRCR_GUBN,0";
        			arrParam[2] = "COMBO,cmbSHREVID_DOCU,dsSHREVID_DOCU,0";
        			arrParam[3] = "COMBO,cmbSHRAPPR_YSNO,dsAPPR_YSNO,0";
        			arrParam[4] = "GRID,grdTA_SLIPNT,dsEVID_DOCU,EVID_DOCU";
        			arrParam[5] = "GRID,grdTA_SLIPNT,dsVATX_TYPE,VATX_TYPE";
        			arrParam[6] = "GRID,grdTA_SLIPNT,dsPURC_GUBN,PURC_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsACCT_GUBN,0";
        			arrParam[1] = "COMBO,cmbSHRCOND_CODE,dsCOND_CODE,0";
        			arrParam[2] = "COMBO,cmbSHRSLIP_GUBN,dsSHRSLIP_GUBN,0";
        			arrParam[3] = "GRID,grdTA_SLIPNT,dsSLIP_GUBN,SLIP_GUBN";
        		this.fnc_UserComboInnerBind(arrParam);

        	}

        }

        /*----------------------------------------------------------------+
         | Help Popup Open                     |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj){

        	var arrParam = new Array();

            if ((obj.name == "imgHelpDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

                arrParam[0] = "FAM0001";       
                arrParam[1] = "";    
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDEPT_NAME";
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
                arrParam[6] = "0,1";
        		
            } else if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")){
           
        		arrParam[0] = "FAM0011";       
                arrParam[1] = "";    
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); 
                arrParam[3] = "N";
                arrParam[4] = "edtSHREMPL_NAME";
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
                arrParam[6] = "0,1";
              
            } else if ((obj.name == "imgHelpACCT_INTL1") || (obj.name == "edtSHRACCT_NAME1")) {
            
        		arrParam[0] = "FAM0032";       
        		arrParam[1] = "";    
        		arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME1.value); 
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRACCT_NAME1";   
            
        		if (this.fnc_Length(this.edtSHRACCT_INTL2.text) < 1){

        			arrParam[5] = "edtSHRACCT_INTL1,edtSHRACCT_NAME1,edtSHRACCT_INTL2,edtSHRACCT_NAME2";
        			arrParam[6] = "0,1,0,1";
        				
        		} else {

        			arrParam[5] = "edtSHRACCT_INTL1,edtSHRACCT_NAME1";
        			arrParam[6] = "0,1";

        		}
        		
            } else if ((obj.name == "imgHelpACCT_INTL2") || (obj.name == "edtSHRACCT_NAME2")) {

                arrParam[0] = "FAM0032";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME2.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACCT_NAME2";
                arrParam[5] = "edtSHRACCT_INTL2,edtSHRACCT_NAME2";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpDEPT_COD1") || (obj.name == "edtSHRDEPT_NAM1")){
           
        		arrParam[0] = "FAM0001";       
                arrParam[1] = "D%";    
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAM1.value); 
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDEPT_NAM1";
                arrParam[5] = "edtSHRUSEX_DEPT,edtSHRDEPT_NAM1";
                arrParam[6] = "0,1";
              
            } else if ((obj.name == "imgHelpSHRCOND_VACD") || (obj.name == "edtSHRCOND_VANM")) {

        	    //관리항목
        		var sCOMB_IDXX = this.dsCOND_CODE.getColumn(this.dsCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMB_IDXX");
        		var sCOMM_CODE = this.dsCOND_CODE.getColumn(this.dsCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMM_CODE");

                arrParam[0] = sCOMB_IDXX;  
        		arrParam[1] = sCOMM_CODE;
                arrParam[2] = this.fnc_Trim(this.edtSHRCOND_VANM.value); 
                arrParam[3] = "N";
                arrParam[4] = "edtSHRCOND_VANM";
                arrParam[5] = "edtSHRCOND_VACD,edtSHRCOND_VANM";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpCSTC_CODE") || (obj.name == "edtSHRCSTC_NAME")){
           
        		arrParam[0] = "BDM0008";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRCSTC_NAME.value); 
                arrParam[3] = "N";
                arrParam[4] = "edtSHRCSTC_NAME";
                arrParam[5] = "edtSHRCSTC_CODE,edtSHRCSTC_NAME";
                arrParam[6] = "0,1";
              
            }
            
            if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
            
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                               *
         **************************************************************************************************/
        this.cmbSHRCOND_CODE_onitemchanged = function(obj,e) {	    
        	
        	//관리항목 초기화
        	this.edtSHRCOND_VACD.set_value(""); 
        	this.edtSHRCOND_VANM.set_value("");
        	
        	//관리항목
        	var sCOMB_IDXX = this.dsCOND_CODE.getColumn(this.dsCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMB_IDXX");
        	
        	if (this.fnc_Trim(sCOMB_IDXX) < 1) {
        		
        		this.fnc_SetReadonly(this.edtSHRCOND_VACD, false);
        		this.imgHelpSHRCOND_VACD.set_visible(false);
        		this.edtSHRCOND_VANM.set_visible(false);
        		
        	} else {
        		
        		this.fnc_SetReadonly(this.edtSHRCOND_VACD, true);
        		this.imgHelpSHRCOND_VACD.set_visible(true);
        		this.edtSHRCOND_VANM.set_visible(true);
        		
        	}

        }

        /*===============================================================
         전표조회
         ===============================================================*/
        this.grdTA_SLIPNT_oncelldblclick = function(obj,e){
            
            var columnName = this.fnc_getColId(obj, e.cell);
                
        	if (columnName != "DISP_NUMB") return;
        	    
        	var sSlipNumb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");
        	var sSlipLine = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");
        	
        	if (this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0) {
        		this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	}	
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_oncelldblclick, this);
            this.edtSHRCOND_VANM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOND_VANM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCOND_VACD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCOND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCOND_CODE.addEventHandler("onitemchanged", this.cmbSHRCOND_CODE_onitemchanged, this);
            this.mskSHRFORI_AMNT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSHRFORI_AMNT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSHRSLIP_AMNT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSHRSLIP_AMNT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPPR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRECE_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRREMK_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHREVID_DOCU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRDRCR_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSLIP_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSLIP_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAM1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAM1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRUSEX_DEPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_INTL1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCOND_VACD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpDEPT_COD1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpACCT_INTL1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpACCT_INTL2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRACCT_NAME1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCSTC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpCSTC_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCSTC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCSTC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("FAMB0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
