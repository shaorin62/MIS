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
                this.set_name("PAYB0010");
                this.set_titletext("급여기본내역관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRCLSD_CODE</Col><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSHRWODN_CODE</Col><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsLFDN_CODE</Col><Col id=\"CODEID\">LFDN_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsNANY_CODE</Col><Col id=\"CODEID\">NANY_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsRECL_CODE</Col><Col id=\"CODEID\">RECL_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsDOMC_CODE</Col><Col id=\"CODEID\">DOMC_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsREEP_DIVC</Col><Col id=\"CODEID\">REEP_DIVC</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsWODN_CODE</Col><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsFREL_CODE</Col><Col id=\"CODEID\">FREL_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsGNDR_CODE</Col><Col id=\"CODEID\">GNDR_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsDEGC_CODE</Col><Col id=\"CODEID\">DEGC_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsPAYX_TAXR</Col><Col id=\"CODEID\">PAYX_TAXR</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsHALT_CODE</Col><Col id=\"CODEID\">HALT_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsREAY_JOCD</Col><Col id=\"COMBOID\">PAY0010</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row><Row><Col id=\"DSNAME\">dsXPD_CODE1</Col><Col id=\"COMBOID\">PAY0017</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row><Row><Col id=\"DSNAME\">dsXPD_CODE2</Col><Col id=\"COMBOID\">PAY0018</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\"/><Col id=\"PARAM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_MASTPM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"32\" type=\"STRING\"/><Column id=\"PYTY_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"WRKS_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"PCOP_JCDT\" size=\"8\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RETR_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"ANSD_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"LBJO_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"EMPL_BIRT\" size=\"8\" type=\"STRING\"/><Column id=\"REAL_BIRT\" size=\"8\" type=\"STRING\"/><Column id=\"SLCA_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"REDI_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"WRDV_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"PCOP_JCDT\" size=\"8\" type=\"STRING\"/><Column id=\"ANSD_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RETR_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"WODN_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"WRKS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"PYTY_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"JBGP_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"SPOS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"PSTP_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"JOAG_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"CLPT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DSPT_DTCD\" size=\"10\" type=\"STRING\"/><Column id=\"EXTR_PLDH\" size=\"50\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"JBGP_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DUTY_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DURS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"SEAS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DEAT_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PRON_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PARE_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"NETP_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"FILE_PATH\" size=\"100\" type=\"STRING\"/><Column id=\"OPOS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PBNR_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PBNR_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"FILE_IDXX\" size=\"100\" type=\"STRING\"/><Column id=\"REEP_DIVC\" size=\"255\" type=\"STRING\"/><Column id=\"REAY_JOCD\" size=\"255\" type=\"STRING\"/><Column id=\"WABK_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"WAGE_ACNO\" size=\"255\" type=\"STRING\"/><Column id=\"WAGE_DPST\" size=\"255\" type=\"STRING\"/><Column id=\"IRSB_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"IRSA_ACNO\" size=\"255\" type=\"STRING\"/><Column id=\"IRSA_DPST\" size=\"255\" type=\"STRING\"/><Column id=\"LFDN_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"NANY_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"RECL_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"DOMC_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"TARA_YSNO\" size=\"255\" type=\"STRING\"/><Column id=\"HSHL_YSNO\" size=\"255\" type=\"STRING\"/><Column id=\"RECP_DATE\" size=\"255\" type=\"STRING\"/><Column id=\"STTD_YSNO\" size=\"255\" type=\"STRING\"/><Column id=\"PAYX_TAXR\" type=\"STRING\" size=\"256\"/><Column id=\"PTPY_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"REAY_DATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_ALDEYN1", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"BGIN_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PADN_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PDGB_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"PDGB_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"EXPD_RAPY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_ALDEYN2", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"BGIN_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PADN_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PDGB_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"PDGB_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"EXPD_RAPY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_REGSAL", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"BASC_ANSL\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ASL1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ASL2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ASL3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ASL4_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BSLY_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BSL1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BSL2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BSL3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BSL4_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PAYSET", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADJT_RAPY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AJDI_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FEND_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_FAMILY", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FREL_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_SSEC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_BIRT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCCR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_JOBX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_TLNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LVTG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FALP_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FALP_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEGC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FRDE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FMLY_AGEX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FREL_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HALT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_INCOME", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"INDN_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"INDN_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"TAP1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAP2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAP3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NTP1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NTP2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NTP3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"INCM_TAXX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"INHA_TAXX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"OTDE_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"4\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"REMK_400X\" size=\"400\" type=\"STRING\"/><Column id=\"INDN_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"PAYX_TAMT\" size=\"256\" type=\"STRING\"/><Column id=\"INDN_SUBD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", "264", "128", null, "117", "25", null, this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("Shape02", "absolute", "264", "255", null, "169", "25", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "181", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("37");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_MASTPM", "absolute", "8", "128", "236", null, null, "15", this);
            obj.set_binddataset("dsPY_MASTPM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_taborder("66");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"71\" band=\"left\"/><Column size=\"103\"/><Column size=\"76\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"사원번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"사원명\"/><Cell col=\"2\" displaytype=\"text\" text=\"부서명\"/><Cell col=\"3\" displaytype=\"text\" text=\"직원구분\" wordwrap=\"none\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:CLSD_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "69", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_taborder("64");
            obj.set_cssclass("styFormSearchItem");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "151", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "174", "71", "100", "21", null, null, this);
            obj.set_autoskip("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "344", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("65");
            obj.set_cssclass("styFormSearchItem");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "426", "71", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "449", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            obj.getSetter("UserData").set("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCLSD_CODE", "absolute", "646", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Combo("cmbSHRWODN_CODE", "absolute", "824", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_type("dropdown");
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static16", "absolute", "718", "163", "80", "21", null, null, this);
            obj.set_text("직급");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "498", "290", "88", "21", null, null, this);
            obj.set_text("급여계좌번호");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "284", "368", "104", "21", null, null, this);
            obj.set_text("단일세율적용");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "718", "342", "96", "21", null, null, this);
            obj.set_text("거주자구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "284", "137", "72", "21", null, null, this);
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "352", "137", "118", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_taborder("26");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("styFormItemText");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "498", "137", "80", "21", null, null, this);
            obj.set_text("성명");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "579", "137", "110", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_taborder("27");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("styFormItemText");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medRERN_NUMB", "absolute", "804", "137", "118", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_mask("######-#######");
            obj.set_taborder("28");
            obj.set_type("string");
            obj.set_cssclass("styFormItemText");
            obj.style.set_selectbackground("#a3daffff");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "718", "137", "80", "21", null, null, this);
            obj.set_text("주민번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_NAME", "absolute", "804", "163", "118", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_taborder("29");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "284", "163", "72", "21", null, null, this);
            obj.set_text("소속");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSECT_NAME", "absolute", "352", "163", "118", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_taborder("30");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("styFormItemText");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkTARA_YSNO", "absolute", "378", "368", "21", "21", null, null, this);
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_falsevalue("0");
            obj.set_taborder("19");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.set_cssclass("styFormItemChk");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "942", "342", "88", "21", null, null, this);
            obj.set_text("거주지국");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDOMC_CODE", "absolute", "1036", "342", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_type("search");
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemCombo");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_index("-1");

            obj = new Static("Static14", "absolute", "284", "290", "104", "21", null, null, this);
            obj.set_text("급여계좌은행");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbWABK_CODE", "absolute", "378", "290", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_type("search");
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemCombo");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_index("-1");

            obj = new Edit("edtWAGE_ACNO", "absolute", "617", "290", "305", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_lengthunit("ascii");
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("20");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle8", "absolute", "27", "71", "60", "21", null, null, this);
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "302", "71", "60", "21", null, null, this);
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "578", "71", "76", "21", null, null, this);
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Static("Image2", "absolute", "756", "71", "76", "21", null, null, this);
            obj.set_text("재직구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbNANY_CODE", "absolute", "617", "342", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_type("search");
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemCombo");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_index("-1");

            obj = new Static("Static70", "absolute", "498", "189", "80", "21", null, null, this);
            obj.set_text("근무상태");
            obj.style.set_color("#515151ff");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("60");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "498", "163", "80", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME00", "absolute", "579", "163", "110", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "284", "215", "72", "21", null, null, this);
            obj.set_text("퇴사일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCLSD_CODE", "absolute", "378", "264", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_type("dropdown");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");

            obj = new Static("Static88", "absolute", "942", "290", "88", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("급여예금주");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWAGE_DPST", "absolute", "1036", "290", "110", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "498", "342", "88", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("국적");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "498", "368", "88", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("세대주여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHSHL_YSNO", "absolute", "617", "368", "16", "21", null, null, this);
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_falsevalue("0");
            obj.set_taborder("20");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.set_cssclass("styFormItemChk");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "942", "264", "88", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("퇴직연금기관");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbREAY_JOCD", "absolute", "1036", "264", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_index("-1");

            obj = new Static("Static18", "absolute", "718", "264", "96", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("퇴직수당구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbREEP_DIVC", "absolute", "812", "264", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");

            obj = new Static("Static22", "absolute", "284", "342", "104", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_text("내외국인구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbLFDN_CODE", "absolute", "378", "342", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");

            obj = new Edit("edtWRKS_NAME", "absolute", "579", "189", "110", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "718", "368", "96", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("퇴직기산일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "498", "316", "88", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("보조계좌번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "284", "316", "104", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_text("보조계좌은행");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbIRSB_CODE", "absolute", "378", "316", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_readonly("false");

            obj = new Edit("edtIRSA_ACNO", "absolute", "617", "316", "305", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "942", "316", "88", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("보조예금주");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIRSA_DPST", "absolute", "1036", "316", "110", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "718", "215", "80", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_text("노조여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkLBJO_YSNO", "absolute", "799", "215", "16", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stPYTY_CODE", "absolute", "942", "137", "80", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_text("급여형태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPYTY_NAME", "absolute", "1028", "137", "118", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1332", "160", "88", "25", null, null, this);
            obj.set_taborder("86");
            obj.set_text("직렬");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSPOS_NAME", "absolute", "1374", "162", "110", "21", null, null, this);
            obj.set_taborder("87");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "284", "189", "72", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_text("직책");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDURS_NAME", "absolute", "352", "189", "118", "21", null, null, this);
            obj.set_taborder("89");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDUTY_NAME", "absolute", "1374", "222", "110", "21", null, null, this);
            obj.set_taborder("90");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "1332", "220", "88", "25", null, null, this);
            obj.set_taborder("91");
            obj.set_text("직무");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "718", "189", "80", "21", null, null, this);
            obj.set_taborder("92");
            obj.set_text("그룹입사일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "942", "189", "80", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("자사입사일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "498", "215", "80", "21", null, null, this);
            obj.set_taborder("94");
            obj.set_text("연차기준일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "284", "264", "104", "21", null, null, this);
            obj.set_text("직원구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "498", "264", "88", "21", null, null, this);
            obj.set_text("급여지급여부");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkPAWE_YSNO", "absolute", "617", "264", "16", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "1320", "368", "104", "25", null, null, this);
            obj.set_taborder("101");
            obj.set_text("임금피크제년도");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIRPS_DATE", "absolute", "1426", "370", "94", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "1549", "368", "88", "25", null, null, this);
            obj.set_taborder("102");
            obj.set_text("기준기본급");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCHAX_SUXX", "absolute", "1838", "370", "110", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "readonly", "right");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "1795", "368", "88", "25", null, null, this);
            obj.set_taborder("103");
            obj.set_text("차수");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medPCOP_JCDT", "absolute", "804", "189", "118", "21", null, null, this);
            obj.set_taborder("104");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_selectbackground("#a3daffff");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medENCO_DATE", "absolute", "1028", "189", "118", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_selectbackground("#a3daffff");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medANSD_DATE", "absolute", "579", "215", "110", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_selectbackground("#a3daffff");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medRETR_DATE", "absolute", "352", "215", "118", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_selectbackground("#a3daffff");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab0", "absolute", "264", "434", null, null, "25", "15", this);
            obj.set_taborder("31");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.Tab0);
            obj.set_taborder("38");
            obj.set_text("지급공제");
            obj.getSetter("position").set("absolute");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdPY_ALDEYN1", "absolute", "10", "35", "428", null, null, "10", this.Tab0.tab1);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_ALDEYN1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\" displaytype=\"text\" text=\"지급항목\"/><Cell col=\"3\" displaytype=\"text\" text=\"지급율/금액\"/><Cell col=\"4\" text=\"종료일\"/><Cell col=\"5\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:BGIN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:EXPD_NAME\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:EXPD_RAPY\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:ENDX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_100X\" editimemode=\"native\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Grid("grdPY_ALDEYN2", "absolute", "458", "35", null, null, "10", "10", this.Tab0.tab1);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_ALDEYN2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\" displaytype=\"text\" text=\"공제항목\"/><Cell col=\"3\" displaytype=\"text\" text=\"지급율/금액\"/><Cell col=\"4\" text=\"종료일\"/><Cell col=\"5\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"text\" style=\"align:left;\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:BGIN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:EXPD_NAME\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:EXPD_RAPY\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:ENDX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_100X\" editimemode=\"native\"/></Band></Format></Formats>");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Static("Image1", "absolute", "10", "10", "84", "21", null, null, this.Tab0.tab1);
            obj.set_taborder("6");
            obj.set_text("지급항목");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbSHREXPD_CODE1", "absolute", "86", "10", "160", "21", null, null, this.Tab0.tab1);
            this.Tab0.tab1.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displayrowcount("10");
            obj = new Static("Image00", "absolute", "458", "10", "84", "21", null, null, this.Tab0.tab1);
            obj.set_taborder("8");
            obj.set_text("공제항목");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbSHREXPD_CODE2", "absolute", "534", "10", "160", "21", null, null, this.Tab0.tab1);
            this.Tab0.tab1.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displayrowcount("10");
            obj = new Tabpage("tab2", this.Tab0);
            obj.set_text("기본급");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", "232", "21", null, null, this.Tab0.tab2);
            obj.set_taborder("0");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Grid("grdPY_REGSAL", "absolute", "10", "25", null, null, "10", "10", this.Tab0.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsPY_REGSAL");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"92\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"기준일\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"직위\"/><Cell col=\"3\" text=\"기본급\"/><Cell col=\"4\" text=\"시간외 근무수당\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:STDS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SRAL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:OPOS_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BSLY_AMOT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BSL1_AMOT\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.Tab0.tab2.addChild(obj.name, obj);
            obj = new Tabpage("tab3", this.Tab0);
            obj.set_text("기타소득");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "33", "240", "21", null, null, this.Tab0.tab3);
            obj.set_taborder("0");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Grid("grdPY_INCOME", "absolute", "10", "58", null, null, "10", "10", this.Tab0.tab3);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsPY_INCOME");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"95\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"지급일\"/><Cell col=\"1\" text=\"소득구분\"/><Cell col=\"2\" text=\"과세지급액\"/><Cell col=\"3\" text=\"비과세지급액\"/><Cell col=\"4\" text=\"지급계\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:INDN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:INDN_NAME\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAP1_AMOT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NTP1_AMOT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAYX_TAMT\"/></Band></Format></Formats>");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "8", "48", "216", "6", null, null, this.Tab0.tab3);
            obj.set_taborder("2");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Static("Image1", "absolute", "10", "10", "84", "21", null, null, this.Tab0.tab3);
            obj.set_taborder("3");
            obj.set_text("조회년도");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tab3.addChild(obj.name, obj);
            obj = new Calendar("calSHRSTDS_YEAR", "absolute", "106", "10", "80", "20", null, null, this.Tab0.tab3);
            this.Tab0.tab3.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj = new Tabpage("tab4", this.Tab0);
            obj.set_taborder("64");
            obj.set_text("급여조정");
            obj.getSetter("position").set("absolute");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "4", "248", "21", null, null, this.Tab0.tab4);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Grid("grdPY_PAYSET", "absolute", "10", "25", null, null, "10", "10", this.Tab0.tab4);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_PAYSET");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("multirow");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"73\"/><Column size=\"87\"/><Column size=\"100\"/><Column size=\"76\"/><Column size=\"66\"/><Column size=\"81\"/><Column size=\"185\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"지급일\"/><Cell col=\"1\" displaytype=\"text\" text=\"급여구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"지급공제코드\"/><Cell col=\"3\" displaytype=\"text\" text=\"조정액/비율\"/><Cell col=\"4\" displaytype=\"text\" text=\"조정구분\"/><Cell col=\"5\" displaytype=\"text\" text=\"조정종료월\"/><Cell col=\"6\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:WAGE_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:EXPD_NAME\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:ADJT_RAPY\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: ;\" text=\"bind:AJDI_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:FEND_YMTH\" mask=\"expr:FEND_YMTH == '' ? '' : '####-##'\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_FAMILY", this.Tab0);
            obj.set_taborder("48");
            obj.set_text("가족사항");
            obj.getSetter("position").set("absolute");
            this.Tab0.addChild(obj.name, obj);
            obj = new Button("btnAddRow", "absolute", null, "5", "62", "21", "75", null, this.Tab0.tabHR_FAMILY);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "5", "62", "21", "10", null, this.Tab0.tabHR_FAMILY);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "256", "21", null, null, this.Tab0.tabHR_FAMILY);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Grid("grdHR_FAMILY", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabHR_FAMILY);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_FAMILY");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"69\"/><Column size=\"66\"/><Column size=\"110\"/><Column size=\"66\"/><Column size=\"66\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"관계\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"주민등록번호\"/><Cell col=\"4\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"성별\"/><Cell col=\"5\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"나이 (만)\"/><Cell col=\"6\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"부양여부\"/><Cell col=\"7\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"장애코드\"/><Cell col=\"8\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"가족수당\"/></Band><Band id=\"body\"><Cell displaytype=\"none\" style=\"align:center;\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:FREL_CODE\" combodisplayrowcount=\"10\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;background: ;\" text=\"bind:FMLY_NAME\" editlimit=\"20\" editimemode=\"native\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"mask\" style=\"align:center;background: ;\" text=\"bind:FMLY_SSEC\" mask=\"######-#######\" editlimit=\"13\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:GNDR_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:FMLY_AGEX\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;background: ;\" text=\"bind:SUPT_YSNO\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center middle;background: ;\" text=\"bind:HALT_CODE\" editlimit=\"0\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:FALP_YSNO\"/></Band></Format></Formats>");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);

            obj = new MaskEdit("medBSLY_AMOT", "absolute", "1630", "370", "110", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_type("number");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_selectbackground("#a3daffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d3d3d3ff,1 solid #d3d3d3ff,1 solid #a6a6a9ff");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calRECP_DATE", "absolute", "812", "368", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            obj.set_readonly("true");

            obj = new Combo("cmbRECL_CODE", "absolute", "812", "342", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPY_MASTPM");

            obj = new Static("Static20", "absolute", "942", "163", "80", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_NAME00", "absolute", "1028", "163", "118", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "284", "394", "104", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("표준세액공제");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSTTD_YSNO", "absolute", "378", "394", "21", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "718", "394", "96", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("분할납부여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkPTPY_YSNO", "absolute", "812", "394", "24", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsPY_MASTPM");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "498", "394", "118", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_text("급여소득세적용%");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPAYX_TAXR", "absolute", "617", "394", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("115");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPY_MASTPM");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("116");
            obj.set_text("급여기본내역관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("117");
            obj.set_text("홈 > 급여관리 > 급여관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("118");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("119");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("120");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("121");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("122");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("126");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("127");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("128");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("129");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("130");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("131");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "61", "61", "8", "41", null, null, this);
            obj.set_taborder("132");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "274", "61", "40", "41", null, null, this);
            obj.set_taborder("133");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "265", "133", "30", "41", null, null, this);
            obj.set_taborder("134");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "579", "245", "80", "10", null, null, this);
            obj.set_taborder("135");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "573", "424", "80", "10", null, null, this);
            obj.set_taborder("136");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "573", "691", "80", "10", null, null, this);
            obj.set_taborder("138");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "573", "469", "80", "35", null, null, this);
            obj.set_taborder("139");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "265", "541", "10", "41", null, null, this);
            obj.set_taborder("140");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "1151", "541", "10", "41", null, null, this);
            obj.set_taborder("141");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "942", "368", "96", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_text("DC연금가입");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calREAY_DATE", "absolute", "1036", "368", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("143");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsPY_MASTPM");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 700, 328, this.Tab0.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
            		p.set_text("지급공제");
            		p.getSetter("position").set("absolute");

            	}
            );
            this.Tab0.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본급");

            	}
            );
            this.Tab0.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tab3,
            	//-- Layout function
            	function(p) {
            		p.set_text("기타소득");

            	}
            );
            this.Tab0.tab3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 700, 328, this.Tab0.tab4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("64");
            		p.set_text("급여조정");
            		p.getSetter("position").set("absolute");

            	}
            );
            this.Tab0.tab4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 700, 328, this.Tab0.tabHR_FAMILY,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("48");
            		p.set_text("가족사항");
            		p.getSetter("position").set("absolute");

            	}
            );
            this.Tab0.tabHR_FAMILY.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여기본내역관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtEMPL_NUMB","value","dsPY_MASTPM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtEMPL_NAME","value","dsPY_MASTPM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","medRERN_NUMB","value","dsPY_MASTPM","RERN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtPYTY_NAME","value","dsPY_MASTPM","PYTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtSECT_NAME","value","dsPY_MASTPM","SECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtDEPT_NAME00","value","dsPY_MASTPM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtCPOS_NAME","value","dsPY_MASTPM","CPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtSPOS_NAME","value","dsPY_MASTPM","SPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtDURS_NAME","value","dsPY_MASTPM","DURS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtDUTY_NAME","value","dsPY_MASTPM","DUTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","medPCOP_JCDT","value","dsPY_MASTPM","PCOP_JCDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","medENCO_DATE","value","dsPY_MASTPM","ENCO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","medRETR_DATE","value","dsPY_MASTPM","RETR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtWRKS_NAME","value","dsPY_MASTPM","WRKS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","medANSD_DATE","value","dsPY_MASTPM","ANSD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","chkLBJO_YSNO","value","dsPY_MASTPM","LBJO_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","chkPAWE_YSNO","value","dsPY_MASTPM","PAWE_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","cmbCLSD_CODE","value","dsPY_MASTPM","CLSD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","cmbREEP_DIVC","value","dsPY_MASTPM","REEP_DIVC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","cmbREAY_JOCD","value","dsPY_MASTPM","REAY_JOCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","cmbWABK_CODE","value","dsPY_MASTPM","WABK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtWAGE_ACNO","value","dsPY_MASTPM","WAGE_ACNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edtWAGE_DPST","value","dsPY_MASTPM","WAGE_DPST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","cmbIRSB_CODE","value","dsPY_MASTPM","IRSB_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edtIRSA_ACNO","value","dsPY_MASTPM","IRSA_ACNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edtIRSA_DPST","value","dsPY_MASTPM","IRSA_DPST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","cmbLFDN_CODE","value","dsPY_MASTPM","LFDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","cmbNANY_CODE","value","dsPY_MASTPM","NANY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","cmbDOMC_CODE","value","dsPY_MASTPM","DOMC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","chkTARA_YSNO","value","dsPY_MASTPM","TARA_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","chkHSHL_YSNO","value","dsPY_MASTPM","HSHL_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","calRECP_DATE","value","dsPY_MASTPM","RECP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edtIRPS_DATE","value","dsPY_MASTPM","IRPS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","edtCHAX_SUXX","value","dsPY_MASTPM","CHAX_SUXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","medBSLY_AMOT","value","dsPY_MASTPM","BSLY_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28123","cmbRECL_CODE","value","dsPY_MASTPM","RECL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edtCPOS_NAME00","value","dsPY_MASTPM","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","chkSTTD_YSNO","value","dsPY_MASTPM","STTD_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","chkPTPY_YSNO","value","dsPY_MASTPM","PTPY_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","cmbPAYX_TAXR","value","dsPY_MASTPM","PAYX_TAXR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","calREAY_DATE","value","dsPY_MASTPM","REAY_DATE");
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
        this.addIncludeScript("PAYB0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0010 급여기본사항관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.22		박철영		Initial Created.
         *   2016.09.05		안윤준		수정.
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
        this.sBUTTONLIST  	= "TTFFTTTF";
        this.sPACKAGENAME 	= "PAYB0010";
        this.sKeyValue 		= new Array();

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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

        //TAB INDEX 매핑
        this.FAMY_INDEX = 5; //가족사항

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	if ( this.sUSERLAVEL == "5" ) {
        		this.sBUTTONLIST  = "TTFFFFTF";
        	}
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);

        	this.cmbSHRWODN_CODE.set_index(1);
        	this.edtSHREMPL_NAME.setFocus();
        	
        	if ( this.sUSERLAVEL == "5" ) {
        		this.edtSHRDEPT_CODE.set_enable(false);
        		this.edtSHRDEPT_NAME.set_enable(false);
        		
        		this.edtSHREMPL_NUMB.set_enable(false);
                this.edtSHREMPL_NAME.set_enable(false);
                this.cmbSHRCLSD_CODE.set_enable(false);
                this.cmbSHRWODN_CODE.set_enable(false);
        		
        		this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
                this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
                
        		this.fnc_FormatResidentNumber(this.medRERN_NUMB);
        		this.fnc_FormatResidentNumber(this.Tab0.tabHR_FAMILY.grdHR_FAMILY, "FMLY_SSEC");
        		this.fnc_SetReadonly(this.Tab0.tabHR_FAMILY.grdHR_FAMILY, true);
        		this.cmbCLSD_CODE.set_enable(false);
        		this.cmbWABK_CODE.set_enable(false);
        		this.cmbIRSB_CODE.set_enable(false);
        		this.cmbLFDN_CODE.set_enable(false);
        		this.chkTARA_YSNO.set_enable(false);
        		this.chkSTTD_YSNO.set_enable(false);
        		this.chkPAWE_YSNO.set_enable(false);
        		this.edtWAGE_ACNO.set_enable(false);
        		this.edtIRSA_ACNO.set_enable(false);
        		this.cmbNANY_CODE.set_enable(false);
        		this.chkHSHL_YSNO.set_enable(false);
        		this.cmbPAYX_TAXR.set_enable(false);
        		this.cmbREEP_DIVC.set_enable(false);
        		this.cmbRECL_CODE.set_enable(false);
        		this.calRECP_DATE.set_enable(false);
        		this.chkPTPY_YSNO.set_enable(false);
        		this.cmbREAY_JOCD.set_enable(false);
        		this.edtWAGE_DPST.set_enable(false);
        		this.edtIRSA_DPST.set_enable(false);
        		this.cmbDOMC_CODE.set_enable(false);
        		this.calREAY_DATE.set_enable(false);
        		this.Tab0.tabHR_FAMILY.btnAddRow.set_visible(false);
        		this.Tab0.tabHR_FAMILY.btnDelRow.set_visible(false);
        		
        		this.fn_Search();
        		
        	}
        	
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
        	this.fnc_DatasetClear("dsPY_MASTPM,dsPY_ALDEYN1,dsPY_ALDEYN2,dsPY_REGSAL,dsPY_INCOME,dsPY_PAYSET,dsHR_FAMILY");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_MASTPM=dsPY_MASTPM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj){
        	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_MASTPM,dsHR_FAMILY");
        	this.grdPY_MASTPM.setFocus();

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsPY_MASTPM.getColumn(this.dsPY_MASTPM.rowposition,"EMPL_NUMB");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsPY_MASTPM=dsPY_MASTPM:U dsHR_FAMILY=dsHR_FAMILY:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
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
        	
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PAYCOD", this);
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
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	if (this.fnc_DatasetChangeCheck("dsPY_MASTPM,dsHR_FAMILY")) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;
        	
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {

        	if (obj.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = "성명:" + this.fnc_Trim(this.dsHR_FAMILY.getColumn(this.dsHR_FAMILY.rowposition, "FMLY_NAME"));
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_MASTPM,dsHR_FAMILY")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsPY_MASTPM.getRowCount(); i++) { // 마스터

        		if (this.fnc_ToUpper(this.dsPY_MASTPM.getRowType(i)) == Dataset.ROWTYPE_NORMAL)	continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_MASTPM.getColumn(i, "CLSD_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직원구분", this.dsPY_MASTPM, i, this.cmbCLSD_CODE, "CLSD_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_MASTPM.getColumn(i, "REEP_DIVC"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "퇴직수당구분", this.dsPY_MASTPM, i, this.cmbREEP_DIVC, "REEP_DIVC");
        		}
        		
        		if (this.fnc_Trim(this.dsPY_MASTPM.getColumn(i, "REEP_DIVC")) == "2"
        		||  this.fnc_Trim(this.dsPY_MASTPM.getColumn(i, "REEP_DIVC")) == "3" ) { // 연금DB일때
        			if (this.fnc_Length(this.fnc_Trim(this.dsPY_MASTPM.getColumn(i, "REAY_JOCD"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "퇴직연금기관", this.dsPY_MASTPM, i, this.cmbREAY_JOCD, "REAY_JOCD");
        			}
        			if (this.fnc_Trim(this.dsPY_MASTPM.getColumn(i, "REEP_DIVC")) == "3" ) { // 연금DC 일때
        				if (this.fnc_Length(this.fnc_Trim(this.dsPY_MASTPM.getColumn(i, "REAY_DATE"))) < 1) {
        					return this.fnc_CheckPostAction("TMM072", "DC연금가입", this.dsPY_MASTPM, i, this.calREAY_DATE, "REAY_DATE");
        				}
        			}
        			
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_MASTPM.getColumn(i, "WABK_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "급여계좌은행", this.dsPY_MASTPM, i, this.cmbWABK_CODE, "WABK_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_MASTPM.getColumn(i, "WAGE_ACNO"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "급여계좌번호", this.dsPY_MASTPM, i, this.edtWAGE_ACNO, "WAGE_ACNO");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_MASTPM.getColumn(i, "WAGE_DPST"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "급여예금주", this.dsPY_MASTPM, i, this.edtWAGE_DPST, "WAGE_DPST");
        		}
        		
        	}
        	
        	for (var i = 0; i < this.dsHR_FAMILY.getRowCount(); i++) { // 가족사항

        		if (this.fnc_ToUpper(this.dsHR_FAMILY.getRowType(i)) == Dataset.ROWTYPE_NORMAL)	continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_FAMILY.getColumn(i, "FREL_CODE"))) < 1) {
        			this.Tab0.set_tabindex(this.FAMY_INDEX);
        			return this.fnc_CheckPostAction("TMM072", "관계", this.dsHR_FAMILY, i, this.Tab0.tabHR_FAMILY.grdHR_FAMILY, "FREL_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_FAMILY.getColumn(i, "FMLY_NAME"))) < 1) {
        			this.Tab0.set_tabindex(this.FAMY_INDEX);
        			return this.fnc_CheckPostAction("TMM072", "성명", this.dsHR_FAMILY, i, this.Tab0.tabHR_FAMILY.grdHR_FAMILY, "FMLY_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_FAMILY.getColumn(i, "FMLY_SSEC"))) < 13 ){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_FAMILY.getColumn(i, "FMLY_SSEC"))) != 7 ){
        				this.Tab0.set_tabindex(this.FAMY_INDEX);
        				return this.fnc_CheckPostAction("TMM072", "가족주민번호", this.dsHR_FAMILY, i, this.Tab0.tabHR_FAMILY.grdHR_FAMILY, "FMLY_SSEC");
        			}
        		}
                
        		// TODO 주민번호
        		if (this.fnc_ToUpper(this.dsHR_FAMILY.getRowType(i)) != Dataset.ROWTYPE_NORMAL) {
        			if ( this.fnc_Length(this.fnc_Trim(this.dsHR_FAMILY.getColumn(i, "FMLY_SSEC"))) == 13 ){
        				var sJUNO_RGST2 = this.fnc_Replace(this.dsHR_FAMILY.getColumn(i, "FMLY_SSEC"), "-");
        				// 올바른 주민번호 체크
        				if (!this.fnc_ResidenceNumberCheck(sJUNO_RGST2)) {
        					this.Tab0.set_tabindex(this.FAMY_INDEX);
        					return this.fnc_CheckPostAction("TMM009", "", this.dsHR_FAMILY, i, this.Tab0.tabHR_FAMILY.grdHR_FAMILY, "FMLY_SSEC");
        				}
        			}
        		}
        		
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind,sObj,sContentsType) {

        	var sReturnString;

        	if (sKind == "SEARCH00")  {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서코드
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //사번
        		sReturnString += " WODN_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRWODN_CODE.value)); //재직구분
        		sReturnString += " CLSD_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCLSD_CODE.value)); //직원구분

        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.dsPY_MASTPM.getColumn(this.dsPY_MASTPM.rowposition, "EMPL_NUMB"));

        	} else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.dsPY_MASTPM.getColumn(this.dsPY_MASTPM.rowposition, "EMPL_NUMB"));
        		sReturnString += " EXPD_CODE=" 	+ this.fnc_Quote(sObj.value);
        		sReturnString += " QUERY_TYPE=" + this.fnc_Quote(sContentsType);
        	
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
        		this.fnc_Information(this.stInformation, this.dsPY_MASTPM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_MASTPM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		if ( this.sKeyValue[0] != "" ) {
        			var irow = this.dsPY_MASTPM.findRow("EMPL_NUMB", this.sKeyValue[0]);
        			this.sKeyValue[0] = "";
        			if(irow<0) irow=0;
        			this.dsPY_MASTPM.set_rowposition(irow);
        		}

        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.Tab0.tab2.stInformation, this.dsPY_REGSAL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.Tab0.tab3.stInformation, this.dsPY_INCOME.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.Tab0.tab4.stInformation, this.dsPY_PAYSET.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.Tab0.tabHR_FAMILY.stInformation, this.dsHR_FAMILY.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_MASTPM);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        		var arrInt 	 = 0;
        			arrParam[arrInt++] = "COMBO,cmbSHRCLSD_CODE,dsSHRCLSD_CODE,0"; 		// 직원구분
        			arrParam[arrInt++] = "COMBO,cmbSHRWODN_CODE,dsSHRWODN_CODE,0"; 		// 재직구분(조회조건)
        			arrParam[arrInt++] = "COMBO,cmbLFDN_CODE,dsLFDN_CODE,0"; 			// 내외국인
        			arrParam[arrInt++] = "COMBO,cmbNANY_CODE,dsNANY_CODE,0"; 			// 국적
        			arrParam[arrInt++] = "COMBO,cmbRECL_CODE,dsRECL_CODE,0"; 			// 거주자구분
        			arrParam[arrInt++] = "COMBO,cmbDOMC_CODE,dsDOMC_CODE,0"; 			// 거주국가
        			arrParam[arrInt++] = "COMBO,cmbREEP_DIVC,dsREEP_DIVC,0"; 			// 퇴직수당구분
        			arrParam[arrInt++] = "COMBO,cmbCLSD_CODE,dsCLSD_CODE,0"; 			// 직원구분
        			arrParam[arrInt++] = "COMBO,cmbWABK_CODE,dsBANK_CODE,0"; 			// 은행코드
        			arrParam[arrInt++] = "COMBO,cmbIRSB_CODE,dsBANK_CODE,0"; 			// 은행코드
        			arrParam[arrInt++] = "COMBO,cmbPAYX_TAXR,dsPAYX_TAXR,0"; 			// 급여소득세적용
        			arrParam[arrInt++] = "GRID,grdPY_MASTPM,dsCLSD_CODE,CLSD_CODE"; 	// 직원구분
        			arrParam[arrInt++] = "GRID,Tab0.tabHR_FAMILY.grdHR_FAMILY,dsFREL_CODE,FREL_CODE"; // 가족관계
        			arrParam[arrInt++] = "GRID,Tab0.tabHR_FAMILY.grdHR_FAMILY,dsGNDR_CODE,GNDR_CODE"; // 성별
        			arrParam[arrInt++] = "GRID,Tab0.tabHR_FAMILY.grdHR_FAMILY,dsHALT_CODE,HALT_CODE"; // 장애코드
        			
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbREAY_JOCD,dsREAY_JOCD,0";
        			arrParam[1] = "COMBO,Tab0.tab1.cmbSHREXPD_CODE1,dsXPD_CODE1,0";
        			arrParam[2] = "COMBO,Tab0.tab1.cmbSHREXPD_CODE2,dsXPD_CODE2,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}
        }

        /*-------------------------------------+
         |  수정 시 Key Field Disibled 처리    |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	
        	this.fnc_SetReadonly(this.cmbCLSD_CODE, true);
        	this.fnc_SetReadonly(this.chkPAWE_YSNO, true);
        	this.fnc_SetReadonly(this.cmbREEP_DIVC, true);
        	this.fnc_SetReadonly(this.cmbREAY_JOCD, true);
        	this.fnc_SetReadonly(this.cmbWABK_CODE, true);
        	this.fnc_SetReadonly(this.edtWAGE_ACNO, true);
        	this.fnc_SetReadonly(this.edtWAGE_DPST, true);
        	this.fnc_SetReadonly(this.cmbIRSB_CODE, true);
        	this.fnc_SetReadonly(this.edtIRSA_ACNO, true);
        	this.fnc_SetReadonly(this.edtIRSA_DPST, true);
        	this.fnc_SetReadonly(this.cmbLFDN_CODE, true);
        	this.fnc_SetReadonly(this.cmbNANY_CODE, true);
        	this.fnc_SetReadonly(this.cmbRECL_CODE, true);
        	this.fnc_SetReadonly(this.cmbDOMC_CODE, true);
        	this.fnc_SetReadonly(this.chkTARA_YSNO, true);
        	this.fnc_SetReadonly(this.chkHSHL_YSNO, true);
        	this.fnc_SetReadonly(this.calRECP_DATE, true);
        	this.fnc_SetReadonly(this.calREAY_DATE, true);
        	
        	this.Tab0.tab1.cmbSHREXPD_CODE1.set_index(0);
        	this.dsPY_ALDEYN1.filter("");
        	this.Tab0.tab1.cmbSHREXPD_CODE2.set_index(0);
        	this.dsPY_ALDEYN2.filter("");
        	
        	var iNowDate = this.fnc_GetServerDateTime("DATE");
        	this.Tab0.tab3.calSHRSTDS_YEAR.set_value(this.fnc_SubStr(iNowDate, 0, 4));
        	this.dsPY_INCOME.filter("");

        	if (this.dsPY_MASTPM.getRowCount() < 1) return;

        	this.fnc_SetReadonly(this.cmbCLSD_CODE, false);
        	this.fnc_SetReadonly(this.chkPAWE_YSNO, false);
        	this.fnc_SetReadonly(this.cmbREEP_DIVC, false);
        	this.fnc_SetReadonly(this.cmbREAY_JOCD, false);
        	this.fnc_SetReadonly(this.cmbWABK_CODE, false);
        	this.fnc_SetReadonly(this.edtWAGE_ACNO, false);
        	this.fnc_SetReadonly(this.edtWAGE_DPST, false);
        	this.fnc_SetReadonly(this.cmbIRSB_CODE, false);
        	this.fnc_SetReadonly(this.edtIRSA_ACNO, false);
        	this.fnc_SetReadonly(this.edtIRSA_DPST, false);
        	this.fnc_SetReadonly(this.cmbLFDN_CODE, false);
        	this.fnc_SetReadonly(this.cmbNANY_CODE, false);
        	this.fnc_SetReadonly(this.cmbRECL_CODE, false);
        	this.fnc_SetReadonly(this.cmbDOMC_CODE, false);
        	this.fnc_SetReadonly(this.chkTARA_YSNO, false);
        	this.fnc_SetReadonly(this.chkHSHL_YSNO, false);
        	this.fnc_SetReadonly(this.calRECP_DATE, false);
        	this.fnc_SetReadonly(this.calREAY_DATE, false);
        	
        	this.Chk_cmbREEP_DIVC_value(this.dsPY_MASTPM.getColumn(this.dsPY_MASTPM.rowposition, "REEP_DIVC"));
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_ALDEYN1=dsPY_ALDEYN1 dsPY_ALDEYN2=dsPY_ALDEYN2 dsPY_REGSAL=dsPY_REGSAL dsPY_PAYSET=dsPY_PAYSET dsPY_INCOME=dsPY_INCOME dsHR_FAMILY=dsHR_FAMILY";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------------+
         |  팝업 Setting          |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서조회
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";

        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        /*-------------+
         |  가족추가   |
         +-------------*/
        this.btnInput_OnClick = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.dsPY_MASTPM.getColumn(this.dsPY_MASTPM.rowposition, "EMPL_NUMB"))) < 1) {
        		this.fnc_Message("TMM013");
        		return false;
        	}

        	var iRow = this.dsHR_FAMILY.insertRow(this.dsHR_FAMILY.rowposition+1);
        	this.dsHR_FAMILY.setColumn(iRow, "EMPL_NUMB", this.dsPY_MASTPM.getColumn(this.dsPY_MASTPM.rowposition, "EMPL_NUMB"));
        	this.Tab0.tabHR_FAMILY.grdHR_FAMILY.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_FAMILY.grdHR_FAMILY, "FREL_CODE"));
        	
        }

        /*-------------+
         |  가족삭제   |
         +-------------*/
        this.btnDelete_OnClick = function (obj,e) {
        	if (this.fn_DeleteCheck(this.dsHR_FAMILY)) this.dsHR_FAMILY.deleteRow(this.dsHR_FAMILY.rowposition);
        	this.Tab0.tabHR_FAMILY.grdHR_FAMILY.setFocus();
        	
        }

        this.dsHR_FAMILY_oncolumnchanged = function(obj,e) {
        	
        	var sBirthDay 	= "";
        	var sAge		= "";
        	
        	if ( e.columnid == "FMLY_SSEC" ) {
        		
        		if( this.fnc_Length(this.fnc_Trim(e.newvalue)) > 6  ) {
        		
        			if ( this.fnc_SubStr(e.newvalue, 6, 1) == "1" || this.fnc_SubStr(e.newvalue, 6, 1) == "2"
        			|| 	 this.fnc_SubStr(e.newvalue, 6, 1) == "5" || this.fnc_SubStr(e.newvalue, 6, 1) == "6" ) {
        				sBirthDay 	= "19"+this.fnc_SubStr(e.newvalue, 0, 6);
        				sAge  		= this.fnc_GetAge(sBirthDay, 0) + " (" +this.fnc_GetAge(sBirthDay, 1) +")";
        				this.dsHR_FAMILY.setColumn(e.row, "FMLY_AGEX", sAge);
        				
        			} else {
        				sBirthDay 	= "20"+this.fnc_SubStr(e.newvalue, 0, 6);
        				sAge  		= this.fnc_GetAge(sBirthDay, 0) + " (" +this.fnc_GetAge(sBirthDay, 1) +")";
        				this.dsHR_FAMILY.setColumn(e.row, "FMLY_AGEX", sAge);
        				
        			}
        		} 
        		
        		if ( this.fnc_SubStr(e.newvalue, 6, 1) == "1" || this.fnc_SubStr(e.newvalue, 6, 1) == "3" ) {
        			this.dsHR_FAMILY.setColumn(e.row, "GNDR_CODE", "M");
        			
        			
        		} else if ( this.fnc_SubStr(e.newvalue, 6, 1) == "2" || this.fnc_SubStr(e.newvalue, 6, 1) == "4" ) {
        			this.dsHR_FAMILY.setColumn(e.row, "GNDR_CODE", "F");
        			
        		}
        		
        	}
        	
        }

        this.Tab0_tab3_calSHRSTDS_YEAR_onspin = function(obj,e) {
        	var sINDN_DATE = this.fnc_SubStr(e.postvalue, 0, 4);
         	this.dsPY_INCOME.filter("INDN_SUBD == " + sINDN_DATE); 
         	this.fnc_Information(this.Tab0.tab3.stInformation, this.dsPY_INCOME.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        }

        this.Tab0_tab1_cmbSHREXPD_CODE1_onitemchanged = function(obj,e) {
        	if ( this.fnc_Length(e.postvalue) == 0 ){
        		this.dsPY_ALDEYN1.filter("");
        	} else {
        		this.dsPY_ALDEYN1.filter("EXPD_CODE=='" + e.postvalue +"'");
        	}
        }

        this.Tab0_tab1_cmbSHREXPD_CODE2_onitemchanged = function(obj,e) {
         	if ( this.fnc_Length(e.postvalue) == 0 ){
        		this.dsPY_ALDEYN2.filter("");
        	} else {
        		this.dsPY_ALDEYN2.filter("EXPD_CODE=='" + e.postvalue +"'");
        	}
         	
        }

        this.cmbREEP_DIVC_onitemchanged = function(obj,e){
        	this.Chk_cmbREEP_DIVC_value(e.postvalue);
        }

        this.Tab0_onchanged = function(obj,e) {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        }

        this.Chk_cmbREEP_DIVC_value = function(postValue){
        	if ( postValue == "2" ) { //DB형
        		this.Static01.set_cssclass("styFormItemCapBE");
        		this.Static45.set_cssclass("styFormItemCap");
        		
        	} else if ( postValue == "3" ) { //DC형
        		this.Static01.set_cssclass("styFormItemCapBE");
        		this.Static45.set_cssclass("styFormItemCapBE");
        		
        	} else {
        		this.Static01.set_cssclass("styFormItemCap");
        		this.Static45.set_cssclass("styFormItemCap");
        		
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_MASTPM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsHR_FAMILY.addEventHandler("oncolumnchanged", this.dsHR_FAMILY_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRCLSD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRWODN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbREEP_DIVC.addEventHandler("onitemchanged", this.cmbREEP_DIVC_onitemchanged, this);
            this.Static34.addEventHandler("onclick", this.Static34_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.addEventHandler("onchanged", this.Tab0_onchanged, this);
            this.Tab0.tab1.grdPY_ALDEYN1.addEventHandler("onexpandup", this.fn_OpenGridPopup, this);
            this.Tab0.tab1.grdPY_ALDEYN2.addEventHandler("onexpandup", this.fn_OpenGridPopup, this);
            this.Tab0.tab1.cmbSHREXPD_CODE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.cmbSHREXPD_CODE1.addEventHandler("onitemchanged", this.Tab0_tab1_cmbSHREXPD_CODE1_onitemchanged, this);
            this.Tab0.tab1.cmbSHREXPD_CODE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab1.cmbSHREXPD_CODE2.addEventHandler("onitemchanged", this.Tab0_tab1_cmbSHREXPD_CODE2_onitemchanged, this);
            this.Tab0.tab2.grdPY_REGSAL.addEventHandler("onexpandup", this.fn_OpenGridPopup, this);
            this.Tab0.tab3.grdPY_INCOME.addEventHandler("onexpandup", this.fn_OpenGridPopup, this);
            this.Tab0.tab3.calSHRSTDS_YEAR.addEventHandler("onchanged", this.Tab0_tab3_calSHRSTDS_YEAR_onspin, this);
            this.Tab0.tab3.calSHRSTDS_YEAR.addEventHandler("onspin", this.Tab0_tab3_calSHRSTDS_YEAR_onspin, this);
            this.Tab0.tabHR_FAMILY.btnAddRow.addEventHandler("onclick", this.btnInput_OnClick, this);
            this.Tab0.tabHR_FAMILY.btnDelRow.addEventHandler("onclick", this.btnDelete_OnClick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
