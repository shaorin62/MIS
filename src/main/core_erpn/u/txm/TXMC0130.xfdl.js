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
                this.set_name("TXMC0130");
                this.set_titletext("부동산임대공급가액명세서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsVA_VATBRANCH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRINTdae_1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRINTdae_2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRINTbyun_1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPRINTbyun_2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SERIAL_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_TYPECD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_YMD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_SAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_VAMT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_DIV\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_MASTER\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BIZNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BDR_REMARK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CURR_CODE</Col><Col id=\"DSNAME\">dsCURR_CODE</Col><Col id=\"HEADFLAG\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT120_D", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"VAT_SERIAL\" size=\"10\" type=\"STRING\"/><Column id=\"DONG\" size=\"30\" type=\"STRING\"/><Column id=\"FLOOR\" size=\"10\" type=\"STRING\"/><Column id=\"HOSU\" size=\"10\" type=\"STRING\"/><Column id=\"AREA\" size=\"10\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"30\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"13\" type=\"STRING\"/><Column id=\"MOVE_IN_YMD\" size=\"8\" type=\"STRING\"/><Column id=\"GENERATED_YMD\" size=\"8\" type=\"STRING\"/><Column id=\"EVICTION_YMD\" size=\"8\" type=\"STRING\"/><Column id=\"DEPOSITS_AMT\" size=\"13\" type=\"BIGDECIMAL\"/><Column id=\"VAT_MRNT_FEEX\" size=\"13\" type=\"BIGDECIMAL\"/><Column id=\"VAT_TAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"DEPOSITS_INTEREST_AMT\" size=\"13\" type=\"BIGDECIMAL\"/><Column id=\"DEPOSITS_RENT_AMT\" size=\"13\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT120_H", this);
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"13\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"30\" type=\"STRING\"/><Column id=\"VAT_PROP_LOCATION\" size=\"70\" type=\"STRING\"/><Column id=\"INCOME_SYMD\" size=\"8\" type=\"STRING\"/><Column id=\"INCOME_EYMD\" size=\"8\" type=\"STRING\"/><Column id=\"INTEREST_RATE\" size=\"7\" type=\"BIGDECIMAL\"/><Column id=\"DEPOSITS_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RENT_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"VAT_TAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"DEPOSITS_INTEREST_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DEPOSITS_RENT_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RET_CNT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SEQ\" size=\"4\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_VAT120_H00", this);
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"10\" type=\"STRING\"/><Column id=\"VAT_YYYY\" size=\"4\" type=\"STRING\"/><Column id=\"VAT_QUARTER\" size=\"1\" type=\"STRING\"/><Column id=\"BIZ_NO\" size=\"13\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"30\" type=\"STRING\"/><Column id=\"VAT_PROP_LOCATION\" size=\"70\" type=\"STRING\"/><Column id=\"INCOME_SYMD\" size=\"8\" type=\"STRING\"/><Column id=\"INCOME_EYMD\" size=\"8\" type=\"STRING\"/><Column id=\"INTEREST_RATE\" size=\"7\" type=\"BIGDECIMAL\"/><Column id=\"DEPOSITS_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RENT_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"VAT_TAMT\" size=\"17\" type=\"BIGDECIMAL\"/><Column id=\"DEPOSITS_INTEREST_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"DEPOSITS_RENT_TAMT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"RET_CNT\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"BIZNO_SEQ\" size=\"4\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTA_VAT120_D", "absolute", "8", "218", null, null, "25", "15", this);
            obj.set_selecttype("multirow");
            obj.set_binddataset("dsTA_VAT120_D");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("100");
            obj.set_taborder("18");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"임대사항\"/><Cell col=\"3\" rowspan=\"2\" text=\"임대면적\"/><Cell col=\"4\" colspan=\"7\" text=\"임차인 인적사항 및 임대차 계약내용\"/><Cell col=\"11\" colspan=\"3\" text=\"임대료수입금액(과세표준)\"/><Cell row=\"1\" text=\"(5)동\"/><Cell row=\"1\" col=\"1\" text=\"(6)층\"/><Cell row=\"1\" col=\"2\" text=\"(7)호수\"/><Cell row=\"1\" col=\"4\" text=\"상호(성명)\"/><Cell row=\"1\" col=\"5\" text=\"사업자등록번호\"/><Cell row=\"1\" col=\"6\" text=\"입주일\"/><Cell row=\"1\" col=\"7\" text=\"갱신일\"/><Cell row=\"1\" col=\"8\" text=\"퇴거일\"/><Cell row=\"1\" col=\"9\" text=\"보증금\"/><Cell row=\"1\" col=\"10\" text=\"월임대료\"/><Cell row=\"1\" col=\"11\" text=\"합계\"/><Cell row=\"1\" col=\"12\" text=\"보증금이자\"/><Cell row=\"1\" col=\"13\" text=\"월임대료\"/></Band><Band id=\"body\"><Cell edittype=\"text\" style=\"align:center;\" text=\"bind:DONG\" editlimit=\"0\"/><Cell col=\"1\" edittype=\"text\" style=\"align:center;\" text=\"bind:FLOOR\" editlimit=\"0\"/><Cell col=\"2\" edittype=\"text\" style=\"align:center;\" text=\"bind:HOSU\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"text\" style=\"align:center;\" text=\"bind:AREA\" editlimit=\"0\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:CUST_NM\" editlimit=\"0\"/><Cell col=\"5\" edittype=\"text\" style=\"align:center;\" text=\"bind:BIZ_NO\" editlimit=\"0\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:MOVE_IN_YMD\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:GENERATED_YMD\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:EVICTION_YMD\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:DEPOSITS_AMT\" editlimit=\"13\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:VAT_MRNT_FEEX\" editlimit=\"13\"/><Cell col=\"11\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:VAT_TAMT\" editlimit=\"17\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:DEPOSITS_INTEREST_AMT\" editlimit=\"13\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:DEPOSITS_RENT_AMT\" editlimit=\"13\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합  계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;DEPOSITS_AMT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;VAT_MRNT_FEEX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;VAT_TAMT&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;DEPOSITS_INTEREST_AMT&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;DEPOSITS_RENT_AMT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "8", "118", null, "65", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "28", "127", "138", "21", null, null, this);
            obj.set_text("부동산소재지");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBRANCH_NM", "absolute", "162", "127", "180", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTA_VAT120_H");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "153", "138", "21", null, null, this);
            obj.set_text("종된사업자일련번호");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "371", "153", "128", "21", null, null, this);
            obj.set_text("수입금액내용기간");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static2315", "absolute", "739", "127", "118", "21", null, null, this);
            obj.set_text("상호(소유자성명)");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_ADDR", "absolute", "859", "127", "176", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsVA_VATBRANCHdsTA_VAT120_H");
            obj.set_lengthunit("asciii");
            obj.set_enable("true");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "371", "127", "128", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBIZ_NO", "absolute", "493", "127", "217", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_VAT120_H");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "739", "153", "118", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("이자율");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCORP_ADDR01", "absolute", "859", "153", "176", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_maxlength("9");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_VAT120_H");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AddRow", "absolute", null, "193", "62", "21", "90", null, this);
            obj.set_taborder("10");
            obj.style.set_imagealign("left");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DelRow", "absolute", null, "193", "62", "21", "25", null, this);
            obj.set_taborder("11");
            obj.style.set_imagealign("left");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("본/지점");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "90", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static6", "absolute", "442", "71", "76", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("분기구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbVAT_QUARTER", "absolute", "511", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbVAT_QUARTER_innerdataset = new Dataset("cmbVAT_QUARTER_innerdataset", this.cmbVAT_QUARTER);
            cmbVAT_QUARTER_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(cmbVAT_QUARTER_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormSearchItem");

            obj = new Calendar("calINCOME_SYMD", "absolute", "493", "153", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsTA_VAT120_H");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calINCOME_EYMD", "absolute", "612", "153", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsTA_VAT120_H");

            obj = new Static("Static07", "absolute", "596", "153", "14", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBIZNO_SEQ", "absolute", "162", "153", "180", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsTA_VAT120_H");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("부동산임대공급가액명세서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("37");
            obj.set_text("홈 > 재무관리>세무회계>부가세신고>부동산임대공급가액명세서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("45");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("46");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("47");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "197", "262", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "573", "183", "80", "35", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "9", "119", "30", "63", null, null, this);
            obj.set_taborder("51");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "477", "119", "38", "8", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "477", "148", "102", "5", null, null, this);
            obj.set_taborder("53");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "477", "174", "38", "8", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "573", "103", "80", "15", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "311", "71", "50", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("연도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRVAT_YYYY", "absolute", "353", "71", "64", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부동산임대공급가액명세서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtBRANCH_NM_value","edtBRANCH_NM","value","dsTA_VAT120_H","VAT_PROP_LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCORP_ADDR_value","edtCORP_ADDR","value","dsTA_VAT120_H","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtBIZ_NO","value","dsTA_VAT120_H","BIZ_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtCORP_ADDR01","value","dsTA_VAT120_H","INTEREST_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","calINCOME_SYMD","value","dsTA_VAT120_H","INCOME_SYMD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","calINCOME_EYMD","value","dsTA_VAT120_H","INCOME_EYMD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtBIZNO_SEQ","value","dsTA_VAT120_H","BIZNO_SEQ");
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
        this.addIncludeScript("TXMC0130.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TXMC0130.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TXMC0130.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMC0130  부동산임대공급가액명세서
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.03		신민규		Initial Created.
         *   2016.08.10		안윤준		수정
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFFFTFT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "TXMC0130"; //해당 Form에서 사용 할 Package 명
        this.sSERVERDATE  	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);

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
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.fnc_GetBranch();

        	var sStds_Date	= this.fnc_AddMonth(this.sSERVERDATE, -1);
        	var sStds_Mnth	= this.fnc_SubStr(sStds_Date, 4, 2);
        	var sVatQuarter = "";
        		
        	this.calSHRVAT_YYYY.set_value(this.fnc_SubStr(sStds_Date, 0, 4));

        	if (sStds_Mnth >= "01" && sStds_Mnth <= "03") {
        		sVatQuarter = "1";		
        	} else if (sStds_Mnth >= "04" && sStds_Mnth <= "06") {
        		sVatQuarter = "2";		
        	} else if (sStds_Mnth >= "07" && sStds_Mnth <= "09") {
        		sVatQuarter = "3";		
        	} else if (sStds_Mnth >= "10" && sStds_Mnth <= "12") {
        		sVatQuarter = "4";		
        	}

        	this.cmbVAT_QUARTER.set_value(sVatQuarter);
        	this.cmbSHRACCT_GUBN.setFocus();
        	
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

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_VAT120_H=dsTA_VAT120_H dsTA_VAT120_D=dsTA_VAT120_D";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (this.dsTA_VAT120_D.rowcount < 1) {
        		this.fnc_Message("TMM125", "저장 할 내역이 없습니다");
        		return false;
        	}

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTA_VAT120_H=dsTA_VAT120_H:A dsTA_VAT120_D=dsTA_VAT120_D:A ";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	
        	var reportfile = "/txm/TXMC0130R01.jrf";
        	
        	var params  =  "ACCT_GUBN#"   + this.fnc_Trim(this.cmbSHRACCT_GUBN.value);
        		params +=  "#VAT_YYYY#"   + this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4);
        		params +=  "#VAT_QUARTER#"+ this.fnc_Trim(this.cmbVAT_QUARTER.value);
        		
        		/*params += "#TOTL_INTL#전체";*/

        	var dataref = new Array();
        	
        	dataref[0] = new Object();
        	dataref[0].type = "TRAN";
        	dataref[0].svcUrl = "/core/erp/txm/TXMC0130_SEARCH00.do";
        	dataref[0].inDataset = ""
        	dataref[0].outDataset = "dsTA_VAT120_H=dsTA_VAT120_H dsTA_VAT120_D=dsTA_VAT120_D"
        	dataref[0].arg = this.fn_CreateArgument("REPORT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_VAT120_D", this);
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

        	if (this.fnc_DatasetChangeCheck("dsTA_VAT120_D")) {
        		if (!this.fnc_Message("TMM023")) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRVAT_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "연도", this.calSHRVAT_YYYY);
        	}

        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기
        	
        	} else if ( sKind == "REPORT00") {
        	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); 						 //사업자등록번호
        		sReturnString += " VAT_YYYY=" 	 	+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); 					 //VAT분기
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 		+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업자등록번호
        		sReturnString += " VAT_YYYY=" 		+ this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRVAT_YYYY.value), 0, 4)); //년도
        		sReturnString += " VAT_QUARTER=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbVAT_QUARTER.value)); //VAT분기
        		
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);

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
        		if ( this.dsTA_VAT120_H.getRowCount() == 0 ) {
        			var sMethodName = "SEARCH01";
        			var sInDataSet 	= "";
        			var sOutDataSet = "dsTA_VAT120_H00=dsTA_VAT120_H";
        			var sArgument 	= this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        		
        		this.fnc_Message("TMM018", this.dsTA_VAT120_D.rowcount);
        		this.cmbSHRACCT_GUBN.setFocus();
        		
        	} else if (sMethodName == "SEARCH01") {
        		//this.dsTA_VAT120_H.copyData(this.dsTA_VAT120_H00);
        		//this.dsTA_VAT120_H.setRowType(0, '2');
        		var nRow = 0;
        		 
        		for (var i = 0; i < this.dsTA_VAT120_H00.getRowCount(); i++) {
        			nRow = this.dsTA_VAT120_H.addRow();
        			
        			this.dsTA_VAT120_H.setColumn(nRow, "BRANCH_CD",this.dsTA_VAT120_H00.getColumn(nRow, "BRANCH_CD"));
        			this.dsTA_VAT120_H.setColumn(nRow, "VAT_YYYY",this.dsTA_VAT120_H00.getColumn(nRow, "VAT_YYYY"));
        			this.dsTA_VAT120_H.setColumn(nRow, "VAT_QUARTER",this.dsTA_VAT120_H00.getColumn(nRow, "VAT_QUARTER"));
        			this.dsTA_VAT120_H.setColumn(nRow, "BIZ_NO",this.dsTA_VAT120_H00.getColumn(nRow, "BIZ_NO"));
        			this.dsTA_VAT120_H.setColumn(nRow, "CUST_NM",this.dsTA_VAT120_H00.getColumn(nRow, "CUST_NM"));
        			this.dsTA_VAT120_H.setColumn(nRow, "VAT_PROP_LOCATION",this.dsTA_VAT120_H00.getColumn(nRow, "VAT_PROP_LOCATION"));
        			this.dsTA_VAT120_H.setColumn(nRow, "INCOME_SYMD",this.dsTA_VAT120_H00.getColumn(nRow, "INCOME_SYMD"));
        			this.dsTA_VAT120_H.setColumn(nRow, "INCOME_EYMD",this.dsTA_VAT120_H00.getColumn(nRow, "INCOME_EYMD"));
        			this.dsTA_VAT120_H.setColumn(nRow, "INTEREST_RATE",this.dsTA_VAT120_H00.getColumn(nRow, "INTEREST_RATE"));
        			this.dsTA_VAT120_H.setColumn(nRow, "DEPOSITS_TAMT",this.dsTA_VAT120_H00.getColumn(nRow, "DEPOSITS_TAMT"));
        			this.dsTA_VAT120_H.setColumn(nRow, "RENT_TAMT",this.dsTA_VAT120_H00.getColumn(nRow, "RENT_TAMT"));
        			this.dsTA_VAT120_H.setColumn(nRow, "VAT_TAMT",this.dsTA_VAT120_H00.getColumn(nRow, "VAT_TAMT"));
        			this.dsTA_VAT120_H.setColumn(nRow, "DEPOSITS_INTEREST_TAMT",this.dsTA_VAT120_H00.getColumn(nRow, "DEPOSITS_INTEREST_TAMT"));
        			this.dsTA_VAT120_H.setColumn(nRow, "DEPOSITS_RENT_TAMT",this.dsTA_VAT120_H00.getColumn(nRow, "DEPOSITS_RENT_TAMT"));
        			this.dsTA_VAT120_H.setColumn(nRow, "RET_CNT",this.dsTA_VAT120_H00.getColumn(nRow, "RET_CNT"));
        			this.dsTA_VAT120_H.setColumn(nRow, "BIZNO_SEQ",this.dsTA_VAT120_H00.getColumn(nRow, "BIZNO_SEQ"));
        		}
        		
        	} else if (sMethodName == "REPORT00") {

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetBranch") {
        		this.cmbSHRACCT_GUBN.set_index(0);

        	} else if (sMethodName == "GetCommCode") {
        // 		var arrParam = new Array();
        // 			arrParam[0] = "GRID,grdTA_VAT106_D,dsCURR_CODE,EXPORT_CURRENCY_CD";
        // 		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTA_VAT120_D,dsTA_VAT120_H")) {
        		this.fnc_Message("TMM003");
        		return false;

        	}

        	for (var i = 0; i < this.dsTA_VAT120_D.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsTA_VAT120_D.getRowType(this.dsTA_VAT120_D.rowposition)) != Dataset.ROWTYPE_NORMAL) {
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_VAT120_D.getColumn(i, "CUST_NM"))) < 1) { // 사업장
        				return this.fnc_CheckPostAction("TMM072", "상호명", this.dsTA_VAT120_D, i, this.dsTA_VAT120_D, "CUST_NM");
        				
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_VAT120_D.getColumn(i, "BIZ_NO"))) < 1) { // 사업자번호
        				return this.fnc_CheckPostAction("TMM072", "사업자번호", this.dsTA_VAT120_D, i, this.dsTA_VAT120_D, "BIZ_NO");
        				
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_VAT120_D.getColumn(i, "DEPOSITS_AMT"))) < 1) { // 보증금
        				return this.fnc_CheckPostAction("TMM072", "보증금", this.dsTA_VAT120_D, i, this.dsTA_VAT120_D, "DEPOSITS_AMT");
        				
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_VAT120_D.getColumn(i, "VAT_MRNT_FEEX"))) < 1) { // 월임대료
        				return this.fnc_CheckPostAction("TMM072", "월임대료", this.dsTA_VAT120_D, i, this.dsTA_VAT120_D, "VAT_MRNT_FEEX");
        				
        			}
        			
        		}
        		
        	}
        	
        	return true;

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------+
         |  행추가 버튼 클릭 시 |
         +--------------------*/
        this.btn_AddRowOnClick = function(obj,e) {
        	
        	if(this.fnc_Length(this.dsTA_VAT120_H.getColumn(this.dsTA_VAT120_H.rowposition, "VAT_QUARTER")) < 1) {
        		this.fnc_Message("TMM125", "조회 후 입력하시기 바랍니다");
        		return;
        	}

        	var row = this.dsTA_VAT120_D.addRow()

        	this.dsTA_VAT120_D.setColumn(row, "BRANCH_CD"	, this.cmbSHRACCT_GUBN.value);
        	this.dsTA_VAT120_D.setColumn(row, "VAT_YYYY"	, this.fnc_SubStr(this.calSHRVAT_YYYY.value, 0, 4));
        	this.dsTA_VAT120_D.setColumn(row, "VAT_QUARTER"	, this.cmbVAT_QUARTER.value);

        	for (var i = this.dsTA_VAT120_D.rowcount-1; i >= 0; i--) {
        		this.dsTA_VAT120_D.setColumn(i, "VAT_SERIAL", i+1);
        		
        	}
        	
        	this.grdTA_VAT120_D.setFocus(row, 0);
        }

        /*---------------------+
         |  행삭제 버튼 클릭 시 |
         +---------------------*/
        this.btn_DelRowOnClick = function(obj,e) {
        	
        	if (this.dsTA_VAT120_D.getRowCount() > 0) {
        		if (this.checkDelete01()) {
        			this.dsTA_VAT120_D.deleteMultiRows(this.grdTA_VAT120_D.getSelectedDatasetRows());
        			
        		}
        	} else {
        		this.fnc_Message("TMM007");
        		
        	}

        }

        /*-------------+
         |  삭제 체크01 |
         +-------------*/
        this.checkDelete01 = function (row) {

        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTA_VAT120_D);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        		
        	} else {
        		var sQuestionText = "상호 : " + this.dsTA_VAT120_D.getColumn(row, "CUST_NAME") + "을/를 삭제하시겠습니까?";
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}

        }

        /*---------------------+
         |  DATASET 값 변경 시  |
         +---------------------*/
        this.dsTA_VAT120_D_oncolumnchanged = function(obj,e) {	

        	var yDay 					= 0;
        	var tDay 					= 0;
        	var tMonth 					= 0;
        	var sdate 					= "";
        	var edate 					= "";
        	var DEPOSITS_INTEREST_AMT 	= 0;
        	var DEPOSITS_RENT_AMT 		= 0;
        	
        	if(e.columnid == "DEPOSITS_AMT" || e.columnid == "VAT_MRNT_FEEX" ) {
        		// 보증금, 월임대료 변경시

        		var sINCOME_SYMD = this.dsTA_VAT120_H.getColumn( 0 , "INCOME_SYMD" );
        		var sINCOME_EYMD = this.dsTA_VAT120_H.getColumn( 0 , "INCOME_EYMD" );
        		var sMOVE_IN_YMD = this.dsTA_VAT120_D.getColumn( this.dsTA_VAT120_D.rowposition , "MOVE_IN_YMD" );
        		var sEVICTION_YMD = this.dsTA_VAT120_D.getColumn( this.dsTA_VAT120_D.rowposition , "EVICTION_YMD" );

        		if(this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition, "DEPOSITS_AMT") != 0 && this.dsTA_VAT120_H.getColumn(this.dsTA_VAT120_H.rowposition, "INTEREST_RATE") != 0) {
        			if ( this.dsTA_VAT120_H.getColumn(this.dsTA_VAT120_H.rowposition, "VAT_YYYY")%4 == 0 && this.dsTA_VAT120_H.getColumn(this.dsTA_VAT120_H.rowposition, "VAT_YYYY")%100 != 0 || this.dsTA_VAT120_H.getColumn(this.dsTA_VAT120_H.rowposition, "VAT_YYYY")%400 == 0 ) {
        				yDay = 366;
        			} else {
        				yDay = 365;
        			}

        			sINCOME_SYMD = this.fnc_SubStr(sINCOME_SYMD,0,6) + "01";
        			sINCOME_EYMD = this.fnc_SubStr(sINCOME_EYMD,0,6) + this.fnc_LastDay(this.fnc_SubStr(sINCOME_EYMD,0,4) + this.fnc_SubStr(sINCOME_EYMD,4,6));
        			sMOVE_IN_YMD = this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition, "MOVE_IN_YMD");
        			sEVICTION_YMD = this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition, "EVICTION_YMD");

        			if(sINCOME_SYMD > sMOVE_IN_YMD || this.fnc_Length(sMOVE_IN_YMD) != 8) {
        				sMOVE_IN_YMD = sINCOME_SYMD;
        			}

        			if(sINCOME_EYMD < sEVICTION_YMD || this.fnc_Length(sEVICTION_YMD) != 8) {
        				sEVICTION_YMD = sINCOME_EYMD;
        			}

        			sdate = this.fnc_SubStr(sMOVE_IN_YMD,0, 4) + this.fnc_SubStr(sMOVE_IN_YMD,4, 6) + this.fnc_SubStr(sMOVE_IN_YMD,6, 8);
        			edate = this.fnc_SubStr(sEVICTION_YMD,0, 4) + this.fnc_SubStr(sEVICTION_YMD,4, 6) + this.fnc_SubStr(sEVICTION_YMD,6, 8);
        			tDay = (edate - sdate)/1000/3600/24 + 1;

        			DEPOSITS_INTEREST_AMT = this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition, "DEPOSITS_AMT") * (this.dsTA_VAT120_H.getColumn(this.dsTA_VAT120_H.rowposition, "INTEREST_RATE") / 100) * tDay / yDay;

        			this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition,"DEPOSITS_INTEREST_AMT",DEPOSITS_INTEREST_AMT);

        			tMonth = this.fnc_CalcMonth(sMOVE_IN_YMD, sEVICTION_YMD);

        			this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition,"DEPOSITS_RENT_AMT",(tMonth * this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition, "VAT_MRNT_FEEX")));

        			DEPOSITS_INTEREST_AMT= this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition,"DEPOSITS_INTEREST_AMT");
        			DEPOSITS_RENT_AMT = this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition,"DEPOSITS_RENT_AMT");

        			this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition,"VAT_TAMT",DEPOSITS_INTEREST_AMT + DEPOSITS_RENT_AMT);

        			var sCAL_AMT1 = 0;
        			var sCAL_AMT2 = 0;
        			var sCAL_AMT3 = 0;
        			var sCAL_AMT4 = 0;
        			var sCAL_AMT5 = 0;

        			for(var i=0; i<this.dsTA_VAT120_D.rowcount; i++){
        				sCAL_AMT1 = sCAL_AMT1 + this.dsTA_VAT120_D.getColumn( i , "DEPOSITS_AMT" );
        				sCAL_AMT2 = sCAL_AMT2 + this.dsTA_VAT120_D.getColumn( i , "VAT_MRNT_FEEX" );
        				sCAL_AMT3 = sCAL_AMT3 + this.dsTA_VAT120_D.getColumn( i , "VAT_TAMT" );
        				sCAL_AMT4 = sCAL_AMT4 + this.dsTA_VAT120_D.getColumn( i , "DEPOSITS_INTEREST_AMT" );
        				sCAL_AMT5 = sCAL_AMT5 + this.dsTA_VAT120_D.getColumn( i , "DEPOSITS_RENT_AMT" );
        			}

        			this.dsTA_VAT120_H.setColumn( 0 , "DEPOSITS_TAMT" , sCAL_AMT1 );
        			this.dsTA_VAT120_H.setColumn( 0 , "RENT_TAMT" , sCAL_AMT2 );
        			this.dsTA_VAT120_H.setColumn( 0 , "VAT_TAMT" , sCAL_AMT3 );
        			this.dsTA_VAT120_H.setColumn( 0 , "DEPOSITS_INTEREST_TAMT" , sCAL_AMT4 );
        			this.dsTA_VAT120_H.setColumn( 0 , "DEPOSITS_RENT_TAMT" , sCAL_AMT5 );
        			this.dsTA_VAT120_H.setColumn( 0 , "RET_CNT" , this.dsTA_VAT120_D.rowcount );
        		}

        	} else if(e.columnid == "DEPOSITS_INTEREST_AMT" || e.columnid == "DEPOSITS_RENT_AMT" ) {

        		DEPOSITS_INTEREST_AMT= this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition,"DEPOSITS_INTEREST_AMT");
        		DEPOSITS_RENT_AMT = this.dsTA_VAT120_D.getColumn(this.dsTA_VAT120_D.rowposition,"DEPOSITS_RENT_AMT");

        		this.dsTA_VAT120_D.setColumn(this.dsTA_VAT120_D.rowposition,"VAT_TAMT",DEPOSITS_INTEREST_AMT + DEPOSITS_RENT_AMT);

        		this.dsTA_VAT120_H.setColumn( 0 , "RET_CNT" , this.dsTA_VAT120_D.rowcount );

        		var sCAL_AMT1 = 0;
        		var sCAL_AMT2 = 0;
        		var sCAL_AMT3 = 0;
        		var sCAL_AMT4 = 0;
        		var sCAL_AMT5 = 0;

        		for(var i=0; i<this.dsTA_VAT120_D.rowcount; i++){

        			sCAL_AMT1 = sCAL_AMT1 + this.dsTA_VAT120_D.getColumn( i , "DEPOSITS_AMT" );
        			sCAL_AMT2 = sCAL_AMT2 + this.dsTA_VAT120_D.getColumn( i , "VAT_MRNT_FEEX" );
        			sCAL_AMT3 = sCAL_AMT3 + this.dsTA_VAT120_D.getColumn( i , "VAT_TAMT" );
        			sCAL_AMT4 = sCAL_AMT4 + this.dsTA_VAT120_D.getColumn( i , "DEPOSITS_INTEREST_AMT" );
        			sCAL_AMT5 = sCAL_AMT5 + this.dsTA_VAT120_D.getColumn( i , "DEPOSITS_RENT_AMT" );

        		}

        		this.dsTA_VAT120_H.setColumn( 0 , "DEPOSITS_TAMT" , sCAL_AMT1 );
        		this.dsTA_VAT120_H.setColumn( 0 , "RENT_TAMT" , sCAL_AMT2 );
        		this.dsTA_VAT120_H.setColumn( 0 , "VAT_TAMT" , sCAL_AMT3 );
        		this.dsTA_VAT120_H.setColumn( 0 , "DEPOSITS_INTEREST_TAMT" , sCAL_AMT4 );
        		this.dsTA_VAT120_H.setColumn( 0 , "DEPOSITS_RENT_TAMT" , sCAL_AMT5 );
        		this.dsTA_VAT120_H.setColumn( 0 , "RET_CNT" , this.dsTA_VAT120_D.rowcount );

        	}
        }

        this.fnc_CalcMonth = function (fMonth,tMonth) {
          var iMonth   = 0; //계산된 개월수
          var iYear    = 0; //계산된 년도
          var rMonth   = 0; //반환할 개월수

          if(fMonth <= tMonth){
        	  iYear =  this.fnc_SubStr(tMonth,0,4)- this.fnc_SubStr(fMonth,0,4) ;
        	  iMonth = this.fnc_SubStr(tMonth,4,6)- this.fnc_SubStr(fMonth,4,6);
        	  rMonth = (12 * iYear) + iMonth + 1;
        	  return rMonth;
           } else {
        	  return 0;
           }
        }

        this.fnc_LastDay = function (yyyy,mm){

        	var dayOfMonth = Array(12);
        	dayOfMonth[0]  = 31;
        	dayOfMonth[1]  = 28;
        	dayOfMonth[2]  = 31;
        	dayOfMonth[3]  = 30;
        	dayOfMonth[4]  = 31;
        	dayOfMonth[5]  = 30;
        	dayOfMonth[6]  = 31;
        	dayOfMonth[7]  = 31;
        	dayOfMonth[8]  = 30;
        	dayOfMonth[9]  = 31;
        	dayOfMonth[10] = 30;
        	dayOfMonth[11] = 31;

        	if(((yyyy % 4 == 0) && (yyyy % 100 != 0)) || (yyyy % 400 == 0)){
        		dayOfMonth[1] = 29;
        	}else{
        		dayOfMonth[1] = 28;
        	}

        	var ii    = mm - 1;
        	var	nDays = dayOfMonth[ii];
        	return nDays;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_VAT120_D.addEventHandler("oncolumnchanged", this.dsTA_VAT120_D_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_VAT120_D.addEventHandler("onchar", this.grdTA_VAT120_D_OnChar, this);
            this.edtBRANCH_NM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static11.addEventHandler("onclick", this.Static11_onclick, this);
            this.edtCORP_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBIZ_NO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCORP_ADDR01.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_AddRow.addEventHandler("onclick", this.btn_AddRowOnClick, this);
            this.btn_DelRow.addEventHandler("onclick", this.btn_DelRowOnClick, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbVAT_QUARTER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calINCOME_SYMD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calINCOME_EYMD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBIZNO_SEQ.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calSHRVAT_YYYY.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMC0130.xfdl");
        this.loadPreloadList();
       
    };
}
)();
