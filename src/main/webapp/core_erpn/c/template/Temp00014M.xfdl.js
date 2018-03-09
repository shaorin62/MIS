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
                this.set_name("Temp00014M");
                this.set_scrollbars("none");
                this.set_titletext("조회(1) 예외상세(4)");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_RTBASE", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YEAR\" size=\"4\" type=\"STRING\"/><Column id=\"GERT_RATE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"VORN_RATE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CWR1_YCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CWR2_YCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CWR3_YCNT\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"ADD1_ATDD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ADD2_ATDD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ADD3_ATDD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"ADD4_ATDD\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"PRDT_PMRT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AITD_RATE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"AITD_OVDW\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CON1_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CON2_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CON3_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CON4_AMOT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"CON1_RATE\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CON2_RATE\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CON3_RATE\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CON4_RATE\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CON5_RATE\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CLC1_RATE\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"CLC2_RATE\" size=\"5\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSTDS_YEAR</Col><Col id=\"HEADFLAG\">0</Col><Col id=\"PARAM\">기준년도</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">PAYF0010</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static90", "absolute", "8", "221", null, "31", "25", null, this);
            obj.set_taborder("219");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "8", "191", null, "31", "25", null, this);
            obj.set_taborder("217");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "8", "128", null, "31", "25", null, this);
            obj.set_taborder("214");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "8", "128", "160", "31", null, null, this);
            obj.set_taborder("213");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", "170", "178", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("퇴직급여비례공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSTDS_YEAR", "absolute", "173", "133", "120", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("49");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("50");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("52");
            obj.set_text("퇴직세액근거표");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("53");
            obj.set_text("홈 > 급여관리 > 퇴직금관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("68");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTDS_YEAR", "absolute", "103", "71", "108", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.style.set_align("center middle");

            obj = new Static("Static59", "absolute", "290", null, "65", "25", null, "589", this);
            obj.set_taborder("208");
            obj.set_text("h25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "42", null, "89", "15", null, "543", this);
            obj.set_taborder("210");
            obj.set_text("h28");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "8", "191", "160", "31", null, null, this);
            obj.set_taborder("216");
            obj.set_text("① 일반퇴직급여");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "8", "221", "160", "31", null, null, this);
            obj.set_taborder("218");
            obj.set_text("② 명예퇴직급여");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "174", "226", "78", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("퇴직급여액  *");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskVORN_RATE", "absolute", "257", "226", "56", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.getSetter("inputtype").set("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "318", "196", "17", "21", null, null, this);
            obj.set_taborder("206");
            obj.set_text("%");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "318", "226", "17", "21", null, null, this);
            obj.set_taborder("207");
            obj.set_text("%");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskGERT_RATE", "absolute", "257", "196", "56", "21", null, null, this);
            obj.set_taborder("2");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("maxlength").set("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "174", "196", "78", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("퇴직급여액  *");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "284", null, "130", "25", null, this);
            obj.set_taborder("220");
            obj.set_cssclass("styFormItemBoxOut");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "263", "178", "21", null, null, this);
            obj.set_taborder("221");
            obj.set_text("근속연수 공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "42", null, "89", "15", null, "450", this);
            obj.set_taborder("222");
            obj.set_text("h28");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "86", "324", "47", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_text("년 초과");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "86", "295", "47", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_text("년 이하");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCWR1_YCNT", "absolute", "40", "295", "41", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("inputtype").set("number");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCWR1_YCNT1", "absolute", "40", "324", "41", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "23", "382", "19", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_text("④");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "23", "353", "19", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_text("③");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCWR2_YCNT1", "absolute", "40", "353", "41", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("0");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCWR3_YCNT1", "absolute", "40", "382", "41", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("0");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "86", "353", "47", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("년 초과");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "86", "382", "47", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_text("년 초과");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "138", "324", "19", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("~");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "138", "353", "19", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("~");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCWR2_YCNT", "absolute", "161", "324", "41", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("inputtype").set("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "207", "324", "47", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("년 이하");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "207", "353", "47", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("년 이하");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCWR3_YCNT", "absolute", "161", "353", "41", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.getSetter("inputtype").set("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "161", "303", "462", "10", null, null, this);
            obj.set_taborder("77");
            obj.style.set_border("1 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBASE_AMT1", "absolute", "493", "324", "84", "21", null, null, this);
            obj.set_taborder("23");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "582", "324", "57", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("만원  + ");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "253", "334", "234", "10", null, null, this);
            obj.set_taborder("80");
            obj.style.set_border("1 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskADD2_ATDD", "absolute", "629", "324", "84", "21", null, null, this);
            obj.set_taborder("7");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "718", "324", "121", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_text("만원  *  (근속연수  - ");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCWR1_YCNT2", "absolute", "841", "324", "41", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "887", "324", "17", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_text("년)");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskADD1_ATDD", "absolute", "629", "295", "84", "21", null, null, this);
            obj.set_taborder("5");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "718", "295", "121", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_text("만원  *  근속연수");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBASE_AMT2", "absolute", "493", "353", "84", "21", null, null, this);
            obj.set_taborder("26");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "582", "353", "57", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_text("만원  + ");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "253", "363", "234", "10", null, null, this);
            obj.set_taborder("89");
            obj.style.set_border("1 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskADD3_ATDD", "absolute", "629", "353", "84", "21", null, null, this);
            obj.set_taborder("9");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "718", "353", "121", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_text("만원  *  (근속연수  - ");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCWR2_YCNT2", "absolute", "841", "353", "41", "21", null, null, this);
            obj.set_taborder("27");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "887", "353", "17", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("년)");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBASE_AMT3", "absolute", "493", "382", "84", "21", null, null, this);
            obj.set_taborder("29");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "582", "382", "57", "21", null, null, this);
            obj.set_taborder("95");
            obj.set_text("만원  + ");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskADD4_ATDD", "absolute", "629", "382", "84", "21", null, null, this);
            obj.set_taborder("10");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "718", "382", "121", "21", null, null, this);
            obj.set_taborder("97");
            obj.set_text("만원  *  (근속연수  - ");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCWR3_YCNT3", "absolute", "841", "382", "41", "21", null, null, this);
            obj.set_taborder("30");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "887", "382", "17", "21", null, null, this);
            obj.set_taborder("99");
            obj.set_text("년)");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "161", "392", "326", "10", null, null, this);
            obj.set_taborder("100");
            obj.style.set_border("1 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "23", "295", "19", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("①");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "23", "324", "19", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("②");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "42", null, "89", "15", null, "288", this);
            obj.set_taborder("223");
            obj.set_text("h28");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "8", "425", "178", "21", null, null, this);
            obj.set_taborder("224");
            obj.set_text("환산급여별 공제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "8", "446", null, "159", "25", null, this);
            obj.set_taborder("225");
            obj.set_cssclass("styFormItemBoxOut");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "23", "486", "19", "21", null, null, this);
            obj.set_taborder("103");
            obj.set_text("②");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "129", "486", "57", "21", null, null, this);
            obj.set_taborder("104");
            obj.set_text("만원 초과");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "129", "457", "57", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_text("만원 이하");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON1_AMOT", "absolute", "40", "457", "84", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON1_AMOT_2", "absolute", "40", "486", "84", "21", null, null, this);
            obj.set_taborder("31");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("0");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "23", "544", "19", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_text("④");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "23", "515", "19", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("③");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON2_AMOT", "absolute", "197", "486", "84", "21", null, null, this);
            obj.set_taborder("13");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "286", "486", "57", "21", null, null, this);
            obj.set_taborder("117");
            obj.set_text("만원 이하");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON1_CALC", "absolute", "354", "486", "84", "21", null, null, this);
            obj.set_taborder("32");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "443", "486", "57", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_text("만원 + ");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON1_AMOT_3", "absolute", "493", "486", "84", "21", null, null, this);
            obj.set_taborder("33");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "582", "486", "37", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_text("만원");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON1_RATE", "absolute", "698", "457", "60", "21", null, null, this);
            obj.set_taborder("12");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.getSetter("maxlength").set("3");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("!###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "629", "457", "67", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_text("환산급여의");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "763", "457", "17", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_text("%");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "629", "486", "67", "21", null, null, this);
            obj.set_taborder("145");
            obj.set_text("초과금액의");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON2_RATE", "absolute", "698", "486", "60", "21", null, null, this);
            obj.set_taborder("14");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("!###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "763", "486", "17", "21", null, null, this);
            obj.set_taborder("147");
            obj.set_text("%");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "129", "515", "57", "21", null, null, this);
            obj.set_taborder("148");
            obj.set_text("만원 초과");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON2_AMOT_2", "absolute", "40", "515", "84", "21", null, null, this);
            obj.set_taborder("34");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("0");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON3_AMOT", "absolute", "197", "515", "84", "21", null, null, this);
            obj.set_taborder("15");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "286", "515", "57", "21", null, null, this);
            obj.set_taborder("151");
            obj.set_text("만원 이하");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON2_CALC", "absolute", "354", "515", "84", "21", null, null, this);
            obj.set_taborder("35");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "443", "515", "57", "21", null, null, this);
            obj.set_taborder("153");
            obj.set_text("만원 + ");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON2_AMOT_3", "absolute", "493", "515", "84", "21", null, null, this);
            obj.set_taborder("36");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "582", "515", "37", "21", null, null, this);
            obj.set_taborder("155");
            obj.set_text("만원");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "629", "515", "67", "21", null, null, this);
            obj.set_taborder("156");
            obj.set_text("초과금액의");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON3_RATE", "absolute", "698", "515", "60", "21", null, null, this);
            obj.set_taborder("16");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("!###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "129", "544", "57", "21", null, null, this);
            obj.set_taborder("158");
            obj.set_text("만원 초과");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON3_AMOT_2", "absolute", "40", "544", "84", "21", null, null, this);
            obj.set_taborder("37");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("0");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON4_AMOT", "absolute", "197", "544", "84", "21", null, null, this);
            obj.set_taborder("17");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "286", "544", "57", "21", null, null, this);
            obj.set_taborder("161");
            obj.set_text("만원 이하");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON3_CALC", "absolute", "354", "544", "84", "21", null, null, this);
            obj.set_taborder("38");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "443", "544", "57", "21", null, null, this);
            obj.set_taborder("163");
            obj.set_text("만원 + ");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON3_AMOT_3", "absolute", "493", "544", "84", "21", null, null, this);
            obj.set_taborder("39");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "582", "544", "37", "21", null, null, this);
            obj.set_taborder("165");
            obj.set_text("만원");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "629", "544", "67", "21", null, null, this);
            obj.set_taborder("166");
            obj.set_text("초과금액의");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON4_RATE", "absolute", "698", "544", "60", "21", null, null, this);
            obj.set_taborder("18");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("!###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "129", "573", "57", "21", null, null, this);
            obj.set_taborder("168");
            obj.set_text("만원 초과");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON4_AMOT_2", "absolute", "40", "573", "84", "21", null, null, this);
            obj.set_taborder("40");
            obj.getSetter("lengthunit").set("utf16");
            obj.getSetter("maxlength").set("0");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON4_CALC", "absolute", "354", "573", "84", "21", null, null, this);
            obj.set_taborder("41");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "443", "573", "57", "21", null, null, this);
            obj.set_taborder("173");
            obj.set_text("만원 + ");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON4_AMOT_3", "absolute", "493", "573", "84", "21", null, null, this);
            obj.set_taborder("42");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("true");
            obj.getSetter("maxlength").set("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "582", "573", "37", "21", null, null, this);
            obj.set_taborder("175");
            obj.set_text("만원");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "629", "573", "67", "21", null, null, this);
            obj.set_taborder("176");
            obj.set_text("초과금액의");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCON5_RATE", "absolute", "698", "573", "60", "21", null, null, this);
            obj.set_taborder("19");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("!###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "763", "515", "17", "21", null, null, this);
            obj.set_taborder("178");
            obj.set_text("%");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "763", "544", "17", "21", null, null, this);
            obj.set_taborder("179");
            obj.set_text("%");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "763", "573", "17", "21", null, null, this);
            obj.set_taborder("180");
            obj.set_text("%");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "197", "583", "141", "10", null, null, this);
            obj.set_taborder("227");
            obj.style.set_border("1 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "197", "467", "413", "10", null, null, this);
            obj.set_taborder("228");
            obj.style.set_border("1 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff,0 dashed #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "23", "573", "19", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_text("⑤");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "23", "457", "19", "21", null, null, this);
            obj.set_taborder("102");
            obj.set_text("①");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "8", "667", null, "31", "25", null, this);
            obj.set_taborder("229");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "8", "637", null, "31", "25", null, this);
            obj.set_taborder("230");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "8", "616", "178", "21", null, null, this);
            obj.set_taborder("231");
            obj.set_text("특례적용 산출비율 추가");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "42", null, "89", "15", null, "97", this);
            obj.set_taborder("232");
            obj.set_text("h28");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "8", "637", "160", "31", null, null, this);
            obj.set_taborder("233");
            obj.set_text("① 종전 규정");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "8", "667", "160", "31", null, null, this);
            obj.set_taborder("235");
            obj.set_text("② 개정 규정");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "285", "642", "17", "21", null, null, this);
            obj.set_taborder("197");
            obj.set_text("%");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCLC2_RATE", "absolute", "240", "672", "40", "21", null, null, this);
            obj.set_taborder("21");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("!###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "174", "672", "67", "21", null, null, this);
            obj.set_taborder("200");
            obj.set_text("산출세액의");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "285", "672", "17", "21", null, null, this);
            obj.set_taborder("201");
            obj.set_text("%");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCLC1_RATE", "absolute", "240", "642", "40", "21", null, null, this);
            obj.set_taborder("20");
            obj.getSetter("lengthunit").set("utf16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsHR_MASTXD");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("15");
            obj.getSetter("inputtype").set("number");
            obj.set_mask("!###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "174", "642", "67", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_text("산출세액의");
            obj.set_cssclass("LV2_SUB");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("조회(1) 예외상세(4)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","mskSTDS_YEAR","value","dsPY_RTBASE","STDS_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","mskGERT_RATE","value","dsPY_RTBASE","GERT_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","mskVORN_RATE","value","dsPY_RTBASE","VORN_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","mskCWR1_YCNT","value","dsPY_RTBASE","CWR1_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","mskCWR1_YCNT1","value","dsPY_RTBASE","CWR1_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","mskCWR2_YCNT1","value","dsPY_RTBASE","CWR2_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","mskCWR3_YCNT1","value","dsPY_RTBASE","CWR3_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","mskCWR2_YCNT","value","dsPY_RTBASE","CWR2_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","mskCWR3_YCNT","value","dsPY_RTBASE","CWR3_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","mskBASE_AMT1","value","dsPY_RTBASE","BASE_AMT1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","mskADD2_ATDD","value","dsPY_RTBASE","ADD2_ATDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","mskCWR1_YCNT2","value","dsPY_RTBASE","CWR1_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","mskADD1_ATDD","value","dsPY_RTBASE","ADD1_ATDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","mskBASE_AMT2","value","dsPY_RTBASE","BASE_AMT2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","mskADD3_ATDD","value","dsPY_RTBASE","ADD3_ATDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","mskCWR2_YCNT2","value","dsPY_RTBASE","CWR2_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","mskBASE_AMT3","value","dsPY_RTBASE","BASE_AMT3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","mskADD4_ATDD","value","dsPY_RTBASE","ADD4_ATDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","mskCWR3_YCNT3","value","dsPY_RTBASE","CWR3_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","mskCON1_AMOT","value","dsPY_RTBASE","CON1_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","mskCON1_AMOT_2","value","dsPY_RTBASE","CON1_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","mskCON2_AMOT","value","dsPY_RTBASE","CON2_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","mskCON1_CALC","value","dsPY_RTBASE","CON1_CALC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","mskCON1_AMOT_3","value","dsPY_RTBASE","CON1_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","mskCON1_RATE","value","dsPY_RTBASE","CON1_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","mskCON2_RATE","value","dsPY_RTBASE","CON2_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","mskCON2_AMOT_2","value","dsPY_RTBASE","CON2_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","mskCON3_AMOT","value","dsPY_RTBASE","CON3_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","mskCON2_CALC","value","dsPY_RTBASE","CON2_CALC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","mskCON2_AMOT_3","value","dsPY_RTBASE","CON2_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","mskCON3_RATE","value","dsPY_RTBASE","CON3_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","mskCON3_AMOT_2","value","dsPY_RTBASE","CON3_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","mskCON4_AMOT","value","dsPY_RTBASE","CON4_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","mskCON3_CALC","value","dsPY_RTBASE","CON3_CALC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","mskCON3_AMOT_3","value","dsPY_RTBASE","CON3_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","mskCON4_RATE","value","dsPY_RTBASE","CON4_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","mskCON4_AMOT_2","value","dsPY_RTBASE","CON4_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","mskCON4_CALC","value","dsPY_RTBASE","CON4_CALC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","mskCON4_AMOT_3","value","dsPY_RTBASE","CON4_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","mskCON5_RATE","value","dsPY_RTBASE","CON5_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","mskCLC1_RATE","value","dsPY_RTBASE","CLC1_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","mskCLC2_RATE","value","dsPY_RTBASE","CLC2_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cmbSHRSTDS_YEAR","value","dsHR_MASTXD","REDI_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","MaskEdit00","value","dsPY_RTBASE","CON1_RATE");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_RTBASE.addEventHandler("oncolumnchanged", this.dsPY_RTBASE_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.mskSTDS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRSTDS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSTDS_YEAR.addEventHandler("onitemchanged", this.cmbSHRSTDS_YEAR_onitemchanged, this);
            this.mskVORN_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskGERT_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCWR1_YCNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCWR1_YCNT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCWR2_YCNT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCWR3_YCNT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCWR2_YCNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCWR3_YCNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBASE_AMT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskADD2_ATDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCWR1_YCNT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskADD1_ATDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBASE_AMT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskADD3_ATDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCWR2_YCNT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBASE_AMT3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskADD4_ATDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCWR3_YCNT3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON1_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON1_AMOT_2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON2_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON1_CALC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON1_AMOT_3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON1_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON2_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON2_AMOT_2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON3_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON2_CALC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON2_AMOT_3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON3_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON3_AMOT_2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON4_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON3_CALC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON3_AMOT_3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON4_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON4_AMOT_2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON4_CALC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON4_AMOT_3.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCON5_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static04.addEventHandler("onclick", this.Static04_onclick, this);
            this.mskCLC2_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCLC1_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("Temp00014M.xfdl");
        this.loadPreloadList();
       
    };
}
)();
