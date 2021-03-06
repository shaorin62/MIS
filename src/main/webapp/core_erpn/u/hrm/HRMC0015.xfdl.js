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
                this.set_name("HRMC0015");
                this.set_titletext("사원명부(조건검색)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDM_LISTXD", this);
            obj._setContents("<ColumnInfo><Column id=\"DELE_CLCK\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECH_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WRDV_CODE</Col><Col id=\"DSNAME\">dsSHRWRDV_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsSHRWODN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDM_LISTXM1", this);
            obj._setContents("<ColumnInfo><Column id=\"CHEK_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"COMD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMD_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDM_LISTXM2", this);
            obj._setContents("<ColumnInfo><Column id=\"CHEK_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"COMD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMD_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"WRDV_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CPOS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PSTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DTLV_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DTGN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_BIRT\" type=\"STRING\" size=\"256\"/><Column id=\"GNDR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PCOP_JCDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRON_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PARE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"DTLX_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SCDN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAJR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LBJO_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"LEDX_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TOPX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOTM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REDI_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENCO_FLNB\" type=\"STRING\" size=\"256\"/><Column id=\"SOFD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WRTY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPOS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WODN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MLGN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADJN_DTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADJN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADJN_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"DSPT_DTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DSPT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DSPT_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"APDN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LEAV_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEAV_ENDD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_CNQRXD", this);
            obj._setContents("<ColumnInfo><Column id=\"SECH_CLID\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSECH_CLID", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divButtonList", "absolute", "8", "35", "237", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_DATA_INIT", "absolute", "0", "0", "110", "21", null, null, this.divButtonList);
            obj.set_taborder("0");
            obj.set_text("검색조건초기화");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btn_POPX_OPEN", "absolute", "112", "0", "95", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("조회내용설정");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Grid("grdDM_LISTXD", "absolute", "8", "310", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsDM_LISTXD");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_taborder("39");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"1000\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"조건내용\"/><Cell col=\"2\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:COMM_NAME\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:SECH_NAME\"/><Cell col=\"2\" displaytype=\"button\" style=\"cursor:hand;\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", "60", null, "235", "25", null, this);
            obj.set_taborder("45");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_WODN_CODE", "absolute", "39", "108", "74", "22", null, null, this);
            obj.set_taborder("1");
            obj.set_text("재직구분");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_WRDV_CODE", "absolute", "39", "134", "74", "22", null, null, this);
            obj.set_taborder("2");
            obj.set_text("직원구분");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_DEPT_CODE", "absolute", "39", "160", "74", "22", null, null, this);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_OPOS_CODE", "absolute", "39", "186", "74", "22", null, null, this);
            obj.set_taborder("4");
            obj.set_text("직위");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_CPOS_CODE", "absolute", "39", "212", "74", "22", null, null, this);
            obj.set_taborder("5");
            obj.set_text("직급");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_DURS_CODE", "absolute", "39", "238", "74", "22", null, null, this);
            obj.set_taborder("6");
            obj.set_text("직책");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_DUTY_CODE", "absolute", "39", "264", "74", "22", null, null, this);
            obj.set_taborder("7");
            obj.set_text("직무");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRENCO_DATE", "absolute", null, "108", "105", "21", "382", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRENCO_ENDD", "absolute", null, "108", "105", "21", "255", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static01", "absolute", null, "106", "77", "21", "149", null, this);
            obj.set_taborder("60");
            obj.set_text("기준일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRAGEX_STDT", "absolute", null, "238", "105", "21", "382", null, this);
            obj.set_taborder("28");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", null, "264", "77", "21", "149", null, this);
            obj.set_taborder("67");
            obj.set_cssclass("styFormItemCap");
            obj.set_text("조회내용");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", null, "238", "77", "21", "149", null, this);
            obj.set_taborder("66");
            obj.set_text("가족성명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "264", "77", "21", "478", null, this);
            obj.set_taborder("65");
            obj.set_text("주소");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "212", "77", "21", "149", null, this);
            obj.set_taborder("64");
            obj.set_text("노조가입");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "186", "77", "21", "149", null, this);
            obj.set_taborder("63");
            obj.set_text("성명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "160", "77", "21", "149", null, this);
            obj.set_taborder("62");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "134", "77", "21", "149", null, this);
            obj.set_taborder("61");
            obj.set_text("부서장");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", null, "106", "77", "21", "478", null, this);
            obj.set_taborder("81");
            obj.set_text("입사기간");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", null, "134", "77", "21", "478", null, this);
            obj.set_taborder("82");
            obj.set_text("퇴직기간");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", null, "160", "77", "21", "478", null, this);
            obj.set_taborder("83");
            obj.set_text("휴직기간");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", null, "186", "77", "21", "478", null, this);
            obj.set_taborder("84");
            obj.set_text("파견기간");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", null, "212", "77", "21", "478", null, this);
            obj.set_taborder("85");
            obj.set_text("겸직기간");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_REDI_CODE", "absolute", null, "134", "74", "22", "771", null, this);
            obj.set_taborder("11");
            obj.set_text("입사구분");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_SCDN_CODE", "absolute", null, "160", "74", "22", "771", null, this);
            obj.set_taborder("12");
            obj.set_text("최종학력");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_FREL_CODE", "absolute", null, "186", "74", "22", "771", null, this);
            obj.set_taborder("13");
            obj.set_text("가족관계");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_MLGN_CODE", "absolute", null, "212", "74", "22", "771", null, this);
            obj.set_taborder("14");
            obj.set_text("병역구분");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_LICE_CODE", "absolute", null, "238", "74", "22", "771", null, this);
            obj.set_taborder("15");
            obj.set_text("자격");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRAGEX_ENDT", "absolute", null, "238", "105", "21", "255", null, this);
            obj.set_taborder("29");
            obj.set_imemode("none");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("3");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRRETR_DATE", "absolute", null, "134", "105", "21", "382", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRLEAV_DATE", "absolute", null, "160", "105", "21", "382", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRDSPT_DATE", "absolute", null, "186", "105", "21", "382", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRADJN_DATE", "absolute", null, "212", "105", "21", "382", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRRETR_ENDD", "absolute", null, "134", "105", "21", "255", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRLEAV_ENDD", "absolute", null, "160", "105", "21", "255", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRDSPT_ENDD", "absolute", null, "186", "105", "21", "255", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRADJN_ENDD", "absolute", null, "212", "105", "21", "255", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Grid("grdDM_LISTXM2", "absolute", null, "108", "184", "178", "584", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_binddataset("dsDM_LISTXM2");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("body");
            obj.style.set_border("1 solid #dbdbdcff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_YSNO\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:COMD_CDNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRDTMN_YSNO", "absolute", null, "134", "105", "21", "52", null, this);
            obj.set_taborder("32");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRLBJO_YSNO", "absolute", null, "212", "105", "21", "52", null, this);
            obj.set_taborder("35");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", null, "160", "105", "21", "52", null, this);
            obj.set_taborder("33");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", null, "186", "105", "21", "52", null, this);
            obj.set_taborder("34");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDTLX_ADDR", "absolute", null, "264", "232", "21", "255", null, this);
            obj.set_taborder("30");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRFREL_NAME", "absolute", null, "238", "105", "21", "52", null, this);
            obj.set_taborder("36");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSECH_CLID", "absolute", null, "264", "105", "21", "52", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_VIMNXM");

            obj = new Calendar("calSHRSTDS_DATE", "absolute", null, "108", "105", "21", "52", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Button("btn_SHR_GNDR_CODE", "absolute", null, "108", "74", "22", "771", null, this);
            obj.set_taborder("10");
            obj.set_text("성별");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDM_LISTXM1", "absolute", "116", "108", null, "178", "887", null, this);
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_binddataset("dsDM_LISTXM1");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj.set_autofittype("col");
            obj.style.set_border("1 solid #dbdbdcff");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_YSNO\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:COMD_CDNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SHR_SCHL_CODE", "absolute", null, "264", "74", "22", "771", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_text("학교");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", null, "238", "77", "21", "478", null, this);
            obj.set_taborder("111");
            obj.set_text("연령");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "39", "67", "146", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("인사기본검색항목");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", null, "67", "125", "21", "720", null, this);
            obj.set_taborder("115");
            obj.set_text("기타검색항목");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("116");
            obj.set_text("사원명부(조건검색)");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("117");
            obj.set_text("홈 > 인사관리 > 인사관리 > 사원명부(조건검색)");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("118");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("119");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("120");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("121");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "637", "76", "128", "4", null, null, this);
            obj.set_taborder("122");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("125");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("126");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "570", "295", "80", "15", null, null, this);
            obj.set_taborder("127");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("128");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("129");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", null, "108", "14", "21", "364", null, this);
            obj.set_taborder("130");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", null, "134", "14", "21", "364", null, this);
            obj.set_taborder("131");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", null, "160", "14", "21", "364", null, this);
            obj.set_taborder("132");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", null, "186", "14", "21", "364", null, this);
            obj.set_taborder("133");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", null, "212", "14", "21", "364", null, this);
            obj.set_taborder("134");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", null, "238", "14", "21", "364", null, this);
            obj.set_taborder("135");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "88", "30", "41", null, null, this);
            obj.set_taborder("136");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "53", "61", "80", "10", null, null, this);
            obj.set_taborder("137");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "39", "85", "74", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("Filter");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRFILT_STRN1", "absolute", "116", "85", null, "21", "887", null, this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle00", "absolute", null, "85", "74", "21", "771", null, this);
            obj.set_taborder("140");
            obj.set_text("Filter");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRFILT_STRN2", "absolute", null, "85", "184", "21", "584", null, this);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 237, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사원명부(조건검색)");
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
        this.addIncludeScript("HRMC0015.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMC0015.xfdl", function() {
        /***************************************************************************************************
         * # Program:   HRMC0015 사원명부(조건검색)
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.05     고민주     Initial Created.
         *   2016.10.12     황치웅     수정.
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
        this.sBUTTONLIST  = "TTFFFFTF";
        this.sPACKAGENAME = "HRMC0015";

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

        this.dtmSEARCH00 = { COMM_CODE:"", COMM_NAME:"", SECH_CODE:""}
        this.dtmSEARCH01 = { COMM_CODE:"", COMM_NAME:"", SECH_CODE:""}

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fn_GetCombo();
        	this.calSHRSTDS_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	
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
        	
        	//조회내용이 전체인 경우, 목록을 검색하지 않고 바로 셋팅후 메인그리드 조회	
        	if(this.cmbSHRSECH_CLID.value == "" || this.cmbSHRSECH_CLID.value == undefined){
        		this.fnc_DatasetClear("dsHR_CNQRXD");//예외처리 용도. 컬럼셋팅을 선택하지 않는 경우의 구분자를 데이타셋 로우수=0 으로 처리하기 위함
        		this.fn_SubmitArg("SEARCH04");
        		
        	} else {
        		//조회내용이 있는 경우 목록 검색후 후처리에서 나머지 처리
        		this.fn_SubmitArg("SEARCH03");
        	}	

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

        	var param3 = [	"calSHRENCO_DATE", "calSHRENCO_ENDD", "입사기간",
        					"calSHRRETR_DATE", "calSHRRETR_ENDD", "퇴직기간",
        					"calSHRLEAV_DATE", "calSHRLEAV_ENDD", "휴직기간",
        					"calSHRDSPT_DATE", "calSHRDSPT_ENDD", "파견기간",
        					"calSHRADJN_DATE", "calSHRADJN_ENDD", "겸직기간",
        					"edtSHRAGEX_STDT", "edtSHRAGEX_ENDT", "연령" ];
        	
        	for(i=0;i<param3.length;i=i+3){
        		
        		//해당코드로 조건을 설정했는지 검색
        		
        		var chkfrom = eval("this."+param3[i]).value;
        		var chkto = eval("this."+param3[i+1]).value;
        		
        		if(this.fnc_Length(this.fnc_Trim(chkfrom)) < 1 && this.fnc_Length(this.fnc_Trim(chkto)) < 1) {
        			//검색기간이 둘다 빈 경우 조건 예외
        			continue;
        		} else if(this.fnc_Length(this.fnc_Trim(chkfrom)) < 1 || this.fnc_Length(this.fnc_Trim(chkto)) < 1) {	
        			//검색기간이 둘 중 하나 만 있는 경우
        			this.alert("검색기간의 시작일과 종료일이 모두 입력되지 않았습니다..");
        			eval("this."+param3[i+1]).setFocus();
        			//comLib.Message("TMM083",true, param3[i+2]);
        			return false;
        		}
        		
        		if(parseInt(chkfrom)>parseInt(chkto)){
        			//검색기간 to가 더 작음 에러
        			this.alert("검색기간의 시작일과 종료일이 올바르지 않습니다.");
        			eval("this."+param3[i+1]).setFocus();
        			//comLib.Message("TMM084",true, param3[i+2]);
        			return false;
        		}
        		
        	}	
        	
        	//4열
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_DATE.value))<8){
        			return this.fnc_CheckPostAction("TMM072", "기준일", this.calSHRSTDS_DATE);
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

        	// 조회 Argument 생성
        	//상단1열 공통코드,부서코드검색인 경우
        	if (sKind == "SEARCH000" || sKind == "SEARCH01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " COMM_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dtmSEARCH00.COMM_CODE)); 
         		sReturnString += " COMM_NAME=" + this.fnc_Quote(this.fnc_Trim(this.dtmSEARCH00.COMM_NAME)); 
         		sReturnString += " SECH_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dtmSEARCH00.SECH_CODE)); 

        	//상단2열 공통코드 검색인 경우
        	} else if(sKind == "SEARCH001"){
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " COMM_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dtmSEARCH01.COMM_CODE)); 
         		sReturnString += " COMM_NAME=" + this.fnc_Quote(this.fnc_Trim(this.dtmSEARCH01.COMM_NAME)); 
         		sReturnString += " SECH_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dtmSEARCH01.SECH_CODE));
         	
        	//상단2열 공통코드 검색인 경우
        	} else if(sKind == "SEARCH03"){
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(application.GBL_EMPLNO)); 
         		sReturnString += " SRAL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSECH_CLID.value)); 

        	//메인그리드 검색
        	}else if(sKind == "SEARCH04"){
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        	
        		var Search4array = [
        			//상단1열
        			 "CPOS_CODE"
        			,"DURS_CODE"
        			,"OPOS_CODE"
        			,"DUTY_CODE"
        			,"WODN_CODE"
        			,"DEPT_CODE"
        			,"WRDV_CODE"
        			
        			//상단2열
        			,"GNDR_CODE"
        			,"SCDN_CODE"
        			,"LICE_CODE"
        			,"REDI_CODE"
        			,"FREL_CODE"
        			,"MLGN_CODE"
        			,"SCHL_CODE"
        		];
        		
        		//상단1,2열 하단 데이타셋에서 처리
        		for(i=0;i<Search4array.length;i++){
        		
        			var tempstr = this.dsDM_LISTXD.lookup("COMM_CODE",Search4array[i],"SECH_CODE");
        		
        			sReturnString += " "+Search4array[i]+"=" 
        			+ this.fnc_Quote(this.fnc_Trim((typeof tempstr == "undefined")?"": tempstr ));
        		}

        		//상단3열
        		sReturnString += " ENCO_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRENCO_DATE.value)); 
        		sReturnString += " ENCO_ENDD=" + this.fnc_Quote(this.fnc_Trim(this.calSHRENCO_ENDD.value)); 
        		sReturnString += " RETR_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRRETR_DATE.value)); 
        		sReturnString += " RETR_ENDD=" + this.fnc_Quote(this.fnc_Trim(this.calSHRRETR_ENDD.value)); 
        		sReturnString += " LEAV_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRLEAV_DATE.value)); 
        		sReturnString += " LEAV_ENDD=" + this.fnc_Quote(this.fnc_Trim(this.calSHRLEAV_ENDD.value)); 
        		sReturnString += " DSPT_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRDSPT_DATE.value)); 
        		sReturnString += " DSPT_ENDD=" + this.fnc_Quote(this.fnc_Trim(this.calSHRDSPT_ENDD.value)); 
        		sReturnString += " ADJN_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRADJN_DATE.value)); 
        		sReturnString += " ADJN_ENDD=" + this.fnc_Quote(this.fnc_Trim(this.calSHRADJN_ENDD.value)); 
        		sReturnString += " AGEX_STDT=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRAGEX_STDT.value)); 
        		sReturnString += " AGEX_ENDT=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRAGEX_ENDT.value)); 
        		
        		//상단4열
        		sReturnString += " STDS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE.value)); 
        		sReturnString += " DTMN_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.chkSHRDTMN_YSNO.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		sReturnString += " EMPL_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NAME.value)); 
        		sReturnString += " LBJO_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.chkSHRLBJO_YSNO.value)); 
        		sReturnString += " DTLX_ADDR=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDTLX_ADDR.value)); 
        		sReturnString += " FREL_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRFREL_NAME.value)); 
        		sReturnString += " SECH_CLID=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRSECH_CLID.value));	
        	
        	//사용자 그리드 컬럼셋팅 실제 값 조회
        	} else if(sKind == "SEARCH05"){
        	
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
        	
        	if (sMethodName == "SEARCH000" || sMethodName == "SEARCH01") {
        		this.grdDM_LISTXM1.setFocus();
        		
        	} else if (sMethodName == "SEARCH001") {
        		this.grdDM_LISTXM2.setFocus();
        		
        	} else if (sMethodName == "SEARCH03") {
        		this.fn_SubmitArg("SEARCH04");
        		
        	}else if (sMethodName == "SEARCH04") {
        		this.fnc_OpenPopup("HRMC0015P01","hrm::HRMC0015P01.xfdl",{},"");
        		
        	}else if (sMethodName == "GetCommCode") {
        		
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
         
        this.fn_SubmitArg = function(sMethodName){

        	var sInDataSet  = "";
        	var sOutDataSet = "";//"dsHR_MASTXM=dsHR_MASTXM";
        	var sArgument   = ""; //this.fn_CreateArgument(sMethodName);

        	switch (sMethodName){
        	
        		case "SEARCH000" :
        			this.fnc_DatasetClear("dsDM_LISTXM1");
        			sInDataSet  = "";
        			sOutDataSet = "dsDM_LISTXM1=dsDM_LISTXM1"
        			sArgument   = this.fn_CreateArgument(sMethodName);
        		break;

        		case "SEARCH001" :
        			this.fnc_DatasetClear("dsDM_LISTXM2");
        			sInDataSet  = "";
        			sOutDataSet = "dsDM_LISTXM2=dsDM_LISTXM2"
        			sArgument   = this.fn_CreateArgument(sMethodName);
        		break;
        		
        		case "SEARCH01" :
        			this.fnc_DatasetClear("dsDM_LISTXM1");
        			sInDataSet  = "";
        			sOutDataSet = "dsDM_LISTXM1=dsDM_LISTXM1"
        			sArgument   = this.fn_CreateArgument(sMethodName);
        		break;

        		case "SEARCH03" :
        			this.fnc_DatasetClear("dsHR_CNQRXD");
        			sInDataSet  = "";
        			sOutDataSet = "dsHR_CNQRXD=dsHR_CNQRXD"
        			sArgument   = this.fn_CreateArgument(sMethodName);
        		break;
        		
        		case "SEARCH04" :
        			this.fnc_DatasetClear("dsHR_MASTXM");
        			sInDataSet  = "";
        			sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM"
        			sArgument   = this.fn_CreateArgument(sMethodName);
        		break;		
        		
        	
        	}	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        this.fn_searchCMM1 = function(obj,e) {

        	var btn_code = obj.name.toString().substr(8,9);
        	var btn_name = obj.text;
        	
        	var Param_code = "";
        	var chkParam = this.dsDM_LISTXD.findRow("COMM_CODE",btn_code);
        	
        	if( chkParam > -1 )Param_code = this.dsDM_LISTXD.getColumn(chkParam, "SECH_CODE");
        	
        	this.edtSHRFILT_STRN1.set_value("");
        	this.dsDM_LISTXM1.filter("");
        	
        	this.dtmSEARCH00.SECH_CODE = Param_code;
        	this.dtmSEARCH00.COMM_CODE = btn_code;
        	this.dtmSEARCH00.COMM_NAME = btn_name;
        	
        	this.fnc_GridCheckClear("grdDM_LISTXM1","0");
        	this.grdDM_LISTXM1.setCellProperty("Head",1,"text","["+btn_name+"]" + " 구분");
        	
        	//서치 000 공통코드 상단 왼쪽 바인딩
        	this.fn_SubmitArg("SEARCH000");
        	
        }

        this.fn_searchDPT1 = function(obj,e) {
        	var btn_code = obj.name.toString().substr(8,9);
        	var btn_name = obj.text;
        	
        	var Param_code = "";
        	var chkParam = this.dsDM_LISTXD.findRow("COMM_CODE",btn_code);
        	
        	if(chkParam > -1 )Param_code = this.dsDM_LISTXD.getColumn(chkParam, "SECH_CODE");
        	
        	this.edtSHRFILT_STRN1.set_value("");
        	this.dsDM_LISTXM1.filter("");
        	
        	this.dtmSEARCH00.SECH_CODE = Param_code;
        	this.dtmSEARCH00.COMM_CODE = btn_code;
        	this.dtmSEARCH00.COMM_NAME = btn_name;
        	
        	this.fnc_GridCheckClear("grdDM_LISTXM1","0");
        	this.grdDM_LISTXM1.setCellProperty("Head",1,"text","["+btn_name+"]" + " 구분");
        	
        	//서치 01 부서코드 검색
        	this.fn_SubmitArg("SEARCH01");

        }

        this.fn_searchCMM2 = function(obj,e) {
        	var btn_code = obj.name.toString().substr(8,9);
        	var btn_name = obj.text;
        	
        	var Param_code = "";
        	var chkParam = this.dsDM_LISTXD.findRow("COMM_CODE",btn_code);
        	
        	if( chkParam > -1 )Param_code = this.dsDM_LISTXD.getColumn(chkParam, "SECH_CODE");
        	
        	this.edtSHRFILT_STRN2.set_value("");
        	this.dsDM_LISTXM2.filter("");
        	
        	this.dtmSEARCH01.SECH_CODE = Param_code;
        	this.dtmSEARCH01.COMM_CODE = btn_code;
        	this.dtmSEARCH01.COMM_NAME = btn_name;
        	
        	this.fnc_GridCheckClear("grdDM_LISTXM2","0");
        	this.grdDM_LISTXM2.setCellProperty("Head",1,"text","["+btn_name+"]" + " 구분");
        	
        	//서치 001 상단 오른쪽 그리드 바인딩
        	this.fn_SubmitArg("SEARCH001");
        }

        this.dsDM_LISTXM1_onvaluechanged = function(obj,e) {
        	if(e.row<0 || e.col<0) return;	//밸류체인지의 경우, row, col 포지션이 바뀌는 경우에도 발생하기 때문에 예외처리
        	this.fn_makeDM_LIST("1");
        }

        this.dsDM_LISTXM2_onvaluechanged = function(obj,e) {
        	if(e.row<0 || e.col<0) return;	//밸류체인지의 경우, row, col 포지션이 바뀌는 경우에도 발생하기 때문에 예외처리
        	this.fn_makeDM_LIST("2");
        }

        this.grdDM_LISTXM1_onheadclick = function(obj,e) {
        	if (obj.getCellProperty("Head", e.cell, "edittype") == "checkbox") {
        		obj.set_enableredraw(false);//바디컬럼을 일괄 적용할때 한개씩 변경하기 때문에 느림
        		this.fn_GridSelChk(obj, "CHEK_YSNO", e.cell);	//바디컬럼 체크박스에 바인딩된 ds 컬럼명
        		obj.set_enableredraw(true);
        		
        		this.fn_makeDM_LIST("1");
        	} 
        }

        this.grdDM_LISTXM2_onheadclick = function(obj,e) {
        	if (obj.getCellProperty("Head", e.cell, "edittype") == "checkbox") {
        		obj.set_enableredraw(false);//바디컬럼을 일괄 적용할때 한개씩 변경하기 때문에 느림
        		this.fn_GridSelChk(obj, "CHEK_YSNO", e.cell);	//바디컬럼 체크박스에 바인딩된 ds 컬럼명
        		obj.set_enableredraw(true);
        		
        		this.fn_makeDM_LIST("2");
        	} 
        }

        /*------------------------+
         |  Grid 해드 체크박스처리  |
         +------------------------*/
        this.fn_GridSelChk = function (objGrd,chk_col,nCell) {

        	var objDs = eval("this."+objGrd.binddataset);

        	if (objGrd.getCellProperty("Head", nCell, "text") == 1) {
        		objGrd.setCellProperty("Head", nCell, "text", "0");
        		this.fn_SetGrdChk(0, objDs, chk_col);
        	} else {
        		objGrd.setCellProperty("Head", nCell, "text", "1");
        		this.fn_SetGrdChk(1, objDs, chk_col);
        	}
        	
        }

        /*------------------------+
         |  Grid 바디 체크박스 일괄처리  |
         +------------------------*/
        this.fn_SetGrdChk = function (chk_val,objDs,chk_col) {

        	var maxrow= objDs.rowcount;
        	
        	objDs.set_enableevent(false);
        	for (var i = 0; i < maxrow; i++) {
        	
        		objDs.setColumn(i, chk_col, chk_val);
        	}
        	objDs.set_enableevent(true);
        }

        /*-----------------------------------+
        |  1,2열 통합 공통코드 상세 데이터 설정   |		
        	@parameter : 
        	@return :bool
        +------------------------------------*/
        this.fn_makeDM_LIST = function(wcol) {

        	var objm;	//구분 데이터를 변경할 때 사용
        	var objdtl;	//조건내용 데이터를 변경할때 사용
        	var objgrd;	//체크된 데이터만 가져오기 위해 선언

        	//1열인지 2열인지 구분
        	if(wcol=="1"){
        		objm = this.dtmSEARCH00;
        		objdtl = this.dsDM_LISTXM1;
        		objgrd = this.grdDM_LISTXM1;
        	} else if(wcol=="2") {
        		objm = this.dtmSEARCH01;
        		objdtl = this.dsDM_LISTXM2;	
        		objgrd = this.grdDM_LISTXM2;	
        	}

        	//마스터 셋팅을 안한 상태에서 헤더 클릭시 예외처리
        	if(objm.COMM_CODE=="")
        		return;

        	//구분 종류 생성
        	var s_code = objm.COMM_CODE;
        	var s_name = objm.COMM_NAME;
        	
        	//구분상세데이터, 코드집합, 코드명집합 생성
        	var a_code = "";	//코드집합
        	var a_name = "";	//코드명집합
        	
        	for(i=0;i< objdtl.rowcount;i++){
        	
        		var chkGridRowvalue = objdtl.getColumn(i,"CHEK_YSNO");
        		
        		//체크된 데이터만 넣는다.
        		if(chkGridRowvalue == "1"){
        			
        			if(a_code == ""){
        				a_code = a_code	+ objdtl.getColumn( i , "COMD_CODE" );
        				a_name = a_name	+ objdtl.getColumn( i , "COMD_CDNM" );
        			} else {	
        				a_code = a_code	+ "," + objdtl.getColumn( i , "COMD_CODE" );
        				a_name = a_name	+ "," + objdtl.getColumn( i , "COMD_CDNM" );
        			}		
        			
        		}
        	
        	}
        	
        	this.fn_setDM_LISTXD(s_code, s_name, a_code, a_name);	
        }

        /*-----------------------------------+
        |  1,2열 통합 조건내용 설정   |		
        	@parameter : 
        	@return :bool
        +------------------------------------*/
        this.fn_setDM_LISTXD = function(s_code,s_name,a_code,a_name) {

        	var checkrow = this.dsDM_LISTXD.findRow("COMM_CODE" , s_code);

        	//조건내용이 없는 경우 해당 로우를 삭제한다.
        	//조건내용이 있는 경우
        		//로우가 없으면 추가해서 입력
        		//로우가 있으면 기존것을 찾아서 입력
        	
        	if(checkrow < 0 ) {
        	
        		//조건내용이 없으면 로우를 생성하지 않고 종료
        		if(a_code=="")
        			return;
        		
        		//조건내용이 있는 경우 추가해서 입력
        		checkrow = this.dsDM_LISTXD.insertRow(this.dsDM_LISTXD.rowcount);
        		
        		//this.dsDM_LISTXD.setColumn( checkrow , "DELE_CLCK" , "/images/button/delete.gif" );
        		this.dsDM_LISTXD.setColumn( checkrow , "COMM_CODE" , s_code );
        		this.dsDM_LISTXD.setColumn( checkrow , "COMM_NAME" , s_name );
        	}
        	
        	//조건내용이 없으면 기존의 로우의 찾아서 삭제
        	if(a_code=="") {

        		this.dsDM_LISTXD.deleteRow(checkrow);

        	} else {
        		this.dsDM_LISTXD.setColumn( checkrow , "SECH_CODE" , a_code );
        		this.dsDM_LISTXD.setColumn( checkrow , "SECH_NAME" , a_name );
        	}
        }
        this.grdDM_LISTXD_oncellclick = function(obj,e) {
        	if(e.col == 2){
        		var objDs = eval("this."+obj.binddataset);
        		objDs.deleteRow(e.row);
        	}
        }

        /*-----------------------------------+
        |  메인 파라미터를 초기화 한다.   |		
        	@parameter : 
        	@return :bool
        +------------------------------------*/
        this.fn_setDtmInit = function(obj,e) {
        	this.grdDM_LISTXM1.setCellProperty("Head",1,"text", "구분");
        	this.grdDM_LISTXM2.setCellProperty("Head",1,"text", "구분");
        	
        	this.grdDM_LISTXM1.setCellProperty("Head", 0, "text", "0");
        	this.grdDM_LISTXM2.setCellProperty("Head", 0, "text", "0");
        	
        	this.fnc_DatasetClear("dsDM_LISTXM1");
        	this.fnc_DatasetClear("dsDM_LISTXM2");
        	this.fnc_DatasetClear("dsDM_LISTXD");
        	
        	this.calSHRSTDS_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	
        	//데이타 리스트 바인딩이 안되서 하나씩 해야 한다.
        	this.calSHRENCO_DATE.set_value("");
        	this.calSHRENCO_ENDD.set_value("");
        	this.calSHRRETR_DATE.set_value("");
        	this.calSHRRETR_ENDD.set_value("");
        	this.calSHRLEAV_DATE.set_value("");
        	this.calSHRLEAV_ENDD.set_value("");
        	this.calSHRDSPT_DATE.set_value("");
        	this.calSHRDSPT_ENDD.set_value("");
        	this.calSHRADJN_DATE.set_value("");
        	this.calSHRADJN_ENDD.set_value("");
        	this.edtSHRAGEX_STDT.set_value("");
        	this.edtSHRAGEX_ENDT.set_value("");

        	this.chkSHRDTMN_YSNO.set_value(0);
        	this.edtSHREMPL_NUMB.set_value("");
        	this.edtSHREMPL_NAME.set_value("");
        	this.chkSHRLBJO_YSNO.set_value(0);
        	this.edtSHRDTLX_ADDR.set_value("");
        	this.edtSHRFREL_NAME.set_value("");
        	this.cmbSHRSECH_CLID.set_value("");	
        	
        }

        /*-----------------------------------+
        |  조회내용 컬럼 셋팅 팝업창을 연다   |		
        	@parameter : 
        	@return :bool
        +------------------------------------*/
        this.fn_openPopColSetting = function(obj,e) {    
            this.fnc_OpenPopup("HRMC0015P02", "hrm::HRMC0015P02.xfdl", {}, "", "fn_GetCombo");
            
        }

        /*-----------------------------------+
        |  조회내용 컬럼 셋팅 팝업창 콜백   |		
        	@parameter : 
        	@return :bool
        +------------------------------------*/
        this.fn_GetCombo = function(sPopupId,Variant){
        	//cmbSHRSECH_CLID  사용자콤보 재설
        	// 세부 콤보 생성
        	var arrParam1 = new Array();
        		arrParam1[0] = "dsSECH_CLID"; 			   //받을 Dataset명
        		arrParam1[1] = "HRM0006"; 	  			   //조회 콤보 ID
        		arrParam1[2] = "EMPTY"; 	 			   //Head Flags
        		arrParam1[3] = "0"; 		  			   //사용여부
        		arrParam1[4] = application.GBL_EMPLNO; 		//조회 조건  

        	// Bind 처리
        	var arrParam2 = new Array();
        		arrParam2[0] = "COMBO,cmbSHRSECH_CLID,dsSECH_CLID,0";
        	this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        	
        }

        this.fn_TableListFilter = function(obj,e) {
        	
        	if ( obj.name == "edtSHRFILT_STRN1" ) {
        		if (this.fnc_Length(this.fnc_Trim(this.edtSHRFILT_STRN1.text)) > 0) {
        			this.dsDM_LISTXM1.filter("String(COMD_CDNM).indexOf('" + this.edtSHRFILT_STRN1.text + "') >= 0"); 
        			
        			if (this.dsDM_LISTXM1.getRowCount() > 0) {
        				this.dsDM_LISTXM1.set_rowposition(0);
        				this.grdDM_LISTXM1.selectRow(0);
        			}
        			
        		} else {
        			this.dsDM_LISTXM1.filter("");
        		}
        	} else if ( obj.name == "edtSHRFILT_STRN2" ) {
        		if (this.fnc_Length(this.fnc_Trim(this.edtSHRFILT_STRN2.text)) > 0) {
        			
        			this.dsDM_LISTXM2.filter("String(COMD_CDNM).indexOf('" + this.edtSHRFILT_STRN2.text + "') >= 0"); 
        			
        			if (this.dsDM_LISTXM2.getRowCount() > 0) {
        				this.dsDM_LISTXM2.set_rowposition(0);
        				this.grdDM_LISTXM2.selectRow(0);
        			}
        			
        		} else {
        			this.dsDM_LISTXM2.filter("");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsDM_LISTXM1.addEventHandler("onvaluechanged", this.dsDM_LISTXM1_onvaluechanged, this);
            this.dsDM_LISTXM2.addEventHandler("onvaluechanged", this.dsDM_LISTXM2_onvaluechanged, this);
            this.dsHR_MASTXM.addEventHandler("onvaluechanged", this.dsDM_LISTXM2_onvaluechanged, this);
            this.dsHR_CNQRXD.addEventHandler("onvaluechanged", this.dsDM_LISTXM2_onvaluechanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btn_DATA_INIT.addEventHandler("onclick", this.fn_setDtmInit, this);
            this.divButtonList.btn_POPX_OPEN.addEventHandler("onclick", this.fn_openPopColSetting, this);
            this.grdDM_LISTXD.addEventHandler("oncellclick", this.grdDM_LISTXD_oncellclick, this);
            this.btn_SHR_WODN_CODE.addEventHandler("onclick", this.fn_searchCMM1, this);
            this.btn_SHR_WRDV_CODE.addEventHandler("onclick", this.fn_searchCMM1, this);
            this.btn_SHR_DEPT_CODE.addEventHandler("onclick", this.fn_searchDPT1, this);
            this.btn_SHR_OPOS_CODE.addEventHandler("onclick", this.fn_searchCMM1, this);
            this.btn_SHR_CPOS_CODE.addEventHandler("onclick", this.fn_searchCMM1, this);
            this.btn_SHR_DURS_CODE.addEventHandler("onclick", this.fn_searchCMM1, this);
            this.btn_SHR_DUTY_CODE.addEventHandler("onclick", this.fn_searchCMM1, this);
            this.calSHRENCO_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRENCO_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_SHR_REDI_CODE.addEventHandler("onclick", this.fn_searchCMM2, this);
            this.btn_SHR_SCDN_CODE.addEventHandler("onclick", this.fn_searchCMM2, this);
            this.btn_SHR_FREL_CODE.addEventHandler("onclick", this.fn_searchCMM2, this);
            this.btn_SHR_MLGN_CODE.addEventHandler("onclick", this.fn_searchCMM2, this);
            this.btn_SHR_LICE_CODE.addEventHandler("onclick", this.fn_searchCMM2, this);
            this.calSHRRETR_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRLEAV_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRDSPT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRADJN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRRETR_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRLEAV_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRDSPT_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRADJN_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdDM_LISTXM2.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdDM_LISTXM2.addEventHandler("onheadclick", this.grdDM_LISTXM2_onheadclick, this);
            this.chkSHRDTMN_YSNO.addEventHandler("onclick", this.chkSHRXXXX_XXXX0_onclick, this);
            this.chkSHRLBJO_YSNO.addEventHandler("onclick", this.chkSHRXXXX_XXXX0_onclick, this);
            this.calSHRSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_SHR_GNDR_CODE.addEventHandler("onclick", this.fn_searchCMM2, this);
            this.grdDM_LISTXM1.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdDM_LISTXM1.addEventHandler("onheadclick", this.grdDM_LISTXM1_onheadclick, this);
            this.btn_SHR_SCHL_CODE.addEventHandler("onclick", this.fn_searchCMM2, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRFILT_STRN1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRFILT_STRN1.addEventHandler("ontextchanged", this.fn_TableListFilter, this);
            this.edtSHRFILT_STRN2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRFILT_STRN2.addEventHandler("ontextchanged", this.fn_TableListFilter, this);

        };

        this.loadIncludeScript("HRMC0015.xfdl");
        this.loadPreloadList();
       
    };
}
)();
