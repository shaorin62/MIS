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
                this.set_name("TRMA0040");
                this.set_titletext("미불반제관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">REMA_GUBN</Col><Col id=\"DSNAME\">dsSHRREMA_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">BANK_INOU</Col><Col id=\"DSNAME\">dsBANK_INOU</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">LEDG_GUBN</Col><Col id=\"DSNAME\">dsLEDG_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">BANK_GUBN</Col><Col id=\"DSNAME\">dsBANK_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsGRUP_GUBN</Col><Col id=\"CODEID\">GRUP_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">EXCE_GUBN</Col><Col id=\"DSNAME\">dsEXCE_GUBN</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"22\"/><Column id=\"ACCT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SLIP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_DEPT\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"400\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"RPAY_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LAST_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RPAY_ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_REMK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_USEX_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_INOU\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_LEDG_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NUMB\" type=\"STRING\" size=\"30\"/><Column id=\"RECI_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ISSU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_MANA_NOXX\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BABR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCH_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISBANK\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSLIP_TYPE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUNL_CODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_GUBN\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"JUNL_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"REF1_FILD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REF2_FILD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REF3_FILD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REF4_FILD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REF5_FILD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM_SLIP", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"22\"/><Column id=\"ACCT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SLIP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_DEPT\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"400\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"RPAY_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LAST_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RPAY_ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_REMK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_USEX_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_INOU\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_LEDG_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NUMB\" type=\"STRING\" size=\"30\"/><Column id=\"RECI_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ISSU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_MANA_NOXX\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BABR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCH_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISBANK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUB2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_DOCU\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAM1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_PGBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ5\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ6\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GW_STATUS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_SIZE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEDG_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_INOU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM_SLIP_S", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"22\"/><Column id=\"ACCT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SLIP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_DEPT\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"400\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"RPAY_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LAST_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RPAY_ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_REMK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_USEX_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_INOU\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_LEDG_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NUMB\" type=\"STRING\" size=\"30\"/><Column id=\"RECI_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ISSU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_MANA_NOXX\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BABR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCH_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISBANK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM_SLIP_G", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"22\"/><Column id=\"ACCT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SLIP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_DEPT\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"400\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"RPAY_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LAST_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RPAY_ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_REMK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_USEX_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_INOU\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_LEDG_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NUMB\" type=\"STRING\" size=\"30\"/><Column id=\"RECI_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ISSU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_MANA_NOXX\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BABR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCH_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISBANK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPXM_SLIP_L", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_GUBN\" type=\"STRING\" size=\"22\"/><Column id=\"ACCT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SLIP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"SLIP_LINE\" type=\"STRING\" size=\"4\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_DEPT\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"400\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"RPAY_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LAST_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RPAY_ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_REMK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_USEX_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_INOU\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_LEDG_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NUMB\" type=\"STRING\" size=\"30\"/><Column id=\"RECI_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ACNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_ISSU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_MANA_NOXX\" type=\"STRING\" size=\"256\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_BABR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCH_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISBANK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"PARAM\">회계단위</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0001</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT_SLIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUB2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_DOCU\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAM1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_PGBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ5\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ6\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GW_STATUS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_SIZE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEDG_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_INOU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", "8", "164", null, "91", "25", null, this);
            obj.set_taborder("40");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "99", "269", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("35");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPXM", "absolute", "8", "290", null, null, "25", "203", this);
            obj.set_selecttype("row");
            obj.set_autoenter("none");
            obj.set_binddataset("dsTA_SLIPXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("sCommonGubnonheadclick").set("fn_GridSort");
            obj.set_taborder("32");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"55\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"55\"/><Column size=\"130\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" rowspan=\"2\" text=\"회계일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"출납예정일\"/><Cell col=\"3\" rowspan=\"2\" text=\"전표번호\"/><Cell col=\"4\" colspan=\"2\" text=\"계정\"/><Cell col=\"6\" colspan=\"2\" text=\"거래처\"/><Cell col=\"8\" rowspan=\"2\" text=\"구매카드&#13;&#10;가맹점번호\"/><Cell col=\"9\" rowspan=\"2\" text=\"발생전표적요\"/><Cell col=\"10\" rowspan=\"2\" text=\"발생금액\"/><Cell col=\"11\" rowspan=\"2\" text=\"기정리액\"/><Cell col=\"12\" rowspan=\"2\" text=\"잔액\"/><Cell col=\"13\" rowspan=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"정리금액\"/><Cell col=\"14\" colspan=\"2\" text=\"결제계정\"/><Cell col=\"16\" rowspan=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"적요\"/><Cell col=\"17\" colspan=\"2\" text=\"부서\"/><Cell col=\"19\" rowspan=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"출납방법\"/><Cell col=\"20\" colspan=\"2\" text=\"거래처\"/><Cell col=\"22\" colspan=\"3\" text=\"당사\"/><Cell col=\"25\" rowspan=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"지급일\"/><Cell col=\"26\" rowspan=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"발행일\"/><Cell col=\"27\" rowspan=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"관리번호\"/><Cell col=\"28\" rowspan=\"2\" text=\"카드번호\"/><Cell row=\"1\" col=\"4\" text=\"코드\"/><Cell row=\"1\" col=\"5\" text=\"명\"/><Cell row=\"1\" col=\"6\" text=\"코드\"/><Cell row=\"1\" col=\"7\" text=\"명\"/><Cell row=\"1\" col=\"14\" text=\"코드\"/><Cell row=\"1\" col=\"15\" cssclass=\"Cellgrd_WF_essential\" text=\"명\"/><Cell row=\"1\" col=\"17\" text=\"코드\"/><Cell row=\"1\" col=\"18\" text=\"명\"/><Cell row=\"1\" col=\"20\" text=\"금융기관\"/><Cell row=\"1\" col=\"21\" text=\"계좌번호\"/><Cell row=\"1\" col=\"22\" text=\"금융기관\"/><Cell row=\"1\" col=\"23\" text=\"지점코드\"/><Cell row=\"1\" col=\"24\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:nexacro.toNumber(REMA_AMNT, 0) != 0 ? 'checkbox' : 'none'\" edittype=\"expr:nexacro.toNumber(REMA_AMNT, 0) != 0 ? 'checkbox' : 'none'\" style=\"align:left;\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;color: ;\" text=\"bind:ACCT_DATE\" editlimit=\"-1\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center;\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SLIP_KEY\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:ACCT_INTL\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"6\" text=\"bind:VIEW_CODE\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:VIEW_CUST\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:JOIN_NO\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:REMK_NAME\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RPAY_AMNT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REMA_AMNT\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"expr:nexacro.toNumber(REMA_AMNT, 0) != 0 ? 'normal' : 'none'\" style=\"align:right;\" text=\"bind:LAST_AMNT\"/><Cell col=\"14\" style=\"align:center;\" text=\"bind:RPAY_ACCT_INTL\"/><Cell col=\"15\" edittype=\"normal\" style=\"align: ;\" text=\"bind:RPAY_ACCT_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"16\" edittype=\"normal\" style=\"align:left;\" text=\"bind:RPAY_REMK_NAME\"/><Cell col=\"17\" text=\"bind:RPAY_USEX_DEPT\"/><Cell col=\"18\" style=\"align:left;\" text=\"bind:RPAY_DEPT_NAME\"/><Cell col=\"19\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;background: ;\" text=\"bind:RPAY_LEDG_GUBN\"/><Cell col=\"20\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:BANK_NAME\"/><Cell col=\"21\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACNT_NUMB\"/><Cell col=\"22\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:RPAY_BANK_NAME\"/><Cell col=\"23\" text=\"bind:RPAY_BABR_CODE\"/><Cell col=\"24\" edittype=\"expr:(ISBANK) ? 'normal' : none'\" style=\"align: ;\" cssclass=\"theme://images/btn_WF_Search.png\" text=\"bind:RPAY_ACNT_NUMB\" expandshow=\"expr:(ISBANK) ? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"25\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:RPAY_PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"26\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:RPAY_ISSU_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"27\" edittype=\"normal\" style=\"align:left;\" text=\"bind:RPAY_MANA_NOXX\"/><Cell col=\"28\" edittype=\"none\" style=\"align:center;\" text=\"bind:CARD_NUMB\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\"/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" style=\"align:center;\"/><Cell col=\"3\" style=\"align:center;\"/><Cell col=\"4\" style=\"align:center;\"/><Cell col=\"5\" style=\"align:center;\"/><Cell col=\"6\" style=\"align:center;\"/><Cell col=\"7\" style=\"align:center;\"/><Cell col=\"8\" style=\"align:center;\"/><Cell col=\"9\" style=\"align:center;\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;SLIP_AMNT&quot;), 0)\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;RPAY_AMNT&quot;), 0)\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('REMA_AMNT'), 0)\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;LAST_AMNT&quot;), 0)\" mask=\"#,###\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBANK_CODE", "absolute", null, "139", "52", "21", "391", null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Button("btnREMAIN_COPY", "absolute", null, "139", "74", "21", "179", null, this);
            obj.set_text("잔액복사");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("btnCREATE_SLIP", "absolute", null, "139", "74", "21", "102", null, this);
            obj.set_text("전표처리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "269", "89", "21", null, null, this);
            obj.set_text("발생내역");
            obj.set_cssclass("styFormItemTitle");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "99", null, "192", "21", null, "178", this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("33");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", null, null, "163", "25", "15", this);
            obj.set_taborder("39");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"29\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"333\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" text=\"회계일자\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"3\" displaytype=\"text\" text=\"정리금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"적요\"/><Cell col=\"5\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"6\" displaytype=\"text\" text=\"귀속부서\"/><Cell col=\"7\" text=\"출납예정일\"/><Cell col=\"8\" text=\"출납방법\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: center;\" text=\"bind:DISP_NUMB\" mask=\"##-########-####-####\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:LEDG_GUBN\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_CHAX&quot;)\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", null, "89", "21", null, "178", this);
            obj.set_text("정리내역");
            obj.set_cssclass("styFormItemTitle");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Button("btnAPPLY_ALL", "absolute", null, "139", "74", "21", "256", null, this);
            obj.set_text("일괄넣기");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBABR_CODE", "absolute", null, "139", "52", "21", "338", null, this);
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", null, "265", "74", "21", "316", null, this);
            obj.set_text("선택건수");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCHK_CNT", "absolute", null, "265", "76", "21", "245", null, this);
            obj.set_taborder("22");
            obj.set_mask("#,###");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", null, "265", "90", "21", "145", null, this);
            obj.set_text("정리금액합계");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskLAST_AMNT_SUM", "absolute", null, "264", "116", "21", "25", null, this);
            obj.set_taborder("23");
            obj.set_mask("#,###");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_text("미불반제관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("42");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("43");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("47");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("48");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "584", "255", "80", "35", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "9", "165", "30", "89", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "87", "273", "10", "13", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "87", null, "10", "13", null, "182", this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "942", "261", "20", "25", null, null, this);
            obj.set_taborder("53");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("54");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "663", "514", "80", "25", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCREATE_SLIP00", "absolute", null, "139", "74", "21", "25", null, this);
            obj.set_text("전표삭제");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "801", "97", "79", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "897", "97", "80", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "1002", "97", "130", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "28", "97", "68", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INT1", "absolute", "96", "97", "80", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "313", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static6", "absolute", "476", "71", "68", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("회계일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE1", "absolute", "546", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Calendar("calSHRACCT_DATE2", "absolute", "666", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Static("Static07", "absolute", "615", "97", "68", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("잔액여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRREMA_GUBN", "absolute", "685", "97", "81", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRACCT_NAM1", "absolute", "201", "97", "130", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "801", "71", "96", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_text("제외계정과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXCP_ACCT_INTL", "absolute", "897", "71", "80", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREXCP_ACCT_NAME", "absolute", "1002", "71", "130", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "334", "97", "14", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INT2", "absolute", "352", "97", "80", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAM2", "absolute", "457", "97", "130", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "256", "71", "59", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_NAM1", "absolute", "178", "97", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_NAM2", "absolute", "434", "97", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "979", "97", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREXCP_ACCT_NAME", "absolute", "979", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "651", "71", "14", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("68");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "120", "61", "38", "10", null, null, this);
            obj.set_taborder("69");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "120", "92", "102", "5", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "120", "118", "38", "10", null, null, this);
            obj.set_taborder("71");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "741", "56", "128", "4", null, null, this);
            obj.set_taborder("72");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "28", "199", "91", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("당사계좌번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACNT_NUMB", "absolute", "123", "199", "127", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACNT_NAME", "absolute", "275", "199", "160", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "476", "199", "91", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("당사금융기관");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBANK_NAME", "absolute", "572", "199", "150", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "28", "173", "91", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_text("결제계정");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_INTL", "absolute", "123", "173", "127", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_NAME", "absolute", "275", "173", "160", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "476", "173", "91", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("출납방법");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbLEDG_GUBN", "absolute", "572", "173", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_value("null");

            obj = new Static("Static05", "absolute", "758", "199", "79", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("지급일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPAYX_DATE", "absolute", "828", "199", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Static("Static10", "absolute", "28", "225", "91", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_text("발행일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calISSU_DATE", "absolute", "123", "225", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static11", "absolute", "476", "225", "91", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("관리번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMANA_NOXX", "absolute", "572", "225", "150", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "758", "173", "79", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_text("전표일자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSLIP_DATE", "absolute", "828", "173", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Combo("cmbGRUP_GUBN", "absolute", "828", "225", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static19", "absolute", "758", "225", "79", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("반제생성");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpACCT_INTL", "absolute", "252", "173", "21", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpACNT_NAME", "absolute", "252", "199", "21", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "93", "165", "38", "8", null, null, this);
            obj.set_taborder("86");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "93", "194", "102", "5", null, null, this);
            obj.set_taborder("87");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "93", "220", "102", "5", null, null, this);
            obj.set_taborder("88");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "93", "246", "38", "8", null, null, this);
            obj.set_taborder("89");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("미불반제관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Tab0_FA010010_medGABG_SEKM_value","mskCHK_CNT","value","dsTA_GITAGETA","GABG_SEKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010010_medJUMI_SEKM_value","mskLAST_AMNT_SUM","value","dsTA_GITAGETA","JUMI_SEKM");
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
        this.addIncludeScript("TRMA0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRMA0040.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMA0040 미불반제관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		김준수		Initial Created.
         *	 2016.09.09		김기환		수정   
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
        this.sBUTTONLIST  = "TTFFTFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TRMA0040";
        this.sKeyValue	  = new Array();
        this.sRetValue	  = "";
        this.sSLIP_NUMB   = "";

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
        	this.fnc_GridSetting(this);					//Grid Sub Cell Property 수정
        	this.fnc_GetComboDs(this.dsCombo);			//공통코드 콤보 설정
        	this.fnc_GetUserComboDs(this.dsUserCombo);	//사용자 콤보 설정
        	
        	// 전표 mask 
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPXM, "SLIP_KEY", "Y");
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT, "DISP_NUMB", "Y");
        	
        	/*초기값 세팅*/
        	var sServerDateTime = this.fnc_GetServerDateTime("DATE");
        	
        	this.calSHRACCT_DATE1.set_value((this.fnc_SubStr(sServerDateTime, 0, 6) + "01"));	//회계일자 FROM
            this.calSHRACCT_DATE2.set_value(this.fnc_SubStr(sServerDateTime, 0, 8));			//회계일자 TO
            this.calSLIP_DATE.set_value(this.fnc_SubStr(sServerDateTime, 0, 8));				//전표일자
            
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
        	
        	if (obj != "X") {
        		//변경자료 체크
        		if (this.fnc_DatasetChangeCheck("dsTA_SLIPXM") && !this.fnc_Message("TMM023")) return;
        	}

        	if (!this.fn_SearchItemCheck()) return;
            this.fnc_DatasetClear("dsTA_SLIPXM,dsTA_SLIPNT");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_SLIPXM=dsTA_SLIPXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTA_SLIPXM");
            this.grdTA_SLIPXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {
        	// 기능 없음
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

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPXM",this);
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;

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
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계일자(FROM)", this.calSHRACCT_DATE1);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계일자(TO)", this.calSHRACCT_DATE2);
        	}

        	if (this.fnc_Trim(this.calSHRACCT_DATE1.value) > this.fnc_Trim(this.calSHRACCT_DATE2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM125", "회계일자(FROM)이 회계일자(TO)보다 큽니다.", this.calSHRACCT_DATE1);
        	}

        	return true;
        }
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능 없음
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
        	// 기능 없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	//발행내역 조회
        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.cmbSHRACCT_UNIT.value);	//회계단위
        		sReturnString += " ACCT_GUBN="  + this.fnc_Quote(this.cmbSHRACCT_GUBN.value);	//사업장
        		sReturnString += " ACCT_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE1.value)); //승인일자 FROM
        		sReturnString += " ACCT_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DATE2.value)); //승인일자 TO
        		sReturnString += " ACCT_INT1="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INT1.value));  		 //계정과목 FROM
        		sReturnString += " ACCT_INT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INT2.value));    //계정과목 TO
        		sReturnString += " CUST_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value));  //거래처
        		sReturnString += " REMA_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRREMA_GUBN.value));  //잔액여부
        		sReturnString += " EXCP_ACCT_INTL=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREXCP_ACCT_INTL.value)); //제외계정과목
        	} 
        	//정리내역 조회
        	else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.cmbSHRACCT_UNIT.value);	//회계단위
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.cmbSHRACCT_GUBN.value);	//사업장
        		sReturnString += " SLIP_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB"))); //전표번호
        		sReturnString += " SLIP_LINE=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_LINE"))); //전표라인
        	}
        	//미불(반제) 필수 입력 관리항목 조회
        	else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " SLIP_GUBN=" 	+ this.fnc_Quote("TR001"); //전표유형구분
        	}
        	//전표생성
        	else if (sKind == "CREATE_SLIP") {
        		
        		//제목 세팅
        		var sTitlName = "[미불(반제)] " + this.calSLIP_DATE.text + " ";
        		var	sLedgCode =	this.dsTA_SLIPXM_SLIP.getColumn(0, "RPAY_LEDG_GUBN"); //처리 될 첫라인 출납방법 사용
        		var nRow = this.dsLEDG_GUBN.findRowExpr("COMD_CODE == '"+sLedgCode+"'");
        		var sCntTxt = "";
        		
        		if (nRow >= 0) {
        			var sLedgName = this.dsLEDG_GUBN.getColumn(nRow, "COMD_CDNM");
        			sTitlName = sTitlName + sLedgName;
        		}
        	
        		for( var row = 1; row < this.dsTA_SLIPXM_SLIP.rowcount; row++ ) {
        			if ( sLedgCode != this.dsTA_SLIPXM_SLIP.getColumn(row, "RPAY_LEDG_GUBN") ) {
        				sCntTxt = "등 ";
        				break;
        			}
        		}
        		
        		sTitlName = sTitlName + " " + sCntTxt;
        		sTitlName = sTitlName + this.dsTA_SLIPXM_SLIP.rowcount + "건";
        		
        		var sSousLnky = this.fnc_Trim(this.dsTA_SLIPXM_SLIP.getColumn(0, "SLIP_KEY"));

        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SYST_LNCD=" 	+ this.fnc_Quote("ko");										//시스템언어코드
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업장
        		sReturnString += " SLIP_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSLIP_DATE.value)); 	//전표일자
        		sReturnString += " SLIP_GUBN=" 	+ this.fnc_Quote("TR001");  								//전표유형구분
        		sReturnString += " TITL_NAME=" 	+ this.fnc_Quote(sTitlName);  								//제목
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(application.GBL_EMPLNO);  					//사원번호
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(application.GBL_DEPTCD); 					//부서코드
        		sReturnString += " SOUS_LNKY=" 	+ this.fnc_Quote(sSousLnky);					 			//출처연결키
        		sReturnString += " GRUP_GUBN="	+ this.fnc_Quote(this.fnc_Trim(this.cmbGRUP_GUBN.value));   //그룹구분(건별반제유무)
        	}
        	//전표삭제
        	else if (sKind == "DELETE_SLIP") {
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " SYST_LNCD=" 	+ this.fnc_Quote("ko");	//시스템언어코드
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
        	} 
        	else {
        		this.fn_PostProcess(sMethodName);

        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	//발행내역 조회
        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPXM.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPXM.rowcount);	
        	} 
        	//정리내역 조회
        	else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation2, this.dsTA_SLIPNT.rowcount, "SHR");
        		
        		if ( this.sKeyValue[0] != "" ) {
        			var irow = this.dsTA_SLIPXM.findRow("SLIP_KEY",this.sKeyValue[0]);
        			this.sKeyValue[0] = "";
        			if (irow<0) irow=0;
        	
        			this.dsTA_SLIPXM.set_rowposition(irow);
        		}
        	} 
        	//미불(반제) 필수 입력 관리항목 조회
        	else if (sMethodName == "SEARCH02") {

        		//전표 유효성 점검
        		if (!this.fn_isChkValDoc())	return;
        		
        		if (!this.fnc_Message("TMM140", "[ "+this.cmbGRUP_GUBN.text +" ]"+ " 전표처리를 하시겠습니까?"))	return;
        		
        		if (this.cmbGRUP_GUBN.value == "1") {
        			this.fn_SLIP_GEN_1();	//건별생성
        		} else if (this.cmbGRUP_GUBN.value == "2" || this.cmbGRUP_GUBN.value == "3") {
        			this.fn_SLIP_GEN_2();	//통합생성 / 거래처별생성
        		}
        		
        	} 
        	//공통코드 조회
        	else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        		arrParam[1] = "COMBO,cmbSHRREMA_GUBN,dsSHRREMA_GUBN,0";
        		arrParam[2] = "COMBO,cmbLEDG_GUBN,dsLEDG_GUBN,0";
        		arrParam[3] = "COMBO,cmbGRUP_GUBN,dsGRUP_GUBN,0";
        		arrParam[4] = "GRID,grdTA_SLIPXM,dsLEDG_GUBN,RPAY_LEDG_GUBN";
        		arrParam[5] = "GRID,grdTA_SLIPXM,dsBANK_GUBN,RPAY_BANK_CODE";
        		arrParam[6] = "GRID,grdTA_SLIPNT,dsLEDG_GUBN,LEDG_GUBN";	
        			
        		this.fnc_CommonCodeInnerBind(arrParam);	
        		
        		// 1. "잔액유" 디폴트	
        		this.cmbSHRREMA_GUBN.set_index("2"); 
        		
        		// 2. 보조필드1 자금대구분이 "FC170060"이 값만 표시
        		var sPos  = 0;
        		var aRow = new Array();
        				
        		for(var i =0; i < this.dsLEDG_GUBN.rowcount; i++) {
        			if ( !this.IsNull(this.dsLEDG_GUBN.getColumn(i, "REF1_FILD")) && this.dsLEDG_GUBN.getColumn(i, "REF1_FILD") != "FC170060" ) {
        				aRow[sPos++] = i;
        			}
        		}
        		
        		this.dsLEDG_GUBN.deleteMultiRows(aRow);
        		
        	} 
        	//전표생성
        	else if (sMethodName == "CREATE_SLIP") {
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPXM.rowcount, "PROC");
        		//this.fnc_Message("TMM130","전표처리"); //[전표처리] 작업을 정상적으로 완료 하였습니다!
        		
        		this.sKeyValue[0] = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_KEY");
        		this.fn_Search("X");
        		
        		this.fnc_ViewSlipForm(this.sSLIP_NUMB, "REV", this.sUSERLAVEL); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		
        	}
        	//전표삭제
        	else if (sMethodName == "DELETE_SLIP") {
        		this.fnc_Message("TMM073", this.sRetValue); //[@] 건이 정상적으로 처리되었습니다.
        		
        		this.sKeyValue[0] = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition,"SLIP_KEY");
        		
        		this.sRetValue = "";
        		
        		this.fn_Search("X");
        		
        	}
        	//사용자공통코드 조회
        	else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);	
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	//기능없음
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
        	
            if ((obj.name == "imgHelpSHRCUST_NAME") || (obj.name == "edtSHRCUST_NAME")) { 
            
                arrParam[0] = "FAM0021";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRCUST_NAME";
                arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";
                arrParam[6] = "0,1";
               
            } else if ((obj.name == "imgHelpSHRACCT_NAM1") || (obj.name == "edtSHRACCT_NAM1")) {
            
                arrParam[0] = "FAM0034";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAM1.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACCT_NAM1";
                
        		if (this.fnc_Length(this.edtSHRACCT_INT2.value) < 1) {
        			arrParam[5] = "edtSHRACCT_INT1,edtSHRACCT_NAM1,edtSHRACCT_INT2,edtSHRACCT_NAM2";
        			arrParam[6] = "0,1,0,1";				
        		} else {
        			arrParam[5] = "edtSHRACCT_INT1,edtSHRACCT_NAM1";
        			arrParam[6] = "0,1";
        		}
        		
            } else if ((obj.name == "imgHelpSHRACCT_NAM2") || (obj.name == "edtSHRACCT_NAM2")) {
            
                arrParam[0] = "FAM0034";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAM2.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACCT_NAM2";
                arrParam[5] = "edtSHRACCT_INT2,edtSHRACCT_NAM2";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpSHREXCP_ACCT_NAME") || (obj.name == "edtSHREXCP_ACCT_NAME")) {
                
                arrParam[0] = "FAM0034";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHREXCP_ACCT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHREXCP_ACCT_NAME";
                arrParam[5] = "edtSHREXCP_ACCT_INTL,edtSHREXCP_ACCT_NAME";
                arrParam[6] = "0,1";
                
            } else if ((obj.name == "ImgHelpACCT_INTL") || (obj.name == "edtACCT_NAME")) {
            
                arrParam[0] = "TRM0017";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtACCT_NAME.value);
                arrParam[3] = "Y";
                arrParam[4] = "edtACCT_NAME";
                arrParam[5] = "edtACCT_INTL,edtACCT_NAME";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpACNT_NAME") || (obj.name == "edtACNT_NAME")) {
            
                arrParam[0] = "TRM0013";
                arrParam[1] = this.fnc_Trim(this.edtACCT_INTL.value);
                arrParam[2] = this.fnc_Trim(this.edtACNT_NAME.value);
                arrParam[3] = "Y";
                arrParam[4] = "edtACNT_NAME";
                arrParam[5] = "edtBANK_CODE,edtBANK_NAME,edtACNT_NUMB,edtACNT_NAME,edtBABR_CODE";
                arrParam[6] = "0,1,2,3,4";
              
            } else if ((obj.name == "ImgHelpDEPT_NAME") || (obj.name == "edtDEPT_NAME")) {
            
                arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtDEPT_NAME";
                arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME";
                arrParam[6] = "0,1";
              
            } else if ((obj.name == "ImgHelpACCT_NAME_R") || (obj.name == "ACCT_NAME_R")) { 
            
                arrParam[0] = "TRM0010";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.ACCT_NAME_R.value);
                arrParam[3] = "N";
                arrParam[4] = "ACCT_NAME_R";
                arrParam[5] = "ACCT_INTL_R,ACCT_NAME_R";
                arrParam[6] = "0,1";
              
            } else if (obj.name == "grdTA_SLIPXM") {
            
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "RPAY_ACCT_NAME" || sColumnID == "RPAY_ACCT_NAME") {
        		
        			arrParam[0] = "TRM0017";

        			arrParam[1] = "";
        			arrParam[2] = "RPAY_ACCT_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdTA_SLIPXM";
        			arrParam[5] = "RPAY_ACCT_INTL,RPAY_ACCT_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        		
        		} else if (this.fnc_getGridHelpColName(obj, sFromDs) == "RPAY_ACNT_NUMB" || sColumnID == "RPAY_ACNT_NUMB") {
        			
        			arrParam[0] = "TRM0013";
        			arrParam[1] = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "RPAY_ACCT_INTL");
        			arrParam[2] = "RPAY_ACNT_NUMB";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdTA_SLIPXM";
        			arrParam[5] = "RPAY_BANK_CODE,RPAY_BANK_NAME,RPAY_ACNT_NUMB,RPAY_BABR_CODE";
        			arrParam[6] = "0,1,2,4";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		}
            }
            
            if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
         
        /*---------------------------------------+
         |  미불건별로 반제생성
         +---------------------------------------*/
        this.fn_SLIP_GEN_1 = function () {
        	
        	// 선택한 대상만 복사
        	this.dsTA_SLIPXM.set_enableevent(false);
        	
        	this.dsTA_SLIPXM.filter("CHK==\"1\"");
        	this.dsTA_SLIPXM_SLIP.copyData(this.dsTA_SLIPXM, true);
        	this.dsTA_SLIPXM.filter("");
        	
        	this.dsTA_SLIPXM.set_enableevent(true);

        	//trace(this.dsTA_SLIPXM_SLIP.saveXML());

        	var sMethodName = "CREATE_SLIP";
        	var sInDataSet  = "dsTA_SLIPXM_SLIP=dsTA_SLIPXM_SLIP";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	//전표처리 트랜잭션 호출
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.grdTA_SLIPXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*---------------------------------------+
         |  통합생성 / 거래처별 생성
         +---------------------------------------*/
        this.fn_SLIP_GEN_2 = function () {

        	// 선택한 대상만 복사
        	this.dsTA_SLIPXM.set_enableevent(false);
        	this.dsTA_SLIPXM.filter("CHK==\"1\"");
        	this.dsTA_SLIPXM_SLIP.copyData(this.dsTA_SLIPXM, true);
        	this.dsTA_SLIPXM.filter("");
        	this.dsTA_SLIPXM.set_enableevent(true);
        	
        	//GROUP_KEY 생성
        	for (var i = 0; i < this.dsTA_SLIPXM_SLIP.getRowCount(); i++) {
        	
        		var DRCR_GUBN      = this.dsTA_SLIPXM_SLIP.getColumn(i, "DRCR_GUBN");
        		var RPAY_ACCT_INTL = this.fnc_LPad(this.dsTA_SLIPXM_SLIP.getColumn(i, "RPAY_ACCT_INTL"), "0", 10);
        		var RPAY_BANK_CODE = this.fnc_LPad(this.dsTA_SLIPXM_SLIP.getColumn(i, "RPAY_BANK_CODE"), "0", 10);
        		var RPAY_ACNT_NUMB = this.fnc_LPad(this.dsTA_SLIPXM_SLIP.getColumn(i, "RPAY_ACNT_NUMB"), "0", 40);
        		var RPAY_PAYX_DATE = this.fnc_LPad(this.dsTA_SLIPXM_SLIP.getColumn(i, "RPAY_PAYX_DATE"), "0", 10);
        		var RPAY_ISSU_DATE = this.fnc_LPad(this.dsTA_SLIPXM_SLIP.getColumn(i, "RPAY_ISSU_DATE"), "0", 10);
        		var RPAY_MANA_NOXX = this.fnc_LPad(this.dsTA_SLIPXM_SLIP.getColumn(i, "RPAY_MANA_NOXX"), "0", 40);
        		var VIEW_CODE 	   = this.dsTA_SLIPXM_SLIP.getColumn(i, "VIEW_CODE");
        		
        		var GROUP_KEY =
        			DRCR_GUBN +		 // 차대구분
        			RPAY_ACCT_INTL + // 결제계정코드
        			RPAY_BANK_CODE + // 결제은행코드
        			RPAY_ACNT_NUMB;	 // 당사계좌번호
        		
        		if (this.cmbGRUP_GUBN.value == "3") {
        			GROUP_KEY += VIEW_CODE; // 거래처코드
        		}
        			
        		this.dsTA_SLIPXM_SLIP.setColumn(i, "GROUP_KEY", GROUP_KEY);
        		
        	}
        	
        	//GROUP_KEY로 그룹화
        	this.dsTA_SLIPXM_SLIP_S.set_keystring("");
        	this.dsTA_SLIPXM_SLIP_S.copyData(this.dsTA_SLIPXM_SLIP);
        	this.dsTA_SLIPXM_SLIP_S.set_keystring("S:GROUP_KEY");

        	this.dsTA_SLIPXM_SLIP_G.set_keystring("");
        	this.dsTA_SLIPXM_SLIP_G.copyData(this.dsTA_SLIPXM_SLIP_S);
        	this.dsTA_SLIPXM_SLIP_G.set_keystring("G:GROUP_KEY,S:LAST_AMNT");

        	this.fnc_DatasetClear("dsTA_SLIPXM_SLIP_L");
        	
        	for (var i = 0; i < this.dsTA_SLIPXM_SLIP_G.getRowCount(); i++)	{
        		//그룹화된 행이 아니면 skip
        		if (this.dsTA_SLIPXM_SLIP_G.getRowLevel(i) == 0) continue;
        		
        		var LAST_AMNT = this.dsTA_SLIPXM_SLIP_G.getColumn(i, "LAST_AMNT");
        		var nRow = this.dsTA_SLIPXM_SLIP_L.addRow();
        		var orgRow = i - 1;
        		
        		this.dsTA_SLIPXM_SLIP_L.copyRow(nRow, this.dsTA_SLIPXM_SLIP_G, orgRow);	//그룹에 속한 가장 마지막로우(가장큰정리금액) 데이터 정보 복사
        		this.dsTA_SLIPXM_SLIP_L.setColumn(nRow, "LAST_AMNT", LAST_AMNT);
        	
        	}

        	var sMethodName = "CREATE_SLIP";
        	var sInDataSet 	= "dsTA_SLIPXM_SLIP=dsTA_SLIPXM_SLIP dsTA_SLIPXM_SLIP_L=dsTA_SLIPXM_SLIP_L ";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();
        }
         
        /*---------------------------------------+
         |  선택한건들의 합계 구함
         +---------------------------------------*/
        this.fn_chkSum = function () {
        	this.mskCHK_CNT.set_value(0);
        	this.mskLAST_AMNT_SUM.set_value(0);
        	
        	if (this.dsTA_SLIPXM.getCaseCount("CHK == 1") > 0 ) {
        		this.mskCHK_CNT.set_value(this.dsTA_SLIPXM.getCaseCount("CHK == 1"));
        	}
        	
        	if (this.dsTA_SLIPXM.getCaseSum("CHK == 1", "LAST_AMNT") > 0) {
        		this.mskLAST_AMNT_SUM.set_value(this.dsTA_SLIPXM.getCaseSum("CHK == 1", "LAST_AMNT"));
        	}
        }

        /*-----------------------------------------------------+
         |  뱅킹이체대상여부(true : 대상, false : 비대상)
         +-----------------------------------------------------*/
        this.fn_isBank = function(pRow) {

        	var sBankYn 	= false;
        	var sLedgGubn 	= this.dsTA_SLIPXM.getColumn(pRow, "RPAY_LEDG_GUBN");
        	var nRow 		= this.dsLEDG_GUBN.findRowExpr("COMD_CODE == '" + sLedgGubn + "'");
        	
        	if ( nRow >= 0 ) sBankYn = this.dsLEDG_GUBN.getColumn(nRow, "REF3_FILD");
        	
        	this.dsTA_SLIPXM.setColumn(pRow, "ISBANK", sBankYn);
        	return sBankYn;
        }

        /*-----------------------------------------------------+
         |  전표처리 유효성 점검
         +-----------------------------------------------------*/
        this.fn_isChkValDoc  = function() {

        	if ( this.fnc_Length(this.fnc_Trim(this.calSLIP_DATE.value)) < 1) {
        		this.fnc_Message("TMM008", "전표일자"); //[전표일자]는(은) 필수입력 항목입니다!
        		this.calSLIP_DATE.setFocus();
        		return false;
        	}
        	
        	var icheckCount = 0;
        	var nRow  = -1;
        	var nRow2 = -1;
        	var sMsg;
        	var sCdNm;
        	
        	for (var i = 0; i < this.dsTA_SLIPXM.getRowCount(); i++) {
        		if (this.dsTA_SLIPXM.getColumn(i, "CHK") == "1") {
        			icheckCount++;

        			if (nexacro.toNumber(this.dsTA_SLIPXM.getColumn(i, "LAST_AMNT"), 0) == 0) {
        				return this.fnc_CheckPostAction("TMM072", "정리금액", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "LAST_AMNT");
        			}

        			if (nexacro.toNumber(this.dsTA_SLIPXM.getColumn(i, "LAST_AMNT"), 0) > nexacro.toNumber(this.dsTA_SLIPXM.getColumn(i, "REMA_AMNT"), 0)) {
        				return this.fnc_CheckPostAction("TMM125", "정리금액은 잔액을 초과 할 수 없습니다!", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "LAST_AMNT");
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_ACCT_INTL"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "결제계정코드", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_ACCT_NAME");
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_REMK_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "적요", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_REMK_NAME");
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_BANK_INOU"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "입출", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_BANK_INOU");
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_LEDG_GUBN"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "출납방법", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_LEDG_GUBN");
        			}
        			
        			if ( !this.fn_isBank(i) && this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_ACNT_NUMB"))) > 0) {
        				return this.fnc_CheckPostAction("TMM125", "선택된 출납방법은 당사계좌번호를 입력 할 수 없습니다!", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_ACNT_NUMB");
        			} else if (this.fn_isBank(i) && this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_ACNT_NUMB"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "당사계좌번호", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_ACNT_NUMB");
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_PAYX_DATE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "지급일", this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_PAYX_DATE");
        			}
        			
        			//전표유형별(미불(반제)) 보조2값 기준 필수 입력 관리항목 체크!!
        			nRow = this.dsSLIP_TYPE.findRowExpr("ACCT_INTL == '"+this.dsTA_SLIPXM.getColumn(i, "RPAY_ACCT_INTL")+"'");
        			if ( nRow < 0 || this.IsNull(this.fnc_Trim(this.dsSLIP_TYPE.getColumn(nRow, "REF2_FILD"))))	continue;
        			
        			if (this.fnc_Trim(this.dsSLIP_TYPE.getColumn(nRow, "REF2_FILD")) == "현금") {
        				//출납방법(현금지급만 허용)
        				if (this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_LEDG_GUBN")) != "FC150071") {
        				   
        				   nRow2 = this.dsLEDG_GUBN.findRowExpr("COMD_CODE == 'FC150071'");
        				   if ( nRow2 >= 0 )	sCdNm = this.dsLEDG_GUBN.getColumn(nRow2, "COMD_CDNM");
        				   
        				   sMsg = "["+this.dsTA_SLIPXM.getColumn(i, "RPAY_ACCT_NAME") + "] " +
        						  "계정은 출납방법이 [" + sCdNm +"] 만 허용합니다";
        				   
        				   return this.fnc_CheckPostAction("TMM125", sMsg, this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_LEDG_GUBN");
        				}
        			} else if (this.fnc_Trim(this.dsSLIP_TYPE.getColumn(nRow, "REF2_FILD")) == "예금") {
        				//출납방법(일반경비만 허용)
        				if (this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_LEDG_GUBN")) != "FC150081" && 
        				   this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_LEDG_GUBN")) != "FC150082") {
        				   
        				   sMsg = "["+this.dsTA_SLIPXM.getColumn(i, "RPAY_ACCT_NAME") + "] " +
        						  "계정은 출납방법이 [일반경비]만 허용합니다";
        				   
        				   return this.fnc_CheckPostAction("TMM125", sMsg, this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_LEDG_GUBN");
        				}
        				
        			} else if (this.fnc_Trim(this.dsSLIP_TYPE.getColumn(nRow, "REF2_FILD")) == "구매카드") {
        				//1.출납방법(기업구매카드결제만 허용)
        				if (this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_LEDG_GUBN")) != "FC150061") {
        				   
        				   nRow2 = this.dsLEDG_GUBN.findRowExpr("COMD_CODE == 'FC150061'");
        				   if ( nRow2 >= 0 )	sCdNm = this.dsLEDG_GUBN.getColumn(nRow2, "COMD_CDNM");
        				   
        				   sMsg = "["+this.dsTA_SLIPXM.getColumn(i, "RPAY_ACCT_NAME") + "] " +
        						  "계정은 출납방법이 [" + sCdNm +"] 만 허용합니다";
        						  				   
        				   return this.fnc_CheckPostAction("TMM125", sMsg, this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_LEDG_GUBN");
        				}
        				
        				//2.발행일 필수
        				if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPXM.getColumn(i, "RPAY_ISSU_DATE"))) < 1) {
        					sMsg = "["+this.dsTA_SLIPXM.getColumn(i, "RPAY_ACCT_NAME") + "] " +
        						  "계정은 [발행일]이 필수입니다";
        						  			
        					return this.fnc_CheckPostAction("TMM125", sMsg, this.dsTA_SLIPXM, i, this.grdTA_SLIPXM, "RPAY_ISSU_DATE");
        				}
        			}
        		}
        	}

        	if (icheckCount == 0) {
        		this.fnc_Message("TMM125", "처리대상을 선택하십시오!!");
        		return false;
        	}
        	
        	return true;
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         
        /*---------------------------------------+
         |  DATASET "dsTA_SLIPXM" ROW 변경시 
         +---------------------------------------*/
        this.dsTA_SLIPXM_onrowposchanged = function(obj,e) {

        	//초기화
        	this.fnc_DatasetClear("dsTA_SLIPNT");
        	
        	if (nexacro.toNumber(this.grdTA_SLIPNT.getCellProperty("head", 0, "text"), 0) == 1) {
        		this.grdTA_SLIPNT.setCellProperty("head", 0, "text", "0");
        	}
        	
        	if (e.newrow == -1) return;

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*---------------------------------------+
         |  전표처리 버튼 클릭시
         +---------------------------------------*/
        this.btnCREATE_SLIP_OnClick = function (obj,e) {
        	
        	if (this.dsTA_SLIPXM.getRowCount() == 0) {
        		this.fnc_Message("TMM141"); //조회된 데이터가 없습니다. 조회 후 작업하세요!
        		return false;
        	}
        	
        	//미불(반제) 필수 입력 관리항목 조회
        	this.fnc_DatasetClear("dsSLIP_TYPE");
        	
        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsSLIP_TYPE=dsSLIP_TYPE";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*---------------------------------------+
         |  전표(정리) 삭제 클릭 시
         +---------------------------------------*/
        this.btnDELETE_SLIP_OnClick = function(obj,e) {

        	var nRow = this.grdTA_SLIPXM.position;
        	
        	if ( nRow < 0 )	return false;
        	
        	this.fnc_DatasetClear("dsTA_SLIPNT_SLIP");
        	
        	// 선택한 대상만 복사
        	this.dsTA_SLIPNT.set_enableevent(false);
        	
        	this.dsTA_SLIPNT.filter("CHK==\"1\"");
        	this.dsTA_SLIPNT_SLIP.copyData(this.dsTA_SLIPNT, true);
        	this.dsTA_SLIPNT.filter("");
        	
        	this.dsTA_SLIPNT.set_enableevent(true);
        	
        	if ( this.dsTA_SLIPNT_SLIP.getRowCount() < 1 ) {
        		this.fnc_Message("TMM020"); //삭제 할 자료를 선택해 주세요.
        		return;
        	}
        	
        	var nCnt = this.dsTA_SLIPNT_SLIP.rowcount;
        	
        	//선택된 자료 [ @ ]건를 삭제 하시겠습니까?
        	if ( !this.fnc_Message("TMM004", nCnt) )	return; 
        	
        	this.sRetValue = "";
        	
        	var sMethodName = "DELETE_SLIP";
        	var sInDataSet  = "dsTA_SLIPNT_SLIP=dsTA_SLIPNT_SLIP";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	//전표처리 트랜잭션 호출
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.grdTA_SLIPXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*---------------------------------------+
         |  DATASET "dsTA_SLIPXM" 값 변경 시
         +---------------------------------------*/
        this.dsTA_SLIPXM_oncolumnchanged = function (obj,e) {
        	
        	if (e.oldvalue == e.newvalue) return;

        	this.fn_chkSum();

        	if (e.columnid == "CHK") {

        		obj.set_enableevent(false);
        		obj.set_updatecontrol(false);

        		obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);

        		obj.set_updatecontrol(true);
        		obj.set_enableevent(true);

        	}
        	//결제계정
        	else if (e.columnid == "RPAY_ACCT_NAME" || e.columnid == "RPAY_ACNT_NUMB") {
        		this.fn_HelpDialoge(this.grdTA_SLIPXM, "YES", e.oldvalue, e.columnid);
        	
        	} 
        	//출납방법
        	else if (e.columnid == "RPAY_LEDG_GUBN") {
        		//뱅킹이체대상이 아니라면 금융기관 및 계좌번호 삭제
        		if (!this.fn_isBank(e.row)) {
        			this.dsTA_SLIPXM.setColumn(e.row, "RPAY_ACNT_NUMB", ""); //결제계좌번호
        			this.dsTA_SLIPXM.setColumn(e.row, "RPAY_BANK_CODE", ""); //결제은행코드
        			this.dsTA_SLIPXM.setColumn(e.row, "RPAY_BANK_NAME", ""); //결제은행코드명
        			this.dsTA_SLIPXM.setColumn(e.row, "RPAY_BABR_CODE", ""); //결제은행지점코드
        		}
        	}
        }

        /*---------------------------------------+
         |  잔액복사 버튼 클릭 시
         +---------------------------------------*/
        this.btnREMAIN_COPY_onclick = function (obj,e) {

        	if (this.dsTA_SLIPXM.getRowCount() == 0) {
        		this.fnc_Message("TMM141"); //조회된 데이터가 없습니다. 조회 후 작업하세요!
        		return false;
        	}
        	
        	var icheckCount = 0;
        	for (var i = 0; i < this.dsTA_SLIPXM.getRowCount(); i++) {
        		if (this.dsTA_SLIPXM.getColumn(i, "CHK") == "1") {
        			icheckCount++;
        			if (nexacro.toNumber(this.dsTA_SLIPXM.getColumn(i, "LAST_AMNT"), 0) == 0) {
        				this.dsTA_SLIPXM.setColumn(i, "LAST_AMNT", nexacro.toNumber(this.dsTA_SLIPXM.getColumn(i, "REMA_AMNT"), 0));
        			}
        		}
        	}

        	if (icheckCount == 0) {
        		this.fnc_Message("TMM125", " 처리대상을 선택하십시요");
        		return;
        	}

        	this.fn_chkSum();
        	
        }

        
        /*---------------------------------------+
         |  GRID "grdTA_SLIPXM" CELL 더블클릭 시 
         +---------------------------------------*/
        this.grdTA_SLIPXM_OnCellDblClick = function (obj,e) {
        	var columnName = this.fnc_getColId(obj, e.cell);
        	var objDs = this.objects[obj.binddataset];

        	var sSLIP_NUMB = "";
        	var sSLIP_NUMB_LINE = "";
        	
        	// 전표번호 클릭
        	if (columnName == "SLIP_KEY") {
        	
        		//전표번호+라인이 18자리 미만인지 체크
        		if (this.fnc_Length(objDs.getColumn(e.row, "SLIP_KEY")) < 18) return;
        		
        		//전표번호가 존재하는지 체크
        		sSLIP_NUMB = this.fnc_SubStr(objDs.getColumn(objDs.rowposition, "SLIP_KEY"), 0, 14);
        		sSLIP_NUMB_LINE = this.fnc_SubStr(objDs.getColumn(objDs.rowposition, "SLIP_KEY"), 14, 4);

        		if (this.fnc_Length(sSLIP_NUMB) < 14) return;
        		
        		//전표보기 수행
        		this.fnc_ViewSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL,"",sSLIP_NUMB_LINE); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	}
        	
        }

        /*---------------------------------------+
         |  GRID "grdTA_SLIPNT" 더블 클릭 시
         +---------------------------------------*/
        this.grdTA_SLIPNT_OnCellDblClick = function (obj,e) {

        	//var sGwxxStat = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "GW_STATUS");
        	var columnName = this.fnc_getColId(obj, e.cell);
        	var objDs = this.objects[obj.binddataset];
        	
        	if (columnName == "DISP_NUMB") {
        		// 전표번호
        		if (this.fnc_Length(objDs.getColumn(e.row, "SLIP_NUMB")) < 14) return;
        		var sSLIP_NUMB = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");
        		var sSlip_NUMB_LINE = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");
        		
        		// 전표보기
        		this.fnc_ViewSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL,"",sSlip_NUMB_LINE); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	}
        }

        /*---------------------------------------+
         |  일괄넣기 버튼 클릭 시  
         +---------------------------------------*/
        this.btnAPPLY_ALL_OnClick = function (obj,e) {
        	
        	if (this.dsTA_SLIPXM.getRowCount() == 0) {
        		this.fnc_Message("TMM141"); //조회된 데이터가 없습니다. 조회 후 작업하세요!
        		return false;
        	}

        	if (this.dsTA_SLIPXM.getCaseCount("CHK==\"1\"") == 0) {
        		this.fnc_Message("TMM125", "일괄넣기 할 데이터를 선택하세요");
        		return false;
        	}

        	for (var i=0; i < this.dsTA_SLIPXM.getRowCount(); i++) {		
        		if (this.dsTA_SLIPXM.getColumn(i, "CHK") != "1") continue;

        		if (this.fnc_Length(this.fnc_Trim(this.edtACCT_INTL.value)) > 0) 
        		{
        			this.dsTA_SLIPXM.setColumn(i, "RPAY_ACCT_INTL", this.edtACCT_INTL.value); //계정과목
        			this.dsTA_SLIPXM.setColumn(i, "RPAY_ACCT_NAME", this.edtACCT_NAME.value); //계정과목명
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.cmbLEDG_GUBN.value)) > 0) {
        			this.dsTA_SLIPXM.setColumn(i, "RPAY_LEDG_GUBN", this.cmbLEDG_GUBN.value); //결제출납방법
        		}
        		
        		if (this.fn_isBank(i)) {
        			//출납구분[LEDG_GUBN]의 보조필드2 <뱅킹이체대상여부>가 "1"인 경우에만 금융기관 및 계좌번호 관리항목 입력	
        			if (this.fnc_Length(this.fnc_Trim(this.edtACNT_NUMB.value)) > 0) {
        				this.dsTA_SLIPXM.setColumn(i, "RPAY_ACNT_NUMB", this.edtACNT_NUMB.value); //결제계좌번호
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.edtBANK_CODE.value)) > 0) {
        				this.dsTA_SLIPXM.setColumn(i, "RPAY_BANK_CODE", this.edtBANK_CODE.value); //결제은행코드
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.edtBANK_CODE.value)) > 0) {
        				this.dsTA_SLIPXM.setColumn(i, "RPAY_BANK_NAME", this.edtBANK_NAME.value); //결제은행코드명
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.edtBABR_CODE.value)) > 0) {
        				this.dsTA_SLIPXM.setColumn(i, "RPAY_BABR_CODE", this.edtBABR_CODE.value); //결제은행지점코드
        			}
        		} else {
        			this.dsTA_SLIPXM.setColumn(i, "RPAY_ACNT_NUMB", ""); //결제계좌번호
        			this.dsTA_SLIPXM.setColumn(i, "RPAY_BANK_CODE", ""); //결제은행코드
        			this.dsTA_SLIPXM.setColumn(i, "RPAY_BANK_NAME", ""); //결제은행코드명
        			this.dsTA_SLIPXM.setColumn(i, "RPAY_BABR_CODE", ""); //결제은행지점코드
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.calPAYX_DATE.value)) > 0) {
        			this.dsTA_SLIPXM.setColumn(i, "RPAY_PAYX_DATE", this.calPAYX_DATE.value); //결제지급일
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.calISSU_DATE.value)) > 0) {
        			this.dsTA_SLIPXM.setColumn(i, "RPAY_ISSU_DATE", this.calISSU_DATE.value); //결제발행일
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.edtMANA_NOXX.value)) > 0) {
        			this.dsTA_SLIPXM.setColumn(i, "RPAY_MANA_NOXX", this.edtMANA_NOXX.value); //프로젝트코드
        		}
        	}

        	this.fn_chkSum();
        }

        /*---------------------------------------+
         |  GRID "grdTA_SLIPXM" 헤더 클릭 시  
         +---------------------------------------*/
        this.grdTA_SLIPXM_onheadclick = function(obj,e) {
        	
        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", "CHK")) ) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} 
        	else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}

        	/* Dataset에 Value 일괄 설정 */
        	obj.set_enableredraw(false);
        	for (var i=0; i < objDataSet.rowcount; i++) {
        		if (nexacro.toNumber(objDataSet.getColumn(i, "REMA_AMNT"), 0) != 0) {
        			objDataSet.setColumn(i, "CHK", iCheckValue);
        		}
        	}	
        	obj.set_enableredraw(true);
        	
        }
        /*---------------------------------------+
         |  GRID "grdTA_SLIPNT" 헤더 클릭 시  
         +---------------------------------------*/
        this.grdTA_SLIPNT_onheadclick = function(obj,e)
        {
        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", "CHK")) ) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} 
        	else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}

        	/* Dataset에 Value 일괄 설정 */
        	for (var i=0; i < objDataSet.rowcount; i++) {
        		objDataSet.setColumn(i, "CHK", iCheckValue);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPXM.addEventHandler("onrowposchanged", this.dsTA_SLIPXM_onrowposchanged, this);
            this.dsTA_SLIPXM.addEventHandler("oncolumnchanged", this.dsTA_SLIPXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_SLIPXM.addEventHandler("oncelldblclick", this.grdTA_SLIPXM_OnCellDblClick, this);
            this.grdTA_SLIPXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdTA_SLIPXM.addEventHandler("onheadclick", this.grdTA_SLIPXM_onheadclick, this);
            this.btnREMAIN_COPY.addEventHandler("onclick", this.btnREMAIN_COPY_onclick, this);
            this.btnCREATE_SLIP.addEventHandler("onclick", this.btnCREATE_SLIP_OnClick, this);
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_OnCellDblClick, this);
            this.grdTA_SLIPNT.addEventHandler("onheadclick", this.grdTA_SLIPNT_onheadclick, this);
            this.btnAPPLY_ALL.addEventHandler("onclick", this.btnAPPLY_ALL_OnClick, this);
            this.mskCHK_CNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskLAST_AMNT_SUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnCREATE_SLIP00.addEventHandler("onclick", this.btnDELETE_SLIP_OnClick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_INT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRREMA_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAM1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_NAM1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREXCP_ACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREXCP_ACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREXCP_ACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_INT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAM2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_NAM2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRACCT_NAM1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_NAM2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHREXCP_ACCT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtACNT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtACNT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBANK_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbLEDG_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calISSU_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMANA_NOXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSLIP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbGRUP_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.ImgHelpACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpACNT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("TRMA0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
