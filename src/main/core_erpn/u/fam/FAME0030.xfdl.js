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
                this.set_name("FAME0030");
                this.set_titletext("최초미결전표등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DIV_CD</Col><Col id=\"DSNAME\">dsACCT_GUB1</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">회계단위</Col></Row><Row><Col id=\"CODEID\">FC01</Col><Col id=\"DSNAME\">dsCURR_GUBN</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"REMK\">통화구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDRCR_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">D</Col><Col id=\"SUBNAME\">차변</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">C</Col><Col id=\"SUBNAME\">대변</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT_BASE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"BUDG_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_NUMB\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"OSLI_LINE\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"MGMT_NUBR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DRCR_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USEX_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUB1\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"FNCR_YSNO\" type=\"STRING\" size=\"1\"/><Column id=\"COND_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"COND_VACD\" type=\"STRING\" size=\"30\"/><Column id=\"COND_VANM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_VICDXL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COND_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_KIND\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"INPT_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_IDXX\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"HELP_TEXT\" size=\"200\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUB1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCURR_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDRCR_YSNO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"INT\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">사용안함</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">차/대변필수</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">2</Col><Col id=\"SUBNAME\">차변필수</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">3</Col><Col id=\"SUBNAME\">대변필수</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EXCEL", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_MONYRT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STND_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"STND_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USDCHG_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NOTI_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VALU_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCOND_CODE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COND_NOXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COND_KIND\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div0", "absolute", "8", "35", "277", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnFile", "absolute", "0", "0", "74", "21", null, null, this.Div0);
            obj.set_taborder("1");
            obj.set_text("일괄등록");
            obj.set_visible("false");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnFileDown", "absolute", "76", "0", "112", "21", null, null, this.Div0);
            obj.set_taborder("1");
            obj.set_text("업로드문서양식");
            obj.set_visible("false");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT_BASE", "absolute", "8", "85", null, null, "25", "173", this);
            obj.set_binddataset("dsTA_SLIPNT_BASE");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.getSetter("autofitminwidth").set("900");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\"/><Column size=\"43\"/><Column size=\"67\"/><Column size=\"175\"/><Column size=\"100\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"0\"/><Column size=\"220\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"전표번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"순번\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"3\" displaytype=\"text\" text=\"계정명\"/><Cell col=\"4\" displaytype=\"text\" text=\"귀속부서명\"/><Cell col=\"5\" displaytype=\"text\" text=\"차변금액\"/><Cell col=\"6\" displaytype=\"text\" text=\"대변금액\"/><Cell col=\"7\" displaytype=\"text\" text=\"적요\"/><Cell col=\"8\" displaytype=\"text\" text=\"적요명\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:SLIP_NUMB\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;\" text=\"bind:SLIP_LINE\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ACCT_INTL\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;\" text=\"bind:SLIP_AMNT\" expr=\"expr:Eco.decode(DRCR_GUBN, 'D', SLIP_AMNT, 0)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:SLIP_AMNT\" expr=\"expr:Eco.decode(DRCR_GUBN, 'C', SLIP_AMNT, 0)\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_CODE\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div1", "absolute", null, "86", "214", "25", "20", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DelRow", "absolute", null, "60", "62", "21", "25", null, this);
            obj.set_taborder("10");
            obj.style.set_imagealign("left");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AddRow", "absolute", null, "60", "62", "21", "90", null, this);
            obj.set_taborder("11");
            obj.style.set_imagealign("left");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "8", null, null, "143", "25", "15", this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpDEPT_COD1", "absolute", "197", null, "22", "21", null, "102", this);
            obj.set_taborder("19");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOND_CODE", "absolute", "758", null, null, "21", "259", "24", this);
            obj.set_taborder("20");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFNCR_YSNO", "absolute", "860", null, null, "21", "89", "76", this);
            obj.set_taborder("21");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOND_VANM", "absolute", "442", null, "195", "21", null, "24", this);
            obj.set_taborder("22");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOND_VACD", "absolute", "317", null, "100", "21", null, "24", this);
            obj.set_taborder("23");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "249", null, "70", "21", null, "24", this);
            obj.set_taborder("25");
            obj.set_text("관리항목");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCOND_CODE", "absolute", "95", null, "100", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_innerdataset("dsCOND_CODE");
            obj.set_codecolumn("COND_CODE");
            obj.set_datacolumn("COND_NAME");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_enable("false");

            obj = new Static("Static00", "absolute", "27", null, "70", "21", null, "24", this);
            obj.set_taborder("27");
            obj.set_text("관리구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "469", null, "70", "21", null, "126", this);
            obj.set_taborder("28");
            obj.set_text("작성일자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSLIP_DATE", "absolute", "537", null, "100", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");

            obj = new MaskEdit("medSLIP_LINE", "absolute", "317", null, "100", "21", null, "128", this);
            obj.set_taborder("30");
            obj.set_type("string");
            obj.set_mask("@@@@");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSLIP_NUMB", "absolute", "95", null, "100", "21", null, "128", this);
            obj.set_taborder("31");
            obj.set_type("string");
            obj.set_mask("@@-@@@@@@@@-@@@@");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "249", null, "70", "21", null, "126", this);
            obj.set_taborder("32");
            obj.set_text("전표순번");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "27", null, "70", "21", null, "126", this);
            obj.set_taborder("33");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAPPR_DATE", "absolute", "1000", null, "100", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");

            obj = new Static("Static9", "absolute", "914", null, "85", "21", null, "126", this);
            obj.set_taborder("35");
            obj.set_text("회계처리일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medFORI_AMNT", "absolute", "758", null, "100", "21", null, "76", this);
            obj.set_taborder("36");
            obj.set_mask("###,###.##");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("right");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            this.addChild(obj.name, obj);

            obj = new Static("staFORI_AMNT", "absolute", "690", null, "70", "21", null, "76", this);
            obj.set_taborder("37");
            obj.set_text("외화금액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoDRCR_GUBN", "absolute", "1001", null, "102", "21", null, "102", this);
            this.addChild(obj.name, obj);
            var rdoDRCR_GUBN_innerdataset = new Dataset("rdoDRCR_GUBN_innerdataset", this.rdoDRCR_GUBN);
            rdoDRCR_GUBN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">차변</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">대변</Col></Row></Rows>");
            obj.set_innerdataset(rdoDRCR_GUBN_innerdataset);
            obj.set_taborder("38");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("styFormSearchRdo");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            obj.set_index("-1");

            obj = new MaskEdit("medCURR_AMNT", "absolute", "537", null, "100", "21", null, "76", this);
            obj.set_taborder("39");
            obj.set_mask("###,###.####");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("right");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            this.addChild(obj.name, obj);

            obj = new Static("staCURR_AMNT", "absolute", "469", null, "70", "21", null, "76", this);
            obj.set_taborder("40");
            obj.set_text("환율");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCURR_GUBN", "absolute", "317", null, "100", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_innerdataset("dsCURR_GUBN");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBREF1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_enable("false");
            obj.style.set_align("center middle");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");

            obj = new Static("staCURR_GUBN", "absolute", "249", null, "70", "21", null, "76", this);
            obj.set_taborder("42");
            obj.set_text("화폐");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSLIP_AMNT", "absolute", "95", null, "100", "21", null, "76", this);
            obj.set_taborder("43");
            obj.set_mask("###,###");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_NAME", "absolute", "95", null, "763", "21", null, "50", this);
            obj.set_taborder("44");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAM1", "absolute", "220", null, "197", "21", null, "102", this);
            obj.set_taborder("45");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSEX_DEPT", "absolute", "95", null, "100", "21", null, "102", this);
            obj.set_taborder("46");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "27", null, "70", "21", null, "102", this);
            obj.set_taborder("47");
            obj.set_text("귀속부서");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "27", null, "70", "21", null, "76", this);
            obj.set_taborder("48");
            obj.set_text("금액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "914", null, "85", "21", null, "102", this);
            obj.set_taborder("49");
            obj.set_text("차대구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "27", null, "70", "21", null, "50", this);
            obj.set_taborder("50");
            obj.set_text("적요");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_NAME", "absolute", "662", null, "196", "21", null, "102", this);
            obj.set_taborder("51");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_INTL", "absolute", "537", null, "100", "21", null, "102", this);
            obj.set_taborder("52");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "469", null, "70", "21", null, "102", this);
            obj.set_taborder("53");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbACCT_GUB1", "absolute", "758", null, "100", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj.set_innerdataset("dsACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsTA_SLIPNT_BASE");

            obj = new Static("Static5", "absolute", "690", null, "70", "21", null, "126", this);
            obj.set_taborder("55");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCOND_VACD", "absolute", "419", null, "22", "21", null, "24", this);
            obj.set_taborder("56");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("ImgHelpACCT_INTL", "absolute", "639", null, "22", "21", null, "102", this);
            obj.set_taborder("57");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("59");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("60");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("61");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("63");
            obj.set_text("최초미결전표등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("64");
            obj.set_text("홈 > 세무조정자료 > 원천납부세액명세현황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("65");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("67");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("68");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "29", null, null, this);
            obj.set_taborder("69");
            obj.set_text("h29");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("72");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "127", "64", "169", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "115", "67", "10", "13", null, null, this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "103", "46", "12", "23", null, null, this);
            obj.set_taborder("77");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "116", "46", "12", "23", null, null, this);
            obj.set_taborder("78");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "9", "64", "103", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("미결발생List");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "637", "544", "128", "15", null, null, this);
            obj.set_taborder("80");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "579", "30", "89", null, null, this);
            obj.set_taborder("81");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "1002", "56", "128", "4", null, null, this);
            obj.set_taborder("82");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 277, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 214, 25, this.Div1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_scrollbars("none");
            		p.style.set_background("transparent");

            	}
            );
            this.Div1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("최초미결전표등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("cmbACCT_GUB1_value","cmbACCT_GUB1","value","dsTA_SLIPNT_BASE","ACCT_GUB1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_INTL_value","edtACCT_INTL","value","dsTA_SLIPNT_BASE","ACCT_INTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtACCT_NAME_value","edtACCT_NAME","value","dsTA_SLIPNT_BASE","ACCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUSEX_DEPT_value","edtUSEX_DEPT","value","dsTA_SLIPNT_BASE","USEX_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_NAM1_value","edtDEPT_NAM1","value","dsTA_SLIPNT_BASE","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREMK_NAME_value","edtREMK_NAME","value","dsTA_SLIPNT_BASE","REMK_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medSLIP_AMNT_value","medSLIP_AMNT","value","dsTA_SLIPNT_BASE","SLIP_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbCURR_GUBN_value","cmbCURR_GUBN","value","dsTA_SLIPNT_BASE","CURR_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCURR_AMNT_value","medCURR_AMNT","value","dsTA_SLIPNT_BASE","CURR_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("rdoDRCR_GUBN_value","rdoDRCR_GUBN","value","dsTA_SLIPNT_BASE","DRCR_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medFORI_AMNT_value","medFORI_AMNT","value","dsTA_SLIPNT_BASE","FORI_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calAPPR_DATE_value","calAPPR_DATE","value","dsTA_SLIPNT_BASE","APPR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medSLIP_NUMB_value","medSLIP_NUMB","value","dsTA_SLIPNT_BASE","SLIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medSLIP_LINE_value","medSLIP_LINE","value","dsTA_SLIPNT_BASE","SLIP_LINE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calSLIP_DATE_value","calSLIP_DATE","value","dsTA_SLIPNT_BASE","SLIP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cmbCOND_CODE","value","dsTA_SLIPNT_BASE","COND_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtCOND_VACD","value","dsTA_SLIPNT_BASE","COND_VACD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtCOND_VANM","value","dsTA_SLIPNT_BASE","COND_VANM");
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
        this.addIncludeScript("FAME0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAME0030.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAME0030 최초미결전표등록
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

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sBUTTONLIST = 'TTFFTTTF'; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = 'FAME0030'; //해당 Form에서 사용 할 Package 명
        this.bFireEvents = true;

        /*
        this.sUSERAUTH = ''; //사용자별 프로그램 사용 권한
        this.sFORMCAPTION = '최초미결전표등록'; //Form의 Title 정보
        this.sFORMLOCATION = ''; //Form의 Location 정보
        this.sUSERLAVEL = '';
        */

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
        /*----------------------------------+
         |  00.도움말 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_Help = function (obj)
        {
        }

        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo); //공통 콤보데이터 셋을 설정한다.

        	// 관리구분콤보 조회
        	this.fn_Search01();

        	this.fn_Input();
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	// 화면 종료
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	if (this.lookupFunc("GetUpdate").call(this.dsTA_SLIPNT_BASE) == true)
        	{
        		// 수정 사항이 있으면, 신규 진행할지 묻는다. // TODO
        		if (!this.fnc_Message("TMM023"))
        		{
        			return false;
        		}
        		// 변경된 자료가 있습니다. 계속 진행하시겠습니까?
        	}

        	this.dsTA_SLIPNT_BASE.clearData();

        	this.dsTA_SLIPNT_BASE.set_updatecontrol(false);

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT_BASE=dsTA_SLIPNT_BASE ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPNT_BASE.setFocus();
        }

        

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	this.fnc_DataSetCancel(this.dsTA_SLIPNT_BASE); //취소 할 DataSet의 이름을 입력한다.

        	this.grdTA_SLIPNT_BASE.setFocus(); //취소 후 Grid로 Focus
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	if (!this.fn_SaveItemCheck())
        	{
        		return;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTA_SLIPNT_BASE=dsTA_SLIPNT_BASE:U ";
        	var sOutDataSet = "dsTA_SLIPNT_BASE=dsTA_SLIPNT_BASE ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.grdTA_SLIPNT_BASE.setFocus();
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.fnc_ToExcel(this.name); //Export 할 화면 Call
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTA_SLIPNT_BASE", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e)
        {
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
        /*----------------------------------------------------------------+
         |  조회 필수 조건 체크!  |
         +-----------------------------------------------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (fnc_DatasetChangeCheck("dsTA_SLIPNT_BASE")) if (this.fnc_Message("TMM023") == false) return false;
        	return true;
        	
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        }

        /*-----------------------------------+
         |  저장 여부 체크(결의서)!          |
         +-----------------------------------*/
        this.fn_SaveItemCheck = function (Obj) {
        	// 자동전표는 수정할수 없다.

        	// 변경된 자료가 있는지 체크
        	//if (!this.lookupFunc("fnc_DatasetChangeCheckM").call('dsTA_SLIPNT_BASE'))
        	if (!fnc_DatasetChangeCheck("dsTA_SLIPNT_BASE"))
        	{
        		// 저장 할 자료가 없음
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	/******************************** 전표 세부내역 체크 *****************************************/
        	for (var i = 0; i < this.dsTA_SLIPNT_BASE.getRowCount(); i++) {
        		
        		if (this.dsTA_SLIPNT_BASE.getRowType(this.dsTA_SLIPNT_BASE.rowposition) == Dataset.ROWTYPE_NORMAL) continue;

        		// 귀속부서
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT_BASE.getColumn(i, "USEX_DEPT"))) < 1) 		{
        			this.fnc_Message("TMM072", "귀속부서"); //Message 처리
        			this.dsTA_SLIPNT_BASE.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.edtDEPT_NAM1.setFocus();
        			return false;
        		}
        		
        		// 계정과목
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT_BASE.getColumn(i, "ACCT_INTL"))) < 1) {
        			this.fnc_Message("TMM072", "계정과목"); //Message 처리
        			this.dsTA_SLIPNT_BASE.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.edtACCT_NAME.setFocus();
        			return false;
        		}
        		
        		// 차대구분
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT_BASE.getColumn(i, "DRCR_GUBN"))) < 1) {
        			this.fnc_Message("TMM072", "차대구분"); //Message 처리
        			this.dsTA_SLIPNT_BASE.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.rdoDRCR_GUBN.setFocus();
        			return false;
        		}
        		
        		// 금액
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT_BASE.getColumn(i, "SLIP_AMNT"))) < 1) {
        			this.fnc_Message("TMM072", "금액"); //Message 처리
        			this.dsTA_SLIPNT_BASE.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.medSLIP_AMNT.setFocus();
        			return false;
        		}

        		// 적요
        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT_BASE.getColumn(i, "REMK_NAME"))) < 1) {
        			this.fnc_Message("TMM072", "적요"); //Message 처리
        			this.dsTA_SLIPNT_BASE.set_rowposition(i); //DataSet을 현재 Row로 이동
        			this.edtREMK_NAME.setFocus();
        			return false;
        		}

        		// 외화여부
        		if (this.dsTA_SLIPNT_BASE.getColumn(i, 'FNCR_YSNO') == 1) {
        			// 화폐구분
        			if (this.dsTA_SLIPNT_BASE.getColumn(i, "CURR_GUBN") == "FC010079") {
        				// 한화
        				this.fnc_Message("TMM125", "외화필수에서 한화는 사용할수 없습니다."); //Message 처리
        				this.dsTA_SLIPNT_BASE.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.cmbCURR_GUBN.setFocus();
        				return false;
        			}
        			
        			// 환율
        			if (this.dsTA_SLIPNT_BASE.getColumn(i, "CURR_AMNT") == 0) {
        				this.fnc_Message("TMM125", "환율은 0일수 없습니다."); //Message 처리
        				this.dsTA_SLIPNT_BASE.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.medCURR_AMNT.setFocus();
        				return false;
        			}
        			// 외화금액
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_SLIPNT_BASE.getColumn(i, "FORI_AMNT"))) < 1) {
        				this.fnc_Message("TMM072", "외화금액"); //Message 처리
        				this.dsTA_SLIPNT_BASE.set_rowposition(i); //DataSet을 현재 Row로 이동
        				this.medFORI_AMNT.setFocus();
        				return false;
        			}
        		}
        	}

        	return true;
        }

        /*----------------------------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +-----------------------------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;
        	this.sACCT_YEAR = this.fnc_SubStr(this.calSLIP_DATE.value, 0, 4);

        	if (this.sACCT_YEAR == "") this.sACCT_YEAR = this.fnc_GetServerDateTime("DATE");

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " SLIP_DATE=" 	+ this.fnc_Quote(""); //전표일자
        		sReturnString += " SLIP_NUMB=" 	+ this.fnc_Quote(""); //전표번호
        	
        	// 관리코드 콤보 조회
        	} else if (sKind == "SEARCH01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        	
        	// 조회 Argument 생성
        	} else if (sKind == "SEARCHRATE") {
        		
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " SLIP_DATE=" 	+ this.fnc_Quote(this.calSLIP_DATE.value); //전표일자

        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {

        		this.fnc_Information(this.stInformation, this.dsTA_SLIPNT_BASE.rowcount, "SHR");

        		this.sACCT_YEAR = this.fnc_SubStr(this.dsTA_SLIPNT_BASE.getColumn(this.dsTA_SLIPNT_BASE.rowposition, 'SLIP_DATE'), 0, 4);
        		this.sBUDG_YYMM = this.fnc_SubStr(this.dsTA_SLIPNT_BASE.getColumn(this.dsTA_SLIPNT_BASE.rowposition, 'SLIP_DATE'), 0, 6);

        		this.calSLIP_DATE.set_enable(false);
        		this.lookupSetter("sVAT", "set_sVAT").set("Y");

        		this.fn_ACCT_INTL_CHECK();

        		this.dsTA_SLIPNT_BASE.set_updatecontrol(true);
        		
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        		// 공통코드 조회후 처리
        		
        	} else if (sMethodName == "CODENAMESEARCH00") {
        	
        		// 코드명 조회 후 처리
        		this.lookupFunc("fnc_MultiRowDisplay").call(this);
        		
        	}
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +--------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	
        	if (e.newrow < 0) return;

        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT) {
        		this.medSLIP_NUMB.set_enable(true); //전표번호를 Disibled
        		this.medSLIP_LINE.set_enable(true);
        		this.calSLIP_DATE.set_enable(true);
        	} else {
        		this.medSLIP_NUMB.set_enable(false); //전표번호를 Disibled
        		this.medSLIP_LINE.set_enable(false);
        		this.calSLIP_DATE.set_enable(false);
        	}
        	
        }

        /*----------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            // 귀속 부서
            if ((obj.name == "ImgHelpDEPT_COD1") || (obj.name == "edtDEPT_NAM1")) {

                arrParam[0] = "FCMA0410";                                  //Popup ID
                arrParam[1] = "D%";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtDEPT_NAM1.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtDEPT_NAM1";                          //현재 포커스 Componect명
                arrParam[5] = "edtUSEX_DEPT,edtDEPT_NAM1";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index

                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
        	
        	//계정 과목
            } else if ((obj.name == "ImgHelpACCT_INTL") || (obj.name == "edtACCT_NAME")) {

                arrParam[0] = "FCMA0410";                                  //Popup ID
                arrParam[1] = "D%";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtACCT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtACCT_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtACCT_INTL,edtACCT_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index

                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출

        	//관리 항목
            } else if ((obj.name == "imgHelpCOND_VACD") || (obj.name == "edtCOND_VANM")) {

                arrParam[0] = "FCMA0410";                                  //Popup ID
                arrParam[1] = "D%";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtCOND_VANM.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtCOND_VANM";                          //현재 포커스 Componect명
                arrParam[5] = "edtCOND_VACD,edtCOND_VANM";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index

                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
        	
            } 
        }

        /*----------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj,e) {
        	// trace( " ======================= fn_CodeNameDisplay " );
        	// 변화가 없으면 굳이 실행 하지 않는다.
        	if (obj.value == obj.UserData)
        	{
        		return;
        	}

        	if (!this.bFireEvents)
        	{
        		return;
        	}

        	application.GBL_CUROBJ = obj; //현재 선택한 Text Object

        	var sMethodName = "CODENAMESEARCH00";
        	var sInputValue = this.fnc_Trim(obj.value);
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sInputValue1 = "";
        	var sInputValue2 = "";
        	var sInputValue3 = "";
        	var sInputValue4 = "";
        	switch (obj.name)
        	{
        		case "edtDEPT_NAM1":
        			// 귀속부서
        			// if(edtDEPT_NAM1.Enable==false||dsTA_SLIPNT_BASE.rowcount<1) return;

        			sSearchKind = "DEPT01"; //부서 정보
        			application.GBL_REVOBJ1 = "edtUSEX_DEPT"; //부서코드 Text Object명
        			application.GBL_REVOBJ2 = "edtDEPT_NAM1"; //부서 명칭 Text Object명
        			break;
        		case "edtACCT_NAME":
        			// 계정과목
        			if (this.lookupFunc("fnc_IsDate").call(this.dsTA_SLIPNT_BASE.getColumn(this.dsTA_SLIPNT_BASE.rowposition, "SLIP_DATE")) == false)
        			{
        				// 전표일자를 먼저 입력하라는 메세지 필요
        				this.fnc_Message("FA1022", "작성일자"); //Message 처리
        				return;
        			}

        			sSearchKind = "ACCT05"; //계정 정보
        			sCommonGubn = this.fnc_SubStr(this.dsTA_SLIPNT_BASE.getColumn(this.dsTA_SLIPNT_BASE.rowposition, 'SLIP_DATE'), 0, 4);
        			application.GBL_REVOBJ1 = "edtACCT_INTL"; //계정 코드 Text Object명
        			application.GBL_REVOBJ2 = "edtACCT_NAME"; //계정 명칭 Text Object명

        			application.GBL_REVOBJ3 = "rdoDRCR_GUBN";
        			application.GBL_REVOBJ4 = "edtFNCR_YSNO";
        			application.GBL_REVOBJ5 = "cmbCOND_CODE";

        			break;
        		case "edtCOND_VANM":
        			// 관리항목

        			if (this.fnc_Length(this.dsCOND_CODE.getColumn(this.cmbCOND_CODE.index, 'COND_KIND')) < 3)
        			{
        				return;
        			}

        			if (this.dsCOND_CODE.getColumn(this.cmbCOND_CODE.index, 'COND_KIND') == 'COMB')
        			{
        				// !! 콤보라 구분했지만 실제로는 공통코드 조회 팝업을 사용한다.!!
        				sSearchKind = "COMM2"; //공통코드조회
        				sCommonGubn = this.dsCOND_CODE.getColumn(this.cmbCOND_CODE.index, 'COMB_IDXX'); //공통 구분 코드
        			}
        			else
        			{
        				sSearchKind = this.dsCOND_CODE.getColumn(this.cmbCOND_CODE.index, 'COMB_IDXX');
        				sCommonGubn = "";
        			}

        			sInputValue = this.edtCOND_VANM.value; //검색 조건 Text

        			this.lookupSetter("sResponse", "set_sResponse").set(this.lookupFunc("fnc_HelpDialoge").call(sSearchKind, sInputValue, sCommonGubn, this.edtCOND_VANM, sInputValue1, sInputValue2, sInputValue3)); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(this.sResponse)) != 0)
        			{
        				this.bFireEvents = false;
        				this.edtCOND_VACD.set_value(this.sResponse[0]); //관리항목코드
        				this.edtCOND_VANM.set_value(this.sResponse[1]); //관리항목값
        				this.bFireEvents = true;
        			}

        			// 관리항목은 일반적인 퀵뷰를 사용하지 않는다.
        			return;

        			break;
        	}

        	// 조회 서비스 실횅
        	this.lookupFunc("fnc_CodeNameSearch").call(this, sMethodName, sSearchKind, sInputValue, sCommonGubn, sInputValue1, sInputValue2, sInputValue3, sInputValue4);
        }

        
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  전표라인번호 채번                     |
         +---------------------------------------*/
        this.fn_MAX_LINE_NO = function ()
        {
        	var iMAX_LINE_NO = 0;
        	var sMAX_LINE_NO = "";

        	for (var i = 0; i < this.dsTA_SLIPNT_BASE.getRowCount(); i++)
        	{
        		if (nexacro.toNumber(this.dsTA_SLIPNT_BASE.getColumn(i, "SLIP_LINE")) > iMAX_LINE_NO)
        		{
        			iMAX_LINE_NO = nexacro.toNumber(this.dsTA_SLIPNT_BASE.getColumn(i, "SLIP_LINE"));
        		}
        	}
        	return this.lookupFunc("lPad").call(iMAX_LINE_NO + 1, "0", 4);
        }
        // 엑셀 업로드시 전표라인 채번
        this.fn_EXCEL_MAX_LINE_NO = function ()
        {
        	var iMAX_LINE_NO = 0;
        	var sMAX_LINE_NO = "";

        	for (var i = 0; i < this.dsTA_SLIPNT_BASE.getRowCount(); i++)
        	{
        		if (nexacro.toNumber(this.dsTA_SLIPNT_BASE.getColumn(i, "SLIP_LINE")) > iMAX_LINE_NO)
        		{
        			iMAX_LINE_NO = nexacro.toNumber(this.dsTA_SLIPNT_BASE.getColumn(i, "SLIP_LINE"));
        		}
        	}
        	return this.lookupFunc("lPad").call(iMAX_LINE_NO + 1, "0", 4);
        }
        /*----------------------------------------------------------------+
         |  전표세부내역 추가시 체크항목        |
         +-----------------------------------------------------------------*/
        this.fn_AddRowCheck = function (Obj)
        {
        	return true;
        }
        /*----------------------------------------------------------------+
         |  전표세부내역 삭제시 체크항목        |
         +-----------------------------------------------------------------*/
        this.fn_DelRowCheck = function (Obj)
        {
        	return true;
        }

        

        
        /*---------------------------------------+
         |  계정과목 필수 사용여부 항목에 따라 화면및기본값 표시
         +---------------------------------------*/
        this.fn_ACCT_INTL_CHECK = function (obj)
        {
        	// 화폐
        	if (this.dsTA_SLIPNT_BASE.getColumn(this.dsTA_SLIPNT_BASE.rowposition, 'FNCR_YSNO') == 1)
        	{
        		// 화폐
        		this.staCURR_GUBN.set_cssclass('styFormItemCapBE');
        		this.cmbCURR_GUBN.set_enable(true);
        		// 환율
        		this.staCURR_AMNT.set_cssclass('styFormItemCapBE');
        		this.medCURR_AMNT.set_enable(true);
        		// 외화
        		this.staFORI_AMNT.set_cssclass('styFormItemCapBE');
        		this.medFORI_AMNT.set_enable(true);
        	}
        	else
        	{
        		// 화폐
        		this.staCURR_GUBN.set_cssclass('styFormItemCap');
        		this.cmbCURR_GUBN.set_enable(false);
        		// cmbCURR_GUBN.Value	= 'FC010079'; // KRW
        		// 환율
        		this.staCURR_AMNT.set_cssclass('styFormItemCap');
        		this.medCURR_AMNT.set_enable(false);
        		// medCURR_AMNT.Value	= "";
        		// 외화
        		this.staFORI_AMNT.set_cssclass('styFormItemCap');
        		this.medFORI_AMNT.set_enable(false);
        		// medFORI_AMNT.Value	= "";
        	}
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        
        /*-----------------------+
         | 관리구분콤보 조회 |
         +------------------------*/
        this.fn_Search01 = function (obj)
        {
        	// 조회 필수 입력 여부  체크

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCOND_CODE=dsCOND_CODE ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	this.grdTA_SLIPNT_BASE.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        
        /*----------------------------------------------------------------+
         |  그리드 클릭 시 Sort!  |
         +-----------------------------------------------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	// 특정 Head 클릭 시 해당 항목으로 Sort(만약 특정 컬럼을 누를때만 소트하고자 한다면 nCell로 조건)
        	this.lookupFunc("fnc_GridSort").call(obj, obj.binddataset, e.col, e.cell);
        }

        /*********    버튼처리  **********************************************/
        /*----------------------------------------------------------------+
         |  전표상세내역 추가 |
         +-----------------------------------------------------------------*/
        this.btn_AddRow_OnClick = function (obj,e)
        {
        	// 필수항목 체크
        	// if (!fn_AddRowCheck()) return;

        
        	var iROW = this.dsTA_SLIPNT_BASE.addRow();
        	this.dsTA_SLIPNT_BASE.setColumn(iROW, "DRCR_GUBN", "N"); //차변대변구분
        	this.dsTA_SLIPNT_BASE.setColumn(iROW, "CURR_GUBN", "FC010079"); //화폐단위
        	this.dsTA_SLIPNT_BASE.setColumn(iROW, "USEX_DEPT", application.GBL_DEPTCD); //부서
        	this.dsTA_SLIPNT_BASE.setColumn(iROW, "DEPT_NAME", application.GBL_DEPTNM); //부서명

        	this.cmbACCT_GUB1.set_index(0); //회계단위

        	this.fn_ACCT_INTL_CHECK();

        	this.cmbCURR_GUBN_OnChanged(); //환율값

        	// calSLIP_DATE.Enable = false;

        	this.edtACCT_NAME.setFocus();
        }
        /*----------------------------------------------------------------+
         |  전표상세내역 삭제 |
         +-----------------------------------------------------------------*/
        this.btn_DelRow_OnClick = function (obj,e)
        {
        	var iRowS = this.dsTA_SLIPNT_BASE.rowposition;

        	this.dsTA_SLIPNT_BASE.deleteRow(iRowS);

        	if (this.dsTA_SLIPNT_BASE.rowcount < 1)
        	{
        		this.calSLIP_DATE.set_enable(true);
        		this.cmbACCT_GUB1.set_enable(true);
        	}
        }

        /*********    항목변경 **********************************************/

        

        /*----------------------------------------------------------------+
         |  // 계정과목 변경 |
         +-----------------------------------------------------------------*/

        this.edtACCT_INTL_OnChanged = function (obj,e)
        {
        	// trace("====================================== edtACCT_INTL_OnChanged start ")
        	// 정상 동작 하지 않아 dsTA_SLIPNT_oncolumnchanged 으로 변경
        }

        
        this.dsTA_SLIPNT_BASE_oncolumnchanged = function (obj,e)
        {
        	if (e.columnid == "ACCT_INTL")
        	{
        		// 계정별로에 대한 사용여부
        		this.fn_ACCT_INTL_CHECK();
        	}
        }

        /*----------------------------------------------------------------+
         |  // 그리드 변경시 |
         +-----------------------------------------------------------------*/
        this.dsTA_SLIPNT_BASE_OnRowPosChanged = function (obj,e)
        {
        	
        	//if (this.fnc_ToUpper(this.lookupFunc("GetRowType").call(this.dsTA_SLIPNT_BASE, this.dsTA_SLIPNT_BASE.rowposition)) == 'INSERT')
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.medSLIP_NUMB.set_enable(true);
        		this.medSLIP_LINE.set_enable(true);
        		this.cmbACCT_GUB1.set_enable(true);
        		this.calSLIP_DATE.set_enable(true);
        	}
        	else
        	{
        		this.medSLIP_NUMB.set_enable(false);
        		this.medSLIP_LINE.set_enable(false);
        		this.cmbACCT_GUB1.set_enable(false);
        		this.calSLIP_DATE.set_enable(false);
        	}

        
        	// 계정과목에 필수항목 표시
        	this.fn_ACCT_INTL_CHECK();
        }

        /*----------------------------------------------------------------+
         |  // 조회 전표번호 |
         +-----------------------------------------------------------------*/
        this.edtSHRDISP_NUMB_OnChanged = function (obj,strText)
        {
        	/*
        	 edtSHRDISP_NUMB.Text = Lpad(edtSHRDISP_NUMB.Text,"0",4);
        	 edtSHRSLIP_NUMB.Text = "01" + calSHRSLIP_DATE.Text + edtSHRDISP_NUMB.Text;
        	 */
        }

        /*------------------------------------------+
         |  양식파일 다운로드 클릭 時  |
         +------------------------------------------*/
        this.btnFileDown_OnClick = function (obj,e)
        {
        	var file_size;
        	var remote_url;
        	var remote_file;
        	var file_url;

        	var file_name;
        	var ret;

        
        	file_name = "UpSample_SlipList2.xls"; //파일 이름을 내가 만든 엑셀 파일명으로 바꾸기

        	// 위치 지정
        	this.FileDialog2.FileName = file_name;
        	if (!this.FileDialog2.Open())
        	{
        		return;
        	}

        	file_url = this.FileDialog2.FilePath + "\\" + this.FileDialog2.FileName;

        	var ret = this.lookupFunc("gfn_FileRead").call(this.lookup("multipart_http"), file_url, file_name, 1, null, null, null, "/upload/sample/");
        	
        }

        /*------------------------------------------+
         |  양식파일 업로드 클릭 時  |
         +------------------------------------------*/
        this.btnFile_OnClick = function (obj,e)
        {
        	this.FileDialog1.Type = "OPEN";
        	this.FileDialog1.Filter = "Excel(.xls)|*.xls|Excel(.xlsx)|*.xlsx|";
        	var result = this.FileDialog1.Open();

        	if (result)
        	{
        		var xls_path = this.FileDialog1.FilePath + "\\" + this.FileDialog1.FileName;

        		// dsTA_SLIPNT_BASE.ClearData();
        		this.DS_EXCEL.clearData();
        		this.lookupFunc("ext_ExcelImportByIndex").call(xls_path, 0, "DS_EXCEL");

        		this.dsTA_SLIPNT_BASE.set_updatecontrol(false);

        		for (this.lookupSetter("i", "set_i").set(1); this.lookup("i") < this.DS_EXCEL.getRowCount(); this.lookupSetter("i", "set_i").postInc())
        		{
        			var eDRCR_GUBN;
        			if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 0))) > 4)
        			{
        				if (this.DS_EXCEL.getColumn(this.lookup("i"), 1) == "차변" || this.DS_EXCEL.getColumn(this.lookup("i"), 1) == "대변")
        				{
        					if (this.DS_EXCEL.getColumn(this.lookup("i"), 1) == "차변")
        					{
        						eDRCR_GUBN = "D";
        					}
        					else if (this.DS_EXCEL.getColumn(this.lookup("i"), 1) == "대변")
        					{
        						eDRCR_GUBN = "C";
        					}
        				}

        				var nRow = this.dsTA_SLIPNT_BASE.addRow();
        				this.lookupFunc("SetRowType").call(this.dsTA_SLIPNT_BASE, nRow, 'insert');
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'No', nRow); //row
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'ACCT_GUBN', "100"); //사업장
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'SLIP_NUMB', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 0))); //전표번호
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'SLIP_LINE', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 1))); //전표순번
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'SLIP_DATE', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 2))); //작성일
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'APPR_DATE', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 3))); //회계일
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'USEX_DEPT', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 4))); //귀속부서
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'ACCT_INTL', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 5))); //계정과목
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'DRCR_GUBN', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 6))); //차변대변구분
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'SLIP_AMNT', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 7))); //금액
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'REMK_NAME', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 8))); //적요
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'ACCT_GUB1', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 9))); //회계단위

        				// 기본셋팅항목
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'BUDG_YYMM', this.fnc_SubStr(this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 2)), 0, 6)); //예산년월
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'CURR_GUBN', "FC010079");

        
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'TRNS_DATE', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 16))); //발행일자
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'VATX_GUBN', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 17))); //매입매출
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'VATX_TYPE', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 18))); //부가세종류
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'PURC_GUBN', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 19))); //부가세유형

        

        				// 관리항목등록 nRow
        				var sRFSLId_LINE = this.dsTA_SLIPNT_BASE.getColumn(nRow, 'SLIP_LINE');

        
        				this.dsTA_SLIPNT_BASE.setColumn(nRow, 'CUST_CODE', this.fnc_Trim(this.DS_EXCEL.getColumn(this.lookup("i"), 26))); //전표번호
        			}
        		}

        		this.dsTA_SLIPNT_BASE.set_updatecontrol(true);

        		// calSLIP_DATE.Enable = false;
        	}
        	this.stInformation.set_text((this.dsTA_SLIPNT_BASE.rowcount + "개의 데이타를 로드 했습니다."));

        	this.dsTA_SLIPNT_BASE.set_rowposition(1);
        	this.grdTA_SLIPNT_BASE.setFocus();
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_SLIPNT_BASE.addEventHandler("onrowposchanged", this.dsTA_SLIPNT_BASE_OnRowPosChanged, this);
            this.dsTA_SLIPNT_BASE.addEventHandler("oncolumnchanged", this.dsTA_SLIPNT_BASE_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.Div0.btnFile.addEventHandler("onclick", this.btnFile_OnClick, this);
            this.Div0.btnFileDown.addEventHandler("onclick", this.btnFileDown_OnClick, this);
            this.grdTA_SLIPNT_BASE.addEventHandler("onheaddblclick", this.fn_GridSort, this);
            this.btn_DelRow.addEventHandler("onclick", this.btn_DelRow_OnClick, this);
            this.btn_AddRow.addEventHandler("onclick", this.btn_AddRow_OnClick, this);
            this.ImgHelpDEPT_COD1.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtCOND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOND_CODE.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtFNCR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtFNCR_YSNO.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtCOND_VANM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOND_VANM.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtCOND_VACD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCOND_CODE.addEventHandler("onitemchanged", this.cmbSHRCOND_CODE_OnKillFocus, this);
            this.cmbCOND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSLIP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSLIP_DATE.addEventHandler("onchanged", this.calSLIP_DATE_OnChanged, this);
            this.medSLIP_LINE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSLIP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calAPPR_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medFORI_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.rdoDRCR_GUBN.addEventHandler("onitemclick", this.rdoDRCR_GUBN_OnClick, this);
            this.medCURR_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSLIP_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSLIP_AMNT.addEventHandler("ontextchanged", this.medSLIP_AMNT_OnCharChanged, this);
            this.edtREMK_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAM1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAM1.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtUSEX_DEPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_INTL.addEventHandler("ontextchanged", this.edtACCT_INTL_OnChanged, this);
            this.cmbACCT_GUB1.addEventHandler("onitemchanged", this.cmbACCT_GUB1_OnChanged, this);
            this.cmbACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpCOND_VACD.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.ImgHelpACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAME0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
