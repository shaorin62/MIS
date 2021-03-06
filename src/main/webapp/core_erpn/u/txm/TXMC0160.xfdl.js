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
                this.set_name("TXMC0160");
                this.set_titletext("부가세신고서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_H1", this);
            obj.set_keystring("BDR_TYPECD");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_SYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_EYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_CYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_CELL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_EMAIL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LOCATION\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_SYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REVISION_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_PURPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_PURPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_CRECAS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_CRECAS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXETC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_ZERETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_WILMIS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_WILMIS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_DOUADD_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_DOUADD_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SALTOT_SAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SALTOT_VAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ASSETS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ASSETS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_WILTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_WILTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PURPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PURPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ETCBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PTOTAL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PTOTAL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_UNABLE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_UNABLE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ADDMIN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ADDMIN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SP_RETURN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_ETCMIN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_CREDIT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_CREDIT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_MINTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_WILRET_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_NOTRET_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_PROHIB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_ADDTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_PAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_JPAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"IH_EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"IH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_PROXY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_REF_VAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PH_EXPOST_VAMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_H2", this);
            obj.set_useclientlayout("true");
            obj.set_keystring("BDR_TYPECD");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SW_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_TAXETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_TAXETC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_ZERETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_SALTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_SALTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_ETCBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_PURTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_CREDIT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_CREDIT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_AGENDA_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_AGENDA_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_RECYCL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_RECYCL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_CONVER_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ALAGEN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ALAGEN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ASSETS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ASSETS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_STOCKP_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_BADDEP_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_PURTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_UNABLE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_UNABLE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_EXCEPT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_DOUADD_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_DOUADD_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_PURTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_EBIPAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_EBITAX_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_TAXICO_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_CASBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_BIZMIS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_BIZMIS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIDEL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIDEL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBDERV_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBDERV_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOTPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOTPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIOVE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIOVE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIEXC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIEXC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPORT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPORT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOSEND_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOSEND_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ZERBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_CASNOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_CASNOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ADDTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXDEL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXDEL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR1_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR1_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR2_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR2_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR3_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR3_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR4_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR4_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ESTATE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ESTATE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DF_EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DF_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BD_SALTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BD_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REFUND_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_BANKCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_BANKNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_TOTPAYNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_BANKBRANCH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_EYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOSING_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_REF_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_NTAX_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_EARLY_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_UNITTAXNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PD_FOREINER_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCNOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCNOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCDELAY_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCDELAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BRANCH_APPRNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVAT_QUARTER", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\"/><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">1기예정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">2</Col><Col id=\"SUBNAME\">1기확정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">3</Col><Col id=\"SUBNAME\">2기예정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">4</Col><Col id=\"SUBNAME\">2기확정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INCOME_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INCOME_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INCOME_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_D2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDU_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDU_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_VAMT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_D3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ADTX_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ADTX_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ADTXVAMT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"VAT_QUARTER\" type=\"STRING\" size=\"1\"/><Column id=\"BIZ_NO\" size=\"10\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NM\" size=\"40\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"100\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"30\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"301\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"20\" type=\"STRING\"/><Column id=\"CORP_CELL\" size=\"20\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "101", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_PROC", "absolute", "0", "0", "50", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("처리");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Edit("edtVAT_SMMDD", "absolute", "629", "71", "56", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVAT_EMMDD", "absolute", "687", "71", "56", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "27", "71", "66", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "82", "71", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static6", "absolute", "421", "71", "76", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "489", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormItemCombo");

            obj = new Tab("Tab0", "absolute", "8", "113", null, null, "25", "15", this);
            obj.set_taborder("19");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.Tab0);
            obj.set_text("VAT신고서 1쪽");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("Shape01", "absolute", null, "25", "585", "138", "10", null, this.Tab0.tab1);
            obj.set_taborder("116");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Combo("Combo0", "absolute", null, "32", "106", "21", "458", null, this.Tab0.tab1);
            this.Tab0.tab1.addChild(obj.name, obj);
            var Combo0_innerdataset = new Dataset("Combo0_innerdataset", this.Tab0.tab1.Combo0);
            Combo0_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(Combo0_innerdataset);
            obj.set_taborder("122");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormItemCombo");
            obj.set_enable("false");
            obj.set_index("-1");
            obj = new Static("Static0", "absolute", null, "32", "51", "21", "413", null, this.Tab0.tab1);
            obj.set_taborder("123");
            obj.set_text("신고");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtPERMITNUM", "absolute", null, "32", "168", "21", "45", null, this.Tab0.tab1);
            obj.set_taborder("125");
            obj.set_maxlength("7");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_inputtype("number,sign");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static4", "absolute", null, "32", "128", "21", "271", null, this.Tab0.tab1);
            obj.set_taborder("167");
            obj.set_text("총괄납부승인번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static9", "absolute", null, "109", "72", "21", "327", null, this.Tab0.tab1);
            obj.set_taborder("130");
            obj.set_text("휴대전화");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtCELLPHONE", "absolute", null, "109", "168", "21", "45", null, this.Tab0.tab1);
            obj.set_taborder("131");
            obj.set_maxlength("14");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_inputtype("number,sign");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static7", "absolute", null, "135", "72", "21", "327", null, this.Tab0.tab1);
            obj.set_taborder("132");
            obj.set_text("전자우편");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtEMAIL", "absolute", null, "135", "168", "21", "45", null, this.Tab0.tab1);
            obj.set_taborder("133");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static8", "absolute", null, "58", "192", "21", "207", null, this.Tab0.tab1);
            obj.set_taborder("126");
            obj.set_text("사업자단위신고납부승인번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtSKPERMITNUM", "absolute", null, "58", "168", "21", "45", null, this.Tab0.tab1);
            obj.set_taborder("127");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", null, "84", "192", "21", "207", null, this.Tab0.tab1);
            obj.set_taborder("128");
            obj.set_text("사업자단위과세승인번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtUNITTAXNO", "absolute", null, "84", "168", "21", "45", null, this.Tab0.tab1);
            obj.set_taborder("129");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Shape09", "absolute", null, null, "585", "33", "10", "10", this.Tab0.tab1);
            obj.set_taborder("170");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Shape07", "absolute", null, null, "585", "33", "10", "51", this.Tab0.tab1);
            obj.set_taborder("169");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", null, null, "133", "21", "462", "126", this.Tab0.tab1);
            obj.set_taborder("107");
            obj.set_text("세무대리인");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", null, null, "107", "21", "488", "184", this.Tab0.tab1);
            obj.set_taborder("108");
            obj.set_text("폐업신고");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static1", "absolute", null, "4", "107", "21", "488", null, this.Tab0.tab1);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("신고일반");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static2", "absolute", null, "167", "159", "21", "436", null, this.Tab0.tab1);
            obj.set_taborder("111");
            obj.set_text("과세표준 명세");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBD", "absolute", null, "188", "585", null, "10", "267", this.Tab0.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("112");
            obj.set_binddataset("dsTA_VAT101_D");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.style.set_font("굴림,9");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"139\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"업태\"/><Cell col=\"1\" displaytype=\"text\" text=\"종목\"/><Cell col=\"2\" displaytype=\"text\" text=\"업종코드\"/><Cell col=\"3\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"expr:INCOME_SEQ==4 ? 'none' : 'normal'\" style=\"align: left;\" text=\"bind:CORP_TYPENM\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:INCOME_SEQ==4 ? 'none' : 'normal'\" style=\"align: left;\" text=\"bind:CORP_LINE\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"expr:INCOME_SEQ==4 ? 'none' : 'normal'\" editfilter=\"number\" style=\"align: center;\" text=\"bind:CORP_TYPECD\" editlimit=\"6\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:INCOME_SAMT\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBB", "absolute", "10", "256", null, "197", "615", null, this.Tab0.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("113");
            obj.set_binddataset("dsTA_VAT101_H1");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"115\"/><Column size=\"150\"/><Column size=\"130\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: center;\"><Cell colspan=\"2\" displaytype=\"text\" text=\"매입세액\"/></Cell><Cell col=\"2\" displaytype=\"text\" text=\"금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" displaytype=\"text\" style=\"align: left;\"><Cell rowspan=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"세금계산서수취분\"/></Cell><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"일반매입\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_TAXBIL_SAMT\" editlimit=\"17\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_TAXBIL_VAMT\" editlimit=\"17\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"수출기업수입분납부유예\"/><Cell row=\"1\" col=\"2\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: right;\" editlimit=\"17\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_EXPOST_VAMT\" editlimit=\"17\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"고정자산매입\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_ASSETS_SAMT\" editlimit=\"17\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_ASSETS_VAMT\" editlimit=\"17\"/><Cell row=\"3\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"예  정  신  고  누  락  분\"/></Cell><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_WILTOT_SAMT\" editlimit=\"17\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_WILTOT_VAMT\" editlimit=\"17\"/><Cell row=\"4\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"매 입 자 발 행 세 금 계 산 서\"/></Cell><Cell row=\"4\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_PURPUB_SAMT\" editlimit=\"17\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_PURPUB_VAMT\" editlimit=\"17\"/><Cell row=\"5\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"그 밖 의 공 제 매 입 세 액\"/></Cell><Cell row=\"5\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_ETCBIL_SAMT\" editlimit=\"17\"/><Cell row=\"5\" col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PH_ETCBIL_VAMT\" editlimit=\"17\"/><Cell row=\"6\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"공 제 받 지 못 할 매 입 세 액\"/></Cell><Cell row=\"6\" col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:PH_UNABLE_SAMT\" editlimit=\"17\"/><Cell row=\"6\" col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:PH_UNABLE_VAMT\" editlimit=\"17\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBC", "absolute", "10", "463", null, null, "614", "10", this.Tab0.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("114");
            obj.set_binddataset("dsTA_VAT101_H1");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"235\"/><Column size=\"150\"/><Column size=\"130\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"경감공제세액\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"기 타 공 제, 경 감 세 액\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align: right;\"/><Cell col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:RH_ETCMIN_VAMT\" editlimit=\"17\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"신용카드매출전표발행공제등\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RH_CREDIT_SAMT\" editlimit=\"17\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RH_CREDIT_VAMT\" editlimit=\"17\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"예 정  신 고  미 환 급  세 액\"/><Cell row=\"2\" col=\"1\" displaytype=\"normal\" style=\"align: right;\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RH_WILRET_VAMT\" editlimit=\"17\"/><Cell row=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"예   정   고   지   세   액\"/><Cell row=\"3\" col=\"1\" displaytype=\"normal\" style=\"align: right;\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RH_NOTRET_VAMT\" editlimit=\"17\"/><Cell row=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"사업양수자의 대리납부 기납부세액\"/><Cell row=\"4\" col=\"1\" displaytype=\"normal\" style=\"align: right;\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RH_PROXY_VAMT\" editlimit=\"17\"/><Cell row=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"매입자 납부특례 기납부세액\"/><Cell row=\"5\" col=\"1\" displaytype=\"normal\" style=\"align: right;\"/><Cell row=\"5\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RH_PROHIB_VAMT\" editlimit=\"17\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static3", "absolute", null, null, "139", "21", "456", "241", this.Tab0.tab1);
            obj.set_taborder("115");
            obj.set_text("국세환급금 계좌");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", null, null, "585", "33", "10", "209", this.Tab0.tab1);
            obj.set_taborder("134");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbBANK_CODE", "absolute", null, null, "100", "21", "433", "215", this.Tab0.tab1);
            this.Tab0.tab1.addChild(obj.name, obj);
            obj.set_taborder("137");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");
            obj = new Edit("edtBRANCHNAME", "absolute", null, null, "100", "21", "241", "215", this.Tab0.tab1);
            obj.set_taborder("139");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtACCOUNTNUM", "absolute", null, null, "120", "21", "21", "215", this.Tab0.tab1);
            obj.set_taborder("140");
            obj.set_maxlength("64");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_inputtype("number,sign");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Shape03", "absolute", null, null, "585", "33", "10", "151", this.Tab0.tab1);
            obj.set_taborder("142");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", null, null, "74", "21", "501", "157", this.Tab0.tab1);
            obj.set_taborder("144");
            obj.set_text("폐업일자");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Calendar("calOUTDATE", "absolute", null, null, "100", "21", "406", "157", this.Tab0.tab1);
            this.Tab0.tab1.addChild(obj.name, obj);
            obj.set_taborder("145");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj = new Static("Static15", "absolute", null, null, "75", "21", "310", "157", this.Tab0.tab1);
            obj.set_taborder("146");
            obj.set_text("폐업사유");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtOUTREMARK", "absolute", null, null, "295", "21", "21", "157", this.Tab0.tab1);
            obj.set_taborder("147");
            obj.set_maxlength("3");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Shape05", "absolute", null, null, "585", "34", "10", "92", this.Tab0.tab1);
            obj.set_taborder("148");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtWNAME", "absolute", null, null, "100", "21", "433", "99", this.Tab0.tab1);
            obj.set_taborder("152");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", null, null, "82", "21", "327", "99", this.Tab0.tab1);
            obj.set_taborder("153");
            obj.set_text("관리번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtWNUM", "absolute", null, null, "110", "21", "231", "99", this.Tab0.tab1);
            obj.set_taborder("154");
            obj.set_maxlength("6");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", null, null, "75", "21", "133", "99", this.Tab0.tab1);
            obj.set_taborder("155");
            obj.set_text("전화번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Edit("edtWTEL", "absolute", null, null, "120", "21", "21", "99", this.Tab0.tab1);
            obj.set_taborder("156");
            obj.set_maxlength("14");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_inputtype("number,sign");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", null, null, "92", "21", "483", "57", this.Tab0.tab1);
            obj.set_taborder("159");
            obj.set_text("가산세액계");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("medGASANAMT", "absolute", null, null, "473", "21", "21", "57", this.Tab0.tab1);
            obj.set_taborder("160");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", null, null, "234", "21", "341", "16", this.Tab0.tab1);
            obj.set_taborder("163");
            obj.set_text("차가감납부할세액(환급받을세액)");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("medCHAGAMAMT", "absolute", null, null, "343", "21", "21", "16", this.Tab0.tab1);
            obj.set_taborder("164");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_type("number");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBA", "absolute", "10", "25", null, "221", "615", null, this.Tab0.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("166");
            obj.set_binddataset("dsTA_VAT101_H1");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"235\"/><Column size=\"150\"/><Column size=\"130\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"과세표준및매출세액\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"과세 - 세금계산서발급분\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_TAXBIL_SAMT\" editlimit=\"17\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_TAXBIL_VAMT\" editlimit=\"17\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"과세 - 매입자발행세금계산서\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_PURPUB_SAMT\" editlimit=\"17\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_PURPUB_VAMT\" editlimit=\"17\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"과세 - 신용카드,현금영수증 발행분\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_CRECAS_SAMT\" editlimit=\"17\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_CRECAS_VAMT\" editlimit=\"17\"/><Cell row=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"과세 - 기      타\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_TAXETC_SAMT\" editlimit=\"17\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_TAXETC_VAMT\" editlimit=\"17\"/><Cell row=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"영세 - 세금계산서발급분\"/><Cell row=\"4\" col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_ZERBIL_SAMT\" editlimit=\"17\"/><Cell row=\"4\" col=\"2\" displaytype=\"normal\" style=\"align: right;\"/><Cell row=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"영세 - 기      타\"/><Cell row=\"5\" col=\"1\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_ZERETC_SAMT\" editlimit=\"17\"/><Cell row=\"5\" col=\"2\" displaytype=\"normal\" style=\"align: right;\"/><Cell row=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"예  정  신  고  누  락  분\"/><Cell row=\"6\" col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SH_WILMIS_SAMT\" editlimit=\"17\"/><Cell row=\"6\" col=\"2\" displaytype=\"number\" style=\"align: right;\" text=\"bind:SH_WILMIS_VAMT\" editlimit=\"17\"/><Cell row=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"대  손  세  액  가  감\"/><Cell row=\"7\" col=\"1\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"7\" col=\"2\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;\" text=\"bind:SH_DOUADD_VAMT\" editlimit=\"17\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", null, null, "75", "21", "500", "99", this.Tab0.tab1);
            obj.set_taborder("168");
            obj.set_text("성명");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tab1);
            obj.set_taborder("171");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "524", "550", "328", "10", null, null, this.Tab0.tab1);
            obj.set_taborder("176");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "796", "163", "80", "25", null, null, this.Tab0.tab1);
            obj.set_taborder("181");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "796", "293", "80", "25", null, null, this.Tab0.tab1);
            obj.set_taborder("182");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "10", "4", "107", "21", null, null, this.Tab0.tab1);
            obj.set_taborder("188");
            obj.set_text("신고내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", null, null, "44", "21", "341", "215", this.Tab0.tab1);
            obj.set_taborder("138");
            obj.set_text("지점");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", null, null, "67", "21", "141", "215", this.Tab0.tab1);
            obj.set_taborder("141");
            obj.set_text("계좌번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", null, null, "42", "21", "533", "215", this.Tab0.tab1);
            obj.set_taborder("136");
            obj.set_text("은행");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", null, "32", "10", "124", "402", null, this.Tab0.tab1);
            obj.set_taborder("189");
            obj.set_cssclass("sta_WF_line");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "1142", "307", "10", "243", null, null, this.Tab0.tab1);
            obj.set_taborder("190");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.Tab0);
            obj.set_text("VAT신고서 2쪽");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBG", "absolute", "10", "466", null, null, "619", "10", this.Tab0.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("8");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.style.set_font("굴림,9");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"공제받지못할매입세액명세\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"공제받지 못할 매입세액\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PN_UNABLE_SAMT\" editlimit=\"17\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PN_UNABLE_VAMT\" editlimit=\"17\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"공통매입세액 면세사업분\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PN_EXCEPT_SAMT\" editlimit=\"17\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PN_EXCEPT_VAMT\" editlimit=\"17\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"대손처분 받은 세액\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PN_DOUADD_SAMT\" editlimit=\"17\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PN_DOUADD_VAMT\" editlimit=\"17\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBF", "absolute", "10", "212", null, "240", "619", null, this.Tab0.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("9");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.style.set_font("굴림,9");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"그밖의공제매입세액명세\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"신용카드매출전표수취명세서제출분-일반\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_CREDIT_SAMT\" editlimit=\"17\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_CREDIT_VAMT\" editlimit=\"17\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"신용카드매출전표수취명세서제출분-고정자산\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_ASSETS_SAMT\" editlimit=\"17\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_ASSETS_VAMT\" editlimit=\"17\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"의제매입세액\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_AGENDA_SAMT\" editlimit=\"17\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_AGENDA_VAMT\" editlimit=\"17\"/><Cell row=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"재활용폐자원 등 매입세액\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_RECYCL_SAMT\" editlimit=\"17\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_RECYCL_VAMT\" editlimit=\"17\"/><Cell row=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"과세사업전환매입세액\"/><Cell row=\"4\" col=\"1\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_CONVER_VAMT\" editlimit=\"17\"/><Cell row=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"재고매입세액\"/><Cell row=\"5\" col=\"1\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"5\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_STOCKP_VAMT\" editlimit=\"16\"/><Cell row=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"변제대손세액\"/><Cell row=\"6\" col=\"1\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"6\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PD_BADDEP_VAMT\" editlimit=\"16\"/><Cell row=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"외국인관광객에 대한 환급세액\"/><Cell row=\"7\" col=\"1\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"7\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:PD_FOREINER_VAMT\" editlimit=\"16\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBE", "absolute", "10", "10", null, "188", "619", null, this.Tab0.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("10");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.style.set_font("굴림,9");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"예정신고누락분명세\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"매출 / 과세 - 세금계산서\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:SW_TAXBIL_SAMT\" editlimit=\"17\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:SW_TAXBIL_VAMT\" editlimit=\"17\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"매출 / 과세 - 기         타\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:SW_TAXETC_SAMT\" editlimit=\"17\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:SW_TAXETC_VAMT\" editlimit=\"17\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"매출 / 영세 - 세금계산서\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:SW_ZERBIL_SAMT\" editlimit=\"17\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"매출 / 영세 - 기         타\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:SW_ZERETC_SAMT\" editlimit=\"17\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" style=\"align: right;\"/><Cell row=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"매입 / 세 금 계 산 서\"/><Cell row=\"4\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PW_TAXBIL_SAMT\" editlimit=\"17\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PW_TAXBIL_VAMT\" editlimit=\"17\"/><Cell row=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"매입 / 그밖의공제매입세액\"/><Cell row=\"5\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PW_ETCBIL_SAMT\" editlimit=\"17\"/><Cell row=\"5\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:PW_ETCBIL_VAMT\" editlimit=\"17\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Static("Static4", "absolute", null, null, "165", "21", "435", "188", this.Tab0.tab2);
            obj.set_taborder("11");
            obj.set_text("면세사업수입금액");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBK", "absolute", null, null, "589", "84", "10", "10", this.Tab0.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("12");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.style.set_font("굴림,9");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"139\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계산서발급및수취명세\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"계산서 발급 금액\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:BD_SALTOT_SAMT\" editlimit=\"17\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"계산서 수취 금액\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:BD_PURTOT_SAMT\" editlimit=\"17\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBJ", "absolute", null, null, "589", "84", "10", "104", this.Tab0.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("13");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.style.set_font("9 굴림");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"업태\"/><Cell col=\"1\" displaytype=\"text\" text=\"종목\"/><Cell col=\"2\" displaytype=\"text\" text=\"코드번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:CORP_TYPENM\" editlimit=\"30\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:CORP_LINE\" editlimit=\"50\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align: center;\" text=\"bind:CORP_TYPECD\" editlimit=\"7\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:DF_TAXBIL_SAMT\" editlimit=\"17\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"수입금액제외\" expr=\"expr:&quot;수입금액제외&quot;\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CORP_LINE\" expr=\"expr:&quot;&quot;\" editlimit=\"50\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:CORP_TYPECD\" expr=\"expr:&quot;&quot;\" editlimit=\"7\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:DF_EXCEPT_SAMT\" editlimit=\"17\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBI", "absolute", null, "158", "589", null, "10", "216", this.Tab0.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("14");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.style.set_font("굴림,9");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"78\"/><Column size=\"97\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"text\" text=\"가산세명세\"/><Cell col=\"2\" displaytype=\"text\" text=\"금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"사업자 미등록등\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_BIZMIS_SAMT\" editlimit=\"17\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_BIZMIS_VAMT\" editlimit=\"17\"/><Cell row=\"1\" rowspan=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"세금계산서\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"지연발급등\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIDEL_SAMT\" editlimit=\"17\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIDEL_VAMT\" editlimit=\"17\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"지연수취\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:AD_EBDERV_SAMT\" editlimit=\"17\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:AD_EBDERV_VAMT\" editlimit=\"17\"/><Cell row=\"3\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"미발급 등\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_NOTPUB_SAMT\" editlimit=\"17\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_NOTPUB_VAMT\" editlimit=\"17\"/><Cell row=\"4\" rowspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"전자세금계산서&#10;발급명세전송\"/><Cell row=\"4\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"지연전송\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIOVE_SAMT\" editlimit=\"17\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIOVE_VAMT\" editlimit=\"17\"/><Cell row=\"5\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"미전송\"/><Cell row=\"5\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIEXC_SAMT\" editlimit=\"17\"/><Cell row=\"5\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_EBIEXC_VAMT\" editlimit=\"17\"/><Cell row=\"6\" rowspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"세금계산서합계표\"/><Cell row=\"6\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"제출 불성실\"/><Cell row=\"6\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_TAXBIL_SAMT\" editlimit=\"17\"/><Cell row=\"6\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_TAXBIL_VAMT\" editlimit=\"17\"/><Cell row=\"7\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"지연제출\"/><Cell row=\"7\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:AD_TAXDEL_SAMT\" editlimit=\"17\"/><Cell row=\"7\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:AD_TAXDEL_VAMT\" editlimit=\"17\"/><Cell row=\"8\" rowspan=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"신 고 불 성 실\"/><Cell row=\"8\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"무신고(일반)\"/><Cell row=\"8\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR1_SAMT\" editlimit=\"17\"/><Cell row=\"8\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR1_VAMT\" editlimit=\"17\"/><Cell row=\"9\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"무신고(부당)\"/><Cell row=\"9\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR2_SAMT\" editlimit=\"17\"/><Cell row=\"9\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR2_VAMT\" editlimit=\"17\"/><Cell row=\"10\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"과소·초과환급신고(일반)\"/><Cell row=\"10\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR3_SAMT\" editlimit=\"17\"/><Cell row=\"10\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR3_VAMT\" editlimit=\"17\"/><Cell row=\"11\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"과소·초과환급신고(부당)\"/><Cell row=\"11\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR4_SAMT\" editlimit=\"17\"/><Cell row=\"11\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_REPOR4_VAMT\" editlimit=\"16\"/><Cell row=\"12\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"납 부 불 성 실\"/><Cell row=\"12\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_NOSEND_SAMT\" editlimit=\"17\"/><Cell row=\"12\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_NOSEND_VAMT\" editlimit=\"16\"/><Cell row=\"13\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"영세율 과세표준 신고불성실\"/><Cell row=\"13\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_ZERBIL_SAMT\" editlimit=\"17\"/><Cell row=\"13\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_ZERBIL_VAMT\" editlimit=\"16\"/><Cell row=\"14\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"현금매출명세서 불성실\"/><Cell row=\"14\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_CASNOT_SAMT\" editlimit=\"17\"/><Cell row=\"14\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_CASNOT_VAMT\" editlimit=\"16\"/><Cell row=\"15\" colspan=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"부동산임대공급가액명세서 불성실\"/><Cell row=\"15\" col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:AD_ESTATE_SAMT\" editlimit=\"17\"/><Cell row=\"15\" col=\"3\" displaytype=\"number\" edittype=\"normal\" style=\"align: right;\" text=\"bind:AD_ESTATE_VAMT\" editlimit=\"16\"/><Cell row=\"16\" rowspan=\"2\" displaytype=\"text\" style=\"align: center;\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"매입자\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"납부특례\"/></Cell><Cell row=\"16\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"거래계좌 미사용\"/><Cell row=\"16\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:AD_ACCNOT_SAMT\" editlimit=\"17\"/><Cell row=\"16\" col=\"3\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:AD_ACCNOT_VAMT\" editlimit=\"16\"/><Cell row=\"17\" col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"거래계좌 지연입금\"/><Cell row=\"17\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:AD_ACCDELAY_SAMT\" editlimit=\"17\"/><Cell row=\"17\" col=\"3\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:AD_ACCDELAY_VAMT\" editlimit=\"16\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdVAT_TAX_SUBH", "absolute", null, "10", "589", "138", "10", null, this.Tab0.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("15");
            obj.set_binddataset("dsTA_VAT101_H2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.style.set_font("굴림,9");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"그밖의경감·공제세액명세\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/><Cell col=\"2\" displaytype=\"text\" text=\"세액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: left;\" text=\"전 자 신 고 세 액 공 제\"/><Cell col=\"1\" displaytype=\"number\" style=\"align: right;\" text=\"bind:GONGAMT\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RD_EBIPAY_VAMT\" editlimit=\"17\"/><Cell row=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"택시운송사업자 경감세액\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align: left;\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RD_TAXICO_VAMT\" editlimit=\"17\"/><Cell row=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"현금영수증 사업자 공제 세액\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" style=\"align: left;\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RD_CASBIL_VAMT\" editlimit=\"17\"/><Cell row=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"기          타\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" style=\"align: left;\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;\" text=\"bind:RD_ETCBIL_VAMT\" editlimit=\"17\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("부가세신고서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("21");
            obj.set_text("홈 > 세무관리 > 부가세신고 > 부가세신고서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("25");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "573", "103", "80", "37", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("33");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("34");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("35");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "74", "61", "8", "41", null, null, this);
            obj.set_taborder("36");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "242", "61", "40", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "393", "61", "40", "41", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "13", "103", "72", "10", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "272", "71", "50", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRVAT_YYYY", "absolute", "314", "71", "79", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 101, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("VAT신고서 1쪽");

            	}
            );
            this.Tab0.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("VAT신고서 2쪽");

            	}
            );
            this.Tab0.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부가세신고서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Tab0_tab1_Combo0_value","Tab0.tab1.Combo0","value","dsTA_VAT101_H1","VAT_QUARTER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtPERMITNUM_value","Tab0.tab1.edtPERMITNUM","value","dsTA_VAT101_H2","VAT_TOTPAYNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab0.tab1.edtUNITTAXNO","value","dsTA_VAT101_H2","BRANCH_APPRNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtCELLPHONE_value","Tab0.tab1.edtCELLPHONE","value","dsTA_VAT101_H1","CORP_CELL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtEMAIL_value","Tab0.tab1.edtEMAIL","value","dsTA_VAT101_H1","CORP_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_cmbBANK_CODE_value","Tab0.tab1.cmbBANK_CODE","value","dsTA_VAT101_H2","VAT_BANKCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtBRANCHNAME_value","Tab0.tab1.edtBRANCHNAME","value","dsTA_VAT101_H2","VAT_BANKBRANCH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtACCOUNTNUM_value","Tab0.tab1.edtACCOUNTNUM","value","dsTA_VAT101_H2","VAT_BANKNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_calOUTDATE_value","Tab0.tab1.calOUTDATE","value","dsTA_VAT101_H2","CORP_EYMD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtOUTREMARK_value","Tab0.tab1.edtOUTREMARK","value","dsTA_VAT101_H2","CLOSING_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtWNAME_value","Tab0.tab1.edtWNAME","value","dsTA_VAT101_H1","AGENT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtWNUM_value","Tab0.tab1.edtWNUM","value","dsTA_VAT101_H1","AGENT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_edtWTEL_value","Tab0.tab1.edtWTEL","value","dsTA_VAT101_H1","AGENT_TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_medGASANAMT_value","Tab0.tab1.medGASANAMT","value","dsTA_VAT101_H1","RH_ADDTOT_VAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab1_medCHAGAMAMT_value","Tab0.tab1.medCHAGAMAMT","value","dsTA_VAT101_H1","VAT_REF_VAMT");
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
        this.addIncludeScript("TXMC0160.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TXMC0160.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TXMC0160.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMC0160  부가세신고서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.03		신민규		Initial Created.
         *   2016.08.11		안윤준		수정
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sBUTTONLIST  	= "TTFFFTFT"; 
        this.sPACKAGENAME 	= "TXMC0160"; 
        this.sSERVERDATE  	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);

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

        	this.fnc_GetBranch();

        	var sStds_Date	= this.fnc_AddMonth(this.sSERVERDATE, -1);
        	var sStds_Mnth	= this.fnc_SubStr(sStds_Date, 4, 2);
        	var sVatQuarter = "";
        		
        	this.calSHRVAT_YYYY.set_value(this.fnc_SubStr(sStds_Date, 0, 4));

        	if (sStds_Mnth >= "01" && sStds_Mnth <= "03") {
        		sVatQuarter = "1";
        		this.edtVAT_SMMDD.set_value("0101");
        		this.edtVAT_EMMDD.set_value("0331");
        	} else if (sStds_Mnth >= "04" && sStds_Mnth <= "06") {
        		sVatQuarter = "2";
        		this.edtVAT_SMMDD.set_value("0401");
        		this.edtVAT_EMMDD.set_value("0630");
        	} else if (sStds_Mnth >= "07" && sStds_Mnth <= "09") {
        		sVatQuarter = "3";
        		this.edtVAT_SMMDD.set_value("0701");
        		this.edtVAT_EMMDD.set_value("0930");
        	} else if (sStds_Mnth >= "10" && sStds_Mnth <= "12") {
        		sVatQuarter = "4";
        		this.edtVAT_SMMDD.set_value("1001");
        		this.edtVAT_EMMDD.set_value("1231");
        	}
        	
        	this.cmbVAT_QUARTER.set_value(sVatQuarter);
        	this.cmbSHRACCT_GUBN.setFocus();
        	
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
        	// 조회 필수 입력 여부 체크
        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.fnc_DatasetClear("dsTA_VAT101_D,dsTA_VAT101_H1,dsTA_VAT101_H2");
        	
        	var sMethodName  = "SEARCH00";
        	var sInDataSet   = "";
        	var	sOutDataSet  = "dsTA_VAT101_H1=dsTA_VAT101_H1 ";
        		sOutDataSet += "dsTA_VAT101_H2=dsTA_VAT101_H2 ";
        		sOutDataSet += "dsTA_VAT101_D=dsTA_VAT101_D ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (this.dsTA_VAT101_H1.rowcount < 1) {
        		this.fnc_Message("TMM125", "조회 후 저장하세요");
        		return false;
        	}

        	if (this.fnc_Length(this.dsTA_VAT101_D.getColumn(0, "CORP_TYPECD")) < 1) {
        		this.fnc_Message("TMM125", "업종코드를 입력하세요.");
        		return false;
        	}

        
        	// 과세표준 명세의 업종코드를 TA_VAT101_H1 에 넣어준다.
        	this.dsTA_VAT101_H1.setColumn(0, "CORP_TYPECD", this.dsTA_VAT101_D.getColumn(0, "CORP_TYPECD"));

        	// 과세표준 명세의 수입금액 제외의 업태, 업종, 업종코드를 1라인의 데이터로 넣어준다.
        	this.dsTA_VAT101_D.setColumn(3, "CORP_TYPENM", this.dsTA_VAT101_D.getColumn(0, "CORP_TYPENM"));
        	this.dsTA_VAT101_D.setColumn(3, "CORP_LINE", this.dsTA_VAT101_D.getColumn(0, "CORP_LINE"));
        	this.dsTA_VAT101_D.setColumn(3, "CORP_TYPECD", this.dsTA_VAT101_D.getColumn(0, "CORP_TYPECD"));

        	// 과세표준 명세에 금액이 들어가있을 경우 수입금액종류를 넣어준다.,
        	for (var i = 0; i < 4; i++) {
        	
        		if (this.dsTA_VAT101_D.getColumn(i, "INCOME_SAMT") != 0) {
        			// 금액이 있으면
        			if (i != 3) {
        				this.dsTA_VAT101_D.setColumn(i, "INCOME_TYPECD", "1"); //과세표준명세
        			} else {
        				this.dsTA_VAT101_D.setColumn(i, "INCOME_TYPECD", "2"); //수입금액제외
        			}
        		}
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_VAT101_H1=dsTA_VAT101_H1:A ";
        		sInDataSet += "dsTA_VAT101_H2=dsTA_VAT101_H2:A ";
        		sInDataSet += "dsTA_VAT101_D=dsTA_VAT101_D:A ";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        	var reportfile = "/txm/TXMC0160R01.jrf";

        	var params  =  "ACCT_GUBN#"   + this.fnc_Trim(this.cmbSHRACCT_GUBN.value);
        		params +=  "#VAT_YYYY#"   + this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4);
        		params +=  "#VAT_QUARTER#"+ this.fnc_Trim(this.cmbVAT_QUARTER.value);
        		
        		/*params += "#TOTL_INTL#전체";*/

        	var dataref = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/txm/TXMC0160_SEARCH00.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsTA_VAT101_H1=dsTA_VAT101_H1 dsTA_VAT101_H2=dsTA_VAT101_H2 dsTA_VAT101_D=dsTA_VAT101_D dsVA_VATBRANCH=dsVA_VATBRANCH"
        	dataref[0].arg = this.fn_CreateArgument("REPORT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VAT101_H1,dsTA_VAT101_H2,dsTA_VAT101_D", this);	
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

        	if (this.fnc_DatasetChangeCheck("dsTA_VAT101_H1,dsTA_VAT101_H2,dsTA_VAT101_D")) {
        		if (!this.fnc_Message("TMM023")) return false;
        		
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "연도", this.calSHRVAT_YYYY);
        		
        	}
        	
        	return true;
        	
        }

        
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	//변경된 데이터가 없습니다.
        	if (!this.fnc_DatasetChangeCheck("dsTA_VAT101_H1,dsTA_VAT101_H2,dsTA_VAT101_D")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;
        	
        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		 + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	 + this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_GUBN=" 	 + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" + this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if ( sKind == "REPORT00") {
        	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if (sKind == "PROC00") {
        		sReturnString  = " pgm=" 		 + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	 + this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_GUBN=" 	 + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 					 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" + this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		sReturnString += " VAT_SMMDD="	 + this.fnc_Quote(this.fnc_Trim(this.edtVAT_SMMDD.value));						 //VAT조회 시작월일
        		sReturnString += " VAT_EMMDD="	 + this.fnc_Quote(this.fnc_Trim(this.edtVAT_EMMDD.value)); 						 //VAT조회 종료월일
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME); 
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
        		this.fnc_Message("TMM018", this.dsTA_VAT101_H1.rowcount);
        		this.cmbSHRACCT_GUBN.setFocus();
        		
        	} else if (sMethodName == "REPORT00") {

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103"); 
        		
        	} else if (sMethodName == "PROC00") {
        		/**
        		 * 2015.04.07.PIH
        		 * 환급구분코드
        		 * 일반환급                        (10) : 조기환급(영세율 및 시설투자환급)에 해당되지 않는 경우
        		 * 영세율환급                      (20) : 영세율 매출에 해당하는 금액이 있는 경우
        		 * 시설투자환급                    (30) : 영세율 매출은 없고 고정자산 매입에 해당하는 금액이 있는 경우
        		 * 총괄납부주사업자 환급          (40) : 총괄납부(환급)세액이 "0" 이상(납부)이나 (26)차가감납부할세액(환급받을세액)이 "0" 미만(환급)일 때
        		 * 총괄납부주사업자 일반환급     (41) : 총괄납부(환급)세액이 "0" 미만일 때 조기환급(영세율 및 시설투자환급)에 해당되지 않는 경우
        		 * 총괄납부주사업자 영세율환급   (42) : 총괄납부(환급)세액이 "0" 미만일 때 영세율 매출에 해당하는 금액이 있는 경우
        		 * 총괄납부주사업자 시설투자환급 (43) : 총괄납부(환급)세액이 "0" 미만일 때 영세율 매출은 없고 고정자산 매입에 해당하는 금액이 있는 경우
        		 */
        		 
        		// 실차감납부할세액의 값을 넣어준다.
        		if (this.dsTA_VAT101_H2.getColumn(0, "VAT_NTAX_TYPECD") == "2") {
        			// 총괄납부사업자의 주사업자
        			var nVAT_REF_VAMT = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "VAT_PAY_VAMT"), 0) + nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "VAT_JPAY_VAMT"), 0);
        		
        			/* 20151022 김남호 : 2015년2기예정 부가세 신고시 환급구분코드 에러
        			 본사는 기본 "10"으로 설정했는데 "환급구분코드 확인" 에러 발생으로 "ZZ"로 변경했더니 정상 동작*/
        			if (this.dsTA_VAT101_H2.getColumn(0, "REFUND_TYPECD") == "" || this.dsTA_VAT101_H2.getColumn(0, "REFUND_TYPECD") == null) {
        				// dsTA_VAT101_H2.setColumn(0, "REFUND_TYPECD", "10");
        				this.dsTA_VAT101_H2.setColumn(0, "REFUND_TYPECD", "ZZ");
        			}
        		} else if (this.dsTA_VAT101_H2.getColumn(0, "VAT_NTAX_TYPECD") == "3") {
        			// 총괄납부사업자의 종사업자
        			this.dsTA_VAT101_H2.setColumn(0, "VAT_REF_VAMT", "0");
        			/* 2015.04.23. 안양은 "20"으로 고정
        			 if (toNumber(dsTA_VAT101_H1.getColumn(0, "VAT_PAY_VAMT"), 0) < 0) {
        			 dsTA_VAT101_H2.setColumn(0, "REFUND_TYPECD", "40");
        			 }
        			 */
        			if (this.dsTA_VAT101_H2.getColumn(0, "REFUND_TYPECD") == "" || this.dsTA_VAT101_H2.getColumn(0, "REFUND_TYPECD") == null) {
        				this.dsTA_VAT101_H2.setColumn(0, "REFUND_TYPECD", "20");
        			}
        		} else if (this.dsTA_VAT101_H2.getColumn(0, "VAT_NTAX_TYPECD") == "5") {
        			// 사업자단위과세적용사업자
        			this.dsTA_VAT101_H2.setColumn(0, "VAT_REF_VAMT", this.dsTA_VAT101_H1.getColumn(0, "VAT_PAY_VAMT"));
        		}
        		
        		this.cmbSHRACCT_GUBN.setFocus();
        		
        	} else if (sMethodName == "GetBranch") {
        		this.cmbSHRACCT_GUBN.set_index(0);
        	
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] 	= "COMBO,Tab0.tab1.cmbBANK_CODE,dsBANK_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);		
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.btn_PROC_OnClick = function (obj,e) {

        	if (!this.fn_SearchItemCheck()) return;

        	var sMethodName  = "PROC00";
        	var sInDataSet   = "";
        	var sOutDataSet  = "dsTA_VAT101_H1=dsTA_VAT101_H1 ";
        		sOutDataSet += "dsTA_VAT101_H2=dsTA_VAT101_H2 ";
        		sOutDataSet += "dsTA_VAT101_D=dsTA_VAT101_D ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        this.ds_OnColumnChanged = function (obj,e) {
        	this.calculation();
        	
        }

        this.calculation = function () {
        	// 전자신고 - 과표예정신고누락분금액합계, 과표예정신고누락분세액 합계
        	// 1PAGE : 과세표준및매출세액 - 예정신고누락분
        	var SW_SALTOT_SAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "SW_TAXBIL_SAMT"), 0);
        		SW_SALTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "SW_TAXETC_SAMT"), 0); //과표예정과세기타금액
        		SW_SALTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "SW_ZERBIL_SAMT"), 0); //과표예정영세세금계산서금액
        		SW_SALTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "SW_ZERETC_SAMT"), 0); //과표예정영세기타금액
        	var SW_SALTOT_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "SW_TAXBIL_VAMT"), 0);
        		SW_SALTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "SW_TAXETC_VAMT"), 0); //과표예정과세기타세액

        	var SH_WILMIS_SAMT = SW_SALTOT_SAMT;
        	var SH_WILMIS_VAMT = SW_SALTOT_VAMT;
        	this.dsTA_VAT101_H2.setColumn(0, "SW_SALTOT_SAMT", SW_SALTOT_SAMT);
        	this.dsTA_VAT101_H2.setColumn(0, "SW_SALTOT_VAMT", SW_SALTOT_VAMT);

        	this.dsTA_VAT101_H1.setColumn(0, "SH_WILMIS_SAMT", SH_WILMIS_SAMT);
        	this.dsTA_VAT101_H1.setColumn(0, "SH_WILMIS_VAMT", SH_WILMIS_VAMT);

        	// 전자신고 - 예정매입누락합계금액, 예정매입누락합계세액
        	// 1PAGE : 매입세액 - 예정신고누락분
        	var PW_PURTOT_SAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PW_TAXBIL_SAMT"), 0);
        		PW_PURTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PW_ETCBIL_SAMT"), 0); //예정매입기타공제누락세액금액
        	var PW_PURTOT_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PW_TAXBIL_VAMT"), 0);
        		PW_PURTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PW_ETCBIL_VAMT"), 0); //예정매입기타공제누락세액세액

        	var PH_WILTOT_SAMT = PW_PURTOT_SAMT;
        	var PH_WILTOT_VAMT = PW_PURTOT_VAMT;
        	this.dsTA_VAT101_H2.setColumn(0, "PW_PURTOT_SAMT", PW_PURTOT_SAMT);
        	this.dsTA_VAT101_H2.setColumn(0, "PW_PURTOT_VAMT", PW_PURTOT_VAMT);

        	this.dsTA_VAT101_H1.setColumn(0, "PH_WILTOT_SAMT", PH_WILTOT_SAMT);
        	this.dsTA_VAT101_H1.setColumn(0, "PH_WILTOT_VAMT", PH_WILTOT_VAMT);

        	// 전자신고 - 기타공제매입금액합계, 기타공제매입세액합계
        	// 1PAGE : 매입세액 - 기타공제매입세액
        	var PD_PURTOT_SAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_CREDIT_SAMT"), 0);
        		PD_PURTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_AGENDA_SAMT"), 0); //매입의제매입금액
        		PD_PURTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_RECYCL_SAMT"), 0); //PD_PURTOT_SAMT += toNumber(dsTA_VAT101_H2.GetColumn(0, "PD_ALAGEN_SAMT"), 0);   //매입고금의제매입금액
        		PD_PURTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_ASSETS_SAMT"), 0); //매입신용고정자산금액
        	var PD_PURTOT_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_CREDIT_VAMT"), 0);
        		PD_PURTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_AGENDA_VAMT"), 0); //매입의제매입세액
        		PD_PURTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_RECYCL_VAMT"), 0); //매입재활용세액
        		PD_PURTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_CONVER_VAMT"), 0); //PD_PURTOT_VAMT += toNumber(dsTA_VAT101_H2.GetColumn(0, "PD_ALAGEN_VAMT"), 0);   //매입고금의제매입세액
        		PD_PURTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_ASSETS_VAMT"), 0); //매입신용고정자산세액
        		PD_PURTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_STOCKP_VAMT"), 0); //매입재고매입세액
        		PD_PURTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_BADDEP_VAMT"), 0); //매입변제대손세액
        		PD_PURTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PD_FOREINER_VAMT"), 0); //외국인관광객에대한환급세액

        	var PH_ETCBIL_SAMT = PD_PURTOT_SAMT;
        	var PH_ETCBIL_VAMT = PD_PURTOT_VAMT;
        	this.dsTA_VAT101_H2.setColumn(0, "PD_PURTOT_SAMT", PD_PURTOT_SAMT);
        	this.dsTA_VAT101_H2.setColumn(0, "PD_PURTOT_VAMT", PD_PURTOT_VAMT);

        	this.dsTA_VAT101_H1.setColumn(0, "PH_ETCBIL_SAMT", PH_ETCBIL_SAMT);
        	this.dsTA_VAT101_H1.setColumn(0, "PH_ETCBIL_VAMT", PH_ETCBIL_VAMT);

        	// 매입공제받지못할금액합계, 매입공제받지못할세액합계
        	// 1PAGE : 매입세액 - 기타공제매입세액
        	var PN_PURTOT_SAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PN_UNABLE_SAMT"), 0);
        		PN_PURTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PN_EXCEPT_SAMT"), 0); //공통매입면세사업금액
        		PN_PURTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PN_DOUADD_SAMT"), 0); //대손처분금액
        	var PN_PURTOT_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PN_UNABLE_VAMT"), 0);
        		PN_PURTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PN_EXCEPT_VAMT"), 0); //공통매입면세사업세액
        		PN_PURTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "PN_DOUADD_VAMT"), 0); //대손처분세액

        	var PH_UNABLE_SAMT = PN_PURTOT_SAMT;
        	var PH_UNABLE_VAMT = PN_PURTOT_VAMT;
        	this.dsTA_VAT101_H2.setColumn(0, "PN_PURTOT_SAMT", PN_PURTOT_SAMT);
        	this.dsTA_VAT101_H2.setColumn(0, "PN_PURTOT_VAMT", PN_PURTOT_VAMT);

        	this.dsTA_VAT101_H1.setColumn(0, "PH_UNABLE_SAMT", PH_UNABLE_SAMT);
        	this.dsTA_VAT101_H1.setColumn(0, "PH_UNABLE_VAMT", PH_UNABLE_VAMT);

        	// 1PAGE : 경감공제세액 - 기타공제 경감세액
        	var RH_ETCMIN_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "RD_EBIPAY_VAMT"), 0);
        		RH_ETCMIN_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "RD_EBITAX_VAMT"), 0); //전자세금계산서발급세액공제세액
        		RH_ETCMIN_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "RD_TAXICO_VAMT"), 0); //택시사업부가가치세경감세액
        		RH_ETCMIN_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "RD_CASBIL_VAMT"), 0); //현금영수증사업자공제세액
        		RH_ETCMIN_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "RD_ETCBIL_VAMT"), 0); //기타경감공제세액명세기타세액

        	this.dsTA_VAT101_H1.setColumn(0, "RH_ETCMIN_VAMT", RH_ETCMIN_VAMT);

        	// 1PAGE : 가산세계(아)
        	var AD_REPORT_SAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_REPOR1_SAMT"), 0);
        		AD_REPORT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_REPOR2_SAMT"), 0); //신고불성실-무신고(부당)금액
        		AD_REPORT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_REPOR3_SAMT"), 0); //과소·초과환급신고(일반)금액
        		AD_REPORT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_REPOR4_SAMT"), 0); //과소·초과환급신고(부당)금액

        	var AD_REPORT_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_REPOR1_VAMT"), 0);
        		AD_REPORT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_REPOR2_VAMT"), 0); //신고불성실-무신고(부당)세액
        		AD_REPORT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_REPOR3_VAMT"), 0); //과소·초과환급신고(일반)세액
        		AD_REPORT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_REPOR4_VAMT"), 0); //과소·초과환급신고(부당)세액

        	// 가산세 불성실 계
        	this.dsTA_VAT101_H2.setColumn(0, "AD_REPORT_SAMT", AD_REPORT_SAMT);
        	this.dsTA_VAT101_H2.setColumn(0, "AD_REPORT_VAMT", AD_REPORT_VAMT);

        	var RH_ADDTOT_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_BIZMIS_VAMT"), 0);
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_EBIDEL_VAMT"), 0); //세금계산서지연발급등가산세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_EBDERV_VAMT"), 0); //세금계산서지연수취가산세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_NOTPUB_VAMT"), 0); //세금계산서미발급등가산세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_EBIOVE_VAMT"), 0); //전자세금계산서발급명세전송-지연전송세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_EBIEXC_VAMT"), 0); //전자세금계산서발급명세전송-미전송세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_TAXBIL_VAMT"), 0); //세금계산서합계표 제출불성실세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_REPORT_VAMT"), 0); //신고불성실-합계세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_NOSEND_VAMT"), 0); //납부불성실가산세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_ZERBIL_VAMT"), 0); //영세율신고가산세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_CASNOT_VAMT"), 0); //현금매출명세서미제출등가산세액

        		/* 2013 1기예정 추가 시작 */
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_TAXDEL_VAMT"), 0); //세금계산서합계표 지연제출세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_ESTATE_VAMT"), 0); //부동산임대공급가액명세서 불성실세액
        		/* 2013 1기예정 추가 종료 */

        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_ACCNOT_VAMT"), 0); //거래계좌미사용가산세액
        		RH_ADDTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H2.getColumn(0, "AD_ACCDELAY_VAMT"), 0); //거래계좌지연입금가산세액

        	// 가산세계 = 가산세 세액계
        	this.dsTA_VAT101_H1.setColumn(0, "RH_ADDTOT_VAMT", RH_ADDTOT_VAMT);
        	this.dsTA_VAT101_H2.setColumn(0, "AD_ADDTOT_VAMT", RH_ADDTOT_VAMT);

        
        	// 과세표준(9), 산출세액(가)
        	var SH_TAXTOT_SAMT  = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_TAXBIL_SAMT"), 0);
        		SH_TAXTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_PURPUB_SAMT"), 0); //과표신고과세매입자발행금액
        		SH_TAXTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_CRECAS_SAMT"), 0); //과표신고신용카드현금영수증금액
        		SH_TAXTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_TAXETC_SAMT"), 0); //과표신고과세기타금액
        		SH_TAXTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_ZERBIL_SAMT"), 0); //과표신고영세세금계산서금액
        		SH_TAXTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_ZERETC_SAMT"), 0); //과표신고영세기타금액
        		SH_TAXTOT_SAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_WILMIS_SAMT"), 0); //SH_TAXTOT_SAMT += toNumber(dsTA_VAT101_H1.GetColumn(0, "SH_DOUADD_SAMT"), 0);   //대손세액가감금액
        	var SH_TAXTOT_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_TAXBIL_VAMT"), 0);
        		SH_TAXTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_PURPUB_VAMT"), 0); //과표신고과세매입자발행세액
        		SH_TAXTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_CRECAS_VAMT"), 0); //과표신고신용카드현금영수증세액
        		SH_TAXTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_TAXETC_VAMT"), 0); //과표신고과세기타세액
        		SH_TAXTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_WILMIS_VAMT"), 0); //과표예정신고누락분세액
        		SH_TAXTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_DOUADD_VAMT"), 0); //대손세액가감세액

        	this.dsTA_VAT101_H1.setColumn(0, "SH_TAXTOT_SAMT", SH_TAXTOT_SAMT); //과세표준
        	this.dsTA_VAT101_H1.setColumn(0, "SH_TAXTOT_VAMT", SH_TAXTOT_VAMT); //산출세액

        	// 과세수입금액합계 = 과세표준
        	this.dsTA_VAT101_H1.setColumn(0, "IH_TAXBIL_SAMT", SH_TAXTOT_SAMT); //과세수입금액합계

        	// 과세표준명세의 수입금액제외 금액을 dsTA_vAT101_H1 에 SET
        	this.dsTA_VAT101_H1.setColumn(0, "IH_EXCEPT_SAMT", this.dsTA_VAT101_D.getColumn(3, "INCOME_SAMT"));

        	// 과세표준명세 수입금액 = 과세표준 - 수입금액제외
        	IH_EXCEPT_SAMT = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "IH_EXCEPT_SAMT"), 0); //과세수입금액제외금액
        	this.dsTA_VAT101_D.setColumn(0, "INCOME_SAMT", SH_TAXTOT_SAMT - IH_EXCEPT_SAMT); //수입금액 = 과세표준 - 과세수입금액제외금액

        	// 매입금액합계(15), 매입세액합계(15)
        	var PH_PTOTAL_SAMT  = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_TAXBIL_SAMT"), 0);
        		PH_PTOTAL_SAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_ASSETS_SAMT"), 0); //매입수취고정잔산금액
        		PH_PTOTAL_SAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_WILTOT_SAMT"), 0); //매입예정신고누락금액
        		PH_PTOTAL_SAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_PURPUB_SAMT"), 0); //매입매입자발행금액
        		PH_PTOTAL_SAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_ETCBIL_SAMT"), 0); //매입기타공제금액
        	var PH_PTOTAL_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_TAXBIL_VAMT"), 0);
        		PH_PTOTAL_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_ASSETS_VAMT"), 0); //매입수취고정자산세액
        		PH_PTOTAL_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_WILTOT_VAMT"), 0); //매입예정신고누락세액
        		PH_PTOTAL_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_PURPUB_VAMT"), 0); //매입매입자발행세액
        		PH_PTOTAL_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_ETCBIL_VAMT"), 0); //매입기타공제세액

        	this.dsTA_VAT101_H1.setColumn(0, "PH_PTOTAL_SAMT", PH_PTOTAL_SAMT); //매입금액합계
        	this.dsTA_VAT101_H1.setColumn(0, "PH_PTOTAL_VAMT", PH_PTOTAL_VAMT); //매입세액합계

        	// 차감매입금액(17), 차감매입세액(나)
        	var PH_ADDMIN_SAMT  = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_PTOTAL_SAMT"), 0);
        		PH_ADDMIN_SAMT -= nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_UNABLE_SAMT"), 0); //매입공제받지못할금액
        	var PH_ADDMIN_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_PTOTAL_VAMT"), 0);
        		PH_ADDMIN_VAMT -= nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_UNABLE_VAMT"), 0); //매입공제받지못할세액

        	this.dsTA_VAT101_H1.setColumn(0, "PH_ADDMIN_SAMT", PH_ADDMIN_SAMT); //차감매입금액
        	this.dsTA_VAT101_H1.setColumn(0, "PH_ADDMIN_VAMT", PH_ADDMIN_VAMT); //차감매입세액

        	// 납부및환급세액(다)[매출세액(가) - (매입세액(나)]
        	var SP_RETURN_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SH_TAXTOT_VAMT"), 0);
        		SP_RETURN_VAMT -= nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_ADDMIN_VAMT"), 0); //차감매입세액

        	this.dsTA_VAT101_H1.setColumn(0, "SP_RETURN_VAMT", SP_RETURN_VAMT);

        	// 경감세액계(라)
        	var RH_MINTOT_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "RH_ETCMIN_VAMT"), 0);
        		RH_MINTOT_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "RH_CREDIT_VAMT"), 0); //금전신용공제금액

        	this.dsTA_VAT101_H1.setColumn(0, "RH_MINTOT_VAMT", RH_MINTOT_VAMT); //경감세액계

        	// 차감납부할세액(25)[(다)-(라)-(마)-(바)-(사)-(아)+(자)]
        	var VAT_PAY_VAMT  = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "SP_RETURN_VAMT"), 0);
        		VAT_PAY_VAMT -= nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "RH_MINTOT_VAMT"), 0); //경감세액계
        		VAT_PAY_VAMT -= nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "RH_WILRET_VAMT"), 0); //예정미환급세액
        		VAT_PAY_VAMT -= nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "RH_NOTRET_VAMT"), 0); //예정고지세액
        		VAT_PAY_VAMT -= nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "RH_PROXY_VAMT"), 0); //사업양수자의대리납부기납부세액
        		VAT_PAY_VAMT -= nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "RH_PROHIB_VAMT"), 0); //금지금매입자납부특례기납부세액
        		VAT_PAY_VAMT += nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "RH_ADDTOT_VAMT"), 0); //가산세계
        		VAT_PAY_VAMT -= nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "PH_EXPOST_VAMT"), 0); //수출기업수입분납부유예

        	this.dsTA_VAT101_H1.setColumn(0, "VAT_REF_VAMT", VAT_PAY_VAMT); //차감납부할세액

        	// 차감납부할세액 = 실차감납부할세액
        	// 2014.12.19.PIH : 사업자단위과세적용사업자 일 경우에만 해당되므로 주석처리!
        	// dsTA_VAT101_H2.setColumn(0, "VAT_REF_VAMT", VAT_PAY_VAMT);

        	if (this.dsTA_VAT101_H2.getColumn(0, "VAT_NTAX_TYPECD") == "2") {
        		// 총괄납부사업자의 주사업자
        		var nVAT_REF_VAMT = nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "VAT_PAY_VAMT"), 0) + nexacro.toNumber(this.dsTA_VAT101_H1.getColumn(0, "VAT_JPAY_VAMT"), 0);
        		this.dsTA_VAT101_H2.setColumn(0, "VAT_REF_VAMT", nVAT_REF_VAMT);
        		
        	} else if (this.dsTA_VAT101_H2.getColumn(0, "VAT_NTAX_TYPECD") == "3") {
        	
        		// 총괄납부사업자의 종사업자(실차감납부할세액 = 차감납부할세액 + 차감납부할세액(종사업장))
        		this.dsTA_VAT101_H2.setColumn(0, "VAT_REF_VAMT", "0");
        		
        	} else if (this.dsTA_VAT101_H2.getColumn(0, "VAT_NTAX_TYPECD") == "5") {
        		// 사업자단위과세적용사업자
        		this.dsTA_VAT101_H2.setColumn(0, "VAT_REF_VAMT", this.dsTA_VAT101_H1.getColumn(0, "VAT_PAY_VAMT"));
        	}

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VAT101_H1.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.dsTA_VAT101_H2.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.dsTA_VAT101_D.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.dsTA_VAT101_D2.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.dsTA_VAT101_D3.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.Div0.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.Combo0.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtPERMITNUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtCELLPHONE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtEMAIL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtSKPERMITNUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtUNITTAXNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.grdVAT_TAX_SUBB.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab1.grdVAT_TAX_SUBC.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab1.cmbBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtBRANCHNAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtACCOUNTNUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.calOUTDATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtOUTREMARK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtWNAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtWNUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.edtWTEL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.medGASANAMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.medGASANAMT.addEventHandler("oneditclick", this.fn_EditFocus, this);
            this.Tab0.tab1.medCHAGAMAMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.medCHAGAMAMT.addEventHandler("oneditclick", this.fn_EditFocus, this);
            this.Tab0.tab1.grdVAT_TAX_SUBA.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBG.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBF.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBE.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBK.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBJ.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBI.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.Tab0.tab2.grdVAT_TAX_SUBH.addEventHandler("onenterdown", this.grd_OnEnterDown, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMC0160.xfdl");
        this.loadPreloadList();
       
    };
}
)();
