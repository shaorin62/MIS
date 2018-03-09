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
                this.set_name("TRMA0060");
                this.set_titletext("채권채무상계관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\"/><Col id=\"USEYSNO\">N</Col><Col id=\"COMBOID\">FAM0001</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT_BOND", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_DATE\" size=\"256\" prop=\"NONE\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"15\" prop=\"NONE\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"15\" prop=\"NONE\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"4\" prop=\"NONE\" type=\"STRING\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"RPAY_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LAST_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT_DEBT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"RPAY_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LAST_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"RPAY_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LAST_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIP_TEMP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"RPAY_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LAST_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DRCR_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("17");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("18");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("채권채무상계관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("20");
            obj.set_text("홈 > 채권채무상계관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("21");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Button("btnSLIP", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("전표처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "178", "71", "70", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "235", "71", "84", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "309", "129", "80", "35", null, null, this);
            obj.set_taborder("27");
            obj.set_text("h35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("28");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT_BOND", "absolute", "8", "164", null, "280", "25", null, this);
            obj.set_taborder("13");
            obj.set_binddataset("dsTA_SLIPNT_BOND");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"160\" band=\"left\"/><Column size=\"75\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" text=\"거래처코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"회계일자\"/><Cell col=\"4\" text=\"전표번호\"/><Cell col=\"5\" text=\"계정코드\"/><Cell col=\"6\" text=\"계정명\"/><Cell col=\"7\" text=\"적요\"/><Cell col=\"8\" text=\"발생금액\"/><Cell col=\"9\" text=\"기정리액\"/><Cell col=\"10\" text=\"잔액\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_essential\" text=\"정리금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CUST_CODE\" suppress=\"1\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CUST_NAME\" suppress=\"2\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:DISP_NUMB\"/><Cell col=\"5\" text=\"bind:ACCT_INTL\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:REMK_NAME\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RPAY_AMNT\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REMA_AMNT\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:LAST_AMNT\" mask=\"#,###\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "444", "80", "35", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT_DEBT", "absolute", "8", "479", null, null, "25", "15", this);
            obj.set_taborder("14");
            obj.set_binddataset("dsTA_SLIPNT_DEBT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"160\" band=\"left\"/><Column size=\"75\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\"/><Cell col=\"1\" text=\"거래처코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"회계일자\"/><Cell col=\"4\" text=\"전표번호\"/><Cell col=\"5\" text=\"계정코드\"/><Cell col=\"6\" text=\"계정명\"/><Cell col=\"7\" text=\"적요\"/><Cell col=\"8\" text=\"발생금액\"/><Cell col=\"9\" text=\"기정리액\"/><Cell col=\"10\" text=\"잔액\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_essential\" text=\"정리금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:CHK\" editlimit=\"0\" suppress=\"0\"/><Cell col=\"1\" text=\"bind:CUST_CODE\" suppress=\"1\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CUST_NAME\" suppress=\"2\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:DISP_NUMB\"/><Cell col=\"5\" text=\"bind:ACCT_INTL\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:REMK_NAME\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RPAY_AMNT\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REMA_AMNT\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:LAST_AMNT\" mask=\"#,###\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAutoCheck", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("자동선택");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "95", "97", "80", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "177", "97", "21", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "200", "97", "119", "21", null, null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "101", "458", "169", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "473", "48", "6", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "9", "458", "79", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("채무내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stline2", "absolute", "89", "462", "10", "13", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "77", "440", "12", "23", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "90", "440", "12", "23", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "101", "143", "169", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "158", "48", "6", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "9", "143", "79", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("채권내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stline", "absolute", "89", "147", "10", "13", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "77", "125", "12", "23", null, null, this);
            obj.set_taborder("44");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "90", "125", "12", "23", null, null, this);
            obj.set_taborder("45");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "28", "97", "70", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("거래처");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "842", "71", "94", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("채권발생기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBOND_DAT1", "absolute", "936", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Calendar("calSHRBOND_DAT2", "absolute", "1055", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static18", "absolute", "842", "97", "94", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("채무발생기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRDEBT_DAT1", "absolute", "936", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static19", "absolute", "1038", "97", "14", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRDEBT_DAT2", "absolute", "1055", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "95", "71", "78", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");

            obj = new Static("Static20", "absolute", "324", "71", "64", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("채권계정");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "324", "97", "64", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("채무계정");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "1038", "71", "14", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", null, "139", "92", "21", "297", null, this);
            obj.set_taborder("53");
            obj.set_text("채권선택건수");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "139", "92", "21", "148", null, this);
            obj.set_taborder("54");
            obj.set_text("채권정리합계");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", null, "454", "92", "21", "297", null, this);
            obj.set_taborder("57");
            obj.set_text("채무선택건수");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", null, "454", "92", "21", "148", null, this);
            obj.set_taborder("61");
            obj.set_text("채무정리합계");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBOND_CNTX", "absolute", null, "139", "48", "21", "246", null, this);
            obj.set_taborder("63");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBOND_SUMX", "absolute", null, "139", "120", "21", "25", null, this);
            obj.set_taborder("64");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDEBT_CNTX", "absolute", null, "454", "48", "21", "246", null, this);
            obj.set_taborder("65");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDEBT_SUMX", "absolute", null, "454", "120", "21", "25", null, this);
            obj.set_taborder("66");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popSlip", "absolute", "8", "731", "238", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "220", "39", null, null, this.popSlip);
            obj.set_taborder("33");
            obj.set_cssclass("styFormItemBoxOut");
            this.popSlip.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popSlip);
            obj.set_taborder("34");
            obj.set_text("전표일자");
            obj.set_cssclass("styFormItemCapBE");
            this.popSlip.addChild(obj.name, obj);
            obj = new Calendar("calSLIP_DATE", "absolute", "99", "18", "98", "21", null, null, this.popSlip);
            this.popSlip.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Button("btnCreateSlip", "absolute", "102", "56", "74", "24", null, null, this.popSlip);
            obj.set_taborder("36");
            obj.set_text("전표처리");
            obj.set_cssclass("btn_POP_CRUD");
            this.popSlip.addChild(obj.name, obj);
            obj = new Button("btnCancel", "absolute", "179", "56", "50", "24", null, null, this.popSlip);
            obj.set_taborder("37");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popSlip.addChild(obj.name, obj);

            obj = new MaskEdit("mskBOND_DEBT", "absolute", null, "139", "112", "21", "404", null, this);
            obj.set_taborder("67");
            obj.set_tabstop("false");
            obj.set_value("0");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", null, "139", "92", "21", "519", null, this);
            obj.set_taborder("68");
            obj.set_text("채권채무차액");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "783", "125", "12", "23", null, null, this);
            obj.set_taborder("69");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "796", "125", "12", "23", null, null, this);
            obj.set_taborder("70");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stline00", "absolute", null, "139", "7", "21", "385", null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBOND_INT1", "absolute", "393", "71", "60", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBOND_NAM1", "absolute", "455", "71", "21", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBOND_NAM1", "absolute", "478", "71", "124", "21", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBOND_INT2", "absolute", "625", "71", "60", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBOND_NAM2", "absolute", "687", "71", "21", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBOND_NAM2", "absolute", "710", "71", "124", "21", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "606", "71", "14", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEBT_INT1", "absolute", "393", "97", "60", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEBT_NAM1", "absolute", "455", "97", "21", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEBT_NAM1", "absolute", "478", "97", "124", "21", null, null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "606", "97", "14", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEBT_INT2", "absolute", "625", "97", "60", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEBT_NAM2", "absolute", "687", "97", "21", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEBT_NAM2", "absolute", "710", "97", "124", "21", null, null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 238, 90, this.popSlip,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popSlip.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("채권채무상계관리");

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
        this.addIncludeScript("TRMA0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRMA0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRMA0060 채권채무상계관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.11		권미영		Initial Created.
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
        this.sBUTTONLIST 	= "TTFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "TRMA0060"; //해당 Form에서 사용 할 Package 명
        this.sSLIP_NUMB 	= "";

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

        
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT_BOND, "DISP_NUMB", "Y");
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT_DEBT, "DISP_NUMB", "Y");
        	
        	this.cmbSHRACCT_UNIT.setFocus();
        	
        }

        /*-----------------------------------+
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
        	
        	this.mskBOND_CNTX.set_value(0);
        	this.mskBOND_SUMX.set_value(0);
        	this.mskDEBT_CNTX.set_value(0);
        	this.mskDEBT_SUMX.set_value(0);
        	this.mskBOND_DEBT.set_value(0);
        	
        	this.fnc_DatasetClear("dsTA_SLIPNT_BOND,dsTA_SLIPNT_DEBT");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLIPNT_BOND=dsTA_SLIPNT_BOND dsTA_SLIPNT_DEBT=dsTA_SLIPNT_DEBT";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT_BOND.setFocus();
        	
        }

        /*-----------------------------+
         |  04입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능 없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	// 기능 없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);	
        }

        /*------------------------------------+
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

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_UNIT);
        	}
        	
        // 	if (this.fnc_Length(this.fnc_Trim(this.edtSHRCUST_CODE.value)) < 1) {
        // 		return this.fnc_SearchCheckPostAction("TMM072", "거래처", this.edtSHRCUST_NAME);
        // 	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBOND_DAT1.value)) > 0 && this.fnc_Length(this.fnc_Trim(this.calSHRBOND_DAT2.value)) > 0) {
        		if (this.calSHRBOND_DAT1.value > this.calSHRBOND_DAT2.value) {
        			return this.fnc_SearchCheckPostAction("TMM042", "채권발생 시작일자,채권발생 종료일자", this.calSHRBOND_DAT2);
        		}
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRDEBT_DAT1.value)) > 0 && this.fnc_Length(this.fnc_Trim(this.calSHRDEBT_DAT2.value)) > 0) {
        		if (this.calSHRDEBT_DAT1.value > this.calSHRDEBT_DAT2.value) {
        			return this.fnc_SearchCheckPostAction("TMM042", "채무발생 시작일자,채무발생 종료일자", this.calSHRDEBT_DAT2);
        		}
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	return true;
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	return true;
        	
        }

        /*----------------------------+
         |  전표생성 필수 조건 체크!  |
         +----------------------------*/
        this.fn_CreateSlipItemCheck = function () {

        	if (this.dsTA_SLIPNT_BOND.rowcount < 1 && this.dsTA_SLIPNT_DEBT.rowcount < 1) return false;

        	if (this.dsTA_SLIPNT_BOND.getCaseCount("CHK==\"1\"") < 1 && this.dsTA_SLIPNT_DEBT.getCaseCount("CHK==\"1\"") < 1) {
        		this.fnc_Message("TMM125", "전표처리 할 채권/채무내역을 선택하세요");
        		this.grdTA_SLIPNT_BOND.setFocus();
        		return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.popSlip.calSLIP_DATE.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "전표일자", this.popSlip.calSLIP_DATE.value);
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTA_SLIPNT_BOND.rowcount; i++) {
        	
        		if (this.dsTA_SLIPNT_BOND.getColumn(i, "CHK") != "1") continue;

        		if (nexacro.toNumber(this.fnc_Trim(this.dsTA_SLIPNT_BOND.getColumn(i, "LAST_AMNT")), 0) == 0) {
        			return this.fnc_CheckPostAction("TMM072", "채권 정리금액", this.dsTA_SLIPNT_BOND, i, this.grdTA_SLIPNT_BOND, "LAST_AMNT");
        		}
        		
        		if (nexacro.toNumber(this.fnc_Trim(this.dsTA_SLIPNT_BOND.getColumn(i, "LAST_AMNT")), 0) > nexacro.toNumber(this.fnc_Trim(this.dsTA_SLIPNT_BOND.getColumn(i, "REMA_AMNT")), 0)) {
        			return this.fnc_CheckPostAction("TMM022", "채권 정리금액,채권 잔액", this.dsTA_SLIPNT_BOND, i, this.grdTA_SLIPNT_BOND, "LAST_AMNT");
        		}

        
        	}
        	
        	for (var i = 0; i < this.dsTA_SLIPNT_DEBT.rowcount; i++) {
        	
        		if (this.dsTA_SLIPNT_DEBT.getColumn(i, "CHK") != "1") continue;

        		if (nexacro.toNumber(this.fnc_Trim(this.dsTA_SLIPNT_DEBT.getColumn(i, "LAST_AMNT")), 0) == 0) {
        			return this.fnc_CheckPostAction("TMM072", "채무 정리금액", this.dsTA_SLIPNT_DEBT, i, this.grdTA_SLIPNT_DEBT, "LAST_AMNT");
        		}

        		if (nexacro.toNumber(this.fnc_Trim(this.dsTA_SLIPNT_DEBT.getColumn(i, "LAST_AMNT")), 0) > nexacro.toNumber(this.fnc_Trim(this.dsTA_SLIPNT_DEBT.getColumn(i, "REMA_AMNT")), 0)) {
        			return this.fnc_CheckPostAction("TMM022", "채무 정리금액,채무 잔액", this.dsTA_SLIPNT_DEBT, i, this.grdTA_SLIPNT_DEBT, "LAST_AMNT");
        		}

        	}
        	
        	if ( nexacro.toNumber(this.dsTA_SLIPNT_BOND.getCaseSum("CHK == '1'", "LAST_AMNT"), 0) != 
        		nexacro.toNumber(this.dsTA_SLIPNT_DEBT.getCaseSum("CHK == '1'", "LAST_AMNT"), 0) ) {
        		return this.fnc_Message("EVM013", "채권정리금액", "채무정리금액");
        	}
        	
        	return this.fnc_Message("TMM061", "전표일자 [" + this.popSlip.calSLIP_DATE.text + "]로 선택한 자료의 자동전표");
        	
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		
        		sReturnString += " BOND_INT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRBOND_INT1.value));
        		sReturnString += " BOND_INT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRBOND_INT2.value));
        		sReturnString += " BOND_DAT1="  + this.fnc_Quote(this.fnc_Trim(this.calSHRBOND_DAT1.value));
        		sReturnString += " BOND_DAT2="  + this.fnc_Quote(this.fnc_Trim(this.calSHRBOND_DAT2.value));
        		
        		sReturnString += " DEBT_INT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEBT_INT1.value));
        		sReturnString += " DEBT_INT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRDEBT_INT2.value));
        		sReturnString += " DEBT_DAT1="  + this.fnc_Quote(this.fnc_Trim(this.calSHRDEBT_DAT1.value));
        		sReturnString += " DEBT_DAT2="  + this.fnc_Quote(this.fnc_Trim(this.calSHRDEBT_DAT2.value));
        		sReturnString += " CUST_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value));
        	
        	} else if (sKind == "PROC00") {
        		
        		var sSous_Lnky = this.fnc_Trim(this.dsTA_SLIP.getColumn(0, "CUST_CODE"))
        				 + "-" + this.fnc_Trim(this.popSlip.calSLIP_DATE.value);
        				 
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote("10"); 
        		sReturnString += " ACCT_GUBN=" + this.fnc_Quote("100"); 									//사업장
        		sReturnString += " SLIP_DATE=" + this.fnc_Quote(this.fnc_Trim(this.popSlip.calSLIP_DATE.value)); 	//전표발행일
        		sReturnString += " SLIP_GUBN=" + this.fnc_Quote("TR002");	//채권채무상계
        		sReturnString += " TITL_NAME=" + this.fnc_Quote("[채권채무상계] - " + this.fnc_Trim(this.popSlip.calSLIP_DATE.value) + " " + this.fnc_Trim(this.edtSHRCUST_NAME.value));
                sReturnString += " EMPL_NUMB=" + this.fnc_Quote(application.GBL_EMPLNO);
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(application.GBL_DEPTCD);
        		sReturnString += " SOUS_LNKY=" + this.fnc_Quote(sSous_Lnky); //출처연결키

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
        	
        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT_BOND.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display
        		this.fnc_Information(this.stInformation2, this.dsTA_SLIPNT_DEBT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display
        		this.fnc_Message("TMM018", this.dsTA_SLIPNT_BOND.rowcount + this.dsTA_SLIPNT_DEBT.rowcount);
        		
        		this.grdTA_SLIPNT_BOND.setCellProperty("head", this.fnc_GridColumnIndex(this.grdTA_SLIPNT_BOND, "CHK"), "text", "0");
        		this.grdTA_SLIPNT_DEBT.setCellProperty("head", this.fnc_GridColumnIndex(this.grdTA_SLIPNT_DEBT, "CHK"), "text", "0");
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	//사용자공통코드 조회
        	} else if (sMethodName == "GetUserComboCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);	
        	
        	//전표생성
        	} else if (sMethodName == "PROC00") {
        		
        		//this.fnc_Message("TMM130","전표처리");
        		this.fn_Search();
        		this.fnc_ViewSlipForm(this.sSLIP_NUMB, "REV", this.sUSERLAVEL); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		
        	}

        }

        /*----------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRCUST_NAME") || (obj.name == "edtSHRCUST_NAME")) {
        		
        		arrParam[0] = "FAM0021";  
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value);
        		arrParam[3] = "N"; 
        		arrParam[4] = "edtSHRCUST_NAME";
        		arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";
        		arrParam[6] = "0,1";
        	
            } else if ((obj.name == "imgHelpSHRBOND_NAM1") || (obj.name == "edtSHRBOND_NAM1")) {
            
        		arrParam[0] = "FAM0035";                                
        		arrParam[1] = "FA280150";	//채권                               
        		arrParam[2] = this.fnc_Trim(this.edtSHRBOND_NAM1.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRBOND_NAM1";   
            
        		if (this.fnc_Length(this.edtSHRBOND_INT2.value) < 1) {

        			arrParam[5] = "edtSHRBOND_INT1,edtSHRBOND_NAM1,edtSHRBOND_INT2,edtSHRBOND_NAM2";
        			arrParam[6] = "0,1,0,1";
        				
        		} else {

        			arrParam[5] = "edtSHRBOND_INT1,edtSHRBOND_NAM1";
        			arrParam[6] = "0,1";

        		}
        		
            } else if ((obj.name == "imgHelpSHRBOND_NAM2") || (obj.name == "edtSHRBOND_NAM2")) {

                arrParam[0] = "FAM0035";                                
                arrParam[1] = "FA280150";	//채권
                arrParam[2] = this.fnc_Trim(this.edtSHRBOND_NAM2.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRBOND_NAM2";            
                arrParam[5] = "edtSHRBOND_INT2,edtSHRBOND_NAM2";
                arrParam[6] = "0,1";                                     
        		
            } else if ((obj.name == "imgHelpSHRDEBT_NAM1") || (obj.name == "edtSHRDEBT_NAM1")) {
            
        		arrParam[0] = "FAM0035";                                
        		arrParam[1] = "FA280160";	//채무
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEBT_NAM1.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRDEBT_NAM1";   
            
        		if (this.fnc_Length(this.edtSHRDEBT_INT2.value) < 1) {

        			arrParam[5] = "edtSHRDEBT_INT1,edtSHRDEBT_NAM1,edtSHRDEBT_INT2,edtSHRDEBT_NAM2";
        			arrParam[6] = "0,1,0,1";
        				
        		} else {

        			arrParam[5] = "edtSHRDEBT_INT1,edtSHRDEBT_NAM1";
        			arrParam[6] = "0,1";

        		}
        		
            } else if ((obj.name == "imgHelpSHRDEBT_NAM2") || (obj.name == "edtSHRDEBT_NAM2")) {

                arrParam[0] = "FAM0035";                                
                arrParam[1] = "FA280160";	//채무
                arrParam[2] = this.fnc_Trim(this.edtSHRDEBT_NAM2.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRDEBT_NAM2";            
                arrParam[5] = "edtSHRDEBT_INT2,edtSHRDEBT_NAM2";
                arrParam[6] = "0,1";     
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(arrParam)) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  채권내역 데이터 변경 시
         +---------------------------------------*/
         this.dsTA_SLIPNT_BOND_oncolumnchanged = function(obj,e) {
        	
        	if (e.oldvalue == e.newvalue) return;
        	
        	if (e.columnid == "CHK") {
        		if (e.newvalue == "1") {
        			obj.setColumn(e.row, "LAST_AMNT", obj.getColumn(e.row, "REMA_AMNT"));
        		} else {
        			obj.setColumn(e.row, "LAST_AMNT", 0);
        		}
        	}
        	
        	obj.set_updatecontrol(false);
        	obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);
        	obj.set_updatecontrol(true);
        	
        	this.fn_ChkSum("BOND");
        	
        }

        /*---------------------------------------+
         |  채무내역 데이터 변경 시
         +---------------------------------------*/
        this.dsTA_SLIPNT_DEBT_oncolumnchanged = function(obj,e) {
        	
        	if (e.oldvalue == e.newvalue) return;

        	if (e.columnid == "CHK") {
        		if (e.newvalue == "1") {
        			obj.setColumn(e.row, "LAST_AMNT", obj.getColumn(e.row, "REMA_AMNT"));
        		} else {
        			obj.setColumn(e.row, "LAST_AMNT", 0);
        		}
        	}
        	
        	obj.set_updatecontrol(false);
        	obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);
        	obj.set_updatecontrol(true);
        		
        	this.fn_ChkSum("DEBT");
        	
        }

        /*---------------------------------------+
         |  전표처리 버튼 클릭 시
         +---------------------------------------*/
        this.btnSLIP_onclick = function(obj,e) {
        	
            if (this.dsTA_SLIPNT_BOND.rowcount < 1 && this.dsTA_SLIPNT_DEBT.rowcount < 1) return;
            
        	this.popSlip.trackPopupByComponent(this.btnSLIP, 0, 0);
            this.popSlip.calSLIP_DATE.setFocus();
            this.popSlip.calSLIP_DATE.set_value(this.fnc_GetServerDateTime("DATE"));

        }

        /*--------------+
         |  전표처리	|
         +--------------*/
        this.popSlip_btnCreateSlip_onclick = function(obj,e) {
            
        	if (!this.fn_CreateSlipItemCheck()) return;	
        	
        	// 선택한 대상만 복사
        	this.dsTA_SLIPNT_BOND.set_enableevent(false);
        	this.dsTA_SLIPNT_BOND.filter("CHK==\"1\"");	
        	this.dsTA_SLIPNT_DEBT.set_enableevent(false);
        	this.dsTA_SLIPNT_DEBT.filter("CHK==\"1\"");
        	
        	this.dsTA_SLIP_TEMP.copyData(this.dsTA_SLIPNT_BOND, true);
        	this.dsTA_SLIP_TEMP.appendData(this.dsTA_SLIPNT_DEBT, true, false);
        	this.dsTA_SLIP_TEMP.set_keystring("S:CUST_CODE+DRCR_GUBN-LAST_AMNT");
        	
        	//데이터셋을 원하는 순서로 넘기기 위해서 copyRow 처리
        	this.dsTA_SLIP.copyData(this.dsTA_SLIP_TEMP);
        	this.dsTA_SLIP.clearData();
        	for (var i = 0; i < this.dsTA_SLIP_TEMP.rowcount; i++) {
        		var nRow = this.dsTA_SLIP.addRow();
        		this.dsTA_SLIP.copyRow(nRow, this.dsTA_SLIP_TEMP, i);
        	}
        	
        	this.dsTA_SLIPNT_BOND.filter("");
        	this.dsTA_SLIPNT_BOND.set_enableevent(true);	
        	this.dsTA_SLIPNT_DEBT.filter("");
        	this.dsTA_SLIPNT_DEBT.set_enableevent(true);

        	var sMethodName = "PROC00";
        	var sInDataSet 	= "dsTA_SLIP=dsTA_SLIP:A";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT_BOND.setFocus();
        	
        }

        /*------------------+
         |  전표처리취소	|
         +------------------*/
        this.popSlip_btnCancel_onclick = function(obj,e) {
        	
            this.popSlip.calSLIP_DATE.set_value("");
            this.popSlip.closePopup();
            
        }

        /*---------------------------------------+
         |  자동선택 버튼 클릭 시
         +---------------------------------------*/
        this.btnAutoCheck_onclick = function(obj,e) {

        	var iStnd_Amnt;	//기준 정리금액
        	var objGrd1; 	//기준 그리드
        	var objDs1; 	//기준 데이터셋
        	var objGrd2; 	//계산되어 체크될 그리드
        	var objDs2; 	//계산되어 체크될 데이터셋
        	
        	
        	//채권/채무 중 잔액 합계가 작은 금액을 기준으로 자동체크
        	if (this.dsTA_SLIPNT_BOND.getSum("REMA_AMNT") <= this.dsTA_SLIPNT_DEBT.getSum("REMA_AMNT")) {
        		
        		iStnd_Amnt = this.dsTA_SLIPNT_BOND.getSum("REMA_AMNT");	//채권 총잔액
        		
        		objGrd1	= this.grdTA_SLIPNT_BOND;	//기준 - 채권내역
        		objDs1	= this.dsTA_SLIPNT_BOND;
        		objGrd2	= this.grdTA_SLIPNT_DEBT;	//체크대상 - 채무내역
        		objDs2	= this.dsTA_SLIPNT_DEBT;
        		
        	} else {
        	
        		iStnd_Amnt = this.dsTA_SLIPNT_DEBT.getSum("REMA_AMNT");	//채무 총잔액
        		
        		objGrd1	= this.grdTA_SLIPNT_DEBT;	//기준 - 채무내역
        		objDs1	= this.dsTA_SLIPNT_DEBT;
        		objGrd2	= this.grdTA_SLIPNT_BOND;	//체크대상 - 채권내역
        		objDs2	= this.dsTA_SLIPNT_BOND;
        		
        	}
        	
        	//=======================================
        	//	1-1) 기준 그리드 전체선택
        	//=======================================
        	var e = new nexacro.GridClickEventInfo();
        	e.cell = this.fnc_GridColumnIndex(objGrd1, "CHK");
        	objGrd1.setCellProperty("head", e.cell, "text", "0");
        	this.grdTA_SLIPNT_onheadclick(objGrd1, e);

        	//=======================================
        	//	1-2) 기준 데이터셋 정리금액 셋팅
        	//=======================================
        	for (var i = 0; i < objDs1.rowcount; i++) {
        		var iRema_Amnt = objDs1.getColumn(i, "REMA_AMNT");
        		objDs1.setColumn(i, "LAST_AMNT", iRema_Amnt);
        	}
        	
        	//=======================================
        	//	2-1) 체크대상 그리드 선택 전체 취소
        	//=======================================
        	var e = new nexacro.GridClickEventInfo();
        	e.cell = this.fnc_GridColumnIndex(objGrd2, "CHK");
        	objGrd2.setCellProperty("head", e.cell, "text", "1");
        	this.grdTA_SLIPNT_onheadclick(objGrd2, e);
        	
        	
        	//=======================================
        	//	2-2) 체크대상 데이터셋 정리금액 셋팅
        	//=======================================
        	var iRema_Amnt = 0;		//로우잔액
        	var iTott_Summ = 0;		//정리금액 총누적액
        	var iPrer_Summ = 0;		//이전로우까지의 정리금액 누적액
        	var bChkk_Endx = false;	//정리금액 종료
        	
        	for (var i = 0; i < objDs2.rowcount; i++) {
        		
        		if (bChkk_Endx == true) {
        			objDs2.setColumn(i, "LAST_AMNT", 0);
        			continue;
        		}
        		
        		iRema_Amnt  = objDs2.getColumn(i, "REMA_AMNT");		//로우잔액
        		iTott_Summ += nexacro.toNumber(iRema_Amnt, 0);		//정리금액 총누적액
        		
        		//정리금액 총누적액이 기준 정리금액 보다 큰 경우
        		if (iTott_Summ > iStnd_Amnt) {
        			objDs2.setColumn(i, "CHK", "1");
        			objDs2.setColumn(i, "LAST_AMNT", iStnd_Amnt - iPrer_Summ);
        			bChkk_Endx = true;
        		} else {
        			objDs2.setColumn(i, "CHK", "1");
        			objDs2.setColumn(i, "LAST_AMNT", iRema_Amnt);
        		}
        		
        		iPrer_Summ += iRema_Amnt;	//이전로우까지의 정리금액 누적액
        		
        	}
        	
        }

        /*---------------------------------------+
         |  채권채무내역 선택한건들의 합계
         +---------------------------------------*/
        this.fn_ChkSum = function (sGubn) {
        	
        	if (sGubn == "BOND") {
        		this.mskBOND_CNTX.set_value(this.dsTA_SLIPNT_BOND.getCaseCount("CHK == 1"));
        		this.mskBOND_SUMX.set_value(this.dsTA_SLIPNT_BOND.getCaseSum("CHK == 1", "LAST_AMNT"));
        	} else if (sGubn == "DEBT") {
        		this.mskDEBT_CNTX.set_value(this.dsTA_SLIPNT_DEBT.getCaseCount("CHK == 1"));
        		this.mskDEBT_SUMX.set_value(this.dsTA_SLIPNT_DEBT.getCaseSum("CHK == 1", "LAST_AMNT"));
        	}
        	
        	this.mskBOND_DEBT.set_value(nexacro.toNumber(this.mskBOND_SUMX.value, 0) - nexacro.toNumber(this.mskDEBT_SUMX.value, 0));
        }

        /*---------------------------------------+
         |  그리드 헤더 체크박스 클릭
         +---------------------------------------*/
        this.grdTA_SLIPNT_onheadclick = function(obj,e) {
        	
        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", "CHK")) ) return;
        	this.fnc_GridAllCheck(obj, "CHK");
        	
        }

        
        this.grdTA_SLIPNT_oncelldblclick = function(obj,e) {
        	
        	var columnName = this.fnc_getColId(obj, e.cell);
        	if (columnName != "DISP_NUMB") return;
        	
        	var objDs = this.objects[obj.binddataset];
        	var sSlipNumb = objDs.getColumn(objDs.rowposition, "OSLI_NUMB");
        	var sSlipLine = objDs.getColumn(objDs.rowposition, "OSLI_LINE");
        	
        	if (this.fnc_Length(sSlipNumb) < 14) return;
        	
        	this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPNT_BOND.addEventHandler("oncolumnchanged", this.dsTA_SLIPNT_BOND_oncolumnchanged, this);
            this.dsTA_SLIPNT_DEBT.addEventHandler("oncolumnchanged", this.dsTA_SLIPNT_DEBT_oncolumnchanged, this);
            this.dsTA_SLIP.addEventHandler("oncolumnchanged", this.dsTA_SLIPNT_BOND_oncolumnchanged, this);
            this.dsTA_SLIP_TEMP.addEventHandler("oncolumnchanged", this.dsTA_SLIPNT_BOND_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnSLIP.addEventHandler("onclick", this.btnSLIP_onclick, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdTA_SLIPNT_BOND.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdTA_SLIPNT_BOND.addEventHandler("onheadclick", this.grdTA_SLIPNT_onheadclick, this);
            this.grdTA_SLIPNT_BOND.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_oncelldblclick, this);
            this.grdTA_SLIPNT_DEBT.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdTA_SLIPNT_DEBT.addEventHandler("onheadclick", this.grdTA_SLIPNT_onheadclick, this);
            this.grdTA_SLIPNT_DEBT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_oncelldblclick, this);
            this.btnAutoCheck.addEventHandler("onclick", this.btnAutoCheck_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calSHRBOND_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBOND_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRDEBT_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRDEBT_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBOND_CNTX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBOND_SUMX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDEBT_CNTX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDEBT_SUMX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popSlip.calSLIP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popSlip.btnCreateSlip.addEventHandler("onclick", this.popSlip_btnCreateSlip_onclick, this);
            this.popSlip.btnCreateSlip.addEventHandler("onkeydown", this.popSlip_btnCreateSlip_onkeydown, this);
            this.popSlip.btnCancel.addEventHandler("onclick", this.popSlip_btnCancel_onclick, this);
            this.mskBOND_DEBT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBOND_INT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRBOND_NAM1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRBOND_NAM1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBOND_NAM1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRBOND_INT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRBOND_NAM2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRBOND_NAM2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBOND_NAM2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEBT_INT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEBT_NAM1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEBT_NAM1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEBT_NAM1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEBT_INT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEBT_NAM2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEBT_NAM2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEBT_NAM2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("TRMA0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
