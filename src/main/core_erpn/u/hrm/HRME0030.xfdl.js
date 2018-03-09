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
                this.set_name("HRME0030");
                this.set_titletext("인사발령변경");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">RTTY_CODE</Col><Col id=\"DSNAME\">dsRTTY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">PYTY_CODE</Col><Col id=\"DSNAME\">dsPYTY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">WRKS_CODE</Col><Col id=\"DSNAME\">dsWRKS_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRAPDN_CODE</Col><Col id=\"CODEID\">APDN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"PYTY_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"WRKS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"EXTR_PLDH\" size=\"256\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOXM", this);
            obj._setContents("<ColumnInfo><Column id=\"APNT_HOCT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_SBJT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APAL_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APAL_YNNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DOCN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"APNT_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"APNT_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"APNT_HOCT\" size=\"10\" type=\"STRING\"/><Column id=\"APDN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"PSTP_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"WRKS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"PYTY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DTMN_DTCD\" size=\"10\" type=\"STRING\"/><Column id=\"DSPT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DSPT_DTCD\" size=\"10\" type=\"STRING\"/><Column id=\"EXTR_PLDH\" size=\"50\" type=\"STRING\"/><Column id=\"LEAV_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PBNR_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"ADJN_DTCD\" size=\"10\" type=\"STRING\"/><Column id=\"ADDT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"RTTY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CIBP_ANNU\" size=\"2\" type=\"BIGDECIMAL\"/><Column id=\"APNT_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"SEAS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DEAT_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PRON_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PARE_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"NETP_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"NEPR_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DURS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DUTY_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"OPOS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"APAL_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DTCH_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"CLPC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"NMCG_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DURC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"JOCH_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"OFPC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PYTC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"WRKC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"HDTC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PBDC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"CSPT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"200\" type=\"STRING\"/><Column id=\"APNT_PROW\" size=\"200\" type=\"STRING\"/><Column id=\"WRDV_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"WRDV_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"KEYVALUE\" size=\"256\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"JBGP_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DSPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"ADJN_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"ADDT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"APNT_INNM\" size=\"256\" type=\"STRING\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOBS", this);
            obj._setContents("<ColumnInfo><Column id=\"APDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WDCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WACH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OCCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLPC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFPC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NMCG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EBCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AJDC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTDC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EDCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HDTC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RETC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape01", "absolute", "8", null, null, "135", "25", "15", this);
            obj.set_taborder("1139");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "187", "248", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", "118", null, "65", "25", null, this);
            obj.set_taborder("1005");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "28", "127", "72", "21", null, null, this);
            obj.set_taborder("1009");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "914", "127", "88", "21", null, null, this);
            obj.set_taborder("1011");
            obj.set_text("직책");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB_V", "absolute", "96", "127", "120", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDURS_NAME_V", "absolute", "995", "127", "120", "21", null, null, this);
            obj.set_taborder("1013");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "252", "127", "72", "21", null, null, this);
            obj.set_taborder("1015");
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "153", "72", "21", null, null, this);
            obj.set_taborder("1016");
            obj.set_text("직무");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "914", "153", "88", "21", null, null, this);
            obj.set_taborder("1017");
            obj.set_text("부서장여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDUTY_NAME_V", "absolute", "96", "153", "120", "21", null, null, this);
            obj.set_taborder("1019");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME_V", "absolute", "320", "127", "120", "21", null, null, this);
            obj.set_taborder("1020");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "477", "127", "72", "21", null, null, this);
            obj.set_taborder("1027");
            obj.set_text("직급");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "477", "153", "72", "21", null, null, this);
            obj.set_taborder("1028");
            obj.set_text("근무상태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWRKS_NAME_V", "absolute", "545", "153", "120", "21", null, null, this);
            obj.set_taborder("1030");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_NAME_V", "absolute", "545", "127", "120", "21", null, null, this);
            obj.set_taborder("1031");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "702", "127", "64", "21", null, null, this);
            obj.set_taborder("1032");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_NAME_V", "absolute", "757", "127", "120", "21", null, null, this);
            obj.set_taborder("1033");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDTMN_YSNO_V", "absolute", "995", "153", "19", "21", null, null, this);
            obj.set_taborder("1034");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormSearchChk");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "28", "71", "44", "21", null, null, this);
            obj.set_taborder("1035");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "70", "71", "80", "21", null, null, this);
            obj.set_taborder("1036");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "152", "71", "21", "21", null, null, this);
            obj.set_taborder("1037");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "175", "71", "100", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "252", "153", "72", "21", null, null, this);
            obj.set_taborder("1133");
            obj.set_text("급여형태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWRKS_NAME_V00", "absolute", "320", "153", "120", "21", null, null, this);
            obj.set_taborder("1134");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "702", "153", "64", "21", null, null, this);
            obj.set_taborder("1135");
            obj.set_text("파견지");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWRKS_NAME_V01", "absolute", "757", "153", "120", "21", null, null, this);
            obj.set_taborder("1136");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_APPOXD", "absolute", "8", "208", null, null, "25", "165", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1138");
            obj.set_tabstop("true");
            obj.set_binddataset("dsHR_APPOXD");
            obj.set_wheelscrollrow("1");
            obj.set_readonly("true");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"58\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"발령구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"발령일\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" displaytype=\"text\" text=\"소속\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"발령종료일\"/><Cell col=\"7\" text=\"발령순번\"/><Cell col=\"8\" text=\"직급\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" text=\"경력직위년차\"/><Cell col=\"11\" text=\"직책\"/><Cell col=\"12\" text=\"직무\"/><Cell col=\"13\" text=\"퇴직사유\"/><Cell col=\"14\" text=\"근무상태\"/><Cell col=\"15\" text=\"겸직부서\"/><Cell col=\"16\" text=\"겸직직책\"/><Cell col=\"17\" text=\"파견부서\"/><Cell col=\"18\" displaytype=\"text\" text=\"부서장여부\"/><Cell col=\"19\" text=\"부서장여부\"/><Cell col=\"20\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" text=\"bind:APDN_NAME\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:APNT_DATE\" editlimit=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:EMPL_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\" editimemode=\"native\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:APNT_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:right;\" text=\"bind:APNT_SEQN\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: ;\" text=\"bind:CPOS_NAME\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" style=\"align: ;\" text=\"bind:OPOS_NAME\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"none\" style=\"align:right;\" text=\"bind:CIBP_ANNU\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DURS_NAME\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DUTY_NAME\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:RTTY_CODE\"/><Cell col=\"14\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:WRKS_CODE\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:ADJN_NAME\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:ADDT_NAME\"/><Cell col=\"17\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DSPT_NAME\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"none\" style=\"align: ;\" text=\"bind:DTMN_YSNO\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:DTMN_YSNO\"/><Cell col=\"20\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_200X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADDT_CODE", "absolute", "930", null, "70", "21", null, "-141", this);
            obj.set_taborder("1141");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDURS_CODE", "absolute", "90", null, "85", "21", null, "-111", this);
            obj.set_taborder("1142");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_CODE", "absolute", "520", null, "77", "21", null, "-83", this);
            obj.set_taborder("1144");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDUTY_CODE", "absolute", "330", null, "77", "21", null, "-111", this);
            obj.set_taborder("1145");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_CODE", "absolute", "729", null, "109", "21", null, "-83", this);
            obj.set_taborder("1146");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "28", null, "72", "21", null, "118", this);
            obj.set_taborder("1149");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("st_DEPT_CODE", "absolute", "28", null, "72", "21", null, "94", this);
            obj.set_taborder("1150");
            obj.set_text("발령부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "97", null, "80", "21", null, "96", this);
            obj.set_taborder("1151");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDURS_NAME", "absolute", "97", null, "80", "21", null, "72", this);
            obj.set_taborder("1152");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "191", null, "72", "21", null, "118", this);
            obj.set_taborder("1153");
            obj.set_text("발령구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "310", null, "124", "21", null, "96", this);
            obj.set_taborder("1154");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPDN_CODE", "absolute", "250", null, "85", "21", null, "-73", this);
            obj.set_taborder("1155");
            obj.set_lengthunit("ascii");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPDN_NAME", "absolute", "310", null, "101", "21", null, "120", this);
            obj.set_taborder("1156");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "471", null, "76", "21", null, "118", this);
            obj.set_taborder("1157");
            obj.set_text("발령일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "913", null, "78", "21", null, "118", this);
            obj.set_taborder("1158");
            obj.set_text("발령순번");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_DUTY_CODE", "absolute", "240", null, "72", "21", null, "70", this);
            obj.set_taborder("1159");
            obj.set_text("직무");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_DURS_CODE", "absolute", "28", null, "72", "21", null, "70", this);
            obj.set_taborder("1160");
            obj.set_text("직책");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_APNT_ENDD", "absolute", "679", null, "100", "21", null, "118", this);
            obj.set_taborder("1161");
            obj.set_text("발령종료일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_CPOS_CODE", "absolute", "471", null, "76", "21", null, "94", this);
            obj.set_taborder("1162");
            obj.set_text("직급");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_WRKS_CODE", "absolute", "240", null, "72", "21", null, "46", this);
            obj.set_taborder("1165");
            obj.set_text("근무상태");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("st_DSPT_DTCD", "absolute", "28", null, "72", "21", null, "22", this);
            obj.set_taborder("1167");
            obj.set_text("파견부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDSPT_DTCD", "absolute", "97", null, "80", "21", null, "24", this);
            obj.set_taborder("1168");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_DTMN_YSNO", "absolute", "913", null, "78", "21", null, "70", this);
            obj.set_taborder("1169");
            obj.set_text("부서장여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEXTR_PLDH", "absolute", "539", null, "103", "21", null, "24", this);
            obj.set_taborder("1170");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "97", null, "80", "21", null, "120", this);
            obj.set_taborder("1172");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "202", null, "103", "21", null, "120", this);
            obj.set_taborder("1173");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "179", null, "21", "21", null, "120", this);
            obj.set_taborder("1174");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpAPDN_CODE", "absolute", "413", null, "21", "21", null, "120", this);
            obj.set_taborder("1175");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAPNT_DATE", "absolute", "539", null, "103", "21", null, "120", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1176");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Calendar("calAPNT_ENDD", "absolute", "773", null, "103", "21", null, "120", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1177");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("imgHelpDEPT_CODE", "absolute", "179", null, "21", "21", null, "96", this);
            obj.set_taborder("1178");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSECT_NAME", "absolute", "202", null, "103", "21", null, "96", this);
            obj.set_taborder("1179");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_NAME", "absolute", "539", null, "80", "21", null, "96", this);
            obj.set_taborder("1180");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCPOS_CODE", "absolute", "621", null, "21", "21", null, "96", this);
            obj.set_taborder("1181");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDURS_CODE", "absolute", "179", null, "21", "21", null, "72", this);
            obj.set_taborder("1182");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDUTY_NAME", "absolute", "310", null, "100", "21", null, "72", this);
            obj.set_taborder("1183");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDUTY_CODE", "absolute", "412", null, "21", "21", null, "72", this);
            obj.set_taborder("1184");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_NAME", "absolute", "773", null, "80", "21", null, "96", this);
            obj.set_taborder("1185");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpOPOS_CODE", "absolute", "855", null, "21", "21", null, "96", this);
            obj.set_taborder("1186");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDSPT_DTCD", "absolute", "179", null, "21", "21", null, "24", this);
            obj.set_taborder("1187");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbWRKS_CODE", "absolute", "310", null, "123", "21", null, "48", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1188");
            obj.set_cssclass("styFormSearchCombo");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_index("-1");

            obj = new Edit("edtDSPT_NAME", "absolute", "202", null, "231", "21", null, "24", this);
            obj.set_taborder("1189");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_ADJN_DTCD", "absolute", "471", null, "76", "21", null, "46", this);
            obj.set_taborder("1190");
            obj.set_text("겸직부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADJN_DTCD", "absolute", "539", null, "80", "21", null, "48", this);
            obj.set_taborder("1191");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpADJN_DTCD", "absolute", "621", null, "21", "21", null, "48", this);
            obj.set_taborder("1192");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADJN_NAME", "absolute", "644", null, "232", "21", null, "48", this);
            obj.set_taborder("1193");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_ADDT_CODE", "absolute", "913", null, "78", "21", null, "46", this);
            obj.set_taborder("1195");
            obj.set_text("겸직직책");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADDT_NAME", "absolute", "995", null, "97", "21", null, "48", this);
            obj.set_taborder("1196");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_EXTR_PLDH", "absolute", "471", null, "76", "21", null, "22", this);
            obj.set_taborder("1197");
            obj.set_text("파견지");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_RTTY_CODE", "absolute", "471", null, "76", "21", null, "70", this);
            obj.set_taborder("1198");
            obj.set_text("퇴직사유");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_RTTY_CODEstREMK_100X00", "absolute", "679", null, "100", "21", null, "22", this);
            obj.set_taborder("1199");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRTTY_CODE", "absolute", "539", null, "103", "21", null, "72", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1201");
            obj.set_type("search");
            obj.set_displayrowcount("10");
            obj.set_cssclass("styFormSearchCombo");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_index("-1");

            obj = new Static("st_OPOS_CODE", "absolute", "679", null, "100", "21", null, "94", this);
            obj.set_taborder("1202");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_PSTP_CODE", "absolute", "913", null, "78", "21", null, "94", this);
            obj.set_taborder("1203");
            obj.set_text("호봉");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPSTP_NAME", "absolute", "995", null, "97", "21", null, "96", this);
            obj.set_taborder("1204");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_CIBP_ANNU", "absolute", "679", null, "100", "21", null, "70", this);
            obj.set_taborder("1206");
            obj.set_text("경력직위년차");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCIBP_ANNU", "absolute", "773", null, "103", "21", null, "72", this);
            obj.set_taborder("1207");
            obj.set_inputtype("number");
            obj.set_maxlength("2");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_PYTY_CODE", "absolute", "28", null, "72", "21", null, "46", this);
            obj.set_taborder("1208");
            obj.set_text("급여형태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPYTY_CODE", "absolute", "97", null, "103", "21", null, "48", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1209");
            obj.set_cssclass("styFormSearchCombo");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_index("-1");

            obj = new Static("st_CPOS_CODE00", "absolute", "436", null, "76", "25", null, "-85", this);
            obj.set_taborder("1210");
            obj.set_text("직급");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_OPOS_CODE00", "absolute", "633", null, "84", "25", null, "-85", this);
            obj.set_taborder("1211");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "159", null, "88", "25", null, "-75", this);
            obj.set_taborder("1212");
            obj.set_text("발령구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_DURS_CODE00", "absolute", "0", null, "80", "25", null, "-113", this);
            obj.set_taborder("1213");
            obj.set_text("직책");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_DUTY_CODE00", "absolute", "239", null, "88", "25", null, "-113", this);
            obj.set_taborder("1214");
            obj.set_text("직무");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPSTP_CODE", "absolute", "917", null, "96", "21", null, "-83", this);
            obj.set_taborder("1215");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_PSTP_CODE00", "absolute", "836", null, "78", "25", null, "-85", this);
            obj.set_taborder("1216");
            obj.set_text("호봉");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_ADDT_CODE00", "absolute", "846", null, "78", "25", null, "-143", this);
            obj.set_taborder("1217");
            obj.set_text("겸직직책");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPDN_TMP5", "absolute", "338", null, "85", "21", null, "-73", this);
            obj.set_taborder("1218");
            obj.set_lengthunit("ascii");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpADDT_CODE", "absolute", "1094", null, "21", "21", null, "48", this);
            obj.set_taborder("1194");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_200X", "absolute", "773", null, "342", "21", null, "24", this);
            obj.set_taborder("1200");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPSTP_CODE", "absolute", "1094", null, "21", "21", null, "96", this);
            obj.set_taborder("1205");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPNT_SEQN", "absolute", "995", null, "120", "21", null, "120", this);
            obj.set_taborder("1163");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDTMN_YSNO", "absolute", "995", null, "15", "21", null, "72", this);
            obj.set_taborder("1171");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("1223");
            obj.set_text("인사발령변경");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("1224");
            obj.set_text("홈 > 인사관리 > 발령관리 > 인사발령변경");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("1225");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("1226");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("1227");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("1228");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("1229");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("1230");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "557", "103", "80", "15", null, null, this);
            obj.set_taborder("1231");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1232");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("1233");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "557", "183", "80", "25", null, null, this);
            obj.set_taborder("1234");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("1235");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("1236");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "9", "119", "30", "41", null, null, this);
            obj.set_taborder("1237");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "8", "202", "216", "6", null, null, this);
            obj.set_taborder("1238");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "590", "552", "80", "15", null, null, this);
            obj.set_taborder("1239");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "9", "568", "30", "121", null, null, this);
            obj.set_taborder("1240");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "303", "71", "70", "21", null, null, this);
            obj.set_taborder("1241");
            obj.set_text("발령기간");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPNT_DATE1", "absolute", "371", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1242");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static08", "absolute", "476", "71", "14", "21", null, null, this);
            obj.set_taborder("1243");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPNT_DATE2", "absolute", "491", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1244");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Image02", "absolute", "620", "71", "70", "21", null, null, this);
            obj.set_taborder("1245");
            obj.set_text("발령구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPDN_CODE", "absolute", "688", "71", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1246");
            obj.set_type("search");
            obj.set_displayrowcount("10");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static37", "absolute", "275", "61", "40", "41", null, null, this);
            obj.set_taborder("1247");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "591", "61", "40", "41", null, null, this);
            obj.set_taborder("1248");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인사발령변경");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtEMPL_NUMB_V","value","dsHR_MASTXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtDEPT_NAME_V","value","dsHR_MASTXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtCPOS_NAME_V","value","dsHR_MASTXM","CPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtDURS_NAME_V","value","dsHR_MASTXM","DURS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtDUTY_NAME_V","value","dsHR_MASTXM","DUTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtWRKS_NAME_V","value","dsHR_MASTXM","WRKS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","chkDTMN_YSNO_V","value","dsHR_MASTXM","DTMN_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtOPOS_NAME_V","value","dsHR_MASTXM","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtWRKS_NAME_V00","value","dsHR_MASTXM","PYTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtWRKS_NAME_V01","value","dsHR_MASTXM","EXTR_PLDH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edtADDT_CODE","value","dsHR_APPOXD","ADDT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","edtDURS_CODE","value","dsHR_APPOXD","DURS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edtCPOS_CODE","value","dsHR_APPOXD","CPOS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","edtDUTY_CODE","value","dsHR_APPOXD","DUTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","edtOPOS_CODE","value","dsHR_APPOXD","OPOS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtDEPT_CODE","value","dsHR_APPOXD","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtDURS_NAME","value","dsHR_APPOXD","DURS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtDEPT_NAME","value","dsHR_APPOXD","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edtAPDN_CODE","value","dsHR_APPOXD","APDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","edtAPDN_NAME","value","dsHR_APPOXD","APDN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtAPNT_SEQN","value","dsHR_APPOXD","APNT_SEQN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtDSPT_DTCD","value","dsHR_APPOXD","DSPT_DTCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edtEXTR_PLDH","value","dsHR_APPOXD","EXTR_PLDH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","chkDTMN_YSNO","value","dsHR_APPOXD","DTMN_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtEMPL_NUMB","value","dsHR_APPOXD","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edtEMPL_NAME","value","dsHR_APPOXD","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","calAPNT_DATE","value","dsHR_APPOXD","APNT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","calAPNT_ENDD","value","dsHR_APPOXD","APNT_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtSECT_NAME","value","dsHR_APPOXD","SECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item127","edtCPOS_NAME","value","dsHR_APPOXD","CPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtDUTY_NAME","value","dsHR_APPOXD","DUTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtOPOS_NAME","value","dsHR_APPOXD","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","cmbWRKS_CODE","value","dsHR_APPOXD","WRKS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edtDSPT_NAME","value","dsHR_APPOXD","DSPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edtADJN_DTCD","value","dsHR_APPOXD","ADJN_DTCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edtADJN_NAME","value","dsHR_APPOXD","ADJN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edtADDT_NAME","value","dsHR_APPOXD","ADDT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edtREMK_200X","value","dsHR_APPOXD","REMK_200X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","cmbRTTY_CODE","value","dsHR_APPOXD","RTTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","edtPSTP_NAME","value","dsHR_APPOXD","PSTP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","edtCIBP_ANNU","value","dsHR_APPOXD","CIBP_ANNU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","cmbPYTY_CODE","value","dsHR_APPOXD","PYTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","edtPSTP_CODE","value","dsHR_APPOXD","PSTP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","edtAPDN_TMP5","value","dsHR_APPOXD","REF4_FILD");
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
        this.addIncludeScript("HRME0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRME0030.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRME0030 인사발령변경
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		고민주		Initial Created.
         *   2016.10.13		안윤준		수정.
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
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTTF";
        this.sPACKAGENAME = "HRME0030";

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
        	this.edtSHREMPL_NAME.setFocus();
        	
        	this.calSHRAPNT_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4)+ "0101");
        	this.calSHRAPNT_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));

        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_APPOBS=dsHR_APPOBS";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "HRMA0010", "SEARCH00", sInDataSet, sOutDataSet, sArgument, "");
        	
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
        	this.fnc_DatasetClear("dsHR_MASTXM,dsHR_APPOXD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsHR_APPOXD");
        	this.grdHR_APPOXD.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	if ( this.edtAPDN_TMP5.value == "01" || this.edtAPDN_TMP5.value == "02" ) {
        		var nRow = this.dsHR_APPOXD.rowposition;
        		this.dsHR_APPOXD.setColumn(nRow, "NETP_DATE", this.dsHR_APPOXD.getColumn(nRow, "APNT_DATE")); // 차기승급일
        		this.dsHR_APPOXD.setColumn(nRow, "NEPR_DATE", this.dsHR_APPOXD.getColumn(nRow, "APNT_DATE")); // 차기승진일
        		
        	}
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsHR_APPOXD=dsHR_APPOXD:U";
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
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_APPOXD", this);

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

        	if (this.fnc_DatasetChangeCheck("dsHR_APPOXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHREMPL_NUMB.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "사원", this.edtSHREMPL_NUMB);
        	}
        	
        	if (this.calSHRAPNT_DATE1.value > this.calSHRAPNT_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM028", "발령기간 종료일,발령기간 시작일", this.calSHRAPNT_DATE1);
        	}
        	
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_APPOXD")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsHR_APPOXD.getRowCount(); i++) {

        		if (this.dsHR_APPOXD.getRowType(i) == Dataset.ROWTYPE_NORMAL)	{	continue;	}

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원명", this.dsHR_APPOXD, i, this.edtEMPL_NAME, "");

        		} else if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "APDN_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "발령구분", this.dsHR_APPOXD, i, this.edtAPDN_NAME, "");

        		} else if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "APNT_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "발령일", this.dsHR_APPOXD, i, this.edtAPNT_DATE, "");

        		} else if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "WRKS_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "근무상태", this.dsHR_APPOXD, i, this.cmbWRKS_CODE, "");

        		}

        
        		var code = this.dsHR_APPOXD.getColumn(i,"APDN_CODE");
        	
        		//발령종료일
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "EDCH_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "APNT_ENDD"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "발령종료일", this.dsHR_APPOXD, i, this.calAPNT_ENDD, "");
        			}
        		}
        	
        		//부서
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DTCH_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "DEPT_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "부서", this.dsHR_APPOXD, i, this.edtDEPT_NAME, "");
        			}
        		}
        		
        		//직급
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "CLPC_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "CPOS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "직급", this.dsHR_APPOXD, i, this.edtCPOS_NAME, "");
        			}
        		}

        		//직위
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "OFPC_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "CPOS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "직위", this.dsHR_APPOXD, i, this.edtOPOS_NAME, "");
        			}
        		}
        		
        		// 호봉
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "NMCG_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "OPOS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "호봉", this.dsHR_APPOXD, i, this.edtPSTP_NAME, "");
        			}
        		}

        		//직책
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DURC_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "DURS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "직책", this.dsHR_APPOXD, i, this.edtDURS_NAME, "");
        			}
        		}

        		//직무
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "JOCH_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "DUTY_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "직무", this.dsHR_APPOXD, i, this.edtDUTY_NAME, "");
        			}
        		}
        		
        		//퇴직사유
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "RETC_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "RTTY_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "퇴직사유", this.dsHR_APPOXD, i, this.cmbRTTY_CODE, "");
        			}
        		}
        		
        		// 경력직위년차
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "CIBP_YSNO")
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "CIBP_ANNU"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "경력직위년차", this.dsHR_APPOXD, i, this.edtCIBP_ANNU, "");
        			}
        		}
        		
        		//부서장여부
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "HDTC_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "DTMN_YSNO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "부서장여부", this.dsHR_APPOXD, i, this.chkDTMN_YSNO, "");
        			}
        		}
        		
        		// 급여형태
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "PYTC_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "PYTY_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "급여형태", this.dsHR_APPOXD, i, this.cmbPYTY_CODE, "");
        			}
        		}
        		
        		//겸직부서
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "AJDC_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "ADJN_DTCD"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "겸직부서", this.dsHR_APPOXD, i, this.edtADJN_NAME, "");
        			}
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "ADDT_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "겸직직책", this.dsHR_APPOXD, i, this.edtADDT_NAME, "");
        			}
        		}

        		//파견부서
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DTDC_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "DSPT_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "파견부서", this.dsHR_APPOXD, i, this.edtDSPT_NAME, "");
        			}
        		}

        		//파견지
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "PSCH_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "EXTR_PLDH"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "파견지", this.dsHR_APPOXD, i, this.edtEXTR_PLDH, "");
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

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		
        	} else if  (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"));
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_MASTXM.getColumn(this.dsHR_MASTXM.rowposition, "EMPL_NUMB"))) > 0) {
        			sReturnString += " APNT_DATE1=" + this.fnc_Quote(this.calSHRAPNT_DATE1.value);
        			sReturnString += " APNT_DATE2=" + this.fnc_Quote(this.calSHRAPNT_DATE2.value);
        			sReturnString += " APDN_CODE=" 	+ this.fnc_Quote(this.cmbSHRAPDN_CODE.value);
        		}
        		
        	} else if (sKind == "SEARCH02") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote("HRMA0010");
        		sReturnString += " action=" 	+ this.fnc_Quote("SEARCH00");
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);

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
        		if ( this.dsHR_MASTXM.getRowCount() > 0 ) {
        			var sMethodName = "SEARCH01";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsHR_APPOXD=dsHR_APPOXD";
        			var sArgument 	= this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        	
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation, this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdHR_APPOXD.setFocus();

        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsHR_APPOXD);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam 	= new Array();
        		var arrInt 		= 0;
        			arrParam[arrInt++] = "COMBO,cmbSHRAPDN_CODE,dsSHRAPDN_CODE,0"; // 발령구분
        			arrParam[arrInt++] = "COMBO,cmbRTTY_CODE,dsRTTY_CODE,0"; // 퇴직사유
        			arrParam[arrInt++] = "COMBO,cmbPYTY_CODE,dsPYTY_CODE,0"; // 급여형태
        			arrParam[arrInt++] = "COMBO,cmbWRKS_CODE,dsWRKS_CODE,0"; // 근무상태
        			arrParam[arrInt++] = "GRID,grdHR_APPOXD,dsRTTY_CODE,RTTY_CODE"; //퇴직사유
        			arrParam[arrInt++] = "GRID,grdHR_APPOXD,dsWRKS_CODE,WRKS_CODE"; //근무상태
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.edtEMPL_NAME.set_readonly(false);
        		this.calAPNT_DATE.set_readonly(false);
        		this.imgHelpEMPL_NUMB.set_enable(true);

        	} else {
        		this.edtEMPL_NAME.set_readonly(true);
        		this.calAPNT_DATE.set_readonly(true);
        		this.imgHelpEMPL_NUMB.set_enable(false);

        	}

        	this.setCtrl();
        }
        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/

        /*****************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         *****************************************************************************************************/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME"))  {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출

        		if (this.fnc_Length(this.fnc_Trim(this.edtSHREMPL_NUMB.value)) > 0) {
        			this.fn_Search();
        		} else {
        			this.fnc_DatasetClear("dsHR_MASTXM,dsHR_APPOXD");
        		}
        		
        	} else if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtEMPL_NAME"))  { // 조회조건 - 사원정보코드(Popup)
        		arrParam[0] = "HRM0016";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtEMPL_NAME";
        		arrParam[5] = "edtEMPL_NUMB,edtEMPL_NAME,edtDEPT_CODE,edtSECT_NAME,edtDEPT_NAME";
        		arrParam[5] += ",edtCPOS_CODE,edtCPOS_NAME,edtOPOS_CODE";
        		arrParam[5] += ",edtOPOS_NAME,edtDURS_CODE,edtDURS_NAME,edtDUTY_CODE,edtDUTY_NAME";
        		arrParam[5] += ",cmbRTTY_CODE";
        		arrParam[6] = "0,1,2,3,4";
        		arrParam[6] += ",7,8,9";
        		arrParam[6] += ",10,11,12,13,14";
        		arrParam[6] += ",16";

        	} else if ((obj.name == "imgHelpAPDN_CODE") || (obj.name == "edtAPDN_NAME"))  { // 발령
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "APDN_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtAPDN_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtAPDN_NAME";
        		arrParam[5] = "edtAPDN_CODE,edtAPDN_NAME,cmbWRKS_CODE,edtAPDN_TMP5";
        		arrParam[6] = "0,1,2,5";

        	} else if ((obj.name == "imgHelpDEPT_CODE") || (obj.name == "edtDEPT_NAME"))  {
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtDEPT_NAME";
        		arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME,edtSECT_NAME";
        		arrParam[6] = "0,1,3";

        	} else if ((obj.name == "imgHelpCPOS_CODE") || (obj.name == "edtCPOS_NAME"))  {
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "CPOS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtCPOS_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtCPOS_NAME";
        		arrParam[5] = "edtCPOS_CODE,edtCPOS_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpOPOS_CODE") || (obj.name == "edtOPOS_NAME"))  {
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "OPOS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtOPOS_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtOPOS_NAME";
        		arrParam[5] = "edtOPOS_CODE,edtOPOS_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpDURS_CODE") || (obj.name == "edtDURS_NAME"))  {
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "DURS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtDURS_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtDURS_NAME";
        		arrParam[5] = "edtDURS_CODE,edtDURS_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpDUTY_CODE") || (obj.name == "edtDUTY_NAME"))  {
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "DUTY_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtDUTY_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtDUTY_NAME";
        		arrParam[5] = "edtDUTY_CODE,edtDUTY_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpADJN_DTCD") || (obj.name == "edtADJN_NAME"))  {
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtADJN_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtADJN_NAME";
        		arrParam[5] = "edtADJN_DTCD,edtADJN_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpADDT_CODE") || (obj.name == "edtADDT_NAME"))  {
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "DURS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtADDT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtADDT_NAME";
        		arrParam[5] = "edtADDT_CODE,edtADDT_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpDSPT_DTCD") || (obj.name == "edtDSPT_NAME"))  {
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtDSPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtDSPT_NAME";
        		arrParam[5] = "edtDSPT_DTCD,edtDSPT_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpPSTP_CODE") || (obj.name == "edtPSTP_NAME"))  {
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "PSTP_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtPSTP_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtPSTP_NAME";
        		arrParam[5] = "edtPSTP_CODE,edtPSTP_NAME";
        		arrParam[6] = "0,1";
        		
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 
        	||   obj.name != "imgHelpSHREMPL_NUMB" || obj.name != "edtSHREMPL_NAME" ){
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	}
        	
        }

        /*-----------------------------------+
        |  발령에따른 필수여부 세팅(컴포넌트)|
        	@parameter : code
        	@return :
        +-----------------------------------*/
        this.setCtrl = function() {

        	this.fnc_SetReadonly(this.calAPNT_ENDD, true); // 발령종료일
        	this.fnc_SetReadonly(this.edtDEPT_NAME, true); // 발령부서
        	this.fnc_SetReadonly(this.edtCPOS_NAME, true); // 직급
        	this.fnc_SetReadonly(this.edtOPOS_NAME, true); // 직위
        	this.fnc_SetReadonly(this.edtPSTP_NAME, true); // 호봉
        	this.fnc_SetReadonly(this.edtDURS_NAME, true); // 직책
        	this.fnc_SetReadonly(this.edtDUTY_NAME, true); // 직무
        	this.fnc_SetReadonly(this.cmbRTTY_CODE, true); // 퇴직사유
        	this.fnc_SetReadonly(this.edtCIBP_ANNU, true); // 경력직위년차
        	this.fnc_SetReadonly(this.chkDTMN_YSNO, true); // 부서장여부
        	this.fnc_SetReadonly(this.cmbPYTY_CODE, true); // 급여형태
        	this.fnc_SetReadonly(this.edtADJN_NAME, true); // 겸직부서
        	this.fnc_SetReadonly(this.edtADDT_NAME, true); // 겸직직책
        	this.fnc_SetReadonly(this.edtDSPT_NAME, true); // 파견부서
        	this.fnc_SetReadonly(this.edtEXTR_PLDH, true); // 파견지

        	this.imgHelpDEPT_CODE.set_enable(false); // 발령부서
        	this.imgHelpCPOS_CODE.set_enable(false); // 직급
        	this.imgHelpOPOS_CODE.set_enable(false); // 직위
        	this.imgHelpPSTP_CODE.set_enable(false); // 호봉
        	this.imgHelpDURS_CODE.set_enable(false); // 직책
        	this.imgHelpDUTY_CODE.set_enable(false); // 직무
        	this.imgHelpADJN_DTCD.set_enable(false); // 겸직부서
        	this.imgHelpADDT_CODE.set_enable(false); // 겸직직책
        	this.imgHelpDSPT_DTCD.set_enable(false); // 파견부서

        	this.st_APNT_ENDD.set_cssclass("styFormItemCap"); // 발령종료일
        	this.st_DEPT_CODE.set_cssclass("styFormItemCap"); // 발령부서
        	this.st_CPOS_CODE.set_cssclass("styFormItemCap"); // 직급
        	this.st_OPOS_CODE.set_cssclass("styFormItemCap"); // 직위
        	this.st_PSTP_CODE.set_cssclass("styFormItemCap"); // 호봉
        	this.st_DURS_CODE.set_cssclass("styFormItemCap"); // 직책
        	this.st_DUTY_CODE.set_cssclass("styFormItemCap"); // 직무
        	this.st_RTTY_CODE.set_cssclass("styFormItemCap"); // 퇴직사유
        	this.st_CIBP_ANNU.set_cssclass("styFormItemCap"); // 경력직위년차
        	this.st_DTMN_YSNO.set_cssclass("styFormItemCap"); // 부서장여부
        	this.st_PYTY_CODE.set_cssclass("styFormItemCap"); // 급여형태
        	this.st_ADJN_DTCD.set_cssclass("styFormItemCap"); // 겸직부서
        	this.st_ADDT_CODE.set_cssclass("styFormItemCap"); // 겸직직책
        	this.st_DSPT_DTCD.set_cssclass("styFormItemCap"); // 파견부서
        	this.st_EXTR_PLDH.set_cssclass("styFormItemCap"); // 파견지

        	var code = this.dsHR_APPOXD.getColumn(this.dsHR_APPOXD.rowposition, "APDN_CODE");

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "EDCH_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.calAPNT_ENDD, false); // 발령종료일
        		if(sUSEX_YSNO == "2"){ this.st_APNT_ENDD.set_cssclass("styFormItemCapBE"); } // 발령종료일
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DTCH_YSNO");
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.edtDEPT_NAME, false); // 부서
        		this.imgHelpDEPT_CODE.set_enable(true);
        		if(sUSEX_YSNO == "2"){ this.st_DEPT_CODE.set_cssclass("styFormItemCapBE"); } // 부서
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "CLPC_YSNO")
        	if(sUSEX_YSNO == "1" ||sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.edtCPOS_NAME, false); // 직급
        		this.imgHelpCPOS_CODE.set_enable(true);
        		if(sUSEX_YSNO == "2"){ this.st_CPOS_CODE.set_cssclass("styFormItemCapBE"); } // 직급
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "OFPC_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.edtOPOS_NAME, false); // 직위
        		this.imgHelpOPOS_CODE.set_enable(true);
        		if(sUSEX_YSNO == "2"){ this.st_OPOS_CODE.set_cssclass("styFormItemCapBE"); } // 직위
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "NMCG_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.edtPSTP_NAME, false); // 호봉
        		this.imgHelpPSTP_CODE.set_enable(true);
        		if(sUSEX_YSNO == "2"){ this.st_PSTP_CODE.set_cssclass("styFormItemCapBE"); } // 호봉
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DURC_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.edtDURS_NAME, false); // 직책
        		this.imgHelpDURS_CODE.set_enable(true);
        		if(sUSEX_YSNO == "2"){ this.st_DURS_CODE.set_cssclass("styFormItemCapBE"); } // 직책
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "JOCH_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.edtDUTY_NAME, false); // 직무
        		this.imgHelpDUTY_CODE.set_enable(true);
        		if(sUSEX_YSNO == "2"){ this.st_DUTY_CODE.set_cssclass("styFormItemCapBE"); } // 직무
        	}
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "RETC_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.cmbRTTY_CODE, false); // 퇴직사유
        		if(sUSEX_YSNO == "2"){ this.st_RTTY_CODE.set_cssclass("styFormItemCapBE"); } // 퇴직사유
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "CIBP_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.edtCIBP_ANNU, false); // 경력직위년차
        		if(sUSEX_YSNO == "2"){ this.st_CIBP_ANNU.set_cssclass("styFormItemCapBE"); } // 경력직위년차
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "HDTC_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.chkDTMN_YSNO, false); // 부서장여부
        		if(sUSEX_YSNO == "2"){ this.st_DTMN_YSNO.set_cssclass("styFormItemCapBE"); } // 부서장여부
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "PYTC_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.cmbPYTY_CODE, false); // 급여형태
        		if(sUSEX_YSNO == "2"){ this.st_PYTY_CODE.set_cssclass("styFormItemCapBE"); } // 급여형태
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "AJDC_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.edtADJN_NAME, false); // 겸직부서
        		this.fnc_SetReadonly(this.edtADDT_NAME, false);
        		this.imgHelpADJN_DTCD.set_enable(true);
        		this.imgHelpADDT_CODE.set_enable(true);
        		if(sUSEX_YSNO == "2"){ // 겸직부서
        			this.st_ADJN_DTCD.set_cssclass("styFormItemCapBE");
        			this.st_ADDT_CODE.set_cssclass("styFormItemCapBE");
        		}
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DTDC_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.edtDSPT_NAME, false); // 파견부서
        		this.imgHelpDSPT_DTCD.set_enable(true);
        		if(sUSEX_YSNO == "2"){ this.st_DSPT_DTCD.set_cssclass("styFormItemCapBE"); } // 파견부서
        	}

        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "PSCH_YSNO")
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.fnc_SetReadonly(this.edtEXTR_PLDH, false); // 파견지
        		if(sUSEX_YSNO == "2"){ this.st_EXTR_PLDH.set_cssclass("styFormItemCapBE"); } // 파견지
        	}
        	
        }

        /*-----------------------------------+
        |  발령상세 데이터셋 변경시 |
        	@parameter : code
        	@return :
        +------------------------------------*/
        this.dsHR_APPOXD_oncolumnchanged = function(obj,e){
        	if (e.columnid == "APDN_CODE") {	this.setCtrl();	 	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_APPOXD.addEventHandler("oncolumnchanged", this.dsHR_APPOXD_oncolumnchanged, this);
            this.dsHR_APPOXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.Static120.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtEMPL_NUMB_V.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDURS_NAME_V.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static10.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtDUTY_NAME_V.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME_V.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static16.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtWRKS_NAME_V.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCPOS_NAME_V.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static19.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtOPOS_NAME_V.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkDTMN_YSNO_V.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtWRKS_NAME_V00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtWRKS_NAME_V01.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdHR_APPOXD.addEventHandler("oncellclick", this.grdHR_APPOXM_oncellclick, this);
            this.grdHR_APPOXD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.edtADDT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADDT_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDURS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDURS_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCPOS_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDUTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDUTY_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtOPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOPOS_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.Static03.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDURS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDURS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.Static06.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtAPDN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtAPDN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.Static22.addEventHandler("onclick", this.Static120_onclick, this);
            this.Static25.addEventHandler("onclick", this.Static120_onclick, this);
            this.st_APNT_ENDD.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtDSPT_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEXTR_PLDH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpAPDN_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.calAPNT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calAPNT_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSECT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpCPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpDURS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtDUTY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDUTY_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpDUTY_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtOPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpOPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpDSPT_DTCD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtDSPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDSPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtADJN_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpADJN_DTCD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtADJN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADJN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtADDT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADDT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtPSTP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPSTP_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCIBP_ANNU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCIBP_ANNU.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.Static02.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtPSTP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPSTP_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpADDT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtREMK_200X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpPSTP_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtAPNT_SEQN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkDTMN_YSNO.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRAPNT_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPNT_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPDN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("HRME0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
