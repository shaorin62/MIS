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
                this.set_name("HRMC0010");
                this.set_titletext("직원명부조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsSHRWODN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">WRDV_CODE</Col><Col id=\"DSNAME\">dsSHRWRDV_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">SCDN_CODE</Col><Col id=\"DSNAME\">dsSHRSCDN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"WRDV_CODE\" size=\"256\"/><Column id=\"WRDV_NAME\" size=\"256\"/><Column id=\"EMPL_NUMB\" size=\"256\"/><Column id=\"EMPL_NAME\" size=\"256\"/><Column id=\"SECT_NAME\" size=\"256\"/><Column id=\"DEPT_CODE\" size=\"256\"/><Column id=\"DEPT_NAME\" size=\"256\"/><Column id=\"CPOS_CODE\" size=\"256\"/><Column id=\"CPOS_NAME\" size=\"256\"/><Column id=\"DURS_CODE\" size=\"256\"/><Column id=\"DURS_NAME\" size=\"256\"/><Column id=\"OPOS_CODE\" size=\"256\"/><Column id=\"OPOS_NAME\" size=\"256\"/><Column id=\"DUTY_CODE\" size=\"256\"/><Column id=\"DUTY_NAME\" size=\"256\"/><Column id=\"EMPL_BIRT\" size=\"256\"/><Column id=\"EMPL_AGEX\" size=\"256\"/><Column id=\"GNDR_CODE\" size=\"256\"/><Column id=\"GNDR_NAME\" size=\"256\"/><Column id=\"PCOP_JCDT\" size=\"256\"/><Column id=\"ENCO_DATE\" size=\"256\"/><Column id=\"RETR_DATE\" size=\"256\"/><Column id=\"PRON_DATE\" size=\"256\"/><Column id=\"OPOS_ANNU\" size=\"256\"/><Column id=\"DURS_DATE\" size=\"256\"/><Column id=\"DTMN_YSNO\" size=\"1\"/><Column id=\"RERN_NUMB\" size=\"256\"/><Column id=\"POST_NUMB\" size=\"256\"/><Column id=\"DETL_ADDR\" size=\"256\"/><Column id=\"HNPN_TENR\" size=\"256\"/><Column id=\"SCDN_CODE\" size=\"256\"/><Column id=\"SCDN_NAME\" size=\"256\"/><Column id=\"SCHL_NAME\" size=\"256\"/><Column id=\"MAJR_CODE\" size=\"256\"/><Column id=\"MAJR_CDNM\" size=\"256\"/><Column id=\"MAJR_NAME\" size=\"256\"/><Column id=\"MARG_YSNO\" size=\"1\"/><Column id=\"WEAN_DATE\" size=\"256\"/><Column id=\"LBJO_YSNO\" size=\"256\"/><Column id=\"LEDT_ADDR\" size=\"256\"/><Column id=\"REDI_CODE\" size=\"256\"/><Column id=\"REDI_NAME\" size=\"256\"/><Column id=\"WRKS_CODE\" size=\"256\"/><Column id=\"WRKS_NAME\" size=\"256\"/><Column id=\"PCOP_DAT1\" size=\"256\"/><Column id=\"ENCO_DAT1\" size=\"256\"/><Column id=\"OPOS_YCN1\" size=\"2\"/><Column id=\"TEMT_DATE\" size=\"8\"/><Column id=\"TEMT_DAT1\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "159", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("24");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_MASTXM", "absolute", "8", "180", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsHR_MASTXM");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("19");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"108\"/><Column size=\"82\"/><Column size=\"229\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"202\"/><Column size=\"78\"/><Column size=\"78\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"직원구분\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"소속\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"직책\"/><Cell col=\"7\" text=\"직위\"/><Cell col=\"8\" text=\"직위년차\"/><Cell col=\"9\" text=\"직무\"/><Cell col=\"10\" text=\"생년월일\"/><Cell col=\"11\" text=\"연령\"/><Cell col=\"12\" text=\"성별\"/><Cell col=\"13\" text=\"그룹입사일\"/><Cell col=\"14\" text=\"그룹근속일자\"/><Cell col=\"15\" text=\"당사입사일\"/><Cell col=\"16\" text=\"당사근속일자\"/><Cell col=\"17\" text=\"정규직전환일\"/><Cell col=\"18\" text=\"정규직근속일자\"/><Cell col=\"19\" text=\"사직일\"/><Cell col=\"20\" text=\"승진일\"/><Cell col=\"21\" text=\"직책발령일\"/><Cell col=\"22\" displaytype=\"text\" edittype=\"text\" text=\"부서장여부\"/><Cell col=\"23\" text=\"주민등록번호\"/><Cell col=\"24\" text=\"우편번호\"/><Cell col=\"25\" text=\"주소\"/><Cell col=\"26\" text=\"휴대전화\"/><Cell col=\"27\" text=\"학력\"/><Cell col=\"28\" text=\"학교\"/><Cell col=\"29\" text=\"전공\"/><Cell col=\"30\" text=\"부/복수전공\"/><Cell col=\"31\" text=\"결혼유무\"/><Cell col=\"32\" text=\"결혼일자\"/><Cell col=\"33\" text=\"본적\"/><Cell col=\"34\" text=\"채용방식\"/><Cell col=\"35\" text=\"근무상태\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" text=\"bind:WRDV_NAME\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\" text=\"bind:EMPL_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CPOS_NAME\" editimemode=\"native\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DURS_NAME\" editimemode=\"native\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left;\" text=\"bind:OPOS_NAME\" editimemode=\"native\"/><Cell col=\"8\" text=\"bind:OPOS_YCN1\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DUTY_NAME\" editimemode=\"native\"/><Cell col=\"10\" displaytype=\"date\" style=\"align:center;\" text=\"bind:EMPL_BIRT\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"text\" text=\"bind:EMPL_AGEX\"/><Cell col=\"12\" displaytype=\"text\" text=\"bind:GNDR_NAME\"/><Cell col=\"13\" displaytype=\"date\" style=\"align:center;\" text=\"bind:PCOP_JCDT\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:PCOP_DAT1\"/><Cell col=\"15\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ENCO_DATE\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" style=\"align:left;\" text=\"bind:ENCO_DAT1\"/><Cell col=\"17\" displaytype=\"date\" text=\"bind:TEMT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" displaytype=\"normal\" text=\"bind:TEMT_DAT1\" calendardisplaynulltype=\"none\"/><Cell col=\"19\" displaytype=\"date\" style=\"align:center;\" text=\"bind:RETR_DATE\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"20\" displaytype=\"date\" text=\"bind:PRON_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"21\" displaytype=\"date\" style=\"align:center;\" text=\"bind:DURS_DATE\" editimemode=\"native\" calendardisplaynulltype=\"none\"/><Cell col=\"22\" displaytype=\"checkbox\" text=\"bind:DTMN_YSNO\"/><Cell col=\"23\" displaytype=\"text\" style=\"align:center;\" text=\"bind:RERN_NUMB\" mask=\"######-#######\" editimemode=\"native\"/><Cell col=\"24\" displaytype=\"text\" style=\"align:center;\" text=\"bind:POST_NUMB\" editimemode=\"native\"/><Cell col=\"25\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DETL_ADDR\" editimemode=\"native\"/><Cell col=\"26\" displaytype=\"text\" style=\"align:center;\" text=\"bind:HNPN_TENR\" editimemode=\"native\"/><Cell col=\"27\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SCDN_NAME\" editimemode=\"native\"/><Cell col=\"28\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SCHL_NAME\" editimemode=\"native\"/><Cell col=\"29\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MAJR_CDNM\" editimemode=\"native\"/><Cell col=\"30\" displaytype=\"text\" style=\"align:left;\" text=\"bind:MAJR_NAME\"/><Cell col=\"31\" displaytype=\"checkbox\" text=\"bind:MARG_YSNO\"/><Cell col=\"32\" displaytype=\"date\" style=\"align:center;\" text=\"bind:WEAN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"33\" displaytype=\"text\" style=\"align:left;\" text=\"bind:LEDT_ADDR\" editimemode=\"native\"/><Cell col=\"34\" displaytype=\"text\" style=\"align:center;\" text=\"bind:REDI_NAME\" editimemode=\"native\"/><Cell col=\"35\" displaytype=\"text\" style=\"align:center;\" text=\"bind:WRKS_NAME\" editimemode=\"native\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox1", "absolute", "8", "60", null, "95", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle5", "absolute", "28", "97", "49", "21", null, null, this);
            obj.set_text("직급");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "456", "97", "49", "21", null, null, this);
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "774", "71", "104", "21", null, null, this);
            obj.set_text("사원번호/명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "524", "97", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_enable("true");
            obj.set_imemode("none");
            obj.set_maxlength("10");
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "606", "97", "22", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "629", "97", "116", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("utf16");
            obj.set_imemode("hangul");
            obj.set_maxlength("0");
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "236", "71", "76", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("재직구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWODN_CODE", "absolute", "304", "71", "123", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displayrowcount("10");

            obj = new Static("imgSearchTitle0", "absolute", "456", "71", "76", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("입사기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBEGN_DATE", "absolute", "524", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");

            obj = new Static("Static15", "absolute", "630", "71", "14", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRENDD_DATE", "absolute", "645", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");

            obj = new Static("imgSearchTitle01", "absolute", "28", "71", "63", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("기준일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_DATE", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("imgSearchTitle02", "absolute", "456", "123", "76", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWRDV_CODE", "absolute", "524", "123", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displayrowcount("10");
            obj.set_index("-1");

            obj = new Static("imgSearchTitle04", "absolute", "235", "97", "49", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("직책");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle06", "absolute", "235", "123", "49", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("직무");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCPOS_NAME", "absolute", "83", "97", "100", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCPOS_CODE", "absolute", "185", "97", "22", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDUTY_NAME", "absolute", "304", "123", "100", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDUTY_CODE", "absolute", "406", "123", "22", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle07", "absolute", "774", "97", "49", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("학력");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSCDN_CODE", "absolute", "862", "97", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_type("search");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displayrowcount("10");

            obj = new Static("Image02", "absolute", "774", "123", "90", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("부서장여부");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRDTMN_YSNO", "absolute", "862", "123", "19", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDURS_NAME", "absolute", "304", "97", "100", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDURS_CODE", "absolute", "406", "97", "22", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHROPOS_NAME", "absolute", "83", "123", "100", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHROPOS_CODE", "absolute", "185", "123", "22", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle08", "absolute", "28", "123", "49", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("직위");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle09", "absolute", "1190", "194", "57", "22", null, null, this);
            obj.set_taborder("53");
            obj.set_text("직급");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle10", "absolute", "1190", "233", "57", "22", null, null, this);
            obj.set_taborder("54");
            obj.set_text("직책");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle11", "absolute", "1190", "311", "57", "22", null, null, this);
            obj.set_taborder("55");
            obj.set_text("직무");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle12", "absolute", "1190", "272", "57", "22", null, null, this);
            obj.set_taborder("57");
            obj.set_text("직위");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDURS_CODE", "absolute", "1246", "233", "112", "22", null, null, this);
            obj.set_taborder("52");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHROPOS_CODE", "absolute", "1246", "272", "112", "22", null, null, this);
            obj.set_taborder("56");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCPOS_CODE", "absolute", "1246", "194", "112", "22", null, null, this);
            obj.set_taborder("45");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDUTY_CODE", "absolute", "1246", "311", "112", "22", null, null, this);
            obj.set_taborder("46");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "862", "71", "80", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "944", "71", "22", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "967", "71", "100", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("59");
            obj.set_text("직원명부조회");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("60");
            obj.set_text("홈 > 인사관리 > 인사현황 > 직원명부조회");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("61");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("62");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("63");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("64");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("65");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("66");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "155", "80", "25", null, null, this);
            obj.set_taborder("67");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("68");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("69");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "174", "216", "6", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("71");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "206", "61", "40", "93", null, null, this);
            obj.set_taborder("72");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("직원명부조회");
            		p.set_scrollbars("none");

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
        this.addIncludeScript("HRMC0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMC0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HRMC0010 사원명부
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.06		고민주		Initial Created.
         *   2016.08.31		안윤준		수정
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

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF";
        this.sPACKAGENAME = "HRMC0010";

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
        	this.calSHRSTDS_DATE.set_value(this.fnc_GetServerDateTime("DATE")); 
        	this.calSHRSTDS_DATE.setFocus();
        	this.calSHRBEGN_DATE.set_enable(true);
        	this.calSHRENDD_DATE.set_enable(true);
        	
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
        	this.fnc_DatasetClear("dsHR_MASTXM");

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
        	this.fnc_DataSetCancel("dsHR_MASTXM");
        	this.grdHR_MASTXM.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
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
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_MASTXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        		
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일", this.calSHRSTDS_DATE);
        	}
        	
        	if (this.calSHRBEGN_DATE.value > this.calSHRENDD_DATE.value) {
        		return this.fnc_SearchCheckPostAction("TMM028", this.imgSearchTitle0.text+"종료일,"+this.imgSearchTitle0.text+"시작일", this.calSHRBEGN_DATE);
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
        		sReturnString += " STDS_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE.value)); // 기준일		
        		sReturnString += " WODN_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRWODN_CODE.value)); // 재직구분
        		sReturnString += " BEGN_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRBEGN_DATE.value)); // 입사기간
         		sReturnString += " ENDD_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRENDD_DATE.value)); // 입사기간
         		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); // 사원번호
         		sReturnString += " CPOS_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRCPOS_CODE.value)); // 직급
         		sReturnString += " DURS_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDURS_CODE.value)); // 직책
         		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); // 부서
         		sReturnString += " SCDN_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRSCDN_CODE.value)); // 학력
         		sReturnString += " OPOS_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHROPOS_CODE.value)); // 직위
         		sReturnString += " DUTY_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDUTY_CODE.value)); // 직무
         		sReturnString += " WRDV_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRWRDV_CODE.value)); // 직원구분
         		sReturnString += " DTMN_YSNO=" 	+ this.fnc_Quote(this.fnc_Trim(this.chkSHRDTMN_YSNO.value)); // 부서장여부 		
         		
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
        		this.grdHR_MASTXM.setFocus();
        	
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        		var arrInt 	 = 0;
        			arrParam[arrInt++] = "COMBO,cmbSHRWODN_CODE,dsSHRWODN_CODE,0";
        			arrParam[arrInt++] = "COMBO,cmbSHRWRDV_CODE,dsSHRWRDV_CODE,0";
        			arrParam[arrInt++] = "COMBO,cmbSHRSCDN_CODE,dsSHRSCDN_CODE,0";
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
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // SHR사원
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        	
        	} else if ((obj.name == "imgHelpSHRCPOS_CODE") || (obj.name == "edtSHRCPOS_NAME")) { // SHR직급
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "CPOS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCPOS_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRCPOS_NAME";
        		arrParam[5] = "edtSHRCPOS_CODE,edtSHRCPOS_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHRDURS_CODE") || (obj.name == "edtSHRDURS_NAME")) { // SHR직책
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "DURS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDURS_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDURS_NAME";
        		arrParam[5] = "edtSHRDURS_CODE,edtSHRDURS_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // SHR부서
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHROPOS_CODE") || (obj.name == "edtSHROPOS_NAME")) { // SHR 직위
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "OPOS_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtSHROPOS_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHROPOS_NAME";
        		arrParam[5] = "edtSHROPOS_CODE,edtSHROPOS_NAME";
        		arrParam[6] = "0,1";
        	
        	} else if ((obj.name == "imgHelpSHRDUTY_CODE") || (obj.name == "edtSHRDUTY_NAME")) { // SHR 직무
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "DUTY_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDUTY_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDUTY_NAME";
        		arrParam[5] = "edtSHRDUTY_CODE,edtSHRDUTY_NAME";
        		arrParam[6] = "0,1";
        		
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        /*--------------------+
         |  재직 구분 변경 시  |
         +--------------------*/
        this.cmbSHRWODN_CODE_onitemchanged = function(obj,e) {
        	
        	if ( e.postvalue == "1" ) {
        		this.calSHRBEGN_DATE.set_enable(true);
        		this.calSHRENDD_DATE.set_enable(true);
        		this.calSHRBEGN_DATE.set_value("");
        		this.calSHRENDD_DATE.set_value("");
        		this.imgSearchTitle0.set_text("입사기간");
        		
        	} else if ( e.postvalue == "2" ) {
        		this.calSHRBEGN_DATE.set_enable(true);
        		this.calSHRENDD_DATE.set_enable(true);
        		this.calSHRBEGN_DATE.set_value("");
        		this.calSHRENDD_DATE.set_value("");
        		this.imgSearchTitle0.set_text("퇴사기간");
        		
        	} else {
        		this.calSHRBEGN_DATE.set_enable(true);
        		this.calSHRENDD_DATE.set_enable(true);
        		this.calSHRBEGN_DATE.set_value("");
        		this.calSHRENDD_DATE.set_value("");
        		this.imgSearchTitle0.set_text("입사기간");
        		
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRWODN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRWODN_CODE.addEventHandler("onitemchanged", this.cmbSHRWODN_CODE_onitemchanged, this);
            this.calSHRBEGN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRENDD_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRWRDV_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRCPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDUTY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDUTY_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRDUTY_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.cmbSHRSCDN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkSHRDTMN_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDURS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDURS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRDURS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHROPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHROPOS_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHROPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDURS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHROPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDUTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMC0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
