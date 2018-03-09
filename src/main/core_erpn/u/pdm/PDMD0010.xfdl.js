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
                this.set_name("PCMD0010");
                this.set_titletext("제작정산");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRCLAS_CODE</Col><Col id=\"CODEID\">CLAS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SUJUMH", this);
            obj._setContents("<ColumnInfo><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"SUJU_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PLPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PDPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PMPT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SUJUMD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"PREE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_QTYX\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_PRCE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"SUJU_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"SUJU_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSTAT_FLAG", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STAT_NAME\">전체</Col></Row><Row><Col id=\"STAT_FLAG\">SF01</Col><Col id=\"STAT_NAME\">의뢰</Col></Row><Row><Col id=\"STAT_FLAG\">SF02</Col><Col id=\"STAT_NAME\">완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_COMBO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLAS_TYPE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"COMB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SUJUMH_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EMPN\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_EMPN\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"SUJU_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"NESU_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"NUSU_RATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SUJUMD_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTI_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"SUJU_AMTX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdPD_SUJUMH", "absolute", "8", "154", null, null, "26", "379", this);
            obj.set_binddataset("dsPD_SUJUMH");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"80\"/><Column size=\"260\"/><Column size=\"66\"/><Column size=\"73\"/><Column size=\"100\"/><Column size=\"121\"/><Column size=\"102\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"제작번호\"/><Cell col=\"1\" rowspan=\"2\" style=\"background: ;\" text=\"제작명\"/><Cell col=\"2\" rowspan=\"2\" style=\"background: ;\" text=\"견적번호\"/><Cell col=\"3\" rowspan=\"2\" style=\"background: ;\" text=\"견적명\"/><Cell col=\"4\" rowspan=\"2\" style=\"background: ;\" text=\"견적일자\"/><Cell col=\"5\" rowspan=\"2\" style=\"background: ;\" text=\"견적금액\"/><Cell col=\"6\" rowspan=\"2\" style=\"background: ;\" text=\"청구금액\"/><Cell col=\"7\" rowspan=\"2\" style=\"background: ;\" text=\"정산금액\"/><Cell col=\"8\" rowspan=\"2\" style=\"background: ;\" text=\"진행상태\"/><Cell col=\"9\" rowspan=\"2\" style=\"background: ;\" text=\"광고주코드\"/><Cell col=\"10\" rowspan=\"2\" style=\"background: ;\" text=\"광고주명\"/><Cell col=\"11\" rowspan=\"2\" style=\"background: ;\" text=\"제작내용\"/><Cell col=\"12\" rowspan=\"2\" style=\"background: ;\" text=\"제작종류\"/><Cell col=\"13\" rowspan=\"2\" style=\"background: ;\" text=\"제작용도\"/><Cell col=\"14\" rowspan=\"2\" style=\"background: ;\" text=\"청구일자\"/><Cell col=\"15\" rowspan=\"2\" style=\"background: ;\" text=\"의뢰일\"/><Cell col=\"16\" rowspan=\"2\" style=\"background: ;\" text=\"완료 희망일\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NUMB\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NAME\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_NAME\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" text=\"bind:ESTI_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:ESTI_AMTX\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:DEND_AMTX\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"align:right;\" text=\"bind:SUJU_AMTX\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"none\" text=\"bind:STAT_FLAG\" combodisplay=\"edit\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_CODE\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_NAME\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"none\" text=\"bind:MEDA_CODE\" combodisplay=\"edit\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"none\" text=\"bind:HIGH_LEVL\" combodataset=\"dsPD_COMBO\" combocodecol=\"COMB_CODE\" combodatacol=\"COMB_NAME\" combodisplay=\"edit\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"none\" text=\"bind:USEX_TYPE\" combodisplay=\"edit\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DEND_DATE\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"none\" text=\"bind:REQU_DATE\"/><Cell col=\"16\" displaytype=\"normal\" edittype=\"none\" text=\"bind:COMP_DATE\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"3\" style=\"align: center;\" text=\"합계\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_AMTX&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;DEND_AMTX&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUJU_AMTX&quot;)\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_SUJUMD", "absolute", "7", null, null, "228", "26", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("19");
            obj.set_binddataset("dsPD_SUJUMD");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"견적일자\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"견적번호\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"제작번호\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적항목코드\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"대분류명\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"중분류명\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적항목명\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적명\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"제작내용\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"수량\"/><Cell col=\"11\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"단가\"/><Cell col=\"12\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"견적금액\"/><Cell col=\"13\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"청구금액\"/><Cell col=\"14\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"정산금액\"/><Cell col=\"15\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"제작사코드\"/><Cell col=\"16\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"제작사명\"/><Cell col=\"17\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"정산일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:ESTI_DATE\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PREE_CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NUMB\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ITEM_CODE\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:HIGH_NAME\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MIDD_NAME\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"text\" text=\"bind:SUBX_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"text\" text=\"bind:PREE_NAME\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:TYPE_QTYX\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ESTI_PRCE\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ESTI_AMTX\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:DEND_AMTX\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:SUJU_AMTX\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"none\" text=\"bind:OUTS_CODE\"/><Cell col=\"16\" displaytype=\"normal\" edittype=\"text\" text=\"bind:CUST_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"17\" displaytype=\"date\" edittype=\"date\" text=\"bind:SUJU_DATE\" calendardisplaynulltype=\"nulltext\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"7\" style=\"align: center;\" text=\"합계\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TYPE_QTYX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_PRCE&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;ESTI_AMTX&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;DEND_AMTX&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUJU_AMTX&quot;)\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "26", null, this);
            obj.set_taborder("66");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "271", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "87.28", "519", null, "25", "0.76", null, this);
            obj.set_taborder("109");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "10", "0", null, "29", "441", null, this);
            obj.set_taborder("111");
            obj.set_text("제작정산");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "825", "29", "24", null, this);
            obj.set_taborder("112");
            obj.set_text("홈 > 제작시스템>제작관리>제작정산>제작정산");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "579", "23", "25", null, this);
            obj.set_taborder("114");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "606", "0", "37", "60", null, null, this);
            obj.set_taborder("115");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("118");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "67", null, null, this);
            obj.set_taborder("119");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "406", "61", "8", "67", null, null, this);
            obj.set_taborder("121");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "645", "129", "81", "25", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchSTAT_FLAG", "absolute", "894", "97", "63", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_text("진행상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTAT_FLAG", "absolute", "962", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("135");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_innerdataset("@dsSTAT_FLAG");
            obj.set_datacolumn("STAT_NAME");
            obj.set_codecolumn("STAT_FLAG");
            obj.set_value("SF01");
            obj.set_text("의뢰");
            obj.set_index("1");

            obj = new Static("Static05", "absolute", "1.18", null, null, "15", "2.61", "0", this);
            obj.set_taborder("136");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox03", "absolute", "8", null, null, "91", "26", "273", this);
            obj.set_taborder("138");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "29", null, "67", "21", null, "308", this);
            obj.set_taborder("139");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "29", null, "67", "21", null, "334", this);
            obj.set_taborder("140");
            obj.set_text("광고주");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "317", null, "66", "21", null, "334", this);
            obj.set_taborder("141");
            obj.set_text("제작번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "317", null, "66", "21", null, "308", this);
            obj.set_taborder("142");
            obj.set_text("제작종류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "606", null, "75", "21", null, "334", this);
            obj.set_taborder("143");
            obj.set_text("제작명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "29", null, "69", "21", null, "282", this);
            obj.set_taborder("144");
            obj.set_text("청구일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "317", null, "66", "21", null, "282", this);
            obj.set_taborder("145");
            obj.set_text("의뢰일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "97", null, "150", "21", null, "334", this);
            obj.set_taborder("146");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("255");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_SUJUMH");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJOBN_NUMB", "absolute", "386", null, "150", "21", null, "334", this);
            obj.set_taborder("147");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsPD_SUJUMH");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJOBN_NAME", "absolute", "687", null, "150", "21", null, "334", this);
            obj.set_taborder("148");
            obj.set_inputmode("upper");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsPD_SUJUMH");
            this.addChild(obj.name, obj);

            obj = new Calendar("calREQU_DATE", "absolute", "386", null, "150", "21", null, "282", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPD_SUJUMH");
            obj.set_taborder("149");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static04", "absolute", "9", null, "31", "76", null, "282", this);
            obj.set_taborder("150");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "606", null, "75", "21", null, "308", this);
            obj.set_taborder("153");
            obj.set_text("제작용도");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "606", null, "75", "21", null, "282", this);
            obj.set_taborder("154");
            obj.set_text("완료희망일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCOMP_DATE", "absolute", "687", null, "150", "21", null, "282", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPD_SUJUMH");
            obj.set_taborder("155");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Calendar("calDEND_DATE", "absolute", "97", null, "150", "21", null, "282", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPD_SUJUMH");
            obj.set_taborder("156");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Combo("cmbMEDA_CODE", "absolute", "97", null, "150", "21", null, "308", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("157");
            obj.set_readonly("true");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_SUJUMH");

            obj = new Combo("cmbHIGH_LEVL", "absolute", "386", null, "150", "21", null, "308", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("158");
            obj.set_readonly("true");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_SUJUMH");
            obj.set_innerdataset("@dsPD_COMBO");
            obj.set_datacolumn("COMB_NAME");
            obj.set_codecolumn("COMB_CODE");

            obj = new Combo("cmbUSEX_TYPE", "absolute", "687", null, "150", "21", null, "308", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("159");
            obj.set_readonly("true");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_SUJUMH");

            obj = new Static("Static12", "absolute", "572", null, null, "30", "534", "243", this);
            obj.set_taborder("161");
            obj.set_text("h30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow", "absolute", null, null, "62", "21", "91", "247", this);
            obj.set_taborder("162");
            obj.set_text("행추가");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow", "absolute", null, null, "62", "21", "26", "247", this);
            obj.set_taborder("163");
            obj.set_text("행삭제");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("164");
            obj.set_text("견적일");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRESTI_DATE1", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("165");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "201", "71", "15", "21", null, null, this);
            obj.set_taborder("166");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRESTI_DATE2", "absolute", "217", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("167");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("imgSearchMEDA_CODE", "absolute", "28", "97", "70", "21", null, null, this);
            obj.set_taborder("168");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMEDA_CODE", "absolute", "96", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("169");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchHIGH_LEVL", "absolute", "346", "97", "62", "21", null, null, this);
            obj.set_taborder("170");
            obj.set_text("제작종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRHIGH_LEVL", "absolute", "413", "97", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("171");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("imgSearchSTAT_FLAG00", "absolute", "345", "71", "60", "21", null, null, this);
            obj.set_taborder("172");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "414", "71", "80", "21", null, null, this);
            obj.set_taborder("173");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "496", "71", "21", "21", null, null, this);
            obj.set_taborder("174");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "519", "71", "140", "21", null, null, this);
            obj.set_taborder("175");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "689", "71", "71", "21", null, null, this);
            obj.set_taborder("176");
            obj.set_text("제작명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NUMB", "absolute", "757", "71", "80", "21", null, null, this);
            obj.set_taborder("177");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRJOBN_NAME", "absolute", "839", "71", "21", "21", null, null, this);
            obj.set_taborder("178");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NAME", "absolute", "862", "71", "200", "21", null, null, this);
            obj.set_taborder("179");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchUSEX_TYPE", "absolute", "689", "97", "62", "21", null, null, this);
            obj.set_taborder("180");
            obj.set_text("제작용도");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_TYPE", "absolute", "757", "97", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("181");
            obj.set_displaynulltext("전체");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static07", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("183");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("185");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "572", null, null, "15", "534", "364", this);
            obj.set_taborder("186");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "8", null, "128", "21", null, "243", this);
            obj.set_taborder("187");
            obj.set_text("견적리스트");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "1161", "0", null, "717", "0", null, this);
            obj.set_taborder("188");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("edtSUJU_DATE", "absolute", null, null, "121", "21", "289", "247", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("189");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static10", "absolute", null, null, "70", "21", "410", "247", this);
            obj.set_taborder("190");
            obj.set_text("정산일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow00", "absolute", null, null, "89", "21", "194", "247", this);
            obj.set_taborder("191");
            obj.set_text("일괄 적용");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_imagealign("left");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작정산");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtCUST_NAME","binddataset","dsPD_SUJUMH","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtCUST_NAME","value","dsPD_SUJUMH","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtJOBN_NUMB","binddataset","dsPD_SUJUMH","JOBN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtJOBN_NUMB","value","dsPD_SUJUMH","JOBN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtJOBN_NAME","value","dsPD_SUJUMH","JOBN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtJOBN_NAME","binddataset","dsPD_SUJUMH","JOBN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","calREQU_DATE","value","dsPD_SUJUMH","REQU_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","calREQU_DATE","binddataset","dsPD_SUJUMH","REQU_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","calCOMP_DATE","value","dsPD_SUJUMH","COMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","calCOMP_DATE","binddataset","dsPD_SUJUMH","COMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","calDEND_DATE","value","dsPD_SUJUMH","DEND_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","calDEND_DATE","binddataset","dsPD_SUJUMH","DEND_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cmbMEDA_CODE","value","dsPD_SUJUMH","MEDA_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cmbMEDA_CODE","binddataset","dsPD_SUJUMH","MEDA_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cmbHIGH_LEVL","value","dsPD_SUJUMH","HIGH_LEVL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cmbHIGH_LEVL","binddataset","dsPD_SUJUMH","HIGH_LEVL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cmbUSEX_TYPE","value","dsPD_SUJUMH","USEX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cmbUSEX_TYPE","binddataset","dsPD_SUJUMH","USEX_TYPE");
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
        this.addIncludeScript("PDMD0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PDMD0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PDMD0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PDMD0010 제작 계약서 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.19		오세훈		Initial Created.
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFTTTTT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PDMD0010"; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

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
        	
        	//제작종류 콤보 데이터셋 가져오기
        	this.fn_getHigh_codeCombo();
        	
        	//최초 날짜세팅
        	this.calSHRESTI_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 )+'01');
        	this.calSHRESTI_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ) + this.fnc_GetLastDayOfMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))));
        	
        	this.edtSUJU_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ) + this.fnc_GetLastDayOfMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))))
        	
        	
        	this.fn_Search();
        } 

        /*----------------------------------+
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
        	this.fnc_DatasetClear("dsPD_SUJUMH");

        	//상단 계약서 데이터 조회
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_SUJUMH=dsPD_SUJUMH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_SUJUMH.setFocus();
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPD_SUJUMH.insertRow(this.dsPD_SUJUMH.rowposition + 1);
        	this.dsPD_SUJUMH.set_rowposition(iRow);
        	
        	this.dsPD_SUJUMH.setCellPos(this.fnc_GridColumnIndex(this.grdPD_CONTXH, 0));	

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsPD_SUJUMH.deleteRow(this.dsPD_SUJUMH.rowposition);
        	this.grdPD_SUJUMH.setFocus();
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
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	//제작정산에서 상단은 수정할 수 없기 때문에 이후 로직 없음 추후 사용자 요청시 진행
        	if(this.fnc_DatasetChangeCheck("dsPD_SUJUMH")){
        		var sMethodName = "SAVE00";
        		var sInDataSet  = "dsPD_SUJUMH=dsPD_SUJUMH:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_SUJUMD")){
        		var sMethodName = "SAVE01";
        		var sInDataSet  = "dsPD_SUJUMD=dsPD_SUJUMD:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	}
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	if (this.dsPD_SUJUMH.getRowCount() < 0) return this.fnc_Message("TMM011");
            if (this.dsPD_SUJUMH.rowposition < 0) return;

            this.fnc_DatasetClear("dsPD_SUJUMH_RPT");
            this.fnc_DatasetClear("dsPD_SUJUMD_RPT");
            

        	var reportfile 	= "/pdm/PDMD0010R01.jrf";
            var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/pdm/PDMD0010_PRINT00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsPD_SUJUMH_RPT=dsPD_SUJUMH_RPT dsPD_SUJUMD_RPT=dsPD_SUJUMD_RPT";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");

        }

        
        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e); //2016 06 22 변경
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
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if (this.fnc_DatasetChangeCheck("dsPD_SUJUMH")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_DatasetChangeCheck("dsPD_SUJUMD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsPD_SUJUMH.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	if(this.dsPD_SUJUMH.getColumn(this.dsPD_SUJUMH.rowposition,"STAT_FLAG") == "SF03"){
        		this.fnc_Message("TMM300", "상태가 완료인 건은 삭제할 수 없습니다.");
        		return false;
        	}
        	
        // 	var cnt = this.dsPD_SUJUMH.rowcount;
        // 	var chk = 0;
        // 	for(var i=0; i < cnt; i ++){
        // 		if(this.dsPD_SUJUMH.getColumn(i, "CHK") == "1"){
        // 			chk += 1;	
        // 		}
        // 	}
        // 	
        // 	if(chk ==0){alert("선택된 데이터가 없습니다."); return false;}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_SUJUMH.getColumn(this.dsPD_SUJUMH.rowposition, "JOBN_NAME")) + ") 제작건";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_SUJUMH") == false && this.fnc_DatasetChangeCheck("dsPD_SUJUMD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_SUJUMH.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPD_SUJUMH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        	}
        	
        	// 공통 Detail 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_SUJUMD.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPD_SUJUMD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SUJUMD.getColumn(i, "ESTI_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "견적일자", this.dsPD_SUJUMD, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SUJUMD.getColumn(i, "OUTS_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작사코드", this.dsPD_SUJUMD, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SUJUMD.getColumn(i, "CUST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작사명", this.dsPD_SUJUMD, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_SUJUMD.getColumn(i, "JOBN_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작번호", this.dsPD_SUJUMD, i, '', '');
        		}
        		
        	}
        	return true;
        }

        
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ESTI_DATE1=" + this.fnc_Quote(this.calSHRESTI_DATE1.value); //견적일1
        		sReturnString += " ESTI_DATE2=" + this.fnc_Quote(this.calSHRESTI_DATE2.value); //견적일2
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.edtSHRJOBN_NUMB.value); //제작번호
        		sReturnString += " JOBN_NAME=" + this.fnc_Quote(this.edtSHRJOBN_NAME.value); //제작명
        		sReturnString += " STAT_FLAG=" + this.fnc_Quote(this.cmbSHRSTAT_FLAG.value); //제작상태
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value); //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //광고주명
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.cmbSHRMEDA_CODE.value); //제작내용
        		sReturnString += " HIGH_LEVL=" + this.fnc_Quote(this.cmbSHRHIGH_LEVL.value); //제작종류
        		sReturnString += " USEX_TYPE=" + this.fnc_Quote(this.cmbSHRUSEX_TYPE.value); //제작용도
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " PREE_CODE=" + this.fnc_Quote(this.dsPD_SUJUMH.getColumn(this.dsPD_SUJUMH.rowposition, "PREE_CODE")); //헤더의 견적번호
        	
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	} else if (sKind == "SAVE01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "PRINT00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.dsPD_SUJUMH.getColumn(this.dsPD_SUJUMH.rowposition, "JOBN_NUMB")); //헤더의 제작번호
        		
        		
        	}
        	
        	return sReturnString;

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.alert("session error");
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

        		this.fnc_Information(this.stInformation, this.dsPD_SUJUMH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        		//조회 후 제작종류에 따른 제작내용 세팅
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		//this.fnc_Information(this.stInformation, this.dsPD_SUJUMH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SAVE01" || sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRMEDA_CODE,dsSHRCLAS_CODE,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        		
        		// 제작내용 조회용
        		//this.fnc_GetComboSearchMEDA_CODE();
        		// 제작용도 조회용
        		this.fnc_GetComboSearchUSEX_TYPE();
        		
        		
        		// 제작상태 그리드용
        		this.fnc_GetComboGrdSTAT_FLAG();
        		
        		// 제작내용 그리드용
        		this.fnc_GetComboGrdMEDA_CODE();

        		// 제작용도 그리드용
        		this.fnc_GetComboGrdUSEX_TYPE();
        		
        		
        		// 제작내용 입력용
        		this.fnc_GetComboMEDA_CODE();
        		// 제작용도 입력용
        		this.fnc_GetComboUSEX_TYPE();
        		
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        
         /*------------------------------------+
         |  null 체크
         +-------------------------------------*/
         this.fn_nullChk = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") sValue = "";
        	if (sValue == null) sValue = "";
        	if (("x" + sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")) sValue = "";
        	if (sValue.length == 0) sValue = "";
        	return sValue;
        }

        /*------------------------------------+
         |  제작번호 조회팝업
         +-------------------------------------*/
        this.fn_HelpDialogeJOBN_NUMB = function(obj,e)
        {
        	var arrParam = new Array();

        	if ((obj.name == 'imgHelpSHRJOBN_NAME') || (obj.name == 'edtSHRJOBN_NAME')) {

        		arrParam[0] = 'PDM0005';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRJOBN_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRJOBN_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRJOBN_NUMB,edtSHRJOBN_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        /*------------------------------------+
         |  광고주코드 조회팝업
         +-------------------------------------*/
        this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRCUST_NAME') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'PDM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        

        /*------------------------------------+
         |  그리드 진행상태 콤보
         +-------------------------------------*/
        this.fnc_GetComboGrdSTAT_FLAG = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDSTAT_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0002"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_SUJUMH,dsGRDSTAT_FLAG,STAT_FLAG";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        /*------------------------------------+
         |  그리드 제작내용 콤보 박스
         +-------------------------------------*/
        this.fnc_GetComboGrdMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_SUJUMH,dsGRDMEDA_CODE,MEDA_CODE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        		
        }

        

        /*------------------------------------+
         |  그리드 제작용도 콤보박스
         +-------------------------------------*/
        this.fnc_GetComboGrdUSEX_TYPE = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_SUJUMH,dsGRDUSEX_TYPE,USEX_TYPE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        /*------------------------------------+
         |  바인딩을 위한 제작종류 콤보
         +-------------------------------------*/
        this.fnc_GetComboMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbMEDA_CODE,dsMEDA_CODE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*------------------------------------+
         |  바인딩을 위한 제작용도 콤보
         +-------------------------------------*/
        this.fnc_GetComboUSEX_TYPE = function()
        {	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbUSEX_TYPE,dsUSEX_TYPE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*------------------------------------+
         |  제작종류 데이터셋 가져오기
         +-------------------------------------*/
        this.fn_getHigh_codeCombo = function (obj) {

        	this.fnc_DatasetClear("dsPD_COMBO");

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_COMBO=dsPD_COMBO";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------------+
         |  그리드에서 제작내용 변경시
         +-------------------------------------*/
        this.grdPD_SUJUMH_oncloseup = function(obj,e)
        {
        	this.grdPD_SUJUMH.showEditor(false);
        	
        	var sMEDA_CODE = this.dsPD_SUJUMH.getColumn(e.row, "MEDA_CODE");
        	var sHIGH_LEVL = this.dsPD_SUJUMH.getColumn(e.row, "HIGH_LEVL");
        	
        	
        	if (sMEDA_CODE != this.dsPD_COMBO.lookup("COMB_CODE", sHIGH_LEVL, "CLAS_TYPE"))
        	{
                this.dsPD_SUJUMH.setColumn(e.row, "HIGH_LEVL", "");
        	}
        	
        	this.dsPD_COMBO.filter("");
        	
        }

        //그리드 콤보 오픈
        this.grdPD_SUJUMH_ondropdown = function(obj,e)
        {
            var sMEDA_CODE = this.dsPD_SUJUMH.getColumn(e.row, "MEDA_CODE");

        	this.dsPD_COMBO.filter("CLAS_TYPE == '" + sMEDA_CODE + "'");
        }

        this.cmbMEDA_CODE_oncloseup = function(obj,e)
        {
        	var sMEDA_CODE = this.cmbMEDA_CODE.value;
        	this.dsPD_COMBO.filter("CLAS_TYPE == '" + sMEDA_CODE + "'");
        	
        	var iRow = this.dsPD_SUJUMH.rowposition;
        	var sMEDA_CODE = this.dsPD_SUJUMH.getColumn(iRow, "MEDA_CODE");
        	var sHIGH_LEVL = this.dsPD_SUJUMH.getColumn(iRow, "HIGH_LEVL");
        	
        	
        	if (sMEDA_CODE != this.dsPD_COMBO.lookup("COMB_CODE", sHIGH_LEVL, "CLAS_TYPE"))
        	{
                this.dsPD_SUJUMH.setColumn(iRow, "HIGH_LEVL", "");
        	}
        	this.dsPD_COMBO.filter("");
        }

        this.dsPD_SUJUMH_onrowposchanged = function(obj,e)
        {
        	if (this.dsPD_SUJUMH.getRowCount() < 1) {
        		this.fnc_DatasetClear('dsPD_SUJUMD');
        		return;
        	}
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear('dsPD_SUJUMD');

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_SUJUMD=dsPD_SUJUMD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_SUJUMD.setFocus();
        }

        this.btn_addRow_onclick = function(obj,e)
        {
        	var sCHKval = this.dsPD_SUJUMH.getColumn(this.dsPD_SUJUMH.rowposition, "JOBN_NUMB");
        	
        	if(this.fn_nullChk(sCHKval) == ""){
        		alert("상단의 데이터가 존재 하지 않습니다..");
        		return ;
        	}
        	
        	var iRow = this.dsPD_SUJUMD.insertRow(this.dsPD_SUJUMD.rowposition + 1);
        	this.dsPD_SUJUMD.set_rowposition(iRow);
        	
        	this.dsPD_SUJUMD.setColumn(iRow, "PREE_CODE", this.dsPD_SUJUMH.getColumn(this.dsPD_SUJUMH.rowposition, "PREE_CODE"));
        	this.dsPD_SUJUMD.setColumn(iRow, "ESTI_DATE", this.fnc_GetServerDateTime("DATE"));
        	this.dsPD_SUJUMD.setColumn(iRow, "JOBN_NUMB", this.dsPD_SUJUMH.getColumn(this.dsPD_SUJUMH.rowposition, "JOBN_NUMB"));
        	this.dsPD_SUJUMD.setColumn(iRow, "TYPE_QTYX", "1");
        	this.dsPD_SUJUMD.setColumn(iRow, "ESTI_PRCE", "0");
        	this.dsPD_SUJUMD.setColumn(iRow, "ESTI_AMTX", "0");
        	this.dsPD_SUJUMD.setColumn(iRow, "DEND_AMTX", "0");
        	this.dsPD_SUJUMD.setColumn(iRow, "SUJU_AMTX", "0");
        	
        	
        	this.dsPD_SUJUMD.setCellPos(this.fnc_GridColumnIndex(this.grdPD_SUJUMH, 0));
        }

        
        /*------------------------------------+
         |  하단 그리드 팝업
         +-------------------------------------*/
         
        this.fn_HelpDialoge = function(obj,sFromDs,sOldValue,sColumnID) 
        {
        	var arrParam = new Array();
        	

        	if (obj.name == "grdPD_SUJUMD") {

        		if ((this.fnc_getGridHelpColName(obj,sFromDs) == "SUBX_NAME") || (sColumnID == "SUBX_NAME")) {

        			arrParam[0] = "PCM0004";
        			arrParam[1] = this.cmbHIGH_LEVL.value;
        			arrParam[2] = "SUBX_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_SUJUMD";
        			arrParam[5] = "ITEM_CODE,HIGH_NAME,MIDD_NAME,SUBX_NAME";
        			arrParam[6] = "0,1,2,3";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        		
        		if ((this.fnc_getGridHelpColName(obj,sFromDs) == "CUST_NAME") || (sColumnID == "CUST_NAME")) {

        			arrParam[0] = "PDM0006";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_SUJUMD";
        			arrParam[5] = "OUTS_CODE,CUST_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        this.dsPD_SUJUMD_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "SUBX_NAME" ) this.fn_HelpDialoge(this.grdPD_SUJUMD, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.grdPD_SUJUMD, "YES", e.oldvalue, e.columnid);
        	
        	
        	if (e.columnid == "TYPE_QTYX" || e.columnid == "ESTI_PRCE" ){
        		var iRow = this.dsPD_SUJUMD.rowposition;
        		var iTYPE_QTYX = this.dsPD_SUJUMD.getColumn(iRow, "TYPE_QTYX");
        		var iESTI_PRCE = this.dsPD_SUJUMD.getColumn(iRow, "ESTI_PRCE");
        		var iESTI_AMTX = this.dsPD_SUJUMD.getColumn(iRow, "ESTI_AMTX");
        		
        		var iRETURN = iTYPE_QTYX * iESTI_PRCE;
        		
        		this.dsPD_SUJUMD.setColumn(iRow, "ESTI_AMTX", iRETURN);
        	}
        }

        this.btn_delete_onclick = function(obj,e)
        {
        		//선택된 데이터 삭제
        	if (!this.fn_DeleteCheckDtl()) return;
        	
        	for(var i = this.dsPD_SUJUMD.rowcount; i >= 0; i--){
        		if(this.dsPD_SUJUMD.getColumn(i, "CHK") == 1){
        			this.dsPD_SUJUMD.deleteRow(i);
        		}
        	}
        }

        
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheckDtl = function () {
        		if (this.dsPD_SUJUMD.getRowCount() < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		11111
        		var cnt = 0;
        		for(var i = 0; i < this.dsPD_SUJUMD.rowcount; i++){
        			if(this.dsPD_SUJUMD.getColumn(i, "CHK") == 1){
        				cnt += 1;
        			}
        		}
        		
        		if(cnt==0){
        			alert("선택된 데이터가 없습니다."); 
        			return  false;
        		}else if(cnt > 1){
        			cnt = cnt -1;
        			var msg = "  외"+ cnt + " 건";
        		}else{
        			var msg =  cnt + " 건";
        		}
        		
        		
        		var sQuestionText = "(" + this.fnc_Trim(this.dsPD_SUJUMD.getColumn(this.dsPD_SUJUMD.rowposition, "SUBX_NAME")) + ") 견적항목 "  + msg ;
        		return this.fnc_Message("TMM002", sQuestionText);
        }

        var isAllChecked = 0;
        this.grdPD_SUJUMD_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdPD_SUJUMD.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_SUJUMD.getRowCount(); i++) {
        			this.dsPD_SUJUMD.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdPD_SUJUMD.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        //조회를 위한 제작내용 콤보박스
        this.fnc_GetComboSearchMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRMEDA_CODE,dsSHRMEDA_CODE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        //조회를 위한 제작용도 콤보
        this.fnc_GetComboSearchUSEX_TYPE = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRUSEX_TYPE,dsSHRUSEX_TYPE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        //제작내용 콤보 선택시 제작 종류 선택
        this.cmbSHRMEDA_CODE_oncloseup = function(obj,e)
        {
        	this.fnc_GetComboSearchHIGH_LEVL();
        }

        
        //조회를 위한 제작종류
        this.fnc_GetComboSearchHIGH_LEVL = function()
        {
        		//제작내용 선택에 따른 대분류 선택
        		var SHRCLAS_TYPE = this.cmbSHRMEDA_CODE.value

        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRHIGH_LEVL"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = SHRCLAS_TYPE	   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRHIGH_LEVL,dsSHRHIGH_LEVL,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        this.btnAddRow00_onclick = function(obj,e)
        {

        	if(!this.fnc_Message("TMM140", "정산일자를 일괄 적용 하시겠습니까?")){return ; };
        	
        	var sSUJU_DATE = this.edtSUJU_DATE.value;
        	
        	for(var i =0; i < this.dsPD_SUJUMD.rowcount; i++){
        		this.dsPD_SUJUMD.setColumn(i, "SUJU_DATE", sSUJU_DATE);
        	}
        	
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_SUJUMH.addEventHandler("onrowposchanged", this.dsPD_SUJUMH_onrowposchanged, this);
            this.dsPD_SUJUMD.addEventHandler("oncolumnchanged", this.dsPD_SUJUMD_oncolumnchanged, this);
            this.dsPD_SUJUMH_RPT.addEventHandler("onrowposchanged", this.dsPD_SUJUMH_onrowposchanged, this);
            this.dsPD_SUJUMD_RPT.addEventHandler("oncolumnchanged", this.dsPD_SUJUMD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdPD_SUJUMH.addEventHandler("onheadclick", this.grdPD_CONTXH_onheadclick, this);
            this.grdPD_SUJUMH.addEventHandler("oncloseup", this.grdPD_SUJUMH_oncloseup, this);
            this.grdPD_SUJUMH.addEventHandler("ondropdown", this.grdPD_SUJUMH_ondropdown, this);
            this.grdPD_SUJUMD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPD_SUJUMD.addEventHandler("oncellclick", this.grdPD_CONTXD_oncellclick, this);
            this.grdPD_SUJUMD.addEventHandler("onheadclick", this.grdPD_SUJUMD_onheadclick, this);
            this.Static11.addEventHandler("onclick", this.Static11_onclick, this);
            this.imgSearchSTAT_FLAG.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRSTAT_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calREQU_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCOMP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calDEND_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbMEDA_CODE.addEventHandler("oncloseup", this.cmbMEDA_CODE_oncloseup, this);
            this.btnAddRow.addEventHandler("onclick", this.btn_addRow_onclick, this);
            this.btnDelRow.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.calSHRESTI_DATE1.addEventHandler("onchanged", this.fn_clearData, this);
            this.calSHRESTI_DATE1.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRESTI_DATE1.addEventHandler("ontextchange", this.fn_clearData, this);
            this.imgSearchMEDA_CODE.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRMEDA_CODE.addEventHandler("oncloseup", this.cmbSHRMEDA_CODE_oncloseup, this);
            this.cmbSHRMEDA_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSearchHIGH_LEVL.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRHIGH_LEVL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSearchSTAT_FLAG00.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRJOBN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRJOBN_NAME.addEventHandler("onclick", this.fn_HelpDialogeJOBN_NUMB, this);
            this.edtSHRJOBN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeJOBN_NUMB, this);
            this.imgSearchUSEX_TYPE.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRUSEX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnAddRow00.addEventHandler("onclick", this.btnAddRow00_onclick, this);

        };

        this.loadIncludeScript("PDMD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
