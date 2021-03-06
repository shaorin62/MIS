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
                this.set_name("PAYF0030");
                this.set_scrollbars("none");
                this.set_titletext("퇴직금계산처리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">RETR_SEDN</Col><Col id=\"DSNAME\">dsSHRRETR_SEDN</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"REMK\">조회기준</Col></Row><Row><Col id=\"DSNAME\">dsSHRRERE_CODE</Col><Col id=\"CODEID\">RERE_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">퇴직사유</Col></Row><Row><Col id=\"DSNAME\">dsRERE_CODE</Col><Col id=\"CODEID\">RERE_CODE</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"REMK\">퇴직사유</Col></Row><Row><Col id=\"DSNAME\">dsTAXX_GUBN</Col><Col id=\"CODEID\">TAXX_GUBN</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"REMK\">과세구분</Col></Row><Row><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">은행구분</Col></Row><Row><Col id=\"DSNAME\">dsAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"REMK\">결재상태</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">TMM0006</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsRECE_SEQN</Col><Col id=\"COMBOID\">PAY0028</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">회차</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"CLSE_YSNO\" size=\"256\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQN\" size=\"32\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"256\" type=\"STRING\"/><Column id=\"APPR_PROC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPCXM", this);
            obj._setContents("<ColumnInfo><Column id=\"PAY1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY4_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"RERE_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"TAXX_GUBN\" size=\"6\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FINL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_PYDT\" size=\"8\" type=\"STRING\"/><Column id=\"FIBF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIAF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIBF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIAF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIDL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_PYDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIBF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIAF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIBF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIAF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PMST_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL1_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL1_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL1_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL1_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL2_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL2_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL2_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL3_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL3_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL3_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL4_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL4_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL4_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"DAVR_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MAVR_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVER_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CWRK_YCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CWRK_MCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"EXCP_MCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"REYS_YCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"REYS_MCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"REYS_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_RATE\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"NUJI_MONT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINL_APAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"VORN_ALLO\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVPY_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVBN_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PYET_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TRRT_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"OTDE_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DBPJ_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RTBM_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINL_PPTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PBUS_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"PFIR_NAME\" size=\"40\" type=\"STRING\"/><Column id=\"MIDL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MINT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MIDL_PPTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_INTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_STRD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_IHTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"WORC_INTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"WORC_STRD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"WORC_IHTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FPTA_ATDD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DDUC_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NPPC_ATDD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"HINC_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"LOAN_RPAM\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REEP_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PENS_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_ALWN\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/><Column id=\"RLPY_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BANK_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"64\" type=\"STRING\"/><Column id=\"DPST_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"CLSE_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"GRWS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"GRWX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"8\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"OPOS_NAME\" size=\"30\" type=\"BIGDECIMAL\"/><Column id=\"EMPL_NAME\" size=\"10\" type=\"BIGDECIMAL\"/><Column id=\"RERN_NUMB\" size=\"13\" type=\"BIGDECIMAL\"/><Column id=\"ENCO_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RETR_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"255\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"RTBN_AMOT\" size=\"15\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVER_PAYX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPD_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPAYX", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"PAY1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY4_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RTPY_TAMT\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CAL1_YMTH\" size=\"6\" type=\"BIGDECIMAL\"/><Column id=\"CAL1_BEDE\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL1_ENDD\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL1_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_YMTH\" size=\"6\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_BEDE\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_ENDD\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_YMTH\" size=\"6\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_BEDE\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_ENDD\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_YMTH\" size=\"6\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_BEDE\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_ENDD\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"DCNT_SUM\" size=\"5\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTBONU", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"PAYX_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVER_PAYX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVER_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPPXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TAPA_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TAPF_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"TAPB_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"TAPA_NUMB\" size=\"64\" type=\"STRING\"/><Column id=\"TAPD_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPD_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPWXM", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"RSTR_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"REND_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RERE_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"PFIR_NAME\" size=\"40\" type=\"STRING\"/><Column id=\"PBUS_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"MIDL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MINT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MITA_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MITA_RPAY1\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FITA_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FITA_RPAY1\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLNT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLTA_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLTA_RPAY1\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MIDL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_PYDT\" size=\"8\" type=\"STRING\"/><Column id=\"MICT_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIEX_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIAD_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MICT_YEAR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FINL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_PYDT\" size=\"8\" type=\"STRING\"/><Column id=\"FICT_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIEX_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIAD_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FICT_YEAR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"TOTL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"TOTL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"TLCT_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TLEX_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TLAD_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TLOL_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TLCT_YEAR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"BEFO_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"BEFO_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"BFCT_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"BFEX_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"BFAD_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"BFCT_YEAR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"AFTR_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"AFTR_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"AFCT_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"AFEX_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"AFAD_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"AFCT_YEAR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"AFRD_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CSYD_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"STAN_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BFST_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BFYA_STAD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BFYA_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BEFO_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFST_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFYA_STAD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFCS_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFCC_TAXX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFYA_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFTR_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLST_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLYA_STAD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLCS_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLCC_TAXX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLYA_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_PPTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLSR_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPS_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPF_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"TAPB_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"TAPA_NUMB\" size=\"64\" type=\"STRING\"/><Column id=\"TAPD_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"TAPD_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPT_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SURE_ITAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SURE_RTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SURE_FTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SURE_TAMT\" size=\"255\" type=\"STRING\"/><Column id=\"PORE_ITAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PORE_RTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PORE_FTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PORE_TAMT\" size=\"255\" type=\"STRING\"/><Column id=\"DEDU_ITAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_RTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_FTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_TAMT\" size=\"255\" type=\"STRING\"/><Column id=\"PENS_CPDT\" size=\"18\" type=\"STRING\"/><Column id=\"VOLU_PAYX\" size=\"18\" type=\"STRING\"/><Column id=\"CALC_REIN\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CWYC_DDUC\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CONV_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"COWA_DDUC\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REIN_STAS\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CONV_CLTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CLCR_TXAM\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_YEAR\" size=\"4\" type=\"STRING\"/><Column id=\"SPUE_CLTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"OFFI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JURI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DBPJ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CLSD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPCXM_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"PAY1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY4_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"RERE_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"TAXX_GUBN\" size=\"6\" type=\"STRING\"/><Column id=\"ENFC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"FINL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_PYDT\" size=\"8\" type=\"STRING\"/><Column id=\"FIBF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIAF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIBF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIAF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIDL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_PYDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIBF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIAF_EXMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIBF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIAF_ADMT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PMST_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL1_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL1_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL1_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL1_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL2_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL2_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL2_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL3_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL3_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL3_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_YMTH\" size=\"6\" type=\"STRING\"/><Column id=\"CAL4_BEDE\" size=\"8\" type=\"STRING\"/><Column id=\"CAL4_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"CAL4_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"DAVR_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MAVR_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVER_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CWRK_YCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CWRK_MCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_DATE\" size=\"30\" type=\"BIGDECIMAL\"/><Column id=\"EXCP_MCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"REYS_YCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"REYS_MCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"REYS_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_RATE\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"NUJI_MONT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINL_APAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"VORN_ALLO\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVPY_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVBN_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PYET_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TRRT_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"OTDE_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DBPJ_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RTBM_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PRTN_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINL_PPTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PBUS_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"PFIR_NAME\" size=\"40\" type=\"STRING\"/><Column id=\"MIDL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MINT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MIDL_PPTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_INTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_STRD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_IHTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"WORC_INTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"WORC_STRD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"WORC_IHTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FPTA_ATDD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DDUC_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"NPPC_ATDD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"HINC_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"LOAN_RPAM\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REEP_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PENS_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RETI_ALWN\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/><Column id=\"RLPY_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RLPY_RTBN\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BANK_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"64\" type=\"STRING\"/><Column id=\"DPST_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"CLSE_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"GRWS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"GRWX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"8\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"OPOS_NAME\" size=\"30\" type=\"BIGDECIMAL\"/><Column id=\"EMPL_NAME\" size=\"10\" type=\"BIGDECIMAL\"/><Column id=\"RERN_NUMB\" size=\"13\" type=\"BIGDECIMAL\"/><Column id=\"ENCO_DATE\" size=\"8\" type=\"DATE\"/><Column id=\"RETR_DATE\" size=\"8\" type=\"DATE\"/><Column id=\"POST_NUMB\" size=\"6\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"255\" type=\"STRING\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"RTBN_AMOT\" size=\"15\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVER_PAYX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPD_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPAYX_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"PAY1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAY4_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RTPY_TAMT\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CAL1_YMTH\" size=\"6\" type=\"BIGDECIMAL\"/><Column id=\"CAL1_BEDE\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL1_ENDD\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL1_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_YMTH\" size=\"6\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_BEDE\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_ENDD\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL2_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_YMTH\" size=\"6\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_BEDE\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_ENDD\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL3_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_YMTH\" size=\"6\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_BEDE\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_ENDD\" size=\"8\" type=\"BIGDECIMAL\"/><Column id=\"CAL4_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"DCNT_SUM\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"APAY_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTBONU_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_CODE\" size=\"5\" type=\"STRING\"/><Column id=\"EXPD_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"PAYX_DCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVER_PAYX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AVER_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPWXM_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"RSTR_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"REND_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RERE_CODE\" size=\"6\" type=\"STRING\"/><Column id=\"PFIR_NAME\" size=\"40\" type=\"STRING\"/><Column id=\"PBUS_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"MIDL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MINT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MITA_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MITA_RPAY1\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FINT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FITA_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FITA_RPAY1\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLNT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLTA_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLTA_RPAY1\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"MIDL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"MIDL_PYDT\" size=\"8\" type=\"STRING\"/><Column id=\"MICT_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIEX_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MIAD_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"MICT_YEAR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FINL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"FINL_PYDT\" size=\"8\" type=\"STRING\"/><Column id=\"FICT_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIEX_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FIAD_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"FICT_YEAR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_ISDT\" size=\"8\" type=\"STRING\"/><Column id=\"TOTL_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"TOTL_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"TLCT_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TLEX_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TLAD_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TLOL_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TLCT_YEAR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"BEFO_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"BEFO_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"BFCT_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"BFEX_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"BFAD_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"BFCT_YEAR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"AFTR_STDT\" size=\"8\" type=\"STRING\"/><Column id=\"AFTR_ENDT\" size=\"8\" type=\"STRING\"/><Column id=\"AFCT_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"AFEX_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"AFAD_MONT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"AFCT_YEAR\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"AFRD_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CSYD_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"STAN_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BFST_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BFYA_STAD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BFYA_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BEFO_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFST_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFYA_STAD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFCS_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFCC_TAXX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFYA_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AFTR_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLST_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLYA_STAD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLCS_ASST\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLCC_TAXX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLYA_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_CTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_PPTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TLSR_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPS_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPF_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"TAPB_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"TAPA_NUMB\" size=\"64\" type=\"STRING\"/><Column id=\"TAPD_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"TAPD_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPT_RPAY\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPT_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SURE_ITAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SURE_RTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SURE_FTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"SURE_TAMT\" size=\"255\" type=\"STRING\"/><Column id=\"PORE_ITAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PORE_RTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PORE_FTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PORE_TAMT\" size=\"255\" type=\"STRING\"/><Column id=\"DEDU_ITAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_RTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_FTAX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_TAMT\" size=\"255\" type=\"STRING\"/><Column id=\"PENS_CPDT\" size=\"18\" type=\"STRING\"/><Column id=\"VOLU_PAYX\" size=\"18\" type=\"STRING\"/><Column id=\"CALC_REIN\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CWYC_DDUC\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CONV_WAGE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"COWA_DDUC\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"REIN_STAS\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CONV_CLTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CLCR_TXAM\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_YEAR\" size=\"4\" type=\"STRING\"/><Column id=\"SPUE_CLTX\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"OFFI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JURI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DBPJ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CLSD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RECL_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"LFDN_CODE\" type=\"STRING\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPPXM_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TAPA_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"TAPF_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"TAPB_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"TAPA_NUMB\" size=\"64\" type=\"STRING\"/><Column id=\"TAPD_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"TAPD_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_SVINSU_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"5\" type=\"STRING\"/><Column id=\"SINS_SEQN\" size=\"5\" type=\"STRING\"/><Column id=\"SINF_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"SIND_AMOT\" size=\"15\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("50");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("52");
            obj.set_text("퇴직금계산처리(퇴직금계산-계산내역)");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("53");
            obj.set_text("홈 > 급여관리 > 퇴직금관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_MASTXM", "absolute", "8", "154", null, null, "945", "15", this);
            obj.set_taborder("69");
            obj.set_binddataset("dsHR_MASTXM");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"사번\"/><Cell col=\"2\" displaytype=\"text\" text=\"성명\"/><Cell col=\"3\" displaytype=\"text\" text=\"소속\"/><Cell col=\"4\" displaytype=\"text\" text=\"부서\"/><Cell col=\"5\" displaytype=\"text\" text=\"직위\"/><Cell col=\"6\" displaytype=\"text\" text=\"결재상태\"/><Cell col=\"7\" displaytype=\"text\" text=\"마감여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'text' : 'none'\" style=\"align:center;\" text=\"bind:EMPL_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\" expandimage=\"URL('theme://images\\btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: ;\" text=\"bind:OPOS_NAME\"/><Cell col=\"6\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:APPR_STAT\"/><Cell col=\"7\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:CLSE_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "242", "288", "20", "60", null, null, this);
            obj.set_taborder("71");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "50", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "694", "56", "128", "4", null, null, this);
            obj.set_taborder("77");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRRETR_STDT", "absolute", "97", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static55", "absolute", "199", "97", "14", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRRETR_ENDT", "absolute", "215", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "411", "71", "80", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "493", "71", "21", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "516", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "343", "71", "52", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "645", "71", "52", "21", null, null, this);
            obj.set_taborder("87");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "713", "71", "80", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "795", "71", "21", "21", null, null, this);
            obj.set_taborder("89");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "818", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "97", "70", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "343", "97", "70", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("조회기준");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRRETR_SEDN", "absolute", "412", "97", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Static("stInformation", "absolute", "8", "134", "262", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "645", "97", "70", "21", null, null, this);
            obj.set_taborder("97");
            obj.set_text("퇴직사유");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRRERE_CODE", "absolute", "713", "97", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");

            obj = new Combo("cmbSHRENFC_CODE", "absolute", "97", "71", "218", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_readonly("true");

            obj = new Tab("Tab", "absolute", null, "154", "900", null, "25", "15", this);
            obj.set_taborder("101");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.Tab);
            obj.set_text("퇴직금계산");
            this.Tab.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "67", "10", "67", null, null, this.Tab.tab1);
            obj.set_taborder("16");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "10", null, null, this.Tab.tab1);
            obj.set_taborder("17");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("spSearchBox03", "absolute", "10", "10", null, "57", "10", null, this.Tab.tab1);
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "653", "-179", "80", "25", null, null, this.Tab.tab1);
            obj.set_taborder("19");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("stRECE_SEQN", "absolute", "30", "16", "47", "21", null, null, this.Tab.tab1);
            obj.set_taborder("20");
            obj.set_text("회차");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbRECE_SEQN", "absolute", "98", "16", "99", "21", null, null, this.Tab.tab1);
            this.Tab.tab1.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj = new Static("stFINL_STDT", "absolute", "216", "16", "84", "21", null, null, this.Tab.tab1);
            obj.set_taborder("21");
            obj.set_text("기산시작일");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("stFINL_ENDT", "absolute", "413", "16", "84", "21", null, null, this.Tab.tab1);
            obj.set_taborder("22");
            obj.set_text("기산종료일");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("stPMST_DATE", "absolute", "610", "16", "84", "21", null, null, this.Tab.tab1);
            obj.set_taborder("23");
            obj.set_text("급여기준일");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("stRERE_CODE", "absolute", "30", "40", "70", "21", null, null, this.Tab.tab1);
            obj.set_taborder("24");
            obj.set_text("퇴직사유");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbRERE_CODE", "absolute", "98", "40", "99", "21", null, null, this.Tab.tab1);
            this.Tab.tab1.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj = new Static("stTAXX_GUBN", "absolute", "216", "40", "70", "21", null, null, this.Tab.tab1);
            obj.set_taborder("25");
            obj.set_text("과세구분");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("stFINL_PYDT", "absolute", "413", "40", "84", "21", null, null, this.Tab.tab1);
            obj.set_taborder("26");
            obj.set_text("지급예정일");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("stREMK_100X", "absolute", "610", "40", "43", "21", null, null, this.Tab.tab1);
            obj.set_taborder("27");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Edit("edtREMK_100X", "absolute", "692", "40", "177", "21", null, null, this.Tab.tab1);
            obj.set_taborder("7");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "303", "67", "80", "30", null, null, this.Tab.tab1);
            obj.set_taborder("30");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Button("btnPY_RTBONUAdd", "absolute", null, "72", "62", "21", "75", null, this.Tab.tab1);
            obj.set_taborder("31");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Button("btnPY_RTBONUDel", "absolute", null, "72", "62", "21", "10", null, this.Tab.tab1);
            obj.set_taborder("32");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "656", "93", "216", "4", null, null, this.Tab.tab1);
            obj.set_taborder("34");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Button("btnPY_RTPAYXAdd", "absolute", null, "72", "62", "21", "410", null, this.Tab.tab1);
            obj.set_taborder("35");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Button("btnPY_RTPAYXDel", "absolute", null, "72", "62", "21", "345", null, this.Tab.tab1);
            obj.set_taborder("36");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "10", "75", "262", "21", null, null, this.Tab.tab1);
            obj.set_taborder("37");
            obj.set_text("급여");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", null, "75", "92", "21", "162", null, this.Tab.tab1);
            obj.set_taborder("38");
            obj.set_text("상여");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Grid("grdPY_RTPAYX", "absolute", "10", "97", null, "112", "280", null, this.Tab.tab1);
            obj.set_taborder("9");
            obj.set_autoenter("select");
            obj.set_binddataset("dsPY_RTPAYX");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"120\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"22\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"수당\"/><Cell col=\"1\" cssclass=\"grd_essential\" text=\"M\"/><Cell col=\"2\" text=\"M+1\"/><Cell col=\"3\" text=\"M+2\"/><Cell col=\"4\" cssclass=\"grd_essential\" text=\"M+3\"/><Cell col=\"5\" cssclass=\"grd_essential\" text=\"합계\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:EXPD_NAME\" expandshow=\"hide\" expandimage=\"URL('theme://images\\btn_WF_Search.png')\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAY1_AMOT\" editlimit=\"15\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAY2_AMOT\" editlimit=\"15\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAY3_AMOT\" editlimit=\"15\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAY4_AMOT\" editlimit=\"15\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:RTPY_TAMT\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum('PAY1_AMOT') == 0 ? 0 : dataset.getSum('PAY1_AMOT')\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAY2_AMOT') == 0 ? 0 : dataset.getSum('PAY2_AMOT')\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAY3_AMOT') == 0 ? 0 : dataset.getSum('PAY3_AMOT')\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAY4_AMOT') == 0 ? 0 : dataset.getSum('PAY4_AMOT')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:(dataset.getSum('PAY1_AMOT') == 0 ? 0 : dataset.getSum('PAY1_AMOT')) + (dataset.getSum('PAY2_AMOT') == 0 ? 0 : dataset.getSum('PAY2_AMOT')) + (dataset.getSum('PAY3_AMOT') == 0 ? 0 : dataset.getSum('PAY3_AMOT')) + (dataset.getSum('PAY4_AMOT') == 0 ? 0 : dataset.getSum('PAY4_AMOT'))\"/></Band></Format></Formats>");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Grid("grdPY_RTBONU", "absolute", null, "97", "250", "112", "10", null, this.Tab.tab1);
            obj.set_taborder("10");
            obj.set_autoenter("select");
            obj.set_binddataset("dsPY_RTBONU");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"22\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell cssclass=\"grd_essential\" text=\"지급일\"/><Cell col=\"1\" text=\"수당\"/><Cell col=\"2\" cssclass=\"grd_essential\" text=\"상여금액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" editfilter=\"number\" style=\"align:center;\" text=\"bind:PAYX_DATE\" editlimit=\"6\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" edittype=\"none\" style=\"align: ;\" text=\"bind:EXPD_NAME\" expandshow=\"hide\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:PAYX_AMOT\" editlimit=\"15\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAYX_AMOT') == 0 ? 0 : dataset.getSum('PAYX_AMOT')\"/></Band></Format></Formats>");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("spSearchBox00", "absolute", "9", null, null, "33", "10", "7", this.Tab.tab1);
            obj.set_taborder("39");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "31", null, "66", "21", null, "13", this.Tab.tab1);
            obj.set_taborder("40");
            obj.set_text("소득세");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "437", null, "66", "21", null, "13", this.Tab.tab1);
            obj.set_taborder("41");
            obj.set_text("농특세");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskRETI_STRD", "absolute", "490", null, "99", "21", null, "13", this.Tab.tab1);
            obj.set_taborder("13");
            obj.style.set_align("right middle");
            obj.set_mask("###,###,###,###,###");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "217", null, "84", "21", null, "13", this.Tab.tab1);
            obj.set_taborder("42");
            obj.set_text("지방소득세");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskRETI_IHTX", "absolute", "300", null, "99", "21", null, "13", this.Tab.tab1);
            obj.set_taborder("14");
            obj.style.set_align("right middle");
            obj.set_mask("###,###,###,###,###");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "619", null, "84", "21", null, "13", this.Tab.tab1);
            obj.set_taborder("43");
            obj.set_text("회사지급액");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskRLPY_AMOT", "absolute", "703", null, "99", "21", null, "13", this.Tab.tab1);
            obj.set_taborder("15");
            obj.style.set_align("right middle");
            obj.set_mask("###,###,###,###,###");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "101", "209", "80", "5", null, null, this.Tab.tab1);
            obj.set_taborder("47");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Tab("SubTab", "absolute", "9", "214", null, null, "10", "48", this.Tab.tab1);
            obj.set_taborder("11");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_2depth");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.Tab.tab1.SubTab);
            obj.set_text("계산내역");
            this.Tab.tab1.SubTab.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "8", "233", "173", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "180", "233", "174", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "353", "233", "174", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("157");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "526", "233", "174", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("158");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "699", "233", "171", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "436", "182", "109", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "544", "182", "109", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "652", "182", "109", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "760", "182", "110", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "115", "182", "108", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "222", "182", "108", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "329", "182", "108", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static150", "absolute", "8", "182", "108", "29", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "593", "0", "80", "10", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("83");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("spSearchBox03", "absolute", "8", "8", "862", "105", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("84");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stAVPY_AMOT", "absolute", "28", "14", "84", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("85");
            obj.set_text("급여평균");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stAVBN_AMOT", "absolute", "230", "14", "84", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("87");
            obj.set_text("상여평균");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskAVBN_AMOT", "absolute", "311", "14", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("1");
            obj.style.set_align("right middle");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_mask("###,###,###,###,###");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stAVER_WAGE", "absolute", "431", "14", "66", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("89");
            obj.set_text("평균임금");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskAVER_WAGE", "absolute", "512", "14", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("2");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stCWRK_YMCT", "absolute", "631", "14", "84", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("91");
            obj.set_text("근속기간");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Edit("edtCWRK_YMCT", "absolute", "751", "14", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("3");
            obj.style.set_align("right middle");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stRETI_WAGE", "absolute", "28", "38", "84", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("93");
            obj.set_text("일반퇴직금");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stVORN_ALLO", "absolute", "230", "38", "84", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("95");
            obj.set_text("명예퇴직금");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskVORN_ALLO", "absolute", "311", "38", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("5");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_limitbymask("both");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stPYET_AMOT", "absolute", "431", "38", "66", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("97");
            obj.set_text("기타지급");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskPYET_AMOT", "absolute", "512", "38", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("6");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_limitbymask("both");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stPENS_AMOT", "absolute", "631", "38", "104", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("99");
            obj.set_text("퇴직연금예치금");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskPENS_AMOT", "absolute", "751", "38", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("7");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static59", "absolute", "211", "113", "46", "23", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("101");
            obj.set_text("23");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stTRRT_AMOT", "absolute", "28", "62", "84", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("103");
            obj.set_text("퇴직전환금");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stOTDE_AMOT", "absolute", "230", "62", "84", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("105");
            obj.set_text("기타공제");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskOTDE_AMOT", "absolute", "311", "62", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("9");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_limitbymask("both");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stBANK_CODE", "absolute", "28", "86", "84", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("107");
            obj.set_text("은행");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Combo("calBANK_CODE", "absolute", "110", "86", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_type("search");
            obj = new Static("stACNT_NUMB", "absolute", "230", "86", "84", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("109");
            obj.set_text("계좌번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stDPST_NAME", "absolute", "431", "86", "66", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("111");
            obj.set_text("예금주");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Edit("edtDPST_NAME", "absolute", "512", "86", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("14");
            obj.set_maxlength("30");
            obj.set_lengthunit("ascii");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "8", "116", "173", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("115");
            obj.set_text("퇴직금지급(영수)내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stFINL_ISDT", "absolute", "8", "136", "108", "47", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("117");
            obj.set_text("<b v='true'><fc v='#ff0000'>*</b></fc> 입사일");
            obj.set_cssclass("sta_WF_Label_C");
            obj.set_usedecorate("true");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stFINL_STDT2", "absolute", "115", "136", "108", "47", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("118");
            obj.set_text("<b v='true'><fc v='#ff0000'>*</b></fc> 기산일");
            obj.set_cssclass("sta_WF_Label_C");
            obj.set_usedecorate("true");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stFINL_ENDT2", "absolute", "222", "136", "108", "47", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("119");
            obj.set_text("<b v='true'><fc v='#ff0000'>*</b></fc> 퇴사일");
            obj.set_cssclass("sta_WF_Label_C");
            obj.set_usedecorate("true");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stFINL_PYDT2", "absolute", "329", "136", "108", "47", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("120");
            obj.set_text("<b v='true'><fc v='#ff0000'>*</b></fc> 지급일");
            obj.set_cssclass("sta_WF_Label_C");
            obj.set_usedecorate("true");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "436", "136", "217", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("121");
            obj.set_text("제외월수");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Calendar("calFINL_ISDT", "absolute", "12", "186", "100", "21", null, null, this.Tab.tab1.SubTab.tab1);
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj = new Calendar("calFINL_STDT2", "absolute", "119", "186", "100", "21", null, null, this.Tab.tab1.SubTab.tab1);
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj = new Calendar("calFINL_PYDT2", "absolute", "333", "186", "100", "21", null, null, this.Tab.tab1.SubTab.tab1);
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj = new Calendar("calFINL_ENDT2", "absolute", "226", "186", "100", "21", null, null, this.Tab.tab1.SubTab.tab1);
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj = new Static("stFIBF_EXMT", "absolute", "436", "159", "109", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("126");
            obj.set_text("2012.12.31.이전");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "652", "136", "218", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("127");
            obj.set_text("지급일");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stFIAF_EXMT", "absolute", "544", "159", "109", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("128");
            obj.set_text("2013.01.01.이후");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "652", "159", "109", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("129");
            obj.set_text("2012.12.31.이전");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "760", "159", "110", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("130");
            obj.set_text("2013.01.01.이후");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskFIBF_EXMT", "absolute", "440", "186", "101", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("19");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskFIAF_EXMT", "absolute", "548", "186", "101", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("20");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskFIBF_ADMT", "absolute", "656", "186", "101", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("21");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskFIAF_ADMT", "absolute", "764", "186", "102", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("22");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "8", "210", "173", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("135");
            obj.set_text("퇴직급여");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskFINL_RPAY", "absolute", "12", "237", "165", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("23");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "180", "210", "174", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("137");
            obj.set_text("비과세 퇴직급여");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskFINT_RPAY", "absolute", "184", "237", "166", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("24");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskFINL_PPTX", "absolute", "357", "237", "166", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("25");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "353", "210", "174", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("140");
            obj.set_text("기납부세액");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "526", "210", "174", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("142");
            obj.set_text("DB형연금가입일");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskRTBM_AMOT", "absolute", "703", "237", "163", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("27");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "699", "210", "171", "24", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("144");
            obj.set_text("임원퇴직금");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Edit("edtACNT_NUMB", "absolute", "311", "86", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("13");
            obj.set_maxlength("64");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskTRRT_AMOT", "absolute", "110", "62", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("8");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_limitbymask("both");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskRETI_WAGE", "absolute", "110", "38", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("4");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskAVPY_AMOT", "absolute", "110", "14", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("0");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Calendar("calDBPJ_DATE", "absolute", "530", "237", "166", "21", null, null, this.Tab.tab1.SubTab.tab1);
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_value("");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static153", "absolute", "8", "136", "862", "2", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_LabelLine");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stPYET_AMOT00", "absolute", "431", "60", "76", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("160");
            obj.set_text("퇴직위로금");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskRTBN_AMOT", "absolute", "512", "62", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("10");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_limitbymask("both");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Static("stPYET_AMOT01", "absolute", "631", "60", "114", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("162");
            obj.set_text("급여성퇴직위로금");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new MaskEdit("mskPRTN_AMOT", "absolute", "751", "62", "99", "21", null, null, this.Tab.tab1.SubTab.tab1);
            obj.set_taborder("11");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            obj.set_limitbymask("both");
            this.Tab.tab1.SubTab.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.Tab.tab1.SubTab);
            obj.set_text("중간지급");
            this.Tab.tab1.SubTab.addChild(obj.name, obj);
            obj = new Static("Static150", "absolute", "8", "145", "108", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "115", "145", "108", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "222", "145", "108", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "329", "145", "108", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "436", "145", "109", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "544", "145", "109", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "652", "145", "109", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "760", "145", "110", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("spSearchBox03", "absolute", "8", "27", "862", "39", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("14");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static64", "absolute", "28", "36", "84", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("15");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static67", "absolute", "238", "36", "94", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("16");
            obj.set_text("법인명(상호)");
            obj.set_cssclass("styFormItemCap");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new MaskEdit("mskPBUS_NUMB", "absolute", "110", "36", "99", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("0");
            obj.set_mask("###-##-#####");
            obj.style.set_align("center middle");
            obj.set_type("string");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "8", "77", "262", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("33");
            obj.set_text("퇴직금 중간지급(영수)내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "8", "99", "108", "47", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("35");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "115", "99", "108", "47", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("36");
            obj.set_text("<b v='true'><fc v='#ff0000'>*</b></fc> 기산일");
            obj.set_cssclass("sta_WF_Label_C");
            obj.set_usedecorate("true");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "222", "99", "108", "47", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("37");
            obj.set_text("<b v='true'><fc v='#ff0000'>*</b></fc> 퇴사일");
            obj.set_cssclass("sta_WF_Label_C");
            obj.set_usedecorate("true");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "329", "99", "108", "47", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("38");
            obj.set_text("지급일");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "436", "99", "217", "24", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("39");
            obj.set_text("제외월수");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Calendar("calMIDL_ISDT", "absolute", "12", "149", "100", "21", null, null, this.Tab.tab1.SubTab.tab2);
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("calMIDL_STDT", "absolute", "119", "149", "100", "21", null, null, this.Tab.tab1.SubTab.tab2);
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("calMIDL_PYDT", "absolute", "333", "149", "100", "21", null, null, this.Tab.tab1.SubTab.tab2);
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("calMIDL_ENDT", "absolute", "226", "149", "100", "21", null, null, this.Tab.tab1.SubTab.tab2);
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static23", "absolute", "436", "122", "109", "24", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("44");
            obj.set_text("2012.12.31.이전");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "652", "99", "218", "24", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("45");
            obj.set_text("기산일");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "544", "122", "109", "24", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("46");
            obj.set_text("2013.01.01.이후");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "652", "122", "109", "24", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("47");
            obj.set_text("2012.12.31.이전");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "760", "122", "110", "24", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("48");
            obj.set_text("2013.01.01.이후");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new MaskEdit("mskMIBF_EXMT", "absolute", "440", "149", "101", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("6");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new MaskEdit("mskMIAF_EXMT", "absolute", "548", "149", "101", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("7");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new MaskEdit("mskMIBF_ADMT", "absolute", "656", "149", "101", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("8");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new MaskEdit("mskMIAF_ADMT", "absolute", "764", "149", "102", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("9");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "8", "183", "291", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("53");
            obj.set_text("퇴직급여");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "298", "183", "290", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("55");
            obj.set_text("비과세 퇴직급여");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "587", "183", "283", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("58");
            obj.set_text("기납부세액");
            obj.set_cssclass("sta_WF_Label_C");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "8", "7", "262", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("64");
            obj.set_text("중간지급 징수의무자");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "411", "0", "80", "27", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("65");
            obj.set_text("h 27");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Edit("edtPFIR_NAME", "absolute", "330", "36", "279", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("1");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "211", "66", "80", "32", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("74");
            obj.set_text("32");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static153", "absolute", "8", "98", "862", "2", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_LabelLine");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "8", "211", "291", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "298", "211", "290", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "587", "211", "283", "29", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new MaskEdit("mskMINT_RPAY", "absolute", "302", "215", "282", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("11");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new MaskEdit("mskMIDL_PPTX", "absolute", "591", "215", "275", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("12");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new MaskEdit("mskMIDL_RPAY", "absolute", "12", "215", "283", "21", null, null, this.Tab.tab1.SubTab.tab2);
            obj.set_taborder("10");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_align("right middle");
            this.Tab.tab1.SubTab.tab2.addChild(obj.name, obj);
            obj = new Tabpage("tab3", this.Tab.tab1.SubTab);
            obj.set_text("과세이연계좌");
            this.Tab.tab1.SubTab.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "8", "9", "262", "21", null, null, this.Tab.tab1.SubTab.tab3);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab.tab1.SubTab.tab3.addChild(obj.name, obj);
            obj = new Button("btnPY_RTPPXMAdd", "absolute", null, "5", "62", "21", "73", null, this.Tab.tab1.SubTab.tab3);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.Tab.tab1.SubTab.tab3.addChild(obj.name, obj);
            obj = new Button("btnPY_RTPPXMDel", "absolute", null, "5", "62", "21", "8", null, this.Tab.tab1.SubTab.tab3);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.Tab.tab1.SubTab.tab3.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.Tab.tab1.SubTab.tab3);
            obj.set_taborder("4");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.SubTab.tab3.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "498", "267", "80", "10", null, null, this.Tab.tab1.SubTab.tab3);
            obj.set_taborder("5");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.SubTab.tab3.addChild(obj.name, obj);
            obj = new Grid("grdPY_RTPPXM", "absolute", "8", "30", null, null, "8", "8", this.Tab.tab1.SubTab.tab3);
            obj.set_taborder("6");
            obj.set_binddataset("dsPY_RTPPXM");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"퇴직연금사업자명\"/><Cell col=\"1\" style=\"background: ;\" text=\"사업자등록번호\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"은행명\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"계좌입금액\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"입금(이체)일\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"text\" style=\"align:left;\" text=\"bind:TAPF_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" suppress=\"0\"/><Cell col=\"1\" editfilter=\"number\" style=\"align: ;\" text=\"bind:TAPB_NUMB\" mask=\"###-##-#####\" editlimit=\"10\" suppress=\"0\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:BANK_CODE\" editlimit=\"0\" suppress=\"0\" combodisplayrowcount=\"10\"/><Cell col=\"3\" edittype=\"text\" style=\"align: ;\" text=\"bind:TAPA_NUMB\" editlimit=\"0\" suppress=\"0\"/><Cell col=\"4\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:TAPD_AMOT\" editlimit=\"15\" suppress=\"0\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align: ;\" text=\"bind:TAPD_DATE\" editlimit=\"0\" suppress=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"0\" suppress=\"0\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('TAPD_AMOT')\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.Tab.tab1.SubTab.tab3.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "10", "90", "216", "7", null, null, this.Tab.tab1);
            obj.set_taborder("52");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Calendar("calFINL_ENDT", "absolute", "495", "16", "100", "21", null, null, this.Tab.tab1);
            this.Tab.tab1.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("calFINL_PYDT", "absolute", "495", "40", "100", "21", null, null, this.Tab.tab1);
            this.Tab.tab1.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("calPMST_DATE", "absolute", "692", "16", "100", "21", null, null, this.Tab.tab1);
            this.Tab.tab1.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("calFINL_STDT", "absolute", "298", "16", "100", "21", null, null, this.Tab.tab1);
            this.Tab.tab1.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("true");
            obj = new Button("btnGET_PAYX", "absolute", "795", "16", "74", "21", null, null, this.Tab.tab1);
            obj.set_taborder("8");
            obj.set_text("계산처리");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbTAXX_GUBN", "absolute", "298", "40", "100", "21", null, null, this.Tab.tab1);
            this.Tab.tab1.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj = new MaskEdit("mskRETI_INTX", "absolute", "86", null, "99", "21", null, "13", this.Tab.tab1);
            obj.set_taborder("12");
            obj.style.set_align("right middle");
            obj.set_mask("###,###,###,###,###");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static59", "absolute", "11", "20", "30", "43", null, null, this.Tab.tab1);
            obj.set_taborder("53");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Button("btnPopup", "absolute", null, "72", "62", "21", "280", null, this.Tab.tab1);
            obj.set_taborder("54");
            obj.set_text("급여조정");
            obj.set_cssclass("btn_WF_Module");
            this.Tab.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.Tab);
            obj.set_text("퇴직금정산");
            this.Tab.addChild(obj.name, obj);
            obj = new Grid("grdPY_RTPWXM", "absolute", "10", "10", null, null, "10", "10", this.Tab.tab2);
            obj.set_taborder("0");
            obj.set_binddataset("dsPY_RTPWXM");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"body\"><Cell rowspan=\"6\" style=\"background:#d6d6d6ff;background2:#d6d6d6ff;selectbackground:#d6d6d6ff;\" text=\"퇴직&#13;&#10;급여&#13;&#10;현황\"/><Cell col=\"1\" colspan=\"4\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"근 무 처 구 분\"/><Cell col=\"5\" colspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"중간지급 등\"/><Cell col=\"7\" colspan=\"3\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"최종분\"/><Cell col=\"10\" colspan=\"3\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"정산(합산)\"/><Cell row=\"1\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(13)근무처명\"/><Cell row=\"1\" col=\"5\" colspan=\"2\" text=\"bind:PFIR_NAME\"/><Cell row=\"1\" col=\"7\" colspan=\"3\" text=\"bind:OFFI_NAME\"/><Cell row=\"1\" col=\"10\" colspan=\"3\" text=\"-\"/><Cell row=\"2\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(14)사업자등록번호\"/><Cell row=\"2\" col=\"5\" colspan=\"2\" text=\"bind:PBUS_NUMB\" mask=\"expr:PBUS_NUMB == &quot;&quot; ? &quot;&quot; : &quot;###-##-#####&quot;\"/><Cell row=\"2\" col=\"7\" colspan=\"3\" text=\"bind:BSNS_NUMB\" mask=\"expr:BSNS_NUMB == &quot;&quot; ? &quot;&quot; : &quot;###-##-#####&quot;\"/><Cell row=\"2\" col=\"10\" colspan=\"3\" text=\"-\"/><Cell row=\"3\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(15)퇴직급여\"/><Cell row=\"3\" col=\"5\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MIDL_RPAY\"/><Cell row=\"3\" col=\"7\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FINL_RPAY\"/><Cell row=\"3\" col=\"10\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTL_RPAY\"/><Cell row=\"4\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(16)비과세 퇴직급여\"/><Cell row=\"4\" col=\"5\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MINT_RPAY\"/><Cell row=\"4\" col=\"7\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FINT_RPAY\"/><Cell row=\"4\" col=\"10\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TLNT_RPAY\"/><Cell row=\"5\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(17)과세대상 퇴직급여(15-16)\"/><Cell row=\"5\" col=\"5\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:MIDL_RPAY-MINT_RPAY\"/><Cell row=\"5\" col=\"7\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:FINL_RPAY-FINT_RPAY\"/><Cell row=\"5\" col=\"10\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:TOTL_RPAY-TLNT_RPAY\"/><Cell row=\"6\" rowspan=\"6\" style=\"background:#d6d6d6ff;background2:#d6d6d6ff;selectbackground:#d6d6d6ff;\" text=\"근속&#13;&#10;연수\"/><Cell row=\"6\" col=\"1\" colspan=\"3\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"구분\"/><Cell row=\"6\" col=\"4\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(18)입사일\"/><Cell row=\"6\" col=\"5\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(19)기산일\"/><Cell row=\"6\" col=\"6\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(20)퇴사일\"/><Cell row=\"6\" col=\"7\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(21)지급일\"/><Cell row=\"6\" col=\"8\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(22)근속월수\"/><Cell row=\"6\" col=\"9\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(23)제외월수\"/><Cell row=\"6\" col=\"10\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(24)가산월수\"/><Cell row=\"6\" col=\"11\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(25)중복월수\"/><Cell row=\"6\" col=\"12\" style=\"background:#ebebebff;background2:#ebebebff;selectbackground:#ebebebff;\" text=\"(26)근속연수\"/><Cell row=\"7\" col=\"1\" colspan=\"3\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"중간지급 근속연수\"/><Cell row=\"7\" col=\"4\" displaytype=\"date\" text=\"bind:MIDL_ISDT\" calendardisplaynulltype=\"none\"/><Cell row=\"7\" col=\"5\" displaytype=\"date\" text=\"bind:MIDL_STDT\" calendardisplaynulltype=\"none\"/><Cell row=\"7\" col=\"6\" displaytype=\"date\" text=\"bind:MIDL_ENDT\" calendardisplaynulltype=\"none\"/><Cell row=\"7\" col=\"7\" displaytype=\"date\" text=\"bind:MIDL_PYDT\" calendardisplaynulltype=\"none\"/><Cell row=\"7\" col=\"8\" displaytype=\"number\" text=\"bind:MICT_MONT\"/><Cell row=\"7\" col=\"9\" displaytype=\"number\" text=\"bind:MIEX_MONT\"/><Cell row=\"7\" col=\"10\" displaytype=\"number\" text=\"bind:MIAD_MONT\"/><Cell row=\"7\" col=\"11\" text=\"-\"/><Cell row=\"7\" col=\"12\" displaytype=\"number\" text=\"bind:MICT_YEAR\"/><Cell row=\"8\" col=\"1\" colspan=\"3\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"최종분 근속연수\"/><Cell row=\"8\" col=\"4\" displaytype=\"date\" text=\"bind:FINL_ISDT\" calendardisplaynulltype=\"none\"/><Cell row=\"8\" col=\"5\" displaytype=\"date\" text=\"bind:FINL_STDT\" calendardisplaynulltype=\"none\"/><Cell row=\"8\" col=\"6\" displaytype=\"date\" text=\"bind:FINL_ENDT\" calendardisplaynulltype=\"none\"/><Cell row=\"8\" col=\"7\" displaytype=\"date\" text=\"bind:FINL_PYDT\" calendardisplaynulltype=\"none\"/><Cell row=\"8\" col=\"8\" displaytype=\"number\" text=\"bind:FICT_MONT\"/><Cell row=\"8\" col=\"9\" displaytype=\"number\" text=\"bind:FIEX_MONT\"/><Cell row=\"8\" col=\"10\" displaytype=\"number\" text=\"bind:FIAD_MONT\"/><Cell row=\"8\" col=\"11\" text=\"-\"/><Cell row=\"8\" col=\"12\" displaytype=\"number\" text=\"bind:FICT_YEAR\"/><Cell row=\"9\" col=\"1\" colspan=\"3\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"정산(합산) 근속연수\"/><Cell row=\"9\" col=\"4\" text=\"-\"/><Cell row=\"9\" col=\"5\" displaytype=\"date\" text=\"bind:TOTL_STDT\" calendardisplaynulltype=\"none\"/><Cell row=\"9\" col=\"6\" displaytype=\"date\" text=\"bind:TOTL_ENDT\" calendardisplaynulltype=\"none\"/><Cell row=\"9\" col=\"7\" text=\"-\"/><Cell row=\"9\" col=\"8\" displaytype=\"number\" text=\"bind:TLCT_MONT\"/><Cell row=\"9\" col=\"9\" displaytype=\"number\" text=\"bind:TLEX_MONT\"/><Cell row=\"9\" col=\"10\" displaytype=\"number\" text=\"bind:TLAD_MONT\"/><Cell row=\"9\" col=\"11\" displaytype=\"number\" text=\"bind:TLOL_MONT\"/><Cell row=\"9\" col=\"12\" displaytype=\"number\" text=\"bind:TLCT_YEAR\"/><Cell row=\"10\" col=\"1\" rowspan=\"2\" style=\"background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"안분\"/><Cell row=\"10\" col=\"2\" colspan=\"2\" style=\"background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"2012. 12. 31이전\"/><Cell row=\"10\" col=\"4\" text=\"-\"/><Cell row=\"10\" col=\"5\" displaytype=\"date\" text=\"bind:BEFO_STDT\" calendardisplaynulltype=\"none\"/><Cell row=\"10\" col=\"6\" displaytype=\"date\" text=\"bind:BEFO_ENDT\" calendardisplaynulltype=\"none\"/><Cell row=\"10\" col=\"7\" text=\"-\"/><Cell row=\"10\" col=\"8\" displaytype=\"number\" text=\"bind:BFCT_MONT\"/><Cell row=\"10\" col=\"9\" displaytype=\"number\" text=\"bind:BFEX_MONT\"/><Cell row=\"10\" col=\"10\" displaytype=\"number\" text=\"bind:BFAD_MONT\"/><Cell row=\"10\" col=\"11\" text=\"-\"/><Cell row=\"10\" col=\"12\" displaytype=\"number\" text=\"bind:BFCT_YEAR\"/><Cell row=\"11\" col=\"2\" colspan=\"2\" style=\"background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"2013. 01. 01이후\"/><Cell row=\"11\" col=\"4\" text=\"-\"/><Cell row=\"11\" col=\"5\" displaytype=\"date\" text=\"bind:AFTR_STDT\" calendardisplaynulltype=\"none\"/><Cell row=\"11\" col=\"6\" displaytype=\"date\" text=\"bind:AFTR_ENDT\" calendardisplaynulltype=\"none\"/><Cell row=\"11\" col=\"7\" text=\"-\"/><Cell row=\"11\" col=\"8\" displaytype=\"number\" text=\"bind:AFCT_MONT\"/><Cell row=\"11\" col=\"9\" displaytype=\"number\" text=\"bind:AFEX_MONT\"/><Cell row=\"11\" col=\"10\" displaytype=\"number\" text=\"bind:AFAD_MONT\"/><Cell row=\"11\" col=\"11\" text=\"-\"/><Cell row=\"11\" col=\"12\" displaytype=\"number\" text=\"bind:AFCT_YEAR\"/><Cell row=\"12\" rowspan=\"6\" style=\"background:#d6d6d6ff;background2:#d6d6d6ff;selectbackground:#d6d6d6ff;\" text=\"퇴직&#13;&#10;소득&#13;&#10;과세&#13;&#10;표준&#13;&#10;계산\"/><Cell row=\"12\" col=\"1\" colspan=\"4\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"2015. 12. 31.이전 계산방법\"/><Cell row=\"12\" col=\"5\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"중갑지급 등\"/><Cell row=\"12\" col=\"6\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"최종\"/><Cell row=\"12\" col=\"7\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"정산\"/><Cell row=\"12\" col=\"8\" colspan=\"5\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"2016. 01. 01.이후 계산방법\"/><Cell row=\"13\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(34)퇴직소득(17)\"/><Cell row=\"13\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MITA_RPAY1\"/><Cell row=\"13\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FITA_RPAY1\"/><Cell row=\"13\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TLTA_RPAY1\"/><Cell row=\"13\" col=\"8\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(27)퇴직소득(17)\"/><Cell row=\"13\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CALC_REIN\"/><Cell row=\"14\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(35)퇴직소득 정률공제\"/><Cell row=\"14\" col=\"5\" text=\"-\"/><Cell row=\"14\" col=\"6\" text=\"-\"/><Cell row=\"14\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AFRD_AMOT\"/><Cell row=\"14\" col=\"8\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(28)근속연수공제\"/><Cell row=\"14\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CWYC_DDUC\"/><Cell row=\"15\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(36)근속연수공제\"/><Cell row=\"15\" col=\"5\" text=\"-\"/><Cell row=\"15\" col=\"6\" text=\"-\"/><Cell row=\"15\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CSYD_AMOT\"/><Cell row=\"15\" col=\"8\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(29)환산급여((27-28)x12배/정산근속연수)\"/><Cell row=\"15\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CONV_WAGE\"/><Cell row=\"16\" col=\"1\" rowspan=\"2\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(37)퇴직소득 과세표준(34-35-36)\"/><Cell row=\"16\" col=\"5\" rowspan=\"2\" text=\"-\"/><Cell row=\"16\" col=\"6\" rowspan=\"2\" text=\"-\"/><Cell row=\"16\" col=\"7\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:STAN_ASST\"/><Cell row=\"16\" col=\"8\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(30)환산급여별공제\"/><Cell row=\"16\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COWA_DDUC\"/><Cell row=\"17\" col=\"8\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(31)퇴직소득과세표준(29-30)\"/><Cell row=\"17\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REIN_STAS\"/><Cell row=\"18\" rowspan=\"9\" style=\"background:#d6d6d6ff;background2:#d6d6d6ff;selectbackground:#d6d6d6ff;\" text=\"퇴직&#13;&#10;소득&#13;&#10;세액&#13;&#10;계산\"/><Cell row=\"18\" col=\"1\" colspan=\"4\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"2015. 12. 31.이전 계산방법\"/><Cell row=\"18\" col=\"5\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"12.12.31 이전\"/><Cell row=\"18\" col=\"6\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"13.1.1 이후\"/><Cell row=\"18\" col=\"7\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"합계\"/><Cell row=\"18\" col=\"8\" colspan=\"5\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"2016. 01. 01.이후 계산방법\"/><Cell row=\"19\" col=\"1\" rowspan=\"2\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(38)과세표준안분&#13;&#10;((37)x각근속연수/정산근속연수)\"/><Cell row=\"19\" col=\"5\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BFST_ASST\"/><Cell row=\"19\" col=\"6\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AFST_ASST\"/><Cell row=\"19\" col=\"7\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TLST_ASST\"/><Cell row=\"19\" col=\"8\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(32)환산산출세액((31)Χ세율)\"/><Cell row=\"19\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CONV_CLTX\"/><Cell row=\"20\" col=\"8\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(33)산출세액((32)/12배Χ정산근속연수)\"/><Cell row=\"20\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CLCR_TXAM\"/><Cell row=\"21\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(39)연평균과세표준((36)/각근속연수)\"/><Cell row=\"21\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BFYA_STAD\"/><Cell row=\"21\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AFYA_STAD\"/><Cell row=\"21\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TLYA_STAD\"/><Cell row=\"21\" col=\"8\" colspan=\"5\" style=\"background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"퇴직소득 세액계산\"/><Cell row=\"22\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(40)환산과세표준((39) Χ 5배)\"/><Cell row=\"22\" col=\"5\" style=\"align:right;\" text=\"-\"/><Cell row=\"22\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AFCS_ASST\"/><Cell row=\"22\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TLCS_ASST\"/><Cell row=\"22\" col=\"8\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(44)퇴직일이 속하는 과세연도\"/><Cell row=\"22\" col=\"12\" text=\"bind:TAXX_YEAR\"/><Cell row=\"23\" col=\"1\" rowspan=\"2\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(41)환산산출세액((40) Χ 세율)\"/><Cell row=\"23\" col=\"5\" rowspan=\"2\" style=\"align:right;\" text=\"-\"/><Cell row=\"23\" col=\"6\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AFCC_TAXX\"/><Cell row=\"23\" col=\"7\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TLCC_TAXX\"/><Cell row=\"23\" col=\"8\" rowspan=\"2\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(45)퇴직소득세 산출세액&#13;&#10;((33)Χ퇴직연도별비율)+[(43)Χ(100%-퇴직연도별비율)]\"/><Cell row=\"23\" col=\"12\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPUE_CLTX\"/><Cell row=\"25\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(42)연평균산출세액((41) / 5배)\"/><Cell row=\"25\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BFYA_CTAX\"/><Cell row=\"25\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AFYA_CTAX\"/><Cell row=\"25\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TLYA_CTAX\"/><Cell row=\"25\" col=\"8\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(46)기납부(또는 기과세이연) 세액\"/><Cell row=\"25\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTL_PPTX\"/><Cell row=\"26\" col=\"1\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(43)산출세액((42) Χ 각 근속연수)\"/><Cell row=\"26\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BEFO_CTAX\"/><Cell row=\"26\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AFTR_CTAX\"/><Cell row=\"26\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTL_CTAX\"/><Cell row=\"26\" col=\"8\" colspan=\"4\" style=\"align:left;background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(47)신고대상세액((45)-(46))\"/><Cell row=\"26\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TLSR_TAMT\"/><Cell row=\"27\" rowspan=\"4\" style=\"background:#d6d6d6ff;background2:#d6d6d6ff;selectbackground:#d6d6d6ff;\" text=\"이연&#13;&#10;퇴직&#13;&#10;소득&#13;&#10;세액&#13;&#10;계산\"/><Cell row=\"27\" col=\"1\" rowspan=\"3\" colspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(48)&#13;&#10; 신고대상세액(47)\"/><Cell row=\"27\" col=\"3\" colspan=\"6\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"연금계좌 입금명세\"/><Cell row=\"27\" col=\"9\" rowspan=\"3\" colspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(50)퇴직급여(17)\"/><Cell row=\"27\" col=\"11\" rowspan=\"3\" colspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(51)이연 퇴직소득세&#13;&#10;((48)Χ(49)/(50))\"/><Cell row=\"28\" col=\"3\" rowspan=\"2\" colspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"연금계좌취급자\"/><Cell row=\"28\" col=\"5\" rowspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"사업자&#13;&#10;등록번호\"/><Cell row=\"28\" col=\"6\" rowspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"계좌번호\"/><Cell row=\"28\" col=\"7\" rowspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"입금일\"/><Cell row=\"28\" col=\"8\" rowspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"(49)계좌&#13;&#10;입금 금액\"/><Cell row=\"30\" col=\"1\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAPS_TAMT\"/><Cell row=\"30\" col=\"3\" colspan=\"2\" text=\"bind:TAPF_NAME\"/><Cell row=\"30\" col=\"5\" text=\"bind:TAPB_NUMB\" mask=\"expr:TAPB_NUMB == &quot;&quot; ? &quot;&quot; : &quot;###-##-#####&quot;\"/><Cell row=\"30\" col=\"6\" text=\"bind:TAPA_NUMB\"/><Cell row=\"30\" col=\"7\" displaytype=\"date\" text=\"bind:TAPD_DATE\" calendardisplaynulltype=\"none\"/><Cell row=\"30\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAPD_AMOT\"/><Cell row=\"30\" col=\"9\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAPT_RPAY\"/><Cell row=\"30\" col=\"11\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAPT_TAMT\"/><Cell row=\"31\" rowspan=\"4\" style=\"background:#d6d6d6ff;background2:#d6d6d6ff;selectbackground:#d6d6d6ff;\" text=\"납부&#13;&#10;명세\"/><Cell row=\"31\" col=\"1\" colspan=\"4\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"구분\"/><Cell row=\"31\" col=\"5\" colspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"소득세\"/><Cell row=\"31\" col=\"7\" colspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"지방소득세\"/><Cell row=\"31\" col=\"9\" colspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"농어촌특별세\"/><Cell row=\"31\" col=\"11\" colspan=\"2\" style=\"background:#e9e9e9ff;background2:#e9e9e9ff;selectbackground:#e9e9e9ff;\" text=\"계\"/><Cell row=\"32\" col=\"1\" colspan=\"4\" style=\"background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(53)신고대상세액(47)\"/><Cell row=\"32\" col=\"5\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SURE_ITAX\"/><Cell row=\"32\" col=\"7\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SURE_RTAX\"/><Cell row=\"32\" col=\"9\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SURE_FTAX\"/><Cell row=\"32\" col=\"11\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SURE_TAMT\"/><Cell row=\"33\" col=\"1\" colspan=\"4\" style=\"background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(54)이연퇴직소득세(51)\"/><Cell row=\"33\" col=\"5\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PORE_ITAX\"/><Cell row=\"33\" col=\"7\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PORE_RTAX\"/><Cell row=\"33\" col=\"9\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PORE_FTAX\"/><Cell row=\"33\" col=\"11\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PORE_TAMT\"/><Cell row=\"34\" col=\"1\" colspan=\"4\" style=\"background:#f6f6f6ff;background2:#f6f6f6ff;selectbackground:#f6f6f6ff;\" text=\"(55)차감원천징수세액((53)-(54))\"/><Cell row=\"34\" col=\"5\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEDU_ITAX\"/><Cell row=\"34\" col=\"7\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEDU_RTAX\"/><Cell row=\"34\" col=\"9\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEDU_FTAX\"/><Cell row=\"34\" col=\"11\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEDU_TAMT\"/></Band></Format></Formats>");
            this.Tab.tab2.addChild(obj.name, obj);

            obj = new Button("btnProcClose", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_text("마감처리");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("109");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "198", "129", "80", "25", null, null, this);
            obj.set_taborder("110");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT", "absolute", "1237", "74", "456", "152", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "438", "101", null, null, this.popINSERT);
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_TO", "absolute", "29", "44", "103", "21", null, null, this.popINSERT);
            obj.set_taborder("26");
            obj.set_text("출력구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_FROM", "absolute", "29", "16", "103", "21", null, null, this.popINSERT);
            obj.set_taborder("27");
            obj.set_text("출력대상");
            obj.set_cssclass("styFormSearchCapBe");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Combo("cmbPRIT_GUBN", "absolute", "145", "44", "285", "21", null, null, this.popINSERT);
            this.popINSERT.addChild(obj.name, obj);
            var cmbPRIT_GUBN_innerdataset = new Dataset("cmbPRIT_GUBN_innerdataset", this.popINSERT.cmbPRIT_GUBN);
            cmbPRIT_GUBN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">지급결의서</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">원천징수영수증</Col></Row></Rows>");
            obj.set_innerdataset(cmbPRIT_GUBN_innerdataset);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("01");
            obj.set_text("지급결의서");
            obj.set_index("0");
            obj = new Static("imgSearchTitle", "absolute", "29", "73", "108", "21", null, null, this.popINSERT);
            obj.set_taborder("29");
            obj.set_text("원천징수영수증");
            obj.set_cssclass("styFormSearchCapBe");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "145", "16", "190", "21", null, null, this.popINSERT);
            this.popINSERT.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.popINSERT.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">선택된 자료</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">체크된 자료</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_direction("vertical");
            obj = new Radio("Radio01", "absolute", "145", "73", "285", "21", null, null, this.popINSERT);
            this.popINSERT.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.popINSERT.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">소득자 보관</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">발행자 보관</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">발행자 보고</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Button("btnPrint", "absolute", "320", "118", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("33");
            obj.set_text("출력");
            obj.set_cssclass("btn_POP_CRUD");
            obj.style.set_imagealign("left");
            this.popINSERT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "385", "118", "62", "24", null, null, this.popINSERT);
            obj.set_taborder("34");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            obj.style.set_imagealign("left");
            this.popINSERT.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1238", "104", "8", "140", null, null, this);
            obj.set_taborder("111");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "1684", "104", "8", "140", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancGW", "absolute", "162", "35", "74", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("상신취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchDoc", "absolute", "239", "35", "74", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_text("문서보기");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSendGW", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_tabstop("false");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1234", "75", "182", "8", null, null, this);
            obj.set_taborder("118");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1234", "216", "438", "8", null, null, this);
            obj.set_taborder("119");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("120");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("121");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("122");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 862, 277, this.Tab.tab1.SubTab.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("계산내역");

            	}
            );
            this.Tab.tab1.SubTab.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 862, 277, this.Tab.tab1.SubTab.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("중간지급");

            	}
            );
            this.Tab.tab1.SubTab.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab.tab1.SubTab.tab3,
            	//-- Layout function
            	function(p) {
            		p.set_text("과세이연계좌");

            	}
            );
            this.Tab.tab1.SubTab.tab3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 882, 802, this.Tab.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("퇴직금계산");

            	}
            );
            this.Tab.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("퇴직금정산");

            	}
            );
            this.Tab.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 456, 152, this.popINSERT,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("퇴직금계산처리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Tab.tab1.calFINL_STDT","value","dsPY_RTPCXM","FINL_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab.tab1.calFINL_ENDT","value","dsPY_RTPCXM","FINL_ENDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab.tab1.calPMST_DATE","value","dsPY_RTPCXM","PMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab.tab1.edtREMK_100X","value","dsPY_RTPCXM","REMK_100X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab.tab1.calFINL_PYDT","value","dsPY_RTPCXM","FINL_PYDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab.tab1.cmbTAXX_GUBN","value","dsPY_RTPCXM","TAXX_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Tab.tab1.cmbRERE_CODE","value","dsPY_RTPCXM","RERE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Tab.tab1.mskRETI_INTX","value","dsPY_RTPCXM","RETI_INTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Tab.tab1.mskRETI_STRD","value","dsPY_RTPCXM","RETI_STRD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Tab.tab1.mskRETI_IHTX","value","dsPY_RTPCXM","RETI_IHTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Tab.tab1.mskRLPY_AMOT","value","dsPY_RTPCXM","RLPY_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab.tab1.SubTab.tab1.mskAVPY_AMOT","value","dsPY_RTPCXM","AVPY_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Tab.tab1.SubTab.tab1.mskAVBN_AMOT","value","dsPY_RTPCXM","AVBN_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Tab.tab1.SubTab.tab1.mskRETI_WAGE","value","dsPY_RTPCXM","RETI_WAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Tab.tab1.SubTab.tab1.mskTRRT_AMOT","value","dsPY_RTPCXM","TRRT_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Tab.tab1.SubTab.tab1.calBANK_CODE","value","dsPY_RTPCXM","BANK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Tab.tab1.SubTab.tab1.edtACNT_NUMB","value","dsPY_RTPCXM","ACNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Tab.tab1.SubTab.tab1.mskOTDE_AMOT","value","dsPY_RTPCXM","OTDE_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Tab.tab1.SubTab.tab1.mskVORN_ALLO","value","dsPY_RTPCXM","VORN_ALLO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Tab.tab1.SubTab.tab1.mskPYET_AMOT","value","dsPY_RTPCXM","PYET_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Tab.tab1.SubTab.tab1.mskAVER_WAGE","value","dsPY_RTPCXM","AVER_WAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Tab.tab1.SubTab.tab1.edtCWRK_YMCT","value","dsPY_RTPCXM","CWRK_YMCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Tab.tab1.SubTab.tab1.mskPENS_AMOT","value","dsPY_RTPCXM","PENS_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Tab.tab1.SubTab.tab1.edtDPST_NAME","value","dsPY_RTPCXM","DPST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Tab.tab1.SubTab.tab1.calFINL_ISDT","value","dsPY_RTPCXM","FINL_ISDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Tab.tab1.SubTab.tab1.mskFINL_RPAY","value","dsPY_RTPCXM","FINL_RPAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Tab.tab1.SubTab.tab1.mskFINT_RPAY","value","dsPY_RTPCXM","FINT_RPAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Tab.tab1.SubTab.tab1.calFINL_STDT2","value","dsPY_RTPCXM","FINL_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Tab.tab1.SubTab.tab1.calFINL_ENDT2","value","dsPY_RTPCXM","FINL_ENDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Tab.tab1.SubTab.tab1.mskFINL_PPTX","value","dsPY_RTPCXM","FINL_PPTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","Tab.tab1.SubTab.tab1.calDBPJ_DATE","value","dsPY_RTPCXM","DBPJ_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Tab.tab1.SubTab.tab1.calFINL_PYDT2","value","dsPY_RTPCXM","FINL_PYDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Tab.tab1.SubTab.tab1.mskFIBF_EXMT","value","dsPY_RTPCXM","FIBF_EXMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Tab.tab1.SubTab.tab1.mskRTBM_AMOT","value","dsPY_RTPCXM","RTBM_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Tab.tab1.SubTab.tab1.mskFIAF_EXMT","value","dsPY_RTPCXM","FIAF_EXMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","Tab.tab1.SubTab.tab1.mskFIBF_ADMT","value","dsPY_RTPCXM","FIBF_ADMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Tab.tab1.SubTab.tab1.mskFIAF_ADMT","value","dsPY_RTPCXM","FIAF_ADMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Tab.tab1.SubTab.tab2.mskPBUS_NUMB","value","dsPY_RTPCXM","PBUS_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","Tab.tab1.SubTab.tab2.edtPFIR_NAME","value","dsPY_RTPCXM","PFIR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","Tab.tab1.SubTab.tab2.calMIDL_ISDT","value","dsPY_RTPCXM","MIDL_ISDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","Tab.tab1.SubTab.tab2.mskMIDL_RPAY","value","dsPY_RTPCXM","MIDL_RPAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Tab.tab1.SubTab.tab2.mskMINT_RPAY","value","dsPY_RTPCXM","MINT_RPAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","Tab.tab1.SubTab.tab2.calMIDL_STDT","value","dsPY_RTPCXM","MIDL_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","Tab.tab1.SubTab.tab2.calMIDL_ENDT","value","dsPY_RTPCXM","MIDL_ENDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","Tab.tab1.SubTab.tab2.mskMIDL_PPTX","value","dsPY_RTPCXM","MIDL_PPTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","Tab.tab1.SubTab.tab2.calMIDL_PYDT","value","dsPY_RTPCXM","MIDL_PYDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","Tab.tab1.SubTab.tab2.mskMIBF_EXMT","value","dsPY_RTPCXM","MIBF_EXMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","Tab.tab1.SubTab.tab2.mskMIAF_EXMT","value","dsPY_RTPCXM","MIAF_EXMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","Tab.tab1.SubTab.tab2.mskMIBF_ADMT","value","dsPY_RTPCXM","MIBF_ADMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","Tab.tab1.SubTab.tab2.mskMIAF_ADMT","value","dsPY_RTPCXM","MIBF_ADMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","Tab.tab1.SubTab.tab1.mskRTBN_AMOT","value","dsPY_RTPCXM","RTBN_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","Tab.tab1.SubTab.tab1.mskPRTN_AMOT","value","dsPY_RTPCXM","PRTN_AMOT");
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
        this.addIncludeScript("PAYF0030.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PAYF0030.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PAYF0030.xfdl", function() {
        /***************************************************************************************************
         * # Program:   PAYF0030 퇴직금계산처리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.07     안윤준     Initial Created.
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST    = "TTTTTTTT";
        this.sPACKAGENAME   = "PAYF0030";
        this.sSERVERTIME    = this.fnc_ToString(this.fnc_GetServerDateTime("DATE"));

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

        this.sKeyValue      = new Array();
        this.grpPY_RTPCXM1  = ["cmbRECE_SEQN", "cmbRERE_CODE", "edtREMK_100X", "calFINL_ENDT", "calFINL_PYDT"
                            ,  "calPMST_DATE", "calFINL_STDT", "btnGET_PAYX",  "cmbTAXX_GUBN"];
        this.grpPY_RTPCXM2  = ["mskAVBN_AMOT", "mskAVER_WAGE", "edtCWRK_YMCT", "mskVORN_ALLO", "mskPYET_AMOT"
                            ,  "mskPENS_AMOT", "mskOTDE_AMOT", "calBANK_CODE", "edtDPST_NAME", "calFINL_ISDT"
                            ,  "calFINL_STDT2","calFINL_PYDT2","calFINL_ENDT2","mskFIBF_EXMT", "mskFIAF_EXMT"
                            ,  "mskFIBF_ADMT", "mskFIAF_ADMT", "mskFINL_RPAY", "mskFINT_RPAY", "mskFINL_PPTX"
                            ,  "mskRTBM_AMOT", "edtACNT_NUMB", "mskTRRT_AMOT", "mskRETI_WAGE", "mskAVPY_AMOT"
                            ,  "calDBPJ_DATE"];
        this.grpPY_RTPCXM3  = ["mskPBUS_NUMB", "calMIDL_ISDT", "calMIDL_STDT", "calMIDL_PYDT", "calMIDL_ENDT"
                            ,  "mskMIBF_EXMT", "mskMIAF_EXMT", "mskMIBF_ADMT", "mskMIAF_ADMT", "mskMIDL_RPAY"
                            ,  "mskMINT_RPAY", "mskMIDL_PPTX", "edtPFIR_NAME"];
        this.grpPY_RTPCXM4  = ["grdPY_RTPPXM", "btnPY_RTPPXMAdd", "btnPY_RTPPXMDel"];
        this.sPOP_FLAG      = "0"; // 0=화면, 1=팝업
        this.sINPUT_FLAG    = "0"; // 0=기본, 1=추가

        this.sDOCU_IDXX     = "KHR130"; //결재문서 ID
        this.sAPPR_GUBN     = "";       //결재처리구분 [ createDoc : 상신, deleteDoc : 결재취소, show : 조회, list : 목록 ]
        this.sAPPR_SEQN     = "";       //결재문서 SEQ
        this.sAPPR_STAT     = "";       //결재문서 상태
        this.sEMPL_LIST     = "";       //리포트 다건 조회
        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetComboDs(this.dsCombo);
            this.fnc_GetUserComboDs(this.dsUserCombo);
            
            switch (this.sUSERLAVEL) {
                case "1" :  //전체
                    this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
                    this.cmbSHRENFC_CODE.set_readonly(false);
                    this.btnSendGW.set_visible(true);
                    this.btnCancGW.set_visible(true);
                    this.btnSearchDoc.set_visible(true);
                    this.btnProcClose.set_visible(true);
                    this.imgHelpSHRDEPT_CODE.set_enable(true);
                    this.edtSHRDEPT_NAME.set_readonly(false);
                    
                    break;
                
                case "3" :  case "4" :  // 3:부실 4:부서
                    this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD); 
                    this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
                    this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
                    
                    break;  
                case "5" :  //개인
                    this.cmbSHRENFC_CODE.set_value(application.GBL_ENFCCD);
                    
                    this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
                    this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
                    
                    this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
                    this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
                    
                    this.imgHelpSHREMPL_NUMB.set_enable(false);
                    this.edtSHREMPL_NAME.set_readonly(true);
                    
                    break;  
                default :
                    break;
            }

            var sFirstDate  = this.fnc_SubStr(this.sSERVERTIME, 0, 6) + "01";
            
            //초기값 세팅
            this.calSHRRETR_STDT.set_value(sFirstDate);
            this.calSHRRETR_ENDT.set_value(this.sSERVERTIME);
            this.div_ButtonList.btnInput.set_enable(false);
            
            this.calSHRRETR_STDT.setFocus();
            
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
            this.fnc_DatasetClear("dsHR_MASTXM,dsPY_RTPCXM,dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM,dsPY_RTPWXM");
            
            this.sPOP_FLAG = "0";
            
            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
            this.sINPUT_FLAG = "1";
            var nCount = 1;
            for ( var i=0; i<this.dsHR_MASTXM.getRowCount(); i++ ) {
                if ( this.dsHR_MASTXM.getRowType(i) == Dataset.ROWTYPE_INSERT ){
                    nCount++
                }
            }
            
            if ( nCount > 1 ) return;
            
            var iRow = this.dsHR_MASTXM.insertRow(this.dsHR_MASTXM.rowposition+1);
            this.fnc_DatasetClear("dsPY_RTPCXM,dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM,dsPY_RTPWXM");
            this.grdHR_MASTXM.setFocus();
            this.fnc_GridSetCellFocus(this.grdHR_MASTXM, "EMPL_NAME");
            
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
            if (this.fn_DeleteCheck(this.dsPY_RTPCXM)) {
                this.fnc_DatasetClear("dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM");
                this.dsPY_RTPCXM.deleteRow(this.dsPY_RTPCXM.rowposition);
            }

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
            this.fnc_DataSetCancel("dsHR_MASTXM,dsPY_RTPCXM,dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM,dsPY_RTPWXM");
            this.grdHR_MASTXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

            if (!this.fn_SaveItemCheck()) return;
            
            this.sKeyValue[0] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition,"EMPL_NUMB");

            this.dsPY_RTPCXM.setColumn(0, "PROC_TYPE", this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition,"PROC_TYPE"));
            
            var sMethodName = "SAVE00";
            var sInDataSet  = "dsPY_RTPCXM=dsPY_RTPCXM:U dsPY_RTPAYX=dsPY_RTPAYX:U ";
                sInDataSet += "dsPY_RTBONU=dsPY_RTBONU:U dsPY_RTPPXM=dsPY_RTPPXM:A";
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
            this.fnc_ToExcel(this.name);

        }

        /*-----------------------+
         |  10.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {
            this.fn_SelectPrint();
            
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
            if(e.fromobject instanceof Div) return;
            var sMessage = this.fnc_FormUnloadCheck("dsHR_MASTXM", this);
            if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
            this.fnc_FormUnload(obj,e);

        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
            this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-----------------------------------+
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
            if (this.fnc_DatasetChangeCheck("dsPY_RTPCXM,dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM,dsPY_RTPWXM")) {   
                if (this.fnc_Message("TMM023") == false) return false;
            }
            
            if (this.fnc_Trim(this.calSHRRETR_STDT.value) > this.fnc_Trim(this.calSHRRETR_ENDT.value)) {
                return this.fnc_SearchCheckPostAction("TMM042", "조회기간 시작일,조회기간 종료일", this.calSHRRETR_STDT);
            }
            
            return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (objds) {

            // TODO 전자결재 관련
        //  var nRow = dsCommonCode_GRWS_CODE.getMatchedIndex("COMD_CODE", dsHR_MASTXM.getColumn(dsHR_MASTXM.rowposition, "GRWS_CODE"), true);
        //  if ( dsCommonCode.getColumn(nRow, "REF4_FILD") == "1" ) {
        //      //전자결재 처리된 내역은 삭제할 수 없습니다!
        //      this.fnc_Message("TMM902", true);
        //      return false;
        //  }
            
            var i = this.dsPY_RTPCXM.rowposition;
            
            if (this.dsPY_RTPCXM.getColumn(i, "CLSE_YSNO") == "1") { //마감여부 체크
                this.fnc_Message("PAY015", true);
                return false;
            }
            
            var row = objds.rowposition;
            
            if(row < 0) return;
            
            var sQuestionText = "";
            
            if ( objds.getRowType(row) == Dataset.ROWTYPE_INSERT ){
                if ( objds.name == "dsPY_RTPAYX" ){
                    sQuestionText = "수당 : ";
                    
                } else if ( objds.name == "dsPY_RTPCXM" ){
                    sQuestionText = "사원명 : ";
                    
                } else if ( objds.name == "dsPY_RTBONU" ){
                    sQuestionText = "수당 : ";
                    
                } else if ( objds.name == "dsPY_RTPPXM" ){
                    sQuestionText = "퇴직금연금사업자명 : ";
                    
                } else {
                    return;
                }
            } else {
                if ( objds.name == "dsPY_RTPAYX" ){
                    sQuestionText = "수당 : " + this.dsPY_RTPAYX.getColumn(row, "EXPD_NAME");
                    
                } else if ( objds.name == "dsPY_RTPCXM" ){
                    sQuestionText = "사원명 : "    + this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NAME") + ", " + this.Tab.tab1.cmbRECE_SEQN.text;
                    
                } else if ( objds.name == "dsPY_RTBONU" ){
                    sQuestionText = "수당 : " + this.dsPY_RTBONU.getColumn(row, "EXPD_NAME");
                    
                } else if ( objds.name == "dsPY_RTPPXM" ){
                    sQuestionText = "퇴직금연금사업자명 : "  + this.dsPY_RTPPXM.getColumn(row, "TAPF_NAME");
                    
                } else {
                    return;
                }
            }
            
            
            return this.fnc_Message("TMM002", sQuestionText);
            
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
            
            if (!this.fnc_DatasetChangeCheck("dsPY_RTPCXM,dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM,dsPY_RTPWXM")) {
                this.fnc_Message("TMM003");
                return false;
            }
            // TODO 전자결재 관련
        //      var nRow = dsCommonCode_GRWS_CODE.getMatchedIndex("COMD_CODE", dsHR_MASTXM.getColumn(dsHR_MASTXM.rowposition, "GRWS_CODE"), true);
        //      if ( dsCommonCode.getColumn(nRow, "REF4_FILD") == "1" ) {
        //          //전자결재 처리된 내역은 수정할 수 없습니다!
        //          this.fnc_Message("TMM903", true);
        //          return false;
        //      }
            
            for (var i = 0; i < this.dsPY_RTPCXM.getRowCount(); i++) {
                if (this.fnc_ToUpper(this.dsPY_RTPCXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
                
                //마감여부 체크
                if (this.dsPY_RTPCXM.getColumn(i, "CLSE_YSNO") == "1") {
                    this.fnc_Message("PAY015", true); //Message 처리 
                    return false;
                }
                
        //      if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "RECE_SEQN"))) < 1) {
        //          return this.fnc_CheckPostAction("TMM072", "기준년도", this.dsPY_RTPCXM, i, this.grdPY_REGSAL, "RECE_SEQN");
        //      }
                
                if ( this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "PBUS_NUMB"))) > 0 ){
                    if ( !this.fnc_CustNumberCheck(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "PBUS_NUMB")))){
                        return this.fnc_CheckPostAction("TMM072", "사업자번호", this.dsPY_RTPCXM, i, this.Tab.tab1.SubTab.tab2.mskPBUS_NUMB, "PBUS_NUMB");
                    }
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "FINL_ENDT"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "기산종료일", this.dsPY_RTPCXM, i, this.Tab.tab1.calFINL_ENDT, "FINL_ENDT");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "RERE_CODE"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "퇴직사유", this.dsPY_RTPCXM, i, this.Tab.tab1.cmbRERE_CODE, "RERE_CODE");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "FINL_PYDT"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "지급예정일", this.dsPY_RTPCXM, i, this.Tab.tab1.calFINL_PYDT, "FINL_PYDT");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "PMST_DATE"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "급여기준일", this.dsPY_RTPCXM, i, this.Tab.tab1.calPMST_DATE, "PMST_DATE");
                }
                
            }
            
            //과세이연계좌 필수 입력 체크
            for (var i = 0; i < this.dsPY_RTPPXM.getRowCount(); i++) {
            
                if (this.fnc_ToUpper(this.dsPY_RTPPXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
                
                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPPXM.getColumn(i, "TAPF_NAME"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "퇴직연금사업자명", this.dsPY_RTPPXM, i, this.Tab.tab1.SubTab.tab3.grdPY_RTPPXM, "TAPF_NAME");
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPPXM.getColumn(i, "TAPB_NUMB"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "사업자등록번호",    this.dsPY_RTPPXM, i, this.Tab.tab1.SubTab.tab3.grdPY_RTPPXM, "TAPB_NUMB");
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPPXM.getColumn(i, "TAPA_NUMB"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "계좌번호",           this.dsPY_RTPPXM, i, this.Tab.tab1.SubTab.tab3.grdPY_RTPPXM, "TAPA_NUMB");
                }   

                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPPXM.getColumn(i, "TAPD_AMOT"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "계좌입금액",      this.dsPY_RTPPXM, i, this.Tab.tab1.SubTab.tab3.grdPY_RTPPXM, "TAPD_AMOT");
                }       
                
                if (this.fnc_Trim(this.dsPY_RTPPXM.getColumn(i, "TAPD_AMOT")) == 0) {
                    return this.fnc_CheckPostAction("TMM072", "계좌입금액",      this.dsPY_RTPPXM, i, this.Tab.tab1.SubTab.tab3.grdPY_RTPPXM, "TAPD_AMOT");
                }
                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPPXM.getColumn(i, "TAPD_DATE"))) != 8) {
                    return this.fnc_CheckPostAction("TMM072", "입금(이체)일",        this.dsPY_RTPPXM, i, this.Tab.tab1.SubTab.tab3.grdPY_RTPPXM, "TAPD_DATE");
                }
            }   
            // PASS
        //      var valInfo01 = "";
        //      //중간지급 퇴직급여액 있을 경우 체크 
        //      if (nexacro.toNumber(dsPY_RTPCXM.getColumn(i, ""), 0) != 0) {
        //          valInfo01 = [ {id : "PBUS_NUMB", mandatory : true, isBizID : true}, 
        //                      {id : "PFIR_NAME", mandatory : true},
        //                      {id : "MIDL_STDT", mandatory : true},
        //                      {id : "MIDL_ENDT", mandatory : true},
        //                      {id : "MIDL_RPAY", mandatory : true}];
        //  
        //      } 
        //              
        //      var valInfo02 = [ {id : "TAPF_NAME", mandatory : true}, 
        //                      {id : "TAPB_NUMB", mandatory : true, isBizID : true}, 
        //                      {id : "TAPA_NUMB", mandatory : true},
        //                      {id : "TAPD_AMOT", mandatory : true},
        //                      {id : "TAPD_DATE", mandatory : true}];
        //      
        //      var valInfo03 = [ {id : "EXPD_CODE", mandatory : true}];
        //      
        //      var valInfo04 = [ {id : "EXPD_CODE", mandatory : true},
        //                        {id : "PAYX_YMTH", mandatory : true}];
        //                      
        //      
        //      return valLib.validateGridView(dsPY_RTPCXM, valInfo00)
        //          && valLib.validateGridView(dsPY_RTPCXM, valInfo01)
        //          && valLib.validateGridView(grdPY_RTPPXM, valInfo02)
        //          && valLib.validateGridView(grdPY_RTPAYX, valInfo03)
        //          && valLib.validateGridView(grdPY_RTBONU, valInfo04);
            

            return true;
            
        }

        this.fn_SaveItemCheck2 = function(){
            if (this.fnc_Length(this.fnc_Trim(this.Tab.tab1.calFINL_ENDT.value)) < 1) {
                this.fnc_Message("TMM300","[기산종료일] 값은 반드시 입력 하셔야 합니다!");
                this.Tab.tab1.calFINL_ENDT.setFocus();
                return;
            }
            
            if (this.fnc_Length(this.fnc_Trim(this.Tab.tab1.calPMST_DATE.value)) < 1) {
                this.fnc_Message("TMM300","[급여기준일] 값은 반드시 입력 하셔야 합니다!");
                this.Tab.tab1.calPMST_DATE.setFocus();
                return;
            }
            
            if (this.fnc_Length(this.fnc_Trim(this.Tab.tab1.cmbRERE_CODE.value)) < 1) {
                this.fnc_Message("TMM300","[퇴직사유] 값은 반드시 입력 하셔야 합니다!");
                this.Tab.tab1.cmbRERE_CODE.setFocus();
                return;
            }
            
            if (this.fnc_Length(this.fnc_Trim(this.Tab.tab1.cmbTAXX_GUBN.value)) < 1) {
                this.fnc_Message("TMM300","[과세구분] 값은 반드시 입력 하셔야 합니다!");
                this.Tab.tab1.cmbTAXX_GUBN.setFocus();
                return;
            }
            
            if (this.fnc_Length(this.fnc_Trim(this.Tab.tab1.calFINL_PYDT.value)) < 1) {
                this.fnc_Message("TMM300","[지급예정일] 값은 반드시 입력 하셔야 합니다!");
                this.Tab.tab1.calFINL_PYDT.setFocus();
                return;
            }
            
            this.sINPUT_FLAG = "0";
            return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

            var sReturnString;

            if (sKind == "SEARCH00") {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " DEPT_FCOD="  + this.fnc_Quote(this.edtSHRDEPT_CODE.value);
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.edtSHREMPL_NUMB.value);
                sReturnString += " RETR_STDT="  + this.fnc_Quote(this.calSHRRETR_STDT.value);
                sReturnString += " RETR_ENDT="  + this.fnc_Quote(this.calSHRRETR_ENDT.value);
                sReturnString += " RETR_SEDN="  + this.fnc_Quote(this.cmbSHRRETR_SEDN.value);
                sReturnString += " RERE_CODE="  + this.fnc_Quote(this.cmbSHRRERE_CODE.value);
                
            } else if ( sKind == "SEARCH01" || sKind == "SEARCH02" || sKind == "SEARCH03" || 
                        sKind == "SEARCH06" || sKind == "SEARCH07" || sKind == "PRINT00"  ) {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
                sReturnString += " RECE_SEQN="  + this.fnc_Quote(this.Tab.tab1.cmbRECE_SEQN.value);
            
            } else if (sKind == "SAVE99") { // 전자결재 연동자료 저장
                var sApprDocId1 = this.fnc_SubStr(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "APPR_SEQN"),0, 7)
                var sApprDocId2 = this.fnc_SubStr(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "APPR_SEQN"),7)
                var sApprDocId  = this.sDOCU_IDXX + "-" +sApprDocId1 + sApprDocId2;

                var sGwap_Subj  = "퇴직금지급결의서(PAYF0030I01::"+sApprDocId;
                
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " RECE_SEQN="  + this.fnc_Quote(this.Tab.tab1.cmbRECE_SEQN.value);
                sReturnString += " GWAP_EMPL="  + this.fnc_Quote(application.GBL_EMPLNO);   //사원번호(결재요청자)
                sReturnString += " GWAP_DEPT="  + this.fnc_Quote(application.GBL_DEPTCD);   //부서코드(신청자)
                sReturnString += " GWAP_SUBJ="  + this.fnc_Quote(sGwap_Subj);               //전자결재제목

            } else if ( sKind == "PRINT01" ) {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
                sReturnString += " RECE_SEQN="  + this.fnc_Quote(this.Tab.tab1.cmbRECE_SEQN.value);
                
            } else if ( sKind == "PRINT03" ) {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " EMPL_LIST="  + this.fnc_Quote(this.sEMPL_LIST);
                sReturnString += " RECE_SEQN="  + this.fnc_Quote(this.Tab.tab1.cmbRECE_SEQN.value);

            } else if ( sKind == "PRINT10" ) {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " EMPL_LIST="  + this.fnc_Quote(this.sEMPL_LIST);
                
            } else if ( sKind == "SAVE00" ) {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " RECE_SEQN="  + this.fnc_Quote(this.Tab.tab1.cmbRECE_SEQN.value);
                
            } else if ( sKind == "PROC00" || sKind == "PROC02" ) {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                
            } else if ( sKind == "PROC01" ) {
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " RECE_SEQN="  + this.fnc_Quote(this.Tab.tab1.cmbRECE_SEQN.value);
                
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

            if (sMethodName == "SEARCH00") {
                this.fnc_Information(this.stInformation, this.dsHR_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                this.fnc_Message("TMM018", this.dsHR_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
                
                if ( this.sKeyValue[0] != "" ) {
                    var irow = this.dsHR_MASTXM.findRow("EMPL_NUMB",this.sKeyValue[0]);
                    this.sKeyValue[0] = "";
                    if(irow<0) irow=0;
                    this.dsHR_MASTXM.set_rowposition(irow);
                }
                    
                if ( this.dsHR_MASTXM.getRowCount() > 0 ) {
                    this.search_2dept();
                }
                
            } else if (sMethodName == "SEARCH01") {
                if ( this.dsPY_RTPCXM.getRowCount() > 0 ) {
                    if (this.dsPY_RTPCXM.getColumn(0, "CAL1_YMTH").length == 6) {
                        this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 1, "text", this.dsPY_RTPCXM.getColumn(0, "CAL1_YMTH").substr(0, 4)
                                        + "." + this.dsPY_RTPCXM.getColumn(0, "CAL1_YMTH").substr(4, 2));
                    } else {
                        this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 1, "text", "-");
                    }
                    
                    if (this.dsPY_RTPCXM.getColumn(0, "CAL2_YMTH").length == 6) {
                        this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 2, "text", this.dsPY_RTPCXM.getColumn(0, "CAL2_YMTH").substr(0, 4)
                                        + "." + this.dsPY_RTPCXM.getColumn(0, "CAL2_YMTH").substr(4, 2));
                    } else {
                        this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 2, "text", "-");
                    }
                    
                    if (this.dsPY_RTPCXM.getColumn(0, "CAL3_YMTH").length == 6) {
                        this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 3, "text", this.dsPY_RTPCXM.getColumn(0, "CAL3_YMTH").substr(0, 4)
                                        + "." + this.dsPY_RTPCXM.getColumn(0, "CAL3_YMTH").substr(4, 2));
                    } else {
                        this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 3, "text", "-");
                    }
                    if (this.dsPY_RTPCXM.getColumn(0, "CAL4_YMTH").length == 6) {
                        this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 4, "text", this.dsPY_RTPCXM.getColumn(0, "CAL4_YMTH").substr(0, 4)
                                        + "." + this.dsPY_RTPCXM.getColumn(0, "CAL4_YMTH").substr(4, 2));
                    } else {
                        this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 4, "text", "-");
                    }
                    //사업장 직인 가져오기
                    //setSubmitArg("SEARCH16");
                    
                    for ( var i=0; i<this.grpPY_RTPCXM3.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab2."+this.grpPY_RTPCXM3[i]), false);
                    }
                    
                    for ( var i=0; i<this.grpPY_RTPCXM4.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab3."+this.grpPY_RTPCXM4[i]), false);
                    }

                    for ( var i=0; i<this.grpPY_RTPCXM1.length; i++ ) {
                        if ( this.grpPY_RTPCXM1[i] == "calFINL_STDT" ) continue;
                        this.fnc_SetReadonly(eval("this.Tab.tab1."+this.grpPY_RTPCXM1[i]), false);
                    }
                    
                    for ( var i=0; i<this.grpPY_RTPCXM2.length; i++ ) {
                        if ( this.grpPY_RTPCXM2[i] == "edtCWRK_YMCT"  || this.grpPY_RTPCXM2[i] == "mskRETI_WAGE" 
                        ||   this.grpPY_RTPCXM2[i] == "mskAVBN_AMOT"  || this.grpPY_RTPCXM2[i] == "mskAVPY_AMOT"
                        ||   this.grpPY_RTPCXM2[i] == "calFINL_ISDT"  || this.grpPY_RTPCXM2[i] == "calFINL_STDT2"
                        ||   this.grpPY_RTPCXM2[i] == "calFINL_ENDT2" || this.grpPY_RTPCXM2[i] == "calFINL_PYDT2"
                        ||   this.grpPY_RTPCXM2[i] == "mskFINL_RPAY"  || this.grpPY_RTPCXM2[i] == "mskPENS_AMOT"
                        ||   this.grpPY_RTPCXM2[i] == "mskAVER_WAGE" ) continue;
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab1."+this.grpPY_RTPCXM2[i]), false);
                    }
                    for ( var i=0; i<this.grpPY_RTPCXM3.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab2."+this.grpPY_RTPCXM3[i]), false);
                    }
                    
                    for ( var i=0; i<this.grpPY_RTPCXM4.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab3."+this.grpPY_RTPCXM4[i]), false);
                    }
                    
                } else {
                    for ( var i=0; i<this.grpPY_RTPCXM1.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1."+this.grpPY_RTPCXM1[i]), true);
                    }
                    
                    for ( var i=0; i<this.grpPY_RTPCXM2.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab1."+this.grpPY_RTPCXM2[i]), true);
                    }
                    for ( var i=0; i<this.grpPY_RTPCXM3.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab2."+this.grpPY_RTPCXM3[i]), true);
                    }
                    
                    for ( var i=0; i<this.grpPY_RTPCXM4.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab3."+this.grpPY_RTPCXM4[i]), true);
                    }
                }
            } else if (sMethodName == "SEARCH02") {
                
            } else if (sMethodName == "SEARCH03") {
                var dayPAVR = nexacro.round(this.Tab.tab1.grdPY_RTPAYX.getCellValue(-2, 5) == "" ? 0 : nexacro.toNumber(this.Tab.tab1.grdPY_RTPAYX.getCellValue(-2, 5))/3);
                var dayBAVR = nexacro.round(this.Tab.tab1.grdPY_RTBONU.getCellValue(-2, 1) == "" ? 0 : nexacro.toNumber(this.Tab.tab1.grdPY_RTBONU.getCellValue(-2, 1))/12);
                var monAVR = Math.floor(parseFloat(dayPAVR + dayBAVR));
                this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVPY_AMOT",  dayPAVR);    //2016-10-29 LYG 급여평균
                this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVBN_AMOT",  dayBAVR);
                this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVER_WAGE",  monAVR);
                
                if ( this.sPOP_FLAG == "0" ) { // 팝업이 아니면 normal 상태로
                    this.dsPY_RTPCXM.set_updatecontrol(false);
                    this.dsPY_RTPCXM.setRowType(this.dsPY_RTPCXM.rowposition, Dataset.ROWTYPE_NORMAL);
                    this.dsPY_RTPCXM.set_updatecontrol(true);
                }
                
            } else if (sMethodName == "SEARCH06") {
                this.fnc_Information(this.Tab.tab1.SubTab.tab3.stInformation00, this.dsPY_RTPPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                
            } else if (sMethodName == "SEARCH07") {
            
            } else if (sMethodName == "PROC00") {
                this.search_2dept();
                this.dsPY_RTPCXM.set_updatecontrol(false);
                this.dsPY_RTPCXM.setRowType(0, Dataset.ROWTYPE_UPDATE);
                this.dsPY_RTPCXM.set_updatecontrol(true);
                
                var sMethodName = "PROC02";
                var sInDataSet  = "dsPY_RTPCXM=dsPY_RTPCXM:U";
                var sOutDataSet = "";
                var sArgument   = this.fn_CreateArgument(sMethodName);
                this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
            } else if (sMethodName == "PROC01") {
                this.fnc_Message("TMM103");
                this.search_2dept();
            
            } else if (sMethodName == "PROC02") {
                this.fnc_Message("TMM103");
                this.search_2dept();
                
            } else if (sMethodName == "PRINT01") {
            
            
            } else if (sMethodName == "PRINT03") {
            
            
            } else if (sMethodName == "SAVE00") {
                this.fnc_Information(this.stInformation, 0, "SAVE");
                this.fnc_Message("TMM103");
                this.fn_Search();
            
            } else if (sMethodName == "SAVE99") { // 전자결재 연동자료 저장
                this.dsHR_MASTXM.setColumn(this.dsHR_MASTXM.rowposition, "APPR_SEQN", this.sAPPR_SEQN);
                this.dsHR_MASTXM.applyChange();
                
                this.sAPPR_GUBN = "createDoc";
                this.fn_GwApprProcess(this.sAPPR_GUBN);
            
            } else if (sMethodName == "sendApproval") { // 전자결재 GW 전송
                if (this.sAPPR_GUBN == "createDoc") {
                    this.fnc_ShowApproval(this.sAPPR_GUBN, this.dsTM_APPROVAL.getColumn(0, "documentID"), this.dsTM_APPROVAL.getColumn(0, "documentType"));
                }
                    
                this.fn_Search();
            
            } else if ( sMethodName == "GetUserComboCodeSingle" ) {
                if (this.fnc_Length(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB")) < 1) {
                    for ( var i=0; i<this.grpPY_RTPCXM1.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1."+this.grpPY_RTPCXM1[i]), true);
                    }
                    
                    for ( var i=0; i<this.grpPY_RTPCXM2.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab1."+this.grpPY_RTPCXM2[i]), true);
                    }
                    for ( var i=0; i<this.grpPY_RTPCXM3.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab2."+this.grpPY_RTPCXM3[i]), true);
                    }
                    
                    for ( var i=0; i<this.grpPY_RTPCXM4.length; i++ ) {
                        this.fnc_SetReadonly(eval("this.Tab.tab1.SubTab.tab3."+this.grpPY_RTPCXM4[i]), true);
                    }
                    return;
                }
                this.search_3dept(this.dsRECE_SEQN.getColumn(0, "COMB_CODE"));
            
            } else if (sMethodName == "GetUserComboCode") {
                var arrParam = new Array();
                var arrInt   = 0;   
                    arrParam[arrInt++] = "COMBO,cmbSHRENFC_CODE,dsACCT_GUBN,0";
                this.fnc_UserComboInnerBind(arrParam);
                
            } else if (sMethodName == "GetCommCode") {
                var arrParam = new Array();
                var arrInt   = 0;
                    arrParam[arrInt++] = "COMBO,cmbSHRRETR_SEDN,dsSHRRETR_SEDN,0";                  // 조회 - 조회기준
                    arrParam[arrInt++] = "COMBO,cmbSHRRERE_CODE,dsSHRRERE_CODE,0";                  // 조회 - 퇴직사유
                    arrParam[arrInt++] = "COMBO,Tab.tab1.cmbRERE_CODE,dsRERE_CODE,0";               // TAB1 퇴직사유
                    arrParam[arrInt++] = "COMBO,Tab.tab1.cmbTAXX_GUBN,dsTAXX_GUBN,0";               // TAB1 과세구분
                    arrParam[arrInt++] = "COMBO,Tab.tab1.SubTab.tab1.calBANK_CODE,dsBANK_CODE,0";   // TAB1-1 은행구분
                    arrParam[arrInt++] = "GRID,Tab.tab1.SubTab.tab3.grdPY_RTPPXM,dsBANK_CODE,BANK_CODE";   // TAB1-1 은행구분
                    arrParam[arrInt++] = "GRID,grdHR_MASTXM,dsAPPR_STAT,APPR_STAT";                 // 결재상태
                this.fnc_CommonCodeInnerBind(arrParam);
                
            }

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
            
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
            
            } else if ( obj.name == "grdHR_MASTXM" ) {// 사원조회
                if (this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME" || sColumnID == "EMPL_NAME") { 
                    arrParam[0] = "HRM0001";
                    arrParam[1] = "";
                    arrParam[2] = "EMPL_NAME";
                    arrParam[3] = "N";
                    arrParam[4] = "grdHR_MASTXM";
                    arrParam[5] = "EMPL_NUMB,EMPL_NAME,SECT_NAME,DEPT_NAME,OPOS_NAME";
                    arrParam[6] = "0,1,5,3,11";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;
                    arrParam[9] = "fn_CommPopupPost";

                }
            
            } else if ( obj.name == "grdPY_RTPAYX" ) {// TAB1 수당공제명
                if (this.fnc_getGridHelpColName(obj, sFromDs) == "EXPD_NAME" || sColumnID == "EXPD_NAME") { 
                    arrParam[0] = "PAY0012";
                    arrParam[1] = "1,A,1";
                    arrParam[2] = "EXPD_NAME";
                    arrParam[3] = "N";
                    arrParam[4] = "Tab.tab1.grdPY_RTPAYX";
                    arrParam[5] = "EXPD_CODE,EXPD_NAME";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                }
                
            } else if ( obj.name == "grdPY_RTBONU" ) { // TAB1 상여
                if (this.fnc_getGridHelpColName(obj, sFromDs) == "EXPD_NAME" || sColumnID == "EXPD_NAME") { 
                    arrParam[0] = "PAY0012";
                    arrParam[1] = "1,A,1";
                    arrParam[2] = "EXPD_NAME";
                    arrParam[3] = "N";
                    arrParam[4] = "Tab.tab1.grdPY_RTBONU";
                    arrParam[5] = "EXPD_CODE,EXPD_NAME";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                }
                
            } else if ( obj.name == "grdPY_RTPPXM" ) { // TAB1.SubTab.tab3
                if (this.fnc_getGridHelpColName(obj, sFromDs) == "TAPF_NAME" || sColumnID == "TAPF_NAME") { 
                    arrParam[0] = "PAY0008";
                    arrParam[1] = "";
                    arrParam[2] = "TAPF_NAME";
                    arrParam[3] = "Y";
                    arrParam[4] = "Tab.tab1.SubTab.tab3.grdPY_RTPPXM";
                    arrParam[5] = "TAPF_NAME,TAPB_NUMB";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;

                }
                
        	}
            
            if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
            
        }

        this.fn_CommPopupPost = function(sResponse){
            var sArrRtn     = this.fnc_Split(sResponse, ",");
            this.dsHR_MASTXM.setColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB", sArrRtn[0]);
            //this.dsHR_MASTXM.setColumn(this.dsHR_MASTXM.rowposition, "RERE_CODE", sArrRtn[0]);
            
            
            
            this.search_2dept();

        }

        this.dsHR_MASTXM_onrowposchanged = function(obj,e) {

            if (this.fnc_DatasetChangeCheck("dsPY_RTPCXM,dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM,dsPY_RTPWXM")) {
                if (this.fnc_Message("TMM023") == false) return false;
            }
            
            if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {  
                this.fnc_DatasetClear("dsPY_RTPCXM,dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM,dsPY_RTPWXM");
            }
            
            var sAppr_Stat  = this.fnc_Trim(this.dsHR_MASTXM.getColumn(e.newrow, "APPR_STAT"));
            
            if (sAppr_Stat == "N" || sAppr_Stat == "") {        //결재상신 가능
                this.btnSendGW.set_enable(true);
                this.btnCancGW.set_enable(false);
                this.btnSearchDoc.set_enable(false);
                
            } else if (sAppr_Stat == "T") {     //결재취소 가능
                this.btnSendGW.set_enable(false);
                this.btnCancGW.set_enable(true);
                this.btnSearchDoc.set_enable(false);
                
            } else if (sAppr_Stat == "P" || sAppr_Stat == "R" || sAppr_Stat == "Y") {       //결재취소 가능
                this.btnSendGW.set_enable(false);
                this.btnCancGW.set_enable(false);
                this.btnSearchDoc.set_enable(true);
                
            } else {
                this.btnSendGW.set_enable(true);
                this.btnCancGW.set_enable(true);
                this.btnSearchDoc.set_enable(true);
            }
            
            this.search_2dept();
        }

        this.ds_oncolumnchanged = function(obj,e) {
            
            if ( obj.name == "dsPY_RTPAYX" ) { // 급여
                if ( e.columnid == "EXPD_NAME" ) {
                    this.fn_HelpDialoge(this.Tab.tab1.grdPY_RTPAYX, "YES" ,e.oldvalue, e.columnid);
                    
                } else if ( e.columnid == "PAY1_AMOT" || e.columnid == "PAY2_AMOT" 
                         || e.columnid == "PAY3_AMOT" || e.columnid == "PAY4_AMOT" ) {
                    var sPAY1_AMOT = nexacro.toNumber(this.dsPY_RTPAYX.getColumn(e.row, "PAY1_AMOT"));
                    var sPAY2_AMOT = nexacro.toNumber(this.dsPY_RTPAYX.getColumn(e.row, "PAY2_AMOT"));
                    var sPAY3_AMOT = nexacro.toNumber(this.dsPY_RTPAYX.getColumn(e.row, "PAY3_AMOT"));
                    var sPAY4_AMOT = nexacro.toNumber(this.dsPY_RTPAYX.getColumn(e.row, "PAY4_AMOT"));
                    var sRTPY_TAMT = sPAY1_AMOT + sPAY2_AMOT + sPAY3_AMOT + sPAY4_AMOT;
                    this.dsPY_RTPAYX.setColumn(e.row, "RTPY_TAMT", sRTPY_TAMT);
                    
                    var dayPAVR = this.Tab.tab1.grdPY_RTPAYX.getCellValue(-2, 5) == "" ? 0 : nexacro.toNumber(this.Tab.tab1.grdPY_RTPAYX.getCellValue(-2, 5))/3;
                    var dayBAVR = this.Tab.tab1.grdPY_RTBONU.getCellValue(-2, 1) == "" ? 0 : nexacro.toNumber(this.Tab.tab1.grdPY_RTBONU.getCellValue(-2, 1))/12;
                                
                    var monAVR = Math.floor(parseFloat(dayPAVR + dayBAVR));
                    
                    this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVPY_AMOT",  dayPAVR);
                    this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVER_WAGE",  monAVR);
                    
                }
            } else if ( obj.name == "dsPY_RTBONU" ) { // 상여
                if ( e.columnid == "EXPD_NAME" ) {
                    this.fn_HelpDialoge(this.Tab.tab1.grdPY_RTBONU, "YES" ,e.oldvalue, e.columnid);
                } else if ( e.columnid == "PAYX_AMOT" ) {
                    var dayPAVR = this.Tab.tab1.grdPY_RTPAYX.getCellValue(-2, 5) == "" ? 0 : nexacro.toNumber(this.Tab.tab1.grdPY_RTPAYX.getCellValue(-2, 5))/3;
                    var dayBAVR = this.Tab.tab1.grdPY_RTBONU.getCellValue(-2, 1) == "" ? 0 : nexacro.toNumber(this.Tab.tab1.grdPY_RTBONU.getCellValue(-2, 1))/12;
                    var monAVR = Math.floor(parseFloat(dayPAVR + dayBAVR));
                    this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVPY_AMOT",  dayPAVR);    //2016-10-29 LYG 급여평균
                    this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVBN_AMOT",  dayBAVR);
                    this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVER_WAGE",  monAVR);
                    
                }
            } else if ( obj.name == "dsPY_RTPCXM" ) {
                if (   e.columnid == "RETI_WAGE"        //일반퇴직금
                    || e.columnid == "REEP_AMOT"        //퇴직수당금액
                    || e.columnid == "VORN_ALLO"        //명예퇴직금
                    || e.columnid == "PYET_AMOT"        //기타지급
                    || e.columnid == "OTDE_AMOT"        //기타공제
                    || e.columnid == "RTBN_AMOT"        //퇴직위로금
                    
                    //|| e.columnid == "TRRT_AMOT"        //퇴직전환금
                    //|| e.columnid == "ATPY_AMOT"      //급여압류금
                    //|| e.columnid == "CRUN_COST"      //신협비용
                    //|| e.columnid == "HOSA_AMOT"      //사택보조비
               ) {
               //퇴직급여, 명예퇴직수당 변경시 최종 퇴직급여 변경
               this.dsPY_RTPCXM.setColumn( this.dsPY_RTPCXM.rowposition , "FINL_RPAY" , 
                       nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition, "RETI_WAGE" ))
                     + nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition, "VORN_ALLO" ))
                     + nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition, "PYET_AMOT" )) //기타지급 명예퇴직처럼 합쳐지도록 수정
                     + nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition, "RTBN_AMOT" )) //퇴직위로금  명예퇴직처럼 합쳐지도록 수정
                     - nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition, "OTDE_AMOT" ))
                     
                     //- nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition, "TRRT_AMOT" )) // 2017-01-02 AYJ 퇴직전환금 제외
                     //- nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition, "ATPY_AMOT" ))
                     //- nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition, "CRUN_COST" ))
                     //- nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition, "HOSA_AMOT" ))
                     
                    );
                } else if (   e.columnid == "AVER_WAGE"     /*평균임금*/ 
                       || e.columnid == "PAYX_RATE"     /*지급율*/
                       // || e.columnid == "MAVR_WAGE"
                       ) {
                    
                    //지급율, 평균임금 변경 시 퇴직급여 변경
                    this.dsPY_RTPCXM.setColumn( this.dsPY_RTPCXM.rowposition , "RETI_WAGE" , 
                                              nexacro.round(  nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "AVER_WAGE" ))
                                                        * nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "PAYX_RATE" ))
                                                        //누진율추가
                                                        * nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "RETR_RATE" ))
                                                        / 1
                                                       ) * 1);
                    //2016-12-13 LYG RETI_WAGE와 FINL_RPAY 틀린 경우 RETI_WAGE으로 update
                    if (this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "FINL_RPAY" ) != this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "RETI_WAGE" )) {
                        this.dsPY_RTPCXM.setColumn( this.dsPY_RTPCXM.rowposition , "FINL_RPAY", this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "RETI_WAGE" ) );
                    }
                } else if (   e.columnid == "AVER_WAGE"     /*평균임금*/ 
                       || e.columnid == "PAYX_RATE"     /*지급율*/
                       // || e.columnid == "MAVR_WAGE"
                       ) {

                    //지급율, 평균임금 변경 시 퇴직급여 변경        
                    this.dsPY_RTPCXM.setColumn( this.dsPY_RTPCXM.rowposition , "RETI_WAGE" , 
                                              nexacro.round(  nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "AVER_WAGE" ))
                                                        * nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "PAYX_RATE" ))
                                                        //누진율추가
                                                        * nexacro.toNumber(this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "RETR_RATE" ))
                                                        / 1
                                                       ) 
                                              * 1);     
                        
                    //2016-12-13 LYG RETI_WAGE와 FINL_RPAY 틀린 경우 RETI_WAGE으로 update
                    if (this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "FINL_RPAY" ) != this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "RETI_WAGE" )) {
                        this.dsPY_RTPCXM.setColumn( this.dsPY_RTPCXM.rowposition , "FINL_RPAY", this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "RETI_WAGE" ) );
                    }       
                } else if (   e.columnid == "FIBF_EXMT"     //2012.12.31이전 제외월수
                           || e.columnid == "FIAF_EXMT"     //2013.03.01이후 제외월수
                           || e.columnid == "FIBF_ADMT"     //2012.12.31이전 기산월수
                           || e.columnid == "FIAF_ADMT"     //2013.03.01이후 기산월수
                          ) {
                    //제외월수, 가산월수 변경 시 지급율을 변경(Site에 따라 지급율 변경 안할 수도 있음)
                    // TODO iptPAYX_RATE(component가 존재 하지 않음 웹스퀘어 확인시 )
        //          iptPAYX_RATE.setValue(
        //                                Math.floor(   nexacro.toNumber( this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "CWRK_MCNT" ), 0)
        //                                            - nexacro.toNumber( this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "FIBF_EXMT" ), 0) 
        //                                            - nexacro.toNumber( this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "FIAF_EXMT" ), 0)
        //                                            + nexacro.toNumber( this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "FIBF_ADMT" ), 0)  
        //                                            + nexacro.toNumber( this.dsPY_RTPCXM.getColumn( this.dsPY_RTPCXM.rowposition , "FIAF_ADMT" ), 0)
        //                                          ) / 12
        //                               );
                                         
                } else if (e.columnid == "RERE_CODE") {
                    //전년도말 추계액 변경(비용계상액 = 퇴직급여 - 전년도말 추계액)
                    
                } else if (e.columnid == "RETI_ALWN") {
                    //this.fn_CalcRese(); //비용계상액계산
                    
                } else if (e.columnid == "CAL1_BEDE") {
                    this.dsPY_RTPCXM.setColumn(e.row, "CAL1_YMTH", e.newvalue.substring(0, 6));
                    this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 1, "text", this.dsPY_RTPCXM.getColumn(0, "CAL1_YMTH").substr(0, 4)
                                        + "." + this.dsPY_RTPCXM.getColumn(0, "CAL1_YMTH").substr(4, 2));
                            
                } else if (e.columnid == "CAL2_BEDE") {
                    this.dsPY_RTPCXM.setColumn(e.row, "CAL2_YMTH", e.newvalue.substring(0, 6));
                    this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 2, "text", this.dsPY_RTPCXM.getColumn(0, "CAL2_YMTH").substr(0, 4)
                                        + "." + this.dsPY_RTPCXM.getColumn(0, "CAL2_YMTH").substr(4, 2));
                            
                } else if (e.columnid == "CAL3_BEDE") {
                    this.dsPY_RTPCXM.setColumn(e.row, "CAL3_YMTH", e.newvalue.substring(0, 6));
                    this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 3, "text", this.dsPY_RTPCXM.getColumn(0, "CAL3_YMTH").substr(0, 4)
                                        + "." + this.dsPY_RTPCXM.getColumn(0, "CAL3_YMTH").substr(4, 2));
                            
                } else if (e.columnid == "CAL4_BEDE") {
                    this.dsPY_RTPCXM.setColumn(e.row, "CAL4_YMTH", e.newvalue.substring(0, 6));
                    this.Tab.tab1.grdPY_RTPAYX.setCellProperty("Head", 4, "text", this.dsPY_RTPCXM.getColumn(0, "CAL4_YMTH").substr(0, 4)
                                        + "." + this.dsPY_RTPCXM.getColumn(0, "CAL4_YMTH").substr(4, 2));
                
                } else if (e.columnid == "CAL1_DCNT"
                        || e.columnid == "CAL2_DCNT"
                        || e.columnid == "CAL3_DCNT"
                        || e.columnid == "CAL4_DCNT") {
                    this.dsPY_RTPCXM.setColumn(e.row, "DCNT_SUM",  nexacro.toNumber(grdPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "CAL1_DCNT"))
                                                             + nexacro.toNumber(grdPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "CAL2_DCNT"))
                                                             + nexacro.toNumber(grdPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "CAL3_DCNT"))
                                                             + nexacro.toNumber(grdPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "CAL4_DCNT")));
                    
                }
            }
            
        }

        this.search_2dept = function(){
            
            var sEMPL_NUMB  = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB");
            var arrParam1   = new Array();
                arrParam1[0] = "dsRECE_SEQN";
                arrParam1[1] = "PAY0028";
                arrParam1[2] = "";
                arrParam1[3] = "0";
                arrParam1[4] = sEMPL_NUMB + "," +sEMPL_NUMB;
                
            var arrParam2 = new Array();
            var arrInt   = 0;   
                arrParam2[arrInt++] = "COMBO,Tab.tab1.cmbRECE_SEQN,dsRECE_SEQN,0";
            this.fnc_GetUserComboSingle(arrParam1, arrParam2);
            
        }

        this.cmbRECE_SEQN_onchange = function(obj,e) {
            this.sPOP_FLAG = "0";
            this.search_3dept(e.postvalue);
            //  if (grdHR_MASTXM.getCellData(grdHR_MASTXM.getFocusedRowIndex(), "EMPL_NUMB").length < 1) {
        // 
        //      comLib.ObjReadOnly(grpPY_RTPCXM1, true, ""); // 
        //      comLib.ObjReadOnly(grpPY_RTPCXM2, true, ""); // 
        //      comLib.ObjReadOnly(grpPY_RTPCXM3, true, ""); // 
        //      comLib.ObjReadOnly(grpPY_RTPCXM4, true, ""); //
        //      
        //      return;
        //  }
            
        }

        this.search_3dept = function(newValue){
            this.sPOP_FLAG = "0";
            var sMethodName = "SEARCH01";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPCXM=dsPY_RTPCXM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
                sArgument  += " RECE_SEQN=" + newValue;
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
            var sMethodName = "SEARCH02";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPAYX=dsPY_RTPAYX";
            var sArgument   = this.fn_CreateArgument(sMethodName);
                sArgument  += " RECE_SEQN=" + newValue;
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
            var sMethodName = "SEARCH03";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTBONU=dsPY_RTBONU";
            var sArgument   = this.fn_CreateArgument(sMethodName);
                sArgument  += " RECE_SEQN=" + newValue;
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
            var sMethodName = "SEARCH06";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPPXM=dsPY_RTPPXM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
                sArgument  += " RECE_SEQN=" + newValue;
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
            var sMethodName = "SEARCH07";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPWXM=dsPY_RTPWXM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
                sArgument  += " RECE_SEQN=" + newValue;
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
        }

        /*---------------------------+
         |  퇴직금지급조서 처리 이벤트 |
         +---------------------------*/
        this.btnGET_PAYX = function(obj,e) {
            
            if (this.fnc_Length(this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "EMPL_NUMB")) < 1) {
                return this.fnc_Message("TMM013"); //사원을 먼저 선택하세요.
            }
            
            if ( this.sINPUT_FLAG == "1" ) {
                if (!this.fn_SaveItemCheck2()) return;
            }
            
            //회차 순번조회
            /*var sRERE_CODE = WebSquare.ModelUtil.getInstanceValue("commonCode/RECE_SEQN/vector/data/returnMsg[COMD_CODE/@value = '"
                            + cmbRECE_SEQN.getValue() + "']/SEQ/@value");

            if (sRERE_CODE == "2") {
                //2013년 이전 퇴직금처리 자료는 퇴직금계산조서 화면에서 조회 하세요! 
                this.fnc_Message("PAY045", true);
                return;
            }*/
            
            var i = this.dsPY_RTPCXM.rowposition;
            
            //마감여부 체크
            if (this.dsPY_RTPCXM.getColumn(i, "CLSE_YSNO") == "1") {
                this.fnc_Message("PAY015", true); //Message 처리 
                return false;
            }
            
            if (!this.fn_ProcItemCheck()) return;
            
            //퇴직급여 자료를 가져오시겠습니까?
            if ( this.fnc_Message("PAY016") ) {
        		this.sKeyValue[0] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition,"EMPL_NUMB");
                this.dsPY_RTPCXM.setColumn(i, "PROC_TYPE", this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "PROC_TYPE" ));
                this.dsPY_RTPCXM.set_updatecontrol(false);
                this.dsPY_RTPCXM.setRowType(0, Dataset.ROWTYPE_INSERT);
                this.dsPY_RTPCXM.set_updatecontrol(true);
                
                var sMethodName = "PROC00";
                var sInDataSet  = "dsPY_RTPCXM=dsPY_RTPCXM:U";
                var sOutDataSet = "";
                var sArgument   = this.fn_CreateArgument(sMethodName);
                this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
                
            }
            
        }

        /*-----------------------------------+
        |  평균임금 계산  | 
        @parameter : 
        @return :
        +------------------------------------*/
        this.setAvrgPay = function () {
            
            //급여합/3 + 상여합/12 
            var dayPAVR = Math.floor(parseFloat(grdPY_RTPAYX.getFooterData("FT_RTPY_TAMT"), 0)/3);
            var dayBAVR = Math.floor(parseFloat(grdPY_RTBONU.getFooterData("FT_PAYX_AMOT"), 0)/12); 
            //var dayAVR = Math.floor(dayPAVR+dayBAVR);

            //iptAVER_WAGE.setValue( dayAVR );

            //일평균임금 : 급여합/3개월근무일수 + 상여합/4/3개월근무일수
            //월평균임금 : 일평균임금 * 30 
            //var dayPAVR = parseFloat(grdPY_RTPAYX.getFooterData("FT_RTPY_TAMT"), 0)   / parseFloat(this.dsPY_RTPCXM.getColumn(0, "DCNT_SUM"), 0);
            //var dayBAVR = parseFloat(grdPY_RTBONU.getFooterData("FT_PAYX_AMOT"), 0)/ 4/ parseFloat(this.dsPY_RTPCXM.getColumn(0, "DCNT_SUM"), 0);
            //var dayAVR = Math.floor((dayPAVR + dayBAVR) * 100) / 100;
            var monAVR = dayPAVR + dayBAVR;
            //iptDAVR_WAGE.setValue(dayAVR);
            
            iptAVER_WAGE.setValue(monAVR);
            
        }

        /*-----------------------------------+
        |  비용계산액 계산  | 
        @parameter : 
        @return :
        +------------------------------------*/
        this.fn_CalcRese = function () {
            // component 없음
            //this.iptRESE_CALC.set_value(parseFloat(iptRETI_WAGE.getValue(), 0)    - parseFloat(iptRETI_ALWN.getValue(), 0));
            
        }

        /*-------------------------------------+
         |  두 날짜 사이의 기간을 월수로 반환한다. |
         +--------------------------------------*/
        this.getCalcMonth = function (fMonth,tMonth) {
            var iMonth  = 0; //계산된 개월수 
            var iYear   = 0; //계산된 년도
            var rMonth  = 0; //반환할 개월수
            
            if (parseInt(fMonth) <= parseInt(tMonth)) {
                iYear   = parseInt(tMonth.substr(0, 4)) - parseInt(fMonth.substr(0, 4));
                iMonth  = parseInt(parseFloat(tMonth.substr(4, 2))) - parseInt(parseFloat(fMonth.substr(4, 2)));
                rMonth  = (12 * iYear) + iMonth + 1;
                return rMonth;
            } else {
                return 0;
            }
        }

        /***************************************************************************************************
        *                                   컴포넌트 동적 Event 처리 부분                                *
        ***************************************************************************************************/
        /*-----------------------------------+
        |  급여자료 행추가 이벤트   | 
        @parameter : 
        @return :
        +------------------------------------*/
        this.btnAdd_onclick = function(obj,e) {
            //사원 선택 체크
            if (this.fnc_Length(this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "EMPL_NUMB")) < 1) {
                return this.fnc_Message("TMM013"); //사원을 먼저 선택하세요.
            }
                
            if ( obj.name == "btnPY_RTPAYXAdd" ){ // 급여
                var row = this.dsPY_RTPAYX.insertRow(this.dsPY_RTPAYX.rowposition+1);
                this.dsPY_RTPAYX.setColumn(row, "EMPL_NUMB", this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "EMPL_NUMB")); //사원번호
                this.dsPY_RTPAYX.setColumn(row, "RECE_SEQN", this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "RECE_SEQN")); //회차
                this.dsPY_RTPAYX.setColumn(row, "PAY1_AMOT", 0); //금액1
                this.dsPY_RTPAYX.setColumn(row, "PAY2_AMOT", 0); //금액2
                this.dsPY_RTPAYX.setColumn(row, "PAY3_AMOT", 0); //금액3
                this.dsPY_RTPAYX.setColumn(row, "PAY4_AMOT", 0); //금액4
                
            } else if ( obj.name == "btnPY_RTBONUAdd" ){ // 상여
                var row = this.dsPY_RTBONU.insertRow(this.dsPY_RTBONU.rowposition+1);
                this.dsPY_RTBONU.setColumn(row, "EMPL_NUMB", this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "EMPL_NUMB")); //사원번호
                this.dsPY_RTBONU.setColumn(row, "RECE_SEQN", this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "RECE_SEQN")); //회차
                this.dsPY_RTBONU.setColumn(row, "PAYX_AMOT", 0); //상여금액 
            
            } else if ( obj.name == "btnPY_RTPPXMAdd" ) { // TAB1-3 과세이연
                var row = this.dsPY_RTPPXM.insertRow(this.dsPY_RTPPXM.rowposition+1);
                this.dsPY_RTPPXM.setColumn(row, "EMPL_NUMB", this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "EMPL_NUMB")); //사원번호
                this.dsPY_RTPPXM.setColumn(row, "RECE_SEQN", this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "RECE_SEQN")); //회차
                //this.dsPY_RTPPXM.setColumn(row, "TAPA_NUMB", this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "ACNT_NUMB")); //계좌번호
                this.dsPY_RTPPXM.setColumn(row, "TAPA_NUMB", ""); //계좌번호
                this.dsPY_RTPPXM.setColumn(row, "TAPD_AMOT", this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "FINL_RPAY")); //계좌입금금액
                this.dsPY_RTPPXM.setColumn(row, "TAPD_DATE", this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "FINL_PYDT")); //금액
                this.fnc_GridSetCellFocus(this.Tab.tab1.SubTab.tab3.grdPY_RTPPXM, "TAPF_NAME");

            }
            
        }

        /*-----------------------------------+
        |  급여자료 행삭제 이벤트   | 
        @parameter : 
        @return :
        +------------------------------------*/
        this.btnDel_onclick = function(obj,e) {

            if ( obj.name == "btnPY_RTPAYXDel" ){ // 급여
                if (this.dsPY_RTPAYX.getRowCount() > 0) {
                    if (this.fn_DeleteCheck(this.dsPY_RTPAYX)) {
                        this.dsPY_RTPAYX.deleteRow(this.dsPY_RTPAYX.rowposition);
                        var dayPAVR = this.Tab.tab1.grdPY_RTPAYX.getCellValue(-2, 5) == "" ? 0 :nexacro.toNumber(this.Tab.tab1.grdPY_RTPAYX.getCellValue(-2, 5))/3;
                        var dayBAVR = this.Tab.tab1.grdPY_RTBONU.getCellValue(-2, 1) == "" ? 0 : nexacro.toNumber(this.Tab.tab1.grdPY_RTBONU.getCellValue(-2, 1))/12;
                        var monAVR = Math.floor(parseFloat(dayPAVR + dayBAVR));
                        
                        this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVPY_AMOT",  dayPAVR);
                        this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVER_WAGE",  monAVR);
                    }
                    
                } else { 
                    this.fnc_Message("TMM007"); //삭제 자료 없음 정보 Display
                    
                }
            } else if ( obj.name == "btnPY_RTBONUDel" ){ // 상여
                if (this.dsPY_RTBONU.getRowCount() > 0) {
                    if (this.fn_DeleteCheck(this.dsPY_RTBONU)) {
                        this.dsPY_RTBONU.deleteRow(this.dsPY_RTBONU.rowposition);
                        
                        var dayPAVR = this.Tab.tab1.grdPY_RTPAYX.getCellValue(-2, 5) == "" ? 0 :nexacro.toNumber(this.Tab.tab1.grdPY_RTPAYX.getCellValue(-2, 5))/3;
                        var dayBAVR = this.Tab.tab1.grdPY_RTBONU.getCellValue(-2, 1) == "" ? 0 : nexacro.toNumber(this.Tab.tab1.grdPY_RTBONU.getCellValue(-2, 1))/12;
                        var monAVR = Math.floor(parseFloat(dayPAVR + dayBAVR));
                        this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVPY_AMOT",  dayPAVR);
                        this.dsPY_RTPCXM.setColumn(this.dsPY_RTPCXM.rowposition, "AVER_WAGE",  monAVR);
                        
                    }
                } else { 
                        this.fnc_Message("TMM007"); //삭제 자료 없음 정보 Display
                        
                }
            } else if ( obj.name == "btnPY_RTPPXMDel" ) { // TAB1-3 과세이연
                if (this.dsPY_RTPPXM.getRowCount() > 0) {
                    if (this.fn_DeleteCheck(this.dsPY_RTPPXM)) this.dsPY_RTPPXM.deleteRow(this.dsPY_RTPPXM.rowposition);
                    
                }
            
            }
            
        }
        // 
        // /*-----------------------------------+
        //  |  인쇄 여부 체크   | 
        //  @parameter : 
        //  @return :bool
        //  +------------------------------------*/
        // scwin.checkPrint = function () {
        //  if (grdHR_MASTXM.getRowCount() < 1 || grdHR_MASTXM.getFocusedRowIndex() < 0) {
        //      comLib.Message("TMM031", true); //인쇄할 자료가 없습니다. 조회 후 인쇄하십시요. 
        //      return false;
        //  }
        //  //증명서를 인쇄하시겠습니까?
        //  //if (!comLib.Message("HRM010", true, "퇴직소득원천징수영수증")) return false;
        // 
        //  //선택된 내용이 입력 또는 수정상태라면...
        //  if(valLib.checkModified([this.dsPY_RTPCXM, this.dsPY_RTPAYX, this.dsPY_RTBONU, this.dsPY_RTPPXM])) {
        //      comLib.Message("TMM015", true, "인쇄"); // 저장 후 인쇄하시기 바랍니다. 
        //      return false;
        //  }
        //  return true;
        // }
        // 
        // /*-----------------------------------+
        //  |  퇴직금 원천징수영수증 출력버튼 클릭 시   | 
        //  @parameter : 
        //  @return :
        //  +------------------------------------*/
        // scwin.getReport1 = function (rtnValue) {
        // 
        //  if (rtnValue == false) return;
        // 
        //  //if(grdPY_RTPWXM.getRowCount() < 1 || grdPY_RTPWXM.getFocusedRowIndex()<0) {
        //  if (grdPY_RTPWXM.getRowCount() < 1) {
        //      comLib.Message("TMM031", true); //인쇄할 자료가 없습니다. 조회 후 인쇄하십시요. 
        //      return false;
        //  }   
        //  //변경여부 체크
        //      if (rtnValue != true) {
        // 
        //      comLib.Message("HRM010", true, "퇴직소득원천징수영수증", "getReport1");
        //      
        //  } else {
        //      //필수조회조건체크
        //      if (!scwin.checkSearchItem()) return;
        //      
        //      var param = new Array();
        //      var sParam = "";            
        //      var iRow = this.dsPY_RTPCXM.rowposition;
        //      var jrffile = "";
        //  
        //      sParam = "&FINL_PYDT=" + this.dsPY_RTPCXM.getColumn( iRow, "FINL_PYDT");
        //      sParam += "&ENFC_CODE=" + this.dsPY_RTPCXM.getColumn( iRow, "ENFC_CODE");
        //      sParam += "&EMPL_NUMB=" + this.dsPY_RTPCXM.getColumn( iRow, "EMPL_NUMB");
        //      sParam += "&RECE_SEQN=" + this.dsPY_RTPCXM.getColumn( iRow, "RECE_SEQN");
        //      
        //      if ( this.dsPY_RTPCXM.getCellData( this.dsPY_RTPCXM.rowposition , "FINL_ENDT" ) >= "20160101" ) {
        //          jrffile = "PAYF0030R01.jrf";    //출력물 파일(퇴직원천징수영수증)
        //      } else {
        //          jrffile = "PAYF0030R01_2015.jrf";   //출력물 파일(퇴직원천징수영수증)
        //      }
        //                  
        //      param[0] = new Array("PY_RTPWXM", sParam);
        //      //param[1] = new Array("IMGX_PATH", sFILE_PATH + "/TMM/STMP/" + sFILE_PATH2 + ".jpg"); 
        //  
        //      comLib.UbiReportView(jrffile, param, true, null);
        // 
        //      return ;
        //  }
        //          
        // }
        // 
        // /*-----------------------------------+
        //  |  퇴직금 산정내역서 출력버튼 클릭 시   | 
        //  @parameter : 
        //  @return :
        //  +------------------------------------*/
        // scwin.getReport2 = function (rtnValue) {
        // 
        //  if (rtnValue == false) return;
        // 
        //  //if(grdPY_RTPWXM.getRowCount() < 1 || grdPY_RTPWXM.getFocusedRowIndex()<0) {
        //  if (grdPY_RTPWXM.getRowCount() < 1) {
        //      comLib.Message("TMM031", true); //인쇄할 자료가 없습니다. 조회 후 인쇄하십시요. 
        //      return false;
        //  }   
        //  //변경여부 체크
        //      if (rtnValue != true) {
        // 
        //      comLib.Message("HRM010", true, "퇴직금 산정내역서", "getReport2");
        //      
        //  } else {
        //      //필수조회조건체크
        //      if (!scwin.checkSearchItem()) return;
        //          
        //      var param = new Array();
        //      var sParam = "";            
        //      var iRow = this.dsPY_RTPCXM.rowposition;
        //      var jrffile = "";
        //      
        //  
        //      sParam = "&ENFC_CODE=" + this.dsPY_RTPCXM.getColumn( iRow, "ENFC_CODE");
        //      sParam += "&EMPL_NUMB=" + this.dsPY_RTPCXM.getColumn( iRow, "EMPL_NUMB");
        //      sParam += "&RECE_SEQN=" + this.dsPY_RTPCXM.getColumn( iRow, "RECE_SEQN");
        //      sParam += "&RETR_DATE=" + grdHR_MASTXM.getCellData( iRow, "RETR_DATE");
        //      
        //      jrffile = "PAYF0030R022.jrf";   //출력물 파일(퇴직금 산정내역서)
        //                  
        //      param[0] = new Array("HR_MASTXM", sParam);
        //      param[1] = new Array("PY_PMMAST", sParam);
        //      param[2] = new Array("PY_PMMAST3", sParam);
        //      param[3] = new Array("PY_PMMAST4", sParam);
        //      comLib.UbiReportView(jrffile, param, true, null);
        // 
        //      return ;
        //  }
        //          
        // }
        // 
        // /*-----------------------------------+
        // |  마감 처리 이벤트   |     
        //  @parameter : 
        //  @return :
        // +------------------------------------*/
        this.btnProcClose_onclick = function(obj,e) {
            
            if (this.fnc_Length(this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "EMPL_NUMB")) < 1) {
                return this.fnc_Message("TMM013"); //사원을 먼저 선택하세요.
            }
            
            this.dsHR_MASTXM.set_updatecontrol(false);
            this.dsHR_MASTXM.setRowType(0, Dataset.ROWTYPE_UPDATE);
            this.dsHR_MASTXM.set_updatecontrol(true);
            
            if ( this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "CLSE_YSNO" ) == "1" ) {
                return this.fnc_Message("PAY015", this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NAME") + ")의"); // 퇴직처리가 이미 마감 되었습니다.
            }
            
            if ( this.fnc_Message("TMM061", "대상자(" + this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NAME") + ")의 마감") ){
                var sMethodName = "PROC01";
                var sInDataSet  = "dsHR_MASTXM=dsHR_MASTXM:U";
                var sOutDataSet = "";
                var sArgument   = this.fn_CreateArgument(sMethodName);
                this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            }
            
        }
        // 
        // /*-----------------------------------+
        // |  일괄 처리 이벤트   |     
        //  @parameter : 
        //  @return :
        // +------------------------------------*/
        // scwin.btnProc_onclick = function(rtnValue) {
        //  
        //  if(rtnValue == false) return;
        //  
        //  var iDataCnt = grdHR_MASTXM.getCheckedIndex("CHK").length;
        // 
        //  if (iDataCnt < 1) {
        //      comLib.Message("TMM013", true);                //사원을 선택하세요.
        //      return false;
        //  } 
        //  
        //  if (rtnValue == true) { 
        // 
        // 
        //      this.dsPY_RTPCXM_CHK.removeAll();
        //      this.dsPY_RTPCXM_CHK.reform();
        //      
        //      for (var i=0; i < this.dsHR_MASTXM.getRowCount(); i++) {
        //          if (this.dsHR_MASTXM.getCellData( i , "CHK" ) == "1") {
        //                      
        //              row = this.dsPY_RTPCXM_CHK.insertRow();             
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "EMPL_NUMB", this.dsHR_MASTXM.getCellData( i , "EMPL_NUMB" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "RECE_SEQN", this.dsHR_MASTXM.getCellData( i , "RECE_SEQN" ));              
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "RERE_CODE", this.dsPY_RTPCXM.getCellData( 0 , "RERE_CODE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "TAXX_GUBN", this.dsPY_RTPCXM.getCellData( 0 , "TAXX_GUBN" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "ENFC_CODE", this.dsPY_RTPCXM.getCellData( 0 , "ENFC_CODE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FINL_ISDT", this.dsPY_RTPCXM.getCellData( 0 , "FINL_ISDT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FINL_STDT", this.dsPY_RTPCXM.getCellData( 0 , "FINL_STDT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FINL_ENDT", this.dsHR_MASTXM.getCellData( i , "RETR_DATE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FINL_PYDT", ipcFINL_PYDT.getValue());              
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FIBF_EXMT", this.dsPY_RTPCXM.getCellData( 0 , "FIBF_EXMT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FIAF_EXMT", this.dsPY_RTPCXM.getCellData( 0 , "FIAF_EXMT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FIBF_ADMT", this.dsPY_RTPCXM.getCellData( 0 , "FIBF_ADMT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FIAF_ADMT", this.dsPY_RTPCXM.getCellData( 0 , "FIAF_ADMT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MIDL_ISDT", this.dsPY_RTPCXM.getCellData( 0 , "MIDL_ISDT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MIDL_STDT", this.dsPY_RTPCXM.getCellData( 0 , "MIDL_STDT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MIDL_ENDT", this.dsPY_RTPCXM.getCellData( 0 , "MIDL_ENDT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MIDL_PYDT", this.dsPY_RTPCXM.getCellData( 0 , "MIDL_PYDT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MIBF_EXMT", this.dsPY_RTPCXM.getCellData( 0 , "MIBF_EXMT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MIAF_EXMT", this.dsPY_RTPCXM.getCellData( 0 , "MIAF_EXMT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MIBF_ADMT", this.dsPY_RTPCXM.getCellData( 0 , "MIBF_ADMT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MIAF_ADMT", this.dsPY_RTPCXM.getCellData( 0 , "MIAF_ADMT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "PMST_DATE", this.dsHR_MASTXM.getCellData( i , "RETR_DATE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "TITL_BEDE", this.dsPY_RTPCXM.getCellData( 0 , "TITL_BEDE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "TITL_ENDD", this.dsPY_RTPCXM.getCellData( 0 , "TITL_ENDD" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "TITL_DCNT", this.dsPY_RTPCXM.getCellData( 0 , "TITL_DCNT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL1_YMTH", this.dsPY_RTPCXM.getCellData( 0 , "CAL1_YMTH" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL1_BEDE", this.dsPY_RTPCXM.getCellData( 0 , "CAL1_BEDE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL1_ENDD", this.dsPY_RTPCXM.getCellData( 0 , "CAL1_ENDD" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL1_DCNT", this.dsPY_RTPCXM.getCellData( 0 , "CAL1_DCNT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL2_YMTH", this.dsPY_RTPCXM.getCellData( 0 , "CAL2_YMTH" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL2_BEDE", this.dsPY_RTPCXM.getCellData( 0 , "CAL2_BEDE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL2_ENDD", this.dsPY_RTPCXM.getCellData( 0 , "CAL2_ENDD" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL2_DCNT", this.dsPY_RTPCXM.getCellData( 0 , "CAL2_DCNT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL3_YMTH", this.dsPY_RTPCXM.getCellData( 0 , "CAL3_YMTH" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL3_BEDE", this.dsPY_RTPCXM.getCellData( 0 , "CAL3_BEDE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL3_ENDD", this.dsPY_RTPCXM.getCellData( 0 , "CAL3_ENDD" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL3_DCNT", this.dsPY_RTPCXM.getCellData( 0 , "CAL3_DCNT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL4_YMTH", this.dsPY_RTPCXM.getCellData( 0 , "CAL4_YMTH" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL4_BEDE", this.dsPY_RTPCXM.getCellData( 0 , "CAL4_BEDE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL4_ENDD", this.dsPY_RTPCXM.getCellData( 0 , "CAL4_ENDD" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CAL4_DCNT", this.dsPY_RTPCXM.getCellData( 0 , "CAL4_DCNT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "DCNT_SUM",  this.dsPY_RTPCXM.getCellData( 0 , "DCNT_SUM" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "DAVR_WAGE", this.dsPY_RTPCXM.getCellData( 0 , "DAVR_WAGE" ));              
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "AVER_WAGE", this.dsPY_RTPCXM.getCellData( 0 , "AVER_WAGE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CWRK_YCNT", this.dsPY_RTPCXM.getCellData( 0 , "CWRK_YCNT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CWRK_MCNT", this.dsPY_RTPCXM.getCellData( 0 , "CWRK_MCNT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CWRK_YMCT", this.dsPY_RTPCXM.getCellData( 0 , "CWRK_YMCT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "REYS_YCNT", this.dsPY_RTPCXM.getCellData( 0 , "REYS_YCNT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "REYS_MCNT", this.dsPY_RTPCXM.getCellData( 0 , "REYS_MCNT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "REYS_DCNT", this.dsPY_RTPCXM.getCellData( 0 , "REYS_DCNT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "PAYX_RATE", this.dsPY_RTPCXM.getCellData( 0 , "PAYX_RATE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "RETI_WAGE", this.dsPY_RTPCXM.getCellData( 0 , "RETI_WAGE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "VORN_ALLO", this.dsPY_RTPCXM.getCellData( 0 , "VORN_ALLO" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "AVPY_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "AVPY_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "AVBN_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "AVBN_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "PYET_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "PYET_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "TRRT_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "TRRT_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "ATPY_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "ATPY_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CRUN_COST", this.dsPY_RTPCXM.getCellData( 0 , "CRUN_COST" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "HOSA_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "HOSA_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "OTDE_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "OTDE_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "DBPJ_DATE", this.dsPY_RTPCXM.getCellData( 0 , "DBPJ_DATE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "RTBM_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "RTBM_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FINL_RPAY", this.dsPY_RTPCXM.getCellData( 0 , "FINL_RPAY" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FINT_RPAY", this.dsPY_RTPCXM.getCellData( 0 , "FINT_RPAY" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FINL_PPTX", this.dsPY_RTPCXM.getCellData( 0 , "FINL_PPTX" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "PBUS_NUMB", this.dsPY_RTPCXM.getCellData( 0 , "PBUS_NUMB" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "PFIR_NAME", this.dsPY_RTPCXM.getCellData( 0 , "PFIR_NAME" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MIDL_RPAY", this.dsPY_RTPCXM.getCellData( 0 , "MIDL_RPAY" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MINT_RPAY", this.dsPY_RTPCXM.getCellData( 0 , "MINT_RPAY" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "MIDL_PPTX", this.dsPY_RTPCXM.getCellData( 0 , "MIDL_PPTX" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "RETI_INTX", this.dsPY_RTPCXM.getCellData( 0 , "RETI_INTX" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "RETI_STRD", this.dsPY_RTPCXM.getCellData( 0 , "RETI_STRD" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "RETI_IHTX", this.dsPY_RTPCXM.getCellData( 0 , "RETI_IHTX" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "WORC_INTX", this.dsPY_RTPCXM.getCellData( 0 , "WORC_INTX" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "WORC_STRD", this.dsPY_RTPCXM.getCellData( 0 , "WORC_STRD" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "WORC_IHTX", this.dsPY_RTPCXM.getCellData( 0 , "WORC_IHTX" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "FPTA_ATDD", this.dsPY_RTPCXM.getCellData( 0 , "FPTA_ATDD" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "DDUC_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "DDUC_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "NPPC_ATDD", this.dsPY_RTPCXM.getCellData( 0 , "NPPC_ATDD" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "HINC_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "HINC_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "LOAN_RPAM", this.dsPY_RTPCXM.getCellData( 0 , "LOAN_RPAM" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "REEP_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "REEP_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "PENS_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "PENS_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "RETI_ALWN", this.dsPY_RTPCXM.getCellData( 0 , "RETI_ALWN" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "REMK_100X", this.dsPY_RTPCXM.getCellData( 0 , "REMK_100X" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "RLPY_AMOT", this.dsPY_RTPCXM.getCellData( 0 , "RLPY_AMOT" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "BANK_CODE", this.dsPY_RTPCXM.getCellData( 0 , "BANK_CODE" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "ACNT_NUMB", this.dsPY_RTPCXM.getCellData( 0 , "ACNT_NUMB" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "DPST_NAME", this.dsPY_RTPCXM.getCellData( 0 , "DPST_NAME" ));
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "CLSE_YSNO", this.dsPY_RTPCXM.getCellData( 0 , "CLSE_YSNO" ));              
        //              this.dsPY_RTPCXM_CHK.setColumn(row, "PROC_TYPE", this.dsHR_MASTXM.getCellData( i , "PROC_TYPE" ));
        //              
        //          }
        //      }
        //      
        //      if(this.dsPY_RTPCXM_CHK.getRowCount() < 1) {
        //          comLib.Message("HSV002", true);     //처리할 자료가 없습니다. 
        //          return false;
        //      } else {
        //          scwin.setSubmitArg("PROC02", "C");
        //      }
        //      
        //  } else {    
        //      
        //      if (iDataCnt == 1) {
        //          comLib.Message("TMM061",true,"대상자(" + comLib.Trim(this.dsHR_MASTXM.getCellData(grdHR_MASTXM.getCheckedIndex("CHK")[0], "EMPL_NAME")) + ")의 " , "btnProc_onclick");
        //      } else if (iDataCnt > 1) {
        //          comLib.Message("PAY058",true,"btnProc_onclick");
        //      }           
        //      
        //  } 
        //  
        //          
        // }

        this.fn_ProcItemCheck = function(){
            
            for (var i = 0; i < this.dsPY_RTPCXM.getRowCount(); i++) {
        //      if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "RECE_SEQN"))) < 1) {
        //          return this.fnc_CheckPostAction("TMM072", "기준년도", this.dsPY_RTPCXM, i, this.grdPY_REGSAL, "RECE_SEQN");
        //      }
                
                if ( this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "PBUS_NUMB"))) > 0 ){
                    if ( !this.fnc_CustNumberCheck(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "PBUS_NUMB")))){
                        return this.fnc_CheckPostAction("TMM072", "사업자번호", this.dsPY_RTPCXM, i, this.Tab.tab1.SubTab.tab2.mskPBUS_NUMB, "PBUS_NUMB");
                    }
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "FINL_ENDT"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "기산종료일", this.dsPY_RTPCXM, i, this.Tab.tab1.calFINL_ENDT, "FINL_ENDT");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "RERE_CODE"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "퇴직사유", this.dsPY_RTPCXM, i, this.Tab.tab1.cmbRERE_CODE, "RERE_CODE");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "FINL_PYDT"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "지급예정일", this.dsPY_RTPCXM, i, this.Tab.tab1.calFINL_PYDT, "FINL_PYDT");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsPY_RTPCXM.getColumn(i, "PMST_DATE"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "급여기준일", this.dsPY_RTPCXM, i, this.Tab.tab1.calPMST_DATE, "PMST_DATE");
                }
                
            }
            
            return true;
            
        }

        this.Tab_tab1_btnPopup_onclick = function(obj,e) {

            if (this.fnc_Length(this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "EMPL_NUMB")) < 1) {
                return this.fnc_Message("TMM013");
            }
            
            var sCLSE_YSNO = "";
            if (this.dsPY_RTPCXM.getColumn(this.dsPY_RTPCXM.rowposition, "CLSE_YSNO") == "1") {
                sCLSE_YSNO = "Y";
            } else {
                sCLSE_YSNO = "N";
            }
            
            var sName       = "PAYF0030P01";
            var sFormURL    = "pay::PAYF0030P01.xfdl";
            var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
                sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
                sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
                sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
                sOpenStyle += ",width=750";       //현재 반응 없음
                sOpenStyle += ",height=500";      //현재 반응 없음
                sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
                sOpenStyle += ",titletext=";      //Form Title여부
                sOpenStyle += ",status=false";      //Form Title Bar Visible 여부
                sOpenStyle += ",resizable=true";      //Form Title Bar Visible 여부
            
            var objArgumentList = { sEMPL_NUMB : this.fnc_Trim(this.dsPY_RTPAYX.getColumn(0, "EMPL_NUMB"))
                                  , sRECE_SEQN : this.fnc_Trim(this.dsPY_RTPAYX.getColumn(0, "RECE_SEQN"))
                                  , sCAL1_YMTH : this.Tab.tab1.grdPY_RTPAYX.getCellProperty("Head", 1, "text")
                                  , sCAL2_YMTH : this.Tab.tab1.grdPY_RTPAYX.getCellProperty("Head", 2, "text")
                                  , sCAL3_YMTH : this.Tab.tab1.grdPY_RTPAYX.getCellProperty("Head", 3, "text")
                                  , sCAL4_YMTH : this.Tab.tab1.grdPY_RTPAYX.getCellProperty("Head", 4, "text")
                                  , sCLSE_YSNO : sCLSE_YSNO
            };
            
            this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");
            
        }

        /*-----------------+
         |  팝업 CallBack  |
         +-----------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {
            this.sPOP_FLAG = "1"; // 팝업 콜백
            var sMethodName = "SEARCH02";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTPAYX=dsPY_RTPAYX";
            var sArgument   = this.fn_CreateArgument(sMethodName);
                sArgument  += " RECE_SEQN=" + this.Tab.tab1.cmbRECE_SEQN.value;
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
            var sMethodName = "SEARCH03";
            var sInDataSet  = "";
            var sOutDataSet = "dsPY_RTBONU=dsPY_RTBONU";
            var sArgument   = this.fn_CreateArgument(sMethodName);
                sArgument  += " RECE_SEQN=" + this.Tab.tab1.cmbRECE_SEQN.value;
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        }

        this.popINSERT_cmbPRIT_GUBN_onitemchanged = function(obj,e) {
            
            //데이터 필드 초기화
            this.popINSERT.imgSearchTitle.set_visible(false);
            this.popINSERT.Radio01.set_visible(false);
            
            var nGUBN = parseInt(e.postvalue);
            
            if (nGUBN == 01 ) {         //지급결의서
                this.popINSERT.imgSearchTitle.set_visible(false);
                this.popINSERT.Radio01.set_visible(false);
                    
            } else if (nGUBN == 02 ) {  // 원천징수영수증
                this.popINSERT.imgSearchTitle.set_visible(true);
                this.popINSERT.Radio01.set_visible(true);
                    
            } 
        }

        
        this.fn_SelectPrint = function (obj,e) {
            
            var nX  = system.clientToScreenX(this.div_ButtonList.btnPrint, 0);;
                nX -= system.clientToScreenX(application.mainframe,0);
            var nY  = system.clientToScreenY(this.div_ButtonList.btnPrint, this.div_ButtonList.btnPrint.getOffsetHeight());
                nY -= system.clientToScreenY(application.mainframe,0);

            this.popINSERT.Radio00.set_value("01");
            this.popINSERT.cmbPRIT_GUBN.set_value("");
            this.popINSERT.Radio01.set_value("01");
            this.popINSERT.cmbPRIT_GUBN.set_value("01");
            this.popINSERT.imgSearchTitle.set_visible(false);
            this.popINSERT.Radio01.set_visible(false);
            
            
            this.popINSERT.trackPopup(nX, nY - 2);
        }

        /*------------+
         |  팝업닫기  |
         +------------*/
         this.popINSERT_btnClose_onclick = function(obj,e) {
            this.popINSERT.Radio00.set_value("");
            this.popINSERT.cmbPRIT_GUBN.set_value("");
            this.popINSERT.Radio01.set_value("");
            this.popINSERT.closePopup();
            
        }

        this.fn_Print2 = function (obj,e) {
            
            if (this.fnc_Length(this.fnc_Trim(this.popINSERT.cmbPRIT_GUBN.value)) < 1) {
                this.fnc_Message("TMM008", "출력구분"); //Message 처리 
                return false;
            }
                
            var reportfile  = "";
            var params      = "";
            
            var dataref     = new Array();
           
            if (this.popINSERT.Radio00.value == '02'){ // 체크된 자료
                
                this.sEMPL_LIST = "";
                    
                for (var i = 0; i < this.dsHR_MASTXM.getRowCount(); i++) {
                
                    if (this.dsHR_MASTXM.getColumn(i, "CHK") == "1") {
                    
                        if (this.sEMPL_LIST != "") this.sEMPL_LIST += ",";                  
                        
                        this.sEMPL_LIST += "'" + this.dsHR_MASTXM.getColumn(i,"EMPL_NUMB") + "'";               
                    }
                    
                }
                
                if( this.sEMPL_LIST == "" ){
                    this.fnc_Message("TMM013", true);
                    return false;
                }
                
                if (this.popINSERT.cmbPRIT_GUBN.value == '01') {        // 지급결의서    
                
                    reportfile = "/pay/PAYF0030R03.jrf";
                    
                    dataref[0]              = new Object();
                    dataref[0].type         = "TRAN";
                    dataref[0].svcUrl       = "/core/erp/pay/PAYF0030_PRINT03.do";
                    dataref[0].inDataset    = "";
                    dataref[0].outDataset   = "dsPY_RTBONU_PRINT=dsPY_RTBONU_PRINT dsPY_RTPCXM_PRINT=dsPY_RTPCXM_PRINT dsPY_RTPAYX_PRINT=dsPY_RTPAYX_PRINT dsPY_RTPPXM_RPT=dsPY_RTPPXM_RPT dsPY_SVINSU_PRINT=dsPY_SVINSU_PRINT";
                    dataref[0].arg          = this.fn_CreateArgument("PRINT03");
                    
                } else if (this.popINSERT.cmbPRIT_GUBN.value == '02') { // 원천징수영수증
                
                    this.fnc_DatasetClear("dsPY_RTPWXM_PRINT");
                    
                    reportfile = "/pay/PAYF0030R01.jrf";
                    params     = "SELE_GUBN#" + this.popINSERT.Radio01.value;
                            
                    dataref[0]              = new Object();
                    dataref[0].type         = "TRAN";
                    dataref[0].svcUrl       = "/core/erp/pay/PAYF0030_PRINT10.do";
                    dataref[0].inDataset    = ""
                    dataref[0].outDataset   = "dsPY_RTPWXM_PRINT=dsPY_RTPWXM_PRINT";
                    dataref[0].arg          = this.fn_CreateArgument("PRINT10");
                    
                }
                
            } else {                                    // 선택된 자료
            
                if (this.popINSERT.cmbPRIT_GUBN.value == '01') {        // 지급결의서
            
                    reportfile = "/pay/PAYF0030R03.jrf";

                    dataref[0]              = new Object();
                    dataref[0].type         = "TRAN";
                    dataref[0].svcUrl       = "/core/erp/pay/PAYF0030_PRINT01.do";
                    dataref[0].inDataset    = ""
                    dataref[0].outDataset   = "dsPY_RTBONU_PRINT=dsPY_RTBONU_PRINT dsPY_RTPCXM_PRINT=dsPY_RTPCXM_PRINT dsPY_RTPAYX_PRINT=dsPY_RTPAYX_PRINT dsPY_RTPPXM_RPT=dsPY_RTPPXM_RPT dsPY_SVINSU_PRINT=dsPY_SVINSU_PRINT";
                    dataref[0].arg          = this.fn_CreateArgument("PRINT01");
                    
                } else if (this.popINSERT.cmbPRIT_GUBN.value == '02') { // 원천징수영수증
                
                    reportfile = "/pay/PAYF0030R01.jrf";
                    params     = "SELE_GUBN#" + this.popINSERT.Radio01.value;
                    
                    dataref[0]              = new Object();
                    dataref[0].type         = "TRAN";
                    dataref[0].svcUrl       = "/core/erp/pay/PAYF0030_PRINT00.do";
                    dataref[0].inDataset    = ""
                    dataref[0].outDataset   = "dsPY_RTPWXM_PRINT=dsPY_RTPWXM_PRINT";
                    dataref[0].arg          = this.fn_CreateArgument("PRINT00");
                    
                }
                
            }
           
            this.fn_UbiReport(reportfile, params, dataref, "");
            
        }

        

        /*----------------------+
         |  결재상신 버튼 클릭 시 |
         +----------------------*/
        this.btnSendGW_onclick = function(obj,e) {
            
            if (this.dsHR_MASTXM.rowcount < 1) return;
            if (this.dsPY_RTPAYX.rowcount < 1) return;
            
            if (this.fnc_DatasetChangeCheck("dsPY_RTPCXM,dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM,dsPY_RTPWXM")) {
                return this.fnc_Message("TMM015", "결재상신");
            }
            
            if (!this.fnc_Message("TMM061", "전자결재 상신")) return false;
            
            this.sAPPR_GUBN = "createDoc";
            
            this.dsHR_MASTXM.set_updatecontrol(false);
            this.dsHR_MASTXM.set_enableevent(false);
            this.dsHR_MASTXM.setColumn(this.dsHR_MASTXM.rowposition, "DOCU_IDXX", this.sDOCU_IDXX);
            this.dsHR_MASTXM.setRowType(this.dsHR_MASTXM.rowposition, Dataset.ROWTYPE_UPDATE);
            this.dsHR_MASTXM.set_enableevent(true);
            this.dsHR_MASTXM.set_updatecontrol(true);
            
            this.sKeyValue[0] = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition,"EMPL_NUMB");
            
            //전자결재 연동자료 저장
            var sMethodName = "SAVE99";
            var sInDataSet  = "dsHR_MASTXM=dsHR_MASTXM:U";
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
        }

        /*--------------------------------------+
         |  결재취소 버튼 클릭 시
         +---------------------------------------*/
        this.btnCancGW_onclick = function(obj,e) {
            
            if (this.dsHR_MASTXM.rowcount < 1) return;
            
            if (this.fnc_DatasetChangeCheck("dsPY_RTPCXM,dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM,dsPY_RTPWXM")) {
                return this.fnc_Message("TMM015", "상신취소");
            }
            
            if (!this.fnc_Message("TMM061", "전자결재 상신취소")) return false;
            
            this.sAPPR_GUBN = "deleteDoc";
            this.fn_GwApprProcess(this.sAPPR_GUBN);
            
        }

        /*--------------------------------------+
         |  문서보기 클릭 시
         +---------------------------------------*/
        this.btnSearchDoc_onclick = function(obj,e) {
            
            if (this.dsHR_MASTXM.rowcount < 1) return;
            
            this.sAPPR_GUBN = "show";
            var bPerm = (this.sUSERLAVEL == "5") ? false : true;
            this.fnc_ShowApproval(this.sAPPR_GUBN, this.sDOCU_IDXX + "-" + this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "APPR_SEQN"), "", bPerm);
            
        }

        /*--------------------------------------+
         |  전자결재상신/취소
         +---------------------------------------*/
        this.fn_GwApprProcess = function(sApprGubn) {
            
            if (!this.fn_GwApprCheck(sApprGubn)) return;
            
            var sMethodName = "sendApproval";
            var sInDataSet  = "dsTM_APPROVAL=dsTM_APPROVAL:U"
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
        }

        /*---------------------------+
         |  전자결재상신/취소 체크!  |
         +---------------------------*/
        this.fn_GwApprCheck = function (sApprGubn) {

            if (this.dsHR_MASTXM.rowcount < 1) return this.fnc_Message("TMM011");
            if (this.dsHR_MASTXM.rowposition < 0) return false;
            
            if (this.fnc_DatasetChangeCheck("dsPY_RTPCXM,dsPY_RTPAYX,dsPY_RTBONU,dsPY_RTPPXM,dsPY_RTPWXM")) {
                return this.fnc_Message("TMM015", "결재상신");
            }
            
            var sAppr_Docn  = this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "APPR_SEQN");
            var sApprDocId1 = this.fnc_SubStr(sAppr_Docn, 0, 7);
            var sApprDocId2 = this.fnc_SubStr(sAppr_Docn, 7);
            var sSubject    = "퇴직금지급결의서";
            var sApprDocId  = this.sDOCU_IDXX + "-" + sAppr_Docn; //DOCU_IDXX - APPR_DOCN
            
            if (this.fnc_Length(this.fnc_Trim(sAppr_Docn)) < 1) {
                return this.fnc_Message("TMM300", "전자결재문서번호가 없습니다.");
            }
            
            var sXmlStr = this.fn_MakeHtml();   //전자결재용 HTML 생성
            
            this.fnc_DatasetClear("dsTM_APPROVAL");
            
            var nRow = this.dsTM_APPROVAL.addRow();
            
            this.dsTM_APPROVAL.setColumn(nRow, "documentID"     , sApprDocId);      		/* 문서번호 */
            this.dsTM_APPROVAL.setColumn(nRow, "documentType"   , this.sDOCU_IDXX); 		/* 문서종류 */
            this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument"   , sXmlStr);         		/* 결재문서에 그릴HTML */
            this.dsTM_APPROVAL.setColumn(nRow, "subject"        , sSubject);        		/* 결재문서 제목 */
            this.dsTM_APPROVAL.setColumn(nRow, "recipient"      , application.GBL_EMPLNO); 	/* 기안자사번 */
            this.dsTM_APPROVAL.setColumn(nRow, "creator"        , application.GBL_USERNM); 	/* 기안자성명 */
            this.dsTM_APPROVAL.setColumn(nRow, "documentStatus" , sApprGubn);       		/* 결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc */
            this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile"     , "F");             		/* 첨부파일여부 */
            
            return true;
            
        }

        /*--------------------------------------+
         |  전자결재용 HTML 생성
         +---------------------------------------*/
        this.fn_MakeHtml = function () {
            this.fnc_DatasetClear("dsPY_RTPCXM_PRINT,dsPY_RTPAYX_PRINT,dsPY_RTBONU_PRINT");
            var sMethodName  = "PRINT01";
            var sInDataSet   = "";
            var sOutDataSet  = "dsPY_RTPCXM_PRINT=dsPY_RTPCXM_PRINT dsPY_RTPAYX_PRINT=dsPY_RTPAYX_PRINT "
                sOutDataSet += "dsPY_RTBONU_PRINT=dsPY_RTBONU_PRINT dsPY_RTPPXM_RPT=dsPY_RTPPXM_RPT"
            var sArgument    = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
            var sXmlStr = "";

            /* 개발 시 DOCU_IDXX 과 APPR_SEQN 조합 -> 예제(KHR111-2016092700001) */ 
            var sApprDocId1 = this.fnc_SubStr(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "APPR_SEQN"),0, 7)
            var sApprDocId2 = this.fnc_SubStr(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "APPR_SEQN"),7)
            var sApprDocId  = this.sDOCU_IDXX + "-" +sApprDocId1 + sApprDocId2;

            var sSubject    = "퇴직금지급결의서"; 
            var mRow        = this.dsPY_RTPCXM_PRINT.rowposition;
            
            sXmlStr  = "<style>";
            sXmlStr  += "table { border-collapse:collapse; border-width:1px; border-color:black; border-style:solid;}";
            sXmlStr  += "td { height:18px; font-size:12px; border-top: solid 1px; border-left: solid 1px; }";
            sXmlStr  += ".linkTable td {font-size: 12px;}";
            sXmlStr  += ".label1 { background-color:#DBDBDB; font-weight:bold; text-align:center; padding-right:5px; font-size:12px; height:18px;}";
            sXmlStr  += ".label2 { background-color:#FFFFFF; text-align:left; padding-left:10px; font-size:12px; height:18px;}";
            sXmlStr  += ".label3 { background-color:#FFFFFF; text-align:right; padding-right: 20px; font-size:12px; height:18px;}";
            sXmlStr  += ".label4 { background-color:#DBDBDB; font-weight:bold; text-align:center; padding-right:5px; font-size:12px; border-top-style:hidden; height:18px;}";
            sXmlStr  += ".label5 { background-color:#FFFFFF; text-align:center; font-size:12px; height:18px;}";
            sXmlStr  += ".label6 { text-align:right; font-size:12px; font-weight:bold; padding-right: 20px; padding-top: 3px; height:18px;}";
            sXmlStr  += ".label7 { text-align:left; font-size:12px; padding-left:30px; padding-top: 3px; padding-bottom: 3px; height:18px;}";
            sXmlStr  += ".table2 { background-color:#FAFAFA; text-align:center; font-size:12px; margin-left:30px; width:640px;}";
            sXmlStr  += "td.labe25 { background-color:#FFFFFF; border-left: none;}";
            sXmlStr  += "td.left{ border-left: none; text-align: right; padding-right:40px; }";
            sXmlStr  += "</style>";
            sXmlStr  += "<table width='100%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='30%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='30%'>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>근무부서</td>";
            sXmlStr  += "        <td class='label2'>" + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "DEPT_CODE") + "   " + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "DEPT_NAME") + "</td>";
            sXmlStr  += "        <td class='label1'>직위</td>";
            sXmlStr  += "        <td class='label2'>" + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "OPOS_NAME") + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>성명</td>";
            sXmlStr  += "        <td class='label2'>" + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "EMPL_NUMB") + "  " + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "EMPL_NAME") + "</td>";
            sXmlStr  += "        <td class='label1'>주민등록번호</td>";
            
            var sRERN_NUMB  = this.fnc_SubStr(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "RERN_NUMB"), 0, 6)+"-";
                sRERN_NUMB += this.fnc_SubStr(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "RERN_NUMB"), 6);
            
            sXmlStr  += "        <td class='label2'>" + sRERN_NUMB + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>현주소</td>";
            sXmlStr  += "        <td class='label2' colspan='3'>" + "( " + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "POST_NUMB") + " ) " + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "DTL1_ADDR") + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>근무기간</td>";
            sXmlStr  += "        <td class='label2'>" + this.fnc_GetMaskFormat(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "ENCO_DATE"), '@@@@/@@/@@') + " ~ " + this.fnc_GetMaskFormat(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "FINL_ENDT"), '@@@@/@@/@@') + "</td>";
            sXmlStr  += "        <td class='label1'>근속기간</td>";
            sXmlStr  += "        <td class='label2'>" + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "TOTL_DATE") + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>퇴직기준근무기간</td>";
            sXmlStr  += "        <td class='label2'>" + this.fnc_GetMaskFormat(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "FINL_STDT"), '@@@@/@@/@@') + " ~ " + this.fnc_GetMaskFormat(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "FINL_ENDT"), '@@@@/@@/@@') + "</td>";
            sXmlStr  += "        <td class='label1'>퇴직기준근속기간</td>";
            sXmlStr  += "        <td class='label2'>" + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "REYS_YCNT") + "년 " + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "REYS_MCNT") + "개월 " + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "REYS_DCNT") + "일" + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";
            sXmlStr  += "<br/>";
            sXmlStr  += "<p>□ 평균임금 정산내역</p>";
            for ( var i=0; i<this.dsPY_RTPAYX_PRINT.getRowCount(); i++ ) {
                sXmlStr  += "<p class='label7'>- " + this.dsPY_RTPAYX_PRINT.getColumn(i, "EXPD_NAME") + "</p>";
                sXmlStr  += "<table class='table2'>";
                sXmlStr  += "    <tr>";
                sXmlStr  += "        <td colspan='2' class='label1' width='70%'>기간</td>";
                sXmlStr  += "        <td class='label1' >금액</td>";
                sXmlStr  += "    </tr>";
                sXmlStr  += "    <tr>";
                sXmlStr  += "        <td class='label5'>" + this.fnc_GetMaskFormat(this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL1_BEDE"), '@@@@/@@/@@') + " 부터   " + this.fnc_GetMaskFormat(this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL1_ENDD"), '@@@@/@@/@@') + ' 까지      ' + "</td>";
                sXmlStr  += "        <td class='labe25 left'>" + this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL1_DCNT") + " 일" + "</td>";
                sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPAYX_PRINT.getColumn(i, "PAY1_AMOT")) + " 원" + "</td>";
                sXmlStr  += "    </tr>";
                sXmlStr  += "    <tr>";
                sXmlStr  += "        <td class='label5'>" + this.fnc_GetMaskFormat(this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL2_BEDE"), '@@@@/@@/@@') + " 부터   " + this.fnc_GetMaskFormat(this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL2_ENDD"), '@@@@/@@/@@') + ' 까지      ' + "</td>";
                sXmlStr  += "        <td class='labe25 left'>" + this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL2_DCNT") + " 일" + "</td>";
                sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPAYX_PRINT.getColumn(i, "PAY2_AMOT")) + " 원" + "</td>";
                sXmlStr  += "    </tr>";
                sXmlStr  += "    <tr>";
                sXmlStr  += "        <td class='label5'>" + this.fnc_GetMaskFormat(this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL3_BEDE"), '@@@@/@@/@@') + " 부터   " + this.fnc_GetMaskFormat(this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL3_ENDD"), '@@@@/@@/@@') + ' 까지      ' + "</td>";
                sXmlStr  += "        <td class='labe25 left'>" + this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL3_DCNT") + " 일" + "</td>";
                sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPAYX_PRINT.getColumn(i, "PAY3_AMOT")) + " 원" + "</td>";
                sXmlStr  += "    </tr>";
                
                if ( this.dsPY_RTPAYX_PRINT.getColumn(i, "PAY4_AMOT") != "0" ) {
                    sXmlStr  += "    <tr>";
                    sXmlStr  += "        <td class='label5'>" + this.fnc_GetMaskFormat(this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL4_BEDE"), '@@@@/@@/@@') + " 부터   " + this.fnc_GetMaskFormat(this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL4_ENDD"), '@@@@/@@/@@') + ' 까지      ' + "</td>";
                    sXmlStr  += "        <td class='labe25 left'>" + this.dsPY_RTPAYX_PRINT.getColumn(i, "CAL4_DCNT") + " 일" + "</td>";
                    sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPAYX_PRINT.getColumn(i, "PAY4_AMOT")) + " 원" + "</td>";
                    sXmlStr  += "    </tr>";
                }
                sXmlStr  += "    <tr>";
                sXmlStr  += "        <td class='label3 left' colspan='2' style='background-color:#DBDBDB;'>"+ "총일수 " + this.dsPY_RTPAYX_PRINT.getColumn(i, "DCNT_SUM") + " 일" +"</td>";
                sXmlStr  += "        <td class='label3' style='background-color:#DBDBDB;'>"+ this.fnc_AddComma(this.dsPY_RTPAYX_PRINT.getColumn(i, "APAY_AMOT")) + " 원" +"</td>";
                sXmlStr  += "    </tr>";
                sXmlStr  += "</table>";
            }
            sXmlStr  += "    <br/>";
            sXmlStr  += "<p class='label7'>- 상여내역</p>";
            sXmlStr  += "<table class='table2'>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>지급월</td>";
            sXmlStr  += "        <td class='label1'>금 액</td>";
            sXmlStr  += "        <td class='label1'>지급월</td>";
            sXmlStr  += "        <td class='label1'>금 액</td>";
            sXmlStr  += "    </tr>";
            
            var sPAYX_AMOT = 0;
            var sPY_RTBONUCNT = this.dsPY_RTBONU_PRINT.getRowCount();
            for(var i = 0; i < this.dsPY_RTBONU_PRINT.getRowCount(); i++){
                if ((i+1) % 2 != 0){
                    sXmlStr  += "    <tr>";
                    sXmlStr  += "        <td class='label5'>" + this.fnc_GetMaskFormat(this.dsPY_RTBONU_PRINT.getColumn(i, "PAYX_DATE"), '@@@@/@@') + "</td>";
                    sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTBONU_PRINT.getColumn(i, "PAYX_AMOT")) + " 원" + "</td>";
                } else {
                    sXmlStr  += "        <td class='label5'>" + this.fnc_GetMaskFormat(this.dsPY_RTBONU_PRINT.getColumn(i, "PAYX_DATE"), '@@@@/@@') + "</td>";
                    sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTBONU_PRINT.getColumn(i, "PAYX_AMOT")) + " 원" + "</td>";
                    sXmlStr  += "    </tr>";
                }
                sPAYX_AMOT += this.dsPY_RTBONU_PRINT.getColumn(i, "PAYX_AMOT");
            }
            
            if ( sPY_RTBONUCNT % 2 != 0 ){
                sXmlStr  += "        <td class='label2'>" + "" + "</td>";
                sXmlStr  += "        <td class='label3'>" + "" + "</td>";
                sXmlStr  += "    </tr>";
            }
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td colspan='3' class='label1'>" + "평균급여" + "</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(Math.round(sPAYX_AMOT/12)) + " 원" + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "</table>"; 
            sXmlStr  += "    <br/>";
            sXmlStr  += "<p class='label7'>- 연차수당, 평균임금</p>";
            sXmlStr  += "<table class='table2'>";   
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>지급연차수당</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "PAYX_AMOT")) + " 원" + "</td>";
            sXmlStr  += "        <td class='label1'>평균연차수당</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "AVER_PAYX")) + " 원" + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label3' colspan='2' style='border-bottom-style:hidden; border-left-style:hidden;'></td>";
            sXmlStr  += "        <td class='label1'>평균임금</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "AVER_WAGE")) + " 원" + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "</table>"; 
            sXmlStr  += "<br/>";
            sXmlStr  += "<table width='100%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='30%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='30%'>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>법정퇴직금</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "RETI_WAGE")) + " 원" + "</td>";
            sXmlStr  += "        <td class='label1'>누진개월수</td>";
            sXmlStr  += "        <td class='label3'>" + this.dsPY_RTPCXM_PRINT.getColumn(mRow, "NUJI_MONT") + " 개월" + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>급여성퇴직금</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "RTBN_AMOT")) + " 원" + "</td>";
            sXmlStr  += "        <td class='label1'>퇴직급여</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "FINL_APAY")) + " 원" + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>퇴직위로금</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "VORN_ALLO")) + " 원" + "</td>";
            sXmlStr  += "        <td class='label1'>퇴직소득수입금액</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "FINL_RPAY")) + " 원" + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";
            sXmlStr  += "<table width='100%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label4' rowspan='2'>공제사항</td>";
            sXmlStr  += "        <td class='label4'>소득세</td>";
            sXmlStr  += "        <td class='label4'>지방소득세</td>";
            sXmlStr  += "        <td class='label4'>국민연금퇴직전환금</td>";
            sXmlStr  += "        <td class='label4'>공제계</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "RETI_INTX")) + " 원" + "</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "RETI_IHTX")) + " 원" + "</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "NPPC_ATDD")) + " 원" + "</td>";
        var srRETI_SUMM = nexacro.toNumber(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "RETI_INTX"))
                        + nexacro.toNumber(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "RETI_IHTX"))
                        + nexacro.toNumber(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "NPPC_ATDD"));
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(srRETI_SUMM) + " 원" + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1'>차인지급액</td>";
            sXmlStr  += "        <td class='label3' colspan='2'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "RLPY_RTBN")) + " 원" + "</td>";
            sXmlStr  += "        <td class='label1'>과세이연금액</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "TAPD_AMOT")) + " 원" + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";
            sXmlStr  += "<br/>";
            sXmlStr  += "<table width='100%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <col width='20%'>";
            sXmlStr  += "    <tr>";
            sXmlStr  += "        <td class='label1' rowspan='2'>지급구분</td>";
            sXmlStr  += "        <td class='label1'>농심기획(주)</td>";
            sXmlStr  += "        <td class='label1'>연금사업자</td>";
            sXmlStr  += "        <td class='label1'></td>";
            sXmlStr  += "        <td class='label1'></td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "    <tr>";
            var sRLPY_RTBN = nexacro.toNumber(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "RLPY_RTBN"))
                           - nexacro.toNumber(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "TAPD_AMOT"));

            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(sRLPY_RTBN) + " 원" + "</td>";
            sXmlStr  += "        <td class='label3'>" + this.fnc_AddComma(this.dsPY_RTPCXM_PRINT.getColumn(mRow, "TAPD_AMOT")) + " 원" + "</td>";
            sXmlStr  += "        <td class='label3'>" + "" + "</td>";
            sXmlStr  += "        <td class='label3'>" + "" + "</td>";
            sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";
            sXmlStr  += "<p class='label6'>" + "상기와 같이 퇴직금을 청구하오니 지급하여 주시기 바랍니다." + "</p>";
            
            var sYear   = this.fnc_SubStr(this.sSERVERTIME, 0, 4)+"년 ";
            var sMonth  = this.fnc_SubStr(this.sSERVERTIME, 4, 2)+"월 ";
            var sDay    = this.fnc_SubStr(this.sSERVERTIME, 6, 2)+"일";
            
            sXmlStr  += "<p class='label6'>" + sYear + sMonth + sDay +  "</p>";
            
            return sXmlStr;
        }

        this.grdHR_MASTXM_onheadclick = function(obj,e) {
            var sCol = "CHK";
            if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);

        }

        this.dsHR_MASTXM_oncolumnchanged = function(obj,e) {
            if ( e.columnid == "EMPL_NAME" ) this.fn_HelpDialoge(this.grdHR_MASTXM, "YES" ,e.oldvalue, e.columnid);
            
        }

        this.dsPY_RTPPXM_oncolumnchanged = function(obj,e){
        	if ( e.columnid == "TAPF_NAME" ) this.fn_HelpDialoge(this.Tab.tab1.SubTab.tab3.grdPY_RTPPXM, "YES" ,e.oldvalue, e.columnid);
        	
        }

        this.cmbSHRRETR_SEDN_onitemchanged = function(obj,e) {
            if ( e.postvalue == 1 ) {
                this.div_ButtonList.btnInput.set_enable(false);
            } else if( e.postvalue == 3 ) {
                this.div_ButtonList.btnInput.set_enable(true);
            }
            
            this.fn_Search();
        }

        this.Tab_onchanged = function(obj,e){
        	this.fnc_GridSetting(obj.components[e.postindex]);
        }

        this.Tab_tab1_SubTab_onchanged = function(obj,e){
        	this.fnc_GridSetting(obj.components[e.postindex]);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_MASTXM.addEventHandler("onrowposchanged", this.dsHR_MASTXM_onrowposchanged, this);
            this.dsHR_MASTXM.addEventHandler("oncolumnchanged", this.dsHR_MASTXM_oncolumnchanged, this);
            this.dsPY_RTPCXM.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsPY_RTPAYX.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsPY_RTBONU.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsPY_RTPPXM.addEventHandler("oncolumnchanged", this.dsPY_RTPPXM_oncolumnchanged, this);
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdHR_MASTXM.addEventHandler("onheadclick", this.grdHR_MASTXM_onheadclick, this);
            this.grdHR_MASTXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.calSHRRETR_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRRETR_ENDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRRETR_SEDN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRETR_SEDN.addEventHandler("onitemchanged", this.cmbSHRRETR_SEDN_onitemchanged, this);
            this.cmbSHRRERE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRENFC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.addEventHandler("onchanged", this.Tab_onchanged, this);
            this.Tab.tab1.cmbRECE_SEQN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.cmbRECE_SEQN.addEventHandler("onitemchanged", this.cmbRECE_SEQN_onchange, this);
            this.Tab.tab1.cmbRERE_CODE.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.Tab.tab1.cmbRERE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.edtREMK_100X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.btnPY_RTBONUAdd.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.Tab.tab1.btnPY_RTBONUDel.addEventHandler("onclick", this.btnDel_onclick, this);
            this.Tab.tab1.btnPY_RTPAYXAdd.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.Tab.tab1.btnPY_RTPAYXDel.addEventHandler("onclick", this.btnDel_onclick, this);
            this.Tab.tab1.grdPY_RTPAYX.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab.tab1.grdPY_RTBONU.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab.tab1.mskRETI_STRD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.mskRETI_IHTX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.mskRLPY_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.addEventHandler("onchanged", this.Tab_tab1_SubTab_onchanged, this);
            this.Tab.tab1.SubTab.tab1.spSearchBox03.addEventHandler("onclick", this.Tab_tab1_SubTab_tab1_spSearchBox03_onclick, this);
            this.Tab.tab1.SubTab.tab1.mskAVBN_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskAVER_WAGE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.edtCWRK_YMCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskVORN_ALLO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskPYET_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskPENS_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskOTDE_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.calBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.edtDPST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.edtDPST_NAME.addEventHandler("oneditclick", this.Tab_tab1_SubTab_tab1_edtDPST_NAME_oneditclick, this);
            this.Tab.tab1.SubTab.tab1.stFINL_ENDT2.addEventHandler("onclick", this.Tab_tab1_SubTab_tab1_stFINL_ENDT2_onclick, this);
            this.Tab.tab1.SubTab.tab1.calFINL_ISDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.calFINL_STDT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskFIBF_EXMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskFIAF_EXMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskFIBF_ADMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskFIAF_ADMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskFINL_RPAY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskFINT_RPAY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskFINL_PPTX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskRTBM_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.edtACNT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskTRRT_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskRETI_WAGE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskAVPY_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskRTBN_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab1.mskPRTN_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.mskPBUS_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.calMIDL_ISDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.calMIDL_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.calMIDL_PYDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.calMIDL_ENDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.mskMIBF_EXMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.mskMIAF_EXMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.mskMIBF_ADMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.mskMIAF_ADMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.edtPFIR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.mskMINT_RPAY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.mskMIDL_PPTX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab2.mskMIDL_RPAY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.SubTab.tab3.btnPY_RTPPXMAdd.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.Tab.tab1.SubTab.tab3.btnPY_RTPPXMDel.addEventHandler("onclick", this.btnDel_onclick, this);
            this.Tab.tab1.SubTab.tab3.grdPY_RTPPXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.Tab.tab1.calFINL_ENDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.calFINL_PYDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.calPMST_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.calFINL_STDT.addEventHandler("onsetfocus", this.Tab_tab1_calFINL_STDT_onsetfocus, this);
            this.Tab.tab1.btnGET_PAYX.addEventHandler("onclick", this.btnGET_PAYX, this);
            this.Tab.tab1.cmbTAXX_GUBN.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.Tab.tab1.cmbTAXX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.mskRETI_INTX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab.tab1.btnPopup.addEventHandler("onclick", this.Tab_tab1_btnPopup_onclick, this);
            this.btnProcClose.addEventHandler("onclick", this.btnProcClose_onclick, this);
            this.popINSERT.cmbPRIT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT.cmbPRIT_GUBN.addEventHandler("onitemchanged", this.popINSERT_cmbPRIT_GUBN_onitemchanged, this);
            this.popINSERT.btnPrint.addEventHandler("onclick", this.fn_Print2, this);
            this.popINSERT.btnClose.addEventHandler("onclick", this.popINSERT_btnClose_onclick, this);
            this.btnCancGW.addEventHandler("onclick", this.btnCancGW_onclick, this);
            this.btnSearchDoc.addEventHandler("onclick", this.btnSearchDoc_onclick, this);
            this.btnSendGW.addEventHandler("onclick", this.btnSendGW_onclick, this);

        };

        this.loadIncludeScript("PAYF0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
