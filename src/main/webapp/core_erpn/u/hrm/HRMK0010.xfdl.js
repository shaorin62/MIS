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
                this.set_name("HRMK0010");
                this.set_titletext("증명서신청");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">LADN_CODE</Col><Col id=\"DSNAME\">dsLADN_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">LADN_CODE</Col><Col id=\"DSNAME\">dsLADN_CODE2</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">CSUS_CODE</Col><Col id=\"DSNAME\">dsCSUS_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">APPD_CODE</Col><Col id=\"DSNAME\">dsAPPD_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">STSD_CODE</Col><Col id=\"DSNAME\">dsSHRSTSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">STSD_CODE</Col><Col id=\"DSNAME\">dsSTSD_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"USEYN\">ALL</Col></Row><Row><Col id=\"CODEID\">STSD_CODE</Col><Col id=\"DSNAME\">dsSTSD_CODE2</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"USEYN\">ALL</Col></Row><Row><Col id=\"CODEID\">STSD_CODE</Col><Col id=\"DSNAME\">dsSTSD_CODE3</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"USEYN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_CERSIS", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPL_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPL_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"STSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LADN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CSUS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CSUS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CERS_USEX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SBMT_ORGT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_PCNT\" size=\"256\" prop=\"default\" type=\"NUMBER\"/><Column id=\"APPL_PCNT\" size=\"256\" prop=\"default\" type=\"NUMBER\"/><Column id=\"APPL_YEAR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PCOC_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"STSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LADN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"KEYVALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WODN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISEM_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRDV_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOXD", this);
            obj._setContents("<ColumnInfo><Column id=\"CSPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_HOCT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCEM_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENEE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_BIRT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REAL_BIRT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLCA_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REDI_CODE\" size=\"256\" prop=\"default\" type=\"NUMBER\"/><Column id=\"REDI_NAME\" size=\"256\" prop=\"default\" type=\"NUMBER\"/><Column id=\"REDI_ENAME\" size=\"256\" prop=\"default\" type=\"NUMBER\"/><Column id=\"WRDV_CODE\" size=\"256\" prop=\"default\" type=\"NUMBER\"/><Column id=\"WRDV_NAME\" size=\"256\" prop=\"default\" type=\"NUMBER\"/><Column id=\"WRDV_ENAME\" size=\"256\" prop=\"default\" type=\"NUMBER\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PCOP_JCDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ANSD_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RETR_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WODN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WODN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WODN_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL2_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENPT_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"END1_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"END2_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_PONB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RGD1_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RGD2_ADDR\" size=\"256\" prop=\"default\" type=\"NUMBER\"/><Column id=\"LEGL_PONB\" size=\"256\" prop=\"default\" type=\"NUMBER\"/><Column id=\"LED1_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LED2_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_TENR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HNPN_TENR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OHOM_TENR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CSUS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CSUS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CSUS_ENAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CERS_USEX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SBMT_ORGT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PCOC_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPL_PCNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPL_YEAR\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_OFFICE", this);
            obj._setContents("<ColumnInfo><Column id=\"OFFI_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENGX_OFFI\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENGX_OWNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JURI_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENGL_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTL_TXOF\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMMAST", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_YYM1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM5\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY5\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX5\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT5\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM6\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY6\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX6\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT6\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM7\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY7\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX7\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT7\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM8\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY8\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX8\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT8\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM9\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY9\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX9\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT9\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM10\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY10\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX10\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT10\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM11\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY11\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX11\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT11\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_YYM12\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_PAY12\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_TAX12\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DAT12\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "865", "61", "40", "41", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("증명서신청");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("인사관리>제증명관리>증명서신청");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnApprovReq", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("발급요청");
            obj.set_enable("false");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "342", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "894", "71", "70", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("발급구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTSD_CODE", "absolute", "963", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_index("0");

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "313", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "589", "61", "40", "41", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "806", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "121", "216", "7", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_CERSIS", "absolute", "8", "128", null, "278", "25", null, this);
            obj.set_taborder("108");
            obj.set_binddataset("dsHR_CERSIS");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"117\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"180\"/><Column size=\"240\"/><Column size=\"0\"/><Column size=\"180\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"91\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"300\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"사원번호\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"3\" text=\"재직\"/><Cell col=\"4\" text=\"직원\"/><Cell col=\"5\" text=\"소속\"/><Cell col=\"6\" text=\"부서\"/><Cell col=\"7\" text=\"직급\"/><Cell col=\"8\" text=\"직책\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_essential\" text=\"발급구분\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_essential\" text=\"언어\"/><Cell col=\"12\" text=\"발행년도\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_edit\" text=\"제출처\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_essential\" text=\"용도\"/><Cell col=\"15\" text=\"용도코드\"/><Cell col=\"16\" cssclass=\"Cellgrd_WF_edit\" text=\"세부용도\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_essential\" text=\"신청매수\"/><Cell col=\"18\" text=\"인쇄매수\"/><Cell col=\"19\" cssclass=\"Cellgrd_WF_edit\" text=\"담당자연락처\"/><Cell col=\"20\" text=\"발급일\"/><Cell col=\"21\" text=\"발급번호\"/><Cell col=\"22\" text=\"진행상태\"/><Cell col=\"23\" text=\"반려사유\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;\" text=\"bind:APPL_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:EMPL_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" text=\"bind:WODN_CODE\"/><Cell col=\"4\" text=\"bind:WRDV_CODE\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:SECT_NAME\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:CPOS_NAME\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:DURS_NAME\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:OPOS_NAME\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:STSD_CODE\" combodataset=\"expr:WRDV_CODE==05?&quot;dsSTSD_CODE3&quot;:(WODN_CODE==1?&quot;dsSTSD_CODE&quot;:&quot;dsSTSD_CODE2&quot;)\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:LADN_CODE\" combodataset=\"expr:STSD_CODE==3|STSD_CODE==5?&quot;dsLADN_CODE2&quot;:&quot;dsLADN_CODE&quot;\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"date\" editfilter=\"none\" style=\"align:center;\" text=\"bind:APPL_YEAR\" mask=\"expr:STSD_CODE ==5?&quot;####&quot;:&quot;&quot;\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:SBMT_ORGT\" editlimit=\"30\" expandsize=\"50\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"text\" text=\"bind:CSUS_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:CSUS_CODE\" expandsize=\"13\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:CERS_USEX\" editlimit=\"30\" expandsize=\"50\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:APPL_PCNT\" editlimit=\"2\" editlengthunit=\"ascii\"/><Cell col=\"18\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:ISSU_PCNT\" editlengthunit=\"ascii\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PCOC_YSNO\"/><Cell col=\"20\" displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:ISSU_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"21\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:ISSU_NUMB\"/><Cell col=\"22\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:APPD_CODE\"/><Cell col=\"23\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "410", "262", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "406", "80", "25", null, null, this);
            obj.set_taborder("110");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "425", "216", "6", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_APPOXD", "absolute", "8", "431", null, null, "25", "15", this);
            obj.set_taborder("112");
            obj.set_binddataset("dsHR_APPOXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CSPT_YSNO\"/><Cell col=\"1\" text=\"출력여부\"/><Cell col=\"2\" text=\"발령일\"/><Cell col=\"3\" text=\"발령구분\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"직급\"/><Cell col=\"7\" text=\"직책\"/><Cell col=\"8\" text=\"직위\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CSPT_YSNO\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center;\" text=\"bind:APNT_DATE\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:APDN_NAME\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:SECT_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;\" text=\"bind:CPOS_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:center;\" text=\"bind:DURS_NAME\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:center;\" text=\"bind:OPOS_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "-3", "103", "216", "7", null, null, this);
            obj.set_taborder("116");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnReqCancel", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("118");
            obj.set_text("요청취소");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPL_DATE1", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("119");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "198", "71", "14", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPL_DATE2", "absolute", "213", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("121");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "384", "71", "80", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_enable("false");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "466", "71", "21", "21", null, null, this);
            obj.set_taborder("123");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "489", "71", "100", "21", null, null, this);
            obj.set_taborder("124");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "660", "71", "80", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_enable("false");
            obj.set_lengthunit("Byet");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "742", "71", "21", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "765", "71", "100", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_autoselect("true");
            obj.set_lengthunit("Byet");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "618", "71", "68", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("증명서신청");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRMK0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("HRMK0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("HRMK0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HRMK0010 증명서신청
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.05		jar		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                *
         *                                                                                                   *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                  *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HRMK0010"; //해당 Form에서 사용 할 Package 명 
        this.bRowPosChange = true;		//행변경시 재귀호출 방지 플래그
        this.sSAVE_CODE = "";			//저장(''),변경요청('R'),변경요청취소('C') 구분코드
        this.sISSUSEQN = "";
        this.sISSUNUMB = "";
        this.sSRALNUMB = "";
        this.sKeyValue = new Array();

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        

        	this.sKeyValue[0] = "";
        	this.sKeyValue[1] = "";
        	this.sKeyValue[2] = "";
        	this.sKeyValue[3] = "";
        			
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRAPPL_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6)+ '01');
        	this.calSHRAPPL_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.calSHRAPPL_DATE1.setFocus();
        	
        	//직원의 재직여부, 인턴여부에 따라 발급구분 콤보 필터 적용
        	this.dsSTSD_CODE.filter("COMD_CODE != '3' && COMD_CODE != '4'"); // 재직자
        	this.dsSTSD_CODE2.filter("COMD_CODE != '1' && COMD_CODE != '4'"); // 퇴직자
        	this.dsSTSD_CODE3.filter("COMD_CODE != '3'"); // 인턴
        	
        	// 발급구분에 따라 언어 콤보 필터 적용
        	this.dsLADN_CODE.filter(""); // 퇴직증명서 외
        	this.dsLADN_CODE2.filter("COMD_CODE == 'KR'"); // 퇴직증명서
        	

        	//검색조건 포커스
        	switch(this.sUSERLAVEL) {
        	
        		case '1':	//관리자
        			this.imgHelpSHRDEPT_CODE.set_enable(true); 	//검색조건 부서 선택
        			this.edtSHRDEPT_NAME.set_enable(true); 		//검색조건 부서명
        			this.imgHelpSHREMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
        			this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명	
        		break;
        			
        		case "2" :	//부문   					
        		break;
        		
        		case "3" :	//부실   					
        		break;
        		
        		case "4" :	//부서
        		break;	
        		
        		case '5':  //개인
        			this.imgHelpSHRDEPT_CODE.set_enable(true);
        			this.edtSHRDEPT_NAME.set_enable(true);
        			this.imgHelpSHREMPL_NUMB.set_enable(false);
        			this.edtSHREMPL_NAME.set_enable(false);  
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "ISSU_PCNT"), "edittype", "none");
        			if (application.GBL_EMPLNO.length > 0) {
        				this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        				this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);			
        			} else {
        				this.edtSHRDEPT_CODE.set_value(' ');
        				this.edtSHRDEPT_NAME.set_value(' ');
        				this.edtSHREMPL_NUMB.set_value(' ');
        				this.edtSHREMPL_NAME.set_value(' ');
        			}	
        			this.fn_Search();

        			break;
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
        	this.fnc_DatasetClear("dsHR_CERSIS");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsHR_CERSIS=dsHR_CERSIS";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdHR_CERSIS.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsHR_CERSIS.insertRow(this.dsHR_CERSIS.rowposition + 1);
        	this.dsHR_CERSIS.set_rowposition(iRow);
        	
        	this.dsHR_CERSIS.setColumn(iRow, "APPL_DATE", this.fnc_GetServerDateTime("DATE"));	//신청일
        	
        	if(this.sUSERLAVEL == "5" ){
        		this.dsHR_CERSIS.setColumn(iRow, "EMPL_NUMB", application.GBL_EMPLNO);		//사번
        		this.dsHR_CERSIS.setColumn(iRow, "EMPL_NAME", application.GBL_EMPLNO);		//성명	
        		this.dsHR_CERSIS.setColumn(iRow, "DEPT_CODE", application.GBL_DEPTCD);		//부서코드
        		this.dsHR_CERSIS.setColumn(iRow, "DEPT_NAME", application.GBL_DEPTNM);		//부서
        	}else if(this.sUSERLAVEL == "1" ){
        		this.dsHR_CERSIS.setColumn(iRow, "EMPL_NUMB", this.edtSHREMPL_NUMB.value);		//사번
        		this.dsHR_CERSIS.setColumn(iRow, "EMPL_NAME", this.edtSHREMPL_NAME.value);		//성명	
        		this.dsHR_CERSIS.setColumn(iRow, "DEPT_CODE", this.edtSHRDEPT_CODE.value);		//부서코드
        		this.dsHR_CERSIS.setColumn(iRow, "DEPT_NAME", this.edtSHRDEPT_NAME.value);		//부서
        	}

        	this.dsHR_CERSIS.setColumn(iRow, "APPD_CODE", "S" );						//승인구분코드
        	this.dsHR_CERSIS.setColumn(iRow, "LADN_CODE", "KR" );						 
        	//this.dsHR_CERSIS.setColumn(iRow, "CSUS_CODE", "1" );					 
        	this.dsHR_CERSIS.setColumn(iRow, "APPL_PCNT", "1" );

        	//신규입력행 컴포넌트 관리
        	this.btnApprovReq.set_enable(false); 
        	this.btnReqCancel.set_enable(false);
        	this.div_ButtonList.btnDelete.set_enable(true);
        	this.grdHR_CERSIS.set_readonly(false);
        	this.grdHR_APPOXD.set_readonly(false); 
        	
        	this.grdHR_CERSIS.setCellPos(this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"));
        	this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "STSD_CODE"), "edittype", "none");
        	this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "LADN_CODE"), "edittype", "combo");
        	this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_YEAR"), "edittype", "none");
        	this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "SBMT_ORGT"), "edittype", "text");
        	this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "edittype", "text");
        	this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "expandshow", "show");
        	this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CERS_USEX"), "edittype", "text");
        	this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_PCNT"), "edittype", "normal");
        	this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "PCOC_YSNO"), "edittype", "checkbox");
        	this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "ISSU_PCNT"), "edittype", "none");

        	if(this.sUSERLAVEL == "5" ){
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "expandshow" ,"hide");
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "edittype", "none");
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "STSD_CODE"), "edittype", "combo");
        	}else{
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "edittype", "normal");
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "STSD_CODE"), "edittype", "combo");
        	}
        	
        	this.grdHR_CERSIS.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsHR_CERSIS.deleteRow(this.dsHR_CERSIS.rowposition);
        	this.grdHR_CERSIS.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsHR_CERSIS");
        	this.grdHR_CERSIS.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if( this.sSAVE_CODE != "C"){
        		if (!this.fn_SaveItemCheck()) return;
        	}
        	
        	if( this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE") ==  '0'){
        		this.dsHR_CERSIS.setColumn(this.dsHR_CERSIS.rowposition, "REMK_100X", "");
        	}
        	
        	this.sKeyValue[0] = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB");
        	this.sKeyValue[1] = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE");
        	this.sKeyValue[2] = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_SEQN");
        	this.sKeyValue[3] = '0';
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsHR_CERSIS=dsHR_CERSIS:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_CERSIS.setFocus();

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

        	if (this.dsHR_CERSIS.getRowCount() < 0) {
        		this.fnc_Message("TMM010");   //Message 처리 후
        		this.grdHR_CERSIS.focus();          
        		return;
        	}
        		
        	var sQuestionText = "선택된 경력사항 및 "+this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "STSD_NAME"))
        						+ "(" + this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "LADN_NAME") + ")" );
        		
        	if(this.fnc_Message("HRM010", sQuestionText) == true){			

        		this.sKeyValue[0] = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB");
        		this.sKeyValue[1] = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE");
        		this.sKeyValue[2] = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_SEQN");

        		//발급일, 발급번호 채번 및  반영(채번-쿼리)
        		var sMethodName = "PROC00";
        		var sInDataSet = "";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        	}	
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_CERSIS", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_CERSIS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Trim(this.calSHRAPPL_DATE1.value) > this.fnc_Trim(this.calSHRAPPL_DATE2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "신청시작일,신청종료일", this.calSHRAPPL_DATE1);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsHR_CERSIS.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText = "신청일:" + this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE"))
        						+ ",성명:" + this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NAME")); 
        						
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_CERSIS")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsHR_CERSIS.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsHR_CERSIS.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(i, 'EMPL_NUMB'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsHR_CERSIS, i, this.grdHR_CERSIS, "EMPL_NUMB");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(i, 'EMPL_NAME'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "성명", this.dsHR_CERSIS, i, this.grdHR_CERSIS, "EMPL_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(i, 'STSD_CODE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "발급구분", this.dsHR_CERSIS, i, this.grdHR_CERSIS, "STSD_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(i, 'LADN_CODE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "언어", this.dsHR_CERSIS, i, this.grdHR_CERSIS, "LADN_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(i, 'CSUS_NAME'))) < 2) {
        			this.grdHR_CERSIS.setCellPos(this.grdHR_CERSIS.getBindCellIndex("body", "CSUS_NAME"));
        			this.grdHR_CERSIS.setFocus();	
        			return this.fnc_CheckPostAction("TMM072", "용도", this.dsHR_CERSIS, i, this.grdHR_CERSIS, "CSUS_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(i, 'APPL_PCNT'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "신청매수", this.dsHR_CERSIS, i, this.grdHR_CERSIS, "APPL_PCNT");
        		}
        		
        		if(this.dsHR_CERSIS.getColumn(i, "STSD_CODE") == "5"){ 
        			if(this.fnc_Trim(this.dsHR_CERSIS.getColumn(i, 'APPL_YEAR')) < 1900 ){
        				this.grdHR_CERSIS.setCellPos(this.grdHR_CERSIS.getBindCellIndex("body", "APPL_YEAR"));
        				this.grdHR_CERSIS.setFocus();	
        				return this.fnc_CheckPostAction("HRM075", "발행년도", this.dsHR_CERSIS, i, this.grdHR_CERSIS, "APPL_YEAR");
        			}
        		}
        	}
        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	
        	// 조회 Argument 생성
        	//증명서 신청 조회
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " APPL_STDT=" 		 + this.fnc_Quote(this.calSHRAPPL_DATE1.value);
        		sReturnString += " APPL_ENDT=" 		 + this.fnc_Quote(this.calSHRAPPL_DATE2.value);
        		sReturnString += " DEPT_CODE=" 		 + this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.edtSHREMPL_NUMB.value); 
        		sReturnString += " STSD_CODE=" 		 + this.fnc_Quote(this.cmbSHRSTSD_CODE.value);
        	
        	// 경력사항 조회
        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB")); 
        	
        	// 증명서 신청 내역 저장
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        	
        	// 인쇄 출력유무 저장
        	} else if (sKind == 'SAVE01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB")); 
        		sReturnString += " APPL_DATE=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE")); 
        		sReturnString += " APPL_SEQN=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_SEQN"));  
        		sReturnString += " ISSU_SEQN="  	 + this.fnc_Quote(this.sISSUSEQN); 
        		sReturnString += " ISSU_NUMB="  	 + this.fnc_Quote(this.sISSUNUMB); 

        	// WORK 알림 저장 
        	} else if (sKind == 'SAVE02') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " SYST_LNCD="  	 + this.fnc_Quote(application.GBL_LANGCD); //사용자언어코드
        		sReturnString += " WORK_USID=" 		 + this.fnc_Quote(application.GBL_USERID); //작업자ID
        		sReturnString += " WKNT_TYCD=" 		 + this.fnc_Quote('HRM010'); // 작업알림유형코드
        		sReturnString += " SOUS_LNKY=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB")+'-'+this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE")+'-'+this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_SEQN")); //출처연결키
        		sReturnString += " WKNT_CNTT=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "STSD_NAME") + ' 발급 신청이 등록되었습니다.'); // 작업알림내용

        	// 인쇄 처리
        	}else if (sKind == 'PROC00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " ISEM_NUMB="  	 + this.fnc_Quote(application.GBL_EMPLNO); 
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB")); 
        		sReturnString += " APPL_DATE=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE")); 
        		sReturnString += " APPL_SEQN=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_SEQN"));  
        		sReturnString += " STSD_CODE=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "STSD_CODE")); 
        		sReturnString += " LADN_CODE=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "LADN_CODE"));
        			
        	// 증명서출력 : 선택한 발령상세 내역 
        	}else if (sKind == 'SEARCH02') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB")); 
        		sReturnString += " SRAL_NUMB=" 		 + this.fnc_Quote(this.sSRALNUMB); 
        	
        	// 증명서 출력 : 인사정보 조회
        	}else if (sKind == 'SEARCH03') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB")); 
        		sReturnString += " APPL_DATE=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE")); 
        		sReturnString += " APPL_SEQN=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_SEQN"));  
        		
        	// 증명서 출력 : 사업장정보 조회 
        	}else if (sKind == 'SEARCH04') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        	
        	// 증명서 출력 : 갑종근로소득 조회
        	}else if (sKind == 'SEARCH05') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB")); 
        		sReturnString += " APPL_YEAR=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_YEAR")); 
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
        	
        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsHR_CERSIS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_CERSIS.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == 'SEARCH01') {
        	
        		this.fnc_Information(this.stInformation1, this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		   
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_Search();
        		
        		if (this.sSAVE_CODE == "R") {
        			this.fnc_Message("HRM067", true); //발급요청 
        		} else if (this.sSAVE_CODE == "C") {
        			this.fnc_Message("HRM041", true); //요청취소
        		} else { //저장
        			this.fnc_Information(this.stInformation, 0, "SAVE");		
        			this.fnc_Message("HRM066");
        		}
        		
        		this.sSAVE_CODE = "";

        	}else if (sMethodName == 'SAVE01') {
        		   
        	} else if (sMethodName == 'SAVE02') {
        		   
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		//arrParam[0] = "GRID,grdHR_CERSIS,dsCSUS_CODE,CSUS_CODE";
        		arrParam[0] = "GRID,grdHR_CERSIS,dsAPPD_CODE,APPD_CODE";
        		arrParam[1] = "COMBO,cmbSHRSTSD_CODE,dsSHRSTSD_CODE,0"; 	
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} else if (sMethodName == "SEARCH02") {

        	} else if (sMethodName == "SEARCH03") {
        	
        	} else if (sMethodName == "SEARCH04") {
        	
        	} else if (sMethodName == "SEARCH0") {
        	
        	}  else if(sMethodName == "PROC00") {
        	
        		var sStsdCode = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "STSD_CODE");
        		var sLandCode = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "LADN_CODE");
        		var sReportFile = "";
        		
        		switch(sStsdCode) {
        	
        			case '1':	//재직증명서
        				if(sLandCode == "KR"){
        					sReportFile = "/hrm/HRMK0010R01.jrf";
        				}else if (sLandCode == "EN"){
        					sReportFile = "/hrm/HRMK0010R02.jrf";
        				}
        			break;
        				
        			case "2" :	//경력증명서   		
        				if(sLandCode == "KR"){
        					sReportFile = "/hrm/HRMK0010R03.jrf";
        				}else if (sLandCode == "EN"){
        					sReportFile = "/hrm/HRMK0010R04.jrf";
        				}
        			break;
        			
        			case "3" :	//퇴직증명서   
        				sReportFile = "/hrm/HRMK0010R05.jrf";
        			break;
        			
        			case "4" :	//인턴증명서
        				if(sLandCode == "KR"){
        					sReportFile = "/hrm/HRMK0010R06.jrf";
        				}else if (sLandCode == "EN"){
        					sReportFile = "/hrm/HRMK0010R07.jrf";
        				}
        			break;	
        			
        			case '5':  //갑종근로소득
        				sReportFile = "/hrm/HRMK0010R08.jrf";
        				
        			break;
        		
        		}
        		
        		//발령출력여부
        		var iCnt = "0";
        		var sAppoPrint = "N";
        		this.sSRALNUMB = "";
        		for (var i = 0; i < this.dsHR_APPOXD.getRowCount(); i++) {
        		
        			if(this.dsHR_APPOXD.getColumn(i, 'CSPT_YSNO') == "1"){
        				//발령사항의 일련번호 
        				if(iCnt == "0"){
        					this.sSRALNUMB = this.dsHR_APPOXD.getColumn(i, 'SRAL_NUMB');
        				}else{
        					this.sSRALNUMB = this.sSRALNUMB + "," +  this.dsHR_APPOXD.getColumn(i, 'SRAL_NUMB');
        				}
        				iCnt++;
        				sAppoPrint = "Y";
        			}
        		}
        		
        		var sParams ="ISSU_SEQN#" + this.sISSUNUMB + "#sAppoPrint#" + sAppoPrint;
        		
        		/* 3. 레포트에 사용할 데이터를 입력합니다.
        	    - 레포트 출력을 위한 서비스를 구성하여 레포트에 데이터를 제공합니다.
        	    - 서비스 구현은 일반 업무프로그램의 구성과 동일합니다.
        	      (실제 내부 처리방식은 넥사크로플랫폼의 트랜젝션 호출 방식으로 처리합니다.)
        	    - 서비스를 이용하지 않고 화면의 데이터셋을 직접 전달하여 사용할 수 도 있습니다.
        	    - ***서비스 구현 + 데이터셋 전달의 조합은 불가능합니다.(동시 사용 금지)
        		*/

        		// 레포트 데이터 정보를 위한 배열
        		var arrDataRef = new Array();
        		
        		// 4. 레포트 데이터를 트랜젝션을 통하여 가져오는 예제입니다.
        		// 경력 상세 조회
        		arrDataRef[0] = new Object();
        		arrDataRef[0].type = "TRAN";
        		arrDataRef[0].svcUrl = "/core/erp/hrm/HRMK0010_SEARCH02.do";
        		arrDataRef[0].inDataset = ""
        		arrDataRef[0].outDataset = "dsHR_APPOXD=dsHR_APPOXD"
        		arrDataRef[0].arg = this.fn_CreateArgument("SEARCH02");
        		
        		// 인사 정보 조회
        		arrDataRef[1] = new Object();
        		arrDataRef[1].type = "TRAN";
        		arrDataRef[1].svcUrl = "/core/erp/hrm/HRMK0010_SEARCH03.do";
        		arrDataRef[1].inDataset = ""
        		arrDataRef[1].outDataset = "dsHR_MASTXM=dsHR_MASTXM";
        		arrDataRef[1].arg = this.fn_CreateArgument("SEARCH03");
        		
        		// 사업장 정보 조회
        		arrDataRef[2] = new Object();
        		arrDataRef[2].type = "TRAN";
        		arrDataRef[2].svcUrl = "/core/erp/hrm/HRMK0010_SEARCH04.do";
        		arrDataRef[2].inDataset = ""
        		arrDataRef[2].outDataset = "dsTM_OFFICE=dsTM_OFFICE";
        		arrDataRef[2].arg = this.fn_CreateArgument("SEARCH04");

        		if(sStsdCode == "5"){
        			// 갑종근로소득 조회
        			arrDataRef[3] = new Object();
        			arrDataRef[3].type = "TRAN";
        			arrDataRef[3].svcUrl = "/core/erp/hrm/HRMK0010_SEARCH05.do";
        			arrDataRef[3].inDataset = ""
        			arrDataRef[3].outDataset = "dsPY_PMMAST=dsPY_PMMAST";
        			arrDataRef[3].arg = this.fn_CreateArgument("SEARCH05");
        		}
        		
        		// 5. 리포트 화면의 버튼, 이벤트 핸들러 함수 등을 설정하기 위한 옵션입니다.
        		var reportOptions = new Object;
        		reportOptions.title = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "STSD_NAME");	// 인쇄물 타이틀. 저장 시 파일명으로도 사용됩니다.
        		reportOptions.loadCallback = "fn_Search";	// 인쇄물 미리보기 화면이 로드 된 후 실행할 함수명입니다.
        		
                
        		if( this.sUSERLAVEL == "1" ) 
        		{
        			reportOptions.saveEnable = true;							// 저장 버튼 표시여부. true or false
        		}else{
        			reportOptions.saveEnable = false;							// 저장 버튼 표시여부. true or false
        		}

        		reportOptions.saveCallback = "fn_WhenPrintEnd";				// 리포트를 파일로 저장한 후 실행할 함수입니다.
        		reportOptions.printLock = true;								// 인쇄버튼 최초 1회 클릭 이후 사용할 수 없도록 비활성화
        		reportOptions.printEnable = true;							// 인쇄 버튼 표시여부. true or false
        		reportOptions.printCallback = "fn_WhenPrintEnd";			// 리포트 인쇄 후 실행할 함수입니다.
        	
        		// 레포트 팝업 호출
        		this.fn_UbiReport(sReportFile, sParams, arrDataRef, reportOptions);
        		
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if(this.dsHR_CERSIS.rowcount < 1 ) return;
        	
        	if(this.sKeyValue[0] > 0){
        			
        		var iRow = this.dsHR_CERSIS.findRowExpr("EMPL_NUMB == '" + this.sKeyValue[0]  + "'&& APPL_DATE == '" + this.sKeyValue[1] + "'&& APPL_SEQN == '" + this.sKeyValue[2] + "'");
        		
        		if( iRow < 0){
        			iRow = this.sKeyValue[3]; 
        		}
        		
        		this.sKeyValue[0] = "";
        		this.sKeyValue[1] = "";
        		this.sKeyValue[2] = "";
        		this.sKeyValue[3] = "";
        			
        		if(iRow < 0) iRow = 0;
        			
        		this.dsHR_CERSIS.set_rowposition(iRow);
        	}
        	
        	if ( this.fnc_ToUpper(this.dsHR_CERSIS.getRowType(this.dsHR_CERSIS.rowposition)) == Dataset.ROWTYPE_INSERT ) {	 
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "expandshow" ,"show");
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "edittype", "normal"); 
        	}

        	//사번이 입력 되었을 때만 발급구분이 선택가능하도록
        	if (this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB"))) > 1) {
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "STSD_CODE"), "edittype", "combo"); 
        	}else{
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "STSD_CODE"), "edittype", "none"); 
        	}
        		
        	//승인구분이 S(임시저장)이 아닌경우 전체 readonly
        	switch (this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE")) {
        		case "S" :	//임시저장
         
        			if ( this.fnc_ToUpper(this.dsHR_CERSIS.getRowType(this.dsHR_CERSIS.rowposition)) == Dataset.ROWTYPE_INSERT ) {	 
        				//신규입력행에는 발급요청 버튼을 막음
        				this.btnApprovReq.set_enable(false); 
        			} else {  
        				this.btnApprovReq.set_enable(true); 
        			}
        			
        			this.btnReqCancel.set_enable(false);
        			this.div_ButtonList.btnDelete.set_enable(true);
        			this.div_ButtonList.btnPrint.set_enable(false);
        			this.grdHR_CERSIS.set_readonly(false);
        			this.grdHR_APPOXD.set_readonly(true);
        			
        			if( this.sUSERLAVEL == '5' & this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NAME"))) > '0'){
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "edittype", "none"); 
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "expandshow", "hide"); 
        			}else if( this.sUSERLAVEL == '1' ){
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "expandshow" ,"show");
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "edittype", "normal"); 
        			}
        			
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "LADN_CODE"), "edittype", "combo");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_YEAR"), "edittype", "mask");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "SBMT_ORGT"), "edittype", "text");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "edittype", "text");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "expandshow", "show");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CERS_USEX"), "edittype", "text");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_PCNT"), "edittype", "normal");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "PCOC_YSNO"), "edittype", "checkbox");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "ISSU_PCNT"), "edittype", "none");
        			
        			break;
        		case "0" : //발급요청
        			
        			if( this.sUSERLAVEL == '1' ){
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "expandshow" ,"hide");
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "edittype" ,"none");
        			}
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "edittype", "none");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "expandshow", "hide");
        		
        			this.btnApprovReq.set_enable(false);
        			this.btnReqCancel.set_enable(true);
        			this.div_ButtonList.btnDelete.set_enable(false);
        			this.div_ButtonList.btnPrint.set_enable(false);
        			this.grdHR_CERSIS.set_readonly(true);
        			this.grdHR_APPOXD.set_readonly(true);
        		
        			break;
        		case "1" : //승인

        			if( this.sUSERLAVEL == '1' ){
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "expandshow" ,"hide");
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "edittype" ,"none");
        			}
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "edittype", "none");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "expandshow", "hide");
        			
        			this.btnApprovReq.set_enable(false);
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(false);
        			
        			this.div_ButtonList.btnPrint.set_enable(true);
        			
        			this.grdHR_CERSIS.set_readonly(true);
        			this.grdHR_APPOXD.set_readonly(false);
        			
        			break;
        		case "2" : //반려
        		
        			this.btnApprovReq.set_enable(true);
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(false);
        			this.div_ButtonList.btnPrint.set_enable(false);
        			
        			this.grdHR_CERSIS.set_readonly(false);
        			this.grdHR_APPOXD.set_readonly(true);
        			
        			if( this.sUSERLAVEL == '5' & this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NAME"))) > '0'){
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "edittype", "none"); 
        			}
        			
        			if( this.sUSERLAVEL == '1' ){
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "expandshow" ,"hide");
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "edittype" ,"none");
        			}
        			
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "STSD_CODE"), "edittype", "combo");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "LADN_CODE"), "edittype", "combo");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_YEAR"), "edittype", "mask");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "SBMT_ORGT"), "edittype", "text");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "edittype", "text");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "expandshow", "show");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CERS_USEX"), "edittype", "text");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_PCNT"), "edittype", "normal");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "PCOC_YSNO"), "edittype", "checkbox");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "ISSU_PCNT"), "edittype", "none");
        			
        			break;
        		case "3" : //발급완료
        		
        			if( this.sUSERLAVEL == '1' ){
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "expandshow" ,"hide");
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "EMPL_NAME"), "edittype" ,"none");
        			}
        			
        			this.btnApprovReq.set_enable(false);
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(false);
        			
        			if(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "ISSU_PCNT") == "" || this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "ISSU_PCNT") == null ){
        				this.div_ButtonList.btnPrint.set_enable(true);
        				this.grdHR_APPOXD.set_readonly(false);
        			}else{
        				if( this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "ISSU_PCNT") < this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_PCNT")){
        					this.div_ButtonList.btnPrint.set_enable(true);
        					this.grdHR_APPOXD.set_readonly(false);
        				}else{
        					this.div_ButtonList.btnPrint.set_enable(false);	
        					this.grdHR_APPOXD.set_readonly(true);
        				}
        			}
        			
        			this.grdHR_CERSIS.set_readonly(false);
        			
        			if(this.sUSERLAVEL == "1"){
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "ISSU_PCNT"), "edittype", "normal");
        			}
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "STSD_CODE"), "edittype", "none");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "LADN_CODE"), "edittype", "none");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_YEAR"), "edittype", "none");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "SBMT_ORGT"), "edittype", "none");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "edittype", "none");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CSUS_NAME"), "expandshow", "hide");	
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "CERS_USEX"), "edittype", "none");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_PCNT"), "edittype", "none");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "PCOC_YSNO"), "edittype", "none");	
        			
        			break;
        		default :
        			
        			this.btnApprovReq.set_enable(false);
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(false); 
        			this.div_ButtonList.btnPrint.set_enable(false);
        			
        			this.grdHR_CERSIS.set_readonly(true);
        			this.grdHR_APPOXD.set_readonly(true);
        			
        			break;
        			
        	} 	
        	
        	this.fn_InputApplYearCheck();
        	this.fnc_DatasetClear("dsHR_APPOXD");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_APPOXD=dsHR_APPOXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        		arrParam[0] = "TMM0004"; 								//Popup ID
        		arrParam[1] = ""; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRDEPT_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        	}

        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	if (obj.name == 'grdHR_CERSIS') {
        	
        		if (sColumnID == "EMPL_NAME" || obj.getCellProperty('body', obj.currentcell, 'text') == "bind:EMPL_NAME")
        		{
        			arrParam[0] = 'HRM0002';
        			arrParam[1] = ""
        			arrParam[2] = 'EMPL_NAME';
        			arrParam[3] = 'N';
        			arrParam[4] = 'grdHR_CERSIS';
        			arrParam[5] = 'EMPL_NUMB,EMPL_NAME,DEPT_CODE,DEPT_NAME,SECT_NAME,CPOS_CODE,CPOS_NAME,DURS_CODE,DURS_NAME,OPOS_CODE,OPOS_NAME,WODN_CODE,WRDV_CODE';
        			arrParam[6] = '0,1,2,3,5,18,19,22,23,20,21,33,8';
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	
        		if (sColumnID == "CSUS_NAME" || obj.getCellProperty('body', obj.currentcell, 'text') == "bind:CSUS_NAME")
        		{
        			arrParam[0] = 'TMM1000'; 								//Popup ID
        			arrParam[1] = 'CSUS_CODE'; 								//조건구분에 대응되는 조회조건 값
        			arrParam[2] = 'CSUS_NAME'; 								//콤보조건구분에 대응되는 조회 조건 값
        			arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        			arrParam[4] = 'grdHR_CERSIS';
        			arrParam[5] = 'CSUS_CODE,CSUS_NAME';
        			arrParam[6] = '0,1';
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        		}
        	}
        }

        /*-----------------------------------+
        |  인쇄 출력유무 저장 時  |
        	@parameter : 
        	@return :
        +------------------------------------*/
        this.fn_WhenPrintEnd = function() {

        		var sMethodName = "SAVE01";
        		var sInDataSet = "";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }
        			
        /*-----------------------------------+
        |  발급요청 버튼 클릭 時  |
        	@parameter : 
        	@return :
        +------------------------------------*/
        this.fn_btnApprovReq_OnClick = function() {
        	
        	if (this.dsHR_CERSIS.getRowCount() < 0) {
        		this.fnc_Message("TMM010");   //Message 처리 후
        		this.grdHR_CERSIS.focus();          
        		return;
        	}
        		
        	var sQuestionText = "신청일:" + this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE"))
        						+ ",성명:" + this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NAME"));
        		
        	if(this.fnc_Message("HRM060", sQuestionText) == true){			
        		this.dsHR_CERSIS.setColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE", "0");
        		this.sSAVE_CODE = "R";	//발급요청
        		this.fn_Save();
        		this.fn_WorkNotice(); //요청 알림 저장 
        	}
        }	
        		
        /*-----------------------------------+
        |  요청취소 버튼 클릭 時  |
        	@parameter : 
        	@return :
        +------------------------------------*/
        this.fn_btnReqCancel_OnClick = function(rtnValue) {
        	
        	if (this.dsHR_CERSIS.getRowCount() < 0) {
        		this.fnc_Message("TMM010");   //Message 처리 후
        		this.grdHR_CERSIS.focus();          
        		return;
        		}
        	
        	var sQuestionText = "신청일:" + this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE"))
        						+ ",성명:" + this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NAME"));
        	
        	if(this.fnc_Message("HRM061", sQuestionText) == true){			
        	this.dsHR_CERSIS.setColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE", "S");
        	this.sSAVE_CODE = "C";	//요청취소
        	this.fn_Save();
        	}
        }

        /*-------------------------------------------------+
         | 그리드 팝업 시 필요한 이벤트 |
         +--------------------------------------------------*/
        this.dsHR_CERSIS_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "EMPL_NAME"){
        		this.fn_HelpDialoge(this.grdHR_CERSIS, "YES" ,e.oldvalue, e.columnid); 
        	}
        	
        	if (e.columnid == "CSUS_NAME" ){
        		this.fn_HelpDialoge(this.grdHR_CERSIS, "YES" ,e.oldvalue, e.columnid); 
        	}
        }

        /*-------------------------------------------------+
         | 그리드 데이터  변경시  필요한 이벤트 |
         +--------------------------------------------------*/
        this.dsHR_CERSIS_onvaluechanged = function(obj,e)
        {
        	if (this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE") == "S" | this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE") == "2"){
        				
        		if (e.columnid == "EMPL_NAME" | e.columnid == "" ){
        			//사번이 입력된 후 발급구분 선택이 가능하도록 
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB"))) > 1) {
        				this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "STSD_CODE"), "edittype", "combo"); 
        			}
        		}
        		
        		if (e.columnid == "STSD_CODE"){
        			this.fn_InputApplYearCheck();
        		}
        	}
        	
        }

        /*-------------------------------------------------+
         | 그리드 발행년도 입력가능여부 체크  |
         +--------------------------------------------------*/
        this.fn_InputApplYearCheck = function() {

        	if( this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE") == "S" | this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE") == "2" ){
        		
        		//발급구분 > 갑종근로소득 : 발행년도 입력 가능하도록
        		if(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "STSD_CODE") == "5"){ 
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_YEAR"), "edittype", "mask");
        			this.grdHR_CERSIS.setCellProperty( "Head",this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_YEAR"),"cssclass" ,"Cellgrd_WF_essential");
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "PCOC_YSNO"), "edittype", "none");
        		}else{
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_YEAR"), "edittype", "none");
        			this.dsHR_CERSIS.setColumn(this.dsHR_CERSIS.rowposition, "APPL_YEAR", "" );
        			this.grdHR_CERSIS.setCellProperty( "Head",this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_YEAR"),"cssclass" ,"");
        		}
        		
        	}else{
        	
        		//발급구분 > 갑종근로소득 : 발행년도 헤더 CSS 변경 
        		if(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "STSD_CODE") == "5"){ 
        			this.grdHR_CERSIS.setCellProperty( "Head",this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_YEAR"),"cssclass" ,"Cellgrd_WF_essential");
        		}else{
        			this.grdHR_CERSIS.setCellProperty( "Head",this.fnc_GridColumnIndex(this.grdHR_CERSIS, "APPL_YEAR"),"cssclass" ,"");
        		}
        	}
        }

        /*------------------------+
         |  work 알림 저장
         -------------------------*/
        this.fn_WorkNotice = function() {
        	var sMethodName = "SAVE02";
        	var sInDataSet = "";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }
        		

        this.grdHR_APPOXD_onheadclick = function(obj,e)
        {
        	var sCol = "CSPT_YSNO";
        	if (obj.getBindCellIndex("body", sCol) == e.cell) this.fnc_GridAllCheck(obj, sCol);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_CERSIS.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsHR_CERSIS.addEventHandler("oncolumnchanged", this.dsHR_CERSIS_oncolumnchanged, this);
            this.dsHR_CERSIS.addEventHandler("onvaluechanged", this.dsHR_CERSIS_onvaluechanged, this);
            this.dsHR_MASTXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_OFFICE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsPY_PMMAST.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnApprovReq.addEventHandler("onclick", this.fn_btnApprovReq_OnClick, this);
            this.cmbSHRSTSD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdHR_CERSIS.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdHR_APPOXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdHR_APPOXD.addEventHandler("onheadclick", this.grdHR_APPOXD_onheadclick, this);
            this.btnReqCancel.addEventHandler("onclick", this.fn_btnReqCancel_OnClick, this);
            this.calSHRAPPL_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPL_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("oneditclick", this.edtSHRDEPT_NAME_oneditclick, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HRMK0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
