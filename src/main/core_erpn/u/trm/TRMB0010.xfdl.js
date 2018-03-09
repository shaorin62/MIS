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
                this.set_name("TRMB0010");
                this.set_titletext("금융상품관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFA_ACNTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACNT_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_KIND\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"OPER_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"MANG_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MANG_ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CALC_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CALC_ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OBAC_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"INTR_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SWNG_ACCT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPT_MONY\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CYCL_MONY\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PYMT_CYCL\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DUEX_SEQN\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"FITR_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTR_FITRXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TRAN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TRAN_TYPE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPO_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"WITH_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FITR_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTR_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTR_MARG\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PRPY_TAXA\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REAL_PAYX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MAJR_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OTHR_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OTHR_ACNT\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REOC_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_STAT\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">회계단위</Col><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsSHRBANK_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEDFLAG\">1</Col><Col id=\"REMK\">금융기관</Col></Row><Row><Col id=\"CODEID\">ACNT_KIND</Col><Col id=\"DSNAME\">dsSHRACNT_KIND</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">계좌유형</Col><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsSHRUSEX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">사용여부</Col><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">OPER_GUBN</Col><Col id=\"DSNAME\">dsSHROPER_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">운영구분</Col><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">회계단위</Col><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">금융기관</Col><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">ACNT_KIND</Col><Col id=\"DSNAME\">dsACNT_KIND</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">계좌유형</Col><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">OPER_GUBN</Col><Col id=\"DSNAME\">dsOPER_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">CURR_CODE</Col><Col id=\"DSNAME\">dsCURR_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">PYMT_CYCL</Col><Col id=\"DSNAME\">dsPYMT_CYCL</Col><Col id=\"HEADFLAG\"/><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">TRAN_TYPE</Col><Col id=\"DSNAME\">dsTRAN_TYPE</Col><Col id=\"HEADFLAG\"/><Col id=\"USEDFLAG\"/></Row><Row><Col id=\"CODEID\">APPV_STAT</Col><Col id=\"DSNAME\">dsAPPV_STAT</Col><Col id=\"HEADFLAG\"/><Col id=\"USEDFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "220", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFA_ACNTXM", "absolute", "8", "154", null, "252", "25", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("11");
            obj.set_binddataset("dsFA_ACNTXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"85\"/><Column size=\"50\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"65\"/><Column size=\"300\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"회계단위\"/><Cell col=\"1\" displaytype=\"text\" text=\"계좌번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"계좌명\"/><Cell col=\"3\" displaytype=\"text\" text=\"금융기관\"/><Cell col=\"4\" displaytype=\"text\" text=\"계좌유형\"/><Cell col=\"5\" displaytype=\"text\" text=\"운영구분\"/><Cell col=\"6\" displaytype=\"text\" text=\"통화\"/><Cell col=\"7\" displaytype=\"text\" text=\"잔액\"/><Cell col=\"8\" displaytype=\"text\" text=\"금리\"/><Cell col=\"9\" displaytype=\"text\" text=\"개설일자\"/><Cell col=\"10\" displaytype=\"text\" text=\"만기일자\"/><Cell col=\"11\" displaytype=\"text\" text=\"만기금액\"/><Cell col=\"12\" displaytype=\"text\" text=\"주기불입액\"/><Cell col=\"13\" displaytype=\"text\" text=\"납입주기\"/><Cell col=\"14\" displaytype=\"text\" text=\"총불입회차\"/><Cell col=\"15\" displaytype=\"text\" text=\"관리계정과목\"/><Cell col=\"16\" displaytype=\"text\" text=\"사용여부\"/><Cell col=\"17\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: center;\" text=\"bind:ACCT_UNIT\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACNT_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACNT_NAME\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:BANK_CODE\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:ACNT_KIND\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:OPER_GUBN\"/><Cell col=\"6\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:CURR_CODE\" combodataset=\"dsCURR_CODE\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CONM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" text=\"bind:FITR_BALE\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" text=\"bind:INTR_RATE\" mask=\"0.##\" editlimit=\"13\"/><Cell col=\"9\" displaytype=\"date\" style=\"align: center;\" text=\"bind:OBAC_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" style=\"align: center;\" text=\"bind:EXPN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" text=\"bind:EXPT_MONY\" editlimit=\"15\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" text=\"bind:CYCL_MONY\" editlimit=\"15\"/><Cell col=\"13\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:PYMT_CYCL\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;\" text=\"bind:DUEX_SEQN\" editlimit=\"15\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: left;\" text=\"bind:MANG_ACCT_NAME\"/><Cell col=\"16\" displaytype=\"checkbox\" style=\"align: center;\" text=\"bind:USEX_YSNO\"/><Cell col=\"17\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DESC_REMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_FITRXM", "absolute", "8", "441", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("12");
            obj.set_binddataset("dsTR_FITRXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubnvisible").set("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"107\" band=\"left\"/><Column size=\"111\" band=\"left\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"50\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"130\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"거래일자\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"거래유형\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"입금액\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"출금액(A)\"/><Cell col=\"4\" displaytype=\"text\" text=\"잔액\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금리\"/><Cell col=\"6\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"이자수익(B)\"/><Cell col=\"7\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"선납세액(C)\"/><Cell col=\"8\" displaytype=\"text\" text=\"차인지급액(A-B-C)\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" style=\"align: center;\" text=\"bind:TRAN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align: center;\" text=\"bind:TRAN_TYPE\"/><Cell col=\"2\" displaytype=\"number\" editfilter=\"number\" style=\"align: right;\" text=\"bind:DEPO_AMOT\" editlimit=\"15\" calendardisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:WITH_AMOT\" editlimit=\"15\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:FITR_BALE\" editlimit=\"15\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:INTR_RATE\" mask=\"0.##\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" text=\"bind:INTR_MARG\" editlimit=\"15\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" text=\"bind:PRPY_TAXA\" editlimit=\"15\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" text=\"bind:REAL_PAYX\" editlimit=\"15\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:MAJR_REMK\" editlimit=\"100\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "420", "216", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow", "absolute", null, "416", "62", "21", "90", null, this);
            obj.set_taborder("15");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow", "absolute", null, "416", "62", "21", "25", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenCreateSlipDiv", "absolute", null, "416", "74", "21", "232", null, this);
            obj.set_taborder("17");
            obj.set_text("전표생성");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteSlip", "absolute", null, "416", "74", "21", "155", null, this);
            obj.set_taborder("18");
            obj.set_text("전표삭제");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "69", "24", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "579", "71", "68", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("사용여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "751", "97", "76", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("만기일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "224", "97", "68", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("계좌명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "751", "71", "76", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("개설일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "408", "71", "76", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("계좌유형");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "224", "71", "68", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("금융기관");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "97", "68", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("운영구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_YSNO", "absolute", "647", "71", "75", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("Static60", "absolute", "927", "97", "13", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("~");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "927", "71", "13", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("~");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHREXPN_DAT1", "absolute", "821", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHREXPN_DAT2", "absolute", "942", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHROBAC_DAT1", "absolute", "821", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHROBAC_DAT2", "absolute", "942", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtSHRACNT_NAME", "absolute", "476", "97", "246", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACNT_NUMB", "absolute", "294", "97", "157", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHROPER_GUBN", "absolute", "96", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Combo("cmbSHRACNT_KIND", "absolute", "476", "71", "90", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Combo("cmbSHRBANK_CODE", "absolute", "294", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("imgHelpSHRACNT_NUMB", "absolute", "453", "97", "21", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("40");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("41");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("42");
            obj.set_text("금융상품관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("43");
            obj.set_text("홈 > 자금관리 > 금융상품관리");
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

            obj = new Static("Static10", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "196", "61", "40", "67", null, null, this);
            obj.set_taborder("51");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "416", "61", "38", "10", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "416", "92", "102", "5", null, null, this);
            obj.set_taborder("53");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "416", "118", "38", "10", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "8", "435", "216", "6", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "573", "406", "80", "35", null, null, this);
            obj.set_taborder("58");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popSLIP", "absolute", "37", "781", "520", "142", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "502", "91", null, null, this.popSLIP);
            obj.set_taborder("25");
            obj.set_cssclass("styFormItemBoxOut");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Button("btnCreateSlip", "absolute", "439", "70", "63", "21", null, null, this.popSLIP);
            obj.set_taborder("28");
            obj.set_text("자료생성");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Button("btnCloseCreateSlipDiv", "absolute", "449", "108", "62", "24", null, null, this.popSLIP);
            obj.set_taborder("29");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "29", "70", "100", "21", null, null, this.popSLIP);
            obj.set_taborder("30");
            obj.set_text("관련발생전표");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("staXxxx7", "absolute", "29", "44", "100", "21", null, null, this.popSLIP);
            obj.set_taborder("31");
            obj.set_text("상대계좌번호");
            obj.set_cssclass("styFormItemCap");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("staXxxx6", "absolute", "29", "18", "100", "21", null, null, this.popSLIP);
            obj.set_taborder("32");
            obj.set_text("상대계정과목");
            obj.set_cssclass("styFormItemCapBE");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtOTHR_ACCT", "absolute", "125", "18", "101", "21", null, null, this.popSLIP);
            obj.set_taborder("33");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtOTHR_ACNM", "absolute", "251", "18", "185", "21", null, null, this.popSLIP);
            obj.set_taborder("34");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtOTHR_NTNM", "absolute", "251", "44", "185", "21", null, null, this.popSLIP);
            obj.set_taborder("35");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtOTHR_ACNT", "absolute", "125", "44", "101", "21", null, null, this.popSLIP);
            obj.set_taborder("36");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtREOC_NAME", "absolute", "251", "70", "185", "21", null, null, this.popSLIP);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtREOC_NUMB", "absolute", "125", "70", "68", "21", null, null, this.popSLIP);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtMANG_ITE2", "absolute", "388", "18", "23", "21", null, null, this.popSLIP);
            obj.set_taborder("41");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtMANG_ITE4", "absolute", "413", "18", "23", "21", null, null, this.popSLIP);
            obj.set_taborder("42");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtREOC_SEQN", "absolute", "195", "70", "31", "21", null, null, this.popSLIP);
            obj.set_taborder("43");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("imgHelpOTHR_ACCT", "absolute", "228", null, "21", "21", null, "103", this.popSLIP);
            obj.set_taborder("44");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("imgHelpOTHR_ACNT", "absolute", "228", null, "21", "21", null, "77", this.popSLIP);
            obj.set_taborder("45");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("imgHelpREOC_NUMB", "absolute", "228", null, "21", "21", null, "51", this.popSLIP);
            obj.set_taborder("46");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "7", "782", "182", "8", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "7", "913", "510", "8", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "38", "801", "8", "96", null, null, this);
            obj.set_taborder("61");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "548", "801", "8", "144", null, null, this);
            obj.set_taborder("62");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 520, 142, this.popSLIP,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popSLIP.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("금융상품관리");
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
        this.addIncludeScript("TRMB0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRMB0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMB0010 금융상품관리
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
        this.sBUTTONLIST 	= "TTFFTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "TRMB0010";
        this.aKeyValue 		= new Array(1);

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
        	
        	//this.fnc_FormatSlipNumber(this.grdTR_FITRXM, "SLIP_NUMB");
        	
        	this.cmbSHRACCT_UNIT.setFocus();
        	
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
            this.fnc_DatasetClear("dsFA_ACNTXM,dsTR_FITRXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFA_ACNTXM=dsFA_ACNTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFA_ACNTXM.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iXMRow = this.dsFA_ACNTXM.rowposition;
        	
        	if (iXMRow < 0) return this.fnc_Message("TMM010");
        	
            var sACCT_UNIT = this.fnc_Trim(this.dsFA_ACNTXM.getColumn(iXMRow, "ACCT_UNIT"));
            var sACNT_NUMB = this.fnc_Trim(this.dsFA_ACNTXM.getColumn(iXMRow, "ACNT_NUMB"));
            var sINTR_RATE = this.fnc_Trim(this.dsFA_ACNTXM.getColumn(iXMRow, "INTR_RATE"));
            var iRow = this.dsTR_FITRXM.addRow();

            this.dsTR_FITRXM.setColumn(iRow, "ACCT_UNIT", sACCT_UNIT); //회계단위
            this.dsTR_FITRXM.setColumn(iRow, "ACNT_NUMB", sACNT_NUMB); //계좌번호
            this.dsTR_FITRXM.setColumn(iRow, "INTR_RATE", sINTR_RATE); //금리
            this.dsTR_FITRXM.setColumn(iRow, "TRAN_DATE", this.fnc_GetServerDateTime("DATE")); //거래일자
            this.dsTR_FITRXM.setColumn(iRow, "DEPO_AMOT", 0); //입금액
            this.dsTR_FITRXM.setColumn(iRow, "WITH_AMOT", 0); //출금액
            this.dsTR_FITRXM.setColumn(iRow, "FITR_BALE", 0); //잔액
            this.dsTR_FITRXM.setColumn(iRow, "INTR_MARG", 0); //이자수익
            this.dsTR_FITRXM.setColumn(iRow, "PRPY_TAXA", 0); //선납세액
            this.dsTR_FITRXM.setColumn(iRow, "REAL_PAYX", 0); //차인지급액
            this.dsTR_FITRXM.setColumn(iRow, "MAJR_REMK", this.dsFA_ACNTXM.getColumn(iXMRow, "ACNT_NAME")); //적요
            this.grdTR_FITRXM.setFocus();
            
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTR_FITRXM.deleteRow(this.dsTR_FITRXM.rowposition);
        	this.grdTR_FITRXM.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTR_FITRXM");
        	this.grdTR_FITRXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsFA_ACNTXM.getColumn(this.dsFA_ACNTXM.rowposition, "ACNT_NUMB");
        	 
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTR_FITRXM=dsTR_FITRXM:U";
        	var sOutDataSet = "dsTR_FITRXM=dsTR_FITRXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTR_FITRXM.setFocus();

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
        	// 기능없음.
        }

         /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/

        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTR_FITRXM",this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsFA_ACNTXM,dsTR_FITRXM")) return this.fnc_Message("TMM023");
        	
        	return true;
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsTR_FITRXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "SLIP_NUMB"))) > 0) {
        		this.fnc_Message("FA1002", "금융상품 거래 전표");
        		return;
        	}

        	var sTrandate = this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "TRAN_DATE");
        	var sQuestionText = "거래일자:" + this.fnc_SubStr(sTrandate, 0, 4) + "년" + this.fnc_SubStr(sTrandate, 4, 2) + "월" + this.fnc_SubStr(sTrandate, 6, 2) + "일";

        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFA_ACNTXM,dsTR_FITRXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	var sTRAN_TYPE;

        	for (var i = 0; i < this.dsTR_FITRXM.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsTR_FITRXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "TRAN_DATE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "거래일자", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "TRAN_DATE");
        		}

        		sTRAN_TYPE = this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "TRAN_TYPE")); //거래유형
        		if (this.fnc_Length(sTRAN_TYPE) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "거래유형", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "TRAN_TYPE");
        		}

        		// 거래유형별 필수값 처리

        		if ((sTRAN_TYPE == "DEPO") && (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "DEPO_AMOT"))) < 1)) {
        			// 입금(불입)
        				return this.fnc_CheckPostAction("TMM072", "입금액", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "DEPO_AMOT");
        		} else if ((sTRAN_TYPE == "PTWD") && (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "WITH_AMOT"))) < 1)) {
        			// 일부인출		
        				return this.fnc_CheckPostAction("TMM072", "출금액", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "WITH_AMOT");
        		} else if (sTRAN_TYPE == "INTE") {
        			// 이자수익

        			if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "INTR_MARG"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "이자수익", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "INTR_MARG");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "PRPY_TAXA"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "선납세액", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "PRPY_TAXA");
        			}
        		} else if (sTRAN_TYPE == "MDCC" || this.lookup("v") == "EXCC") {
        			// 중도해약 or 만기해약

        			if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "WITH_AMOT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "출금액", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "WITH_AMOT");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "INTR_MARG"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "이자수익", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "INTR_MARG");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "PRPY_TAXA"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "선납세액", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "PRPY_TAXA");
        			}
        		}

        		if (this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "INTR_RATE")) <= 0)	{
        			return this.fnc_CheckPostAction("TMM072", "금리", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "INTR_RATE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(i, "MAJR_REMK"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "적요", this.dsTR_FITRXM, i, this.grdTR_FITRXM, "MAJR_REMK");
        		}
        	}

        	return true;
        }

        /*------------------+
         |  입력 여부 체크!  |
         +-------------------*/
        this.fn_InputItemCheck = function () {

        	var sACCT_UNIT = this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(this.dsFA_ACNTXM.rowposition, "ACCT_UNIT")));
        	var sACNT_NUMB = this.fnc_Length(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(this.dsFA_ACNTXM.rowposition, "ACNT_NUMB")));
        	// 키값 처리 체크
        	if (sACCT_UNIT < 1 || sACNT_NUMB < 1) {
        		this.fnc_Message("TMM010");
        		return false;
        	}

        	// 전표번호가 모두 있을 경우에만 행추가 가능
        	if (this.dsTR_FITRXM.getCaseCount("SLIP_NUMB == NULL") > 0)	{
        		this.fnc_Message("TMM125", "전표가 생성되지 않은 데이터가 있습니다");
        		return false;
        	}

        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " BANK_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRBANK_CODE.value)); //금융기관
        		sReturnString += " ACNT_KIND=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACNT_KIND.value)); //계좌유형
        		sReturnString += " USEX_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSEX_YSNO.value)); //사용여부
        		sReturnString += " OBAC_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHROBAC_DAT1.value)); //개설일자1
        		sReturnString += " OBAC_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHROBAC_DAT2.value)); //개설일자2
        		sReturnString += " OPER_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHROPER_GUBN.value)); //윤영구분
        		sReturnString += " ACNT_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACNT_NUMB.value)); //계좌번호
        		sReturnString += " EXPN_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHREXPN_DAT1.value)); //만기일자1
        		sReturnString += " EXPN_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHREXPN_DAT2.value)); //만기일자2

        		// 디테일 조회 Argument 생성
        	} else if (sKind == "SEARCH01") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(this.dsFA_ACNTXM.rowposition, "ACCT_UNIT"))); //회계단위
        		sReturnString += " ACNT_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(this.dsFA_ACNTXM.rowposition, "ACNT_NUMB"))); //계좌번호

        		// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(this.dsFA_ACNTXM.rowposition, "ACCT_UNIT"))); //회계단위
        		sReturnString += " ACNT_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(this.dsFA_ACNTXM.rowposition, "ACNT_NUMB"))); //계좌번호

        		// 전표생성/삭제 Argument 생성
        	} else if (sKind == "PROC00" || sKind == "PROC01") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.dsFA_ACNTXM.getColumn(this.dsFA_ACNTXM.rowposition, "ACCT_UNIT"))); //회계단위
        		sReturnString += " SLIP_DATE=" + this.fnc_Quote(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "TRAN_DATE"))); //전표발행일
        		sReturnString += " ACNT_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "ACNT_NUMB"))); //계좌번호
        		sReturnString += " SEQN_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "SEQN_NUMB"))); //일련번호
        		sReturnString += " OTHR_ACCT=" + this.fnc_Quote(this.fnc_Trim(this.popSLIP.edtOTHR_ACCT.value)); //상대계정과목
        		sReturnString += " OTHR_ACNT=" + this.fnc_Quote(this.fnc_Trim(this.popSLIP.edtOTHR_ACNT.value)); //상대계좌번호
        		sReturnString += " REOC_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.popSLIP.edtREOC_NUMB.value)); //관련발생전표번호
        		sReturnString += " REOC_SEQN=" + this.fnc_Quote(this.fnc_Trim(this.popSLIP.edtREOC_SEQN.value)); //관련발생전표순번
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
        		// 상단 금융상품 조회
        		this.fnc_Information(this.stInformation, this.dsFA_ACNTXM.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsFA_ACNTXM.rowcount);
        		
        		var iRow = this.dsFA_ACNTXM.findRowExpr("ACNT_NUMB=='" + this.aKeyValue[0] + "'");
         		if (iRow < 0) iRow = 0;
         		
         		this.grdFA_ACNTXM.selectRow(iRow);
         		this.dsFA_ACNTXM.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";
        		
        		//this.dsFA_ACNTXM_OnRowPosChanged();
        		
        	} else if (sMethodName == "SEARCH01") {
        		// 하단 세부현황 조회

        		this.fnc_Information(this.stInformation1, this.dsTR_FITRXM.rowcount, "SHR");
        		//this.grdTR_FITRXM.setFocus();
        		this.dsTR_FITRXM.set_rowposition((this.dsTR_FITRXM.getRowCount() - 1));
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "PROC00") {
        		this.fn_ControlSlipDiv(this.popSLIP.btnCloseCreateSlipDiv); //영역을 닫는다.
        		this.fnc_Message("TMM130", "금융상품거래 전표 생성");
        		this.fn_Search01();
        	} else if (sMethodName == "PROC01") {
        		this.fn_ControlSlipDiv(this.popSLIP.btnCloseCreateSlipDiv); //영역을 닫는다.
        		this.fnc_Message("TMM130", "금융상품거래 전표 삭제");
        		this.fn_Search01();
        	} else if (sMethodName == "GetCommCode") {
        	
        		// 계좌유형(참조1 : FITR || 전체인것) 필터 처리
        		var sFilterRequirement = "REF1_FILD == \"FITR\" || COMD_CDNM == \"전체\"";

        		this.dsSHRACNT_KIND.filter(sFilterRequirement);
        		this.dsACNT_KIND.filter(sFilterRequirement);
        		
        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";	//회계단위(조회)
        			arrParam[1]  = "COMBO,cmbSHRBANK_CODE,dsSHRBANK_CODE,0";	//금융기관(조회)
        			arrParam[2]  = "COMBO,cmbSHRACNT_KIND,dsSHRACNT_KIND,0";	//계좌유형(조회)
         			arrParam[3]  = "COMBO,cmbSHRUSEX_YSNO,dsSHRUSEX_YSNO,1";	//거래유형(조회)
         			arrParam[4]  = "COMBO,cmbSHROPER_GUBN,dsSHROPER_GUBN,0";	//운영구분(조회)
        			arrParam[5]  = "GRID,grdFA_ACNTXM,dsACCT_UNIT,ACCT_UNIT";   //회계단위(그리드)
        			arrParam[6]  = "GRID,grdFA_ACNTXM,dsBANK_CODE,BANK_CODE";   //금융기관(그리드)
        			arrParam[7]  = "GRID,grdFA_ACNTXM,dsACNT_KIND,ACNT_KIND";   //계좌유형(그리드)
        			arrParam[8]  = "GRID,grdFA_ACNTXM,dsOPER_GUBN,OPER_GUBN";   //거래유형(그리드)
        			arrParam[9]  = "GRID,grdFA_ACNTXM,dsCURR_CODE,CURR_CODE";   //전표승인상태(그리드)
        			arrParam[10] = "GRID,grdFA_ACNTXM,dsPYMT_CYCL,PYMT_CYCL";   //납입주기(그리드)
        			arrParam[11] = "GRID,grdTR_FITRXM,dsTRAN_TYPE,TRAN_TYPE";   //거래유형(그리드)
        			arrParam[12] = "GRID,grdTR_FITRXM,dsAPPV_STAT,APPV_STAT";   //승인상태(그리드)
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (e.newrow < 0) {
        	
        		// 선택된 로우가 없으면
        		this.fnc_SetReadonly(this.btnOpenCreateSlipDiv, true); //전표생성
        		this.fnc_SetReadonly(this.btnDeleteSlip, true); //전표삭제
        		// 전표번호가 있는 경우 None Edit
        	} else if (this.fnc_Length(this.fnc_Trim(obj.getColumn(e.newrow, "SLIP_NUMB"))) > 0) {
        		this.fnc_SetReadonly(this.btnOpenCreateSlipDiv, true); //마지막 라인이고 전표 결재상태가 없으면 삭제 가능
        		if (obj.rowcount == (e.newrow + 1) && this.fnc_Length(this.fnc_Trim(obj.getColumn(e.newrow, "APPV_STAT"))) == 0) {
        			this.fnc_SetReadonly(this.btnDeleteSlip, false); //전표삭제
        		} else {
        			this.fnc_SetReadonly(this.btnDeleteSlip, true); //전표삭제
        		}

        		// 전체 수정 불가로 셋팅
        		for (var i = 0; i < this.grdTR_FITRXM.getCellCount("body"); i++) {
        			this.grdTR_FITRXM.setCellProperty("body", i, "edittype", "none");
        		}
        	} else {
        		// 전표 번호가 없으면
        		if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        			// 신규 입력
        			this.fnc_SetReadonly(this.btnOpenCreateSlipDiv, true); //저장 전에는 활성화 하지 않는다.
        		} else {
        			this.fnc_SetReadonly(this.btnOpenCreateSlipDiv, false); //전표생성 활성화
        		}

        		this.fnc_SetReadonly(this.btnDeleteSlip, true); //전표삭제

        		// 입력란 활성화
        		this.grdTR_FITRXM.setCellProperty("body", this.fnc_GridColumnIndex(this.grdTR_FITRXM, "TRAN_DATE"), "edittype", "date"); //거래일자
        		this.grdTR_FITRXM.setCellProperty("body", this.fnc_GridColumnIndex(this.grdTR_FITRXM, "TRAN_TYPE"), "edittype", "combo"); //거래유형
        		this.grdTR_FITRXM.setCellProperty("body", this.fnc_GridColumnIndex(this.grdTR_FITRXM, "INTR_RATE"), "edittype", "normal"); //금리
        		this.grdTR_FITRXM.setCellProperty("body", this.fnc_GridColumnIndex(this.grdTR_FITRXM, "MAJR_REMK"), "edittype", "normal"); //적요

        		// 거래유형별 edit 처리
        		// DEPO : 입금(불입), PTWD : 일부인출, INTE : 이자수익, MDCC : 중도해약, EXCC : 만기해약
        		this.fn_TranTypeEdit(this.fnc_Trim(obj.getColumn(e.newrow, "TRAN_TYPE")));
        	}
        }

        /*--------------------------+
         |  거래유형별 edit 처리     |
         +---------------------------*/
        this.dsTR_FITRXM_OnColumnChanged = function (obj,e) {
        	// 거래유형별 edit 처리
        	// DEPO : 입금(불입), PTWD : 일부인출, INTE : 이자수익, MDCC : 중도해약, EXCC : 만기해약
        	if (e.columnid == "TRAN_TYPE") {
        		this.fn_TranTypeEdit(this.fnc_Trim(obj.getColumn(e.row, "TRAN_TYPE")));
        		this.dsTR_FITRXM.setColumn(e.row, "DEPO_AMOT", 0);
        		this.dsTR_FITRXM.setColumn(e.row, "WITH_AMOT", 0);
        		this.dsTR_FITRXM.setColumn(e.row, "FITR_BALE", 0);
        		this.dsTR_FITRXM.setColumn(e.row, "INTR_MARG", 0);
        		this.dsTR_FITRXM.setColumn(e.row, "PRPY_TAXA", 0);
        		this.dsTR_FITRXM.setColumn(e.row, "REAL_PAYX", 0);
        	}
        }

        
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

            if ((obj.name == "imgHelpSHRACNT_NUMB") || (obj.name == "edtSHRACNT_NAME")) { // 조회 Help POPUP START

                arrParam[0] = "TRM0011";
                arrParam[1] = "FITR";
                arrParam[2] = this.fnc_Trim(this.edtSHRACNT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACNT_NAME";
                arrParam[5] = "edtSHRACNT_NUMB,edtSHRACNT_NAME";
                arrParam[6] = "2,3";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
            }
            
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  거래유형별 edit 처리  |
         +------------------------*/
        this.fn_TranTypeEdit = function (v) {
        	// 거래유형별 edit 처리, number 형 안됨 normal로 변경
        	// DEPO : 입금(불입), PTWD : 일부인출, INTE : 이자수익, MDCC : 중도해약, EXCC : 만기해약

        	var v1,v2,v3,v4;
        	
        	if (v == "DEPO") {
        		// 입금(불입)
        		v1 = "normal";
        		v2 = "none";
        		v3 = "none";
        		v4 = "none";
        	} else if (v == "PTWD") {
        		// 일부인출

        		v1 = "none";
        		v2 = "normal";
        		v3 = "none";
        		v4 = "none";
        	} else if (v == "INTE") {
        		// 이자수익

        		v1 = "none";
        		v2 = "none";
        		v3 = "normal";
        		v4 = "normal";
        	} else if (v == "MDCC" || v == "EXCC") {
        		// 중도해약 or 만기해약

        		v1 = "none";
        		v2 = "normal";
        		v3 = "normal";
        		v4 = "normal";
        	} else {
        		v1 = "none";
        		v2 = "none";
        		v3 = "none";
        		v4 = "none";
        	}

        	this.grdTR_FITRXM.setCellProperty("body", this.fnc_GridColumnIndex(this.grdTR_FITRXM, "DEPO_AMOT"), "edittype", v1); //입금액
        	this.grdTR_FITRXM.setCellProperty("body", this.fnc_GridColumnIndex(this.grdTR_FITRXM, "WITH_AMOT"), "edittype", v2); //출금액
        	this.grdTR_FITRXM.setCellProperty("body", this.fnc_GridColumnIndex(this.grdTR_FITRXM, "INTR_MARG"), "edittype", v3); //이자수익
        	this.grdTR_FITRXM.setCellProperty("body", this.fnc_GridColumnIndex(this.grdTR_FITRXM, "PRPY_TAXA"), "edittype", v4); //선납세액
        }

        /*---------------------------+
         |  전표생성 필수 입력 체크!  |
         +----------------------------*/
        this.fn_CreateSlipItemCheck = function () {
        	if (this.fnc_Length(this.fnc_Trim(this.popSLIP.edtOTHR_ACCT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "상대계정과목", this.popSLIP.edtOTHR_ACNM);
        	}

        	if (this.popSLIP.edtOTHR_NTNM.enable == true && this.fnc_Length(this.fnc_Trim(this.popSLIP.edtOTHR_ACNT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "상대계좌번호", this.popSLIP.edtOTHR_NTNM);
        	}

        	if (this.popSLIP.edtREOC_NAME.enable == true && this.fnc_Length(this.fnc_Trim(this.popSLIP.edtREOC_NUMB.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "관련발생전표번호", this.popSLIP.edtREOC_NAME);
        	}

        	if (this.popSLIP.edtREOC_NAME.enable == true && this.fnc_Length(this.fnc_Trim(this.popSLIP.edtREOC_SEQN.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "관련발생전표순번", this.popSLIP.edtREOC_NAME);
        	}

        	return true;
        }

        /*---------------------------------+
         |  전표생성                        |
         +----------------------------------*/
        this.fn_CreateSlip = function () {

        	if (this.fnc_DatasetChangeCheck("dsTR_FITRXM"))	{
        		this.fnc_Message("TMM142", "전표생성");
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "ACCT_UNIT"))) < 1
        		 || this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "ACNT_NUMB"))) < 1
        		 || this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "SEQN_NUMB"))) < 1)
        	{
        		this.fnc_Message("TMM106", "거래내역");
        		return false;
        	}

        	if (!this.fn_CreateSlipItemCheck()) return;

        	if (!this.fnc_Message("BC1006", "금융상품 거래 전표 생성")) return;

        	var sMethodName = "PROC00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTR_FITRXM=dsTR_FITRXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTR_FITRXM.setFocus();
        }

        /*---------------------------------+
         |  전표삭제                        |
         +----------------------------------*/
        this.fn_DeleteSlip = function () {

        	if (this.fnc_DatasetChangeCheck("dsTR_FITRXM"))	{
        		this.fnc_Message("TMM125", "변경된 자료가 존재합니다. 저장 후 진행하세요");
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "ACCT_UNIT"))) < 1
        		 || this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "ACNT_NUMB"))) < 1
        		 || this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "SEQN_NUMB"))) < 1)
        	{
        		this.fnc_Message("TMM106", "거래내역");
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(this.dsTR_FITRXM.rowposition, "SLIP_NUMB"))) < 0) {
        		this.fnc_Message("TMM125", "생성 된 전표가 없습니다.");
        		return false;
        	}

        	var sMethodName = "PROC01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTR_FITRXM=dsTR_FITRXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTR_FITRXM.setFocus();
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*---------------------------+
         |  디테일 조회 버튼 클릭 時  |
         +----------------------------*/
        this.dsFA_ACNTXM_OnRowPosChanged = function (obj,e) {
        	
        	if (this.dsFA_ACNTXM.rowcount < 1) return;
        	this.fn_Search01();
        	
        }

        this.fn_Search01 = function () {	

        	this.fnc_DatasetClear("dsTR_FITRXM");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTR_FITRXM=dsTR_FITRXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        }

        /*---------------------------------------+
         |  전표 생성 DIV			             |
         +----------------------------------------*/
        this.fn_ControlSlipDiv = function (obj) {

        	if (this.fnc_DatasetChangeCheck("dsTR_FITRXM"))	{
        		this.fnc_Message("TMM125", "변경된 자료가 존재합니다. 저장 후 진행하세요");
        		return false;
        	}

        	if (obj.name == "btnOpenCreateSlipDiv")	{
        		// DIV전표생성_오픈
        		this.popSLIP.edtOTHR_ACCT.set_value("");
        		this.popSLIP.edtOTHR_ACNM.set_value("");
        		this.popSLIP.edtMANG_ITE2.set_value("");
        		this.popSLIP.edtMANG_ITE4.set_value("");
        		this.popSLIP.edtOTHR_ACNT.set_value("");
        		this.popSLIP.edtOTHR_NTNM.set_value("");
        		this.popSLIP.edtREOC_NUMB.set_value("");
        		this.popSLIP.edtREOC_SEQN.set_value("");
        		this.popSLIP.edtREOC_NAME.set_value("");
        		this.fnc_SetReadonly(this.popSLIP.edtOTHR_NTNM, true);
        		this.fnc_SetReadonly(this.popSLIP.edtREOC_NAME, true);
        		this.popSLIP.__setPosition9x("356px 438px 775px 520px");
        		this.popSLIP.set_visible(true);
        		this.popSLIP.edtOTHR_ACNM.setFocus();
        	} else if (obj.name == "btnCloseCreateSlipDiv")	{
        		// DIV전표생성_닫기
        		this.popSLIP.set_visible(false);
        	}
        }

        /*----------------+
         |  전표조회 팝업  |
         +-----------------*/
        this.fn_OpenSlip = function (obj,e) {
        	// 전표번호 셀을 더블클릭 했을때만 전표조회 처리
        	if (this.fnc_GridColumnIndex(this.grdTR_FITRXM, "SLIP_NUMB") == e.cell
        		 && this.fnc_Length(this.fnc_Trim(this.dsTR_FITRXM.getColumn(e.row, "SLIP_NUMB"))) > 0)
        	{

        		var sSLIP_NUMB = this.fnc_Trim(this.dsTR_FITRXM.getColumn(e.row, "SLIP_NUMB"));
        		var sResponse = this.lookupFunc("gfn_PopSlipForm").call(sSLIP_NUMB, "SHR", this.sUSERLAVEL);
        	}
        }

        /*-----------------------------+
         |  금융상품(계좌) Row 변경 시  |
         +------------------------------*/
        this.dsFA_ACNTXM_CanRowPosChange = function (obj,e) {
        	
        	if (e.newrow < 0) return;
        	
        	if (this.fnc_DatasetChangeCheck("dsTR_FITRXM") == false) return;

        	if (this.fnc_Message("TMM023") == false) {
        		return false;
        	} 
        	
        	return true;

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFA_ACNTXM.addEventHandler("canrowposchange", this.dsFA_ACNTXM_CanRowPosChange, this);
            this.dsFA_ACNTXM.addEventHandler("onrowposchanged", this.dsFA_ACNTXM_OnRowPosChanged, this);
            this.dsTR_FITRXM.addEventHandler("oncolumnchanged", this.dsTR_FITRXM_OnColumnChanged, this);
            this.dsTR_FITRXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTR_FITRXM.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.btnAddRow.addEventHandler("onclick", this.fn_Input, this);
            this.btnDelRow.addEventHandler("onclick", this.fn_Delete, this);
            this.btnOpenCreateSlipDiv.addEventHandler("onclick", this.fn_ControlSlipDiv, this);
            this.btnDeleteSlip.addEventHandler("onclick", this.fn_DeleteSlip, this);
            this.cmbSHRUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHREXPN_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHREXPN_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHROBAC_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHROBAC_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACNT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACNT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHROPER_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACNT_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRACNT_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.popSLIP.btnCreateSlip.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popSLIP.btnCloseCreateSlipDiv.addEventHandler("onclick", this.popINSERT_Button0_OnClick, this);
            this.popSLIP.edtOTHR_ACNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popSLIP.edtOTHR_ACNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popSLIP.edtOTHR_NTNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popSLIP.edtOTHR_NTNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popSLIP.edtREOC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popSLIP.edtREOC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popSLIP.edtMANG_ITE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popSLIP.edtMANG_ITE2.addEventHandler("ontextchanged", this.popSLIP_edtMANG_ITE2_OnChanged, this);
            this.popSLIP.edtMANG_ITE4.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popSLIP.edtMANG_ITE4.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popSLIP.edtMANG_ITE4.addEventHandler("ontextchanged", this.popSLIP_edtMANG_ITE2_OnChanged, this);
            this.popSLIP.imgHelpOTHR_ACCT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popSLIP.imgHelpOTHR_ACNT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popSLIP.imgHelpREOC_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("TRMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
