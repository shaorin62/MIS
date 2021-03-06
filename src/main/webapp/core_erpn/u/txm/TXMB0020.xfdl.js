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
                this.set_name("TXMB0020");
                this.set_titletext("세금계산서 국세청 전송내역");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"DSNAME\">dsVATX_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">VATX_GUBN</Col><Col id=\"DSNAME\">dsSHRVATX_GUBN</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ETAXUP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ETAX_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ETAX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ETAX_APNO\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_BSNS\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_JONG\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_BOSS\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_BSNS\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_JONG\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_BOSS\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SUMX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUPP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_AMTX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ETAX_CLAS\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ETAX_TYPE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_TYPE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_GITA\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_BILL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROV_MAIL\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_MAI1\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"HIMX_MAI2\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_STRD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ITEM_QTYX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ITEM_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ITEM_SUPP\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ITEM_VATX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ITEM_REMK\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DATA_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VATX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REGS_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAM2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COPRT_CONT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COPRJ_CONT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"ETAX_APNO\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EBIL_GUBN\" type=\"STRING\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_TOTALX", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMT1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VATX_AMT1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUMX_AMT1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_CNT1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REVX_CNT1\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUPP_AMT2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"VATX_AMT2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUMX_AMT2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_CNT2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REVX_CNT2\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PURC_CONT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DIFF_HIST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"PARAM\">사업장조회</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">FAM0004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "224", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_TOTALX", "absolute", "8", "128", null, null, "25", "411", this);
            obj.set_selecttype("row");
            obj.set_autoenter("none");
            obj.set_binddataset("dsTA_TOTALX");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"90\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"상호\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"업태\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"text\" text=\"업종\"/><Cell col=\"4\" colspan=\"5\" displaytype=\"text\" text=\"전자\"/><Cell col=\"9\" colspan=\"6\" displaytype=\"text\" text=\"전표\"/><Cell col=\"15\" rowspan=\"2\" displaytype=\"text\" text=\"차이내용\"/><Cell row=\"1\" col=\"4\" displaytype=\"text\" text=\"공급가액\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" text=\"세액\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"합계금액\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"건수\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"수정건수\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"공급가액\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"세액\"/><Cell row=\"1\" col=\"11\" displaytype=\"text\" text=\"합계금액\"/><Cell row=\"1\" col=\"12\" displaytype=\"text\" text=\"건수\"/><Cell row=\"1\" col=\"13\" displaytype=\"text\" text=\"조정건수\"/><Cell row=\"1\" col=\"14\" displaytype=\"text\" text=\"매수\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:BIZR_NUMB\" mask=\"expr:Eco.decode(comp.parent.fnc_Length(BIZR_NUMB), 10, '###-##-#####', 13, '######-#######', '')\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"bind:BSNS_STAT\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\" text=\"bind:BSNS_TYPE\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUPP_AMT1\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VATX_AMT1\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMX_AMT1\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_CNT1\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REVX_CNT1\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUPP_AMT2\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VATX_AMT2\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMX_AMT2\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_CNT2\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REVX_CNT2\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PURC_CONT\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: center;\" text=\"bind:DIFF_HIST\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_AMT1&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;VATX_AMT1&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUMX_AMT1&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;TAXX_CNT1&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;REVX_CNT1&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_AMT2&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;VATX_AMT2&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUMX_AMT2&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;TAXX_CNT2&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;REVX_CNT2&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;PURC_CONT&quot;)\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_ETAXUP", "absolute", "8", null, null, "170", "25", "216", this);
            obj.set_binddataset("dsTA_ETAXUP");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"158\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"자료구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"작성일자\"/><Cell col=\"2\" displaytype=\"text\" text=\"발행일자\"/><Cell col=\"3\" displaytype=\"text\" text=\"계산서분류\"/><Cell col=\"4\" displaytype=\"text\" text=\"공급가액\"/><Cell col=\"5\" displaytype=\"text\" text=\"세액\"/><Cell col=\"6\" displaytype=\"text\" text=\"상호\"/><Cell col=\"7\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"8\" displaytype=\"text\" text=\"기타\"/><Cell col=\"9\" displaytype=\"text\" text=\"계산서종류\"/><Cell col=\"10\" displaytype=\"text\" text=\"발급유형\"/><Cell col=\"11\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:DATA_GUBN\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: center;\" text=\"bind:ETAX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" style=\"align: center;\" text=\"bind:ISSU_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ETAX_CLAS\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUPP_AMNT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:PROV_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: center;\" text=\"bind:BSNS_NUMB\" mask=\"expr:Eco.decode(comp.parent.fnc_Length(BSNS_NUMB), 10, '###-##-#####', 13, '######-#######', '')\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_GITA\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: center;\" text=\"bind:ETAX_TYPE\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: center;\" text=\"bind:TRNS_TYPE\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NOTE\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_AMNT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_AMNT&quot;)\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", null, null, "176", "25", "15", this);
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autoenter("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"138\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"자료구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"일자\"/><Cell col=\"2\" displaytype=\"text\" text=\"공급가액\"/><Cell col=\"3\" displaytype=\"text\" text=\"세액\"/><Cell col=\"4\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"5\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"6\" displaytype=\"text\" text=\"적요\"/><Cell col=\"7\" displaytype=\"text\" text=\"상호\"/><Cell col=\"8\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"9\" displaytype=\"text\" text=\"업태\"/><Cell col=\"10\" displaytype=\"text\" text=\"업종\"/><Cell col=\"11\" displaytype=\"text\" text=\"현거래처명\"/><Cell col=\"12\" displaytype=\"text\" text=\"귀속부서\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:DATA_GUBN\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: center;\" text=\"bind:TRNS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUPP_AMNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VATX_AMNT\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"bind:DISP_NUMB\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CUST_NAME\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:center;\" text=\"bind:REGS_NO\" mask=\"expr:comp.parent.fnc_Length(REGS_NO) &lt; 1 ? &quot;&quot; : &quot;###-##-#####&quot;\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\" text=\"bind:COPRT_CONT\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\" text=\"bind:COPRJ_CONT\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\" text=\"bind:CUST_NAM2\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align: center;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_AMNT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;VATX_AMNT&quot;)\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "48", "349", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "344", "71", "63", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "399", "71", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static1", "absolute", "578", "71", "76", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("매입매출");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRVATX_GUBN", "absolute", "646", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static6", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBASE_DAT1", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static7", "absolute", "201", "71", "14", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBASE_DAT2", "absolute", "216", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("세금계산서 국세청 전송내역");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("19");
            obj.set_text("홈 > 세무관리 > 부가세대사관리 > 세금계산서 국세청 전송내역");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("28");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "316", "61", "40", "41", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "573", "306", "80", "25", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "573", "501", "80", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "8", null, "158", "21", null, "386", this);
            obj.set_taborder("34");
            obj.set_text("전자");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "8", "325", "216", "6", null, null, this);
            obj.set_taborder("35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", null, "158", "21", null, "191", this);
            obj.set_taborder("36");
            obj.set_text("전표");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "520", "216", "6", null, null, this);
            obj.set_taborder("37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "62", "292", "12", "23", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "49", "292", "12", "23", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "61", null, "10", "13", null, "391", this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "73", null, "169", "21", null, "386", this);
            obj.set_taborder("41");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "62", "487", "12", "23", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "49", "487", "12", "23", null, null, this);
            obj.set_taborder("43");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", "61", null, "10", "13", null, "196", this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation03", "absolute", "73", null, "169", "21", null, "191", this);
            obj.set_taborder("45");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("세금계산서 국세청 전송내역");
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
        this.addIncludeScript("TXMB0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TXMB0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMB0020 세금계산서국세청전송내역
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
         *   2018.08.03		안윤준		수정
         *   2018.08.09		오혜성		수정
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
        this.sBUTTONLIST 	= "TTFFFFTF";
        this.sPACKAGENAME 	= "TXMB0020";

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.fnc_GetBranch();
        	
        	this.fnc_FormatSlipNumber(this.grdTA_SLIPNT, "DISP_NUMB", "Y");
        	
        	var sStds_Date	= this.fnc_AddMonth(this.fnc_GetServerDateTime("DATE"), -1);
        	var sStds_Mnth	= this.fnc_SubStr(sStds_Date, 4, 2);
        	var sTrns_Dat1 	= this.fnc_SubStr(sStds_Date, 0, 4);
        	var sTrns_Dat2 	= this.fnc_SubStr(sStds_Date, 0, 4);

        	if (sStds_Mnth >= "01" && sStds_Mnth <= "03") {
        		sTrns_Dat1 	= sTrns_Dat1 + "0101";
        		sTrns_Dat2 	= sTrns_Dat2 + "0331";
        		
        	} else if (sStds_Mnth >= "04" && sStds_Mnth <= "06") {
        		sTrns_Dat1 	= sTrns_Dat1 + "0401";
        		sTrns_Dat2 	= sTrns_Dat2 + "0630";
        		
        	} else if (sStds_Mnth >= "07" && sStds_Mnth <= "09") {
        		sTrns_Dat1 	= sTrns_Dat1 + "0701";
        		sTrns_Dat2 	= sTrns_Dat2 + "0930";
        		
        	} else if (sStds_Mnth >= "10" || sStds_Mnth <= "12") {
        		sTrns_Dat1 	= sTrns_Dat1 + "1001";
        		sTrns_Dat2 	= sTrns_Dat2 + "1231";
        		
        	}
        	
        	this.calSHRBASE_DAT1.set_value(sTrns_Dat1);
        	this.calSHRBASE_DAT2.set_value(sTrns_Dat2);
        	
        	this.calSHRBASE_DAT1.setFocus();
        	
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
        	
        	this.fnc_DatasetClear("dsTA_TOTALX,dsTA_ETAXUP,dsTA_SLIPNT");
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_TOTALX=dsTA_TOTALX";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_TOTALX.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn2Excel = function (obj) {
        	this.fnc2Excel(this.name);
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	//기능없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;

        	var sMessage = this.fnc_FormUnloadCheck("dsTA_TOTALX,dsTA_ETAXUP,dsTA_SLIPNT", this);	

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
        		//기능없음
        }
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        		//기능없음
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {
        		//기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업장
        		sReturnString += " VATX_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRVATX_GUBN.value)); //매입매출
        		sReturnString += " BASE_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRBASE_DAT1.value)); //조회기간FROM
        		sReturnString += " BASE_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRBASE_DAT2.value)); //조회기간TO
        		
        	} else if (sKind == "SEARCH01") {

        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)); //사업장
        		sReturnString += " VATX_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRVATX_GUBN.value)); //매입매출
        		sReturnString += " BASE_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRBASE_DAT1.value)); //조회기간FROM
        		sReturnString += " BASE_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRBASE_DAT2.value)); //조회기간TO
        		sReturnString += " BIZR_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.dsTA_TOTALX.getColumn(this.dsTA_TOTALX.rowposition, "BIZR_NUMB")));
        		
        	}

        	return sReturnString;

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0){
        	
        		if (application.GBL_SESSONCHK == "E0001"){
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

        		this.fnc_Information(this.stInformation, this.dsTA_TOTALX.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_TOTALX.getCaseCount("dataset.getRowLevel(currow)==0"));
        				
        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.stInformation00, this.dsTA_ETAXUP.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.stInformation03, this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        		this.fn_DataCompare_TA_ETAXUP();
        		this.fn_DataCompare_TA_SLIPNT();

        // 		this.fnc_Message("TMM018", this.dsTA_ETAXUP.getCaseCount("dataset.getRowLevel(currow)==0"));
        // 		this.fnc_Message("TMM018", this.dsTA_SLIPNT.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "GetBranch") {

        		this.cmbSHRACCT_GUBN.set_index(0);

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRVATX_GUBN,dsSHRVATX_GUBN,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------------+
         |  전송내역, 전표내역 조회  |
         +------------------------------*/
        this.fn_Search1 = function (obj) {
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT dsTA_ETAXUP=dsTA_ETAXUP";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	this.grdTA_ETAXUP.setFocus();
        }

        /*------------------------+
         |  전체내역 ROW 변경시  |
         +-------------------------*/
        this.dsTA_TOTALX_onrowposchanged = function (obj,e) {

        	this.fnc_DatasetClear("dsTA_ETAXUP,dsTA_SLIPNT");
        	
        	this.fn_Search1();

        }

        /*------------+
         |  전표조회  |
         +-------------*/
        this.grdTA_SLIPNT_oncelldblclick = function (obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "DISP_NUMB") return;
        	
        	var sSlip_Numb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_NUMB");
        	var sSlip_Line = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, "SLIP_LINE");
        	if (this.fnc_Length(this.fnc_Trim(sSlip_Numb)) > 0) {
        		this.fnc_ViewSlipForm(sSlip_Numb, "REV", this.sUSERLAVEL, "", sSlip_Line); //NEW:직접입력, REV:수정, SHR:조회, SEM:반자동전표
        	}
        	
        }

        
        this.fn_DataCompare_TA_ETAXUP = function () {

        	for (var i = 0; i < this.dsTA_ETAXUP.rowcount; i++) {
        	
        		var sEtax_Date = this.dsTA_ETAXUP.getColumn(i, "ETAX_DATE");
        		var sSupp_Amnt = this.dsTA_ETAXUP.getColumn(i, "SUPP_AMNT");
        		var sVatx_Amnt = this.dsTA_ETAXUP.getColumn(i, "VATX_AMNT");
        		var sEtax_Apno = this.dsTA_ETAXUP.getColumn(i, "ETAX_APNO");
        		var sFlag_Ysno = this.dsTA_SLIPNT.findRowExpr("TRNS_DATE=='" + sEtax_Date + "' && SUPP_AMNT=='" + sSupp_Amnt + "' && VATX_AMNT=='" + sVatx_Amnt + "'");

        		this.dsTA_ETAXUP.set_enableevent(false);
        		this.dsTA_ETAXUP.set_updatecontrol(false);
        		this.dsTA_ETAXUP.setColumn(i, "FLAG_YSNO", sFlag_Ysno);
        		this.dsTA_ETAXUP.set_updatecontrol(true);
        		this.dsTA_ETAXUP.set_enableevent(true);
        		
        	}

        	this.grdTA_ETAXUP.setBandProperty("Body", "cellcolor", "expr: FLAG_YSNO < 0 ? 'red' : 'black'");
        	this.grdTA_ETAXUP.setBandProperty("Body", "cellcolor2", "expr: FLAG_YSNO < 0 ? 'red' : 'black'");
        	
        }

        
        this.fn_DataCompare_TA_SLIPNT = function () {
        	
        	for (var i = 0; i < this.dsTA_SLIPNT.rowcount; i++) {
        		var sTrns_Date = this.dsTA_SLIPNT.getColumn(i, "TRNS_DATE");
        		var sSupp_Amnt = this.dsTA_SLIPNT.getColumn(i, "SUPP_AMNT");
        		var sVatx_Amnt = this.dsTA_SLIPNT.getColumn(i, "VATX_AMNT");
        		var sEtax_Apno = this.dsTA_SLIPNT.getColumn(i, "ETAX_APNO");
        		var sFlag_Ysno = this.dsTA_ETAXUP.findRowExpr("ETAX_DATE=='" + sTrns_Date + "' && SUPP_AMNT=='" + sSupp_Amnt + "' && VATX_AMNT=='" + sVatx_Amnt + "'");
        		var sFlag_Numb = "";

        		// 매출
        		if (this.dsTA_SLIPNT.getColumn(i, "VATX_GUBN") == "FA200020") {
        			sFlag_Numb = this.dsTA_ETAXUP.findRowExpr("ETAX_APNO=='" + sEtax_Apno + "'");
        		}

        		this.dsTA_SLIPNT.set_enableevent(false);
        		this.dsTA_SLIPNT.set_updatecontrol(false);
        		this.dsTA_SLIPNT.setColumn(i, "FLAG_YSNO", sFlag_Ysno);
        		this.dsTA_SLIPNT.setColumn(i, "FLAG_NUMB", sFlag_Numb);
        		this.dsTA_SLIPNT.set_updatecontrol(true);
        		this.dsTA_SLIPNT.set_enableevent(true);
        	}

        	this.grdTA_SLIPNT.setBandProperty("Body", "cellcolor", "expr: FLAG_YSNO < 0 ? 'red' : (FLAG_NUMB < 0 ? 'blue' : 'black')");
        	this.grdTA_SLIPNT.setBandProperty("Body", "cellcolor2", "expr: FLAG_YSNO < 0 ? 'red' : (FLAG_NUMB < 0 ? 'blue' : 'black')");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_TOTALX.addEventHandler("onrowposchanged", this.dsTA_TOTALX_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdTA_TOTALX.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdTA_SLIPNT.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_oncelldblclick, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRVATX_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBASE_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBASE_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TXMB0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
