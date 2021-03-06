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
                this.set_name("TXMC0170");
                this.set_titletext("전자신고");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVAT_QUARTER", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"256\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\"/><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">1기예정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">2</Col><Col id=\"SUBNAME\">1기확정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">3</Col><Col id=\"SUBNAME\">2기예정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">4</Col><Col id=\"SUBNAME\">2기확정</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVAT_REPORT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"VAT_V101\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V104\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V105\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V106\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V109\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V110\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V112\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V117\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V141\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V149\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V153\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V164\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V166\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V171\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V181\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V177\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_V179\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT117_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_CREDIT_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_CASH_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAX_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAX_CREDIT_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAX_CASH_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXC_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXC_CREDIT_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXC_CASH_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TIP_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TIP_CREDIT_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TIP_CASH_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SBILL_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"KBILL_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT106_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCUMENT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSUER_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSUE_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHIP_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXP_CUR_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXCHANGE_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SENDE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SENDW_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REPOE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REPOW_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT112_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BDR_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT149_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ASSETS_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ASSETS_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ASSETS_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASSETS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASSETS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT171_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EBILL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUREXC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXCEPT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PREEXC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"LIMIT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUR_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"LIMIT_YEAR\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT104_H1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT104_H2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT104_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFF_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OFF_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OFF_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"LIQUOR_WCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LIQUOR_SCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DELAYYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT105_H1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT105_H2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT105_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFF_TAXB_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OFF_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OFF_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"LIQUOR_WCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LIQUOR_SCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DELAYYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT110_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFF_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OFF_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BILL_TYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"DELAYYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT109_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"OFF_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OFF_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BILL_TYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"DELAYYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT141_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_E_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_W_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GOODS_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GOODS_E_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GOODS_W_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ETC_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ETC_E_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ETC_W_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT141_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPORT_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPORT_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPORT_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPORT_CURCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXCHANGE_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPORT_E_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPORT_W_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT164_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CREDIT_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CREDIT_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CREDIT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CREDIT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INCOME_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INCOME_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"INCOME_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT153_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNABLE_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNABLE_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNABLE_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNABLE_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNABLE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNABLE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT153_D1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNABLE_SEQ1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMPUR_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COMPUR_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNABLE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNABLE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT153_D2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNABLE_SEQ2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTPUR_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXCEPT_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNATOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PREUNA_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ADDUNA_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT153_D3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNABLE_SEQ3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PURGOO_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ADDMIN_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ADDEXC_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ADDUNA_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT153_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT166_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_APPRNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT166_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNITBRA_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNITBRA_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UNITBRA_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNITBRA_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"UNITBRA_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SALBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SALBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SALETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SALETC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ZERETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SALTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PURBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PURBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AGENDA_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AGENDA_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ADDTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RETURN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRETU_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RETU_CODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"RETU_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"RETU_CODE\"/><Col id=\"RETU_NAME\"/></Row><Row><Col id=\"RETU_CODE\">1</Col><Col id=\"RETU_NAME\">일반환급</Col></Row><Row><Col id=\"RETU_CODE\">2</Col><Col id=\"RETU_NAME\">영세율 환급</Col></Row><Row><Col id=\"RETU_CODE\">3</Col><Col id=\"RETU_NAME\">시설투자 환급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_CELL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXOFFICE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HOMETAX_ID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_POST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_H1", this);
            obj.set_keystring("BDR_TYPECD");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_SYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_EYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_CYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_CELL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_EMAIL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LOCATION\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_SYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REVISION_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_PURPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_PURPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_CRECAS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_CRECAS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXETC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_ZERETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_WILMIS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_WILMIS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_DOUADD_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_DOUADD_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ASSETS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ASSETS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_WILTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_WILTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PURPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PURPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ETCBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PTOTAL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PTOTAL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_UNABLE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_UNABLE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ADDMIN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ADDMIN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SP_RETURN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_ETCMIN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_CREDIT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_CREDIT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_MINTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_WILRET_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_NOTRET_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_PROHIB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_ADDTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_PAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"IH_EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"IH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_PROXY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SALTOT_SAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SALTOT_VAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"VAT_REF_VAMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT181_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LOCATION\" size=\"70\" prop=\"default\" type=\"STRING\"/><Column id=\"SUIP_STDT\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SUIP_EDDT\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SUIP_RATE\" size=\"10\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEPO_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONR_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TSUM_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEPO_RAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TMON_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"IMDE_CONT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CORP_JONG\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"INS_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INS_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT181_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQU_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_DONG\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_FQTY\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_HOSU\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_AREA\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_IPJU\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TRAN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_CLOS\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPO_SAMT\" size=\"13\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONR_SAMT\" size=\"13\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TSUM_SAMT\" size=\"13\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEPO_RAMT\" size=\"13\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TMON_SAMT\" size=\"13\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INS_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INS_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT109_H1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT110_H1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_H2", this);
            obj.set_keystring("BDR_TYPECD");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SW_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_TAXETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_TAXETC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_ZERETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_SALTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SW_SALTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_ETCBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PW_PURTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_CREDIT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_CREDIT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_AGENDA_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_AGENDA_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_RECYCL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_RECYCL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_CONVER_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ALAGEN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ALAGEN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ASSETS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_ASSETS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_STOCKP_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_BADDEP_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PD_PURTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_UNABLE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_UNABLE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_EXCEPT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_DOUADD_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_DOUADD_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PN_PURTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_EBIPAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_EBITAX_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_TAXICO_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_CASBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RD_ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_BIZMIS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_BIZMIS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIDEL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIDEL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBDERV_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBDERV_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOTPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOTPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIOVE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIOVE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIEXC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_EBIEXC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPORT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPORT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOSEND_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_NOSEND_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ZERBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_CASNOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_CASNOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ADDTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXDEL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_TAXDEL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR1_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR1_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR2_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR2_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR3_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR3_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR4_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_REPOR4_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ESTATE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ESTATE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DF_EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DF_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BD_SALTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BD_PURTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REFUND_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_BANKCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_BANKNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_TOTPAYNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_BANKBRANCH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_EYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOSING_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_REF_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_NTAX_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_EARLY_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_UNITTAXNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PD_FOREINER_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCNOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCNOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCDELAY_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AD_ACCDELAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT110_H2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SSN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT109_H2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT177_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DIRECT_EXPORT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CONSIGNMENT_EXPORT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPROVAL_GOODS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CARRING_GOODS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PROCESSING_GOODS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FOREIGN_SERVICE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PASSENGER_SERVICE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MULTIMODAL_SERVICE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CORPORATION_SERVICE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PROCESSING_SERVICE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PASSENGER_GOODS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UN_GOODS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TOURISM_SOUVENIR\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FOREIGN_GOODS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DIPLOMAT_GOODS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PATIENT_SERVICE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CORPS_PETROLEUM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RAILWAY_CONSTUCTION\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COUNTRY_INFRASTRUCTURE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DISABLED_PERSON\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FARMER_EQUIPMENT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TOURIST_GOODS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"JEJU_GOODS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SPECIAL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUM_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_D2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDUCT_TYPECD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDU_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_VAMT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_D3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ADTX_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ADTX_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ADTXVAMT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape01", "absolute", "8", "366", null, "147", "25", null, this);
            obj.set_taborder("100");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "27", "377", "44", "21", null, null, this);
            obj.set_text("전체");
            obj.style.set_background("transparent");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "10", "112", "152", "21", null, null, this);
            obj.set_text("신고일반");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "10", "181", "152", "21", null, null, this);
            obj.set_text("국세환급금계좌신고");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "10", "250", "152", "21", null, null, this);
            obj.set_text("세무 대리인");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "10", "345", "152", "21", null, null, this);
            obj.set_text("전자신고 대상서식");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "27", "403", "148", "21", null, null, this);
            obj.set_text("부가가치세신고서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "336", "403", "192", "21", null, null, this);
            obj.set_text("매출처별 세금계산서합계표");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "336", "429", "192", "21", null, null, this);
            obj.set_text("신용카드매출전표 수취명세서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "600", "429", "241", "21", null, null, this);
            obj.set_text("신용카드매출전표발행금액등 집계표");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE1", "absolute", "265", "403", "14", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("styFormItemChk");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE6", "absolute", "530", "429", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("23");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE2", "absolute", "530", "403", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("19");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE7", "absolute", "832", "429", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("24");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE_ALL", "absolute", "71", "377", "14", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "600", "403", "241", "21", null, null, this);
            obj.set_text("매입처별 세금계산서합계표");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE3", "absolute", "832", "403", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("20");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "336", "455", "192", "21", null, null, this);
            obj.set_text("영세율첨부서류제출명세서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE10", "absolute", "530", "455", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("27");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "903", "455", "222", "21", null, null, this);
            obj.set_text("건물등 감가상각자산 취득명세서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE12", "absolute", "1114", "455", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("29");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "600", "455", "241", "21", null, null, this);
            obj.set_text("대손세액공제(변제) 신고서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE11", "absolute", "832", "455", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("28");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "903", "481", "222", "21", null, null, this);
            obj.set_text("사업자단위 신고명세서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE13", "absolute", "1114", "481", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("34");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE8", "absolute", "1114", "429", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("25");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "903", "429", "222", "21", null, null, this);
            obj.set_text("공제받지못할매입세액 명세서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "27", "455", "148", "21", null, null, this);
            obj.set_text("수출실적명세서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE9", "absolute", "265", "455", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("30");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "903", "403", "222", "21", null, null, this);
            obj.set_text("매입처별 계산서합계표 ");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE4", "absolute", "1114", "403", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("21");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "27", "429", "148", "21", null, null, this);
            obj.set_text("매출처별 계산서합계표");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE5", "absolute", "265", "429", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("26");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "336", "481", "192", "21", null, null, this);
            obj.set_text("부동산임대공급가액 명세서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE15", "absolute", "530", "481", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("32");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "600", "481", "241", "21", null, null, this);
            obj.set_text("영세율매출명세서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE16", "absolute", "832", "481", "14", "21", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("33");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "16", "48", "349", "25", null, null, this);
            obj.set_taborder("60");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("63");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "28", "71", "66", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "83", "71", "159", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static05", "absolute", "419", "71", "76", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "487", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Shape09", "absolute", "8", "133", null, "39", "25", null, this);
            obj.set_taborder("68");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "27", "142", "121", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_text("총괄납부승인번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTOTA_NUMB", "absolute", "149", "142", "130", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_maxlength("7");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "336", "142", "100", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("세무서코드");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "417", "142", "140", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "600", "142", "100", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("전자우편");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADIT_MAIL", "absolute", "668", "142", "140", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "902", "142", "70", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("휴대전화");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADIT_HAND", "absolute", "970", "142", "140", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Shape00", "absolute", "8", "202", null, "39", "25", null, this);
            obj.set_taborder("74");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "27", "211", "122", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("은행");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBANK_CODE", "absolute", "149", "211", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Static("Static40", "absolute", "336", "211", "100", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("지점");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBANK_NAME", "absolute", "417", "211", "140", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "600", "211", "100", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("계좌번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBANK_ACNT", "absolute", "668", "211", "140", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "902", "211", "70", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_text("환급구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRETU_GUBN", "absolute", "970", "211", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("dsRETU_GUBN");
            obj.set_codecolumn("RETU_CODE");
            obj.set_datacolumn("RETU_NAME");
            obj.set_cssclass("styFormItemText");
            obj.set_index("-1");

            obj = new Static("Shape02", "absolute", "8", "271", null, "65", "25", null, this);
            obj.set_taborder("87");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "27", "280", "122", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("성명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "149", "280", "130", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "336", "280", "100", "21", null, null, this);
            obj.set_taborder("95");
            obj.set_text("관리번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "417", "280", "140", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "600", "280", "100", "21", null, null, this);
            obj.set_taborder("97");
            obj.set_text("전화번호 ");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "668", "280", "140", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "902", "280", "70", "21", null, null, this);
            obj.set_taborder("99");
            obj.set_text("홈택스ID");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "970", "280", "140", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("102");
            obj.set_text("전자신고");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("103");
            obj.set_text("홈 > 세무관리 > 부가세신고 > 전자신고");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("104");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("105");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("106");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("107");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("108");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("109");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "573", "103", "80", "30", null, null, this);
            obj.set_taborder("110");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("111");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("112");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("113");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("114");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "242", "61", "40", "41", null, null, this);
            obj.set_taborder("115");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "391", "61", "40", "41", null, null, this);
            obj.set_taborder("116");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "562", "172", "80", "30", null, null, this);
            obj.set_taborder("117");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "562", "241", "80", "30", null, null, this);
            obj.set_taborder("118");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medPRDE_TAXX", "absolute", "547", "306", "122", "21", null, null, this);
            obj.set_enable("true");
            obj.set_taborder("16");
            obj.set_mask("#,###");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medADDI_TAXX", "absolute", "149", "306", "130", "21", null, null, this);
            obj.set_enable("true");
            obj.set_taborder("15");
            obj.set_mask("#,###");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "753", "306", "182", "21", null, null, this);
            obj.set_text("사업자단위과세승인번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSPERMITNUM", "absolute", "913", "306", "197", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("7");
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "27", "306", "120", "21", null, null, this);
            obj.set_text("가산세액계");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "336", "306", "243", "21", null, null, this);
            obj.set_text("차가감납부할세액(환급받을세액)");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "9", "137", "30", "33", null, null, this);
            obj.set_taborder("120");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "28", "481", "254", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_text("전자세금계산서 교부세액 공제신고서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE00", "absolute", "265", "481", "14", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "19", "541", "1117", "131", null, null, this);
            obj.set_taborder("123");
            obj.set_binddataset("dsVA_VATBRANCH");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"BRANCH_CD\"/><Cell col=\"1\" disptype=\"normal\" text=\"BRANCH_NM\"/><Cell col=\"2\" disptype=\"normal\" text=\"CORP_ADDR\"/><Cell col=\"3\" disptype=\"normal\" text=\"CORP_TEL\"/><Cell col=\"4\" disptype=\"normal\" text=\"CORP_CELL\"/><Cell col=\"5\" disptype=\"normal\" text=\"CORP_MASTER\"/><Cell col=\"6\" disptype=\"normal\" text=\"CORP_NM\"/><Cell col=\"7\" disptype=\"normal\" text=\"CORP_NO\"/><Cell col=\"8\" disptype=\"normal\" text=\"CORP_TYPENM\"/><Cell col=\"9\" disptype=\"normal\" text=\"CORP_LINE\"/><Cell col=\"10\" disptype=\"normal\" text=\"TAXOFFICE_CD\"/><Cell col=\"11\" disptype=\"normal\" text=\"HOMETAX_ID\"/><Cell col=\"12\" disptype=\"normal\" text=\"CORP_POST\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:BRANCH_CD\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:BRANCH_NM\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:CORP_ADDR\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:CORP_TEL\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:CORP_CELL\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:CORP_MASTER\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:CORP_NM\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:CORP_NO\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:CORP_TYPENM\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:CORP_LINE\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:TAXOFFICE_CD\"/><Cell col=\"11\" disptype=\"normal\" text=\"bind:HOMETAX_ID\"/><Cell col=\"12\" disptype=\"normal\" text=\"bind:CORP_POST\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "272", "71", "50", "21", null, null, this);
            obj.set_taborder("124");
            obj.set_text("연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRVAT_YYYY", "absolute", "314", "71", "77", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전자신고");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("medPRDE_TAXX_value","medPRDE_TAXX","value","dsTA_VAT101_H1","VAT_PAY_VAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medADDI_TAXX_value","medADDI_TAXX","value","dsTA_VAT101_H1","RH_ADDTOT_VAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE6_value","chkVATX_FILE6","value","dsVAT_REPORT","VAT_V164");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE2_value","chkVATX_FILE2","value","dsVAT_REPORT","VAT_V104");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE7_value","chkVATX_FILE7","value","dsVAT_REPORT","VAT_V117");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSPERMITNUM_value","edtSPERMITNUM","value","dsTA_VAT101_H2","VAT_UNITTAXNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE3_value","chkVATX_FILE3","value","dsVAT_REPORT","VAT_V105");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE10_value","chkVATX_FILE10","value","dsVAT_REPORT","VAT_V106");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE12_value","chkVATX_FILE12","value","dsVAT_REPORT","VAT_V149");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE11_value","chkVATX_FILE11","value","dsVAT_REPORT","VAT_V112");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE13_value","chkVATX_FILE13","value","dsVAT_REPORT","VAT_V166");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE8_value","chkVATX_FILE8","value","dsVAT_REPORT","VAT_V153");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE9_value","chkVATX_FILE9","value","dsVAT_REPORT","VAT_V141");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE4_value","chkVATX_FILE4","value","dsVAT_REPORT","VAT_V109");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE5_value","chkVATX_FILE5","value","dsVAT_REPORT","VAT_V110");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE15_value","chkVATX_FILE15","value","dsVAT_REPORT","VAT_V181");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE16_value","chkVATX_FILE16","value","dsVAT_REPORT","VAT_V177");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","chkVATX_FILE1","value","dsVAT_REPORT","VAT_V101");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtTOTA_NUMB","value","dsTA_VAT101_H2","VAT_TOTPAYNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit01","value","dsVA_VATBRANCH","TAXOFFICE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtADIT_MAIL","value","dsTA_VAT101_H1","CORP_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtADIT_HAND","value","dsTA_VAT101_H1","CORP_CELL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cmbBANK_CODE","value","dsTA_VAT101_H2","VAT_BANKCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtBANK_NAME","value","dsTA_VAT101_H2","VAT_BANKBRANCH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtBANK_ACNT","value","dsTA_VAT101_H2","VAT_BANKNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cmbRETU_GUBN","value","dsTA_VAT101_H2","REFUND_TYPECD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Edit00","value","dsTA_VAT101_H1","AGENT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Edit02","value","dsTA_VAT101_H1","AGENT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Edit03","value","dsTA_VAT101_H1","AGENT_TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Edit05","value","dsTA_VAT101_H1","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","chkVATX_FILE00","value","dsVAT_REPORT","VAT_V104");
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
        this.addIncludeScript("TXMC0170.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMC0170.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMC0170  부가세전자신고
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
         /*************************
         *  공통 Script Include  *
         **************************/
        //include "script::lib_script_common.xjs"

        /***********************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST 	= "TTFFFTFF";
        this.sPACKAGENAME 	= "TXMC0170";
        this.sSERVERDATE  	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);
        this.sFILESAVE 		= ""; 	//파일 저장에 사용하는 변수
        this.sTaxBillHeader = "N"; 	//세금계산서 표지 처리 여부
        this.sBillHeader 	= "N"; 	//계산서 A, B레코드 처리 여부
        this.sCardCnt 		= 0; 	//신용카드매출전표등수취명세서 cnt
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

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

        /****************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         *****************************************************************************************************/
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
        	} else if (sStds_Mnth >= "04" && sStds_Mnth <= "06") {
        		sVatQuarter = "2";		
        	} else if (sStds_Mnth >= "07" && sStds_Mnth <= "09") {
        		sVatQuarter = "3";		
        	} else if (sStds_Mnth >= "10" && sStds_Mnth <= "12") {
        		sVatQuarter = "4";		
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

        	if (!this.fn_SearchItemCheck()) return;

        	var sMethodName  = "SEARCH00";
        	var sInDataSet 	 = "";
        	var sOutDataSet  = "dsVAT_REPORT=dsVAT_REPORT ";
        		sOutDataSet += "dsVA_VATBRANCH=dsVA_VATBRANCH ";
        		sOutDataSet += "dsTA_VAT101_H1=dsTA_VAT101_H1 ";
        		sOutDataSet += "dsTA_VAT101_H2=dsTA_VAT101_H2 ";
        		sOutDataSet += "dsTA_VAT101_D=dsTA_VAT101_D ";
        		sOutDataSet += "dsTA_VAT101_D2=dsTA_VAT101_D2 ";
        		sOutDataSet += "dsTA_VAT101_D3=dsTA_VAT101_D3 ";
        		sOutDataSet += "dsTA_VAT104_D=dsTA_VAT104_D ";
        		sOutDataSet += "dsTA_VAT104_H1=dsTA_VAT104_H1 ";
        		sOutDataSet += "dsTA_VAT104_H2=dsTA_VAT104_H2 ";
        		sOutDataSet += "dsTA_VAT105_D=dsTA_VAT105_D ";
        		sOutDataSet += "dsTA_VAT105_H1=dsTA_VAT105_H1 ";
        		sOutDataSet += "dsTA_VAT105_H2=dsTA_VAT105_H2 ";
        		sOutDataSet += "dsTA_VAT110_D=dsTA_VAT110_D ";
        		sOutDataSet += "dsTA_VAT110_H1=dsTA_VAT110_H12 ";
        		sOutDataSet += "dsTA_VAT110_H2=dsTA_VAT110_H2 ";
        		sOutDataSet += "dsTA_VAT109_D=dsTA_VAT109_D ";
        		sOutDataSet += "dsTA_VAT109_H1=dsTA_VAT109_H1 ";
        		sOutDataSet += "dsTA_VAT109_H2=dsTA_VAT109_H2 ";
        		sOutDataSet += "dsTA_VAT164_D=dsTA_VAT164_D ";
        		sOutDataSet += "dsTA_VAT117_H=dsTA_VAT117_H ";
        		sOutDataSet += "dsTA_VAT153_H=dsTA_VAT153_H ";
        		sOutDataSet += "dsTA_VAT153_D=dsTA_VAT153_D ";
        		sOutDataSet += "dsTA_VAT153_D1=dsTA_VAT153_D1 ";
        		sOutDataSet += "dsTA_VAT153_D2=dsTA_VAT153_D2 ";
        		sOutDataSet += "dsTA_VAT153_D3=dsTA_VAT153_D3 ";
        		sOutDataSet += "dsTA_VAT141_H=dsTA_VAT141_H ";
        		sOutDataSet += "dsTA_VAT141_D=dsTA_VAT141_D ";
        		sOutDataSet += "dsTA_VAT106_D=dsTA_VAT106_D ";
        		sOutDataSet += "dsTA_VAT112_D=dsTA_VAT112_D ";
        		sOutDataSet += "dsTA_VAT149_H=dsTA_VAT149_H ";
        		sOutDataSet += "dsTA_VAT166_H=dsTA_VAT166_H ";
        		sOutDataSet += "dsTA_VAT166_D=dsTA_VAT166_D ";
        		sOutDataSet += "dsTA_VAT171_H=dsTA_VAT171_H ";
        		sOutDataSet += "dsTA_VAT181_H=dsTA_VAT181_H ";
        		sOutDataSet += "dsTA_VAT181_D=dsTA_VAT181_D ";
        		// 2013년 2기예정 추가(영세율매출명세서)
        		sOutDataSet += "dsTA_VAT177_H=dsTA_VAT177_H ";
        	var sArgument 	 = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack",false);

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

        	this.sFILESAVE 		= "";
        	this.sTaxBillHeader = "N";
        	this.sBillHeader 	= "N";
        	this.sCardCnt 		= 0; //2013 1기 예정 추가

        	if (this.chkVATX_FILE1.value == 1) {
        		this.fn_V101(); //부가세신고서
        	}

        	if (this.chkVATX_FILE2.value == 1) {
        		this.fn_V104(); //매출처별 세금계산서합계표
        	}

        	if (this.chkVATX_FILE3.value == 1) {
        		this.fn_V105(); //매입처별 세금계산서합계표
        	}

        	if (this.chkVATX_FILE5.value == 1) {
        		this.fn_V110(); //매출처별 계산서합계표
        	}

        	if (this.chkVATX_FILE4.value == 1) {
        		this.fn_V109(); //매입처별 계산서합계표
        	}

        	if (this.chkVATX_FILE6.value == 1) {
        		this.fn_V164(); //신용카드매출전표수취명세서
        	}

        	if (this.chkVATX_FILE7.value == 1) {
        		this.fn_V117(); //신용카드매출전표 발행금액 등 집계표
        	}

        	if (this.chkVATX_FILE8.value == 1) {
        		this.fn_V153(); //공제받지못할매입세액명세서
        	}

        	if (this.chkVATX_FILE9.value == 1) {
        		this.fn_V141(); //수출실적명세서
        	}

        	if (this.chkVATX_FILE10.value == 1) {
        		this.fn_V106(); //영세율첨부서류제출명세서
        	}

        	if (this.chkVATX_FILE11.value == 1) {
        		this.fn_V112(); //대손세액공제(변제)신고서
        	}

        	if (this.chkVATX_FILE12.value == 1) {
        		this.fn_V149(); //건물등감가상각자산취득명세서
        	}

        	if (this.chkVATX_FILE13.value == 1) {
        		this.fn_V166(); //사업자단위과세별부가세과세표준및납부세액
        	}

        	if (this.chkVATX_FILE15.value == 1) {
        		this.fn_V181(); //부동산임대공급가액 명세서
        	}

        	if (this.chkVATX_FILE16.value == 1) {
        		this.fn_V177(); //영세율매출명세서
        	}

        	if (!this.fn_FileCreateSave()) return;

        	this.fnc_Message("TMM103");

        }

        /*------------------+
         |  부가세신고서!  |
         +-------------------*/
        this.fn_V101 = function () {
        	this.fn_V101_Header(); // 신고서 Head 레코드
        	this.fn_V101_Record(); // 일반과세자 신고서 레코드
        	this.fn_V101_Detail1(); // 신고서 부가가치세수입금액등(과세표준명세, 면세수입금액) 레코드
        	this.fn_V101_Detail2(); // 신고서 부가가치세 공제감면 신고서 레코드 (2015.03.23. NEW)
        	this.fn_V101_Detail3(); // 신고서 부가가치세 가산세 신고서 레코드 (2015.03.23. NEW)

        }

        /*-----------------------------+
         |  매출 세금계산서 합계표!  |
         +------------------------------*/
        this.fn_V104 = function () {
        	// 표지
        	if (this.sTaxBillHeader == "N") {
        		this.fn_V104_V105_Header();
        	}

        	this.fn_V104_Detail(); // (전자세금계산서 이외분)매출자료(Data Record)
        	this.fn_V104_Header1(); // (전자세금계산서 이외분)매출합계(Total Record)
        	this.fn_V104_Header2(); // 전자세금계산서분 매출합계(Total Record)
        }

        /*-----------------------------+
         |  매입 세금계산서 합계표!  |
         +------------------------------*/
        this.fn_V105 = function () {
        	// 표지
        	if (this.sTaxBillHeader == "N") {
        		this.fn_V104_V105_Header();
        	}

        	this.fn_V105_Detail(); // (전자세금계산서 이외분)매입자료(Data Record)
        	this.fn_V105_Header1(); // (전자세금계산서 이외분)매입합계(Total Record)
        	this.fn_V105_Header2(); // 전자세금계산서분 매입합계(Total Record)

        }

        /*------------------------+
         |  매출 계산서 합계표!  |
         +-------------------------*/
        this.fn_V110 = function () {
        	if (this.dsTA_VAT110_H1.getRowCount() > 0 || this.dsTA_VAT110_H2.getRowCount() > 0) {
        		// 제출자(대리인)레코드, 제출의무자인적사항레코드
        		if (this.sBillHeader == "N") {
        			this.fn_V110_V109_HeaderA();
        			this.fn_V110_V109_HeaderB();
        		}

        		if (this.dsTA_VAT110_H1.getRowCount() > 0) {
        			this.fn_V110_Header(); // 제출의무자별집계레코드(매출)
        			this.fn_V110_Detail(); // 매출처별거래명세레코드

        		}
        		this.fn_V110_Header2(); // 전자계산서 매출집계레코드
        	}

        }

        /*------------------------+
         |  매입 계산서 합계표!  |
         +-------------------------*/
        this.fn_V109 = function () {
        	if (this.dsTA_VAT109_H1.getRowCount() > 0 || this.dsTA_VAT109_H2.getRowCount() > 0) {
        		// 제출자(대리인)레코드, 제출의무자인적사항레코드
        		if (this.sBillHeader == "N") {
        			this.fn_V110_V109_HeaderA();
        			this.fn_V110_V109_HeaderB();
        		}

        		if (this.dsTA_VAT109_H1.getRowCount() > 0) {
        			this.fn_V109_Header(); // 제출의무자별집계레코드(매입)
        			this.fn_V109_Detail(); // 매입처별거래명세레코드
        		}

        		this.fn_V109_Header2(); // 전자계산서 매입집계레코드
        	}

        }

        /*----------------------------------+
         |  신용카드매출전표수취명세서!  |
         +-----------------------------------*/
        this.fn_V164 = function () {
        	// 제출자 인적사항
        	this.fn_V164_Header();

        	// 신용카드매출전표수취명세서(1:신용카드 및 직불카드등, 2:현금영수증, 3:화물운송복지카드, 4.사업용신용카드)
        	this.fn_V164_Detail1();
        	this.fn_V164_Detail2();
        	this.fn_V164_Detail3();
        	this.fn_V164_Detail4();

        	this.fn_V164_Tail(); // 신용카드매출전표수취명세서 신용카드등 매입내용 합계 작성

        }

        /*-----------------------------------------+
         |  신용카드매출전표등발행금액집계표!  |
         +------------------------------------------*/
        this.fn_V117 = function () {
        	this.fn_V117_Header(); // 신용카드매출전표 발행금액 등 집계표

        }

        /*----------------------------------+
         |  공제받지못할매입세액명세서!  |
         +-----------------------------------*/
        this.fn_V153 = function () {
        	this.fn_V153_Header(); // 공제받지못할매입세액명세서 작성
        	this.fn_V153_Detail(); // 공제받지못할매입세액명세서 명세
        	this.fn_V153_Detail1(); // 공제받지못할매입세액명세서 공통매입세액안분계산내역
        	this.fn_V153_Detail2(); // 공제받지못할매입세액명세서 공통매입세액정산내역
        	this.fn_V153_Detail3(); // 공제받지못할매입세액명세서 납부세액 환급세액재계산내역

        }

        /*--------------------------+
         |  수출실적명세서 작성!  |
         +---------------------------*/
        this.fn_V141 = function () {
        	this.fn_V141_Header1(); // 수출실적명세서 A레코드 작성
        	this.fn_V141_Header2(); // 수출실적명세서 B레코드 작성
        	this.fn_V141_Detail(); // 수출실적명세서 C레코드 작성

        }

        /*-------------------------------------+
         |  영세율첨부서류제출명세서 작성!  |
         +--------------------------------------*/
        this.fn_V106 = function () {
        	this.fn_V106_Detail1();
        	this.fn_V106_Detail2();

        }

        /*-------------------------------------+
         |  대손세액공제(변제)신고서 작성!  |
         +--------------------------------------*/
        this.fn_V112 = function () {
        	this.fn_V112_Detail1();
        	this.fn_V112_Detail2();

        }

        /*--------------------------+
         |  사업자단위과세 작성!  |
         +---------------------------*/
        this.fn_V166 = function () {
        	this.fn_V166_Header();
        	this.fn_V166_Detail();

        }

        /*------------------------------------------+
         |  건물등감가상각자산취득명세서 작성!  |
         +-------------------------------------------*/
        this.fn_V149 = function () {
        	this.fn_V149_Header();

        }

        /*----------------------------------------------+
         |  전자세금계산서발급세액공제신고서 작성!  |
         +-----------------------------------------------*/
        this.fn_V171 = function () {
        	//this.fn_V171_Header(); //삭제

        }

        /*--------------------------------------+
         |  부동산임대공급가액 명세서 작성!  |
         +---------------------------------------*/
        this.fn_V181 = function () {
        	this.fn_V181_Header();
        	this.fn_V181_Detail();

        }

        /*----------------------------+
         |  영세율매출명세서 작성!  |
         +-----------------------------*/
        this.fn_V177 = function () {
        	this.fn_V177_Header();

        }

        /*----------------------------------------+
         |  구리스크랩등 매입세액신고서 작성!  |
         +-----------------------------------------*/
        this.fn_V179 = function () {
        	//this.fn_V179_Header();
        	//this.fn_V179_Detail();

        }

        /*------------------------+
         |  신고서 Head 레코드!  |
         +-------------------------*/
        this.fn_V101_Header = function () {

        	var sRECORD_1 	= "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6 	= "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 	= "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 	= "", sRECORD_17 = "", sRECORD_18 = "", sRECORD_19 = "", sRECORD_20 = "";
        	var sRECORD_21 	= "", sRECORD_22 = "", sRECORD_23 = "", sRECORD_24 = "", sRECORD_25 = "";
        	var sRECORD_26 	= "", sRECORD_27 = "", sRECORD_28 = "", sRECORD_29 = "", sRECORD_30 = "";
        	var sRECORD_31 	= "", sRECORD_32 = "";

        	sRECORD_1 = "11"; //자료구분(일반:11,간이:12)
        	sRECORD_2 = "I103200"; //서식코드(일반:I103200,간이:I106000)
        	sRECORD_3 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_NO")); //납세자ID
        	sRECORD_3 = this.fn_CharacterBlank(13, sRECORD_3);
        	sRECORD_4 = "41"; //세목구분코드(부가가치세)
        	sRECORD_5 = ""; //신고구분(예정:3,확정:1)

        	var sRECORD_5_GUBN = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_QUARTER"));
        	if (sRECORD_5_GUBN == "1" || sRECORD_5_GUBN == "3") {
        		sRECORD_5 = "03"; //예정
        	} else {
        		sRECORD_5 = "01"; //확정
        	}

        	sRECORD_6 = "01"; //신고구분상세코드(정기신고:01,수정신고:02,기한후신고:03,경정청구:04)

        	sRECORD_7 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_YYYY")); //과세기간_년기(월)
        	var sRECORD_7_GUBN = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_QUARTER"));
        	if (sRECORD_7_GUBN == "1" || sRECORD_7_GUBN == "2") {
        		sRECORD_7 += "01"; //1기예정, 1기확정
        	} else {
        		sRECORD_7 += "02"; //2기예정, 2기확정
        	}
        	sRECORD_7 = this.fnc_LPad(sRECORD_7, "0", 6);

        	/* 2015.03.18. 신고서종류코드
        	 * C03:부가가치세 확정(간이)신고서
        	 * C05:부가가치세 확정(일반) 4,10월조기 신고서
        	 * C06:부가가치세 확정(일반) 5,11월조기 신고서
        	 * C07:부가가치세 확정(일반) 신고서
        	 * C13:부가가치세 예정(간이) 신고서
        	 * C15:부가가치세 예정(일반) 1,7월조기 신고서
        	 * C16:부가가치세 예정(일반) 2,8월조기 신고서
        	 * C17:부가가치세 예정(일반) 신고서
        	 */
        	sRECORD_8 = "C"; //신고서종류코드
        	var sRECORD_8_GUBN = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_QUARTER"));
        	if (sRECORD_8_GUBN == "1" || sRECORD_8_GUBN == "3") {
        		sRECORD_8 += "17"; //예정
        	} else {
        		sRECORD_8 += "07"; //확정
        	}

        	sRECORD_9 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "USER_ID")); //사용자ID
        	sRECORD_9 = this.fn_CharacterBlank(20, sRECORD_9);

        	sRECORD_10 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_NO")); //납세자번호(법인등록번호:법인)
        	sRECORD_10 = this.fn_CharacterBlank(13, sRECORD_10);

        	sRECORD_11 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "AGENT_NM")); //세무대리인성명
        	sRECORD_11 = this.fn_CharacterBlank(30, sRECORD_11);

        	var sAGENT_TEL = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "AGENT_TEL")).split("-");

        	sRECORD_12 = this.fnc_Trim(sAGENT_TEL[0]); //세무대리인전화번호(지역번호)
        	sRECORD_12 = this.fn_CharacterBlank(4, sRECORD_12);

        	sRECORD_13 = this.fnc_Trim(sAGENT_TEL[1]); //세무대리인전화번호(국번)
        	sRECORD_13 = this.fn_CharacterBlank(5, sRECORD_13);

        	sRECORD_14 = this.fnc_Trim(sAGENT_TEL[2]); //세무대리인전화번호(지역번호,국번을 제외한번호)
        	sRECORD_14 = this.fn_CharacterBlank(5, sRECORD_14);

        	sRECORD_15 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_NM")); //상호(법인명)
        	sRECORD_15 = this.fn_CharacterBlank(30, sRECORD_15);

        	sRECORD_16 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_MASTER")); //성명(대표자명)
        	sRECORD_16 = this.fn_CharacterBlank(30, sRECORD_16);

        	sRECORD_17 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_LOCATION")); //사업장소재지
        	sRECORD_17 = this.fn_CharacterBlank(70, sRECORD_17);

        	var tCORP_TEL = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_TEL")).split("-");
        	var sCORP_TEL = this.fn_CharacterBlank(4, this.fnc_Trim(tCORP_TEL[0]));
        	sCORP_TEL += this.fn_CharacterBlank(4, this.fnc_Trim(tCORP_TEL[1]));
        	sCORP_TEL += this.fn_CharacterBlank(4, this.fnc_Trim(tCORP_TEL[2])); //사업장전화번호

        	sRECORD_18 = this.fn_CharacterBlank(14, sCORP_TEL);

        	sRECORD_19 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_ADDR")); //사업자주소
        	sRECORD_19 = this.fn_CharacterBlank(70, sRECORD_19);

        	var tCORP_CELL = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_CELL")).split("-");
        	var sCORP_CELL = this.fn_CharacterBlank(4, this.fnc_Trim(tCORP_CELL[0]));
        	sCORP_CELL += this.fn_CharacterBlank(4, this.fnc_Trim(tCORP_CELL[1]));
        	sCORP_CELL += this.fn_CharacterBlank(4, this.fnc_Trim(tCORP_CELL[2])); //사업자전화번호

        	sRECORD_20 = this.fn_CharacterBlank(14, sCORP_CELL);

        	sRECORD_21 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_TYPENM")); //업태명
        	sRECORD_21 = this.fn_CharacterBlank(30, sRECORD_21);

        	sRECORD_22 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_LINE")); //종목명
        	sRECORD_22 = this.fn_CharacterBlank(50, sRECORD_22);

        	sRECORD_23 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_TYPECD")); //업종코드
        	sRECORD_23 = this.fn_CharacterBlank(7, sRECORD_23);

        	sRECORD_24 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_SYMD")); //과세기간(시작일)
        	sRECORD_24 = this.fn_CharacterBlank(8, sRECORD_24);

        	sRECORD_25 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_EYMD")); //과세기간(종료일)
        	sRECORD_25 = this.fn_CharacterBlank(8, sRECORD_25);

        	sRECORD_26 = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8); //작성일자
        	sRECORD_26 = this.fn_CharacterBlank(8, sRECORD_26);

        	sRECORD_27 = "N"; //보정신고구분
        	sRECORD_27 = this.fn_CharacterBlank(1, sRECORD_27);

        	sRECORD_28 = this.fn_CharacterBlank(14, sCORP_CELL); //사업자휴대전화

        	sRECORD_29 = "1021"; //세무프로그램코드(인버스:1021)
        	sRECORD_29 = this.fn_CharacterBlank(4, sRECORD_29);

        	sRECORD_30 = ""; //세무대리인사업자번호
        	sRECORD_30 = this.fn_CharacterBlank(13, sRECORD_30);

        	sRECORD_31 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "CORP_EMAIL")); //전자메일주소
        	sRECORD_31 = this.fn_CharacterBlank(50, sRECORD_31);

        	sRECORD_32 = ""; //공란
        	sRECORD_32 = this.fn_CharacterBlank(65, sRECORD_32);

        	// 결과 변수
        	var sRECORD = "";
        	sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        	sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        	sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        	sRECORD += sRECORD_16 + sRECORD_17 + sRECORD_18 + sRECORD_19 + sRECORD_20;
        	sRECORD += sRECORD_21 + sRECORD_22 + sRECORD_23 + sRECORD_24 + sRECORD_25;
        	sRECORD += sRECORD_26 + sRECORD_27 + sRECORD_28 + sRECORD_29 + sRECORD_30;
        	sRECORD += sRECORD_31 + sRECORD_32;

        	// TEXTAREA에 엔터키
        	if (this.fnc_Length(this.fnc_Trim(this.sFILESAVE)) > 0) {
        		this.sFILESAVE += String.fromCharCode(10);
        	}
        	// TEXTAREA에 값 저장
        	this.sFILESAVE += sRECORD;
        }

        /*-------------------------------+
         |  일반과세자 신고서 레코드!    |
         +------------------------------*/
        this.fn_V101_Record = function () {
        	// 2015.03.18. NEW!!
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = 0,  sRECORD_4  = 0,  sRECORD_5  = 0;
        	var sRECORD_6  = 0,  sRECORD_7  = 0,  sRECORD_8  = 0,  sRECORD_9  = 0,  sRECORD_10 = 0;
        	var sRECORD_11 = 0,  sRECORD_12 = 0,  sRECORD_13 = 0,  sRECORD_14 = 0,  sRECORD_15 = 0;
        	var sRECORD_16 = 0,  sRECORD_17 = 0,  sRECORD_18 = 0,  sRECORD_19 = 0,  sRECORD_20 = 0;
        	var sRECORD_21 = 0,  sRECORD_22 = 0,  sRECORD_23 = 0,  sRECORD_24 = 0,  sRECORD_25 = 0;
        	var sRECORD_26 = 0,  sRECORD_27 = 0,  sRECORD_28 = 0,  sRECORD_29 = 0,  sRECORD_30 = 0;
        	var sRECORD_31 = 0,  sRECORD_32 = 0,  sRECORD_33 = 0,  sRECORD_34 = 0,  sRECORD_35 = 0;
        	var sRECORD_36 = 0,  sRECORD_37 = 0,  sRECORD_38 = 0,  sRECORD_39 = 0,  sRECORD_40 = 0;
        	var sRECORD_41 = 0,  sRECORD_42 = 0,  sRECORD_43 = 0,  sRECORD_44 = 0,  sRECORD_45 = 0;
        	var sRECORD_46 = 0,  sRECORD_47 = 0,  sRECORD_48 = 0,  sRECORD_49 = 0,  sRECORD_50 = 0;
        	var sRECORD_51 = 0,  sRECORD_52 = 0,  sRECORD_53 = 0,  sRECORD_54 = 0,  sRECORD_55 = 0;
        	var sRECORD_56 = 0,  sRECORD_57 = 0,  sRECORD_58 = 0,  sRECORD_59 = 0,  sRECORD_60 = 0;
        	var sRECORD_61 = 0,  sRECORD_62 = 0,  sRECORD_63 = 0,  sRECORD_64 = 0,  sRECORD_65 = 0;
        	var sRECORD_66 = 0,  sRECORD_67 = 0,  sRECORD_68 = 0,  sRECORD_69 = 0,  sRECORD_70 = 0;
        	var sRECORD_71 = 0,  sRECORD_72 = 0,  sRECORD_73 = 0,  sRECORD_74 = "", sRECORD_75 = "";
        	var sRECORD_76 = "", sRECORD_77 = "", sRECORD_78 = "", sRECORD_79 = "", sRECORD_80 = "";
        	var sRECORD_81 = "", sRECORD_82 = 0,  sRECORD_83 = "", sRECORD_84 = "", sRECORD_85 = "";

        	sRECORD_1 = "17"; //자료구분
        	sRECORD_2 = "I103200"; //서식코드

        	sRECORD_3 = this.dsTA_VAT101_H1.getColumn(0, "SH_TAXBIL_SAMT"); //과표신고과세세금계산서금액
        	sRECORD_3 = this.fnc_LPad(sRECORD_3, "0", 15);

        	sRECORD_4 = this.dsTA_VAT101_H1.getColumn(0, "SH_TAXBIL_VAMT"); //과표신고과세세금계산서세액
        	sRECORD_4 = this.fnc_LPad(sRECORD_4, "0", 13);

        	sRECORD_5 = this.dsTA_VAT101_H1.getColumn(0, "SH_PURPUB_SAMT"); //과표신고과세매입자발행금액
        	sRECORD_5 = this.fnc_LPad(sRECORD_5, "0", 13);

        	sRECORD_6 = this.dsTA_VAT101_H1.getColumn(0, "SH_PURPUB_VAMT"); //과표신고과세매입자발행세액
        	sRECORD_6 = this.fnc_LPad(sRECORD_6, "0", 13);

        	sRECORD_7 = this.dsTA_VAT101_H1.getColumn(0, "SH_CRECAS_SAMT"); //과표신고신용카드현금영수증금액
        	sRECORD_7 = this.fnc_LPad(sRECORD_7, "0", 15);

        	sRECORD_8 = this.dsTA_VAT101_H1.getColumn(0, "SH_CRECAS_VAMT"); //과표신고신용카드현금영수증세액
        	sRECORD_8 = this.fnc_LPad(sRECORD_8, "0", 15);

        	sRECORD_9 = this.dsTA_VAT101_H1.getColumn(0, "SH_TAXETC_SAMT"); //과표신고과세기타금액
        	sRECORD_9 = this.fnc_LPad(sRECORD_9, "0", 13);

        	sRECORD_10 = this.dsTA_VAT101_H1.getColumn(0, "SH_TAXETC_VAMT"); //과표신고과세기타세액
        	sRECORD_10 = this.fnc_LPad(sRECORD_10, "0", 13);

        	sRECORD_11 = this.dsTA_VAT101_H1.getColumn(0, "SH_ZERBIL_SAMT"); //과표신고영세세금계산서금액
        	sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);

        	sRECORD_12 = this.dsTA_VAT101_H1.getColumn(0, "SH_ZERETC_SAMT"); //과표신고영세기타금액
        	sRECORD_12 = this.fnc_LPad(sRECORD_12, "0", 15);

        	sRECORD_13 = this.dsTA_VAT101_H1.getColumn(0, "SH_WILMIS_SAMT"); //과표예정신고누락분금액
        	sRECORD_13 = this.fnc_LPad(sRECORD_13, "0", 13);

        	sRECORD_14 = this.dsTA_VAT101_H1.getColumn(0, "SH_WILMIS_VAMT"); //과표예정신고누락분세액
        	sRECORD_14 = this.fnc_LPad(sRECORD_14, "0", 13);

        	sRECORD_15 = this.dsTA_VAT101_H2.getColumn(0, "SW_TAXBIL_SAMT"); //과표예정과세세금계산서금액
        	sRECORD_15 = this.fnc_LPad(sRECORD_15, "0", 13);

        	sRECORD_16 = this.dsTA_VAT101_H2.getColumn(0, "SW_TAXBIL_VAMT"); //과표예정과세세금계산서세액
        	sRECORD_16 = this.fnc_LPad(sRECORD_16, "0", 13);

        	sRECORD_17 = this.dsTA_VAT101_H2.getColumn(0, "SW_TAXETC_SAMT"); //과표예정과세기타금액
        	sRECORD_17 = this.fnc_LPad(sRECORD_17, "0", 13);

        	sRECORD_18 = this.dsTA_VAT101_H2.getColumn(0, "SW_TAXETC_VAMT"); //과표예정과세기타세액
        	sRECORD_18 = this.fnc_LPad(sRECORD_18, "0", 13);

        	sRECORD_19 = this.dsTA_VAT101_H2.getColumn(0, "SW_ZERBIL_SAMT"); //과표예정영세세금계산서금액
        	sRECORD_19 = this.fnc_LPad(sRECORD_19, "0", 13);

        	sRECORD_20 = this.dsTA_VAT101_H2.getColumn(0, "SW_ZERETC_SAMT"); //과표예정영세기타금액
        	sRECORD_20 = this.fnc_LPad(sRECORD_20, "0", 13);

        	sRECORD_21 = this.dsTA_VAT101_H1.getColumn(0, "SH_WILMIS_SAMT"); //과표예정신고누락분금액합계
        	sRECORD_21 = this.fnc_LPad(sRECORD_21, "0", 13);

        	sRECORD_22 = this.dsTA_VAT101_H1.getColumn(0, "SH_WILMIS_VAMT"); //과표예정신고누락분세액합계
        	sRECORD_22 = this.fnc_LPad(sRECORD_22, "0", 13);

        	sRECORD_23 = this.dsTA_VAT101_H1.getColumn(0, "SH_DOUADD_VAMT"); //대손세액가감세액
        	sRECORD_23 = this.fnc_LPad(sRECORD_23, "0", 13);

        	sRECORD_24 = this.dsTA_VAT101_H1.getColumn(0, "SALTOT_SAMT");    //과세표준
        	//sRECORD_24 = this.dsTA_VAT101_H1.getColumn(0, "SH_TAXTOT_SAMT"); //과세표준
        	sRECORD_24 = this.fnc_LPad(sRECORD_24, "0", 15);

        	sRECORD_25 = this.dsTA_VAT101_H1.getColumn(0, "SALTOT_VAMT");    //산출세액
        	//sRECORD_25 = this.dsTA_VAT101_H1.getColumn(0, "SH_TAXTOT_VAMT"); //산출세액
        	sRECORD_25 = this.fnc_LPad(sRECORD_25, "0", 15);

        	sRECORD_26 = this.dsTA_VAT101_H1.getColumn(0, "PH_TAXBIL_SAMT"); //매입교부일반금액
        	sRECORD_26 = this.fnc_LPad(sRECORD_26, "0", 15);

        	sRECORD_27 = this.dsTA_VAT101_H1.getColumn(0, "PH_TAXBIL_VAMT"); //매입교부일반세액
        	sRECORD_27 = this.fnc_LPad(sRECORD_27, "0", 13);

        	sRECORD_28 = this.dsTA_VAT101_H1.getColumn(0, "PH_ASSETS_SAMT"); //매입교부고정자산금액
        	sRECORD_28 = this.fnc_LPad(sRECORD_28, "0", 13);

        	sRECORD_29 = this.dsTA_VAT101_H1.getColumn(0, "PH_ASSETS_VAMT"); //매입교부고정자산세액
        	sRECORD_29 = this.fnc_LPad(sRECORD_29, "0", 13);

        	sRECORD_30 = this.dsTA_VAT101_H1.getColumn(0, "PH_WILTOT_SAMT"); //sRECORD_30  = fnc_LPad(sRECORD_30, "0", 13);
        	sRECORD_30 = this.fn_LeptPad_2(sRECORD_30, "0", 13);

        	sRECORD_31 = this.dsTA_VAT101_H1.getColumn(0, "PH_WILTOT_VAMT"); //sRECORD_31  = fnc_LPad(sRECORD_31, "0", 13);
        	sRECORD_31 = this.fn_LeptPad_2(sRECORD_31, "0", 13);

        	sRECORD_32 = this.dsTA_VAT101_H2.getColumn(0, "PW_TAXBIL_SAMT"); //sRECORD_32  = fnc_LPad(sRECORD_32, "0", 13);
        	sRECORD_32 = this.fn_LeptPad_2(sRECORD_32, "0", 13);

        	sRECORD_33 = this.dsTA_VAT101_H2.getColumn(0, "PW_TAXBIL_VAMT"); //sRECORD_33  = fnc_LPad(sRECORD_33, "0", 13);
        	sRECORD_33 = this.fn_LeptPad_2(sRECORD_33, "0", 13);

        	sRECORD_34 = this.dsTA_VAT101_H2.getColumn(0, "PW_ETCBIL_SAMT"); //sRECORD_34  = fnc_LPad(sRECORD_34, "0", 13);
        	sRECORD_34 = this.fn_LeptPad_2(sRECORD_34, "0", 13);

        	sRECORD_35 = this.dsTA_VAT101_H2.getColumn(0, "PW_ETCBIL_VAMT"); //sRECORD_35  = fnc_LPad(sRECORD_35, "0", 13);
        	sRECORD_35 = this.fn_LeptPad_2(sRECORD_35, "0", 13);

        	sRECORD_36 = this.dsTA_VAT101_H2.getColumn(0, "PW_PURTOT_SAMT"); //sRECORD_36  = fnc_LPad(sRECORD_36, "0", 13);
        	sRECORD_36 = this.fn_LeptPad_2(sRECORD_36, "0", 13);

        	sRECORD_37 = this.dsTA_VAT101_H2.getColumn(0, "PW_PURTOT_VAMT"); //sRECORD_37  = fnc_LPad(sRECORD_37, "0", 13);
        	sRECORD_37 = this.fn_LeptPad_2(sRECORD_37, "0", 13);

        	sRECORD_38 = this.dsTA_VAT101_H1.getColumn(0, "PH_PURPUB_SAMT"); //매입매입자발행금액
        	sRECORD_38 = this.fnc_LPad(sRECORD_38, "0", 13);

        	sRECORD_39 = this.dsTA_VAT101_H1.getColumn(0, "PH_PURPUB_VAMT"); //매입매입자발행세액
        	sRECORD_39 = this.fnc_LPad(sRECORD_39, "0", 13);

        	sRECORD_40 = this.dsTA_VAT101_H1.getColumn(0, "PH_ETCBIL_SAMT"); //매입기타공제금액
        	sRECORD_40 = this.fnc_LPad(sRECORD_40, "0", 13);

        	sRECORD_41 = this.dsTA_VAT101_H1.getColumn(0, "PH_ETCBIL_VAMT"); //매입기타공제세액
        	sRECORD_41 = this.fnc_LPad(sRECORD_41, "0", 13);

        	sRECORD_42 = this.dsTA_VAT101_H2.getColumn(0, "PD_PURTOT_SAMT"); //그밖의공제매입금액합계
        	sRECORD_42 = this.fnc_LPad(sRECORD_42, "0", 13);

        	sRECORD_43 = this.dsTA_VAT101_H2.getColumn(0, "PD_PURTOT_VAMT"); //그밖의공제매입세액합계
        	sRECORD_43 = this.fnc_LPad(sRECORD_43, "0", 13);

        	sRECORD_44 = this.dsTA_VAT101_H1.getColumn(0, "PH_PTOTAL_SAMT"); //매입금액합계
        	sRECORD_44 = this.fnc_LPad(sRECORD_44, "0", 15);

        	sRECORD_45 = this.dsTA_VAT101_H1.getColumn(0, "PH_PTOTAL_VAMT"); //매입세액합계
        	sRECORD_45 = this.fnc_LPad(sRECORD_45, "0", 13);

        	sRECORD_46 = this.dsTA_VAT101_H2.getColumn(0, "PN_PURTOT_SAMT"); //매입공제받지못할금액합계
        	sRECORD_46 = this.fnc_LPad(sRECORD_46, "0", 13);

        	sRECORD_47 = this.dsTA_VAT101_H2.getColumn(0, "PN_PURTOT_VAMT"); //매입공제받지못할세액합계
        	sRECORD_47 = this.fnc_LPad(sRECORD_47, "0", 13);

        	sRECORD_48 = this.dsTA_VAT101_H1.getColumn(0, "PH_UNABLE_SAMT"); //매입공제받지못할금액
        	sRECORD_48 = this.fnc_LPad(sRECORD_48, "0", 13);

        	sRECORD_49 = this.dsTA_VAT101_H1.getColumn(0, "PH_UNABLE_VAMT"); //매입공제받지못할세액
        	sRECORD_49 = this.fnc_LPad(sRECORD_49, "0", 13);

        	sRECORD_50 = this.dsTA_VAT101_H2.getColumn(0, "PN_EXCEPT_SAMT"); //공통매입면세사업금액
        	sRECORD_50 = this.fnc_LPad(sRECORD_50, "0", 13);

        	sRECORD_51 = this.dsTA_VAT101_H2.getColumn(0, "PN_EXCEPT_VAMT"); //공통매입면세사업세액
        	sRECORD_51 = this.fnc_LPad(sRECORD_51, "0", 13);

        	sRECORD_52 = this.dsTA_VAT101_H2.getColumn(0, "PN_DOUADD_SAMT"); //대손처분금액
        	sRECORD_52 = this.fnc_LPad(sRECORD_52, "0", 13);

        	sRECORD_53 = this.dsTA_VAT101_H2.getColumn(0, "PN_DOUADD_VAMT"); //대손처분세액
        	sRECORD_53 = this.fnc_LPad(sRECORD_53, "0", 13);

        	sRECORD_54 = this.dsTA_VAT101_H2.getColumn(0, "PN_PURTOT_SAMT"); //매입공제받지못할금액합계
        	sRECORD_54 = this.fnc_LPad(sRECORD_54, "0", 13);

        	sRECORD_55 = this.dsTA_VAT101_H2.getColumn(0, "PN_PURTOT_VAMT"); //매입공제받지못할세액합계
        	sRECORD_55 = this.fnc_LPad(sRECORD_55, "0", 13);

        	sRECORD_56 = this.dsTA_VAT101_H1.getColumn(0, "PH_ADDMIN_SAMT"); //차감매입금액
        	sRECORD_56 = this.fnc_LPad(sRECORD_56, "0", 15);

        	sRECORD_57 = this.dsTA_VAT101_H1.getColumn(0, "PH_ADDMIN_VAMT"); //차감매입세액
        	sRECORD_57 = this.fnc_LPad(sRECORD_57, "0", 13);

        	sRECORD_58 = this.dsTA_VAT101_H1.getColumn(0, "SP_RETURN_VAMT"); //납부(환급)세액
        	sRECORD_58 = this.fn_LeptPad_2(sRECORD_58, "0", 13);

        	sRECORD_59 = this.dsTA_VAT101_H1.getColumn(0, "RH_ETCMIN_VAMT"); //그밖의공제_경감세액
        	sRECORD_59 = this.fnc_LPad(sRECORD_59, "0", 15);

        	sRECORD_60 = this.dsTA_VAT101_H1.getColumn(0, "RH_MINTOT_VAMT"); //경감세액계
        	sRECORD_60 = this.fnc_LPad(sRECORD_60, "0", 15);

        	sRECORD_61 = this.dsTA_VAT101_H1.getColumn(0, "RH_MINTOT_VAMT"); //경감세액계
        	sRECORD_61 = this.fnc_LPad(sRECORD_61, "0", 13);

        	sRECORD_62 = this.dsTA_VAT101_H1.getColumn(0, "RH_WILRET_VAMT"); //예정미환급세액
        	sRECORD_62 = this.fnc_LPad(sRECORD_62, "0", 13);

        	sRECORD_63 = this.dsTA_VAT101_H1.getColumn(0, "RH_NOTRET_VAMT"); //예정고지세액
        	sRECORD_63 = this.fnc_LPad(sRECORD_63, "0", 13);

        	sRECORD_64 = this.dsTA_VAT101_H1.getColumn(0, "RH_PROXY_VAMT"); //사업양수자의 대리납부기납부세액
        	sRECORD_64 = this.fnc_LPad(sRECORD_64, "0", 13);

        	sRECORD_65 = this.dsTA_VAT101_H1.getColumn(0, "RH_PROHIB_VAMT"); //매입자납부특례기납부세액
        	sRECORD_65 = this.fnc_LPad(sRECORD_65, "0", 13);

        	sRECORD_66 = this.dsTA_VAT101_H2.getColumn(0, "AD_ADDTOT_VAMT"); //가산세세액계
        	sRECORD_66 = this.fnc_LPad(sRECORD_66, "0", 13);

        	sRECORD_67 = this.dsTA_VAT101_H1.getColumn(0, "VAT_REF_VAMT");   //차감납부할세액
        	//sRECORD_67 = this.dsTA_VAT101_H1.getColumn(0, "VAT_PAY_VAMT"); //차감납부할세액
        	sRECORD_67 = this.fn_LeptPad_2(sRECORD_67, "0", 15);

        	sRECORD_68 = this.dsTA_VAT101_H1.getColumn(0, "IH_EXCEPT_SAMT"); //과세수입금액제외금액
        	sRECORD_68 = this.fnc_LPad(sRECORD_68, "0", 13);

        	sRECORD_69 = this.dsTA_VAT101_H1.getColumn(0, "IH_TAXBIL_SAMT"); //과세수입금액합계
        	sRECORD_69 = this.fnc_LPad(sRECORD_69, "0", 15);

        	sRECORD_70 = this.dsTA_VAT101_H2.getColumn(0, "DF_EXCEPT_SAMT"); //면세수입금액제외금액
        	sRECORD_70 = this.fnc_LPad(sRECORD_70, "0", 13);

        	sRECORD_71 = this.dsTA_VAT101_H2.getColumn(0, "DF_TAXBIL_SAMT"); //면세수입금액합계
        	sRECORD_71 = this.fnc_LPad(sRECORD_71, "0", 15);

        	sRECORD_72 = this.dsTA_VAT101_H2.getColumn(0, "BD_SALTOT_SAMT"); //계산서 교부금액
        	sRECORD_72 = this.fnc_LPad(sRECORD_72, "0", 15);

        	sRECORD_73 = this.dsTA_VAT101_H2.getColumn(0, "BD_PURTOT_SAMT"); //계산서 수취금액
        	sRECORD_73 = this.fnc_LPad(sRECORD_73, "0", 15);

        	sRECORD_74 = this.fnc_Trim(this.dsTA_VAT101_H2.getColumn(0, "REFUND_TYPECD")); //환급구분
        	sRECORD_74 = this.fn_CharacterBlank(2, sRECORD_74);

        	sRECORD_75 = this.fnc_Trim(this.dsTA_VAT101_H2.getColumn(0, "VAT_BANKCD")); //국세환급금은행코드
        	sRECORD_75 = this.fn_CharacterBlank(3, sRECORD_75);

        	sRECORD_76 = this.fnc_Trim(this.dsTA_VAT101_H2.getColumn(0, "VAT_BANKNO")); //국세환급금계좌번호
        	sRECORD_76 = this.fn_CharacterBlank(20, sRECORD_76);

        	sRECORD_77 = this.fnc_Trim(this.dsTA_VAT101_H2.getColumn(0, "VAT_TOTPAYNO")); //총괄납부승인번호
        	sRECORD_77 = this.fn_CharacterBlank(9, sRECORD_77);

        	sRECORD_78 = this.fnc_Trim(this.dsTA_VAT101_H2.getColumn(0, "VAT_BANKBRANCH")); //은행지점명
        	sRECORD_78 = this.fn_CharacterBlank(30, sRECORD_78);

        	sRECORD_79 = this.fnc_Trim(this.dsTA_VAT101_H2.getColumn(0, "CORP_EYMD")); //폐업일자
        	sRECORD_79 = this.fn_CharacterBlank(8, sRECORD_79);

        	sRECORD_80 = this.fnc_Trim(this.dsTA_VAT101_H2.getColumn(0, "CLOSING_REMARK")); //폐업사유
        	sRECORD_80 = this.fn_CharacterBlank(3, sRECORD_80);

        	sRECORD_81 = "N"; //기한후(과세표준)여부

        	sRECORD_82 = this.dsTA_VAT101_H2.getColumn(0, "VAT_REF_VAMT"); //실차감납부할세액
        	sRECORD_82 = this.fn_LeptPad_2(sRECORD_82, "0", 15);

        	sRECORD_83 = this.fnc_Trim(this.dsTA_VAT101_H2.getColumn(0, "VAT_NTAX_TYPECD")); //일반과세자구분
        	sRECORD_83 = this.fn_LeptPad_2(sRECORD_83, "0", 1);

        	sRECORD_84 = this.fnc_Trim(this.dsTA_VAT101_H2.getColumn(0, "VAT_EARLY_TYPECD")); //조기환급취소구분
        	sRECORD_84 = this.fn_LeptPad_2(sRECORD_84, "0", 1);

        	sRECORD_85 = ""; //공란
        	sRECORD_85 = this.fn_LeptPad_2(sRECORD_85, "0", 15);

            sRECORD_86 = ""; //공란
        	sRECORD_86 = this.fn_CharacterBlank(28, sRECORD_86);

        	// 결과 변수
        	var sRECORD  = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16 + sRECORD_17 + sRECORD_18 + sRECORD_19 + sRECORD_20;
        		sRECORD += sRECORD_21 + sRECORD_22 + sRECORD_23 + sRECORD_24 + sRECORD_25;
        		sRECORD += sRECORD_26 + sRECORD_27 + sRECORD_28 + sRECORD_29 + sRECORD_30;
        		sRECORD += sRECORD_31 + sRECORD_32 + sRECORD_33 + sRECORD_34 + sRECORD_35;
        		sRECORD += sRECORD_36 + sRECORD_37 + sRECORD_38 + sRECORD_39 + sRECORD_40;
        		sRECORD += sRECORD_41 + sRECORD_42 + sRECORD_43 + sRECORD_44 + sRECORD_45;
        		sRECORD += sRECORD_46 + sRECORD_47 + sRECORD_48 + sRECORD_49 + sRECORD_50;
        		sRECORD += sRECORD_51 + sRECORD_52 + sRECORD_53 + sRECORD_54 + sRECORD_55;
        		sRECORD += sRECORD_56 + sRECORD_57 + sRECORD_58 + sRECORD_59 + sRECORD_60;
        		sRECORD += sRECORD_61 + sRECORD_62 + sRECORD_63 + sRECORD_64 + sRECORD_65;
        		sRECORD += sRECORD_66 + sRECORD_67 + sRECORD_68 + sRECORD_69 + sRECORD_70;
        		sRECORD += sRECORD_71 + sRECORD_72 + sRECORD_73 + sRECORD_74 + sRECORD_75;
        		sRECORD += sRECORD_76 + sRECORD_77 + sRECORD_78 + sRECORD_79 + sRECORD_80;
        		sRECORD += sRECORD_81 + sRECORD_82 + sRECORD_83 + sRECORD_84 + sRECORD_85 + sRECORD_86;

        	// TEXTAREA에 엔터키
        	this.sFILESAVE += String.fromCharCode(10);
        	// TEXTAREA에 값 저장
        	this.sFILESAVE += sRECORD;

        }

        /*--------------------------------------------------------------------------+
         |  신고서 부가가치세수입금액등(과세표준명세, 면세수입금액) 레코드!  |
         +---------------------------------------------------------------------------*/
        this.fn_V101_Detail1 = function () {
        	var sRECORD_1 = "", sRECORD_2 = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5 = "";
        	var sRECORD_6 = "", sRECORD_7 = 0,  sRECORD_8 = "";
        	var sFilter = "";

        	for (var i = 0; i < this.dsTA_VAT101_D.getRowCount(); i++) {
        		sRECORD_1 = "15"; //자료구분
        		sRECORD_2 = "I103200"; //서식코드(일반:I103200,간이:I106000)

        		sRECORD_3 = this.fnc_Trim(this.dsTA_VAT101_D.getColumn(i, "INCOME_TYPECD")); //수입금액종류구분
        		if (this.fnc_Length(sRECORD_3) < 2) sRECORD_3 = "0" + sRECORD_3;
        		sRECORD_3 = this.fn_CharacterBlank(2, sRECORD_3);

        		sRECORD_4 = this.fnc_Trim(this.dsTA_VAT101_D.getColumn(i, "CORP_TYPENM")); //업태명
        		sRECORD_4 = this.fn_CharacterBlank(30, sRECORD_4);

        		sRECORD_5 = this.fnc_Trim(this.dsTA_VAT101_D.getColumn(i, "CORP_LINE")); //종목명
        		sRECORD_5 = this.fn_CharacterBlank(50, sRECORD_5);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT101_D.getColumn(i, "CORP_TYPECD")); //업종코드
        		sRECORD_6 = this.fn_CharacterBlank(7, sRECORD_6);

        		sRECORD_7 = this.dsTA_VAT101_D.getColumn(i, "INCOME_SAMT"); //수입금액
        		sRECORD_7 = this.fnc_LPad(sRECORD_7, "0", 15);

        		sRECORD_8 = ""; //공란
        		sRECORD_8 = this.fn_CharacterBlank(37, sRECORD_8);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8;		
        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);
        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*--------------------------------------------------------------------------+
         |  신고서 부가가치세 공제감면 신고서 레코드! (2015.03.23. NEW)         |
         +---------------------------------------------------------------------------*/
        this.fn_V101_Detail2 = function () {
        	var sRECORD_1 = "", sRECORD_2 = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5 = 0;
        	var sRECORD_6 = 0, sRECORD_7 = "";
        	var sFilter = "";

        	for (var i = 0; i < this.dsTA_VAT101_D2.getRowCount(); i++) {
        		sRECORD_1 = "14"; //자료구분
        		sRECORD_2 = "I103200"; //서식코드(일반:I103200,간이:I106000)

        		sRECORD_3 = this.fnc_Trim(this.dsTA_VAT101_D2.getColumn(i, "DEDUCT_TYPECD")); //공제감면코드
        		sRECORD_3 = this.fn_CharacterBlank(3, sRECORD_3);

        		sRECORD_4 = "1"; //등록일련번호
        		sRECORD_4 = this.fnc_LPad(sRECORD_4, "0", 12);

        		sRECORD_5 = this.fnc_Trim(this.dsTA_VAT101_D2.getColumn(i, "DEDU_SAMT")); //공제감면금액
        		sRECORD_5 = this.fnc_LPad(sRECORD_5, "0", 15);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT101_D2.getColumn(i, "DEDU_VAMT")); //공제감면세액
        		sRECORD_6 = this.fnc_LPad(sRECORD_6, "0", 15);

        		sRECORD_7 = ""; //공란
        		sRECORD_7 = this.fn_CharacterBlank(46, sRECORD_7);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7;
        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);
        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*--------------------------------------------------------------------------+
         |  신고서 부가가치세 가산세 신고서 레코드! (2015.03.23. NEW)         |
         +---------------------------------------------------------------------------*/
        this.fn_V101_Detail3 = function () {
        	var sRECORD_1 = "", sRECORD_2 = "" , sRECORD_3 = "", sRECORD_4 = "", sRECORD_5 = 0;
        	var sRECORD_6 = 0 , sRECORD_7 = "";
        	var sFilter = "";

        	for (var i = 0; i < this.dsTA_VAT101_D3.getRowCount(); i++) {
        		sRECORD_1 = "13"; //자료구분
        		sRECORD_2 = "I103200"; //서식코드(일반:I103200,간이:I106000)

        		sRECORD_3 = this.fnc_Trim(this.dsTA_VAT101_D3.getColumn(i, "ADTX_CODE")); //가산세코드
        		sRECORD_3 = this.fn_CharacterBlank(10, sRECORD_3);

        		sRECORD_4 = "1"; //등록일련번호
        		sRECORD_4 = this.fnc_LPad(sRECORD_4, "0", 12);

        		sRECORD_5 = this.fnc_Trim(this.dsTA_VAT101_D3.getColumn(i, "ADTX_SAMT")); //가산세금액
        		sRECORD_5 = this.fnc_LPad(sRECORD_5, "0", 15);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT101_D3.getColumn(i, "ADTX_VAMT")); //가산세액
        		sRECORD_6 = this.fnc_LPad(sRECORD_6, "0", 15);

        		sRECORD_7 = ""; //공란
        		sRECORD_7 = this.fn_CharacterBlank(39, sRECORD_7);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7;
        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);
        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*----------------------------------------------+
         |  세금계산서합계표 표지(HEAD RECORD) 작성!  |
         +-----------------------------------------------*/
        this.fn_V104_V105_Header = function () {
        	var sRECORD_1 = "", sRECORD_2 = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5 = "";
        	var sRECORD_6 = "", sRECORD_7 = "", sRECORD_8 = "", sRECORD_9 = "", sRECORD_10 = "";

        	sRECORD_1 = "7"; //자료구분

        	sRECORD_2 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO")); //보고자등록번호
        	sRECORD_2 = this.fn_CharacterBlank(10, sRECORD_2);

        	sRECORD_3 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BRANCH_NM")); //보고자상호
        	sRECORD_3 = this.fn_CharacterBlank(30, sRECORD_3);

        	sRECORD_4 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_MASTER")); //보고자성명
        	sRECORD_4 = this.fn_CharacterBlank(15, sRECORD_4);

        	sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_ADDR")); //보고자 사업장소재지
        	sRECORD_5 = this.fn_CharacterBlank(45, sRECORD_5);

        	sRECORD_6 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_TYPENM")); //보고자 업태
        	sRECORD_6 = this.fn_CharacterBlank(17, sRECORD_6);

        	sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_LINE")); //보고자 종목
        	sRECORD_7 = this.fn_CharacterBlank(25, sRECORD_7);

        
        	var sVAT_SYMD = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_SYMD"));
        	var sVAT_EYMD = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_EYMD"));

        	sRECORD_8 = this.fnc_SubStr(sVAT_SYMD, 2, 6); //거래기간
        	sRECORD_8 += this.fnc_SubStr(sVAT_EYMD, 2, 6);
        	sRECORD_8 = this.fn_CharacterBlank(12, sRECORD_8);

        	sRECORD_9 = this.fnc_SubStr(sVAT_EYMD, 2, 6); //작성일자  //2013 1기예정 추가
        	sRECORD_9 = this.fn_CharacterBlank(6, sRECORD_9);

        	sRECORD_10 = ""; //공란
        	sRECORD_10 = this.fn_CharacterBlank(9, sRECORD_10);

        	// 결과 변수
        	var sRECORD = "";
        	sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        	sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;

        	// TEXTAREA에 엔터키
        	this.sFILESAVE += String.fromCharCode(10);

        	// TEXTAREA에 값 저장
        	this.sFILESAVE += sRECORD;

        	// 세금계산서 표지 Y로
        	this.sTaxBillHeader = "Y";
        }

        /*----------------------------------------------+
         |  (전자세금계산서 이외분) 매출자료 작성!  |
         +-----------------------------------------------*/
        this.fn_V104_Detail = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "";

        	// 사업자번호발행분중
        	// OFFLINE 발행분(무조건 DELAYYN = N)
        	// EBILL 발행분중 DELAYYN = Y 인것
        	this.dsTA_VAT104_D.filter("CUST_DIV == 1 && ((BILL_TYPECD == 0 && DELAYYN == 'N') || (BILL_TYPECD == 1 && DELAYYN == 'Y') )");
        	if (this.dsTA_VAT104_D.getRowCount() > 0) {
        		for (var i = 0; i < this.dsTA_VAT104_D.getRowCount(); i++) {
        			sRECORD_1 = "1";

        			sRECORD_2 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_NM"));
        			sRECORD_2 = this.fn_CharacterBlank(10, sRECORD_2);

        			sRECORD_3 = i + 1;
        			sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 4);

        			sRECORD_4 = this.fnc_Trim(this.dsTA_VAT104_D.getColumn(i, "CUST_NO"));
        			sRECORD_4 = this.fn_CharacterBlank(10, sRECORD_4);

        			sRECORD_5 = this.fnc_Trim(this.dsTA_VAT104_D.getColumn(i, "CUST_NM"));
        			sRECORD_5 = this.fn_CharacterBlank(30, sRECORD_5);

        			sRECORD_6 = "";
        			sRECORD_6 = this.fn_CharacterBlank(17, sRECORD_6);

        			sRECORD_7 = "";
        			sRECORD_7 = this.fn_CharacterBlank(25, sRECORD_7);

        			sRECORD_8 = this.dsTA_VAT104_D.getColumn(i, "OFF_CCNT");
        			sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 7);

        			sRECORD_9 = 0;
        			sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 2);

        			sRECORD_10 = this.dsTA_VAT104_D.getColumn(i, "OFF_SAMT");
        			sRECORD_10 = this.fn_LeptPad(sRECORD_10, "0", 14);

        			sRECORD_11 = this.dsTA_VAT104_D.getColumn(i, "OFF_VAMT");
        			sRECORD_11 = this.fn_LeptPad(sRECORD_11, "0", 13);

        			sRECORD_12 = "0";
        			sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 1);

        			sRECORD_13 = "";
        			sRECORD_13 = this.fn_CharacterBlank(1, sRECORD_13);

        			sRECORD_14 = "7501";
        			sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 4);

        			sRECORD_15 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "TAXOFFICE_CD"));
        			sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 3);

        			sRECORD_16 = "";
        			sRECORD_16 = this.fn_CharacterBlank(28, sRECORD_16);

        			// 결과 변수
        			var sRECORD = "";
        			sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        			sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        			sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        			sRECORD += sRECORD_16;

        			// TEXTAREA에 엔터키
        			this.sFILESAVE += String.fromCharCode(10);

        			// TEXTAREA에 값 저장
        			this.sFILESAVE += sRECORD;
        		}
        	}
        	// UnFilter(dsTA_VAT104_D);
        	this.dsTA_VAT104_D.filter("");
        }

        /*----------------------------------------------+
         |  (전자세금계산서 이외분) 매출합계 작성!  |
         +-----------------------------------------------*/
        this.fn_V104_Header1 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";

        	if (this.dsTA_VAT104_H1.getRowCount() > 0) {
        		sRECORD_1 = "3";

        		sRECORD_2 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_2 = this.fn_CharacterBlank(10, sRECORD_2);

        		sRECORD_3 = this.dsTA_VAT104_H1.getColumn(0, "ALL_CCNT");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 7);

        		sRECORD_4 = this.dsTA_VAT104_H1.getColumn(0, "ALL_PCNT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 7);

        		sRECORD_5 = this.dsTA_VAT104_H1.getColumn(0, "ALL_SAMT");
        		sRECORD_5 = this.fn_LeptPad(sRECORD_5, "0", 15);

        		sRECORD_6 = this.dsTA_VAT104_H1.getColumn(0, "ALL_VAMT");
        		sRECORD_6 = this.fn_LeptPad(sRECORD_6, "0", 14);

        		sRECORD_7 = this.dsTA_VAT104_H1.getColumn(0, "BIZNO_CCNT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 7);

        		sRECORD_8 = this.dsTA_VAT104_H1.getColumn(0, "BIZNO_PCNT");
        		sRECORD_8 = this.fn_LeptPad(sRECORD_8, "0", 7);

        		sRECORD_9 = this.dsTA_VAT104_H1.getColumn(0, "BIZNO_SAMT");
        		sRECORD_9 = this.fn_LeptPad(sRECORD_9, "0", 15);

        		sRECORD_10 = this.dsTA_VAT104_H1.getColumn(0, "BIZNO_VAMT");
        		sRECORD_10 = this.fn_LeptPad(sRECORD_10, "0", 14);

        		sRECORD_11 = this.dsTA_VAT104_H1.getColumn(0, "SSN_CCNT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 7);

        		sRECORD_12 = this.dsTA_VAT104_H1.getColumn(0, "SSN_PCNT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 7);

        		sRECORD_13 = this.dsTA_VAT104_H1.getColumn(0, "SSN_SAMT");
        		sRECORD_13 = this.fn_LeptPad(sRECORD_13, "0", 15);

        		sRECORD_14 = this.dsTA_VAT104_H1.getColumn(0, "SSN_VAMT");
        		sRECORD_14 = this.fn_LeptPad(sRECORD_14, "0", 14);

        		sRECORD_15 = "";
        		sRECORD_15 = this.fn_CharacterBlank(30, sRECORD_15);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*--------------------------------------+
         |  전자세금계산서분 매출합계 작성!  |
         +---------------------------------------*/
        this.fn_V104_Header2 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";

        	if (this.dsTA_VAT104_H2.getRowCount() > 0) {
        		sRECORD_1 = "5";

        		sRECORD_2 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_2 = this.fn_CharacterBlank(10, sRECORD_2);

        		sRECORD_3 = this.dsTA_VAT104_H2.getColumn(0, "ALL_CCNT");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 7);

        		sRECORD_4 = this.dsTA_VAT104_H2.getColumn(0, "ALL_PCNT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 7);

        		sRECORD_5 = this.dsTA_VAT104_H2.getColumn(0, "ALL_SAMT");
        		sRECORD_5 = this.fn_LeptPad(sRECORD_5, "0", 15);

        		sRECORD_6 = this.dsTA_VAT104_H2.getColumn(0, "ALL_VAMT");
        		sRECORD_6 = this.fn_LeptPad(sRECORD_6, "0", 14);

        		sRECORD_7 = this.dsTA_VAT104_H2.getColumn(0, "BIZNO_CCNT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 7);

        		sRECORD_8 = this.dsTA_VAT104_H2.getColumn(0, "BIZNO_PCNT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 7);

        		sRECORD_9 = this.dsTA_VAT104_H2.getColumn(0, "BIZNO_SAMT");
        		sRECORD_9 = this.fn_LeptPad(sRECORD_9, "0", 15);

        		sRECORD_10 = this.dsTA_VAT104_H2.getColumn(0, "BIZNO_VAMT");
        		sRECORD_10 = this.fn_LeptPad(sRECORD_10, "0", 14);

        		sRECORD_11 = this.dsTA_VAT104_H2.getColumn(0, "SSN_CCNT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 7);

        		sRECORD_12 = this.dsTA_VAT104_H2.getColumn(0, "SSN_PCNT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 7);

        		sRECORD_13 = this.dsTA_VAT104_H2.getColumn(0, "SSN_SAMT");
        		sRECORD_13 = this.fn_LeptPad(sRECORD_13, "0", 15);

        		sRECORD_14 = this.dsTA_VAT104_H2.getColumn(0, "SSN_VAMT");
        		sRECORD_14 = this.fn_LeptPad(sRECORD_14, "0", 14);

        		sRECORD_15 = "";
        		sRECORD_15 = this.fn_CharacterBlank(30, sRECORD_15);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*----------------------------------------------+
         |  (전자세금계산서 이외분) 매입자료 작성!  |
         +-----------------------------------------------*/
        this.fn_V105_Detail = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "";
        	// 사업자번호발행분중
        	// OFFLINE 발행분(무조건 DELAYYN = N)
        	// EBILL 발행분중 DELAYYN = Y 인것
        	this.dsTA_VAT105_D.filter("CUST_DIV == '1' && ((BILL_TYPECD == '0' && DELAYYN == 'N') || (BILL_TYPECD == '1' && DELAYYN == 'Y'))");
        	if (this.dsTA_VAT105_D.getRowCount() > 0) {
        		for (var i = 0; i < this.dsTA_VAT105_D.getRowCount(); i++) {
        			sRECORD_1 = "2";

        			sRECORD_2 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        			sRECORD_2 = this.fn_CharacterBlank(10, sRECORD_2);

        			sRECORD_3 = i + 1;
        			sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 4);

        			sRECORD_4 = this.fnc_Trim(this.dsTA_VAT105_D.getColumn(i, "CUST_NO"));
        			sRECORD_4 = this.fn_CharacterBlank(10, sRECORD_4);

        			sRECORD_5 = this.fnc_Trim(this.dsTA_VAT105_D.getColumn(i, "CUST_NM"));
        			sRECORD_5 = this.fn_CharacterBlank(30, sRECORD_5);

        			sRECORD_6 = "";
        			sRECORD_6 = this.fn_CharacterBlank(17, sRECORD_6);

        			sRECORD_7 = "";
        			sRECORD_7 = this.fn_CharacterBlank(25, sRECORD_7);

        			//sRECORD_8 = this.dsTA_VAT105_D.getColumn(i, "OFF_CCNT");
        			sRECORD_8 = this.dsTA_VAT105_D.getColumn(i, "OFF_TAXB_CCNT");
        			sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 7);

        			sRECORD_9 = 0;
        			sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 2);

        			sRECORD_10 = this.dsTA_VAT105_D.getColumn(i, "OFF_SAMT");
        			sRECORD_10 = this.fn_LeptPad(sRECORD_10, "0", 14);

        			sRECORD_11 = this.dsTA_VAT105_D.getColumn(i, "OFF_VAMT");
        			sRECORD_11 = this.fn_LeptPad(sRECORD_11, "0", 13);

        			sRECORD_12 = "0";
        			sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 1);

        			sRECORD_13 = "0";
        			sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 1);

        			sRECORD_14 = "8501";
        			sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 4);

        			// sRECORD_15 = fnc_Trim(dsTA_VAT105_D.getColumn(0, "TAXX_CODE"));
        			sRECORD_15 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "TAXOFFICE_CD"));
        			sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 3);

        			sRECORD_16 = "";
        			sRECORD_16 = this.fn_CharacterBlank(28, sRECORD_16);

        			// 결과 변수
        			var sRECORD = "";
        			sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        			sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        			sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        			sRECORD += sRECORD_16;

        			// TEXTAREA에 엔터키
        			this.sFILESAVE += String.fromCharCode(10);

        			// TEXTAREA에 값 저장
        			this.sFILESAVE += sRECORD;
        		}
        	}
        	// UnFilter(dsTA_VAT105_D);
        	this.dsTA_VAT105_D.filter("");
        }

        /*----------------------------------------------+
         |  (전자세금계산서 이외분) 매입합계 작성!  |
         +-----------------------------------------------*/
        this.fn_V105_Header1 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";

        	if (this.dsTA_VAT105_H1.getRowCount() > 0) {
        		sRECORD_1 = "4";

        		sRECORD_2 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_2 = this.fn_CharacterBlank(10, sRECORD_2);

        		sRECORD_3 = this.dsTA_VAT105_H1.getColumn(0, "ALL_CCNT");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 7);

        		sRECORD_4 = this.dsTA_VAT105_H1.getColumn(0, "ALL_PCNT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 7);

        		sRECORD_5 = this.dsTA_VAT105_H1.getColumn(0, "ALL_SAMT");
        		sRECORD_5 = this.fn_LeptPad(sRECORD_5, "0", 15);

        		sRECORD_6 = this.dsTA_VAT105_H1.getColumn(0, "ALL_VAMT");
        		sRECORD_6 = this.fn_LeptPad(sRECORD_6, "0", 14);

        		sRECORD_7 = this.dsTA_VAT105_H1.getColumn(0, "BIZNO_CCNT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 7);

        		sRECORD_8 = this.dsTA_VAT105_H1.getColumn(0, "BIZNO_PCNT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 7);

        		sRECORD_9 = this.dsTA_VAT105_H1.getColumn(0, "BIZNO_SAMT");
        		sRECORD_9 = this.fn_LeptPad(sRECORD_9, "0", 15);

        		sRECORD_10 = this.dsTA_VAT105_H1.getColumn(0, "BIZNO_VAMT");
        		sRECORD_10 = this.fn_LeptPad(sRECORD_10, "0", 14);

        		sRECORD_11 = this.dsTA_VAT105_H1.getColumn(0, "SSN_CCNT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 7);

        		sRECORD_12 = this.dsTA_VAT105_H1.getColumn(0, "SSN_PCNT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 7);

        		sRECORD_13 = this.dsTA_VAT105_H1.getColumn(0, "SSN_SAMT");
        		sRECORD_13 = this.fn_LeptPad(sRECORD_13, "0", 15);

        		sRECORD_14 = this.dsTA_VAT105_H1.getColumn(0, "SSN_VAMT");
        		sRECORD_14 = this.fn_LeptPad(sRECORD_14, "0", 14);

        		sRECORD_15 = "";
        		sRECORD_15 = this.fn_CharacterBlank(30, sRECORD_15);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*---------------------------------------+
         |   전자세금계산서분 매입합계 작성!  |
         +----------------------------------------*/
        this.fn_V105_Header2 = function () {

        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";

        	if (this.dsTA_VAT105_H2.getRowCount() > 0) {
        		sRECORD_1 = "6";

        		sRECORD_2 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_2 = this.fn_CharacterBlank(10, sRECORD_2);

        		sRECORD_3 = this.dsTA_VAT105_H2.getColumn(0, "ALL_CCNT");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 7);

        		sRECORD_4 = this.dsTA_VAT105_H2.getColumn(0, "ALL_PCNT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 7);

        		sRECORD_5 = this.dsTA_VAT105_H2.getColumn(0, "ALL_SAMT");
        		sRECORD_5 = this.fn_LeptPad(sRECORD_5, "0", 15);

        		sRECORD_6 = this.dsTA_VAT105_H2.getColumn(0, "ALL_VAMT");
        		sRECORD_6 = this.fn_LeptPad(sRECORD_6, "0", 14);

        		sRECORD_7 = this.dsTA_VAT105_H2.getColumn(0, "BIZNO_CCNT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 7);

        		sRECORD_8 = this.dsTA_VAT105_H2.getColumn(0, "BIZNO_PCNT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 7);

        		sRECORD_9 = this.dsTA_VAT105_H2.getColumn(0, "BIZNO_SAMT");
        		sRECORD_9 = this.fn_LeptPad(sRECORD_9, "0", 15);

        		sRECORD_10 = this.dsTA_VAT105_H2.getColumn(0, "BIZNO_VAMT");
        		sRECORD_10 = this.fn_LeptPad(sRECORD_10, "0", 14);

        		sRECORD_11 = this.dsTA_VAT105_H2.getColumn(0, "SSN_CCNT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 7);

        		sRECORD_12 = this.dsTA_VAT105_H2.getColumn(0, "SSN_PCNT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 7);

        		sRECORD_13 = this.dsTA_VAT105_H2.getColumn(0, "SSN_SAMT");
        		sRECORD_13 = this.fn_LeptPad(sRECORD_13, "0", 15);

        		sRECORD_14 = this.dsTA_VAT105_H2.getColumn(0, "SSN_VAMT");
        		sRECORD_14 = this.fn_LeptPad(sRECORD_14, "0", 14);

        		sRECORD_15 = "";
        		sRECORD_15 = this.fn_CharacterBlank(30, sRECORD_15);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*------------------------+
         |  제출자(대리인)레코드! |
         +-----------------------*/
        this.fn_V110_V109_HeaderA = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";

        	sRECORD_1 = "A";

        	sRECORD_2 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "TAXOFFICE_CD"));
        	sRECORD_2 = this.fn_CharacterBlank(3, sRECORD_2);

        	sRECORD_3 = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8);
        	sRECORD_3 = this.fn_CharacterBlank(8, sRECORD_3);

        	sRECORD_4 = "2";
        	sRECORD_4 = this.fn_CharacterBlank(1, sRECORD_4);

        	sRECORD_5 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "AGENT_NO"));
        	sRECORD_5 = this.fn_CharacterBlank(6, sRECORD_5);

        	sRECORD_6 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        	sRECORD_6 = this.fn_CharacterBlank(10, sRECORD_6);

        	sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BRANCH_NM"));
        	sRECORD_7 = this.fn_CharacterBlank(40, sRECORD_7);

        	sRECORD_8 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_NO"));
        	sRECORD_8 = this.fn_CharacterBlank(13, sRECORD_8);

        	sRECORD_9 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_MASTER"));
        	sRECORD_9 = this.fn_CharacterBlank(30, sRECORD_9);

        	sRECORD_10 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_POST"));
        	sRECORD_10 = this.fn_CharacterBlank(10, sRECORD_10);

        	sRECORD_11 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_ADDR"));
        	sRECORD_11 = this.fn_CharacterBlank(70, sRECORD_11);

        	sRECORD_12 = this.fnc_Replace(this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_TEL")), "-", "");
        	sRECORD_12 = this.fn_CharacterBlank(15, sRECORD_12);

        	sRECORD_13 = "1";
        	sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 5);

        	sRECORD_14 = "101";
        	sRECORD_14 = this.fn_CharacterBlank(3, sRECORD_14);

        	sRECORD_15 = "";
        	sRECORD_15 = this.fn_CharacterBlank(15, sRECORD_15);

        	// 결과 변수
        	var sRECORD = "";
        	sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        	sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        	sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;

        	// TEXTAREA에 엔터키
        	this.sFILESAVE += String.fromCharCode(10);

        	// TEXTAREA에 값 저장
        	this.sFILESAVE += sRECORD;
        }

        /*-----------------------------+
         |   제출의무자인적사항레코드! |
         +----------------------------*/
        this.fn_V110_V109_HeaderB = function () {
        	var sRECORD_1 = "", sRECORD_2 = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5 = "";
        	var sRECORD_6 = "", sRECORD_7 = "", sRECORD_8 = "", sRECORD_9 = "";

        	sRECORD_1 = "B";

        	sRECORD_2 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "TAXOFFICE_CD"));
        	sRECORD_2 = this.fn_CharacterBlank(3, sRECORD_2);

        	sRECORD_3 = "1";
        	sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 6);

        	sRECORD_4 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        	sRECORD_4 = this.fn_CharacterBlank(10, sRECORD_4);

        	sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BRANCH_NM"));
        	sRECORD_5 = this.fn_CharacterBlank(40, sRECORD_5);

        	sRECORD_6 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_MASTER"));
        	sRECORD_6 = this.fn_CharacterBlank(30, sRECORD_6);

        	sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_POST"));
        	sRECORD_7 = this.fn_CharacterBlank(10, sRECORD_7);

        	sRECORD_8 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_ADDR"));
        	sRECORD_8 = this.fn_CharacterBlank(70, sRECORD_8);

        	sRECORD_9 = "";
        	sRECORD_9 = this.fn_CharacterBlank(60, sRECORD_9);

        	// 결과 변수
        	var sRECORD = "";
        	sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        	sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9;

        	// TEXTAREA에 엔터키
        	this.sFILESAVE += String.fromCharCode(10);

        	// TEXTAREA에 값 저장
        	this.sFILESAVE += sRECORD;

        	// 계산서 A, B레코드 Y로
        	this.sBillHeader = "Y";
        }

        /*---------------------------------+
         |   제출의무자별집계레코드(매출)! |
         +--------------------------------*/
        this.fn_V110_Header = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "", sRECORD_17 = "", sRECORD_18 = "", sRECORD_19 = "", sRECORD_20 = "";
        	var sRECORD_21 = "", sRECORD_22 = "", sRECORD_23 = "", sRECORD_24 = "";

        	sRECORD_1 = "C";
        	sRECORD_2 = "17";

        	var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT110_H1.getColumn(0, "VAT_QUARTER"));
        	if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        		sRECORD_3 = "1"; //1기예정, 1기확정
        	} else {
        		sRECORD_3 = "2"; //2기예정, 2기확정
        	}
        	sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        	var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT110_H1.getColumn(0, "VAT_QUARTER"));
        	if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        		sRECORD_4 = "1"; //예정
        	} else {
        		sRECORD_4 = "2"; //확정
        	}

        	sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "TAXOFFICE_CD"));
        	sRECORD_5 = this.fn_CharacterBlank(3, sRECORD_5);

        	sRECORD_6 = "1";
        	sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 6);

        	sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        	sRECORD_7 = this.fn_CharacterBlank(10, sRECORD_7);

        	sRECORD_8 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_YYYY"));
        	sRECORD_8 = this.fn_CharacterBlank(4, sRECORD_8);

        	sRECORD_9 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_SYMD"));
        	sRECORD_9 = this.fn_CharacterBlank(8, sRECORD_9);

        	sRECORD_10 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_EYMD"));
        	sRECORD_10 = this.fn_CharacterBlank(8, sRECORD_10);

        	sRECORD_11 = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8);
        	sRECORD_11 = this.fn_CharacterBlank(8, sRECORD_11);

        	sRECORD_12 = this.dsTA_VAT110_H1.getColumn(0, "ALL_CCNT");
        	sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 6);

        	sRECORD_13 = this.dsTA_VAT110_H1.getColumn(0, "ALL_PCNT");
        	sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 6);

        	if (this.dsTA_VAT110_H1.getColumn(0, "ALL_SAMT") >= 0) {
        		sRECORD_14 = "0";
        		sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 1);

        		sRECORD_15 = this.dsTA_VAT110_H1.getColumn(0, "ALL_SAMT");
        		sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 14);
        	} else {
        		sRECORD_14 = "1";
        		sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 1);

        		sRECORD_15 = nexacro.toNumber(this.dsTA_VAT110_H1.getColumn(0, "ALL_SAMT")) * (-1);
        		sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 14);
        	}

        	sRECORD_16 = this.dsTA_VAT110_H1.getColumn(0, "BIZNO_CCNT");
        	sRECORD_16 = this.fn_LeptPad_2(sRECORD_16, "0", 6);

        	sRECORD_17 = this.dsTA_VAT110_H1.getColumn(0, "BIZNO_PCNT");
        	sRECORD_17 = this.fn_LeptPad_2(sRECORD_17, "0", 6);

        	if (this.dsTA_VAT110_H1.getColumn(0, "BIZNO_SAMT") >= 0) {
        		sRECORD_18 = "0";
        		sRECORD_18 = this.fn_LeptPad_2(sRECORD_18, "0", 1);

        		sRECORD_19 = this.dsTA_VAT110_H1.getColumn(0, "BIZNO_SAMT");
        		sRECORD_19 = this.fn_LeptPad_2(sRECORD_19, "0", 14);
        	} else {
        		sRECORD_18 = "1";
        		sRECORD_18 = this.fn_LeptPad_2(sRECORD_18, "0", 1);

        		sRECORD_19 = nexacro.toNumber(this.dsTA_VAT110_H1.getColumn(0, "BIZNO_SAMT")) * (-1);
        		sRECORD_19 = this.fn_LeptPad_2(sRECORD_19, "0", 14);
        	}

        	sRECORD_20 = this.dsTA_VAT110_H1.getColumn(0, "SSN_CCNT");
        	sRECORD_20 = this.fn_LeptPad_2(sRECORD_20, "0", 6);

        	sRECORD_21 = this.dsTA_VAT110_H1.getColumn(0, "SSN_PCNT");
        	sRECORD_21 = this.fn_LeptPad_2(sRECORD_21, "0", 6);

        	if (this.dsTA_VAT110_H1.getColumn(0, "SSN_SAMT") >= 0) {
        		sRECORD_22 = "0";
        		sRECORD_22 = this.fn_LeptPad_2(sRECORD_22, "0", 1);

        		sRECORD_23 = this.dsTA_VAT110_H1.getColumn(0, "SSN_SAMT");
        		sRECORD_23 = this.fn_LeptPad_2(sRECORD_23, "0", 14);
        	} else {
        		sRECORD_22 = "1";
        		sRECORD_22 = this.fn_LeptPad_2(sRECORD_22, "0", 1);

        		sRECORD_23 = nexacro.toNumber(this.dsTA_VAT110_H1.getColumn(0, "SSN_SAMT")) * (-1);
        		sRECORD_23 = this.fn_LeptPad_2(sRECORD_23, "0", 14);
        	}

        	sRECORD_24 = "";
        	sRECORD_24 = this.fn_CharacterBlank(97, sRECORD_24);

        	// 결과 변수
        	var sRECORD = "";
        	sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        	sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        	sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        	sRECORD += sRECORD_16 + sRECORD_17 + sRECORD_18 + sRECORD_19 + sRECORD_20;
        	sRECORD += sRECORD_21 + sRECORD_22 + sRECORD_23 + sRECORD_24;

        	// TEXTAREA에 엔터키
        	this.sFILESAVE += String.fromCharCode(10);

        	// TEXTAREA에 값 저장
        	this.sFILESAVE += sRECORD;
        }

        /*-----------------------------+
         |  매출처별거래명세레코드!  |
         +------------------------------*/
        this.fn_V110_Detail = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4 = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9 = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "";

        	// 사업자번호발행분중
        	// OFFLINE 발행분(무조건 DELAYYN = N)
        	// EBILL 발행분중 DELAYYN = Y 인것
        	this.dsTA_VAT110_D.filter("CUST_DIV == 1 && ((BILL_TYPECD == 0 && DELAYYN == 'N') || (BILL_TYPECD == 1 && DELAYYN == 'Y'))");

        	for (var i = 0; i < this.dsTA_VAT110_D.getRowCount(); i++) {
        		sRECORD_1 = "D";

        		sRECORD_2 = "17";

        		var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT110_D.getColumn(i, "VAT_QUARTER"));
        		if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        			sRECORD_3 = "1"; //1기예정, 1기확정
        		} else {
        			sRECORD_3 = "2"; //2기예정, 2기확정
        		}

        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT110_D.getColumn(i, "VAT_QUARTER"));
        		if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        			sRECORD_4 = "1"; //예정
        		} else {
        			sRECORD_4 = "2"; //확정
        		}

        		sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "TAXOFFICE_CD"));
        		sRECORD_5 = this.fn_CharacterBlank(3, sRECORD_5);

        		sRECORD_6 = i + 1;
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 6);

        		sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_7 = this.fn_CharacterBlank(10, sRECORD_7);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT110_D.getColumn(i, "CUST_NO"));
        		sRECORD_8 = this.fn_CharacterBlank(10, sRECORD_8);

        		sRECORD_9 = this.fnc_Trim(this.dsTA_VAT110_D.getColumn(i, "CUST_NM"));
        		sRECORD_9 = this.fn_CharacterBlank(40, sRECORD_9);

        		sRECORD_10 = this.dsTA_VAT110_D.getColumn(i, "OFF_CCNT");
        		sRECORD_10 = this.fn_LeptPad_2(sRECORD_10, "0", 5);

        		if (this.dsTA_VAT110_D.getColumn(i, "OFF_SAMT") >= 0) {
        			sRECORD_11 = "0";
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 1);

        			sRECORD_12 = this.dsTA_VAT110_D.getColumn(i, "OFF_SAMT");
        			sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 14);
        		} else {
        			sRECORD_11 = "1";
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 1);

        			sRECORD_12 = nexacro.toNumber(this.dsTA_VAT110_D.getColumn(i, "OFF_SAMT")) * (-1);
        			sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 14);
        		}

        		sRECORD_13 = "";
        		sRECORD_13 = this.fn_CharacterBlank(136, sRECORD_13);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        	// UnFilter(dsTA_VAT110_D);
        	this.dsTA_VAT110_D.filter("");
        }

        /*---------------------------------------+
         |  전자계산서 매출집계레코드(매출)!  |
         +----------------------------------------*/
        this.fn_V110_Header2 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "", sRECORD_17 = "", sRECORD_18 = "", sRECORD_19 = "", sRECORD_20 = "";
        	var sRECORD_21 = "", sRECORD_22 = "", sRECORD_23 = "", sRECORD_24 = "";

        	if (this.dsTA_VAT110_H2.rowcount > 0) {
        		sRECORD_1 = "E";

        		sRECORD_2 = "17";

        		var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT110_H2.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        			sRECORD_3 = "1"; //1기예정, 1기확정
        		} else {
        			sRECORD_3 = "2"; //2기예정, 2기확정
        		}
        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT110_H2.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        			sRECORD_4 = "1"; //예정
        		} else {
        			sRECORD_4 = "2"; //확정
        		}

        		sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "TAXOFFICE_CD"));
        		sRECORD_5 = this.fn_CharacterBlank(3, sRECORD_5);

        		sRECORD_6 = "1";
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 6);

        		sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_7 = this.fn_CharacterBlank(10, sRECORD_7);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_YYYY"));
        		sRECORD_8 = this.fn_CharacterBlank(4, sRECORD_8);

        		sRECORD_9 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_SYMD"));
        		sRECORD_9 = this.fn_CharacterBlank(8, sRECORD_9);

        		sRECORD_10 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_EYMD"));
        		sRECORD_10 = this.fn_CharacterBlank(8, sRECORD_10);

        		sRECORD_11 = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8);
        		sRECORD_11 = this.fn_CharacterBlank(8, sRECORD_11);

        		sRECORD_12 = this.dsTA_VAT110_H2.getColumn(0, "ALL_CCNT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 6);

        		sRECORD_13 = this.dsTA_VAT110_H2.getColumn(0, "ALL_PCNT");
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 6);

        		if (this.dsTA_VAT110_H2.getColumn(0, "ALL_SAMT") >= 0) {
        			sRECORD_14 = "0";
        			sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 1);

        			sRECORD_15 = this.dsTA_VAT110_H2.getColumn(0, "ALL_SAMT");
        			sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 14);
        		} else {
        			sRECORD_14 = "1";
        			sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 1);

        			sRECORD_15 = nexacro.toNumber(this.dsTA_VAT110_H2.getColumn(0, "ALL_SAMT")) * (-1);
        			sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 14);
        		}

        		sRECORD_16 = this.dsTA_VAT110_H2.getColumn(0, "BIZNO_CCNT");
        		sRECORD_16 = this.fn_LeptPad_2(sRECORD_16, "0", 6);

        		sRECORD_17 = this.dsTA_VAT110_H2.getColumn(0, "BIZNO_PCNT");
        		sRECORD_17 = this.fn_LeptPad_2(sRECORD_17, "0", 6);

        		if (this.dsTA_VAT110_H2.getColumn(0, "BIZNO_SAMT") >= 0) {
        			sRECORD_18 = "0";
        			sRECORD_18 = this.fn_LeptPad_2(sRECORD_18, "0", 1);

        			sRECORD_19 = this.dsTA_VAT110_H2.getColumn(0, "BIZNO_SAMT");
        			sRECORD_19 = this.fn_LeptPad_2(sRECORD_19, "0", 14);
        		} else {
        			sRECORD_18 = "1";
        			sRECORD_18 = this.fn_LeptPad_2(sRECORD_18, "0", 1);

        			sRECORD_19 = nexacro.toNumber(this.dsTA_VAT110_H2.getColumn(0, "BIZNO_SAMT")) * (-1);
        			sRECORD_19 = this.fn_LeptPad_2(sRECORD_19, "0", 14);
        		}

        		sRECORD_20 = this.dsTA_VAT110_H2.getColumn(0, "SSN_CCNT");
        		sRECORD_20 = this.fn_LeptPad_2(sRECORD_20, "0", 6);

        		sRECORD_21 = this.dsTA_VAT110_H2.getColumn(0, "SSN_PCNT");
        		sRECORD_21 = this.fn_LeptPad_2(sRECORD_21, "0", 6);

        		if (this.dsTA_VAT110_H2.getColumn(0, "SSN_SAMT") >= 0) {
        			sRECORD_22 = "0";
        			sRECORD_22 = this.fn_LeptPad_2(sRECORD_22, "0", 1);

        			sRECORD_23 = this.dsTA_VAT110_H2.getColumn(0, "SSN_SAMT");
        			sRECORD_23 = this.fn_LeptPad_2(sRECORD_23, "0", 14);
        		} else {
        			sRECORD_22 = "1";
        			sRECORD_22 = this.fn_LeptPad_2(sRECORD_22, "0", 1);

        			sRECORD_23 = nexacro.toNumber(this.dsTA_VAT110_H2.getColumn(0, "SSN_SAMT"), 0) * (-1);
        			sRECORD_23 = this.fn_LeptPad_2(sRECORD_23, "0", 14);
        		}

        		sRECORD_24 = "";
        		sRECORD_24 = this.fn_CharacterBlank(97, sRECORD_24);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16 + sRECORD_17 + sRECORD_18 + sRECORD_19 + sRECORD_20;
        		sRECORD += sRECORD_21 + sRECORD_22 + sRECORD_23 + sRECORD_24;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*------------------------------------+
         |  제출의무자별집계레코드(매입)!  |
         +-------------------------------------*/
        this.fn_V109_Header = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "";

        	if (this.dsTA_VAT109_H1.rowcount > 0) {
        		sRECORD_1 = "C";

        		sRECORD_2 = "18";

        		var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT109_H1.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        			sRECORD_3 = "1"; //1기예정, 1기확정
        		} else {
        			sRECORD_3 = "2"; //2기예정, 2기확정
        		}
        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT109_H1.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        			sRECORD_4 = "1"; //예정
        		} else {
        			sRECORD_4 = "2"; //확정
        		}

        		sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "TAXOFFICE_CD"));
        		sRECORD_5 = this.fn_CharacterBlank(3, sRECORD_5);

        		sRECORD_6 = "1";
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 6);

        		sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_7 = this.fn_CharacterBlank(10, sRECORD_7);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_YYYY"));
        		sRECORD_8 = this.fn_CharacterBlank(4, sRECORD_8);

        		sRECORD_9 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_SYMD"));
        		sRECORD_9 = this.fn_CharacterBlank(8, sRECORD_9);

        		sRECORD_10 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_EYMD"));
        		sRECORD_10 = this.fn_CharacterBlank(8, sRECORD_10);

        		sRECORD_11 = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8);
        		sRECORD_11 = this.fn_CharacterBlank(8, sRECORD_11);

        		sRECORD_12 = this.dsTA_VAT109_H1.getColumn(0, "ALL_CCNT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 6);

        		sRECORD_13 = this.dsTA_VAT109_H1.getColumn(0, "ALL_PCNT");
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 6);

        		if (this.dsTA_VAT109_H1.getColumn(0, "ALL_SAMT") >= 0) {
        			sRECORD_14 = "0";
        			sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 1);

        			sRECORD_15 = this.dsTA_VAT109_H1.getColumn(0, "ALL_SAMT");
        			sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 14);
        		} else {
        			sRECORD_14 = "1";
        			sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 1);

        			sRECORD_15 = nexacro.toNumber(this.dsTA_VAT109_H1.getColumn(0, "ALL_SAMT")) * (-1);
        			sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 14);
        		}

        		sRECORD_16 = "";
        		sRECORD_16 = this.fn_CharacterBlank(151, sRECORD_16);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*-----------------------------+
         |  매입처별거래명세레코드!  |
         +------------------------------*/
        this.fn_V109_Detail = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4 = "", sRECORD_5 = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9 = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "";

        	// 사업자번호발행분중
        	// OFFLINE 발행분(무조건 DELAYYN = N)
        	// EBILL 발행분중 DELAYYN = Y 인것
        	this.dsTA_VAT109_D.filter("CUST_DIV == 1 && ((BILL_TYPECD == 0 && DELAYYN == 'N') || (BILL_TYPECD == 1 && DELAYYN == 'Y'))");

        	for (var i = 0; i < this.dsTA_VAT109_D.getRowCount(); i++) {
        		sRECORD_1 = "D";

        		sRECORD_2 = "18";

        		var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT109_D.getColumn(i, "VAT_QUARTER"));
        		if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        			sRECORD_3 = "1"; //1기예정, 1기확정
        		} else {
        			sRECORD_3 = "2"; //2기예정, 2기확정
        		}
        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT109_D.getColumn(i, "VAT_QUARTER"));
        		if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        			sRECORD_4 = "1"; //예정
        		} else {
        			sRECORD_4 = "2"; //확정
        		}

        		sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "TAXOFFICE_CD"));
        		sRECORD_5 = this.fn_CharacterBlank(3, sRECORD_5);

        		sRECORD_6 = i + 1;
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 6);

        		sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_7 = this.fn_CharacterBlank(10, sRECORD_7);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT109_D.getColumn(i, "CUST_BIZNO"));
        		sRECORD_8 = this.fn_CharacterBlank(10, sRECORD_8);

        		sRECORD_9 = this.fnc_Trim(this.dsTA_VAT109_D.getColumn(i, "CUST_NM"));
        		sRECORD_9 = this.fn_CharacterBlank(40, sRECORD_9);

        		sRECORD_10 = this.dsTA_VAT109_D.getColumn(i, "OFF_CCNT");
        		sRECORD_10 = this.fn_LeptPad_2(sRECORD_10, "0", 5);

        		if (this.dsTA_VAT109_D.getColumn(i, "OFF_SAMT") >= 0) {
        			sRECORD_11 = "0";
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 1);

        			sRECORD_12 = this.dsTA_VAT109_D.getColumn(i, "OFF_SAMT");
        			sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 14);
        		} else {
        			sRECORD_11 = "1";
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 1);

        			sRECORD_12 = nexacro.toNumber(this.dsTA_VAT109_D.getColumn(i, "OFF_SAMT")) * (-1);
        			sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 14);
        		}

        		sRECORD_13 = "";
        		sRECORD_13 = this.fn_CharacterBlank(136, sRECORD_13);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}

        	// UnFilter(dsTA_VAT109_D);
        	this.dsTA_VAT109_D.filter("");
        }

        /*---------------------------------------+
         |  전자계산서 매입집계레코드(매입)!  |
         +----------------------------------------*/
        this.fn_V109_Header2 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "";

        	if (this.dsTA_VAT109_H2.rowcount > 0) {
        		sRECORD_1 = "E";

        		sRECORD_2 = "18";

        		var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT109_H2.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        			sRECORD_3 = "1"; //1기예정, 1기확정
        		} else {
        			sRECORD_3 = "2"; //2기예정, 2기확정
        		}
        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT109_H2.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        			sRECORD_4 = "1"; //예정
        		} else {
        			sRECORD_4 = "2"; //확정
        		}

        		sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "TAXOFFICE_CD"));
        		sRECORD_5 = this.fn_CharacterBlank(3, sRECORD_5);

        		sRECORD_6 = "1";
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 6);

        		sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_7 = this.fn_CharacterBlank(10, sRECORD_7);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_YYYY"));
        		sRECORD_8 = this.fn_CharacterBlank(4, sRECORD_8);

        		sRECORD_9 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_SYMD"));
        		sRECORD_9 = this.fn_CharacterBlank(8, sRECORD_9);

        		sRECORD_10 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_EYMD"));
        		sRECORD_10 = this.fn_CharacterBlank(8, sRECORD_10);

        		sRECORD_11 = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8);
        		sRECORD_11 = this.fn_CharacterBlank(8, sRECORD_11);

        		sRECORD_12 = this.dsTA_VAT109_H2.getColumn(0, "ALL_CCNT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 6);

        		sRECORD_13 = this.dsTA_VAT109_H2.getColumn(0, "ALL_PCNT");
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 6);

        		if (this.dsTA_VAT109_H2.getColumn(0, "ALL_SAMT") >= 0) {
        			sRECORD_14 = "0";
        			sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 1);

        			sRECORD_15 = this.dsTA_VAT109_H2.getColumn(0, "ALL_SAMT");
        			sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 14);
        		} else {
        			sRECORD_14 = "1";
        			sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 1);

        			sRECORD_15 = nexacro.toNumber(this.dsTA_VAT109_H2.getColumn(0, "ALL_SAMT")) * (-1);
        			sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 14);
        		}

        		sRECORD_16 = "";
        		sRECORD_16 = this.fn_CharacterBlank(151, sRECORD_16);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*--------------------------------------+
         |  신용카드매출전표등발행금액집계표!   |
         +-------------------------------------*/
        this.fn_V117_Header = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "", sRECORD_17 = "";

        	if (this.dsTA_VAT117_H.getRowCount() > 0) {
        		sRECORD_1 = "17";

        		sRECORD_2 = "I103400";

        		sRECORD_3 = this.dsTA_VAT117_H.getColumn(0, "ALL_TAMT");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 15);

        		sRECORD_4 = this.dsTA_VAT117_H.getColumn(0, "ALL_CREDIT_TAMT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 13);

        		sRECORD_5 = this.dsTA_VAT117_H.getColumn(0, "ALL_CASH_TAMT");
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 13);

        		sRECORD_6 = this.dsTA_VAT117_H.getColumn(0, "TAX_TAMT");
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 13);

        		sRECORD_7 = this.dsTA_VAT117_H.getColumn(0, "TAX_CREDIT_TAMT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 13);

        		sRECORD_8 = this.dsTA_VAT117_H.getColumn(0, "TAX_CASH_TAMT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 13);

        		sRECORD_9 = this.dsTA_VAT117_H.getColumn(0, "EXC_TAMT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 13);

        		sRECORD_10 = this.dsTA_VAT117_H.getColumn(0, "EXC_CREDIT_TAMT");
        		sRECORD_10 = this.fn_LeptPad_2(sRECORD_10, "0", 13);

        		sRECORD_11 = this.dsTA_VAT117_H.getColumn(0, "EXC_CASH_TAMT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);

        		sRECORD_12 = this.dsTA_VAT117_H.getColumn(0, "TIP_TAMT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 13);

        		sRECORD_13 = this.dsTA_VAT117_H.getColumn(0, "TIP_CREDIT_TAMT");
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);

        		sRECORD_14 = this.dsTA_VAT117_H.getColumn(0, "TIP_CASH_TAMT");
        		sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 13);

        		sRECORD_15 = this.dsTA_VAT117_H.getColumn(0, "SBILL_TAMT");
        		sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 13);

        		sRECORD_16 = this.dsTA_VAT117_H.getColumn(0, "KBILL_TAMT");
        		sRECORD_16 = this.fn_LeptPad_2(sRECORD_16, "0", 13);

        		sRECORD_17 = "";
        		sRECORD_17 = this.fn_CharacterBlank(7, sRECORD_17);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16 + sRECORD_17;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*---------------------------------------------------+
         |  신용카드매출전표수취명세서 제출자 인적사항 작성! |
         +--------------------------------------------------*/
        this.fn_V164_Header = function () {
        	var sRECORD_1 = "", sRECORD_2 = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5  = "";
        	var sRECORD_6 = "", sRECORD_7 = "", sRECORD_8 = "", sRECORD_9 = "", sRECORD_10 = "";

        	sRECORD_1 = "HL";

        	sRECORD_2 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_YYYY"));
        	sRECORD_2 = this.fn_CharacterBlank(4, sRECORD_2);

        	var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_QUARTER"));
        	if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        		sRECORD_3 = "1"; //1기예정, 1기확정
        	} else {
        		sRECORD_3 = "2"; //2기예정, 2기확정
        	}
        	sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        	var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_QUARTER"));
        	if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        		sRECORD_4 = "3"; //예정
        	} else {
        		sRECORD_4 = "6"; //확정
        	}

        	sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        	sRECORD_5 = this.fn_CharacterBlank(10, sRECORD_5);

        	sRECORD_6 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BRANCH_NM"));
        	sRECORD_6 = this.fn_CharacterBlank(60, sRECORD_6);

        	sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_MASTER"));
        	sRECORD_7 = this.fn_CharacterBlank(30, sRECORD_7);

        	sRECORD_8 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_NO"));
        	sRECORD_8 = this.fn_CharacterBlank(13, sRECORD_8);

        	sRECORD_9 = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8);
        	sRECORD_9 = this.fn_CharacterBlank(8, sRECORD_9);

        	sRECORD_10 = "";
        	sRECORD_10 = this.fn_CharacterBlank(11, sRECORD_10);

        	// 결과 변수
        	var sRECORD = "";
        	sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        	sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;

        	// TEXTAREA에 엔터키
        	this.sFILESAVE += String.fromCharCode(10);

        	// TEXTAREA에 값 저장
        	this.sFILESAVE += sRECORD;
        }

        /*------------------------------------------------------------------------------------------+
         |  신용,직불카드 및 기명식선불카드 매출전표 수취명세(카드구분(1), 신용카드 및 직불카드등)! |
         +-----------------------------------------------------------------------------------------*/
        this.fn_V164_Detail1 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "";

        	this.dsTA_VAT164_D.filter("CARD_TYPECD == 1");

        	for (var i = 0; i < this.dsTA_VAT164_D.getRowCount(); i++) {
        		this.sCardCnt++;

        		sRECORD_1 = "DL";

        		sRECORD_2 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(i, "VAT_YYYY"));
        		sRECORD_2 = this.fn_CharacterBlank(4, sRECORD_2);

        		var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(i, "VAT_QUARTER"));
        		if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        			sRECORD_3 = "1"; //1기예정, 1기확정
        		} else {
        			sRECORD_3 = "2"; //2기예정, 2기확정
        		}
        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(i, "VAT_QUARTER"));
        		if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        			sRECORD_4 = "3"; //예정
        		} else {
        			sRECORD_4 = "6"; //확정
        		}

        		sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_5 = this.fn_CharacterBlank(10, sRECORD_5);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(i, "CARD_TYPECD"));
        		sRECORD_6 = this.fn_CharacterBlank(1, sRECORD_6);

        		sRECORD_7 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(i, "CARD_NO"));
        		sRECORD_7 = this.fn_CharacterBlank(20, sRECORD_7);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(i, "CUST_BIZNO"));
        		sRECORD_8 = this.fn_CharacterBlank(10, sRECORD_8);

        		sRECORD_9 = this.dsTA_VAT164_D.getColumn(i, "CREDIT_CCNT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 9);

        		if (this.dsTA_VAT164_D.getColumn(0, "CREDIT_SAMT") < 0) {
        			sRECORD_10 = "-";
        			sRECORD_10 = this.fn_CharacterBlank(1, sRECORD_10);

        			sRECORD_11 = nexacro.toNumber(this.dsTA_VAT164_D.getColumn(i, "CREDIT_SAMT")) * (-1);
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);
        		} else {
        			sRECORD_10 = "";
        			sRECORD_10 = this.fn_CharacterBlank(1, sRECORD_10);

        			sRECORD_11 = this.dsTA_VAT164_D.getColumn(i, "CREDIT_SAMT");
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);
        		}

        		if (this.dsTA_VAT164_D.getColumn(i, "CREDIT_VAMT") < 0) {
        			sRECORD_12 = "-";
        			sRECORD_12 = this.fn_CharacterBlank(1, sRECORD_12);

        			sRECORD_13 = nexacro.toNumber(this.dsTA_VAT164_D.getColumn(i, "CREDIT_VAMT")) * (-1);
        			sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);
        		} else {
        			sRECORD_12 = "";
        			sRECORD_12 = this.fn_CharacterBlank(1, sRECORD_12);

        			sRECORD_13 = this.dsTA_VAT164_D.getColumn(i, "CREDIT_VAMT");
        			sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);
        		}

        		sRECORD_14 = "";
        		sRECORD_14 = this.fn_CharacterBlank(54, sRECORD_14);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}

        	// UnFilter(dsTA_VAT164_D);
        	this.dsTA_VAT164_D.filter("");
        }

        /*------------------------------------------------------------------------------+
         |  신용,직불카드 및 기명식선불카드 매출전표 수취명세(카드구분(2), 현금영수증)! |
         +-----------------------------------------------------------------------------*/
        this.fn_V164_Detail2 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5 = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "";

        	// 신용카드 및 직불카드등
        	this.dsTA_VAT164_D.filter("CARD_TYPECD == 2");

        	if (this.dsTA_VAT164_D.getRowCount() > 0) {
        		this.sCardCnt++;

        		sRECORD_1 = "DL";

        		sRECORD_2 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_YYYY"));
        		sRECORD_2 = this.fn_CharacterBlank(4, sRECORD_2);

        		var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        			sRECORD_3 = "1"; //1기예정, 1기확정
        		} else {
        			sRECORD_3 = "2"; //2기예정, 2기확정
        		}
        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        			sRECORD_4 = "3"; //예정
        		} else {
        			sRECORD_4 = "6"; //확정
        		}

        		sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_5 = this.fn_CharacterBlank(10, sRECORD_5);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "CARD_TYPECD"));
        		sRECORD_6 = this.fn_CharacterBlank(1, sRECORD_6);

        		sRECORD_7 = "";
        		sRECORD_7 = this.fn_CharacterBlank(20, sRECORD_7);

        		sRECORD_8 = "";
        		sRECORD_8 = this.fn_CharacterBlank(10, sRECORD_8);

        		sRECORD_9 = this.dsTA_VAT164_D.getSum("CREDIT_CCNT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 9);

        		if (this.dsTA_VAT164_D.getSum("CREDIT_SAMT") < 0) {
        			sRECORD_10 = "-";
        			sRECORD_10 = this.fn_CharacterBlank(1, sRECORD_10);

        			sRECORD_11 = nexacro.toNumber(this.dsTA_VAT164_D.getSum("CREDIT_SAMT")) * (-1);
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);
        		} else {
        			sRECORD_10 = "";
        			sRECORD_10 = this.fn_CharacterBlank(1, sRECORD_10);

        			sRECORD_11 = this.dsTA_VAT164_D.getSum("CREDIT_SAMT");
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);
        		}

        		if (this.dsTA_VAT164_D.getSum("CREDIT_VAMT") < 0) {
        			sRECORD_12 = "-";
        			sRECORD_12 = this.fn_CharacterBlank(1, sRECORD_12);

        			sRECORD_13 = nexacro.toNumber(this.dsTA_VAT164_D.getSum("CREDIT_VAMT")) * (-1);
        			sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);
        		} else {
        			sRECORD_12 = "";
        			sRECORD_12 = this.fn_CharacterBlank(1, sRECORD_12);

        			sRECORD_13 = this.dsTA_VAT164_D.getSum("CREDIT_VAMT");
        			sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);
        		}

        		sRECORD_14 = "";
        		sRECORD_14 = this.fn_CharacterBlank(54, sRECORD_14);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}

        	// UnFilter(dsTA_VAT164_D);
        	this.dsTA_VAT164_D.filter("");
        }

        /*------------------------------------------------------------------------------------+
         |  신용,직불카드 및 기명식선불카드 매출전표 수취명세(카드구분(3), 화물운송복지카드)! |
         +-----------------------------------------------------------------------------------*/
        this.fn_V164_Detail3 = function () {

        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5 = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "";

        	// 신용카드 및 직불카드등
        	this.dsTA_VAT164_D.filter("CARD_TYPECD == 3");

        	if (this.dsTA_VAT164_D.getRowCount() > 0) {
        		this.sCardCnt++;

        		sRECORD_1 = "DL";

        		sRECORD_2 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_YYYY"));
        		sRECORD_2 = this.fn_CharacterBlank(4, sRECORD_2);

        		var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        			sRECORD_3 = "1"; //1기예정, 1기확정
        		} else {
        			sRECORD_3 = "2"; //2기예정, 2기확정
        		}
        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        			sRECORD_4 = "3"; //예정
        		} else {
        			sRECORD_4 = "6"; //확정
        		}

        		sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_5 = this.fn_CharacterBlank(10, sRECORD_5);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "CARD_TYPECD"));
        		sRECORD_6 = this.fn_CharacterBlank(1, sRECORD_6);

        		sRECORD_7 = "";
        		sRECORD_7 = this.fn_CharacterBlank(20, sRECORD_7);

        		sRECORD_8 = "";
        		sRECORD_8 = this.fn_CharacterBlank(10, sRECORD_8);

        		sRECORD_9 = this.dsTA_VAT164_D.getSum("CREDIT_CCNT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 9);

        		if (this.dsTA_VAT164_D.getSum("CREDIT_SAMT") < 0) {
        			sRECORD_10 = "-";
        			sRECORD_10 = this.fn_CharacterBlank(1, sRECORD_10);

        			sRECORD_11 = nexacro.toNumber(this.dsTA_VAT164_D.getSum("CREDIT_SAMT")) * (-1);
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);
        		} else {
        			sRECORD_10 = "";
        			sRECORD_10 = this.fn_CharacterBlank(1, sRECORD_10);

        			sRECORD_11 = this.dsTA_VAT164_D.getSum("CREDIT_SAMT");
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);
        		}

        		if (this.dsTA_VAT164_D.getSum("CREDIT_VAMT") < 0) {
        			sRECORD_12 = "-";
        			sRECORD_12 = this.fn_CharacterBlank(1, sRECORD_12);

        			sRECORD_13 = nexacro.toNumber(this.dsTA_VAT164_D.getSum("CREDIT_VAMT")) * (-1);
        			sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);
        		} else {
        			sRECORD_12 = "";
        			sRECORD_12 = this.fn_CharacterBlank(1, sRECORD_12);

        			sRECORD_13 = this.dsTA_VAT164_D.getSum("CREDIT_VAMT");
        			sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);
        		}

        		sRECORD_14 = "";
        		sRECORD_14 = this.fn_CharacterBlank(54, sRECORD_14);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}

        	// UnFilter(dsTA_VAT164_D);
        	this.dsTA_VAT164_D.filter("");
        }

        /*----------------------------------------------------------------------------------+
         |  신용,직불카드 및 기명식선불카드 매출전표 수취명세(카드구분(4), 사업용신용카드)! |
         +---------------------------------------------------------------------------------*/
        this.fn_V164_Detail4 = function () {

        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "";
        	// 신용카드 및 직불카드등
        	this.dsTA_VAT164_D.filter("CARD_TYPECD == 4");

        	if (this.dsTA_VAT164_D.getRowCount() > 0) {
        		this.sCardCnt++;

        		sRECORD_1 = "DL";

        		sRECORD_2 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_YYYY"));
        		sRECORD_2 = this.fn_CharacterBlank(4, sRECORD_2);

        		var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        			sRECORD_3 = "1"; //1기예정, 1기확정
        		} else {
        			sRECORD_3 = "2"; //2기예정, 2기확정
        		}
        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_QUARTER"));
        		if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        			sRECORD_4 = "3"; //예정
        		} else {
        			sRECORD_4 = "6"; //확정
        		}

        		sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_5 = this.fn_CharacterBlank(10, sRECORD_5);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "CARD_TYPECD"));
        		sRECORD_6 = this.fn_CharacterBlank(1, sRECORD_6);

        		sRECORD_7 = "";
        		sRECORD_7 = this.fn_CharacterBlank(20, sRECORD_7);

        		sRECORD_8 = "";
        		sRECORD_8 = this.fn_CharacterBlank(10, sRECORD_8);

        		sRECORD_9 = this.dsTA_VAT164_D.getSum("CREDIT_CCNT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 9);

        		if (this.dsTA_VAT164_D.getSum("CREDIT_SAMT") < 0) {
        			sRECORD_10 = "-";
        			sRECORD_10 = this.fn_CharacterBlank(1, sRECORD_10);

        			sRECORD_11 = nexacro.toNumber(this.dsTA_VAT164_D.getSum("CREDIT_SAMT")) * (-1);
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);
        		} else {
        			sRECORD_10 = "";
        			sRECORD_10 = this.fn_CharacterBlank(1, sRECORD_10);

        			sRECORD_11 = this.dsTA_VAT164_D.getSum("CREDIT_SAMT");
        			sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);
        		}

        		if (this.dsTA_VAT164_D.getSum("CREDIT_VAMT") < 0) {
        			sRECORD_12 = "-";
        			sRECORD_12 = this.fn_CharacterBlank(1, sRECORD_12);

        			sRECORD_13 = nexacro.toNumber(this.dsTA_VAT164_D.getSum("CREDIT_VAMT")) * (-1);
        			sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);
        		} else {
        			sRECORD_12 = "";
        			sRECORD_12 = this.fn_CharacterBlank(1, sRECORD_12);

        			sRECORD_13 = this.dsTA_VAT164_D.getSum("CREDIT_VAMT");
        			sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);
        		}

        		sRECORD_14 = "";
        		sRECORD_14 = this.fn_CharacterBlank(54, sRECORD_14);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}

        	// UnFilter(dsTA_VAT164_D);
        	this.dsTA_VAT164_D.filter("");
        }

        /*------------------------------------------------------------+
         |  신용카드매출전표수취명세서 신용카드등 매입내용 합계 작성! |
         +-----------------------------------------------------------*/
        this.fn_V164_Tail = function () {

        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8 = "", sRECORD_9 = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "";

        	sRECORD_1 = "TL";

        	sRECORD_2 = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_YYYY"));
        	sRECORD_2 = this.fn_CharacterBlank(4, sRECORD_2);

        	var sRECORD_3_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_QUARTER"));
        	if (sRECORD_3_GUBN == "1" || sRECORD_3_GUBN == "2") {
        		sRECORD_3 = "1"; //1기예정, 1기확정
        	} else {
        		sRECORD_3 = "2"; //2기예정, 2기확정
        	}
        	sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        	var sRECORD_4_GUBN = this.fnc_Trim(this.dsTA_VAT164_D.getColumn(0, "VAT_QUARTER"));
        	if (sRECORD_4_GUBN == "1" || sRECORD_4_GUBN == "3") {
        		sRECORD_4 = "3"; //예정
        	} else {
        		sRECORD_4 = "6"; //확정
        	}

        	sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        	sRECORD_5 = this.fn_CharacterBlank(10, sRECORD_5);

        	sRECORD_6 = this.sCardCnt;
        	sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 7);

        	sRECORD_7 = this.dsTA_VAT164_D.getSum("CREDIT_CCNT");
        	sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 9);

        	if (this.dsTA_VAT164_D.getSum("CREDIT_SAMT") < 0) {
        		sRECORD_8 = "-";
        		sRECORD_8 = this.fn_CharacterBlank(1, sRECORD_8);

        		sRECORD_9 = nexacro.toNumber(this.dsTA_VAT164_D.getSum("CREDIT_SAMT")) * (-1);
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 15);
        	} else {
        		sRECORD_8 = "";
        		sRECORD_8 = this.fn_CharacterBlank(1, sRECORD_8);

        		sRECORD_9 = this.dsTA_VAT164_D.getSum("CREDIT_SAMT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 15);
        	}

        	if (this.dsTA_VAT164_D.getSum("CREDIT_VAMT") < 0) {
        		sRECORD_10 = "-";
        		sRECORD_10 = this.fn_CharacterBlank(1, sRECORD_10);

        		sRECORD_11 = nexacro.toNumber(this.dsTA_VAT164_D.getSum("CREDIT_VAMT")) * (-1);
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 15);
        	} else {
        		sRECORD_10 = "";
        		sRECORD_10 = this.fn_CharacterBlank(1, sRECORD_10);

        		sRECORD_11 = this.dsTA_VAT164_D.getSum("CREDIT_VAMT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 15);
        	}

        	sRECORD_12 = "";
        	sRECORD_12 = this.fn_CharacterBlank(74, sRECORD_12);

        	// 결과 변수
        	var sRECORD = "";
        	sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        	sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        	sRECORD += sRECORD_11 + sRECORD_12;

        	// TEXTAREA에 엔터키
        	this.sFILESAVE += String.fromCharCode(10);

        	// TEXTAREA에 값 저장
        	this.sFILESAVE += sRECORD;
        }

        this.fn_V153_Header = function () {
        	// 공제받지못할매입세액명세서 작성
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4 = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9 = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "";

        	if (this.dsTA_VAT153_H.getRowCount() > 0) {

        		sRECORD_1 = "17";

        		sRECORD_2 = "I103300";

        		sRECORD_3 = this.dsTA_VAT153_D.getSum("UNABLE_PCNT");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 11);

        		sRECORD_4 = this.dsTA_VAT153_D.getSum("UNABLE_SAMT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 15);

        		sRECORD_5 = this.dsTA_VAT153_D.getSum("UNABLE_VAMT");
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 15);

        		sRECORD_6 = this.dsTA_VAT153_D1.getSum("COMPUR_SAMT");
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 15);

        		sRECORD_7 = this.dsTA_VAT153_D1.getSum("COMPUR_VAMT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 15);

        		sRECORD_8 = this.dsTA_VAT153_D1.getSum("UNABLE_VAMT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 15);

        		sRECORD_9 = this.dsTA_VAT153_D2.getSum("TOTPUR_VAMT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 15);

        		sRECORD_10 = this.dsTA_VAT153_D2.getSum("UNATOT_VAMT");
        		sRECORD_10 = this.fn_LeptPad_2(sRECORD_10, "0", 15);

        		sRECORD_11 = this.dsTA_VAT153_D2.getSum("PREUNA_VAMT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 15);

        		sRECORD_12 = this.dsTA_VAT153_D3.getSum("ADDUNA_VAMT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 15);

        		sRECORD_13 = "";
        		sRECORD_13 = this.fn_CharacterBlank(45, sRECORD_13);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        
        /*-------------------------------------+
         |  공제받지못할매입세액명세서 명세!   |
         +------------------------------------*/
        this.fn_V153_Detail = function () {
        	// 공제받지못할매입세액명세서 명세 작성
        	var sRECORD_1 = "", sRECORD_2 = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5 = "";
        	var sRECORD_6 = "", sRECORD_7 = "";

        	for (var i = 0; i < this.dsTA_VAT153_D.getRowCount(); i++) {

        		sRECORD_1 = "18";

        		sRECORD_2 = "I103300";

        		sRECORD_3 = this.fnc_Trim(this.dsTA_VAT153_D.getColumn(i, "UNABLE_TYPECD"));
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 2);

        		sRECORD_4 = this.dsTA_VAT153_D.getColumn(i, "UNABLE_PCNT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 11);

        		sRECORD_5 = this.dsTA_VAT153_D.getColumn(i, "UNABLE_SAMT");
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 13);

        		sRECORD_6 = this.dsTA_VAT153_D.getColumn(i, "UNABLE_VAMT");
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 13);

        		sRECORD_7 = "";
        		sRECORD_7 = this.fn_CharacterBlank(52, sRECORD_7);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*---------------------------------------------------------+
         |  공제받지못할매입세액명세서 공통매입세액안분계산내역!   |
         +--------------------------------------------------------*/
        this.fn_V153_Detail1 = function () {
        	// 공제받지못할매입세액명세서 공통매입세액안분계산내역
        	var sRECORD_1 = "", sRECORD_2 = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5 = "";
        	var sRECORD_6 = "", sRECORD_7 = "", sRECORD_8 = "", sRECORD_9 = "";

        	for (var i = 0; i < this.dsTA_VAT153_D1.getRowCount(); i++) {
        		sRECORD_1 = "19";

        		sRECORD_2 = "I103300";

        		sRECORD_3 = this.dsTA_VAT153_D1.getColumn(i, "UNABLE_SEQ1");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 6);

        		sRECORD_4 = this.dsTA_VAT153_D1.getColumn(i, "COMPUR_SAMT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 13);

        		sRECORD_5 = this.dsTA_VAT153_D1.getColumn(i, "COMPUR_VAMT");
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 13);

        		sRECORD_6 = this.dsTA_VAT153_D1.getColumn(i, "UNABLE_SAMT");
        		sRECORD_6 = this.fn_LeptPad_3(sRECORD_6, "0", 15, 2);

        		sRECORD_7 = this.dsTA_VAT153_D1.getColumn(i, "EXCEPT_SAMT");
        		sRECORD_7 = this.fn_LeptPad_3(sRECORD_7, "0", 15, 2);

        		sRECORD_8 = this.dsTA_VAT153_D1.getColumn(i, "UNABLE_VAMT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 13);

        		sRECORD_9 = "";
        		sRECORD_9 = this.fn_CharacterBlank(16, sRECORD_9);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*---------------------------------------------------------+
         |  공제받지못할매입세액명세서 공통매입세액정산내역!   |
         +--------------------------------------------------------*/
        this.fn_V153_Detail2 = function () {
        	// 공제받지못할매입세액명세서 공통매입세액정산내역
        	var sRECORD_1 = "", sRECORD_2 = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5 = "";
        	var sRECORD_6 = "", sRECORD_7 = "", sRECORD_8 = "", sRECORD_9 = "";

        	for (var i = 0; i < this.dsTA_VAT153_D2.getRowCount(); i++) {
        		sRECORD_1 = "20";

        		sRECORD_2 = "I103300";

        		sRECORD_3 = this.dsTA_VAT153_D2.getColumn(i, "UNABLE_SEQ2");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 6);

        		sRECORD_4 = this.dsTA_VAT153_D2.getColumn(i, "TOTPUR_VAMT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 13);

        		sRECORD_5 = this.dsTA_VAT153_D2.getColumn(i, "EXCEPT_RATE");
        		sRECORD_5 = this.fn_LeptPad_3(sRECORD_5, "0", 11, 6);

        		sRECORD_6 = this.dsTA_VAT153_D2.getColumn(i, "UNATOT_VAMT");
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 13);

        		sRECORD_7 = this.dsTA_VAT153_D2.getColumn(i, "PREUNA_VAMT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 13);

        		sRECORD_8 = this.dsTA_VAT153_D2.getColumn(i, "ADDUNA_VAMT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 13);

        		sRECORD_9 = "";
        		sRECORD_9 = this.fn_CharacterBlank(22, sRECORD_9);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*---------------------------------------------------------+
         |  공제받지못할매입세액명세서 납부세액 환급세액재계산내역!   |
         +--------------------------------------------------------*/
        this.fn_V153_Detail3 = function () {
        	var sRECORD_1 = "", sRECORD_2 = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5 = "";
        	var sRECORD_6 = "", sRECORD_7 = "", sRECORD_8 = "";
        	for (var i = 0; i < this.dsTA_VAT153_D3.getRowCount(); i++) {

        		sRECORD_1 = "21";

        		sRECORD_2 = "I103300";

        		sRECORD_3 = this.dsTA_VAT153_D3.getColumn(i, "UNABLE_SEQ3");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 6);

        		sRECORD_4 = this.dsTA_VAT153_D3.getColumn(i, "PURGOO_VAMT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 13);

        		sRECORD_5 = this.dsTA_VAT153_D3.getColumn(i, "ADDMIN_RATE");
        		sRECORD_5 = this.fn_LeptPad_3(sRECORD_5, "0", 7, 4);

        		sRECORD_6 = this.dsTA_VAT153_D3.getColumn(i, "ADDEXC_RATE");
        		sRECORD_6 = this.fn_LeptPad_3(sRECORD_6, "0", 11, 6);

        		sRECORD_7 = this.dsTA_VAT153_D3.getColumn(i, "ADDUNA_VAMT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 13);

        		sRECORD_8 = "";
        		sRECORD_8 = this.fn_CharacterBlank(41, sRECORD_8);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*-------------------------------+
         |  수출실적명세서 A레코드 작성! |
         +------------------------------*/
        this.fn_V141_Header1 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8 = "", sRECORD_9 = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "";

        	sRECORD_1 = "A";

        	sRECORD_2 = this.fnc_SubStr(this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_EYMD")), 0, 6);
        	sRECORD_2 = this.fn_CharacterBlank(6, sRECORD_2);

        	sRECORD_3 = "3";
        	sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        	sRECORD_4 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        	sRECORD_4 = this.fn_CharacterBlank(10, sRECORD_4);

        	sRECORD_5 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BRANCH_NM"));
        	sRECORD_5 = this.fn_CharacterBlank(30, sRECORD_5);

        	sRECORD_6 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_MASTER"));
        	sRECORD_6 = this.fn_CharacterBlank(15, sRECORD_6);

        	sRECORD_7 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_ADDR"));
        	sRECORD_7 = this.fn_CharacterBlank(45, sRECORD_7);

        	sRECORD_8 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_TYPENM"));
        	sRECORD_8 = this.fn_CharacterBlank(17, sRECORD_8);

        	sRECORD_9 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "CORP_LINE"));
        	sRECORD_9 = this.fn_CharacterBlank(25, sRECORD_9);

        	sRECORD_10 = this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_SYMD"));
        	sRECORD_10 += this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_EYMD"));
        	sRECORD_10 = this.fn_CharacterBlank(16, sRECORD_10);

        	sRECORD_11 = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8);
        	sRECORD_11 = this.fn_CharacterBlank(8, sRECORD_11);

        	sRECORD_12 = "";
        	sRECORD_12 = this.fn_CharacterBlank(6, sRECORD_12);

        	// 결과 변수
        	var sRECORD = "";
        	sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        	sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        	sRECORD += sRECORD_11 + sRECORD_12;

        	// TEXTAREA에 엔터키
        	this.sFILESAVE += String.fromCharCode(10);

        	// TEXTAREA에 값 저장
        	this.sFILESAVE += sRECORD;
        }

        /*-------------------------------+
         |  수출실적명세서 B레코드 작성! |
         +------------------------------*/
        this.fn_V141_Header2 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "";

        	if (this.dsTA_VAT141_H.getRowCount() > 0) {
        		sRECORD_1 = "B";

        		sRECORD_2 = this.fnc_SubStr(this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_EYMD")), 0, 6);
        		sRECORD_2 = this.fn_CharacterBlank(6, sRECORD_2);

        		sRECORD_3 = "3";
        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		sRECORD_4 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_4 = this.fn_CharacterBlank(10, sRECORD_4);

        		sRECORD_5 = this.dsTA_VAT141_H.getColumn(0, "ALL_CCNT");
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 7);

        		sRECORD_6 = this.dsTA_VAT141_H.getColumn(0, "ALL_E_SAMT");
        		sRECORD_6 = this.fn_LeptPad_3(sRECORD_6, "0", 15, 2);

        		sRECORD_7 = this.dsTA_VAT141_H.getColumn(0, "ALL_W_SAMT");
        		sRECORD_7 = this.fn_LeptPad(sRECORD_7, "0", 15);

        		sRECORD_8 = this.dsTA_VAT141_H.getColumn(0, "GOODS_CCNT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 7);

        		sRECORD_9 = this.dsTA_VAT141_H.getColumn(0, "GOODS_E_SAMT");
        		sRECORD_9 = this.fn_LeptPad_3(sRECORD_9, "0", 15, 2);

        		sRECORD_10 = this.dsTA_VAT141_H.getColumn(0, "GOODS_W_SAMT");
        		sRECORD_10 = this.fn_LeptPad(sRECORD_10, "0", 15);

        		sRECORD_11 = this.dsTA_VAT141_H.getColumn(0, "ETC_CCNT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 7);

        		sRECORD_12 = this.dsTA_VAT141_H.getColumn(0, "ETC_E_SAMT");
        		sRECORD_12 = this.fn_LeptPad_3(sRECORD_12, "0", 15, 2);

        		sRECORD_13 = this.dsTA_VAT141_H.getColumn(0, "ETC_W_SAMT");
        		sRECORD_13 = this.fn_LeptPad(sRECORD_13, "0", 15);

        		sRECORD_14 = "";
        		sRECORD_14 = this.fn_CharacterBlank(51, sRECORD_14);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*-------------------------------+
         |  수출실적명세서 C레코드 작성! |
         +------------------------------*/
        this.fn_V141_Detail = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "";

        	for (var i = 0; i < this.dsTA_VAT141_D.getRowCount(); i++) {
        		sRECORD_1 = "C";

        		sRECORD_2 = this.fnc_SubStr(this.fnc_Trim(this.dsTA_VAT101_H1.getColumn(0, "VAT_EYMD")), 0, 6);
        		sRECORD_2 = this.fn_CharacterBlank(6, sRECORD_2);

        		sRECORD_3 = "3";
        		sRECORD_3 = this.fn_CharacterBlank(1, sRECORD_3);

        		sRECORD_4 = this.fnc_Trim(this.dsVA_VATBRANCH.getColumn(0, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_4 = this.fn_CharacterBlank(10, sRECORD_4);

        		sRECORD_5 = this.fnc_Trim(this.dsTA_VAT141_D.getColumn(i, "EXPORT_SEQ"));
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 7);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT141_D.getColumn(i, "EXPORT_NO"));
        		sRECORD_6 = this.fn_CharacterBlank(15, sRECORD_6);

        		sRECORD_7 = this.fnc_Trim(this.dsTA_VAT141_D.getColumn(i, "EXPORT_YMD"));
        		sRECORD_7 = this.fn_CharacterBlank(8, sRECORD_7);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT141_D.getColumn(i, "EXPORT_CURCD"));
        		sRECORD_8 = this.fn_CharacterBlank(3, sRECORD_8);

        		sRECORD_9 = this.dsTA_VAT141_D.getColumn(i, "EXCHANGE_RATE");
        		sRECORD_9 = this.fn_LeptPad_3(sRECORD_9, "0", 9, 4);

        		sRECORD_10 = this.dsTA_VAT141_D.getColumn(i, "EXPORT_E_SAMT");
        		sRECORD_10 = this.fn_LeptPad_3(sRECORD_10, "0", 15, 2);

        		sRECORD_11 = this.dsTA_VAT141_D.getColumn(i, "EXPORT_W_SAMT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 15);

        		sRECORD_12 = "";
        		sRECORD_12 = this.fn_CharacterBlank(90, sRECORD_12);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*---------------------------------------------------+
         |  영세율첨부서류제출명세서 작성(제출사유코드 : 01! |
         +--------------------------------------------------*/
        this.fn_V106_Detail1 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "";

        	this.dsTA_VAT106_D.filter("SEND_TYPECD == 1");

        	for (var i = 0; i < this.dsTA_VAT106_D.getRowCount(); i++) {
        		sRECORD_1 = "17";

        		sRECORD_2 = "I105800";

        		sRECORD_3 = this.fnc_SubStr(this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "SEND_TYPECD")), 0, 2);
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 2);

        		sRECORD_4 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "SEND_REMARK"));
        		sRECORD_4 = this.fn_CharacterBlank(60, sRECORD_4);

        		sRECORD_5 = i + 1;
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 6);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "DOCUMENT_NM"));
        		sRECORD_6 = this.fn_CharacterBlank(40, sRECORD_6);

        		sRECORD_7 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "ISSUER_NM"));
        		sRECORD_7 = this.fn_CharacterBlank(20, sRECORD_7);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "ISSUE_YMD"));
        		sRECORD_8 = this.fn_CharacterBlank(8, sRECORD_8);

        		sRECORD_9 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "SHIP_YMD"));
        		sRECORD_9 = this.fn_CharacterBlank(8, sRECORD_9);

        		sRECORD_10 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "EXP_CUR_CD"));
        		sRECORD_10 = this.fn_CharacterBlank(3, sRECORD_10);

        		sRECORD_11 = this.dsTA_VAT106_D.getColumn(i, "EXCHANGE_RATE");
        		sRECORD_11 = this.fn_LeptPad_3(sRECORD_11, "0", 9, 4);

        		sRECORD_12 = this.dsTA_VAT106_D.getColumn(i, "SENDE_SAMT");
        		sRECORD_12 = this.fn_LeptPad_3(sRECORD_12, "0", 15, 2);

        		sRECORD_13 = this.dsTA_VAT106_D.getColumn(i, "SENDW_SAMT");
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 15);

        		sRECORD_14 = this.dsTA_VAT106_D.getColumn(i, "REPOE_SAMT");
        		sRECORD_14 = this.fn_LeptPad_3(sRECORD_14, "0", 15, 2);

        		sRECORD_15 = this.dsTA_VAT106_D.getColumn(i, "REPOW_SAMT");
        		sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 15);

        		sRECORD_16 = "";
        		sRECORD_16 = this.fn_CharacterBlank(25, sRECORD_16);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        	// UnFilter(dsTA_VAT106_D);
        	this.dsTA_VAT106_D.filter("");
        }

        /*---------------------------------------------------+
         |  영세율첨부서류제출명세서 작성(제출사유코드 : 02! |
         +--------------------------------------------------*/
        this.fn_V106_Detail2 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "";

        	this.dsTA_VAT106_D.filter("SEND_TYPECD == 2");

        	for (var i = 0; i < this.dsTA_VAT106_D.getRowCount(); i++) {

        		sRECORD_1 = "17";

        		sRECORD_2 = "I105800";

        		sRECORD_3 = this.fnc_SubStr(this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "SEND_TYPECD")), 0, 2);
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 2);

        		sRECORD_4 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "SEND_REMARK"));
        		sRECORD_4 = this.fn_CharacterBlank(60, sRECORD_4);

        		sRECORD_5 = i + 1;
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 6);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "DOCUMENT_NM"));
        		sRECORD_6 = this.fn_CharacterBlank(40, sRECORD_6);

        		sRECORD_7 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "ISSUER_NM"));
        		sRECORD_7 = this.fn_CharacterBlank(20, sRECORD_7);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "ISSUE_YMD"));
        		sRECORD_8 = this.fn_CharacterBlank(8, sRECORD_8);

        		sRECORD_9 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "SHIP_YMD"));
        		sRECORD_9 = this.fn_CharacterBlank(8, sRECORD_9);

        		sRECORD_10 = this.fnc_Trim(this.dsTA_VAT106_D.getColumn(i, "EXP_CUR_CD"));
        		sRECORD_10 = this.fn_CharacterBlank(3, sRECORD_10);

        		sRECORD_11 = this.dsTA_VAT106_D.getColumn(i, "EXCHANGE_RATE");
        		sRECORD_11 = this.fn_LeptPad_3(sRECORD_11, "0", 9, 4);

        		sRECORD_12 = this.dsTA_VAT106_D.getColumn(i, "SENDE_SAMT");
        		sRECORD_12 = this.fn_LeptPad_3(sRECORD_12, "0", 15, 2);

        		sRECORD_13 = this.dsTA_VAT106_D.getColumn(i, "SENDW_SAMT");
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 15);

        		sRECORD_14 = this.dsTA_VAT106_D.getColumn(i, "REPOE_SAMT");
        		sRECORD_14 = this.fn_LeptPad_3(sRECORD_14, "0", 15, 2);

        		sRECORD_15 = this.dsTA_VAT106_D.getColumn(i, "REPOW_SAMT");
        		sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 15);

        		sRECORD_16 = "";
        		sRECORD_16 = this.fn_CharacterBlank(25, sRECORD_16);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        	// UnFilter(dsTA_VAT106_D);
        	this.dsTA_VAT106_D.filter("");
        }

        /*---------------------------------------+
         |  대손세액공제(변제)신고서 작성(대손)! |
         +--------------------------------------*/
        this.fn_V112_Detail1 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8 = "", sRECORD_9 = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "";
        	this.dsTA_VAT112_D.filter("BDR_TYPECD == 1");
        	for (var i = 0; i < this.dsTA_VAT112_D.getRowCount(); i++) {
        		sRECORD_1 = "17";

        		sRECORD_2 = "I102800";

        		sRECORD_3 = "01";
        		sRECORD_3 = this.fn_CharacterBlank(2, sRECORD_3);

        		sRECORD_4 = i + 1;
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 6);

        		sRECORD_5 = this.fnc_Trim(this.dsTA_VAT112_D.getColumn(i, "BDR_YMD"));
        		sRECORD_5 = this.fn_CharacterBlank(8, sRECORD_5);

        		sRECORD_6 = this.dsTA_VAT112_D.getColumn(i, "BDR_SAMT");
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 13);

        		sRECORD_7 = this.dsTA_VAT112_D.getColumn(i, "BDR_VAMT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 13);

        		sRECORD_8 = this.dsTA_VAT112_D.getColumn(i, "CUST_NM");
        		sRECORD_8 = this.fn_CharacterBlank(30, sRECORD_8);

        		sRECORD_9 = this.dsTA_VAT112_D.getColumn(i, "CUST_MASTER");
        		sRECORD_9 = this.fn_CharacterBlank(30, sRECORD_9);

        		sRECORD_10 = this.dsTA_VAT112_D.getColumn(i, "CUST_NO");
        		sRECORD_10 = this.fn_CharacterBlank(13, sRECORD_10);

        		sRECORD_11 = this.dsTA_VAT112_D.getColumn(i, "BDR_REMARK");
        		sRECORD_11 = this.fn_CharacterBlank(30, sRECORD_11);

        		sRECORD_12 = "";
        		sRECORD_12 = this.fn_CharacterBlank(46, sRECORD_12);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        	// UnFilter(dsTA_VAT112_D);
        	this.dsTA_VAT112_D.filter("");
        }

        /*---------------------------------------+
         |  대손세액공제(변제)신고서 작성(변제)! |
         +--------------------------------------*/
        this.fn_V112_Detail2 = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8 = "", sRECORD_9 = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "";

        	this.dsTA_VAT112_D.filter("BDR_TYPECD == 2");

        	for (var i = 0; i < this.dsTA_VAT112_D.getRowCount(); i++) {
        		sRECORD_1 = "17";

        		sRECORD_2 = "I102800";

        		sRECORD_3 = "02";
        		sRECORD_3 = this.fn_CharacterBlank(2, sRECORD_3);

        		sRECORD_4 = i + 1;
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 6);

        		sRECORD_5 = this.fnc_Trim(this.dsTA_VAT112_D.getColumn(i, "BDR_YMD"));
        		sRECORD_5 = this.fn_CharacterBlank(8, sRECORD_5);

        		sRECORD_6 = this.dsTA_VAT112_D.getColumn(i, "BDR_SAMT");
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 13);

        		sRECORD_7 = this.dsTA_VAT112_D.getColumn(i, "BDR_VAMT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 13);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT112_D.getColumn(i, "CUST_NM"));
        		sRECORD_8 = this.fn_CharacterBlank(30, sRECORD_8);

        		sRECORD_9 = this.fnc_Trim(this.dsTA_VAT112_D.getColumn(i, "CUST_MASTER"));
        		sRECORD_9 = this.fn_CharacterBlank(30, sRECORD_9);

        		sRECORD_10 = this.fnc_Trim(this.dsTA_VAT112_D.getColumn(i, "CUST_NO"));
        		sRECORD_10 = this.fn_CharacterBlank(13, sRECORD_10);

        		sRECORD_11 = this.fnc_Trim(this.dsTA_VAT112_D.getColumn(i, "BDR_REMARK"));
        		sRECORD_11 = this.fn_CharacterBlank(30, sRECORD_11);

        		sRECORD_12 = "";
        		sRECORD_12 = this.fn_CharacterBlank(46, sRECORD_12);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        	// UnFilter(dsTA_VAT112_D);
        	this.dsTA_VAT112_D.filter("");
        }

        /*----------------------------------------------------+
         |  사업장별 부가가치세과세표준및납부세액 작성!  |
         +-----------------------------------------------------*/
        this.fn_V166_Header = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "";

        	if (this.dsTA_VAT166_H.getRowCount() > 0) {
        		sRECORD_1 = "17";

        		sRECORD_2 = "I104500";

        		sRECORD_3 = this.dsTA_VAT166_D.getSum("SALBIL_SAMT");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 15);

        		sRECORD_4 = this.dsTA_VAT166_D.getSum("SALBIL_VAMT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 15);

        		sRECORD_5 = nexacro.toNumber(this.dsTA_VAT166_D.getSum("ZERBIL_SAMT"), 0);
        		sRECORD_5 += nexacro.toNumber(this.dsTA_VAT166_D.getSum("ZERETC_SAMT"), 0);
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 15);

        		sRECORD_6 = 0;
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 15);

        		sRECORD_7 = this.dsTA_VAT166_D.getSum("PURBIL_SAMT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 15);

        		sRECORD_8 = this.dsTA_VAT166_D.getSum("PURBIL_VAMT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 15);

        		sRECORD_9 = this.dsTA_VAT166_D.getSum("AGENDA_SAMT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 15);

        		sRECORD_10 = this.dsTA_VAT166_D.getSum("AGENDA_VAMT");
        		sRECORD_10 = this.fn_LeptPad_2(sRECORD_10, "0", 15);

        		sRECORD_11 = this.dsTA_VAT166_D.getSum("ADDTOT_VAMT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 15);

        		sRECORD_12 = this.dsTA_VAT166_D.getSum("ETCBIL_VAMT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 15);

        		sRECORD_13 = this.dsTA_VAT166_D.getSum("RETURN_VAMT");
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 15);

        		sRECORD_14 = 0;
        		sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 15);

        		sRECORD_15 = 0;
        		sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 15);

        		sRECORD_16 = "";
        		sRECORD_16 = this.fn_CharacterBlank(96, sRECORD_16);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        this.fn_V166_Detail = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "", sRECORD_17 = "", sRECORD_18 = "";

        	for (var i = 0; i < this.dsTA_VAT166_D.getRowCount(); i++) {
        		sRECORD_1 = "18";

        		sRECORD_2 = "I104500";

        		sRECORD_3 = this.dsTA_VAT166_D.getColumn(i, "UNITBRA_NO");
        		sRECORD_3 = this.fn_CharacterBlank(10, sRECORD_3);

        		sRECORD_4 = this.dsTA_VAT166_D.getColumn(i, "UNITBRA_ADDR");
        		sRECORD_4 = this.fn_CharacterBlank(70, sRECORD_4);

        		sRECORD_5 = this.dsTA_VAT166_D.getColumn(i, "SALBIL_SAMT");
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 15);

        		sRECORD_6 = this.dsTA_VAT166_D.getColumn(i, "SALBIL_VAMT");
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 13);

        		sRECORD_7 = nexacro.toNumber(this.dsTA_VAT166_D.getColumn(i, "ZERBIL_SAMT"), 0);
        		sRECORD_7 += nexacro.toNumber(this.dsTA_VAT166_D.getColumn(i, "ZERETC_SAMT"), 0);
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 15);

        		sRECORD_8 = 0;
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 13);

        		sRECORD_9 = this.dsTA_VAT166_D.getColumn(i, "PURBIL_SAMT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 15);

        		sRECORD_10 = this.dsTA_VAT166_D.getColumn(i, "PURBIL_VAMT");
        		sRECORD_10 = this.fn_LeptPad_2(sRECORD_10, "0", 13);

        		sRECORD_11 = this.dsTA_VAT166_D.getColumn(i, "AGENDA_SAMT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 15);

        		sRECORD_12 = this.dsTA_VAT166_D.getColumn(i, "AGENDA_VAMT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 13);

        		sRECORD_13 = this.dsTA_VAT166_D.getColumn(i, "ADDTOT_VAMT");
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);

        		sRECORD_14 = this.dsTA_VAT166_D.getColumn(i, "ETCBIL_VAMT");
        		sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 15);

        		sRECORD_15 = this.dsTA_VAT166_D.getColumn(i, "RETURN_VAMT");
        		sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 15);

        		sRECORD_16 = 0;
        		sRECORD_16 = this.fn_LeptPad_2(sRECORD_16, "0", 15);

        		sRECORD_17 = 0;
        		sRECORD_17 = this.fn_LeptPad_2(sRECORD_17, "0", 15);

        		sRECORD_18 = "";
        		sRECORD_18 = this.fn_CharacterBlank(26, sRECORD_18);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16 + sRECORD_17 + sRECORD_18;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*-------------------------------------+
         |  건물등감가상각자산취득명세서 작성! |
         +------------------------------------*/
        this.fn_V149_Header = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "", sRECORD_17 = "", sRECORD_18 = "";

        	if (this.dsTA_VAT149_H.getRowCount() > 0) {
        		sRECORD_1 = "17";

        		sRECORD_2 = "I103800";

        		this.dsTA_VAT149_H.filter("ASSETS_TYPECD == 5");
        		sRECORD_3 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_CCNT");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 11);

        		sRECORD_4 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_SAMT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 13);

        		sRECORD_5 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_VAMT");
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 13);
        		// UnFilter(dsTA_VAT149_H);
        		this.dsTA_VAT149_H.filter("");

        		this.dsTA_VAT149_H.filter("ASSETS_TYPECD == 6");
        		sRECORD_6 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_CCNT");
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 11);

        		sRECORD_7 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_SAMT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 13);

        		sRECORD_8 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_VAMT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 13);
        		// UnFilter(dsTA_VAT149_H);
        		this.dsTA_VAT149_H.filter("");

        		this.dsTA_VAT149_H.filter("ASSETS_TYPECD == 7");
        		sRECORD_9 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_CCNT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 11);

        		sRECORD_10 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_SAMT");
        		sRECORD_10 = this.fn_LeptPad_2(sRECORD_10, "0", 13);

        		sRECORD_11 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_VAMT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 13);
        		// UnFilter(dsTA_VAT149_H);
        		this.dsTA_VAT149_H.filter("");

        		this.dsTA_VAT149_H.filter("ASSETS_TYPECD == 8");
        		sRECORD_12 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_CCNT");
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 11);

        		sRECORD_13 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_SAMT");
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);

        		sRECORD_14 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_VAMT");
        		sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 13);
        		// UnFilter(dsTA_VAT149_H);
        		this.dsTA_VAT149_H.filter("");

        		this.dsTA_VAT149_H.filter("ASSETS_TYPECD == 9");
        		sRECORD_15 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_CCNT");
        		sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 11);

        		sRECORD_16 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_SAMT");
        		sRECORD_16 = this.fn_LeptPad_2(sRECORD_16, "0", 13);

        		sRECORD_17 = this.dsTA_VAT149_H.getColumn(0, "ASSETS_VAMT");
        		sRECORD_17 = this.fn_LeptPad_2(sRECORD_17, "0", 13);
        		// UnFilter(dsTA_VAT149_H);
        		this.dsTA_VAT149_H.filter("");

        		sRECORD_18 = "";
        		sRECORD_18 = this.fn_CharacterBlank(6, sRECORD_18);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16 + sRECORD_17 + sRECORD_18;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*------------------------------------------------+
         |  전자세금계산서 발급세액공제 신고서 작성!  |
         +-------------------------------------------------*/
        this.fn_V171_Header = function () {
        	var sRECORD_1 = "", sRECORD_2 = "", sRECORD_3 = "", sRECORD_4 = "", sRECORD_5 = "";
        	var sRECORD_6 = "", sRECORD_7 = "", sRECORD_8 = "";

        	if (this.dsTA_VAT171_H.getRowCount() > 0) {
        		sRECORD_1 = "17";

        		sRECORD_2 = "I103100";

        		sRECORD_3 = this.dsTA_VAT171_H.getColumn(0, "EBILL_CCNT");
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 7);

        		sRECORD_4 = this.dsTA_VAT171_H.getColumn(0, "CUREXC_VAMT");
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 13);

        		sRECORD_5 = this.dsTA_VAT171_H.getColumn(0, "EXCEPT_VAMT");
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 13);

        		sRECORD_6 = this.dsTA_VAT171_H.getColumn(0, "PREEXC_VAMT");
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 13);

        		sRECORD_7 = this.dsTA_VAT171_H.getColumn(0, "LIMIT_VAMT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 13);

        		sRECORD_8 = "";
        		sRECORD_8 = this.fn_CharacterBlank(32, sRECORD_8);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*---------------------------------+
         |  부동산임대공급가액 명세서 작성! |
         +--------------------------------*/
        this.fn_V181_Header = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4 = "", sRECORD_5  = 0;
        	var sRECORD_6  = 0,  sRECORD_7  = 0,  sRECORD_8  = 0,  sRECORD_9 = 0,  sRECORD_10 = "";
        	var sRECORD_11 = 0,  sRECORD_12 = "", sRECORD_13 = "";

        	if (this.dsTA_VAT181_H.getRowCount() > 0) {
        		sRECORD_1 = "17";

        		sRECORD_2 = "I103600";

        		sRECORD_3 = "000001";

        		sRECORD_4 = this.fnc_Trim(this.dsTA_VAT181_H.getColumn(0, "CORP_LOCATION"));
        		sRECORD_4 = this.fn_CharacterBlank(70, sRECORD_4);

        		sRECORD_5 = this.dsTA_VAT181_H.getColumn(0, "DEPO_SAMT");
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 15);

        		sRECORD_6 = this.dsTA_VAT181_H.getColumn(0, "MONR_SAMT");
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 15);

        		sRECORD_7 = this.dsTA_VAT181_H.getColumn(0, "TSUM_SAMT");
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 15);

        		sRECORD_8 = this.dsTA_VAT181_H.getColumn(0, "DEPO_RAMT");
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 15);

        		sRECORD_9 = this.dsTA_VAT181_H.getColumn(0, "TMON_SAMT");
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 15);

        		sRECORD_10 = this.fnc_Trim(this.dsTA_VAT181_H.getColumn(0, "CORP_NO"));
        		sRECORD_10 = this.fn_CharacterBlank(10, sRECORD_10);

        		sRECORD_11 = this.dsTA_VAT181_H.getColumn(0, "IMDE_CONT");
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 6);

        		sRECORD_12 = this.fnc_Trim(this.dsTA_VAT181_H.getColumn(0, "CORP_JONG"));
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 4);

        		sRECORD_13 = "";
        		sRECORD_13 = this.fn_CharacterBlank(70, sRECORD_13);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        this.fn_V181_Detail = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = "", sRECORD_4  = "", sRECORD_5  = "";
        	var sRECORD_6  = "", sRECORD_7  = "", sRECORD_8  = "", sRECORD_9  = "", sRECORD_10 = "";
        	var sRECORD_11 = "", sRECORD_12 = "", sRECORD_13 = "", sRECORD_14 = "", sRECORD_15 = "";
        	var sRECORD_16 = "", sRECORD_17 = "", sRECORD_18 = "", sRECORD_19 = "", sRECORD_20 = "";

        	for (var i = 0; i < this.dsTA_VAT181_D.getRowCount(); i++) {
        		sRECORD_1 = "18";

        		sRECORD_2 = "I103600";

        		sRECORD_3 = "000001";

        		sRECORD_4 = this.fnc_Trim(this.dsTA_VAT181_D.getColumn(i, "SEQU_NUMB"));
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 6);

        		sRECORD_5 = this.fnc_Trim(this.dsTA_VAT181_D.getColumn(0, "CORP_FQTY"));
        		sRECORD_5 = this.fn_CharacterBlank(10, sRECORD_5);

        		sRECORD_6 = this.fnc_Trim(this.dsTA_VAT181_D.getColumn(0, "CORP_DONG"));
        		sRECORD_6 = this.fn_CharacterBlank(30, sRECORD_6);

        		sRECORD_7 = this.fnc_Trim(this.dsTA_VAT181_D.getColumn(i, "CORP_HOSU"));
        		sRECORD_7 = this.fn_CharacterBlank(10, sRECORD_7);

        		sRECORD_8 = this.fnc_Trim(this.dsTA_VAT181_D.getColumn(i, "CORP_AREA"));
        		sRECORD_8 = this.fn_CharacterBlank(10, sRECORD_8);

        		sRECORD_9 = this.fnc_Trim(this.dsTA_VAT181_D.getColumn(i, "BIZ_NO"));//"CORP_NM"));
        		sRECORD_9 = this.fn_CharacterBlank(30, sRECORD_9);

        		sRECORD_10 = this.fnc_Trim(this.dsTA_VAT181_D.getColumn(i, "CORP_NO"));
        		sRECORD_10 = this.fn_CharacterBlank(13, sRECORD_10);

        		sRECORD_11 = this.fnc_Trim(this.dsTA_VAT181_D.getColumn(i, "CORP_IPJU"));
        		sRECORD_11 = this.fn_CharacterBlank(8, sRECORD_11);

        		sRECORD_12 = this.fnc_Trim(this.dsTA_VAT181_D.getColumn(i, "CORP_CLOS"));
        		sRECORD_12 = this.fn_CharacterBlank(8, sRECORD_12);

        		sRECORD_13 = this.dsTA_VAT181_D.getColumn(i, "DEPO_SAMT");
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 13);

        		sRECORD_14 = this.dsTA_VAT181_D.getColumn(i, "MONR_SAMT");
        		sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 13);

        		sRECORD_15 = this.dsTA_VAT181_D.getColumn(i, "TSUM_SAMT");
        		sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 13);

        		sRECORD_16 = this.dsTA_VAT181_D.getColumn(i, "DEPO_RAMT");
        		sRECORD_16 = this.fn_LeptPad_2(sRECORD_16, "0", 13);

        		sRECORD_17 = this.dsTA_VAT181_D.getColumn(i, "TMON_SAMT");
        		sRECORD_17 = this.fn_LeptPad_2(sRECORD_17, "0", 13);

        		sRECORD_18 = this.fnc_Trim(this.dsTA_VAT181_H.getColumn(0, "CORP_JONG"));
        		sRECORD_18 = this.fn_LeptPad_2(sRECORD_18, "0", 4);

        		sRECORD_19 = this.fnc_Trim(this.dsTA_VAT181_D.getColumn(i, "CORP_TRAN"));
        		sRECORD_19 = this.fn_CharacterBlank(8, sRECORD_19);

        		sRECORD_20 = "";
        		sRECORD_20 = this.fn_CharacterBlank(33, sRECORD_20);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16 + sRECORD_17 + sRECORD_18 + sRECORD_19 + sRECORD_20;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
        }

        /*---------------------------------+
         |  영세율매출명세서 작성! |
         +--------------------------------*/
        this.fn_V177_Header = function () {
        	var sRECORD_1  = "", sRECORD_2  = "", sRECORD_3  = 0, sRECORD_4  = 0, sRECORD_5  = 0;
        	var sRECORD_6  = 0,  sRECORD_7  = 0,  sRECORD_8  = 0, sRECORD_9  = 0, sRECORD_10 = 0;
        	var sRECORD_11 = 0,  sRECORD_12 = 0,  sRECORD_13 = 0, sRECORD_14 = 0, sRECORD_15 = 0;
        	var sRECORD_16 = 0,  sRECORD_17 = 0,  sRECORD_18 = 0, sRECORD_19 = 0, sRECORD_20 = 0;
        	var sRECORD_21 = 0,  sRECORD_22 = 0,  sRECORD_23 = 0, sRECORD_24 = 0, sRECORD_25 = 0;
        	var sRECORD_26 = 0,  sRECORD_27 = 0,  sRECORD_28 = 0, sRECORD_29 = 0, sRECORD_30 = 0;
        	var sRECORD_31 = "";

        	if (this.dsTA_VAT177_H.getRowCount() > 0) {
        		sRECORD_1 = "17";

        		sRECORD_2 = "I104000";

        		sRECORD_3 = this.dsTA_VAT177_H.getColumn(0, "DIRECT_EXPORT"); //직접수출
        		sRECORD_3 = this.fn_LeptPad_2(sRECORD_3, "0", 15);

        		sRECORD_4 = this.dsTA_VAT177_H.getColumn(0, "CONSIGNMENT_EXPORT"); //중계무역ㆍ위탁판매ㆍ외국인도 또는 위탁가공무역 방식의 수출
        		sRECORD_4 = this.fn_LeptPad_2(sRECORD_4, "0", 15);

        		sRECORD_5 = this.dsTA_VAT177_H.getColumn(0, "APPROVAL_GOODS"); //내국신용장ㆍ구매확인서에 의하여 공급하는 재화
        		sRECORD_5 = this.fn_LeptPad_2(sRECORD_5, "0", 15);

        		sRECORD_6 = this.dsTA_VAT177_H.getColumn(0, "CARRING_GOODS"); //한국국제협력단 및 한국국제보건의료재단에 공급하는 해외반출용 재화
        		sRECORD_6 = this.fn_LeptPad_2(sRECORD_6, "0", 15);

        		sRECORD_7 = this.dsTA_VAT177_H.getColumn(0, "PROCESSING_GOODS"); //수탁가공무역 수출용으로 공급하는 재화
        		sRECORD_7 = this.fn_LeptPad_2(sRECORD_7, "0", 15);

        		sRECORD_8 = this.dsTA_VAT177_H.getColumn(0, "FOREIGN_SERVICE"); //국외에서 제공하는 용역
        		sRECORD_8 = this.fn_LeptPad_2(sRECORD_8, "0", 15);

        		sRECORD_9 = this.dsTA_VAT177_H.getColumn(0, "PASSENGER_SERVICE"); //선박ㆍ항공기에 의한 외국항행용역
        		sRECORD_9 = this.fn_LeptPad_2(sRECORD_9, "0", 15);

        		sRECORD_10 = this.dsTA_VAT177_H.getColumn(0, "MULTIMODAL_SERVICE"); //국제복합운송계약에 의한 외국항행용역
        		sRECORD_10 = this.fn_LeptPad_2(sRECORD_10, "0", 15);

        		sRECORD_11 = this.dsTA_VAT177_H.getColumn(0, "CORPORATION_SERVICE"); //국내에서 비거주자ㆍ외국법인에게 공급되는 재화 또는 용역
        		sRECORD_11 = this.fn_LeptPad_2(sRECORD_11, "0", 15);

        		sRECORD_12 = this.dsTA_VAT177_H.getColumn(0, "PROCESSING_SERVICE"); //수출재화임가공용역
        		sRECORD_12 = this.fn_LeptPad_2(sRECORD_12, "0", 15);

        		sRECORD_13 = this.dsTA_VAT177_H.getColumn(0, "PASSENGER_GOODS"); //외국항행 선박ㆍ항공기 등에 공급하는 재화 또는 용역
        		sRECORD_13 = this.fn_LeptPad_2(sRECORD_13, "0", 15);

        		sRECORD_14 = this.dsTA_VAT177_H.getColumn(0, "UN_GOODS"); //국내 주재 외교공관, 영사기관, 국제연합과 이에 준하는 국제기구, 국제연합군 또는 미국군에게 공급하는 재화 또는 용역
        		sRECORD_14 = this.fn_LeptPad_2(sRECORD_14, "0", 15);

        		sRECORD_15 = this.dsTA_VAT177_H.getColumn(0, "TOURISM_SOUVENIR"); //관광진흥법에 따른 일반여행업자 또는 외국인전용 관광기념품 판매업자가 외국인관광객에게 공급하는 관광알선용역 또는 관광기념품
        		sRECORD_15 = this.fn_LeptPad_2(sRECORD_15, "0", 15);

        		sRECORD_16 = this.dsTA_VAT177_H.getColumn(0, "FOREIGN_GOODS"); //외국인전용판매장 또는 주한외국군인 등의 전용 유흥음식점에서 공급하는 재화 또는 용역
        		sRECORD_16 = this.fn_LeptPad_2(sRECORD_16, "0", 15);

        		sRECORD_17 = this.dsTA_VAT177_H.getColumn(0, "DIPLOMAT_GOODS"); //외교관 등에게 공급하는 재화 또는 용역
        		sRECORD_17 = this.fn_LeptPad_2(sRECORD_17, "0", 15);

        		sRECORD_18 = this.dsTA_VAT177_H.getColumn(0, "PATIENT_SERVICE"); //외국인환자 유치용역
        		sRECORD_18 = this.fn_LeptPad_2(sRECORD_18, "0", 15);

        		sRECORD_19 = this.dsTA_VAT177_H.getColumn(0, "VAT_SAMT"); //부가가치세법에 따른 영세율 적용 공급실적 합계
        		sRECORD_19 = this.fn_LeptPad_2(sRECORD_19, "0", 15);

        		sRECORD_20 = this.dsTA_VAT177_H.getColumn(0, "CORPS_PETROLEUM"); //방위산업물자 및 비상대비 자원관리
        		sRECORD_20 = this.fn_LeptPad_2(sRECORD_20, "0", 15);

        		sRECORD_21 = this.dsTA_VAT177_H.getColumn(0, "RAILWAY_CONSTUCTION"); //도시철도건설용역
        		sRECORD_21 = this.fn_LeptPad_2(sRECORD_21, "0", 15);

        		sRECORD_22 = this.dsTA_VAT177_H.getColumn(0, "COUNTRY_INFRASTRUCTURE"); //국가ㆍ지방자치단체에 공급하는 사회기반시설 등
        		sRECORD_22 = this.fn_LeptPad_2(sRECORD_22, "0", 15);

        		sRECORD_23 = this.dsTA_VAT177_H.getColumn(0, "DISABLED_PERSON"); //장애인용 보장구 및 장애인용 정보통신기기 등
        		sRECORD_23 = this.fn_LeptPad_2(sRECORD_23, "0", 15);

        		sRECORD_24 = this.dsTA_VAT177_H.getColumn(0, "FARMER_EQUIPMENT"); //농민 또는 임업 종사자에게 공급하는 농축임업용 기자재
        		sRECORD_24 = this.fn_LeptPad_2(sRECORD_24, "0", 15);

        		sRECORD_25 = this.dsTA_VAT177_H.getColumn(0, "TOURIST_GOODS"); //외국인관광객 등에게 공급하는 재화
        		sRECORD_25 = this.fn_LeptPad_2(sRECORD_25, "0", 15);

        		sRECORD_26 = this.dsTA_VAT177_H.getColumn(0, "JEJU_GOODS"); //제주특별자치도 면세품판매장에서 판매하거나 제주특별자치도 면세품판매장에 공급하는 물품
        		sRECORD_26 = this.fn_LeptPad_2(sRECORD_26, "0", 15);

        		sRECORD_27 = this.dsTA_VAT177_H.getColumn(0, "SPECIAL_SAMT"); //조세특례제한법 및 그 밖의 법률에 따른 영세율 적용 공급실적 합계
        		sRECORD_27 = this.fn_LeptPad_2(sRECORD_27, "0", 15);

        		sRECORD_28 = this.dsTA_VAT177_H.getColumn(0, "SUM_SAMT"); //영세율 적용 공급실적 총 합계
        		sRECORD_28 = this.fn_LeptPad_2(sRECORD_28, "0", 15);

        		sRECORD_29 = 0; //군부대공급석유류
        		sRECORD_29 = this.fn_LeptPad_2(sRECORD_29, "0", 15);

        		sRECORD_30 = 0; //어민에게공급하는어업용기자재
        		sRECORD_30 = this.fn_LeptPad_2(sRECORD_30, "0", 15);

        		sRECORD_31 = "";
        		sRECORD_31 = this.fn_CharacterBlank(21, sRECORD_31);

        		// 결과 변수
        		var sRECORD = "";
        		sRECORD += sRECORD_1 + sRECORD_2 + sRECORD_3 + sRECORD_4 + sRECORD_5;
        		sRECORD += sRECORD_6 + sRECORD_7 + sRECORD_8 + sRECORD_9 + sRECORD_10;
        		sRECORD += sRECORD_11 + sRECORD_12 + sRECORD_13 + sRECORD_14 + sRECORD_15;
        		sRECORD += sRECORD_16 + sRECORD_17 + sRECORD_18 + sRECORD_19 + sRECORD_20;
        		sRECORD += sRECORD_21 + sRECORD_22 + sRECORD_23 + sRECORD_24 + sRECORD_25;
        		sRECORD += sRECORD_26 + sRECORD_27 + sRECORD_28 + sRECORD_29 + sRECORD_30 + sRECORD_31;

        		// TEXTAREA에 엔터키
        		this.sFILESAVE += String.fromCharCode(10);

        		// TEXTAREA에 값 저장
        		this.sFILESAVE += sRECORD;
        	}
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

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
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

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "연도", this.calSHRVAT_YYYY);
        	}

        	return true;

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRVAT_YYYY.value, 0, 4))); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기

        	} else if (sKind == "PROC00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRVAT_YYYY.value, 0, 4))); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " FILE_NAME=" 		+ this.fnc_Quote(this.sSERVERDATE);
        		sReturnString += " FILE_FILTER=" 	+ this.fnc_Quote(".101");
        		sReturnString += " FILE_CONTENT=" 	+ this.fnc_Quote(this.sFILESAVE);
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
        		this.fnc_Message("TMM018", this.dsTA_VAT101_H1.rowcount); //정상 종료 메세지
        		this.cmbSHRACCT_GUBN.setFocus();

        	} else if (sMethodName == "SAVE00") {
        		this.fn_ExcelFileDown();

        	} else if (sMethodName == "GetBranch") {
        		this.cmbSHRACCT_GUBN.set_index(0);

        	} else if (sMethodName == "GetCommCode") {
        	    var arrParam = new Array();
        			arrParam[0] 	= "COMBO,cmbBANK_CODE,dsBANK_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);		
        	}

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.chkVATX_FILE_ALL_onchanged = function(obj,e) {
        	
        	if (this.chkVATX_FILE_ALL.value == "1") {
        		this.chkVATX_FILE1.set_value("1");
        		this.chkVATX_FILE2.set_value("1");
        		this.chkVATX_FILE3.set_value("1");
        		this.chkVATX_FILE4.set_value("1");
        		this.chkVATX_FILE5.set_value("1");
        		this.chkVATX_FILE6.set_value("1");
        		this.chkVATX_FILE7.set_value("1");
        		this.chkVATX_FILE8.set_value("1");
        		this.chkVATX_FILE9.set_value("1");
        		this.chkVATX_FILE10.set_value("1");
        		this.chkVATX_FILE11.set_value("1");
        		this.chkVATX_FILE12.set_value("1");
        		this.chkVATX_FILE13.set_value("1");
        		
        		this.chkVATX_FILE15.set_value("1");
        		this.chkVATX_FILE16.set_value("1");
        	} else {
        		this.chkVATX_FILE1.set_value("0");
        		this.chkVATX_FILE2.set_value("0");
        		this.chkVATX_FILE3.set_value("0");
        		this.chkVATX_FILE4.set_value("0");
        		this.chkVATX_FILE5.set_value("0");
        		this.chkVATX_FILE6.set_value("0");
        		this.chkVATX_FILE7.set_value("0");
        		this.chkVATX_FILE8.set_value("0");
        		this.chkVATX_FILE9.set_value("0");
        		this.chkVATX_FILE10.set_value("0");
        		this.chkVATX_FILE11.set_value("0");
        		this.chkVATX_FILE12.set_value("0");
        		this.chkVATX_FILE13.set_value("0");
        		
        		this.chkVATX_FILE15.set_value("0");
        		this.chkVATX_FILE16.set_value("0");
        	}
        }

        /*--------------------------------------------------------+
         |  캐릭터의 허용자릿수의 나머지 부분을 "" BLANK 로 치환.! |
         +---------------------------------------------------------*/
        this.fn_CharacterBlank = function (iCnt,sValue) {
        	var sBlankLength 	= "";
        	var sTempValue 		= "";

        	// 20071015. 패치 - 허용자릿수보다 길이가 클 경우 처리
        	if (this.fnc_LengthB(sValue) > iCnt) {
                if (this.fnc_Length(this.fnc_Trim(sValue)) == 0) sValue = "A";
        		sTempValue = this.fnc_MidB(sValue, 0, iCnt);
        	} else {
        		sTempValue = sValue;
        	}
        	
        	
        	for (var i = 0; i < (iCnt - this.fnc_LengthB(sTempValue)); i++) {
        		sBlankLength = sBlankLength + " ";
        	}

        	return sTempValue + sBlankLength;

        }

        /*-----------------------------------------------------------------+
         |  금액 또는 세액에 음수가 발생하는 경우 "-" 부호 치환함수!  |
         +------------------------------------------------------------------*/
        this.fn_LeptPad = function (obj1,obj2,obj3) {
        	var sBlankZero = "";

        	// 음수일 경우
        	if (obj1 < 0) {
        		// "-" 기호를 없앤다
        		obj1 = -1 * nexacro.toNumber(obj1);

        		switch (this.fnc_Right(obj1, 1)) {
        			case "0":
        				obj1 = this.fnc_Left(obj1, this.fnc_Length(this.fnc_Quote(obj1)) - 3) + "}"; break;
        			case "1":
        				obj1 = this.fnc_Left(obj1, this.fnc_Length(this.fnc_Quote(obj1)) - 3) + "J"; break;
        			case "2":
        				obj1 = this.fnc_Left(obj1, this.fnc_Length(this.fnc_Quote(obj1)) - 3) + "K"; break;
        			case "3":
        				obj1 = this.fnc_Left(obj1, this.fnc_Length(this.fnc_Quote(obj1)) - 3) + "L"; break;
        			case "4":
        				obj1 = this.fnc_Left(obj1, this.fnc_Length(this.fnc_Quote(obj1)) - 3) + "M"; break;
        			case "5":
        				obj1 = this.fnc_Left(obj1, this.fnc_Length(this.fnc_Quote(obj1)) - 3) + "N"; break;
        			case "6":
        				obj1 = this.fnc_Left(obj1, this.fnc_Length(this.fnc_Quote(obj1)) - 3) + "O"; break;
        			case "7":
        				obj1 = this.fnc_Left(obj1, this.fnc_Length(this.fnc_Quote(obj1)) - 3) + "P"; break;
        			case "8":
        				obj1 = this.fnc_Left(obj1, this.fnc_Length(this.fnc_Quote(obj1)) - 3) + "Q"; break;
        			case "9":
        				obj1 = this.fnc_Left(obj1, this.fnc_Length(this.fnc_Quote(obj1)) - 3) + "R"; break;
        		}
        	}

        	obj1 = this.fnc_LPad(obj1, obj2, obj3);

        	return obj1;

        }

        /*----------------------------------------------------------------------------+
         |  금액 또는 세액에 음수가 발생하는 경우 "-" 부호 앞으로 땡기는 함수!  |
         +-----------------------------------------------------------------------------*/
        this.fn_LeptPad_2 = function (obj1,obj2,obj3) {
        	obj1 = this.fnc_Trim(obj1);

        	var sBlankZero = "";

        	// 음수일 경우
        	if (obj1 < 0) {
        		// "-" 기호를 없앤다
        		// obj1 = fnc_SubStr(obj1, 1, length(obj1) -1);
        		obj1 = -1 * nexacro.toNumber(obj1);
        		// (length -1)까지 0으로 채운다
        		obj1 = "-" + this.fnc_LPad(obj1, "0", obj3 - 1);
        	} else {
        		// 음수가 아닐 경우 기존...
        		obj1 = this.fnc_LPad(obj1, obj2, obj3);
        	}

        	return obj1;
        }

        /*--------------------------------------------------------------+
         |  소수점 자리수 포맷 형식으로 변경! (1231.12, "0", 11, 6)  |
         +---------------------------------------------------------------*/
        this.fn_LeptPad_3 = function (obj1,obj2,obj3,obj4) {
        	obj1 = this.fnc_Trim(obj1);

        	var sBlankZeroL = "";
        	var sBlankZeroR = "";
        	var str = this.fnc_Split(obj1, ".");

        	// 음수일 경우
        	if (obj1 < 0) {
        		obj1 = this.fn_LeptPad_2(obj1, obj2, obj3);
        	}

        	// "0"값을 차이나는 길이만큼 생성한다.
        	for (var i = 0; i < (obj3 - obj4 - this.fnc_Length(str[0])); i++) {
        		sBlankZeroL = sBlankZeroL + obj2;
        	}

        	for (var i = 0; i < (obj4 - this.fnc_Length(str[1])); i++) {
        		sBlankZeroR = sBlankZeroR + obj2;
        	}

        	// "0"값과 실제값을 더해 리턴한다.
        	obj1 = sBlankZeroL + this.fnc_Trim(str[0]) + this.fnc_Trim(str[1]) + sBlankZeroR;

        	return obj1;
        }

        /*----------------------+
         |  파일 저장!           |
         +----------------------*/
        this.fn_FileCreateSave = function () {

        	// 파일생성 전처리가 false 이면 다음처리를 하지않는다.
        	if (!this.PreCreateFile()) return;

        	// 파일생성 처리를 한다.
        	this.ComCreateFile();
        }

        /*-----------------------+
         |  파일생성 전처리 메소드 |
         +-----------------------*/
        this.PreCreateFile = function () {
        	// 해당 Row가 있는지 확인
        	if (this.dsTA_VAT101_H1.getRowCount() < 1) {
        		this.fnc_Message("TMM300", "부가세신고 [전자신고] 할 내용이 없습니다.");
        		return false;
        	}
        	if ( !confirm("전자신고 파일을 생성하시겠습니까?") ) return false;
        	//if (!this.fnc_Message("PAY007")) return false; // 처리 하시겠습니까? 메시지 뿌리기

        	return true;
        	
        }

        /*----------+
         |  파일생성 |
         +----------*/
        this.ComCreateFile = function () {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){

        	return true;

        }

        /*-----------------------------+
         |  전자신고 파일 다운로드 時  |
         +-----------------------------*/
        this.fn_ExcelFileDown = function() {

        	var sPath    = this.sFILE_PATH;  //파일 경로
            var sLogFile = this.sFILE_NAME;  //파일 논리명
            var sPhyFile = this.sFILE_NAME;  //파일 물리명
            
        	this.fnc_FileDownLoad(sPath, sLogFile, sPhyFile);

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VAT177_H.addEventHandler("oncolumnchanged", this.dsTA_VAT177_H_OnColumnChanged, this);
            this.dsTA_VAT101_D2.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.dsTA_VAT101_D3.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.chkVATX_FILE_ALL.addEventHandler("onchanged", this.chkVATX_FILE_ALL_onchanged, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVAT_QUARTER.addEventHandler("onitemchanged", this.cmbVAT_QUARTER_onitemchanged, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTOTA_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit01.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADIT_MAIL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADIT_HAND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBANK_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBANK_ACNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbRETU_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit02.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit03.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit05.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.medPRDE_TAXX.addEventHandler("oneditclick", this.fn_EditFocus, this);
            this.medPRDE_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medADDI_TAXX.addEventHandler("oneditclick", this.fn_EditFocus, this);
            this.medADDI_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSPERMITNUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMC0170.xfdl");
        this.loadPreloadList();
       
    };
}
)();
