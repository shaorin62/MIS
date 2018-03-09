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
                this.set_name("FAMG0270");
                this.set_titletext("부가세전자신고");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,990,800);
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
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BILL_SEQ\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFF_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OFF_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OFF_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"LIQUOR_WCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LIQUOR_SCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DELAYYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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

            obj = new Dataset("dsBANK_CODE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">FC02</Col><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRETU_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RETU_CODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"RETU_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"RETU_CODE\"/><Col id=\"RETU_NAME\"/></Row><Row><Col id=\"RETU_CODE\">1</Col><Col id=\"RETU_NAME\">일반환급</Col></Row><Row><Col id=\"RETU_CODE\">2</Col><Col id=\"RETU_NAME\">영세율 환급</Col></Row><Row><Col id=\"RETU_CODE\">3</Col><Col id=\"RETU_NAME\">시설투자 환급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_CELL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXOFFICE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HOMETAX_ID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_POST\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_H1", this);
            obj.set_keystring("BDR_TYPECD");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_SYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_EYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_CYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_CELL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_EMAIL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LOCATION\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPENM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LINE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_SYMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_TEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AGENT_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REVISION_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_PURPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_PURPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_CRECAS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_CRECAS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXETC_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_ZERBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_ZERETC_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_WILMIS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_WILMIS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_DOUADD_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_DOUADD_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SH_TAXTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_TAXBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ASSETS_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ASSETS_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_WILTOT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_WILTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PURPUB_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PURPUB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ETCBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ETCBIL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PTOTAL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_PTOTAL_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_UNABLE_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_UNABLE_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ADDMIN_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PH_ADDMIN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SP_RETURN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_ETCMIN_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_CREDIT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_CREDIT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_MINTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_WILRET_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_NOTRET_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_PROHIB_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_ADDTOT_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VAT_PAY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"IH_EXCEPT_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"IH_TAXBIL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RH_PROXY_VAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT181_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_LOCATION\" size=\"70\" prop=\"default\" type=\"STRING\"/><Column id=\"SUIP_STDT\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SUIP_EDDT\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SUIP_RATE\" size=\"10\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEPO_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONR_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TSUM_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEPO_RAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TMON_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"IMDE_CONT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CORP_JONG\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"INS_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INS_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT181_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQU_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_DONG\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_FQTY\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_HOSU\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_AREA\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NO\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_IPJU\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_TRAN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_CLOS\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPO_SAMT\" size=\"13\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONR_SAMT\" size=\"13\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TSUM_SAMT\" size=\"13\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEPO_RAMT\" size=\"13\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TMON_SAMT\" size=\"13\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INS_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INS_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT109_H", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ALL_CCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_PCNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ALL_SAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT110_H", this);
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
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDU_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDU_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_VAMT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT101_D3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ADTX_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ADTX_SAMT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ADTXVAMT\" type=\"BIGDECIMAL\" size=\"15\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static30", "absolute", "200", "379", "34", "23", null, null, this);
            obj.set_text("전체");
            obj.style.set_background("transparent");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "14", "130", "60", "23", null, null, this);
            obj.set_text("신고일반");
            obj.style.set_background("transparent");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "14", "153", "120", "23", null, null, this);
            obj.set_text("총괄납부승인번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "506", "153", "100", "23", null, null, this);
            obj.set_text("전자우편");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "750", "153", "100", "23", null, null, this);
            obj.set_text("휴대전화");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "14", "200", "130", "23", null, null, this);
            obj.set_text("국세환급금계좌신고");
            obj.style.set_background("transparent");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", "223", "120", "23", null, null, this);
            obj.set_text("은행");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "258", "223", "100", "23", null, null, this);
            obj.set_text("지점");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "506", "223", "100", "23", null, null, this);
            obj.set_text("계좌번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "750", "223", "100", "23", null, null, this);
            obj.set_text("환급구분");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "14", "270", "80", "23", null, null, this);
            obj.set_text("세무 대리인");
            obj.style.set_background("transparent");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "14", "293", "120", "23", null, null, this);
            obj.set_text("성명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "258", "293", "100", "23", null, null, this);
            obj.set_text("관리번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "506", "293", "100", "23", null, null, this);
            obj.set_text("전화번호 ");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "750", "293", "100", "23", null, null, this);
            obj.set_text("홈택스ID");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "14", "332", "120", "23", null, null, this);
            obj.set_text("가산세액계");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "258", "332", "210", "23", null, null, this);
            obj.set_text("차가감납부할세액(환급받을세액)");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADIT_MAIL", "absolute", "608", "153", "134", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADIT_HAND", "absolute", "852", "153", "128", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("40");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit0", "absolute", "360", "153", "138", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVA_VATBRANCH");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTOTA_NUMB", "absolute", "136", "153", "114", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("7");
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit4", "absolute", "136", "293", "114", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBANK_NAME", "absolute", "360", "223", "138", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("30");
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit6", "absolute", "360", "293", "138", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBANK_ACNT", "absolute", "608", "223", "134", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit8", "absolute", "608", "293", "134", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10", "absolute", "852", "293", "128", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("14");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRETU_GUBN", "absolute", "852", "223", "128", "23", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_codecolumn("RETU_CODE");
            obj.set_datacolumn("RETU_NAME");
            obj.set_innerdataset("dsRETU_GUBN");
            obj.set_taborder("10");
            obj.set_cssclass("styFormItemText");

            obj = new MaskEdit("medPRDE_TAXX", "absolute", "470", "332", "120", "23", null, null, this);
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_enable("false");
            obj.set_taborder("16");
            obj.set_mask("#,###");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medADDI_TAXX", "absolute", "136", "332", "114", "23", null, null, this);
            obj.getSetter("binddataset").set("dsTA_VAT101_H1");
            obj.set_enable("false");
            obj.set_taborder("15");
            obj.set_mask("#,###");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "14", "379", "120", "23", null, null, this);
            obj.set_text("전자신고 대상서식");
            obj.style.set_background("transparent");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "14", "404", "220", "23", null, null, this);
            obj.set_text("부가가치세신고서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "258", "404", "224", "23", null, null, this);
            obj.set_text("매출처별 세금계산서합계표");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "258", "435", "224", "23", null, null, this);
            obj.set_text("신용카드매출전표 수취명세서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "506", "435", "220", "23", null, null, this);
            obj.set_text("신용카드매출전표발행금액등 집계표");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE1", "absolute", "236", "405", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("19");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE6", "absolute", "484", "436", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("24");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE2", "absolute", "484", "405", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("20");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE7", "absolute", "728", "436", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("25");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE_ALL", "absolute", "236", "380", "14", "20", null, null, this);
            obj.set_falsevalue("0");
            obj.set_taborder("18");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "750", "332", "151", "23", null, null, this);
            obj.set_text("사업자단위과세승인번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSPERMITNUM", "absolute", "903", "332", "77", "23", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("7");
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "506", "404", "220", "23", null, null, this);
            obj.set_text("매입처별 세금계산서합계표");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE3", "absolute", "728", "405", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("21");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "258", "466", "224", "23", null, null, this);
            obj.set_text("영세율첨부서류제출명세서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE10", "absolute", "484", "467", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("28");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "750", "466", "214", "23", null, null, this);
            obj.set_text("건물등 감가상각자산 취득명세서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE12", "absolute", "966", "467", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("30");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "506", "466", "220", "23", null, null, this);
            obj.set_text("대손세액공제(변제) 신고서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE11", "absolute", "728", "467", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("29");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "258", "497", "224", "23", null, null, this);
            obj.set_text("전자세금계산서 교부세액 공제신고서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE14", "absolute", "484", "498", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("32");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "14", "497", "220", "23", null, null, this);
            obj.set_text("사업자단위 신고명세서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE13", "absolute", "236", "498", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("31");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE8", "absolute", "966", "436", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("26");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "750", "435", "214", "23", null, null, this);
            obj.set_text("공제받지못할매입세액 명세서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "14", "466", "220", "23", null, null, this);
            obj.set_text("수출실적명세서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE9", "absolute", "236", "467", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("27");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "750", "404", "214", "23", null, null, this);
            obj.set_text("매입처별 계산서합계표 ");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE4", "absolute", "966", "405", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("22");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "14", "435", "220", "23", null, null, this);
            obj.set_text("매출처별 계산서합계표");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE5", "absolute", "236", "436", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("23");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBANK_CODE", "absolute", "136", "223", "114", "23", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTA_VAT101_H2");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("dsBANK_CODE");
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemText");

            obj = new Static("Static9", "absolute", "258", "153", "100", "23", null, null, this);
            obj.set_text("세무서코드");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "506", "497", "220", "23", null, null, this);
            obj.set_text("부동산임대공급가액 명세서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE15", "absolute", "728", "498", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("33");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "750", "497", "214", "23", null, null, this);
            obj.set_text("영세율매출명세서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_FILE16", "absolute", "966", "498", "14", "20", null, null, this);
            obj.getSetter("binddataset").set("dsVAT_REPORT");
            obj.set_falsevalue("0");
            obj.set_taborder("34");
            obj.set_truevalue("1");
            obj.set_value("true");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Shape("Shape1", "absolute", "8", "78", null, "38", "8", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("RoundRect");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "16", "48", "349", "25", null, null, this);
            obj.set_taborder("37");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "48", "456", "25", "8", null, this);
            obj.set_taborder("35");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "8", "492", "22", "8", null, this);
            obj.set_text("재무관리>세무회계>부가세신고>부가세전자신고");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "37", "8", "453", "22", null, null, this);
            obj.set_text("부가세전자신고");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgFormTitle", "absolute", "8", "8", "22", "22", null, null, this);
            obj.set_image("URL('image::imgFormTitle.bmp')");
            obj.set_taborder("36");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.getSetter("transparenthittest").set("false");
            this.addChild(obj.name, obj);

            obj = new Shape("Shape0", "absolute", "8", "37", null, "6", "8", null, this);
            obj.getSetter("type").set("rectangle");
            obj.set_cssclass("Rectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "16", "86", "45", "22", null, null, this);
            obj.set_text("사업장");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBRANCH_CD", "absolute", "63", "86", "200", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static00", "absolute", "271", "86", "30", "22", null, null, this);
            obj.set_text("년도");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calVAT_YYYY", "absolute", "303", "86", "70", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_autoselect("true");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static02", "absolute", "381", "86", "60", "22", null, null, this);
            obj.set_text("분기구분");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormSearchCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "443", "86", "110", "22", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormSearchItem");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 990, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부가세전자신고");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtADIT_MAIL_value","edtADIT_MAIL","value","dsTA_VAT101_H1","CORP_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtADIT_HAND_value","edtADIT_HAND","value","dsTA_VAT101_H1","CORP_CELL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit0_value","Edit0","value","dsVA_VATBRANCH","TAXOFFICE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTOTA_NUMB_value","edtTOTA_NUMB","value","dsTA_VAT101_H2","VAT_TOTPAYNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit4_value","Edit4","value","dsTA_VAT101_H1","AGENT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBANK_NAME_value","edtBANK_NAME","value","dsTA_VAT101_H2","VAT_BANKBRANCH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit6_value","Edit6","value","dsTA_VAT101_H1","AGENT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBANK_ACNT_value","edtBANK_ACNT","value","dsTA_VAT101_H2","VAT_BANKNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit8_value","Edit8","value","dsTA_VAT101_H1","AGENT_TEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit10_value","Edit10","value","dsTA_VAT101_H1","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbRETU_GUBN_value","cmbRETU_GUBN","value","dsTA_VAT101_H2","REFUND_TYPECD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medPRDE_TAXX_value","medPRDE_TAXX","value","dsTA_VAT101_H1","VAT_PAY_VAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medADDI_TAXX_value","medADDI_TAXX","value","dsTA_VAT101_H1","RH_ADDTOT_VAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE1_value","chkVATX_FILE1","value","dsVAT_REPORT","VAT_V101");
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
            obj = new BindItem("chkVATX_FILE14_value","chkVATX_FILE14","value","dsVAT_REPORT","VAT_V171");
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
            obj = new BindItem("cmbBANK_CODE_value","cmbBANK_CODE","value","dsTA_VAT101_H2","VAT_BANKCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE15_value","chkVATX_FILE15","value","dsVAT_REPORT","VAT_V181");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkVATX_FILE16_value","chkVATX_FILE16","value","dsVAT_REPORT","VAT_V177");
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
            this.dsTA_VAT177_H.addEventHandler("oncolumnchanged", this.dsTA_VAT177_H_OnColumnChanged, this);
            this.dsTA_VAT101_D2.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.dsTA_VAT101_D3.addEventHandler("oncolumnchanged", this.ds_OnColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.edtADIT_MAIL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADIT_HAND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit0.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTOTA_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit4.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBANK_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit6.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBANK_ACNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit8.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Edit10.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medPRDE_TAXX.addEventHandler("oneditclick", this.fn_EditFocus, this);
            this.medPRDE_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medADDI_TAXX.addEventHandler("oneditclick", this.fn_EditFocus, this);
            this.medADDI_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkVATX_FILE_ALL.addEventHandler("onclick", this.chkVATX_FILE_ALL_OnClick, this);
            this.edtSPERMITNUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBRANCH_CD.addEventHandler("onitemchanged", this.cmbBRANCH_CD_onitemchanged, this);
            this.calVAT_YYYY.addEventHandler("onspin", this.calVAT_YYYY_onspin, this);
            this.cmbVAT_QUARTER.addEventHandler("onitemchanged", this.cmbVAT_QUARTER_OnChanged, this);

        };

        this.loadIncludeScript("FAMG0270.xfdl");
        this.loadPreloadList();
       
    };
}
)();
