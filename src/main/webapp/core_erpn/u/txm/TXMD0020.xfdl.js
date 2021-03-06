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
                this.set_name("TXMD0020");
                this.set_titletext("소득내역등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">INCM_TYCD</Col><Col id=\"DSNAME\">dsSHRINCM_TYCD</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">INCM_TYCD</Col><Col id=\"DSNAME\">dsINCM_TYCD</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">FORI_GUBN</Col><Col id=\"DSNAME\">dsFORI_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">RESI_GUBN</Col><Col id=\"DSNAME\">dsRESI_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">JOBS_GUBN</Col><Col id=\"DSNAME\">dsJOBS_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">APPL_RATE</Col><Col id=\"DSNAME\">dsAPPL_RATE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">GITA_GUBN</Col><Col id=\"DSNAME\">dsGITA_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">PAYX_GUBN</Col><Col id=\"DSNAME\">dsPAYX_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRSTAT_GUBN</Col><Col id=\"CODEID\">STAT_GUBN</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_INCMXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INCM_IDXX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SLIP_INPU\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"FETCH_NM\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INCM_TYCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_SEQX\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DCNT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_KMAK\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NTAX_INCM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPL_RATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"POSS_DAYS\" size=\"7\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OUTL_KMAK\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GASE_TOKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_RATE\" size=\"7\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INCM_TAXX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COMP_SEKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NONS_SEKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INHA_TAXX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEKM_TOKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEHU_TOKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAKE_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_USER\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_RMR2\" size=\"60\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RESI_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"JOBS_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL2_ADDR\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"30\"/><Column id=\"SLIP_DISP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"INCM_TYCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INCM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"RERN_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RESI_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"JOBS_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_INCMXM_SLIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INCM_IDXX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SLIP_INPU\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"FETCH_NM\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"INCM_TYCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_SEQX\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DCNT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_KMAK\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NTAX_INCM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPL_RATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"POSS_DAYS\" size=\"7\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OUTL_KMAK\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GASE_TOKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_RATE\" size=\"7\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INCM_TAXX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COMP_SEKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NONS_SEKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INHA_TAXX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEKM_TOKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEHU_TOKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAKE_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_USER\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_RMR2\" size=\"60\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RESI_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"JOBS_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL2_ADDR\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">FAM0001</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_INCMXM", "absolute", "8", "128", null, null, "25", "323", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("129");
            obj.set_binddataset("dsTA_INCMXM");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"65\" band=\"left\"/><Column size=\"58\"/><Column size=\"56\"/><Column size=\"74\"/><Column size=\"79\"/><Column size=\"74\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"76\"/><Column size=\"71\"/><Column size=\"65\"/><Column size=\"58\"/><Column size=\"79\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"text\"><Cell colspan=\"2\" displaytype=\"text\" text=\"소득자\"/></Cell><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"소득구분\"/><Cell col=\"3\" colspan=\"2\" displaytype=\"text\" text=\"귀속\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"지급일자\"/><Cell col=\"6\" colspan=\"2\" displaytype=\"text\" text=\"총지급액\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"text\" text=\"기타소득의&#10;필요경비\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"text\" text=\"적용세율\"/><Cell col=\"10\" colspan=\"5\" displaytype=\"text\" text=\"원천징수\"/><Cell col=\"15\" rowspan=\"2\" displaytype=\"text\" text=\"세후지급액\"/><Cell col=\"16\" rowspan=\"2\" text=\"전표번호\"/><Cell col=\"17\" rowspan=\"2\" displaytype=\"text\" text=\"적요\"/><Cell col=\"18\" rowspan=\"2\" displaytype=\"text\" text=\"세액감면 및 제한세율근거\"/><Cell row=\"1\" displaytype=\"text\" text=\"코드\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" text=\"성명\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" text=\"귀속년월\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"근무일수\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"과세소득\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"비과세소득\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"소득세\"/><Cell row=\"1\" col=\"11\" displaytype=\"text\" text=\"주민세\"/><Cell row=\"1\" col=\"12\" displaytype=\"text\" text=\"법인세\"/><Cell row=\"1\" col=\"13\" displaytype=\"text\" text=\"농특세\"/><Cell row=\"1\" col=\"14\" displaytype=\"text\" text=\"합계\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:CUST_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:center;background: ;\" text=\"bind:INCM_TYCD\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center middle;background: ;\" text=\"bind:PERS_YYMM\" mask=\"expr:comp.parent.fnc_Length(PERS_YYMM) &lt; 1 ? &quot;&quot; : &quot;####-##&quot;\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;background: ;\" text=\"bind:WORK_DCNT\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center middle;background: ;\" text=\"bind:SUPP_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;background: ;\" text=\"bind:SUPP_KMAK\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:NTAX_INCM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:OUTL_KMAK\"/><Cell col=\"9\" displaytype=\"combo\" style=\"align:center;background: ;\" text=\"bind:APPL_RATE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:INCM_TAXX\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:INHA_TAXX\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:COMP_SEKM\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:NONS_SEKM\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:SEKM_TOKM\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:SEHU_TOKM\"/><Cell col=\"16\" style=\"background: ;\" text=\"bind:SLIP_NUMB\"/><Cell col=\"17\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:REMK_NOTE\"/><Cell col=\"18\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:GITA_RMR2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab0", "absolute", "8", null, null, "192", "25", "15", this);
            obj.set_taborder("128");
            obj.set_preload("true");
            obj.set_tabindex("0");
            obj.style.set_cursor("auto");
            this.addChild(obj.name, obj);
            obj = new Tabpage("FA010010", this.Tab0);
            obj.set_text("사업소득");
            obj.set_scrollbars("none");
            obj.set_cssclass("styTabControl");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("Shape03", "absolute", "10", "10", null, "143", "10", null, this.Tab0.FA010010);
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "30", null, "68", "21", null, "71", this.Tab0.FA010010);
            obj.set_taborder("6");
            obj.set_text("적요");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Static("Static3", "absolute", "30", null, "68", "21", null, "97", this.Tab0.FA010010);
            obj.set_taborder("7");
            obj.set_text("소득세");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Static("Static9", "absolute", "30", null, "68", "21", null, "123", this.Tab0.FA010010);
            obj.set_taborder("8");
            obj.set_text("지급일자");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Calendar("calSUPP_DATE", "absolute", "125", null, "104", "21", null, "123", this.Tab0.FA010010);
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new MaskEdit("mskINCM_TAXX", "absolute", "125", null, "160", "21", null, "97", this.Tab0.FA010010);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "320", null, "52", "21", null, "123", this.Tab0.FA010010);
            obj.set_taborder("10");
            obj.set_text("귀속월");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Static("Static4", "absolute", "320", null, "52", "21", null, "97", this.Tab0.FA010010);
            obj.set_taborder("11");
            obj.set_text("주민세");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new MaskEdit("mskINHA_TAXX", "absolute", "375", null, "160", "21", null, "97", this.Tab0.FA010010);
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Static("Static5", "absolute", "571", null, "82", "21", null, "97", this.Tab0.FA010010);
            obj.set_taborder("13");
            obj.set_text("원천징수계");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Static("Static1", "absolute", "571", null, "76", "21", null, "123", this.Tab0.FA010010);
            obj.set_taborder("14");
            obj.set_text("총지급액");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new MaskEdit("mskSUPP_KMAK", "absolute", "652", null, "160", "21", null, "123", this.Tab0.FA010010);
            obj.set_taborder("2");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new MaskEdit("mskSEKM_TOKM", "absolute", "652", null, "160", "21", null, "97", this.Tab0.FA010010);
            obj.set_taborder("15");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Edit("edtREMK_NOTE", "absolute", "125", null, "687", "21", null, "71", this.Tab0.FA010010);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "851", null, "76", "21", null, "71", this.Tab0.FA010010);
            obj.set_taborder("16");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Static("Static6", "absolute", "851", null, "78", "21", null, "97", this.Tab0.FA010010);
            obj.set_taborder("17");
            obj.set_text("세후지급액");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Static("Static2", "absolute", "851", null, "68", "21", null, "123", this.Tab0.FA010010);
            obj.set_taborder("18");
            obj.set_text("적용세율");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Combo("cmbAPPL_RATE", "absolute", "932", null, "160", "21", null, "123", this.Tab0.FA010010);
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemCombo");
            obj = new MaskEdit("mskSEHU_TOKM", "absolute", "932", null, "160", "21", null, "97", this.Tab0.FA010010);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new MaskEdit("mskSLIP_NUMB", "absolute", "932", null, "160", "21", null, "71", this.Tab0.FA010010);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.getSetter("oneditdblclick").set("fn_SlipNumbDblClick");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_cursor("hand");
            obj.style.setStyleValue("align", "readonly", "center middle");
            obj.set_visible("false");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Div("divPERS_YYMM", "absolute", "375", "19", "100", "21", null, null, this.Tab0.FA010010);
            obj.set_taborder("1");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.Tab0.FA010010.addChild(obj.name, obj);
            obj = new Tabpage("FA010020", this.Tab0);
            obj.set_text("기타소득");
            obj.set_scrollbars("none");
            obj.set_cssclass("styTabControl");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("Shape03", "absolute", "10", "10", null, "143", "10", null, this.Tab0.FA010020);
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static1", "absolute", "30", "19", "100", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("10");
            obj.set_text("지급일자");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "30", "45", "100", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("11");
            obj.set_text("기타소득구분");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "885", "71", "100", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("12");
            obj.set_text("세후지급액");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "592", "97", "84", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("13");
            obj.set_text("적요");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Combo("cmbAPPL_RATE", "absolute", "966", "19", "150", "21", null, null, this.Tab0.FA010020);
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemCombo");
            obj = new MaskEdit("mskINCM_TAXX", "absolute", "125", "71", "144", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "885", "19", "68", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("15");
            obj.set_text("적용세율");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static3", "absolute", "30", "71", "84", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("16");
            obj.set_text("소득세");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "592", "71", "84", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("17");
            obj.set_text("원천징수계");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new MaskEdit("mskSEKM_TOKM", "absolute", "674", "71", "144", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Edit("edtGITA_RMR2", "absolute", "199", "97", "344", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static8", "absolute", "885", "121", "68", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("19");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new MaskEdit("mskSLIP_NUMB", "absolute", "966", "121", "150", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.getSetter("oneditdblclick").set("fn_SlipNumbDblClick");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.set_cursor("hand");
            obj.style.setStyleValue("align", "readonly", "center middle");
            obj.set_visible("false");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new MaskEdit("mskINHA_TAXX", "absolute", "399", "71", "144", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new MaskEdit("mskGASE_TOKM", "absolute", "674", "45", "144", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("6");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new MaskEdit("mskSUPP_KMAK", "absolute", "674", "19", "144", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("2");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static6", "absolute", "592", "45", "68", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("22");
            obj.set_text("소득금액");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static7", "absolute", "592", "19", "68", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("23");
            obj.set_text("총지급액");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static5", "absolute", "330", "71", "68", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("24");
            obj.set_text("주민세");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new MaskEdit("mskNONS_SEKM", "absolute", "443", "135", "160", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("25");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.style.set_align("right");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new MaskEdit("mskOUTL_KAMK", "absolute", "399", "45", "144", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("5");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static2", "absolute", "330", "19", "68", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("26");
            obj.set_text("소득귀속");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static4", "absolute", "330", "45", "68", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("27");
            obj.set_text("필요경비");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "30", "97", "163", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("28");
            obj.set_text("세액감면 및 제한세율근거");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Edit("edtREMK_NOTE", "absolute", "674", "97", "442", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new MaskEdit("mskSEHU_TOKM", "absolute", "966", "71", "150", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new MaskEdit("mskCOMP_SEKM", "absolute", "125", "135", "120", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("30");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            obj.style.set_align("right");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Combo("cmbGITA_GUBN", "absolute", "125", "45", "144", "21", null, null, this.Tab0.FA010020);
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemCombo");
            obj = new Calendar("calSUPP_DATE", "absolute", "125", "19", "104", "21", null, null, this.Tab0.FA010020);
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Static("Static9", "absolute", "30", "135", "100", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("31");
            obj.set_text("법인세");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "274", "135", "108", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("32");
            obj.set_text("농어촌특별세");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Div("divPERS_YYMM", "absolute", "399", "19", "100", "21", null, null, this.Tab0.FA010020);
            obj.set_taborder("1");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.Tab0.FA010020.addChild(obj.name, obj);
            obj = new Tabpage("FA010030", this.Tab0);
            obj.set_text("일용근로소득");
            obj.set_scrollbars("none");
            obj.set_cssclass("styTabControl");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("Shape03", "absolute", "10", "10", null, "143", "10", null, this.Tab0.FA010030);
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemBoxOut");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new MaskEdit("mskNTAX_INCM", "absolute", "125", "71", "144", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static7", "absolute", "30", "71", "80", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("8");
            obj.set_text("비과세소득");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Combo("cmbAPPL_RATE", "absolute", "968", "19", "144", "21", null, null, this.Tab0.FA010030);
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemCombo");
            obj = new MaskEdit("mskSEHU_TOKM", "absolute", "968", "45", "144", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static6", "absolute", "886", "45", "80", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("10");
            obj.set_text("세후지급액");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static2", "absolute", "886", "19", "72", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("11");
            obj.set_text("적용세율");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new MaskEdit("mskSUPP_KMAK", "absolute", "703", "19", "144", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("3");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new MaskEdit("mskSEKM_TOKM", "absolute", "703", "45", "144", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static5", "absolute", "583", "45", "94", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("13");
            obj.set_text("원천징수계");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static1", "absolute", "583", "19", "115", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("14");
            obj.set_text("총지급액(과세분)");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "527", "19", "16", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("15");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new MaskEdit("mskINHA_TAXX", "absolute", "388", "45", "144", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static0", "absolute", "319", "19", "64", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("17");
            obj.set_text("소득귀속");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static4", "absolute", "319", "45", "72", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("18");
            obj.set_text("주민세");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new MaskEdit("mskINCM_TAXX", "absolute", "125", "45", "144", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Calendar("calSUPP_DATE", "absolute", "125", "19", "104", "21", null, null, this.Tab0.FA010030);
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj = new Static("Static9", "absolute", "30", "19", "72", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("20");
            obj.set_text("지급일자");
            obj.set_cssclass("styFormItemCapBE");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static3", "absolute", "30", "45", "64", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("21");
            obj.set_text("소득세");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "319", "71", "64", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("22");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Edit("edtREMK_NOTE", "absolute", "388", "71", "459", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new MaskEdit("mskWORK_DCNT", "absolute", "490", "19", "29", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("2");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Static("Static8", "absolute", "886", "71", "68", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("23");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new MaskEdit("mskSLIP_NUMB", "absolute", "968", "71", "144", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.getSetter("oneditdblclick").set("fn_SlipNumbDblClick");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.set_cursor("hand");
            obj.style.setStyleValue("align", "readonly", "center middle");
            obj.set_visible("false");
            this.Tab0.FA010030.addChild(obj.name, obj);
            obj = new Div("divPERS_YYMM", "absolute", "388", "19", "100", "21", null, null, this.Tab0.FA010030);
            obj.set_taborder("1");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.Tab0.FA010030.addChild(obj.name, obj);

            obj = new Static("Shape3", "absolute", "8", null, null, "91", "25", "217", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("25");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "1071", null, "75", "21", null, "281", this);
            obj.set_text("담당부서");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTAKE_DEPT", "absolute", "1292", null, "70", "21", null, "260", this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("56");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "1363", null, "110", "21", null, "260", this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_taborder("57");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "10", "-493", "85", "23", null, null, this);
            obj.set_text("지급일자");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "10", "-469", "85", "23", null, null, this);
            obj.set_text("소득세");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskINCM_TAXX", "absolute", "96", "-469", "106", "23", null, null, this);
            obj.set_enable("false");
            obj.set_taborder("64");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSUPP_DATE", "absolute", "96", "-493", "106", "23", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("59");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static2", "absolute", "203", "-493", "85", "23", null, null, this);
            obj.set_text("소득귀속");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "203", "-469", "85", "23", null, null, this);
            obj.set_text("주민세");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskINHA_TAXX", "absolute", "289", "-469", "106", "23", null, null, this);
            obj.set_enable("false");
            obj.set_taborder("62");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("divPERS_YYMM", "absolute", "289", "-493", "106", "23", null, null, this);
            obj.set_mask("####-##");
            obj.set_taborder("60");
            obj.set_type("string");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "396", "-493", "85", "23", null, null, this);
            obj.set_text("총지급액");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "396", "-469", "85", "23", null, null, this);
            obj.set_text("원천징수계");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSEKM_TOKM", "absolute", "482", "-469", "106", "23", null, null, this);
            obj.set_enable("false");
            obj.set_taborder("63");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSUPP_KMAK", "absolute", "482", "-493", "106", "23", null, null, this);
            obj.set_taborder("61");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "589", "-493", "85", "23", null, null, this);
            obj.set_text("적용세율");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "589", "-469", "85", "23", null, null, this);
            obj.set_text("세후지급액");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPAYX_GUBN", "absolute", "1292", null, "181", "21", null, "210", this);
            this.addChild(obj.name, obj);
            var cmbPAYX_GUBN_innerdataset = new Dataset("cmbPAYX_GUBN_innerdataset", this.cmbPAYX_GUBN);
            cmbPAYX_GUBN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신입</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">경력</Col></Row></Rows>");
            obj.set_innerdataset(cmbPAYX_GUBN_innerdataset);
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_innerdataset("dsPAYX_GUBN");
            obj.set_type("dropdown");
            obj.set_taborder("65");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "348", "71", "68", "21", null, null, this);
            obj.set_text("지급일자");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSUPP_STDT", "absolute", "418", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRSUPP_EDDT", "absolute", "538", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static4", "absolute", "523", "71", "14", "21", null, null, this);
            obj.set_text("~");
            obj.style.set_color("#505050ff");
            obj.style.set_font("9 굴림");
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "958", "71", "68", "21", null, null, this);
            obj.set_text("소득구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRINCM_TYCD", "absolute", "1027", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static16", "absolute", "668", "71", "82", "21", null, null, this);
            obj.set_text("성명(상호)");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHROWNR_NAME", "absolute", "749", "71", "180", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "1212", "66", "60", "21", null, null, this);
            obj.set_text("상태");
            obj.style.set_align("left");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTAT_GUBN", "absolute", "1274", "68", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemCombo");

            obj = new Button("btnDown", "absolute", "8", "35", "98", "21", null, null, this);
            obj.set_taborder("52");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_text("사업소득양식");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp", "absolute", "109", "35", "120", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("사업소득엑셀업로드");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown2", "absolute", "232", "35", "98", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("기타소득양식");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp2", "absolute", "333", "35", "120", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("기타소득엑셀업로드");
            obj.style.set_imagealign("left");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "621", "12", "17", "12", null, null, this);
            obj.set_taborder("66");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_text("귀속연월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "201", "71", "14", "21", null, null, this);
            obj.set_text("~");
            obj.style.set_color("#505050ff");
            obj.style.set_align("center");
            obj.style.set_font("굴림,9");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Button("btnCREATE_SLIP", "absolute", null, null, "74", "21", "101", "184", this);
            obj.set_taborder("51");
            obj.set_text("전표처리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDISPLAY_SLIP", "absolute", null, null, "74", "21", "177", "184", this);
            obj.set_taborder("50");
            obj.set_text("전표조회");
            obj.set_cssclass("styTextButtonBizProc");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOWNR_NAME", "absolute", "800", null, "110", "21", null, "278", this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "919", null, "100", "21", null, "276", this);
            obj.set_taborder("71");
            obj.set_text("지출일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPAYX_DATE", "absolute", "1027", null, "114", "21", null, "278", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new MaskEdit("mskBIZR_NUMB", "absolute", "1027", null, "114", "21", null, "252", this);
            obj.set_taborder("17");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "919", null, "108", "21", null, "252", this);
            obj.set_taborder("72");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDTL2_ADDR", "absolute", "402", null, "406", "21", null, "226", this);
            obj.set_taborder("20");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "593", null, "90", "21", null, "252", this);
            obj.set_taborder("73");
            obj.set_text("주민등록번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "594", null, "75", "21", null, "276", this);
            obj.set_taborder("74");
            obj.set_text("성명(상호)");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "688", null, "87", "21", null, "278", this);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbJOBS_GUBN", "absolute", "484", null, "80", "21", null, "252", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Edit("edtEMPL_NAME", "absolute", "484", null, "80", "21", null, "278", this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbINCM_TYCD", "absolute", "402", null, "80", "21", null, "252", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Edit("edtTAKE_USER", "absolute", "402", null, "80", "21", null, "278", this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "301", null, "75", "21", null, "276", this);
            obj.set_taborder("75");
            obj.set_text("담당자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "301", null, "100", "21", null, "252", this);
            obj.set_taborder("76");
            obj.set_text("소득/직업구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDTL1_ADDR", "absolute", "192", null, "208", "21", null, "226", this);
            obj.set_taborder("19");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRESI_GUBN", "absolute", "192", null, "80", "21", null, "252", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Combo("cmbACCT_GUBN", "absolute", "110", null, "162", "21", null, "278", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemCombo");
            obj.set_enable("true");

            obj = new Combo("cmbFORI_GUBN", "absolute", "110", null, "80", "21", null, "252", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new MaskEdit("mskPOST_NUMB", "absolute", "110", null, "80", "21", null, "226", this);
            obj.set_taborder("18");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "28", null, "83", "21", null, "226", this);
            obj.set_taborder("81");
            obj.set_text("주소");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "28", null, "83", "21", null, "252", this);
            obj.set_taborder("82");
            obj.set_text("내/외국인");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "28", null, "83", "21", null, "276", this);
            obj.set_taborder("83");
            obj.set_text("사업장");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "840", null, "71", "21", null, "401", this);
            obj.set_taborder("88");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpOWNR_NAME", "absolute", "777", null, "21", "21", null, "278", this);
            obj.set_taborder("89");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskRERN_NUMB", "absolute", "688", null, "120", "21", null, "252", this);
            obj.set_taborder("91");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("92");
            obj.set_text("소득내역등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("93");
            obj.set_text("홈 > 재무관리 > 세무회계 > 원천세 > 소득내역등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("94");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("95");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("96");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("97");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("98");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("102");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("103");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("104");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("105");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("106");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "319", "61", "40", "41", null, null, this);
            obj.set_taborder("107");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("109");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "749", "103", "48", "25", null, null, this);
            obj.set_taborder("110");
            obj.set_text("H25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "9", "575", "10", "67", null, null, this);
            obj.set_taborder("115");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "938", "533", "216", "4", null, null, this);
            obj.set_taborder("117");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "613", "-128", "80", "10", null, null, this);
            obj.set_taborder("119");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "436", "549", "62", "8", null, null, this);
            obj.set_taborder("120");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "444", "538", "62", "10", null, null, this);
            obj.set_taborder("121");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "621", "691", "62", "10", null, null, this);
            obj.set_taborder("122");
            obj.set_text("w10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "749", "394", "48", "15", null, null, this);
            obj.set_taborder("125");
            obj.set_text("H15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPPL_RATE", "absolute", "866", null, "110", "21", null, "370", this);
            obj.set_taborder("126");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDELETE_SLIP", "absolute", null, null, "74", "21", "25", "184", this);
            obj.set_taborder("127");
            obj.set_text("전표삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRPERS_STYM", "absolute", "96", "71", "100", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRPERS_EDYM", "absolute", "219", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.FA010010,
            	//-- Layout function
            	function(p) {
            		p.set_text("사업소득");
            		p.set_scrollbars("none");
            		p.set_cssclass("styTabControl");

            	}
            );
            this.Tab0.FA010010.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 970, 114, this.Tab0.FA010020,
            	//-- Layout function
            	function(p) {
            		p.set_text("기타소득");
            		p.set_scrollbars("none");
            		p.set_cssclass("styTabControl");

            	}
            );
            this.Tab0.FA010020.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.FA010030,
            	//-- Layout function
            	function(p) {
            		p.set_text("일용근로소득");
            		p.set_scrollbars("none");
            		p.set_cssclass("styTabControl");

            	}
            );
            this.Tab0.FA010030.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("소득내역등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","Tab0.FA010030.edtREMK_NOTE","value","dsTA_INCMXM","REMK_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010030_calSUPP_DATE_value","Tab0.FA010030.calSUPP_DATE","value","dsTA_INCMXM","SUPP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010030_mskINCM_TAXX_value","Tab0.FA010030.mskINCM_TAXX","value","dsTA_INCMXM","INCM_TAXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010030_mskINHA_TAXX_value","Tab0.FA010030.mskINHA_TAXX","value","dsTA_INCMXM","INHA_TAXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010030_mskSEKM_TOKM_value","Tab0.FA010030.mskSEKM_TOKM","value","dsTA_INCMXM","SEKM_TOKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010030_mskSUPP_KMAK_value","Tab0.FA010030.mskSUPP_KMAK","value","dsTA_INCMXM","SUPP_KMAK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010030_mskSEHU_TOKM_value","Tab0.FA010030.mskSEHU_TOKM","value","dsTA_INCMXM","SEHU_TOKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010030_cmbAPPL_RATE_value","Tab0.FA010030.cmbAPPL_RATE","value","dsTA_INCMXM","APPL_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010030_mskNTAX_INCM_value","Tab0.FA010030.mskNTAX_INCM","value","dsTA_INCMXM","NTAX_INCM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_calSUPP_DATE_value","Tab0.FA010020.calSUPP_DATE","value","dsTA_INCMXM","SUPP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_cmbGITA_GUBN_value","Tab0.FA010020.cmbGITA_GUBN","value","dsTA_INCMXM","GITA_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_mskCOMP_SEKM_value","Tab0.FA010020.mskCOMP_SEKM","value","dsTA_INCMXM","COMP_SEKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_mskSEHU_TOKM_value","Tab0.FA010020.mskSEHU_TOKM","value","dsTA_INCMXM","SEHU_TOKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab0.FA010020.edtREMK_NOTE","value","dsTA_INCMXM","REMK_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_mskOUTL_KAMK_value","Tab0.FA010020.mskOUTL_KAMK","value","dsTA_INCMXM","OUTL_KMAK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_mskNONS_SEKM_value","Tab0.FA010020.mskNONS_SEKM","value","dsTA_INCMXM","NONS_SEKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_mskSUPP_KMAK_value","Tab0.FA010020.mskSUPP_KMAK","value","dsTA_INCMXM","SUPP_KMAK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_mskGASE_TOKM_value","Tab0.FA010020.mskGASE_TOKM","value","dsTA_INCMXM","GASE_TOKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_mskINHA_TAXX_value","Tab0.FA010020.mskINHA_TAXX","value","dsTA_INCMXM","INHA_TAXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab0.FA010020.mskSLIP_NUMB","value","dsTA_INCMXM","SLIP_DISP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_edtGITA_RMR2_value","Tab0.FA010020.edtGITA_RMR2","value","dsTA_INCMXM","GITA_RMR2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_mskSEKM_TOKM_value","Tab0.FA010020.mskSEKM_TOKM","value","dsTA_INCMXM","SEKM_TOKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_mskINCM_TAXX_value","Tab0.FA010020.mskINCM_TAXX","value","dsTA_INCMXM","INCM_TAXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010020_cmbAPPL_RATE_value","Tab0.FA010020.cmbAPPL_RATE","value","dsTA_INCMXM","APPL_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab0.FA010010.mskSLIP_NUMB","value","dsTA_INCMXM","SLIP_DISP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010010_mskSEHU_TOKM_value","Tab0.FA010010.mskSEHU_TOKM","value","dsTA_INCMXM","SEHU_TOKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010010_cmbAPPL_RATE_value","Tab0.FA010010.cmbAPPL_RATE","value","dsTA_INCMXM","APPL_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab0.FA010010.edtREMK_NOTE","value","dsTA_INCMXM","REMK_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010010_mskSEKM_TOKM_value","Tab0.FA010010.mskSEKM_TOKM","value","dsTA_INCMXM","SEKM_TOKM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010010_mskSUPP_KMAK_value","Tab0.FA010010.mskSUPP_KMAK","value","dsTA_INCMXM","SUPP_KMAK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010010_mskINHA_TAXX_value","Tab0.FA010010.mskINHA_TAXX","value","dsTA_INCMXM","INHA_TAXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010010_mskINCM_TAXX_value","Tab0.FA010010.mskINCM_TAXX","value","dsTA_INCMXM","INCM_TAXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Tab0_FA010010_calSUPP_DATE_value","Tab0.FA010010.calSUPP_DATE","value","dsTA_INCMXM","SUPP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab0.FA010030.mskWORK_DCNT","value","dsTA_INCMXM","WORK_DCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Tab0.FA010030.mskSLIP_NUMB","value","dsTA_INCMXM","SLIP_DISP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskPOST_NUMB_value","mskPOST_NUMB","value","dsTA_INCMXM","POST_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbFORI_GUBN_value","cmbFORI_GUBN","value","dsTA_INCMXM","FORI_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbACCT_GUBN_value","cmbACCT_GUBN","value","dsTA_INCMXM","ACCT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbRESI_GUBN_value","cmbRESI_GUBN","value","dsTA_INCMXM","RESI_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDTL1_ADDR_value","edtDTL1_ADDR","value","dsTA_INCMXM","DTL1_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTAKE_USER_value","edtTAKE_USER","value","dsTA_INCMXM","TAKE_USER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbINCM_TYCD_value","cmbINCM_TYCD","value","dsTA_INCMXM","INCM_TYCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NAME_value","edtEMPL_NAME","value","dsTA_INCMXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbJOBS_GUBN_value","cmbJOBS_GUBN","value","dsTA_INCMXM","JOBS_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_CODE_value","edtCUST_CODE","value","dsTA_INCMXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDTL2_ADDR_value","edtDTL2_ADDR","value","dsTA_INCMXM","DTL2_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskBIZR_NUMB_value","mskBIZR_NUMB","value","dsTA_INCMXM","BIZR_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calPAYX_DATE_value","calPAYX_DATE","value","dsTA_INCMXM","PAYX_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOWNR_NAME_value","edtOWNR_NAME","value","dsTA_INCMXM","OWNR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTAKE_DEPT_value","edtTAKE_DEPT","value","dsTA_INCMXM","TAKE_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_NAME_value","edtDEPT_NAME","value","dsTA_INCMXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbPAYX_GUBN_value","cmbPAYX_GUBN","value","dsTA_INCMXM","PAYX_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","mskRERN_NUMB","value","dsTA_INCMXM","RERN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtCUST_NAME","value","dsTA_INCMXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtAPPL_RATE","value","dsTA_INCMXM","SLIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TXMD0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMD0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMD0020 소득내역등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
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
        // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sBUTTONLIST 	= "TTTTTTTT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "TXMD0020"; //해당 Form에서 사용 할 Package 명
        this.sSLIP_INPU 	= ""; //전표등록구분
        this.sSLIP_NUMB 	= "";
        this.aKeyValue 		= new Array(9);

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

        // 조회조건이 다른 프로그램에서 넘어오는 변수
        this.arrReturn = new Array(15); //타 프로그램으로 결과 반환 할 Array

        
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.Tab0.FA010010.mskSLIP_NUMB, "", "Y");
        	this.fnc_FormatSlipNumber(this.Tab0.FA010020.mskSLIP_NUMB, "", "Y");
        	this.fnc_FormatSlipNumber(this.Tab0.FA010030.mskSLIP_NUMB, "", "Y");
        	this.fnc_FormatSlipNumber(this.grdTA_INCMXM, "SLIP_NUMB");

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.sSLIP_INPU 	= "MANU";	//직접등록
        	this.divSHRPERS_STYM.fn_SetMonth((this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4) + "01"));
        	this.divSHRPERS_EDYM.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4) + "12");

        	//월달력 바인딩
        	var bindInfo = new Object;
        	bindInfo.binddataset = this.dsTA_INCMXM;
        	bindInfo.bindcolumn = "PERS_YYMM";
        	this.Tab0.FA010010.divPERS_YYMM.fn_SetBindInfo(bindInfo);
        	this.Tab0.FA010020.divPERS_YYMM.fn_SetBindInfo(bindInfo);
        	this.Tab0.FA010030.divPERS_YYMM.fn_SetBindInfo(bindInfo);
        	
        	this.Tab0.set_tabindex(0);
        	
        	this.divSHRPERS_STYM.setFocus();
        	
        	this.fn_Search01(); //사업소득자 명단 가져오기

        }

        /*----------------------------------+
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

        	this.fnc_DatasetClear("dsTA_INCMXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_INCMXM=dsTA_INCMXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_INCMXM.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsTA_INCMXM.addRow();
        	
        	this.cmbACCT_GUBN.set_index(0);
        	//this.cmbINCM_TYCD.set_index(-1);	
        	this.dsTA_INCMXM.setColumn(iRow, "SLIP_INPU", this.sSLIP_INPU);			//전표등록구분
        	this.dsTA_INCMXM.setColumn(iRow, "ACCT_GUBN", this.cmbACCT_GUBN.value); //회계단위
        	//this.dsTA_INCMXM.setColumn(iRow, "INCM_TYCD", this.cmbINCM_TYCD.value); //사업소득
        	
        	this.edtTAKE_DEPT.set_value(application.GBL_DEPTCD); //로그인부서코드
        	this.edtDEPT_NAME.set_value(application.GBL_DEPTNM); //로그인부서명
        	this.edtTAKE_USER.set_value(application.GBL_EMPLNO); //로그인사번
        	this.edtEMPL_NAME.set_value(application.GBL_USERNM); //로그인사원명

        	this.edtOWNR_NAME.setFocus();
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

           if (this.fn_DeleteCheck()) this.dsTA_INCMXM.deleteRow(this.dsTA_INCMXM.rowposition);
           this.grdTA_INCMXM.setFocus();	
           
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTA_INCMXM"); //취소 할 DataSet의 이름을 입력한다.
        	this.dsTA_INCMXM_onrowposchanged();
        	this.grdTA_INCMXM.setFocus(); //취소 후 Grid로 Focus
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "INCM_IDXX");
        	this.aKeyValue[1] = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "ACCT_GUBN");
        	this.aKeyValue[2] = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "CUST_CODE");
        	this.aKeyValue[3] = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "SUPP_DATE");
        	this.aKeyValue[4] = this.fnc_SubStr(this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "PERS_YYMM"), 0, 6);
        	this.aKeyValue[5] = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "SUPP_KMAK");
        	this.aKeyValue[6] = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "APPL_RATE");
        	this.aKeyValue[7] = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "GITA_GUBN");
        	this.aKeyValue[8] = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "OUTL_KMAK");

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_INCMXM=dsTA_INCMXM:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTA_INCMXM.setFocus();
        	
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name); //Export 할 화면 Call
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// Dialog Option List
        	var strOpenStyle = "resizable=false openalign='center middle' ";

        	this.fnc_OpenPopup("TXMD0020P01", "txm::TXMD0020P01.xfdl", "", strOpenStyle);
        	this.grdTA_INCMXM.setFocus();

        }

        

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsTA_CUSTXM,dsTA_INCMXM", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
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

        	if (this.fnc_DatasetChangeCheck("dsTA_INCMXM")) {
        		if (!this.fnc_Message("TMM023")) return false;
        	}

        	if (this.fnc_Length(this.divSHRPERS_STYM.fn_GetMonth()) < 6 || this.fnc_Length(this.divSHRPERS_EDYM.fn_GetMonth()) < 6) {
        		this.fnc_Message("TMM072", "귀속년월");
        		this.divSHRPERS_STYM.setFocus();
        		return this.fnc_SearchCheckPostAction("TMM072", "귀속년월", this.divSHRPERS_STYM);
        	} else {
        		if (this.divSHRPERS_STYM.fn_GetMonth() > this.divSHRPERS_EDYM.fn_GetMonth()) {
        			this.fnc_Message("TMM042", "귀속년월 시작", "귀속년월 종료");
        			this.divSHRPERS_STYM.setFocus();
        			return this.fnc_SearchCheckPostAction("TMM042", "귀속년월 시작,귀속년월 종료", this.divSHRPERS_STYM);
        		}
        	}

        	if (this.fnc_Length(this.calSHRSUPP_STDT.value) == 8 && this.fnc_Length(this.calSHRSUPP_EDDT.value) == 8) {
        		if (this.calSHRSUPP_STDT.value > this.calSHRSUPP_EDDT.value) {
        			this.fnc_Message("TMM042", "지급일자 시작", "지급일자 종료");
        			this.calSHRSUPP_STDT.setFocus();
        			return this.fnc_SearchCheckPostAction("TMM042", "지급일자 시작,지급일자 종료", this.calSHRSUPP_STDT);
        		}
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "SLIP_NUMB"))) > 0) {
        		this.fnc_Message("TMM125", "전표생성 된 자료입니다.\n\n삭제할 수 없습니다");
        		return false;
        	}

        	// 선택된 Row Count
        	this.dsTA_INCMXM.deleteRow(this.dsTA_INCMXM.rowposition);
        /*
        	var iSelectRowCount = this.fnc_SelectRowCount(this.dsTA_INCMXM);

        	if (iSelectRowCount > 1) {
        		// Multi로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		// 한 건 삭제 처리히 해당 항목에 대한 삭제 여부 확인
        		var sQuestionText = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "OWNR_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        */
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){
        	
        	if (!this.fnc_DatasetChangeCheck("dsTA_INCMXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_INCMXM.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTA_INCMXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		//this.dsTA_CUSTXM.set_rowposition(i);
        		
        		// var sPAGE = GetItem(Tab0,Tab0.tabindex);
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "TAKE_DEPT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "담당부서", this.dsTA_INCMXM, i, this.edtDEPT_NAME, "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "TAKE_USER"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "담당자", this.dsTA_INCMXM, i, this.edtEMPL_NAME, "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "CUST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "소득자성명(상호)", this.dsTA_INCMXM, i, this.edtOWNR_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "SUPP_DATE"))) < 1){
        			return this.fnc_CheckPostAction("TMM072", "지급일자", this.dsTA_INCMXM, i, this.Tab0.components[this.Tab0.tabindex].calSUPP_DATE, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "PERS_YYMM"))) < 6) {
        			return this.fnc_CheckPostAction("TMM072", "소득귀속년월", this.dsTA_INCMXM, i, this.Tab0.components[this.Tab0.tabindex].divPERS_YYMM, "");
        		}
        		
        		if (this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "INCM_TYCD")) == "FA010030") {
        		//if (this.Tab0.tabindex == 2) {
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "WORK_DCNT"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "근무일수", this.dsTA_INCMXM, i, this.Tab0.components[this.Tab0.tabindex].mskWORK_DCNT, "");
        			}
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "SUPP_KMAK"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "총지급액", this.dsTA_INCMXM, i, this.Tab0.components[this.Tab0.tabindex].mskSUPP_KMAK, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "APPL_RATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "적용세율", this.dsTA_INCMXM, i, this.Tab0.components[this.Tab0.tabindex].cmbAPPL_RATE, "");
        		}
        		
        		if (this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "INCM_TYCD")) == "FA010020") {
        		//if (this.Tab0.tabindex == 1) {
        		
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "GITA_GUBN"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "기타소득구분", this.dsTA_INCMXM, i, this.Tab0.components[this.Tab0.tabindex].cmbGITA_GUBN, "");
        			}
        			
        			if (this.dsTA_INCMXM.getColumn(i, "GITA_GUBN") == "FA020020") {
        				var iSupp_Kmak = nexacro.toNumber(this.dsTA_INCMXM.getColumn(i, "SUPP_KMAK"));
        				var iOutl_Kmak = nexacro.toNumber(this.dsTA_INCMXM.getColumn(i, "OUTL_KMAK"));

        				var iAMNT = iSupp_Kmak * 0.8;

        				if (iOutl_Kmak < iAMNT) {
        					return this.fnc_CheckPostAction("TMM125", "필요경비가 최소 총지급액의 80% 이상이어야 합니다", this.dsTA_INCMXM, i, this.Tab0.components[this.Tab0.tabindex].mskOUTL_KAMK, "");
        				}
        			}

        		} else if (this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "INCM_TYCD")) == "FA010030") { //if (this.Tab0.tabindex == 2) {
        		
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "NTAX_INCM"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "비과세소득", this.dsTA_INCMXM, i, this.Tab0.components[this.Tab0.tabindex].mskNTAX_INCM, "");
        			}
        			
        		}

        	}

        	return true;
        	
        }

        /*----------------------------+
         |  전표생성 필수 조건 체크!  |
         +----------------------------*/
        this.fn_CreateSlipItemCheck = function () {

            if (this.dsTA_INCMXM.getRowCount() == 0) return false;
        	
        	var i = this.dsTA_INCMXM.rowposition;
        	
        	if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "SLIP_NUMB"))) > 0) {
        		this.fnc_Message("TMM125", "이미 전표처리된 건입니다"); //Message 처리
        		return false;
        	}
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_INCMXM")) {
        		return this.fnc_Message("TMM015", "전표처리");
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(i, "REMK_NOTE"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "적요", this.dsTA_CUSTXM, i, this.Tab0.components[this.Tab0.tabindex].edtREMK_NOTE, "");
        	}

        	// 선택한 대상만 복사
        	this.dsTA_INCMXM_SLIP.copyData(this.dsTA_INCMXM, true);
        	this.fnc_DatasetClear("dsTA_INCMXM_SLIP");

        	var iRow = this.dsTA_INCMXM_SLIP.addRow();
        	this.dsTA_INCMXM_SLIP.copyRow(iRow, this.dsTA_INCMXM, i);

        	//trace(this.dsTA_INCMXM_SLIP.saveXML());
        	return this.fnc_Message("TMM061", "전표");
        		
        }

        /*----------------------------+
         |  전표삭제 필수 조건 체크!  |
         +----------------------------*/
        this.fn_DeleteSlipItemCheck = function () {
            
        	var sQuestionText = "회계전표 " + this.fnc_GetMaskFormat(this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "SLIP_NUMB"), application.GBL_SLIPMASK);
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " OWNR_NAME=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHROWNR_NAME.value)); 
        		sReturnString += " SUPP_STDT=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRSUPP_STDT.value)); 
        		sReturnString += " SUPP_EDDT=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRSUPP_EDDT.value)); 
        		sReturnString += " PERS_STYM=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRPERS_STYM.fn_GetMonth()));
        		sReturnString += " PERS_EDYM=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRPERS_EDYM.fn_GetMonth()));
        		sReturnString += " INCM_TYCD=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRINCM_TYCD.value));
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(application.GBL_DEPTCD));
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " CUST_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtCUST_CODE.value)); 

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" + this.fnc_Quote(sKind); 

        	// 전표생성
        	} else if (sKind == "PROC00") {
        	
        		var sSous_Lnky = this.dsTA_INCMXM_SLIP.getColumn(0, "INCM_IDXX");
        				 
        		sReturnString  = " pgm="		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote("10");
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbACCT_GUBN.value));
        		sReturnString += " SLIP_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.Tab0.components[this.Tab0.tabindex].calSUPP_DATE.value)); //전표발행일
        		sReturnString += " FORM_IDXX=" 	+ this.fnc_Quote(this.fnc_Trim(this.sPACKAGENAME)); //화면ID
                sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(application.GBL_EMPLNO);
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(application.GBL_DEPTCD);
        		sReturnString += " SLIP_GUBN=" 	+ this.fnc_Quote("TX001");	//사업기타일용소득전표
        		sReturnString += " TITL_NAME=" 	+ this.fnc_Quote("[" + this.Tab0.components[this.Tab0.tabindex].text + "]");
        		sReturnString += " SOUS_LNKY=" 	+ this.fnc_Quote(sSous_Lnky); //출처연결키
        	
        	// 전표생성
        	} else if (sKind == "PROC01") {
            
                sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="    + this.fnc_Quote(sKind);
                sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "SLIP_NUMB")); //전표번호
        	
        	}

        	return sReturnString;
        	
        }

        /*-------------------------------------+
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

        		this.fnc_Information(this.stInformation, this.dsTA_INCMXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_INCMXM.rowcount);
        		
        		var iRow = "";	
        		if (this.fnc_Length(this.aKeyValue[0]) > 0) {	
        			//수정저장 시
        			iRow = this.dsTA_INCMXM.findRowExpr("INCM_IDXX=='" + this.aKeyValue[0] + "'");
        		} else {	
        			//신규저장 시
        			iRow = this.dsTA_INCMXM.findRowExpr("ACCT_GUBN=='" + this.aKeyValue[1] + "' && CUST_CODE=='" + this.aKeyValue[2] + "'"
        										  + " && SUPP_DATE=='" + this.aKeyValue[3] + "' && PERS_YYMM=='" + this.aKeyValue[4] + "'"
        										  + " && SUPP_KMAK== " + this.aKeyValue[5] + "  && APPL_RATE=='" + this.aKeyValue[6] + "'"
        										  + " && GITA_GUBN=='" + this.aKeyValue[7] + "' && OUTL_KMAK== " + this.aKeyValue[8]);
        		}				
        		if (iRow < 0) iRow = 0;
         		
         		this.grdTA_INCMXM.selectRow(iRow);
         		this.dsTA_INCMXM.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";
        		this.aKeyValue[1] = "";
        		this.aKeyValue[2] = "";
        		this.aKeyValue[3] = "";
        		this.aKeyValue[4] = "";
        		this.aKeyValue[5] = "";
        		this.aKeyValue[6] = "";
        		this.aKeyValue[7] = "";
        		this.aKeyValue[8] = "";
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	}  else if (sMethodName == "GetBranch") {
        	
        		this.cmbACCT_GUBN.set_index(0);
        		
        	} else if (sMethodName == "PROC00") {
        	
        		this.fn_Search();
                this.fnc_ViewSlipForm(this.sSLIP_NUMB, "REV", this.sUSERLAVEL, ""); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		
        	} else if (sMethodName == "PROC01") {
        		
        		this.fnc_Message("TMM041"); 
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSTAT_GUBN,dsSHRSTAT_GUBN,0";
        		arrParam[1] = "COMBO,cmbFORI_GUBN,dsFORI_GUBN,0";
        		arrParam[2] = "COMBO,cmbJOBS_GUBN,dsJOBS_GUBN,0";
        		arrParam[3] = "COMBO,Tab0.components[1].cmbGITA_GUBN,dsGITA_GUBN,0";
        		arrParam[4] = "COMBO,cmbSHRINCM_TYCD,dsSHRINCM_TYCD,0";
        		arrParam[5] = "COMBO,cmbINCM_TYCD,dsINCM_TYCD,0";
        		arrParam[6] = "COMBO,cmbRESI_GUBN,dsRESI_GUBN,0";
        		arrParam[7] = "COMBO,Tab0.components[0].cmbAPPL_RATE,dsAPPL_RATE,0";
        		arrParam[8] = "COMBO,Tab0.components[1].cmbAPPL_RATE,dsAPPL_RATE,0";
        		arrParam[9] = "COMBO,Tab0.components[2].cmbAPPL_RATE,dsAPPL_RATE,0";
        		arrParam[10] = "GRID,grdTA_INCMXM,dsFORI_GUBN,FORI_GUBN";
        		arrParam[11] = "GRID,grdTA_INCMXM,dsJOBS_GUBN,JOBS_GUBN";
        		arrParam[12] = "GRID,grdTA_INCMXM,dsGITA_GUBN,GITA_GUBN";
        		arrParam[13] = "GRID,grdTA_INCMXM,dsINCM_TYCD,INCM_TYCD";
        		arrParam[14] = "GRID,grdTA_INCMXM,dsRESI_GUBN,RESI_GUBN";

        		this.fnc_CommonCodeInnerBind(arrParam);		

        		// 소득자 구분에서 사용되는 것만 필터
        		this.dsINCM_TYCD.filter("REF1_FILD == '1'");
        		this.dsSHRINCM_TYCD.filter("REF1_FILD == '1' || COMD_CDNM == '전체'");
        		this.cmbSHRINCM_TYCD.set_index(0);
        		this.cmbSHRSTAT_GUBN.set_index(0);
        		
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbACCT_GUBN,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}
        	
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if (obj.name == "imgHelpOWNR_NAME" || obj.name == "edtOWNR_NAME"){

        		arrParam[0]  = "TXM0101";
        		arrParam[1]  = "";
        		arrParam[2]  = this.fnc_Trim(this.edtOWNR_NAME.value);
        		arrParam[3]  = "N";
        		arrParam[4]  = "edtOWNR_NAME";
        		arrParam[5]  = "edtCUST_CODE,edtOWNR_NAME,mskBIZR_NUMB,cmbINCM_TYCD,mskRERN_NUMB,cmbFORI_GUBN,"
        					 + "cmbRESI_GUBN,cmbJOBS_GUBN,edtDTL1_ADDR,edtDTL2_ADDR,mskPOST_NUMB,edtCUST_NAME";
        		arrParam[6]  = "0,1,2,4,5,6,"
        					 + "7,8,10,14,9,3";
        		arrParam[9]  = "fn_HelpAfter";
        		
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        this.fn_HelpAfter = function (sParam) {
        	
        	var arrParam 	= this.fnc_Split(sParam, ",");
        	var iRow 		= this.dsTA_INCMXM.rowposition;
        	var sOWNR_NAME 	= arrParam[1];
        	
        	if (this.fnc_Length(sOWNR_NAME) == 0) sOWNR_NAME = arrParam[3];

        	var sCUST_CODE = this.dsTA_INCMXM.getColumn(iRow, "CUST_CODE");
        	
        	this.dsTA_INCMXM.setColumn(iRow, "CUST_NAME", arrParam[3]);

        	// 소득자가 다를경우 탭 입력부분 초기화
        	if (sCUST_CODE != this.edtCUST_CODE.value) {
        	
        		this.dsTA_INCMXM.setColumn(iRow, "SUPP_KMAK", ""); //총지급액
        		this.dsTA_INCMXM.setColumn(iRow, "TAXX_RATE", ""); //세율
        		this.dsTA_INCMXM.setColumn(iRow, "POSS_DAYS", ""); //필요경비요율
        		this.dsTA_INCMXM.setColumn(iRow, "APPL_RATE", ""); //적용세율코드
        		this.dsTA_INCMXM.setColumn(iRow, "GITA_GUBN", ""); //기타소득구분
        		this.dsTA_INCMXM.setColumn(iRow, "SUPP_DATE", this.fnc_GetServerDateTime("DATE")); //지급일자
        		this.dsTA_INCMXM.setColumn(iRow, "PERS_YYMM", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6)); //소득귀속년월
        		this.dsTA_INCMXM.setColumn(iRow, "WORK_DCNT", ""); //근무일수
        		this.dsTA_INCMXM.setColumn(iRow, "NTAX_INCM", ""); //비과세소득
        		this.dsTA_INCMXM.setColumn(iRow, "GITA_RMR2", ""); //감면근거
        		this.dsTA_INCMXM.setColumn(iRow, "CUST_NAME", ""); //사업장명
        		
        	}

        // 	this.fnc_SetReadonly(this.Tab0.FA010010, false);
        // 	this.fnc_SetReadonly(this.Tab0.FA010020, false);
        // 	this.fnc_SetReadonly(this.Tab0.FA010030, false);

        	this.dsTA_INCMXM.setColumn(iRow, "INCM_TYCD", arrParam[4]);
        	this.dsTA_INCMXM_onrowposchanged();
        	
        	this.Tab0.components[this.Tab0.tabindex].cmbAPPL_RATE.set_index(0);
        	this.cmbAPPL_RATE_onchanged();
        	
        	this.Tab0.components[this.Tab0.tabindex].calSUPP_DATE.setFocus();
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*---------------------------------+
         |  소득자구분에 따른 탭 선택 제한  |
         +---------------------------------*/
        this.Tab0_canchange = function (obj,e) {
        	
        	var sINCM_TYCD = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "INCM_TYCD");
        	var sTEXT = this.Tab0.components[e.postindex].name;
        	if ( (sINCM_TYCD != sTEXT) && (sINCM_TYCD != '') ) return false;
        	
        }

        this.Tab0_onchanged = function(obj,e) {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        }

        /*-------------------+
         |  행 이동시 이벤트  |
         +-------------------*/
        this.dsTA_INCMXM_onrowposchanged = function (obj,e) {
        	
        	if (this.dsTA_INCMXM.rowposition < 0) return;
        	
        	var sINCM_TYCD = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "INCM_TYCD");
        	this.dsAPPL_RATE.filter("REF2_FILD == '" + sINCM_TYCD + "'");

        	var iTabIdx = 0;
        	
        	if (sINCM_TYCD == "FA010010") {		
        		iTabIdx = 0;
        	} else if (sINCM_TYCD == "FA010020") {		
        		iTabIdx = 1;
        	} else if (sINCM_TYCD == "FA010030") {		
        		iTabIdx = 2;
        	}	
        	
        	if (this.fnc_Length(this.fnc_Trim(this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "SLIP_NUMB"))) > 0) {
        		this.fnc_SetReadonly(this.btnCREATE_SLIP, true);
        		this.fnc_SetReadonly(this.btnDISPLAY_SLIP, false);
        		this.fnc_SetReadonly(this.btnDELETE_SLIP, false);
        		this.fnc_SetReadonly(this.Tab0.tabpages[iTabIdx], true);
        	} else {
        		this.fnc_SetReadonly(this.btnCREATE_SLIP, false);
        		this.fnc_SetReadonly(this.btnDISPLAY_SLIP, true);
        		this.fnc_SetReadonly(this.btnDELETE_SLIP, true);
        		this.fnc_SetReadonly(this.Tab0.tabpages[iTabIdx], false);
        	}

        	// 지급일자, 소득귀속년월, 소득자 수정불가
        	if (this.fnc_ToUpper(this.dsTA_INCMXM.getRowType(this.dsTA_INCMXM.rowposition)) != Dataset.ROWTYPE_INSERT) {
        		this.fnc_SetReadonly(this.cmbACCT_GUBN, true);
        		this.fnc_SetReadonly(this.imgHelpOWNR_NAME, true);
        		this.fnc_SetReadonly(this.edtOWNR_NAME, true);
        		
        		this.fnc_SetReadonly(this.Tab0.components[iTabIdx].calSUPP_DATE, true);
        		this.fnc_SetReadonly(this.Tab0.components[iTabIdx].divPERS_YYMM, true);
        	} else {
        		this.fnc_SetReadonly(this.cmbACCT_GUBN, false);
        		this.fnc_SetReadonly(this.imgHelpOWNR_NAME, false);
        		this.fnc_SetReadonly(this.edtOWNR_NAME, false);

        		this.fnc_SetReadonly(this.Tab0.components[iTabIdx].calSUPP_DATE, false);
        		this.fnc_SetReadonly(this.Tab0.components[iTabIdx].divPERS_YYMM, false);
        	}
        	
        	this.Tab0.set_tabindex(iTabIdx);
        		
        }

        this.dsTA_INCMXM_oncolumnchanged = function (obj,e) {
        		
        	var iRow 	= this.dsTA_INCMXM.rowposition;
        	var iSupp_Kmak = nexacro.toNumber(this.dsTA_INCMXM.getColumn(iRow, "SUPP_KMAK"));
        	var iTaxx_Rate = nexacro.toNumber(this.dsTA_INCMXM.getColumn(iRow, "TAXX_RATE"));
        	var iIncm_Taxx = 0;
        	var iComp_Sekm = 0;
        	var iNons_Sekm = 0;
        	var iInha_Taxx = 0;
        	var iGase_Tokm = 0;
        	var iSekm_Tokm = 0;
        	var iSehu_Tokm = 0;

        	if (e.columnid == "INCM_TYCD") {
        		this.dsTA_INCMXM_onrowposchanged();
        	}

        	var iIndex 	= this.Tab0.tabindex;
        	
        	if (iIndex == 0) {
        	
        		// 소득세, 주민세, 원천징수계 계산(소득세는 1000원 미만은 0원)
        		var sIncm_Taxx = Math.floor(nexacro.toNumber(iSupp_Kmak, 0) * nexacro.toNumber(iTaxx_Rate, 0));
        		iIncm_Taxx = Math.floor(nexacro.toNumber(sIncm_Taxx) * 0.1) * 10;

        		if (iIncm_Taxx < 1000) iIncm_Taxx = 0;

        		var sInha_Taxx1 = Math.floor(nexacro.toNumber(iIncm_Taxx, 0) * 0.1);
        		var sInha_Taxx2 = Math.floor(nexacro.toNumber(sInha_Taxx1, 0) * 0.1);
        		iInha_Taxx = sInha_Taxx2 * 10;
        		iSekm_Tokm = iIncm_Taxx + iInha_Taxx;
        		iSehu_Tokm = iSupp_Kmak - iSekm_Tokm;
        		
        		this.dsTA_INCMXM.setColumn(iRow, "INCM_TAXX", nexacro.toNumber(iIncm_Taxx, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "INHA_TAXX", nexacro.toNumber(iInha_Taxx, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "SEKM_TOKM", nexacro.toNumber(iSekm_Tokm, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "GASE_TOKM", nexacro.toNumber(iSupp_Kmak, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "SEHU_TOKM", nexacro.toNumber(iSehu_Tokm, 0));
        		
        	} else if (iIndex == 1) {

        		var iPoss_Days = nexacro.toNumber(this.dsTA_INCMXM.getColumn(iRow, "POSS_DAYS"));
        		var iOutl_Kmak = 0;

        		//국세청 기타소득구분 코드
        		var sGita_Gubn = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "GITA_GUBN");	
        		var iGita_Code = this.dsGITA_GUBN.getColumn(this.dsGITA_GUBN.findRow("COMD_CODE", sGita_Gubn), "REF1_FILD");
        		
        		if (iGita_Code == "60" || iGita_Code == "61" || iGita_Code == "63" || iGita_Code == "68") {
        			iOutl_Kmak = 0;
        		} else {
        			iOutl_Kmak = Math.floor(iSupp_Kmak * iPoss_Days);
        		}

        		iGase_Tokm = iSupp_Kmak - iOutl_Kmak;
        	
        		// 소득금액이 5만원 미만이거나 기타소득구분이 비과세(AC330050)이면 세금 없음
        		if (this.dsTA_INCMXM.getColumn(iRow, "GITA_GUBN") == "FA020040" || iGase_Tokm < 50000) {
        			iIncm_Taxx = 0;
        			iInha_Taxx = 0;
        			iNons_Sekm = 0;
        			iComp_Sekm = 0;
        			iSekm_Tokm = 0;
        		} else {
        			iIncm_Taxx = iGase_Tokm * iTaxx_Rate;
        			if (iIncm_Taxx < 1000) iIncm_Taxx = 0;

        			iComp_Sekm = nexacro.toNumber(this.dsTA_INCMXM.getColumn(iRow, "COMP_SEKM"));
        			iNons_Sekm = nexacro.toNumber(this.dsTA_INCMXM.getColumn(iRow, "NONS_SEKM"));
        			var sInha_Taxx1 = Math.floor((iIncm_Taxx + iComp_Sekm + iNons_Sekm) * 0.1);
        			var sInha_Taxx2 = Math.floor(sInha_Taxx1 * 0.1);
        			iInha_Taxx = sInha_Taxx2 * 10;
        			iSekm_Tokm = iIncm_Taxx + iInha_Taxx + iComp_Sekm + iNons_Sekm;
        		}

        		iSehu_Tokm = iSupp_Kmak - iSekm_Tokm;

        		this.dsTA_INCMXM.setColumn(iRow, "OUTL_KMAK", nexacro.toNumber(iOutl_Kmak, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "GASE_TOKM", nexacro.toNumber(iGase_Tokm, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "INCM_TAXX", nexacro.toNumber(iIncm_Taxx, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "COMP_SEKM", nexacro.toNumber(iComp_Sekm, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "NONS_SEKM", nexacro.toNumber(iNons_Sekm, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "INHA_TAXX", nexacro.toNumber(iInha_Taxx, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "SEKM_TOKM", nexacro.toNumber(iSekm_Tokm, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "SEHU_TOKM", nexacro.toNumber(iSehu_Tokm, 0));
        		
        	} else if (iIndex == 2) {
        	
        		var sCode = this.dsTA_INCMXM.getColumn(iRow, "APPL_RATE");
        		var iSubRef4 = this.dsAPPL_RATE.getColumn(this.dsAPPL_RATE.findRow("COMD_CODE", sCode), "REF4_FILD");
        		var iSubRef3 = this.dsAPPL_RATE.getColumn(this.dsAPPL_RATE.findRow("COMD_CODE", sCode), "REF3_FILD");
        		var iWork_Dcnt = nexacro.toNumber(this.dsTA_INCMXM.getColumn(iRow, "WORK_DCNT"));
        		// var iNtax_Incm = toNumber(dsTA_INCMXM.getColumn(iRow, "NTAX_INCM"));
        		var iNtax_Incm = Math.floor(nexacro.toNumber(iSubRef4) * nexacro.toNumber(iWork_Dcnt));
        		iGase_Tokm = iSupp_Kmak - Math.floor(nexacro.toNumber(iSubRef4) * nexacro.toNumber(iWork_Dcnt));

        		// 소득금액이 0원 미만일 경우 소득세, 주민세, 원천징수계는 0원
        		if (iGase_Tokm <= 0) {
        			iIncm_Taxx = 0;
        			iInha_Taxx = 0;
        			iSekm_Tokm = 0;
        		} else {
        			var iSanc_Sekm = Math.floor(nexacro.toNumber(iGase_Tokm) * nexacro.toNumber(iTaxx_Rate));
        			var iSekm_Gnje = Math.floor(nexacro.toNumber(iSanc_Sekm) * nexacro.toNumber(iSubRef3));
        			iIncm_Taxx = iSanc_Sekm - iSekm_Gnje;
        			if (iIncm_Taxx < 1000) iIncm_Taxx = 0;

        			var sInha_Taxx1 = Math.floor(nexacro.toNumber(iIncm_Taxx) * 0.1);
        			var sInha_Taxx2 = Math.floor(sInha_Taxx1 * 0.1);
        			iInha_Taxx = sInha_Taxx2 * 10;
        			iSekm_Tokm = iIncm_Taxx + iInha_Taxx;
        		}

        		iSehu_Tokm = iSupp_Kmak - iSekm_Tokm + iNtax_Incm;
        		this.dsTA_INCMXM.setColumn(iRow, "NTAX_INCM", nexacro.toNumber(iNtax_Incm, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "GASE_TOKM", nexacro.toNumber(iGase_Tokm, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "INCM_TAXX", nexacro.toNumber(iIncm_Taxx, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "INHA_TAXX", nexacro.toNumber(iInha_Taxx, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "SEKM_TOKM", nexacro.toNumber(iSekm_Tokm, 0));
        		this.dsTA_INCMXM.setColumn(iRow, "SEHU_TOKM", nexacro.toNumber(iSehu_Tokm, 0));
        	}
        	
        }

        /*------------------------+
         |  적용세율 변경시 이벤트 |
         +------------------------*/
        this.cmbAPPL_RATE_onchanged = function (obj,e) {

        	//trace("cmbAPPL_RATE_onchanged");	
        	var iRow = this.dsTA_INCMXM.rowposition;
        	var sPostValue = this.fnc_Trim(this.dsTA_INCMXM.getColumn(iRow, "APPL_RATE"));

        	// 현재 선택한 적용세율 코드의 보조필드1 값을  세율에 적용
        	var iAPPL_RATE = this.dsAPPL_RATE.getColumn(this.dsAPPL_RATE.findRowExpr("COMD_CODE == '" + sPostValue + "'"), "REF1_FILD");
        	this.dsTA_INCMXM.setColumn(iRow, "TAXX_RATE", iAPPL_RATE);

        	//if (this.Tab0.tabindex == 1) {
        	if (this.fnc_Trim(this.dsTA_INCMXM.getColumn(iRow, "INCM_TYCD")) == "FA010020") {
        		// 현재 선택한 적용세율 코드의 보조필드3 값을 필요경비요율에 적용
        		var iPoss_Days = this.dsAPPL_RATE.getColumn(this.dsAPPL_RATE.findRowExpr("COMD_CODE == '" + sPostValue + "'"), "REF3_FILD");
        		this.dsTA_INCMXM.setColumn(iRow, "POSS_DAYS", iPoss_Days);
        	}
        	
        }

        /*-----------+
         |  전표조회 |
         +-----------*/
        this.grdTA_INCMXM_oncelldblclick = function(obj,e) {

        	this.fn_SlipPopUp();
        	
        }

        // 전표팝업
        this.fn_SlipPopUp = function () {
            
        	// 전표번호
        // 	if (this.fnc_DatasetChangeCheck("dsTA_INCMXM")) {
        // 		return this.fnc_Message("TMM015", "전표조회");
        // 	}
        	
        	var gubun = "REV";
        	var sSlipNumb = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "SLIP_NUMB");
        	
        	if (this.fnc_Length(sSlipNumb) < 14) return;

        	this.fnc_ViewSlipForm(sSlipNumb, gubun, this.sUSERLAVEL); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	
        	//this.fn_Search();
        	
        }

        this.Tab0_FA010020_mskGASE_TOKM_onkillfocus = function (obj,e) {
        	// 소득세 및 주민세 계산
        	// Tab0.FA010020.mskINCM_TAXX.Value = Truncate(toInteger(Tab0.FA010020.mskGASE_TOKM.Value) * 0.2);
        	// Tab0.FA010020.mskINHA_TAXX.Value = Truncate(Truncate(toInteger(Tab0.FA010020.mskGASE_TOKM.Value) * 0.2) * 0.1);

        	var iRow = this.dsTA_INCMXM.rowposition;

        	this.dsTA_INCMXM.setColumn(iRow, "INCM_TAXX", Math.floor(parseInt(this.Tab0.FA010020.mskGASE_TOKM.value) * 0.2));
        	this.dsTA_INCMXM.setColumn(iRow, "INHA_TAXX", Math.floor(Math.floor(parseInt(this.Tab0.FA010020.mskGASE_TOKM.value) * 0.2) * 0.1));

        	var SEKM_TOKM = nexacro.toNumber(this.dsTA_INCMXM.getColumn(iRow, "INCM_TAXX")) + nexacro.toNumber(this.dsTA_INCMXM.getColumn(iRow, "INHA_TAXX"));
        	var SEHU_TOKM = nexacro.toNumber(this.dsTA_INCMXM.getColumn(iRow, "SUPP_KMAK")) - nexacro.toNumber(SEKM_TOKM);
        	this.dsTA_INCMXM.setColumn(iRow, "SEKM_TOKM", SEKM_TOKM);
        	this.dsTA_INCMXM.setColumn(iRow, "SEHU_TOKM", SEHU_TOKM);
        }

        // 사업소득양식 다운로드
        this.btnDown_onclick = function (obj,e) {

        	this.fnc_FileDownLoad("", "", "", this.fnc_Trim(this.sPACKAGENAME + "01"));

        }

        // 사업소득엑셀업로드
        this.btnUp_onclick = function (obj,e) {
        	
        	/* 엑셀 업로드 체크처리 */
        	if (!this.fn_ExcelUploadCheck()) return;
        	
        	this.fnc_DatasetClear("dsTA_INCMXM");
        	this.fnc_ExcelUpload("dsTA_INCMXM", "Sheet1", "A2", "fn_ExcelSuccess");

        }

        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	
        	this.dsTA_INCMXM.set_enableevent(false);
        	this.dsTA_INCMXM.set_updatecontrol(false);
        	
        	for (var i = 0; i < this.objDsImportTemp.getRowCount(); i++) {
        		var iRow = this.dsTA_INCMXM.addRow();
        		var nRow = this.dsTA_CUSTXM.findRowExpr("CUST_CODE=='" + this.fnc_Trim(this.objDsImportTemp.getColumn(i, 0)) + "'");

        		this.dsTA_INCMXM_onrowposchanged();
        		this.dsTA_INCMXM.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		
        		this.dsTA_INCMXM.setColumn(iRow, "ACCT_GUBN", "100"); 				//사업장
        		this.dsTA_INCMXM.setColumn(iRow, "SLIP_INPU", this.sSLIP_INPU); 	//전표등록구분
        		this.dsTA_INCMXM.setColumn(iRow, "CUST_CODE", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 0))); 			//소득자번호
        		this.dsTA_INCMXM.setColumn(iRow, "INCM_TYCD", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "INCM_TYCD"))); 	//소득자구분

        		this.dsTA_INCMXM.setColumn(iRow, "GITA_SEQX", "0"); 				//소득내역작성단계
        		this.dsTA_INCMXM.setColumn(iRow, "PERS_YYMM", this.fnc_SubStr(this.fnc_Replace(this.fnc_Trim(this.objDsImportTemp.getColumn(i, 1)), "-", ""), 0, 6)); //소득귀속년월
        		this.dsTA_INCMXM.setColumn(iRow, "SUPP_DATE", this.fnc_Replace(this.fnc_Trim(this.objDsImportTemp.getColumn(i, 2)), "-", "")); //지급일자
        		this.dsTA_INCMXM.setColumn(iRow, "SUPP_KMAK", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 3))); //총지급액
        		this.dsTA_INCMXM.setColumn(iRow, "APPL_RATE", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 4))); //적용세율코드

        		this.dsAPPL_RATE.filter("REF2_FILD == '" + this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "INCM_TYCD")) + "'");
        		this.cmbAPPL_RATE_onchanged(); //적용세율 변경 이벤트 발생
        		
        		/* 계산 */
        		var e = new nexacro.DSColChangeEventInfo();
        		e.newrow = iRow;
        		this.dsTA_INCMXM_oncolumnchanged(this.dsTA_INCMXM, e);
        		
        		
        		this.dsTA_INCMXM.setColumn(iRow, "REMK_NOTE", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 5))); //소득내역비고
        		//this.dsTA_INCMXM.setColumn(iRow, "PAYX_GUBN", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 6))); //급여구분

        		this.dsTA_INCMXM.setColumn(iRow, "TAKE_DEPT", application.GBL_DEPTCD); //담당부서코드
        		this.dsTA_INCMXM.setColumn(iRow, "DEPT_NAME", application.GBL_DEPTNM); //담당부서명
        		this.dsTA_INCMXM.setColumn(iRow, "TAKE_USER", application.GBL_EMPLNO); //담당자 사원번호
        		this.dsTA_INCMXM.setColumn(iRow, "EMPL_NAME", application.GBL_USERNM); //담당자명
        		this.dsTA_INCMXM.setColumn(iRow, "RERN_NUMB", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "RERN_NUMB"))); //주민번호
        		
        		this.dsTA_INCMXM.setColumn(iRow, "OWNR_NAME", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "OWNR_NAME"))); //소득자명
        		this.dsTA_INCMXM.setColumn(iRow, "BIZR_NUMB", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "BIZR_NUMB"))); //사업자번호
        		this.dsTA_INCMXM.setColumn(iRow, "CUST_NAME", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "CUST_NAME"))); //사업장명
        		this.dsTA_INCMXM.setColumn(iRow, "FORI_GUBN", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "FORI_GUBN"))); //내외국인구분
        		this.dsTA_INCMXM.setColumn(iRow, "RESI_GUBN", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "RESI_GUBN"))); //거주구분
        		this.dsTA_INCMXM.setColumn(iRow, "JOBS_GUBN", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "JOBS_GUBN"))); //직업구분
        		this.dsTA_INCMXM.setColumn(iRow, "POST_NUMB", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "POST_NUMB"))); //우편번호
        // 		this.dsTA_INCMXM.setColumn(iRow, "COMP_POST", this.fnc_SubStr(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "COMP_POST")), 0, 3)); //사업장우편번호앞3
        // 		this.dsTA_INCMXM.setColumn(iRow, "COMP_PST2", this.fnc_SubStr(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "COMP_POST")), 3, 3)); //사업장우편번호뒷3
        		this.dsTA_INCMXM.setColumn(iRow, "DTL1_ADDR", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "ADDR_DESC"))); //주소
        		this.dsTA_INCMXM.setColumn(iRow, "DTL2_ADDR", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "DTL1_ADDR"))); //상세주소
        // 		this.dsTA_INCMXM.setColumn(iRow, "COMP_ADD1", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "COMP_ADD2"))); //사업장주소
        // 		this.dsTA_INCMXM.setColumn(iRow, "COMP_ADD2", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "COMP_ADD2"))); //사업장상세주소
        	}
        	this.objDsImportTemp.clear();
        	
        	this.dsTA_INCMXM.set_updatecontrol(true);
        	this.dsTA_INCMXM.set_enableevent(true);
        	
        	this.dsTA_INCMXM.set_rowposition(0);
        	this.grdTA_INCMXM.setFocus();

        	this.stInformation.set_text("[" + (this.dsTA_INCMXM.getRowCount() + "]건의 데이터를 로드 했습니다."));
        	
        }

        // 기타소득양식 다운로드
        this.btnDown2_onclick = function (obj,e) {

        	this.fnc_FileDownLoad("", "", "", this.fnc_Trim(this.sPACKAGENAME + "02"));
        	
        }

        // 기타소득엑셀업로드
        this.btnUp2_onclick = function (obj,e) {
        	
        	/* 엑셀 업로드 체크처리 */
        	if (!this.fn_ExcelUploadCheck()) return;
        	
        	this.fnc_DatasetClear("dsTA_INCMXM");
        	this.fnc_ExcelUpload("dsTA_INCMXM", "Sheet1", "A2", "fn_ExcelSuccess2");

        }

        this.fn_ExcelSuccess2 = function (obj,e) {

        	this.setWaitCursor(false);
        	
        	this.dsTA_INCMXM.set_enableevent(false);
        	this.dsTA_INCMXM.set_updatecontrol(false);
        	//trace(this.objDsImportTemp.getRowCount());
        	for (var i = 0; i < this.objDsImportTemp.getRowCount(); i++) {
        		var iRow = this.dsTA_INCMXM.addRow();
        		var nRow = this.dsTA_CUSTXM.findRowExpr("CUST_CODE=='" + this.fnc_Trim(this.objDsImportTemp.getColumn(i, 0)) + "'");
        		
        		this.dsTA_INCMXM_onrowposchanged();
        		this.dsTA_INCMXM.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		
        		this.dsTA_INCMXM.setColumn(iRow, "ACCT_GUBN", "100"); 				//사업장
        		this.dsTA_INCMXM.setColumn(iRow, "SLIP_INPU", this.sSLIP_INPU); 	//전표등록구분
        		this.dsTA_INCMXM.setColumn(iRow, "CUST_CODE", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 0))); 			//소득자번호
        		this.dsTA_INCMXM.setColumn(iRow, "INCM_TYCD", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "INCM_TYCD"))); 	//소득자구분
        	
        		this.dsTA_INCMXM.setColumn(iRow, "GITA_SEQX", "0"); 				//소득내역작성단계
        		this.dsTA_INCMXM.setColumn(iRow, "PERS_YYMM", this.fnc_SubStr( this.fcn_Replace(this.fnc_Trim(this.objDsImportTemp.getColumn(i, 1)), "-", ""), 0, 6)); //소득귀속년월
        		this.dsTA_INCMXM.setColumn(iRow, "SUPP_DATE", this.fcn_Replace(this.fnc_Trim(this.objDsImportTemp.getColumn(i, 2)), "-", "")); //지급일자
        		this.dsTA_INCMXM.setColumn(iRow, "SUPP_KMAK", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 3))); //총지급액
        		this.dsTA_INCMXM.setColumn(iRow, "APPL_RATE", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 4))); //적용세율코드
        		this.dsTA_INCMXM.setColumn(iRow, "GITA_GUBN", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 5))); //기타소득구분
        		this.dsTA_INCMXM.setColumn(iRow, "OUTL_KMAK", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 6))); //필요경비
        		this.dsTA_INCMXM.setColumn(iRow, "COMP_SEKM", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 7))); //법인세
        		this.dsTA_INCMXM.setColumn(iRow, "NONS_SEKM", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 8))); //농어촌특별세

        		this.dsAPPL_RATE.filter("REF2_FILD == '" + this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "INCM_TYCD")) + "'");
        		this.cmbAPPL_RATE_onchanged(); //적용세율 변경 이벤트 발생

        		/* 계산 */
        		var e = new nexacro.DSColChangeEventInfo();
        		e.newrow = iRow;
        		this.dsTA_INCMXM_oncolumnchanged(this.dsTA_INCMXM, e);
        		
        		
        		this.dsTA_INCMXM.setColumn(iRow, "REMK_NOTE", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 9))); //소득내역비고
        		this.dsTA_INCMXM.setColumn(iRow, "GITA_RMR2", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 10))); //감면근거
        		//this.dsTA_INCMXM.setColumn(iRow, "PAYX_GUBN", this.fnc_Trim(this.objDsImportTemp.getColumn(i, 11))); //급여구분

        		this.dsTA_INCMXM.setColumn(iRow, "TAKE_DEPT", application.GBL_DEPTCD); //담당부서코드
        		this.dsTA_INCMXM.setColumn(iRow, "DEPT_NAME", application.GBL_DEPTNM); //담당부서명
        		this.dsTA_INCMXM.setColumn(iRow, "TAKE_USER", application.GBL_EMPLNO); //담당자 사원번호
        		this.dsTA_INCMXM.setColumn(iRow, "EMPL_NAME", application.GBL_USERNM); //담당자명
        		this.dsTA_INCMXM.setColumn(iRow, "RERN_NUMB", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "RERN_NUMB"))); //주민번호
        		
        		this.dsTA_INCMXM.setColumn(iRow, "OWNR_NAME", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "OWNR_NAME"))); //소득자명
        		this.dsTA_INCMXM.setColumn(iRow, "BIZR_NUMB", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "BIZR_NUMB"))); //사업자번호
        		this.dsTA_INCMXM.setColumn(iRow, "CUST_NAME", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "CUST_NAME"))); //사업장명
        		this.dsTA_INCMXM.setColumn(iRow, "FORI_GUBN", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "FORI_GUBN"))); //내외국인구분
        		this.dsTA_INCMXM.setColumn(iRow, "RESI_GUBN", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "RESI_GUBN"))); //거주구분
        		this.dsTA_INCMXM.setColumn(iRow, "JOBS_GUBN", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "JOBS_GUBN"))); //직업구분
        		this.dsTA_INCMXM.setColumn(iRow, "POST_NUMB", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "POST_NUMB"))); //우편번호
        //		this.dsTA_INCMXM.setColumn(iRow, "COMP_POST", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "COMP_POST"))); //사업장우편번호
        		this.dsTA_INCMXM.setColumn(iRow, "DTL1_ADDR", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "ADDR_DESC"))); //주소
        		this.dsTA_INCMXM.setColumn(iRow, "DTL2_ADDR", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "DTL1_ADDR"))); //상세주소
        // 		this.dsTA_INCMXM.setColumn(iRow, "COMP_ADD1", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "COMP_ADD2"))); //사업장주소
        // 		this.dsTA_INCMXM.setColumn(iRow, "COMP_ADD2", this.fnc_Trim(this.dsTA_CUSTXM.getColumn(nRow, "COMP_ADD2"))); //사업장상세주소
        		
        	}
        	this.objDsImportTemp.clear();
        	
        	this.dsTA_INCMXM.set_updatecontrol(true);
        	this.dsTA_INCMXM.set_enableevent(true);
        	
        	this.dsTA_INCMXM.set_rowposition(0);
        	this.grdTA_INCMXM.setFocus();
        	
        	this.stInformation.set_text("[" + (this.dsTA_INCMXM.getRowCount() + "]건의 데이터를 로드 했습니다."));
        	
        	
        }

        /*-----------------------+
         |  엑셀 업로드 전 처리 ! |
         +------------------------*/
        this.fn_ExcelUploadCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_INCMXM")) return this.fnc_Message("TMM023");
        	
        	return true;
        	
        }

        /*-----------------------+
         |  소득자(거래처) 조회  |
         +-----------------------*/
        this.fn_Search01 = function () {

        	this.fnc_DatasetClear("dsTA_CUSTXM");
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_CUSTXM=dsTA_CUSTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*------------------------+
         | 전표처리 버튼 클릭 시  |
         +------------------------*/
        this.btnCREATE_SLIP_onclick = function (obj,e) {
        	
        	if (!this.fn_CreateSlipItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "INCM_IDXX");
        	
            var sMethodName = "PROC00";
            var sInDataSet 	= "dsTA_INCMXM_SLIP=dsTA_INCMXM_SLIP:A";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_INCMXM.setFocus();
            	
        }

        /*-----------------------+
         | 전표삭제 버튼 클릭시  |
         +-----------------------*/
        this.btnDELETE_SLIP_onclick = function(obj,e) {
        	
        	if (!this.fn_DeleteSlipItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsTA_INCMXM.getColumn(this.dsTA_INCMXM.rowposition, "INCM_IDXX");
        	
            var sMethodName = "PROC01";
            var sInDataSet 	= "";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_INCMXM.setFocus();
            
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_INCMXM.addEventHandler("onrowposchanged", this.dsTA_INCMXM_onrowposchanged, this);
            this.dsTA_INCMXM.addEventHandler("oncolumnchanged", this.dsTA_INCMXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_INCMXM.addEventHandler("oncelldblclick", this.grdTA_INCMXM_oncelldblclick, this);
            this.Tab0.addEventHandler("canchange", this.Tab0_canchange, this);
            this.Tab0.addEventHandler("onchanged", this.Tab0_onchanged, this);
            this.Tab0.FA010010.calSUPP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010010.mskINCM_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010010.mskINCM_TAXX.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010010.mskINHA_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010010.mskINHA_TAXX.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010010.mskSUPP_KMAK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010010.mskSUPP_KMAK.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010010.mskSEKM_TOKM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010010.mskSEKM_TOKM.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010010.edtREMK_NOTE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010010.cmbAPPL_RATE.addEventHandler("onitemchanged", this.cmbAPPL_RATE_onchanged, this);
            this.Tab0.FA010010.cmbAPPL_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010010.mskSEHU_TOKM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010010.mskSEHU_TOKM.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010010.mskSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010010.mskSLIP_NUMB.addEventHandler("oneditclick", this.fn_SlipPopUp, this);
            this.Tab0.FA010010.mskSLIP_NUMB.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010020.cmbAPPL_RATE.addEventHandler("onitemchanged", this.cmbAPPL_RATE_onchanged, this);
            this.Tab0.FA010020.cmbAPPL_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.mskINCM_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.mskSEKM_TOKM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.edtGITA_RMR2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.mskSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.mskSLIP_NUMB.addEventHandler("oneditclick", this.fn_SlipPopUp, this);
            this.Tab0.FA010020.mskINHA_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.mskGASE_TOKM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.mskGASE_TOKM.addEventHandler("onkillfocus", this.Tab0_FA010020_mskGASE_TOKM_onkillfocus, this);
            this.Tab0.FA010020.mskSUPP_KMAK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.mskSUPP_KMAK.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010020.mskNONS_SEKM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.mskOUTL_KAMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.edtREMK_NOTE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.mskSEHU_TOKM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.mskCOMP_SEKM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.cmbGITA_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010020.calSUPP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskNTAX_INCM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskNTAX_INCM.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010030.cmbAPPL_RATE.addEventHandler("onitemchanged", this.cmbAPPL_RATE_onchanged, this);
            this.Tab0.FA010030.cmbAPPL_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskSEHU_TOKM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskSEHU_TOKM.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010030.mskSUPP_KMAK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskSUPP_KMAK.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010030.mskSEKM_TOKM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskSEKM_TOKM.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010030.mskINHA_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskINHA_TAXX.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010030.mskINCM_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskINCM_TAXX.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010030.calSUPP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.edtREMK_NOTE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskWORK_DCNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskWORK_DCNT.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.Tab0.FA010030.mskSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Tab0.FA010030.mskSLIP_NUMB.addEventHandler("oneditclick", this.fn_SlipPopUp, this);
            this.edtTAKE_DEPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSUPP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbPAYX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSUPP_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSUPP_EDDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRINCM_TYCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRINCM_TYCD.addEventHandler("onitemchanged", this.cmbSHRINCM_TYCD_onitemchanged, this);
            this.edtSHROWNR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSTAT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnDown.addEventHandler("onclick", this.btnDown_onclick, this);
            this.btnUp.addEventHandler("onclick", this.btnUp_onclick, this);
            this.btnDown2.addEventHandler("onclick", this.btnDown2_onclick, this);
            this.btnUp2.addEventHandler("onclick", this.btnUp2_onclick, this);
            this.btnCREATE_SLIP.addEventHandler("onclick", this.btnCREATE_SLIP_onclick, this);
            this.btnDISPLAY_SLIP.addEventHandler("onclick", this.fn_SlipPopUp, this);
            this.edtOWNR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOWNR_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBIZR_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDTL2_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbJOBS_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbINCM_TYCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTAKE_USER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDTL1_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbRESI_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbFORI_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpOWNR_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.mskRERN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtAPPL_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtAPPL_RATE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btnDELETE_SLIP.addEventHandler("onclick", this.btnDELETE_SLIP_onclick, this);
            this.divSHRPERS_STYM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divSHRPERS_EDYM.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMD0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
