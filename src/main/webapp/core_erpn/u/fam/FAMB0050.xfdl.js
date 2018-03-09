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
                this.set_name("FAMB0050");
                this.set_titletext("전표변경내역조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsLOGX_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"CODEID\">LOGX_GUBN</Col><Col id=\"REMK\">작업</Col><Col id=\"USEDFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNTLOG", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"LOGX_SEQX\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"LOGX_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"LOGX_EMNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CSTC_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EXCH_RATE\" size=\"17\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_AMNT\" size=\"17\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"17\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"UNMC_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BUDG_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROJ_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BGRQ_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BUDG_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BUDG_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BDSB_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BDSP_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAM2\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAM3\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_DOCU\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_TYPE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PURC_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BULG_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EBIL_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"17\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_AMNT\" size=\"17\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ETIS_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_APPR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"LEDG_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_INOU\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"64\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_MANM\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"BABR_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"PRIN_ORDR\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_KEY1\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_KEY2\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXMLOG", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"LOGX_SEQX\" size=\"6\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"LOGX_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"LOGX_EMNM\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"LOGX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REQU_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLAP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DPNM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DOCN\" size=\"32\" prop=\"default\" type=\"STRING\"/><Column id=\"APPS_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APCP_YEAR\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DTCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROC_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"AUTO_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SOUS_LNKY\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_ACPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MEMO_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_CHAX\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_DAEX\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"FORI_CHAX\" type=\"STRING\" size=\"256\"/><Column id=\"FORI_DAEX\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_FORI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSLIP_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"PARAM\">전표종류</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0003</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "8", "61", "30", "41", null, null, this);
            obj.set_taborder("64");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "31", "349", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "290", "322", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_taborder("15");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNTLOG", "absolute", "8", "312", null, null, "24", "15", this);
            obj.set_binddataset("dsTA_SLIPNTLOG");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"68\"/><Column size=\"70\"/><Column size=\"45\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"180\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"이력순번\"/><Cell col=\"1\" displaytype=\"text\" text=\"이력구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"순번\"/><Cell col=\"3\" displaytype=\"text\" text=\"작업일\"/><Cell col=\"4\" displaytype=\"text\" text=\"작업자\"/><Cell col=\"5\" text=\"계정코드\"/><Cell col=\"6\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"7\" displaytype=\"text\" text=\"차변원화금액\"/><Cell col=\"8\" displaytype=\"text\" text=\"대변원화금액\"/><Cell col=\"9\" text=\"통화\"/><Cell col=\"10\" displaytype=\"text\" text=\"차변외화금액\"/><Cell col=\"11\" displaytype=\"text\" text=\"대변외화금액\"/><Cell col=\"12\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:LOGX_SEQX\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:LOGX_GUBN\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:SLIP_LINE\"/><Cell col=\"3\" displaytype=\"date\" style=\"align:center;\" text=\"bind:LOGX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:LOGX_EMNM\"/><Cell col=\"5\" text=\"bind:ACCT_INTL\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" expr=\"expr:Eco.decode(DRCR_GUBN, 'D', SLIP_AMNT, 0)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" expr=\"expr:Eco.decode(DRCR_GUBN, 'C', SLIP_AMNT, 0)\"/><Cell col=\"9\" text=\"bind:CURR_GUBN\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" text=\"bind:FORI_AMNT\" expr=\"expr:Eco.decode(DRCR_GUBN, 'D', FORI_AMNT, 0)\" mask=\"#,##0.#0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" text=\"bind:FORI_AMNT\" expr=\"expr:Eco.decode(DRCR_GUBN, 'C', FORI_AMNT, 0)\" mask=\"#,##0.#0\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXMLOG", "absolute", "652", "118", null, "169", "25", null, this);
            obj.set_binddataset("dsTA_SLIPXMLOG");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\"/><Column size=\"90\"/><Column size=\"98\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"이력순번\"/><Cell col=\"1\" displaytype=\"text\" text=\"이력구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"작업자\"/><Cell col=\"3\" displaytype=\"text\" text=\"작업일\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:LOGX_SEQX\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:LOGX_GUBN\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"bind:LOGX_EMNM\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;\" text=\"bind:LOGX_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSLIPSearch", "absolute", "8", "34", "70", "21", null, null, this);
            obj.set_text("전표조회");
            obj.set_cssclass("btn_WF_Module");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE", "absolute", "334", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("shape2", "absolute", "8", "118", "624", "169", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTITL_NAME", "absolute", "97", "153", "514", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDIFF_FORI", "absolute", "491", "257", "120", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_mask("###,##0.00");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDIFF_SLIP", "absolute", "491", "231", "120", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_mask("###,###");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskFORI_DAEX", "absolute", "297", "257", "120", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_mask("###,##0.00");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskFORI_CHAX", "absolute", "97", "257", "120", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_mask("###,##0.00");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_DAEX", "absolute", "297", "231", "120", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_mask("###,###");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_CHAX", "absolute", "97", "231", "120", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_mask("###,###");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSLIP_GUBN", "absolute", "97", "127", "318", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new Edit("Edit23", "absolute", "491", "205", "120", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "423", "205", "70", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("승인부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3", "absolute", "361", "205", "56", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit0", "absolute", "297", "205", "62", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "228", "205", "70", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("승인자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar2", "absolute", "97", "205", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");

            obj = new Calendar("Calendar0", "absolute", "97", "179", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");

            obj = new Static("Static21", "absolute", "28", "153", "70", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "423", "257", "70", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("외화대차");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "423", "231", "70", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("원화대차");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "228", "257", "70", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("대변외화");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "28", "257", "70", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("차변외화");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "28", "231", "70", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("차변원화");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "228", "231", "70", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("대변원화");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit7", "absolute", "491", "179", "120", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit2", "absolute", "361", "179", "56", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "423", "179", "70", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("작성부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit1", "absolute", "297", "179", "62", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "228", "179", "70", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "28", "205", "70", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("회계일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", "179", "70", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("전표일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSlipNumb", "absolute", "436", "71", "21", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "28", "71", "69", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRSLIP_NUMB", "absolute", "97", "71", "138", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2.36%", null, null, "15", "1.94%", "0", this);
            obj.set_taborder("57");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_cssclass("sta_GID_box");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "97.89%", "0", null, "717", "0%", null, this);
            obj.set_taborder("58");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0%", "0", null, "717", "99.33%", null, this);
            obj.set_taborder("62");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", "127", "70", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_text("전표유형");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "265", "71", "70", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_text("전표일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "235", "61", "41", "41", null, null, this);
            obj.set_taborder("68");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "326", "61", "8", "41", null, null, this);
            obj.set_taborder("69");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", null, "61", "8", "41", "1090", null, this);
            obj.set_taborder("70");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9", "123", "30", "73", null, null, this);
            obj.set_taborder("71");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "9.69%", "119", null, "8", "87.11%", null, this);
            obj.set_taborder("72");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "9.69%", "148", null, "5", "83.07%", null, this);
            obj.set_taborder("73");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "43.13%", "287", null, "25", "50.13%", null, this);
            obj.set_taborder("74");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "43.13%", "103", null, "15", "50.13%", null, this);
            obj.set_taborder("75");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "9.69%", "200", null, "5", "83.07%", null, this);
            obj.set_taborder("76");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "9.69%", "226", null, "5", "83.07%", null, this);
            obj.set_taborder("78");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "9.69%", "252", null, "5", "83.07%", null, this);
            obj.set_taborder("79");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "9.69%", "278", null, "8", "87.11%", null, this);
            obj.set_taborder("80");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "8", "306", "264", "6", null, null, this);
            obj.set_taborder("81");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "9.69%", "174", null, "5", "83.07%", null, this);
            obj.set_taborder("82");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "421", "127", "70", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("이력순번");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskLOGX_SEQX", "absolute", "489", "127", "122", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_readonly("true");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "20", "29", null, null, this);
            obj.set_taborder("86");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "608", "0", "36", "60", null, null, this);
            obj.set_taborder("87");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "75.65%", "23", null, "10", "2.11%", null, this);
            obj.set_taborder("88");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "25", null, this);
            obj.set_taborder("89");
            obj.set_text("재무관리 > 전표관리 > 전표조회 > 전표변경내역조회");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "511", "23", "25", null, this);
            obj.set_taborder("90");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "512", null, this);
            obj.set_taborder("91");
            obj.set_text("전표변경내역조회");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "611", "123", "20", "73", null, null, this);
            obj.set_taborder("92");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "632", "187", "20", "49", null, null, this);
            obj.set_taborder("93");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 349, 25, this.Div0,
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
            		p.set_titletext("전표변경내역조회");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtTITL_NAME_value","edtTITL_NAME","value","dsTA_SLIPXMLOG","TITL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("MaskEdit4_value","mskDIFF_FORI","value","dsTA_SLIPXMLOG","DIFF_FORI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("MaskEdit3_value","mskDIFF_SLIP","value","dsTA_SLIPXMLOG","DIFF_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("MaskEdit2_value","mskFORI_DAEX","value","dsTA_SLIPXMLOG","FORI_DAEX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("MaskEdit1_value","mskFORI_CHAX","value","dsTA_SLIPXMLOG","FORI_CHAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("MaskEdit0_value","mskSLIP_DAEX","value","dsTA_SLIPXMLOG","SLIP_DAEX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medSLIP_AMNT_FR_value","mskSLIP_CHAX","value","dsTA_SLIPXMLOG","SLIP_CHAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbSLIP_PGBN_value","cmbSLIP_GUBN","value","dsTA_SLIPXMLOG","SLIP_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit23_value","Edit23","value","dsTA_SLIPXMLOG","APPR_DPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit3_value","Edit3","value","dsTA_SLIPXMLOG","APPR_EMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit0_value","Edit0","value","dsTA_SLIPXMLOG","APPR_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Calendar2_value","Calendar2","value","dsTA_SLIPXMLOG","APPR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Calendar0_value","Calendar0","value","dsTA_SLIPXMLOG","SLIP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit7_value","Edit7","value","dsTA_SLIPXMLOG","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit2_value","Edit2","value","dsTA_SLIPXMLOG","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit1_value","Edit1","value","dsTA_SLIPXMLOG","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","mskLOGX_SEQX","value","dsTA_SLIPXMLOG","LOGX_SEQX");
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
        this.addIncludeScript("FAMB0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMB0050.xfdl", function() {
        /***************************************************************************************************
         *   Form Common Script                                                                            *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리              *
         *                                                                                                 *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망   *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************        
         *  공통 Script Include  *
         ************************/        
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "FAMB0050"; //해당 Form에서 사용 할 Package 명
        this.sALLX_YSNO   = "";
        this.sLoadForm    = "";
        this.sSlipNumb    = "";
        this.sLoadForm = "NEW";  

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
        this.fn_FormLoadSetting = function (obj,e){

        	//전표번호 MASK
        	this.fnc_FormatSlipNumber(this.mskSHRSLIP_NUMB);
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);

        	if (this.sLoadForm == "NEW"){

        		this.calSHRSLIP_DATE.set_value(this.fnc_GetServerDateTime("DATE"));

        	}

        	this.mskSHRSLIP_NUMB.setFocus();
        }
         
        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e){
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_SLIPXMLOG,dsTA_SLIPNTLOG");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLIPXMLOG=dsTA_SLIPXMLOG dsTA_SLIPNTLOG=dsTA_SLIPNTLOG";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXMLOG.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e){
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e){
        	
        	this.fnc_DataSetCancel("dsTA_SLIPXMLOG,dsTA_SLIPNTLOG");
        	this.grdTA_SLIPNTLOG.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e){

        	this.fnc_ToExcel(this);
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e){

        	if (this.dsTA_SLIPNTLOG.getRowCount() <= 0){
        	
        		this.fnc_Message("TMM125", "조회 후 인쇄하세요"); 
        		return;
        	}

        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; //Context Root
        	application.GBL_RPTFILENAME = "fama0130.jrf"; 					      //Report File Name

        	application.GBL_RPTARGUMENT = 'sArg001,' + this.calSHRSLIP_DATE.value + "-" + this.edtSHRDISP_NUMB.value + "^";

        	application.GBL_RPTDATASET = "dsTA_SLIPNTLOG,dsLOGX_GUBN";
        	application.GBL_PRINT = "Y"; 										 //미리보기 사이즈 120%

        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	application.dialog("전표변경내역조회", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
        	
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);

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
        /*-------------------+
         /  조회 여부 체크!   /
         +--------------------*/
        this.fn_SearchItemCheck = function (){
        	
        	if (this.fnc_IsDate(this.calSHRSLIP_DATE.value) == false) {
        	
        	   return this.fnc_CheckPostAction("TMM072", "전표일자", "", "", this.calSHRSLIP_DATE, "");
        	}
        	
        	if (this.fnc_Length(this.mskSHRSLIP_NUMB.value) < 1){
        	
        		return this.fnc_CheckPostAction("TMM072", "전표번호", "", "", this.mskSHRSLIP_NUMB, "");
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind){

        	var sReturnString;

        	if (sKind == "SEARCH00"){
        	
        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME); 		 //Package(Action Bean명)
        		sReturnString += " action="    + this.fnc_Quote(sKind);						 //호출할 Package의 Method명
        		sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.mskSHRSLIP_NUMB.value); 
        	}

        	return sReturnString;
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG){
        	
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
        this.fn_PostProcess = function (sMethodName){

        	if (sMethodName == "SEARCH00"){
        	    
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNTLOG.rowcount, "SHR"); 
        		this.fnc_Message("TMM018", this.dsTA_SLIPNTLOG.rowcount);
        		this.grdTA_SLIPXMLOG.selectRow(this.dsTA_SLIPXMLOG.rowposition);
        		
        	} else if (sMethodName == "GetCommCode"){
        		
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdTA_SLIPXMLOG,dsLOGX_GUBN,LOGX_GUBN";
        			arrParam[1] = "GRID,grdTA_SLIPNTLOG,dsLOGX_GUBN,LOGX_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} else if (sMethodName == "GetUserComboCode") {
        	
            	var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSLIP_GUBN,dsSLIP_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow){
        	//기능없음
        }

        /*----------------------------------------------------------------+
         | Help Popup Open                     |
         +-----------------------------------------------------------------*/
        this.fn_SlipDialoge = function (obj,nX,nY){

        	var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=800";       //현재 반응 없음
        		sOpenStyle += ",height=500";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        	
            this.fnc_OpenPopup("FAMB0050P01", "fam::FAMB0050P01.xfdl", {sSHRSLIP_DATE:this.calSHRSLIP_DATE.value,sSHRSLIP_USERID:(application.GBL_EMPLNO),sSHRSLIP_USERNM:(application.GBL_USERNM),sSHRSLIP_DEPTCD:(application.GBL_DEPTCD),sSHRSLIP_DEPTNM:(application.GBL_DEPTNM)}, sOpenStyle, "fn_SlipDialoge_After");	
        	
        }

        /*--------------------------------------+
         |  팝업 Callback                       |
         +---------------------------------------*/
        this.fn_SlipDialoge_After = function(sPopupId,Variant){

           var rtn = this.fnc_GetPopupRtn();
           if (this.fnc_Length(rtn) > 0) this.mskSHRSLIP_NUMB.set_value(rtn);
           this.fn_Search();
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  전표상세조회 |
         +------------------------*/
        this.btnSLIPSearch_OnClick = function (obj,e){
           
        	if (this.fnc_Length(this.mskSHRSLIP_NUMB.value) < 1){
        	
        		return this.fnc_CheckPostAction("TMM072", "전표번호", "", "", this.mskSHRSLIP_NUMB, "");
        	}
        	
        	var sSlipNumb = this.mskSHRSLIP_NUMB.value;
        	this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	
        }

        this.dsTA_SLIPXMLOG_onrowposchanged = function(obj,e) {
        	
        	var iFindRow = this.dsTA_SLIPNTLOG.findRowExpr("LOGX_SEQX == '" + obj.getColumn(e.newrow, "LOGX_SEQX") + "'");
        	
        	if (iFindRow < 0) return;
        	
        	this.dsTA_SLIPNTLOG.set_rowposition(iFindRow);
        	this.grdTA_SLIPNTLOG.selectRow(iFindRow);
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPXMLOG.addEventHandler("onrowposchanged", this.dsTA_SLIPXMLOG_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnSLIPSearch.addEventHandler("onclick", this.btnSLIPSearch_OnClick, this);
            this.edtTITL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDIFF_FORI.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDIFF_SLIP.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskFORI_DAEX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskFORI_CHAX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSLIP_DAEX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSLIP_CHAX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSLIP_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit23.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit0.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Calendar2.addEventHandler("onchanged", this.edtSHRDISP_NUMB_OnChanged, this);
            this.Calendar0.addEventHandler("onchanged", this.edtSHRDISP_NUMB_OnChanged, this);
            this.Edit7.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSlipNumb.addEventHandler("onclick", this.fn_SlipDialoge, this);
            this.mskSHRSLIP_NUMB.addEventHandler("onsetfocus", this.fnc_EditFocus, this);
            this.mskLOGX_SEQX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMB0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
