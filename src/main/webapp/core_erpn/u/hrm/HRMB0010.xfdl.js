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
                this.set_name("HRMB0010");
                this.set_titletext("인사정보");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }
            this.style.set_background("#ffffffff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsWODN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSHRWRDV_CODE</Col><Col id=\"CODEID\">WRDV_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">WRDV_CODE</Col><Col id=\"DSNAME\">dsWRDV_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">REDI_CODE</Col><Col id=\"DSNAME\">dsREDI_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">DEDY_CODE</Col><Col id=\"DSNAME\">dsDEDY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">DEGC_CODE</Col><Col id=\"DSNAME\">dsDEGC_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">REDN_CODE</Col><Col id=\"DSNAME\">dsREDN_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">MLGN_CODE</Col><Col id=\"DSNAME\">dsMLGN_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">CLSS_CODE</Col><Col id=\"DSNAME\">dsCLSS_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">LVTY_CODE</Col><Col id=\"DSNAME\">dsLVTY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">KMIL_CODE</Col><Col id=\"DSNAME\">dsKMIL_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">BOTM_CODE</Col><Col id=\"DSNAME\">dsBOTM_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">DICL_CODE</Col><Col id=\"DSNAME\">dsIDICL_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">BLTP_CODE</Col><Col id=\"DSNAME\">dsBLTP_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">SLCA_CODE</Col><Col id=\"DSNAME\">dsSLCA_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">RLGN_CODE</Col><Col id=\"DSNAME\">dsRLGN_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">HUSF_CODE</Col><Col id=\"DSNAME\">dsHUSF_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">HUSO_CODE</Col><Col id=\"DSNAME\">dsHUSO_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">HALT_CODE</Col><Col id=\"DSNAME\">dsHALT_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">SVIM_YSNO</Col><Col id=\"DSNAME\">dsSVIM_YSNO</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">TOPX_CODE</Col><Col id=\"DSNAME\">dsTOPX_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">BOTS_CODE</Col><Col id=\"DSNAME\">dsBOTS_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">MARG_CODE</Col><Col id=\"DSNAME\">dsMARG_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">SCDN_CODE</Col><Col id=\"DSNAME\">dsSCDN_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">MJRA_CODE</Col><Col id=\"DSNAME\">dsMJRA_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">KFLG_CODE</Col><Col id=\"DSNAME\">dsKFLG_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">FREL_CODE</Col><Col id=\"DSNAME\">dsFREL_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"CODEID\">SCCR_CODE</Col><Col id=\"DSNAME\">dsSCCR_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsCARR_GUBN</Col><Col id=\"CODEID\">CARR_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsRWDN_GUBN</Col><Col id=\"CODEID\">RWDN_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsDICL_CODE</Col><Col id=\"CODEID\">DICL_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsDGDN_CODE</Col><Col id=\"CODEID\">DGDN_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsFITY_CODE</Col><Col id=\"CODEID\">FITY_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"DSNAME\">dsMEPY_CODE</Col><Col id=\"CODEID\">MEPY_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFL_ATTACH", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WODN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CCEM_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ENEE_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"32\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_BIRT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"REAL_BIRT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLCA_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"REDI_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"WRDV_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"WRDV_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"PCOP_JCDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ANSD_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RETR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"WODN_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTY_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SPOS_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"JOAG_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"CLPT_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_DTCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EXTR_PLDH\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"LBJO_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SEAS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEAT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PRON_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PARE_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"NETP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_PATH\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PBNR_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PBNR_ENDD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_IDXX\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXD", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"200\" type=\"STRING\"/><Column id=\"DTL2_ADDR\" size=\"200\" type=\"STRING\"/><Column id=\"RERN_PONB\" size=\"6\" type=\"STRING\"/><Column id=\"RGD1_ADDR\" size=\"200\" type=\"STRING\"/><Column id=\"RGD2_ADDR\" size=\"200\" type=\"STRING\"/><Column id=\"LEGL_PONB\" size=\"6\" type=\"STRING\"/><Column id=\"LED1_ADDR\" size=\"200\" type=\"STRING\"/><Column id=\"LED2_ADDR\" size=\"200\" type=\"STRING\"/><Column id=\"COMP_TENR\" size=\"20\" type=\"STRING\"/><Column id=\"HNPN_TENR\" size=\"20\" type=\"STRING\"/><Column id=\"OHOM_TENR\" size=\"20\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"50\" type=\"STRING\"/><Column id=\"EMPL_HEGT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"BODY_WEGT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"LEFT_SGHT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"RIGH_SGHT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"BLTP_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BLTP_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"TOPX_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BOTM_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SHOE_SIZE\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"REAL_BIRT\" size=\"8\" type=\"STRING\"/><Column id=\"SLCA_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"MARG_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"WEAN_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RLGN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"RLGN_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"EMPL_HOBY\" size=\"100\" type=\"STRING\"/><Column id=\"EMPL_SPEC\" size=\"100\" type=\"STRING\"/><Column id=\"HOFM_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"HOFM_RELA\" size=\"30\" type=\"STRING\"/><Column id=\"HALT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DEDY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DEGC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"HAAD_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"HALT_PROW\" size=\"50\" type=\"STRING\"/><Column id=\"SVIM_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"REDN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"RCMP_NUMB\" size=\"15\" type=\"STRING\"/><Column id=\"RCMP_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"MAMR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"MNOM_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"HDPP_NAME\" size=\"20\" type=\"STRING\"/><Column id=\"MLGN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"MLGN_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"SOLR_NUMB\" size=\"15\" type=\"STRING\"/><Column id=\"KMIL_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"KMIL_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"BOTS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BOTS_NAME\" size=\"10\" type=\"STRING\"/><Column id=\"DICL_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"LVTY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"LVTY_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"DICL_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"CLSS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"ENLS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"LVAM_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"HPJ1_CNTT\" size=\"100\" type=\"STRING\"/><Column id=\"HPJ2_CNTT\" size=\"100\" type=\"STRING\"/><Column id=\"HOP1_ARNM\" size=\"100\" type=\"STRING\"/><Column id=\"HOP2_ARNM\" size=\"100\" type=\"STRING\"/><Column id=\"RCPS_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"RCPS_TLNM\" size=\"50\" type=\"STRING\"/><Column id=\"RCPS_RELA\" size=\"20\" type=\"STRING\"/><Column id=\"RCPC_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"CIRP_EMNR\" size=\"30\" type=\"STRING\"/><Column id=\"CIRP_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"HUSF_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"HUSO_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCEM_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENEE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_BIRT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_AGEX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REDI_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REDI_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRDV_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PCOP_JCDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PCOP_TERM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ANSD_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ANSD_TERM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENCO_TERM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RETR_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WODN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOAG_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXTR_PLDH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LBJO_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_TERM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_TERM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEAS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEAS_TERM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEAT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEAT_TERM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PRON_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PRON_TERM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARE_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NETP_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HSHL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEAR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WOPA_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CBLN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOAG_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BOTM_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEAL_STAT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INCN_PROW\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCMP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAMR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MNOM_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HALT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SVIM_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEGC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HAAD_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MARG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WEAN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RLGN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_HOBY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_SPEC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSSP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_500X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECP_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECP_TERM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SCDN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HOFM_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HOFM_RELA\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOE_SIZE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PBNR_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PBNR_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"OVSV_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"TEMT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"END2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ENPT_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_SCHCRR", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"SCDN_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"SCDN_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"ENIS_DATE\" size=\"6\" type=\"STRING\"/><Column id=\"GRDT_DATE\" size=\"6\" type=\"STRING\"/><Column id=\"SCHL_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"SCHL_CDNM\" size=\"255\" type=\"STRING\"/><Column id=\"MJRA_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"MAJR_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"MAJR_CDNM\" size=\"255\" type=\"STRING\"/><Column id=\"SHGD_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"DNGB_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"SCGN_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"SCHL_SEAT\" size=\"200\" type=\"STRING\"/><Column id=\"GRDN_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"DGDN_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"DGDN_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"HISL_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"ENSC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"SCHL_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"MAJR_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"DBMJ_NAME\" size=\"50\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_BFCARR", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"WORK_ORGT\" size=\"50\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RETR_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"BGIN_YMTH\" size=\"10\" type=\"STRING\"/><Column id=\"ENDX_YMTH\" size=\"10\" type=\"STRING\"/><Column id=\"WOPA_CNTT\" size=\"1000\" type=\"STRING\"/><Column id=\"CARR_GUBN\" size=\"10\" type=\"STRING\"/><Column id=\"LAST_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_FAMILY", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FMLY_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"FMLY_SSEC\" size=\"32\" type=\"STRING\"/><Column id=\"FREL_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FREL_CDNM\" size=\"255\" type=\"STRING\"/><Column id=\"SCCR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FMLY_JOBX\" size=\"50\" type=\"STRING\"/><Column id=\"FMLY_BIRT\" size=\"8\" type=\"STRING\"/><Column id=\"FMLY_AGEX\" size=\"255\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"WORK_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"LVTG_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"FALP_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SUPT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"HALT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FRDE_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BGIN_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"ENDX_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"HLIN_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_FRLANG", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"OACT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"OACT_CDNM\" size=\"255\" type=\"STRING\"/><Column id=\"KFLG_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DFLG_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DFLG_CONM\" size=\"255\" type=\"STRING\"/><Column id=\"LADN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FOLG_SCOR\" size=\"20\" type=\"STRING\"/><Column id=\"PFSC_SCOR\" size=\"20\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/><Column id=\"MAXX_SCOR\" size=\"255\" type=\"STRING\"/><Column id=\"SCOR_METE\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_LICEXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"LICE_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"LICE_CDNM\" size=\"256\" type=\"STRING\"/><Column id=\"CTCS_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"CTCS_CONM\" size=\"6\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"ISSU_INNM\" size=\"50\" type=\"STRING\"/><Column id=\"QFCA_LICN\" size=\"30\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_GRTINS", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BGIN_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"GYIE_COMP\" size=\"30\" type=\"STRING\"/><Column id=\"GYIE_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"INSU_FEEX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"WAGE_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"WADN_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_REWARD", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"DCSN_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RWDN_GUBN\" size=\"50\" type=\"STRING\"/><Column id=\"REWD_PROW\" size=\"100\" type=\"STRING\"/><Column id=\"REWD_INNM\" size=\"50\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_DISCIP", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"DCSN_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DISP_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DIAA_MTTR\" size=\"50\" type=\"STRING\"/><Column id=\"DIAA_PROW\" size=\"100\" type=\"STRING\"/><Column id=\"DIME_HIST\" size=\"200\" type=\"STRING\"/><Column id=\"DIAA_INNM\" size=\"50\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOXD", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"APNT_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"APNT_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"APNT_HOCT\" size=\"10\" type=\"STRING\"/><Column id=\"APDN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"PSTP_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"10\" type=\"STRING\"/><Column id=\"WRKS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DSPT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DSPT_DTCD\" size=\"10\" type=\"STRING\"/><Column id=\"EXTR_PLDH\" size=\"50\" type=\"STRING\"/><Column id=\"LEAV_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PBNR_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"ADJN_DTCD\" size=\"10\" type=\"STRING\"/><Column id=\"ADDT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"RTTY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CIBP_ANNU\" size=\"2\" type=\"BIGDECIMAL\"/><Column id=\"APNT_INNM\" size=\"100\" type=\"STRING\"/><Column id=\"APNT_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"SEAS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DEAT_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PRON_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PARE_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"NETP_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DURS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DUTY_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"APAL_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DTCH_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"CLPC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"NMCG_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DURC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"JOCH_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"OFPC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PYTC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"WRKC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"HDTC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PBDC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"CSPT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"200\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"ADJN_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"ADDT_NAME\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_GUARTR", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GRNT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GTEL_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GTEL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECU_SEAT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsED_EDRSLT", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EDRT_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"EDUC_INNM\" size=\"50\" type=\"STRING\"/><Column id=\"EDUC_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"EDUC_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"EDSB_NAME\" size=\"200\" type=\"STRING\"/><Column id=\"EDCY_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"EDCD_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"EDUC_INNM\" size=\"50\" type=\"STRING\"/><Column id=\"EDUP_CODE\" size=\"50\" type=\"STRING\"/><Column id=\"EDUC_COST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"EDUC_PROD\" size=\"50\" type=\"STRING\"/><Column id=\"EDEV_CODE\" size=\"50\" type=\"STRING\"/><Column id=\"EDEV_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"ACQS_CRDT\" size=\"2\" type=\"BIGDECIMAL\"/><Column id=\"RFND_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"200\" type=\"STRING\"/><Column id=\"EDC1_CODE\" size=\"2\" type=\"STRING\"/><Column id=\"EDC2_CODE\" size=\"2\" type=\"STRING\"/><Column id=\"EDC3_CODE\" size=\"2\" type=\"STRING\"/><Column id=\"EDC1_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"EDC2_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"EDC3_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"EDUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDEV_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_PASSRR", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PSSP_NUMB\" size=\"20\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"EXPI_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_VISARR", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"VISN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"VISN_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"VISA_TYPE\" size=\"20\" type=\"STRING\"/><Column id=\"EXPI_DATE\" size=\"8\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_DUTYRR", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"DUTY_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"DUTY_CNTT\" size=\"50\" type=\"STRING\"/><Column id=\"DUTY_DETL\" size=\"1000\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_ATTACH", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_200X\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape2", "absolute", "240", "128", null, "135", "25", null, this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab0", "absolute", "240", "273", null, null, "25", "15", this);
            obj.set_taborder("61");
            obj.set_tabindex("0");
            obj.set_tabposition("top");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_MASTXM", this.Tab0);
            obj.set_text("개인신상");
            obj.set_taborder("0");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("Shape08", "absolute", "10", "335", null, "115", "9", null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("70");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Shape06", "absolute", "10", "25", null, "117", "9", null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("46");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "31", "34", "91", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("47");
            obj.set_text("그룹입사일");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "31", "60", "91", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("48");
            obj.set_text("현소속근무일");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static46", "absolute", "31", "112", "91", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("49");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "31", "86", "91", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("50");
            obj.set_text("현직급근무일");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "481", "86", "91", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("51");
            obj.set_text("연차기산일");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtPCOP_TERM", "absolute", "237", "34", "206", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("1");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtSEAS_TERM", "absolute", "237", "60", "206", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.set_enableevent("true");
            obj.set_tabstop("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtPRON_TERM", "absolute", "-427", "364", "216", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("52");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.set_enableevent("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtANSD_TERM", "absolute", "677", "86", "199", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("11");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.set_enableevent("true");
            obj.set_tabstop("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "481", "34", "91", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("53");
            obj.set_text("자사입사일");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "481", "60", "91", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("54");
            obj.set_text("현부서근무일");
            obj.set_cssclass("styFormItemCap");
            obj.set_enable("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtENCO_TERM", "absolute", "677", "34", "199", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("3");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.set_enableevent("true");
            obj.set_tabstop("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtDEAT_TERM", "absolute", "677", "60", "199", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("7");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.set_enableevent("true");
            obj.set_tabstop("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST", "absolute", "10", "4", "105", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("55");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Calendar("calANSD_DATE", "absolute", "575", "86", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_enableevent("true");
            obj = new Calendar("calSEAS_DATE", "absolute", "135", "60", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj = new Calendar("calPRON_DATE", "absolute", "135", "86", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_enableevent("true");
            obj.set_tabstop("false");
            obj = new Calendar("calENCO_DATE", "absolute", "575", "34", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_enableevent("true");
            obj.set_tabstop("false");
            obj = new Calendar("calDEAT_DATE", "absolute", "575", "60", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_enableevent("true");
            obj.set_tabstop("false");
            obj = new CheckBox("chkLBJO_YSNO", "absolute", "575", "112", "15", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("14");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_DEPTXM");
            obj.set_enableevent("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "252", "112", "85", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("56");
            obj.set_text("수습종료일");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Calendar("calPBNR_ENDD", "absolute", "343", "112", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            obj = new Static("Static07", "absolute", "481", "112", "91", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("57");
            obj.set_text("노조원");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Shape07", "absolute", "10", "167", null, "143", "9", null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("58");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "31", "174", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("59");
            obj.set_text("현거주지");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "31", "228", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("60");
            obj.set_text("주민등록주소");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "31", "280", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("61");
            obj.set_text("회사번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "31", "254", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("62");
            obj.set_text("본적지");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtDTL1_ADDR", "absolute", "260", "176", "231", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("15");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtRGD1_ADDR", "absolute", "260", "228", "231", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("20");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtLED1_ADDR", "absolute", "260", "254", "231", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("23");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtCOMP_TENR", "absolute", "135", "280", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("25");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.style.set_color("#000000ff");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "496", "280", "72", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("63");
            obj.set_text("자택전화");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtEND2_ADDR", "absolute", "493", "202", "383", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("19");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_imemode("alpha");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtRGD2_ADDR", "absolute", "493", "228", "275", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("21");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtLED2_ADDR", "absolute", "493", "254", "383", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("24");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtELTR_MLAD", "absolute", "770", "280", "106", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("28");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.style.set_color("#000000ff");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST00", "absolute", "10", "146", "105", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("64");
            obj.set_text("주소/연락처");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtPOST_NUMB", "absolute", "135", "176", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("65");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_readonly("true");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            obj.set_tabstop("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("imgHelpPOST_ADDR", "absolute", "237", "176", "22", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("43");
            obj.set_cssclass("sytHelpPopupInput");
            obj.set_enable("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtRERN_PONB", "absolute", "135", "228", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("66");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            obj.set_tabstop("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("imgHelpRGD2_ADDR", "absolute", "237", "228", "22", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("44");
            obj.set_cssclass("sytHelpPopupInput");
            obj.set_enable("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtLEGL_PONB", "absolute", "135", "254", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("67");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_readonly("true");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            obj.set_tabstop("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("imgHelpLED2_ADDR", "absolute", "237", "254", "22", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("45");
            obj.set_cssclass("sytHelpPopupInput");
            obj.set_enable("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "260", "280", "72", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("68");
            obj.set_text("휴대전화");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtHNPN_TENR", "absolute", "359", "280", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("26");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.style.set_color("#000000ff");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtOHOM_TENR", "absolute", "565", "280", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("27");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.style.set_color("#000000ff");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "702", "280", "64", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("69");
            obj.set_text("이메일");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Button("btnCopyAddr", "absolute", "770", "228", "106", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("22");
            obj.set_text("현거주지동일");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_enable("false");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "31", "340", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("71");
            obj.set_text("신장");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "31", "366", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("72");
            obj.set_text("혈액형");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "260", "366", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("73");
            obj.set_text("실제생일");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST01", "absolute", "10", "313", "105", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("74");
            obj.set_text("신체/기타");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Calendar("calREAL_BIRT", "absolute", "359", "366", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static36", "absolute", "260", "340", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("75");
            obj.set_text("체중");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "498", "366", "80", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("76");
            obj.set_text("음력/양력");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "31", "392", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("77");
            obj.set_text("종교");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Combo("cmbBLTP_CODE", "absolute", "135", "366", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_type("search");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_readonly("true");
            obj = new Combo("cmbSLCA_CODE", "absolute", "576", "366", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_type("search");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Combo("cmbRLGN_CODE", "absolute", "135", "392", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_type("search");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static35", "absolute", "498", "340", "80", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("78");
            obj.set_text("시력(좌)");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static42", "absolute", "702", "366", "69", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("79");
            obj.set_text("결혼유무");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static43", "absolute", "260", "392", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("80");
            obj.set_text("취미");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtEMPL_HOBY", "absolute", "359", "392", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("38");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "702", "338", "69", "25", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("81");
            obj.set_text("시력(우)");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "702", "392", "69", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("82");
            obj.set_text("결혼일자");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "498", "392", "80", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("83");
            obj.set_text("특기");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtEMPL_SPEC", "absolute", "576", "392", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("39");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Calendar("calWEAN_DATE", "absolute", "770", "392", "106", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static05", "absolute", "31", "112", "91", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("84");
            obj.set_text("수습여부");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new CheckBox("chkPBNR_YSNO", "absolute", "135", "112", "15", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("12");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_DEPTXM");
            obj.set_enableevent("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Radio("rdoMARG_YSNO", "absolute", "770", "366", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            var rdoMARG_YSNO_innerdataset = new Dataset("rdoMARG_YSNO_innerdataset", this.Tab0.tabHR_MASTXM.rdoMARG_YSNO);
            rdoMARG_YSNO_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미혼</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">기혼</Col></Row></Rows>");
            obj.set_innerdataset(rdoMARG_YSNO_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("styFormSearchRdo");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static44", "absolute", "31", "418", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("85");
            obj.set_text("호주성명");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static48", "absolute", "260", "418", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("86");
            obj.set_text("호주와의 관계");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtHOFM_RELA", "absolute", "359", "418", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("42");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtHOFM_NAME", "absolute", "135", "418", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("41");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Calendar("calPCOP_JCDT", "absolute", "135", "34", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj = new Static("Static01", "absolute", "470", "142", "80", "25", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("87");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "11", "222", "30", "41", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("88");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "876", "184", "20", "41", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("89");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "470", "310", "80", "25", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("90");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "876", "367", "20", "41", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("91");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "11", "343", "30", "41", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("92");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "11", "50", "30", "41", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("93");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "876", "50", "20", "41", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("94");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "468", "0", "80", "25", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("95");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "49", "10", "137", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("96");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "897", "25", "10", "117", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("97");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new MaskEdit("edtEMPL_HEGT", "absolute", "135", "340", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("29");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.set_mask("###.#");
            obj.set_limitbymask("both");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new MaskEdit("edtBODY_WEGT", "absolute", "359", "340", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("30");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.set_mask("###.#");
            obj.set_limitbymask("both");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new MaskEdit("edtLEFT_SGHT", "absolute", "576", "340", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("31");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.set_mask("#.#");
            obj.set_limitbymask("both");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new MaskEdit("edtRIGH_SGHT", "absolute", "770", "340", "110", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("32");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.set_mask("#.#");
            obj.set_limitbymask("both");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "252", "86", "95", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("98");
            obj.set_text("정규직전환일");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Calendar("calTEMT_DATE", "absolute", "343", "86", "100", "21", null, null, this.Tab0.tabHR_MASTXM);
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj = new Static("Static24", "absolute", "31", "202", "101", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("99");
            obj.set_text("현거주지(영문)");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtEND1_ADDR", "absolute", "260", "202", "231", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_imemode("alpha");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtDTL2_ADDR", "absolute", "493", "176", "383", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Edit("edtENPT_NUMB", "absolute", "135", "202", "123", "21", null, null, this.Tab0.tabHR_MASTXM);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_maxlength("6");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_inputtype("number,digit");
            this.Tab0.tabHR_MASTXM.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_MASTXD", this.Tab0);
            obj.set_text("장애병역");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "10", "141", null, "91", "10", null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("42");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Shape08", "absolute", "10", "25", null, "91", "10", null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("33");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Shape01", "absolute", "10", "257", null, "91", "10", null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("32");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "30", "34", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("34");
            obj.set_text("장애구분");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST01", "absolute", "10", "4", "113", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("35");
            obj.set_text("장애 / 보훈");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "258", "34", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("36");
            obj.set_text("장애등급");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "258", "60", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("37");
            obj.set_text("중증여부");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbHALT_CODE", "absolute", "124", "34", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enableevent("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Combo("cmbDEDY_CODE", "absolute", "338", "34", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enableevent("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Combo("cmbSVIM_YSNO", "absolute", "338", "60", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_type("search");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enableevent("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static35", "absolute", "473", "34", "77", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("38");
            obj.set_text("장애유형");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static41", "absolute", "473", "60", "77", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("39");
            obj.set_text("보훈구분");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbREDN_CODE", "absolute", "541", "60", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enableevent("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static37", "absolute", "678", "34", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("40");
            obj.set_text("장애인정시기");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "678", "60", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("41");
            obj.set_text("보훈번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbDEGC_CODE", "absolute", "541", "34", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enableevent("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static03", "absolute", "30", "150", "69", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("43");
            obj.set_text("병역구분");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST00", "absolute", "10", "120", "113", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("44");
            obj.set_text("병역사항");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "258", "150", "69", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("45");
            obj.set_text("군번");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "10", "425", "101", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("46");
            obj.set_text("군보직");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtSOLR_NUMB", "absolute", "338", "150", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("13");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_color("#000000ff");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbDICL_CODE", "absolute", "124", "176", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static09", "absolute", "473", "150", "69", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("47");
            obj.set_text("군별");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "473", "176", "69", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("48");
            obj.set_text("입대일");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static42", "absolute", "206", "461", "101", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("49");
            obj.set_text("지원구분");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbKMIL_CODE", "absolute", "541", "150", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static11", "absolute", "678", "150", "69", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("50");
            obj.set_text("병과");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "678", "176", "69", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("51");
            obj.set_text("전역일자");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbMLGN_CODE", "absolute", "124", "150", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Calendar("calENLS_DATE", "absolute", "541", "176", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static18", "absolute", "30", "266", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("52");
            obj.set_text("희망업무1");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST02", "absolute", "10", "236", "113", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("53");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "258", "266", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("54");
            obj.set_text("희망업무2");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "391", "425", "101", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("55");
            obj.set_text("특기사항");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "30", "60", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("56");
            obj.set_text("장애원인");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtHALT_PROW", "absolute", "124", "60", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("4");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_color("#000000ff");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "258", "86", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("57");
            obj.set_text("유공자관계");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbMAMR_CODE", "absolute", "338", "86", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_type("search");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_readonly("true");
            obj = new Static("Static07", "absolute", "473", "86", "77", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("58");
            obj.set_text("유공자");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "678", "86", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("59");
            obj.set_text("해당지청");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "30", "86", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("60");
            obj.set_text("보훈지정일자");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Calendar("calRCMP_DATE", "absolute", "124", "86", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj = new Edit("edtMNOM_NAME", "absolute", "541", "86", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("10");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_color("#000000ff");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "7", "457", "101", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("61");
            obj.set_text("제대구분");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "30", "176", "69", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("62");
            obj.set_text("계급");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "7", "481", "101", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("63");
            obj.set_text("특례구분");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbDICL_CODE00", "absolute", "109", "483", "99", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("64");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_visible("false");
            obj = new Static("Static26", "absolute", "411", "457", "101", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("65");
            obj.set_text("자원구분");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "411", "481", "101", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("66");
            obj.set_text("특례지정일");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbKMIL_CODE00", "absolute", "513", "459", "99", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("67");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_visible("false");
            obj = new Static("Static29", "absolute", "613", "457", "101", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("68");
            obj.set_text("예비군구분");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "613", "481", "101", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("69");
            obj.set_text("특례종료일");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbMLGN_CODE00", "absolute", "109", "459", "99", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("70");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_visible("false");
            obj = new Calendar("calENLS_DATE00", "absolute", "513", "483", "99", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("71");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_visible("false");
            obj = new Combo("cmbBOTS_CODE00", "absolute", "715", "459", "99", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("72");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_visible("false");
            obj = new Calendar("calLVAM_DATE00", "absolute", "715", "483", "99", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("73");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_visible("false");
            obj = new Combo("cmbMLGN_CODE01", "absolute", "112", "427", "99", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_visible("false");
            obj = new Edit("edtSOLR_NUMB00", "absolute", "308", "463", "99", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("75");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "30", "292", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("76");
            obj.set_text("희망지역1");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "258", "292", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("77");
            obj.set_text("희망지역2");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "460", "292", "85", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("78");
            obj.set_text("추천인성명");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static43", "absolute", "30", "318", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("79");
            obj.set_text("주거형태");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "258", "318", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("80");
            obj.set_text("소유구분");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static46", "absolute", "460", "318", "85", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("81");
            obj.set_text("추천인회사");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "460", "266", "85", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("82");
            obj.set_text("사내추천인");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static48", "absolute", "678", "292", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("83");
            obj.set_text("추천인관계");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static49", "absolute", "678", "318", "101", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("84");
            obj.set_text("추천인직위");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbKMIL_CODE01", "absolute", "493", "427", "99", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("85");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_visible("false");
            obj = new Static("Static50", "absolute", "258", "176", "69", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("86");
            obj.set_text("역종");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbCLSS_CODE", "absolute", "338", "176", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_readonly("true");
            obj = new Combo("cmbHUSF_CODE", "absolute", "124", "318", "100", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_readonly("true");
            obj.set_index("-1");
            obj = new Combo("cmbHUSO_CODE", "absolute", "338", "318", "100", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_readonly("true");
            obj.set_index("-1");
            obj = new Edit("edtCIRP_EMNR", "absolute", "541", "266", "100", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("87");
            obj.set_readonly("true");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "#000000ff");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("imgHelpedtCIRP_EMNR", "absolute", "643", "266", "22", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("88");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtCIRP_NAME", "absolute", "666", "266", "212", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("27");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_color("#000000ff");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtHPJ1_CNTT", "absolute", "124", "266", "100", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("21");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_color("#000000ff");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtHPJ2_CNTT", "absolute", "338", "266", "100", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("22");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_color("#000000ff");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtHOP1_ARNM", "absolute", "124", "292", "100", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("23");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_color("#000000ff");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtHOP2_ARNM", "absolute", "338", "292", "100", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("24");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_color("#000000ff");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtRCPS_NAME", "absolute", "541", "292", "100", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("28");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_color("#000000ff");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtRCPC_NAME", "absolute", "541", "318", "100", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("30");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_color("#000000ff");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtHDPP_NAME", "absolute", "773", "86", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("11");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_color("#000000ff");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtRCPS_RELA", "absolute", "773", "292", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("29");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_inputmode("normal");
            obj.set_imemode("none");
            obj.style.set_color("#000000ff");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtRCPS_TLNM", "absolute", "773", "318", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("31");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_inputmode("normal");
            obj.set_imemode("none");
            obj.style.set_color("#000000ff");
            obj.set_visible("false");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Calendar("calHAAD_DATE", "absolute", "773", "34", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enableevent("true");
            obj.set_enable("true");
            obj.style.set_color("#adb4bbff");
            obj.set_readonly("true");
            obj = new Edit("edtRCMP_NUMB", "absolute", "773", "60", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("7");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enableevent("true");
            obj.style.set_color("#000000ff");
            obj.set_readonly("true");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbBOTS_CODE", "absolute", "773", "150", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_type("search");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Calendar("calLVAM_DATE", "absolute", "773", "176", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static00", "absolute", "387", "0", "80", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("89");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "11", "26", "30", "79", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("90");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "880", "50", "20", "41", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("91");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Edit("edtSOLR_NUMB01", "absolute", "311", "483", "99", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("92");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "209", "481", "101", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("93");
            obj.set_text("특례번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "389", "116", "80", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("94");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "389", "232", "80", "25", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("95");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "30", "202", "69", "21", null, null, this.Tab0.tabHR_MASTXD);
            obj.set_taborder("96");
            obj.set_text("제대구분");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj = new Combo("cmbLVTY_CODE", "absolute", "124", "202", "105", "21", null, null, this.Tab0.tabHR_MASTXD);
            this.Tab0.tabHR_MASTXD.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_CHANGE");
            obj.set_readonly("true");
            obj = new Tabpage("tabHR_SCHCRR", this.Tab0);
            obj.set_text("학력");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "216", "21", null, null, this.Tab0.tabHR_SCHCRR);
            obj.set_taborder("193");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabHR_SCHCRR.addChild(obj.name, obj);
            obj = new Button("btnHR_SCHCRRDel", "absolute", null, "5", "62", "21", "10", null, this.Tab0.tabHR_SCHCRR);
            obj.set_taborder("194");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_SCHCRR.addChild(obj.name, obj);
            obj = new Button("btnHR_SCHCRRAdd", "absolute", null, "5", "62", "21", "75", null, this.Tab0.tabHR_SCHCRR);
            obj.set_taborder("195");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_SCHCRR.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "1142", "83", "10", "75", null, null, this.Tab0.tabHR_SCHCRR);
            obj.set_taborder("196");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_SCHCRR.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "938", "34", "216", "4", null, null, this.Tab0.tabHR_SCHCRR);
            obj.set_taborder("197");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_SCHCRR.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabHR_SCHCRR);
            obj.set_taborder("198");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_SCHCRR.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_SCHCRR);
            obj.set_taborder("199");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_SCHCRR.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_SCHCRR);
            obj.set_taborder("204");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_SCHCRR.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_SCHCRR);
            obj.set_taborder("205");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_SCHCRR.addChild(obj.name, obj);
            obj = new Grid("grdHR_SCHCRR", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabHR_SCHCRR);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("206");
            obj.set_binddataset("dsHR_SCHCRR");
            obj.set_scrollbars("alwayshorz");
            obj.set_wheelscrollrow("1");
            obj.set_readonly("true");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"97\"/><Column size=\"95\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"학력\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"학위\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"학교명\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"기타학교명\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"계열\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"전공\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"전공명\"/><Cell col=\"7\" text=\"부/복수전공\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"입학일\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"졸업일\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"소재지\"/><Cell col=\"11\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"최종학교여부\"/><Cell col=\"12\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"입사전학력여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:SCDN_CODE\" combodisplayrowcount=\"10\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:DGDN_CODE\" combodisplayrowcount=\"10\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:left;\" text=\"bind:SCHL_CDNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:SCHL_NAME\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:MJRA_CODE\" combodisplayrowcount=\"10\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MAJR_CDNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:MAJR_NAME\" editlimit=\"0\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:DBMJ_NAME\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" text=\"bind:ENIS_DATE\" maskchar=\"_\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" text=\"bind:GRDT_DATE\" maskchar=\"_\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:SCHL_SEAT\" editlimit=\"0\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:HISL_YSNO\"/><Cell col=\"12\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ENSC_YSNO\"/></Band></Format></Formats>");
            this.Tab0.tabHR_SCHCRR.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_BFCARR", this.Tab0);
            obj.set_text("경력");
            this.Tab0.addChild(obj.name, obj);
            obj = new Button("btnHR_BFCARRAdd", "absolute", null, "6", "62", "21", "75", null, this.Tab0.tabHR_BFCARR);
            obj.set_taborder("171");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_BFCARR.addChild(obj.name, obj);
            obj = new Button("btnHR_BFCARRDel", "absolute", null, "6", "62", "21", "10", null, this.Tab0.tabHR_BFCARR);
            obj.set_taborder("172");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_BFCARR.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "248", "21", null, null, this.Tab0.tabHR_BFCARR);
            obj.set_taborder("173");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabHR_BFCARR.addChild(obj.name, obj);
            obj = new Grid("grdHR_BFCARR", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabHR_BFCARR);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("174");
            obj.set_binddataset("dsHR_BFCARR");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"근무처\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"입사일\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"퇴사일\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"부서명\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직급\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직책\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직위\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"담당업무\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"경력구분\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"최종급여\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" style=\"align:left;\" text=\"bind:WORK_ORGT\" editlimit=\"0\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:ENCO_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:RETR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:DEPT_NAME\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:CPOS_NAME\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:DURS_NAME\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:OPOS_NAME\" editlimit=\"0\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:left;\" text=\"bind:WOPA_CNTT\" editlimit=\"0\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:CARR_GUBN\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:LAST_WAGE\" editlimit=\"15\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\"/></Band></Format></Formats>");
            this.Tab0.tabHR_BFCARR.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabHR_BFCARR);
            obj.set_taborder("175");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_BFCARR.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_BFCARR);
            obj.set_taborder("176");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_BFCARR.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_BFCARR);
            obj.set_taborder("177");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_BFCARR.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_BFCARR);
            obj.set_taborder("178");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_BFCARR.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_FAMILY", this.Tab0);
            obj.set_text("가족");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "202", "21", null, null, this.Tab0.tabHR_FAMILY);
            obj.set_taborder("114");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Button("btnHR_FAMILYDel", "absolute", null, "6", "62", "21", "10", null, this.Tab0.tabHR_FAMILY);
            obj.set_taborder("115");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Button("btnHR_FAMILYAdd", "absolute", null, "6", "62", "21", "75", null, this.Tab0.tabHR_FAMILY);
            obj.set_taborder("116");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Grid("grdHR_FAMILY", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabHR_FAMILY);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("117");
            obj.set_binddataset("dsHR_FAMILY");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"114\"/><Column size=\"82\"/><Column size=\"120\"/><Column size=\"107\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\" editautoselect=\"true\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주민번호\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"관계명\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"학력\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직업\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"생년월일\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"나이 (만)\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"동거여부\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"건강보험등재여부\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:FMLY_NAME\" editlimit=\"30\" editautoselect=\"true\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:FMLY_SSEC\" mask=\"######-#######\" editlimit=\"13\" editautoselect=\"true\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:FREL_CODE\" combodisplayrowcount=\"10\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:SCCR_CODE\" combodisplayrowcount=\"10\"/><Cell col=\"4\" edittype=\"normal\" style=\"align:left;\" text=\"bind:FMLY_JOBX\" editlimit=\"0\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:FMLY_BIRT\" editautoselect=\"true\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:FMLY_AGEX\" editautoselect=\"true\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:LVTG_YSNO\" editautoselect=\"true\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:HLIN_YSNO\" editautoselect=\"true\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\" editautoselect=\"true\" editlengthunit=\"ascii\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabHR_FAMILY);
            obj.set_taborder("118");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_FAMILY);
            obj.set_taborder("119");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_FAMILY);
            obj.set_taborder("120");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_FAMILY);
            obj.set_taborder("121");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_FAMILY.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_FRLANG", this.Tab0);
            obj.set_text("어학");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "304", "21", null, null, this.Tab0.tabHR_FRLANG);
            obj.set_taborder("117");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabHR_FRLANG.addChild(obj.name, obj);
            obj = new Button("btnHR_FRLANGAdd", "absolute", null, "5", "62", "21", "75", null, this.Tab0.tabHR_FRLANG);
            obj.set_taborder("120");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_FRLANG.addChild(obj.name, obj);
            obj = new Button("btnHR_FRLANGDel", "absolute", null, "5", "62", "21", "10", null, this.Tab0.tabHR_FRLANG);
            obj.set_taborder("118");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_FRLANG.addChild(obj.name, obj);
            obj = new Grid("grdHR_FRLANG", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabHR_FRLANG);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("119");
            obj.set_binddataset("dsHR_FRLANG");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_autoupdatetype("itemselect");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"102\"/><Column size=\"80\"/><Column size=\"109\"/><Column size=\"116\"/><Column size=\"107\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"어학\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"언어구분\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"등급\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"점수\"/><Cell col=\"4\" style=\"backgroundimage: ;\" text=\"만점\"/><Cell col=\"5\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"취득일자\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:OACT_CDNM\" editautoselect=\"true\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:KFLG_CODE\" editautoselect=\"true\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:DFLG_CONM\" editautoselect=\"true\" expandshow=\"show\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:FOLG_SCOR\" editlimit=\"5\" editlimitbymask=\"both\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PFSC_SCOR\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:ACQS_DATE\" editautoselect=\"true\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"text\" text=\"bind:REMK_100X\" editlimit=\"0\" editautoselect=\"true\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.Tab0.tabHR_FRLANG.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabHR_FRLANG);
            obj.set_taborder("121");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_FRLANG.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_FRLANG);
            obj.set_taborder("122");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_FRLANG.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_FRLANG);
            obj.set_taborder("123");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_FRLANG.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_FRLANG);
            obj.set_taborder("124");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_FRLANG.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_LICEXM", this.Tab0);
            obj.set_text("자격면허");
            obj.set_enable("true");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "600", "21", null, null, this.Tab0.tabHR_LICEXM);
            obj.set_taborder("115");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabHR_LICEXM.addChild(obj.name, obj);
            obj = new Button("btnHR_LICEXMDel", "absolute", null, "6", "62", "21", "10", null, this.Tab0.tabHR_LICEXM);
            obj.set_taborder("116");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_LICEXM.addChild(obj.name, obj);
            obj = new Button("btnHR_LICEXMAdd", "absolute", null, "6", "62", "21", "75", null, this.Tab0.tabHR_LICEXM);
            obj.set_taborder("117");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_LICEXM.addChild(obj.name, obj);
            obj = new Grid("grdHR_LICEXM", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabHR_LICEXM);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("118");
            obj.set_binddataset("dsHR_LICEXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"173\"/><Column size=\"173\"/><Column size=\"86\"/><Column size=\"145\"/><Column size=\"170\"/><Column size=\"86\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"자격면허명\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"등급\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"취득일자\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"발급기관\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"자격면허번호\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"유효일자\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:LICE_CDNM\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CTCS_CONM\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:ACQS_DATE\" editlimit=\"30\" editautoselect=\"true\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ISSU_INNM\" editlimit=\"0\" editautoselect=\"true\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" style=\"align:center;\" text=\"bind:QFCA_LICN\" editlimit=\"0\" editautoselect=\"true\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:ENDX_DATE\" editautoselect=\"true\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.Tab0.tabHR_LICEXM.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_LICEXM);
            obj.set_taborder("119");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_LICEXM.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabHR_LICEXM);
            obj.set_taborder("120");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_LICEXM.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_LICEXM);
            obj.set_taborder("121");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_LICEXM.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_LICEXM);
            obj.set_taborder("122");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_LICEXM.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_GRTINS", this.Tab0);
            obj.set_text("보증");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdHR_GRTINS", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabHR_GRTINS);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_binddataset("dsHR_GRTINS");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"backgroundimage: ;\" text=\"보증시작일\"/><Cell col=\"1\" style=\"backgroundimage: ;\" text=\"보증종료일\"/><Cell col=\"2\" text=\"보험회사\"/><Cell col=\"3\" text=\"가입금액\"/><Cell col=\"4\" text=\"보험료\"/><Cell col=\"5\" style=\"backgroundimage: ;\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:BGIN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ENDX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:GYIE_COMP\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GYIE_AMOT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INSU_FEEX\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.Tab0.tabHR_GRTINS.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST01", "absolute", "10", "9", "89", "21", null, null, this.Tab0.tabHR_GRTINS);
            obj.set_taborder("1");
            obj.set_text("보증보험");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tabHR_GRTINS.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_GRTINS);
            obj.set_taborder("2");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_GRTINS.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabHR_GRTINS);
            obj.set_taborder("3");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_GRTINS.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_GRTINS);
            obj.set_taborder("4");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_GRTINS.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_GRTINS);
            obj.set_taborder("5");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_GRTINS.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_REWARD", this.Tab0);
            obj.set_text("상벌");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST01", "absolute", "10", "9", "89", "21", null, null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("0");
            obj.set_text("포상");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Grid("grdHR_REWARD", "absolute", "10", "30", null, "239", "10", null, this.Tab0.tabHR_REWARD);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsHR_REWARD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_edit\" text=\"포상일자\"/><Cell col=\"1\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"포상\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"포상내역\"/><Cell col=\"3\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"포상기관\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:DCSN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:RWDN_GUBN\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REWD_PROW\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REWD_INNM\" editlimit=\"0\"/></Band></Format></Formats>");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Static("stGROP_LIST00", "absolute", "10", "278", "89", "21", null, null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("2");
            obj.set_text("징계");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Grid("grdHR_DISCIP", "absolute", "10", "299", null, null, "10", "10", this.Tab0.tabHR_REWARD);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("3");
            obj.set_binddataset("dsHR_DISCIP");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"징계시작일\"/><Cell col=\"1\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"징계종료일\"/><Cell col=\"2\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"징계명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"징계사유\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_edit\" text=\"징계조치내역\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_edit\" text=\"징계기관\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:DCSN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:DISP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:DIAA_MTTR\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DIAA_PROW\" editlimit=\"0\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DIME_HIST\" editlimit=\"0\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DIAA_INNM\" editlimit=\"0\"/></Band></Format></Formats>");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Button("btnHR_REWARDAdd", "absolute", null, "5", "62", "21", "75", null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Button("btnHR_REWARDDel", "absolute", null, "5", "62", "21", "10", null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Button("btnHR_DISCIPAdd", "absolute", null, "274", "62", "21", "75", null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Button("btnHR_DISCIPDel", "absolute", null, "274", "62", "21", "10", null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("8");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("10");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("11");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "580", "269", "80", "30", null, null, this.Tab0.tabHR_REWARD);
            obj.set_taborder("12");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_REWARD.addChild(obj.name, obj);
            obj = new Tabpage("tabED_EDRSLT", this.Tab0);
            obj.set_text("교육훈련");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "288", "21", null, null, this.Tab0.tabED_EDRSLT);
            obj.set_taborder("117");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabED_EDRSLT.addChild(obj.name, obj);
            obj = new Grid("grdED_STUDNT", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabED_EDRSLT);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("118");
            obj.set_binddataset("dsED_EDRSLT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"219\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"교육명\"/><Cell col=\"1\" rowspan=\"2\" text=\"교육기관\"/><Cell col=\"2\" rowspan=\"2\" text=\"교육시작일\"/><Cell col=\"3\" rowspan=\"2\" text=\"교육종료일\"/><Cell col=\"4\" colspan=\"3\" text=\"교육과정\"/><Cell col=\"7\" rowspan=\"2\" text=\"교육기간\"/><Cell col=\"8\" rowspan=\"2\" text=\"교육금액\"/><Cell col=\"9\" rowspan=\"2\" text=\"이수학점\"/><Cell col=\"10\" rowspan=\"2\" text=\"교육평가\"/><Cell col=\"11\" rowspan=\"2\" text=\"평가여부\"/><Cell row=\"1\" col=\"4\" text=\"대분류\"/><Cell row=\"1\" col=\"5\" text=\"정분류\"/><Cell row=\"1\" col=\"6\" text=\"소분류\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"align:left;\" text=\"bind:EDSB_NAME\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:EDUC_INNM\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:EDUC_BEDE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:EDUC_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:EDC1_NAME\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:EDC2_NAME\"/><Cell col=\"6\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:EDC3_NAME\"/><Cell col=\"7\" displaytype=\"normal\" style=\"align:right;\" text=\"bind:EDUP_NAME\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EDUC_COST\"/><Cell col=\"9\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:ACQS_CRDT\"/><Cell col=\"10\" displaytype=\"normal\" style=\"align: ;\" text=\"bind:EDEV_NAME\"/><Cell col=\"11\" displaytype=\"checkbox\" text=\"bind:EDEV_YSNO\"/></Band></Format></Formats>");
            this.Tab0.tabED_EDRSLT.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabED_EDRSLT);
            obj.set_taborder("119");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabED_EDRSLT.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabED_EDRSLT);
            obj.set_taborder("120");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabED_EDRSLT.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabED_EDRSLT);
            obj.set_taborder("121");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabED_EDRSLT.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabED_EDRSLT);
            obj.set_taborder("122");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabED_EDRSLT.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_APPOXD", this.Tab0);
            obj.set_text("발령사항");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "241", "21", null, null, this.Tab0.tabHR_APPOXD);
            obj.set_taborder("115");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabHR_APPOXD.addChild(obj.name, obj);
            obj = new Grid("grdHR_APPOXD", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabHR_APPOXD);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("116");
            obj.set_binddataset("dsHR_APPOXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"124\"/><Column size=\"109\"/><Column size=\"91\"/><Column size=\"97\"/><Column size=\"101\"/><Column size=\"95\"/><Column size=\"105\"/><Column size=\"95\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"발령일\"/><Cell col=\"1\" text=\"발령구분\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책\"/><Cell col=\"6\" text=\"직위\"/><Cell col=\"7\" text=\"겸직부서\"/><Cell col=\"8\" text=\"겸직직책\"/><Cell col=\"9\" text=\"발령종료일\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:APNT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:APDN_NAME\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:CPOS_NAME\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:DURS_NAME\"/><Cell col=\"6\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"7\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:ADJN_NAME\"/><Cell col=\"8\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:ADDT_NAME\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" text=\"bind:APNT_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:REMK_200X\"/></Band></Format></Formats>");
            this.Tab0.tabHR_APPOXD.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabHR_APPOXD);
            obj.set_taborder("117");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_APPOXD.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_APPOXD);
            obj.set_taborder("118");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_APPOXD.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_APPOXD);
            obj.set_taborder("119");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_APPOXD.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_APPOXD);
            obj.set_taborder("120");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_APPOXD.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_PASSRR", this.Tab0);
            obj.set_text("여권");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdHR_PASSRR", "absolute", "10", "30", null, null, "348", "10", this.Tab0.tabHR_PASSRR);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_binddataset("dsHR_PASSRR");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"173\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"여권번호\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"발급일\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"만료일\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" editfilter=\"alpha,number\" style=\"align:center;\" text=\"bind:PSSP_NUMB\" editlimit=\"20\" editautoselect=\"true\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:ISSU_DATE\" editlimit=\"30\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:EXPI_DATE\" editlimit=\"30\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "232", "21", null, null, this.Tab0.tabHR_PASSRR);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Button("btnHR_PASSRRAdd", "absolute", null, "5", "62", "21", "413", null, this.Tab0.tabHR_PASSRR);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Button("btnHR_PASSRRDel", "absolute", null, "5", "62", "21", "348", null, this.Tab0.tabHR_PASSRR);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Grid("grdHR_VISARR", "absolute", null, "30", "318", null, "10", "10", this.Tab0.tabHR_PASSRR);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_binddataset("dsHR_VISARR");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"비자발급국가\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비자종류\"/><Cell col=\"2\" style=\"backgroundimage: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"만료일\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:VISN_NAME\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" combodisplayrowcount=\"10\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:VISA_TYPE\" editlimit=\"0\" editautoselect=\"true\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:EXPI_DATE\" editlimit=\"30\" editautoselect=\"true\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Button("btnHR_VISARRDel", "absolute", null, "5", "62", "21", "10", null, this.Tab0.tabHR_PASSRR);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Button("btnHR_VISARRAdd", "absolute", null, "5", "62", "21", "75", null, this.Tab0.tabHR_PASSRR);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "300", "0", "80", "30", null, null, this.Tab0.tabHR_PASSRR);
            obj.set_taborder("7");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_PASSRR);
            obj.set_taborder("8");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_PASSRR);
            obj.set_taborder("9");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_PASSRR);
            obj.set_taborder("10");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "572", "75", "20", "67", null, null, this.Tab0.tabHR_PASSRR);
            obj.set_taborder("11");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_PASSRR.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_DUTYRR", this.Tab0);
            obj.set_text("직무");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "232", "21", null, null, this.Tab0.tabHR_DUTYRR);
            obj.set_taborder("0");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabHR_DUTYRR.addChild(obj.name, obj);
            obj = new Grid("grdHR_DUTYRR", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabHR_DUTYRR);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsHR_DUTYRR");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_readonly("true");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"540\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"기준일\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직무명\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직무내용\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직무상세\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:DUTY_DATE\" editautoselect=\"true\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DUTY_NAME\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DUTY_CNTT\" editlimit=\"0\" editautoselect=\"true\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"textarea\" style=\"align:left;\" text=\"bind:DUTY_DETL\" editlimit=\"0\" editautoselect=\"true\" calendardisplaynulltype=\"none\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.Tab0.tabHR_DUTYRR.addChild(obj.name, obj);
            obj = new Button("btnHR_DUTYRRAdd", "absolute", null, "5", "62", "21", "75", null, this.Tab0.tabHR_DUTYRR);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_DUTYRR.addChild(obj.name, obj);
            obj = new Button("btnHR_DUTYRRDel", "absolute", null, "5", "62", "21", "10", null, this.Tab0.tabHR_DUTYRR);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_DUTYRR.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabHR_DUTYRR);
            obj.set_taborder("4");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_DUTYRR.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_DUTYRR);
            obj.set_taborder("5");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_DUTYRR.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_DUTYRR);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_DUTYRR.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_DUTYRR);
            obj.set_taborder("7");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_DUTYRR.addChild(obj.name, obj);
            obj = new Tabpage("tabHR_ATTACH", this.Tab0);
            obj.set_text("파일첨부");
            this.Tab0.addChild(obj.name, obj);
            obj = new Button("btnHR_ATTACHDel", "absolute", null, "5", "62", "21", "10", null, this.Tab0.tabHR_ATTACH);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행삭제");
            this.Tab0.tabHR_ATTACH.addChild(obj.name, obj);
            obj = new Button("btnHR_ATTACHAdd", "absolute", null, "5", "62", "21", "75", null, this.Tab0.tabHR_ATTACH);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_text("행추가");
            this.Tab0.tabHR_ATTACH.addChild(obj.name, obj);
            obj = new Grid("grdHR_ATTACH", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tabHR_ATTACH);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("2");
            obj.set_binddataset("dsHR_ATTACH");
            obj.set_scrollbars("alwayshorz");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"300\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"파일종류\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"업로드\"/><Cell col=\"3\" text=\"신청내용\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'combo' : 'none'\" style=\"align:left;\" text=\"bind:FITY_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"2\" displaytype=\"button\" edittype=\"button\" style=\"align: ;\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;업로드&quot; : &quot;다운로드&quot;\"/><Cell col=\"3\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_100X\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_200X\"/></Band></Format></Formats>");
            this.Tab0.tabHR_ATTACH.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "256", "21", null, null, this.Tab0.tabHR_ATTACH);
            obj.set_taborder("3");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.Tab0.tabHR_ATTACH.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.Tab0.tabHR_ATTACH);
            obj.set_taborder("4");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_ATTACH.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab0.tabHR_ATTACH);
            obj.set_taborder("5");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_ATTACH.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.Tab0.tabHR_ATTACH);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_ATTACH.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "380", "390", "80", "10", null, null, this.Tab0.tabHR_ATTACH);
            obj.set_taborder("7");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tabHR_ATTACH.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "28", "71", "41", "21", null, null, this);
            obj.set_taborder("168");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("169");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "readonly", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "152", "71", "22", "21", null, null, this);
            obj.set_taborder("170");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "175", "71", "100", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle6", "absolute", "303", "71", "41", "21", null, null, this);
            obj.set_taborder("172");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "345", "71", "80", "21", null, null, this);
            obj.set_taborder("173");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_password("false");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "427", "71", "22", "21", null, null, this);
            obj.set_taborder("174");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "450", "71", "100", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle4", "absolute", "579", "71", "68", "21", null, null, this);
            obj.set_taborder("176");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWRDV_CODE", "absolute", "648", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new Static("imgSearchTitle01", "absolute", "778", "71", "68", "21", null, null, this);
            obj.set_taborder("178");
            obj.set_text("재직구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWODN_CODE", "absolute", "846", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new Static("Static15", "absolute", "348", "135", "77", "21", null, null, this);
            obj.set_taborder("185");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "348", "159", "77", "21", null, null, this);
            obj.set_taborder("186");
            obj.set_text("성명(한문)");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "348", "207", "77", "21", null, null, this);
            obj.set_taborder("187");
            obj.set_text("직급");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "348", "183", "77", "21", null, null, this);
            obj.set_taborder("188");
            obj.set_text("그룹입사일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "348", "231", "77", "21", null, null, this);
            obj.set_taborder("189");
            obj.set_text("근무상태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "429", "137", "100", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCCEM_NAME", "absolute", "429", "161", "100", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_NAME", "absolute", "429", "209", "100", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWRKS_NAME", "absolute", "429", "233", "100", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "556", "135", "77", "21", null, null, this);
            obj.set_taborder("195");
            obj.set_text("성명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "556", "159", "77", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_text("성명(영문)");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "556", "183", "77", "21", null, null, this);
            obj.set_taborder("197");
            obj.set_text("자사입사일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "556", "207", "77", "21", null, null, this);
            obj.set_taborder("198");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "556", "231", "77", "21", null, null, this);
            obj.set_taborder("199");
            obj.set_text("퇴사일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "637", "137", "100", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENEE_NAME", "absolute", "637", "161", "100", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_NAME", "absolute", "637", "209", "100", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "766", "135", "77", "21", null, null, this);
            obj.set_taborder("205");
            obj.set_text("주민번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "766", "159", "77", "21", null, null, this);
            obj.set_taborder("206");
            obj.set_text("나이");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "766", "183", "77", "21", null, null, this);
            obj.set_taborder("207");
            obj.set_text("소속");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "766", "207", "77", "21", null, null, this);
            obj.set_taborder("208");
            obj.set_text("직책");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "766", "231", "77", "21", null, null, this);
            obj.set_taborder("209");
            obj.set_text("최종학력");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_AGEX", "absolute", "834", "161", "110", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSECT_NAME", "absolute", "834", "185", "110", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDURS_NAME", "absolute", "834", "209", "110", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSCDN_NAME", "absolute", "834", "233", "110", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "975", "135", "76", "21", null, null, this);
            obj.set_taborder("215");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "975", "159", "76", "21", null, null, this);
            obj.set_taborder("216");
            obj.set_text("입사구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "975", "183", "76", "21", null, null, this);
            obj.set_taborder("217");
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "975", "207", "76", "21", null, null, this);
            obj.set_taborder("218");
            obj.set_text("직무");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "1043", "185", "108", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDUTY_NAME", "absolute", "1043", "209", "108", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("imgDelPhoto", "absolute", "291", "233", "37", "21", null, null, this);
            obj.set_taborder("227");
            obj.set_text("삭제");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbWRDV_CODE", "absolute", "1043", "137", "108", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");

            obj = new Combo("cmbREDI_CODE", "absolute", "1043", "161", "108", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_readonly("true");

            obj = new Static("stInformation", "absolute", "8", "107", "176", "21", null, null, this);
            obj.set_taborder("228");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medRERN_NUMB", "absolute", "834", "137", "110", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_cssclass("msk_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_autoskip("false");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPCOP_JCDT", "absolute", "429", "185", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("231");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_tabstop("false");

            obj = new Calendar("calENCO_DATE", "absolute", "637", "185", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("232");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_tabstop("false");

            obj = new ImageViewer("imgPHOT_FILE", "absolute", "251", "136", "78", "93", null, null, this);
            obj.set_taborder("233");
            obj.set_imagealign("center middle");
            obj.set_stretch("fit");
            obj.style.set_border("1 solid #b1b5b9b3");
            obj.style.set_align("right");
            obj.set_image("URL('theme://images/img_WF_user.png')");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload", "absolute", "251", "233", "38", "21", null, null, this);
            obj.set_taborder("234");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.style.set_buttonsize("38");
            obj.style.set_buttontext("등록");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("235");
            obj.set_text("인사정보");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("236");
            obj.set_text("홈 > 인사관리 > 인사관리 > 인사정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("237");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("238");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("239");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("240");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("241");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("242");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("243");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("244");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("245");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("246");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "275", "61", "40", "41", null, null, this);
            obj.set_taborder("247");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "122", "192", "6", null, null, this);
            obj.set_taborder("249");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("250");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "241", "129", "10", "41", null, null, this);
            obj.set_taborder("251");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1151", "129", "10", "41", null, null, this);
            obj.set_taborder("252");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "329", "157", "30", "41", null, null, this);
            obj.set_taborder("253");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "249", "263", "80", "10", null, null, this);
            obj.set_taborder("254");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "220", "237", "20", "41", null, null, this);
            obj.set_taborder("256");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_MASTXM", "absolute", "8", "128", "212", null, null, "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("257");
            obj.set_binddataset("dsHR_MASTXM");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"사원번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"성명\"/><Cell col=\"2\" displaytype=\"text\" text=\"부서\"/><Cell col=\"3\" displaytype=\"text\" text=\"소속\"/><Cell col=\"4\" displaytype=\"text\" text=\"직원구분\"/><Cell col=\"5\" displaytype=\"text\" text=\"재직구분\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:WRDV_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:WODN_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calRETR_DATE", "absolute", "637", "233", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_tabstop("false");

            obj = new CheckBox("chkOVSV_YSNO", "absolute", "1078", "230", "18", "24", null, null, this);
            obj.set_taborder("33");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "975", "231", "96", "21", null, null, this);
            obj.set_taborder("260");
            obj.set_text("해외근무여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 755, 381, this.Tab0.tabHR_MASTXM,
            	//-- Layout function
            	function(p) {
            		p.set_text("개인신상");
            		p.set_taborder("0");

            	}
            );
            this.Tab0.tabHR_MASTXM.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 920, 400, this.Tab0.tabHR_MASTXD,
            	//-- Layout function
            	function(p) {
            		p.set_text("장애병역");

            	}
            );
            this.Tab0.tabHR_MASTXD.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 755, 357, this.Tab0.tabHR_SCHCRR,
            	//-- Layout function
            	function(p) {
            		p.set_text("학력");

            	}
            );
            this.Tab0.tabHR_SCHCRR.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tabHR_BFCARR,
            	//-- Layout function
            	function(p) {
            		p.set_text("경력");

            	}
            );
            this.Tab0.tabHR_BFCARR.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tabHR_FAMILY,
            	//-- Layout function
            	function(p) {
            		p.set_text("가족");

            	}
            );
            this.Tab0.tabHR_FAMILY.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tabHR_FRLANG,
            	//-- Layout function
            	function(p) {
            		p.set_text("어학");

            	}
            );
            this.Tab0.tabHR_FRLANG.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tabHR_LICEXM,
            	//-- Layout function
            	function(p) {
            		p.set_text("자격면허");
            		p.set_enable("true");

            	}
            );
            this.Tab0.tabHR_LICEXM.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tabHR_GRTINS,
            	//-- Layout function
            	function(p) {
            		p.set_text("보증");

            	}
            );
            this.Tab0.tabHR_GRTINS.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tabHR_REWARD,
            	//-- Layout function
            	function(p) {
            		p.set_text("상벌");

            	}
            );
            this.Tab0.tabHR_REWARD.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tabED_EDRSLT,
            	//-- Layout function
            	function(p) {
            		p.set_text("교육훈련");

            	}
            );
            this.Tab0.tabED_EDRSLT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tabHR_APPOXD,
            	//-- Layout function
            	function(p) {
            		p.set_text("발령사항");

            	}
            );
            this.Tab0.tabHR_APPOXD.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tabHR_PASSRR,
            	//-- Layout function
            	function(p) {
            		p.set_text("여권");

            	}
            );
            this.Tab0.tabHR_PASSRR.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.tabHR_DUTYRR,
            	//-- Layout function
            	function(p) {
            		p.set_text("직무");

            	}
            );
            this.Tab0.tabHR_DUTYRR.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 834, 536, this.Tab0.tabHR_ATTACH,
            	//-- Layout function
            	function(p) {
            		p.set_text("파일첨부");

            	}
            );
            this.Tab0.tabHR_ATTACH.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인사정보");
            		p.set_scrollbars("none");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item33","Tab0.tabHR_MASTXD.edtSOLR_NUMB01","value","dsHR_MASTXD","SOLR_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Tab0.tabHR_MASTXM.calPCOP_JCDT","value","dsHR_MASTXD","PCOP_JCDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Tab0.tabHR_MASTXD.calWOTM_BEDE","value","dsHR_MASTXD","WEDG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","Tab0.tabHR_MASTXM.calPRON_DATE","value","dsHR_MASTXD","PRON_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtEMPL_NUMB","value","dsHR_MASTXD","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtEMPL_NAME","value","dsHR_MASTXD","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cmbWRDV_CODE","value","dsHR_MASTXD","WRDV_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtCCEM_NAME","value","dsHR_MASTXD","CCEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtENEE_NAME","value","dsHR_MASTXD","ENEE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtEMPL_AGEX","value","dsHR_MASTXD","EMPL_AGEX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cmbREDI_CODE","value","dsHR_MASTXD","REDI_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtSECT_NAME","value","dsHR_MASTXD","SECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtDEPT_NAME","value","dsHR_MASTXD","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item171","edtSECT_NAME","value","dsHR_MASTXD","SECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtCPOS_NAME","value","dsHR_MASTXD","CPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item191","edtOPOS_NAME","value","dsHR_MASTXD","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edtDURS_NAME","value","dsHR_MASTXD","DURS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edtDUTY_NAME","value","dsHR_MASTXD","DUTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtWRKS_NAME","value","dsHR_MASTXD","WRKS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtSCDN_NAME","value","dsHR_MASTXD","SCDN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Tab0.tabHR_MASTXM.edtPCOP_TERM","value","dsHR_MASTXD","PCOP_TERM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Tab0.tabHR_MASTXM.calENCO_DATE","value","dsHR_MASTXD","ENCO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Tab0.tabHR_MASTXM.edtENCO_TERM","value","dsHR_MASTXD","ENCO_TERM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Tab0.tabHR_MASTXM.calSEAS_DATE","value","dsHR_MASTXD","SEAS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Tab0.tabHR_MASTXM.edtSEAS_TERM","value","dsHR_MASTXD","SEAS_TERM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","Tab0.tabHR_MASTXM.calDEAT_DATE","value","dsHR_MASTXD","DEAT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","Tab0.tabHR_MASTXM.edtDEAT_TERM","value","dsHR_MASTXD","DEAT_TERM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item131","Tab0.tabHR_MASTXM.edtPRON_TERM","value","dsHR_MASTXD","PRON_TERM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item391","Tab0.tabHR_MASTXM.calANSD_DATE","value","dsHR_MASTXD","ANSD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item401","Tab0.tabHR_MASTXM.edtANSD_TERM","value","dsHR_MASTXD","ANSD_TERM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item242","Tab0.tabHR_MASTXM.chkPBNR_YSNO","value","dsHR_MASTXD","PBNR_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item252","Tab0.tabHR_MASTXM.calPBNR_ENDD","value","dsHR_MASTXD","PBNR_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item262","Tab0.tabHR_MASTXM.chkLBJO_YSNO","value","dsHR_MASTXD","LBJO_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item372","Tab0.tabHR_MASTXM.edtPOST_NUMB","value","dsHR_MASTXD","POST_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item382","Tab0.tabHR_MASTXM.edtDTL1_ADDR","value","dsHR_MASTXD","DTL1_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item392","Tab0.tabHR_MASTXM.edtEND2_ADDR","value","dsHR_MASTXD","END2_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item402","Tab0.tabHR_MASTXM.edtRERN_PONB","value","dsHR_MASTXD","RERN_PONB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item263","Tab0.tabHR_MASTXM.edtRGD1_ADDR","value","dsHR_MASTXD","RGD1_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item373","Tab0.tabHR_MASTXM.edtRGD2_ADDR","value","dsHR_MASTXD","RGD2_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item383","Tab0.tabHR_MASTXM.edtLEGL_PONB","value","dsHR_MASTXD","LEGL_PONB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item393","Tab0.tabHR_MASTXM.edtLED1_ADDR","value","dsHR_MASTXD","LED1_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item403","Tab0.tabHR_MASTXM.edtLED2_ADDR","value","dsHR_MASTXD","LED2_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item264","Tab0.tabHR_MASTXM.edtCOMP_TENR","value","dsHR_MASTXD","COMP_TENR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item374","Tab0.tabHR_MASTXM.edtHNPN_TENR","value","dsHR_MASTXD","HNPN_TENR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item384","Tab0.tabHR_MASTXM.edtOHOM_TENR","value","dsHR_MASTXD","OHOM_TENR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item394","Tab0.tabHR_MASTXM.edtELTR_MLAD","value","dsHR_MASTXD","ELTR_MLAD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item395","Tab0.tabHR_MASTXM.cmbBLTP_CODE","value","dsHR_MASTXD","BLTP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item386","Tab0.tabHR_MASTXM.calREAL_BIRT","value","dsHR_MASTXD","REAL_BIRT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item396","Tab0.tabHR_MASTXM.cmbSLCA_CODE","value","dsHR_MASTXD","SLCA_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item267","Tab0.tabHR_MASTXM.calWEAN_DATE","value","dsHR_MASTXD","WEAN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item387","Tab0.tabHR_MASTXM.cmbRLGN_CODE","value","dsHR_MASTXD","RLGN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item397","Tab0.tabHR_MASTXM.edtEMPL_HOBY","value","dsHR_MASTXD","EMPL_HOBY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item407","Tab0.tabHR_MASTXM.edtEMPL_SPEC","value","dsHR_MASTXD","EMPL_SPEC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item288","Tab0.tabHR_MASTXD.cmbHALT_CODE","value","dsHR_MASTXD","HALT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item298","Tab0.tabHR_MASTXD.cmbDEDY_CODE","value","dsHR_MASTXD","DEDY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item308","Tab0.tabHR_MASTXD.cmbDEGC_CODE","value","dsHR_MASTXD","DEGC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item318","Tab0.tabHR_MASTXD.calHAAD_DATE","value","dsHR_MASTXD","HAAD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item279","Tab0.tabHR_MASTXD.cmbSVIM_YSNO","value","dsHR_MASTXD","SVIM_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item329","Tab0.tabHR_MASTXD.cmbREDN_CODE","value","dsHR_MASTXD","REDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item339","Tab0.tabHR_MASTXD.edtRCMP_NUMB","value","dsHR_MASTXD","RCMP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item369","Tab0.tabHR_MASTXD.cmbMLGN_CODE","value","dsHR_MASTXD","MLGN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item429","Tab0.tabHR_MASTXD.edtSOLR_NUMB","value","dsHR_MASTXD","SOLR_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item439","Tab0.tabHR_MASTXD.cmbKMIL_CODE","value","dsHR_MASTXD","KMIL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item449","Tab0.tabHR_MASTXD.cmbBOTS_CODE","value","dsHR_MASTXD","BOTS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item459","Tab0.tabHR_MASTXD.edtENLS_DATE","value","dsHR_MASTXD","ENLS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item469","Tab0.tabHR_MASTXD.edtLVAM_DATE","value","dsHR_MASTXD","LVAM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item479","Tab0.tabHR_MASTXD.cmbDICL_CODE","value","dsHR_MASTXD","DICL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item509","Tab0.tabHR_MASTXD.edtRGD2_ADDR","value","dsHR_MASTXD","RGD2_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medRERN_NUMB_value","medRERN_NUMB","value","dsHR_MASTXD","RERN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab0.tabHR_MASTXM.chkPBNR_YSNO","value","dsHR_MASTXD","PBNR_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdoDRCR_GUBN_value","Tab0.tabHR_MASTXM.rdoMARG_YSNO","value","dsHR_MASTXD","MARG_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Tab0.tabHR_MASTXM.edtHOFM_RELA","value","dsHR_MASTXD","HOFM_RELA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Tab0.tabHR_MASTXM.edtHOFM_NAME","value","dsHR_MASTXD","HOFM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Tab0.tabHR_MASTXD.edtHALT_PROW","value","dsHR_MASTXD","HALT_PROW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Tab0.tabHR_MASTXD.cmbMAMR_CODE","value","dsHR_MASTXD","MAMR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Tab0.tabHR_MASTXD.edtHDPP_NAME","value","dsHR_MASTXD","HDPP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Tab0.tabHR_MASTXD.calRCMP_DATE","value","dsHR_MASTXD","RCMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Tab0.tabHR_MASTXD.edtMNOM_NAME","value","dsHR_MASTXD","MNOM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Tab0.tabHR_MASTXD.cmbDICL_CODE00","value","dsHR_MASTXD","DICL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Tab0.tabHR_MASTXD.cmbKMIL_CODE00","value","dsHR_MASTXD","KMIL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","Tab0.tabHR_MASTXD.cmbMLGN_CODE00","value","dsHR_MASTXD","MLGN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Tab0.tabHR_MASTXD.cmbBOTS_CODE00","value","dsHR_MASTXD","BOTS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","Tab0.tabHR_MASTXD.cmbMLGN_CODE01","value","dsHR_MASTXD","MLGN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Tab0.tabHR_MASTXD.edtSOLR_NUMB00","value","dsHR_MASTXD","SOLR_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","Tab0.tabHR_MASTXD.edtRCPS_RELA","value","dsHR_MASTXD","RCPS_RELA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","Tab0.tabHR_MASTXD.edtRCPS_TLNM","value","dsHR_MASTXD","RCPS_TLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","Tab0.tabHR_MASTXD.cmbKMIL_CODE01","value","dsHR_MASTXD","KMIL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","calPCOP_JCDT","value","dsHR_MASTXD","PCOP_JCDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","calENCO_DATE","value","dsHR_MASTXD","ENCO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Tab0.tabHR_MASTXD.cmbCLSS_CODE","value","dsHR_MASTXD","CLSS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Tab0.tabHR_MASTXD.cmbHUSF_CODE","value","dsHR_MASTXD","HUSF_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","Tab0.tabHR_MASTXD.cmbHUSO_CODE","value","dsHR_MASTXD","HUSO_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","Tab0.tabHR_MASTXD.edtCIRP_EMNR","value","dsHR_MASTXD","CIRP_EMNR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","Tab0.tabHR_MASTXD.edtCIRP_NAME","value","dsHR_MASTXD","CIRP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","Tab0.tabHR_MASTXD.edtHPJ1_CNTT","value","dsHR_MASTXD","HPJ1_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","Tab0.tabHR_MASTXD.edtHPJ2_CNTT","value","dsHR_MASTXD","HPJ2_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","Tab0.tabHR_MASTXD.edtHOP1_ARNM","value","dsHR_MASTXD","HOP1_ARNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","Tab0.tabHR_MASTXD.edtHOP2_ARNM","value","dsHR_MASTXD","HOP2_ARNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","Tab0.tabHR_MASTXD.edtRCPS_NAME","value","dsHR_MASTXD","RCPS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","Tab0.tabHR_MASTXD.edtRCPC_NAME","value","dsHR_MASTXD","RCPC_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","Tab0.tabHR_MASTXD.calENLS_DATE","value","dsHR_MASTXD","ENLS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","Tab0.tabHR_MASTXD.calLVAM_DATE","value","dsHR_MASTXD","LVAM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","Tab0.tabHR_MASTXD.cmbLVTY_CODE","value","dsHR_MASTXD","LVTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","calRETR_DATE","value","dsHR_MASTXD","RETR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Tab0.tabHR_MASTXM.edtEMPL_HEGT","value","dsHR_MASTXD","EMPL_HEGT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","Tab0.tabHR_MASTXM.edtBODY_WEGT","value","dsHR_MASTXD","BODY_WEGT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","Tab0.tabHR_MASTXM.edtLEFT_SGHT","value","dsHR_MASTXD","LEFT_SGHT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","Tab0.tabHR_MASTXM.edtRIGH_SGHT","value","dsHR_MASTXD","RIGH_SGHT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","chkOVSV_YSNO","value","dsHR_MASTXD","OVSV_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","Tab0.tabHR_MASTXM.calTEMT_DATE","value","dsHR_MASTXD","TEMT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item66","Tab0.tabHR_MASTXM.edtDTL2_ADDR","value","dsHR_MASTXD","DTL2_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item65","Tab0.tabHR_MASTXM.edtDTL1_ADDR","value","dsHR_MASTXD","DTL1_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","Tab0.tabHR_MASTXM.edtEND1_ADDR","value","dsHR_MASTXD","END1_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item68","Tab0.tabHR_MASTXM.edtENPT_NUMB","value","dsHR_MASTXD","ENPT_NUMB");
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
        this.addIncludeScript("HRMB0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("HRMB0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("HRMB0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRMB0010 인사정보
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.22     안윤준     Initial Created.
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
         *  화면 변수 선언부
         *********************/
        this.sBUTTONLIST    = "TTTTTTFT";
        this.sPACKAGENAME   = "HRMB0010";
        this.sKeyValue      = new Array();
        this.sSERVERDATE    = this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);
        this.objDate        = new Date(); // 파일 세션 리로드용도
        this.sPhotoPath     = "";

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
        this.MAS1_INDEX = 0; //인사기본
        this.MAS2_INDEX = 1; //개인신상
        this.EDUC_INDEX = 2; //학력
        this.BFCR_INDEX = 3; //경력
        this.FAMY_INDEX = 4; //가족사항
        this.FLNG_INDEX = 5; //외국어
        this.LICN_INDEX = 6; //자격

        /*****************************************************************************************************
         *                                         공통 Event 처리 부분                                      *
         ****************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
            
            if ( this.sUSERLAVEL == "1" ) {
                this.sBUTTONLIST    = "TTTTTTFT";
                
            } else {
                this.sBUTTONLIST    = "TTFFFFFF";
                
            }

            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetComboDs(this.dsCombo);
            this.fn_EnableLevel(this.sUSERLAVEL);
            this.cmbSHRWODN_CODE.set_value(1);
            
            if ( this.sUSERLAVEL == "1" ) {
                this.edtSHREMPL_NAME.setFocus();
                
                if(typeof (this.getOwnerFrame()["openParameter"]) != "undefined" && (this.getOwnerFrame()["openParameter"]).length> 0 ) {
                    var openParameter = this.getOwnerFrame()["openParameter"];
                    this.fn_Search();
                    
                }
                
            } else if ( this.sUSERLAVEL == "5" ) {
                this.fnc_FormatResidentNumber(this.medRERN_NUMB);
                this.fnc_FormatResidentNumber(this.Tab0.tabHR_FAMILY.grdHR_FAMILY, "FMLY_SSEC");
                
                this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
                this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
                
                if(typeof (this.getOwnerFrame()["openParameter"]) != "undefined" && (this.getOwnerFrame()["openParameter"]).length> 0 ) {
                    var openParameter = this.getOwnerFrame()["openParameter"];
                    this.edtSHREMPL_NUMB.set_value(openParameter[0]);
                    this.edtSHREMPL_NAME.set_value(openParameter[1]);
                    
                }
                
                this.fn_Search();
                
            } else { // 2,3,4 부문,소속,부서에 관련해서
                this.fnc_FormatResidentNumber(this.medRERN_NUMB);
                this.fnc_FormatResidentNumber(this.Tab0.tabHR_FAMILY.grdHR_FAMILY, "FMLY_SSEC");
                
                this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
                this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
                
                if(typeof (this.getOwnerFrame()["openParameter"]) != "undefined" && (this.getOwnerFrame()["openParameter"]).length> 0 ) {
                    var openParameter = this.getOwnerFrame()["openParameter"];
                    this.edtSHRDEPT_CODE.set_value(openParameter[2]);
                    this.edtSHRDEPT_NAME.set_value(openParameter[3]);
                    
                }
                
                this.fn_Search();
                
            }
            
        }

        /*-------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時    |
         --------------------------------------*/
        this.fn_End = function (obj) {
            this.close();

        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時    |
         +--------------------------*/
        this.fn_Search = function (obj) {

            if (!this.fn_searchItemCheck()) return;

            this.fnc_DatasetClear("dsHR_MASTXM");
            this.fn_Cleardataset();

            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------------------+
         |  04.입력(신규) 버튼 클릭 時    |
         +----------------------------------*/
        this.fn_Input = function (obj) {

            //입력은 한건씩 처리
            if (this.fnc_ToUpper(this.dsHR_MASTXM.getRowType(this.dsHR_MASTXM.rowposition)) == Dataset.ROWTYPE_INSERT){
                this.fnc_Message("HRM050");
                return ;
            }
            
            if (this.fnc_DatasetChangeCheck("dsHR_MASTXD,dsHR_SCHCRR,dsHR_BFCARR,dsHR_FAMILY,dsHR_LICEXM,dsHR_FRLANG,dsHR_REWARD,dsHR_DISCIP,dsHR_PASSRR,dsHR_VISARR,dsHR_DUTYRR,dsHR_ATTACH")) {
                if (this.fnc_Message("TMM023") == false) {
                    return ;
                }
            }

            var iRow = this.dsHR_MASTXM.insertRow(this.dsHR_MASTXM.rowposition + 1);
            var iRow2 = this.dsHR_MASTXD.insertRow();
            this.dsHR_MASTXM.set_rowposition(iRow);
            this.dsHR_MASTXD.set_rowposition(iRow2);

            this.Tab0.tabHR_MASTXM.rdoMARG_YSNO.set_index(0); // 결혼유무
            this.edtEMPL_NAME.setFocus();
        }

        /*-----------------------------------+
         |  05.삭제(제거) 버튼 클릭 時    |
         +----------------------------------*/
        this.fn_Delete = function (obj) {

            if (this.fn_DeleteCheck(this.dsHR_MASTXM)) {
                this.dsHR_MASTXD.set_enableevent( false );
                this.dsHR_MASTXM.set_enableevent( false );
                this.dsHR_MASTXD.deleteRow(this.dsHR_MASTXD.rowposition);
                this.dsHR_MASTXM.deleteRow(this.dsHR_MASTXM.rowposition);
                this.dsHR_MASTXD.set_enableevent( true );
                this.dsHR_MASTXM.set_enableevent( true );
                this.grdHR_MASTXM.setFocus();
            }
        }

        /*----------------------------+
         |  06.취소 버튼 클릭 時    |
         ----------------------------*/
        this.fn_Cancel = function (obj) {
         
            var CancelChk  = "dsHR_MASTXM,dsHR_MASTXD";
                CancelChk += ",dsHR_BFCARR"; //경력사항
                CancelChk += ",dsHR_SCHCRR"; //학력사항
                CancelChk += ",dsHR_FAMILY"; //가족사항
                CancelChk += ",dsHR_LICEXM"; //자격면허
                CancelChk += ",dsHR_FRLANG"; //외국어
                CancelChk += ",dsHR_REWARD"; //상벌
                CancelChk += ",dsHR_DISCIP"; //징벌        
        		CancelChk += ",dsHR_PASSRR"; //여권 
        		CancelChk += ",dsHR_VISARR"; //비자 
        		CancelChk += ",dsHR_DUTYRR"; //직무
        		CancelChk += ",dsHR_ATTACH"; //파일첨부

            this.fnc_DataSetCancel(CancelChk);
            this.grdHR_MASTXM.setFocus();

        }

        /*----------------------------+
         |  07.저장 버튼 클릭 時    |
         -----------------------------*/
        this.fn_Save = function (obj) {

            if (!this.fn_SaveItemCheck()) return;

            this.sKeyValue[0] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition,"EMPL_NUMB");
            this.sKeyValue[1] = this.fnc_Trim(this.dsHR_MASTXD.getColumn(this.dsHR_MASTXD.rowposition,"EMPL_NAME"));
            this.sKeyValue[2] = this.fnc_Trim(this.dsHR_MASTXD.getColumn(this.dsHR_MASTXD.rowposition,"RERN_NUMB"));
        	
            var sMethodName = "SAVE00";
            var sInDataSet  = "dsHR_MASTXM=dsHR_MASTXM:U ";
                sInDataSet += "dsHR_MASTXD=dsHR_MASTXD:U ";
                sInDataSet += "dsFL_ATTACH=dsFL_ATTACH:U "; //사진등록
                sInDataSet += "dsHR_BFCARR=dsHR_BFCARR:U "; //경력사항
                sInDataSet += "dsHR_LICEXM=dsHR_LICEXM:U "; //자격면허
                sInDataSet += "dsHR_FAMILY=dsHR_FAMILY:U "; //가족사항
                sInDataSet += "dsHR_SCHCRR=dsHR_SCHCRR:U "; //학력사항;
                sInDataSet += "dsHR_FRLANG=dsHR_FRLANG:U "; //어학사항
                sInDataSet += "dsHR_REWARD=dsHR_REWARD:U "; // TAb09(상벌) 포상
                sInDataSet += "dsHR_DISCIP=dsHR_DISCIP:U "; // TAb09(상벌) 징계
                sInDataSet += "dsHR_PASSRR=dsHR_PASSRR:U "; // TAb12(여권) 여권
                sInDataSet += "dsHR_VISARR=dsHR_VISARR:U "; // TAb12(여권) 비자
                sInDataSet += "dsHR_DUTYRR=dsHR_DUTYRR:U "; // TAb13(직무)
                sInDataSet += "dsHR_ATTACH=dsHR_ATTACH:U "; // TAb16(파일첨부)

                //변경이력 자동생성을위해 따로 모두 보냄
                sInDataSet += "dsHR_MASTXD_ALL=dsHR_MASTXD ";
                sInDataSet += "dsHR_BFCARR_ALL=dsHR_BFCARR "; //경력사항
                sInDataSet += "dsHR_LICEXM_ALL=dsHR_LICEXM "; //자격면허
                sInDataSet += "dsHR_FAMILY_ALL=dsHR_FAMILY "; //가족사항
                sInDataSet += "dsHR_SCHCRR_ALL=dsHR_SCHCRR "; //학력사항
                sInDataSet += "dsHR_FRLANG_ALL=dsHR_FRLANG "; //어학사항
                
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*----------------------------+
         |  08.엑셀 버튼 클릭 時    |
         -----------------------------*/
        this.fn_ToExcel = function (obj) {
            this.fnc_ToExcel(this.name);

        }

        /*----------------------------+
         |  09.인쇄 버튼 클릭 時    |
         +----------------------------*/
        this.fn_Print = function (obj) {
            
            var reportfile  = "/hrm/HRMB0010R01.jrf";
            var sFILE_PATH  = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "FILE_PATH");
            var sFile       = this.fnc_SubStr(sFILE_PATH, sFILE_PATH.lastIndexOf("/")+1);
            
            var sHISL_NAME = "";
            for ( var i=0; i<this.dsHR_SCHCRR.getRowCount(); i++ ) {
                if ( this.dsHR_SCHCRR.getColumn(i, "HISL_YSNO") == "1" ){
                    sHISL_NAME = this.dsHR_SCHCRR.getColumn(i, "SCDN_NAME");
                }
            }
            
            var params  ="#EMPL_PIC#" + application.GBL_HTTPURL + "/core/erp/com/ComImageView.do?path=EMPL_PIC&name="+sFile;
                params +="#sHISL_NAME#" + sHISL_NAME; 
            
            var dataref = new Array();
            
            dataref[0]            = new Object();
            dataref[0].type       = "TRAN";
            dataref[0].svcUrl     = "/core/erp/hrm/HRMB0010_SEARCH01.do";
            dataref[0].inDataset  = "";
            dataref[0].outDataset = "dsHR_MASTXD=dsHR_MASTXD dsHR_BFCARR=dsHR_BFCARR dsHR_APPOXD=dsHR_APPOXD dsHR_LICEXM=dsHR_LICEXM dsHR_FAMILY=dsHR_FAMILY dsHR_SCHCRR=dsHR_SCHCRR ";
            dataref[0].arg = this.fn_CreateArgument("REPORT00");
            
            var reportOptions               = new Object;
                reportOptions.title         = "인사정보";                       // 인쇄물 타이틀. 저장 시 파일명으로도 사용됩니다.
                reportOptions.loadCallback  = "fn_PopupReportLoadFinish";   // 인쇄물 미리보기 화면이 로드 된 후 실행할 함수명입니다.
                reportOptions.saveEnable    = false;                            // 저장 버튼 표시여부. true or false
                reportOptions.saveCallback  = "fn_WhenSaveEnd";             // 리포트를 파일로 저장한 후 실행할 함수입니다.
                reportOptions.printEnable   = true;                         // 인쇄 버튼 표시여부. true or false
                reportOptions.printCallback = "fn_WhenPrintEnd";            // 리포트 인쇄 후 실행할 함수입니다.
            
            this.fn_UbiReport(reportfile, params, dataref, reportOptions);
        }

        /*-----------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항    |
         +----------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
            if(e.fromobject instanceof Div) return;
            var sMessage = this.fnc_FormUnloadCheck("dsHR_MASTXM,dsHR_MASTXD,dsHR_BFCARR,dsHR_LICEXM,dsHR_FAMILY,dsHR_SCHCRR,dsHR_FRLANG,dsHR_REWARD,dsHR_DISCIP,dsHR_PASSRR,dsHR_VISARR,dsHR_DUTYRR,dsHR_ATTACH",this);
            if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
            this.fnc_FormUnload(obj,e);

        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e){
            this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*--------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
        this.fn_EditFocus = function (obj){
            this.fnc_EditFocus(obj);

        }
        /****************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*----------------------+
         |  조회 필수 체크!   |
         +---------------------*/
        this.fn_searchItemCheck = function () {

            if (this.fnc_DatasetChangeCheck("dsHR_MASTXD,dsHR_SCHCRR,dsHR_BFCARR,dsHR_FAMILY,dsHR_LICEXM,dsHR_FRLANG,dsHR_REWARD,dsHR_DISCIP,dsHR_PASSRR,dsHR_VISARR,dsHR_DUTYRR,dsHR_ATTACH")) {
                if (this.fnc_Message("TMM023") == false) {
                    return false;
                }
            }

            return true;

        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function (obj) {

            if (obj.getRowCount() < 1) {
                this.fnc_Message("TMM007");
                return false;
            }

            var iSelectRowCount = 0;
            var sQuestionText = "";

            if (obj.name == "dsHR_SCHCRR") { // 학력사항
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR);
                sQuestionText   = "학교명: " + this.dsHR_SCHCRR.getColumn(this.dsHR_SCHCRR.rowposition, "SCHL_NAME");
                
            } else if (obj.name == "dsHR_BFCARR") { // 경력사항
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_BFCARR.grdHR_BFCARR);
                sQuestionText   = "근무처: " + this.dsHR_BFCARR.getColumn(this.dsHR_BFCARR.rowposition, "WORK_ORGT");
                
            } else if (obj.name == "dsHR_FAMILY") { // 가족사항
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_FAMILY.grdHR_FAMILY);
                sQuestionText   = "성명: " + this.dsHR_FAMILY.getColumn(this.dsHR_FAMILY.rowposition, "FMLY_NAME");
                
            } else if (obj.name == "dsHR_LICEXM") { // 자격면허
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_LICEXM.grdHR_LICEXM);
                sQuestionText   = "자격면허: " + this.dsHR_LICEXM.getColumn(this.dsHR_LICEXM.rowposition, "LICE_CDNM");
                
            } else if (obj.name == "dsHR_FRLANG") { // 외국어
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_FRLANG.grdHR_FRLANG);
                sQuestionText   = "외국어 : "+this.dsHR_FRLANG.getColumn(this.dsHR_FRLANG.rowposition, "KFLG_CODE");
                sQuestionText  += " "+this.Tab0.tabHR_FRLANG.grdHR_FRLANG.getCellText(this.Tab0.tabHR_FRLANG.grdHR_FRLANG.currentrow, this.Tab0.tabHR_FRLANG.grdHR_FRLANG.getBindCellIndex("body", "EXMN_DATE")) ;
                
            } else if (obj.name == "dsHR_REWARD") { // 상벌(포상)
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_REWARD.grdHR_REWARD);
                sQuestionText   = "포상: " + this.dsHR_REWARD.getColumn(this.dsHR_REWARD.rowposition, "RWDN_GUBN");
                
            } else if (obj.name == "dsHR_DISCIP") { // 상벌(징계)
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_REWARD.grdHR_DISCIP);
                var sCOMD_CDNM 	= this.dsMEPY_CODE.findRow("COMD_CODE" , this.dsHR_DISCIP.getColumn(this.dsHR_DISCIP.rowposition, "DIAA_MTTR"));
                sQuestionText   = "징계명: " + this.dsMEPY_CODE.getColumn(sCOMD_CDNM, "COMD_CDNM");
                
            } else if (obj.name == "dsHR_PASSRR") { // 여권(여권)
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_PASSRR.grdHR_PASSRR);
                sQuestionText   = "여권번호: " + this.dsHR_PASSRR.getColumn(this.dsHR_PASSRR.rowposition, "PSSP_NUMB");
                
            } else if (obj.name == "dsHR_VISARR") { // 여권(비자)
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_PASSRR.grdHR_VISARR);
                sQuestionText   = "비자국가명: " + this.dsHR_VISARR.getColumn(this.dsHR_VISARR.rowposition, "VISN_NAME");
                
            } else if (obj.name == "dsHR_DUTYRR") { // 직무
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_DUTYRR.grdHR_DUTYRR);
                sQuestionText   = "기준일: " + this.dsHR_DUTYRR.getColumn(this.dsHR_DUTYRR.rowposition, "DUTY_DATE");
                
            } else if (obj.name == "dsHR_ATTACH") { // 파일첨부
                iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tabHR_ATTACH.grdHR_ATTACH);
                sQuestionText   = this.dsHR_ATTACH.getColumn(this.dsHR_ATTACH.rowposition, "LFIL_NAME");

            } else if (obj.name == "dsHR_MASTXM") { // 인사기본사항
                if (this.dsHR_APPOXD.getRowCount() > 0) {
                    this.fnc_Message("TMM146", "발령사항");
                    return false;
                }
                iSelectRowCount = 1;
                sQuestionText   = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NAME");
            }

            if (iSelectRowCount > 1) {
                return this.fnc_Message("TMM004", iSelectRowCount);
            } else  {
                return this.fnc_Message("TMM002", sQuestionText);
            }

        }

        /*-----------------------+
         |  저장 여부 체크!    |
         +-----------------------*/
        this.fn_SaveItemCheck = function () {
            
            if (!this.fnc_DatasetChangeCheck("dsHR_MASTXD,dsHR_SCHCRR,dsHR_BFCARR,dsHR_FAMILY,dsHR_LICEXM,dsHR_FRLANG,dsHR_REWARD,dsHR_DISCIP,dsHR_PASSRR,dsHR_VISARR,dsHR_DUTYRR,dsHR_ATTACH")) {
                this.fnc_Message("TMM003");
                return false;

            }

            for (var i = 0; i < this.dsHR_MASTXD.getRowCount(); i++) { //

                if (this.fnc_ToUpper(this.dsHR_MASTXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

                if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXD.getColumn(i, "EMPL_NAME"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "성명", this.dsHR_MASTXD, i, this.edtEMPL_NAME, "");
                }
                
                if ( this.dsHR_MASTXD.getColumn(i, "OVSV_YSNO") != "1" ) {
                    if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXD.getColumn(i, "RERN_NUMB"))) < 13 ) {
                        return this.fnc_CheckPostAction("TMM072", "주민번호", this.dsHR_MASTXD, i, this.medRERN_NUMB, "");
                    }
                    
                    // TODO 주민번호
                    if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXD.getColumn(i, "RERN_NUMB"))) == 13 ) {
                        var sJUNO_RGST = this.fnc_Replace(this.dsHR_MASTXD.getColumn(i, "RERN_NUMB"), "-");
                        // 올바른 주민번호 체크
                        if (!this.fnc_ResidenceNumberCheck(sJUNO_RGST)) {
                            return this.fnc_CheckPostAction("TMM009", "주민번호", this.dsHR_MASTXD, i, this.medRERN_NUMB, "");
                        }
                    }
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXD.getColumn(i, "WRDV_CODE"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "직원구분", this.dsHR_MASTXD, i, this.cmbWRDV_CODE, "");
                }

            }
            
            var iLTSC_YSNO = 0;
            var bChk = 1;

            for (var i = 0; i < this.dsHR_SCHCRR.getRowCount(); i++){ // 학력사항

                bChk = 0;
                if (this.dsHR_SCHCRR.getColumn(i, "HISL_YSNO") == "1")  iLTSC_YSNO++;

                if (this.fnc_ToUpper(this.dsHR_SCHCRR.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

                if (this.fnc_Length(this.fnc_Trim(this.dsHR_SCHCRR.getColumn(i, "SCDN_CODE"))) < 1) {
                    this.Tab0.set_tabindex(this.EDUC_INDEX);
                    return this.fnc_CheckPostAction("TMM072", "학력", this.dsHR_SCHCRR, i, this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR, "SCDN_CODE");
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsHR_SCHCRR.getColumn(i, "ENIS_DATE"))) < 6) {
                    this.Tab0.set_tabindex(this.EDUC_INDEX);
                    return this.fnc_CheckPostAction("TMM072", "입학일", this.dsHR_SCHCRR, i, this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR, "ENIS_DATE");
                }
                
            }

            if (iLTSC_YSNO == 0 && bChk == 0) {
                this.Tab0.set_tabindex(this.EDUC_INDEX);
                return this.fnc_CheckPostAction("TMM072", "최종학교여부", this.dsHR_SCHCRR, i, this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR, "HISL_YSNO");
            } else if (iLTSC_YSNO > 1) {
                this.Tab0.set_tabindex(this.EDUC_INDEX);
                return this.fnc_CheckPostAction("HR1022", "", this.dsHR_SCHCRR, i, this.Tab0.tabHR_SCHCRR.chkLTSC_YSNO, "");
            }

            for (var i = 0; i < this.dsHR_BFCARR.getRowCount(); i++) { // 경력사항

                if (this.fnc_ToUpper(this.dsHR_BFCARR.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

                if (this.fnc_Length(this.fnc_Trim(this.dsHR_BFCARR.getColumn(i, "WORK_ORGT"))) < 1) {
                    this.Tab0.set_tabindex(this.BFCR_INDEX);
                    return this.fnc_CheckPostAction("TMM072", "근무처", this.dsHR_BFCARR, i, this.Tab0.tabHR_BFCARR.grdHR_BFCARR, "WORK_ORGT");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsHR_BFCARR.getColumn(i, "ENCO_DATE"))) < 1) {
                    this.Tab0.set_tabindex(this.BFCR_INDEX);
                    return this.fnc_CheckPostAction("TMM072", "입사일", this.dsHR_BFCARR, i, this.Tab0.tabHR_BFCARR.grdHR_BFCARR, "ENCO_DATE");
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsHR_BFCARR.getColumn(i, "RETR_DATE"))) < 1) {
                    this.Tab0.set_tabindex(this.BFCR_INDEX);
                    return this.fnc_CheckPostAction("TMM072", "퇴사일", this.dsHR_BFCARR, i, this.Tab0.tabHR_BFCARR.grdHR_BFCARR, "RETR_DATE");
                } 
                
                if (this.fnc_Trim(this.dsHR_BFCARR.getColumn(i, "ENCO_DATE")) > this.fnc_Trim(this.dsHR_BFCARR.getColumn(i, "RETR_DATE"))) {
                    this.Tab0.set_tabindex(3);
                    return this.fnc_SearchCheckPostAction("TMM042", "입사일, 퇴사일", this.Tab0.tabHR_PASSRR.grdHR_BFCARR);
                }

            }

            for (var i = 0; i < this.dsHR_FAMILY.getRowCount(); i++) { // 가족사항

                if (this.fnc_ToUpper(this.dsHR_FAMILY.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

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
                
                if (this.fnc_Length(this.fnc_Trim(this.dsHR_FAMILY.getColumn(i, "FREL_CODE"))) < 1) {
                    this.Tab0.set_tabindex(this.FAMY_INDEX);
                    return this.fnc_CheckPostAction("TMM072", "관계", this.dsHR_FAMILY, i, this.Tab0.tabHR_FAMILY.grdHR_FAMILY, "FREL_CODE");
                }
            }
            
            for (var i = 0; i < this.dsHR_FRLANG.getRowCount(); i++) { // 어학

                if (this.fnc_ToUpper(this.dsHR_FRLANG.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
                
                if (this.fnc_Length(this.fnc_Trim(this.dsHR_FRLANG.getColumn(i, "OACT_CODE"))) < 1) {
                    this.Tab0.set_tabindex(this.FLNG_INDEX);
                    return this.fnc_CheckPostAction("TMM072", "공인시험구분", this.dsHR_FRLANG, i, this.Tab0.tabHR_FRLANG.grdHR_FRLANG, "OACT_CODE");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsHR_FRLANG.getColumn(i, "ACQS_DATE"))) < 1) {
                    this.Tab0.set_tabindex(this.FLNG_INDEX);
                    return this.fnc_CheckPostAction("TMM072", "어학취득일자", this.dsHR_FRLANG, i, this.Tab0.tabHR_FRLANG.grdHR_FRLANG, "ACQS_DATE");
                }
                
            }

            for (var i = 0; i < this.dsHR_LICEXM.getRowCount(); i++) { // 자격면허

                if (this.fnc_ToUpper(this.dsHR_LICEXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

                if (this.fnc_Length(this.fnc_Trim(this.dsHR_LICEXM.getColumn(i, "ACQS_DATE"))) < 1) {
                    this.Tab0.set_tabindex(this.LICN_INDEX);
                    return this.fnc_CheckPostAction("TMM072", "취득일자", this.dsHR_LICEXM, i, this.Tab0.tabHR_LICEXM.grdHR_LICEXM, "ACQS_DATE");
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsHR_LICEXM.getColumn(i, "LICE_CDNM"))) < 1) {
                    this.Tab0.set_tabindex(this.LICN_INDEX);
                    return this.fnc_CheckPostAction("TMM072", "자격면허", this.dsHR_LICEXM, i, this.Tab0.tabHR_LICEXM.grdHR_LICEXM, "LICE_CDNM");
                }

            }
            
            for ( var i = 0; i < this.dsHR_PASSRR.getRowCount(); i++ ) { // 여권
                
                if (this.fnc_ToUpper(this.dsHR_PASSRR.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
                
                if (this.fnc_Length(this.fnc_Trim(this.dsHR_PASSRR.getColumn(i, "PSSP_NUMB"))) < 1) {
                    this.Tab0.set_tabindex(11);
                    return this.fnc_CheckPostAction("TMM072", "여권번호", this.dsHR_PASSRR, i, this.Tab0.tabHR_PASSRR.grdHR_PASSRR, "PSSP_NUMB");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsHR_PASSRR.getColumn(i, "ISSU_DATE"))) < 1) {
                    this.Tab0.set_tabindex(11);
                    return this.fnc_CheckPostAction("TMM072", "[여권]발급일", this.dsHR_PASSRR, i, this.Tab0.tabHR_PASSRR.grdHR_PASSRR, "ISSU_DATE");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsHR_PASSRR.getColumn(i, "EXPI_DATE"))) < 1) {
                    this.Tab0.set_tabindex(11);
                    return this.fnc_CheckPostAction("TMM072", "[여권]만료일", this.dsHR_PASSRR, i, this.Tab0.tabHR_PASSRR.grdHR_PASSRR, "EXPI_DATE");
                }
                
                if (this.fnc_Trim(this.dsHR_PASSRR.getColumn(i, "ISSU_DATE")) > this.fnc_Trim(this.dsHR_PASSRR.getColumn(i, "EXPI_DATE"))) {
                    this.Tab0.set_tabindex(11);
                    return this.fnc_SearchCheckPostAction("TMM042", "[여권]발급일,[여권]만료일", this.Tab0.tabHR_PASSRR.grdHR_PASSRR);
                }
                
            }
            
            for ( var i = 0; i < this.dsHR_VISARR.getRowCount(); i++ ) { // 비자
                
                if (this.fnc_ToUpper(this.dsHR_VISARR.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
                
                if (this.fnc_Length(this.fnc_Trim(this.dsHR_VISARR.getColumn(i, "VISN_CODE"))) < 1) {
                    this.Tab0.set_tabindex(11);
                    return this.fnc_CheckPostAction("TMM072", "비자발급국가", this.dsHR_VISARR, i, this.Tab0.tabHR_PASSRR.grdHR_VISARR, "VISN_CODE");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsHR_VISARR.getColumn(i, "EXPI_DATE"))) < 1) {
                    this.Tab0.set_tabindex(11);
                    return this.fnc_CheckPostAction("TMM072", "[비자]만료일", this.dsHR_VISARR, i, this.Tab0.tabHR_PASSRR.grdHR_VISARR, "EXPI_DATE");
                }
                
            }

            return true;

        }

        /*----------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!    |
         +----------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

            var sReturnString;

            if (sKind == "SEARCH00") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); // 부서코드
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); // 사원번호/성명
                sReturnString += " WRDV_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWRDV_CODE.value)); // 직원구분
                sReturnString += " WODN_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRWODN_CODE.value)); // 재직구분

            } else if (sKind == "SEARCH01") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
                sReturnString += " FILE_IDXX="  + this.fnc_Quote(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "FILE_IDXX"));
                sReturnString += " AUTH_LEVEL=" + this.fnc_Quote(this.sUSERLAVEL); //유저권한레벨

            } else if ( sKind == "REPORT00") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
                
            } else if (sKind == "SAVE00") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);

            }
            
            return sReturnString;

        }

        /*------------------------=-----------------+
         |  Transaction 후 처리 해야 할 내용!     |
         +------------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

            if (ErrorCode < 0) {
                if (application.GBL_SESSONCHK == "E0001") {
                    this.fnc_ErrorProcess(ErrorCode, ErrorMSG);

                } else  {
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
                this.fnc_Information(this.stInformation, this.dsHR_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                this.fnc_Message("TMM018", this.dsHR_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
                
                if (this.dsHR_MASTXM.getRowCount() < 1) {
                    this.fn_Cleardataset();
                    return false;
                }
                
                if ( this.sKeyValue[0] != "" ) {
                    var irow = this.dsHR_MASTXM.findRow("EMPL_NUMB",this.sKeyValue[0]);
                    this.sKeyValue[0] = "";
                    if(irow<0) irow=0;
                    this.dsHR_MASTXM.set_rowposition(irow);
                } 
                
                if ( this.fnc_Trim(this.sKeyValue[0]) == "" ) {
        			var irow = this.dsHR_MASTXM.findRowExpr("EMPL_NAME =='"+this.sKeyValue[1]+"'&& RERN_NUMB =='"+this.sKeyValue[2]+"'");
        			this.sKeyValue[0] = this.sKeyValue[1] = this.sKeyValue[2] = "";
        			if(irow<0) irow = 0;
        			this.dsHR_MASTXM.set_rowposition(irow);
                }
                
                if(typeof (this.getOwnerFrame()["openParameter"]) != "undefined" && (this.getOwnerFrame()["openParameter"]).length> 0 ) {
                    var openParameter = this.getOwnerFrame()["openParameter"];
                    var irow = this.dsHR_MASTXM.findRow("EMPL_NUMB",openParameter[0]);
                    if(irow<0) irow=0;
                    this.dsHR_MASTXM.set_rowposition(irow);
                    
                }
                
                if ( this.fnc_Length(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "FILE_PATH")) > 0 ){
                    var objDate = new Date();
                    var sFILE_PATH  = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "FILE_PATH");
                    var sFile       = this.fnc_SubStr(sFILE_PATH, sFILE_PATH.lastIndexOf("/")+1);
                    this.imgPHOT_FILE.set_image(application.GBL_HTTPURL + "/core/erp/com/ComImageView.do?path=EMPL_PIC&name="  + sFile + "&sTime=" + objDate.getTime());
                    this.FileUpload.style.set_buttontext("변경");
                    
                } else {
                    this.imgPHOT_FILE.set_image("theme://images/img_WF_user.png");
                    this.FileUpload.style.set_buttontext("등록");
                    
                }

            } else if (sMethodName == "SEARCH01") {
                // 학력사항
                this.fnc_Information(this.Tab0.tabHR_SCHCRR.stInformation, this.dsHR_SCHCRR.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                // 경력사항
                this.fnc_Information(this.Tab0.tabHR_BFCARR.stInformation, this.dsHR_BFCARR.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                // 가족사항
                this.fnc_Information(this.Tab0.tabHR_FAMILY.stInformation, this.dsHR_FAMILY.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                // 어학
                this.fnc_Information(this.Tab0.tabHR_FRLANG.stInformation, this.dsHR_FRLANG.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                // 자격면허
                this.fnc_Information(this.Tab0.tabHR_LICEXM.stInformation, this.dsHR_LICEXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                // 교육훈련
                this.fnc_Information(this.Tab0.tabED_EDRSLT.stInformation, this.dsED_EDRSLT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                // 발령사항
                this.fnc_Information(this.Tab0.tabHR_APPOXD.stInformation, this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                // 여권
                this.fnc_Information(this.Tab0.tabHR_PASSRR.stInformation, this.dsHR_PASSRR.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                // 직무
                this.fnc_Information(this.Tab0.tabHR_DUTYRR.stInformation, this.dsHR_DUTYRR.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                // 파일첨부
                this.fnc_Information(this.Tab0.tabHR_ATTACH.stInformation, this.dsHR_ATTACH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

            } else if (sMethodName == "REPORT00") {
            

            } else if (sMethodName == "SAVE00") {
                this.fnc_Information(this.stInformation, 0, "SAVE");
                this.fnc_Message("TMM103");
                this.fn_KeyFieldDisible(this.dsHR_MASTXD);
                this.fn_Search();

            } else if (sMethodName == "GetCommCode") {
                var arrInt = 0;
                var arrParam     = new Array();
                    arrParam[arrInt++] = "COMBO,cmbSHRWRDV_CODE,dsSHRWRDV_CODE,0";//SHR 직원구분SHR
                    arrParam[arrInt++] = "COMBO,cmbSHRWODN_CODE,dsWODN_CODE,0";//SHR 재직구분SHR

                    arrParam[arrInt++] = "COMBO,cmbWRDV_CODE,dsWRDV_CODE,0";//Main 직원구분
                    arrParam[arrInt++] = "COMBO,cmbREDI_CODE,dsREDI_CODE,0";//Main 입사구분

                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXM.cmbBLTP_CODE,dsBLTP_CODE,0";//TAB01(개인신상) 혈액형
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXM.cmbSLCA_CODE,dsSLCA_CODE,0";//TAB01(개인신상) 양력/음력
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXM.cmbRLGN_CODE,dsRLGN_CODE,0";//TAB01(개인신상) 종교

                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbHALT_CODE,dsHALT_CODE,0";//TAB02(장애병역) 장애구분
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbDEDY_CODE,dsDEDY_CODE,0";//TAB02(장애병역) 장애등급
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbDEGC_CODE,dsDEGC_CODE,0";//TAB02(장애병역) 장애유형
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbSVIM_YSNO,dsSVIM_YSNO,0";//TAB02(장애병역) 중증여부
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbREDN_CODE,dsREDN_CODE,0";//TAB02(장애병역) 보훈구분
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbMAMR_CODE,dsFREL_CODE,0";//TAB02(장애병역) 유공자관계

                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbMLGN_CODE,dsMLGN_CODE,0";//TAB02(병역사항) 병역구분
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbKMIL_CODE,dsKMIL_CODE,0";//TAB02(병역사항) 군별
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbBOTS_CODE,dsBOTS_CODE,0";//TAB02(병역사항) 병과
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbDICL_CODE,dsDICL_CODE,0";//TAB02(병역사항) 계급
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbCLSS_CODE,dsCLSS_CODE,0";//TAB02(병역사항) 욕종
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbLVTY_CODE,dsLVTY_CODE,0";//TAB02(병역사항) 제대구분

                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbCLSS_CODE,dsCLSS_CODE,0";//TAB02(기타) 사내추천인
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbHUSF_CODE,dsHUSF_CODE,0";//TAB02(기타) 주거형태
                    arrParam[arrInt++] = "COMBO,Tab0.tabHR_MASTXD.cmbHUSO_CODE,dsHUSO_CODE,0";//TAB02(기타) 소유구분

                    arrParam[arrInt++] = "GRID,Tab0.tabHR_SCHCRR.grdHR_SCHCRR,dsSCDN_CODE,SCDN_CODE"; //TAB03(학력) 학력
                    arrParam[arrInt++] = "GRID,Tab0.tabHR_SCHCRR.grdHR_SCHCRR,dsDGDN_CODE,DGDN_CODE"; //TAB03(학력) 학위
                    arrParam[arrInt++] = "GRID,Tab0.tabHR_SCHCRR.grdHR_SCHCRR,dsMJRA_CODE,MJRA_CODE"; //TAB03(학력) 전공
                    arrParam[arrInt++] = "GRID,Tab0.tabHR_BFCARR.grdHR_BFCARR,dsCARR_GUBN,CARR_GUBN"; //TAB04(경력) 경력구분
                    arrParam[arrInt++] = "GRID,Tab0.tabHR_FAMILY.grdHR_FAMILY,dsFREL_CODE,FREL_CODE"; //TAB05(가족) 관계명
                    arrParam[arrInt++] = "GRID,Tab0.tabHR_FAMILY.grdHR_FAMILY,dsSCDN_CODE,SCCR_CODE"; //TAB05(가족) 학력
                    arrParam[arrInt++] = "GRID,Tab0.tabHR_FRLANG.grdHR_FRLANG,dsKFLG_CODE,KFLG_CODE"; //TAB06(어학) 언어구분
                    
                    arrParam[arrInt++] = "GRID,Tab0.tabHR_REWARD.grdHR_DISCIP,dsMEPY_CODE,DIAA_MTTR"; //TAB09(징계) 징계명
                    
                    arrParam[arrInt++] = "GRID,Tab0.tabHR_ATTACH.grdHR_ATTACH,dsFITY_CODE,FITY_CODE"; //TAB14(파일첨부) 파일종류
                   
                this.fnc_CommonCodeInnerBind(arrParam);
                
                this.dsFITY_CODE.filter("REF2_FILD == '1'");
                
            }

        }

        /*---------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +---------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

            if (obj.name == "dsHR_MASTXM") {
                if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_NORMAL) {
                    if(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "RERN_NUMB") == ""){
                        this.fnc_SetReadonly(this.medRERN_NUMB, false);
                    }else{
                        this.fnc_SetReadonly(this.medRERN_NUMB, true);
                    }

                }else{
                    this.fnc_SetReadonly(this.medRERN_NUMB, false);

                }

            }
        }

        
        /**
         * 팝업에서 리포트가 정상적으로 로드된 후 호출되는 함수입니다.
         */
        this.fn_PopupReportLoadFinish = function() {
            this.staStatusText.set_text("-- 팝업화면에서 리포트가 정상적으로 호출되었습니다.");
        }

        this.fn_WhenPrintEnd = function() {
            this.staStatusText.set_text("-- 인쇄가 완료되었습니다.");
        }

        this.fn_WhenSaveEnd = function() {
            this.staStatusText.set_text("-- 리포트가 파일로 저장되었습니다.");
        }

        
        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            if(obj.readonly == true) return;

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서정보조회SHR(Popup)
                arrParam[0] = "TMM0004";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDEPT_NAME";
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 사원정보조회SHR(Popup)
                arrParam[0] = "HRM0001";
                arrParam[1] = this.edtSHRDEPT_CODE.value;
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHREMPL_NAME";
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpPOST_ADDR")) { // TAB01(개인신상) 현거주지
                arrParam[0] = "COMPOST";
                arrParam[1] = "";
                arrParam[2] = "";
                arrParam[3] = "N";
                arrParam[4] = "Tab0.tabHR_MASTXM.edtDTL1_ADDR";
                arrParam[5] = "Tab0.tabHR_MASTXM.edtPOST_NUMB,Tab0.tabHR_MASTXM.edtDTL1_ADDR,Tab0.tabHR_MASTXM.edtDTL2_ADDR";
                arrParam[6] = "";
                arrParam[7] = "";
                arrParam[8] = "";
                arrParam[9] = "fn_HelpDialogeCallback1";

            } else if ((obj.name == "imgHelpRGD2_ADDR")) { // TAB01(개인신상) 주민등록주소
                arrParam[0] = "COMPOST";
                arrParam[1] = "";
                arrParam[2] = "";
                arrParam[3] = "N";
                arrParam[4] = "Tab0.tabHR_MASTXM.edtDTL1_ADDR";
                arrParam[5] = "Tab0.tabHR_MASTXM.edtRERN_PONB,Tab0.tabHR_MASTXM.edtRGD1_ADDR,Tab0.tabHR_MASTXM.edtRGD2_ADDR";
                arrParam[6] = "";
                arrParam[7] = "";
                arrParam[8] = "";
                arrParam[9] = "fn_HelpDialogeCallback2";

            } else if ((obj.name == "imgHelpLED2_ADDR")) { // TAB01(개인신상) 본적지
                arrParam[0] = "COMPOST";
                arrParam[1] = "";
                arrParam[2] = "";
                arrParam[3] = "N";
                arrParam[4] = "Tab0.tabHR_MASTXM.edtDTL1_ADDR";
                arrParam[5] = "Tab0.tabHR_MASTXM.edtLEGL_PONB,Tab0.tabHR_MASTXM.edtLED1_ADDR,Tab0.tabHR_MASTXM.edtLED2_ADDR";
                arrParam[6] = "";
                arrParam[7] = "";
                arrParam[8] = "";
                arrParam[9] = "fn_HelpDialogeCallback3";

            } else if ((obj.name == "imgHelpedtCIRP_EMNR") || (obj.name == "edtCIRP_NAME")) { // TAB02(장애병역) 사내추천인
                arrParam[0] = "HRM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.Tab0.tabHR_MASTXD.edtCIRP_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "Tab0.tabHR_MASTXD.edtCIRP_NAME";
                arrParam[5] = "Tab0.tabHR_MASTXD.edtCIRP_EMNR,Tab0.tabHR_MASTXD.edtCIRP_NAME";
                arrParam[6] = "0,1";
            
            } else if (obj.name == "grdHR_SCHCRR") { // TAB03(학력)
                if (this.fnc_getGridHelpColName(obj, sFromDs) == "SCHL_CDNM" || sColumnID == "SCHL_CDNM") { // 학교명
                    arrParam[0] = "TMM1000";
                    arrParam[1] = "SCHL_CODE";
                    arrParam[2] = "SCHL_CDNM";
                    arrParam[3] = "N";
                    arrParam[4] = "Tab0.tabHR_SCHCRR.grdHR_SCHCRR";
                    arrParam[5] = "SCHL_CODE,SCHL_CDNM";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                } else if (this.fnc_getGridHelpColName(obj, sFromDs) == "MAJR_CDNM" || sColumnID == "MAJR_CDNM") { // 전공
                    arrParam[0] = "TMM1000";
                    arrParam[1] = "MAJR_CODE";
                    arrParam[2] = "MAJR_CDNM";
                    arrParam[3] = "N";
                    arrParam[4] = "Tab0.tabHR_SCHCRR.grdHR_SCHCRR";
                    arrParam[5] = "MAJR_CODE,MAJR_CDNM";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                }
            } else if (obj.name == "grdHR_FRLANG") { // TAB06(어학)
                if (this.fnc_getGridHelpColName(obj, sFromDs) == "OACT_CDNM" || sColumnID == "OACT_CDNM" ) { // 어학
                    arrParam[0] = "TMM1000";
                    arrParam[1] = "OACT_CODE";
                    arrParam[2] = "OACT_CDNM";
                    arrParam[3] = "N";
                    arrParam[4] = "Tab0.tabHR_FRLANG.grdHR_FRLANG";
                    arrParam[5] = "OACT_CODE,OACT_CDNM,KFLG_CODE,PFSC_SCOR";
                    arrParam[6] = "0,1,2,12";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                } else if ( this.fnc_getGridHelpColName(obj, sFromDs) == "DFLG_CONM" || sColumnID == "DFLG_CONM" ) { // 등급
                    arrParam[0] = "TMM1000";
                    arrParam[1] = "DFLG_CODE";
                    arrParam[2] = "DFLG_CONM";
                    arrParam[3] = "N";
                    arrParam[4] = "Tab0.tabHR_FRLANG.grdHR_FRLANG";
                    arrParam[5] = "DFLG_CODE,DFLG_CONM";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                }
            } else if (obj.name == "grdHR_LICEXM") { // TAB07(자격면허)
                if (this.fnc_getGridHelpColName(obj, sFromDs) == "LICE_CDNM" || sColumnID == "LICE_CDNM" ) { // 자격면허명
                    arrParam[0] = "TMM1000";
                    arrParam[1] = "LICE_CODE";
                    arrParam[2] = "LICE_CDNM";
                    arrParam[3] = "N";
                    arrParam[4] = "Tab0.tabHR_LICEXM.grdHR_LICEXM";
                    arrParam[5] = "LICE_CODE,LICE_CDNM";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                } else if (this.fnc_getGridHelpColName(obj, sFromDs) == "CTCS_CONM" || sColumnID == "CTCS_CONM" ) { // 자격면허명
                    arrParam[0] = "TMM1000";
                    arrParam[1] = "CTCS_CODE";
                    arrParam[2] = "CTCS_CONM";
                    arrParam[3] = "N";
                    arrParam[4] = "Tab0.tabHR_LICEXM.grdHR_LICEXM";
                    arrParam[5] = "CTCS_CODE,CTCS_CONM";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                }
            } else if (obj.name == "grdHR_VISARR") { // TAB12(여권)
                if (this.fnc_getGridHelpColName(obj, sFromDs) == "VISN_NAME" || sColumnID == "VISN_NAME" ) { // 비자발급국가
                    arrParam[0] = "TMM1000";
                    arrParam[1] = "NANY_CODE";
                    arrParam[2] = "VISN_NAME";
                    arrParam[3] = "N";
                    arrParam[4] = "Tab0.tabHR_PASSRR.grdHR_VISARR";
                    arrParam[5] = "VISN_CODE,VISN_NAME";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                }
            } else if (obj.name == "grdHR_DUTYRR") { // TAB13(직무)
                if (this.fnc_getGridHelpColName(obj, sFromDs) == "DUTY_NAME" || sColumnID == "DUTY_NAME" ) { // 비자발급국가
                    arrParam[0] = "TMM1000";
                    arrParam[1] = "DUTY_CODE";
                    arrParam[2] = "DUTY_NAME";
                    arrParam[3] = "N";
                    arrParam[4] = "Tab0.tabHR_DUTYRR.grdHR_DUTYRR";
                    arrParam[5] = "DUTY_CODE,DUTY_NAME";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                }
            }

            if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);

            if (obj.name == "edtSHREMPL_NUMB") {
                this.fn_Search();
            }

        }

        this.fn_HelpDialogeCallback1 = function(dummy){
            if ( dummy.length > 0 ) this.Tab0.tabHR_MASTXM.edtDTL2_ADDR.setFocus();
            
        }

        this.fn_HelpDialogeCallback2 = function(dummy){
            if ( dummy.length > 0 ) this.Tab0.tabHR_MASTXM.edtRGD2_ADDR.setFocus();
            
        }

        this.fn_HelpDialogeCallback3 = function(dummy){
            if ( dummy.length > 0 ) this.Tab0.tabHR_MASTXM.edtLED2_ADDR.setFocus();
            
        }

        /*****************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         *****************************************************************************************************/

        /*-------------------------+
         |  Tab 행추가 버튼 클릭 시 |
         +------------------------*/
        this.Tab_Add_OnClick = function (obj,e) {

            if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"))) == 0) {
                return this.fnc_Message("TMM013");
            }

            var sEmplNumb = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB");

            if ( obj.id == "btnHR_SCHCRRAdd" ) { // 학력
                var iRow = this.dsHR_SCHCRR.insertRow(this.dsHR_SCHCRR.rowposition + 1);
                this.dsHR_SCHCRR.setColumn(iRow, "EMPL_NUMB", sEmplNumb);
                this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR.setFocus();
                this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR, "SCDN_CODE"));

            } else if ( obj.id == "btnHR_BFCARRAdd" ) { // 경력
                var iRow = this.dsHR_BFCARR.insertRow(this.dsHR_BFCARR.rowposition + 1);
                this.dsHR_BFCARR.setColumn(iRow, "EMPL_NUMB", sEmplNumb);
                this.Tab0.tabHR_BFCARR.grdHR_BFCARR.setFocus();
                this.Tab0.tabHR_BFCARR.grdHR_BFCARR.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_BFCARR.grdHR_BFCARR, "WORK_ORGT"));

            } else if ( obj.id == "btnHR_FAMILYAdd" ) { // 가족
                var iRow = this.dsHR_FAMILY.insertRow(this.dsHR_FAMILY.rowposition + 1);
                this.dsHR_FAMILY.setColumn(iRow, "EMPL_NUMB", sEmplNumb);
                this.Tab0.tabHR_FAMILY.grdHR_FAMILY.setFocus(); //가족관계 항목으로 Focus
                this.Tab0.tabHR_FAMILY.grdHR_FAMILY.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_FAMILY.grdHR_FAMILY, "FMLY_NAME"));

            } else if ( obj.id == "btnHR_FRLANGAdd" ) { // 어학
                var iRow = this.dsHR_FRLANG.insertRow(this.dsHR_FRLANG.rowposition + 1);
                this.dsHR_FRLANG.setColumn(iRow, "EMPL_NUMB", sEmplNumb);
                this.Tab0.tabHR_FRLANG.grdHR_FRLANG.setFocus(); //외국어구분 항목으로 Focus
                this.Tab0.tabHR_FRLANG.grdHR_FRLANG.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_FRLANG.grdHR_FRLANG, "OACT_CDNM"));

            } else if ( obj.id == "btnHR_LICEXMAdd" ) { // 자격먼허
                var iRow = this.dsHR_LICEXM.insertRow(this.dsHR_LICEXM.rowposition + 1);
                this.dsHR_LICEXM.setColumn(iRow, "EMPL_NUMB", this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
                this.Tab0.tabHR_LICEXM.grdHR_LICEXM.setFocus(); //취득일자 항목으로 Focus
                this.Tab0.tabHR_LICEXM.grdHR_LICEXM.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_LICEXM.grdHR_LICEXM, "LICE_CDNM"));

            } else if ( obj.id == "btnHR_REWARDAdd" ) { // 상벌(포상)
                var iRow = this.dsHR_REWARD.insertRow(this.dsHR_REWARD.rowposition + 1);
                this.dsHR_REWARD.setColumn(iRow, "EMPL_NUMB", this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
                this.Tab0.tabHR_REWARD.grdHR_REWARD.setFocus();
                this.Tab0.tabHR_REWARD.grdHR_REWARD.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_REWARD.grdHR_REWARD, "DCSN_DATE"));

            } else if ( obj.id == "btnHR_DISCIPAdd" ) { // 상벌(징계)
                var iRow = this.dsHR_DISCIP.insertRow(this.dsHR_DISCIP.rowposition + 1);
                this.dsHR_DISCIP.setColumn(iRow, "EMPL_NUMB", this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
                this.Tab0.tabHR_REWARD.grdHR_DISCIP.setFocus();
                this.Tab0.tabHR_REWARD.grdHR_DISCIP.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_REWARD.grdHR_DISCIP, "DCSN_DATE"));

            } else if ( obj.id == "btnHR_PASSRRAdd" ) { // 여권(여권)
                var iRow = this.dsHR_PASSRR.insertRow(this.dsHR_PASSRR.rowposition + 1);
                this.dsHR_PASSRR.setColumn(iRow, "EMPL_NUMB", this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
                this.Tab0.tabHR_PASSRR.grdHR_PASSRR.setFocus();
                this.Tab0.tabHR_PASSRR.grdHR_PASSRR.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_PASSRR.grdHR_PASSRR, "PSSP_NUMB"));
                
            } else if ( obj.id == "btnHR_VISARRAdd" ) { // 여권(비자)
                var iRow = this.dsHR_VISARR.insertRow(this.dsHR_VISARR.rowposition + 1);
                this.dsHR_VISARR.setColumn(iRow, "EMPL_NUMB", this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
                this.Tab0.tabHR_PASSRR.grdHR_VISARR.setFocus();
                this.Tab0.tabHR_PASSRR.grdHR_VISARR.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_PASSRR.grdHR_VISARR, "VISN_CODE"));

            } else if ( obj.id == "btnHR_DUTYRRAdd" ) { // 직무
                var iRow = this.dsHR_DUTYRR.insertRow(this.dsHR_DUTYRR.rowposition + 1);
                this.dsHR_DUTYRR.setColumn(iRow, "EMPL_NUMB", this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
                this.dsHR_DUTYRR.setColumn(iRow, "DUTY_CODE", this.dsHR_MASTXD.getColumn(this.dsHR_MASTXD.rowposition, "DUTY_CODE"));
                this.dsHR_DUTYRR.setColumn(iRow, "DUTY_NAME", this.dsHR_MASTXD.getColumn(this.dsHR_MASTXD.rowposition, "DUTY_NAME"));
                this.Tab0.tabHR_DUTYRR.grdHR_DUTYRR.setFocus();
                this.Tab0.tabHR_DUTYRR.grdHR_DUTYRR.setCellPos(this.fnc_GridColumnIndex(this.Tab0.tabHR_DUTYRR.grdHR_DUTYRR, "DUTY_DATE"));
            
            } else if ( obj.id == "btnHR_ATTACHAdd" ) { // 파일첨부
                var iRow = this.dsHR_ATTACH.insertRow(this.dsHR_ATTACH.rowposition + 1);
                this.dsHR_ATTACH.setColumn(iRow, "GUBUN", "1"); 
                this.dsHR_ATTACH.setColumn(iRow, "FILE_IDXX", "");
                this.Tab0.tabHR_ATTACH.grdHR_ATTACH.setFocus();
                
            }
            
        }

        /*-------------------------+
         |  Tab 행삭제 버튼 클릭 시 |
         +------------------------*/
        this.Tab_Del_OnClick = function(obj,e) {

            if ( obj.id == "btnHR_SCHCRRDel" ) { // 학력
                if (this.fn_DeleteCheck(this.dsHR_SCHCRR)) this.dsHR_SCHCRR.deleteRow(this.dsHR_SCHCRR.rowposition);
                this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR.setFocus();

            } else if ( obj.id == "btnHR_BFCARRDel" ) { // 경력
                if (this.fn_DeleteCheck(this.dsHR_BFCARR)) this.dsHR_BFCARR.deleteRow(this.dsHR_BFCARR.rowposition);
                this.Tab0.tabHR_BFCARR.grdHR_BFCARR.setFocus();

            } else if ( obj.id == "btnHR_FAMILYDel" ) { // 가족
                if (this.fn_DeleteCheck(this.dsHR_FAMILY)) this.dsHR_FAMILY.deleteRow(this.dsHR_FAMILY.rowposition);
                this.Tab0.tabHR_FAMILY.grdHR_FAMILY.setFocus();

            } else if ( obj.id == "btnHR_FRLANGDel" ) { // 어학
                if (this.fn_DeleteCheck(this.dsHR_FRLANG)) this.dsHR_FRLANG.deleteRow(this.dsHR_FRLANG.rowposition);
                this.Tab0.tabHR_FRLANG.grdHR_FRLANG.setFocus();

            } else if ( obj.id == "btnHR_LICEXMDel" ) { // 자격면허
                if (this.fn_DeleteCheck(this.dsHR_LICEXM)) this.dsHR_LICEXM.deleteRow(this.dsHR_LICEXM.rowposition);
                this.Tab0.tabHR_LICEXM.grdHR_LICEXM.setFocus();

            } else if ( obj.id == "btnHR_REWARDDel" ) { // 상벌(포상)
                if (this.fn_DeleteCheck(this.dsHR_REWARD)) this.dsHR_REWARD.deleteRow(this.dsHR_REWARD.rowposition);
                this.Tab0.tabHR_REWARD.grdHR_REWARD.setFocus();

            } else if ( obj.id == "btnHR_DISCIPDel" ) { // 자격면허
                if (this.fn_DeleteCheck(this.dsHR_DISCIP)) this.dsHR_DISCIP.deleteRow(this.dsHR_DISCIP.rowposition);
                this.Tab0.tabHR_REWARD.grdHR_DISCIP.setFocus();

            } else if ( obj.id == "btnHR_PASSRRDel" ) { // 여권(여권)
                if (this.fn_DeleteCheck(this.dsHR_PASSRR)) this.dsHR_PASSRR.deleteRow(this.dsHR_PASSRR.rowposition);
                this.Tab0.tabHR_REWARD.grdHR_REWARD.setFocus();

            } else if ( obj.id == "btnHR_VISARRDel" ) { // 여권(비자)
                if (this.fn_DeleteCheck(this.dsHR_VISARR)) this.dsHR_VISARR.deleteRow(this.dsHR_VISARR.rowposition);
                this.Tab0.tabHR_REWARD.grdHR_DISCIP.setFocus();

            } else if ( obj.id == "btnHR_DUTYRRDel" ) { // 직무
                if (this.fn_DeleteCheck(this.dsHR_DUTYRR)) this.dsHR_DUTYRR.deleteRow(this.dsHR_DUTYRR.rowposition);
                this.Tab0.tabHR_DUTYRR.grdHR_DUTYRR.setFocus();
                
            } else if ( obj.id == "btnHR_ATTACHDel" ) { // 파일첨부
                if (this.fn_DeleteCheck(this.dsHR_ATTACH)) this.dsHR_ATTACH.deleteRow(this.dsHR_ATTACH.rowposition);
                this.Tab0.tabHR_ATTACH.grdHR_ATTACH.setFocus();
            }

        

        }

        /*----------------------------------------------------------+
         |  그리드 위치가 바뀌면 개인의 인사정보를 보여준다.  |
         +---------------------------------------------------------*/
        this.dsHR_MASTXM_OnRowPosChanged = function(obj,e) {
            
            if (this.fnc_DatasetChangeCheck("dsHR_MASTXD,dsHR_SCHCRR,dsHR_BFCARR,dsHR_FAMILY,dsHR_LICEXM,dsHR_FRLANG,dsHR_REWARD,dsHR_DISCIP,dsHR_PASSRR,dsHR_VISARR,dsHR_DUTYRR,dsHR_ATTACH")) {
                if (this.fnc_Message("TMM023") == false) {
                    return false;
                }
            }
            
            this.fn_KeyFieldDisible(this.dsHR_MASTXM);
            
            if (this.fnc_ToUpper(this.dsHR_MASTXM.getRowType(this.dsHR_MASTXM.rowposition)) == Dataset.ROWTYPE_INSERT) {
                this.fn_Cleardataset();

            } else {
                if ( this.fnc_Length(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "FILE_PATH")) > 0 ){
                    var objDate = new Date();
                    var sFILE_PATH  = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "FILE_PATH");
                    var sFile       = this.fnc_SubStr(sFILE_PATH, sFILE_PATH.lastIndexOf("/")+1);
                    this.imgPHOT_FILE.set_image(application.GBL_HTTPURL + "/core/erp/com/ComImageView.do?path=EMPL_PIC&name="  + sFile + "&sTime=" + objDate.getTime());
                    this.FileUpload.style.set_buttontext("변경");
                    
                } else {
                    this.imgPHOT_FILE.set_image("theme://images/img_WF_user.png");
                    this.FileUpload.style.set_buttontext("등록");
                    
                }
                
                this.DetailQuery();
                
            }

            this.fn_EnableLevel(this.sUSERLAVEL);
        }

        this.fn_Cleardataset = function () {

            var CleanDS  = "dsHR_MASTXD";
                CleanDS += ",dsHR_SCHCRR"; //학력사항
                CleanDS += ",dsHR_BFCARR"; //경력사항
                CleanDS += ",dsHR_FAMILY"; //가족사항
                CleanDS += ",dsHR_LICEXM"; //자격면허
                CleanDS += ",dsHR_FRLANG"; //외국어
                CleanDS += ",dsHR_SCHCRR"; //학력사항
                CleanDS += ",dsHR_BFCARR"; //경력사항
                CleanDS += ",dsHR_FAMILY"; //가족사항
                CleanDS += ",dsHR_LICEXM"; //자격면허
                CleanDS += ",dsHR_FRLANG"; //외국어
                CleanDS += ",dsHR_APPOXD"; //발령
                CleanDS += ",dsHR_REWARD,dsHR_DISCIP"; //상벌사항
                CleanDS += ",dsED_EDRSLT"; //교육훈련
                CleanDS += ",dsHR_PASSRR,dsHR_VISARR"; //여권
                CleanDS += ",dsHR_DUTYRR"; //직무
                CleanDS += ",dsHR_ATTACH"; //첨부파일

            this.fnc_DatasetClear(CleanDS); //기 조회 자료 초기화
            
            this.Tab0.tabHR_SCHCRR.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            this.Tab0.tabHR_BFCARR.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            this.Tab0.tabHR_FAMILY.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            this.Tab0.tabHR_FRLANG.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            this.Tab0.tabHR_LICEXM.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            this.Tab0.tabED_EDRSLT.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            this.Tab0.tabHR_APPOXD.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            this.Tab0.tabHR_PASSRR.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            this.Tab0.tabHR_DUTYRR.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            this.Tab0.tabHR_ATTACH.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            
            this.imgPHOT_FILE.set_image("theme://images/img_WF_user.png");
            this.FileUpload.style.set_buttontext("등록");

        }

        this.DetailQuery = function () {

            if (this.dsHR_MASTXM.rowcount < 1) {
                return;
            }

            // dataset을 서버에서 가져온다.
            var sMethodName = "SEARCH01";
            var sInDataSet  = "";
            var sOutDataSet = "dsHR_MASTXD=dsHR_MASTXD ";
                sOutDataSet += "dsHR_SCHCRR=dsHR_SCHCRR "; // 학력사항
                sOutDataSet += "dsHR_BFCARR=dsHR_BFCARR "; // 경력사항
                sOutDataSet += "dsHR_FAMILY=dsHR_FAMILY "; // 가족사항
                sOutDataSet += "dsHR_FRLANG=dsHR_FRLANG "; // 어학
                sOutDataSet += "dsHR_LICEXM=dsHR_LICEXM "; // 자격면허
                sOutDataSet += "dsHR_GRTINS=dsHR_GRTINS "; // 보증
                sOutDataSet += "dsHR_REWARD=dsHR_REWARD "; // 상벌사항
                sOutDataSet += "dsHR_DISCIP=dsHR_DISCIP "; // 상벌사항
                sOutDataSet += "dsED_EDRSLT=dsED_EDRSLT "; // 교육훈련
                sOutDataSet += "dsHR_APPOXD=dsHR_APPOXD "; // 발령사항
                sOutDataSet += "dsHR_PASSRR=dsHR_PASSRR "; // 여권
                sOutDataSet += "dsHR_VISARR=dsHR_VISARR "; // 비자
                sOutDataSet += "dsHR_DUTYRR=dsHR_DUTYRR "; // 직무
                sOutDataSet += "dsHR_ATTACH=dsHR_ATTACH";  // 파일첨부
                
            var sArgument = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
        }

        /*---------------+
         |  권한처리 처리 |
         +---------------*/
        this.fn_EnableLevel = function(sLevel) {
            
            if (sLevel == "1") {
                this.imgHelpSHRDEPT_CODE.set_enable(true);  // 부서클릭
                this.fnc_SetReadonly(this.edtSHRDEPT_NAME, false);   // 부서명
                this.imgHelpSHREMPL_NUMB.set_enable(true);  // 성명클릭
                this.fnc_SetReadonly(this.edtSHREMPL_NAME, false);   // 성명
                this.fnc_SetReadonly(this.cmbSHRWRDV_CODE, false);   // 직원구분
                this.fnc_SetReadonly(this.cmbSHRWODN_CODE, false);   // 재직구분

                this.fnc_SetReadonly(this.edtEMPL_NAME, false); // 성명
                this.fnc_SetReadonly(this.medRERN_NUMB, false); // 주민번호
                this.fnc_SetReadonly(this.cmbWRDV_CODE, false); // 직원구분

                this.fnc_SetReadonly(this.edtCCEM_NAME, false); // 성명(한문)
                this.fnc_SetReadonly(this.edtENEE_NAME, false); // 성명(영문)
                //this.fnc_SetReadonly(this.edtEMPL_AGEX, false); // 나이
                this.fnc_SetReadonly(this.cmbREDI_CODE, false); // 입사구분
                this.fnc_SetReadonly(this.chkOVSV_YSNO, false); // 해외근무여부

                // TAB01 개인신상
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.calPCOP_JCDT, false);    // 그룹입사일
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.calANSD_DATE, false);    // 연차기산일
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.calPBNR_ENDD, false);    // 수습종료일
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.chkLBJO_YSNO, false);    // 노조원

                this.Tab0.tabHR_MASTXM.imgHelpPOST_ADDR.set_enable(true);            // 현거주지 버튼
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtDTL1_ADDR, false);    // 현거주지2
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtDTL2_ADDR, false);    // 현거주지3
                
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtENPT_NUMB, false);    // 현거주지(영문)1
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtEND1_ADDR, false);    // 현거주지(영문)2
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtEND2_ADDR, false);    // 현거주지(영문)3

                this.Tab0.tabHR_MASTXM.imgHelpRGD2_ADDR.set_enable(true);            // 주민등록주지 버튼
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtRGD1_ADDR, false);    // 주민등록주지2
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtRGD2_ADDR, false);    // 주민등록주지3
                this.Tab0.tabHR_MASTXM.btnCopyAddr.set_enable(true);                 // 현거주지동일 버튼

                this.Tab0.tabHR_MASTXM.imgHelpLED2_ADDR.set_enable(true);            // 본적지 버튼
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtLED1_ADDR, false);    // 본적지2
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtLED2_ADDR, false);    // 본적지3

                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtCOMP_TENR, false);    // 회사번호
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtHNPN_TENR, false);    // 휴대전화
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtOHOM_TENR, false);    // 자택전화
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtELTR_MLAD, false);    // 이메일

                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtEMPL_HEGT, false);    // 신장
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtBODY_WEGT, false);    // 체중
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtLEFT_SGHT, false);    // 시력(좌)
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtRIGH_SGHT, false);    // 시력(우)

                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.cmbBLTP_CODE, false);    // 혈액형

                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.calREAL_BIRT, false);    // 실제생일
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.cmbSLCA_CODE, false);    // 음력/양력
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.rdoMARG_YSNO, false);    // 결혼유무
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.calWEAN_DATE, false);    // 결혼일자

                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.cmbRLGN_CODE, false);    // 종교
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtEMPL_HOBY, false);    // 취미
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtEMPL_SPEC, false);    // 특기

                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtHOFM_NAME, false);    // 호주성명
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXM.edtHOFM_RELA, false);    // 호주와의 관계
                
                //TAB02 장애병역
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbHALT_CODE, false);    // 장애구분
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbDEDY_CODE, false);    // 장애등급
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbDEGC_CODE, false);    // 장애유형
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.calHAAD_DATE, false);    // 장애인정시기
                
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.edtHALT_PROW, false);    // 장애원인
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbSVIM_YSNO, false);    // 중증여부
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbREDN_CODE, false);    // 보훈구분
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.edtRCMP_NUMB, false);    // 보훈번호
                
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.calRCMP_DATE, false);    // 보훈지정일자
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbMAMR_CODE, false);    // 유공자관계
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.edtMNOM_NAME, false);    // 유공자
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.edtHDPP_NAME, false);    // 해당지청
                
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbMLGN_CODE, false);    // 병역구분
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.edtSOLR_NUMB, false);    // 군번
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbKMIL_CODE, false);    // 군별
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbBOTS_CODE, false);    // 병과
                
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbDICL_CODE, false);    // 계급
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbCLSS_CODE, false);    // 역종
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.calENLS_DATE, false);    // 입대일
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.calLVAM_DATE, false);    // 전액일자
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbLVTY_CODE, false);    // 제대구분
                
                
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.edtHPJ1_CNTT, false);    // 희망업무1
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.edtHPJ2_CNTT, false);    // 희망업무2
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.edtHOP1_ARNM, false);    // 희망지역1
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.edtHOP2_ARNM, false);    // 희망지역2
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbHUSF_CODE, false);    // 주거형태
                this.fnc_SetReadonly(this.Tab0.tabHR_MASTXD.cmbHUSO_CODE, false);    // 소유구분
                
                this.Tab0.tabHR_MASTXD.Static47.set_visible(true);              // 사내추천인
                this.Tab0.tabHR_MASTXD.edtCIRP_EMNR.set_visible(true);          // 사내추천인
                this.Tab0.tabHR_MASTXD.imgHelpedtCIRP_EMNR.set_visible(true);   // 사내추천인
                this.Tab0.tabHR_MASTXD.edtCIRP_NAME.set_visible(true);          // 사내추천인
                
                this.Tab0.tabHR_MASTXD.Static39.set_visible(true);              // 추천인성명
                this.Tab0.tabHR_MASTXD.edtRCPS_NAME.set_visible(true);          // 추천인성명
                
                this.Tab0.tabHR_MASTXD.Static48.set_visible(true);              // 추천인관계
                this.Tab0.tabHR_MASTXD.edtRCPS_RELA.set_visible(true);          // 추천인관계
                
                this.Tab0.tabHR_MASTXD.Static46.set_visible(true);              // 추천인회사
                this.Tab0.tabHR_MASTXD.edtRCPC_NAME.set_visible(true);          // 추천인회사
                
                this.Tab0.tabHR_MASTXD.Static49.set_visible(true);              // 추천인직위
                this.Tab0.tabHR_MASTXD.edtRCPS_TLNM.set_visible(true);          // 추천인직위
                
                // TAB03 학력
                this.fnc_SetReadonly(this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR, false);        // 그리드
                this.Tab0.tabHR_SCHCRR.btnHR_SCHCRRAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_SCHCRR.btnHR_SCHCRRDel.set_visible(true);       // 삭제버튼
                
                // TAB04 경력
                this.fnc_SetReadonly(this.Tab0.tabHR_BFCARR.grdHR_BFCARR, false);        // 그리드
                this.Tab0.tabHR_BFCARR.btnHR_BFCARRAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_BFCARR.btnHR_BFCARRDel.set_visible(true);       // 삭제버튼
                
                // TAB05 가족
                this.fnc_SetReadonly(this.Tab0.tabHR_FAMILY.grdHR_FAMILY, false);        // 그리드
                this.Tab0.tabHR_FAMILY.btnHR_FAMILYAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_FAMILY.btnHR_FAMILYDel.set_visible(true);       // 삭제버튼
                
                // TAB06 어학
                this.fnc_SetReadonly(this.Tab0.tabHR_FRLANG.grdHR_FRLANG, false);        // 그리드
                this.Tab0.tabHR_FRLANG.btnHR_FRLANGAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_FRLANG.btnHR_FRLANGDel.set_visible(true);       // 삭제버튼
                
                // TAB07 자격면허
                this.fnc_SetReadonly(this.Tab0.tabHR_LICEXM.grdHR_LICEXM, false);        // 그리드
                this.Tab0.tabHR_LICEXM.btnHR_LICEXMAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_LICEXM.btnHR_LICEXMDel.set_visible(true);       // 삭제버튼
                
                // TAB09 상벌
                // 포상
                this.fnc_SetReadonly(this.Tab0.tabHR_REWARD.grdHR_REWARD, false);        // 그리드
                this.Tab0.tabHR_REWARD.btnHR_REWARDAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_REWARD.btnHR_REWARDDel.set_visible(true);       // 삭제버튼
                
                // 징계
                this.fnc_SetReadonly(this.Tab0.tabHR_REWARD.grdHR_DISCIP, false);        // 그리드
                this.Tab0.tabHR_REWARD.btnHR_DISCIPAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_REWARD.btnHR_DISCIPDel.set_visible(true);       // 삭제버튼
                
                // TAB12 여권
                this.fnc_SetReadonly(this.Tab0.tabHR_PASSRR.grdHR_PASSRR, false);        // 그리드
                this.Tab0.tabHR_PASSRR.btnHR_PASSRRAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_PASSRR.btnHR_PASSRRDel.set_visible(true);       // 삭제버튼
                
                this.fnc_SetReadonly(this.Tab0.tabHR_PASSRR.grdHR_VISARR, false);        // 그리드
                this.Tab0.tabHR_PASSRR.btnHR_VISARRAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_PASSRR.btnHR_VISARRDel.set_visible(true);       // 삭제버튼
                
                // TAB13 직무
                this.fnc_SetReadonly(this.Tab0.tabHR_DUTYRR.grdHR_DUTYRR, false);        // 그리드
                this.Tab0.tabHR_DUTYRR.btnHR_DUTYRRAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_DUTYRR.btnHR_DUTYRRDel.set_visible(true);       // 삭제버튼
                
                // TAB14 파일첨부
                this.fnc_SetReadonly(this.Tab0.tabHR_ATTACH.grdHR_ATTACH, false);        // 그리드
                this.Tab0.tabHR_ATTACH.btnHR_ATTACHAdd.set_visible(true);       // 추가버튼
                this.Tab0.tabHR_ATTACH.btnHR_ATTACHDel.set_visible(true);       // 삭제버튼
                
            }

        }

        /*----------------------+
         |  DATASET 컬럼 변경 시 |
         +---------------------*/
        this.ds_oncolumnchanged = function(obj,e) {
            
            var sBirthDay   = "";
            var sAge		= "";
            
            if ( obj.name == "dsHR_MASTXD") { // 개인신상&장애병역
                if ( e.columnid == "RERN_NUMB" ) {
                    if ( this.fnc_SubStr(e.newvalue, 6, 1) == "1" || this.fnc_SubStr(e.newvalue, 6, 1) == "2"
                    ||   this.fnc_SubStr(e.newvalue, 6, 1) == "5" || this.fnc_SubStr(e.newvalue, 6, 1) == "6" ) {
                        sBirthDay   = "19"+this.fnc_SubStr(e.newvalue, 0, 6);
                        this.dsHR_MASTXD.setColumn(e.row, "EMPL_AGEX", this.fnc_GetAge(sBirthDay, 0));
                        
                    } else {
                        sBirthDay   = "20"+this.fnc_SubStr(e.newvalue, 0, 6);
                        this.dsHR_MASTXD.setColumn(e.row, "EMPL_AGEX", this.fnc_GetAge(sBirthDay, 0));
                        
                    }
                }
            } else if ( obj.name == "dsHR_SCHCRR" ) { // 학력
                if ( e.columnid == "SCHL_CDNM" || e.columnid == "MAJR_CDNM" ){
                    this.fn_HelpDialoge(this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR, "YES" ,e.oldvalue, e.columnid);
                } else if ( e.columnid == "HISL_YSNO" ) {
                    this.dsHR_SCHCRR.set_enableevent(false);
                    for ( var i=0; i<this.dsHR_SCHCRR.getRowCount(); i++ ) {
                        if ( i == e.row ) {
                            this.dsHR_SCHCRR.setColumn(i, "HISL_YSNO", "1"); 
                        } else {
                            this.dsHR_SCHCRR.setColumn(i, "HISL_YSNO", "0");
                        }
                    }
                    this.dsHR_SCHCRR.set_enableevent(true);
                }
                
                
            } else if ( obj.name == "dsHR_FAMILY" ){ // 가족
                if ( e.columnid == "FMLY_SSEC" ) {
        			if( this.fnc_Length(this.fnc_Trim(e.newvalue)) > 6  ) {
        			
        				if ( this.fnc_SubStr(e.newvalue, 6, 1) == "1" || this.fnc_SubStr(e.newvalue, 6, 1) == "2"
        				||   this.fnc_SubStr(e.newvalue, 6, 1) == "5" || this.fnc_SubStr(e.newvalue, 6, 1) == "6" ) {
        					sBirthDay   = "19"+this.fnc_SubStr(e.newvalue, 0, 6);
        					sAge  		= this.fnc_GetAge(sBirthDay, 0) + " (" +this.fnc_GetAge(sBirthDay, 1) +")";
        					this.dsHR_FAMILY.setColumn(e.row, "FMLY_BIRT", sBirthDay);
        					this.dsHR_FAMILY.setColumn(e.row, "FMLY_AGEX", sAge);

        				} else {
        					sBirthDay   = "20"+this.fnc_SubStr(e.newvalue, 0, 6);
        					sAge  		= this.fnc_GetAge(sBirthDay, 0) + " (" +this.fnc_GetAge(sBirthDay, 1) +")";
        					this.dsHR_FAMILY.setColumn(e.row, "FMLY_BIRT", sBirthDay);
        					this.dsHR_FAMILY.setColumn(e.row, "FMLY_AGEX", sAge);

        				}
        			}
                }

            } else if ( obj.name == "dsHR_FRLANG" ){ // 어학
                if ( e.columnid == "OACT_CDNM" || e.columnid == "DFLG_CONM") {
                    this.fn_HelpDialoge(this.Tab0.tabHR_FRLANG.grdHR_FRLANG, "YES" ,e.oldvalue, e.columnid);

                }

            } else if ( obj.name == "dsHR_LICEXM" ){ // 자격면허
                if ( e.columnid == "LICE_CDNM" || e.columnid == "CTCS_CONM") {
                    this.fn_HelpDialoge(this.Tab0.tabHR_LICEXM.grdHR_LICEXM, "YES" ,e.oldvalue, e.columnid);
                }

            } else if ( obj.name == "dsHR_VISARR" ){ // 여권
                if ( e.columnid == "VISN_NAME" ) {
                    this.fn_HelpDialoge(this.Tab0.tabHR_PASSRR.grdHR_VISARR, "YES" ,e.oldvalue, e.columnid);
                    
                }
            } else if ( obj.name == "dsHR_DUTYRR" ){ // 직무
                if ( e.columnid == "DUTY_NAME" ) {
                    this.fn_HelpDialoge(this.Tab0.tabHR_DUTYRR.grdHR_DUTYRR, "YES" ,e.oldvalue, e.columnid);
                    
                }
            }

        }
        /*-------------------+
         | grd Cell 클릭 함수 |
         +-------------------*/
        this.grd_oncellclick = function(obj,e) {
            if ( obj.id == "grdHR_SCHCRR" ) { // TAB(03) 학력
                if ( obj.getCellProperty("body", obj.currentcell, "text").split("bind:").join("") == "HISL_YSNO" ){ // 최종학교여부 클릭 시
                    for ( var i=0; i<this.dsHR_SCHCRR.getRowCount(); i++ ) {
                        if ( i == e.row ) {
                            this.dsHR_SCHCRR.setColumn(i, "HISL_YSNO", "1");
                        } else {
                            this.dsHR_SCHCRR.setColumn(i, "HISL_YSNO", "0");
                        }
                    }
                }
            }
            
        }

        /*----------------------+
         | 현거주지동일 클릭 함수 |
         +----------------------*/
        this.Tab0_tabHR_MASTXM_btnCopyAddr_onclick = function(obj,e) {
            var sPostNumb = this.Tab0.tabHR_MASTXM.edtPOST_NUMB.value;
            var sDtl1Addr = this.Tab0.tabHR_MASTXM.edtDTL1_ADDR.value;
            var sDtl2Addr = this.Tab0.tabHR_MASTXM.edtDTL2_ADDR.value;

            this.Tab0.tabHR_MASTXM.edtRERN_PONB.set_value(sPostNumb);
            this.Tab0.tabHR_MASTXM.edtRGD1_ADDR.set_value(sDtl1Addr);
            this.Tab0.tabHR_MASTXM.edtRGD2_ADDR.set_value(sDtl2Addr);

        }

        /***********************
           첨부파일 Upload 전처리
        ************************/
        this.FileUpload_onfindclick = function(obj,e){
            this.sPhotoPath = ""; // 초기화
            if (this.dsHR_MASTXD.getRowCount() < 1) {
                this.fnc_Message("TMM141");
                return false;
                
            }
            
            if (this.fnc_ToUpper(this.dsHR_MASTXD.getRowType(this.dsHR_MASTXD.rowposition)) == Dataset.ROWTYPE_INSERT) {
                this.fnc_Message("TMM125" ,"먼저 저장 후 등록하세요");
                return false;
                
            }
            
        }

        /***********************
           첨부파일 Upload
        ************************/
        this.fn_FileUpload = function(obj,e) {
            
            if ( e.newvalue != null ) {
                var FileSub     = this.fnc_SubStr(e.newvalue, e.newvalue.lastIndexOf("\\")+1);
                var sExtFile    = this.fnc_SubStr(FileSub, FileSub.lastIndexOf(".")).toLowerCase(); // 파일확장자
                
                if ( sExtFile == ".jpg" || sExtFile == ".png" || sExtFile == ".gif" ) {
                    var sFileUrl    = application.GBL_HTTPURL + "/core/erp/com/comFile_UploadSingle.do";
                    var sPath       = "EMPL_PIC/";
                    var iRow        = this.dsHR_MASTXD.rowposition;
                    var emplNumb    = this.dsHR_MASTXD.getColumn(iRow, "EMPL_NUMB");
                    var sPhyFile    = emplNumb+sExtFile;
                    var objDate     = new Date();
                    this.sPhotoPath = sPath+sPhyFile;

                    this.FileUpload.style.set_buttontext("변경");
                    this.FileUpload.upload(sFileUrl + "?sPath=" + sPath + "&sPhyFile=" + sPhyFile + "&sTime=" + objDate.getTime());
                    this.FileUpload.deleteItem(0);     //업로드 후 업로드 항목 초기화
                    this.FileUpload.appendItem();
                    
                } else {
                    this.fnc_Message("TMM300", "jpg, png, gif 파일만 등록 가능합니다.");
                    return;
                }
                
            }
            
        }

        /***********************
           첨부파일 업로드 callback
        ************************/
        this.fn_FileUploadCallback = function(obj,e) {
            if (e.errorcode == "0") {
                this.dsHR_MASTXD.set_updatecontrol(false);
                this.dsHR_MASTXD.setColumn(this.dsHR_MASTXD.rowposition, "FILE_PATH", this.sPhotoPath);
                this.dsHR_MASTXD.setRowType(this.dsHR_MASTXD.rowposition, Dataset.ROWTYPE_UPDATE);
                this.dsHR_MASTXD.set_updatecontrol(true);
                
                var objDate = new Date();
                var sFile       = this.fnc_SubStr(this.sPhotoPath, this.sPhotoPath.lastIndexOf("/")+1);
                this.imgPHOT_FILE.set_image(application.GBL_HTTPURL + "/core/erp/com/ComImageView.do?path=EMPL_PIC&name=" + sFile + "&sTime=" + objDate.getTime());
                
            }

        }

        this.fn_FileUploadError = function(obj,e) {
            this.dsHR_MASTXD.setColumn(this.dsHR_MASTXD.rowposition, "FILE_PATH", "");
            return;
            
        }

        this.imgDelPhoto_onclick = function(obj,e) {
            
            var sFileUrl    = application.GBL_HTTPURL + "/core/erp/com/comFile_UploadDelete.do";
            
            var sFILE_PATH  = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "FILE_PATH");
            var FileSub     = this.fnc_SubStr(sFILE_PATH, sFILE_PATH.lastIndexOf("\\")+1);
            var sExtFile    = this.fnc_SubStr(FileSub,FileSub.lastIndexOf(".")); // 파일확장자
            
            var sPath       = "EMPL_PIC/";
            var iRow        = this.dsHR_MASTXD.rowposition;
            var emplNumb    = this.dsHR_MASTXD.getColumn(iRow, "EMPL_NUMB");
            var sPhyFile    = emplNumb+sExtFile;
            var svcUrl      = sFileUrl + "?sPath=" + sPath + "&sPhyFile=" + sPhyFile;
            
            this.transaction("", svcUrl, "", "", "", "");
            this.imgPHOT_FILE.set_image("theme://images/img_WF_user.png");
            this.FileUpload.style.set_buttontext("등록");
            this.dsHR_MASTXD.setColumn(this.dsHR_MASTXD.rowposition, "FILE_PATH", "");
            
            
        }

        this.Tab0_tabHR_ATTACH_grdHR_ATTACH_oncellclick = function(obj,e) {
            
            if( obj.getCellText(e.row, e.col) == "업로드" ) {
                if (this.fnc_Length(this.fnc_Trim(this.dsHR_ATTACH.getColumn(e.row, "FITY_CODE"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "파일종류", this.dsHR_ATTACH, e.row, this.Tab0.tabHR_ATTACH.grdHR_ATTACH, "FITY_CODE");
                }
                
                this.fnc_CallFileUplod(1, "", "fn_CallFileUplodCallback");
            
            } else if( obj.getCellText(e.row, e.col) == "다운로드" ) {
                var filePath   = this.dsHR_ATTACH.getColumn(e.row,"FILE_PATH");
                var phyFileNm  = this.dsHR_ATTACH.getColumn(e.row,"PFIL_NAME");
                var realFileNm = this.dsHR_ATTACH.getColumn(e.row,"LFIL_NAME");

                if (this.fnc_Length(filePath) > 0) {
                    this.fnc_FileDownLoad(filePath, phyFileNm, realFileNm);
                }
            }
        }

        /*-------------------+
         |  파일첨부 callback |
         +-------------------*/
        this.fn_CallFileUplodCallback = function(robjds,form) {

            var objds       = form.dsHR_ATTACH;
            var objmainds   = form.dsHR_MASTXD;
            
            if ( objmainds.getColumn(objmainds.rowposition, "FILE_IDXX") == "" ) {
                objmainds.setColumn(objmainds.rowposition, "FILE_IDXX", robjds.getColumn(0, "FILE_IDXX"));
            } else {
                for ( var i=0; i<robjds.rowcount; i++ ) {
                    robjds.setColumn(i, "FILE_IDXX", objmainds.getColumn(objmainds.rowposition, "FILE_IDXX"));
                }
            }
            
            for(i = 0; i < robjds.rowcount; i++){
                objds.copyRow(objds.rowposition, robjds, i);
                
                if(objds.updatecontrol){
                }else{
                    objds.setRowType(iRow, Dataset.ROWTYPE_INSERT);
                }
            }
            
        }

        this.dsHR_ATTACH_onrowposchanged = function(obj,e) {
            if ( this.dsHR_ATTACH.getColumn(this.dsHR_ATTACH.rowposition, "GUBUN") == "2" ) {
                this.Tab0.tabHR_ATTACH.btnHR_ATTACHDel.set_enable(false);
            } else {
                this.Tab0.tabHR_ATTACH.btnHR_ATTACHDel.set_enable(true);
            }
        }

        /*-----------------+
         |  이미지 상세보기 |
         +-----------------*/
        this.imgPHOT_FILE_onclick = function(obj,e) {
            if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "FILE_PATH"))) < 1) return;
            
            var sName       = "HRMB0010P01";
            var sFormURL    = "hrm::HRMB0010P01.xfdl";
            var sOpenStyle  = "modeless=false";
                sOpenStyle += ",autosize=true";
                sOpenStyle += ",top=-1";
                sOpenStyle += ",left=-1";
                sOpenStyle += ",width=990";
                sOpenStyle += ",height=800";
                sOpenStyle += ",title=true";
                sOpenStyle += ",titletext=상세보기";
                sOpenStyle += ",status=false";
                sOpenStyle += ",resizable=true";
            
            var sFILE_PATH  = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "FILE_PATH");
            var sFile       = this.fnc_SubStr(sFILE_PATH, sFILE_PATH.lastIndexOf("/")+1);
            
            var objArgumentList = {
                 sFILE_PATH : "EMPL_PIC/"
                ,sFILE_NAME : sFile
                
            };

            this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "");
            
        }

        this.Tab0_onchanged = function(obj,e) {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_MASTXM.addEventHandler("onrowposchanged", this.dsHR_MASTXM_OnRowPosChanged, this);
            this.dsHR_MASTXD.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsHR_SCHCRR.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsHR_FAMILY.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsHR_FRLANG.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsHR_LICEXM.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsHR_VISARR.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsHR_DUTYRR.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsHR_ATTACH.addEventHandler("onrowposchanged", this.dsHR_ATTACH_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.Tab0.addEventHandler("onchanged", this.Tab0_onchanged, this);
            this.Tab0.tabHR_MASTXM.Shape08.addEventHandler("onclick", this.Tab0_tabHR_MASTXM_Shape08_onclick, this);
            this.Tab0.tabHR_MASTXM.Static34.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXM.edtPCOP_TERM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtSEAS_TERM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtPRON_TERM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtANSD_TERM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtENCO_TERM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtDEAT_TERM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.chkLBJO_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.Static22.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXM.edtDTL1_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtRGD1_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtLED1_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtCOMP_TENR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtEND2_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtRGD2_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtLED2_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtELTR_MLAD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtPOST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.imgHelpPOST_ADDR.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_MASTXM.edtRERN_PONB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.imgHelpRGD2_ADDR.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_MASTXM.edtLEGL_PONB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.imgHelpLED2_ADDR.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_MASTXM.edtHNPN_TENR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtOHOM_TENR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.btnCopyAddr.addEventHandler("onclick", this.Tab0_tabHR_MASTXM_btnCopyAddr_onclick, this);
            this.Tab0.tabHR_MASTXM.Static33.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXM.calREAL_BIRT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.Static39.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXM.cmbBLTP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.cmbSLCA_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.cmbRLGN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.Static42.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXM.edtEMPL_HOBY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.Static45.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXM.edtEMPL_SPEC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.calWEAN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.chkPBNR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.rdoMARG_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtHOFM_RELA.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtHOFM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtEMPL_HEGT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtBODY_WEGT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtLEFT_SGHT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtRIGH_SGHT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtEND1_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtDTL2_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXM.edtENPT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbHALT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbDEDY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbSVIM_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbREDN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbDEGC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.Static08.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXD.edtSOLR_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbDICL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.Static42.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXD.cmbKMIL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbMLGN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.Static18.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXD.Static21.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXD.edtHALT_PROW.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbMAMR_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtMNOM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.Static23.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXD.cmbDICL_CODE00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbKMIL_CODE00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbMLGN_CODE00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbBOTS_CODE00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbMLGN_CODE01.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtSOLR_NUMB00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.Static33.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXD.Static34.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXD.Static43.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXD.Static45.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXD.cmbKMIL_CODE01.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbCLSS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbHUSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbHUSO_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtCIRP_EMNR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.imgHelpedtCIRP_EMNR.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_MASTXD.edtCIRP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtCIRP_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_MASTXD.edtHPJ1_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtHPJ2_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtHOP1_ARNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtHOP2_ARNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtRCPS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtRCPC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtHDPP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtRCPS_RELA.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtRCPS_TLNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtRCMP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.cmbBOTS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.edtSOLR_NUMB01.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_MASTXD.Static28.addEventHandler("onclick", this.Static34_onclick, this);
            this.Tab0.tabHR_MASTXD.cmbLVTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tabHR_SCHCRR.btnHR_SCHCRRDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_SCHCRR.btnHR_SCHCRRAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.Tab0.tabHR_SCHCRR.grdHR_SCHCRR.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_BFCARR.btnHR_BFCARRAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_BFCARR.btnHR_BFCARRDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_FAMILY.btnHR_FAMILYDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_FAMILY.btnHR_FAMILYAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_FRLANG.btnHR_FRLANGAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_FRLANG.btnHR_FRLANGDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_FRLANG.grdHR_FRLANG.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_LICEXM.btnHR_LICEXMDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_LICEXM.btnHR_LICEXMAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_LICEXM.grdHR_LICEXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_REWARD.btnHR_REWARDAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_REWARD.btnHR_REWARDDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_REWARD.btnHR_DISCIPAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_REWARD.btnHR_DISCIPDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_PASSRR.btnHR_PASSRRAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_PASSRR.btnHR_PASSRRDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_PASSRR.grdHR_VISARR.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_PASSRR.btnHR_VISARRDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_PASSRR.btnHR_VISARRAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_DUTYRR.grdHR_DUTYRR.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_DUTYRR.btnHR_DUTYRRAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_DUTYRR.btnHR_DUTYRRDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_ATTACH.btnHR_ATTACHDel.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.Tab0.tabHR_ATTACH.btnHR_ATTACHAdd.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.Tab0.tabHR_ATTACH.grdHR_ATTACH.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.tabHR_ATTACH.grdHR_ATTACH.addEventHandler("oncellclick", this.Tab0_tabHR_ATTACH_grdHR_ATTACH_oncellclick, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRWRDV_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRWODN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static34.addEventHandler("onclick", this.Static34_onclick, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCCEM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtWRKS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static06.addEventHandler("onclick", this.Static34_onclick, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtENEE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static11.addEventHandler("onclick", this.Static34_onclick, this);
            this.edtEMPL_AGEX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSECT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDURS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSCDN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static17.addEventHandler("onclick", this.Static34_onclick, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDUTY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgDelPhoto.addEventHandler("onclick", this.imgDelPhoto_onclick, this);
            this.cmbWRDV_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbREDI_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medRERN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgPHOT_FILE.addEventHandler("onclick", this.imgPHOT_FILE_onclick, this);
            this.FileUpload.addEventHandler("onsuccess", this.fn_FileUploadCallback, this);
            this.FileUpload.addEventHandler("onerror", this.fn_FileUploadError, this);
            this.FileUpload.addEventHandler("onfindclick", this.FileUpload_onfindclick, this);
            this.FileUpload.addEventHandler("onitemchanged", this.fn_FileUpload, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
