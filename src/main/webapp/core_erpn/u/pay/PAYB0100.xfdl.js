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
                this.set_name("PAYB0100");
                this.set_titletext("급여압류관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_SIZRXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SIZR_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCP_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SZAP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEBE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DMND_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RPAY_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHAG_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNAP_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MWCN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CRDR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SIZR_PROW\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CMPL_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_200X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SEBK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SIZR_ACNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SIZR_DPST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"KEY_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">COMX_YSNO</Col><Col id=\"DSNAME\">dsCMPL_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsDEDN_CODE</Col><Col id=\"CODEID\">DEDN_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_SIZRXD_1", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RPAY_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REDE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RPAY_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_SIZRXD_2", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RPAY_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REDE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RPAY_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "208", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("23");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_SIZRXM", "absolute", "8", "128", "772", null, null, "173", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_SIZRXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("multirow");
            obj.set_taborder("29");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" displaytype=\"text\"/><Cell col=\"1\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"성명\"/><Cell col=\"3\" text=\"부실\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"압류결정일\"/><Cell col=\"7\" text=\"압류접수일\"/><Cell col=\"8\" text=\"압류접수번호\"/><Cell col=\"9\" text=\"청구금액\"/><Cell col=\"10\" text=\"상환금액\"/><Cell col=\"11\" displaytype=\"text\" text=\"잔액\"/><Cell col=\"12\" text=\"해지접수일\"/><Cell col=\"13\" text=\"중도해지일\"/><Cell col=\"14\" text=\"시작년월\"/><Cell col=\"15\" text=\"완료여부\"/><Cell col=\"16\" text=\"채권자\"/><Cell col=\"17\" text=\"채권종류\"/><Cell col=\"18\" text=\"비고\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"normal\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;, 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:EMPL_NAME\" editimemode=\"native\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CPOS_NAME\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:SIZR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:ACCP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SZAP_NUMB\" mask=\"#,###.##\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DMND_AMOT\" mask=\"#,###.##\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RPAY_AMOT\" mask=\"#,###.##\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHAG_AMOT\" mask=\"#,###.##\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:CNAP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:MWCN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:BGIN_YMTH\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"checkbox\" text=\"bind:CMPL_YSNO\"/><Cell col=\"16\" text=\"bind:CRDR_NAME\"/><Cell col=\"17\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:DEDN_CODE\"/><Cell col=\"18\" style=\"align:left;\" text=\"bind:REMK_200X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "386", "71", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_taborder("32");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "468", "71", "21", "21", null, null, this);
            obj.set_cssclass("sytHelpPopup");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "491", "71", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCMPL_YSNO", "absolute", "713", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_type("search");
            obj.set_index("-1");

            obj = new Grid("grdPY_SIZRXD_1", "absolute", "800", "128", null, "218", "25", null, this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_SIZRXD_1");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("multirow");
            obj.set_taborder("30");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"75\"/><Column size=\"121\"/><Column size=\"126\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"상환일\"/><Cell col=\"1\" text=\"공제액\"/><Cell col=\"2\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:RPAY_DATE\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RPAY_AMOT\" mask=\"#,###.##\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:WAGE_NAME\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('RPAY_AMOT')\" mask=\"#,###.##\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_SIZRXD_2", "absolute", "800", "381", null, "218", "25", null, this);
            obj.set_autoenter("TRUE");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPY_SIZRXD_2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("multirow");
            obj.set_taborder("31");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"82\"/><Column size=\"109\"/><Column size=\"126\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"상환일\"/><Cell col=\"1\" text=\"공제액\"/><Cell col=\"2\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\" text=\"bind:RPAY_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:RPAY_AMOT\" mask=\"#,###.##\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('RPAY_AMOT')\" mask=\"#,###.##\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "344", "71", "49", "21", null, null, this);
            obj.set_text("사원");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "620", "71", "104", "21", null, null, this);
            obj.set_text("압류해제여부");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_text("압류기간");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSIZR_DATE1", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "201", "71", "14", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSIZR_DATE2", "absolute", "215", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("stGROP_LIST", "absolute", "800", "107", "98", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("급여상환");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST00", "absolute", "800", "360", "98", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("기타상환");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnInsertRow", "absolute", null, "356", "62", "21", "90", null, this);
            obj.set_taborder("37");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow", "absolute", null, "356", "62", "21", "25", null, this);
            obj.set_taborder("38");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "8", null, "772", "143", null, "15", this);
            obj.set_taborder("39");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "26", null, "89", "21", null, "102", this);
            obj.set_taborder("41");
            obj.set_text("압류접수번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "26", null, "89", "21", null, "128", this);
            obj.set_taborder("43");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "120", null, "80", "21", null, "128", this);
            obj.set_taborder("5");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "354", null, "96", "21", null, "102", this);
            obj.set_taborder("44");
            obj.set_text("청구금액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "564", null, "96", "21", null, "128", this);
            obj.set_taborder("45");
            obj.set_text("압류접수일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "564", null, "96", "21", null, "102", this);
            obj.set_taborder("46");
            obj.set_text("시작년월");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "26", null, "89", "21", null, "76", this);
            obj.set_taborder("54");
            obj.set_text("채권자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "26", null, "89", "21", null, "50", this);
            obj.set_taborder("56");
            obj.set_text("해지접수일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCRDR_NAME", "absolute", "120", null, "100", "21", null, "76", this);
            obj.set_taborder("13");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "354", null, "96", "21", null, "50", this);
            obj.set_taborder("58");
            obj.set_text("중도해지일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "564", null, "96", "21", null, "50", this);
            obj.set_taborder("59");
            obj.set_text("압류해제여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEBE_NUMB", "absolute", "659", null, "100", "21", null, "76", this);
            obj.set_taborder("15");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCMPL_YSNO", "absolute", "659", null, "22", "21", null, "50", this);
            obj.set_taborder("18");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormSearchChk");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "202", null, "22", "21", null, "128", this);
            obj.set_taborder("6");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "225", null, "100", "21", null, "128", this);
            obj.set_taborder("7");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDEDN_CODE", "absolute", "435", null, "100", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_enable("true");

            obj = new Static("Static03", "absolute", "26", null, "89", "21", null, "24", this);
            obj.set_taborder("99");
            obj.set_text("사유");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSIZR_PROW", "absolute", "120", null, "205", "21", null, "24", this);
            obj.set_taborder("19");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSZAP_NUMB", "absolute", "120", null, "205", "21", null, "102", this);
            obj.set_taborder("10");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "354", null, "96", "21", null, "128", this);
            obj.set_taborder("102");
            obj.set_text("압류결정일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "354", null, "96", "21", null, "76", this);
            obj.set_taborder("103");
            obj.set_text("채권종류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCNAP_DATE", "absolute", "120", null, "100", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            obj.set_enable("true");

            obj = new Calendar("calMWCN_DATE", "absolute", "435", null, "100", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            obj.set_enable("true");

            obj = new Calendar("calSIZR_DATE", "absolute", "435", null, "100", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            obj.set_enable("true");

            obj = new Static("Static08", "absolute", "358", null, "96", "21", null, "24", this);
            obj.set_taborder("108");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "564", null, "96", "21", null, "76", this);
            obj.set_taborder("109");
            obj.set_text("채권번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calACCP_DATE", "absolute", "659", null, "100", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            obj.set_enable("true");

            obj = new Edit("edtREMK_200X", "absolute", "436", null, "323", "21", null, "24", this);
            obj.set_taborder("20");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsPY_SIZRXM");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST01", "absolute", "800", "613", "98", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("증빙");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_ATFILE", "absolute", "800", "634", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("114");
            obj.set_binddataset("dsTM_ATFILE");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"195\"/><Column size=\"124\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"파일명\"/><Cell col=\"1\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_DOWN\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"합계\"/><Cell col=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddFile", "absolute", null, "609", "62", "21", "90", null, this);
            obj.set_taborder("115");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelFile", "absolute", null, "609", "62", "21", "25", null, this);
            obj.set_taborder("116");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medBGIN_YMTH", "absolute", "659", null, "100", "21", null, "102", this);
            obj.set_taborder("12");
            obj.set_type("string");
            obj.set_mask("####-##");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medDMND_AMOT", "absolute", "435", null, "100", "21", null, "102", this);
            obj.set_taborder("120");
            obj.set_mask("#,###.##");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("121");
            obj.set_text("급여압류관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("122");
            obj.set_text("홈 > 급여관리 > 급여관리 > 급여압류관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("123");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("124");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("125");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("126");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("127");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "357", "103", "80", "25", null, null, this);
            obj.set_taborder("128");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("129");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("130");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("131");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("132");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "922", "346", "80", "35", null, null, this);
            obj.set_taborder("133");
            obj.set_text("h35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "780", "170", "20", "41", null, null, this);
            obj.set_taborder("134");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "922", "599", "80", "35", null, null, this);
            obj.set_taborder("135");
            obj.set_text("h35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "357", "544", "80", "15", null, null, this);
            obj.set_taborder("136");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "9", "571", "30", "113", null, null, this);
            obj.set_taborder("138");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여압류관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtEMPL_NUMB","value","dsPY_SIZRXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtEMPL_NAME","value","dsPY_SIZRXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","calSIZR_DATE","value","dsPY_SIZRXM","SIZR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","calACCP_DATE","value","dsPY_SIZRXM","ACCP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtSZAP_NUMB","value","dsPY_SIZRXM","SZAP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtCRDR_NAME","value","dsPY_SIZRXM","CRDR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cmbDEDN_CODE","value","dsPY_SIZRXM","DEDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtDEBE_NUMB","value","dsPY_SIZRXM","DEBE_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","calCNAP_DATE","value","dsPY_SIZRXM","CNAP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","calMWCN_DATE","value","dsPY_SIZRXM","MWCN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","chkCMPL_YSNO","value","dsPY_SIZRXM","CMPL_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtSIZR_PROW","value","dsPY_SIZRXM","SIZR_PROW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtREMK_200X","value","dsPY_SIZRXM","REMK_200X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","medBGIN_YMTH","value","dsPY_SIZRXM","BGIN_YMTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","medDMND_AMOT","value","dsPY_SIZRXM","DMND_AMOT");
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
        this.addIncludeScript("PAYB0100.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0100.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		급여압류관리를 관리한다.
         * @category	 	급여관리/급여압류관리
         * @author	   	고민주
         * @cdate	  		2016.07.26
         * @version 1.0		최초 작성
         * PAYB0100.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYB0100"; 

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
        	this.calSHRSIZR_DATE2.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRSIZR_DATE1.setFocus();
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
        	this.fnc_DatasetClear('dsPY_SIZRXM');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPY_SIZRXM=dsPY_SIZRXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_SIZRXM.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsPY_SIZRXM.insertRow(this.dsPY_SIZRXM.rowposition + 1);

        	this.edtEMPL_NAME.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsPY_SIZRXM.deleteRow(this.dsPY_SIZRXM.rowposition);
        	this.grdPY_SIZRXM.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {	
        	this.fnc_DataSetCancel("dsPY_SIZRXM,dsPY_SIZRXD_2");
        	this.grdPY_SIZRXM.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsPY_SIZRXM=dsPY_SIZRXM:U dsPY_SIZRXD=dsPY_SIZRXD_2:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_SIZRXM.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_SIZRXM,dsPY_SIZRXD_2", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsPY_SIZRXM,dsPY_SIZRXD_2")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Trim(this.calSHRSIZR_DATE1.value) > this.fnc_Trim(this.calSHRSIZR_DATE2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "압류시작일,압류종료일", this.calSHRSIZR_DATE1);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsPY_SIZRXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	var sQuestionText = "사원:" + this.fnc_Trim(this.dsPY_SIZRXM.getColumn(this.dsPY_SIZRXM.rowposition, "EMPL_NAME"))
        						+ ",압류일:" + this.fnc_Trim(this.dsPY_SIZRXM.getColumn(this.dsPY_SIZRXM.rowposition, "SIZR_DATE"));
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_SIZRXM,dsPY_SIZRXD_2")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPY_SIZRXM.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_SIZRXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIZRXM.getColumn(i, 'EMPL_NUMB'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsPY_SIZRXM, i, this.grdPY_SIZRXM, "EMPL_NUMB");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIZRXM.getColumn(i, 'SIZR_DATE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "압류일", this.dsPY_SIZRXM, i, this.grdPY_SIZRXM, "SIZR_DATE");
        		}
        	}
        	for (var i = 0; i < this.dsPY_SIZRXD_2.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_SIZRXD_2.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIZRXD_2.getColumn(i, 'EMPL_NUMB'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsPY_SIZRXD_2, i, this.grdPY_SIZRXD_2, "EMPL_NUMB");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIZRXD_2.getColumn(i, 'RPAY_DATE'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "상환일", this.dsPY_SIZRXD_2, i, this.grdPY_SIZRXD_2, "RPAY_DATE");
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
        		sReturnString += " SIZR_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSIZR_DATE1.value)); 
        		sReturnString += " SIZR_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSIZR_DATE2.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value));
        		sReturnString += " CMPL_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCMPL_YSNO.value));
        		
        	} else if (sKind == 'SEARCH01') {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.dsPY_SIZRXM.getColumn(this.dsPY_SIZRXM.rowposition, "EMPL_NUMB")); 
        		sReturnString += " SRAL_NUMB=" + this.fnc_Quote(this.dsPY_SIZRXM.getColumn(this.dsPY_SIZRXM.rowposition, "SRAL_NUMB")); //일련번호
        		
        	} else if (sKind == 'SEARCH02') {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.dsPY_SIZRXM.getColumn(this.dsPY_SIZRXM.rowposition, "EMPL_NUMB")); 
        		sReturnString += " SRAL_NUMB=" + this.fnc_Quote(this.dsPY_SIZRXM.getColumn(this.dsPY_SIZRXM.rowposition, "SRAL_NUMB")); //일련번호
        		
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
        	
        		this.fnc_Information(this.stInformation, this.dsPY_SIZRXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_SIZRXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsPY_SIZRXM);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == 'SAVE01') {
        	
        		this.fn_KeyFieldDisible(this.dsPY_SIZRXD);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array(); 
        		arrParam[0] = "COMBO,cmbDEDN_CODE,dsDEDN_CODE,0";
        		arrParam[1] = "COMBO,cmbSHRCMPL_YSNO,dsCMPL_YSNO,0";
        		arrParam[2] = "GRID,grdPY_SIZRXM,dsDEDN_CODE,DEDN_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	//변경된 자료가 있습니다. 진행 시 변경 자료는 초기화 됩니다. 그래도 진행 하시겠습니까?
        	if (this.fnc_DatasetChangeCheck("dsPY_SIZRXD_2")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {

        		this.edtEMPL_NAME.set_readonly(false);
        	} else {
        		this.edtEMPL_NAME.set_readonly(true);
        	} 
        	this.fnc_DatasetClear("dsPY_SIZRXD_1");
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_SIZRXD_1=dsPY_SIZRXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.fnc_DatasetClear("dsPY_SIZRXD_2");
        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_SIZRXD_2=dsPY_SIZRXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();

        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtEMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtEMPL_NAME";
        		arrParam[5] = "edtEMPL_NUMB,edtEMPL_NAME,edtSECT_NAME,edtDEPT_NAME,edtCPOS_NAME";
        		arrParam[6] = "0,1,5,3,9";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        }

        /*------------------+
         |  행추가  |
         +------------------*/
        this.fn_btnAddRow_OnClick = function (obj,e) {

        	if (this.fnc_Length(this.dsPY_SIZRXM.getColumn(this.dsPY_SIZRXM.rowposition, "EMPL_NUMB")) < 1) 
        	{
        		this.fnc_Message("HRM017");
        		return false;
        	}
        	
        	var iRow = this.dsPY_SIZRXD_2.addRow();

        	this.dsPY_SIZRXD_2.setColumn(iRow, "EMPL_NUMB", this.dsPY_SIZRXM.getColumn(this.dsPY_SIZRXM.rowposition, "EMPL_NUMB"));
        	this.dsPY_SIZRXD_2.setColumn(iRow, "SRAL_NUMB", this.dsPY_SIZRXM.getColumn(this.dsPY_SIZRXM.rowposition, "SRAL_NUMB"));
        	this.dsPY_SIZRXD_2.setColumn(iRow, "REDE_CODE", "2");
        	this.grdPY_SIZRXD_2.setCellPos(this.fnc_GridColumnIndex(this.grdPY_SIZRXD_2, "RPAY_DATE"));
        	this.grdPY_SIZRXD_2.setFocus();
        	
        	return;
        }

        /*------------------+
         |  행삭제  |
         +------------------*/
        this.fn_btnDelRow_OnClick = function (obj,e) {
        	
        	if (this.dsPY_SIZRXD_2.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	this.dsPY_SIZRXD_2.deleteRow(this.dsPY_SIZRXD_2.rowposition);
        }

        

        this.dsPY_SIZRXD_2_onrowposchanged = function(obj,e)
        {
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.grdPY_SIZRXD_2.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_SIZRXD_2, "RPAY_DATE"), "edittype", "date");	
        	} else {
        		this.grdPY_SIZRXD_2.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdPY_SIZRXD_2, "RPAY_DATE"), "edittype", "none");	
        	} 
        }

        this.edtREMK_200X_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_SIZRXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsPY_SIZRXD_2.addEventHandler("onrowposchanged", this.dsPY_SIZRXD_2_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdPY_SIZRXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRCMPL_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSIZR_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSIZR_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnInsertRow.addEventHandler("onclick", this.fn_btnAddRow_OnClick, this);
            this.btnDeleteRow.addEventHandler("onclick", this.fn_btnDelRow_OnClick, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static33.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtCRDR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEBE_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkCMPL_YSNO.addEventHandler("onclick", this.fn_CheckBoxChange, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSIZR_PROW.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSZAP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCNAP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calMWCN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSIZR_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calACCP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREMK_200X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREMK_200X.addEventHandler("oneditclick", this.edtREMK_200X_oneditclick, this);
            this.btnAddFile.addEventHandler("onclick", this.btnCOPY_OnClick, this);
            this.btnDelFile.addEventHandler("onclick", this.btnCOPY_OnClick, this);
            this.medBGIN_YMTH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medDMND_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYB0100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
