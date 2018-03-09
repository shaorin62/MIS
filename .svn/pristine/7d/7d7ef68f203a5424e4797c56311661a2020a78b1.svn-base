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
                this.set_name("TRMC0010");
                this.set_titletext("차입금관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTR_DBPYXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_KIND\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_CUST\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_CUNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_ACNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_ACNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_RATE\" size=\"20\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FUND_TYPE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPAC_NUMB\" size=\"64\" prop=\"default\" type=\"STRING\"/><Column id=\"DPAC_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_LIMT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DBPY_AMOT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"LIMT_BALE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RPTM_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PRRP_COND\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"FSRP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"FNRP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RPAY_AMOT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTP_COND\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INPT_DATE\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"INTF_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PAID_INTE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SECU_DETL\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"GUAR_DETL\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTR_DBPYXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DBPY_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TRAN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_TYPE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RPAY_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DBPY_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTE_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MAJR_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OTHR_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OTHR_ACNT\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REOC_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_STAT\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CANC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DBPY_KIND</Col><Col id=\"DSNAME\">dsSHRDBPY_KIND</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">FUND_TYPE</Col><Col id=\"DSNAME\">dsSHRFUND_TYPE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsSHRRPTM_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">DBPY_KIND</Col><Col id=\"DSNAME\">dsDBPY_KIND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">FUND_TYPE</Col><Col id=\"DSNAME\">dsFUND_TYPE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsRPTM_YSNO</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">PRRP_COND</Col><Col id=\"DSNAME\">dsPRRP_COND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">INTP_COND</Col><Col id=\"DSNAME\">dsINTP_COND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">APPV_STAT</Col><Col id=\"DSNAME\">dsAPPV_STAT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DBPY_TYPE</Col><Col id=\"DSNAME\">dsDBPY_TYPE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EXCEL", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTR_DBPYXD_TEMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DBPY_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TRAN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_TYPE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RPAY_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DBPY_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTE_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MAJR_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OTHR_ACCT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OTHR_ACNT\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REOC_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_STAT\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTR_DBPYXM", "absolute", "8", "154", null, null, "25", "347", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTR_DBPYXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("9");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"75\"/><Column size=\"90\"/><Column size=\"75\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"차입금번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"차입금명\"/><Cell col=\"2\" displaytype=\"text\" text=\"차입종류\"/><Cell col=\"3\" displaytype=\"text\" text=\"차입기관\"/><Cell col=\"4\" displaytype=\"text\" text=\"차입일\"/><Cell col=\"5\" displaytype=\"text\" text=\"만기일\"/><Cell col=\"6\" displaytype=\"text\" text=\"이자율(%)\"/><Cell col=\"7\" displaytype=\"text\" text=\"차입한도액\"/><Cell col=\"8\" displaytype=\"text\" text=\"차입금액\"/><Cell col=\"9\" displaytype=\"text\" text=\"상환금액\"/><Cell col=\"10\" displaytype=\"text\" text=\"미상환금액\"/><Cell col=\"11\" displaytype=\"text\" text=\"납입이자\"/><Cell col=\"12\" displaytype=\"text\" text=\"자금유형\"/><Cell col=\"13\" displaytype=\"text\" text=\"원금상환조건\"/><Cell col=\"14\" displaytype=\"text\" text=\"최초상환일\"/><Cell col=\"15\" displaytype=\"text\" text=\"이자납입조건\"/><Cell col=\"16\" displaytype=\"text\" text=\"이자납입일\"/><Cell col=\"17\" displaytype=\"text\" text=\"관리계정과목\"/><Cell col=\"18\" displaytype=\"text\" text=\"이자계정과목\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:DBPY_NUMB\" mask=\"####-####\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DBPY_NAME\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:DBPY_KIND\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DBPY_CUNM\"/><Cell col=\"4\" displaytype=\"date\" style=\"align: center;\" text=\"bind:DBPY_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" style=\"align: center;\" text=\"bind:EXPN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" text=\"bind:INTE_RATE\" mask=\"0.###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" text=\"bind:DBPY_LIMT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" text=\"bind:DBPY_AMOT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" text=\"bind:RPAY_AMOT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:nexacro.toNumber(DBPY_AMOT, 0) - nexacro.toNumber(RPAY_AMOT, 0)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" text=\"bind:PAID_INTE\"/><Cell col=\"12\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:FUND_TYPE\"/><Cell col=\"13\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:PRRP_COND\"/><Cell col=\"14\" displaytype=\"date\" style=\"align: center;\" text=\"bind:FSRP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:INTP_COND\"/><Cell col=\"16\" displaytype=\"text\" style=\"align: right;\" text=\"bind:INPT_DATE\" expr=\"expr:INPT_DATE + &quot; 일&quot;\"/><Cell col=\"17\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DBPY_ACNM\"/><Cell col=\"18\" displaytype=\"text\" style=\"align: left;\" text=\"bind:INTE_ACNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tabXM", "absolute", "8", null, null, "322", "25", "15", this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_taborder("43");
            obj.set_text("차입정보");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "10", null, null, "273", "10", "10", this.tabXM.tab1);
            obj.set_taborder("34");
            obj.set_cssclass("styFormItemBoxOut");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "900", null, "90", "21", null, "253", this.tabXM.tab1);
            obj.set_taborder("107");
            obj.set_text("차입종류");
            obj.set_cssclass("styFormItemCapBE");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "326", null, "90", "21", null, "253", this.tabXM.tab1);
            obj.set_taborder("108");
            obj.set_text("차입금명");
            obj.set_cssclass("styFormItemCapBE");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static5", "absolute", "30", null, "103", "21", null, "253", this.tabXM.tab1);
            obj.set_taborder("109");
            obj.set_text("차입금번호");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskPAID_INTE", "absolute", "991", null, "130", "21", null, "97", this.tabXM.tab1);
            obj.set_taborder("21");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskINTF_DATE", "absolute", "701", null, "130", "21", null, "97", this.tabXM.tab1);
            obj.set_taborder("20");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskINPT_DATE", "absolute", "407", null, "130", "21", null, "97", this.tabXM.tab1);
            obj.set_taborder("19");
            obj.set_type("number");
            obj.set_mask("##");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_limitbymask("integer");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskRPAY_AMOT", "absolute", "991", null, "130", "21", null, "123", this.tabXM.tab1);
            obj.set_taborder("17");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskFNRP_DATE", "absolute", "701", null, "130", "21", null, "123", this.tabXM.tab1);
            obj.set_taborder("16");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskLIMT_BALE", "absolute", "701", null, "130", "21", null, "149", this.tabXM.tab1);
            obj.set_taborder("12");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskDBPY_AMOT", "absolute", "407", null, "130", "21", null, "149", this.tabXM.tab1);
            obj.set_taborder("11");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskDBPY_LIMT", "absolute", "127", null, "130", "21", null, "149", this.tabXM.tab1);
            obj.set_taborder("10");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskINTE_RATE", "absolute", "127", null, "130", "21", null, "175", this.tabXM.tab1);
            obj.set_taborder("7");
            obj.set_mask("+##.###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDESC_REMK", "absolute", "127", null, "994", "21", null, "19", this.tabXM.tab1);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "30", null, "103", "21", null, "19", this.tabXM.tab1);
            obj.set_taborder("120");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtGUAR_DETL", "absolute", "127", null, "994", "21", null, "45", this.tabXM.tab1);
            obj.set_taborder("23");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "30", null, "103", "21", null, "45", this.tabXM.tab1);
            obj.set_taborder("122");
            obj.set_text("보증내역");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "539", null, "14", "21", null, "97", this.tabXM.tab1);
            obj.set_taborder("123");
            obj.set_text("일");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static50", "absolute", "326", null, "90", "21", null, "97", this.tabXM.tab1);
            obj.set_taborder("124");
            obj.set_text("이자납입일");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbINTP_COND", "absolute", "127", null, "130", "21", null, "97", this.tabXM.tab1);
            this.tabXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj = new Static("Static46", "absolute", "30", null, "103", "21", null, "97", this.tabXM.tab1);
            obj.set_taborder("126");
            obj.set_text("이자납입조건");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "900", null, "90", "21", null, "97", this.tabXM.tab1);
            obj.set_taborder("127");
            obj.set_text("납입이자");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "606", null, "90", "21", null, "97", this.tabXM.tab1);
            obj.set_taborder("128");
            obj.set_text("최종납입일");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Calendar("calFSRP_DATE", "absolute", "407", null, "130", "21", null, "123", this.tabXM.tab1);
            this.tabXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj = new Static("Static27", "absolute", "326", null, "90", "21", null, "123", this.tabXM.tab1);
            obj.set_taborder("130");
            obj.set_text("최초상환일");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbPRRP_COND", "absolute", "127", null, "130", "21", null, "123", this.tabXM.tab1);
            this.tabXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj = new Combo("cmbRPTM_YSNO", "absolute", "991", null, "130", "21", null, "149", this.tabXM.tab1);
            this.tabXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj = new Static("Static18", "absolute", "326", null, "90", "21", null, "149", this.tabXM.tab1);
            obj.set_taborder("133");
            obj.set_text("차입금액");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbFUND_TYPE", "absolute", "407", null, "130", "21", null, "175", this.tabXM.tab1);
            this.tabXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj = new Edit("edtDPAC_NAME", "absolute", "856", null, "265", "21", null, "175", this.tabXM.tab1);
            obj.set_taborder("9");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDPAC_NUMB", "absolute", "701", null, "130", "21", null, "175", this.tabXM.tab1);
            obj.set_taborder("136");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readnoly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static6", "absolute", "326", null, "90", "21", null, "175", this.tabXM.tab1);
            obj.set_taborder("138");
            obj.set_text("자금유형");
            obj.set_cssclass("styFormItemCapBE");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtSECU_DETL", "absolute", "127", null, "994", "21", null, "71", this.tabXM.tab1);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "30", null, "103", "21", null, "71", this.tabXM.tab1);
            obj.set_taborder("140");
            obj.set_text("담보내역");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "30", null, "103", "21", null, "123", this.tabXM.tab1);
            obj.set_taborder("141");
            obj.set_text("원금상환조건");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "900", null, "90", "21", null, "123", this.tabXM.tab1);
            obj.set_taborder("142");
            obj.set_text("상환금액");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "606", null, "90", "21", null, "123", this.tabXM.tab1);
            obj.set_taborder("143");
            obj.set_text("최종상환일");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "30", null, "103", "21", null, "149", this.tabXM.tab1);
            obj.set_taborder("144");
            obj.set_text("차입한도액");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "900", null, "90", "21", null, "149", this.tabXM.tab1);
            obj.set_taborder("145");
            obj.set_text("상환완료여부");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static9", "absolute", "606", null, "90", "21", null, "149", this.tabXM.tab1);
            obj.set_taborder("146");
            obj.set_text("한도잔액");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "30", null, "102", "21", null, "175", this.tabXM.tab1);
            obj.set_taborder("147");
            obj.set_text("이자율(%)");
            obj.set_cssclass("styFormItemCapBE");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "606", null, "90", "21", null, "175", this.tabXM.tab1);
            obj.set_taborder("148");
            obj.set_text("차입계좌번호");
            obj.set_cssclass("styFormItemCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static2", "absolute", "30", null, "103", "21", null, "227", this.tabXM.tab1);
            obj.set_taborder("150");
            obj.set_text("차입기관");
            obj.set_cssclass("styFormItemCapBE");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskDBPY_NUMB", "absolute", "127", null, "130", "21", null, "253", this.tabXM.tab1);
            obj.set_taborder("151");
            obj.set_type("string");
            obj.set_mask("####-####");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDBPY_CUST", "absolute", "127", null, "130", "21", null, "227", this.tabXM.tab1);
            obj.set_taborder("152");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readnoly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDBPY_CUNM", "absolute", "282", null, "255", "21", null, "227", this.tabXM.tab1);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "606", null, "90", "21", null, "227", this.tabXM.tab1);
            obj.set_taborder("154");
            obj.set_text("차입일");
            obj.set_cssclass("styFormItemCapBE");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDBPY_NAME", "absolute", "407", null, "424", "21", null, "253", this.tabXM.tab1);
            obj.set_taborder("0");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Calendar("calDBPY_DATE", "absolute", "701", null, "130", "21", null, "227", this.tabXM.tab1);
            this.tabXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj = new Static("Static21", "absolute", "900", null, "90", "21", null, "227", this.tabXM.tab1);
            obj.set_taborder("157");
            obj.set_text("만기일");
            obj.set_cssclass("styFormItemCapBE");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbDBPY_KIND", "absolute", "991", null, "130", "21", null, "253", this.tabXM.tab1);
            this.tabXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj = new Calendar("calEXPN_DATE", "absolute", "991", null, "130", "21", null, "227", this.tabXM.tab1);
            this.tabXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj = new Edit("edtINTE_ACNM", "absolute", "856", null, "265", "21", null, "201", this.tabXM.tab1);
            obj.set_taborder("6");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtINTE_ACCT", "absolute", "701", null, "130", "21", null, "201", this.tabXM.tab1);
            obj.set_taborder("162");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readnoly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static48", "absolute", "606", null, "90", "21", null, "201", this.tabXM.tab1);
            obj.set_taborder("163");
            obj.set_text("이자계정과목");
            obj.set_cssclass("styFormItemCapBE");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDBPY_ACNM", "absolute", "282", null, "255", "21", null, "201", this.tabXM.tab1);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDBPY_ACCT", "absolute", "127", null, "130", "21", null, "201", this.tabXM.tab1);
            obj.set_taborder("166");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readnoly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTR_DBPYXM");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static42", "absolute", "30", null, "103", "21", null, "201", this.tabXM.tab1);
            obj.set_taborder("167");
            obj.set_text("관리계정과목");
            obj.set_cssclass("styFormItemCapBE");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("imgHelpDBPY_CUST", "absolute", "259", null, "22", "21", null, "227", this.tabXM.tab1);
            obj.set_taborder("168");
            obj.set_cssclass("sytHelpPopup");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("imgHelpDBPY_ACCT", "absolute", "259", null, "22", "21", null, "201", this.tabXM.tab1);
            obj.set_taborder("169");
            obj.set_cssclass("sytHelpPopup");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("imgHelpDPAC_NUMB", "absolute", "833", null, "21", "21", null, "175", this.tabXM.tab1);
            obj.set_taborder("170");
            obj.set_cssclass("sytHelpPopup");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("imgHelpINTE_ACCT", "absolute", "833", null, "21", "21", null, "201", this.tabXM.tab1);
            obj.set_taborder("171");
            obj.set_cssclass("sytHelpPopup");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.tabXM);
            obj.set_taborder("43");
            obj.set_text("차입거래내역");
            obj.getSetter("position").set("absolute");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdTR_DBPYXD", "absolute", "10", "30", null, null, "10", "10", this.tabXM.tab2);
            obj.set_autoenter("none");
            obj.set_binddataset("dsTR_DBPYXD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"300\"/><Column size=\"140\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"구분\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"거래일자\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"거래유형\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"차입금액\"/><Cell col=\"4\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"상환금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"차입잔액\"/><Cell col=\"6\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"이자금액\"/><Cell col=\"7\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"적요\"/><Cell col=\"8\" text=\"전표번호\"/><Cell col=\"9\" text=\"전표번호취소\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:DBPY_GUBN\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: center;\" text=\"bind:TRAN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:DBPY_TYPE\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DBPY_AMOT\" editlimit=\"15\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RPAY_AMOT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DBPY_BALE\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INTE_AMOT\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:MAJR_REMK\" editlimit=\"100\" editimemode=\"native\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"expand\" text=\"bind:SLIP_NUMB\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"9\" displaytype=\"button\" text=\"bind:SLIP_CANC\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;DBPY_AMOT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;RPAY_AMOT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;DBPY_AMOT&quot;), 0) - nexacro.toNumber(dataset.getSum(&quot;RPAY_AMOT&quot;), 0)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;INTE_AMOT&quot;)\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "232", "21", null, null, this.tabXM.tab2);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "5", "62", "21", "10", null, this.tabXM.tab2);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Button("btnAddRow", "absolute", null, "5", "62", "21", "75", null, this.tabXM.tab2);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Button("btnOpenCreateSlipDiv", "absolute", null, "5", "74", "21", "409", null, this.tabXM.tab2);
            obj.set_taborder("0");
            obj.set_text("전표생성");
            obj.style.set_imagealign("left");
            obj.style.set_padding("2 0 0 18");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("padding", "disabled", "1 0 0 0");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Button("btnDeleteSlip", "absolute", null, "5", "74", "21", "332", null, this.tabXM.tab2);
            obj.set_taborder("1");
            obj.set_text("전표삭제");
            obj.style.set_imagealign("left");
            obj.style.set_padding("2 0 0 18");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("padding", "disabled", "1 0 0 0");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Button("btnExcelUpload", "absolute", null, "5", "86", "21", "140", null, this.tabXM.tab2);
            obj.set_taborder("5");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Button("btnExcelFormDown", "absolute", null, "5", "100", "21", "229", null, this.tabXM.tab2);
            obj.set_taborder("6");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.tabXM.tab2.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "196", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("13");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "621", "12", "17", "12", null, null, this);
            obj.set_taborder("33");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "643", "97", "68", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("만기일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "643", "71", "68", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("차입일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "446", "71", "68", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("자금유형");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "252", "71", "68", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("차입종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "252", "97", "68", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("차입금명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "28", "97", "96", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("상환완료여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "28", "71", "96", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDBPY_NAME", "absolute", "442", "97", "172", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDBPY_NUMB", "absolute", "317", "97", "100", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRFUND_TYPE", "absolute", "514", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Static("Static60", "absolute", "816", "97", "14", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "816", "71", "14", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHREXPN_DAT1", "absolute", "711", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHREXPN_DAT2", "absolute", "831", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRDBPY_DAT1", "absolute", "711", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRDBPY_DAT2", "absolute", "831", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbSHRDBPY_KIND", "absolute", "317", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "123", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Combo("cmbSHRRPTM_YSNO", "absolute", "123", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Static("imgHelpSHRDBPY_NUMB", "absolute", "419", "97", "21", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("60");
            obj.set_text("차입금관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("61");
            obj.set_text("홈 > 자금관리 > 차입금관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("62");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("63");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("64");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("65");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("66");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("70");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("71");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("72");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("73");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("74");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "223", "61", "40", "67", null, null, this);
            obj.set_taborder("75");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "405", "61", "38", "10", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "405", "92", "102", "5", null, null, this);
            obj.set_taborder("77");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "405", "118", "38", "10", null, null, this);
            obj.set_taborder("78");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("79");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "573", "370", "80", "37", null, null, this);
            obj.set_taborder("80");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1151", "456", "10", "75", null, null, this);
            obj.set_taborder("81");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "9", "456", "10", "67", null, null, this);
            obj.set_taborder("82");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "572", "691", "80", "10", null, null, this);
            obj.set_taborder("83");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "428", "408", "80", "10", null, null, this);
            obj.set_taborder("84");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "20", "456", "30", "67", null, null, this);
            obj.set_taborder("87");
            obj.set_text("w\r30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popSLIP", "absolute", "48", "751", "520", "142", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "502", "91", null, null, this.popSLIP);
            obj.set_taborder("47");
            obj.set_cssclass("styFormItemBoxOut");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Button("btnCreateSlip", "absolute", "439", "70", "63", "21", null, null, this.popSLIP);
            obj.set_taborder("48");
            obj.set_text("자료생성");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Button("btnCloseCreateSlipDiv", "absolute", "449", "108", "62", "24", null, null, this.popSLIP);
            obj.set_taborder("49");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "29", "70", "100", "21", null, null, this.popSLIP);
            obj.set_taborder("50");
            obj.set_text("관련발생전표");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("staXxxx7", "absolute", "29", "44", "100", "21", null, null, this.popSLIP);
            obj.set_taborder("51");
            obj.set_text("상대계좌번호");
            obj.set_cssclass("styFormItemCap");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("staXxxx6", "absolute", "29", "18", "100", "21", null, null, this.popSLIP);
            obj.set_taborder("52");
            obj.set_text("상대계정과목");
            obj.set_cssclass("styFormItemCapBE");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtOTHR_ACCT", "absolute", "125", "18", "101", "21", null, null, this.popSLIP);
            obj.set_taborder("53");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtOTHR_ACNM", "absolute", "251", "18", "185", "21", null, null, this.popSLIP);
            obj.set_taborder("54");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtOTHR_NTNM", "absolute", "251", "44", "185", "21", null, null, this.popSLIP);
            obj.set_taborder("55");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtOTHR_ACNT", "absolute", "125", "44", "101", "21", null, null, this.popSLIP);
            obj.set_taborder("56");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtREOC_NAME", "absolute", "251", "70", "185", "21", null, null, this.popSLIP);
            obj.set_taborder("57");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtREOC_NUMB", "absolute", "125", "70", "68", "21", null, null, this.popSLIP);
            obj.set_taborder("58");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtMANG_ITE2", "absolute", "388", "18", "23", "21", null, null, this.popSLIP);
            obj.set_taborder("59");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtMANG_ITE4", "absolute", "413", "18", "23", "21", null, null, this.popSLIP);
            obj.set_taborder("60");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Edit("edtREOC_SEQN", "absolute", "195", "70", "31", "21", null, null, this.popSLIP);
            obj.set_taborder("61");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("imgHelpOTHR_ACCT", "absolute", "228", null, "21", "21", null, "103", this.popSLIP);
            obj.set_taborder("62");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("imgHelpOTHR_ACNT", "absolute", "228", null, "21", "21", null, "77", this.popSLIP);
            obj.set_taborder("63");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);
            obj = new Static("imgHelpREOC_NUMB", "absolute", "228", null, "21", "21", null, "51", this.popSLIP);
            obj.set_taborder("64");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.popSLIP.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "18", "752", "182", "8", null, null, this);
            obj.set_taborder("88");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "18", "883", "510", "8", null, null, this);
            obj.set_taborder("89");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "49", "771", "8", "96", null, null, this);
            obj.set_taborder("90");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "559", "771", "8", "144", null, null, this);
            obj.set_taborder("91");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1031, 336, this.tabXM.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_text("차입정보");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1031, 336, this.tabXM.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_text("차입거래내역");
            		p.getSetter("position").set("absolute");

            	}
            );
            this.tabXM.tab2.addLayout(obj.name, obj);

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
            		p.set_titletext("차입금관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("tabXM_tab1_edtdDBPY_ACCT_value","tabXM.tab1.edtDBPY_ACCT","value","dsTR_DBPYXM","DBPY_ACCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtDBPY_ACNM_value","tabXM.tab1.edtDBPY_ACNM","value","dsTR_DBPYXM","DBPY_ACNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtINTE_ACCT_value","tabXM.tab1.edtINTE_ACCT","value","dsTR_DBPYXM","INTE_ACCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtINTE_ACNM_value","tabXM.tab1.edtINTE_ACNM","value","dsTR_DBPYXM","INTE_ACNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_calEXPN_DATE_value","tabXM.tab1.calEXPN_DATE","value","dsTR_DBPYXM","EXPN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_cmbDBPY_KIND_value","tabXM.tab1.cmbDBPY_KIND","value","dsTR_DBPYXM","DBPY_KIND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_calDBPY_DATE_value","tabXM.tab1.calDBPY_DATE","value","dsTR_DBPYXM","DBPY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtDBPY_NAME_value","tabXM.tab1.edtDBPY_NAME","value","dsTR_DBPYXM","DBPY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtDBPY_CUNM_value","tabXM.tab1.edtDBPY_CUNM","value","dsTR_DBPYXM","DBPY_CUNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtDBPY_CUST_value","tabXM.tab1.edtDBPY_CUST","value","dsTR_DBPYXM","DBPY_CUST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_mskDBPY_NUMB_value","tabXM.tab1.mskDBPY_NUMB","value","dsTR_DBPYXM","DBPY_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtSECU_DETL_value","tabXM.tab1.edtSECU_DETL","value","dsTR_DBPYXM","SECU_DETL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtDPAC_NUMB_value","tabXM.tab1.edtDPAC_NUMB","value","dsTR_DBPYXM","DPAC_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtDPAC_NAME_value","tabXM.tab1.edtDPAC_NAME","value","dsTR_DBPYXM","DPAC_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_cmbFUND_TYPE_value","tabXM.tab1.cmbFUND_TYPE","value","dsTR_DBPYXM","FUND_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_cmbRPTM_YSNO_value","tabXM.tab1.cmbRPTM_YSNO","value","dsTR_DBPYXM","RPTM_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_cmbPRRP_COND_value","tabXM.tab1.cmbPRRP_COND","value","dsTR_DBPYXM","PRRP_COND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_calFSRP_DATE_value","tabXM.tab1.calFSRP_DATE","value","dsTR_DBPYXM","FSRP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_cmbINTP_COND_value","tabXM.tab1.cmbINTP_COND","value","dsTR_DBPYXM","INTP_COND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtGUAR_DETL_value","tabXM.tab1.edtGUAR_DETL","value","dsTR_DBPYXM","GUAR_DETL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_edtDESC_REMK_value","tabXM.tab1.edtDESC_REMK","value","dsTR_DBPYXM","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_mskINTE_RATE_value","tabXM.tab1.mskINTE_RATE","value","dsTR_DBPYXM","INTE_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_mskDBPY_LIMT_value","tabXM.tab1.mskDBPY_LIMT","value","dsTR_DBPYXM","DBPY_LIMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_mskDBPY_AMOT_value","tabXM.tab1.mskDBPY_AMOT","value","dsTR_DBPYXM","DBPY_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_mskLIMT_BALE_value","tabXM.tab1.mskLIMT_BALE","value","dsTR_DBPYXM","LIMT_BALE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_mskFNRP_DATE_value","tabXM.tab1.mskFNRP_DATE","value","dsTR_DBPYXM","FNRP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_mskRPAY_AMOT_value","tabXM.tab1.mskRPAY_AMOT","value","dsTR_DBPYXM","RPAY_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_mskINPT_DATE_value","tabXM.tab1.mskINPT_DATE","value","dsTR_DBPYXM","INPT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_mskINTF_DATE_value","tabXM.tab1.mskINTF_DATE","value","dsTR_DBPYXM","INTF_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("tabXM_tab1_mskPAID_INTE_value","tabXM.tab1.mskPAID_INTE","value","dsTR_DBPYXM","PAID_INTE");
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
        this.addIncludeScript("TRMC0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRMC0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMC0010 차입금관리
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
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TRMC0010";
        this.sDBPY_NUMB   = "";

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
        	
        	this.fnc_FormatSlipNumber(this.tabXM.tab2.grdTR_DBPYXD, "SLIP_NUMB");

        	this.tabXM.set_tabindex(0);
        	this.cmbSHRACCT_UNIT.setFocus();
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (ob) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTR_DBPYXM,dsTR_DBPYXD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTR_DBPYXM=dsTR_DBPYXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTR_DBPYXM.setFocus();
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1)	{
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	var iRow = this.dsTR_DBPYXM.insertRow(this.dsTR_DBPYXM.rowposition + 1);
        	if (iRow != this.dsTR_DBPYXM.rowposition) this.dsTR_DBPYXM.deleteRow(iRow);
        	
        	this.dsTR_DBPYXM.setColumn(iRow, "ACCT_UNIT", this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        	this.dsTR_DBPYXM.setColumn(iRow, "INTE_RATE", 0); //이자율
        	this.dsTR_DBPYXM.setColumn(iRow, "DBPY_LIMT", 0); //차입한도액
        	this.dsTR_DBPYXM.setColumn(iRow, "DBPY_AMOT", 0); //차입금액
        	this.dsTR_DBPYXM.setColumn(iRow, "LIMT_BALE", 0); //한도잔액
        	this.dsTR_DBPYXM.setColumn(iRow, "RPTM_YSNO", "0"); //상환완료여부
        	this.dsTR_DBPYXM.setColumn(iRow, "RPAY_AMOT", 0); //상환금액
        	this.dsTR_DBPYXM.setColumn(iRow, "PAID_INTE", 0); //납입이자

        	if (this.tabXM.tabindex != 0) this.tabXM.set_tabindex(0);
        	this.tabXM.tab1.edtDBPY_NAME.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTR_DBPYXM.deleteRow(this.dsTR_DBPYXM.rowposition);
        	this.grdTR_DBPYXM.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTR_DBPYXM,dsTR_DBPYXD");
        	this.grdTR_DBPYXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	
        	if (!this.fn_SaveItemCheck()) return;
        	this.sDBPY_NUMB = this.dsTR_DBPYXM.getColumn(this.dsTR_DBPYXM.rowposition, "DBPY_NUMB"); //차입금번호

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTR_DBPYXM=dsTR_DBPYXM:U dsTR_DBPYXD=dsTR_DBPYXD:U ";
        	var sOutDataSet = "dsTR_DBPYXM=dsTR_DBPYXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.tabXM.setFocus();
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
        	var sMessage = this.fnc_FormUnloadCheck("dsTR_DBPYXM,dsTR_DBPYXD", this);
        	
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

        	if ((this.fnc_DatasetChangeCheck("dsTR_DBPYXM,dsTR_DBPYXD")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1)	{
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	var sQuestionText  = "차입금번호(" + this.fnc_Trim(this.dsTR_DBPYXM.getColumn(this.dsTR_DBPYXM.rowposition, "DBPY_NUMB")) + ")";
        		sQuestionText += " 차입금명 (" + this.fnc_Trim(this.dsTR_DBPYXM.getColumn(this.dsTR_DBPYXM.rowposition, "DBPY_NAME")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTR_DBPYXM,dsTR_DBPYXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTR_DBPYXM.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsTR_DBPYXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL)	continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXM.getColumn(i, "DBPY_NAME"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "차임금명", this.dsTR_DBPYXM, i, this.tabXM.tab1.edtDBPY_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXM.getColumn(i, "DBPY_KIND"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "차입종류", this.dsTR_DBPYXM, i, this.tabXM.tab1.cmbDBPY_KIND, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXM.getColumn(i, "DBPY_CUST"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "차입기관", this.dsTR_DBPYXM, i, this.tabXM.tab1.edtDBPY_CUNM, "");
        		}

        		if (!this.fnc_IsDate(this.dsTR_DBPYXM.getColumn(i, "DBPY_DATE"))) {
        			return this.fnc_CheckPostAction("TMM072", "차입일", this.dsTR_DBPYXM, i, this.tabXM.tab1.calDBPY_DATE, "");
        		}

        		if (!this.fnc_IsDate(this.dsTR_DBPYXM.getColumn(i, "EXPN_DATE"))) {
        			return this.fnc_CheckPostAction("TMM072", "만기일", this.dsTR_DBPYXM, i, this.tabXM.tab1.calEXPN_DATE, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXM.getColumn(i, "DBPY_ACCT"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "관리계정과목", this.dsTR_DBPYXM, i, this.tabXM.tab1.edtDBPY_ACNM, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXM.getColumn(i, "INTE_ACCT"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "이자계정과목", this.dsTR_DBPYXM, i, this.tabXM.tab1.edtINTE_ACNM, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXM.getColumn(i, "INTE_RATE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "이자율", this.dsTR_DBPYXM, i, this.tabXM.tab1.mskINTE_RATE, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXM.getColumn(i, "FUND_TYPE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "자금유형", this.dsTR_DBPYXM, i, this.tabXM.tab1.cmbFUND_TYPE, "");
        		}
        	}

        	// 필수 입력 항목 체크
        	var sDbpy_Type;
        	for (var i = 0; i < this.dsTR_DBPYXD.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTR_DBPYXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL)	continue;

        		sDbpy_Type = this.fnc_Trim(this.dsTR_DBPYXD.getColumn(i, "DBPY_TYPE")); //거래유형

        		if (!this.fnc_IsDate(this.dsTR_DBPYXD.getColumn(i, "TRAN_DATE"))) {
        			return this.fnc_CheckPostAction("TMM072", "거래일자", this.dsTR_DBPYXD, i, this.tabXM.tab2.grdTR_DBPYXD, "TRAN_DATE");
        		}

        		if (this.fnc_Length(sDbpy_Type) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "거래유형", this.dsTR_DBPYXD, i, this.tabXM.tab2.grdTR_DBPYXD, "DBPY_TYPE");
        		}

        		if (sDbpy_Type == "DBPY" && nexacro.toNumber(this.dsTR_DBPYXD.getColumn(i, "DBPY_AMOT")) < 1) {
        			// DBPY.차입
        			return this.fnc_CheckPostAction("TMM072", "차입금액", this.dsTR_DBPYXD, i, this.tabXM.tab2.grdTR_DBPYXD, "DBPY_AMOT");
        		}

        		if ((sDbpy_Type == "REPT") && (nexacro.toNumber(this.dsTR_DBPYXD.getColumn(i, "RPAY_AMOT")) < 1)) {
        			// REPT.상환
        			return this.fnc_CheckPostAction("TMM072", "상환금액", this.dsTR_DBPYXD, i, this.tabXM.tab2.grdTR_DBPYXD, "RPAY_AMOT");
        		}

        		if ((sDbpy_Type == "INTE") && (nexacro.toNumber(this.dsTR_DBPYXD.getColumn(i, "INTE_AMOT"))) < 1) {
        			// INTE.이자
        			return this.fnc_CheckPostAction("TMM072", "이자금액", this.dsTR_DBPYXD, i, this.tabXM.tab2.grdTR_DBPYXD, "INTE_AMOT");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(i, "MAJR_REMK"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "적요", this.dsTR_DBPYXD, i, this.tabXM.tab2.grdTR_DBPYXD, "MAJR_REMK");
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
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " DBPY_KIND=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDBPY_KIND.value)); //차입종류
        		sReturnString += " FUND_TYPE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRFUND_TYPE.value)); //자금유형
        		sReturnString += " DBPY_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRDBPY_DAT1.value)); //차입일자1
        		sReturnString += " DBPY_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRDBPY_DAT2.value)); //차입일자2
        		sReturnString += " RPTM_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRPTM_YSNO.value)); //상환완료여부
        		sReturnString += " DBPY_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDBPY_NUMB.value)); //차입금
        		sReturnString += " EXPN_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHREXPN_DAT1.value)); //만기일자1
        		sReturnString += " EXPN_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHREXPN_DAT2.value)); //만기일자2
        		
        	} else if (sKind == "SEARCH01") { // 탭 조회
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.dsTR_DBPYXM.getColumn(this.dsTR_DBPYXM.rowposition, "ACCT_UNIT"))); //회계단위
        		sReturnString += " DBPY_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsTR_DBPYXM.getColumn(this.dsTR_DBPYXM.rowposition, "DBPY_NUMB"))); //차입금번호

        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " DBPY_KIND=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDBPY_KIND.value)); //차입종류
        		sReturnString += " FUND_TYPE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRFUND_TYPE.value)); //자금유형
        		sReturnString += " DBPY_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRDBPY_DAT1.value)); //차입일자1
        		sReturnString += " DBPY_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRDBPY_DAT2.value)); //차입일자2
        		sReturnString += " RPTM_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRPTM_YSNO.value)); //상환완료여부
        		sReturnString += " DBPY_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDBPY_NUMB.value)); //차입금
        		sReturnString += " EXPN_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHREXPN_DAT1.value)); //만기일자1
        		sReturnString += " EXPN_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHREXPN_DAT2.value)); //만기일자2

        	// 전표생성/삭제 Argument 생성
        	} else if (sKind == "PROC00" || sKind == "PROC01") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "ACCT_UNIT"))); //회계단위
        		sReturnString += " DBPY_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "DBPY_NUMB"))); //차입금번호
        		sReturnString += " SEQN_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "SEQN_NUMB"))); //일련번호
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
        	
        		this.fnc_Information(this.stInformation, this.dsTR_DBPYXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTR_DBPYXM.rowcount);
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.dsTR_DBPYXD.set_rowposition(this.dsTR_DBPYXD.getRowCount());
        		this.fnc_Information(this.tabXM.tab2.stInformation, this.dsTR_DBPYXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.dsTR_DBPYXM.set_rowposition(this.dsTR_DBPYXM.findRow("DBPY_NUMB", this.sDBPY_NUMB));
        		this.dsTR_DBPYXD.set_rowposition(this.dsTR_DBPYXD.getRowCount());
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Information(this.tabXM.tab2.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC00") {
        	
        		this.fn_ControlSlipDiv(this.popSLIP.btnCloseCreateSlipDiv);
        		this.dsTR_DBPYXD.set_rowposition(this.dsTR_DBPYXD.getRowCount());
        		this.fnc_Message("TMM130", "차입금거래 전표 생성");
        		
        	} else if (sMethodName == "PROC01")	{
        	
        		this.dsTR_DBPYXD.set_rowposition(this.dsTR_DBPYXD.getRowCount());
        		this.fnc_Message("TMM130", "차입금거래 전표 삭제");
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";	            //회계단위
        			arrParam[1]  = "COMBO,cmbSHRDBPY_KIND,dsSHRDBPY_KIND,0";	            //차입종류
        			arrParam[2]  = "COMBO,cmbSHRFUND_TYPE,dsSHRFUND_TYPE,0";	            //자금유형
        			arrParam[3]  = "COMBO,cmbSHRRPTM_YSNO,dsSHRRPTM_YSNO,0";	            //상환완료여부
        			arrParam[4]  = "COMBO,tabXM.tab1.cmbDBPY_KIND,dsDBPY_KIND,0";	        //차입종류
        			arrParam[5]  = "COMBO,tabXM.tab1.cmbFUND_TYPE,dsFUND_TYPE,0";	        //자금유형
        			arrParam[6]  = "COMBO,tabXM.tab1.cmbRPTM_YSNO,dsRPTM_YSNO,0";	        //상환완료여부
        			arrParam[7]  = "COMBO,tabXM.tab1.cmbPRRP_COND,dsPRRP_COND,0";	        //원금상환조건
        			arrParam[8]  = "COMBO,tabXM.tab1.cmbINTP_COND,dsINTP_COND,0";	        //이자납입조건
        			arrParam[9]  = "GRID,grdTR_DBPYXM,dsDBPY_KIND,DBPY_KIND";               //차입종류(그리드)
        			arrParam[10] = "GRID,grdTR_DBPYXM,dsFUND_TYPE,FUND_TYPE";               //자금유형(그리드)
        			arrParam[11] = "GRID,grdTR_DBPYXM,dsPRRP_COND,PRRP_COND";               //원금상환조건(그리드)
        			arrParam[12] = "GRID,grdTR_DBPYXM,dsINTP_COND,INTP_COND";               //이자납입조건(그리드)
        			arrParam[13] = "GRID,tabXM.tab2.grdTR_DBPYXD,dsDBPY_TYPE,DBPY_TYPE";     //차입거래유형(탭2.그리드)
        			arrParam[14] = "GRID,tabXM.tab2.grdTR_DBPYXD,dsAPPV_STAT,APPV_STAT";     //전표승인상태(탭2.그리드)
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

        	//차입금명
            if ((obj.name == "imgHelpSHRDBPY_NUMB") || (obj.name == "edtSHRDBPY_NAME")) { 
            
                arrParam[0] = "TRM0022";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRDBPY_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDBPY_NAME";
                arrParam[5] = "edtSHRDBPY_NUMB,edtSHRDBPY_NAME";
                arrParam[6] = "0,1";
             
            //차입기관
            } else if ((obj.name == "imgHelpDBPY_CUST") || (obj.name == "edtDBPY_CUNM")) { 
            
                arrParam[0] = "FAM0021";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.tabXM.tab1.edtDBPY_CUNM.value);
                arrParam[3] = "N";
                arrParam[4] = "tabXM.tab1.edtDBPY_CUNM";
                arrParam[5] = "tabXM.tab1.edtDBPY_CUST,tabXM.tab1.edtDBPY_CUNM";
                arrParam[6] = "0,1";
            
            //관리계정과목
            } else if ((obj.name == "imgHelpDBPY_ACCT") || (obj.name == "edtDBPY_ACNM")) { 
            
                arrParam[0] = "FAM0031";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.tabXM.tab1.edtDBPY_ACNM.value);
                arrParam[3] = "N";
                arrParam[4] = "tabXM.tab1.edtDBPY_ACNM";
                arrParam[5] = "tabXM.tab1.edtDBPY_ACCT,tabXM.tab1.edtDBPY_ACNM";
                arrParam[6] = "0,1";
                
            //이자계정과목
            } else if ((obj.name == "imgHelpINTE_ACCT") || (obj.name == "edtINTE_ACNM")) {
            
                arrParam[0] = "FAM0031";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.tabXM.tab1.edtINTE_ACNM.value);
                arrParam[3] = "N";
                arrParam[4] = "tabXM.tab1.edtINTE_ACNM";
                arrParam[5] = "tabXM.tab1.edtINTE_ACCT,tabXM.tab1.edtINTE_ACNM";
                arrParam[6] = "0,1";
            
            // 상대계정과목 
            } else if ((obj.name == "imgHelpDPAC_NUMB") || (obj.name == "edtDPAC_NAME")) { 
            
                arrParam[0] = "TRM0011";
                arrParam[1] = "DBPY";
                arrParam[2] = this.fnc_Trim(this.tabXM.tab1.edtDPAC_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "tabXM.tab1.edtDPAC_NAME";
                arrParam[5] = "tabXM.tab1.edtDPAC_NUMB,tabXM.tab1.edtDPAC_NAME";
                arrParam[6] = "2,3";
                
            // 차입거래내역
            } else if (obj.name == "grdTR_DBPYXD") {
        		
        		// 전표번호맵핑
        		if (sColumnID == "SLIP_NUMB" || this.fnc_getGridHelpColName(obj, sFromDs) == "SLIP_NUMB") {
        			
        			var iRow = obj.getDatasetRow(sFromDs.row);
        			this.dsTR_DBPYXD.set_rowposition(iRow);
        			
        			arrParam[0] = "TRM0023";
        			arrParam[1] = this.dsTR_DBPYXD.getColumn(iRow, "TRAN_DATE") + ","
        						+ this.dsTR_DBPYXM.getColumn(this.dsTR_DBPYXM.rowposition, "DBPY_ACCT") + ","
        						+ this.dsTR_DBPYXM.getColumn(this.dsTR_DBPYXM.rowposition, "INTE_ACCT");
        			
        			arrParam[2] = this.fnc_Trim(this.tabXM.tab1.edtDPAC_NAME.value);
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab2.grdTR_DBPYXD";
        			arrParam[5] = "SLIP_NUMB";
        			arrParam[6] = "0";
        			arrParam[9] = "fn_HelpAfter"
                }
            
            }
            
            if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
            
        }

        this.fn_HelpAfter = function (sRtn) {
        	
        	if (this.fnc_Length(this.fnc_Trim(sRtn)) < 1) return;
        	
        	var e = new nexacro.DSRowPosChangeEventInfo();
        	e.newrow =	this.dsTR_DBPYXD.rowposition;
        	this.fn_KeyFieldDisible(this.dsTR_DBPYXD, e);
        	
        }

        this.tabXM_tab2_grdTR_DBPYXD_onlbuttondown = function(obj,e) {

        	if (this.fnc_getColId(obj, e.cell) == "SLIP_CANC") {
        		
        		this.dsTR_DBPYXD.set_rowposition(obj.getDatasetRow(e.row));
        		
        		this.dsTR_DBPYXD.setColumn(this.dsTR_DBPYXD.rowposition, "SLIP_NUMB", "");
        			
        		var e = new nexacro.DSRowPosChangeEventInfo();
        		e.newrow =	this.dsTR_DBPYXD.rowposition;
        		this.fn_KeyFieldDisible(this.dsTR_DBPYXD, e);
        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (obj.name == "dsTR_DBPYXM") {
        		// 차입마스터
        		this.fn_Search01(obj);
        		// 차입한도액
        		this.fnc_SetReadonly(this.tabXM.tab1.mskDBPY_LIMT, Eco.decode(obj.getColumn(e.newrow, "DBPY_KIND"), "MAXI", false, true));
        		
        	} else if (obj.name == "dsTR_DBPYXD") {
        		if (e.newrow < 0) {
        // 			this.fnc_SetReadonly(this.tabXM.tab2.btnOpenCreateSlipDiv, true); //전표생성
        // 			this.fnc_SetReadonly(this.tabXM.tab2.btnDeleteSlip, true); //전표삭제

        			// 전표번호가 경우 None Edit
        		} else if (this.fnc_Length(this.fnc_Trim(obj.getColumn(e.newrow, "SLIP_NUMB"))) > 0) {
        // 			this.fnc_SetReadonly(this.tabXM.tab2.btnOpenCreateSlipDiv, true); //전표생성
        // 			/*  Count은 지원되지 않는 속성입니다. */
        // 			this.fnc_SetReadonly(this.tabXM.tab2.btnDeleteSlip, Eco.decode(obj.Count, e.newrow + 1, false, true)); //전표삭제

        			for (var i = 0; i < this.tabXM.tab2.grdTR_DBPYXD.getCellCount("body"); i++)	{
        				this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", i, "edittype", "none");
        			}
        			
        		} else {
        // 			this.fnc_SetReadonly(this.tabXM.tab2.btnOpenCreateSlipDiv, false); //전표생성
        // 			this.fnc_SetReadonly(this.tabXM.tab2.btnDeleteSlip, true); //전표삭제

        			var sDbpy_Type = this.dsTR_DBPYXD.getColumn(e.newrow, "DBPY_TYPE");

        			this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "TRAN_DATE"), "edittype", "date"); //거래일자
        			this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "DBPY_TYPE"), "edittype", "combo"); //차입거래유형
        			this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "DBPY_AMOT"), "edittype", Eco.decode(sDbpy_Type, "DBPY", "normal", "none")); //차입금액
        			this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "RPAY_AMOT"), "edittype", Eco.decode(sDbpy_Type, "REPT", "normal", "none")); //상환금액
        			this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "INTE_AMOT"), "edittype", "normal"); //이자금액
        			this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "MAJR_REMK"), "edittype", "normal"); //대표적요
        		}
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*----------------+
         |  탭 조회 처리!  |
         +-----------------*/
        this.fn_Search01 = function (obj) {
        	
        	if (obj.rowcount < 1) return;
        	this.fnc_DatasetClear("dsTR_DBPYXD");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTR_DBPYXD=dsTR_DBPYXD ";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
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

        	if (this.fnc_DatasetChangeCheck("dsTR_DBPYXM,dsTR_DBPYXD"))	{
        		this.fnc_Message("TMM142", "전표생성");
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "ACCT_UNIT"))) < 1
        		 || this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "DBPY_NUMB"))) < 1
        		 || this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "SEQN_NUMB"))) < 1) {
        		 
        		this.fnc_Message("TMM106", "거래내역");
        		return false;
        	}

        	if (!this.fn_CreateSlipItemCheck())	return;

        	if (!this.fnc_Message("BC1006", "차입금 거래 전표 생성")) return;

        	var sMethodName = "PROC00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTR_DBPYXD=dsTR_DBPYXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.tabXM.tab2.grdTR_DBPYXD.setFocus();
        }

        /*---------------------------------+
         |  전표삭제                        |
         +----------------------------------*/
        this.fn_DeleteSlip = function () {

        	if (this.fnc_DatasetChangeCheck("dsTR_DBPYXM,dsTR_DBPYXD"))	{
        		this.fnc_Message("TMM125", "변경된 자료가 존재합니다. 저장 후 진행하세요");
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "ACCT_UNIT"))) < 1
        		 || this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "DBPY_NUMB"))) < 1
        		 || this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "SEQN_NUMB"))) < 1) {
        		 
        		this.fnc_Message("TMM106", "거래내역");
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "SLIP_NUMB"))) < 0) {
        		this.fnc_Message("TMM125", "생성 된 전표가 없습니다.");
        		return false;
        	}

        	var sMethodName = "PROC01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTR_DBPYXD=dsTR_DBPYXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.tabXM.tab2.grdTR_DBPYXD.setFocus();
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  전표 생성 DIV			             |
         +----------------------------------------*/
        this.fn_ControlSlipDiv = function (obj) {

        	if (this.fnc_DatasetChangeCheck("dsTR_DBPYXM,dsTR_DBPYXD")) {
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

        		var sDbpy_Type = this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "DBPY_TYPE"));
        		
        		if (sDbpy_Type == "DBPY") {
        			// DBPY.차입
        			this.popSLIP.staOTHR_ACCT.set_text("입금계정과목");
        			this.popSLIP.staOTHR_ACNT.set_text("입금계좌번호");
        		} else if (sDbpy_Type == "REPT" || sDbpy_Type == "INTE") {
        			// REPT.상환, INTE.이자
        			this.popSLIP.staOTHR_ACCT.set_text("출금계정과목");
        			this.popSLIP.staOTHR_ACNT.set_text("출금계좌번호");
        		}

        		this.popSLIP.__setPosition9x("416px 560px 835px 640px");
        		this.popSLIP.set_visible(true);
        		this.popSLIP.edtOTHR_ACNM.setFocus();
        	} else if (obj.name == "btnCloseCreateSlipDiv") {
        		// DIV전표생성_닫기
        		this.popSLIP.set_visible(false);
        	}
        }

        /*-------------------+
         |  차입거래 행 추가  |
         +--------------------*/
        this.fn_AddRow = function (obj) {

        	var iXMRow = this.dsTR_DBPYXM.rowposition;
        	var sACCT_UNIT = this.fnc_Trim(this.dsTR_DBPYXM.getColumn(iXMRow, "ACCT_UNIT"));
        	var sDBPY_NUMB = this.fnc_Trim(this.dsTR_DBPYXM.getColumn(iXMRow, "DBPY_NUMB"));
        	// 키값 처리 체크
        	if (this.fnc_Length(sACCT_UNIT) < 1 || this.fnc_Length(sDBPY_NUMB) < 1)	{
        		this.fnc_Message("TMM010");
        		return false;
        	}

        	// 전표번호가 모두 있을 경우에만 행추가 가능
        	if (this.dsTR_DBPYXD.getCaseCount("trim(SLIP_NUMB) == NULL") > 0) {
        		this.fnc_Message("TMM125", "전표 미생성 거래내역이 존재 합니다.");
        		return false;
        	}

        	var iRow = this.dsTR_DBPYXD.addRow();
        	this.dsTR_DBPYXD.setColumn(iRow, "ACCT_UNIT", sACCT_UNIT); //회계단위
        	this.dsTR_DBPYXD.setColumn(iRow, "DBPY_NUMB", sDBPY_NUMB); //차입금번호
        	this.dsTR_DBPYXD.setColumn(iRow, "DBPY_GUBN", "계획"); //초기구분은 계획
        	this.dsTR_DBPYXD.setColumn(iRow, "TRAN_DATE", this.fnc_GetServerDateTime("DATE")); //거래일자
        	this.dsTR_DBPYXD.setColumn(iRow, "DBPY_AMOT", 0); //차입금액
        	this.dsTR_DBPYXD.setColumn(iRow, "RPAY_AMOT", 0); //상환금액
        	this.dsTR_DBPYXD.setColumn(iRow, "DBPY_BALE", 0); //차입잔액
        	this.dsTR_DBPYXD.setColumn(iRow, "INTE_AMOT", 0); //이자금액
        	this.dsTR_DBPYXD.setColumn(iRow, "MAJR_REMK", this.dsTR_DBPYXM.getColumn(iXMRow, "DBPY_NAME")); //적요
        	this.tabXM.tab2.grdTR_DBPYXD.setFocus();
        	
        }

        /*-------------------+
         |  차입거래 행 삭제  |
         +--------------------*/
        this.fn_DelRow = function (obj) {

        	if (!this.fn_DelRowCheck())	return;
        	this.dsTR_DBPYXD.deleteRow(this.dsTR_DBPYXD.rowposition);
        	this.tabXM.tab2.grdTR_DBPYXD.setFocus();
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DelRowCheck = function () {

        	if (this.dsTR_DBPYXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "SLIP_NUMB"))) > 0) {
        		this.fnc_Message("FA1002", "차입금 거래 전표");
        		return;
        	}

        	var sTrandate = this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "TRAN_DATE");
        	var sQuestionText = "거래일자: " + this.fnc_SubStr(sTrandate, 0, 4) + "년" + this.fnc_SubStr(sTrandate, 4, 2) + "월" + this.fnc_SubStr(sTrandate, 6) + "일";

        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*----------------+
         |  전표조회 팝업  |
         +-----------------*/
        this.fn_OpenSlip = function (obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "SLIP_NUMB") return;
        	
        	var sSlip_Numb = this.dsTR_DBPYXD.getColumn(this.dsTR_DBPYXD.rowposition, "SLIP_NUMB");
        	if (this.fnc_Length(this.fnc_Trim(sSlip_Numb)) > 0) {		
        		this.fnc_ViewSlipForm(sSlip_Numb, "SHR", this.sUSERLAVEL); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	}
        }

        /*-----------------------+
         |  차입금마스터 변경 시  |
         +-----------------------*/
        this.dsTR_DBPYXM_oncolumnchanged = function (obj,e) {
        	
        	// 차입종류                                // MAXI.한도거래
        	if (e.columnid == "DBPY_KIND") {
        		if (e.newvalue != "MAXI") {
        			this.fnc_SetReadonly(this.tabXM.tab1.mskDBPY_LIMT, true);
        			this.tabXM.tab1.mskDBPY_LIMT.set_value(0);
        		} else {
        			this.fnc_SetReadonly(this.tabXM.tab1.mskDBPY_LIMT, false);
        		}
        	}
        }

        /*-----------------------+
         |  차입거래내역 거래유형 변경 시  |
         +-----------------------*/
        this.dsTR_DBPYXD_oncolumnchanged = function (obj,e) {
        	// DBPY : 차입금액, REPT : 상환금액
        	if (e.columnid == "DBPY_TYPE") {
        		this.fn_TranTypeEdit(this.fnc_Trim(obj.getColumn(e.row, "DBPY_TYPE")));
        	}
        }

        
        /*-----------------------+
         |  거래유형별 edit 처리  |
         +------------------------*/
        this.fn_TranTypeEdit = function (v) {
        	
        	var v1,v2;

        	if (v == "DBPY") {
        		// 차입금액
        		v1 = "normal";
        		v2 = "none";
        		this.dsTR_DBPYXD.setColumn(this.dsTR_DBPYXD.rowposition, "RPAY_AMOT", 0);
        	} else if (v == "REPT") {
        		// 상환금액
        		v1 = "none";
        		v2 = "normal";
        		this.dsTR_DBPYXD.setColumn(this.dsTR_DBPYXD.rowposition, "DBPY_AMOT", 0);
        	}

        	this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "TRAN_DATE"), "edittype", "date"); //거래일자
        	this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "DBPY_TYPE"), "edittype", "combo"); //차입거래유형
        	this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "DBPY_AMOT"), "edittype", v1); //차입금액
        	this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "RPAY_AMOT"), "edittype", v2); //상환금액
        	this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "INTE_AMOT"), "edittype", "normal"); //이자금액
        	this.tabXM.tab2.grdTR_DBPYXD.setCellProperty("body", this.fnc_GridColumnIndex(this.tabXM.tab2.grdTR_DBPYXD, "MAJR_REMK"), "edittype", "normal"); //대표적요
        	
        }

        /*---------------------------+
         |  차입금마스터 Row 변경 시  |
         +----------------------------*/
        this.dsTR_DBPYXM_canrowposchange = function (obj,e) {
        	
        	// 차입거래내역 데이터 변경사항 있을 시 초기화 경고
        	if (this.fnc_DatasetChangeCheck("dsTR_DBPYXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        }

        /*-----------------------------+
         |  양식파일 다운로드 클릭 時|
         +------------------------------*/
        this.fn_ExcelFileDown = function (obj,e) {

        	// 양식받기는 고정값("upload/sample/") 으로 지정한다..
        	// 엑셀양식은 기존의 명칭을 사용한다..
        	var folderName = "upload/sample/";
        	var fileName = "UpSample_CarryTrade.xls";
        	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        	var bSucc = this.lookupFunc("fnc_FileDownLoad").call(this.FileDownload00, folderName, fileName);
        }

        /*---------------------------+
         |  양식파일 업로드 클릭 時   |
         +----------------------------*/
        this.fn_ExcelUpLoad = function (obj,e) {

        	var fdNSE_FILE = new FileDialog();
        	var vfNSE_FILE = new VirtualFile();

        	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");

        	var vFile = fdNSE_FILE.open("차입거래내역 엑셀 업로드", FileDialog.LOAD, "%MYDOCUMENT%");

        	if (vFile == null) return false;

        	var objExtComm = new ExtCommon();

        	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);

        	this.dsTR_DBPYXD_TEMP.set_updatecontrol(false);

        	var iXMRow = this.dsTR_DBPYXM.rowposition;
        	var sACCT_UNIT = this.fnc_Trim(this.dsTR_DBPYXM.getColumn(iXMRow, "ACCT_UNIT"));
        	var sDBPY_NUMB = this.fnc_Trim(this.dsTR_DBPYXM.getColumn(iXMRow, "DBPY_NUMB"));
        	
        	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) {
        		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) {
        			var nRow = this.dsTR_DBPYXD_TEMP.addRow();

        			this.dsTR_DBPYXD_TEMP.setColumn(nRow, "ACCT_UNIT", sACCT_UNIT); //회계단위
        			this.dsTR_DBPYXD_TEMP.setColumn(nRow, "DBPY_NUMB", sDBPY_NUMB); //차입금번호
        			this.dsTR_DBPYXD_TEMP.setColumn(nRow, "DBPY_GUBN", "계획"); //구분
        			this.dsTR_DBPYXD_TEMP.setColumn(nRow, "DBPY_BALE", 0); //차입잔액
        			this.dsTR_DBPYXD_TEMP.setColumn(nRow, "TRAN_DATE", this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))); //거래일자
        			this.dsTR_DBPYXD_TEMP.setColumn(nRow, "DBPY_TYPE", this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //거래유형
        			this.dsTR_DBPYXD_TEMP.setColumn(nRow, "DBPY_AMOT", this.fnc_Trim(this.DS_EXCEL.getColumn(i, 2))); //차입금액
        			this.dsTR_DBPYXD_TEMP.setColumn(nRow, "RPAY_AMOT", this.fnc_Trim(this.DS_EXCEL.getColumn(i, 3))); //상환금액
        			this.dsTR_DBPYXD_TEMP.setColumn(nRow, "INTE_AMOT", this.fnc_Trim(this.DS_EXCEL.getColumn(i, 4))); //이자금액
        			this.dsTR_DBPYXD_TEMP.setColumn(nRow, "MAJR_REMK", this.fnc_Trim(this.DS_EXCEL.getColumn(i, 5))); //적요
        		}
        	}

        	this.dsTR_DBPYXD_TEMP.set_updatecontrol(true);

        	// 복사 전 체크
        	if (this.fn_ExcelUploadCheck())	{
        		// TEMP DataSet에서 복사.
        		this.dsTR_DBPYXD.copyData(this.dsTR_DBPYXD_TEMP);

        		// 복사해온 Row Status는 Insert Type.
        		this.dsTR_DBPYXD.set_updatecontrol(false);
        		for (var i = 0; i < this.dsTR_DBPYXD.getRowCount(); i++) {
        			this.dsTR_DBPYXD.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}
        		
        		this.dsTR_DBPYXD.set_updatecontrol(true);

        		this.tabXM.tab2.stInformation.set_text((this.dsTR_DBPYXD.rowcount + "개의 데이타를 로드 했습니다."));

        		this.dsTR_DBPYXD.set_rowposition(0);

        		this.tabXM.tab2.grdTR_DBPYXD.setFocus();
        	}

        	this.dsTR_DBPYXD_TEMP.clearData();

        }

        /*-----------------------+
         |  엑셀 업로드 전 처리 ! |
         +------------------------*/
        this.fn_ExcelUploadCheck = function () {

        	if (this.dsTR_DBPYXD_TEMP.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTR_DBPYXD_TEMP.getRowCount(); i++) {
        		// 일자
        		if (!this.fnc_IsDate(this.dsTR_DBPYXD_TEMP.getColumn(i, "TRAN_DATE"))) {
        			var sMessage = "엑셀파일의" + (i + 1) + "번째의 Row의 거래일자가 잘못되었습니다";
        			return this.fnc_CheckPostAction("TMM125", sMessage, this.dsTR_DBPYXD_TEMP, i, this.grdTR_DBPYXD, "TRAN_DATE");
        		}

        		// 유형 - 차입
        		if (this.fnc_Trim(this.dsTR_DBPYXD_TEMP.getColumn(i, "DBPY_TYPE")) == "DBPY") {
        			if (this.fnc_Trim(this.dsTR_DBPYXD_TEMP.getColumn(i, "DBPY_AMOT")) == 0) {
        				var sMessage = "엑셀파일의 " + (i + 1) + "번째 Row의 차입금액이 잘못되었습니다.";
        				return this.fnc_CheckPostAction("TMM125", sMessage, this.dsTR_DBPYXD_TEMP, i, this.grdTR_DBPYXD, "DBPY_AMOT");
        			}
        			// 상환 0
        			this.dsTR_DBPYXD_TEMP.setColumn(i, "RPAY_AMOT", 0);

        			// 유형 - 이자
        		} else if (this.fnc_Trim(this.dsTR_DBPYXD_TEMP.getColumn(i, "DBPY_TYPE")) == "INTE") {
        			if (this.fnc_Trim(this.dsTR_DBPYXD_TEMP.getColumn(i, "INTE_AMOT")) == 0) {
        				var sMessage = "엑셀파일의 " + (i + 1) + "번째 Row의 이자금액이 잘못되었습니다.";
        				return this.fnc_CheckPostAction("TMM125", sMessage, this.dsTR_DBPYXD_TEMP, i, this.grdTR_DBPYXD, "INTE_AMOT");
        			}
        			// 차입 상환 0
        			this.dsTR_DBPYXD_TEMP.setColumn(i, "DBPY_AMOT", 0);
        			this.dsTR_DBPYXD_TEMP.setColumn(i, "RPAY_AMOT", 0);

        			// 유형 - 상환
        		} else if (this.fnc_Trim(this.dsTR_DBPYXD_TEMP.getColumn(i, "DBPY_TYPE")) == "REPT") {
        			if (this.fnc_Trim(this.dsTR_DBPYXD_TEMP.getColumn(i, "RPAY_AMOT")) == 0) {
        				var sMessage = "엑셀파일의 " + (i + 1) + "번째 Row의 상환금액이 잘못되었습니다.";
        				return this.fnc_CheckPostAction("TMM125", sMessage, this.dsTR_DBPYXD_TEMP, i, this.grdTR_DBPYXD, "RPAY_AMOT");
        			}
        			// 차입 0
        			this.dsTR_DBPYXD_TEMP.setColumn(i, "DBPY_AMOT", 0);
        		} else {
        			var sMessage = "엑셀파일의 " + (i + 1) + "번째 Row의 거래유형이 잘못되었습니다.";
        			return this.fnc_CheckPostAction("TMM125", sMessage, this.dsTR_DBPYXD_TEMP, i, this.grdTR_DBPYXD, "DBPY_TYPE");
        		}

        		// 적요
        		if (this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD_TEMP.getColumn(i, "MAJR_REMK"))) < 1) {
        			var sMessage = "엑셀파일의 " + (i + 1) + "번째 Row의 적요가 없습니다.";
        			return this.fnc_CheckPostAction("TMM125", sMessage, this.dsTR_DBPYXD_TEMP, i, this.grdTR_DBPYXD, "MAJR_REMK");
        		}
        	}

        	return true;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTR_DBPYXM.addEventHandler("canrowposchange", this.dsTR_DBPYXM_canrowposchange, this);
            this.dsTR_DBPYXM.addEventHandler("oncolumnchanged", this.dsTR_DBPYXM_oncolumnchanged, this);
            this.dsTR_DBPYXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTR_DBPYXD.addEventHandler("oncolumnchanged", this.dsTR_DBPYXD_oncolumnchanged, this);
            this.dsTR_DBPYXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.tabXM.tab1.mskPAID_INTE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.mskINTF_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.mskINPT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.mskRPAY_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.mskFNRP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.mskLIMT_BALE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.mskDBPY_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.mskDBPY_LIMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.mskINTE_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.edtDESC_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.edtGUAR_DETL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.cmbINTP_COND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.calFSRP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.cmbPRRP_COND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.cmbFUND_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.edtDPAC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.edtDPAC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabXM.tab1.edtSECU_DETL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.edtDBPY_CUNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.edtDBPY_CUNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabXM.tab1.edtDBPY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.calDBPY_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.cmbDBPY_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.calEXPN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.edtINTE_ACNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.edtINTE_ACNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabXM.tab1.edtDBPY_ACNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.tabXM.tab1.edtDBPY_ACNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.tabXM.tab1.edtDBPY_ACCT.addEventHandler("oneditclick", this.tabXM_tab1_edtdDBPY_ACCT_oneditclick, this);
            this.tabXM.tab1.imgHelpDBPY_CUST.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabXM.tab1.imgHelpDBPY_ACCT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabXM.tab1.imgHelpDPAC_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabXM.tab1.imgHelpINTE_ACCT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.tabXM.tab2.grdTR_DBPYXD.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.tabXM.tab2.grdTR_DBPYXD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.tabXM.tab2.grdTR_DBPYXD.addEventHandler("onlbuttondown", this.tabXM_tab2_grdTR_DBPYXD_onlbuttondown, this);
            this.tabXM.tab2.btnDelRow.addEventHandler("onclick", this.fn_DelRow, this);
            this.tabXM.tab2.btnAddRow.addEventHandler("onclick", this.fn_AddRow, this);
            this.tabXM.tab2.btnOpenCreateSlipDiv.addEventHandler("onclick", this.fn_ControlSlipDiv, this);
            this.tabXM.tab2.btnDeleteSlip.addEventHandler("onclick", this.fn_DeleteSlip, this);
            this.tabXM.tab2.btnExcelUpload.addEventHandler("onclick", this.fn_ExcelUpLoad, this);
            this.tabXM.tab2.btnExcelFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.edtSHRDBPY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDBPY_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRFUND_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHREXPN_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHREXPN_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRDBPY_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRDBPY_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRDBPY_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRPTM_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDBPY_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
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

        this.loadIncludeScript("TRMC0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
