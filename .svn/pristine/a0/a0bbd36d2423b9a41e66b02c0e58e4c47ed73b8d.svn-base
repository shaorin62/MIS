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
                this.set_name("FAMG0260");
                this.set_titletext("부가세신고서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,990,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_H1", this);
            obj.set_keystring("BDR_TYPECD");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_SYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_EYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_CYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_CELL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_EMAIL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LOCATION\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_SYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REVISION_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_PURPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_PURPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_CRECAS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_CRECAS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXETC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_ZERETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_WILMIS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_WILMIS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_DOUADD_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_DOUADD_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ASSETS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ASSETS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_WILTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_WILTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PURPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PURPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ETCBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PTOTAL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PTOTAL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_UNABLE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_UNABLE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ADDMIN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ADDMIN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SP_RETURN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_ETCMIN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_CREDIT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_CREDIT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_MINTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_WILRET_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_NOTRET_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_PROHIB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_ADDTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_PAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_JPAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"IH_EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"IH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_PROXY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_H2", this);
            obj.set_keystring("BDR_TYPECD");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SW_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_TAXETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_TAXETC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_ZERETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_SALTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_SALTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_ETCBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_PURTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_CREDIT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_CREDIT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_AGENDA_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_AGENDA_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_RECYCL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_RECYCL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_CONVER_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ALAGEN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ALAGEN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ASSETS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ASSETS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_STOCKP_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_BADDEP_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_PURTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_UNABLE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_UNABLE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_EXCEPT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_DOUADD_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_DOUADD_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_PURTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_EBIPAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_EBITAX_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_TAXICO_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_CASBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_BIZMIS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_BIZMIS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIDEL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIDEL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBDERV_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBDERV_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOTPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOTPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIOVE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIOVE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIEXC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIEXC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPORT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPORT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOSEND_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOSEND_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ZERBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_CASNOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_CASNOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ADDTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXDEL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXDEL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR1_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR1_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR2_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR2_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR3_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR3_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR4_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR4_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ESTATE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ESTATE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DF_EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DF_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BD_SALTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BD_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REFUND_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_BANKCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_BANKNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_TOTPAYNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_BANKBRANCH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_EYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOSING_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_REF_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_NTAX_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_EARLY_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_UNITTAXNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PD_FOREINER_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCNOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCNOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCDELAY_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCDELAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVAT_QUARTER", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\"/><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">1기예정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">2</Col><Col id=\"SUBNAME\">1기확정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">3</Col><Col id=\"SUBNAME\">2기예정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">4</Col><Col id=\"SUBNAME\">2기확정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">FC02</Col><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBANK_CODE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INCOME_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INCOME_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INCOME_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_D2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDU_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDU_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_VAMT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_D3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ADTX_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ADTX_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ADTXVAMT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab0", "absolute", "8", "124", null, null, "8", "8", this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.Tab0);
            obj.set_scrollbars("autoboth");
            obj.set_taborder("75");
            obj.set_text("VAT신고서 1쪽");
            obj.getSetter("position").set("absolute");
            obj.style.set_anchor("default");
            obj.style.set_background("#ffffffff");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "540", "477", "75", "23", null, null, this.Tab0.tab1);
            obj.set_text("세무대리인");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "540", "400", "60", "23", null, null, this.Tab0.tab1);
            obj.set_text("폐업신고");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static1", "absolute", "540", "9", "60", "23", null, null, this.Tab0.tab1);
            obj.set_text("신고일반");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static4", "absolute", "664", "30", "175", "23", null, null, this.Tab0.tab1);
            obj.set_text("총괄납부승인번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtPERMITNUM", "absolute", "840", "30", "126", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBA", "absolute", "8", "8", "520", "218", null, null, this.Tab0.tab1);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_H1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("0");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"235\"/><Column size=\"150\"/><Column size=\"130\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" displaytype=\"text\" text=\"과세표준및매출세액\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell col=\"0\" displaytype=\"text\" text=\"과세 - 세금계산서발급분\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SH_TAXBIL_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:SH_TAXBIL_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"1\" text=\"과세 - 매입자발행세금계산서\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SH_PURPUB_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"1\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:SH_PURPUB_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"1\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"2\" text=\"과세 - 신용카드,현금영수증 발행분\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SH_CRECAS_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"2\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:SH_CRECAS_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"2\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"3\" text=\"과세 - 기      타\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SH_TAXETC_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"3\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:SH_TAXETC_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"3\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"4\" text=\"영세 - 세금계산서발급분\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SH_ZERBIL_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"4\" style=\"align: right;\"/><Cell col=\"2\" displaytype=\"normal\" row=\"4\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"5\" text=\"영세 - 기      타\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SH_ZERETC_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"5\" style=\"align: right;\"/><Cell col=\"2\" displaytype=\"normal\" row=\"5\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"6\" text=\"예  정  신  고  누  락  분\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SH_WILMIS_SAMT\" displaytype=\"number\" row=\"6\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:SH_WILMIS_VAMT\" displaytype=\"number\" row=\"6\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"7\" text=\"대  손  세  액  가  감\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"number\" row=\"7\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:SH_DOUADD_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"7\" style=\"align: right;\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBD", "absolute", "540", "205", "426", "122", null, null, this.Tab0.tab1);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_D");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("9");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"139\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"업태\"/><Cell col=\"1\" displaytype=\"text\" text=\"종목\"/><Cell col=\"2\" displaytype=\"text\" text=\"업종코드\"/><Cell col=\"3\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:CORP_TYPENM\" expr=\"expr:gfn_Decode(INCOME_SEQ, 4, &quot;수입금액제외&quot;, gfn_Trim(CORP_TYPENM))\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:CORP_LINE\" expr=\"expr:gfn_Decode(INCOME_SEQ, 4, &quot;&quot;, gfn_Trim(CORP_LINE))\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" editfilter=\"number\" style=\"align: center;\" text=\"bind:CORP_TYPECD\" expr=\"expr:gfn_Decode(INCOME_SEQ, 4, &quot;&quot;, gfn_Trim(CORP_TYPECD))\" editlimit=\"6\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:INCOME_SAMT\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBB", "absolute", "8", "256", "520", "170", null, null, this.Tab0.tab1);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_H1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"115\"/><Column size=\"150\"/><Column size=\"130\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" colspan=\"2\" displaytype=\"text\" style=\"align: center;\"><Cell col=\"0\" colspan=\"2\" displaytype=\"text\" text=\"매입세액\"/></Cell><Cell col=\"2\" displaytype=\"text\" text=\"금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell col=\"0\" displaytype=\"text\" rowspan=\"2\" style=\"align: left;\"><Cell col=\"0\" displaytype=\"text\" rowspan=\"2\" text=\"세금계산서수취분\" style=\"align: left;\"/></Cell><Cell col=\"1\" displaytype=\"text\" text=\"일반매입\" style=\"align: left;\"/><Cell col=\"2\" text=\"bind:PH_TAXBIL_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\"/><Cell col=\"3\" text=\"bind:PH_TAXBIL_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\"/><Cell col=\"1\" displaytype=\"text\" row=\"1\" text=\"고정자산매입\" style=\"align: left;\"/><Cell col=\"2\" text=\"bind:PH_ASSETS_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"1\" style=\"align: right;\"/><Cell col=\"3\" text=\"bind:PH_ASSETS_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"1\" style=\"align: right;\"/><Cell col=\"0\" colspan=\"2\" displaytype=\"text\" row=\"2\" style=\"align: left;\"><Cell col=\"0\" colspan=\"2\" displaytype=\"text\" text=\"예  정  신  고  누  락  분\" style=\"align: left;\"/></Cell><Cell col=\"2\" text=\"bind:PH_WILTOT_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"2\" style=\"align: right;\"/><Cell col=\"3\" text=\"bind:PH_WILTOT_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"2\" style=\"align: right;\"/><Cell col=\"0\" colspan=\"2\" displaytype=\"text\" row=\"3\" style=\"align: left;\"><Cell col=\"0\" colspan=\"2\" displaytype=\"text\" text=\"매 입 자 발 행 세 금 계 산 서\" style=\"align: left;\"/></Cell><Cell col=\"2\" text=\"bind:PH_PURPUB_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"3\" style=\"align: right;\"/><Cell col=\"3\" text=\"bind:PH_PURPUB_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"3\" style=\"align: right;\"/><Cell col=\"0\" colspan=\"2\" displaytype=\"text\" row=\"4\" style=\"align: left;\"><Cell col=\"0\" colspan=\"2\" displaytype=\"text\" text=\"그 밖 의 공 제 매 입 세 액\" style=\"align: left;\"/></Cell><Cell col=\"2\" text=\"bind:PH_ETCBIL_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"4\" style=\"align: right;\"/><Cell col=\"3\" text=\"bind:PH_ETCBIL_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"4\" style=\"align: right;\"/><Cell col=\"0\" colspan=\"2\" displaytype=\"text\" row=\"5\" style=\"align: left;\"><Cell col=\"0\" colspan=\"2\" displaytype=\"text\" text=\"공 제 받 지 못 할 매 입 세 액\" style=\"align: left;\"/></Cell><Cell col=\"2\" text=\"bind:PH_UNABLE_SAMT\" displaytype=\"number\" row=\"5\" style=\"align: right;\"/><Cell col=\"3\" text=\"bind:PH_UNABLE_VAMT\" displaytype=\"number\" row=\"5\" style=\"align: right;\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBC", "absolute", "8", "459", "520", "170", null, null, this.Tab0.tab1);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_H1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"235\"/><Column size=\"150\"/><Column size=\"130\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" displaytype=\"text\" text=\"경감공제세액\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell col=\"0\" displaytype=\"text\" text=\"기 타 공 제, 경 감 세 액\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:RH_ETCMIN_VAMT\" displaytype=\"number\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"1\" text=\"신용카드매출전표발행공제등\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:RH_CREDIT_SAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"1\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:RH_CREDIT_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"1\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"2\" text=\"예 정  신 고  미 환 급  세 액\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"normal\" row=\"2\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:RH_WILRET_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"2\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"3\" text=\"예   정   고   지   세   액\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"normal\" row=\"3\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:RH_NOTRET_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"3\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"4\" text=\"사업양수자의 대리납부 기납부세액\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"normal\" row=\"4\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:RH_PROXY_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"4\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"5\" text=\"매입자 납부특례 기납부세액\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"normal\" row=\"5\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:RH_PROHIB_VAMT\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" row=\"5\" style=\"align: right;\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static2", "absolute", "540", "182", "90", "23", null, null, this.Tab0.tab1);
            obj.set_text("과세표준 명세");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static7", "absolute", "664", "126", "175", "23", null, null, this.Tab0.tab1);
            obj.set_text("전자우편");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtEMAIL", "absolute", "840", "126", "126", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static9", "absolute", "664", "102", "175", "23", null, null, this.Tab0.tab1);
            obj.set_text("휴대전화");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtCELLPHONE", "absolute", "840", "102", "126", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtSKPERMITNUM", "absolute", "840", "54", "126", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static3", "absolute", "540", "334", "60", "23", null, null, this.Tab0.tab1);
            obj.set_text("신고일반");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "541", "357", "32", "23", null, null, this.Tab0.tab1);
            obj.set_text("은행");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "785", "357", "58", "23", null, null, this.Tab0.tab1);
            obj.set_text("계좌번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtACCOUNTNUM", "absolute", "844", "357", "122", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("30");
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "664", "357", "32", "23", null, null, this.Tab0.tab1);
            obj.set_text("지점");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "540", "423", "57", "23", null, null, this.Tab0.tab1);
            obj.set_text("폐업일자");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "687", "423", "57", "23", null, null, this.Tab0.tab1);
            obj.set_text("폐업사유");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtOUTREMARK", "absolute", "745", "423", "221", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("200");
            obj.set_taborder("14");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "540", "500", "65", "23", null, null, this.Tab0.tab1);
            obj.set_text("성명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "719", "500", "71", "23", null, null, this.Tab0.tab1);
            obj.set_text("관리번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtWNUM", "absolute", "791", "500", "175", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("6");
            obj.set_taborder("16");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "540", "524", "65", "23", null, null, this.Tab0.tab1);
            obj.set_text("전화번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtWTEL", "absolute", "606", "524", "111", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtWNAME", "absolute", "606", "500", "111", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "540", "580", "84", "23", null, null, this.Tab0.tab1);
            obj.set_text("가산세액계");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "627", "580", "201", "23", null, null, this.Tab0.tab1);
            obj.set_text("차가감납부할세액(환급받을세액)");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("medGASANAMT", "absolute", "540", "605", "84", "23", null, null, this.Tab0.tab1);
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_enable("false");
            obj.set_taborder("18");
            obj.set_mask("#,###");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("medCHAGAMAMT", "absolute", "627", "605", "201", "23", null, null, this.Tab0.tab1);
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_enable("false");
            obj.set_taborder("19");
            obj.set_mask("#,###");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtBRANCHNAME", "absolute", "697", "357", "86", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("30");
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "613", "30", "50", "23", null, null, this.Tab0.tab1);
            obj.set_text("신  고");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static6", "absolute", "664", "78", "175", "23", null, null, this.Tab0.tab1);
            obj.set_text("사업자단위과세승인번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtUNITTAXNO", "absolute", "840", "78", "126", "23", null, null, this.Tab0.tab1);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("7");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Combo("Combo0", "absolute", "540", "30", "72", "22", null, null, this.Tab0.tab1);
            this.Tab0.tab1.addChild(obj.name, obj);
            var Combo0_innerdataset = new Dataset("Combo0_innerdataset", this.Tab0.tab1.Combo0);
            Combo0_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(Combo0_innerdataset);
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_enable("false");
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormSearchItem");
            obj = new Combo("cmbBANK_CODE", "absolute", "574", "357", "88", "23", null, null, this.Tab0.tab1);
            this.Tab0.tab1.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("dsBANK_CODE");
            obj.set_taborder("10");
            obj.set_cssclass("styFormItemText");
            obj = new Static("Static8", "absolute", "664", "54", "175", "23", null, null, this.Tab0.tab1);
            obj.set_text("사업자단위신고납부승인번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Calendar("calOUTDATE", "absolute", "598", "423", "87", "23", null, null, this.Tab0.tab1);
            this.Tab0.tab1.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj = new Tabpage("tab2", this.Tab0);
            obj.set_scrollbars("autoboth");
            obj.set_taborder("75");
            obj.set_text("VAT신고서 2쪽");
            obj.getSetter("position").set("absolute");
            obj.style.set_anchor("default");
            obj.style.set_background("#ffffffff");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBG", "absolute", "8", "532", "470", "98", null, null, this.Tab0.tab2);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" displaytype=\"text\" text=\"공제받지못할매입세액명세\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell col=\"0\" displaytype=\"text\" text=\"공제받지 못할 매입세액\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:PN_UNABLE_SAMT\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:PN_UNABLE_VAMT\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"1\" text=\"공통매입세액 면세사업분\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:PN_EXCEPT_SAMT\" displaytype=\"number\" edittype=\"normal\" row=\"1\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:PN_EXCEPT_VAMT\" displaytype=\"number\" edittype=\"normal\" row=\"1\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"2\" text=\"대손처분 받은 세액\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:PN_DOUADD_SAMT\" displaytype=\"number\" edittype=\"normal\" row=\"2\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:PN_DOUADD_VAMT\" displaytype=\"number\" edittype=\"normal\" row=\"2\" style=\"align: right;\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBF", "absolute", "8", "244", "470", "218", null, null, this.Tab0.tab2);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"그밖의공제매입세액명세\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"신용카드매출전표수취명세서제출분-일반\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_CREDIT_SAMT\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_CREDIT_VAMT\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"신용카드매출전표수취명세서제출분-고정자산\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_ASSETS_SAMT\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_ASSETS_VAMT\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"의제매입세액\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_AGENDA_SAMT\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_AGENDA_VAMT\"/><Cell row=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"재활용폐자원 등 매입세액\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_RECYCL_SAMT\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_RECYCL_VAMT\"/><Cell row=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"과세사업전환매입세액\"/><Cell row=\"4\" col=\"1\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_CONVER_VAMT\"/><Cell row=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"재고매입세액\"/><Cell row=\"5\" col=\"1\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"5\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_STOCKP_VAMT\"/><Cell row=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"변제대손세액\"/><Cell row=\"6\" col=\"1\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"6\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_BADDEP_VAMT\"/><Cell row=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"외국인관광객에 대한 환급세액\"/><Cell row=\"7\" col=\"1\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"7\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PD_FOREINER_VAMT\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBE", "absolute", "8", "8", "470", "170", null, null, this.Tab0.tab2);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("0");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" displaytype=\"text\" text=\"예정신고누락분명세\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell col=\"0\" displaytype=\"text\" text=\"매출 / 과세 - 세금계산서\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SW_TAXBIL_SAMT\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:SW_TAXBIL_VAMT\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"1\" text=\"매출 / 과세 - 기         타\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SW_TAXETC_SAMT\" displaytype=\"number\" edittype=\"normal\" row=\"1\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:SW_TAXETC_VAMT\" displaytype=\"number\" edittype=\"normal\" row=\"1\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"2\" text=\"매출 / 영세 - 세금계산서\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SW_ZERBIL_SAMT\" displaytype=\"number\" edittype=\"normal\" row=\"2\" style=\"align: right;\"/><Cell col=\"2\" displaytype=\"number\" row=\"2\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"3\" text=\"매출 / 영세 - 기         타\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:SW_ZERETC_SAMT\" displaytype=\"number\" edittype=\"normal\" row=\"3\" style=\"align: right;\"/><Cell col=\"2\" displaytype=\"number\" row=\"3\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"4\" text=\"매입 / 세 금 계 산 서\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:PW_TAXBIL_SAMT\" displaytype=\"number\" edittype=\"normal\" row=\"4\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:PW_TAXBIL_VAMT\" displaytype=\"number\" edittype=\"normal\" row=\"4\" style=\"align: right;\"/><Cell col=\"0\" displaytype=\"text\" row=\"5\" text=\"매입 / 그밖의공제매입세액\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:PW_ETCBIL_SAMT\" displaytype=\"number\" edittype=\"normal\" row=\"5\" style=\"align: right;\"/><Cell col=\"2\" text=\"bind:PW_ETCBIL_VAMT\" displaytype=\"number\" edittype=\"normal\" row=\"5\" style=\"align: right;\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Static("Static4", "absolute", "494", "444", "110", "23", null, null, this.Tab0.tab2);
            obj.set_text("면세사업수입금액");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBK", "absolute", "494", "556", "472", "74", null, null, this.Tab0.tab2);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"139\"/><Column size=\"110\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계산서발급및수취명세\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"계산서 발급 금액\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:BD_SALTOT_SAMT\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"계산서 수취 금액\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:BD_PURTOT_SAMT\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBJ", "absolute", "494", "468", "472", "74", null, null, this.Tab0.tab2);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" displaytype=\"text\" text=\"업태\"/><Cell col=\"1\" displaytype=\"text\" text=\"종목\"/><Cell col=\"2\" displaytype=\"text\" text=\"코드번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:CORP_TYPENM\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:CORP_LINE\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\"/><Cell col=\"2\" text=\"bind:CORP_TYPECD\" displaytype=\"text\" edittype=\"normal\" editlimit=\"6\" style=\"align: center;\"/><Cell col=\"3\" text=\"bind:DF_TAXBIL_SAMT\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\"/><Cell col=\"0\" text=\"수입금액제외\" displaytype=\"text\" expr=\"expr:&quot;수입금액제외&quot;\" row=\"1\" style=\"align: left;\"/><Cell col=\"1\" text=\"bind:CORP_LINE\" displaytype=\"text\" expr=\"expr:&quot;&quot;\" row=\"1\" style=\"align: left;\"/><Cell col=\"2\" text=\"bind:CORP_TYPECD\" displaytype=\"text\" expr=\"expr:&quot;&quot;\" row=\"1\" style=\"align: center;\"/><Cell col=\"3\" text=\"bind:DF_EXCEPT_SAMT\" displaytype=\"number\" edittype=\"normal\" row=\"1\" style=\"align: right;\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBI", "absolute", "494", "165", "472", "265", null, null, this.Tab0.tab2);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"78\"/><Column size=\"97\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"text\" text=\"가산세명세\"/><Cell col=\"2\" displaytype=\"text\" text=\"금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"사업자 미등록등\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_BIZMIS_SAMT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_BIZMIS_VAMT\"/><Cell row=\"1\" rowspan=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"세금계산서\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"지연발급등\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIDEL_SAMT\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIDEL_VAMT\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"지연수취\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:AD_EBDERV_SAMT\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:AD_EBDERV_VAMT\"/><Cell row=\"3\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"미발급 등\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_NOTPUB_SAMT\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_NOTPUB_VAMT\"/><Cell row=\"4\" rowspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"전자세금계산서&#10;발급명세전송\"/><Cell row=\"4\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"지연전송\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIOVE_SAMT\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIOVE_VAMT\"/><Cell row=\"5\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"미전송\"/><Cell row=\"5\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIEXC_SAMT\"/><Cell row=\"5\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIEXC_VAMT\"/><Cell row=\"6\" rowspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"세금계산서합계표\"/><Cell row=\"6\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"제출 불성실\"/><Cell row=\"6\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_TAXBIL_SAMT\"/><Cell row=\"6\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_TAXBIL_VAMT\"/><Cell row=\"7\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"지연제출\"/><Cell row=\"7\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:AD_TAXDEL_SAMT\"/><Cell row=\"7\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:AD_TAXDEL_VAMT\"/><Cell row=\"8\" rowspan=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"신 고 불 성 실\"/><Cell row=\"8\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"무신고(일반)\"/><Cell row=\"8\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR1_SAMT\"/><Cell row=\"8\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR1_VAMT\"/><Cell row=\"9\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"무신고(부당)\"/><Cell row=\"9\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR2_SAMT\"/><Cell row=\"9\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR2_VAMT\"/><Cell row=\"10\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"과소·초과환급신고(일반)\"/><Cell row=\"10\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR3_SAMT\"/><Cell row=\"10\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR3_VAMT\"/><Cell row=\"11\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"과소·초과환급신고(부당)\"/><Cell row=\"11\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR4_SAMT\"/><Cell row=\"11\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR4_VAMT\"/><Cell row=\"12\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"납 부 불 성 실\"/><Cell row=\"12\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_NOSEND_SAMT\"/><Cell row=\"12\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_NOSEND_VAMT\"/><Cell row=\"13\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"영세율 과세표준 신고불성실\"/><Cell row=\"13\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_ZERBIL_SAMT\"/><Cell row=\"13\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_ZERBIL_VAMT\"/><Cell row=\"14\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"현금매출명세서 불성실\"/><Cell row=\"14\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_CASNOT_SAMT\"/><Cell row=\"14\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_CASNOT_VAMT\"/><Cell row=\"15\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"부동산임대공급가액명세서 불성실\"/><Cell row=\"15\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:AD_ESTATE_SAMT\"/><Cell row=\"15\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_ESTATE_VAMT\"/><Cell row=\"16\" rowspan=\"2\" displaytype=\"text\" style=\"align: center;\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"매입자\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"납부특례\"/></Cell><Cell row=\"16\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"거래계좌 미사용\"/><Cell row=\"16\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:AD_ACCNOT_SAMT\"/><Cell row=\"16\" col=\"3\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:AD_ACCNOT_VAMT\"/><Cell row=\"17\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"거래계좌 지연입금\"/><Cell row=\"17\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:AD_ACCDELAY_SAMT\"/><Cell row=\"17\" col=\"3\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:AD_ACCDELAY_VAMT\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBH", "absolute", "494", "8", "472", "146", null, null, this.Tab0.tab2);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.style.set_font("굴림,9");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"그밖의경감·공제세액명세\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"전 자 신 고 세 액 공 제\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:GONGAMT\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RD_EBIPAY_VAMT\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"전자세금계산서 발급세액 공제\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align: left;\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RD_EBITAX_VAMT\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"택시운송사업자 경감세액\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" style=\"align: left;\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RD_TAXICO_VAMT\"/><Cell row=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"현금영수증 사업자 공제 세액\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" style=\"align: left;\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RD_CASBIL_VAMT\"/><Cell row=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"기          타\"/><Cell row=\"4\" col=\"1\" displaytype=\"number\" style=\"align: left;\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RD_ETCBIL_VAMT\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);

            obj = new Shape("Shape1", "absolute", "8", "78", null, "38", "8", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("RoundRect");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "16", "86", "45", "22", null, null, this);
            obj.set_text("사업장");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBRANCH_CD", "absolute", "63", "86", "200", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("0");

            obj = new Static("Static22", "absolute", "381", "86", "60", "22", null, null, this);
            obj.set_text("분기구분");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "443", "86", "110", "22", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormSearchItem");

            obj = new Div("Div0", "absolute", "8", "48", "349", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC", "absolute", "1", "1", "50", "23", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("처리");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Shape("Shape0", "absolute", "8", "37", null, "6", "8", null, this);
            obj.getSetter("type").set("rectangle");
            obj.set_cssclass("Rectangle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgFormTitle", "absolute", "8", "8", "22", "22", null, null, this);
            obj.set_image("URL('image::imgFormTitle.bmp')");
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.getSetter("transparenthittest").set("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "48", "456", "25", "8", null, this);
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "8", "492", "22", "8", null, this);
            obj.set_text("재무관리>세무회계>부가세신고>부가세신고서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "37", "8", "453", "22", null, null, this);
            obj.set_text("부가세신고서");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "271", "86", "30", "22", null, null, this);
            obj.set_text("년도");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVAT_SMMDD", "absolute", "704", "87", "56", "18", null, null, this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVAT_EMMDD", "absolute", "761", "87", "56", "18", null, null, this);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calVAT_YYYY", "absolute", "303", "86", "70", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 972, 635, this.Tab0.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("autoboth");
            		p.set_taborder("75");
            		p.set_text("VAT신고서 1쪽");
            		p.getSetter("position").set("absolute");
            		p.style.set_anchor("default");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.Tab0.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 972, 635, this.Tab0.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("autoboth");
            		p.set_taborder("75");
            		p.set_text("VAT신고서 2쪽");
            		p.getSetter("position").set("absolute");
            		p.style.set_anchor("default");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.Tab0.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 349, 25, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 990, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부가세신고서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Tab0_tab1_edtPERMITNUM_value","Tab0.tab1.edtPERMITNUM","value","dsTA_VAT101_H2","VAT_TOTPAYNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtEMAIL_value","Tab0.tab1.edtEMAIL","value","dsTA_VAT101_H1","CORP_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtCELLPHONE_value","Tab0.tab1.edtCELLPHONE","value","dsTA_VAT101_H1","CORP_CELL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtACCOUNTNUM_value","Tab0.tab1.edtACCOUNTNUM","value","dsTA_VAT101_H2","VAT_BANKNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtOUTREMARK_value","Tab0.tab1.edtOUTREMARK","value","dsTA_VAT101_H2","CLOSING_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtWNUM_value","Tab0.tab1.edtWNUM","value","dsTA_VAT101_H1","AGENT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtWTEL_value","Tab0.tab1.edtWTEL","value","dsTA_VAT101_H1","AGENT_TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtWNAME_value","Tab0.tab1.edtWNAME","value","dsTA_VAT101_H1","AGENT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_medGASANAMT_value","Tab0.tab1.medGASANAMT","value","dsTA_VAT101_H1","RH_ADDTOT_VAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_medCHAGAMAMT_value","Tab0.tab1.medCHAGAMAMT","value","dsTA_VAT101_H1","VAT_PAY_VAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtBRANCHNAME_value","Tab0.tab1.edtBRANCHNAME","value","dsTA_VAT101_H2","VAT_BANKBRANCH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_Edit0_value","Tab0.tab1.edtUNITTAXNO","value","dsTA_VAT101_H2","VAT_UNITTAXNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_Combo0_value","Tab0.tab1.Combo0","value","dsTA_VAT101_H1","VAT_QUARTER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_cmbBANK_CODE_value","Tab0.tab1.cmbBANK_CODE","value","dsTA_VAT101_H2","VAT_BANKCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_calOUTDATE_value","Tab0.tab1.calOUTDATE","value","dsTA_VAT101_H2","CORP_EYMD");
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
        
        
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VAT101_H1.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.dsTA_VAT101_H2.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.dsTA_VAT101_D.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.dsTA_VAT101_D2.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.dsTA_VAT101_D3.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.Tab0.tab1.edtPERMITNUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.grdVAT_TAX_SUBA.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab1.grdVAT_TAX_SUBD.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab1.grdVAT_TAX_SUBB.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab1.grdVAT_TAX_SUBC.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab1.edtEMAIL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtCELLPHONE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtSKPERMITNUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtACCOUNTNUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtOUTREMARK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtWNUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtWTEL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtWNAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.medGASANAMT.addEventHandler("oneditclick", this.fn_EditFocus, this);
            this.Tab0.tab1.medGASANAMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.medCHAGAMAMT.addEventHandler("oneditclick", this.fn_EditFocus, this);
            this.Tab0.tab1.medCHAGAMAMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtBRANCHNAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtUNITTAXNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab2.grdVAT_TAX_SUBG.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBF.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBE.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBK.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBJ.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBI.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBH.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.cmbBRANCH_CD.addEventHandler("onitemchanged", this.cmbBRANCH_CD_onitemchanged, this);
            this.cmbVAT_QUARTER.addEventHandler("onitemchanged", this.cmbVAT_QUARTER_OnChanged, this);
            this.Div0.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.calVAT_YYYY.addEventHandler("onspin", this.calVAT_YYYY_onspin, this);

        };

        this.loadIncludeScript("FAMG0260.xfdl");
        this.loadPreloadList();
       
    };
}
)();
