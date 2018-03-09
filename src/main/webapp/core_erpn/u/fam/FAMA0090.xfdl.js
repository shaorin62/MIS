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
                this.set_name("FAMA0090");
                this.set_titletext("금융계좌등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFA_ACNTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BABR_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BABR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_KIND\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OPER_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"MANG_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MANG_ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"CALC_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CALC_ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"OBAC_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"INTR_RATE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SWNG_ACCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPT_MONY\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CYCL_MONY\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PYMT_CYCL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DUEX_SEQN\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FBSU_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"FBSA_ALIS\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\">A</Col></Row><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsSHRBANK_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">은행코드</Col></Row><Row><Col id=\"CODEID\">ACNT_KIND</Col><Col id=\"DSNAME\">dsSHRACNT_KIND</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">OPER_GUBN</Col><Col id=\"DSNAME\">dsSHROPER_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsSHRUSEX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMARK\">은행코드 - 사용코드만(입력용)</Col></Row><Row><Col id=\"CODEID\">ACNT_KIND</Col><Col id=\"DSNAME\">dsACNT_KIND</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">OPER_GUBN</Col><Col id=\"DSNAME\">dsOPER_GUBN</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">PYMT_CYCL</Col><Col id=\"DSNAME\">dsPYMT_CYCL</Col><Col id=\"HEADFLAG\">E</Col></Row><Row><Col id=\"CODEID\">CURR_GUBN</Col><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMARK\">통화구분</Col></Row><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsUSEX_YSNO</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMARK\">회계단위</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "132", "228", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("39");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFA_ACNTXM", "absolute", "8", "153", null, null, "25", "225", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFA_ACNTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("40");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"75\"/><Column size=\"50\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"회계단위\"/><Cell col=\"1\" displaytype=\"text\" text=\"계좌번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"계좌명\"/><Cell col=\"3\" displaytype=\"text\" text=\"금융지점명\"/><Cell col=\"4\" displaytype=\"text\" text=\"계좌유형\"/><Cell col=\"5\" displaytype=\"text\" text=\"운영구분\"/><Cell col=\"6\" displaytype=\"text\" text=\"통화\"/><Cell col=\"7\" displaytype=\"text\" text=\"관리부서\"/><Cell col=\"8\" displaytype=\"text\" text=\"관리계정과목\"/><Cell col=\"9\" displaytype=\"text\" text=\"개설일자\"/><Cell col=\"10\" displaytype=\"text\" text=\"금리\"/><Cell col=\"11\" displaytype=\"text\" text=\"만기일자\"/><Cell col=\"12\" displaytype=\"text\" text=\"납입주기\"/><Cell col=\"13\" displaytype=\"text\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align:center;\" text=\"bind:ACCT_UNIT\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ACNT_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ACNT_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:BABR_NAME\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:ACNT_KIND\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:OPER_GUBN\"/><Cell col=\"6\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:CURR_GUBN\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:DEPT_NAME\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MANG_ACCT_NAME\"/><Cell col=\"9\" displaytype=\"date\" style=\"align:center;\" text=\"bind:OBAC_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INTR_RATE\"/><Cell col=\"11\" displaytype=\"date\" style=\"align:center;\" text=\"bind:EXPN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:PYMT_CYCL\"/><Cell col=\"13\" displaytype=\"checkbox\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBANK_CODE", "absolute", "321", "71", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("search");
            obj.set_autoselect("true");

            obj = new Combo("cmbSHRACNT_KIND", "absolute", "521", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "100", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Combo("cmbSHROPER_GUBN", "absolute", "739", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Edit("edtSHRMANG_ACCT", "absolute", "321", "97", "80", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_maxlength("10");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMANG_ACNM", "absolute", "426", "97", "215", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_YSNO", "absolute", "100", "97", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Static("title01", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "670", "71", "80", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("운영구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "249", "71", "70", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("금융기관");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "453", "71", "70", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("계좌유형");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "249", "97", "70", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("관리계정");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "28", "97", "70", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("사용여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACNT_NAME", "absolute", "739", "97", "120", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "670", "97", "80", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("계좌명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "8", null, null, "195", "25", "15", this);
            obj.set_taborder("50");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbOPER_GUBN", "absolute", "388", null, "130", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemCombo");

            obj = new Edit("edtACNT_NUMB", "absolute", "388", null, "130", "21", null, "180", this);
            obj.set_taborder("9");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_selectbackground("#a3daffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACNT_NAME", "absolute", "663", null, "225", "21", null, "180", this);
            obj.set_taborder("10");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPYMT_CYCL", "absolute", "663", null, "120", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_cssclass("styFormItemCombo");

            obj = new Calendar("calEXPN_DATE", "absolute", "663", null, "120", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtDEPT_NAME", "absolute", "808", null, "184", "21", null, "50", this);
            obj.set_taborder("31");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "663", null, "120", "21", null, "50", this);
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBABR_CODE", "absolute", "663", null, "80", "21", null, "154", this);
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBABR_NAME", "absolute", "768", null, "120", "21", null, "154", this);
            obj.set_taborder("15");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkUSEX_YSNO", "absolute", "388", null, "107", "21", null, "24", this);
            obj.set_taborder("33");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCURR_GUBN", "absolute", "129", null, "120", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemCombo");

            obj = new Calendar("calOBAC_DATE", "absolute", "129", null, "120", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbACNT_KIND", "absolute", "129", null, "120", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemCombo");

            obj = new Edit("edtINTE_ACCT", "absolute", "129", null, "120", "21", null, "50", this);
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", null, "100", "21", null, "180", this);
            obj.set_taborder("58");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbACCT_UNIT", "absolute", "129", null, "120", "21", null, "180", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static23", "absolute", "294", null, "100", "21", null, "180", this);
            obj.set_taborder("59");
            obj.set_text("계좌번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "568", null, "108", "21", null, "180", this);
            obj.set_taborder("60");
            obj.set_text("계좌명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "918", null, "100", "21", null, "154", this);
            obj.set_taborder("61");
            obj.set_text("금융기관");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "28", null, "100", "21", null, "154", this);
            obj.set_taborder("62");
            obj.set_text("계좌유형");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "294", null, "100", "21", null, "154", this);
            obj.set_taborder("63");
            obj.set_text("계좌운영구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "568", null, "108", "21", null, "154", this);
            obj.set_taborder("64");
            obj.set_text("금융지점");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCYCL_MONY", "absolute", "388", null, "130", "21", null, "102", this);
            obj.set_taborder("21");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskINTR_RATE", "absolute", "388", null, "130", "21", null, "128", this);
            obj.set_taborder("17");
            obj.set_mask("!0.000");
            obj.set_autoselect("true");
            obj.set_limitbymask("both");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskEXPT_MONY", "absolute", "129", null, "120", "21", null, "102", this);
            obj.set_taborder("20");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDESC_REMK", "absolute", "663", null, null, "21", "46", "24", this);
            obj.set_taborder("34");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMANG_ACCT_NAME", "absolute", "274", null, "184", "21", null, "76", this);
            obj.set_taborder("25");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMANG_ACCT", "absolute", "129", null, "120", "21", null, "76", this);
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSWNG_ACCT", "absolute", "1001", null, "140", "21", null, "128", this);
            obj.set_taborder("19");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCALC_ACCT", "absolute", "663", null, "120", "21", null, "76", this);
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDUEX_SEQN", "absolute", "1001", null, "140", "21", null, "102", this);
            obj.set_taborder("23");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBANK_CODE", "absolute", "1001", null, "140", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_displayrowcount("20");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_type("dropdown");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");

            obj = new Static("Static2", "absolute", "28", null, "100", "21", null, "76", this);
            obj.set_taborder("65");
            obj.set_text("관리계정과목");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "568", null, "108", "21", null, "76", this);
            obj.set_taborder("66");
            obj.set_text("정산계정과목");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "28", null, "100", "21", null, "128", this);
            obj.set_taborder("67");
            obj.set_text("개설일자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "28", null, "100", "21", null, "50", this);
            obj.set_taborder("68");
            obj.set_text("이자계정과목");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_color("#515151ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "568", null, "108", "21", null, "50", this);
            obj.set_taborder("69");
            obj.set_text("관리부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "918", null, "100", "21", null, "102", this);
            obj.set_taborder("70");
            obj.set_text("총불입회차");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "294", null, "100", "21", null, "128", this);
            obj.set_taborder("71");
            obj.set_text("금리");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "568", null, "108", "21", null, "128", this);
            obj.set_taborder("72");
            obj.set_text("만기일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "918", null, "100", "21", null, "128", this);
            obj.set_taborder("73");
            obj.set_text("차월한도");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "28", null, "100", "21", null, "102", this);
            obj.set_taborder("74");
            obj.set_text("만기금액");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "294", null, "100", "21", null, "102", this);
            obj.set_taborder("75");
            obj.set_text("주기불입액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "568", null, "108", "21", null, "102", this);
            obj.set_taborder("76");
            obj.set_text("납입주기");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staACCT_INTL", "absolute", "28", null, "100", "21", null, "24", this);
            obj.set_taborder("77");
            obj.set_text("통화");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("satCUST_CODE", "absolute", "294", null, "86", "21", null, "24", this);
            obj.set_taborder("78");
            obj.set_text("사용여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "568", null, "108", "21", null, "24", this);
            obj.set_taborder("79");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCALC_ACCT_NAME", "absolute", "808", null, "184", "21", null, "76", this);
            obj.set_taborder("27");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpBABR_CODE", "absolute", "745", null, "22", "21", null, "154", this);
            obj.set_taborder("80");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCALC_ACCT", "absolute", "785", null, "21", "21", null, "76", this);
            obj.set_taborder("81");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "785", null, "21", "21", null, "50", this);
            obj.set_taborder("82");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpMANG_ACCT", "absolute", "251", null, "21", "21", null, "76", this);
            obj.set_taborder("83");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpINTE_ACCT", "absolute", "251", null, "21", "21", null, "50", this);
            obj.set_taborder("84");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMANG_ACCT", "absolute", "403", "97", "22", "22", null, null, this);
            obj.set_taborder("85");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("87");
            obj.set_text("금융계좌등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("88");
            obj.set_text("홈 > 재무관리 > 기본정보 > 금융계좌등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("89");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("90");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("91");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("92");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("93");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("94");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("95");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("96");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "573", "492", "80", "15", null, null, this);
            obj.set_taborder("97");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("98");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1141", "515", "20", "167", null, null, this);
            obj.set_taborder("99");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtINTE_ACCT_NAME", "absolute", "274", null, "184", "21", null, "50", this);
            obj.set_taborder("100");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("102");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "9", "508", "30", "193", null, null, this);
            obj.set_taborder("103");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("금융계좌등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtASST_NAME_value","edtCALC_ACCT_NAME","value","dsFA_ACNTXM","CALC_ACCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cmbBANK_CODE","value","dsFA_ACNTXM","BANK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQU_DATE_value","mskDUEX_SEQN","value","dsFA_ACNTXM","DUEX_SEQN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASST_NUMB_value","edtCALC_ACCT","value","dsFA_ACNTXM","CALC_ACCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskUNDP_BALE_value","mskSWNG_ACCT","value","dsFA_ACNTXM","SWNG_ACCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_CODE_value","edtMANG_ACCT","value","dsFA_ACNTXM","MANG_ACCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_NAME_value","edtMANG_ACCT_NAME","value","dsFA_ACNTXM","MANG_ACCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDESC_REMK_value","edtDESC_REMK","value","dsFA_ACNTXM","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskCHNG_AMOT_value","mskEXPT_MONY","value","dsFA_ACNTXM","EXPT_MONY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQU_ENDX_value","mskINTR_RATE","value","dsFA_ACNTXM","INTR_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDSPS_AMOT_value","mskCYCL_MONY","value","dsFA_ACNTXM","CYCL_MONY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cmbACCT_UNIT","value","dsFA_ACNTXM","ACCT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtINTE_ACCT","value","dsFA_ACNTXM","INTE_ACCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cmbACNT_KIND","value","dsFA_ACNTXM","ACNT_KIND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","calOBAC_DATE","value","dsFA_ACNTXM","OBAC_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","cmbCURR_GUBN","value","dsFA_ACNTXM","CURR_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","chkUSEX_YSNO","value","dsFA_ACNTXM","USEX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtBABR_NAME","value","dsFA_ACNTXM","BABR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtBABR_CODE","value","dsFA_ACNTXM","BABR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtDEPT_CODE","value","dsFA_ACNTXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtDEPT_NAME","value","dsFA_ACNTXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","calEXPN_DATE","value","dsFA_ACNTXM","EXPN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cmbPYMT_CYCL","value","dsFA_ACNTXM","PYMT_CYCL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtACNT_NAME","value","dsFA_ACNTXM","ACNT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtACNT_NUMB","value","dsFA_ACNTXM","ACNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cmbOPER_GUBN","value","dsFA_ACNTXM","OPER_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtINTE_ACCT_NAME","value","dsFA_ACNTXM","INTE_ACCT_NAME");
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
        this.addIncludeScript("FAMA0090.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0090.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMA0090 금융계좌등록
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
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "FAMA0090";

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
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.cmbSHRUSEX_YSNO.set_value("1");

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
        	this.fnc_DatasetClear("dsFA_ACNTXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFA_ACNTXM=dsFA_ACNTXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFA_ACNTXM.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsFA_ACNTXM.addRow();
        	this.dsFA_ACNTXM.setColumn(iRow, "ACCT_UNIT", "10");   //회계단위
        	this.dsFA_ACNTXM.setColumn(iRow, "OBAC_DATE", this.fnc_GetServerDateTime("DATE")); //개설일자
        	this.dsFA_ACNTXM.setColumn(iRow, "INTR_RATE", 0);      //금리
        	this.dsFA_ACNTXM.setColumn(iRow, "SWNG_ACCT", 0);      //차월한도
        	this.dsFA_ACNTXM.setColumn(iRow, "EXPT_MONY", 0);      //만기금액
        	this.dsFA_ACNTXM.setColumn(iRow, "CYCL_MONY", 0);      //주기불입액
        	this.dsFA_ACNTXM.setColumn(iRow, "DUEX_SEQN", 0);      //총불입회차
        	this.dsFA_ACNTXM.setColumn(iRow, "FBSU_YSNO", "0");    //펌뱅킹(FBS)사용여부
        	this.dsFA_ACNTXM.setColumn(iRow, "USEX_YSNO", "1");    //사용여부
        	this.dsFA_ACNTXM.setColumn(iRow, "CURR_GUBN", "KRW");  //통화
        	this.edtACNT_NUMB.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsFA_ACNTXM.deleteRow(this.dsFA_ACNTXM.rowposition);
        	this.grdFA_ACNTXM.setFocus();

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsFA_ACNTXM");
        	this.grdFA_ACNTXM.setFocus();

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsFA_ACNTXM=dsFA_ACNTXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        	this.grdFA_ACNTXM.setFocus();

        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e) {
        	this.fnc_ToExcel(this);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFA_ACNTXM", this);
        		
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

        	if (this.fnc_DatasetChangeCheck("dsFA_ACNTXM")) {
        		return this.fnc_Message("TMM023");
        	}

        	if(this.fnc_Length(this.cmbSHRACCT_UNIT.text)<1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	return true;

        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (){

        	if (this.dsFA_ACNTXM.rowcount < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}

        	var sQuestionText  = "계좌번호: " + this.dsFA_ACNTXM.getColumn(this.dsFA_ACNTXM.rowposition, "ACNT_NUMB") + " ";
        		sQuestionText += "계좌명: "   + this.dsFA_ACNTXM.getColumn(this.dsFA_ACNTXM.rowposition, "ACNT_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck("dsFA_ACNTXM")){
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsFA_ACNTXM.rowcount; i++){
        		
        		if (this.dsFA_ACNTXM.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(i, "ACCT_UNIT"))) < 1){
        			return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsFA_ACNTXM, i, this.edtACCT_UNIT, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(i, "ACNT_NUMB"))) < 1){
        			return this.fnc_CheckPostAction("TMM072", "계좌번호", this.dsFA_ACNTXM, i, this.edtACNT_NUMB, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(i, "ACNT_NAME"))) < 1){
        			return this.fnc_CheckPostAction("TMM072", "계좌명", this.dsFA_ACNTXM, i, this.edtACNT_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(i, "ACNT_KIND"))) < 1){
        			return this.fnc_CheckPostAction("TMM072", "계좌유형", this.dsFA_ACNTXM, i, this.cmbACNT_KIND, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(i, "OPER_GUBN"))) < 1){
        			return this.fnc_CheckPostAction("TMM072", "계좌운영구분", this.dsFA_ACNTXM, i, this.cmbOPER_GUBN, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(i, "BABR_CODE"))) < 1){
        			return this.fnc_CheckPostAction("TMM072", "금융지점", this.dsFA_ACNTXM, i, this.edtBABR_NAME, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(i, "MANG_ACCT"))) < 1){
        			return this.fnc_CheckPostAction("TMM072", "관리계정과목", this.dsFA_ACNTXM, i, this.edtMANG_ACCT_NAME, "MANG_ACCT");
        		}
        		
        // 		if (this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(i, "INTE_ACCT"))) < 1){
        // 			return this.fnc_CheckPostAction("TMM072", "이자계정과목", this.dsFA_ACNTXM, i, this.edtINTE_ACCT_NAME, "INTE_ACCT");
        // 		}
        		
        		if (!this.fnc_IsDate(this.dsFA_ACNTXM.getColumn(i, "OBAC_DATE"))){
        			return this.fnc_CheckPostAction("TMM072", "개설일자", this.dsFA_ACNTXM, i, this.calOBAC_DATE, "");
        		}
        		
        // 		if (this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(i, "INTR_RATE"))) < 1){
        // 			return this.fnc_CheckPostAction("TMM072", "금리", this.dsFA_ACNTXM, i, this.mskINTR_RATE, "INTR_RATE");
        // 		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(i, "CURR_GUBN"))) < 1){
        			return this.fnc_CheckPostAction("TMM072", "통화", this.dsFA_ACNTXM, i, this.cmbCURR_GUBN, "");
        		}
        		
        	}
        	
        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind){

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " BANK_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRBANK_CODE.value));
        		sReturnString += " ACNT_KIND=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACNT_KIND.value));
        		sReturnString += " OPER_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHROPER_GUBN.value));
        		sReturnString += " USEX_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSEX_YSNO.value));
        		sReturnString += " MANG_ACCT=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMANG_ACCT.value));
        		sReturnString += " ACNT_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACNT_NAME.value));

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
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
        		
        		this.fnc_Information(this.stInformation, this.dsFA_ACNTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFA_ACNTXM.getCaseCount("dataset.getRowLevel(currow)==0"));		
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        			arrParam[1]  = "COMBO,cmbSHRBANK_CODE,dsSHRBANK_CODE,0";
        			arrParam[2]  = "COMBO,cmbSHRACNT_KIND,dsSHRACNT_KIND,0";
        			arrParam[3]  = "COMBO,cmbSHROPER_GUBN,dsSHROPER_GUBN,0";
        			arrParam[4]  = "COMBO,cmbSHRUSEX_YSNO,dsSHRUSEX_YSNO,0";
        			arrParam[5]  = "COMBO,cmbACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[6]  = "COMBO,cmbBANK_CODE,dsBANK_CODE,0";
        			arrParam[7]  = "COMBO,cmbACNT_KIND,dsACNT_KIND,0";
        			arrParam[8]  = "COMBO,cmbOPER_GUBN,dsOPER_GUBN,0";
        			arrParam[9]  = "COMBO,cmbPYMT_CYCL,dsPYMT_CYCL,0";
        			arrParam[10] = "COMBO,cmbCURR_GUBN,dsCURR_GUBN,0";
        			arrParam[11] = "GRID,grdFA_ACNTXM,dsACCT_UNIT,ACCT_UNIT";
        			arrParam[12] = "GRID,grdFA_ACNTXM,dsACNT_KIND,ACNT_KIND";
        			arrParam[13] = "GRID,grdFA_ACNTXM,dsOPER_GUBN,OPER_GUBN";
        			arrParam[14] = "GRID,grdFA_ACNTXM,dsCURR_GUBN,CURR_GUBN";
        			arrParam[15] = "GRID,grdFA_ACNTXM,dsPYMT_CYCL,PYMT_CYCL";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e){

        	if (e.newrow < 0)	return;
        	if (this.dsFA_ACNTXM.getRowCount() < 1) return;
        	
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT){
        		
        		this.fnc_SetReadonly(this.cmbACCT_UNIT, false);
        		this.fnc_SetReadonly(this.edtACNT_NUMB, false);
        			
        	} else {
        		
        		this.fnc_SetReadonly(this.cmbACCT_UNIT, true);
        		this.fnc_SetReadonly(this.edtACNT_NUMB, true);

        	}
        }
        /*---------------
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRMANG_ACCT") || (obj.name == "edtSHRMANG_ACNM")) {

                arrParam[0] = "FAM0031";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRMANG_ACNM.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRMANG_ACNM";                         
                arrParam[5] = "edtSHRMANG_ACCT,edtSHRMANG_ACNM";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

            } else if ((obj.name == "imgHelpBABR_CODE") || (obj.name == "edtBABR_NAME")) {

                arrParam[0] = "FAM0041";                                 
                arrParam[1] = "D%";                                       
                arrParam[2] = this.fnc_Trim(this.edtBABR_NAME.value); 
                arrParam[3] = "N";                                    
                arrParam[4] = "edtBABR_NAME";                         
                arrParam[5] = "edtBABR_CODE,edtBABR_NAME,cmbBANK_CODE";          
                arrParam[6] = "0,1,2";                                
                this.fnc_HelpDialogeAction(this, obj, arrParam);

            } else if ((obj.name == "imgHelpMANG_ACCT") || (obj.name == "edtMANG_ACCT_NAME")) {

                arrParam[0] = "FAM0031";
                arrParam[1] = "D%";
                arrParam[2] = this.fnc_Trim(this.edtMANG_ACCT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtMANG_ACCT_NAME";
                arrParam[5] = "edtMANG_ACCT,edtMANG_ACCT_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);

            } else if ((obj.name == "imgHelpINTE_ACCT") || (obj.name == "edtINTE_ACCT_NAME")) {

                arrParam[0] = "FAM0031";
                arrParam[1] = "D%";
                arrParam[2] = this.fnc_Trim(this.edtINTE_ACCT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtINTE_ACCT_NAME";
                arrParam[5] = "edtINTE_ACCT,edtINTE_ACCT_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);

            } else if ((obj.name == "imgHelpCALC_ACCT") || (obj.name == "edtCALC_ACCT_NAME")) {

                arrParam[0] = "FAM0031";
                arrParam[1] = "D%";
                arrParam[2] = this.fnc_Trim(this.edtCALC_ACCT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtCALC_ACCT_NAME";
                arrParam[5] = "edtCALC_ACCT,edtCALC_ACCT_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);

            } else if ((obj.name == "imgHelpDEPT_CODE") || (obj.name == "edtDEPT_NAME")) {

                arrParam[0] = "FAM0001";
                arrParam[1] = "D%";
                arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtDEPT_NAME";
                arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);

            }

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFA_ACNTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACNT_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHROPER_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMANG_ACNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMANG_ACNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACNT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbOPER_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbPYMT_CYCL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calEXPN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBABR_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBABR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBABR_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.chkUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCURR_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calOBAC_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbACNT_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtINTE_ACCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCYCL_MONY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskINTR_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskEXPT_MONY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDESC_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMANG_ACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMANG_ACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtMANG_ACCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSWNG_ACCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCALC_ACCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDUEX_SEQN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCALC_ACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCALC_ACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpBABR_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCALC_ACCT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpMANG_ACCT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpINTE_ACCT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRMANG_ACCT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtINTE_ACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtINTE_ACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("FAMA0090.xfdl");
        this.loadPreloadList();
       
    };
}
)();
