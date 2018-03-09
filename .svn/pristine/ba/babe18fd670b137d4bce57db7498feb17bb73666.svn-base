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
                this.set_name("PAYC0020P01");
                this.set_titletext("급여명세서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1070,617);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_PMMAST", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYX_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PSTP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WABK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_ACNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_1000\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DDUC_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REAL_AMOT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMBU_DIVC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_YMTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_MOTH\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APLY_ANDC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_ANDC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEB_ANDC\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMDETL_A", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EXPD_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_PMDETL_D", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EXPD_AMOT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_INCOME", this);
            obj._setContents("<ColumnInfo><Column id=\"COMD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TAP1_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NTP1_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTL_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WAGE_CODE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_ALLDED", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPD_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WAGE_CODE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMDETL_A", "absolute", "15", "151", "358", "213", null, null, this);
            obj.set_binddataset("dsPY_PMDETL_A");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"180\"/><Column size=\"170\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"지급항목\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left middle;\" text=\"bind:EXPD_NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXPD_AMOT\"/></Band><Band id=\"summary\"><Cell style=\"align:right;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;EXPD_AMOT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST02", "absolute", "15", "17", "89", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("지급대상");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "15", "35", null, "91", "15", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "35", "44", "87", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "35", "70", "87", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("직급");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "103", "44", "130", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "295", "44", "87", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("성명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "295", "70", "87", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "295", "96", "87", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("급여형태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "360", "44", "130", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "541", "44", "87", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("소속");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "541", "70", "87", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("직책");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "35", "96", "87", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSECT_NAME", "absolute", "583", "44", "130", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "774", "44", "87", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "541", "96", "87", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("은행");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWABK_NAME", "absolute", "583", "96", "130", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "774", "96", "87", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("계좌번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "843", "44", "130", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWAGE_ACNO", "absolute", "843", "96", "130", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST00", "absolute", "15", "130", "89", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("지급내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST01", "absolute", "393", "130", "97", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("공제내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_PMDETL_D", "absolute", "393", "151", "358", "213", null, null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("60");
            obj.set_binddataset("dsPY_PMDETL_D");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"180\"/><Column size=\"170\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"공제항목\"/><Cell col=\"1\" displaytype=\"text\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left middle;\" text=\"bind:EXPD_NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXPD_AMOT\"/></Band><Band id=\"summary\"><Cell style=\"align:right;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;EXPD_AMOT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "771", null, null, "91", "15", "374", this);
            obj.set_taborder("63");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "791", null, "79", "21", null, "435", this);
            obj.set_taborder("78");
            obj.set_text("지급총액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "791", null, "79", "21", null, "409", this);
            obj.set_taborder("79");
            obj.set_text("공제총액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "791", null, "79", "21", null, "383", this);
            obj.set_taborder("87");
            obj.set_text("실지급액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCPOS_NAME", "absolute", "103", "70", "130", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWAGP_NAM", "absolute", "360", "96", "130", "21", null, null, this);
            obj.set_taborder("92");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_NAME", "absolute", "360", "70", "130", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCLSD_NAME", "absolute", "103", "96", "130", "21", null, null, this);
            obj.set_taborder("94");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDUTY_NAME", "absolute", "583", "70", "130", "21", null, null, this);
            obj.set_taborder("95");
            obj.set_readonly("true");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPAYX_AMOT", "absolute", "859", null, "165", "21", null, "435", this);
            obj.set_taborder("96");
            obj.set_mask("#,####################");
            obj.set_autoselect("true");
            obj.set_limitbymask("integer");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDDUC_AMOT", "absolute", "859", null, "165", "21", null, "409", this);
            obj.set_taborder("97");
            obj.set_readonly("true");
            obj.set_mask("#,####################");
            obj.set_autoselect("true");
            obj.set_limitbymask("integer");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskREAL_AMOT", "absolute", "859", null, "165", "21", null, "383", this);
            obj.set_taborder("98");
            obj.set_readonly("true");
            obj.set_mask("#,####################");
            obj.set_autoselect("true");
            obj.set_limitbymask("integer");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.style.setStyleValue("align", "disabled", "right");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("99");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "569", "31", "110", "4", null, null, this);
            obj.set_taborder("100");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "541", "0", "110", "8", null, null, this);
            obj.set_taborder("101");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("103");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1055", "0", "15", "461", null, null, this);
            obj.set_taborder("104");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "439", "602", "110", "15", null, null, this);
            obj.set_taborder("105");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "573", "126", "80", "25", null, null, this);
            obj.set_taborder("106");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "16", "45", "30", "41", null, null, this);
            obj.set_taborder("107");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "373", "157", "20", "41", null, null, this);
            obj.set_taborder("108");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "751", "157", "20", "41", null, null, this);
            obj.set_taborder("109");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "772", "166", "30", "41", null, null, this);
            obj.set_taborder("110");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_INCOME", "absolute", "15", "389", "358", "213", null, null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("119");
            obj.set_binddataset("dsPY_INCOME");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"지급항목\"/><Cell col=\"1\" text=\"과세금액\"/><Cell col=\"2\" text=\"비과세금액\"/><Cell col=\"3\" text=\"합계\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left middle;\" text=\"bind:COMD_CDNM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAP1_AMOT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NTP1_AMOT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTL_AMOT\"/></Band><Band id=\"summary\"><Cell style=\"align:right;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;TAP1_AMOT&quot;)\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;NTP1_AMOT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;TOTL_AMOT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST03", "absolute", "15", "368", "89", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("기타보상");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST04", "absolute", "393", "368", "97", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_text("기타공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_ALLDED", "absolute", "393", "389", "358", "213", null, null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("122");
            obj.set_binddataset("dsPY_ALLDED");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"180\"/><Column size=\"170\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"공제항목\"/><Cell col=\"1\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left middle;\" text=\"bind:EXPD_NAME\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXPD_AMOT\"/></Band><Band id=\"summary\"><Cell style=\"align:right;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;EXPD_AMOT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "563", "364", "80", "25", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Shape02", "absolute", "771", null, null, "91", "15", "137", this);
            obj.set_taborder("124");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "791", null, "79", "21", null, "198", this);
            obj.set_taborder("125");
            obj.set_text("총연차");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "791", null, "79", "21", null, "172", this);
            obj.set_taborder("126");
            obj.set_text("사용연차");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "791", null, "79", "21", null, "146", this);
            obj.set_taborder("127");
            obj.set_text("잔여연차");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "772", "403", "30", "41", null, null, this);
            obj.set_taborder("131");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPLY_ANDC", "absolute", "859", "398", "165", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSEX_ANDC", "absolute", "859", "424", "165", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSEB_ANDC", "absolute", "859", "450", "165", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1070, 617, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여명세서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtEMPL_NUMB","value","dsPY_PMMAST","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtEMPL_NAME","value","dsPY_PMMAST","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtSECT_NAME","value","dsPY_PMMAST","SECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtWABK_NAME","value","dsPY_PMMAST","WABK_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtDEPT_NAME","value","dsPY_PMMAST","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtWAGE_ACNO","value","dsPY_PMMAST","WAGE_ACNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtCPOS_NAME","value","dsPY_PMMAST","CPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtWAGP_NAM","value","dsPY_PMMAST","WAGP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtOPOS_NAME","value","dsPY_PMMAST","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtCLSD_NAME","value","dsPY_PMMAST","CLSD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtDUTY_NAME","value","dsPY_PMMAST","DUTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","mskPAYX_AMOT","value","dsPY_PMMAST","PAYX_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","mskDDUC_AMOT","value","dsPY_PMMAST","DDUC_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","mskREAL_AMOT","value","dsPY_PMMAST","REAL_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtAPLY_ANDC","value","dsPY_PMMAST","APLY_ANDC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtUSEX_ANDC","value","dsPY_PMMAST","USEX_ANDC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtUSEB_ANDC","value","dsPY_PMMAST","USEB_ANDC");
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
        this.addIncludeScript("PAYC0020P01.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PAYC0020P01.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PAYC0020P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0110 급여명세서(팝업)
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.01		고민주		Initial Created.
         *   2016.10.26		안윤준		수정
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
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
        this.sBUTTONLIST  = "TFFFFFFT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "PAYC0020P01";
        this.sPAYX_DATE = "";
        this.sWAGE_CODE = "";
        this.sEMPL_NUMB = "";

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

        if (this.opener != null) {
        	this.sPAYX_DATE = this.parent.sPAYX_DATE;
        	this.sWAGE_CODE = this.parent.sWAGE_CODE;
        	this.sEMPL_NUMB = this.parent.sEMPL_NUMB;
        	
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

        	this.fnc_DatasetClear("dsPY_PMMAST,dsPY_PMDETL_A,dsPY_PMDETL_D");

        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_PMMAST=dsPY_PMMAST";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "PAYC0020", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	var sMethodName = "SEARCH03";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_PMDETL_A=dsPY_PMDETL_A";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "PAYC0020", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	var sMethodName = "SEARCH04";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_PMDETL_D=dsPY_PMDETL_D";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "PAYC0020", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	var sMethodName = "SEARCH05";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_INCOME=dsPY_INCOME dsPY_ALLDED=dsPY_ALLDED";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "PAYC0020", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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

        	var reportfile = "/pay/PAYC0020R01.jrf";
        	
        	var params  = "WAGE_YMTH#" + this.fnc_Trim(this.fnc_SubStr(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WAGE_YMTH"),0,4));
             	params +="#WAGE_MOTH#" + this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WAGE_MOTH"));
        		params +="#WAGE_NAME#" + this.fnc_Trim(this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "WAGE_NAME"));
        	
        	var dataref = new Array();
        	
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/pay/PAYC0020_SEARCH02.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsPY_PMMAST=dsPY_PMMAST"
        	dataref[0].arg = this.fn_CreateArgument("SEARCH02");
        	
        	dataref[1] 				= new Object();
        	dataref[1].type 		= "TRAN";
        	dataref[1].svcUrl 		= "/core/erp/pay/PAYC0020_SEARCH03.do";
        	dataref[1].inDataset 	= ""
        	dataref[1].outDataset 	= "dsPY_PMDETL_A=dsPY_PMDETL_A"
        	dataref[1].arg = this.fn_CreateArgument("SEARCH03");
        	
        	dataref[2] 				= new Object();
        	dataref[2].type 		= "TRAN";
        	dataref[2].svcUrl 		= "/core/erp/pay/PAYC0020_SEARCH04.do";
        	dataref[2].inDataset 	= ""
        	dataref[2].outDataset 	= "dsPY_PMDETL_D=dsPY_PMDETL_D"
        	dataref[2].arg = this.fn_CreateArgument("SEARCH04");
        	
        	dataref[3] 				= new Object();
        	dataref[3].type 		= "TRAN";
        	dataref[3].svcUrl 		= "/core/erp/pay/PAYC0020_SEARCH05.do";
        	dataref[3].inDataset 	= ""
        	dataref[3].outDataset 	= "dsPY_INCOME=dsPY_INCOME dsPY_ALLDED=dsPY_ALLDED";
        	dataref[3].arg = this.fn_CreateArgument("SEARCH05");
        		
        	this.fn_UbiReport(reportfile, params, dataref, "");
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_PMMAST", this);
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

        	if (sKind == "SEARCH02" || sKind == "SEARCH03" || sKind == "SEARCH04" || sKind == "SEARCH05" ) {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " PAYX_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.sPAYX_DATE));
        		sReturnString += " WAGE_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.sWAGE_CODE));
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.sEMPL_NUMB));

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

        	if (sMethodName == "SEARCH02" ){
        		if ( this.dsPY_PMMAST.getColumn(this.dsPY_PMMAST.rowposition, "CLSD_CODE") == "01" ) {
        			this.dsPY_PMDETL_A.set_enableevent(false);
        			for ( var i=0; i<this.dsPY_PMDETL_A.getRowCount(); i++ ) {
        				if ( this.dsPY_PMDETL_A.getColumn(i, "EXPD_CODE") == "A0051" ) {
        					this.dsPY_PMDETL_A.setColumn(i, "EXPD_NAME", "월급여");
        				}
        			}
        			this.dsPY_PMDETL_A.set_enableevent(true);
        			
        		}
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
            this.grdPY_PMDETL_A.addEventHandler("oncellclick", this.fn_DetailView, this);
            this.Static120.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static10.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static13.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtSECT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static19.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtWABK_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtWAGE_ACNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdPY_PMDETL_D.addEventHandler("oncellclick", this.fn_DetailView, this);
            this.Static23.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtCPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtWAGP_NAM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOPOS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCLSD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDUTY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskPAYX_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDDUC_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskREAL_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdPY_INCOME.addEventHandler("oncellclick", this.fn_DetailView, this);
            this.grdPY_ALLDED.addEventHandler("oncellclick", this.fn_DetailView, this);
            this.Static02.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtAPLY_ANDC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUSEX_ANDC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUSEB_ANDC.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PAYC0020P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
