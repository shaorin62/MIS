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
                this.set_name("TRME0030");
                this.set_titletext("법인카드 청구내역 및 전표처리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CARD_KIND</Col><Col id=\"DSNAME\">dsSHRCARD_KIND</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\"/></Row><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsBANK_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\"/></Row><Row><Col id=\"DSNAME\">dsSHRCSPS_CODE</Col><Col id=\"CODEID\">CSPS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\"/></Row><Row><Col id=\"DSNAME\">dsCSPS_CODE</Col><Col id=\"CODEID\">CSPS_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row><Row><Col id=\"DSNAME\">dsCARD_KIND</Col><Col id=\"CODEID\">CARD_KIND</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row><Row><Col id=\"DSNAME\">dsAPPR_GUBN</Col><Col id=\"CODEID\">APPR_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CARDBM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"CSPS_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_APPR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_NUMB\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"DMND_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DIFF_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_FEEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"HALB_TERM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"HALB_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CREA_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CREA_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"DIFF_ACCTNM\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"DIFF_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"0\" prop=\"default\" type=\"STRING\"/><Column id=\"CHK_GUBN\" size=\"256\" prop=\"default\" type=\"INT\"/><Column id=\"APPR_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_MONT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_SEQU\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BANK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_ACNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_OWNE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BABR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_GROUP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"LSLI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"LSLI_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPR_SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BSLI_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSLI_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_BSLI\" type=\"STRING\" size=\"256\"/><Column id=\"BILL_SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SLIP_DIFF_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CARD_NUM2\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SLIP_DIFF_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CREA_APPS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMAIN_TA_CARDBM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"CSPS_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_APPR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_NUMB\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"DMND_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DIFF_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_FEEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"HALB_TERM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"HALB_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CREA_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CREA_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"DIFF_ACCTNM\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"DIFF_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"0\" prop=\"default\" type=\"STRING\"/><Column id=\"CHK_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_MONT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_SEQU\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BANK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_ACNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_OWNE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BABR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_GROUP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"LSLI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"LSLI_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPR_SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BSLI_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSLI_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_BSLI\" type=\"STRING\" size=\"256\"/><Column id=\"BILL_SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SLIP_DIFF_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CARD_NUM2\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"GW_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SLIP_DIFF_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btnCREATE_SLIP", "absolute", null, "139", "74", "21", "101", null, this);
            obj.set_taborder("19");
            obj.set_text("전표처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", null, "139", "68", "21", "308", null, this);
            obj.set_text("전표일자");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSLIP_DATE", "absolute", null, "139", "106", "21", "200", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static13", "absolute", null, "139", "74", "21", "680", null, this);
            obj.set_text("선택건수");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCHK_CNT", "absolute", null, "139", "76", "21", "609", null, this);
            obj.set_taborder("9");
            obj.set_mask("#,###");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", null, "139", "98", "21", "504", null, this);
            obj.set_text("정리금액합계");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAMNT_SUM", "absolute", null, "139", "116", "21", "392", null, this);
            obj.set_taborder("10");
            obj.set_mask("#,###");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCARD_KIND", "absolute", "870", "97", "71", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static05", "absolute", "800", "97", "68", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("카드구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACNT_BANK", "absolute", "431", "97", "101", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACNT_NUMB", "absolute", "288", "97", "118", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCARD_NAME", "absolute", "447", "71", "85", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRCARD_NUMB", "absolute", "288", "71", "134", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "219", "71", "68", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("카드번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "219", "97", "68", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("계좌번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "709", "71", "77", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "614", "71", "70", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "545", "71", "64", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("관리부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "709", "97", "77", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "614", "97", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "545", "97", "40", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCSPS_CODE", "absolute", "123", "97", "83", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static4", "absolute", "29", "97", "96", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("전표처리상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "29", "71", "88", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("청구년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("imgSHRCARD_NUMB", "absolute", "424", "71", "21", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_NAME", "absolute", "686", "71", "22", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgACNT_NUMB", "absolute", "408", "97", "21", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NAME", "absolute", "686", "97", "22", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACNT_BANK2", "absolute", null, "810", "131", "21", "209", null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("21");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "810", "57", "21", "148", null, this);
            obj.set_text("금융기관");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBANK_GUBN2", "absolute", null, "810", "110", "21", "36", null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CONM");
            obj.set_innerdataset("dsBANK_GUBN");
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("imgACNT_NUMB2", "absolute", "824", null, "22", "21", null, "-114", this);
            obj.set_taborder("39");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", null, "810", "66", "21", "496", null, this);
            obj.set_text("계좌번호");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACNT_NUMB2", "absolute", null, "810", "129", "21", "365", null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_maxlength("30");
            obj.set_taborder("20");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Button("btnDELETE_SLIP", "absolute", null, "139", "74", "21", "25", null, this);
            obj.set_taborder("40");
            obj.set_text("전표삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "34", "285", "22", null, null, this);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_text("법인카드 청구내역 대사 및 전표처리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("42");
            obj.set_text("홈 >재무관리>자금관리>법인카드관리>법인카드 청구내역 대사 및 전표처리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("43");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "667", "56", "128", "4", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "69", "30", "47", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

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

            obj = new Static("stInformation", "absolute", "8", "143", "262", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("54");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "229", "129", "80", "35", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "139", "7", "21", "181", null, this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "987", "131", "12", "23", null, null, this);
            obj.set_taborder("57");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1000", "131", "12", "23", null, null, this);
            obj.set_taborder("58");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRBILL_MONT", "absolute", "123", "71", "83", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnCheck", "absolute", "124", "35", "74", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("범위선택");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnBicnet", "absolute", "8", "35", "114", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("청구내역 가져오기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnProc10", "absolute", "261", "35", "185", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("이전카드번호로청구내역변경");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "952", "97", "78", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRCHIN_NUMB", "absolute", "1035", "97", "95", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "800", "71", "64", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_text("가맹점명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCHIN_NAME", "absolute", "870", "71", "170", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_CARDBM", "absolute", "8", "164", null, null, "25", "15", this);
            obj.set_selecttype("multirow");
            obj.set_autoenter("none");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("sCommonGubnonheadclick").set("");
            obj.set_taborder("12");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_binddataset("dsTA_CARDBM");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" displaytype=\"text\" text=\"처리상태\"/><Cell col=\"2\" displaytype=\"text\" text=\"카드구분\"/><Cell col=\"3\" displaytype=\"text\" text=\"카드번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"승인일\"/><Cell col=\"5\" displaytype=\"text\" text=\"승인번호\"/><Cell col=\"6\" displaytype=\"text\" text=\"승인구분\"/><Cell col=\"7\" displaytype=\"text\" text=\"가맹점명\"/><Cell col=\"8\" displaytype=\"text\" text=\"사용자\"/><Cell col=\"9\" displaytype=\"text\" text=\"청구금액\"/><Cell col=\"10\" displaytype=\"text\" text=\"승인금액\"/><Cell col=\"11\" displaytype=\"text\" text=\"차액\"/><Cell col=\"12\" displaytype=\"text\" text=\"승인자동전표번호\"/><Cell col=\"13\" displaytype=\"text\" text=\"결재상태\"/><Cell col=\"14\" displaytype=\"text\" text=\"승인전표금액\"/><Cell col=\"15\" displaytype=\"text\" text=\"승인전표금액차이\"/><Cell col=\"16\" displaytype=\"text\" text=\"청구자동전표번호\"/><Cell col=\"17\" displaytype=\"text\" text=\"청구전표금액\"/><Cell col=\"18\" displaytype=\"text\" text=\"전표금액차이\"/><Cell col=\"19\" displaytype=\"text\" text=\"발생계정과목\"/><Cell col=\"20\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"적요\"/><Cell col=\"21\" displaytype=\"text\" text=\"카드결제계좌번호\"/><Cell col=\"22\" displaytype=\"text\" text=\"은행\"/><Cell col=\"23\" displaytype=\"text\" text=\"가맹점사업자번호\"/><Cell col=\"24\" displaytype=\"text\" text=\"이용수수료\"/><Cell col=\"25\" displaytype=\"text\" text=\"할부기간\"/><Cell col=\"26\" displaytype=\"text\" text=\"할부회차\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:Eco.decode(CHK_GUBN, 1, &quot;text&quot;, &quot;checkbox&quot;)\" edittype=\"expr:Eco.decode(CHK_GUBN, 1, &quot;none&quot;, &quot;checkbox&quot;)\" style=\"align:center;\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:CSPS_CODE\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:CARD_KIND\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;\" text=\"bind:CARD_NUM2\" mask=\"####-####\"/><Cell col=\"4\" displaytype=\"date\" style=\"align: center;\" text=\"bind:APPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:CARD_APPR\"/><Cell col=\"6\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:APPR_GUBN\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CHIN_NAME\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DMND_AMOT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:APPR_AMNT\" editlimit=\"30\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DIFF_AMNT\" editlimit=\"50\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: center;\" text=\"bind:CREA_NUMB\" expr=\"CREA_NUMB+CREA_LINE\"/><Cell col=\"13\" displaytype=\"text\" style=\"align:center;\" text=\"bind:CREA_APPS\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:APPR_SLIP_AMNT\" editlimit=\"30\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:APPR_SLIP_DIFF_AMNT\" editlimit=\"30\"/><Cell col=\"16\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SLIP_NUMB\" expr=\"SLIP_NUMB+SLIP_LINE\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BILL_SLIP_AMNT\" editlimit=\"30\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_DIFF_AMNT\" editlimit=\"30\"/><Cell col=\"19\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"20\" displaytype=\"text\" edittype=\"expr:Eco.decode(CSPS_CODE, &quot;1&quot;, &quot;none&quot;, &quot;normal&quot;)\" style=\"align: left;\" text=\"bind:REMK_NOTE\" editlimit=\"-1\" editimemode=\"native\"/><Cell col=\"21\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACNT_NUMB\"/><Cell col=\"22\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:BANK_GUBN\"/><Cell col=\"23\" displaytype=\"text\" style=\"align: center;\" text=\"bind:CHIN_NUMB\" mask=\"###-##-#####\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;\" text=\"bind:USEX_FEEX\"/><Cell col=\"25\" displaytype=\"text\" style=\"align:right;\" text=\"bind:HALB_TERM\" editlimit=\"2\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" text=\"bind:HALB_NUMB\" editlimit=\"30\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" style=\"align:center;\" text=\"합계\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;DMND_AMOT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;APPR_AMNT&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;DIFF_AMNT&quot;)\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;APPR_SLIP_AMNT&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;APPR_SLIP_DIFF_AMNT&quot;)\"/><Cell col=\"16\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;BILL_SLIP_AMNT&quot;)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_DIFF_AMNT&quot;)\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 285, 22, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("법인카드 청구내역 및 전표처리");
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
        this.addIncludeScript("TRME0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRME0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRME0030 법인카드 청구내역 및 전표처리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		김준수		Initial Created.
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
        this.sBUTTONLIST  = "TTFFTTTF"; 
        this.sPACKAGENAME = "TRME0030"; 
        this.aKeyValue    = new Array(5);
        this.sSLIP_NUMB 	= "";

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

        	var sNowDate = this.fnc_GetServerDateTime("DATE");
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.fnc_FormatSlipNumber(this.grdTA_CARDBM, "CREA_NUMB", "Y");
        	this.fnc_FormatSlipNumber(this.grdTA_CARDBM, "SLIP_NUMB", "Y");
        	
        	this.divSHRBILL_MONT.fn_SetMonth(this.fnc_SubStr(sNowDate, 0, 6)); //청구년
        	this.calSLIP_DATE.set_value(this.fnc_SubStr(sNowDate, 0, 8));	 //전표일자
        	
        	this.btnBicnet.set_visible(false);
        	if (this.sUSERLAVEL <= "3") this.btnBicnet.set_visible(true);
        	
        	this.divSHRBILL_MONT.setFocus();
        	
        }

        /*----------------------------------+
         |  03.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  04.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.fnc_DatasetClear("dsTA_CARDBM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_CARDBM=dsTA_CARDBM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_CARDBM.setFocus(); 

        }

        /*-----------------------------+
         |  05.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*-----------------------------+
         |  06.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        }

        /*-----------------------+
         |  07.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTA_CARDBM"); 
        	this.grdTA_CARDBM.setFocus(); 
        }

        /*-----------------------+
         |  08.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck())return;

        	this.aKeyValue[0] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "BILL_DATE");
        	this.aKeyValue[1] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "CARD_NUMB");
        	this.aKeyValue[2] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "APPR_DATE");
        	this.aKeyValue[3] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "CARD_APPR");
        	this.aKeyValue[4] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "APPR_GUBN");

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_CARDBM=dsTA_CARDBM:U";
        	var sOutDataSet = "dsTA_CARDBM=dsTA_CARDBM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_CARDBM.setFocus(); 
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
         |  11.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
         this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_CARDBM", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

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
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_CARDBM")) return this.fnc_Message("TMM023");
        	
        	if (this.fnc_Length(this.fnc_Trim(this.divSHRBILL_MONT.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "청구년월", this.divSHRBILL_MONT);
        	}
        	
        	return true;
        }
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	
        	if (!this.fnc_DatasetChangeCheck("dsTA_CARDBM")) { //법인카드등록
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var row = 0; row < this.dsTA_CARDBM.getRowCount(); row++) {
        	
        		if (this.fnc_ToUpper(this.dsTA_CARDBM.getRowType(row)) == Dataset.ROWTYPE_NORMAL)	continue;

        	}

        	return true;
        }
         
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {

        	var sQuestionText = "카드번호 (" + this.fnc_Trim(this.dsTA_CARDXM.getColumn(this.dsTA_CARDXM.rowposition, "CARD_NUMB")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*----------------------------+
         |  전표생성 필수 조건 체크!  |
         +----------------------------*/
        this.fn_CreateSlipItemCheck = function () {
        	
        	if (this.dsTA_CARDBM.getRowCount() < 1) return false;

        	if (this.fnc_DatasetChangeCheck("dsTA_CARDBM")) {
        		return this.fnc_Message("TMM015", "전표처리");
        	}

        	if (this.dsTA_CARDBM.getCaseCount("CHK==\"1\"") < 1) {
        		this.fnc_Message("TMM125", "전표를 생성할 자료를 선택하세요");
        		return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSLIP_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "전표일자", this.calSLIP_DATE);
        	}

        	// 필수 입력 항목 체크
        	for (var row = 0; row < this.dsTA_CARDBM.getRowCount(); row++) {
        	
        		if (this.dsTA_CARDBM.getColumn(row, "CHK") != "1") continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDBM.getColumn(row, "ACNT_NUMB"))) < 1) {
        		
        			var CARD_NUMB = this.dsTA_CARDBM.getColumn(row, "CARD_NUMB");
        			var sMsg = "카드결제계좌번호가 등록되지 않았습니다. \n\n법인카드 정보등록화면에서 카드번호[" + CARD_NUMB + "]에 결제계좌번호를 등록하고 다시 조회후 작업 하십시요";
        			return this.fnc_CheckPostAction("TMM125", sMsg, this.dsTA_CARDBM, i, this.grdTA_CARDBM, "CARD_NUMB");

        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDBM.getColumn(row, "REMK_NOTE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "적요", this.dsTA_CARDBM, row, this.grdTA_CARDBM, "REMK_NOTE");
        		}
        	}

        
        	this.fnc_DatasetClear("dsMAIN_TA_CARDBM");
        	
            // 선택한 대상만 복사
            //this.dsTA_CARDBM.set_enableevent(false);
            this.dsTA_CARDBM.filter("CHK=='1'");
            this.dsMAIN_TA_CARDBM.copyData(this.dsTA_CARDBM, true);
            this.dsTA_CARDBM.filter("");
            //this.dsTA_CARDBM.set_enableevent(true);
        	
        	return this.fnc_Message("TMM061", "전표일자 [" + this.calSLIP_DATE.text + "]로 선택한 자료의 자동전표");
        	
        }

        /*----------------------------+
         |  전표삭제 필수 조건 체크!  |
         +----------------------------*/
        this.fn_DeleteSlipItemCheck = function () {
            
            var sSlip_Numb = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "SLIP_NUMB");
        	var sQuestionText = "회계전표 " + this.fnc_GetMaskFormat(sSlip_Numb, application.GBL_SLIPMASK);
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    	+ this.fnc_Quote(sKind); 
        		sReturnString += " BILL_MONT=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRBILL_MONT.fn_GetMonth())); //청구년월
        		sReturnString += " CARD_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.mskSHRCARD_NUMB.value)); //카드번호
        		sReturnString += " ACNT_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACNT_NUMB.value)); //계좌번호
        		sReturnString += " CSPS_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCSPS_CODE.value)); //전표처리상태
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //사원
        		sReturnString += " CARD_KIND=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCARD_KIND.value)); //카드구분
                sReturnString += " CHIN_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.mskSHRCHIN_NUMB.value)); //사업자번호
                sReturnString += " CHIN_NAME="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCHIN_NAME.value)); //가맹점명

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    	+ this.fnc_Quote(sKind); 
        		sReturnString += " BILL_MONT=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRBILL_MONT.fn_GetMonth())); //청구년월
        		sReturnString += " CARD_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.mskSHRCARD_NUMB.value)); //카드번호
        		sReturnString += " ACNT_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACNT_NUMB.value)); //계좌번호
        		sReturnString += " CSPS_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCSPS_CODE.value)); //전표처리상태
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //사원

        	// 전표생성
        	} else if (sKind == "PROC10") {
        	
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    	+ this.fnc_Quote(sKind); 
        		sReturnString += " BILL_MONT=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRBILL_MONT.fn_GetMonth())); //청구년월
        		sReturnString += " CARD_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.mskSHRCARD_NUMB.value)); //카드번호
        		
        	} else if (sKind == "PROC00") {
        	
        		var sSous_Lnky = this.dsMAIN_TA_CARDBM.getColumn(0, "CARD_NUMB")
        				 + "-" + this.dsMAIN_TA_CARDBM.getColumn(0, "APPR_DATE")
        				 + "-" + this.dsMAIN_TA_CARDBM.getColumn(0, "CARD_APPR");
        				 
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    	+ this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote("10"); 
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote("100"); 									//사업장
        		sReturnString += " SLIP_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSLIP_DATE.value)); 	//전표발행일
        		sReturnString += " FORM_IDXX=" 	+ this.fnc_Quote(this.fnc_Trim(this.sPACKAGENAME)); 			//화면ID
        // 		sReturnString += " ACNT_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtACNT_NUMB2.value)); 	//보통예금계좌
        // 		sReturnString += " BANK_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbBANK_GUBN2.value)); 	//보통예금은행
                sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(application.GBL_EMPLNO);
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(application.GBL_DEPTCD);
        		sReturnString += " SLIP_GUBN=" 	+ this.fnc_Quote("TR012");	//법인카드정산전표
        		sReturnString += " TITL_NAME=" 	+ this.fnc_Quote("[법인카드정산] - " + this.calSLIP_DATE.value);
        		sReturnString += " SOUS_LNKY=" 	+ this.fnc_Quote(sSous_Lnky); //출처연결키

        	 } else if (sKind == "PROC01") {
            
                sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="    	+ this.fnc_Quote(sKind);
                sReturnString += " SLIP_NUMB=" 	+ this.fnc_Quote(this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "SLIP_NUMB")); //전표번호
        	
        	 } else if (sKind == "PROC02") {
            
                sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="    	+ this.fnc_Quote(sKind);
                sReturnString += " ITFC_TYPE="	+ this.fnc_Quote("CAR2");	//인터페이스유형
        	
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

        	if (sMethodName == "SEARCH00") {
        	
        		this.grdTA_CARDBM.setCellProperty("head", this.fnc_GridColumnIndex(this.grdTA_CARDBM, "CHK"), "text", "0");
        		this.fnc_Information(this.stInformation, this.dsTA_CARDBM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_CARDBM.rowcount); 
        		this.fn_Chk_Sum();
        		
        		var iRow = this.dsTA_CARDBM.findRowExpr("BILL_DATE=='" + this.aKeyValue[0] + "' && CARD_NUMB=='" + this.aKeyValue[1] + "'"
        										  + " && APPR_DATE=='" + this.aKeyValue[2] + "' && CARD_APPR=='" + this.aKeyValue[3] + "' && APPR_GUBN=='" + this.aKeyValue[4] + "'");
         		if (iRow < 0) iRow = 0;
         		
         		this.grdTA_CARDBM.clearSelect();
         		this.grdTA_CARDBM.selectRow(iRow);
         		this.dsTA_CARDBM.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";
        		this.aKeyValue[1] = "";
        		this.aKeyValue[2] = "";	
        		this.aKeyValue[3] = "";
        		this.aKeyValue[4] = "";
        	
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE"); 
        		this.grdTA_CARDBM.setCellProperty("head", this.fnc_GridColumnIndex(this.grdTA_CARDAM, "CHK"), "text", "0");
        		this.fnc_Message("TMM103"); 
        		this.dsTA_CARDBM.applyChange();
        		this.fn_Chk_Sum();

        	} else if (sMethodName == "PROC10") {
        	
        		this.fnc_Message("TMM130", "변경"); 
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC00") {
        		
        		this.fnc_Message("TMM130", "전표생성");
        		this.fn_Search();
        		this.fnc_ViewSlipForm(this.sSLIP_NUMB, "SHR", this.sUSERLAVEL); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		
        	} else if (sMethodName == "PROC01") {
        		
        		this.fnc_Message("TMM041"); 
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC02") {
        		
        		this.fnc_Message("TMM125", "청구내역 가져오기가 완료되었습니다"); 
        		//this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRCSPS_CODE,dsSHRCSPS_CODE,0";
        			arrParam[1] = "COMBO,cmbSHRCARD_KIND,dsSHRCARD_KIND,0";
        			arrParam[2] = "GRID,grdTA_CARDBM,dsCSPS_CODE,CSPS_CODE";
        			arrParam[3] = "GRID,grdTA_CARDBM,dsCARD_KIND,CARD_KIND";
        			arrParam[4] = "GRID,grdTA_CARDBM,dsAPPR_GUBN,APPR_GUBN";
        			arrParam[5] = "GRID,grdTA_CARDBM,dsBANK_GUBN,BANK_GUBN";
        			
        		this.fnc_CommonCodeInnerBind(arrParam); 

        	} 
        }

        /*----------------------------------------------------------------+
         | Help Popup Open                     |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
            
        	// 카드번호 
            if ((obj.name == "imgSHRCARD_NUMB") || (obj.name == "edtSHRCARD_NAME")) {

                arrParam[0] = "TRM0031";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRCARD_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRCARD_NAME";                         
                arrParam[5] = "mskSHRCARD_NUMB,edtSHRCARD_NAME";
                arrParam[6] = "0,1";
        	
        	//계좌번호
            } else if ((obj.name == "imgACNT_NUMB") || (obj.name == "edtACNT_BANK")) {

                arrParam[0] = "TRM0013";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtACNT_BANK.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtACNT_BANK";                         
                arrParam[5] = "edtSHRACNT_NUMB,edtACNT_BANK";         
                arrParam[6] = "2,3";

        	//부서
            } else if ((obj.name == "imgHelpSHRDEPT_NAME") || (obj.name == "edtSHRDEPT_NAME")) {

                arrParam[0] = "FAM0001";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRDEPT_NAME";                         
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";         
                arrParam[6] = "0,1";
        	
        	//사원
            } else if ((obj.name == "imgHelpSHREMPL_NAME") || (obj.name == "edtSHREMPL_NAME")) {

                arrParam[0] = "FAM0012";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHREMPL_NAME";                         
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";         
                arrParam[6] = "0,1";

        	} else if (obj.name == "grdTA_CARDBM") {
        		
        		var objDs 	= this.objects[obj.binddataset];
        		var iRow	= objDs.rowposition;
        		
        		// 연결항목조회
        		if (sColumnID == "CUST_NAME" || this.fnc_getColId(obj, obj.currentcell) == "CUST_NAME") {
        		
        			arrParam[0] = "CUST10";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTA_CARDBM";
        			arrParam[5] = "CUST_CODE,CUST_NAME,CUST_ACNT,CUST_BANK,CUST_OWNE";
        			arrParam[6] = "0,1,2,3,5";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		}
        	}
        	
        	if (this.fnc_Length(arrParam) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*------------------------+
         | 전표생성 버튼 클릭시  |
         +-------------------------*/
        this.btnCREATE_SLIP_onclick = function (obj,e) {

        	if (!this.fn_CreateSlipItemCheck()) return;

        	this.aKeyValue[0] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "BILL_DATE");
        	this.aKeyValue[1] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "CARD_NUMB");
        	this.aKeyValue[2] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "APPR_DATE");
        	this.aKeyValue[3] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "CARD_APPR");
        	this.aKeyValue[4] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "APPR_GUBN");
        	
        	var sMethodName = "PROC00";
        	var sInDataSet 	= "dsMAIN_TA_CARDBM=dsMAIN_TA_CARDBM:A";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_CARDBM.setFocus();
        	
        }

        /*------------------------+
         | 전표삭제 버튼 클릭시  |
         +-------------------------*/
        this.btnDELETE_SLIP_onclick = function(obj,e) {
        	
        	if (!this.fn_DeleteSlipItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "BILL_DATE");
        	this.aKeyValue[1] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "CARD_NUMB");
        	this.aKeyValue[2] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "APPR_DATE");
        	this.aKeyValue[3] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "CARD_APPR");
        	this.aKeyValue[4] = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "APPR_GUBN");
        	
            var sMethodName = "PROC01";
            var sInDataSet 	= "";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDBM.setFocus();
            
        }

        this.dsTA_CARDBM_oncolumnchanged = function (obj,e) {

        	if (e.oldvalue == e.newvalue) return;

        	this.fn_Chk_Sum();
        	
        	if (e.columnid == "CHK") {
        	
        		obj.set_enableevent(false);
        		obj.set_updatecontrol(false);

        		obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);

        		obj.set_updatecontrol(true);
        		obj.set_enableevent(true);

        	} else if (e.columnid == "CUST_NAME") {
        	
        		this.fn_HelpDialoge(this.grdTA_CARDBM, "YES", e.oldvalue, e.columnid);
        		
        	}
        }

        this.grdTA_CARDBM_oncelldblclick = function (obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	this.fn_SlipPopUp(columnName);
        	
        }

        // 전표팝업
        this.fn_SlipPopUp = function (columnName) {

        	var sSLIP_NUMB = "";
        	if (columnName != "CREA_NUMB" && columnName != "BSLI_NUMB" && columnName != "LSLI_NUMB" && columnName != "SLIP_NUMB") return;

        	// 전표번호
        	if (this.fnc_DatasetChangeCheck("dsTA_CARDBM")) {
        		return this.fnc_Message("TMM015", "전표조회");
        	}
        	
        	var sSlip_Numb = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, columnName);
        	var sSlip_Line;
        	if (columnName == "CREA_NUMB") {
        		sSlip_Line = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "CREA_LINE");
        	} else if (columnName == "BSLI_NUMB") {
        		sSlip_Line = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "BSLI_LINE");
        	} else if (columnName == "LSLI_NUMB") {
        		sSlip_Line = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "LSLI_LINE");
        	} else if (columnName == "SLIP_NUMB") {
        		sSlip_Line = this.dsTA_CARDBM.getColumn(this.dsTA_CARDBM.rowposition, "SLIP_LINE");
        	}
        	if (this.fnc_Length(sSlip_Numb) < 14) return;
        	
        	this.fnc_ViewSlipForm(sSlip_Numb, "SHR", this.sUSERLAVEL, "", sSlip_Line); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	
        }

        
        // 범위선택
        this.btnCheck_onclick = function (obj,e) {

        	if (!this.fn_ChkUpdate()) return;

        	this.dsTA_CARDBM.set_enableevent(false);
        	this.dsTA_CARDBM.set_updatecontrol(false);

        	for (var row = 0; row < this.dsTA_CARDBM.getRowCount(); row++) {
        	
        		//if (this.grdTA_CARDBM.getSelect(row) == true) {
        		if (this.grdTA_CARDBM.isSelectedCell(1, "Body", row) == true) {
        					
        			if (this.dsTA_CARDBM.getColumn(row, "CHK_GUBN") != "1") {			
        				this.dsTA_CARDBM.setColumn(row, "CHK", 1);
        				this.dsTA_CARDBM.setRowType(row, Dataset.ROWTYPE_NORMAL);
        			}
        		}
        	}

        	this.dsTA_CARDBM.set_updatecontrol(true);
        	this.dsTA_CARDBM.set_enableevent(true);
        	
        	this.fn_Chk_Sum();
        	
        }

        this.dsTA_CARDBM_cancolumnchange = function (obj,e) {

        	if (e.columnid == "CHK") {	
        		return this.fn_ChkUpdate();
        	}
        	return true;
        	
        }

        this.fn_ChkUpdate = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_CARDBM")) {
        		this.fnc_Message("TMM125", "변경된 데이터가 존재합니다. 저장 후 전표를 생성할 자료를 선택하세요");
        		return false;
        	}

        	return true;
        }

        /*-------------------------------+
         | 이전카드번호로청구내역변경 |
         +-------------------------------*/
        this.btnProc10_onclick = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.divSHRBILL_MONT.fn_GetMonth())) < 1) {
        		this.fnc_Message("TMM125", "청구연월을 선택하세요!!");
        		this.divSHRBILL_MONT.setFocus();
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.mskSHRCARD_NUMB.value)) < 1) {
        		this.fnc_Message("TMM125", "카드번호를 선택하세요!!");
        		this.mskSHRCARD_NUMB.setFocus();
        		return false;
        	}

        	var sMethodName = "PROC10";
        	var sInDataSet 	= "";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_CARDBM.setFocus();
        }

        // 선택한건의 합계를 구한다.
        this.fn_Chk_Sum = function () {

        	this.mskCHK_CNT.set_value(0);	//선택건수
        	this.mskAMNT_SUM.set_value(0);  // 정리금액합계

        	for (var row = 0; row < this.dsTA_CARDBM.getRowCount(); row++) {
        	
        		if (this.dsTA_CARDBM.getColumn(row, "CHK") != "1") continue;

        		var AMNT_SUM  = nexacro.toNumber(this.mskAMNT_SUM.value, 0); // 값을 숫자로 변환. 없으면 0 ㅎㅎ
        		var DMND_AMOT = nexacro.toNumber(this.dsTA_CARDBM.getColumn(row, "DMND_AMOT"), 0); //청구금액

        		this.mskAMNT_SUM.set_value((AMNT_SUM + DMND_AMOT));
        		this.mskCHK_CNT.set_value((nexacro.toNumber(this.mskCHK_CNT.value, 0) + 1));
        	}
        }

        
        this.grdTA_CARDBM_onheadclick = function(obj,e) {
        	
        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", "CHK")) ) return;
        	
        	if (!this.fn_ChkUpdate()) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}
        	
        	/* Dataset에 Value 일괄 설정 */
        	objDataSet.set_enableevent(false);
        	objDataSet.set_updatecontrol(false);
        	for (var i=0; i < objDataSet.rowcount; i++) {
        		
        		var sChk_Gubn = this.fnc_Trim(objDataSet.getColumn(i, "CHK_GUBN"));

        		if (sChk_Gubn != "1") {
        			objDataSet.setColumn(i, "CHK", iCheckValue);
        			objDataSet.setRowType(i, Dataset.ROWTYPE_NORMAL);
        		}
        		
        	}
        	objDataSet.set_updatecontrol(true);
        	objDataSet.set_enableevent(true);
        	
        	this.fn_Chk_Sum();
        		
        }

        this.dsTA_CARDBM_onrowposchanged = function(obj,e) {

            if (e.newrow == -1) return;

            var sCSPS_CODE = this.dsTA_CARDBM.getColumn(e.newrow, "CSPS_CODE");
            
            if (sCSPS_CODE == "0") {	// 미처리
                this.btnDELETE_SLIP.set_enable(false);
            } else {
                this.btnDELETE_SLIP.set_enable(true);
            }
        	
        }

        /*----------------------------+
         |	청구내역 가져오기 클릭 시 |
         +----------------------------*/
        this.btnBicnet_onclick = function(obj,e) {
        	
        	if (!this.fnc_Message("TMM140", "카드사의 법인카드 청구내역 자료를 가져오시겠습니까")) return;
        	
            var sMethodName = "PROC02";
            var sInDataSet 	= "";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_CARDBM.addEventHandler("oncolumnchanged", this.dsTA_CARDBM_oncolumnchanged, this);
            this.dsTA_CARDBM.addEventHandler("cancolumnchange", this.dsTA_CARDBM_cancolumnchange, this);
            this.dsTA_CARDBM.addEventHandler("onrowposchanged", this.dsTA_CARDBM_onrowposchanged, this);
            this.dsMAIN_TA_CARDBM.addEventHandler("oncolumnchanged", this.dsTA_CARDBM_oncolumnchanged, this);
            this.dsMAIN_TA_CARDBM.addEventHandler("cancolumnchange", this.dsTA_CARDBM_cancolumnchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnCREATE_SLIP.addEventHandler("onclick", this.btnCREATE_SLIP_onclick, this);
            this.calSLIP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCHK_CNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCHK_CNT.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.mskAMNT_SUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskAMNT_SUM.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.cmbSHRCARD_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_BANK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_BANK.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACNT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCARD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCARD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.mskSHRCARD_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCSPS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSHRCARD_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgACNT_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtACNT_BANK2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_BANK2.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.cmbBANK_GUBN2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgACNT_NUMB2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtACNT_NUMB2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnDELETE_SLIP.addEventHandler("onclick", this.btnDELETE_SLIP_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.divSHRBILL_MONT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnCheck.addEventHandler("onclick", this.btnCheck_onclick, this);
            this.btnBicnet.addEventHandler("onclick", this.btnBicnet_onclick, this);
            this.btnProc10.addEventHandler("onclick", this.btnProc10_onclick, this);
            this.mskSHRCHIN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCHIN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdTA_CARDBM.addEventHandler("oncelldblclick", this.grdTA_CARDBM_oncelldblclick, this);
            this.grdTA_CARDBM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdTA_CARDBM.addEventHandler("onheadclick", this.grdTA_CARDBM_onheadclick, this);

        };

        this.loadIncludeScript("TRME0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
