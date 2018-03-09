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
                this.set_name("FAME0013");
                this.set_titletext("거래처정보등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">HR76</Col><Col id=\"DSNAME\">dsSHRDOMEFORE_CD</Col><Col id=\"HEADFLAG\">A</Col><Col id=\"REMARK\">국내외구분</Col></Row><Row><Col id=\"CODEID\">TS10</Col><Col id=\"DSNAME\">dsSHRCDIV_CD</Col><Col id=\"HEADFLAG\">A</Col><Col id=\"REMARK\"/></Row><Row><Col id=\"CODEID\">FA14</Col><Col id=\"DSNAME\">dsSHRDIV_CD</Col><Col id=\"HEADFLAG\">A</Col><Col id=\"REMARK\"/></Row><Row><Col id=\"CODEID\">FA26</Col><Col id=\"DSNAME\">dsSHRCUSTDIV_CD</Col><Col id=\"HEADFLAG\">A</Col><Col id=\"REMARK\"/></Row><Row><Col id=\"CODEID\">FA26</Col><Col id=\"DSNAME\">dsCUSTDIV_CD</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMARK\"/></Row><Row><Col id=\"CODEID\">TO27</Col><Col id=\"DSNAME\">dsPAYM_CODE</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMARK\"/></Row><Row><Col id=\"CODEID\">TS17</Col><Col id=\"DSNAME\">dsACNTDIV_CD</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMARK\"/></Row><Row><Col id=\"CODEID\">FA35</Col><Col id=\"DSNAME\">dsPOST_GUBN</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMARK\">주소구분</Col></Row><Row><Col id=\"DSNAME\">dsDOMEFORE_CD</Col><Col id=\"CODEID\">HR76</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMARK\">국내외구분</Col></Row><Row><Col id=\"DSNAME\">dsAPPRCOND_CD</Col><Col id=\"CODEID\">TS01</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMARK\"/></Row><Row><Col id=\"DSNAME\">dsPRICE_CD</Col><Col id=\"CODEID\">TS02</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMARK\"/></Row><Row><Col id=\"DSNAME\">dsCDIV_CD</Col><Col id=\"CODEID\">TS10</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMARK\">거래처구분</Col></Row><Row><Col id=\"DSNAME\">dsDIV_CD</Col><Col id=\"CODEID\">FA14</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMARK\"/></Row><Row><Col id=\"DSNAME\">dsRELT_GUBN</Col><Col id=\"CODEID\">RELT_GUBN</Col><Col id=\"HEADFLAG\">E</Col><Col id=\"REMARK\">관계사구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRRELT_GUBN</Col><Col id=\"CODEID\">RELT_GUBN</Col><Col id=\"HEADFLAG\">A</Col><Col id=\"REMARK\">관계사구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCOPRDIV_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\"/><Col id=\"SUBNAME\"/><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">사업자</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">2</Col><Col id=\"SUBNAME\">개인</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDOMEFORE_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRDOMEFORE_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMAINACNT_YN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">Y</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">N</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCUSTDIV_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAPPRCOND_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRCUSTDIV_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUSE_YN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\"/><Col id=\"SUBNAME\"/><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">사용</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미사용</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRUSE_YN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\"/><Col id=\"SUBNAME\">전체</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">사용</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"CODDYSNO\"/><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미사용</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRICE_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCDIV_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDIV_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRCDIV_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRDIV_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPAYM_CODE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACNTDIV_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPOST_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTASK_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_CUST", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHOP_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOPABB_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CDIV_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RELT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NATI_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADMINEMP_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADMINEMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MANAPART_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REGS_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COPR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUMSHOP_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BOSS_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COPRT_CONT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COPRJ_CONT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ZIPCODE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR1_TX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR2_TX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TEL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAX_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REPRST_EMAIL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPEN_DT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOSE_DT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MANAPART_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COPRDIV_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNTEMP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNTEMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHANTYPEA_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHANTYPEB_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUSTDIV_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POSITYPEA_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POSITYPEB_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DELIVERYGRP_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHANAREA_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BUSNTYPE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DOMEFORE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_TX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPRCOND_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUMSHOP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PRICE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUMNATI_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUMCUST_CURR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOPVAT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JONGSAE_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYM_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TDIS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOPE_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TBUS_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TASK_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RELT_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"RELT_EDDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_CUSTDIV", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CODD_VALU\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODD_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_CUSTMAN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOP_CD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQ\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MAN_NM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"TEL_NO\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"HP_NO\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"E_MAIL\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SMS_YN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"TAX_YN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ETC_YN\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_CUSTACNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOP_CD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQ\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACNTDIV_CD\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_MANM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"MAINACNT_YN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"REGS_NO\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRELT_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRRELT_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_CUST_TEMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHOP_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOPABB_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CDIV_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RELT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NATI_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADMINEMP_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADMINEMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MANAPART_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REGS_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COPR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUMSHOP_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BOSS_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COPRT_CONT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COPRJ_CONT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ZIPCODE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR1_TX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR2_TX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TEL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAX_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REPRST_EMAIL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPEN_DT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOSE_DT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MANAPART_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COPRDIV_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNTEMP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNTEMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHANTYPEA_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHANTYPEB_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUSTDIV_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POSITYPEA_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POSITYPEB_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DELIVERYGRP_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHANAREA_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BUSNTYPE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DOMEFORE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_TX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPRCOND_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUMSHOP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PRICE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUMNATI_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUMCUST_CURR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOPVAT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JONGSAE_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYM_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TDIS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOPE_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TBUS_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TASK_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RELT_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"RELT_EDDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EXCEL", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_JOINNO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REGS_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOIN_NO\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_CUSTACNT_EMPL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOP_CD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQ\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACNTDIV_CD\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_MANM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"MAINACNT_YN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_CUSTACNT_CUST", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOP_CD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQ\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACNTDIV_CD\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_MANM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"MAINACNT_YN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"REGS_NO\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_CUSTMAN_TEMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SHOP_CD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQ\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MAN_NM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"TEL_NO\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"HP_NO\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"E_MAIL\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SMS_YN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"TAX_YN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ETC_YN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"REGS_NO\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab0", "absolute", "8", null, null, "326", "8", "8", this);
            obj.set_taborder("15");
            obj.set_cssclass("styTabControl");
            obj.set_tabindex("2");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.Tab0);
            obj.set_taborder("65");
            obj.set_text("기본정보");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            obj.style.set_background("transparent");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("Shape04", "absolute", "6", "3", "769", "277", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("42");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Shape1", "absolute", "9", "6", "763", "281", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("41");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "1.18%", "201", null, "25", "24.39%", null, this.Tab0.tab0);
            obj.getSetter("taborder").set("83");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "1.18%", "225", null, "25", "24.39%", null, this.Tab0.tab0);
            obj.getSetter("taborder").set("84");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "1.18%", "249", null, "25", "24.39%", null, this.Tab0.tab0);
            obj.getSetter("taborder").set("85");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "1.18%", "177", null, "25", "24.39%", null, this.Tab0.tab0);
            obj.getSetter("taborder").set("82");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "1.18%", "153", null, "25", "24.39%", null, this.Tab0.tab0);
            obj.getSetter("taborder").set("76");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "1.18%", "81", null, "25", "24.39%", null, this.Tab0.tab0);
            obj.getSetter("taborder").set("60");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "12", "9", "757", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("45");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", "50", null, null, "0", this.Tab0.tab0);
            obj.getSetter("type").set("rectangle");
            obj.style.set_background("transparent");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", null, "-2", "156", "28", "22", null, this.Tab0.tab0);
            obj.set_text("[거래처유형]");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Grid("grdTB_CUSTDIV", "absolute", null, "26", "177", null, "1", "0", this.Tab0.tab0);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTB_CUSTDIV");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("34");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"22\"/><Column size=\"118\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"거래처유형\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:CODD_DESC\"/></Band></Format></Formats>");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "446", "661", "536", "131", null, null, this.Tab0.tab0);
            obj.getSetter("type").set("rectangle");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "496", "661", "486", "131", null, null, this.Tab0.tab0);
            obj.getSetter("type").set("rectangle");
            obj.style.set_background("aquamarine");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stOPEN_DT", "absolute", "12", "201", "92", "25", null, null, this.Tab0.tab0);
            obj.set_text("거래시작일");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtTEL_NO", "absolute", "105", "179", "121", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("21");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Calendar("calOPEN_DT", "absolute", "105", "203", "120", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Static("stSHOP_NM", "absolute", "225", "9", "123", "25", null, null, this.Tab0.tab0);
            obj.set_text("거래처명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stADMINEMP_CD", "absolute", "227", "81", "123", "25", null, null, this.Tab0.tab0);
            obj.set_text("영업담당자");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtSHOP_NM", "absolute", "349", "11", "420", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("30");
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stFAX_NO", "absolute", "227", "177", "124", "25", null, null, this.Tab0.tab0);
            obj.set_text("팩스번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCLOSE_DT", "absolute", "227", "201", "124", "25", null, null, this.Tab0.tab0);
            obj.set_text("거래종료일");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtFAX_NO", "absolute", "352", "179", "141", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("22");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Calendar("calCLOSE_DT", "absolute", "352", "203", "141", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Static("stMANAPART_CD", "absolute", "491", "81", "95", "25", null, null, this.Tab0.tab0);
            obj.set_text("관리부서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stADDR2_TX", "absolute", "227", "153", "124", "25", null, null, this.Tab0.tab0);
            obj.set_text("주소2");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stREPRST_EMAIL", "absolute", "494", "177", "95", "25", null, null, this.Tab0.tab0);
            obj.set_text("대표이메일");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtREPRST_EMAIL", "absolute", "590", "179", "178", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_imemode("english");
            obj.set_maxlength("30");
            obj.set_taborder("23");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtADMINEMP_CD", "absolute", "351", "83", "51", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_taborder("35");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new ImageViewer("imgHelpADMINEMP_NM", "absolute", "403", "83", "22", "21", null, null, this.Tab0.tab0);
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtADMINEMP_NM", "absolute", "426", "83", "64", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtADDR2_TX", "absolute", "352", "155", "416", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("20");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtMANAPART_CD", "absolute", "587", "83", "51", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_taborder("36");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new ImageViewer("imgHelpMANAPART_NM", "absolute", "639", "83", "22", "21", null, null, this.Tab0.tab0);
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtMANAPART_NM", "absolute", "662", "83", "106", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static2", "absolute", "12", "225", "115", "25", null, null, this.Tab0.tab0);
            obj.set_text("부가세신고용 명칭");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtSHOPVAT_NM", "absolute", "128", "227", "169", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("27");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static3", "absolute", "298", "225", "110", "25", null, null, this.Tab0.tab0);
            obj.set_text("종사업장승인번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtJONGSAE_NO", "absolute", "409", "227", "108", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("10");
            obj.set_taborder("28");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbUSE_YN", "absolute", "590", "203", "178", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.getSetter("imemode").set("none");
            obj.set_innerdataset("dsUSE_YN");
            obj.set_taborder("26");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj = new Static("stUSE_TYPE", "absolute", "494", "201", "95", "25", null, null, this.Tab0.tab0);
            obj.set_text("사용여부");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbPOST_GUBN", "absolute", "105", "155", "121", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_enable("false");
            obj.getSetter("imemode").set("none");
            obj.set_innerdataset("dsPOST_GUBN");
            obj.set_taborder("39");
            obj.set_cssclass("styFormItemText");
            obj = new Static("Static11", "absolute", "12", "153", "92", "25", null, null, this.Tab0.tab0);
            obj.set_text("주소구분");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCUST_CODE", "absolute", "12", "9", "91", "25", null, null, this.Tab0.tab0);
            obj.set_text("거래처코드");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stDOMEFORE_CD", "absolute", "12", "81", "92", "25", null, null, this.Tab0.tab0);
            obj.set_text("국내외구분");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbDOMEFORE_CD", "absolute", "105", "83", "121", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.getSetter("imemode").set("none");
            obj.set_innerdataset("dsDOMEFORE_CD");
            obj.set_taborder("9");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj = new Edit("edtCUST_CODE", "absolute", "104", "11", "120", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_maxlength("10");
            obj.set_taborder("0");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stTEL_NO", "absolute", "12", "177", "92", "25", null, null, this.Tab0.tab0);
            obj.set_text("전화번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stJOIN_NO", "absolute", "518", "225", "127", "25", null, null, this.Tab0.tab0);
            obj.set_text("구매카드 가맹점번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtJOIN_NO", "absolute", "646", "227", "122", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("29");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stEMPL_NUMB", "absolute", "492", "249", "95", "25", null, null, this.Tab0.tab0);
            obj.set_text("사원번호");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtEMPL_NUMB", "absolute", "588", "251", "51", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("40");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new ImageViewer("imgHelpEMPL_NUMB", "absolute", "640", "251", "22", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtEMPL_NAME", "absolute", "663", "251", "105", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("32");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_lengthunit("utf16");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stOPEN_DT00", "absolute", "12", "249", "91", "25", null, null, this.Tab0.tab0);
            obj.set_text("관계사시작일");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Calendar("calRELT_STDT", "absolute", "104", "251", "120", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Static("stCLOSE_DT00", "absolute", "227", "249", "123", "25", null, null, this.Tab0.tab0);
            obj.set_text("관계사종료일");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Calendar("calRELT_EDDT", "absolute", "351", "251", "141", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_dateformat("yyyy-MM-dd");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Static("Static12", "absolute", "12", "33", "757", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("43");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "12", "57", "757", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("44");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtBOSS_NM", "absolute", "425", "35", "65", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("47");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "12", "33", "92", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("48");
            obj.set_text("거래처구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbCDIV_CD", "absolute", "105", "35", "121", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_innerdataset("dsCDIV_CD");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_index("-1");
            obj = new Combo("cmbRELT_GUBN", "absolute", "227", "35", "122", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_innerdataset("dsRELT_GUBN");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj.set_index("-1");
            obj = new Static("stBOSS_NM", "absolute", "350", "33", "74", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("51");
            obj.set_text("대표자명");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stSHOPABB_NM", "absolute", "491", "33", "95", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("52");
            obj.set_text("거래처명(약)");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtSHOPABB_NM", "absolute", "587", "35", "181", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("53");
            obj.set_imemode("hangul");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCOPRDIV_CD", "absolute", "12", "57", "92", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("54");
            obj.set_text("사업자/개인");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbCOPRDIV_CD", "absolute", "105", "59", null, "21", "791", null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_innerdataset("dsCOPRDIV_CD");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTB_CUST");
            obj = new Static("stREGS_NO", "absolute", "227", "57", "123", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("56");
            obj.set_text("사업자(주민)번호");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new MaskEdit("medREGS_NO", "absolute", "351", "59", "139", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("57");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_trimtype("both");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCOPR_NO", "absolute", "491", "57", "95", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("58");
            obj.set_text("법인등록번호");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new MaskEdit("medCOPR_NO", "absolute", "587", "59", "181", "23", null, null, this.Tab0.tab0);
            obj.set_taborder("59");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "1.18%", "105", null, "25", "24.39%", null, this.Tab0.tab0);
            obj.getSetter("taborder").set("61");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCOPRT_CONT", "absolute", "12", "105", "92", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("62");
            obj.set_text("업태");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtCOPRT_CONT", "absolute", "105", "107", "121", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("63");
            obj.set_imemode("hangul");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCOPRJ_CONT", "absolute", "227", "105", "124", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("64");
            obj.set_text("업종");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtCOPRJ_CONT", "absolute", "352", "107", "138", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("65");
            obj.set_imemode("hangul");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stSUMSHOP_CD", "absolute", "491", "105", null, "25", "431", null, this.Tab0.tab0);
            obj.getSetter("taborder").set("66");
            obj.set_text("대표거래처");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtSUMSHOP_CD", "absolute", "587", "107", "51", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("67");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new ImageViewer("imgHelpSUMSHOP_NM", "absolute", "639", "107", "23", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("68");
            obj.set_tabstop("false");
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtSUMSHOP_NM", "absolute", "663", "107", "105", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("69");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "1.18%", "129", null, "25", "24.39%", null, this.Tab0.tab0);
            obj.getSetter("taborder").set("75");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stZIPCODE_CD", "absolute", "12", "129", "92", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("77");
            obj.set_text("우편번호");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new MaskEdit("medZIPCODE_CD", "absolute", "105", "131", "97", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("78");
            obj.set_type("string");
            obj.set_mask("######");
            obj.set_maskchar(" ");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new ImageViewer("imgHelpADDR1_TX", "absolute", "203", "131", "23", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("79");
            obj.set_tabstop("false");
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stADDR1_TX", "absolute", "227", "129", "124", "25", null, null, this.Tab0.tab0);
            obj.getSetter("taborder").set("80");
            obj.set_text("주소1");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtADDR1_TX", "absolute", "352", "131", "416", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("81");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTB_CUST");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab4", this.Tab0);
            obj.set_taborder("24");
            obj.set_text("거래처담당자");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            obj.style.set_background("transparent");
            this.Tab0.addChild(obj.name, obj);
            obj = new Button("btnInput01", "absolute", null, "0", "68", "23", "70", null, this.Tab0.tab4);
            obj.set_taborder("1");
            obj.style.set_image("URL('image::btnGridRowAdd.bmp')");
            obj.style.set_imagealign("left");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Button("btnDelete01", "absolute", null, "0", "68", "23", "0", null, this.Tab0.tab4);
            obj.set_taborder("2");
            obj.style.set_image("URL('image::btnGridRowDelete.bmp')");
            obj.style.set_imagealign("left");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Grid("grdTB_CUSTMAN", "absolute", "0", "29", null, null, "0", "1", this.Tab0.tab4);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTB_CUSTMAN");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"담당자명\"/><Cell col=\"1\" displaytype=\"text\" text=\"연락처\"/><Cell col=\"2\" displaytype=\"text\" text=\"H/P\"/><Cell col=\"3\" displaytype=\"text\" text=\"E-Mail\"/><Cell col=\"4\" displaytype=\"text\" text=\"대표담당자\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:MAN_NM\" editlimit=\"20\" editimemode=\"native\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:TEL_NO\" editlimit=\"20\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:HP_NO\" editlimit=\"20\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:E_MAIL\" editlimit=\"30\" editimemode=\"english\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:TAX_YN\" editimemode=\"english\"/></Band></Format></Formats>");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Tabpage("tab5", this.Tab0);
            obj.set_taborder("24");
            obj.set_text("거래계좌");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            obj.style.set_background("transparent");
            this.Tab0.addChild(obj.name, obj);
            obj = new Button("btnInput02", "absolute", null, "0", "68", "23", "70", null, this.Tab0.tab5);
            obj.set_taborder("1");
            obj.style.set_image("URL('theme://imagesInbus/btnAddRow_N.png')");
            obj.style.set_imagealign("left");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Button("btnDelete02", "absolute", null, "0", "68", "23", "0", null, this.Tab0.tab5);
            obj.set_taborder("1");
            obj.style.set_image("URL('theme://imagesInbus/btnDeleteRow_N.png')");
            obj.style.set_imagealign("left");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Grid("grdTB_CUSTACNT", "absolute", "0", "29", null, null, "0", "0", this.Tab0.tab5);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTB_CUSTACNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"금융기관\"/><Cell col=\"2\" displaytype=\"text\" text=\"계좌번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"예금주명\"/><Cell col=\"4\" displaytype=\"text\" text=\"주거래은행여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align: left;\" text=\"bind:ACNTDIV_CD\" combodataset=\"dsACNTDIV_CD\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:BANK_NAME\" editimemode=\"native\" expandshow=\"show\" expandsize=\"15\" expandimage=\"URL('image::btnGridHelp2.bmp')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ACNT_NUMB\" editlimit=\"30\" editimemode=\"native\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ACNT_MANM\" editlimit=\"20\" editimemode=\"native\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:MAINACNT_YN\" combodataset=\"dsMAINACNT_YN\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/></Band></Format></Formats>");
            this.Tab0.tab5.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "86", "8", null, this);
            obj.getSetter("radiusy").set("15");
            obj.getSetter("radiusx").set("15");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMANAPART_CD", "absolute", "411", "92", "70", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMANAPART_NM", "absolute", "505", "92", "115", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCUSTDIV_CD", "absolute", "96", "92", "220", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("dsSHRCUSTDIV_CD");
            obj.set_taborder("3");
            obj.set_index("-1");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRSHOP_NM", "absolute", "96", "68", "220", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRADMINEMP_CD", "absolute", "738", "92", "70", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRADMINEMP_NM", "absolute", "832", "92", "115", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRDOMEFORE_CD", "absolute", "411", "116", "101", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("dsSHRDOMEFORE_CD");
            obj.set_taborder("12");
            obj.set_index("-1");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRUSE_YN", "absolute", "738", "116", "101", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("dsSHRUSE_YN");
            obj.set_taborder("13");
            obj.set_index("-1");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRCDIV_CD", "absolute", "96", "116", "88", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("dsSHRCDIV_CD");
            obj.set_taborder("10");
            obj.set_index("-1");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRCUST_CODE", "absolute", "411", "68", "209", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRREGS_NO", "absolute", "738", "68", "209", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRRELT_GUBN", "absolute", "253", "116", "88", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("dsSHRRELT_GUBN");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Grid("grdTB_CUST", "absolute", "8", "201", null, null, "8", "342", this);
            obj.set_selecttype("multirow");
            obj.set_binddataset("dsTB_CUST");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_cellsizebandtype("allband");
            obj.set_taborder("14");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"118\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"170\" band=\"left\"/><Column size=\"90\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"122\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"거래처구분\"/><Cell col=\"1\" text=\"세부구분\"/><Cell col=\"2\" displaytype=\"text\" text=\"거래처코드\"/><Cell col=\"3\" displaytype=\"text\" text=\"거래처명\"/><Cell col=\"4\" displaytype=\"text\" text=\"관리번호\"/><Cell col=\"5\" displaytype=\"text\" text=\"거래처주소\"/><Cell col=\"6\" displaytype=\"text\" text=\"전화번호\"/><Cell col=\"7\" displaytype=\"text\" text=\"관리부서\"/><Cell col=\"8\" displaytype=\"text\" text=\"영업담당자\"/><Cell col=\"9\" displaytype=\"text\" text=\"거래시작일\"/><Cell col=\"10\" displaytype=\"text\" text=\"거래종료일\"/><Cell col=\"11\" displaytype=\"text\" text=\"국내외구분\"/><Cell col=\"12\" displaytype=\"text\" text=\"구매카드가맹점번호\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: center;\" text=\"bind:CDIV_CD\" combodataset=\"dsCDIV_CD\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left middle;\" text=\"bind:RELT_GUBN\" combodataset=\"dsRELT_GUBN\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:CUST_CODE\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:SHOP_NM\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"bind:REGS_NO\" mask=\"expr:comp.parent.lookupFunc(&quot;gfn_Decode&quot;).call(comp.parent.lookupFunc(&quot;gfn_Length&quot;).call(REGS_NO), 10, '###-##-#####', 13, '######-#######', '')\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ADDR_TX\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:TEL_NO\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"bind:MANAPART_NM\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ADMINEMP_NM\"/><Cell col=\"9\" displaytype=\"date\" style=\"align:center;\" text=\"bind:OPEN_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" style=\"align:center;\" text=\"bind:CLOSE_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:DOMEFORE_CD\" combodataset=\"dsDOMEFORE_CD\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: center;\" text=\"bind:JOIN_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("거래처정보등록");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "173", "404", "24", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "490", "0", null, "29", "16", null, this);
            obj.set_text("재무관리>기본정보>거래처정보등록");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "349", "92", "60", "22", null, null, this);
            obj.set_text("관리부서");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgHelpSHRMANAPART_NM", "absolute", "482", "92", "22", "22", null, null, this);
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "16", "68", "82", "22", null, null, this);
            obj.set_text("거래처명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "16", "92", "82", "22", null, null, this);
            obj.set_text("거래처유형");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "658", "92", "78", "22", null, null, this);
            obj.set_text("영업담당자");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgHelpSHRADMINEMP_NM", "absolute", "809", "92", "22", "22", null, null, this);
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "360", "116", "48", "22", null, null, this);
            obj.set_text("국내외");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "676", "116", "60", "22", null, null, this);
            obj.set_text("사용여부");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "16", "116", "82", "22", null, null, this);
            obj.set_text("거래처구분");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "334", "68", "75", "22", null, null, this);
            obj.set_text("거래처코드");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "631", "68", "105", "22", null, null, this);
            obj.set_text("사업자/주민번호");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "303", null, "491", "20", null, "308", this);
            obj.set_text("* 전자세금계산서 발행대상은 거래처담당자를 반드시 넣어주세요.");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormSearchInfoBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "201", "116", "50", "22", null, null, this);
            obj.set_text("관계사");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDown", "absolute", "8", "32", "165", "23", null, null, this);
            obj.set_taborder("18");
            obj.set_text("거래처정보 양식 다운로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload", "absolute", "175", "32", "151", "23", null, null, this);
            obj.set_taborder("19");
            obj.set_text("거래처정보 엑셀 업로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "621", "12", "17", "12", null, null, this);
            obj.set_taborder("20");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDown00", "absolute", null, "149", "214", "23", "8", null, this);
            obj.set_taborder("21");
            obj.set_text("구매카드가맹점번호 양식 다운로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload2", "absolute", null, "174", "214", "23", "8", null, this);
            obj.set_taborder("22");
            obj.set_text("구매카드가맹점번호 엑셀 업로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDown01", "absolute", null, "149", "152", "23", "228", null, this);
            obj.set_taborder("23");
            obj.set_text("사원계좌 양식 다운로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload3", "absolute", null, "174", "152", "23", "228", null, this);
            obj.set_taborder("24");
            obj.set_text("사원계좌 엑셀 업로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDown02", "absolute", null, "149", "165", "23", "386", null, this);
            obj.set_taborder("25");
            obj.set_text("거래처계좌 양식 다운로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload00", "absolute", null, "174", "165", "23", "386", null, this);
            obj.set_taborder("26");
            obj.set_text("거래처계좌 엑셀 업로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDown03", "absolute", null, "149", "178", "23", "557", null, this);
            obj.set_taborder("27");
            obj.set_text("거래처담당자 양식 다운로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload01", "absolute", null, "174", "178", "23", "557", null, this);
            obj.set_taborder("28");
            obj.set_text("거래처담당자 엑셀 업로드");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "168", "3", "48", "551", null, this);
            obj.getSetter("linetype").set("vertical");
            obj.style.set_color("#3e3e3eff");
            obj.style.set_opacity("50");
            obj.getSetter("radiusx").set("5");
            obj.getSetter("radiusy").set("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", null, "168", "3", "48", "380", null, this);
            obj.getSetter("linetype").set("vertical");
            obj.getSetter("radiusy").set("0");
            obj.set_enable("false");
            obj.style.set_color("#3e3e3eff");
            obj.style.set_opacity("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "168", "3", "48", "222", null, this);
            obj.getSetter("linetype").set("vertical");
            obj.getSetter("radiusy").set("0");
            obj.set_enable("false");
            obj.style.set_color("#3e3e3eff");
            obj.style.set_opacity("50");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 972, 347, this.Tab0.tab0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("65");
            		p.set_text("기본정보");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");
            		p.style.set_background("transparent");

            	}
            );
            this.Tab0.tab0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 972, 347, this.Tab0.tab4,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("24");
            		p.set_text("거래처담당자");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");
            		p.style.set_background("transparent");

            	}
            );
            this.Tab0.tab4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 972, 347, this.Tab0.tab5,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("24");
            		p.set_text("거래계좌");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");
            		p.style.set_background("transparent");

            	}
            );
            this.Tab0.tab5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("거래처정보등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Tab0_tab0_cmbDOMEFORE_CD_value","Tab0.tab0.cmbDOMEFORE_CD","value","dsTB_CUST","DOMEFORE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtCUST_CODE_value","Tab0.tab0.edtCUST_CODE","value","dsTB_CUST","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtTEL_NO_value","Tab0.tab0.edtTEL_NO","value","dsTB_CUST","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_calOPEN_DT_value","Tab0.tab0.calOPEN_DT","value","dsTB_CUST","OPEN_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtSHOP_NM_value","Tab0.tab0.edtSHOP_NM","value","dsTB_CUST","SHOP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtFAX_NO_value","Tab0.tab0.edtFAX_NO","value","dsTB_CUST","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_calCLOSE_DT_value","Tab0.tab0.calCLOSE_DT","value","dsTB_CUST","CLOSE_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtREPRST_EMAIL_value","Tab0.tab0.edtREPRST_EMAIL","value","dsTB_CUST","REPRST_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtADMINEMP_CD_value","Tab0.tab0.edtADMINEMP_CD","value","dsTB_CUST","ADMINEMP_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtADMINEMP_NM_value","Tab0.tab0.edtADMINEMP_NM","value","dsTB_CUST","ADMINEMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtADDR2_TX_value","Tab0.tab0.edtADDR2_TX","value","dsTB_CUST","ADDR2_TX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtMANAPART_CD_value","Tab0.tab0.edtMANAPART_CD","value","dsTB_CUST","MANAPART_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtMANAPART_NM_value","Tab0.tab0.edtMANAPART_NM","value","dsTB_CUST","MANAPART_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtSHOPVAT_NM_value","Tab0.tab0.edtSHOPVAT_NM","value","dsTB_CUST","SHOPVAT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtJONGSAE_NO_value","Tab0.tab0.edtJONGSAE_NO","value","dsTB_CUST","JONGSAE_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbUSE_YN_value","Tab0.tab0.cmbUSE_YN","value","dsTB_CUST","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbPOST_GUBN_value","Tab0.tab0.cmbPOST_GUBN","value","dsTB_CUST","POST_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtJOIN_NO_value","Tab0.tab0.edtJOIN_NO","value","dsTB_CUST","JOIN_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtEMPL_NUMB_value","Tab0.tab0.edtEMPL_NUMB","value","dsTB_CUST","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtEMPL_NAME_value","Tab0.tab0.edtEMPL_NAME","value","dsTB_CUST","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab0.tab0.calRELT_STDT","value","dsTB_CUST","RELT_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab0.tab0.calRELT_EDDT","value","dsTB_CUST","RELT_EDDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtBOSS_NM_value","Tab0.tab0.edtBOSS_NM","value","dsTB_CUST","BOSS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbCDIV_CD_value","Tab0.tab0.cmbCDIV_CD","value","dsTB_CUST","CDIV_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbRELT_GUBN_value","Tab0.tab0.cmbRELT_GUBN","value","dsTB_CUST","RELT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtSHOPABB_NM_value","Tab0.tab0.edtSHOPABB_NM","value","dsTB_CUST","SHOPABB_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbCOPRDIV_CD_value","Tab0.tab0.cmbCOPRDIV_CD","value","dsTB_CUST","COPRDIV_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_medREGS_NO_value","Tab0.tab0.medREGS_NO","value","dsTB_CUST","REGS_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_medCOPR_NO_value","Tab0.tab0.medCOPR_NO","value","dsTB_CUST","COPR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtCOPRT_CONT_value","Tab0.tab0.edtCOPRT_CONT","value","dsTB_CUST","COPRT_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtCOPRJ_CONT_value","Tab0.tab0.edtCOPRJ_CONT","value","dsTB_CUST","COPRJ_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtSUMSHOP_CD_value","Tab0.tab0.edtSUMSHOP_CD","value","dsTB_CUST","SUMSHOP_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtSUMSHOP_NM_value","Tab0.tab0.edtSUMSHOP_NM","value","dsTB_CUST","SUMSHOP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_medZIPCODE_CD_value","Tab0.tab0.medZIPCODE_CD","value","dsTB_CUST","ZIPCODE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtADDR1_TX_value","Tab0.tab0.edtADDR1_TX","value","dsTB_CUST","ADDR1_TX");
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
        this.addIncludeScript("FAME0013.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAME0013.xfdl", function() {
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        // var sBUTTONLIST   = 'TTTTFTTT';                        //공통기능정의(버튼순으로 T or F)
        this.sBUTTONLIST = 'TTTTFTTF'; //공통기능정의(버튼순으로 T or F)

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = '';   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = '';   //Form의 Title 정보
        	this.sFORMLOCATION = '';   //Form의 Location 정보
        	this.sUSERLAVEL    = '';   //Form의 Location 정보
        	
        } else {

        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        	
        }

        this.sPACKAGENAME = 'erp.u.fam.e.ab.FAME0013AB'; //해당 Form에서 사용 할 Package 명
        this.aKeyValue = new Array(1);
        this.sLoadForm = '';
        this.sSHRCUST_CODE = '';
        this.sCUST_CODE = '';
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*----------------------------------+
         |  00.도움말 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_Help = function (obj)
        {
        }

        /*----------------------------------+
         |  01.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	// 화면 종료
        	this.close();
        }

        /*-----------------------+
         |  02.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	// 조회 필수 입력 여부  체크
        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}

        	// 관련데이터 셋 초기화
        	this.dsTB_CUST.clearData();
        	this.dsTB_CUSTDIV.clearData();
        	this.dsTB_CUSTMAN.clearData();
        	this.dsTB_CUSTACNT.clearData();

        
        	// 왜 그리드용 데이터 셋이랑, 저장용 데이터 셋을 분리했지???
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTB_CUST=dsTB_CUST";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTB_CUST.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  03.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        	// DataSet의 Header 정보가 있을 때  Add 처리
        	var nRow = this.dsTB_CUST.addRow();

        	// 선택하지 않으면 삭제 되지 않는다.
        	this.grdTB_CUST.selectRow(nRow);

        	// 기본값을 설정한다.
        	this.dsTB_CUST.setColumn(nRow, "DOMEFORE_CD", "HR760010"); //국내외구분
        	this.dsTB_CUST.setColumn(nRow, "COPRDIV_CD", "1"); //법인/개인구분
        	this.dsTB_CUST.setColumn(nRow, "USE_YN", "1"); //사용여부

        	// 입력란을 조정한다.
        	this.Tab0.tab0.medREGS_NO.set_mask('###-##-#####');
        	//this.Tab0.tab0.stREGS_NO.set_text('사업자번호');

        	// 거래유형을 입력당시 선택 가능해야 하지 않나???

        

        	// Focus를 지정한다.
        	// Tab0.tab0.edtSHOP_NM.setFocus();   //입력란 첫 항목으로 Focus
        }

        /*-----------------------------+
         |  04.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        	// 삭제 할 자료가 있는지 여부를 체크
        	if (this.dsTB_CUST.getRowCount() > 0) 
        	{
        		if (this.fn_DeleteCheck("TB_CUST")) 
        		{
        			// 선택 Row 삭제
        			this.dsTB_CUST.deleteSelectedRows();
        			this.dsTB_CUSTDIV.clearData();
        			this.dsTB_CUSTMAN.clearData();
        			this.dsTB_CUSTACNT.clearData();
        		}
        		else 
        		{
        			this.fnc_Message("M1061"); //취소되었습니다.
        		}
        	}

        	this.grdTB_CUST.setFocus(); //Record 삭제 후 Grid로 Focus
        }

        /*-----------------------+
         |  05.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	// 기능없음.
        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	if (!this.fn_SaveItemCheck()) 
        	{
        		return;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTB_CUST=dsTB_CUST:U dsTB_CUSTMAN=dsTB_CUSTMAN:U dsTB_CUSTACNT=dsTB_CUSTACNT:U ";
        	sInDataSet += "dsTB_CUSTDIV=dsTB_CUSTDIV:U ";
        	var sOutDataSet = "dsTB_CUST=dsTB_CUST dsTB_CUSTMAN=dsTB_CUSTMAN dsTB_CUSTACNT=dsTB_CUSTACNT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTB_CUST.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------+
         |  07.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.fnc_ToExcel(this); //Export 할 화면 Call
        }

        /*-----------------------+
         |  08.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  09.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 팝업호출에 대한 파라메터를 셋팅한다.
        	// 메인버튼 제어를 위해 fnc_FormLoadSetting 이전에 실행되어야 한다.
        	this.fn_SetPopupArgument();

        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);

        	// Tab의 grd추가
        	this.fnc_GridSetting(this);

        	this.fnc_GetComboDs(this.dsCombo);

        	// 반출구분코드
        	var sMethodName = "SEARCH99";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTASK_GUBN=dsTASK_GUBN";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.Tab0.set_tabindex(0);

        	if (this.sLoadForm == "SHR") 
        	{
        		this.edtSHRCUST_CODE.set_value(this.sSHRCUST_CODE);
        		this.fn_Search();
        	}
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTB_CUST,dsTB_CUSTDIV,dsTB_CUSTMAN,dsTB_CUSTACNT",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        } 
        this.fn_FormUnloadProcess = function (obj,e)
        {
        	// 자료 변경 여부를 체크하고자 하는  DataSet Object를 넘긴다.
        	return this.fnc_FormUnloadCheck("dsTB_CUST,dsTB_CUSTDIV,dsTB_CUSTMAN,dsTB_CUSTACNT", this);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	// Return Key Press時 Next Component focus

        
        	if ((e.keycode == 13) && !(e.fromobject instanceof this.lookup("Grid"))) 
        	{
        		var oFocusComponent = this.getNextComponent(e.fromobject, true);
        		oFocusComponent.setFocus();
        		return;
        	}

        	// Control Key가 눌려져 있다면 단축키 처리
        	// if ( e.ctrlKey ) {
        	this.fnc_HotKey(this, e.keycode);
        	// }
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj)
        {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function ()
        {
        	// 변경된 자료가 있는지 체크
        	if (this.fnc_DatasetChangeCheck('dsTB_CUST,dsTB_CUSTMAN,dsTB_CUSTACNT,dsTB_CUSTDIV')) 
        	{
        		if (this.fnc_Message("M1023") == false) 
        		{
        			return false;
        		}
        	}

        
        	// 전체 조회시 시간이 너무 걸려 오류가 발생한다.
        	// 조회조건이 없을 시 확인 하고 진행한다.

        	var sShrStr = this.fnc_Trim(this.edtSHRSHOP_NM.value) + this.fnc_Trim(this.edtSHRCUST_CODE.value) + this.fnc_Trim(this.edtSHRREGS_NO.value)
        		 + this.fnc_Trim(this.cmbSHRCUSTDIV_CD.value) + this.fnc_Trim(this.dsSHRCUSTDIV_CD.value) + this.fnc_Trim(this.edtSHRMANAPART_CD.value)
        		 + this.fnc_Trim(this.edtSHRADMINEMP_CD.value) + this.fnc_Trim(this.cmbSHRDOMEFORE_CD.value) + this.fnc_Trim(this.cmbSHRUSE_YN.value);

        	// trace( " sShrStr : " + sShrStr ) ;

        	if (this.fnc_Trim(sShrStr) == "") 
        	{
        		return this.fnc_Message("M1100", "");
        	}

        	// return true;

        	return true;
        }

        /*-------------------------+
         |  저장 여부 체크(임시)!  |
         +------------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	// trace( " GetUpdate(dsTB_CUST) : " + GetUpdate(dsTB_CUST));
        	// trace( " GetUpdate(dsTB_CUST) : " + GetUpdate(dsTB_CUST));
        	// trace( " GetUpdate(dsTB_CUST) : " + GetUpdate(dsTB_CUST));
        	// trace( " GetUpdate(dsTB_CUST) : " + GetUpdate(dsTB_CUST));

        
        	// 변경된 자료가 있는지 체크
        	if (!this.fnc_DatasetChangeCheckM('dsTB_CUST,dsTB_CUSTMAN,dsTB_CUSTACNT,dsTB_CUSTDIV')) 
        	{
        		// 저장 할 자료가 없음
        		this.fnc_Message("M1006");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTB_CUST.getRowCount(); i++) 
        	{
        		if (this.dsTB_CUST.GetRowType(i) == "normal") 
        		{
        			continue;
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUST.getColumn(i, "SHOP_NM"))) < 1) 
        		{
        			this.fnc_Message("M1005", "거래처명"); //Message 처리
        			this.dsTB_CUST.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.Tab0.set_tabindex(0);
        			this.Tab0.tab0.edtSHOP_NM.setFocus(); //성명 항목으로 Focus
        			return false;
        		}

        		// 국/내외 구분에 따른 확인
        		// 2014-12-04 : 일단 국내든 국외든 필수 체크한다.
        		// if (dsTB_CUST.getColumn(i, "DOMEFORE_CD") == 'HR760010') {          // 국내
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUST.getColumn(i, "REGS_NO"))) < 1) 
        		{
        			this.fnc_Message("M1005", "사업자(주민)등록번호"); //Message 처리
        			this.dsTB_CUST.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.Tab0.set_tabindex(0);
        			this.Tab0.tab0.medREGS_NO.setFocus(); //성명 항목으로 Focus
        			return false;
        		}
        		// }else if (dsTB_CUST.getColumn(i, "DOMEFORE_CD") == 'HR760020'){     // 국외
        		// 
        		/*
        		 if (fnc_Length(fnc_Trim(dsTB_CUST.getColumn(i,"MANAPART_CD")))< 1) {
        		 fnc_Message("M1005","관리부서");       //Message 처리
        		 dsTB_CUST.rowposition = i;                 //DataSet을 현재 Row로 이동
        		 Tab0.tabindex = 0;
        		 Tab0.tab0.edtMANAPART_NM.setFocus();           //성명 항목으로 Focus
        		 return false;
        		 }
        		 */
        		// }

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUST.getColumn(i, "REGS_NO"))) > 1 && this.fnc_ToUpper(this.dsTB_CUST.GetRowType(i)) != "NORMAL") 
        		{
        			// 사업자 번호 체크한다.
        			if (this.dsTB_CUST.getColumn(i, "COPRDIV_CD") == "1") 
        			{
        				// 사업자인 경우
        				// 국외 일경우 자릿수만 확인
        				if (this.dsTB_CUST.getColumn(i, "DOMEFORE_CD") == 'HR760020') 
        				{
        					// 국외

        					if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUST.getColumn(i, "REGS_NO"))) < 10) 
        					{
        						this.fnc_Message("M1034", "임의의 관리 번호(10자리)"); //Message 처리
        						this.dsTB_CUST.set_rowposition(i); //DataSet을 현재 Row로 이동
        						this.Tab0.set_tabindex(0);
        						this.lookup("tab0").TAB0.medREGS_NO.setFocus(); //사업자번호 항목으로 Focus
        						return false;
        					}
        				}
        				else 
        				{
        					if (!this.fnc_FormatCustNumber(this.dsTB_CUST.getColumn(i, "REGS_NO"))) 
        					{
        						this.fnc_Message("M1034", "정확한 사업자 번호"); //Message 처리
        						this.dsTB_CUST.set_rowposition(i); //DataSet을 현재 Row로 이동
        						this.Tab0.set_tabindex(0);
        						this.Tab0.tab0.medREGS_NO.setFocus(); //사업자번호 항목으로 Focus
        						return false;
        					}
        				}
        			}
        			else if (this.dsTB_CUST.getColumn(i, "COPRDIV_CD") == "2") 
        			{
        				// 개인인경우
        				if (!this.fnc_ResidenceNumberCheck(this.dsTB_CUST.getColumn(i, "REGS_NO"))) 
        				{
        					this.fnc_Message("M1020"); //Message 처리
        					this.dsTB_CUST.set_rowposition(i); //DataSet을 현재 Row로 이동
        					this.Tab0.set_tabindex(0);
        					this.Tab0.tab0.medREGS_NO.setFocus(); //주민등록 항목으로 Focus
        					return false;
        				}
        			}
        		}

        
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUST.getColumn(i, "OPEN_DT"))) < 1) 
        		{
        			this.fnc_Message("M1005", "거래시작일"); //Message 처리
        			this.dsTB_CUST.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.Tab0.set_tabindex(0);
        			this.Tab0.tab0.calOPEN_DT.setFocus(); //성명 항목으로 Focus
        			return false;
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUST.getColumn(i, "CDIV_CD"))) < 1) 
        		{
        			this.fnc_Message("M1005", "거래처구분"); //Message 처리
        			this.dsTB_CUST.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.Tab0.set_tabindex(0);
        			this.Tab0.tab0.cmbCDIV_CD.setFocus(); //성명 항목으로 Focus
        			return false;
        		}

        		if (this.fnc_Trim(this.dsTB_CUST.getColumn(i, "CDIV_CD")) == "TS100010") 
        		{
        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUST.getColumn(i, "SHOP_CD"))) > 4) 
        			{
        				this.fnc_Message("M1046", "거래처구분 매장은 거래처번호 4자리를 초과할수 없습니다."); //Message 처리
        				this.dsTB_CUST.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.Tab0.set_tabindex(0);
        				this.Tab0.tab0.edtSHOP_CD.setFocus(); //성명 항목으로 Focus
        				return false;
        			}
        		}
        	}

        	// 거래처담당자
        	for (var i = 0; i < this.dsTB_CUSTMAN.getRowCount(); i++) 
        	{
        		if (this.dsTB_CUSTMAN.GetRowType(i) == "normal") 
        		{
        			continue;
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUSTMAN.getColumn(i, "MAN_NM"))) < 1) 
        		{
        			this.fnc_Message("M1005", "담당자명"); //Message 처리
        			this.dsTB_CUSTMAN.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.Tab0.set_tabindex(1);
        			this.Tab0.tab4.grdTB_CUSTMAN.setFocus();
        			this.Tab0.tab4.grdTB_CUSTMAN.setCellPos(1);
        			return false;
        		}
        		if (this.dsTB_CUSTMAN.getCaseCount("TAX_YN=='1'") < 1) 
        		{
        			this.fnc_Message("M1046", "대표담당자는 적어도 한명이 있어야 합니다");
        			this.Tab0.set_tabindex(1);
        			return false;
        		}
        	}

        	// 거래계좌
        	for (var i = 0; i < this.dsTB_CUSTACNT.getRowCount(); i++) 
        	{
        		if (this.dsTB_CUSTACNT.GetRowType(i) == "normal") 
        		{
        			continue;
        		}
        		// if (!IsNull(dsTB_CUSTACNT.getColumn(i,"CUST_CODE"))) {
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUSTACNT.getColumn(i, "ACNTDIV_CD"))) < 1) 
        		{
        			this.fnc_Message("M1005", "계좌구분"); //Message 처리
        			this.dsTB_CUSTACNT.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.Tab0.set_tabindex(2);
        			this.Tab0.tab5.grdTB_CUSTACNT.setFocus();
        			this.Tab0.tab5.v.setCellPos(1);
        			return false;
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUSTACNT.getColumn(i, "BANK_CODE"))) < 1) 
        		{
        			this.fnc_Message("M1005", "금융기관"); //Message 처리
        			this.dsTB_CUSTACNT.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.Tab0.set_tabindex(2);
        			this.Tab0.tab5.grdTB_CUSTACNT.setFocus();
        			this.Tab0.tab5.grdTB_CUSTACNT.setCellPos(2);
        			return false;
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUSTACNT.getColumn(i, "ACNT_NUMB"))) < 1) 
        		{
        			this.fnc_Message("M1005", "계좌번호"); //Message 처리
        			this.dsTB_CUSTACNT.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.Tab0.set_tabindex(2);
        			this.Tab0.tab5.grdTB_CUSTACNT.setFocus();
        			this.Tab0.tab5.grdTB_CUSTACNT.setCellPos(3);
        			return false;
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUSTACNT.getColumn(i, "MAINACNT_YN"))) < 1) 
        		{
        			this.fnc_Message("M1005", "주거래은행여부"); //Message 처리
        			this.dsTB_CUSTACNT.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.Tab0.set_tabindex(2);
        			this.Tab0.tab5.grdTB_CUSTACNT.setFocus();
        			this.Tab0.tab5.grdTB_CUSTACNT.setCellPos(5);
        			return false;
        		}
        		if (this.dsTB_CUSTACNT.getCaseCount("MAINACNT_YN=='1'") > 1) 
        		{
        			this.fnc_Message("M1046", "주거래은행이 한개 이상입니다.");
        			this.Tab0.set_tabindex(2);
        			return false;
        		}
        		// }
        	}

        
        	return true;
        	// Validation Check Sign Return
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus)
        {
        	var iSelectRowCount = 0;
        	var sQuestionText = '';
        	if (sStatus == "TB_CUST") 
        	{
        		// 거래처 이면

        		iSelectRowCount = this.fnc_SelectRowCount(this.dsTB_CUST);
        		sQuestionText = "거래처명 : '" + this.fnc_Trim(this.dsTB_CUST.getColumn(this.dsTB_CUST.rowposition, "SHOP_NM")) + "' 거래처";
        	}
        	else if (sStatus == "TB_CUSTMAN") 
        	{
        		// 거래처담당자 이면

        		iSelectRowCount = this.fnc_SelectRowCount(this.dsTB_CUSTMAN);
        		sQuestionText = "담당자명 : '" + this.dsTB_CUSTMAN.getColumn(this.dsTB_CUSTMAN.rowposition, "MAN_NM") + "' 거래처담당자";
        	}
        	// 거래계좌 이면
        	else if (sStatus == "TB_CUSTACNT") 
        	{
        		iSelectRowCount = this.fnc_SelectRowCount(this.dsTB_CUSTACNT);
        		// sQuestionText = "금융기관 : '"+ getCellText(Tab0.tab5.grdTB_CUSTACNT,"body",dsTB_CUSTACNT.rowposition,1)+"' 거래계좌";
        		sQuestionText = "금융기관 : '" + this.Tab0.tab5.grdTB_CUSTACNT.getCellText(this.dsTB_CUSTACNT.rowposition, 1) + "' 거래계좌";
        	}
        	// 거래처유형 이면
        	else if (sStatus == "TB_CUSTDIV") 
        	{
        		iSelectRowCount = this.fnc_SelectRowCount(this.dsTB_CUSTDIV);
        		// sQuestionText = "거래처유형 : '"+ getCellText(Tab0.tab0.grdTB_CUSTDIV,"body",dsTB_CUSTDIV.rowposition,1)+"' 거래처유형";
        		sQuestionText = "거래처유형 : '" + this.Tab0.tab5.grdTB_CUSTDIV.getCellText(0, 1) + "' 거래처유형";
        	}

        

        	if (iSelectRowCount > 1) 
        	{
        		// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("M1010", iSelectRowCount);
        	}
        	else 
        	{
        		// 한 건 삭제 처리히 해당 항목에 대한 삭제 여부 확인
        		return this.fnc_Message("M1004", sQuestionText);
        	}
        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind)
        {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') 
        	{
        		// 거래처 정보 조회
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " SHOP_NM=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRSHOP_NM.value)); //거래처명
        		sReturnString += " CUSTDIV_CD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCUSTDIV_CD.value)); //거래처유형
        		sReturnString += " DOMEFORE_CD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDOMEFORE_CD.value)); //국내외구분
        		sReturnString += " MANAPART_CD=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMANAPART_CD.value)); //관리부서
        		sReturnString += " ADMINEMP_CD=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRADMINEMP_CD.value)); //영업담당자
        		sReturnString += " USE_YN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSE_YN.value)); //사용여부
        		sReturnString += " CDIV_CD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCDIV_CD.value)); //거래처구분
        		sReturnString += " RELT_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRELT_GUBN.value)); //관계사구분
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); //거래처코드
        		sReturnString += " REGS_NO=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRREGS_NO.value)); //사업자/주민번호
        	}
        	else if (sKind == 'SEARCH01') 
        	{
        		// 세부자료 조회
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.dsTB_CUST.getColumn(this.dsTB_CUST.rowposition, "CUST_CODE")); //거래처코드
        	}
        	else if (sKind == 'SEARCH99') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        	}
        	else if (sKind == 'PROC00') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        	}
        	else if (sKind == 'SAVE00') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " SHOP_NM=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRSHOP_NM.value)); //거래처명
        		sReturnString += " CUSTDIV_CD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCUSTDIV_CD.value)); //거래처유형
        		sReturnString += " DOMEFORE_CD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDOMEFORE_CD.value)); //국내외구분
        		sReturnString += " MANAPART_CD=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRMANAPART_CD.value)); //관리부서
        		sReturnString += " ADMINEMP_CD=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRADMINEMP_CD.value)); //영업담당자
        		sReturnString += " USE_YN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSE_YN.value)); //사용여부
        		sReturnString += " CDIV_CD=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCDIV_CD.value)); //거래처구분
        		sReturnString += " chkSAVE_YSNO=" + this.fnc_Quote("1"); //이력사항저장여부
        	}

        	return sReturnString;
        	// 생성된 String 반환
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	//this.fnc_CloseProgress(); //Service 후 Progress Bar Close

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) 
        	{
        		if (application.GBL_SESSONCHK == "E0001") 
        		{
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		}
        		else 
        		{
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	}
        	else 
        	{
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName)
        {
        	if (sMethodName == 'SEARCH00') 
        	{
        		this.fnc_Information(this.stInformation, this.dsTB_CUST.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("M1007", this.dsTB_CUST.rowcount); //정상 종료 메세지
        	}
        	else if (sMethodName == 'SEARCH01') 
        	{
        		// 탭의 메시지를 보여준다.
        	}
        	else if (sMethodName == 'SEARCH99') 
        	{
        	}
        	else if (sMethodName == 'SAVE00') 
        	{
        		this.fnc_Information(this.stInformation, 0, "SAVE"); //저장 결과 Display
        		this.fnc_Message("M1008"); //정상 종료 Message

        		// fn_Search();
        		// Tab0.tab0.grdTB_CUSTDIV.setCellProperty("head",1, "text", "0");
        		this.dsTB_CUST.setColumn(this.dsTB_CUST.rowposition, 'CUST_CODE', this.sCUST_CODE);

        
        		this.dsTB_CUST.applyChange();

        		// alert(sCUST_CODE);

        		// DetailQuery();
        	}
        	else if (sMethodName == 'PROC00') 
        	{
        		this.fnc_Message("M1046", "구매카드가맹점번호 엑셀업로드 작업이 완료 되었습니다."); //정상 종료 메세지

        		this.fn_Search();
        	}
        	else if (sMethodName == 'PROC01') 
        	{
        		this.fnc_Message("M1046", "사원계좌 엑셀업로드 작업이 완료 되었습니다."); //정상 종료 메세지

        		// fn_Search();
        	}
        	else if (sMethodName == 'PROC02') 
        	{
        		this.fnc_Message("M1046", "거래처계좌 엑셀업로드 작업이 완료 되었습니다."); //정상 종료 메세지

        		// fn_Search();
        	}
        	else if (sMethodName == 'PROC03') 
        	{
        		this.fnc_Message("M1046", "거래처담당자 엑셀업로드 작업이 완료 되었습니다."); //정상 종료 메세지

        		// fn_Search();
        	}
        	else if (sMethodName == "GetCommCode") 
        	{
        		// 공통 코드 콤보를 가져오기
        		this.dsRELT_GUBN.filter("CODDYSNO=='1'");
        		this.dsRELT_GUBN.insertRow(0);
        		this.cmbSHRCDIV_CD.set_index(0);
        		this.cmbSHRCUSTDIV_CD.set_index(0);
        		this.cmbSHRDOMEFORE_CD.set_index(0);
        		this.cmbSHRRELT_GUBN.set_index(0);
        		this.cmbSHRRELT_GUBN.set_enable(false);
        		this.cmbSHRUSE_YN.set_value("1"); //사용여부
        	}
        	else if (sMethodName == "CODENAMESEARCH00") 
        	{
        		// 코드명 조회 후 처리
        		this.fnc_MultiRowDisplay(this);
        	}
        	else if (sMethodName == "POSTSEARCH00") 
        	{
        		// 우편번호 조회 후 처리
        		this.fnc_MultiRowDisplayPost(this);
        	}
        }

        
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,nX,nY)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sResponse;
        	switch (obj.name) 
        	{
        		case "imgHelpSDEPT_NAME":
        			// 부서코드 조회

        			sSearchKind = "DEPT01"; //부서 조회 POPUP
        			sInputValue = this.fnc_Trim(this.lookup("edtSDEPT_NAME").value); //검색 조건 Text
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.lookup("edtSDEPT_NAME")); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.lookup("edtSDEPT_CODE").set_value(sResponse[0]); //결과 값 Display(부서코드)
        				this.lookup("edtSDEPT_NAME").set_value(sResponse[1]); //결과 값 Display(부서이름)
        			}
        			else 
        			{
        				this.lookup("edtSDEPT_CODE").set_value('');
        				this.lookup("edtSDEPT_NAME").set_value('');
        			}

        			break;
        		case "imgHelpADMINEMP_NM":
        			// 영업담당자조회

        			if (this.Tab0.tab0.edtADMINEMP_NM.enable == false || this.dsTB_CUST.rowcount < 1) 
        			{
        				return;
        			}

        			sSearchKind = "EMPL06"; //사원 조회 POPUP
        			sInputValue = ""; //검색 조건 Text
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.Tab0.tab0.edtADMINEMP_CD.set_value(sResponse[0]); //결과 값 Display(사번)
        				this.Tab0.tab0.edtADMINEMP_NM.set_value(sResponse[1]); //결과 값 Display(성명)
        			}
        			break;
        		case "imgHelpACNTEMP_NM":
        			// 회계담당자조회

        			if (this.Tab0.tab2.edtACNTEMP_NM.enable == false || this.dsTB_CUST.rowcount < 1) 
        			{
        				return;
        			}

        			sSearchKind = "EMPL06"; //사원 조회 POPUP
        			sInputValue = ""; //검색 조건 Text
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.Tab0.tab2.edtACNTEMP_NO.set_value(sResponse[0]); //결과 값 Display(사번)
        				this.Tab0.tab2.edtACNTEMP_NM.set_value(sResponse[1]); //결과 값 Display(성명)
        			}
        			break;
        		case "imgHelpMANAPART_NM":
        			// 관리부서조회

        			if (this.Tab0.tab0.edtMANAPART_NM.enable == false || this.dsTB_CUST.rowcount < 1) 
        			{
        				return;
        			}

        			sSearchKind = "DEPT01"; //사원 조회 POPUP
        			sInputValue = ""; //검색 조건 Text
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.Tab0.tab0.edtMANAPART_CD.set_value(sResponse[0]); //결과 값 Display(부서코드)
        				this.Tab0.tab0.edtMANAPART_NM.set_value(sResponse[1]); //결과 값 Display(부서명)
        			}
        			break;
        		case "imgHelpSHRADMINEMP_NM":
        			// 영업담당자조회

        			sSearchKind = "EMPL05"; //사원 조회 POPUP
        			sInputValue = ""; //검색 조건 Text
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRADMINEMP_CD.set_value(sResponse[0]); //결과 값 Display(사번)
        				this.edtSHRADMINEMP_NM.set_value(sResponse[1]); //결과 값 Display(성명)
        			}
        			break;
        		case "imgHelpSHRACNTEMP_NM":
        			// 회계담당자조회

        			sSearchKind = "EMPL05"; //사원 조회 POPUP
        			sInputValue = ""; //검색 조건 Text
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.lookup("edtSHRACNTEMP_NO").set_value(sResponse[0]); //결과 값 Display(사번)
        				this.lookup("edtSHRACNTEMP_NM").set_value(sResponse[1]); //결과 값 Display(성명)
        			}
        			break;
        		case "imgHelpSHRMANAPART_NM":
        			// 관리부서조회

        			sSearchKind = "DEPT01"; //사원 조회 POPUP
        			sInputValue = ""; //검색 조건 Text
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRMANAPART_CD.set_value(sResponse[0]); //결과 값 Display(부서코드)
        				this.edtSHRMANAPART_NM.set_value(sResponse[1]); //결과 값 Display(부서명)
        			}
        			break;
        		case "imgHelpADDR1_TX":
        			// 우편번호 조회

        			// 우편번호 비활성일 경우 바로 리턴
        			if (this.Tab0.tab0.edtADDR1_TX.enable == false || this.dsTB_CUST.rowcount < 1) 
        			{
        				return;
        			}

        			sSearchKind = "POST01"; //우편번호 조회 POPUP
        			sInputValue = ""; //주소
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, '', this.Tab0.tab0.edtADDR1_TX); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.Tab0.tab0.medZIPCODE_CD.set_value(sResponse[0]); //우편번호 text
        				this.Tab0.tab0.edtADDR1_TX.set_value(sResponse[1]); //주소
        				this.Tab0.tab0.cmbPOST_GUBN.set_value(sResponse[3]);
        				this.Tab0.tab0.edtADDR2_TX.setFocus();
        			}
        			break;
        		case "imgHelpSUMSHOP_NM":
        			// 대표거래처

        			// 입력란이 비활성화 이거나. 마스터에 자료가 없으면 진행하지 않는다.
        			if (this.Tab0.tab0.edtSUMSHOP_NM.enable == false || this.dsTB_CUST.rowcount < 1) 
        			{
        				return;
        			}

        			sSearchKind = "CUST02"; //집계거래처 조회 POPUP
        			sInputValue = ""; //집계거래처
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, null); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.Tab0.tab0.edtSUMSHOP_CD.set_value(sResponse[0]); //거래처 코드
        				this.Tab0.tab0.edtSUMSHOP_NM.set_value(sResponse[1]); //거래처 명
        			}
        			break;
        		case "imgHelpEMPL_NUMB":
        			// 사번조회

        			if (this.Tab0.tab0.edtEMPL_NAME.enable == false || this.dsTB_CUST.rowcount < 1) 
        			{
        				return;
        			}

        			sSearchKind = "EMPL06"; //사원 조회 POPUP
        			sInputValue = this.fnc_Trim(this.Tab0.tab0.edtEMPL_NAME.value); //검색 조건 Text
        			sCommonGubn = ""; //부서코드
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.Tab0.tab0.edtEMPL_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.Tab0.tab0.edtEMPL_NUMB.set_value(sResponse[0]); //결과 값 Display(사번)
        				this.Tab0.tab0.edtEMPL_NAME.set_value(sResponse[1]); //결과 값 Display(성명)
        			}
        			break;
        	}
        }

        /*---------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj,e)
        {
        	// 변화가 없으면 굳이 실행 하지 않는다.
        	if (obj.value == obj.UserData) 
        	{
        		return;
        	}

        	application.GBL_CUROBJ = obj; //현재 선택한 Text Object
        	var sMethodName = "CODENAMESEARCH00";
        	var sInputValue = this.fnc_Trim(obj.value);
        	var sSearchKind = "";
        	var sCommonGubn = "";

        	switch (obj.name) 
        	{
        		case "edtSDEPT_NAME":
        			// 부서명
        			sSearchKind = "DEPT01"; //부서 조회
        			application.GBL_REVOBJ1 = "edtSDEPT_CODE"; //부서 코드를 받을 Text Object명
        			application.GBL_REVOBJ2 = "edtSDEPT_NAME"; //부서 명을 Text Object명
        			break;
        		case "edtSEMPL_NAME":
        			// 성명

        			if (this.fnc_Length(this.lookup("edtSDEPT_CODE").value) != 6) 
        			{
        				sSearchKind = "EMPL02"; //사원번호 조회
        				sCommonGubn = ""; //부서코드
        			}
        			else 
        			{
        				sSearchKind = "EMPL04"; //사원번호 조회
        				sCommonGubn = this.lookup("edtSDEPT_CODE").value; //부서코드
        			}

        			application.GBL_REVOBJ1 = "edtSEMPL_NUMB"; //사번을 받을 Text Object명
        			application.GBL_REVOBJ2 = "edtSEMPL_NAME"; //성명을 명을 Text Object명
        			break;
        		case "edtADMINEMP_NM":
        			// 영업담당자성명
        			sSearchKind = "EMPL06"; //사원 조회
        			application.GBL_REVOBJ1 = "Tab0.tab0.edtADMINEMP_CD"; //사번을 받을 Text Object명
        			application.GBL_REVOBJ2 = "Tab0.tab0.edtADMINEMP_NM"; //사원명을 Text Object명
        			break;
        		case "edtACNTEMP_NM":
        			// 회계담당자성명
        			sSearchKind = "EMPL06"; //사원 조회
        			application.GBL_REVOBJ1 = "Tab0.tab2.edtACNTEMP_NO"; //사번을 받을 Text Object명
        			application.GBL_REVOBJ2 = "Tab0.tab2.edtACNTEMP_NM"; //사원명을 Text Object명
        			break;
        		case "edtMANAPART_NM":
        			// 부서명
        			sSearchKind = "DEPT01"; //부서 조회
        			application.GBL_REVOBJ1 = "Tab0.tab0.edtMANAPART_CD"; //부서코드를 받을 Text Object명
        			application.GBL_REVOBJ2 = "Tab0.tab0.edtMANAPART_NM"; //부서명을 Text Object명
        			break;
        		case "edtSHRADMINEMP_NM":
        			// 영업담당자성명
        			sSearchKind = "EMPL05"; //사원 조회
        			application.GBL_REVOBJ1 = "edtSHRADMINEMP_CD"; //사번을 받을 Text Object명
        			application.GBL_REVOBJ2 = "edtSHRADMINEMP_NM"; //사원명을 Text Object명
        			break;
        		case "edtSHRACNTEMP_NM":
        			// 회계담당자성명
        			sSearchKind = "EMPL05"; //사원 조회
        			application.GBL_REVOBJ1 = "edtSHRACNTEMP_NO"; //사번을 받을 Text Object명
        			application.GBL_REVOBJ2 = "edtSHRACNTEMP_NM"; //사원명을 Text Object명
        			break;
        		case "edtSHRMANAPART_NM":
        			// 부서명
        			sSearchKind = "DEPT01"; //부서 조회
        			application.GBL_REVOBJ1 = "edtSHRMANAPART_CD"; //부서코드를 받을 Text Object명
        			application.GBL_REVOBJ2 = "edtSHRMANAPART_NM"; //부서명을 Text Object명
        			break;

        			/* 20160322 김남호 : 우편번호 수동으로 입력되도록 주석처리
        			 아래코드는 killfocus 순간 서버에서 우편번호 정합성 체크하여 없으면 지워버림*/
        			/*case "edtADDR1_TX" :                           //우편번호 
        			 //sMethodName = "POSTSEARCH00";               //Call Back에서 체크 할 Service ID(★바꾸면 안됨★)
        			 sSearchKind = "POST01";                     //우편번호 조회
        			 GBL_REVOBJ1 = "Tab0.tab0.medZIPCODE_CD";     //우편번호 서브 코드를 받을 Text Object명
        			 GBL_REVOBJ2 = "Tab0.tab0.edtADDR1_TX";     //우편번호 서브 명을 Text Object명
        			 Tab0.tab0.edtADDR2_TX.setFocus();
        			 break;*/
        		case "edtSUMSHOP_NM":
        			// 집계거래처
        			sSearchKind = "CUST02"; //집계거래처 조회
        			application.GBL_REVOBJ1 = "Tab0.tab0.edtSUMSHOP_CD"; //집계거래처코드를 받을 Text Object명
        			application.GBL_REVOBJ2 = "Tab0.tab0.edtSUMSHOP_NM"; //집계거래처명을 Text Object명
        			break;
        		case "edtEMPL_NAME":
        			// 입력 - 사원 정보
        			sSearchKind = "EMPL06"; //프로그램 정보
        			application.GBL_REVOBJ1 = "Tab0.tab0.edtEMPL_NUMB"; //프로그램 ID Text Object명
        			application.GBL_REVOBJ2 = "Tab0.tab0.edtEMPL_NAME"; //프로그램 명 Text Object명
        			break;
        	}

        	// 조회 서비스 실행
        	this.fnc_CodeNameSearch(this, sMethodName, sSearchKind, sInputValue, sCommonGubn);

        
        	/*if(Tab0.tab0.medZIPCODE_CD.value == "") {
        	 Tab0.tab0.cmbPOST_GUBN.index = 0;
        	 } else {
        	 Tab0.tab0.cmbPOST_GUBN.index = 1;
        	 }*/
        }

        this.fn_ZIPCodeChanged = function (obj,e)
        {
        	switch (obj.name) 
        	{
        		/* 20160322 김남호 : 우편번호 입력시 주소구분(신/구) 자동 체크 */
        		case "medZIPCODE_CD":
        			// 우편번호
        			// if(Tab0.tab0.medZIPCODE_CD.value == "") {
        			if (this.fnc_Length(this.fnc_Trim(this.Tab0.tab0.medZIPCODE_CD.value)) < 5) 
        			{
        				this.Tab0.tab0.cmbPOST_GUBN.set_index(0);
        			}
        			else if (this.fnc_Length(this.fnc_Trim(this.Tab0.tab0.medZIPCODE_CD.value)) == 6) 
        			{
        				this.Tab0.tab0.cmbPOST_GUBN.set_index(1); //구주소(지번주소)
        			}
        			else 
        			{
        				this.Tab0.tab0.cmbPOST_GUBN.set_index(2); //신주소(도로명주소)
        			}
        			break;
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	if (obj.getCellProperty("head", e.cell, "edittype") == "checkbox") 
        	{
        		this.fn_GridSelChk(obj, "CHK", e.cell);
        	}
        	else 
        	{
        		// 특정 Head 클릭 시 해당 항목으로 Sort(만약 특정 컬럼을 누를때만 소트하고자 한다면 nCell로 조건)
        		if (e.cell == 0) 
        		{
        			return;
        		}
        		this.fnc_GridSort(obj, obj.binddataset, e.col);
        	}
        }

        /*===============================================================
         Grid 일괄 Check 처리
         ===============================================================*/
        this.fn_GridSelChk = function (objGrd,chk_col,nCell)
        {
        	// if(/* Editable은 지원되지 않는 속성입니다. */ objGrd.Editable == false) return;
        	if (/* Editable은 지원되지 않는 속성입니다. */objGrd.enable == false) 
        	{
        		return;
        	}
        	var objDs = objGrd.binddataset;

        	if (objGrd.getCellProperty("head", nCell, "text") == 1) 
        	{
        		objGrd.setCellProperty("head", nCell, "text", "0");
        		this.fn_SetGrdChk(0, objDs, chk_col);
        	}
        	else 
        	{
        		objGrd.setCellProperty("head", nCell, "text", "1");
        		this.fn_SetGrdChk(1, objDs, chk_col);
        	}
        }

        /*===============================================================
         Dataset Check Toggle 처리
         ===============================================================*/
        this.fn_SetGrdChk = function (chk_val,objDs,chk_col)
        {
        	for (var i=0; i < this.all[objDs].getRowCount(); i++) 
        	{
        		this.all[objDs].setColumn(i, chk_col, chk_val);
        	}
        }

        /*-----------------------+
         |  거래처담당자 입력시  |
         +------------------------*/
        this.Tab0_tab4_btnInput01_OnClick = function (obj,e)
        {
        	// 거래처 선택 체크
        	if (this.dsTB_CUST.rowcount < 1) 
        	{
        		// fnc_Message("M1046","거래처를 선택하세요");
        		return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUST.getColumn(this.dsTB_CUST.rowposition, "CUST_CODE"))) < 1) 
        	{
        		this.fnc_Message("M1046", "저장 버튼을 클릭해 거래처코드 생성후에 작업하시기 바랍니다.");
        		return false;
        	}

        	var iRow = this.dsTB_CUSTMAN.addRow();
        	this.dsTB_CUSTMAN.setColumn(iRow, "CUST_CODE", this.dsTB_CUST.getColumn(this.dsTB_CUST.rowposition, "CUST_CODE")); //거래처코드
        	this.dsTB_CUSTMAN.setColumn(iRow, "SEQ", this.dsTB_CUSTMAN.getMax("SEQ") + 1); //순번

        	this.Tab0.tab4.grdTB_CUSTMAN.setFocus();
        	this.Tab0.tab4.grdTB_CUSTMAN.setCellPos(0);
        }

        /*-----------------------+
         |  거래처담당자 삭제시  |
         +------------------------*/
        this.Tab0_tab4_btnDelete_OnClick = function (obj,e)
        {
        	// 삭제 할 자료가 있는지 여부를 체크
        	if (this.dsTB_CUSTMAN.getRowCount() > 0) 
        	{
        		if (this.fn_DeleteCheck("TB_CUSTMAN")) 
        		{
        			// 선택 Row 삭제
        			this.dsTB_CUSTMAN.deleteSelectedRows();
        		}
        		else 
        		{
        			this.fnc_Message("M1061"); //삭제 자료 없음 정보 Display
        		}
        	}
        }

        /*-----------------------+
         |  거래계좌 입력시  |
         +------------------------*/
        this.Tab0_tab5_btnInput02_OnClick = function (obj,e)
        {
        	// 거래처 선택 체크
        	if (this.dsTB_CUST.rowcount < 1) 
        	{
        		// fnc_Message("M1046","거래처를 선택하세요");
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsTB_CUST.getColumn(this.dsTB_CUST.rowposition, "CUST_CODE"))) < 1) 
        	{
        		this.fnc_Message("M1046", "저장 버튼을 클릭해 거래처코드 생성후에 작업하시기 바랍니다.");
        		return false;
        	}

        	var iRow = this.dsTB_CUSTACNT.addRow();
        	this.dsTB_CUSTACNT.setColumn(iRow, 'CUST_CODE', this.dsTB_CUST.getColumn(this.dsTB_CUST.rowposition, "CUST_CODE")); //거래처코드

        	this.Tab0.tab5.grdTB_CUSTACNT.setFocus();
        	this.Tab0.tab5.grdTB_CUSTACNT.setCellPos(1);
        }

        /*-----------------------+
         |  거래계좌 삭제시  |
         +------------------------*/
        this.Tab0_tab5_btnDelete02_OnClick = function (obj,e)
        {
        	// 삭제 할 자료가 있는지 여부를 체크
        	if (this.dsTB_CUSTACNT.getRowCount() > 0) 
        	{
        		if (this.fn_DeleteCheck("TB_CUSTACNT")) 
        		{
        			// 선택 Row 삭제
        			this.dsTB_CUSTACNT.deleteSelectedRows();
        		}
        		else 
        		{
        			this.fnc_Message("M1061"); //삭제 자료 없음 정보 Display
        		}
        	}
        }

        

        /*------------------------+
         | Grid Help Button Clikc  |
         +-------------------------*/
        this.fn_OpenGridPopup = function (obj,e)
        {
        	// trace( " obj.getCellValue(e.row,e.cell) : " + obj.getCellValue(e.row,e.cell) );

        	this.fn_OpenDetailWindow(obj, e.row, e.cell, obj.getCellValue(e.row, e.cell), -1);

        	this.Tab0.tab5.grdTB_CUSTACNT.moveToNextCell();
        }

        /*---------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_OpenDetailWindow = function (obj,nRow,nCell,strVal,nPivotIndex)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	// if(ToUpper(grdTB_CUSACNT.GetCellProp("body", 2, "Edit"))=="NONE") return;

        	sSearchKind = "COMM2"; //공통코드 조회
        	sInputValue = this.fnc_Trim(strVal); //검색 조건 Text
        	sCommonGubn = "FC02"; //공통 구분 코드(공통코드 조회가 아니면 null)
        	this.lookupSetter("sResponse", "set_sResponse").set(this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.Tab0.tab5.grdTB_CUSTACNT)); //Popup Open

        
        	if (this.fnc_Length(this.fnc_Trim(this.sResponse)) != 0) 
        	{
        		this.dsTB_CUSTACNT.set_enableevent(false);
        		this.dsTB_CUSTACNT.setColumn(nRow, "BANK_CODE", this.sResponse[0]); //결과 값 Display(Select 컬럼 순서대로 0,1,2..)
        		this.dsTB_CUSTACNT.setColumn(nRow, "BANK_NAME", this.sResponse[1]); //결과 값 Display(Select 컬럼 순서대로 0,1,2..)
        		this.dsTB_CUSTACNT.set_enableevent(true);
        	}
        	else 
        	{
        		this.dsTB_CUSTACNT.set_enableevent(false);
        		this.dsTB_CUSTACNT.setColumn(nRow, "BANK_CODE", ""); //결과 값 Display(Select 컬럼 순서대로 0,1,2..)
        		this.dsTB_CUSTACNT.setColumn(nRow, "BANK_NAME", ""); //결과 값 Display(Select 컬럼 순서대로 0,1,2..)
        		this.dsTB_CUSTACNT.set_enableevent(true);
        	}
        }
        /*------------------------------------+
         |  DataSet 컬럼에 변화가 있는지 여부  |
         +-------------------------------------*/
        this.dsTB_CUSTACNT_OnColumnChanged = function (obj,e)
        {
        	if (e.oldvalue == e.newvalue) 
        	{
        		return;
        	}
        	if (e.columnid == "BANK_NAME") 
        	{
        		if (this.fnc_Length(this.fnc_Trim(e.newvalue)) < 1) 
        		{
        			this.dsTB_CUSTACNT.setColumn(e.row, 'BANK_CODE', ''); //은행코드
        		}
        		else 
        		{
        			this.fn_OpenDetailWindow(obj, e.row, 1, e.newvalue, -1);
        		}

        		return;
        	}
        }

        
        /*---------------------------------+
         |  In Grid Enter Then Next Column  |
         +----------------------------------*/
        this.fn_NextColumn = function (obj,e)
        {
        	trace(" fn_NextColumn  : " + e.eventid);
        	obj.moveToNextCell();
        }

        this.Tab0_tab5_grdTB_CUSTACNT_onkeydown = function (obj,e)
        {
        	if (e.keycode != 13) 
        	{
        		return;
        	}
        	trace(" e.keycode  : " + e.keycode);

        	obj.moveToNextCell();

        	trace(" moveToNextCell  : " + e.keycode);
        }

        
        /*---------------------------------+
         |  KeyFieldDisible 처리   |
         +----------------------------------*/
        this.dsTB_CUSTDIV_OnRowPosChanged = function (obj,e)
        {
        	var nRow = e.newrow;
        	var nOldRow = e.oldrow;
        	if (nRow == -1) 
        	{
        		return;
        	}

        	if (this.fnc_ToUpper(obj.getRowType(nRow)) == "INSERT") 
        	{
        		// 해당 Row의 Type이 INSERT일 경우에 Grid의 품목코드 수정 가능
        		this.Tab0.tab0.grdTB_CUSTDIV.setCellProperty("body", 1, "edittype", "combo");
        	}
        	else 
        	{
        		// 해당 Row의 Type이 INSERT가 아닐 경우에 Grid의 품목코드 수정 불가능

        		this.Tab0.tab0.grdTB_CUSTDIV.setCellProperty("body", 1, "edittype", "none");
        	}
        }

        this.dsTB_CUST_CanRowPosChange = function (obj,e)
        {
        	// 2014-09-22 : jyh : 거래처 마스터 정보는 하나의 데이터 셋으로 통합 관리한다.
        	// 변경 체크 대상에서 마스터 테이블은 제외한다.
        	if (this.fnc_DatasetChangeCheck("dsTB_CUSTDIV") || this.fnc_DatasetChangeCheck("dsTB_CUSTMAN") || this.fnc_DatasetChangeCheck("dsTB_CUSTACNT") ) 
        	{
        		if (this.fnc_Message("M1023") == false) 
        		{
        			return false;
        		}

        		// 신규 입력된 라인이라면 해당 정보를 삭제하는 로직을 생각해 본다.
        		// 다른 라인의 수정 사항이 있는경우 전체 초기화하면 안되므로 아래 로직은 주석으로 막는다.
        		// fnc_DataSetCancel(dsTB_CUST);          //취소 할 DataSet의 이름을 입력한다.
        	}
        }

        this.fn_OnRowPosChanged = function (obj,e)
        {
        	if (obj.name == "dsTB_CUST") 
        	{
        		if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == "INSERT") 
        		{
        			this.dsTB_CUSTMAN.clearData();
        			this.dsTB_CUSTACNT.clearData();
        			this.dsTB_CUSTDIV.clearData();
        		}
        		else 
        		{
        			this.DetailQuery();
        		}

        		if (obj.getColumn(e.newrow, "CDIV_CD") == "TS100010") 
        		{
        			// 관계사면
        			this.Tab0.tab0.cmbRELT_GUBN.set_enable(true);
        			this.Tab0.tab0.calRELT_STDT.set_enable(true);
        			this.Tab0.tab0.calRELT_EDDT.set_enable(true);
        		}
        		else 
        		{
        			this.Tab0.tab0.cmbRELT_GUBN.set_enable(false);
        			this.Tab0.tab0.calRELT_STDT.set_enable(false);
        			this.Tab0.tab0.calRELT_EDDT.set_enable(false);
        		}

        
        		if (obj.getColumn(e.newrow, "COPRDIV_CD") == '1') 
        		{
        			// 법인
        			this.Tab0.tab0.medREGS_NO.set_mask('###-##-#####');
        			this.Tab0.tab0.stREGS_NO.set_text('사업자번호');
        		}
        		else 
        		{
        			// 개인
        			this.Tab0.tab0.medREGS_NO.set_mask('######-#######');
        			this.Tab0.tab0.stREGS_NO.set_text('주민등록번호');
        		}
        	}
        }

        this.DetailQuery = function ()
        {
        	this.dsTB_CUSTMAN.clearData();
        	this.dsTB_CUSTACNT.clearData();
        	this.dsTB_CUSTDIV.clearData();

        	if (this.dsTB_CUST.rowcount == 0) 
        	{
        		return;
        	}

        	if (this.fnc_Length(this.dsTB_CUST.getColumn(this.dsTB_CUST.rowposition, "CUST_CODE")) < 6) 
        	{
        		return;
        	}

        	// 기본정보/해외바이어의 dataset을 서버에서 가져온다.
        	// 2014-09-22 : 거래처 해더 정보는 그리드와 통합관리 할것이므로 세부 조회에서 제외한다.
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTB_CUSTMAN=dsTB_CUSTMAN dsTB_CUSTACNT=dsTB_CUSTACNT dsTB_CUSTDIV=dsTB_CUSTDIV";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        

        /*-----------------------------------------+
         |  팝업으로 호출될때 변수를 셋팅한다.  |
         +-----------------------------------------*/
        this.fn_SetPopupArgument = function ()
        {
        	// 메인메뉴 트리에서 클릭시 하단 파라메터들이 설정 되어 있지 않아
        	// 오류가 발생한다.
        	// try 구문으로 오류 발생시 무시하도록 한다.
        	try 
        	{
        		if (this.lookup("pLoadForm") != null) 
        		{
        			this.sLoadForm = this.lookup("pLoadForm");
        		}
        		if (this.lookup("pSHRCUST_CODE") != null) 
        		{
        			this.sSHRCUST_CODE = this.lookup("pSHRCUST_CODE");
        		}
        	}
        	catch (e) 
        	{
        		trace(e.message);
        	}
        }

        this.fn_OnColumnChanged = function (obj,e)
        {
        	if (obj.name == "dsTB_CUST") 
        	{
        		if (e.columnid == "CDIV_CD") 
        		{
        			// 거래처 구분
        			if (e.newvalue == "TS100010") 
        			{
        				// 관계사면
        				this.Tab0.tab0.cmbRELT_GUBN.set_enable(true);
        				this.Tab0.tab0.calRELT_STDT.set_enable(true);
        				this.Tab0.tab0.calRELT_EDDT.set_enable(true);
        			}
        			else 
        			{
        				this.Tab0.tab0.cmbRELT_GUBN.set_enable(false);
        				this.Tab0.tab0.calRELT_STDT.set_enable(false);
        				this.Tab0.tab0.calRELT_EDDT.set_enable(false);
        				obj.setColumn(e.row, "RELT_GUBN", "");
        				obj.setColumn(e.row, "RELT_STDT", "");
        				obj.setColumn(e.row, "RELT_EDDT", "");
        			}
        		}

        		if (e.columnid == "COPRDIV_CD") 
        		{
        			if (e.newvalue == '1') 
        			{
        				// 법인
        				this.Tab0.tab0.medREGS_NO.set_mask('###-##-#####');
        				this.Tab0.tab0.stREGS_NO.set_text('사업자번호');
        			}
        			else 
        			{
        				// 개인
        				this.Tab0.tab0.medREGS_NO.set_mask('######-#######');
        				this.Tab0.tab0.stREGS_NO.set_text('주민등록번호');
        			}
        		}
        	}
        }

        // 2014.10.15.PIH : 거래처담당자 대표는 한명만 가능!
        this.dsTB_CUSTMAN_onncolumnchanged = function (obj,e)
        {
        	var iRow = e.row;

        	if (e.columnid == "TAX_YN") 
        	{
        		for (var i = 0; i < this.dsTB_CUSTMAN.getRowCount(); i++) 
        		{
        			if (i != iRow) 
        			{
        				this.dsTB_CUSTMAN.setColumn(i, "TAX_YN", "0");
        			}
        		}
        	}
        }

        // 거래처구분에 따른 관계사구분
        this.cmbSHRCDIV_CD_onitemchanged = function (obj,e)
        {
        	if (obj.value == "TS100010") 
        	{
        		// 관계사면
        		this.cmbSHRRELT_GUBN.set_enable(true);
        	}
        	else 
        	{
        		this.cmbSHRRELT_GUBN.set_index(0);
        		this.cmbSHRRELT_GUBN.set_enable(false);
        	}
        }

        /*-----------------------------------------+
         |  거래처정보 양식파일 다운로드 클릭 時|
         +------------------------------------------*/
        this.fn_ExcelFileDown = function (obj,e)
        {
        	// 양식받기는 고정값('upload/sample/') 으로 지정한다..
        	// 엑셀양식은 기존의 명칭을 사용한다..
        	var folderName = 'upload/sample/';
        	var fileName = 'UpSample_CustInformation.xls';

        	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        }

        /*------------------------------------------+
         |  거래처정보 양식파일 업로드 클릭 時   |
         +-------------------------------------------*/
        this.fn_ExcelUpLoad = function (obj,e)
        {
        	// //엑셀 파일 열기 처리
        	// fdFileDialog.Type = "OPEN";
        	// fdFileDialog.Filter = "Excel(.xls)|*.xls|Excel(.xlsx)|*.xlsx|";
        	// var result = fdFileDialog.Open();
        	// 
        	// if (result) {
        	// var strFilePath= fdFileDialog.FilePath + '\\' + fdFileDialog.FileName;
        	// ext_ExcelImportByIndex(strFilePath, 0,"dsFS_ASCHXL", 1, 1, 0, 2, 1);
        	// } else {
        	// return;
        	// }

        	// 2014. 신규
        	var fdNSE_FILE = new FileDialog();
        	var vfNSE_FILE = new VirtualFile();

        	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");

        	var vFile = fdNSE_FILE.open("거래처정보등록 엑셀 업로드", FileDialog.LOAD, "%MYDOCUMENT%");

        	if (vFile == null) 
        	{
        		return false;
        	}

        	var objExtComm = new ExtCommon();

        	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);

        	this.dsTB_CUST_TEMP.set_updatecontrol(false);

        	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) 
        	{
        		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) 
        		{
        			var nRow = this.dsTB_CUST_TEMP.addRow();

        			this.dsTB_CUST_TEMP.setColumn(nRow, 'CDIV_CD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))); //거래처구분
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'RELT_GUBN', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //관계사구분
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'SHOP_NM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 2))); //거래처명
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'SHOPABB_NM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 3))); //거래처명(약)
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'BOSS_NM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 4))); //대표자명
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'COPRDIV_CD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 5))); //사업자/개인
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'REGS_NO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 6))); //사업자/주민번호
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'COPR_NO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 7))); //법인등록번호
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'DOMEFORE_CD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 8))); //국내외구분
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'ADMINEMP_CD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 9))); //담당자사원번호
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'MANAPART_CD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 10))); //관리부서
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'COPRT_CONT', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 11))); //업태
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'COPRJ_CONT', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 12))); //업종
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'ZIPCODE_CD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 13))); //우편번호
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'POST_GUBN', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 14))); //우편번호구분
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'ADDR1_TX', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 15))); //주소
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'ADDR2_TX', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 16))); //상세주소
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'TEL_NO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 17))); //전화번호
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'FAX_NO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 18))); //팩스번호
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'REPRST_EMAIL', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 19))); //대표이메일
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'OPEN_DT', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 20))); //거래시작일
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'CLOSE_DT', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 21))); //거래종료일
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'USE_YN', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 22))); //사용여부
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'SHOPVAT_NM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 23))); //부가세신고용명칭
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'JONGSAE_NO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 24))); //종사업장승인번호
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'JOIN_NO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 25))); //구매카드 가맹점 번호
        			this.dsTB_CUST_TEMP.setColumn(nRow, 'EMPL_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 26))); //사원번호
        		}
        	}

        	this.dsTB_CUST_TEMP.set_updatecontrol(true);

        	// 복사 전 체크
        	if (this.fn_ExcelUploadCheck(this.dsTB_CUST_TEMP)) 
        	{
        		// TEMP DataSet에서 복사.
        		this.dsTB_CUST.copyData(this.dsTB_CUST_TEMP);

        		// 복사해온 Row Status는 Insert Type.
        		this.dsTB_CUST.set_updatecontrol(false);
        		for (var i = 0; i < this.dsTB_CUST.getRowCount(); i++) 
        		{
        			this.dsTB_CUST.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}
        		this.dsTB_CUST.set_updatecontrol(true);

        		this.stInformation.set_text((this.dsTB_CUST.rowcount + "개의 데이타를 로드 했습니다."));

        		this.dsTB_CUST.set_rowposition(0);

        		this.grdTB_CUST.setFocus();
        	}

        	this.dsTB_CUST_TEMP.clearData();

        	// 엑셀 업로드 체크 처리
        	/*	var sMethodName = "SAVE01";                      
        	 var sInDataSet  = "dsTB_CUST=dsTB_CUST:A";
        	 var sOutDataSet = "dsTB_CUST=dsTB_CUST";
        	 var sArgument   = fn_CreateArgument(sMethodName);
        	 
        	 fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	 */
        }

        /*-----------------------+
         |  엑셀 업로드 전 처리 ! |
         +------------------------*/
        this.fn_ExcelUploadCheck = function (dataSet)
        {
        	if (dataSet.getRowCount() < 1) 
        	{
        		this.fnc_Message("M1046", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}

        	// 거래처정보
        	if (dataSet.name == 'dsTB_CUST_TEMP') 
        	{
        		// 필수 입력 항목 체크
        		for (var i = 0; i < dataSet.getRowCount(); i++) 
        		{
        			// 거래처구분
        			if (this.fnc_Trim(dataSet.getColumn(i, "CDIV_CD")) == "TS100010") 
        			{
        				if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "RELT_GUBN"))) < 3) 
        				{
        					this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 관계사코드가 잘못되었습니다.");
        					return false;
        				}
        			}
        			else if (this.fnc_Trim(dataSet.getColumn(i, "CDIV_CD")) == "TS100020") 
        			{
        				dataSet.setColumn(i, "RELT_GUBN", "");
        			}
        			else 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 거래처구분이 잘못되었습니다.");
        				return false;
        			}

        			// 거래처명
        			if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "SHOP_NM"))) < 1) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 거래처명이 잘못되었습니다.");
        				return false;
        			}

        			// 대표자명
        			if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "BOSS_NM"))) < 1) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 대표자명이 잘못되었습니다.");
        				return false;
        			}

        			// 사업자/개인 구분(미입력 or 잘 못 입력時 사업자로 간주)
        			if (this.fnc_Trim(dataSet.getColumn(i, "COPRDIV_CD")) == "1") 
        			{
        				if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "REGS_NO"))) < 10) 
        				{
        					this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 사업자번호가 잘못되었습니다.");
        					return false;
        				}
        			}
        			else if (this.fnc_Trim(dataSet.getColumn(i, "COPRDIV_CD")) == "2") 
        			{
        				if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "REGS_NO"))) < 13) 
        				{
        					this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 주민등록번호가 잘못되었습니다.");
        					return false;
        				}
        			}
        			else 
        			{
        				if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "REGS_NO"))) < 10) 
        				{
        					this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 사업자번호가 잘못되었습니다.");
        					return false;
        				}
        				dataSet.setColumn(i, "COPRDIV_CD", "1");
        			}

        			// 법인등록번호
        			if (!this.IsNull(dataSet.getColumn(i, "COPR_NO"))) 
        			{
        				if (this.fnc_Length(dataSet.getColumn(i, "COPR_NO")) < 13) 
        				{
        					this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 법인등록번호가 잘못되었습니다.");
        					return false;
        				}
        			}

        			// 거래시작일자
        			if (!this.fnc_IsDate(dataSet.getColumn(i, "OPEN_DT"))) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 거래시작일자가 잘못되었습니다.");
        				return false;
        			}

        			// 거래종료일자
        			if (!this.IsNull(dataSet.getColumn(i, "CLOSE_DT"))) 
        			{
        				if (!this.fnc_IsDate(dataSet.getColumn(i, "CLOSE_DT"))) 
        				{
        					this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 거래종료일자가 잘못되었습니다.");
        					return false;
        				}
        			}

        			// 사용여부(미입력 or 잘 못 입력時 사용으로 간주)
        			if (!(this.fnc_Trim(dataSet.getColumn(i, "USE_YN")) == "0") && !(this.fnc_Trim(dataSet.getColumn(i, "USE_YN")) == "1")) 
        			{
        				dataSet.setColumn(i, "USE_YN", "1");
        			}

        			// 국내외구분(미입력 or 잘 못 입력時 국내로 간주)
        			if (!(this.fnc_Trim(dataSet.getColumn(i, "DOMEFORE_CD")) == "HR760010") && !(this.fnc_Trim(dataSet.getColumn(i, "DOMEFORE_CD")) == "HR760020")) 
        			{
        				dataSet.setColumn(i, "DOMEFORE_CD", "HR760010");
        			}
        		}

        		// 사원계좌
        	}
        	else if (dataSet.name == 'dsTB_CUSTACNT_EMPL') 
        	{
        		for (var i = 0; i < dataSet.getRowCount(); i++) 
        		{
        			if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "EMPL_NUMB"))) != 7) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 사번이 잘못되었습니다.");
        				return false;
        			}
        			else if (this.fnc_Trim(dataSet.getColumn(i, "ACNTDIV_CD")) != "TS170010") 
        			{
        				dataSet.setColumn(i, "ACNTDIV_CD", "TS170010");
        			}
        			else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "BANK_CODE"))) != 3) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 금융기관코드가 잘못되었습니다.");
        				return false;
        			}
        			else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "ACNT_NUMB"))) < 1) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 계좌번호가 잘못되었습니다.");
        				return false;
        			}
        			else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "ACNT_MANM"))) < 1) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 예금주가 잘못되었습니다.");
        				return false;
        			}
        			else if (this.fnc_Trim(dataSet.getColumn(i, "MAINACNT_YN")) != '1' && this.fnc_Trim(dataSet.getColumn(i, "MAINACNT_YN")) != '0') 
        			{
        				dataSet.setColumn(i, "MAINACNT_YN", "0");
        			}
        		}
        	}
        	else if (dataSet.name == 'dsTB_CUSTACNT_CUST') 
        	{
        		for (var i = 0; i < dataSet.getRowCount(); i++) 
        		{
        			if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "REGS_NO"))) < 10) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 사업자번호가 잘못되었습니다.");
        				return false;
        			}
        			else if (this.fnc_Trim(dataSet.getColumn(i, "ACNTDIV_CD")) != "TS170010") 
        			{
        				dataSet.setColumn(i, "ACNTDIV_CD", "TS170010");
        			}
        			else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "BANK_CODE"))) != 3) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 금융기관코드가 잘못되었습니다.");
        				return false;
        			}
        			else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "ACNT_NUMB"))) < 1) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 계좌번호가 잘못되었습니다.");
        				return false;
        			}
        			else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "ACNT_MANM"))) < 1) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 예금주가 잘못되었습니다.");
        				return false;
        			}
        			else if (this.fnc_Trim(dataSet.getColumn(i, "MAINACNT_YN")) != '1' && this.fnc_Trim(dataSet.getColumn(i, "MAINACNT_YN")) != '0') 
        			{
        				dataSet.setColumn(i, "MAINACNT_YN", "0");
        			}
        		}
        	}
        	else if (dataSet.name == 'dsTB_CUSTMAN_TEMP') 
        	{
        		for (var i = 0; i < dataSet.getRowCount(); i++) 
        		{
        			if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "REGS_NO"))) < 10) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 사업자번호가 잘못되었습니다.");
        				return false;
        			}
        			else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "MAN_NM"))) < 1) 
        			{
        				this.fnc_Message("M1046", "엑셀파일의 " + (i + 1) + "번째 Row의 담당자명이 잘못되었습니다.");
        				return false;
        			}
        			else if (this.fnc_Trim(dataSet.getColumn(i, "TAX_YN")) != '1' && this.fnc_Trim(dataSet.getColumn(i, "TAX_YN")) != '0') 
        			{
        				dataSet.setColumn(i, "TAX_YN", "0");
        			}
        		}
        	}
        	else 
        	{
        		return false;
        	}

        	return true;
        }

        /*----------------------------------------------+
         |  구매카드가맹점 양식파일 업로드 클릭 時   |
         +-----------------------------------------------*/
        this.fn_ExcelUpLoad2 = function (obj,e)
        {
        	// 2014. 신규
        	var fdNSE_FILE = new FileDialog();
        	var vfNSE_FILE = new VirtualFile();

        	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");

        	var vFile = fdNSE_FILE.open("구매카드가맹점번호 엑셀업로드", FileDialog.LOAD, "%MYDOCUMENT%");

        	if (vFile == null) 
        	{
        		return false;
        	}

        	var objExtComm = new ExtCommon();

        	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);

        	this.dsTB_JOINNO.set_updatecontrol(false);

        	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) 
        	{
        		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) 
        		{
        			var nRow = this.dsTB_JOINNO.addRow();

        			this.dsTB_JOINNO.setColumn(nRow, 'REGS_NO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))); //사업자/주민번호
        			this.dsTB_JOINNO.setColumn(nRow, 'JOIN_NO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //구매카드 가맹점 번호
        		}
        	}

        	// trace(dsTB_JOINNO.saveXML());
        	// 
        	// dsTB_JOINNO.deleteRow(0);
        	// 
        	// trace(dsTB_JOINNO.saveXML());
        	// 
        	this.dsTB_JOINNO.set_updatecontrol(true);

        	// 저장 여부 확인
        	if (this.fnc_Message("M1070", this.dsTB_JOINNO.rowcount + "개의 데이타를 업로드 하시겠습니까") == false) 
        	{
        		this.dsTB_JOINNO.clearData();
        		return false;
        	}

        	var sMethodName = "PROC00";
        	var sInDataSet = "dsTB_JOINNO=dsTB_JOINNO:A";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTB_CUST.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*------------------------------------------------+
         |  구매카드가맹점 양식파일 다운로드 클릭 時   |
         +-------------------------------------------------*/
        this.fn_ExcelFileDown2 = function (obj,e)
        {
        	// 양식받기는 고정값('upload/sample/') 으로 지정한다..
        	// 엑셀양식은 기존의 명칭을 사용한다..
        	var folderName = 'upload/sample/';
        	var fileName = 'UpSample_SaleNumber.xls';

        	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        }

        
        /*----------------------------------------+
         |  사원계좌 양식파일 업로드 클릭 時   |
         +-----------------------------------------*/
        this.fn_ExcelUpLoad3 = function (obj,e)
        {
        	// 2014. 신규
        	var fdNSE_FILE = new FileDialog();
        	var vfNSE_FILE = new VirtualFile();

        	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");

        	var vFile = fdNSE_FILE.open("사원계좌 엑셀업로드", FileDialog.LOAD, "%MYDOCUMENT%");

        	if (vFile == null) 
        	{
        		return false;
        	}

        	var objExtComm = new ExtCommon();

        	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);

        	this.dsTB_CUSTACNT_EMPL.set_updatecontrol(false);

        	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) 
        	{
        		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) 
        		{
        			var nRow = this.dsTB_CUSTACNT_EMPL.addRow();

        			this.dsTB_CUSTACNT_EMPL.setColumn(nRow, 'EMPL_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))); //사원번호
        			this.dsTB_CUSTACNT_EMPL.setColumn(nRow, 'ACNTDIV_CD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //계좌구분
        			this.dsTB_CUSTACNT_EMPL.setColumn(nRow, 'BANK_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 2))); //은행코드
        			this.dsTB_CUSTACNT_EMPL.setColumn(nRow, 'BANK_NAME', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 3))); //은행명
        			this.dsTB_CUSTACNT_EMPL.setColumn(nRow, 'ACNT_NUMB', this.fnc_Replace(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 4)), "-", "")); //계좌번호
        			this.dsTB_CUSTACNT_EMPL.setColumn(nRow, 'ACNT_MANM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 5))); //예금주
        			this.dsTB_CUSTACNT_EMPL.setColumn(nRow, 'MAINACNT_YN', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 6))); //주거래여부
        		}
        	}

        	this.dsTB_CUSTACNT_EMPL.set_updatecontrol(true);

        	// 체크
        	if (this.fn_ExcelUploadCheck(this.dsTB_CUSTACNT_EMPL)) 
        	{
        		this.dsTB_CUSTACNT_EMPL.set_updatecontrol(false);

        		for (var i = 0; i < this.dsTB_CUSTACNT_EMPL.getRowCount(); i++) 
        		{
        			this.dsTB_CUSTACNT_EMPL.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}

        		this.dsTB_CUSTACNT_EMPL.set_updatecontrol(true);

        		// 저장 여부 확인
        		if (this.fnc_Message("M1070", this.dsTB_CUSTACNT_EMPL.rowcount + "개의 데이타를 업로드 하시겠습니까") == false) 
        		{
        			this.dsTB_CUSTACNT_EMPL.clearData();
        			return false;
        		}

        		var sMethodName = "PROC01";
        		var sInDataSet = "dsTB_CUSTACNT_EMPL=dsTB_CUSTACNT_EMPL:A";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        		this.grdTB_CUST.setFocus();
        	}

        	this.dsTB_CUSTACNT_EMPL.clearData();
        }

        /*------------------------------------------+
         |  사원계좌 양식파일 다운로드 클릭 時   |
         +-------------------------------------------*/
        this.fn_ExcelFileDown3 = function (obj,e)
        {
        	// 양식받기는 고정값('upload/sample/') 으로 지정한다..
        	// 엑셀양식은 기존의 명칭을 사용한다..
        	var folderName = 'upload/sample/';
        	var fileName = 'UpSample_EmplAccount.xls';

        	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        }

        /*------------------------------------------+
         |  거래처계좌 양식파일 업로드 클릭 時   |
         +-------------------------------------------*/
        this.fn_ExcelUpLoad4 = function (obj,e)
        {
        	// 2014. 신규
        	var fdNSE_FILE = new FileDialog();
        	var vfNSE_FILE = new VirtualFile();

        	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");

        	var vFile = fdNSE_FILE.open("거래처계좌 엑셀업로드", FileDialog.LOAD, "%MYDOCUMENT%");

        	if (vFile == null) 
        	{
        		return false;
        	}

        	var objExtComm = new ExtCommon();

        	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);

        	this.dsTB_CUSTACNT_CUST.set_updatecontrol(false);

        	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) 
        	{
        		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) 
        		{
        			var nRow = this.dsTB_CUSTACNT_CUST.addRow();

        			this.dsTB_CUSTACNT_CUST.setColumn(nRow, 'REGS_NO', this.fnc_Replace(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0)), "-", "")); //사업자번호
        			this.dsTB_CUSTACNT_CUST.setColumn(nRow, 'ACNTDIV_CD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //계좌구분
        			this.dsTB_CUSTACNT_CUST.setColumn(nRow, 'BANK_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 2))); //은행코드
        			this.dsTB_CUSTACNT_CUST.setColumn(nRow, 'BANK_NAME', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 3))); //은행명
        			this.dsTB_CUSTACNT_CUST.setColumn(nRow, 'ACNT_NUMB', this.fnc_Replace(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 4)), "-", "")); //계좌번호
        			this.dsTB_CUSTACNT_CUST.setColumn(nRow, 'ACNT_MANM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 5))); //예금주
        			this.dsTB_CUSTACNT_CUST.setColumn(nRow, 'MAINACNT_YN', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 6))); //주거래여부
        		}
        	}

        	this.dsTB_CUSTACNT_CUST.set_updatecontrol(true);

        	// 체크
        	if (this.fn_ExcelUploadCheck(this.dsTB_CUSTACNT_CUST)) 
        	{
        		this.dsTB_CUSTACNT_CUST.set_updatecontrol(false);

        		for (var i = 0; i < this.dsTB_CUSTACNT_CUST.getRowCount(); i++) 
        		{
        			this.dsTB_CUSTACNT_CUST.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}

        		this.dsTB_CUSTACNT_CUST.set_updatecontrol(true);

        		// 저장 여부 확인
        		if (this.fnc_Message("M1070", this.dsTB_CUSTACNT_CUST.rowcount + "개의 데이타를 업로드 하시겠습니까") == false) 
        		{
        			this.dsTB_CUSTACNT_CUST.clearData();
        			return false;
        		}

        		var sMethodName = "PROC02";
        		var sInDataSet = "dsTB_CUSTACNT_CUST=dsTB_CUSTACNT_CUST:A";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        		this.grdTB_CUST.setFocus();
        	}

        	this.dsTB_CUSTACNT_CUST.clearData();
        }

        /*--------------------------------------------+
         |  거래처계좌 양식파일 다운로드 클릭 時   |
         +---------------------------------------------*/
        this.fn_ExcelFileDown4 = function (obj,e)
        {
        	// 양식받기는 고정값('upload/sample/') 으로 지정한다..
        	// 엑셀양식은 기존의 명칭을 사용한다..
        	var folderName = 'upload/sample/';
        	var fileName = 'UpSample_CustAccount.xls';

        	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        }

        /*--------------------------------------------+
         |  거래처담당자 양식파일 업로드 클릭 時   |
         +---------------------------------------------*/
        this.fn_ExcelUpLoad5 = function (obj,e)
        {
        	// 2014. 신규
        	var fdNSE_FILE = new FileDialog();
        	var vfNSE_FILE = new VirtualFile();

        	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");

        	var vFile = fdNSE_FILE.open("거래처담당자 엑셀업로드", FileDialog.LOAD, "%MYDOCUMENT%");

        	if (vFile == null) 
        	{
        		return false;
        	}

        	var objExtComm = new ExtCommon();

        	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);

        	this.dsTB_CUSTMAN_TEMP.set_updatecontrol(false);

        	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) 
        	{
        		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) 
        		{
        			var nRow = this.dsTB_CUSTMAN_TEMP.addRow();

        			this.dsTB_CUSTMAN_TEMP.setColumn(nRow, 'REGS_NO', this.fnc_Replace(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0)), "-", "")); //사업자번호
        			this.dsTB_CUSTMAN_TEMP.setColumn(nRow, 'MAN_NM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //담당자명
        			this.dsTB_CUSTMAN_TEMP.setColumn(nRow, 'TEL_NO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 2))); //일반전화
        			this.dsTB_CUSTMAN_TEMP.setColumn(nRow, 'HP_NO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 3))); //휴대폰
        			this.dsTB_CUSTMAN_TEMP.setColumn(nRow, 'E_MAIL', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 4))); //EMAIL
        			this.dsTB_CUSTMAN_TEMP.setColumn(nRow, 'TAX_YN', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 5))); //대표담당자여부
        		}
        	}

        	this.dsTB_CUSTMAN_TEMP.set_updatecontrol(true);

        	// 체크
        	if (this.fn_ExcelUploadCheck(this.dsTB_CUSTMAN_TEMP)) 
        	{
        		this.dsTB_CUSTMAN_TEMP.set_updatecontrol(false);

        		for (var i = 0; i < this.dsTB_CUSTMAN_TEMP.getRowCount(); i++) 
        		{
        			this.dsTB_CUSTMAN_TEMP.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}

        		this.dsTB_CUSTMAN_TEMP.set_updatecontrol(true);

        		// 저장 여부 확인
        		if (this.fnc_Message("M1070", this.dsTB_CUSTMAN_TEMP.rowcount + "개의 데이타를 업로드 하시겠습니까") == false) 
        		{
        			this.dsTB_CUSTMAN_TEMP.clearData();
        			return false;
        		}

        		var sMethodName = "PROC03";
        		var sInDataSet = "dsTB_CUSTMAN_TEMP=dsTB_CUSTMAN_TEMP:A";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        		this.grdTB_CUST.setFocus();
        	}

        	this.dsTB_CUSTMAN_TEMP.clearData();
        }

        /*----------------------------------------------+
         |  거래처담당자 양식파일 다운로드 클릭 時   |
         +-----------------------------------------------*/
        this.fn_ExcelFileDown5 = function (obj,e)
        {
        	// 양식받기는 고정값('upload/sample/') 으로 지정한다..
        	// 엑셀양식은 기존의 명칭을 사용한다..
        	var folderName = 'upload/sample/';
        	var fileName = 'UpSample_CustManager.xls';

        	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTB_CUST.addEventHandler("onrowposchanged", this.fn_OnRowPosChanged, this);
            this.dsTB_CUST.addEventHandler("canrowposchange", this.dsTB_CUST_CanRowPosChange, this);
            this.dsTB_CUST.addEventHandler("oncolumnchanged", this.fn_OnColumnChanged, this);
            this.dsTB_CUSTMAN.addEventHandler("oncolumnchanged", this.dsTB_CUSTMAN_onncolumnchanged, this);
            this.dsTB_CUSTACNT.addEventHandler("oncolumnchanged", this.dsTB_CUSTACNT_OnColumnChanged, this);
            this.dsTB_JOINNO.addEventHandler("onrowposchanged", this.fn_OnRowPosChanged, this);
            this.dsTB_JOINNO.addEventHandler("canrowposchange", this.dsTB_CUST_CanRowPosChange, this);
            this.dsTB_JOINNO.addEventHandler("oncolumnchanged", this.fn_OnColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.Tab0.tab0.grdTB_CUSTDIV.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.Tab0.tab0.edtTEL_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.calOPEN_DT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtSHOP_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtFAX_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.calCLOSE_DT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtREPRST_EMAIL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtADMINEMP_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.imgHelpADMINEMP_NM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.edtADMINEMP_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtADMINEMP_NM.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.Tab0.tab0.edtADDR2_TX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtMANAPART_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.imgHelpMANAPART_NM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.edtMANAPART_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtMANAPART_NM.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.Tab0.tab0.edtSHOPVAT_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtSHOPVAT_NM.addEventHandler("oneditclick", this.Tab0_tab0_edtSHOPVAT_NM_oneditclick, this);
            this.Tab0.tab0.edtJONGSAE_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbUSE_YN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbPOST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbDOMEFORE_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbDOMEFORE_CD.addEventHandler("onitemchanged", this.Tab0_tab0_cmbDOMEFORE_CD_onitemchanged, this);
            this.Tab0.tab0.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.stJOIN_NO.addEventHandler("onclick", this.Tab0_tab0_Static01_onclick, this);
            this.Tab0.tab0.edtJOIN_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.Tab0.tab0.calRELT_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.calRELT_EDDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtBOSS_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbCDIV_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbRELT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtSHOPABB_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbCOPRDIV_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.medREGS_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.medCOPR_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtCOPRT_CONT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtCOPRJ_CONT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtSUMSHOP_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.imgHelpSUMSHOP_NM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.edtSUMSHOP_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtSUMSHOP_NM.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.Tab0.tab0.medZIPCODE_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.medZIPCODE_CD.addEventHandler("ontextchanged", this.fn_ZIPCodeChanged, this);
            this.Tab0.tab0.imgHelpADDR1_TX.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.edtADDR1_TX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtADDR1_TX.addEventHandler("ontextchanged", this.Tab0_tab0_edtADDR1_TX_OnChanged, this);
            this.Tab0.tab4.btnInput01.addEventHandler("onclick", this.Tab0_tab4_btnInput01_OnClick, this);
            this.Tab0.tab4.btnDelete01.addEventHandler("onclick", this.Tab0_tab4_btnDelete_OnClick, this);
            this.Tab0.tab4.grdTB_CUSTMAN.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.Tab0.tab4.grdTB_CUSTMAN.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.Tab0.tab5.btnInput02.addEventHandler("onclick", this.Tab0_tab5_btnInput02_OnClick, this);
            this.Tab0.tab5.btnDelete02.addEventHandler("onclick", this.Tab0_tab5_btnDelete02_OnClick, this);
            this.Tab0.tab5.grdTB_CUSTACNT.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.Tab0.tab5.grdTB_CUSTACNT.addEventHandler("onexpanddown", this.fn_OpenGridPopup, this);
            this.Tab0.tab5.grdTB_CUSTACNT.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.edtSHRMANAPART_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMANAPART_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMANAPART_NM.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.cmbSHRCUSTDIV_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSHOP_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRADMINEMP_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRADMINEMP_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRADMINEMP_NM.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.cmbSHRDOMEFORE_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRUSE_YN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCDIV_CD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCDIV_CD.addEventHandler("onitemchanged", this.cmbSHRCDIV_CD_onitemchanged, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRREGS_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRELT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdTB_CUST.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.imgHelpSHRMANAPART_NM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRADMINEMP_NM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btnExcelFormDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.btnExcelUpload.addEventHandler("onclick", this.fn_ExcelUpLoad, this);
            this.btnExcelFormDown00.addEventHandler("onclick", this.fn_ExcelFileDown2, this);
            this.btnExcelUpload2.addEventHandler("onclick", this.fn_ExcelUpLoad2, this);
            this.btnExcelFormDown01.addEventHandler("onclick", this.fn_ExcelFileDown3, this);
            this.btnExcelUpload3.addEventHandler("onclick", this.fn_ExcelUpLoad3, this);
            this.btnExcelFormDown02.addEventHandler("onclick", this.fn_ExcelFileDown4, this);
            this.btnExcelUpload00.addEventHandler("onclick", this.fn_ExcelUpLoad4, this);
            this.btnExcelFormDown03.addEventHandler("onclick", this.fn_ExcelFileDown5, this);
            this.btnExcelUpload01.addEventHandler("onclick", this.fn_ExcelUpLoad5, this);

        };

        this.loadIncludeScript("FAME0013.xfdl");
        this.loadPreloadList();
       
    };
}
)();
