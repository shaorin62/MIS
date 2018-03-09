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
                this.set_name("HRMB0090");
                this.set_titletext("발령확정");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsPSTP_CODE</Col><Col id=\"CODEID\">PSTP_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">JBGP_CODE</Col><Col id=\"DSNAME\">dsJBGP_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsPYTY_CODE</Col><Col id=\"CODEID\">PYTY_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsWRKS_CODE</Col><Col id=\"CODEID\">WRKS_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsRTTY_CODE</Col><Col id=\"CODEID\">RTTY_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsCOMX_YSNO</Col><Col id=\"CODEID\">COMX_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsAPDN_CODE</Col><Col id=\"CODEID\">APDN_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsOPOS_CODE</Col><Col id=\"CODEID\">OPOS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsCPOS_CODE</Col><Col id=\"CODEID\">CPOS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSPOS_CODE</Col><Col id=\"CODEID\">SPOS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsDURS_CODE</Col><Col id=\"CODEID\">DURS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsDUTY_CODE</Col><Col id=\"CODEID\">DUTY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsJOAG_CODE</Col><Col id=\"CODEID\">JOAG_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOXD", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_HOCT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTLV_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTLV_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXTR_PLDH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LEAV_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PBNR_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADJN_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADJN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RTTY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_INNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_ENDD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REQU_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"KEYVALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JBGP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTLV_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WRKS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTMN_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_DTCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DSPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXTR_PLDH\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOBS", this);
            obj._setContents("<ColumnInfo><Column id=\"APDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PYTC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OCCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLPC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFPC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NMCG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AJDC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTDC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EDCH_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HDTC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PBDC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RETC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("인사발령변경");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("인사관리>인사관리>발령확정");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("56");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("57");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "8", "98", null, "3", "8", null, this);
            obj.set_cssclass("sytSearchBoxShadow");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgSearchShadow.png') stretch");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_APPOXM", "absolute", "8", "220", null, "447", "8", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("59");
            obj.set_tabstop("false");
            obj.set_binddataset("dsHR_APPOXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"160\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"발령구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"발령일\"/><Cell col=\"2\" text=\"발령순번\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" displaytype=\"text\" text=\"부실\"/><Cell col=\"6\" text=\"부서\"/><Cell col=\"7\" text=\"직급\"/><Cell col=\"8\" text=\"호봉\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" text=\"직책\"/><Cell col=\"11\" text=\"직책구분\"/><Cell col=\"12\" text=\"직종\"/><Cell col=\"13\" text=\"직무\"/><Cell col=\"14\" text=\"직무레벨\"/><Cell col=\"15\" text=\"급여형태\"/><Cell col=\"16\" text=\"근무상태\"/><Cell col=\"17\" text=\"파견부서\"/><Cell col=\"18\" text=\"겸직부서\"/><Cell col=\"19\" text=\"겸직직책\"/><Cell col=\"20\" text=\"부서장여부\"/><Cell col=\"21\" text=\"발령권자\"/><Cell col=\"22\" text=\"발령종료일\"/><Cell col=\"23\" text=\"발령내역\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:APDN_NAME\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:APNT_DATE\" editlimit=\"8\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:APNT_SEQN\"/><Cell col=\"3\" text=\"bind:EMPL_NUMB\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:EMPL_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:SECT_NAME\" editimemode=\"native\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:CPOS_NAME\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PSTP_CODE\" editimemode=\"hangul\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://imagesInbus\\imgHelpPopup.gif')\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" text=\"bind:OPOS_NAME\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" text=\"bind:DURS_NAME\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DRTY_CODE\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:JBGP_CODE\"/><Cell col=\"13\" displaytype=\"text\" edittype=\"text\" text=\"bind:DUTY_NAME\"/><Cell col=\"14\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTLV_CODE\"/><Cell col=\"15\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PYTY_CODE\"/><Cell col=\"16\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:WRKS_CODE\"/><Cell col=\"17\" displaytype=\"text\" edittype=\"text\" text=\"bind:DSPT_NAME\"/><Cell col=\"18\" displaytype=\"text\" edittype=\"text\" text=\"bind:ADJN_NAME\"/><Cell col=\"19\" displaytype=\"text\" edittype=\"text\" text=\"bind:ADDT_NAME\"/><Cell col=\"20\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DTMN_YSNO\"/><Cell col=\"21\" displaytype=\"text\" text=\"bind:APNT_INNM\"/><Cell col=\"22\" displaytype=\"date\" text=\"bind:APNT_ENDD\"/><Cell col=\"23\" displaytype=\"text\" edittype=\"normal\" text=\"bind:REMK_200X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "16", "68", "44", "22", null, null, this);
            obj.set_taborder("60");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "59", "68", "68", "22", null, null, this);
            obj.set_taborder("0");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "128", "68", "22", "22", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_align("top");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "151", "68", "92", "22", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDSPT_NAME", "absolute", "649", "775", "182", "21", null, null, this);
            obj.set_taborder("124");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPYTY_CODE", "absolute", "109", "775", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("125");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Edit("edtADJN_NAME", "absolute", "217", "799", "204", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpADJN_DTCD", "absolute", "195", "799", "22", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADJN_DTCD", "absolute", "109", "799", "85", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbWRKS_CODE", "absolute", "314", "775", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("129");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgHelpPOST_NUMB08", "absolute", "605", "799", "22", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADDT_NAME", "absolute", "519", "799", "85", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDSPT_DTCD", "absolute", "627", "775", "22", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPNT_INNM", "absolute", "929", "799", "108", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "832", "797", "96", "25", null, null, this);
            obj.set_taborder("134");
            obj.set_text("발행권자");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRTTY_CODE", "absolute", "929", "751", "108", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("135");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgHelpOPOS_CODE", "absolute", "1018", "703", "25", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_NAME", "absolute", "929", "703", "88", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDUTY_CODE", "absolute", "605", "727", "22", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDUTY_NAME", "absolute", "519", "727", "85", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbJBGP_CODE", "absolute", "314", "727", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("140");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgHelpDURS_CODE", "absolute", "195", "727", "22", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCPOS_CODE", "absolute", "605", "703", "22", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_NAME", "absolute", "519", "703", "85", "21", null, null, this);
            obj.set_taborder("143");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSECT_NAME", "absolute", "175", "703", "123", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "153", "703", "22", "21", null, null, this);
            obj.set_taborder("145");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAPNT_ENDD", "absolute", "929", "679", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("146");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPY_MABRXM");

            obj = new Calendar("calAPNT_DATE", "absolute", "519", "679", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("147");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPY_MABRXM");

            obj = new Static("imgHelpAPDN_CODE", "absolute", "400", "679", "22", "21", null, null, this);
            obj.set_taborder("148");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "142", "679", "22", "21", null, null, this);
            obj.set_taborder("149");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "164", "679", "52", "21", null, null, this);
            obj.set_taborder("150");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "109", "679", "32", "21", null, null, this);
            obj.set_taborder("151");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPSTP_CODE", "absolute", "724", "703", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("152");
            obj.set_cssclass("styFormSearchCombo");

            obj = new CheckBox("chkDTMN_YSNO", "absolute", "722", "798", "19", "22", null, null, this);
            obj.set_taborder("153");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormSearchChk");
            obj.style.set_buttonalign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEXTR_PLDH", "absolute", "929", "775", "108", "21", null, null, this);
            obj.set_taborder("154");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "832", "773", "96", "25", null, null, this);
            obj.set_taborder("155");
            obj.set_text("파견지");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "832", "749", "96", "25", null, null, this);
            obj.set_taborder("156");
            obj.set_text("퇴직사유");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "627", "797", "96", "25", null, null, this);
            obj.set_taborder("157");
            obj.set_text("부서장여부");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDSPT_DTCD", "absolute", "519", "775", "107", "21", null, null, this);
            obj.set_taborder("158");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "422", "797", "96", "25", null, null, this);
            obj.set_taborder("159");
            obj.set_text("겸직직책");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "422", "773", "96", "25", null, null, this);
            obj.set_taborder("160");
            obj.set_text("파견부서");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "217", "773", "96", "25", null, null, this);
            obj.set_taborder("161");
            obj.set_text("근무상태");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_200X", "absolute", "109", "751", "722", "21", null, null, this);
            obj.set_taborder("162");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "12", "773", "96", "25", null, null, this);
            obj.set_taborder("163");
            obj.set_text("급여형태");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "12", "773", null, "25", "12", null, this);
            obj.set_taborder("164");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "12", "749", "96", "25", null, null, this);
            obj.set_taborder("165");
            obj.set_text("발령내역");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "12", "797", "96", "25", null, null, this);
            obj.set_taborder("166");
            obj.set_text("겸직부서");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "12", "797", null, "25", "12", null, this);
            obj.set_taborder("167");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "12", "749", null, "25", "12", null, this);
            obj.set_taborder("168");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPNT_SEQN", "absolute", "724", "679", "107", "21", null, null, this);
            obj.set_taborder("169");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "832", "701", "96", "25", null, null, this);
            obj.set_taborder("170");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "832", "677", "96", "25", null, null, this);
            obj.set_taborder("171");
            obj.set_text("발령종료일");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "422", "725", "96", "25", null, null, this);
            obj.set_taborder("172");
            obj.set_text("직무");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "627", "701", "96", "25", null, null, this);
            obj.set_taborder("173");
            obj.set_text("호봉");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "627", "677", "96", "25", null, null, this);
            obj.set_taborder("174");
            obj.set_text("발령순번");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "217", "725", "96", "25", null, null, this);
            obj.set_taborder("175");
            obj.set_text("직종");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "422", "701", "96", "25", null, null, this);
            obj.set_taborder("176");
            obj.set_text("직급");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "422", "677", "96", "25", null, null, this);
            obj.set_taborder("177");
            obj.set_text("발령일");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPDN_NAME", "absolute", "314", "679", "85", "21", null, null, this);
            obj.set_taborder("178");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "298", "703", "123", "21", null, null, this);
            obj.set_taborder("179");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "217", "677", "96", "25", null, null, this);
            obj.set_taborder("180");
            obj.set_text("발령구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDURS_NAME", "absolute", "109", "727", "85", "21", null, null, this);
            obj.set_taborder("181");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "109", "703", "43", "21", null, null, this);
            obj.set_taborder("182");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "12", "701", "96", "25", null, null, this);
            obj.set_taborder("183");
            obj.set_text("발령부서");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "12", "701", null, "25", "12", null, this);
            obj.set_taborder("184");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "12", "677", "96", "25", null, null, this);
            obj.set_taborder("185");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "12", "725", "96", "25", null, null, this);
            obj.set_taborder("186");
            obj.set_text("직책");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "12", "725", null, "25", "12", null, this);
            obj.set_taborder("187");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "12", "677", null, "25", "12", null, this);
            obj.set_taborder("188");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "8", "674", null, "152", "8", null, this);
            obj.set_taborder("189");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPDN_CODE", "absolute", "322", null, "85", "21", null, "126", this);
            obj.set_taborder("190");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_CODE", "absolute", "527", null, "85", "21", null, "102", this);
            obj.set_taborder("191");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_CODE", "absolute", "937", null, "88", "21", null, "102", this);
            obj.set_taborder("192");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDURS_CODE", "absolute", "117", null, "85", "21", null, "78", this);
            obj.set_taborder("193");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDUTY_CODE", "absolute", "732", null, "85", "21", null, "78", this);
            obj.set_taborder("194");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADDT_CODE", "absolute", "527", null, "85", "21", null, "6", this);
            obj.set_taborder("195");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_MABRXM");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("발령확정");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item29","edtADDT_CODE","value","dsHR_APPOXM","ADDT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","edtADDT_CODE","","dsHR_APPOXM","ADDT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edtDUTY_CODE","value","dsHR_APPOXM","DUTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtDURS_CODE","value","dsHR_APPOXM","DURS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtOPOS_CODE","value","dsHR_APPOXM","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtCPOS_CODE","value","dsHR_APPOXM","CPOS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtAPDN_CODE","value","dsHR_APPOXM","APDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtDEPT_CODE","value","dsHR_APPOXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtDURS_NAME","value","dsHR_APPOXM","DURS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtDEPT_NAME","value","dsHR_APPOXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtAPDN_NAME","value","dsHR_APPOXM","APDN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtAPNT_SEQN","value","dsHR_APPOXM","APNT_SEQN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtREMK_200X","value","dsHR_APPOXM","REMK_200X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edtDSPT_DTCD","value","dsHR_APPOXM","DSPT_DTCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","chkDTMN_YSNO","value","dsHR_APPOXM","DTMN_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cmbPSTP_CODE","value","dsHR_APPOXM","CPOS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtEMPL_NUMB","value","dsHR_APPOXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtEMPL_NAME","value","dsHR_APPOXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","calAPNT_DATE","value","dsHR_APPOXM","APNT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","calAPNT_ENDD","value","dsHR_APPOXM","APNT_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtSECT_NAME","value","dsHR_APPOXM","SECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtCPOS_NAME","value","dsHR_APPOXM","CPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","cmbJBGP_CODE","value","dsHR_APPOXM","JBGP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtDUTY_NAME","value","dsHR_APPOXM","DUTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtOPOS_NAME","value","dsHR_APPOXM","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","cmbRTTY_CODE","value","dsHR_APPOXM","RTTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edtADDT_NAME","value","dsHR_APPOXM","ADDT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","cmbWRKS_CODE","value","dsHR_APPOXM","WRKS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edtADJN_DTCD","value","dsHR_APPOXM","ADJN_DTCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edtADJN_NAME","value","dsHR_APPOXM","ADJN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","cmbPYTY_CODE","value","dsHR_APPOXM","PYTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edtDSPT_NAME","value","dsHR_APPOXM","DSPT_NAME");
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
        this.addIncludeScript("HRME0030_.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRME0030_.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		인사발령변경를 관리한다.
         * @category	 	인사관리/인사발령변경
         * @author	   	고민주
         * @cdate	  		2016.07.25
         * @version 1.0		최초 작성
         * HRME0030.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
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

          	//권한처리
          	switch (this.sUSERLAVEL) {
          	
        		case "5" : 	//전체
        			application.GBL_DEPTCD = "";
        			break;
        		 
        		case "4" :	//부문
        			application.GBL_DEPTCD = application.GBL_ATGNCD
        			break;
        			
        		case "3" :	//부실
        			application.GBL_DEPTCD = application.GBL_SECTCD
        			break;
        			
        		case "2" :	//부서
        			application.GBL_DEPTCD = application.GBL_DEPTCD
        			break;	
        		
        		case "1" :	//개인
        			application.GBL_DEPTCD = application.GBL_DEPTCD
        			break;	
        			
        		default :
        			break;
        	
        	}
        	
        	var sMethodName = "SEARCH02";
        	var sInDataSet = "";
        	var sOutDataSet = "dsHR_APPOBS=dsHR_APPOBS";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, "HRMA0010", "SEARCH00", sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.fn_Search();

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
        	var sInDataSet = "";
        	var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsHR_APPOXD=dsHR_APPOXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.grdHR_APPOXD.setFocus();

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
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsHR_APPOXD=dsHR_APPOXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_APPOXD.setFocus();

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
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsHR_APPOXD.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsHR_APPOXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, 'EMPL_NUMB'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsHR_APPOXD, i, this.grdHR_APPOXD, "EMPL_NUMB");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, 'APDN_CODE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "발령구분", this.dsHR_APPOXD, i, this.grdHR_APPOXD, "APDN_CODE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, 'APNT_DATE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "발령일", this.dsHR_APPOXD, i, this.grdHR_APPOXD, "APNT_DATE");
        		}
        	
        		var code = this.dsHR_APPOXD.getColumn(i,"APDN_CODE");
        		
        		//부서
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DTCH_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "DEPT_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.edtDEPT_NAME, "");
        			}
        		} 

        		//급여형태변경여부
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "PYTC_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "PYTY_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.cmbPYTY_CODE, "");
        			}
        		} 

        		//직종
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "OCCH_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "JBGP_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.cmbJBGP_CODE, "");
        			}
        		} 

        		//직급
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "CLPC_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "CPOS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.edtCPOS_NAME, "");
        			}
        		} 

        		//직위
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "OFPC_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "CPOS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.edtOPOS_NAME, "");
        			}
        		} 

        		//직급
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DURC_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "DURS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.edtDURS_NAME, "");
        			}
        		} 

        		//직책
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "JOCH_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "DUTY_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.edtDUTY_NAME, "");
        			}
        		} 

        		//직무
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "NMCG_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "PSTP_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.cmbPSTP_CODE, "");
        			}
        		} 

        		//호봉
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "AJDC_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "ADJN_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.edtADJN_NAME, "");
        			}
        		} 

        		//겸직부서
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "JOCH_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "CPOS_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.edtCPOS_NAME, "");
        			}
        		} 

        		//파견부서
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DTDC_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "DSPT_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.edtDSPT_NAME, "");
        			}
        		} 

        		//파견지
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "PSCH_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "EXTR_PLDH"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.edtEXTR_PLDH, "");
        			}
        		} 

        		//발령종료일
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "EDCH_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "APNT_ENDD"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.calAPNT_ENDD, "");
        			}
        		} 

        		//부서장여부
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "HDTC_YSNO");			
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "DTMN_YSNO"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.chkDTMN_YSNO, "");
        			}
        		} 

        		//퇴직사유
        		var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "RETC_YSNO");
        		if(sUSEX_YSNO == "2"){	
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_APPOXD.getColumn(i, "RTTY_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "", this.dsHR_APPOXD, i, this.cmbRTTY_CODE, "");
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
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		
        	// 조회 Argument 생성
        	} else if  (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        	
        	// 조회 Argument 생성
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString = " pgm=" + this.fnc_Quote("HRMA0010"); 
        		sReturnString += " action=" + this.fnc_Quote("SEARCH00"); 
        		
        	
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
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
        	
        		this.fnc_Information(this.stInformation, this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsHR_APPOXD);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbPSTP_CODE,dsPSTP_CODE,0"; //호봉 
        		arrParam[1] = "COMBO,cmbJBGP_CODE,dsJBGP_CODE,0"; //직종
        		arrParam[2] = "COMBO,cmbPYTY_CODE,dsPYTY_CODE,0"; //급여형태
        		arrParam[3] = "COMBO,cmbWRKS_CODE,dsWRKS_CODE,0"; //근무상태
        		arrParam[4] = "COMBO,cmbRTTY_CODE,dsRTTY_CODE,0"; //퇴직사유 
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {

        			
        	} else {
        	
        	} 

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
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {
        	
        	var arrParam = new Array();
        	// 조회조건 - 부서코드(Popup)
        	if ((obj.name == 'imgHelpSHREMPL_NUMB') || (obj.name == 'edtSHREMPL_NAME'))  {
        	
        		arrParam[0] = 'HRM0001'; 								 
        		arrParam[1] = ''; 										
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = 'N'; 										 
        		arrParam[4] = 'edtSHREMPL_NAME'; 						
        		arrParam[5] = 'edtSHREMPL_NUMB,edtSHREMPL_NAME'; 		
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
        		
        	} else if ((obj.name == 'imgHelpEMPL_NUMB') || (obj.name == 'edtEMPL_NAME'))  {
        	
        		arrParam[0] = 'HRM0016'; 								 
        		arrParam[1] = ''; 										
        		arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value);
        		arrParam[3] = 'N'; 										 
        		arrParam[4] = 'edtEMPL_NAME'; 						
        		arrParam[5] = 'edtEMPL_NUMB,edtEMPL_NAME'; 		
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
        	
        	} else if ((obj.name == 'imgHelpAPDN_CODE') || (obj.name == 'edtAPDN_NAME'))  {
        	
        		arrParam[0] = 'TMM1000'; 								
        		arrParam[1] = 'APDN_CODE'; 										 
        		arrParam[2] = this.fnc_Trim(this.edtAPDN_NAME.value); 
        		arrParam[3] = 'N'; 									
        		arrParam[4] = 'edtAPDN_NAME'; 					
        		arrParam[5] = 'edtAPDN_CODE,edtAPDN_NAME'; 	
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
        		 
        	} else if ((obj.name == 'imgHelpDEPT_CODE') || (obj.name == 'edtDEPT_NAME'))  {
        	
        		arrParam[0] = 'TMM0004'; 								
        		arrParam[1] = ''; 										 
        		arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value); 
        		arrParam[3] = 'N'; 									
        		arrParam[4] = 'edtDEPT_NAME'; 					
        		arrParam[5] = 'edtDEPT_CODE,edtDEPT_NAME,edtSECT_NAME'; 	
        		arrParam[6] = '0,1,3'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
        		 
        	} else if ((obj.name == 'imgHelpSPOS_CODE') || (obj.name == 'edtSPOS_NAME'))  {
        	
        		arrParam[0] = 'TMM1000'; 								
        		arrParam[1] = 'SPOS_CODE'; 										 
        		arrParam[2] = this.fnc_Trim(this.edtSPOS_NAME.value); 
        		arrParam[3] = 'N'; 									
        		arrParam[4] = 'edtSPOS_NAME'; 					
        		arrParam[5] = 'edtSPOS_CODE,edtSPOS_NAME'; 	
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
        		 
        	} else if ((obj.name == 'imgHelpCPOS_CODE') || (obj.name == 'edtCPOS_NAME'))  {
        	
        		arrParam[0] = 'TMM1000'; 								
        		arrParam[1] = 'CPOS_CODE'; 										 
        		arrParam[2] = this.fnc_Trim(this.edtCPOS_NAME.value); 
        		arrParam[3] = 'N'; 									
        		arrParam[4] = 'edtCPOS_NAME'; 					
        		arrParam[5] = 'edtCPOS_CODE,edtCPOS_NAME'; 	
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
        		 
        	} else if ((obj.name == 'imgHelpOPOS_CODE') || (obj.name == 'edtOPOS_NAME'))  {
        	
        		arrParam[0] = 'TMM1000'; 								
        		arrParam[1] = 'OPOS_CODE'; 										 
        		arrParam[2] = this.fnc_Trim(this.edtOPOS_NAME.value); 
        		arrParam[3] = 'N'; 									
        		arrParam[4] = 'edtOPOS_NAME'; 					
        		arrParam[5] = 'edtOPOS_CODE,edtOPOS_NAME'; 	
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
        		 
        	} else if ((obj.name == 'imgHelpDURS_CODE') || (obj.name == 'edtDURS_NAME'))  {
        	
        		arrParam[0] = 'TMM1000'; 								
        		arrParam[1] = 'DURS_CODE'; 										 
        		arrParam[2] = this.fnc_Trim(this.edtDURS_NAME.value); 
        		arrParam[3] = 'N'; 									
        		arrParam[4] = 'edtDURS_NAME'; 					
        		arrParam[5] = 'edtDURS_CODE,edtDURS_NAME'; 	
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
        		 
        	} else if ((obj.name == 'imgHelpDUTY_CODE') || (obj.name == 'edt'))  {
        	
        		arrParam[0] = 'TMM1000'; 								
        		arrParam[1] = 'DUTY_CODE'; 										 
        		arrParam[2] = this.fnc_Trim(this.edtDUTY_NAME.value); 
        		arrParam[3] = 'N'; 									
        		arrParam[4] = 'edtDUTY_NAME'; 					
        		arrParam[5] = 'edtDUTY_CODE,edtDUTY_NAME'; 	
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
        		 
        	} else if ((obj.name == 'imgHelpADJN_DTCD') || (obj.name == 'edtADJN_NAME'))  {
        	
        		arrParam[0] = 'TMM0004'; 								
        		arrParam[1] = ''; 										 
        		arrParam[2] = this.fnc_Trim(this.edtADJN_NAME.value); 
        		arrParam[3] = 'N'; 									
        		arrParam[4] = 'edtADJN_NAME'; 					
        		arrParam[5] = 'edtADJN_DTCD,edtADJN_NAME'; 	
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
        		 
        	} else if ((obj.name == 'imgHelpADDT_CODE') || (obj.name == 'edtADDT_NAME'))  {
        	
        		arrParam[0] = 'TMM1000'; 								
        		arrParam[1] = 'ADDT_CODE'; 										 
        		arrParam[2] = this.fnc_Trim(this.edtADDT_NAME.value); 
        		arrParam[3] = 'N'; 									
        		arrParam[4] = 'edtADDT_NAME'; 					
        		arrParam[5] = 'edtADDT_CODE,edtADDT_NAME'; 	
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
        		 
        	} else if ((obj.name == 'imgHelpDSPT_DTCD') || (obj.name == 'edtDSPT_NAME'))  {
        	
        		arrParam[0] = 'TMM0004'; 								
        		arrParam[1] = 'DSPT_DTCD'; 										 
        		arrParam[2] = this.fnc_Trim(this.edtDSPT_NAME.value); 
        		arrParam[3] = 'N'; 									
        		arrParam[4] = 'edtDSPT_NAME'; 					
        		arrParam[5] = 'edtDSPT_DTCD,edtDSPT_NAME'; 	
        		arrParam[6] = '0,1'; 								

        		this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
        		 
        	}
        }  

        /*-----------------------------------+
        |  발령에따른 필수여부 세팅(컴포넌트)|
        	@parameter : code
        	@return :
        +-----------------------------------*/   
        this.setCtrl = function() {

        	if (this.sAPAL_YSNO == "1") return;
        		
        	this.edtREMK_200X.set_enable(true);		//발령내용
        	this.edtAPNT_SEQN.set_enable(true);		//순번
        	this.cmbWRKS_CODE.set_enable(true);		//근무상태
        	
        	this.calAPNT_ENDD.set_enable(false);		//발령종료일
        	this.edtDEPT_NAME.set_enable(false);		//부서
        	this.cmbPYTY_CODE.set_enable(false);		//급여형태변경여부
        	this.cmbJBGP_CODE.set_enable(false);		//직종
        	this.edtSPOS_NAME.set_enable(false);		//직렬
        	this.edtCPOS_NAME.set_enable(false);		//직급
        	this.edtOPOS_NAME.set_enable(false);		//직위
        	this.edtDURS_NAME.set_enable(false);		//직책 
        	this.edtDUTY_NAME.set_enable(false);		//직무 
        	this.cmbPSTP_CODE.set_enable(false);		//호봉
        	this.cmbJOAG_CODE.set_enable(false);		//직무대리코드
        	this.edtADJN_NAME.set_enable(false);		//겸직부서
        	this.edtADDT_NAME.set_enable(false);		//겸직직책
        	this.edtDSPT_NAME.set_enable(false);		//파견부서
        	this.edtEXTR_PLDH.set_enable(false);		//파견지
        	this.chkDTMN_YSNO.set_enable(false);		//부서장여부
        	this.cmbRTTY_CODE.set_enable(false);		//퇴직사유
        	 
        	this.imgHelpDEPT_CODE.set_enable(false); 
        	this.imgHelpCPOS_CODE.set_enable(false);
        	this.imgHelpOPOS_CODE.set_enable(false);
        	this.imgHelpDURS_CODE.set_enable(false);
        	this.imgHelpDUTY_CODE.set_enable(false);
        	this.imgHelpADJN_DTCD.set_enable(false);
        	this.imgHelpADDT_CODE.set_enable(false);
        	this.imgHelpDSPT_DTCD.set_enable(false);

        	this.st_DEPT_CODE.set_style("color:#435F8F"); 
        	this.st_PYTY_CODE.set_style("color:#435F8F");	
        	this.st_JBGP_CODE.set_style("color:#435F8F");
        	this.st_CPOS_CODE.set_style("color:#435F8F");	//직급
        	this.st_OPOS_CODE.set_style("color:#435F8F");	//직위
        	this.st_DURS_CODE.set_style("color:#435F8F");	//직책
        	this.st_DUTY_CODE.set_style("color:#435F8F");	//직무
        	this.st_PSTP_CODE.set_style("color:#435F8F");	//호봉
        	this.st_ADJN_DTCD.set_style("color:#435F8F");	//겸직부서
        	this.st_ADDT_CODE.set_style("color:#435F8F");	//겸직직책
        	this.st_DSPT_DTCD.set_style("color:#435F8F");	//파견부서
        	this.st_EXTR_PLDH.set_style("color:#435F8F");	//파견지
        	this.st_APNT_ENDD.set_style("color:#435F8F");	//발령종료일
        	this.st_DTMN_YSNO.set_style("color:#435F8F");	//부서장여부
        	this.st_RTTY_CODE.set_style("color:#435F8F");	//퇴직사유
        	 
        	var code = this.edtAPDN_CODE.value;
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DTCH_YSNO");
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.edtDEPT_NAME.set_enable(true);		//부서
        		this.imgHelpDEPT_CODE.set_enable(true);

        		if(sUSEX_YSNO == "2"){	this.st_DEPT_CODE.set_style("color:#FE4F00");	} //부서
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "PYTC_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.cmbPYTY_CODE.set_enable(true);		//급여형태변경여부
        		
        		if(sUSEX_YSNO == "2"){	this.st_PYTY_CODE.set_style("color:#FE4F00");	} //급여형태변경여부
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "OCCH_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.cmbJBGP_CODE.set_enable(true); 	//직종
        		
        		if(sUSEX_YSNO == "2"){	this.st_JBGP_CODE.set_style("color:#FE4F00");	} //직종
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "CLPC_YSNO")
        	
        	if(sUSEX_YSNO == "1" ||sUSEX_YSNO == "2" ){
        		this.edtCPOS_NAME.set_enable(true);		//직급
        		this.imgHelpCPOS_CODE.set_enable(true);
        		
        		if(sUSEX_YSNO == "2"){	this.st_CPOS_CODE.set_style("color:#FE4F00");	} //직급
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "OFPC_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.edtOPOS_NAME.set_enable(true);	//직위 
        		this.imgHelpOPOS_CODE.set_enable(true);
        		
        		if(sUSEX_YSNO == "2"){	this.st_OPOS_CODE.set_style("color:#FE4F00");	} //직위
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DURC_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.edtDURS_NAME.set_enable(true);	//직책 
        		this.imgHelpDURS_CODE.set_enable(true);
        		
        		if(sUSEX_YSNO == "2"){	this.st_DURS_CODE.set_style("color:#FE4F00");	} //직책
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "JOCH_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.edtDUTY_NAME.set_enable(true);		//직무 
        		this.imgHelpDUTY_CODE.set_enable(true);
        		
        		if(sUSEX_YSNO == "2"){	this.st_DUTY_CODE.set_style("color:#FE4F00");	} //직무
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "NMCG_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.cmbPSTP_CODE.set_enable(true);	//호봉
        		
        		if(sUSEX_YSNO == "2"){	this.st_PSTP_CODE.set_style("color:#FE4F00");	} //호봉
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "AJDC_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){			
        		this.edtADJN_NAME.set_enable(true);		//겸직부서
        		this.edtADDT_NAME.set_enable(true);
        		this.imgHelpADJN_DTCD.set_enable(true);
        		this.imgHelpADDT_CODE.set_enable(true);
        		
        		if(sUSEX_YSNO == "2"){	this.st_ADJN_DTCD.set_style("color:#FE4F00");	} //겸직부서
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "DTDC_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.edtDSPT_NAME.set_enable(true);		//파견부서
        		this.imgHelpDSPT_DTCD.set_enable(true);		
        		
        		if(sUSEX_YSNO == "2"){	this.st_DSPT_DTCD.set_style("color:#FE4F00");	} //파견부서
        	}
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "PSCH_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.edtEXTR_PLDH.set_enable(true);		//파견지
        		
        		if(sUSEX_YSNO == "2"){	this.st_EXTR_PLDH.set_style("color:#FE4F00");	} //파견지
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "EDCH_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.calAPNT_ENDD.set_enable(true);		//발령종료일
        		
        		if(sUSEX_YSNO == "2"){	this.st_APNT_ENDD.set_style("color:#FE4F00");	} //발령종료일
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "HDTC_YSNO")
        	
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.chkDTMN_YSNO.set_enable(true);		//부서장여부
        		
        		if(sUSEX_YSNO == "2"){	this.st_DTMN_YSNO.set_style("color:#FE4F00");	} //부서장여부
        	} 
        	
        	var sUSEX_YSNO = this.dsHR_APPOBS.lookup("APDN_CODE", code, "RETC_YSNO")
         
        	if(sUSEX_YSNO == "1" || sUSEX_YSNO == "2" ){
        		this.cmbRTTY_CODE.set_enable(true);		//퇴직사유
        		
        		if(sUSEX_YSNO == "2"){	this.st_RTTY_CODE.set_style("color:#FE4F00");	} //퇴직사유
        	}  
        };	 

        /*-----------------------------------+
        |  발령상세 데이터셋 변경시 |
        	@parameter : code
        	@return :
        +------------------------------------*/   
        this.dsHR_APPOXD_oncolumnchanged = function(obj,e){ 

        	if (e.columnid == "APDN_NAME") {	this.setCtrl();	 	}
        	
        	if (e.columnid == "EMPL_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "APDN_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "DEPT_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "SPOS_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "CPOS_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "OPOS_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "DURS_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "DUTY_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "ADJN_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "ADDT_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);
        	if (e.columnid == "DSPT_NAME") this.fn_HelpDialoge(this.grdHR_APPOXD, "YES" ,e.oldvalue, e.columnid);  

        }

        this.grdHR_APPOXM_oncellclick = function(obj,e)
        {
        	edtEMPL_NAME.set_readonly(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_APPOXD.addEventHandler("oncolumnchanged", this.dsHR_APPOXM_oncolumnchanged, this);
            this.dsHR_APPOBS.addEventHandler("oncolumnchanged", this.dsHR_APPOXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdHR_APPOXM.addEventHandler("oncellclick", this.grdHR_APPOXM_oncellclick, this);
            this.grdHR_APPOXM.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDSPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADJN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpADJN_DTCD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtADJN_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpPOST_NUMB08.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtADDT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDSPT_DTCD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtAPNT_INNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpOPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtOPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDUTY_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtDUTY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDURS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCPOS_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtCPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSECT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.calAPNT_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calAPNT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpAPDN_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkDTMN_YSNO.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.edtEXTR_PLDH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static45.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtDSPT_DTCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREMK_200X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static33.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtAPNT_SEQN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static28.addEventHandler("onclick", this.Static120_onclick, this);
            this.Static25.addEventHandler("onclick", this.Static120_onclick, this);
            this.Static22.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtAPDN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static06.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtDURS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static03.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtAPDN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOPOS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDURS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDUTY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADDT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("HRME0030_.xfdl");
        this.loadPreloadList();
       
    };
}
)();
