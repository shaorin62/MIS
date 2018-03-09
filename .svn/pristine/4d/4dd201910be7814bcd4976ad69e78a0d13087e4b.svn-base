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
                this.set_name("FAME0050");
                this.set_titletext("초기이월잔액(관리항목)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_MAMNTD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VACD\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_VANM\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CHAX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_CHAX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_DAEX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">CURR_GUBN</Col><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_MAMNTM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" type=\"STRING\" size=\"4\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_CHAX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_CHAX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_DAEX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">회계단위</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0001</Col></Row><Row><Col id=\"DSNAME\">dsCOND_CODE</Col><Col id=\"COMBOID\">FAM0002</Col><Col id=\"PARAM\">관리구분</Col><Col id=\"USEYSNO\"/><Col id=\"HEADFLAG\">E</Col></Row><Row><Col id=\"DSNAME\">dsSHRCOND_CODE</Col><Col id=\"COMBOID\">FAM0002</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">관리구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ACCTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static2", "absolute", "8", "133", "137", "21", null, null, this);
            obj.set_text("초기이월잔액(계정)");
            obj.set_cssclass("styFormItemTitle");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "8", "397", "169", "21", null, null, this);
            obj.set_text("초기이월잔액(관리항목)");
            obj.set_cssclass("styFormItemTitle");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("stInformationM", "absolute", "163", "133", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("10");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MAMNTD", "absolute", "8", "418", null, null, "25", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_MAMNTD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_tooltiptype("default");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"67\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"158\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"회계단위\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"사업장\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"계정과목\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"계정명\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"화폐단위\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"관리코드\"/><Cell col=\"6\" displaytype=\"text\" style=\"background: ;\" text=\"관리항목값\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"관리항목값명\"/><Cell col=\"8\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"차변금액\"/><Cell col=\"9\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"대변금액\"/><Cell col=\"10\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"외화차변\"/><Cell col=\"11\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"외화대변\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: left;\" text=\"bind:ACCT_UNIT\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCT_GUBN\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ACCT_INTL\" autosizecol=\"none\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align: left;\" text=\"bind:ACCT_NAME\" editlimit=\"2\" expandshow=\"hide\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" style=\"align: center;\" text=\"bind:CURR_GUBN\" editlimit=\"10\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align: left;\" text=\"bind:COND_CODE\" editlimit=\"4\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;\" text=\"bind:COND_VACD\" editlimit=\"50\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'normal' : 'none'\" style=\"align: left;\" text=\"bind:COND_VANM\" editlimit=\"100\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SLIP_CHAX\" editlimit=\"17\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SLIP_DAEX\" editlimit=\"17\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:FORI_CHAX\" editlimit=\"17\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:FORI_DAEX\" editlimit=\"17\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM_FORI_DAEX\" expr=\"expr:dataset.getSum(&quot;SLIP_CHAX&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_DAEX&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;FORI_CHAX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;FORI_DAEX&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_MAMNTM", "absolute", "8", "154", null, "239", "25", null, this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsTA_MAMNTM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_selecttype("row");
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_tooltiptype("default");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\"/><Column size=\"159\"/><Column size=\"82\"/><Column size=\"238\"/><Column size=\"102\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"회계단위\"/><Cell col=\"1\" displaytype=\"text\" text=\"사업장\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"3\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"4\" displaytype=\"text\" text=\"화폐단위\"/><Cell col=\"5\" displaytype=\"text\" text=\"차변금액\"/><Cell col=\"6\" displaytype=\"text\" text=\"대변금액\"/><Cell col=\"7\" displaytype=\"text\" text=\"외화차변\"/><Cell col=\"8\" displaytype=\"text\" text=\"외화대변\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" style=\"align: center;\" text=\"bind:ACCT_UNIT\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACCT_GUBN\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ACCT_INTL\" autosizecol=\"none\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" style=\"align: center;\" text=\"bind:CURR_GUBN\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SLIP_CHAX\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SLIP_DAEX\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:FORI_CHAX\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:FORI_DAEX\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_CHAX&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_DAEX&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;FORI_CHAX&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;FORI_DAEX&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformationD", "absolute", "189", "397", "192", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("6");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "621", "12", "17", "12", null, null, this);
            obj.set_taborder("14");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static0", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOND_VANM", "absolute", "438", "97", "160", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOND_VACD", "absolute", "333", "97", "80", "21", null, null, this);
            obj.set_tabstop("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_maxlength("4");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_readonly("true");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "265", "97", "76", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("관리항목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCOND_CODE", "absolute", "96", "97", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static3", "absolute", "28", "97", "76", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("관리구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "615", "71", "160", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "510", "71", "80", "21", null, null, this);
            obj.set_tabstop("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_maxlength("10");
            obj.set_readonly("true");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "442", "71", "76", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "265", "71", "76", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("회계연도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpSHRACCT_INTL", "absolute", "592", "71", "22", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpSHRCOND_VACD", "absolute", "415", "97", "22", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileDown", "absolute", "8", "35", "98", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("양식다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload", "absolute", "109", "35", "86", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("초기이월잔액(관리항목)");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("31");
            obj.set_text("홈 > 재무관리 > 기본정보 > 초기이월잔액(관리항목)");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("32");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("41");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("42");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "236", "61", "40", "67", null, null, this);
            obj.set_taborder("44");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "350", "118", "38", "10", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "350", "92", "102", "5", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "350", "61", "38", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "151", "137", "10", "13", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "573", "393", "80", "25", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "177", "401", "10", "13", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_YEAR", "absolute", "334", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("초기이월잔액(관리항목)");
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
        this.addIncludeScript("FAME0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAME0050.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAME0050 초기이월잔액(관리항목)
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		양현덕		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /**************************
         *  공통 Script Include  *
         **************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTTTTTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAME0050"; 
        this.sXlsUpload   = "Y";          //엑셀 업로드시 팝업 체크

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
         *                                         공통 Event 처리 부분                                  *
         ***************************************************************************************************/
         /*--------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.calSHRACCT_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4));
        	this.cmbSHRCOND_CODE_onitemchanged();
        	
        	this.cmbSHRACCT_UNIT.setFocus();
        	
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

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_MAMNTM,dsTA_MAMNTD"); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_MAMNTM=dsTA_MAMNTM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAMNTM.setFocus();
        	
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	
        	if (this.dsTA_MAMNTM.getRowCount() < 1) {
        		this.fnc_Message("TMM032");
        		return;
        	}

        	var iRow = this.dsTA_MAMNTD.insertRow(this.dsTA_MAMNTD.rowposition + 1);
        	var mRow = this.dsTA_MAMNTM.rowposition;

        	this.dsTA_MAMNTD.setColumn(iRow, "ACCT_DATE", this.dsTA_MAMNTM.getColumn(mRow, "ACCT_DATE"));
        	this.dsTA_MAMNTD.setColumn(iRow, "ACCT_GUBN", this.dsTA_MAMNTM.getColumn(mRow, "ACCT_GUBN"));
        	this.dsTA_MAMNTD.setColumn(iRow, "ACCT_UNIT", this.dsTA_MAMNTM.getColumn(mRow, "ACCT_UNIT"));
        	this.dsTA_MAMNTD.setColumn(iRow, "ACCT_INTL", this.dsTA_MAMNTM.getColumn(mRow, "ACCT_INTL"));
        	this.dsTA_MAMNTD.setColumn(iRow, "ACCT_NAME", this.dsTA_MAMNTM.getColumn(mRow, "ACCT_NAME"));
        	this.dsTA_MAMNTD.setColumn(iRow, "CURR_GUBN", this.dsTA_MAMNTM.getColumn(mRow, "CURR_GUBN"));
        	this.dsTA_MAMNTD.setColumn(iRow, "SLIP_CHAX", 0);
        	this.dsTA_MAMNTD.setColumn(iRow, "SLIP_DAEX", 0);
        	this.dsTA_MAMNTD.setColumn(iRow, "FORI_CHAX", 0);
        	this.dsTA_MAMNTD.setColumn(iRow, "FORI_DAEX", 0);

        	this.grdTA_MAMNTM.setFocus();

        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時   |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTA_MAMNTD.deleteRow(this.dsTA_MAMNTD.rowposition);
        	this.grdTA_MAMNTD.setFocus();
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj,e) {
        	this.fnc_DataSetCancel("dsTA_MAMNTM,dsTA_MAMNTD");
        	this.grdTA_MAMNTD.setFocus();
        }

        /*-------------------------+
         |  07.저장 버튼 클릭 時 |
         --------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTA_MAMNTD=dsTA_MAMNTD:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_MAMNTD.setFocus();
        	
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_MAMNTD", this);
        		
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때   |
         +-----------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
         this.fn_SearchItemCheck = function () {

        	if ((this.fnc_DatasetChangeCheck("dsTA_MAMNTD"))) return this.fnc_Message("TMM023");
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRACCT_YEAR.value)) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계연도", this.calSHRACCT_YEAR);	
        	}
        	
        	return true;
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTA_MAMNTD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	if (this.dsTA_MAMNTD.rowposition < 0) return false;
        	
        	var sQuestionText  = "계정과목 : (" + this.dsTA_MAMNTD.getColumn(this.dsTA_MAMNTD.rowposition, "ACCT_INTL") + ")";
        		sQuestionText += ", 계정명 : (" + this.fnc_Trim(this.dsTA_MAMNTD.getColumn(this.dsTA_MAMNTD.rowposition, "ACCT_NAME"))+")";
        		sQuestionText += ", 관리항목값 : (" + this.fnc_Trim(this.dsTA_MAMNTD.getColumn(this.dsTA_MAMNTD.rowposition, "COND_VANM"))+")";
        		
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_MAMNTD")) {
        		this.fnc_Message("TMM003");
        		return false;		
        	}
        	
        	this.fn_Search_Acct();	//기표 계정코드 조회
        		
        	for (var i = 0; i < this.dsTA_MAMNTD.getRowCount(); i++) {
        		
        		if (this.dsTA_MAMNTD.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;
        			
        		var sAcct_Intl = this.dsTA_MAMNTD.getColumn(i, "ACCT_INTL");
        		
        		if (this.dsTA_ACCTXM.getCaseCount("ACCT_INTL == '" + sAcct_Intl + "'") < 1) {
        			return this.fnc_CheckPostAction("TMM300", "전표등록 불가능한 계정과목입니다. [" + sAcct_Intl + "]", this.dsTA_MAMNTD, i, this.grdTA_MAMNTD, "ACCT_NAME");			
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTD.getColumn(i, "ACCT_UNIT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsTA_MAMNTD, i, this.grdTA_MAMNTD, "ACCT_UNIT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTD.getColumn(i, "ACCT_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사업장", this.dsTA_MAMNTD, i, this.grdTA_MAMNTD, "ACCT_GUBN");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTD.getColumn(i, "ACCT_INTL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계정과목", this.dsTA_MAMNTD, i, this.grdTA_MAMNTD, "ACCT_INTL");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTD.getColumn(i, "CURR_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "화폐단위", this.dsTA_MAMNTD, i, this.grdTA_MAMNTD, "CURR_GUBN");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTD.getColumn(i, "COND_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "관리코드", this.dsTA_MAMNTD, i, this.grdTA_MAMNTD, "COND_CODE");
        		}
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTD.getColumn(i, "COND_VACD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "관리항목값명", this.dsTA_MAMNTD, i, this.grdTA_MAMNTD, "COND_VANM");
        		}
        	
        	}
        	
        	if (this.dsTA_MAMNTM.rowcount > 0) {
        		if (this.fnc_Trim(this.dsTA_MAMNTM.getColumn(this.dsTA_MAMNTM.rowposition, "SLIP_CHAX")) != this.dsTA_MAMNTD.getSum("SLIP_CHAX") ) {
        			var bRtn = this.fnc_Message("TMM109", "계정차변금액", "관리항목차변금액");
        			if (!bRtn) return false;
        		}
        		
        		if (this.fnc_Trim(this.dsTA_MAMNTM.getColumn(this.dsTA_MAMNTM.rowposition, "SLIP_DAEX")) != this.dsTA_MAMNTD.getSum("SLIP_DAEX") ) {
        			var bRtn = this.fnc_Message("TMM109", "계정대변금액", "관리항목대변금액");
        			if (!bRtn) return false;
        		}

        		if (this.fnc_Trim(this.dsTA_MAMNTM.getColumn(this.dsTA_MAMNTM.rowposition, "FORI_CHAX")) != this.dsTA_MAMNTD.getSum("FORI_CHAX") ) {
        			var bRtn = this.fnc_Message("TMM109", "계정외화차변금액", "관리항목외화차변금액");
        			if (!bRtn) return false;
        		}

        		if (this.fnc_Trim(this.dsTA_MAMNTM.getColumn(this.dsTA_MAMNTM.rowposition, "FORI_DAEX")) != this.dsTA_MAMNTD.getSum("FORI_DAEX") ) {
        			var bRtn = this.fnc_Message("TMM109", "계정외화차변금액", "관리항목외화대변금액");
        			if (!bRtn) return false;
        		}
        	}
        	
        	return true;

        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.cmbSHRACCT_UNIT.value);
        		sReturnString += " ACCT_YEAR=" 	+ this.fnc_Quote(this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4));
        		sReturnString += " ACCT_INTL=" 	+ this.fnc_Quote(this.edtSHRACCT_INTL.value);

        	} else if (sKind == "SEARCH01") {

        		var mRow = this.dsTA_MAMNTM.rowposition;
        		
        		sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_DATE=" 	+ this.fnc_Quote(this.dsTA_MAMNTM.getColumn(mRow, "ACCT_DATE"));
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.dsTA_MAMNTM.getColumn(mRow, "ACCT_GUBN"));
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.dsTA_MAMNTM.getColumn(mRow, "ACCT_UNIT"));
        		sReturnString += " ACCT_INTL=" 	+ this.fnc_Quote(this.dsTA_MAMNTM.getColumn(mRow, "ACCT_INTL"));
        		sReturnString += " CURR_GUBN=" 	+ this.fnc_Quote(this.dsTA_MAMNTM.getColumn(mRow, "CURR_GUBN"));
        		sReturnString += " COND_CODE=" 	+ this.fnc_Quote(this.cmbSHRCOND_CODE.value);
        		sReturnString += " COND_VACD=" 	+ this.fnc_Quote(this.edtSHRCOND_VACD.value);

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="    	+ this.fnc_Quote(this.sPACKAGENAME);
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
        	
        		this.fnc_Information(this.stInformationM, this.dsTA_MAMNTM.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsTA_MAMNTM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.fnc_Information(this.stInformationD, this.dsTA_MAMNTD.rowcount, "SHR");
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam    = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        			arrParam[1] = "GRID,grdTA_MAMNTM,dsACCT_UNIT,ACCT_UNIT";
        			arrParam[2] = "GRID,grdTA_MAMNTD,dsACCT_UNIT,ACCT_UNIT";
        			arrParam[3] = "GRID,grdTA_MAMNTM,dsCURR_GUBN,CURR_GUBN";
        			arrParam[4] = "GRID,grdTA_MAMNTD,dsCURR_GUBN,CURR_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);	
        		
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam    = new Array();
        			arrParam[0] = "GRID,grdTA_MAMNTM,dsACCT_GUBN,ACCT_GUBN";
        			arrParam[1] = "GRID,grdTA_MAMNTD,dsACCT_GUBN,ACCT_GUBN";
        			arrParam[2] = "COMBO,cmbSHRCOND_CODE,dsSHRCOND_CODE,0";
        			arrParam[3] = "GRID,grdTA_MAMNTD,dsCOND_CODE,COND_CODE"; 
        		this.fnc_UserComboInnerBind(arrParam);

        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformationD, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	
        	this.fnc_DatasetClear("dsTA_MAMNTD"); 
        	
        	if (e.newrow == -1) return;

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_MAMNTD=dsTA_MAMNTD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	this.grdTA_MAMNTD.setFocus();
        	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        /*----------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            // 계정 과목(조회)
            if ((obj.name == "ImgHelpSHRACCT_INTL") || (obj.name == "edtSHRACCT_NAME")) {

                arrParam[0] = "FAM0032";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACCT_NAME";
                arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_NAME";
                arrParam[6] = "0,1";
        	
        	} else if ((obj.name == "ImgHelpSHRCOND_VACD") || (obj.name == "edtSHRCOND_VANM")) {

        	    //관리항목
        		var sComb_Idxx = this.dsCOND_CODE.getColumn(this.dsCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMB_IDXX");
        		var sComm_Code = this.dsCOND_CODE.getColumn(this.dsCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMM_CODE");
                
                arrParam[0] = sComb_Idxx;           
        		arrParam[1] = sComm_Code;
                arrParam[2] = this.fnc_Trim(this.edtSHRCOND_VANM.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRCOND_VANM";                         
                arrParam[5] = "edtSHRCOND_VACD,edtSHRCOND_VANM";         
                arrParam[6] = "0,1";                                     

            } else if (obj.name == "grdTA_MAMNTD") { 	

        		if (sColumnID == "COND_VANM" || this.fnc_getGridHelpColName(obj, sFromDs) == "COND_VANM") {
        			
        			var sCond_Code 	= this.dsTA_MAMNTD.getColumn(this.dsTA_MAMNTD.rowposition, "COND_CODE");
        			var iRow 		= this.dsCOND_CODE.findRowExpr("COMB_CODE == '" + sCond_Code + "'");
        			var sComb_Idxx 	= this.dsCOND_CODE.getColumn(iRow, "COMB_IDXX");
        			
        			if (this.fnc_Length(this.fnc_Trim(sComb_Idxx)) < 1) {				
        				var sCOND_VANM = this.dsTA_MAMNTD.getColumn(this.dsTA_MAMNTD.rowposition, "COND_VANM");
        				this.dsTA_MAMNTD.setColumn(this.dsTA_MAMNTD.rowposition, "COND_VACD", sCOND_VANM);
        				return;				
        			}
        			
        			arrParam[0] = sComb_Idxx;
        			arrParam[1] = "";
        			arrParam[2] = "COND_VANM";
        			arrParam[3] = "N";
        			arrParam[4] = "grdTA_MAMNTD";
        			arrParam[5] = "COND_VACD,COND_VANM";
        			arrParam[6] = (sCond_Code == "0001") ? "2,3" : "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        		
        		}
        			
        	} 
        	
        	if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*-----------------------------------------------+
         |  초기이월잔액 계정 행 이동시 체크 이벤트 |
         +-----------------------------------------------*/
        this.dsTA_MAMNTM_CaiRowPosChange = function (obj,e) {
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_MAMNTD")) {
        		
        		if (this.fnc_Message("TMM023") == false) {
        			return false;
        		} else {
        			this.fnc_DataSetCancel("dsTA_MAMNTD")
        		}
        		
        	}

        }

        /*-----------------------+
         |  그리드 팝업 이벤트 |
         +-----------------------*/
        this.dsTA_MAMNTD_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "COND_VANM") {	//관리항목값
        		

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_MAMNTD.getColumn(e.row, "COND_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "관리코드", this.dsTA_MAMNTD, e.row, this.grdTA_MAMNTD, "COND_CODE");
        		}		
        		
        		this.fn_HelpDialoge(this.grdTA_MAMNTD, "YES" ,e.oldvalue, e.columnid);
        		var iRow 		= this.dsCOND_CODE.findRowExpr("COMB_CODE == '" + e.newvalue + "'");
        		var sComb_Idxx 	= this.dsCOND_CODE.getColumn(iRow, "COMB_IDXX");
        		
        	}
        	
        }

        /*------------------------------------------+
         |  양식파일 다운로드 클릭 時  |
         +------------------------------------------*/
        this.fn_ExcelFileDown = function (obj,e) {
        	
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);
        	
        }

        /*------------------------------+
         |  양식파일 업로드 클릭 時  |
         +------------------------------*/
        this.fn_ExcelUpLoad = function (obj,e) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	
        	if (this.fnc_Message("TMM140", "[회계연도 " + this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4) + "] 초기이월잔액(관리항목) 자료를 업로드 하시겠습니까?") == false) return;
        	
        	this.fnc_DatasetClear("dsTA_MAMNTM,dsTA_MAMNTD");
        	this.fnc_ExcelUpload("dsTA_MAMNTD", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }

        this.fn_ExcelSuccess = function (obj,e) {

        	this.setWaitCursor(false);
        	
        	this.dsTA_MAMNTD.set_enableevent(false);
        	this.dsTA_MAMNTD.set_updatecontrol(false);
        	
        	this.sXlsUpload = "N";
        	for (var i = 0; i < this.objDsImportTemp.getRowCount(); i++) {
        		
        		var iRow = this.dsTA_MAMNTD.addRow();
        		
        		this.dsTA_MAMNTD.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		this.dsTA_MAMNTD.setColumn(iRow, "ACCT_DATE", this.fnc_SubStr(this.calSHRACCT_YEAR.value, 0, 4) + "0000"); //회계단위
        		this.dsTA_MAMNTD.setColumn(iRow, "ACCT_UNIT", this.objDsImportTemp.getColumn(i, 0)); //회계단위
        		this.dsTA_MAMNTD.setColumn(iRow, "ACCT_GUBN", this.objDsImportTemp.getColumn(i, 1)); //사업장
        		this.dsTA_MAMNTD.setColumn(iRow, "ACCT_INTL", this.objDsImportTemp.getColumn(i, 2)); //계정과목
        		this.dsTA_MAMNTD.setColumn(iRow, "CURR_GUBN", this.objDsImportTemp.getColumn(i, 3)); //화폐단위

        		this.dsTA_MAMNTD.setColumn(iRow, "COND_CODE", this.objDsImportTemp.getColumn(i, 4)); //관맇항목코드
        		this.dsTA_MAMNTD.setColumn(iRow, "COND_VACD", this.objDsImportTemp.getColumn(i, 5)); //관리항목값
        		this.dsTA_MAMNTD.setColumn(iRow, "COND_VANM", this.objDsImportTemp.getColumn(i, 6)); //관리항목값명

        		this.dsTA_MAMNTD.setColumn(iRow, "SLIP_CHAX", this.objDsImportTemp.getColumn(i, 7)); //차변금액
        		this.dsTA_MAMNTD.setColumn(iRow, "SLIP_DAEX", this.objDsImportTemp.getColumn(i, 8)); //대변금액
        		this.dsTA_MAMNTD.setColumn(iRow, "FORI_CHAX", this.objDsImportTemp.getColumn(i, 9)); //외화차변
        		this.dsTA_MAMNTD.setColumn(iRow, "FORI_DAEX", this.objDsImportTemp.getColumn(i, 10)); //외화대변
        	}
        	this.objDsImportTemp.clear();
        	
        	this.dsTA_MAMNTD.set_updatecontrol(true);
        	this.dsTA_MAMNTD.set_enableevent(true);
        	
        	this.dsTA_MAMNTD.set_rowposition(0);
        	this.grdTA_MAMNTD.setFocus();

        	this.sXlsUpload = "Y";
        	this.stInformationD.set_text("[" + (this.dsTA_MAMNTD.getRowCount() + "]건의 데이터를 로드 했습니다."));

        }

        /*----------------------+
         |  관리구분 클릭 時  |
         +----------------------*/
        this.cmbSHRCOND_CODE_onitemchanged = function(obj,e) {	    
        	
        	//관리항목 초기화
        	this.edtSHRCOND_VACD.set_value(""); 
        	this.edtSHRCOND_VANM.set_value("");
        	
        	//관리항목
        	var sComb_Idxx = this.dsCOND_CODE.getColumn(this.dsCOND_CODE.findRow("COMB_CODE" , this.cmbSHRCOND_CODE.value), "COMB_IDXX");
        	
        	if (this.fnc_Trim(sComb_Idxx) < 1) {
        		
        		this.fnc_SetReadonly(this.edtSHRCOND_VACD, false);
        		this.ImgHelpSHRCOND_VACD.set_visible(false);
        		this.edtSHRCOND_VANM.set_visible(false);
        		
        	} else {
        		
        		this.fnc_SetReadonly(this.edtSHRCOND_VACD, true);
        		this.ImgHelpSHRCOND_VACD.set_visible(true);
        		this.edtSHRCOND_VANM.set_visible(true);
        		
        	}

        }

        /*------------------+
         |  기표계정과목	|
         +------------------*/
        this.fn_Search_Acct = function () {

            this.fnc_DatasetClear("dsTA_ACCTXM");
            var sMethodName = "SEARCH10";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_ACCTXM=dsTA_ACCTXM ";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        }

        this.calSHRACCT_YEAR_onspin = function(obj,e) {

        	obj.setFocus();
        	this.fnc_DatasetClear("dsTA_MAMNTM,dsTA_MAMNTD");
        	
        }

        this.dsTA_MAMNTM_canrowposchange = function(obj,e) {
        	
        	// 하위 레벨에 변경사항 있을 시 초기화 경고
        	if (this.fnc_DatasetChangeCheck("dsTA_MAMNTD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_MAMNTD.addEventHandler("oncolumnchanged", this.dsTA_MAMNTD_oncolumnchanged, this);
            this.dsTA_MAMNTM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_MAMNTM.addEventHandler("canrowposchange", this.dsTA_MAMNTM_canrowposchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_MAMNTD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOND_VANM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOND_VANM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCOND_VACD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCOND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCOND_CODE.addEventHandler("onitemchanged", this.cmbSHRCOND_CODE_onitemchanged, this);
            this.edtSHRACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_INTL.addEventHandler("ontextchanged", this.edtSHRACCT_INTL_OnChanged, this);
            this.Static9.addEventHandler("onclick", this.Static9_onclick, this);
            this.ImgHelpSHRACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.ImgHelpSHRCOND_VACD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btnFileDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.btnExcelUpload.addEventHandler("onclick", this.fn_ExcelUpLoad, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRACCT_YEAR.addEventHandler("onspin", this.calSHRACCT_YEAR_onspin, this);

        };

        this.loadIncludeScript("FAME0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
