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
                this.set_name("FAMD0020");
                this.set_titletext("거래처별잔액현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/><Col id=\"REMK\">부문</Col></Row><Row><Col id=\"DSNAME\">dsRETY_CODE</Col><Col id=\"CODEID\">RETY_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"REMK\">관계사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OSLI_SLIP\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OSLI_FORI\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_SLIP\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_FORI\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_AMNT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OSLI_SLIP\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OSLI_FORI\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_SLIP\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BALA_FORI\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_CODE\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"100\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">FAM0001</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_SLIPNT2", "absolute", "8", null, null, "157", "25", "168", this);
            obj.set_binddataset("dsTA_SLIPNT2");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("currow");
            obj.set_taborder("14");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"150\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"220\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"발생전표번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"회계일\"/><Cell col=\"2\" text=\"계정코드\"/><Cell col=\"3\" text=\"계정명\"/><Cell col=\"4\" displaytype=\"text\" text=\"발생금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"정산금액\"/><Cell col=\"6\" displaytype=\"text\" text=\"잔액\"/><Cell col=\"7\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:DISP_NUMB\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:ACCT_INTL\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OSLI_SLIP\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BALA_SLIP\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"합   계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_AMNT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;OSLI_SLIP&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;BALA_SLIP&quot;)\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "133", null, "262", "21", null, "325", this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("13");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT3", "absolute", "8", null, null, "128", "25", "15", this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsTA_SLIPNT3");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_selecttype("currow");
            obj.set_taborder("16");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"635\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"정산전표번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"회계일\"/><Cell col=\"2\" displaytype=\"text\" text=\"정산금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:DISP_NUMB\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: center;\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"합   계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_AMNT&quot;)\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "133", "133", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("11");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT1", "absolute", "8", "154", null, null, "25", "350", this);
            obj.set_taborder("17");
            obj.set_binddataset("dsTA_SLIPNT1");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("currow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"거래처코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"거래처명\"/><Cell col=\"2\" displaytype=\"text\" text=\"발생금액\"/><Cell col=\"3\" displaytype=\"text\" text=\"정산금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:CUST_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CUST_NAME\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OSLI_SLIP\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BALA_SLIP\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"합   계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_AMNT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;OSLI_SLIP&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;BALA_SLIP&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation3", "absolute", "133", null, "262", "21", null, "143", this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("10");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "28", "97", "64", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", "71", "64", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME1", "absolute", "241", "97", "160", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL1", "absolute", "96", "97", "120", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME2", "absolute", "569", "97", "160", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL2", "absolute", "424", "97", "120", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "406", "97", "14", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRRETY_CODE", "absolute", "813", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static01", "absolute", "758", "71", "64", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("관계사");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "958", "97", "166", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "813", "97", "120", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("staDETL_CODE", "absolute", "758", "97", "64", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "558", "71", "64", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DATE", "absolute", "628", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "342", "71", "115", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static2", "absolute", "286", "71", "59", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "96", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("ImgHelpSHRACCT_INTL1", "absolute", "218", "97", "21", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpSHRACCT_INTL2", "absolute", "546", "97", "21", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "935", "97", "21", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("거래처별잔액현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("32");
            obj.set_text("홈 > 재무관리 > 건별미결정산 > 거래처별 잔액현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("42");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("43");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("44");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "416", "61", "38", "10", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "416", "92", "102", "5", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "416", "118", "38", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "386", "216", "6", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "573", "367", "80", "25", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", "568", "216", "6", null, null, this);
            obj.set_taborder("53");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "573", "549", "80", "25", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation05", "absolute", "119", "137", "10", "13", null, null, this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "8", "133", "102", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("거래처별 잔액");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "8", null, "102", "21", null, "325", this);
            obj.set_taborder("57");
            obj.set_text("발생전표 내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "119", null, "10", "13", null, "329", this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "8", null, "102", "21", null, "143", this);
            obj.set_taborder("60");
            obj.set_text("정산전표 내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation06", "absolute", "119", null, "10", "13", null, "147", this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("거래처별잔액현황");
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
        this.addIncludeScript("FAMD0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMD0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMD0020 거래처별 잔액현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		오혜성		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMD0020";

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	this.sUSERAUTH     =  "";
        	this.sFORMCAPTION  =  "";
        	this.sFORMLOCATION =  "";
        	this.sUSERLAVEL    =  "";

        } else {

        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];

        }

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT2, "DISP_NUMB", "Y");
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT3, "DISP_NUMB", "Y");
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        		
        	this.calSHRACCT_DATE.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.cmbSHRACCT_UNIT.setFocus();

        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	
        	this.fnc_DatasetClear("dsTA_SLIPNT1");
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_SLIPNT1=dsTA_SLIPNT1";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT1.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e) {
        	//기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e) {
        	//기능 없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e) {
        	//기능 없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {
        	//기능 없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e) {
        	this.fnc_ToExcel(this);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e) {
        	// 기능없음.
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if (e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT1,dsTA_SLIPNT2,dsTA_SLIPNT3", this);
        		
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;

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
        /*--------------------+
         |  조회 조건 체크!  |
         +---------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);
        	}

        // 	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)) < 1) {
        // 		return this.fnc_SearchCheckPostAction("TMM001", "사업장", this.cmbSHRACCT_GUBN);
        // 	}

        	if (this.fnc_IsDate(this.calSHRACCT_DATE.value) == false) {
        		return this.fnc_SearchCheckPostAction("TMM001", "기준일", this.calSHRACCT_DATE);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_INTL1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "계정과목", this.edtSHRACCT_NAME1);
        	}

        	return true;
        }

        /*--------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	//기능 없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	//기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_INTL1=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL1.value));
        		
        		if (this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_INTL2.value)) < 1) {

        			sReturnString += " ACCT_INTL2=" + this.fnc_Quote(this.edtSHRACCT_INTL1.value);

        		} else {

        			sReturnString += " ACCT_INTL2=" + this.fnc_Quote(this.edtSHRACCT_INTL2.value);

        		}
        		
        		sReturnString += " ACCT_DATE=" + this.fnc_Quote(this.calSHRACCT_DATE.value);
        		sReturnString += " RETY_CODE=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRETY_CODE.value));
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value));

        	} else if (sKind == "SEARCH01") {
        		
        		sReturnString  = " pgm="          + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="       + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN="    + this.fnc_Quote(this.cmbSHRACCT_GUBN.value);
        		sReturnString += " ACCT_UNIT="    + this.fnc_Quote(this.cmbSHRACCT_UNIT.value);
        		sReturnString += " ACCT_INTL1="   + this.fnc_Quote(this.edtSHRACCT_INTL1.value);

        		if (this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_INTL2.value)) < 1) {

        			sReturnString += " ACCT_INTL2=" + this.fnc_Quote(this.edtSHRACCT_INTL1.value);

        		} else {

        			sReturnString += " ACCT_INTL2=" + this.fnc_Quote(this.edtSHRACCT_INTL2.value);

        		}

        		sReturnString += " ACCT_DATE=" + this.fnc_Quote(this.calSHRACCT_DATE.value); //기준일자
        		sReturnString += " COND_VACD=" + this.fnc_Quote(this.fnc_Trim(this.dsTA_SLIPNT1.getColumn(this.dsTA_SLIPNT1.rowposition, "CUST_CODE"))); //거래처코드

        	} else if (sKind == "SEARCH02") {
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SLIP_NUMB=" + this.fnc_Quote(this.dsTA_SLIPNT2.getColumn(this.dsTA_SLIPNT2.rowposition, "SLIP_NUMB"));
        		sReturnString += " SLIP_LINE=" + this.fnc_Quote(this.dsTA_SLIPNT2.getColumn(this.dsTA_SLIPNT2.rowposition, "SLIP_LINE"));

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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {

        		if (this.dsTA_SLIPNT1.rowcount == 0) {

        			this.dsTA_SLIPNT2.clearData();
        			this.dsTA_SLIPNT3.clearData();

        		}

        		this.fnc_Information(this.stInformation1, this.dsTA_SLIPNT1.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT1.getCaseCount("dataset.getRowLevel(currow)==0"));	

        	} else if (sMethodName == "SEARCH01") {

        		if (this.dsTA_SLIPNT2.rowcount == 0) {

        			this.dsTA_SLIPNT3.clearData();

        		}
        		
        		this.fnc_Information(this.stInformation2, this.dsTA_SLIPNT2.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} else if (sMethodName == "SEARCH02") {
        			
        		this.fnc_Information(this.stInformation3, this.dsTA_SLIPNT3.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHRRETY_CODE,dsRETY_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}

        }

        /*----------------------------------------------------------------+
         | Help Popup Open                     |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "ImgHelpSHRACCT_INTL1") || (obj.name == "edtSHRACCT_NAME1")) {
            
        		arrParam[0] = "FAM0035";                                
        		arrParam[1] = "";                                      
        		arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME1.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRACCT_NAME1";   
            
        		if (this.fnc_Length(this.edtSHRACCT_INTL2.value) < 1) {

        			arrParam[5] = "edtSHRACCT_INTL1,edtSHRACCT_NAME1,edtSHRACCT_INTL2,edtSHRACCT_NAME2";
        			arrParam[6] = "0,1,0,1";
        				
        		} else {

        			arrParam[5] = "edtSHRACCT_INTL1,edtSHRACCT_NAME1";
        			arrParam[6] = "0,1";

        		}
        		
            } else if ((obj.name == "ImgHelpSHRACCT_INTL2") || (obj.name == "edtSHRACCT_NAME2")) {

                arrParam[0] = "FAM0035";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME2.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRACCT_NAME2";                         
                arrParam[5] = "edtSHRACCT_INTL2,edtSHRACCT_NAME2";         
                arrParam[6] = "0,1";                                     

            } else if ((obj.name == "imgHelpSHRCUST_CODE") || (obj.name == "edtSHRCUST_NAME")) {

                arrParam[0] = "FAM0021";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRCUST_NAME";                         
                arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";         
                arrParam[6] = "0,1";                                     

            }
        	
        	if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
             
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*-----------------------+
         |  전표내역 조회 !!    |
         +------------------------*/
        this.fn_Search01 = function () {

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsTA_SLIPNT2");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT2=dsTA_SLIPNT2 ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	//this.grdTA_SLIPNT2.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*---------------------------+
         |  정산전표내역 조회 !!    |
         +----------------------------*/
        this.fn_Search02 = function () {

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsTA_SLIPNT3");
        	
        	var sMethodName = "SEARCH02";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT3=dsTA_SLIPNT3 ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	//this.grdTA_SLIPNT3.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        
        this.grdTA_SLIPNT2_oncelldblclick = function(obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
            
        	if (columnName == "DISP_NUMB") {	    
        	    var sSlipNumb = this.dsTA_SLIPNT2.getColumn(this.dsTA_SLIPNT2.rowposition, "SLIP_NUMB");
        	    var sSlipLine = this.dsTA_SLIPNT2.getColumn(this.dsTA_SLIPNT2.rowposition, "SLIP_LINE");

        	    if (this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0 ) {
        			this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		}	
        	}
        	
        }

        this.grdTA_SLIPNT3_oncelldblclick = function(obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
            
        	if (columnName == "DISP_NUMB") {	    
        	    var sSlipNumb = this.dsTA_SLIPNT3.getColumn(this.dsTA_SLIPNT3.rowposition, "SLIP_NUMB");
        	    var sSlipLine = this.dsTA_SLIPNT3.getColumn(this.dsTA_SLIPNT3.rowposition, "SLIP_LINE");
        	    
        	    if (this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0 ) {
        			this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		}	
        	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPNT2.addEventHandler("onrowposchanged", this.fn_Search02, this);
            this.dsTA_SLIPNT1.addEventHandler("onrowposchanged", this.fn_Search01, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_SLIPNT2.addEventHandler("oncelldblclick", this.grdTA_SLIPNT2_oncelldblclick, this);
            this.grdTA_SLIPNT3.addEventHandler("oncelldblclick", this.grdTA_SLIPNT3_oncelldblclick, this);
            this.edtSHRACCT_NAME1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRETY_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRETY_CODE.addEventHandler("onitemchanged", this.cmbSHRRETY_CODE_onitemchanged, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRACCT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.ImgHelpSHRACCT_INTL1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.ImgHelpSHRACCT_INTL2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMD0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
