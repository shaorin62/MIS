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
                this.set_name("FAMB0030");
                this.set_titletext("회계전표등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEDFLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"REMK\">회계단위</Col><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">APPS_CODE</Col><Col id=\"DSNAME\">dsAPPS_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">결재상태</Col></Row><Row><Col id=\"REMK\">전표종류</Col><Col id=\"DSNAME\">dsSLIP_GUBN</Col><Col id=\"CODEID\">SLIP_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"REMK\">예산구분</Col><Col id=\"CODEID\">BUDG_GUBN</Col><Col id=\"DSNAME\">dsBUDG_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"REMK\">화폐</Col><Col id=\"CODEID\">CURR_GUBN</Col><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"REMK\">증빙서류</Col><Col id=\"DSNAME\">dsEVID_DOCU</Col><Col id=\"CODEID\">EVID_DOCU</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"REMK\">입출구분</Col><Col id=\"DSNAME\">dsBANK_INOU</Col><Col id=\"CODEID\">BANK_INOU</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"REMK\">매입매출</Col><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"DSNAME\">dsVATX_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"REMK\">부가세종류</Col><Col id=\"CODEID\">VATX_TYPE</Col><Col id=\"DSNAME\">dsVATX_TYPE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"REMK\">부가세유형</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"CODEID\">PURC_GUBN</Col><Col id=\"DSNAME\">dsPURC_GUBN</Col></Row><Row><Col id=\"REMK\">불공제세부</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"CODEID\">BULG_GUBN</Col><Col id=\"DSNAME\">dsBULG_GUBN</Col></Row><Row><Col id=\"REMK\">입력구분</Col><Col id=\"DSNAME\">dsINPT_GUBN</Col><Col id=\"CODEID\">INPT_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">DRCR_YSNO</Col><Col id=\"DSNAME\">dsDRCR_YSNO</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">필수구분</Col></Row><Row><Col id=\"REMK\">전자발행여부</Col><Col id=\"DSNAME\">dsEBIL_GUBN</Col><Col id=\"CODEID\">EBIL_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">LEDG_GUBN</Col><Col id=\"DSNAME\">dsLEDG_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMK\">출납방법</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CRUD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCH_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FORI_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OSLI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSLI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OSLI_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"OSLI_DISP\" type=\"STRING\" size=\"256\"/><Column id=\"UNMC_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"PROJ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BGRQ_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_YYMM\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BDSP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAM2\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAM3\" type=\"STRING\" size=\"256\"/><Column id=\"EVID_DOCU\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEDG_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_INOU\" type=\"STRING\" size=\"256\"/><Column id=\"PRIN_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_KEY1\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_KEY2\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SLCT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CRUD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"REQU_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TITL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SLAP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_EMNM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DOCN\" type=\"STRING\" size=\"256\"/><Column id=\"APPS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"APCP_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DTCD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"RECE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECE_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"RECE_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"EVID_ACPT\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_REMK\" type=\"STRING\" size=\"256\"/><Column id=\"SOUS_LNKY\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"GWAP_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPRF", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VACD\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VANM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_KIND\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"INPT_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_IDXX\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"HELP_TEXT\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"COMM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"MUST_YSNO\" type=\"STRING\" size=\"2\"/><Column id=\"USEX_YSNO\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"UNUS_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VATXXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CRUD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VATX_SEQN\" size=\"9\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_DOCU\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_INPU\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_TYPE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BULG_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PURC_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EBIL_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"16\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VATX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUMX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_CHNG\" size=\"8\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSLIP_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"PARAM\">전표종류</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0003</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ACCTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_BFNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UPPR_ACCT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_LEVL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BUDG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CONT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GUNB_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHUL_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHUN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CSUS_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZERO_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FNCR_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FUND_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INOU_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SPSA_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OVER_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COST_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BEFO_ACCT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ACCTXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VACD\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"UNUS_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"COND_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"COMB_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"COND_COLM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"HELP_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"MUST_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPRF2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VACD\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VANM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_KIND\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"INPT_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_IDXX\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"HELP_TEXT\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"COMM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"MUST_YSNO\" type=\"STRING\" size=\"2\"/><Column id=\"USEX_YSNO\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"UNUS_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_EXRTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_DATE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CURR_GUBN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"STND_RATE\" type=\"bigdecimal\" size=\"255\" prop=\"\"/><Column id=\"USDS_RATE\" type=\"bigdecimal\" size=\"255\" prop=\"\"/><Column id=\"NOTI_RATE\" type=\"bigdecimal\" size=\"255\" prop=\"\"/><Column id=\"VALU_RATE\" type=\"bigdecimal\" size=\"255\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBUDG_AMNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BUDG_AMNT\" type=\"bigdecimal\" size=\"255\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMAGA_YSNO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MAGA_DATE\" type=\"STRING\" size=\"255\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ACCT_GBNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DEPT_CODE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SLIP_NUMB\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SLIP_DATE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ACCT_DATE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"EMPL_NUMB\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"EMPL_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"TITL_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"APPR_EMPL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"APPR_EMNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SLIP_AMNT\" type=\"bigdecimal\" size=\"255\" prop=\"\"/><Column id=\"HANG_AMNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTLD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_BFNMD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_UPNMD\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAMED\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNTD\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"CSTC_CODED\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_NAMED\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_CODED\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_NAMED\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD1\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD1\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND1\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD2\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD2\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND2\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD3\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD3\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND3\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD4\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD4\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND4\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD5\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD5\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND5\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMD6\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMD6\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBND6\" type=\"STRING\" size=\"256\"/><Column id=\"OSLI_NUMBD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTLC\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_BFNMC\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_UPNMC\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAMEC\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNTC\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"CSTC_CODEC\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_NAMEC\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_CODEC\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_NAMEC\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC1\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC1\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC1\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC2\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC2\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC2\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC3\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC3\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC3\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC4\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC4\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC4\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC5\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC5\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC5\" type=\"STRING\" size=\"256\"/><Column id=\"COND_CDNMC6\" type=\"STRING\" size=\"256\"/><Column id=\"COND_VANMC6\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_GUBNC6\" type=\"STRING\" size=\"256\"/><Column id=\"OSLI_NUMBC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape02", "absolute", "8", null, null, "129", "25", "214", this);
            obj.set_taborder("91");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "28", null, "78", "21", null, "244", this);
            obj.set_text("적요");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("54");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Label_P.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("staOSLI_DISP", "absolute", "607", null, "71", "21", null, "244", this);
            obj.set_text("발생번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_NAME", "absolute", "109", null, "469", "21", null, "244", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkPAYX_YSNO", "absolute", "109", null, "15", "23", null, "219", this);
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_falsevalue("0");
            obj.set_taborder("24");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("chk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "28", null, "70", "21", null, "220", this);
            obj.set_text("출납처리");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBANK_INOU", "absolute", "1014", null, "137", "21", null, "220", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_imemode("none");
            obj.set_taborder("50");
            obj.set_visible("false");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new Static("staBANK_INOU", "absolute", "946", null, "71", "21", null, "220", this);
            obj.set_text("입출구분");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("78");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbLEDG_GUBN", "absolute", "676", null, "242", "21", null, "220", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_imemode("none");
            obj.set_taborder("26");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #bbbbbbff");
            obj.set_index("-1");

            obj = new Static("staLEDG_GUBN", "absolute", "607", null, "71", "21", null, "220", this);
            obj.set_text("출납방법");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPAYX_DATE", "absolute", "322", null, "100", "21", null, "220", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");

            obj = new Static("staPAYX_DATE", "absolute", "241", null, "78", "21", null, "220", this);
            obj.set_text("출납예정일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Button("btnOSLI_NUMB", "absolute", "920", null, "98", "21", null, "244", this);
            obj.set_taborder("87");
            obj.set_text("발생전표선택");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", "98", null, "81", "25", null, this);
            obj.set_taborder("90");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("88");
            obj.set_text("회계전표등록");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("89");
            obj.set_text("회계관리>전표관리");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", "37", null, "6", "8", null, this);
            obj.getSetter("type").set("rectangle");
            obj.set_cssclass("Rectangle");
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Div("DivExcel", "absolute", "80", "33", "200", "23", null, null, this);
            obj.set_taborder("82");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("staSLIP_DATE", "absolute", "250", "104", "71", "21", null, null, this);
            obj.set_text("전표일자");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("65");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "873", "104", "93", "21", null, null, this);
            obj.set_text("작성부서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("66");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "449", "104", "71", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("67");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", "152", "71", "21", null, null, this);
            obj.set_text("제목");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("68");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "660", "104", "71", "21", null, null, this);
            obj.set_text("작성자");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("69");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "28", "128", "71", "21", null, null, this);
            obj.set_text("전표유형");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTITL_NAME", "absolute", "97", "152", "534", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSLIP_DATE", "absolute", "320", "104", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_tabstop("false");

            obj = new Static("Static1", "absolute", "250", "128", "71", "21", null, null, this);
            obj.set_text("결재상태");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "791", "104", "53", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_taborder("38");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "1034", "104", null, "21", "34", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("39");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "209", null, null, "25", "374", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_taborder("29");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"50\"/><Column size=\"70\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"350\"/><Column size=\"50\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"순번\"/><Cell col=\"1\" displaytype=\"text\" text=\"계정코드\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"3\" displaytype=\"text\" text=\"귀속부서명\"/><Cell col=\"4\" displaytype=\"text\" text=\"차변금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"대변금액\"/><Cell col=\"6\" displaytype=\"text\" text=\"적  요\"/><Cell col=\"7\" text=\"행번호\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"normal\" style=\"align: center;\" text=\"bind:SORT_ORDR\" editautoselect=\"true\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ACCT_INTL\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" expr=\"expr:Eco.decode(DRCR_GUBN, 'D', SLIP_AMNT, 0)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" expr=\"expr:Eco.decode(DRCR_GUBN, 'C', SLIP_AMNT, 0)\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SLIP_LINE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbAPPS_CODE", "absolute", "320", "128", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_enable("true");
            obj.set_taborder("40");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Combo("cmbACCT_UNIT", "absolute", "517", "104", "114", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_taborder("4");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");

            obj = new Edit("edtEMPL_NUMB", "absolute", "730", "104", "59", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_taborder("83");
            obj.set_visible("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "967", "104", "65", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("84");
            obj.set_visible("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "607", null, "71", "21", null, "316", this);
            obj.set_text("계정과목");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_INTL", "absolute", "676", null, "68", "21", null, "316", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_taborder("46");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "946", null, "71", "21", null, "316", this);
            obj.set_text("차대구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "241", null, "71", "21", null, "316", this);
            obj.set_text("귀속부서");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSEX_DEPT", "absolute", "322", null, "77", "21", null, "316", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_taborder("45");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDRCR_GUBN", "absolute", "1014", null, "94", "21", null, "316", this);
            this.addChild(obj.name, obj);
            var rdoDRCR_GUBN_innerdataset = new Dataset("rdoDRCR_GUBN_innerdataset", this.rdoDRCR_GUBN);
            rdoDRCR_GUBN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">차변</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">대변</Col></Row></Rows>");
            obj.set_innerdataset(rdoDRCR_GUBN_innerdataset);
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Readonly");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new Static("Static14", "absolute", null, null, "70", "23", "473", "346", this);
            obj.set_text("차변합계 ");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", null, null, "70", "23", "290", "346", this);
            obj.set_text("대변합계 ");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("60");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCHAX_AMNT", "absolute", null, null, "110", "21", "365", "347", this);
            obj.set_taborder("43");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "100", "185", "343", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("75");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopy", "absolute", "8", "34", "74", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("전표복사");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Module");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "660", "128", "71", "21", null, null, this);
            obj.set_text("회계일자");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("81");
            this.addChild(obj.name, obj);

            obj = new Calendar("calACCT_DATE", "absolute", "730", "128", "114", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_enable("true");
            obj.set_taborder("42");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");

            obj = new Static("Static17", "absolute", null, null, "46", "23", "131", "346", this);
            obj.set_text("차액 ");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("77");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCHAX_DAEX", "absolute", null, null, "110", "21", "25", "347", this);
            obj.set_enable("true");
            obj.set_taborder("44");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AddRow", "absolute", null, "184", "62", "21", "220", null, this);
            obj.set_taborder("7");
            obj.style.set_imagealign("left");
            obj.set_tabstop("true");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DelRow", "absolute", null, "184", "62", "21", "155", null, this);
            obj.set_taborder("32");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "449", "128", "71", "21", null, null, this);
            obj.set_text("승인자");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("73");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPPR_EMNM", "absolute", "578", "128", "53", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("41");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_APPRCANCEL", "absolute", "457", "32", "74", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("승인취소");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Module");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("staACCT_DATE1", "absolute", "286", "31", "69", "23", null, null, this);
            obj.set_text("회계일자");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("79");
            this.addChild(obj.name, obj);

            obj = new Calendar("calACCT_DATE1", "absolute", "357", "32", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_tabstop("false");

            obj = new Static("staBUDG_GUBN00", "absolute", "28", null, "70", "21", null, "316", this);
            obj.set_text("순번");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("64");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSORT_ORDR", "absolute", "109", null, "113", "21", null, "316", this);
            obj.set_taborder("10");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_type("number");
            obj.set_enable("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_InsertRow", "absolute", null, "184", "62", "21", "90", null, this);
            obj.set_taborder("31");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삽입");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_NAME", "absolute", "769", null, "149", "21", null, "316", this);
            obj.set_taborder("13");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("92");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "33", "25", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSLIP_DATE", "absolute", "320", "66", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj.set_autoselect("true");

            obj = new Button("btnSendGW", "absolute", null, "66", "74", "21", "186", null, this);
            obj.set_taborder("36");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchDoc", "absolute", null, "66", "74", "21", "34", null, this);
            obj.set_taborder("35");
            obj.set_text("문서보기");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("true");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint02", "absolute", "636", "66", "74", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("증빙인쇄");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCHG", "absolute", "713", "66", "74", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("변경내역 ");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnBUDG_LIST", "absolute", "844", null, "74", "21", null, "292", this);
            obj.set_taborder("18");
            obj.set_text("잔액조회");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("true");
            obj.set_tabstop("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRSLIP_NUMB", "absolute", "421", "66", "21", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_COD1", "absolute", "401", null, "21", "21", null, "316", this);
            obj.set_taborder("93");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpACCT_INTL", "absolute", "746", null, "21", "21", null, "316", this);
            obj.set_taborder("94");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "28", "66", "70", "21", null, null, this);
            obj.set_taborder("95");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab0", "absolute", "8", null, null, "194", "25", "15", this);
            obj.set_taborder("27");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("TabD1", this.Tab0);
            obj.set_text("관리항목 ");
            obj.set_scrollbars("autoboth");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdTA_SLIPRF", "absolute", "8", "8", null, null, "8", "8", this.Tab0.TabD1);
            obj.set_taborder("0");
            obj.set_binddataset("dsTA_SLIPRF");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"280\"/><Column size=\"79\"/><Column size=\"280\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"관리항목명\"/><Cell col=\"1\" displaytype=\"text\" text=\"입력구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"필수구분\"/><Cell col=\"3\" displaytype=\"text\" text=\"항목값\"/><Cell col=\"4\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"항목명\"/><Cell col=\"5\" text=\"팝업\"/><Cell col=\"6\" displaytype=\"text\" text=\"도움말\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;color:EXPR(DRCR_YSNO == 1 ?'crimson': DRCR_YSNO==2 &amp;&amp; DRCR_GUBN=='D'? 'crimson': DRCR_YSNO==3 &amp;&amp; DRCR_GUBN=='C'? 'crimson': 'black');color2:EXPR(DRCR_YSNO == 1 ?'crimson': DRCR_YSNO==2 &amp;&amp; DRCR_GUBN=='D'? 'crimson': DRCR_YSNO==3 &amp;&amp; DRCR_GUBN=='C'? 'crimson': 'black');\" text=\"bind:COND_NAME\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:INPT_GUBN\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:DRCR_YSNO\"/><Cell col=\"3\" displaytype=\"expr:dataset.getColumn(currow, 'INPT_GUBN') == 'CALE' ? 'text' : (dataset.getColumn(currow, 'INPT_GUBN') == 'CALM' ? 'text' : (dataset.getColumn(currow, 'INPT_GUBN') == 'NUMB' ? 'number' : 'normal'))\" edittype=\"none\" style=\"align:EXPR(dataset.getColumn(currow, 'INPT_GUBN') == 'NUMB' ? 'right' : 'left' );\" text=\"bind:COND_VACD\" mask=\"expr:dataset.getColumn(currow, 'INPT_GUBN') == 'CALE' ? '####-##-##' : (dataset.getColumn(currow, 'INPT_GUBN') == 'CALM' ? '####-##' : (dataset.getColumn(currow, 'INPT_GUBN') == 'NUMB' ? '#,##0.#####' : ''))\"/><Cell col=\"4\" displaytype=\"expr:dataset.getColumn(currow, 'INPT_GUBN') == 'CALE' ? 'date' : (dataset.getColumn(currow, 'INPT_GUBN') == 'CALM' ? 'text' : (dataset.getColumn(currow, 'INPT_GUBN') == 'NUMB' ? 'number' : 'normal'))\" edittype=\"expr:dataset.getColumn(currow, 'INPT_GUBN') == 'CALE' ? 'date' : (dataset.getColumn(currow, 'INPT_GUBN') == 'CALM' ? 'mask' : (dataset.getColumn(currow, 'INPT_GUBN') == 'NUMB' ? 'masknumber' : 'normal'))\" style=\"align:EXPR(dataset.getColumn(currow, 'INPT_GUBN') == 'NUMB' ? 'right' : 'left' );background:#ffff95ff;background2:#ffff95ff;controlalign:left;\" text=\"bind:COND_VANM\" mask=\"expr:dataset.getColumn(currow, 'INPT_GUBN') == 'CALM' ? '####-##' : dataset.getColumn(currow, 'INPT_GUBN') == 'NUMB' ? '#,##0.#####' : ''\" editimemode=\"hangul\" editautoselect=\"true\" editdisplay=\"edit\" expandshow=\"expr:dataset.getColumn(currow, 'INPT_GUBN') == 'HELP' ? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:COMB_IDXX\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;\" text=\"bind:HELP_TEXT\"/></Band></Format></Formats>");
            this.Tab0.TabD1.addChild(obj.name, obj);
            obj = new Tabpage("TabD2", this.Tab0);
            obj.set_text("증빙항목 ");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("spSearchBox03", "absolute", "8", "8", null, "149", "8", null, this.Tab0.TabD2);
            obj.set_taborder("38");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staBULG_GUBN", "absolute", "773", "45", "94", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("18");
            obj.set_text("불공제세부");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staSUPP_AMNT", "absolute", "28", "71", "78", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("19");
            obj.set_text("공급가액");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staVATX_GUBN", "absolute", "28", "45", "78", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("20");
            obj.set_text("매입매출");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staPURC_GUBN", "absolute", "491", "45", "85", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("21");
            obj.set_text("부가세유형");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staTRNS_DATE", "absolute", "28", "19", "78", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("22");
            obj.set_text("발행일자");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.setStyleValue("color", "disabled", "#aaaaaaff");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staVATX_AMNT", "absolute", "255", "71", "86", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("23");
            obj.set_text("세액");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staVATX_TYPE", "absolute", "255", "45", "86", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("24");
            obj.set_text("부가세종류");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Combo("cmbVATX_TYPE", "absolute", "337", "45", "124", "21", null, null, this.Tab0.TabD2);
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj = new MaskEdit("mskVATX_AMNT", "absolute", "337", "71", "124", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("9");
            obj.set_mask("###,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Calendar("calTRNS_DATE", "absolute", "99", "19", "126", "21", null, null, this.Tab0.TabD2);
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.getSetter("binddataset").set("");
            obj = new Combo("cmbVATX_GUBN", "absolute", "99", "45", "103", "21", null, null, this.Tab0.TabD2);
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj = new Combo("cmbPURC_GUBN", "absolute", "573", "45", "171", "21", null, null, this.Tab0.TabD2);
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj = new MaskEdit("mskSUPP_AMNT", "absolute", "99", "71", "126", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("8");
            obj.set_mask("###,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staEBIL_GUBN", "absolute", "773", "71", "94", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("25");
            obj.set_text("전자발행여부");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staSUMX_AMNT", "absolute", "491", "71", "85", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("26");
            obj.set_text("합계");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new MaskEdit("mskSUMX_AMNT", "absolute", "573", "71", "171", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("10");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staITEM_NAME", "absolute", "491", "97", "78", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("27");
            obj.set_text("품목");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Edit("edtITEM_NAME", "absolute", "573", "97", "171", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("14");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staVATX_REMK", "absolute", "773", "97", "85", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("28");
            obj.set_text("적요");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staCARD_NUMB", "absolute", "491", "19", "85", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("30");
            obj.set_text("카드번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staCARD_APPR", "absolute", "773", "19", "94", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("31");
            obj.set_text("카드승인번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new MaskEdit("mskCARD_NUMB", "absolute", "573", "19", "171", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staETIS_YSNO", "absolute", "989", "71", "118", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("32");
            obj.set_text("타사이트발행여부");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("imgHelpVATX_GUBN", "absolute", "204", "45", "21", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("4");
            obj.set_cssclass("sytHelpPopup");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Edit("edtCARD_APPR00", "absolute", "29.95%", "126", null, "21", "59.29%", null, this.Tab0.TabD2);
            obj.set_taborder("34");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("");
            obj.set_visible("false");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Edit("edtCARD_APPR01", "absolute", "41.58%", "126", null, "21", "47.66%", null, this.Tab0.TabD2);
            obj.set_taborder("35");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("");
            obj.set_visible("false");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Edit("edtCARD_APPR02", "absolute", "608", "126", "160", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("36");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("");
            obj.set_visible("false");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("staCUST_CODE", "absolute", "28", "97", "85", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("29");
            obj.set_text("거래처");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Edit("edtCUST_CODE", "absolute", "99", "97", "103", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("17");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("imgHelpCUST_CODE", "absolute", "204", "97", "21", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("33");
            obj.set_cssclass("sytHelpPopup");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Combo("cmbEBIL_GUBN", "absolute", "870", "71", "120", "21", null, null, this.Tab0.TabD2);
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            obj.set_index("-1");
            obj = new Edit("edtCUST_NAME", "absolute", "227", "97", "234", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Combo("cmbBULG_GUBN", "absolute", "870", "45", "256", "21", null, null, this.Tab0.TabD2);
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("msk_WF_Readonly");
            obj.getSetter("binddataset").set("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Edit("edtVATX_REMK", "absolute", "870", "97", "256", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("15");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Edit("edtCARD_APPR", "absolute", "870", "19", "256", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("2");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new CheckBox("chkETIS_YSNO", "absolute", "1111", "71", "21", "21", null, null, this.Tab0.TabD2);
            obj.set_taborder("12");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.getSetter("binddataset").set("");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("Static59", "absolute", "9", "21", "30", "133", null, null, this.Tab0.TabD2);
            obj.set_taborder("37");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.TabD2.addChild(obj.name, obj);

            obj = new Edit("edtAPPR_EMPL", "absolute", "517", "128", "59", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_visible("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_NUMB", "absolute", "97", "104", "123", "21", null, null, this);
            obj.set_taborder("97");
            obj.set_type("string");
            obj.set_mask("##-########-####");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.style.setStyleValue("border", "readonly", "1 solid #bbbbbbff");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRSLIP_NUMB", "absolute", "97", "66", "123", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_autoselect("true");
            obj.set_mask("##-########-####");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "873", "128", "93", "21", null, null, this);
            obj.set_taborder("98");
            obj.set_text("출처연결정보");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSOUS_LNKY", "absolute", "967", "128", null, "21", "34", null, this);
            obj.set_taborder("99");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEVID_DOCU", "absolute", "28", null, "71", "21", null, "268", this);
            obj.set_text("증빙서류");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbEVID_DOCU", "absolute", "109", null, "113", "21", null, "268", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_cssclass("styFormItemText");
            obj.set_index("-1");

            obj = new Combo("cmbCURR_GUBN", "absolute", "322", null, "100", "21", null, "268", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_taborder("20");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new Static("staEXCH_RATE", "absolute", "429", null, "68", "21", null, "268", this);
            obj.set_text("환율");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskEXCH_RATE", "absolute", "498", null, "80", "21", null, "268", this);
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_taborder("21");
            obj.set_mask("###,###.#####");
            obj.style.set_align("right middle");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("staFORI_AMNT", "absolute", "607", null, "71", "21", null, "268", this);
            obj.set_text("통화금액");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_AMNT", "absolute", "1014", null, "137", "21", null, "268", this);
            obj.set_taborder("48");
            obj.set_mask("###,###");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskFORI_AMNT", "absolute", "676", null, "242", "21", null, "268", this);
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_taborder("22");
            obj.set_mask("###,###");
            obj.style.set_align("right middle");
            obj.set_enable("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "946", null, "71", "21", null, "268", this);
            obj.set_text("전표금액");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Static("staCURR_GUBN", "absolute", "241", null, "46", "21", null, "268", this);
            obj.set_text("통화");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Static("staBDSB_CODE", "absolute", "607", null, "71", "21", null, "292", this);
            obj.set_taborder("100");
            obj.set_text("예산과목");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBDSB_CODE", "absolute", "676", null, "68", "21", null, "292", this);
            obj.set_taborder("101");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpBDSB_CODE", "absolute", "746", null, "21", "21", null, "292", this);
            obj.set_taborder("102");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBDSB_NAME", "absolute", "769", null, "73", "21", null, "292", this);
            obj.set_taborder("17");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            this.addChild(obj.name, obj);

            obj = new Static("staCSTC_CODE", "absolute", "28", null, "78", "21", null, "292", this);
            obj.set_taborder("103");
            obj.set_text("코스트센터");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCSTC_CODE", "absolute", "109", null, "90", "21", null, "292", this);
            obj.set_taborder("104");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCSTC_CODE", "absolute", "201", null, "21", "21", null, "292", this);
            obj.set_taborder("105");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCSTC_NAME", "absolute", "224", null, "198", "21", null, "292", this);
            obj.set_taborder("15");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "946", null, "71", "21", null, "292", this);
            obj.set_taborder("106");
            obj.set_text("예산잔액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBUDG_AMNT", "absolute", "1014", null, "137", "21", null, "292", this);
            obj.set_taborder("47");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDAEX_AMNT", "absolute", null, null, "110", "21", "182", "347", this);
            obj.set_taborder("107");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSLIP_GUBN", "absolute", "97", "128", "123", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_index("-1");

            obj = new Static("Static30", "absolute", null, "56", "150", "4", "388", null, this);
            obj.set_taborder("108");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0", "0", "8", null, null, "0", this);
            obj.set_taborder("109");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "20", "29", null, null, this);
            obj.set_taborder("110");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("111");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", null, "23", "200", "10", "25", null, this);
            obj.set_taborder("112");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRSLIP_DATE", "absolute", "250", "66", "70", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("전표일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "485", "179", "80", "30", null, null, this);
            obj.set_taborder("114");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "202", "264", "7", null, null, this);
            obj.set_taborder("115");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "573", "93", "80", "5", null, null, this);
            obj.set_taborder("116");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", null, null, "15", "25", "0", this);
            obj.set_taborder("117");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "8", null, "205", "21", null, "344", this);
            obj.set_taborder("118");
            obj.set_text("분개상세내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "187", "73", "21", null, null, this);
            obj.set_taborder("119");
            obj.set_text("분개목록");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("staBUDG_GUBN", "absolute", "429", null, "68", "21", null, "292", this);
            obj.set_text("예산구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("70");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBUDG_GUBN", "absolute", "498", null, "80", "21", null, "292", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            obj.set_taborder("16");
            obj.set_index("-1");

            obj = new Static("Static64", "absolute", "28", "104", "71", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "10.53%", "99", null, "5", "86.27%", null, this);
            obj.set_taborder("121");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "10.53%", "125", null, "3", "82.22%", null, this);
            obj.set_taborder("122");
            obj.set_text("h3");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "10.53%", "149", null, "3", "82.22%", null, this);
            obj.set_taborder("123");
            obj.set_text("h3");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "10.53%", "173", null, "5", "86.27%", null, this);
            obj.set_taborder("124");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "9", "390", "30", "47", null, null, this);
            obj.set_taborder("125");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", null, null, "102", "3", "960", "313", this);
            obj.set_taborder("126");
            obj.set_text("h3");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "10.53%", null, null, "3", "80.88%", "289", this);
            obj.set_taborder("127");
            obj.set_text("h3");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "10.53%", null, null, "3", "80.88%", "265", this);
            obj.set_taborder("128");
            obj.set_text("h3");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "10.53%", null, null, "3", "80.88%", "241", this);
            obj.set_taborder("129");
            obj.set_text("h3");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "928", "179", "80", "5", null, null, this);
            obj.set_taborder("130");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "887", "344", "80", "5", null, null, this);
            obj.set_taborder("131");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAM1", "absolute", "424", null, "154", "21", null, "316", this);
            obj.set_taborder("12");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.getSetter("binddataset").set("dsTA_SLIPNT");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "10.7%", "503", null, "5", "82.56%", null, this);
            obj.set_taborder("132");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation05", "absolute", "87", "191", "10", "13", null, null, this);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskOSLI_DISP", "absolute", "676", null, "242", "21", null, "244", this);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_mask("##-########-####-####");
            obj.set_type("string");
            obj.style.set_align("center middle");
            obj.style.set_cursor("hand");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popSlip_Copy", "absolute", "8", "731", "238", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "220", "39", null, null, this.popSlip_Copy);
            obj.set_taborder("25");
            obj.set_cssclass("styFormItemBoxOut");
            this.popSlip_Copy.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popSlip_Copy);
            obj.set_taborder("26");
            obj.set_text("전표일자");
            obj.set_cssclass("styFormItemCapBE");
            this.popSlip_Copy.addChild(obj.name, obj);
            obj = new Calendar("calCopy_SLIP_DATE", "absolute", "99", "18", "98", "21", null, null, this.popSlip_Copy);
            this.popSlip_Copy.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Button("btnCopyPROC", "absolute", "78", "56", "74", "24", null, null, this.popSlip_Copy);
            obj.set_taborder("31");
            obj.set_text("복사처리");
            obj.set_cssclass("btn_POP_CRUD");
            this.popSlip_Copy.addChild(obj.name, obj);
            obj = new Button("btn_CopyCancel", "absolute", "155", "56", "74", "24", null, null, this.popSlip_Copy);
            obj.set_taborder("32");
            obj.set_text("복사취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popSlip_Copy.addChild(obj.name, obj);

            obj = new Button("btnCancGW", "absolute", null, "66", "74", "21", "110", null, this);
            obj.set_taborder("37");
            obj.set_text("상신취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CopyRow", "absolute", null, "184", "62", "21", "26", null, this);
            obj.set_taborder("135");
            obj.set_tabstop("false");
            obj.set_text("행복사");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "11.2%", "61", null, "5", "85.59%", null, this);
            obj.set_taborder("136");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "11.88%", "87", null, "5", "84.92%", null, this);
            obj.set_taborder("137");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnBanje", "absolute", "1014", null, "137", "21", null, "244", this);
            obj.set_taborder("86");
            obj.set_text("정산내역조회");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnOSLI_DELE", "absolute", "1020", null, "98", "21", null, "244", this);
            obj.set_taborder("85");
            obj.set_text("발생번호취소");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnAttachDoc", "absolute", null, "66", "98", "21", "262", null, this);
            obj.set_taborder("138");
            obj.set_text("문서파일첨부");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "873", "152", "93", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_text("최종수정정보");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "660", "152", "71", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_text("결재문서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPPR_DOCN", "absolute", "730", "152", "114", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUPDT_INFO", "absolute", "967", "152", null, "21", "34", null, this);
            obj.set_taborder("142");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGWAP_STAT", "absolute", "769", "66", "50", "21", null, null, this);
            obj.set_taborder("143");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "220", "106", "40", "30", null, null, this);
            obj.set_taborder("144");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "420", "106", "40", "30", null, null, this);
            obj.set_taborder("145");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "631", "106", "40", "30", null, null, this);
            obj.set_taborder("146");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "844", "106", "40", "30", null, null, this);
            obj.set_taborder("147");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtURL", "absolute", "91", "45", "1005", "21", null, null, this);
            obj.set_taborder("150");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsTA_SLIPXM");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 200, 23, this.DivExcel,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("82");
            		p.set_scrollbars("none");

            	}
            );
            this.DivExcel.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.TabD1,
            	//-- Layout function
            	function(p) {
            		p.set_text("관리항목 ");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.Tab0.TabD1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1152, 114, this.Tab0.TabD2,
            	//-- Layout function
            	function(p) {
            		p.set_text("증빙항목 ");

            	}
            );
            this.Tab0.TabD2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 238, 90, this.popSlip_Copy,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");
            		p.set_visible("true");

            	}
            );
            this.popSlip_Copy.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("회계전표등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtDEPT_NAM1_value","edtDEPT_NAM1","value","dsTA_SLIPNT","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_cmbVATX_TYPE_value","Tab0.TabD2.cmbVATX_TYPE","value","dsTA_VATXXM","VATX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_cmbBULG_GUBN_value","Tab0.TabD2.cmbBULG_GUBN","value","dsTA_VATXXM","BULG_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_mskVATX_AMNT_value","Tab0.TabD2.mskVATX_AMNT","value","dsTA_VATXXM","VATX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_calTRNS_DATE_value","Tab0.TabD2.calTRNS_DATE","value","dsTA_VATXXM","TRNS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_cmbVATX_GUBN_value","Tab0.TabD2.cmbVATX_GUBN","value","dsTA_VATXXM","VATX_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_cmbPURC_GUBN_value","Tab0.TabD2.cmbPURC_GUBN","value","dsTA_VATXXM","PURC_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_mskSUPP_AMNT_value","Tab0.TabD2.mskSUPP_AMNT","value","dsTA_VATXXM","SUPP_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_edtITEM_NAME_value","Tab0.TabD2.edtITEM_NAME","value","dsTA_VATXXM","ITEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_edtVATX_REMK_value","Tab0.TabD2.edtVATX_REMK","value","dsTA_VATXXM","REMK_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_edtCUST_CODE_value","Tab0.TabD2.edtCUST_CODE","value","dsTA_VATXXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_edtCUST_NAME_value","Tab0.TabD2.edtCUST_NAME","value","dsTA_VATXXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_edtCARD_APPR_value","Tab0.TabD2.edtCARD_APPR","value","dsTA_VATXXM","CARD_APPR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_TabD2_mskCARD_NUMB_value","Tab0.TabD2.mskCARD_NUMB","value","dsTA_VATXXM","CARD_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab0.TabD2.chkETIS_YSNO","value","dsTA_VATXXM","ETIS_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab0.TabD2.mskSUMX_AMNT","value","dsTA_VATXXM","SUMX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab0.tabpage3.cmbVATX_TYPE","value","dsTA_SLIPNT","VATX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab0.tabpage3.cmbBULG_GUBN","value","dsTA_SLIPNT","BULG_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab0.tabpage3.mskVATX_AMNT","value","dsTA_SLIPNT","VATX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Tab0.tabpage3.calTRNS_DATE","value","dsTA_SLIPNT","TRNS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Tab0.tabpage3.cmbVATX_GUBN","value","dsTA_SLIPNT","VATX_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Tab0.tabpage3.cmbPURC_GUBN","value","dsTA_SLIPNT","PURC_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Tab0.tabpage3.mskSUPP_AMNT","value","dsTA_SLIPNT","SUPP_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Tab0.tabpage3.mskSUMX_AMNT","value","dsTA_SLIPNT","SUMX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Tab0.tabpage3.edtITEM_NAME","value","dsTA_SLIPNT","ITEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Tab0.tabpage3.edtVATX_REMK","value","dsTA_SLIPNT","VATX_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Tab0.tabpage3.cmbEBIL_GUBN","value","dsTA_SLIPNT","EBIL_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Tab0.tabpage3.chkEBIL_GUBN","value","dsTA_SLIPNT","EBIL_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Tab0.tabpage3.edtCUST_CODE","value","dsTA_SLIPNT","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Tab0.tabpage3.edtCUST_NAME","value","dsTA_SLIPNT","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Tab0.tabpage3.edtCARD_APPR","value","dsTA_SLIPNT","CARD_APPR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Tab0.tabpage3.mskCARD_NUMB","value","dsTA_SLIPNT","CARD_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Tab0.tabpage3.chkETIS_YSNO","value","dsTA_SLIPNT","ETIS_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Tab0.tabpage3.cmbVATX_CHNG","value","dsTA_SLIPNT","VATX_CHNG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Tab0.tabpage3.cmbVATX_TYPE","value","dsTA_SLIPNT","VATX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Tab0.tabpage3.cmbBULG_GUBN","value","dsTA_SLIPNT","BULG_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Tab0.tabpage3.mskVATX_AMNT","value","dsTA_SLIPNT","VATX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Tab0.tabpage3.calTRNS_DATE","value","dsTA_SLIPNT","TRNS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Tab0.tabpage3.cmbVATX_GUBN","value","dsTA_SLIPNT","VATX_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Tab0.tabpage3.cmbPURC_GUBN","value","dsTA_SLIPNT","PURC_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Tab0.tabpage3.mskSUPP_AMNT","value","dsTA_SLIPNT","SUPP_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Tab0.tabpage3.mskSUMX_AMNT","value","dsTA_SLIPNT","SUMX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","Tab0.tabpage3.edtITEM_NAME","value","dsTA_SLIPNT","ITEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Tab0.tabpage3.edtVATX_REMK","value","dsTA_SLIPNT","VATX_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Tab0.tabpage3.cmbEBIL_GUBN","value","dsTA_SLIPNT","EBIL_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Tab0.tabpage3.chkEBIL_GUBN","value","dsTA_SLIPNT","EBIL_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Tab0.tabpage3.edtCUST_CODE","value","dsTA_SLIPNT","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","Tab0.tabpage3.edtCUST_NAME","value","dsTA_SLIPNT","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Tab0.tabpage3.edtCARD_APPR","value","dsTA_SLIPNT","CARD_APPR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Tab0.tabpage3.mskCARD_NUMB","value","dsTA_SLIPNT","CARD_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","Tab0.tabpage3.chkETIS_YSNO","value","dsTA_SLIPNT","ETIS_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","Tab0.tabpage3.cmbVATX_CHNG","value","dsTA_SLIPNT","VATX_CHNG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_NAME_value","edtACCT_NAME","value","dsTA_SLIPNT","ACCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTITL_NAME_value","edtTITL_NAME","value","dsTA_SLIPXM","TITL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calSLIP_DATE_value","calSLIP_DATE","value","dsTA_SLIPXM","SLIP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NAME_value","edtEMPL_NAME","value","dsTA_SLIPXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_NAME_value","edtDEPT_NAME","value","dsTA_SLIPXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbGW_STATUS_value","cmbAPPS_CODE","value","dsTA_SLIPXM","APPS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbACCT_GUB2_value","cmbBUDG_GUBN","value","dsTA_SLIPNT","BUDG_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbACCT_GUB1_value","cmbACCT_UNIT","value","dsTA_SLIPXM","ACCT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NUMB_value","edtEMPL_NUMB","value","dsTA_SLIPXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_CODE_value","edtDEPT_CODE","value","dsTA_SLIPXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_INTL_value","edtACCT_INTL","value","dsTA_SLIPNT","ACCT_INTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUSEX_DEPT_value","edtUSEX_DEPT","value","dsTA_SLIPNT","USEX_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREMK_NAME_value","edtREMK_NAME","value","dsTA_SLIPNT","REMK_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkPAYX_YSNO_value","chkPAYX_YSNO","value","dsTA_SLIPNT","PAYX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbCURR_GUBN_value","cmbCURR_GUBN","value","dsTA_SLIPNT","CURR_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskEXCH_RATE_value","mskEXCH_RATE","value","dsTA_SLIPNT","EXCH_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdoDRCR_GUBN_value","rdoDRCR_GUBN","value","dsTA_SLIPNT","DRCR_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskFORI_AMNT_value","mskFORI_AMNT","value","dsTA_SLIPNT","FORI_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbBANK_INOU_value","cmbBANK_INOU","value","dsTA_SLIPNT","BANK_INOU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbLEDG_GUBN_value","cmbLEDG_GUBN","value","dsTA_SLIPNT","LEDG_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calPAYX_DATE_value","calPAYX_DATE","value","dsTA_SLIPNT","PAYX_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calACCT_DATE_value","calACCT_DATE","value","dsTA_SLIPXM","ACCT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAPPR_EMNM_value","edtAPPR_EMNM","value","dsTA_SLIPXM","APPR_EMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mskSLIP_AMNT","value","dsTA_SLIPNT","SLIP_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbEVID_DOCU_value","cmbEVID_DOCU","value","dsTA_SLIPNT","EVID_DOCU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","mskSORT_ORDR","value","dsTA_SLIPNT","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","Tab0.TabD2.edtCARD_APPR00","value","dsTA_VATXXM","SLIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","Tab0.TabD2.edtCARD_APPR01","value","dsTA_VATXXM","SLIP_LINE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","Tab0.TabD2.edtCARD_APPR02","value","dsTA_VATXXM","CRUD_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","edtAPPR_EMPL","value","dsTA_SLIPXM","APPR_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","mskSLIP_NUMB","value","dsTA_SLIPNT","SLIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Tab0.TabD2.cmbEBIL_GUBN","value","dsTA_VATXXM","EBIL_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","edtSOUS_LNKY","value","dsTA_SLIPXM","SOUS_LNKY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","edtBDSB_CODE","value","dsTA_SLIPNT","BDSB_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","edtBDSB_NAME","value","dsTA_SLIPNT","BDSB_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","edtCSTC_CODE","value","dsTA_SLIPNT","CSTC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","edtCSTC_NAME","value","dsTA_SLIPNT","CSTC_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","mskBUDG_AMNT","value","dsTA_SLIPNT","BUDG_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","cmbSLIP_GUBN","value","dsTA_SLIPXM","SLIP_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","mskOSLI_DISP","value","dsTA_SLIPNT","OSLI_DISP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","edtAPPR_DOCN","value","dsTA_SLIPXM","APPR_DOCN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","edtUPDT_INFO","value","dsTA_SLIPXM","UPDT_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","edtGWAP_STAT","value","dsTA_SLIPXM","GWAP_STAT");
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
        this.addIncludeScript("FAMB0030.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("FAMB0030.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("FAMB0030.xfdl", function() {
        /***************************************************************************************************
         * # Program:   FAMA0120 재무제표출력설정
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.30     권미영     Initial Created.
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST    = "TTTTTTTT";   //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME   = "FAMB0030";
        this.sACCT_YEAR     = "";           //(X) 회계년도
        this.sSTATUS        = "";           //(X) 신규전표상태
        this.sSHRSLIP_NUMB  = "";           //(X) 전표번호 - 연동시 사용
        this.sTABLE_TYPE    = "D";          //(X) 발생된 전표 테이블 (일반전표시:TA_SLIPXM, 각 업무별테이블)
        this.sTABLE_NAME    = "TA_SLIPXM";  //(X) 발생된 전표 테이블 (일반전표시:TA_SLIPXM, 각 업무별테이블) 
        this.sFORM_IDXX     = "";           //호출 폼 ID
        this.sDELE_USER     = "";           //(X) 삭제자
        this.sDELE_TYPE     = "N";          //(X) 
        this.gRow = 0;
        this.bFireEvents    = true;         //(X) 
        this.sGwStatus      = "";
        this.sSLIP_GUBN_RF2 = "";
        this.bTEST_FLAG     = false;        //(X) 전표 해더
        this.tTITL_NAME     = "테스트입력 - 품의예산 테스트";   //전표라인
        this.tACCT_NAME     = "6115241";
        this.tBUDG_GUBN     = "10";
        this.tSLIP_AMNT     = 10000;
        this.tREMK_NAME     = "";

        this.sSLIP_NUMB     = "";
        this.sSLIP_LINE		= "";
        this.sLOAD_FORM     = "NEW"; 

        this.bSLIP_CLOS     = false;    //전표일자 마감여부
        this.sCHEK_CLDT     = "";       //마감체크할 전표일자 

        this.sDOCU_IDXX 	= "";		//결재문서 ID
        this.sAPPR_GUBN 	= "";		//결재처리구분 [ list : 목록, deleteDoc : 결재취소, show : 조회, createDoc : 상신 ]
        this.sAPPR_DOCN 	= "";		//결재문서 SEQ
        this.sAPPR_STAT   	= "";   	//결재문서 상태

        this.sCSTC_CDNE		= "";		//귀속부서별 계정별로 매핑되는 코스트센터가 1개인 경우 [코드 + ',' + 명칭] 리턴
        this.sSLIP_LIST     = "";       //리포트 출력
        this.aKeyValue 		= new Array(2);
            
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

        if (this.opener != null) {
            this.sSLIP_NUMB = this.parent.sSLIP_NUMB;
            this.sSLIP_LINE = this.parent.sSLIP_LINE;
            this.sLOAD_FORM	= this.parent.sLoadForm;    //로드시 (NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표)
            this.sUSERLAVEL = this.parent.sUSERLAVEL
        }

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

            //전표번호mask
            this.fnc_FormatSlipNumber(this.mskSHRSLIP_NUMB);
            this.fnc_FormatSlipNumber(this.mskSLIP_NUMB);
            this.fnc_FormatSlipNumber(this.mskOSLI_DISP, "", "Y");  //행번호포함
            
            this.mskSHRSLIP_NUMB.set_value(this.sSLIP_NUMB);
            
            this.sDOCU_IDXX = "KFI102";	//결재문서 ID
            
            if (this.sLOAD_FORM == "SHR") {
            
                this.sBUTTONLIST = "TFFFFFFT";
                //this.sFORMCAPTION = "회계전표조회";
                
            } else if (this.sLOAD_FORM == "SEM" || this.sLOAD_FORM == "REV") {
            
                this.sBUTTONLIST = "TFFTTTFT";//Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
                
            }
            
            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetComboDs(this.dsCombo);
            this.fnc_GetUserComboDs(this.dsUserCombo);

            //trace("this.sLOAD_FORM " + this.sLOAD_FORM);

            //계정코드를 먼저 모두 가져온다.
            this.fn_Search_ACCT_INTL();

            this.DivExcel.set_visible(false); 

            if (this.sLOAD_FORM == "NEW") {

                this.calSHRSLIP_DATE.set_value(this.fnc_GetServerDateTime("DATE"));
        		this.mskSHRSLIP_NUMB.setFocus();

            } else if (this.sLOAD_FORM == "SHR" || this.sLOAD_FORM == "REV") {
                
                this.st_FormLocation.set_text("");          
                
                this.staSHRSLIP_DATE.set_cssclass("styFormItemCap");
                this.calSHRSLIP_DATE.set_value("");
                this.fnc_SetReadonly(this.mskSHRSLIP_NUMB, true);

                this.staSHRSLIP_DATE.set_visible(false);
                this.calSHRSLIP_DATE.set_visible(false);
                this.imgHelpSHRSLIP_NUMB.set_visible(false);
                
                //팝업이면 전표 조회한다.
                this.fn_Search();
                
                if (this.fnc_Length(this.fnc_Trim(this.sSLIP_LINE)) > 0) {	
        			var iNtRow = this.dsTA_SLIPNT.findRow("SLIP_LINE", this.sSLIP_LINE)
        			if (iNtRow < 0) iNtRow = 0;
        			this.dsTA_SLIPNT.set_rowposition(iNtRow);
        			this.grdTA_SLIPNT.selectRow(iNtRow);	//해당로우로 포커스
                }
                
                this.grdTA_SLIPNT.setFocus();
                    
            } else if (this.sLOAD_FORM == "SEM") {
            
                this.st_FormLocation.set_text("");      

                this.staSHRSLIP_DATE.set_visible(false);
                this.calSHRSLIP_DATE.set_visible(false);
                this.imgHelpSHRSLIP_NUMB.set_visible(false);

                this.fnc_SetReadonly(this.mskSHRSLIP_NUMB, true);
                this.fn_SearchSemiAuto();
                
            }

            //조회만 할때는 계정코드관리항목, 기준환율 가져오지 않는다.
            if (this.sLOAD_FORM != "SHR") {
                this.fn_Search_ACCT_COND_CODE();
            }  
            
            //문서파일첨부 버튼
            if (this.sUSERLAVEL == "1") {
        		this.btnAttachDoc.set_visible(true);
        	} else {
        		this.btnAttachDoc.set_visible(false);
        	}	

        }
          
        /*----------------------------------+
         |  02.도움말 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_Help = function (obj) {
            //기능없음
        }

        /*----------------------------------+
         |  03.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e) {

            this.close();
            
        }

        /*-----------------------+
         |  04.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e) {
            
            if (!this.fn_SearchItemCheck()) return;
            
            this.dsTA_SLIPRF.filter("");
            this.fnc_DatasetClear("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM"); 

            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM dsTA_SLIPNT=dsTA_SLIPNT dsTA_SLIPRF=dsTA_SLIPRF dsTA_VATXXM=dsTA_VATXXM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            this.grdTA_SLIPNT.setFocus();
            
        }

        /*---------------+
         |  반전표 조회  |
         +---------------*/
        this.fn_SearchSemiAuto = function (obj) {

            var sMethodName = "SEARCH01";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM dsTA_SLIPNT=dsTA_SLIPNT dsTA_SLIPRF=dsTA_SLIPRF dsTA_VATXXM=dsTA_VATXXM ";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_SLIPNT.setFocus();
            
        }

        /*-----------------------------+
         |  05.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e) {
            
            if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM")) {
                if (!this.fnc_Message("TMM023")) return false;
            }

            this.fnc_DatasetClear("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM"); 
            
            var iRow = this.dsTA_SLIPXM.addRow();
            this.dsTA_SLIPXM.setColumn(iRow, "CRUD_TYPE", "INS");                 //CRUD_TYPE
            this.dsTA_SLIPXM.setColumn(iRow, "SLIP_NUMB", "");                    //전표번호
            this.dsTA_SLIPXM.setColumn(iRow, "DISP_NUMB", "");                    //전표번호
            
            this.dsTA_SLIPXM.setColumn(iRow, "EMPL_NUMB", application.GBL_EMPLNO);   	//발행자
            this.dsTA_SLIPXM.setColumn(iRow, "EMPL_NAME", application.GBL_USERNM);    	//발행자명
            this.dsTA_SLIPXM.setColumn(iRow, "DEPT_CODE", application.GBL_DEPTCD);    	//부서
            this.dsTA_SLIPXM.setColumn(iRow, "DEPT_NAME", application.GBL_DEPTNM);    	//부서명
            this.dsTA_SLIPXM.setColumn(iRow, "ACCT_GUBN", application.GBL_ACCT_GUBN); 	//사업장
            this.dsTA_SLIPXM.setColumn(iRow, "AUTO_YSNO", "0");                       	//자동전표여부
            this.dsTA_SLIPXM.setColumn(iRow, "APPR_STAT", "N"); 						//결재상태: 기안대기

            this.cmbACCT_UNIT.set_index(1);     //회계단위
            this.cmbSLIP_GUBN.set_index(1);     //전표종류
            this.cmbAPPS_CODE.set_index(1);     //결재상태
            
            this.mskCHAX_AMNT.set_value(0);     //차변합계
            this.mskDAEX_AMNT.set_value(0);     //대변합계
            
            this.dsTA_SLIPXM.setColumn(iRow, "SLIP_DATE",  this.fnc_GetServerDateTime("DATE")); // 전표일자 
        	
        	this.btn_AddRow.set_enable(true);		//라인추가
            this.btn_InsertRow.set_enable(true);	//라인삽입
            this.btn_CopyRow.set_enable(true); 	//라인복사
            this.btn_DelRow.set_enable(true);  	//라인삭제
            this.fnc_SetReadonly(this.calSLIP_DATE, false); //작성일자
            this.fnc_SetReadonly(this.cmbACCT_UNIT, false); //회계단위
            
            this.edtTITL_NAME.setFocus();
            
        }

        /*-----------------------------+
         |  06.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e) {
            
            if (!this.fn_DeleteCheck()) return;

            //전표마스터를 제외한 모든 데이터를 삭제후 마스터 삭제
        	this.dsTA_SLIPNT.deleteAll();
        	this.dsTA_SLIPRF.deleteAll();
        	this.dsTA_VATXXM.deleteAll();
            this.dsTA_SLIPXM.deleteRow(this.dsTA_SLIPXM.rowposition);

            this.grdTA_SLIPNT.setFocus();
        }

        /*-----------------------+
         |  07. 취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e) {

            this.fnc_DataSetCancel("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM");
            
            if (this.dsTA_SLIPXM.rowcount > 0) this.dsTA_SLIPXM.set_rowposition(0);
            if (this.dsTA_SLIPNT.rowcount > 0) this.dsTA_SLIPNT.set_rowposition(0);

            this.fn_SlipAmnt_Changeed();    //차/대변 합계금액 계산
            this.grdTA_SLIPNT.setFocus();   //취소 후 Grid로 Focus
            
        }

        /*-----------------------+
         |  08.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {

            if (!this.fn_SaveItemCheck()) return;

        	this.aKeyValue[0] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");
        	this.aKeyValue[1] = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");

            //this.dsTA_SLIPNT.set_rowposition(0);
            var sMethodName = "SAVE00";
            var sInDataSet  = "dsTA_SLIPXM=dsTA_SLIPXM:A dsTA_SLIPNT=dsTA_SLIPNT:U dsTA_SLIPRF=dsTA_SLIPRF:U dsTA_VATXXM=dsTA_VATXXM:U";
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

            this.grdTA_SLIPNT.setFocus();
            
        }

        /*-----------------------+
         |  09.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e) {

            this.fnc_ToExcel(this.name);
            
        }

        /*-----------------------+
         |  10.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {

            if (this.dsTA_SLIPXM.rowcount < 0) return this.fnc_Message("TMM011");
            if (this.dsTA_SLIPXM.rowposition < 0) return;
            
            this.fnc_DatasetClear("dsTA_SLIPXM_RPT,dsTA_SLIPNT_RPT");
        	
        	var reportfile 	= "/fam/FAMB0030R01.jrf";
        	var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/fam/FAMB0030_PRINT00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsTA_SLIPXM_RPT=dsTA_SLIPXM_RPT dsTA_SLIPNT_RPT=dsTA_SLIPNT_RPT";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
        	
        }

        /*-----------------------------------+
         |  11. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
            
            if (e.fromobject instanceof Div) return;
            
            var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM",this);
            if (!this.fnc_IsEmpty(sMessage)) return sMessage;
            
        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        //     if (this.sLOAD_FORM == "SHR") { 
        //         return this.fnc_FormUnload("", e);
        //     } else {            
                return this.fnc_FormUnload(obj, e); // 자료 변경 여부를 체크하고자 하는  DataSet Object를 넘긴다.
        //    }
            
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

            this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-----------------------------------+
         |  13.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

            this.fnc_EditFocus(obj);

        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*----------------------------------------------------------------+
         |  조회 필수 조건 체크!  |
         +-----------------------------------------------------------------*/
        this.fn_SearchItemCheck = function () {

        // trace("dsTA_SLIPXM : " + this.fnc_DatasetChangeCheck("dsTA_SLIPXM"));
        // trace("dsTA_SLIPNT : " + this.fnc_DatasetChangeCheck("dsTA_SLIPNT"));
        // trace("dsTA_SLIPRF : " + this.fnc_DatasetChangeCheck("dsTA_SLIPRF"));
        // trace("dsTA_VATXXM : " + this.fnc_DatasetChangeCheck("dsTA_VATXXM"));

            if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM")) return this.fnc_Message("TMM023");
            
            if (this.fnc_Length(this.mskSHRSLIP_NUMB.value) < 1) {
                return this.fnc_CheckPostAction("TMM072", "전표번호", "", "", this.mskSHRSLIP_NUMB, "");
            }
            return true;
            
        }

        /*----------------------------------------------------------------+
         |  삭제 여부 체크!  |
         +-----------------------------------------------------------------*/
        this.fn_DeleteCheck = function () {

            if (this.dsTA_SLIPXM.rowcount < 1) {               
                this.fnc_Message("TMM007");
                return false;
            }

            //수정가능확인한다.
            if (!this.fn_IsUpdateOK() && this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "APPS_CODE") != "X") {
                this.fnc_Message("TMM300", "선택한 전표는 삭제 할수 없습니다.\n" 
                                         + " - 결재상태[" + this.cmbAPPS_CODE.text + "]\n" 
                                         + " - 전표유형[" + this.cmbSLIP_GUBN.text + "]");
                return false;
            }
            
            var sQuestionText = "회계전표 " + this.mskSLIP_NUMB.text;
            return this.fnc_Message("TMM002", sQuestionText);

        }

        /*----------------------------------------------------------------+
         |  저장 여부 체크(결의서)!          |
         +-----------------------------------------------------------------*/
        this.fn_SaveItemCheck = function (Obj) {    // 자동전표는 수정할수 없다.

            // 변경된 자료가 있는지 체크
            this.dsTA_SLIPRF.filter("");
            if (!this.fnc_DatasetChangeCheck("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM")) {
        		this.fn_dsTA_SLIPRF_Filter();
                this.fnc_Message("TMM003");
                return false;
            }
            this.fn_dsTA_SLIPRF_Filter();

            //현재행을 보관한다.
            var iCurrRow = this.dsTA_SLIPNT.rowposition;

            /******************************** 전표 마스터 체크 *****************************************/
            if (this.dsTA_SLIPXM.rowcount == 1 && this.dsTA_SLIPXM.getRowType(0) != Dataset.ROWTYPE_NORMAL) {
            
                if (this.fnc_IsDate(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(0, "SLIP_DATE"))) == false) {
                    return this.fnc_SearchCheckPostAction("TMM072", "정확한 전표일자", this.calSHRSLIP_DATE);
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(0, "ACCT_UNIT"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsTA_SLIPXM, 0, this.cmbACCT_UNIT, "ACCT_UNIT");
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(0, "SLIP_GUBN"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "전표종류", this.dsTA_SLIPXM, 0, this.cmbSLIP_GUBN, "SLIP_GUBN");
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(0, "TITL_NAME"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "제목", this.dsTA_SLIPXM, 0, this.edtTITL_NAME, "TITL_NAME");
                }

                //수정건의 CRUD_TYPE 을 셋팅한다.
                if (this.dsTA_SLIPXM.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
                    this.dsTA_SLIPXM.setColumn(0, "CRUD_TYPE", "UPD");
                }
            }
        	
        	if (this.dsTA_SLIPXM.rowcount == 1) {
        		if (nexacro.toNumber(this.mskCHAX_AMNT.value,0) != nexacro.toNumber(this.mskDAEX_AMNT.value,0)) {
        			this.fnc_Message("TMM125", "차대변 금액이 맞지 않습니다.(1)"); 
        			this.grdTA_SLIPNT.setFocus();
        			return false;
        		}
        	}

            if (nexacro.toNumber(this.dsTA_SLIPNT.getCaseSum("DRCR_GUBN=='D'", "SLIP_AMNT"),0) != nexacro.toNumber(this.dsTA_SLIPNT.getCaseSum("DRCR_GUBN=='C'", "SLIP_AMNT"),0)) {   
                this.fnc_Message("TMM125", "차대변 금액이 맞지 않습니다.(2)"); 
                this.grdTA_SLIPNT.setFocus();
                return false;
            }
            
            if (this.dsTA_SLIPXM.getDeletedRowCount() < 1 && this.dsTA_SLIPNT.rowcount < 2) {   
                this.fnc_Message("TMM125", "전표행은 2건이상 등록해야 합니다."); 
                this.grdTA_SLIPNT.setFocus();
                return false;
            }

            /******************************** 전표 세부(분개내역) 체크 *****************************************/

            for (var i = 0; i < this.dsTA_SLIPNT.rowcount; i++) {
            
                if (this.fnc_ToUpper(this.dsTA_SLIPNT.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
                
                
                var iAcctRow        = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(i, "ACCT_INTL"));
                var sAcct_Drcr_Gubn = this.dsTA_ACCTXM.getColumn(iAcctRow, "DRCR_GUBN");    //계정코드 차대구분
                var sSlip_Drcr_Gubn = this.dsTA_SLIPNT.getColumn(i, "DRCR_GUBN");           //전표행 차대구분
                
                
                var sSlipLine = "행번호[" + this.dsTA_SLIPNT.getColumn(i, "SLIP_LINE") + "] ";
                
                if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "USEX_DEPT"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", sSlipLine + "귀속부서", this.dsTA_SLIPNT, i, this.edtDEPT_NAM1, "");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "ACCT_INTL"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", sSlipLine + "계정과목", this.dsTA_SLIPNT, i, this.edtACCT_NAME, "");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "DRCR_GUBN"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", sSlipLine + "차대구분", this.dsTA_SLIPNT, i, this.rdoDRCR_GUBN, "");
                }

                if (this.dsTA_ACCTXM.getColumn(iAcctRow, "CSUS_YSNO") == "1" && sSlip_Drcr_Gubn == sAcct_Drcr_Gubn ) {  // 코스트센터사용
                    if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "CSTC_CODE"))) < 1) {
                        return this.fnc_CheckPostAction("TMM072", sSlipLine + "코스트센터", this.dsTA_SLIPNT, i, this.edtCSTC_NAME, "");
                     }
                }       

                if (this.dsTA_ACCTXM.getColumn(iAcctRow, "BUDG_YSNO") == "1" && sSlip_Drcr_Gubn == sAcct_Drcr_Gubn ) {  // 예산사용여부
                     if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "BUDG_GUBN"))) < 1) {
                        return this.fnc_CheckPostAction("TMM072", sSlipLine + "예산구분", this.dsTA_SLIPNT, i, this.cmbBUDG_GUBN, "");
                     }
                     
                     if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "BDSB_CODE"))) < 1) {
                        return this.fnc_CheckPostAction("TMM072", sSlipLine + "예산과목", this.dsTA_SLIPNT, i, this.edtBDSB_NAME, "");
                     }
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "SLIP_AMNT"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", sSlipLine + "금액", this.dsTA_SLIPNT, i, this.mskSLIP_AMNT, "");
                }
                
                // 외화여부
                // 화폐구분
                if (this.dsTA_SLIPNT.getColumn(i, "CURR_GUBN") != "KRW") {
                    // 한화
                    // 환율
                    if (this.dsTA_SLIPNT.getColumn(i, "EXCH_RATE") == 0) {
                        return this.fnc_CheckPostAction("TMM072", sSlipLine + "환율", this.dsTA_SLIPNT, i, this.mskEXCH_RATE, "");
                    }
                    // 외화금액
                    if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "FORI_AMNT"))) < 1) {
                        return this.fnc_CheckPostAction("TMM072", sSlipLine + "외화금액", this.dsTA_SLIPNT, i, this.mskFORI_AMNT, "");
                    }
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "REMK_NAME"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", sSlipLine + "적요", this.dsTA_SLIPNT, i, this.edtREMK_NAME, "");
                }

                //발생번호를 확인한다.
                var GUNB_YSNO = this.dsTA_ACCTXM.getColumn(iAcctRow, "GUNB_YSNO");  //건별미결관리항목
                if (GUNB_YSNO == "1") {
                    //건별미결관리항목 이면서 계정과목 차대구분과 전표의 차대구분이 다르면 발생전표번호는 필수이다.
                    if (sSlip_Drcr_Gubn != sAcct_Drcr_Gubn 
                        && this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "OSLI_NUMB"))) < 1) {
                        return this.fnc_CheckPostAction("TMM072", sSlipLine + "발생전표번호", this.dsTA_SLIPNT, i, this.btnOSLI_NUMB, "");  
                    } 
                }
                
                // 차대변구분 필수항목 체크
                if (this.dsTA_ACCTXM.getColumn(iAcctRow, "DRCR_GUBN") == sSlip_Drcr_Gubn) {
                    if (this.dsTA_ACCTXM.getColumn(iAcctRow, "EVID_YSNO") == 1) {
                        // 증빙서류가 필수인데 해당사항없음을 선택했을때 처리(FA180090:해당사항없음)
                        if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "EVID_DOCU"))) < 1) {
                            return this.fnc_CheckPostAction("TMM072", sSlipLine + "증빙서류", this.dsTA_SLIPNT, i, this.cmbEVID_DOCU, "");
                        }
                    }   
                }

                // 출납여부
                if (this.dsTA_ACCTXM.getColumn(iAcctRow, "CHUL_YSNO") == 1) {
                    // 출납여부가 체크 되어져 있으면
                    if (this.dsTA_SLIPNT.getColumn(i, "PAYX_YSNO") == 1) {
                        // 출납예정일
                        if (this.fnc_IsDate(this.dsTA_SLIPNT.getColumn(i, "PAYX_DATE")) == false) {
                            return this.fnc_CheckPostAction("TMM072", sSlipLine + "출납예정일", this.dsTA_SLIPNT, i, this.calPAYX_DATE, "");
                        }
                        
                        // 출납방법
                        if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(i, "LEDG_GUBN"))) < 1) {
                            return this.fnc_CheckPostAction("TMM072", sSlipLine + "출납방법", this.dsTA_SLIPNT, i, this.cmbLEDG_GUBN, "");
                        }
                    }
                }
                
                //수정건의 CRUD_TYPE 을 셋팅한다.
                if (this.dsTA_SLIPNT.getRowType(i) == Dataset.ROWTYPE_UPDATE) {
                    this.dsTA_SLIPNT.setColumn(i, "CRUD_TYPE", "UPD");
                }
            }

            /******************************** 전표 관리항목 체크 *****************************************/
            this.Tab0.TabD1.grdTA_SLIPRF.set_enableredraw(false);  
            this.dsTA_SLIPRF.filter("");

            for (var j = 0; j < this.dsTA_SLIPRF.rowcount; j++) {
                if (this.dsTA_SLIPRF.getRowType(j) == Dataset.ROWTYPE_NORMAL) continue;

                // 전표세부 차대구분 필수가 아니면 확인하지 않는다.
                if (this.dsTA_SLIPRF.getColumn(j, "MUST_YSNO") == "0") continue; 

                var iLineRow = this.dsTA_SLIPNT.findRow("SLIP_LINE", this.dsTA_SLIPRF.getColumn(j, "SLIP_LINE"));

                if (this.dsTA_SLIPRF.getColumn(j, "DRCR_TYPE") == "A"// 관리헝목차대구분 전체
                     || (this.dsTA_SLIPRF.getColumn(j, "DRCR_TYPE") == this.dsTA_SLIPNT.getColumn(iLineRow, "DRCR_GUBN"))// 차대구분-차변필수
                    ) {

                    // 차대구분-대변필수
                    if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPRF.getColumn(j, "COND_VACD"))) < 1) {
                    
                        var sCond_Code = this.dsTA_SLIPRF.getColumn(j, "COND_CODE");
                        var sMSG = "행번호[" +  this.dsTA_SLIPRF.getColumn(j, "SLIP_LINE") + "] 관리항목[" + this.dsTA_SLIPRF.getColumn(j, "COND_NAME") + "]";

                        this.dsTA_SLIPNT.set_rowposition(iLineRow);
                        this.Tab0.set_tabindex(0);
                        this.Tab0.TabD1.grdTA_SLIPRF.setFocus();
                        this.fn_dsTA_SLIPRF_Filter();
                        this.Tab0.TabD1.grdTA_SLIPRF.set_enableredraw(true);

                        return this.fnc_CheckPostAction("TMM072", sMSG, this.dsTA_SLIPRF, this.dsTA_SLIPRF.findRow("COND_CODE", sCond_Code), this.Tab0.TabD1.grdTA_SLIPRF, "COND_VANM");
                        
                    }
                }
                
        //         
        //         /*********************************************/
        //         //관리항목의 거래처값과 다른경우 에러
        //         this.dsTA_SLIPRF.filter("");
        //         var iRfLineRow  = this.dsTA_SLIPRF.findRowExpr("SLIP_LINE == '" + iLineRow + "' && COND_CODE == '0002'");
        //         var sCond_Cust 	= this.dsTA_SLIPRF.getColumn(iRfLineRow, "COND_VACD");	//관리항목의 거래처
        //         trace("iRfLineRow : " + iRfLineRow + " sCond_Cust : " + sCond_Cust );
        //         this.fn_dsTA_SLIPRF_Filter();
        //         
        //         if (iRfLineRow < 0) {
        //             var sMSG = "행번호[" +  this.dsTA_SLIPRF.getColumn(j, "SLIP_LINE") + "] 관리항목 거래처";
        // 			
        //             this.dsTA_SLIPNT.set_rowposition(iLineRow);
        //             this.Tab0.set_tabindex(0);
        //             
        //             return this.fnc_CheckPostAction("TMM072", sMSG, this.dsTA_SLIPRF, 0, this.Tab0.TabD1.grdTA_SLIPRF, "");
        //         }
        //         
        //         if (this.dsTA_VATXXM.getColumn(j, "CUST_CODE") != sCond_Cust) {
        //             var sMSG = "행번호[" +  this.dsTA_SLIPRF.getColumn(j, "SLIP_LINE") + "] 관리항목의 거래처와 다릅니다.";
        //             
        //             this.dsTA_SLIPNT.set_rowposition(iLineRow);
        //             this.Tab0.set_tabindex(0);
        //             this.fn_dsTA_VATXXM_Filter();
        //             
        //             //return this.fnc_CheckPostAction("TMM300", sMSG, this.dsTA_VATXXM, this.dsTA_VATXXM.findRow("SLIP_LINE", sSlip_Line), this.Tab0.TabD2.edtCUST_NAME, "");
        //             return this.fnc_CheckPostAction("TMM300", sMSG, this.dsTA_SLIPRF, this.dsTA_SLIPRF.findRow("COND_CODE", sCond_Code), this.Tab0.TabD1.grdTA_SLIPRF, "COND_VANM");
        //         }        
        //         /*********************************************/
                
                
            }

            this.fn_dsTA_SLIPRF_Filter();
            this.Tab0.TabD1.grdTA_SLIPRF.set_enableredraw(true);

            /******************************** 증빙세부 체크 *****************************************/
            this.dsTA_VATXXM.filter("");

            //전표증빙에 필요없으면 삭제한다.
            for (var j = this.dsTA_SLIPNT.rowcount - 1; j >= 0; j--) {
                
                var sSLIP_LINE  = this.dsTA_SLIPNT.getColumn(j, "SLIP_LINE");
                var sEVID_DOCU  = this.dsTA_SLIPNT.getColumn(j, "EVID_DOCU");
                var iVatRow     = this.dsTA_VATXXM.findRow("SLIP_LINE", sSLIP_LINE);
                var iCodeRow    = -1;
                if (this.fnc_Length(this.fnc_Trim(sEVID_DOCU)) > 0) {
                    iCodeRow    = this.dsEVID_DOCU.findRow("COMD_CODE", sEVID_DOCU);
                }
                var sRef2_Fild  = this.dsEVID_DOCU.getColumn(iCodeRow, "REF2_FILD");

                //trace(" =============== fn_SaveItemCheck : SLIP_LINE " + sSLIP_LINE);
                //trace(" =============== fn_SaveItemCheck : EVID_DOCU " + sEVID_DOCU);
                //trace(" =============== fn_SaveItemCheck : vatRow " + iVatRow);
                //trace(" =============== fn_SaveItemCheck : codeRow " + iCodeRow);
                //trace(" =============== fn_SaveItemCheck : REF2_FILD " + sRef2_Fild);
                
                //증빙이 공란인데 부가세 있으면 부가세 삭제한다
                if (this.fnc_Length(this.fnc_Trim(sEVID_DOCU)) < 1 && iVatRow >= 0)  {
                    this.dsTA_VATXXM.deleteRow(iVatRow);
                }
                
                //증빙이 증빙생성여부 불필요인데 부가세 있으면 부가세 삭제한다
                else if (sRef2_Fild != "1" && iVatRow >= 0)  {
                    this.dsTA_VATXXM.deleteRow(iVatRow);
                }

                //증빙이 증빙생성여부 필요인데 부가세 없으면 만들어준다.
                else if (sRef2_Fild == "1" && iVatRow < 0)  {
                    var iNewRow = this.dsTA_VATXXM.addRow();
                    this.dsTA_VATXXM.setColumn(iNewRow, "SLIP_NUMB", this.dsTA_SLIPNT.getColumn(j, "SLIP_NUMB"));
                    this.dsTA_VATXXM.setColumn(iNewRow, "SLIP_LINE", this.dsTA_SLIPNT.getColumn(j, "SLIP_LINE"));
                    this.dsTA_VATXXM.setColumn(iNewRow, "CRUD_TYPE", "INS");
                    //this.dsTA_VATXXM.setColumn(iNewRow, "EBIL_GUBN", "0");    //전자발행여부
                    
                    this.dsTA_VATXXM.rowposition = iNewRow;
                    this.Tab0.TabD2.cmbEBIL_GUBN.set_index(1);
                    
                }
            }

            for (var j = 0; j < this.dsTA_VATXXM.rowcount; j++) {

            
                var iLineRow    = this.dsTA_SLIPNT.findRow("SLIP_LINE", this.dsTA_VATXXM.getColumn(j, "SLIP_LINE"));
                var sSlip_Line  = this.dsTA_VATXXM.getColumn(j, "SLIP_LINE");
                
                
                /*********************************************/
                //관리항목의 거래처값과 다른경우 에러
                this.dsTA_SLIPRF.filter("");
                var iRfLineRow  = this.dsTA_SLIPRF.findRowExpr("SLIP_LINE == '" + sSlip_Line + "' && COND_CODE == '0002'");
                var sCond_Cust 	= this.dsTA_SLIPRF.getColumn(iRfLineRow, "COND_VACD");	//관리항목의 거래처
                this.fn_dsTA_SLIPRF_Filter();
                
                if (iRfLineRow < 0) {
                    var sMSG = "행번호[" +  sSlip_Line + "] 관리항목 거래처";
        			
                    this.dsTA_SLIPNT.set_rowposition(iLineRow);
                    this.Tab0.set_tabindex(0);
                    
                    return this.fnc_CheckPostAction("TMM072", sMSG, this.dsTA_SLIPRF, 0, this.Tab0.TabD1.grdTA_SLIPRF, "");
                }
                
                if (this.dsTA_VATXXM.getColumn(j, "CUST_CODE") != sCond_Cust) {
                    var sMSG = "행번호[" +  sSlip_Line + "] 관리항목의 거래처와 다릅니다.";
                    
                    this.dsTA_SLIPNT.set_rowposition(iLineRow);
                    this.Tab0.set_tabindex(1);
                    this.fn_dsTA_VATXXM_Filter();
                    
                    return this.fnc_CheckPostAction("TMM300", sMSG, this.dsTA_VATXXM, this.dsTA_VATXXM.findRow("SLIP_LINE", sSlip_Line), this.Tab0.TabD2.edtCUST_NAME, "");
                }        
                /*********************************************/
                
                
                if (this.dsTA_VATXXM.getRowType(j) == Dataset.ROWTYPE_NORMAL) continue;
        // 
        //         var iLineRow    = this.dsTA_SLIPNT.findRow("SLIP_LINE", this.dsTA_VATXXM.getColumn(j, "SLIP_LINE"));
        //         var sSlip_Line  = this.dsTA_VATXXM.getColumn(j, "SLIP_LINE");
        //         
                //this.dsTA_SLIPNT.set_rowposition("" + sSlip_Line);
                
                //전표라인의 증빙서류가 증빙자료생성여부 확인
                var iFindRow    = this.dsEVID_DOCU.findRow("COMD_CODE", this.dsTA_SLIPNT.getColumn(iLineRow, "EVID_DOCU"));
                var sRef2_Fild  = this.dsEVID_DOCU.getColumn(iFindRow, "REF2_FILD");    //증빙생성여부
                
                if (iFindRow < 0 || sRef2_Fild != "1") continue;
                
                //계정코드의 차대구분 확인
                var iAcctRow        = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(iLineRow, "ACCT_INTL"));
                var sAcct_Drcr_Gubn = this.dsTA_ACCTXM.getColumn(iAcctRow, "DRCR_GUBN"); //계정코드 차대구분
                var sSlip_Drcr_Gubn = this.dsTA_SLIPNT.getColumn(iLineRow, "DRCR_GUBN"); //전표행 차대구분
                
                if (iAcctRow < 0 || sAcct_Drcr_Gubn != sSlip_Drcr_Gubn) continue;
                

                if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(j, "TRNS_DATE"))) < 1) {
                    var sMSG = "행번호[" +  sSlip_Line + "] 증빙항목 발행일자";
                    
                    this.dsTA_SLIPNT.set_rowposition(iLineRow);
                    this.Tab0.set_tabindex(1);
                    this.fn_dsTA_VATXXM_Filter();

                    return this.fnc_CheckPostAction("TMM072", sMSG, this.dsTA_VATXXM, this.dsTA_VATXXM.findRow("SLIP_LINE", sSlip_Line), this.Tab0.TabD2.calTRNS_DATE, "");
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(j, "VATX_GUBN"))) < 1) {
                    var sMSG = "행번호[" +  sSlip_Line + "] 증빙항목 매입매출";
                    
                    this.dsTA_SLIPNT.set_rowposition(iLineRow);
                    this.Tab0.set_tabindex(1);
                    this.fn_dsTA_VATXXM_Filter();

                    return this.fnc_CheckPostAction("TMM072", sMSG, this.dsTA_VATXXM, this.dsTA_VATXXM.findRow("SLIP_LINE", sSlip_Line), this.Tab0.TabD2.cmbVATX_GUBN, "");
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(j, "VATX_TYPE"))) < 1) {
                    var sMSG = "행번호[" +  sSlip_Line + "] 증빙항목 부가세종류";
                    
                    this.dsTA_SLIPNT.set_rowposition(iLineRow);
                    this.Tab0.set_tabindex(1);
                    this.fn_dsTA_VATXXM_Filter();

                    return this.fnc_CheckPostAction("TMM072", sMSG, this.dsTA_VATXXM, this.dsTA_VATXXM.findRow("SLIP_LINE", sSlip_Line), this.Tab0.TabD2.cmbVATX_TYPE, "");
                }

                if (nexacro.toNumber(this.dsTA_VATXXM.getColumn(j, "SUPP_AMNT"),0) == 0) {
                    var sMSG = "행번호[" +  sSlip_Line + "] 증빙항목 공급가액";
                    
                    this.dsTA_SLIPNT.set_rowposition(iLineRow);
                    this.Tab0.set_tabindex(1);
                    this.fn_dsTA_VATXXM_Filter();

                    return this.fnc_CheckPostAction("TMM072", sMSG, this.dsTA_VATXXM, this.dsTA_VATXXM.findRow("SLIP_LINE", sSlip_Line), this.Tab0.TabD2.mskSUPP_AMNT, "");
                }

                //부가세종류에서 세액필수여부를 확인한다
                var iFindRow    = this.dsVATX_TYPE.findRow("COMD_CODE", this.dsTA_VATXXM.getColumn(j, "VATX_TYPE"));
                var sREF1_FILD  = this.dsVATX_TYPE.getColumn(iFindRow, "REF1_FILD");
                if (sREF1_FILD == "1") {
                    if (nexacro.toNumber(this.dsTA_VATXXM.getColumn(j, "VATX_AMNT"),0) == 0) {
                        var sMSG = "행번호[" +  sSlip_Line + "] 증빙항목 세액";
                        
                        this.dsTA_SLIPNT.set_rowposition(iLineRow);
                        this.Tab0.set_tabindex(1);
                        this.fn_dsTA_VATXXM_Filter();

                        return this.fnc_CheckPostAction("TMM072", sMSG, this.dsTA_VATXXM, this.dsTA_VATXXM.findRow("SLIP_LINE", sSlip_Line), this.Tab0.TabD2.mskVATX_AMNT, "");
                    }
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsTA_VATXXM.getColumn(j, "CUST_CODE"))) < 1) {
                    var sMSG = "행번호[" +  sSlip_Line + "] 증빙항목 거래처";
                    
                    this.dsTA_SLIPNT.set_rowposition(iLineRow);
                    this.Tab0.set_tabindex(1);
                    this.fn_dsTA_VATXXM_Filter();

                    return this.fnc_CheckPostAction("TMM072", sMSG, this.dsTA_VATXXM, this.dsTA_VATXXM.findRow("SLIP_LINE", sSlip_Line), this.Tab0.TabD2.edtCUST_NAME, "");
                }

        
        //         /*********************************************/
        //         //관리항목의 거래처값과 다른경우 에러
        //         this.dsTA_SLIPRF.filter("");
        //         var iRfLineRow  = this.dsTA_SLIPRF.findRowExpr("SLIP_LINE == '" + sSlip_Line + "' && COND_CODE == '0002'");
        //         var sCond_Cust 	= this.dsTA_SLIPRF.getColumn(iRfLineRow, "COND_VACD");	//관리항목의 거래처
        //         this.fn_dsTA_SLIPRF_Filter();
        //         
        //         if (iRfLineRow < 0) {
        //             var sMSG = "행번호[" +  sSlip_Line + "] 관리항목 거래처";
        // 			
        //             this.dsTA_SLIPNT.set_rowposition(iLineRow);
        //             this.Tab0.set_tabindex(0);
        //             
        //             return this.fnc_CheckPostAction("TMM072", sMSG, this.dsTA_SLIPRF, 0, this.Tab0.TabD1.grdTA_SLIPRF, "");
        //         }
        //         
        //         if (this.dsTA_VATXXM.getColumn(j, "CUST_CODE") != sCond_Cust) {
        //             var sMSG = "행번호[" +  sSlip_Line + "] 관리항목의 거래처와 다릅니다.";
        //             
        //             this.dsTA_SLIPNT.set_rowposition(iLineRow);
        //             this.Tab0.set_tabindex(1);
        //             this.fn_dsTA_VATXXM_Filter();
        //             
        //             return this.fnc_CheckPostAction("TMM300", sMSG, this.dsTA_VATXXM, this.dsTA_VATXXM.findRow("SLIP_LINE", sSlip_Line), this.Tab0.TabD2.edtCUST_NAME, "");
        //         }        
        //         /*********************************************/
                
                

                //수정건의 CRUD_TYPE 을 셋팅한다.
                if (this.dsTA_VATXXM.getRowType(j) == Dataset.ROWTYPE_UPDATE) {
                    this.dsTA_VATXXM.setColumn(j, "CRUD_TYPE", "UPD");
                }
            }

            this.fn_dsTA_VATXXM_Filter();
            
            return true;
            
        }

        /*----------------------------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +-----------------------------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
            
            var sReturnString;
            var iNtRow = this.dsTA_SLIPNT.rowposition;

            // 조회 Argument 생성
            if (sKind == "SEARCH00") {
                
                // 조회 버튼 클릭
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " SLIP_NUMB="  + this.fnc_Quote(this.mskSHRSLIP_NUMB.value); //전표번호
                sReturnString += " USERLAVEL="  + this.fnc_Quote(this.sUSERLAVEL);
                sReturnString += " DEPT_CODE="  + this.fnc_Quote(application.GBL_DEPTCD); 
                sReturnString += " DOCU_IDXX="  + this.fnc_Quote(this.sDOCU_IDXX); // 결재문서 ID
                
                //sReturnString += " EMPL_NUMB=" + this.fnc_Quote(application.GBL_EMPLNO);
                //sReturnString += " ACCT_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.calSHRSLIP_DATE.value, 0, 4));
            
            } else if (sKind == "SEARCH01") {
            
                // 반자동 조회(업무에서 넘어왔을때)
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " FORM_IDXX="  + this.fnc_Quote(this.sFORM_IDXX); //연동키값 - 폼ID

            } else if (sKind == "SEARCH21") {
            
                // 반자동 조회(업무에서 넘어왔을때)
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " SLIP_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB")));
                sReturnString += " SLIP_LINE="  + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE")));

            } else if (sKind == "SEARCH10") {
            
                //계정코드
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
            
            } else if (sKind == "SEARCH11") {
            
                //계정코드 관리항목
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                
            } else if (sKind == "SEARCH13") {
                
                //발생전표 관리항목
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " OSLI_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "OSLI_NUMB"))); 
                sReturnString += " OSLI_LINE="  + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "OSLI_LINE"))); 
                
            } else if (sKind == "SEARCH14") {
                
                var sDate = this.fnc_Trim(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "ACCT_DATE"));
                if (this.fnc_Length(sDate) < 1) sDate = this.fnc_Trim(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE"));
                
                // 기준 환율 조회
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " SLIP_DATE="  + this.fnc_Quote(sDate);
            
            } else if (sKind == "SEARCH15") {
                
                /* 예산 분기 구함 */
                var sSlip_Date = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE");
                var sBudg_Gubn = this.dsTA_SLIPNT.getColumn(iNtRow, "BUDG_GUBN");
                
                var sYear = this.fnc_SubStr(sSlip_Date, 0, 4);
                var sMnth = this.fnc_SubStr(sSlip_Date, 4, 2);
                
                var sBudg_Ymst = "";
                var sBudg_Ymed = "";

                if (sBudg_Gubn == "10") {
                
                    if (sMnth >= "01" && sMnth <= "03") {
                        sBudg_Ymst = sYear + "01";
                        sBudg_Ymed = sYear + "03";
                    } else if (sMnth >= "04" && sMnth <= "06") {
                        sBudg_Ymst = sYear + "04";
                        sBudg_Ymed = sYear + "06";
                    } else if (sMnth >= "07" && sMnth <= "09") {
                        sBudg_Ymst = sYear + "07";
                        sBudg_Ymed = sYear + "09";
                    } else {
                        sBudg_Ymst = sYear + "10";
                        sBudg_Ymed = sYear + "12";
                    }
                }       
                
                // 예산잔액 조회
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " SLIP_DATE="  + this.fnc_Quote(sSlip_Date); //전표일자(예산 기준일자로 사용)
                sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "ACCT_UNIT")));
                sReturnString += " BDSB_CODE="  + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iNtRow, "BDSB_CODE"))); //예산과목
                sReturnString += " CSTC_CODE="  + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iNtRow, "CSTC_CODE"))); //코스트센터
                sReturnString += " BUDG_GUBN="  + this.fnc_Quote(sBudg_Gubn);
                sReturnString += " BUDG_YMST="  + this.fnc_Quote(sBudg_Ymst);
                sReturnString += " BUDG_YMED="  + this.fnc_Quote(sBudg_Ymed);
                
            } else if (sKind == "SEARCH16") {
            
                // 마감여부 조회
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " SLIP_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_GUBN"))); //전표유형
                sReturnString += " SLIP_DATE="  + this.sCHEK_CLDT; //마감체크할 전표일자
                
            } else if (sKind == "SEARCH17") {
        		
        		var iAcctRow 	= this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(iNtRow, "ACCT_INTL"));
                var sCost_Gubn 	= this.dsTA_ACCTXM.getColumn(iAcctRow, "COST_GUBN");
                
                // 귀속부서별, 계정의 원가구분별 매핑되는 코스트센터 조회
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " SLIP_DATE="  + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE")));
                sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iNtRow, "USEX_DEPT")));
                sReturnString += " COST_GUBN="  + this.fnc_Quote(sCost_Gubn);	//계정의 원가구분

            } else if (sKind == "SAVE00") {
            
                // 저장 Argument 생성
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                
            } else if (sKind == "APPRPROC00") {
            
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " ACCT_DATE="  + this.fnc_Quote(this.calACCT_DATE1.value); 
                sReturnString += " SLIP_NUMB="  + this.fnc_Quote(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB")); //전표번호
            
            } else if (sKind == "APPRPROC01") {
            
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " ACCT_DATE="  + this.fnc_Quote(this.calACCT_DATE1.value); 
                sReturnString += " SLIP_NUMB="  + this.fnc_Quote(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB")); //전표번호
            
            } else if (sKind == "SAVE99") {
                
                // 전자결재 연동자료 저장
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " GWAP_EMPL="  + this.fnc_Quote(application.GBL_EMPLNO);	//사원번호(결재요청자)
                sReturnString += " GWAP_DEPT="  + this.fnc_Quote(application.GBL_DEPTCD);	//부서코드(신청자)
                
                var sGwap_Subj = "[" + this.mskSLIP_NUMB.text + "] 회계전표";
                
                sReturnString += " GWAP_SUBJ="  + this.fnc_Quote(sGwap_Subj);	//전자결재제목
                
            } else if (sKind == "PRINT00") {    
                // 인쇄
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " SLIP_DATE="  + this.fnc_Quote(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE")); //전표일자
                sReturnString += " SLIP_LIST="  + this.fnc_Quote(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB")); //전표번호
            
            } else if (sKind == "PRINT02") {
            
                // 인쇄(증빙항목)
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); 
                sReturnString += " action="     + this.fnc_Quote(sKind); 
                sReturnString += " SLIP_DATE="  + this.fnc_Quote(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE")); //전표일자
                sReturnString += " SLIP_NUMB="  + this.fnc_Quote(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB")); //전표번호
                sReturnString += " USERLAVEL="  + this.fnc_Quote(this.sUSERLAVEL);
                sReturnString += " DEPT_CODE="  + this.fnc_Quote(application.GBL_DEPTCD);
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(application.GBL_EMPLNO);
                sReturnString += " GW_DOCUNO="  + this.fnc_Quote(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "GW_DOCUNO"));
            
            }

            return sReturnString;
            // 생성된 String 반환
        }

        /*----------------------------------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-----------------------------------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
            
            if (ErrorCode < 0) {
                if (application.GBL_SESSONCHK == "E0001") {
                    this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
                } else {
                    this.fnc_Message("SERVERMSG", ErrorMSG);
                }
                
                // 전표일자 마감된 경우
                if (sMethodName == "SEARCH16") this.bSLIP_CLOS = true;
                
            } else {
                this.fn_PostProcess(sMethodName);
            }
            
        }

        /*----------------------------------------------------------------+
         |  Transaction 후 Post Process!       |
         +-----------------------------------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
            
            //trace(" =====>>> fn_PostProcess : " + sMethodName);
            // 일반 조회
            if (sMethodName == "SEARCH00")  {
                
                if (this.dsTA_SLIPXM.rowcount == 0) this.fnc_DatasetClear("dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM"); 
                
                this.fnc_Information(this.stInformation, this.dsTA_SLIPNT.rowcount, "SHR"); //조회 후 실행 해야 할 이후 작업이 있다면 여기에 기술한다.
                this.fnc_Message("TMM018", this.dsTA_SLIPXM.rowcount);
                
                this.fn_SlipAmnt_Changeed(); //차/대변 합계금액 계산
                
                //전표종류가 입력시점에 필터링 되어 있을수 있어 필터를 해제한다.
                this.dsSLIP_GUBN.filter("");
                
                if (this.cmbCURR_GUBN.value == "KRW") { // 대한민국     
                    this.fnc_SetReadonly(this.mskEXCH_RATE, true);
                } else {
                    this.fnc_SetReadonly(this.mskEXCH_RATE, false);
                }
                
                this.fn_SetMask_ForiAmt();
                
                
        		var iRow = this.dsTA_SLIPNT.findRowExpr("SLIP_NUMB=='" + this.aKeyValue[0] + "' && SLIP_LINE=='" + this.aKeyValue[1] + "'");
        		
         		if (iRow < 0) iRow = 0;
         		
         		this.grdTA_SLIPNT.selectRow(iRow);
         		this.dsTA_SLIPNT.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";
        		this.aKeyValue[1] = "";
        		this.aKeyValue[2] = "";		
        		
                //alert(iRow);
                //this.dsTA_SLIPNT_onrowposchanged();
                
            } else if (sMethodName == "SEARCH01") {
                
                this.dsTA_SLIPNT_onrowposchanged();
            
            } else if (sMethodName == "PRINT00") {
        	
        		if (this.dsTA_SLIPXM_RPT.rowcount == 0) return;
                
            //계정코드
            } else if (sMethodName == "SEARCH10") {
            
            //계정코드 관리항목
            } else if (sMethodName == "SEARCH11") {
            
            //발생전표 관리항목
            } else if (sMethodName == "SEARCH13") {
                
                this.fn_Osli_Cond_Code_Copy();
                
            // 기준환율 조회 후 처리
            } else if (sMethodName == "SEARCH14") {     
                
            // 예산잔액 조회 후 처리
            } else if (sMethodName == "SEARCH15") {
                
            // 일자별 마감 조회 후 처리
            } else if (sMethodName == "SEARCH16") {
                
                this.bSLIP_CLOS = false;
                
            // 귀속부서별, 계정의 원가구분별 매핑되는 코스트센터 조회
            } else if (sMethodName == "SEARCH17") {
        		
            } else if (sMethodName == "SAVE00") {
            
                this.mskSHRSLIP_NUMB.set_value(this.sSLIP_NUMB);
                this.fnc_Message("TMM103"); //정상 종료 Message

                if (this.fnc_Length(this.fnc_Trim(this.sSLIP_NUMB)) > 0) this.fn_Search();
        	
        	// 전자결재 연동자료 저장
            } else if (sMethodName == "SAVE99") {
            	
        		this.dsTA_SLIPXM.setColumn(this.dsTA_SLIPXM.rowposition, "APPR_DOCN", this.sAPPR_DOCN);
        		this.dsTA_SLIPXM.applyChange();
        		
        		this.sAPPR_GUBN = "createDoc";
        		this.fn_GwApprProcess(this.sAPPR_GUBN);
        	
        	// 전자결재 GW 전송
            } else if (sMethodName == "sendApproval") {

        		if (this.sAPPR_GUBN == "createDoc") {
        			this.fnc_ShowApproval(this.sAPPR_GUBN, this.dsTM_APPROVAL.getColumn(0, "documentID"), this.dsTM_APPROVAL.getColumn(0, "documentType"));
        		}
        			
        		this.fn_Search();
            
            } else if (sMethodName == "GetCommCode") {
            
                var arrParam = new Array();
                    arrParam[0]  = "COMBO,cmbACCT_UNIT,dsACCT_UNIT,0";
                    arrParam[1]  = "COMBO,cmbAPPS_CODE,dsAPPS_CODE,0";
                    arrParam[2]  = "COMBO,cmbBUDG_GUBN,dsBUDG_GUBN,0";          
                    arrParam[3]  = "COMBO,cmbCURR_GUBN,dsCURR_GUBN,0";
                    arrParam[4]  = "COMBO,cmbEVID_DOCU,dsEVID_DOCU,0";
                    arrParam[5]  = "COMBO,cmbBANK_INOU,dsBANK_INOU,0";
                    arrParam[6]  = "COMBO,cmbLEDG_GUBN,dsLEDG_GUBN,0";
                    arrParam[7]  = "COMBO,Tab0.TabD2.cmbVATX_GUBN,dsVATX_GUBN,0";
                    arrParam[8]  = "COMBO,Tab0.TabD2.cmbVATX_TYPE,dsVATX_TYPE,0";
                    arrParam[9]  = "COMBO,Tab0.TabD2.cmbPURC_GUBN,dsPURC_GUBN,0";
                    arrParam[10] = "COMBO,Tab0.TabD2.cmbBULG_GUBN,dsBULG_GUBN,0";
                    arrParam[11] = "COMBO,Tab0.TabD2.cmbEBIL_GUBN,dsEBIL_GUBN,0";
                    arrParam[12] = "GRID,Tab0.TabD1.grdTA_SLIPRF,dsINPT_GUBN,INPT_GUBN";
                    arrParam[13] = "GRID,Tab0.TabD1.grdTA_SLIPRF,dsDRCR_YSNO,DRCR_YSNO";
                    arrParam[14] = "GRID,grdTA_SLIPNT,dsEVID_DOCU,EVID_DOCU";
                this.fnc_CommonCodeInnerBind(arrParam);
                
                //사용중인 것만 표시
                this.dsBUDG_GUBN.filter("USEX_YSNO != '0'");
                
            } else if (sMethodName == "GetUserComboCode") {
            
                var arrParam = new Array();
                    arrParam[0] = "COMBO,cmbSLIP_GUBN,dsSLIP_GUBN,0";
                this.fnc_UserComboInnerBind(arrParam);

            }

        }

        /* ------------------------------------------------------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         |  전표 해더!! 상태에 따른 입력란 제어
         +-------------------------------------------------------------------------------------*/
         this.fn_KeyFieldDisible = function (obj,e) {
        	
        	this.fn_SlipAmnt_Changeed();
        	
        	if (e.newrow < 0) return;
          
        //  trace(" =============== fn_KeyFieldDisible : " + obj.name + " / " + e.newrow);
        	//trace("APPS_CODE : " + this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "APPS_CODE") + " " + obj.getColumn(e.newrow, "APPR_STAT"));
          
            // 조회 결과가 없는 경우 초기화를 위해 최초 선언
            this.btnCopy.set_visible(false); 		//전표복사
            this.btn_APPRCANCEL.set_visible(false); //전표 승인/취소
            this.staACCT_DATE1.set_visible(false);
            this.calACCT_DATE1.set_visible(false);

            this.btnSendGW.set_enable(false);      //결재상신
            this.btnCancGW.set_enable(false);      //결재취소
            this.btnSearchDoc.set_enable(false);   //문서보기
            this.btnAttachDoc.set_enable(false);   //문서파일첨부
        	
            //임시저장 상태 - 결재상신 가능
            if (obj.getColumn(e.newrow, "APPS_CODE") == "0" || obj.getColumn(e.newrow, "APPR_STAT") == "N") {
        		
        		this.btnSendGW.set_enable(true); 
            
            //결재대기 상태 - 결재취소 가능
            } else if (obj.getColumn(e.newrow, "APPS_CODE") == "1" || obj.getColumn(e.newrow, "APPR_STAT") == "T") {
        	
        		this.btnCancGW.set_enable(true);
        	
        	} else {
        		
        		//결재문서번호 존재 - 문서보기 가능
        		if (this.fnc_Length(obj.getColumn(e.newrow, "APPR_DOCN")) > 0) {
        			this.btnSearchDoc.set_enable(true);
        			
        			//GW 결재완료 - 문서파일첨부 가능
        			if (obj.getColumn(e.newrow, "GWAP_STAT") == "Y") {
        				this.btnAttachDoc.set_enable(true);
        			}
        		}
        		
        	} 
            
            this.btnPrint02.set_visible(false);     //증빙인쇄
        	
            this.fnc_SetReadonly(this.calSLIP_DATE, true); //작성일자
            this.fnc_SetReadonly(this.edtTITL_NAME, true); //제목
            this.fnc_SetReadonly(this.cmbACCT_UNIT, true); //회계단위
            this.fnc_SetReadonly(this.cmbSLIP_GUBN, true); //전표종류
            this.fnc_SetReadonly(this.calACCT_DATE, true); //회계일자
            this.fnc_SetReadonly(this.grdTA_SLIPNT, true); //분개목록
            
            if (e.newrow < 0) return;
            
            /* 수기전표 신규저장 시에만 전표종류 선택 가능 */
            this.dsSLIP_GUBN.filter("");
            if (this.dsTA_SLIPXM.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT) {      
                this.dsSLIP_GUBN.filter("SLIP_TYCD == 'MANU' || COMB_NAME == ''");
                this.fnc_SetReadonly(this.cmbSLIP_GUBN, false); //전표종류  
            }
            
            //수정가능하면 enablle 한다.
            if (this.fn_IsUpdateOK()) {
                
                this.fnc_SetReadonly(this.edtTITL_NAME, false); //제목
                this.fnc_SetReadonly(this.grdTA_SLIPNT, false);	//분개목록
                
        		//관리자권한 - 회계일자 수정가능
                if (this.sUSERLAVEL == "1") this.fnc_SetReadonly(this.calACCT_DATE, false); //회계일자
            }
            
            if (this.sLOAD_FORM == "NEW") this.btnCopy.set_visible(true);
            
            this.fn_Search_Rate();

        }

        /*-----------------+
         |  팝업 Setting  |
         +-----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            //trace(" =============== fn_HelpDialoge : " + obj.name);
            
            var arrParam = new Array();

            if ((obj.name == "imgHelpDEPT_COD1") || (obj.name == "edtDEPT_NAM1")) {
        		
                arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtDEPT_NAM1.value); 
                arrParam[3] = "Y";
                arrParam[4] = "edtDEPT_NAM1";
                arrParam[5] = "edtUSEX_DEPT,edtDEPT_NAM1";
                arrParam[6] = "0,1";
                arrParam[9] = "fn_HelpPost_DeptCode";
                
            } else if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
           
                arrParam[0] = "FAM0011";                                
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHREMPL_NAME";                         
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
                arrParam[6] = "0,1";
              
            } else if ((obj.name == "imgHelpACCT_INTL") || (obj.name == "edtACCT_NAME")) {
            
                arrParam[0] = "FAM0030"; //NDS 농심기획 전용
                arrParam[1] = this.calSLIP_DATE.value + "," + this.edtDEPT_CODE.value;	//작성부서
                arrParam[2] = this.fnc_Trim(this.edtACCT_NAME.value); 
                arrParam[3] = "Y";                                       
                arrParam[4] = "edtACCT_NAME";   
                arrParam[5] = "edtACCT_INTL,edtACCT_NAME";
                arrParam[6] = "0,1";
                arrParam[9] = "fn_HelpPost_AcctIntl";
                
            } else if ((obj.name == "imgHelpCUST_CODE") || (obj.name == "edtCUST_NAME")) {
            
                arrParam[0] = "FAM0021";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.Tab0.TabD2.edtCUST_NAME.value); 
                arrParam[3] = "Y";
                arrParam[4] = "Tab0.TabD2.edtCUST_NAME";   
                arrParam[5] = "Tab0.TabD2.edtCUST_CODE,Tab0.TabD2.edtCUST_NAME";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpBDSB_CODE") || (obj.name == "edtBDSB_NAME")) {
                
                if (this.fnc_Length(this.fnc_Trim(this.edtACCT_INTL.value)) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "계정과목", "", "", this.edtACCT_NAME, "");
                }
                
                arrParam[0] = "BDM0007";
                arrParam[1] = this.fnc_Trim(this.edtACCT_INTL.value);
                arrParam[2] = this.fnc_Trim(this.edtBDSB_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtBDSB_NAME";
                arrParam[5] = "edtBDSB_CODE,edtBDSB_NAME";
                arrParam[6] = "0,1";
                arrParam[9] = "fn_Search_BudgAmnt"; //예산잔액

            } else if ((obj.name == "imgHelpCSTC_CODE") || (obj.name == "edtCSTC_NAME")) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.edtUSEX_DEPT.value)) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "귀속부서", "", "", this.edtDEPT_NAM1, "");
        		}
        		
                var iAcctRow 	= this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL"));
                var sCost_Gubn 	= this.dsTA_ACCTXM.getColumn(iAcctRow, "COST_GUBN");

                if (sCost_Gubn == "10") {	//NDS 농심기획 전용
        			arrParam[0] = "BDM0009";
                } else {
        			arrParam[0] = "BDM0010";
                }
        		
                arrParam[1] = this.calSLIP_DATE.value + ",8,8,8," + this.edtUSEX_DEPT.value;
                arrParam[2] = this.fnc_Trim(this.edtCSTC_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtCSTC_NAME";
                arrParam[5] = "edtCSTC_CODE,edtCSTC_NAME";
                arrParam[6] = "0,1";
                arrParam[9] = "fn_Search_BudgAmnt"; //예산잔액
                 
            // 입력(관리코드등록) - 관리코드(Popup)
            } else if (obj.name == "grdTA_SLIPRF") {
                
                if (this.Tab0.TabD1.grdTA_SLIPRF.readonly == true) return;
                
                if (sColumnID == "COND_VANM" || this.fnc_getGridHelpColName(obj, sFromDs) == "COND_VANM") {
                
        			var iRow = this.dsTA_SLIPRF.rowposition;
                    var sComb_Idxx = this.dsTA_SLIPRF.getColumn(iRow, "COMB_IDXX");
                    var sComm_Code = this.dsTA_SLIPRF.getColumn(iRow, "COMM_CODE");
                    var sCond_Code = this.dsTA_SLIPRF.getColumn(iRow, "COND_CODE");
        			
                    if (this.fnc_Length(this.fnc_Trim(sComb_Idxx)) < 1) return;
        			
                    arrParam[0] = sComb_Idxx;
                    arrParam[1] = (sCond_Code == "0001" || sCond_Code == "0064" ? this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL") 
        																  + "," + this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL") : sComm_Code);
                    arrParam[2] = "COND_VANM";
                    arrParam[3] = "Y";
                    arrParam[4] = "Tab0.TabD1.grdTA_SLIPRF";
                    arrParam[5] = "COND_VACD,COND_VANM";
                    arrParam[6] = (sCond_Code == "0001") ? "2,3" : "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;
                    if (sCond_Code == "0001" || sCond_Code == "0064") arrParam[9] = "fn_HelpPost_Bank_Acnt";
                    
                }
                    
            }
            
            if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
            
        }

        /*----------------------------------------------------------------------------------+
         |  귀속부서별 계정별로 매핑되는 코스트센터가 1개인 경우 [코드 + ',' + 명칭] 리턴	|
         +----------------------------------------------------------------------------------*/
        this.fn_SetCostCenter = function () {
        	
        	this.sCSTC_CDNE = "";
        	
            var sMethodName = "SEARCH17";
            var sInDataSet  = "";
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
        	//trace(" <<< sCSTC_CDNE >>> " + this.sCSTC_CDNE);
        	
        	if (this.fnc_Length(this.fnc_Trim(this.sCSTC_CDNE)) > 0 && this.edtCSTC_NAME.readonly == false) {
        		
        		var arrCstc = this.fnc_Split(this.sCSTC_CDNE, ",");	//귀속부서별 계정별로 매핑되는 코스트센터가 1개인 경우 [코드 + ',' + 명칭] 리턴 
        		
        		this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "CSTC_CODE", arrCstc[0]);
        		this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "CSTC_NAME", arrCstc[1]);

        	} else {
        	
        		this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "CSTC_CODE", "");
        		this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "CSTC_NAME", "");

        	}
        }

        /*------------------+
         | 귀속부서 변경 시	|
         +------------------*/
        this.fn_HelpPost_DeptCode = function (sRtn) {
        	
        	if (this.fnc_Length(this.fnc_Trim(sRtn)) < 1) return;
        	var arrRtn = this.fnc_Split(sRtn, ",");
        	
        	this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "USEX_DEPT", arrRtn[0]);
        	this.fn_SetCostCenter();	// 코스트센터 셋팅
        	
        }

        /*----------------------+
         |  계정과목 변경 시	|
         +----------------------*/
        this.fn_HelpPost_AcctIntl = function (sRtn) {
        	
        	if (this.fnc_Length(this.fnc_Trim(sRtn)) < 1) return;	
        	var arrRtn = this.fnc_Split(sRtn, ",");

        	this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL", arrRtn[0]);	
        	this.fn_Acct_Intl_Changed();
        	this.fn_SetCostCenter();	// 코스트센터 셋팅

        }

        /*--------------------------------------+
         |  금융기관, 계좌번호 관리항목 매핑	|
         +--------------------------------------*/
        this.fn_HelpPost_Bank_Acnt = function (sRtn) {
        	
        	if (this.fnc_Length(this.fnc_Trim(sRtn)) < 1) return;
        	
        	var arrRtn = this.fnc_Split(sRtn, ",");
        	
        	var sSlip_Line = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");
        			
        	var iAcntRow = this.dsTA_SLIPRF.findRowExpr("SLIP_LINE == '" + sSlip_Line + "' && COND_CODE == '0064'");
        	var iBankRow = this.dsTA_SLIPRF.findRowExpr("SLIP_LINE == '" + sSlip_Line + "' && COND_CODE == '0001'");
        	
        	this.dsTA_SLIPRF.set_enableevent(false);
        	
        	if (iAcntRow >= 0) {	//계좌번호 관리항목 셋팅
        		this.dsTA_SLIPRF.setColumn(iAcntRow, "COND_VACD", arrRtn[0]);
        		this.dsTA_SLIPRF.setColumn(iAcntRow, "COND_VANM", arrRtn[1]);
        	}
        	
        	if (iBankRow >= 0) {	//금융기관 관리항목 셋팅
        		this.dsTA_SLIPRF.setColumn(iBankRow, "COND_VACD", arrRtn[2]);
        		this.dsTA_SLIPRF.setColumn(iBankRow, "COND_VANM", arrRtn[3]);
        	}

        	this.dsTA_SLIPRF.set_enableevent(true);
        	
        }

        /*--------------+
         |  계정과목	|
         +--------------*/
        this.fn_Search_ACCT_INTL = function () {

            this.fnc_DatasetClear("dsTA_ACCTXM");
            var sMethodName = "SEARCH10";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_ACCTXM=dsTA_ACCTXM ";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        }

        /*---------------------------------------+
         |  계정과목 관리항목                  |
         +---------------------------------------*/
        this.fn_Search_ACCT_COND_CODE = function () {

            this.fnc_DatasetClear("dsTA_ACCTXD");
            var sMethodName = "SEARCH11";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_ACCTXD=dsTA_ACCTXD ";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", true);

        }

        /*---------------------------------------+
         |  환율정보조회                     |
         +---------------------------------------*/
        this.fn_Search_Rate = function (obj) {

            if (this.dsTA_SLIPXM.rowcount == 0) return;
            if (this.fnc_IsDate(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE")) == false) return;

            this.fnc_DatasetClear("dsTA_EXRTXM");
            var sMethodName = "SEARCH14";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_EXRTXM=dsTA_EXRTXM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            this.grdTA_SLIPNT.setFocus();
            
        }

        
        /*--------------------------------------+
         |  예산잔액 조회
         +---------------------------------------*/
        this.fn_Search_BudgAmnt = function(sResponse) {
            
            this.dsTA_SLIPNT.set_enableevent(false);
            this.dsTA_SLIPNT.set_updatecontrol(false);
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "BUDG_AMNT", "");
            this.dsTA_SLIPNT.set_updatecontrol(true);
            this.dsTA_SLIPNT.set_enableevent(true);
            
            if (this.dsTA_SLIPXM.rowcount == 0) return;
            if (this.fnc_IsDate(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE")) == false) return;
            
            var iAcctRow = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL"));
            if (this.dsTA_ACCTXM.getColumn(iAcctRow, "BUDG_YSNO") != 1) return;     // 예산 계정과목 아니면 동작하지 않는다.
            if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "CSTC_CODE"))) < 1 ) return;
            if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BUDG_GUBN"))) < 1 ) return; 
            if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BDSB_CODE"))) < 1 ) return;
            
            this.fnc_DatasetClear("dsBUDG_AMNT");
            var sMethodName = "SEARCH15";
            var sInDataSet  = "";
            var sOutDataSet = "dsBUDG_AMNT=dsBUDG_AMNT";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
            this.dsTA_SLIPNT.set_enableevent(false);
            this.dsTA_SLIPNT.set_updatecontrol(false);
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "BUDG_AMNT", nexacro.toNumber(this.dsBUDG_AMNT.getColumn(0, "BUDG_AMNT"), 0));
            this.dsTA_SLIPNT.set_updatecontrol(true);
            this.dsTA_SLIPNT.set_enableevent(true);
                    
        }

        /*---------------------------------------+
         |  마감여부조회                     |
         +---------------------------------------*/
        this.fn_Search_SLIPCLOSE = function (obj) {

            // 전표M 가 없으면 안됨
            if (this.dsTA_SLIPXM.getRowCount == 0) return;
            
            // 전표일자가 없으면 안됨
            if (this.fnc_IsDate(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE")) == false) return;

            var sMethodName = "SEARCH16";
            var sInDataSet  = "";
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            this.edtTITL_NAME.setFocus(); 

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*----------------------------------------------------------------+
         |  전표세부내역 추가시 체크항목        |
         +-----------------------------------------------------------------*/
        this.fn_AddRowCheck = function () {
            
            //수정가능확인한다.
            if (!this.fn_IsLineUpdateOK("INS")) {
                this.fnc_Message("TMM300", "선택한 전표는 행추가할 수 없습니다.");
                return false;
            }

            // Head Data가 없을 경우는 존재 할 수 없음
            if (this.dsTA_SLIPXM.rowcount < 1) {
                this.fnc_Message("TMM300", "입력 버튼을 먼저 선택해야 합니다.");
                return false;
            }

        	if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(0, "TITL_NAME"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "제목", this.dsTA_SLIPXM, 0, this.edtTITL_NAME, "TITL_NAME");
        	}
        	
            return true;
            
        }
        /*----------------------------------------------------------------+
         |  전표세부내역 삭제시 체크항목        |
         +-----------------------------------------------------------------*/
        this.fn_DelRowCheck = function (Obj) {

            //수정가능확인한다.
            if (this.fn_IsLineUpdateOK("DEL") != true) {
                this.fnc_Message("TMM300", "선택한 전표는 행삭제할 수 없습니다.");
                return false;
            }

            if (this.dsTA_SLIPNT.rowposition < 0) {
                this.fnc_Message("TMM300", "삭제할 행을 먼저 선택해야 합니다.");
                return false;
            }
            
            if (!this.fnc_Message('TMM002', "행번호:" + this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE"))) {
                return false;
            }

            return true;
            
        }

        /*----------------------------------------------------------------+
         |  전표세부내역 행삽입시 체크항목        |
         +-----------------------------------------------------------------*/
        this.fn_InsertRowCheck = function () {

            //수정가능확인한다.
            if (!this.fn_IsLineUpdateOK("INS")) {
                this.fnc_Message("TMM300", "선택한 전표는 행삽입할 수 없습니다.");
                return false;
            }

            // Head Data가 없을 경우는 존재 할 수 없음
            if (this.dsTA_SLIPXM.rowcount < 1) {
                this.fnc_Message("TMM300", "입력 버튼을 먼저 선택해야 합니다.");
                return false;
            }

            return true;
            
        }

        /*---------------------------------------+
         |  계정변경시 처리                    |
         +---------------------------------------*/
        this.fn_Acct_Intl_Changed = function () {
            
            var iRow = this.dsTA_SLIPNT.rowposition;
            
            // 계정이 바뀐경우 원본 정보를 초기화 한다.
        	this.dsTA_SLIPNT.setColumn(iRow, "CSTC_CODE", "");
        	this.dsTA_SLIPNT.setColumn(iRow, "CSTC_NAME", "");
        	this.dsTA_SLIPNT.setColumn(iRow, "BUDG_GUBN", "");
        	this.dsTA_SLIPNT.setColumn(iRow, "BDSB_CODE", "");
        	this.dsTA_SLIPNT.setColumn(iRow, "BDSB_NAME", "");
        	
            this.dsTA_SLIPNT.setColumn(iRow, "CURR_GUBN", "KRW");
        	this.dsTA_SLIPNT.setColumn(iRow, "EXCH_RATE", 1);
            this.dsTA_SLIPNT.setColumn(iRow, "FORI_AMNT", 0);
            this.dsTA_SLIPNT.setColumn(iRow, "SLIP_AMNT", 0);
            //this.dsTA_SLIPNT.setColumn(iRow, "REMK_NAME", "");
            this.dsTA_SLIPNT.setColumn(iRow, "EVID_DOCU", "");
            this.dsTA_SLIPNT.setColumn(iRow, "PAYX_YSNO", "0");
            this.dsTA_SLIPNT.setColumn(iRow, "PAYX_DATE", "");
            this.dsTA_SLIPNT.setColumn(iRow, "LEDG_GUBN", "");
            this.dsTA_SLIPNT.setColumn(iRow, "OSLI_NUMB", "");
            this.dsTA_SLIPNT.setColumn(iRow, "OSLI_LINE", "");
            this.dsTA_SLIPNT.setColumn(iRow, "OSLI_DISP", "");
            
            
            this.Tab0.TabD1.grdTA_SLIPRF.set_enableredraw(false);
            
            this.dsTA_SLIPRF.filter("SLIP_LINE==" + this.fnc_Quote(this.dsTA_SLIPNT.getColumn(iRow, "SLIP_LINE")));
            this.dsTA_SLIPRF.deleteAll(); 	//관리항목 삭제
            
            this.dsTA_VATXXM.deleteAll();	//부가세 삭제
            
            this.fn_SlipAmnt_Changeed();	//합계금액 처리

            var iAcctRow = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(iRow, "ACCT_INTL"));	//계정코드 확인    
            if (iAcctRow < 0) return; 		//계정코드 없으면 관리항목, 증빙세부 처리하지 않는다.
        	this.dsTA_SLIPNT.setColumn(iRow, "DRCR_GUBN", this.dsTA_ACCTXM.getColumn(iAcctRow, "DRCR_GUBN") );	//차대구분 셋팅

            this.fn_dsTA_SLIPRF_Add();		//관리항목 추가
            
            this.dsTA_SLIPNT_onrowposchanged();
            
            this.Tab0.TabD1.grdTA_SLIPRF.set_enableredraw(true);
            
        }

        /* -----------------------------------------+
         |  계정과목 필수 사용여부 항목에 따라
         |  화면및기본값 표시
         +-----------------------------------------*/

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*********    버튼처리  **********************************************/
        /*--------------------+
         |  전표상세내역 추가 |
         +--------------------*/
        this.btn_AddRow_onclick = function (obj,e) {
            
            //trace(" ============== btn_AddRow_onclick start ");
            if (!this.fn_AddRowCheck()) return;
            
            var sSlip_Numb  = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB");
            var sRemk_Name 	= this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "TITL_NAME");
            var sUsex_Dept 	= application.GBL_DEPTCD;
            var sDept_Name 	= application.GBL_DEPTNM;
            
            var iRow        = this.dsTA_SLIPNT.addRow();
            var iPreRow 	= iRow - 1;	//이전로우
            var sSlip_Line  = this.fn_Slip_Line_Max();
            
            this.dsTA_SLIPNT.setColumn(iRow, "CRUD_TYPE", "INS");       // CRUD TYPE(INS,UPD) 
            this.dsTA_SLIPNT.setColumn(iRow, "SLIP_NUMB", sSlip_Numb);  // 전표번호 
            this.dsTA_SLIPNT.setColumn(iRow, "SLIP_LINE", sSlip_Line);  // 전표라인번호 
            this.dsTA_SLIPNT.setColumn(iRow, "SORT_ORDR", nexacro.toNumber(sSlip_Line)); // 정렬순서 
            
            this.cmbCURR_GUBN.set_index(1); // 통화구분 
            this.mskEXCH_RATE.set_value(1); // 환율
            this.cmbCURR_GUBN_onitemchanged();  // 환율조회
            
            if (iRow > 0) {
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iPreRow, "USEX_DEPT"))) > 0) {
        			sUsex_Dept = this.dsTA_SLIPNT.getColumn(iPreRow, "USEX_DEPT");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iPreRow, "USEX_DEPT"))) > 0) {
        			sDept_Name = this.dsTA_SLIPNT.getColumn(iPreRow, "DEPT_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iPreRow, "REMK_NAME"))) > 0) {
        			sRemk_Name = this.dsTA_SLIPNT.getColumn(iPreRow, "REMK_NAME");
        		}
            }
            
            this.dsTA_SLIPNT.setColumn(iRow, "USEX_DEPT", sUsex_Dept);	//부서
            this.dsTA_SLIPNT.setColumn(iRow, "DEPT_NAME", sDept_Name);	//부서명
            this.dsTA_SLIPNT.setColumn(iRow, "REMK_NAME", sRemk_Name);	//적요
            
            this.edtACCT_NAME.setFocus();
            
        }

        /*--------------------+
         |  전표상세내역 삭제 |
         +--------------------*/
        this.btn_DelRow_onclick = function (obj,e) {

            //trace(" ============== btn_DelRow_onclick start ");
            if (!this.fn_DelRowCheck()) return;

            this.dsTA_VATXXM.deleteAll();	//증빙세부 삭제
            
            
            this.dsTA_SLIPRF.deleteAll();	//관리항목 삭제
            
            //현재행이 마지막행이 아니면 삭제후에 rowposition chenge 하지 않는다.
            //그래서 삭제전에 현재행을 저장하고 삭제후에 비교한다.
            var iCurRow = this.dsTA_SLIPNT.rowposition;
            
            //선택행을 삭제한다.
            var bSucc = this.dsTA_SLIPNT.deleteRow(this.dsTA_SLIPNT.rowposition);

            trace(" ============== btn_DelRow_onclick bSucc " + bSucc);
            
            // 합계 금액을 다시 조회한다.
            this.fn_SlipAmnt_Changeed();
            
            if (iCurRow == this.dsTA_SLIPNT.rowposition) {
                this.dsTA_SLIPNT_onrowposchanged(this.dsTA_SLIPNT);
            }
            
        }

        /*--------------------+
         |  전표상세내역 삽입 |
         +--------------------*/
        this.btn_InsertRow_onclick = function (obj,e) {

            //trace(" ============== btn_InsertRow_onclick start ");
            if (this.dsTA_SLIPNT.rowcount == 0) {
                this.btn_AddRow_onclick(obj, e);
                return;
            }

            if (!this.fn_AddRowCheck()) return;
            
            var sSlip_Numb  = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB");
            var sRemk_Name 	= this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "TITL_NAME");
            var sUsex_Dept 	= application.GBL_DEPTCD;
            var sDept_Name 	= application.GBL_DEPTNM;
            
            var iRow        = this.dsTA_SLIPNT.insertRow(this.dsTA_SLIPNT.rowposition);
            var iPreRow 	= iRow - 1;	//이전로우
            var sSlip_Line  = this.fn_Slip_Line_Max();
            
            this.dsTA_SLIPNT.setColumn(iRow, "CRUD_TYPE", "INS");       // CRUD TYPE(INS,UPD) 
            this.dsTA_SLIPNT.setColumn(iRow, "SLIP_NUMB", sSlip_Numb);   // 전표번호 
            this.dsTA_SLIPNT.setColumn(iRow, "SLIP_LINE", sSlip_Line);   // 전표라인번호 
            //this.dsTA_SLIPNT.setColumn(iRow, "SORT_ORDR", nexacro.toNumber(sSlip_Line)); // 정렬순서
            // 정렬순서 재계산
        	for (var i = iRow; i < this.dsTA_SLIPNT.rowcount; i++) {
                this.dsTA_SLIPNT.setColumn(i, "SORT_ORDR", nexacro.toNumber(this.dsTA_SLIPNT.getColumn(i - 1, "SORT_ORDR"), 0) + 1);
        	}
            
            this.cmbCURR_GUBN.set_index(1); // 통화구분 
            this.mskEXCH_RATE.set_value(1); // 환율 
            this.cmbCURR_GUBN_onitemchanged();  // 환율조회
            
            if (iRow > 0) {
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iPreRow, "USEX_DEPT"))) > 0) {
        			sUsex_Dept = this.dsTA_SLIPNT.getColumn(iPreRow, "USEX_DEPT");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iPreRow, "USEX_DEPT"))) > 0) {
        			sDept_Name = this.dsTA_SLIPNT.getColumn(iPreRow, "DEPT_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iPreRow, "REMK_NAME"))) > 0) {
        			sRemk_Name = this.dsTA_SLIPNT.getColumn(iPreRow, "REMK_NAME");
        		}
            }
            
            this.dsTA_SLIPNT.setColumn(iRow, "USEX_DEPT", sUsex_Dept);	//부서
            this.dsTA_SLIPNT.setColumn(iRow, "DEPT_NAME", sDept_Name);	//부서명
            this.dsTA_SLIPNT.setColumn(iRow, "REMK_NAME", sRemk_Name);	//적요
            
            this.edtACCT_NAME.setFocus();
            
        }

        /*--------------------+
         |  전표상세내역 복사 |
         +--------------------*/
        this.btn_CopyRow_onclick = function (obj,e) {
        	
            if (this.dsTA_SLIPNT.rowcount == 0){
                this.fnc_Message("FAM004");  // 복사할 행이 없습니다. 복사할행을 선택 하시고 진행하시기 바랍니다!.
                return;
            } 
                
            var sSlip_Numb  = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB");
            var iRow        = this.dsTA_SLIPNT.rowposition;
            var nRow        = this.dsTA_SLIPNT.addRow();       //Record Add
            var sSlip_Line  = this.fn_Slip_Line_Max();
            
            //행복사
            this.dsTA_SLIPNT.copyRow(nRow, this.dsTA_SLIPNT, iRow);
            
            //초기화
            this.dsTA_SLIPNT.setColumn(nRow, "CRUD_TYPE", "INS");       // CRUD TYPE(INS,UPD) 
            this.dsTA_SLIPNT.setColumn(nRow, "SLIP_NUMB", sSlip_Numb);  // 전표번호 
            this.dsTA_SLIPNT.setColumn(nRow, "SLIP_LINE", sSlip_Line);  // 전표라인번호 
            this.dsTA_SLIPNT.setColumn(nRow, "SORT_ORDR", nexacro.toNumber(sSlip_Line)); // 정렬순서 
            
            this.dsTA_SLIPNT.setColumn(nRow, "OSLI_DISP", "");      // 발생전표번호 + 라인번호
            this.dsTA_SLIPNT.setColumn(nRow, "OSLI_DATE", "");      // 발생전표일자
            this.dsTA_SLIPNT.setColumn(nRow, "OSLI_NUMB", "");      // 발생전표번호
            this.dsTA_SLIPNT.setColumn(nRow, "OSLI_LINE", "");      // 발생전표라인번호
            this.dsTA_SLIPNT.setColumn(nRow, "SEND_KEY1", "");      // BICNET전송키1
            this.dsTA_SLIPNT.setColumn(nRow, "SEND_KEY2", "");      // BICNET전송키2
            this.dsTA_SLIPNT.setColumn(nRow, "SLCT_CODE", "");      // 전표통제유형코드
            
            // 관리항목을 추가시킨다.
            this.fn_Acct_Intl_Changed();
            
            // 코스트센터 복사
            if (this.edtCSTC_NAME.enable && this.edtCSTC_NAME.readonly == false) {
                var sCstc_Code = this.dsTA_SLIPNT.getColumn(iRow, "CSTC_CODE");
                var sCstc_Name = this.dsTA_SLIPNT.getColumn(iRow, "CSTC_NAME");
                
                this.dsTA_SLIPNT.setColumn(nRow, "CSTC_CODE", sCstc_Code);      // 코스트센터코드
                this.dsTA_SLIPNT.setColumn(nRow, "CSTC_NAME", sCstc_Name);      // 코스트센터명
            }

            // 예산 복사
            if (this.cmbBUDG_GUBN.enable && this.cmbBUDG_GUBN.readonly == false) {
                var sBudg_Gubn = this.dsTA_SLIPNT.getColumn(iRow, "BUDG_GUBN");
                var sBdsb_Code = this.dsTA_SLIPNT.getColumn(iRow, "BDSB_CODE");
                var sBdsb_Name = this.dsTA_SLIPNT.getColumn(iRow, "BDSB_NAME");
                
                this.dsTA_SLIPNT.setColumn(nRow, "BUDG_GUBN", sBudg_Gubn);      // 예산구분
                this.dsTA_SLIPNT.setColumn(nRow, "BDSB_CODE", sBdsb_Code);      // 예산과목코드
                this.dsTA_SLIPNT.setColumn(nRow, "BDSB_NAME", sBdsb_Name);      // 예산과목명
            }
            
        }

        /*----------------------------------------------------------------+
         |  전표행 max 
         +-----------------------------------------------------------------*/
        this.fn_Slip_Line_Max = function () {

            //trace(" ============== fn_Slip_Line_Max start "); 
            var sSlip_Line = this.dsTA_SLIPNT.getMax("SLIP_LINE");
            if (this.fnc_Length(this.fnc_Trim(sSlip_Line)) < 1) {
                sSlip_Line = "0001";
            } else {
                sSlip_Line = this.fnc_LPad(nexacro.toNumber(sSlip_Line) + 1, "0",4);
            } 

            return sSlip_Line;
            
        }

        /*----------------------------------------------------------------+
         |  // 합계금액처리 |
         +-----------------------------------------------------------------*/
        this.fn_SlipAmnt_Changeed = function () {

            if (this.dsTA_SLIPNT.rowcount <= 0) {
                this.mskCHAX_AMNT.set_value("");
                this.mskDAEX_AMNT.set_value("");
                this.mskCHAX_DAEX.set_value("");
            } else {
                this.mskCHAX_AMNT.set_value(this.dsTA_SLIPNT.getCaseSum("DRCR_GUBN == 'D'", "SLIP_AMNT"));
                this.mskDAEX_AMNT.set_value(this.dsTA_SLIPNT.getCaseSum("DRCR_GUBN == 'C'", "SLIP_AMNT"));
                this.mskCHAX_DAEX.set_value((this.dsTA_SLIPNT.getCaseSum("DRCR_GUBN == 'D'", "SLIP_AMNT") - this.dsTA_SLIPNT.getCaseSum("DRCR_GUBN == 'C'", "SLIP_AMNT")));
            }
            
        }

        /*----------------------------------------------------------------+
         |  // 분개내역 변경 시 처리내역 |
         +-----------------------------------------------------------------*/
        this.dsTA_SLIPNT_oncolumnchanged = function (obj,e) {
            
            //trace("====================================== dsTA_SLIPNT_oncolumnchanged start : " + e.columnid);
            var iSlipRow = this.dsTA_SLIPNT.rowposition;
            
            //계정코드  
            if (e.columnid == "ACCT_INTL") {

        //		this.fn_Acct_Intl_Changed();
            
            } else if (e.columnid == "USEX_DEPT") {
        		
        // 		this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "CSTC_CODE", "");
        // 		this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "CSTC_NAME", "");

            } else if (e.columnid == "DRCR_GUBN")  {
                
                //차대구분이 변경되고 발생전표번호가 있으면 발생전표를 삭제해야 한다.
                if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iSlipRow, "OSLI_NUMB"))) > 0) {
                    this.btnOSLI_DEL_onclick();
                } else {
                    //관리항목 필터 
                    this.fn_dsTA_SLIPRF_Filter();
                }
                
                // 합계금액처리
                this.fn_SlipAmnt_Changeed();
                
                this.fn_OsilpOrBanje_Button_Visible();  //미결전표,발생전표
                
                //계정코드의 차대구분과 전표행의 차대구분이 다르면 증빙종류는 공란으로 처리한다.
                //계정코드를 확인한다.
                var iAcctRow = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(iSlipRow, "ACCT_INTL"));
                
                //계정코드 차대구분과 행의 차대구분이 다르면 증빙서류는 공란처리한다.
                if (iAcctRow >= 0) {
                    if (this.dsTA_ACCTXM.getColumn(iAcctRow, "DRCR_GUBN") != this.dsTA_SLIPNT.getColumn(iSlipRow, "DRCR_GUBN") )    {
                        this.dsTA_SLIPNT.setColumn(iSlipRow, "EVID_DOCU", "");

                        //증빙서류가 변경되면 무조건 증빙항목은 삭제한다.
                        this.dsTA_VATXXM.deleteAll();
                    }   
                }   
                
                //증빙세부를 결정한다.
                this.fn_TA_VATXXM_AddOrDelete();
                
                //증빙세부를 dsiable 한다.     
                this.fn_TA_VATXXM_disable();
                
                this.dsTA_SLIPNT_onrowposchanged();
                
            } else if (e.columnid == "CSTC_CODE" || e.columnid == "BUDG_GUBN" || e.columnid == "BDSB_CODE") {
                
                this.fn_Search_BudgAmnt();  //예산잔액

            } else if (e.columnid == "SLIP_AMNT") {
            
                // 합계금액처리
                this.fn_SlipAmnt_Changeed();
                
            } else if (e.columnid == "EXCH_RATE" || e.columnid == "FORI_AMNT") {
            
                var iAmt = 0;
                //if (this.dsTA_SLIPNT.getColumn(e.row, "CURR_GUBN") != "KRW") { // 원화가 아니면
                iAmt = Math.round(obj.getColumn(e.row, "EXCH_RATE") * this.dsTA_SLIPNT.getColumn(e.row, "FORI_AMNT"));
                this.dsTA_SLIPNT.setColumn(e.row, "SLIP_AMNT", iAmt);
                
                // 합계금액처리
                this.fn_SlipAmnt_Changeed();
                //}
                
            } else if (e.columnid == "EVID_DOCU") {
            
                //증빙서류가 변경되면 무조건 증빙항목은 삭제한다.
                this.dsTA_VATXXM.deleteAll();
                
                //증빙세부를 결정한다.
                this.fn_TA_VATXXM_AddOrDelete();
                        
                //증빙세부를 dsiable 한다.     
                this.fn_TA_VATXXM_disable();
            
            } else if (e.columnid == "PAYX_YSNO") {
                
                this.staPAYX_DATE.set_cssclass("styFormItemCap");
                this.staLEDG_GUBN.set_cssclass("styFormItemCap");
                
                var iAcctRow = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(e.row, "ACCT_INTL"));
                // 출납여부
                if (this.dsTA_ACCTXM.getColumn(iAcctRow, "CHUL_YSNO") == "1") {
                    if (e.newvalue == "1") {
                        this.staPAYX_DATE.set_cssclass("styFormItemCapBE");
                        this.staLEDG_GUBN.set_cssclass("styFormItemCapBE");
                    }
                }

            }
            
        }

        /*----------------------------------------------------------------+
         |  전표라인 이동후에 처리
         +-----------------------------------------------------------------*/
        this.dsTA_SLIPNT_onrowposchanged = function (obj,e) {

            if (this.dsTA_SLIPNT.rowposition < 0) return;
            
        	//trace("================== dsTA_SLIPNT_onrowposchanged start");
            //항목전체를DISABLE 한다.
            this.fnc_SetReadonly(this.grdTA_SLIPNT, true); //분개목록
            this.fnc_SetReadonly(this.mskSORT_ORDR, true); //정렬순서
            this.fnc_SetReadonly(this.edtDEPT_NAM1, true); //귀속부서
            this.fnc_SetReadonly(this.edtACCT_NAME, true); //계정과목
            this.fnc_SetReadonly(this.rdoDRCR_GUBN, true); //계정차대구분
            this.fnc_SetReadonly(this.cmbBUDG_GUBN, true); //예산구분
            this.fnc_SetReadonly(this.edtBDSB_NAME, true); //예산과목   
            this.fnc_SetReadonly(this.edtCSTC_NAME, true); //코스트센터  
            this.fnc_SetReadonly(this.cmbCURR_GUBN, true); //통화구분
            this.fnc_SetReadonly(this.mskEXCH_RATE, true); //환율
            this.fnc_SetReadonly(this.mskFORI_AMNT, true); //외화금액
            this.fnc_SetReadonly(this.edtREMK_NAME, true); //적요
            this.fnc_SetReadonly(this.cmbEVID_DOCU, true); //증빙서류
            this.fnc_SetReadonly(this.chkPAYX_YSNO, true); //출납처리여부
            this.fnc_SetReadonly(this.calPAYX_DATE, true); //출납예정일
            this.fnc_SetReadonly(this.cmbLEDG_GUBN, true); //출납방법
            
            this.staBUDG_GUBN.set_cssclass("styFormItemCap");   //예산구분
            this.staBDSB_CODE.set_cssclass("styFormItemCap");   //예산과목
            this.staCSTC_CODE.set_cssclass("styFormItemCap");   //코스트센터
            this.staEVID_DOCU.set_cssclass("styFormItemCap");	//증빙서류
            this.staPAYX_DATE.set_cssclass("styFormItemCap");   //출납예정일
            this.staLEDG_GUBN.set_cssclass("styFormItemCap");   //출납방법
            
            this.fnc_SetReadonly(this.Tab0.TabD1.grdTA_SLIPRF, true); //관리항목
            this.Tab0.TabD1.grdTA_SLIPRF.setCellProperty("Body", this.fnc_GridColumnIndex(this.Tab0.TabD1.grdTA_SLIPRF, "COND_VANM"), "background", "");
        	this.Tab0.TabD1.grdTA_SLIPRF.setCellProperty("Body", this.fnc_GridColumnIndex(this.Tab0.TabD1.grdTA_SLIPRF, "COND_VANM"), "background2", "");
        	
            this.btnBUDG_LIST.set_enable(false);   //예산잔액조회
            
            if (this.dsTA_SLIPNT.rowcount == 0) return;

            this.btn_AddRow.set_enable(false);     //라인추가
            this.btn_InsertRow.set_enable(false);  //라인삽입
            this.btn_CopyRow.set_enable(false);    //라인복사
            this.btn_DelRow.set_enable(false);     //라인삭제

            //계정코드를 확인한다.
            var iAcctRow        = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL"));
            var sAcct_Drcr_Gubn = this.dsTA_ACCTXM.getColumn(iAcctRow, "DRCR_GUBN");    //계정코드 차대구분
            var sSlip_Drcr_Gubn = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "DRCR_GUBN"); //전표행 차대구분
        //trace(iAcctRow + " " + sAcct_Drcr_Gubn +  " " + sSlip_Drcr_Gubn);
            //필수입력값 표시
            if (iAcctRow >= 0) {        
            
                //코스트센터사용 계정
                if (this.dsTA_ACCTXM.getColumn(iAcctRow, "CSUS_YSNO") == "1" && sAcct_Drcr_Gubn == sSlip_Drcr_Gubn) {
                    this.staCSTC_CODE.set_cssclass("styFormItemCapBE"); //코스트센터
                } 
                
                //예산관련 계정
                if (this.dsTA_ACCTXM.getColumn(iAcctRow, "BUDG_YSNO") == "1" && sAcct_Drcr_Gubn == sSlip_Drcr_Gubn) {
                    this.staBUDG_GUBN.set_cssclass("styFormItemCapBE"); //예산구분
                    this.staBDSB_CODE.set_cssclass("styFormItemCapBE"); //예산과목
                    this.btnBUDG_LIST.set_enable(true);    //예산잔액조회
                }
                
                //증빙사용계정
                if (this.dsTA_ACCTXM.getColumn(iAcctRow, "EVID_YSNO") == "1" && sAcct_Drcr_Gubn == sSlip_Drcr_Gubn) {
                    this.staEVID_DOCU.set_cssclass("styFormItemCapBE"); //증빙서류
                }
                
                // 출납여부
                if (this.dsTA_ACCTXM.getColumn(iAcctRow, "CHUL_YSNO") == "1") {
                    if (this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "PAYX_YSNO") == "1") {
                        this.staPAYX_DATE.set_cssclass("styFormItemCapBE");
                        this.staLEDG_GUBN.set_cssclass("styFormItemCapBE");
                    }
                }
                
            }
           
            if (this.fn_IsLineUpdateOK("INS")) {
                this.btn_AddRow.set_enable(true);    //라인추가
                this.btn_InsertRow.set_enable(true); //라인삽입
                this.btn_CopyRow.set_enable(true);   //라인복사
                this.fnc_SetReadonly(this.grdTA_SLIPNT, false); //분개목록
            }
            
            //수정가능하면 enablle 한다.
            var sDeleGubn = this.fn_IsLineUpdateOK("DEL");
            
            if (sDeleGubn == "MOD" || sDeleGubn == true) { 
            
                if (sDeleGubn == true) this.btn_DelRow.set_enable(true); //라인삭제
        		
        		this.fnc_SetReadonly(this.grdTA_SLIPNT, false); //분개목록
                this.fnc_SetReadonly(this.mskSORT_ORDR, false); //정렬순서
                this.fnc_SetReadonly(this.edtDEPT_NAM1, false); //귀속부서
                this.fnc_SetReadonly(this.edtACCT_NAME, false); //계정과목
                this.fnc_SetReadonly(this.rdoDRCR_GUBN, false); //계정차대구분
                
                if (iAcctRow >= 0) {
                
                    //예산관련 계정
                    if (this.dsTA_ACCTXM.getColumn(iAcctRow, "BUDG_YSNO") == "1" && sAcct_Drcr_Gubn == sSlip_Drcr_Gubn) {
                        this.fnc_SetReadonly(this.cmbBUDG_GUBN, false); //예산구분
                        
                        if (this.dsTA_SLIPNT.getRowType(this.dsTA_SLIPNT.rowposition) != Dataset.ROWTYPE_NORMAL) {
        					this.cmbBUDG_GUBN.set_index(1);
        				}
                        this.fnc_SetReadonly(this.edtBDSB_NAME, false); //예산과목
                    } else {
        				this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "BUDG_GUBN", "");
        				this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "BDSB_CODE", "");
        				this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "BDSB_NAME", "");
                    }
                    
                    //코스트센터사용 계정
                    if (this.dsTA_ACCTXM.getColumn(iAcctRow, "CSUS_YSNO") == "1" && sAcct_Drcr_Gubn == sSlip_Drcr_Gubn) {
                        this.fnc_SetReadonly(this.edtCSTC_NAME, false); //코스트센터
                    } else {
        				this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "CSTC_CODE", "");
        				this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "CSTC_NAME", "");
                    }
                    
                    //증빙사용계정
                    if (this.dsTA_ACCTXM.getColumn(iAcctRow, "EVID_YSNO") == "1" && sAcct_Drcr_Gubn == sSlip_Drcr_Gubn) {
                        this.fnc_SetReadonly(this.cmbEVID_DOCU, false); //증빙서류
                    }
                    
                    //외화사용  
                    if (this.dsTA_ACCTXM.getColumn(iAcctRow, "FNCR_YSNO") == "1") {
                        this.fnc_SetReadonly(this.cmbCURR_GUBN, false); //통화구분
                    }
                    
                }   
            
                //this.fnc_SetReadonly(this.cmbCURR_GUBN, false); //통화구분
                //this.fnc_SetReadonly(this.mskEXCH_RATE, false); //환율
                
                if (this.cmbCURR_GUBN.value == "KRW") { // 대한민국     
                    this.fnc_SetReadonly(this.mskEXCH_RATE, true);  //환율
                } else {
                    this.fnc_SetReadonly(this.mskEXCH_RATE, false);
                }
                
                this.fnc_SetReadonly(this.mskFORI_AMNT, false); //외화금액
                this.fnc_SetReadonly(this.edtREMK_NAME, false); //적요
                
                this.fnc_SetReadonly(this.chkPAYX_YSNO, false); //출납처리여부
                this.fnc_SetReadonly(this.calPAYX_DATE, false); //출납예정일
                this.fnc_SetReadonly(this.cmbLEDG_GUBN, false); //출납방법
                
                this.fnc_SetReadonly(this.Tab0.TabD1.grdTA_SLIPRF, false); //관리항목
                this.Tab0.TabD1.grdTA_SLIPRF.setCellProperty("Body", this.fnc_GridColumnIndex(this.Tab0.TabD1.grdTA_SLIPRF, "COND_VANM"), "background", "#ffff95ff");
                this.Tab0.TabD1.grdTA_SLIPRF.setCellProperty("Body", this.fnc_GridColumnIndex(this.Tab0.TabD1.grdTA_SLIPRF, "COND_VANM"), "background2", "#ffff95ff");
                
            }

            this.fn_dsTA_SLIPRF_Filter();   //관리항목
            this.fn_dsTA_VATXXM_Filter();   //증빙세부
            this.fn_OsilpOrBanje_Button_Visible();  //미결전표,발생전표
            
            this.fn_Search_BudgAmnt();      //예산잔액조회
        	
            //return;

        }

        
        /**************************************************************************************************
         *                                 관리항목 변경  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.dsTA_SLIPRF_oncolumnchanged = function (obj,e) {
            
            ////trace(" ================================================ dsTA_SLIPRF_oncolumnchanged srart ");
            if (e.columnid == "COND_VANM") {
                var sInpt_Gubn = this.dsTA_SLIPRF.getColumn(e.row, "INPT_GUBN");
                //팝업
                if (sInpt_Gubn == "HELP") {
                    this.fn_HelpDialoge(this.Tab0.TabD1.grdTA_SLIPRF, "YES", e.oldvalue, e.columnid);
                } else  {
                    this.dsTA_SLIPRF.setColumn(e.row, "COND_VACD", e.newvalue);
                }
            }

        }

        /*---------------------------------------+
         |  관리항목 필터                 |
         +---------------------------------------*/
        this.fn_dsTA_SLIPRF_Filter = function () {

            //trace("===== fn_dsTA_SLIPRF_Filter START ======");
            //this.Tab0.TabD1.grdTA_SLIPRF.set_enableredraw(false);

            //계정코드를 확인한다.
            var iAcctRow = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL"));

            var sFilterStr = "SLIP_LINE==" + this.fnc_Quote(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE"));

            //차대구분 확인한다.
            var sDRCR_GUBN = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "DRCR_GUBN");
        	     

            if (this.fnc_Length(this.fnc_Trim(sDRCR_GUBN)) > 0) {
                sFilterStr += " && (DRCR_TYPE == 'A' || DRCR_TYPE == " + this.fnc_Quote(sDRCR_GUBN) + ")";
            }
            
            ////trace(this.dsTA_ACCTXD.saveXML());
            //trace("===== fn_dsTA_SLIPRF_Filter sFilterStr ====== " + sFilterStr);

            //관리항목을 필터한다.
            this.dsTA_SLIPRF.filter(sFilterStr);

        	for (var i = 0; i < this.dsTA_SLIPRF.rowcount; i++) {
        		this.dsTA_SLIPRF.setColumn(i, "DRCR_GUBN", sDRCR_GUBN);	//차대구분 셋팅
        	}
        	
            this.Tab0.TabD1.grdTA_SLIPRF.set_enableredraw(true);
            
            //this.Tab0.TabD1.grdTA_SLIPRF.setFocus();
            
            //trace("===== fn_dsTA_SLIPRF_Filter END ======");
            
        }

        /*---------------------------------------+
         |  관리항목 추가/삭제               |
         +---------------------------------------*/
        this.fn_dsTA_SLIPRF_Add = function () {

            //trace("===== fn_dsTA_SLIPRF_AddOrDelete START ======");
            //계정코드를 확인한다.
            var iAcctRow = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL"));

            //계정코드 없으면 관리항목 처리하지 않는다.
            if (iAcctRow < 0) return;

            this.dsTA_ACCTXD.filter("ACCT_INTL==" + this.fnc_Quote(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL")));

            this.Tab0.TabD1.grdTA_SLIPRF.set_enableredraw(false);
            
            //관리항목을 추가한다.
            for (var i = 0;  i < this.dsTA_ACCTXD.rowcount; i++) {
                var iNewRow = this.dsTA_SLIPRF.addRow();
                
                this.dsTA_SLIPRF.setColumn(iNewRow, "SLIP_NUMB", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB"));
                this.dsTA_SLIPRF.setColumn(iNewRow, "SLIP_LINE", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE"));
        //         this.dsTA_SLIPRF.setColumn(iNewRow, "DRCR_GUBN", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "DRCR_GUBN"));	//차대구분 셋팅
        // trace(">>" + this.dsTA_SLIPRF.getColumn(iNewRow, "DRCR_GUBN"));        
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_CODE", this.dsTA_ACCTXD.getColumn(i, "COND_CODE"));   //관리항목코드
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_NAME", this.dsTA_ACCTXD.getColumn(i, "COND_NAME"));   //관리항목명
                this.dsTA_SLIPRF.setColumn(iNewRow, "CODE_SEQN", this.dsTA_ACCTXD.getColumn(i, "CODE_SEQN"));   //코드순번
                this.dsTA_SLIPRF.setColumn(iNewRow, "DRCR_YSNO", this.dsTA_ACCTXD.getColumn(i, "DRCR_YSNO"));   //차대필수여부
                this.dsTA_SLIPRF.setColumn(iNewRow, "UNUS_YSNO", this.dsTA_ACCTXD.getColumn(i, "UNUS_YSNO"));   //미불사용여부
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_KIND", this.dsTA_ACCTXD.getColumn(i, "COND_KIND"));   //관리항목입력형태[COND_KIND]
                this.dsTA_SLIPRF.setColumn(iNewRow, "INPT_GUBN", this.dsTA_ACCTXD.getColumn(i, "INPT_GUBN"));   //입력구분
                this.dsTA_SLIPRF.setColumn(iNewRow, "COMB_IDXX", this.dsTA_ACCTXD.getColumn(i, "COMB_IDXX"));   //관리항목팝업콤보ID
                this.dsTA_SLIPRF.setColumn(iNewRow, "COMM_CODE", this.dsTA_ACCTXD.getColumn(i, "COMM_CODE"));   //공통코드
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_COLM", this.dsTA_ACCTXD.getColumn(i, "COND_COLM"));   //관리항목컬럼
                this.dsTA_SLIPRF.setColumn(iNewRow, "HELP_TEXT", this.dsTA_ACCTXD.getColumn(i, "HELP_TEXT"));   //도움말
                this.dsTA_SLIPRF.setColumn(iNewRow, "DRCR_TYPE", this.dsTA_ACCTXD.getColumn(i, "DRCR_TYPE"));   //관리헝목차대구분
                this.dsTA_SLIPRF.setColumn(iNewRow, "MUST_YSNO", this.dsTA_ACCTXD.getColumn(i, "MUST_YSNO"));   //관리헝목차대필수  
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_YSNO", this.dsTA_ACCTXD.getColumn(i, "COND_YSNO"));   //관리항목사용여부  
            }

            //필터해제한다.
            this.dsTA_ACCTXD.filter("");
            
            //관리항목 필터 
            this.fn_dsTA_SLIPRF_Filter();
            
            this.Tab0.TabD1.grdTA_SLIPRF.set_enableredraw(true);
            
        }

        /*---------------------------------------+
         |  부가세 필터                 |
         +---------------------------------------*/
        this.fn_dsTA_VATXXM_Filter = function () {

            var iRow = this.dsTA_SLIPNT.rowposition;
            this.dsTA_VATXXM.filter("SLIP_LINE==" + this.fnc_Quote(this.dsTA_SLIPNT.getColumn(iRow, "SLIP_LINE")));
            this.dsTA_VATXXM.set_rowposition(0);
            
            //부가세 탭 정리한다.
            this.fn_TA_VATXXM_disable();
            
        }
        /*---------------------------------------+
         |  부가세 추가/삭제               |
         +---------------------------------------*/
        this.fn_TA_VATXXM_AddOrDelete = function () {

            //trace("===== fn_TA_VATXXM_AddOrDelete START ======");

            //계정코드를 확인한다.
            var iAcctRow = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL"));
            
            if (iAcctRow < 0) {
                if (this.dsTA_VATXXM.rowcount > 0) {
                    var iRowCnt = this.dsTA_VATXXM.deleteAll();
                    //trace("===== fn_TA_VATXXM_AddOrDelete 삭제건수 : " + iRowCnt);    
                }
                return;
            }   

            var iRow        = this.dsTA_SLIPNT.rowposition;
            var sEVID_DOCU  = this.dsTA_SLIPNT.getColumn(iRow, "EVID_DOCU");
            
            //증빙이 없으면 부가세는 삭제한다.
            if (this.fnc_Length(this.fnc_Trim(sEVID_DOCU)) < 1) {
                if (this.dsTA_VATXXM.rowcount > 0) {
                    var iRowCnt = this.dsTA_VATXXM.deleteAll();
                    //trace("===== fn_TA_VATXXM_AddOrDelete 삭제건수 : " + iRowCnt);    
                }
                return;
            }
            
            //증빙이 있어도 계정코드 차대구분과 행의 차대구분이 다르면 부가세는 삭제한다.
            if (this.dsTA_ACCTXM.getColumn(iAcctRow, "DRCR_GUBN") != this.dsTA_SLIPNT.getColumn(iRow, "DRCR_GUBN") ) {
                if (this.dsTA_VATXXM.rowcount > 0) {
                    var iRowCnt = this.dsTA_VATXXM.deleteAll();
                    //trace("===== fn_TA_VATXXM_AddOrDelete 삭제건수 : " + iRowCnt);    
                }
                return;
            }
            
            //전표라인의 증빙서류가 증빙을 필요로 할때생성을 결정한다.
            var iFindRow    = this.dsEVID_DOCU.findRow("COMD_CODE", sEVID_DOCU);
            
            //증빙생성여부
            var sRef2_Fild  = this.dsEVID_DOCU.getColumn(iFindRow, "REF2_FILD");

            //증빙서류의 증빙생성여부가 0 이면 증빙세부를 삭제한다.
            if (iFindRow < 0 || sRef2_Fild != "1") {
                if (this.dsTA_VATXXM.rowcount > 0) {
                    var iRowCnt = this.dsTA_VATXXM.deleteAll();
                    //trace("===== fn_TA_VATXXM_AddOrDelete 삭제건수 : " + iRowCnt);    
                }
                return;
            }
            
            //증빙서류의 증빙생성여부가 1 이면 증빙세부가 없으면 부가세 행 만들어주고 진행한다.
            if (this.dsTA_VATXXM.rowcount == 0) {
                
                var iNewRow = this.dsTA_VATXXM.addRow();
                
                var sSlip_Numb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");
                var sSlip_Line = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");
                
                this.dsTA_VATXXM.setColumn(iNewRow, "SLIP_NUMB", sSlip_Numb);
                this.dsTA_VATXXM.setColumn(iNewRow, "SLIP_LINE", sSlip_Line);
                //this.dsTA_VATXXM.setColumn(iNewRow, "EBIL_GUBN", "0");    //전자발행여부
                
                //관리항목의 거래처값으로 셋팅한다.
                this.dsTA_SLIPRF.filter("");
                var iRfLineRow  = this.dsTA_SLIPRF.findRowExpr("SLIP_LINE == '" + sSlip_Line + "' && COND_CODE == '0002'");
                this.fn_dsTA_SLIPRF_Filter();
                
                if (iRfLineRow >= 0) {
                    var sCust_Code = this.dsTA_SLIPRF.getColumn(iRfLineRow, "COND_VACD");
                    var sCust_Name = this.dsTA_SLIPRF.getColumn(iRfLineRow, "COND_VANM");
                    
                    this.dsTA_VATXXM.setColumn(iNewRow, "CUST_CODE", sCust_Code);
                    this.dsTA_VATXXM.setColumn(iNewRow, "CUST_NAME", sCust_Name);
                }
                
                this.dsTA_VATXXM.setColumn(iNewRow, "CRUD_TYPE", "INS");
                
                this.dsTA_VATXXM.rowposition = iNewRow;
                this.Tab0.TabD2.cmbEBIL_GUBN.set_index(1);
            }
            
        }

        /*---------------------------------------+
         |  부가세 disable                 |
         +---------------------------------------*/
        this.fn_TA_VATXXM_disable = function () {

            this.fnc_SetReadonly(this.Tab0.TabD2.calTRNS_DATE, true);       //발행일자
            this.fnc_SetReadonly(this.Tab0.TabD2.mskCARD_NUMB, true);       //카드번호
            this.fnc_SetReadonly(this.Tab0.TabD2.edtCARD_APPR, true);       //카드승인번호
            this.fnc_SetReadonly(this.Tab0.TabD2.mskSUPP_AMNT, true);       //공급가액
            this.fnc_SetReadonly(this.Tab0.TabD2.mskVATX_AMNT, true);       //세액
            this.fnc_SetReadonly(this.Tab0.TabD2.mskSUMX_AMNT, true);       //합계
            this.fnc_SetReadonly(this.Tab0.TabD2.cmbEBIL_GUBN, true);       //전자발행여부
            this.fnc_SetReadonly(this.Tab0.TabD2.chkETIS_YSNO, true);       //타사이트발행여부
            this.fnc_SetReadonly(this.Tab0.TabD2.edtITEM_NAME, true);       //품목
            this.fnc_SetReadonly(this.Tab0.TabD2.edtVATX_REMK, true);       //적요
            this.fnc_SetReadonly(this.Tab0.TabD2.edtCUST_NAME, true);       //거래처
            this.Tab0.TabD2.imgHelpCUST_CODE.set_enable(false); //거래처
            this.Tab0.TabD2.imgHelpVATX_GUBN.set_enable(false); //매입매출팝업
            
            this.Tab0.TabD2.staTRNS_DATE.set_cssclass("styFormItemCap");    //발행일자
            this.Tab0.TabD2.staVATX_GUBN.set_cssclass("styFormItemCap");    //매출매입
            this.Tab0.TabD2.staVATX_TYPE.set_cssclass("styFormItemCap");    //부가세종류
            this.Tab0.TabD2.staSUPP_AMNT.set_cssclass("styFormItemCap");    //공급가액
            this.Tab0.TabD2.staVATX_AMNT.set_cssclass("styFormItemCap");    //세액
            this.Tab0.TabD2.staCUST_CODE.set_cssclass("styFormItemCap");    //거래처
            
            //전표라인의 증빙서류가 증빙자료생성여부 확인
            var iFindRow = this.dsEVID_DOCU.findRow("COMD_CODE", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "EVID_DOCU"));
            var sRef2_Fild = this.dsEVID_DOCU.getColumn(iFindRow, "REF2_FILD"); //증빙생성여부
            if (iFindRow < 0 || sRef2_Fild != "1") return;

            //계정코드의 차대구분 확인
            var iAcctRow        = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL"));
            var sAcct_Drcr_Gubn = this.dsTA_ACCTXM.getColumn(iAcctRow, "DRCR_GUBN");    //계정코드 차대구분
            var sSlip_Drcr_Gubn = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "DRCR_GUBN"); //전표행 차대구분
            if (iAcctRow < 0 || sAcct_Drcr_Gubn != sSlip_Drcr_Gubn) return;
            
            //수정가능하면 enablle 한다.
            if (this.fn_IsUpdateOK()) {
                this.fnc_SetReadonly(this.Tab0.TabD2.calTRNS_DATE, false);      //발행일자
                this.fnc_SetReadonly(this.Tab0.TabD2.mskCARD_NUMB, false);      //카드번호
                this.fnc_SetReadonly(this.Tab0.TabD2.edtCARD_APPR, false);      //카드승인번호
                this.fnc_SetReadonly(this.Tab0.TabD2.mskSUPP_AMNT, false);      //공급가액
                this.fnc_SetReadonly(this.Tab0.TabD2.mskVATX_AMNT, false);      //세액
                this.fnc_SetReadonly(this.Tab0.TabD2.cmbEBIL_GUBN, false);      //전자발행여부
                this.fnc_SetReadonly(this.Tab0.TabD2.chkETIS_YSNO, false);      //타사이트발행여부
                this.fnc_SetReadonly(this.Tab0.TabD2.edtITEM_NAME, false);      //품목
                this.fnc_SetReadonly(this.Tab0.TabD2.edtVATX_REMK, false);      //적요
                this.fnc_SetReadonly(this.Tab0.TabD2.edtCUST_NAME, false);      //거래처
                this.Tab0.TabD2.imgHelpCUST_CODE.set_enable(true);  //거래처
                this.Tab0.TabD2.imgHelpVATX_GUBN.set_enable(true);  //매입매출팝업
                
                this.Tab0.TabD2.staTRNS_DATE.set_cssclass("styFormItemCapBE");  //발행일자
                this.Tab0.TabD2.staVATX_GUBN.set_cssclass("styFormItemCapBE");  //매출매입
                this.Tab0.TabD2.staVATX_TYPE.set_cssclass("styFormItemCapBE");  //부가세종류
                this.Tab0.TabD2.staSUPP_AMNT.set_cssclass("styFormItemCapBE");  //공급가액
                this.Tab0.TabD2.staVATX_AMNT.set_cssclass("styFormItemCapBE");  //세액
                this.Tab0.TabD2.staCUST_CODE.set_cssclass("styFormItemCapBE");  //거래처
            }
            
        }

        /*---------------------------------------+
         | 발생, 미결조회버튼                 |
         +---------------------------------------*/
        this.fn_OsilpOrBanje_Button_Visible = function () {

            //trace("===== fn_OsilpOrBanje_Button_Visible START ======");
            
            var iSlipRow = this.dsTA_SLIPNT.rowposition;
            
            //일단 버튼은 모두 숨긴다.
            this.mskOSLI_DISP.set_visible(false);   //발생번호
            this.staOSLI_DISP.set_visible(false);   //발생번호
            
            this.btnBanje.set_visible(false);       //미결전표조회
            this.btnOSLI_NUMB.set_visible(false);   //발생전표조회
            this.btnOSLI_DELE.set_visible(false);   //발생전표삭제

            //계정코드를 확인한다.
            if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(iSlipRow, "ACCT_INTL"))) < 1) return;

            //계정코드를 찾는다.
            var iFindRow = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(iSlipRow, "ACCT_INTL"));
            
            if (iFindRow < 0) return;
            
            var sSlip_Drcr_Gubn = this.dsTA_SLIPNT.getColumn(iSlipRow, "DRCR_GUBN");
            var sGunb_Ysno      = this.dsTA_ACCTXM.getColumn(iFindRow, "GUNB_YSNO");
            var sAcct_Drcr_Gubn = this.dsTA_ACCTXM.getColumn(iFindRow, "DRCR_GUBN");
            
            //건별미결가 아니면 적용하지 않는다.
            if (sGunb_Ysno != "1") return;

            //전표행 차대구분이 공란이면 처리하지 않는다.
            if (this.fnc_Length(this.fnc_Trim(sSlip_Drcr_Gubn)) < 1) return;
            
            //계정코드 차대구분과 전표의 차대구분이 같으면 미결전표조회 버튼을 보여준다
            if (sAcct_Drcr_Gubn == sSlip_Drcr_Gubn) { 
            
                //현재행이 작업중이 아니면 보여준다.
                if (this.dsTA_SLIPNT.getRowType(this.dsTA_SLIPNT.rowposition) == Dataset.ROWTYPE_NORMAL) {
                    this.btnBanje.set_visible(true);
                }   
            
            //아니면 발생전표 버튼을 보여준다.
            } else {

                this.staOSLI_DISP.set_visible(true);    //발생번호
                this.mskOSLI_DISP.set_visible(true);    //발생번호
                
                //수정가능여부를 확인한다.
                if (this.fn_IsUpdateOK()) { 
                    this.btnOSLI_NUMB.set_visible(true);    //발생전표조회
                    this.btnOSLI_DELE.set_visible(true);    //발생전표삭제
                }
            }
            
            return;
                
        }

        /*---------------------------------------+
         | 수정가능 여부확인                 |
         +---------------------------------------*/
        this.fn_IsUpdateOK = function () {

            //전표호출이 조회이면 수정 못한다.
            if (this.sLOAD_FORM == "SHR") return false;

            //결재상태 확인한다.
            var sApps_Code = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "APPS_CODE");
            
            //전표유형에 따른 전표수정범위
            var sSlip_Gubn = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_GUBN");

            if (this.fnc_Length(this.fnc_Trim(sSlip_Gubn)) > 0) {
                var iFindRow    = this.dsSLIP_GUBN.findRow("COMB_CODE", sSlip_Gubn);
                var sSlmd_Rgcd  = this.fn_getSlmd_Rgcd();   //전표수정범위
                
                if (sSlmd_Rgcd != "ALL") {// && this.sLOAD_FORM == "NEW") { 
                    return false;
                } else {
        			this.btnCopy.set_visible(true); 		//전표복사
                }
            }

            if (this.fnc_Length(this.fnc_Trim(sApps_Code)) > 0) {
                var iFindRow = this.dsAPPS_CODE.findRow("COMD_CODE", sApps_Code);
                
                //수정가능여부
                if (this.dsAPPS_CODE.getColumn(iFindRow, "REF1_FILD") == "0") {         
                    return false;
                }
                
                //if (sApps_Code == "X") return true; //작성오류는 삭제 가능해야함
            }

            return true;
            
        }

        /*---------------------------------------+
         | 전표세부 라인추가 가능 여부확인       |
         +---------------------------------------*/
        this.fn_IsLineUpdateOK = function (sEditGubn) {
            
            //전표호출이 조회이면 수정 못한다.
            if (this.sLOAD_FORM == "SHR") return false;
            
            //결재상태 확인한다.
            var sApps_Code = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "APPS_CODE");
            
            if (this.fnc_Length(this.fnc_Trim(sApps_Code)) > 0) {
                var iFindRow = this.dsAPPS_CODE.findRow("COMD_CODE", sApps_Code);
                
                //수정가능여부
                if (this.dsAPPS_CODE.getColumn(iFindRow, "REF1_FILD") == "0") {         
                    return false;
                }   
            }

            var sSlmd_Rgcd = this.fn_getSlmd_Rgcd();    //전표수정범위
            var sSlct_Code = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLCT_CODE"); //전표통제유형코드
            
            //수정범위가 전체 NON 이면 무조건 수정불가
            if (sSlmd_Rgcd == "NON") {
                return false;
            }
            
            if (sEditGubn == "DEL") {
        		if (this.fnc_Length(this.fnc_Trim(sSlct_Code)) > 0) {
        			if (sSlmd_Rgcd == "MOD") { //행추가 및 변경 가능. (행삭제 불가)
        				return "MOD";
        			} else if (sSlmd_Rgcd == "ADD") {	//행추가 만 가능. (행삭제, 데이터 수정 불가)
        				return false;
        			}
        		}
            }
            
            return true;
            
        }

        /**************************************************************************************************
         *                                 관리항목 변경  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------------------------------+
         |  전표 복사 클릭 時  |
         +------------------------------------------*/
        this.btnCopy_onclick = function (obj,e) {

            // 복사할내역이 없을때
            if (this.dsTA_SLIPXM.rowcount < 1) {
                this.fnc_Message("TMM125", "복사할 전표내역이 없습니다.");
                return;
            }
            
            // 전표번호가 신규이면 안됨
            if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB"))) < 1) {
                this.fnc_Message("TMM125", "신규전표는 복사할수 없습니다.");
                return;
            }
            
            if (this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "AUTO_YSNO") != "0") {
                this.fnc_Message("TMM125", "자동전표는 복사할수 없습니다.");
                return;
            }
            
        	this.popSlip_Copy.trackPopupByComponent(this.btnCopy, 0, 0);
            this.popSlip_Copy.calCopy_SLIP_DATE.setFocus();
            this.popSlip_Copy.calCopy_SLIP_DATE.set_value(this.fnc_GetServerDateTime("DATE"));
            
        }

        /*------------------------------------------+
         | 발생전표
         +------------------------------------------*/
        this.btnOSLI_NUMB_onclick = function (obj,e) {

            // 이전발생전표가 존재하면 발생번호삭제를 먼저해야한다.
            if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "OSLI_NUMB"))) > 0) {
                this.fnc_Message("TMM300", "발생번호삭제를 먼저해야 합니다.");
                this.btnOSLI_DELE.setFocus();
                return;
            }
            
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

            var iRow = this.dsTA_SLIPNT.rowposition;
            var sAcct_Unit = this.cmbACCT_UNIT.value;   
            var sAcct_Intl = this.dsTA_SLIPNT.getColumn(iRow, "ACCT_INTL");
            var sAcct_Name = this.dsTA_SLIPNT.getColumn(iRow, "ACCT_NAME");
            var sSlip_Numb = this.dsTA_SLIPNT.getColumn(iRow, "SLIP_NUMB");
            var sSlip_Line = this.dsTA_SLIPNT.getColumn(iRow, "SLIP_LINE");
            var sUnus_Ysno = "1";

            var iFindRow = this.dsTA_ACCTXD.findRowExpr("ACCT_INTL=='" + sAcct_Intl + "' && UNUS_YSNO=='" + sUnus_Ysno + "'");
        	
            var sCond_Code = this.dsTA_ACCTXD.getColumn(iFindRow, "COND_CODE");
             
            this.fnc_OpenPopup("FAMB0030P02", "fam::FAMB0030P02.xfdl"
        		, {  sACCT_UNIT : sAcct_Unit
        			,sACCT_INTL : sAcct_Intl
        			,sACCT_NAME : sAcct_Name
        			,sSLIP_NUMB : sSlip_Numb
        			,sSLIP_LINE : sSlip_Line
        			,sCOND_CODE : sCond_Code }, sOpenStyle, "fn_OSLI_NUMB_After"); 
        			
        }

        /*------------------------------------------+
         | 발생전표 팝업 Callback
         +------------------------------------------*/
        this.fn_OSLI_NUMB_After = function(sPopupId,Variant) {

            var rtn = this.fnc_GetPopupRtn();

            //선택건이 없으면 처리하지 않는다.
            if (rtn == null) return;

            //trace("====fn_OSLI_NUMB_After ==== rtn " + rtn);
            
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "OSLI_NUMB", rtn[0]);  //발생전표번호
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "OSLI_LINE", rtn[1]);  //발생전표라인번호
            
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "SLIP_AMNT", rtn[10]); //전표금액(잔액)
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "CURR_GUBN", rtn[6]);  //통화
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "EXCH_RATE", rtn[7]);  //환율
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "FORI_AMNT", rtn[10]); //외화금액(잔액)
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "REMK_NAME", rtn[9]);  //적요
            
            this.mskOSLI_DISP.set_value(rtn[2]);    //발생전표라인번호
            
            var sSlip_Numb = rtn[3]; //현재전표번호
            var sSlip_Line = rtn[4]; //현재전표라인번호
            
            //선택된 행의 관리항목을 삭제한다.
            var sFilterStr = "SLIP_LINE==" + this.fnc_Quote(sSlip_Line);
            
            //trace("===== fn_OSLI_NUMB_After sFilterStr ====== " + sFilterStr);

            //관리항목을 필터한다.
            this.dsTA_SLIPRF.filter(sFilterStr);
            this.dsTA_SLIPRF.deleteAll();
            
            //발생전표의 관리항목을 가져온다.
            var sMethodName = "SEARCH13";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_SLIPRF2=dsTA_SLIPRF2";
            var sArgument   = this.fn_CreateArgument(sMethodName);
        		sArgument  += " SLIP_NUMB=" + this.fnc_Quote(sSlip_Numb); //현재전표번호
        		sArgument  += " SLIP_LINE=" + this.fnc_Quote(sSlip_Line); //현재전표라인번호

            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        }   

        /*------------------------------------------+
         | 발생전표 관리항목 복사
         +------------------------------------------*/
        this.fn_Osli_Cond_Code_Copy = function() {

            //관리항목을 추가한다.
            for (var i = 0;  i < this.dsTA_SLIPRF2.rowcount; i++) {
                var iNewRow = this.dsTA_SLIPRF.addRow();
                
                this.dsTA_SLIPRF.setColumn(iNewRow, "SLIP_NUMB", this.dsTA_SLIPRF2.getColumn(i, "SLIP_NUMB"));
                this.dsTA_SLIPRF.setColumn(iNewRow, "SLIP_LINE", this.dsTA_SLIPRF2.getColumn(i, "SLIP_LINE"));
                
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_CODE", this.dsTA_SLIPRF2.getColumn(i, "COND_CODE"));  //관리항목코드
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_NAME", this.dsTA_SLIPRF2.getColumn(i, "COND_NAME"));  //관리항목명
                this.dsTA_SLIPRF.setColumn(iNewRow, "CODE_SEQN", this.dsTA_SLIPRF2.getColumn(i, "CODE_SEQN"));  //코드순번
                this.dsTA_SLIPRF.setColumn(iNewRow, "DRCR_YSNO", this.dsTA_SLIPRF2.getColumn(i, "DRCR_YSNO"));  //차대필수여부
                this.dsTA_SLIPRF.setColumn(iNewRow, "UNUS_YSNO", this.dsTA_SLIPRF2.getColumn(i, "UNUS_YSNO"));  //미불사용여부
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_KIND", this.dsTA_SLIPRF2.getColumn(i, "COND_KIND"));  //관리항목입력형태[COND_KIND]
                this.dsTA_SLIPRF.setColumn(iNewRow, "INPT_GUBN", this.dsTA_SLIPRF2.getColumn(i, "INPT_GUBN"));  //입력구분
                this.dsTA_SLIPRF.setColumn(iNewRow, "COMB_IDXX", this.dsTA_SLIPRF2.getColumn(i, "COMB_IDXX"));  //관리항목팝업콤보ID
                this.dsTA_SLIPRF.setColumn(iNewRow, "COMM_CODE", this.dsTA_SLIPRF2.getColumn(i, "COMM_CODE"));  //공통코드
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_COLM", this.dsTA_SLIPRF2.getColumn(i, "COND_COLM"));  //관리항목컬럼
                this.dsTA_SLIPRF.setColumn(iNewRow, "HELP_TEXT", this.dsTA_SLIPRF2.getColumn(i, "HELP_TEXT"));  //도움말
                this.dsTA_SLIPRF.setColumn(iNewRow, "DRCR_TYPE", this.dsTA_SLIPRF2.getColumn(i, "DRCR_TYPE"));  //관리헝목차대구분
                this.dsTA_SLIPRF.setColumn(iNewRow, "MUST_YSNO", this.dsTA_SLIPRF2.getColumn(i, "MUST_YSNO"));  //관리헝목차대필수
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_YSNO", this.dsTA_SLIPRF2.getColumn(i, "COND_YSNO"));  //관리항목사용여부
                
                this.dsTA_SLIPRF.set_enableevent(false);
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_VACD", this.dsTA_SLIPRF2.getColumn(i, "COND_VACD"));
                this.dsTA_SLIPRF.setColumn(iNewRow, "COND_VANM", this.dsTA_SLIPRF2.getColumn(i, "COND_VANM"));
                this.dsTA_SLIPRF.set_enableevent(true);
            }

            //관리항목 필터 
            this.fn_dsTA_SLIPRF_Filter();
            
        }   

        /*---------------------------------------+
         | 발생전표 취소                 |
         +---------------------------------------*/
        this.btnOSLI_DEL_onclick = function (obj,e) {

            //trace("===============>>>btnOSLI_DEL_onclick");
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "OSLI_NUMB", "");
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "OSLI_LINE", "");
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "OSLI_DISP", "");
            
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "SLIP_AMNT", 0);   //전표금액
            //this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "CURR_GUBN", "");    //통화
            this.cmbCURR_GUBN.set_index(1);
            
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "EXCH_RATE", 1);   //환율
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "FORI_AMNT", 0);   //외화금액
            this.dsTA_SLIPNT.setColumn(this.dsTA_SLIPNT.rowposition, "REMK_NAME", "");  //적요
            
            var sFilterStr = "SLIP_LINE==" + this.fnc_Quote(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE"));
            
            //trace("===== btnOSLI_DEL_onclick sFilterStr ====== " + sFilterStr);

            //관리항목을 필터한다.
            this.dsTA_SLIPRF.filter(sFilterStr);
            this.dsTA_SLIPRF.deleteAll();
            
            //관리항목 추가한다.
            this.fn_dsTA_SLIPRF_Add();
            
        }

        /*---------------------------------------+
         | 상계전표 조회
         +---------------------------------------*/
        this.btnBanje_onclick = function (obj,e) {

            // 현재행이 수정중이면 조회 할 수 없다.
            if (this.dsTA_SLIPNT.getRowType(this.dsTA_SLIPNT.rowposition) != Dataset.ROWTYPE_NORMAL ) {
                this.fnc_Message("TMM300", "작업중인 행의 미결전표는 조회 할수 없습니다."); //Message 처리
                return;
            }
            
            var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
                sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
                sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
                sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
                sOpenStyle += ",width=900";       //현재 반응 없음
                sOpenStyle += ",height=500";      //현재 반응 없음
                sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
                sOpenStyle += ",titletext=";      //Form Title여부
                sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
                sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
                
            this.fnc_OpenPopup("FAMB0030P03", "fam::FAMB0030P03.xfdl", {sSHRDISP_NUMB:this.mskSHRSLIP_NUMB.value
        															   ,sSLIP_LINE:this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE")
        															   }, sOpenStyle, "fn_popupAfter3");
                
        }

        
        // 추가버튼에서 엔터시 로우 생성
        this.btn_AddRow_OnKeyDown = function (obj,e) {
            
            if (e.keycode == 13) this.btn_AddRow_onclick(obj); //dsTA_SLIPXD 초기화
            
        }

        

        /*===============================================================
         승인 처리 / 취소
         2014-11-03 : 버튼 합침
         ===============================================================*/
        this.btn_APPRCANCEL_onclick = function (obj,e) {
            
            var sProcType 	= "";
            var sMethodName = "";
            if (this.btn_APPRCANCEL.text == "승인처리") {
                sProcType 	= "PROC";
                sMethodName = "APPRPROC00";
            } else {
                sProcType 	= "CANCEL";
                sMethodName = "APPRPROC01";
            }

            if (!this.fn_APPRCheck(sProcType)) return;
            
            this.gRow = this.dsTA_SLIPXM.rowposition;

            // var sMethodName = "APPRPROC01";                        //서버에서 호출 될 Method 명
            var sInDataSet  = "dsTA_SLIPXM=dsTA_SLIPXM:A";
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_SLIPNT.setFocus();
            
        }

        /*===============================================================
         승인 체크
         ===============================================================*/
        this.fn_APPRCheck = function (sMode) {
            
            // 2014-12-10 : 마감 체크 필요
            if (sMode == "PROC") {
                // 승인 처리 시
                if (this.fnc_IsDate(this.calACCT_DATE1.value) == false) {
                    this.fnc_Message("TMM072", "정확한 회계처리일");
                    this.calACCT_DATE1.setFocus(); //예산년도 항목으로 Focus
                    return false;
                }

        
                // 처리된건에 대해서는 등록할수 없다.
                for (var i = 0; i < this.dsTA_SLIPXM.rowcount; i++) {
                    // 직접 결재시 상태 값을 바꾸지 않는다.
                    if (this.fnc_Length(this.dsTA_SLIPXM.getColumn(i, "ACCT_DATE")) == 8) {
                        // dsTA_SLIPXM.getColumn(i,'GW_STATUS') == 'GO030006' &&
                        this.fnc_Message("TMM125", "승인된 전표는 처리할수 없습니다.");
                        this.dsTA_SLIPXM.set_rowposition(i);
                        return false;
                    }

                    if (this.dsTA_SLIPXM.getColumn(i, "GW_STATUS") == "GO030090") {
                        this.fnc_Message("TMM125", "임시전표는 처리할수 없습니다.");
                        this.dsTA_SLIPXM.set_rowposition(i);
                        return false;
                    }
                    
                    // HDJ 2012.06.07 - 승인처리시에도 차대변 금액을 체크하도록 수정
                    if (this.dsTA_SLIPXM.getColumn(i, "CHAX_AMNT") != this.dsTA_SLIPXM.getColumn(i, "DAEX_AMNT")) {
                        this.fnc_Message("TMM125", "차대변 금액이 맞지 않습니다."); //Message 처리
                        this.dsTA_SLIPXM.set_rowposition(i);
                        return false;
                    }
                }

                if (!this.fnc_Message("M1091", "승인")) return false;
                
            } else {
                // 처리된건에 대해서는 등록할수 없다.
                for (var i = 0; i < this.dsTA_SLIPXM.rowcount; i++) {
                    // 직접 결재시 상태 값을 바꾸지 않는다.
                    if (this.fnc_Length(this.dsTA_SLIPXM.getColumn(i, "ACCT_DATE")) != 8) {
                        // dsTA_SLIPXM.getColumn(i,'GW_STATUS') != 'GO030006' && g
                        this.fnc_Message("TMM125", "승인처리 자료만 취소 가능합니다.");
                        this.dsTA_SLIPXM.set_rowposition(i);
                        return false;
                    }
                }

                if (!this.fnc_Message("M1091", "승인취소")) return false;
                
            }

            return true;
            
        }

        this.btnPrint02_onclick = function (obj,e) {
            
            // 인쇄 자료 체크
            if (this.dsTA_SLIPXM.rowcount < 0) {
                this.fnc_Message("TMM011");
                return;
            }

            // 해당 Row가 있는지 확인
            if (this.dsTA_SLIPXM.rowposition < 0) {
                this.fnc_Message("HR1033", "인쇄 할 데이터");
                return;
            }

            this.dsTA_SLIPNT_RT2.clearData(); //증빙서 - 분개내역
            this.dsTA_SLIPFILE.clearData(); //증빙서 - 증빙내역

            var sMethodName = "PRINT02";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_SLIPXM_RPT=dsTA_SLIPXM_RPT dsTA_SLIPNT_RT2=dsTA_SLIPNT_RT2 dsTA_SLIPFILE=dsTA_SLIPFILE";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_SLIPNT.setFocus();
        }

        // 그리드의 스타일 재지정
        this.fn_grdTA_SLIPRF_ReSetting = function () {

            //trace("================== fn_grdTA_SLIPRF_ReSetting start ");
            var obj = this.Tab0.TabD1.grdTA_SLIPRF;

            obj.setCellProperty("Body", this.fnc_GridColumnIndex(obj, "COND_VANM"), "background", "#ffff95ff");
            obj.setCellProperty("Body", this.fnc_GridColumnIndex(obj, "COND_VANM"), "background2", "#ffff95ff");
            
        }

        /*--------------------------------------+
         |  전표번호 팝업 호출 후 데이터 바인딩  |
         +---------------------------------------*/
        this.fn_SlipDialoge = function (obj) {

            if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM")) {   
                if (!this.fnc_Message("TMM023")) return false;
            }
        	
        	
            this.fnc_DatasetClear("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM"); 
            
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
        	
        	this.mskSHRSLIP_NUMB.setFocus();
        	this.calSHRSLIP_DATE.setFocus();
        	
            this.fnc_OpenPopup("FAMB0030P01", "fam::FAMB0030P01.xfdl", {sSHRSLIP_DATE:this.calSHRSLIP_DATE.value
                                                                       ,sSHRSLIP_USERID:(application.GBL_EMPLNO)
                                                                       ,sSHRSLIP_USERNM:(application.GBL_USERNM)
                                                                       ,sSHRSLIP_DEPTCD:(application.GBL_DEPTCD)
                                                                       ,sSHRSLIP_DEPTNM:(application.GBL_DEPTNM)
                                                                       ,sPARENT_USERLAVEL:this.sUSERLAVEL}, sOpenStyle, "fn_SlipDialoge_After");                                                               
            
        }

        /*--------------------------------------+
         |  부가세증빙종류 |
         +---------------------------------------*/
        this.fn_VatDialoge = function (obj) {

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
            
            var sEVID_DOCU= this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "EVID_DOCU");
            var sVATX_GUBN= this.Tab0.TabD2.cmbVATX_GUBN.value;
            
            this.fnc_OpenPopup("FAMB0030P05", "fam::FAMB0030P05.xfdl", { sEVID_DOCU:sEVID_DOCU, sVATX_GUBN:sVATX_GUBN }, sOpenStyle, "fn_VatDialoge_After");    
            
        }

        /*--------------------------------------+
         |  전표팝업 Callback                       |
         +--------------------------------------*/
        this.fn_SlipDialoge_After = function(sPopupId,Variant) {

            var rtn = this.fnc_GetPopupRtn();

            if (this.fnc_Length(rtn) > 0) {
                this.mskSHRSLIP_NUMB.set_value(rtn);
                this.fn_Search();
            }   

        }

        /*--------------------------------------+
         |  증빙서류팝업 Callback                       |
         +--------------------------------------*/
        this.fn_VatDialoge_After = function(sPopupId,Variant) {

            var rtn = this.fnc_GetPopupRtn();
            
            if (!(rtn instanceof Array)) return;
            
            var iRow = this.dsTA_VATXXM.rowposition;
            this.dsTA_VATXXM.setColumn(iRow, "VATX_GUBN", rtn[1]);
            this.dsTA_VATXXM.setColumn(iRow, "VATX_TYPE", rtn[2]);
            this.dsTA_VATXXM.setColumn(iRow, "BULG_GUBN", rtn[3]);
            this.dsTA_VATXXM.setColumn(iRow, "PURC_GUBN", rtn[4]);

        	var e = new nexacro.DSColChangeEventInfo();
        	e.columnid = "VATX_TYPE";
        	e.row =	this.dsTA_VATXXM.rowposition;
        	this.dsTA_VATXXM_oncolumnchanged(this.dsTA_VATXXM, e);
        	
        }

        /*--------------------------------------+
         |  증빙세부 컬럼 변경             
         +---------------------------------------*/
        this.dsTA_VATXXM_oncolumnchanged = function(obj,e) {
            
            //trace("====================================== dsTA_VATXXM_oncolumnchanged start : " + e.columnid);
            //공급가액
            if (e.columnid == "SUPP_AMNT" || e.columnid == "VATX_TYPE") {
            
        		//과세의 경우 세액 자동계산
        		if (obj.getColumn(e.row, "VATX_TYPE") == "FA210010") {
        			var iSupp_Amnt = obj.getColumn(e.row, "SUPP_AMNT");
        			var iVatx_Amnt = Math.floor(iSupp_Amnt * 0.1);
        			obj.setColumn(e.row, "VATX_AMNT", iVatx_Amnt);
        		}
        		
                this.fn_Sumx_Amnt(e.row);
                
            //부가세
            } else if (e.columnid == "VATX_AMNT") {
                this.fn_Sumx_Amnt(e.row);
            }
            
        }

        /*--------------------------------------+
         |  증빙세부 합계             
         +---------------------------------------*/
        this.fn_Sumx_Amnt = function(iRow) {
            
            var iSupp_Amnt = nexacro.toNumber(this.dsTA_VATXXM.getColumn(iRow, "SUPP_AMNT"),0);
            var iVatx_Amnt = nexacro.toNumber(this.dsTA_VATXXM.getColumn(iRow, "VATX_AMNT"),0);
            
            this.dsTA_VATXXM.setColumn(iRow, "SUMX_AMNT", iSupp_Amnt + iVatx_Amnt); 
            
        }

        /*--------------------------------------+
         |  예산잔액조회 팝업
         +---------------------------------------*/
        this.btnBUDG_LIST_onclick = function(obj,e) {

            var iAcctRow = this.dsTA_ACCTXM.findRow("ACCT_INTL", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "ACCT_INTL"));
            if (this.dsTA_ACCTXM.getColumn(iAcctRow, "BUDG_YSNO") != 1) {
                this.fnc_Message("TMM300", "예산 계정과목이 아닙니다."); 
                return;     // 예산 계정과목 아니면 동작하지 않는다.
            }
            
            if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "CSTC_CODE"))) < 1 ) {
                return this.fnc_CheckPostAction("TMM072", "코스트센터", "", "", this.edtCSTC_NAME, "");
            }

            if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BUDG_GUBN"))) < 1 ) {
                return this.fnc_CheckPostAction("TMM072", "예산구분", "", "", this.cmbBUDG_GUBN, "");
            }
            
            if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BDSB_CODE"))) < 1 ) {
                return this.fnc_CheckPostAction("TMM072", "예산과목", "", "", this.edtBDSB_NAME, "");
            }   
            
            var sName       = "FAMB0030P04";
            var sFormURL    = "fam::FAMB0030P04.xfdl";
            var sOpenStyle  = "modeless=false";
                sOpenStyle += ",autosize=true";
                sOpenStyle += ",top=-1";
                sOpenStyle += ",left=-1";
                sOpenStyle += ",width=1051";
                sOpenStyle += ",height=834";
                sOpenStyle += ",title=true";
                sOpenStyle += ",status=false";
                sOpenStyle += ",resizable=true";

            var objArgumentList = {
                     sSLIP_NUMB : this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB")
                    ,sSLIP_LINE : this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE")
                    ,sSLIP_DATE : this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE")
                    ,sACCT_UNIT : this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "ACCT_UNIT")
                    ,sBUDG_GUBN : this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BUDG_GUBN")
                    ,sBDSB_CODE : this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BDSB_CODE")
                    ,sBDSB_NAME : this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "BDSB_NAME")
                    ,sCSTC_CODE : this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "CSTC_CODE")
                    ,sCSTC_NAME : this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "CSTC_NAME")
                    
            };
                        
            this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle);
            
        }

        /*--------------------------------------+
         |  화폐_통화 변경시
         +---------------------------------------*/
        this.cmbCURR_GUBN_onitemchanged = function(obj,e) {

            //trace("cmbCURR_GUBN_onitemchanged :: " + this.cmbCURR_GUBN.value);
            if (this.cmbCURR_GUBN.value == "KRW") { // 대한민국
                
                this.mskEXCH_RATE.set_value("1");
                this.fnc_SetReadonly(this.mskEXCH_RATE, true);
                
                this.mskFORI_AMNT.setFocus();
                
            } else {
                
                var sRate = this.dsTA_EXRTXM.getColumn(this.dsTA_EXRTXM.findRow("CURR_GUBN", this.cmbCURR_GUBN.value), "STND_RATE");
                this.mskEXCH_RATE.set_value(sRate);
                this.fnc_SetReadonly(this.mskEXCH_RATE, false);
                
                this.mskEXCH_RATE.setFocus();
                
            }
            
            this.fn_SetMask_ForiAmt();

        }

        /*--------------------------------------+
         |  통화금액 소수점 자릿수 셋팅
         +---------------------------------------*/
        this.fn_SetMask_ForiAmt = function() {
            
            var iCurrRow = this.dsCURR_GUBN.findRow("COMD_CODE", this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "CURR_GUBN"));
            var iMaskNum = nexacro.toNumber(this.dsCURR_GUBN.getColumn(iCurrRow, "REF3_FILD"), 0);
            
            var sMask = "###,###";
            for (var i = 0; i < iMaskNum; i++) {
                if (i == 0) sMask = sMask + "." + "#";
                else sMask = sMask + "#";
            }
            
            this.mskFORI_AMNT.set_mask(sMask);
            
        }

        /*----------------------------+
         |  전표일자 변경  
         +----------------------------*/
        this.calSLIP_DATE_onchanged = function(obj,e) {
            
            // 마감여부 확인
            this.sCHEK_CLDT = obj.value;
            this.fn_Search_SLIPCLOSE();
            
            if (this.bSLIP_CLOS == true) {
                this.calSLIP_DATE.set_value("");
                return;
            }

            this.fn_Search_Rate();
            
        }

        /*--------------------------------------+
         |  전표복사처리
         +---------------------------------------*/
        this.popSlip_Copy_btnCopyPROC_onclick = function(obj,e) {
            
            var sSlip_Date		= this.popSlip_Copy.calCopy_SLIP_DATE.value;
            var tmpSlip_Date    = "";
            
            if (this.fnc_IsDate(this.popSlip_Copy.calCopy_SLIP_DATE.value) == false) {
                this.fnc_CheckPostAction("TMM072", "정확한 전표일자", "", "", this.popSlip_Copy.calCopy_SLIP_DATE, "");
                this.btnCopy_onclick();
        		return;
            }

            // 마감여부 확인 -> 2012-11-15 : 복사대상일로 체크토록 변경!
            tmpSlip_Date    = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE");
            this.dsTA_SLIPXM.setColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE", sSlip_Date);
            
            // 마감여부 확인
            this.sCHEK_CLDT = this.popSlip_Copy.calCopy_SLIP_DATE.value;
            this.fn_Search_SLIPCLOSE();

            if (this.bSLIP_CLOS == true) {
                this.dsTA_SLIPXM.setColumn(this.dsTA_SLIPXM.rowposition, "SLIP_DATE", tmpSlip_Date);
                this.btnCopy_onclick();
                this.popSlip_Copy.calCopy_SLIP_DATE.setFocus();
                return;
            }
            
            
            this.dsTA_SLIPNT.set_rowposition(-1);
            
            //======================================
            // 전표세부
            //======================================
            for (var i = 0; i < this.dsTA_SLIPNT.rowcount; i++) {
            
                this.dsTA_SLIPNT.set_rowposition(i);
                
                this.dsTA_SLIPNT.setColumn(i, "CRUD_TYPE", "INS");  //CRUD TYPE(INS,UPD)
                this.dsTA_SLIPNT.setColumn(i, "SLIP_NUMB", "");     //전표번호
                this.dsTA_SLIPNT.setColumn(i, "TRNS_DATE", "");     //부가세 발행일자
                this.dsTA_SLIPNT.setColumn(i, "SUPP_AMNT", "");     //공급가액
                this.dsTA_SLIPNT.setColumn(i, "VATX_AMNT", "");     //세액
                
                this.dsTA_SLIPNT.setColumn(i, "OSLI_DISP", "");     //발생전표번호 + 라인번호
                this.dsTA_SLIPNT.setColumn(i, "OSLI_DATE", "");     //발생전표일자
                this.dsTA_SLIPNT.setColumn(i, "OSLI_NUMB", "");     //발생전표번호
                this.dsTA_SLIPNT.setColumn(i, "OSLI_LINE", "");     //발생전표라인번호
                this.dsTA_SLIPNT.setColumn(i, "SEND_KEY1", "");     //BICNET전송키1
                this.dsTA_SLIPNT.setColumn(i, "SEND_KEY2", "");     //BICNET전송키2
        		
                // 입력 상태 강제 변경
                // 크게 감쌀경우 정상동작않는다.
                this.dsTA_SLIPNT.set_updatecontrol(false);
                this.dsTA_SLIPNT.setRowType(i, Dataset.ROWTYPE_INSERT);
                this.dsTA_SLIPNT.set_updatecontrol(true);
                
                //======================================
                // 관리항목
                //======================================
                this.dsTA_SLIPRF.filter("");
                for (var j = 0; j < this.dsTA_SLIPRF.rowcount; j++) {
                    
                    this.dsTA_SLIPRF.setColumn(j, "CRUD_TYPE", "INS");
                    this.dsTA_SLIPRF.setColumn(j, "SLIP_NUMB", "");     // 전표번호

                    // 2015.03.09.PIH : 공급일자(0045), 과세표준(0049)은 복사하지 않는다! OMA
        //             if (this.dsTA_SLIPRF.getColumn(j, "COND_CODE") == "0045" || this.dsTA_SLIPRF.getColumn(j, "COND_CODE") == "0049") {
        //                 this.dsTA_SLIPRF.setColumn(j, "COND_VACD", "");
        //                 this.dsTA_SLIPRF.setColumn(j, "COND_VANM", "");
        //             }
                    
                    // 입력 상태 강제 변경
                    if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPRF.getColumn(j, "COND_CODE"))) > 0) {
        				this.dsTA_SLIPRF.set_updatecontrol(false);
        				this.dsTA_SLIPRF.setRowType(j, Dataset.ROWTYPE_INSERT);
        				this.dsTA_SLIPRF.set_updatecontrol(true);
        			} else {
        				this.dsTA_SLIPRF.set_updatecontrol(false);
        				this.dsTA_SLIPRF.setRowType(j, Dataset.ROWTYPE_NORMAL);
        				this.dsTA_SLIPRF.set_updatecontrol(true);
        			}
                    
                }
                this.fn_dsTA_SLIPRF_Filter();
                
                //======================================
                // 증빙항목
                //======================================
                this.dsTA_VATXXM.filter("");
                for (var j = 0; j < this.dsTA_VATXXM.rowcount; j++) {
                
                    this.dsTA_VATXXM.set_rowposition(j);
                    
                    this.dsTA_VATXXM.setColumn(j, "CRUD_TYPE", "INS");      //CRUD TYPE(INS,UPD)
                    this.dsTA_VATXXM.setColumn(j, "VATX_SEQN", "");             //부가세일련번호
                    this.dsTA_VATXXM.setColumn(j, "SLIP_NUMB", "");             //전표번호
                    
                    // 입력 상태 강제 변경
                    this.dsTA_VATXXM.set_updatecontrol(false);
                    this.dsTA_VATXXM.setRowType(j, Dataset.ROWTYPE_INSERT);
                    this.dsTA_VATXXM.set_updatecontrol(true);

                }
                this.fn_dsTA_VATXXM_Filter();
                
            }
            
            //======================================
            // 전표마스터
            //======================================
            for (var i = 0; i < this.dsTA_SLIPXM.rowcount; i++) {
                // 초기화 대상 자료 정리
                this.dsTA_SLIPXM.setColumn(i, "CRUD_TYPE", "INS");          //CRUD_TYPE
                this.dsTA_SLIPXM.setColumn(i, "SLIP_NUMB", "");             //전표번호
                this.dsTA_SLIPXM.setColumn(i, "DISP_NUMB", "");             //전표표시번호    
                
                this.dsTA_SLIPXM.setColumn(i, "SLIP_DATE", sSlip_Date);    	//전표일자 
                this.calSHRSLIP_DATE.set_value(sSlip_Date);
                this.dsTA_SLIPXM.setColumn(i, "ACCT_DATE",  "");            //회계일자
                this.dsTA_SLIPXM.setColumn(i, "APPR_EMPL",  "");            //승인자
                this.dsTA_SLIPXM.setColumn(i, "APPR_EMNM",  "");            //승인자
                
                this.dsTA_SLIPXM.setColumn(i, "EMPL_NUMB", application.GBL_EMPLNO);     //발행자
                this.dsTA_SLIPXM.setColumn(i, "EMPL_NAME", application.GBL_USERNM);     //발행자명
                this.dsTA_SLIPXM.setColumn(i, "DEPT_CODE", application.GBL_DEPTCD);     //부서
                this.dsTA_SLIPXM.setColumn(i, "DEPT_NAME", application.GBL_DEPTNM);     //부서명
                this.dsTA_SLIPXM.setColumn(i, "ACCT_GUBN", application.GBL_ACCT_GUBN);  //사업장
                this.dsTA_SLIPXM.setColumn(i, "AUTO_YSNO", "0");                        //자동전표여부
                
                this.cmbACCT_UNIT.set_index(1);     //회계단위
                this.cmbSLIP_GUBN.set_index(1);     //전표종류
                this.cmbAPPS_CODE.set_index(1);     //결재상태
                
                // 입력 상태 강제 변경
                this.dsTA_SLIPXM.set_updatecontrol(false);
                this.dsTA_SLIPXM.setRowType(i, Dataset.ROWTYPE_INSERT);
                this.dsTA_SLIPXM.set_updatecontrol(true);
                
                this.dsTA_SLIPXM.set_rowposition(-1);
                this.dsTA_SLIPXM.set_rowposition(i);
            }
            
            this.dsTA_SLIPNT.set_rowposition(-1);
            this.dsTA_SLIPNT.set_rowposition(0);

            this.popSlip_Copy_btn_CopyCancel_onclick();
            
            this.edtTITL_NAME.setFocus();
            
        }

        /*--------------------------------------+
         |  전표복사 취소
         +---------------------------------------*/
        this.popSlip_Copy_btn_CopyCancel_onclick = function(obj,e) {
            
            this.popSlip_Copy.calCopy_SLIP_DATE.set_value("");
            this.popSlip_Copy.closePopup();
            
        }

        /*--------------------------------------+
         |  전표 수정범위 값 리턴
         +---------------------------------------*/
        this.fn_getSlmd_Rgcd = function () {
            var sSlip_Gubn = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_GUBN");
            var sSlmd_Rgcd = "";
            
            if (this.fnc_Length(this.fnc_Trim(sSlip_Gubn)) > 0) {
                var iFindRow    = this.dsSLIP_GUBN.findRow("COMB_CODE", sSlip_Gubn);    
                sSlmd_Rgcd      = this.dsSLIP_GUBN.getColumn(iFindRow, "SLMD_RGCD");    //수정범위
            }
            
            return sSlmd_Rgcd;
        }

        /*--------------------------------------+
         |  결재상신 버튼 클릭 시
         +---------------------------------------*/
        this.btnSendGW_onclick = function(obj,e) {
        	
        	if (this.dsTA_SLIPXM.rowcount < 1) return;
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM")) {
        		return this.fnc_Message("TMM015", "결재상신");
        	}
        	
        	if (!this.fnc_Message("TMM061", "전자결재 상신")) return false;
            
        	this.sAPPR_GUBN = "createDoc";
        	
        	this.dsTA_SLIPXM.set_updatecontrol(false);
        	this.dsTA_SLIPXM.setColumn(this.dsTA_SLIPXM.rowposition, "DOCU_IDXX", this.sDOCU_IDXX);
        	this.dsTA_SLIPXM.set_updatecontrol(true);
        	
        	//전자결재 연동자료 저장
            var sMethodName = "SAVE99";
            var sInDataSet  = "dsTA_SLIPXM=dsTA_SLIPXM:A";
            var sOutDataSet = "";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
        }

        /*--------------------------------------+
         |  결재취소 버튼 클릭 시
         +---------------------------------------*/
        this.btnCancGW_onclick = function(obj,e) {
        	
        	if (this.dsTA_SLIPXM.rowcount < 1) return;
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM")) {
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
        // this.fn_MakeHtml();
        // 	return;
        	if (this.dsTA_SLIPXM.rowcount < 1) return;
        	
        	this.sAPPR_GUBN = "show";
        	var bPerm = (this.sUSERLAVEL == "5") ? false : true;
        	this.fnc_ShowApproval(this.sAPPR_GUBN, this.sDOCU_IDXX + "-" + this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "APPR_DOCN"), "", bPerm);
        	
        }

        /*--------------------------------------+
         |  문서파일첨부 클릭 시
         +---------------------------------------*/
        this.btnAttachDoc_onclick = function(obj,e) {
        	
        	if (this.dsTA_SLIPXM.rowcount < 1) return;
        	
        	this.sAPPR_GUBN = "attach";
        	var sUrl = this.fnc_ShowApproval(this.sAPPR_GUBN, this.sDOCU_IDXX + "-" + this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "APPR_DOCN"), this.sDOCU_IDXX);
        	
        	this.edtURL.set_value(sUrl);
        	
        }

        /*--------------------------------------+
         |  전자결재상신/취소
         +---------------------------------------*/
        this.fn_GwApprProcess = function(sApprGubn) {
        	
        	if (!this.fn_GwApprCheck(sApprGubn)) return;
        	
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*---------------------------+
         |  전자결재상신/취소 체크!  |
         +---------------------------*/
        this.fn_GwApprCheck = function (sApprGubn) {
        	
            if (this.dsTA_SLIPXM.rowcount < 1) return this.fnc_Message("TMM011");
        	if (this.dsTA_SLIPXM.rowposition < 0) return false;

        	if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM,dsTA_SLIPNT,dsTA_SLIPRF,dsTA_VATXXM")) {
        		return this.fnc_Message("TMM015", "결재상신");
        	}
            
            var sAppr_Docn 	= this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "APPR_DOCN");
            var sSubject 	= "[" + this.mskSLIP_NUMB.text + "] " + this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "TITL_NAME"); 						
        	var sApprDocId	= this.sDOCU_IDXX + "-" + sAppr_Docn; //DOCU_IDXX - APPR_DOCN
        	
        	if (this.fnc_Length(this.fnc_Trim(sAppr_Docn)) < 1) {
        		return this.fnc_Message("TMM300", "전자결재문서번호가 없습니다.");
        	}
        	
            var sXmlStr = this.fn_MakeHtml();	//전자결재용 HTML 생성
            //return false;
        	this.fnc_DatasetClear("dsTM_APPROVAL");
        	
        	var iRow = this.dsTM_APPROVAL.addRow();		
        	this.dsTM_APPROVAL.setColumn(iRow, "documentID", sApprDocId);				//문서번호
        	this.dsTM_APPROVAL.setColumn(iRow, "documentType", this.sDOCU_IDXX);		//문서종류(결재문서 ID)
        	this.dsTM_APPROVAL.setColumn(iRow, "HtmlDocument", sXmlStr);				//결재문서에 그릴 HTML
        	this.dsTM_APPROVAL.setColumn(iRow, "subject", sSubject);					//결재문서 제목
        	this.dsTM_APPROVAL.setColumn(iRow, "recipient", application.GBL_EMPLNO);	//기안자사번
        	this.dsTM_APPROVAL.setColumn(iRow, "creator", application.GBL_USERNM);		//기안자성명
        	this.dsTM_APPROVAL.setColumn(iRow, "documentStatus", sApprGubn);			//결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc
        	this.dsTM_APPROVAL.setColumn(iRow, "isUsedFile", "F");						//첨부파일여부
        	
        	return true;
        	
        }

        /*--------------------------------------+
         |  전자결재용 HTML 생성
         +---------------------------------------*/
        this.fn_MakeHtml = function () {
        	
            this.fnc_DatasetClear("dsTA_SLIPXM_RPT,dsTA_SLIPNT_RPT");
            var sMethodName = "PRINT00";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_SLIPXM_RPT=dsTA_SLIPXM_RPT dsTA_SLIPNT_RPT=dsTA_SLIPNT_RPT";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
        	
        	var t_head		= " border-top: 2px solid; border-left: 2px solid; border-bottom: 2px solid; background-color:#cccccc; font-weight:bold;";
        	var t_head1		= " border-top: 2px solid; border-left: 1px solid; border-bottom: 2px solid; background-color:#cccccc; font-weight:bold;";
        	var t_head2		= " border-top: 2px solid; border-left: 2px solid; border-bottom: 2px solid; border-right: 2px solid; background-color:#cccccc; font-weight:bold;";
        	
        	var t_b			= " font-weight:bold;";
        	var f11			= " font-size:11px;";
        	var fem			= " font-size:0.75em;";
        	var f14			= " font-size:14px; font-weight:bold;";
        	var t_bg_c		= " background-color:#cccccc; ";
        	
        	var t_line_l	= " border-left: 1px solid;";
        	var t_line_l2  	= " border-left: 2px solid;";
        	var t_line_lb	= " border-left: 1px solid; border-bottom: 1px solid;";
        	var t_line_lb2	= " border-left: 1px solid; border-bottom: 2px solid;";
        	var t_line_lbr2	= " border-left: 1px solid; border-bottom: 1px solid; border-right: 2px solid;";
        	var t_line_lb2r2 = " border-left: 1px solid; border-bottom: 2px solid; border-right: 2px solid;";
        	var t_line_l2b	= " border-left: 2px solid; border-bottom: 1px solid;";
        	var t_line_l2b2	= " border-left: 2px solid; border-bottom: 2px solid;";
        	var t_line_lr2	= " border-left: 1px solid; border-right: 2px solid;";
        	var t_line_b2r2	= " border-bottom: 2px solid; border-right: 2px solid;";
        	var t_line_l2b2r2	= " border-left: 2px solid; border-bottom: 2px solid; border-right: 2px solid;";
        	
        	var t_ta_ct		= " text-align:center;";
        	var t_ta_rt		= " text-align:right;";
        	var t_pd_a3		= " padding:3px;";
        	
        	var sXmlStr = "";
        	
        	sXmlStr  = "<work_item work_item_code ='001' work_item_name ='본문내용'>";
        	sXmlStr += "<![CDATA[";

        	sXmlStr += "\n";
        	sXmlStr += "<style>td {font-size:12px;}\n";
        	sXmlStr += "</style>\n";
        	
        	sXmlStr += "<table width='1000px' border='0' cellspacing='0' cellpadding='0'>\n";
        	sXmlStr += "  <col width='36px'>\n";
        	sXmlStr += "  <col width='133px'>\n";
        	sXmlStr += "  <col width='252px'>\n";
        	sXmlStr += "  <col width='100px'>\n";
        	sXmlStr += "  <col width='133px'>\n";
        	sXmlStr += "  <col width='252px'>\n";
        	sXmlStr += "  <col width='100px'>\n";

        	sXmlStr += "  <tr>\n";
        	sXmlStr += "    <td style='" + t_head + t_pd_a3 + t_ta_ct + "'>항순</td>\n";
        	sXmlStr += "    <td colspan='3' style='" + t_head1 + t_pd_a3 + t_ta_ct + "'>차 &nbsp; &nbsp; &nbsp; &nbsp; 변</td>\n";
        	sXmlStr += "    <td colspan='3' style='" + t_head2 + t_pd_a3 + t_ta_ct + "'>대 &nbsp; &nbsp; &nbsp; &nbsp; 변</td>\n";
        	sXmlStr += "  </tr>\n";
        	
        	for (var i = 0; i < this.dsTA_SLIPNT_RPT.rowcount; i++) {
        		
        // 		if (i % 3 == 0) {
        // 			sXmlStr += "  <div stype='page-break-befor:always;'>\n";
        // 		}
        		
        		sXmlStr += "  <tr>\n";
        		sXmlStr += "    <td rowspan='6' style='" + t_line_l2b2 + t_pd_a3 + t_ta_ct + "'>" +  this.dsTA_SLIPNT_RPT.getColumn(i, "DISP_NUMB") + "</td>\n";
        		
        		sXmlStr += "	<td style='" + t_line_l + t_pd_a3 + t_b + "'>" + this.dsTA_SLIPNT_RPT.getColumn(i, "ACCT_UPNMD") + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + "' rowspan='2' >" + this.dsTA_SLIPNT_RPT.getColumn(i,  "REMK_NAMED") + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_l + t_pd_a3 + t_ta_rt + "'>&nbsp;</td>\n";		// 금액은 두번째 라인에서 뿌린다.
        		sXmlStr += "	<td style='" + t_line_l2 + t_pd_a3 + t_b + "'>" + this.dsTA_SLIPNT_RPT.getColumn(i, "ACCT_UPNMC") + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + "' rowspan='2' >" + this.dsTA_SLIPNT_RPT.getColumn(i, "REMK_NAMEC") + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_lr2 + t_pd_a3 + t_ta_rt + "'>&nbsp;</td>\n";
        		sXmlStr += "  </tr>\n";
        		
        		sXmlStr += "  <tr>\n";
        		sXmlStr += "    <td style='" + t_line_lb + t_pd_a3 + "'>" + this.dsTA_SLIPNT_RPT.getColumn(i, "ACCT_BFNMD") + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_lb + t_pd_a3 + t_b + " text-align:right;'>" + this.fnc_AddComma(this.dsTA_SLIPNT_RPT.getColumn(i, "SLIP_AMNTD")) + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_l2b + t_pd_a3 + "'>" + this.dsTA_SLIPNT_RPT.getColumn(i, "ACCT_BFNMC") + "</td>\n";
        		sXmlStr += "	<td style='" + t_line_lbr2 + t_pd_a3 + t_b + " text-align:right;'>" + this.fnc_AddComma(this.dsTA_SLIPNT_RPT.getColumn(i, "SLIP_AMNTC")) + "</td>\n";
        		sXmlStr += "  </tr>\n";
        		
        		sXmlStr += "  <tr>\n";
        		sXmlStr += "    <td style='" + t_line_l + t_pd_a3 + "'>" + this.dsTA_SLIPNT_RPT.getColumn(i, "ACCT_INTLD") + "</td>\n";
        		
        		// 차변 관리항목
        		sXmlStr += "    <td style='" + t_line_lb2 + t_pd_a3 + "' rowspan='4' colspan='2'>\n";
        		sXmlStr += "      <table border='0' cellspacing='0' cellpadding='0'>\n";
        		sXmlStr += "        <col width='55px'>\n";
        		sXmlStr += "        <col width='115px'>\n";
        		sXmlStr += "        <col width='55px'>\n";
        		sXmlStr += "        <col width='120px'>\n";
        		sXmlStr += "        <tr>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMD1")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMD1"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBND1")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMD2")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMD2"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBND2")) + "</td>\n";
        		sXmlStr += "        </tr>\n";
        		sXmlStr += "        <tr>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMD3")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMD3"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBND3")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMD4")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMD4"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBND4")) + "</td>\n";
        		sXmlStr += "        </tr>\n";
        		sXmlStr += "        <tr>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMD5")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMD5"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBND5")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMD6")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMD6"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBND6")) + "</td>\n";
        		sXmlStr += "        </tr>\n";
        		sXmlStr += "        <tr>\n";
        		sXmlStr += "          <td  style='" + t_pd_a3 + "' colspan='4'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "OSLI_NUMBD"), "SLIP_NUMB") + "</td>\n";
        		sXmlStr += "        </tr>\n";
        		sXmlStr += "      </table>\n";
        		sXmlStr += "    </td>\n";

        		sXmlStr += "    <td style='" + t_line_l2 + t_pd_a3 + "'>" + this.dsTA_SLIPNT_RPT.getColumn(i, "ACCT_INTLC") + "</td>\n";
        		
        		// 대변 관리항목
        		sXmlStr += "    <td style='" + t_line_lb2r2 + t_pd_a3 + "' rowspan='4' colspan='2'>\n";
        		sXmlStr += "      <table border='0' cellspacing='0' cellpadding='0'>\n";
        		sXmlStr += "        <col width='55px'>\n";
        		sXmlStr += "        <col width='115px'>\n";
        		sXmlStr += "        <col width='55px'>\n";
        		sXmlStr += "        <col width='120px'>\n";
        		sXmlStr += "        <tr>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMC1")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMC1"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBNC1")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMC2")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMC2"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBNC2")) + "</td>\n";
        		sXmlStr += "        </tr>\n";
        		sXmlStr += "        <tr>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMC3")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMC3"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBNC3")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMC4")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMC4"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBNC4")) + "</td>\n";
        		sXmlStr += "        </tr>\n";
        		sXmlStr += "        <tr>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMC5")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMC5"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBNC5")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_CDNMC6")) + "</td>\n";
        		sXmlStr += "          <td style='" + f11 + t_pd_a3 + "'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "COND_VANMC6"), this.dsTA_SLIPNT_RPT.getColumn(i, "INPT_GUBNC6")) + "</td>\n";
        		sXmlStr += "        </tr>\n";
        		sXmlStr += "        <tr>\n";
        		sXmlStr += "          <td style='" + t_pd_a3 + "' colspan='4'>" + this.fn_GetNbsp(this.dsTA_SLIPNT_RPT.getColumn(i, "OSLI_NUMBC"), "SLIP_NUMB") + "</td>\n";
        		sXmlStr += "        </tr>\n";
        		sXmlStr += "      </table>\n";
        		sXmlStr += "    </td>\n";
        		sXmlStr += "  </tr>\n";
        		
        		sXmlStr += "  <tr>\n";
        		sXmlStr += "    <td style='" + t_line_l + t_pd_a3 + "'>" + this.dsTA_SLIPNT_RPT.getColumn(i, "CSTC_NAMED") + "</td>\n";
        		sXmlStr += "    <td style='" + t_line_l2 + t_pd_a3 + "'>" + this.dsTA_SLIPNT_RPT.getColumn(i, "CSTC_NAMEC") + "</td>\n";
        		sXmlStr += "  </tr>\n";
        		
        		sXmlStr += "  <tr>\n";
        		sXmlStr += "    <td style='" + t_line_l + t_pd_a3 + "'>" + this.dsTA_SLIPNT_RPT.getColumn(i, "BDSB_NAMED") + "</td>\n";
        		sXmlStr += "    <td style='" + t_line_l2 + t_pd_a3 + "'>" + this.dsTA_SLIPNT_RPT.getColumn(i, "BDSB_NAMEC") + "</td>\n";
        		sXmlStr += "  </tr>\n";
        		
        		sXmlStr += "  <tr>\n";
        		sXmlStr += "    <td style='" + t_line_lb2 + f11 + t_pd_a3 + "'>&nbsp;</td>\n";
        		sXmlStr += "    <td style='" + t_line_l2b2 + f11 + t_pd_a3 + "'>&nbsp;</td>\n";
        		sXmlStr += "  </tr>\n";
        		
        		
        // 		if (i % 3 == 0) {
        // 			sXmlStr += "  <div style='page-break-befor:always;'></div>\n";
        // 		}

        	}
        	
        	sXmlStr += "  <tr style='" + t_b + "'>\n";
        	sXmlStr += "    <td colspan='4' style='" + t_line_l2b2r2 + t_bg_c + f14 + t_ta_rt + t_pd_a3 + "'>\n";
        	sXmlStr += "    	합계&nbsp;&nbsp;:&nbsp;&nbsp;" + this.fnc_AddComma(this.dsTA_SLIPXM_RPT.getColumn(0, "SLIP_AMNT")) + "\n";
        	sXmlStr += "    </td>\n";
        	sXmlStr += "    <td colspan='3' style='" + t_line_b2r2 + t_bg_c + f14 + t_ta_rt + t_pd_a3 + "'>\n";
        	sXmlStr += "    	 一金&nbsp;&nbsp;:&nbsp;&nbsp;" + this.dsTA_SLIPXM_RPT.getColumn(0, "HANG_AMNT") + "&nbsp;&nbsp;원整 \n";
        	sXmlStr += "    </td>\n";
        	sXmlStr += "  <tr>\n";
        	sXmlStr += "</table>";
        	
        	sXmlStr  += "]]>";
        	sXmlStr  += "</work_item>";

        	sXmlStr += "<work_item work_item_code = '002' work_item_name = '전표일자'>" + this.fnc_GetMaskFormat(this.dsTA_SLIPXM_RPT.getColumn(0, "SLIP_DATE"), "@@@@-@@-@@") + "</work_item>";
        	sXmlStr += "<work_item work_item_code = '003' work_item_name = '전표번호'>" + this.mskSLIP_NUMB.text + "</work_item>";
        	sXmlStr += "<work_item work_item_code = '004' work_item_name = '작성부서'>" + this.dsTA_SLIPXM_RPT.getColumn(0, "DEPT_NAME") + "</work_item>";

        	//trace(sXmlStr);
        	return sXmlStr;
        	
        }

        this.fn_GetNbsp = function (sVal,sMaskGubn) {

        	if (this.IsNull(sVal)) {
        		sVal = "&nbsp;";
        	} else if (!this.IsNull(sMaskGubn)) {
        		if (sMaskGubn == "SLIP_NUMB") {
        			sVal = this.fnc_GetMaskFormat(sVal, application.GBL_SLIPMASK + "-####");
        		} else if (sMaskGubn == "NUMB") {
        			sVal = this.fnc_AddComma(sVal);
        		}
        	}
        	return sVal;
        	
        }

        this.mskOSLI_DISP_oneditclick = function(obj,e) {

        	var sSlipNumb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "OSLI_NUMB");
        	var sSlipLine = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "OSLI_LINE");
        	if (this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0) {
        		this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	}
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPNT.addEventHandler("onrowposchanged", this.dsTA_SLIPNT_onrowposchanged, this);
            this.dsTA_SLIPNT.addEventHandler("oncolumnchanged", this.dsTA_SLIPNT_oncolumnchanged, this);
            this.dsTA_SLIPXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_SLIPRF.addEventHandler("oncolumnchanged", this.dsTA_SLIPRF_oncolumnchanged, this);
            this.dsTA_SLIPRF.addEventHandler("onrowposchanged", this.dsTA_SLIPRF_onrowposchanged, this);
            this.dsTA_VATXXM.addEventHandler("oncolumnchanged", this.dsTA_VATXXM_oncolumnchanged, this);
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtREMK_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkPAYX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBANK_INOU.addEventHandler("onitemchanged", this.cmbBANK_INOU_onitemchanged, this);
            this.cmbBANK_INOU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbLEDG_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.staPAYX_DATE.addEventHandler("onclick", this.staPAYX_DATE_onclick, this);
            this.btnOSLI_NUMB.addEventHandler("onclick", this.btnOSLI_NUMB_onclick, this);
            this.edtTITL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSLIP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSLIP_DATE.addEventHandler("onchanged", this.calSLIP_DATE_onchanged, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbAPPS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUSEX_DEPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCHAX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnCopy.addEventHandler("onclick", this.btnCopy_onclick, this);
            this.calACCT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCHAX_DAEX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_AddRow.addEventHandler("onclick", this.btn_AddRow_onclick, this);
            this.btn_DelRow.addEventHandler("onclick", this.btn_DelRow_onclick, this);
            this.edtAPPR_EMNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_APPRCANCEL.addEventHandler("onclick", this.btn_APPRCANCEL_onclick, this);
            this.calACCT_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSORT_ORDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_InsertRow.addEventHandler("onclick", this.btn_InsertRow_onclick, this);
            this.edtACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btnSendGW.addEventHandler("onclick", this.btnSendGW_onclick, this);
            this.btnSearchDoc.addEventHandler("onclick", this.btnSearchDoc_onclick, this);
            this.btnPrint02.addEventHandler("onclick", this.btnPrint02_onclick, this);
            this.btnCHG.addEventHandler("onclick", this.btnCHG_onclick, this);
            this.btnBUDG_LIST.addEventHandler("onclick", this.btnBUDG_LIST_onclick, this);
            this.imgHelpSHRSLIP_NUMB.addEventHandler("onclick", this.fn_SlipDialoge, this);
            this.imgHelpDEPT_COD1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.TabD1.grdTA_SLIPRF.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.Tab0.TabD2.cmbVATX_TYPE.addEventHandler("onitemchanged", this.Tab0_TabD2_cmbVATX_TYPE_OnChanged, this);
            this.Tab0.TabD2.cmbVATX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.mskVATX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.calTRNS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.calTRNS_DATE.addEventHandler("oneditclick", this.Tab0_TabD2_calTRNS_DATE_oneditclick, this);
            this.Tab0.TabD2.cmbVATX_GUBN.addEventHandler("onitemchanged", this.Tab0_TabD2_cmbVATX_GUBN_OnChanged, this);
            this.Tab0.TabD2.cmbVATX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.cmbPURC_GUBN.addEventHandler("onitemchanged", this.Tab0_TabD2_cmbPURC_GUBN_OnChanged, this);
            this.Tab0.TabD2.cmbPURC_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.mskSUPP_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.mskSUMX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.edtITEM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.staCARD_NUMB.addEventHandler("onclick", this.Tab0_TabD2_Static3_onclick, this);
            this.Tab0.TabD2.mskCARD_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.imgHelpVATX_GUBN.addEventHandler("onclick", this.fn_VatDialoge, this);
            this.Tab0.TabD2.edtCARD_APPR00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.edtCARD_APPR01.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.edtCARD_APPR02.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.TabD2.cmbEBIL_GUBN.addEventHandler("onitemchanged", this.Tab0_TabD2_cmbPURC_GUBN_OnChanged, this);
            this.Tab0.TabD2.cmbEBIL_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.Tab0.TabD2.cmbBULG_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.edtVATX_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.TabD2.edtCARD_APPR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtAPPR_EMPL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSHRSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSOUS_LNKY.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCURR_GUBN.addEventHandler("onitemchanged", this.cmbCURR_GUBN_onitemchanged, this);
            this.cmbCURR_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskEXCH_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSLIP_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskFORI_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBDSB_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpBDSB_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtBDSB_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBDSB_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCSTC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpCSTC_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtCSTC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCSTC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.mskBUDG_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDAEX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSLIP_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbBUDG_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAM1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAM1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.mskOSLI_DISP.addEventHandler("oneditclick", this.mskOSLI_DISP_oneditclick, this);
            this.mskOSLI_DISP.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popSlip_Copy.calCopy_SLIP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popSlip_Copy.btnCopyPROC.addEventHandler("onclick", this.popSlip_Copy_btnCopyPROC_onclick, this);
            this.popSlip_Copy.btn_CopyCancel.addEventHandler("onclick", this.popSlip_Copy_btn_CopyCancel_onclick, this);
            this.btnCancGW.addEventHandler("onclick", this.btnCancGW_onclick, this);
            this.btn_CopyRow.addEventHandler("onclick", this.btn_CopyRow_onclick, this);
            this.btnBanje.addEventHandler("onclick", this.btnBanje_onclick, this);
            this.btnOSLI_DELE.addEventHandler("onclick", this.btnOSLI_DEL_onclick, this);
            this.btnAttachDoc.addEventHandler("onclick", this.btnAttachDoc_onclick, this);
            this.edtAPPR_DOCN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUPDT_INFO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtGWAP_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtURL.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMB0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
