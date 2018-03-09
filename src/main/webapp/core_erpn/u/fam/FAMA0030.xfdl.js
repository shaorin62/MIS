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
                this.set_name("FAMA0030");
                this.set_titletext("거래처정보등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CUCL_CODE</Col><Col id=\"DSNAME\">dsSHRCUCL_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">거래처유형</Col></Row><Row><Col id=\"CODEID\">CUTY_CODE</Col><Col id=\"DSNAME\">dsSHRCUTY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">거래처구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRRETY_CODE</Col><Col id=\"CODEID\">RETY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">관계사구분</Col></Row><Row><Col id=\"CODEID\">LFTY_CODE</Col><Col id=\"DSNAME\">dsSHRLFTY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">국내외구분</Col></Row><Row><Col id=\"DSNAME\">dsSHRUSEX_YSNO</Col><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">사용여부</Col></Row><Row><Col id=\"DSNAME\">dsSHRCITY_CODE</Col><Col id=\"CODEID\">CITY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMARK\">사업자/개인</Col></Row><Row><Col id=\"CODEID\">CUAC_CODE</Col><Col id=\"DSNAME\">dsCUAC_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"REMARK\">계좌구분</Col></Row><Row><Col id=\"CODEID\">POST_GUBN</Col><Col id=\"DSNAME\">dsPOST_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMARK\">주소구분</Col></Row><Row><Col id=\"DSNAME\">dsLFTY_CODE</Col><Col id=\"CODEID\">LFTY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMARK\">국내외구분</Col></Row><Row><Col id=\"DSNAME\">dsCUTY_CODE</Col><Col id=\"CODEID\">CUTY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMARK\">거래처구분</Col></Row><Row><Col id=\"DSNAME\">dsRETY_CODE</Col><Col id=\"CODEID\">RETY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMARK\">관계사구분</Col></Row><Row><Col id=\"DSNAME\">dsCITY_CODE</Col><Col id=\"CODEID\">CITY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMARK\">사업자/개인</Col></Row><Row><Col id=\"DSNAME\">dsUSEX_YSNO</Col><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"REMARK\">사용여부</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsINCM_TYCD</Col><Col id=\"CODEID\">INCM_TYCD</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMARK\">소득유형</Col></Row><Row><Col id=\"DSNAME\">dsFORI_GUBN</Col><Col id=\"CODEID\">FORI_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMARK\">내외국인구분</Col></Row><Row><Col id=\"DSNAME\">dsRESI_GUBN</Col><Col id=\"CODEID\">RESI_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"REMARK\">거주구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"10\" prop=\"NONE\" type=\"STRING\"/><Column id=\"CUST_BFNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RETY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NANY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SACH_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SACH_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MGMT_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CUST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPEN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MGMT_DTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CITY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCH_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCH_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUCL_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LFTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TXAP_CUNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MPBZ_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PUCD_NUMB\" type=\"STRING\" size=\"20\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NBNM\" type=\"STRING\" size=\"256\"/><Column id=\"RELT_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"RELT_EDDT\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"5\"/><Column id=\"INCM_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"FORI_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"RESI_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBS_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBS_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_CHEK\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CUCL_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUCL_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTMN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHSN_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"HNPN_TENR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SMSS_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"MJCH_YSNO\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTAC", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_ANID\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CUAC_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_MANM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"MJAN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTXM_TEMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BFNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RETY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NANY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SACH_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SACH_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MGMT_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CUST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPEN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MGMT_DTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CITY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCH_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCH_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUCL_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POSITYPEA_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POSITYPEB_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LFTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TXAP_CUNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MPBZ_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PUCD_NUMB\" type=\"STRING\" size=\"20\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NBNM\" type=\"STRING\" size=\"256\"/><Column id=\"RELT_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"RELT_EDDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTAC_EMPL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_ANID\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CUAC_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_MANM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"MJAN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTAC_CUST", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_ANID\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CUAC_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CDNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_MANM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"MJAN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTMN_TEMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHSN_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"HNPN_TENR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SMSS_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"MJCH_YSNO\" type=\"STRING\" size=\"1\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EXCEL", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_JOINNO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BIZR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PUCD_NUMB\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab0", "absolute", "8", null, null, "378", "25", "15", this);
            obj.set_taborder("32");
            obj.set_preload("true");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.Tab0);
            obj.set_taborder("65");
            obj.set_text("기본정보");
            obj.getSetter("position").set("absolute");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "-3", "10", "21", "21", null, null, this.Tab0.tab0);
            obj.getSetter("type").set("rectangle");
            obj.style.set_background("transparent");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.set_taborder("46");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "973", "4", "124", "21", null, null, this.Tab0.tab0);
            obj.set_text("거래처유형");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_taborder("47");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Grid("grdTA_CUSTXD", "absolute", "973", "25", null, null, "10", "8", this.Tab0.tab0);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_CUSTXD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("36");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"132\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" displaytype=\"text\" text=\"거래처유형\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_CHEK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CUCL_CDNM\"/></Band></Format></Formats>");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtTELE_NUMB", "absolute", "112", "190", "188", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("20");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCUST_NAME", "absolute", "329", "8", "110", "21", null, null, this.Tab0.tab0);
            obj.set_text("거래처명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("54");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtCUST_NAME", "absolute", "437", "8", "525", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("100");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stFAXX_NUMB", "absolute", "329", "190", "110", "21", null, null, this.Tab0.tab0);
            obj.set_text("팩스번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("57");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCLOS_DATE", "absolute", "329", "216", "110", "21", null, null, this.Tab0.tab0);
            obj.set_text("거래종료일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("58");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtFAXX_NUMB", "absolute", "437", "190", "156", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_taborder("19");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("20");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Calendar("calCLOS_DATE", "absolute", "437", "216", "156", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Static("stDTL1_ADDR", "absolute", "329", "164", "110", "21", null, null, this.Tab0.tab0);
            obj.set_text("주소2");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("38");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stELTR_MLAD", "absolute", "622", "190", "123", "21", null, null, this.Tab0.tab0);
            obj.set_text("대표이메일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("39");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtELTR_MLAD", "absolute", "756", "190", "206", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("alpha");
            obj.set_taborder("20");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("50");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtDTL1_ADDR", "absolute", "437", "164", "525", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("200");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static2", "absolute", "622", "216", "123", "21", null, null, this.Tab0.tab0);
            obj.set_text("부가세신고용명칭");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("48");
            obj.set_usedecorate("false");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtTXAP_CUNM", "absolute", "756", "216", "206", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_taborder("23");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("100");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static3", "absolute", "622", "242", "123", "21", null, null, this.Tab0.tab0);
            obj.set_text("종사업장승인번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("53");
            obj.set_usedecorate("false");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtMPBZ_NUMB", "absolute", "756", "242", "206", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_taborder("26");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("4");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbUSEX_YSNO", "absolute", "112", "242", "188", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("24");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj = new Static("stUSE_TYPE", "absolute", "17", "242", "94", "21", null, null, this.Tab0.tab0);
            obj.set_text("사용여부");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("60");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbPOST_GUBN", "absolute", "112", "164", "188", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("16");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj = new Static("Static11", "absolute", "17", "164", "94", "21", null, null, this.Tab0.tab0);
            obj.set_text("우편번호구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("41");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCUST_CODE", "absolute", "17", "8", "94", "21", null, null, this.Tab0.tab0);
            obj.set_text("거래처코드");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("42");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stLFTY_CODE", "absolute", "17", "86", "94", "21", null, null, this.Tab0.tab0);
            obj.set_text("국내외구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("43");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbLFTY_CODE", "absolute", "112", "86", "188", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("8");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj = new Static("stTELE_NUMB", "absolute", "17", "190", "94", "21", null, null, this.Tab0.tab0);
            obj.set_text("전화번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("52");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stPUCD_NUMB", "absolute", "622", "268", "131", "21", null, null, this.Tab0.tab0);
            obj.set_text("구매카드가맹점번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("56");
            obj.set_usedecorate("true");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtPUCD_NUMB", "absolute", "756", "268", "206", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("29");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("20");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stEMPL_NUMB", "absolute", "329", "242", "110", "21", null, null, this.Tab0.tab0);
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("40");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtEMPL_NUMB", "absolute", "437", "242", "67", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("63");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtEMPL_NBNM", "absolute", "529", "242", "64", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("25");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_lengthunit("utf16");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stOPEN_DATE00", "absolute", "17", "268", "94", "21", null, null, this.Tab0.tab0);
            obj.set_text("관계사시작일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("44");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Calendar("calRELT_STDT", "absolute", "112", "268", "188", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Static("stCLOS_DATE00", "absolute", "329", "268", "110", "21", null, null, this.Tab0.tab0);
            obj.set_text("관계사종료일");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("59");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Calendar("calRELT_EDDT", "absolute", "437", "268", "156", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Edit("edtOWNR_NAME", "absolute", "437", "34", "156", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("30");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "17", "34", "94", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("67");
            obj.set_text("거래처구분");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbCUTY_CODE", "absolute", "112", "34", "88", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_displayrowcount("20");
            obj.set_index("-1");
            obj = new Combo("cmbRETY_CODE", "absolute", "203", "34", "97", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_displayrowcount("20");
            obj.set_index("-1");
            obj = new Static("stOWNR_NAME", "absolute", "329", "34", "110", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("68");
            obj.set_text("대표자명");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCUST_BFNM", "absolute", "622", "34", "123", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("69");
            obj.set_text("거래처명(약)");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtCUST_BFNM", "absolute", "756", "34", "206", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("100");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCITY_CODE", "absolute", "17", "60", "94", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("70");
            obj.set_text("사업자/개인");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbCITY_CODE", "absolute", "112", "60", "188", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj = new Static("stBIZR_NUMB", "absolute", "329", "60", "110", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("71");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new MaskEdit("mskBIZR_NUMB", "absolute", "437", "60", "156", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("6");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_trimtype("both");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stCORP_NUMB", "absolute", "329", "86", "110", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("72");
            obj.set_text("법인등록번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new MaskEdit("medCORP_NUMB", "absolute", "437", "86", "156", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stBSNS_STAT", "absolute", "17", "112", "94", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("75");
            obj.set_text("업태");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtBSNS_STAT", "absolute", "112", "112", "188", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("11");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("100");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stBSNS_TYPE", "absolute", "329", "112", "110", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("76");
            obj.set_text("업종");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtBSNS_TYPE", "absolute", "437", "112", "156", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("12");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("100");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stPOST_NUMB", "absolute", "17", "138", "94", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("81");
            obj.set_text("우편번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new MaskEdit("mskPOST_NUMB", "absolute", "112", "138", "165", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("35");
            obj.set_type("string");
            obj.set_mask("######");
            obj.set_maskchar(" ");
            obj.style.set_align("center");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stADDR_DESC", "absolute", "329", "138", "110", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("82");
            obj.set_text("주소1");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtADDR_DESC", "absolute", "437", "138", "525", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("15");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("100");
            obj.set_readonly("false");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("imgHelpADDR_DESC", "absolute", "279", "138", "21", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("14");
            obj.set_cssclass("sytHelpPopup");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("imgHelpEMPL_NUMB", "absolute", "506", "242", "21", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("90");
            obj.set_cssclass("sytHelpPopup");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stINCM_TYCD", "absolute", "17", "294", "94", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("92");
            obj.set_text("소득유형");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbINCM_TYCD", "absolute", "112", "294", "188", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj = new Static("stFORI_GUBN", "absolute", "329", "294", "110", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("93");
            obj.set_text("내외국인구분");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbFORI_GUBN", "absolute", "437", "294", "156", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj = new Static("stRESI_GUBN", "absolute", "622", "294", "123", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("94");
            obj.set_text("거주구분");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbRESI_GUBN", "absolute", "756", "294", "206", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj = new Static("stJOBS_GUBN", "absolute", "17", "320", "94", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("95");
            obj.set_text("직업구분");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtJOBS_GUBN", "absolute", "112", "320", "165", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("96");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("imgHelpJOBS_GBNM", "absolute", "279", "320", "21", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("97");
            obj.set_cssclass("sytHelpPopup");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtJOBS_GBNM", "absolute", "302", "320", "291", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("33");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stOPEN_DATE", "absolute", "17", "216", "94", "21", null, null, this.Tab0.tab0);
            obj.set_text("거래시작일");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("51");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Calendar("calOPEN_DATE", "absolute", "112", "216", "188", "21", null, null, this.Tab0.tab0);
            this.Tab0.tab0.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Static("stRERN_NUMB", "absolute", "622", "60", "123", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("100");
            obj.set_text("주민등록번호");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new MaskEdit("mskRERN_NUMB", "absolute", "756", "60", "206", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("7");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_trimtype("both");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stMAJR_CUST", "absolute", "622", "320", "123", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("77");
            obj.set_text("대표거래처");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtMAJR_CUST", "absolute", "756", "320", "75", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("78");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtMAJR_CDNM", "absolute", "856", "320", "106", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("34");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("imgHelpMAJR_CDNM", "absolute", "833", "320", "21", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("89");
            obj.set_cssclass("sytHelpPopup");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtMGMT_DTCD", "absolute", "756", "112", "67", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("62");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtMGMT_DTNM", "absolute", "848", "112", "114", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("imgHelpSACH_EMNM", "absolute", "825", "86", "21", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("87");
            obj.set_cssclass("sytHelpPopup");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stMGMT_DTCD", "absolute", "622", "112", "67", "21", null, null, this.Tab0.tab0);
            obj.set_text("관리부서");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("37");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("imgHelpMGMT_DTNM", "absolute", "825", "112", "21", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("88");
            obj.set_cssclass("sytHelpPopup");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("stSACH_EMNR", "absolute", "622", "86", "91", "21", null, null, this.Tab0.tab0);
            obj.set_text("영업담당자");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("55");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtSACH_EMNR", "absolute", "756", "86", "67", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_taborder("61");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtSACH_EMNM", "absolute", "848", "86", "114", "21", null, null, this.Tab0.tab0);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_taborder("10");
            obj.set_cssclass("styFormItemText");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "125", "0", "38", "8", null, null, this.Tab0.tab0);
            obj.set_taborder("101");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "125", "29", "102", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("102");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "125", "55", "98", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("103");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "125", "81", "102", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("104");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "125", "107", "98", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("105");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "125", "133", "102", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("106");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "125", "159", "98", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("107");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "125", "185", "102", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("108");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "125", "211", "98", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("109");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "125", "263", "98", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("110");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "125", "237", "102", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("111");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "125", "315", "98", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("112");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "125", "289", "102", "5", null, null, this.Tab0.tab0);
            obj.set_taborder("113");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "10.97%", "341", null, "8", "85.69%", null, this.Tab0.tab0);
            obj.set_taborder("114");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "29", "28", "41", null, null, this.Tab0.tab0);
            obj.set_taborder("115");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "300", "14", "40", "41", null, null, this.Tab0.tab0);
            obj.set_taborder("116");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "593", "29", "40", "41", null, null, this.Tab0.tab0);
            obj.set_taborder("117");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "965", "341", "80", "8", null, null, this.Tab0.tab0);
            obj.set_taborder("118");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Edit("edtCUST_CODE", "absolute", "112", "8", "188", "21", null, null, this.Tab0.tab0);
            obj.set_taborder("119");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.Tab0.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab4", this.Tab0);
            obj.set_text("거래처담당자");
            this.Tab0.addChild(obj.name, obj);
            obj = new Button("btnInput01", "absolute", null, "5", "62", "21", "75", null, this.Tab0.tab4);
            obj.set_taborder("1");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Button("btnDelete01", "absolute", null, "5", "62", "21", "10", null, this.Tab0.tab4);
            obj.set_taborder("2");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Grid("grdTA_CUSTMN", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tab4);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_CUSTMN");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"담당자명\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"연락처\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"H/P\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"E-Mail\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"대표담당자\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" text=\"bind:CHSN_NAME\" editlimit=\"0\" editimemode=\"hangul\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:TELE_NUMB\" editlimit=\"0\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:HNPN_TENR\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ELTR_MLAD\" editlimit=\"0\" editimemode=\"alpha\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MJCH_YSNO\" editlimit=\"0\" editimemode=\"english\"/></Band></Format></Formats>");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "968", "26", "184", "4", null, null, this.Tab0.tab4);
            obj.set_taborder("6");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "0", "16", "10", "67", null, null, this.Tab0.tab4);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "5", "10", "119", "0", null, this.Tab0.tab4);
            obj.set_taborder("8");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, null, "100", "10", "449", "0", this.Tab0.tab4);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab4.addChild(obj.name, obj);
            obj = new Tabpage("tab5", this.Tab0);
            obj.set_taborder("24");
            obj.set_text("거래계좌");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            this.Tab0.addChild(obj.name, obj);
            obj = new Button("btnInput02", "absolute", null, "5", "62", "21", "75", null, this.Tab0.tab5);
            obj.set_taborder("1");
            obj.style.set_imagealign("left");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Button("btnDelete02", "absolute", null, "5", "62", "21", "10", null, this.Tab0.tab5);
            obj.set_taborder("1");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Grid("grdTA_CUSTAC", "absolute", "10", "30", null, null, "10", "10", this.Tab0.tab5);
            obj.set_selecttype("multirow");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_CUSTAC");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"구분\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"금융기관\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"계좌번호\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"예금주명\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주거래계좌여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:CUAC_CODE\" editlimit=\"0\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:BANK_CDNM\" editlimit=\"0\" editimemode=\"hangul\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ACNT_NUMB\" editlimit=\"0\" editimemode=\"none\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ACNT_MANM\" editlimit=\"0\" editimemode=\"hangul\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MJAN_YSNO\" editlimit=\"0\"/></Band></Format></Formats>");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "5", "10", "119", "0", null, this.Tab0.tab5);
            obj.set_taborder("5");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, null, "100", "10", "449", "0", this.Tab0.tab5);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab5.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "0", "16", "10", "67", null, null, this.Tab0.tab5);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Tab0.tab5.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.getSetter("radiusy").set("15");
            obj.getSetter("radiusx").set("15");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMGMT_DTCD", "absolute", "95", "97", "54", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_taborder("23");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMGMT_DTNM", "absolute", "174", "97", "75", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("24");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCUCL_CODE", "absolute", "900", "71", "89", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_taborder("21");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_autoselect("true");
            obj.set_index("-1");

            obj = new Edit("edtSHRCUST_NAME", "absolute", "95", "71", "154", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSACH_EMNR", "absolute", "343", "97", "62", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_taborder("25");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSACH_EMNM", "absolute", "430", "97", "75", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("26");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRLFTY_CODE", "absolute", "876", "97", "114", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_autoselect("true");
            obj.set_index("-1");

            obj = new Combo("cmbSHRUSEX_YSNO", "absolute", "1063", "97", "78", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchItem");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_autoselect("true");
            obj.set_index("1");

            obj = new Edit("edtSHRCUST_CODE", "absolute", "343", "71", "162", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("19");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBIZR_NUMB", "absolute", "600", "71", "212", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("50");
            obj.set_taborder("20");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "995", "97", "64", "21", null, null, this);
            obj.set_text("사용여부");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "518", "97", "78", "21", null, null, this);
            obj.set_text("거래처구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_CUSTXM", "absolute", "8", "154", null, null, "25", "403", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsTA_CUSTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_cellsizebandtype("allband");
            obj.set_taborder("31");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"118\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"170\" band=\"left\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"230\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"122\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"거래처구분\"/><Cell col=\"1\" text=\"세부구분\"/><Cell col=\"2\" text=\"사업자/개인\"/><Cell col=\"3\" displaytype=\"text\" text=\"거래처코드\"/><Cell col=\"4\" displaytype=\"text\" text=\"거래처명\"/><Cell col=\"5\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"6\" text=\"주민등록번호\"/><Cell col=\"7\" displaytype=\"text\" text=\"거래처주소\"/><Cell col=\"8\" displaytype=\"text\" text=\"전화번호\"/><Cell col=\"9\" displaytype=\"text\" text=\"관리부서\"/><Cell col=\"10\" displaytype=\"text\" text=\"영업담당자\"/><Cell col=\"11\" displaytype=\"text\" text=\"거래시작일\"/><Cell col=\"12\" displaytype=\"text\" text=\"거래종료일\"/><Cell col=\"13\" displaytype=\"text\" text=\"국내외구분\"/><Cell col=\"14\" displaytype=\"text\" text=\"구매카드가맹점번호\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: center;\" text=\"bind:CUTY_CODE\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left middle;\" text=\"bind:RETY_CODE\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:CITY_CODE\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"bind:CUST_CODE\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CUST_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: center;\" text=\"bind:BIZR_NUMB\" mask=\"expr:Eco.decode(comp.parent.fnc_Length(BIZR_NUMB), 10, '###-##-#####', '')\"/><Cell col=\"6\" text=\"bind:RERN_NUMB\" mask=\"expr:Eco.decode(comp.parent.fnc_Length(RERN_NUMB), 13, Eco.decode(comp.parent.sPARENT_USERLAVEL, '1', '######-#######', '######-#{######}'), '')\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ADDR_DETL\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\" text=\"bind:TELE_NUMB\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\" text=\"bind:MGMT_DTNM\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: center;\" text=\"bind:SACH_EMNM\"/><Cell col=\"11\" displaytype=\"date\" style=\"align:center;\" text=\"bind:OPEN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"date\" style=\"align:center;\" text=\"bind:CLOS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"combo\" style=\"align: center;\" text=\"bind:LFTY_CODE\" combodataset=\"dsLFTY_CODE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: center;\" text=\"bind:PUCD_NUMB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("거래처정보등록");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "204", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "25", "25", null, this);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "490", "0", null, "29", "25", null, this);
            obj.set_text("홈 > 재무관리 > 기본정보 > 거래처정보등록");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "27", "97", "69", "21", null, null, this);
            obj.set_text("관리부서");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "27", "71", "68", "21", null, null, this);
            obj.set_text("거래처명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "821", "71", "79", "21", null, null, this);
            obj.set_text("거래처유형");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "261", "97", "78", "21", null, null, this);
            obj.set_text("영업담당자");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "821", "97", "53", "21", null, null, this);
            obj.set_text("국내외");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "261", "71", "77", "21", null, null, this);
            obj.set_text("거래처코드");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "518", "63", "78", "37", null, null, this);
            obj.set_text("사업자/\r\n주민번호");
            obj.set_cssclass("styFormSearchCap");
            obj.set_usedecorate("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", null, null, "366", "21", "25", "366", this);
            obj.set_text("전자세금계산서 발행대상은 거래처담당자를 반드시 넣어주세요.");
            obj.set_cssclass("sta_WF_Info");
            obj.set_usedecorate("false");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "671", "97", "51", "21", null, null, this);
            obj.set_text("관계사");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDown", "absolute", "8", "35", "165", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("거래처정보 양식 다운로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload", "absolute", "175", "35", "151", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("거래처정보 엑셀 업로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "621", "12", "17", "12", null, null, this);
            obj.set_taborder("36");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDown00", "absolute", null, "211", "214", "21", "25", null, this);
            obj.set_taborder("37");
            obj.set_text("구매카드가맹점번호 양식 다운로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload2", "absolute", null, "236", "214", "21", "25", null, this);
            obj.set_taborder("38");
            obj.set_text("구매카드가맹점번호 엑셀 업로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDown01", "absolute", null, "211", "152", "21", "245", null, this);
            obj.set_taborder("39");
            obj.set_text("사원계좌 양식 다운로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload3", "absolute", null, "236", "152", "21", "245", null, this);
            obj.set_taborder("40");
            obj.set_text("사원계좌 엑셀 업로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDown02", "absolute", null, "211", "165", "21", "403", null, this);
            obj.set_taborder("41");
            obj.set_text("거래처계좌 양식 다운로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload00", "absolute", null, "236", "165", "21", "403", null, this);
            obj.set_taborder("42");
            obj.set_text("거래처계좌 엑셀 업로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelFormDown03", "absolute", null, "211", "178", "21", "574", null, this);
            obj.set_taborder("43");
            obj.set_text("거래처담당자 양식 다운로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload01", "absolute", null, "236", "178", "21", "574", null, this);
            obj.set_taborder("44");
            obj.set_text("거래처담당자 엑셀 업로드");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "256", "3", "21", "551", null, this);
            obj.getSetter("linetype").set("vertical");
            obj.style.set_color("#3e3e3eff");
            obj.style.set_opacity("50");
            obj.getSetter("radiusx").set("5");
            obj.getSetter("radiusy").set("0");
            obj.set_enable("false");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", null, "256", "3", "21", "380", null, this);
            obj.getSetter("linetype").set("vertical");
            obj.getSetter("radiusy").set("0");
            obj.set_enable("false");
            obj.style.set_color("#3e3e3eff");
            obj.style.set_opacity("50");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "256", "3", "21", "222", null, this);
            obj.getSetter("linetype").set("vertical");
            obj.getSetter("radiusy").set("0");
            obj.set_enable("false");
            obj.style.set_color("#3e3e3eff");
            obj.style.set_opacity("50");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRSACH_EMNM", "absolute", "407", "97", "22", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMGMT_DTNM", "absolute", "151", "97", "22", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("47");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "20", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "608", "0", "36", "60", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1162", "0", "25", "717", null, null, this);
            obj.set_taborder("51");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "8", "61", "30", "67", null, null, this);
            obj.set_taborder("52");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", null, "1154", "15", null, "0", this);
            obj.set_taborder("53");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "719", "56", "145", "4", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "144", "61", "80", "10", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "144", "92", "102", "5", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "144", "118", "80", "10", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "485", "129", "80", "25", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", "148", "264", "6", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("62");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("63");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "597", "314", "80", "37", null, null, this);
            obj.set_taborder("64");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "29", "314", "80", "10", null, null, this);
            obj.set_taborder("65");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1141", "61", "20", "67", null, null, this);
            obj.set_taborder("66");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCUTY_CODE", "absolute", "600", "97", "70", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_autoselect("true");
            obj.set_index("-1");

            obj = new Combo("cmbSHRRETY_CODE", "absolute", "726", "97", "86", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_autoselect("true");

            obj = new Static("stCITY_CODE", "absolute", "995", "63", "64", "37", null, null, this);
            obj.set_taborder("68");
            obj.set_text("사업자/\r\n개인");
            obj.set_cssclass("styFormItemCap");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCITY_CODE", "absolute", "1063", "71", "78", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemText");
            obj.set_autoselect("true");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1153, 313, this.Tab0.tab0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("65");
            		p.set_text("기본정보");
            		p.getSetter("position").set("absolute");

            	}
            );
            this.Tab0.tab0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1136, 313, this.Tab0.tab4,
            	//-- Layout function
            	function(p) {
            		p.set_text("거래처담당자");

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

            	}
            );
            this.Tab0.tab5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("거래처정보등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("Tab0_tab0_edtCUST_CODE_value","Tab0.tab0.edtCUST_CODE","value","dsTA_CUSTXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbLFTY_CODE_value","Tab0.tab0.cmbLFTY_CODE","value","dsTA_CUSTXM","LFTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtTELE_NUMB_value","Tab0.tab0.edtTELE_NUMB","value","dsTA_CUSTXM","TELE_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_calOPEN_DATE_value","Tab0.tab0.calOPEN_DATE","value","dsTA_CUSTXM","OPEN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtCUST_NAME_value","Tab0.tab0.edtCUST_NAME","value","dsTA_CUSTXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtFAXX_NUMB_value","Tab0.tab0.edtFAXX_NUMB","value","dsTA_CUSTXM","FAXX_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_calCLOS_DATE_value","Tab0.tab0.calCLOS_DATE","value","dsTA_CUSTXM","CLOS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtELTR_MLAD_value","Tab0.tab0.edtELTR_MLAD","value","dsTA_CUSTXM","ELTR_MLAD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtSACH_EMNR_value","Tab0.tab0.edtSACH_EMNR","value","dsTA_CUSTXM","SACH_EMNR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtSACH_EMNM_value","Tab0.tab0.edtSACH_EMNM","value","dsTA_CUSTXM","SACH_EMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtDTL1_ADDR_value","Tab0.tab0.edtDTL1_ADDR","value","dsTA_CUSTXM","DTL1_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtMGMT_DTCD_value","Tab0.tab0.edtMGMT_DTCD","value","dsTA_CUSTXM","MGMT_DTCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtMGMT_DTNM_value","Tab0.tab0.edtMGMT_DTNM","value","dsTA_CUSTXM","MGMT_DTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtTXAP_CUNM_value","Tab0.tab0.edtTXAP_CUNM","value","dsTA_CUSTXM","TXAP_CUNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtMPBZ_NUMB_value","Tab0.tab0.edtMPBZ_NUMB","value","dsTA_CUSTXM","MPBZ_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbUSEX_YSNO_value","Tab0.tab0.cmbUSEX_YSNO","value","dsTA_CUSTXM","USEX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbPOST_GUBN_value","Tab0.tab0.cmbPOST_GUBN","value","dsTA_CUSTXM","POST_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtPUCD_NUMB_value","Tab0.tab0.edtPUCD_NUMB","value","dsTA_CUSTXM","PUCD_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtEMPL_NUMB_value","Tab0.tab0.edtEMPL_NUMB","value","dsTA_CUSTXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtEMPL_NBNM_value","Tab0.tab0.edtEMPL_NBNM","value","dsTA_CUSTXM","EMPL_NBNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab0.tab0.calRELT_STDT","value","dsTA_CUSTXM","RELT_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab0.tab0.calRELT_EDDT","value","dsTA_CUSTXM","RELT_EDDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtOWNR_NAME_value","Tab0.tab0.edtOWNR_NAME","value","dsTA_CUSTXM","OWNR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbCUTY_CODE_value","Tab0.tab0.cmbCUTY_CODE","value","dsTA_CUSTXM","CUTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbRETY_CODE_value","Tab0.tab0.cmbRETY_CODE","value","dsTA_CUSTXM","RETY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtCUST_BFNM_value","Tab0.tab0.edtCUST_BFNM","value","dsTA_CUSTXM","CUST_BFNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_cmbCITY_CODE_value","Tab0.tab0.cmbCITY_CODE","value","dsTA_CUSTXM","CITY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_mskBIZR_NUMB_value","Tab0.tab0.mskBIZR_NUMB","value","dsTA_CUSTXM","BIZR_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_medCORP_NUMB_value","Tab0.tab0.medCORP_NUMB","value","dsTA_CUSTXM","CORP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtBSNS_STAT_value","Tab0.tab0.edtBSNS_STAT","value","dsTA_CUSTXM","BSNS_STAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtBSNS_TYPE_value","Tab0.tab0.edtBSNS_TYPE","value","dsTA_CUSTXM","BSNS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtMAJR_CUST_value","Tab0.tab0.edtMAJR_CUST","value","dsTA_CUSTXM","MAJR_CUST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtMAJR_CDNM_value","Tab0.tab0.edtMAJR_CDNM","value","dsTA_CUSTXM","MAJR_CDNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_mskPOST_NUMB_value","Tab0.tab0.mskPOST_NUMB","value","dsTA_CUSTXM","POST_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_tab0_edtADDR_DESC_value","Tab0.tab0.edtADDR_DESC","value","dsTA_CUSTXM","ADDR_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab0.tab0.cmbINCM_TYCD","value","dsTA_CUSTXM","INCM_TYCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab0.tab0.cmbFORI_GUBN","value","dsTA_CUSTXM","FORI_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab0.tab0.cmbRESI_GUBN","value","dsTA_CUSTXM","RESI_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab0.tab0.edtJOBS_GUBN","value","dsTA_CUSTXM","JOBS_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab0.tab0.edtJOBS_GBNM","value","dsTA_CUSTXM","JOBS_GBNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Tab0.tab0.mskRERN_NUMB","value","dsTA_CUSTXM","RERN_NUMB");
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
        this.addIncludeScript("FAMA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0030.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMA0030 거래처정보등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.21		권미영		Initial Created.
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
        this.sBUTTONLIST 		= "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 		= "FAMA0030"; //해당 Form에서 사용 할 Package 명
        this.sLOAD_FORM			= this.parent.sLOAD_FORM;
        this.sSHRCUST_CODE 		= this.parent.sSHRCUST_CODE;
        this.sPARENT_USERLAVEL 	= this.parent.sPARENT_USERLAVEL;
        this.sNEWCUST_CODE 		= "";

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = "";   //Form의 Title 정보
        	this.sFORMLOCATION = "";   //Form의 Location 정보
        	this.sUSERLAVEL    = "";   //Form의 Location 정보
        	
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

        	if (this.sLOAD_FORM == "SHR") {
        		this.sBUTTONLIST = "TTFFTFTF";
        		this.Tab0.tab4.btnInput01.set_visible(false);
        		this.Tab0.tab4.btnDelete01.set_visible(false);
        		this.Tab0.tab5.btnInput02.set_visible(false);
        		this.Tab0.tab5.btnDelete02.set_visible(false);
        		
        		if (this.sPARENT_USERLAVEL == "1") {
        			this.Tab0.tab0.mskRERN_NUMB.set_mask("######-#######");
        		} else {
        			this.Tab0.tab0.mskRERN_NUMB.set_mask("######-#{######}");
        		}
        	}
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.cmbSHRUSEX_YSNO.set_value(1);
        	this.Tab0.set_tabindex(0);
        	this.edtSHRCUST_NAME.setFocus();
        	
        	//팝업을 호출한 화면으로부터 받은 발령호수를 조회조건에 설정
        	if (this.fnc_Length(this.fnc_Trim(this.sSHRCUST_CODE)) > 0) {
        		this.edtSHRCUST_CODE.set_value(this.sSHRCUST_CODE);
        		this.cmbSHRUSEX_YSNO.set_index(0);
        		this.fn_Search();
        	}
        	
        }
         
        /*-----------------------------------+
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

        	this.fnc_DatasetClear("dsTA_CUSTXM,dsTA_CUSTXD,dsTA_CUSTMN,dsTA_CUSTAC");
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_CUSTXM=dsTA_CUSTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_CUSTXM.setFocus();
        	
        }

        /*-----------------------------+
         |  04입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) { 
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_CUSTXM,dsTA_CUSTXD,dsTA_CUSTAC,dsTA_CUSTMN")) {
        		if (this.fnc_Message("TMM023") == false) {
        			return;
        		} else {
        			this.fnc_DatasetClear("dsTA_CUSTXM,dsTA_CUSTXD,dsTA_CUSTMN,dsTA_CUSTAC");
        		}
        	}
        	
        	// DataSet의 Header 정보가 있을 때  Add 처리
        	var nRow = this.dsTA_CUSTXM.addRow();

        	// 선택하지 않으면 삭제 되지 않는다.
        	this.grdTA_CUSTXM.selectRow(nRow);

        	// 기본값을 설정한다.
        	this.dsTA_CUSTXM.setColumn(nRow, "LFTY_CODE", "HR760010"); //국내외구분
        	this.dsTA_CUSTXM.setColumn(nRow, "CITY_CODE", "1"); //사업자/개인구분
        	this.dsTA_CUSTXM.setColumn(nRow, "USEX_YSNO", "1"); //사용여부

        	// 입력란을 조정한다.
        	//this.Tab0.tab0.mskBIZR_NUMB.set_mask('###-##-#####');
        	this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCapBE");
        	this.Tab0.tab0.stRERN_NUMB.set_cssclass("styFormItemCap");
        	
        	
        	this.fnc_DatasetClear("dsTA_CUSTXD");
        	var sMethodName = "SEARCH13";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_CUSTXD=dsTA_CUSTXD";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	
        	this.Tab0.set_tabindex(0);
        	this.Tab0.tab0.edtCUST_NAME.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck("TA_CUSTXM")) {
        		this.dsTA_CUSTXM.deleteMultiRows(this.grdTA_CUSTXM.getSelectedDatasetRows());
        		this.fnc_DatasetClear("dsTA_CUSTXD,dsTA_CUSTMN,dsTA_CUSTAC");	
        	}
        		
        	this.grdTA_CUSTXM.setFocus(); //Record 삭제 후 Grid로 Focus
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTA_CUSTXM,dsTA_CUSTMN,dsTA_CUSTAC,dsTA_CUSTXD");
        	this.grdTA_CUSTXM.setFocus();

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_CUSTXM=dsTA_CUSTXM:U dsTA_CUSTMN=dsTA_CUSTMN:U dsTA_CUSTAC=dsTA_CUSTAC:U dsTA_CUSTXD=dsTA_CUSTXD:U";
        	var sOutDataSet = "dsTA_CUSTXM=dsTA_CUSTXM dsTA_CUSTMN=dsTA_CUSTMN dsTA_CUSTAC=dsTA_CUSTAC";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTA_CUSTXM.setFocus();
        	
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_CUSTXM,dsTA_CUSTXD,dsTA_CUSTMN,dsTA_CUSTAC",this);
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

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck('dsTA_CUSTXM,dsTA_CUSTMN,dsTA_CUSTAC,dsTA_CUSTXD')) return this.fnc_Message("TMM023");

        	// 전체 조회시 시간이 너무 걸려 오류가 발생한다.
        	// 조회조건이 없을 시 확인 하고 진행한다.
        	var sShrStr = this.fnc_Trim(this.edtSHRCUST_NAME.value) + this.fnc_Trim(this.edtSHRCUST_CODE.value) + this.fnc_Trim(this.edtSHRBIZR_NUMB.value)
        		 + this.fnc_Trim(this.cmbSHRCUCL_CODE.value) + this.fnc_Trim(this.cmbSHRCUCL_CODE.value) + this.fnc_Trim(this.edtSHRMGMT_DTCD.value)
        		 + this.fnc_Trim(this.edtSHRSACH_EMNR.value) + this.fnc_Trim(this.cmbSHRLFTY_CODE.value) + this.fnc_Trim(this.cmbSHRUSEX_YSNO.value);

        	if (this.fnc_Trim(sShrStr) == "")  {
        		this.fnc_Message("TMM110");
        		return false;
        	}

        	return true;
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_CUSTXM,dsTA_CUSTMN,dsTA_CUSTAC,dsTA_CUSTXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_CUSTXM.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTA_CUSTXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "CUST_NAME"))) < 1) {
        			this.Tab0.set_tabindex(0);
        			return this.fnc_CheckPostAction("TMM072", "거래처명", this.dsTA_CUSTXM, i, this.Tab0.tab0.edtCUST_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "CUTY_CODE"))) < 1) {
        			this.Tab0.set_tabindex(0);
        			return this.fnc_CheckPostAction("TMM072", "거래처구분", this.dsTA_CUSTXM, i, this.Tab0.tab0.cmbCUTY_CODE, "");
        		}
        				
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "CITY_CODE"))) < 1) {
        			this.Tab0.set_tabindex(0);
        			return this.fnc_CheckPostAction("TMM072", "사업자/개인", this.dsTA_CUSTXM, i, this.Tab0.tab0.cmbCITY_CODE, "");		
        		} 
        		
        		// 사업자인 경우
        		if (this.dsTA_CUSTXM.getColumn(i, "CITY_CODE") == "1") {
        			
        			// 사업자 번호 체크한다.
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "BIZR_NUMB"))) < 1) {
        				this.Tab0.set_tabindex(0);
        				return this.fnc_CheckPostAction("TMM072", "사업자등록번호", this.dsTA_CUSTXM, i, this.Tab0.tab0.mskBIZR_NUMB, "");
        			}
        			
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "BIZR_NUMB"))) > 1) {
        				
        				if (this.dsTA_CUSTXM.getColumn(i, "LFTY_CODE") == "HR760020") {
        					
        					// 국외 일경우 자릿수만 확인
        					if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "BIZR_NUMB"))) < 10) {
        						this.Tab0.set_tabindex(0);
        						return this.fnc_CheckPostAction("TMM072", "임의의 관리 번호(10자리)", this.dsTA_CUSTXM, i, this.Tab0.tab0.mskBIZR_NUMB, "");
        					}
        					
        				} else  {
        				
        					if (!this.fnc_FormatCustNumber(this.dsTA_CUSTXM.getColumn(i, "BIZR_NUMB"))) {
        						this.Tab0.set_tabindex(0);
        						return this.fnc_CheckPostAction("TMM072", "정확한 사업자 번호", this.dsTA_CUSTXM, i, this.Tab0.tab0.mskBIZR_NUMB, "");
        					}
        					
        				}
        			}
        			
        		} else if (this.dsTA_CUSTXM.getColumn(i, "CITY_CODE") == "2") {
        				
        			// 개인인경우			
        			if (!this.fnc_ResidenceNumberCheck(this.dsTA_CUSTXM.getColumn(i, "RERN_NUMB"))) {
        				this.Tab0.set_tabindex(0);
        				return this.fnc_CheckPostAction("TMM009", "", this.dsTA_CUSTXM, i, this.Tab0.tab0.mskRERN_NUMB, "");
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "INCM_TYCD"))) < 1) {
        				this.Tab0.set_tabindex(0);
        				return this.fnc_CheckPostAction("TMM072", "소득유형", this.dsTA_CUSTXM, i, this.Tab0.tab0.cmbINCM_TYCD, "");
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "FORI_GUBN"))) < 1) {
        				this.Tab0.set_tabindex(0);
        				return this.fnc_CheckPostAction("TMM072", "내외국인구분", this.dsTA_CUSTXM, i, this.Tab0.tab0.cmbFORI_GUBN, "");
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "RESI_GUBN"))) < 1) {
        				this.Tab0.set_tabindex(0);
        				return this.fnc_CheckPostAction("TMM072", "거주구분", this.dsTA_CUSTXM, i, this.Tab0.tab0.cmbRESI_GUBN, "");
        			}
        			
        			if (this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "INCM_TYCD")) == "FA010010") {	// 사업소득
        			
        				if (this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "RESI_GUBN")) != "RM080002") {	// 비거주자
        					if (!this.fnc_FormatCustNumber(this.dsTA_CUSTXM.getColumn(i, "BIZR_NUMB"))) {
        						this.Tab0.set_tabindex(0);
        						return this.fnc_CheckPostAction("TMM072", "정확한 사업자 번호", this.dsTA_CUSTXM, i, this.Tab0.tab0.mskBIZR_NUMB, "");
        					}
        				}
        				
        				if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "JOBS_GUBN"))) < 1) {
        					this.Tab0.set_tabindex(0);
        					return this.fnc_CheckPostAction("TMM072", "직업구분", this.dsTA_CUSTXM, i, this.Tab0.tab0.edtJOBS_GBNM, "");
        				}
        			}
        			
        		}

        
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "OPEN_DATE"))) < 1) {
        			this.Tab0.set_tabindex(0);
        			return this.fnc_CheckPostAction("TMM072", "거래시작일", this.dsTA_CUSTXM, i, this.Tab0.tab0.calOPEN_DATE, "");
        		}

        // 		if (this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "CUTY_CODE")) == "TS100010") {
        // 			if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(i, "SHOP_CD"))) > 4) {
        // 				return this.fnc_CheckPostAction("TMM125", "거래처구분 매장은 거래처번호 4자리를 초과할수 없습니다", this.dsTA_CUSTXM, i, this.Tab0.tab0.edtSHOP_CD, "");
        // 			}
        // 		}
        		
        	}

        	// 거래처담당자
        	for (var i = 0; i < this.dsTA_CUSTMN.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTA_CUSTMN.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTMN.getColumn(i, "CHSN_NAME"))) < 1) {
        			this.Tab0.set_tabindex(1);
        			return this.fnc_CheckPostAction("TMM072", "담당자명", this.dsTA_CUSTMN, i, this.Tab0.tab4.grdTA_CUSTMN, "CHSN_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTMN.getColumn(i, "ELTR_MLAD"))) > 0) {
        			if (this.fnc_IsEmail(this.dsTA_CUSTMN.getColumn(i, "ELTR_MLAD")) == false) {
        				this.Tab0.set_tabindex(1);
        				return this.fnc_CheckPostAction("TMM300", "E-Mail 주소가 올바르지 않습니다.", this.dsTA_CUSTMN, i, this.Tab0.tab4.grdTA_CUSTMN, "ELTR_MLAD");
        			}
        		}

        		if (this.dsTA_CUSTMN.getCaseCount("MJCH_YSNO=='1'") > 1 || this.dsTA_CUSTMN.getCaseCount("MJCH_YSNO=='1'") < 1) {
        			this.Tab0.set_tabindex(1);
        			this.fnc_Message("TMM125", "한명의 대표담당자를 선택하세요");
        			return false;
        		}
        		
        	}

        	// 거래계좌
        	for (var i = 0; i < this.dsTA_CUSTAC.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTA_CUSTAC.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTAC.getColumn(i, "CUAC_CODE"))) < 1) {
        			this.Tab0.set_tabindex(2);
        			return this.fnc_CheckPostAction("TMM072", "계좌구분", this.dsTA_CUSTAC, i, this.Tab0.tab5.grdTA_CUSTAC, "CUAC_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTAC.getColumn(i, "BANK_CODE"))) < 1) {
        			this.Tab0.set_tabindex(2);
        			return this.fnc_CheckPostAction("TMM072", "금융기관", this.dsTA_CUSTAC, i, this.Tab0.tab5.grdTA_CUSTAC, "BANK_CDNM");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTAC.getColumn(i, "ACNT_NUMB"))) < 1) {
        			this.Tab0.set_tabindex(2);
        			return this.fnc_CheckPostAction("TMM072", "계좌번호", this.dsTA_CUSTAC, i, this.Tab0.tab5.grdTA_CUSTAC, "ACNT_NUMB");
        		}
        		
        		if (this.dsTA_CUSTAC.getCaseCount("MJAN_YSNO=='1'") > 1 || this.dsTA_CUSTAC.getCaseCount("MJAN_YSNO=='1'") < 1) {
        			this.Tab0.set_tabindex(2);
        			this.fnc_Message("TMM125", "한 개의 주거래계좌를 선택하세요");
        			return false;
        		}

        	}

        	return true;

        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {

        	var iSelectRowCount = 0;
        	var sQuestionText 	= "";
        	
        	// 거래처
        	if (sStatus == "TA_CUSTXM") {
        	
        		iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_CUSTXM);
        		sQuestionText = "거래처명 : '" + this.fnc_Trim(this.dsTA_CUSTXM.getColumn(this.dsTA_CUSTXM.rowposition, "CUST_NAME")) + "' 거래처";
        	
        	} else if (sStatus == "TA_CUSTMN") {
        		
        		iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tab4.grdTA_CUSTMN);
        		sQuestionText = "담당자명 : '" + this.dsTA_CUSTMN.getColumn(this.dsTA_CUSTMN.rowposition, "CHSN_NAME") + "' 거래처담당자";
        	
        	} else if (sStatus == "TA_CUSTAC") {
        	
        		iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tab5.grdTA_CUSTAC);
        		sQuestionText = "금융기관 : '" + this.Tab0.tab5.grdTA_CUSTAC.getCellText(this.dsTA_CUSTAC.rowposition, 1) + "' 거래계좌";
        	
        	} else if (sStatus == "TA_CUSTXD") {
        		
        		iSelectRowCount = this.fnc_SelectRowCount(this.Tab0.tab0.grdTA_CUSTXD);
        		sQuestionText = "거래처유형 : '" + this.Tab0.tab5.grdTA_CUSTXD.getCellText(0, 1) + "' 거래처유형";
        	
        	}

        	if (iSelectRowCount > 1) {
        		// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 				
        		sReturnString += " CUST_NAME=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_NAME.value)); //거래처명
        		sReturnString += " CUCL_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCUCL_CODE.value)); //거래처유형
        		sReturnString += " LFTY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRLFTY_CODE.value)); //국내외구분
        		sReturnString += " MGMT_DTCD=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRMGMT_DTCD.value)); //관리부서
        		sReturnString += " SACH_EMNR=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRSACH_EMNR.value)); //영업담당자
        		sReturnString += " USEX_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSEX_YSNO.value)); //사용여부
        		sReturnString += " CUTY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCUTY_CODE.value)); //거래처구분
        		sReturnString += " RETY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRRETY_CODE.value)); //관계사구분
        		sReturnString += " CUST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); //거래처코드
        		sReturnString += " BIZR_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRBIZR_NUMB.value)); //사업자/주민번호
        		sReturnString += " CITY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCITY_CODE.value)); //사업자/개인
        		
        	} else if (sKind == "SEARCH11") {

        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " CUST_CODE=" 	+ this.fnc_Quote(this.dsTA_CUSTXM.getColumn(this.dsTA_CUSTXM.rowposition, "CUST_CODE")); //거래처코드
        		
        	} else if (sKind == "SEARCH13") {

        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		//sReturnString += " CUST_CODE=" 	+ this.fnc_Quote(this.dsTA_CUSTXM.getColumn(this.dsTA_CUSTXM.rowposition, "CUST_CODE")); //거래처코드
        			
        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " CUST_NAME=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_NAME.value)); //거래처명
        		sReturnString += " CUCL_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCUCL_CODE.value)); //거래처유형
        		sReturnString += " LFTY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRLFTY_CODE.value)); //국내외구분
        		sReturnString += " MGMT_DTCD=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRMGMT_DTCD.value)); //관리부서
        		sReturnString += " SACH_EMNR=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRSACH_EMNR.value)); //영업담당자
        		sReturnString += " USEX_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRUSEX_YSNO.value)); //사용여부
        		sReturnString += " CUTY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRCUTY_CODE.value)); //거래처구분
        		sReturnString += " chkSAVE_YSNO=" + this.fnc_Quote("1"); //이력사항저장여부
        		
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

        		this.fnc_Information(this.stInformation, this.dsTA_CUSTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_CUSTXM.rowcount);	
        		
        		this.grdTA_CUSTXM.selectRow(this.dsTA_CUSTXM.rowposition);
        		
        	} else if (sMethodName == "SEARCH11") {
        		
        		this.Tab0.tab0.grdTA_CUSTXD.setCellProperty("Head", this.Tab0.tab0.grdTA_CUSTXD.getBindCellIndex("Body", "CHEK_CHEK"), "text", 0);
        		
        	} else if (sMethodName == "SEARCH13") {
        		
        		this.Tab0.tab0.grdTA_CUSTXD.setCellProperty("Head", this.Tab0.tab0.grdTA_CUSTXD.getBindCellIndex("Body", "CHEK_CHEK"), "text", 0);
        		
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        		var iCnt = 0;
        		
        		// 신규 등록 거래처코드 셋팅
        		var arrCode = this.fnc_Split(this.sNEWCUST_CODE, ",");

        		for (var i = 0; i < this.dsTA_CUSTXM.rowcount; i++) {
        			if (this.fnc_Length(this.dsTA_CUSTXM.getColumn(i, "CUST_CODE")) > 0) continue;
        			this.dsTA_CUSTXM.setColumn(i, "CUST_CODE", arrCode[iCnt]);
        			iCnt = iCnt + 1;
        		}
        		
        		this.dsTA_CUSTXM.applyChange();

        	} else if (sMethodName == "PROC00") {
        		
        		this.fnc_Message("TMM125", "구매카드가맹점번호 엑셀업로드 작업이 완료 되었습니다."); 
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC01") {
        	
        		this.fnc_Message("TMM125", "사원계좌 엑셀업로드 작업이 완료 되었습니다."); 
        		
        	} else if (sMethodName == "PROC02") {
        		
        		this.fnc_Message("TMM125", "거래처계좌 엑셀업로드 작업이 완료 되었습니다."); 
        	
        	} else if (sMethodName == "PROC03") {
        	
        		this.fnc_Message("TMM125", "거래처담당자 엑셀업로드 작업이 완료 되었습니다."); 

        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0]  = "COMBO,cmbSHRCUCL_CODE,dsSHRCUCL_CODE,0";
        		arrParam[1]  = "COMBO,cmbSHRCUTY_CODE,dsSHRCUTY_CODE,0";
        		arrParam[2]  = "COMBO,cmbSHRRETY_CODE,dsSHRRETY_CODE,0";
        		arrParam[3]  = "COMBO,cmbSHRLFTY_CODE,dsSHRLFTY_CODE,0";
        		arrParam[4]  = "COMBO,cmbSHRCITY_CODE,dsSHRCITY_CODE,0";
        		arrParam[5]  = "GRID,Tab0.tab5.grdTA_CUSTAC,dsCUAC_CODE,CUAC_CODE";
        		arrParam[6]  = "COMBO,Tab0.tab0.cmbPOST_GUBN,dsPOST_GUBN,0";
        		arrParam[7]  = "COMBO,Tab0.tab0.cmbLFTY_CODE,dsLFTY_CODE,0";
        		arrParam[8]  = "COMBO,Tab0.tab0.cmbCUTY_CODE,dsCUTY_CODE,0";
         		arrParam[9]  = "COMBO,Tab0.tab0.cmbRETY_CODE,dsRETY_CODE,0";
         		arrParam[10] = "GRID,grdTA_CUSTXM,dsCUTY_CODE,CUTY_CODE";
         		arrParam[11] = "GRID,grdTA_CUSTXM,dsRETY_CODE,RETY_CODE";
         		arrParam[12] = "COMBO,Tab0.tab0.cmbCITY_CODE,dsCITY_CODE,0";
         		arrParam[13] = "COMBO,Tab0.tab0.cmbUSEX_YSNO,dsUSEX_YSNO,0";
         		arrParam[14] = "COMBO,cmbSHRUSEX_YSNO,dsSHRUSEX_YSNO,0";
         		arrParam[15] = "COMBO,Tab0.tab0.cmbINCM_TYCD,dsINCM_TYCD,0";
         		arrParam[16] = "COMBO,Tab0.tab0.cmbFORI_GUBN,dsFORI_GUBN,0";
         		arrParam[17] = "COMBO,Tab0.tab0.cmbRESI_GUBN,dsRESI_GUBN,0";
         		arrParam[18] = "GRID,grdTA_CUSTXM,dsCITY_CODE,CITY_CODE";
         		arrParam[19] = "GRID,grdTA_CUSTXM,dsLFTY_CODE,LFTY_CODE";

        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		this.fnc_SetReadonly(this.cmbSHRRETY_CODE, true);

        	
        // 		// 코드명 조회 후 처리
        // 		this.fnc_MultiRowDisplay(this);
        // 		
        // 	} else if (sMethodName == "POSTSEARCH00") {
        // 		
        // 		// 우편번호 조회 후 처리
        // 		this.fnc_MultiRowDisplayPost(this);
        		
        	}
        	
        }

        /*----------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	// 영업담당자 조회조건
        	if ((obj.name == "imgHelpSHRSACH_EMNM") || (obj.name == "edtSHRSACH_EMNM")) {
        		
        		arrParam[0] = "TRM0004";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRSACH_EMNM.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "edtSHRSACH_EMNM";
        		arrParam[5] = "edtSHRSACH_EMNR,edtSHRSACH_EMNM";
        		arrParam[6] = "0,1";

        	// 관리부서 조회조건
        	} else if ((obj.name == "imgHelpSHRMGMT_DTNM") || (obj.name == "edtSHRMGMT_DTNM")) {
        	
        		arrParam[0] = "FAM0001";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRMGMT_DTNM.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "edtSHRMGMT_DTNM";
        		arrParam[5] = "edtSHRMGMT_DTCD,edtSHRMGMT_DTNM";
        		arrParam[6] = "0,1";
        		
        	// 영업담당자조회
        	} else if ((obj.name == "imgHelpSACH_EMNM") || (sColumnID == "SACH_EMNM")) {
        		
        		arrParam[0] = "TRM0004";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.Tab0.tab0.edtSACH_EMNM.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "Tab0.tab0.edtSACH_EMNM";
        		arrParam[5] = "Tab0.tab0.edtSACH_EMNR,Tab0.tab0.edtSACH_EMNM";
        		arrParam[6] = "0,1";
        		
        	// 관리부서조회
        	} else if ((obj.name == "imgHelpMGMT_DTNM") || (sColumnID == "MGMT_DTNM")) {
        		
        		arrParam[0] = "FAM0001";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.Tab0.tab0.edtMGMT_DTNM.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "Tab0.tab0.edtMGMT_DTNM";
        		arrParam[5] = "Tab0.tab0.edtMGMT_DTCD,Tab0.tab0.edtMGMT_DTNM";
        		arrParam[6] = "0,1";
        		
        	// 우편번호
        	} else if ((obj.name == "imgHelpADDR_DESC")) {

         		arrParam[0] = "COMPOST";  
         		arrParam[1] = "";
         		arrParam[2] = "";
         		arrParam[3] = "N"
         		arrParam[4] = "Tab0.tab0.edtADDR_DESC";
         		arrParam[5] = "Tab0.tab0.mskPOST_NUMB,Tab0.tab0.edtADDR_DESC,Tab0.tab0.edtDTL1_ADDR"; // 1. 우편번호 2. 주소 3. 상세주소[건물명]
         		arrParam[6] = ""; // 사용 안함
         		arrParam[9] = "fn_HelpPopupPost";
        		
        				
        	// 대표거래처
        	} else if ((obj.name == "imgHelpMAJR_CDNM") || (sColumnID == "MAJR_CDNM")) {
        	
        		arrParam[0] = "FAM0021";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.Tab0.tab0.edtMAJR_CDNM.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "Tab0.tab0.edtMAJR_CDNM";
        		arrParam[5] = "Tab0.tab0.edtMAJR_CUST,Tab0.tab0.edtMAJR_CDNM";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        	// 사번조회
        	} else if ((obj.name == "imgHelpEMPL_NUMB") || (sColumnID == "EMPL_NBNM")) {
        	
        		arrParam[0] = "TRM0004";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.Tab0.tab0.edtEMPL_NBNM.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "Tab0.tab0.edtEMPL_NBNM";
        		arrParam[5] = "Tab0.tab0.edtEMPL_NUMB,Tab0.tab0.edtEMPL_NBNM";
        		arrParam[6] = "0,1";
        		
        	// 직업구분
        	} else if ((obj.name == "imgHelpJOBS_GBNM") || (sColumnID == "JOBS_GBNM")) {
        	
        		arrParam[0] = "FAM0009";  
        		arrParam[1] = "JOBS_GUBN";
        		arrParam[2] = this.fnc_Trim(this.Tab0.tab0.edtJOBS_GBNM.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "Tab0.tab0.edtJOBS_GBNM";
        		arrParam[5] = "Tab0.tab0.edtJOBS_GUBN,Tab0.tab0.edtJOBS_GBNM";
        		arrParam[6] = "0,1";
        		
        	} else if (obj.name == "grdTA_CUSTAC") {
        	
        		// 연결항목조회
        		if (sColumnID == "BANK_CDNM" || this.fnc_getGridHelpColName(obj, sFromDs) == "BANK_CDNM") {
        		
        			arrParam[0] = "FAM0009"; 
        			arrParam[1] = "BANK_CODE";
        			arrParam[2] = "BANK_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "Tab0.tab5.grdTA_CUSTAC";
        			arrParam[5] = "BANK_CODE,BANK_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        		}
        		
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        this.fn_HelpPopupPost = function (sResponse) {

        	if (this.fnc_Length(sResponse) > 0) this.dsTA_CUSTXM.setColumn(this.dsTA_CUSTXM.rowposition, "POST_GUBN", "FA350020");	//신주소
        	
        }

        // 우편번호
        this.fn_ZIPCodeChanged = function (obj,e) {

        	if (obj.name != "mskPOST_NUMB") return;
        	
        	if (this.fnc_Length(this.fnc_Trim(this.Tab0.tab0.mskPOST_NUMB.value)) < 5) {
        		this.Tab0.tab0.cmbPOST_GUBN.set_index(0);
        	} else if (this.fnc_Length(this.fnc_Trim(this.Tab0.tab0.mskPOST_NUMB.value)) == 6) {
        		this.Tab0.tab0.cmbPOST_GUBN.set_index(1); //구주소(지번주소)
        	} else  {
        		this.Tab0.tab0.cmbPOST_GUBN.set_index(2); //신주소(도로명주소)
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  거래처담당자 입력시  |
         +------------------------*/
        this.Tab0_tab4_btnInput01_onclick = function (obj,e) {
        	
        	if (this.dsTA_CUSTXM.rowcount < 1) return false;

        // 	if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(this.dsTA_CUSTXM.rowposition, "CUST_CODE"))) < 1) {
        // 		this.fnc_Message("TMM125", "저장 버튼을 클릭해 거래처코드 생성후에 작업하시기 바랍니다.");
        // 		return false;
        // 	}

        	var iRow = this.dsTA_CUSTMN.addRow();
        	this.dsTA_CUSTMN.setColumn(iRow, "CUST_CODE", this.dsTA_CUSTXM.getColumn(this.dsTA_CUSTXM.rowposition, "CUST_CODE")); //거래처코드
        	this.dsTA_CUSTMN.setColumn(iRow, "SEQN_NUMB", this.dsTA_CUSTMN.getMax("SEQN_NUMB") + 1); //순번
        	this.dsTA_CUSTMN.setColumn(iRow, "MJCH_YSNO", "0"); //대표담당자

        	this.fnc_GridSetCellFocus(this.Tab0.tab4.grdTA_CUSTMN, "CHSN_NAME");
        	
        }

        /*-----------------------+
         |  거래처담당자 삭제시  |
         +------------------------*/
        this.Tab0_tab4_btnDelete_onclick = function (obj,e) {

        	if (this.fn_DeleteCheck("TA_CUSTMN")) this.dsTA_CUSTMN.deleteMultiRows(this.Tab0.tab4.grdTA_CUSTMN.getSelectedDatasetRows());

        }

        /*-----------------------+
         |  거래계좌 입력시  |
         +------------------------*/
        this.Tab0_tab5_btnInput02_onclick = function (obj,e) {
        	
        	if (this.dsTA_CUSTXM.rowcount < 1) return false;

        // 	if (this.fnc_Length(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(this.dsTA_CUSTXM.rowposition, "CUST_CODE"))) < 1) {
        // 		this.fnc_Message("TMM125", "저장 버튼을 클릭해 거래처코드 생성후에 작업하시기 바랍니다.");
        // 		return false;
        // 	}

        	var iRow = this.dsTA_CUSTAC.addRow();
        	this.dsTA_CUSTAC.setColumn(iRow, "CUST_CODE", this.dsTA_CUSTXM.getColumn(this.dsTA_CUSTXM.rowposition, "CUST_CODE")); //거래처코드
        	this.dsTA_CUSTAC.setColumn(iRow, "CUAC_CODE", "TS170010"); //일반
        	this.dsTA_CUSTAC.setColumn(iRow, "MJAN_YSNO", "0"); //주거래계좌여부

        	this.fnc_GridSetCellFocus(this.Tab0.tab5.grdTA_CUSTAC, "CUAC_CODE");
        	
        }

        /*-----------------------+
         |  거래계좌 삭제시  |
         +------------------------*/
        this.Tab0_tab5_btnDelete02_onclick = function (obj,e) {

        	if (this.fn_DeleteCheck("TA_CUSTAC")) this.dsTA_CUSTAC.deleteMultiRows(this.Tab0.tab5.grdTA_CUSTAC.getSelectedDatasetRows());
        	
        }

        /*------------------------------------+
         |  DataSet 컬럼에 변화가 있는지 여부  |
         +-------------------------------------*/
        this.dsTA_CUSTAC_oncolumnchanged = function (obj,e) {
        	
        	//if (e.oldvalue == e.newvalue) return;
        	if (e.columnid == "BANK_CDNM") {

        		this.fn_HelpDialoge(this.Tab0.tab5.grdTA_CUSTAC, "YES", e.oldvalue, e.columnid);

        	}
        		
        }

        /*---------------------------------+
         |  KeyFieldDisible 처리   |
         +----------------------------------*/
        this.dsTA_CUSTXD_onrowposchanged = function (obj,e) {
        	
        	var nRow = e.newrow;
        	var nOldRow = e.oldrow;
        	if (nRow == -1) return;

        	if (this.fnc_ToUpper(obj.getRowType(nRow)) == "INSERT") {
        		this.Tab0.tab0.grdTA_CUSTXD.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab0.grdTA_CUSTXD, "COMD_CDNM"), "edittype", "combo");
        	} else {
        		this.Tab0.tab0.grdTA_CUSTXD.setCellProperty("body", this.fnc_GridColumnIndex(this.Tab0.tab0.grdTA_CUSTXD, "COMD_CDNM"), "edittype", "none");
        	}
        }

        this.dsTA_CUSTXM_canrowposchange = function (obj,e) {

        	// 하위 레벨에 변경사항 있을 시 초기화 경고
        	if (this.fnc_DatasetChangeCheck("dsTA_CUSTXD") || this.fnc_DatasetChangeCheck("dsTA_CUSTMN") || this.fnc_DatasetChangeCheck("dsTA_CUSTAC") ) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        }

        /*---------------------------------+
         |  KeyFieldDisible 처리   |
         +----------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (obj.name != "dsTA_CUSTXM") return;
        	
        	if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_DatasetClear("dsTA_CUSTMN,dsTA_CUSTAC,dsTA_CUSTXD");
        	} else {
        		this.fn_DetailQuery();
        	}

        	if (obj.getColumn(e.newrow, "CUTY_CODE") == "TS100010") {
        		// 관계사면
        		this.fnc_SetReadonly(this.Tab0.tab0.cmbRETY_CODE, false);
        		this.fnc_SetReadonly(this.Tab0.tab0.calRELT_STDT, false);
        		this.fnc_SetReadonly(this.Tab0.tab0.calRELT_EDDT, false);
        	} else {
        		// 일반
        		this.fnc_SetReadonly(this.Tab0.tab0.cmbRETY_CODE, true);
        		this.fnc_SetReadonly(this.Tab0.tab0.calRELT_STDT, true);
        		this.fnc_SetReadonly(this.Tab0.tab0.calRELT_EDDT, true);
        	} 

        	if (obj.getColumn(e.newrow, "CITY_CODE") == "1") {
        	
        		// 법인
        		this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCapBE");
        		this.Tab0.tab0.stINCM_TYCD.set_cssclass("styFormItemCap");
        		this.Tab0.tab0.stFORI_GUBN.set_cssclass("styFormItemCap");
        		this.Tab0.tab0.stRESI_GUBN.set_cssclass("styFormItemCap");
        		this.Tab0.tab0.stJOBS_GUBN.set_cssclass("styFormItemCap");
        		this.Tab0.tab0.stRERN_NUMB.set_cssclass("styFormItemCap");
        		
        		this.fnc_SetReadonly(this.Tab0.tab0.cmbINCM_TYCD, true);
        		this.fnc_SetReadonly(this.Tab0.tab0.cmbFORI_GUBN, true);
        		this.fnc_SetReadonly(this.Tab0.tab0.cmbRESI_GUBN, true);
        		this.fnc_SetReadonly(this.Tab0.tab0.imgHelpJOBS_GBNM, true);
        		this.fnc_SetReadonly(this.Tab0.tab0.edtJOBS_GBNM, true);
        		this.fnc_SetReadonly(this.Tab0.tab0.mskRERN_NUMB, true);
        		
        // 		this.Tab0.tab0.cmbINCM_TYCD.set_index(0);
        // 		this.Tab0.tab0.cmbFORI_GUBN.set_index(0);
        // 		this.Tab0.tab0.cmbRESI_GUBN.set_index(0);
        // 		this.Tab0.tab0.edtJOBS_GUBN.set_value("");
        // 		this.Tab0.tab0.edtJOBS_GBNM.set_value("");
        //		this.Tab0.tab0.mskRERN_NUMB.set_value("");
        		
        	} else {

        		// 개인
        		this.Tab0.tab0.stRERN_NUMB.set_cssclass("styFormItemCapBE");
        		this.Tab0.tab0.stINCM_TYCD.set_cssclass("styFormItemCapBE");
        		this.Tab0.tab0.stFORI_GUBN.set_cssclass("styFormItemCapBE");
        		this.Tab0.tab0.stRESI_GUBN.set_cssclass("styFormItemCapBE");
        		if (obj.getColumn(e.newrow, "INCM_TYCD") == "FA010010") {	// 사업소득
        			
        			this.Tab0.tab0.stJOBS_GUBN.set_cssclass("styFormItemCapBE");		
        			this.fnc_SetReadonly(this.Tab0.tab0.imgHelpJOBS_GBNM, false);
        			this.fnc_SetReadonly(this.Tab0.tab0.edtJOBS_GBNM, false);
        			
        			if (obj.getColumn(e.newrow, "RESI_GUBN") == "RM080002")	{	// 비거주자
        				this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCap");
        			} else {
        				this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCapBE");
        			}
        			
        		} else {
        		
        			this.Tab0.tab0.stJOBS_GUBN.set_cssclass("styFormItemCap");
        			this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCap");
        			this.fnc_SetReadonly(this.Tab0.tab0.imgHelpJOBS_GBNM, true);
        			this.fnc_SetReadonly(this.Tab0.tab0.edtJOBS_GBNM, true);
        			
        		}
        		
        		this.fnc_SetReadonly(this.Tab0.tab0.cmbINCM_TYCD, false);
        		this.fnc_SetReadonly(this.Tab0.tab0.cmbFORI_GUBN, false);
        		this.fnc_SetReadonly(this.Tab0.tab0.cmbRESI_GUBN, false);
        // 		this.fnc_SetReadonly(this.Tab0.tab0.imgHelpJOBS_GBNM, false);
        // 		this.fnc_SetReadonly(this.Tab0.tab0.edtJOBS_GBNM, false);
        		this.fnc_SetReadonly(this.Tab0.tab0.mskRERN_NUMB, false);
        		
        	}		
        		
        }

        this.fn_DetailQuery = function () {

        	if (this.fnc_Length(this.dsTA_CUSTXM.getColumn(this.dsTA_CUSTXM.rowposition, "CUST_CODE")) < 6) return;

        	this.fnc_DatasetClear("dsTA_CUSTMN,dsTA_CUSTAC,dsTA_CUSTXD");
        	var sMethodName = "SEARCH11";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_CUSTMN=dsTA_CUSTMN dsTA_CUSTAC=dsTA_CUSTAC dsTA_CUSTXD=dsTA_CUSTXD";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*--------------------+
         |  데이터셋 변경 시  |
         +--------------------*/
        this.dsTA_CUSTXM_oncolumnchanged = function(obj,e) {
        	
        	if ( e.columnid == "SACH_EMNM" || e.columnid == "MGMT_DTNM" || e.columnid == "MAJR_CDNM" 
        	  || e.columnid == "EMPL_NBNM" || e.columnid == "JOBS_GBNM" ) {
        		
        		this.fn_HelpDialoge(this.Tab0.tab0.components["edt"+e.columnid], "YES", e.oldvalue, e.columnid);
        		
        	} else if (e.columnid == "CUTY_CODE") {
        	
        		// 거래처 구분
        		if (e.newvalue == "TS100010") {
        			// 관계사면
        			this.fnc_SetReadonly(this.Tab0.tab0.cmbRETY_CODE, false);
        			this.fnc_SetReadonly(this.Tab0.tab0.calRELT_STDT, false);
        			this.fnc_SetReadonly(this.Tab0.tab0.calRELT_EDDT, false);
        		} else  {
        			this.fnc_SetReadonly(this.Tab0.tab0.cmbRETY_CODE, true);
        			this.fnc_SetReadonly(this.Tab0.tab0.calRELT_STDT, true);
        			this.fnc_SetReadonly(this.Tab0.tab0.calRELT_EDDT, true);
        			obj.setColumn(e.row, "RETY_CODE", "");
        			obj.setColumn(e.row, "RELT_STDT", "");
        			obj.setColumn(e.row, "RELT_EDDT", "");
        		}
        		
        	} else if (e.columnid == "CITY_CODE") {
        	
        		if (e.newvalue == "1") {
        			// 법인
        // 			this.Tab0.tab0.mskBIZR_NUMB.set_mask("###-##-#####");
        // 			this.Tab0.tab0.stBIZR_NUMB.set_text("사업자번호");
        			
        			this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCapBE");
        			this.Tab0.tab0.stRERN_NUMB.set_cssclass("styFormItemCap");
        			
        			this.Tab0.tab0.stINCM_TYCD.set_cssclass("styFormItemCap");
        			this.Tab0.tab0.stFORI_GUBN.set_cssclass("styFormItemCap");
        			this.Tab0.tab0.stRESI_GUBN.set_cssclass("styFormItemCap");
        			this.Tab0.tab0.stJOBS_GUBN.set_cssclass("styFormItemCap");			
        			
        			this.fnc_SetReadonly(this.Tab0.tab0.cmbINCM_TYCD, true);
        			this.fnc_SetReadonly(this.Tab0.tab0.cmbFORI_GUBN, true);
        			this.fnc_SetReadonly(this.Tab0.tab0.cmbRESI_GUBN, true);
        			this.fnc_SetReadonly(this.Tab0.tab0.imgHelpJOBS_GBNM, true);
        			this.fnc_SetReadonly(this.Tab0.tab0.edtJOBS_GBNM, true);
        			this.fnc_SetReadonly(this.Tab0.tab0.mskRERN_NUMB, true);
        			
        			this.Tab0.tab0.cmbINCM_TYCD.set_index(0);
        			this.Tab0.tab0.cmbFORI_GUBN.set_index(0);
        			this.Tab0.tab0.cmbRESI_GUBN.set_index(0);
        			this.Tab0.tab0.edtJOBS_GUBN.set_value("");
        			this.Tab0.tab0.edtJOBS_GBNM.set_value("");
        			this.Tab0.tab0.mskRERN_NUMB.set_value("");

        			
        		} else  {
        			// 개인
        // 			this.Tab0.tab0.mskBIZR_NUMB.set_mask("######-#######");
        // 			this.Tab0.tab0.stBIZR_NUMB.set_text("주민등록번호");
        			
        			this.Tab0.tab0.stRERN_NUMB.set_cssclass("styFormItemCapBE");
        			
        			this.Tab0.tab0.stINCM_TYCD.set_cssclass("styFormItemCapBE");
        			this.Tab0.tab0.stFORI_GUBN.set_cssclass("styFormItemCapBE");
        			this.Tab0.tab0.stRESI_GUBN.set_cssclass("styFormItemCapBE");
        			if (obj.getColumn(e.row, "INCM_TYCD") == "FA010010") {	// 사업소득
        			
        				this.Tab0.tab0.stJOBS_GUBN.set_cssclass("styFormItemCapBE");
        				this.fnc_SetReadonly(this.Tab0.tab0.imgHelpJOBS_GBNM, false);
        				this.fnc_SetReadonly(this.Tab0.tab0.edtJOBS_GBNM, false);
        				//trace(" -" + this.Tab0.tab0.edtJOBS_GBNM.readonly);

        				if (obj.getColumn(e.row, "RESI_GUBN") == "RM080002") {	// 비거주자
        					this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCap");
        				} else {
        					this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCapBE");
        				}
        			
        			} else {
        			
        				this.Tab0.tab0.stJOBS_GUBN.set_cssclass("styFormItemCap");
        				this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCap");
        				this.fnc_SetReadonly(this.Tab0.tab0.imgHelpJOBS_GBNM, true);
        				this.fnc_SetReadonly(this.Tab0.tab0.edtJOBS_GBNM, true);
        				
        				this.Tab0.tab0.edtJOBS_GUBN.set_value("");
        				this.Tab0.tab0.edtJOBS_GBNM.set_value("");
        				//this.Tab0.tab0.mskRERN_NUMB.set_value("");
        				alert(1);
        			
        			}
        			
        			this.fnc_SetReadonly(this.Tab0.tab0.cmbINCM_TYCD, false);
        			this.fnc_SetReadonly(this.Tab0.tab0.cmbFORI_GUBN, false);
        			this.fnc_SetReadonly(this.Tab0.tab0.cmbRESI_GUBN, false);
        // 			this.fnc_SetReadonly(this.Tab0.tab0.imgHelpJOBS_GBNM, false);
        // 			this.fnc_SetReadonly(this.Tab0.tab0.edtJOBS_GBNM, false);
        			this.fnc_SetReadonly(this.Tab0.tab0.mskRERN_NUMB, false);
        			
        		}
        		
        	} else if (e.columnid == "INCM_TYCD") {
        		
        		if (e.newvalue == "FA010010") {	// 사업소득

        			this.Tab0.tab0.stJOBS_GUBN.set_cssclass("styFormItemCapBE");
        			this.fnc_SetReadonly(this.Tab0.tab0.imgHelpJOBS_GBNM, false);
        			this.fnc_SetReadonly(this.Tab0.tab0.edtJOBS_GBNM, false);
        			
        			if (obj.getColumn(e.row, "RESI_GUBN") == "RM080002") {	// 비거주자
        				this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCap");
        			} else {
        				this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCapBE");
        			}
        		
        		} else {

        			this.Tab0.tab0.stJOBS_GUBN.set_cssclass("styFormItemCap");
        			this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCap");
        			this.fnc_SetReadonly(this.Tab0.tab0.imgHelpJOBS_GBNM, true);
        			this.fnc_SetReadonly(this.Tab0.tab0.edtJOBS_GBNM, true);
        		
        		}
        		
        	} else if (e.columnid == "RESI_GUBN") {
        	
        		if (e.newvalue == "RM080002") {	// 비거주자
        			this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCap");
        		} else {
        			this.Tab0.tab0.stBIZR_NUMB.set_cssclass("styFormItemCapBE");
        		}
        		
        	}
        	
        }

        // 2014.10.15.PIH : 거래처담당자 대표는 한명만 가능!
        this.dsTA_CUSTMN_onncolumnchanged = function (obj,e) {
        	
        	if (e.columnid == "MJCH_YSNO") {
        		for (var i = 0; i < this.dsTA_CUSTMN.getRowCount(); i++) {
        			if (i != e.row && e.newvalue == "1") this.dsTA_CUSTMN.setColumn(i, "MJCH_YSNO", "0");
        		}
        	}
        	
        }

        // 거래처구분에 따른 관계사구분
        this.cmbSHRCUTY_CODE_onitemchanged = function (obj,e) {
        	
        	if (obj.value == "TS100010") {	// 관계사면
        		this.fnc_SetReadonly(this.cmbSHRRETY_CODE, false);
        	} else  {
        		this.cmbSHRRETY_CODE.set_index(0);
        		this.fnc_SetReadonly(this.cmbSHRRETY_CODE, true);
        	}
        	
        }

        /*---------------------+
         |  체크박스 헤더클릭  |
         +---------------------*/
        this.Tab0_tab0_grdTA_CUSTXD_onheadclick = function(obj,e) {

        	var sCol = "CHEK_CHEK";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);

        }

        // /*-----------------------------------------+
        //  |  거래처정보 양식파일 다운로드 클릭 時|
        //  +------------------------------------------*/
        // this.fn_ExcelFileDown = function (obj:Button, e:nexacro.ClickEventInfo) {
        // 	// 양식받기는 고정값('upload/sample/') 으로 지정한다..
        // 	// 엑셀양식은 기존의 명칭을 사용한다..
        // 	var folderName = 'upload/sample/';
        // 	var fileName = 'UpSample_CustInformation.xls';
        // 
        // 	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        // 	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        // }
        // 
        // /*------------------------------------------+
        //  |  거래처정보 양식파일 업로드 클릭 時   |
        //  +-------------------------------------------*/
        // this.fn_ExcelUpLoad = function (obj:Button, e:nexacro.ClickEventInfo) {
        // 	
        // 	// 2014. 신규
        // 	var fdNSE_FILE = new FileDialog();
        // 	var vfNSE_FILE = new VirtualFile();
        // 
        // 	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");
        // 
        // 	var vFile = fdNSE_FILE.open("거래처정보등록 엑셀 업로드", FileDialog.LOAD, "%MYDOCUMENT%");
        // 
        // 	if (vFile == null) return false;
        // 
        // 	var objExtComm = new ExtCommon();
        // 
        // 	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);
        // 
        // 	this.dsTA_CUSTXM_TEMP.set_updatecontrol(false);
        // 
        // 	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) {
        // 	
        // 		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) {
        // 		
        // 			var nRow = this.dsTA_CUSTXM_TEMP.addRow();
        // 
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'CUTY_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))); //거래처구분
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'RETY_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //관계사구분
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'CUST_NAME', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 2))); //거래처명
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'CUST_BFNM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 3))); //거래처명(약)
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'OWNR_NAME', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 4))); //대표자명
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'CITY_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 5))); //사업자/개인
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'BIZR_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 6))); //사업자/주민번호
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'CORP_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 7))); //법인등록번호
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'LFTY_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 8))); //국내외구분
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'SACH_EMNR', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 9))); //담당자사원번호
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'MGMT_DTCD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 10))); //관리부서
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'BSNS_STAT', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 11))); //업태
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'BSNS_TYPE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 12))); //업종
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'POST_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 13))); //우편번호
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'POST_GUBN', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 14))); //우편번호구분
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'ADDR_DESC', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 15))); //주소
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'DTL1_ADDR', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 16))); //상세주소
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'TELE_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 17))); //전화번호
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'FAXX_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 18))); //팩스번호
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'ELTR_MLAD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 19))); //대표이메일
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'OPEN_DATE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 20))); //거래시작일
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'CLOS_DATE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 21))); //거래종료일
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'USEX_YSNO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 22))); //사용여부
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'TXAP_CUNM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 23))); //부가세신고용명칭
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'MPBZ_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 24))); //종사업장승인번호
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'PUCD_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 25))); //구매카드 가맹점 번호
        // 			this.dsTA_CUSTXM_TEMP.setColumn(nRow, 'EMPL_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 26))); //사원번호
        // 		
        // 		}
        // 		
        // 	}
        // 
        // 	this.dsTA_CUSTXM_TEMP.set_updatecontrol(true);
        // 
        // 	// 복사 전 체크
        // 	if (this.fn_ExcelUploadCheck(this.dsTA_CUSTXM_TEMP)) {
        // 		
        // 		// TEMP DataSet에서 복사.
        // 		this.dsTA_CUSTXM.copyData(this.dsTA_CUSTXM_TEMP);
        // 
        // 		// 복사해온 Row Status는 Insert Type.
        // 		this.dsTA_CUSTXM.set_updatecontrol(false);
        // 		for (var i = 0; i < this.dsTA_CUSTXM.getRowCount(); i++) {
        // 			this.dsTA_CUSTXM.setRowType(i, Dataset.ROWTYPE_INSERT);
        // 		}
        // 		this.dsTA_CUSTXM.set_updatecontrol(true);
        // 
        // 		this.stInformation.set_text((this.dsTA_CUSTXM.rowcount + "개의 데이타를 로드 했습니다."));
        // 
        // 		this.dsTA_CUSTXM.set_rowposition(0);
        // 
        // 		this.grdTA_CUSTXM.setFocus();
        // 	}
        // 
        // 	this.dsTA_CUSTXM_TEMP.clearData();
        // 
        // }
        // 
        // /*-----------------------+
        //  |  엑셀 업로드 전 처리 ! |
        //  +------------------------*/
        // this.fn_ExcelUploadCheck = function (dataSet) {
        // 	
        // 	if (dataSet.getRowCount() < 1) {
        // 		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        // 		return false;
        // 	}
        // 
        // 	// 거래처정보
        // 	if (dataSet.name == 'dsTA_CUSTXM_TEMP') {
        // 	
        // 		// 필수 입력 항목 체크
        // 		for (var i = 0; i < dataSet.getRowCount(); i++) {
        // 			// 거래처구분
        // 			if (this.fnc_Trim(dataSet.getColumn(i, "CUTY_CODE")) == "TS100010") {
        // 				if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "RETY_CODE"))) < 3) {
        // 					this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 관계사코드가 잘못되었습니다.");
        // 					return false;
        // 				}
        // 			} else if (this.fnc_Trim(dataSet.getColumn(i, "CUTY_CODE")) == "TS100020") {
        // 				dataSet.setColumn(i, "RETY_CODE", "");
        // 			} else  {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 거래처구분이 잘못되었습니다.");
        // 				return false;
        // 			}
        // 
        // 			// 거래처명
        // 			if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "CUST_NAME"))) < 1) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 거래처명이 잘못되었습니다.");
        // 				return false;
        // 			}
        // 
        // 			// 대표자명
        // 			if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "OWNR_NAME"))) < 1) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 대표자명이 잘못되었습니다.");
        // 				return false;
        // 			}
        // 
        // 			// 사업자/개인 구분(미입력 or 잘 못 입력時 사업자로 간주)
        // 			if (this.fnc_Trim(dataSet.getColumn(i, "CITY_CODE")) == "1") {
        // 				if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "BIZR_NUMB"))) < 10) {
        // 					this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 사업자번호가 잘못되었습니다.");
        // 					return false;
        // 				}
        // 			} else if (this.fnc_Trim(dataSet.getColumn(i, "CITY_CODE")) == "2") {
        // 				if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "BIZR_NUMB"))) < 13) {
        // 					this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 주민등록번호가 잘못되었습니다.");
        // 					return false;
        // 				}
        // 			} else {
        // 				if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "BIZR_NUMB"))) < 10) {
        // 					this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 사업자번호가 잘못되었습니다.");
        // 					return false;
        // 				}
        // 				dataSet.setColumn(i, "CITY_CODE", "1");
        // 			}
        // 
        // 			// 법인등록번호
        // 			if (!this.IsNull(dataSet.getColumn(i, "CORP_NUMB"))) {
        // 				if (this.fnc_Length(dataSet.getColumn(i, "CORP_NUMB")) < 13) {
        // 					this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 법인등록번호가 잘못되었습니다.");
        // 					return false;
        // 				}
        // 			}
        // 
        // 			// 거래시작일자
        // 			if (!this.fnc_IsDate(dataSet.getColumn(i, "OPEN_DATE"))) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 거래시작일자가 잘못되었습니다.");
        // 				return false;
        // 			}
        // 
        // 			// 거래종료일자
        // 			if (!this.IsNull(dataSet.getColumn(i, "CLOS_DATE"))) {
        // 				if (!this.fnc_IsDate(dataSet.getColumn(i, "CLOS_DATE"))) {
        // 					this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 거래종료일자가 잘못되었습니다.");
        // 					return false;
        // 				}
        // 			}
        // 
        // 			// 사용여부(미입력 or 잘 못 입력時 사용으로 간주)
        // 			if (!(this.fnc_Trim(dataSet.getColumn(i, "USEX_YSNO")) == "0") && !(this.fnc_Trim(dataSet.getColumn(i, "USEX_YSNO")) == "1")) {
        // 				dataSet.setColumn(i, "USEX_YSNO", "1");
        // 			}
        // 
        // 			// 국내외구분(미입력 or 잘 못 입력時 국내로 간주)
        // 			if (!(this.fnc_Trim(dataSet.getColumn(i, "LFTY_CODE")) == "HR760010") && !(this.fnc_Trim(dataSet.getColumn(i, "LFTY_CODE")) == "HR760020")) {
        // 				dataSet.setColumn(i, "LFTY_CODE", "HR760010");
        // 			}
        // 		}
        // 
        // 		// 사원계좌
        // 	} else if (dataSet.name == 'dsTA_CUSTAC_EMPL') {
        // 	
        // 		for (var i = 0; i < dataSet.getRowCount(); i++) {
        // 			if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "EMPL_NUMB"))) != 7) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 사번이 잘못되었습니다.");
        // 				return false;
        // 			} else if (this.fnc_Trim(dataSet.getColumn(i, "CUAC_CODE")) != "TS170010") {
        // 				dataSet.setColumn(i, "CUAC_CODE", "TS170010");
        // 			} else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "BANK_CODE"))) != 3) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 금융기관코드가 잘못되었습니다.");
        // 				return false;
        // 			} else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "ACNT_NUMB"))) < 1) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 계좌번호가 잘못되었습니다.");
        // 				return false;
        // 			} else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "ACNT_MANM"))) < 1) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 예금주가 잘못되었습니다.");
        // 				return false;
        // 			} else if (this.fnc_Trim(dataSet.getColumn(i, "MJAN_YSNO")) != '1' && this.fnc_Trim(dataSet.getColumn(i, "MJAN_YSNO")) != '0') {
        // 				dataSet.setColumn(i, "MJAN_YSNO", "0");
        // 			}
        // 		}
        // 		
        // 	} else if (dataSet.name == 'dsTA_CUSTAC_CUST') {
        // 	
        // 		for (var i = 0; i < dataSet.getRowCount(); i++) {
        // 			if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "BIZR_NUMB"))) < 10) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 사업자번호가 잘못되었습니다.");
        // 				return false;
        // 			} else if (this.fnc_Trim(dataSet.getColumn(i, "CUAC_CODE")) != "TS170010") {
        // 				dataSet.setColumn(i, "CUAC_CODE", "TS170010");
        // 			} else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "BANK_CODE"))) != 3) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 금융기관코드가 잘못되었습니다.");
        // 				return false;
        // 			} else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "ACNT_NUMB"))) < 1) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 계좌번호가 잘못되었습니다.");
        // 				return false;
        // 			} else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "ACNT_MANM"))) < 1) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 예금주가 잘못되었습니다.");
        // 				return false;
        // 			} else if (this.fnc_Trim(dataSet.getColumn(i, "MJAN_YSNO")) != '1' && this.fnc_Trim(dataSet.getColumn(i, "MJAN_YSNO")) != '0') {
        // 				dataSet.setColumn(i, "MJAN_YSNO", "0");
        // 			}
        // 		}
        // 		
        // 	} else if (dataSet.name == 'dsTA_CUSTMN_TEMP') {
        // 	
        // 		for (var i = 0; i < dataSet.getRowCount(); i++) {
        // 			if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "BIZR_NUMB"))) < 10) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 사업자번호가 잘못되었습니다.");
        // 				return false;
        // 			} else if (this.fnc_Length(this.fnc_Trim(dataSet.getColumn(i, "CHSN_NAME"))) < 1) {
        // 				this.fnc_Message("TMM125", "엑셀파일의 " + (i + 1) + "번째 Row의 담당자명이 잘못되었습니다.");
        // 				return false;
        // 			} else if (this.fnc_Trim(dataSet.getColumn(i, "MJCH_YSNO")) != '1' && this.fnc_Trim(dataSet.getColumn(i, "MJCH_YSNO")) != '0') {
        // 				dataSet.setColumn(i, "MJCH_YSNO", "0");
        // 			}
        // 		}
        // 		
        // 	} else {
        // 	
        // 		return false;
        // 		
        // 	}
        // 
        // 	return true;
        // 	
        // }
        // 
        // /*----------------------------------------------+
        //  |  구매카드가맹점 양식파일 업로드 클릭 時   |
        //  +-----------------------------------------------*/
        // this.fn_ExcelUpLoad2 = function (obj:Button, e:nexacro.ClickEventInfo) {
        // 	
        // 	var fdNSE_FILE = new FileDialog();
        // 	var vfNSE_FILE = new VirtualFile();
        // 
        // 	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");
        // 
        // 	var vFile = fdNSE_FILE.open("구매카드가맹점번호 엑셀업로드", FileDialog.LOAD, "%MYDOCUMENT%");
        // 
        // 	if (vFile == null) return false;
        // 
        // 	var objExtComm = new ExtCommon();
        // 
        // 	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);
        // 
        // 	this.dsTB_JOINNO.set_updatecontrol(false);
        // 
        // 	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) {
        // 		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) {
        // 			var nRow = this.dsTB_JOINNO.addRow();
        // 
        // 			this.dsTB_JOINNO.setColumn(nRow, 'BIZR_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))); //사업자/주민번호
        // 			this.dsTB_JOINNO.setColumn(nRow, 'PUCD_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //구매카드 가맹점 번호
        // 		}
        // 	}
        // 
        // 	this.dsTB_JOINNO.set_updatecontrol(true);
        // 
        // 	// 저장 여부 확인
        // 	if (this.fnc_Message("TMM140", this.dsTB_JOINNO.rowcount + "개의 데이타를 업로드 하시겠습니까") == false) {
        // 		this.dsTB_JOINNO.clearData();
        // 		return false;
        // 	}
        // 
        // 	var sMethodName = "PROC00";
        // 	var sInDataSet = "dsTB_JOINNO=dsTB_JOINNO:A";
        // 	var sOutDataSet = "";
        // 	var sArgument = this.fn_CreateArgument(sMethodName);
        // 	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        // 
        // 	this.grdTA_CUSTXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        // 	
        // }
        // 
        // /*------------------------------------------------+
        //  |  구매카드가맹점 양식파일 다운로드 클릭 時   |
        //  +-------------------------------------------------*/
        // this.fn_ExcelFileDown2 = function (obj:Button, e:nexacro.ClickEventInfo) {
        // 
        // 	// 양식받기는 고정값('upload/sample/') 으로 지정한다..
        // 	// 엑셀양식은 기존의 명칭을 사용한다..
        // 	var folderName = 'upload/sample/';
        // 	var fileName = 'UpSample_SaleNumber.xls';
        // 
        // 	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        // 	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        // 	
        // }
        // 
        // /*----------------------------------------+
        //  |  사원계좌 양식파일 업로드 클릭 時   |
        //  +-----------------------------------------*/
        // this.fn_ExcelUpLoad3 = function (obj:Button, e:nexacro.ClickEventInfo) {
        // 	
        // 	var fdNSE_FILE = new FileDialog();
        // 	var vfNSE_FILE = new VirtualFile();
        // 
        // 	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");
        // 
        // 	var vFile = fdNSE_FILE.open("사원계좌 엑셀업로드", FileDialog.LOAD, "%MYDOCUMENT%");
        // 
        // 	if (vFile == null) return false;
        // 
        // 	var objExtComm = new ExtCommon();
        // 
        // 	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);
        // 
        // 	this.dsTA_CUSTAC_EMPL.set_updatecontrol(false);
        // 
        // 	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) {
        // 		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) {
        // 			var nRow = this.dsTA_CUSTAC_EMPL.addRow();
        // 
        // 			this.dsTA_CUSTAC_EMPL.setColumn(nRow, 'EMPL_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))); //사원번호
        // 			this.dsTA_CUSTAC_EMPL.setColumn(nRow, 'CUAC_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //계좌구분
        // 			this.dsTA_CUSTAC_EMPL.setColumn(nRow, 'BANK_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 2))); //은행코드
        // 			this.dsTA_CUSTAC_EMPL.setColumn(nRow, 'BANK_CDNM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 3))); //은행명
        // 			this.dsTA_CUSTAC_EMPL.setColumn(nRow, 'ACNT_NUMB', this.fnc_Replace(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 4)), "-", "")); //계좌번호
        // 			this.dsTA_CUSTAC_EMPL.setColumn(nRow, 'ACNT_MANM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 5))); //예금주
        // 			this.dsTA_CUSTAC_EMPL.setColumn(nRow, 'MJAN_YSNO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 6))); //주거래여부
        // 		}
        // 	}
        // 
        // 	this.dsTA_CUSTAC_EMPL.set_updatecontrol(true);
        // 
        // 	// 체크
        // 	if (this.fn_ExcelUploadCheck(this.dsTA_CUSTAC_EMPL)) {
        // 		this.dsTA_CUSTAC_EMPL.set_updatecontrol(false);
        // 
        // 		for (var i = 0; i < this.dsTA_CUSTAC_EMPL.getRowCount(); i++) {
        // 			this.dsTA_CUSTAC_EMPL.setRowType(i, Dataset.ROWTYPE_INSERT);
        // 		}
        // 
        // 		this.dsTA_CUSTAC_EMPL.set_updatecontrol(true);
        // 
        // 		// 저장 여부 확인
        // 		if (this.fnc_Message("TMM140", this.dsTA_CUSTAC_EMPL.rowcount + "개의 데이타를 업로드 하시겠습니까") == false) {
        // 			this.dsTA_CUSTAC_EMPL.clearData();
        // 			return false;
        // 		}
        // 
        // 		var sMethodName = "PROC01";
        // 		var sInDataSet = "dsTA_CUSTAC_EMPL=dsTA_CUSTAC_EMPL:A";
        // 		var sOutDataSet = "";
        // 		var sArgument = this.fn_CreateArgument(sMethodName);
        // 		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        // 
        // 		this.grdTA_CUSTXM.setFocus();
        // 	}
        // 
        // 	this.dsTA_CUSTAC_EMPL.clearData();
        // 	
        // }
        // 
        // /*------------------------------------------+
        //  |  사원계좌 양식파일 다운로드 클릭 時   |
        //  +-------------------------------------------*/
        // this.fn_ExcelFileDown3 = function (obj:Button, e:nexacro.ClickEventInfo) {
        // 
        // 	// 양식받기는 고정값('upload/sample/') 으로 지정한다..
        // 	// 엑셀양식은 기존의 명칭을 사용한다..
        // 	var folderName = 'upload/sample/';
        // 	var fileName = 'UpSample_EmplAccount.xls';
        // 
        // 	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        // 	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        // 	
        // }
        // 
        // /*------------------------------------------+
        //  |  거래처계좌 양식파일 업로드 클릭 時   |
        //  +-------------------------------------------*/
        // this.fn_ExcelUpLoad4 = function (obj:Button, e:nexacro.ClickEventInfo) {
        // 	
        // 	var fdNSE_FILE = new FileDialog();
        // 	var vfNSE_FILE = new VirtualFile();
        // 
        // 	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");
        // 
        // 	var vFile = fdNSE_FILE.open("거래처계좌 엑셀업로드", FileDialog.LOAD, "%MYDOCUMENT%");
        // 
        // 	if (vFile == null) return false;
        // 
        // 	var objExtComm = new ExtCommon();
        // 
        // 	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);
        // 
        // 	this.dsTA_CUSTAC_CUST.set_updatecontrol(false);
        // 
        // 	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) {
        // 		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) {
        // 			var nRow = this.dsTA_CUSTAC_CUST.addRow();
        // 
        // 			this.dsTA_CUSTAC_CUST.setColumn(nRow, 'BIZR_NUMB', this.fnc_Replace(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0)), "-", "")); //사업자번호
        // 			this.dsTA_CUSTAC_CUST.setColumn(nRow, 'CUAC_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //계좌구분
        // 			this.dsTA_CUSTAC_CUST.setColumn(nRow, 'BANK_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 2))); //은행코드
        // 			this.dsTA_CUSTAC_CUST.setColumn(nRow, 'BANK_CDNM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 3))); //은행명
        // 			this.dsTA_CUSTAC_CUST.setColumn(nRow, 'ACNT_NUMB', this.fnc_Replace(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 4)), "-", "")); //계좌번호
        // 			this.dsTA_CUSTAC_CUST.setColumn(nRow, 'ACNT_MANM', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 5))); //예금주
        // 			this.dsTA_CUSTAC_CUST.setColumn(nRow, 'MJAN_YSNO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 6))); //주거래여부
        // 		}
        // 	}
        // 
        // 	this.dsTA_CUSTAC_CUST.set_updatecontrol(true);
        // 
        // 	// 체크
        // 	if (this.fn_ExcelUploadCheck(this.dsTA_CUSTAC_CUST)) {
        // 		this.dsTA_CUSTAC_CUST.set_updatecontrol(false);
        // 
        // 		for (var i = 0; i < this.dsTA_CUSTAC_CUST.getRowCount(); i++) {
        // 			this.dsTA_CUSTAC_CUST.setRowType(i, Dataset.ROWTYPE_INSERT);
        // 		}
        // 
        // 		this.dsTA_CUSTAC_CUST.set_updatecontrol(true);
        // 
        // 		// 저장 여부 확인
        // 		if (this.fnc_Message("TMM140", this.dsTA_CUSTAC_CUST.rowcount + "개의 데이타를 업로드 하시겠습니까") == false) {
        // 			this.dsTA_CUSTAC_CUST.clearData();
        // 			return false;
        // 		}
        // 
        // 		var sMethodName = "PROC02";
        // 		var sInDataSet = "dsTA_CUSTAC_CUST=dsTA_CUSTAC_CUST:A";
        // 		var sOutDataSet = "";
        // 		var sArgument = this.fn_CreateArgument(sMethodName);
        // 		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        // 
        // 		this.grdTA_CUSTXM.setFocus();
        // 	}
        // 
        // 	this.dsTA_CUSTAC_CUST.clearData();
        // 	
        // }
        // 
        // /*--------------------------------------------+
        //  |  거래처계좌 양식파일 다운로드 클릭 時   |
        //  +---------------------------------------------*/
        // this.fn_ExcelFileDown4 = function (obj:Button, e:nexacro.ClickEventInfo) {
        // 
        // 	// 양식받기는 고정값('upload/sample/') 으로 지정한다..
        // 	// 엑셀양식은 기존의 명칭을 사용한다..
        // 	var folderName = 'upload/sample/';
        // 	var fileName = 'UpSample_CustAccount.xls';
        // 
        // 	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        // 	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        // 
        // }
        // 
        // /*--------------------------------------------+
        //  |  거래처담당자 양식파일 업로드 클릭 時   |
        //  +---------------------------------------------*/
        // this.fn_ExcelUpLoad5 = function (obj:Button, e:nexacro.ClickEventInfo) {
        // 
        // 	var fdNSE_FILE = new FileDialog();
        // 	var vfNSE_FILE = new VirtualFile();
        // 
        // 	fdNSE_FILE.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");
        // 
        // 	var vFile = fdNSE_FILE.open("거래처담당자 엑셀업로드", FileDialog.LOAD, "%MYDOCUMENT%");
        // 
        // 	if (vFile == null) return false;
        // 
        // 	var objExtComm = new ExtCommon();
        // 
        // 	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);
        // 
        // 	this.dsTA_CUSTMN_TEMP.set_updatecontrol(false);
        // 
        // 	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) {
        // 		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) > 0) {
        // 			var nRow = this.dsTA_CUSTMN_TEMP.addRow();
        // 
        // 			this.dsTA_CUSTMN_TEMP.setColumn(nRow, 'BIZR_NUMB', this.fnc_Replace(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0)), "-", "")); //사업자번호
        // 			this.dsTA_CUSTMN_TEMP.setColumn(nRow, 'CHSN_NAME', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1))); //담당자명
        // 			this.dsTA_CUSTMN_TEMP.setColumn(nRow, 'TELE_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 2))); //일반전화
        // 			this.dsTA_CUSTMN_TEMP.setColumn(nRow, 'HNPN_TENR', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 3))); //휴대폰
        // 			this.dsTA_CUSTMN_TEMP.setColumn(nRow, 'ELTR_MLAD', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 4))); //EMAIL
        // 			this.dsTA_CUSTMN_TEMP.setColumn(nRow, 'MJCH_YSNO', this.fnc_Trim(this.DS_EXCEL.getColumn(i, 5))); //대표담당자여부
        // 		}
        // 	}
        // 
        // 	this.dsTA_CUSTMN_TEMP.set_updatecontrol(true);
        // 
        // 	// 체크
        // 	if (this.fn_ExcelUploadCheck(this.dsTA_CUSTMN_TEMP)) {
        // 		this.dsTA_CUSTMN_TEMP.set_updatecontrol(false);
        // 
        // 		for (var i = 0; i < this.dsTA_CUSTMN_TEMP.getRowCount(); i++) {
        // 			this.dsTA_CUSTMN_TEMP.setRowType(i, Dataset.ROWTYPE_INSERT);
        // 		}
        // 
        // 		this.dsTA_CUSTMN_TEMP.set_updatecontrol(true);
        // 
        // 		// 저장 여부 확인
        // 		if (this.fnc_Message("TMM140", this.dsTA_CUSTMN_TEMP.rowcount + "개의 데이타를 업로드 하시겠습니까") == false) {
        // 			this.dsTA_CUSTMN_TEMP.clearData();
        // 			return false;
        // 		}
        // 
        // 		var sMethodName = "PROC03";
        // 		var sInDataSet = "dsTA_CUSTMN_TEMP=dsTA_CUSTMN_TEMP:A";
        // 		var sOutDataSet = "";
        // 		var sArgument = this.fn_CreateArgument(sMethodName);
        // 		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        // 
        // 		this.grdTA_CUSTXM.setFocus();
        // 	}
        // 
        // 	this.dsTA_CUSTMN_TEMP.clearData();
        // 	
        // }
        // 
        // /*----------------------------------------------+
        //  |  거래처담당자 양식파일 다운로드 클릭 時   |
        //  +-----------------------------------------------*/
        // this.fn_ExcelFileDown5 = function (obj:Button, e:nexacro.ClickEventInfo) {
        // 
        // 	// 양식받기는 고정값('upload/sample/') 으로 지정한다..
        // 	// 엑셀양식은 기존의 명칭을 사용한다..
        // 	var folderName = 'upload/sample/';
        // 	var fileName = 'UpSample_CustManager.xls';
        // 
        // 	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        // 	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        // 
        // }

        this.Tab0_onchanged = function(obj,e) {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_CUSTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_CUSTXM.addEventHandler("canrowposchange", this.dsTA_CUSTXM_canrowposchange, this);
            this.dsTA_CUSTXM.addEventHandler("oncolumnchanged", this.dsTA_CUSTXM_oncolumnchanged, this);
            this.dsTA_CUSTMN.addEventHandler("oncolumnchanged", this.dsTA_CUSTMN_onncolumnchanged, this);
            this.dsTA_CUSTAC.addEventHandler("oncolumnchanged", this.dsTA_CUSTAC_oncolumnchanged, this);
            this.dsTB_JOINNO.addEventHandler("canrowposchange", this.dsTA_CUSTXM_canrowposchange, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.Tab0.addEventHandler("onchanged", this.Tab0_onchanged, this);
            this.Tab0.tab0.grdTA_CUSTXD.addEventHandler("onheadclick", this.Tab0_tab0_grdTA_CUSTXD_onheadclick, this);
            this.Tab0.tab0.edtTELE_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtFAXX_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.calCLOS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtELTR_MLAD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtDTL1_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtTXAP_CUNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtTXAP_CUNM.addEventHandler("oneditclick", this.Tab0_tab0_edtTXAP_CUNM_oneditclick, this);
            this.Tab0.tab0.edtMPBZ_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbPOST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbLFTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbLFTY_CODE.addEventHandler("onitemchanged", this.Tab0_tab0_cmbLFTY_CODE_onitemchanged, this);
            this.Tab0.tab0.stPUCD_NUMB.addEventHandler("onclick", this.Tab0_tab0_Static01_onclick, this);
            this.Tab0.tab0.edtPUCD_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtEMPL_NBNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.calRELT_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.calRELT_EDDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtOWNR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbCUTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbRETY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtCUST_BFNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbCITY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.mskBIZR_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.medCORP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtBSNS_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtBSNS_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.mskPOST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.mskPOST_NUMB.addEventHandler("ontextchanged", this.fn_ZIPCodeChanged, this);
            this.Tab0.tab0.edtADDR_DESC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtADDR_DESC.addEventHandler("ontextchanged", this.Tab0_tab0_edtADDR_DESC_OnChanged, this);
            this.Tab0.tab0.imgHelpADDR_DESC.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.cmbINCM_TYCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbFORI_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.cmbRESI_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtJOBS_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.imgHelpJOBS_GBNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.edtJOBS_GBNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.calOPEN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.mskRERN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtMAJR_CUST.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtMAJR_CDNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.imgHelpMAJR_CDNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.edtMGMT_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtMGMT_DTNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.imgHelpSACH_EMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.imgHelpMGMT_DTNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.Tab0.tab0.edtSACH_EMNR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtSACH_EMNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab0.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.tab4.btnInput01.addEventHandler("onclick", this.Tab0_tab4_btnInput01_onclick, this);
            this.Tab0.tab4.btnDelete01.addEventHandler("onclick", this.Tab0_tab4_btnDelete_onclick, this);
            this.Tab0.tab4.Static09.addEventHandler("onclick", this.Tab0_tab4_Static09_onclick, this);
            this.Tab0.tab5.btnInput02.addEventHandler("onclick", this.Tab0_tab5_btnInput02_onclick, this);
            this.Tab0.tab5.btnDelete02.addEventHandler("onclick", this.Tab0_tab5_btnDelete02_onclick, this);
            this.Tab0.tab5.grdTA_CUSTAC.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.edtSHRMGMT_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMGMT_DTNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMGMT_DTNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRCUCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSACH_EMNR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSACH_EMNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSACH_EMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRLFTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBIZR_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
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
            this.imgHelpSHRSACH_EMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRMGMT_DTNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRCUTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCUTY_CODE.addEventHandler("onitemchanged", this.cmbSHRCUTY_CODE_onitemchanged, this);
            this.cmbSHRRETY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
