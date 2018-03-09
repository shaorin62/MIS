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
                this.set_name("HRME0010P01");
                this.set_titletext("인사발령상세");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1150,750);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">RTTY_CODE</Col><Col id=\"DSNAME\">dsRTTY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">PYTY_CODE</Col><Col id=\"DSNAME\">dsPYTY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">WRKS_CODE</Col><Col id=\"DSNAME\">dsWRKS_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOXM", this);
            obj._setContents("<ColumnInfo><Column id=\"APNT_HOCT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRFT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_SBJT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APAL_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APAL_YNNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DOCN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"APDN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"APNT_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"APNT_ENDD\" size=\"8\" type=\"STRING\"/><Column id=\"APNT_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CPOS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"CIBP_ANNU\" size=\"2\" type=\"BIGDECIMAL\"/><Column id=\"DURS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"RTTY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"WRKS_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"ADJN_DTCD\" size=\"10\" type=\"STRING\"/><Column id=\"ADDT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DSPT_DTCD\" size=\"10\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"APNT_HOCT\" size=\"10\" type=\"STRING\"/><Column id=\"PSTP_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"PYTY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DTMN_DTCD\" size=\"10\" type=\"STRING\"/><Column id=\"DSPT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"EXTR_PLDH\" size=\"50\" type=\"STRING\"/><Column id=\"LEAV_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PBNR_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"SEAS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DEAT_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PRON_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"PARE_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"NETP_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"NEPR_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DURS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DUTY_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"OPOS_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"APAL_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DTCH_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"CLPC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"NMCG_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"DURC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"JOCH_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"OFPC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PYTC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"WRKC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"HDTC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"PBDC_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"CSPT_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"200\" type=\"STRING\"/><Column id=\"APNT_PROW\" size=\"200\" type=\"STRING\"/><Column id=\"WRDV_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"WRDV_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"KEYVALUE\" size=\"256\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"JBGP_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DSPT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"ADJN_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"ADDT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"APNT_INNM\" size=\"256\" type=\"STRING\"/><Column id=\"REF2_FILD\" size=\"256\" type=\"STRING\"/><Column id=\"REF3_FILD\" size=\"256\" type=\"STRING\"/><Column id=\"REF4_FILD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOBS", this);
            obj._setContents("<ColumnInfo><Column id=\"APDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WDCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WACH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OCCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLPC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFPC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NMCG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EBCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AJDC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTDC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EDCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HDTC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RETC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVI_DEPTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape01", "absolute", "15", null, "1120", "143", null, "15", this);
            obj.set_taborder("48");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADDT_CODE", "absolute", "937", null, "70", "21", null, "-141", this);
            obj.set_taborder("92");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDURS_CODE", "absolute", "97", null, "85", "21", null, "-111", this);
            obj.set_taborder("49");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_CODE", "absolute", "527", null, "77", "21", null, "-91", this);
            obj.set_taborder("25");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDUTY_CODE", "absolute", "337", null, "77", "21", null, "-111", this);
            obj.set_taborder("91");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_CODE", "absolute", "736", null, "109", "21", null, "-91", this);
            obj.set_taborder("30");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "15", "60", null, "43", "15", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "107", "304", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_APPOXD", "absolute", "15", "128", "1120", null, null, "173", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("47");
            obj.set_tabstop("false");
            obj.set_binddataset("dsHR_APPOXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj.set_readonly("true");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"58\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"발령구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"발령일\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" displaytype=\"text\" text=\"소속\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"발령종료일\"/><Cell col=\"7\" text=\"발령순번\"/><Cell col=\"8\" text=\"직급\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" text=\"경력직위년차\"/><Cell col=\"11\" text=\"직책\"/><Cell col=\"12\" text=\"직무\"/><Cell col=\"13\" text=\"퇴직사유\"/><Cell col=\"14\" text=\"근무상태\"/><Cell col=\"15\" text=\"겸직부서\"/><Cell col=\"16\" text=\"겸직직책\"/><Cell col=\"17\" text=\"파견부서\"/><Cell col=\"18\" displaytype=\"text\" text=\"부서장여부\"/><Cell col=\"19\" text=\"부서장여부\"/><Cell col=\"20\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" text=\"bind:APDN_NAME\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:APNT_DATE\" editlimit=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:EMPL_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\" editimemode=\"native\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:APNT_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:right;\" text=\"bind:APNT_SEQN\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: ;\" text=\"bind:CPOS_NAME\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" style=\"align: ;\" text=\"bind:OPOS_NAME\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"none\" style=\"align:right;\" text=\"bind:CIBP_ANNU\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DURS_NAME\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DUTY_NAME\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:RTTY_CODE\"/><Cell col=\"14\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:WRKS_CODE\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:ADJN_NAME\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:ADDT_NAME\"/><Cell col=\"17\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DSPT_NAME\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"none\" style=\"align: ;\" text=\"bind:DTMN_YSNO\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:DTMN_YSNO\"/><Cell col=\"20\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_200X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "35", null, "80", "21", null, "128", this);
            obj.set_taborder("54");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("st_DEPT_CODE", "absolute", "35", null, "80", "21", null, "102", this);
            obj.set_taborder("56");
            obj.set_text("발령부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "103", null, "77", "21", null, "102", this);
            obj.set_taborder("23");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDURS_NAME", "absolute", "103", null, "77", "21", null, "76", this);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "312", null, "72", "21", null, "128", this);
            obj.set_taborder("57");
            obj.set_text("발령구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "380", null, "100", "21", null, "102", this);
            obj.set_taborder("5");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPDN_CODE", "absolute", "102", null, "85", "21", null, "-61", this);
            obj.set_taborder("90");
            obj.set_lengthunit("ascii");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPDN_NAME", "absolute", "380", null, "77", "21", null, "128", this);
            obj.set_taborder("1");
            obj.set_lengthunit("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_enable("true");
            obj.set_maxlength("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "509", null, "68", "21", null, "128", this);
            obj.set_taborder("58");
            obj.set_text("발령일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "928", null, "78", "21", null, "128", this);
            obj.set_taborder("59");
            obj.set_text("발령순번");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_DUTY_CODE", "absolute", "312", null, "72", "21", null, "76", this);
            obj.set_taborder("60");
            obj.set_text("직무");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_DURS_CODE", "absolute", "35", null, "80", "21", null, "76", this);
            obj.set_taborder("61");
            obj.set_cssclass("styFormItemCap");
            obj.set_text("직책");
            this.addChild(obj.name, obj);

            obj = new Static("st_APNT_ENDD", "absolute", "705", null, "92", "21", null, "128", this);
            obj.set_taborder("62");
            obj.set_text("발령종료일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_CPOS_CODE", "absolute", "509", null, "68", "21", null, "102", this);
            obj.set_taborder("63");
            obj.set_cssclass("styFormItemCap");
            obj.set_text("직급");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPNT_SEQN", "absolute", "1009", null, "100", "21", null, "128", this);
            obj.set_taborder("4");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_WRKS_CODE", "absolute", "312", null, "72", "21", null, "50", this);
            obj.set_taborder("69");
            obj.set_text("근무상태");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("st_DSPT_DTCD", "absolute", "35", null, "80", "21", null, "24", this);
            obj.set_taborder("70");
            obj.set_text("파견부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDSPT_DTCD", "absolute", "103", null, "77", "21", null, "24", this);
            obj.set_taborder("31");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_DTMN_YSNO", "absolute", "928", null, "78", "21", null, "76", this);
            obj.set_taborder("72");
            obj.set_text("부서장여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEXTR_PLDH", "absolute", "380", null, "100", "21", null, "24", this);
            obj.set_taborder("19");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDTMN_YSNO", "absolute", "1009", null, "15", "21", null, "76", this);
            obj.set_taborder("13");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormSearchChk");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "103", null, "77", "21", null, "128", this);
            obj.set_taborder("36");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "205", null, "76", "21", null, "128", this);
            obj.set_taborder("0");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "182", null, "22", "21", null, "128", this);
            obj.set_taborder("37");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpAPDN_CODE", "absolute", "459", null, "22", "21", null, "128", this);
            obj.set_taborder("21");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAPNT_DATE", "absolute", "577", null, "100", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.set_value("null");

            obj = new Calendar("calAPNT_ENDD", "absolute", "799", null, "100", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("imgHelpDEPT_CODE", "absolute", "182", null, "22", "21", null, "102", this);
            obj.set_taborder("38");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSECT_NAME", "absolute", "205", null, "172", "21", null, "102", this);
            obj.set_taborder("39");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_NAME", "absolute", "577", null, "77", "21", null, "102", this);
            obj.set_taborder("6");
            obj.set_lengthunit("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("false");
            obj.set_maxlength("0");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCPOS_CODE", "absolute", "656", null, "22", "21", null, "102", this);
            obj.set_taborder("26");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDURS_CODE", "absolute", "182", null, "22", "21", null, "76", this);
            obj.set_taborder("28");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDUTY_NAME", "absolute", "380", null, "77", "21", null, "76", this);
            obj.set_taborder("10");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDUTY_CODE", "absolute", "459", null, "22", "21", null, "76", this);
            obj.set_taborder("74");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_NAME", "absolute", "799", null, "77", "21", null, "102", this);
            obj.set_taborder("7");
            obj.set_lengthunit("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_visible("true");
            obj.set_readonly("false");
            obj.set_maxlength("0");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpOPOS_CODE", "absolute", "878", null, "21", "21", null, "102", this);
            obj.set_taborder("27");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDSPT_DTCD", "absolute", "182", null, "22", "21", null, "24", this);
            obj.set_taborder("76");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbWRKS_CODE", "absolute", "380", null, "100", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_cssclass("styFormSearchCombo");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_displayrowcount("10");

            obj = new Edit("edtDSPT_NAME", "absolute", "205", null, "76", "21", null, "24", this);
            obj.set_taborder("18");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle6", "absolute", "35", "71", "76", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_text("발령호수");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Image01", "absolute", "213", "71", "76", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("발령제목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRAPNT_SBJT", "absolute", "281", "71", "300", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "610", "71", "89", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_text("발령기준일");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Image02", "absolute", "799", "71", "76", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("승인여부");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRAPAL_YNNM", "absolute", "867", "71", "80", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_ADJN_DTCD", "absolute", "509", null, "68", "21", null, "50", this);
            obj.set_taborder("65");
            obj.set_text("겸직부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADJN_DTCD", "absolute", "577", null, "99", "21", null, "50", this);
            obj.set_taborder("83");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpADJN_DTCD", "absolute", "678", null, "22", "21", null, "50", this);
            obj.set_taborder("84");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADJN_NAME", "absolute", "701", null, "198", "21", null, "50", this);
            obj.set_taborder("16");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpADDT_CODE", "absolute", "1088", null, "22", "21", null, "50", this);
            obj.set_taborder("40");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("st_ADDT_CODE", "absolute", "928", null, "78", "21", null, "50", this);
            obj.set_taborder("71");
            obj.set_text("겸직직책");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADDT_NAME", "absolute", "1009", null, "77", "21", null, "50", this);
            obj.set_taborder("17");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_EXTR_PLDH", "absolute", "312", null, "68", "21", null, "24", this);
            obj.set_taborder("75");
            obj.set_text("파견지");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRAPNT_HOCT", "absolute", "104", "71", "80", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_type("string");
            obj.set_mask("####-####");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRDRFT_DATE", "absolute", "691", "71", "80", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown", "absolute", "15", "35", "98", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUp", "absolute", "116", "35", "86", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Static("st_RTTY_CODE", "absolute", "509", null, "68", "21", null, "76", this);
            obj.set_taborder("94");
            obj.set_text("퇴직사유");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("st_RTTY_CODEstREMK_100X00", "absolute", "509", null, "92", "21", null, "24", this);
            obj.set_taborder("95");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_200X", "absolute", "577", null, "532", "21", null, "24", this);
            obj.set_taborder("20");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRTTY_CODE", "absolute", "577", null, "100", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchCombo");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_type("search");
            obj.set_displayrowcount("10");

            obj = new Static("st_OPOS_CODE", "absolute", "705", null, "92", "21", null, "102", this);
            obj.set_taborder("53");
            obj.set_cssclass("styFormItemCap");
            obj.set_text("직위");
            this.addChild(obj.name, obj);

            obj = new Static("st_PSTP_CODE", "absolute", "928", null, "78", "21", null, "102", this);
            obj.set_taborder("98");
            obj.set_text("호봉");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPSTP_NAME", "absolute", "1009", null, "77", "21", null, "102", this);
            obj.set_taborder("8");
            obj.set_lengthunit("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_maxlength("0");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPSTP_CODE", "absolute", "1088", null, "25", "21", null, "102", this);
            obj.set_taborder("100");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("st_CIBP_ANNU", "absolute", "705", null, "92", "21", null, "76", this);
            obj.set_taborder("101");
            obj.set_text("경력직위년차");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCIBP_ANNU", "absolute", "799", null, "100", "21", null, "76", this);
            obj.set_taborder("12");
            obj.set_maxlength("2");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("st_PYTY_CODE", "absolute", "35", null, "80", "21", null, "50", this);
            obj.set_taborder("103");
            obj.set_text("급여형태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPYTY_CODE", "absolute", "103", null, "100", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("styFormSearchCombo");
            obj.style.setStyleValue("align", "disabled", "left middle");

            obj = new Static("st_CPOS_CODE00", "absolute", "443", null, "76", "25", null, "-93", this);
            obj.set_taborder("105");
            obj.set_text("직급");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_OPOS_CODE00", "absolute", "640", null, "84", "25", null, "-93", this);
            obj.set_taborder("106");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", null, "88", "25", null, "-63", this);
            obj.set_taborder("107");
            obj.set_text("발령구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_DURS_CODE00", "absolute", "7", null, "80", "25", null, "-113", this);
            obj.set_taborder("108");
            obj.set_text("직책");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_DUTY_CODE00", "absolute", "246", null, "88", "25", null, "-113", this);
            obj.set_taborder("109");
            obj.set_text("직무");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPSTP_CODE", "absolute", "924", null, "96", "21", null, "-91", this);
            obj.set_taborder("110");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_PSTP_CODE00", "absolute", "843", null, "78", "25", null, "-93", this);
            obj.set_taborder("111");
            obj.set_text("호봉");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_ADDT_CODE00", "absolute", "853", null, "78", "25", null, "-143", this);
            obj.set_taborder("112");
            obj.set_text("겸직직책");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREF2_FILD", "absolute", "192", null, "85", "21", null, "-61", this);
            obj.set_taborder("115");
            obj.set_lengthunit("ascii");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREF3_FILD", "absolute", "282", null, "85", "21", null, "-61", this);
            obj.set_taborder("116");
            obj.set_lengthunit("ascii");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREF4_FILD", "absolute", "372", null, "85", "21", null, "-61", this);
            obj.set_taborder("117");
            obj.set_lengthunit("ascii");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "16", "61", "30", "41", null, null, this);
            obj.set_taborder("121");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "96", "61", "8", "41", null, null, this);
            obj.set_taborder("122");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "540", "103", "80", "25", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15", "122", "216", "6", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "4", "15", "461", null, null, this);
            obj.set_taborder("125");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1135", "4", "15", "733", null, null, this);
            obj.set_taborder("126");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "461", "735", "110", "15", null, null, this);
            obj.set_taborder("129");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "540", "577", "80", "15", null, null, this);
            obj.set_taborder("130");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "16", "596", "30", "41", null, null, this);
            obj.set_taborder("131");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "95", "596", "8", "41", null, null, this);
            obj.set_taborder("132");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("133");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "533", "0", "110", "8", null, null, this);
            obj.set_taborder("134");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "1109", "596", "25", "41", null, null, this);
            obj.set_taborder("137");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("138");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("139");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1150, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인사발령상세");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item36","edtREF4_FILD","value","dsHR_APPOXD","REF4_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtEMPL_NUMB","value","dsHR_APPOXD","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edtAPDN_CODE","value","dsHR_APPOXD","APDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","edtAPDN_NAME","value","dsHR_APPOXD","APDN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtAPNT_SEQN","value","dsHR_APPOXD","APNT_SEQN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtDEPT_CODE","value","dsHR_APPOXD","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtSECT_NAME","value","dsHR_APPOXD","SECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtDEPT_NAME","value","dsHR_APPOXD","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtOPOS_NAME","value","dsHR_APPOXD","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item127","edtCPOS_NAME","value","dsHR_APPOXD","CPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtDURS_NAME","value","dsHR_APPOXD","DURS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtDUTY_NAME","value","dsHR_APPOXD","DUTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","cmbWRKS_CODE","value","dsHR_APPOXD","WRKS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","chkDTMN_YSNO","value","dsHR_APPOXD","DTMN_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtADJN_DTCD","value","dsHR_APPOXD","ADJN_DTCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtADJN_NAME","value","dsHR_APPOXD","ADJN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edtADDT_NAME","value","dsHR_APPOXD","ADDT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtDSPT_DTCD","value","dsHR_APPOXD","DSPT_DTCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edtDSPT_NAME","value","dsHR_APPOXD","DSPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edtEXTR_PLDH","value","dsHR_APPOXD","EXTR_PLDH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edtEMPL_NAME","value","dsHR_APPOXD","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edtSHRAPNT_SBJT","value","dsHR_APPOXM","APNT_SBJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edtSHRAPAL_YNNM","value","dsHR_APPOXM","APAL_YNNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","medSHRDRFT_DATE","value","dsHR_APPOXM","DRFT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cmbRTTY_CODE","value","dsHR_APPOXD","RTTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edtCPOS_CODE","value","dsHR_APPOXD","CPOS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","edtDUTY_CODE","value","dsHR_APPOXD","DUTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edtADDT_CODE","value","dsHR_APPOXD","ADDT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","edtOPOS_CODE","value","dsHR_APPOXD","OPOS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","edtDURS_CODE","value","dsHR_APPOXD","DURS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","calAPNT_DATE","value","dsHR_APPOXD","APNT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","calAPNT_ENDD","value","dsHR_APPOXD","APNT_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtREMK_200X","value","dsHR_APPOXD","REMK_200X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtPSTP_NAME","value","dsHR_APPOXD","PSTP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtCIBP_ANNU","value","dsHR_APPOXD","CIBP_ANNU");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","cmbPYTY_CODE","value","dsHR_APPOXD","PYTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtPSTP_CODE","value","dsHR_APPOXD","PSTP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtREF2_FILD","value","dsHR_APPOXD","REF2_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edtREF3_FILD","value","dsHR_APPOXD","REF3_FILD");
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
        this.addIncludeScript("HRME0010P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRME0010P01.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRME0010P01 인사발령상세(POP)
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.11     고민주     Initial Created.
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

        /**************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST 	= "TTTTTTTF";
        this.sPACKAGENAME 	= "HRME0010";
        this.sAPNT_HOCT 	= this.getOwnerFrame()["sAPNT_HOCT"];;
        this.sAPAL_YSNO 	= "";

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

        if (this.opener != null) {
        	this.sAPNT_HOCT = this.parent.sAPNT_HOCT;
        }

        /****************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.medSHRAPNT_HOCT.set_value(this.sAPNT_HOCT);

        	var sMethodName = "SEARCH04";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_APPOBS=dsHR_APPOBS";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "HRMA0010", "SEARCH00", sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();

        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_searchItemCheck()) return;

        	this.fnc_DatasetClear("dsHR_APPOXD");

        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_APPOXM=dsHR_APPOXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_APPOXD=dsHR_APPOXD";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_APPOXD.setFocus();
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsHR_APPOXD.insertRow(this.dsHR_APPOXD.rowposition + 1);

        	this.dsHR_APPOXD.setColumn(iRow, "APNT_HOCT", this.medSHRAPNT_HOCT.value);//발령호수
        	this.dsHR_APPOXD.setColumn(iRow, "APNT_DATE", this.medSHRDRFT_DATE.value);//발령일

        	this.edtEMPL_NAME.setFocus();

        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsHR_APPOXD.deleteMultiRows(this.grdHR_APPOXD.getSelectedDatasetRows());
        		this.grdHR_APPOXD.setFocus();
        	}

        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         --------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsHR_APPOXD");
        	this.grdHR_APPOXD.setFocus();

        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE01";
        	var sInDataSet 	= "dsHR_APPOXD=dsHR_APPOXD:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         --------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);

        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +-------------------------*/
        this.fn_Print = function (obj){

        }

        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_APPOXD",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        
        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);

        }

        /****************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*---------------------+
         |  조회 필수 체크!  |
         +---------------------*/
        this.fn_searchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsHR_APPOXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsHR_APPOXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdHR_APPOXD);

        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = "성명 : " + this.dsHR_APPOXD.getColumn(this.dsHR_APPOXD.rowposition, "EMPL_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	}

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
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
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "OPOS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "직위", this.dsHR_APPOXD, i, this.edtOPOS_NAME, "");
        			}
        		}
        		
        		// 호봉
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "NMCG_YSNO");
        		if(sUSEX_YSNO == "2"){
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "PSTP_CODE"))) < 1) {
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
        		
        		if ( this.dsHR_APPOXD.getColumn(i, "REF4_FILD") == "01" || this.dsHR_APPOXD.getColumn(i, "REF4_FILD") == "02" ) {
        			this.dsHR_APPOXD.setColumn(i, "NETP_DATE", this.dsHR_APPOXD.getColumn(i, "APNT_DATE")); // 차기승급일
        			this.dsHR_APPOXD.setColumn(i, "NEPR_DATE", this.dsHR_APPOXD.getColumn(i, "APNT_DATE")); // 차기승진일
        			
        		}
        		
        // 		if ( this.dsHR_APPOXD.getColumn(i, "APDN_CODE") == "107" ) { // 수습
        // 			this.dsHR_APPOXD.setColumn(i, "PBNR_YSNO", "1"); // 수습여부
        // 			
        // 		} else if ( this.dsHR_APPOXD.getColumn(i, "APDN_CODE") == "100" ) { // 겸직
        // 			this.dsHR_APPOXD.setColumn(i, "PBNR_YSNO", "1"); // 수습여부
        // 			
        // 		} else if ( this.dsHR_APPOXD.getColumn(i, "APDN_CODE") == "124" ) { // 파견
        // 			this.dsHR_APPOXD.setColumn(i, "PBNR_YSNO", "1"); // 파견
        // 		} 

        	}

        	return true;

        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind,sContentType) {

        	var sReturnString;
        	
        	if (sKind == "SEARCH00") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " APNT_HOCT=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRAPNT_HOCT.value));

        	} else if (sKind == "SEARCH01") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " APNT_HOCT=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRAPNT_HOCT.value));

        	} else if (sKind == "SEARCH02") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " APNT_HOCT=" 	+ this.fnc_Quote(this.fnc_Trim(this.medSHRAPNT_HOCT.value));
        	
        	} else if (sKind == "SEARCH03") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(sContentType);
        	
        	} else if (sKind == "SEARCH04") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote("HRMA0010");
        		sReturnString += " action=" 	+ this.fnc_Quote("SEARCH00");

        	} else if (sKind == "SAVE01") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	}

        	return sReturnString;

        }

        
        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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
        		this.fn_Search();
        	
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.sAPAL_YSNO = this.dsHR_APPOXM.getColumn(this.dsHR_APPOXM.rowposition, "APAL_YSNO");
        		
        		if( this.sAPAL_YSNO == "1" ){
        			this.fnc_SetReadonly(this.edtEMPL_NAME, true);		// 사원번호
        			this.fnc_SetReadonly(this.edtAPDN_CODE, true);		// 발령구분
        			this.fnc_SetReadonly(this.calAPNT_DATE, true);		// 발령일
        			this.fnc_SetReadonly(this.calAPNT_ENDD, true);		// 발령종료일
        			this.fnc_SetReadonly(this.edtAPNT_SEQN, true);		// 발령순번
        			this.fnc_SetReadonly(this.edtDEPT_NAME, true);		// 발령부서
        			this.fnc_SetReadonly(this.edtCPOS_NAME, true);		// 직급
        			this.fnc_SetReadonly(this.edtOPOS_NAME, true);		// 직위
        			this.fnc_SetReadonly(this.edtPSTP_NAME, true);		// 호봉
        			this.fnc_SetReadonly(this.edtDURS_NAME, true);		// 직책
        			this.fnc_SetReadonly(this.edtDUTY_NAME, true);		// 직무
        			this.fnc_SetReadonly(this.cmbRTTY_CODE, true);		// 퇴직사유
        			this.fnc_SetReadonly(this.edtCIBP_ANNU, true);		// 경력직위년차
        			this.fnc_SetReadonly(this.chkDTMN_YSNO, true);		// 부서장여부
        			this.fnc_SetReadonly(this.cmbPYTY_CODE, true);		// 급여형태
        			this.fnc_SetReadonly(this.cmbWRKS_CODE, true);		// 근무상태
        			this.fnc_SetReadonly(this.edtADJN_NAME, true);		// 겸직부서
        			this.fnc_SetReadonly(this.edtADDT_NAME, true);		// 겸직직책
        			this.fnc_SetReadonly(this.edtDSPT_NAME, true);		// 파견부서
        			this.fnc_SetReadonly(this.edtEXTR_PLDH, true);		// 파견지
        			this.fnc_SetReadonly(this.edtREMK_200X, true);		// 비고

        			this.imgHelpEMPL_NUMB.set_enable(false); // 사원번호
        			this.imgHelpDEPT_CODE.set_enable(false); // 발령부서
        			this.imgHelpCPOS_CODE.set_enable(false); // 직급
        			this.imgHelpOPOS_CODE.set_enable(false); // 직위
        			this.imgHelpPSTP_CODE.set_enable(false); // 호봉
        			this.imgHelpDURS_CODE.set_enable(false); // 직책
        			this.imgHelpDUTY_CODE.set_enable(false); // 직무
        			this.imgHelpADJN_DTCD.set_enable(false); // 겸직부서
        			this.imgHelpADDT_CODE.set_enable(false); // 겸직직책
        			this.imgHelpDSPT_DTCD.set_enable(false); // 파견부서

        			this.div_ButtonList.btnInput.set_enable(false);
        			this.div_ButtonList.btnDelete.set_enable(false);
        			this.div_ButtonList.btnSave.set_enable(false);
        			this.btnExcelUp.set_enable(false);

        		} else {
        			this.div_ButtonList.btnInput.set_enable(true);
        			this.div_ButtonList.btnDelete.set_enable(true);
        			this.div_ButtonList.btnSave.set_enable(true);
        			this.btnExcelUp.set_enable(true)

        			this.fnc_SetReadonly(this.edtAPNT_SEQN, false);		//순번
        			this.fn_KeyFieldDisible(this.dsHR_APPOXD);

        		}

        	} else if (sMethodName == "SEARCH02") {
        		this.fnc_Information(this.stInformation, this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SAVE01")	{
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam 	= new Array();
        		var arrInt 		= 0;
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
        		this.fnc_SetReadonly(this.edtEMPL_NAME, false);
        		this.fnc_SetReadonly(this.edtAPDN_NAME, false);
        		this.fnc_SetReadonly(this.calAPNT_DATE, false);
        		this.imgHelpEMPL_NUMB.set_enable(true);
        		this.imgHelpAPDN_CODE.set_enable(true);

        	} else {
        		this.fnc_SetReadonly(this.edtEMPL_NAME, true);
        		this.fnc_SetReadonly(this.edtAPDN_NAME, true);
        		this.fnc_SetReadonly(this.calAPNT_DATE, true);
        		this.imgHelpEMPL_NUMB.set_enable(false);
        		this.imgHelpAPDN_CODE.set_enable(false);

        	}
        	
        	this.setCtrl();

        }

        
        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/

        /*****************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();

        	if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtEMPL_NAME"))  { // 조회조건 - 사원정보코드(Popup)
        		arrParam[0]  = "HRM0016";
        		arrParam[1]  = "";
        		arrParam[2]  = this.fnc_Trim(this.edtEMPL_NAME.value);
        		arrParam[3]  = "N";
        		arrParam[4]  = "edtEMPL_NAME";
        		arrParam[5]  = "edtEMPL_NUMB,edtEMPL_NAME,edtDEPT_CODE,edtSECT_NAME,edtDEPT_NAME";
        		arrParam[5] += ",edtCPOS_CODE,edtCPOS_NAME,edtOPOS_CODE,edtOPOS_NAME,edtDURS_CODE";
        		arrParam[5] += ",edtDURS_NAME,edtDUTY_CODE,edtDUTY_NAME,cmbRTTY_CODE";
        		arrParam[6]  = "0,1,2,3,4";
        		arrParam[6] += ",7,8,9,10,11";
        		arrParam[6] += ",12,13,14,16";

        	} else if ((obj.name == "imgHelpAPDN_CODE") || (obj.name == "edtAPDN_NAME"))  { // 발령
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "APDN_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtAPDN_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtAPDN_NAME";
        		arrParam[5] = "edtAPDN_CODE,edtAPDN_NAME,cmbWRKS_CODE,edtREF2_FILD,edtREF3_FILD,edtREF4_FILD";
        		arrParam[6] = "0,1,2,3,4,5";

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
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*-----------------------------------+
        |  발령에따른 필수여부 세팅(컴포넌트)|
        +-----------------------------------*/
        this.setCtrl = function() {

        	if (this.sAPAL_YSNO == "1") return;
        	
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
        +------------------------------------*/
        this.dsHR_APPOXD_oncolumnchanged = function(obj,e){
        	if (e.columnid == "APDN_CODE") {	this.setCtrl();	 	}

        }

        /*-----------------+
        |  엑셀 다운로드 시 |
        +-----------------*/
        this.btnExcelDown_onclick = function(obj,e) {
        	this.fnc_FileDownLoad("", "", "", "HRME0030");
        	
        }

        /*---------------+
        |  엑셀 업로드 시 |
        +---------------*/
        this.btnExcelUp_onclick = function(obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsHR_APPOXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	this.fnc_DatasetClear("dsHR_APPOXD");
        	this.fnc_ExcelUpload("dsHR_APPOXD", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }

        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	
        	this.dsHR_APPOXD.set_enableevent(false);
        	this.dsHR_APPOXD.set_updatecontrol(false);
        	
        	if (this.objDsImportTemp.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "Upload 할 엑셀 자료가 없습니다.");
        		return false;
        	}
        	
        	for (var i = 0; i < this.objDsImportTemp.getRowCount(); i++) {
        		var iRow = this.dsHR_APPOXD.addRow();
        		this.dsHR_APPOXD.setRowType(i, Dataset.ROWTYPE_INSERT);
        		
        		var sMethodName = "SEARCH03";
        		var sInDataSet 	= "";
        		var sOutDataSet = "dsVI_DEPTXM=dsVI_DEPTXM";
        		var sArgument 	= this.fn_CreateArgument(sMethodName, this.objDsImportTemp.getColumn(i, 5));
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        		
        		this.dsHR_APPOXD.setColumn(iRow, "APDN_CODE", this.objDsImportTemp.getColumn(i, 0));    	// 발령구분코드
        		this.dsHR_APPOXD.setColumn(iRow, "APDN_NAME", this.objDsImportTemp.getColumn(i, 1)); 		// 발령구분명
        		this.dsHR_APPOXD.setColumn(iRow, "APNT_DATE", this.objDsImportTemp.getColumn(i, 2));  		// 발령일
        		this.dsHR_APPOXD.setColumn(iRow, "EMPL_NUMB", this.objDsImportTemp.getColumn(i, 3));        // 사원번호
        		this.dsHR_APPOXD.setColumn(iRow, "EMPL_NAME", this.objDsImportTemp.getColumn(i, 4));        // 성명
        		this.dsHR_APPOXD.setColumn(iRow, "DEPT_CODE", this.dsVI_DEPTXM.getColumn(0, "DEPT_CODE"));  // 부서코드
        		this.dsHR_APPOXD.setColumn(iRow, "DEPT_NAME", this.dsVI_DEPTXM.getColumn(0, "DEPT_NAME"));  // 부서명
        		this.dsHR_APPOXD.setColumn(iRow, "APNT_ENDD", this.objDsImportTemp.getColumn(i, 6));  		// 발령종료일
        		this.dsHR_APPOXD.setColumn(iRow, "APNT_SEQN", this.objDsImportTemp.getColumn(i, 7));  		// 발령일련번호
        		this.dsHR_APPOXD.setColumn(iRow, "CPOS_CODE", this.objDsImportTemp.getColumn(i, 8));  		// 직급코드
        		this.dsHR_APPOXD.setColumn(iRow, "OPOS_CODE", this.objDsImportTemp.getColumn(i, 9));  		// 직위코드
        		this.dsHR_APPOXD.setColumn(iRow, "CIBP_ANNU", this.objDsImportTemp.getColumn(i, 10)); 		// 경력직위연차
        		this.dsHR_APPOXD.setColumn(iRow, "DURS_CODE", this.objDsImportTemp.getColumn(i, 11));  		// 직책코드
        		this.dsHR_APPOXD.setColumn(iRow, "DUTY_CODE", this.objDsImportTemp.getColumn(i, 12)); 		// 직무코드
        		this.dsHR_APPOXD.setColumn(iRow, "RTTY_CODE", this.objDsImportTemp.getColumn(i, 13)); 		// 퇴직구분코드
        		this.dsHR_APPOXD.setColumn(iRow, "WRKS_CODE", this.objDsImportTemp.getColumn(i, 14)); 		// 근무상태코드
        		this.dsHR_APPOXD.setColumn(iRow, "ADJN_DTCD", this.objDsImportTemp.getColumn(i, 15)); 		// 겸직부서코드
        		this.dsHR_APPOXD.setColumn(iRow, "ADDT_CODE", this.objDsImportTemp.getColumn(i, 16)); 		// 겸직직책코드
        		this.dsHR_APPOXD.setColumn(iRow, "DSPT_DTCD", this.objDsImportTemp.getColumn(i, 17)); 		// 파견부서코드
        		this.dsHR_APPOXD.setColumn(iRow, "DTMN_YSNO", this.objDsImportTemp.getColumn(i, 18)); 		// 부서장여부
        		this.dsHR_APPOXD.setColumn(iRow, "APNT_HOCT", this.medSHRAPNT_HOCT.value);					//발령호수
        		
        	}
        	
        	this.fn_KeyFieldDisible(this.dsHR_APPOXD);
        	
        	this.objDsImportTemp.clear();
        	this.dsHR_APPOXD.set_updatecontrol(true);
        	this.dsHR_APPOXD.set_enableevent(true);
        	
        	this.dsHR_APPOXD.set_rowposition(0);
        	this.grdHR_APPOXD.setFocus();
        	
        	this.stInformation.set_text("[" + (this.dsHR_APPOXD.getRowCount() + "]건의 데이터를 로드 했습니다."));
        	
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
            this.grdHR_APPOXD.addEventHandler("oncellclick", this.grdHR_APPOXM_oncellclick, this);
            this.grdHR_APPOXD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
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
            this.edtAPNT_SEQN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDSPT_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEXTR_PLDH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkDTMN_YSNO.addEventHandler("onclick", this.fn_CheckBoxChange, this);
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
            this.edtSHRAPNT_SBJT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRAPNT_SBJT.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRAPAL_YNNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRAPAL_YNNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtADJN_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpADJN_DTCD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtADJN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADJN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpADDT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtADDT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADDT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.medSHRAPNT_HOCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSHRDRFT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnExcelDown.addEventHandler("onclick", this.btnExcelDown_onclick, this);
            this.btnExcelUp.addEventHandler("onclick", this.btnExcelUp_onclick, this);
            this.edtREMK_200X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPSTP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPSTP_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpPSTP_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtCIBP_ANNU.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCIBP_ANNU.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.Static02.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtPSTP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPSTP_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HRME0010P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
