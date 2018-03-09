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
                this.set_name("TRME0010");
                this.set_titletext("법인카드 정보등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CARD_KIND</Col><Col id=\"DSNAME\">dsSHRCARD_KIND</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">CARD_KIND</Col><Col id=\"DSNAME\">dsCARD_KIND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">BANK_CODE</Col><Col id=\"DSNAME\">dsBANK_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRCARD_GUBN</Col><Col id=\"CODEID\">CARD_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsCARD_GUBN</Col><Col id=\"CODEID\">CARD_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRCARD_STAT</Col><Col id=\"CODEID\">CARD_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsCARD_STAT</Col><Col id=\"CODEID\">CARD_STAT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CARDXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CARD_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_KIND\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"USER_EMPL\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SETT_DATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACNT_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_MONT\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"STOP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CARD_STAT\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"USER_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_BANK\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_EMP1\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_EMP2\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_EMP3\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NAM1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NAM2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NAM3\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BEFO_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"BEFO_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "200", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("38");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_CARDXM", "absolute", "8", "154", null, null, "25", "184", this);
            obj.set_selecttype("row");
            obj.set_autoenter("none");
            obj.set_autofittype("none");
            obj.set_binddataset("dsTA_CARDXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("100");
            obj.getSetter("sCommonGubnonheadclick").set("fn_GridSort");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"145\" band=\"left\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"95\"/><Column size=\"65\"/><Column size=\"85\"/><Column size=\"50\"/><Column size=\"145\"/><Column size=\"220\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"카드번호\"/><Cell col=\"1\" text=\"카드명\"/><Cell col=\"2\" displaytype=\"text\" text=\"구분\"/><Cell col=\"3\" displaytype=\"text\" text=\"카드종류\"/><Cell col=\"4\" displaytype=\"text\" text=\"사용자\"/><Cell col=\"5\" displaytype=\"text\" text=\"회계처리자1\"/><Cell col=\"6\" displaytype=\"text\" text=\"회계처리자2\"/><Cell col=\"7\" displaytype=\"text\" text=\"회계처리자3\"/><Cell col=\"8\" displaytype=\"text\" text=\"관리부서\"/><Cell col=\"9\" displaytype=\"text\" text=\"결제일\"/><Cell col=\"10\" displaytype=\"text\" text=\"결제계좌\"/><Cell col=\"11\" displaytype=\"text\" text=\"금융기관\"/><Cell col=\"12\" displaytype=\"text\" text=\"만기월\"/><Cell col=\"13\" displaytype=\"text\" text=\"사용정지일\"/><Cell col=\"14\" displaytype=\"text\" text=\"상태\"/><Cell col=\"15\" text=\"이전카드번호\"/><Cell col=\"16\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:CARD_NUMB\" editlimit=\"30\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CARD_NAME\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:CARD_GUBN\" editlimit=\"50\" editimemode=\"native\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:CARD_KIND\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:USER_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:SLIP_NAM1\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:SLIP_NAM2\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:SLIP_NAM3\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:center;\" text=\"bind:SETT_DATE\" editlimit=\"2\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"none\" style=\"align: left;\" text=\"bind:ACNT_NUMB\" editlimit=\"30\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:BANK_CODE\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"none\" style=\"align: center;\" text=\"bind:ENDX_MONT\" mask=\"expr:comp.parent.fnc_Length(ENDX_MONT) &lt; 1 ? &quot;&quot; : &quot;####-##&quot;\" editlimit=\"6\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"none\" style=\"align: center;\" text=\"bind:STOP_DATE\" editlimit=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" displaytype=\"combo\" edittype=\"none\" style=\"align: center;\" text=\"bind:CARD_STAT\"/><Cell col=\"15\" style=\"align:center;\" text=\"bind:BEFO_CARD\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"none\" style=\"align: left;\" text=\"bind:REMK_NOTE\" editlimit=\"200\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCARD_NAME", "absolute", "784", "71", "160", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRCARD_NUMB", "absolute", "599", "71", "160", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCARD_STAT", "absolute", "360", "97", "143", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static4", "absolute", "292", "97", "68", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("카드상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "168", "97", "14", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "28", "97", "55", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("만기월");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "532", "71", "68", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("카드번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCARD_KIND", "absolute", "360", "71", "143", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static1", "absolute", "292", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("카드종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCARD_GUBN", "absolute", "83", "71", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemCombo");

            obj = new Static("Static0", "absolute", "28", "71", "55", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", null, null, "144", "25", "15", this);
            obj.set_taborder("42");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSLIP_EMP2", "absolute", "913", null, "80", "21", null, "51", this);
            obj.set_taborder("43");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "29", null, "69", "21", null, "129", this);
            obj.set_taborder("44");
            obj.set_text("카드번호 ");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "549", null, "77", "21", null, "129", this);
            obj.set_taborder("45");
            obj.set_text("구분 ");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSER_EMPL", "absolute", "913", null, "80", "21", null, "129", this);
            obj.set_taborder("46");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSER_NAME", "absolute", "1018", null, "123", "21", null, "129", this);
            obj.set_taborder("11");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "297", null, "69", "21", null, "77", this);
            obj.set_taborder("47");
            obj.set_text("결제일 ");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "29", null, "69", "21", null, "77", this);
            obj.set_taborder("48");
            obj.set_text("카드상태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSETT_DATE", "absolute", "367", null, "139", "21", null, "77", this);
            obj.set_taborder("16");
            obj.set_limitbymask("integer");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            obj.set_mask("##");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCARD_GUBN", "absolute", "630", null, "152", "21", null, "129", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_CARDXM");

            obj = new Static("Static14", "absolute", "29", null, "69", "21", null, "103", this);
            obj.set_taborder("49");
            obj.set_text("카드종류 ");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCARD_KIND", "absolute", "98", null, "156", "21", null, "103", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_CARDXM");

            obj = new Static("Static15", "absolute", "823", null, "91", "21", null, "129", this);
            obj.set_taborder("50");
            obj.set_text("실사용자 ");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "297", null, "77", "21", null, "103", this);
            obj.set_taborder("51");
            obj.set_text("결제계좌 ");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACNT_NUMB", "absolute", "482", null, "116", "21", null, "103", this);
            obj.set_taborder("26");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "549", null, "77", "21", null, "77", this);
            obj.set_taborder("52");
            obj.set_text("만기월 ");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "549", null, "77", "21", null, "51", this);
            obj.set_taborder("53");
            obj.set_text("사용정지일 ");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSTOP_DATE", "absolute", "630", null, "152", "21", null, "51", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsTA_CARDXM");

            obj = new Combo("cmbCARD_STAT", "absolute", "98", null, "156", "21", null, "77", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTA_CARDXM");

            obj = new Static("Static20", "absolute", "29", null, "69", "21", null, "25", this);
            obj.set_taborder("54");
            obj.set_text("비고 ");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_NOTE", "absolute", "98", null, "684", "21", null, "25", this);
            obj.set_taborder("22");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBANK_CODE", "absolute", "367", null, "113", "21", null, "103", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            obj.set_displayrowcount("-1");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Static("Static6", "absolute", "823", null, "91", "21", null, "77", this);
            obj.set_taborder("55");
            obj.set_text("회계처리자1");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSLIP_EMP1", "absolute", "913", null, "80", "21", null, "77", this);
            obj.set_taborder("56");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSLIP_NAM1", "absolute", "1018", null, "123", "21", null, "77", this);
            obj.set_taborder("18");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "823", null, "91", "21", null, "51", this);
            obj.set_taborder("57");
            obj.set_text("회계처리자2");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSLIP_NAM2", "absolute", "1018", null, "123", "21", null, "51", this);
            obj.set_taborder("21");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "823", null, "91", "21", null, "103", this);
            obj.set_taborder("58");
            obj.set_text("관리부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSEX_DEPT", "absolute", "913", null, "80", "21", null, "103", this);
            obj.set_taborder("59");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "1018", null, "123", "21", null, "103", this);
            obj.set_taborder("14");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "29", null, "69", "37", null, "43", this);
            obj.set_taborder("60");
            obj.set_text("이전\r\n카드번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBEFO_CARD", "absolute", "98", null, "156", "21", null, "51", this);
            obj.set_taborder("30");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBEFO_NAME", "absolute", "279", null, "227", "21", null, "51", this);
            obj.set_taborder("19");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgBEFO_CARD", "absolute", "256", null, "21", "21", null, "51", this);
            obj.set_taborder("31");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpUSER_NAME", "absolute", "995", null, "21", "21", null, "129", this);
            obj.set_taborder("25");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpUSEX_DEPT", "absolute", "995", null, "21", "21", null, "103", this);
            obj.set_taborder("28");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSLIP_NAM1", "absolute", "995", null, "21", "21", null, "77", this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSLIP_NAM2", "absolute", "995", null, "21", "21", null, "51", this);
            obj.set_taborder("32");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgSHRCARD_NUMB", "absolute", "761", "71", "21", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACNT_NAME", "absolute", "623", null, "159", "21", null, "103", this);
            obj.set_taborder("13");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpACNT_NUMB", "absolute", "600", null, "21", "21", null, "103", this);
            obj.set_taborder("61");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("62");
            obj.set_text("법인카드 정보등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("63");
            obj.set_text("홈 > 재무관리 > 자금관리 > 법인카드관리 > 법인카드 정보등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("64");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("66");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("67");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("68");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("69");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("71");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("72");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("73");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "263", "61", "40", "67", null, null, this);
            obj.set_taborder("74");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "428", "118", "38", "10", null, null, this);
            obj.set_taborder("75");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "428", "92", "102", "5", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "416", "61", "38", "10", null, null, this);
            obj.set_taborder("77");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "503", "61", "40", "67", null, null, this);
            obj.set_taborder("78");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "573", "533", "80", "25", null, null, this);
            obj.set_taborder("79");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "9", "578", "30", "67", null, null, this);
            obj.set_taborder("80");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "1141", "578", "20", "67", null, null, this);
            obj.set_taborder("81");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCARD_NUMB", "absolute", "98", null, "156", "21", null, "129", this);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.set_visible("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("divENDX_MONT", "absolute", "630", null, "152", "21", null, "77", this);
            obj.set_taborder("17");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "297", null, "77", "21", null, "129", this);
            obj.set_taborder("82");
            obj.set_text("카드명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCARD_NAME", "absolute", "367", null, "139", "21", null, "129", this);
            obj.set_taborder("9");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRENDX_MON1", "absolute", "83", "97", "80", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRENDX_MON2", "absolute", "183", "97", "80", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileDown", "absolute", "8", "35", "98", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload", "absolute", "109", "35", "86", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("85");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("86");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "532", "99", "68", "21", null, null, this);
            obj.set_taborder("87");
            obj.set_text("관리부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSHRUSEX_DEPT", "absolute", "681", "99", "21", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "704", "99", "123", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRUSEX_DEPT", "absolute", "599", "99", "80", "21", null, null, this);
            obj.set_taborder("89");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "823", null, "91", "21", null, "25", this);
            obj.set_taborder("90");
            obj.set_text("회계처리자3");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSLIP_EMP3", "absolute", "913", null, "80", "21", null, "25", this);
            obj.set_taborder("91");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSLIP_NAM3", "absolute", "995", null, "21", "21", null, "25", this);
            obj.set_taborder("92");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSLIP_NAM3", "absolute", "1018", null, "123", "21", null, "25", this);
            obj.set_taborder("23");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_CARDXM");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("법인카드 정보등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","edtBEFO_NAME","value","dsTA_CARDXM","BEFO_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","mskBEFO_CARD","value","dsTA_CARDXM","BEFO_CARD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtDEPT_NAME","value","dsTA_CARDXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtUSEX_DEPT","value","dsTA_CARDXM","USEX_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSLIP_NAM2_value","edtSLIP_NAM2","value","dsTA_CARDXM","SLIP_NAM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSLIP_NAM1_value","edtSLIP_NAM1","value","dsTA_CARDXM","SLIP_NAM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSLIP_EMP1_value","edtSLIP_EMP1","value","dsTA_CARDXM","SLIP_EMP1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbBANK_CODE_value","cmbBANK_CODE","value","dsTA_CARDXM","BANK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREMK_NOTE_value","edtREMK_NOTE","value","dsTA_CARDXM","REMK_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbCARD_STAT_value","cmbCARD_STAT","value","dsTA_CARDXM","CARD_STAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calSTOP_DATE_value","calSTOP_DATE","value","dsTA_CARDXM","STOP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACNT_NUMB_value","edtACNT_NUMB","value","dsTA_CARDXM","ACNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbCARD_KIND_value","cmbCARD_KIND","value","dsTA_CARDXM","CARD_KIND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbCARD_GUBN_value","cmbCARD_GUBN","value","dsTA_CARDXM","CARD_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medSETT_DATE_value","mskSETT_DATE","value","dsTA_CARDXM","SETT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUSER_NAME_value","edtUSER_NAME","value","dsTA_CARDXM","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUSER_EMPL_value","edtUSER_EMPL","value","dsTA_CARDXM","USER_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSLIP_EMP2_value","edtSLIP_EMP2","value","dsTA_CARDXM","SLIP_EMP2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtACNT_NAME","value","dsTA_CARDXM","ACNT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","mskCARD_NUMB","value","dsTA_CARDXM","CARD_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtCARD_NAME","value","dsTA_CARDXM","CARD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtSLIP_EMP3","value","dsTA_CARDXM","SLIP_EMP3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtSLIP_NAM3","value","dsTA_CARDXM","SLIP_NAM3");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TRME0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRME0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRME0010 법인카드 정보등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.08		김준수		Initial Created.
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
         *  공통 Script Include *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TRME0010";
        this.aKeyValue    = new Array(1);

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetComboDs(this.dsCombo);
            
            //만기월 데이터셋 바인딩
        	var bindInfo = new Object;
        	bindInfo.binddataset = this.dsTA_CARDXM;
        	bindInfo.bindcolumn = "ENDX_MONT";
        	this.divENDX_MONT.fn_SetBindInfo(bindInfo);
        	
        	this.divSHRENDX_MON1.fn_SetMonth("");
        	this.divSHRENDX_MON2.fn_SetMonth("");
        	
            this.cmbSHRCARD_GUBN.setFocus();
            
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
            
            this.fnc_DatasetClear("dsTA_CARDXM");
            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_CARDXM=dsTA_CARDXM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDXM.setFocus();
            
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

            var iRow = this.dsTA_CARDXM.addRow();
            this.dsTA_CARDXM.setColumn(iRow, "CARD_GUBN", "0");    //구분
            this.dsTA_CARDXM.setColumn(iRow, "CARD_KIND", "300");  //카드종류
            this.dsTA_CARDXM.setColumn(iRow, "SETT_DATE", 27);     //결제일
            this.dsTA_CARDXM.setColumn(iRow, "CARD_STAT", "0");    //상태
            
            this.edtACNT_NUMB.set_value("");    //결제계좌
            this.fn_HelpDialoge(this.edtACNT_NUMB);
            this.edtACNT_NUMB.set_value("426-004207-13-001");    //결제계좌
            this.fn_HelpDialoge(this.edtACNT_NUMB);
        	
            this.fnc_GridSetCellFocus(this.grdTA_CARDXM, "CARD_NUMB");    
            this.mskCARD_NUMB.setFocus();
            
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
            if (this.fn_DeleteCheck()) this.dsTA_CARDXM.deleteRow(this.dsTA_CARDXM.rowposition);
            this.grdTA_CARDXM.setFocus();
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
            this.fnc_DataSetCancel("dsTA_CARDXM");
            this.grdTA_CARDXM.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

            if (!this.fn_SaveItemCheck()) return;
            this.aKeyValue[0] = this.dsTA_CARDXM.getColumn(this.dsTA_CARDXM.rowposition, "CARD_NUMB");

            var sMethodName = "SAVE00";
            var sInDataSet  = "dsTA_CARDXM=dsTA_CARDXM:U";
            var sOutDataSet = "dsTA_CARDXM=dsTA_CARDXM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDXM.setFocus();
            
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
            // 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
            if(e.fromobject instanceof Div) return;
            var sMessage = this.fnc_FormUnloadCheck("dsTA_CARDXM", this);
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
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_CARDXM")) return this.fnc_Message("TMM023");
        	
        	return true;
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck("dsTA_CARDXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsTA_CARDXM.getRowCount(); i++) {
        	
        		if (this.dsTA_CARDXM.getRowType(i) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Replace(this.fnc_Trim(this.dsTA_CARDXM.getColumn(i, "CARD_NUMB")), "-", "")) < 16) {
        			return this.fnc_CheckPostAction("TMM072", "카드번호(16자리)", this.dsTA_CARDXM, i, this.mskCARD_NUMB, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDXM.getColumn(i, "CARD_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "카드명", this.dsTA_CARDXM, i, this.edtCARD_NAME, "");
        		}
        		
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
        	var sQuestionText = "카드번호 (" + this.fnc_Trim(this.dsTA_CARDXM.getColumn(this.dsTA_CARDXM.rowposition, "CARD_NUMB")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " CARD_GUBN="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCARD_GUBN.value)); //구분
        		sReturnString += " CARD_KIND="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCARD_KIND.value)); //카드종류
        		sReturnString += " CARD_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.mskSHRCARD_NUMB.value)); //카드번호
        		sReturnString += " ENDX_MON1=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRENDX_MON1.fn_GetMonth())); //만기월FROM
        		sReturnString += " ENDX_MON2=" 	+ this.fnc_Quote(this.fnc_Trim(this.divSHRENDX_MON2.fn_GetMonth())); //만기월TO
        		sReturnString += " CARD_STAT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCARD_STAT.value)); //카드상태
        		sReturnString += " USEX_DEPT="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRUSEX_DEPT.value)); //관리부서
        		
        	} else if (sKind == "SAVE00")	{

        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " CARD_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.mskCARD_NUMB.text));	//'-' 하이펀 있는 상태의 카드번호
        		
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
        		
        		this.fnc_Information(this.stInformation, this.dsTA_CARDXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_CARDXM.rowcount);
        		
        		var iRow = this.dsTA_CARDXM.findRowExpr("CARD_NUMB=='" + this.aKeyValue[0] + "'");
        		if (iRow < 0) iRow = 0;
        		
         		this.grdTA_CARDXM.selectRow(iRow);
         		this.dsTA_CARDXM.set_rowposition(iRow);
        		
        		this.aKeyValue[0] = "";
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        		this.fn_Search();		
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRCARD_GUBN,dsSHRCARD_GUBN,0";
        			arrParam[1] = "COMBO,cmbSHRCARD_KIND,dsSHRCARD_KIND,0";
        			arrParam[2] = "COMBO,cmbSHRCARD_STAT,dsSHRCARD_STAT,1";
        			arrParam[3] = "COMBO,cmbCARD_GUBN,dsCARD_GUBN,0";
        			arrParam[4] = "COMBO,cmbCARD_KIND,dsCARD_KIND,0";
        			arrParam[5] = "COMBO,cmbBANK_CODE,dsBANK_CODE,0";
        			arrParam[6] = "COMBO,cmbCARD_STAT,dsCARD_STAT,0";
        			arrParam[7] = "GRID,grdTA_CARDXM,dsCARD_GUBN,CARD_GUBN";
        			arrParam[8] = "GRID,grdTA_CARDXM,dsCARD_KIND,CARD_KIND";
        			arrParam[9] = "GRID,grdTA_CARDXM,dsBANK_CODE,BANK_CODE";
        			arrParam[10] = "GRID,grdTA_CARDXM,dsCARD_STAT,CARD_STAT";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}
        }

        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpUSER_NAME") || (obj.name == "edtUSER_NAME")) {

        		arrParam[0] = "FAM0012";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtUSER_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtUSER_NAME";
        		arrParam[5] = "edtUSER_EMPL,edtUSER_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpACNT_NUMB") || (obj.name == "edtACNT_NAME") || (obj.name == "edtACNT_NUMB")) {
        		
        		var sVal;		
        		if (obj.name == "edtACNT_NUMB") {
        			sVal = this.fnc_Trim(this.edtACNT_NUMB.value);
        		} else {
        			sVal = this.fnc_Trim(this.edtACNT_NAME.value);
        		}
        		
        		arrParam[0] = "TRM0013";
        		arrParam[1] = "";
        		arrParam[2] = sVal;
        		arrParam[3] = "Y";
        		arrParam[4] = "edtACNT_NAME";
        		arrParam[5] = "edtACNT_NUMB,edtACNT_NAME,cmbBANK_CODE";
        		arrParam[6] = "2,3,0";	
        		
        	} else if ((obj.name == "imgHelpUSEX_DEPT") || (obj.name == "edtDEPT_NAME")) {

        		arrParam[0] = "FAM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "edtDEPT_NAME";
        		arrParam[5] = "edtUSEX_DEPT,edtDEPT_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSLIP_NAM1") || (obj.name == "edtSLIP_NAM1")) {

        		arrParam[0] = "FAM0012";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSLIP_NAM1.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSLIP_NAM1";
        		arrParam[5] = "edtSLIP_EMP1,edtSLIP_NAM1";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSLIP_NAM2") || (obj.name == "edtSLIP_NAM2")) {

        		arrParam[0] = "FAM0012";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSLIP_NAM2.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSLIP_NAM2";
        		arrParam[5] = "edtSLIP_EMP2,edtSLIP_NAM2";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSLIP_NAM3") || (obj.name == "edtSLIP_NAM3")) {

        		arrParam[0] = "FAM0012";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSLIP_NAM3.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSLIP_NAM3";
        		arrParam[5] = "edtSLIP_EMP3,edtSLIP_NAM3";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgBEFO_CARD") || (obj.name == "edtBEFO_NAME")) {

        		arrParam[0] = "TRM0031";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtBEFO_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtBEFO_NAME";
        		arrParam[5] = "mskBEFO_CARD,edtBEFO_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgSHRCARD_NUMB") || (obj.name == "edtSHRCARD_NAME")) {

        		arrParam[0] = "TRM0031";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCARD_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRCARD_NAME";
        		arrParam[5] = "mskSHRCARD_NUMB,edtSHRCARD_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgSHRUSEX_DEPT") || (obj.name == "edtSHRDEPT_NAME")) {

        		arrParam[0] = "FAM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRUSEX_DEPT,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";
        		
        	}
        	
        	if (this.fnc_Length(arrParam) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                              *
         **************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         **************************************************************************************************/
        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e){

        	if (e.newrow < 0)	return;
        	if (this.dsTA_CARDXM.getRowCount() < 1) return;
        	
        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT){
        		
        		this.fnc_SetReadonly(this.mskCARD_NUMB, false);
        			
        	} else {
        		
        		this.fnc_SetReadonly(this.mskCARD_NUMB, true);

        	}
        	
        }

        /*---------------------+
         |  데이터 변경 시     |
         +---------------------*/
        this.dsTA_CARDXM_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "CARD_NUMB") {
        		if (this.fnc_Length(e.newvalue) == 16) {
        			obj.setColumn(e.row, "CARD_NUMB", this.fnc_GetMaskFormat(e.newvalue, "####-####-####-####"));
        		}
        	}
        	
        }

        /*--------------------------------+
         |  양식다운로드 버튼 클릭 시     |
         +--------------------------------*/
        this.fn_ExcelFileDown = function(obj,e) {
        	
        	this.fnc_FileDownLoad("", "", "", this.sPACKAGENAME);
        	
        }

        /*--------------------------------+
         |  엑셀업로드 버튼 클릭 시     |
         +--------------------------------*/
        this.fn_ExcelUpLoad = function(obj,e) {
        	
        	if (this.fnc_DatasetChangeCheck("dsTA_CARDXM")) {
        		if (!this.fnc_Message("TMM023")) return;
        	}
        	
        	this.fnc_DatasetClear("dsTA_CARDXM");
        	this.fnc_ExcelUpload("dsTA_CARDXM", "Sheet1", "A2", "fn_ExcelSuccess");
        	
        }

        /*---------------------------------------+
         |  양식파일 업로드 클릭 時 후처리함수   |
         +---------------------------------------*/
        this.fn_ExcelSuccess = function(obj,e) {

        	this.setWaitCursor(false);
        	
        	this.dsTA_CARDXM.set_enableevent(false);
        	this.dsTA_CARDXM.set_updatecontrol(false);
        	
        	for (var i = 0; i < this.objDsImportTemp.rowcount; i++) {
        		
        		var iRow = this.dsTA_CARDXM.addRow();
        		this.dsTA_CARDXM.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		
        		var sCard_Numb = this.fnc_Trim(this.objDsImportTemp.getColumn(i, 0)); //카드번호
        		if (this.fnc_Length(sCard_Numb) == 16) sCard_Numb = this.fnc_GetMaskFormat(sCard_Numb, "####-####-####-####");
        		
        		var sBefo_Card = this.fnc_Trim(this.objDsImportTemp.getColumn(i, 14)); //이전카드번호
        		if (this.fnc_Length(sBefo_Card) == 16) sBefo_Card = this.fnc_GetMaskFormat(sBefo_Card, "####-####-####-####");
        		
        		this.dsTA_CARDXM.setColumn(iRow, "CARD_NUMB", sCard_Numb); //카드번호		
        		this.dsTA_CARDXM.setColumn(iRow, "PURE_CDNB", this.fnc_Replace(sCard_Numb, "-", "")); //순수카드번호
        		this.dsTA_CARDXM.setColumn(iRow, "CARD_NAME", this.objDsImportTemp.getColumn(i, 1)); //카드명
        		this.dsTA_CARDXM.setColumn(iRow, "CARD_GUBN", this.objDsImportTemp.getColumn(i, 2)); //카드구분
        		this.dsTA_CARDXM.setColumn(iRow, "CARD_KIND", this.objDsImportTemp.getColumn(i, 3)); //카드종류
        		this.dsTA_CARDXM.setColumn(iRow, "USEX_DEPT", this.objDsImportTemp.getColumn(i, 4)); //사용부서
        		this.dsTA_CARDXM.setColumn(iRow, "USER_EMPL", this.objDsImportTemp.getColumn(i, 5)); //사용자
        		this.dsTA_CARDXM.setColumn(iRow, "SLIP_EMP1", this.objDsImportTemp.getColumn(i, 6)); //회계처리자1
        		this.dsTA_CARDXM.setColumn(iRow, "SLIP_EMP2", this.objDsImportTemp.getColumn(i, 7)); //회계처리자2
        		this.dsTA_CARDXM.setColumn(iRow, "SETT_DATE", this.objDsImportTemp.getColumn(i, 8)); //결제일
        		this.dsTA_CARDXM.setColumn(iRow, "BANK_CODE", this.objDsImportTemp.getColumn(i, 9)); //은행코드
        		this.dsTA_CARDXM.setColumn(iRow, "ACNT_NUMB", this.objDsImportTemp.getColumn(i, 10)); //계좌번호
        		this.dsTA_CARDXM.setColumn(iRow, "ENDX_MONT", this.fnc_Replace(this.objDsImportTemp.getColumn(i, 11), "-", "")); //만기월
        		this.dsTA_CARDXM.setColumn(iRow, "STOP_DATE", this.fnc_Replace(this.objDsImportTemp.getColumn(i, 12), "-", "")); //사용정지일
        		this.dsTA_CARDXM.setColumn(iRow, "CARD_STAT", this.objDsImportTemp.getColumn(i, 13)); //카드상태
        		this.dsTA_CARDXM.setColumn(iRow, "BEFO_CARD", sBefo_Card); //이전카드번호
        		this.dsTA_CARDXM.setColumn(iRow, "REMK_NOTE", this.objDsImportTemp.getColumn(i, 15)); //비고
        		
        	}
        	this.objDsImportTemp.clear();
        	
        	this.dsTA_CARDXM.set_updatecontrol(true);
        	this.dsTA_CARDXM.set_enableevent(true);
        	
        	this.dsTA_CARDXM.set_rowposition(0);
        	this.grdTA_CARDXM.setFocus();

        	this.stInformation.set_text("[" + (this.dsTA_CARDXM.rowcount + "]건의 데이터를 로드 했습니다."));
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_CARDXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTA_CARDXM.addEventHandler("oncolumnchanged", this.dsTA_CARDXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onclick", this.FCMA0410_onclick, this);
            this.edtSHRCARD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCARD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSHRCARD_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCARD_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCARD_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCARD_GUBN.addEventHandler("onitemchanged", this.cmbSHRCARD_GUBN_onitemchanged, this);
            this.cmbSHRCARD_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSLIP_EMP2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUSER_EMPL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUSER_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtUSER_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSETT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCARD_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCARD_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSTOP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCARD_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREMK_NOTE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBANK_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSLIP_EMP1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSLIP_NAM1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSLIP_NAM1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSLIP_NAM2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSLIP_NAM2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtUSEX_DEPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBEFO_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBEFO_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgBEFO_CARD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpUSER_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpUSEX_DEPT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSLIP_NAM1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSLIP_NAM2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgSHRCARD_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtACNT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACNT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpACNT_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.mskCARD_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divENDX_MONT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCARD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divSHRENDX_MON1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divSHRENDX_MON2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnFileDown.addEventHandler("onclick", this.fn_ExcelFileDown, this);
            this.btnExcelUpload.addEventHandler("onclick", this.fn_ExcelUpLoad, this);
            this.imgSHRUSEX_DEPT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRUSEX_DEPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSLIP_EMP3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSLIP_NAM3.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSLIP_NAM3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSLIP_NAM3.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("TRME0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
